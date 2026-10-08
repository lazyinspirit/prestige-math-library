---
id: def-normalized-type-a-hecke-algebra-and-its-bar-involution
kind: definition
title: The normalized type-A Hecke algebra and its bar involution
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [def-generic-type-a-hecke-algebra, thm-standard-basis-of-the-generic-type-a-hecke-algebra, def-symmetric-group, def-weyl-group-and-length-for-finite-gl-n]
dependency_level: 0
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Ben Elias and Geordie Williamson, The Hodge theory of Soergel bimodules, arXiv:1212.0791 (45 pp.) — §3.2 (printed pp. 15–16): the Hecke algebra in the normalization $H_xH_s=H_{xs}$ or $(v^{-1}-v)H_x+H_{xs}$, the bar involution $\\overline{H_x}=H_{x^{-1}}^{-1}$, the Kazhdan–Lusztig basis $\\{\\underline H_x\\}$ characterized by bar-invariance and $\\underline H_x\\in H_x+\\sum_{y<x}v\\mathbb Z[v]H_y$, the example $\\underline H_s=H_s+vH_{\\mathrm{id}}$, and Remark 3.2: $v=q^{-1/2}$, $H_x=v^{\\ell(x)}T_x$, $\\underline H_x=C'_x$, $h_{y,x}=v^{\\ell(x)-\\ell(y)}P_{y,x}(v^{-2})$"
      url: "https://arxiv.org/pdf/1212.0791"
      locator: "§3.2, printed pp. 15–16; complete section read for the multiplication, bar, and normalization dictionary."
    - title: "G. Lusztig, Hecke Algebras with Unequal Parameters (revised book version, arXiv:math/0208154v2) — the split case $L\\equiv1$ read as the source for the bar operator, the R-coefficients, the new basis, its multiplication properties and cells; translated to the normalization of this page by $v_L=v^{-1}$ (so $v_L^{L(w)-L(y)}=v^{-(\\ell(w)-\\ell(y))}$)"
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§2.1–2.5 (printed pp. 19–22); §3.1–3.5 (pp. 22–24); §4.1–4.9 (pp. 24–27); §5.1–5.6 (pp. 27–30); §6.1–6.8 (pp. 30–31); §7.1–7.6 (pp. 31–36); §8.1–8.9 (pp. 36–39); §10.1–10.9 (pp. 46–49)"
verification:
  precheck: n/a
---

## Definition

Let $n\ge1$ and $A:=\mathbb Z[v^{\pm1}]$. For $n\ge2$, define the **normalized type-A Hecke algebra** $H_v(n)$ to be the associative unital $A$-algebra presented by generators $H_{s_1},\ldots,H_{s_{n-1}}$ with relations
$$H_{s_i}^2=1+(v^{-1}-v)H_{s_i},\qquad H_{s_i}H_{s_{i+1}}H_{s_i}=H_{s_{i+1}}H_{s_i}H_{s_{i+1}},\qquad H_{s_i}H_{s_j}=H_{s_j}H_{s_i}\quad(|i-j|>1).$$
For $n=1$, set $H_v(1):=A$.

Here $S_n=\operatorname{Sym}(\{1,\ldots,n\})$, $s_i=(i\ i+1)$, and $\ell$ is inversion length as in [[def-symmetric-group]] and [[def-weyl-group-and-length-for-finite-gl-n]]. For $w\in S_n$, let $T_w$ be the standard basis element of the generic Hecke algebra of [[def-generic-type-a-hecke-algebra]], formed from any reduced expression of $w$, and after the coefficient specialization $q\mapsto v^{-2}$ put $H_w:=v^{\ell(w)}T_w$. Equivalently, $H_w=H_{s_{i_1}}\cdots H_{s_{i_k}}$ for a reduced expression $w=s_{i_1}\cdots s_{i_k}$. The standard-basis theorem [[thm-standard-basis-of-the-generic-type-a-hecke-algebra]] and rescaling by units show that $\{H_w:w\in S_n\}$ is an $A$-basis of $H_v(n)$.

Right multiplication by a generator is
$$H_wH_{s_i}=H_{ws_i}\quad\text{if }\ell(ws_i)=\ell(w)+1,\qquad H_wH_{s_i}=H_{ws_i}+(v^{-1}-v)H_w\quad\text{if }\ell(ws_i)=\ell(w)-1.$$

**Dictionary with the generic normalization.** If the generic parameter in [[def-generic-type-a-hecke-algebra]] is denoted by $q$, its relation is $T_i^2=(q-1)T_i+q$. The coefficient map $q\mapsto v^{-2}$ is the stated specialization, and $H_{s_i}=vT_i$. This gives $H_{s_i}^2=1+(v^{-1}-v)H_{s_i}$; the braid and commutation relations are unchanged. The two multiplication cases above are the standard-basis rule after the same rescaling.

**Bar assignment.** Let $F$ be the free associative $\mathbb Z[v^{\pm1}]$-algebra on the generator symbols. Define the semilinear algebra map $\iota_0:F\to F$ by $\iota_0(v)=v^{-1}$ and $\iota_0(H_{s_i})=H_{s_i}-(v^{-1}-v)$. In the quotient $H_v(n)$, the quadratic relation makes this latter element the two-sided inverse $H_{s_i}^{-1}$. The next lemma proves that $\iota_0$ preserves the defining ideal and descends to a well-defined involution $\iota$ on $H_v(n)$.

All items on this page use this normalization. It agrees with Elias–Williamson §3.2 under $H_x=v^{\ell(x)}T_x$ and $q=v^{-2}$.
