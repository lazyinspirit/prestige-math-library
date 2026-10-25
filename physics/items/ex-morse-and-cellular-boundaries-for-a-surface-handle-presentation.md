---
id: ex-morse-and-cellular-boundaries-for-a-surface-handle-presentation
kind: example
title: "Morse and cellular boundaries for a surface handle presentation"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex, lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count, lem-compactified-unstable-manifolds-give-a-cw-decomposition, def-incidence-number-of-two-cw-cells, thm-cellular-boundary-is-the-incidence-degree-matrix, def-cellular-boundary-from-three-consecutive-skeleta, def-mod-two-morse-differential, def-signed-morse-differential-over-the-integers, def-nondegenerate-critical-point-nullity-index-and-coindex, lem-boundary-orientation-of-compactified-one-dimensional-morse-moduli, def-axiom-of-choice, lem-unstable-orientations-induce-trajectory-moduli-orientations]
justified_by: []
dependency_level: 10
proof_strategy: direct
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology (complete author PDF of the English book, 628 pp.)"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 4 Sec. 4.9.b-c, Examples 4.9.4-4.9.5 and Figure 4.8: the sphere with one saddle, two maxima and one minimum; the closed cells and their attaching maps, printed pp. 117-121, PDF pp. 127-131"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed. (complete author PDF, 291 pp.)"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Remark 2.5.3(c) with Figure 2.17: tunnellings between adjacent critical points counted with opposite signs and vanishing adjacent coefficients, read at PDF pp. 65-66"
verification:
  precheck: pass
---

## Example

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $M=S^2$ with a height function $f$ having two maxima $p_1,p_2$ of index
$2$, one saddle $a$ of index $1$ and one minimum $r$ of index $0$ (the
``other sphere'' picture)
([[def-nondegenerate-critical-point-nullity-index-and-coindex]]).

Then: the trajectories from each maximum to the saddle form the finite set
$\mathcal M(p_i,a)$ with $\#\mathcal M(p_i,a)=1$, so the Morse differential is
$\partial p_i=\pm a$ ([[def-mod-two-morse-differential]],
[[def-signed-morse-differential-over-the-integers]]); the two trajectories
from the saddle to the minimum give $\partial a=0$ by the boundary-orientation
cancellation ([[lem-unstable-orientations-induce-trajectory-moduli-orientations]]);
and the cellular boundary of the Morse--Smale CW decomposition
([[lem-compactified-unstable-manifolds-give-a-cw-decomposition]]) is, with the
cell orientations of the unstable manifolds,
$[e_{p_i}:e_a]=\pm1$ and $[e_a:e_r]=0$
([[def-incidence-number-of-two-cw-cells]],
[[thm-cellular-boundary-is-the-incidence-degree-matrix]],
[[def-cellular-boundary-from-three-consecutive-skeleta]]). Thus the two
boundary matrices agree up to the index normalization of
[[lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count]],
realizing
[[thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex]]
in a case with nonzero coefficients: the cellular complex
$\Lambda\{p_1,p_2\}\to\Lambda\{a\}\to\Lambda\{r\}$ has homology $\Lambda$ in
degrees $0$ and $2$, matching $H_*(S^2;\Lambda)$.

## Facts & Assumptions

**Given:** The Axiom of Choice, the "other sphere" Morse function $f$ on $S^2$ with maxima $p_1,p_2$, saddle $a$ and minimum $r$, and the Morse--Smale CW decomposition of its compactified unstable manifolds.

[F1] Each maximum has exactly one steepest-descent trajectory to the saddle in this model, so $\#\mathcal M(p_i,a)=1$; the Morse coefficient of $a$ in $\partial p_i$ is the trajectory sign, equal to $\pm1$ ([[def-mod-two-morse-differential]], [[def-signed-morse-differential-over-the-integers]], [[def-nondegenerate-critical-point-nullity-index-and-coindex]]).

