---
id: cex-invariant-subspace-need-not-reduce-an-operator
kind: counterexample
title: "An invariant subspace need not reduce an operator"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-altered
deps: [def-invariant-subspace-and-induced-quotient-operator, def-orthogonality-and-orthogonal-complement, def-orthogonal-projection]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "Kostenko, Trace Ideals with Applications, §3.4"
      url: "https://users.fmf.uni-lj.si/kostenko/teach/IdealsNotes.pdf"
    - title: "van Neerven, Functional Analysis, §14.5.a"
      url: "https://fa.ewi.tudelft.nl/~neerven/FA/JvN-Functional_Analysis.pdf"
    - title: "Dyatlov–Zworski, Mathematical Theory of Scattering Resonances, App. B §§B.5–B.6"
      url: "https://math.mit.edu/~dyatlov/res/res_final.pdf"
generation:
  role: counterexample
pipeline_run: null
---

## Statement

On $\mathbb C^2$ with its standard inner product, let $T$ have matrix
$$T=\begin{pmatrix}1&1\\0&0\end{pmatrix}$$
in the standard orthonormal basis $e_1,e_2$, and let $M=\operatorname{span}\{e_1\}$.
Using the convention that $M$ reduces $T$ when both $M$ and $M^\perp$ are
$T$-invariant, $M$ is invariant but does not reduce $T$: its orthogonal
complement $M^\perp=\operatorname{span}\{e_2\}$ is not $T$-invariant. If
$Q$ is the orthogonal projection onto $M^\perp$, then
$QTQ=0$ even though $Te_2=e_1\ne0$.

## Facts & Assumptions

**Given:** The standard orthonormal basis $e_1,e_2$ of $\mathbb C^2$, the
displayed linear operator $T$, and $M=\operatorname{span}\{e_1\}$.

[A1] A subspace $W$ is $T$-invariant exactly when $T(W)\subseteq W$
([[def-invariant-subspace-and-induced-quotient-operator]]).

[A2] A vector is in $S^\perp$ exactly when it is orthogonal to every vector
of $S$ ([[def-orthogonality-and-orthogonal-complement]]).

[A3] For a finite-dimensional inner-product space and subspace $W$, the
orthogonal projection $P_Wx$ is the unique $W$-component of $x$ in
$V=W\oplus W^\perp$ ([[def-orthogonal-projection]]).

## Proof

**Proof technique:** direct.

**Given:** The data in the statement and facts [A1]–[A3].

1.1 Matrix multiplication gives $Te_1=e_1$ and $Te_2=e_1$, so for all $a,b\in\mathbb C$, $T(ae_1+be_2)=(a+b)e_1$. [algebra]

1.2 For $x=ae_1+be_2$, $be_2\in M^\perp$ and $ae_1\in(M^\perp)^\perp$, so the orthogonal decomposition in [A3] gives $Qx=P_{M^\perp}x=be_2$. [A2, A3]

2.1 Every $m=ae_1\in M$ satisfies $Tm=ae_1\in M$, so $T(M)\subseteq M$ and $M$ is invariant by [A1]. Since $e_2\in M^\perp$ but $Te_2=e_1\notin M^\perp$, we also have $T(M^\perp)\nsubseteq M^\perp$ by [A2] and step 1.1. [A1, A2, step 1.1]

3.1 For every $x=ae_1+be_2$, step 1.2 and step 1.1 give $QTQx=QT(be_2)=Q(be_1)=0$, while step 1.1 gives $Te_2=e_1\ne0$. Thus the orthogonal compression vanishes although $T$ has a nonzero block from $M^\perp$ into $M$; combining this with step 2.1 proves the stated counterexample. [step 1.1, step 1.2, step 2.1] ∎
