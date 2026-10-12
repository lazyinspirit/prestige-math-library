---
id: ex-inverting-kl-multiplicities-to-obtain-simple-characters
kind: example
title: "Inverting Kazhdan–Lusztig multiplicities to obtain simple characters"
status: draft
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-the-kazhdan-lusztig-character-formula-in-regular-integral-category-o, ex-the-kl-multiplicity-matrix-for-the-sl-three-principal-block, def-inverse-kazhdan-lusztig-polynomials, thm-kazhdan-lusztig-inversion-formula, def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization, def-grothendieck-group-and-character-of-category-o, prop-the-grothendieck-group-of-o-has-simple-and-standard-bases, cor-bgg-euler-character-identity, thm-weyl-character-formula, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 18
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Anders Bjoerner and Francesco Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer (author-hosted complete 370-page PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 5.1 (printed pp. 134-135): the S_3 Kazhdan-Lusztig polynomials are all 1, so the multiplicity matrix is the zeta matrix; Exercise 7(a) on printed p. 163."
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 8: Hecke algebras and the Kazhdan-Lusztig conjecture (complete 10-page lecture)"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf"
      locator: "Section 1 (printed pp. 2-3): Remarks 1.16-1.18 on the index direction and the value at v=1."
---

## Example

In the principal block $\mathcal O_0$ of $\mathfrak{sl}_3$ of the previous
example, order the labels as $123,213,132,231,312,321$; the inverse of the zeta
matrix $A=P(1)$ is the integer matrix
$$A^{-1}=\begin{pmatrix}1&-1&-1&1&1&-1\\0&1&0&-1&-1&1\\0&0&1&-1&-1&1\\0&0&0&1&0&-1\\0&0&0&0&1&-1\\0&0&0&0&0&1\end{pmatrix},$$
and the character formula gives, with the sum supported on $x\ge w$,
$$\mathrm{ch}\,L(123\cdot0)=\mathrm{ch}\,M(123\cdot0)-\mathrm{ch}\,M(213\cdot0)-\mathrm{ch}\,M(132\cdot0)+\mathrm{ch}\,M(231\cdot0)+\mathrm{ch}\,M(312\cdot0)-\mathrm{ch}\,M(321\cdot0),$$
$$\mathrm{ch}\,L(213\cdot0)=\mathrm{ch}\,M(213\cdot0)-\mathrm{ch}\,M(231\cdot0)-\mathrm{ch}\,M(312\cdot0)+\mathrm{ch}\,M(321\cdot0),$$
$$\mathrm{ch}\,L(132\cdot0)=\mathrm{ch}\,M(132\cdot0)-\mathrm{ch}\,M(231\cdot0)-\mathrm{ch}\,M(312\cdot0)+\mathrm{ch}\,M(321\cdot0),$$
$$\mathrm{ch}\,L(231\cdot0)=\mathrm{ch}\,M(231\cdot0)-\mathrm{ch}\,M(321\cdot0),\quad \mathrm{ch}\,L(312\cdot0)=\mathrm{ch}\,M(312\cdot0)-\mathrm{ch}\,M(321\cdot0),\quad \mathrm{ch}\,L(321\cdot0)=\mathrm{ch}\,M(321\cdot0).$$
In particular the inverse coefficients are signed integers even though all
Kazhdan–Lusztig polynomials are $1$, and for $w=123$ the formula is the BGG
Euler-characteristic expression
$\mathrm{ch}\,L(0)=\sum_{w}(-1)^{\ell(w)}\mathrm{ch}\,M(w\cdot0)$ of the
trivial module.

## Facts & Assumptions

**Given:** The Axiom of Choice (inherited from the character and Euler-character suppliers below), the regular integral principal block $\mathcal O_0$ of $\mathfrak{sl}_3$, the label order $123,213,132,231,312,321$, the multiplicity matrix $A=(P_{y,w}(1))$, and the displayed integer matrix $B$ of the Example.

[F1] The character formula ([[thm-the-kazhdan-lusztig-character-formula-in-regular-integral-category-o]]): in $\mathcal O_0$, $\mathrm{ch}\,L(w\cdot0)=\sum_xq'_{w,x}(1)\,\mathrm{ch}\,M(x\cdot0)$, supported on $x\ge w$, where $q'_{x,w}$ are the inverse Kazhdan–Lusztig coefficients.

[F2] The $\mathfrak{sl}_3$ multiplicity matrix ([[ex-the-kl-multiplicity-matrix-for-the-sl-three-principal-block]]): all comparable-pair Kazhdan–Lusztig polynomials in $S_3$ equal $1$, the matrix $A=P(1)=(P_{y,w}(1))$ is the Bruhat zeta matrix of $S_3$ (rows $y$, columns $w$: $A_{y,w}=1$ exactly when $y\le w$), the Bruhat ranks are $\{123\},\{132,213\},\{231,312\},\{321\}$ with the eight covers $(123,132),(123,213),(132,231),(132,312),(213,231),(213,312),(231,321),(312,321)$, and the nineteen comparable pairs are the transitive closure of these covers.

[F3] Inverse Kazhdan–Lusztig coefficients ([[def-inverse-kazhdan-lusztig-polynomials]], [[thm-kazhdan-lusztig-inversion-formula]]): $Q'=(q'_{x,w})=P^{-1}$ is the two-sided inverse of the Kazhdan–Lusztig coefficient matrix $P=(p_{x,w})$, defined by the finite chain sum, so specializing at $v=1$ gives $Q'(1)=A^{-1}$.

