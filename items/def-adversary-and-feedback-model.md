---
id: def-adversary-and-feedback-model
kind: definition
title: "Adversary and feedback models"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps: [def-online-decision-protocol, def-random-element-and-real-random-variable, def-probability-measure, def-expectation-of-a-nonnegative-or-integrable-random-variable]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Elad Hazan, Introduction to Online Convex Optimization, second edition"
      url: "https://arxiv.org/pdf/1909.05207"
      locator: "§1.1, PDF pp. 23–24: adversarial loss timing; §1.2.1, PDF pp. 24–25: the finite-expert full-information model."
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§4.1, PDF p. 64 / printed p. 56: fixed arm laws, reward-before-feedback timing, and nonanticipating action selection."
    - title: "Tengyu Ma, Lecture Notes for Machine Learning Theory, Chapter 11"
      url: "https://pages.cs.wisc.edu/~kandasamy/courses/25fall-cs861/lectures/tengyu_ma_notes.pdf"
      locator: "§§11.1–11.2.1, PDF pp. 147–150: full-information feedback and oblivious/adaptive timing."
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-20
---

## Definition

In an online decision protocol with horizon $T$, the environment and feedback model specifies how each loss function is chosen and what the learner observes after choosing $x_t$. **Full-information feedback** reveals the entire function $f_t$ (or, for $N$ experts, the full vector of their $N$ losses) after the round-$t$ choice. **Bandit feedback** reveals only the played loss $f_t(x_t)$ after that choice. An **oblivious adversary** fixes the whole sequence $(f_1,\ldots,f_T)$ before the learner's random choices are realized; it may know the learner's rule but not its realized private randomization. A **non-anticipating adaptive adversary** chooses $f_t$ from the history available before $x_t$ is chosen, so $f_t$ may depend on earlier choices and feedback but not on the current choice or the learner's current private randomization. A **reactive adversary** may choose $f_t$ after observing $x_t$, so its round-$t$ loss may depend on that current choice. These adversary classes have different timing and are not interchangeable; a guarantee established for one class is not asserted for another. For the stochastic reward model, let $\mathcal B(\mathbb R)$ be the smallest collection of subsets of $\mathbb R$ that contains every open interval and is closed under complements and countable unions; its members are the Borel sets. A **stochastic finite-arm reward environment** has $N\ge1$ arms, a fixed probability measure $P_i$ on $(\mathbb R,\mathcal B(\mathbb R))$ for each arm $i\in[N]:=\{1,\ldots,N\}$, and finite first moments $\int_{\mathbb R}|y|\,P_i(dy)<\infty$ with means $\mu_i:=\int_{\mathbb R} y\,P_i(dy)$. At each round the learner chooses a measurable arm $A_t$ with values in $[N]$ equipped with its full power set, before the reward $Y_t$ is drawn. The fixed-law condition means that, for every $i$, every event $B$ determined by the history before the reward and the chosen arm with $B\subseteq\{A_t=i\}$, and every $C\in\mathcal B(\mathbb R)$, $\mathbb P(B\cap\{Y_t\in C\})=\mathbb P(B)P_i(C)$. The model also states explicitly the conditional-mean identity used below: $\mathbb E[\mathbf1_B Y_t]=\mu_i\mathbb P(B)$ for every such $B$. Here $Y_t$ is an integrable real random variable, $\mathbf1_B$ is the indicator of event $B$, and the history-and-arm events are measurable in the common probability space. This stochastic reward model is distinct from adversarial loss models and supplies no regret guarantee by itself.

## Definition references

[[def-online-decision-protocol]]: the learner chooses before the current round's loss is observed; the horizon and action set are fixed.

[[def-random-element-and-real-random-variable]]: rewards are measurable real-valued random variables and finite-arm choices are measurable maps into the discrete arm set.

[[def-probability-measure]]: each arm law is a probability measure of total mass one, and events belong to its measurable space.

[[def-expectation-of-a-nonnegative-or-integrable-random-variable]]: an integrable reward's mean is its Lebesgue integral on the common probability space.

[Elad Hazan, *Introduction to Online Convex Optimization*, second edition](https://arxiv.org/pdf/1909.05207): §1.1, PDF pp. 23–24; §1.2.1, PDF pp. 24–25.

[Tor Lattimore and Csaba Szepesvári, *Bandit Algorithms*](https://tor-lattimore.com/downloads/book/book.pdf): §4.1, PDF p. 64 / printed p. 56.

[Tengyu Ma, *Lecture Notes for Machine Learning Theory*](https://pages.cs.wisc.edu/~kandasamy/courses/25fall-cs861/lectures/tengyu_ma_notes.pdf): §§11.1–11.2.1, PDF pp. 147–150.
