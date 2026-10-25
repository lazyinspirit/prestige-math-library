---
id: lem-minimal-cauchy-filter-space-is-complete
kind: lemma
title: "The uniform space of minimal Cauchy filters is complete"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity, lem-minimal-cauchy-filter-associated-to-a-cauchy-filter, def-complete-uniform-space, def-filter, lem-symmetric-entourages-form-a-base]
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
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}, {title: "J. H. V. Hunt, Boletín de la Sociedad Matemática Mexicana 34 (1989), 11–21", url: "https://www.boletin.math.org.mx/pdf/2/34/BSMM%282%29.34.11-21.pdf"}]
pipeline_run: null
---

## Statement

The separated uniform space $\widehat X$ of minimal Cauchy filters is complete.

## Facts & Assumptions

**Given:** A Cauchy filter $\Phi$ on $\widehat X$.

[L1] The standard relations form a uniformity on minimal Cauchy filters ([[lem-entourages-on-minimal-cauchy-filters-form-a-separated-uniformity]]).

[L2] Every Cauchy filter on $X$ has its associated minimal Cauchy filter ([[lem-minimal-cauchy-filter-associated-to-a-cauchy-filter]]).

[L3] Completeness means convergence of every Cauchy filter ([[def-complete-uniform-space]]).

[L4] A filter contains the whole set, omits the empty set, and is closed under finite intersections and supersets ([[def-filter]]); symmetric entourages with prescribed finite-composite control may be chosen inside any entourage ([[lem-symmetric-entourages-form-a-base]]).

## Proof

**Proof technique:** constructive.

1.1 For $A\subseteq X$, put $$ A^\#:=\{\,\mathcal M\in\widehat X:A\in\mathcal M\,\}, $$ and define $\mathcal F:=\{A\subseteq X:A^\#\in\Phi\}$. Since $X^\#=\widehat X$, $\varnothing^\#=\varnothing$, $(A\cap B)^\#=A^\#\cap B^\#$, and $A^\#\subseteq B^\#$ whenever $A\subseteq B$, [L4] shows that $\mathcal F$ is a filter on $X$. [L4, construct]

1.2 The filter $\mathcal F$ is Cauchy. Given an entourage $U$, choose a symmetric $D$ with $D^{\circ3}\subseteq U$. Choose a $\widehat D$-small $S\in\Phi$, a filter $\mathcal M_0\in S$, and a $D$-small $C\in\mathcal M_0$. For every $\mathcal N\in S$, the relation $\mathcal M_0\,\widehat D\,\mathcal N$ has witnesses $P\in\mathcal M_0$ and $Q\in\mathcal N$ with $P\times Q\subseteq D$. A point of $C\cap P$ shows $Q\subseteq D[C]$, hence $D[C]\in\mathcal N$. Thus $S\subseteq(D[C])^\#$, so $D[C]\in\mathcal F$. Moreover $D[C]\times D[C]\subseteq D^{\circ3}\subseteq U$, making this a $U$-small member of $\mathcal F$. [L1, L4, choose]

2.1 Let $\mathcal M=m(\mathcal F)$. Given an entourage $E$, choose a symmetric $D$ with $D^{\circ2}\subseteq E$, and choose a $D$-small $A\in\mathcal F$. Then $A^\#\in\Phi$. If $\mathcal N\in A^\#$, the sets $D[A]\in\mathcal M$ and $A\in\mathcal N$ satisfy $D[A]\times A\subseteq D^{\circ2}\subseteq E$, so $\mathcal N\in\widehat E[\mathcal M]$. Hence $A^\#\subseteq\widehat E[\mathcal M]$, and the ball $\widehat E[\mathcal M]$ belongs to $\Phi$. Therefore $\Phi\to\mathcal M$. [step 1.1, step 1.2, L1, L2, L4]

3.1 Since every Cauchy filter $\Phi$ converges, $\widehat X$ is complete by [L3]. [step 2.1, L3, discharge-construct] ∎
