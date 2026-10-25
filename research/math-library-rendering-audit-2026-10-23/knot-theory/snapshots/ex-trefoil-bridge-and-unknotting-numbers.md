---
id: ex-trefoil-bridge-and-unknotting-numbers
kind: example
title: Bridge and unknotting numbers of the trefoil
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 9
deps:
  - def-knot-bridge-position-and-unknotting-number
  - def-regular-oriented-link-diagram
  - thm-bridge-one-is-unknot
  - def-knot-planar-code
  - alg-knot-wirtinger-presentation-from-code
  - lem-wirtinger-local-meridian-conjugacy
  - thm-knot-wirtinger-presentation-correctness
  - def-group-presentation
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-diffeomorphism-and-local-diffeomorphism-of-manifolds
  - def-group-isomorphism-and-automorphism
  - def-based-loops-and-fundamental-group
  - def-induced-homomorphism-on-fundamental-groups
  - thm-induced-fundamental-group-map-functoriality
  - thm-fundamental-group-laws
  - def-oriented-reidemeister-moves
  - lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy
  - def-euclidean-spheres-and-closed-balls
  - thm-heine-borel-rn
  - thm-extreme-value-metric
  - def-countable-choice
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jennifer Schultens, The Bridge Number of a Knot"
      url: "https://www.math.ucdavis.edu/~jcs/pubs/bridgeindex.pdf"
      locator: "§1, printed pp. 1–2, Figures 1–2; §2, printed pp. 3–4, the trefoil as T(3,2) and the bridge-number convention"
    - title: "Stefan Friedl, Knot Theory"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
      locator: "§§5.2–5.4, printed pp. 68–73, trefoil group and crossing conventions"
    - title: "Danny Calegari, Introduction to Knot Theory"
      url: "https://math.uchicago.edu/~dannyc/notes/knot_theory.pdf"
      locator: "§4.2, printed pp. 34–36, trefoil Wirtinger presentation"
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Example

Assume the Axiom of Countable Choice. Let $T$ be the standard right-handed trefoil represented by the closure of the two-strand braid with three positive crossings. In its standard oriented three-crossing projection, label the under-arcs $a,b,c$ so that the crossing triples $(o,t,s)$ of over-arc, target under-arc and source under-arc are $(b,c,a)$, $(c,a,b)$ and $(a,b,c)$, where source and target are determined by the positive in-plane normal to the oriented over-strand. Define bridge number as the minimum number of local maxima over Morse representatives in the fixed standard height on $S^3$, and unknotting number as the minimum number of crossing changes needed to turn a regular diagram of a representative into the fixed standard unknot diagram. Then $b(T)=2$ and $u(T)=1$.

## Example references

[[def-knot-bridge-position-and-unknotting-number|Bridge number and unknotting number conventions]]

[[thm-bridge-one-is-unknot|A knot has bridge number one exactly when it is unknotted]]

[[def-knot-planar-code|Finite planar code and under-arc convention]]

[[alg-knot-wirtinger-presentation-from-code|Finite Wirtinger presentation constructor]]

[[lem-wirtinger-local-meridian-conjugacy|Oriented local meridian-conjugacy rule]]

[[thm-knot-wirtinger-presentation-correctness|Correctness of the Wirtinger presentation]]

[[def-group-presentation|Group presentation as a free-group quotient]]

[[def-oriented-link-in-s-three-and-ambient-isotopy|Smooth oriented knots and ambient isotopy]]

[[def-diffeomorphism-and-local-diffeomorphism-of-manifolds|Diffeomorphisms are homeomorphisms]]

[[def-group-isomorphism-and-automorphism|Group isomorphisms are bijective homomorphisms]]

[[def-based-loops-and-fundamental-group|Based loops and fundamental groups]]

[[def-induced-homomorphism-on-fundamental-groups|Induced fundamental-group homomorphism]]

[[thm-induced-fundamental-group-map-functoriality|Functoriality of induced fundamental-group maps]]

[[thm-fundamental-group-laws|Fundamental-group group laws]]

[[def-oriented-reidemeister-moves|Oriented Reidemeister moves]]

[[lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy|An individual Reidemeister move preserves the represented link]]

[[def-euclidean-spheres-and-closed-balls|The standard unit circle in Euclidean space]]

[[thm-heine-borel-rn|Closed bounded subsets of Euclidean space are compact]]

[[thm-extreme-value-metric|Continuous functions on compact metric spaces attain maxima]]

[[def-countable-choice|The countable-choice axiom used by the cited bridge and diagram theorems]]

## Facts & Assumptions

