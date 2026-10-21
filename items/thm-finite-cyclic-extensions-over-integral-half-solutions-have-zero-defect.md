---
id: thm-finite-cyclic-extensions-over-integral-half-solutions-have-zero-defect
kind: theorem
title: Finite cyclic extensions over integral half-solutions have zero defect
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-axiom-of-choice
  - thm-finite-geometric-complex-chains-dominate-compact-manifold-chains-in-zf
  - lem-choice-free-wall-chain-finiteness-from-explicit-domination
  - thm-topological-finite-projective-l2-duality-and-boundary-gluing
  - lem-amenable-strebel-rank-and-cycle-quotient-comparison
  - thm-mixed-rational-and-prime-quotients-satisfy-strebel-and-folner-conditions
  - thm-topological-lifted-half-pairs-force-amenable-signature-defect-zero
  - lem-finite-von-neumann-module-dimension-and-dense-quotients
  - thm-smooth-group-signature-defects-are-independent-and-uniformly-bounded
  - lem-normal-cover-local-homology-detects-mixed-derived-kernels-without-choice
  - thm-compact-manifolds-are-retracts-of-finite-polyhedra-without-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Cha, Amenable L2-Theoretic Methods and Knot Concordance
      url: https://arxiv.org/pdf/1010.1058
      locator: Theorem3.11 and the proof of the amenable signature theorem; the finite cyclic meridian calculation is given locally rather than using its infinite-order-meridian hypothesis
---

## Statement

Assume AC. Let $V$ be a compact connected oriented collared topological four-manifold with connected boundary $M$, with $H_1(M;\mathbb Z)\to H_1(V;\mathbb Z)$ the isomorphism $\mathbb Z[\mu]\to\mathbb Z[\mu]$ and $H_2(V;\mathbb Z)=\mathbb Z^{2r}$. Supply $r$ ordinary zero/unit pairs $x_i,y_i$, and supply isotropic lifts of the $x_i$ to the abelian cover of $V$. Let $p$ be any prime, let $C_p$ be the cyclic group of order $p$, and let $\phi:\pi_1(V)\to\mathbb Z\to C_p$ send the meridian to its positive generator. Then
$$\operatorname{sign}_{C_p}^{(2)}(V,\phi)=\operatorname{sign}(V)=0.$$
The completed coefficient homology has $b_0^{(2)}(V)=b_1^{(2)}(V)=1/p$, $b_2^{(2)}(V)=2r$ and $b_3^{(2)}(V)=b_4^{(2)}(V)=0$, and the middle intersection form has zero radical. In particular, when $V$ is smooth, its boundary restriction has $\rho_{\mathrm{sm}}(M,\phi|_M)=0$. Every smooth integral $1$-solution satisfies the supplied pair hypotheses. No comparison between a nonsmooth TOP defect and a smooth bounding-defect invariant is asserted.

## Facts & Assumptions

**Given:** AC, the actual manifold, collar, meridian, pairs and abelian-cover isotropic lifts in the Statement.

[A1] The full AC convention of the projective and Hilbert suppliers is retained. [[def-axiom-of-choice]]

[F1] Arbitrary-ring local singular chains of compact manifolds have explicit finite-free domination. The explicit Wall construction gives bounded finite-projective models, free in degrees zero, one and two after padding the domination top degree to at least two. [[thm-finite-geometric-complex-chains-dominate-compact-manifold-chains-in-zf]], [[lem-choice-free-wall-chain-finiteness-from-explicit-domination]]

[F2] The completed finite-projective cap models give bounded duality, weak pair exactness, coefficient-compatible intersections and harmonic projection homology. Algebraic homology maps onto its finite projection part with dimension-zero kernel and then densely into its Hilbert completion. [[thm-topological-finite-projective-l2-duality-and-boundary-gluing]], [[lem-finite-von-neumann-module-dimension-and-dense-quotients]]

[F3] An amenable countable group in $D(k)$, for $k=\mathbb F_p$, has the finite-chain rank and cycle-quotient inequalities. The cyclic group $C_p$ is in $D(\mathbb F_p)$ by the elementary-abelian factor calculation. Its uniform average is an invariant mean, so it is amenable without an ultrafilter choice. [[lem-amenable-strebel-rank-and-cycle-quotient-comparison]], [[thm-mixed-rational-and-prime-quotients-satisfy-strebel-and-folner-conditions]]

[F4] The explicit mod-$p$ cycle lifts and the idempotent/complement rank calculation in the lifted-half-pair proof show that ordinary $H_2(V;k)$ has dimension $2r$, ordinary Euler sum is $2r$, and each finite-projective term has equal augmented-$k$ and von Neumann dimensions. Those arguments use only the stated integral $H_1,H_2$ and rank inequalities, not the infinite-order-meridian step. [[thm-topological-lifted-half-pairs-force-amenable-signature-defect-zero]]

[F5] Smooth bounding defects are independent among actual smooth extensions and equal their boundary invariant. [[thm-smooth-group-signature-defects-are-independent-and-uniformly-bounded]]

[F6] Compact manifolds have the explicit finite Euclidean embedding, finite shrunk chart covers and subordinate continuous partitions used in the retraction construction. The contractible-open normal-cover construction applies to the manifold basis. [[thm-compact-manifolds-are-retracts-of-finite-polyhedra-without-choice]], [[lem-normal-cover-local-homology-detects-mixed-derived-kernels-without-choice]]

## Proof

**Given:** The data of the Statement; put $G=C_p$, $k=\mathbb F_p$ and $A=\mathcal NG$.

