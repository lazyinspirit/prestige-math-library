---
id: "lem-ag-finite-field-extension-separable-factorization"
kind: "lemma"
title: "Separable generation after finite purely inseparable extensions"
status: draft
origin: "pipeline"
deps: ["def-ag-separating-transcendence-basis", "def-algebraic-and-transcendental-elements", "lem-maximal-algebraically-independent-subset-is-a-transcendence-basis", "thm-finitely-generated-algebraic-extensions-are-finite", "def-finitely-generated-field-extension", "def-separable-elements-and-separable-extensions", "def-separable-closure-in-an-algebraic-extension", "thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure", "thm-purely-inseparable-extension-characterizations", "cor-degree-factors-into-separable-and-inseparable-degrees", "thm-separable-degree-is-the-degree-of-the-separable-closure", "lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power", "def-repeated-root-and-separable-polynomial", "thm-polynomial-is-separable-iff-coprime-to-its-derivative", "thm-evaluation-kernel-and-minimal-polynomial", "thm-binomial-theorem-over-a-commutative-ring", "lem-prime-divides-intermediate-binomial-coefficients", "thm-pure-inseparability-is-transitive-and-stable-under-composita", "thm-tower-law-for-finite-field-extensions", "def-perfect-field", "thm-perfect-field-characterizations", "cor-fields-of-characteristic-zero-and-finite-fields-are-perfect", "thm-ag-separating-transcendence-basis-perfect-field", "def-axiom-of-choice"]
proof_strategy: "direct"
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Stacks Algebra 10.42.4 (tag 04KM)"
      url: "https://stacks.math.columbia.edu/download/algebra.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $K/k$ be a finitely
generated field extension ([[def-finitely-generated-field-extension]]) whose
characteristic is $p>0$. There are finite purely inseparable extensions $k'/k$
and $K'/K$ fitting into a commutative square of field embeddings
$$\begin{array}{ccc} k &\longrightarrow& K\\ \downarrow && \downarrow\\ k'&\longrightarrow&K' \end{array}$$
such that $K'/k'$ is separably generated
([[def-ag-separating-transcendence-basis]] for the separability terminology). No
perfectness of $k$ is assumed.

In characteristic $0$ the same conclusion holds with $k'=k$ and $K'=K$, since a
finitely generated extension of a perfect field is separably generated; the
statement above is the positive-characteristic case, where $K'/K$ and $k'/k$ may
both be nontrivial.

## Facts & Assumptions

**Given:** A finitely generated field extension $K/k$ of characteristic $p>0$ and the Axiom of Choice.

[F1] [[def-ag-separating-transcendence-basis]]: for a finitely generated extension $K/k$, a finite tuple $t_1,\dots,t_r$ is a separating transcendence basis when it is a transcendence basis and $K/k(t_1,\dots,t_r)$ is finite separable; $K/k$ is separably generated when it admits such a tuple.

[F2] [[def-algebraic-and-transcendental-elements]]: an element is algebraic over a subfield when it satisfies a nonzero polynomial over it, transcendental otherwise, and a set is algebraically independent when it satisfies no nonzero polynomial relation.

[F3] [[lem-maximal-algebraically-independent-subset-is-a-transcendence-basis]]: an algebraically independent subset maximal for inclusion is a transcendence basis.

[F4] [[thm-finitely-generated-algebraic-extensions-are-finite]]: a finitely generated algebraic field extension is finite.

[F5] [[def-separable-elements-and-separable-extensions]]: $\alpha$ is separable over $F$ when it is algebraic with separable minimal polynomial, and $K/F$ is separable when every element of $K$ is separable over $F$.

[F6] [[def-separable-closure-in-an-algebraic-extension]]: for algebraic $K/F$, the separable closure $K_s=\{a\in K:a\text{ separable over }F\}$ is the largest intermediate field separable over $F$.

[F7] [[thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure]]: $K/K_s$ is purely inseparable.

