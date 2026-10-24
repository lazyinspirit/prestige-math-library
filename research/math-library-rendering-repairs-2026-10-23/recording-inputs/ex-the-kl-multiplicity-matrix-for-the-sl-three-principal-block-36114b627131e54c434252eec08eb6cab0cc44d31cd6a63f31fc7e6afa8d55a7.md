---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/ex-the-kl-multiplicity-matrix-for-the-sl-three-principal-block.json
  precheck: pass
id: ex-the-kl-multiplicity-matrix-for-the-sl-three-principal-block
kind: example
title: 'The Kazhdan–Lusztig multiplicity matrix for the $\mathfrak{sl}_3$ principal block'
status: published
origin: pipeline
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values, def-regular-integral-dot-orbit-labelling-convention, thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis, def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization, def-normalized-type-a-hecke-algebra-and-its-bar-involution, lem-the-hecke-bar-involution-is-well-defined, lem-bruhat-order-basic-properties-for-permutations, def-verma-module, thm-bgg-reciprocity, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 17
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Anders Bjoerner and Francesco Brenti, Combinatorics of Coxeter Groups, Graduate Texts in Mathematics 231, Springer (author-hosted complete 370-page PDF)"
      url: "https://sites.math.washington.edu/~billey/classes/reflection.groups/references/EntireBook.pdf"
      locator: "Section 5.1 (printed pp. 134-135): Theorem 5.1.4, Proposition 5.1.5 and the computation showing P_{u,321}(q)=1 for u != 123 and P_{123,321}(q)=1, so all Kazhdan-Lusztig polynomials of S_3 equal 1; Exercise 7(a) on printed p. 163 (gaps of length at most two give P=1)."
    - title: "Lin Chen, lecture notes (Spring 2024), Lecture 8: Hecke algebras and the Kazhdan-Lusztig conjecture (complete 10-page lecture)"
      url: "https://windshower.github.io/linchen/teaching/s2024/lecture8.pdf"
      locator: "Example 1.13 and Remark 1.14 (printed pp. 2-3): the rank-one computation b_s=delta_s+v and the pointer to the sl_3 Kazhdan-Lusztig polynomials; complete passage read."
---

## Example

Take $\mathfrak g=\mathfrak{sl}_3$ (type $A_2$, $W=S_3$) and the principal block,
i.e. the regular integral block $\mathcal O_0$ of the weight $\lambda=0$
($0+\rho=\rho$ is regular). In one-line notation the labels
$w\in\{123,213,132,231,312,321\}$ index the weights
$w\cdot0=0,-\alpha_1,-\alpha_2,-2\alpha_1-\alpha_2,-\alpha_1-2\alpha_2,-2\rho$.
All nineteen Kazhdan–Lusztig polynomials of comparable pairs in $S_3$ equal
$1$ (there are nineteen pairs $y\le w$ in the Bruhat order on $S_3$), so
$$[M(y\cdot0):L(w\cdot0)]=P_{y,w}(1)=1\ \text{ if } y\le w,\qquad 0\ \text{ otherwise}:$$
the multiplicity matrix is the Bruhat zeta matrix of $S_3$ (with rows $y$,
columns $w$), e.g. $[M(0):L(w\cdot0)]=1$ for all six $w$,
$[M(321\cdot0):L(w\cdot0)]=0$ unless $w=321$, and $M(213\cdot0)$ has the four
composition factors $L(213\cdot0),L(231\cdot0),L(312\cdot0),L(321\cdot0)$, each
once. By BGG reciprocity the Verma-flag matrix
$(P(w\cdot0):\Delta(y\cdot0))$ is the same zeta matrix, e.g.
$(P(123\cdot0):\Delta(y\cdot0))=0$ for $y\ne123$ and
$(P(321\cdot0):\Delta(y\cdot0))=1$ for all $y$.

## Facts & Assumptions

**Given:** The Axiom of Choice (inherited from the multiplicity and BGG suppliers below), the one-based group $S_3$ with its Bruhat order, the normalized Hecke algebra $H_v(3)$ with $\alpha:=v-v^{-1}$, and $\mathfrak{sl}_3$ with the dominant regular integral weight $0$ and its principal block $\mathcal O_0$.

