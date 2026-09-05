---
id: cex-extension-by-zero-differs-direct-image
kind: counterexample
title: "Extension by zero can be strictly smaller than direct image on a punctured interval"
status: published
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-extension-by-zero-abelian-sheaf, ex-direct-image-open-immersion]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-05
sources:
  scraped: []
  references:
    - title: "Ravi Vakil, The Rising Sea, nearby discussion around Section 2.7"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGnov1817public.pdf"
    - title: "The Stacks Project, Section 6.31"
      url: "https://stacks.math.columbia.edu/tag/009Z"
---

## Statement refuted

For every open immersion $j:U\hookrightarrow X$ and every sheaf of abelian
groups $\mathcal F$ on $U$, one has $j_!\mathcal F=j_*\mathcal F$.

## Facts & Assumptions

**Given:** The open immersion
$j:U=(-1,0)\cup(0,1)\hookrightarrow X=(-1,1)$ and the constant sheaf
$\underline{\mathbb Z}$ on $U$.

[F1] For an open immersion, direct image is computed by intersection:
$(j_*\underline{\mathbb Z})(V)=\underline{\mathbb Z}(V\cap U)$
([[ex-direct-image-open-immersion]]).

[F2] Extension by zero consists of sections whose support is closed in the test
open ([[def-extension-by-zero-abelian-sheaf]]).

## Counterexample

**Proof technique:** direct.

1.1 By [F1], the global section set of $j_*\underline{\mathbb Z}$ is $$(j_*\underline{\mathbb Z})(X)=\underline{\mathbb Z}(U)\cong \mathbb Z\times\mathbb Z,$$ because $U$ has two connected components. Let $s$ be the section that is $1$ on both components. [F1, given, choose]

2.1 The germ of $s$ is nonzero at every point of $U$, so its support is all of $U$. But $U=(-1,0)\cup(0,1)$ is not closed in $X=(-1,1)$, since its closure contains $0$. Therefore [F2] shows that $s\notin (j_!\underline{\mathbb Z})(X)$. [F2, step 1.1]

3.1 Thus $s$ lies in $j_*\underline{\mathbb Z}$ but not in $j_!\underline{\mathbb Z}$, so the two sheaves are not equal. This refutes the statement. [step 1.1, step 2.1] ∎
