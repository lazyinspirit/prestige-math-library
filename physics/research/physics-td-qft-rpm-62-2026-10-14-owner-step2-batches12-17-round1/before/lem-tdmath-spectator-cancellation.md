---
id: lem-tdmath-spectator-cancellation
kind: lemma
title: Spectator cancellation and signed-order algebra
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps: [def-tdmath-tagged-scalable-compound, lem-tdmath-compound-mass-well-defined, def-tdmath-comparison-and-stability, def-tdmath-signed-comparison]
dependency_roles:
  def-tdmath-tagged-scalable-compound: mathematical-premise
  lem-tdmath-compound-mass-well-defined: mathematical-premise
  def-tdmath-comparison-and-stability: mathematical-premise
  def-tdmath-signed-comparison: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, Theorem 2.1 and §II.D"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
---

## Statement

Under [[def-tdmath-comparison-and-stability]], for equal-mass compounds $A,B,C$, $A+C\preceq B+C$ if and only if $A\preceq B$. The signed relation of [[def-tdmath-signed-comparison]] is well-defined; on nonnegative equal-mass maps it agrees with $\preceq$, is invariant under adding the same finite-support signed map to both sides, and is transitive and closed under adding two comparisons.

## Facts & Assumptions

[F1] [[def-tdmath-tagged-scalable-compound]] and [[lem-tdmath-compound-mass-well-defined]]: compounds are finite-support nonnegative maps; their masses are finite sums, additive under composition and homogeneous under positive scaling.

[A1] [[def-tdmath-comparison-and-stability]]: $\preceq$ is a preorder, composition-consistent, positively scale-invariant, admits splitting/recombination, satisfies the stated positive-spectator stability axiom, and has CH.

[F2] [[def-tdmath-signed-comparison]]: for equal-total finite signed maps $u,v$, the signed comparison is defined by comparing $(v-u)^-$ with $(v-u)^+$.

## Proof

**Given:** [F1], [A1], and [F2].

1.1 For equal-total $u,v$, $d=v-u$ has finite support and total sum zero. Pointwise $d=d^+-d^-$, so finite-sum linearity gives $m(d^+)-m(d^-)=0$; both maps are finite-support and nonnegative. Thus the definition in [F2] compares equal-mass compounds. If $u,v$ are nonnegative, set $k(x)=\min\{u(x),v(x)\}$; then $u=k+(v-u)^-$ and $v=k+(v-u)^+$. [F1, F2]

1.2 Suppose $A+C\preceq B+C$ and $m(C)>0$. For each positive integer $n$, pointwise addition gives $A=n(A/n)$ and $B=n(B/n)$. Scaling the given comparison by $1/n$ gives $A/n+C/n\preceq B/n+C/n$. By composition consistency, replace the $n$ copies of $A/n$ one at a time by $B/n$, keeping the already replaced copies, the remaining copies, and $C/n$ as spectators; after all replacements, $A+C/n\preceq B+C/n$. Apply stability with $Z_0=Z_1=C$ and $\epsilon_n=1/n$ to obtain $A\preceq B$. If $m(C)=0$, nonnegativity implies $C=0$ and the conclusion is the premise itself. Conversely, $A\preceq B$ gives $A+C\preceq B+C$ by consistency. [A1, F1, algebra]

2.1 For nonnegative $u,v$, step 1.1 gives $u=k+(v-u)^-$ and $v=k+(v-u)^+$. Cancellation from step 1.2 shows $u\preceq v$ exactly when $(v-u)^-\preceq(v-u)^+$, which is $u\preceq_s v$. For general signed maps, adding a common map leaves $v-u$ unchanged, so it leaves signed comparison unchanged. [F2, step 1.1, step 1.2]

3.1 If $u\preceq_s v$ and $v\preceq_s w$, then consistency combines $(v-u)^-\preceq(v-u)^+$ and $(w-v)^-\preceq(w-v)^+$ into a comparison between the sums of their negative and positive parts. The two sums have a common pointwise minimum; cancel it by step 1.2. The remaining maps are precisely $(w-u)^-$ and $(w-u)^+$, so $u\preceq_s w$. The same sum-and-cancel argument applied to two independent signed comparisons proves closure under their addition; reflexivity follows from $0\preceq0$. [A1, F2, step 1.2] ∎

