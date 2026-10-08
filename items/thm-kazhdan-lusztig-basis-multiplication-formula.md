---
id: thm-kazhdan-lusztig-basis-multiplication-formula
kind: theorem
title: Multiplication by a generator in the Kazhdan–Lusztig basis
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps: [def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization, thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis, def-normalized-type-a-hecke-algebra-and-its-bar-involution, lem-bruhat-order-basic-properties-for-permutations, lem-reversal-anti-involution-commutes-with-hecke-bar]
dependency_level: 6
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "G. Lusztig, Hecke Algebras with Unequal Parameters, revised version arXiv:math/0208154v2 — §§6.3–6.7: the equal-parameter generator formulas; Corollary 6.5 identifies μ^s as the coefficient of v_L^{-1}, which becomes this page's coefficient of v under v_L=v^{-1}; Theorem 6.6 gives the left formula."
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§6.1–6.7, printed pp. 30–31; the complete argument for Proposition 6.3, Corollary 6.5, Theorem 6.6 and Corollary 6.7 was read."
    - title: "Ben Elias and Geordie Williamson, The Hodge theory of Soergel bimodules, arXiv:1212.0791 — §3.2, printed pp. 15–16: the normalized Hecke algebra and Kazhdan–Lusztig basis."
      url: "https://arxiv.org/pdf/1212.0791"
      locator: "§3.2, printed pp. 15–16; complete section read."
verification:
  precheck: pass
---

## Facts & Assumptions

**Given:** $n\ge1$, a simple reflection $s=s_i$, the normalized Hecke algebra, and its Kazhdan–Lusztig basis.

[F1] The elements $H_x$ form a standard basis and satisfy $H_s^2=1+(v^{-1}-v)H_s$ ([[def-normalized-type-a-hecke-algebra-and-its-bar-involution]]).

[F2] The basis elements $\underline H_w=\sum_{x\le w}p_{x,w}H_x$ are bar-invariant, have $p_{w,w}=1$, $p_{x,w}=0$ unless $x\le w$, $p_{x,w}\in v\mathbb Z[v]$ for $x<w$, and $p_{x^{-1},w^{-1}}=p_{x,w}$ ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]).

[F3] Under the classical polynomial normalization, $p_{x,w}=v^{\ell(w)-\ell(x)}P_{x,w}(v^{-2})$ for $x\le w$, and $\mu(x,w)$ is the coefficient of $v$ in $p_{x,w}$, set to $0$ when the length difference is even. For a Bruhat cover $x<w$, this gives $p_{x,w}=v$ ([[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]]).

[F4] Bruhat order has the reduced-subword characterization and left lifting properties, and is preserved by inversion ([[lem-bruhat-order-basic-properties-for-permutations]]).

[F5] The reversal anti-automorphism $\flat$ fixes $H_s$, sends $H_w$ to $H_{w^{-1}}$, and reverses products ([[lem-reversal-anti-involution-commutes-with-hecke-bar]]).

## Statement

