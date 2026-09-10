---
id: def-countable-transitive-model-and-fragment-transfer
kind: definition
title: "Transitive models and finite-fragment transfer data"
status: draft
origin: pipeline
deps: [def-theories-models-and-semantic-consequence, def-relativization-to-a-definable-class, def-coded-first-order-zf-theory]
provenance:
  statement: "ai-altered"
  proof: "not-applicable"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Geschke, Models of Set Theory — §4 pp10–12, especially paragraph before Lemma 4.1 and Corollary 4.6"
      url: "https://www.math.uni-hamburg.de/home/geschke/teaching/ModelsSetTheory.pdf"
---


## Definition

For a sentence theory $\Gamma$ in the membership language, $\operatorname{TM}(\Gamma)$ means that some nonempty transitive set M, with actual restricted membership, satisfies every sentence of $\Gamma$. Transitive means $\forall x\in M\forall y\in x(y\in M)$. The assertion $\operatorname{CTM}(\Gamma)$ additionally requires an external injection $M\to\omega$.

A finite-fragment transfer specifies, for each external finite target fragment $\Delta$, a finite source fragment $\Gamma$ and a theorem converting every suitable TM or CTM of $\Gamma$ into a set model of $\Delta$. Suitability includes every auxiliary axiom, parameter restriction and metatheory needed by the conversion. Inclusion $\Gamma\subseteq\mathrm{ZF}$ is syntactic, using the fixed axiom presentation.

The model convention is [[def-theories-models-and-semantic-consequence]], and the schema syntax is [[def-coded-first-order-zf-theory]]. For definable classes use [[def-relativization-to-a-definable-class]] separately for each fixed formula; do not quantify over a universe truth predicate. Countability in this definition is outside the proposed model. A model or CTM of the full source theory is not part of finite-fragment data unless explicitly assumed.
