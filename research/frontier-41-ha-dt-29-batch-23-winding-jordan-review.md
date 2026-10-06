# Batch 23: winding and finite-corner Jordan support review

Reviewed the current three item records in `frontier-41-ha-dt-29-batch-23.pages.json`: `lem-winding-number-jumps-by-one-across-a-regular-planar-arc`, `lem-winding-number-is-locally-constant-via-integral-estimate`, and `lem-finitely-cornered-regular-plane-curve-separates-without-choice`. Research-only review; no item, manifest, receipt or controller changes.

## Mathematical verdict

All three strategies are mathematically valid at their stated regularity, including the local corner construction. Their actual inference routes require no choice axiom. The current **entire declared dependency closure** is not literally choice-free: it contains mixed/unused countable-choice, dependent-choice and full-AC clauses in broad published suppliers. These must be distinguished from assumptions actually used. The results need no narrowing, but a strict automatic axiom-path check should not be told the graph contains no such paths.

## Arc jump: integral check

Translation and multiplication by the conjugate of the **oriented** unit tangent preserve the winding integrand and send the tangent to the positive real direction. Explicitly record that the real derivative is positive, rather than merely nonzero, to fix the sign of the claimed jump. The resulting graph `z(x)=x+if(x)` has `f(0)=f'(0)=0`; finite shrinkage gives `|f(x)|≤η|x|`, `η<1/2`, and `|z'(x)|≤2`.

The difference identity has the correct sign:

`1/(z−iε)−1/(z+iε)=2iε/(z²+ε²)`.

For the compact remainder at distance at least `d`, its factors have modulus at least `d/2`, so the integral is `O(ε)` by its finite length. On the graph, if `|x|≥ε`, the product modulus is at least `x²≥(x²+ε²)/2`. If `|x|<ε`, each imaginary displacement has modulus at least `(1−η)ε`, giving product at least `(1−η)²(x²+ε²)/2`. Thus one may take

`c=min(1/2,(1−η)²/2)>0`.

After rescaling `x=εu`, the integrand is bounded by `4/[c(1+u²)]`; outside `[-R,R]` its total integral modulus is at most `8/(cR)` for `R>0`. On each bounded interval, continuity of `f'` at zero gives uniform `f(εu)/ε→0` and `z'(εu)→1`. Hence the local limit is `∫R 2i/(1+u²) du=2πi`; no dominated-convergence theorem or sequence selection is needed, only the bounded-interval estimate followed by the explicit tail estimate. Integrality then makes the winding difference exactly one for all sufficiently small `ε`. This part passes.

## Local constancy: estimate check

The denominator lower bounds are `d/2` and `d`, so the difference integrand is at most `2|p−p0|/d²`. The factor `1/(2π)` and contour length give precisely `L|p−p0|/(πd²)`. The finite-cover construction of positive distance is valid without selecting neighborhoods simultaneously. If `L>0`, a sufficiently small parameter displacement gives an integer difference of modulus less than one; if `L=0`, both integrals vanish. This part passes even for the stated rectifiable-contour scope, conditional on the published rectifiable line-integral and integer-winding suppliers.

## Corners, collars and separation

The corner coordinate exists under exactly the stated distinct-outward-ray hypothesis. Normalize the outward rays as vectors `a≠b`; the linear functional `(a−b)·x` is positive on `a` and negative on `b`. The oriented parameter approaches the corner opposite to the incoming outward ray, so its projected derivative has the same sign on the incoming and outgoing branches. One-sided monotonicity therefore joins them as a single continuous graph. Complete the coordinate to a positively oriented plane coordinate system to label left/right consistently.

The embedding supplies an ambient open isolating neighborhood for a short parameter arc. A smaller rectangle can be chosen in it so the entire curve portion is a graph spanning the rectangle's horizontal width and staying away from its horizontal edges; its complement has exactly two connected graph sides. This is an elementary graph fact, not a hidden Jordan theorem.

Take the finite parameter-arc cover from these rectangles. Its overlap graph is connected because its arc unions otherwise separate the circle. For overlapping arcs, their intersection is open in the circle and contains a smooth point (only finitely many corners exist). Near that smooth point their oriented left patches intersect, as do their right patches. Consequently the left union and right union are connected. It is not necessary to assume those two unions are disjoint in advance: distinct winding values, proved at one smooth edge, force them into distinct complement components and hence prove disjointness.

A complement component is open in the plane and closed relative to the complement, so its boundary lies on the curve. Its boundary is nonempty because the plane is connected and the component is nonempty and proper. At a boundary point choose one covering rectangle; the component meets one connected side, which must lie entirely in that same component. Thus every component is one of the two collar-side components. Each side approaches every curve point, proving that both boundaries equal the full curve. The compact-complement supplier then identifies the unique unbounded component. This separation proof passes. It proves separation and boundary equality, **not** that the bounded component is a disk; Jordan–Schönflies is a separate prerequisite if later consumers need a filling disk.

## Declared axiom paths: checked against disk

I traversed each current item through current batch-23 records and published item frontmatter, with no unresolved IDs. Closure sizes were respectively 748, 735 and 761 items. These are structural diagnostics, not claims that every clause of every reachable item is used.

All three reach `def-axiom-of-choice` through

`… → thm-heine-borel-rn → lem-compactness-is-intrinsic → lem-finite-choice → def-axiom-of-choice`.

This particular path is benign mathematically: `lem-finite-choice` explicitly proves its finite indexed statement in ZF and references the AC definition only to explain what is not assumed.

There are also mixed-scope/full-AC clauses downstream of integer winding. For example:

`arc jump → thm-winding-number-is-integer → thm-contour-integral-of-the-cauchy-kernel-is-a-logarithm-increment → lem-logarithm-branch-for-a-linear-factor-on-a-disc → lem-local-holomorphic-logarithm-nonvanishing-function-on-disc → thm-complex-exponential-is-entire-with-derivative-itself → lem-algebra-of-continuous-real-maps-on-a-space → thm-product-universal-property`.

The last supplier's arbitrary-index projection-surjectivity clause assumes full AC, while its continuity/characteristic-property clauses and finite-product case do not. The winding route needs continuity of finite real coordinate operations, not arbitrary-product surjectivity. This is a structural full-AC clause path but not a mathematical import of that clause.

A genuine DC-assuming theorem is reachable through broad metric dictionary dependencies:

`local constancy → def-winding-number-closed-complex-contour → cor-complex-differentiability-implies-continuity → def-complex-metric-convergence-and-continuity → lem-p-norms-are-norms-and-induce-the-published-metrics → thm-metric-compactness-equivalences`.

The last theorem assumes ACω and DC for its full equivalence. The norm supplier's proof of the Euclidean norm/metric identification does not use it; its extra dependency serves a later consequence paragraph. The finite-corner item has the same path through its complex-plane dictionary. Similarly the topology-definition closure reaches the ACω countable-union theorem, which is not used by the finite-cover separation argument. Direct mention of `def-countable-choice` in a metric-continuity definition also does not make epsilon-delta continuity a choice-dependent definition.

No direct supplier in these three items requires full AC for the **specific clause actually used**. Nevertheless the current frontmatter graph includes the paths listed above, and unqualified whole-closure choice-freedom is not established. A repair owner should either record exact clause uses and axiom-free local proofs in an adapter/ledger, or surgically remove demonstrably unused published dependency edges under the repository's published-repair rules. The three mathematical strategies themselves already avoid the high-choice clauses. This review does not authorize or perform those published edits.
