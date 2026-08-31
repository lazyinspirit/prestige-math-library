---
id: cex-a-vector-field-with-no-pullback-under-a-noninjective-map
kind: counterexample
title: "A vector field with no pullback under a noninjective map"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-31
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2019).pdf"
---

## Statement refuted

**False claim:** for every smooth map $F:M\to N$ and vector field $Y$ on $N$,
there is a vector field $X$ on $M$ satisfying $dF_p(X_p)=Y_{F(p)}$ for every
$p\in M$.

## Facts & Assumptions

**Given:** The constant map $F:\mathbb R\to\mathbb R^2$, $F(t)=(0,0)$, and the constant vector field $Y=\partial/\partial x$ on $\mathbb R^2$.

[L1] A general mixed tensor field does not have a pullback by every smooth map ([[fs-a-general-mixed-tensor-field-has-a-pullback-by-every-smooth-map]]).

## Counterexample
**Proof technique:** direct.

1.1 The map $F$ is noninjective and has differential $dF_t=0$ for every $t\in\mathbb R$. [given]
2.1 A vector field $X$ as in the false claim would satisfy $dF_t(X_t)=Y_{F(t)}$ at each point. Step 1.1 makes that impossible, because $dF_t(X_t)=0$ for every $X_t\in T_t\mathbb R$, whereas $Y_{F(t)}\neq 0$. [given, step 1.1, algebra]
3.1 Hence $Y$ has no pullback along $F$, giving the announced counterexample and agreeing with [L1]. [L1, step 2.1] ∎
