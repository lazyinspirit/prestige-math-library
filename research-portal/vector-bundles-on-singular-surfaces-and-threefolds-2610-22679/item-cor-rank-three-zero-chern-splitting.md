---
title: Third Chern vanishing and a trivial summand
status: published
research_item: cor-rank-three-zero-chern-splitting
dependency_level: 37
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: PDF p. 3, explanation after Corollary D; p. 17, proof of Corollary 6.10
      reading_limits: Freshly read the frozen extracted article text at PDF pp. 3 and
        17 and independently extracted these two pages from the original PDF
        with PyMuPDF; visually inspected PDF p. 17, including the full proof of
        Corollary 6.10. These passages establish the forward-implication
        provenance. Read the current direct supplier bodies and the direct
        consumer for this application. The exterior-class calculation,
        third-Chern isomorphism and Murthy criterion are used through their
        declared current interfaces; no reconstruction or fresh reading of their
        underlying external literature is claimed. The converse and the two-step
        composition are locally authored. This is a repair proposal, not
        supplier acceptance or independent rejudgment.
      statement: The explanation after Corollary D invokes a trivial line summand for
        a rank-three bundle with zero third motivic Chern class. The proof of
        Corollary 6.10 obtains this summand by introducing the alternating
        exterior class beta, proving that it lies in the third filtration piece
        with c_3(beta)=-2c_3(E)=0, using injectivity of the third Chern
        operation, and applying the cited Murthy criterion. The converse in this
        generated corollary is a local deduction from Whitney and rank
        vanishing, rather than a separately stated equivalence in those
        passages.
      hypotheses: In the cited passages X is a normal affine threefold over an
        algebraically closed field and E is a rank-three vector bundle with zero
        third motivic Chern class. Finite type follows the article conventions.
        The generated item states its inherited Choice and site/universe
        assumptions separately; the converse is proved here under the same
        hypotheses.
---

PDF p. 3: Splitting criterion after Corollary D; PDF p. 17: Corollary 6.10 proof

## Prerequisites

