---
id: def-motivic-chern-classes
kind: definition
title: Motivic Chern classes
status: published
domain: mathematics
deps:
  - def-vector-bundle-classes
  - prop-motivic-projective-bundle-formula
  - lem-chern-relation-uniqueness
  - math:def-axiom-of-choice
  - math:thm-projective-bundle-represents-line-quotients
dependency_roles:
  def-vector-bundle-classes: mathematical-premise
  prop-motivic-projective-bundle-formula: mathematical-premise
  lem-chern-relation-uniqueness: mathematical-premise
  math:def-axiom-of-choice: mathematical-premise
  math:thm-projective-bundle-represents-line-quotients: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Jean Fasel and Maria Yakerson, Vector bundles on singular surfaces and
        threefolds
      url: https://arxiv.org/abs/2610.22679v1
      locator: p. 2, displayed motivic Chern classes; p. 8, Section 3, first display
      reading_limits: Read the frozen article extraction at printed p. 2, the
        paragraph beginning with the purpose of the paper and the displayed
        classes, and printed p. 8, Section 3 opening through the displayed maps.
        These passages support the notation and projective-bundle motivation;
        they do not state this complete signed-relation definition. Its detailed
        formulation is an AI alteration using the declared suppliers, and its
        justification is locally authored. No new reading or audit of the
        upstream motivic-cohomology literature is claimed.
      statement: The article displays motivic Chern classes of bundles in
        H^{2i,i}_{mot}(X,Z) on p. 2 and the maps c_i:Vect_n(X) ->
        H^{2i,i}_{mot}(X,Z) at the start of Section 3 on p. 8, attributing their
        construction to the projective bundle formula.
      hypotheses: The displayed article maps use its standing scheme conventions. The
        any-field qcqs scope, Choice and universe assumptions, quotient
        convention, signed monic relation, and rank-zero prescription in this
        formulation are governed by the declared suppliers and explicit local
        conventions.
proof_strategy: direct
dependency_level: 17
---

## Definition
Assume the Axiom of Choice and the suitable universes used by the supplied constructions. Let $k$ be a field, $X$ a quasi-compact quasi-separated $k$-scheme, and $E$ a vector bundle of constant rank $n\geq 0$ on $X$. A vector bundle means a finite locally free $\mathcal O_X$-module. Write $H^{a,b}(X)$ for the supplied integral motivic cohomology $H^{a,b}_{\mathrm{mot}}(X,\mathbb Z)$, with its natural bigraded ring structure.

If $n>0$, let $\pi:\mathbb P_X(E)\to X$ be the projective bundle of rank-one quotients of $E$, let $\mathcal O(1)$ be its tautological quotient line bundle, and put $\xi=c_1(\mathcal O(1))\in H^{2,1}(\mathbb P_X(E))$, using the supplied orientation on line bundles. Define the **motivic Chern classes** $c_i(E)\in H^{2i,i}(X)$ for $1\leq i\leq n$ as the unique coefficients satisfying
$$\xi^n+\sum_{i=1}^{n}(-1)^i\pi^*c_i(E)\,\xi^{n-i}=0.$$
Set $c_0(E)=1\in H^{0,0}(X)$ and $c_i(E)=0$ for $i>n$. For the rank-zero bundle use the same conventions $c_0(E)=1$ and $c_i(E)=0$ for $i>0$, without using a projective bundle. The **total Chern series** of an actual bundle is $c_t(E)=\sum_{i\geq0}c_i(E)t^i$, a polynomial with constant term one.

For every $i\geq0$ this construction defines a map $c_i:\mathrm{Vect}_n(X)\to H^{2i,i}(X)$, where $\mathrm{Vect}_n(X)$ is the set of isomorphism classes of rank-$n$ bundles. It is natural under pullback of $k$-schemes. These definitions apply to singular as well as smooth schemes. The article also uses total Chern classes of virtual bundle classes; their extension and its Whitney identity are supplied separately and are not part of this definition.

## Facts & Assumptions

**Given:** A field $k$, a qcqs $k$-scheme $X$, a constant-rank bundle $E$, the Axiom of Choice and the suitable universes of the supplied constructions.

**Goal:** Define the stated coefficients and justify their existence, uniqueness, invariance under bundle isomorphism and pullback naturality.

[A1] Assume the Axiom of Choice, as formulated in [[math:def-axiom-of-choice]]. This discharges the Choice hypotheses of the projective-bundle and coefficient-uniqueness suppliers [F1] and [F2] in steps 1.1–3.1, of the bundle-class supplier [F3] in step 2.1, and of the representing theorem [F4] in steps 1.1 and 2.1. The suitable universes remain the separate inherited hypothesis in **Given** and [F3]; their existence is not inferred from Choice.

