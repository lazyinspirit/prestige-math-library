---
id: rem-ramsey-and-erdos-rado-orientation
kind: remark
title: "Ramsey and Erdős–Rado: exact orientation obligations"
status: draft
origin: pipeline
deps: [def-partition-arrow-notation, thm-infinite-ramsey-finite-colors, thm-general-cardinal-erdos-rado]
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: "Monk, Set theory following Jech (2024), Theorem 29.1, printed p648, and Theorem 9.9, printed pp62–63; orientation to the completed local proofs"
      url: https://euclid.colorado.edu/~monkd/jech.pdf
justified_by: []
forward_refs: []
---

The local results establish two different partition bounds in ZFC:

$$\omega\longrightarrow(\omega)^n_r\quad(1\le n,r<\omega),$$

by [[thm-infinite-ramsey-finite-colors]], and

$$\beth_n(\kappa)^+\longrightarrow(\kappa^+)^{n+1}_\kappa\quad(\kappa\text{ infinite},\ n<\omega),$$

by [[thm-general-cardinal-erdos-rado]]. The meanings of homogeneous and the cardinal arrow are those of [[def-partition-arrow-notation]]. The second theorem uses the relative finite beths beginning at $\kappa$, and includes the singleton-coloring argument at $n=0$.

Each statement fixes its finite arity before quantifying colorings. Neither says that one infinite set is simultaneously homogeneous for all finite arities. The first theorem has finitely many colors; the second permits $\kappa$ colors by enlarging the ambient cardinal to the indicated beth successor. In the latter proof the end-homogeneous sequence need not increase as ambient ordinals; the final reduction uses the largest index. Monk's source statement gives the countable-color case, while the local theorem supplies the stated arbitrary-cardinal argument. No later partition theorem is being used as a prerequisite.
