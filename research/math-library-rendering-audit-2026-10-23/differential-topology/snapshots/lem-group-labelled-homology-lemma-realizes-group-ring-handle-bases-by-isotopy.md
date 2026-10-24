---
id: lem-group-labelled-homology-lemma-realizes-group-ring-handle-bases-by-isotopy
kind: lemma
title: The group-labelled homology lemma realizes group-ring handle bases by isotopy
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: ai-altered
  proof: ai-altered
deps: ["lem-a-vanishing-group-ring-coefficient-sum-pairs-off-opposite-signed-equal-labels", "prop-relative-handle-chain-complex-of-a-cobordism", "def-attaching-belt-intersection-matrix-of-adjacent-index-handles", "lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers", "thm-high-dimensional-whitney-trick", "thm-whitney-trick-in-the-two-dimensional-borderline-case", "lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle", "lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points", "def-k-handle-core-cocore-attaching-region-and-belt-sphere", "def-smooth-embedding", "def-countable-choice", "lem-belt-sphere-complements-in-low-handle-levels-preserve-the-fundamental-group", "thm-seifert-van-kampen", "def-based-handle-chain-complex-over-the-fundamental-group-ring"]
dependency_level: 8
justified_by: []
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete
      author text)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1 §1.3, Lemma 1.22 and its proof, printed pp. 14--15
  - title: Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, electronic edition)
    url: https://www.maths.ed.ac.uk/~v1ranick/books/surgery.pdf
    locator: "Theorem 7.27 and Corollary 7.30, printed pp. 157--161; PDF pages 165, 169"
---
## Statement

Assume $\mathrm{AC}_\omega$. Let $W$ be a nonempty connected compact smooth $(n+1)$-manifold,
$n+1\ge6$, with a finite handle decomposition relative to $\partial_0W$ in
which all handles have index at least $q$, where $2\le q\le n-3$, and let
$\pi=\pi_1(W)$. Let $f:S^q\hookrightarrow\partial_1W_q$ be an embedded sphere
whose class in $C_q=C_q^{\mathrm h}(W,M_0)$, with integral chains in the ambient universal cover and their deck-induced right $\mathbb Z[\pi]$-action equals
$[\varphi]\cdot(\pm\gamma)$ for one fixed $q$-handle $\varphi$ and one
$\gamma\in\pi$. Then $f$ is isotopic in $\partial_1W_q$ to an embedding meeting
the belt sphere of $\varphi$ transversely in exactly one point and disjoint
from the belt spheres of all other $q$-handles. In particular a normal-form
presentation whose intersection matrix has an entry $\pm g$ in one position
and zeros elsewhere can be arranged so that the corresponding attaching and
belt spheres meet in a single transverse point, and a presentation with
diagonal matrix $\operatorname{diag}(\pm g_i)$ can be arranged so that the
$i$-th attaching sphere meets exactly the $i$-th belt sphere, once each.

For $q=2$, assume additionally that $\pi_1(\partial_0W)\to\pi_1(W_2)$ is injective; this holds in the h-cobordism applications and when the $2$-handle attaching circles are nullhomotopic.

## Facts & Assumptions

**Given:** A nonempty connected compact smooth $(n+1)$-manifold $W$, $n+1\ge6$, with a finite relative handle decomposition whose handles all have index at least $q$ for a fixed $2\le q\le n-3$, a fixed $q$-handle $\varphi$, an element $\gamma\in\pi=\pi_1(W)$, and an embedded sphere $f:S^q\hookrightarrow\partial_1W_q$ with class $[\varphi]\cdot(\pm\gamma)$ in $C_q=C_q^{\mathrm h}(W,M_0)$, with integral chains in the ambient universal cover and their deck-induced right $\mathbb Z[\pi]$-action.

[F1] With the ambient-cover, right-module conventions of [[def-based-handle-chain-complex-over-the-fundamental-group-ring]], the relative handle complex of the presentation is the free $\mathbb Z[\pi]$-complex with one basis class per handle in its index, and in the middle level $\partial_1W_q$ the coefficient of the class of an embedded sphere in a $q$-handle basis element is the sum of the signed group labels of its transverse intersection points with the belt sphere of that handle, with the orientations induced by the handle framings; the sphere can first be isotoped to be transverse to all belt spheres, and the labels are computed by arcs in the two sheets ([[prop-relative-handle-chain-complex-of-a-cobordism]], [[lem-handle-boundary-coefficients-are-attaching-belt-intersection-numbers]], [[def-attaching-belt-intersection-matrix-of-adjacent-index-handles]], [[def-k-handle-core-cocore-attaching-region-and-belt-sphere]]).

