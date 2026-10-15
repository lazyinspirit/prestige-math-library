---
id: def-tdmath-signed-comparison
kind: definition
title: Signed comparison of finite coefficient maps
status: published
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 3
deps: [def-tdmath-tagged-scalable-compound, def-tdmath-comparison-and-stability]
justified_by: [lem-tdmath-spectator-cancellation]
dependency_roles:
  def-tdmath-tagged-scalable-compound: mathematical-premise
  def-tdmath-comparison-and-stability: mathematical-premise
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §II.D"
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

## Definition

Let $u,v:X\to\mathbb R$ be finite-support real coefficient maps with equal total coefficient $\sum_xu(x)=\sum_xv(x)$. These signed maps are formal comparison notation, not compounds. Put $d:=v-u$ and define $d^+(x):=\max\{d(x),0\}$ and $d^-(x):=\max\{-d(x),0\}$. Then $d^+,d^-$ are nonnegative finite-support compounds of equal mass, as verified in [[lem-tdmath-spectator-cancellation]]. Define

$$u\preceq_s v\quad\Longleftrightarrow\quad d^-\preceq d^+,$$

using the compound comparison relation of [[def-tdmath-comparison-and-stability]]. Thus positive coefficients of $v-u$ remain on the right and negative coefficients move to the left. Signed notation is never a claim that a negative amount of a physical system exists.
