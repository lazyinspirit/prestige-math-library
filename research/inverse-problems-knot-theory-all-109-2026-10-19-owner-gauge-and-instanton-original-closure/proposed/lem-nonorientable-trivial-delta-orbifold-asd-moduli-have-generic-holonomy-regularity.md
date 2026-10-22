---
id: lem-nonorientable-trivial-delta-orbifold-asd-moduli-have-generic-holonomy-regularity
kind: lemma
title: Nonorientable trivial-delta orbifold ASD moduli have generic holonomy regularity
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-order-two-singular-gauge-completions-and-cylindrical-fredholm-operators
  - lem-singular-holonomy-perturbations-have-a-proper-generically-finite-critical-set
  - lem-su-two-asd-determinant-lines-are-gauge-equivariantly-orientable
  - thm-sard-smale-residual-regular-values-for-fredholm-maps
  - thm-implicit-function-theorem-for-banach-spaces
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Kronheimer and Mrowka, Khovanov homology is an unknot-detector
      url: https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf
      locator: complete §2.7 PDF22–24, §4.2 PDF51–53, and §7.2 PDF95–100; actual irreducibility and four-dimensional forcing construction supplied below
---

## Statement

Assume full AC. Supply a connected compact closed oriented smooth four-orbifold with order-two surface charts, an actual singular $SO(3)$ bundle and determinant-one gauge data, and an auxiliary codimension-two surface off which its ordinary exterior bundle has a chosen $SU(2)$ lift. Suppose some singular-surface component is nonorientable and its sheet system $\Delta$ is trivial, with the usual singular gluing relation: the axis orientation line is $o_\Sigma\otimes\Delta$.

Every connection then has only central determinant-one stabilizers. There is a separable Banach space of smooth bounded gauge-equivariant holonomy forcing fields in self-dual two-forms, supported off the singular and auxiliary surfaces and flat to all orders at those surfaces, such that a residual dense set makes the perturbed ASD moduli regular. Its gauge-fixed operator has its actual compact-orbifold Fredholm realization, and a nonempty regular moduli space has nonnegative index. The same surjectivity argument permits prescribed compact finite-dimensional parameter families, relative already regular boundary data.

In particular this is the irreducibility and regularity operation needed on a supplied $(S^4,\mathbb{RP}^2)$ summand with trivial $\Delta$. The statement does not construct that embedded pair, compute its index or classify its solutions, and does not yet prove a gluing theorem across its reducible $(S^3,S^1)$ cut.

## Statement references

[Kronheimer–Mrowka, §§2.7,4.2 and7.2](https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf)

## Facts & Assumptions

[F1] Finite invariant Sobolev completions, scalar-principal elliptic estimates, smooth slices and Fredholm parametrices on compact orbifolds are constructed in [[lem-order-two-singular-gauge-completions-and-cylindrical-fredholm-operators]]. The determinant-one gauge group means sections of the fiberwise unit-quaternion conjugation bundle; no global $SU(2)$ lift across the singular surface is assumed.

[F2] The actual holonomy transport derivative, weighted separable parameter construction and finite-cokernel complement method are proved in [[lem-singular-holonomy-perturbations-have-a-proper-generically-finite-critical-set]]. The four-dimensional fields and their full operator bounds are constructed below, not inferred from the three-dimensional Statement.

[F3] Actual finite-augmentation Fredholm families and their kernel charts are constructed in [[lem-su-two-asd-determinant-lines-are-gauge-equivariantly-orientable]]. The complemented implicit theorem and Sard–Smale apply to the actual Hilbert quotients below. [[thm-implicit-function-theorem-for-banach-spaces]] [[thm-sard-smale-residual-regular-values-for-fredholm-maps]]

[A1] Full AC is inherited through these analytic and simultaneous generic constructions. The chosen exterior $SU(2)$ lift is explicit input; for arc/surface-supported singular data it is obtained after removing the chosen dual surface, not from a claim that every four-dimensional $SO(3)$ bundle lifts. [[def-axiom-of-choice]]

## Proof

**Given:** The actual compact orbifold, bundle, sheet system and exterior lift in the Statement. Complete connections in $H^k$ and gauges in $H^{k+1}$ for an integer $k\ge4$.

1.1 **The nonorientable component forces genuine irreducibility.** On a surface chart the fiber rotation fixes its real adjoint axis and acts by minus one on its complementary plane. At a fixed surface point the tangential connection components commute with that rotation, so preserve this axis. If $u$ is a parallel determinant-one gauge, its value there is therefore $\exp(\theta i)$ in a local axis trivialization. Transport around a surface loop reverses the axis exactly when $o_\Sigma\otimes\Delta$ reverses. This relation can be seen directly from the local model: reversing the oriented normal coordinate sends the lifted meridian $i$ to $-i$; an additional sheet switch changes that sign once more. In an oriented ambient four-manifold the normal orientation line is $o_\Sigma$, giving precisely the displayed product. On the stipulated nonorientable component with trivial $\Delta$, select an orientation-reversing loop. A parallel gauge must then satisfy $\exp(\theta i)=\exp(-\theta i)$, so is $1$ or $-1$. Parallel transport makes it that same central gauge everywhere on a connected component meeting this surface. In particular its infinitesimal gauge kernel is zero. The invariant scalar Laplacian has a bounded inverse by [F1], and the actual local slice and arbitrary-gauge compactness proof gives a Hausdorff second-countable Hilbert quotient here, with no reducible stratum. This is a statement about all connections, not an inference from a purported energy bound or numerical index. [F1, F2, F3, A1, given, construct, algebra]

