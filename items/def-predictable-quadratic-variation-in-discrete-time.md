---
id: "def-predictable-quadratic-variation-in-discrete-time"
kind: "definition"
title: "Predictable quadratic variation in discrete time"
deps: ["def-martingale-submartingale-and-supermartingale", "def-predictable-discrete-time-process", "def-conditional-expectation-as-an-ae-class", "thm-basic-algebra-and-order-properties-of-conditional-expectation", "thm-linearity-of-the-lebesgue-integral-on-l-one", "thm-arithmetic-and-lattice-operations-preserve-measurability", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
status: published
origin: "pipeline"
---

## Definition

Assume AC [[def-axiom-of-choice]]. For a real martingale $M$ [[def-martingale-submartingale-and-supermartingale]] with $E M_n^2<\infty$ at every time, its **predictable quadratic variation** is
$$\langle M\rangle_0=0,\qquad \langle M\rangle_n=\sum_{k=1}^nE[(M_k-M_{k-1})^2\mid\mathcal F_{k-1}].$$
Here conditional expectations denote the classes of [[def-conditional-expectation-as-an-ae-class]]. To obtain a process of versions, note first that $D_k=M_k-M_{k-1}$ has a measurable square [[thm-arithmetic-and-lattice-operations-preserve-measurability]] and
$$D_k^2\le2M_k^2+2M_{k-1}^2,\qquad ED_k^2<\infty.$$
Choose a finite real integrable $\mathcal F_{k-1}$-measurable version $b_k$ of $E[D_k^2\mid\mathcal F_{k-1}]$ for each $k$. Conditional positivity [[thm-basic-algebra-and-order-properties-of-conditional-expectation]] gives $b_k\ge0$ a.s. Replace $b_k$ by $\max(b_k,0)$: this is measurable for the same sigma-algebra and changes it only on its own measurable null set. Use these nonnegative versions in the finite sum.

For the finite-integral interface, augment every finite disjoint display of a nonnegative simple function by the complement with coefficient $0$. Intersections of two augmented displays partition the space and carry equal coefficients wherever nonempty, so finite additivity and $0\cdot(+\infty)=0$ prove representation independence. Common refinements give simple addition and monotonicity; scalar zero is direct and positive scalars are termwise. Taking suprema over simple minorants, using increasing simple approximations and the sets $\{f_j\ge cs\}$ for $0<c<1$, gives monotone convergence and nonnegative additivity. Positive/negative and real/imaginary decompositions give finite $L^1$ linearity. Substituting this repair at the foundation also validates the event-integral RN construction used by the cited conditional-expectation class and its positivity.

Every $b_k$ with $k\le n$ is $\mathcal F_{n-1}$-measurable; therefore $\langle M\rangle_n$ is predictable [[def-predictable-discrete-time-process]]. The locally reconstructed finite linearity gives integrability. The chosen version has nonnegative increments at every point, and any other measurable versions define the same class at each time. AC is used in the supplied RN existence and in selecting the countable family of versions.

The **optional quadratic sum** is instead
$$[M]_0=0,\qquad [M]_n=\sum_{k=1}^n(M_k-M_{k-1})^2.$$
It too is integrable, adapted and increasing by the same square bound and finite-sum argument. Its summands are only required to be $\mathcal F_k$-measurable; predictability or equality to $\langle M\rangle$ is not part of this definition. Neither sum includes a term $M_0^2$.
