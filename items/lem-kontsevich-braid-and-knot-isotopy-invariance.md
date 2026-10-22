---
id: lem-kontsevich-braid-and-knot-isotopy-invariance
kind: lemma
title: Braid and knot isotopy invariance of the normalized integral
status: published
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-kontsevich-integral-on-parenthesized-braids
  - def-singular-knot-and-vassiliev-derivative
  - def-framed-chord-diagram-and-four-term-relations
  - def-countable-choice
  - lem-kz-connection-flatness-and-braid-relations
  - lem-kontsevich-configuration-space-compactification-faces
  - lem-kontsevich-configuration-integral-convergence-needle-estimates
  - lem-kontsevich-morse-tangle-composition
  - lem-kontsevich-critical-point-normalization-and-associator
  - lem-kontsevich-morse-isotopy-decomposition
  - def-oriented-reidemeister-moves
  - thm-oriented-reidemeister-equivalence-theorem
  - lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy
  - def-markov-conjugation-and-stabilization-moves
  - def-closure-of-a-geometric-braid
  - lem-markov-moves-preserve-oriented-closure-isotopy
justified_by: []
dependency_level: 9
sources:
  references:
    - title: Introduction to Vassiliev Knot Invariants, §§8.4–8.8 and 10.1.1–10.1.4
      url: https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf
    - title: The Fundamental Theorem of Vassiliev Invariants, §2.5
      url: https://arxiv.org/pdf/q-alg/9702009v1
    - title: The Universal Vassiliev–Kontsevich Invariant for Framed Oriented Links, §§3–4
      url: https://letu.math.gatech.edu/Papers/UN_PAPER.pdf
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $K_0,K_1$ be strict Morse presentations of smooth oriented knots. Define a horizontal deformation to be a smooth family $K_s(x)=(z_s(x),t(x))$ that fixes neighborhoods of all height critical points. Define a critical-point move to be a smooth family fixed outside one local arc containing a single nondegenerate critical point in a horizontal slab, such that horizontal deformations can narrow the moving arc to every sufficiently small width $\varepsilon$, each horizontal disk meets that arc in at most two points, and its Morse charts remain uniformly bounded. Let a standard hump birth or death mean insertion or deletion of the fixed local maximum-minimum pair used in the normalization.

The normalized unframed series $I(K)=Z(K)Z(H)^{-r(K)}$ is unchanged by orientation-preserving reparametrizations, horizontal deformations, critical-point moves, and standard hump births or deaths, and hence by any finite sequence of these moves. Assume $\mathrm{AC}_\omega$. If $K_0$ and $K_1$ are related by a smooth ambient isotopy, then $I(K_0)=I(K_1)$. For a fixed parenthesization, the KZ holonomy of a geometric braid is invariant under homotopies of its configuration path with endpoints fixed. Under $\mathrm{AC}_\omega$, finite Markov moves preserve the normalized series of strict Morse knot presentations of their one-component braid closures, and oriented Reidemeister moves preserve the normalized series of strict Morse presentations of the knots they represent.

The diagram shows a horizontal deformation: the local arcs move in the complex coordinate while the height coordinate and critical neighborhoods remain fixed. It illustrates the move convention and is not used as proof.

```tikz
\begin{tikzpicture}[scale=0.85,thick]
  \draw[->] (-1.5,0) -- (1.7,0) node[right] {$\operatorname{Re}z$};
  \draw[->] (-1.5,0) -- (-1.5,3) node[above] {$t$};
  \draw (-0.4,0.2) .. controls (-0.2,0.9) and (-0.8,1.4) .. (-0.25,2.1);
  \draw[dashed] (0.1,0.2) .. controls (0.7,0.9) and (0.55,1.4) .. (0.9,2.1);
  \draw[dotted] (-0.4,0.2) -- (0.1,0.2);
  \draw[dotted] (-0.25,2.1) -- (0.9,2.1);
  \node at (-0.8,2.45) {same critical data};
  \node at (1.25,1.25) {$s\mapsto z_s$};
\end{tikzpicture}
```

## Statement references

[[def-kontsevich-integral-on-parenthesized-braids|Configuration integral and normalized series]]

[[lem-kontsevich-configuration-space-compactification-faces|Finite-degree integration faces]]

