---
id: lem-cg-formal-rational-differentials-and-invariant-jacobian
kind: lemma
title: "Algebraicity of the coordinates over the invariant field and non-vanishing of the invariant Jacobian"
status: draft
origin: pipeline
pipeline_run: frontier-42-coxeter-32
deps: ["def-cg-coxeter-basic-degrees-and-graded-coinvariants", "lem-cg-complexification-satisfies-reflection-invariant-hypotheses", "def-cg-canonical-reflection-homomorphism", "def-finite-linear-invariant-and-coinvariant-polynomial-algebras", "lem-finite-reflection-invariant-generators-are-algebraically-independent", "lem-reflection-basic-invariants-form-a-regular-sequence", "thm-chevalley-shephard-todd-for-finite-weyl-groups", "def-polynomial-ring-over-a-commutative-ring", "def-multivariate-polynomial-ring-by-iteration", "def-formal-derivative-of-a-polynomial", "prop-formal-derivative-laws", "def-jacobian-matrix-affine-algebraic-set", "def-field-of-fractions", "def-algebraic-and-transcendental-elements", "thm-evaluation-kernel-and-minimal-polynomial", "def-axiom-of-choice", cor-square-matrix-invertible-iff-determinant-is-a-unit]
justified_by: []
dependency_level: 16
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757 course notes, 162-page PDF)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf"
      locator: "Proposition 12.1(i) and its proof, printed p. 63: for a finite group the monic orbit polynomial prod_{g in G}(x-ga) has invariant coefficients and makes C[V] integral and module-finite over C[V]^G; used here through the orbit annihilator only, not through module-finiteness"
    - title: "Josh Swanson, On eigenvalues of representations of reflection groups and wreath products (University of Washington CAT seminar notes, 7-page PDF)"
      url: "https://www.jpswanson.org/talks/2016_eigenvalues.pdf"
      locator: "Definition 9, p. 2, for the convention that the degrees of a complex reflection group are the degrees of any homogeneous algebraically independent generating family"
---

## Statement

Assume the Axiom of Choice. Let $(W,S)$ be a Coxeter system of finite type, $n=|S|\ge1$, with $V_{\mathbb C}$, $A=S/I$ and a fixed basic family $f_1,\dots,f_n\in R=S^{W}$ of degrees $d_i$, generating the ideal $I=SR_+$, algebraically independent and generating $R$, as in [[def-cg-coxeter-basic-degrees-and-graded-coinvariants]]; choose $\mathbb C$-coordinates $x_1,\dots,x_n$ on $V_{\mathbb C}$ ([[def-multivariate-polynomial-ring-by-iteration]]) and let $\partial/\partial x_j$ and $J=(\partial f_i/\partial x_j)_{1\le i,j\le n}$ be the formal partial derivatives and the Jacobian matrix of [[def-jacobian-matrix-affine-algebraic-set]]. Put $L:=\mathbb C(x_1,\dots,x_n)$ and $K:=\mathbb C(f_1,\dots,f_n)\subseteq L$ ([[def-field-of-fractions]]).

**(1) Annihilating orbit polynomials.** For each $j$, the orbit polynomial $$P_j(T):=\prod_{w\in W}\bigl(T-w\cdot x_j\bigr)\in S[T]$$ is monic of degree $|W|$, its coefficients lie in $R=\mathbb C[f_1,\dots,f_n]\subseteq K$, and $P_j(x_j)=0$. Hence every $x_j$ is algebraic over $K$ in the sense of [[def-algebraic-and-transcendental-elements]].

**(2) Minimal polynomial and its derivative.** For each $j$ let $m_j\in K[T]$ be the minimal polynomial of $x_j$ over $K$ ([[thm-evaluation-kernel-and-minimal-polynomial]]). Then $x_j\notin K$; $m_j$ is nonconstant; $m_j'\ne0$; and $m_j'(x_j)\ne0$.

**(3) Differential bridge.** For each $j$ there exist $b_{1j},\dots,b_{nj}\in L$ such that, for every $k\in\{1,\dots,n\}$, the identity $$\delta_{jk}=\sum_{i=1}^{n}b_{ij}\,\frac{\partial f_i}{\partial x_k}$$ holds in $L$ (with $\delta_{jk}$ the Kronecker symbol; equivalently $\mathrm{id}=B\cdot J$ with $B=(b_{ji})$ over $L$). Consequently $J$ has rank $n$ over $L$, and $$\mathbf J:=\det\Bigl(\frac{\partial f_i}{\partial x_j}\Bigr)\in S$$ is a nonzero polynomial: the **invariant Jacobian**.

No étale-quotient, scheme-theoretic or transcendental Jacobian criterion is used.

## Facts & Assumptions

**Given:** The Axiom of Choice, the finite type system $(W,S)$ with basic family $f_1,\dots,f_n$, and coordinates $x_1,\dots,x_n$ on $V_{\mathbb C}$.

