---
id: cor-compact-regular-level-surfaces-have-finite-patch-covers
kind: corollary
title: 'A compact regular level surface is covered by finitely many regular surface patches'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-regular-level-surfaces-have-local-regular-parametrizations, def-metric-compactness, lem-compactness-is-intrinsic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: 'M. E. Taylor, Introduction to Analysis in Several Variables, Section 3.2'
      url: 'https://mtaylor.web.unc.edu/wp-content/uploads/sites/16915/2018/04/analmv.pdf'
pipeline_run: null
---

## Statement

If a regular level surface $S=F^{-1}(c)\subseteq\mathbb R^3$ is compact, then finitely many regular surface patches have relative interiors whose union contains $S$. The empty surface is covered by the empty family.

## Facts & Assumptions

**Given:** A compact regular level surface $S$.

[L1] Every point of $S$ lies in the relative interior of a regular surface patch ([[thm-regular-level-surfaces-have-local-regular-parametrizations]]).

[L2] Compactness is intrinsic to the subspace metric, and every open cover of a compact metric space has a finite subcover ([[lem-compactness-is-intrinsic]], [[def-metric-compactness]]).

## Proof

**Proof technique:** direct.

1.1 If $S=\varnothing$, the empty family covers it. Otherwise, for each $p\in S$, [L1] gives a patch whose relative interior contains $p$; these relative interiors form an open cover of $S$ in its subspace topology. [given, L1]

2.1 By [L2], select a finite subcover. The corresponding finite list of regular patches covers $S$. [step 1.1, L2, choose]

3.1 Together with the empty case in step 1.1, this proves the statement for every compact regular level surface. [step 1.1, step 2.1] ∎