Let $s=s_i$ be a simple reflection and $w\in S_n$. In the Kazhdan–Lusztig basis $\{\underline H_w\}$ of [[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]: $$\underline H_s\,\underline H_w=\begin{cases}(v+v^{-1})\,\underline H_w,&sw<w,\\[2pt] \underline H_{sw}+\displaystyle\sum_{\substack{z\in S_n\\ sz<z<w}}\mu(z,w)\,\underline H_z,&sw>w,\end{cases}$$ and symmetrically $\underline H_w\underline H_s=(v+v^{-1})\underline H_w$ if $ws<w$, $\underline H_w\underline H_s=\underline H_{ws}+\sum_{zs<z<w}\mu(z,w)\underline H_z$ if $ws>w$. Here $\mu(z,w)$ is the coefficient of $v$ in $p_{z,w}$ ([[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]]), which can be nonzero only when $\ell(w)-\ell(z)$ is odd; the sums are finite since $S_n$ is finite. In particular $\underline H_s\underline H_s=(v+v^{-1})\underline H_s$, and $\underline H_s\underline H_w=\underline H_{sw}$ when $sw>w$ and $\ell(w)\le1$. The span conclusion is for the ascent case $sw>w$: there, $\underline H_s\underline H_w$ lies in the span of $\underline H_{sw}$ and of the $\underline H_z$ with $z<w$ and $sz<z$.

## Proof

**Proof technique:** use induction on $\ell(w)$ and the uniqueness of the bar-invariant triangular basis element.

1.1 **The left-ascent difference.** Put $A_s:=\underline H_s=H_s+vH_{\mathrm{id}}$ by [F2, F3]. We prove the formulas by induction on $\ell(w)$, assuming the descent formula for all smaller upper indices. If $sx>x$, reduced concatenation gives $H_sH_x=H_{sx}$; if $sx<x$, write $x=s(sx)$ and use the quadratic relation to get $H_sH_x=H_{sx}+(v^{-1}-v)H_x$. Suppose $sw>w$ and set $C_w:=\underline H_{sw}+\sum_{z:sz<z<w}\mu(z,w)\underline H_z$. For any $x\le w$, fix a reduced expression for $w$ and a reduced subword for $x$. Since $sw>w$, prefixing $s$ gives a reduced expression for $sw$; when $sx>x$, prefixing $s$ to the subword gives a reduced subword for $sx$, and when $sx<x$, $sx<x\le w<sw$. Thus every standard-basis term of $A_s\underline H_w$ is indexed by an element $\le sw$. The same holds for $C_w$, since $w<sw$ and every $z<w$ satisfies $z<sw$. Only the leading term $H_w$ can produce $H_{sw}$ in $A_s\underline H_w$, with coefficient $1$: for $x<w$, the terms from $H_sH_x$ have length at most $\ell(x)+1\le\ell(w)<\ell(sw)$. The leading term of $\underline H_{sw}$ gives coefficient $1$ in $C_w$. Thus $D_w:=A_s\underline H_w-C_w$ is supported strictly below $sw$. Using [F1], its coefficient at $H_y$ is $$f_y=p_{sy,w}+\begin{cases}v^{-1}p_{y,w},&sy<y,\\ vp_{y,w},&sy>y,\end{cases}-p_{y,sw}-\sum_{\substack{y\le z<w\\ sz<z}}\mu(z,w)p_{y,z},$$ with $p_{a,b}=0$ when $a\not\le b$. [F1, F2, F3, F4, algebra]

2.1 **Coefficients with $sy<y$.** Let $y<sw$ and $sy<y$. The terms $p_{sy,w}$ and $p_{y,sw}$ are each either $0$ or in $v\mathbb Z[v]$, except when $sy=w$; that exception forces $y=sw$ and is excluded. If $y\le w$, then in fact $y<w$, since $y=w$ would give $sy=sw>w=y$, contrary to $sy<y$. The sum defining $f_y$ then contains its $z=y$ term $\mu(y,w)$, since $p_{y,y}=1$. By definition of $\mu$, $v^{-1}p_{y,w}-\mu(y,w)\in v\mathbb Z[v]$; every remaining sum term has $z>y$ and $p_{y,z}\in v\mathbb Z[v]$. If $y\not\le w$, then $p_{y,w}=0$, $\mu(y,w)=0$, and the sum is empty. Thus $f_y\in v\mathbb Z[v]$ in both cases. [F2, F3, step 1.1, algebra]

3.1 **Coefficients with $sy>y$.** For $y=w$, the coefficient is $f_w=v-p_{w,sw}=0$: the simple ascent makes $w<sw$ a Bruhat cover, so the degree bound and constant term of $P_{w,sw}$ give $p_{w,sw}=v$. Suppose $y<sw$ and $y\ne w$. If $y\not\le w$, then $sy\not\le w$ (otherwise $y<sy\le w$), so $p_{sy,w}=p_{y,w}=0$ and the sum is empty; the remaining $p_{y,sw}$ is either zero or in $v\mathbb Z[v]$. Now assume $y\le w$. Fix a reduced expression for $w$ and a reduced subword for $y$. Since $sw>w$ and $sy>y$, prefixing $s$ gives a reduced expression for $sw$ and a reduced subword for $sy$, so $sy\le sw$; because $y\ne w$, $sy<sw$. For each $z<w$ with $sz<z$, induction gives $\underline H_s\underline H_z=(v+v^{-1})\underline H_z$, or $(H_s-v^{-1})\underline H_z=0$. Comparing the coefficient of $H_y$ gives $p_{y,z}=v p_{sy,z}$. For every such $z$ with $y\le z$, the left-lifting clause in [F4] gives $sy\le z$; conversely $sy\le z$ implies $y<sy\le z$. Thus the sum in $f_y$ becomes $v\sum_{sy\le z<w,\,sz<z}\mu(z,w)p_{sy,z}$, and $f_y=vf_{sy}+vp_{sy,sw}-p_{y,sw}$. Since $s(sy)=y<sy<sw$, Step 2.1 gives $f_{sy}\in v\mathbb Z[v]$; the other two coefficients are also in $v\mathbb Z[v]$. Therefore $f_y\in v\mathbb Z[v]$. [F1, F2, F3, F4, step 1.1, step 2.1, algebra]

4.1 **Conclude the left-ascent formula.** Both $A_s\underline H_w$ and $C_w$ are bar-invariant, since the $\mu$ coefficients are integers by [F3]. Thus $D_w$ is bar-invariant. By steps 1.1–3.1 it is a sum of lower standard basis elements with coefficients in $v\mathbb Z[v]$. Adding $D_w$ to $\underline H_{sw}$ would give another bar-invariant element in $H_{sw}+\sum_{y<sw}v\mathbb Z[v]H_y$; uniqueness in [F2] forces $D_w=0$. This proves the formula when $sw>w$. [F2, F3, step 1.1, step 2.1, step 3.1, algebra]

5.1 **Left descents.** Suppose $sw<w$ and put $w':=sw$. The ascent case for $w'$ gives $\underline H_s\underline H_{w'}=\underline H_w+\sum_{z:sz<z<w'}\mu(z,w')\underline H_z$. The quadratic relation gives $(H_s-v^{-1})\underline H_s=0$. Apply $H_s-v^{-1}$ to this equality. Every $z$ in the sum has $z<w'<w$, so induction gives $(H_s-v^{-1})\underline H_z=0$. Thus $(H_s-v^{-1})\underline H_w=0$, and $\underline H_s\underline H_w=(H_s+v)\underline H_w=(v+v^{-1})\underline H_w$. This also covers $\underline H_s^2$; the ascent sum is empty for $w=\mathrm{id}$ and for the stated length-at-most-one case. [F1, F2, F3, step 4.1, algebra]

6.1 **Right multiplication.** Apply the left formulas to $w^{-1}$ and then apply $\flat$. By [F5] it reverses the product and fixes $\underline H_s$; by inverse-index symmetry in [F2], it sends $\underline H_{w^{-1}}$ to $\underline H_w$. Bruhat inversion sends $sz<z<w^{-1}$ to $zs^{-1}<z^{-1}<w$, and $s^{-1}=s$; the coefficient is unchanged because $p_{z^{-1},w^{-1}}=p_{z,w}$ and $\mu$ is the coefficient of $v$ in that coefficient. This yields the asserted right formulas. The proof uses only finite Bruhat intervals and no choice principle. [F2, F3, F4, F5, step 4.1, step 5.1, algebra] ∎

## Remarks

The argument uses the locally proved triangular basis and degree clauses of [[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]], and the coefficient-of-$v$ definition of $\mu$. Coefficientwise positivity is not required.