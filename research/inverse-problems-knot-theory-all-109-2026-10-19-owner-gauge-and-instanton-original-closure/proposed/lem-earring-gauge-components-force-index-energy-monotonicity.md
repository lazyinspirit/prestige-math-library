---
id: lem-earring-gauge-components-force-index-energy-monotonicity
kind: lemma
title: Earring gauge components force index-energy monotonicity
status: draft
origin: session
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - lem-earring-relative-arc-data-supply-admissible-orbifold-and-determinant-lifts
  - lem-order-two-singular-gauge-completions-and-cylindrical-fredholm-operators
  - lem-singular-holonomy-perturbations-have-a-proper-generically-finite-critical-set
  - lem-order-two-asd-bubbles-have-relative-fredholm-index-loss-at-least-four
  - thm-asd-deformation-complex-index-formula
  - thm-based-sphere-maps-are-classified-by-geometric-degree
  - lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice
  - thm-poincare-lefschetz-duality
  - thm-general-stokes-theorem
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Kronheimer and Mrowka, Khovanov homology is an unknot-detector
      url: https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf
      locator: §3.2, PDF28, twisted gauge component group and its Chern–Simons periods
    - title: Kronheimer and Mrowka, Knot homology groups from instantons
      url: https://people.math.harvard.edu/~kronheim/yaft.pdf
      locator: PDF69–70, equation79 perturbed topological energy; PDF75–76, energy-index comparison and finite classes
---

## Statement

Assume full AC. Use the earring singular data, completed determinant-one gauge group $\mathcal G$, and fixed determinant lift constructed above. The restriction to the two core circles gives an exact sequence of component groups
$$0\longrightarrow\mathbb Z\longrightarrow\pi_0\mathcal G\longrightarrow(\mathbb Z/2)^2\longrightarrow0,$$
where the kernel generator is a degree-one gauge transformation supported in a ball disjoint from the singular link. For a loop in the unbased configuration quotient define $I$ as the index of its cylindrical ASD deformation operator with fixed invertible asymptotic Hessian, and define its topological energy period by twice the Chern–Simons drop, using inner product $-\operatorname{tr}_{\mathbb C^2}$. Then
$$\mathcal E=\pi^2 I,\qquad I\in4\mathbb Z.$$
Both quantities vanish on the central stabilizer and descend to actual quotient loops.

Fix any perturbation in the nondegenerate critical class of the preceding critical-set lemma. For critical endpoints $\alpha,\beta$ and a relative path class $z$, let $I_z$ be the corresponding cylindrical index and $\mathcal E_z$ twice the drop of the perturbed functional. There is a constant $C$ depending on this fixed data, but not on $z,\alpha,\beta$, such that $|\mathcal E_z-\pi^2I_z|\le C$. For every finite upper index bound $D$, only finitely many endpoint pairs and relative classes of nonconstant gradient trajectories with $I_z\le D$ can occur, and their flow energies satisfy $0<\mathcal E_z\le\pi^2D+C$.

Here finite flow energy means $2\int_{\mathbb R}\|\partial_tB\|_2^2dt$ in temporal gauge, equivalently the perturbed topological energy. It does not mean the unrenormalized integral of curvature squared over the whole cylinder when its perturbed critical endpoints are nonflat. No trajectory compactness, regularity or gluing conclusion is part of this result.

## Statement references