**Given:** $\mathrm{AC}_\omega$ and the stated oriented three-crossing trefoil diagram.

[A1] The Axiom of Countable Choice, written $\mathrm{AC}_\omega$. [[def-countable-choice]]

[F1] Bridge number is the minimum number of local maxima in a Morse representative for the fixed standard height. [[def-knot-bridge-position-and-unknotting-number]]

[F2] Unknotting number is the minimum number of crossing changes from a regular diagram of the knot to a diagram of the fixed standard unknot. A regular diagram records its transverse double points, strand orientations and over/under data. [[def-knot-bridge-position-and-unknotting-number]], [[def-regular-oriented-link-diagram]]

[F3] A valid finite planar code gives one positive-meridian generator per under-arc and one crossing conjugacy relator per crossing; the crossing-free one-component code has one generator and no relators, and the resulting presentation maps isomorphically to the knot group. [[def-knot-planar-code]], [[alg-knot-wirtinger-presentation-from-code]], [[thm-knot-wirtinger-presentation-correctness]]

[F4] At every oriented crossing, if $s$ and $t$ are the source and target under-sides determined by the positive in-plane normal of the over-strand, then $m_t=m_o^{-1}m_s m_o$. [[lem-wirtinger-local-meridian-conjugacy]]

[F5] An ambient isotopy ends at an orientation-preserving diffeomorphism, which is a homeomorphism; it induces an isomorphism of complement fundamental groups because the inverse diffeomorphism induces the inverse group map. [[def-oriented-link-in-s-three-and-ambient-isotopy]], [[def-diffeomorphism-and-local-diffeomorphism-of-manifolds]], [[def-based-loops-and-fundamental-group]], [[def-induced-homomorphism-on-fundamental-groups]], [[thm-induced-fundamental-group-map-functoriality]], [[def-group-isomorphism-and-automorphism]]

[F6] Every oriented Reidemeister move on a regular diagram is realized by an ambient isotopy; in particular, oriented Reidemeister-II cancellation and Reidemeister-I curl deletion preserve the represented knot. [[def-oriented-reidemeister-moves]], [[lem-each-oriented-reidemeister-move-is-realized-by-ambient-isotopy]]

[F7] Under $\mathrm{AC}_\omega$, a knot has bridge number one if and only if it is ambient isotopic to the fixed standard unknot. [[thm-bridge-one-is-unknot]]

[F8] A group presentation $\langle a,b\mid r\rangle$ is the free group on $a,b$ modulo the normal closure of $r$. [[def-group-presentation]]

[F9] Fundamental-group multiplication is associative and each loop class has the inverse represented by the reversed loop. [[thm-fundamental-group-laws]]

[F10] A continuous real-valued function on a nonempty compact metric space attains a maximum. [[thm-extreme-value-metric]]

[F11] The standard unit circle is the unit Euclidean sphere in $\mathbb R^2$ with its induced Euclidean metric. [[def-euclidean-spheres-and-closed-balls]]

[F12] Every closed bounded subset of $\mathbb R^2$ is compact in the Euclidean metric. [[thm-heine-borel-rn]]

## Proof

**Given:** The standard trefoil diagram and $\mathrm{AC}_\omega$.

1.1 Apply [F4] to the three stated crossing triples, and rearrange using the group laws in [F9]. The resulting relations are $a=bcb^{-1}$, $b=cac^{-1}$ and $c=aba^{-1}$. [F3, F4, F9, given, construct]

