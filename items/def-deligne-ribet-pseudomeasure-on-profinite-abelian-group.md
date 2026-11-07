---
id: def-deligne-ribet-pseudomeasure-on-profinite-abelian-group
kind: definition
title: Deligne–Ribet pseudomeasures on profinite abelian groups
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 1
deps:
- def-iwasawa-algebra-of-profinite-abelian-group
- def-p-adic-integers-as-compatible-residue-classes
- def-profinite-group-by-inverse-limit
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. Coates and R. Sujatha, The Main Conjecture
    url: https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download
    locator: Definition 2.1, printed p. 115
  - title: P. Deligne and K. A. Ribet, Values of abelian L-functions at negative integers
      over totally real fields
    url: https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf
    locator: §0.5, printed pp. 231–232, measure divided by a regular group difference
verification: {}
---

## Definition

Let $p$ be a prime, let $G$ be a profinite abelian group, and let $\Lambda(G)=\mathbb Z_p[\![G]\!]$. Let $S$ be the multiplicative set of elements of $\Lambda(G)$ that are not zero divisors, and let $Q(\Lambda(G))=S^{-1}\Lambda(G)$ be its total quotient ring. A **Deligne–Ribet pseudomeasure on $G$** is an element $\mu\in Q(\Lambda(G))$ such that $([g]-[1])\mu\in\Lambda(G)$ for every $g\in G$, where $[g]$ denotes the group-like element of the completed group algebra.

For a continuous character $\rho:G\to\mathbb Z_p^\times$, its evaluation $\operatorname{ev}_\rho:\Lambda(G)\to\mathbb Z_p$ is defined by finite quotients. Put $U_n=\ker(\rho\bmod p^n)$. If $\lambda_{U_n}=\sum_{gU_n}a_{gU_n}[gU_n]$ is the image of $\lambda$ in $\mathbb Z_p[G/U_n]$, set
$$\operatorname{ev}_\rho(\lambda)\bmod p^n=\sum_{gU_n}(a_{gU_n}\bmod p^n)(\rho(g)\bmod p^n).$$
These residues are compatible and define an element of $\mathbb Z_p$. Write $\int_G\rho\,d\lambda=\operatorname{ev}_\rho(\lambda)$ for this character evaluation. If there is a $c\in G$ with $[c]-[1]\in S$ and $\rho(c)\ne1$, define the **character moment** of $\mu$ by
$$\int_G\rho(g)\,d\mu(g)=\frac{\operatorname{ev}_\rho((1-[c])\mu)}{1-\rho(c)}.$$
This element of $\mathbb Q_p$ is independent of the allowed choice of $c$. The pseudomeasure integrality condition is stronger than merely lying in the total quotient ring.

## Definition references

[J. Coates and R. Sujatha, Definition 2.1 and Theorem 2.2, printed p.115](https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download)

[P. Deligne and K. A. Ribet, §0.5, printed pp.231–232](https://math.berkeley.edu/~ribet/Articles/deligne-ribet.pdf)

## Facts & Assumptions

**Given:** A prime $p$, a profinite abelian group $G$, its completed group algebra, and the characters and regularizers in the Definition.

[F1] The underlying completed group algebra is the inverse limit of the finite group rings $\mathbb Z_p[G/U]$, with the quotient transition maps. Only this construction, not any further coordinate or measure assertion, is used here. ([[def-iwasawa-algebra-of-profinite-abelian-group]])

[F2] Compatible residues modulo all $p^n$ define a unique $p$-adic integer. ([[def-p-adic-integers-as-compatible-residue-classes]])

[F3] In an inverse limit of finite discrete groups, finite-coordinate identity cylinders form a neighborhood basis. Thus an open subgroup contains a finite-coordinate kernel and has finite index. ([[def-profinite-group-by-inverse-limit]])

## Proof

1.1 The inverse limit in [F1] is a commutative unital ring with componentwise operations. Its non-zero-divisors form a multiplicative set: if $abx=0$ and both $a,b$ are non-zero-divisors, first $bx=0$ and then $x=0$. Localizing at them embeds the ring in its total quotient ring, since an element killed by a denominator is zero. Thus the ambient ring in the Definition exists. [F1, given, algebra]

1.2 Since $\rho\bmod p^n$ is a continuous homomorphism to a finite discrete group, its kernel $U_n$ is open; it has finite index by [F3]. The finite sum in the Definition is independent of representatives because $\rho$ is constant modulo $p^n$ on each coset. It is a ring homomorphism $\mathbb Z_p[G/U_n]\to\mathbb Z/p^n$, as follows by distributing finite sums and using $\rho(gh)=\rho(g)\rho(h)$. The subgroup inclusions $U_{n+1}\subseteq U_n$ and transition maps in [F1] show these evaluations are compatible as $n$ increases. By [F2] they define the stated ring homomorphism $\operatorname{ev}_\rho$, with $\operatorname{ev}_\rho([g])=\rho(g)$. This construction is canonical and uses no compactness theorem or choice axiom. [F1, F2, F3, construct, algebra]

2.1 The integrality condition is well defined in this total quotient ring. If $\mu,\nu$ satisfy it and $a\in\Lambda(G)$, then $([g]-[1])(\mu+\nu)=([g]-[1])\mu+([g]-[1])\nu$ and $([g]-[1])a\mu=a([g]-[1])\mu$ lie in $\Lambda(G)$. Hence these pseudomeasures form a $\Lambda(G)$-submodule. [F1, step 1.1, algebra]

3.1 For an allowed $c$, the element $(1-[c])\mu$ is integral by the pseudomeasure condition, so its evaluation from step 1.2 is defined. Since $1-\rho(c)\ne0$, division in $\mathbb Q_p$ defines the moment. For two allowed regularizers $c,d$, commutativity gives $(1-[d])(1-[c])\mu=(1-[c])(1-[d])\mu$, with both sides in $\Lambda(G)$. Applying the ring homomorphism of step 1.2 gives $(1-\rho(d))\operatorname{ev}_\rho((1-[c])\mu)=(1-\rho(c))\operatorname{ev}_\rho((1-[d])\mu)$. Dividing by the two nonzero denominators proves independence. Thus the full character-moment scope is well defined without assuming a generic measure-existence theorem. [step 2.1, step 1.2, algebra] ∎
