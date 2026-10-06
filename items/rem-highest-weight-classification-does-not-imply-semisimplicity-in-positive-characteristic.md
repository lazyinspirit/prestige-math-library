---
id: rem-highest-weight-classification-does-not-imply-semisimplicity-in-positive-characteristic
kind: remark
title: "The highest-weight classification does not imply semisimplicity in positive characteristic"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 37
deps: [def-axiom-of-choice, def-split-reductive-algebraic-group, thm-complete-reducibility-of-rational-modules-in-characteristic-zero, thm-dominant-weights-classify-simple-rational-modules-for-split-reductive-groups]
forward_refs: [cex-rational-modules-need-not-be-semisimple-in-characteristic-p]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Algebraic Groups (corrected 2022 printing, Cambridge University Press)"
      url: "https://www.jmilne.org/math/Books/iAG2022.pdf"
      locator: "Ch. 12 (12.55)-(12.56), printed p. 249 and Exercise 12-9, printed p. 253; Ch. 22 (22.46)-(22.47), printed p. 480"
    - title: "Robert Steinberg, Lectures on Chevalley Groups (Yale University, 1967; notes prepared by J. Faulkner and R. Wilson)"
      url: "https://math.soimeme.org/~arunram/Resources/YaleNotes.pdf"
      locator: "Ch. 12, the paragraph and exercise after Theorem 39(e) (V' versus V'' in characteristic p)"
---
## Remarks

Assume the Axiom of Choice inherited from the named suppliers
([[def-axiom-of-choice]]).
The classification of
[[thm-dominant-weights-classify-simple-rational-modules-for-split-reductive-groups]]
holds for a split reductive group over every field, but it does not imply that
every rational representation is semisimple. Complete reducibility is a
characteristic-zero phenomenon
([[thm-complete-reducibility-of-rational-modules-in-characteristic-zero]]); in
characteristic $p>0$ a split reductive group need not be linearly reductive, as
the companion counterexample
[[cex-rational-modules-need-not-be-semisimple-in-characteristic-p]] on this
pair's examples page shows (Milne Example 12.55 and Exercise 12-9; Steinberg
Ch. 12, the paragraph after Theorem 39(e)). Readers should not infer
semisimplicity of $\operatorname{Rep}(G)$ from the existence and uniqueness of
simple modules with prescribed dominant highest weight.

The two statements concern different properties: the classification theorem only
asserts that simple modules are parametrized by dominant weights and that the
top weight space is one-dimensional, while semisimplicity of every
finite-dimensional rational representation is a strictly stronger property that
fails already for $\mathrm{SL}_2$ in characteristic $p>0$
([[def-split-reductive-algebraic-group]]).
