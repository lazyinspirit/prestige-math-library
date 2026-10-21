---
id: lem-relative-s-three-maslov-gradings-have-a-unique-hat-homology-normalization
kind: lemma
title: "Relative three-sphere Maslov gradings have a unique hat homology normalization"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-balanced-s-three-knot-generators-admit-consistent-relative-gradings
  - def-admissible-pointed-heegaard-floer-data
  - thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant
proof_strategy: direct
axiom_use: "The normalization from the stated finite grading and rank-one homology hypotheses is choice-free. Using the cited Floer existence and invariance construction to supply those hypotheses retains its ACω assumption."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ozsvath and Szabo, Holomorphic disks and knot invariants"
      url: "https://arxiv.org/pdf/math/0209056"
      locator: "Sections3.3–3.4; the S3 homology normalization is established below without importing an arbitrary rational-homology-sphere absolute grading."
---

## Statement

Let a finite DOUBLY pointed three-sphere knot diagram have its actual full filtered minus count complex, a consistent integer relative Maslov grading, and underlying one-pointed hat complex $C$ with $H(C;\mathbb F_2)\cong\mathbb F_2$. Here the hat complex is obtained by setting $U=0$ and retaining ALL terms of zero $w$ multiplicity, including positive $z$ multiplicity; it is not the Alexander-associated-graded knot Floer complex. Under the ACω hypothesis of the closed-three-manifold invariance theorem, that theorem supplies the homology hypothesis whenever $C$ is one of its actual diagram count complexes. An exact finite computation of $C$ is an alternative way to supply it, without a choice assumption.

There is exactly one integer shift of the relative Maslov grading for which the nonzero hat homology class has degree zero. This is the normalized three-sphere Maslov grading. It gives the full minus differential degree $-1$ and $U$ degree $-2$, and the standard unknot generator has degree zero. Every homogeneous-relative-degree hat chain equivalence has degree zero after these normalizations. In particular an actual exact finite model of the disk differential has this grading once its total hat homology generator is identified; an arbitrary relative grading shift is not an absolute normalization.

This assertion neither constructs a diagram comparison nor proves an absolute rational grading or a four-dimensional cobordism degree formula for other three-manifolds. It fixes Maslov degree, not the independent additive Alexander constant.

## Facts & Assumptions

**Given:** The actual finite doubly pointed count complex and its relative integer Maslov grading, with one-dimensional total hat homology as stated.

[F1] The relative grading obeys $M(x)-M(y)=\mu(\phi)-2n_w(\phi)$ for every actual Whitney class, and all differences are independent of the chosen class. The full minus differential includes every nonnegative $n_z$, and $U$ lowers Maslov degree by two. ([[thm-balanced-s-three-knot-generators-admit-consistent-relative-gradings]], [[def-admissible-pointed-heegaard-floer-data]])

[F2] Under its stated ACω hypothesis, for actual admissible closed-manifold hat complexes the homology is independent of the diagram. The genus-zero three-sphere diagram is the one-generator zero complex. This supplies the stated rank-one hypothesis for those actual choices, not an identification of an arbitrary numerical matrix with Floer theory. ([[thm-hat-heegaard-floer-is-a-closed-three-manifold-invariant]])

## Proof

1.1 Choose any integer representative $M_0$ of the relative grading. A term $U^{n_w}y$ of the full differential of $x$ comes from $\mu=1$ and has degree $M_0(y)-2n_w=M_0(x)-1$ by [F1], irrespective of $n_z$. Thus the whole minus differential is homogeneous of degree minus one. Its quotient $C$ has this same degree property. As a finite-dimensional complex it is the direct sum of its integer homogeneous spaces. Kernels and images decompose degree by degree: a sum is a cycle exactly when each homogeneous summand is, and the same holds for boundaries, since the differential changes degree by precisely one. Therefore its homology is an integer-graded direct sum. [F1, given, construct, algebra]

2.1 Since total homology is one-dimensional, exactly one homogeneous summand is nonzero, of some integer degree $d$. Set $M=M_0-d$. Then its sole homology generator has degree zero. Changing the initial relative representative to $M_0+c$ changes $d$ to $d+c$ and leaves $M$ unchanged. Conversely any two shifts with the required normalization differ by a constant which must be zero on that nonzero homology class. This proves existence and uniqueness, with no choice of a preferred generator representative needed. The differential and $U$ degrees remain those in step1.1. For the genus-zero unknot the single generator itself is its nonzero hat class, so it has degree zero. [F1, step 1.1, construct, algebra]

3.1 Suppose $f:C\to C'$ is a chain equivalence homogeneous of some relative degree $\delta$ after the normalized integer representatives have been chosen. Its induced homology map is nonzero, since it is an isomorphism. It takes a degree-zero cycle representing the nonzero class to a cycle of degree $\delta$ representing the nonzero class of $C'$. The latter homology is supported only in degree zero. Consequently $\delta=0$. This is a statement about an ACTUAL homogeneous equivalence, not a construction of that equivalence from relative indices. For an exact finite matrix model, compute its kernel and image over $\mathbb F_2$ and find the degree supporting their one-dimensional quotient; step2.1 fixes the shift. If a homogeneous cycle $z$ is known to represent its nonzero class, assigning $M(z)=0$ gives precisely the same normalization. A chain functional which evaluates nontrivially on $z$ can certify this representation, but no Alexander centering follows from that certificate. This proves the finite-model and comparison assertions within their stated hypotheses. [step 1.1, step 2.1, construct, algebra] ∎