[F8] [[thm-purely-inseparable-extension-characterizations]]: for algebraic $K/F$ of characteristic $p$, $K/F$ is purely inseparable if and only if every $\alpha\in K$ has $\alpha^{p^e}\in F$ for some $e\ge0$; a finite extension is purely inseparable exactly when $[K:F]_s=1$.

[F9] [[cor-degree-factors-into-separable-and-inseparable-degrees]]: $[K:F]=[K:F]_s[K:F]_i$ for finite $K/F$, and $[K:F]_i$ is a power of $p$ in characteristic $p$.

[F10] [[thm-separable-degree-is-the-degree-of-the-separable-closure]]: $[K:F]_s=[K_s:F]$ for finite $K/F$.

[F11] [[lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power]]: if $F$ has characteristic $p>0$ and $a\in F$ is not a $p$-th power, then $x^{p^n}-a$ is irreducible in $F[x]$ for every $n\ge1$.

[F12] [[def-repeated-root-and-separable-polynomial]]: a polynomial is separable over $F$ when it has no repeated root in any extension field.

[F13] [[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]: $0\ne f\in F[x]$ is separable if and only if $\gcd(f,f')=1$.

[F14] [[thm-evaluation-kernel-and-minimal-polynomial]]: $f(a)=0$ if and only if the minimal polynomial $m_a$ of $a$ over $F$ divides $f$.

[F15] [[thm-binomial-theorem-over-a-commutative-ring]]: $(u+v)^m=\sum_k\binom mk u^kv^{m-k}$ in every commutative ring.

[F16] [[lem-prime-divides-intermediate-binomial-coefficients]]: $p\mid\binom pk$ for $0<k<p$, so in characteristic $p$ the binomial theorem gives $(u+v)^p=u^p+v^p$ and, more generally, $(\sum_iu_i)^p=\sum_iu_i^p$.

[F17] [[thm-pure-inseparability-is-transitive-and-stable-under-composita]]: purely inseparable extensions compose, and the compositum of purely inseparable subextensions of a common algebraic extension is purely inseparable over the base.

[F18] [[thm-tower-law-for-finite-field-extensions]]: for $F\subseteq K\subseteq L$ with $K/F$ and $L/K$ finite, $[L:F]=[L:K][K:F]$.

[F19] [[def-perfect-field]], [[thm-perfect-field-characterizations]] and [[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]: a field of characteristic $0$ is perfect, and in characteristic $p>0$ perfectness is equivalent to every element being a $p$-th power.

[F20] [[thm-ag-separating-transcendence-basis-perfect-field]]: every finitely generated extension of a perfect field is separably generated.

[F21] [[def-finitely-generated-field-extension]]: $K/k$ is finitely generated when $K=k(\alpha_1,\dots,\alpha_n)$ for finitely many elements.



## Proof

1.1 Reduction and set-up. If the characteristic is $0$, then $k$ is perfect by [F19], so [F20] makes $K/k$ separably generated and $k'=k$, $K'=K$ are finite purely inseparable over their bases by [F8] (in characteristic $0$ the only purely inseparable extension is the trivial one). Assume from now on that the characteristic is $p>0$. Fix a finite generating set $\alpha_1,\dots,\alpha_n$ of $K$ over $k$ by [F21] and choose a maximal algebraically independent subset $\{x_1,\dots,x_r\}$ of it, which is a transcendence basis of $K/k$ by [F3, F2]. Put $F_0:=k(x_1,\dots,x_r)$; every $\alpha_i$ is algebraic over $F_0$ by maximality, so $K/F_0$ is finitely generated algebraic, hence finite by [F4]. Let $K_s$ be the separable closure of $F_0$ in $K$; then $K_s/F_0$ is finite separable by [F6, F4] and $K/K_s$ is purely inseparable by [F7], finite by [F18], so that $d:=\log_p[K:K_s]$ is a nonnegative integer by [F9, F8]. [F2, F3, F4, F6, F7, F8, F9, F18, F19, F20, F21, F10]

1.2 An element of $K$ with a $p$-th root of the right shape. Assume $d\ge1$, so $K\ne K_s$. By [F8] and [F7] applied to an element of $K\smallsetminus K_s$ there is $\beta_0\in K$ and a minimal $e\ge1$ with $\beta_0^{p^e}\in K_s$; then $\beta:=\beta_0^{p^{e-1}}$ satisfies $\beta\notin K_s$ by minimality of $e$ and $\alpha:=\beta^p\in K_s$. Since $\alpha\in K_s$ is separable over $F_0$ by [F5, F6], its minimal polynomial $P\in F_0[T]$ over $F_0$ is separable by [F12, F5], hence $\gcd(P,P')=1$ by [F13] and $P$ has pairwise distinct roots; write $P=\sum_{i}a_iT^i$ with $a_i\in F_0=k(x_1,\dots,x_r)$. [F5, F6, F7, F8, F12, F13]

1.3 A finite purely inseparable base change making the coefficients $p$-th powers. Write each $a_i=f_i/g_i$ with $f_i,g_i\in k[x_1,\dots,x_r]$ and $g_i\ne0$, and let $C\subseteq k$ be the finite set of all coefficients occurring in the finitely many polynomials $f_i,g_i$. Choose an algebraic closure $\Omega$ of $K$ and inside it put $k':=k(c^{1/p}:c\in C)$, so that $k'/k$ is finite purely inseparable by [F17, F8]; put $F:=k'(x_1^{1/p},\dots,x_r^{1/p})\subseteq\Omega$, the compositum of $k'$ and $F_0$. Each monomial $x^m$ with $m\in\mathbb N^r$ is a $p$-th power in $F$: writing $m=pm'+m''$ with $m''\in\{0,\dots,p-1\}^r$ one has $x^m=(x^{m'}(x^{1/p})^{m''})^p$. Each $c\in C$ equals $(c^{1/p})^p$, so every $f_i$ and $g_i$ is a finite sum of $p$-th powers, hence a $p$-th power by [F16], and therefore each $a_i=f_i/g_i$ is a $p$-th power in $F$. Write $a_i=c_i^p$ with $c_i\in F$ and put $R:=\sum_ic_iT^i\in F[T]$. [F8, F16, F17]

1.4 The $p$-th root of $\alpha$ is separable. By [F15] and [F16], $P(T^p)=\sum_ia_iT^{pi}=\sum_ic_i^pT^{pi}=(\sum_ic_iT^i)^p=R(T)^p$ in $F[T]$. Let $\alpha_1,\dots,\alpha_n\in\Omega$ be the distinct roots of $P$ (so $n=\deg P=\deg R$, and $n\ge1$), and for each $j$ choose $\gamma_j\in\Omega$ with $\gamma_j^p=\alpha_j$, which exists because $\Omega$ is algebraically closed. Then $R(\gamma_j)^p=P(\gamma_j^p)=P(\alpha_j)=0$, so $R(\gamma_j)=0$, and the $\gamma_j$ are distinct because $\gamma_j^p=\alpha_j$ are. Hence $R$ has $\deg R$ distinct roots in $\Omega$, so $R$ is separable over $F$ by [F12] and [F13] applied to its distinct-root factorisation. Since $\alpha=\beta^p$ is a root of $P$, the element $\beta$ satisfies $R(\beta)^p=P(\beta^p)=P(\alpha)=0$, hence $R(\beta)=0$; and $\beta\in L:=K\cdot F\subseteq\Omega$, a compositum which is finitely generated over $k'$. As $R$ is separable with the root $\beta$, the minimal polynomial of $\beta$ over $F$ divides $R$ by [F14] and is separable, so $\beta$ is separable over $F$ by [F5] and lies in the separable closure $L_s$ of $F$ in $L$ by [F6]. [F5, F6, F12, F13, F14, F15, F16]

2.1 The case $d=0$. If $d=0$ then $[K:K_s]=1$, so $K=K_s$ and $K/F_0$ is finite separable by [F6]; then $x_1,\dots,x_r$ is a separating transcendence basis of $K/k$ by [F1], and with $k'=k$, $K'=K$ the conclusion holds trivially. [F1, F6, step 1.1]

2.2 The separable closure of $F$ in $L$ and the degree drop. $L/K$ is finite purely inseparable and $F/F_0$ is purely inseparable. First, $K_sF/F$ is separable: $K_s/F_0$ is finite separable by step 1.1, and a compositum of a separable algebraic extension with a further extension is separable because the minimal polynomial over the larger field divides the separable minimal polynomial over the smaller one by [F14]. Second, $L/K_sF$ is purely inseparable by [F17]. Hence $L_s=K_sF$: one inclusion holds because $K_sF/F$ is separable and $L_s$ is the largest separable intermediate field by [F6], and for the other, an element $\gamma\in L_s$ is separable over $F$ and has $\gamma^{p^e}\in K_sF$ for some $e\ge0$ by [F8], so it is simultaneously separable and purely inseparable over $K_sF$ and therefore already lies in $K_sF$. Since $\beta\in L_s$ and $\beta\notin K_s$, the field $K_s(\beta)$ satisfies $[K_s(\beta):K_s]=p$: the polynomial $T^p-\alpha\in K_s[T]$ vanishes at $\beta$ while $\alpha$ is not a $p$-th power in $K_s$ (a relation $\alpha=\gamma^p$ would give $(\beta/\gamma)^p=1$, hence $\beta=\gamma$ by [F16]), so $T^p-\alpha$ is irreducible by [F11] and is the minimal polynomial of $\beta$ over $K_s$ by [F14]. Put $E:=K\cap L_s$, an intermediate field of $K/K_s$ containing $K_s(\beta)$, and choose $\theta_1,\dots,\theta_m\in K$ with $K=E(\theta_1,\dots,\theta_m)$, possible since $K/E$ is finite by [F18]. Then $L=L_s\cdot K$ equals $L_s(\theta_1,\dots,\theta_m)$, and for each $i$ the minimal polynomial of $\theta_i$ over $L_s(\theta_1,\dots,\theta_{i-1})$ divides its minimal polynomial over $E(\theta_1,\dots,\theta_{i-1})$ by [F14], so those two extensions satisfy the degree inequality $[L_s(\theta_1,\dots,\theta_i):L_s(\theta_1,\dots,\theta_{i-1})]\le[E(\theta_1,\dots,\theta_i):E(\theta_1,\dots,\theta_{i-1})]$; multiplying over $i$ and applying [F18] twice yields $[L:L_s]\le[K:E]\le[K:K_s(\beta)]=[K:K_s]/p$, the last equality being [F18] for the tower $K_s\subseteq K_s(\beta)\subseteq K$. [F6, F8, F11, F14, F16, F17, F18, step 1.4]

3.1 Induction. The extension $L/k'$ is finitely generated by [F21] and has characteristic $p$, and by step 2.2 its invariant $\log_p[L:L_s]$ is strictly smaller than $d=\log_p[K:K_s]$. Applying the induction hypothesis (on the nonnegative integer $d$, with the same statement for the pair $L/k'$) produces finite purely inseparable extensions $k''/k'$ and $L'/L$ with $L'/k''$ separably generated. Then $k''/k$ is finite purely inseparable by [F17, F9] and $L'/K$ is finite purely inseparable by [F17] since $L/K$ is, so $k''$ and $L'$ satisfy the conclusion for $K/k$. The base case $d=0$ of the induction is step 2.1, so the assertion holds for every $d\ge0$. [F8, F9, F17, F21, step 2.1, step 2.2]

4.1 Conclusion. In characteristic $p>0$ steps 1.2–1.4, 2.1, 2.2 and 3.1 produce the required finite purely inseparable $k'/k$ and $K'/K$ with $K'/k'$ separably generated, the induction being on the integer $d=\log_p[K:K_s]$ of step 1.1; the characteristic $0$ case is step 1.1. ∎
