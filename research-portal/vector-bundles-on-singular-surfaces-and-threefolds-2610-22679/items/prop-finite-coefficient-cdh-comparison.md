---
id: prop-finite-coefficient-cdh-comparison
kind: proposition
title: Finite-coefficient motivic to cdh comparison
status: published
domain: mathematics
deps:
  - def-motivic-cohomology
  - lem-derived-coefficient-exact-sequence
  - lem-author-4b6f215bcf3b-rational-cofiber-comparison
  - lem-author-4b6f215bcf3b-em-rational-comparison-cofiber
  - def-article-conventions
  - math:thm-prime-subfield-classification
  - math:cor-affine-scheme-quasi-compact
  - math:thm-affine-schemes-quasi-separated
  - math:def-axiom-of-choice
  - math:thm-affine-scheme-ring-anti-equivalence
dependency_roles:
  def-motivic-cohomology: mathematical-premise
  lem-derived-coefficient-exact-sequence: mathematical-premise
  lem-author-4b6f215bcf3b-rational-cofiber-comparison: mathematical-premise
  lem-author-4b6f215bcf3b-em-rational-comparison-cofiber: mathematical-premise
  def-article-conventions: mathematical-premise
  math:thm-prime-subfield-classification: mathematical-premise
  math:cor-affine-scheme-quasi-compact: mathematical-premise
  math:thm-affine-schemes-quasi-separated: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:thm-affine-scheme-ring-anti-equivalence: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: Printed p. 6, proof of Proposition 2.6, canonical-comparison passage;
        p. 5, proposition hypotheses; p. 3, Notation and conventions
      reading_limits: "Historical reading record retained from the incoming generated
        item: Freshly read the comparison passage in the frozen printed-page-6
        extraction and inspected page-6.png; checked the scope against
        Proposition 2.6 on printed page 5 and the field and affine finite-type
        conventions in the printed-page-3 extraction. Only this comparison
        application is used here. The later Beilinson–Lichtenbaum,
        Artin-vanishing and cdh-descent arguments on page 6 are not premises of
        this proposition and are not adjudicated here. This maintenance pass
        read the current declared supplier bodies and this consumer; it claims
        no fresh primary-PDF or page-image reading. The explicit Choice and
        universe conditions here retain the local supplier contracts."
      statement: In the characteristic-zero proof of Proposition 2.6, the canonical
        motivic-to-cdh comparison identifies the degree-5, weight-3 groups with
        coefficients Z/p.
      hypotheses: X is an affine threefold over an algebraically closed field k of
        characteristic zero; p is a prime. The article assumes its affine
        k-schemes are of finite type.
    - title: Elden Elmanto and Matthew Morrow, Motivic cohomology of
        equicharacteristic schemes
      url: https://arxiv.org/pdf/2309.08463v1
      locator: arXiv v1, Theorem 4.10(2)–(4), printed pp. 21–22 (PDF pages 21–22);
        Section 3.3, equation (3.5), printed p. 14
      reading_limits: "Historical reading record retained from the incoming generated
        item: Freshly read the versioned PDF text extraction of Theorem
        4.10(2)–(4), its proof, and Section 3.3 around (3.5). The screenshot
        requests supplied no inspectable images, so the external check uses
        extracted text. The underlying motivic and derived de Rham constructions
        and their prerequisite proofs were not reconstructed. The imported
        comparison is supplied through the declared Elmanto–Morrow lemma; the
        present application proof is local. This maintenance pass read the
        current declared supplier bodies and this consumer; it claims no fresh
        primary-PDF or page-image reading. The explicit Choice and universe
        conditions here retain the local supplier contracts."
      statement: Theorem 4.10 supplies the canonical comparison, a pullback square
        with rational right-hand complexes, and its finite-coefficient
        equivalence. Equation (3.5) specifies the cdh-local complex.
      hypotheses: X is a quasi-compact quasi-separated Q-scheme; the theorem permits
        integer weights and nonnegative coefficient integers. Here only weight 3
        and the positive prime coefficient p are used.
proof_strategy: direct
dependency_level: 10
formulation_deps:
  - def-motivic-cohomology
  - lem-derived-coefficient-exact-sequence
  - lem-author-4b6f215bcf3b-em-rational-comparison-cofiber
  - def-article-conventions
  - math:def-axiom-of-choice
argument_deps:
  - def-motivic-cohomology
  - lem-derived-coefficient-exact-sequence
  - lem-author-4b6f215bcf3b-rational-cofiber-comparison
  - lem-author-4b6f215bcf3b-em-rational-comparison-cofiber
  - def-article-conventions
  - math:thm-prime-subfield-classification
  - math:cor-affine-scheme-quasi-compact
  - math:thm-affine-schemes-quasi-separated
  - math:def-axiom-of-choice
  - math:thm-affine-scheme-ring-anti-equivalence
---

## Statement
Assume the Axiom of Choice and fix compatible nested Grothendieck universes $U\in V\in W$ with $\omega\in U$, containing the field and scheme data in $U$ and coefficient data in $V$, with categories formed in $W$, as required by the supplied motivic and rational-cofiber constructions. Existence of these universes is a separate size assumption. Let k be an algebraically closed field of characteristic zero, X an affine threefold over k as in Proposition 2.6, and p a prime. The canonical comparison induces an isomorphism

