---
id: def-functorial-one-step-generator-extension
kind: definition
title: "The one-step generator extension functor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-grothendieck-category, def-generator-and-cogenerator-of-a-category, thm-a-locally-small-abelian-category-with-a-generator-is-well-powered, def-pullbacks-and-pushouts]
verification:
  precheck: n/a
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-01
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 19.11: Injectives in Grothendieck categories"
      url: "https://stacks.math.columbia.edu/tag/05AB"
    - title: "Romyar Sharifi, Homological Algebra"
      url: "https://math.ucla.edu/~sharifi/homalg.pdf"
pipeline_run: frontier-28
---
## Definition

Let $\mathcal A$ be a locally small Grothendieck category with fixed generator $U$, and let $M$ be an object. Because subobjects of $U$ form a set up to equivalence and each hom-class is a set, one may form the set $$S_M=\{(N,\varphi)\mid N\subseteq U,\ \varphi:N\to M\}.$$

For each $(N,\varphi)\in S_M$, write $i_N:N\hookrightarrow U$ for the inclusion. The **one-step generator extension** of $M$ is the pushout $$ \begin{matrix} \displaystyle\bigoplus_{(N,\varphi)\in S_M}N&\longrightarrow&M\\ \downarrow&&\downarrow\\ \displaystyle\bigoplus_{(N,\varphi)\in S_M}U&\longrightarrow&\mathbf M(M) \end{matrix} $$ whose top map is induced by the $\varphi$ and whose left map is induced by the $i_N$.

The canonical map $M\to\mathbf M(M)$ coming from the pushout is denoted $\eta_M$. A morphism $g:M\to M'$ carries each pair $(N,\varphi)$ to $(N,g\circ\varphi)$, so by the pushout universal property $M\mapsto\mathbf M(M)$ defines an endofunctor.
