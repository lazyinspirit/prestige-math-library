---
id: lem-contractible-cosimplicial-evaluation-computes-derived-colimit
kind: lemma
title: "Contractible cosimplicial evaluation computes diagram derived colimits"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 3
proof_strategy: direct
justified_by: []
aliases: []
deps:
  - def-axiom-of-choice
  - def-simplicial-set-homotopy-and-trivial-kan-fibration
  - lem-simplicial-normalization-prism-and-trivial-fibration-criterion
  - lem-projective-representables-and-derived-colimits-of-module-diagrams
  - def-direct-sum-total-complex-of-a-double-complex
  - lem-left-total-derived-functor-is-independent-of-the-supplied-projective-replacement-up-to-unique-natural-isomorphism
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Cohomology on Sites, Section 39"
      url: "https://stacks.math.columbia.edu/download/sites-cohomology.pdf"
      locator: "Lemma 39.7 (tag 08Q9), printed 95; complete representable-projective and double-complex proof"
---

## Statement

Assume the Axiom of Choice (AC) ([[def-axiom-of-choice]]). Let $C$ be a small
category, $R$ a commutative ring, and $U\colon\Delta\to C$ a cosimplicial
object. Suppose that for every $V\in C$ the simplicial set
$n\mapsto\operatorname{Hom}_C(U_n,V)$ is contractible
([[def-simplicial-set-homotopy-and-trivial-kan-fibration]]). Then for every
contravariant $R$-module diagram $F$ on $C$ the simplicial module chain complex
$F(U_\bullet)$ is canonically isomorphic to
$L\operatorname{colim}_{C^{\mathrm{op}}}F$ in $D(R)$. The isomorphism is
functorial in $F$, and it is a canonical derived-category roof built from
projective resolutions; the contraction choices are used only to prove that
the arrows of the roof are quasi-isomorphisms.

## Facts & Assumptions

**Given:** AC; a small category $C$; a commutative ring $R$; a cosimplicial $U\colon\Delta\to C$ with $\operatorname{Hom}_C(U_\bullet,V)$ contractible for every $V$; a contravariant $R$-module diagram $F$.

[F1] The representable diagrams $R_V=R[\operatorname{Hom}_C(-,V)]$ are projective, evaluation is exact, and $F$ admits a bounded-above projective resolution $G_\bullet\to F$ whose terms are direct sums of representables; $K(F)$ is the bar complex and $L\operatorname{colim}_{C^{\mathrm{op}}}F$ is computed by $K(F)$ ([[lem-projective-representables-and-derived-colimits-of-module-diagrams]]).

[F2] A homotopy of simplicial sets induces a chain homotopy on free chains, and a homomorphism of simplicial abelian groups which is a homotopy equivalence of underlying simplicial sets induces a quasi-isomorphism of associated complexes ([[lem-simplicial-normalization-prism-and-trivial-fibration-criterion]]).

[F3] The direct-sum total complex of a double complex has $T_n=\coprod_{p+q=n}C_{p,q}$ and differential $h+v$ ([[def-direct-sum-total-complex-of-a-double-complex]]).

[F4] Two supplied projective replacement systems for the same additive functor give a natural isomorphism of left total derived functors, unique among natural comparisons commuting with the augmentations ([[lem-left-total-derived-functor-is-independent-of-the-supplied-projective-replacement-up-to-unique-natural-isomorphism]]).



## Proof

1.1 The double complex. Choose the supplied representable-sum projective resolution $G_\bullet\to F$ of [F1], with $G_p=0$ for $p<0$. Form the first-quadrant double complex $A_{p,q}=G_p(U_q)$ for $p,q\ge0$, with horizontal differential induced by the resolution $G_\bullet$ and vertical differential induced by the cosimplicial operators of $U$, one of the two signed so that the total differential squares to zero; let $T=\operatorname{Tot}^{\oplus}A$ be the direct-sum total complex of [F3]. Each $A_{p,q}$ is an $R$-module and each bidegree with $p+q=n$ contributes to a finite direct sum in total degree $n$. [F1, F3, given]

2.1 Exact rows. For fixed $q$ the evaluation functor at $U_q$ is exact by [F1], so the row $G_\bullet(U_q)\to F(U_q)$ is an exact augmented complex with augmentation $F(U_q)$ in degree zero. Hence the rows of $A$ are exact except for the augmentation to the degree-zero row $q\mapsto F(U_q)$. [F1, step 1.1]

2.2 Exact columns. For fixed $p$ the term $G_p$ is a direct sum of representables $R_V$, and $R_V(U_\bullet)=R[\operatorname{Hom}_C(U_\bullet,V)]$ is the free $R$-module on the simplicial set $\operatorname{Hom}_C(U_\bullet,V)$. By hypothesis that simplicial set is contractible, so by the prism argument of [F2] its free chain complex is chain homotopy equivalent to $R[\Delta[0]]$. The latter has $R$ in every nonnegative degree, differential zero in odd degrees and identity in positive even degrees; its augmentation to $R$ induces an isomorphism on $H_0$, and its positive homology vanishes. The augmentation of $R_V(U_\bullet)$ therefore induces $H_0\cong\operatorname{colim}R_V=R$, and the augmented column is acyclic. Summing over the direct summands, the column $G_p(U_\bullet)\to\operatorname{colim}G_p$ is acyclic in positive degrees, with $H_0=\operatorname{colim}G_p$. [F1, F2, step 1.1]

3.1 The roof and its quasi-isomorphisms. The augmentations of steps 2.1 and 2.2 give maps of complexes $F(U_\bullet)\leftarrow T\to\operatorname{colim}G_\bullet$, hence a roof in $D(R)$. Both maps are quasi-isomorphisms by finite-diagonal elimination: the cone of the map to $F(U_\bullet)$ is, up to shift and sign, the total of the horizontally augmented rows. In a total cycle, the component of largest $q$ is a horizontal cycle; exactness of the row in step 2.1 supplies a horizontal lift. Subtract its total boundary, eliminating that component and introducing terms only at $q-1$, and repeat down to $q=0$. This proves the cone acyclic. For the second map use the vertically augmented columns and eliminate the component of largest $p$ by step 2.2, introducing terms only at $p-1$. The augmented indices have lower bound $-1$, and each degree has finitely many bidegrees, so both eliminations terminate. [F3, step 2.1, step 2.2]

4.1 Identification with the derived colimit, canonically. By [F1] the complex $\operatorname{colim}G_\bullet$ computes $L\operatorname{colim}_{C^{\mathrm{op}}}F$. Composing the two quasi-isomorphisms of step 3.1 identifies $F(U_\bullet)$ with it in $D(R)$. Two choices of projective resolution are compared by comparison chain maps lifting the identity, and the resulting roofs agree by [F4] and its uniqueness statement, so the identification is canonical: it does not depend on the supplied replacement, and it is natural in $F$ because comparison lifts are natural and unique up to homotopy. The contraction choices of step 2.2 were used only to obtain the quasi-isomorphisms and do not enter the resulting canonical isomorphism. [F1, F4, step 3.1] ∎ 