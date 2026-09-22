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
    - title: "C. R. F. Maunder, The spectral sequence of an extraordinary cohomology theory, Theorem 3.3"
      url: https://doi.org/10.1017/S0305004100037245
      locator: "Theorem 3.3, pp. 567–574"
---

## Statement

Assume AC. On finite CW pairs the Bott-compatible $\Omega$-prespectrum $KU$ of
May represents the locally defined complex topological $K$-groups $K^*$
constructed from vector bundles: there are natural isomorphisms
$$KU^n(X,A)\cong K^n(X,A)$$
for all $n$, compatible with suspension and the cofiber connecting maps. After
Bott translation of any coefficient row to coefficient index at most $-2$,
Adams's connective cover $ku\to KU$ identifies the $E_3$ source, the $E_3$ target
and the differential $d_3$ of the two skeletal Atiyah–Hirzebruch spectral
sequences in that row. At bidegree $(p,q)$, put $t=p+q$. For $p\geq1$ the
resulting skeletal $d_3$ on a class represented by a cellular $E_1$-cocycle is
exactly the cellular lifting obstruction given by the Postnikov invariant of
the total-degree representing space $ku_t$ linking
$\pi_p(ku_t)=\pi_{-q}(ku)$ to $\pi_{p+2}(ku_t)=\pi_{2-q}(ku)$. Under the stable
Bott identifications this is the corresponding translate of the first stable
$ku$ invariant. It is independent of the chosen lifts; the case of a finite CW
pair follows by passing to the quotient.

## Facts & Assumptions

[A1] Assume AC. For a finite CW complex $Y$ one has $[Y,\mathbb Z\times BU]\cong\widetilde K^0(Y)$: the finite-rank complement theorem writes virtual bundles as $[E]-[\varepsilon^N]$, stable classification identifies them with component ranks of classifying maps, and the common-summand relation proves the identification in both directions ([[thm-finite-rank-complement-theorem-over-compact-hausdorff-bases]], [[thm-real-and-complex-vector-bundles-are-classified-by-stable-grassmannians]], [[def-complex-topological-k-zero-by-grothendieck-completion]]).

[A2] Assume AC. $KU$ denotes May's Bott-compatible $\Omega$-prespectrum with $KU_{2i}=\mathbb Z\times BU$ and $KU_{2i+1}=U$, whose adjoint structure maps are the loop and Bott equivalences; the associated cohomology theory has $KU^n(X,A)\cong K^n(X,A)$, with all naturalities. Complex $K$-theory is the two-periodic generalized cohomology theory of [[thm-complex-k-theory-is-a-two-periodic-generalized-cohomology-theory]] with the Bott isomorphisms of [[thm-complex-bott-periodicity]] ([[def-sequential-prespectrum-spectrum-and-adjoint-structure-maps]], [[def-stable-homotopy-groups-of-a-sequential-prespectrum]]).

[A3] Assume AC. Adams's connective cover $ku\to KU$ has $\pi_k(ku)=0$ for $k<0$ and maps isomorphically onto $\pi_k(KU)$ for $k\geq0$; as a spectrum it represents a reduced generalized cohomology theory on based finite CW complexes, and the spectrum map induces a morphism of reduced theories. Its first $k$-invariant is the stable operation $\delta_2Sq^2$ ([[def-sequential-prespectrum-spectrum-and-adjoint-structure-maps]], [[def-stable-homotopy-groups-of-a-sequential-prespectrum]], [[lem-first-connective-complex-k-theory-postnikov-invariant-is-integral-sq-three]]; Adams Chapter 6(v), printed pp. 245–246).

[A4] The cohomological AHSS of a finite CW complex has $E_1^{p,q}=h^{p+q}(X^p,X^{p-1})$, $d_1$ the cellular coboundary and $E_2^{p,q}=H^p(X;h^q(*))$, and the exact-couple machinery gives, for every $r$ and every class $e$ with $k(e)=i^{r-1}x$ in the skeletal couple, $d_r[e]=[j(x)]$ with $j$ the connecting and $k$ the pair map ([[thm-cohomological-atiyah-hirzebruch-spectral-sequence]], [[lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients]], [[thm-an-exact-couple-generates-a-spectral-sequence]]).

[A5] Assume AC. For a represented extraordinary cohomology theory, Maunder's comparison theorem identifies, from $E_2$ onward and compatibly with every differential, the spectral sequence from the skeletal filtration of the source with the spectral sequence from the Postnikov tower of the representing spaces. At bidegree $(p,q)$ of total degree $t=p+q$, the relevant representing space is $ku_t$, because $\pi_p(ku_t)=\pi_{p-t}(ku)=\pi_{-q}(ku)$ (Maunder, Theorem 3.3). The Postnikov invariant joining this group to $\pi_{p+2}(ku_t)$ is the primary obstruction of the relevant Postnikov fibration, and cellular lifting obstruction theory evaluates it on attaching maps independently of the chosen partial lifts ([[def-postnikov-k-invariant]], [[thm-obstruction-theory-for-lifting-through-a-fibration]], [[thm-eilenberg-maclane-spaces-represent-singular-cohomology]]). The comparison is applied componentwise to this representing space, not to the spectrum as though it were a single space.

## Proof

