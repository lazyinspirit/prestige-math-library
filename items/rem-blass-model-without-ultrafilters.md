---
id: rem-blass-model-without-ultrafilters
kind: remark
title: "Blass 1977: a model of ZF with no free ultrafilter on any set"
status: draft
origin: session
proved_here: false
deps: [rem-feferman-no-free-ultrafilter-in-zf]
justified_by: []
forward_refs: [def-ultrafilter, fs-every-ultrafilter-principal, thm-ultrafilter-lemma]
aliases: []
landmark: false
short: "every ultrafilter, on every set, principal"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "A. Blass, A model without ultrafilters, Bull. Acad. Polon. Sci. Sér. Sci. Math. Astronom. Phys. 25 (1977), 329-331"
      url: "https://en.wikipedia.org/wiki/Ultrafilter_on_a_set"
    - title: "S. Feferman, Some applications of the notions of forcing and generic sets, Fund. Math. 56 (1964/65), 325-345"
      url: "https://eudml.org/doc/213821"
    - title: "Boolean prime ideal theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem"
pipeline_run: null
---

## Statement

**If ZF is consistent, then ZF is consistent with the statement that every
ultrafilter on every set is principal.** Equivalently: there is a model of ZF
containing no free ultrafilter at all, on any set whatsoever.

This is Blass (1977), and it strictly strengthens
[[rem-feferman-no-free-ultrafilter-in-zf]], where the conclusion was obtained only
for $\mathbb{N}$. The model is a symmetric extension built over a model of ZFC in
which the symmetry group is chosen so that the argument applies uniformly to
every set of the model, not merely to the ground-model naturals.

## Remarks

- **Not proved in this library.** The construction is a symmetric extension and
  nothing of that kind is developed here.

- **What would prove it.** The same forcing and symmetric-model machinery named
  in [[rem-cohen-forcing-ac-independent]], with the additional uniformity
  argument that handles arbitrary sets rather than a single fixed set.

- **Why it matters here.** [[fs-every-ultrafilter-principal]] refutes the claim
  that every ultrafilter is principal, and does so only after invoking
  [[thm-ultrafilter-lemma]], which costs a choice principle. This item is the
  sharp statement of why that cost is unavoidable in the strongest possible
  sense: it is not that the refutation happens to use choice for the particular
  filter of tails on $\mathbb{N}$, it is that in ZF alone one cannot get a single
  non-principal instance of [[def-ultrafilter]] anywhere.

- **On the citation.** The primary source is a short note in the Bulletin de
  l'Académie Polonaise des Sciences, which has no open electronic edition; the
  reference url above points at the standard survey statement of the fact rather
  than at the note itself, and the note's full bibliographic details are given in
  the reference title.

- **Conditional discipline.** Relative to the consistency of ZF, as always. The
  claim is that ZF cannot refute "every ultrafilter is principal", not that the
  statement is true.
