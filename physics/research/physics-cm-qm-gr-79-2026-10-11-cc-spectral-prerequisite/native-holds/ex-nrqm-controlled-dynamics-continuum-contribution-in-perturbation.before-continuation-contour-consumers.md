---
id: ex-nrqm-controlled-dynamics-continuum-contribution-in-perturbation
aliases: [nrqm-controlled-dynamics-example-continuum-contribution-in-perturbation]
kind: example
domain: mathematics
title: "Continuum contribution in perturbation"
status: draft
origin: pipeline
dependency_level: 2
deps: [thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients, thm-nrqm-controlled-dynamics-contour-perturbation-projection, thm-spectral-theorem-for-unbounded-self-adjoint-operators, def-projection-valued-measure, def-bounded-linear-operator, def-operator-norm, def-hilbert-space, def-l-p-space-as-a-quotient-by-null-functions]
dependency_roles:
  thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients: mathematical-premise
  thm-nrqm-controlled-dynamics-contour-perturbation-projection: mathematical-premise
  thm-spectral-theorem-for-unbounded-self-adjoint-operators: mathematical-premise
  def-projection-valued-measure: mathematical-premise
  def-bounded-linear-operator: mathematical-premise
  def-operator-norm: mathematical-premise
  def-hilbert-space: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "R. Fitzpatrick, Quantum Mechanics (University of Texas at Austin, author-hosted course text), Non-Degenerate Perturbation Theory pp. 155-156 (second-order shift as a sum over unperturbed states)"
      url: "https://farside.ph.utexas.edu/teaching/qmech/qmech.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.6 pp. 153-159 (reduced resolvent and the second-order coefficient)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Example

Let $H:=\mathbb C\oplus L^2((1,2),dx;\mathbb C)$ with the Hilbert direct sum
([[def-hilbert-space]], [[def-l-p-space-as-a-quotient-by-null-functions]]), let
$H_0:=0\oplus M_x$ with $M_x$ multiplication by the variable $x$ on the second
summand, so that $H_0$ is self-adjoint with spectrum $\{0\}\cup[1,2]$ and $E=0$
is an isolated simple eigenvalue with gap $g=1$
([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]],
[[def-projection-valued-measure]]), and define the bounded linear map
$$V(c\oplus f):=\Bigl(\int_1^2f(x)\,dx\Bigr)\oplus c\,\mathbf 1_{(1,2)} .$$
This example verifies concretely that:

(a) $V$ is bounded and self-adjoint, $P_0$ is the projection onto
$\mathbb C\oplus\{0\}$, and for $\psi_0:=1\oplus0$ one has
$\langle V\psi_0,\psi_0\rangle=0$;

(b) the second-order coefficient of
[[thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients]] is
$$\frac{E''(0)}2=-\langle VSV\psi_0,\psi_0\rangle=-\int_1^2\frac{dx}{x}<0,$$
where $S=Q(H_0-E)^{-1}Q$, $Q=I-P_0$;

(c) the entire shift comes from the continuous (indeed absolutely continuous)
part of the spectrum of $H_0$ on $[1,2]$; a bound-state-only sum would return
$0$, so the second-order formula must include the complementary spectral
components.

## Verification

**Given:** the space $H$, the operators $H_0,V$, the vector $\psi_0=1\oplus0$, and the data of [[thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients]].

[F1] $H_0=0\oplus M_x$ is self-adjoint on $\mathbb C\oplus\operatorname{dom}(M_x)$, with $0$ an isolated simple eigenvalue and the spectrum of the second factor equal to $[1,2]$ ([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).

[F2] The second-order coefficient formula $E''(0)/2=-\langle VSV\psi_0,\psi_0\rangle$ holds with $S=Q(H_0-E)^{-1}Q$ ([[thm-nrqm-controlled-dynamics-simple-level-reduced-resolvent-coefficients]]).



1.1 [The operator data] By [F1], $\psi_0=1\oplus0$ is a unit eigenvector of $H_0$ at $E=0$ and the gap to the rest of the spectrum is $1$. For $V$: $V(c\oplus f)=\langle f,\mathbf 1_{(1,2)}\rangle\oplus c\mathbf 1_{(1,2)}$; then $\langle V(c,f),(c',f')\rangle=\overline{\langle f',\mathbf 1\rangle}c+\overline{c'}\langle f,\mathbf 1\rangle=\langle(c,f),V(c',f')\rangle$, so $V=V^*$, and $|V(c,f)|^2\le2\|f\|^2+2|c|^2$ shows boundedness. Finally $V\psi_0=0\oplus\mathbf 1$, so $\langle V\psi_0,\psi_0\rangle=0$ and the first-order shift vanishes. [F1, def. bounded linear operator, def. operator norm, given, algebra]

2.1 [Second order from the continuum] With $Q=I-P_0$ one has $QH=0\oplus L^2(1,2)$ and $(H_0-E)^{-1}=M_{1/x}$ there, so $SV\psi_0=0\oplus M_{1/x}\mathbf 1=0\oplus(1/x)$. Since $V(0\oplus 1/x)=\langle 1/x,\mathbf 1\rangle\oplus0=\bigl(\int_1^2dx/x\bigr)\oplus0$ and $\psi_0=1\oplus0$, the formula [F2] gives $E''(0)/2=-\int_1^2dx/x<0$. The whole value comes from the continuous spectral part of $H_0$; summing only over the bound state $P_0H=\mathbb C\psi_0$ would return $0$, contradicting the exact value. [step 1.1, F2, algebra] ∎
