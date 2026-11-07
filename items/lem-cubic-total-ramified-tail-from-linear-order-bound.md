---
id: lem-cubic-total-ramified-tail-from-linear-order-bound
kind: lemma
title: "Totally ramified cubic-field tail from a linear order count"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 24
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - thm-davenport-heilbronn-3-torsion-class-field-counting-identity
  - lem-class-group-three-torsion-surjections
  - lem-s3-cubic-resolvent-discriminant-and-ramification
  - thm-galois-group-of-an-irreducible-cubic-by-discriminant
  - thm-discriminant-root-formula-and-repeated-root-criterion
  - prop-vandermonde-transforms-by-sign-under-the-galois-action
  - thm-power-basis-discriminant-is-polynomial-discriminant
  - cor-order-index-discriminant-formula
  - def-fundamental-quadratic-discriminant
  - thm-ray-class-exact-sequence
  - thm-global-artin-reciprocity-and-norm-index
  - def-global-artin-map-as-product-of-local-reciprocity-maps
  - thm-local-artin-reciprocity-identifies-the-weil-group-abelianization
  - lem-number-field-completions-as-local-polynomial-factors
  - lem-complete-discrete-valuation-extension-degree-and-tame-norm
  - thm-ring-of-integers-free-of-rank-degree
  - thm-multiplicative-group-of-a-finite-field-is-cyclic
  - thm-different-exponent-in-tame-and-wild-ramification
  - cor-discriminant-valuation-from-different-exponents
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Behailu Datskovsky and David J. Wright, Density of discriminants of cubic extensions"
      url: "https://doi.org/10.1515/crll.1988.386.116"
      locator: "§6, printed pp. 135–137, Lemmas 6.1–6.2 and Propositions 6.1–6.2; the conditional bound and fixed-modulus count below are derived locally."
---

## Statement

Assume AC, Countable Choice and DC. Let $N(Y)$ count isomorphism classes of orders in cubic number fields of absolute discriminant less than $Y$, and suppose $N(Y)\le CY$ for all $Y>0$. Let $Y_p(X)$ count isomorphism classes of cubic fields of absolute discriminant less than $X$ in which $p$ is totally ramified. Then there is a constant $B_C$, independent of $p$ and $X$, such that
$$Y_p(X)\le B_C X/p^2\qquad(p\text{ prime},\ X>0).$$
The linear order-count bound is an explicit hypothesis; no global cubic-field asymptotic is asserted.

## Facts & Assumptions

**Given:** AC, Countable Choice and DC, the bound $N(Y)\le CY$, a prime $p$ and $X>0$.

[F1] For each sign, the exact Davenport–Heilbronn class-field identity counts nowhere-totally-ramified cubic fields as $\frac12\sum_K(|\operatorname{Cl}(K)[3]|-1)$ over quadratic fields of the corresponding bounded discriminant. [[thm-davenport-heilbronn-3-torsion-class-field-counting-identity]]

[F2] For an $S_3$ cubic field $L$ with closure $N$ and quadratic resolvent $K$, total ramification at a rational prime is equivalent to ramification of the cyclic cubic extension $N/K$ above it; primewise $v_q(|D_L|)\ge v_q(|D_K|)$, with strict inequality at a totally ramified prime. [[lem-s3-cubic-resolvent-discriminant-and-ramification]]

[F3] The discriminant of a separable cubic polynomial is the square of its Vandermonde product, which changes sign under an odd root permutation. A power-basis discriminant is the polynomial discriminant and differs from the field discriminant by the square of its index. [[thm-discriminant-root-formula-and-repeated-root-criterion]] [[prop-vandermonde-transforms-by-sign-under-the-galois-action]] [[thm-power-basis-discriminant-is-polynomial-discriminant]] [[cor-order-index-discriminant-formula]] [[def-fundamental-quadratic-discriminant]]

[F4] Global Artin reciprocity is the product of local maps; for a finite abelian local extension, local units map onto inertia. The ray class exact sequence has residue-unit group as its kernel over the ordinary class group. For a finite abelian group $A$, $|\operatorname{Hom}(A,\mu_3)|=|A[3]|$. [[thm-global-artin-reciprocity-and-norm-index]] [[def-global-artin-map-as-product-of-local-reciprocity-maps]] [[thm-local-artin-reciprocity-identifies-the-weil-group-abelianization]] [[thm-ray-class-exact-sequence]] [[lem-class-group-three-torsion-surjections]]

[F5] A quadratic integer ring is free of rank two over $\mathbb Z$. Each of its completions has degree at most two over the corresponding rational completion, and its ramification index is at most that degree; nonzero finite-field multiplicative groups are cyclic. [[thm-ring-of-integers-free-of-rank-degree]] [[lem-number-field-completions-as-local-polynomial-factors]] [[lem-complete-discrete-valuation-extension-degree-and-tame-norm]] [[thm-multiplicative-group-of-a-finite-field-is-cyclic]]

[F6] At a totally ramified cubic prime of a cubic field, the different exponent is at least $2$, and the discriminant exponent is the residue degree times that exponent. [[thm-different-exponent-in-tame-and-wild-ramification]] [[cor-discriminant-valuation-from-different-exponents]]

[A1] AC, Countable Choice and DC are retained for [F1]–[F4]. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

## Proof

