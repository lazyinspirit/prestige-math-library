---
id: ex-countability-profile-of-the-lower-limit-plane
kind: example
title: "Assuming choice, the lower-limit plane is first countable, separable, and ccc, but not second countable or Lindelöf"
status: published
origin: session
deps: [ex-cardinal-functions-of-the-lower-limit-line, thm-countable-products-of-first-countable-spaces, prop-separable-spaces-are-ccc, prop-second-countability-is-hereditary, fs-separability-is-hereditary, fs-lindelofness-is-productive, def-second-countable-space, def-compactness-variants, thm-r-uncountable]
aliases: []
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources: {scraped: [], references: [{title: "UCR General Topology Notes", url: "https://math.ucr.edu/~res/math205C-2016/gentop-notes.pdf"}]}
pipeline_run: null
---
## Example
Let $S$ be the lower-limit line. Under Choice, the countable-product theorem
makes $S^2$ first countable, and the rational grid is a countable dense subset;
hence $S^2$ is separable and therefore ccc. The antidiagonal
$A=\{(x,-x):x\in\mathbb R\}$ is an uncountable closed discrete subspace, as
proved in [[fs-separability-is-hereditary]] and
[[fs-lindelofness-is-productive]]. If $S^2$ were second countable, hereditary
second countability would make the discrete space $A$ second countable, which
is impossible because every basis of a discrete space contains all its
singletons. The explicit open cover in [[fs-lindelofness-is-productive]]
shows directly that $S^2$ is not Lindelöf.
