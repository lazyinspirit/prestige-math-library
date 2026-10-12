---
id: thm-indecomposable-projectives-correspond-to-indecomposable-soergel-modules
kind: theorem
title: Indecomposable projectives correspond to indecomposable Soergel modules
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 11
deps: [thm-soergels-struktursatz-full-faithfulness-on-projectives,
       thm-wall-crossing-under-the-soergel-functor-is-tensoring-with-the-coinvariant-soergel-bimodule,
       lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label,
       def-the-antidominant-projective-and-the-soergel-functor,
       thm-indecomposable-type-a-diagrammatic-soergel-objects-are-indexed-by-permutations-and-shifts,
       lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree,
       def-reduced-soergel-module-and-dominant-lefschetz-operator,
       def-axiom-of-choice,
       thm-lifting-of-indecomposable-projectives-to-the-deformed-family,
       thm-wedderburn-artin-theorem,
       def-type-a-standard-graph-bimodules-support-filtrations-and-character,
       def-invariant-intersection-form-on-a-bott-samelson-bimodule,
       lem-the-central-action-on-the-deformed-antidominant-projective,
       prop-translation-functors-are-exact-and-biadjoint-across-a-wall,
       thm-indecomposable-projective-functors-are-indexed-by-the-weyl-group,
       thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra,
       def-type-a-soergel-bimodule-for-a-simple-reflection,
       def-the-type-a-soergel-category]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Wolfgang Soergel, Kategorie O, perverse Garben und Moduln ueber den Koinvarianten zur Weylgruppe, J. Amer. Math. Soc. 3 (1990) 421-445 (MPIM preprint 1989/46 full text)"
      url: "https://archive.mpim-bonn.mpg.de/3653/1/preprint_1989_46.pdf"
      locator: "Section 2.5, Theorem 11 and the description of VP(x.A) at the end of the section (preprint pp. 18-19); Section 1.2, Theorem 4: VP(x^{-1}.0) = D_x"
    - title: "Arthur Garnier, The classical theory of Soergel bimodules and the link with Lusztig's conjecture, Oberwolfach Arbeitsgemeinschaft note (2022)"
      url: "https://www.lamfa.u-picardie.fr/agarnier/talks/soergel_notes.pdf"
      locator: "Corollary 4.21(1)-(2): V restricts to an equivalence Proj(O_0) -> {ungraded Soergel modules}, V(P_x) = C\\otimes_R BS(x) and V(P_x) = C\\otimes_R B_x"
---

## Statement

Assume the Axiom of Choice and work in a regular integral type-A block over
$\mathbb C$. With the page's right wall-crossing convention and left
$C$-module values of $V$, there is an equivalence
$$V\colon\operatorname{Proj}(\mathcal O_\lambda)\xrightarrow{\sim}\{\text{ungraded Soergel modules }B\otimes_S\mathbb C\},\qquad P(w\cdot\lambda)\longmapsto\bar B_{w^{-1}}.$$
The target is the additive category of direct summands of the right reductions
of polynomial Bott-Samelson bimodules, or equivalently of iterated
$C\otimes_{C^s}(-)$ applied to the trivial module $\mathbb C$, not to the
regular module $C$. For $w=s_1\cdots s_k$, the projective is the unique new
top-label summand of $\theta_{s_k}\cdots\theta_{s_1}\Delta(\lambda)$; applying
$V$ gives the new summand of $\overline{B_{s_k}\cdots B_{s_1}}$, thus the
inverse label. These normalized indecomposable polynomial lifts supply
self-dual auxiliary gradings; in rank one the centered degrees are $-1,1$,
with degrees $0,2$ after an uncentered shift. Forgetting grading recovers the
projective dictionary. More generally the ungraded equivalence with
Weyl-group Soergel modules holds for every complex semisimple regular integral
block; the type-A diagrammatic label comparison applies only in type A.

## Facts & Assumptions

**Given:** The Axiom of Choice ([[def-axiom-of-choice]]), the regular integral block with $C=\operatorname{End}(P(w_0\cdot\lambda))$ and $V=\operatorname{Hom}(P(w_0\cdot\lambda),-)$, the deformed family with $R=S(\mathfrak h)_{(0)}$, and the type-A polynomial data of the suppliers below.

[F1] $V$ is exact, $VP\cong C$, $V$ is fully faithful on projectives and induces an equivalence of the quotient by $\ker V$ with finite $C$-modules ([[thm-endomorphisms-of-the-antidominant-projective-are-the-coinvariant-algebra]], [[thm-soergels-struktursatz-full-faithfulness-on-projectives]], [[def-the-antidominant-projective-and-the-soergel-functor]]).

