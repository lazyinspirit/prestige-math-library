---
id: lem-author-e216acade157-low-dimensional-quotient
kind: lemma
title: The low-dimensional quotient follows from the stage sequence
status: published
domain: mathematics
deps:
  - lem-author-e216acade157-perfect-image-formula
  - lem-filtered-stage-exact-sequence
  - lem-high-filtration-vanishing
  - def-filtration-projections
  - math:def-axiom-of-choice
  - math:thm-first-isomorphism-theorem-groups
  - lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:lem-field-is-noetherian
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-algebraically-closed-field
dependency_roles:
  lem-author-e216acade157-perfect-image-formula: mathematical-premise
  lem-filtered-stage-exact-sequence: mathematical-premise
  lem-high-filtration-vanishing: mathematical-premise
  def-filtration-projections: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:thm-first-isomorphism-theorem-groups: mathematical-premise
  lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs: mathematical-premise
  math:def-locally-finite-type-and-finite-type-morphism: mathematical-premise
  math:lem-field-is-noetherian: mathematical-premise
  math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-algebraically-closed-field: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
proof_strategy: direct
dependency_level: 29
formulation_deps:
  - lem-author-e216acade157-perfect-image-formula
  - lem-high-filtration-vanishing
  - def-filtration-projections
  - math:def-axiom-of-choice
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:def-algebraically-closed-field
argument_deps:
  - lem-author-e216acade157-perfect-image-formula
  - lem-filtered-stage-exact-sequence
  - lem-high-filtration-vanishing
  - def-filtration-projections
  - math:def-axiom-of-choice
  - math:thm-first-isomorphism-theorem-groups
  - lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs
  - math:def-locally-finite-type-and-finite-type-morphism
  - math:lem-field-is-noetherian
  - math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - math:def-locally-noetherian-and-noetherian-scheme
---

## Statement
Assume the Axiom of Choice and the fixed site and universe bounds of the supplied constructions. Let $k$ be algebraically closed and $X$ a normal finite-type $k$-scheme. If $d=\dim X\leq3$, the actual projection induces an isomorphism
$$F^2_{\rm mot}K_0(X)/F^3_{\rm mot}K_0(X)\xrightarrow{\ \overline p_2\ }H^{4,2}_{\rm mot}(X,\mathbb Z),\qquad\overline p_2=-\overline c_2.$$
If $d\leq2$, the third image subgroup itself is zero.

## Facts & Assumptions
[A1] Assume the Axiom of Choice as formulated in [[math:def-axiom-of-choice]] and the fixed compatible site and universe bounds of the supplied constructions, including their required universe enlargements. Universe existence is an additional size assumption, separate from Choice. These are the assumptions of the high-filtration and perfect-image suppliers in [F2] and [F3]; Choice is also retained for the finite-type qcqs supplier in [F4]. They are used at steps 1.1–2.1.

[F0] Algebraic closedness has the meaning in [[math:def-algebraically-closed-field]]. Normality means that each local ring is an integrally closed domain, as in [[def-filtration-projections]]. That definition supplies the actual stage projection and its weight-two motivic-cohomology target. [[lem-author-e216acade157-perfect-image-formula]] specifies perfect-complex $K_0$, the actual perfect second Chern operation and the image groups $F^j_{\rm mot}K_0(X)=\operatorname{im}(\pi_0\operatorname{Fil}^jK(X)\to K_0(X))$. The dimension convention, stable homotopy groups and empty-scheme convention are those in [[lem-high-filtration-vanishing]]; in particular $\dim\varnothing=-\infty$.

[F1] [[lem-filtered-stage-exact-sequence]] gives the exact sequence of abelian groups ending in $\pi_0\operatorname{Fil}^2K(X)\to H^{4,2}_{\rm mot}(X,\mathbb Z)\to\pi_{-1}\operatorname{Fil}^3K(X)$, using the actual graded identification in [[def-filtration-projections]].

[F2] [[lem-high-filtration-vanishing]] applies to a Noetherian scheme of finite dimension $d$ over a field under [A1]. It gives $\pi_j\operatorname{Fil}^iK(X)=0$ for $j<0$ and $i\geq d$, and $\pi_0\operatorname{Fil}^iK(X)=0$ for $i>d$; it includes zero stages on the empty scheme. [[def-filtration-projections]] identifies the second-stage group with its image under the present normal algebraically closed hypotheses, once the qcqs domain is checked.

[F3] [[lem-author-e216acade157-perfect-image-formula]] identifies the actual transported homomorphism with $-c_2$ and its kernel with the third image subgroup under [A1] on every qcqs field-scheme. No injectivity of the third-stage augmentation is required.

[F4] Finite type means that the structure morphism $X\to\operatorname{Spec}k$ is locally of finite type and quasi-compact, as in [[math:def-locally-finite-type-and-finite-type-morphism]]; its local condition gives an affine open cover by spectra of finitely generated $k$-algebras. Under Choice, [[lem-adjudicate-a6bf10648fa2-finite-type-field-qcqs]] gives quasi-compactness of every open subset, hence the qcqs evaluation domain, without a separatedness assumption.

[F5] [[math:lem-field-is-noetherian]] makes $k$ Noetherian. [[math:cor-finite-type-algebra-over-noetherian-ring-is-noetherian]] makes each finitely generated commutative $k$-algebra Noetherian. By [[math:def-locally-noetherian-and-noetherian-scheme]], a scheme with a finite affine open cover by spectra of Noetherian rings is Noetherian; equivalently, it is locally Noetherian and quasi-compact.

[F6] [[math:thm-first-isomorphism-theorem-groups]] sends a group homomorphism $f:G\to H$ to the well-defined isomorphism $G/\ker f\to\operatorname{im}f$ taking the coset of $g$ to $f(g)$.

## Proof
**Given:** $X$ in the stated normal finite-type algebraically closed scope, of dimension at most three, with Choice and the fixed compatible site and universe bounds as in [A1].

**Goal:** Prove the stated quotient, its actual induced map and sign, and third-image vanishing in dimension at most two, without a later surjectivity consumer.

1.1 By [F4], $X$ is qcqs and its affine open cover by spectra of finitely generated $k$-algebras has a finite subcover. Each of those algebras is Noetherian by [F5], so this finite cover makes $X$ a Noetherian scheme. The given $d\leq3$ is finite when $X$ is nonempty; the empty case is included by [F2]. Since $3\geq d$, [F2] now makes $\pi_{-1}\operatorname{Fil}^3K(X)$ zero. Exactness of [F1] makes the second-stage projection surjective. Transfer this to $F^2_{\rm mot}K_0(X)$ through its stage-image isomorphism in [F2], obtaining surjectivity of the actual homomorphism $p_2$ in [F3]. [given, A1, F0, F1, F2, F3, F4, F5]

2.1 By [F3], $\ker p_2=F^3_{\rm mot}K_0(X)$ and $p_2=-c_2$. Apply [F6] to this homomorphism; its image is the whole target by step 1.1. The induced isomorphism is $\overline p_2(\alpha+F^3_{\rm mot}K_0(X))=p_2(\alpha)=-c_2(\alpha)$, so it is well-defined and has exactly the displayed sign. If $d\leq2$, then $3>d$ and [F2] makes $\pi_0\operatorname{Fil}^3K(X)=0$; its image $F^3_{\rm mot}K_0(X)$ is therefore zero by [F0]. No later second-Chern-surjectivity proposition is used. [A1, F0, F2, F3, F6, step 1.1] ∎
