---
page: riemann-roch-for-curves-via-euler-characteristics
title: "Riemann Roch for Curves via Euler Characteristics"
status: draft
requires: [cartier-and-weil-divisors-line-bundles-and-picard-groups, sheaf-cohomology-cech-cohomology-and-comparison, cohomology-of-quasi-coherent-sheaves-on-affine-and-projective-schemes, smooth-proper-curves-divisors-genus-and-ramification]
items:
  - def-little-l-divisor
  - lem-riemann-roch-space-finite-dimensional
  - lem-divisor-order-monotonicity-sections
  - lem-add-one-point-exact-sequence-line-bundle
  - lem-add-one-point-euler-characteristic
  - lem-divisor-decomposition-positive-negative-points
  - thm-euler-characteristic-degree-shift-curve
  - def-genus-euler-characteristic-curve
  - thm-riemann-roch-euler-characteristic-curve
  - cor-riemann-inequality-divisor-sections
  - cor-negative-degree-no-sections-rr
  - lem-h1-stabilizes-downward-point-removal
  - cor-existence-rational-function-bounded-pole
  - cor-smooth-proper-curve-finite-map-projective-line
  - thm-h1-line-bundle-vanishes-sufficiently-high-degree
  - cor-riemann-theorem-large-degree
  - thm-genus-zero-point-implies-projective-line
  - lem-projective-line-divisors-classified-by-degree
  - cor-picard-projective-line-integers
  - lem-smooth-curve-coherent-torsion-free-locally-free
  - lem-nonzero-map-invertible-to-locally-free-injective
  - lem-vector-bundle-p1-has-maximal-degree-line-subbundle
  - lem-vector-bundle-p1-maximal-line-quotient-locally-free
  - lem-vector-bundle-p1-extension-splits
  - thm-birkhoff-grothendieck-vector-bundles-p1
  - lem-degree-zero-effective-divisor-empty
  - cor-degree-zero-line-bundle-section-trivial
  - cor-nontrivial-degree-zero-line-bundle-no-sections
  - def-index-speciality-divisor
  - thm-riemann-roch-as-l-minus-index
  - def-nonspecial-divisor
  - lem-large-positive-divisors-nonspecial
  - cor-dimension-complete-linear-system
  - rem-sharp-degree-thresholds-wait-for-duality
examples: []
---

This page proves the Riemann–Roch theorem for a smooth proper geometrically
integral curve $C$ over a field $k$ in its Euler-characteristic form,
$\ell(D) - i(D) = \deg_k(D) + 1 - g$, together with the consequences that can
be reached without Serre duality. Throughout, divisors are finite integral
combinations of closed points with the degree weighted by residue degrees,
$\mathcal O_C(D)$ is the associated invertible sheaf, $L(D)$ is the space of
rational functions whose poles are bounded by $D$, and $h^i(D)$ denotes
$\dim_k H^i(C,\mathcal O_C(D))$. No identification of $H^1(C,\mathcal O_C(D))$
with the sections of a complementary invertible sheaf is made on this page:
the index of speciality stays an unknown nonnegative integer, and the sharp
classical thresholds are deferred to the pair on residues, Serre duality and
the full Riemann–Roch theorem.

The first block sets up the cohomological bookkeeping. The integer
$\ell(D) = h^0(D)$ is defined through the divisor space, and it is finite for
every divisor because the invertible sheaf $\mathcal O_C(D)$ is coherent and
the cohomology of a coherent sheaf on a proper curve over a field is
finite-dimensional and vanishes above degree one. The natural inclusion
$L(D)\subseteq L(E)$ for $D\le E$ is recorded together with the exact sequence
for adding one point, whose cokernel is a skyscraper at the point with
cohomology concentrated in degree zero, of dimension the residue degree of the
point. Iterating gives the Euler-characteristic shift
$\chi(\mathcal O_C(D+E)) = \chi(\mathcal O_C(D)) + \deg_k(E)$ for effective
$E$, and every divisor is a finite signed sum of closed points, so the shift
extends to all divisors: $\chi(\mathcal O_C(D)) - \chi(\mathcal O_C) = \deg_k(D)$.
The genus is defined by $g(C) = h^1(C,\mathcal O_C)$, so that
$\chi(C,\mathcal O_C) = 1 - g(C)$, and the Riemann–Roch theorem is the
combination of the two identities. The Riemann inequality
$\ell(D)\ge \deg_k(D)+1-g$ and the vanishing of $L(D)$ in negative degree are
immediate consequences; the latter is proved by the effective-divisor
argument rather than through the inequality, whose nonpositive lower bound
cannot ensure a nonzero section.

