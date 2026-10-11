---
id: thm-lifting-of-indecomposable-projectives-to-the-deformed-family
kind: theorem
title: Lifting of indecomposable projectives to the deformed family
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 6
deps: [def-the-deformed-category-o-family-and-its-specializations,
       thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra,
       thm-universal-property-of-verma-modules,
       thm-category-o-has-enough-projectives,
       prop-projective-covers-in-o-are-indecomposable-and-unique,
       thm-every-category-o-object-has-finite-length,
       lem-finite-length-objects-decompose-into-indecomposables,
       thm-bgg-reciprocity,
       lem-finite-dimensional-tensors-reach-every-block-simple,
       prop-translation-functors-are-exact-and-biadjoint-across-a-wall,
       thm-harish-chandra-isomorphism-for-the-center,
       cor-central-characters-are-dot-weyl-orbits,
       thm-nakayama-lemma,
       thm-chinese-remainder-theorem-for-comaximal-ideals,
       def-axiom-of-choice,
       lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label,
       lem-dominant-norm-distance-comparison,
       lem-weight-norm-bound-for-finite-dimensional-simple-modules,
       def-verma-flag-and-its-multiplicities]
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
      locator: "Section 2.1, Propositions 2-5 and their proofs (preprint pp. 7-10): the deformed projectives and the base-change statement"
    - title: "Wolfgang Soergel, Universelle versus relative Einhuelle (Math. Ann. 284 (1989) 177-198)"
      url: "https://gdz.sub.uni-goettingen.de/download/pdf/PPN235181684_0284/LOG_0020.pdf"
      locator: "Section 2.1, Proposition 1 and Section 3.5, Corollary 8 (pp. 180 and 185); image-only scan read via OCR"
---

## Statement

Assume the Axiom of Choice. Let $\lambda$ be dominant regular integral,
$R=S(\mathfrak h)_{(0)}$ the localization at the origin, and use the selected
component $\mathcal D_R^{[\lambda]}(\lambda)$ of the tensor-generated deformed
family of [[def-the-deformed-category-o-family-and-its-specializations]]. For
every $x\in W$ there is a projective $P_R(x,\lambda)$ in the deformed
$\lambda$-block whose residue fiber is $P(x\cdot\lambda)$; it is unique up to
isomorphism, and every indecomposable of this selected tensor component is one
of these lifts. Each lift has a finite deformed Verma flag with the same
multiplicities as its closed fiber. More generally, a finite projective in this
block is a direct summand of a finite sum of truncated induced projectives
representing relative weight spaces; for every map of deformation algebras
$R\to R'$ its base change is projective in the corresponding truncated category
and
$$\operatorname{Hom}_{\mathcal O_R}(P,N)\otimes_RR'\cong\operatorname{Hom}_{\mathcal O_{R'}}(P\otimes_RR',N\otimes_RR').$$
For a finite Verma-filtered target $N$ this Hom module is finite free over
local $R$. A $\mathfrak g\otimes R$-linear map between such finite
projective/Verma-filtered objects whose residue fiber is an isomorphism is
itself an isomorphism, weight by weight. For a dot-dominant integral target
$\nu$, including singular $\nu$, the same local projective construction gives
all lifts in its deformed block, with labels the distinct cosets $W/W_\nu$;
these lifts belong to the target component $\mathcal D_R^{[\nu]}(\lambda)$ of a
regular-source tensor family. It is neither necessary nor asserted that the
singular Verma itself generates every target projective, and the other central
components of the full tensor family are not claimed to have only these
indecomposables.

## Facts & Assumptions

**Given:** The deformed family over a localization $T$ of $S=S(\mathfrak h)$, the local ring $R=S_{(0)}$, and the weight functor $N\mapsto N^\xi$ on weights.

[F1] The truncated positive PBW part $U(\mathfrak b)$ above $\lambda-\xi$ is finite right-$U(\mathfrak h)$-free; tensoring its quotient with the deformed rank-one weight module and inducing to $\mathfrak g$ yields $Q_R(\xi)$ with a finite deformed Verma flag representing the weight functor $N\mapsto N^\xi$ on weights $\le\lambda$; its Hom functor commutes with arbitrary algebra base change ([[thm-pbw-ordered-monomial-basis-for-the-enveloping-algebra]], [[def-the-deformed-category-o-family-and-its-specializations]], [[thm-universal-property-of-verma-modules]]).

