---
id: thm-unequal-parameter-kazhdan-lusztig-basis
kind: theorem
title: Existence and uniqueness of the ordered-group unequal-parameter Kazhdan–Lusztig basis
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps: [def-arbitrary-rank-coxeter-system-and-bruhat-order, def-unequal-parameter-weight-function-and-coefficient-order, def-unequal-parameter-coxeter-hecke-algebra, thm-arbitrary-rank-finite-parabolics-and-bruhat-subword, lem-unequal-parameter-hecke-standard-basis-and-bar-triangularity]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
axiom_use: "None; induction is on natural-number length and each lower Bruhat interval is finite."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "George Lusztig, Hecke Algebras with Unequal Parameters, revised arXiv text (2014)"
      url: "https://arxiv.org/pdf/math/0208154"
      locator: "§5.1–5.2, PDF pp. 27–29: the full construction and uniqueness proof for the bar-invariant triangular basis."
    - title: "Anders Björner and Francesco Brenti, Combinatorics of Coxeter Groups, GTM 231 (2005)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "§§2.1–2.2, printed pp. 27–35: finite Bruhat intervals and the reduced-subword foundation for triangular induction."
---

## Statement

Let $S$ be any set with Coxeter group $W$, let $L:W\to\Gamma$ be any weight function into a totally ordered abelian group, let $A=\mathbb Z[\Gamma]$, and let $H_A(W,L)$ and its bar involution be as above. For each $w\in W$, there is a unique element $C_w\in H_A(W,L)$ such that
$$
\overline{C_w}=C_w,\qquad C_w=T_w+\sum_{y<w}p_{y,w}T_y,\qquad p_{y,w}\in A_{<0}.
$$
The family $\{C_w:w\in W\}$ is an $A$-basis. For a simple generator $s$ the normalization is
$$C_s=\begin{cases}T_s+v^{-L(s)},&L(s)>0,\\T_s,&L(s)=0,\\T_s-v^{L(s)},&L(s)<0.\end{cases}$$

## Facts & Assumptions

**Given:** An arbitrary-rank Coxeter system, a weight function $L$, its ordered group algebra $A$, the Hecke algebra $H_A(W,L)$, and its bar involution.

[F1] [[def-unequal-parameter-weight-function-and-coefficient-order]]: $A=\mathbb Z[\Gamma]$, the bar sends $v^\gamma$ to $v^{-\gamma}$, and $A_{<0}$ is the subgroup spanned by monomials $v^\gamma$ with $\gamma<0$.

[F2] [[lem-unequal-parameter-hecke-standard-basis-and-bar-triangularity]]: $\{T_w\}$ is an $A$-basis, bar is a semilinear involution, and $\overline{T_w}-T_w$ is supported on $T_y$ with $y<w$.

[F3] [[thm-arbitrary-rank-finite-parabolics-and-bruhat-subword]]: every lower Bruhat interval is finite, $y<w$ implies $\ell(y)<\ell(w)$, and the Bruhat order is described by reduced subwords.

## Proof

**Given:** The data in the Statement.

1.1 Fix $w\in W$. By [F3], its strict lower interval $\{y:y<w\}$ is finite and consists only of shorter elements, so construct $C_y$ for those $y$ by induction on length. Their triangular expansions show that the $C_y$ form an $A$-basis of $V_{<w}:=\operatorname{span}_A\{T_y:y<w\}$: the transition matrix is finite, unitriangular, and ordered by length. [F2, F3, induction]

2.1 Set $D_w=\overline{T_w}-T_w$. By [F2], there are unique coefficients $a_y\in A$ with $D_w=\sum_{y<w}a_yC_y$. Since bar is an involution and each $C_y$ is bar invariant by induction, $\overline{D_w}=-D_w$ implies $\sum_{y<w}\overline{a_y}C_y=-\sum_{y<w}a_yC_y$. The basis property in step 1.1 gives $\overline{a_y}=-a_y$ for each $y<w$. [F2, step 1.1, algebra]

3.1 Write $a_y=\sum_{\gamma}n_\gamma v^\gamma$ with finite support. The equality $\overline{a_y}=-a_y$ forces $n_0=0$ and $n_{-\gamma}=-n_\gamma$. Let $p_y=\sum_{\gamma<0}n_\gamma v^\gamma\in A_{<0}$; then $p_y-\overline{p_y}=a_y$. Define $C_w=T_w+\sum_{y<w}p_yC_y$. Applying bar and using $D_w=\sum a_yC_y$ gives $\overline{C_w}=T_w+\sum_{y<w}(a_y+\overline{p_y})C_y=C_w$. Expanding the $C_y$ in the standard basis shows that all coefficients below $T_w$ remain in $A_{<0}$, because a sum of two negative exponents is negative. This constructs a normalized bar-invariant $C_w$. [F1, step 2.1, algebra]

4.1 Suppose $C'_w$ is another element with the stated properties. Then $h=C'_w-C_w=\sum_{y<w}b_yT_y$ is bar invariant with each $b_y\in A_{<0}$. Choose a nonzero $b_y$ with $\ell(y)$ maximal. In $\overline h$, the coefficient of $T_y$ is $\overline{b_y}$: every other term of maximal length has a distinct leading basis vector, while all lower bar terms have strictly smaller length by [F2, F3]. Bar invariance gives $b_y=\overline{b_y}$, but $A_{<0}\cap\overline{A_{<0}}=\{0\}$, a contradiction. Hence $C'_w=C_w$. [F1, F2, F3, step 3.1]

4.2 The family $C_w$ is linearly independent: in any finite relation, choose a term of maximal length; its coefficient at the corresponding $T_w$ is unchanged by the unitriangular expansions and must vanish. It spans by induction on $\ell(w)$, because $T_w=C_w-\sum_{y<w}p_{y,w}T_y$ and all terms on the right other than $C_w$ have smaller length. Thus it is an $A$-basis. [F2, F3, step 3.1, algebra]

5.1 For a simple generator $s$, write $C_s=T_s+p$ with $p\in A_{<0}$. The bar formula in [F2] gives $\overline{T_s}=T_s-v^{L(s)}+v^{-L(s)}$. Bar invariance is therefore equivalent to $p-\overline p=v^{-L(s)}-v^{L(s)}$. Splitting into negative and positive exponents gives $p=v^{-L(s)}$ if $L(s)>0$, $p=0$ if $L(s)=0$, and $p=-v^{L(s)}$ if $L(s)<0$, proving the displayed normalization by uniqueness. [F1, F2, step 3.1] ∎
