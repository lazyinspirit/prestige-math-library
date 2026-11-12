---
id: lem-author-7dc5154c7a6f-spectral-kzero-stability
kind: lemma
title: Spectral K-zero equality gives an actual projective stabilization
status: published
domain: mathematics
deps:
  - def-vector-bundle-classes
  - lem-k-zero-stable-equivalence
  - lem-author-7dc5154c7a6f-module-stabilization
  - math:def-axiom-of-choice
  - math:def-commutative-ring
  - math:def-noetherian-ring-and-module
  - math:def-affine-scheme
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:thm-affine-schemes-quasi-separated
  - math:def-grothendieck-universe-closure-convention
dependency_roles:
  def-vector-bundle-classes: mathematical-premise
  lem-k-zero-stable-equivalence: mathematical-premise
  lem-author-7dc5154c7a6f-module-stabilization: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:def-commutative-ring: mathematical-premise
  math:def-noetherian-ring-and-module: mathematical-premise
  math:def-affine-scheme: mathematical-premise
  math:def-locally-noetherian-and-noetherian-scheme: mathematical-premise
  math:def-quasi-compact-and-quasi-separated-scheme: mathematical-premise
  math:thm-affine-schemes-quasi-separated: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
formulation_deps:
  - def-vector-bundle-classes
  - lem-author-7dc5154c7a6f-module-stabilization
  - math:def-axiom-of-choice
  - math:def-commutative-ring
  - math:def-noetherian-ring-and-module
  - math:def-affine-scheme
  - math:def-grothendieck-universe-closure-convention
argument_deps:
  - def-vector-bundle-classes
  - lem-k-zero-stable-equivalence
  - lem-author-7dc5154c7a6f-module-stabilization
  - math:def-axiom-of-choice
  - math:def-commutative-ring
  - math:def-noetherian-ring-and-module
  - math:def-affine-scheme
  - math:def-locally-noetherian-and-noetherian-scheme
  - math:def-quasi-compact-and-quasi-separated-scheme
  - math:thm-affine-schemes-quasi-separated
  - math:def-grothendieck-universe-closure-convention
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 14
---

## Statement
Assume AC and the suitable universes of the article's perfect K-theory construction. Let $A$ be a commutative unital noetherian ring, put $X=\operatorname{Spec}A$, and let $E,F$ be vector bundles on $X$, meaning finite locally free $\mathcal O_X$-modules. Equality $[E]=[F]$ in the article's perfect spectral $K_0(X)$ is equivalent to an isomorphism of finite projective $A$-modules $\Gamma(X,E)\oplus A^N\cong\Gamma(X,F)\oplus A^N$ for some integer $N\geq0$. This is the bundle/perfect K-zero interface, without a passage through coherent-sheaf G-theory.

## Facts & Assumptions

**Given:** AC, the stated universes, a commutative unital noetherian ring $A$, the affine scheme $X=\operatorname{Spec}A$, and vector bundles $E,F$ on $X$.

**Goal:** Establish the stated conclusion.

[A1] AC is assumed through the supplied affine perfect-K-zero comparison and affine bundle/module interfaces. Suitable universes satisfying the supplied closure convention and the suppliers' size bounds are assumed separately; their existence is not deduced from AC. No additional choice principle is introduced by this composition. [[math:def-axiom-of-choice]], [[math:def-grothendieck-universe-closure-convention]]

[F1] For a quasi-compact, quasi-separated scheme under [A1], the spectral group and bundle classes have the supplied meaning. On an affine scheme the comparison identifies this group with the vector-bundle Grothendieck group $K^0(X)$ and preserves bundle classes. A vector bundle means a finite locally free $\mathcal O_X$-module. [[def-vector-bundle-classes]]

[F2] Under AC, on a noetherian affine scheme equality of vector-bundle classes in $K^0(X)$ is equivalent to stabilization by the same finite free bundle. [[lem-k-zero-stable-equivalence]]

[F3] Under AC, stabilization is carried to and from modules on an affine scheme. Here $\Gamma(X,E)=E(X)$, $A^N$ is the module of $N$-tuples, and finite direct sums have componentwise operations. A finite projective module is a finitely generated module with the lifting property through surjective module homomorphisms. The modules of sections, the finite free summands and their displayed sums are finite projective, including when $N=0$. [[lem-author-7dc5154c7a6f-module-stabilization]]

[F4] We use commutative unital rings; noetherian means that every ideal is finitely generated. The affine presentation $X=\operatorname{Spec}A$ carries its structure sheaf $\mathcal O_X$. [[math:def-commutative-ring]], [[math:def-noetherian-ring-and-module]], [[math:def-affine-scheme]]

[F5] A scheme is noetherian if it is locally noetherian and quasi-compact; equivalently, it has a finite affine open cover by spectra of noetherian rings. [[math:def-locally-noetherian-and-noetherian-scheme]]

[F6] Every affine scheme is quasi-separated. The terms quasi-compact and quasi-separated refer to the underlying-space quasi-compactness and quasi-compact intersections of affine opens; together they are abbreviated qcqs. [[math:thm-affine-schemes-quasi-separated]], [[math:def-quasi-compact-and-quasi-separated-scheme]]

## Proof

1.1 The one-member affine open cover $\{X\}$ by the spectrum of the noetherian ring $A$ makes $X$ noetherian, hence quasi-compact, by [F5]. It is quasi-separated by [F6], so it is qcqs. Thus the comparison and stabilization suppliers apply under [A1]. Now suppose $[E]=[F]$ in spectral $K_0(X)$. By [F1] these are the equal classes of the bundles $E,F$ in $K^0(X)$. Since $X$ is noetherian affine, [F2] gives $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$ for an integer $N\geq0$. By [F3], global sections give the asserted isomorphism of finite projective modules. [A1, F1, F2, F3, F4, F5, F6, given]

2.1 Conversely, suppose the displayed module isomorphism holds for some integer $N\geq0$. By [F3] it gives a bundle isomorphism $E\oplus\mathcal O_X^N\cong F\oplus\mathcal O_X^N$. Under the scheme hypotheses checked in step 1.1, [F2] gives equality of the classes of $E,F$ in $K^0(X)$, and [F1] identifies these with their spectral classes. Together with step 1.1 this proves the equivalence, including $N=0$. Only the bundle/perfect comparison is used. [A1, F1, F2, F3, step 1.1] ∎
