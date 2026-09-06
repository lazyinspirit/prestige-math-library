---
id: lem-local-koszul-h-one-detects-first-regularity-failure
kind: lemma
title: "Local Koszul H One Detects First Regularity Failure"
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-koszul-mapping-cone-homology-exact-sequence, thm-regular-sequences-give-acyclic-koszul-complexes, def-regular-sequence-on-a-module, def-local-ring, def-noetherian-ring, def-noetherian-module, def-generated-cyclic-finitely-generated-and-free-modules, thm-nakayama-lemma]
proof_strategy: direct
verification:
  audited: 2026-09-06
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Koszul complexes and regular sequences"
      url: "https://stacks.math.columbia.edu/tag/062D"
pipeline_run: frontier-31a
---

## Statement

Let $(R,\mathfrak m)$ be Noetherian local, $M$ finite nonzero, and $\mathbf x\subseteq\mathfrak m$. If the first failure of regularity occurs at $x_j$, then $H_1(K(\mathbf x;M))\ne0$.

## Facts & Assumptions

**Given:** The ring, module, sequence, and first failed index stated in the claim. The declared prerequisites used here are [[lem-koszul-mapping-cone-homology-exact-sequence]], [[thm-regular-sequences-give-acyclic-koszul-complexes]], [[def-regular-sequence-on-a-module]], [[def-local-ring]], [[def-noetherian-ring]], [[def-noetherian-module]], [[def-generated-cyclic-finitely-generated-and-free-modules]], and [[thm-nakayama-lemma]].

## Proof

**Proof technique:** direct.

1.1 Let $\mathbf x'=(x_1,\ldots,x_{j-1})$ and $N=M/(\mathbf x')M$. The preceding prefix is regular, so $K(\mathbf x';M)$ has zero positive homology and $H_0=N$. The failure at $x_j$ gives $0\ne\operatorname{Ann}_N(x_j)$. The cone exact sequence therefore identifies $H_1(K(\mathbf x',x_j;M))$ with this nonzero annihilator. [given, algebra]

2.1 Append the remaining entries one at a time. If $L$ is the current nonzero first homology and the next entry is $y\in\mathfrak m$, the cone exact sequence injects $L/yL$ into the new first homology. The module $L$ is finite because it is homology of a bounded complex of finite modules over a Noetherian ring, and Nakayama gives $L/yL\ne0$. Thus first homology remains nonzero through every later entry, proving $H_1(K(\mathbf x;M))\ne0$. [step 1.1, algebra] ∎