[[lem-kontsevich-configuration-integral-convergence-needle-estimates|Absolute convergence and critical-needle estimate]]

[[lem-kontsevich-critical-point-normalization-and-associator|Hump birth/death normalization]]

[[lem-kontsevich-morse-tangle-composition|Tangle factorization used in the horizontal-deformation proof]]

[[lem-kontsevich-morse-isotopy-decomposition|Finite generic Morse movie under countable choice]]

[[thm-oriented-reidemeister-equivalence-theorem|Reidemeister presentation under countable choice]]

[[lem-markov-moves-preserve-oriented-closure-isotopy|Markov moves preserve oriented closures under countable choice]]

[Chmutov, Duzhin, and Mostovoy, §§8.4–8.8 and 10.1.1–10.1.4, printed pp. 228–243 and 269–273](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)

[Bar-Natan and Stoimenow, §2.5, PDF pp. 12–15](https://arxiv.org/pdf/q-alg/9702009v1)

[Le and Murakami, §§3–4, PDF pp. 4–7](https://letu.math.gatech.edu/Papers/UN_PAPER.pdf)

## Facts & Assumptions

**Given:** Strict Morse oriented knots, the degreewise unframed configuration series, the KZ connection, and $\mathrm{AC}_\omega$ only for the ambient-isotopy, Markov, and diagrammatic corollaries.

[F1] [[def-kontsevich-integral-on-parenthesized-braids]]: the degree-$m$ coefficient is the sum of the logarithmic configuration integrals in the unframed 4T+1T quotient, and $I(K)=Z(K)Z(H)^{-r(K)}$.

[F2] [[lem-kontsevich-configuration-space-compactification-faces]]: each degree-$m$ chamber has a compact manifold-with-corners resolution whose codimension-one faces are level collisions, outer endpoints, critical levels, and compatible endpoint-collision faces.

[F3] [[lem-kontsevich-configuration-integral-convergence-needle-estimates]]: every fixed strict Morse knot or compact strict Morse tangle has absolutely convergent degreewise coefficients. Its controlled local-cap estimate requires its explicit uniform band, derivative and separation hypotheses and permits logarithmic factors. The critical-point moves below use the separate established special-movement input [F15], not an unrestricted uniform needle bound.

[F4] [[lem-kz-connection-flatness-and-braid-relations]]: the KZ form is flat, and its degreewise holonomy is invariant under fixed-endpoint homotopy of a path in the configuration space.

[F5] [[def-kontsevich-integral-on-parenthesized-braids]] and [[def-framed-chord-diagram-and-four-term-relations]]: the tangle 4T relation is the same local alternating relation on its skeleton, and the closed unframed quotient kills an isolated chord.

[F6] [[lem-kontsevich-critical-point-normalization-and-associator]]: insertion or deletion of the fixed standard hump multiplies $Z$ by $Z(H)$ and leaves $I$ unchanged.

[F7] [[lem-kontsevich-morse-isotopy-decomposition]]: under $\mathrm{AC}_\omega$, every smooth isotopy with strict Morse endpoint heights has a fixed-endpoint perturbation with finitely many isolated critical-pair births/deaths and critical-value crossings.

[F8] [[def-oriented-reidemeister-moves]]: the allowed oriented diagram moves are planar isotopies and the stated R1, R2, R3 moves with their orientation variants.

[F9] [[thm-oriented-reidemeister-equivalence-theorem]]: under $\mathrm{AC}_\omega$, ambient isotopic oriented links admit regular diagrams connected by a finite sequence of planar isotopies and oriented Reidemeister moves.

[F10] [[lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy]]: every oriented Reidemeister move is realized by an ambient isotopy of its smooth link realization.

[F11] [[def-markov-conjugation-and-stabilization-moves]]: Markov equivalence is generated by conjugation and positive or negative stabilization/destabilization.

[F12] [[def-closure-of-a-geometric-braid]]: each geometric braid has a smooth oriented link closure in $S^3$.

[F13] [[lem-markov-moves-preserve-oriented-closure-isotopy]]: under $\mathrm{AC}_\omega$, each Markov move preserves the oriented closure up to ambient isotopy.

[F14] [[lem-kontsevich-morse-tangle-composition]]: unframed tangle integrals converge absolutely degreewise and factor under vertical composition.

[F15] **External input — special critical movements.** Chmutov–Duzhin–Mostovoy, §8.6.2, printed pp. 236–237, proves $Z(T_0)=Z(T_1)$ when the tangles agree outside a region $D=\bigcup_{t\in[t_1,t_2]}D_t$ of horizontal disks, each tangle has exactly one nondegenerate critical point in $D$, and every $D_t$ meets each tangle in at most two points. Together with §8.6, printed p. 233, this gives the reduction of a deformation through Morse knots to reparametrizations, horizontal deformations and these special critical movements; critical values may cross. This is an imported established result, not a local proof or an application of a uniform absolute bound to an arbitrarily degenerating family. Actual reading for this repair: the complete §8.6 proof, printed pp. 233–237, including the opposite down-sign pairing of the highest long chord and its subsequent short-chord estimates.

[F16] **External input — invariance within the Morse class.** Chmutov–Duzhin–Mostovoy, Theorem in §8.6, printed p. 232, with the complete argument in §§8.6.1–8.6.2, printed pp. 233–237, establishes invariance of the closed unframed configuration series under smooth deformations through Morse knots, without requiring distinct critical values. In particular it covers a height-preserving deformation fixing critical-point neighborhoods while other strands at those same heights move. We import this established theorem, not merely the fixed-boundary regular-tangle proposition in §8.6.1. That proposition alone does not justify treating whole critical slabs as fixed. Actual reading: the entire §8.6, pp. 232–237, including its stated Morse-class theorem, regular-face cancellations and special-movement argument; Bar-Natan–Stoimenow §2.5.2, pp. 13–14, was also checked and explicitly requires frozen critical time slices. The passage across critical slabs is external input here, not a claimed local proof.

## Proof

**Given:** As above. Fix a degree $m$ for all configuration-integral arguments; all diagram spaces at degree $m$ are finite-dimensional.

1.1 An orientation-preserving reparametrization of $K$ preserves the cyclic order of every chord endpoint, the set of points at each height, the down-endpoint sign, and the pulled-back differential form. Hence every degree coefficient of $Z(K)$ is unchanged, and the reparametrization preserves $r(K)$. A positive affine change $t\mapsto at+b$ of the height also preserves each coefficient: substitute $u_j=at_j+b$ in the ordered level integrals; the branch pairings and logarithmic forms correspond term by term. Thus $I(K)$ is unchanged under both operations. [given, F1, algebra]

1.2 A horizontal deformation in the Statement is a smooth family of closed Morse knots: its height function is fixed and all its critical points remain nondegenerate. Apply [F16] directly to obtain $Z(K_0)=Z(K_1)$, even though regular strands in the critical slabs can move. The number of maxima is fixed, so $I(K_0)=I(K_1)$. The supplementary regular-tangle computation has a stronger boundary hypothesis; no assertion that entire critical slabs are fixed is needed. [F1, F16, algebra]

1.3 By [F6], a standard hump birth multiplies the preliminary series by $Z(H)$ and increases $r(K)$ by one. Thus $I(K^+)=Z(H)Z(K)Z(H)^{-r(K)-1}=I(K)$; deleting the hump is the reverse equality. [F1, F6, algebra]

1.4 By definition of a critical-point move, the affected arc can be placed in a horizontal disk region meeting the knot in at most two points per disk, with exactly one nondegenerate critical point and no change outside that region. Thus [F15] applies and gives equality of the preliminary series. The number of maxima is unchanged during the move, so the normalized series is equal as well. [F1, F15, algebra]

1.5 Between successive fold events of the generic movie [F7], every height function is Morse, including at a crossing of two critical values. The full Morse-class theorem [F16] applies on each compact subinterval, so $Z$ is constant there. The number of maxima cannot change without a degenerate critical point, so $r$ and $I$ are constant as well. In particular this handles critical-value crossings without assuming that the critical neighborhoods or the whole critical slabs remain fixed. [F1, F7, F16, algebra]

2.1 For the supplementary regular-tangle calculation, let $T_s$ have no critical points and fix its entire upper and lower boundary configurations. On each degree-$m$ branch chamber, form the finite signed diagram-valued sum $\omega_m$ of wedges of $d\log(z_i-z_j)$, taking full differentials in the levels and $s$. Embeddedness and compactness give nonzero uniformly separated branch differences, so these forms extend smoothly to the closed unblown chamber and are closed. Apply Stokes to its product with the deformation interval. On an outer endpoint face, the logarithmic factor at that level is zero because its two boundary points are fixed. At an equal-level face, if the two chords use the same two branches, their logarithmic 1-forms coincide and their wedge is zero. If they use four distinct branches, swapping the two chord choices gives the same diagram with the opposite wedge sign, so the terms cancel. If they use exactly three branches, the 4T relation [F5] groups the six choices into the common diagram coefficient times $\alpha_{12}\wedge\alpha_{23}+\alpha_{23}\wedge\alpha_{31}+\alpha_{31}\wedge\alpha_{12}$, where $\alpha_{ij}=d\log(z_i-z_j)$. Set $f=z_1-z_2$, $g=z_2-z_3$, and $h=z_3-z_1=-(f+g)$. Direct expansion gives $\alpha_{12}\wedge\alpha_{23}+\alpha_{23}\wedge\alpha_{31}+\alpha_{31}\wedge\alpha_{12} =\bigl(\frac1{fg}-\frac1{g(f+g)}-\frac1{f(f+g)}\bigr)\,df\wedge dg=0$. These cases exhaust adjacent-level faces. The real blow-ups in [F2] over collision centers of codimension at least two add no Stokes term: on this no-critical tangle the branch form extends smoothly to the unblown closed chamber, and the blowdown restricted to a front face times the deformation interval has rank at most $m-1$, so its pullback $m$-form vanishes there. A codimension-one center is an adjacent-level face already handled above. Thus the only remaining boundary integrals are the two ends $s=0,1$, which are equal. Summing the finitely many chambers proves equality of the regular-tangle series. This proves the regular-tangle assertion only under its whole-boundary hypothesis. The closed-knot horizontal conclusion instead follows directly from [F16] in step 1.2. [F1, F2, F5, F16, step 1.2, construct, algebra]

2.2 At a fold, [F7] gives one local maximum-minimum birth or death. The affected arc is isolated in a small ball and has nonzero complex tangent at the degenerate point. Rotate the complex coordinate so $u=\operatorname{Re}z$ is a local parameter, then shrink the ball so $u$ is strictly monotone along the entire arc. Interpolating $\operatorname{Im}z$ to zero at fixed $(u,t)$ remains an embedding because distinct arc points have distinct $u$. On the resulting planar arc, move the two nondegenerate critical points one at a time to the maximum and minimum of the fixed hump, using critical-point moves; choose the hump scaled so its endpoint and critical heights agree. Each monotone subarc now has the same endpoint heights as the standard hump, so the unique height-matching reparametrization is orientation-preserving and smooth up to the critical collars in their Morse coordinates. The birth is therefore, up to the reparametrizations, horizontal deformations, and critical-point moves already handled, the fixed standard hump insertion. Step 1.3 gives equality across the fold. Since [F7] supplies finitely many folds and crossings, step 1.5 and the hump calculation give equality along the entire generic movie. [F3, F6, F7, step 1.4, step 1.3, step 1.5, construct]

3.1 If $K_0,K_1$ are smoothly ambient isotopic, restrict the isotopy to the oriented circles, reparametrize its time by a smooth map constant near its endpoints, and apply [F7] to obtain a generic movie with the same endpoint embeddings. Steps 1.5 and 2.2 show that $I(K_0)=I(K_1)$. The only axiom used in this ambient-isotopy conclusion is $\mathrm{AC}_\omega$ from [F7] and the explicitly stated genericity supplier. [F7, step 1.5, step 2.2]

4.1 Each Markov move preserves the oriented braid closure under $\mathrm{AC}_\omega$ by [F13]; a finite Markov sequence therefore gives ambient isotopic closures, and step 3.1 gives equal normalized series. Each oriented Reidemeister move is likewise realized by ambient isotopy by [F10]; a finite sequence preserves $I$. Under [F9], any two regular diagrams of the same oriented link have such a finite move sequence. [F8, F9, F10, F11, F12, F13, step 3.1, algebra]

5.1 For a fixed parenthesization, a braid path is a path in the configuration space of distinct strand points. Its KZ holonomy is unchanged under fixed-endpoint path homotopy by [F4]. This use is choice-free; changes of parenthesization and the associator coherence equations are handled by a separate result. [F4, algebra] ∎

