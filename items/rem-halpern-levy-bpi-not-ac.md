---
id: rem-halpern-levy-bpi-not-ac
kind: remark
title: "Halpern and Lévy 1971: the Boolean prime ideal theorem does not imply the Axiom of Choice"
status: draft
origin: session
proved_here: false
deps: [rem-cohen-forcing-ac-independent, rem-feferman-no-free-ultrafilter-in-zf]
justified_by: []
forward_refs: [thm-ultrafilter-lemma, def-axiom-of-choice, rem-choice-strengths, rem-choice-ledger]
aliases: []
landmark: true
short: "BPI is strictly weaker than AC"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. D. Halpern and A. Lévy, The Boolean prime ideal theorem does not imply the axiom of choice, Proc. Sympos. Pure Math. XIII Part I (1971), 83-134"
      url: "https://doi.org/10.1090/pspum/013.1/0284328"
    - title: "Boolean prime ideal theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Statement

Write BPI for the **Boolean prime ideal theorem**, that every nontrivial Boolean
algebra has a prime ideal; over ZF this is equivalent to the ultrafilter lemma
(UL), that every filter on a set extends to an ultrafilter.

**If ZF is consistent, then ZF + BPI + (not AC) is consistent.** So BPI does not
imply the Axiom of Choice over ZF.

Halpern and Lévy (1971) prove this in the second Cohen model: adjoin countably
many mutually generic Cohen reals and take the symmetric submodel with finite
supports and the group of all permutations of the index set. The Axiom of Choice
fails there, because the set of adjoined reals cannot be well-ordered. That BPI
nevertheless holds is the difficult half, and it rests on the Halpern-Läuchli
partition theorem for products of finitely many trees.

**Combined with [[rem-feferman-no-free-ultrafilter-in-zf]]** this places UL
strictly between ZF and AC, relative to the consistency of ZF: UL is not provable
in ZF, and UL does not recover AC.

## Remarks

- **Not proved in this library.** Neither the symmetric model nor the
  Halpern-Läuchli partition theorem is developed here.

- **What would prove it.** The forcing track of
  [[rem-cohen-forcing-ac-independent]], plus a Ramsey-theoretic component: the
  Halpern-Läuchli theorem, and the deduction of BPI in the symmetric model from
  it. The partition theorem is genuinely combinatorial and is not implied by the
  forcing machinery alone.

- **Why it matters here.** [[rem-choice-strengths]] and [[rem-choice-ledger]]
  both quote this result, and it is what licenses the library's habit of naming
  [[thm-ultrafilter-lemma]] as a separate statement instead of inlining it into
  its applications. A theorem proved from UL costs strictly less than
  [[def-axiom-of-choice]], and "strictly" is exactly this item.

- **Conditional discipline.** Relative to the consistency of ZF. Note also the
  direction that is **not** claimed: the library proves AC implies UL, and cites
  this result for the failure of the converse; it proves neither the converse nor
  its failure.