$H^{5,3}_{\mathrm{mot}}(X,\mathbb Z/p)\cong H^{5,3}_{\mathrm{cdh}}(X,\mathbb Z/p)$.

Here the left group is $H^5(\mathbb Z(3)_{\mathrm{mot}}(X)\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/p)$, as in [[def-motivic-cohomology]]. The right group is $H^5(\mathbb Z(3)_{\mathrm{cdh}}(X)\otimes^{\mathbf L}_{\mathbb Z}\mathbb Z/p)$, where $\mathbb Z(3)_{\mathrm{cdh}}$ is Elmanto–Morrow's cdh-local motivic complex on qcqs Q-schemes. Finite coefficients are taken after evaluating each complex at X. The isomorphism is induced by the actual canonical comparison map; this statement does not identify the paper's cdh site with a separately chosen small site.

## Facts & Assumptions

**Given:** k, X and p as stated, the Axiom of Choice, and the compatible fixed universe, scheme, site and coefficient bounds in the Statement.

**Goal:** Prove the displayed canonical group isomorphism.

[F1] For a qcqs $\mathbb Q$-scheme and a nonnegative weight, the canonical motivic-to-cdh map has rational cofiber. Use the supplier's definitions of the cdh-local complex, qcqs, rational cofiber, and the cochain, derived-category and size conventions. [[lem-author-4b6f215bcf3b-em-rational-comparison-cofiber]]

[F2] A map in $D(\mathbb Z)$ with rational cofiber becomes an isomorphism after derived tensoring with $\mathbb Z/n$ for every positive $n$, and therefore induces an isomorphism on every cohomology group. [[lem-author-4b6f215bcf3b-rational-cofiber-comparison]]

[F3] Derived tensoring with $\mathbb Z/p$ is represented by the cone of multiplication by $p$, functorially on the derived category, without a boundedness assumption. [[lem-derived-coefficient-exact-sequence]]

[F4] Use the article's field and scheme conventions: an affine $k$-scheme is of finite type over $k$, and an affine threefold has scheme dimension three. A $k$-scheme has a structure morphism to $\operatorname{Spec}k$; the dimension and qcqs conventions are those supplied here. [[def-article-conventions]]

[F5] A characteristic-zero field has its canonical prime-subfield inclusion $\mathbb Q\hookrightarrow k$, sending $a/b$ to $(a\cdot1_k)(b\cdot1_k)^{-1}$. [[math:thm-prime-subfield-classification]]

[A1] Assume the Axiom of Choice in the sense of [[math:def-axiom-of-choice]]. Retain the compatible nested-universe and scheme, site and coefficient bounds of [[def-motivic-cohomology]] and [[lem-author-4b6f215bcf3b-em-rational-comparison-cofiber]], as specified in the Statement; universe existence is separately assumed. These premises discharge the selected local motivic construction and the actual rational-cofiber comparison when [F1] is applied in step 2.1. Choice also discharges the affine quasi-compactness input in [F6] used in step 1.1, including the affine opens used by the quasi-separatedness supplier. No additional geometric hypothesis on $X$ or foundational hypothesis attributed to the published theorem is asserted.

[F6] Under [A1], every affine scheme is quasi-compact by [[math:cor-affine-scheme-quasi-compact]] and quasi-separated by [[math:thm-affine-schemes-quasi-separated]].

[F7] A unital ring homomorphism $A\to B$ induces a scheme morphism $\operatorname{Spec}B\to\operatorname{Spec}A$, contravariantly. [[math:thm-affine-scheme-ring-anti-equivalence]]

## Proof

1.1 By [F5], characteristic zero gives the canonical inclusion $\mathbb Q\hookrightarrow k$. It is unique: a unital field homomorphism must send each $a/b$ to $(a\cdot1_k)(b\cdot1_k)^{-1}$. By [F7] it induces $\operatorname{Spec}k\to\operatorname{Spec}\mathbb Q$. Compose this morphism with the structure morphism of [F4] to regard $X$ as a $\mathbb Q$-scheme. Affineness and [F6], under [A1], make its underlying scheme quasi-compact and quasi-separated. Thus $X$ satisfies the scheme hypotheses of [F1]. [given, F1, F4, F5, F6, F7, A1]

2.1 Under [A1], apply [F1] with $j=3$ to the qcqs $\mathbb Q$-scheme from step 1.1. It gives the actual canonical comparison $\mathbb Z(3)_{\mathrm{mot}}(X)\to\mathbb Z(3)_{\mathrm{cdh}}(X)$ with rational cofiber, with its source identified as in [[def-motivic-cohomology]]. Since $p$ is positive, [F2] makes its derived tensor with $\mathbb Z/p$ an isomorphism in $D(\mathbb Z)$ and gives an isomorphism on $H^5$. The two groups are precisely those defined in the Statement; [F3] ensures that these are derived finite-coefficient groups, formed after evaluation at $X$. The induced group map therefore is the displayed canonical isomorphism. This is the characteristic-zero application used on the cited article page. [given, A1, F1, F2, F3, step 1.1] ∎
