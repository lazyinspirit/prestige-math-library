---
id: lem-kontsevich-braid-and-knot-isotopy-invariance
kind: lemma
title: Braid and knot isotopy invariance of the normalized integral
status: draft
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

[F3] [[lem-kontsevich-configuration-integral-convergence-needle-estimates]]: degreewise coefficients converge absolutely, and the total contribution of pairings meeting a critical needle of width $\varepsilon$ is $O(\varepsilon)$.

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

## Proof

**Given:** As above. Fix a degree $m$ for all configuration-integral arguments; all diagram spaces at degree $m$ are finite-dimensional.

1.1 An orientation-preserving reparametrization of $K$ preserves the cyclic order of every chord endpoint, the set of points at each height, the down-endpoint sign, and the pulled-back differential form. Hence every degree coefficient of $Z(K)$ is unchanged, and the reparametrization preserves $r(K)$. A positive affine change $t\mapsto at+b$ of the height also preserves each coefficient: substitute $u_j=at_j+b$ in the ordered level integrals; the branch pairings and logarithmic forms correspond term by term. Thus $I(K)$ is unchanged under both operations. [given, F1, algebra]

1.2 Cut the knot at regular levels inside the fixed critical neighborhoods. Choose the tangle pieces containing critical points within the neighborhoods fixed by the horizontal deformation; each intervening tangle has no critical points and has fixed boundary points. By [F14], their degreewise integrals compose, and gluing the cut endpoints restores exactly the original circle pairing: the cuts add no integration levels. Thus it suffices to compare one no-critical tangle $T$. Fix a degree-$m$ branch chamber for $T$. Since $T$ is embedded and has no critical points, distinct branches at one height have a uniform positive horizontal separation on the compact closed chamber, so every logarithmic factor is smooth there. For a nonzero branch difference $\Delta=z_i-z_j$, $d\log\Delta=d\Delta/\Delta$ is closed because $d(d\Delta/\Delta)=-(d\Delta\wedge d\Delta)/\Delta^2=0$. Extend each factor to the full differential in $(t_1,\dots,t_m,s)$; the product sum $\omega_m$ is then closed, with equal-level coefficients interpreted in the 4T quotient. Apply Stokes to the compactified chamber cylinder from [F2]. [F1, F2, F5, F14, construct, algebra]

1.3 On an outer endpoint face of $T$, the boundary points are fixed by the cut inside a fixed critical neighborhood, so the restriction of $\omega_m$ has no $ds$ component and is zero. At an equal-level face, if the two chords use the same two branches, their logarithmic 1-forms coincide and their wedge is zero. If they use four distinct branches, swapping the two chord choices gives the same diagram with the opposite wedge sign, so the terms cancel. If they use exactly three branches, the 4T relation [F5] groups the six choices into the common diagram coefficient times
$\alpha_{12}\wedge\alpha_{23}+\alpha_{23}\wedge\alpha_{31}+\alpha_{31}\wedge\alpha_{12}$,
where $\alpha_{ij}=d\log(z_i-z_j)$. Set $f=z_1-z_2$, $g=z_2-z_3$, and $h=z_3-z_1=-(f+g)$. Direct expansion gives
$\alpha_{12}\wedge\alpha_{23}+\alpha_{23}\wedge\alpha_{31}+\alpha_{31}\wedge\alpha_{12}
=\bigl(\frac1{fg}-\frac1{g(f+g)}-\frac1{f(f+g)}\bigr)\,df\wedge dg=0$.
These cases exhaust equal-level pairings. Every remaining collision face is a corner of codimension at least two by [F2], so it does not occur in the codimension-one Stokes boundary. Therefore the only nonzero boundary integrals are the two ends $s=0,1$, which are equal. Summing the finitely many chambers proves equality of each intervening tangle series. The fixed critical pieces and the closure then give $Z(K_0)=Z(K_1)$ coefficientwise by [F14]; $r(K_s)$ is constant, so $I(K_0)=I(K_1)$. [F2, F5, F14, step 1.2, algebra]

1.4 By [F6], a standard hump birth multiplies the preliminary series by $Z(H)$ and increases $r(K)$ by one. Thus $I(K^+)=Z(H)Z(K)Z(H)^{-r(K)-1}=I(K)$; deleting the hump is the reverse equality. [F1, F6, algebra]

