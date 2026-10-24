---
id: lem-bmw-presentation-tangle-evaluation-is-well-defined
kind: lemma
title: The BMW presentation maps to the Dubrovnik tangle algebra
status: published
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
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Statement

Let $T$ be the coefficient extension and parameter substitution in the BMW-to-Dubrovnik dictionary, and let $\mathcal{KT}_n(T)$ be the ordinary Dubrovnik tangle skein algebra: its diagrams are finite generic projections of $n$ arcs with fixed ordered top and bottom endpoints and closed curves, modulo planar isotopy, Reidemeister II and III, the Dubrovnik skein relation, the two curl relations, and the free-circle relation with parameters $z_D,a,a^{-1},d$. In its fixed chart, $D_0$ is through left/right and $D_\infty$ is cup-cap top/bottom. For every $n\ge2$, send the BMW generator $g_i$ to the positive Artin crossing between strands $i,i+1$, its inverse to the negative crossing, and $e_i$ to the adjacent cup-cap tangle. This assignment extends to a unital $T$-algebra homomorphism $\Phi_n:BMW_n(T;q,\rho,\delta)\to\mathcal{KT}_n(T)$. For $n=0,1$, define the unital $T$-algebra homomorphism by sending each scalar to that scalar times the empty or straight tangle, respectively. This claim asserts well-definedness only; it does not assert surjectivity or injectivity.

## Statement references

[[def-bmw-algebra-with-fixed-kauffman-skein-convention|BMW algebra presentation]]

[[def-kauffman-regular-isotopy-and-dubrovnik-conventions|Dubrovnik tangle rules]]

[[lem-bmw-relations-dubrovnik-parameter-dictionary|Coefficient and parameter substitution]]

