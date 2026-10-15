---
id: def-left-right-and-two-sided-kazhdan-lusztig-preorders-and-cells
kind: definition
title: "$L$-, $R$- and two-sided Kazhdan–Lusztig preorders and cells"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [thm-kazhdan-lusztig-basis-multiplication-formula, def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization, thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis, lem-reversal-anti-involution-commutes-with-hecke-bar, def-normalized-type-a-hecke-algebra-and-its-bar-involution]
dependency_level: 7
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Lusztig, Hecke Algebras with Unequal Parameters (revised book version, arXiv:math/0208154v2) — §8.1 defines the left, right, and two-sided relations and cells; §§8.4–8.6 prove descent-set monotonicity. The equal-parameter case is translated to this normalization."
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§8.1, printed p. 36 (relations, cells and inversion); §§8.4–8.6, printed pp. 36–37 (descent sets and the complete ideal/eigenvector argument)."
    - title: "Susumu Ariki, Robinson–Schensted correspondence and left cells, arXiv:math/9910117 (18 pp.) — type-A Robinson–Schensted and Kazhdan–Lusztig cell conventions."
      url: "https://arxiv.org/pdf/math/9910117"
      locator: "§§2.1–2.2, printed pp. 3–7 (including Definition 2.6 and Lemma 2.7); §§3.1–3.4, printed pp. 7–11."
    - title: "Lars Thorge Jensen, p-Kazhdan–Lusztig Theory (Bonn dissertation 2017/18) — Kazhdan–Lusztig cell and star-operation conventions."
      url: "https://d-nb.info/1162953020/34"
      locator: "§§5.0–5.1, pp. 44–56; §5.3, pp. 58–62."
verification:
  audited: "2026-10-08"
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
---

## Definition

Let $n\ge1$, let $C_w:=\underline H_w$ be the Kazhdan–Lusztig basis from [[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]], and let $S=\{s_1,\ldots,s_{n-1}\}$ be the simple reflections of $S_n$. For $x,y\in S_n$, write $x\leftarrow_L y$ if the coefficient of $C_x$ in $C_sC_y$ is nonzero for some $s\in S$, and write $x\leftarrow_R y$ if the coefficient of $C_x$ in $C_yC_s$ is nonzero for some $s\in S$. Define $x\le_L y$ if there is a finite chain $x=w_0,\ldots,w_m=y$ with $w_i\leftarrow_Lw_{i+1}$ for every $i<m$; define $\le_R$ using $\leftarrow_R$, and define $\le_{LR}$ by allowing either kind of step at each place. The length-zero chain makes each relation reflexive. Define $x\sim_Ly$ by $x\le_Ly$ and $y\le_Lx$, and similarly $\sim_R$ and $\sim_{LR}$. Their equivalence classes are the **left cells**, **right cells**, and **two-sided cells**.

For $w\in S_n$, set $L(w):=\{s\in S:sw<w\}$ and $R(w):=\{s\in S:ws<w\}$. The recorded properties are: $\le_L,\le_R,\le_{LR}$ are preorders; $x\le_Ly$ iff $x^{-1}\le_Ry^{-1}$; $x\le_Ly$ implies $R(y)\subseteq R(x)$ and $x\le_Ry$ implies $L(y)\subseteq L(x)$; consequently, elements of one left cell have equal right descent sets and elements of one right cell have equal left descent sets.

The multiplication formula [[thm-kazhdan-lusztig-basis-multiplication-formula]] gives the non-diagonal elementary left steps: if $sw>w$, then $C_{sw}$ occurs with coefficient $1$, and $C_z$ occurs with coefficient $\mu(z,w)$ exactly for the terms $z<w$, $sz<z$, and $\mu(z,w)\ne0$. If $sw<w$, the product is $(v+v^{-1})C_w$, so it gives only a diagonal step. (That diagonal coefficient is nonzero, but it adds no relation beyond the length-zero chain.)

## Facts & Assumptions

**Given:** $n\ge1$, the normalized Hecke algebra $H_v(n)$ over $A=\mathbb Z[v^{\pm1}]$, and its Kazhdan–Lusztig basis.

[F1] The elements $C_w$ form an $A$-basis, and in $C_w=\sum_zp_{z,w}H_z$ the inverse-index symmetry $p_{z^{-1},w^{-1}}=p_{z,w}$ holds ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]). The theorem's separate coefficientwise-nonnegativity clause is not used here.

[F2] Left and right multiplication by a simple generator satisfy the ascent and descent formulas in [[thm-kazhdan-lusztig-basis-multiplication-formula]]. In particular, with $\lambda:=v+v^{-1}$, the descent products are $C_sC_w=\lambda C_w$ when $sw<w$ and $C_wC_s=\lambda C_w$ when $ws<w$.

