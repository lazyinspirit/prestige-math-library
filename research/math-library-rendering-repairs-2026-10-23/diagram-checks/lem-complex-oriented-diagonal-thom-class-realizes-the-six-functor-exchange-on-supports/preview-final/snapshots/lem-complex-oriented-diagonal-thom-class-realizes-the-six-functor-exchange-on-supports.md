---
id: lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports
kind: lemma
title: "Complex-oriented diagonal Thom classes realize exceptional exchange on supports"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 20
deps: [def-axiom-of-choice, def-euler-class-by-zero-section-pullback-of-the-thom-class,
       lem-closed-immersion-proper, thm-thom-isomorphism-for-oriented-vector-bundles,
       thm-external-product-and-whitney-sum-formulas-for-thom-classes,
       lem-analytic-six-operation-support-and-trace-calculus,
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
    - title: "V. Ginzburg, Geometric methods in the representation theory of Hecke algebras and quantum groups, arXiv:math/9802004v3; 1997 Montreal lectures (57-page PDF)"
      url: "https://arxiv.org/pdf/math/9802004"
    - title: "M. Varagnolo and E. Vasserot, Canonical bases and KLR-algebras, arXiv:0901.3992 (complete article)"
      url: "https://arxiv.org/pdf/0901.3992"
    - title: "Y. Varshavsky, Lefschetz-Verdier trace formula, arXiv:math/0505564 (complete article)"
      url: "https://arxiv.org/pdf/math/0505564"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) as inherited from the analytic six-functor and equivariant constructible suppliers below. In the analytic constructible six-functor setting, let $M$ be the analytic space of a smooth complex algebraic variety of pure dimension $d$, and let $q:A\to M$, $u:B\to M$ be morphisms of complex algebraic varieties with fiber product $T=A\times_MB$; write $a:T\to A$ and $b:T\to B$ for the projections, so that $qa=ub$ and the square is Cartesian. Assume the supplied duality construction has localization, tensor–Hom adjunction, coherent exchange maps, and the smooth orientation normalized by the positive compactly supported generator on a complex coordinate ball ([[thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace]], [[thm-verdier-duality-on-oriented-stratified-complex-varieties]]), with its equivariant constructible form supplied by [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]]. The refined pullback of dualizing classes on the support $A\times B$ by the ambient middle diagonal $M\to M\times M$ is the operation induced by the mate $\mathrm{ex}:a^*q^!\to b^!u^*$ of the base-change morphism $u^*q_!\to b_!a^*$ of this square, after tensor evaluation and dualizing transitivity. It equals cap product with the positive middle-diagonal Thom class and lowers Borel–Moore degree by $2d$, even for singular, nontransverse supports. Ordered iterated diagonals are compatible with composed refined operations. For a complex vector bundle, zero-section self-intersection is cap product with its oriented Euler class.

## Facts & Assumptions

**Given:** the Axiom of Choice; a coefficient field $k$; a smooth complex algebraic variety $M$ of pure dimension $d$ with its analytic topology; morphisms of complex algebraic varieties $q:A\to M$ and $u:B\to M$; the fiber product $T=A\times_MB$ with its projections $a:T\to A$, $b:T\to B$; the diagonal $\Delta:M\to M\times M$; the map $F=(q,u):A\times B\to M\times M$; and the closed embedding $\theta:T\hookrightarrow A\times B$ of the support, which realizes $T$ as $F^{-1}(\Delta(M))$. For the equivariant assertions, additionally impose the characteristic-zero, product-general-linear-group and equivariance hypotheses of [F3].

[F1] Assume AC. In the analytic constructible setting of [[thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace]], the six operations $f^*,Rf_*,Rf_!,f^!,\otimes_k^L,R\mathcal Hom$ have their three adjunctions, composition and identity comparisons, ordinary and extraordinary proper base change, the projection formula, support localization, dualizing transitivity and trace, all coherent under Cartesian pasting; a proper $f$ satisfies $Rf_!=Rf_*$; and all of this commutes with extension of coefficients. In addition, [[lem-analytic-six-operation-support-and-trace-calculus]] supplies the canonical Cartesian proper-support exchange $u^*Rq_!\simeq Rb_!a^*$ for arbitrary $q$, without a properness assumption on $q$ (Proof, step 1.2); its locally compact and uniform fibre-dimension hypotheses hold here by the analytic duality supplier (Proof, step 1.1). This supplies the localization triangle of a closed embedding with open complement and the coherent exchange morphisms used below.

