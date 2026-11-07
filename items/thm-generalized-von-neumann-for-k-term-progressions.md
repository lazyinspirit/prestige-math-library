---
id: thm-generalized-von-neumann-for-k-term-progressions
kind: theorem
title: "Generalized von Neumann bound for k-term progressions"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
aliases: []
deps: [def-gowers-uniformity-norm-on-finite-cyclic-groups,
       lem-gowers-cauchy-schwarz-inequality,
       def-integers-modulo-n,
       def-addition-and-multiplication-modulo-n,
       thm-integers-modulo-n-basic-algebra,
       lem-prime-not-dividing-is-coprime,
       cor-extended-euclidean-bezout-coefficients,
       thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz,
       lem-of-square-monotone]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§5, Proposition 5.3 and complete proof, printed pp. 497–503; specialize the pseudorandom measure to ν=1 and the coefficients to a translate of 0,…,k−1."
    - title: "Terence Tao, Higher Order Fourier Analysis, AMS Graduate Studies in Mathematics 142 (2012), author's preliminary version"
      url: "https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf"
      locator: "§1.3.3, printed pp. 58–59, Exercise 1.3.23; the large-characteristic generalized von Neumann proof is posed as an exercise and is reconstructed locally."
    - title: "Julia Wolf, Arithmetic and polynomial progressions in the primes [after Gowers, Green, Tao and Ziegler], Astérisque 352 (2013)"
      url: "https://www.numdam.org/item/AST_2013__352__389_0.pdf"
      locator: "§2.2, printed pp. 396–397, Proposition 6 and Proposition 7; the general proof is attributed to prior work and is reconstructed locally."
---

## Statement

Let $k\ge2$ be an integer and let $p>2k$ be prime. Put $G=\mathbb Z/p\mathbb Z$ with addition and multiplication modulo $p$. For $0\le j<k$, let $f_j:G\to\mathbb C$ satisfy $|f_j(x)|\le1$ for every $x\in G$, and define the normalized progression count

$$\Lambda_k(f_0,\ldots,f_{k-1}):=p^{-2}\sum_{x,r\in G}\prod_{j=0}^{k-1}f_j(x+jr),$$

where $x+jr$ is computed in $G$ and the sum includes every pair $(x,r)$, including $r=0$. Then

$$|\Lambda_k(f_0,\ldots,f_{k-1})|\le\min_{0\le j<k}\|f_j\|_{U^{k-1}(G)},$$

where the $U^{k-1}$ norm is the nonnegative $2^{k-1}$-th root of the normalized alternating $(k-1)$-cube average.

## Statement references

[[def-gowers-uniformity-norm-on-finite-cyclic-groups]]

