---
id: ex-exp4-context-specific-expert-class
kind: example
title: A context-specific expert class with no shared policy structure
status: published
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 7
deps:
  - def-contextual-bandit-protocol
  - alg-exp4
  - thm-exp4-expected-regret
  - thm-natural-logarithm-laws
justified_by: []
proof_strategy: direct
axiom_use: No choice axiom is used; the context, action, and expert sets are finite.
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "Tor Lattimore and Csaba Szepesvári, Bandit Algorithms"
      url: "https://tor-lattimore.com/downloads/book/book.pdf"
      locator: "§18.4 finite-context example, PDF p. 240 / printed p. 231; the explicit counting and logarithm calculation are supplied here."
---

## Example

Let $n\ge1$ be an integer, let $\mathcal C$ be a nonempty finite context set of size $c$, and let $k>1$ be an integer number of actions. Fix a context sequence $c_1,\ldots,c_n\in\mathcal C$ and reward vectors $x_t\in[0,1]^k$ for $t\in[n]$, all before learner randomization. Take as experts every function $\phi:\mathcal C\to[k]$, with advice row $E(t)_{\phi,i}=\mathbf1\{\phi(c_t)=i\}$. There are $M=k^c$ such experts and no constraint links the action assigned to one context to the action assigned to another. With learning rate $\eta=\sqrt{2\log(k^c)/(nk)}$, Exp4's expected regret against this class is at most $\sqrt{2nkc\log k}$.

## Example references

[[def-contextual-bandit-protocol|Contextual bandit protocol]]: expert advice rows and fixed oblivious context/reward sequences use this protocol.

[[alg-exp4|Exp4 algorithm]]: each deterministic policy map supplies one advice row at the observed context.

[[thm-exp4-expected-regret|Expected-regret theorem]]: the general finite-expert bound applies to the $k^c$ policy maps.

[[thm-natural-logarithm-laws|Natural-logarithm product law]]: $\log(k^c)=c\log k$.

## Facts & Assumptions

**Given:** $n\ge1$, a finite nonempty context set $\mathcal C$ with $|\mathcal C|=c$, a fixed oblivious context sequence, fixed oblivious reward vectors $x_t\in[0,1]^k$ for $t\in[n]$, $k>1$, and the expert class of all maps $\phi:\mathcal C\to[k]$.

[F1] [[def-contextual-bandit-protocol]]: the theorem applies to deterministic advice matrices fixed before learner randomization, with each expert row a probability vector.

[F2] [[thm-exp4-expected-regret]]: with $M>1$ experts, horizon $n\ge1$, $k>1$, and its tuned learning rate, $R_n\le\sqrt{2nk\log M}$.

[F3] [[thm-natural-logarithm-laws]]: for positive $a,b$, $\log(ab)=\log a+\log b$.

## Verification

1.1 For each map $\phi$ and each round $t$, exactly one indicator $\mathbf1\{\phi(c_t)=i\}$ equals one, so its advice row is a probability vector. A map chooses one of $k$ actions independently at each of the $c$ contexts; therefore there are exactly $M=k^c$ experts. The fixed context sequence makes the resulting advice sequence oblivious. [F1, given, construct, algebra]

2.1 Since $c\ge1$ and $k>1$, $M=k^c>1$, so [F2] applies and gives $R_n\le\sqrt{2nk\log(k^c)}$. Repeated use of [F3] gives $\log(k^c)=c\log k$, hence $R_n\le\sqrt{2nkc\log k}$. This is a finite-sequence regret bound; it asserts no stochastic contextual generalization. [F2, F3, step 1.1, algebra] ∎
