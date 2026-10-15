---
id: def-tdmath-comparison-and-stability
kind: definition
title: Comparison and stability for compounds
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 2
deps: [def-tdmath-tagged-scalable-compound, lem-tdmath-compound-mass-well-defined, def-natural-numbers, def-nat-order, def-real-limit]
dependency_roles:
  def-tdmath-tagged-scalable-compound: mathematical-premise
  lem-tdmath-compound-mass-well-defined: mathematical-premise
  def-natural-numbers: mathematical-premise
  def-nat-order: mathematical-premise
  def-real-limit: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§II.C–II.D"
      url: "https://arxiv.org/pdf/cond-mat/9708200v2"
    - title: "Campión et al., A Survey on the Mathematical Foundations of Axiomatic Entropy, §§2–5"
      url: "https://www.mdpi.com/2075-1680/7/2/29/pdf"
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

## Definition

Fix a nonempty set $X$ and the compounds of [[def-tdmath-tagged-scalable-compound]]. A **comparison relation** $\preceq$ is defined only for pairs $(A,B)$ with $m(A)=m(B)$. Write $A\sim B$ when both $A\preceq B$ and $B\preceq A$; this is equivalence, not equality of coefficient functions. The following are explicit hypotheses on $\preceq$:

1. **Preorder:** $A\preceq A$, and $A\preceq B\preceq C$ implies $A\preceq C$.
2. **Composition consistency:** $A\preceq B$ implies $A+C\preceq B+C$ for every compound $C$.
3. **Positive scaling:** $A\preceq B$ implies $tA\preceq tB$ for every real $t>0$.
4. **Splitting and recombination:** for $x\in X$, $t>0$ and $0<s<t$, the one-state compound $te_x$ is equivalent to $se_x+(t-s)e_x$.
5. **Stability:** for equal-mass $A,B$, fixed positive compounds $Z_0,Z_1$ with $m(Z_0)=m(Z_1)$, and a sequence $\epsilon_n>0$ decreasing to $0$, if $A+\epsilon_n Z_0\preceq B+\epsilon_n Z_1$ for every $n$, then $A\preceq B$.
6. **Comparison hypothesis (CH):** for every equal-mass pair $A,B$, either $A\preceq B$ or $B\preceq A$ (or both).

These are mathematical assumptions, not conclusions about a physical system. No antisymmetry, continuity, convexity, or strict comparison is included. Strict comparison means $A\preceq B$ and not $B\preceq A$.

## Remarks

In the stability clause, a sequence $\epsilon_n$ is a function $\mathbb N\to\mathbb R$; “decreasing to $0$” means $\epsilon_m\le\epsilon_n$ whenever $n\le m$ and $\epsilon_n\to0$ in the sense of [[def-real-limit]]. The separate requirement $\epsilon_n>0$ is stated in the clause.
