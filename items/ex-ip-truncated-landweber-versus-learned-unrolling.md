---
id: ex-ip-truncated-landweber-versus-learned-unrolling
kind: example
title: Exact truncated Landweber and a learned finite-depth update
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - alg-landweber-iteration-with-discrepancy-stopping
  - def-countable-choice
  - def-ip-unrolled-regularization-architecture
  - thm-continuous-preimages-of-borel-sets-are-borel
proof_strategy: direct
axiom_use: "Countable Choice is assumed only because the cited Landweber interface states it; the scalar calculations use no choice and do not assume the full Axiom of Choice."
generation:
  role: example
provenance:
  statement: ai-generated
  proof: ai-generated
sources:
  references:
    - title: "Vishal Monga, Yuelong Li, and Yonina C. Eldar, Algorithm Unrolling: Interpretable, Efficient Deep Learning for Signal and Image Processing"
      url: "https://arxiv.org/pdf/1912.10557"
      locator: "Full 27-page paper, §II-C 'Algorithm Unrolling in General' and §IV-E's 'Convergence and Optimality Analysis of LISTA' subsection: finite cascades, trained layer parameters, and additional LISTA convergence hypotheses."
    - title: "Christian Clason, Regularization of Inverse Problems, full lecture notes"
      url: "https://arxiv.org/pdf/2001.00617"
      locator: "Chapter 7, §§7.1–7.2, printed pp. 65–67 / PDF pp. 69–71: finite Landweber prefix, Lemma 7.1, Theorem 7.2, and exact-data convergence."
    - title: "Karol Gregor and Yann LeCun, Learning Fast Approximations of Sparse Coding"
      url: "https://icml.cc/2010/papers/449.pdf"
      locator: "Full 8-page paper, §3 and Algorithms 3–4: fixed-depth learned layers and separately trained parameters."
---

## Example

Assume Countable Choice. Let $X=Y=\mathbb R$, let $A x=ax$ for a fixed $a>0$, and let the exact datum be $y=ax^\dagger$ with $x^\dagger\ne0$ and noise bound $\delta=0$. Choose $N\ge1$ and $0<\omega a^2<1$. The exact Landweber prefix starts at $x_0=0$ and uses $x_{k+1}=x_k+\omega a(y-ax_k)$ through its finite budget $N$. For a learned finite-depth architecture with zero initialization, identity update blocks, and layer parameters $\widetilde\omega_0,\ldots,\widetilde\omega_{N-1}$, the updates are $\widetilde x_{k+1}=\widetilde x_k+\widetilde\omega_k a(y-a\widetilde x_k)$. If every $\widetilde\omega_k=\omega$, the two depth-$N$ outputs coincide; otherwise the learned output is the finite composition determined by its own layer parameters.

## Example references

[[alg-landweber-iteration-with-discrepancy-stopping|The exact Landweber recurrence and finite-budget status.]]

[Clason, full lecture notes, Chapter 7](https://arxiv.org/abs/2001.00617)

[Gregor and LeCun, fixed-depth learned sparse-code predictor](https://icml.cc/2010/papers/449.pdf)

[Monga, Li, and Eldar, finite algorithm-unrolling cascades](https://arxiv.org/abs/1912.10557)

[[def-ip-unrolled-regularization-architecture|The layer-parameter and data-consistency conventions.]]

## Facts & Assumptions

**Given:** Countable Choice, $a>0$, $x^\dagger\ne0$, $y=ax^\dagger$, noise bound $\delta=0$, $N\ge1$, $0<\omega a^2<1$, and the stated scalar exact and learned recurrences.

[F1] [[alg-landweber-iteration-with-discrepancy-stopping]]: under Countable Choice, the path starts at $x_0=0$, uses $x_{k+1}=x_k+\omega A^*(y-Ax_k)$, and the finite procedure returns at its first discrepancy stop or at budget $N$.

[F2] [[def-ip-unrolled-regularization-architecture]]: the deployed unrolled map is a finite composition of its declared update maps with fixed layer parameters.

[F3] [[thm-continuous-preimages-of-borel-sets-are-borel]]: a continuous map between topological spaces has Borel preimages of Borel sets.

[A1] [[def-countable-choice]]: the Countable Choice axiom is assumed for the published Landweber interface; the scalar recurrence calculation below makes no additional choice.

## Verification

**Proof technique:** direct.

1.1 The scalar map $A:\mathbb R\to\mathbb R$, $x\mapsto ax$, is nonzero and compact because $a>0$ and the space is finite-dimensional. For every $x$, $\|Ax\|_2=a|x|$, so $\|A\|=a$. For every $u,v\in\mathbb R$, $\langle Au,v\rangle=auv=\langle u,av\rangle$, hence $A^*$ is also multiplication by $a$. With [A1], $0<\omega a^2<1$ implies the supplier's condition $0<\omega<2/\|A\|^2$. The initialization and scalar update formulas are continuous, hence Borel by [F3], so they satisfy [F2]'s estimator-domain condition. Thus [F1] gives the exact recurrence and its finite-budget stopping rule for this instance. [A1, F1, F2, F3, given, algebra]

1.2 Substituting $y=ax^\dagger$ gives $x_{k+1}-x^\dagger=(1-\omega a^2)(x_k-x^\dagger)$. Starting from $x_0=0$, induction gives $x_k=x^\dagger[1-(1-\omega a^2)^k]$ for every $0\le k\le N$, in particular $x_N=x^\dagger[1-(1-\omega a^2)^N]$. Hence $|y-ax_k|=a|x^\dagger|(1-\omega a^2)^k>0$ for every such finite $k$. Since the noise bound is $\delta=0$, no earlier discrepancy stop occurs and the procedure returns this value at budget exhaustion. [F1, given, algebra]

2.1 For the learned architecture, $\widetilde x_0=0$ and its displayed recurrence give $\widetilde x_{k+1}-x^\dagger=(1-\widetilde\omega_k a^2)(\widetilde x_k-x^\dagger)$. Starting with $\widetilde x_0-x^\dagger=-x^\dagger$, repeated substitution yields $\widetilde x_N-x^\dagger=-x^\dagger\prod_{k=0}^{N-1}(1-\widetilde\omega_k a^2)$, or $\widetilde x_N=x^\dagger[1-\prod_{k=0}^{N-1}(1-\widetilde\omega_k a^2)]$. The fixed-parameter updates are continuous and Borel by [F3], so this is an admissible finite point map. If all layer parameters equal $\omega$, the formula is the exact Landweber value in step 1.2; for other parameters it is the finite composition specified by [F2]. [F2, F3, given, step 1.2, algebra] ∎
