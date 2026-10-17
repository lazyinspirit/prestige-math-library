---
id: thm-conforming-galerkin-eigenvalue-upper-bound-quadratic-gap-error
kind: theorem
title: Conforming finite-element eigenvalues have a quadratic best-approximation error
status: draft
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 5
deps:
  - def-countable-choice
  - def-eigenspace-best-approximation-gap
  - lem-conforming-energy-projection-is-best-approximation
  - lem-conforming-galerkin-ritz-matrix-error-is-quadratic-in-gap
  - lem-finite-dimensional-galerkin-minmax
  - thm-compact-coercive-form-spectrum-and-minmax
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jean-Luc Guermond, MATH 661 Finite Element Methods, Fall 2025, Chapter 47
      url: https://people.tamu.edu/~guermond/M661_FALL_2025/chap47.pdf
      locator: "§47.2.2, Lemma 47.7 and Theorem 47.10, including the proof of the fixed-index upper bound and squared best-approximation error."
    - title: Bertrand Mercier, Topics in Finite Element Solution of Elliptic Problems, Chapter 8
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr63.pdf
      locator: "§§8.4–8.7, printed pp. 131–140: conforming spectral approximation and the quadratic eigenvalue error."
verification: {}
---

## Statement

Assume Countable Choice and the compact coercive form setting of
[[thm-compact-coercive-form-spectrum-and-minmax]]. Let $V_h\subseteq V$ be
finite-dimensional, let $m\ge1$ with $\dim V_h\ge m$, and let
$E_m=\operatorname{span}\{e_1,\ldots,e_m\}$ be the first $m$ continuous
eigen-directions. Write $\delta_h=\delta_a(E_m,V_h)$ as in
[[def-eigenspace-best-approximation-gap]]. There are $\delta_0>0$ and
$C_m<\infty$, depending only on $m$ and the first $m$ continuous eigenvalues,
such that if $\delta_h\le\delta_0$, then the $m$th conforming Ritz value
$\lambda_{h,m}$ satisfies
$$\lambda_m\le\lambda_{h,m}\le\lambda_m+C_m\delta_h^2.$$
The lower bound holds for every conforming $V_h$ of dimension at least $m$;
the upper error bound requires the stated small-gap condition. More generally,
let $a_0$ be a Hermitian lower-bounded form on the same $V$, and suppose a
specified shift $\sigma$ makes
$a_\sigma(u,v):=a_0(u,v)+\sigma(Ju,Jv)_H$ bounded, Hermitian and coercive,
with the same injective compact dense map $J$. Define $\delta_h^\sigma$ using
the energy norm $\|v\|_{a_\sigma}:=\sqrt{a_\sigma(v,v)}$ and the first $m$
eigenspace directions for $a_\sigma$. The theorem applies to the shifted
problem with $\delta_h^\sigma$; its continuous and discrete eigenvalues are
the corresponding unshifted eigenvalues plus $\sigma$. Subtracting $\sigma$
preserves their ordering and the difference $\lambda_{h,m}-\lambda_m$.

## Facts & Assumptions

**Given:** Countable Choice, the compact coercive form pair $(V,H,a,J)$, a
finite-dimensional conforming subspace $V_h$, an index $m$ with
$\dim V_h\ge m$, and $\delta_h$ below the threshold in
[[lem-conforming-galerkin-ritz-matrix-error-is-quadratic-in-gap]].

[F1] The continuous eigenvalues and Rayleigh quotient satisfy the attained
continuous min–max principle ([[thm-compact-coercive-form-spectrum-and-minmax]]).

[F2] The finite-dimensional conforming Ritz eigenvalues satisfy their own
min–max formula ([[lem-finite-dimensional-galerkin-minmax]]).

[F3] The energy projection $P_h$ is best approximation and is injective on
$E_m$ when $\delta_h<1$
([[lem-conforming-energy-projection-is-best-approximation]]).

[F4] On $U_h=P_h(E_m)$, every Rayleigh quotient is at most
$\lambda_m+C_m\delta_h^2$ under the stated small-gap bound
([[lem-conforming-galerkin-ritz-matrix-error-is-quadratic-in-gap]]).

## Proof
**Proof technique:** direct.

**Given:** The continuous and discrete form problems, $m$, $E_m$, $V_h$,
$P_h$, and $\delta_h$.

1.1 For every $m$-dimensional subspace $W_h\subseteq V_h$, conformity gives $W_h\subseteq V$. The continuous min–max principle [F1] therefore gives $\max_{v\in W_h\setminus\{0\}}R(v)\ge\lambda_m$. Taking the minimum over such $W_h$ and applying [F2] yields $\lambda_{h,m}\ge\lambda_m$. [F1, F2, given]

1.2 For the shift branch, the form eigenrelation for $a_\sigma$ is $a_0(e,v)+\sigma(Je,Jv)_H=\lambda^\sigma(Je,Jv)_H,$ which is equivalent to the unshifted relation with eigenvalue $\lambda^0=\lambda^\sigma-\sigma$. The same equivalence holds on $V_h$, because the mass form is unchanged. Thus every continuous and discrete eigenvalue shifts by the same scalar, preserving the ordering and satisfying $(\lambda^\sigma_{h,m}-\sigma)-(\lambda^\sigma_m-\sigma) =\lambda^\sigma_{h,m}-\lambda^\sigma_m$. [given, algebra]

2.1 Since $\delta_h\le\delta_0\le1/2<1$, [F3] makes $U_h:=P_h(E_m)$ an $m$-dimensional subspace of $V_h$. The local Ritz-matrix estimate [F4] gives $\max_{w_h\in U_h\setminus\{0\}}R(w_h)\le\lambda_m+C_m\delta_h^2.$ By the discrete min–max principle [F2], $\lambda_{h,m}$ is no greater than this maximum. This proves the upper bound. [F2, F3, F4, step 1.1, given]

3.1 Apply steps 1.1–2.1 to the bounded, Hermitian, coercive shifted form $a_\sigma$ using its own best-approximation gap $\delta_h^\sigma$. It gives $\lambda^\sigma_m\le\lambda^\sigma_{h,m}\le \lambda^\sigma_m+C_m^\sigma(\delta_h^\sigma)^2$ under that gap's smallness condition. Step 1.2 subtracts $\sigma$ from both eigenvalues, leaving the same ordering and error. [given, step 1.1, step 2.1, step 1.2, algebra] ∎
