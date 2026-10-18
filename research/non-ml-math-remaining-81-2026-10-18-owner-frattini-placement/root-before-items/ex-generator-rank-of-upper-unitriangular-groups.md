---
id: ex-generator-rank-of-upper-unitriangular-groups
kind: example
title: "The $3\\times3$ upper-unitriangular group over a prime field has generator rank two"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-frattini-subgroup-formula-for-a-finite-p-group, def-generator-rank-of-a-finite-p-group, def-fp-basis-of-an-elementary-abelian-p-group, thm-z-mod-p-is-a-field, thm-standard-representatives-modulo-n, thm-product-rule]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "K. Conrad, Generating Sets, Example 6.11"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/genset.pdf"
    - title: "Y. Harpaz and O. Wittenberg, The Massey Vanishing Conjecture for Number Fields, §2"
      url: "https://www.math.univ-paris13.fr/~wittenberg/globalmassey.pdf"
pipeline_run: null
---

## Example

For a prime $p$, let $H_p$ be the set of $3\times3$ upper-unitriangular matrices over the prime field $\mathbb Z/p$ under matrix multiplication. Writing

$$M(a,b,c)=\begin{pmatrix}1&a&c\\0&1&b\\0&0&1\end{pmatrix}\qquad(a,b,c\in\mathbb Z/p),$$

the assignment $(a,b,c)\mapsto M(a,b,c)$ is a bijection from $(\mathbb Z/p)^3$ onto $H_p$ that turns matrix multiplication into

$$(a,b,c)(a',b',c')=(a+a',\,b+b',\,c+c'+ab').$$

Working in these coordinates, $H_p$ is a group of order $p^3$,

$$\Phi(H_p)=\{(0,0,c):c\in\mathbb Z/p\},$$

and $d(H_p)=2$. This includes $p=2$, when $H_p$ does not have exponent $p$.

## Facts & Assumptions

**Given:** A prime $p$, the $3\times3$ upper-unitriangular matrices over $\mathbb Z/p$, and the displayed coordinate parametrisation.

[L1] For every finite $p$-group $P$, $\Phi(P)=P'P^p$ ([[thm-frattini-subgroup-formula-for-a-finite-p-group]]).

[F1] The generator rank is the common size of a basis of the Frattini quotient ([[def-generator-rank-of-a-finite-p-group]]).

[L2] The operations make $\mathbb Z/p$ a field with $p$ elements, and the threefold Cartesian product has $p^3$ elements ([[thm-z-mod-p-is-a-field]], [[thm-standard-representatives-modulo-n]], [[thm-product-rule]]).

[F2] A basis is an independent spanning subset for the canonical $\mathbb F_p$-linear structure ([[def-fp-basis-of-an-elementary-abelian-p-group]]).

## Verification

**Proof technique:** direct.

1.1 Multiplying $M(a,b,c)M(a',b',c')$ entrywise gives the matrix with $(1,2)$ entry $a+a'$, $(2,3)$ entry $b+b'$ and $(1,3)$ entry $c+c'+ab'$, so the parametrisation carries matrix multiplication to the displayed coordinate operation and is a bijection. Direct substitution shows associativity; the identity is $(0,0,0)$ and $(a,b,c)^{-1}=(-a,-b,-c+ab)$. By [L2] the set has order $p^3$, so this is a finite $p$-group. [given, L2, algebra]

2.1 A calculation with the inverse in step 1.1 gives $[(a,b,c),(a',b',c')]=(0,0,ab'-a'b)$. Every commutator lies on the central $c$-axis, and $(0,0,t)=[(t,0,0),(0,1,0)]$, so $H_p'=\{(0,0,c)\}$. [step 1.1, L2, algebra]

3.1 Induction gives $(a,b,c)^m=(ma,mb,mc+\binom m2ab)$. For odd $p$, every $p$th power is the identity; for $p=2$, every square is $(0,0,ab)$ and hence lies on the central axis. Since the derived subgroup already equals that axis, [L1] gives $\Phi(H_p)=\{(0,0,c)\}$ in both cases. [step 1.1, step 2.1, L1, algebra]

4.1 Modulo the central axis, the first two coordinate classes give unique coordinates and form a two-vector basis by [F2]. Therefore [F1] gives $d(H_p)=2$. [step 3.1, F1, F2, algebra] ∎

## Remarks

The prime field is a hypothesis, not a convenience. Over $\mathbb F_q$ with $q=p^e$ the same coordinates and the same two computations give $H'=\{(0,0,c):c\in\mathbb F_q\}$ and $(a,b,c)^p=(0,0,\binom p2ab)$, so the Frattini subgroup is again that central axis and the Frattini quotient is $\mathbb F_q\oplus\mathbb F_q$ — a vector space of dimension $2e$ over $\mathbb F_p$, not $2$. For $q=4$ the generator rank is therefore $4$.
