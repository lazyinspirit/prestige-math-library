---
id: lem-kontsevich-long-knot-closure-and-connected-sum
kind: lemma
title: Closure and connected sum for the Kontsevich integral of one-strand tangles
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-kontsevich-integral-on-parenthesized-braids
  - lem-kontsevich-configuration-space-compactification-faces
  - lem-kontsevich-morse-tangle-composition
  - def-framed-chord-diagram-and-four-term-relations
dependency_level: 7
sources:
  references:
    - title: Introduction to Vassiliev Knot Invariants, §§8.4.1–8.4.2 and 8.7.1
      url: https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf
    - title: The Fundamental Theorem of Vassiliev Invariants, §2.5.2
      url: https://arxiv.org/pdf/q-alg/9702009v1
    - title: The Universal Vassiliev–Kontsevich Invariant for Framed Oriented Links, §3
      url: https://letu.math.gatech.edu/Papers/UN_PAPER.pdf
---

## Statement

Let $T$ be a compact strict Morse tangle in $\mathbb C\times[a,b]$ whose skeleton is one oriented arc with exactly one boundary point on each boundary plane, oriented from the lower point to the upper point. For sufficiently large $R$, close $T$ to an embedded oriented circle $K_R$ by adding a lower cap with one nondegenerate minimum, an upper cap with one nondegenerate maximum, and a return arc that is vertical at horizontal coordinate $R$ over $[a,b]$. Choose the smooth joins in regular height collars so that varying $R$ moves only regular arcs and fixes both cap critical neighborhoods. Let $\operatorname{cl}$ be the linear map that closes an interval chord diagram on $T$ to a circle chord diagram by joining its two boundary ends along the outside closure arc. For closed chord diagrams, let $\#$ be connected-sum multiplication, formed by concatenating diagrams at the closure cut. For oriented knot closures, connected sum is formed by deleting a short arc from each knot and joining the four ends in the orientation-preserving order outside their compact tangles. Then
$$
Z(K_R)=\operatorname{cl}(Z(T)),
$$
independently of the sufficiently large choice of $R$. If $T_1,T_2$ each have one-arc skeletons and are compact strict Morse one-in one-out tangles whose vertical composite is smooth and embedded, then the closure of $T_2\circ T_1$ is the connected sum of their closures and
$$
Z(\operatorname{cl}(T_2\circ T_1))=Z(\operatorname{cl}(T_2))\# Z(\operatorname{cl}(T_1)).
$$
The figure is schematic: height increases upward, arrows give the orientation, the lower and upper caps have one minimum and one maximum, and the return arc is the vertical branch at $R$. The second panel shows the oriented seam used for vertical stacking and closure; neither panel is used as a proof.

```tikz
\begin{tikzpicture}[scale=0.8,thick]
  \begin{scope}
    \draw[->] (-0.8,0.1)--(-0.8,3.25) node[above] {$t$};
    \draw[very thick,->] (0,0.65) .. controls (0.35,1.15) and (-0.2,1.8) .. (0,2.35);
    \draw[very thick] (0,2.35) .. controls (0.45,3.05) and (1.55,3.05) .. (2,2.35);
    \draw[very thick,->] (2,2.35)--(2,0.65);
    \draw[very thick] (2,0.65) .. controls (1.55,-0.05) and (0.45,-0.05) .. (0,0.65);
    \node at (0.1,1.5) {$T$};
    \node at (2.35,1.5) {$R$};
    \node at (1,2.9) {maximum cap};
    \node at (1,0.05) {minimum cap};
  \end{scope}
  \begin{scope}[xshift=5.3cm]
    \draw[->] (-0.8,0.1)--(-0.8,3.25) node[above] {$t$};
    \draw[very thick,->] (0,0.25)--(0,1.45);
    \draw[very thick,->] (0,1.65)--(0,2.9);
    \draw[dashed] (-0.45,1.55)--(0.45,1.55);
    \draw[very thick] (0,0.25) .. controls (1,-0.25) and (2,-0.25) .. (2,0.25);
    \draw[very thick] (2,0.25)--(2,2.9);
    \draw[very thick] (2,2.9) .. controls (1,3.4) and (0,3.4) .. (0,2.9);
    \node at (0.35,0.85) {$T_1$};
    \node at (0.35,2.3) {$T_2$};
    \node at (0.65,1.55) {stack};
    \node at (2.25,1.6) {closure};
  \end{scope}
\end{tikzpicture}
```

## Statement references

[[def-kontsevich-integral-on-parenthesized-braids|Compact Morse tangle series and connected-sum product]]

[Chmutov, Duzhin, and Mostovoy, §§8.4.1–8.4.2 and 8.7.1, printed pp. 228–229 and 238](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)

