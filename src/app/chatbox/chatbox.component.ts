import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.css']
})
export class ChatboxComponent implements OnInit {
  open: boolean = false;
  categoriesShow: boolean = true;
  talkToHumanButton: boolean = false;
  talkToHuman: boolean = false;
  faqShow: boolean = true;
  historyShow: boolean = false;
  side: boolean = false;
  botShow: boolean = false;
  title: string = 'Please select a topic';
  sideTitle: string = 'Frequently Asked Questions';
  faqBody: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  categories = [
    'Transactions',
    'Statements',
    'Login',
    'Disputes',
    'Purchases',
    'Credit Card',
    'Security',
    'Complaints'
  ];
  histories = ['Transactions', 'Statements', 'Login'];
  faqs = [
    'How can I dispute a charge?',
    'How can I get an update on my disputes?',
    'What is the dispute process?',
    'How can I prevent more unexpected charges?',
    'How long will it take to dispute a charge?',
    'How can I dispute a charge?'
  ];

  agentMessages = [];
  clientMessages = [];
  selectedFaq: number;
  constructor() {}

  ngOnInit() {}

  toggleChat() {
    this.open = !this.open;
  }

  categoryPicked() {
    this.categoriesShow = false;
    this.side = true;
    this.botShow = true;
    this.title = 'Citi Bot | Disputes';
    setTimeout(() => {
      this.agentMessages.push('Herro!');
    }, 1500);

    setTimeout(() => {
      this.agentMessages.push("I'm a Citi chat bot, how can I help?");
    }, 3500);
  }

  faqPick(i) {
    this.selectedFaq = i;
  }

  submitMessage(value) {
    this.clientMessages.push(value.target.value);
    value.target.value = '';
    if (!this.historyShow) {
      setTimeout(() => {
        this.talkToHumanButton = true;
      }, 1000);
    }
  }

  talkToHumanPick() {
    this.talkToHumanButton = false;
    this.agentMessages = [];
    this.clientMessages = [];
    this.title = 'Josh | Transactions';
    this.faqShow = false;
    this.historyShow = true;
    this.sideTitle = 'Chat History';
    setTimeout(() => {
      this.agentMessages.push('Hello, my name is Josh!');
    }, 1500);

    setTimeout(() => {
      this.agentMessages.push('How can I help?');
    }, 3500);
  }
}
