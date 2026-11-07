---
id: lem-azumaya-stable-equivalence-detected-by-cohomological-class
kind: lemma
title: "Cohomological classes detect stable Azumaya equivalence"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 10
deps:
  - def-axiom-of-choice
  - def-azumaya-algebra-on-a-variety
  - thm-pgl-torsors-classify-azumaya-algebras
  - thm-smooth-affine-commutative-groups-have-etale-fppf-comparison
  - thm-abelian-sheaves-on-a-site-have-enough-injectives
  - lem-faithfully-flat-effective-descent-of-modules-and-algebras
justified_by: []
proof_strategy: direct
axiom_use: "AC is assumed for the actual site models and PGL classification."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "A. J. de Jong, A result of Gabber"
      url: "https://www.math.columbia.edu/~dejong/papers/2-gabber.pdf"
      locator: "§2.13, splitting gerbes and twisted endomorphism algebras; the stable-equivalence calculation is reconstructed here."
verification: {}
---

## Statement

Assume AC. Let $X$ be a Noetherian scheme and let $A,B$ be Azumaya algebras of positive constant degrees on $X$. If their étale cohomological classes in $H^2_{\mathrm{et}}(X,\mathbb G_m)$ are equal, then there are positive-rank finite locally free modules $P,Q$ with
$$A\otimes\mathcal E nd(P)\cong B\otimes\mathcal E nd(Q)$$
as $\mathcal O_X$-algebras. Conversely, any such stable equivalence gives equal cohomological classes. Thus the Azumaya-to-cohomological Brauer map is injective at this scope.

## Facts & Assumptions

**Given:** The Noetherian scheme and the two Azumaya algebras in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] The Azumaya condition identifies $A\otimes A^{\mathrm{op}}$ with $\mathcal E nd(A)$, and stable equivalence uses endomorphism algebras of positive-rank finite locally free modules. [[def-azumaya-algebra-on-a-variety]]

[F2] PGL torsors classify Azumaya algebras and their scalar lifting cocycle gives their cohomological class. [[thm-pgl-torsors-classify-azumaya-algebras]]

[F3] Étale and fppf cohomology of $\mathbb G_m$ agree on Noetherian schemes, and actual injective resolutions are available. [[thm-smooth-affine-commutative-groups-have-etale-fppf-comparison]] [[thm-abelian-sheaves-on-a-site-have-enough-injectives]]

[F4] Faithfully flat module and algebra descent is effective. [[lem-faithfully-flat-effective-descent-of-modules-and-algebras]]

## Proof

**Proof technique:** put both splitting modules on one resolution groupoid, then cancel the common scalar twist.

1.1 Use [F3] to regard the equal classes as one fppf class $\alpha$, represented by $\tau$ in a fixed injective resolution. The local solutions of $ds=\tau$ with arrows $a\in I^0$ satisfying $da=s-t$ form the scalar-banded resolution groupoid. By [F2], the splitting groupoid of each algebra has obstruction $\alpha$. Choose local splitting objects and compare their scalar defects in the same injective resolution; equality of their cohomology classes supplies a degree-one coboundary correcting the local identifications. Thus both splitting groupoids identify with the resolution groupoid, and their universal splitting modules give finite locally free $\alpha$-twisted modules $E,F$ on it. Their common scalar automorphism acts by multiplication. [A1, F2, F3, given, choose, construct, algebra]

2.1 On each groupoid object, form $\mathcal H om(E,F)$. The scalar actions on source and target cancel, so its transition maps satisfy ordinary descent; [F4] gives a finite locally free module $P$ on $X$ of positive rank. Locally, $E$ and $F$ are free and $A=\mathcal E nd(E)$, $B=\mathcal E nd(F)$; finite matrix units give a natural algebra isomorphism $A^{\mathrm{op}}\otimes B\cong\mathcal E nd(P)$. Its construction is invariant under simultaneous scalar changes, so it descends globally. [F4, step 1.1, construct, algebra]

3.1 Tensor the isomorphism of step 2.1 by $A$ and apply [F1]. With $Q=A$ as a positive-rank locally free module, this gives $A\otimes\mathcal E nd(P)\cong\mathcal E nd(A)\otimes B=B\otimes\mathcal E nd(Q)$, proving the forward implication. Conversely, the scalar cocycle in [F2] is additive under tensor product, while $\mathcal E nd(P)$ has zero obstruction because its PGL torsor lifts to the frame $\operatorname{GL}$-torsor. Thus a stable isomorphism forces equal classes. The zero algebraic Brauer class and rank-one cases are included. [F1, F2, step 2.1, algebra] ∎
