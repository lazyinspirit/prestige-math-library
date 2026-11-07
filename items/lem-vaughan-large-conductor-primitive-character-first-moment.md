---
id: lem-vaughan-large-conductor-primitive-character-first-moment
kind: lemma
title: "Primitive-character first moment above a conductor cutoff via Vaughan decomposition"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - thm-vaughan-identity-for-von-mangoldt-sums
  - thm-polya-vinogradov-partial-sum-bound
  - lem-primitive-gauss-sum-twist
  - thm-primitive-gauss-sum-norm
  - thm-dirichlet-character-orthogonality
  - thm-additive-large-sieve-inequality
  - thm-cauchy-schwarz-finite
  - thm-truncated-perron-formula
  - thm-fundamental-theorem-of-arithmetic
  - thm-von-mangoldt-divisor-sum-identity
  - def-divisor-counting-function
  - def-von-mangoldt-function
  - def-number-theoretic-mobius-function
  - def-dirichlet-character-von-mangoldt-sum
  - def-natural-logarithm
  - thm-logarithm-derivative-and-integral
  - thm-logarithm-slower-than-every-positive-power
  - lem-dirichlet-character-values
  - def-primitive-dirichlet-character-and-conductor
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Terence Tao, 254A Notes 3: The large sieve and the Bombieri–Vinogradov theorem"
      url: "https://terrytao.wordpress.com/2015/01/10/254a-notes-3-the-large-sieve-and-the-bombieri-vinogradov-theorem/"
      locator: "Theorems 16–17 and Vaughan Lemma 18. The precise logarithm ledger and finite-Perron hyperbola completion here are reconstructed locally."
    - title: "Kiran S. Kedlaya, Notes on Analytic Number Theory, Chapter 18"
      url: "https://kskedlaya.org/ant/chap-bombieri2.html"
      locator: "Theorem 18.3 bilinear character-sum mechanism; no omitted Type-I or short-interval assertion is imported."
---

## Statement

Write $\psi(x,\chi)=\sum_{n\le x}\Lambda(n)\chi(n)$, with full von Mangoldt weight at the endpoint. Let $x\ge3$, $2\le R\le Q\le\sqrt x$, and let $U,V\ge2$ satisfy $UV\le x$. Then, with an absolute implied constant,
$$\sum_{R<r\le Q}\frac1{\varphi(r)}\sum_{\substack{\chi\bmod r\\\chi\ \mathrm{primitive}}}|\psi(x,\chi)|\ll\left(\frac{x}{R}+Q\sqrt x+\frac{x}{\sqrt U}+\frac{x}{\sqrt V}\right)(\log(2x))^{9/2}+UVQ^{3/2}(\log(2x))^2.$$
The modulus sum is over integers. There is no maximum over endpoints and no choice axiom is assumed.

## Facts & Assumptions

**Given:** The parameters and full-weighted endpoint convention in the Statement; all sums over integer variables are finite.

[F1] Vaughan's finite identity holds for $n>V$ ([[thm-vaughan-identity-for-von-mangoldt-sums]]). For a primitive nonprincipal character modulo $r\ge3$, every initial character sum is $O(\sqrt r\log r)$ ([[thm-polya-vinogradov-partial-sum-bound]]).

[F2] Primitive Gauss sums obey the twist identity and have squared modulus $r$ ([[lem-primitive-gauss-sum-twist]], [[thm-primitive-gauss-sum-norm]]). Unit-character orthogonality holds, and there are $\varphi(r)$ characters modulo $r$, by evaluating its first relation at the unit $1$ ([[thm-dirichlet-character-orthogonality]]). Character values have modulus at most one; the only primitive principal character has conductor one ([[lem-dirichlet-character-values]], [[def-primitive-dirichlet-character-and-conductor]]).

[F3] For a finite $\delta$-separated set of frequencies, the additive large-sieve constant on $D$ consecutive integers is at most $\delta^{-1}+4\pi D$ ([[thm-additive-large-sieve-inequality]]). Cauchy–Schwarz holds for finite lists of real nonnegative numbers, including the absolute values used below ([[thm-cauchy-schwarz-finite]]).

[F4] Truncated Perron inversion holds for every absolutely convergent Dirichlet series on $\Re s=c>0$, with its explicit two-branch kernel error and starred endpoint ([[thm-truncated-perron-formula]]). In particular it applies to finite Dirichlet polynomials.

[F5] The divisor function counts positive divisors, $|\mu(n)|\le1$, $0\le\Lambda(n)\le\log n$, and $\sum_{d\mid n}\Lambda(d)=\log n$ ([[def-divisor-counting-function]], [[def-number-theoretic-mobius-function]], [[def-von-mangoldt-function]], [[thm-von-mangoldt-divisor-sum-identity]]). Every positive integer has its unique finite prime factorization ([[thm-fundamental-theorem-of-arithmetic]]). The sharp twisted sum uses these weights ([[def-dirichlet-character-von-mangoldt-sum]]).

