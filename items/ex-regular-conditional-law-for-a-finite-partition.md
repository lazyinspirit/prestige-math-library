---
id: "ex-regular-conditional-law-for-a-finite-partition"
kind: "example"
title: "Regular conditional law for a finite partition"
deps: ["def-regular-conditional-distribution", "def-measure-kernel-and-probability-kernel"]
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

## Example

Let $H_1,\ldots,H_n$ be a finite measurable partition of a probability space, let $X:\Omega\to(E,\mathcal S)$ be measurable, and supply a fixed target probability $\rho$. For $\omega\in H_j$ put
$$K(\omega,A)=\begin{cases}P(H_j\cap\{X\in A\})/P(H_j),&P(H_j)>0,\\ \rho(A),&P(H_j)=0.\end{cases}$$

This is a regular conditional law of X given $\sigma(H_1,\ldots,H_n)$. For example, on $\Omega=\{1,2,3,4\}$ take point masses $(1/4,1/4,1/2,0)$, cells $\{1,2\},\{3\},\{4\}$, and $X=(0,1,1,2)$. With $\rho=\delta_0$, the conditional laws on the three cells are respectively $(\delta_0+\delta_1)/2$, $\delta_1$, and $\delta_0$.

## Facts & Assumptions

**Given:** The hypotheses and conventions in the example.

[F1] RCDs are probability kernels satisfying all conditioning-event identities. [[def-regular-conditional-distribution]].

[F2] A probability kernel has pointwise probability sections and measurable evaluations. [[def-measure-kernel-and-probability-kernel]].

## Verification

**Proof technique:** direct.

1.1 For a positive-mass cell, preimages under X preserve disjoint unions, so $A\mapsto P(H_j\cap X^{-1}(A))$ is countably additive, vanishes at the empty set and has total mass $P(H_j)$. Division by this positive finite mass gives a probability. On zero-mass cells the supplied $\rho$ is a probability. For each A the evaluation is constant on every cell and is therefore measurable for the finite partition sigma-algebra. Every event H in that sigma-algebra is a union of cells: the set of such unions is itself a sigma-algebra containing the cells. Thus $$\int_HK(\omega,A)\,dP=\sum_{j:H_j\subseteq H}P(H_j)K|_{H_j}(A)=\sum_{j:H_j\subseteq H}P(H_j\cap\{X\in A\})=P(H\cap\{X\in A\}).$$ Each zero cell contributes zero on both sides, and an empty cell can be ignored. This proves [F1]–[F2]. [F1, F2]

2.1 In the displayed finite model the cell masses are $1/2,1/2,0$. On the first cell, $P(X=0,H_1)=1/4$ and $P(X=1,H_1)=1/4$, so the conditional probabilities are $1/2$ and $1/2$. On the second cell, $P(X=1,H_2)=1/2$ gives probability one at 1. The third uses the specified filler despite $X(4)=2$, since its entire cell has mass zero. For instance testing A={1} and H=Omega gives $(1/2)(1/2)+(1/2)(1)+0(0)=3/4=P(X=1)$; testing H=$H_1$ gives $1/4$ on both sides. Hence the calculated kernels have exactly the claimed values. [step 1.1] ∎
