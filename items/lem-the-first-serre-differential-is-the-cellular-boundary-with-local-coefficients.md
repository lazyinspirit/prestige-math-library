---
id: lem-the-first-serre-differential-is-the-cellular-boundary-with-local-coefficients
kind: lemma
title: The first Serre differential is the cellular boundary with local coefficients
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [lem-relative-homology-over-one-base-cell-is-the-shifted-fiber-homology, thm-a-filtered-complex-produces-an-exact-couple, prop-the-exact-couple-and-subquotient-constructions-of-the-filtered-complex-spectral-sequence-agree, prop-elementwise-formula-for-the-connecting-map-in-module-categories, def-singular-and-cellular-chain-complexes-with-local-coefficients, lem-twisted-boundaries-square-to-zero-and-are-independent-of-lift-bases, thm-cellular-chains-compute-homology-with-local-coefficients, lem-compact-cw-images-have-finite-cell-support-without-choice]
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Hatcher, Algebraic Topology, proof of Theorem 5.3"
      url: "https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf"
      locator: "§5.1, printed pp. 530–532"
---

## Statement

Let $p:E\to B$ and $R$ satisfy the preceding relative-cell lemma, and write
$$\Psi_{p,q}:E^1_{p,q}\xrightarrow{\cong}C_p^{\mathrm{cell}}\bigl(B;\mathcal H_q(p;R)\bigr)$$
for its orientation-compatible cellwise isomorphism. Then
$$\Psi_{p-1,q}\,d_1=\partial^{\mathrm{cell}}_{\mathcal H_q}\,\Psi_{p,q}.$$
Thus $d_1$ has bidegree $(-1,0)$ and includes both the cellular incidence
signs and covariant strict-fiber transport from each $p$-cell center to the
incident $(p-1)$-cell center. Consequently
$$E^2_{p,q}\cong H_p\bigl(B;\mathcal H_q(p;R)\bigr).$$
All assertions are choice-free.

## Facts & Assumptions

**Given:** The preceding cellwise identifications, their fixed disk orientations and radial paths, and the singular skeletal filtration.

[F1] [[lem-relative-homology-over-one-base-cell-is-the-shifted-fiber-homology]] constructs $\Psi_{p,q}$ by natural pair connectors, hemisphere excision, radial transport, and cell additivity.

[F2] [[thm-a-filtered-complex-produces-an-exact-couple]] identifies the initial page with relative skeletal homology. The comparison [[prop-the-exact-couple-and-subquotient-constructions-of-the-filtered-complex-spectral-sequence-agree]] preserves signs and says that the page differential sends a representative $[c]$ to $[\partial c]$.

[F3] [[prop-elementwise-formula-for-the-connecting-map-in-module-categories]] gives the positive-sign chain formula for a homology connector.

[F4] [[def-singular-and-cellular-chain-complexes-with-local-coefficients]] fixes the intrinsic transport convention and the universal-cover tensor model. [[lem-twisted-boundaries-square-to-zero-and-are-independent-of-lift-bases]] gives its group-ring incidence formula, square-zero property, and invariance under changes of cell lifts and orientations.

[F5] [[thm-cellular-chains-compute-homology-with-local-coefficients]] identifies the intrinsic consecutive-skeleton group with the direct sum of the oriented coefficient stalks and its differential with the signed group-ring incidence matrix acting through monodromy.

[F6] [[lem-compact-cw-images-have-finite-cell-support-without-choice]] places the image of each attaching sphere in a finite subcomplex.

## Proof

**Proof technique:** naturality of the cell suspension isomorphisms.

1.1 Put $n=p+q$. In the exact couple of the filtration, the first differential is $d_1=j k$: the connector $$k:H_n(E_p,E_{p-1};R)\longrightarrow H_{n-1}(E_{p-1};R)$$ is followed by the quotient map $$j:H_{n-1}(E_{p-1};R)\longrightarrow H_{n-1}(E_{p-1},E_{p-2};R).$$ By [F2] this exact-couple differential is the filtered-complex $d_1$ with no extra sign. Concretely, [F3] sends a relative cycle represented by $c$ to the class represented by $\partial c$ in the preceding relative layer. [F2, F3]

