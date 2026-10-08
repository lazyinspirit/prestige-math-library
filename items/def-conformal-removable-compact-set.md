---
id: def-conformal-removable-compact-set
kind: definition
title: Conformal removability of compact sets
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
- def-complex-domain
- def-conformal-equivalence-and-automorphism-group
- def-homeomorphism-and-open-maps
- def-mobius-transformation
- def-riemann-sphere-holomorphic-charts
- rem-riemann-sphere-one-point-compactification
- def-axiom-of-choice
- lem-riemann-maps-of-jordan-domains-extend-homeomorphically
- thm-harmonic-and-holomorphic-schwarz-reflection-principles
- cor-injective-holomorphic-derivative-nonzero
- thm-riemann-mapping-theorem
- thm-beurling-ahlfors-extension
- def-quasisymmetric-circle-homeomorphism
- thm-composition-and-inverse-quasiconformal
- lem-smooth-arcs-and-circles-are-removable-for-quasiconformal-maps
- thm-measurable-riemann-mapping-sphere
- def-measurable-beltrami-coefficient
- def-weak-solution-beltrami-equation
- thm-one-quasiconformal-is-conformal
- thm-morse-sard-for-smooth-manifolds
- thm-real-analytic-inverse-and-implicit-function-theorems
- thm-fundamental-theorem-on-flows
- cor-every-smooth-vector-field-on-a-compact-manifold-is-complete
- cor-components-of-open-subsets-of-rn-are-polygonally-connected
- thm-biholomorphic-self-maps-riemann-sphere-are-mobius
- thm-mobius-transformations-biholomorphic-sphere
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: >-
  The two removability predicates, the compact-subset monotonicity and the
  Möbius invariance are choice-free. The Axiom of Choice and the stated
  analytic interfaces (Jordan boundary correspondence, Beurling–Ahlfors
  extension, the measurable Riemann mapping theorem with coefficient
  existence, and the 1-quasiconformal/conformal criterion) are used only by
  the proof of the local/global equivalence, which is conditional on AC;
  Countable Choice is included in those measure interfaces and follows from
  AC.
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  scraped: []
  references:
  - title: Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I, §16.1
    url: https://www.math.stonybrook.edu/~mlyubich/book.pdf
  - title: Malik Younsi, On removable sets for holomorphic functions, §1
    url: https://math.hawaii.edu/~myounsi/Removable.pdf
dependency_level: 12
---

## Definition

Write $\widehat{\mathbb C}=\mathbb C\cup\{\infty\}$ for the Riemann sphere ([[rem-riemann-sphere-one-point-compactification]]) with its standard holomorphic charts ([[def-riemann-sphere-holomorphic-charts]]). A compact set $K\subseteq\widehat{\mathbb C}$ is **globally conformally removable** (or **CH-removable**) if every homeomorphism $F:\widehat{\mathbb C}\to\widehat{\mathbb C}$ that is conformal on $\widehat{\mathbb C}\setminus K$ is a Möbius transformation ([[def-mobius-transformation]]). Here conformality on the complement is understood chartwise, on each of its open components; the underlying homeomorphism is as in [[def-homeomorphism-and-open-maps]].

For a compact set $K\subset\mathbb C$, the **neighborhood-local condition** is that for every open $U\subseteq\mathbb C$ containing $K$, each homeomorphic embedding $h:U\to\mathbb C$ that is conformal on $U\setminus K$ is conformal on $U$. This is Lyubich's local formulation. Under AC the two conditions are equivalent, by the proof below. The predicates themselves make sense without Choice; the equivalence uses the stated analytic extension and measurable-Riemann-mapping interfaces.

Global conformal removability is monotone under taking compact subsets: if $K$ is globally conformally removable and $K'\subseteq K$ is compact, then a homeomorphism conformal off $K'$ is also conformal off $K$, so it is Möbius. No monotonicity assertion for the neighborhood-local condition is used here.

The global condition is Möbius invariant: for every Möbius map $M$, $K$ is globally conformally removable if and only if $M(K)$ is. Indeed, conjugating a sphere homeomorphism by $M$ preserves its homeomorphism type and conformality off the corresponding compact set, and a conjugate of a Möbius transformation is Möbius.