[F4] Classical normalization ([[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]]): $p_{y,w}(1)=P_{y,w}(1)$, so the entries of $P(1)$ are the classical polynomial values, integers here.

[F5] Grothendieck group and characters ([[def-grothendieck-group-and-character-of-category-o]], [[prop-the-grothendieck-group-of-o-has-simple-and-standard-bases]]): the classes of the simples and separately of the Vermas are $\mathbb Z$-bases of the Grothendieck group of the block, and the formal character is an additive map on it.

[F6] The BGG Euler-character identity ([[cor-bgg-euler-character-identity]]): for a dominant integral weight $\lambda$, $[L(\lambda)]=\sum_{w\in W}(-1)^{\ell(w)}[M(w\circ\lambda)]$ in the Grothendieck group of the linkage block.

[F7] The Weyl character formula ([[thm-weyl-character-formula]]): for dominant integral $\lambda$, $\mathrm{ch}\,L(\lambda)=A(\lambda+\rho)\,A(\rho)^{-1}$, so at $\lambda=0$ one gets $\mathrm{ch}\,L(0)=A(\rho)A(\rho)^{-1}=1$, the character of the trivial module.

## Verification

**Proof technique:** direct.

1.1 **The two matrix products.** Write the displayed matrix as $B$. The product $AB$ has entries $(AB)_{y,w}=\sum_{x:\,y\le x}B_{x,w}$, a sum over the interval $[y,\cdot]$; reading rows $x$ of $B$ against the comparability lists of [F2]: for $y=123$ the six rows of $B$ sum to $(1,0,0,0,0,0)$; for $y=213$ the rows with $x\in\{213,231,312,321\}$ sum to $(0,1,0,0,0,0)$; for $y=132$ the rows with $x\in\{132,231,312,321\}$ sum to $(0,0,1,0,0,0)$; for $y=231$ the rows $231,321$ sum to $(0,0,0,1,0,0)$; for $y=312$ the rows $312,321$ sum to $(0,0,0,0,1,0)$; for $y=321$ the last row is $(0,0,0,0,0,1)$. Hence $AB=I$. Since $A$ and $B$ are square matrices over $\mathbb Z$, $B$ is also the left inverse; independently, $(BA)_{y,w}=\sum_{x:\,x\le w}B_{y,x}$ are the partial sums of row $y$ of $B$ over the lower ideals $\{x:x\le w\}$ of [F2], which are $1,0,0,0,0,0$ for row $123$ (the successive sums $1,1-1,1-1-1,1-1-1+1,1-1-1+1+1,1-1-1+1+1-1$), $0,1,0,0,0,0$ for row $213$, $0,0,1,0,0,0$ for row $132$, $0,0,0,1,0,0$ for row $231$, $0,0,0,0,1,0$ for row $312$ and $0,0,0,0,0,1$ for row $321$; hence $BA=I$ as well, and $B=A^{-1}$. [F2, F4, algebra]

2.1 **The inverse coefficients.** By [F3] the matrix of inverse Kazhdan–Lusztig coefficients is $Q'=P^{-1}$, and by [F4] its specialization at $v=1$ is $A^{-1}=B$; hence $q'_{x,w}(1)=B_{x,w}$ for all $x,w$, the entries of $B$ being integers, some negative. Substituting the rows of $B$ into the character formula of [F1], with the support $x\ge w$ of [F2], gives exactly the six displayed identities: row $123$ is $(1,-1,-1,1,1,-1)$, row $213$ and row $132$ are $(0,1,0,-1,-1,1)$ in their nonzero entries, row $231$ is $(1,0,-1)$ on the labels $231,312,321$, row $312$ is $(1,-1)$ on $312,321$, and row $321$ is $1$. [F1, F3, F4, step 1.1]

3.1 **The $w=123$ row and the Euler characteristic.** On the labels ordered by [F2], the first row of $B$ is $q'_{123,x}(1)=(-1)^{\ell(x)}$: the values are $+1$ at $x=123$ (length $0$), $-1$ at $x=213,132$ (length $1$), $+1$ at $x=231,312$ (length $2$) and $-1$ at $x=321$ (length $3$). Hence the row-$123$ identity of step 2.1 is $\mathrm{ch}\,L(0)=\sum_{x}(-1)^{\ell(x)}\mathrm{ch}\,M(x\cdot0)$, the BGG Euler-characteristic expression; by [F6] applied to the dominant integral weight $0$ this is the class of $L(0)$ in the Grothendieck group of the block, and by [F7] $\mathrm{ch}\,L(0)=A(\rho)A(\rho)^{-1}=1$ is the character of the trivial module. This independent check confirms the signed inversion: all Kazhdan–Lusztig polynomials are $1$, yet the inverse coefficients are signed integers. [F2, F5, F6, F7, step 2.1] ∎
