# Choice-free separation for the return curves

## Finding

The compact-section argument needs Jordan separation only for a simple closed
curve made from one finite trajectory arc and one compact transversal subarc.
That is a regular piecewise-smooth plane curve with finitely many transverse
corners. The general item **thm-jordan-brouwer-separation** is much broader
and explicitly assumes full AC, inherited from Alexander duality. It is
avoidable here.

The existing winding-number route has the needed ingredients without an
explicit choice hypothesis: winding number is integer-valued and locally
constant off a rectifiable contour, and the complement of a compact plane set
has a unique unbounded component. A new local jump lemma plus an elementary
finite collar construction yields a choice-free Jordan-separation lemma for
regular smooth curves and for the piecewise-smooth curves appearing in the
section proof. The corner-collar construction is spelled out below; converting
it to a library item requires only formalizing its finite local graph
neighborhoods and citing the exact local calculus facts. It does not rely on
Alexander duality.

## Current choice cost

- **thm-jordan-brouwer-separation** states “Assume AC” and its dependency list
  includes **def-axiom-of-choice** and Alexander duality. This is a genuine
  full-choice premise of that published theorem.
- The winding-number suppliers **def-winding-number-closed-complex-contour**,
  **thm-winding-number-is-integer**,
  **thm-winding-number-locally-constant**, and
  **thm-winding-number-zero-unbounded-component** state no choice premise.
  Their displayed proofs use finite subdivision, finite local logarithms,
  epsilon-delta estimates, and compactness; none selects from an arbitrary
  infinite family.
- A raw transitive dependency-identifier walk from some winding items reaches
  **def-countable-choice** and **def-axiom-of-choice** through generic metric
  continuity definitions or unused branches of continuity characterizations.
  Those identifiers are not hypotheses in the winding statements. In
  particular, **thm-metric-continuity-characterisations** says its sequential
  converse alone uses Countable Choice; the winding proofs use the
  epsilon-delta/open-preimage direction. The current choice cost should
  therefore be recorded from the actual cited proof clauses, not inferred by
  treating every definitional dependency as an assumed choice axiom. If a
  checker currently propagates those unused branches as premises, reconcile
  the exact dependency/choice map rather than adding AC to the foliation
  theorem.
- For example, the raw path from **thm-winding-number-locally-constant** runs
  through **thm-continuous-image-of-a-compact-space-is-compact** and then
  **thm-metric-continuity-characterisations** to **def-axiom-of-choice**;
  the proof uses only the latter theorem's choice-free epsilon-delta to
  open-preimage implication. The raw path from
  **def-winding-number-closed-complex-contour** runs through
  **cor-complex-differentiability-implies-continuity**,
  **thm-total-differentiability-gives-a-local-linear-bound-and-continuity**,
  and **def-metric-continuity** to the choice definitions; none of those
  definitions is a choice premise. Likewise, the compact-plane-complement
  theorem's finite-choice dependency is the ZF finite-choice lemma, not an
  assumption of AC.
- The published smooth tubular-neighbourhood theorem for general manifolds
  also assumes AC_omega. The specialized plane-curve collar below constructs
  its normal neighborhood directly from finite inverse-function neighborhoods
  and compactness, so that theorem need not be cited.

## Local winding jump

**Lemma.** Let an oriented C^1 regular embedded arc pass through 0, with
positive tangent in the positive real direction. Let Gamma be a closed
piecewise-C^1 contour that contains this arc exactly once and whose remaining
compact part avoids 0. For all sufficiently small epsilon>0, the points
i epsilon and -i epsilon avoid Gamma, and

    n(Gamma, i epsilon) - n(Gamma, -i epsilon) = 1.

Reversing the orientation changes the sign.

