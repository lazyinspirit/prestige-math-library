---
id: "ex-partial-sums-of-independent-centered-variables-are-a-martingale"
kind: "example"
title: "Partial sums of independent centered variables are a martingale"
deps: ["def-martingale-submartingale-and-supermartingale", "def-natural-filtration-of-a-process", "thm-generated-sigma-algebra-exists-and-is-minimal", "thm-grouping-independent-sigma-algebras", "def-independent-random-elements", "lem-conditioning-a-known-variable-and-an-independent-variable", "thm-basic-algebra-and-order-properties-of-conditional-expectation", "thm-linearity-of-the-lebesgue-integral-on-l-one", "thm-arithmetic-and-lattice-operations-preserve-measurability", "def-axiom-of-choice"]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
verification:
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

## Example

Assume AC. Let $(Y_k)_{k\ge1}$ be given independent real integrable variables with $EY_k=0$, and fix $c\in\mathbb R$. Then $S_0=c$ and $S_n=c+\sum_{k=1}^nY_k$ form a martingale for $\mathcal F_0=\{\varnothing,\Omega\}$ and $\mathcal F_n=\sigma(Y_1,\ldots,Y_n)$. This is also the natural filtration of the partial sums.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the example.

[F1] Generated sigma-algebras exist and are minimal. [[thm-generated-sigma-algebra-exists-and-is-minimal]].

[F2] Finite real arithmetic preserves measurability. [[thm-arithmetic-and-lattice-operations-preserve-measurability]].

[F3] Finite linear combinations remain integrable and their integrals are linear. [[thm-linearity-of-the-lebesgue-integral-on-l-one]].

[F4] The sigma-algebra of a finite past is independent of the next variable sigma-algebra. [[thm-grouping-independent-sigma-algebras]].

[F5] An integrable variable independent of a sigma-algebra has constant conditional mean equal to its expectation. [[lem-conditioning-a-known-variable-and-an-independent-variable]].

[F6] An integrable variable measurable for the conditioning sigma-algebra conditions to itself. [[lem-conditioning-a-known-variable-and-an-independent-variable]].

[F7] Conditional expectation is linear, order preserving and expectation preserving. [[thm-basic-algebra-and-order-properties-of-conditional-expectation]].

[F8] AC supplies the inherited conditional-expectation existence and any stated choice of versions. [[def-axiom-of-choice]].

## Verification

**Proof technique:** direct.

1.1 To justify the finite $L^1$ operations independently of the affected supplier proof, augment every finite disjoint simple display by the complement with coefficient $0$. Pairwise intersections of two augmented displays partition the whole space and carry equal coefficients; finite additivity and $0\cdot(+\infty)=0$ prove representation independence. Common refinements give simple addition and monotonicity; scalar zero is direct and positive scalars are termwise. Supremum over simple minorants, increasing simple approximation and the sets $\{f_j\ge cs\}$ for $0<c<1$ give monotone convergence and nonnegative additivity. Positive/negative and real/imaginary decompositions give finite $L^1$ linearity. This also repairs the integral base beneath the event identities defining the conditional classes used below. The generated sigma-algebras are nested because their generator families are nested. The finite sum $S_n$ is $\mathcal F_n$-measurable and $E|S_n|\le |c|+\sum_{k=1}^nE|Y_k|<\infty$. Independence means independence of the sigma-algebras $\sigma(Y_k)$ [[def-independent-random-elements]]. Group the first $n$ of these separately from $\sigma(Y_{n+1})$. Then $Y_{n+1}$ is independent of $\mathcal F_n$, so $E[Y_{n+1}\mid\mathcal F_n]=EY_{n+1}=0$. At $n=0$ independence of the trivial sigma-algebra follows directly from its two events. [given, F1, F2, F3, F4, F5, construct]

2.1 Conditioning the finite identity $S_{n+1}=S_n+Y_{n+1}$ gives $E[S_{n+1}\mid\mathcal F_n]=S_n+0=S_n$. Hence this is a martingale [[def-martingale-submartingale-and-supermartingale]]. Each $S_k$ for $k\le n$ is measurable for $\sigma(Y_1,\ldots,Y_n)$, while $Y_k=S_k-S_{k-1}$ is measurable for $\sigma(S_0,\ldots,S_n)$. Minimality in both directions proves equality of these sigma-algebras, including the trivial initial one, as required by [[def-natural-filtration-of-a-process]]. AC is inherited solely from the conditional classes; the independent sequence was given. [F1, F2, F6, F7, F8, step 1.1]

3.1 For a concrete model let $\Omega=\{-1,1\}^2$ with each point of mass $1/4$, $Y_1(u,v)=u$, $Y_2(u,v)=2v$, and $Y_k=0$ for $k\ge3$. The two coordinate events have product probabilities because their intersections have cardinality the product of their cardinalities; adding constant variables preserves this identity. Here $S_0=c$, $S_1=c+u$, and $S_n=c+u+2v$ for $n\ge2$. Averaging the two values in each fixed-u fibre gives $c+u$, and the first average is $c$. This displays the calculation without an identical-distribution assumption. [step 1.1, step 2.1] ∎
