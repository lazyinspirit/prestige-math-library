---
dependency_level: 0
id: lem-relative-curve-over-dvr-universal-cohomology
kind: lemma
title: Universal constants and high-degree cohomology for a smooth proper curve over
  a DVR
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-proper-flat-fp-cohomology-perfect-complex
- thm-global-functions-proper-integral-variety
- thm-cohomological-dimension-noetherian-scheme
- thm-full-riemann-roch-divisor
- cor-canonical-degree-two-g-minus-two
- cor-negative-degree-no-sections-rr
- thm-regular-local-rings-are-domains-and-cohen-macaulay
- thm-equivalent-characterisations-of-a-dvr
- def-discrete-valuation-ring
- def-axiom-of-choice
- def-dependent-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
axiom_use: AC and DC are explicit actual cohomology, regularity, scheme and descent
  supplier hypotheses; arbitrary tests retain their nilpotents and need not be Noetherian.
sources:
  references:
  - title: Quentin Guignard, On the ramified class field theory of relative curves,
      arXiv1804.02243v2
    url: https://arxiv.org/pdf/1804.02243v2
    locator: Section4.1–4.14, printed/PDF16–21, full relevant passage read; the basic
      prerequisites are locally proved, not imported from its relativePicard citations.
  - title: Steven Kleiman, The Picard Scheme
    url: https://arxiv.org/pdf/math/0504020
    locator: Theorem4.8 andLemma4.9, PDF27–31, complete printed proof read; the cited
      properflatquotient theorem is not imported or claimed proved here.
---

## Statement

Assume AC and DC. Let $R$ be a discrete valuation ring, with fraction field $K$, residue field $\kappa$ and uniformizer $\pi$, and let $p:C\to\operatorname{Spec}R$ be a smooth proper curve with geometrically connected fibres. Put $g=\dim_\kappa H^1(C_\kappa,\mathcal O)$. Then both fibres have genus $g$, and for every $R$-algebra $A$, including nonreduced and non-Noetherian ones,
$$\Gamma(C_A,\mathcal O)=A,\qquad H^1(C_A,\mathcal O)\cong R^g\otimes_R A,\qquad H^q(C_A,\mathcal O)=0\ (q>1).$$
The first equality and all cohomological base-change comparisons are canonical; the displayed free-module coordinates for $H^1$ depend on a choice of basis. On an arbitrary $R$-scheme $T$ these assertions mean $p_{T,*}\mathcal O_{C_T}=\mathcal O_T$ and a locally free $R^1p_*\mathcal O_C$ commuting with every base change, with no higher direct images. They do not assert that global $H^1(C_T,\mathcal O)$ is $\Gamma(T,\mathcal O_T)^g$ when $T$ is nonaffine.

If $L$ is invertible on $C_T$ and has the same degree $d\ge2g-1$ on every geometric fibre, then $p_{T,*}L$ is locally free of rank $d+1-g$, all its positive higher direct images vanish, and formation of these direct images commutes with every base change. The case $g=0,d=-1$ has rank zero and is included.

More generally, for any proper flat finitely presented $X/R$ with geometrically integral generic and special fibres, the canonical map $A\to\Gamma(X_A,\mathcal O)$ is an isomorphism for every $R$-algebra $A$, and universally $p_*\mathcal O_X=\mathcal O_{\operatorname{Spec}R}$.

## Facts & Assumptions

**Given:** AC/DC and the DVR, family and test algebras or schemes in the Statement. No section, henselian, complete or perfect-residue-field condition is imposed.

[A1] AC/DC are the actual supplied cohomology and scheme hypotheses. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] For a proper finitely presented morphism and a finitely presented sheaf flat over the base, a bounded nonnegative finite-projective complex computes every base-changed cohomology group naturally for all base algebras; locally on the base the complex is finite free. [[lem-proper-flat-fp-cohomology-perfect-complex]]

[F2] A proper geometrically integral variety over a field has only that field as global functions. Quasi-coherent cohomology on a Noetherian curve vanishes above dimension one, and regular local rings are domains. [[thm-global-functions-proper-integral-variety]] [[thm-cohomological-dimension-noetherian-scheme]] [[thm-regular-local-rings-are-domains-and-cohen-macaulay]]

[F3] Curve Riemann–Roch, canonical degree $2g-2$ and absence of sections in negative degree imply $H^1(L)=0$ and $h^0(L)=d+1-g$ when $d>2g-2$. [[thm-full-riemann-roch-divisor]] [[cor-canonical-degree-two-g-minus-two]] [[cor-negative-degree-no-sections-rr]]

