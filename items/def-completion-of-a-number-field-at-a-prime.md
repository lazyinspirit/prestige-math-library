---
id: def-completion-of-a-number-field-at-a-prime
title: "Completion of a number field at a prime"
kind: definition
status: published
origin: pipeline
deps: [thm-number-field-places-classification, thm-completion-of-an-absolutely-valued-field, def-ramification-index, def-prime-above-and-residue-degree]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Chapter 7, Theorem 7.38 and Remark 7.39; Chapter 8, Proposition 8.2"
      url: https://www.jmilne.org/math/CourseNotes/ANT.pdf
---

## Definition

For a nonzero prime P of $\mathcal O_K$, let $K_P$ be the completion at $|x|_P=(NP)^{-\operatorname{ord}_P x}$. Its valuation ring has residue field $\mathcal O_K/P$, since the original valuation ring is $(\mathcal O_K)_P$ and completion preserves residues. In L/K with $P\mid p$, the normalized value restricts as $|\cdot|_P|_K=|\cdot|_p^{ef}$, because $NP=(Np)^f$ and $\operatorname{ord}_P|_K=e\operatorname{ord}_p$. When a literal extension of $|\cdot|_p$ is needed use $|\cdot|_P^{1/(ef)}$. Positive powers define the same topology and completion.
