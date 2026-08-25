---
id: ex-two-generating-sets-of-the-integers-give-different-but-bilipschitz-equivalent-word-metrics
kind: example
title: "The word metrics of $\\mathbb Z$ for $\\{1\\}$ and for $\\{2,3\\}$ differ at $1$ and are bilipschitz equivalent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-word-length-with-respect-to-a-generating-set, def-word-metric, def-bilipschitz-embedding-and-bilipschitz-equivalence, thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics, def-equivalent-metrics]
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-26
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-25
sources:
  scraped: []
  references:
    - title: "C. Loh, Geometric Group Theory: An Introduction (2015 course version), 264 pp."
      url: "https://loeh.app.uni-regensburg.de/teaching/ggt_ws1415/lecture_notes_old.pdf"
    - title: "C. Drutu and M. Kapovich, Geometric Group Theory (with an appendix by B. Nica), 837 pp."
      url: "https://www.math.ucdavis.edu/~kapovich/EPR/ggt.pdf"
---
## Example

The word metrics of $\mathbb Z$ for $\{1\}$ and for $\{2,3\}$ differ at $1$ and are bilipschitz equivalent.

## Facts & Assumptions

**Given:** The objects and hypotheses in the Example.

[F1] The word length $|g|_S$ is the least $n$ such that $g$ is a product of $n$ elements of $S\cup S^{-1}$ ([[def-word-length-with-respect-to-a-generating-set]]).

[L1] The word metric of $G$ with respect to $S$ is $d_S(g,h)=|g^{-1}h|_S$ ([[def-word-metric]]).

[L2] The identity map between the word metrics of two finite generating sets of a group is a bilipschitz equivalence ([[thm-two-finite-generating-sets-of-a-group-give-bilipschitz-equivalent-word-metrics]]).

[L3] A map is a bilipschitz embedding when $c^{-1}d(x,x')\le d(f(x),f(x'))\le c\,d(x,x')$ for some $c>0$, and a bilipschitz equivalence when it is a bijective such map with bilipschitz inverse ([[def-bilipschitz-embedding-and-bilipschitz-equivalence]]).

[L4] - $d$ and $d'$ are **topologically equivalent** if they have the same metric topology: $$\mathcal{T}_d = \mathcal{T}_{d'}.$$ - $d$ and $d'$ are **uniformly equivalent** if for every real $\varepsilon > 0$ there are reals $\delta > 0$ and $\delta' > 0$ such that, for all $x, y \in X$, $$d(x,y) < \delta \;\Longrightarrow\; d'(x,y) < \varepsilon \qquad \text{and} \qquad d'(x,y) < \delta' \;\Longrightarrow\; d(x,y) < \varepsilon.$$ - $d$ and $d'$ are **Lipschitz equivalent** if there are reals $\alpha, \beta > 0$ with $$\alpha\, d(x,y) \;\le\; d'(x,y) \;\le\; \beta\, d(x,y) \qquad \text{for all } x, y \in X.$$ ([[def-equivalent-metrics]]).


## Verification

**Proof technique:** direct.

1.1 For $S=\{1\}$ the length of $1$ is one, while for $S=\{2,3\}$ the element $1$ is not a one-letter word in $S\cup S^{-1}=\{\pm2,\pm3\}$ and satisfies $1=3+(-2)$, so its length is two. Thus the two metrics already differ at the pair $(0,1)$. [F1, L1, algebra]

2.1 The comparison theorem gives constants: every member of one symmetrised set has length at most three in the other, so the identity is bilipschitz with constant three. [L1, L2, L3, L4, step 1.1] ∎
