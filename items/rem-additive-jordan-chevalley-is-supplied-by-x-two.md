---
id: rem-additive-jordan-chevalley-is-supplied-by-x-two
kind: remark
title: The additive Jordan–Chevalley supplier
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-additive-jordan-chevalley-decomposition, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - title: "Anthony W. Knapp, Lie Groups Beyond an Introduction, 2nd ed., Chapter II"
      url: "https://www.math.stonybrook.edu/~aknapp/download/Beyond2-clickable.pdf"
      locator: "Chapter II, §§1–2"
landmark: false
---

## Remark

The operator theorem used by the Jordan-decomposition items on this page is
[[thm-additive-jordan-chevalley-decomposition]]: over a perfect field every
endomorphism $T$ of a finite-dimensional vector space has a unique commuting
semisimple-plus-nilpotent decomposition $T=T_s+T_n$, and both parts are
polynomials in $T$. Its published contract assumes the Axiom of Choice
([[def-axiom-of-choice]]); every use of it below inherits that assumption, and
the items that use it declare the dependence explicitly.

On this page the theorem is applied only in the following special case: the
field is $\mathbb C$, which is perfect, and $T=\operatorname{ad}_x$ for an
element $x$ of a finite-dimensional complex Lie algebra $\mathfrak g$. The
theorem then produces $\operatorname{ad}_x=S+N$ with $S$ semisimple, $N$
nilpotent, $SN=NS$, and both $S$ and $N$ polynomials in
$\operatorname{ad}_x$. No further operator theory is imported: the passage
from these operator parts to elements of $\mathfrak g$ is the content of
[[lem-jordan-chevalley-parts-agree-under-adjoint-representation]] and
[[thm-jordan-decomposition-lies-inside-a-complex-semisimple-lie-algebra]].

The cited theorem is published with the Axiom of Choice in its statement but
without [[def-axiom-of-choice]] in its published dependency list. That
metadata defect is recorded for the canonical published-defect ledger; it does
not block this page, because the assumption is declared here and propagated
through every consumer.
