---
id: def-good-reduction-and-abelian-scheme-model
kind: definition
title: "Good reduction of an abelian variety over a Dedekind scheme"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-abelian-scheme
  - def-abelian-variety-over-a-field
  - def-discrete-valuation-ring
  - def-dedekind-domain
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, v2.00 (2008), Chapter I sections 3, 5, 8, 11, 17 (good reduction)"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models (1990), 1.2/8 and Chapter 7"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Definition

Let $S$ be a Dedekind scheme ([[def-dedekind-domain]]) with function field $K$, and let $A_K$ be an abelian variety over $K$ ([[def-abelian-variety-over-a-field]]). One says that $A_K$ has **good reduction** over $S$ if there exists an abelian scheme $A\to S$ ([[def-abelian-scheme]]) together with an isomorphism $A\times_S\operatorname{Spec}K\cong A_K$ of $K$-schemes; such an $A$ is an **abelian scheme model** of $A_K$ over $S$. For a discrete valuation ring $R$ with fraction field $K$ ([[def-discrete-valuation-ring]]) this is the local notion at its closed point, and $A_K$ has **potential good reduction** if there is a finite extension $K'/K$ such that $A_K\otimes_KK'$ has good reduction over the normalization of $R$ in $K'$.

For a closed point $s\in S$, the **reduction** of $A$ at $s$ is $A_s=A\times_S\operatorname{Spec}\kappa(s)$, which is an abelian variety over the residue field $\kappa(s)$ of dimension $\dim A_K$. Good reduction is a property of the pair $(A_K,S)$; the definition asserts no existence statement, and in particular no claim is made that every abelian variety has good reduction.
