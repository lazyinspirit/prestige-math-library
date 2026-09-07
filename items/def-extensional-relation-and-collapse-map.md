---
id: def-extensional-relation-and-collapse-map
kind: definition
title: "Extensional relations and collapse maps"
status: published
origin: pipeline
deps: ["thm-recursion-on-well-founded-setlike-relations"]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Marks, Set Theory, Berkeley edition \u2014 6.10\u20136.11 pp.31\u201332."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Definition

A setlike relation $R$ on $X$ is extensional when $\operatorname{pred}_R(x)=\operatorname{pred}_R(y)$ implies $x=y$ for $x,y\in X$. If $R$ is also well-founded, its collapse map is the unique definable function

$$\pi(x)=\{\pi(y):yRx\}.$$

Existence and uniqueness follow from well-founded recursion with $G(x,h)=\operatorname{ran}(h)$, a set by Replacement. A collapse map is defined even without extensionality; injectivity is a further conclusion requiring extensionality. The construction for a supplied well-founded relation uses no ambient Foundation.

Conventions and prerequisites: [[thm-recursion-on-well-founded-setlike-relations]].