[F2] Finite central polynomial projectors isolate central components: a central element separating the finitely many special characters of the flag factors has grouped annihilating polynomials with pairwise-unit resultants, so Chinese remaindering in $R[X]$ gives actual idempotent endomorphisms over $R$ ([[thm-harish-chandra-isomorphism-for-the-center]], [[cor-central-characters-are-dot-weyl-orbits]], [[thm-chinese-remainder-theorem-for-comaximal-ideals]], [[def-the-deformed-category-o-family-and-its-specializations]]).

[F3] A direct summand of a finite deformed Verma flag over local $R$ is deformed Verma-filtered: for a maximal label $\nu$ the canonical submodule $U(\mathfrak g)X^\nu=\Delta_R(\nu)\otimes_RX^\nu$ has Verma-filtered quotient, every idempotent preserves it, its top-weight image is finite free over local $R$, and induction on the quotient descends the flag ([[def-verma-flag-and-its-multiplicities]], [[lem-finite-length-objects-decompose-into-indecomposables]]).

[F4] Nakayama: a map between finite free modules over the local ring $R$ that is an isomorphism modulo the maximal ideal is an isomorphism ([[thm-nakayama-lemma]]).

## Proof

**Proof technique:** direct.

1.1 For $\xi\le\lambda$, the truncated induced object $Q_R(\xi)$ of [F1] represents the weight functor $N\mapsto N^\xi$ on the truncated category: evaluating at the cyclic tensor generator shows that all excluded positive PBW monomials kill a vector of weight $\xi$, so $\operatorname{Hom}(Q_R(\xi),N)\cong N^\xi$. Consequently $Q_R(\xi)$ is projective, and for finite sums and direct summands this Hom functor still commutes with arbitrary algebra base change, being the image of a split weight-space idempotent. [F1]

2.1 Central components are isolated by actual central projectors: by [F2] the Chinese remainder construction over $R[X]$ produces idempotents cutting out the selected component $\mathcal D_R^{[\lambda]}(\lambda)$ from the full tensor family, without any completion. Direct summands of the resulting finite projectives are again deformed Verma-filtered by [F3]. [F2, F3, step 1.1]

2.2 Induct over the finite dot orbit downward from the dominant weight. The selected $Q_R(\lambda)$ has residue fiber containing $P(\lambda)$ once and only projectives $P(\eta)$ with $\eta>\lambda$ besides; subtracting the higher terms successively with the unitriangular BGG matrix over the residue field ([[thm-bgg-reciprocity]]) leaves a projective whose residue fiber is exactly $P(\lambda)$, giving $P_R(\lambda)$. Replacing $Q_R(\xi)$ by the corresponding truncated object at a general $\xi$ and repeating the same subtraction along the orbit yields $P_R(\xi)$ with residue fiber $P(\xi)$ for every orbit element; the construction is unique up to isomorphism because a projective with a given residue decompositions and no higher terms is determined by its class. [F1, F3, step 1.1, algebra]

3.1 Wall-crossing compositions over $R$ lift the covering statement of [[lem-wall-crossing-compositions-produce-the-projective-with-the-top-standard-label]]: the projected tensor word over $R$ has a finite deformed Verma flag whose multiplicities specialize to those at the origin, and its residue-fiber decomposition into the $P(x)$ lifts through the finite projective lifting of step 2.2, so every indecomposable of the selected component is one of the $P_R(x,\lambda)$. Each lift has the same flag multiplicities as its closed fiber. [step 2.2, algebra]

4.1 Base change: for a map $R\to R'$ of deformation algebras, the representing property of step 1.1 gives the displayed isomorphism for finite sums of the $Q_R(\xi)$ and hence, by taking images of split idempotents, for all finite projectives and finite Verma-filtered targets; the module is finite free over the local ring $R$ by step 1.1. [step 1.1, step 3.1, algebra]

5.1 A $\mathfrak g\otimes R$-linear map between such objects with isomorphic residue fiber acts invertibly on each finite free weight space modulo the maximal ideal; by [F4] it is invertible on each weight space, hence an isomorphism, weight by weight. This gives the claimed weightwise Nakayama statement. [F4, step 4.1]

6.1 For a dot-dominant integral target $\nu$, including singular, the same truncated projective construction over the target component replaces the labels $W$ by the distinct cosets $W/W_\nu$, with the stabilizer computed from the singular facet; the construction proceeds by the same downward orbit induction, and the resulting lifts lie in $\mathcal D_R^{[\nu]}(\lambda)$ by construction. No claim is made about central components other than the selected ones. [step 2.2, step 3.1, algebra] ∎
