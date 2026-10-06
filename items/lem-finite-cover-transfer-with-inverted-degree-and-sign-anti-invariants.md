---
id: lem-finite-cover-transfer-with-inverted-degree-and-sign-anti-invariants
kind: lemma
title: "Finite-cover transfer with inverted degree and sign anti-invariants"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps:
  - def-axiom-of-choice
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-regular-covering
  - def-deck-transformation-and-deck-group
  - thm-covering-space-lifting-criterion
  - thm-uniqueness-of-lifts-from-a-connected-space
  - thm-convex-subsets-have-trivial-fundamental-group
  - thm-path-connected-implies-connected
  - def-standard-topological-simplex-and-its-affine-face-maps
  - def-singular-simplex-and-singular-chain-group-with-coefficients
  - def-singular-cochain-complex-with-coefficients
  - def-singular-cohomology-with-coefficients
  - def-homology-and-cohomology-with-local-coefficients
  - prop-cup-product-is-natural-unital-and-associative
dependency_level: 0
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Tom Weston, An Introduction to Cobordism Theory"
      url: "https://math.stanford.edu/~ralph/morsecourse/cobordismintro%20.pdf"
      locator: "§17, Corollary 17.2; sign-cochain and general inverted-degree extensions proved locally"
    - title: "Allen Hatcher, Algebraic Topology"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
      locator: "§3.G, Transfer Homomorphisms, printed pp.321–326"
verification:
  precheck: pass
---

## Statement

Assume AC. Let p:Y→X be a nonempty finite d-sheeted regular cover of path-connected CW spaces, and let R be a commutative unital ring in which d is invertible. Pullback identifies H*(X;R) with the deck-invariant graded subalgebra H*(Y;R)^G. For a double cover and 2 invertible, let O_R be its associated sign local system. Then H*(X;O_R) is naturally the anti-invariant part of H*(Y;R). No finite-dimensionality hypothesis is imposed.

## Facts & Assumptions

**Given:** AC; a nonempty finite $d$-sheeted regular cover $p:Y\to X$ of path-connected CW spaces with deck group $G$; a commutative unital ring $R$ in which $d$ is invertible; and, for the second assertion, the case $d=2$ with $2$ invertible in $R$ and the associated sign local system $O_R$ on $X$.

[F1] A finite covering has evenly covered neighbourhoods, and a lift of a continuous map from a simply connected, locally path-connected space with one prescribed value exists and is unique ([[def-covering-map-and-evenly-covered-neighbourhoods]], [[thm-covering-space-lifting-criterion]], [[thm-uniqueness-of-lifts-from-a-connected-space]]). The standard simplex and its faces are convex, hence simply connected and locally path connected (intersections with sufficiently small Euclidean balls are convex) ([[def-standard-topological-simplex-and-its-affine-face-maps]], [[thm-convex-subsets-have-trivial-fundamental-group]]); the base and total spaces are path connected ([[thm-path-connected-implies-connected]]).

[F2] For a regular cover the deck group acts on $Y$, transitivity on every fiber holds, and the deck transformations permute the $d$ lifts of a simplex; singular chains, cochains and cohomology with coefficients in $R$ are the usual free constructions on singular simplices ([[def-regular-covering]], [[def-deck-transformation-and-deck-group]], [[def-singular-simplex-and-singular-chain-group-with-coefficients]], [[def-singular-cochain-complex-with-coefficients]], [[def-singular-cohomology-with-coefficients]]).

[F3] Homology and cohomology with local coefficients are defined by coefficient systems on the singular simplex category, and for the sign local system the coefficient module over a simplex is the orientation line of the double cover ([[def-homology-and-cohomology-with-local-coefficients]]).

[F4] Pullback on cohomology is a unital ring homomorphism for the cup product ([[prop-cup-product-is-natural-unital-and-associative]]).

[F5] AC permits choosing one element from each of the nonempty sets of lifts and of orientation-line coordinates encountered below ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 On integral singular chains define τ(σ) as the sum of all d lifts of σ. The contractible simplex admits a lift for each point of the fiber over one vertex, and uniqueness of lifts shows these are all the lifts. Restriction to a face bijects these lift sets, so ∂τ=τ∂. This is precisely the chain construction proved in the published rational-transfer supplier; it precedes and is independent of its choice of coefficients. Precomposing R-valued cochains with τ gives T with Tp*=d id and p*T=Σ_{g∈G}g*. Thus p* is injective. Every pullback is invariant, and for invariant y, p*(d⁻¹Ty)=y. The ring identification follows from multiplicativity of pullback; transfer itself need not be multiplicative. This proves the upgrade over R, including R=Q and R=F_p with p∤d. [given, F1, F2, F5, algebra]

1.2 For a double cover with deck involution σ and 2 invertible, the sign local system downstairs corresponds to the anti-invariant cochain subcomplex upstairs. To verify this without invoking an unproved transfer with local coefficients, choose a lift of each singular simplex: the local-coefficient cochain assigns a coefficient in its orientation line; changing that lift changes its signed coordinate. Hence it corresponds exactly to an ordinary cochain c satisfying σ*c=−c. Transport along faces gives the ordinary cochain differential in these coordinates. The idempotents (1±σ*)/2 split the entire cochain complex into its two eigenspaces; therefore cohomology of the anti-invariant subcomplex is the anti-invariant part of cohomology. This gives H*(X;O_R) ≅ H*(Y;R)^−. [given, F3, F4, F5, algebra]

2.1 This applies also when the spaces or cochain groups are infinite: the idempotents, not a finite-dimensional averaging argument, give the splitting. [step 1.2] ∎
