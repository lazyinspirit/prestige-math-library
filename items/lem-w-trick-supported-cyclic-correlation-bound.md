---
dependency_level: 13
id: lem-w-trick-supported-cyclic-correlation-bound
kind: lemma
title: "Supported cyclic W-trick correlations and all pair-weight moments"
status: draft
origin: session
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - alg-goldston-yildirim-pseudorandom-majorant
  - lem-goldston-yildirim-long-interval-square-correlation
  - lem-goldston-yildirim-divisor-function-maximal-order-bound
  - def-goldston-yildirim-truncated-divisor-sum
  - def-number-theoretic-mobius-function
  - def-divisor-counting-function
  - thm-canonical-prime-factorisation
  - thm-standard-representatives-modulo-n
  - def-correlation-condition-for-a-measure
  - def-w-trick-prime-modulus
  - def-unit-group-modulo-n-and-euler-totient
  - def-natural-logarithm
  - thm-natural-logarithm-laws
  - thm-logarithm-slower-than-every-positive-power
  - def-real-power
  - thm-p-series-rational
  - lem-finite-set-has-max
  - lem-exponential-dominates-one-plus-x
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Green and Tao, The primes contain arbitrarily long arithmetic progressions, Annals167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§9, Proposition9.10; local bounded supported-correlation reconstruction with the repository PRODUCT convention; existing full-text reading history preserved"
---

## Statement

Fix $k\ge3$, and let $\nu_N$ be exactly the functions of [[alg-goldston-yildirim-pseudorandom-majorant]] for sufficiently large primes $N$. For every integer $2\le m\le2^{k-1}$ there are constants $A_m\ge1$, $C_m>0$ independent of $N$ and of the moment order, and functions $\tau_{m,N}:\mathbb Z/N\mathbb Z\to[0,\infty)$, such that for every $h_1,\ldots,h_m$, including repeated shifts,
$$\mathbb E_x\prod_{i=1}^m\nu_N(x+h_i)\le\prod_{i<j}\tau_{m,N}(h_i-h_j),$$
and for every fixed positive integer $q$,
$$\mathbb E_h\tau_{m,N}(h)^q=O_{m,q}(1).$$
The SAME family $\tau_{m,N}$ works for all $q$. More precisely, for all sufficiently large odd primes put $M_N=\max(1,\max_x\nu_N(x))$ and let $t_N(h)$ be the unique balanced representative with $|t_N(h)|<N/2$. One may take $A_m=2^{m+1}$ and
$$\tau_{m,N}(0)=M_N^m,\qquad \tau_{m,N}(h)=A_m\prod_{\substack{\ell\mid |t_N(h)|\\\ell\text{ prime}}}(1+C_m\ell^{-1/2})\quad(h\ne0).$$
This proves the product and all-moment clauses of [[def-correlation-condition-for-a-measure]]; invoking that Definition additionally requires the nonnegative mean-one measure-family hypothesis. No choice axiom is assumed.

## Facts & Assumptions

**Given:** The exact fixed-$w$, residue-$1$ construction in the Statement, with $2\le m\le2^{k-1}$. Work on sufficiently large primes where it is defined. All displayed averages use the actual finite cardinality $N$.

[F1] [[alg-goldston-yildirim-pseudorandom-majorant]] gives $\nu=1-\mathbf1_I+g$, $g=c\Lambda_R(Wn+1)^2\mathbf1_I$, $c=\varphi(W)/(W\log R)$, $I=[a,b]\cap\mathbb Z$, $a=\lceil\epsilon_kN\rceil$, $b=\lfloor2\epsilon_kN\rfloor$, with its specified $w,R,\epsilon_k$. [[def-w-trick-prime-modulus]] defines $W$, and [[def-unit-group-modulo-n-and-euler-totient]] gives $0<\varphi(W)\le W$.

[F2] [[lem-goldston-yildirim-long-interval-square-correlation]] gives, without a choice premise, the uniform integer-interval upper bound for $r$ distinct shifts $|u_j|\le N^2$, positive arguments on the whole interval, and interval cardinality $H\ge R^{10r}$. Its factor is $\prod_{\ell\mid\Delta_u}(1+C_r\ell^{-1/2})$, with $C_r$ independent of $k$, and includes $r=1$, $\Delta_u=1$. It makes no cyclic-period assertion.

