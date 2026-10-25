---
id: ex-cardinal-functions-of-a-one-point-compactification
kind: example
title: "The one-point compactification of the discrete real line is compact and Lindelöf but is neither first countable nor separable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-one-point-compactification, thm-one-point-compactification-properties, def-first-countable-top, def-separable-space, def-compactness-variants, def-standard-topologies, thm-r-uncountable, thm-product-of-countable]
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
    - title: "Fort space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fort_space"
    - title: "Alexandroff extension (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Alexandroff_extension"
pipeline_run: null
---
## Example
Give $D=\mathbb R$ the discrete topology and form $D^*=D\cup\{\infty\}$. The
one-point compactification theorem makes $D^*$ compact, hence Lindelöf, and
every point of $D$ remains isolated.

A neighbourhood of $\infty$ has finite complement in $D$, since compact
subsets of a discrete space are finite. If $(N_n)$ were a countable local base
at $\infty$, put $F_n=D\setminus N_n$. For every $x\in D$, the neighbourhood
$D^*\setminus\{x\}$ would contain some $N_n$, so
$D=\bigcup_nF_n$. Each finite subset of $\mathbb R$ has a canonical increasing
enumeration; these enumerations and countability of
$\mathbb N\times\mathbb N$ make the displayed union countable, contradicting
uncountability of $\mathbb R$. Thus $D^*$ is not first countable. Finally every
dense subset must meet the open singleton $\{x\}$ for every $x\in D$, so it
contains all of $D$ and cannot be countable; hence $D^*$ is not separable.