[F2] Wall crossing under $V$: $V\theta_s\cong C\otimes_{C^s}V$; for a reduced word $w=s_1\cdots s_k$ the object $\theta_{s_k}\cdots\theta_{s_1}\Delta(\lambda)$ has $P(w\cdot\lambda)$ as its unique new top-label summand, and every projective is a summand of such a word applied to $\Delta(\lambda)$ ([[thm-wall-crossing-under-the-soergel-functor-is-tensoring-with-the-coinvariant-soergel-bimodule]], [[lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label]], [[thm-indecomposable-projective-functors-are-indexed-by-the-weyl-group]]).

[F3] Deformed local data: Hom base change for lifted projectives, the weightwise Nakayama criterion, the central orders $\operatorname{End}(P_R^\lambda)\cong R\otimes_{R^W}R$ and $\operatorname{End}(P_R^\nu)\cong R^H\otimes_{R^W}R$, and exactness/biadjointness of the translations ([[thm-lifting-of-indecomposable-projectives-to-the-deformed-family]], [[lem-the-central-action-on-the-deformed-antidominant-projective]], [[prop-translation-functors-are-exact-and-biadjoint-across-a-wall]]).

[F4] Type-A polynomial data: the graded $(S,S)$-bimodule $B_i=S\otimes_{S^{s_i}}S(1)$ and Bott-Samelson products, the right origin reduction $\bar M=M\otimes_S\mathbb C$, the graph standard bimodules $\Delta_w$ with their support filtrations and characters, the diagrammatic indecomposables $D_w$ indexed by $S_n$ up to shift, and the rational/real agreement for characters, reduction, Hom spaces and the multiplication rules ([[def-type-a-soergel-bimodule-for-a-simple-reflection]], [[def-the-type-a-soergel-category]], [[def-type-a-standard-graph-bimodules-support-filtrations-and-character]], [[def-reduced-soergel-module-and-dominant-lefschetz-operator]], [[thm-indecomposable-type-a-diagrammatic-soergel-objects-are-indexed-by-permutations-and-shifts]], [[lem-rational-and-real-type-a-soergel-characters-and-indecomposable-labels-agree]]).

[F5] The batch-12 invariant intersection form supplies, for every indecomposable polynomial $B_w$, a nondegenerate centered reduced invariant form: its finite invariance equations are rational, their rational solution space extends to the real one, and a nonzero determinant polynomial over an infinite field gives a nondegenerate rational solution whose scalar extension to $\mathbb C$ preserves the determinant, so the reduction is graded self-dual ([[def-invariant-intersection-form-on-a-bott-samelson-bimodule]], clauses (5)-(6)).

[F6] Wedderburn-Artin: a finite-dimensional semisimple complex algebra is a product of matrix algebras, and the grading derivation of a finite-dimensional graded algebra is inner on each matrix factor of its semisimple quotient ([[thm-wedderburn-artin-theorem]], [algebra]).

## Proof

**Proof technique:** direct.

1.1 At a height-one root prime $p$ with $T=R_p$, a two-label component has the upper projective $P_a=\Delta_T(a)$ and the pair projective $P_b$; $\operatorname{Hom}(P_a,P_b)$ and $\operatorname{Hom}(P_b,P_a)$ are free of rank one, the canonical inclusion $i$ generates the first, and choosing $j$ in the second lifting its nonzero residual map gives a nonzero nilpotent $ij$ on the residue while $ji=h$ vanishes modulo $p$ by the nonsplitness of the residual standard extension; $1$ and $ij$ are residually independent and form a $T$-basis of the order $\operatorname{End}(P_b)=Z=\{(u_a,u_b):u_a\equiv u_b\bmod\tau(\alpha^\vee)\}$ of [F3], in generic tuple coordinates $ij=(h,0)$ and the order has basis $(1,1),(\alpha,0)$ with $\alpha=\tau(\alpha^\vee)$, so $h$ is a unit times $\alpha$ and rescaling $j$ makes $ji=\alpha$; then $V_T=\operatorname{Hom}(P_b,-)$ sends $P_b$ to $Z$ and $P_a$ to the rank-one upper branch $T$, with $\operatorname{Hom}_Z(Z,Z)=Z$, $\operatorname{Hom}_Z(T,T)=T$, $\operatorname{Hom}_Z(Z,T)=T$ generated by the projection and $\operatorname{Hom}_Z(T,Z)=T(\alpha,0)$, and $V(j),V(i)$ are these generators. [F1, F3, algebra]

1.2 For a polynomial Bott-Samelson bimodule $B$ the right localization $M=B\otimes_SR$ at the origin is finite free over $R$, and left denominators nonzero at $0$ act invertibly on it by the finite-End/Nakayama argument; since positive $W$-invariants act equally on the left and on the right, both $R$-actions factor through $A=R\otimes_{R^W}R$ (after splitting off the fixed average coordinate of the permutation realization as in [F4]), and the deformed wall-crossing formula [F2] identifies these $A$-modules with $V_R$ of the corresponding translated projective words, the empty word mapping to the identity graph branch $R$. [F2, F4]

