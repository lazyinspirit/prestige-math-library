---
id: lem-finite-purely-inseparable-rational-extension-envelope
kind: lemma
title: "Finite purely inseparable rational extensions admit a finite Frobenius envelope"
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-purely-inseparable-extension, thm-finitely-generated-algebraic-extensions-are-finite, def-extension-degree-and-finite-extension, def-dimension, def-finitely-generated-field-extension, def-field-of-fractions, def-field-extension-generated-subfields-and-simple-extension, def-multivariate-polynomial-ring-by-iteration, cor-multivariate-polynomial-ring-over-a-domain-is-a-domain, thm-frobenius-endomorphism-and-finite-field-automorphism, lem-polynomial-factorisation-into-irreducibles, thm-polynomial-quotient-is-a-field-iff-irreducible, def-quotient-ring, thm-well-ordering-principle, lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power, lem-an-isomorphism-extends-across-a-simple-root-adjunction, thm-simple-algebraic-extension-quotient-power-basis-and-degree, def-ring-characteristic, thm-finite-field-extensions-are-algebraic, thm-tower-law-for-finite-field-extensions, def-algebraic-and-transcendental-elements, def-polynomial-evaluation-and-root]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
sources:
  scraped: []
  references:
    - title: "Stacks Project, Lemma 10.161.13 (polynomial N-2)"
      url: "https://stacks.math.columbia.edu/tag/032O"
      locator: "Lemma 10.161.13, proof of the implication (4), imperfect-base case"
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Chapter 3"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
      locator: "Chapter 3, separable and purely inseparable extensions"
---

## Statement

Let $K$ be a field of characteristic $p>0$, let $x_1,\ldots,x_d$ be
algebraically independent over $K$, and put $F=K(x_1,\ldots,x_d)$. If $L/F$ is
finite and purely inseparable, then there are a finite purely inseparable field
extension $K'/K$ and an exponent $e\in\mathbb N$ with $q=p^{e}$ such that $L$
embeds over $F$ into $K'(x_1^{1/q},\ldots,x_d^{1/q})$.

## Facts & Assumptions

**Given:** A field $K$ of characteristic $p>0$, algebraically independent elements $x_1,\ldots,x_d$, the field $F=K(x_1,\ldots,x_d)$, and a finite purely inseparable extension $L/F$.

[L1] A finite purely inseparable $L/F$ has $[L:F]=\dim_FL$ finite, and every $\alpha\in L$ satisfies $\alpha^{p^{n}}\in F$ for some $n\in\mathbb N$, the exponent $0$ permitted ([[def-extension-degree-and-finite-extension]], [[def-purely-inseparable-extension]]).

[L2] A finite-dimensional vector space has a finite basis, and a basis of $L$ over $F$ is an $F$-spanning set ([[def-dimension]]).

[L3] $F(a_1,\ldots,a_r)$ denotes the smallest subfield containing $F$ and $a_1,\ldots,a_r$, and an extension is finitely generated when it equals such a subfield ([[def-finitely-generated-field-extension]]).

[L4] $\operatorname{Frac}(D)$ consists of the fractions $a/b$ with $a,b\in D$, $b\ne0$ ([[def-field-of-fractions]]), and $F(S)$ is the smallest subfield containing $F\cup S$ ([[def-field-extension-generated-subfields-and-simple-extension]]).

[L5] $K[x_1,\ldots,x_d]$ is the iterated polynomial ring over $K$ ([[def-multivariate-polynomial-ring-by-iteration]]) and is an integral domain ([[cor-multivariate-polynomial-ring-over-a-domain-is-a-domain]]).

[L6] In a field of characteristic $p>0$ the Frobenius map $x\mapsto x^{p}$ is an injective field endomorphism, and its $n$-fold iterate is $x\mapsto x^{p^{n}}$ ([[thm-frobenius-endomorphism-and-finite-field-automorphism]]).

[L7] Every nonzero nonunit polynomial over a field is a finite product of irreducible polynomials ([[lem-polynomial-factorisation-into-irreducibles]]), and for nonconstant $g$ the quotient $E[T]/(g)$ is a field exactly when $g$ is irreducible ([[thm-polynomial-quotient-is-a-field-iff-irreducible]]); the class $T+(g)$ is computed in the quotient ring [[def-quotient-ring]].