1.1 Take the [F1] finite-projective models over $\mathbb ZG$ for $V,M$, with finite-free terms through degree two. The actual meridian supplies the circle chain map with differential $g^{-1}-1$, as in [F4]'s explicit singular-to-model construction. After augmentation to $k$ this map is an isomorphism in degrees zero and one, since both spaces have integral $H_1=\mathbb Z[\mu]$; the mod-$p$ assertion follows by lifting a cycle and dividing its boundary by $p$, whose resulting zero-chain class vanishes because $H_0$ has no $p$-torsion. Thus the augmented cone has zero homology in degrees zero and one. Apply [F3]'s empty-cycle inequality to the cone, whose relevant terms are finite free. Its $A$ homology has dimension zero in those two degrees, and [F2] gives zero completed reduced cone homology there. [F1, F2, F3, F4, given, construct, algebra]

2.1 Since $G$ is finite, $A=\mathbb CG$ and every finite Hilbert module is an ordinary finite-dimensional complex space; all linear-map ranges are closed. The circle kernel and cokernel are the trivial-character line. Its projection is $e=p^{-1}\sum_{j=0}^{p-1}g^j$, with trace $1/p$. The exact cone sequence from step 1.1 makes the circle map onto $H_1(V;A)$ and $H_1(M;A)$ and isomorphic on $H_0$. For the reverse $H_1$ direction, the ordinary meridian identification gives an actual based map $V\to S^1$ inducing abelianization, with restriction to $M$ the same map. Here is a construction on the actual TOP manifold, requiring no finite CW model. Use [F6] to form the principal $\mathbb Z$ cover associated to its integral abelianization. Choose local sections over finitely many contractible chart domains and a finite continuous partition $\{\psi_i\}$ with support compactly contained in these domains, obtained by shrinking the finite Euclidean chart cover. For a lift $x$, write $n_i(x)$ for its integer sheet coordinate relative to the $i$th section whenever $\psi_i$ is nonzero. Each $n_i$ is locally constant. The function $f(x)=\sum_i\psi_i(\bar x)n_i(x)$ is continuous: the supported summands extend by zero outside their chart domains. It satisfies $f(Tx)=f(x)+1$ for the positive deck generator. Therefore $f\bmod\mathbb Z$ is a map $V\to\mathbb R/\mathbb Z$ inducing precisely the stipulated abelianization; following a lifted loop gives its integer sheet increment. Restriction gives the same map on $M$. The composite of either marked meridian with this map has degree one. The pulled-back coefficient system is exactly $\phi$, so naturality makes the circle inclusion split on $H_1$ and on $H_0$ for these coefficients. Hence both meridian maps are isomorphisms on $H_0,H_1$, and boundary inclusion $H_1(M;A)\to H_1(V;A)$ is an isomorphism. Both spaces have $b_0^{(2)}=b_1^{(2)}=1/p$. [F2, F3, F6, step 1.1, construct, algebra]

3.1 The relative sequence now gives $H_0(V,M;A)=H_1(V,M;A)=0$. Duality [F2] makes $b_4^{(2)}(V)=b_3^{(2)}(V)=0$. The idempotent/complement argument in [F4] applies to this finite cyclic group: the rank inequality for $e$ and $1-e$ forces equality of the augmented and $A$ ranks of each projective term, and finite alternating rank-nullity cancels all boundary ranks. The ordinary Euler sum is $2r$ by [F4]. Therefore $2r=b_0^{(2)}-b_1^{(2)}+b_2^{(2)}=b_2^{(2)}$. The map $H_2(V;A)\to H_2(V,M;A)$ is onto, since the next map goes to the kernel of the boundary $H_1$ isomorphism. Duality gives equal source and target dimensions, so it is an isomorphism. Inverse cap and evaluation consequently make the middle intersection form nonsingular. Closed range here is justified by the finite-dimensional group algebra, not by an inference from weak exactness for infinite groups. [F2, F4, step 2.1, algebra]

4.1 The supplied abelian-cover isotropic classes map to $\mathbb ZG$ cycles, because $\phi$ factors through abelianization. Their ordinary reductions over $k$ are independent: pairing with the ordinary $y_j$ reads off their coefficients as a unit matrix. Represent them in the finite-free model term of degree two from step 1.1. The [F3] cycle-quotient inequality, with the ordinary and $A$ middle dimensions both $2r$, gives dimension at least $r$ for their $A$-homology span. Its closed harmonic span has the same dimension by [F2]. The actual coefficient-change cap pairing is zero on their finite linear combinations, and hence on their closure. Thus it is an isotropic subspace of dimension at least $r$ in a nonsingular Hermitian module of dimension $2r$. Projection of either positive or negative spectral space into its orthogonal complement is injective, so both inertia dimensions are at most $r$. They sum to $2r$ because the radical is zero by step 3.1. Both equal $r$, proving $\operatorname{sign}^{(2)}_G(V)=0$. This also covers $r=0$. [F2, F3, step 1.1, step 3.1, construct, algebra]

5.1 The ordinary $2r$ classes $x_i,y_i$ are a real basis by their unit cross-pairings. Their matrix is $\left(\begin{smallmatrix}0&I\\I&D\end{smallmatrix}\right)$, and the change $y\mapsto y-\tfrac12xD$ makes it hyperbolic. Hence $\operatorname{sign}(V)=0$. In the smooth case [F5] evaluates the actual extending defect on this same $V$, so the boundary $\rho_{\mathrm{sm}}$ is zero by step 4.1. An integral $1$-solution supplies all its zero/unit pairs over the abelian quotient; their augmentations give the ordinary pairs and their isotropic classes give the required lifts. Thus it satisfies every hypothesis, without imposing an infinite-order condition on the image meridian. The conclusion for a supplied TOP $V$ is only its actual zero defect, with no smooth/TOP independence substitution. [F2, F4, F5, step 4.1, algebra] ∎
