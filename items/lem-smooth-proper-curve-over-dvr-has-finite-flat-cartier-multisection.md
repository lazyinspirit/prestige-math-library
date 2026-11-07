---
dependency_level: 1
id: lem-smooth-proper-curve-over-dvr-has-finite-flat-cartier-multisection
kind: lemma
title: Finite flat Cartier multisections and projectivity of smooth proper DVR curves
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-relative-curve-over-dvr-universal-cohomology
- lem-ag-flat-local-regularity-ascent-descent
- thm-nonaffine-regular-local-ring-is-ufd
- cor-finitely-generated-torsion-free-modules-over-a-pid-are-free
- thm-over-a-pid-flat-is-equivalent-to-torsion-free
- thm-proper-quasi-finite-is-finite
- thm-degree-two-g-plus-one-line-bundle-very-ample
- thm-projective-bundle-represents-line-quotients
- def-effective-cartier-divisor
- lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
- thm-equivalent-characterisations-of-a-dvr
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

Assume AC and DC. Let $R$ be any DVR and $p:C\to\operatorname{Spec}R$ a smooth proper curve with geometrically connected fibres, of genus $g\ge0$. There is a nonzero effective Cartier divisor $Z\subset C$ finite locally free over $R$ of some rank $e>0$. Every thickening $nZ$, $n\ge1$, is finite locally free of rank $ne$ and remains an effective relative Cartier divisor after every base change, including nonreduced or non-Noetherian ones. For any $m\ge1$ with $me\ge2g+1$, put $L=\mathcal O_C(mZ)$ and $E=p_*L$. Then $E$ is finite free of rank $me+1-g$, and its evaluation map gives a closed immersion
$$C\hookrightarrow\mathbb P_R(E),$$
where $\mathbb P(E)$ uses the line-quotient convention. Thus $C/R$ is projective. The finite faithfully flat cover $Z\to\operatorname{Spec}R$ supplies a tautological section of $C_Z\to Z$. No section of $C/R$, henselian or complete DVR, perfect residue field, or étaleness or reducedness of $Z$ is asserted or required.

## Facts & Assumptions

**Given:** AC/DC, the DVR and the smooth proper curve family in the Statement.

[A1] AC/DC are the actual regularity, scheme and cohomology hypotheses. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] The genus is constant; high-degree line bundles have finite locally free sections, arbitrary base change, and no higher direct images. [[lem-relative-curve-over-dvr-universal-cohomology]]

[F2] In a flat local map of Noetherian local rings, regularity of base and closed fibre implies regularity of the target. Every regular local ring is a UFD. A DVR is a one-dimensional Noetherian local PID, hence regular. [[lem-ag-flat-local-regularity-ascent-descent]] [[thm-nonaffine-regular-local-ring-is-ufd]] [[thm-equivalent-characterisations-of-a-dvr]]

[F3] Torsion-free modules over a PID are flat, finite torsion-free modules over a PID are free, and a proper quasi-finite morphism is finite. [[thm-over-a-pid-flat-is-equivalent-to-torsion-free]] [[cor-finitely-generated-torsion-free-modules-over-a-pid-are-free]] [[thm-proper-quasi-finite-is-finite]]

[F4] A line bundle of degree at least $2g+1$ on a smooth proper geometrically integral curve is very ample. A projective bundle represents invertible quotients of its pulled-back vector bundle. [[thm-degree-two-g-plus-one-line-bundle-very-ample]] [[thm-projective-bundle-represents-line-quotients]]

