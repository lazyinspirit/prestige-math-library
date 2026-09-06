---
id: thm-effective-dimension-is-liminf-prefix-complexity-rate
kind: theorem
title: "Effective dimension is the liminf prefix-complexity rate"
status: published
origin: session
deps: [def-effective-hausdorff-dimension, def-prefix-free-machine-and-prefix-complexity, thm-kraft-inequality, thm-invariance-for-prefix-complexity]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Franklin and Porter, Theorem 4.34"
      url: "https://arxiv.org/pdf/2004.02851"
---
## Statement
For every $X\in2^\omega$, $\dim(X)=\liminf_{n\to\infty}K(X\upharpoonright n)/n$.
## Proof
**Given:** $X\in2^\omega$.

1.1 If an effective $s$-gale succeeds, its threshold prefix sets yield effective covers of $X$ with $s$-weight bounded; Kraft allocation [[thm-kraft-inequality]] assigns infinitely many prefixes descriptions of length at most $sn+O(\log n)$. [given]

1.2 Conversely, infinitely many prefixes with $K(X\upharpoonright n)\le sn$ provide a c.e. Kraft-bounded request family; its allocated codes define an effective $s+\varepsilon$-gale succeeding on $X$. [given]

2.1 Taking infima over $s$ in the definition [[def-effective-hausdorff-dimension]] and letting $\varepsilon\downarrow0$ proves the equality; [[thm-invariance-for-prefix-complexity]] changes only $O(1)/n$. [step 1.1, step 1.2] ∎
