---
title: Prime-field restriction preserves actual comparison diagrams
status: published
research_item: lem-author-dcdf962edbda-restriction
dependency_level: 9
sources:
  references:
    - title: Jacob Lurie, Higher Topos Theory
      url: https://www.math.ias.edu/~lurie/papers/HTT.pdf
      locator: Notation 1.2.7.2 and Proposition 1.2.7.3(1), printed p. 39 (PDF page
        index 56); Corollary 5.1.2.3, printed p. 319 (PDF page index 336), used
        dually for limits
      statement: Functor simplicial sets with infinity-category targets are
        infinity-categories. If the target admits K-indexed colimits,
        functor-category colimits exist and are detected at each vertex. Formal
        duality gives the limit version.
      hypotheses: S and K are small simplicial sets in the chosen universe; the target
        is an infinity-category admitting K-indexed colimits, or K-indexed
        limits for the dual assertion.
      reading_limits: "Historical reading record retained from the incoming generated
        item: Read these statements in the official PDF extraction, including
        the corollary's reduction to Proposition 5.1.2.2. The cited proofs and
        higher-category foundations were not reconstructed. Screenshot requests
        returned no inspectable image. Only functor-category existence and the
        dual pointwise-limit criterion are imported. Current consumer
        maintenance read the item and current supplier interfaces; no fresh
        primary-source or page-image reading or independent acceptance is
        claimed."
---

PDF p. 4: Weight zero

## Prerequisites