[F5] Effective Cartier divisors have invertible defining ideals, and their positive multiples are defined by the corresponding powers. A closed point of a finite-type affine scheme over a field has finite residue-field degree. [[def-effective-cartier-divisor]] [[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]

## Proof

**Proof technique:** close a generic point to a Cartier multisection, then use actual universal high-degree sections to construct a closed immersion.

**Given:** The data above under [A1].

1.1 At a generic-fibre point the total-space local ring is regular by smoothness over the fraction field. At a special-fibre point it is flat over the regular DVR and its fibre local ring is regular; [F2] makes it regular as well. Thus $C$ is a Noetherian regular scheme. Its irreducible components are disjoint, since a regular local ring is a domain. Flatness makes the generic fibre schematically dense, so every component dominates the base. The geometrically connected generic fibre leaves only one component; hence $C$ is integral and locally factorial by [F2]. [A1, F2, given, algebra]

2.1 Choose a closed point $z$ of the nonempty generic curve, of finite residue degree by [F5], and let $Z$ be its reduced closure. Its generic point is in the open generic fibre and has codimension one there, hence in $C$. Local factoriality makes this prime divisor Cartier. It is integral and dominates the base, so its structure sheaf is torsion-free and $R$-flat by [F3]. Tensoring its Cartier ideal sequence with the residue field remains exact; consequently its special fibre is an effective Cartier divisor on the integral special curve and has zero-dimensional support. It is nonempty because the proper image of $Z$ contains the generic point and is closed. Thus $Z/R$ is proper quasi-finite, hence finite by [F3], and its finite torsion-free $R$-module is free of a positive rank $e$. [F2, F3, F5, step 1.1, choose, construct, algebra]

3.1 The support of each $nZ$ is that of $Z$, so it is again proper quasi-finite and finite. The kernels in the successive restrictions $\mathcal O_{(j+1)Z}\to\mathcal O_{jZ}$ are the invertible $\mathcal O_Z$-modules $\mathcal O_Z(-jZ)$. Their pushforwards are finite torsion-free $R$-modules because $Z$ is $R$-flat and these sheaves are invertible; by [F3] they are free, of rank $e$ as checked on the generic fibre. The resulting finite modules are extensions of free modules over the local ring $R$, hence free, of rank $ne$ by induction. Flatness makes every Cartier-ideal sequence stay exact after arbitrary base change, while its ideal remains invertible. Thus all thickenings are finite locally free relative Cartier divisors, also on nilpotent tests. [F3, F5, step 2.1, construct, algebra]

4.1 Choose $m$ as in the Statement. By [F1], $E=p_*\mathcal O_C(mZ)$ is finite free of rank $me+1-g$ and gives the complete section space on each field fibre. These fibre bundles are very ample and globally generated by [F4]. The evaluation cokernel on the Noetherian total space is zero by fibrewise surjectivity and Nakayama at special-fibre points, and already zero at generic-fibre points. Evaluation therefore defines $f:C\to\mathbb P_R(E)$ by [F4]. This uses the whole section space, not an unverified list of local generators. [F1, F4, step 3.1, construct, algebra]

5.1 Every field-fibre map of $f$ is a closed immersion. The map $f$ is proper since $C$ is proper over $R$ and its projective target is separated. Each point fibre of $f$ is already a point fibre of such a field-fibre map, so $f$ is quasi-finite and [F3] makes it finite. On an affine target chart write it as $A\to B$ with $B$ finite over $A$. Its cokernel $M$ is a finite $A$-module, zero after inverting the uniformizer and modulo the uniformizer because both fibre maps are closed immersions. At primes not containing the uniformizer the first statement kills $M$; at the others Nakayama and the second statement kill it. Thus $A\to B$ is surjective. This proves $f$ is a closed immersion and the asserted projectivity. [F3, F4, step 4.1, algebra]

6.1 The ranks in steps 2.1–3.1 are positive, so $Z\to\operatorname{Spec}R$ is finite faithfully flat of finite presentation. Its embedding in $C$ defines the section $Z\to C\times_R Z$, $z\mapsto(z,z)$, of the projection to $Z$. The divisor may have ramification and nilpotents on the special fibre; no finite étale section cover has been inferred. The construction applies unchanged when $g=0$ or $g=1$, since the same bound $me\ge2g+1$ and [F1]–[F4] apply. [F1, F3, F5, step 2.1, step 3.1, step 5.1, construct, algebra] ∎

