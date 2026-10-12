---
id: ex-parabolic-kl-polynomials-for-s-three-modulo-s-two
kind: example
title: "Parabolic Kazhdan–Lusztig polynomials for S_3 modulo S_2"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 5
deps: [def-parabolic-kazhdan-lusztig-basis-and-polynomials,
       thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones,
       thm-existence-and-uniqueness-of-the-parabolic-kazhdan-lusztig-basis,
       def-parabolic-hecke-module-and-antispherical-standard-basis,
       def-normalized-type-a-hecke-algebra-and-its-bar-involution,
       thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis,
       def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization,
       def-cg-parabolic-quotient-and-two-sided-minima,
       lem-bruhat-order-basic-properties-for-permutations,
       def-bruhat-order-on-the-symmetric-group]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Anders Bjoerner and Francesco Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer 2005 (author-hosted complete 370-page PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 5.1 (printed pp. 134-135) and Section 7.7, Exercise 7(a) (printed p. 163): the Kazhdan-Lusztig polynomials of S_3 are all 1 for comparable pairs; complete passages read."
    - title: "Nicolas Libedinsky and Geordie Williamson, The anti-spherical category (author-hosted complete PDF of the article)"
      url: "https://nicolaslibedinsky.com/wp-content/uploads/2022/01/Antispherical.pdf"
      locator: "Section 2.7 (printed pp. 8-9): the identities n_{y,x}=sum_{z in W_I}(-v)^{l(z)}h_{zy,x} and m_{y,x}=h_{w_0y,w_0x} used for the two tables; complete passage read."
---

## Example

Take $W=S_3$ with simple reflections $s_1,s_2$, let $J=\{s_1\}$, so
$W_J=\{1,s_1\}$ and the minimal left coset representatives are
${}^JW=\{e,\ s_2,\ s_2s_1\}$. In the notation of
[[def-parabolic-kazhdan-lusztig-basis-and-polynomials]] the two parabolic
families are computed from the ordinary Kazhdan--Lusztig coefficients of
$S_3$ (the ordinary coefficients needed below have length gap at most two and
are the monomials $v^{\ell(x)-\ell(y)}$): the **antispherical (sign)**
coefficients are

$$n_{e,e}=1,\quad n_{e,s_2}=v,\quad n_{e,s_2s_1}=0,\quad n_{s_2,s_2}=1,\quad n_{s_2,s_2s_1}=v,\quad n_{s_2s_1,s_2s_1}=1,$$

all other coefficients being zero; the **spherical** coefficients are

$$m_{e,e}=1,\quad m_{e,s_2}=v,\quad m_{e,s_2s_1}=v^{2},\quad m_{s_2,s_2}=1,\quad m_{s_2,s_2s_1}=v,\quad m_{s_2s_1,s_2s_1}=1,$$

all other coefficients being zero. At $v=1$ the antispherical matrix is
$\begin{pmatrix}1&1&0\\0&1&1\\0&0&1\end{pmatrix}$ and the spherical matrix is
$\begin{pmatrix}1&1&1\\0&1&1\\0&0&1\end{pmatrix}$ in the order
$(e,s_2,s_2s_1)$. The two families therefore already differ for this smallest
nontrivial parabolic: $n_{e,s_2s_1}=0$ while $m_{e,s_2s_1}=v^{2}$.

## Facts & Assumptions

**Given:** $W=S_3$ with simple reflections $s_1,s_2$, $J=\{s_1\}$,
$W_J=\{1,s_1\}$, ${}^JW=\{e,s_2,s_2s_1\}$
([[def-cg-parabolic-quotient-and-two-sided-minima]],
[[def-parabolic-hecke-module-and-antispherical-standard-basis]]), and the
coefficients $m_{y,x},n_{y,x}$ of
[[def-parabolic-kazhdan-lusztig-basis-and-polynomials]].

[F1] Ordinary coefficients: $p_{y,w}=0$ unless $y\le w$, $p_{w,w}=1$, and for
$y<w$ one has $p_{y,w}\in v\mathbb Z[v]$ with leading term
$v^{\ell(w)-\ell(y)}$ and $p_{y,w}\in v^{\ell(w)-\ell(y)}\mathbb Z[v^{-2}]$
([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]); for length
gap one or two this forces $p_{y,w}=v^{\ell(w)-\ell(y)}$
([[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]]).

[F2] Bruhat order of $S_3$ in one-line notation: $e<w$ for $w\ne e$; the
chains of length two are $e<s_1<s_1s_2<w_0$ and
$e<s_2<s_2s_1<w_0$, and $s_1<s_1s_2$, $s_1<w_0$, $s_2<s_2s_1$, $s_2<w_0$,
$s_1s_2<w_0$, $s_2s_1<w_0$; $s_1$ and $s_2$ are incomparable and so are
$s_1s_2$ and $s_2s_1$ ([[def-bruhat-order-on-the-symmetric-group]],
[[lem-bruhat-order-basic-properties-for-permutations]]).

[F3] Antispherical alternating sum
$n_{y,x}=\sum_{z\in W_J}(-1)^{\ell(z)}v^{\ell(z)}p_{zy,x}$ with
$\ell(zy)=\ell(z)+\ell(y)$ for $z\in W_J$, $y\in{}^JW$
([[thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones]] (1)).

[F4] Spherical reduction $m_{y,x}=p_{w_0^Jy,w_0^Jx}$ with $w_0^J=s_1$
([[thm-parabolic-kazhdan-lusztig-polynomials-are-alternating-sums-of-ordinary-ones]] (2)).

## Verification

**Proof technique:** direct finite computation in the normalized Hecke algebra of $S_3$, using the two reduction formulas and the ordinary coefficients of [F1].

1.1 **The ordinary values needed.** By [F2] the comparable pairs needed below are $(e,e)$ (gap 0), $(e,s_2)$ (gap 1), $(s_2,s_2)$, $(s_1,s_1)$, $(s_1,s_1s_2)$ (gap 1), $(s_1s_2,s_1s_2)$, $(e,s_2s_1)$ (gap 2), $(s_1,s_2s_1)$ (gap 1), $(s_2,s_2s_1)$ (gap 1), $(s_2s_1,s_2s_1)$, $(s_1,w_0)$ (gap 2), $(s_1s_2,w_0)$ (gap 1), $(s_2,w_0)$ (gap 2), $(w_0,w_0)$; by [F1] the values are $1$ on the diagonal, $v$ on the listed gap-one pairs, $v^{2}$ on the listed gap-two pairs, and zero on non-comparable pairs such as $(s_1,s_2)$, $(s_1s_2,s_2s_1)$, $(s_1s_2,s_2)$, $(s_1,w_0)$'s reverse orders, and all pairs $y>x$. [F1, F2, algebra]

2.1 **Antispherical table.** Using [F3] and step 1.1, $W_J=\{1,s_1\}$ contributes the two terms $z=e$ and $z=s_1$: $n_{e,e}=p_{e,e}=1$, $n_{e,s_2}=p_{e,s_2}-v\,p_{s_1,s_2}=v-0=v$, $n_{e,s_2s_1}=p_{e,s_2s_1}-v\,p_{s_1,s_2s_1}=v^{2}-v^{2}=0$; $n_{s_2,s_2}=p_{s_2,s_2}-v\,p_{s_1s_2,s_2}=1-0=1$ (the second pair is not comparable since $\ell(s_1s_2)>\ell(s_2)$), $n_{s_2,s_2s_1}=p_{s_2,s_2s_1}-v\,p_{s_1s_2,s_2s_1}=v-0=v$ (the pair $s_1s_2,s_2s_1$ is incomparable); $n_{s_2s_1,s_2s_1}=p_{s_2s_1,s_2s_1}-v\,p_{w_0,s_2s_1}=1-0=1$ (the pair $w_0,s_2s_1$ has $y>x$). This is the full antispherical table of the Example, and coefficients with $y\not\le x$ are zero by the support clause of the basis theorem. [F1, F2, F3, step 1.1, algebra]

2.2 **Spherical table.** Using [F4] with $w_0^J=s_1$ and step 1.1: $m_{e,e}=p_{s_1,s_1}=1$, $m_{e,s_2}=p_{s_1,s_1s_2}=v$, $m_{e,s_2s_1}=p_{s_1,w_0}=v^{2}$; $m_{s_2,s_2}=p_{s_1s_2,s_1s_2}=1$, $m_{s_2,s_2s_1}=p_{s_1s_2,w_0}=v$; $m_{s_2s_1,s_2s_1}=p_{w_0,w_0}=1$. This is the full spherical table of the Example. [F1, F4, step 1.1, algebra]

3.1 **Comparison at $v=1$ and conclusion.** Setting $v=1$ in steps 2.1 and 2.2 gives the two displayed integer unitriangular matrices; they differ exactly in the entry $(e,s_2s_1)$, where the antispherical value is $0$ and the spherical value is $1=v^{2}|_{v=1}$. Hence the two normalizations already differ for the smallest nontrivial parabolic, and neither table can be substituted for the other. [step 2.1, step 2.2, algebra] ∎

## Remarks

The ordinary values used have length gap at most two, so they follow from the
degree, parity and support clauses of the ordinary Kazhdan--Lusztig theorem;
the gap-three value $p_{e,w_0}$ is not needed and is not asserted here. The
two tables are the finite inputs of the companion counterexample
`cex-spherical-and-antispherical-normalizations-give-different-polynomials`
and of the small-category examples of this page.
