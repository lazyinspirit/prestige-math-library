---
id: rem-tychonoff-choice-strengths
kind: remark
title: "The compact Hausdorff product theorem uses the ultrafilter lemma, while the published arbitrary compact product theorem assumes the full Axiom of Choice"
status: published
origin: session
deps: [thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma, thm-tychonoff, thm-ultrafilter-lemma, def-axiom-of-choice]
aliases: []
landmark: false
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
    - title: "Ultrafilter lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter_lemma"
pipeline_run: null
---

The proof of [[thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma]] spends the ultrafilter lemma at the universal-subnet step. The published [[thm-tychonoff]] asserts compactness for arbitrary compact factors under the full Axiom of Choice ([[def-axiom-of-choice]]). These are distinct stated hypotheses; this page makes no claim about their exact relative strength.
