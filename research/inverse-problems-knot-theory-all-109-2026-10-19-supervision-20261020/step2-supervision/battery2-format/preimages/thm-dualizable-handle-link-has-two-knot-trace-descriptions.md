---
id: thm-dualizable-handle-link-has-two-knot-trace-descriptions
kind: theorem
title: "A dualizable handle link gives two zero-trace descriptions"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
deps:
  - def-smooth-zero-trace
  - def-dualizable-handle-link
  - def-knot-meridian-and-preferred-longitude
  - def-countable-choice
  - def-handle-slide-of-one-k-handle-over-another
  - lem-handle-slides-preserve-the-relative-diffeomorphism-type
  - lem-linking-number-even-sum-and-reidemeister-invariance
  - lem-dualizable-slide-clears-meridian-disk
  - lem-knot-exterior-h1-is-generated-by-meridian
  - thm-oriented-linking-number-scan-terminates-and-is-correct
  - thm-handle-cancellation
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Lisa Piccirillo, The Conway knot is not slice"
      url: "https://arxiv.org/pdf/1808.02923"
      locator: "Theorem 2.1 and complete handle-slide/cancellation proof, printed p. 585 (PDF p. 4)"
    - title: "Jennifer Hom, Getting a handle on the Conway knot"
      url: "https://arxiv.org/pdf/2107.09171"
      locator: "§3, dualizable-link handle argument"
---

## Statement

Assume countable choice. Let $(B,G,R)$ be a dualizable framed handle link and
let $X(B,G,R)$ be its associated handlebody. There are finite sequences of
handle slides and cancellations, first sliding $G$ over $B$ and cancelling
the $1$-handle $R$ with the $2$-handle $B$, and then using the reversed roles,
that leave single $0$-framed attaching knots $K_G$ and $K_B$, respectively.
There are diffeomorphisms
$$
X(B,G,R)\cong X_0(K_G)\cong X_0(K_B).
$$

## Statement references

