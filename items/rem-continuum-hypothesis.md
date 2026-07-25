---
id: rem-continuum-hypothesis
kind: remark
title: "The continuum hypothesis, and what this page does not prove"
status: draft
origin: session
deps: [rem-independence-of-ch-and-gch, rem-gch-implies-ac, thm-cantor-powerset, thm-r-uncountable, def-countable, def-equinumerous, lem-countable-iff-surjection-from-n]
justified_by: []
aliases: [rem-ch]
landmark: false
short: "CH is independent of ZFC"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Continuum hypothesis (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuum_hypothesis"
    - title: "Cardinality of the continuum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinality_of_the_continuum"
    - title: "Cantor's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_theorem"
pipeline_run: null
---

## Remark

By [[thm-cantor-powerset]] there is a strict gap
$\mathbb{N} \prec \mathcal{P}(\mathbb{N})$ ([[def-equinumerous]]). In particular
$\mathcal{P}(\mathbb{N})$ is uncountable ([[def-countable]]), since a surjection
$\mathbb{N} \to \mathcal{P}(\mathbb{N})$ would exist if it were at most countable
([[lem-countable-iff-surjection-from-n]]) and the theorem forbids one; and so, by
a completely different argument, is $\mathbb{R}$ ([[thm-r-uncountable]]). The
obvious next question is whether anything sits strictly in between.

**The continuum hypothesis** (CH) asserts that nothing does:

> there is no set $A$ with $\mathbb{N} \prec A \prec \mathcal{P}(\mathbb{N})$.

Equivalently, every uncountable subset of $\mathcal{P}(\mathbb{N})$ is
equinumerous with $\mathcal{P}(\mathbb{N})$ itself.

**CH is independent of ZFC** ([[rem-independence-of-ch-and-gch]]). Gödel (1940)
showed that ZFC cannot refute it, by constructing the inner model $L$ of
constructible sets, in which CH holds ([[rem-godel-constructible-universe]]).
Cohen (1963) showed that ZFC cannot prove it, by inventing forcing and building a
model of ZFC in which CH fails ([[rem-cohen-forcing-ac-independent]] is the same
method). Together, if ZFC is consistent then so are ZFC + CH and ZFC + not CH, so
CH is settled by neither. Both results are external to this library: neither the
constructible universe nor forcing is developed here, and both are quoted with
references rather than proved. As with the false statements
on this page, the honest form of the conclusion is conditional on the consistency
of ZFC, which cannot be proved inside ZFC.

**What this page has not proved.** CH is usually stated about $\mathbb{R}$: that
every uncountable set of reals is equinumerous with $\mathbb{R}$. That form is
equivalent to the one above only once one knows
$\mathbb{R} \approx \mathcal{P}(\mathbb{N})$, and **this library has not proved
that**. The natural proof identifies a real in $[0,1]$ with its binary expansion,
that is, with a subset of $\mathbb{N}$, and binary expansions are infinite series,
which are developed much later. The two uncountability results on this page are
therefore genuinely separate facts here: $\mathcal{P}(\mathbb{N})$ is uncountable
by the diagonal argument, and $\mathbb{R}$ is uncountable by nested intervals,
and no bridge between them has been built. Nothing on this page depends on that
bridge.

**None of this affects the theorems proved here.** Countability of $\mathbb{Q}$,
uncountability of $\mathbb{R}$ and of the irrationals, and Cantor's theorem are
all decided, and all are theorems of ZF, choice included nowhere. Independence
enters only for statements that compare sizes strictly between $\mathbb{N}$ and
$\mathcal{P}(\mathbb{N})$, and for the choice principles recorded in
[[def-countable-choice]] and its companions.

The generalised continuum hypothesis (GCH), that
$A \prec B \prec \mathcal{P}(A)$ never holds for infinite $A$, is also
independent of ZFC ([[rem-independence-of-ch-and-gch]]) and is strictly stronger:
over ZF it even implies the Axiom of Choice, a result of Sierpiński
([[rem-gch-implies-ac]]). That implication, too, is quoted and not proved here.
