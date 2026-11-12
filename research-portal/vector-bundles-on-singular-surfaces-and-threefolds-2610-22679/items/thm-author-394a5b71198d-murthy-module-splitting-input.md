---
id: thm-author-394a5b71198d-murthy-module-splitting-input
kind: theorem
title: Murthy splitting criterion for the exterior-dual obstruction
status: published
domain: mathematics
deps:
  - lem-author-394a5b71198d-exterior-dual-interface
  - lem-author-394a5b71198d-split-vanishing
  - math:def-axiom-of-choice
  - lem-affine-bundle-module-interface
  - math:def-finite-type-and-module-finite-algebras
  - math:def-krull-dimension-of-a-ring
  - math:def-height-of-a-prime-ideal
  - math:def-smooth-morphism-classical
  - math:def-projective-module
  - math:def-grothendieck-universe-closure-convention
  - math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - lem-koszul-point-support-class
  - lem-adjudicate-8da4ac7e2794-affine-perfect-module-resolution
  - math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
  - math:thm-noetherian-ring-quotients-and-localisations
  - math:thm-finitely-generated-modules-over-noetherian-rings-are-noetherian
  - math:thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective
  - math:def-polynomial-ring-over-a-commutative-ring
  - math:def-quotient-module
  - math:def-generated-cyclic-finitely-generated-and-free-modules
  - math:thm-modules-over-a-ring-form-an-abelian-category
  - math:def-noetherian-module
  - math:ex-skyscraper-coherent-closed-point
dependency_roles:
  lem-author-394a5b71198d-exterior-dual-interface: mathematical-premise
  lem-author-394a5b71198d-split-vanishing: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  lem-affine-bundle-module-interface: mathematical-premise
  math:def-finite-type-and-module-finite-algebras: mathematical-premise
  math:def-krull-dimension-of-a-ring: mathematical-premise
  math:def-height-of-a-prime-ideal: mathematical-premise
  math:def-smooth-morphism-classical: mathematical-premise
  math:def-projective-module: mathematical-premise
  math:def-grothendieck-universe-closure-convention: mathematical-premise
  math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect: mathematical-premise
  lem-koszul-point-support-class: mathematical-premise
  lem-adjudicate-8da4ac7e2794-affine-perfect-module-resolution: mathematical-premise
  math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct: mathematical-premise
  math:thm-noetherian-ring-quotients-and-localisations: mathematical-premise
  math:thm-finitely-generated-modules-over-noetherian-rings-are-noetherian: mathematical-premise
  math:thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective: mathematical-premise
  math:def-polynomial-ring-over-a-commutative-ring: mathematical-premise
  math:def-quotient-module: mathematical-premise
  math:def-generated-cyclic-finitely-generated-and-free-modules: mathematical-premise
  math:thm-modules-over-a-ring-form-an-abelian-category: mathematical-premise
  math:def-noetherian-module: mathematical-premise
  math:ex-skyscraper-coherent-closed-point: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: literature-derived
