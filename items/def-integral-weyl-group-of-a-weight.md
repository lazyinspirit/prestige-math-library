---
id: "def-integral-weyl-group-of-a-weight"
kind: "definition"
title: "The integral Weyl group of a weight"
deps: ["def-root-reflections-and-the-weyl-group-action", "def-weyl-vector-rho-for-a-chosen-positive-system"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Humphreys, §3.4 definitions and invariance identities, p.52; §4.9, p.83 (reflection-generated convention)"
      url: "https://www.nzdr.ru/data/media/biblio/kolxoz/M/MA/MAr/Humphreys%20J.E.%20Representations%20of%20Semisimple%20Lie%20Algebras%20in%20the%20BGG%20Category%20O%20(AMS,%202008)(ISBN%200821846787)(O)(303s)_MAr_.pdf"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
status: "draft"
origin: "pipeline"
---

## Definition

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

For a weight $\lambda$, define

$$\Phi_\lambda=\{\alpha\in\Phi:\langle\lambda+\rho,\alpha^\vee\rangle\in\mathbb Z\},\qquad W_\lambda=\langle s_\alpha:\alpha\in\Phi_\lambda\rangle\subset W.$$

Reflections and coroots are those of [[def-root-reflections-and-the-weyl-group-action]], with the shift from [[def-weyl-vector-rho-for-a-chosen-positive-system]]. The **integral-reflection linkage class** through $\lambda$ is $W_\lambda\cdot\lambda$. The word integral includes zero and negative integral pairings. If $\Phi_\lambda$ is empty the generated group is $\{1\}$. This definition uses generating reflections; no identification with a root-lattice-coset stabilizer is assumed.
