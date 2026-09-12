---
id: "fs-compactly-supported-cohomology-is-contravariant-for-every-smooth-map"
kind: "false-statement"
title: "Compactly supported cohomology is contravariant for every smooth map"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["prop-proper-smooth-maps-pull-back-compactly-supported-forms","lem-smooth-bump-between-concentric-euclidean-balls","thm-heine-borel-rn"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Robbin–Salamon, Introduction to Differential Topology, compactly supported pullback discussion
      url: https://zaco.au/lib/math/text/differential-geometry/difftop.pdf
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "counterexample"
---

## Statement

**False.** Pullback makes compactly supported de Rham cohomology contravariant for every smooth map, without a properness condition.

## Facts & Assumptions

[F1] [[prop-proper-smooth-maps-pull-back-compactly-supported-forms]] proves $\operatorname{supp}(F^*\omega)\subseteq F^{-1}(\operatorname{supp}\omega)$ and uses properness exactly to make the right-hand set compact.

[F2] [[lem-smooth-bump-between-concentric-euclidean-balls]] supplies a smooth $\rho:\mathbb R\to[0,1]$ equal to one near zero and supported in $(-1,1)$.

[F3] [[thm-heine-borel-rn]] makes the closed bounded support in [F2] compact and, conversely, shows that the unbounded real line is not compact.

## Refutation

**Given:** The smooth constant map $F:\mathbb R\to\mathbb R$, $F(x)=0$.

1.1 Take the bump $\rho$ from [F2], with $\rho(0)=1$. Its support is closed and bounded, hence compact by [F3], so $\rho\in\Omega_c^0(\mathbb R)$. Pullback in degree zero is composition, and therefore $F^*\rho=\rho\circ F=1$ on all of $\mathbb R$. [F2, F3, given]

2.1 The support of the constant-one function is $\mathbb R$, which is not compact by [F3] (equivalently, the open cover $\{(-n,n):n\ge1\}$ has no finite subcover). Hence $F^*\rho\notin\Omega_c^0(\mathbb R)$. Pullback therefore fails even to define the proposed compact-support cochain map, so it cannot induce the claimed contravariant cohomology map. [F3, step 1.1]

3.1 Here $F$ is nonproper because the compact singleton $\{0\}$ has inverse image $\mathbb R$; this is exactly the obstruction isolated by [F1]. The zero input still pulls back to compact support and an empty source would be vacuous, but neither repairs the universal assertion. The example is already in degree zero and dimension one, has no boundary endpoints, and uses one explicit bump with no choice principle. [F1, F3, step 1.1, step 2.1] ∎
