---
id: rem-banach-alaoglu-versus-sequential-alaoglu
kind: remark
title: Banach–Alaoglu versus sequential Alaoglu
status: draft
origin: pipeline
deps: ["thm-banach-alaoglu", "cor-separable-banach-dual-ball-is-weak-star-sequentially-compact", "cor-dual-unit-ball-has-extreme-points"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: "Bühler–Salamon, Functional Analysis"
      url: "https://uomustansiriyah.edu.iq/media/lectures/9/9_2021_09_21!12_02_01_AM.pdf"
      locator: "§3.2.1, Theorem 3.30 and Example 3.31, p. 132; §3.2.3, Theorem 3.33, pp. 134–135"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
      locator: "§5.3, Theorem 5.10 and formula (5.12), pp. 146–147"
---

## Remark

Three conclusions on dual balls have deliberately different hypotheses and
proof costs.

- [[thm-banach-alaoglu]] assumes the ultrafilter lemma and gives weak-star
  compactness for the dual ball of every normed space.  It does not turn an
  arbitrary net into a sequence.
- When the predual is separable,
  [[cor-separable-banach-dual-ball-is-weak-star-sequentially-compact]] combines
  the same compactness assumption with an explicit metric on the bounded ball;
  the compact-metric implication used there is choice-free.
- [[cor-dual-unit-ball-has-extreme-points]] is stated under full AC because the
  implemented Krein–Milman branch uses Zorn and AC-backed Hahn–Banach in
  addition to the ultrafilter lemma needed for Alaoglu.

The companion counterexample shows that the first bullet cannot in general be
strengthened to sequential compactness.  No converse choice-theoretic claim is
made here.  In particular, the historical assertion that an appropriate
Krein–Milman principle together with the ultrafilter lemma yields AC remains an
unresolved source obligation in this run and is not recorded, cited, or used as
a theorem.  These distinctions also apply at the endpoints: the zero predual
has a singleton dual ball satisfying all three conclusions trivially, while
nonseparable preduals are where compactness and sequential compactness can
separate.
