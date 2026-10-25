---
id: def-ip-bolker-condition
kind: definition
title: "Bolker condition for a double-fibration transform"
status: published
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
deps:
  - def-ip-analytic-double-fibration-transform
  - def-ip-distributions-conormal-kernels-and-cotangent-relation
dependency_level: 2
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Marco Mazzucchelli, Mikko Salo, and Leo Tzou, A general support theorem for analytic double fibration transforms"
      url: "https://users.jyu.fi/~salomi/pub/MazzucchelliSaloTzou2023.pdf"
      locator: "Definition 1.5 and §3, printed pp. 5 and 19–24."
    - title: "Johannes Sjöstrand, Singularités analytiques microlocales"
      url: "https://www.numdam.org/item/AST_1982__95__R3_0.pdf"
      locator: "§6, Proposition 6.2, printed pp. 37–38, for cotangent-coordinate invariance."
proof_strategy: direct
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: "pass"
    date: "2026-10-22"
    scope: "Completed native delegated item review and certified repair closure; exact evidence and source-reading limits retained in research/inverse-problems-knot-theory-all-109-2026-10-19-publication.json."
    delegated_by: "owner"
---

## Definition

For an analytic double fibration with incidence cotangent relation $C_Z\subset(T^*G\setminus0)\times(T^*X\setminus0)$, let
$$
\pi_L:C_Z\longrightarrow T^*G\setminus0,\qquad \pi_L(g,\eta;x,\xi)=(g,\eta).
$$
The double fibration satisfies the global Bolker condition if $\pi_L$ is an injective immersion. The Bolker condition holds at a specified point $c=(g,\eta;x,\xi)\in C_Z$ if the full fiber over its data covector is the singleton $\pi_L^{-1}(g,\eta)=\{c\}$ and $d\pi_L|_c$ is injective. Thus the pointwise condition has both a fiber-uniqueness clause, which excludes every other relation point over the same data covector even outside a chosen chart, and a local differential-rank clause.

## Definition references

[[def-ip-analytic-double-fibration-transform|Analytic double fibration]]

[[def-ip-distributions-conormal-kernels-and-cotangent-relation|Incidence cotangent relation]]

## Facts & Assumptions

**Given:** An analytic double fibration and its incidence relation $C_Z$.

[F1] [[def-ip-analytic-double-fibration-transform]]: both incidence projections are analytic submersions and $C_Z$ is the relation of the transform.

[F2] [[def-ip-distributions-conormal-kernels-and-cotangent-relation]]: $C_Z$ consists of nonzero conormals with sign convention $(\eta,-\xi)$ and is independent of coordinates.

## Proof

**Given:** The incidence relation from [F2].

1.1 The relation is a smooth conic submanifold in local incidence coordinates: the conormal equations are smooth constant-rank linear equations in the covector variables, and the zero section is removed. Thus projection onto its first cotangent factor is a well-defined smooth map. [F1, F2, algebra]

2.1 Global injectivity means that every data covector has at most one object covector paired with it; at a specified point $c$, the corresponding fiber condition is exactly $\pi_L^{-1}(\pi_L(c))=\{c\}$. Injectivity of the differential means that every tangent vector to $C_Z$ mapped to zero is itself zero. Both conditions are invariant under coordinate changes because [F2] makes $C_Z$ coordinate independent and cotangent coordinate changes are diffeomorphisms. This proves the two clauses in the definition. [F2] ∎

## Remarks

The cotangent projections separate the data covector from the object covector. Here $\pi_R(g,\eta;x,\xi)=(x,\xi)$; the object covector is $\xi$, while the defining conormal on $G\times X$ is $(\eta,-\xi)$.

```tikz
\begin{tikzpicture}
\node (C) at (0,1.4) {$C_Z$};
\node (L) at (-3,0) {$T^*G\setminus0$};
\node (R) at (3,0) {$T^*X\setminus0$};
\draw[->] (C) -- node[above left] {$\pi_L$} (L);
\draw[->] (C) -- node[above right] {$\pi_R$} (R);
\node at (0,2.05) {$c=(g,\eta;x,\xi)$};
\node at (-3,-0.65) {$(g,\eta)$};
\node at (3,-0.65) {$(x,\xi)$};
\node (TC) at (-2,-2) {$T_cC_Z$};
\node (TL) at (2,-2) {$T_{(g,\eta)}(T^*G\setminus0)$};
\draw[->] (TC) -- node[above] {$d\pi_L|_c$} (TL);
\node at (0,-2.75) {$\ker(d\pi_L|_c)=\{0\}$};
\end{tikzpicture}
```

At a specified $c$, the pointwise Bolker condition requires both the full-fiber equality $\pi_L^{-1}(g,\eta)=\{c\}$ and injectivity of the displayed differential. The global condition requires $\pi_L$ to be injective and immersive everywhere; the condition at one point alone does not assert it. The figure illustrates the definition, and the proof above is independent of it.