[Bar-Natan and Stoimenow, §2.5.2, PDF pp. 13–14](https://arxiv.org/pdf/q-alg/9702009v1)

[Le and Murakami, §3, PDF pp. 4–5](https://letu.math.gatech.edu/Papers/UN_PAPER.pdf)

## Facts & Assumptions

**Given:** A compact strict Morse one-in one-out tangle $T$, its ordered level-pairing integrals, and the unframed 4T+1T diagram spaces.

[F1] [[def-kontsevich-integral-on-parenthesized-braids]]: the degreewise configuration formula defines closed-knot and compact-tangle series; the closed-diagram product is connected sum, and tangle multiplication stacks diagrams.

[F2] [[lem-kontsevich-configuration-space-compactification-faces]]: fixed-degree level chambers have compactified faces only at outer levels, equal-level collisions, and the resolved critical/collision strata.

[F3] [[lem-kontsevich-morse-tangle-composition]]: fixed-degree tangle integrals converge absolutely and vertical stacking satisfies $Z(T_2\circ T_1)=Z(T_2)Z(T_1)$.

[F4] [[def-framed-chord-diagram-and-four-term-relations]]: the unframed quotient sets a diagram with an isolated chord equal to zero.

## Proof

**Given:** As above. Fix a degree $m$; all configuration sums at this degree have finitely many pairing types.

1.1 First consider a horizontal deformation of a closed strict Morse knot that fixes the height function and a neighborhood of every critical point. Cut at regular levels outside those neighborhoods. It suffices by [F3] to consider a compact tangle $T_s$ without critical points, with fixed boundary points and parameter $s\in[0,1]$. On a compactified branch chamber, write the full degree-$m$ form as the finite sum $\omega_m=\sum_P(-1)^{\downarrow(P)}[D_P]\bigwedge_{j=1}^m d\log(z_j-z'_j)$, with each differential taken in the level and deformation variables. Every branch difference is nonzero because the tangle is embedded and has no critical points; hence each logarithmic factor is closed and $d\omega_m=0$. Stokes on the chamber cylinder reduces equality of the two end integrals to vanishing on its codimension-one faces. [F1, F2, F3, given, construct]

1.2 The upper and lower closure caps lie in height bands disjoint from $T$ and the return arc. Each cap has exactly two points at every regular level in its band. In a nonempty pairing on an upper cap, the chord at the highest selected level has an empty subarc on the cap side; on a lower cap use the chord at the lowest selected level. In either case that chord is isolated, so [F4] kills the diagram. The return arc has exactly one point at each level of $[a,b]$, so it has no internal pairing. Hence cap and return factors contribute only their degree-zero units. [F1, F4, given]

2.1 On an outer-level face, the extreme endpoints are fixed, so the restricted form has no $ds$ component and vanishes. On a face where adjacent levels coincide, if the two chords use the same two branches, their logarithmic forms agree and their wedge is zero. If they use four distinct branches, exchanging the two chord choices preserves the diagram and reverses the wedge sign, so the terms cancel in pairs. If they use exactly three branches, the 4T relation [F4] groups the six choices into one common diagram coefficient times $\alpha_{12}\wedge\alpha_{23}+\alpha_{23}\wedge\alpha_{31}+\alpha_{31}\wedge\alpha_{12}$, where $\alpha_{ij}=d\log(z_i-z_j)$. Setting $f=z_1-z_2$, $g=z_2-z_3$, and $z_3-z_1=-(f+g)$, direct expansion gives the coefficient $1/(fg)-1/(g(f+g))-1/(f(f+g))=0$. Thus every codimension-one face integral vanishes, so Stokes gives equal end integrals. Summing the finitely many chambers and composing the fixed critical pieces proves horizontal-deformation invariance of $Z$. [F1, F2, F3, F4, step 1.1, algebra]

2.2 In $[a,b]$, any pairing using the return arc must join its point $R$ to a point $z$ of $T$, since the return arc has one point per level. For $R>1+\sup_T|z|$, its logarithmic factor is $d\log(z-R)=dz/(z-R)$, with denominator at least $R-\sup_T|z|$. On each compact branch the integral of $|dz|$ is bounded by its finite arc length; after integrating this selected level, the remaining degree-$(m-1)$ pairing integrals are absolutely convergent by [F3]. Hence each mixed term is $O((R-\sup_T|z|)^{-1})$. There are finitely many pairing types, so their total tends to zero. Pairings whose endpoints all lie on $T$ give exactly $\operatorname{cl}(Z(T))$. With the cap and return units from step 1.2, this proves $Z(K_R)\to\operatorname{cl}(Z(T))$ degreewise. Varying $R$ moves only regular horizontal arcs while keeping the height function and cap critical neighborhoods fixed, so step 1.1 makes $Z(K_R)$ independent of $R$. The limit is therefore its value for every sufficiently large $R$. [F1, F3, step 1.1, step 1.2, algebra]

3.1 At the regular joining plane, smoothing the single matched upper and lower endpoints forms the neck in the connected-sum construction. Cutting that neck recovers the closures of $T_2$ and $T_1$, so the closure of their composite is their oriented connected sum as stated. On diagrams, the endpoints from $T_2$ occur before those from $T_1$ around the closure cut; applying $\operatorname{cl}$ to a stacked diagram therefore gives exactly the concatenated circle diagram defining $\#$. Apply [F3] to the tangle composite and close the resulting degreewise identity to obtain the claimed series equality. [F1, F3, step 2.2, construct, algebra] ∎
