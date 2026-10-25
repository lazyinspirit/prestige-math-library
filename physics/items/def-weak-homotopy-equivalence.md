---
id: "def-weak-homotopy-equivalence"
kind: "definition"
title: "Weak homotopy equivalence"
proof_strategy: direct
status: published
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["def-higher-homotopy-group-by-based-cubes","def-path-connected","prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant"]
verification:
  audited: 2026-09-13
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Hatcher §4.1; May Chapter 10 §3
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch4.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
---

## Definition

For a topological space $X$, write $\pi_0(X)$ for its set of path components, as defined in [[def-path-connected]]. For $x\in X$ and $n\ge1$, use the based cubical homotopy group $\pi_n(X,x)$ of [[def-higher-homotopy-group-by-based-cubes]]. Postcomposition gives the maps on components and the homomorphisms on based groups by [[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]].

A continuous map $f:X\to Y$ is a **weak homotopy equivalence** when both of the following hold:

- The function $\pi_0(f):\pi_0(X)\to\pi_0(Y)$ is bijective.
- For every $x\in X$ and every integer $n\ge1$, the homomorphism $f_*:\pi_n(X,x)\to\pi_n(Y,f(x))$ is an isomorphism.

The quantifiers include every component and every source basepoint; no representative point is chosen in each component. Degree zero is a condition on sets, not on groups. Degree one uses the possibly nonabelian fundamental group. The definition applies to arbitrary spaces without separation or CW hypotheses and uses no choice principle.

For the empty source the second condition is vacuous, but the first forces the target to be empty: every point of a nonempty target belongs to a path component. Thus the unique empty-to-empty map is a weak homotopy equivalence, whereas an empty-to-nonempty map is not. The identity of any space, including a singleton, satisfies both conditions since its induced maps are identities.

## Facts & Assumptions

[F1] [[def-higher-homotopy-group-by-based-cubes]] defines the based homotopy sets used here.

[F2] [[def-path-connected]] defines the equivalence classes of points under paths.

[F3] [[prop-higher-homotopy-groups-are-functorial-and-based-homotopy-invariant]] supplies the well-defined induced homomorphisms.

## Verification

**Given:** A continuous map $f:X\to Y$ and the two conditions in the definition.

1.1 Paths in $X$ are sent to paths in $Y$ by continuous composition, so the function on the equivalence classes defining $\pi_0$ is well defined. For positive degrees [F3] proves that postcomposition on the based cubes of [F1] is a well-defined homomorphism, with boundary value $f(x)$. Thus both conditions refer to already-defined maps, for every actual source point; no representative from each component is selected. [F1, F2, F3]

2.1 If $X$ is empty, its component set is empty. A nonempty $Y$ has a point $y$ and hence the nonempty component containing $y$, so component bijectivity forces $Y$ empty. If both spaces are empty, component bijectivity holds and all pointwise conditions are vacuous. For an identity map on any space, [F3] gives identity induced maps on components and all positive groups, so the two conditions hold, including for a singleton. These checks use no choice and do not replace the condition in degree zero by a group assertion. [F2, F3] ∎
