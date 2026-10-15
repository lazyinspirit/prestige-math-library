---
id: lem-tdmath-forward-spectator-cancellation
kind: lemma
title: Spectator cancellation without comparison completeness
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps: [def-canonical-natural, lem-of-naturals-positive, lem-tdmath-reciprocal-naturals-tend-zero, lem-tdmath-compound-mass-well-defined, def-tdmath-forward-sector-hypotheses, def-tdmath-tagged-scalable-compound, def-tdmath-forward-signed-comparison]
dependency_roles:
  def-canonical-natural: mathematical-premise
  lem-of-naturals-positive: mathematical-premise
  lem-tdmath-reciprocal-naturals-tend-zero: mathematical-premise
  lem-tdmath-compound-mass-well-defined: mathematical-premise
  def-tdmath-forward-sector-hypotheses: mathematical-premise
  def-tdmath-tagged-scalable-compound: mathematical-premise
  def-tdmath-forward-signed-comparison: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, Theorem 2.1 and §III.C"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §§4.1 and 7.2–7.3, complete 607-page edition"
      url: "https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
  precheck: n/a
---

## Statement

Under A1–A6 of [[def-tdmath-forward-sector-hypotheses]], for compounds $A,B$ with $m(A)=m(B)$ and every finite spectator compound $C$, $A+C\prec B+C$ if and only if $A\prec B$. Consequently, for finite-support signed maps $u,v$ of equal total coefficient, define $u\preceq_s v$ by $(v-u)^-\prec(v-u)^+$. This relation is well-defined, agrees with $\prec$ on nonnegative maps, is invariant under adding a common signed map, is transitive, and is closed under addition of two comparisons. No comparison hypothesis is used.

## Facts & Assumptions

**Given:** Finite-support nonnegative compound maps, equal-mass comparisons, and A1–A6.

[A1] [[def-tdmath-forward-sector-hypotheses]]: the compound relation is reflexive and transitive, composition-consistent, positively scale-invariant, admits splitting/recombination, and satisfies the stated fixed-spectator stability axiom. It does not assume CH.

[F1] [[def-tdmath-tagged-scalable-compound]]: compounds are finite-support nonnegative maps; their total coefficient masses add under composition and scale under nonnegative dilation. [[lem-tdmath-compound-mass-well-defined]] also proves that zero mass is equivalent to the empty map; the spectator need not have the same mass as either base.

[F2] [[def-tdmath-forward-signed-comparison]]: for equal-total finite-support maps $u,v$, $u\preceq_s v$ means $(v-u)^-\prec(v-u)^+$, with common signed translation leaving the difference unchanged.

[F3] [[def-canonical-natural]] and [[lem-of-naturals-positive]] give the canonical embedding $\iota_{\mathbb N}:\mathbb N\to\mathbb R$, whose successor values are positive and are finite sums of $1$. [[lem-tdmath-reciprocal-naturals-tend-zero]] gives the real sequence $\epsilon_k=1/\iota_{\mathbb N}(\sigma(k))>0$, $k\in\mathbb N$, with $\epsilon_k\to0$.

## Proof

1.1 Suppose $A+C\prec B+C$ and $m(C)>0$. For each $k\in\mathbb N$, set $n=\sigma(k)$ and $r=\iota_{\mathbb N}(n)>0$, and write $A/r=(1/r)A$. The embedding's successor rule and finite induction show that the sum of $n$ copies of $A/r$ is $r(A/r)=A$, and likewise for $B$. Scaling the given comparison by $1/r$ gives $A/r+C/r\prec B/r+C/r$. By composition consistency, replace the $n$ copies of $A/r$ one at a time by $B/r$, keeping the already replaced copies, the remaining copies, and $C/r$ as spectators; after these finitely many replacements, $A+\epsilon_k C\prec B+\epsilon_k C$. This holds for every natural index $k$. By [F3], $\epsilon_k>0$ and $\epsilon_k\to0$, so stability with $Z_0=Z_1=C$ gives $A\prec B$. If $m(C)=0$, nonnegativity implies $C=0$ and the conclusion is the premise itself. Conversely, $A\prec B$ gives $A+C\prec B+C$ by consistency. [A1, F1, F3, algebra, induction]

2.1 For equal-total signed maps $u,v$, the difference $d=v-u$ has finite support and total coefficient zero, so $m(d^+)=m(d^-)$. If $u,v$ are nonnegative, their pointwise common part $k(x)=\min\{u(x),v(x)\}$ gives $u=k+d^-$ and $v=k+d^+$. Cancellation in step 1.1 proves $u\prec v$ exactly when $d^-\prec d^+$, which by [F2] is $u\preceq_s v$; adding a common signed map leaves $d$ unchanged by [F2]. [A1, F1, F2, step 1.1]

3.1 If $u\preceq_s v$ and $v\preceq_s w$, [F2] identifies these with comparisons of $(v-u)^-$ to $(v-u)^+$ and $(w-v)^-$ to $(w-v)^+$. Consistency combines them. Their pointwise common minimum cancels by step 1.1, leaving $(w-u)^-\prec(w-u)^+$, which [F2] identifies as $u\preceq_s w$. The same finite-sum argument proves closure under addition; reflexivity follows from reflexivity of the zero compound. [A1, F1, F2, step 1.1, algebra] ∎
