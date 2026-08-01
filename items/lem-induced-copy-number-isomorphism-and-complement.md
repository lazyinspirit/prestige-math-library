---
id: lem-induced-copy-number-isomorphism-and-complement
kind: lemma
title: "$\\operatorname{ind}_H(G)$ is isomorphism-invariant and equals $\\operatorname{ind}_{\\overline H}(\\overline G)$"
status: published
origin: session
deps: [def-induced-copy-number, def-induced-embedding-and-induced-copy, def-graph-isomorphism-and-complement]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "ISGCI, Information System on Graph Classes and their Inclusions"
      url: "https://www.cs.sfu.ca/~pavol/graphclasses/"
pipeline_run: null
---

## Statement

If $H\cong H'$ and $G\cong G'$, then

$$\operatorname{ind}_H(G)=\operatorname{ind}_{H'}(G').$$

Moreover,

$$\operatorname{ind}_H(G)=\operatorname{ind}_{\overline H}(\overline G).$$

## Facts & Assumptions

**Given:** Finite graphs $H,H',G,G'$ with isomorphisms $a:H'\to H$ and $b:G\to G'$.

[F1] $\operatorname{ind}_H(G)$ is the finite cardinality of the induced-embedding set ([[def-induced-copy-number]]).

[F2] Isomorphisms and induced embeddings preserve adjacency and nonadjacency in both directions ([[def-induced-embedding-and-induced-copy]], [[def-graph-isomorphism-and-complement]]).

## Proof

**Proof technique:** direct bijections.

1.1 The assignment $\varphi\mapsto b\circ\varphi\circ a$ sends induced embeddings $H\to G$ to induced embeddings $H'\to G'$. [F2]

1.2 The same vertex map $\varphi$ is an induced embedding $H\to G$ exactly when it is an induced embedding $\overline H\to\overline G$, because complementation reverses both adjacency tests simultaneously. [F2]

2.1 Its inverse is $\theta\mapsto b^{-1}\circ\theta\circ a^{-1}$, so it is a bijection and the first equality follows. [step 1.1, F1, F2]

3.1 The identity on maps is therefore a bijection between these embedding sets, proving the complement equality. [step 1.2, F1] ∎
