---
id: lem-existence-of-a-smooth-inhomogeneous-dyadic-frequency-partition
kind: lemma
title: "Existence of a smooth inhomogeneous dyadic frequency partition"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 0
deps: [def-the-standard-smooth-step-function, thm-the-standard-flat-function-is-smooth-and-flat-at-zero, def-ck-and-multi-index-notation-in-several-variables, def-ck-euclidean-maps-and-diffeomorphisms, def-schwartz-space-and-its-seminorms, thm-chain-rule-for-total-derivatives, def-support-and-compactly-supported-riemann-integral-in-rn]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Terence Tao, Math 247A Lecture Notes 4 (UCLA, Fall 2006)"
      url: "https://www.math.ucla.edu/~tao/247a.1.06f/notes4.pdf"
      locator: "§5, the bump functions $\\psi_j$ adapted to the annuli $|\\xi|\\sim2^j$ and the proof of Proposition 5.3, printed pp. 23-24"
    - title: "Loukas Grafakos, Classical Fourier Analysis, 3rd ed. (Springer GTM 249)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math638.F20/Grafakos_Classical_Fourier_Analysis.pdf"
      locator: "Definition 6.1.1 and the compactly supported annular cutoffs used in Theorem 6.1.2, printed pp. 420-421"
    - title: "Mark Williams, Notes on Harmonic Analysis (January 11, 2022)"
      url: "https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf"
      locator: "§6.2, the nonhomogeneous partition $\\hat\\Phi(\\xi)+\\sum_{j\\ge1}\\hat\\psi(2^{-j}\\xi)=1$ of (6.3) and Remark 6.7(a), printed pp. 24, 26"
---

## Statement

For every $n\ge1$ there is a radial function $\psi\in C_c^\infty(\mathbb R^n)$
with $0\le\psi\le1$, $\psi(\xi)=1$ for $|\xi|\le1$, $\psi(\xi)=0$ for
$|\xi|\ge3/2$, and $\operatorname{supp}\psi\subset\{|\xi|<2\}$. For any radial
$\psi\in C_c^\infty(\mathbb R^n)$ with $0\le\psi\le1$, $\psi=1$ on
$|\xi|\le1$ and $\operatorname{supp}\psi\subset\{|\xi|<2\}$ set
$\varphi_0:=\psi$ and
$\varphi_j(\xi):=\psi(2^{-j}\xi)-\psi(2^{-(j-1)}\xi)$ for $j\ge1$. Then each
$\varphi_j$ is radial, real-valued, lies in $C_c^\infty(\mathbb R^n)$, and:

1. $\sum_{j\ge0}\varphi_j(\xi)=1$ for every $\xi$, the sum being locally finite;
2. $\operatorname{supp}\varphi_0\subset\{|\xi|\le2\}$ and, for $j\ge1$,
   $\operatorname{supp}\varphi_j\subset\{2^{j-1}\le|\xi|\le2^{j+1}\}$;
3. $\varphi_j\ge0$ for every $j$, at every $\xi$ at most three of the functions
   $\varphi_j$ are nonzero, and $\tfrac13\le\sum_{j\ge0}\varphi_j(\xi)^2\le1$;
4. for every multi-index $\alpha$ there is $C_\alpha=C_\alpha(n,\psi)<\infty$
   with $|\partial^\alpha\varphi_j(\xi)|\le C_\alpha2^{-j|\alpha|}$ for $j\ge1$
   and all $\xi$, and $|\partial^\alpha\varphi_0(\xi)|\le C_\alpha$ for all
   $\xi$; consequently
   $|\partial^\alpha\varphi_j(\xi)|\le2^{|\alpha|}C_\alpha|\xi|^{-|\alpha|}$
   for $j\ge1$ and $\xi\ne0$.

## Facts & Assumptions

**Given:** an integer $n\ge1$, Gaussian brackets and multi-indices as in [[def-ck-and-multi-index-notation-in-several-variables]], and the support convention of [[def-support-and-compactly-supported-riemann-integral-in-rn]]. Write $\|f\|_\infty:=\sup_{\xi}|f(\xi)|$ for bounded functions.

[F1] The standard smooth step $\sigma(t):=\beta(t)/(\beta(t)+\beta(1-t))$, with $\beta$ the standard flat function, satisfies $\sigma\in C^\infty(\mathbb R)$, $0\le\sigma\le1$, $\sigma(t)=0$ for $t\le0$ and $\sigma(t)=1$ for $t\ge1$ ([[def-the-standard-smooth-step-function]]); $\beta$ is smooth on $\mathbb R$ ([[thm-the-standard-flat-function-is-smooth-and-flat-at-zero]]).

