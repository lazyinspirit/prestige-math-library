---
id: lem-span-of-a-single-vector
kind: lemma
title: "$\\operatorname{span}\\{v\\} = \\{\\, \\lambda v : \\lambda \\in F \\,\\}$, which is $\\{0_V\\}$ when $v = 0_V$, and when $v \\ne 0_V$ contains $0_V$ only as the multiple $0_F v$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-linear-combination-and-span, lem-linear-subspace-criterion, lem-vector-space-elementary-consequences, def-linear-subspace, def-vector-space, def-field]
justified_by: []
aliases: [lem-line-through-the-origin]
landmark: false
short: "$\\operatorname{span}\\{v\\} = Fv$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Linear span (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_span"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]) and let
$v \in V$. Write $Fv := \{\, \lambda v : \lambda \in F \,\}$. Then:

1. $\operatorname{span}\{v\} = Fv$;
2. if $v = 0_V$ then $\operatorname{span}\{v\} = \{0_V\}$;
3. if $v \ne 0_V$ then, for $\lambda, \mu \in F$, $\lambda v = \mu v$ holds only
   when $\lambda = \mu$; in particular $\lambda v = 0_V$ holds only for
   $\lambda = 0_F$, so $0_V$ occurs in $\operatorname{span}\{v\}$ only as the
   multiple $0_F v$, and $\operatorname{span}\{v\} \ne \{0_V\}$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, and a vector $v \in V$.

[L1] $\operatorname{span}\{v\}$ is a linear subspace of $V$ containing $v$, and it is contained in every linear subspace of $V$ containing $v$ ([[def-linear-combination-and-span]]).

[L2] A linear subspace is closed under scalar multiplication, by condition (W3) ([[def-linear-subspace]]).

[L3] One-step test: a nonempty $T \subseteq V$ with $\lambda u + w \in T$ for all $\lambda \in F$ and $u, w \in T$ is a linear subspace of $V$ ([[lem-linear-subspace-criterion]]).

[L4] The vector space axioms ([[def-vector-space]]): (V3) $(\lambda+\mu)w = \lambda w + \mu w$; (V4) $(\lambda\mu)w = \lambda(\mu w)$; (V5) $1_F w = w$.

[L5] $0_F w = 0_V$ and $\lambda 0_V = 0_V$ for all $\lambda \in F$ and $w \in V$; $(-\lambda)w = -(\lambda w)$, which is claim 3 there; and if $\lambda w = 0_V$ then $\lambda = 0_F$ or $w = 0_V$ ([[lem-vector-space-elementary-consequences]]).

[L6] $F$ is a field, so $(F,+,0_F)$ is an abelian group with $0_F, 1_F \in F$ and an additive inverse $-\mu$ for each $\mu$; adding $\mu$ to both sides of $\lambda + (-\mu) = 0_F$ therefore gives $\lambda = \mu$ ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 $Fv$ is nonempty, since $0_F v = 0_V$ lies in it. [L5]

1.2 $Fv$ is closed under the one-step expression: for $\lambda, \mu, \nu \in F$, $\lambda(\mu v) + \nu v = (\lambda\mu)v + \nu v = (\lambda\mu + \nu)v \in Fv$, by (V4) and (V3). [L4]

1.3 $v \in Fv$, since $v = 1_F v$ by (V5). [L4]

1.4 If $W$ is a linear subspace of $V$ with $v \in W$, then $\lambda v \in W$ for every $\lambda \in F$, so $Fv \subseteq W$. [L2]

1.5 If $\lambda v = \mu v$ then $0_V = \lambda v + (-(\mu v)) = \lambda v + (-\mu)v = (\lambda + (-\mu))v$, using claim 3 of the elementary consequences and (V3); so $\lambda + (-\mu) = 0_F$ or $v = 0_V$. [L4, L5]

2.1 $Fv$ is a linear subspace of $V$ containing $v$, by the one-step test. [step 1.1, step 1.2, step 1.3, L3]

2.2 If $v \ne 0_V$ and $\lambda v = \mu v$, then step 1.5 forces $\lambda + (-\mu) = 0_F$, that is $\lambda = \mu$; taking $\mu = 0_F$ and using $0_F v = 0_V$ gives that $\lambda v = 0_V$ only for $\lambda = 0_F$. [step 1.5, L5, L6]

3.1 $\operatorname{span}\{v\} = Fv$: the span is contained in $Fv$ because $Fv$ is a linear subspace containing $v$, and $Fv$ is contained in the span because the span is a linear subspace containing $v$. This is claim 1. [step 2.1, step 1.4, L1]

4.1 If $v = 0_V$ then every scalar multiple is $\lambda 0_V = 0_V$, so $Fv = \{0_V\}$; combined with claim 1 this is claim 2. [step 3.1, L5]

4.2 Suppose $v \ne 0_V$. Then $\lambda v = \mu v$ forces $\lambda = \mu$, and $\lambda v = 0_V$ forces $\lambda = 0_F$; moreover $v = 1_F v$ lies in $Fv$, which is $\operatorname{span}\{v\}$ by claim 1, and $v \ne 0_V$, so $\operatorname{span}\{v\} \ne \{0_V\}$. This is claim 3. [step 2.2, step 3.1, L4]

5.1 Claims 1, 2 and 3 are steps 3.1, 4.1 and 4.2. [step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **The set $Fv$ is what a "line through the origin" is, over any field.** Claim 3
  says that for $v \ne 0_V$ the scalars are recovered from the multiples: distinct
  scalars give distinct vectors. That is the first place where claim 5 of
  [[lem-vector-space-elementary-consequences]] does real work, and it is what
  makes a single nonzero vector behave like a coordinate axis.

- **The word "line" is informal here.** Dimension is not available on this page,
  so nothing above asserts that $\operatorname{span}\{v\}$ is one-dimensional; what
  is asserted is exactly the three displayed claims. The companion page uses the
  word in the same informal way, for the same sets.

- **The zero vector is not an exception to claim 1, only to claim 3.** At
  $v = 0_V$ the set $Fv$ collapses to $\{0_V\}$ and the map $\lambda \mapsto
  \lambda v$ is constant, so no scalar is recoverable. This is why claim 3 carries
  the hypothesis $v \ne 0_V$ and claim 1 does not.
