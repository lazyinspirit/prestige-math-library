---
id: def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization
kind: definition
title: Kazhdan–Lusztig polynomials in the classical $q$-normalization
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis, def-normalized-type-a-hecke-algebra-and-its-bar-involution]
dependency_level: 5
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ben Elias and Geordie Williamson, The Hodge theory of Soergel bimodules, arXiv:1212.0791 — §3.2, printed pp. 15–16: the Hecke normalization and Remark 3.2, with q=v^-2, H_x=v^ell(x)T_x, and h_{y,x}=v^(ell(x)-ell(y))P_{y,x}(v^-2)."
      url: "https://arxiv.org/pdf/1212.0791"
      locator: "§3.2, printed pp. 15–16; complete section and displayed formulas read."
    - title: "Susumu Ariki, Robinson–Schensted correspondence and left cells, arXiv:math/9910117 — §2.2, Definition 2.3 and Lemma 2.5(1): the classical q-polynomial normalization, degree bound, and constant term."
      url: "https://arxiv.org/pdf/math/9910117"
      locator: "§2.2, Definition 2.3, the μ-coefficient convention, and Lemma 2.5(1), printed pp. 4–5; the complete relevant passage was read."
    - title: "G. Lusztig, Hecke Algebras with Unequal Parameters, revised version arXiv:math/0208154v2 — Theorem 5.2 and Proposition 5.4 in the split case L=1: the new-basis coefficients and degree/parity bounds."
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§§5.1–5.4, printed pp. 27–30; Theorem 5.2 and its proof, and Proposition 5.4 and its proof, were read in full and translated by v_L=v^{-1}."
verification:
  precheck: n/a
---

## Definition

Identify $\mathbb Z[q]$ with $\mathbb Z[v^{-2}]$ by $q\mapsto v^{-2}$. For $y\le w$ in $S_n$, put $d=\ell(w)-\ell(y)$ and define the **Kazhdan–Lusztig polynomial** $P_{y,w}(q)\in\mathbb Z[q]$ by $$P_{y,w}(v^{-2})=v^{-d}p_{y,w},$$ where $\underline H_w=\sum_{y\le w}p_{y,w}H_y$ is the Kazhdan–Lusztig basis of [[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]. The parity clause of that theorem makes the right side a polynomial in $v^{-2}$. The conventions are: $P_{y,w}=0$ unless $y\le w$, $P_{w,w}=1$, $P_{y,w}$ has constant term 1, and for $y<w$ its degree is at most $(\ell(w)-\ell(y)-1)/2$. The **$\mu$-coefficient** is $$\mu(y,w):=\text{coefficient of }q^{(\ell(w)-\ell(y)-1)/2}\text{ in }P_{y,w},$$ defined to be 0 when $\ell(w)-\ell(y)$ is even; equivalently $\mu(y,w)$ is the coefficient of $v$ in $p_{y,w}$. One writes $\mu(y|w)\ne0$ when $y\ne w$ and ($y<w$ and $\mu(y,w)\ne0$) or ($w<y$ and $\mu(w,y)\ne0$). The dictionary with the literature is recorded for use: with the classical parameter $T_s^2=(q-1)T_s+q$ one has $H_w=v^{\ell(w)}T_w$, the element $\underline H_w$ is the basis element $C'_w$ of [EW], and $h_{y,w}=p_{y,w}$ with $v^{\ell(w)-\ell(y)}P_{y,w}(v^{-2})=h_{y,w}$ [EW, Remark 3.2].

## Remarks

This definition consumes the coefficient, support, parity, and degree clauses of [[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]: the displayed rescaling defines $P$, and the parity clause makes it a polynomial; the leading-term and $v\mathbb Z[v]$ clauses give its constant term and degree bound. The supplier's separate coefficientwise-nonnegativity clause remains owner-held and is not used here. Open supplier obligation: `thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis` → `def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization`, consuming these Definition clauses, not a numbered proof step because this item is a definition. Keep this item provisional until the supplier's scope decision is resolved and the completed supplier's actual use is rechecked.
