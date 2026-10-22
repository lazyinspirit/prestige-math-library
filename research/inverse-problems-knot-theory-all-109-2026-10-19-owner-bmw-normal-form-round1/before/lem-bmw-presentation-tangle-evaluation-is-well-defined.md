---
id: lem-bmw-presentation-tangle-evaluation-is-well-defined
kind: lemma
title: The BMW presentation maps to the Dubrovnik tangle algebra
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-bmw-algebra-with-fixed-kauffman-skein-convention
  - def-oriented-crossing-sign-writhe-and-blackboard-framing
  - def-kauffman-bracket-smoothing-and-loop-value
  - def-kauffman-regular-isotopy-and-dubrovnik-conventions
  - lem-bmw-relations-dubrovnik-parameter-dictionary
  - def-dubrovnik-tangle-skein-algebra
proof_strategy: direct
axiom_use: "Choice-free: each defining relation is checked by local tangle isotopy or the stated skein, curl, and circle rules."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Frederick M. Goodman and Holly Hauschild, Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus, §§2.2–2.3 and Definition 3.1"
      url: "https://arxiv.org/pdf/math/0411155"
      locator: "PDF pp. 4–8 and 15–16: regular tangle algebra, local skein relations, and the BMW generator relations"
    - title: "Louis H. Kauffman, An Invariant of Regular Isotopy, Transactions of the AMS 318(2) (1990), §§VI–VII"
      url: "https://homepages.math.uic.edu/~kauffman/IRH.pdf"
      locator: "PDF pp. 38–54/printed pp. 453–469: regular-isotopy evaluation and Dubrovnik local rules"
---

## Statement

Let $T$ be the coefficient extension and parameter substitution in the BMW-to-Dubrovnik dictionary, and let $\mathcal{KT}_n(T)$ be the ordinary Dubrovnik tangle skein algebra: its diagrams are finite generic projections of $n$ arcs with fixed ordered top and bottom endpoints and closed curves, modulo planar isotopy, Reidemeister II and III, the Dubrovnik skein relation, the two curl relations, and the free-circle relation with parameters $z_D,a,a^{-1},d$. In its fixed chart, $D_0$ is cup-cap top/bottom and $D_\infty$ is through left/right. For every $n\ge2$, send the BMW generator $g_i$ to the positive Artin crossing between strands $i,i+1$, its inverse to the negative crossing, and $e_i$ to the adjacent cup-cap tangle. This assignment extends to a unital $T$-algebra homomorphism $\Phi_n:BMW_n(T;q,\rho,\delta)\to\mathcal{KT}_n(T)$. For $n=0,1$, define the unital $T$-algebra homomorphism by sending each scalar to that scalar times the empty or straight tangle, respectively. This claim asserts well-definedness only; it does not assert surjectivity or injectivity.

## Statement references

[[def-bmw-algebra-with-fixed-kauffman-skein-convention|BMW algebra presentation]]

[[def-kauffman-regular-isotopy-and-dubrovnik-conventions|Dubrovnik tangle rules]]

[[lem-bmw-relations-dubrovnik-parameter-dictionary|Coefficient and parameter substitution]]

