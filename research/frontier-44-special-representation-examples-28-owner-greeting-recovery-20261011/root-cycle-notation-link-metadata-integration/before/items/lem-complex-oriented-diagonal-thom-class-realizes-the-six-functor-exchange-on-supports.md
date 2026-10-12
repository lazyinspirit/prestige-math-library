---
id: lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports
kind: lemma
title: "Complex-oriented diagonal Thom classes realize exceptional exchange on supports"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 21
deps: [def-axiom-of-choice, lem-closed-immersion-proper,
       thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace,
       thm-constructible-six-functors-proper-base-change-and-verdier-duality,
       thm-verdier-duality-on-oriented-stratified-complex-varieties]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "V. Ginzburg, Geometric methods in representation theory, arXiv:math/9802004; lecture notes for the 1997 summer school (complete 30-page PDF)"
      url: "https://arxiv.org/pdf/math/9802004"
    - title: "M. Varagnolo and E. Vasserot, Canonical bases and KLR-algebras, arXiv:0901.3992 (complete article)"
      url: "https://arxiv.org/pdf/0901.3992"
    - title: "Y. Varshavsky, Lefschetz-Verdier trace formula, arXiv:math/0505564 (complete article)"
      url: "https://arxiv.org/pdf/math/0505564"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) as inherited from the analytic six-functor and equivariant constructible suppliers below. In the analytic constructible six-functor setting, let $M$ be the analytic space of a smooth complex algebraic variety of pure dimension $d$, and let $q:A\to M$, $u:B\to M$ be morphisms of complex algebraic varieties with fiber product $T=A\times_MB$; write $a:T\to A$ and $b:T\to B$ for the projections, so that $qa=ub$ and the square is Cartesian. Assume the supplied duality construction has localization, tensor–Hom adjunction, coherent exchange maps, and the smooth orientation normalized by the positive compactly supported generator on a complex coordinate ball ([[thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace]], [[thm-verdier-duality-on-oriented-stratified-complex-varieties]]), with its equivariant constructible form supplied by [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]]. The refined pullback of dualizing classes on the support $A\times B$ by the ambient middle diagonal $M\to M\times M$ is the operation induced by the mate $\mathrm{ex}:a^*q^!\to b^!u^*$ of the base-change morphism $u^*q_!\to b_!a^*$ of this square, after tensor evaluation and dualizing transitivity. It equals cap product with the positive middle-diagonal Thom class and lowers Borel–Moore degree by $2d$, even for singular, nontransverse supports. Ordered iterated diagonals are compatible with composed refined operations. For a complex vector bundle, zero-section self-intersection is cap product with its oriented Euler class.

## Facts & Assumptions

**Given:** the Axiom of Choice; a coefficient field $k$; a smooth complex algebraic variety $M$ of pure dimension $d$ with its analytic topology; morphisms of complex algebraic varieties $q:A\to M$ and $u:B\to M$; the fiber product $T=A\times_MB$ with its projections $a:T\to A$, $b:T\to B$; the diagonal $\Delta:M\to M\times M$; the map $F=(q,u):A\times B\to M\times M$; and the closed embedding $\theta:T\hookrightarrow A\times B$ of the support, which realizes $T$ as $F^{-1}(\Delta(M))$.

[F1] Assume AC. In the analytic constructible setting of [[thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace]], the six operations $f^*,Rf_*,Rf_!,f^!,\otimes_k^L,R\mathcal Hom$ have their three adjunctions, composition and identity comparisons, ordinary and extraordinary proper base change, the projection formula, support localization, dualizing transitivity and trace, all coherent under Cartesian pasting; a proper $f$ satisfies $Rf_!=Rf_*$; and all of this commutes with extension of coefficients. This supplies the localization triangle of a closed embedding with open complement and the coherent exchange morphisms used below.

[F2] Assume AC. On a separated finite-type complex algebraic variety the constructible Verdier dualizing object is $\omega_X=a_X^!k$, duality is involutive, and on a smooth complex $d$-variety the complex orientation normalizes $\omega_X\simeq k_X[2d]$, the normalization being fixed by the positive compactly supported generator on a complex coordinate ball ([[thm-verdier-duality-on-oriented-stratified-complex-varieties]]).

[F3] Assume AC, that $k$ has characteristic zero, and that a product $G$ of complex general linear groups acts algebraically. The same six-operation contract, with the normalized dualizing object satisfying $\omega_X^G|_X=\omega_X$ and $\omega_X^G\simeq k_X[2d]$ for smooth complex $d$-dimensional $X$, holds in the equivariant bounded constructible category $D^b_{G,c}$ built from that normalized object, with the same Cartesian pasting and the same properness clause ([[thm-constructible-six-functors-proper-base-change-and-verdier-duality]]).

[F4] Every closed immersion of schemes is finite, hence proper; the empty immersion is included ([[lem-closed-immersion-proper]]). Applied to the diagonal $\Delta$ and the support embedding $\theta$, this makes both proper, so their $!$ and $*$ pushforwards agree and proper base change applies along them.

