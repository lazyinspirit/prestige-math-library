---
id: ex-finite-two-state-reversible-markov-kernel
kind: example
title: A finite reversible two-state Markov kernel
status: published
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 2
deps:
  - def-probability-measure
  - def-measure-kernel-and-probability-kernel
  - def-general-state-reversibility-by-symmetric-flow-measure
  - thm-general-state-reversibility-implies-invariance
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Example

Let $\mathsf X=\{0,1\}$ with its full sigma-algebra. For $0<a,b\le1$, set
$$P=\begin{pmatrix}1-a&a\\ b&1-b\end{pmatrix},\qquad \pi(0)=\frac{b}{a+b},\quad \pi(1)=\frac{a}{a+b}.$$
Then $P$ is reversible with respect to $\pi$, and therefore $\pi$ is
invariant.

## Facts & Assumptions

**Given:** The two-state measurable space, parameters $0<a,b\le1$, and the
displayed matrix and probability vector.

[A1] $0<a,b\le1$.

[F1] Reversibility means symmetry of the joint flow measure
$\Lambda_{\pi,P}(C)=\int P(x,C_x)\,\pi(dx)$ on the product sigma-algebra.
([[def-general-state-reversibility-by-symmetric-flow-measure]])

[F2] If a probability kernel is reversible with respect to a probability
measure, that probability is invariant. ([[thm-general-state-reversibility-implies-invariance]])

[F3] A probability measure has total mass one. ([[def-probability-measure]])

[F4] A probability kernel has probability-measure rows and measurable event
evaluations. ([[def-measure-kernel-and-probability-kernel]])

## Verification

**Given:** $\mathsf X=\{0,1\}$, $0<a,b\le1$,
$P=\begin{pmatrix}1-a&a\\b&1-b\end{pmatrix}$, and
$\pi=(b/(a+b),a/(a+b))$.

**Proof technique:** Verify stochasticity and normalization, then compare the
four point masses of the joint flow with their coordinate transposes.

1.1 Every matrix entry is nonnegative and each row sums to one, so [F4] makes $P$ a probability kernel. Also $a+b>0$ and $\pi(0)+\pi(1)=(a+b)/(a+b)=1$, with both entries positive, so $\pi$ is a probability measure by [F3]. [A1, F3, F4, given, algebra]

2.1 Each diagonal flow atom is unchanged by swap, and the off-diagonal atoms agree since $\Lambda_{\pi,P}(\{0\}\times\{1\})=\pi(0)a=ab/(a+b)=\pi(1)b=\Lambda_{\pi,P}(\{1\}\times\{0\})$. The four atoms generate the finite product sigma-algebra, so $\Lambda_{\pi,P}=\Lambda_{\pi,P}^{\top}$ and $P$ is reversible by [F1]. [F1, step 1.1, given, algebra]

3.1 The general-state implication [F2] now gives $\pi P=\pi$, so $\pi$ is invariant. [F2, step 2.1] ∎

## Remarks

The boundary values $a=1$ or $b=1$ are allowed: their zero diagonal flow
atoms are still symmetric in step 2.1. The excluded case $a=b=0$ would make
$a+b$ vanish, while outside the stated range a row may fail to be stochastic.
No aperiodicity or convergence claim is made.
