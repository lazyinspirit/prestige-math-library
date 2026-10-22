---
id: lem-peripherally-compatible-group-markings-have-relative-three-complex-maps
kind: lemma
title: Peripherally compatible group markings have relative three complex maps
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - thm-cellular-approximation-for-maps-of-cw-pairs
  - thm-seifert-van-kampen
  - thm-covering-space-lifting-criterion
  - thm-higher-dimensional-spheres-are-simply-connected
  - thm-relative-simplicial-approximation-after-subdivision
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: Allen Hatcher, Algebraic Topology
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch1.pdf
      locator: Section1.B; the finite relative marking construction is supplied by the explicit edge assignments and cell fillings below
---

## Statement

Let $(X,A)$ be a finite connected CW pair of dimension at most three, with $A$ nonempty and with each of its finitely many components connected. Let $Y$ be connected with a supplied universal cover that is contractible. Give a map $b:A\to Y$, choose a vertex $x_0$ in one component of $A$ and put $y_0=b(x_0)$. Choose a vertex $x_i$ in every component $A_i$, paths $\sigma_i:x_0\to x_i$ in $X$, and paths $\eta_i:y_0\to b(x_i)$ in $Y$, with constant paths for the distinguished component. Suppose a homomorphism
$$\alpha:\pi_1(X,x_0)\to\pi_1(Y,y_0)$$
satisfies, for every loop $\ell$ in $A_i$ based at $x_i$,
$$\alpha([\sigma_i\ell\sigma_i^{-1}])=[\eta_i\,b(\ell)\,\eta_i^{-1}].$$
Then there exists a continuous $f:X\to Y$ with $f|_A=b$, $f_*=\alpha$ and $f(\sigma_i)\simeq\eta_i$ relative endpoints for all $i$.

If $X,Y$ are finite polyhedra and $b$ is PL on a supplied subcomplex $A$, $f$ may be chosen PL, without changing its boundary or its induced group/path data. In particular compatible injective group marking data and an actual prescribed PL boundary homeomorphism between finite PL three-manifolds give an actual injective map of pairs. This does not construct the boundary homeomorphism, prove peripheral compatibility from an unmarked group isomorphism, or supply a geometric target model.

## Facts & Assumptions

**Given:** The finite CW pair, contractible universal cover of the connected target, the prescribed map, paths and compatible homomorphism.

[F1] Finite-source cellular approximation moves loops and nullhomotopies to the appropriate skeleta, fixing a supplied subcomplex; the one-skeleton generates the fundamental group and the two-cell attaching loops supply its relations by van Kampen. [[thm-cellular-approximation-for-maps-of-cw-pairs]], [[thm-seifert-van-kampen]]

[F2] A map of a sphere of dimension at least two lifts to the universal cover, since the sphere is simply connected; a contraction there projects to a nullhomotopy. [[thm-covering-space-lifting-criterion]], [[thm-higher-dimensional-spheres-are-simply-connected]]

[F3] Relative finite simplicial approximation produces a PL map homotopic relative to a prescribed PL subcomplex, after compatible subdivisions. [[thm-relative-simplicial-approximation-after-subdivision]]

## Proof

1.1 First replace each prescribed path $\sigma_i$ by an edge path in its relative-endpoint homotopy class, using [F1]. Choose a spanning tree of the finite one-skeleton, containing a spanning tree of each $A_i$ one-skeleton. Let $\tau_v$ be its path from $x_0$ to each vertex $v$. The chosen $\sigma_i$ need not equal $\tau_{x_i}$. Set $$\zeta_i=\alpha([\tau_{x_i}\sigma_i^{-1}])\cdot\eta_i,$$ interpreting the first factor as a representative loop at $y_0$; it is a path from $y_0$ to $b(x_i)$. For every vertex $v$ of $A_i$ use the reference path $r_v=\zeta_i\,b(\tau_{x_i}^{-1}\tau_v)$ from $y_0$ to $b(v)$, where the tree segment inside $A_i$ is understood after cancelling the common prefix. For other vertices assign any target point, for example $y_0$, and take the constant reference path there. The compatibility hypothesis implies that for every edge $e:u\to v$ in $A$, the prescribed path $b(e)$ has based class $$[r_u\,b(e)\,r_v^{-1}]=\alpha([\tau_u e\tau_v^{-1}]).$$ This is the same boundary compatibility written in the chosen tree gauge. All path representatives here are finite selections. [F1, given, construct, algebra]

