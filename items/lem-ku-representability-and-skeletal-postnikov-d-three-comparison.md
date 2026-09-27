---
id: lem-ku-representability-and-skeletal-postnikov-d-three-comparison
kind: lemma
title: KU representability and the skeletal–Postnikov d-three comparison
status: published
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
    - title: "J. F. Adams, Stable Homotopy and Generalised Homology, Chapter 2, printed pp. 174–179; Chapter 6(v), printed pp. 245–246; Chapter 7, printed pp. 257–260; Proposition 16.6, printed pp. 391–393"
      url: https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/Adams-SHGH-latex2.pdf
      locator: "Chapter 2, printed pp. 174–179; Chapter 6(v), printed pp. 245–246; Chapter 7, printed pp. 257–260; Proposition 16.6, printed pp. 391–393"
    - title: "J. P. May, A Concise Course in Algebraic Topology, Chapter 22 §2, printed pp. 175–179; Chapter 24 §§1–2, printed pp. 204–208"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chapter 22 §2, printed pp. 175–179; Chapter 24 §§1–2, printed pp. 204–208"
verification:
  verified:
    model: gpt-6-sol
    verdict: locally-reviewed
    date: '2026-09-24'
    scope: Bounded mathematical repair review recorded in /home/lazyinspirit/Projects/prestige-math-library/research/ap-131-sol-repair/agent-09-receipts.jsonl.
      Local checks and any separate second-reader evidence are recorded in the run
      report; this is not an independent judge verdict or whole-library certification.
    delegated_by: user
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

[A3] Assume AC. Adams's connective cover $ku\to KU$ has $\pi_k(ku)=0$ for $k<0$ and maps isomorphically onto $\pi_k(KU)$ for $k\geq0$; as a spectrum it represents a reduced generalized cohomology theory on based finite CW complexes, and the spectrum map induces a morphism of reduced theories. Its first $k$-invariant is the stable operation $\delta_2Sq^2$ ([[def-sequential-prespectrum-spectrum-and-adjoint-structure-maps]], [[def-stable-homotopy-groups-of-a-sequential-prespectrum]], [[lem-first-connective-complex-k-theory-postnikov-invariant-is-integral-sq-three]]; Adams Chapter 6(v), printed pp. 245–246, and Proposition 16.6, printed p. 391). Adams also gives the Bott cofiber sequence $\Sigma^2ku\xrightarrow{\beta}ku\to H\mathbb Z$ at printed p. 391. Its homotopy long exact sequence shows that $\beta$ is an isomorphism on $\pi_j$ for every $j\geq1$.

[A4] The cohomological AHSS of a finite CW complex has $E_1^{p,q}=h^{p+q}(X^p,X^{p-1})$, $d_1$ the cellular coboundary and $E_2^{p,q}=H^p(X;h^q(*))$, and the exact-couple machinery gives, for every $r$ and every class $e$ with $k(e)=i^{r-1}x$ in the skeletal couple, $d_r[e]=[j(x)]$ with $j$ the connecting and $k$ the pair map ([[thm-cohomological-atiyah-hirzebruch-spectral-sequence]], [[lem-ahss-e-one-page-is-cellular-cochains-with-theory-coefficients]], [[thm-an-exact-couple-generates-a-spectral-sequence]]; Adams Chapter 7, printed pp. 257–260, for the skeletal pair/triple construction).

[A5] For a spectrum $E$ represented by an $\Omega$-prespectrum in nonnegative indices, extend the representing-space notation to negative $t$ by $E_t:=\Omega^{-t}E_0$ for $t<0$. Suspension adjunction then gives $\widetilde E^t(Y)=[Y,E_t]$ in negative degrees as well. For $p\ge1$, the adjoint structure equivalences and stable-group definition give $\pi_p(E_t)=\pi_{p-t}(E)$ for every integer $t$: for $t<0$ this is the elementary loop-space identity, and for $t\ge0$ it follows from the stabilized adjoint maps ([[def-sequential-prespectrum-spectrum-and-adjoint-structure-maps]], [[def-stable-homotopy-groups-of-a-sequential-prespectrum]]). A finite CW pair is represented by based maps out of its cofiber: $X/A$ when $A\ne\varnothing$, and $X_+$ when $A=\varnothing$. The obstruction theorem identifies extension across a $(p+3)$-cell, after extending through dimension $p+2$, with an element of $\pi_{p+2}(E_t)$; the relevant Postnikov invariant is its universal class ([[def-postnikov-k-invariant]], [[thm-obstruction-theory-for-lifting-through-a-fibration]], [[thm-eilenberg-maclane-spaces-represent-singular-cohomology]]). Below we compare this obstruction directly with the skeletal exact-couple formula, without assuming a separate comparison theorem for two spectral sequences.

