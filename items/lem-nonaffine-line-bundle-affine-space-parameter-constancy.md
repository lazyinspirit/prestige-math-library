---
id: lem-nonaffine-line-bundle-affine-space-parameter-constancy
kind: lemma
title: "Line bundles over an affine-space parameter open come from the smooth factor"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, thm-nonaffine-regular-local-ring-is-ufd, thm-line-bundle-rational-section-cartier-divisor, thm-cartier-weil-isomorphism-locally-factorial, thm-dimension-formula-for-affine-domains, lem-finite-variable-polynomial-rings-over-fields-are-ufds]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Stacks Project, Lemma 33.30.5, with its divisor pullback proof"
      url: https://stacks.math.columbia.edu/tag/0BEH
    - title: "Stacks Project, Divisors, Lemmas 31.29.1 and 31.29.4"
      url: https://stacks.math.columbia.edu/download/divisors.pdf
---

## Statement

Assume the Axiom of Choice. Let $X$ be a smooth geometrically integral finite-type $k$-scheme and $V\subset\mathbf A^d_k$ a nonempty open. Every invertible sheaf $M$ on $X\times_kV$ is isomorphic to the pullback of an invertible sheaf $N$ on $X$. Consequently after any field extension its restrictions at all rational parameter points are isomorphic to that same base extension of $N$.

## Facts & Assumptions

[F1] Smooth schemes are locally factorial; invertible sheaves on integral schemes have rational sections and hence Cartier divisor representatives. On locally factorial schemes Cartier and Weil divisors, and their principal-divisor classes, agree. ([[thm-nonaffine-regular-local-ring-is-ufd]], [[thm-line-bundle-rational-section-cartier-divisor]], [[thm-cartier-weil-isomorphism-locally-factorial]])

[F2] Finite-variable polynomial rings over fields are UFDs, and their height-one primes are principal; codimension and transcendence-degree dimension formulas hold for finite-type affine domains. ([[lem-finite-variable-polynomial-rings-over-fields-are-ufds]], [[thm-dimension-formula-for-affine-domains]])

## Proof

**Given:** AC, $X$, $V$, and $M$ as in the statement.

1.1 Represent $M$ by a Cartier divisor and then by a Weil divisor on $X\times V$ using [F1]. Close each of its finitely many prime components in $X\times\mathbf A^d$ with the same coefficient. The closures have codimension one because this is an open extension of varieties. The product is smooth and integral, so [F1] makes this extended Weil divisor a Cartier divisor $E$. Its restriction represents $M$. [F1, given, construct]

2.1 Write $K=k(X)$. The components of $E$ which dominate $X$ restrict to codimension-one primes of $\operatorname{Spec}K[t_1,\ldots,t_d]$, by [F2]. This is a UFD, so choose their irreducible defining polynomials and form their product, with integer exponents given by the coefficients of $E$. View that product as a nonzero rational function $h$ on $X\times\mathbf A^d$. The divisor $E-\operatorname{div}(h)$ has no component dominating $X$. A remaining codimension-one component has image closure of codimension at most one in $X$, since its fibre dimension is at most $d$ and [F2] gives the total dimension as $\dim X+d-1$. Its image is therefore a prime divisor $T$ on $X$, and its generic fibre over $T$ has dimension $d$. The affine-space fibre is integral; a closed subset of full dimension is the whole fibre. Consequently this component is precisely $T\times\mathbf A^d$. Its multiplicity as a pullback divisor is one: at the generic point the base DVR uniformizer remains a uniformizer after the purely transcendental residue-field extension. [F1, F2, step 1.1, algebra]

3.1 Thus $E-\operatorname{div}(h)=\operatorname{pr}_X^*D$ for a Weil divisor $D$ on $X$. By [F1], $D$ is Cartier and defines $N=\mathcal O_X(D)$. The principal divisor does not change the invertible-sheaf class, so $\mathcal O(E)\cong\operatorname{pr}_X^*N$. Restricting to $X\times V$ proves the assertion. Base extension and then restriction to a rational parameter point returns $N$ after that base extension, proving parameter constancy. This argument neither assumes a $k$-rational point of $V$ nor assumes $k$ infinite or perfect. [F1, step 1.1, step 2.1, algebra] ∎