external_input: true
sources:
  references:
    - title: M. Pavaman Murthy, Zero cycles and projective modules, ICTP SMR.761/7
        preliminary lecture-note scan
      url: https://indico.ictp.it/event/a02275/contribution/6/material/0/0.pdf
      locator: Introduction, printed pp. 1–2 / PDF pp. 3–4; Definition 3.5, Remark
        3.6(i), Theorem 3.7 and its short proof, printed p. 17 / PDF p. 19
      statement: For a reduced affine algebra A of dimension n over an algebraically
        closed field, if F^n K0(A) has no (n-1)! torsion, a rank-n projective
        module P splits off a rank-one free summand exactly when its
        exterior-dual class C_n(P)=sum_i(-1)^i[Lambda^i P*] vanishes.
      hypotheses: Here the imported application uses n>=2, A reduced affine over an
        algebraically closed field of arbitrary characteristic, no (n-1)!
        torsion in F^n K0(A), and P finitely generated projective of constant
        rank n. No smoothness is needed by this criterion itself.
      reading_limits: "Historical reading record retained from the incoming generated
        item: An earlier adjudication reported visually reading the cached
        34-page ICTP SMR.761/7 preliminary participant scan at PDF pp. 1, 3, 4
        and 19 (cover and printed pp. 1, 2 and 17), SHA256
        488956266748dcf211d02c09b2a058764414e212bc778e4379de6305cafef7f6,
        located in the frozen run as top-chern-murthy-primary-scan.pdf. The
        cover identifies M. Pavaman Murthy and the workshop of 16–27 May 1994. A
        fresh request to the stated ICTP URL timed out; the historical cache
        download origin remains independently unattested. Earlier native records
        report also reading printed pp. 13–14 / PDF pp. 15–16; that is retained
        historical reading, not fresh reading credit here. The published
        bibliographic counterpart is Ann. Math. 140 (1994), 405–434, DOI
        https://doi.org/10.2307/2118605; published journal bytes and exact
        journal pagination were not checked. Corollaries 3.4 and 1.9 invoked by
        the short proof were not reconstructed. The import uses the identified
        preliminary version and does not claim a local proof of Murthy’s
        converse. Earlier repair: visually read the supplied cached images for
        printed pp. 1 and 17 (PDF pp. 3 and 19), checking the exact point
        subgroup, Definition 3.5, Remark 3.6(i) and Theorem 3.7, including its
        short proof. Recomputed the cached PDF digest, matching the recorded
        SHA256. The ICTP URL again failed by timeout. No new final-journal or
        deep-supplier reading is claimed. This adjudication visually reread the
        supplied cached images for printed pp. 1 and 17 / PDF pp. 3 and 19 and
        recomputed the cached PDF SHA256, matching the recorded digest. The ICTP
        URL timed out again. Only the algebraically closed branch, point
        subgroup, exterior-dual formula and short-proof scope were checked; no
        journal-byte or deep-proof verification is claimed. Current consumer
        maintenance read the generated item and its declared supplier contracts;
        it did not freshly read the primary source or cached page images, and
        grants no independent acceptance. Scoped repair adjudicate-ac28f9056dce
        freshly read the cached images of printed pp. 1 and 17 / PDF pp. 3 and
        19, checking the height-n smooth-point subgroup, exterior-dual
        expression and algebraically closed branch of Theorem 3.7. The cached
        PDF SHA256 was recomputed and matches the historical value. The ICTP URL
        again timed out. No fresh journal-version, cache-origin authentication
        or reconstruction of Corollaries 3.4 and 1.9 is claimed."
    - title: Charles Weibel, The K-book, author-hosted Chapter II PDF (cached version
        identified by SHA256)
      url: https://sites.math.rutgers.edu/~weibel/Kbook/Kbook.II.pdf
      locator: Resolution Theorem 7.6 and its proof, chapter/PDF pp. 65–66; Definition
        7.7, pp. 66–67; Corollary 7.7.2 and the preceding truncated-cone proof,
        p. 67
      statement: For a ring A, let H(A) be the exact category of modules admitting a
        finite resolution by finitely generated projective A-modules. Inclusion
        of finite projective modules induces an isomorphism j:K0^proj(A) ->
        K0(H(A)). Its inverse sends a resolved module M to the alternating sum
        of its finite projective resolution. This sum is independent of the
        resolution and respects all short-exact-sequence relations.
      hypotheses: Only the finite-resolution category H(A) is compared with finite
        projectives. The application ring is a commutative noetherian affine
        algebra. No regularity, finite global dimension, characteristic
        restriction, or identification with all coherent-module G0 is assumed.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Earlier review record: Read the frozen cached author-hosted
        Chapter II text at pp. 65–67, including the resolution theorem proof,
        Definition 7.7, the truncated-cone argument and Corollary 7.7.2;
        visually checked cached p. 67. Cached PDF SHA256
        529ea8a5853e9fa55279e7ad79047155409b10847bd924b56f708f0950ebc607. The
        same author-hosted URL was separately accessed through web PDF text at
        these locators. Its current bytes were not downloaded for a new byte
        comparison. Printed-book bytes, author errata and recursively cited
        background proofs were not read. Lemma 7.7.1 prints an incorrect minimum
        projective-dimension bound; that estimate is excluded. Its displayed
        truncated cone establishes the finite-resolution kernel closure needed
        by Corollary 7.7.2, independently of that quantitative typo. Earlier
        repair freshly read the cached PDF extraction at chapter/PDF pp. 65–67
        and recomputed its SHA256, matching the recorded digest. Opened the
        author-hosted web PDF, without a new byte comparison; fresh application
        checks concern the finite-resolution category, Euler inverse and exact
        relations. Historical visual-reading statements remain historical. This
        adjudication freshly read the cached PDF extraction at chapter/PDF pp.
        65–67 and the author-hosted web PDF text there, and recomputed the
        cached PDF SHA256, matching the recorded digest. No fresh web-to-cache
        byte comparison or recursively cited proof reading is claimed. The
        projective-dimension counterexample below is a local calculation from
        the declared polynomial, quotient, free-module and projective-lifting
        definitions, not an imported calculation or a new source-defect audit.
        Current consumer maintenance read the generated item and its declared
        supplier contracts; it did not freshly read the primary source or cached
        page images, and grants no independent acceptance. Scoped repair
        adjudicate-ac28f9056dce freshly read the cached PDF text of chapter/PDF
        pp. 65–67, including Theorem 7.6 and its proof, Definition 7.7, the
        truncated-cone argument and Corollary 7.7.2. The cached PDF SHA256 was
        recomputed and matches the historical value. The author-hosted PDF was
        opened, but its relevant pages were checked in the cache, with no fresh
        web-to-cache byte comparison. No recursively cited proof or printed-book
        verification is claimed. The source qualification and locally supplied
        counterexample are preserved; this repair does not add a
        prerequisite-source defect audit."
