---
id: ex-godel-diagonal-substitution-calculation
kind: example
title: "A diagonal substitution worked symbolically"
status: published
verification:
  audited: 2026-09-10
origin: pipeline
deps: [thm-arithmetic-diagonal-lemma]
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
proof_strategy: direct
sources:
  references:
    - title: "Moschovakis, Lecture Notes in Logic (2014) — 4B.14 p149; local tautological substitution instance"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
    - title: "Avigad, Computability and Incompleteness (2007) — Lemma 4.5.1 proof p109"
      url: "https://www.andrew.cmu.edu/user/avigad/Teaching/candi_notes.pdf"
---


## Example

Take $\psi(y)\equiv(y=y)$ in the diagonal construction. With D representing the diagonal substitution function d, let $\eta(x)=\exists y(D(x,y)\land y=y)$, $e=\#\eta$, and $\theta=\eta(\bar e)$. Then $d(e)=\#\theta$ and Q proves $\theta\leftrightarrow\ulcorner\theta\urcorner=\ulcorner\theta\urcorner$.

## Facts & Assumptions

[F1] [[thm-arithmetic-diagonal-lemma]]: For every formula $\psi(v)$ with no other free variables in an effective signature extending arithmetic, there is a sentence $\theta$ such that Q in that signature proves $\theta\leftrightarrow\psi(\ulcorner\theta\urcorner)$. The construction is effective and requires neither consistency nor soundness.

## Verification

**Given:** The explicit tautological psi and the fixed diagonal construction with its representing graph D.

1.1 The substitution operation in F1 takes the formula eta with its designated x place and inserts the numeral $\bar e$. Thus $d(e)=\#(\exists y(D(\bar e,y)\land y=y))=\#\theta$. Here e is a natural number, eta is a formula, and the inserted $\bar e$ is a term; none is identified with the other. The unique-value property used in F1 gives $Q\vdash D(\bar e,y)\leftrightarrow y=\ulcorner\theta\urcorner$. [F1, given]

2.1 If theta holds, choose its y witness; the equation in step 1.1 replaces y with the numeral of theta, yielding that numeral equal to itself. Conversely that reflexive equality and $D(\bar e,\ulcorner\theta\urcorner)$ give the existential theta. Thus in this concrete instance Q proves theta, as well as the displayed biconditional. The calculation is independent of which fixed token numbering produces the numerical value e. [step 1.1, algebra] ∎