**Proof.** A translation and multiplication by a nonzero complex scalar
normalize the point and tangent as in the statement; the integral
dz/(z-p) is invariant under that same affine change. After restricting to a
smaller arc and using its real coordinate, write it as
z(x)=x+i f(x), -a<=x<=a, with f(0)=f'(0)=0. Shrink a so
|f(x)|<=eta|x| for some 0<eta<1/2, and |z'(x)|<=2. The remaining part of
Gamma has positive distance from 0. By the integral definition and linearity,

    n(Gamma, i epsilon) - n(Gamma, -i epsilon)
      = (1/(2 pi i)) integral_Gamma
          (1/(z-i epsilon) - 1/(z+i epsilon)) dz.

The integral over the remaining part tends to zero: there |z|>=d>0, and
the integrand is O(epsilon/d^2).

On the local graph the difference integral is

    I_epsilon = integral_{-a}^a
      2 i epsilon z'(x)/(z(x)^2+epsilon^2) dx.

For all small epsilon,

    |z(x)-i epsilon| |z(x)+i epsilon| >= c (x^2+epsilon^2)

for a constant c>0 independent of x and epsilon. If |x|>=epsilon, each
factor is at least |x|. If |x|<epsilon, then |f(x)|<=eta epsilon, so each
factor is at least (1-eta)epsilon. Substituting x=epsilon u gives

    I_epsilon = integral_{-a/epsilon}^{a/epsilon}
      2 i z'(epsilon u) /
       ((z(epsilon u)/epsilon)^2+1) du.

On every fixed bounded u-interval the integrand converges uniformly to
2i/(u^2+1). Its absolute value is bounded by C/(1+u^2), so the two tails
are uniformly O(1/R) outside [-R,R]. First taking epsilon->0 on [-R,R],
then R->infinity, proves I_epsilon->2 pi i, since
integral_{-R}^R 2i/(1+u^2) du = 4i arctan(R) -> 2 pi i. Therefore the winding-number
difference tends to 1. Each term is an integer by
**thm-winding-number-is-integer**; for small enough epsilon, an integer
within 1/2 of 1 is exactly 1. This proof uses only the finite local graph,
the contour-integral definition, integer-valued winding, and elementary
estimates. ∎

The use of integer-valuedness is crucial: the local integral calculation
proves the exact jump after the limiting estimate without needing a global
Jordan theorem or a global argument-principle hypothesis.

## Choice-free smooth Jordan separation

**Lemma.** A regular C^2 embedding c:S^1 -> R^2 has exactly two
complementary connected components, one bounded and one unbounded, and the
curve is the common boundary of both. No choice axiom is needed.

**Proof route.**

1. Orient c, put T=c'/|c'|, and let N=JT. Define the normal map
   Psi(s,r)=c(s)+rN(s). Its differential is invertible at every (s,0).
   The inverse function theorem shows that for each s there are nested arcs
   J' subset J around s and epsilon>0 such that Psi is a diffeomorphism on
   J x (-epsilon,epsilon). The family of all such smaller arcs J' is a
   set-defined open cover, so compactness supplies a finite subcover
   J'_1,...,J'_m and associated larger arcs J_j and radii epsilon_j.
   Selecting these witnesses is only a finite choice.
2. Shrink one common radius so Psi is a local diffeomorphism throughout the
   band. For pairs (s,t) in the finite union of J_j x J_j, local injectivity
   applies once the radius is below the minimum of the finitely many
   epsilon_j. The remaining set of pairs is compact and disjoint from the
   diagonal. Since c is injective, the minimum of |c(s)-c(t)| on that set
   is positive. Shrinking the common radius below one third of this minimum
   rules out equality Psi(s,r)=Psi(t,u) for all remaining pairs, by the
   triangle inequality. Thus Psi is injective on a uniform band. As an
   injective local diffeomorphism, it identifies the band with an open collar
   V of the curve.
3. The collar minus the curve has two connected half-collars
   V_+=Psi(S^1 x (0,epsilon)) and V_-=Psi(S^1 x (-epsilon,0)). They lie in
   complementary components U_+,U_-. At a regular point of c, the local jump
   lemma gives nearby points on these two sides with different winding
   numbers. Winding number is constant on each connected complement component
   by **thm-winding-number-locally-constant**; hence U_+ != U_-.
