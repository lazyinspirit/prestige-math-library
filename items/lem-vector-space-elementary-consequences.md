---
id: lem-vector-space-elementary-consequences
kind: lemma
title: "In any vector space $0_F v = 0_V$, $\\lambda 0_V = 0_V$, $(-\\lambda)v = -(\\lambda v)$, $(-1_F)v = -v$, and $\\lambda v = 0_V$ forces $\\lambda = 0_F$ or $v = 0_V$"
status: draft
origin: session
deps: [def-vector-space, def-field, def-group, lem-group-cancellation, lem-of-inverse-unique]
justified_by: []
aliases: []
landmark: false
short: "$0_F v = 0_V$, $(-1_F)v = -v$"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector_space"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 1"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). For all
$\lambda \in F$ and $v \in V$:

1. $0_F v = 0_V$;
2. $\lambda 0_V = 0_V$;
3. $(-\lambda)v = -(\lambda v)$, and also $\lambda(-v) = -(\lambda v)$;
4. $(-1_F)v = -v$;
5. if $\lambda v = 0_V$ then $\lambda = 0_F$ or $v = 0_V$.

Here $0_F$ and $1_F$ are the additive and multiplicative identities of $F$, $0_V$
is the zero vector, $-\lambda$ is the additive inverse of $\lambda$ in $F$, and
$-v$ is the additive inverse of $v$ in the abelian group $(V,+,0_V)$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$ with axioms (V1)–(V5) ([[def-vector-space]]), a scalar $\lambda \in F$ and a vector $v \in V$.

[L1] The four scalar axioms: $\lambda(u+w) = \lambda u + \lambda w$ (V2); $(\lambda+\mu)w = \lambda w + \mu w$ (V3); $(\lambda\mu)w = \lambda(\mu w)$ (V4); $1_F w = w$ (V5) ([[def-vector-space]]).

[L2] $(V,+,0_V)$ is an abelian group (V1): addition is associative and commutative, $0_V$ is a two-sided identity, and each $w \in V$ has an additive inverse $-w$ with $w + (-w) = 0_V = (-w) + w$ ([[def-vector-space]], [[def-group]]).

[L3] Cancellation in a group, read additively: if $x + y = x + z$ then $y = z$, and if $y + x = z + x$ then $y = z$ ([[lem-group-cancellation]]).

[L4] Field arithmetic ([[def-field]]): $0_F + 0_F = 0_F$; $\mu + (-\mu) = 0_F$ for every $\mu \in F$; $1_F$ is the multiplicative identity; multiplication is associative; and every $\mu \ne 0_F$ has a multiplicative inverse $\mu^{-1}$ with $\mu^{-1}\mu = 1_F$.

[L5] The identities $0_F$, $1_F$ and the inverses $-\mu$, $\mu^{-1}$ of a field are unique, so those notations denote well-defined elements ([[lem-of-inverse-unique]]).

## Proof

**Proof technique:** direct.

1.1 By (V3) applied to $0_F$ and $0_F$, and $0_F + 0_F = 0_F$ in $F$: $0_F v + 0_F v = (0_F + 0_F)v = 0_F v$. [L1, L4]

1.2 Since $0_V$ is a two-sided identity for $+$: $0_F v = 0_V + 0_F v$. [L2]

1.3 By (V2) applied to $0_V$ and $0_V$, and $0_V + 0_V = 0_V$ in $V$: $\lambda 0_V + \lambda 0_V = \lambda(0_V + 0_V) = \lambda 0_V$. [L1, L2]

1.4 Since $0_V$ is a two-sided identity for $+$: $\lambda 0_V = 0_V + \lambda 0_V$. [L2]

1.5 The vector $\lambda v$ has an additive inverse $-(\lambda v)$ with $\lambda v + (-(\lambda v)) = 0_V$, and it is the unique vector with that property. [L2]

2.1 Combining steps 1.1 and 1.2 gives $0_F v + 0_F v = 0_V + 0_F v$; cancelling $0_F v$ on the right yields $0_F v = 0_V$, which is claim 1. [step 1.1, step 1.2, L3]

2.2 Combining steps 1.3 and 1.4 gives $\lambda 0_V + \lambda 0_V = 0_V + \lambda 0_V$; cancelling $\lambda 0_V$ on the right yields $\lambda 0_V = 0_V$, which is claim 2. [step 1.3, step 1.4, L3]

3.1 By (V3) applied to $\lambda$ and $-\lambda$, then $\lambda + (-\lambda) = 0_F$, then claim 1: $\lambda v + (-\lambda)v = (\lambda + (-\lambda))v = 0_F v = 0_V$. [step 2.1, L1, L4]

3.2 By (V2) applied to $v$ and $-v$, then $v + (-v) = 0_V$, then claim 2: $\lambda v + \lambda(-v) = \lambda(v + (-v)) = \lambda 0_V = 0_V$. [step 2.2, L1, L2]

3.3 Suppose $\lambda v = 0_V$ and $\lambda \ne 0_F$. Then $\lambda^{-1} \in F$ exists with $\lambda^{-1}\lambda = 1_F$, so $v = 1_F v = (\lambda^{-1}\lambda)v = \lambda^{-1}(\lambda v) = \lambda^{-1} 0_V = 0_V$, using (V5), (V4) and claim 2 in turn. [step 2.2, L1, L4, L5]

4.1 Steps 3.1 and 1.5 exhibit both $(-\lambda)v$ and $-(\lambda v)$ as vectors $x$ with $\lambda v + x = 0_V$; cancelling $\lambda v$ on the left gives $(-\lambda)v = -(\lambda v)$. [step 3.1, step 1.5, L3]

5.1 Likewise steps 3.2 and 1.5 give $\lambda v + \lambda(-v) = 0_V = \lambda v + (-(\lambda v))$, and cancelling $\lambda v$ on the left gives $\lambda(-v) = -(\lambda v)$; with step 4.1 this is claim 3. [step 3.2, step 1.5, L3]

5.2 Taking $\lambda = 1_F$ in step 4.1 and using (V5): $(-1_F)v = -(1_F v) = -v$, which is claim 4. [step 4.1, L1]

6.1 Claim 1 is step 2.1, claim 2 is step 2.2, claim 3 is steps 4.1 and 5.1, and claim 4 is step 5.2; for claim 5, if $\lambda v = 0_V$ then either $\lambda = 0_F$, or $\lambda \ne 0_F$ and step 3.3 gives $v = 0_V$. [step 2.1, step 2.2, step 3.3, step 4.1, step 5.1, step 5.2] ∎

## Remarks

- **None of this is an axiom.** The scalar axioms (V2)–(V5) say nothing directly
  about $0_F$, $0_V$ or negatives; each claim above is extracted by writing one
  element in two ways and cancelling in the abelian group $(V,+,0_V)$. That is the
  same device that gives $0 \cdot a = 0$ in a field ([[lem-of-zero-mult]]), and
  the proofs are deliberately parallel.

- **Claim 5 is what makes $\{0_V\}$ the only "degenerate" scalar multiple.** It is
  used below to compute $\operatorname{span}\{v\}$ ([[lem-span-of-a-single-vector]])
  and, in that form, is the vector-space analogue of a field having no zero
  divisors ([[lem-of-no-zero-divisors]]). Its converse directions, claims 1 and 2,
  say that both degenerate products really are $0_V$.

- **Claim 4 is the bridge to the additive group.** It says the additive inverse of
  a vector is a scalar multiple of it, which is why closure under scalar
  multiplication already forces closure under negatives; that is what makes a
  linear subspace a subgroup of $(V,+)$ without a separate axiom.
