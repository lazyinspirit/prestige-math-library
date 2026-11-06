---
id: lem-gts-canonical-doublecut-first-jet-smoothness
kind: lemma
title: Smooth fundamental divisors from canonical double cuts and first jets
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
proof_strategy: direct
deps:
- lem-gts-canonical-codimension-two-surface-has-nonzero-first-jet
- thm-bertini-smooth-hyperplane-section
- thm-jacobian-criterion-affine-variety
- cor-dimension-of-image-plus-generic-fibre
- thm-krull-height-theorem
- thm-normal-variety-regular-in-codimension-one
- def-axiom-of-choice
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  precheck: pass
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
  - title: Mella, Existence of good divisors on Mukai varieties, Theorem 2.5
    url: https://arxiv.org/pdf/alg-geom/9705012v1
    locator: 'arXiv:alg-geom/9705012v1, complete printed pp. 1–10 read, especially §2 pp. 4–8: Lemma 2.1 and Theorems
      2.2–2.5. This is source context; the present proof reconstructs its actual stated interface locally.'
category: string-theory
page: gts-bridgeland-stability-dt-frontiers
reference: items/lem-gts-canonical-doublecut-first-jet-smoothness.md
dependency_level: 1
dependency_roles:
  lem-gts-canonical-codimension-two-surface-has-nonzero-first-jet: mathematical-premise
  thm-bertini-smooth-hyperplane-section: mathematical-premise
  thm-jacobian-criterion-affine-variety: mathematical-premise
  cor-dimension-of-image-plus-generic-fibre: mathematical-premise
  thm-krull-height-theorem: mathematical-premise
  thm-normal-variety-regular-in-codimension-one: mathematical-premise
  def-axiom-of-choice: mathematical-premise
---

## Statement

Assume AC. Let X be a smooth connected complex projective fourfold with ample Cartier A and $-K_X=2A$. Suppose that for a general ordered pair of linearly independent sections of A, their scheme-theoretic intersection is a normal canonical surface of codimension two. Then a general member of |A| is smooth. No local factoriality or Weil-class assertion about an intermediate singular threefold is a hypothesis or conclusion.

## Statement references

[[lem-gts-canonical-codimension-two-surface-has-nonzero-first-jet]]

[[thm-bertini-smooth-hyperplane-section]]

[[thm-jacobian-criterion-affine-variety]]

[[cor-dimension-of-image-plus-generic-fibre]]

[[thm-krull-height-theorem]]

[[thm-normal-variety-regular-in-codimension-one]]

[[def-axiom-of-choice]]

## Facts & Assumptions

**Given:** Exactly the stated smooth fourfold, ample complete linear system, and actual canonical-doublecut premise. AC is retained from the suppliers.

[F1] [[lem-gts-canonical-codimension-two-surface-has-nonzero-first-jet]] proves directly by ambient point blowup, lci residue and finite component normalization/conductor that a normal canonical surface cut by two equations in a smooth fourfold cannot have both equations in the square of the maximal ideal. No ADE classification is imported.

[F2] [[thm-bertini-smooth-hyperplane-section]] supplies smoothness of a general member away from the base locus. [[thm-jacobian-criterion-affine-variety]] identifies singular points of the actual codimension-two complete intersection by rank of its two defining differentials. [[thm-normal-variety-regular-in-codimension-one]] makes the singular locus of a normal surface zero-dimensional.

[F3] [[cor-dimension-of-image-plus-generic-fibre]] and [[thm-krull-height-theorem]] supply the incidence dimension bound and the lower bound for the zero locus of at most r-1 functions. The finite rank stratification is constructed in the proof from minors and finite Noetherian induction. [[def-axiom-of-choice]].

## Proof

1.1 Let Z be the reduced base locus of V. By [F2], a general member is smooth off Z. A section vanishes on Z, so its differential there is independent of the local A-trivialization up to the corresponding unit: the derivative of the transition unit is multiplied by the vanishing section. Thus there is an intrinsic map V tensor $O_Z \to  Omega_X|Z$ tensor A|Z. [given, F1, F2, F3, construct, algebra]

1.2 Stratify Z into finitely many smooth irreducible locally closed strata on which this derivative map has constant rank and locally free image. To construct the strata, take its determinantal rank loci; on the dense smooth open of each irreducible component of each difference the image and kernel are bundles. Remove those opens and repeat on their smaller-dimensional closed complements. Finite Noetherian induction terminates. Fix one resulting stratum of dimension d and derivative image bundle F of rank r. [given, F1, F2, F3, construct, algebra]

1.3 For $r>0$, the sections having zero derivative at a point of this stratum form the projective kernel bundle I. Its dimension is d+dim P(V)-r, unless its fibres are empty. If its image in P(V) is not dense, a general section has no singular point on this stratum. If the image is dense, dimension gives $d\ge r$. [given, F1, F2, F3, construct, algebra]

1.4 In the latter case choose a general s1 that has a zero of its derivative at a point z of the stratum. Choose s2 general with ds2(z) nonzero and with the actual double cut T canonical as hypothesized. Such a choice is possible: derivative evaluation at z has positive rank, and the canonical-doublecut premise holds for general s2 after fixing a general s1. Shrink the stratum near z so ds2 is nowhere zero in F. [given, F1, F2, F3, construct, algebra]

1.5 The locus where ds1 and ds2 are dependent is the zero locus of the image of ds1 in F/O ds2, of rank r-1. It contains z and is locally defined by at most r-1 functions on the smooth d-dimensional stratum. Its local dimension at z is at least $d-r+1\ge 1$ by [F3]. [given, F1, F2, F3, construct, algebra]

1.6 Every point of that dependence locus lies in Z and hence in T; the two defining gradients have rank at most one. Because T is the actual codimension-two complete intersection in smooth X, [F2] makes all those points singular on T. This gives a positive-dimensional singular locus of the normal surface T, contradicting [F2]. Thus the dense-incidence alternative cannot occur on any positive-rank stratum. [given, F1, F2, F3, construct, algebra]

1.7 On a rank-zero stratum every section and every first derivative vanish, so every double cut is singular there. The actual normal-doublecut premise excludes every positive-dimensional such stratum. There remain only finitely many fixed rank-zero points. [given, F1, F2, F3, construct, algebra]

1.8 At each remaining point p, a local trivialization of A gives $s1=f1$ and $s2=f2$ with f1,f2 in $m_p^2$ for every pair of sections. A general pair is a normal canonical codimension-two surface by hypothesis. This is precisely forbidden by [F1]. Hence no fixed rank-zero point exists. [given, F1, F2, F3, construct, algebra]

2.1 There are finitely many strata. For each positive-rank stratum the incidence image has proper closure, and the rank-zero strata have just been excluded. Choose a general section outside their finitely many proper closures and the off-base Bertini exceptional locus. Its divisor is smooth everywhere on X, proving the claim. [given, F1, F2, F3, construct, algebra] ∎



The geometric first-jet argument only needs a smooth projective fourfold and the stated canonical-doublecut premise; the Fano hypotheses retain the exact intended source/consumer scope. The canonical-doublecut construction is a separate supplier obligation. This research candidate does not assert production admission, proof acceptance or native gate coverage.

## Remarks

The geometric first-jet argument only needs a smooth projective fourfold and the stated canonical-doublecut premise; the Fano hypotheses retain the exact intended source/consumer scope. The canonical-doublecut construction is a separate supplier obligation. This research candidate does not assert production admission, proof acceptance or native gate coverage.
