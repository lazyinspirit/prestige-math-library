---
id: lem-tdmath-compound-mass-well-defined
kind: lemma
title: Compound mass is well-defined and additive
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps: [def-tdmath-tagged-scalable-compound, def-finite-sum, lem-finite-sum-reindexing-and-fubini, lem-finite-sum-laws]
dependency_roles:
  lem-finite-sum-laws: mathematical-premise
  def-tdmath-tagged-scalable-compound: mathematical-premise
  def-finite-sum: mathematical-premise
  lem-finite-sum-reindexing-and-fubini: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§II.A.1–II.A.2"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
verification:
  verified:
    model: "gpt-6-luna, gpt-6.1-sol, and delegated Codex review/repair agents; see completed run evidence"
    verdict: "Owner accepted completed review and adjudication evidence for publication"
    date: "2026-10-15"
    scope: "Owner accepted completed delegated review and resolved adjudication evidence from research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json for publication. No new mathematical audit or source retrieval performed for publication; outside-frontier supplier limitations remain as recorded in the final report."
    evidence: "research/physics-td-qft-rpm-62-2026-10-14-step6-evidence.json"
    publication: "research/physics-td-qft-rpm-62-2026-10-14-publication-2026-10-15.json"
    delegated_by: "owner; publication instruction 2026-10-15"
---

## Statement

For every tagged scalable compound $c$, the mass in [[def-tdmath-tagged-scalable-compound]] is independent of the finite summation set used. For any compounds $c,d$ and $t\ge0$, $m(c+d)=m(c)+m(d)$ and $m(tc)=t m(c)$; $m(0)=0$. For every $x\in X$, the unit-state compound $e_x$ has $m(e_x)=1$. A compound has zero mass if and only if it is the empty compound.

## Facts & Assumptions

[F1] [[def-tdmath-tagged-scalable-compound]]: compounds are nonnegative finite-support functions, and mass is defined by a finite sum over support.

[F2] [[lem-finite-sum-reindexing-and-fubini]] supplies bijective reindexing and splitting over disjoint finite sets. Enumerating a finite set expresses its real sum using [[def-finite-sum]]; additivity and scalar linearity then follow from clauses 1 and 2 of [[lem-finite-sum-laws]]. In particular, its sum of zero terms is zero, so disjoint splitting shows that adjoining zero terms leaves a sum unchanged. Clause 4 of [[lem-finite-sum-laws]] gives nonnegativity of a sum of nonnegative terms and says that a zero sum forces each term to be zero.

## Proof

**Given:** [F1] and [F2].

1.1 Let $E$ be any finite subset of $X$ containing $\operatorname{supp}(c)$. On $E\setminus\operatorname{supp}(c)$ the function is zero, so the finite sum over $E$ equals the finite sum over $\operatorname{supp}(c)$ by [F2]. If $E$ and $E'$ both contain the support, compare each sum to the sum over the finite union $E\cup E'$; hence the value is independent of the chosen finite summation set. [F1, F2]

2.1 The support of $c+d$ is contained in the finite union of the supports of $c$ and $d$. Sum over that union; distributivity in [F2] gives $m(c+d)=m(c)+m(d)$, since zero terms outside each individual support contribute nothing by step 1.1. The support of $tc$ equals that of $c$ for $t>0$, and scalar linearity of the finite sum gives $m(tc)=t m(c)$. For $t=0$, $tc=0$ and both $m(tc)$ and $t m(c)$ are zero. The empty sum is zero, so $m(0)=0$. [F1, F2, step 1.1]

3.1 The support of $e_x$ is the singleton $\{x\}$, whose one summand is $1$, so the recursion in [F2] gives $m(e_x)=0+1=1$. If $m(c)=0$, sum its nonnegative coefficients over its finite support. Clause 4 in [F2] forces every summand to be zero; coefficients off the support are also zero, hence $c=0$. Conversely $c=0$ has zero mass by step 2.1. Thus all the claimed mass identities hold, including the empty and unit-state cases. [F1, F2, step 2.1] ∎

