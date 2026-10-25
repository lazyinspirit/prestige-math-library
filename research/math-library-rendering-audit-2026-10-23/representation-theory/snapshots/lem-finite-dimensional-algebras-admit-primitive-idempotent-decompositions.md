---
id: lem-finite-dimensional-algebras-admit-primitive-idempotent-decompositions
kind: lemma
title: Finite-dimensional algebras admit primitive idempotent decompositions
deps: []
provenance:
  statement: literature-derived
  proof: ai-altered
status: published
origin: pipeline
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: Jacobsen, Block fusion systems and the center of the group ring, §§1.1 and 2.2, pp.3–8 and 13–18
      url: https://www.math.ku.dk/bibliotek/arkivet/phd-theses/phd14mwj.pdf
proof_strategy: direct
---

## Statement

Every idempotent $e$ in a finite-dimensional unital $k$-algebra $A$ is a finite sum of pairwise orthogonal primitive idempotents of $A$. Here primitive means nonzero and admitting no decomposition as two nonzero orthogonal idempotents; zero is the empty sum. For $e=1$ this is a primitive decomposition of the identity.

## Facts & Assumptions

**Given:** A finite-dimensional unital algebra over any field and an idempotent $e$.

## Proof

**Proof technique:** direct.

1.1 For any orthogonal decomposition $e=u+v$, the corners $uAu,vAv$ are subspaces of $eAe$. If $u,v\ne0$, both have positive dimension and each has smaller dimension than $eAe$: for example $v\notin uAu$, since multiplication by $u$ kills $v$ but fixes every element of $uAu$. Also elements of these two corners multiply to zero in both orders. [given]

2.1 Start with the family $\{e\}$ if $e\ne0$, and the empty family otherwise. Split any nonprimitive member into two nonzero orthogonal idempotents. All members remain mutually orthogonal and sum to $e$. A mutually orthogonal family of nonzero idempotents is linearly independent, since multiplying a linear relation by one member isolates its coefficient. Its size is therefore at most $\dim_k A$, so after finitely many splits no further split is possible. The terminal family is the asserted primitive decomposition. Equivalently step 1.1 gives induction on corner dimension; a sub-idempotent is primitive in the corner exactly when it is primitive in $A$, because its own corner is the same. [step 1.1] ∎

## Sources

Jacobsen, Block fusion systems and the center of the group ring, §§1.1 and 2.2, pp.3–8 and 13–18. Local argument and conventions as displayed above.