[F1] The fixed family $f_1,\dots,f_n$ is a minimal family of homogeneous positive-degree invariants generating $I=SR_+$, generates $R$ as a $\mathbb C$-algebra and is algebraically independent, so evaluation gives a graded $\mathbb C$-algebra isomorphism $\mathbb C[y_1,\dots,y_n]\to R$, $y_i\mapsto f_i$, and every element of $R$ is a polynomial in the $f_i$; also $d_i\ge2$ ([[def-cg-coxeter-basic-degrees-and-graded-coinvariants]], [[lem-finite-reflection-invariant-generators-are-algebraically-independent]], [[thm-chevalley-shephard-todd-for-finite-weyl-groups]]).

[F2] $\rho_{\mathbb C}:W\to\mathrm{GL}(V_{\mathbb C})$ is the complexified canonical representation with $\dim_{\mathbb C}V_{\mathbb C}=n$, and $V_{\mathbb C}^{W}=\{0\}$; more precisely every $W$-fixed linear form on $V_{\mathbb C}$ is zero ([[lem-cg-complexification-satisfies-reflection-invariant-hypotheses]] (1),(3), [[def-cg-canonical-reflection-homomorphism]]).

[F3] The action $(g\cdot f)(v)=f(\rho_{\mathbb C}(g)^{-1}v)$ makes $S=\mathbb C[V_{\mathbb C}]$ a graded algebra on which $W$ acts by graded algebra automorphisms, with invariant algebra $R=S^{W}$, positive-degree part $R_+$ and $I=SR_+$; the degree-one part of $S$ is $V_{\mathbb C}^*$ and the restricted action is the dual action, so a degree-one element of $S$ is $W$-fixed exactly when it is an invariant linear form ([[def-finite-linear-invariant-and-coinvariant-polynomial-algebras]], [[lem-reflection-basic-invariants-form-a-regular-sequence]]).

[F4] $S=\mathbb C[x_1,\dots,x_n]$ is the iterated polynomial ring over $\mathbb C$, monomials form a basis, and $S$ is a domain with fraction field $L=\mathbb C(x_1,\dots,x_n)$; the subfield generated by $f_1,\dots,f_n$ is $K=\mathbb C(f_1,\dots,f_n)=\operatorname{Frac}(R)$ ([[def-polynomial-ring-over-a-commutative-ring]], [[def-multivariate-polynomial-ring-by-iteration]], [[def-field-of-fractions]]). Over a field, a positive-sized square matrix is invertible exactly when its determinant is nonzero ([[cor-square-matrix-invertible-iff-determinant-is-a-unit]]); hence $\det(\lambda I-M)=0$ exactly when $\lambda$ is an eigenvalue.

[F5] Algebraic elements and minimal polynomials: if $0\ne P\in K[T]$ with $P(x_j)=0$ then $x_j$ is algebraic over $K$; the minimal polynomial $m_j$ is the unique monic irreducible element generating $\ker(\operatorname{ev}_{x_j})=(m_j)$, and $f(x_j)=0$ holds exactly when $m_j\mid f$ ([[def-algebraic-and-transcendental-elements]], [[thm-evaluation-kernel-and-minimal-polynomial]]).

[F6] The formal partial derivatives $\partial_{x_k}$ are defined on monomials by the Leibniz monomial rule and extended $\mathbb C$-linearly, and the univariate formal derivative satisfies $(f+g)'=f'+g'$, $(cf)'=cf'$, the product rule, $(T^a)'=aT^{a-1}$ and the degree bound $\deg f'\le\deg f-1$ when $f'\ne0$ ([[def-jacobian-matrix-affine-algebraic-set]], [[def-formal-derivative-of-a-polynomial]], [[prop-formal-derivative-laws]]).

[F7] The Axiom of Choice is used only to have an $n$-element basic family as in [F1] ([[def-axiom-of-choice]]).

## Proof

1.1 Fix $j$ and form $P_j(T)=\prod_{w\in W}(T-w\cdot x_j)\in S[T]$. For $g\in W$ one has $g\cdot(w\cdot x_j)=(gw)\cdot x_j$ (the action is a left action), so $g$ permutes the linear factors and hence fixes $P_j$; as $W$ acts by graded algebra automorphisms [F3], each coefficient of $P_j$ lies in $R=S^W$. By [F1] $R=\mathbb C[f_1,\dots,f_n]$, so all coefficients lie in $K$. The polynomial is monic of degree $|W|$, being a product of $|W|$ monic linear factors, and $P_j(x_j)=0$ because the factor with $w=1$ is $T-x_j$. Hence $x_j$ is algebraic over $K$ in the sense of [F5]. [F1, F3, F4, F5]