dependency_level: 17
local_argument_provenance: ai-altered
formulation_deps:
  - lem-author-394a5b71198d-exterior-dual-interface
  - math:def-axiom-of-choice
  - lem-affine-bundle-module-interface
  - math:def-finite-type-and-module-finite-algebras
  - math:def-krull-dimension-of-a-ring
  - math:def-height-of-a-prime-ideal
  - math:def-smooth-morphism-classical
  - math:def-projective-module
  - math:def-grothendieck-universe-closure-convention
  - math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - lem-koszul-point-support-class
  - lem-adjudicate-8da4ac7e2794-affine-perfect-module-resolution
  - math:def-polynomial-ring-over-a-commutative-ring
  - math:def-quotient-module
  - math:def-generated-cyclic-finitely-generated-and-free-modules
  - math:ex-skyscraper-coherent-closed-point
argument_deps:
  - lem-author-394a5b71198d-exterior-dual-interface
  - lem-author-394a5b71198d-split-vanishing
  - math:def-axiom-of-choice
  - lem-affine-bundle-module-interface
  - math:def-finite-type-and-module-finite-algebras
  - math:def-krull-dimension-of-a-ring
  - math:def-height-of-a-prime-ideal
  - math:def-smooth-morphism-classical
  - math:def-projective-module
  - math:def-grothendieck-universe-closure-convention
  - math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect
  - lem-koszul-point-support-class
  - lem-adjudicate-8da4ac7e2794-affine-perfect-module-resolution
  - math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct
  - math:thm-noetherian-ring-quotients-and-localisations
  - math:thm-finitely-generated-modules-over-noetherian-rings-are-noetherian
  - math:thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective
  - math:def-polynomial-ring-over-a-commutative-ring
  - math:def-quotient-module
  - math:def-generated-cyclic-finitely-generated-and-free-modules
  - math:thm-modules-over-a-ring-form-an-abelian-category
  - math:def-noetherian-module
  - math:ex-skyscraper-coherent-closed-point
---

## Statement
Assume the Axiom of Choice and fix compatible Grothendieck universes $\mathcal U\in\mathcal V$ containing $\omega$ and the algebra and scheme data, with larger universes for the supplied categories, and the compatible site bounds of the supplied constructions. Universe existence is a separate assumption. Let $k$ be an algebraically closed field of arbitrary characteristic, meaning that every nonconstant polynomial in $k[t]$ has a root in $k$. Let $A$ be a reduced affine $k$-algebra, meaning a commutative unital $k$-algebra of finite type with no nonzero nilpotents, of dimension $n\geq2$. Write $K_0^{\mathrm{proj}}(A)$ for the abelian group generated by isomorphism classes $[T]$ of finitely generated projective $A$-modules, with relations $[T\oplus T']=[T]+[T']$. For a smooth closed point corresponding to a maximal ideal $\mathfrak m$, its residue-field class means $[A/\mathfrak m]=\sum_j(-1)^j[P_j]$ for a finite projective resolution $P_\bullet\to A/\mathfrak m$; existence and independence are established below. Suppose the subgroup $F^nK_0^{\mathrm{proj}}(A)$ generated by these classes for the height-$n$ smooth closed points has no $(n-1)!$ torsion, meaning that multiplication by $(n-1)!$ is injective on this subgroup. For a finite projective $A$-module $P$ of constant rank $n$, put $P^*=\operatorname{Hom}_A(P,A)$ and $C^K_n(P)=\sum_{i=0}^n(-1)^i[\Lambda^iP^*]$. Then $C^K_n(P)=0$ if and only if $P\cong A\oplus Q$ for a finite projective module $Q$ of constant rank $n-1$.


