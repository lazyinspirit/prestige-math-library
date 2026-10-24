---
id: cor-uniqueness-of-the-stationary-distribution-for-an-irreducible-positive-recurrent-chain
kind: corollary
title: "Uniqueness of the stationary law for an irreducible positive-recurrent chain"
status: published
origin: pipeline
landmark: false
deps:
  - def-axiom-of-choice
  - thm-kac-return-time-formula-for-a-state
  - thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains
  - thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-10-02
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition, §5.5–5.6, uniqueness of the stationary distribution"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Levin–Peres–Wilmer, Markov Chains and Mixing Times, second edition, §21.3 and Appendix C.1"
      url: https://pages.uoregon.edu/dlevin/MARKOV/mcmt2e.pdf
---

## Statement

Assume AC ([[def-axiom-of-choice]]). Let $p$ be an irreducible positive-recurrent
transition matrix on a nonempty countable state space $E$. Then $p$ has exactly
one invariant probability distribution $\pi$
([[thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains]]).
In particular

$$\pi(x)=\frac1{\mathbb E_xT_x^+}\qquad(x\in E),$$

by [[thm-kac-return-time-formula-for-a-state]].

## Facts & Assumptions

**Given:** AC, an irreducible positive-recurrent transition matrix $p$ on a nonempty countable state space $E$.

[A1] Every family of nonempty sets has a choice function; AC is assumed and is used through the chain-law suppliers [F1] and [F2]. ([[def-axiom-of-choice]])

[F1] Assume AC. For an irreducible countable chain, some state positive recurrent, every state positive recurrent, and existence of an invariant probability are equivalent; if $b$ is positive recurrent then $\mu_b/\mathbb E_bT_b^+$ is an invariant probability. ([[thm-positive-recurrence-and-stationary-probability-for-irreducible-countable-chains]])

[F2] Assume AC. For an irreducible countable chain with invariant probability $\pi$ and any state $b$: $\pi(b)>0$ and $\mathbb E_bT_b^+=1/\pi(b)$. ([[thm-kac-return-time-formula-for-a-state]])

[F3] Every measure on an at most countable discrete space is determined by its singleton masses: $\mu(E')=\sum_{x\in E'}\mu(\{x\})$ for every $E'\subseteq E$. ([[thm-measures-on-countable-discrete-spaces-are-weighted-dirac-sums]])

## Proof

**Given:** AC, an irreducible positive-recurrent $p$ on nonempty countable $E$.

**Proof technique:** existence from the positive-recurrence equivalence, then compare two invariant probabilities through the statewise Kac identity.

1.1 Existence: since $p$ is irreducible and positive recurrent, [F1] supplies an invariant probability $\pi$ for $p$. [F1, given]

1.2 Uniqueness: let $\pi$ and $\rho$ be invariant probabilities. Fix $x\in E$; the Kac identity [F2] applied to $\pi$ gives $\pi(x)=1/\mathbb E_xT_x^+$, and applied to $\rho$ gives $\rho(x)=1/\mathbb E_xT_x^+$, the denominator being the same positive finite number because $\mathbb E_xT_x^+$ depends only on the chain and the state. Hence $\pi(x)=\rho(x)$ for every $x\in E$. [F2, given]

2.1 Two probability measures on the countable discrete space $E$ with equal singleton masses are equal: by [F3] both assign to every $E'\subseteq E$ the value $\sum_{x\in E'}\pi(\{x\})$, the same series. Hence $\pi=\rho$, and the invariant probability is unique. [F3, step 1.2, given]

3.1 Combining steps 1.1 and 2.1, $p$ has exactly one invariant probability, and step 1.2 exhibits it as $\pi(x)=1/\mathbb E_xT_x^+$. [step 1.1, step 1.2, step 2.1, given]

4.1 Boundary and axiom cases: aperiodicity is never used, so the corollary covers periodic positive-recurrent chains; a reducible chain may have many invariant probabilities, such as the identity matrix on two states where every mixture of the two absorbing laws is invariant, and the irreducibility hypothesis is used in [F1] and in the positivity statement of [F2]; a null-recurrent chain has no invariant probability at all by [F1], so uniqueness is then vacuous rather than false; an empty state space carries no probability law; the equality $\pi=\rho$ is checked at every singleton, which is exactly the determined family of [F3]; and AC [A1] enters only through the chain-law suppliers of [F1] and [F2]. [A1, F1, F2, F3, step 2.1, given] ∎