The second block derives what can be said about $h^1$ without duality. Adding
points never raises $h^1$: the long exact sequence of the one-point sequence
identifies $H^1(\mathcal O_C(D+p))$ with a quotient of
$H^1(\mathcal O_C(D))$, so $n\mapsto h^1(\mathcal O_C(D_0+nA))$ is
non-increasing and stabilizes for every fixed divisor $D_0$ and effective $A$.
From the Riemann inequality one obtains nonconstant rational functions with
bounded pole at a single closed point, then the finite morphism
$\varphi_f: C\to \mathbb P^1_k$ attached to such a function, of degree
$[k(C):k(f)]$ and with fibre over infinity the pole divisor of $f$. A finite
morphism to the projective line pulls the ample twisting sheaf back to an ample
invertible sheaf, and Serre vanishing along that fixed ample direction gives
the vanishing of $H^1(\mathcal O_C(D_0+nA+E))$ for all $n\ge n_0$ and every
effective $E$, where $n_0$ may depend on $D_0$ and on the chosen morphism.
Combining this with Riemann–Roch yields the fixed-direction form of Riemann's
theorem, $\ell(D) = \deg_k(D) + 1 - g$ for every divisor
$D\ge D_0 + n_0 A$. The same circle of ideas gives the genus-zero criterion:
a curve of genus zero carrying a divisor of degree one is isomorphic to the
projective line.

The third block computes on the projective line and carries an appendix on
vector bundles. Divisors on $\mathbb P^1_k$ are classified up to linear
equivalence by their degree, so that the degree homomorphism induces an
isomorphism $\operatorname{Pic}(\mathbb P^1_k)\cong\mathbb Z$ sending
$\mathcal O(d)$ to $d$. On the projective line the Euler-characteristic form of
Riemann–Roch becomes an identity between explicitly known numbers. The
appendix proves the Birkhoff–Grothendieck splitting theorem: a finite locally
free sheaf of rank $r\ge1$ on $\mathbb P^1_k$ is a direct sum of line bundles
$\mathcal O(a_1)\oplus\cdots\oplus\mathcal O(a_r)$, and the multiset of degrees
is determined by the sheaf. The route passes through three lemmas — a nonzero
morphism from an invertible sheaf to a finite locally free sheaf on an integral
scheme is injective; a nonzero vector bundle on the projective line has a line
subbundle of maximal degree; and the quotient by such a maximal line subbundle
is again finite locally free — together with the twisting computation showing
that extensions of line bundles whose summand degrees are at most the
subbundle degree split.

The final block records the degree-zero and positivity statements. An effective
divisor of degree zero is empty; an invertible sheaf of degree zero admitting a
nonzero global section is trivial; and a degree-zero invertible sheaf that is
not trivial has no nonzero global section, with the plane-cubic instance
discharging the promise recorded by the counterexample of the preceding pair.
The index of
speciality $i(D)=h^1(D)$ is defined and the theorem is restated as
$\ell(D)-i(D)=\deg_k(D)+1-g$, so that a divisor is nonspecial exactly when the
Riemann inequality is an equality, and the Riemann inequality is strict by
exactly $i(D)$ otherwise. When the complete linear system $|D|$ is nonempty,
its dimension is
$\dim_k|D| = \ell(D)-1 = \deg_k(D) - g + i(D)$. In a fixed ample direction,
sufficiently positive divisors are nonspecial, and Riemann's theorem computes
their spaces of sections. A closing remark states precisely which classical
thresholds — $\deg K_C = 2g-2$, $h^0(C,K_C)=g$, vanishing above degree
$2g-2$, base-point-freeness at degree $2g$ and very ampleness at degree
$2g+1$ — are not available on this page and belong to the following duality
pair.

Several items inherit the Axiom of Choice from the published
sheaf-cohomology, proper-cohomology and ampleness suppliers, to which the
finite-dimensionality, vanishing and ample-direction arguments appeal; each
such item names the supplier and carries the assumption in its contract. The local calculations use at most finitely many selections. Their items
retain the assumptions of the actual divisor, DVR, coherence, twisting-sheaf
and affine-correspondence suppliers they invoke.
