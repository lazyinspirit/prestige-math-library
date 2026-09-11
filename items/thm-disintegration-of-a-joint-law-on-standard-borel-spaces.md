---
id: "thm-disintegration-of-a-joint-law-on-standard-borel-spaces"
kind: "theorem"
title: "Disintegration of a joint law on standard borel spaces"
deps: ["thm-existence-of-regular-conditional-distributions-for-standard-borel-targets", "lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable", "lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions", "lem-simultaneous-rational-conditional-distribution-function-versions", "thm-dynkin-pi-lambda", "thm-increasing-simple-approximation-of-a-nonnegative-measurable-function", "thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable", "def-axiom-of-choice"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: "Durrett, Probability: Theory and Examples, fifth edition"
      url: https://sites.math.duke.edu/~rtd/PTE/PTE5_011119.pdf
    - title: "Varadhan, Probability Theory, Chapter 4"
      url: https://math.nyu.edu/~varadhan/course/PROB.ch4.pdf
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

Assume AC. Let $\lambda$ be a probability on $(E\times T,\mathcal S\otimes\mathcal T)$, where E and T are standard-Borel spaces, and let $\beta(B)=\lambda(E\times B)$ be its second marginal. There is a probability kernel $K:(T,\mathcal T)\to(E,\mathcal S)$ such that

$$\lambda(A\times B)=\int_B K(y,A)\,\beta(dy)\quad(A\in\mathcal S,\ B\in\mathcal T).$$

It is unique as a kernel outside a single measurable $\beta$-null set. For every nonnegative product-measurable $f:E\times T\to[0,\infty]$,

$$\int f(x,y)\,\lambda(d(x,y))=\int_T\left(\int_E f(x,y)K(y,dx)\right)\beta(dy).$$

In particular this applies to the joint law of random elements $(X,Y)$, with $\beta=P_Y$; the direction is the law of X given Y.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the statement.

[F1] Under AC the first coordinate has an everywhere RCD given the second-coordinate sigma-algebra; the same repaired construction supplies a countable determining algebra on E. [[thm-existence-of-regular-conditional-distributions-for-standard-borel-targets]].

[F2] Such a kernel factors through Y under AC. [[lem-regular-conditional-kernels-factor-through-a-standard-borel-conditioning-variable]].

[F3] Two RCDs of the same standard-Borel variable agree as measures almost surely. [[lem-simultaneous-ae-uniqueness-of-regular-conditional-distributions]].

[F4] The repaired local integral interface supplies nonnegative additivity, monotone convergence, and bounded decreasing convergence. [[lem-simultaneous-rational-conditional-distribution-function-versions]].

[F5] A lambda-system containing rectangles contains the product sigma-algebra. [[thm-dynkin-pi-lambda]].

[F6] Prescribed nonnegative simple approximants increase pointwise to every nonnegative measurable test. [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]].

[F7] Pointwise limits of measurable functions are measurable. [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]].

[F8] AC supplies RCD existence, bin-lift factorization and the countable determining algebra. [[def-axiom-of-choice]].

## Proof

**Proof technique:** direct.

1.1 On $(E\times T,\mathcal S\otimes\mathcal T,\lambda)$ use the coordinate maps X and Y. Both targets are nonempty because the product carries a probability. By [F1], X has an RCD L given $\sigma(Y)$; by [F2] it factors as $K(Y,\cdot)$ for a probability kernel K. The RCD identity gives $\lambda(A\times B)=\int\mathbf1_B(Y)K(Y,A)\,d\lambda$. We prove the needed marginal substitution locally. For $g=\mathbf1_C$, $$\int g(Y)\,d\lambda=\lambda(Y^{-1}C)=\beta(C)=\int g\,d\beta.$$ Finite additivity from [F4] gives this for nonnegative simple g; apply [F6] and the local monotone convergence [F4] to get it for every nonnegative measurable g. Taking $g(y)=\mathbf1_B(y)K(y,A)$ yields the rectangle formula. [F1, F2, F4, F6, F8]

2.1 We also prove kernel-integral measurability locally. Let $\mathcal M$ be the product-measurable sets C for which every section $C_y$ belongs to $\mathcal S$ and $y\mapsto K(y,C_y)$ is measurable. It contains rectangles: each section is A or empty and its evaluation is $\mathbf1_B(y)K(y,A)$. It contains the whole product. Under complements, $(C^c)_y=(C_y)^c$ is measurable and its evaluation is $1-K(y,C_y)$. Under pairwise disjoint countable unions, the sections are measurable disjoint unions, while sectionwise countable additivity gives the evaluation as a pointwise limit of measurable partial sums, measurable by [F7]. Thus [F5] gives both properties for every product event. Let $\mathcal D$ be the product events satisfying the iterated indicator identity. It contains rectangles by step 1.1 and the whole product by normalization. Complements subtract from the finite total one. For disjoint $C_j\in\mathcal D$, sectionwise countable additivity and monotone convergence from [F4], first under $K(y,\cdot)$ and then under $\beta$, prove the union identity. Hence [F5] gives every product event. [step 1.1, F4, F5, F7]

3.1 Finite nonnegative combinations of step 2.1 give both measurability and the iterated formula for nonnegative simple f. For arbitrary nonnegative f, use the prescribed $s_n\uparrow f$ of [F6]. Apply the locally proved monotone convergence [F4] under $\lambda$, in every probability section K, and then under $\beta$. By [F7] the inner limit is measurable. These passages give the displayed formula, including value infinity, with no subtraction. [step 2.1, F4, F6, F7]

4.1 If K and J both satisfy the rectangle formula, their compositions with Y are RCDs of X given $\sigma(Y)$: the collection $\{Y^{-1}(B):B\in\mathcal T\}$ is already a sigma-algebra. By [F3], they agree as measures outside one $\lambda$-null set. Fix the countable determining algebra $\mathcal A$ supplied by [F1] and set $D=\bigcup_{A\in\mathcal A}\{y:K(y,A)\ne J(y,A)\}$. This set is measurable. Its preimage under Y lies in the exceptional set from [F3], so $\beta(D)=\lambda(Y^{-1}D)=0$. Off D the probabilities agree on $\mathcal A$, hence on every event by its locally proved determining property. If the joint law comes from actual X,Y, the rectangle calculation gives the same conditional-law assertion. [step 1.1, F1, F3, F8] ∎