## Proof

**Proof technique:** direct.

**Given:** Assume AC, finite CW pairs, the bundle model $K^*$, May's prespectrum $KU$ and Adams's connective cover $ku$.

1.1 For a based finite CW complex $Y$ the finite-rank complement theorem and stable classification identify $\widetilde K^0(Y)$ with the based homotopy set $[Y,\mathbb Z\times BU]$: every virtual class has the form $[E]-[\varepsilon^N]$; adding trivial summands does not change the stabilized classifying map; and a homotopy of classifying maps gives the corresponding stable bundle isomorphism. The common-summand relation therefore identifies both directions naturally. [A1, given]

1.2 The adjoint structure maps of $KU$ are equivalences, so $KU$ represents a cohomology theory; the degree-zero bundle-classification identification, the suspension adjunction and the natural Bott maps identify $KU^n(X,A)$ with the two-periodic $K^n(X,A)$ in every degree, because both connecting maps are induced by the same quotient map followed by suspension. [A1, A2, given]

1.3 If the chosen $KU$ coefficient row is odd, its source and target groups are zero and the comparison assertion is vacuous. Thus fix $p\ge1$ on a nonzero row and Bott-translate it to an even index $q\le-2$. Put $t=p+q$. A bidegree-$(p,q)$ class has total cohomological degree $t$, so its representing space is $ku_t$, not $ku_{-q}$. If $t<0$, this means the explicitly defined iterated loop space $\Omega^{-t}ku_0$ in [A5]. The spectrum-space indexing gives $$\pi_p(ku_t)=\pi_{p-t}(ku)=\pi_{-q}(ku)\cong\mathbb Z,$$ $$\pi_{p+1}(ku_t)=\pi_{1-q}(ku)=0,\qquad \pi_{p+2}(ku_t)=\pi_{2-q}(ku)\cong\mathbb Z.$$ The relative quotient $X^{p+2}/X^{p-1}$ is $(p-1)$-connected, so a based representing map has trivial data in lower Postnikov degrees; for $p=1$ its base component is specified. Thus the first possible obstruction from this coefficient class is the invariant joining the displayed $\pi_p$ and $\pi_{p+2}$. [A3, A4, A5, given]

2.1 We identify that obstruction with the skeletal $d_3$ directly. Represent a cellular $E_1^{p,q}$ class by a based map $a:X^p/X^{p-1}\to ku_t$. Its restriction to each $p$-cell is the element of $\pi_p(ku_t)$ in step 1.3. The skeletal exact-couple formula in [A4] says that $a$ survives to $E_3$ exactly when a representative extends, after the allowed $E_1$ boundary adjustment, over $X^{p+2}/X^{p-1}$. The first extension obstruction, on $(p+1)$-cells, is the cellular coboundary $d_1a$. After it vanishes, the next obstruction lies in $\pi_{p+1}(ku_t)=0$, so extension over $(p+2)$-cells is possible. Fix such an extension $\widetilde a$. On each $(p+3)$-cell, the attaching sphere followed by $\widetilde a$ gives an element of $\pi_{p+2}(ku_t)$. These elements form the next cellular obstruction cochain. They are also the components of the generalized-cohomology connecting map for the cofiber sequence $X^{p+2}/X^{p-1}\to X^{p+3}/X^{p-1}\to\bigvee S^{p+3}$: on one cell, that connecting map is restriction to its attaching sphere, followed by suspension. This connecting map is precisely the pair boundary represented by $j(x)$ in [A4]. Therefore its class in the $E_3$ target is $d_3[a]$. Changing $\widetilde a$ changes the cochain by a coboundary or the preceding exact-couple indeterminacy; the intervening odd coefficient groups make $d_2=0$. [A4, A5, step 1.3]