[Piccirillo, Theorem 2.1](https://arxiv.org/pdf/1808.02923)

[Hom, §3](https://arxiv.org/pdf/2107.09171)

## Facts & Assumptions

**Given:** Countable choice and a dualizable framed handle link $(B,G,R)$.

[A1] Countable choice, written $\mathrm{AC}_\omega$, is [[def-countable-choice]].
It is used only through the handle-slide and cancellation suppliers below.

[F1] [[def-dualizable-handle-link]]: $R$ is a dotted $1$-handle, $B,G$ are
$0$-framed $2$-handles, each of $B\cup R$ and $G\cup R$ is a meridional
two-component link, and $\operatorname{lk}(B,G)=0$.

[F2] [[def-handle-slide-of-one-k-handle-over-another]] and
[[lem-handle-slides-preserve-the-relative-diffeomorphism-type]]: a slide of
one $2$-handle over another replaces its attaching circle by a band sum with
a signed framed parallel copy and preserves the relative diffeomorphism type.

[F3] [[thm-handle-cancellation]]: a $1$-handle and $2$-handle whose attaching
and belt spheres meet transversely once cancel, preserving the diffeomorphism
type relative to the incoming boundary and transporting all remaining
attaching data.

[F4] [[lem-linking-number-even-sum-and-reidemeister-invariance]]: the
half-sum of mixed crossing signs is invariant under regular diagram changes
and is symmetric in the two components.

[F5] [[lem-dualizable-slide-clears-meridian-disk]]: after finitely many slides
and isotopies, the remaining attaching circle can be made disjoint from a
spanning disk of the dotted circle. It constructs one framed slide and a product-bigon isotopy for each current intersection, reducing their finite count by one at every stage.

[F6] [[thm-oriented-linking-number-scan-terminates-and-is-correct]] and
[[lem-linking-number-even-sum-and-reidemeister-invariance]]: on a finite
regular diagram of two oriented components, the scan returns the integer
half-sum of mixed crossing signs, and that half-sum is invariant under
orientation-preserving isotopy of the link. These suppliers do not identify
the integer with a homology coordinate.

[F7] [[lem-knot-exterior-h1-is-generated-by-meridian]]: for a knot $K$ with
the chosen tube and positive meridian, $H_1(E_K;\mathbb Z)=\mathbb Z[\mu_K]$.

[F8] [[def-knot-meridian-and-preferred-longitude]]: a preferred longitude has
zero class in $H_1(E_K;\mathbb Z)$, and a degree-one parallel with zero class
is a preferred longitude.

## Proof

**Proof technique:** direct.

1.1 Fix disjoint oriented knots $K,J\subset S^3$ with a regular oriented diagram $D$, and write $[J]=m[\mu_K]$ in $H_1(E_K;\mathbb Z)$ using [F7]. The inclusion $E_K\hookrightarrow S^3\setminus K$ is a homotopy equivalence: in the punctured tube $N(K)\setminus K$, radial motion in each normal disk retracts onto its boundary torus. Thus the same coefficient $m$ is obtained in the open complement. Let $\ell(D)$ be the half-sum of mixed crossing signs. At a mixed crossing where $K$ passes over $J$ with sign $\epsilon$, switching the crossing changes $\ell$ by $-\epsilon$. In an oriented crossing ball straighten $K$ to the positive $x$-axis. When $\epsilon=+1$, the old underpassing arc of $J$ runs in the positive $y$ direction, and the new arc above $K$ minus the old arc represents the negative positive-meridian class; when $\epsilon=-1$, reversing that tangent reverses the class. Hence the same switch changes $[J]$ by $-\epsilon[\mu_K]$, so it changes $m$ by $-\epsilon$. After switching all mixed crossings, $J$ passes over $K$ at every projected intersection. Raise $J$ in the viewing-normal direction and move its projection into a disk disjoint from the projection of $K$; this is an isotopy in $S^3\setminus K$. The final $J$ lies in a $3$-ball disjoint from $K$, so its homology class is zero, and a regular diagram with separated projections has half-sum zero. By [F6] the half-sum is unchanged by this isotopy. Since every crossing switch changed the half-sum and meridian coefficient by the same integer, their initial values agree: $\ell(D)=m$. In particular, for any framed parallel $L_f$ of a knot $L$, its framing integer measured by this half-sum is its meridian coefficient in $H_1(E_L)$; it is zero exactly when $[L_f]=0$. A degree-one parallel with zero class is a preferred longitude by [F8]. [F1, F6, F7, F8, given, construct]

2.1 Choose a spanning disk $D_R$ for the unknotted dotted circle $R$ so that $B$ meets it once, as allowed by [F1]. Apply [F5] to obtain a finite sequence of slides of $G$ over $B$ and isotopies after which the remaining attaching circle is disjoint from $D_R$. The supplier clears actual intersections one at a time; it does not infer geometric disjointness from a zero signed count. [A1, F1, F2, F5, given, construct]

3.1 At each slide of $G$ over $B$, the oriented band sum represents $[G]\pm[B_f]$ in $H_1(E_B)$, where $B_f$ is the signed framed parallel of $B$. By step 1.1, the meridian coordinate of $[B_f]$ is its framing integer $f(B)$. Thus the new linking number is $\operatorname{lk}(B,G)\pm f(B)$. The initial framing pushoff of $B$ is its preferred longitude by [F1], so [F8] makes its class zero and step 1.1 gives $f(B)=0$. Therefore $\operatorname{lk}(B,G)$ remains zero after every slide. [F1, F2, F7, F8, step 1.1, step 2.1, induction, construct]

4.1 For the same band sum, expanding the linking of the new attaching circle with its transported pushoff gives $$ f(G\#(\pm B))=f(G)+f(B)\pm2\operatorname{lk}(B,G). $$ The two self-pairings are the old framings and the two cross-pairings are equal by the symmetry in [F4]. The expansion is valid because the band and its pushoff are carried in disjoint product strips, so the four old pairings are unchanged outside the strips. Each framing integer is the meridian coordinate of its pushoff by step 1.1. All framing terms are zero initially by [F1], [F8] and step 1.1, and the mutual linking remains zero by step 3.1. Induction over the finite sequence in [F5] shows the final attaching framing is zero; isotopies preserve it. [F1, F2, F4, F5, F7, F8, step 1.1, step 2.1, step 3.1, induction, algebra]

5.1 The circle $B$ still goes geometrically once over the $1$-handle $R$, while the remaining attaching circle is disjoint from the cancellation disk. Therefore the attaching sphere of the $2$-handle $B$ meets the belt sphere of the $1$-handle once, and [F3] cancels this pair. Since the remaining attaching circle and its framing lie outside the cancellation neighborhood, the transported remaining handle is a single $0$-framed $2$-handle on a $4$-ball. By [F1] this is $X_0(K_G)$. Slides preserve the handlebody by [F2], so $X(B,G,R)\cong X_0(K_G)$. [A1, F1, F2, F3, step 2.1, step 4.1, construct]

6.1 Interchange $B$ and $G$. The other meridional condition supplies the starting intersection for [F5], and the linking number remains zero by [F4]. The reversed slide sequence preserves both the zero mutual linking and zero framing by the calculations in steps 3.1 and 4.1. Cancel $(R,G)$ by the same one-intersection argument as in step 5.1. This gives $X(B,G,R)\cong X_0(K_B)$; combining with step 5.1 yields both trace descriptions. [A1, F1, F2, F3, F4, F5, step 2.1, step 3.1, step 4.1, step 5.1, construct] ∎

~~~tikz
\begin{tikzpicture}[node distance=2.4cm,>=stealth]
  \node (x) {$B^4\cup_R h^1\cup_B h^2_0\cup_G h^2_0$};
  \node (kg) [below left of=x] {$B^4\cup_{K_G}h^2_0$};
  \node (kb) [below right of=x] {$B^4\cup_{K_B}h^2_0$};
  \draw[->] (x) -- node[left,align=center] {slide $G$ over $B$;\\cancel $(R,B)$} (kg);
  \draw[->] (x) -- node[right,align=center] {slide $B$ over $G$;\\cancel $(R,G)$} (kb);
  \draw[<->] (kg) -- node[below] {$X_0(K_G)\cong X_0(K_B)$} (kb);
\end{tikzpicture}
~~~

The diagram records the two handle reductions. The dotted label $R$ means a
$1$-handle, and each subscript $0$ means a zero-framed $2$-handle. The proof
establishes both reductions by framed slides and geometric cancellation; no
handlebody conclusion is inferred from the diagram alone.
