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
  - def-countable-choice
  - def-handle-slide-of-one-k-handle-over-another
  - lem-handle-slides-preserve-the-relative-diffeomorphism-type
  - lem-linking-number-even-sum-and-reidemeister-invariance
  - lem-dualizable-slide-clears-meridian-disk
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

[F6] [[thm-oriented-linking-number-scan-terminates-and-is-correct]]: the
half-sum is the meridian-coordinate linking number; in particular, a
preferred-longitude pushoff has linking number zero.

## Proof

**Proof technique:** direct.

1.1 Choose a spanning disk $D_R$ for the unknotted dotted circle $R$ so that $B$ meets it once, as allowed by [F1]. Apply [F5] to obtain a finite sequence of slides of $G$ over $B$ and isotopies after which the remaining attaching circle is disjoint from $D_R$. The supplier clears actual intersections one at a time; it does not infer geometric disjointness from a zero signed count. [A1, F1, F2, F5, given, construct]

2.1 At each slide of $G$ over $B$, the half-sum defining $\operatorname{lk}(B,G)$ splits into the contributions from the old $G$ and the framed parallel copy of $B$, joined through a crossing-free band. The new value is $\operatorname{lk}(B,G)\pm f(B)$, where $f(B)$ is the linking of $B$ with its framing pushoff. By [F1] and [F6], $f(B)=0$. Thus $\operatorname{lk}(B,G)$ remains zero after every slide. [F1, F2, F4, F6, step 1.1, induction, construct]

3.1 For the same band-sum diagram, the self-linking sum of the new attaching circle and its pushoff is $$ f(G\#(\pm B))=f(G)+f(B)\pm2\operatorname{lk}(B,G). $$ The two self-pairings are the old framings and the two cross-pairings are equal by the symmetry in [F4]. All terms are zero by [F1], [F6], and step 2.1. Induction over the finite sequence in [F5] shows the final attaching framing is zero; isotopies preserve it. [F1, F2, F4, F5, F6, step 2.1, induction, algebra]

4.1 The circle $B$ still goes geometrically once over the $1$-handle $R$, while the remaining attaching circle is disjoint from the cancellation disk. Therefore the attaching sphere of the $2$-handle $B$ meets the belt sphere of the $1$-handle once, and [F3] cancels this pair. Since the remaining attaching circle and its framing lie outside the cancellation neighborhood, the transported remaining handle is a single $0$-framed $2$-handle on a $4$-ball. By [F1] this is $X_0(K_G)$. Slides preserve the handlebody by [F2], so $X(B,G,R)\cong X_0(K_G)$. [A1, F1, F2, F3, step 1.1, step 3.1, construct]

5.1 Interchange $B$ and $G$. The other meridional condition supplies the starting intersection for [F5], and the linking number remains zero by [F4]. The reversed slide sequence preserves both the zero mutual linking and zero framing by the calculations in steps 2.1 and 3.1. Cancel $(R,G)$ by the same one-intersection argument as in step 4.1. This gives $X(B,G,R)\cong X_0(K_B)$; combining with step 4.1 yields both trace descriptions. [A1, F1, F2, F3, F4, F5, step 2.1, step 3.1, step 4.1, construct] ∎

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