- [def-motivic-cohomology](item-def-motivic-cohomology)
- [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)
- [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)
- [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)
- [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)
- [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)
- [` Jacob Lurie, Higher Topos Theory · Notation 1.2.7.2 and Proposition 1.2.7.3(1), printed p. 39 (PDF page index 56); Corollary 5.1.2.3, printed p. 319 (PDF page index 336), used dually for limits `](https://www.math.ias.edu/~lurie/papers/HTT.pdf)


## Statement
Assume the Axiom of Choice and fix Grothendieck universes $U\in V\in W$ with $\omega\in U$, containing the fields and scheme data. Existence of these universes is a size assumption. Let $k\in U$ be a field with prime subfield identified with $F=\mathbb Q$ or $F=\mathbb F_p$ for a prime $p$. Let $\mathcal D_B$ be the category of qcqs $B$-schemes with data in $U$ and all $B$-morphisms, for $B=F,k$; qcqs means quasi-compact and quasi-separated. These are $V$-small categories. Write $\mathrm{Sch}^{\mathrm{qcqs}}_k=\mathcal D_k$. Let $\mathcal C_F\subset\mathcal D_F$ be the full skeleton, $r:\mathcal D_F\to\mathcal C_F$ the representative functor, and $\epsilon_T:rT\to T$ the chosen isomorphisms, with $r(f)=\epsilon_S^{-1}f\epsilon_T$ for $f:T\to S$.

The actual forgetful functor is $u_0:\mathcal D_k\to\mathcal D_F$, taking $X$ to its underlying $F$-scheme $X_F$; set $u=ru_0$ for evaluation on the skeleton. Let $\mathcal E=\mathcal D_\infty(\mathbb Z)$ be the stable infinity-localization of unbounded cochain complexes of $V$-small abelian groups at quasi-isomorphisms, considered in $W$; its homotopy category is $D(\mathbb Z)$. Let $M_F=\mathbb Z(0)_{\mathrm{mot},F}:N(\mathcal D_F)^{\mathrm{op}}\to\mathcal E$ be the supplied prime-field functor, where $N$ is the ordinary nerve, with simplices strings of composable arrows. The completed weight-zero motivic functor on $k$-schemes is $u_0^*M_F=M_F\circ N(u_0)^{\mathrm{op}}$. If $i:\mathcal C_F\hookrightarrow\mathcal D_F$ and $P_F=i^*M_F$, the maps $M_F(\epsilon_{X_F})$ give a natural equivalence $u_0^*M_F\simeq u^*P_F$. Thus evaluation on the skeleton means $P_F(rX_F)$, naturally equivalent to $M_F(X_F)$, rather than literal equality of these objects.

For source functors on either $\mathcal D_F$ or $\mathcal C_F$, precomposition with $u_0^{\mathrm{op}}$ or $u^{\mathrm{op}}$ transports actual natural maps, homotopy-cartesian squares and natural equivalences to the corresponding data on qcqs $k$-schemes. A homotopy-cartesian square here is a coherent square whose upper-left vertex is the limit of its other three vertices in the relevant infinity-category of functors, using the entire square, including its homotopy. Maps that are equivalences at every source object remain equivalences at every restricted object. Passing to $D(\mathbb Z)$ retains the resulting values and natural maps. This assertion uses the coherent enhancement; it does not identify homotopy pullbacks with ordinary pullbacks in $D(\mathbb Z)$. No assertion that cdh sheafification commutes with changing the base field is required.

## Statement references
[def-motivic-cohomology](item-def-motivic-cohomology)

[lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site)

[lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes)

[thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input)

[math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice)

[math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention)

## Facts & Assumptions
**Given:** The stated Choice and universe assumptions, $k$ and its specified prime subfield $F$, and the supplied source functors and coherent comparison diagrams.

**Goal:** Identify actual prime-field restriction, including skeleton transport, and preserve its comparison maps and homotopy-cartesian squares.

[A1] [math:def-axiom-of-choice](https://alphabetamath.cc/item/def-axiom-of-choice) is retained for the skeleton and chosen isomorphisms in [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site) and for the supplied derived enhancement. [math:def-grothendieck-universe-closure-convention](https://alphabetamath.cc/item/def-grothendieck-universe-closure-convention) supplies universe closure; the existence of the stated nested universes is separately assumed. Scheme indexing categories are $V$-small, coefficient groups are $V$-small, and all functor constructions are considered in $W$.

[F1] [lem-author-dcdf962edbda-qcqs-site](item-lem-author-dcdf962edbda-qcqs-site) supplies $\mathcal D_F$, its skeleton, the functor $r$ and the isomorphisms $\epsilon_T$. [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes) supplies the actual coherent prime-field motivic functor and its restriction along the forgetful functor on the full categories; its categories named $\mathcal C_B$ are the full categories named $\mathcal D_B$ here. [def-motivic-cohomology](item-def-motivic-cohomology) identifies this restriction as the completed motivic complex, on passage to $D(\mathbb Z)$.

[F2] [thm-author-4f716d60801a-derived-enhancement-input](item-thm-author-4f716d60801a-derived-enhancement-input), applied to $\mathbb Z$ with coefficient universe $V$, supplies $\mathcal E$, its homotopy category and finite coherent limits. Stability includes these finite limits. The nerve and coherent presheaf conventions are also specified in [lem-author-b747b28c359f-elmanto-morrow-complexes](item-lem-author-b747b28c359f-elmanto-morrow-complexes).

[F3] Source reference 0 supplies infinity-categories of functors and the pointwise-limit criterion by duality. Apply it to $N(\mathcal D_F)^{\mathrm{op}}$, $N(\mathcal C_F)^{\mathrm{op}}$ and $N(\mathcal D_k)^{\mathrm{op}}$, with the finite cospan indexing a pullback.

## External input
Reference 0 imports functor-category existence and the dual pointwise-limit criterion. The transport and motivic application below are local arguments, not reconstructions of that theorem.

## Proof
1.1 Composing structure morphisms defines $u_0$; underlying scheme maps, identities and composites are unchanged, so it is a functor between the stated bounded categories. Composing with $r$ gives $u$. For $f:T\to S$, the equation $f\epsilon_T=\epsilon_Sr(f)$ makes $\epsilon:ir\Rightarrow\mathrm{id}_{\mathcal D_F}$ a natural isomorphism. Applying the contravariant coherent functor $M_F$ and restricting to $\mathcal D_k$ therefore gives the claimed natural equivalence, with direction $M_F(X_F)\to M_F(rX_F)$. Each component is an equivalence since $\epsilon_T$ is an isomorphism; the inverse natural isomorphism supplies its coherent inverse. The completed functor is $M_F\circ N(u_0)^{\mathrm{op}}$ by the explicit prime-field restriction of [F1], and its ordinary derived values agree with the definition there. This reconciles full-category restriction with the skeleton's evaluation convention. [A1, F1, F2, construct]

2.1 Write $v=u_0$ or $u$ and let $\mathcal A$ be its target. In the simplicial functor construction, an $n$-simplex is a map $\Delta^n\times N(\mathcal A)^{\mathrm{op}}\to\mathcal E$. Restriction composes it with $\mathrm{id}\times N(v)^{\mathrm{op}}$, commuting with faces and degeneracies; hence it is a functor on the full coherent functor categories. It preserves natural equivalences by transporting their inverses, and retains the component of every map at $vX$, including every objectwise equivalence. By [F2] the target has pullbacks. The dual criterion in [F3] tests a cartesian functor square at every source vertex. A restricted square at $X$ is exactly the source coherent square at $vX$, so it is cartesian; the same criterion on $\mathcal D_k$ makes the restricted functor square cartesian. Thus the transported maps retain all their coherence and naturality, and passage to the homotopy category gives the asserted derived values and maps. Together with step 1.1 this proves the claim without comparing sheafifications on different sites. [A1, F1, F2, F3, step 1.1] ∎
