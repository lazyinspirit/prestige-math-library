---
id: lem-instanton-knot-complex-asd-analytic-foundations
kind: lemma
title: "Analytic foundations for the singular instanton knot complex"
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 4
proof_strategy: direct
deps:
  - def-knot-exterior
  - def-knot-meridian-and-preferred-longitude
  - def-instanton-knot-homology-and-canonical-class
  - def-singular-instanton-knot-and-sutured-closure-data
  - def-axiom-of-choice
  - def-countable-choice
  - lem-earring-relative-arc-data-supply-admissible-orbifold-and-determinant-lifts
  - lem-order-two-singular-gauge-completions-and-cylindrical-fredholm-operators
  - lem-singular-holonomy-perturbations-have-a-proper-generically-finite-critical-set
  - lem-order-two-asd-bubbles-have-relative-fredholm-index-loss-at-least-four
  - lem-earring-gauge-components-force-index-energy-monotonicity
  - lem-bounded-holonomy-forced-orbifold-asd-trajectories-have-bubble-compactness
  - lem-earring-holonomy-perturbations-regularize-all-trajectory-indices
  - lem-regular-earring-trajectories-have-exponential-ends-and-low-index-broken-compactness
  - lem-regular-earring-broken-trajectories-have-exhaustive-nonlinear-gluing-collars
  - lem-earring-trajectory-determinants-have-coherent-integral-orientations
  - thm-earring-instanton-complexes-have-canonical-continuation-equivalences
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "P. B. Kronheimer and T. S. Mrowka, Khovanov homology is an unknot-detector, §§2–4"
      url: "https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf"
    - title: "P. B. Kronheimer and T. S. Mrowka, Knot homology groups from instantons, §§2.1–2.2 and 3.3–3.8"
      url: "https://people.math.harvard.edu/~kronheim/yaft.pdf"
    - title: "Hongjian Yang, An Overview of Floer Homologies, §5.7"
      url: "https://web.stanford.edu/~cm5/286.pdf"
---

## Statement

Assume full AC and fix a smooth based knot $K\subset S^3$ with the earring and admissible singular bundle data of the preceding definitions. For regular perturbation data, the perturbed Chern–Simons critical points and finite-energy singular anti-self-dual trajectories define a finite free cochain complex $C^\natural(K;\mathbb Z)$ with differential $d$ satisfying $d^2=0$. Its homology is independent of the chosen regular metric and perturbation up to the declared overall sign and is invariant under isotopy of the based knot data.

## Statement references

[[def-instanton-knot-homology-and-canonical-class|Instanton knot complex and homology]]

[[def-singular-instanton-knot-and-sutured-closure-data|Earring and singular bundle data]]

[Kronheimer–Mrowka, *Khovanov homology is an unknot-detector* (2011), §§2–4](https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf)