2.1 Keep $b$ on all of $A$, and assign the other vertex images as above. For each oriented edge $e:u\to v$ outside $A$, choose a loop $c_e$ at $y_0$ representing $\alpha([\tau_u e\tau_v^{-1}])$ and map it by the concatenated path $$r_u^{-1}\,c_e\,r_v.$$ For the reverse orientation use the reverse path. On a tree edge its associated based class is identity. It follows by concatenation and cancellation of the intervening $r_v^{-1}r_v$ paths that the resulting one-skeleton map induces exactly $\alpha$ on every based edge loop. This includes edges of $A$ by step 1.1; hence its restriction agrees with the prescribed $b$, not just with a homotopic map on $A$. The same cancellation gives $f(\tau_{x_i})\simeq\zeta_i$ relative endpoints. Since the loop $\sigma_i\tau_{x_i}^{-1}$ maps to its $\alpha$ class, the definition of $\zeta_i$ gives $f(\sigma_i)\simeq\eta_i$ relative endpoints. Thus the specified conjugating path data, as well as the boundary subgroup maps, are actually realized. [F1, step 1.1, given, construct, algebra]

3.1 Attach the two-cells not in $A$. Their attaching loops are trivial in $\pi_1(X)$, so their images under the map just constructed are trivial in $\pi_1(Y)$ by step 2.1. Each therefore bounds a continuous disk map, which we choose as that cell's extension. Cells already in $A$ retain $b$ unchanged. Finite cell pasting gives a continuous map on $A\cup X^2$. Its induced group map is still $\alpha$, since all based loops can be moved into the one-skeleton by [F1] and the two-cell relations were exactly the ones respected. This is an actual extension of the boundary maps, not an appeal to a homotopy-equivalence classification theorem. [F1, step 2.1, construct]

4.1 For each remaining three-cell, its attaching map gives a sphere map into $Y$. By [F2] it lifts to the given contractible universal cover, contracts there, and hence extends over the three-ball. Choose this extension and paste the finitely many cells. This constructs the required continuous $f$ on all of $X$, unchanged on $A$ and with the already verified group and path data. The same argument works when there are no three-cells or no relative cells. Only finitely many path and filling choices were made; no arbitrary family of cell choices is hidden. [F2, step 3.1, construct]

5.1 In the finite polyhedral case, subdivide the source and target compatibly so the given PL restriction on $A$ is simplicial, extending that prescribed finite boundary subdivision by coning the remaining simplex boundaries. Apply [F3] relative to $A$. The resulting PL map is homotopic to $f$ with $A$ pointwise fixed. In particular the basepoint is fixed, so the group homomorphism remains $\alpha$; the restrictions of that homotopy to the finitely many $\sigma_i$ keep their endpoints fixed and retain their path classes $\eta_i$. If $A$ is the entire boundary of a three-manifold and $b$ maps to the target boundary, this is a map of pairs with the prescribed PL boundary homeomorphism. If $\alpha$ is injective, so is its induced group map. These are precisely the asserted marking conclusions, with the model and compatibility requirements left as genuine inputs. [F3, step 4.1, given, construct] ∎

## Authoring status

This is an unfrozen supplier for the actual model-to-marking application chain. It is separate from the frozen three-proof relative-marking realization packet; no review, model existence, peripheral classification or original72 completion is claimed.
