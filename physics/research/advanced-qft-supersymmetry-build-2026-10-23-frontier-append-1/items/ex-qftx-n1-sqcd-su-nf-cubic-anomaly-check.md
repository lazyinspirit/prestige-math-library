---
id: ex-qftx-n1-sqcd-su-nf-cubic-anomaly-check
kind: example
title: SU(Nf) cubic-anomaly check for proposed SQCD dual data
status: draft
origin: pipeline
pipeline_run: advanced-qft-supersymmetry-build-2026-10-23
dependency_level: 0
domain: physics
library: physics
category: advanced-qft-and-supersymmetry
page: qftx-susy-moduli-and-dualities-examples
deps: []
dependency_roles: {}
proof_strategy: direct
physical_scope: Algebraic anomaly-coefficient check for the proposed four-dimensional N=1 electric/magnetic SQCD field data in the conformal window; it is not evidence that the two continuum theories are equivalent.
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: N. Seiberg, Electric-Magnetic Duality in Supersymmetric Non-Abelian Gauge Theories
      url: https://arxiv.org/pdf/hep-th/9411149v1
      locator: "§3, printed pp. 6–8, especially equations (3.1)–(3.4): proposed magnetic field representations and the SU(Nf) cubic-anomaly matching table."
    - title: David Tong, Supersymmetric Field Theory
      url: https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy.pdf
      locator: "§6.5.1, printed pp. 198–200: electric/magnetic field representations and the SU(Nf)L^3 anomaly calculation; the discussion calls the checks evidence, not a proof of duality."
verification:
  precheck: pass
---

## Example

Let integers $N_c\ge2$ and $N_f$ satisfy
$\frac32N_c<N_f<3N_c$, and put $\widetilde N_c=N_f-N_c$. Consider the
following proposed four-dimensional $\mathcal N=1$ SQCD field data, in
natural units. In the electric $SU(N_c)$ theory, there are $N_f$ quark
chiral multiplets $Q$ in the fundamental of the flavor group
$SU(N_f)_L$, with $N_c$ color copies; the antiquark multiplets are singlets
under $SU(N_f)_L$. In the proposed magnetic $SU(\widetilde N_c)$ theory,
the quark multiplets $q$ are in the antifundamental of $SU(N_f)_L$, with
$\widetilde N_c$ color copies, and the meson multiplet $M$ transforms in
$(\mathbf N_f,\overline{\mathbf N_f})$ under
$SU(N_f)_L\times SU(N_f)_R$, giving $N_f$ copies of the fundamental of
$SU(N_f)_L$. The magnetic antiquarks and both gauginos are
$SU(N_f)_L$ singlets. Normalize the cubic-anomaly coefficient of a
left-handed Weyl fermion to $+1$ in $\mathbf N_f$ and $-1$ in
$\overline{\mathbf N_f}$, and add coefficients over independent copies.
Then the electric and proposed magnetic $SU(N_f)_L^3$ coefficients are

$$\mathcal A_{\mathrm{electric}}=N_c,\qquad \mathcal A_{\mathrm{magnetic}}=-(N_f-N_c)+N_f=N_c.$$

This equality is one anomaly-matching consistency check of the proposed
field data; it is not a proof of Seiberg duality or of equality of the
infrared continuum theories.

## Example references

[Seiberg, §3, equations (3.1)–(3.4)](https://arxiv.org/pdf/hep-th/9411149v1).

[Tong, §6.5.1, printed pp. 198–200](https://davidtong.org/pdfs/teaching/supersymmetric-field-theory/susy.pdf).

## Facts & Assumptions

**Given:** The electric and proposed magnetic field representations,
$\widetilde N_c=N_f-N_c$, and the anomaly normalization stated in the
Example.

[A1] The magnetic field data are a proposed infrared-dual description; this example assumes the field representations for the coefficient calculation and does not assume or prove equivalence of the electric and magnetic theories.

[A2] For a left-handed Weyl fermion, the chosen cubic-anomaly coefficient is $+1$ in the fundamental of $SU(N_f)_L$, $-1$ in its antifundamental, and zero in a singlet; independent copies contribute additively.

## Verification

**Given:** [A1]–[A2] and the explicit electric/magnetic matter multiplicities in the Example.

1.1 In the electric theory, each of the $N_c$ color components of $Q$ is a
left-handed Weyl fermion in $\mathbf N_f$ of $SU(N_f)_L$, so these fields
contribute $N_c$. The antiquarks and gaugino are $SU(N_f)_L$ singlets and
contribute zero. Hence
$\mathcal A_{\mathrm{electric}}=N_c$. [A1, A2, given, algebra]

1.2 In the magnetic theory, the $\widetilde N_c$ color copies of $q$ are
antifundamentals and contribute $-\widetilde N_c$. For each of the $N_f$
right-flavor components of $M$, its left-flavor index is fundamental, so
the meson fermions contribute $+N_f$. The magnetic antiquarks and gaugino
are left-flavor singlets. Therefore
$\mathcal A_{\mathrm{magnetic}}=-\widetilde N_c+N_f$. [A1, A2, given, algebra]

2.1 Substituting $\widetilde N_c=N_f-N_c$ gives
$\mathcal A_{\mathrm{magnetic}}=-(N_f-N_c)+N_f=N_c
=\mathcal A_{\mathrm{electric}}$. This verifies the stated cubic-anomaly
match. [step 1.1, step 1.2, given, algebra]

3.1 The calculation checks only this specified global-symmetry coefficient
under the proposed field assignments. It supplies no map of all observables,
no equivalence of renormalization-group flows, and no continuum construction;
therefore it does not prove the proposed duality. [A1, step 2.1] ∎
