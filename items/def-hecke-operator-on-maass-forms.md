---
id: def-hecke-operator-on-maass-forms
kind: definition
title: "Hecke Operator on Weight-Zero Maass Forms"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-weight-zero-maass-form-on-gamma0n
  - def-congruence-subgroup-of-sl2-z
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "A. Knightly and C. Li, Kuznetsov's Trace Formula and the Hecke Eigenvalues of Maass Forms, Memoirs of the AMS 224 (2012), arXiv:1202.0189v1"
      url: "https://arxiv.org/pdf/1202.0189v1"
      locator: "§4.2, printed p. 28: the weight-zero Hecke operator formula and its normalization."
    - title: "Dorian Goldfeld, Trace Formulae for SL(2,R), Columbia lecture notes"
      url: "https://www.math.columbia.edu/~goldfeld/TraceFormulae-4-12-2020.pdf"
      locator: "§7, Hecke correspondences and Maass forms; printed pp. 37–41."
---

## Definition

Let $N\ge1$, let $\chi$ be an even unitary Dirichlet character modulo $N$,
and let $u$ be a smooth weight-zero function on $\mathbb H$ transforming by
$\chi$ under $\Gamma_0(N)$. For a positive integer $n$ with $\gcd(n,N)=1$,
define the pointwise finite sum
$$(T_nu)(z):=n^{-1/2}\sum_{\substack{ad=n\\d>0}} \chi(a)\sum_{r=0}^{d-1}u\!\left(\frac{az+r}{d}\right), \qquad z\in\mathbb H.$$
Here $a,d$ range over positive integers. The formula defines a smooth function
on $\mathbb H$; preservation of automorphy, cuspidality, or the $L^2$ norm is
not part of this definition and requires a separate proof.

## Definition references

[[def-weight-zero-maass-form-on-gamma0n]]

[[def-congruence-subgroup-of-sl2-z]]

## Facts & Assumptions

**Given:** A smooth function $u:\mathbb H\to\mathbb C$, positive integers
$a,d$, an integer $r$ with $0\le r<d$, and $z\in\mathbb H$.

## Verification

1.1 The affine map $z\mapsto(az+r)/d$ sends $\mathbb H$ to itself because $\operatorname{Im}((az+r)/d)=(a/d)\operatorname{Im}(z)>0$. It is smooth, so its composition with $u$ is smooth. [given, algebra]

2.1 There are finitely many positive divisor pairs $ad=n$ and exactly $d$ residues $r$ for each pair. Thus $T_nu$ is a finite linear combination of smooth compositions, and is smooth on $\mathbb H$. [step 1.1, given, algebra] ∎

## Source convention dictionary

The library keeps $u(\gamma z)=\chi(d_\gamma)u(z)$. Knightly–Li use $u(\gamma z)=\overline{\omega'(d_\gamma)}u(z)$, so their parameter is $\omega'=\overline{\chi}$. The displayed character factors are translated by this dictionary, not quoted verbatim in the source notation. In the continuous branch the source auxiliary characters satisfy $\widetilde\chi_1\widetilde\chi_2=\overline{\chi}$; $\chi'_1$ induces $\widetilde\chi_1$ while $\chi'_2$ induces $\widetilde\chi_2$.

## Remarks

For a prime index, preservation of automorphy/cuspidality, the adjoint and the uniform norm are proved in [[thm-maass-hecke-prime-adjoint-and-uniform-norm]]. This does not assert spectral completeness.