2.1 **Actual four-dimensional bounded forcing fields.** Work on the chosen exterior lift, away from both surfaces. Choose a smooth immersed thickened loop $q:S^1\times D^3\to W$ and a small subchart on which $q$ is embedded. Such a thickening exists by a normal frame of the oriented rank-three bundle along the loop; over a circle it is trivial by joining an oriented endpoint frame through $SO(3)$. Base the loop at $q(s,z)$ and let $h_q(A)(q(s,z))$ be the imaginary quaternion part of its lifted holonomy. It is a smooth adjoint section on that subchart, equivariant under every determinant-one gauge. Multiply it by a compactly supported smooth self-dual two-form $\eta$ there and extend by zero. Holonomy is unitary, so this field is pointwise bounded independently of $A$. Its derivative is the explicit integral $\int U(1,\tau)a(\dot q)U(\tau,0)\,d\tau$, transported back to its basepoint. Cauchy–Schwarz on the loop and change of variables on finitely many immersion charts show $DH_q:L^2\to L^2$ bounded: the loop domain has dimension four, the same as $W$, and the transverse parameter is three-dimensional. Differentiating in $s,z$ gives the covariant Sobolev estimates by the transport formula; derivatives of $A$ enter through its curvature and its preceding derivatives, with the same finite products as [F2]. The formal adjoint has the reversed integral kernel on the same immersion charts, so it has the same $H^j\to H^j$ bounds at a smooth connection. Choose countably many dense loop, subchart and form data. Weight their $\ell^1$ coefficients so the $i$th constant dominates $2^i$ times the first $i$ seminorms on each of the first $i$ bounded Sobolev sets, and the inverse distances of their supports to the two surfaces to the first $i$ powers. Their sum space is separable; every bounded parameter ball has a uniform pointwise field bound, and every fixed field jet has a uniformly convergent sum extending by zero to the surfaces. Each jet is zero there. Derivatives at a smooth connection are bounded at every Sobolev order, including their adjoints, and have compact $H^k\to H^{k-1}$ realization because their output is on the compact $W$. Thus $F_A^++\Pi(A)$ has its actual smooth Fredholm gauge-fixed derivative, with the same principal symbol as [F1]. [F1, F2, F3, A1, step 1.1, construct, algebra]

3.1 **Pointwise detection of the entire universal cokernel.** At a smooth zero let $(\phi,\omega)$ annihilate the universal gauge-fixed derivative. Gauge equivariance at that zero gives $L_A d_A=0$. Pairing its formal adjoint equation with $d_A\phi$ yields $d_A^*d_A\phi=0$, hence $\phi=0$ by step 1.1. Elliptic bootstrap, using step 2.1's adjoint kernel bounds, makes $\omega$ smooth. If it is nonzero, choose an ordinary point outside both surfaces with a nonzero self-dual adjoint component. The lifted holonomies of $A$ at that point contain two noncommuting unit quaternions: otherwise they lie in one circle and preserve a nonzero global oriented adjoint axis, contradicting step 1.1. Loops can be moved off the auxiliary surface and smoothed with arbitrarily small change of holonomy, since it has codimension two and loops are one-dimensional. The imaginary parts of the two noncommuting quaternions and their product span the three-dimensional imaginary space: their first two imaginary vectors are independent and the product contributes their nonzero cross product. Choose corresponding thickened loops as in step 2.1. At least one of their three field values pairs nontrivially with the selected component of $\omega$. A small self-dual form bump supported in its embedded subchart makes that integral pairing strictly positive; density of the parameter data preserves it. This contradicts universal annihilation. Thus the universal derivative is onto. This is an actual four-dimensional, non-gradient holonomy forcing argument; a three-dimensional Chern–Simons transversality Statement has not been applied outside its scope. [F1, F2, F3, step 1.1, step 2.1, construct, algebra]

4.1 **Regularity, smooth solutions and the precise summand use.** The connection derivative is Fredholm by step 2.1. Finitely many parameter directions from step 3.1 span its cokernel, so the full surjection has a complemented right inverse, and [F3] makes its universal zero set a smooth Banach manifold. Its projection to the separable forcing space is Fredholm of the fixed operator index. Sard–Smale gives a residual dense regular set. Local weak bootstrap supplies smoothness of zeros: the forcing has the full Sobolev transport bounds of step 2.1, so the first-order equation in an invariant Coulomb chart improves $H^k$ successively to every order. The same finite-complement proof applies with a compact finite-dimensional parameter domain; perturb only off prescribed parameter-boundary collars, where regularity is already fixed, and use its relative bumps and Sard–Smale to obtain relative family regularity. A regular zero has tangent dimension equal to its Fredholm index, hence that index is nonnegative whenever a zero exists. For a supplied $\mathbb{RP}^2$ summand disjoint from the auxiliary surface, the sheet cover constructed by cutting along its auxiliary boundary is trivial. Its axis orientation is therefore $o_{\mathbb{RP}^2}$, so step 1.1 applies. No classification of that summand's ASD connections and no assumption of a global four-dimensional $SU(2)$ lift across it was used. The remaining reducible cut and its matching dimension are not a consequence of this regularity argument. [F1, F2, F3, A1, step 1.1, step 2.1, step 3.1, construct, algebra] ∎

## Source notes

The complete primary examples §2.7 on PDF22–24, the singular sheet construction §4.2 on PDF51–53 and the double-saddle discussion §7.2 on PDF95–100 were read. The primary's reference to a connected-sum dimension argument is not used as proof. This source proves only its actual closed-summand irreducibility and generic regularity operation, with its exterior lift explicitly supplied; the reducible-cut inverse/matching theorem is still required by the original skein argument.
