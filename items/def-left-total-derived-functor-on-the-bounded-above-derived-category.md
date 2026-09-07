---
id: "def-left-total-derived-functor-on-the-bounded-above-derived-category"
kind: "definition"
title: "Left total derived functor on the bounded above derived category"
deps: ["thm-projective-complexes-model-the-bounded-above-derived-category", "def-additive-functor"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - url: "https://math.mit.edu/~hrm/palestine/weibel/10-derived_category.pdf"
      title: "10.5.1–10.5.8, pp. 391–393; restrict to supplied replacement data"
provenance:
  statement: ai-altered
  proof: not-applicable
status: "draft"
origin: "pipeline"
justified_by: ["thm-existence-of-the-bounded-above-left-total-derived-functor"]
---

## Definition

Let $\mathcal A$ and $\mathcal B$ be abelian categories and let $F:\mathcal A\to\mathcal B$ be additive. Supply bounded-above projective replacements $p_X:P_X\to X$ and the hypotheses for [[thm-projective-complexes-model-the-bounded-above-derived-category]]. Write $T=Q_{\mathcal B}K(F)$. The **left total derived functor** is $LF:D^-(\mathcal A)\to D^-(\mathcal B)$ with $LF(X)=Q_{\mathcal B}F(P_X)$, its maps obtained from the unique homotopy classes between projective models. Its augmentation is $\epsilon:LFQ_{\mathcal A}\to T$, induced by $F(p_X)$.

The defining universal property is terminal: for every functor $G:D^-(\mathcal A)\to D^-(\mathcal B)$ and natural $\gamma:GQ_{\mathcal A}\to T$, there is a unique natural $\mu:G\to LF$ with $\epsilon\circ(\mu Q_{\mathcal A})=\gamma$. Additive has the meaning of [[def-additive-functor]].