[F3] [[def-goldston-yildirim-truncated-divisor-sum]] and [[def-number-theoretic-mobius-function]] give $|\Lambda_R(z)|\le d(z)\log R$ for $z\ge1$. [[def-divisor-counting-function]] counts the positive divisors, and the OWN supplier [[lem-goldston-yildirim-divisor-function-maximal-order-bound]] gives, for every $\eta>0$, $d(z)\le C_\eta z^\eta$ for ALL $z\ge1$.

[F4] [[thm-standard-representatives-modulo-n]] supplies standard representatives. For odd $N$, moving each representative greater than $N/2$ down by $N$ gives the unique integer $t_N(h)$ with $|t_N(h)|<N/2$. [[lem-finite-set-has-max]] supplies maxima of explicit finite lists. [[thm-canonical-prime-factorisation]] licenses the finite prime-set and squarefree-divisor expansions below.

[F5] [[def-natural-logarithm]], [[thm-natural-logarithm-laws]], [[def-real-power]] and [[thm-logarithm-slower-than-every-positive-power]] give $\log T=o(\sqrt T)$ and the parameter estimates. [[thm-p-series-rational]] gives convergence of $\sum_{n\ge2}n^{-3/2}$. [[lem-exponential-dominates-one-plus-x]] gives $1+x\le e^x$.

[F6] [[def-correlation-condition-for-a-measure]] uses a PRODUCT over pairs, permits repeated shifts, and requires the same family of weights to have EVERY fixed positive integer moment bounded, in addition to the measure-family mean hypothesis.

## Proof

1.1 Set $T=\log\log\log N$. As in the direct calculation $w\le\sqrt T$, [F5] yields $w\log w\le\sqrt T\log T=o(T)$ and $w\to\infty$; $\log W\le w\log w$ gives $W\le N/2$ eventually. Since $\nu\le1+g$ and all factors are nonnegative, expand $\prod_i(1+g(x+h_i))$ over its $2^m$ subsets. First suppose the $h_i$ are distinct, and fix a nonempty subset $A$ of size $r\le m$ with first index $i_0$. If its supported product is nonzero anywhere, put $y=\operatorname{rep}_N(x+h_{i_0})\in I$. Each difference $\operatorname{rep}_N(x+h_j)-y$ belongs to $[-(b-a),b-a]$ and is congruent to $h_j-h_{i_0}$. Because $2(b-a)<N$ eventually, at most one such integer exists. Call it $u_j$, with $u_{i_0}=0$. If one is absent, the entire subset term vanishes. Otherwise these uniquely determined integers are independent of $x$. [F1, F4, F5, given, algebra]

2.1 The possible supporting $y$ are exactly $J=I\cap\bigcap_{j\in A}(I-u_j)$. Thus finite representative arithmetic gives $$\mathbb E_x\prod_{j\in A}g(x+h_j)=\frac{c^r}{N}\sum_{y\in J}\prod_{j\in A}\Lambda_R(W(y+u_j)+1)^2.$$ If $J$ is empty this iszero. Otherwise the $u_j$ are distinct, and at any common supporting point $u_i-u_j$ is a difference of two elements of $I$. Its absolute value is at most $b-a<N/2$, so $u_i-u_j=t_N(h_i-h_j)$ EXACTLY. Enlarge $J$ to $I$ by nonnegativity. On the WHOLE enlarged interval, $y+u_j\ge a-(b-a)=2a-b\ge0$, because $\lfloor2\epsilon_kN\rfloor\le2\lceil\epsilon_kN\rceil$. Hence every argument $W(y+u_j)+1\ge1$ there, not merely on the original support. [F1, F4, step 1.1, algebra]