[Goodman and Hauschild, *Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus*](https://arxiv.org/pdf/math/0411155)

[Kauffman, *An Invariant of Regular Isotopy*](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

## Facts & Assumptions

**Given:** The BMW presentation over $T$, the Dubrovnik coefficient extension, and the rectangular regular-isotopy tangle algebra described in the statement.

[F1] The BMW generators satisfy the braid and distant-commutation relations, the distant and adjacent cup-cap relations, $g_i-g_i^{-1}=z_B(1-e_i)$, $g_ie_i=e_ig_i=\rho^{-1}e_i$, $e_i g_{i\pm1}e_i=\rho e_i$, and $e_i^2=\delta e_i$ ([[def-bmw-algebra-with-fixed-kauffman-skein-convention]]).

[F2] Under $a=\rho^{-1}$, $z_D=-z_B$, and $d=\delta$, the scalar relation holds, $D_0$ is the cup-cap smoothing, $D_\infty$ is the through smoothing, the crossing rule is $D_+-D_-=z_D(D_0-D_\infty)$, the curl factors are $a,a^{-1}$, and a free circle contributes $d$ ([[lem-bmw-relations-dubrovnik-parameter-dictionary]], [[def-kauffman-regular-isotopy-and-dubrovnik-conventions]]).

[F3] The fixed crossing chart identifies the top-bottom pairing as the A-smoothing and the left-right pairing as the B-smoothing ([[def-kauffman-bracket-smoothing-and-loop-value]]).

[F4] In the generator schematic, top endpoints are above bottom endpoints, the separated strand at a crossing is the over-strand, and stacking is read from top to bottom; the positive crossing is calibrated by the determinant-sign definition ([[def-oriented-crossing-sign-writhe-and-blackboard-framing]]).

\begin{center}
\begin{tikzpicture}[baseline=-0.5ex,scale=0.75,line width=0.8pt]
\draw[white,line width=4pt] (1,1)--(0,-1);
\draw (1,1)--(0,-1);
\draw (0,1)--(1,-1);
\node at (0.5,-1.4) {$g_i$};
\draw (2.5,1) .. controls (2.5,0) and (3.5,0) .. (3.5,1);
\draw (2.5,-1) .. controls (2.5,0) and (3.5,0) .. (3.5,-1);
\node at (3,-1.4) {$e_i$};
\end{tikzpicture}
\end{center}

## Proof


1.1 The inverse of the positive crossing is its negative crossing: stacking them creates a type-II bigon, which cancels by regular isotopy. For $|i-j|\ge2$, the supports of $g_i$ and $g_j$ are disjoint, so they commute; the supports of $g_i$ and $e_j$ are disjoint, so those commute as well; and two distant cup-cap tangles commute by planar isotopy. The adjacent braid relation is the type-III move on three monotone strands, and the two possible orders of stacking the cup-cap tangles in $e_i e_{i\pm1}e_i=e_i$ reduce by planar isotopy to the same single cup and cap. These checks preserve the ordered boundary endpoints. [F1, given]

1.2 The relation $g_i-g_i^{-1}=z_B(1-e_i)$ maps, by [F2], to $D_+-D_-=z_D(D_0-D_\infty)$, since $z_B=-z_D$ and $e_i,1$ are respectively the cup-cap and through smoothings. The fixed chart in [F3] ensures these are the designated $D_0,D_\infty$ pairings, so no crossing rotation changes the sign. The schematic records generator images only; this calculation uses the algebraic relation and the endpoint pairings. [F1, F2, F3, F4, algebra]

2.1 Stacking $g_i$ next to $e_i$ creates a positive curl on the cup-cap strand, and stacking $g_i^{-1}$ creates a negative curl. Their values are $a=\rho^{-1}$ and $a^{-1}=\rho$, as required by [F1] and [F2]. Stacking $e_i$ twice creates one disjoint trivial circle and leaves one $e_i$, so $e_i^2=d e_i=\delta e_i$. Stacking $e_i,g_{i\pm1},e_i$ creates the opposite curl on the remaining strand; its value is $a^{-1}=\rho$, which verifies $e_i g_{i\pm1}e_i=\rho e_i$. [F1, F2, step 1.2, algebra]

2.2 For the remaining adjacent tangle relations, label the three strands in the local rectangle $1,2,3$ from left to right at both boundaries. In the product $g_i g_{i+1}e_i$, the cup-cap endpoints are carried across the two successive crossings to the same top and bottom pairings as in $e_{i+1}e_i$; the intervening arcs form a cancellable type-II pair after a type-III slide. Thus these tangles are regularly isotopic. Reflecting the rectangle vertically gives the corresponding endpoint calculation for $e_i g_{i+1}g_i=e_i e_{i+1}$. The calculation for index $i-1$ is the horizontal reflection of these two, with the endpoint order reversed. Hence every relation in [F1] is preserved for $n\ge2$. [F1, given, step 1.1]

3.1 For $n=0$ and $n=1$, the BMW algebra is the scalar algebra $T$ by [F1], with no crossing or cup-cap generators. Sending a scalar to the same scalar times the empty tangle or the straight tangle is unital and $T$-linear, so it defines the stated boundary homomorphism. [F1, given, algebra] ∎
