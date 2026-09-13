---
id: cex-weak-star-compact-does-not-imply-weak-star-sequentially-compact
kind: counterexample
title: Weak-star compact does not imply weak-star sequentially compact
status: draft
origin: pipeline
deps: ["thm-banach-alaoglu", "def-weak-star-convergence", "def-c-zero-and-ell-infinity"]
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
      locator: "§3.2.1, Example 3.31, p. 132, and §3.2.3, Exercise 3.37, p. 137"
proof_strategy: direct
---

## Statement

**Assume the ultrafilter lemma.**  The weak-star compact closed unit ball of
$(\ell^\infty)^*$ need not be weak-star sequentially compact.

## Facts & Assumptions

**Given:** The ultrafilter lemma and the real or complex Banach space $\ell^\infty$.

[F1] Under the ultrafilter lemma every closed dual unit ball is weak-star compact ([[thm-banach-alaoglu]]).

[F2] Weak-star convergence of a sequence means convergence of its evaluations at every predual vector ([[def-weak-star-convergence]]).

[F3] The elements of $\ell^\infty$ are bounded scalar sequences with the supremum norm ([[def-c-zero-and-ell-infinity]]).

## Proof

**Proof technique:** direct subsequence obstruction.

1.1 For each $n\in\mathbb N$ define $\Lambda_n\in(\ell^\infty)^*$ by $\Lambda_n(x)=x_n$.  Then $|\Lambda_n(x)|\leq\lVert x\rVert_\infty$ and equality holds at the $n$th coordinate vector, so $\lVert\Lambda_n\rVert=1$. [F3, given]

2.1 Consider any subsequence $(\Lambda_{n_k})$, with the indices $n_k$ strictly increasing.  Define $x\in\ell^\infty$ by $x_{n_k}=(-1)^k$ and $x_j=0$ off the range of $(n_k)$.  This is well defined because the indices are distinct and has $\lVert x\rVert_\infty=1$ by [F3]. [F3, step 1.1]

3.1 Its evaluations are $\Lambda_{n_k}(x)=(-1)^k$, which do not converge in $\mathbb R$ or $\mathbb C$.  By [F2], the chosen subsequence is not weak-star convergent.  Since the subsequence was arbitrary, $(\Lambda_n)$ has no weak-star convergent subsequence. [F2, step 2.1]

4.1 Nevertheless [F1] makes the closed unit ball containing this sequence weak-star compact under the ultrafilter lemma.  It is therefore a compact space with a sequence having no convergent subsequence, as claimed. [F1, step 1.1, step 3.1] ∎
