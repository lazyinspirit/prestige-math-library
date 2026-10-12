---
id: lem-affine-algebraic-whitney-strata-admit-finite-critical-strongly-plurisubharmonic-distance-exhaustions
kind: lemma
title: "Affine algebraic Whitney strata admit distance exhaustions with finitely many stratified Morse points"
status: draft
origin: session
deps:
  - def-axiom-of-choice
  - thm-morse-sard-for-smooth-manifolds
  - cor-dimension-of-image-plus-generic-fibre
  - lem-zero-dimensional-classical-variety-finite
  - thm-jacobian-criterion-affine-variety
  - thm-nonempty-regular-locus-reduced-variety-perfect-field
  - thm-holomorphic-implicit-function-theorem
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Goresky and MacPherson, Stratified Morse Theory, Part I section 2.2.3–2.2.4"
      url: https://www.math.ias.edu/~goresky/pdf/SMT.pdf
---

## Statement

Assume AC. Let $Z\subset\mathbb C^N$ be closed algebraic and let $\mathcal S$ be a finite Whitney stratification by smooth locally closed complex algebraic strata. In every prescribed nonempty real open subset of the parameter space $\mathbb C^N$, there exists $a$ such that $\phi_a(z)=\|z-a\|^2$ is a proper strongly plurisubharmonic exhaustion of $Z$, its restriction to each stratum has only nondegenerate critical points, there are finitely many such points in total, and at every critical point $p\in S$ its ambient differential is nonzero on every limiting tangent space of another stratum approaching $p$. Multiple critical points may have equal critical values; the Statement makes no unsupported distinct-value assertion. The same conclusion applies on any closed affine complex algebraic embedding of $Z$.

## Facts & Assumptions

**Given:** the embedded variety, finite algebraic Whitney strata and AC assumption.

[F1] The published [[thm-morse-sard-for-smooth-manifolds]] makes critical values of smooth manifold maps null. Its countable-choice assumption follows from the stated AC.

[F2] The published [[cor-dimension-of-image-plus-generic-fibre]] gives the generic fiber dimension separately on irreducible components; [[lem-zero-dimensional-classical-variety-finite]] makes each zero-dimensional classical fiber finite. These are used over $\mathbb C$ with their stated AC assumption.

[F3] Algebraic conormal Jacobian charts and the terminating smooth-locus decomposition use [[thm-jacobian-criterion-affine-variety]], [[thm-nonempty-regular-locus-reduced-variety-perfect-field]] and [[thm-holomorphic-implicit-function-theorem]] over the perfect field $\mathbb C$. These give actual complex manifold charts on the dense regular loci.

## Proof

1.1 For a smooth stratum $S$ of complex dimension $s$, its algebraic conormal bundle $C_S\subset T^*\mathbb C^N$ has complex dimension $N$. Indeed on a Jacobian chart the independent differentials of local equations span its conormal fibers, of rank $N-s$, giving a locally trivial algebraic bundle. On each irreducible component, its closure has dimension $N$, and its boundary has dimension at most $N-1$: a chain of irreducible closed subsets in a proper closed subset can be extended by the containing irreducible variety. Let $D$ be the finite union of these conormal boundaries. If a covector $\lambda$ kills a limiting tangent plane $Q=\lim T_{p_m}R$ at a point outside $R$, then it lies in that boundary: orthogonally project $\lambda$ onto the annihilators of $T_{p_m}R$, obtaining covectors converging to $\lambda$. Thus every bad limiting-tangent covector lies in the complex algebraic set $D$, of complex dimension at most $N-1$. [given, F2, F3, construct]

1.2 Consider the real critical incidence $I_S=\{(a,z):z\in S,\ d(\phi_a|S)_z=0\}$. Differentiation in $a$ surjects onto $T_z^*S$, since every real covector on $T_zS$ extends to one on the ambient Euclidean space. There is also a direct smooth manifold construction, without using an unlisted real implicit-function theorem: $I_S$ is the real normal bundle via $(z,v)\mapsto(a=z+v,z)$ with $v\perp T_zS$. On a stratum coordinate chart let $T$ be the matrix of its tangent basis; the matrix $1-T(T^tT)^{-1}T^t$ is the smooth projection onto the normal space. Project a fixed set of $2N-2s$ vectors that is independent at the chosen point, and shrink the chart so the projections remain independent. Their coefficient coordinates give smooth bundle charts and smooth inverse coefficient maps by the Gram matrix formula. Thus $I_S$ has real dimension $2s+(2N-2s)=2N$. In local stratum coordinates its tangent equation is $H_zv+B_z\delta a=0$, where $H_z$ is the Hessian of $\phi_a|S$ and $B_z$ is the preceding surjective parameter derivative. The differential of $I_S\to\mathbb C^N$, $(a,z)\mapsto a$, has kernel $\{(0,v):H_zv=0\}$. Since its source and target have equal dimension, it is surjective exactly when $H_z$ is invertible. Hence [F1] makes the parameters with degenerate stratum critical points null. Finite union over $S$ preserves nullity. [F1, construct]

