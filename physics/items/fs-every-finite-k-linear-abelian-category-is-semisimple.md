---
id: fs-every-finite-k-linear-abelian-category-is-semisimple
kind: false-statement
title: "Every finite k-linear abelian category is semisimple"
status: published
origin: pipeline
deps: [def-finite-k-linear-abelian-category, def-semisimple-object-and-semisimple-abelian-category]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  audited: 2026-09-06
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Etingof, Gelaki, Nikshych, Ostrik, Tensor Categories, Section 1.8"
      url: "https://math.mit.edu/~etingof/egnobookfinal.pdf"
---

## Statement

**False claim.** Every finite $k$-linear abelian category is semisimple.

## Facts & Assumptions

**Given:** The two definitions on this page.

[F1] Finiteness requires local finiteness, finitely many simple classes, and enough projectives ([[def-finite-k-linear-abelian-category]]).

[F2] Semisimplicity requires every object to be a direct sum of simples ([[def-semisimple-object-and-semisimple-abelian-category]]).

## Refutation

**Proof technique:** direct.

1.1 Let $A=k[\varepsilon]/(\varepsilon^2)$ and let $\mathcal C=A\text{-}\mathrm{mod}$ be the category of finite-dimensional left $A$-modules.  It is finite: $A$ is finite-dimensional, it has the single simple module $S=A/(\varepsilon)$, and the quotient $A\twoheadrightarrow S$ is its projective cover. [F1, construct]

2.1 The sequence $0\to S\xrightarrow{1\mapsto\varepsilon}A\to S\to0$ does not split.  Indeed, every vector killed by $\varepsilon$ in $A$ is a multiple of $\varepsilon$ and maps to zero in the quotient, so no section exists.  Thus $A$ is not a direct sum of simples, and [F2] says that $\mathcal C$ is not semisimple. [step 1.1, F2] ∎
