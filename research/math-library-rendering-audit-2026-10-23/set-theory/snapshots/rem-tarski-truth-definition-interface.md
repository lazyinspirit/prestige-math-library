---
id: rem-tarski-truth-definition-interface
kind: remark
title: "Set truth and the Tarski interface"
status: published
origin: pipeline
deps: ["thm-relativization-and-set-satisfaction"]
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
    - title: "Schlicht, Mathematical Logic (2021) \u2014 2.4 pp.37\u201338."
      url: "https://philippschlicht.github.io/teaching/files/mathematicallogic2021.pdf"
---

## Remark

Set satisfaction and relativization must be distinguished. Set satisfaction is uniform in the code of a formula and the data of a set structure. Relativization to a definable proper class supplies an ambient formula separately for each fixed input formula. Writing $V\models\phi(\vec a)$ in this latter sense merely abbreviates $\phi(\vec a)$.

For the truth-with-parameters interface, a proposed pure membership formula $T(w,x,y,z)$ and a set parameter $t$ would have to satisfy, for every pure membership formula $\psi$ with free variables among $x,y$ and all sets $r,s$, the biconditional $\psi(r,s)\leftrightarrow T(\ulcorner\psi\urcorner,r,s,t)$. Here $\ulcorner\psi\urcorner$ is its finite set code. This is a scheme of requirements, not a single first-order assertion quantifying over ambient truths. The companion refutation tests this exact scheme by one formula built from the proposed $T$. No sentence-only arithmetized diagonal lemma or representability theorem is asserted here.

Conventions and prerequisites: [[thm-relativization-and-set-satisfaction]].
