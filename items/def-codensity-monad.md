---
id: def-codensity-monad
kind: definition
title: "Codensity monad"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-left-and-right-kan-extension, def-natural-transformation, def-monad]
justified_by: [thm-the-codensity-construction-satisfies-the-monad-laws]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-26
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definition 6.5.12"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "T. Leinster, Codensity and the ultrafilter monad, §2"
      url: "https://arxiv.org/pdf/1209.3606"
pipeline_run: null
---

## Definition

Let $G:\mathcal B\to\mathcal C$ be a functor, and suppose a right Kan
extension of $G$ along itself is supplied:

$$\varepsilon:TG\Rightarrow G$$

with $T:\mathcal C\to\mathcal C$
([[def-left-and-right-kan-extension]], [[def-natural-transformation]]).

The **codensity monad** of $G$ is the triple $(T,\eta,\mu)$ on $\mathcal C$,
where the underlying endofunctor is $T$, the **unit**
$\eta:1_{\mathcal C}\Rightarrow T$ is the unique natural transformation with

$$1_G=\varepsilon\circ(\eta G),$$

and the **multiplication** $\mu:T^2\Rightarrow T$ is the unique natural
transformation with

$$\varepsilon\circ(\mu G)=\varepsilon\circ(T\varepsilon).$$

The theorem
[[thm-the-codensity-construction-satisfies-the-monad-laws]] proves that these
data satisfy the axioms of [[def-monad]].
