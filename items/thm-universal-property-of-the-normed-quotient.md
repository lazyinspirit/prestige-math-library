---
id: thm-universal-property-of-the-normed-quotient
kind: theorem
title: "A bounded operator that vanishes on a subspace factors uniquely through the normed quotient"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-bounded-linear-operator, def-quotient-vector-space-coset-notation,
       def-quotient-seminorm, thm-quotient-vector-space-universal-property,
       thm-quotient-map-is-open]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-28
---

## Statement

Let $X$ and $Y$ be normed spaces over the same scalar field, let $M \le X$ be a
closed linear subspace, let $q:X\to X/M$ be the quotient map, and let
$T:X\to Y$ be a bounded linear operator with $M \subseteq \ker T$. Then there is
a unique bounded linear operator $\overline T:X/M\to Y$ such that

$$\overline T \circ q = T,$$

and moreover $\|\overline T\| = \|T\|$.

## Facts & Assumptions

**Given:** A closed linear subspace $M \le X$, the quotient map $q:X\to X/M$,
and a bounded linear operator $T:X\to Y$ with $M \subseteq \ker T$.

[L1] The algebraic quotient universal property gives a unique linear map
$\overline T:X/M\to Y$ with $\overline T(qx)=Tx$
([[thm-quotient-vector-space-universal-property]]).

[L2] The quotient norm is
$\|x+M\|_{X/M} = \inf_{m \in M}\|x+m\|$ ([[def-quotient-seminorm]]).

[L3] A bounded operator has a concrete bound, and $q(x)=x+M$
([[def-bounded-linear-operator]], [[def-quotient-vector-space-coset-notation]]).

[L4] The quotient map sends the open unit ball of $X$ onto a set containing the
open unit ball of $X/M$ ([[thm-quotient-map-is-open]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], there is a unique linear map $\overline T:X/M\to Y$ with $\overline T(qx)=Tx$ for every $x \in X$. This proves representative independence before any norm estimate. [L1]

2.1 Let $\xi = x+M$ and let $m \in M$. Since $Tm=0$, $\overline T(\xi)=Tx=T(x+m)$. If $C$ is a bound for $T$ from [L3], then $\|\overline T(\xi)\| \le C\|x+m\|$ for every $m \in M$. Taking the infimum over $m$ and using [L2] gives $\|\overline T(\xi)\| \le C\|\xi\|_{X/M}$. Hence $\overline T$ is bounded and $\|\overline T\| \le \|T\|$. [step 1.1, L2, L3]

3.1 For every $x \in X$, $\|q(x)\|_{X/M} \le \|x\|$ because the infimum in [L2] can be evaluated at $m=0$. Therefore $\|Tx\|=\|\overline T(qx)\| \le \|\overline T\|\,\|x\|$ by step 2.1. Taking the supremum over $\|x\| \le 1$ gives $\|T\| \le \|\overline T\|$. [step 2.1, L2, L3]

4.1 Step 2.1 gave $\|\overline T\| \le \|T\|$, and step 3.1 gave the reverse inequality, so $\|\overline T\|=\|T\|$. The unit-ball content of [L4] is the same geometric reason that no larger quotient bound is needed. [step 2.1, step 3.1, L4]

5.1 The linear map in step 1.1 is therefore the unique bounded factor of $T$ through the normed quotient, and it has the same operator norm. [step 1.1, step 4.1] ∎
