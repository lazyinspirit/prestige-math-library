---
id: thm-fubini-over-a-region-between-continuous-graphs
kind: theorem
title: "A region between two continuous graphs is Jordan measurable, and a continuous integrand extending to its closure integrates by vertical sections"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-jordan-fubini-by-sections, thm-graphs-of-continuous-functions-have-content-zero, thm-jordan-boundary-criterion, thm-continuous-functions-on-compact-jordan-sets-are-integrable]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis II, Proposition 10.5.8 and Exercise 10.5.3"
      url: "https://www.jirka.org/ra/realanal2.pdf"
    - title: "A. Leibman, Multidimensional Real Analysis, §5.4"
      url: "https://people.math.osu.edu/leibman.1/analysis2/m-analysis.pdf"
pipeline_run: null
---

## Statement

Let $a<b$, let $\alpha,\beta:[a,b]\to\mathbb R$ be continuous with $\alpha\le\beta$, and put
$$K:=\{(x,y):a\le x\le b,\ \alpha(x)\le y\le\beta(x)\}.$$
Then $K$ is compact and Jordan measurable. If a function on the open region between the graphs extends to a continuous $H:K\to\mathbb R$, then $H$ is Riemann integrable over $K$ and
$$\int_KH=\int_a^b\left(\int_{\alpha(x)}^{\beta(x)}H(x,y)\,dy\right)dx.$$
The formula includes coincident graphs and uses the continuous extension on the boundary.

## Facts & Assumptions

**Given:** Continuous $\alpha\le\beta$ on $[a,b]$, the closed region $K$, and a continuous $H:K\to\mathbb R$.

[L1] Jordan--Fubini integrates a bounded integrable function over a Jordan set by its Jordan sections ([[thm-jordan-fubini-by-sections]]).

[L2] A metric-bounded set is Jordan measurable if and only if its boundary is null, equivalently content zero ([[thm-jordan-boundary-criterion]]).

[L3] The graph of a continuous real function on a compact Jordan domain has content zero ([[thm-graphs-of-continuous-functions-have-content-zero]]).

[L4] A continuous real function on a compact Jordan set is Riemann integrable there ([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]).

## Proof

**Proof technique:** direct.

1.1 The boundary of $K$ is contained in the graphs of $\alpha$ and $\beta$ together with the two vertical endpoint segments. Each is a continuous graph, after exchanging coordinates for the vertical segments, and hence has content zero by [L3]. The set $K$ is closed and bounded, thus compact, and [L2] makes it Jordan measurable. [L2, L3, given]

2.1 The continuous $H$ is integrable on the compact Jordan set by [L4]. Every vertical section is the closed interval $[\alpha(x),\beta(x)]$, and its restriction is continuous, so [L1] gives the displayed formula. [L1, L4, step 1.1]

3.1 If $\alpha(x)=\beta(x)$, that section is degenerate and contributes $0$; the endpoint sections and all other boundary changes have content zero. Requiring a continuous extension to $K$ supplies boundedness and integrability that continuity only on the open region would not supply. [step 2.1, algebra] ∎
