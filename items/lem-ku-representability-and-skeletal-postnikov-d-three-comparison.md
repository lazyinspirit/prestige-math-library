---
id: lem-ku-representability-and-skeletal-postnikov-d-three-comparison
kind: lemma
title: KU representability and the skeletal–Postnikov d-three comparison
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians, thm-finite-rank-complement-theorem-over-compact-hausdorff-bases, def-complex-topological-k-zero-by-grothendieck-completion, thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory, thm-complex-bott-periodicity, def-sequential-prespectrum-spectrum-and-adjoint-structure-maps, def-stable-homotopy-groups-of-a-sequential-prespectrum, thm-cohomological-atiyah-hirzebruch-spectral-sequence, lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients, thm-naturality-and-edge-maps-of-the-ahss, thm-an-exact-couple-generates-a-spectral-sequence, def-postnikov-k-invariant, thm-obstruction-theory-for-lifting-through-a-fibration, thm-eilenberg-maclane-spaces-represent-singular-cohomology, lem-first-connective-complex-k-theory-postnikov-invariant-is-integral-sq-three, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the bundle model of complex K-theory and its representing spectrum."
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "J. F. Adams, Stable Homotopy and Generalised Homology, Chapter 2, printed pp. 174–179; Chapter 6(v), printed pp. 245–246; Proposition 16.6, printed pp. 391–393"
      url: https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/Adams-SHGH-latex2.pdf
      locator: "Chapter 2, printed pp. 174–179; Chapter 6(v), printed pp. 245–246; Proposition 16.6, printed pp. 391–393"
    - title: "J. P. May, A Concise Course in Algebraic Topology, Chapter 22 §2, printed pp. 175–179; Chapter 24 §§1–2, printed pp. 204–208"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chapter 22 §2, printed pp. 175–179; Chapter 24 §§1–2, printed pp. 204–208"
---

## Statement

Assume AC. On finite CW pairs the Bott-compatible $\Omega$-prespectrum $KU$ of
May represents the locally defined complex topological $K$-groups $K^*$
constructed from vector bundles: there are natural isomorphisms
$$KU^n(X,A)\cong K^n(X,A)$$
for all $n$, compatible with suspension and the cofiber connecting maps. After
Bott translation of any coefficient row to nonpositive total coefficient index,
Adams's connective cover $ku\to KU$ identifies the $E_3$ source, the $E_3$ target
and the differential $d_3$ of the two skeletal Atiyah–Hirzebruch spectral
sequences in that row. For $p\geq1$ the resulting skeletal $d_3$ on a class
represented by a cellular $E_1$-cocycle is exactly the cellular lifting
obstruction given by the first Postnikov invariant of the corresponding $ku$
representing space, independently of the chosen lifts; the case $p=1$ follows by
suspension and the case of a finite CW pair by passing to the quotient.

## Facts & Assumptions

[A1] Assume AC. For a finite CW complex $Y$ one has $[Y,\mathbb Z\times BU]\cong\widetilde K^0(Y)$: the finite-rank complement theorem writes virtual bundles as $[E]-[\varepsilon^N]$, stable classification identifies them with component ranks of classifying maps, and the common-summand relation proves the identification in both directions ([[thm-finite-rank-complement-theorem-over-compact-hausdorff-bases]], [[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]], [[def-complex-topological-k-zero-by-grothendieck-completion]]).

[A2] Assume AC. $KU$ denotes May's Bott-compatible $\Omega$-prespectrum with $KU_{2i}=\mathbb Z\times BU$ and $KU_{2i+1}=U$, whose adjoint structure maps are the loop and Bott equivalences; the associated cohomology theory has $KU^n(X,A)\cong K^n(X,A)$, with all naturalities. Complex $K$-theory is the two-periodic generalized cohomology theory of [[thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory]] with the Bott isomorphisms of [[thm-complex-bott-periodicity]] ([[def-sequential-prespectrum-spectrum-and-adjoint-structure-maps]], [[def-stable-homotopy-groups-of-a-sequential-prespectrum]]).

[A3] Assume AC. Adams's connective cover $ku\to KU$ has $\pi_k(ku)=0$ for $k<0$ and maps isomorphically onto $\pi_k(KU)$ for $k\geq0$; as a spectrum it represents a reduced generalized cohomology theory on based finite CW complexes, and the spectrum map induces a morphism of reduced theories. Its first $k$-invariant is the stable operation $\delta_2Sq^2$ ([[def-sequential-prespectrum-spectrum-and-adjoint-structure-maps]], [[def-stable-homotopy-groups-of-a-sequential-prespectrum]], [[lem-first-connective-complex-k-theory-postnikov-invariant-is-integral-sq-three]]; Adams Chapter 6(v), printed pp. 245–246).

[A4] The cohomological AHSS of a finite CW complex has $E_1^{p,q}=h^{p+q}(X^p,X^{p-1})$, $d_1$ the cellular coboundary and $E_2^{p,q}=H^p(X;h^q(*))$, and the exact-couple machinery gives, for every $r$ and every class $e$ with $k(e)=i^{r-1}x$ in the skeletal couple, $d_r[e]=[j(x)]$ with $j$ the connecting and $k$ the pair map ([[thm-cohomological-atiyah-hirzebruch-spectral-sequence]], [[lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients]], [[thm-an-exact-couple-generates-a-spectral-sequence]]).

