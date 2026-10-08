---
id: thm-r-polynomial-recursion-and-degree-bounds
kind: theorem
title: The $R$-coefficient recursion, support, degree bounds and inversion
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [def-bruhat-interval-and-r-polynomials, lem-bruhat-order-basic-properties-for-permutations, def-normalized-type-a-hecke-algebra-and-its-bar-involution, lem-the-hecke-bar-involution-is-well-defined, lem-reversal-anti-involution-commutes-with-hecke-bar]
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Lusztig, Hecke Algebras with Unequal Parameters (revised book version, arXiv:math/0208154v2) — §4.3–4.9 (printed pp. 25–27): R-coefficients, descent recursion, support and degree bounds, Verma's sign sum, bar and inversion identities; full argument read. Section 4.3 writes bar(T_w)=sum_y bar(r^L_{y,w})T_y, so this page's direct expansion coefficients are bar(r^L_{y,w}); the parameter translation is v_L=v^{-1}."
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§4.3–4.9, printed pp. 25–27; the coefficient convention and Lemma 4.4 computation, Lemmas 4.5–4.6, Proposition 4.7 and §§4.8–4.9 were read in full."
    - title: "Ben Elias and Geordie Williamson, The Hodge theory of Soergel bimodules, arXiv:1212.0791 (45 pp.) — §3.2 (printed pp. 15–16): the normalized Hecke multiplication and bar conventions."
      url: "https://arxiv.org/pdf/1212.0791"
      locator: "§3.2, printed pp. 15–16; complete section read."
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Facts & Assumptions

**Given:** $n\ge1$, the standard-basis coefficients $r_{y,w}$ of the bar image in [[def-bruhat-interval-and-r-polynomials]], and the one-based $S_n$ and Hecke normalization fixed there.

[F1] The elements $H_w$ form an $A=\mathbb Z[v^{\pm1}]$-basis, are products along reduced expressions, and satisfy $H_s^2=1+(v^{-1}-v)H_s$ ([[def-normalized-type-a-hecke-algebra-and-its-bar-involution]]).

[F2] The bar is a semilinear algebra involution with $\overline v=v^{-1}$ and $\overline{H_s}=H_s^{-1}$ ([[lem-the-hecke-bar-involution-is-well-defined]]).

[F3] Bruhat order is graded by $\ell$, has the reduced-subword characterization, and satisfies the two lifting implications in part (d) below ([[lem-bruhat-order-basic-properties-for-permutations]]).

[F4] The $A$-linear anti-automorphism $\flat$ satisfies $\flat(H_w)=H_{w^{-1}}$ and commutes with the bar ([[lem-reversal-anti-involution-commutes-with-hecke-bar]]).

[F5] The bar image has the unique standard-basis expansion $\overline{H_w}=\sum_{y\in S_n}r_{y,w}H_y$ defining the coefficients $r_{y,w}$ ([[def-bruhat-interval-and-r-polynomials]]).

## Statement

For $n\ge1$, let $r_{y,w}\in A=\mathbb Z[v^{\pm1}]$ be the $R$-coefficients of [[def-bruhat-interval-and-r-polynomials]]. (a) **Recursion.** Let $w\in S_n$ and let $s=s_i$ be a simple reflection with $sw<w$. Then for every $y\in S_n$ $$r_{y,w}=r_{sy,sw}\quad\text{if }sy<y,\qquad r_{y,w}=r_{sy,sw}+(v-v^{-1})\,r_{y,sw}\quad\text{if }sy>y .$$ (b) **Support.** $r_{y,w}\ne0$ implies $y\le w$, and $r_{w,w}=1$. (c) **Degree and parity.** For $y\le w$, with $d=\ell(w)-\ell(y)$: $r_{y,w}\in v^{-d}\,\mathbb Z[v^{2},v^{-2}]$; the term of least $v$-degree is $\mathrm{sgn}(y)\,\mathrm{sgn}(w)\,v^{-d}$, and the term of largest $v$-degree is $v^{d}$. (d) **Symmetry.** $\overline{r_{y,w}}=\mathrm{sgn}(y)\mathrm{sgn}(w)r_{y,w}$ and $r_{y^{-1},w^{-1}}=r_{y,w}$. (e) **Matrix inversion.** $\sum_{y\in S_n} r_{x,y}\,\overline{r_{y,z}}=\delta_{x,z}$ for all $x,z$; equivalently the triangular matrices $R=(r_{x,y})$, $\bar R$ satisfy $R\bar R=\bar RR=1$. Here $\mathrm{sgn}(y)=(-1)^{\ell(y)}$ and all coefficients are kept in the variable $v$ of this page.

## Proof

**Proof technique:** derive the descent formula from the presentation, then use induction on length and the Bruhat subword and lifting properties.

1.1 **Descent recursion.** Put $\alpha:=v-v^{-1}$. If $sx>x$, concatenating reduced words gives $H_sH_x=H_{sx}$. If $sx<x$, then $x=s(sx)$ is reduced and $H_sH_x=H_s^2H_{sx}=H_{sx}+(v^{-1}-v)H_x$ by the quadratic relation. For a left descent $sw<w$, write $w=s(sw)$ and apply bar to its reduced product: $\overline{H_w}=(H_s+\alpha)\sum_x r_{x,sw}H_x$. In the expansion, the coefficient correction $(v^{-1}-v)r_{x,sw}$ from the $sx<x$ terms cancels the $\alpha r_{x,sw}$ term; reindexing the remaining $H_{sx}$ terms gives $\overline{H_w}=\sum_y r_{sy,sw}H_y+\alpha\sum_{sy>y}r_{y,sw}H_y$. Comparing coefficients in the standard basis proves (a). [F1, F2, F5, algebra]

