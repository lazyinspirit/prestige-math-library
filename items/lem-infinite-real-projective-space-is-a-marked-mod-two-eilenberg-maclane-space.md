---
id: lem-infinite-real-projective-space-is-a-marked-mod-two-eilenberg-maclane-space
kind: lemma
title: "Infinite real projective space is a marked mod-two Eilenberg–Mac Lane space"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-stiefel-space-grassmannian-and-tautological-bundle
  - thm-stable-stiefel-space-is-contractible
  - lem-covering-homotopies-lift-by-finite-local-strips
  - thm-long-exact-sequence-of-homotopy-groups-of-a-fibration
  - thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces
  - lem-mod-two-cohomology-ring-of-infinite-real-projective-space
  - thm-schubert-cells-give-the-stable-grassmannian-cw-structure
  - thm-eilenberg-maclane-spaces-represent-singular-cohomology
  - def-axiom-of-choice
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Allen Hatcher, Vector Bundles & K-Theory"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "Section 1.2, printed pp. 28–31: stable sphere, Grassmannian and universal bundle models."
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "Section 4.L, printed p. 500: cohomology of K(Z/2,1)."
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Statement

Assume AC. Infinite real projective space, with the marking of its fundamental group given by the nontrivial antipodal deck transformation, is a CW $K(\mathbb F_2,1)$. Its degree-one ring generator is its normalized mod-two fundamental class, so its cohomology is $\mathbb F_2[\iota_1]$.

## Facts & Assumptions

**Given:** AC; the published models $S^\infty=V_1(\mathbb R^\infty)$ and $\mathbb{RP}^\infty=\operatorname{Gr}_1(\mathbb R^\infty)$ with their quotient and weak direct-limit topologies, the tautological line bundle $\gamma_1$, and the antipodal involution of the unit sphere.

[F1] In the published models the Grassmannian is the quotient of the Stiefel space by the free orthogonal frame action, the tautological bundle is the associated standard bundle, and graph charts trivialize the quotient map ([[def-stiefel-space-grassmannian-and-tautological-bundle]]). The Schubert strata give a finite CW structure on each finite Grassmannian, cellular subcomplex inclusions, and the weak topology CW structure on the union $\operatorname{Gr}_n(\mathbb F^\infty)$ with each finite subcomplex contained in a finite stage ([[thm-schubert-cells-give-the-stable-grassmannian-cw-structure]]).

[F2] Every covering map has unique homotopy lifting, hence is a Hurewicz fibration ([[lem-covering-homotopies-lift-by-finite-local-strips]]), and the stable Stiefel space $V_1(\mathbb R^\infty)=S^\infty$ is contractible ([[thm-stable-stiefel-space-is-contractible]]). For a based fibration the long exact homotopy sequence is exact ([[thm-long-exact-sequence-of-homotopy-groups-of-a-fibration]]).

[F3] The mod-two cohomology of infinite real projective space is the polynomial ring $\mathbb F_2[a]$ on a degree-one class, and restriction to each finite skeleton is an isomorphism in degrees at most $n$ ([[lem-mod-two-cohomology-ring-of-infinite-real-projective-space]]).

[F4] The normalized fundamental class of a based CW Eilenberg–Mac Lane model is the identity class of the representability bijection, and marked CW models with the same group are homotopy equivalent by maps inducing the prescribed marking ([[thm-eilenberg-maclane-spaces-represent-singular-cohomology]], [[thm-existence-and-homotopy-uniqueness-of-eilenberg-maclane-spaces]]).

[F5] AC is used to select CW models and marked points and to pass between marked models ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 In the published models, $S^\infty=V_1(\mathbb R^\infty)$ and $\mathbb{RP}^\infty=\operatorname{Gr}_1(\mathbb R^\infty)$. Send a unit vector to its line. Over the open set of lines with nonzero coordinate $j$, choose the unique unit representative having positive $j$th coordinate; the other representative is its negative. These maps give two disjoint local sections and an evenly covered open set. Their formulas are continuous on every finite stage and therefore for the weak Grassmannian/Stiefel topologies. These open sets cover the base, so this is a two-sheeted covering with antipodal deck involution and discrete fiber $\{+1,-1\}$. [given, F1]

2.1 The published finite-local-strip covering-homotopy lemma makes this a Hurewicz fibration. Its total space is contractible by stable Stiefel contractibility; it is in particular connected and simply connected. The fibration long exact sequence gives $\pi_j(\mathbb{RP}^\infty)=0$ for $j\ge2$, since positive homotopy groups of the fiber vanish. Path lifting associates to a based loop its endpoint deck transformation. This is a group homomorphism: lifting successive loops composes their endpoint deck transformations. It is surjective since a path from a unit vector to its negative exists in the connected sphere, and injective since a loop whose lift closes is nullhomotopic in the contractible total space and its contraction projects to the base. Thus $\pi_1=\mathbb Z/2=\mathbb F_2$, with the stated marking. The published Schubert theorem gives the CW base. This proves the marked Eilenberg–Mac Lane claim. [step 1.1, F2, F5]

3.1 The published projective-space cohomology lemma gives a unique nonzero degree-one class $x$ and the ring $\mathbb F_2[x]$. The normalized fundamental class is nonzero by the published Eilenberg–Mac Lane representability theorem; uniqueness in degree one therefore identifies it with $x$. Marked Eilenberg–Mac Lane uniqueness transfers this ring to any chosen marked $K_1$. [step 2.1, F3, F4] ∎
