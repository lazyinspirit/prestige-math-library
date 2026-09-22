---
id: thm-chern-character-is-a-natural-ring-homomorphism-on-k-zero
kind: theorem
title: Chern character is a natural ring homomorphism on K-zero
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [def-chern-character-of-a-complex-vector-bundle, thm-complex-splitting-principle-with-integral-injective-pullback, thm-naturality-normalization-and-whitney-sum-for-chern-classes, prop-first-chern-class-of-tensor-dual-and-conjugate-lines, def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles, def-whitney-sum-monoid-of-complex-vector-bundles, def-complex-topological-k-zero-by-grothendieck-completion, def-grothendieck-ring-structure-and-rank-map, def-axiom-of-choice]
proof_strategy: direct
axiom_strength: "ZF + AC; inherited from the splitting and K-theory suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 24 section 4"
      url: https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf
      locator: "Chern character is a ring homomorphism, printed pp.211-212"
    - title: "Hatcher, Vector Bundles & K-Theory, section 4.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Propositions 4.2-4.5 on the Chern character, printed pp.109-111"
---

## Statement

Assume AC. Let $X$ be a finite CW complex. The Chern character
$\operatorname{ch}$ of [[def-chern-character-of-a-complex-vector-bundle]] is
natural for pullbacks, additive over Whitney sums and multiplicative over
tensor products, and it extends uniquely through the Grothendieck completion
to a unital ring homomorphism
$$\operatorname{ch}:K^0(X)\longrightarrow H^{\mathrm{even}}(X;\mathbb Q),$$
whose value on a bundle class is $\operatorname{ch}(E)$. For finite CW
complexes $X,Y$ the external-product formula
$$\operatorname{ch}(a\times b)=\operatorname{ch}(a)\times\operatorname{ch}(b)$$
holds for all $a\in K^0(X)$, $b\in K^0(Y)$, where the external products are
the K-theory and cohomology external products.

## Facts & Assumptions

[A1] The Axiom of Choice is assumed, exactly as inherited from the splitting and K-theory suppliers ([[def-axiom-of-choice]]).

[F1] $\operatorname{ch}_k(E)=\tfrac1{k!}N_k(c_1(E),\dots,c_n(E))$ is characterized by $q^*\operatorname{ch}_k(E)=\tfrac1{k!}\sum_it_i^k$ on the flag bundle, and $\operatorname{ch}_0(E)=\operatorname{rank}E$, $\operatorname{ch}(\varepsilon^1)=1$ ([[def-chern-character-of-a-complex-vector-bundle]]).

[F2] Finitely many bundles have a common splitting space over which each splits into complex lines and whose pullback is injective on integral cohomology ([[thm-complex-splitting-principle-with-integral-injective-pullback]]). Rational injectivity is not inferred from that integral interface. Instead, the construction in [[def-chern-character-of-a-complex-vector-bundle]] proves directly, by rational Leray--Hirsch at every projective stage over a CW-type base, that each stage pullback is injective on rational cohomology. Applying that same stagewise argument to the finite common flag tower makes its composite pullback rationally injective.

[F3] Chern classes are natural and multiplicative, and $c_1(L\otimes M)=c_1(L)+c_1(M)$ for complex lines ([[thm-naturality-normalization-and-whitney-sum-for-chern-classes]], [[prop-first-chern-class-of-tensor-dual-and-conjugate-lines]]).

[F4] The tensor product of complex bundles distributes over Whitney sums, and the pullback of a bundle is formed by pulling back transition functions ([[def-whitney-sum-tensor-dual-hom-and-exterior-power-bundles]]).

[F5] $\operatorname{Vect}_{\mathbb C}(X)$ is the commutative monoid of isomorphism classes of finite-rank complex bundles under Whitney sum, and $K^0(X)$ is its Grothendieck group, universal for additive maps into abelian groups; tensor product makes $K^0(X)$ a commutative ring with unit $[\varepsilon^1]$ ([[def-whitney-sum-monoid-of-complex-vector-bundles]], [[def-complex-topological-k-zero-by-grothendieck-completion]], [[def-grothendieck-ring-structure-and-rank-map]]).

## Proof

**Proof technique:** direct.

**Given:** AC and a finite CW complex $X$.

1.1 Work componentwise. A finite CW complex has finitely many path components, and cohomology, bundle isomorphism classes, Whitney sums and tensor products all decompose over this finite disjoint union. On each component where a bundle has positive rank, the splitting principle [F2] applies; on a rank-zero component the character is zero by [F1]. For a pullback $f^*E$, apply this observation on each source component: the flag bundle of the positive-rank restriction is the pullback of the corresponding flag bundle of $E$, and the roots pull back, so $q^*f^*\operatorname{ch}_k(E)=\tfrac1{k!}\sum_i(f^*t_i)^k$. The rational Leray--Hirsch injectivity recorded in [F2], not a coefficient extension of the integral claim, and [F1] give $\operatorname{ch}_k(f^*E)=f^*\operatorname{ch}_k(E)$ on every component. [F1, F2, F4]

