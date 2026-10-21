---
id: lem-casson-gordon-signature-defect-and-vanishing
kind: lemma
title: Casson–Gordon signature defects vanish on the slice metabolizer
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 12
deps:
  - lem-casson-gordon-bordism-independence-and-nonsingularity
  - thm-excision-and-mayer-vietoris-with-local-coefficients
  - def-infinite-cyclic-cover-of-a-slice-disk-exterior
  - def-q-fold-branched-cover-of-a-slice-disk
  - lem-prime-power-branched-cover-of-slice-disk-is-rational-homology-ball
  - lem-prime-power-character-twists-of-knot-and-disk-covers-are-acyclic
  - def-casson-gordon-signature-defect
  - lem-casson-gordon-characters-and-linking-metabolizers
  - lem-slice-disk-induces-branched-cover-metabolizer
  - def-smooth-and-topological-slice-genus
  - def-axiom-of-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Charles Livingston and Swatee Naik, Introduction to Knot Concordance
      url: https://chuck-livingston.github.io/math/Concordance_Book.pdf
      locator: Theorem 8.2.1, pp. 167–168; complete statement and proof outline read, but its core form comparison is cited rather than derived
    - title: Patrick Gilmer, Slice Knots in S3
      url: https://www.maths.ed.ac.uk/~v1ranick/papers/gilmer3.pdf
      locator: Theorem 0.1 / Theorem 1.1, printed pp. 306–309; complete proof read, with final Casson–Gordon vanishing cited to the primary theorem
    - title: Patrick Gilmer and Charles Livingston, On Surgery Curves for Genus-One Slice Knots
      url: https://msp.org/pjm/2013/265-2/pjm-v265-n2-p06-p.pdf
      locator: §4, printed pp. 412–413; Theorem 16 states the exact vanishing interface but defers its proof
    - title: A. J. Casson and C. McA. Gordon, Cobordism of Classical Knots (1986), with appendix by P. M. Gilmer
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/cassgord.pdf
      locator: Printed pp. 193–194, Theorem 2 and proof; the exact vanishing route is proved for a slice disk exterior, with τ-independence prerequisites assumed from the earlier discussion
---

## Statement

Assume AC. Let $K$ be a smooth slice knot, let $q$ be a prime power, let $D$ be a smooth slice disk, and let $P_D$ be the induced metabolizer in $H_1(\Sigma_q(K);\mathbb Z)$. For every prime-power-order character $\chi:H_1(\Sigma_q(K);\mathbb Z)\to\mathbb Q/\mathbb Z$ that vanishes on $P_D$, the Casson–Gordon signature defect $\sigma(K,\chi)$ is zero.

## Statement references

[[def-casson-gordon-signature-defect|The specific Casson–Gordon signature defect]]

[[lem-casson-gordon-characters-and-linking-metabolizers|Character extension over the disk cover]]

[[lem-slice-disk-induces-branched-cover-metabolizer|The disk-induced linking metabolizer]]

[[def-smooth-and-topological-slice-genus|The smooth-sliceness convention]]

[Charles Livingston and Swatee Naik, *Introduction to Knot Concordance*, Theorem 8.2.1, pp. 167–168](https://chuck-livingston.github.io/math/Concordance_Book.pdf)

[[def-axiom-of-choice|Axiom of Choice]]

## Facts & Assumptions

**Given:** AC, the actual smooth slice disk, its prime-power branched cover and a prime-power-order character vanishing on the disk kernel.

[F1] The disk cover is a rational homology ball, its boundary kernel is a linking metabolizer, and the given character extends to its finite first homology with prime-power order, which may be larger than the original order. [[lem-prime-power-branched-cover-of-slice-disk-is-rational-homology-ball]], [[lem-slice-disk-induces-branched-cover-metabolizer]], [[lem-casson-gordon-characters-and-linking-metabolizers]]

[F2] Its unbranched exterior cover $X_{D,q}$ is filled by the branch-disk tube $D^2\times D^2$ along $D^2\times S^1$. The free coordinate is $\ell/q$, one on the lifted meridian. [[def-q-fold-branched-cover-of-a-slice-disk]], [[def-infinite-cyclic-cover-of-a-slice-disk-exterior]] Local Mayer–Vietoris applies to these actual collars. [[thm-excision-and-mayer-vietoris-with-local-coefficients]]

[F3] For any prime-power finite character on that exterior cover, paired with this free coordinate, all $\mathbb C(t)$ homology vanishes. [[lem-prime-power-character-twists-of-knot-and-disk-covers-are-acyclic]]

[F4] The original rationalized Witt class is independent of its smooth bounding pair. Proof 4.1 also proves compatibility with embedding a smaller finite cyclic character image in a larger finite cyclic target without changing the root-of-unity coefficient system. [[lem-casson-gordon-bordism-independence-and-nonsingularity]] The signature is the stated one-sided homomorphism. [[def-casson-gordon-signature-defect]]

[A1] Full AC is retained. [[def-axiom-of-choice]] The smooth disk convention is [[def-smooth-and-topological-slice-genus]].

## Proof

1.1 By [F1], choose an extending character $\widetilde\chi$ on the branched disk cover, and write its exact order as $D=p^a$. If the original nontrivial character has order $d=p^b$, then $d\mid D$. Restrict $\widetilde\chi$ to $H_1(X_{D,q})$ and pair it with $\ell/q$. Its finite coordinate vanishes on the lifted meridian because that circle bounds the branch-tube disk in the filled cover. Its infinite coordinate takes that circle to one. On the exterior of the boundary knot the finite coordinate is the original $\chi$; on the zero-filling solid torus it is zero. Thus its boundary is precisely the original $\eta$ followed by the inclusion $C_d\times\mathbb Z\to C_D\times\mathbb Z$, with the root representation unchanged. [F1, F2, F4, given, construct]

2.1 The actual oriented boundary of $X_{D,q}$ is $M_{0,q}$. Indeed the product disk tube at the base disk gives a longitude filling of the knot exterior: its framing is zero, since a parallel disk is disjoint and its boundary has linking zero with $K$. Passing to the meridional $q$-cover lifts the same longitude slope, while its normal circle is the closed lift of $\mu^q$. These are the zero-surgery cover coordinates in [F2], with the positive boundary orientation retained. Mayer–Vietoris in the rational homology ball $W_{D,q}=X_{D,q}\cup(D^2\times D^2)$, whose overlap is $D^2\times S^1$, gives $H_2(X_{D,q};\mathbb Q)=0$ and $H_1(X_{D,q};\mathbb Q)=\mathbb Q$ on that overlap circle. The higher groups vanish as well. In particular its ordinary middle nonsingular image form is zero. [F1, F2, step 1.1, construct, algebra]

3.1 The character in step 1.1 is of prime-power order on the actual exterior cover. Hence [F3] gives $H_2(X_{D,q};\mathbb C(t))=0$, so its twisted form is also zero. The difference of the two Witt forms of this actual single-boundary smooth filling is therefore zero. By [F4]'s larger-target comparison it computes the original rationalized class even when $D>d$: compare any original multiple bounding datum, viewed over $C_D\times\mathbb Z$, with the same number of copies of this filling and use the closed fourth-bordism ambiguity calculation. Thus $\tau(\Sigma_q(K),\chi)=0$ in $W(\mathbb C(t))\otimes\mathbb Q$. Applying the specified one-sided signature homomorphism gives $\sigma(K,\chi)=0$, as claimed. This proves the full prime-power extension case rather than assuming extension with unchanged finite order. [F3, F4, step 1.1, step 2.1, construct, algebra] ∎