[F1] The supplied motivic cohomology, extended by zero in negative weights, is an additively oriented bigraded theory on qcqs $k$-schemes. For a positive-rank bundle its quotient projective bundle has the projective-bundle isomorphism in every bidegree, with powers of the first Chern class of the tautological quotient line. Pullbacks are functorial degree-preserving unital ring homomorphisms. Its orientation is a natural map from isomorphism classes of line bundles to $H^{2,1}$, so it is invariant under line-bundle isomorphisms. The theory includes the module-pullback convention, preservation of finite locally free rank under pullback, and closure of the qcqs scheme category under the positive-rank projective bundles and their base changes. [[prop-motivic-projective-bundle-formula]]

[F2] In such a theory, for a rank-$n>0$ bundle the displayed monic relation has unique coefficients in the stated bidegrees, and those coefficients commute with pullback. The rank-zero convention is preserved by pullback. [[lem-chern-relation-uniqueness]]

[F3] A vector bundle is finite locally free; $\mathrm{Vect}_n(X)$ is the set of isomorphism classes of rank-$n$ bundles. [[def-vector-bundle-classes]]

[F4] Under Choice, for a finite locally free $\mathcal O_X$-module $E$, the quotient projective bundle represents the functor sending an $X$-scheme $g:T\to X$ to isomorphism classes of surjections $g^*E\to L$ with $L$ a line bundle. The representing bijection sends a morphism to the pullback of the tautological quotient, is natural in $T$, and sends the identity to that quotient. [[math:thm-projective-bundle-represents-line-quotients]]

## Justification

1.1 The hypotheses of [F1] and [F2] hold for $X$ and $E$. When $n>0$, [F2] therefore supplies exactly one coefficient $c_i(E)$ in each indicated bidegree satisfying the displayed relation. The unit and zero classes used for $c_0$ and for indices above the rank exist in the bigraded ring; the separate rank-zero prescription is consequently defined without a projective-bundle assertion. These choices give a polynomial $c_t(E)$ with constant coefficient one; here $t$ is a formal variable. The coefficient notation agrees with the supplied orientation for line bundles: for a line bundle $L$, its identity quotient $L\to L$ gives a morphism $s:X\to\mathbb P_X(L)$ over $X$ with $s^*\mathcal O(1)\cong L$ by [F4]. Pulling the rank-one relation back along $s$ identifies its coefficient $c_1(L)$ with the supplied orientation of $L$ by [F1]. [A1, F1, F2, F4, given]

2.1 Suppose $n>0$ and let $\alpha:E\to E'$ be a bundle isomorphism. On $\mathbb P_X(E)$ compose $\pi^*\alpha^{-1}$ with the tautological quotient of $E$. By [F4] this quotient of $\pi^*E'$ determines a unique $X$-morphism $u:\mathbb P_X(E)\to\mathbb P_X(E')$ and an identification $u^*\mathcal O_{\mathbb P_X(E')}(1)\cong\mathcal O_{\mathbb P_X(E)}(1)$. Reversing $\alpha$ gives $v$ in the opposite direction. By naturality of the representing bijection, the composites $vu$ and $uv$ represent the original tautological quotient classes, since $\alpha^{-1}\alpha$ and $\alpha\alpha^{-1}$ are identities. Injectivity of that bijection therefore makes both composites identities. By [F1], $u^*\xi'=\xi$; pulling the defining relation for $E'$ back along $u$, with $\pi' u=\pi$, gives the relation for $E$ with coefficients $c_i(E')$. Uniqueness in [F2] gives $c_i(E')=c_i(E)$ for $1\leq i\leq n$. The prescribed zero and unit coefficients also agree, so each $c_i$ is well-defined on the set of isomorphism classes in [F3]. Rank zero follows directly from its explicit convention. [A1, F1, F2, F3, F4, step 1.1]

3.1 For a morphism $f:Y\to X$ of qcqs $k$-schemes, the pullback bundle has rank $n$. For $1\leq i\leq n$, [F2] gives $f^*c_i(E)=c_i(f^*E)$; for $i=0$ or $i>n$ this follows from preservation of the unit and zero. The rank-zero case follows from the same conventions. Thus the maps are natural, and no smoothness hypothesis has been used. This completes the justification. [A1, F1, F2, step 1.1, step 2.1] ∎