1.2 **Inverse-index symmetry.** Apply $\flat$ to $\overline{H_w}=\sum_y r_{y,w}H_y$. Since $\flat$ is $A$-linear, the result is $\sum_y r_{y,w}H_{y^{-1}}$; because $\flat$ commutes with bar and $\flat(H_w)=H_{w^{-1}}$, it is also $\overline{H_{w^{-1}}}=\sum_x r_{x,w^{-1}}H_x$. Comparing coefficients at $H_{y^{-1}}$ gives $r_{y,w}=r_{y^{-1},w^{-1}}$. [F1, F2, F4, F5, algebra]

2.1 **Support and diagonal.** Induct on $\ell(w)$, with $r_{\mathrm{id},\mathrm{id}}=1$ and all other coefficients in the identity column zero. If $sy<y$ and $r_{y,w}\ne0$, (a) gives $r_{sy,sw}\ne0$, so induction gives $sy\le sw$; take a reduced expression for $sw$ and a reduced subword for $sy$. Prefixing $s$ gives a subword for $s(sy)=y$ in the reduced expression $w=s(sw)$; it is reduced because its length is $1+\ell(sy)=\ell(y)$. Hence $y\le w$. If $sy>y$ and $r_{y,w}\ne0$, at least one of $r_{sy,sw}$ and $r_{y,sw}$ is nonzero. In the first case induction gives $sy\le sw$, and $y<sy$ implies $y\le w$; in the second it gives $y\le sw<w$. Thus the support is contained in $[\mathrm{id},w]$. Taking $y=w$ in (a) gives $r_{w,w}=r_{sw,sw}=1$ for a left descent, completing the induction (and the $n=1$ case is the identity base). [F1, F2, F3, F5, step 1.1, algebra]

2.2 **Bar symmetry.** Induct on $\ell(w)$ using (a), with the identity column as base. If $sy<y$, then $r_{y,w}=r_{sy,sw}$ and $\mathrm{sgn}(sy)\mathrm{sgn}(sw)=\mathrm{sgn}(y)\mathrm{sgn}(w)$, so the induction identity for the smaller column proves the first formula in (d). If $sy>y$, set $\varepsilon=\mathrm{sgn}(y)\mathrm{sgn}(w)$; induction gives $\overline{r_{sy,sw}}=\varepsilon r_{sy,sw}$ and $\overline{r_{y,sw}}=-\varepsilon r_{y,sw}$, while $\overline{\alpha}=-\alpha$. Applying bar to (a) therefore gives $\overline{r_{y,w}}=\varepsilon r_{y,w}$. [F2, F5, step 1.1, algebra]

3.1 **Degree, parity, and extreme coefficients.** Induct on $\ell(w)$ for $y\le w$ and write $d=\ell(w)-\ell(y)$. If $sy<y$, then $sy\le sw$: indeed $sy\le w$ by $sy<y\le w$, and the first lifting implication in [F3] applied to $sy$ gives $sy\le sw$. Now (a) identifies $r_{y,w}=r_{sy,sw}$, whose length difference is $d$; induction gives the asserted parity, range of degrees, and both extreme coefficients because $\mathrm{sgn}(sy)\mathrm{sgn}(sw)=\mathrm{sgn}(y)\mathrm{sgn}(w)$. If $sy>y$, the same lifting implication applied to $y\le w$ gives $y\le sw$, so $r_{y,sw}$ has length difference $d-1$. Its product with $\alpha$ has exponents between $-d$ and $d$, all congruent to $d$ modulo $2$; its top term is $v^d$ and its bottom term is $-\mathrm{sgn}(y)\mathrm{sgn}(sw)v^{-d}=\mathrm{sgn}(y)\mathrm{sgn}(w)v^{-d}$. The other term $r_{sy,sw}$ in (a) is zero unless $sy\le sw$ by (b), and when nonzero its length difference is $d-2$, so it has the same parity and lies strictly between those two extreme degrees. This proves (c), including the endpoint $d=0$ through the first case. [F1, F3, F5, step 1.1, step 2.1, algebra]

4.1 **Matrix inversion.** Apply bar to $\overline{H_z}=\sum_y r_{y,z}H_y$ and use bar squared equal to the identity to obtain $H_z=\sum_{x,y}r_{x,y}\overline{r_{y,z}}H_x$. Standard-basis independence gives $\sum_y r_{x,y}\overline{r_{y,z}}=\delta_{x,z}$. Applying coefficient bar to this equality gives $\bar R R=1$ as well as $R\bar R=1$; all sums are finite because $S_n$ is finite. By (b), coefficients outside Bruhat order vanish, including when the interval is empty. The inductions use the identity permutation as their length-zero base, and all arguments are choice-free. [F1, F2, F5, step 1.1, step 2.1, algebra] ∎
