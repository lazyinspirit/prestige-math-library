---
id: thm-systematic-gibbs-sweep-preserves-target
kind: theorem
title: A systematic Gibbs sweep preserves the target
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 4
deps:
  - alg-gibbs-scan-schemes
  - def-gibbs-full-conditional-kernel
  - alg-gibbs-block-update
  - def-gibbs-reversibility-for-a-markov-kernel
  - lem-gibbs-scan-schemes-are-probability-kernels
  - lem-gibbs-block-update-is-reversible-and-invariant
  - def-composition-of-probability-kernels
  - lem-kernel-composition-is-well-defined-and-associative
  - def-invariant-and-stationary-distribution-for-a-markov-kernel
  - def-probability-measure
  - lem-prior-and-model-kernel-define-joint-law
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
sources:
  references:
    - title: "Art B. Owen, Monte Carlo Theory, Methods and Examples, Chapter 12"
      url: "https://artowen.su.domains/mc/Ch-MCMC.pdf"
    - title: "Gareth O. Roberts and Jeffrey S. Rosenthal, General State Space Markov Chains and MCMC Algorithms"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
axiom_use: "No choice principle is used."
---

## Statement

Let $m\ge1$ and let $P_1,\ldots,P_m$ be exact block-update kernels for the same target probability $\pi$. Under the chronological composition convention of [[def-composition-of-probability-kernels]], the systematic full-sweep kernel $P_1\cdots P_m$ leaves $\pi$ invariant. It need not be reversible.

## Facts & Assumptions

**Given:** The target probability and finite list of exact block updates in the Statement.

[F1] Each exact block update leaves $\pi$ invariant. [[lem-gibbs-block-update-is-reversible-and-invariant]].

[F2] The systematic sweep is the chronological composition $P_1\cdots P_m$. [[alg-gibbs-scan-schemes]].

[F3] Kernel composition is defined by $(KL)(x,A)=\int L(y,A)K(x,dy)$ and is associative. [[def-composition-of-probability-kernels]], [[lem-kernel-composition-is-well-defined-and-associative]].

[F4] Invariance means equality of the measure-kernel product with $\pi$. [[def-invariant-and-stationary-distribution-for-a-markov-kernel]].

[F5] A probability measure and probability kernel have the iterated joint-law integral identity. [[lem-prior-and-model-kernel-define-joint-law]].

[F6] A supplied probability full-conditional kernel satisfies the block conditional event identity; the exact update refreshes that block while retaining the other coordinates. [[def-gibbs-full-conditional-kernel]], [[alg-gibbs-block-update]].

[F7] Reversibility requires equal two-time flow on every pair of measurable sets. [[def-gibbs-reversibility-for-a-markov-kernel]].

## Proof
**Given:** The hypotheses in the Statement and facts [F1]–[F5].

1.1 For two probability kernels $P,Q$, the iterated-kernel identity [F5] gives $\int (PQ)(x,A)\,\pi(dx)=\int Q(y,A)\,(\pi P)(dy)$. This follows by expanding $(PQ)(x,A)=\int Q(y,A)P(x,dy)$ and applying the joint-law iterated-integral identity to the bounded nonnegative function $Q(y,A)$. [F3, F5]

1.2 To prove that reversibility can fail, give $S=\{0,1\}^2$ its full sigma-algebra and target masses $\pi(0,0)=\pi(0,1)=\pi(1,0)=1/5$ and $\pi(1,1)=2/5$. Supply the $X$-conditional kernel $K_X(0,\{0\})=K_X(0,\{1\})=1/2$, $K_X(1,\{0\})=1/3$, $K_X(1,\{1\})=2/3$, and the $Y$-conditional kernel with these same respective probabilities when conditioning on $X=0$ or $X=1$. These are probability kernels because their nonnegative rows sum to one and every map between the finite spaces is measurable. For every $x,y$, $\pi(x,y)=\pi_Y(y)K_X(y,\{x\})=\pi_X(x)K_Y(x,\{y\})$ by the displayed masses. Summing these identities over arbitrary subsets verifies every conditional event identity in [F6]. They are therefore exact full-conditionals without invoking the downstream Gaussian example. [F6, construct, algebra]


2.1 Define $\mu_0=\pi$ and $\mu_k=\mu_{k-1}P_k$ for $1\le k\le m$. If $\mu_{k-1}=\pi$, then [F1] gives $\mu_k=\pi P_k=\pi$. Induction from $\mu_0=\pi$ yields $\mu_m=\pi$; associativity in [F3] identifies $\mu_m=\pi(P_1\cdots P_m)$, and [F4] calls this invariance. [F1, F2, F3, F4, step 1.1]

3.1 Let $P_X$ refresh $X$ and $P_Y$ refresh $Y$, using the kernels in step 1.2, and set $P=P_XP_Y$ in chronological order. By [F3] and [F6], $P((0,0),\{(0,1)\})=K_X(0,\{0\})K_Y(0,\{1\})=1/4$, whereas $P((0,1),\{(0,0)\})=K_X(1,\{0\})K_Y(0,\{0\})=1/6$. Thus the forward stationary flow between these singleton states is $1/20$ and its reverse is $1/30$. These unequal values violate [F7]. Step 2.1 nevertheless proves invariance for this sweep, since its two updates are exact by step 1.2. This independently supplies the nonreversibility witness and completes both claims. [F3, F6, F7, step 2.1, step 1.2, algebra] ∎