1.2 Write $z_1=x_1+ix_2$ and $z_2=x_3+ix_4$ on the unit sphere $S^3\subset\mathbb C^2$, so the fixed height is $h=\operatorname{Im}z_2$. The curve $\gamma(t)=2^{-1/2}(e^{2it},e^{3it})$, $0\le t<2\pi$, lies on the standard torus $|z_1|=|z_2|=2^{-1/2}$. If two parameter values give the same point, then both $e^{2i(t-s)}$ and $e^{3i(t-s)}$ equal $1$, whence $e^{i(t-s)}=1$; its derivative is nowhere zero, so it is an embedded circle. As $\arg z_1$ makes one turn, $\arg z_2$ advances by $3\pi$, so the two points in each $z_1$-meridian disk exchange by three positive half-twists; following the single closed component for two turns gives exactly the closure of the stated two-strand braid. Let $Q=2^{-1/2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ and $U_s=Q\operatorname{diag}(1,e^{i\pi s})Q^*$ for $0\le s\le1$. Each $U_s$ is unitary and hence preserves the norm and has positive real determinant $|\det_{\mathbb C}U_s|^2=1$; $U_0=I$ and $U_1(z_1,z_2)=(z_2,z_1)$. Thus [F5] makes this path an orientation-preserving ambient isotopy carrying $\gamma$ to $\widetilde\gamma(t)=2^{-1/2}(e^{3it},e^{2it})$. On $\widetilde\gamma$, $h=2^{-1/2}\sin(2t)$ has derivative $h'(t)=\sqrt2\cos(2t)$ and second derivative $h''(t)=-2\sqrt2\sin(2t)$. Its critical parameters are $\pi/4,3\pi/4,5\pi/4,7\pi/4$; the second derivative is negative at $\pi/4,5\pi/4$ and positive at the other two. Hence it is a Morse representative with exactly two maxima and [F1] gives $b(T)\le2$. [A1, F1, F5, given, construct, algebra]

1.3 Switch the middle crossing of the braid diagram. Its braid word becomes $\sigma_1\sigma_1^{-1}\sigma_1$. The adjacent inverse crossings cancel by Reidemeister II, and the remaining one-crossing closure is a Reidemeister-I curl, which deletes to the standard unknot. Thus one crossing change suffices and $u(T)\le1$. [A1, F2, F6, given, construct]

2.1 Substitute $c=aba^{-1}$ into $a=bcb^{-1}$ to obtain $a=baba^{-1}b^{-1}$, which after right multiplication by $ba$ is $aba=bab$. Conversely, under this relation, $cac^{-1}=aba^{-1}aab^{-1}a^{-1}=abab^{-1}a^{-1}=babb^{-1}a^{-1}=b$, so the second crossing relation follows. Eliminating $c$ therefore gives the trefoil group presentation $\langle a,b\mid aba=bab\rangle$. [F3, F8, F9, step 1.1, algebra]

3.1 The assignments $a\mapsto(12)$ and $b\mapsto(23)$ respect $aba=bab$, since both sides map to $(13)$. The two transpositions generate $S_3$, so this presentation surjects onto the nonabelian group $S_3$ and is itself nonabelian. [F8, step 2.1, algebra]

4.1 The crossing-free code of the standard unknot has one generator and no relators by [F3], so its group is cyclic and therefore abelian. By [F5], ambient isotopy to the unknot would give an isomorphism of this group with the nonabelian group from step 3.1. Thus $T$ is nontrivial. [F3, F5, step 3.1, algebra]

5.1 A Morse representative is parametrized by the standard unit circle $S^1=\{(x,y):x^2+y^2=1\}$ from [F11]. This set is nonempty, bounded because $x^2+y^2=1$, and closed as the inverse image of $\{1\}$ under the continuous polynomial $(x,y)\mapsto x^2+y^2$; [F12] makes it compact in its Euclidean metric. The height restricted to the circle is continuous, so [F10] gives a global, and therefore local, maximum; thus $b(T)\ge1$. By [F7] and step 4.1, $b(T)\ne1$; step 1.2 gives $b(T)\le2$. Therefore $b(T)=2$. [A1, F1, F7, F10, F11, F12, step 4.1, step 1.2, algebra]

6.1 A sequence with zero crossing changes would leave the represented knot type unchanged by [F6], so it cannot carry the nontrivial knot from step 4.1 to the standard unknot. Hence $u(T)\ge1$; step 1.3 gives the reverse inequality and $u(T)=1$. [A1, F2, F6, step 4.1, step 1.3, algebra] ∎

## Diagram

The drawing is the closure of the two-strand braid $\sigma_1^3$: there are three positive half-twists in the braid region, and the two exterior arcs close the top and bottom endpoints. Switching the middle crossing changes its braid word to $\sigma_1\sigma_1^{-1}\sigma_1$. The drawing is a planar projection; the two-maximum representative used in step 1.2 is constructed separately on the standard torus in $S^3\subset\mathbb C^2$.

```tikz
\begin{tikzpicture}[scale=0.82,>=stealth]
  \foreach \j in {0,1,2} {
    \draw[->] (-1,3-\j)--(-0.13,2.57-\j);
    \draw[->] (0.13,2.43-\j)--(1,2-\j);
    \draw[->,line width=1.2pt] (1,3-\j)--(-1,2-\j);
  }
  \draw[->] (-1,0)..controls(-1.7,0)and(-1.7,3)..(-1,3);
  \draw[->] (1,0)..controls(1.7,0)and(1.7,3)..(1,3);
  \node[above] at (-1,3) {$a$};
  \node[above] at (1,3) {$b$};
  \node[right] at (1,2) {$c$};
\end{tikzpicture}
```
