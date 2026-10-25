---
id: lem-samuel-function-pseudometrics-and-coarsening
kind: lemma
title: "Samuel function pseudometrics generate a uniformity coarser than the original one"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-samuel-uniformity, lem-of-abs-value, lem-of-triangle-inequality, lem-metric-uniformity-dictionary]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Garrido and Meroño, The Samuel realcompactification"
      url: "https://arxiv.org/abs/1706.00279"
    - title: "J. Wodzicki, Uniform Structure"
      url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"
pipeline_run: null
---

## Statement

For every $f\in\mathcal F_{\mathcal U}$, the function $p_f(x,y)=|f(x)-f(y)|$ of [[def-samuel-uniformity]] is a pseudometric. Every basic Samuel entourage is an entourage of $\mathcal U$; hence $\mathcal U_S\subseteq\mathcal U$. Moreover the gauge obtained from all bounded real-valued uniformly continuous functions generates the same uniformity as $\mathcal U_S$.

## Facts & Assumptions

**Given:** A uniform space $(X,\mathcal U)$, a uniformly continuous $f:X\to[0,1]$, and positive reals $\varepsilon$ and $M$.

[L1] For real numbers, $|u|\ge0$, $|u|=0$ exactly when $u=0$, and $|-u|=|u|$ ([[lem-of-abs-value]]).

[L2] The real triangle inequality is $|u+v|\le|u|+|v|$ ([[lem-of-triangle-inequality]]).

[L3] The sets $\{(s,t):|s-t|<\varepsilon\}$ generate the metric uniformity of $[0,1]$, and metric uniform continuity is the corresponding epsilon-delta condition ([[lem-metric-uniformity-dictionary]]).

## Proof

**Proof technique:** direct.

1.1 The diagonal and symmetry axioms for $p_f$ follow from [L1], while $p_f(x,z)\le p_f(x,y)+p_f(y,z)$ follows by applying [L2] to $f(x)-f(z)=(f(x)-f(y))+(f(y)-f(z))$; thus $p_f$ is a pseudometric. [L1, L2]

1.2 For every $\varepsilon>0$, uniform continuity of $f$ and [L3] give an entourage $U$ of $\mathcal U$ with $(x,y)\in U$ implying $p_f(x,y)<\varepsilon$. [L3]

1.3 If $g:X\to\mathbb R$ is uniformly continuous with $|g|\le M$, then for $M>0$ the map $h=(g+M)/(2M)$ is $[0,1]$-valued and uniformly continuous: for a target tolerance $\delta>0$, use uniform continuity of $g$ with tolerance $2M\delta$. Moreover $p_g=2M p_h$; if $M=0$, $g$ is constant. Thus the two gauges have the same basic entourages. [construct]

2.1 For a basic Samuel entourage, step 1.2 gives an original entourage inside each of its finitely many coordinate balls; their finite intersection is therefore an original entourage contained in the basic Samuel entourage. Hence every basic Samuel entourage belongs to $\mathcal U$, and so does the generated filter. [step 1.2]

3.1 Steps 1.1, 2.1, and 1.3 prove all assertions. [step 1.1, step 2.1, step 1.3] ∎