2.1 Fix oriented cells $e^p$ and $f^{p-1}$. Project the source and target of Step 1.1 to their $e$- and $f$-summands using the cell-excision maps of [F1]. Naturality of pair connectors and excision gives a commutative square whose upper map is the boundary contribution of the attaching map $\phi_e|_{S^{p-1}}$ to $f$, and whose vertical maps are the iterated hemisphere isomorphisms defining $\Psi$. Thus the $(f,e)$ component of $\Psi d_1\Psi^{-1}$ is determined entirely by the oriented attaching incidence together with fiber transport along the path from $b_e$ through the attaching sphere to $b_f$. [F1, F3, Step 1.1]

3.1 To calculate that component, temporarily supply lifts of these two cells to a universal cover of their base component. Write $$\partial\widetilde e=\sum_f\widetilde f\,r_{fe}$$ with $r_{fe}$ the finite signed sum of deck transformations determined by the lifted attaching incidences. Finiteness follows from [F6]. For one orientation-preserving degree-one disk contribution, naturality of every connector and excision map in [F1] makes the fiber map exactly the transport along its incidence path. For an orientation-reversing contribution, reduce by naturality to a reflection of the one-dimensional disk. Its pair sequence has boundary kernel $$\ker\bigl(H_q(F_-;R)\oplus H_q(F_+;R)\to H_q(\widetilde D^1;R)\bigr) =\{(x,-x):x\in H_q(F_-;R)\},$$ after transport identifies the two endpoint groups. Interchanging the endpoints therefore multiplies the suspension isomorphism by $-1$. Additivity now makes a degree-$m$ incidence contribute $m$ times its transport, and summing the finitely many terms gives exactly the action of $r_{fe}$ fixed in [F4]. [F1, F3, F4, F6, Step 2.1]

4.1 It follows for every supplied lift basis that $$\bigl(\Psi d_1\Psi^{-1}\bigr)_f(x_e) =\sum_e r_{fe}x_e,$$ where the action notation is precisely the balanced tensor convention of [F4], hence precisely its signed transport formula. Changing lifts conjugates the incidence matrices and coefficient coordinates by the same diagonal deck transformations; changing orientations conjugates them by the same diagonal signs. Therefore [F4] descends this equality to the intrinsic cellular local complex, without any global choice of lifts. By [F5], the right side is $\partial^{\mathrm{cell}}_{\mathcal H_q}$. This proves the asserted intertwining identity. [F4, F5, Step 3.1]

5.1 The next page is the homology of $(E^1_{*,q},d_1)$. Step 4.1 identifies this chain complex with $C_*^{\mathrm{cell}}(B;\mathcal H_q(p;R))$, and [F5] identifies its homology with $H_*(B;\mathcal H_q(p;R))$. Hence $E^2_{p,q}\cong H_p(B;\mathcal H_q(p;R))$. [F2, F5, Step 4.1]

6.1 For $p=0$ both differentials out of the left edge are zero. For $p=1$ the reflection calculation in Step 3.1 is the whole sign calculation, and for $q=0$ the same formula acts on fiber components. An empty or zero stalk, the zero ring, no incident cells, and a zero incidence coefficient contribute zero. One incidence of either sign is explicit in Step 3.1; multiple and cancelling incidences use finite additivity. Degenerate singular simplices remain in the relative chain representative of Step 1.1. Both endpoints of every incidence path occur in the typed transport $b_e\to b_f$. A cellular chain has finite support, and [F6] makes each relevant attaching support finite, so only finite supplied lift data are ever used; the intrinsic conclusion uses no AC. The statement is not an iff. [F1, F2, F4, F5, F6, Step 1.1, Step 3.1, Step 4.1, Step 5.1] ∎
