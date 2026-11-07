---
id: thm-goldston-yildirim-correlation-bound
kind: theorem
title: "Goldston–Yıldırım higher-correlation bound"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 3
deps:
  - def-goldston-yildirim-truncated-divisor-sum
  - def-w-trick-prime-modulus
  - lem-goldston-yildirim-zeta-contour-integral
  - thm-chinese-remainder-theorem
  - def-number-theoretic-mobius-function
  - thm-euler-totient-product-formula
  - thm-euler-product-for-riemann-zeta
  - lem-goldston-yildirim-divisor-function-maximal-order-bound
  - def-divisor-counting-function
  - lem-mellin-log-positive-part-inversion
  - def-natural-logarithm
  - def-real-power
  - def-unit-group-modulo-n-and-euler-totient
  - thm-natural-logarithm-laws
  - thm-real-power-laws
  - def-prime
  - def-integers-modulo-n
  - def-factorial-and-falling-factorial
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Ben Green and Terence Tao, The primes contain arbitrarily long arithmetic progressions, Annals of Mathematics 167 (2008)"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf"
      locator: "§§3, 9–10 and Appendix A; exact passages inspected in the complete local full-text snapshot"
    - title: "Daniel A. Goldston and Cem Y. Yıldırım, Higher correlations of divisor sums related to primes III: k-correlations"
      url: "https://arxiv.org/pdf/math/0209102"
      locator: "Theorem 1.1 and §6; independent untricked correlation calculation inspected in full relevant sections"
    - title: "David Conlon, Jacob Fox, and Yufei Zhao, The Green–Tao theorem: an exposition"
      url: "https://arxiv.org/pdf/1403.2957"
      locator: "§§8–9; complete smooth-cutoff exposition inspected; alternate cutoff/normalization, comparison only"
---
## Statement

Fix integers $m\ge2$ and $k\ge3$. Let $N$ tend to infinity through primes, let $w=w(N)\to\infty$ with $w\log w=o(\log\log\log N)$, put $W=\prod_{p\le w}p$ and $R=N^{1/(k2^{k+4})}$, and put $\epsilon_k=1/(2^k(k+4)!)$, $I_N=[\epsilon_kN,2\epsilon_kN]\cap\mathbb Z$, $g_N(n)=\frac{\varphi(W)}{W\log R}\Lambda_R(Wn+1)^2\mathbf1_{I_N}(n)$, and $\nu_N(n)=1-\mathbf1_{I_N}(n)+g_N(n)$. For a finite set $S$, write $\mathbb E_{x\in S}F(x)=|S|^{-1}\sum_{x\in S}F(x)$. All functions on $\mathbb Z/N\mathbb Z$ are read on their standard representatives $0,\ldots,N-1$. For distinct shifts $h_1,\ldots,h_m\in[-N/2,N/2]\cap\mathbb Z$, set $\Delta=\prod_{1\le i<j\le m}|h_i-h_j|$. Then
$$\mathbb E_{x\in\mathbb Z/N\mathbb Z}\prod_{i=1}^m\nu_N(x+h_i)\ll_m\prod_{p\mid\Delta}(1+C_m p^{-1/2}),$$
where the implied constant and $C_m$ are independent of $N$ and the shifts. Moreover, there is a nonnegative weight $\tau_{m,N}$ on $\mathbb Z/N\mathbb Z$ such that for all shifts, including repeated shifts,
$$\mathbb E_x\prod_{i=1}^m\nu_N(x+h_i)\le\prod_{i<j}\tau_{m,N}(h_i-h_j),$$
and for every fixed integer $q\ge1$, $\mathbb E_h\tau_{m,N}(h)^q=O_{m,q}(1)$ as $N\to\infty$.

## Statement references

