---
id: thm-cup-i-coboundary-identity
kind: theorem
title: Cup-i coboundary identity
status: published
origin: pipeline
deps: ["def-higher-cup-i-products", "lem-natural-higher-diagonal-approximations-on-singular-chains"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Mosher and Tangora, Cohomology Operations and Applications
      url: https://webhomes.maths.ed.ac.uk/~v1ranick/papers/moshtang.pdf
      locator: Chapter 2, cup-i coboundary formula, printed page 16
---

## Statement

For mod-two cochains $a\in C^p(X)$ and $b\in C^q(X)$ and every integer $i$,

$$
\delta(a\smile_i b)=\delta a\smile_i b+a\smile_i\delta b+a\smile_{i-1}b+b\smile_{i-1}a,
$$

where $\smile_j=0$ for $j<0$. The same identity holds in either relative
variant of the cup-$i$ product.

## Facts & Assumptions

**Given:** A fixed natural higher-diagonal system and cochains $a,b$ of the displayed degrees.

[F1] Cup-$i$ is evaluation of $a\otimes b$ on $D_i$, and negative indices are zero ([[def-higher-cup-i-products]]).

[F2] The higher diagonals satisfy $dD_i+D_id=(1+T)D_{i-1}$, with $T$ interchanging the two tensor factors ([[lem-natural-higher-diagonal-approximations-on-singular-chains]]).

## Proof

**Proof technique:** evaluate the chain identity.

1.1 If $i<0$, every cup product in the asserted formula has negative index, so [F1] makes both sides zero. Hence assume $i\geq0$ and evaluate the left side on a chain $c$ of degree $p+q-i+1$. By the cochain-coboundary convention, [given, F1]

$$ \delta(a\smile_i b)(c)=(a\otimes b)D_i(dc). $$

2.1 Substitute the higher-diagonal recurrence. Over $\mathbb F_2$ it gives [F2, step 1.1]

$$ (a\otimes b)D_i(dc)=(a\otimes b)dD_i(c)+(a\otimes b)(1+T)D_{i-1}(c). $$

3.1 Expand the two terms. The tensor coboundary has no surviving signs over $\mathbb F_2$, so its first term is $(\delta a\smile_i b+a\smile_i\delta b)(c)$. Since $(a\otimes b)T=b\otimes a$, the second is $(a\smile_{i-1}b+b\smile_{i-1}a)(c)$. This proves the identity on every chain. The carrier property keeps every term relative when either input is relative. For $i=0$, both negative-index terms are zero and the formula reduces to the ordinary cup-product Leibniz identity. [F1, step 2.1] ∎