2.2 Bott-translate any coefficient row to $q\le-2$. Since $E^q(*)=\pi_{-q}(E)$ for a representing spectrum, $ku\to KU$ is an isomorphism on the coefficient groups in the source row $q$ and target row $q-2$. It is also an isomorphism on the intervening odd rows, both of which are zero. Hence its map of skeletal exact couples induces isomorphisms on the relevant $E_2$ and $E_3$ source and target groups and commutes with $d_3$. [A3, A4, step 1.2]

3.1 To identify the operation rather than just the obstruction group, write $-q=2k$ with $k\geq1$. Iterating the Bott map of [A3] gives $\beta^k:\Sigma^{2k}ku\to ku$, an isomorphism on $\pi_j$ for $j\geq2k$. At representing-space index $t=p-2k$, its source space is $ku_p$ and its target is $ku_t$; it is an isomorphism on $\pi_i$ for $i\geq p$, while $ku_p$ has no homotopy below degree $p$ in its based component. Thus $ku_p\to ku_t$ is the relevant $p$-connective cover. The quotient $X^{p+3}/X^{p-1}$ is $(p-1)$-connected, so the lower Postnikov stages of $ku_t$ carry only the null map on it; the lifting obstruction of step 2.1 is transported from the first marked Postnikov fibration of $ku_p$. For $p\geq2$, [[lem-first-connective-complex-k-theory-postnikov-invariant-is-integral-sq-three]] identifies its universal class with $\beta_{\mathbb Z}Sq^2\rho_2$ on $H^p(-;\mathbb Z)$. Its evaluation on the class represented by $a$ is consequently the obstruction cochain class of step 2.1. This derives the Bott-row translation from the actual Bott map and does not infer it merely from equality of homotopy groups. [A3, A5, step 1.3, step 2.1]

3.2 The representing-space and exact-couple comparison in step 2.1 applies componentwise for every $p\ge1$; no class in $H^p$ is evaluated on a space indexed by $-q$. At $p=1$, the base component has $\pi_1=\mathbb Z$, $\pi_2=0$ and $\pi_3=\mathbb Z$. The relevant universal class lies in $H^4(K(\mathbb Z,1);\mathbb Z)=H^4(S^1;\mathbb Z)=0$, agreeing with the instability vanishing of $Sq^2$ on degree-one classes. Thus this edge case has zero obstruction and zero $d_3$ without invoking the $m\ge2$ space-invariant clause of [[lem-first-connective-complex-k-theory-postnikov-invariant-is-integral-sq-three]]. For a finite CW pair $(X,A)$, apply the same argument to its finite based cofiber: $X/A$ if $A\ne\varnothing$, or $X_+$ if $A=\varnothing$. Represented cohomology identifies these with the relative and absolute groups respectively, preserving the skeletal filtration and connecting maps. [A2, A5, step 2.1, given]

4.1 Combining steps 1.3 and 2.1–3.2 identifies the skeletal $d_3$ of the $K$-AHSS with the relevant Postnikov obstruction in the total-degree space $ku_{p+q}$, equivalently the coefficient-row translate of the first stable $ku$ invariant. Step 1.2 identifies the local $K$-groups with those represented by $KU$, and step 3.2 covers all $p\ge1$ and finite CW pairs. [step 1.2, step 1.3, step 2.1, step 2.2, step 3.1, step 3.2]

5.1 Steps 1.2 and 4.1 give the asserted representability, the $E_3$ comparison in nonpositive coefficient rows and the identification of the skeletal $d_3$ with the Postnikov obstruction. [step 1.2, step 4.1] ∎

## Source notes

The representability statements used here are May's [Chapter 22 §2 and Chapter 24 §§1–2](https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf), printed pp. 175–179 and 204–208. Adams's [Chapter 2, Chapter 6(v), and Chapter 7](https://www.sas.rochester.edu/mth/sites/doug-ravenel/otherpapers/Adams-SHGH-latex2.pdf), printed pp. 174–179, 245–247, and 257–260, provide the spectrum indexing, connective cover and skeletal exact-couple construction; his Proposition 16.6 at pp. 391–393 supplies the stable $k$-invariant and, on p. 391, the Bott cofiber sequence. Steps 2.1 and 3.1 give the local skeletal exact-couple/obstruction comparison and the connective-cover transport used in this item.