[Green and Tao, Annals 2008, §§3, 9–10](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Goldston and Yıldırım, Theorem 1.1 and §6](https://arxiv.org/pdf/math/0209102)

[Conlon, §§8–9](https://arxiv.org/pdf/1403.2957)

## Facts & Assumptions

**Given:** The truncated divisor sum, W-trick, divisor function, and local zeta contour estimate.

[F1] [[def-goldston-yildirim-truncated-divisor-sum]]: For $R>1$ and $n\ge1$, $\Lambda_R(n)=\sum_{d\mid n,\,1\le d\le R}\mu(d)\log(R/d)$.

[F2] [[def-w-trick-prime-modulus]]: $W=\prod_{p\le w}p$ is divisible by every prime $p\le w$.

[F3] [[thm-chinese-remainder-theorem]]: For pairwise coprime moduli, reduction modulo their product is a bijection to the product of residue rings.

[F4] [[lem-goldston-yildirim-zeta-contour-integral]]: The multivariable contour integral has leading term determined by its analytic Euler factor at the origin, with derivative errors bounded by the corresponding $C^j$ norms times lower powers of $\log R$.

[F5] [[lem-goldston-yildirim-divisor-function-maximal-order-bound]]: $d(n)\le \exp(C\log n/\log\log n)$ for sufficiently large $n$.

[F6] [[def-divisor-counting-function]]: $d(n)$ counts the positive divisors of $n$.

[F7] [[thm-euler-totient-product-formula]]: $\varphi(W)/W=\prod_{p\mid W}(1-1/p)$.

[F8] [[thm-euler-product-for-riemann-zeta]]: For $\operatorname{Re}s>1$, $\zeta(s)=\prod_p(1-p^{-s})^{-1}$, with absolute and local uniform convergence.

[F9] [[lem-mellin-log-positive-part-inversion]]: For $c,x>0$, $\frac1{2\pi i}\int_{c-i\infty}^{c+i\infty}x^z z^{-2}\,dz=\max(\log x,0)$.
## Proof

1.1 Every $d\le R<N$ with $d\mid W$ never divides $Wn+1$; every other such $d$ is coprime to $WN$, so $\Lambda_R(W(n+N)+1)=\Lambda_R(Wn+1)$. Thus the truncated weight is $N$-periodic, and we may represent the cyclic variable by an interval of length $N$ on which all $x+h_i$ are positive. Expand $\prod_i\Lambda_R(W(x+h_i)+1)^2$ into square-free divisors. The Chinese remainder theorem factors its local density. For $p\le w$ all the forms equal $1$ modulo $p$, so no nonempty divisibility event occurs. For $p>w>m$, one equation has density $1/p$. If $r_p$ distinct residues occur among the shifts, then the local probability of avoiding their forbidden classes is $1-r_p/p$, compared with the generic $1-m/p$; since $r_p\le m$, their ratio is at most $1+C_m/p$. The ratio differs from $1$ only if $p\mid\Delta$, so extra local factors occur only at primes dividing $\Delta$. [F1, F2, F3, given, algebra]

2.1 The local calculation is explicit: for $p>w>m$, the $m$ forbidden classes are distinct when $p\nmid\Delta$, so their avoidance density is $1-m/p$; if $p\mid\Delta$ and there are $r_p$ distinct classes, it is $1-r_p/p$. The ratio is $(1-r_p/p)/(1-m/p)=1+(m-r_p)/(p-m)\le1+C_m/p\le1+C_mp^{-1/2}$. The square-free divisor expansion, [F3], and [F9] give the Euler product. For $p\nmid\Delta$ its local factor has the generic first-order terms; factoring those into the zeta quotient leaves an absolutely convergent product with factors $1+O_m(p^{-4/3})$. The small-prime product has value $(W/\varphi(W))^m$ by [F7] and [F8]. For $p\le w$ the local factor is $1$ and contributes no correction. The exceptional analytic factor is the finite product over $p\mid\Delta$, $p>w$, whose value at the origin is the product of the displayed ratios and is at most $P=\prod_{p\mid\Delta}(1+C_mp^{-1/2})$. If $r$ is the number of distinct primes dividing $\Delta$, the cases $r\le1$ are immediate; for $r\ge2$, $|\Delta|\ge r!$ and $r\log r-r\le\log|\Delta|\le m^2\log N=O_{m,k}(\log R)$, so $r=O_{m,k}(\log R/\log\log R)$. On $D^m_{1/(12m)}$, a derivative of order at most $j$ of one exceptional local factor is $O_{m,j}(p^{-1+2m/(12m)}(\log p)^j)=O_{m,j}(p^{-1/2})$, since $(\log p)^j p^{-1/3}$ is bounded. The Leibniz rule therefore bounds the $j$th derivative norm of this product by $O_{m,j}(r^jP)$. The nonexceptional infinite product has uniformly bounded derivatives, and the finite W-factor derivatives cost at most $\exp(O_m(w\log w))$. Applying [F4] with $\sigma=1/(12m)$ thus gives $\mathbb E_x\prod_i\Lambda_R(W(x+h_i)+1)^2\ll_m (W\log R/\varphi(W))^m\prod_{p\mid\Delta}(1+C_m p^{-1/2})$. Each lower-order contour term divided by the target upper scale $(\log R)^mP$ is $O_{m,k}(\exp(O_m(w\log w))/(\log\log R)^j)=o(1)$ for $j\ge1$, since $w\log w=o(\log\log\log N)$. Hence the displayed truncated-divisor correlation bound follows. [F3, F4, F7, F8, F9, step 1.1, algebra]

3.1 Put $\tau_{m,N}(0)=\exp(C_m\log N/\log\log N)$ and, for $h\ne0$, put $\tau_{m,N}(h)=C_m\prod_{p\mid h}(1+C_m p^{-1/2})$, increasing $C_m$ if needed. Since $\nu_N\le1+g_N$ and $g_N$ is supported on $I_N$, expansion over subsets and step 2.1 bound every distinct-shift term by the product of the corresponding pair weights; the factor $2^m$ is absorbed by increasing $C_m$. If shifts repeat, $\prod_i\nu_N(x+h_i)\le\|\nu_N\|_\infty^m\le\exp(C_m\log N/\log\log N)$: indeed $\Lambda_R(n)\le d(n)\log R$, $n\ll WN$, and [F3] gives this bound. The indicator in $g_N$ only decreases the nonnegative full truncated-divisor product; period $N$ lets the supported terms be bounded by the full product over an interval of length $N$, so step 2.1 applies even when the common support interval is shorter than $R^{10m}$ or wraps around the cyclic endpoint. A repeated pair supplies the factor $\tau_{m,N}(0)$, and all other factors are at least $1$. [F1, F5, F6, step 2.1, algebra]

4.1 For nonzero $h$, every fixed $q$ satisfies $\tau_{m,N}(h)^q\le C_{m,q}\prod_{p\mid h}(1+p^{-1/4})$ after absorbing finitely many small primes. Expanding the product over its prime divisors bounds it by $C_{m,q}\sum_{d\mid h}d^{-1/4}$. Therefore $\frac1N\sum_{1\le h\le N}\tau_{m,N}(h)^q\ll_{m,q}\sum_{d\ge1}d^{-5/4}<\infty$. The value at zero contributes $N^{-1}\exp(C_{m,q}\log N/\log\log N)=o(1)$. This proves all fixed moment bounds and the correlation assertion. [step 3.1, algebra] ∎
