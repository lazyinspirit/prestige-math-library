---
id: thm-conway-second-coefficient-is-type-two
kind: theorem
title: The second Conway coefficient is a degree-two finite-type invariant
status: draft
origin: pipeline
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-kontsevich-integral-on-parenthesized-braids
  - def-conway-polynomial
  - def-singular-knot-and-vassiliev-derivative
  - def-framed-chord-diagram-and-four-term-relations
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
justified_by: []
dependency_level: 4
sources:
  references:
    - title: Introduction to Vassiliev Knot Invariants, §§2.3 and 3.1.1
      url: https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf
    - title: Polyak–Viro Formulas for Coefficients of the Conway Polynomial, §§3.4–4.2
      url: https://math.osu.edu/~chmutov.1/preprints/chmutov-khoury-rossi.pdf
---

## Statement

Let $\nabla_L(z)$ be a Conway skein invariant of oriented links, and for a knot $K$ put $a_2(K):=[z^2]\nabla_K(z)$. Then $a_2$ has type at most two: its third finite difference vanishes on every three-singular knot. If $D$ is the degree-two chord diagram of a two-singular knot, then $D_2a_2(K)=1$ when the two chords intersect and $D_2a_2(K)=0$ when they do not. Thus its degree-two symbol is a nonzero weight system on the unframed 4T+1T quotient. Moreover, $a_2(U)=0$ for the unknot, and $a_2(T)=1$ for the positive trefoil $T$ represented by the closure of a two-strand braid with three successive positive Artin half twists; closure joins each upper endpoint to the corresponding lower endpoint outside the braid cylinder.

The two possible degree-two chord patterns are shown below. The first has alternating endpoints and the second has an isolated chord. The diagrams illustrate the symbol values; the proof is algebraic.

```tikz
\begin{tikzpicture}[scale=0.9,thick]
  \begin{scope}
    \draw (0,0) circle (1);
    \draw[->] (0.1,0.99) .. controls (0.35,0.95) and (0.52,0.84) .. (0.65,0.76);
    \draw[very thick] ({cos(60)},{sin(60)}) -- ({cos(240)},{sin(240)});
    \draw[very thick] ({cos(150)},{sin(150)}) -- ({cos(330)},{sin(330)});
    \node at (0,-1.35) {$D_{\times}$, $w(D_{\times})=1$};
  \end{scope}
  \begin{scope}[xshift=3.4cm]
    \draw (0,0) circle (1);
    \draw[->] (0.1,0.99) .. controls (0.35,0.95) and (0.52,0.84) .. (0.65,0.76);
    \draw[very thick] ({cos(40)},{sin(40)}) -- ({cos(130)},{sin(130)});
    \draw[very thick] ({cos(220)},{sin(220)}) -- ({cos(310)},{sin(310)});
    \node at (0,-1.35) {$D_{\parallel}$, $w(D_{\parallel})=0$};
  \end{scope}
\end{tikzpicture}
```

## Statement references

[[def-conway-polynomial|Conway normalization and skein relation]]

[[def-singular-knot-and-vassiliev-derivative|Finite-difference and type conventions]]

[[def-framed-chord-diagram-and-four-term-relations|Degree-two diagrams, intersections, 4T, and 1T]]

[[def-kontsevich-integral-on-parenthesized-braids|Positive Artin half-twist and braid conventions]]

[[def-oriented-crossing-sign-writhe-and-blackboard-framing|Positive crossing sign convention]]

