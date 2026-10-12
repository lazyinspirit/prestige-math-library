---
id: lem-complex-oriented-diagonal-thom-class-realizes-the-six-functor-exchange-on-supports
kind: lemma
title: "Complex-oriented diagonal Thom classes realize exceptional exchange on supports"
status: draft
origin: session
deps: [thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace, thm-constructible-six-functors-proper-base-change-and-verdier-duality]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Ginzburg, Geometric methods in representation theory"
      url: "https://arxiv.org/abs/math/9802004"
    - title: "Varagnolo–Vasserot, Canonical bases and KLR-algebras"
      url: "https://arxiv.org/abs/0901.3992"
    - title: "Varshavsky, Lefschetz–Verdier trace formula"
      url: "https://arxiv.org/abs/math/0505564"
---

## Statement

In the analytic constructible six-functor setting, let $M$ be a smooth complex manifold of pure dimension $d$, and let $A\to M$, $B\to M$ be algebraic maps whose fiber product is $T$. Assume the supplied duality construction has localization, tensor–Hom adjunction, coherent exchange maps, and the smooth orientation normalized by the positive compactly supported generator on a complex coordinate ball. The refined pullback of dualizing classes on the support $A\times B$ by the ambient middle diagonal $M\to M\times M$ is the operation induced by the mate $a^*q^!\to b^!u^*$ of $b_!a^*\to u^*q_!$, after tensor evaluation and dualizing transitivity. It equals cap product with the positive middle-diagonal Thom class and lowers Borel–Moore degree by $2d$, even for singular, nontransverse supports. Ordered iterated diagonals are compatible with composed refined operations. For a complex vector bundle, zero-section self-intersection is cap product with its oriented Euler class.

## Facts & Assumptions

**Given:** the objects, maps and positively normalized local duality construction in the Statement.

[F1] [[thm-analytic-sheaf-six-operations-have-coherent-base-change-projection-and-trace]] and [[thm-constructible-six-functors-proper-base-change-and-verdier-duality]] supply localization, duality, tensor–Hom adjunction, the smooth orientation and coherent base-change mates.

## Proof

1.1 If $i:M\hookrightarrow M\times M$ is the diagonal, a tubular normal chart has normal pair $(\mathbb C^d,\mathbb C^d\setminus\{0\})$. Its relative cohomology is $k$ in degree $2d$ and zero in other degrees, by the long exact sequence of the sphere and the contraction of the disk. Hence $i^!k_{M\times M}=k_M[-2d]$ under the positive local generator. The orientation sheaf has trivial transition signs: a complex transition has positive real determinant. Since the exceptional restriction is concentrated in one cohomological degree, compatible local positive generators specify its global isomorphism; there is no higher-degree gluing ambiguity in this orientation map. This is precisely the Thom class of the complex normal bundle $TM$. [F1, given, construct]

2.1 For a closed embedding $z:Z\hookrightarrow N$, the injective model $z^!=z^{-1}\Gamma_Z$ and its localization triangle identify $R\operatorname{Hom}(z_*k_Z,F)$ with $R\Gamma_Z(F)$. Thus on a closed support in an ambient manifold exceptional restriction is computed by relative sections supported on that support. Tensor evaluation therefore realizes cup/cap product of supported classes as the tensor–Hom evaluation map. Pull the orientation map of step 1.1 back to $A\times B$ by the support square. Applying tensor–Hom adjunction to this supported product gives the mate exchange: its left adjoint is the base-change map $b_!a^*\to u^*q_!$, followed by evaluation. Conversely taking the right adjoint of this base-change evaluation gives the pulled-back supported orientation map. This is an equality of the two explicit adjoint maps, not an inference from equality of their values after forgetting support. Thus cap product with the Thom class and the exceptional exchange agree, without a transversality assertion on the support. [F1, step 1.1]

3.1 For two ordered diagonals the normal model is the ordered direct sum of their complex normal bundles. On the product of normal coordinate disks, relative cup product of the two positive generators evaluates to $+1$ on the ordered product disk. This proves its equality with the positive generator of the sum. Local uniqueness as in step 1.1 and base-change mate pasting as in step 2.1 give the composed operation on every support. For a vector-bundle zero section its pullback of the Thom class is by definition the Euler class, so applying zero-section refined pullback to zero-section pushforward caps with this class. These identities use the real degrees $2d$, all even, so ordering the normal summands introduces no additional sign. [F1, step 1.1, step 2.1] ∎
