---
id: def-hh-type-a-quantum-antipode-formula
kind: definition
title: "The candidate antipode for the type-A quantum algebra"
status: published
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 0
deps: [def-hh-type-a-quantum-tensor-action-for-centralizers, lem-hh-free-associative-ring-and-relations-descent]
justified_by: [lem-hh-type-a-quantum-antipode-descends]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Pavel Etingof and Mykola Semenyakin, A brief introduction to quantum groups"
      url: "https://arxiv.org/pdf/2106.05252"
      locator: "§2.2.2, Example 2.3(iv), PDF pp. 4–5: the coproduct convention and antipode formulas for U_q(sl_2)"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

Let $F=\mathbb Q(q)$ and let $U_N$ be the associative algebra presented in [[def-hh-type-a-quantum-tensor-action-for-centralizers]], with $K_i=L_iL_{i+1}^{-1}$. On the free associative $F$-algebra before quotienting by the defining relations, define an $F$-linear operation $\widetilde S$ by fixing coefficients, reversing each word, and assigning

$$\widetilde S(L_j)=L_j^{-1},\qquad \widetilde S(L_j^{-1})=L_j,\qquad \widetilde S(E_i)=-E_iK_i^{-1},\qquad \widetilde S(F_i)=-K_iF_i.$$

Thus $\widetilde S(xy)=\widetilde S(y)\widetilde S(x)$ on the free algebra. The assignment is only a candidate operation on the quotient $U_N$; preservation of its defining relations and the antipode identities are established by [[lem-hh-type-a-quantum-antipode-descends]].
