---
id: lem-trefoil-plus-one-surgery-group-presentation
kind: lemma
title: "Group presentation for positive trefoil $+1$ surgery"
status: draft
origin: pipeline
dependency_level: 7
deps:
  - def-oriented-slope-and-knot-dehn-filling
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - def-oriented-link-in-s-three-and-ambient-isotopy
  - def-countable-choice
  - def-geometric-braid-with-setwise-endpoints
  - def-elementary-geometric-half-twist
  - prop-stacking-of-geometric-braids-is-well-defined
  - def-closure-of-a-geometric-braid
  - def-regular-oriented-link-diagram
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-framed-knot-self-linking-and-seifert-framing
  - thm-blackboard-framing-self-linking-is-writhe
  - thm-knot-wirtinger-presentation-correctness
  - lem-wirtinger-local-meridian-conjugacy
  - thm-seifert-van-kampen
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Hugh M. Hilden, María Teresa Lozano, and José María Montesinos-Amilibia, On the affine representations of the trefoil knot group, arXiv:1003.3554v1, pp. 6 and 23"
      url: "https://arxiv.org/pdf/1003.3554"
    - title: "Stefan Friedl, Knot Theory, 2024 full lecture notes, §§5.2–5.3 and 7.1"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
    - title: "Nikolai Saveliev, Lectures on the Topology of 3-Manifolds, 2nd revised edition, Lecture 2 §2.2"
      url: "https://poisson.phc.dm.unipi.it/~camponovo/libri/3mani.pdf"
    - title: "Stefan Friedl, Knot Theory, 2024 full lecture notes, §§5.2–5.3 and 7.1"
      url: "https://friedl.app.uni-regensburg.de/papers/2024_knot-theory-final.pdf"
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $T$ be the closure of the positive geometric two-strand braid $\sigma_1^3$, with orientation given by increasing braid parameter. In the chart $(x,y,t)$ with ambient orientation $(x,y,t)$, view along $+y$, put increasing $t$ downward, and orient the projection plane by $(\partial_t,\partial_x)$. The right-starting strand passes over the left-starting strand at each positive crossing. Let $E_T$ be its chosen exterior. For the positive meridian $\mu=a$ at the first left arc and the preferred degree-one longitude $\lambda$, the fundamental group of $+1$ filling, with slope $[\mu]+[\lambda]$, has presentation
$$\pi_1(E_T(1/1))\cong\langle a,b\mid aba=bab,\;bab^{-1}aba^{-2}=1\rangle.$$
In these based coordinates the blackboard parallel is $w=bac$ with $c=b^{-1}ab$, and
$$w a^3=(ab)^3,\qquad\lambda=w a^{-3}=(ab)^3a^{-6}.$$
Thus the same filling relation is $(ab)^3=a^5$. In particular the positive trefoil and the sign of the filling are both fixed; no mirror substitution is implicit.

## Statement references

[[def-elementary-geometric-half-twist]].

[[def-closure-of-a-geometric-braid]].

[[def-oriented-crossing-sign-writhe-and-blackboard-framing]].

[[def-knot-meridian-and-preferred-longitude]].

[[def-oriented-slope-and-knot-dehn-filling]].

[[def-countable-choice]].

