---
id: thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients
kind: theorem
title: "Continuous cohomology is the direct limit over finite quotients"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
  - thm-finite-products-of-compact-spaces
  - def-continuous-cohomology-of-a-profinite-group-with-discrete-module
  - cor-normalized-cochains-compute-group-cohomology
  - def-filtered-category-and-filtered-colimit
  - lem-equality-in-a-filtered-colimit-of-sets-is-eventual
  - lem-filtered-colimits-of-abelian-groups-are-exact
  - def-profinite-group-by-inverse-limit
  - thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected
  - def-axiom-of-choice
  - def-dependent-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. S. Milne, Class Field Theory, version 4.03, Chapter II, Section 4, Proposition 4.2"
      url: "https://www.jmilne.org/math/CourseNotes/CFT.pdf"
    - title: "The Stacks Project, Algebra, Tag 00HA"
      url: "https://stacks.math.columbia.edu/tag/00HA"
verification: {}
---

## Statement

Let $G$ be a profinite group and let $M$ be a discrete abelian group with
continuous left $G$-action. Assume either that $G$ is compact or that the
Axiom of Choice holds. Use the normalized continuous-cochain definition of continuous cohomology.
For the derived-functor convention, additionally assume Dependent Choice and
supplied injective-resolution data; the same comparison then applies. For each open normal subgroup
$U\trianglelefteq G$, set
$$M^U=\{m\in M:u\cdot m=m\text{ for every }u\in U\},$$
regarded as a $G/U$-module. Order the open normal subgroups by reverse
inclusion. For $U\subseteq V$, use inflation along $G/U\to G/V$, together
with $M^V\hookrightarrow M^U$, as the transition map
$H^n(G/V,M^V)\to H^n(G/U,M^U)$. For every integer $n\ge0$, the resulting
natural map
$$\operatorname*{colim}_{U\trianglelefteq_o G}H^n(G/U,M^U)\longrightarrow H^n_{\mathrm{cts}}(G,M)$$
is an isomorphism.

## Statement references

