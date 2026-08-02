---
id: def-samuel-compactification
kind: definition
title: "The Samuel completion and, when compactifying, the Samuel compactification"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-samuel-uniformity, def-completion-of-a-uniform-space, thm-hausdorff-completion-of-a-uniform-space, def-compactification-of-a-tychonoff-space]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Garrido and Meroño, The Samuel realcompactification"
      url: "https://arxiv.org/abs/1706.00279"
    - title: "M. Megrelishvili, Samuel and Smirnov compactifications"
      url: "https://u.cs.biu.ac.il/~megereli/SMIRNOV.pdf"
pipeline_run: null
---

## Definition

A **Samuel completion** of $(X,\mathcal U)$ is a Hausdorff completion
$$
\eta:(X,\mathcal U_S)\longrightarrow S(X)
$$
of its Samuel uniformity in the sense of [[def-completion-of-a-uniform-space]]. Such a completion exists by [[thm-hausdorff-completion-of-a-uniform-space]], but its canonical map need not be injective.

Regard $X$ with its original induced topology. A Samuel completion
$\eta:(X,\mathcal U_S)\to S(X)$ is a **Samuel compactification** if and only if
the same map $\eta:X\to S(X)$ makes $(S(X),\eta)$ a compactification in the
sense of [[def-compactification-of-a-tychonoff-space]]. In particular, this
requires $S(X)$ to be compact Hausdorff and $\eta$ to be an embedding with
dense image; it is not used merely for a Hausdorff completion of a
nonseparated uniform space.