[A1] The Axiom of Choice is consumed exactly through [F1], [F2] and [F3], which declare it for their injective-resolution, duality and equivariant-descent constructions; the normal-chart orientation computation, the adjunction comparison and the cap-product bookkeeping below are choice-free ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Purity of the diagonal and its positive Thom class. By [F2] one has $\omega_{M\times M}=k_{M\times M}[4d]$ and $\omega_M=k_M[2d]$, and dualizing transitivity in [F1] gives $\Delta^!\omega_{M\times M}=\omega_M$; hence $\Delta^!k_{M\times M}=\Delta^!\omega_{M\times M}[-4d]=\omega_M[-4d]=k_M[-2d]$. The exceptional restriction along the diagonal is therefore concentrated in the single cohomological degree $2d$, and the normalization of [F2] singles out its generator: in a complex normal chart the pair is $(\mathbb C^d,\mathbb C^d\setminus\{0\})$ and the positive compactly supported generator of the ball evaluates to $+1$ on the positively oriented relative class of degree $2d$, so the local generators are uniquely determined and no higher-degree ambiguity exists. A complex-linear chart transition has positive real determinant, so the local positive generators glue to a global class; the resulting class $\tau_\Delta:k_{M\times M}\to\Delta_*k_M[2d]$ is the positive middle-diagonal Thom class, and the isomorphism $\Delta^!k_{M\times M}\cong k_M[-2d]$ is the associated orientation. [F1, F2, given, construct]

2.1 The pulled-back Thom class on the support. By [F4] the diagonal is proper, and the square relating $F=(q,u)$, $\Delta$, $\theta$ and the projection $\gamma:T\to M$ is Cartesian by construction of $T=A\times_MB$. Proper base change of [F1] therefore identifies $F^*\Delta_*k_M[2d]\cong\theta_*\gamma^*k_M[2d]=\theta_*k_T[2d]$; pushing the Thom class of step 1.1 through this identification gives a global class $\tau_F:k_{A\times B}\to\theta_*k_T[2d]$ supported on $T$. Capping a Borel–Moore class of $A\times B$ with $\tau_F$ is defined for arbitrary closed supports: it uses only the ambient orientation of the smooth diagonal and the support of $\tau_F$, makes no transversality assertion about $T$ inside $A\times B$, and lowers Borel–Moore degree by exactly $2d$ because $\tau_F$ has cohomological degree $2d$. [F1, F4, step 1.1, construct]

3.1 Supported evaluation identifies the refined operation with the exchange mate. Let $\theta:T\hookrightarrow A\times B$ be the closed support embedding with open complement $j$, so that the localization clause of [F1] gives the exact triangle $\theta_!\theta^!\to\operatorname{id}\to j_*j^*$ (equivalently $j_!j^!\to\operatorname{id}\to\theta_*\theta^*$). Applying $R\operatorname{Hom}(k_{A\times B},-)$ and using the adjunction $\theta^*\dashv\theta_*$ identifies $R\operatorname{Hom}(\theta_*k_T,G)$ with the relative sections $R\Gamma_T(G)$: on a closed support, exceptional restriction is computed by sections supported there, and tensor evaluation realizes the cup/cap product of supported classes as the tensor–Hom evaluation map. Running the two external classes through the Cartesian square with maps $(a,b;q,u)$ exhibits the base-change morphism $u^*q_!\to b_!a^*$ and its mate $\mathrm{ex}:a^*q^!\to b^!u^*$; by construction its defining adjunction equalities are precisely the evaluation of $\tau_F$ under tensor–Hom adjunction together with dualizing transitivity. The agreement is thus an equality of the two explicit adjoint maps, not an inference from equality after forgetting supports, and it uses no transversality of the support. [F1, F2, step 1.1, step 2.1]

4.1 Ordered iterated diagonals. For two ordered smooth middle factors the normal model of the product diagonal is the ordered direct sum of the two complex normal bundles, and on the product of normal coordinate disks the relative cup product of the two positive generators evaluates to $+1$ on the ordered product disk, which is the positive generator of the direct sum; local uniqueness as in step 1.1 and base-change mate pasting as in steps 2.1 and 3.1 therefore give the composed refined operation on every support, in the given order and without an interchange of factors. All real degrees involved are even, so reordering the two complex summands introduces no sign: the only possible sign is $(-1)^{(2d_1)(2d_2)}=+1$. The equivariant form holds verbatim by [F3], which supplies the same localization, exchange and normalized orientation clauses in $D^b_{G,c}$, with $\omega_X^G|_X=\omega_X$ rather than a quotient-stack shift. [F1, F3, step 1.1, step 2.1, step 3.1]

5.1 Zero sections and Euler classes. Let $\pi:V\to X$ be a complex vector bundle of rank $c$ with zero section $s:X\hookrightarrow V$; the normal bundle of $s$ is $V$ itself, and steps 1.1 and 2.1 apply with $M=X$, $d=c$. Pulling the positive Thom class back along the zero section gives the oriented Euler class $e(V)\in H^{2c}(X;k)$, by definition the zero-section restriction of the complex-oriented Thom class; consequently applying the refined zero-section pullback after the zero-section pushforward is cap product with $e(V)$, compatibly with the orientation normalization and with proper pushforward and Cartesian pullback by the projection formula and trace/base-change mates of [F1]. This is the standard oriented Euler class attached to the given complex orientation; on CW-type approximations it agrees with the top Chern class by the published Euler-to-top-Chern identification used later on this page. All constructions are those of steps 1.1, 2.1, 3.1 and 4.1 with the declared suppliers, and AC is used only through [A1]. [A1, F1, F3, step 1.1, step 2.1, construct] ∎