2.1 Let $Q,Q'$ be deformed block projectives over $R$; their Hom module and the Hom module of their $V_R$-values are finite free, and $\operatorname{Hom}_A(V_RQ,V_RQ')$ is the intersection of its height-one localizations because $A$-linearity and preservation of the free target are finite collections of polynomial equations compatible with flat localization, while $\operatorname{Hom}(Q,Q')$ has the same intersection property by freeness; the canonical map is an isomorphism at every height-one prime by step 1.1 and the one-label Morita case at nonroot primes and the generic point, so it is an isomorphism over $R$: $V_R$ is fully faithful on deformed projectives. [F1, F3, step 1.1]

3.1 For polynomial Bott-Samelson modules $M,M'$ the module $\operatorname{Hom}_A(M,M')$ is the localization of the polynomial Hom module, and the composite $\operatorname{Hom}_A(M,M')\otimes_R\mathbb C\cong\operatorname{Hom}_{\mathcal O_R}(Q_R,Q_R')\otimes_R\mathbb C\cong\operatorname{Hom}_{\mathcal O}(Q,Q')\cong\operatorname{Hom}_C(VQ,VQ')$ is the natural reduction map by step 2.1, projective Hom base change and the ordinary Struktursatz, all maps being the canonical composition maps; hence reduction-of-Hom holds for Bott-Samelson modules and, by taking summands, for all polynomial Soergel bimodules, the degree components giving the graded statement. [F1, F3, step 1.2, step 2.1]

4.1 The polynomial $B_w$ is indecomposable with local degree-zero endomorphism algebra of residue $\mathbb Q$ by [F4], and this remains local over $\mathbb C$; the degree-zero endomorphism algebra of the reduced $\bar B_w$ is a quotient of that local algebra by step 3.1, hence local with residue $\mathbb C$, and its full ungraded endomorphism algebra is local as well by the finite graded-algebra argument: the Jacobson radical is graded (grading-scaling automorphisms preserve it, Vandermonde combinations project to homogeneous components), the semisimple quotient is a product of matrix algebras by [F6], the grading derivation is inner on each matrix factor with diagonalizable centralizer, so the degree-zero part of the quotient is semisimple and, being a quotient of the local degree-zero algebra, equals $\mathbb C$; hence $\bar B_w$ is indecomposable after forgetting the grading, and every reduced Bott-Samelson object decomposes into the $\bar B_w$. [F4, F6, step 3.1]

5.1 The batch-12 invariant form clause gives a nondegenerate centered reduced invariant form on each $\bar B_w$, so the normalized lift is self-dual in the centered grading of [F5]; any two finite graded lifts with the same indecomposable underlying $C$-module differ by a shift: decomposing an ungraded isomorphism and its inverse into finitely many homogeneous components writes the degree-zero identity as a finite sum $\sum_dg_{-d}f_d$, and since the degree-zero endomorphism algebra is local some $g_{-d}f_d$ is a unit, so $f_d$ is a split graded injection, an isomorphism after a shift, and a nonzero shift of a centered self-dual module cannot remain centered self-dual by the symmetry of its extreme degrees; thus the centered normalization is unique and in rank one it has degrees $-1,1$, the uncentered shift to $0,2$ being an alternative normalization. [F5, step 4.1]

5.2 Induction on Bruhat length gives the label dictionary: for a reduced word $w=s_1\cdots s_k$, $P(w\cdot\lambda)$ is the unique new top-label summand of $\theta_{s_k}\cdots\theta_{s_1}\Delta(\lambda)$ by [F2], and applying $V$ and the iterated wall-crossing formula gives the new summand of the reduced left tensor word $\overline{B_{s_k}\cdots B_{s_1}}$, whose top graph label is the inverse $w^{-1}$, while every proper subexpression contributes already-matched smaller labels; full faithfulness of step 2.1 for the deformed side and the indecomposability of step 4.1 match the two new summands uniquely, so $VP(w\cdot\lambda)\cong\bar B_{w^{-1}}$, and distinct labels remain non-isomorphic because $V$ is fully faithful on projectives. [F2, step 2.1, step 4.1]

6.1 Therefore $V$ restricts to the claimed equivalence between the projective category and the additive category of direct summands of right reductions of Bott-Samelson bimodules, equivalently the Karoubi envelope of the operators $C\otimes_{C^s}(-)$ applied to the trivial module $V\Delta(\lambda)=\mathbb C$ rather than to the regular module $C$; the same argument with the Weyl-group indecomposable labels in place of the type-A diagrammatic labels gives the ungraded equivalence for every complex semisimple regular integral block, the polynomial lifts supply the auxiliary self-dual gradings normalized as in step 5.1, and forgetting them recovers the projective dictionary $P(w\cdot\lambda)\leftrightarrow\bar B_{w^{-1}}$. [F2, step 1.2, step 5.1, step 5.2] ∎
