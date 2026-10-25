---
id: "thm-doob-decomposition-of-an-integrable-adapted-process"
kind: "theorem"
title: "Doob decomposition of an integrable adapted process"
deps: ["def-compensator-and-doob-decomposition", "thm-martingales-and-martingale-differences-correspond", "def-conditional-expectation-as-an-ae-class", "thm-basic-algebra-and-order-properties-of-conditional-expectation", "lem-conditioning-a-known-variable-and-an-independent-variable", "thm-linearity-of-the-lebesgue-integral-on-l-one", "thm-arithmetic-and-lattice-operations-preserve-measurability", "thm-finite-and-countable-subadditivity-of-measures", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "van der Vaart, Martingales, Diffusions and Financial Mathematics"
      url: https://diamhomes.ewi.tudelft.nl/~avandervaart/books/stochint.pdf
status: published
origin: "pipeline"
---

## Statement

Assume AC. Every integrable adapted real $X$ has a unique Doob decomposition up to almost-sure equality at each time. It is given by $A_0=0$ and
$$A_n=\sum_{k=1}^nE[X_k-X_{k-1}\mid\mathcal F_{k-1}],\qquad M_n=X_n-A_n.$$
Two decompositions agree outside a single measurable null set at all times. The normalization is that of [[def-compensator-and-doob-decomposition]].

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] Under AC every integrable input has a measurable integrable conditional version. [[def-conditional-expectation-as-an-ae-class]].

[F2] Finite linear combinations remain integrable and their integrals are linear. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F3] Finite real arithmetic preserves measurability. [[thm-arithmetic-and-lattice-operations-preserve-measurability]].

[F4] Conditional expectation is linear, order preserving and expectation preserving. [[thm-basic-algebra-and-order-properties-of-conditional-expectation]].

[F5] An integrable variable measurable for the conditioning sigma-algebra conditions to itself. [[lem-conditioning-a-known-variable-and-an-independent-variable]].

[F6] Martingales have conditionally centered increments, and sums of such increments with an integrable known initial value are martingales. [[thm-martingales-and-martingale-differences-correspond]].

[F7] Countable measurable null unions are null. [[thm-finite-and-countable-subadditivity-of-measures]].

[F8] AC supplies the inherited conditional-expectation existence and any stated choice of versions. [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

1.1 First repair the integral foundation inherited by RN and conditional expectation. Augment any finite disjoint display of a nonnegative simple function by the complement with coefficient $0$. Intersections of two augmented displays partition the whole space and have equal coefficients wherever nonempty, so finite additivity and $0\cdot(+\infty)=0$ prove representation independence. Common refinements give simple monotonicity and additivity; handle scalar $0$ directly and positive scalars termwise. Supremum over simple minorants and the sets $\{f_j\ge cs\}$, $0<c<1$, give monotone convergence; increasing simple approximations then give nonnegative additivity. Positive/negative and real/imaginary decompositions give finite $L^1$ linearity. With these facts substituted at the affected foundation, the cited RN proof gives its density, and its event-integral existence and uniqueness argument gives the conditional-expectation class and algebra in [F1], [F4] and [F5]. Each $V_k=X_k-X_{k-1}$ is therefore real measurable and integrable, since $E|V_k|\le E|X_k|+E|X_{k-1}|$. AC permits choosing a finite real integrable $\mathcal F_{k-1}$-measurable version $a_k$ of its conditional expectation for every $k\ge1$. Set $A_0=0$, $A_n=\sum_{k=1}^na_k$, and $M_n=X_n-A_n$. For $k\le n$ one has $\mathcal F_{k-1}\subseteq\mathcal F_{n-1}$; therefore $A_n$ is predictable for $n\ge1$. Finite sums and differences show that $A$ is integrable and $M$ is adapted and integrable. [given, F1, F2, F3, F8, construct]

2.1 The increment $M_n-M_{n-1}=V_n-a_n$ has conditional expectation $a_n-a_n=0$ given $\mathcal F_{n-1}$, by linearity and known-variable conditioning. Since $M_0=X_0$ is integrable and $\mathcal F_0$-measurable, [F6] makes $M$ a martingale. The displayed decomposition holds pointwise for the chosen representatives. [F4, F5, F6, step 1.1]

3.1 If $X=\widetilde M+\widetilde A$ is another normalized decomposition, then $\widetilde A_n-\widetilde A_{n-1}$ is integrable and $\mathcal F_{n-1}$-measurable: for $n=1$ use $\widetilde A_0=0$, and for $n>1$ use predictability and nesting. Conditioning the decomposition increment and using the zero martingale drift gives $E[V_n\mid\mathcal F_{n-1}]=\widetilde A_n-\widetilde A_{n-1}$ a.s. Thus these increments equal $a_n$ a.s. Induction from zero gives $\widetilde A_n=A_n$ and then $\widetilde M_n=M_n$ a.s. for each $n$. The sets where either equality fails are ambient measurable null sets; their countable union is null by [F7]. Off that one set both entire sequences agree. No completeness of the filtration is used. [given, F4, F5, F6, F7, step 1.1, step 2.1] ∎
