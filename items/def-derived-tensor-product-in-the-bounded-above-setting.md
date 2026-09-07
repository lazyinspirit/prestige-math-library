---
id: "def-derived-tensor-product-in-the-bounded-above-setting"
kind: "definition"
title: "Derived tensor product in the bounded above setting"
deps: ["thm-existence-of-the-bounded-above-left-total-derived-functor", "lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms", "def-tensor-product-total-complex-of-chain-complexes", "thm-module-categories-have-enough-projectives", "lem-projective-modules-are-flat-over-an-arbitrary-ring"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.6.1–10.6.4 and Exercise 10.6.1, p. 395; elementary finite-diagonal replacement for spectral sequence proof"
provenance:
  statement: ai-altered
  proof: not-applicable
status: "draft"
origin: "pipeline"
---

## Definition

For bounded-above right and left $R$-complexes $N$ and $M$, supply bounded-above projective replacements $P_N\to N$ and $P_M\to M$, and the homotopy lifts required for their model functors. The **derived tensor product** $N\otimes_R^{\mathbf L}M\in D^-(\mathbf{Ab})$ is the object represented by $\operatorname{Tot}(P_N\otimes_RM)$, equivalently $\operatorname{Tot}(N\otimes_RP_M)$. If existence of enough module projectives is invoked, assume AC as in [[thm-module-categories-have-enough-projectives]].

Use the cochain reindexing of [[def-tensor-product-total-complex-of-chain-complexes]]. Projectives are flat by [[lem-projective-modules-are-flat-over-an-arbitrary-ring]]. Consequently [[lem-bounded-above-flat-tensor-complexes-preserve-quasi-isomorphisms]] gives the natural quasi-isomorphisms $P_N\otimes_RP_M\to P_N\otimes_RM$ and $P_N\otimes_RP_M\to N\otimes_RP_M$. This fixes the balancing identification. Homotopy comparison maps between projective replacements, as in [[thm-existence-of-the-bounded-above-left-total-derived-functor]], induce tensor maps; chain homotopies induce total homotopies with the same Koszul rule. Quasi-isomorphisms in the other variable are inverted by the flat-tensor lemma, so localization gives a bifunctor $D^-(\operatorname{Mod}\!\text{-}R)\times D^-(R\!\text{-}\operatorname{Mod})\to D^-(\mathbf{Ab})$, independent of the supplied representatives up to these comparisons.
