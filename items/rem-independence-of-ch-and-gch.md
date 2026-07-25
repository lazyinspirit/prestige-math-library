---
id: rem-independence-of-ch-and-gch
kind: remark
title: "The continuum hypothesis and its generalisation are independent of ZFC"
status: draft
origin: session
proved_here: false
deps: [rem-godel-constructible-universe, rem-cohen-forcing-ac-independent]
justified_by: []
forward_refs: [rem-continuum-hypothesis, thm-cantor-powerset, def-cardinal]
aliases: [rem-ch-independent]
landmark: true
short: "Con(ZFC) implies Con(ZFC + CH) and Con(ZFC + not CH)"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Continuum hypothesis (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuum_hypothesis"
    - title: "P. J. Cohen, The independence of the continuum hypothesis, Proc. Nat. Acad. Sci. USA 50 (1963), 1143-1148"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC221287/"
    - title: "K. Gödel, The consistency of the axiom of choice and of the generalized continuum-hypothesis, Proc. Nat. Acad. Sci. USA 24 (1938), 556-557"
      url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC1077160/"
pipeline_run: null
---

## Statement

Write CH for the **continuum hypothesis**, the assertion that no set $A$
satisfies $\mathbb{N} \prec A \prec \mathcal{P}(\mathbb{N})$, where $X \prec Y$
means that $X$ injects into $Y$ but $Y$ does not inject into $X$. Write GCH for
the **generalised continuum hypothesis**, the assertion that for no infinite $A$
is there a $B$ with $A \prec B \prec \mathcal{P}(A)$.

**If ZFC is consistent, then all four of ZFC + CH, ZFC + (not CH), ZFC + GCH and
ZFC + (not GCH) are consistent.** In particular neither CH nor GCH is decided by
ZFC, unless ZFC is inconsistent.

The two halves come from the two constructions already recorded here. The
constructible universe of [[rem-godel-constructible-universe]] satisfies GCH, and
hence CH, which rules out a ZFC refutation of either. Cohen's forcing, the method
of [[rem-cohen-forcing-ac-independent]], adjoins $\aleph_2$ many generic subsets
of $\mathbb{N}$ to a model of ZFC + GCH while preserving cardinals, producing a
model of ZFC in which CH, and therefore GCH, fails.

In cardinal notation, and using the alephs and beths that this library has not
developed, GCH is the statement $2^{\aleph_\alpha} = \aleph_{\alpha+1}$ for every
ordinal $\alpha$, and CH is its instance $\alpha = 0$.

## Remarks

- **Not proved in this library.** Neither half is proved here, and the cardinal
  arithmetic in which the statement is usually phrased is itself only partly
  available: [[def-cardinal]] exists, but exponentiation of cardinals and the
  aleph hierarchy do not.

- **What would prove it.** For consistency of CH, the inner model $L$ together
  with its condensation lemma. For consistency of the negation, the forcing
  $\mathrm{Fn}(\aleph_2 \times \omega, 2)$ of finite partial functions, plus the
  countable chain condition and the $\Delta$-system lemma, which are what show
  that this forcing collapses no cardinal. Both belong to a forcing and
  inner-model track that this library does not contain.

- **Why it matters here.** [[rem-continuum-hypothesis]] states CH immediately
  after [[thm-cantor-powerset]] establishes the gap
  $\mathbb{N} \prec \mathcal{P}(\mathbb{N})$, and has to record that the obvious
  next question is not answerable. This item is the result it quotes. Note the
  gap that [[rem-continuum-hypothesis]] itself points out: the form of CH about
  $\mathbb{R}$ rather than about $\mathcal{P}(\mathbb{N})$ needs
  $\mathbb{R} \approx \mathcal{P}(\mathbb{N})$, which the library has not proved
  either, so the two forms are not interchangeable there.

- **Conditional discipline.** Every clause above is relative to the consistency
  of ZFC. "CH is independent of ZFC" is shorthand and is never used here as a
  standalone assertion.
