---
dependency_level: 0
id: lem-squarefree-multiplicative-logarithmic-sums
kind: lemma
title: "Uniform squarefree logarithmic sums and reciprocal-square tails"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - thm-first-mertens-theorem-for-primes
  - thm-fundamental-theorem-of-arithmetic
  - thm-chinese-remainder-theorem
justified_by: []
proof_strategy: direct
axiom_use: "Finite arithmetic, Riemann integrals and absolutely convergent numerical series; no choice axiom is added."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "J. Maynard, Small gaps between primes (2015)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v181-n1-p07-p.pdf"
      locator: "Section6, Lemma6.1 and its three uses; elementary convolution reconstructed using the fully read proof of MV Lemma22.4, not an external summation theorem."
    - title: "H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory II, Chapter 22"
      url: "https://personal.science.psu.edu/rcv4/Vol2/Vol2.pdf"
      locator: "Sections22.1–22.2, printed pp.323–341; source-backed local adaptation, not an imported theorem."
---

## Statement

Fix nonnegative real numbers $b_p$ on primes with $b_p\le C/p$ and $|b_p-1/p|\le C/p^2$, allowing a fixed finite exceptional set with fixed values. For a positive integer $Q$ define
$$f_Q(n)=\mu(n)^2 1_{(n,Q)=1}\prod_{p\mid n}b_p,\quad K(Q)=\left(1+\sum_{p\mid Q}\frac{\log p}{p}\right)\prod_{p\mid Q}(1+1/p),$$
$$c_b(Q)=\frac{\varphi(Q)}Q\prod_{p\nmid Q}(1+b_p)(1-1/p).$$
The product converges to a positive number. Uniformly in $Q$, $X\ge1$ and $C^1$ real $G$ on $[0,1]$, with $R>1$, $L=\log R$,
$$\sum_{n\le X}f_Q(n)=c_b(Q)\log X+O_C(K(Q)),\quad K(Q)\ll_C(1+\log\log(3Q))^2,$$
$$\sum_{n\le R}f_Q(n)G(\log n/L) =c_b(Q)L\int_0^1G+O_C\left(K(Q)\left(\|G\|_\infty+\int_0^1|G'|\right)\right). \tag{1}$$
Constants may also depend on the fixed exceptional values, never on $Q,X,R,G$.

Here are uniform consequences used in the sieve. Fix $d\ge1$, $\alpha>0$, let $N\to\infty$, $y=\log\log\log N>3$, $W=\prod_{p\le y}p$, $a=\varphi(W)/W$, $R=N^\alpha$, $L=\log R$ and $K_*=(1+\log\log(3WR^d))^2$. Use any of the following three multiplicative squarefree weights, setting their prime values at $2$ to zero in the last two cases:
$$b_p^{(1)}=\frac1{p-1},\quad b_p^{(2)}=\frac1{p-2},\quad b_p^{(3)}=\frac{(p-1)^2}{p^2(p-2)}\quad(p>2).$$
Their constants are
$$c_1(W)=a,\quad c_2(W)=a\prod_{p>y}\frac{(p-1)^2}{p(p-2)}=a(1+O(1/y)),\quad c_3(W)=a\prod_{p>y}(1+b_p^{(3)})(1-1/p)=a(1+O(1/y)). \tag{2}$$
For each smooth real $G$ on $[0,1]^d$, the sum over $1\le n_i\le R$, with the $n_i$ pairwise coprime, equals
$$\sum_{n_1,\ldots,n_d}^{*}\prod_i f_W(n_i)G(\log n_1/L,\ldots,\log n_d/L) =(c_b(W)L)^d\int_{[0,1]^d}G +O_{C,d,G}\left(\frac{(aL)^d}{y}+K_*(aL)^{d-1}\right). \tag{3}$$
Without the star the $1/y$ error can be omitted. The norm dependence in this assertion can be bounded by a constant times $\max_{S\subset\{1,\ldots,d\}}\|\partial_S G\|_\infty$, including the empty derivative. Finally
$$\sum_{s>y}\frac{\mu(s)^2}{\varphi(s)^2}\ll1/y,\qquad \sum_{s>y,(s,2)=1}\frac{\mu(s)^2}{\prod_{p\mid s}(p-2)^2}\ll1/y, \tag{4}$$
and both full sums converge. The same tail bound holds with squarefree prime factors $(b_p^{(i)})^2$. Also, for every fixed real $t\ge0$, $\prod_{p\le X}(1+t/(p-1))\ll_t(\log(2X))^t$ for $X\ge1$.

## Facts & Assumptions

**Given:** The local weights and parameters in the Statement. Products and sums over positive integers include one by the empty-product convention.

[F1] [[thm-fundamental-theorem-of-arithmetic]] gives unique finite prime factorization.

[F2] [[thm-first-mertens-theorem-for-primes]] gives $\sum_{p\le x}\log p/p=\log x+O(1)$.

[F3] [[thm-chinese-remainder-theorem]] counts unit residues multiplicatively, giving $\varphi(Q)/Q=\prod_{p\mid Q}(1-1/p)$. Elementary harmonic comparison gives $\sum_{m\le U}1/m=\log U+O(1)$ for $U\ge1$.

## Proof

1.1 Define a multiplicative function $h_Q$ by $h_Q(1)=1$. At $p\nmid Q$ put [F1, given, construct, algebra]
$$h_Q(p)=b_p-1/p,\quad h_Q(p^2)=-b_p/p,\quad h_Q(p^j)=0\ (j\ge3);$$
at $p\mid Q$ put $h_Q(p)=-1/p$ and $h_Q(p^j)=0$ for $j\ge2$. Multiplying the local polynomials shows
$$(1+b_pz)(1-z/p)=1+(b_p-1/p)z-b_pz^2/p$$
for $p\nmid Q$, and $1-z/p$ for $p\mid Q$. Comparing each coefficient after multiplying by $(1-z/p)^{-1}$ proves the exact convolution $f_Q=h_Q*(n\mapsto1/n)$ at prime powers and hence at every integer by [F1]. [F1, given, construct, algebra]

1.2 Partial summation of [F2] gives $\sum_{p\le z}1/p=\log\log z+O(1)$, since [F1, F2, given, algebra]
$$\sum_{p\le z}1/p=\frac{M(z)}{\log z}+\int_2^z\frac{M(t)}{t\log^2t}\,dt,\quad M(t)=\sum_{p\le t}\log p/p.$$
Thus $\prod_{p\le z}(1+1/p)\ll\log(2z)$; likewise taking logarithms gives $\prod_{p\le z}(1+t/(p-1))\ll_t(\log(2z))^t$, since the correction to $t/p$ is $O_t(p^{-2})$. Set $z=\max(2,\log(3Q))$. For prime divisors $p>z$, $\sum(\log p)/p\le(\log Q)/z\ll1$ and $\sum1/p\le(\log Q)/(z\log z)\ll1$. For $p\le z$, [F2] bounds their logarithmic sum by $O(1+\log z)$ and the product by $O(\log(2z))$. Multiplying these estimates proves the claimed bound for $K(Q)$, including $Q=1$. [F1, F2, given, algebra]

2.1 For $p\nmid Q$, the local absolute mass is $1+O_C(p^{-2})$ and its logarithmic moment is $O_C((\log p)/p^2)$. Their sums converge by comparison with $\sum n^{-2}$ and $\sum(\log n)/n^2$, whose convergence follows from their elementary decreasing-tail integrals. Finite exceptional primes change only the constants. For $p\mid Q$ these quantities are $1+1/p$ and $(\log p)/p$. Expand finite products, then let their prime cutoff increase. The nonnegative expansions are bounded by their convergent products, and the identity $\log d=\sum_{p^j\parallel d}j\log p$ yields [F1, F3, step 1.1, algebra]
$$\sum_d|h_Q(d)|(1+\log d)\ll_C K(Q). \tag{5}$$
The signed sum is therefore absolutely convergent. Its local factors are $(1+b_p)(1-1/p)$ off $Q$ and $1-1/p$ on $Q$. The former equal $1+O_C(p^{-2})$, so their logarithms have convergent absolute sum after finitely many primes. All factors are positive. Exponentiating this real convergent logarithm proves positivity and the displayed formula for $c_b(Q)$. [F1, F3, step 1.1, algebra]

3.1 Sum the convolution of step 1.1 over $n\le X$ and use [F3] to obtain [F3, step 2.1, algebra]
$$\sum_{n\le X}f_Q(n)=\sum_{d\le X}h_Q(d)(\log(X/d)+O(1)).$$
Replacing $\sum_{d\le X}h_Q(d)$ by its full sum in the coefficient of $\log X$ costs at most $\sum_{d>X}|h_Q(d)|\log d$. The $-\log d$ term and the harmonic error are bounded by (5). This proves the unsmoothed estimate, including $X=1$. Finite partial summation, retaining the jump at $n=1$, gives
$$\sum_{n\le R}f_Q(n)G(\log n/L)=S(R)G(1)-\int_1^R S(t)\frac{G'(\log t/L)}{Lt}\,dt.$$
Substitute $S(t)=c_b(Q)\log t+O_C(K(Q))$ and integrate $tG'(t)$ on $[0,1]$. This proves (1) with its stated norm and no unproved limit exchange. [F3, step 2.1, algebra]

3.2 All three prime weights obey the initial hypotheses with an absolute constant. For the first, $(1+1/(p-1))(1-1/p)=1$. For the second the factor is $(p-1)^2/[p(p-2)]=1+1/[p(p-2)]$. For the third, $b_p^{(3)}=1/p+1/[p^2(p-2)]$, so its local factor is $1+O(p^{-2})$. Since $\sum_{p>y}p^{-2}\le\sum_{n>y}n^{-2}\ll1/y$, products of these factors differ from one by $O(1/y)$, as follows by taking their bounded real logarithmic sums. This proves (2). If $p\nmid W$, the exact formula for $c_b$ also gives $c_b(Wp)=c_b(W)/(1+b_p)\le c_b(W)$. [step 2.1, given, algebra]

3.3 For $t=1,2$ define $V_t(n)=\prod_{p\mid n}(1-t/p)^{-2}$, omitting the prime $2$ from the product when $t=2$. Its convolution $V_t=1*v_t$ has $v_t(p)=(1-t/p)^{-2}-1=O_t(1/p)$ on allowed primes, $v_2(2)=0$, $v_t(p^j)=0$ for $j\ge2$, and nonnegative coefficients. Only odd terms are used for the $t=2$ reciprocal-square tail. The finitely many small allowed primes cause no problem. Thus $\sum v_t(d)/d=\prod_p(1+v_t(p)/p)<\infty$, by the same nonnegative finite-product argument as step 2.1. Consequently $\sum_{n\le X}V_t(n)\le X\sum_d v_t(d)/d\ll_t X$. Splitting $n>y$ into $[2^\ell y,2^{\ell+1}y)$ gives $\sum_{n>y}V_t(n)/n^2\ll\sum_{\ell\ge0}(2^\ell y)^{-1}\ll1/y$. The squarefree terms of these sums include exactly those in (4). For the third weight restrict again to odd integers. Its squared prime factor is bounded by a fixed multiple of $p^{-2}$ with local correction $1+O(1/p)$ after multiplying by $p^2$; the same argument with $v(p)=p^2(b_p^{(3)})^2-1\ge0$ proves its tail. The first two are already (4). This proves the full convergence and tail claims. [F1, step 2.1, algebra]

4.1 First omit the star in (3). Let $\mathcal S$ be the one-variable sum operator in (1) and $\mathcal I$ integration on $[0,1]$. Formula (1) says $\mathcal S=c_b(W)L\mathcal I+\mathcal E$, where $|\mathcal E H|\ll_C K(W)(\|H\|_\infty+\|H'\|_\infty)$. Expand the product of these $d$ operators on $G$. Every term with an error operator is bounded, using the stated mixed derivatives, by a constant times $K(W)(c_b(W)L+K(W))^{d-1}$. All operations are finite sums and successive integrals of smooth functions, which agree with their Riemann multiple integral by uniform rectangular approximations. Now $\log W\le y\log y=o(\log\log N)$, $a^{-1}\le W$, $K_*\ll(1+\log\log N)^2$, and hence $K_* /(aL)\to0$. Step 3.2 makes $c_b(W)\asymp a$. This proves the unstarred error in (3). [step 1.2, step 3.1, step 3.2, given, algebra]

5.1 To restore pairwise coprimality, a discarded tuple has $p\mid n_i,n_j$ for some $i<j$ and $p>y$. For each such coordinate, [step 3.2, step 3.3, step 4.1, algebra]
$$\sum_{n\le R,\ p\mid n}f_W(n) =b_p\sum_{u\le R/p}f_{Wp}(u) \le b_p\sum_{u\le R}f_{Wp}(u)\ll_C b_p(aL+K_*),$$
by steps 3.1 and 3.2; the factorization uses squarefreeness to exclude $p\mid u$. Each other coordinate has total mass $O_C(aL+K_*)$. A finite union bound therefore bounds the discarded contribution by $O_{C,d}(\|G\|_\infty(aL)^d\sum_{p>y}b_p^2)=O_{C,d}(\|G\|_\infty(aL)^d/y)$. This proves (3). Its argument is uniform even for $p$ close to $R$ and uses no pointwise estimate $\varphi(n)\gg n$. [step 3.2, step 3.3, step 4.1, algebra] ∎
