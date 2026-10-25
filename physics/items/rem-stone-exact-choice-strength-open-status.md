---
id: rem-stone-exact-choice-strength-open-status
kind: remark
title: "The proved Stone theorem and its effective strengthening"
status: published
origin: pipeline
deps: [thm-relative-consistency-dc-without-stone, thm-effective-metacompact-discrete-metrics-implies-ac, thm-stone-metric-spaces-are-paracompact, def-metacompact-space, def-axiom-of-choice]
justified_by: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "C. Good, I. J. Tree, and W. S. Watson, On Stone's theorem and the axiom of choice"
      url: "https://web.mat.bham.ac.uk/C.Good/research/pdfs/stone.pdf"
      locator: "Section 4, question and Proposition 5, printed pp. 8-9"
    - title: "Samuel Corson, The Independence of Stone's Theorem from the Boolean Prime Ideal Theorem"
      url: "https://arxiv.org/pdf/2001.06513"
      locator: "Introduction and Theorem 1"
verification:
  repair: research/recorded-retirement-2026-10-06/receipts/rem-stone-exact-choice-strength-open-status.json
---

## Statement

AC proves that every metric space is paracompact
([[thm-stone-metric-spaces-are-paracompact]]). The stronger assertion that every
open cover of every discrete metrizable space has a point-finite refinement
equipped with a refinement map implies AC
([[thm-effective-metacompact-discrete-metrics-implies-ac]]).

## Remarks

- **The ordinary theorem.** The AC hypothesis in the local Stone theorem is
  sufficient for its proof. The theorem supplies a locally finite open
  refinement of every open cover; it asserts no global refinement operator.

- **The effective strengthening.** The refinement map is part of the
  hypothesis in [[thm-effective-metacompact-discrete-metrics-implies-ac]],
  and the local proof recovers a choice function from that map. This stronger
  assertion is not identified with the ordinary existential Stone theorem.

- **The separate DC row.** [[thm-relative-consistency-dc-without-stone]] is the
  existing supplier for the conditional comparison with DC. The present
  amendment removes the unsupported BPI transfer comparison and makes no claim
  about the current research status of the exact ordinary theorem.