[F1] Hecke algebra and bar ([[def-normalized-type-a-hecke-algebra-and-its-bar-involution]], [[lem-the-hecke-bar-involution-is-well-defined]]): $H_{s_i}^2=1-\alpha H_{s_i}$ with $\alpha=v-v^{-1}$; the bar is the semilinear multiplicative involution with $\overline{H_{s_i}}=H_{s_i}+\alpha$; $H_wH_{s_i}=H_{ws_i}$ when $\ell(ws_i)=\ell(w)+1$; the $\{H_w\}$ form an $A$-basis.

[F2] Existence and uniqueness of the Kazhdan–Lusztig basis ([[thm-existence-and-uniqueness-of-the-kazhdan-lusztig-basis]]): $\underline H_w$ is the unique bar-fixed element of $H_w+\sum_{y<w}v\mathbb Z[v]H_y$, these elements form a basis, and $\underline H_w=\sum_{y\le w}p_{y,w}H_y$ with $p_{y,w}=0$ unless $y\le w$ and $p_{w,w}=1$.

[F3] Classical normalization ([[def-kazhdan-lusztig-polynomials-in-the-classical-q-normalization]]): $p_{y,w}=v^{\ell(w)-\ell(y)}P_{y,w}(v^{-2})$ with $q=v^{-2}$, and $P_{y,w}=0$ unless $y\le w$, $P_{w,w}=1$.

[F4] Bruhat order of $S_3$ ([[lem-bruhat-order-basic-properties-for-permutations]]): the reduced-subword criterion, graded by inversion length, ranks $\{123\},\{132,213\},\{231,312\},\{321\}$ with the eight covers $(123,132)$, $(123,213)$, $(132,231)$, $(132,312)$, $(213,231)$, $(213,312)$, $(231,321)$, $(312,321)$.

[F5] The composition-multiplicity theorem ([[thm-simple-verma-composition-multiplicities-are-kazhdan-lusztig-values]]): in the regular integral block $\mathcal O_0$, $[M(y\cdot0):L(w\cdot0)]=P_{y,w}(1)$, vanishing unless $y\le w$.

[F6] BGG reciprocity ([[thm-bgg-reciprocity]]): $(P(\mu):\Delta(\nu))=[M(\nu):L(\mu)]$ for all weights, with $\Delta(\nu)=M(\nu)$ the Verma module of [[def-verma-module]].

[F7] Block conventions ([[def-regular-integral-dot-orbit-labelling-convention]]): for the dominant regular integral weight $\lambda=0$ of $\mathfrak{sl}_3$ the standards are $\Delta(w\cdot0)=M(w\cdot0)$, the simples $L(w\cdot0)$, the projectives $P(w\cdot0)$, the dot action is $w\cdot0=w(\rho)-\rho$, and the multiplicity notations are those of [F5] and [F6].

## Verification

**Proof technique:** direct.

1.1 **The dot orbit.** With $\rho=\alpha_1+\alpha_2$ for the root system $A_2$, the dot action $w\cdot0=w(\rho)-\rho$ computes: $123\cdot0=0$; $213\cdot0=s_1(\rho)-\rho=-\alpha_1$; $132\cdot0=s_2(\rho)-\rho=-\alpha_2$; $231\cdot0=(s_1s_2)\cdot0=s_1\cdot(-\alpha_2)=s_1(\rho-\alpha_2)-\rho=-2\alpha_1-\alpha_2$; $312\cdot0=(s_2s_1)\cdot0=-\alpha_1-2\alpha_2$; $321\cdot0=w_0(\rho)-\rho=-2\rho$. The positive-root pairings of $\rho$ are $1,1,2$, and the negative-root pairings are their negatives; Weyl conjugation permutes these nonzero integral pairings, so all six weights are dot-regular and integral, so $\mathcal O_0$ is a regular integral block with the six labelled standards, simples and projectives. [F7, algebra]