3.1 The shifts have $|u_j|\le N\le N^2$, while $H=|I|\sim\epsilon_kN$ and $$\frac{10r}{k2^{k+4}}\le\frac5{16k}<1.$$ Consequently $H\ge R^{10r}$ eventually. All hypotheses of [F2] hold on the enlarged interval, by steps 1.1 and 2.1, including its actual whole-interval positivity. Its normalization cancels $c^r$, giving the subset bound $(1+o_{r,k}(1))(H/N)\prod_{\ell\mid\Delta_u}(1+C_r\ell^{-1/2})$. The error is uniform in all shifts and is eventually at most1 simultaneously for the finitely many $r\le m$. Choose $C_m$ at least the finitely many constants $C_r$, independently of $k$. For $h\ne0$ put $f_m(h)=\prod_{\ell\mid|t_N(h)|}(1+C_m\ell^{-1/2})\ge1$. Since every prime of $\Delta_u$ divides a balanced pair difference, the subset bound is at most $2\prod_{i<j\in A}f_m(h_i-h_j)$ and hence at most $2\prod_{i<j}f_m(h_i-h_j)$. The empty subset obeys the latter bound too. [F1, F2, F4, step 1.1, step 2.1, algebra]

4.1 Sum over all $2^m$ subsets. There are $\binom m2\ge1$ pairs, so multiplying $f_m$ by $A_m=2^{m+1}$ on EACH pair dominates the resulting factor $2^{m+1}$. This proves the displayed PRODUCT bound for distinct shifts. Define $M_N$ and $\tau(0)$ as in the Statement, using the explicit finite maximum in [F4]. If shifts repeat, the left side is at most $M_N^m$, and one equal pair on the right contributes exactly $M_N^m$; every other factor is at least1. Thus the inequality holds for repeated shifts as well. If finitely many earlier primes are included at which the algorithm's values have been defined, setting $\tau$ identically $M_N^m$ proves their inequality too, without affecting the asymptotic moments. No assertion about undefined algorithm inputs is required. [F1, F4, F6, step 3.1, algebra]

5.1 On $I$, $1\le z=Wn+1\le N^2$ eventually by step 1.1. From [F3] and $\varphi(W)/W\le1$, $$M_N\le1+(\log R)\max_{1\le z\le N^2}d(z)^2\le1+C_\eta^2(\log R)N^{4\eta}$$ for every fixed $\eta>0$. By [F5] this is $N^{o(1)}$. In particular for fixed $m,q$ choose $\eta$ small enough, and absorb the logarithm using [F5], to get $M_N^{mq}/N=o(1)$. The weight family was already defined independently of $q$ and $\eta$; these choices occur only in proving its moment estimates. This uses the own ordinary-divisor supplier in [F3], not the protected canonical generalized-divisor supplier. [F1, F3, F4, F5, step 1.1, step 4.1, algebra]

6.1 Fix a positive integer $q$ and put $B_{m,q}=\sum_{j=1}^q\binom qj C_m^j$. Finite binomial expansion gives $(1+C_m\ell^{-1/2})^q\le1+B_{m,q}\ell^{-1/2}$ for every prime $\ell$. Finite expansion over the prime divisors of nonzero $t$ yields $f_m(t)^q\le\sum_{d\mid|t|,\ d\text{ squarefree}}B_{m,q}^{\omega(d)}d^{-1/2}$, where $\omega(d)$ counts distinct prime divisors. Put $K=(N-1)/2$. The nonzero balanced representatives are exactly $\pm1,\ldots,\pm K$, so finite reordering gives $$\begin{aligned} \frac1N\sum_{h\ne0}\tau(h)^q &\le A_m^q\frac2N\sum_{\substack{d\le K\\d\text{ squarefree}}} B_{m,q}^{\omega(d)}d^{-1/2}\lfloor K/d\rfloor\\ &\le A_m^q\sum_{\substack{d\le K\\d\text{ squarefree}}}B_{m,q}^{\omega(d)}d^{-3/2}\\ &\le A_m^q\prod_{\substack{\ell\le K\\\ell\text{ prime}}}(1+B_{m,q}\ell^{-3/2}) \le A_m^q\exp\left(B_{m,q}\sum_{n\ge2}n^{-3/2}\right)<\infty. \end{aligned}$$ Here $2K/N\le1$; the finite prime product includes every displayed squarefree summand and further nonnegative terms. Its exponential bound and the finite numerical constant follow from [F5]. No infinite prime product or integration theorem is used. Adding the zero term $M_N^{mq}/N=o(1)$ proves the required $O_{m,q}(1)$ bound. The fixed $k$ affects the eventual threshold, not this limiting bound. These are exactly the product and moment clauses in [F6]; the separate mean-one premise is not inferred here. [F4, F5, F6, step 4.1, step 5.1, algebra] ∎