[[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]

[[def-filtered-category-and-filtered-colimit]]

[[def-profinite-group-by-inverse-limit]]

[[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]]

[[def-dependent-choice]]

[[def-axiom-of-choice]]

[[lem-equality-in-a-filtered-colimit-of-sets-is-eventual]]

[[cor-normalized-cochains-compute-group-cohomology]]

[[lem-filtered-colimits-of-abelian-groups-are-exact]]

[J. S. Milne, *Class Field Theory*, Chapter II, Section 4, Proposition 4.2, printed pp. 87–88](https://www.jmilne.org/math/CourseNotes/CFT.pdf)

## Facts & Assumptions

**Given:** A profinite group $G$, a discrete continuous $G$-module $M$, and
$n\ge0$; also either compactness of $G$ or the Axiom of Choice. The cochain
definition of continuous cohomology is choice-free; Dependent Choice and the
supplied-resolution convention are used only if the derived-functor interpretation is requested.

[A1] The Axiom of Choice asserts that every family of nonempty sets has a
choice function ([[def-axiom-of-choice]]).

[A2] In the choice-free branch, compactness of $G$ is an explicit hypothesis.

[A3] Only for the derived-functor interpretation, Dependent Choice and supplied injective-resolution data are the convention
for the derived-functor notation in continuous cohomology
([[def-dependent-choice]], [[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]).

[F1] [[def-continuous-cohomology-of-a-profinite-group-with-discrete-module]]:
$H^n_{\mathrm{cts}}(G,M)$ is the cohomology of the normalized continuous
cochain complex; the derived-functor notation uses the supplied-resolution
convention.

[F2] [[cor-normalized-cochains-compute-group-cohomology]]: for a finite group
$Q$ and a left $Q$-module $N$, normalized inhomogeneous cochains compute
$H^n(Q;N)$.

[F3] [[def-filtered-category-and-filtered-colimit]]: a filtered colimit is a
colimit over a small filtered category; a poset is filtered when it is
nonempty and every pair has a common later object.

[F4] [[lem-filtered-colimits-of-abelian-groups-are-exact]]: for a small
filtered diagram of cochain complexes of abelian groups, cohomology commutes
with the filtered colimit.

[F5] [[def-profinite-group-by-inverse-limit]]: $G$ is an inverse limit of
finite discrete groups, and kernels of finite-coordinate projections form a
neighborhood basis of open normal subgroups.

[F7] [[thm-inverse-limit-of-finite-discrete-groups-is-hausdorff-compact-and-totally-disconnected]]:
assuming [A1], such an inverse limit is compact.

[F6] [[lem-equality-in-a-filtered-colimit-of-sets-is-eventual]]: two
representatives of a filtered colimit are equal exactly when their images
agree at a common later stage.

[F8] Finite products of compact spaces are compact without an additional choice axiom. [[thm-finite-products-of-compact-spaces]]

## Proof

**Given:** The data in the Statement, including its compactness-or-Choice alternative.

1.1 The indexing poset $\mathcal U$ of open normal subgroups of $G$, ordered by reverse inclusion, is small because its objects are subsets of $G$, is nonempty because it contains $G$, and is filtered because $U\cap V$ is an open normal subgroup contained in any given $U,V$. If $U\subseteq V$, then $M^V\subseteq M^U$ and $G/U\to G/V$ is a quotient map, so coefficient inclusion and inflation define transition maps on normalized cochains; the cochain differentials commute with these maps because the quotient action and the $G$-action on invariant coefficients agree. [F1, F3, construct]

1.2 In either allowed branch, $G$ is compact: directly by [A2], or by [A1] and [F7]. Let $c:G^n\to M$ be a continuous normalized cochain with $n>0$. Then $G^n$ is compact by [F8], so its continuous image in the discrete space $M$ is finite. Continuity and the open-normal neighborhood basis give a cover of $G^n$ by finitely many rectangles $\prod_{i=1}^n g_iV$ on each of which $c$ is constant, with every $V$ open normal. Intersect these finitely many $V$'s and the open stabilizers of the finitely many values of $c$; then choose an open normal subgroup $U$ inside that intersection. The cochain is constant on each coordinatewise $U$-coset and its values lie in $M^U$, so it descends to a normalized cochain on $(G/U)^n$ with values in $M^U$: a quotient tuple with an identity coordinate has a lift with that coordinate equal to the identity, so the descended value is zero. If $n=0$, a continuous degree-zero cochain is an element $m\in M$; its open stabilizer contains an open normal subgroup $U$, so $m\in M^U$ and it also descends. [A1, A2, F1, F5, F7, F8, given, construct]

2.1 Every normalized cochain on a finite quotient $G/U$ with values in $M^U$ inflates to a continuous normalized cochain on $G$. If two such finite-level cochains inflate to the same continuous cochain, their inflations to the common refinement $W=U\cap V$ agree, since $G/W\to G/U$ and $G/W\to G/V$ are surjective on tuples. By [F6], equality in the filtered colimit is exactly equality at such a common stage. Thus the natural map from the filtered colimit of finite-level cochain groups to $C^n_{\mathrm{cts}}(G,M)$ is an isomorphism in every degree. [F1, F3, F6, step 1.1, step 1.2]

3.1 The cochain isomorphisms in step 2.1 commute with the differentials by step 1.1, so they identify the continuous normalized cochain complex with the filtered colimit of the finite-quotient normalized cochain complexes. [F1, step 1.1, step 2.1]

4.1 By [F4], the cohomology of that filtered colimit is the filtered colimit of the finite-level cohomology groups. By [F2], each finite-level normalized cohomology group is $H^n(G/U,M^U)$, while [F1] identifies the cohomology of the limit complex with $H^n_{\mathrm{cts}}(G,M)$. These are the transition maps specified in the Statement, proving the claimed isomorphism in the cochain convention without using [A3]. Under [A3] this is also the stated derived-functor comparison. [F1, F2, F4, step 3.1] ∎