[Chmutov, Duzhin, and Mostovoy, §2.3, printed pp. 35–37, and §3.1.1](https://www.math.cinvestav.mx/~mostovoy/cdbook/cdbook-as-submitted.pdf)

[Chmutov, Cap Khoury, and Rossi, §§3.4–4.2, PDF pp. 4–8](https://math.osu.edu/~chmutov.1/preprints/chmutov-khoury-rossi.pdf)

## Facts & Assumptions

**Given:** A Conway skein invariant $\nabla$ on oriented links, the finite-difference convention for singular knots, and the degree-two chord-diagram convention.

[F1] [[def-conway-polynomial]]: $\nabla_U=1$ and $\nabla_{L_+}-\nabla_{L_-}=z\nabla_{L_0}$ for an oriented skein triple.

[F2] [[def-singular-knot-and-vassiliev-derivative]]: the $r$-fold finite difference is the alternating sum over independent positive/negative resolutions, and type at most two means that every third finite difference is zero.

[F3] [[def-framed-chord-diagram-and-four-term-relations]]: a two-chord diagram is either intersecting or has an isolated chord; 1T kills the latter, and 4T has the alternating four-term sign convention.

[F4] [[def-kontsevich-integral-on-parenthesized-braids]]: the positive Artin half twist is the positive two-strand braid generator, and stacking an inverse half twist beside it cancels to the identity braid.

[F5] [[def-oriented-crossing-sign-writhe-and-blackboard-framing]]: a positive crossing has sign $+1$ under the determinant convention, and the positive Artin half twist has that sign.

[F6] **Discharged existence input.** [[def-conway-polynomial]] now supplies the actual unique $\mathbb Z[z]$-valued oriented ambient-link invariant by its explicitly external Lickorish Seifert-determinant and skein theorem (Chapter 8, Theorems 8.5–8.6, printed pp. 82–83) and CDM ambient-link/skein interpretation, followed by the finite polynomial/uniqueness argument. Thus the Conway function in the Given is an actual available object, not an unresolved well-definedness premise. The finite coefficient/chord/trefoil arguments below are retained unchanged; no general rationality assertion for the Kontsevich coefficients is used.

## Proof

**Given:** As above. All arguments use the unframed branch and no choice axiom.

1.1 For any skein triple, the constant coefficients of $\nabla_{L_+}$ and $\nabla_{L_-}$ agree because their difference is divisible by $z$. Hence $c_0(L):=[z^0]\nabla_L$ is unchanged by crossing switches. Choose a basepoint on each component of a link diagram and a finite order of the components; switch each crossing so its first encounter in that traversal is the overpass. The resulting diagram is descending: starting at each basepoint, every arc can be pulled successively over the portions it meets, in the chosen component order, until each component is a round circle in a separate ball. Thus every link can be changed by crossing switches to an unlink. For the $r$-component unlink $U_r$, the normalization gives $c_0(U_1)=1$. Add a local curl to one component of $U_r$; its positive and negative versions are both $U_r$, while its oriented smoothing is the split unlink $U_{r+1}$. The skein relation gives $z\nabla_{U_{r+1}}=0$. Multiplication by the indeterminate $z$ is injective in $\mathbb Z[z]$: if $f=\sum_{j=0}^{N}a_jz^j$ and $zf=0$, then each coefficient $a_j$ is zero. Hence $\nabla_{U_{r+1}}=0$. Therefore $c_0(L)=1$ for knots and $c_0(L)=0$ for links with at least two components. [F1, construct, algebra]

2.1 Comparing the coefficient of $z^1$ in the skein relation gives $c_1(L_+)-c_1(L_-)=c_0(L_0)$. In a two-component link, smoothing a mixed crossing yields a knot and therefore difference $1$; smoothing a self-crossing yields a three-component link and therefore difference $0$, by step 1.1. The value of this first difference depends only on whether the crossing is mixed, not on any other crossing resolution. [F1, step 1.1, algebra]

3.1 At one singular crossing of a knot, the skein relation gives $D_1a_2(K)=c_1(L_0)$ for its oriented two-component smoothing $L_0$. On a three-singular knot, resolve one marked point first and apply the two remaining differences to this $c_1(L_0)$. By step 2.1, taking the difference at either remaining crossing gives $c_0$ of its oriented smoothing; that smoothing has either one or three components, so its $c_0$ is constant across the resolution of the last marked crossing by step 1.1. The final alternating difference is therefore zero. Since the marked point chosen first was arbitrary, every third finite difference of $a_2$ vanishes. [F1, F2, step 1.1, step 2.1, algebra]

3.2 For a two-singular knot, smooth the first marked point. Its two preimages split the circle into two arcs, which become the two components of $L_0$. The other marked crossing is mixed exactly when its two preimages lie on different arcs, equivalently when the two chord endpoints alternate with those of the first chord. By step 2.1 the resulting second difference is $1$ in that case and $0$ otherwise. [F2, F3, step 2.1, construct]

4.1 Define $w(D)=1$ on the intersecting two-chord diagram and $w(D)=0$ on the nonintersecting one. The latter is zero by 1T [F3]. If the cyclic order of the three fixed points is $p,q,r$, the four diagrams $D_1,D_2,D_3,D_4$ in the 4T generator have intersection indicators $(0,1,1,0)$; if the order is $p,r,q$, they have indicators $(1,0,0,1)$. These exhaust the cyclic orders up to rotation. In either case $w(D_1)-w(D_2)+w(D_3)-w(D_4)=0$. Thus $w$ factors through the unframed quotient. Since $w(D_{\times})=1$, that class is nonzero and the degree-two symbol in step 3.2 is nonzero. [F3, step 3.2, algebra]

5.1 The unknot normalization gives $\nabla_U=1$, hence $a_2(U)=0$. Let $H$ be the closure of a two-strand braid with two successive positive Artin half twists. Switching one crossing creates adjacent positive and negative half twists, which cancel by [F4] to the two-component unlink $U_2$; smoothing that crossing leaves a one-half-twist closure, an unknot with a removable type-I curl. Step 1.1 gives $\nabla_{U_2}=0$, so the skein relation yields $\nabla_H=z$. For the positive trefoil $T$, the closure of three successive positive half twists, switching one crossing leaves an adjacent positive-negative pair that cancels and hence an unknot; smoothing that crossing leaves $H$. Therefore $\nabla_T-1=z\nabla_H=z^2$, so $a_2(T)=1$. [F1, F4, F5, step 1.1, algebra] ∎

