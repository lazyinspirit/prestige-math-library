---
id: lem-the-inverse-of-one-plus-the-generator-in-a-truncated-mod-two-polynomial-ring
kind: lemma
title: "The inverse of one plus the generator in the truncated mod-two polynomial ring"
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
deps: ["def-polynomial-ring-over-a-commutative-ring", "def-polynomial-degree-leading-coefficient-and-monic", "def-quotient-ring", "thm-quotient-ring-multiplication-well-defined-iff-ideal", "thm-monic-polynomial-division", "lem-binomial-series-for-a-repeated-pole", "lem-binomial-coefficients-symmetric-and-unimodal", "def-formal-power-series-and-coefficient-extraction", "def-integers-modulo-n", "thm-z-mod-p-is-a-field", "def-binomial-coefficient"]
justified_by: []
dependency_level: 0
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John W. Milnor and James D. Stasheff, Characteristic Classes (Annals of Mathematics Studies 74, Princeton University Press; complete text)"
      url: "https://webhomes.maths.ed.ac.uk/~v1ranick/papers/milnstas.pdf"
      locator: "SS4, printed pp. 43-48 (Lemma 4.4, Theorem 4.5, Corollary 4.6, the immersion paragraph, Theorem 4.8); SS11, printed pp. 119-136 (Theorem 11.3, Corollary 11.12, Wu's formula and Corollary 11.15); SS15, printed pp. 173-178 (Theorem 15.3, Corollary 15.5, Corollary 15.8)"
    - title: "Ralph L. Cohen, Immersions of Manifolds and Homotopy Theory (lecture notes, 30 June 2022; complete 46-page text)"
      url: "https://math.stanford.edu/~ralph/immersions-final.pdf"
      locator: "SS1-3.1, PDF pp. 4-13: Proposition 1, Theorem 2 (Hirsch-Smale), Corollary 3 (k-dimensional inverse of the tangent bundle), Theorems 4-5, Corollary 10 (normal Stiefel-Whitney nonimmersion test) and the RP^{2^k} example, Theorem 11 (Massey)"
---

## Statement

Let $m\ge1$, let $\mathbb F_2[t]$ be the polynomial ring over $\mathbb F_2$ and let $R_m=\mathbb F_2[t]/(t^{m+1})$ be the truncated polynomial ring, so that $t^{m+1}=0$ and $1,t,\dots,t^m$ is an $\mathbb F_2$-basis. Write the binary expansion $m=\sum_{j\in B}2^j$ and let $S_m=\{i\in\mathbb Z:0\le i\le m,\ i\wedge m=0\}$, where $\wedge$ is digitwise AND of binary expansions; set $d(m)=\max S_m$. Then $1+t$ is a unit of $R_m$ and
$$(1+t)^{-(m+1)}=\sum_{i\in S_m}t^i.$$
Consequently the coefficient of $t^i$ in $(1+t)^{-(m+1)}$ is $1$ exactly for $i\in S_m$, this coefficient equals $\binom{m+i}{i}\bmod 2$, and the highest power occurring with nonzero coefficient is $t^{d(m)}$. If $m+1$ is a power of two then $S_m=\{0\}$ and $(1+t)^{-(m+1)}=1$.

## Facts & Assumptions

**Given:** An integer $m\ge1$, the ring $\mathbb F_2=\mathbb Z/2$ ([[def-integers-modulo-n]], [[thm-z-mod-p-is-a-field]]), the polynomial ring $\mathbb F_2[t]$ ([[def-polynomial-ring-over-a-commutative-ring]]), and the quotient ring $R_m=\mathbb F_2[t]/(t^{m+1})$ with the monic polynomial $t^{m+1}$ ([[def-quotient-ring]], [[thm-quotient-ring-multiplication-well-defined-iff-ideal]], [[def-polynomial-degree-leading-coefficient-and-monic]]).

[F1] Division by the monic polynomial $t^{m+1}$ gives every class of $R_m$ a unique representative of degree at most $m$; hence $1,t,\dots,t^m$ is an $\mathbb F_2$-basis of $R_m$ and $t^{m+1}=0$ in $R_m$ ([[thm-monic-polynomial-division]], [[def-quotient-ring]]). In $\mathbb F_2$ one has $1+1=0$ ([[def-integers-modulo-n]]).

[F2] For every commutative ring $R$, every $\lambda\in R$ and every integer $j\ge1$ the formal identity $\frac{1}{(1-\lambda x)^j}=\sum_{n\ge0}\binom{n+j-1}{j-1}\lambda^nx^n$ holds in $R\llbracket x\rrbracket$, the binomial coefficient acting by repeated addition ([[lem-binomial-series-for-a-repeated-pole]], [[def-binomial-coefficient]], [[def-formal-power-series-and-coefficient-extraction]]); moreover $\binom Nk=\binom N{N-k}$ for $0\le k\le N$ ([[lem-binomial-coefficients-symmetric-and-unimodal]]).

[F3] Coefficients of sums and Cauchy products in $R\llbracket x\rrbracket$ in degree $k$ depend only on the coefficients of degree at most $k$ ([[def-formal-power-series-and-coefficient-extraction]]).

## Proof

1.1 Every element of $R_m$ has a unique representative of degree at most $m$ by [F1], and $t^{m+1}=0$; in particular $1,t,\dots,t^m$ form a basis and no class has two such representatives. The element $1+t$ is a unit with the displayed finite inverse: since $m\ge1$, in characteristic two $$(1+t)(1+t+\cdots+t^m)=1+t^{m+1}=1+0=1$$ in $R_m$, so $1+t+\cdots+t^m$ is an inverse of $1+t$ and hence $1+t$ is a unit. [F1, algebra]