**Proof technique:** direct.

**Given:** Assume AC, finite CW pairs, the bundle model $K^*$, May's prespectrum $KU$ and Adams's connective cover $ku$.

1.1 For a based finite CW complex $Y$ the finite-rank complement theorem and stable classification identify $\widetilde K^0(Y)$ with the based homotopy set $[Y,\mathbb Z\times BU]$: every virtual class has the form $[E]-[\varepsilon^N]$; adding trivial summands does not change the stabilized classifying map; and a homotopy of classifying maps gives the corresponding stable bundle isomorphism. The common-summand relation therefore identifies both directions naturally. [A1, given]

1.2 The adjoint structure maps of $KU$ are equivalences, so $KU$ represents a cohomology theory; the degree-zero bundle-classification identification, the suspension adjunction and the natural Bott maps identify $KU^n(X,A)$ with the two-periodic $K^n(X,A)$ in every degree, because both connecting maps are induced by the same quotient map followed by suspension. [A1, A2, given]

1.3 If the chosen $KU$ coefficient row is odd, its source and target groups are zero and the comparison assertion is vacuous. Thus fix $p\ge1$ on a nonzero row and Bott-translate it to an even index $q\le-2$. Put $t=p+q$. A bidegree-$(p,q)$ class has total cohomological degree $t$, so its representing space in Maunder's comparison is $ku_t$, not $ku_{-q}$. The spectrum-space indexing gives
$$\pi_p(ku_t)=\pi_{p-t}(ku)=\pi_{-q}(ku)\cong\mathbb Z,$$
$$\pi_{p+1}(ku_t)=\pi_{1-q}(ku)=0,\qquad \pi_{p+2}(ku_t)=\pi_{2-q}(ku)\cong\mathbb Z.$$
Apply [A5] to the component containing the representing map. It gives an isomorphism from $E_2$ onward between the skeletal AHSS of [A4] and the Postnikov spectral sequence for $ku_t$, commuting with $d_3$. [A3, A4, A5, given]

2.1 In the Postnikov spectral sequence of step 1.3, the vanishing of $\pi_{p+1}(ku_t)$ makes the first possible differential out of this bidegree the operation represented by the relevant class $k_{p+3}$ linking $\pi_p(ku_t)$ to $\pi_{p+2}(ku_t)$. This need not be the first Postnikov invariant of the whole space $ku_t$: by [A3] it is the Bott translate, in this coefficient row, of the first stable $ku$ invariant. By the definition and lifting theorem cited in [A5], evaluating it on a cellular cocycle is the primary obstruction to lifting the corresponding map through that Postnikov stage: on each oriented $(p+3)$-cell it is obtained from the attaching map, and changing the partial lift changes the obstruction cochain by a coboundary. Maunder's differential-compatible comparison transports exactly this obstruction class to the skeletal $d_3$. [A3, A5, step 1.3]

2.2 Bott-translate any coefficient row to $q\le-2$. Since $E^q(*)=\pi_{-q}(E)$ for a representing spectrum, $ku\to KU$ is an isomorphism on the coefficient groups in the source row $q$ and target row $q-2$. It is also an isomorphism on the intervening odd rows, both of which are zero. Hence its map of skeletal exact couples induces isomorphisms on the relevant $E_2$ and $E_3$ source and target groups and commutes with $d_3$. [A3, A4, step 1.2]

3.1 Maunder's comparison and the relevant Postnikov obstruction in step 2.1 apply componentwise for every $p\ge1$, including $p=1$; no class in $H^p$ is evaluated on a space indexed by $-q$. For a finite CW pair $(X,A)$, apply the reduced comparison to the finite quotient $X/A$; represented cohomology identifies this with the relative group and preserves the skeletal filtration and connecting maps. [A2, A5, step 2.1, given]

4.1 Combining steps 1.3, 2.1 and 2.2 identifies the skeletal $d_3$ of the $K$-AHSS with the relevant Postnikov obstruction in the total-degree space $ku_{p+q}$, equivalently the coefficient-row translate of the first stable $ku$ invariant. Step 1.2 identifies the local $K$-groups with those represented by $KU$, and step 3.1 covers all $p\ge1$ and finite CW pairs. [step 1.2, step 1.3, step 2.1, step 2.2, step 3.1]

5.1 Steps 1.2 and 4.1 give the asserted representability, the $E_3$ comparison in nonpositive coefficient rows and the identification of the skeletal $d_3$ with the Postnikov obstruction. [step 1.2, step 4.1] ∎

## Source notes

The representability statements are May's [Chapter 22 §2 and Chapter 24 §§1–2](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf), printed pp. 175–179 and 204–208; the connective cover and its stable homotopy are Adams's [Chapter 2 and Chapter 6(v)](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/Adams-SHGH-latex2.pdf), printed pp. 174–179 and 245–246, with the first $k$-invariant supplied by Proposition 16.6 at pp. 391–393. The comparison between the skeletal and representing-space Postnikov spectral sequences is [Maunder's Theorem 3.3](https://doi.org/10.1017/S0305004100037245); it supplies isomorphisms from $E_2$ onward commuting with every differential. Adams identifies the $ku$ invariant, while Maunder is the missing comparison that makes it the skeletal $d_3$.
