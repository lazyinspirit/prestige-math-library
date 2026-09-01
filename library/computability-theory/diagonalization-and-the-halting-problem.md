---
page: diagonalization-and-the-halting-problem
title: "Diagonalization and the Halting Problem"
status: published
items:
  - def-turing-machine-acceptance-problem
  - thm-machine-acceptance-is-recognizable
  - lem-diagonal-self-application-machine
  - thm-machine-acceptance-is-undecidable
  - def-halting-problem
  - thm-halting-is-recognizable-and-undecidable
  - cor-nonhalting-is-not-recognizable
  - thm-an-unrecognizable-language-exists
  - def-busy-beaver-function
  - thm-busy-beaver-dominates-every-total-computable-function
  - cor-busy-beaver-is-not-computable
  - thm-totality-is-not-recognizable
  - thm-machine-equivalence-is-undecidable
examples:
  - fs-undecidable-means-no-instance-can-be-answered
  - fs-diagonalization-needs-literal-source-self-reading
---

This page isolates the first sharp gap between recognition and decision. It
starts with the coded acceptance language $A_{TM}$, proves that acceptance is
recognizable, and then turns the same coding machinery against any putative
decider by a type-correct diagonal self-application argument. That produces the
standard acceptance undecidability theorem and then the halting problem itself
by a direct reduction.

The second half records three consequences that matter later. The complement of
halting gives an explicit unrecognizable language, the busy beaver function
captures the qualitative outgrowth of computable running-time bounds, and two
further direct reductions show that total halting and language equivalence of
machines already sit beyond the decidable frontier without appealing yet to
Rice's theorem.