[F2] For a transverse pair of a $q$-sphere and a belt sphere with two intersection points, arcs joining them in the two sheets and avoiding all other intersection points exist, and the resulting Whitney circle is null-homotopic exactly when the two points carry equal fundamental-group labels; the labels must use paths compatible with the chosen arcs. Only the orientation-free circle criterion is quoted from the label lemma: signs here are the lifted core/normal incidence signs of [F1], and opposite incidence signs with equal labels are treated by [F3] ([[lem-arcs-in-a-connected-submanifold-avoiding-finitely-many-double-points]], [[lem-fundamental-group-label-is-the-obstruction-to-contracting-the-whitney-circle]]).

[F3] Whitney moves: if the two sheets of a transverse pair have dimensions $a,b\ge3$ in a manifold of dimension $a+b$, and the two double points have opposite signs, then a null-homotopic Whitney circle admits a clean framed Whitney disk and an isotopy removing the pair and creating no new intersections; and if the isotoped sheet has dimension at most $2$ while the fixed sheet has dimension at least $3$ and the fundamental-group complement condition holds, the same conclusion holds in the two-dimensional borderline ([[thm-high-dimensional-whitney-trick]], [[thm-whitney-trick-in-the-two-dimensional-borderline-case]]).

[F4] Coefficient sums: if signed labels of intersection points sum to $0$, or to a single $\pm\gamma$, and there are at least two points, then two of them carry equal labels and opposite signs ([[lem-a-vanishing-group-ring-coefficient-sum-pairs-off-opposite-signed-equal-labels]]).

[F5] Deleting the actual $q$-handle belts identifies their complement with the incoming boundary minus its attaching cores. For $q=2$ the explicit incoming fundamental-group injection therefore gives complement injection; an h-cobordism satisfies this condition. The helper also constructs a Whitney disk in the full belt complement and avoids additional $2$-spheres. [[lem-belt-sphere-complements-in-low-handle-levels-preserve-the-fundamental-group]]

## Proof

1.1 The outgoing level $N=\partial_1W_q$ has the same fundamental group as $W$: its reverse trace handles have index $n+1-q\ge4$, and the remaining forward handles have index at least $q+1\ge3$, so van Kampen changes neither fundamental group. Isotope $f$ transverse to the finitely many belts. By [F1] its coefficients are their signed group-label sums, a single $\pm\gamma$ in the right coefficient of the distinguished handle and zero at all others. Thus the labels in $\pi_1(W)$ are also the actual labels in $\pi_1(N)$. [F1, F5, given]

2.1 Unless the required single-point/disjoint configuration already holds, [F4] gives an opposite-sign equal-label pair on one belt. Choose arcs in the two spheres avoiding every other intersection. Equal labels make their Whitney circle nullhomotopic in $N$ by [F2] and step 1.1. [F2, F4, step 1.1]

3.1 If $3\le q\le n-3$, both sheet dimensions are at least three, so [F3] gives the stable Whitney construction. Its disk and tube can also avoid all other attaching spheres and belts: their codimensions are at least three, and relative transversality of a disk has negative incidence dimension. For $q=2$, use [F5] and the explicit incoming injection to fill the shifted boundary circle inside the complement of all belts, then clear the $2$-sphere and any other $2$-dimensional attaching spheres. The helper supplies a clean admissibly framed disk and the corresponding two-dimensional move. This is a handle-complement argument, not an inference from simple connectivity of the level alone. Each move removes precisely the chosen pair and leaves all other intersections fixed. [F2, F3, F5, step 2.1]

4.1 Repeat finitely many times, decreasing the total intersection count by two. The surviving signed-label sums force one point at the distinguished handle and none at the others. For a diagonal family, choose each disk and tube disjoint from all other attaching spheres as in step 3.1; those spheres and the previously arranged configurations remain fixed, so the process realizes every unit diagonal entry simultaneously. Isotopy transports any given normal framing. This proves all assertions in the stated range, including the $q=2$ handle context. [F1, F5, step 3.1] ∎

## Remarks

The source's wider arbitrary-sphere endpoint $q=n-2$ is not proved here. Swapping the sheets then requires injection of the complement of the arbitrary codimension-two sphere $f$, which the handle-belt complement argument does not supply. The stronger two-index h-cobordism application at this endpoint is supplied separately: its actual attaching spheres are belt spheres of the reversed $2$-handles, so the reversed handle complement does give injection. That special argument preserves the full two-index normal-form and handle-cancellation claims.
