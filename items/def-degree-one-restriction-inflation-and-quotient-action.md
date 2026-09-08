---
id: def-degree-one-restriction-inflation-and-quotient-action
kind: definition
title: "Degree-one restriction, inflation and quotient action"
status: draft
origin: pipeline
deps: [def-crossed-homomorphisms-principal-coboundaries-and-first-cohomology]
justified_by: [lem-degree-one-maps-and-quotient-action-are-well-defined]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  scraped: []
  references:
    - title: "Weibel, An Introduction to Homological Algebra, Chapter 6, Sections 6.4–6.8"
      url: "https://math.mit.edu/~hrm/palestine/weibel/06-group_homology_and_cohomology.pdf"
    - title: "Dekimpe–Hartl–Wauters, A seven-term exact sequence for the cohomology of a group extension, Sections 2–5 pp.2–11 and Section 10.2 p.21"
      url: "https://arxiv.org/pdf/1103.4052"
---

## Definition

For $1\to N\to G\xrightarrow{\pi}Q\to1$ and a left G-module A, let $A^N=\{a:na=a\text{ for all }n\in N\}$, with action $q a=ga$ for any lift g of q. Define
$$\operatorname{res}(d)=d|_N,\qquad\operatorname{inf}(c)(g)=c(\pi(g)),\qquad(g\cdot d)(n)=g d(g^{-1}ng).$$
Inflation starts with crossed maps $Q\to A^N$. The last formula is a G-action on crossed maps $N\to A$; it is its induced action on H1 that factors through Q. All H1 symbols first denote the explicit bar quotient; the derived interpretation uses its inherited conventions. The next lemma supplies well-definedness on the quotient.
