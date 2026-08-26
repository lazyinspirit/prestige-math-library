---
id: thm-lan-is-left-adjoint-to-restriction-which-is-left-adjoint-to-ran
kind: theorem
title: "Lan is left adjoint to restriction, and restriction is left adjoint to Ran"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-global-kan-extension, def-left-and-right-kan-extension, thm-objectwise-universal-arrows-assemble-into-a-left-adjoint, thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Proposition 6.1.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, §4.1"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Statement

Let $K:\mathcal C\to\mathcal D$ be a functor with $\mathcal C$ and
$\mathcal D$ small and $\mathcal E$ locally small, so that the restriction
functor

$$K^*:[\mathcal D,\mathcal E]\longrightarrow[\mathcal C,\mathcal E]$$

is defined ([[def-global-kan-extension]]).

Assume that for every functor $F:\mathcal C\to\mathcal E$ a local left Kan
extension of $F$ along $K$ is supplied, and for every such $F$ a local right
Kan extension of $F$ along $K$ is supplied.

Then the object assignments $F\mapsto\operatorname{Lan}_KF$ and
$F\mapsto\operatorname{Ran}_KF$ admit unique functor structures for which

$$\operatorname{Lan}_K\dashv K^*\dashv\operatorname{Ran}_K.$$

No class-indexed choice is made inside the proof: the local Kan extensions are
part of the data.

## Facts & Assumptions

**Given:** The functor $K:\mathcal C\to\mathcal D$ with $\mathcal C,\mathcal D$ small and $\mathcal E$ locally small; the restriction functor $K^*$; and supplied local left and right Kan extensions for every $F:\mathcal C\to\mathcal E$.

[F1] A local left Kan extension of $F$ along $K$ is a pair $(L,\eta)$ initial among natural transformations $F\Rightarrow MK$, and a local right Kan extension is a pair $(R,\varepsilon)$ terminal among natural transformations $MK\Rightarrow F$ ([[def-left-and-right-kan-extension]]).

[L1] Chosen universal arrows from each object to a functor assemble uniquely into a left adjoint ([[thm-objectwise-universal-arrows-assemble-into-a-left-adjoint]]).

[L2] A left adjoint to a functor is supplied exactly by chosen initial objects in its comma categories, and dually a right adjoint is supplied exactly by chosen terminal objects ([[thm-a-left-adjoint-exists-exactly-when-every-comma-category-has-an-initial-object]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], each supplied local left Kan extension of a functor $F:\mathcal C\to\mathcal E$ is exactly a universal arrow from the object $F$ of $[\mathcal C,\mathcal E]$ to the restriction functor $K^*$, while each supplied local right Kan extension is exactly a terminal object of the corresponding comma category for $K^*$. [F1]

2.1 Applying [L1] to the supplied universal arrows of step 1.1 gives a unique functor structure on $F\mapsto\operatorname{Lan}_KF$ for which the displayed unit transformations are natural, and with that structure $\operatorname{Lan}_K\dashv K^*$. [L1, step 1.1]

3.1 Applying the dual clause of [L2] to the supplied terminal objects of step 1.1 gives a unique functor structure on $F\mapsto\operatorname{Ran}_KF$ with $K^*\dashv\operatorname{Ran}_K$. Hence $\operatorname{Lan}_K\dashv K^*\dashv\operatorname{Ran}_K$. [L2, step 1.1, step 2.1] ∎
