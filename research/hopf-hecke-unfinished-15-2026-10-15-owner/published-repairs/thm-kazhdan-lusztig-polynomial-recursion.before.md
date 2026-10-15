---
id: thm-kazhdan-lusztig-polynomial-recursion
kind: theorem
title: The Kazhdan–Lusztig polynomial descent recursion
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [thm-kazhdan-lusztig-basis-multiplication-formula, def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization, thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis, def-normalized-type-a-hecke-algebra-and-its-bar-involution, lem-bruhat-order-basic-properties-for-permutations]
dependency_level: 7
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Susumu Ariki, Robinson–Schensted correspondence and left cells, arXiv:math/9910117 — §2.2, Definition 2.4: the classical Kazhdan–Lusztig polynomial descent recursion and its μ-correction term."
      url: "https://arxiv.org/pdf/math/9910117"
      locator: "§2.2, Definition 2.4, printed p. 5 / PDF p. 5: the complete descent formula, including the definition of c and the sum over lower Bruhat elements, was read in full."
    - title: "G. Lusztig, Hecke Algebras with Unequal Parameters, revised version arXiv:math/0208154v2 — §§6.1–6.7: equal-parameter Kazhdan–Lusztig basis multiplication and coefficient symmetry, translated to v_L=v^{-1}."
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§§6.1–6.7, printed pp. 30–31; the multiplication formulas and inverse-index coefficient symmetry were read in full."
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Facts & Assumptions

**Given:** $n\ge1$, a simple reflection $s=s_i$, a left descent $sw<w$, and the polynomial normalization $q=v^{-2}$.

[F1] $A=\mathbb Z[v^{\pm1}]$, the standard elements $H_x$ form a basis and are products along reduced expressions, and $H_s^2=1+(v^{-1}-v)H_s$ ([[def-normalized-type-a-hecke-algebra-and-its-bar-involution]]).

[F2] The Kazhdan–Lusztig basis and its generator multiplication formula are as stated in [[thm-kazhdan-lusztig-basis-multiplication-formula]].

[F3] $p_{x,z}=v^{\ell(z)-\ell(x)}P_{x,z}(v^{-2})$ when $x\le z$, and $\mu(x,z)$ is the coefficient of $v$ in $p_{x,z}$; it is zero unless $\ell(z)-\ell(x)$ is odd ([[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]]).

[F4] Writing $\underline H_t=\sum_{x\le t}p_{x,t}H_x$, the basis coefficients vanish outside Bruhat order and satisfy $p_{y^{-1},w^{-1}}=p_{y,w}$ ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]).

[F5] Bruhat order is graded by $\ell$, simple reflections change length by one, inversion preserves Bruhat order and length, and Bruhat comparison is characterized by reduced subwords; in particular $[\mathrm{id},s]=\{\mathrm{id},s\}$ for a simple reflection ([[lem-bruhat-order-basic-properties-for-permutations]]).

## Statement

Let $s=s_i$ be a simple reflection, $w\in S_n$ with $sw<w$, and $y\le w$. With $P_{x,z}:=0$ whenever $x\not\le z$, $$P_{y,w}(q)=q^{1-c}P_{sy,sw}(q)+q^{c}P_{y,sw}(q)-\!\!\!\sum_{\substack{y\le z\le sw\\ sz<z,\ \mu(z,sw)\ne0}}\!\!\!\mu(z,sw)\,q^{(\ell(w)-\ell(z))/2}P_{y,z}(q),$$ where $c=1$ if $sy<y$ and $c=0$ if $sy>y$; here $\mu$ is the coefficient defined in [[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]] (so the summand only occurs for $\ell(sw)-\ell(z)$ odd, and $(\ell(w)-\ell(z))/2$ is then an integer). The same recursion holds with $s\in R(w)$ (right descents) after replacing each index $x$ by $x^{-1}$, using $P_{y^{-1},w^{-1}}=P_{y,w}$ and $\mu(y^{-1},w^{-1})=\mu(y,w)$.

