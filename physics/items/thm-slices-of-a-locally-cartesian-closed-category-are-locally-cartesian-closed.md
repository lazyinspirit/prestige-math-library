---
id: thm-slices-of-a-locally-cartesian-closed-category-are-locally-cartesian-closed
kind: theorem
title: "Slices of a locally cartesian closed category are locally cartesian closed"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-locally-cartesian-closed-category, def-comma-slice-and-coslice-categories]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Emily Riehl, Category Theory in Context, 2nd ed., Lemma 4.6.3(i)"
      url: "https://emilyriehl.github.io/files/context.pdf"
---

## Statement

If $\mathcal C$ is locally cartesian closed, then for every object $X$ the slice category $\mathcal C/X$ is locally cartesian closed.

## Facts & Assumptions

**Given:** A locally cartesian closed category $\mathcal C$, an object $X$, and an object $a:A\to X$ of the slice category $\mathcal C/X$.

[L1] Local cartesian closedness means that every slice $\mathcal C/Z$ is cartesian closed ([[def-locally-cartesian-closed-category]]).

[L2] An object of $(\mathcal C/X)/a$ is exactly a morphism into $a$ in the slice, equivalently a morphism $u:U\to A$ in $\mathcal C$ over $X$; this identifies $(\mathcal C/X)/a$ with $\mathcal C/A$ ([[def-comma-slice-and-coslice-categories]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the slice-of-a-slice $(\mathcal C/X)/a$ is canonically isomorphic to the ordinary slice $\mathcal C/A$. [given, L2]

2.1 Since $\mathcal C$ is locally cartesian closed, [L1] says that $\mathcal C/A$ is cartesian closed. Transporting this structure across the isomorphism of step 1.1 shows that $(\mathcal C/X)/a$ is cartesian closed. [step 1.1, L1]

3.1 Because $a$ was an arbitrary object of $\mathcal C/X$, every slice of $\mathcal C/X$ is cartesian closed. Hence $\mathcal C/X$ is locally cartesian closed. [step 2.1, given] ∎