No size condition is part of either definition. Positive-area nonremovability is a separate result proved later on the page. The predicates, compact-subset monotonicity and Möbius invariance use no Choice. The local/global equivalence below is conditional on AC and its exact MRMT/extension interfaces.

## Facts & Assumptions

**Given:** AC and a compact K in the finite plane. The two predicates in the Definition are compared; the definition of either predicate itself is choice-free.

[F1] A compact subset of a globally removable set is globally removable, directly by the monotonicity argument in the Definition.

[F2] Jordan Riemann maps have homeomorphic boundary extensions. Schwarz reflection extends a holomorphic map with real boundary values across an interval; an injective holomorphic map has nonzero derivative ([[lem-riemann-maps-of-jordan-domains-extend-homeomorphically]], [[thm-harmonic-and-holomorphic-schwarz-reflection-principles]], [[cor-injective-holomorphic-derivative-nonzero]], [[thm-riemann-mapping-theorem]]).

[F3] Quasisymmetric circle maps extend across the closed disc by the Beurling–Ahlfors theorem, clause(a). Bi-Lipschitz circle maps are quasisymmetric by the ratio definition. Analytic QC is invariant under conformal chart composition, and line/circle gluing preserves its finite bound ([[thm-beurling-ahlfors-extension]], [[def-quasisymmetric-circle-homeomorphism]], [[thm-composition-and-inverse-quasiconformal]], [[lem-smooth-arcs-and-circles-are-removable-for-quasiconformal-maps]]).

[F4] A bounded measurable sphere Beltrami coefficient has a QC sphere solution. Equality of two coefficients makes their comparison conformal by the composition formula and the one-QC criterion ([[thm-measurable-riemann-mapping-sphere]], [[def-measurable-beltrami-coefficient]], [[def-weak-solution-beltrami-equation]], [[thm-one-quasiconformal-is-conformal]], [[thm-composition-and-inverse-quasiconformal]]). The stable13 local-coordinate/smooth-approximation/weak-limit proof supplies this exact interface; no metric citation exception is used here.

[F5] Smooth Sard supplies a regular level of a smooth real function, and the real-analytic implicit theorem supplies analytic regular-level charts. A smooth tangent field on a compact manifold has a complete unique flow. Connected open planar sets are polygonally connected ([[thm-morse-sard-for-smooth-manifolds]], [[thm-real-analytic-inverse-and-implicit-function-theorems]], [[thm-fundamental-theorem-on-flows]], [[cor-every-smooth-vector-field-on-a-compact-manifold-is-complete]], [[cor-components-of-open-subsets-of-rn-are-polygonally-connected]]).

[F6] A biholomorphic self-map of the sphere is Möbius, and Möbius chart transformations are biholomorphic ([[thm-biholomorphic-self-maps-riemann-sphere-are-mobius]], [[thm-mobius-transformations-biholomorphic-sphere]], [[def-mobius-transformation]]).

## Proof

**Proof technique:** construct an analytic finite-boundary collar extension, straighten its inverse coefficient, and use the global criterion; the converse uses the whole-plane neighborhood.

1.1 Suppose K satisfies the neighborhood-local condition, and let F be a sphere homeomorphism conformal off K. Postcompose by a Möbius map taking F(infinity) to infinity. The resulting sphere homeomorphism H fixes infinity and restricts to a finite plane homeomorphism conformal off K. Apply the local condition with U equal to the whole plane. Thus H is holomorphic everywhere there; it was already conformal near infinity because K is finite and compact. Injectivity gives its holomorphic inverse in each chart by [F2], so [F6] makes H and hence F Möbius. This proves local implies global. [F2, F6, given]