2.1 By definition of the move, horizontal deformations narrow the affected arcs in both presentations to needles of width $\varepsilon$ for every sufficiently small $\varepsilon$; steps 1.2–1.3 leave $I$ unchanged under these preliminary deformations. The pairings with no endpoint on the needle have identical integrals before and after the local move. The difference of the remaining degree-$m$ sums has norm at most the sum of the two needle contributions, at most $2C_m\varepsilon$ by [F3]. Letting $\varepsilon\downarrow0$ gives equality of each degree coefficient; the number of maxima is unchanged during this move, so the normalized series is equal. [F1, F3, step 1.2, step 1.3, algebra]


3.1 On an interval of the generic movie [F7] with no fold, each nondegenerate critical point follows a smooth branch by the implicit function theorem. Subdivide the interval finitely so that each moving critical point fits in one small local arc and the critical-value order is fixed on each open subinterval. Move the critical neighborhoods one at a time by small critical-point moves as in step 2.1 until their heights match a fixed reference slice; compactness of the parameter interval makes this a finite sequence. On each complementary monotone arc the endpoint heights then agree with those of the reference slice. Reparametrize that arc by the unique increasing map matching its height coordinate to the reference height. The inverse function theorem gives smooth dependence away from the fixed critical collars, and the local Morse coordinates extend the reparametrization smoothly to their endpoints. The remaining variation changes only the complex branch functions at fixed heights, hence is a horizontal deformation as in steps 1.2–1.3. At a transverse critical-value crossing, the two critical points are distinct in the embedded knot and their horizontal positions have positive separation. Subdivide the crossing into finitely many small moves of one critical point at a time; each stays in a needle arc and is covered by step 2.1. Thus $I$ is constant between and across all critical-value crossings. [F1, F3, F5, F7, step 1.1, step 1.2, step 1.3, step 2.1]

4.1 At a fold, [F7] gives one local maximum-minimum birth or death. The affected arc is isolated in a small ball and has nonzero complex tangent at the degenerate point. Rotate the complex coordinate so $u=\operatorname{Re}z$ is a local parameter, then shrink the ball so $u$ is strictly monotone along the entire arc. Interpolating $\operatorname{Im}z$ to zero at fixed $(u,t)$ remains an embedding because distinct arc points have distinct $u$. On the resulting planar arc, move the two nondegenerate critical points one at a time to the maximum and minimum of the fixed hump, using critical-point moves; choose the hump scaled so its endpoint and critical heights agree. Each monotone subarc now has the same endpoint heights as the standard hump, so the unique height-matching reparametrization is orientation-preserving and smooth up to the critical collars in their Morse coordinates. The birth is therefore, up to the reparametrizations, horizontal deformations, and critical-point moves already handled, the fixed standard hump insertion. Step 1.4 gives equality across the fold. Since [F7] supplies finitely many folds and crossings, steps 3.1–4.1 imply equality along the entire generic movie. [F3, F6, F7, step 2.1, step 1.4, step 3.1, construct]

5.1 If $K_0,K_1$ are smoothly ambient isotopic, restrict the isotopy to the oriented circles and apply [F7] to obtain a generic movie with the same endpoint embeddings. Steps 3.1–4.1 show that $I(K_0)=I(K_1)$. The only axiom used in this ambient-isotopy conclusion is $\mathrm{AC}_\omega$ from [F7] and the explicitly stated genericity supplier. [F7, step 3.1, step 4.1]

6.1 Each Markov move preserves the oriented braid closure under $\mathrm{AC}_\omega$ by [F13]; a finite Markov sequence therefore gives ambient isotopic closures, and step 5.1 gives equal normalized series. Each oriented Reidemeister move is likewise realized by ambient isotopy by [F10]; a finite sequence preserves $I$. Under [F9], any two regular diagrams of the same oriented link have such a finite move sequence. [F8, F9, F10, F11, F12, F13, step 5.1, algebra]

7.1 For a fixed parenthesization, a braid path is a path in the configuration space of distinct strand points. Its KZ holonomy is unchanged under fixed-endpoint path homotopy by [F4]. This use is choice-free; changes of parenthesization and the associator coherence equations are handled by a separate result. [F4, algebra] ∎