[Green and Tao, §5, Proposition 5.3 and proof](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Tao, *Higher Order Fourier Analysis*, §1.3.3, Exercise 1.3.23](https://terrytao.wordpress.com/wp-content/uploads/2012/12/gsm-142-tao7-higher-book-05june2012.pdf)

[Wolf, §2.2, Propositions 6–7](https://www.numdam.org/item/AST_2013__352__389_0.pdf)

## Facts & Assumptions

**Given:** An integer $k\ge2$, a prime $p>2k$, $G=\mathbb Z/p\mathbb Z$ with modular operations, and functions $f_0,\ldots,f_{k-1}:G\to\mathbb C$ with $|f_j|\le1$.

[F1] For $d\ge1$, $\|f\|_{U^d(G)}^{2^d}$ is the normalized alternating cube average $\mathbb E_{x,h_1,\ldots,h_d}\prod_{\omega\in\{0,1\}^d}\mathcal C^{|\omega|}f(x+\omega\cdot h)$, where conjugation is used for odd $|\omega|$ ([[def-gowers-uniformity-norm-on-finite-cyclic-groups]]).

[F2] The quotient set $\mathbb Z/p\mathbb Z$ consists of congruence classes modulo $p$ ([[def-integers-modulo-n]]).

[F3] The modular operations are $[a]_p+[b]_p=[a+b]_p$ and $[a]_p[b]_p=[ab]_p$ ([[def-addition-and-multiplication-modulo-n]]).

[F4] These operations make $G$ an abelian group under addition and a commutative ring under addition and multiplication ([[thm-integers-modulo-n-basic-algebra]]).

[F5] If $p$ is prime and $p\nmid a$, then $\gcd(p,a)=1$ ([[lem-prime-not-dividing-is-coprime]]).

[F6] For $a\in\mathbb Z$ and $b>0$, the extended Euclidean descent produces integers $u,v$ with $au+bv=\gcd(a,b)$ ([[cor-extended-euclidean-bezout-coefficients]]).

[F7] For complex square-integrable functions on a probability space, $|\mathbb E u\overline v|^2\le(\mathbb E|u|^2)(\mathbb E|v|^2)$; normalized counting measure on any finite set is such a space ([[thm-complex-l-two-inner-product-is-well-defined-and-cauchy-schwarz]]).

[F8] A Gowers cube average of dimension $d$ has absolute value at most the product of the $U^d$ norms at its $2^d$ vertices ([[lem-gowers-cauchy-schwarz-inequality]]).

[F9] For nonnegative reals, squaring is strictly increasing: $0\le a<b$ implies $a^2<b^2$ ([[lem-of-square-monotone]]).

## Proof

1.1 If $k=2$, fix either target index $t\in\{0,1\}$, set $g_0=f_t$ and $g_1=f_{1-t}$, and put $c_1=1$ when $t=0$ and $c_1=-1$ when $t=1$. After the change $x'=x+tr$, the progression average is $\mathbb E_{x',r}g_0(x')g_1(x'+c_1r)$. For each $x'$, the map $r\mapsto x'+c_1r$ is a bijection of $G$ because $c_1=\pm1$, so this average is $(\mathbb E g_0)(\mathbb E g_1)$. The definition gives $\|g_i\|_{U^1}=|\mathbb E g_i|$, and complex Cauchy–Schwarz with the constant function $1$ gives $|\mathbb E g_{1-t}|\le(\mathbb E|g_{1-t}|^2)^{1/2}\le1$. Hence $|\Lambda_2|\le\|f_t\|_{U^1}$ for either target $t$. [given, F1, F3, F4, F7, algebra]

1.2 Now suppose $k\ge3$ and fix an arbitrary target $t\in\{0,\ldots,k-1\}$. Define a permutation by $\sigma(0)=t$, $\sigma(i)=i-1$ for $1\le i\le t$, and $\sigma(i)=i$ for $t<i<k$; put $g_i=f_{\sigma(i)}$ and $c_i=\sigma(i)-t$. Then $c_0=0$, and $c_1,\ldots,c_{k-1}$ are distinct nonzero integers in $[-(k-1),k-1]$. The substitution $x'=x+tr$ and reordering the factors give $\Lambda_k=\mathbb E_{x',r}\prod_{i=0}^{k-1}g_i(x'+c_ir)$, while $g_0=f_t$. Since $p>2k$, none of the $c_i$ is divisible by $p$ and no difference $c_i-c_j$ for $i\ne j$ is divisible by $p$. [given, F2, F3, F4, algebra]

1.3 For every $1\le i<k$, primality and the nondivisibility established in step 1.2 give $\gcd(c_i,p)=1$; the extended Euclidean descent with positive second argument $p$ therefore gives integers $u_i,v_i$ with $c_i u_i+p v_i=1$, so $[u_i]_p$ is the multiplicative inverse of $[c_i]_p$ by the modular multiplication rule. Applying the same argument to each nonzero difference $c_i-c_j$ shows those differences are units as well. [given, F3, F4, F5, F6, step 1.2]

2.1 Put $m=k-1$ and, for $y=(y_1,\ldots,y_m)\in G^m$, define $\phi_i(y):=\sum_{j=1}^{m}(1-c_i c_j^{-1})y_j$ for $0\le i\le m$, where each inverse is the modular inverse supplied by step 1.3. Then $\phi_i(y)=x+c_ir$ for $x=\sum_{j=1}^m y_j$ and $r=-\sum_{j=1}^m c_j^{-1}y_j$, and $\phi_i$ is independent of $y_i$ when $i\ge1$. The linear map $\Phi(y)=(x,r)$ is a uniform cover of $G^2$: fix $y_3,\ldots,y_m$ and a target $(x,r)$. The remaining equations have right sides $s=x-\sum_{j=3}^m y_j$ and $t=-r-\sum_{j=3}^m c_j^{-1}y_j$, so $y_1+y_2=s$ and $c_1^{-1}y_1+c_2^{-1}y_2=t$. By step 1.3, $c_1,c_2,c_2-c_1$ are units, and $c_1^{-1}-c_2^{-1}=c_1^{-1}c_2^{-1}(c_2-c_1)$ is a unit with inverse $c_1c_2(c_2-c_1)^{-1}$. Thus the equations have the unique solution $y_1=(t-c_2^{-1}s)/(c_1^{-1}-c_2^{-1})$ and $y_2=s-y_1$. Every $(x,r)$ has exactly $p^{m-2}$ preimages and $\Lambda_k=J_0$, where $J_0:=\mathbb E_{y\in G^m}\prod_{i=0}^{m}g_i(\phi_i(y))$. [F3, F4, step 1.2, step 1.3, algebra]

2.2 For $0\le d\le m$, let $T_d=\{m-d+1,\ldots,m\}$ (with $T_0=\varnothing$), let $y(S)$ replace $y_j$ by an independent $y'_j$ for $j\in S\subseteq T_d$, and define $J_d:=\mathbb E_{y\in G^m,\,y'\in G^d}\prod_{S\subseteq T_d}\prod_{i=0}^{m-d}\mathcal C^{|S|}g_i(\phi_i(y(S)))$. For $d=0$ this agrees with $J_0=\Lambda_k$ from the definition in step 2.1. [given, F1, step 2.1]