1.2 Now assume K is globally removable and let h:U→C be a homeomorphic embedding conformal off K, with K compactly contained in open U. A positive distance delta from K to the complement of U exists. Different U components meeting K contain disjoint delta-balls centered on a bounded set, so only finitely many meet K. Their sets $E_j=K\cap U_j$ are compact: components are closed relative to U. By [F1], each E_j is globally removable. It suffices to show h conformal near each E_j; on U minus K it already is. In a fixed connected U_j choose a compact connected C containing E_j: cover it by finitely many small closed disks inside U_j and join their centers by finitely many polygonal paths in U_j using [F5]. Let r be small and choose finitely many centers on C whose r-balls cover C, with their number bounded by a constant times r to the power minus2 (choose one point per occupied grid cell). For $\rho(z)=\sum_i\exp(-|z-c_i|^2/r^2)$, these radii can be adjusted by a fixed factor so its minimum on C is at least exp(-1), whereas outside U_j its maximum tends to zero as r tends to zero: the centers remain a fixed positive distance from that complement and polynomially many exponentials have exponentially small tails. Choose by Sard a regular level c between these two bounds and take the component Omega0 of rho>c containing connected C. Its closure is compact in U_j. Its boundary is a compact regular real-analytic one-manifold; finitely many implicit graph charts give finitely many components, each an analytic Jordan curve. To see the last assertion, use the complete unique flow of its nonvanishing unit tangent field from [F5]: each orbit is open, the other orbits are open, so an orbit is a whole connected component. Without a period it would identify that compact component homeomorphically with the real line; therefore it is periodic and embedded. Thus Omega0 is a connected finitely bordered domain containing E_j, and h is holomorphic on collars of all its boundary curves. [F1, F5, given, construct]

2.1 Each complementary sphere component of Omega0 is a Jordan disk; likewise for h(Omega0), and boundary components correspond by h. This follows by Jordan separation: a connected finitely bordered region has one outer boundary and disjoint nonnested hole boundaries, so filling the complementary sides gives exactly those disks. Parameterize each source/target complementary disk conformally by the unit disc after a Möbius chart normalization, using [F2]. The parameter maps extend analytically with nonzero derivative over their circles. Indeed an analytic boundary arc has a holomorphic parametrization with nonzero derivative and local holomorphic inverse; flatten that target arc and the source circle, then apply Schwarz reflection. If the first nonzero boundary Taylor term had degree at least2, its image of the half-disc would meet both sides of the flattened boundary, contrary to the mapped Jordan side; hence its degree is1. Compactness then makes each induced circle boundary map of h an analytic bi-Lipschitz diffeomorphism, and therefore quasisymmetric. Extend it by [F3](a), and conjugate by the two disk parameter maps. This gives a QC homeomorphism of each closed complementary disk agreeing with h on its boundary. [F2, F3, F6, step 1.2, construct]

3.1 Paste these finitely many disk maps to h on the closure of Omega0. Their domains and images cover the sphere with matching boundaries, so this is a sphere homeomorphism g equal to h on Omega0. It is QC off E_j with one finite common bound: there are finitely many disk extensions; inside Omega0 minus E_j it is conformal. Across an analytic boundary, flatten a compact subarc by its holomorphic inverse coordinate and apply the earlier line-gluing result in [F3]. Conformal source/target chart changes preserve the bound. Finitely many subarcs cover the compact boundary curves, so no separate unproved analytic-curve gluing theorem is assumed. [F2, F3, step 2.1, construct]

4.1 On the sphere minus g(E_j), g inverse is locally QC with that common bound. Extend its Beltrami coefficient by zero on the compact g(E_j), obtaining a bounded measurable sphere coefficient. Choose its QC solution Phi by [F4]. The composition formula makes Phi composed with g conformal off E_j; global removability of E_j therefore makes it Möbius. On g(Omega0 minus E_j), the inverse of h is conformal, so the chosen coefficient is zero there; it is zero on g(E_j) by definition. Thus Phi satisfies the weak zero-Beltrami equation on all g(Omega0). Its already-global QC regularity and [F4]'s one-QC criterion make it holomorphic there with holomorphic inverse. Rearranging h as Phi inverse composed with the Möbius map shows h conformal on Omega0. Apply this to the finitely many E_j and combine with the given conformality outside K. This proves global implies neighborhood-local and the claimed equivalence under AC. The exact sphere existence and coefficient-equality assertion is supplied by the stable13 proof in [F4]. [F1, F2, F4, F6, step 1.2, step 3.1, algebra] ∎
