---
id: lem-regular-earring-broken-trajectories-have-exhaustive-nonlinear-gluing-collars
kind: lemma
title: Regular earring broken trajectories have exhaustive nonlinear gluing collars
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-order-two-singular-gauge-completions-and-cylindrical-fredholm-operators
  - lem-singular-holonomy-perturbations-have-a-proper-generically-finite-critical-set
  - lem-earring-holonomy-perturbations-regularize-all-trajectory-indices
  - lem-regular-earring-trajectories-have-exponential-ends-and-low-index-broken-compactness
  - thm-banach-fixed-point
  - thm-implicit-function-theorem-for-banach-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Kronheimer and Mrowka, Khovanov homology is an unknot-detector
      url: https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf
      locator: §3.6; the nonlinear inverse and exhaustion are proved locally below
---

## Statement

Assume full AC and the actual all-index regular earring perturbation. Every ordered broken pair of index-one trajectories has a gluing collar of index-two unparametrized trajectories. Each sufficiently broken index-two trajectory belongs to precisely the collar of its broken limit. The glued relative class is the actual concatenation class. Together with the unbroken moduli, these collars make the index-two compactification a compact one-dimensional manifold with boundary the ordered broken pairs. The smooth structure is its ordinary smooth structure in the interior and the collar smooth structure at its boundary. No assertion of analyticity in an arbitrarily preassigned exponential neck coordinate is made.

## Statement references

[Kronheimer–Mrowka, §3.6](https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf)

## Facts & Assumptions

[F1] The invariant high-Sobolev slices, elliptic estimates, limiting critical inverse and smooth nonlocal holonomy mapping bounds are supplied by [[lem-order-two-singular-gauge-completions-and-cylindrical-fredholm-operators]] and [[lem-singular-holonomy-perturbations-have-a-proper-generically-finite-critical-set]]. Holonomy derivatives are local in the cylinder time, so commute with its scalar cutoffs.

[F2] All nonconstant levels are regular, and the time action is free and proper, by [[lem-earring-holonomy-perturbations-regularize-all-trajectory-indices]]. Every such level has exponential critical ends in every order; actual low-index compactness, finite classes, index addition and absence of bubbles are proved in [[lem-regular-earring-trajectories-have-exponential-ends-and-low-index-broken-compactness]].

[F3] The contraction and local parametrization arguments use [[thm-banach-fixed-point]] and [[thm-implicit-function-theorem-for-banach-spaces]]. Full AC is inherited from the actual Sobolev and regularity constructions. [[def-axiom-of-choice]]

## Proof

**Given:** Index-one trajectories $A_-$ from $\alpha$ to $\beta$ and $A_+$ from $\beta$ to $\gamma$, represented with exponential ends and with their translations fixed by an $L^2$ phase slice.

1.1 **Actual pregluing with an exponentially small residual.** Use their convergent end gauges to identify both ends with the same representative $\beta$ on the same orbifold bundle. Their possible central signs act trivially on connections. Translate the two cores to times $-T$ and $T$. Cut their exponentially small deviations from $\beta$ to zero near the middle and identify the resulting equal constant connections. This defines a connection $A_T$ on the concatenated cylindrical bundle, not just formal matching data. Work with an integer $k\ge4$. The equation and gauge-slice residual satisfy $\|e_T\|_{H^{k-1}}\le Ce^{-\delta T}$, as do all fixed orders of its $T$ derivatives, by the exponential estimates and [F1]'s local-in-time holonomy derivatives. The only new terms are cutoff derivatives times the small tail and smooth equation differences on that tail. The glued bundle and path are obtained by the explicit critical-end identification, so their relative class is the concatenation. Cutoffs and this construction are invariant on each order-two chart. [F1, F2, given, construct, algebra]

2.1 **Uniform inverse on the actual normal space.** Let $D_T$ be the gauge-fixed derivative at $A_T$, and let $K_T$ be the span of the two cutoff translated velocity fields. Their Gram matrix tends to the positive diagonal Gram matrix of the two original velocities. The restriction of $D_T$ to $K_T^\perp$ has a uniformly bounded inverse onto its target for all large $T$. Here are both parts of that assertion. Each $D_\pm$ is onto with one-dimensional kernel, its velocity. Stabilize it by the scalar pairing with that velocity; it is then an isomorphism. On the critical middle use the full-line inverse of $\partial_t+H_\beta$. Patch these three inverses with time cutoffs whose transitions have a large fixed length $L$. The commutators are at most $C/L$, since the nonlocal spatial holonomy operators commute with time cutoffs. On transitions far down the level ends the coefficient errors tend to zero; thus first take $L$ large and then $T$ large. The patched stabilized operator has both left and right errors of norm less than $1/2$, corrected by their Neumann series. Equivalently its coercive estimate can be checked directly: a unit sequence in $K_T^\perp$ with derivative tending to zero has local limits in $\ker D_\pm$, which its scalar pairings kill. No remaining norm can escape down the critical neck, by the full-line inverse, the same long cutoffs and absorption of its small coefficient error. Interior elliptic estimates upgrade this estimate to $H^k\to H^{k-1}$. The stabilized inverse identifies the full kernel with the two phase coordinates and shows surjectivity; removing its scalar stabilizations therefore gives precisely the asserted inverse on $K_T^\perp$. Uniform bounds for derivatives in $T$ follow by differentiating the patched operators and their Neumann inverses; in translated core coordinates all those derivatives are bounded. Denote this inverse by $Q_T$. [F1, F2, step 1.1, construct, algebra]

