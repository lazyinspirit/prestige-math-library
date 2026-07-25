---
id: rem-feferman-no-free-ultrafilter-in-zf
kind: remark
title: "Feferman 1965: ZF does not prove that a free ultrafilter on the naturals exists"
status: draft
origin: session
proved_here: false
deps: [rem-cohen-forcing-ac-independent]
justified_by: []
forward_refs: [thm-ultrafilter-lemma, def-ultrafilter, fs-every-ultrafilter-principal, rem-choice-strengths]
aliases: []
landmark: true
short: "the ultrafilter lemma is not a theorem of ZF"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "S. Feferman, Some applications of the notions of forcing and generic sets, Fund. Math. 56 (1964/65), 325-345"
      url: "https://eudml.org/doc/213821"
    - title: "Ultrafilter on a set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ultrafilter_on_a_set"
    - title: "Boolean prime ideal theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Boolean_prime_ideal_theorem"
pipeline_run: null
---

## Statement

**If ZF is consistent, then ZF does not prove that there is a free (that is,
non-principal) ultrafilter on $\mathbb{N}$.**

Feferman (1965), using Cohen's forcing, produces a model of ZF in which every
ultrafilter on $\mathbb{N}$ is principal. The model is built by adjoining
countably many Cohen reals and taking the symmetric submodel with finite
supports; a genericity argument shows that any ultrafilter on $\mathbb{N}$ in
that submodel is decided by a finite condition, and a finitely decided ultrafilter
on $\mathbb{N}$ is principal.

**Consequence, and this is the form the library needs.** The ultrafilter lemma
(UL), that every filter on a set extends to an ultrafilter, produces a free
ultrafilter on $\mathbb{N}$ from the filter of cofinite sets. So, if ZF is
consistent, **UL is not a theorem of ZF**, and neither is its equivalent, the
Boolean prime ideal theorem.

## Remarks

- **Not proved in this library.** Forcing and symmetric models are not developed
  here.

- **What would prove it.** The forcing track named in
  [[rem-cohen-forcing-ac-independent]], plus the genericity argument that no
  hereditarily symmetric name can decide the membership of every subset of
  $\mathbb{N}$ in a purported ultrafilter.

- **Why it matters here.** [[rem-choice-strengths]] cites exactly this result for
  its first bullet, "UL is not a theorem of ZF", which is one of the two poles
  that locate UL strictly between ZF and the Axiom of Choice; the other pole is
  [[rem-halpern-levy-bpi-not-ac]]. It is also what makes
  [[fs-every-ultrafilter-principal]] an unusual item: that statement is false in
  ZFC, since [[thm-ultrafilter-lemma]] refutes it, and yet it is **consistent
  with ZF**, so the refutation genuinely consumes a choice principle and cannot
  be made choice-free. The strengthening from $\mathbb{N}$ to arbitrary sets is
  [[rem-blass-model-without-ultrafilters]].

- **Conditional discipline.** The statement is relative to the consistency of ZF.
  This library never says "free ultrafilters do not exist"; it says that ZF alone
  cannot produce one, and that [[def-ultrafilter]] is satisfied non-principally
  only once a choice principle is available.