- [def-rank-three-euler-k-class](item-def-rank-three-euler-k-class)
- [def-motivic-chern-classes](item-def-motivic-chern-classes)
- [lem-exterior-square-chern-calculation](item-lem-exterior-square-chern-calculation)
- [cor-third-chern-isomorphism](item-cor-third-chern-isomorphism)
- [prop-murthy-k-theoretic-splitting](item-prop-murthy-k-theoretic-splitting)
- [prop-chern-whitney-identities](item-prop-chern-whitney-identities)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact)
- [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated)
- [` Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and threefolds · PDF p. 3, explanation after Corollary D; p. 17, proof of Corollary 6.10 `](https://arxiv.org/abs/2610.22679v1)


## Statement
Assume the Axiom of Choice and the site and universe size bounds required by the cited motivic filtration, support and Chern constructions. Let $k$ be an algebraically closed field of arbitrary characteristic, let $X=\operatorname{Spec}A$ be a normal affine $k$-scheme of finite type and Krull dimension three, and let $E$ be a rank-three vector bundle on $X$. Then
$$c_3(E)=0\quad\Longleftrightarrow\quad E\cong E'\oplus\mathcal O_X$$
for some rank-two vector bundle $E'$ on $X$.

Here algebraically closed means that every nonconstant polynomial over $k$ has a root in $k$; finite type means that $A$ is a finitely generated $k$-algebra; normal means that every local ring is an integrally closed domain; and Krull dimension is the supremum of lengths of chains of distinct irreducible closed subsets. A vector bundle is a finite locally free $\mathcal O_X$-module, and rank $r$ means locally isomorphic to $\mathcal O_X^r$. The class $c_3(E)$ is the third integral motivic Chern class in $H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$, the degree-six cohomology of the weight-three motivic complex. The Axiom of Choice says that every family of nonempty sets has a choice function; the size bounds fix the sites and universes used by the cited constructions.

## Facts & Assumptions

**Given:** $k$, $X$ and $E$ as in the statement, the Axiom of Choice and the stated site and universe bounds.

**Goal:** Prove both implications of the displayed equivalence.

[A1] Assume the Axiom of Choice as formulated in [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice). It discharges the inherited Choice hypotheses when applying [F0] and the constructions and results [F1]–[F5] below. The compatible site and universe bounds are separate inherited assumptions, not consequences of Choice; the finite sums and cancellation below use no additional choice.

[F0] Since $X$ is affine, [math:cor-affine-scheme-quasi-compact](https://alphabetamath.cc/item/cor-affine-scheme-quasi-compact) under [A1] makes it quasi-compact, and [math:thm-affine-schemes-quasi-separated](https://alphabetamath.cc/item/thm-affine-schemes-quasi-separated) makes it quasi-separated. Here quasi-compact means that every open cover has a finite subcover, and quasi-separated means that intersections of affine open subschemes are quasi-compact. Thus $X$ satisfies the qcqs hypotheses of the alternating-class and Chern-class definitions and the actual Whitney identity in [F1] and [F5].

[F1] [def-rank-three-euler-k-class](item-def-rank-three-euler-k-class) defines the alternating exterior class
$$\beta(E)=[\mathcal O_X]-[E]+[\Lambda^2E]-[\det E]\in K_0(X),$$
where $\Lambda^2E$ is the second exterior-power bundle, $\det E=\Lambda^3E$, and $[V]$ is the class of the bundle $V$ placed in cochain degree zero. The group $K_0(X)$ is the degree-zero K-theory group of perfect complexes. A perfect complex is locally quasi-isomorphic to a bounded complex of finite locally free sheaves.

[F2] Under the given field, normality, affine finite-type, dimension, rank and foundational hypotheses, [lem-exterior-square-chern-calculation](item-lem-exterior-square-chern-calculation) proves that $\beta(E)$ lies in $F^3_{\mathrm{mot}}K_0(X)$ and that $c_3(\beta(E))=-2c_3(E)$. The group $F^3_{\mathrm{mot}}K_0(X)$ is the image in $K_0(X)$ of the degree-zero homotopy group of the third motivic filtration stage.

[F3] Under the same hypotheses, [cor-third-chern-isomorphism](item-cor-third-chern-isomorphism) says that the actual third Chern operation on perfect K-classes restricts to an isomorphism $c_3:F^3_{\mathrm{mot}}K_0(X)\to H^{6,3}_{\mathrm{mot}}(X,\mathbb Z)$. In particular this restriction is an injective group homomorphism.

[F4] [prop-murthy-k-theoretic-splitting](item-prop-murthy-k-theoretic-splitting) says that, under the given hypotheses, $\beta(E)=0$ in $K_0(X)$ implies $E\cong E'\oplus\mathcal O_X$ for a rank-two bundle $E'$. Its ambient-$K_0$ implication applies also when $X$ has lower-dimensional components; no additional pure-dimensional hypothesis is imposed here.

[F5] [def-motivic-chern-classes](item-def-motivic-chern-classes) defines the isomorphism-invariant classes $c_i(V)$ and total Chern polynomial $c_t(V)=\sum_{i\geq0}c_i(V)t^i$, with $c_0(V)=1$ and $c_i(V)=0$ above the rank. Here $t$ is a formal variable. [prop-chern-whitney-identities](item-prop-chern-whitney-identities) gives $c_t(V\oplus W)=c_t(V)c_t(W)$ and $c_1(L\otimes M)=c_1(L)+c_1(M)$ for line bundles. The structure sheaf $\mathcal O_X$ is the trivial rank-one bundle. The notation $V\oplus W$ denotes the sheaf with sections $V(U)\oplus W(U)$ and componentwise restrictions; the sheaf condition holds componentwise and local frames concatenate, so this is a vector bundle. An isomorphism $E\cong E'\oplus\mathcal O_X$ is an invertible $\mathcal O_X$-linear sheaf map.

## Proof

**Proof technique:** Apply the third-Chern isomorphism to the alternating exterior class, then use the splitting criterion; prove the converse by Whitney and rank vanishing.

1.1 By [F0] and [A1], $X$ is qcqs, as required for [F1] and [F5]. Suppose $c_3(E)=0$, and form $\beta(E)$ by [F1]. The field, normality, affine finite-type, dimension, rank, Choice and size hypotheses of [F2]–[F4] are precisely those given. By [F2], $\beta(E)$ belongs to $F^3_{\mathrm{mot}}K_0(X)$ and $c_3(\beta(E))=-2c_3(E)=0$. Since the restricted $c_3$ in [F3] is an injective homomorphism, $\beta(E)=0$ in that subgroup and hence in its ambient group $K_0(X)$. Apply [F4] to obtain a rank-two bundle $E'$ and an isomorphism $E\cong E'\oplus\mathcal O_X$. This proves the forward implication without dividing by $2$. [given, A1, F0, F1, F2, F3, F4]

2.1 Conversely, suppose $E\cong E'\oplus\mathcal O_X$ with $E'$ of rank two. Use the qcqs conclusion of [F0] under [A1]. Multiplication gives $\mathcal O_X\otimes\mathcal O_X\cong\mathcal O_X$, with local inverse $a\mapsto a\otimes1$. Thus the line-bundle tensor identity and isomorphism invariance in [F5] give $c_1(\mathcal O_X)=2c_1(\mathcal O_X)$; cancellation in $H^{2,1}_{\mathrm{mot}}(X,\mathbb Z)$ yields $c_1(\mathcal O_X)=0$. Its higher classes vanish by rank and its constant class is $1$, so $c_t(\mathcal O_X)=1$. Again by [F5], $c_t(E)=c_t(E')c_t(\mathcal O_X)=c_t(E')$. The coefficient of $t^3$ on the right is zero because $E'$ has rank two. Therefore $c_3(E)=0$. Together with step 1.1 this proves the stated equivalence. [given, A1, F0, F5, step 1.1, algebra] ∎