3.1 **The nonlinear solution and its parameters.** In the actual gauge slice the equation is $e_T+D_Ta+N_T(a)=0$. The four-dimensional Sobolev product inequality for $k\ge4$ and the bounded higher holonomy derivatives give $\|N_T(a)-N_T(b)\|_{H^{k-1}}\le C(\|a\|_{H^k}+\|b\|_{H^k})\|a-b\|_{H^k}$ with constant independent of $T$; the cylinder has fixed bounded geometry and the cutoff cover has uniformly finite overlap. Thus $a=-Q_T(e_T+N_T(a))$ is a contraction on the $K_T^\perp$ ball of radius $2C\|e_T\|_{H^{k-1}}$. It has one solution $a_T$, with $\|a_T\|_{H^k}\le C'e^{-\delta T}$. The smooth implicit theorem and the differentiated inverse give a smooth family for finite $T$, with corresponding exponentially small derivatives. Bootstrap makes each actual solution smooth. Its derivative and the overall translation derivative project to the two original velocity directions with an invertible limiting matrix; hence they span the two-dimensional solution kernel. The normal implicit parametrization shows this is an open family of all nearby solutions. After quotienting overall translation, $T$ is a local coordinate on an interval, and the phase choices change it by a smooth change of coordinate. [F1, F2, F3, step 1.1, step 2.1, construct, algebra]

4.1 **Exhaustion, rather than only existence of a glued family.** Suppose an index-two sequence converges to this broken pair. Use the two fixed phase conditions to align its cores with the original cores; their separation tends to infinity. On every fixed core window convergence is smooth by [F2]. On the intervening critical interval its slice norm is uniformly small, by the first-exit selection in [F2]; otherwise an additional level or bubble would appear, contradicting its exact total index. The finite-interval version of the cutoff inverse gives $\|a\|_{H^k([l+1,r-1])}\le C(\|a\|_{H^{k+1}( [l,l+1]\cup[r-1,r])})$ when that slice norm is small. To obtain it, extend by cutoffs at the two endpoints, apply the full-line critical inverse, and absorb the nonlinear coefficient; the constants are independent of $r-l$. The analogous estimate on the two outer infinite ends is [F2]'s weighted tail estimate. First take the fixed core windows large, then the sequence index large. These estimates show global $H^k$ closeness to the actual preglued connection, not merely local convergence near its cores. Adjust the two phases by the invertible matrix in step 3.1, so that the correction lies in $K_T^\perp$. The contraction uniqueness then makes this trajectory exactly $A_T+a_T$, up to the overall time translation. This proves exhaustion and uniqueness of the broken-pair label; it also precludes a second sheet converging to the same pair. [F1, F2, F3, step 1.1, step 2.1, step 3.1, construct, algebra]

5.1 **The actual compact manifold with boundary.** For the finite critical set and relevant finite classes, the index-one quotients are finite by [F2]; hence there are finitely many ordered broken pairs. Choose disjoint sufficiently far-out collars using step 4.1. Give each the boundary coordinate $r=1/T$ and adjoin $r=0$. For $r>0$ it is the ordinary smooth chart from step 3.1; declaring this collar to be smooth supplies its boundary chart without making an unsupported power-series assertion about $e^{-\delta T}$. Any two choices of phase and pregluing yield the same set by exhaustion; one may fix one choice per boundary point, so no prescribed smoothness at zero of an arbitrary alternative neck variable is required. Interior slices and these finitely many collars make a Hausdorff second-countable one-dimensional manifold with boundary. Every sequence has an unbroken or broken subsequential limit by [F2], and step 4.1 identifies exactly the collar topology at the latter. It is therefore compact. Its boundary is precisely the ordered pairs, with the actual concatenation label retained from step 1.1. Orientation and its boundary sign are separate determinant-line claims, not consequences merely of this topological compactification. [F1, F2, step 1.1, step 3.1, step 4.1, construct, algebra] ∎

## Source notes

The primary orientation and chain-complex discussion is used only to document the intended application. The proof uses the actual regular cylindrical inverse and exponential-end suppliers, and explicitly proves the uniform normal inverse, nonlinear correction and exhaustion. It does not cite a gluing theorem as a replacement for any of those operations.