2.1 Identify real ambient covectors with complex covectors by $\lambda\mapsto\operatorname{Re}\lambda$. The map $(a,z)\mapsto(z,d\phi_a(z))$ from $\mathbb C^N\times\mathbb C^N$ to the real cotangent bundle is a real smooth diffeomorphism: $d\phi_a(z)$ is twice the real covector corresponding to $\overline{z-a}$. Therefore the inverse image of each smooth algebraic stratum of $D$ has real dimension at most $2N-2$. Projecting to the $a$ coordinate has only critical points because its source dimension is smaller than $2N$; [F1] makes its image null. A finite algebraic stratification of $D$ is obtained by successively taking each component's smooth locus and its lower-dimensional singular complement, which terminates by dimension decrease. The finite union of these null images is null. Outside it, $d\phi_a$ kills no forbidden limiting tangent space. [F1, F3, step 1.1, construct]

3.1 Finiteness of the critical set uses algebraic geometry rather than an unproved finiteness claim for real analytic sets. Write $\overline S$ here for the variety obtained by conjugating the equations of $S$, and complexify the real distance to $F_{u,v}(z,w)=\sum_{k=1}^N(z_k-u_k)(w_k-v_k)$ on $S\times\overline S$. Its complex critical incidence over the parameter space $\mathbb C^N\times\mathbb C^N$ is isomorphic to the algebraic conormal bundle of $S\times\overline S$, because the two gradient coefficients are $w-v$ and $z-u$ and uniquely determine $(u,v)$. Each irreducible component of that bundle has dimension $2N$, equal to the parameter dimension. If its projection is dominant, [F2] gives a nonempty open with zero-dimensional, hence finite, fibers. If it is not dominant, avoid its proper closed image closure. Intersect these finitely many parameter opens. The real parameter locus $(u,v)=(a,\bar a)$ is Zariski dense: substituting $a=x+iy$ and $\bar a=x-iy$ turns any polynomial vanishing on it into a polynomial vanishing for every real $(x,y)$, hence the zero polynomial. Every prescribed nonempty real parameter open is also Zariski dense in the conjugate diagonal: a polynomial vanishing there vanishes on a real open box after the invertible substitution $(a,\bar a)=(x+iy,x-iy)$, hence is identically zero by applying the one-variable polynomial identity successively. Therefore its intersection with this nonempty complex Zariski open is a nonempty real open set. A null set cannot contain that open set, so choose a real parameter there outside the null exceptional sets of steps 1.2 and 2.1. Their real stratum critical points are contained in the finite complex fibers just constructed: at $(z,\bar z)$ the real diagonal tangent vectors $(t,\bar t)$ span $T_zS\times T_{\bar z}\overline S$ over $\mathbb C$, and the complex differential of $F$ on them is precisely the real differential of $\phi_a$. Vanishing on that real form therefore implies vanishing on the whole complex tangent. [F2, step 2.1, step 1.2, construct]

4.1 Choose such an $a$. The Euclidean square distance is bounded below and proper on the closed subset $Z$, and its ambient Levi form is the positive definite Euclidean Hermitian form. Its restriction to every positive-dimensional complex stratum is therefore strongly plurisubharmonic. Steps 1.2–3.1 give exactly the limiting-tangent, Hessian and finiteness conclusions. Zero-dimensional strata contribute their finitely many points, covered by the same incidence construction; the empty variety has no critical points. No stratified product theorem or complex-link theorem was used to establish this exhaustion. [step 2.1, step 1.2, step 3.1] ∎

## Proof boundary

This supplies the actual generic finite-critical affine exhaustion required by the Morse route, conditional only on the stated finite algebraic Whitney stratification and published finite-dimensional suppliers. It does not prove the stratified Morse product or identify the normal pair with a cone on the complex link. Those remain separate local constructions. Simultaneous equal critical values are handled by disjoint critical neighborhoods in that local construction.
