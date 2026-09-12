---
id: "fs-a-homotopy-between-proper-maps-is-automatically-a-proper-homotopy"
kind: "false-statement"
title: "A homotopy between proper maps is automatically proper"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-degree-is-invariant-under-proper-smooth-homotopy","thm-heine-borel-rn"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology, proper homotopy clause following Theorem 5.4.1
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "counterexample"
---

## Statement

**False.** Every smooth homotopy whose two endpoint maps are proper is itself a proper map from the product with the parameter interval.

## Facts & Assumptions

[F1] [[thm-degree-is-invariant-under-proper-smooth-homotopy]] requires properness of the combined map $H:M\times[0,1]\to N$ and explicitly does not replace it by endpoint properness.

[F2] [[thm-heine-borel-rn]] shows that the real line is noncompact.

## Refutation

**Given:** Define $H:\mathbb R\times[0,1]\to\mathbb R$ by $H(x,t)=(2t-1)^2x$.

1.1 This is smooth. At both endpoints, $H(x,0)=x=H(x,1)$, so $H_0$ and $H_1$ are the identity of $\mathbb R$. Each is proper because the inverse image of every compact set is that same compact set. [given]

1.2 The singleton $\{0\}\subset\mathbb R$ is compact, but $$H^{-1}(\{0\})=(\{0\}\times[0,1])\cup(\mathbb R\times\{1/2\}).$$ Its closed subspace $\mathbb R\times\{1/2\}$ is homeomorphic to the noncompact real line from [F2]; more directly, the cover by $(-n,n)\times(1/4,3/4)$ together with the complement of that slice has no finite subcover. Hence $H^{-1}(\{0\})$ is not compact, and $H$ is not proper. [F2, given]

2.1 Thus proper endpoint maps do not make the combined homotopy proper, and [F1]'s hypothesis cannot be deleted. The midpoint map is the constant zero map, which pinpoints the degeneration. Both endpoints, the compact singleton, and the noncompact inverse image are explicit; the source is nonempty and boundaryless in its spatial variable, and no choice principle is used. [F1, step 1.1, step 1.2] ∎