1.2 Write $m=\sum_{j\in B}2^j$ with $B$ the finite set of binary digit positions, so $B\ne\varnothing$ because $m\ge1$. Choose $M\ge\max B$ with $2^{M+1}>m$. In $\mathbb F_2[t]$ the identity $(1+t)^{2^j}=1+t^{2^j}$ holds for every $j\ge0$: it is trivial for $j=0$, and from $(u+v)^2=u^2+2uv+v^2=u^2+v^2$ in characteristic two, $(1+t)^{2^{j+1}}=((1+t)^{2^j})^2=(1+t^{2^j})^2=1+t^{2^{j+1}}$. Multiplying the identities for $j\in B$ gives $(1+t)^m=\prod_{j\in B}(1+t^{2^j})$, and iterating $\prod_{j=0}^{N}(1+t^{2^j})=1+t+\cdots+t^{2^{N+1}-1}$ gives, in $R_m$, $$(1+t)^{m+1}=(1+t)\prod_{j\in B}(1+t^{2^j}),\qquad \prod_{j=0}^{M}(1+t^{2^j})=1+t+\cdots+t^{2^{M+1}-1}.$$ [F1, given, algebra]

2.1 Put $P_m:=\prod_{j\notin B,\,0\le j\le M}(1+t^{2^j})$, a finite product in $R_m$. Expanding the product over all subsets $A\subseteq\{0,\dots,M\}\setminus B$, each subset contributes $t^{\sigma(A)}$ with $\sigma(A)=\sum_{j\in A}2^j$, and distinct subsets have distinct sums by uniqueness of binary expansion; all other coefficients are $0$. Since $t^{k}=0$ in $R_m$ for every $k\ge m+1$ by [F1], only the subsets with $\sigma(A)\le m$ contribute, and such a sum has binary support inside $\{0,\dots,M\}$ and disjoint from $B$, i.e. $\sigma(A)\wedge m=0$, so $\sigma(A)\in S_m$. Conversely every $i\in S_m$ satisfies $i\le m<2^{M+1}$, so its binary expansion involves only digits $j\le M$ and, since $i\wedge m=0$, no digit of $B$; the subset $A=\{j: 2^j\text{ occurs in }i\}$ is admissible and $i=\sigma(A)$. Therefore $$P_m=\sum_{i\in S_m}t^i\qquad\text{in }R_m.$$ [F1, step 1.2, algebra]

3.1 In $R_m$ one computes, using step 1.2 and the Frobenius identities, $$(1+t)^{m+1}P_m=(1+t)\prod_{j=0}^{M}(1+t^{2^j})=(1+t)(1+t+\cdots+t^{2^{M+1}-1})=1+t^{2^{M+1}}=1,$$ the last equality because $2^{M+1}>m$ forces $t^{2^{M+1}}=0$ in $R_m$ by [F1]. Hence $P_m$ is a two-sided inverse of $(1+t)^{m+1}$ in the commutative ring $R_m$, so $(1+t)^{-(m+1)}=P_m=\sum_{i\in S_m}t^i$ by step 2.1. [F1, step 1.2, step 2.1, algebra]

4.1 For the binomial-coefficient description apply [F2] over the commutative ring $\mathbb F_2$ with $\lambda=1$ and $j=m+1$: in $\mathbb F_2\llbracket x\rrbracket$ one has $(1-x)^{-(m+1)}=\sum_{i\ge0}\bigl(\binom{i+m}{m}\bmod 2\bigr)x^i=\sum_{i\ge0}\bigl(\binom{m+i}{i}\bmod 2\bigr)x^i$, the second equality by the symmetry clause of [F2], where $1-x=1+x$ because $1+1=0$ in $\mathbb F_2$. By [F3] the coefficientwise truncation map $\varphi:\mathbb F_2\llbracket x\rrbracket\to R_m$, $\sum_ia_ix^i\mapsto\sum_{i=0}^{m}a_it^i$, is a surjective ring homomorphism: addition is coefficientwise, and in the Cauchy product the coefficient of $x^k$ depends only on the coefficients of degree at most $k$, so truncation at degree $m$ commutes with products in $R_m$, where $t^{m+1}=0$. Since $\varphi(1-x)=1+t$ and ring homomorphisms carry inverses of units to inverses of units, $$\varphi\bigl((1-x)^{-(m+1)}\bigr)=(1+t)^{-(m+1)}=\sum_{i=0}^{m}\Bigl(\binom{m+i}{i}\bmod 2\Bigr)t^i.$$ Comparing coefficients with step 3.1 gives: the coefficient of $t^i$ in $(1+t)^{-(m+1)}$ equals $\binom{m+i}{i}\bmod 2$ for every $0\le i\le m$, and it equals $1$ exactly for the $i\in S_m$ by the formula of step 3.1. [F2, F3, step 3.1, algebra]

5.1 The set $S_m$ contains $0$ and is finite, so $d(m)=\max S_m$ is defined; by steps 3.1 and 4.1 the coefficient of $t^{d(m)}$ is $1$, while every coefficient of degree $i>d(m)$ with $i\le m$ is $0$ because such $i\notin S_m$, and degrees above $m$ vanish in $R_m$. Hence the highest power occurring with nonzero coefficient is exactly $t^{d(m)}$. If $m+1=2^q$ is a power of two, then $q\ge1$, $m=2^q-1=\sum_{j=0}^{q-1}2^j$, and every $i$ with $1\le i\le m$ has some binary digit at a position $j\le q-1$, hence satisfies $i\wedge m\ne0$; therefore $S_m=\{0\}$ and the inverse is $1$, consistently with $(1+t)^{m+1}=(1+t)^{2^q}=1+t^{2^q}=1$ in $R_m$. [step 1.2, step 3.1, step 4.1, algebra] ∎