[F2] If $q:\mathbb R^n\to\mathbb R$ is smooth and $\sigma:\mathbb R\to\mathbb R$ is smooth, then $\sigma\circ q$ is smooth: the chain rule for total derivatives gives the first derivative and iteration gives all higher ones ([[thm-chain-rule-for-total-derivatives]], [[def-ck-euclidean-maps-and-diffeomorphisms]]).

[F3] $C_c^\infty(\mathbb R^n)\subset\mathcal S(\mathbb R^n)$: a compactly supported smooth function has all its derivatives bounded, hence finite seminorms ([[def-schwartz-space-and-its-seminorms]]).

[F4] For $h\in C^\infty(\mathbb R^n)$ and $R>0$ the chain rule ([[thm-chain-rule-for-total-derivatives]]) gives $\partial_i(h(\cdot/R))(\xi)=R^{-1}(\partial_i h)(\xi/R)$. Iterating this identity in the prescribed multi-index order gives $\partial^\beta(h(\cdot/R))(\xi)=R^{-|\beta|}(\partial^\beta h)(\xi/R)$, with $\beta=0$ the identity itself.

## Proof

**Proof technique:** direct.

1.1 Construction. Put $q(\xi):=(9-4|\xi|^2)/5$, a polynomial, and $\psi:=\sigma\circ q$. Then $\psi$ is smooth by [F2], $0\le\psi\le1$ by [F1], and $\psi$ is radial because $q$ depends on $|\xi|$ only. Moreover $q(\xi)\ge1\iff|\xi|^2\le1\iff|\xi|\le1$ and $q(\xi)\le0\iff|\xi|^2\ge9/4\iff|\xi|\ge3/2$, so by [F1] $\psi(\xi)=1$ for $|\xi|\le1$ and $\psi(\xi)=0$ for $|\xi|\ge3/2$. Hence $\operatorname{supp}\psi\subset\{|\xi|\le3/2\}\subset\{|\xi|<2\}$, $\psi$ is compactly supported, and $\psi\in C_c^\infty(\mathbb R^n)\subset\mathcal S$ by [F3]. This proves the existence clause and, since every subsequent step uses only the listed properties ($0\le\psi\le1$, $\psi=1$ on $|\xi|\le1$, $\psi=0$ for $|\xi|\ge3/2$ after the construction, or more generally $\psi$ vanishing for $|\xi|\ge2$ when only $\operatorname{supp}\psi\subset\{|\xi|<2\}$ is assumed), the corresponding clauses for an arbitrary such $\psi$. [F1, F2, F3, algebra]

2.1 The partition identity. Fix $\psi$ as in the statement and define $\varphi_0:=\psi$, $\varphi_j:=\psi(2^{-j}\xi)-\psi(2^{-(j-1)}\xi)$ for $j\ge1$; each $\varphi_j$ is radial and lies in $C_c^\infty(\mathbb R^n)$ as a difference of rescalings of $\psi$. Telescoping gives, for every $N\ge0$ and every $\xi$, $$\sum_{j=0}^{N}\varphi_j(\xi)=\psi(2^{-N}\xi),$$ and $\psi(2^{-N}\xi)\to\psi(0)=1$ as $N\to\infty$ because $\psi$ is continuous and $\psi=1$ on the unit ball. Hence $\sum_{j\ge0}\varphi_j(\xi)=1$ for every $\xi$. The sum is locally finite: if $|\xi|\le R$ and $j\ge1$ with $2^{-(j-1)}R\le1$, then $|2^{-j}\xi|\le|2^{-(j-1)}\xi|\le1$ and both $\psi$ values equal $1$, so $\varphi_j(\xi)=0$; thus only finitely many $j$ with $2^{j-1}<R$ contribute on the ball of radius $R$. [F1, step 1.1, algebra]

3.1 Supports. For $j\ge1$ put $u:=2^{-j}|\xi|$, so that the two arguments have moduli $u$ and $2u$. If $2u\le1$ then both moduli are at most $1$ and both $\psi$ values equal $1$, so $\varphi_j(\xi)=0$; if $u\ge2$ then both moduli are at least $2$ and, since $\operatorname{supp}\psi\subset\{|\xi|<2\}$, both $\psi$ values vanish, so $\varphi_j(\xi)=0$. Therefore $\varphi_j(\xi)\ne0$ forces $2^{j-1}<|\xi|<2^{j+1}$, which proves $\operatorname{supp}\varphi_j\subset\{2^{j-1}\le|\xi|\le2^{j+1}\}$. The case $j=0$ is $\operatorname{supp}\varphi_0=\operatorname{supp}\psi \subset\{|\xi|<2\}\subset\{|\xi|\le2\}$. [step 1.1, step 2.1, F3, algebra]