[L8] Every nonempty subset of $\mathbb N$ has a least element ([[thm-well-ordering-principle]]).

[L9] If $a$ is not a $p$th power in a field $E$ of characteristic $p>0$ and $n\ge1$, then $T^{p^{n}}-a$ is irreducible in $E[T]$ ([[lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power]]).

[L10] If $\sigma:E\to E'$ is a field isomorphism, $m\in E[T]$ is monic and irreducible, $\alpha$ is a root of $m$ in an extension of $E$, and $\beta$ is a root of $\sigma_*m$ in an extension of $E'$, then $\sigma$ extends to a unique field isomorphism $E(\alpha)\to E'(\beta)$ with $\alpha\mapsto\beta$ ([[lem-an-isomorphism-extends-across-a-simple-root-adjunction]]).

[L11] If $a$ is algebraic over $E$ with minimal polynomial of degree $n$, then every element of $E(a)$ has a unique expression $c_0+c_1a+\cdots+c_{n-1}a^{n-1}$ with $c_j\in E$ ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L12] A finite field extension is algebraic ([[thm-finite-field-extensions-are-algebraic]]), and in a tower $E\subseteq E'\subseteq E''$ of finite extensions the degrees multiply ([[thm-tower-law-for-finite-field-extensions]]).

[L13] The characteristic of a ring is determined by the set of positive $n$ with $n\cdot1_R=0$ ([[def-ring-characteristic]]); since a field extension $E\subseteq E'$ has $1_{E'}=1_{E}$ and hence $n\cdot1_{E'}=n\cdot1_E$ for all $n$, it satisfies $\operatorname{char}E'=\operatorname{char}E$.

[L14] Algebraic independence of $x_1,\ldots,x_d$ over $K$ is the hypothesis recorded above and is used only in the form: the evaluation homomorphism $K[X_1,\ldots,X_d]\to F$ with $X_i\mapsto x_i$ has zero kernel, so a nonzero polynomial in the $x_i$ over $K$ is a nonzero element of $F$ ([[def-algebraic-and-transcendental-elements]], [[def-polynomial-evaluation-and-root]]).

## Proof

**Proof technique:** direct.

1.1 Choose a finite $F$-basis of $L$ and enumerate it as $(u_1,\ldots,u_r)$; by [L2] it is an $F$-spanning set, so every element of $L$ is an $F$-linear combination of the $u_j$, hence lies in the subfield $F(u_1,\ldots,u_r)$ generated by them, while conversely $F(u_1,\ldots,u_r)\subseteq L$; thus $L=F(u_1,\ldots,u_r)$ by [L3]. [L2, L3, given, choose]

1.2 Evaluation at $x_1,\ldots,x_d$ gives a homomorphism $K[X_1,\ldots,X_d]\to F$ that is injective by [L14], with image the subring generated by $K$ and the $x_i$; since $F$ is the field generated by these elements and contains $K[x_1,\ldots,x_d]$, [L4] gives $F=\operatorname{Frac}(K[x_1,\ldots,x_d])$, the fraction field of the domain $K[x_1,\ldots,x_d]$ of [L5]. In particular a nonzero polynomial in the $x_i$ with coefficients in $K$ is not zero in $F$. [L4, L5, L14, given]

2.1 By [L1] applied to each generator $u_j$ of step 1.1 there are $e_j\in\mathbb N$ with $u_j^{p^{e_j}}\in F$. If $r\ge1$ put $e:=\max\{e_1,\ldots,e_r\}$ and otherwise put $e:=0$; set $q:=p^{e}$ and $\gamma_j:=u_j^{q}\in F$ for $j=1,\ldots,r$. [L1, step 1.1, choose]

3.1 By step 1.2 each $\gamma_j$ is a fraction, so there are $h_j,k_j\in K[x_1,\ldots,x_d]$ with $k_j\ne0$ and $\gamma_j=h_j/k_j$. Let $S\subseteq K$ be the finite set of all coefficients occurring in the polynomials $h_1,k_1,\ldots,h_r,k_r$ and enumerate $S=\{c_1,\ldots,c_s\}$. [step 1.2, step 2.1, construct]

3.2 Put $\Omega_0:=F$. For $i=1,\ldots,d$ choose, using [L7], a monic irreducible factor $g_i\in\Omega_{i-1}[T]$ of $T^{q}-x_i$, set $\Omega_i:=\Omega_{i-1}[T]/(g_i)$ and $t_i:=T+(g_i)$; then $\Omega_i$ is a field containing $\Omega_{i-1}$ and $t_i^{q}=x_i$. [L7, step 2.1, construct]

4.1 For $i=1,\ldots,s$ choose a monic irreducible factor $g_{d+i}\in\Omega_{d+i-1}[T]$ of $T^{q}-c_i$, set $\Omega_{d+i}:=\Omega_{d+i-1}[T]/(g_{d+i})$ and $\alpha_i:=T+(g_{d+i})$. Then $\Omega:=\Omega_{d+s}$ is a field containing $F$ and $\alpha_i^{q}=c_i$ for every $i$. [L7, step 3.1, step 3.2, construct]

5.1 The subfield $K':=K(\alpha_1,\ldots,\alpha_s)$ of $\Omega$ contains $K$ and is finite over $K$, and every element of $K'$ has its $p^{es}$-th power in $K$: each $\alpha_i$ is algebraic over the preceding field with a power basis of length at most $q$ by [L11], so raising an element of $K(\alpha_1,\ldots,\alpha_i)$ to the $p^{e}$-th power uses [L6], $\alpha_i^{q}=c_i\in K$ and additivity of Frobenius to land in $K(\alpha_1,\ldots,\alpha_{i-1})$, and $s$ such steps land in $K$; the same degree bounds give $[K':K]\le q^{s}$ by [L12]. Hence $K'/K$ is finite purely inseparable by [L1], [L12] and [L13]. [L1, L6, L11, L12, L13, step 4.1]

5.2 Initial embedding: the inclusion $\varphi_0:F\to\Omega$, $\varphi_0(z)=z$, is an injective field homomorphism fixing $F$ pointwise. [given, step 4.1]

6.1 Moreover $\Omega=K'(t_1,\ldots,t_d)$ by [L3], and $\Omega$ has characteristic $p$ by [L13]. [L3, L13, step 3.2, step 4.1, step 5.1]

6.2 Inductive claim. Let $1\le j\le r$ and suppose that $\varphi_{j-1}:F_{j-1}\to\Omega$ is an injective field homomorphism fixing $F$ pointwise, where $F_{j-1}:=F(u_1,\ldots,u_{j-1})$. If $u_j\in F_{j-1}$, then $F_j=F_{j-1}$ and $\varphi_{j-1}$ itself is the required extension. [given, step 1.1, step 5.2]

7.1 In the remaining case $u_j\notin F_{j-1}$ put $D_j:=\{n\in\mathbb N:u_j^{p^{n}}\in F_{j-1}\}$. This set is nonempty because $e_j\in D_j$ by step 2.1, so by [L8] it has a least element $d_j$; here $d_j\ge1$ because $u_j\notin F_{j-1}$, and $d_j\le e_j\le e$. Put $\beta_j:=u_j^{p^{d_j}}\in F_{j-1}$. [L8, step 2.1, step 6.2, choose]

8.1 In the situation of step 7.1 the element $\beta_j$ is not a $p$th power in $F_{j-1}$: if $\beta_j=b^{p}$ with $b\in F_{j-1}$, then $(u_j^{p^{d_j-1}})^{p}=\beta_j=b^{p}$, so injectivity of Frobenius over $F_{j-1}$, available by [L6] and [L13], gives $u_j^{p^{d_j-1}}=b\in F_{j-1}$, contradicting the minimality of $d_j$. Hence $m_j(T):=T^{p^{d_j}}-\beta_j$ is monic irreducible over $F_{j-1}$ by [L9], and $m_j(u_j)=0$. [L6, L9, L13, step 7.1]

8.2 In the situation of step 7.1 define, inside $\Omega$, the elements
$$ H_j:=\sum_{a}\alpha_{c_a}t^{a},\qquad K_j:=\sum_{b}\alpha_{d_b}t^{b}, $$
where the sums run over the finitely many exponent vectors $a$ and $b$ occurring in $h_j$ and in $k_j$, with $t^{a}:=t_1^{a_1}\cdots t_d^{a_d}$ and likewise for $b$; then $H_j,K_j\in\Omega$. [step 3.1, step 4.1, construct]

9.1 Frobenius in $\Omega$, licit by step 6.1 and [L6], gives $H_j^{q}=\sum_a\alpha_{c_a}^{q}t^{aq}=\sum_a c_a(t^{q})^{a}=h_j(x_1,\ldots,x_d)$ and likewise $K_j^{q}=k_j(x_1,\ldots,x_d)\ne0$ by step 1.2, so $K_j\ne0$ and the quotient $W_j:=H_j/K_j\in\Omega$ is defined and satisfies $W_j^{q}=\gamma_j$. [L6, step 1.2, step 3.1, step 6.1, step 8.2]

10.1 Since $\beta_j=u_j^{p^{d_j}}$ and $q=p^{e}$ with $d_j\le e$ by step 7.1, one has $\beta_j^{p^{e-d_j}}=u_j^{p^{e}}=\gamma_j$; since $\varphi_{j-1}$ fixes $F$ pointwise and $\gamma_j\in F$ by step 2.1, step 9.1 gives
$$ \varphi_{j-1}(\beta_j)^{p^{e-d_j}}=\varphi_{j-1}(\beta_j^{p^{e-d_j}})=\varphi_{j-1}(\gamma_j)=\gamma_j=W_j^{p^{e}}=(W_j^{p^{d_j}})^{p^{e-d_j}}, $$
and injectivity of the $(e-d_j)$-fold Frobenius power on $\Omega$ gives $\varphi_{j-1}(\beta_j)=W_j^{p^{d_j}}$: that is, $W_j$ is a root in $\Omega$ of the transported polynomial $\sigma_*(m_j)=T^{p^{d_j}}-\varphi_{j-1}(\beta_j)$, where $\sigma:=\varphi_{j-1}$ is regarded as an isomorphism $F_{j-1}\to\varphi_{j-1}(F_{j-1})$. [L6, step 2.1, step 7.1, step 8.1, step 9.1]

11.1 Applying [L10] to $\sigma:=\varphi_{j-1}$, to the monic irreducible $m_j\in F_{j-1}[T]$ of step 8.1, to the root $u_j$ of $m_j$ in the extension $F_j/F_{j-1}$, and to the root $W_j$ of $\sigma_*(m_j)$ in the extension $\Omega/\varphi_{j-1}(F_{j-1})$, we obtain a field isomorphism $F_j\to\varphi_{j-1}(F_{j-1})(W_j)\subseteq\Omega$ extending $\varphi_{j-1}$ and sending $u_j\mapsto W_j$; viewed as a map into $\Omega$ it is an injective field homomorphism $\varphi_j$ fixing $F$ pointwise. [L10, step 6.2, step 8.1, step 10.1]

12.1 Steps 5.2, 6.2 and 11.1 give, by induction on $j=0,1,\ldots,r$, injective field homomorphisms $\varphi_j:F(u_1,\ldots,u_j)\to\Omega$ fixing $F$ pointwise; in particular $\varphi_r:L\to\Omega$ is an embedding of $L$ over $F$. [step 5.2, step 6.2, step 11.1]

13.1 By step 6.1 the field $\Omega$ equals $K'(t_1,\ldots,t_d)$ with $t_i^{q}=x_i$; writing $x_i^{1/q}:=t_i$, this subfield is $K'(x_1^{1/q},\ldots,x_d^{1/q})$, and $K'/K$ is finite purely inseparable by step 5.1. Together with step 12.1 this exhibits the required embedding of $L$ over $F$ into $K'(x_1^{1/q},\ldots,x_d^{1/q})$, so the lemma is proved. [step 5.1, step 6.1, step 12.1] ∎
