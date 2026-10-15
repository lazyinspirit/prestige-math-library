---
id: ex-hh-regular-hopf-module-projection
kind: example
title: "The regular Hopf module and its projection"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 7
deps:
  - def-hh-right-right-hopf-module-and-coinvariants
  - lem-hh-hopf-module-coinvariant-projection
  - thm-hh-fundamental-theorem-of-hopf-modules
  - def-hh-hopf-algebra-and-antipode
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification:
  precheck: pass
sources:
  references: []
---

## Example

Let $H$ be any Hopf algebra over a field $k$. Regard $H$ as a right module over itself by multiplication and as a right comodule by its coproduct $\Delta$. Its coinvariants are $k1_H$, and the projection from the fundamental theorem is $P(h)=\varepsilon(h)1_H$. The decomposition map $k1_H\otimes H\to H$ is $\lambda1_H\otimes h\mapsto\lambda h$.

## Facts & Assumptions

**Given:** A Hopf algebra $(H,m,1_H,\Delta,\varepsilon,S)$ over a field $k$, with its regular right action and regular right coaction.

[F1] A right-right Hopf module has compatibility $\rho(mh)=\sum m_0h_1\otimes m_1h_2$, coinvariants $\rho(m)=m\otimes1_H$, and regular module/comodule structures are in this convention ([[def-hh-right-right-hopf-module-and-coinvariants]]).

[F2] The projection is $P(m)=\sum m_0S(m_1)$, and the fundamental theorem uses $\alpha(n\otimes h)=nh$ and $\beta(m)=\sum P(m_0)\otimes m_1$ ([[lem-hh-hopf-module-coinvariant-projection]], [[thm-hh-fundamental-theorem-of-hopf-modules]]).

[F3] The Hopf identities include $\sum h_1S(h_2)=\varepsilon(h)1_H$ and $(\varepsilon\otimes\operatorname{id})\Delta(h)=h$ ([[def-hh-hopf-algebra-and-antipode]]).

## Verification

1.1 The regular structure is compatible because $\Delta(hg)=\Delta(h)\Delta(g)=\sum h_1g_1\otimes h_2g_2$. Thus $\rho(hg)=\sum h_1g_1\otimes h_2g_2$, which is exactly the right side of [F1] for $m=h$. [F1, F3, algebra]

2.1 If $h$ is coinvariant, then $\Delta(h)=h\otimes1_H$; applying $\varepsilon\otimes\operatorname{id}$ gives $h=\varepsilon(h)1_H$. Conversely every scalar multiple of $1_H$ is coinvariant. Moreover $P(h)=\sum h_1S(h_2)=\varepsilon(h)1_H$, so $\beta(h)=\sum\varepsilon(h_1)1_H\otimes h_2=1_H\otimes h$ and $\alpha\beta(h)=h$. These are precisely the stated coinvariant subspace and decomposition maps. [F2, F3, step 1.1] ∎