Dimension is Krull dimension and height is the dimension of the corresponding prime localization. Smooth closed point means smoothness over $k$ at that point. A finite projective module is finitely generated and has the lifting property through surjective module maps. Constant rank $r$ means that every prime localization is free of rank $r$. The dual and exterior powers use the tensor-algebra quotient convention of the exterior-dual supplier.

## External input
Murthy's Theorem 3.7 is imported in its algebraically closed branch. Its short proof uses a generic dual section, the Koszul class, Corollary 3.4 and Corollary 1.9; those deep suppliers are not reproved here. The introduction writes the image of a finite-projective-dimension module in ordinary $K_0(A)$ and refers classical K-theory to Bass. It does not explicitly define an inequivalent group.

To make the resolution notation precise, also import Weibel's Resolution Theorem 7.6 and Corollary 7.7.2 in the stated finite-resolution scope. Let $\mathcal P(A)$ be the finite projective modules and $\mathcal H(A)$ the modules with finite resolutions by such projectives, with inherited short exact sequences. Define $K_0(\mathcal H(A))$ by isomorphism-class generators $[M]_{\mathcal H}$ and relations $[M]_{\mathcal H}=[M\prime]_{\mathcal H}+[M\prime\prime]_{\mathcal H}$ for every short exact sequence $0\to M\prime\to M\to M\prime\prime\to0$ in this category. These generators form a set: every object of $\mathcal H(A)$ is a quotient of a finite projective module, hence of some $A^r$ with finite $r$; the submodules of all these finite free modules form a set, whose quotient modules represent every such isomorphism class. For finite projectives these exact-sequence relations equal the direct-sum relations above, since projectivity splits the surjection. Inclusion induces $j:K_0^{\mathrm{proj}}(A)\longrightarrow K_0(\mathcal H(A))$. Its inverse is $\chi([M]_{\mathcal H})=\sum_i(-1)^i[P_i]$ for a finite projective resolution $P_\bullet\to M$. The imported theorem supplies independence of resolution and compatibility with exact relations. For this noetherian algebra, finite modules of finite projective dimension admit such finite resolutions by taking finite free surjections and their finite syzygies, as justified in [F7] below. Finite projective dimension here means the existence of a finite resolution by projectives, without initially imposing finite generation on those projectives. This identifies precisely the resolved-module notation in the scan. No identification of singular-ring $K_0$ with the group of all coherent modules is used.

## Facts & Assumptions
[A1] The assumed [[math:def-axiom-of-choice]] and fixed universes discharge the exterior-dual and split-vanishing suppliers [F2] when their actual module/perfect-class comparisons are invoked. These are inherited local-realization premises; the imported Murthy and resolution statements and their source-reading limits remain unchanged.


**Given:** The hypotheses and data in the statement, with AC and the article's fixed universes wherever perfect K-theory is used.

**Goal:** Establish the asserted conclusion.

[F1] The imported primary statement is Theorem 3.7, using the exterior-dual definition in Definition 3.5 and the subgroup fixed in the introduction and Remark 3.6(i).

[F2] The local exterior-dual convention and necessary vanishing direction are established by [[lem-author-394a5b71198d-exterior-dual-interface]] and [[lem-author-394a5b71198d-split-vanishing]].

[F3] The external resolution comparison just specified gives mutually inverse group maps $j$ and $\chi$, with $\chi([M]_{\mathcal H})$ the actual finite-resolution Euler class and $j([T])=[T]_{\mathcal H}$ for every finite projective $T$. This is Weibel II, Definition 7.7 and Corollary 7.7.2, using the inverse described in the proof of Theorem 7.6.


[F4] The algebra, dimension, height and smoothness conventions are supplied by [[math:def-finite-type-and-module-finite-algebras]], [[math:def-krull-dimension-of-a-ring]], [[math:def-height-of-a-prime-ideal]] and [[math:def-smooth-morphism-classical]]. The lifting property is [[math:def-projective-module]], and the size convention is [[math:def-grothendieck-universe-closure-convention]]. The group presentation and constant-rank meaning are given inline; [[lem-affine-bundle-module-interface]] supplies freeness of prime localizations of finite projectives and preservation of ranks and direct sums under the module–bundle equivalence. The exterior-dual supplier [F2] proves that the projective isomorphism classes form a set, that short exact sequences of finite projectives split, and that this group and these exterior powers are well defined.

