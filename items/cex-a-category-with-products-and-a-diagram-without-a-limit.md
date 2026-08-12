---
id: cex-a-category-with-products-and-a-diagram-without-a-limit
kind: counterexample
title: "Assuming Choice, nonempty sets have all small products but a parallel pair with no equalizer and hence a diagram with no limit"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-products-and-coproducts, def-equalizers-and-coequalizers, thm-small-limits-from-products-and-equalizers, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
proof_strategy: counterexample
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, Theorem 3.5.11"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: frontier-12
---

## Statement refuted

If a category has all small products, then it has all small limits.

## Facts & Assumptions

**Given:** The full category $\mathbf{Set}_{\ne\varnothing}$ of nonempty sets
and all functions between them, under the Axiom of Choice.

[F1] Products represent set-indexed families of maps, including the empty
family ([[def-products-and-coproducts]]).

[F2] Equalizers represent equalizing maps
([[def-equalizers-and-coequalizers]]).

[L1] General small limits require products together with equalizers
([[thm-small-limits-from-products-and-equalizers]]).

[F3] Choice is equivalent to nonemptiness of a product of an arbitrary family
of nonempty sets ([[def-axiom-of-choice]]).

## Counterexample

**Proof technique:** missing equalizer.

1.1 The ordinary Cartesian product of any set-indexed family of nonempty sets is nonempty by [F3] and has the product property [F1] inside the full subcategory. For the empty family, the singleton is a nonempty terminal object. Thus $\mathbf{Set}_{\ne\varnothing}$ has all small products. [F1, F3]

1.2 Let $f,g:\{*\}\rightrightarrows\{0,1\}$ be the constant maps with values $0$ and $1$. If $h:X\to\{*\}$ equalized them, then $fh$ and $gh$ would be the distinct constant functions on the nonempty set $X$. Hence no equalizing cone exists in $\mathbf{Set}_{\ne\varnothing}$, so in particular no equalizer [F2] exists. [F2, given]

2.1 The parallel-pair diagram is finite and small but has no limit, refuting the statement. This is exactly the missing equalizer data isolated by [L1]. [L1, step 1.1, step 1.2] ∎
