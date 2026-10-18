---
id: ex-pa36-verma-delta-rho-shift
kind: example
title: A point-supported SL2 module gives the shifted Verma module
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-harish-chandra-projection
  - def-pa36-flag-tdo-and-module
  - def-special-linear-lie-algebra-sl-two
  - def-verma-module
  - ex-pa36-sl2-twisted-differential-operators
  - lem-harish-chandra-projection-computes-highest-weight-scalars
  - def-pa36-global-sections-and-localization
  - thm-pa36-global-twisted-differential-operators
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-altered
generation:
  role: example
verification:
  precheck: pass
sources:
  references:
    - title: "Masaki Kashiwara, Representation theory and D-modules on flag varieties, Astérisque 173–174 (1989)"
      url: "https://numdam.org/item/AST_1989__173-174__55_0.pdf"
      locator: "§7.5, printed p. 98; global sections of a point-supported module"
    - title: "Pavel Etingof, Representations of Lie Groups, MIT 18.757 (2023)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "§29.1, printed pp. 143–144; Verma/global-section convention"
---

## Example

Use $G=\mathrm{SL}_2$, $X=\mathbb P^1$, and $\kappa=c\rho$ with
$c\in\mathbb Z$. Let $x_0$ be the Borel-fixed point $z=0$ in the $U_0$
chart of [[ex-pa36-sl2-twisted-differential-operators]], and let
$\delta_{x_0}$ be the left $\mathcal D_{c\rho}$-module supported at $x_0$.
Then
$$\Gamma(X,\delta_{x_0})\cong
M((c-1)\rho)=U(\mathfrak{sl}_2)\otimes_{U(\mathfrak b)}\mathbb C_{(c-1)\rho}.$$
For the Casimir
$$C=ef+fe+\tfrac12h^2,$$
both this Verma module and the central character $\chi_{c\rho}$ have scalar
$\frac12(c^2-1)$.

## Facts & Assumptions

**Given:** The SL2 basis and chart formulas, integral $c$, the delta module at
$z=0$, and the Harish–Chandra shift of
[[def-pa36-flag-tdo-and-module]].

[F1] On $U_0$, the infinitesimal generators are
$e=z^2\partial_z+(c+1)z$, $f=-\partial_z$,
$h=2z\partial_z+(c+1)$, and $\mathcal D_{c\rho}$ is
$\operatorname{Diff}(\mathcal O(-c-1))$
([[ex-pa36-sl2-twisted-differential-operators]]).

[F2] The BGG Verma module of highest weight $\lambda$ is
$M(\lambda)=U(\mathfrak g)\otimes_{U(\mathfrak b)}\mathbb C_\lambda$
([[def-verma-module]]).

[F3] For a cyclic highest-weight vector $v$ of weight $\lambda$, a central
element acts by $\operatorname{pr}(z)(\lambda)$
([[lem-harish-chandra-projection-computes-highest-weight-scalars]]).

[F4] The shifted central character is
$\chi_\kappa(z)=\operatorname{pr}(z)(\kappa-\rho)$
([[def-pa36-flag-tdo-and-module]],
[[def-harish-chandra-projection]]).

## Verification

1.1 On the affine chart $U_0$, the module supported at $z=0$ is the Weyl
algebra quotient $\mathbb C[z]\langle\partial_z\rangle/
\mathbb C[z]\langle\partial_z\rangle z$. Ordered monomials
$\partial_z^n z^m$ show that its global sections have basis
$\delta,\partial_z\delta,\partial_z^2\delta,\ldots$; sections vanish
off the support point. The relation $z\delta=0$ gives
$z\partial_z\delta=-\delta$. Therefore [F1] gives
$$e\delta=0,\qquad h\delta=(c+1-2)\delta=(c-1)\delta,
\qquad f\delta=-\partial_z\delta.$$
[F1, given, algebra]

2.1 The universal property in [F2] gives a surjection from the Verma module
of highest weight $(c-1)\rho$ to $\Gamma(X,\delta_{x_0})$, sending its
highest vector to $\delta$. Its PBW basis is $f^n v$ for $n\ge0$, and
$f^n\delta=(-1)^n\partial_z^n\delta$ is the basis in step 1.1. The map is
therefore an isomorphism. [F2, step 1.1]

3.1 Since $e\delta=0$ and $h\delta=(c-1)\delta$, the Casimir acts by
$$ef\delta+fe\delta+\tfrac12h^2\delta
=\bigl((c-1)+\tfrac12(c-1)^2\bigr)\delta
=\tfrac12(c^2-1)\delta.$$
In the chosen PBW order, $ef=fe+h$ and the Harish–Chandra projection of
$C$ is $h+\tfrac12h^2$. Evaluating it at
$\kappa-\rho=(c-1)\rho$ gives the same scalar by [F4]. Thus the module has
the exact central character stated. [F3, F4, step 1.1, algebra] ∎
