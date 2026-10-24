---
id: cex-an-eigenvector-branch-cannot-stay-differentiable-through-a-symmetric-crossing
kind: counterexample
title: "At a symmetric crossing, an ordered eigenvector branch cannot remain differentiable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cex-an-ordered-eigenvector-branch-need-not-be-differentiable-through-a-crossing]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Alan Edelman and Steven G. Johnson, Matrix Calculus for Machine Learning and Beyond"
      url: "https://ocw.mit.edu/courses/18-s096-matrix-calculus-for-machine-learning-and-beyond-january-iap-2023/mit18_s096iap23_lec_full.pdf"
---

## Statement refuted

Across a symmetric eigenvalue crossing, one can keep the ordered eigenvector
branch differentiable by a clever normalization.

The family

$$A(t)=\begin{pmatrix}t&0\\0&-t\end{pmatrix}$$

shows that no normalization can fix the fact that the top eigendirection swaps
from $\operatorname{span}\{e_2\}$ to $\operatorname{span}\{e_1\}$ at $t=0$.

## Facts & Assumptions

**Given:** The symmetric crossing family $A(t)=\begin{pmatrix}t&0\\0&-t\end{pmatrix}$.

[L1] An ordered eigenvector branch need not be differentiable through a crossing ([[cex-an-ordered-eigenvector-branch-need-not-be-differentiable-through-a-crossing]]).

## Counterexample
**Proof technique:** direct.

1.1 For $t<0$, the larger eigenvalue is $-t$ with eigendirection $\operatorname{span}\{e_2\}$, while for $t>0$ the larger eigenvalue is $t$ with eigendirection $\operatorname{span}\{e_1\}$. [algebra]

2.1 Any normalization still has to represent those two different eigendirections on the two sides of the crossing, so the ordered branch cannot be continuous or differentiable through $t=0$. This is exactly the phenomenon recorded in [L1]. [L1, step 1.1] ∎

## Remarks

The two straight lines below are the eigenvalues attached to the fixed
coordinate eigendirections. The thick upper halves form the ordered largest
eigenvalue $|t|$; their labels identify its eigenspace on each side. At $t=0$,
$A(0)=0$ and the eigenspace for the double eigenvalue is all of $\mathbb{R}^2$,
so there is no unique top eigendirection at the crossing. The proof above is
independent of this illustration.

```tikz
\begin{tikzpicture}[scale=1.2]
  \draw[->] (-3,0) -- (3,0) node[right] {$t$};
  \draw[->] (0,-2.4) -- (0,2.7) node[above] {$\lambda$};
  \draw[thin,gray] (-2.1,-2.1) -- (2.1,2.1);
  \draw[thin,gray] (-2.1,2.1) -- (2.1,-2.1);
  \draw[very thick,blue] (-2.1,2.1) -- (0,0) -- (2.1,2.1);
  \node[above] at (-1.7,2.3) {$t<0:\quad -t,\ \mathrm{span}\{e_2\}$};
  \node[above] at (1.7,2.3) {$t>0:\quad t,\ \mathrm{span}\{e_1\}$};
  \node[left] at (-2.1,-2.1) {$\lambda=t$};
  \node[right] at (2.1,-2.1) {$\lambda=-t$};
  \fill (0,0) circle (2pt);
  \node[below right] at (0,0) {$0$};
  \node[below] at (0,-2.7) {$t=0:\quad \lambda=0\ (\mathrm{double}),\ E_0=\mathbb{R}^2$};
\end{tikzpicture}
```
