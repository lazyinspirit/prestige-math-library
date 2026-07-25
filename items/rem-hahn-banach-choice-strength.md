---
id: rem-hahn-banach-choice-strength
kind: remark
title: "The set-theoretic cost of Hahn-Banach"
status: draft
origin: session
proved_here: false
deps: [rem-hahn-banach-theorem]
justified_by: []
forward_refs: [thm-ultrafilter-lemma, rem-choice-strengths, def-axiom-of-choice]
aliases: []
landmark: false
short: "BPI implies HB; HB yields a non-measurable set"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "W. A. J. Luxemburg, Two applications of the method of construction by ultrapowers to analysis, Bull. Amer. Math. Soc. 68 (1962) 416-419"
      url: "https://projecteuclid.org/journals/bulletin-of-the-american-mathematical-society-new-series/volume-68/issue-4/Two-applications-of-the-method-of-construction-by-ultrapowers-to/bams/1183524688.full"
    - title: "D. Pincus, The strength of the Hahn-Banach theorem, Victoria Symposium on Nonstandard Analysis, Lecture Notes in Math. 369, Springer (1974) 203-248"
      url: "https://doi.org/10.1007/bfb0066014"
    - title: "M. Foreman and F. Wehrung, The Hahn-Banach theorem implies the existence of a non-Lebesgue measurable set, Fund. Math. 138 (1991) 13-19"
      url: "https://doi.org/10.4064/fm-138-1-13-19"
    - title: "J. Pawlikowski, The Hahn-Banach theorem implies the Banach-Tarski paradox, Fund. Math. 138 (1991) 21-22"
      url: "https://doi.org/10.4064/fm-138-1-21-22"
    - title: "Boolean prime ideal theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem"
pipeline_run: null
---

## Statement

Write HB for the Hahn-Banach theorem in the form stated in
[[rem-hahn-banach-theorem]], and BPI for the Boolean prime ideal theorem, equivalently the
ultrafilter lemma. Over ZF:

1. **BPI implies HB** (Luxemburg, 1962). The extension is produced from an ultrapower rather than
   from a maximal element, so no well ordering of the space is needed.
2. **HB does not imply BPI** (Pincus, 1974), so the implication in (1) is strict; and BPI does
   not imply the axiom of choice (Halpern and Levy, 1971), so HB is strictly weaker than the axiom
   of choice. Both non-implications are relative-consistency results and hold under the consistency
   of ZF, never unconditionally.
3. **HB implies that some set of reals is not Lebesgue measurable** (Foreman and Wehrung, 1991),
   and in fact implies the Banach-Tarski paradox (Pawlikowski, 1991). Consequently, granted the
   consistency of ZF, HB is not provable in ZF. That it is not provable in ZF + DC either is quoted
   from models of ZF + DC in which every set of reals is Lebesgue measurable; the standard such
   model is Solovay's, built by collapsing an inaccessible cardinal, so that half rests on the
   consistency of ZFC together with an inaccessible and not on the consistency of ZF alone.

## Remarks

**Not proved in this library.** All four implications are cited. The independence results in
particular are forcing arguments and belong to the set theory track that this library has not
built.

**What would prove it.** (1) is an ultrapower construction over the ultrafilter lemma, which this
library does prove as [[thm-ultrafilter-lemma]]; it would become reachable as soon as normed spaces
exist, but the argument is still not written here. (2) and (3) rest on permutation models and on
Solovay style models of ZF + DC, which need forcing.

**Why it matters here.** The library's policy is that a theorem must name its choice principle.
[[rem-choice-strengths]] records where the ultrafilter lemma sits between ZF and the axiom of
choice ([[def-axiom-of-choice]]); this item records that Hahn-Banach sits strictly below the
ultrafilter lemma, and yet is already strong enough to produce a non-measurable set. So "uses
Hahn-Banach" is a real cost and not a formality, and it is a different, smaller cost than "uses
Zorn". The open questions attached to Hahn-Banach are recorded in
[[rem-discontinuous-functional-choice-strength]].
