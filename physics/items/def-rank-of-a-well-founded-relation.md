---
id: def-rank-of-a-well-founded-relation
kind: definition
title: "Ordinal rank of a well-founded relation"
status: published
origin: pipeline
deps: ["thm-recursion-on-well-founded-setlike-relations", "lem-ordinal-basics"]
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
    - title: "Marks, Set Theory, Berkeley edition \u2014 6.7 p.31."
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
---

## Definition

For a well-founded setlike relation $R$ on $X$, its ordinal rank is the definable function determined by

$$\rho_R(x)=\sup\{\rho_R(y)+1:yRx\}=\bigcup\{\rho_R(y)\cup\{\rho_R(y)\}:yRx\}.$$

To justify the definition, apply well-founded recursion to the total rule which returns this union if every value of its input function is an ordinal and returns $0$ otherwise. Well-founded induction shows that every actual value is an ordinal: predecessor values are ordinals by the induction hypothesis, their successors are ordinals, Replacement collects them, and their union is an ordinal, including the empty union $0$. Thus the default case never occurs. For $yRx$ the rank equation gives $\rho_R(y)<\rho_R(x)$. The definition requires no ambient Foundation for a supplied well-founded $R$.

Conventions and prerequisites: [[thm-recursion-on-well-founded-setlike-relations]], [[lem-ordinal-basics]].
