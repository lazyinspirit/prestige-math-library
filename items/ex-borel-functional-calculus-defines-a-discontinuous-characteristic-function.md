---
id: ex-borel-functional-calculus-defines-a-discontinuous-characteristic-function
kind: example
title: Borel functional calculus defines a discontinuous characteristic function
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-borel-functional-calculus-for-bounded-normal-operators, ex-pvm-of-a-multiplication-operator, def-borel-functional-calculus-for-a-bounded-normal-operator, def-l-p-space-as-a-quotient-by-null-functions, cor-spectral-projections-and-resolution-of-the-identity, def-orthogonality-and-orthogonal-complement, def-hilbert-space, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Theo Bühler and Dietmar Salamon, Functional Analysis, §5.6.2–5.7, printed pp.277–296"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Example

Assume AC. Let $H=L^2([0,1],\lambda)$ for Lebesgue measure $\lambda$ and let
$T=M_x$ be multiplication by the coordinate, $(Th)(x)=xh(x)$. Then $T$ is
bounded self-adjoint with $\sigma(T)=[0,1]$, and the Borel functional calculus
applied to the discontinuous function $\mathbf 1_{[0,1/2]}$ produces the
orthogonal projection onto the closed subspace
$$L^2\bigl([0,\tfrac12]\bigr)=\bigl\{h\in L^2([0,1]):\ h=0\ \text{a.e. on } (\tfrac12,1]\bigr\},$$
namely $\mathbf 1_{[0,1/2]}(T)=M_{\mathbf 1_{[0,1/2]}}$, whose range is that
subspace and whose kernel is $L^2((\tfrac12,1])$.

## Facts & Assumptions

[A1] The multiplication operator $M_x$ on $L^2([0,1])$ is bounded self-adjoint with $\sigma(M_x)=[0,1]$, spectral projections $E(B)=M_{\mathbf 1_{B\cap[0,1]}}$ and Borel calculus $f(M_x)=M_{f\circ x}$ for every bounded Borel $f$ on $[0,1]$ ([[ex-pvm-of-a-multiplication-operator]], [[def-borel-functional-calculus-for-a-bounded-normal-operator]]).

[A2] The indicator $\mathbf 1_{[0,1/2]}$ is bounded Borel on $[0,1]$ and satisfies $\mathbf 1_{[0,1/2]}^2=\mathbf 1_{[0,1/2]}=\overline{\mathbf 1_{[0,1/2]}}$, so its calculus value is an orthogonal projection equal to the spectral projection $E([0,1/2])$ ([[thm-borel-functional-calculus-for-bounded-normal-operators]], [[cor-spectral-projections-and-resolution-of-the-identity]]).

[A3] Elements of $L^2$ are equivalence classes modulo almost-everywhere equality; a class is supported in a Borel set $A$ when it has a representative vanishing almost everywhere off $A$, and $L^2(A)$ denotes this subspace of classes ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-orthogonality-and-orthogonal-complement]], [[def-hilbert-space]]).

[A4] AC is the declared choice hypothesis of this page from the construction item onward ([[def-axiom-of-choice]]).

## Verification

**Proof technique:** direct.

**Given:** Lebesgue measure on $[0,1]$, the operator $T=M_x$ and the function $\mathbf 1_{[0,1/2]}$.

1.1 The function $\mathbf 1_{[0,1/2]}$ is bounded Borel on $[0,1]=\sigma(T)$, with values in $\{0,1\}$ and equal to its own square and conjugate, so the calculus attaches to it an orthogonal projection. [A1, A2]

1.2 By the computation of the calculus for multiplication operators, $\mathbf 1_{[0,1/2]}(T)=M_{\mathbf 1_{[0,1/2]}\circ x}=M_{\mathbf 1_{[0,1/2]}}$, acting by $\bigl(M_{\mathbf 1_{[0,1/2]}}h\bigr)(x)=\mathbf 1_{[0,1/2]}(x)h(x)$. [A1]

2.1 Put $A=[0,1/2]$ and $P=M_{\mathbf 1_A}$. For every $h$, $Ph$ vanishes almost everywhere off $A$; conversely, if $g$ is supported in $A$, then $Pg=g$, so $\operatorname{ran}P=L^2(A)$. Also $Ph=0$ exactly when $h$ vanishes almost everywhere on $A$, so $\ker P=L^2((1/2,1])$. Both subspaces are closed: if $Ph_n=h_n\to h$, boundedness and $P^2=P$ give $Ph=\lim Ph_n=h$, while if $Ph_n=0$ and $h_n\to h$, then $Ph=\lim Ph_n=0$. [step 1.2, A1, A3]

3.1 The spectral projection $E([0,1/2])$ agrees with this multiplication by the pulled-back indicator, so the discontinuous characteristic function of the Borel set has produced a genuine orthogonal projection of the operator, not merely a continuous-calculus value. [step 1.2, step 2.1, A2, A4]

4.1 The Borel calculus of $T=M_x$ therefore assigns to the discontinuous function $\mathbf 1_{[0,1/2]}$ the orthogonal projection onto the classes supported in $[0,1/2]$, with kernel the classes supported in $(1/2,1]$. [step 3.1, A4] ∎
