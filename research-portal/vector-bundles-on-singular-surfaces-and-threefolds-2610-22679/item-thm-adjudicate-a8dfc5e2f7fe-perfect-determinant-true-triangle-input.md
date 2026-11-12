---
title: "Perfect determinant with true-triangle additivity: precise external input"
status: published
research_item: thm-adjudicate-a8dfc5e2f7fe-perfect-determinant-true-triangle-input
dependency_level: 7
sources:
  references:
    - title: "Knudsen–Mumford, The projectivity of the moduli space of stable curves
        I: Preliminaries on det and Div, Math. Scand. 39 (1976), 19–55"
      url: https://journals.msp.org/mscand/article/download/2000/1999
      locator: Chapter I, pp.20–21 and31; Definition2 p.37 and remark p.38;
        perfect-complex definition and Proposition4 p.39; Definition4 pp.40–42;
        Theorem2 p.42; warning and Proposition7 p.44
      statement: The global graded determinant of perfect complexes is invariant under
        derived isomorphisms and additive on true short-exact complex diagrams.
        It agrees locally with alternating exterior determinants and commutes
        with derived pullback. True-triangle naturality does not assert
        naturality under arbitrary morphisms of ordinary derived triangles.
      hypotheses: Arbitrary schemes, perfect complexes locally quasi-isomorphic to
        bounded finite locally free complexes, and true triangles in the derived
        category of actual short-exact complex diagrams. The reducedness
        hypothesis of Proposition7 concerns its stronger ordinary-triangle
        extension and is not a hypothesis of Theorem2.
      reading_limits: For this repair, visually read the cached primary scanned
        printed pp. 20–21, 31, 37–42 and 44; cached PDF SHA256
        59b28ddc3e8f7cc75d227a944c96ea57af0efa16190f9e333880f9feea970c39.
        Checked the graded-line construction, true-triangle definition,
        perfect-complex definition, Definition 4, Theorem 2, and the warning and
        Proposition 7 against this application. Theorem 2 invokes Proposition 4;
        its proof left to the reader and the complete earlier determinant
        construction were not reconstructed. Direct web retrieval of the
        publisher URL failed in this repair. No MTW/BGT K-space bridge or
        unrestricted ordinary-triangle naturality is imported.
external_input: true
---

PDF p. 8: Proposition3.2, perfect determinant; precise KM true-triangle input

## Prerequisites

