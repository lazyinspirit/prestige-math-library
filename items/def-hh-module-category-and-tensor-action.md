---
id: def-hh-module-category-and-tensor-action
kind: definition
title: "The module category of a bialgebra and its tensor action"
status: draft
origin: pipeline
pipeline_run: hopf-hecke-unfinished-15-2026-10-15
dependency_level: 2
deps: [def-hh-bialgebra-and-bialgebra-map, thm-universal-property-of-module-tensor-products, def-left-and-right-modules, def-hh-scalar-and-tensor-conventions]
justified_by: [thm-hh-bialgebra-module-tensor-coherence]
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "P. Etingof, S. Gelaki, D. Nikshych, and V. Ostrik, Tensor Categories (MIT 18.769 full course lecture notes, 2009)"
      url: "https://ocw.mit.edu/courses/18-769-topics-in-lie-theory-tensor-categories-spring-2009/8a51a9d1b57a35a0e6a5804bdea6e146_MIT18_769S09_notes.pdf"
    - title: "Christoph Schweigert, Hopf algebras, quantum groups and topological field theory (Hamburg University full lecture notes, 2025)"
      url: "https://christophschweigert.github.io/skripten/hskript.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-15
---

## Definition

Let $k$ be a field and let $H$ be a $k$-vector space with associative unital multiplication $m$, unit $1_H$, coassociative comultiplication $\Delta:H\to H\otimes_k H$, and counit $\varepsilon:H\to k$. Assume $\Delta$ and $\varepsilon$ are unital algebra maps; this is the bialgebra interface used on this page. A left $H$-module is a unital left module in the sense of [[def-left-and-right-modules]]: its action satisfies $1_Hv=v$ and $(hh')v=h(h'v)$. Let $H\text{-}\mathrm{Mod}$ be the category whose objects are all left $H$-modules and whose morphisms $f:V\to W$ are $k$-linear maps satisfying $f(hv)=h f(v)$ for every $h\in H$ and $v\in V$.

For left $H$-modules $V,W$, give the algebraic tensor product $V\otimes_k W$ the candidate action

$$h\cdot(v\otimes w)=\sum h_{(1)}v\otimes h_{(2)}w,\qquad \Delta(h)=\sum h_{(1)}\otimes h_{(2)}.$$

The sums are finite algebraic tensor sums; the tensor product and scalar conventions are those of [[def-hh-scalar-and-tensor-conventions]]. The candidate unit object is $k_\varepsilon=k$ with $h\cdot c=\varepsilon(h)c$. For morphisms $f:V\to V'$ and $g:W\to W'$, the candidate tensor morphism is the usual linear map $f\otimes g$ determined by $(f\otimes g)(v\otimes w)=f(v)\otimes g(w)$ through [[thm-universal-property-of-module-tensor-products]].

These formulas specify the proposed tensor operations; [[thm-hh-bialgebra-module-tensor-coherence]] proves that they are module actions and that the canonical associator and unit maps are morphisms in $H\text{-}\mathrm{Mod}$.