## Proof

**Proof technique:** compare the standard-basis coefficients in the left generator multiplication formula.

1.1 **The coefficient equation.** Since $sw<w$, we have $s(sw)=w>sw$. By [F2], $$\underline H_s\underline H_{sw}=\underline H_w+\sum_{\substack{z\le sw\\ sz<z}}\mu(z,sw)\underline H_z.$$ By [F4], $\underline H_s$ is supported on $\{x:x\le s\}$, and [F5]'s reduced-subword characterization gives $[\mathrm{id},s]=\{\mathrm{id},s\}$. The constant-term and degree clauses in [F3] give $P_{\mathrm{id},s}=1$ and $p_{\mathrm{id},s}=v$, so $\underline H_s=H_s+vH_{\mathrm{id}}$. Expand each $\underline H_t=\sum_{x\le t}p_{x,t}H_x$ using [F4]. Reduced words and the quadratic relation in [F1] give $H_sH_x=H_{sx}$ if $sx>x$; if $sx<x$, then $x=s(sx)$ is reduced and $H_sH_x=H_s^2H_{sx}=H_{sx}+(v^{-1}-v)H_x$. Thus the coefficient of $H_y$ on the left is $p_{sy,sw}+v^{-1}p_{y,sw}$ when $sy<y$, and $p_{sy,sw}+vp_{y,sw}$ when $sy>y$. The coefficient on the right is $p_{y,w}+\sum_{y\le z\le sw,\,sz<z}\mu(z,sw)p_{y,z}$. Therefore $$p_{y,w}=\begin{cases}p_{sy,sw}+v^{-1}p_{y,sw},&sy<y,\\p_{sy,sw}+vp_{y,sw},&sy>y,\end{cases}-\sum_{\substack{y\le z\le sw\\sz<z}}\mu(z,sw)p_{y,z}.$$ [F1, F2, F3, F4, F5, algebra]

2.1 **Convert to $q$-polynomials.** Put $d:=\ell(w)-\ell(y)$. By [F5], $d\ge0$. If $sy<y$, then $\ell(sw)-\ell(sy)=d$ and $\ell(sw)-\ell(y)=d-1$; after substituting $p_{x,z}=v^{\ell(z)-\ell(x)}P_{x,z}(v^{-2})$ in step 1.1 and dividing by $v^d$, the first two terms become $P_{sy,sw}(q)+qP_{y,sw}(q)$. If $sy>y$, then $\ell(sw)-\ell(sy)=d-2$, so they become $qP_{sy,sw}(q)+P_{y,sw}(q)$. These identities also hold when an index is outside the relevant Bruhat interval, using the zero convention for $P$. For a sum term, $\ell(z)-\ell(y)-d=-(\ell(w)-\ell(z))$, giving the factor $q^{(\ell(w)-\ell(z))/2}$. Thus the two cases are the displayed formula with $c=1$ and $c=0$, respectively. If $\mu(z,sw)\ne0$, then $\ell(sw)-\ell(z)$ is odd; since $\ell(w)=\ell(sw)+1$ by [F5], the exponent $(\ell(w)-\ell(z))/2$ is an integer. [F3, F5, step 1.1, algebra]

3.1 **Right descents.** If $ws<w$, inversion preserves Bruhat order by [F5], so $sw^{-1}<w^{-1}$ and $y^{-1}\le w^{-1}$. Apply the left formula to $y^{-1},w^{-1},s$. Replace every inverted index using [F4]; lengths and length differences are unchanged by [F5], while $sz<z$ becomes $zs<z$. This gives the right-descent recursion. [F4, F5, step 2.1, algebra] ∎

## Remarks

The coefficient comparison uses the locally proved multiplication formula, normalization and inverse-index symmetry. Coefficientwise positivity is not required.