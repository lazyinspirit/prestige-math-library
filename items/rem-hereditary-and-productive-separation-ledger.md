---
id: rem-hereditary-and-productive-separation-ledger
kind: remark
title: "Preservation ledger for the separation axioms, with $T_1$ conventions kept explicit"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: not-applicable
deps: [thm-positive-heredity-of-separation-axioms, thm-positive-productivity-of-separation-axioms, lem-normality-is-closed-hereditary, thm-completely-normal-iff-hereditarily-normal, thm-normality-is-not-hereditary, thm-normality-is-not-productive]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "J. P. May, An Outline Summary of Basic Point Set Topology, §6"
      url: "https://math.uchicago.edu/~may/FINITE/REUNotes2010/Topology10.pdf"
pipeline_run: null
---

## Remarks

$T_0$, $T_1$, Hausdorffness, regularity, $T_3$, complete regularity, and Tychonoffness pass both to subspaces and to arbitrary products by [[thm-positive-heredity-of-separation-axioms]] and [[thm-positive-productivity-of-separation-axioms]]. The compound names retain their $T_1$ clauses: $T_3$ and Tychonoff are not alternative names for regularity and complete regularity.

Normality has a narrower positive result: it passes to closed subspaces by [[lem-normality-is-closed-hereditary]]. Complete normality is exactly hereditary normality by [[thm-completely-normal-iff-hereditarily-normal]]. Under countable choice the deleted Tychonoff plank refutes hereditary normality ([[thm-normality-is-not-hereditary]]); under choice the lower-limit plane refutes productive normality ([[thm-normality-is-not-productive]]). These failures do not alter the positive ledger above.
