---
id: thm-good-reduction-etale-cohomology-is-crystalline
kind: theorem
title: Good reduction makes p-adic étale cohomology crystalline
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - def-crystalline-p-adic-galois-representation
  - def-p-adic-etale-and-crystalline-cohomology
  - lem-p-adic-etale-cohomology-is-a-continuous-finite-dimensional-representation
  - def-smooth-proper-model-over-a-p-adic-dvr
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - title: Olivier Brinon and Brian Conrad, CMI Summer School Notes on p-adic Hodge Theory, Part II, Chapter 7, Section 7.3
      url: https://math.stanford.edu/~conrad/papers/notes.pdf
    - title: "Takeshi Tsuji, Semi-stable conjecture of Fontaine–Jannsen: a survey, Theorem 1.1 and Section 4"
      url: https://www.numdam.org/item/AST_2002__279__323_0.pdf
verification:
  precheck: n/a
---

## Statement

Let $K/\mathbb Q_p$ be finite, let $X$ be a smooth proper $K$-scheme, and suppose $X$ extends to a proper smooth $\mathcal O_K$-scheme $\mathcal X$. For every integer $i\ge0$, the continuous representation $H^i_{\acute et}(X\times_K\bar K,\mathbb Q_p)$ of $G_K$ is crystalline.

## Statement references

[Olivier Brinon and Brian Conrad, *CMI Summer School Notes on p-adic Hodge Theory*, Part II, Chapter 7, §7.3](https://math.stanford.edu/~conrad/papers/notes.pdf)

[Takeshi Tsuji, *Semi-stable conjecture of Fontaine–Jannsen: a survey*, Theorem 1.1 and §4](https://www.numdam.org/item/AST_2002__279__323_0.pdf)

## Facts & Assumptions

**Given:** a finite extension $K/\mathbb Q_p$, a smooth proper $K$-scheme $X$, a proper smooth model $\mathcal X/\mathcal O_K$, and $i\ge0$.

[F1] [[def-smooth-proper-model-over-a-p-adic-dvr]]: the model has generic fiber identified with $X$ and special fiber over the finite residue field of $K$.

[F2] [[def-p-adic-etale-and-crystalline-cohomology]]: the indicated geometric étale cohomology has its natural $G_K$-action and the special fiber has crystalline cohomology over $W_p(k)$.

[F3] [[lem-p-adic-etale-cohomology-is-a-continuous-finite-dimensional-representation]]: the geometric cohomology group is a finite-dimensional continuous representation. Its proof remains escalated.

[F4] [[def-crystalline-p-adic-galois-representation]]: crystallinity is the dimension equality for the $B_{\mathrm{cris}}$-invariants, with its induced filtered Frobenius structure. That definition has an unresolved period-ring embedding proof gate.

[A1] [[def-axiom-of-choice]] is inherited through the étale-site and cohomology suppliers; no additional choice is made in the comparison assertion.

Tsuji's survey states the comparison and identifies its technical proof as a deep theorem proved in his longer 1999 work. The attempted publisher retrieval of that full work did not yield the paper. No proof of the p-adic étale–crystalline comparison is supplied here; this item is escalated.
