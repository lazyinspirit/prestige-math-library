---
id: ex-position-operator-on-l-two-of-r
kind: example
title: "Position operator on L^2(R)"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [ex-unbounded-multiplication-operator-and-its-domain, thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus, lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group, def-strongly-continuous-one-parameter-unitary-group, def-axiom-of-choice, def-l-p-space-as-a-quotient-by-null-functions]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 2.2, position operator example, pp.66-69"
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Example 7.5 and Example 7.25, pp.29 and 34"
---

## Example

Assume the Axiom of Choice. On $H=L^2(\mathbb R)$ let $Q$ be the
multiplication operator by the coordinate function $x$, with domain
$D(Q)=\{f\in L^2(\mathbb R):\int_{\mathbb R}x^2|f(x)|^2dx<\infty\}$. Then $Q$
is self-adjoint with $\sigma(Q)=\mathbb R$, its spectral PVM is
$E(B)f=\mathbf 1_Bf$, and $U(t)f(x)=e^{itx}f(x)$ defines a strongly continuous
unitary group whose generator is $iQ$; in particular $D(Q)$ is a proper dense
subspace of $H$.

## Facts & Assumptions

[A1] The multiplication-operator example gives the domain, self-adjointness, spectral PVM $E(B)f=\mathbf 1_{m^{-1}(B)}f$, functional calculus and essential-range spectrum formula for $L^2(X,\mu)$ and real measurable $m$ ([[ex-unbounded-multiplication-operator-and-its-domain]]).

[A2] A self-adjoint operator $T$ generates the strongly continuous unitary group $e^{itT}$ computed by the Borel calculus, with generator $iT$ and derivative domain $D(T)$ ([[lem-self-adjoint-operator-generates-a-strongly-continuous-unitary-group]], [[def-strongly-continuous-one-parameter-unitary-group]]).

## Verification

**Proof technique:** direct.

**Given:** $H=L^2(\mathbb R)$ and the multiplication operator $Q$ by $x$.

1.1 $Q$ is the multiplication operator of the previous example for the measure space $(\mathbb R,\text{Borel},\lambda)$ and $m(x)=x$: the domain, the self-adjointness, the spectral PVM $E(B)f=\mathbf 1_Bf$ and the calculus $g(Q)f=(g\circ m)f$ are those results. [A1]

1.2 The essential range of $x$ is $\mathbb R$, since every interval $(t-\varepsilon,t+\varepsilon)$ has positive Lebesgue measure, so $\sigma(Q)=\mathbb R$. [A1]

1.3 By the generation theorem applied to the self-adjoint operator $Q$, the formula $U(t)=\int e^{itx}dE(x)$ is a strongly continuous unitary group with generator $iQ$, and the calculus of [A1] identifies $U(t)f(x)=e^{itx}f(x)$. [A1, A2]

1.4 $D(Q)$ is proper and dense: it is dense by the previous example, and the function $f(x)=(1+|x|)^{-1}$ for $|x|\ge1$, extended by $1$ on $[-1,1]$, lies in $L^2(\mathbb R)$ but not in $D(Q)$, because $\int_1^\infty x^2(1+x)^{-2}dx$ diverges. [A1]

2.1 The claims are steps 1.1, 1.2, 1.3 and 1.4. ∎
