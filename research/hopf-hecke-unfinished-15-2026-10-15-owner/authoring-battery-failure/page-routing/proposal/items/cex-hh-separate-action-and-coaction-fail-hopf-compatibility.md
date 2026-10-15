---
id: cex-hh-separate-action-and-coaction-fail-hopf-compatibility
kind: counterexample
title: "A module and comodule need not satisfy Hopf compatibility"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 4
deps:
  - def-hh-right-right-hopf-module-and-coinvariants
  - def-hh-hopf-algebra-and-antipode
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
verification:
  precheck: pass
sources:
  references: []
---

## Statement refuted

Every right $H$-module and right $H$-comodule on the same vector space automatically form a right-right Hopf module.

## Facts & Assumptions

**Given:** A field $k$, the group algebra $H=kC_2$ with basis $1,g$ and $g^2=1$, and the one-dimensional vector space $M=km$. Set $\Delta(g)=g\otimes g$, $\varepsilon(g)=1$, and $S(g)=g$. Give $M$ the right action $m\cdot h=\varepsilon(h)m$ and right coaction $\rho(m)=m\otimes g$.

[F1] Hopf-module compatibility would require $\rho(m\cdot h)=\sum m_0\cdot h_1\otimes m_1h_2$ ([[def-hh-right-right-hopf-module-and-coinvariants]]).

[F2] In $kC_2$, $1$ and $g$ are distinct basis elements, $g^2=1$, and $\Delta(g)=g\otimes g$ with $\varepsilon(g)=1$; these maps satisfy the Hopf axioms as verified below.

## Proof

1.1 The multiplication on $H$ is the group multiplication on $C_2$ extended bilinearly, hence associative and unital. The maps $\Delta,\varepsilon$ are unital algebra maps because $\Delta(g^2)=1\otimes1=(g\otimes g)^2$ and $\varepsilon(g^2)=1=\varepsilon(g)^2$. Coassociativity and counitality hold on the basis $1,g$ since both are group-like, and $S(1)=1,S(g)=g$ satisfies $gS(g)=1=S(g)g$ and the same identity on $1$. Thus $H$ is a Hopf algebra over $k$, in every characteristic. [F2, algebra]

1.2 The rule $m\cdot h=\varepsilon(h)m$ is a unital right module action because $\varepsilon$ is a unital algebra map: $(m\cdot a)\cdot b=\varepsilon(a)\varepsilon(b)m=\varepsilon(ab)m=m\cdot(ab)$. The map $\rho(m)=m\otimes g$ is a right coaction because $\Delta(g)=g\otimes g$ and $\varepsilon(g)=1$. Therefore each structure separately satisfies its axioms. [F2, algebra]

2.1 For $h=g$, the left side of [F1] is $\rho(m\cdot g)=\rho(m)=m\otimes g$, while the right side is $(m\cdot g)\otimes g^2=m\otimes1$. Since $m\ne0$ and $1,g$ are linearly independent, these tensors differ. Thus the two structures do not satisfy Hopf-module compatibility, refuting the assertion. [F1, F2, step 1.2, algebra] ∎