1.2 The operators $\partial_{x_k}$ are $\mathbb C$-linear on $S$ and satisfy the product rule on monomials by the Leibniz monomial rule, hence on all polynomials by bilinearity; by induction the power rule $\partial_{x_k}(x_j^a)=ax_j^{a-1}\delta_{jk}$ holds for all $a\ge1$, while $\partial_{x_k}1=0$. Consequently, for every polynomial $\gamma\in\mathbb C[y_1,\dots,y_n]$ and all $g_1,\dots,g_n\in S$, the chain rule $$\partial_{x_k}\bigl(\gamma(g_1,\dots,g_n)\bigr)=\sum_{i=1}^n(\partial_{y_i}\gamma)(g_1,\dots,g_n)\,\partial_{x_k}g_i$$ holds: expanding $\gamma=\sum_\alpha c_\alpha y^\alpha$, the product rule gives $\partial_{x_k}(g^\alpha)=\sum_i\alpha_ig^{\alpha-e_i}\partial_{x_k}g_i$, which is the displayed identity because $\partial_{y_i}\gamma=\sum_\alpha c_\alpha\alpha_iy^{\alpha-e_i}$. [F6]

2.1 Suppose $x_j\in K$. Since $W$ acts on $S$ by algebra automorphisms it acts on the fraction field $L$ by $g\cdot(a/b)=(g\cdot a)/(g\cdot b)$, and this action fixes $K$ pointwise because the $f_i$ are invariant; hence $g\cdot x_j=x_j$ for every $g$. But $x_j\in V_{\mathbb C}^*$ is a degree-one element of $S$ [F3], so by [F2] the only $W$-fixed linear form is $0$, while $x_j$ is a coordinate function and $x_j\ne0$: contradiction. So $x_j\notin K$; the minimal polynomial $m_j$ of $x_j$ over $K$ [F5] is therefore nonconstant. Its derivative is nonzero: the top coefficient of $m_j$ is nonzero and the degree is $\ge1$, so in characteristic zero the coefficient $\deg(m_j)\cdot c_{\deg}$ of $m_j'$ is nonzero, and $\deg m_j'<\deg m_j$ by [F6]. If $m_j'(x_j)=0$, then the nonzero polynomial $m_j'\in K[T]$ of degree $<\deg m_j$ would have $x_j$ as a root, contradicting the minimality of $m_j$ [F5]; hence $m_j'(x_j)\ne0$ in $L$. [F2, F3, F5, F6, step 1.1]

3.1 Fix $j$ and write $m_j(T)=\sum_{a=0}^{r}c_aT^a$ with $c_a\in K$. Since $K=\operatorname{Frac}(R)$ [F4], choose $0\ne B\in R$ with $\beta_a:=Bc_a\in R$ for all $a$, and put $M_j(T):=\sum_a\beta_aT^a\in R[T]$. Then $M_j(x_j)=B\,m_j(x_j)=0$ and $M_j'(T)=B\,m_j'(T)$, so $M_j'(x_j)=B\,m_j'(x_j)\ne0$ in $L$ by 2.1. Differentiate the polynomial identity $M_j(x_j)=\sum_a\beta_ax_j^a=0$ with respect to $x_k$ using the product and power rules of 1.2: $$0=\sum_a(\partial_{x_k}\beta_a)\,x_j^a+M_j'(x_j)\,\partial_{x_k}x_j=\sum_a(\partial_{x_k}\beta_a)x_j^a+M_j'(x_j)\delta_{jk},$$ hence $\delta_{jk}=-\bigl(\sum_a(\partial_{x_k}\beta_a)x_j^a\bigr)/M_j'(x_j)$ in $L$. Each $\beta_a\in R=\mathbb C[f_1,\dots,f_n]$ is $\beta_a=\gamma_a(f_1,\dots,f_n)$ for a polynomial $\gamma_a\in\mathbb C[y_1,\dots,y_n]$ [F1], so the chain rule of 1.2 gives $\partial_{x_k}\beta_a=\sum_i(\partial_{y_i}\gamma_a)(f_1,\dots,f_n)\partial_{x_k}f_i$. Substituting, $$\delta_{jk}=\sum_{i=1}^n b_{ij}\,\partial_{x_k}f_i,\qquad b_{ij}:=-\frac{\sum_a(\partial_{y_i}\gamma_a)(f_1,\dots,f_n)\,x_j^a}{M_j'(x_j)}\in L,$$ for all $j,k$; equivalently $BJ=\mathrm{id}$ for the matrix $B=(b_{ji})$. Hence $J$ is invertible over the field $L$, so it has rank $n$ over $L$, its determinant is nonzero in $L$, and since $S$ is a domain with fraction field $L$ [F4] the polynomial $\mathbf J=\det J\in S$ is nonzero. For $n=0$ there is no assertion to make; the only choice principle used is the AC entering the existence of the basic family [F7], and no étale-quotient, scheme-theoretic or transcendental Jacobian criterion is invoked. [F1, F4, F6, F7, step 1.1, step 1.2, step 2.1] ∎
