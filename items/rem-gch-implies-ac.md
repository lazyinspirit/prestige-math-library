---
id: rem-gch-implies-ac
kind: remark
title: "Sierpiński 1947: the generalised continuum hypothesis implies the Axiom of Choice"
status: draft
origin: session
proved_here: false
deps: [rem-independence-of-ch-and-gch]
justified_by: []
forward_refs: [def-axiom-of-choice, thm-hartogs, rem-continuum-hypothesis]
aliases: []
landmark: false
short: "GCH is a choice principle in disguise"
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "W. Sierpiński, L'hypothèse généralisée du continu et l'axiome du choix, Fund. Math. 34 (1947), 1-5"
      url: "https://eudml.org/doc/213113"
    - title: "Continuum hypothesis (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Continuum_hypothesis"
pipeline_run: null
---

## Statement

**Over ZF, the generalised continuum hypothesis implies the Axiom of Choice.**

Precisely: assume ZF, and assume GCH in the choice-free form "for every infinite
set $A$ there is no set $B$ with $A \prec B \prec \mathcal{P}(A)$", where
$X \prec Y$ means $X$ injects into $Y$ but not conversely. Then every set can be
well-ordered, and so the Axiom of Choice holds.

The argument (Lindenbaum and Tarski announced it in 1926; Sierpiński gave the
published proof in 1947) runs through Hartogs numbers. For a set $A$ let
$\aleph(A)$ be the least ordinal not injecting into $A$, which exists in ZF. One
shows in ZF that $\aleph(A) \preceq \mathcal{P}(\mathcal{P}(\mathcal{P}(A)))$,
and then uses GCH three times, on $A$, on $\mathcal{P}(A)$ and on
$\mathcal{P}(\mathcal{P}(A))$, to force $A$ into bijection with an ordinal.

## Remarks

- **Not proved in this library.** The proof needs cardinal arithmetic without
  choice, in particular the behaviour of $A + A$ and of $\aleph(A)$ under
  iterated power sets, and none of that is developed here.

- **What would prove it.** Choice-free cardinal arithmetic on top of the Hartogs
  construction. The one ingredient the library already has in some form is
  [[thm-hartogs]]: for every set there is a least ordinal that does not inject
  into it, proved with no choice at all. Everything after that, the comparison
  of $\aleph(A)$ with iterated power sets and the three applications of GCH, is
  not in this library.

- **Why it matters here.** It settles the status of GCH as a hypothesis: GCH is
  not a harmless size assumption to be added to ZF, it is at least as strong as
  the Axiom of Choice ([[def-axiom-of-choice]]). This is why
  [[rem-independence-of-ch-and-gch]] is stated over ZFC rather than ZF, and why
  [[rem-continuum-hypothesis]] warns that GCH is strictly stronger than CH. CH
  alone does **not** imply the Axiom of Choice over ZF; the implication is a
  feature of the generalised form.

- **Conditional discipline.** This one statement is not an independence result
  and needs no consistency hypothesis: it is an ordinary implication provable in
  ZF. It appears on this page only because its proof, not its status, is beyond
  the library's current machinery.
