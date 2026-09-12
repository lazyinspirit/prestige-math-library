---
id: thm-generalized-continuum-hypothesis-in-l
kind: theorem
title: The generalized continuum hypothesis holds in L
status: draft
origin: pipeline
deps: [thm-constructible-subsets-appear-before-successor-cardinals, lem-cardinality-of-infinite-constructible-levels, thm-constructible-universe-satisfies-choice, thm-constructible-inner-model-semantic-and-formal-schema, thm-cardinal-power-set-and-cantor, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Lietz, Set Theory, Theorem 7.15, p.59; Kunen, Chapter VI Corollaries 4.7–4.8, p.175"
      url: https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf
justified_by: []
forward_refs: []
---

## Statement

ZF proves that $L$ satisfies GCH. Equivalently, ZF proves

$$V=L\quad\Longrightarrow\quad \mathrm{AC}+\mathrm{GCH}.$$

## Facts & Assumptions

**Given:** Ambient ZF. Cardinal arithmetic below is performed internally in $L$; ambient Choice is not assumed.

[F1] [[thm-constructible-inner-model-semantic-and-formal-schema]] supplies the transitive inner-model interpretation of every ZF theorem in $L$ and the agreement of its internal constructible hierarchy with $L$.

[F2] [[thm-constructible-universe-satisfies-choice]] proves AC inside $L$.

[F3] [[thm-constructible-subsets-appear-before-successor-cardinals]] is a ZF theorem: every constructible subset of an infinite cardinal $\kappa$ belongs to $L_{\kappa^+}$, with the successor computed in the universe in which the theorem is applied.

[F4] [[lem-cardinality-of-infinite-constructible-levels]] gives $|L_\alpha|=|\alpha|$ for infinite ordinals, internally as well as externally by F1.

[F5] [[thm-cardinal-power-set-and-cantor]] says under AC that $2^\kappa=|\mathcal P(\kappa)|>\kappa$.

[A1] [[def-axiom-of-choice]] names the choice principle derived internally in F2 and used to regard all relevant sizes as cardinals.

## Proof

1.1 Work inside $L$. By F1 it satisfies ZF and thinks $V=L$; by F2 it also satisfies A1. Fix an infinite internal cardinal $\kappa$, and write $\lambda=(\kappa^+)^L$. Every $p\in\mathcal P^L(\kappa)$ is internally constructible, so the internal instance of F3 gives $p\in L_\lambda$. Thus inclusion is an injection $\mathcal P^L(\kappa)\hookrightarrow L_\lambda$. [F1, F2, F3, A1, given]

2.1 Since $\lambda$ is an infinite ordinal, internal F4 gives $|L_\lambda|^L=|\lambda|^L=\lambda$. Hence $(2^\kappa)^L=|\mathcal P^L(\kappa)|^L\le\lambda$. On the other hand F5, applied under internal AC, gives $\kappa<(2^\kappa)^L$. By the defining minimality of the successor cardinal $\lambda$, this implies $\lambda\le(2^\kappa)^L$. Therefore $(2^\kappa)^L=\lambda=(\kappa^+)^L$. [F4, F5, A1, step 1.1]

3.1 The argument applies to every infinite cardinal of $L$, so $L\models\mathrm{GCH}$, while F2 also gives $L\models\mathrm{AC}$. If $V=L$, internal and ambient sets, cardinals, power sets, and successors coincide, yielding $\mathrm{AC}+\mathrm{GCH}$ in $V$. No claim that ambient ZF alone well-orders arbitrary ambient power sets was used. [F1, F2, step 2.1] ∎