[Kronheimer–Mrowka, unknot-detector §3.2](https://people.math.harvard.edu/~kronheim/khovanov-unknot.pdf)

[Kronheimer–Mrowka, instanton paper equation79 and PDF75–76](https://people.math.harvard.edu/~kronheim/yaft.pdf)

## Facts & Assumptions

[F1] Each core axis circle is nonorientable and all determinant-one stabilizers are exactly $\{\pm1\}$. Invariant completions and actual cylindrical Fredholm operators, including bounded holonomy Hessians, have been constructed. [[lem-earring-relative-arc-data-supply-admissible-orbifold-and-determinant-lifts]] [[lem-order-two-singular-gauge-completions-and-cylindrical-fredholm-operators]]

[F2] The actual critical set is finite for the selected perturbation, whose cylinder function is globally gauge invariant. [[lem-singular-holonomy-perturbations-have-a-proper-generically-finite-critical-set]]

[F3] The explicit block rotation compares indices under compact cut-and-paste. On a charge-one ordinary sphere, reversing orientation converts ASD to the sign-fixed formula, giving unbased index five; its flat reference has index minus three. [[lem-order-two-asd-bubbles-have-relative-fredholm-index-loss-at-least-four]] [[thm-asd-deformation-complex-index-formula]]

[F4] The actual handle proof gives the compact three-dimensional exterior a finite relative CW model retaining its boundary, with cells of dimension at most three. Sphere degree gives $\pi_3(S^3)=\mathbb Z$, while $\pi_1(S^3)=\pi_2(S^3)=0$. Integral cap duality gives $H^3(X,\partial X;\mathbb Z)=\mathbb Z$. [[lem-compact-smooth-manifolds-have-finite-cw-models-under-countable-choice]] [[thm-based-sphere-maps-are-classified-by-geometric-degree]] [[thm-poincare-lefschetz-duality]]

[F5] Local integration by parts and transgression are Stokes on invariant lifted charts, with finite partition cancellation; full AC is inherited through the analytic, cellular and duality inputs. [[thm-general-stokes-theorem]] [[def-axiom-of-choice]]

## Proof

**Given:** The fixed earring completion and a nondegenerate critical perturbation, with the fundamental trace convention in the Statement.

1.1 **Restriction and its exact kernel on components.** A gauge on a core circle takes values in the axis circle. Write its angle on $0\le t\le2\pi$ as $a(t)$; the longitudinal axis reversal imposes $a(2\pi)=-a(0)+2\pi m$. Changing the angle lift changes $m$ by an even integer, and linear homotopies of these angle functions show that $m\bmod2$ classifies components. A loop of such sections has zero angle degree in its loop parameter: that degree is an integer $n$ at one core parameter value, while axis reversal makes it $-n$ at the other, so $n=0$. Its real angle lift then contracts linearly with the same end condition. Thus each restriction space has $\pi_0=\mathbb Z/2$ and $\pi_1=0$. Every core section extends to a gauge: make it constant in the normal direction near the core and extend from the two torus boundaries over the exterior's cells. The successive obstructions through dimension three lie in $\pi_0(S^3),\pi_1(S^3),\pi_2(S^3)$ and vanish by [F4]. Homotopies of restrictions lift as well: for uniformly small changes take their axis-valued logarithm, extend it to a tubular neighborhood with a radial cutoff, exponentiate, and multiply; finitely many parameter subdivisions treat a compact homotopy. A gauge equal to one on the cores may be homotoped to one on smaller tubes by invariant radial contraction. Relative homotopy classes on the remaining exterior are $H^3(X,\partial X;\mathbb Z)$: fix the identity on the two-skeleton using the two lower vanishing homotopy groups, record the degree on each three-cell, and note that changing a two-skeleton homotopy changes those integers by its cellular coboundary. A homotopy on the four-dimensional cell prisms exists exactly when that difference cochain is a coboundary; its only possible obstruction is $\pi_3(S^3)$ on these prisms. Inner transition conjugations have degree $+1$, so the integer coefficient system is untwisted. The zero $\pi_1$ of the restriction spaces makes this relative classification inject into full gauge components. By [F4] it is $\mathbb Z$, represented by the degree-one gauge in an interior ball. This proves the exact sequence without assuming a split extension. [F1, F4, given, construct, algebra]

2.1 **Energy and index are genuine period homomorphisms.** On the affine connection space the local cubic Chern–Simons variation has differential $b\mapsto-\int\operatorname{tr}(b\wedge F_B)$. Its exterior derivative is zero, by integration by parts, so its integral along an affine path gives a primitive, unique up to a constant. Gauge invariance of this differential makes the change under a gauge independent of the connection, and multiplication makes twice its drop an additive real period homomorphism. The perturbing function in [F2] is gauge invariant, so adds no period. The index period is also additive. To check this rather than assume a spectral-flow convention, concatenate two paths at a constant nondegenerate critical Hessian. Apply the block rotation of [F3] on two matching product collars to exchange the two half-cylinders. It identifies the direct sum of the two path operators with the composite-path operator plus the constant-critical-cylinder operator, modulo compactly supported order-zero terms. The latter has the explicit whole-line inverse of [F1] and index zero. Thus the indices add. Homotopies and changing the reference connection path with fixed relative class preserve index by the same Fredholm continuity. The constant central gauge acts trivially on connections, so both periods vanish on it. Local slices lift any quotient path and homotopy by finitely many bundle charts; since the affine space is contractible, quotient loop classes identify with gauge components modulo this central stabilizer. These periods therefore apply to actual quotient loops. [F1, F2, F3, F5, step 1.1, construct, algebra]

3.1 **The single ordinary generator calibrates every singular period.** Let $g_0$ be the degree-one kernel gauge from step 1.1. It is supported off the singular set, so the ordinary transgression is exact there. For the quaternionic Maurer–Cartan form $\theta=i\alpha+j\beta+k\gamma$, direct multiplication gives $\operatorname{tr}\theta^3=-12\alpha\wedge\beta\wedge\gamma$, and the unit-sphere volume is $2\pi^2$, so its integral is $-24\pi^2$. The pure-gauge cubic Chern–Simons value is $\tfrac16\int\operatorname{tr}\theta^3=-4\pi^2$. Thus twice the drop is $\mathcal E(g_0)=8\pi^2$. The same degree-one clutch has ordinary ASD charge increment one. Excision [F3] compares it with the ordinary charge-one sphere against the flat reference, giving $I(g_0)=5-(-3)=8$, with the same orientation of the clutch. For any gauge $g$, its restriction component has order at most two, so $g^2$ belongs to the kernel in step 1.1 and represents $n g_0$ for some integer $n$. Additivity gives $2\mathcal E(g)=8\pi^2 n$ and $2I(g)=8n$. Hence $\mathcal E(g)=\pi^2I(g)$ and $I(g)=4n$. Moreover for each fixed integer index there is at most one gauge component above each of the four restriction components: the quotient of two such components is a kernel power, and its index is zero only for the zero power. Passing to quotient loops can only reduce this finite number. No relation such as $2h=g_0$ for a specifically chosen singular generator was needed. [F1, F3, F4, F5, step 1.1, step 2.1, construct, algebra]

4.1 **Uniform relative energy bounds and finite homotopy classes.** There are finitely many critical endpoints by [F2]. For each ordered endpoint pair choose one smooth reference path in the affine configuration quotient, constant on its ends; such a path exists because the affine connection space is connected. Let its index and perturbed energy be $I_0,E_0$. Any other relative class differs by a quotient loop, so step 3.1 gives $E_z-E_0=\pi^2(I_z-I_0)$. The maximum of the finitely many numbers $|E_0-\pi^2I_0|$ is a finite constant $C$. This proves the asserted uniform bound. For a gradient solution, the chain rule on finite cylinders gives $2((CS+f_\pi)(B(t_0))-(CS+f_\pi)(B(t_1)))=2\int_{t_0}^{t_1}\|\partial_tB\|_2^2dt$. Passing to its critical endpoints gives the claimed flow-energy identity and nonnegativity; zero energy makes the path constant. Thus a nonconstant solution with $I_z\le D$ has $0<E_z\le\pi^2D+C$ and $I_z>-C/\pi^2$. Only finitely many integer indices lie in this interval, and step 3.1 gives at most four classes per endpoint pair for each one. This proves the finite relative-class and energy conclusions, without counting any trajectories or asserting their compactness. [F1, F2, step 1.1, step 2.1, step 3.1, construct, algebra] ∎

## Source notes

The actual short twisted component-group passage §3.2, PDF28, of the124-page unknot-detector paper was read, along with equation79 and its complete explanation on PDF69–70 and the finite-energy/index discussion on PDF75–76 of the118-page instanton paper. The local proof needs only the exact kernel and finite restriction quotient, so avoids importing an unproved presentation or a preferred singular generator relation. All periods are calibrated in the fundamental trace convention; the earlier paper's general-group Killing-form normalization is not silently substituted. The final energy is the perturbed flow/topological energy, which remains finite at nonflat perturbed critical endpoints.
