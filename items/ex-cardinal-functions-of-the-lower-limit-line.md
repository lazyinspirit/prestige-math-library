---
id: ex-cardinal-functions-of-the-lower-limit-line
kind: example
title: "For the lower-limit line, $\\chi=d=L=c=\\aleph_0$ and $w=2^{\\aleph_0}$ under choice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-weight-density-and-character, def-lindelof-degree-and-cellularity, thm-basic-cardinal-function-inequalities, lem-lower-limit-line-is-regular-and-lindelof, def-interval, thm-basis-criterion, thm-rationals-countable, lem-rat-embeds-dense, thm-r-uncountable, ex-the-cardinality-of-the-continuum, cor-cardinal-absorption, def-axiom-of-choice]
aliases: []
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "UCR General Topology Notes"
      url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"
    - title: "Lower limit topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lower_limit_topology"
    - title: "D. H. Fremlin, Measure Theory, Chapter 5A"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf"
pipeline_run: null
---
## Example
Assume Choice and let $S$ be the lower-limit line. At $x$, the intervals
$[x,x+1/n)$ form a countable local base. No finite family is a local base:
the intersection of finitely many neighbourhoods is still a neighbourhood and
contains some $y>x$, whereas $[x,y)$ cannot contain any member of a finite
local base contained in that intersection. Hence $\chi(S)=\aleph_0$.

The rationals are countable and meet every nonempty half-open interval, so
$d(S)\le\aleph_0$; no finite set is dense, since a short half-open interval can
avoid it. The published lower-limit-line lemma gives Lindelöfness, while the
cover $\{[-n,n):n\ge1\}$ has no finite subcover, so
$d(S)=L(S)=\aleph_0$. Density bounds cellularity above, and the disjoint family
$\{[n,n+1):n\in\mathbb Z\}$ bounds it below, giving $c(S)=\aleph_0$.

All half-open intervals form a basis of cardinality at most
$|\mathbb R|^2=|\mathbb R|$. Conversely, well order any basis and assign to
each $x$ its first member $B_x$ with $x\in B_x\subseteq[x,x+1)$; if $x<y$,
then $B_y$ cannot contain $x$, so $B_x\ne B_y$. Thus
$w(S)=|\mathbb R|=2^{\aleph_0}$.
