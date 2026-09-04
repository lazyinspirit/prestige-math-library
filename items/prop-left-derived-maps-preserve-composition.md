---
id: prop-left-derived-maps-preserve-composition
kind: proposition
title: "Left derived maps preserve composition"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-left-derived-map-relative-to-resolution-data, prop-comparison-maps-respect-composition-up-to-homotopy, thm-chain-homotopic-maps-induce-the-same-map-on-homology, prop-homology-respects-identities-and-composition]
proof_strategy: direct
verification:
  audited: 2026-09-04
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-29
---
## Statement

Assume the Axiom of Dependent Choice.

Let $P$ be a supplied projective resolution datum on a class $\mathcal D$ and
$F:\mathcal A\to\mathcal B$ an additive functor between abelian categories.
For composable morphisms $A\xrightarrow{u}B\xrightarrow{v}C$ with
$A,B,C\in\mathcal D$ and every $n\in\mathbb Z$,
$$L_n^PF(vu)=L_n^PF(v)\circ L_n^PF(u).$$
## Facts & Assumptions

**Given:** Composable morphisms $A\xrightarrow{u}B\xrightarrow{v}C$ with
$A,B,C\in\mathcal D$ and an integer $n$.

[L1] Each derived map is induced from a comparison lift on the supplied
resolutions ([[def-left-derived-map-relative-to-resolution-data]]).

[L2] A comparison lift of a composite is homotopic to the composite of
comparison lifts ([[prop-comparison-maps-respect-composition-up-to-homotopy]]).

[L3] Chain-homotopic maps induce the same homology map
([[thm-chain-homotopic-maps-induce-the-same-map-on-homology]]).

[L4] Homology respects composition ([[prop-homology-respects-identities-and-composition]]).

## Proof

**Proof technique:** direct.

1.1 Choose comparison lifts $\widetilde u_\bullet$ of $u$, $\widetilde v_\bullet$ of $v$, and $\widetilde{vu}_\bullet$ of $vu$ as in [L1]. By [L2], $\widetilde{vu}_\bullet$ is homotopic to $\widetilde v_\bullet\widetilde u_\bullet$. [L1, L2, given, construct]

2.1 After applying $F$, [L3] makes the induced homology map of $F(\widetilde{vu}_\bullet)$ equal to that of $F(\widetilde v_\bullet\widetilde u_\bullet)$. By [L4], the latter equals the composite of the maps induced by $F(\widetilde u_\bullet)$ and $F(\widetilde v_\bullet)$. Translating back through [L1] gives $L_n^PF(vu)=L_n^PF(v)\circ L_n^PF(u)$. [L1, L3, L4, step 1.1] ∎