[F3] The scalar $\lambda$ is nonzero in the integral domain $A$; the algebra, its coefficient ring, and its generators are as in [[def-normalized-type-a-hecke-algebra-and-its-bar-involution]].

[F4] There is an $A$-linear anti-automorphism $\flat$ with $\flat(H_w)=H_{w^{-1}}$ ([[lem-reversal-anti-involution-commutes-with-hecke-bar]]).

[F5] The coefficient $\mu(z,w)$ in the multiplication formula is the coefficient specified in [[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]].

## Proof

**Proof technique:** use finite chains of basis-coefficient steps, reversal for inversion, and the generator eigenvalue equations for descent sets.

1.1 **Preorders and cell equivalence.** A length-zero chain gives reflexivity of each relation. Concatenating a chain from $x$ to $y$ with one from $y$ to $z$ gives a chain from $x$ to $z$, proving transitivity for $\le_L$, $\le_R$, and $\le_{LR}$. Hence each is a preorder, and the relation defined by mutual comparability is reflexive, symmetric, and transitive, so the three stated cell relations are equivalence relations. [algebra]

1.2 **Reversal identifies left and right steps.** Since $\flat$ is $A$-linear and sends $H_z$ to $H_{z^{-1}}$, the expansion of $\flat(C_w)$ is $\sum_zp_{z,w}H_{z^{-1}}=C_{w^{-1}}$ by [F1]. For every simple $s=s^{-1}$, applying $\flat$ to $C_sC_y=\sum_xa_xC_x$ gives $C_{y^{-1}}C_s=\sum_xa_xC_{x^{-1}}$. Thus the coefficient of $C_x$ in $C_sC_y$ is nonzero exactly when the coefficient of $C_{x^{-1}}$ in $C_{y^{-1}}C_s$ is nonzero. Applying inversion term-by-term to finite chains in both directions proves $x\le_Ly\iff x^{-1}\le_Ry^{-1}$. [F1, F4, algebra]

1.3 **Right descents decrease along left steps.** Fix an elementary left step $x\leftarrow_Ly$, witnessed by $u=C_sC_y=\sum_z a_zC_z$ with $a_x\ne0$. Let $t\in R(y)$, so $C_yC_t=\lambda C_y$ by [F2]. Associativity gives $uC_t=\lambda u$. If $xt>x$, the coefficient of $C_x$ in $uC_t$ is zero: a descent row $C_zC_t$ contributes only its own diagonal basis term; an ascent row contributes its leading term $C_{zt}$, which can equal $C_x$ only if $z=xt$ and then $zt=x<z$, contrary to ascent, while each lower correction term has a $t$-descent index. The coefficient of $C_x$ in $\lambda u$ is $\lambda a_x$, so $\lambda a_x=0$, contradicting [F3] and $a_x\ne0$. Therefore $xt<x$ for every $t\in R(y)$, or $R(y)\subseteq R(x)$. [F1, F2, F3, algebra]

1.4 **Left descents decrease along right steps.** For an elementary right step $x\leftarrow_Ry$, write $u=C_yC_s=\sum_z a_zC_z$ with $a_x\ne0$. If $t\in L(y)$, then $C_tC_y=\lambda C_y$, so associativity gives $C_tu=\lambda u$. When $tx>x$, the coefficient of $C_x$ in $C_tu$ is zero by the left multiplication formulas: an ascent row's leading term could equal $C_x$ only from the index $tx$, whose left product by $t$ is a descent, and every lower correction has a $t$-descent index; a descent row contributes only its diagonal term at its own index. Comparing with the coefficient $\lambda a_x$ in $\lambda u$ and using [F3] forces $tx<x$. Thus $L(y)\subseteq L(x)$. Applying these inclusions along finite chains gives the two recorded descent-set containments. [F1, F2, F3, algebra]

2.1 **Descent sets are constant on cells.** If $x\sim_Ly$, then $R(y)\subseteq R(x)$ and $R(x)\subseteq R(y)$ by step 1.3 applied in both directions; hence $R(x)=R(y)$. If $x\sim_Ry$, step 1.4 in both directions gives $L(x)=L(y)$. [step 1.3, step 1.4]

3.1 **The elementary left-step list.** If $sw>w$, the left multiplication formula is $C_sC_w=C_{sw}+\sum_{z<w,\ sz<z}\mu(z,w)C_z$, with terms of zero coefficient omitted, so its non-diagonal steps are exactly the Bruhat and $\mu$ steps stated in the Definition. If $sw<w$, the formula is $C_sC_w=\lambda C_w$; this supplies only the diagonal step already covered by reflexivity. Since $\lambda\ne0$, the statement's note about the diagonal coefficient is exact. [F2, F5] ∎

## Remarks

The proof uses the locally proved basis, inverse-index symmetry and generator multiplication clauses. Coefficientwise positivity is not required.

The finite-chain and coefficient arguments use no choice principle.