2.3 Fix $d<m$ and put $q=m-d$. Every factor involving $g_q$ is independent of $y_q$, because $\phi_q$ omits that variable, even when the other coordinates have been independently primed. Their full product is therefore independent of $y_q$ and has magnitude at most $1$, since every individual factor has magnitude at most $1$. Removing this factor, write the remaining product as $H(y_q)$ with all other variables fixed. Then $|J_d|\le\mathbb E_{\mathrm{other}}|\mathbb E_{y_q}H(y_q)|$, and complex Cauchy–Schwarz with the constant function $1$ yields $|J_d|^2\le\mathbb E_{\mathrm{other}}|\mathbb E_{y_q}H(y_q)|^2=J_{d+1}$. The equality follows by expanding the square with an independent copy $y'_q$: the unprimed product gives subsets not containing $q$, and its conjugate gives subsets containing $q$, with the required parity $|S|$. This proves the recurrence for every $d<m$. [given, F3, F4, F7, step 2.2, algebra]

3.1 Iterating the recurrence in step 2.3 gives $|J_0|^{2^m}\le J_m$. In $J_m$ only $g_0$ remains, and $\phi_0(y(S))=\sum_jy_j+\sum_{j\in S}(y'_j-y_j)$. For any prescribed $(x,h)\in G^{m+1}$, choose $y_1,\ldots,y_{m-1}$ freely, set $y_m=x-\sum_{j<m}y_j$, and then set $y'_j=y_j+h_j$; thus the map $(y,y')\mapsto(x,h)$ has exactly $p^{m-1}$ preimages. Hence $J_m$ is the alternating $m$-cube average of $g_0$. [F1, step 2.2, step 2.3, algebra]

3.2 The Gowers Cauchy–Schwarz inequality bounds $J_m$ by $\prod_{\omega\in\{0,1\}^m}\|g_0\|_{U^m(G)}=\|g_0\|_{U^m(G)}^{2^m}$; the norm definition gives $J_m\ge0$. Together with steps 2.2–3.1 this yields $|\Lambda_k|^{2^m}\le\|g_0\|_{U^m(G)}^{2^m}$. If $|\Lambda_k|$ were greater than $\|g_0\|_{U^m(G)}$, repeated strict monotonicity of squaring on nonnegative reals would contradict this inequality; hence $|\Lambda_k|\le\|g_0\|_{U^m(G)}=\|f_t\|_{U^{k-1}(G)}$. The target $t$ in step 1.2 was arbitrary, so the bound holds for every $t$ and for their minimum. [F1, F8, F9, step 1.2, step 2.2, step 3.1] ∎
