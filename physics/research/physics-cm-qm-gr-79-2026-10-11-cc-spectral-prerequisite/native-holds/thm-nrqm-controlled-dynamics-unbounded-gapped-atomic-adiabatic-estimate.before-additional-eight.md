---
id: thm-nrqm-controlled-dynamics-unbounded-gapped-atomic-adiabatic-estimate
aliases: [nrqm-controlled-dynamics-unbounded-gapped-atomic-adiabatic-estimate]
kind: theorem
domain: mathematics
title: "Unbounded gapped atomic adiabatic estimate"
status: draft
origin: pipeline
dependency_level: 10
deps: [thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution, thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate, thm-nrqm-coulomb-infinitesimal-kinetic-bound, thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy, thm-nrqm-coulomb-essential-spectrum, thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-sobolev-space-wkp-and-its-norm, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-countable-choice]
dependency_roles:
  thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution: mathematical-premise
  thm-nrqm-controlled-dynamics-finite-gapped-adiabatic-estimate: mathematical-premise
  thm-nrqm-coulomb-infinitesimal-kinetic-bound: mathematical-premise
  thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy: mathematical-premise
  thm-nrqm-coulomb-essential-spectrum: mathematical-premise
  thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-countable-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 10.2 pp. 222-233 (the hydrogen atom and its discrete spectrum) and Section 6.6 pp. 153-159 (perturbation of isolated eigenvalues)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "T. Kato, Perturbation Theory for Linear Operators, Chapter II.4 (adiabatic theorem for families with common domain and an isolated cluster)"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
---

## Statement

Assume the Axiom of Countable Choice ([[def-countable-choice]]). Let
$Y:=H^2(\mathbb R^3;\mathbb C)$ with its norm
([[def-sobolev-space-wkp-and-its-norm]]), let
$\gamma\in C^2([0,1];(0,\infty))$ with
$0<\gamma_{\min}\le\gamma(s)\le\gamma_{\max}<\infty$, and put
$$A(s):=-\Delta-\frac{\gamma(s)}{|\cdot|},\qquad D(A(s))=Y .$$
Fix $n\ge1$, let $P_n(s)$ be the spectral projection of $A(s)$ for the
eigenvalue $E_n(s)=-\gamma(s)^2/(4n^2)$ and let $g_n:=\inf_{s\in[0,1]}\operatorname{dist}(E_n(s),\sigma(A(s))\setminus\{E_n(s)\})>0$
be the uniform gap to the rest of the spectrum. Let $U_T$ solve
$i\,\partial_sU_T=T A(s)U_T$, $U_T(0)=I$ ([[thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution]],
with $T$ a slow-time parameter). Then there is a constant $C<\infty$,
depending on $n,\gamma_{\min},\gamma_{\max}$ and the $C^2$ norm of $\gamma$, with
$$\bigl\|(I-P_n(s))U_T(s)P_n(0)\bigr\|\le\frac CT,\qquad s\in[0,1].$$

The theorem is a conditional statement about the external-source Coulomb family
$A(s)$; no laboratory control field, error rate or physical preparation is
asserted, and linear Stark-type couplings are not covered.

## Facts & Assumptions

**Given:** the $C^2$ source strength $\gamma$, the principal quantum number $n$, the Coulomb family $A(s)$.

[F1] $|\cdot|^{-1}$ is $(-\Delta)$-infinitesimally bounded, so $A(s)$ is self-adjoint on $Y$ for every $s$ with $\|1/|\cdot|:Y\to L^2\|$ finite and uniform in $s$; hence $s\mapsto A(s)$ lies in $C^2([0,1];\mathcal B(Y,L^2))$ and the common-domain evolution theorem applies ([[thm-nrqm-coulomb-infinitesimal-kinetic-bound]], [[thm-nrqm-composites-real-multipliers-and-free-bounded-potential-operators]], [[thm-nrqm-controlled-dynamics-common-domain-nonautonomous-evolution]], [[def-bounded-linear-operator]]).

[F2] The spectrum of $A(s)$: $\sigma_{\mathrm{ess}}(A(s))=[0,\infty)$ and the negative spectrum is exactly $\{-\gamma(s)^2/(4m^2):m\ge1\}$ with multiplicity $m^2$; the eigenspace at $m=n$ is finite-dimensional and its distance to the rest of the spectrum is $\frac{\gamma(s)^2}{4}\bigl(\frac1{n^2}-\frac1{(n+1)^2}\bigr)>0$ while the continuum threshold sits at distance $\frac{\gamma(s)^2}{4n^2}$ ([[thm-nrqm-coulomb-negative-subspace-completeness-and-degeneracy]], [[thm-nrqm-coulomb-essential-spectrum]]).

[F3] By [F2] the gap is uniform: $g_n\ge\frac{\gamma_{\min}^2}{4}\min\{\frac1{n^2}-\frac1{(n+1)^2},\frac1{n^2}\}>0$.

## Proof

1.1 [Verification of the abstract hypotheses] By [F1], $A(s)$ is self-adjoint on the common domain $Y$ with $C^2$ dependence in $\mathcal B(Y,L^2)$, and by [F2] and [F3] the eigenvalue $E_n(s)$ is isolated with uniform gap $g_n>0$ and fixed finite multiplicity $n^2$. These are exactly the hypotheses of the abstract common-domain adiabatic theorem; its proof (contour-differentiated projection $P_n\in C^2$, reduced resolvent $S=Q(A-E_n)^{-1}Q$ bounded $H\to Y$, $K=[P_n',P_n]$, Hermitian interpolant $X$ with $[A,X]=K$ and the estimate via $(I+iT)(D-I)=U_A^*XU_T-X(0)-\int U_A^*X'U_T$) applies verbatim with $s\mapsto A(s)$ in place of the finite matrix. [F1, F2, F3, algebra]

2.1 [The estimate] The common-domain theorem gives $X$ with $[A(s),X(s)]=K(s)$ and bounded operators $U_A,D=U_A^*U_T$; the integration of $(1+iT)D'=F'-U_A^*X'U_T$ with $\|U_A\|=\|U_T\|=1$, $|1+iT|\ge T$, yields $\|D(s)-I\|\le C/T$ and hence, using $P_n(s)U_A(s)=U_A(s)P_n(0)$, the displayed bound. [step 1.1, F1, algebra] ∎