[F5] Every algebraically closed field is perfect by [[math:cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]. For a finite-type scheme over a perfect field, [[lem-koszul-point-support-class]] makes the residue sheaf $i_*\kappa(x)$ at any smooth closed point $x$ a perfect object when placed in degree zero. Here $i:\operatorname{Spec}\kappa(x)\to\operatorname{Spec}A$ is the closed immersion of that point. For the noetherian ring $A$ of [F7] and the maximal ideal $\mathfrak m$ corresponding to $x$, [[math:ex-skyscraper-coherent-closed-point]], under the assumed AC, identifies this residue-field skyscraper with $\widetilde{A/\mathfrak m}$. Thus its degree-zero perfect object is $\widetilde{A/\mathfrak m}[0]$.

[F6] For any commutative unital ring, the perfectness of $\widetilde M[0]$ implies that $M$ admits a finite resolution by finitely generated projective modules. The local proof reflects a bounded perfect representative through the actual affine equivalence and splits off its positive-degree tail. [[lem-adjudicate-8da4ac7e2794-affine-perfect-module-resolution]]

[F7] The category of all $A$-modules is abelian by [[math:thm-modules-over-a-ring-form-an-abelian-category]]. By [[math:def-noetherian-module]], every submodule of a Noetherian module is finitely generated. A finite-type algebra is a quotient of a finite-variable polynomial algebra, which is noetherian by [[math:lem-finite-variable-polynomial-algebras-over-fields-are-noetherian-direct]]; the quotient remains noetherian by [[math:thm-noetherian-ring-quotients-and-localisations]]. Every finite module is Noetherian by [[math:thm-finitely-generated-modules-over-noetherian-rings-are-noetherian]], so its submodules are finite by the stated definition. If a finite module has projective dimension at most $d\geq1$, take finite free surjections for its first $d$ stages, whose kernels stay finite; [[math:thm-projective-dimension-at-most-n-iff-the-nth-syzygy-is-projective]] makes the last kernel projective. These finite stages extend to a projective resolution: every module is the quotient of the free module on its underlying set, and under AC a free module is projective by choosing lifts of its basis elements through any given surjection. Thus the cited syzygy criterion applies in this abelian category with enough projectives. For $d=0$ the finite module itself is projective. This proves the finite-resolution claim in the External input section without assuming regularity of $A$.

[F8] For the source-qualification calculation, $k[t]$ is the ring of finitely supported coefficient sequences with convolution multiplication, so multiplication by $t$ shifts each coefficient up one degree. Quotients by submodules use additive cosets with their induced scalar action. A module basis gives unique finite linear combinations; finite Cartesian powers $R^r$ have the standard coordinate basis. These are the conventions of [[math:def-polynomial-ring-over-a-commutative-ring]], [[math:def-quotient-module]] and [[math:def-generated-cyclic-finitely-generated-and-free-modules]]. The projective lifting property is [F4]. Here projective dimension is the least nonnegative length of a projective resolution, when one exists; length zero is equivalent to the module itself being projective.

## Proof
1.1 By [F4] the given affine algebra is of finite type, and [F7] makes it noetherian. Its algebraically closed field is perfect by [F5]. For each height-$n$ smooth closed point $x$ with maximal ideal $\mathfrak m$, [F5] identifies its perfect residue sheaf $i_*\kappa(x)[0]$ with $\widetilde{A/\mathfrak m}[0]$: the ring is noetherian, the ideal is maximal, and AC is assumed. Now [F6] supplies an actual finite projective resolution of $A/\mathfrak m$. In particular $A/\mathfrak m$ belongs to $\mathcal H(A)$ before its class is used. Apply [F3] to $A$. These are the point modules used to generate the source subgroup in [F1]. By the formula for $\chi$, their classes in the statement are exactly $\chi([A/\mathfrak m]_{\mathcal H})$. Thus $\chi$ and $j$ restrict to mutually inverse maps on the subgroups generated by the height-$n$ smooth points. In particular the stated factorial-torsion condition holds in either presentation. [A1, F1, F2, F3, F4, F5, F6, F7, given]

1.2 To verify the source-qualification counterexample over the given field $k$, put $R=k[t]$ and $M_r=(R/(t))^r$ for $r=1,2$, where $(t)=tR$ and powers denote finite direct sums. In the coefficient model [F8], multiplication by $t$ is injective: if $tf=0$, each coefficient of $f$ is zero. Its image is exactly the polynomials with zero constant coefficient, namely $tR$. Therefore $1\notin tR$ and $R/(t)\ne0$. For $r=1,2$, coordinatewise multiplication by $t$ is injective on $R^r$ and has image $(tR)^r$, the kernel of the coordinate quotient map $q_r:R^r\to M_r$. The map $q_r$ is onto by taking a representative of each of its finitely many coordinates. Hence $0\to R^r\xrightarrow{\ t\ }R^r\xrightarrow{q_r}M_r\to0$ is exact. Each $R^r$ is finite free, and is projective directly by [F4]: lift the images of its finitely many standard basis vectors through any prescribed surjection, then extend linearly; the unique basis expansion makes that extension well defined. This gives a length-one finite free resolution of each $M_r$, so both projective dimensions are at most one. [F4, F8, given, algebra]

2.1 Each $\Lambda^iP^*$ is finite projective, so $\chi(\sum_i(-1)^i[\Lambda^iP^*]_{\mathcal H})=C^K_n(P)$. Since $\chi$ is an isomorphism, this identifies the actual exterior-dual classes and their vanishing, as well as the point subgroups from step 1.1. In ordinary projective $K_0$ notation this is simply the canonical interpretation of the source's resolved-module classes. [A1, F2, F3, F4, step 1.1, algebra]

3.1 The reduced affine algebra, algebraically closed field, dimension, module rank and factorial-torsion hypothesis now match the algebraically closed branch of [F1]. With the actual class identified in step 2.1, Theorem 3.7 gives $C^K_n(P)=0$ if and only if $P$ has a free direct summand of rank one. This is the imported converse; the local Koszul calculation in [F2] is not a replacement proof of it. [A1, F1, F2, step 1.1, step 2.1, given]

4.1 A free line summand gives $P\cong A\oplus Q$. Project a finite generating list of $P$ to $Q$ to see finite generation; a map from $Q$ through a surjection lifts by first extending it along the projection $P\to Q$, lifting from $P$, and restricting to $Q$. Thus $Q$ is finite projective. By [F4] its prime localizations are free, and rank preservation and additivity for the localized splitting give constant rank $n-1$. Conversely this decomposition is a free line summand. The exterior convention and necessary vanishing direction agree with [F2]. Together with step 3.1 this proves the stated equivalence. [A1, F2, F4, step 3.1]

5.1 Multiplication by $t$ kills $M_r$. If $M_r$ were projective, [F4] applied to $q_r$ and $\operatorname{id}_{M_r}$ would give an $R$-linear section $s:M_r\to R^r$ with $q_rs=\operatorname{id}_{M_r}$. But $ts(x)=s(tx)=0$ for every $x\in M_r$, while multiplication by $t$ is injective on $R^r$ by step 1.2. Thus $s=0$, contradicting $q_rs=\operatorname{id}_{M_r}$ because $(\overline1,0,\ldots,0)\ne0$. Neither module is projective, so neither has a length-zero projective resolution; their projective dimensions are exactly one. Finally $0\to M_1\to M_2\to M_1\to0$, with maps $x\mapsto(x,0)$ and $(x,y)\mapsto y$, is exact and split by $y\mapsto(0,y)$. Its kernel, middle module and quotient all have projective dimension one, whereas the printed minimum at $m=n=1$ would be zero. This proves the counterexample locally and leaves the finite-resolution comparison independent of that false quantitative estimate. [F4, F8, step 1.2, given, algebra] ∎

The source criterion retains its reduced affine and arbitrary-characteristic scope. Weibel II, Lemma 7.7.1 has a separate quantitative typo: its printed $\min\{m,n-1\}$ must be replaced by $\max\{m,n-1\}$, with the nonnegative-length boundary convention. The counterexample in the Source qualification, verified in steps 1.2 and 5.1, disproves this minimum bound. This error does not invalidate the finite-resolution comparison: the displayed truncated-cone construction still has finite length and supplies the required kernel closure. The false bound is not used here.

## Source qualification
The source criterion retains its reduced affine and arbitrary-characteristic scope. Weibel II, Lemma 7.7.1 has a separate quantitative typo: its printed $\min\{m,n-1\}$ must be replaced by $\max\{m,n-1\}$, with the nonnegative-length boundary convention. Over $R=k[t]$, the split sequence with kernel and quotient $R/(t)$ and middle term $(R/(t))^2$ has all three projective dimensions one; the printed minimum would make the kernel projective. This error does not invalidate the finite-resolution comparison: the displayed truncated-cone construction still has finite length and supplies the required kernel closure. The false bound is not used here. The projective-dimension assertion is proved locally in steps 1.2 and 5.1.