[F2] Assume AC. On a separated finite-type complex algebraic variety the constructible Verdier dualizing object is $\omega_X=a_X^!k$, duality is involutive, and on a smooth complex $d$-variety the complex orientation normalizes $\omega_X\simeq k_X[2d]$, the normalization being fixed by the positive compactly supported generator on a complex coordinate ball ([[thm-verdier-duality-on-oriented-stratified-complex-varieties]]).

[F3] Assume AC, that $k$ has characteristic zero, and that a product $G$ of complex general linear groups acts algebraically. The same six-operation contract, with the normalized dualizing object satisfying $\omega_X^G|_X=\omega_X$ and $\omega_X^G\simeq k_X[2d]$ for smooth complex $d$-dimensional $X$, holds in the equivariant bounded constructible category $D^b_{G,c}$ built from that normalized object, with the same Cartesian pasting and the same properness clause ([[thm-constructible-six-functors-proper-base-change-and-verdier-duality]]).

[F4] Every closed immersion of schemes is finite, hence proper; the empty immersion is included ([[lem-closed-immersion-proper]]). Applied to the diagonal $\Delta$ and the support embedding $\theta$, this makes both proper, so their $!$ and $*$ pushforwards agree and proper base change applies along them.

[F5] On numerable oriented bundles over paracompact Hausdorff bases of CW type, normalized Thom classes exist uniquely and give the Thom isomorphism ([[thm-thom-isomorphism-for-oriented-vector-bundles]]). Their ordered products give the Thom class of the direct sum ([[thm-external-product-and-whitney-sum-formulas-for-thom-classes]]). The Euler class is the zero-section pullback after the relative-to-absolute map ([[def-euler-class-by-zero-section-pullback-of-the-thom-class]]).

[A1] The Axiom of Choice is inherited through [F1]–[F4] and the Thom/Euler suppliers of [F5]; the normal-chart orientation calculation, adjunction comparison and cap bookkeeping introduce no further choice ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Purity and the supported Thom morphism. Put $Y=M\times M$. By [F1] and [F2], $\Delta^!k_Y=\Delta^!\omega_Y[-4d]=\omega_M[-4d]=k_M[-2d]$. The positive orientation identifies the identity of $k_M[-2d]$ with the Thom class in $H^{2d}_{\Delta(M)}(Y;k)=\operatorname{Hom}(k_M,\Delta^!k_Y[2d])$. Its adjoint is the purity counit $g_\Delta:\Delta_*k_M[-2d]\to k_Y$, equivalently $\Delta_*k_M\to k_Y[2d]$. In a complex normal ball this is the positive generator of the relative disk pair; complex chart transitions preserve that generator. This fixes a global supported morphism through the orientation isomorphism and its counit, rather than inferring equality of arbitrary global maps from their restrictions to balls. [F1, F2, given, construct]

2.1 Pullback and cap product on arbitrary supports. Put $S=A\times B$. Proper base change along $F=(q,u)$ identifies $F^*\Delta_*k_M[-2d]$ with $\theta_*k_T[-2d]$, so $F^*g_\Delta$ gives $g_F:\theta_*k_T[-2d]\to k_S$. For a dualizing class $c:k_S\to\omega_S[-n]$, compose $c\circ g_F$ and use $\theta_*\dashv\theta^!$ and $\theta^!\omega_S=\omega_T$. The resulting map $k_T\to\omega_T[2d-n]$ is a Borel–Moore class of degree $n-2d$ on $T$. This defines the supported cap operation even if $T$ is singular or has excess dimension; no purity of $\theta$ is asserted. The external product uses $\omega_A\boxtimes\omega_B=\omega_S$: on the supplied finite local product cochain models, compact-support cochains tensor, and their finite-dimensional duals tensor as well, giving this canonical comparison and its restriction compatibility. [F1, F2, F4, step 1.1, construct]