1.1 Let $H_3(Y)=\sum_{0<|D_K|<Y}|\operatorname{Cl}(K)[3]|$, the sum over all quadratic fields. By [F1], the sum of $|\operatorname{Cl}(K)[3]|-1$ is twice the number of nowhere-totally-ramified cubic fields of discriminant below $Y$, hence at most $2N(Y)$. A quadratic field is determined by its fundamental discriminant, and fewer than $2Y$ nonzero integers have absolute value less than $Y$. Thus $H_3(Y)\le(2C+2)Y$ for every $Y>0$; when $Y\le1$ both sides count no quadratic field. [A1, F1, given, algebra]

2.1 Let $L$ be a non-Galois cubic field with $S_3$ closure $N$ and quadratic resolvent $K$. Choose an integral primitive element $\theta$ of $L$. By [F3], the Vandermonde square root of its polynomial discriminant is fixed exactly by $A_3$, so $K=\mathbb Q(\sqrt{D_L})$. Thus $D_L/D_K$ is a positive rational square. The primewise inequality in [F2] makes it an integer; an integer rational square is an integer square, say $|D_L|=|D_K|f^2$. If $q$ is totally ramified in $L$, [F2] gives a strict positive difference of the discriminant exponents, which is even because the quotient is a square; hence $q\mid f$. [F2, F3, step 1.1, construct, algebra]

3.1 Let $g$ be the squarefree product of the rational primes $q\ge5$ totally ramified in $L$. By [F2], these are precisely the primes $q\ge5$ at which $N/K$ is ramified above $q$. Step 2.1 gives $|D_K|g^2\le|D_L|<X$. Let $\lambda$ be either nontrivial character of $\operatorname{Gal}(N/K)\cong C_3$. At a finite place of residue characteristic $q\ne3$, each principal-unit quotient is a finite $q$-group, so continuity makes the order-three local character trivial on the principal units. At a place above $3$, its ramification index over $\mathbb Q_3$ is at most two by [F5]. If $v(y-1)>2v(3)$, deterministic Newton iteration for $Z^3-y$ starting at $1$ converges to a cube root; hence every element of $1+\mathfrak p^5$ is a cube. Thus $\lambda$ kills those units as well. It is also trivial at real places because its image has odd order. By [F4], $\lambda$ factors through the ray class group modulo $2\cdot3^5g\,\mathcal O_K$ with no real sign conditions. [A1, F2, F4, F5, step 2.1, construct, algebra]

4.1 Let $\mathfrak m=2\cdot3^5g\,\mathcal O_K$. By [F4], restriction to the residue-unit kernel gives $|\operatorname{Hom}(\operatorname{Cl}_{\mathfrak m}(K),\mu_3)|\le |\operatorname{Cl}(K)[3]|\,|\operatorname{Hom}((\mathcal O_K/\mathfrak m)^\times,\mu_3)|$. For each $q\mid g$, the algebra $\mathcal O_K/q\mathcal O_K$ has dimension two over $\mathbb F_q$ and is either $\mathbb F_{q^2}$, $\mathbb F_q\times\mathbb F_q$, or $\mathbb F_q[t]/(t^2)$. In the last case the nilpotent unit subgroup is a $q$-group; in all cases [F5] gives at most $9$ homomorphisms of its unit group to $\mu_3$. The residue ring modulo $2\cdot3^5$ has at most $4\cdot3^{10}$ elements because $\mathcal O_K$ is rank two over $\mathbb Z$. The Chinese remainder theorem therefore bounds the number of ray characters of order dividing $3$ by $B_0\,9^{\omega(g)}|\operatorname{Cl}(K)[3]|$, with $B_0=4\cdot3^{10}$. Each $N/K$ is counted at least once, and its three cubic subfields are conjugate, so the same bound applies to cubic-field isomorphism classes for each $K,g$. [F4, F5, step 3.1, algebra]

5.1 Assume first $p\ge5$. Sum the bound of step 4.1 over squarefree $g$ coprime to $6$ with $p\mid g$ and over quadratic $K$ with $|D_K|<X/g^2$. By step 1.1, the contribution of non-Galois cubic fields is at most $B_0(2C+2)X\sum_{\substack{g\text{ squarefree},\ (g,6)=1\\p\mid g}}9^{\omega(g)}g^{-2}\le 9A B_0(2C+2)X/p^2$, where $A=\prod_{q\ge5}(1+9/q^2)<\infty$. The product converges because $\sum_{n\ge5}n^{-2}$ converges. [step 1.1, step 3.1, step 4.1, algebra]

6.1 A Galois cubic field is cyclic. For it, let $g$ be the product of its totally ramified primes $q\ge5$. A ramified prime of a cyclic cubic extension is totally ramified, so the same local-unit argument over $\mathbb Q$ shows its order-three character factors through a ray group modulo $2\cdot3^5g$. The residue count is at most $B_0 9^{\omega(g)}$. By [F6], $g^2$ divides its discriminant, so for $g^2<X$ the number of possibilities is at most $B_0 9^{\omega(g)}X/g^2$. Summing over $p\mid g$ contributes at most $9AB_0X/p^2$. For $p=2$ or $p=3$, the trivial bound $Y_p(X)\le N(X)\le CX$ is at most $9CX/p^2$. Combining the cases gives the Statement, for example with $B_C=9AB_0(2C+3)+9C$. [F4, F5, F6, step 3.1, step 5.1, algebra] ∎
