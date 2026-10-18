---
id: lem-derived-hall-associativity-squares
kind: lemma
title: "The two derived Hall correspondence squares are homotopy cartesian"
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps:
  - def-toen-locally-finite-dg-category
  - def-toen-derived-hall-algebra
  - lem-derived-hall-moduli-spaces-and-convolution-are-finite
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Bertrand Toën, Derived Hall algebras, arXiv:math/0501343v4, §4"
      url: "https://arxiv.org/pdf/math/0501343v4"
---

## Statement

Let $X^{(0)},X^{(1)},X^{(2)}$ and $s,c,t,f,g,h,k$ be as in [[def-toen-derived-hall-algebra]]. The arrow-composition square (first diagram below) and the composite-cofiber square (second diagram below) are homotopy cartesian.

## Facts & Assumptions

**Given:** A locally finite dg-enhancement, its homotopy types of perfect modules and arrows, and the two displayed squares.

[F1] The homotopy theory of dg modules is stable: a square is a homotopy pushout exactly when it is a homotopy pullback, and homotopy cofibers are functorial ([[def-toen-locally-finite-dg-category]]).

[F2] For a composable pair $x\to y\to z$, $f$ is the first arrow, $g$ the second, $h$ the composite, and $k:\operatorname{Cone}(f)\to\operatorname{Cone}(h)$ the induced map ([[def-toen-derived-hall-algebra]]).

[F3] $X^{(2)}$ classifies composable pairs, while $X^{(1)}$ classifies arrows; the maps $s,c,t$ record source, target, and cofiber ([[def-toen-derived-hall-algebra]]).

[F4] Homotopy cofibers are represented functorially by mapping cones in the supplied dg enhancement ([[def-toen-locally-finite-dg-category]]).

## Proof

1.1 For chain maps $x\xrightarrow{f}y\xrightarrow{g}z$, put $h=gf$. With the mapping-cone convention $\operatorname{Cone}(f)^n=y^n\oplus x^{n+1}$ and $d(y,x)=(d_y y+fx,-d_xx)$, the induced map is $k(y,x)=(gy,x)$. A point of the first homotopy pullback consists of arrows $f$ and $g$ with the target of $f$ identified with the source of $g$, together with an object identified with the cofiber of $g$. To compare this cofiber coordinate with the image of a composable pair, write a degree-$n$ element of $\operatorname{Cone}(k)$ as $(z,u,y',x')\in z^n\oplus x^{n+1}\oplus y^{n+1}\oplus x^{n+2}$. Its differential is $(d_z z+gf u+gy',-d_xu+x',-d_y y'-fx',d_xx')$. Under the invertible coordinate change $\widetilde y=y'+fu$, $\widetilde x=x'-d_xu$, this becomes $(d_z z+g\widetilde y,\widetilde x,-d_y\widetilde y,0)$, the direct sum of $\operatorname{Cone}(g)$ and a contractible identity pair. Thus $\operatorname{Cone}(k)\simeq\operatorname{Cone}(g)$. The homotopy pullback of the source and target maps on arrow cores is the core of composable pairs: its data are two arrows and an equivalence between their middle objects; transporting one arrow along that equivalence gives a composable pair, and the same transport identifies equivalences of such data with objectwise equivalences of pairs. The additional cofiber coordinate is an object equipped with an equivalence to $\operatorname{Cone}(g)$, whose space of choices is contractible over each $g$. The coordinate change supplies the equivalence from $\operatorname{Cone}(k)$, so this coordinate adds no further homotopy data. Hence the first square is homotopy cartesian. [F1, F2, F3, F4, construct]

1.2 A point of the homotopy pullback in the second square consists of an object $x$, an arrow $h:x\to z$, an arrow $k:a\to b$, and an equivalence $b\simeq\operatorname{Cone}(h)$. Form $y:=z\times^h_{\operatorname{Cone}(h)}a$, the homotopy pullback of the cofiber map $z\to\operatorname{Cone}(h)$ along $k$. Pulling the fiber sequence $x\to z\to\operatorname{Cone}(h)$ back along $k$ gives a fiber sequence $x\to y\to a$, so $\operatorname{Cone}(x\to y)\simeq a$. The pullback square also identifies $\operatorname{Cone}(y\to z)$ with $\operatorname{Cone}(k)$. The composite $x\to y\to z$ is $h$, and the induced cofiber map is $k$ by the defining pullback square. The object $y$ is perfect because the perfect modules form a stable subcategory closed under finite homotopy limits. These constructions are inverse, functorially on equivalences, to the map from composable pairs to $(h,k)$; hence the second square is homotopy cartesian. [F1, F2, F3, construct]

2.1 The constructions in steps 1.1 and 1.2 are functorial in maps and equivalences of the input diagrams, and their displayed inverse maps recover every object, arrow, and comparison path. They therefore give equivalences of the full homotopy pullbacks with $X^{(2)}$, proving both squares homotopy cartesian. The argument uses the enhancement's functorial cones; an unenhanced triangulated category alone would not supply these maps. [F1, F3, F4, step 1.1, step 1.2] ∎


## Diagrams

```tikzcd
X^{(2)} \arrow[r,"g"] \arrow[d,"f\times(t\circ k)"'] & X^{(1)} \arrow[d,"s\times t"] \\
X^{(1)}\times X^{(0)} \arrow[r,"c\times\mathrm{id}"'] & X^{(0)}\times X^{(0)}
```

```tikzcd
X^{(2)} \arrow[r,"h"] \arrow[d,"(s\circ f)\times k"'] & X^{(1)} \arrow[d,"s\times t"] \\
X^{(0)}\times X^{(1)} \arrow[r,"\mathrm{id}\times c"'] & X^{(0)}\times X^{(0)}
```

In the first diagram, the lower-left pair is the first arrow and the cofiber of the second arrow. In the second, it is the source of the first arrow and the induced map between the two cofibers. Step 1.2 proves the second square by reconstructing the middle object as a homotopy pullback; the proof does not infer cartesianness from either picture.
