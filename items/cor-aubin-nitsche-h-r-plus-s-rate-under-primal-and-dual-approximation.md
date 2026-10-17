---
id: cor-aubin-nitsche-h-r-plus-s-rate-under-primal-and-dual-approximation
kind: corollary
title: The h^(r+s) L² rate under primal and dual approximation
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 6
deps:
  - cor-shape-regular-affine-fe-primal-energy-approximation
  - def-countable-choice
  - def-sobolev-space-wkp-and-its-norm
  - def-wkp-zero-as-a-sobolev-closure
  - lem-w-one-two-is-a-hilbert-space
  - thm-aubin-nitsche-l2-error-estimate-under-adjoint-regularity
  - thm-cea-quasi-optimality-for-conforming-galerkin-approximations
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Fall 2025, Part VI, Chapter 26, Basic error analysis
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap26.pdf
      locator: "§26.3.2, Lemma 26.13, printed pp. 29–30: the primal quasi-optimality factor."
    - title: Thomas Richter, Die Finite Elemente Methode für partielle Differentialgleichungen
      url: https://numerics.ovgu.de/teaching/numpde/skript.pdf
      locator: "§3.4.1, Lemma 3.36, printed pp. 84–85: the duality estimate and the additional adjoint regularity and interpolation factors."
    - title: Thomas Wick, Numerical Methods for Partial Differential Equations
      url: https://www.thomaswick.org/links/lecture_notes_Numerics_PDEs_Oct_12_2019.pdf
      locator: "§7.11.3, Proposition 7.185 and proof, printed pp. 133–134: the h² Poisson branch under H² dual regularity."
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
---

## Statement

Assume Countable Choice. Assume the real scalar finite-element setting of
[[cor-shape-regular-affine-fe-primal-energy-approximation]], and set
$V:=H^1_0(\Omega)$ with its usual $H^1$ norm. Let $V_h\subseteq V$ be the
stated conforming discrete space, let $a:V\times V\to\mathbb R$ be the same
bounded coercive form as in
[[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]], and let
$u\in W^{r+1,2}(\Omega)\cap V$ and $u_h\in V_h$ solve the continuous and
discrete equations for the same bounded linear datum $F:V\to\mathbb R$;
assume also that $V_h$ is finite-dimensional. The natural inclusion
$J:V\to L^2(\Omega)$ obeys $\|Jv\|_{L^2}\le\|v\|_{H^1}$. For
$e:=J(u-u_h)$, let $z_e$ be the adjoint solution from
[[thm-aubin-nitsche-l2-error-estimate-under-adjoint-regularity]]. Suppose
there are $s\in(0,1]$, a normed regularity space $R_s\subseteq V$ for $z_e$,
and constants $C_D,C_R$ independent of $h$ and $e$ such that
$$\|z_e\|_{R_s}\le C_R\|e\|_{L^2(\Omega)}.$$
$$\inf_{w_h\in V_h}\|z_e-w_h\|_{H^1(\Omega)}\le C_D h^s\|z_e\|_{R_s}.$$
Then
$$\|u-u_h\|_{L^2(\Omega)}\le \frac{M^2}{\alpha}C_{\rm FE}C_DC_R h^{r+s}|u|_{W^{r+1,2}(\Omega)}.$$
Here $C_{\rm FE}$ is the primal interpolation constant and $M,\alpha$ are
the boundedness and coercivity constants of $a$. In a full-adjoint Poisson
branch, one may take $R_1=H^2(\Omega)\cap H^1_0(\Omega)$ with the $H^2$ norm,
provided both displayed dual bounds hold. The $h^{r+1}$ rate is conditional
on those bounds and the primal approximation bound; no full-adjoint
regularity is asserted on an arbitrary Lipschitz domain.

## Facts & Assumptions

**Given:** Countable Choice; the shape-regular affine finite-element spaces and global interpolant
of [[cor-shape-regular-affine-fe-primal-energy-approximation]], the same
bounded coercive Galerkin form $a$ and constants $M,\alpha$, a bounded datum
$F:V\to\mathbb R$, finite-dimensional $V_h$, the exponent $r\ge1$, the
adjoint problem, and the two dual regularity/approximation bounds in
**Statement**. Here $H^1_0(\Omega)$ is the zero-boundary Sobolev closure
([[def-wkp-zero-as-a-sobolev-closure]]) and its usual $H^1$ norm comes from
[[def-sobolev-space-wkp-and-its-norm]].

[F1] The affine finite-element interpolant has the primal error bound
$\|u-I_hu\|_{H^1}\le C_{\rm FE}h^r|u|_{W^{r+1,2}}$
([[cor-shape-regular-affine-fe-primal-energy-approximation]]).

[F2] Céa's estimate bounds the Galerkin error by $M/\alpha$ times the best
energy approximation ([[thm-cea-quasi-optimality-for-conforming-galerkin-approximations]]).

[F3] Under the two dual bounds in [A1], the Aubin–Nitsche estimate gives
$\|u-u_h\|_{L^2}\le M C_DC_Rh^s\|u-u_h\|_{H^1}$
([[thm-aubin-nitsche-l2-error-estimate-under-adjoint-regularity]]).

[F4] Under Countable Choice, $H^1(\Omega)$ is Hilbert in its usual
Sobolev norm, and $H^1_0(\Omega)$ is its closed Hilbert subspace with
the restricted inner product and norm
([[lem-w-one-two-is-a-hilbert-space]]).

[A1] The dual regularity and interpolation constants $C_R,C_D$ are uniform in
$h$ and satisfy the two displayed inequalities in **Statement**.

## Proof

1.1 Since $I_hu\in V_h$ by the finite-element approximation hypotheses, $\inf_{v_h\in V_h}\|u-v_h\|_{H^1}\le\|u-I_hu\|_{H^1}\le C_{\rm FE}h^r|u|_{W^{r+1,2}}$ by [F1]. [F1, given]

1.2 By [F4], $V=H^1_0(\Omega)$ is a Hilbert space in its stated $H^1$ norm. Apply the Aubin–Nitsche estimate [F3] with $V=H^1_0(\Omega)$ in its $H^1$ norm, $C_I=C_D$, and the two dual bounds [A1]. This gives $\|u-u_h\|_{L^2}\le M C_DC_Rh^s\|u-u_h\|_{H^1}$. [F3, F4, A1, given]

2.1 Apply [F2] on the Hilbert space supplied by [F4] to the best-approximation bound in step 1.1. This gives $\|u-u_h\|_{H^1}\le \frac M\alpha C_{\rm FE}h^r|u|_{W^{r+1,2}}.$ [F2, F4, step 1.1]

3.1 Substitute the $H^1$ bound from step 2.1 into step 1.2. This gives $\|u-u_h\|_{L^2}\le(M^2/\alpha)C_{\rm FE}C_DC_Rh^{r+s}|u|_{W^{r+1,2}}$, including zero error without division. Setting $s=1$ gives $h^{r+1}$ under the stated full adjoint hypotheses. [step 2.1, step 1.2, algebra] ∎
## Remarks

The $h^{r+1}$ conclusion requires a dual approximation estimate of order one
for the actual discrete spaces; the primal interpolation item alone does not
establish that estimate for every degree and every degree-of-freedom family.
A separate global regularity input must also match the actual domain and
adjoint operator. The rate is not unconditional on every polyhedral or
Lipschitz problem.
