---
id: fs-v-has-a-definable-truth-predicate
kind: false-statement
title: "V has a definable truth predicate"
status: published
origin: pipeline
deps: ["rem-tarski-truth-definition-interface", "prop-capture-avoiding-substitution"]
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Schlicht, Mathematical Logic (2021) \u2014 Theorem 2.4.1 and complete proof pp.37\u201338."
      url: "https://philippschlicht.github.io/teaching/files/mathematicallogic2021.pdf"
---

## Statement

False statement, in the truth-with-parameters sense: there is a pure membership formula $T(w,x,y,z)$ and a set $t$ such that for every pure membership formula $\psi$ with free variables among $x,y$ and every pair of sets $r,s$,

$$\psi(r,s)\iff T(\ulcorner\psi\urcorner,r,s,t).$$

The displayed universal demand is a scheme of biconditionals for the proposed $T,t$.

## Facts & Assumptions

**Given:** Work in ZF unless the statement explicitly weakens or supplements it; fix the objects and hypotheses of the statement.

[F1] Set satisfaction and relativization must be distinguished. Set satisfaction is uniform in the code of a formula and the data of a set structure. Relativization to a definable proper class supplies an ambient formula separately for each fixed input formula. Writing $V\models\phi(\vec a)$ in this latter sense merely abbreviates $\phi(\vec a)$. For the truth-with-parameters interface, a proposed pure membership formula $T(w,x,y,z)$ and a set parameter $t$ would have to satisfy, for every pure membership formula $\psi$ with free variables among $x,y$ and all sets $r,s$, the biconditional $\psi(r,s)\leftrightarrow T(\ulcorner\psi\urcorner,r,s,t)$. Here $\ulcorner\psi\urcorner$ is its finite set code. This is a scheme of requirements, not a single first-order assertion quantifying over ambient truths. The companion refutation tests this exact scheme by one formula built from the proposed $T$. No sentence-only arithmetized diagonal lemma or representability theorem is asserted here. Conventions and prerequisites: thm-relativization-and-set-satisfaction. ([[rem-tarski-truth-definition-interface]])

[F2] There is a canonical total capture-avoiding substitution $\phi\langle t/x\rangle$ on formulas, obtained by renaming obstructing binders using least unused variable indices. It replaces the original free occurrences of $x$ and satisfies $$\mathcal M,s\models\phi\langle t/x\rangle\iff\mathcal M,s[x:=\llbracket t\rrbracket_s]\models\phi.$$ Canonicity refers to the specified coding and traversal, not to literal invariance under other fresh-variable conventions. ([[prop-capture-avoiding-substitution]])

## Refutation

1.1 Fix a proposed $T,t$. Rename bound variables and use capture-avoiding simultaneous replacement of its four free slots to form the pure membership formula $\psi(x,y)=\neg T(x,x,y,y)$. This notation means slot replacement in $T$, not an added predicate symbol. Its only possible free variables are $x,y$, and its finite code $q=\ulcorner\psi\urcorner$ is a set. [F1, F2]

2.1 The demanded instance for this $\psi$, $r=q$ and $s=t$ gives $\psi(q,t)\iff T(q,q,t,t)$. The definition of $\psi$ gives $\psi(q,t)\iff\neg T(q,q,t,t)$. Therefore that one instance equates a proposition with its negation, which is impossible in classical logic. This refutes every proposed $T,t$ without a sentence-only arithmetization theorem. [step 1.1, F1] ∎