[Hilden–Lozano–Montesinos-Amilibia, §2.3 p. 6 and Theorem 11 proof p. 24](https://arxiv.org/pdf/1003.3554).

## Diagram

The arrows follow increasing braid parameter. Each right-to-left branch is over; the left-to-right branch has the gap. The outside arcs close bottom positions to the corresponding top positions.

```tikz
\begin{tikzpicture}[scale=0.8,>=stealth]
\foreach \j in {0,1,2} {
\draw[->] (-1,3-\j)--(-0.14,2.57-\j);
\draw[->] (0.14,2.43-\j)--(1,2-\j);
\draw[->,line width=1.2pt] (1,3-\j)--(-1,2-\j);
}
\draw[->] (-1,0)..controls(-1.7,0)and(-1.7,3)..(-1,3);
\draw[->] (1,0)..controls(1.7,0)and(1.7,3)..(1,3);
\node[above] at (-1,3) {$a$};
\node[above] at (1,3) {$b$};
\node[right] at (1,2) {$c$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** The fixed positive braid, its oriented closure, the chosen exterior, and $\mathrm{AC}_\omega$.

[F1] In the positive elementary motion the left point travels below the midpoint and the right point above. The closure identifies equal disk positions at the ends and follows increasing parameter. [[def-elementary-geometric-half-twist]], [[prop-stacking-of-geometric-braids-is-well-defined]], [[def-closure-of-a-geometric-braid]]

[F2] In the designated viewing chart the crossing sign is the determinant sign of the over and under tangents in coordinates $(t,x)$. [[def-oriented-crossing-sign-writhe-and-blackboard-framing]]

[F3] With common upper-collar basing paths, positive meridians satisfy $g_{\rm out}=g_o^{-1}g_{\rm in}g_o$ when the under-tangent follows the positive over-normal; the Wirtinger meridian map is an isomorphism. [[lem-wirtinger-local-meridian-conjugacy]], [[thm-knot-wirtinger-presentation-correctness]]

[F4] Blackboard self-linking equals self-writhe. [[thm-blackboard-framing-self-linking-is-writhe]], [[def-framed-knot-self-linking-and-seifert-framing]]

[F5] The degree-one preferred longitude has zero image in exterior first homology. The positive meridian is the normal-disk boundary. [[def-knot-meridian-and-preferred-longitude]]

[F6] First homology is the abelianization of the fundamental group. [[prop-the-first-hurewicz-map-in-degree-one-is-abelianization]]

[F7] Filling kills the specified primitive boundary slope, by the open-collar van Kampen pushout. [[def-oriented-slope-and-knot-dehn-filling]], [[thm-seifert-van-kampen]]

## Proof

1.1 In [F1], for $0<t<1/2$ the left-starting motion is $(2ht-h,-2ht)$ and the right-starting motion its negative. At the crossing the latter has greater $y$, hence is over when viewed along $+y$. Their projected tangents in coordinates $(t,x)$ are $(1,-2h)$ and $(1,2h)$, with determinant $4h>0$. Rounding the diamond corners and flattening endpoints preserves this strict sign. The downward three-crossing diagram therefore has three positive crossings. The diagram agrees with the fixed geometric closure: the change from stacked diamonds to rounded diagonal strands is a height-preserving interpolation with nonzero pair difference, followed by the fixed closure map. In particular it is not the mirror braid. [given, F1, F2, construct]

2.1 Label the initial left and right meridians $a,b$. At a positive crossing the right input is over, and the left input follows the positive over-normal to become the right output. Successive rows of the braid have input/output pairs $\begin{array}{c|c|c|c}\text{row}&\text{input }(L,R)&\text{output }(L,R)&\text{underpass relation}\\\hline1&(a,b)&(b,c)&c=b^{-1}ab\\2&(b,c)&(c,a)&a=c^{-1}bc\\3&(c,a)&(a,b)&b=a^{-1}ca\end{array}$ Here the last two output labels use the closure identifications of bottom and top positions. These are all crossing relations by [F3]. Substituting $c=b^{-1}ab$ into $b=a^{-1}ca$ gives $aba=bab$; the remaining relation follows because $b^{-1}ab=aba^{-1}$ and then $c^{-1}bc=a$. Thus $\pi_1(S^3\setminus T)=\langle a,b\mid aba=bab\rangle$, with the stated positive meridians. In the chosen tube, the radial normal homotopy from positive radius $r<\epsilon$ to $(1-s)r+s\epsilon$ identifies this group with $\pi_1(E_T)$. [F1, F3, step 1.1, construct, algebra]

3.1 Trace a small parallel starting at the initial left arc. Along the oriented component its underpasses occur in row order $1,3,2$, with over-meridians $b,a,c$; it passes over the intervening crossings. This order follows directly from the input/output table: $a$ becomes $c$ on the right in row 1, passes over in row 2, becomes $b$ in row 3, closes to the initial right position, passes over in row 1, becomes $a$ in row 2 and closes after passing over in row 3. At each underpass the access-path calculation in [F3] is $\alpha_{\rm in}\beta=g_o\alpha_{\rm out}$, where $\beta$ is the path along the small parallel; thus the three successive factors are $b,a,c$, with positive exponents. At an overpass the access path slides through its upper product chart and contributes no factor. On the crossing-free exterior closure arcs use the same product charts, again contributing no factor. Concatenating gives the based parallel word $w=bac$. These path identities can be made on the upper side of the normal circles. The upper normal section and the blackboard section are homotopic without zero: in the normal quotient the blackboard vector and viewing vector form a positively oriented basis, so the interpolation rotating the former through a fixed quarter-turn to the latter is everywhere nonzero. This proves that the traced parallel has the blackboard framing and oriented degree $+1$, rather than identifying a peripheral word only from its exponent sum. By [F4] and step 1.1 its self-linking is $+3$. [F1, F2, F3, F4, step 2.1, construct]

4.1 The boundary torus has product coordinates from this actual parallel: its degree-one section is $w$ and its positive fibre is $a$. A section making three negative fibre turns is an embedded degree-one curve with based word $w a^{-3}$; the torus rectangle homotopy makes the fibre and section commute. In the abelianization of step 2.1 the relation $aba=bab$ gives $[a]=[b]$, and sending each to $1$ supplies an inverse to the cyclic generator map. Thus $H_1(E_T)=\mathbb Z$ on $[a]$ by [F6], and $[w]=[b]+[a]+[c]=3[a]$. Therefore $\lambda=w a^{-3}$ has zero exterior homology and degree $+1$, precisely [F5]. Moreover $c=aba^{-1}$, so $w a^3=b a^2b a^2=b a(bab)a=(ba)^3=(ab)^3.$ Both last cubes equal $(aba)^2$, which commutes with $a,b$ because conjugation by $aba$ exchanges them. This proves $\lambda=(ab)^3a^{-6}$ with the fixed positive meridian and the correct sign. [F5, F6, step 2.1, step 3.1, algebra]

5.1 The $+1$ slope is the primitive boundary curve $\lambda\mu$, since its coefficients in the oriented meridian/longitude basis are $(1,1)$. In [F7] the solid torus has cyclic fundamental group; a complementary boundary generator identifies its core generator and eliminates it, while its meridian kills precisely $\lambda\mu$. Thus filling adds $w a^{-2}=1$. Substituting $w=bac$ and $c=b^{-1}ab$ gives $bab^{-1}aba^{-2}=1$. Equivalently step 4.1 gives $(ab)^3=a^5$. These are the asserted presentations of the same positive-trefoil $+1$ filling. [F7, step 2.1, step 3.1, step 4.1, algebra] ∎
