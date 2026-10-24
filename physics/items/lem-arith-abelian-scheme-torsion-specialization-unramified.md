---
id: lem-arith-abelian-scheme-torsion-specialization-unramified
kind: lemma
title: "Abelian scheme torsion specialization is unramified"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-proper-quasi-finite-is-finite
  - def-arith-tate-module-and-inertia
  - lem-arith-strict-henselization-and-smooth-sections
  - lem-arith-strict-henselian-etale-sections
  - lem-arith-prime-to-characteristic-multiplication-etale
  - lem-arith-field-prime-to-characteristic-torsion-and-tate-module
  - def-abelian-scheme
  - lem-multiplication-by-n-on-abelian-scheme
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models (1990), 7.3/2 and 7.4 (torsion of abelian schemes and inertia)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC as inherited from the stated suppliers. Let $R$ be a discrete valuation ring with fraction field $K$, residue field $k$ and strict henselization $R^{\mathrm{sh}}$, let $A\to\operatorname{Spec}R$ be an abelian scheme of relative dimension $g$, and let $\ell\ne\operatorname{char}k$ be prime. Then for every $\nu\ge1$:

(a) $A[\ell^\nu]$ is finite etale over $R$ of rank $\ell^{2g\nu}$;

(b) over $R^{\mathrm{sh}}$, specialization identifies the geometric generic points of $A[\ell^\nu]$ with the special separable points, and the inertia group acts trivially on $A[\ell^\nu]$, hence on the Tate module.

## Facts & Assumptions

**Given:** AC and DC, a DVR $R$ with fraction field $K$, residue field $k$ and strict henselization $R^{\mathrm{sh}}$, an abelian scheme $A/R$ of relative dimension $g$, and a prime $\ell\ne\operatorname{char}k$.

[F1] Multiplication by $\ell^\nu$ is finite flat of degree $\ell^{2g\nu}$ on an abelian scheme, and etale when $\ell^\nu$ is invertible on the base; properness and quasi-finiteness imply finiteness ([[lem-multiplication-by-n-on-abelian-scheme]], [[thm-proper-quasi-finite-is-finite]], [[lem-arith-prime-to-characteristic-multiplication-etale]], [[def-abelian-scheme]]).

[F2] The geometric torsion of the generic fibre is $(\mathbb Z/\ell^\nu)^{2g}$ and the rank is locally constant ([[lem-arith-field-prime-to-characteristic-torsion-and-tate-module]]).

[F3] Over a strictly henselian local ring with separably closed residue field, a finite etale scheme splits as a disjoint union of copies of the base, reduction is a bijection on sections, ([[lem-arith-strict-henselian-etale-sections]]). The chosen valuation determines $K^{\mathrm{sh}}\subseteq K^{\mathrm{sep}}$ and inertia $I=\operatorname{Gal}(K^{\mathrm{sep}}/K^{\mathrm{sh}})$ ([[def-arith-tate-module-and-inertia]], [[lem-arith-strict-henselization-and-smooth-sections]]).

## Proof

**Proof technique:** direct: finiteness and etaleness of the torsion, then splitting over the strict henselization.

1.1 By [F1] the morphism $[\ell^\nu]:A\to A$ is finite, flat and of degree $\ell^{2g\nu}$, and since $\ell$ is invertible on $R$ it is etale; its kernel $A[\ell^\nu]$, the pullback along the identity section, is finite etale of rank $\ell^{2g\nu}$ by [F2] (the rank is locally constant and equals $\ell^{2g\nu}$ on the generic fibre of the connected base $\operatorname{Spec}R$). This proves (a). [F1, F2, given, algebra]

2.1 Base change to $R^{\mathrm{sh}}$: the scheme $A[\ell^\nu]_{R^{\mathrm{sh}}}$ is finite etale over the strictly henselian local ring $R^{\mathrm{sh}}$ with separably closed residue field $k^s$, so by [F3] it is a disjoint union of copies of $\operatorname{Spec}R^{\mathrm{sh}}$; in particular every geometric generic point is already rational over $K^{\mathrm{sh}}$, and reduction is a bijection between the generic geometric points and the special separable points. Consequently $\operatorname{Gal}(K^{\mathrm{sep}}/K^{\mathrm{sh}})$ fixes every point of $A[\ell^\nu](K^{\mathrm{sep}})$, so the inertia group $I=\operatorname{Gal}(K^{\mathrm{sep}}/K^{\mathrm{sh}})$ acts trivially; the same holds on the inverse limit $T_\ell(A)$, because inertia acts coordinatewise on the inverse limit and fixes every torsion coordinate. This is the precise finite-etale smooth-proper specialization statement used here; it is not general smooth proper base change for higher cohomology. [F1, F3, step 1.1, algebra] ∎ 
## Remarks

For a nonhenselian DVR this proves triviality of the chosen inertia subgroup. Equivariance with the residue Galois group concerns the decomposition subgroup of the chosen valuation, not the full absolute Galois group of $K$.