[A5] Assume AC. The first Postnikov $k$-invariant of a connected spectrum is the primary obstruction to a section of its first Postnikov fibration, and the cellular obstruction theory identifies the obstruction on an oriented cell with the composite represented by the attaching map, independently of the chosen lifting data ([[def-postnikov-k-invariant]], [[thm-obstruction-theory-for-lifting-through-a-fibration]], [[thm-eilenberg-maclane-spaces-represent-singular-cohomology]]).

## Proof

**Proof technique:** direct.

**Given:** Assume AC, finite CW pairs, the bundle model $K^*$, May's prespectrum $KU$ and Adams's connective cover $ku$.

1.1 For a based finite CW complex $Y$ the finite-rank complement theorem and stable classification identify $\widetilde K^0(Y)$ with the based homotopy set $[Y,\mathbb Z\times BU]$: every virtual class has the form $[E]-[\varepsilon^N]$; adding trivial summands does not change the stabilized classifying map; and a homotopy of classifying maps gives the corresponding stable bundle isomorphism. The common-summand relation therefore identifies both directions naturally. [A1, given]

1.2 The adjoint structure maps of $KU$ are equivalences, so $KU$ represents a cohomology theory; the degree-zero bundle-classification identification, the suspension adjunction and the natural Bott maps identify $KU^n(X,A)$ with the two-periodic $K^n(X,A)$ in every degree, because both connecting maps are induced by the same quotient map followed by suspension. [A1, A2, given]

1.3 Let $p\geq2$ and represent an $E_3$ class in the $ku$ skeletal AHSS by an $E_1$ cellular cocycle $e$. The $r=3$ subquotient formula says precisely that, after changing $e$ by the permitted earlier boundaries, there is $y$ with $k(e)=i^2y$, and it gives $d_3[e]=[j(y)]$. Under spectrum representability, the $D$-groups are homotopy classes of maps from skeleta to the relevant $ku$ representing space, $i$ is restriction along one skeletal inclusion, $k$ forgets the relative trivialization of a class on a skeletal pair, and $j$ is the boundary obtained by precomposing with the attaching maps of the next cells. These identifications follow directly by applying the represented cohomology functor to the cofiber sequence $X^{s-1}\to X^s\to X^s/X^{s-1}$. [A2, A3, A4, given]

2.1 Read the equation of step 1.3 through those represented cofiber sequences, rather than treating it by itself as a construction of maps. Exactness at the first intermediate skeleton says that the relative class has a compatible representing-map extension over $X^{p+1}$; exactness at the second says that this extension lifts over $X^{p+2}$. Changing either extension changes $y$ by the indeterminacy already quotiented in $B^3$. Pull back the first Postnikov fibration of the corresponding $ku$ representing space along this partial lift. By [A5], its obstruction on an oriented $(p+3)$-cell is obtained by precomposing with that cell's attaching map. By the description of $j$ in step 1.3, the resulting cellular obstruction cochain is exactly $j(y)$, so its class is the exact-couple differential $d_3[e]=[j(y)]$ and is independent of the chosen extensions. [A4, A5, step 1.3]

2.2 Bott-translate any coefficient row to $q\leq0$. Since $E^q(*)=\pi_{-q}(E)$ for a representing spectrum, the map $ku\to KU$ is an isomorphism on the coefficient groups in every such row; the target row $q-2$ is still nonpositive. On $E_1$ it is therefore the direct sum, over the cells, of coefficient isomorphisms. The morphism of reduced theories in [A3] gives a morphism of skeletal exact couples, so the induced page maps identify the $E_3$ source and target and commute with $d_3$. [A3, A4, step 1.2]

3.1 For $p=1$ suspend the reduced class once: suspension of every skeletal-pair long exact sequence gives a termwise isomorphism of exact couples commuting with the $r=3$ local-lift formula, and the $p=2$ comparison of step 2.1 desuspends to $p=1$. Quotienting a finite CW pair by its subcomplex and repeating the argument gives the relative case. [A4, step 2.1, given]

4.1 Combining steps 1.3, 2.1 and 2.2 identifies the skeletal $d_3$ of the $K$-AHSS with the first representing-space Postnikov obstruction of $ku$, and step 1.2 identifies the local $K$-groups with those represented by $KU$; step 3.1 covers $p=1$ and finite CW pairs. [step 1.2, step 1.3, step 2.1, step 2.2, step 3.1]

5.1 Steps 1.2 and 4.1 give the asserted representability, the $E_3$ comparison in nonpositive coefficient rows and the identification of the skeletal $d_3$ with the Postnikov obstruction. [step 1.2, step 4.1] ∎

## Source notes

The representability statements are May's [Chapter 22 §2 and Chapter 24 §§1–2](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf), printed pp. 175–179 and 204–208; the connective cover and its stable homotopy are Adams's [Chapter 2 and Chapter 6(v)](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/Adams-SHGH-latex2.pdf), printed pp. 174–179 and 245–246, with the first $k$-invariant supplied by Proposition 16.6 at pp. 391–393. The skeletal-to-Postnikov comparison itself is proved here from the exact-couple lift formula and cellular obstruction theory; Adams does not supply it.