[Goodman and Hauschild, *Affine Birman–Wenzl–Murakami Algebras and Tangles in the Solid Torus*](https://arxiv.org/pdf/math/0411155)

[Kauffman, *An Invariant of Regular Isotopy*](https://homepages.math.uic.edu/~kauffman/IRH.pdf)

## Facts & Assumptions

**Given:** The BMW presentation over $T$, the Dubrovnik coefficient extension, and the rectangular regular-isotopy tangle algebra described in the statement.

[F1] The BMW generators satisfy the braid and distant-commutation relations, the distant cup-cap relations, $e_i e_{i\pm1}e_i=e_i$, $g_i g_{i\pm1}e_i=e_{i\pm1}e_i$, $e_i g_{i\pm1}g_i=e_i e_{i\pm1}$, $g_i-g_i^{-1}=z_B(1-e_i)$, $g_ie_i=e_ig_i=\rho^{-1}e_i$, $e_i g_{i\pm1}e_i=\rho e_i$, and $e_i^2=\delta e_i$ ([[def-bmw-algebra-with-fixed-kauffman-skein-convention]]).

[F2] Under $a=\rho$, $z_D=z_B$, and $d=\delta$, the scalar relation holds, $D_0$ is the through smoothing, $D_\infty$ is the cup-cap smoothing, the crossing rule is $D_+-D_-=z_D(D_0-D_\infty)$, the curl factors are $a,a^{-1}$, and a free circle contributes $d$ ([[lem-bmw-relations-dubrovnik-parameter-dictionary]], [[def-kauffman-regular-isotopy-and-dubrovnik-conventions]]).

[F3] The fixed crossing chart identifies the left-right pairing as the A-smoothing and the top-bottom pairing as the B-smoothing ([[def-kauffman-bracket-smoothing-and-loop-value]]).

[F4] In the generator schematic, top endpoints are above bottom endpoints, the separated strand at a crossing is the over-strand, and stacking is read from top to bottom; the positive crossing is calibrated by the determinant-sign definition ([[def-oriented-crossing-sign-writhe-and-blackboard-framing]]).

## Diagram

The positive crossing and the cup-cap generator are shown with stacking read from top to bottom. The white gap marks the under-strand.

```tikz
\begin{tikzpicture}[baseline=-0.5ex,scale=0.75,line width=0.8pt]
\draw (0,1)--(1,-1);
\draw[white,line width=4pt] (1,1)--(0,-1);
\draw (1,1)--(0,-1);
\node at (0.5,-1.4) {$g_i$};
\draw (2.5,1) .. controls (2.5,0) and (3.5,0) .. (3.5,1);
\draw (2.5,-1) .. controls (2.5,0) and (3.5,0) .. (3.5,-1);
\node at (3,-1.4) {$e_i$};
\end{tikzpicture}
```

## Proof


1.1 The inverse of the positive crossing is its negative crossing: stacking them creates a type-II bigon, which cancels by regular isotopy. For $|i-j|\ge2$, the supports of $g_i$ and $g_j$ are disjoint, so they commute; the supports of $g_i$ and $e_j$ are disjoint, so those commute as well; and two distant cup-cap tangles commute by planar isotopy. The adjacent braid relation is the type-III move on three monotone strands, and the two possible orders of stacking the cup-cap tangles in $e_i e_{i\pm1}e_i=e_i$ reduce by planar isotopy to the same single cup and cap. These checks preserve the ordered boundary endpoints. [F1, given]

1.2 The BMW skein relation maps to $G_i-G_i^{-1}=z_B(1-E_i)=z_D(D_0-D_\infty)$: here $z_B=z_D$, the identity is the through smoothing $D_0$, and $E_i$ is the cup-cap smoothing $D_\infty$. In the fixed southwest-to-northeast over-strand chart, write the projected oriented tangent coordinates as $(t,x)$ with $t$ increasing downward. The over and under tangents of the downward crossing can be taken as $(1,-1)$ and $(1,1)$; their determinant is $2>0$ by [F4], and its oriented smoothing is through. The bracket names in [F3] are $A,B$ for these two pairings, respectively. [F1, F2, F3, F4, algebra]

2.1 When the positive crossing is followed by a cup-cap, the two branches belong to the same bent strand. Relative to their downward braid orientations exactly one branch reverses, so its determinant self-crossing sign is negative. Thus $G_iE_i=E_iG_i=a^{-1}E_i=\rho^{-1}E_i$; the negative crossing gives the positive self-curl and coefficient $a=\rho$. For $E_iG_{i+1}E_i$, follow the surviving strand from the top position $i+2$: it traverses the crossing from position $i+2$ to $i+1$, turns along the lower cup to position $i$, returns up the uncrossed strand at position $i$ to the upper cap, and traverses the other crossing branch from $i+1$ to $i+2$. Both encounters are downward in the crossing disk, so the self-crossing has positive determinant sign and gives $aE_i=\rho E_i$. For $E_iG_{i-1}E_i$, start at the top position $i-1$: go down the crossing's left branch, around the lower cup and up position $i+1$, then around the upper cap and down the crossing's right branch. Again both crossing branches are traversed downward, giving the same positive curl. Stacking $E_i$ twice creates a disjoint trivial circle and leaves $E_i$, so $E_i^2=dE_i=\delta E_i$. The self-curl sign after a cup is distinct from the positive self-curl formed by closing a positive two-strand braid. [F1, F2, F4, step 1.2, algebra]

3.1 For the remaining adjacent relations, use three consecutive positions $1,2,3$. In $G_1G_2E_1$, the upper cup joins top endpoints $2,3$, the lower cap joins bottom endpoints $1,2$, and the remaining strand joins top $1$ to bottom $3$. That strand passes under both arms of the upper cup. Slide the cup toward the top: its two crossings with that strand form a type-II pair and cancel, leaving the planar tangle $E_2E_1$. Hence $G_1G_2E_1=E_2E_1$. To reverse stacking, reflect top to bottom AND interchange over and under at every crossing. This is a half-turn in three-space about a horizontal axis in the projection plane; it preserves regular isotopy, fixes $G_j$ and $E_j$, and reverses products. It therefore gives $E_1G_2G_1=E_1E_2$. Likewise, left-to-right reflection together with over/under interchange fixes crossing chirality and sends $G_1,G_2$ to $G_2,G_1$ and $E_1,E_2$ to $E_2,E_1$. Applying it to the two identities gives $G_2G_1E_2=E_1E_2$ and $E_2G_1G_2=E_2E_1$. Translating the three-position rectangle gives both signs of the adjacent index in [F1]. Neither operation is a lone planar reflection, which would invert the crossings. Together with steps 1.1, 1.2 and 2.1, these verify every defining relation for $n\ge2$. [F1, given, step 1.1, step 1.2, step 2.1]

4.1 For $n=0$ and $n=1$, the BMW algebra is the scalar algebra $T$ by [F1], with no crossing or cup-cap generators. Sending a scalar to the same scalar times the empty tangle or the straight tangle is unital and $T$-linear, so it defines the stated boundary homomorphism. [F1, given, algebra] ∎
