---
id: lem-arith-field-prime-to-characteristic-torsion-and-tate-module
kind: lemma
title: "Field prime to characteristic torsion and Tate module"
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-nonaffine-abelian-multiplication-finite-faithfully-flat
  - lem-arith-prime-to-characteristic-multiplication-etale
  - def-arith-tate-module-and-inertia
  - thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form
  - thm-separable-closures-exist-and-are-isomorphic-over-the-base
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, v2.00 (2008), Chapter I sections 11 and 17 (Tate modules)"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
---

## Statement

Assume AC and DC as inherited from the stated suppliers. Let $A$ be an abelian variety of dimension $g$ over a field $F$ and let $\ell\ne\operatorname{char}F$ be prime. Then for every $\nu\ge1$:

(a) $A[\ell^\nu](F^{\mathrm{sep}})\cong(\mathbb Z/\ell^\nu\mathbb Z)^{2g}$, and multiplication by $\ell$ induces surjective transition maps $A[\ell^{\nu+1}](F^{\mathrm{sep}})\to A[\ell^\nu](F^{\mathrm{sep}})$;

(b) $T_\ell(A)\cong\mathbb Z_\ell^{2g}$ ([[def-arith-tate-module-and-inertia]]), and the natural projections give $T_\ell(A)/\ell^\nu T_\ell(A)\cong A[\ell^\nu](F^{\mathrm{sep}})$;

(c) an automorphism of $F^{\mathrm{sep}}$ over $F$ (in particular an inertia group element) acts trivially on $T_\ell(A)$ if and only if it acts trivially on every $A[\ell^\nu](F^{\mathrm{sep}})$.

## Facts & Assumptions

**Given:** AC and DC, an abelian variety $A$ of dimension $g$ over a field $F$, a prime $\ell\ne\operatorname{char}F$, and a separable closure $F^{\mathrm{sep}}$.

[F1] Multiplication by $n$ on an abelian variety is finite, flat and surjective of degree $n^{2g}$ in the sense that $A[n]$ is finite locally free of rank $n^{2g}$; when $n$ is invertible in the field, the group $A[n](\bar F)$ has $n^{2g}$ elements ([[thm-nonaffine-abelian-multiplication-finite-faithfully-flat]], assuming AC and DC).

[F2] For $\ell$ invertible, $[\ell]:A\to A$ and $A[\ell^\nu]\to\operatorname{Spec}F$ are etale, so the geometric points of $A[\ell^\nu]$ are the separable ones, and reduction is injective on torsion over strictly henselian bases ([[lem-arith-prime-to-characteristic-multiplication-etale]]).

[F3] A finite abelian $\ell$-group with $\ell^{2g\nu}$ elements killed by $\ell^\nu$, whose $\ell$-torsion has $\ell^{2g}$ elements is isomorphic to $(\mathbb Z/\ell^\nu\mathbb Z)^{2g}$ ([[thm-fundamental-theorem-of-finite-abelian-groups-elementary-divisor-form]]); separable closures exist and are unique up to $F$-isomorphism ([[thm-separable-closures-exist-and-are-isomorphic-over-the-base]]).

## Proof

**Proof technique:** direct: count torsion, classify the finite abelian groups, and take the inverse limit with its quotient description.

1.1 By [F1] $A[\ell^\nu]$ is finite locally free of rank $\ell^{2g\nu}$; by [F2] it is etale over $F$, so its geometric points are separable and $|A[\ell^\nu](F^{\mathrm{sep}})|=\ell^{2g\nu}$. In particular $A[\ell](F^{\mathrm{sep}})$ has $\ell^{2g}$ elements, and $H=A[\ell^\nu](F^{\mathrm{sep}})$ is a finite abelian $\ell$-group whose $\ell$-torsion has $\ell^{2g}$ elements; by the elementary divisor classification [F3], $H\cong(\mathbb Z/\ell^\nu\mathbb Z)^{2g}$. [F1, F2, F3, given, algebra]

2.1 Multiplication by $\ell$ maps $H_{\nu+1}=A[\ell^{\nu+1}](F^{\mathrm{sep}})$ into $H_\nu$ with kernel $H_1$ of order $\ell^{2g}$. The order computation in step 1.1 makes its image have order $\ell^{2g\nu}$, so it is surjective. Choose a basis of $H_1$ and recursively lift each basis vector through these maps. The lifted vectors form a basis of $H_{\nu+1}$ over $\mathbb Z/\ell^{\nu+1}\mathbb Z$: a relation, after applying $\ell$, has all coefficients divisible by $\ell^\nu$ by the basis property in $H_\nu$; multiplying the lifted vectors by $\ell^\nu$ gives the original basis of $H_1$, so the remaining coefficients are zero modulo $\ell$. Independence and the equal orders then give generation. DC (and hence the assumed AC) permits the countable recursive choice of compatible bases. These compatible bases identify the inverse system with the reductions of $(\mathbb Z_\ell)^{2g}$, and hence identify its inverse limit with that module. [F1, F3, step 1.1, construct]

3.1 The projections $T_\ell(A)\to H_\nu$ are surjective by the compatible-basis construction. Their kernel is $\ell^\nu T_\ell(A)$. Indeed the inclusion from right to left follows because $H_\nu$ is killed by $\ell^\nu$. Conversely, for a compatible sequence $(a_r)$ with $a_\nu=0$, put $b_r=a_{r+\nu}$. Compatibility gives $\ell^r b_r=a_\nu=0$, so $b_r\in H_r$, and $\ell b_{r+1}=b_r$, so $(b_r)\in T_\ell(A)$. Also $\ell^\nu b_r=a_r$, giving the reverse inclusion. This proves $T_\ell(A)/\ell^\nu T_\ell(A)\cong H_\nu$. [F3, step 2.1, algebra]

4.1 For (c), an element $\sigma$ of $\operatorname{Aut}_F(F^{\mathrm{sep}})$ acts on $T_\ell(A)$ coordinatewise and on each $A[\ell^\nu](F^{\mathrm{sep}})$ by functoriality; the quotient identifications of step 3.1 are $\sigma$-equivariant, so $\sigma$ acts trivially on $T_\ell(A)$ if and only if it acts trivially on each quotient, i.e. on every finite torsion group. This is an elementary group argument on top of the multiplication supplier; no $H^1$ duality statement is asserted, and the choice assumptions of [F1] persist. [F2, step 3.1, algebra] ∎ 