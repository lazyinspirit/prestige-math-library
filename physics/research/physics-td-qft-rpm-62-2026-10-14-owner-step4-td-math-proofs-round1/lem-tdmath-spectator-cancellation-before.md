---
id: lem-tdmath-spectator-cancellation
kind: lemma
title: Spectator cancellation and signed-order algebra
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps: [def-tdmath-tagged-scalable-compound, lem-tdmath-compound-mass-well-defined, def-tdmath-comparison-and-stability, def-tdmath-signed-comparison, def-canonical-natural, lem-of-naturals-positive, lem-tdmath-reciprocal-naturals-tend-zero]
dependency_roles:
  def-tdmath-tagged-scalable-compound: mathematical-premise
  lem-tdmath-compound-mass-well-defined: mathematical-premise
  def-tdmath-comparison-and-stability: mathematical-premise
  def-tdmath-signed-comparison: mathematical-premise
  def-canonical-natural: mathematical-premise
  lem-of-naturals-positive: mathematical-premise
  lem-tdmath-reciprocal-naturals-tend-zero: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, Theorem 2.1 and §II.D"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
---

## Statement

Under [[def-tdmath-comparison-and-stability]], for compounds $A,B$ with $m(A)=m(B)$ and any compound $C$, $A+C\preceq B+C$ if and only if $A\preceq B$. The signed relation of [[def-tdmath-signed-comparison]] is well-defined; on nonnegative equal-mass maps it agrees with $\preceq$, is invariant under adding the same finite-support signed map to both sides, and is transitive and closed under adding two comparisons.

## Facts & Assumptions

[F1] [[def-tdmath-tagged-scalable-compound]] and [[lem-tdmath-compound-mass-well-defined]]: compounds are finite-support nonnegative maps; their masses are finite sums, additive under composition and homogeneous under positive scaling.

[A1] [[def-tdmath-comparison-and-stability]]: $\preceq$ is a preorder, composition-consistent, positively scale-invariant, admits splitting/recombination, satisfies the stated positive-spectator stability axiom, and has CH.

[F2] [[def-tdmath-signed-comparison]]: for equal-total finite signed maps $u,v$, the signed comparison is defined by comparing $(v-u)^-$ with $(v-u)^+$.

[F3] [[def-canonical-natural]] and [[lem-of-naturals-positive]] give the canonical embedding $\iota_{\mathbb N}:\mathbb N\to\mathbb R$, whose successor values are positive and are finite sums of $1$. [[lem-tdmath-reciprocal-naturals-tend-zero]] gives the real sequence $\epsilon_k=1/\iota_{\mathbb N}(\sigma(k))>0$, $k\in\mathbb N$, with $\epsilon_k\to0$.

## Proof

**Given:** [F1], [A1], [F2], and [F3].

1.1 For equal-total $u,v$, $d=v-u$ has finite support and total sum zero. Pointwise $d=d^+-d^-$, so finite-sum linearity gives $m(d^+)-m(d^-)=0$; both maps are finite-support and nonnegative. Thus the definition in [F2] compares equal-mass compounds. If $u,v$ are nonnegative, set $k(x)=\min\{u(x),v(x)\}$; then $u=k+(v-u)^-$ and $v=k+(v-u)^+$. [F1, F2]

1.2 Suppose $A+C\preceq B+C$ and $m(C)>0$. For each $k\in\mathbb N$, set $n=\sigma(k)$ and $r=\iota_{\mathbb N}(n)>0$, and write $A/r=(1/r)A$. The embedding's successor rule and finite induction show that the sum of $n$ copies of $A/r$ is $r(A/r)=A$, and likewise for $B$. Scaling the given comparison by $1/r$ gives $A/r+C/r\preceq B/r+C/r$. By composition consistency, replace the $n$ copies of $A/r$ one at a time by $B/r$, keeping the already replaced copies, the remaining copies, and $C/r$ as spectators; after these finitely many replacements, $A+\epsilon_k C\preceq B+\epsilon_k C$. This holds for every natural index $k$. By [F3], $\epsilon_k>0$ and $\epsilon_k\to0$, so stability with $Z_0=Z_1=C$ gives $A\preceq B$. If $m(C)=0$, nonnegativity implies $C=0$ and the conclusion is the premise itself. Conversely, $A\preceq B$ gives $A+C\preceq B+C$ by consistency. [A1, F1, F3, algebra, induction]

2.1 For nonnegative $u,v$, step 1.1 gives $u=k+(v-u)^-$ and $v=k+(v-u)^+$. Cancellation from step 1.2 shows $u\preceq v$ exactly when $(v-u)^-\preceq(v-u)^+$, which is $u\preceq_s v$. For general signed maps, adding a common map leaves $v-u$ unchanged, so it leaves signed comparison unchanged. [F2, step 1.1, step 1.2]

3.1 If $u\preceq_s v$ and $v\preceq_s w$, consistency gives $N\preceq P$, where $N:=(v-u)^-+(w-v)^-$ and $P:=(v-u)^++(w-v)^+$. Pointwise $P-N=w-u$. Set $K(x):=\min\{P(x),N(x)\}$. If $P(x)\ge N(x)$ then $P(x)-K(x)=(w-u)^+(x)$ and $N(x)-K(x)=(w-u)^-(x)$; if $P(x)<N(x)$ the same identities follow with the two sides exchanged. Thus $P=K+(w-u)^+$ and $N=K+(w-u)^-$, with all four maps finite-support and nonnegative. Cancellation from step 1.2 gives $(w-u)^-\preceq(w-u)^+$, hence $u\preceq_s w$. For two independent signed comparisons, the same pointwise decomposition of the sums of their positive and negative parts proves closure under adding comparisons. Reflexivity follows because $0\preceq0$. [A1, F2, step 1.2] ∎