4. Every complementary component U has a boundary point p on c:
   components of the open complement are open and relatively closed there;
   if U had empty plane boundary it would be a nonempty proper clopen subset
   of the connected plane. Near p, the collar complement has exactly two
   local sides. Since p is in the boundary of U, U meets one local side;
   that side is connected and belongs to U, so U contains V_+ or V_-.
   Thus there are at most two complement components. Step 3 gives at least
   two, so they are exactly U_+ and U_-.
5. For every p=c(s), the two normal tracks Psi(s,r), r down to 0, and
   Psi(s,r), r up to 0, approach p from the two different components.
   Therefore p lies on both component boundaries. Conversely each component
   boundary is contained in c(S^1), since the component is closed relative to
   the complement. The curve is their common boundary. The existing
   **thm-complement-of-a-compact-plane-set-has-one-unbounded-component**
   makes one component unbounded; since there are exactly two, the other is
   bounded. ∎

For the compact-section return curve, the same finite-collar proof applies
directly to a regular piecewise-C^2 embedded circle with finitely many
corners whose incident tangent rays are distinct. Trim short pieces from each
edge. On each remaining compact smooth edge construct the normal strip as
above; finitely many nonadjacent trimmed pieces have positive mutual
separation, so one common strip width avoids all unwanted intersections.
At a corner, let u and v be the two rays from the vertex along its incident
edges. Since they are distinct, choose a linear x-coordinate whose derivative
is negative on u and positive on v; complete it to an orientation-preserving
linear coordinate system. Each incident branch is then a C^1 graph over its
one-sided x-interval, and together the branches form one graph y=g(x) through
the corner. In a sufficiently small rectangle, the two sets above and below
this graph are connected and are exactly the local complement sides. The
orientation makes the left offsets of the two incident oriented edges enter
the same one of these sets, and the right offsets enter the other. Join the
left strips through that local side and the right strips through its mate.
The corner disks can be chosen pairwise disjoint and disjoint from all
nonincident edges by finite compact separation. The finitely many edge
strips and corner-side patches therefore form two connected global sides,
and every point of the curve is approached from each.

The local winding jump is taken at any interior point of a smooth edge, so
the two global sides belong to distinct complementary components. Every
complementary component meets one of these two sides at a boundary point,
giving the same at-most-two argument. In the return-curve application the
corners are transverse crossings, so the two incident rays are distinct and
the required graph coordinate exists.

## Use in the compact-section argument

The curve formed by a trajectory segment between consecutive hits of a
compact transverse interval and the interval subarc joining its endpoints is
an embedded piecewise-C^2 circle with two transverse corners. The lemma
above supplies exactly the separation property used to prove monotonicity of
successive crossing coordinates. It replaces the call to the general
Jordan–Brouwer theorem and adds no full-AC premise.

This addresses only the Jordan-separation dependency. It does not supply the
finite-singularity Poincare-Bendixson exhaustion at a saddle; the unbounded
return/saddle-itinerary gap recorded in
**frontier-41-ha-dt-29-batch-23-compact-section-recurrence.md** remains.

Relevant existing items:

- **thm-jordan-brouwer-separation**: general topological embedding statement,
  explicitly assumes full AC via Alexander duality.
- **def-winding-number-closed-complex-contour**,
  **thm-winding-number-is-integer**,
  **thm-winding-number-locally-constant**: local analytic index machinery,
  with no stated choice premise.
- **thm-complement-of-a-compact-plane-set-has-one-unbounded-component**:
  choice-free uniqueness of the unbounded component for compact plane sets.
- **thm-smooth-inverse-function-theorem-on-manifolds**: local normal-coordinate
  charts for the finite collar construction.
- A proposed pair-local dependency list can additionally use
  **thm-heine-borel-rn** and **lem-finite-choice** for compactness and finite
  witness selection, plus the existing contour-integral linearity,
  increasing-reparametrization, and ML-estimate lemmas for the local jump
  calculation. These are all choice-free statements.