[Kronheimer–Mrowka, *Knot homology groups from instantons* (2011), §§2.1–2.2 and 3.3–3.8](https://people.math.harvard.edu/~kronheim/yaft.pdf)

[Yang, *An Overview of Floer Homologies* (2025), §5.7](https://web.stanford.edu/~cm5/286.pdf)

## Facts & Assumptions

[F1] The actual earring exterior bundle extends to the prescribed order-two orbifold model, has a fixed-determinant $U(2)$ lift, and every determinant-one stabilizer is central. [[lem-earring-relative-arc-data-supply-admissible-orbifold-and-determinant-lifts]]

[F2] Invariant Sobolev and gauge completions, smooth slices and the actual cylindrical Fredholm inverses are proved locally. The critical set is compact and generically finite nondegenerate; one chosen allowed perturbation makes every trajectory index regular while retaining those critical jets. [[lem-order-two-singular-gauge-completions-and-cylindrical-fredholm-operators]] [[lem-singular-holonomy-perturbations-have-a-proper-generically-finite-critical-set]] [[lem-earring-holonomy-perturbations-regularize-all-trajectory-indices]]

[F3] The actual gauge periods give the energy/index relation and finiteness of relative classes in every bounded index band. Bounded-forcing compactness, bubble loss at least four, exponential critical ends, low-index broken compactness and exhaustive nonlinear collars are supplied with their full proofs. [[lem-earring-gauge-components-force-index-energy-monotonicity]] [[lem-order-two-asd-bubbles-have-relative-fredholm-index-loss-at-least-four]] [[lem-bounded-holonomy-forced-orbifold-asd-trajectories-have-bubble-compactness]] [[lem-regular-earring-trajectories-have-exponential-ends-and-low-index-broken-compactness]] [[lem-regular-earring-broken-trajectories-have-exhaustive-nonlinear-gluing-collars]]

[F4] Integral orientation modules, coherent concatenation and the actual signed boundary comparison are proved in [[lem-earring-trajectory-determinants-have-coherent-integral-orientations]]. Independence and isotopy transport, with the genuine varying-metric compactness and parameter collars, are proved in [[thm-earring-instanton-complexes-have-canonical-continuation-equivalences]].

[A1] Full AC is used through the Hilbert completions and bounded inverses, finite-rank splittings, subsequence extraction, obstruction constructions and simultaneous generic parameter choices in these suppliers. The finite chain-group and boundary-sum algebra below needs no further choice. [[def-axiom-of-choice]]

## Proof

**Given:** The based smooth knot, its actual admissible earring bundle data, full AC and regular holonomy perturbation data. Finite energy means the flow energy $2\int_{\mathbb R}\|\partial_tB\|_2^2dt$, equivalently the perturbed topological energy on a trajectory class. It does not mean unrenormalized curvature energy on an infinite cylinder with nonflat perturbed critical ends.

1.1 By [F1] the prescribed singular data are realized by actual finite-group charts and determinant-one gauges, with no reducible stabilizers. By [F2] the critical points of the perturbed Chern–Simons functional form a finite nondegenerate set, and its genuine singular trajectory equation has the stated Fredholm Sobolev realization. All smooth finite-flow-energy trajectories have the critical asymptotics in those spaces by [F3]. Thus the zero sets used to define the complex are actual smooth finite-dimensional regular moduli, rather than only formal expected-dimensional spaces. [F1, F2, F3, A1, given, construct]

2.1 Let $o_\alpha$ be the rank-one integral orientation module of a critical point from [F4] and set $C=\bigoplus_\alpha o_\alpha$. This is finite free. For each ordered critical pair, sum the signed module maps over every relative class of index one. There are only finitely many such classes and finitely many trajectories in each translation quotient by [F3]. Hence this is a well-defined integral homomorphism $d:C\to C$. The index periods are divisible by four, so the relative grading modulo four from [F3] gives this differential degree one in the cochain convention; no unsupported absolute integer grading is claimed. Choosing bases of the modules identifies this complex with the displayed generator convention of the Definition. [F2, F3, F4, step 1.1, construct, algebra]

3.1 For any two endpoint critical points, take all index-two relative classes. Their finite union of compactified translation quotients is a compact oriented one-manifold by [F3]–[F4]. Its boundary consists exactly of all ordered index-one broken pairs, without bubbles, missing collar sheets or constant nonregular limiting levels. The actual signed boundary comparison in [F4] identifies its algebraic boundary sum with one fixed convention sign times the corresponding coefficient of $d^2$. That boundary sum is zero. This holds for every endpoint pair, so $d^2=0$ over $\mathbb Z$, not only modulo two. No surgery or sutured excision theorem is used in this argument. [F3, F4, step 2.1, algebra]

4.1 The continuation theorem [F4] constructs finite signed counts for the actual nonautonomous equation, its chain maps and inverse chain homotopies between any two regular metrics and allowed perturbations. Its finite-parameter energy estimate and low-dimensional compactness supply the composition and homotopy relations, including the constant-continuation identity. Therefore the homology of this finite free cochain complex is independent of those choices with the stipulated determinant-orientation sign convention. [F1, F2, F3, F4, step 2.1, step 3.1, algebra]

5.1 An isotopy of the based knot and its earring data transports the actual branch charts, exterior bundle, holonomy perturbations and gauge-fixed operators. The pullback chain identification and the continuation equivalence of [F4] give the asserted isotopy isomorphism. The sign choices agree with the orientation-module convention in step 2.1. This proves precisely the analytic construction and invariance in the original Statement. Sutured-closure independence, the KHI rank detector, resolution-cube maps, instanton L-space surgery and a distinguished canonical class remain their own separate obligations; none has been inferred from this complex construction. [F1, F4, step 2.1, step 4.1, algebra] ∎

## Source notes

The original Statement and its references are retained byte-for-byte. The selected authentic primary passages and actual local proofs are recorded in the eleven suppliers. Their existence, inverse, nonlocal compactness, end and determinant operations are supplied locally; the primary framework is not a substitute for any of these proofs. This establishes the integral singular complex only, at the precise original based-earring scope.