[F2] The unstable manifold of the saddle is one-dimensional; its compactification is a compact one-manifold with boundary whose boundary points are the two trajectories to the minimum, and the outward-normal-first orientation gives the two boundary signs opposite to each other, so the trajectory sign is the comparison of the oriented unstable interval with the outward flow direction: it is positive at one end and negative at the other. Thus the signed count of $\mathcal M(a,r)$ is zero; over $\mathbb Z/2$ the count is $2\equiv0$. Hence $\partial a=0$ in both coefficient cases ([[lem-compactified-unstable-manifolds-give-a-cw-decomposition]], [[lem-unstable-orientations-induce-trajectory-moduli-orientations]], [[def-mod-two-morse-differential]]).

[F3] The cell attachments of the Morse--Smale CW decomposition have incidence numbers equal to the Morse coefficients up to the dimension-dependent sign of the coefficient comparison: $[e_{p_i}:e_a]=\pm1$ and $[e_a:e_r]=0$ ([[lem-compactified-unstable-manifolds-give-a-cw-decomposition]], [[lem-cellular-boundary-coefficient-equals-the-morse-trajectory-count]], [[def-incidence-number-of-two-cw-cells]], [[thm-cellular-boundary-is-the-incidence-degree-matrix]], [[def-cellular-boundary-from-three-consecutive-skeleta]]).

[F4] The chain isomorphism of [[thm-morse-complex-is-chain-homotopy-equivalent-to-the-handle-cellular-complex]] identifies the homology of the Morse complex with the homology of the cellular complex, which for the presented cell structure is $\Lambda$ in degrees $0$ and $2$, matching $H_*(S^2;\Lambda)$.

## Verification

**Proof technique:** direct.

1.1 Apply the CW supplier of [F2] to $(-f,-X)$, which is Morse--Smale because its stable and unstable manifolds are those of $X$ interchanged. Its dual CW structure has two zero-cells, one one-cell and one two-cell. The one-skeleton is connected: attaching a two-disk along its connected boundary circle cannot join distinct components, whereas the final sphere is connected. Hence the unique edge joins the two distinct vertices. Its two half-orbits, reversed back to $X$, are exactly the two stable saddle branches, each tending to a different original maximum. Thus each maximum supplies exactly one orbit to the saddle, proving the geometric assertion of [F1]. By [F1] the only index-drop-one trajectory moduli with source a maximum are $\mathcal M(p_1,a)$ and $\mathcal M(p_2,a)$, each a single point; thus $\partial p_i=\pm a$ in the integral case and $\partial p_i=a$ over $\mathbb Z/2$. [F1, F2, given]

1.2 By [F2] the compactified unstable manifold of the saddle is an interval whose boundary consists of the two trajectories to the minimum, and the boundary orientation makes their signs cancel; hence $\partial a=0$ over $\mathbb Z$, and over $\mathbb Z/2$ the count is $2\equiv0$. [F2, given]

2.1 There are no other critical points, so the Morse complex is $\Lambda\{p_1,p_2\}\xrightarrow{\partial}\Lambda\{a\}\xrightarrow{\partial=0}\Lambda\{r\}$ with $\partial p_i=\pm a$; by [F3] the cellular boundary matrix coincides with this one up to the index normalization, so $[e_{p_i}:e_a]=\pm1$ and $[e_a:e_r]=0$, realizing the coefficient comparison in a case with a nonzero coefficient. [F3, step 1.1, step 1.2]

3.1 The homology of this complex is $\Lambda$ in degree $0$ (generated by $r$), $\Lambda$ in degree $2$ (generated by the class $p_1-p_2$ or $p_1+p_2$ according to the signs), and zero in degree $1$, since the image of $\partial$ on $\Lambda\{p_1,p_2\}$ is the whole of $\Lambda\{a\}$; by [F4] this agrees with $H_*(S^2;\Lambda)$ and with the cellular complex of the decomposition. [F4, step 2.1, algebra] ∎