1.2 **The Kazhdan–Lusztig basis of $H_v(3)$.** Put $X=H_{213}$, $Y=H_{132}$ and $A:=X+v$, $B:=Y+v$; by [F1] both $A$ and $B$ are bar-fixed, because $\overline{X+v}=(X+\alpha)+v^{-1}=X+v$ and likewise for $Y$. The reduced words give $H_{231}=XY$, $H_{312}=YX$ and $H_{321}=YXY$ in the one-based model, so $AB=H_{231}+v(H_{213}+H_{132})+v^2H_{123}$ and $BA=H_{312}+v(H_{132}+H_{213})+v^2H_{123}$. For the length-three element, expanding $(Y+v)(X+v)(Y+v)$ and replacing $Y^2$ by $1-\alpha Y$ gives $BAB=H_{321}+v(H_{231}+H_{312})+(1+v^2)H_{132}+v^2H_{213}+(v+v^3)H_{123}$, hence $BAB-B=H_{321}+v(H_{231}+H_{312})+v^2(H_{132}+H_{213})+v^3H_{123}$. Each of the six elements $H_{123}$, $A$, $B$, $AB$, $BA$, $BAB-B$ is bar-fixed and lies in its top standard basis element plus a $v\mathbb Z[v]$-span of strictly lower Bruhat elements (the lower indices are strictly lower by the rank description of [F4]); by the uniqueness in [F2] they are exactly $\underline H_{123},\underline H_{213},\underline H_{132},\underline H_{231},\underline H_{312},\underline H_{321}$. [F1, F2, F4, algebra]

2.1 **All polynomials equal $1$, and the count.** Reading the six expansions of step 1.2 against $\underline H_w=\sum_{y\le w}p_{y,w}H_y$ gives $p_{y,w}=v^{\ell(w)-\ell(y)}$ whenever $y\le w$: the coefficients are $1$ on the diagonal, $v$ at gap one, $v^2$ at gap two and $v^3$ at the longest pair. Hence [F3] gives $P_{y,w}(q)=1$ for every one of the comparable pairs. By the rank description [F4] the comparable pairs are: the six diagonal pairs; for $y=123$ the five strict pairs; for each of $y=213,132$ the three strict pairs (the two rank-two elements and $321$); and for each of $y=231,312$ the pair with $321$; altogether $6+5+3+3+1+1=19$ pairs, and every one has $P_{y,w}=1$. [F3, F4, step 1.2, algebra]

3.1 **The multiplicity matrix.** By [F5] and step 2.1, $[M(y\cdot0):L(w\cdot0)]=P_{y,w}(1)=1$ exactly when $y\le w$ and $0$ otherwise; this is the Bruhat zeta matrix of $S_3$ with rows $y$ and columns $w$. For the displayed instances: $y=123$ is the minimum of the Bruhat order, so $[M(0):L(w\cdot0)]=1$ for all six $w$; $y=321$ is the maximum, so $[M(321\cdot0):L(w\cdot0)]=0$ unless $w=321$, where it is $1$; and for $y=213$ the comparable columns are $w=213,231,312,321$ by [F4], so $M(213\cdot0)$ has exactly the four composition factors $L(213\cdot0),L(231\cdot0),L(312\cdot0),L(321\cdot0)$, each once. [F4, F5, step 2.1]

4.1 **The Verma-flag matrix.** Applying BGG reciprocity [F6] with $\mu=w\cdot0$ and $\nu=y\cdot0$ gives $(P(w\cdot0):\Delta(y\cdot0))=[M(y\cdot0):L(w\cdot0)]$, which by step 3.1 is $1$ exactly when $y\le w$ and $0$ otherwise; the interpretation of the left-hand multiplicity is the Verma-flag multiplicity of the labelled projective by [F7]. In particular $(P(123\cdot0):\Delta(y\cdot0))=0$ for $y\ne123$ (with value $1$ at $y=123$, since $123$ is the minimum and no other $y$ lies below it) and $(P(321\cdot0):\Delta(y\cdot0))=1$ for all $y$ (all $y$ lie below the maximum $321$). So the projective-flag matrix is the same zeta matrix. [F6, F7, step 3.1] ∎
