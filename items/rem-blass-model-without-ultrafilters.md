---
id: rem-blass-model-without-ultrafilters
kind: remark
title: "Blass 1977: a model of ZF with no free ultrafilter on any set"
status: published
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
  sources_checked:
    date: 2026-07-26
    scope: citations
    by: session-audit
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

This is Blass (1977). As a statement it strengthens
[[rem-feferman-no-free-ultrafilter-in-zf]], where the conclusion was obtained only
for $\mathbb{N}$: "every ultrafilter on every set is principal" implies "every
ultrafilter on $\mathbb{N}$ is principal", so the consistency of the first is the
stronger result. The model is again obtained by forcing and symmetry, but the
construction is not reproduced here: the published note is a summary (see the
citation remark below), and this library has not read a full account of it, so it
records the conclusion and not the method.

## Remarks

- **Not proved in this library.** No forcing or symmetric-model machinery is
  developed here.

- **What would prove it.** The forcing and symmetric-model machinery named
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
  l'Académie Polonaise des Sciences (volume 25, number 4, pages 329-331), which
  has no open electronic edition and which the reviewing literature describes as
  a summary rather than a full account. The reference url above therefore points
  at the standard survey statement of the fact, "ZF alone does not even imply
  that there exists a non-principal ultrafilter on some set", rather than at the
  note itself; the note's full bibliographic details are given in the reference
  title. The survey page states the fact but does not name Blass, so the
  attribution rests on the bibliographic record, not on that page.

- **Conditional discipline.** Relative to the consistency of ZF, as always. The
  claim is that ZF cannot refute "every ultrafilter is principal", not that the
  statement is true.