[F6] $\int_1^Ydu/u=\log Y$, so $\sum_{n\le Y}1/n\le1+\log Y$ for $Y\ge1$; fixed logarithmic powers are dominated by every positive power of $Y$ ([[def-natural-logarithm]], [[thm-logarithm-derivative-and-integral]], [[thm-logarithm-slower-than-every-positive-power]]).

## Proof

**Proof technique:** retain the Gauss/Bessel weight, split Vaughan sums, and sum each dyadic term separately.

1.1 Put $L=\log(2x)$ and $X=\lfloor x\rfloor+1/2$, so $X\asymp x$ and $\psi(x,\chi)=\psi(X,\chi)$. For a finite sequence $z_n$ on $D$ consecutive integers, the conjugated Gauss identity [F2] gives $\chi(n)=\overline{\tau(\chi)}^{-1}\sum_{a\bmod r}\overline{\chi(a)}e(-an/r)$. Sum its squared finite linear combination over primitive characters and enlarge to all characters. Orthogonality [F2] yields $$\sum_{\chi\bmod r}^{*}\left|\sum_nz_n\chi(n)\right|^2\le\frac{\varphi(r)}r\sum_{a\bmod r}^{*}\left|\sum_nz_ne(-an/r)\right|^2.$$ Multiply by $r/\varphi(r)$ before summing in $r$. Reduced fractions with $r\le\lceil2P\rceil$ are distinct and separated modulo one by at least $\lceil2P\rceil^{-2}$: a nonintegral difference has a nonzero integer numerator divided by the product of the denominators. As $P\ge2$, $\lceil2P\rceil\le3P$. Apply [F3] to obtain $$\sum_{P<r\le2P}\frac r{\varphi(r)}\sum_{\chi\bmod r}^{*}\left|\sum_nz_n\chi(n)\right|^2\ll(P^2+D)\sum_n|z_n|^2.$$ This proves the needed weight by a finite calculation, not by strengthening the public multiplicative large-sieve Statement. [F2, F3, given, algebra]

1.2 Define $a_m=\sum_{d\mid m,d>U}\mu(d)$ for $m\le X$ and $0$ otherwise, and $b_n=\Lambda(n)\mathbf1_{V<n\le X}$. Then $a_m=0$ for $m\le U$ and $|a_m|\le\tau(m)$. For each positive integer $k$, ordered pairs of divisors $d,e\mid k$ inject into ordered quadruples of product $k$: use $(\gcd(d,e),d/\gcd(d,e),e/\gcd(d,e),k/\operatorname{lcm}(d,e))$, with inverse $d=\text{first}\cdot\text{second}$ and $e=\text{first}\cdot\text{third}$. Integrality and the product identity follow prime by prime from [F5]. Thus $\tau(k)^2\le\tau_4(k)$, where $\tau_4$ counts quadruple factors, and $$\sum_{k\le Y}\tau(k)^2\le\sum_{abc\le Y}\left\lfloor\frac Y{abc}\right\rfloor\le Y\left(\sum_{j\le Y}\frac1j\right)^3\ll Y(\log(2Y))^3.$$ Consequently on a dyadic rectangle $M<m\le2M$, $N<n\le2N$, the masked coefficient norms satisfy $\|a\|_2^2\ll ML^3$ and $\|b\|_2^2\ll NL^2$, provided the rectangle contributes below $X$; in particular $\|a\|_2\|b\|_2\ll\sqrt{MN}L^{5/2}$. [F3, F5, F6, given, construct, algebra]

2.1 Vaughan's identity [F1] gives the sum of four contributions to $\psi(X,\chi)$: the small term $\sum_{n\le\min(V,X)}\Lambda(n)\chi(n)$; $\sum_{d\le U}\mu(d)\chi(d)\sum_{l\le X/d}\chi(l)\log l$; the negative of $\sum_{d\le UV}c_d\chi(d)\sum_{l\le X/d}\chi(l)$, with $c_d=\sum_{bc=d,b\le U,c\le V}\mu(b)\Lambda(c)$; and $\sum_{mn\le X}a_mb_n\chi(mn)$. The identity also holds at $n\le V$ after adding the small term: its third contribution is zero there, and its first two convolutions cancel because $\sum_{c\mid n/b,c\le V}\Lambda(c)=\log(n/b)$. By [F5], $|c_d|\le\log d$. All these identities are finite, with full weighting at the original endpoint. [F1, F5, step 1.2, algebra]

2.2 Fix a dyadic rectangle and a real $t$. For $\delta=1/\log(2X)$, let $A_\chi(t)=\sum_{M<m\le2M}a_m m^{-\delta-it}\chi(m)$ and define $B_\chi(t)$ similarly. These factors have coefficient norms no larger than those in step 1.2. Weighted Cauchy–Schwarz [F3] and step 1.1, using $1/r\le1/P$, show $$\sum_{P<r\le2P}\frac1{\varphi(r)}\sum_\chi^{*}|A_\chi(t)B_\chi(t)|\ll\frac{\sqrt{(P^2+M)(P^2+N)}}P\|a\|_2\|b\|_2\ll\left(P\sqrt{MN}+\frac{MN}P+M\sqrt N+N\sqrt M\right)L^{5/2}.$$ The constants are independent of $t$, the rectangle and all cutoffs. [F2, F3, step 1.1, step 1.2, algebra]

