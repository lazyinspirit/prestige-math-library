---
id: ex-unbounded-multiplication-operator-and-its-domain
kind: example
title: "Unbounded multiplication operators: domain, spectral measure and spectrum"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus, def-l-p-space-as-a-quotient-by-null-functions, def-projection-valued-measure, def-axiom-of-choice, thm-dominated-convergence, def-spectrum-and-resolvent-of-a-bounded-operator, thm-pvm-integral-is-a-star-homomorphism, thm-bounded-borel-pvm-integral]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Dana P. Williams, Lecture Notes on the Spectral Theorem"
      url: "https://www.math.dartmouth.edu/~dana/bookspapers/ln-spec-thm.pdf"
      locator: "Examples 7.5, 7.7 and 7.25, pp.29-34"
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 2.2, multiplication-operator examples, pp.66-69"
---

## Example

Assume the Axiom of Choice. Let $(X,\Sigma,\mu)$ be a $\sigma$-finite measure
space, let $m:X\to\mathbb R$ be measurable and finite $\mu$-almost everywhere,
and on the Hilbert space $H=L^2(X,\mu)$
([[def-l-p-space-as-a-quotient-by-null-functions]]) put
$$D(M_m)=\Bigl\{f\in L^2(X,\mu):\int_X|m|^2|f|^2\,d\mu<\infty\Bigr\},\qquad M_mf=mf .$$
Then $M_m$ is self-adjoint; its spectral projection valued measure is
$E(B)=M_{\mathbf 1_{m^{-1}(B)}}$; its functional calculus is
$g(M_m)=M_{g\circ m}$ on the natural domain; and
$\sigma(M_m)$ equals the essential range
$\{t\in\mathbb R:\mu(m^{-1}(t-\varepsilon,t+\varepsilon))>0$ for every
$\varepsilon>0\}$.

## Facts & Assumptions

[A1] Truncation with the sets $\{|m|\le n\}$ and dominated convergence describe the $L^2$ closure of functions with finite $\int|m|^2|f|^2$ ([[def-l-p-space-as-a-quotient-by-null-functions]], [[thm-dominated-convergence]]).

[A2] For bounded Borel $h$ the operator $\Phi_E(h)$ of the bounded PVM integral is the multiplication operator by $h\circ m$; the maps $B\mapsto M_{\mathbf 1_{m^{-1}(B)}}$ are orthogonal projections with $E(B)E(C)=E(B\cap C)$ and strong countable additivity ([[thm-bounded-borel-pvm-integral]], [[thm-pvm-integral-is-a-star-homomorphism]], [[def-projection-valued-measure]]).

[A3] Every self-adjoint operator has a unique regular spectral PVM representing it, and for every regular PVM $E$ on $\mathbb R$ the operator $\int\lambda\,dE$ with domain $\{x:\int\lambda^2dE_x<\infty\}$ is self-adjoint with spectral PVM $E$; the spectrum is the support of the spectral PVM ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]], [[thm-unbounded-borel-functional-calculus]]).

## Verification

**Proof technique:** direct.

**Given:** A $\sigma$-finite measure space, a real measurable $m$ finite $\mu$-a.e., and $H=L^2(X,\mu)$.

1.1 $D(M_m)$ is dense in $H$: for $f\in L^2$ the truncations $f_n:=f\mathbf 1_{\{|m|\le n\}}$ lie in $D(M_m)$ because $\int|m|^2|f_n|^2\le n^2\|f\|^2$, and $f_n\to f$ in $L^2$ since $m$ is finite a.e. and $\int|f|^2<\infty$. [A1]

1.2 For bounded Borel $h$ the operator $M_h$ of multiplication by $h\circ m$ is bounded with $\|M_h\|\le\|h\circ m\|_\infty$, and $E(B):=M_{\mathbf 1_{m^{-1}(B)}}$ is a projection valued measure on $\mathbb R$: the $E(B)$ are orthogonal projections, multiplicativity is $m^{-1}(B)\cap m^{-1}(C)=m^{-1}(B\cap C)$, and strong countable additivity follows from $|f|^2$-dominated convergence on the $\sigma$-finite space. [A2, given]

1.3 $\langle E(B)f,f\rangle=\int_{m^{-1}(B)}|f|^2d\mu$; consequently, writing $E_f$ for this measure, $\int\lambda^2dE_f(\lambda)=\int|m|^2|f|^2d\mu$ and $g(M_m)=\int g\,dE$ for Borel $g$ on the natural domain: bounded $g$ give $g(M_m)f=(g\circ m)f$ because the integral of a bounded Borel function against $E$ is the multiplication operator by that function composed with $m$, and unbounded $g$ follow by truncation. [A2, given]

2.1 Hence $\int\lambda\,dE$ has domain exactly $D(M_m)$ and acts by $f\mapsto mf$, so the operator $\int\lambda\,dE$ is $M_m$; by the converse half of the spectral theorem $M_m$ is self-adjoint and its spectral PVM is $E$, and by the uniqueness half no other regular PVM represents it. [A3, step 1.3]

2.2 The spectrum is the support of the spectral PVM: for a self-adjoint operator, $\sigma(M_m)$ is the essential range of the identity function with respect to $E$, which is $\{t:E((t-\varepsilon,t+\varepsilon))\ne0$ for all $\varepsilon>0\}$, and $E((t-\varepsilon,t+\varepsilon))=0$ exactly when $\mu(m^{-1}(t-\varepsilon,t+\varepsilon))=0$; this is the essential range of $m$. [A3, step 1.3]

3.1 The claims are steps 1.1 (density of the domain), 2.1 (self-adjointness, spectral measure and calculus) and 2.2 (spectrum). ∎
