---
id: "def-generalized-central-character-subcategory-of-o"
kind: "definition"
title: "Generalized central-character subcategories"
deps: ["def-bgg-category-o", "def-central-character-of-a-lie-algebra-module"]
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "§15.1 Corollary 15.7, p.80"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
provenance:
  statement: "literature-derived"
  proof: "not-applicable"
status: published
origin: "pipeline"
---

## Definition

Fix a finite-dimensional complex semisimple Lie algebra $\mathfrak g$, a Cartan subalgebra $\mathfrak h$, and a positive Borel $\mathfrak b=\mathfrak h\oplus\mathfrak n^+$. Write $Q^+=\sum_i\mathbb Z_{\geq0}\alpha_i$, $\mu\leq\lambda$ when $\lambda-\mu\in Q^+$, and $w\cdot\lambda=w(\lambda+\rho)-\rho$.

Let $Z=Z(U(\mathfrak g))$ and let $\chi:Z\to\mathbb C$ be a unital complex-algebra character, as in [[def-central-character-of-a-lie-algebra-module]]. Put $\mathfrak m_\chi=\ker\chi$ and, for $M$ in [[def-bgg-category-o]], define

$$M_\chi=\{v\in M:\mathfrak m_\chi^Nv=0\text{ for some integer }N\geq1\}.$$

Here $\mathfrak m_\chi^Nv=0$ means every element of that ideal kills $v$; the exponent may initially depend on $v$. The full subcategory $\mathcal O_\chi$ consists of the objects with $M=M_\chi$. This is a generalized central-character condition, weaker than scalar central action. It does not by definition assert that $\mathcal O_\chi$ is an indecomposable block.