- [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)
- [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input](item-thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product)
- [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)
- [math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves)
- [math:def-mapping-cone-of-a-chain-map](https://alphabetamath.cc/item/def-mapping-cone-of-a-chain-map)
- [math:thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact](https://alphabetamath.cc/item/thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact)
- [` Knudsen–Mumford, The projectivity of the moduli space of stable curves I: Preliminaries on det and Div, Math. Scand. 39 (1976), 19–55 · Chapter I, pp.20–21 and31; Definition2 p.37 and remark p.38; perfect-complex definition and Proposition4 p.39; Definition4 pp.40–42; Theorem2 p.42; warning and Proposition7 p.44 `](https://journals.msp.org/mscand/article/download/2000/1999)


## Statement
Under AC and fixed universes for the sheaf-derived model, let $X$ be a scheme and let its perfect complexes mean objects locally represented by bounded finite locally free complexes. Use Grothendieck universes $\mathcal U\in\mathcal V$ with $\omega\in\mathcal U$: schemes and module-sheaf data are taken in $\mathcal U$, and categories and localizations in $\mathcal V$. Existence of these universes is a size assumption, separate from AC.

The target graded-line groupoid $\mathcal P_X^{\simeq}$ has objects $(L,\alpha)$, where $L$ is an invertible $\mathcal O_X$-module and $\alpha:X\to\mathbb Z$ is locally constant. A morphism $(L,\alpha)\to(M,\beta)$ is an $\mathcal O_X$-linear isomorphism $L\to M$ with $\alpha=\beta$. Its tensor product is $(L,\alpha)\otimes(M,\beta)=(L\otimes_{\mathcal O_X}M,\alpha+\beta)$, with tensor product of the line isomorphisms, unit $(\mathcal O_X,0)$ and inverse $(L^\vee,-\alpha)$, where $L^\vee=\mathcal Hom_{\mathcal O_X}(L,\mathcal O_X)$. The associativity and unit maps are those of sheaf tensor product. The symmetry, on stalks at $x$, sends $\ell\otimes m$ to $(-1)^{\alpha(x)\beta(x)}m\otimes\ell$. The sign is locally constant and so defines a sheaf map.

Here a true triangle retains the actual short-exact complex diagram. More precisely, let $\mathcal A_X$ be the abelian category of $\mathcal O_X$-modules and let $\mathcal A_{X,3}$ have objects $A\xrightarrow{u}B\xrightarrow{v}C$ with $vu=0$ and morphisms the commuting triples. Form its derived category by inverting vertexwise quasi-isomorphisms of cochain diagrams. The true triangles of perfect complexes are its objects represented by diagrams $0\to P\to Q\to R\to0$ that are exact in every cochain degree and have perfect vertices; their morphisms are retained in this localized diagram category.

There is a global graded determinant functor from perfect objects and their isomorphisms in $D(\mathcal O_X)$ to $\mathcal P_X^{\simeq}$. For every such actual short-exact complex diagram, true-triangle additivity supplies an isomorphism $\det(P)\otimes\det(R)\cong\det(Q)$, natural for isomorphisms of true triangles in the source's sense. The determinant of zero is the trivial graded line. On a bounded finite locally free representative $P^\bullet$, its underlying line is $\bigotimes_i(\det P^i)^{(-1)^i}$ and its degree is the Euler rank $\sum_i(-1)^i\operatorname{rank}(P^i)$, interpreted locally on constant-rank loci. Here a line to the power $-1$ means its dual; the empty tensor is $\mathcal O_X$. These are local formulas when no global bounded bundle representative exists, and the degree defines a locally constant integer function on $X$.

For every scheme morphism $f:Y\to X$, the determinant commutes with classical derived pullback: $\det_Y(Lf^*P)\cong f^*(\det_X P)$, where graded-line pullback is $(L,\alpha)\mapsto(f^*L,\alpha\circ f)$. These isomorphisms have the true-triangle and composition compatibility of Knudsen–Mumford Definition 4.

## Statement references
[def-scheme-perfect-complexes](item-def-scheme-perfect-complexes)

[def-exterior-determinant-bundles](item-def-exterior-determinant-bundles)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input](item-thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

[math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product)

[math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme)

[math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves)

[math:def-mapping-cone-of-a-chain-map](https://alphabetamath.cc/item/def-mapping-cone-of-a-chain-map)

[math:thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact](https://alphabetamath.cc/item/thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact)

## External input
Knudsen–Mumford Definition 4 and Theorem 2 are the external determinant input, under the exact hypotheses and reading limits in the source record. Chapter I, p. 20 supplies the graded-line groupoid, tensor, unit, inverse convention and sign symmetry used above; p. 31 gives the alternating determinant convention. Definition 2, p. 37 and its remark on p. 38 supply the true-triangle category; the perfect-complex definition on p. 39 agrees with the local sheaf-derived definition in [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes). Exactness of the diagrams uses [math:def-exact-sequence-sheaves](https://alphabetamath.cc/item/def-exact-sequence-sheaves). The source's true-triangle morphisms cannot be replaced by arbitrary commuting ordinary derived-triangle diagrams, as the warning and Proposition 7 on p. 44 emphasize. The latter proposition's reducedness hypothesis is not imposed by Theorem 2. The graded-line symmetry is retained before taking Picard classes.

The line-bundle and exterior-determinant conventions are supplied by [def-exterior-determinant-bundles](item-def-exterior-determinant-bundles). Sheaf tensor product is [math:def-sheaf-tensor-product](https://alphabetamath.cc/item/def-sheaf-tensor-product), and line duals, tensor units and inverses are as in [math:def-picard-group-scheme](https://alphabetamath.cc/item/def-picard-group-scheme). For bundles of locally varying rank, use the exterior construction on the disjoint open constant-rank loci. The graded-line construction and its compatibility axioms are imported from the stated Knudsen–Mumford pages, rather than inferred merely from commutativity of the Picard group.

Classical derived pullback $Lf^*:D(\mathcal O_X)\to D(\mathcal O_Y)$ is the K-flat-replacement construction supplied by [thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input](item-thm-author-c5bc2838d897-kcoherent-kflat-sheaf-input), including its independence of replacements and composition comparison. Its sheaf-derived category agrees with the homotopy category specified in [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes). AC, [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice), is retained through that sheaf-derived model and the arbitrary resolution choices of this pullback supplier. The universe convention is [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention); its existence is assumed explicitly, not deduced from AC. Only the classical pullback interface is used here; no infinity-coherent determinant or K-space map is inferred.

For applications to cofiber classes, reindex cochains as chains by $C_n=C^{-n}$. For an actual cochain map $a:P^\bullet\to Q^\bullet$, [math:def-mapping-cone-of-a-chain-map](https://alphabetamath.cc/item/def-mapping-cone-of-a-chain-map) then gives $\operatorname{Cone}(a)^n=Q^n\oplus P^{n+1}$ with $d(q,p)=(d_Qq+a(p),-d_Pp)$. The sequence $0\to Q\xrightarrow{j}\operatorname{Cone}(a)\xrightarrow{q}P[1]\to0$, with $j(y)=(y,0)$ and $q(y,x)=x$, is short exact and split in every degree by [math:thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact](https://alphabetamath.cc/item/thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact), applied in the abelian category $\mathcal A_X$ supplied above. Its degreewise section $x\mapsto(0,x)$ need not be a cochain map. The cochain shift is $P[1]^n=P^{n+1}$ with differential $-d_P$, as specified in [def-scheme-perfect-complexes](item-def-scheme-perfect-complexes). If $P$ and $Q$ are perfect, so are the cone and shift by that supplier's cofiber and shift closure. This actual diagram therefore lies within the imported true-triangle contract even when no global bounded bundle representative exists.

No resolution property, separatedness, regularity or finite-type condition is imposed on $X$. This input supplies the global determinant line and its descent isomorphisms, with the local alternating formula and derived-pullback compatibility stated above. It supplies no enhanced K-space map or unrestricted ordinary-triangle naturality. No local proof of the imported determinant theorem is claimed.