2.1 Additivity: on each path component, omit any rank-zero summand and use [F2] to choose a common splitting space for the positive-rank restrictions, with $q^*E=\oplus_iL_i$ and $q^*F=\oplus_jM_j$. Then $q^*(E\oplus F)$ has the combined roots, so $q^*\operatorname{ch}_k(E\oplus F)=\tfrac1{k!}(\sum_it_i^k+\sum_ju_j^k)=q^*(\operatorname{ch}_k(E)+\operatorname{ch}_k(F))$; injectivity gives additivity on that component, and hence on $X$. [F1, F2, step 1.1]

3.1 Multiplicativity: on a component where both bundles have positive rank, use the common splitting of step 2.1. The tensor product splits as $\oplus_{i,j}L_i\otimes M_j$ by [F4], and its roots are $t_i+u_j$ by [F3], so $q^*\operatorname{ch}_k(E\otimes F)=\tfrac1{k!}\sum_{i,j}(t_i+u_j)^k=\sum_{a+b=k}\bigl(\tfrac1{a!}\sum_it_i^a\bigr)\bigl(\tfrac1{b!}\sum_ju_j^b\bigr)=q^*\sum_{a+b=k}\operatorname{ch}_a(E)\operatorname{ch}_b(F)$. The middle identity is the binomial theorem. Injectivity gives multiplicativity. If either rank is zero, both sides vanish by [F1], so the result holds on every component. [F1, F2, F3, F4, step 1.1, algebra]

3.2 Extension to $K^0$. By step 2.1 the map $E\mapsto\operatorname{ch}(E)$ is an additive monoid homomorphism from $\operatorname{Vect}_{\mathbb C}(X)$ to the additive group $H^{\mathrm{even}}(X;\mathbb Q)$; by universality of the Grothendieck completion [F5] it extends uniquely to a group homomorphism $K^0(X)\to H^{\mathrm{even}}(X;\mathbb Q)$, still written $\operatorname{ch}$, with $\operatorname{ch}([E]-[F])=\operatorname{ch}(E)-\operatorname{ch}(F)$. [F5, step 2.1]

4.1 Since $K^0(X)$ is generated as an abelian group by bundle classes, multiplicativity on generators from step 3.1 extends: for representatives $a=[E]-[F]$, $b=[E']-[F']$ the product in $K^0(X)$ is $[E\otimes E'\oplus F\otimes F']-[E\otimes F'\oplus F\otimes E']$ by [F5], and applying additivity (step 2.1) and multiplicativity (step 3.1) to the four summands gives $\operatorname{ch}(ab)=\operatorname{ch}(a)\operatorname{ch}(b)$. The unit is $[\varepsilon^1]$ and $\operatorname{ch}(\varepsilon^1)=1$ by [F1], so $\operatorname{ch}$ is a unital ring homomorphism. [F5, step 2.1, step 3.1]

5.1 External products. For finite CW complexes $X,Y$ and bundle classes $a=[E]\in K^0(X)$, $b=[F]\in K^0(Y)$, the external product is $a\times b=\operatorname{pr}_X^*a\cdot\operatorname{pr}_Y^*b$ in $K^0(X\times Y)$; by steps 1.1 and 4.1, $\operatorname{ch}(a\times b)=\operatorname{pr}_X^*\operatorname{ch}(a)\cdot\operatorname{pr}_Y^*\operatorname{ch}(b)=\operatorname{ch}(a)\times\operatorname{ch}(b)$, which is the stated external formula. [step 1.1, step 4.1]

6.1 Boundary cases. For the trivial bundle $\varepsilon^n$ one has $\operatorname{ch}(\varepsilon^n)=n$ in degree zero, matching the rank; for the zero bundle $\operatorname{ch}(0)=0$. The trivial group $K^0(\varnothing)$ is allowed and the homomorphism is the zero map. The coefficient field $\mathbb Q$ is nonzero and contains $1/k!$ for every $k$, which is why the rational coefficients are required; over $\mathbb Z$ the character is not defined in general. AC enters only through [A1] in the splitting and K-theory suppliers. [A1, F1, F5, step 3.2, step 4.1] ∎

## Source notes

Hatcher's Propositions 4.2-4.5, printed pp. 109-111, and May's Chapter 24 section 4, printed pp. 211-212, establish naturality, additivity, multiplicativity and the extension to $K^0$; the external formula is the standard consequence for the product on $X\times Y$, which is the product of the two projection pullbacks.
