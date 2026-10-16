---
id: lem-qa-18-absorbing-walk-discriminant-decomposition
kind: lemma
title: "Discriminant of the marked-state absorbing walk"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 4
deps:
  - def-qa-17-finite-stochastic-kernel
  - def-qa-17-szegedy-transition-isometry
  - thm-qa-17-discriminant-self-adjoint
  - def-qa-18-marked-set-and-stationary-mass
justified_by: []
proof_strategy: direct
axiom_use: "None; the proof is a finite entrywise calculation."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms, Chapter 18, §18.4"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
    - title: "Frédéric Magniez, Ashwin Nayak, Jérémie Roland, and Miklos Santha, Search via Quantum Walk, §2"
      url: "https://arxiv.org/pdf/quant-ph/0608026"
---
## Statement

Let $P$ be a finite symmetric row-stochastic matrix on $X$, and let $\mathcal M\subseteq X$, $U=X\setminus\mathcal M$. Define the row-stochastic absorbing matrix

$$P'_{xy}=\begin{cases}1,&x=y\in\mathcal M,\\0,&x\in\mathcal M,\ y\ne x,\\P_{xy},&x\in U.\end{cases}$$

For the general row-stochastic discriminant $D(P')_{xy}=\sqrt{P'_{xy}P'_{yx}}$ of [[def-qa-17-szegedy-transition-isometry]],

$$D(P')=P_{UU}\oplus I_{\mathcal M},$$

where $P_{UU}$ is the principal submatrix on $U$. In general $P'$ need not be symmetric or reversible.

## Facts & Assumptions

**Given:** A finite symmetric row-stochastic matrix $P$, a marked set $\mathcal M$, and the stated row convention.

[F1] [[def-qa-17-finite-stochastic-kernel]]: each row of $P$ is nonnegative and sums to $1$.

[F2] [[def-qa-17-szegedy-transition-isometry]]: the discriminant of a row-stochastic matrix has entries $D_{xy}=\sqrt{P_{xy}P_{yx}}$.

[F3] [[thm-qa-17-discriminant-self-adjoint]]: the discriminant entry formula holds for every finite row-stochastic kernel, without reversibility.

## Proof


1.1 If $x\in U$, row $x$ of $P'$ equals row $x$ of $P$ and sums to one by [F1]. If $x\in\mathcal M$, row $x$ has a single $1$ at $y=x$ and zeros elsewhere. Thus $P'$ is row-stochastic. [given, F1, construct]

2.1 For $x,y\in U$, $P'_{xy}=P_{xy}$ and $P'_{yx}=P_{yx}=P_{xy}$, so [F2] gives $D(P')_{xy}=P_{xy}$. If $x,y\in\mathcal M$, the product $P'_{xy}P'_{yx}$ is $1$ exactly when $x=y$ and $0$ otherwise, giving the identity block. If exactly one of $x,y$ is marked, the transition from the marked state to the unmarked state is zero, so $D(P')_{xy}=0$. These three disjoint cases give the displayed direct sum. [F2, F3, step 1.1, algebra] ∎

