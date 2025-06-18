  ### New Bug Bounty Program
  CoinPort recognizes the importance and value of security researchers efforts in helping keep our community safe. We encourage responsible disclosure of security vulnerabilities via our bug bounty program described on this page.
  
  <div class="centerImage">
    <img src="../images/bug_bounty.jpg" alt="bug bounty" class="center" width="350px">
  </div>

  ## Responsible investigation and reporting
  Responsible investigation and reporting includes, but isn't limited to, the following:
  <ul>
    <li>Do not violate the privacy of other members, destroy data, disrupt our services, etc.</li>
    <li>Only target your own accounts in the process of investigating the bug. Do not target, attempt to access, or otherwise disrupt the accounts of other members.</li>
    <li>Do not target our physical security measures, or attempt to use social engineering, spam, distributed denial of
      service (DDOS) attacks, etc.</li>
    <li>Initially report the bug only to us and not to anyone else.</li>
    <li>Give us a reasonable amount of time to fix the bug before disclosing it to anyone else, and give us adequate
      written warning before disclosing it to anyone else.</li>
    <li>In general, please investigate and report bugs in a way that makes a reasonable, good faith effort not to be
      disruptive or harmful to us or our members. Otherwise, your actions might be interpreted as an attack rather than
      an effort to be helpful.</li>
  </ul>

  ## Eligibility
  Generally speaking, any bug that poses a significant vulnerability, either to the security of our site or the
    integrity of our trading system, could be eligible for a reward. It is entirely at our discretion to decide whether
    a bug is significant enough to be eligible for a reward.
  Eligible bugs include, but not limited to:
  <ul>
    <li>Cross-site request forgery (CSRF)</li>
    <li>Cross-site scripting (XSS)</li>
    <li>Code injection</li>
    <li>Remote code execution</li>
    <li>Privilege escalation</li>
    <li>Authentication bypass</li>
    <li>Clickjacking</li>
    <li>Leakage of sensitive data</li>
    <li>Low energy requirement less ETH issuance is required to incentivize participation</li>
  </ul>

  Domains in scope: coinport.com.au, www.coinport.com.au, api.coinport.com.au.

  We generally do not accept reports for doc.coinport.com.au unless a bug is critical as the site is isolated from
    all member data and authentication.

  ## Ineligibility
  Generally speaking, any bug that poses a significant vulnerability, either to the security of our site or the integrity of our trading system, could be eligible for a reward. It is entirely at our discretion to decide whether a bug is significant enough to be eligible for a reward.
  Things that are not eligible for reward include:
  <ul>
    <li>Vulnerabilities on sites hosted by third parties (support.coinport.com.au, etc.) unless they lead to a vulnerability on our main domains.</li>
    <li>Vulnerabilities contingent on physical attack, social engineering, spamming, DDOS attack, etc.</li>
    <li>Vulnerabilities affecting outdated or unpatched browsers.</li>
    <li>Vulnerabilities in third-party applications that make use of CoinPort's API.</li>
    <li>Bugs that have not been responsibly investigated and reported.</li>
    <li>Bugs already known to us, or already reported by someone else (reward goes to the first reporter).</li>
    <li>Issues that aren't reproducible.</li>
    <li>Issues that we can't reasonably be expected to do anything about.</li>
  </ul>

  ## Reward
  The minimum reward for eligible bugs is the equivalent of AU$100 in bitcoin.
  Rewards over the minimum are at our discretion, but we will pay significantly more for particularly serious issues.

  Only one reward per bug.

  ## Severity levels

  <ul>
    <li>Critical
      <ul>
        <li>Remote code execution</li>
        <li>Ability to arbitrarily manipulate account balances</li>
      </ul>
    </li>
    <li>High
      <ul>
        <li>User authentication bypasses</li>
        <li>Privilege escalation allowing unauthorized access to sensitive data or funds</li>
      </ul>
    </li>
    <li>Medium
      <ul>
        <li>CSRF impacting non-critical settings</li>
        <li>User de-anonymization</li>
      </ul>
    </li>
    <li>Low
      <ul>
        <li>Leakage of lower sensitivity information, such as name or email address</li>
        <li>Potential phishing vector that CoinPort has the ability to mitigate</li>
      </ul>
    </li>
  </ul>

  ## How to report a bug
  Submit your bug report by email to: <a
      href="mailto:support@coinport.com.au?subject=Bug Bounty">support@coinport.com.au</a>
  Include as much information in your report as you can, including a description of the bug, its potential impact,
    and steps for reproducing it or proof of concept. Please allow five (5) business days for us to review.
  We thank all security researchers for taking the time to submit reports. We may only respond if your submission is
    eligible for a reward.