4.1 Sign and overlap. We claim $\varphi_j\ge0$ for every $j$ and every $\xi$ without any monotonicity hypothesis. For $j=0$ this is $\psi\ge0$. For $j\ge1$ keep $u=2^{-j}|\xi|$: if $u\le1/2$ then both moduli are at most $1$ and $\varphi_j(\xi)=0$; if $1/2<u\le1$ then the smaller modulus $u$ gives $\psi(2^{-j}\xi)=1$ and $\varphi_j(\xi)=1-\psi(2^{-(j-1)}\xi)\in[0,1]$; if $1<u<2$ then the larger modulus $2u$ exceeds $2$, so $\psi(2^{-(j-1)}\xi)=0$ and $\varphi_j(\xi)=\psi(2^{-j}\xi)\in[0,1]$; finally if $u\ge2$ then both moduli are at least $2$ and $\varphi_j(\xi)=0$. Thus every nonzero value lies in $[0,1]$, so $\varphi_j\ge0$ and $\varphi_j^2\le\varphi_j$. Since $\sum_j\varphi_j=1$ by step 2.1, summing the pointwise inequality gives $\sum_j\varphi_j(\xi)^2\le1$. For the lower bound, at most three $\varphi_j$ are nonzero at any fixed $\xi$: by the four cases above, a nonzero value requires $u=2^{-j}|\xi|\in(1/2,2)$, and three consecutive halvings $u,u/2,u/4$ span the factor $4$ while the interval $(1/2,2)$ has multiplicative length exactly $4$, so at most two of the values $2^{-j}|\xi|$ lie in $(1/2,2)$ (in particular at most three). Hence, by Cauchy-Schwarz at the fixed $\xi$, $$1=\Bigl(\sum_{j}\varphi_j(\xi)\Bigr)^2 \le\Bigl(\sum_{j}\mathbf 1_{\varphi_j(\xi)\ne0}\Bigr) \Bigl(\sum_{j}\varphi_j(\xi)^2\Bigr)\le3\sum_{j}\varphi_j(\xi)^2,$$ which gives $\sum_j\varphi_j(\xi)^2\ge1/3$. [step 2.1, step 3.1, algebra]

4.2 Derivative bounds. Fix a multi-index $\alpha$ and put $C_\alpha:=(1+2^{|\alpha|})\|\partial^\alpha\psi\|_\infty<\infty$; the value is finite because $\psi\in C_c^\infty$ has bounded derivatives. For $j\ge1$, [F4] with $R=2^j$ and $h=\psi$ gives $\partial^\alpha\bigl(\psi(2^{-j}\xi)\bigr) =2^{-j|\alpha|}(\partial^\alpha\psi)(2^{-j}\xi)$, and similarly with $R=2^{j-1}$; hence $$|\partial^\alpha\varphi_j(\xi)| \le 2^{-j|\alpha|}\|\partial^\alpha\psi\|_\infty +2^{-(j-1)|\alpha|}\|\partial^\alpha\psi\|_\infty =C_\alpha2^{-j|\alpha|},$$ while $|\partial^\alpha\varphi_0(\xi)|=|\partial^\alpha\psi(\xi)| \le C_\alpha$. On the support of $\varphi_j$ ($j\ge1$) step 3.1 gives $|\xi|\le2^{j+1}$, so $2^{-j|\alpha|}\le2^{|\alpha|}|\xi|^{-|\alpha|}$ and therefore $|\partial^\alpha\varphi_j(\xi)|\le2^{|\alpha|}C_\alpha|\xi|^{-|\alpha|}$ for $\xi\ne0$; off the support the left-hand side is zero. [F3, F4, step 3.1, algebra]

5.1 The four numbered clauses are steps 2.1 (partition), 3.1 (supports), 4.1 (sign, overlap, square sums) and 4.2 (derivative bounds and their consequence), and the existence clause with the strict support is step 1.1. Since steps 2.1 to 4.2 used only the properties $\psi\in C_c^\infty$, $0\le\psi\le1$, $\psi=1$ on $|\xi|\le1$ and $\operatorname{supp}\psi\subset\{|\xi|<2\}$ (the last only through $\psi=0$ for $|\xi|\ge2$), the conclusions hold for every $\psi$ with those properties. [step 1.1, step 2.1, step 3.1, step 4.1, step 4.2] ∎