3.1 Every character with $r>R\ge2$ in the sum is nonprincipal and $r\ge3$ by [F2]. The initial-sum bound [F1], and finite summation by parts with the increasing weight $\log l$, give $|\sum_{l\le Y}\chi(l)\log l|\ll\sqrt r\log(2r)\log(2x)$ for $Y\le X$ (the difference between $X$ and $x$ changes only absolute constants). The small term in step 2.1 is bounded trivially by $V\log(2V)$, using [F5], rather than by summation by parts on $\Lambda$. Thus the two Type-I sums and small term are bounded together by $CUV\sqrt r L^2$: use $\sum_{d\le UV}|c_d|\le UV\log(UV)$ and $U\le UV$. Since the number of primitive characters is at most $\varphi(r)$, their total weighted contribution is $$\ll UVL^2\sum_{r\le Q}\sqrt r\ll UVQ^{3/2}L^2.$$ [F1, F2, F5, F6, step 2.1, algebra]

3.2 Partition $m,n$ into dyadic intervals $(M,2M],(N,2N]$. A contributing rectangle has $MN<X$, $M>U/2$, $N>V/2$ and $M,N\le X$; there are $O(L^2)$ rectangles. Apply [F4] to its finite product polynomial at $\Re s=\delta$ and height $H=(2X)^6$. Every product $mn$ is an integer at distance at least $1/2$ from $X$, and $mn\le4X$, so $|\log(X/(mn))|\ge1/(8X)$. The kernel error per product is $O(X/H)$, while $\sum|a_mb_n|\ll MN L^{5/2}\le XL^{5/2}$ by finite Cauchy–Schwarz and step 1.2. After summing the rectangles and character weights, the total error is $O(QX^2L^{9/2}/H)=O(1)$; here $Q\le\sqrt x$ and [F6] bounds the fixed log power. The remaining integral has $$X^\delta\int_{-H}^{H}|\delta+it|^{-1}dt\ll L.$$ Therefore step 2.2, multiplied by this single factor $L$, bounds the truncated rectangle contribution. This finite Perron step supplies the entire hyperbola boundary; no short-interval divisor estimate or endpoint supremum is used. [F2, F3, F4, F6, step 1.2, step 2.1, step 2.2, algebra]

4.1 Sum the four terms of step 2.2 separately over rectangles before summing moduli. For fixed $M$, the dyadic $N$-sums give $\sum\sqrt{MN}\ll\sqrt X$ and $\sum MN\ll X$; there are $O(L)$ possible $M$. For $M\sqrt N$, fix $N$: the geometric sum over $M<X/N$ is $O(X/N)$, and the remaining dyadic sum of $N^{-1/2}$ for $N>V/2$ is $O(V^{-1/2})$. The fourth term is symmetric. Thus $$\sum\sqrt{MN}\ll\sqrt X L,\qquad\sum MN\ll XL,\qquad\sum M\sqrt N\ll X/\sqrt V,\qquad\sum N\sqrt M\ll X/\sqrt U.$$ Including the $L$ from Perron, the contribution for ONE conductor block is consequently $$\ll(P\sqrt X+X/P)L^{9/2}+X(U^{-1/2}+V^{-1/2})L^{7/2}.$$ The product-boundary logarithm belongs to the first pair only. [F6, step 2.2, step 3.2, algebra]

5.1 Cover $R<r\le Q$ by the disjoint blocks $P<r\le\min(2P,Q)$, $P=R,2R,\ldots$. The sums of $P$ and $1/P$ are $O(Q)$ and $O(1/R)$, respectively. There are $O(\log(2Q/R))=O(L)$ blocks, since $Q\le\sqrt x$. Thus the first two terms in step 4.1 acquire only geometric conductor sums, while each of its last two terms acquires this one multiplicity factor $L$. The Type-II total is $$\ll(Q\sqrt X+X/R+X/\sqrt U+X/\sqrt V)L^{9/2}+O(1).$$ This keeps the rectangle logarithm and conductor logarithm in their respective terms rather than omitting one after a coarse common estimate. [F6, step 4.1, algebra]

6.1 Since $X\asymp x$ and $x/R\ge\sqrt x\ge1$, the $O(1)$ term is absorbed into the displayed bound. Add the Type-I estimate from step 3.1 to step 5.1 and use the exact decomposition in step 2.1. This proves the Statement. If $R=Q$ the modulus sum is empty and the same bound is immediate. [step 2.1, step 3.1, step 5.1, given, algebra] ∎

## Source notes

The Statement is an adapted quantitative Vaughan/large-sieve first-moment bound: its explicit cutoff and logarithm exponents are derived in this local proof, not quoted as an exact theorem of Tao or Kedlaya. The finite Perron completion replaces their different boundary treatments. No external estimate is imported.
