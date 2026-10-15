---
id: lem-tdmath-forward-spectator-cancellation
kind: lemma
title: Spectator cancellation without comparison completeness
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 4
deps: [def-tdmath-forward-sector-hypotheses, def-tdmath-tagged-scalable-compound, def-tdmath-forward-signed-comparison]
dependency_roles:
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
  precheck: n/a
---

## Statement

Under A1–A6 of [[def-tdmath-forward-sector-hypotheses]], for equal-mass compounds $A,B,C$, $A+C\prec B+C$ if and only if $A\prec B$. Consequently, for finite-support signed maps $u,v$ of equal total coefficient, define $u\preceq_s v$ by $(v-u)^-\prec(v-u)^+$. This relation is well-defined, agrees with $\prec$ on nonnegative maps, is invariant under adding a common signed map, is transitive, and is closed under addition of two comparisons. No comparison hypothesis is used.

## Facts & Assumptions

**Given:** Finite-support nonnegative compound maps, equal-mass comparisons, and A1–A6.

[A1] [[def-tdmath-forward-sector-hypotheses]]: the compound relation is reflexive and transitive, composition-consistent, positively scale-invariant, admits splitting/recombination, and satisfies the stated fixed-spectator stability axiom. It does not assume CH.

[F1] [[def-tdmath-tagged-scalable-compound]]: compounds are finite-support nonnegative maps; their total coefficient masses add under composition and scale under positive dilation.

[F2] [[def-tdmath-forward-signed-comparison]]: for equal-total finite-support maps $u,v$, $u\preceq_s v$ means $(v-u)^-\prec(v-u)^+$, with common signed translation leaving the difference unchanged.

## Proof

1.1 Assume $A+C\prec B+C$ and $m(C)>0$. Scaling by $1/n$ gives $A/n+C/n\prec B/n+C/n$. Define $E_j=(n-j)A/n+jB/n+C/n$ for $j=0,\ldots,n$. For $j<n$, add the common spectator $(n-j-1)A/n+jB/n$ to the scaled comparison to obtain $E_j\prec E_{j+1}$. Transitivity yields $A+C/n=E_0\prec E_n=B+C/n$. Stability with bases $A,B$, fixed positive spectators $C,C$, and $\epsilon_n=1/n$ gives $A\prec B$. If $m(C)=0$, nonnegativity gives $C=0$ and the implication is immediate. Conversely, consistency gives $A+C\prec B+C$ from $A\prec B$. [A1, F1, algebra]

2.1 For equal-total signed maps $u,v$, the difference $d=v-u$ has finite support and total coefficient zero, so $m(d^+)=m(d^-)$. If $u,v$ are nonnegative, their pointwise common part $k(x)=\min\{u(x),v(x)\}$ gives $u=k+d^-$ and $v=k+d^+$. Cancellation in step 1.1 proves $u\prec v$ exactly when $d^-\prec d^+$, which by [F2] is $u\preceq_s v$; adding a common signed map leaves $d$ unchanged by [F2]. [A1, F1, F2, step 1.1]

3.1 If $u\preceq_s v$ and $v\preceq_s w$, [F2] identifies these with comparisons of $(v-u)^-$ to $(v-u)^+$ and $(w-v)^-$ to $(w-v)^+$. Consistency combines them. Their pointwise common minimum cancels by step 1.1, leaving $(w-u)^-\prec(w-u)^+$, which [F2] identifies as $u\preceq_s w$. The same finite-sum argument proves closure under addition; reflexivity follows from reflexivity of the zero compound. [A1, F1, F2, step 1.1, algebra] ∎