3.1 Comparison with the exchange mate. For a constructible $C$ on $M$, the mate is the adjoint of $b_!a^*q^!C\xrightarrow{\mathrm{BC}^{-1}}u^*q_!q^!C\xrightarrow{u^*\epsilon_q}u^*C$, where the arbitrary-map proper-support exchange of [F1] supplies $\mathrm{BC}:u^*q_!\xrightarrow{\sim}b_!a^*$ and $\epsilon_q$ is the exceptional counit. To identify its dualizing evaluation with step 2.1, factor $q$ as its graph $\Gamma_q:A\hookrightarrow A\times M$ followed by the second projection. The graph is the pullback of $\Delta$ along $(q,\operatorname{id}_M):A\times M\to M\times M$; its supported orientation map is that pullback of $g_\Delta$. Base change of the graph along $\operatorname{id}_A\times u$ is exactly $\theta$, so its supported orientation map after this second pullback is $g_F$. For the product projection, tensor–Hom evaluation with the relative dualizing factor $\omega_A$ computes the counit; this is the finite product cochain evaluation of step 2.1. Composing the graph counit and that evaluation gives $\epsilon_q$ by the composition-of-counits identity in [F1]. Cartesian pasting therefore makes its base-changed composite exactly $u^*\epsilon_q\circ\mathrm{BC}^{-1}$ above. Taking adjoints and using $q^!k_M=\omega_A[-2d]$ proves that the exchange, paired with the second dualizing class by tensor evaluation, is $c\circ g_F$ under $\theta_*\dashv\theta^!$. Every map retains support on $T$ throughout this factorization. [F1, F2, step 1.1, step 2.1]

4.1 Ordered iterated diagonals. For two ordered smooth middle factors the normal model of the product diagonal is the ordered direct sum of the two complex normal bundles, and on the product of normal coordinate disks the relative cup product of the two positive generators evaluates to $+1$ on the ordered product disk, which is the positive generator of the direct sum; local uniqueness as in step 1.1 and base-change mate pasting as in steps 2.1 and 3.1 therefore give the composed refined operation on every support, in the given order and without an interchange of factors. All real degrees involved are even, so reordering the two complex summands introduces no sign: the only possible sign is $(-1)^{(2d_1)(2d_2)}=+1$. Under the additional hypotheses of [F3], the equivariant form holds verbatim, which supplies the same localization, exchange and normalized orientation clauses in $D^b_{G,c}$, with $\omega_X^G|_X=\omega_X$ rather than a quotient-stack shift. [F1, F3, step 1.1, step 2.1, step 3.1]

5.1 Zero sections and Euler classes. Let $V\to X$ have complex rank $c$ and zero section $s$. In a bundle chart the normal pair is the product with $(\mathbb C^c,\mathbb C^c\setminus\{0\})$, so the same relative cochain calculation gives $s^!k_V=k_X[-2c]$ and its positive supported counit; here $c$ is the bundle rank, independently of $\dim X$. These local orientations glue because the complex transition matrices preserve the positive fiber generator. On bases in the Thom scope of [F5], this supported class is the normalized Thom class by uniqueness. Pulling its relative-to-absolute image back by $s$ gives $e(V)$ by [F5]. Applying the supported cap construction of step 2.1 after $s_*$ restricts that class to the zero section; the projection formula thus gives $s^!s_*z=e(V)\cap z$. The same counit and base-change identities give its proper-pushforward and refined-pullback compatibility; the equivariant version requires the additional hypotheses of [F3]. AC is inherited through the stated suppliers, including the Thom supplier [F5]. [A1, F1, F3, F5, step 2.1, construct] ∎

## Remarks

The fiber-product square defining the exchange mate is Cartesian:

```tikzcd
\begin{tikzcd}[column sep=large, row sep=large, scale=1.5, transform shape]
T=A\times_M B \arrow[r,"a"] \arrow[d,"b"'] & A \arrow[d,"q"] \\
B \arrow[r,"u"'] & M
\end{tikzcd}
```

The graph factorization in step 3.1 fits into the following two Cartesian squares. Here $\Gamma_q(x)=(x,q(x))$, $\theta(x,y)=(x,y)$, and $\Delta(m)=(m,m)$.

```tikzcd
\begin{tikzcd}[column sep=large, row sep=large, scale=1.5, transform shape]
T \arrow[r,"a"] \arrow[d,hook,"\theta"'] & A \arrow[r,"q"] \arrow[d,hook,"\Gamma_q"] & M \arrow[d,hook,"\Delta"] \\
A\times B \arrow[r,"\operatorname{id}_A\times u"'] & A\times M \arrow[r,"{(q,\operatorname{id}_M)}"'] & M\times M
\end{tikzcd}
```

The bottom composite is $F=(q,u)$, while the top composite is $qa=ub$. Thus the outer rectangle identifies $T$ with $F^{-1}(\Delta(M))$, as used in step 2.1. Pulling the supported morphism $g_\Delta$ first through the right square and then through the left gives $g_F$ by the proper-base-change identifications in steps 2.1 and 3.1. The factorization of $q$ itself is $q=\operatorname{pr}_2\circ\Gamma_q$. These diagrams record the supports and maps only; the orientation, adjunction and counit arguments remain those of the proof, independently of the illustrations.
