---
id: lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity
kind: lemma
title: "The standard entourages on minimal Cauchy filters form a separated uniformity"
status: published
origin: session
deps: [lem-minimal-cauchy-filter-associated-to-a-cauchy-filter, def-uniform-space-by-entourages, def-separated-uniform-space, lem-symmetric-entourages-form-a-base]
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

On the set $\widehat X$ of minimal Cauchy filters, the relations $\widehat E$ declaring that two filters have $E$-close members form a separated uniformity.

## Facts & Assumptions

**Given:** Minimal Cauchy filters $\mathcal F,\mathcal G$ on $X$.

[L1] Every Cauchy filter has a unique associated minimal Cauchy filter ([[lem-minimal-cauchy-filter-associated-to-a-cauchy-filter]]).

[L2] Symmetric entourages form a base and admit square roots ([[lem-symmetric-entourages-form-a-base]]).

[L3] The entourage axioms and separatedness are stated in [[def-uniform-space-by-entourages]] and [[def-separated-uniform-space]].

## Proof

**Proof technique:** constructive.

1.1 For symmetric $E$, put $(\mathcal F,\mathcal G)\in\widehat E$ when some $A\in\mathcal F$ and $B\in\mathcal G$ satisfy $A\times B\subseteq E$. [construct]

2.1 Every $\mathcal F$ is $\widehat E$-close to itself: choose an $E$-small member of the Cauchy filter and use it on both sides. The relation $\widehat E$ is symmetric. If $\widehat E$ and $\widehat D$ have respective witnesses $A\times B$ and $C\times K$, then $(A\cap C)\times(B\cap K)\subseteq E\cap D$, so finite intersections are refined by the corresponding hatted intersection. [step 1.1]

2.2 Choose a symmetric entourage $D$ with $D^{\circ2}\subseteq E$. If $\mathcal F\,\widehat D\,\mathcal G$ via $A\times B\subseteq D$ and $\mathcal G\,\widehat D\,\mathcal H$ via $C\times K\subseteq D$, choose $b\in B\cap C$. Then $aDbDk$ for every $a\in A,k\in K$, so $A\times K\subseteq D^{\circ2}\subseteq E$. Hence $\widehat D\circ\widehat D\subseteq\widehat E$. [step 1.1, L2, choose]

2.3 Steps 2.1 and 2.2 show that the upward closure of the relations $\widehat E$ is a uniformity. To prove separation, suppose $\mathcal F\,\widehat E\,\mathcal G$ for every entourage $E$. Given $A\in\mathcal F$, minimality gives $\mathcal F=m(\mathcal F)$ by [L1], so some $D[C]\subseteq A$ with $C\in\mathcal F$ and symmetric $D$. Choose an entourage $E\subseteq D$ and witnesses $P\in\mathcal F,Q\in\mathcal G$ with $P\times Q\subseteq E$. Pick $c\in C\cap P$. Then $Q\subseteq E[c]\subseteq D[C]\subseteq A$, so $A\in\mathcal G$. Thus $\mathcal F\subseteq\mathcal G$; symmetry gives equality. [step 1.1, L1, L2, choose]

3.1 Therefore the standard relations form the asserted separated uniformity. [step 2.3, L3, discharge-construct] ∎
