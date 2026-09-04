---
id: thm-topological-characterisation-of-pro-p-groups
kind: theorem
title: "A topological group is pro-p exactly when it is profinite and has an open normal basis with finite p-group quotients"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-pro-p-group, def-profinite-group-by-inverse-limit, lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Brian Osserman, Inverse limits and profinite groups"
      url: "https://people.math.osu.edu/cogdell.1/6112-Osserman-www.pdf"
    - title: "Gareth Wilkes, Profinite Groups and Group Cohomology lecture notes"
      url: "https://www.dpmms.cam.ac.uk/~grw46/LectureNotes.pdf"
---

## Statement

A topological group $G$ is pro-$p$ if and only if it is profinite and has a
neighbourhood basis at the identity consisting of open normal subgroups $N$
such that every quotient $G/N$ is a finite $p$-group.

## Facts & Assumptions

**Given:** A topological group $G$.

[F1] A pro-$p$ group is, by definition, a topological group isomorphic to an
inverse limit of finite $p$-groups ([[def-pro-p-group]]).

[L1] A profinite group is a topological group isomorphic to an inverse limit of
finite discrete groups ([[def-profinite-group-by-inverse-limit]]).

[L2] In an inverse-limit presentation by finite groups, the coordinate kernels
form an open normal neighbourhood basis ([[lem-kernels-of-finite-projections-form-an-open-normal-neighbourhood-basis]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ is pro-$p$, then [F1] gives a presentation $G\cong\varprojlim_i P_i$ with each $P_i$ a finite $p$-group. By [L1] this already makes $G$ profinite, and [L2] supplies an open normal basis whose quotients are the coordinate images $\pi_i(G)\le P_i$, hence finite $p$-groups. [F1, L1, L2, given, algebra]

1.2 Conversely, suppose $G$ is profinite and let $\mathcal N$ be an identity-neighbourhood basis of open normal subgroups with each $G/N$ a finite $p$-group. Replace it by the basis of finite intersections of its members. The new basis has the same properties, because a quotient by $N_1\cap\cdots\cap N_r$ embeds in the product of the finite $p$-groups $G/N_j$, and it is directed by reverse inclusion. The quotient maps define a continuous homomorphism $\eta:G\to\varprojlim_{N\in\mathcal N}G/N$. Because the basis separates points, $\eta$ is injective. A basic cylinder in the target prescribes finitely many compatible cosets, and their common refinement in $\mathcal N$ has a representative in $G$, so $\eta$ is surjective. Its coordinate maps are exactly the quotient maps by open normal subgroups from the refined basis, so $\eta$ is a homeomorphism. The target is an inverse limit of finite $p$-groups, hence [F1] makes $G$ pro-$p$. [F1, L1, L2, given, construct]

2.1 Steps 1.1 and 1.2 prove both implications. The trivial group is included: it is the inverse limit of the constant system on $1$, and its only finite quotient is the trivial $p$-group. [step 1.1, step 1.2] ∎