[F4] A DVR is a nonfield Noetherian local domain and a local PID of dimension one. [[def-discrete-valuation-ring]] [[thm-equivalent-characterisations-of-a-dvr]]

## Proof

**Proof technique:** minimize the actual universal finite cohomology complex over local rings and retain its arbitrary-algebra comparison.

**Given:** The data above under [A1].

1.1 The hypotheses of [F1] apply to $\mathcal O_C$: smoothness gives base flatness, and properness over the Noetherian DVR gives finite presentation. Both field fibres are geometrically integral: after algebraic closure they are smooth regular connected curves, whose irreducible components cannot meet because their local rings are domains, so connectedness leaves one component. By [F2] each field fibre has $h^0=1$ and no cohomology above degree one. Since $R$ is local, the finite-free neighborhood in [F1] containing its closed point is the whole spectrum. Thus choose one bounded nonnegative finite-free complex $Q^\bullet$ computing all $H^q(C_A,\mathcal O)$ naturally. [A1, F1, F2, F4, given, construct]

2.1 A unit entry in a differential splits a contractible pair $R\xrightarrow{1}R$: choose its source basis vector, take its image as a target basis vector, and subtract multiples to clear the remaining row and column. Adjacent differential compositions are zero, so this is a direct summand of complexes. Repeating removes finitely many pairs, leaving a finite-free complex whose differential entries are in $\pi R$. Its reduction modulo $\pi$ has zero differentials. Hence [F2] makes its degree-zero term $R$, its degree-one term $R^g$, and every higher term zero. The generic fibre also has $h^0=1$, so its degree-zero differential has rank zero over $K$. Since $R$ is a domain, that differential is zero already. The resulting complex is $R$ in degree zero and $R^g$ in degree one with zero differential. All cancelled summands remain contractible after arbitrary tensoring. [F1, F2, step 1.1, construct, algebra]

3.1 The canonical constant $1$ reduces to the nonzero constant $1$ on the special fibre. Its coefficient in the free degree-zero summand of step 2.1 is therefore a unit of $R$. The canonical unit map is an isomorphism over $R$ and after every $R$-algebra base change. The same zero-differential complex proves the displayed $H^1$ and higher-vanishing assertions and equality of the generic and special genera. Naturality in [F1] gives the canonical base-change maps; choosing a basis of the degree-one term gives only the stated noncanonical coordinates. [F1, step 2.1, algebra]

4.1 For the general $X$ in the last assertion, apply [F1] to its structure sheaf and perform the same unit cancellations. Geometric integrality and [F2] give $h^0=1$ on the special and generic fibres, so the minimal degree-zero term is $R$ and its outgoing differential is zero, exactly as above. No restriction on higher terms is needed for $H^0$. The constant $1$ again gives a unit coefficient, hence $A\cong H^0(X_A,\mathcal O)$ naturally for every $A$. [F1, F2, step 2.1, step 3.1, algebra]

4.2 Now work affine locally on any test $T=\operatorname{Spec}A$, and let $L$ have the degree in the Statement. The pullback curve is flat over $A$ and an invertible sheaf on it is $A$-flat, so [F1] gives its universal finite-projective cohomology complex. At each prime of $A$, make the complex free locally and cancel unit entries over the local ring. On its residue field [F3] gives only degree-zero cohomology, of dimension $d+1-g$. Therefore every positive term of the minimal complex is zero and its remaining term is free of that rank. The cancellations are finite and use unit entries, so hold on a neighborhood of this prime. Locally the original complex is thus a degree-zero vector bundle plus contractible pairs. It follows that $p_*L$ is locally free, all positive direct images vanish and the comparison holds after every algebra base change. No reducedness or Noetherian property of $A$ was used. [F1, F3, step 3.1, construct, algebra]

5.1 Affine-base calculations glue to the higher direct-image sheaf statements on arbitrary $T$, and their natural comparisons glue for any further base change. For the structure sheaf, step 2.1 gives a free rank-$g$ first direct image and no higher ones; for $L$, step 4.2 gives the asserted degree-zero bundle. Nonaffine global cohomology can also receive cohomology from the base, so no stronger global $H^1$ formula is asserted. If $g=0,d=-1$, [F3] makes every fibre cohomology group zero and the minimal complex is zero, which gives the rank-zero case. [F1, F3, step 3.1, step 4.1, step 4.2, algebra] ∎

