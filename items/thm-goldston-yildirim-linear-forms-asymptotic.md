---
id: thm-goldston-yildirim-linear-forms-asymptotic
kind: theorem
title: "Goldston–Yıldırım linear-forms asymptotic"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - lem-goldston-yildirim-choice-free-euler-factor-bounds
  - thm-canonical-prime-factorisation
  - def-goldston-yildirim-truncated-divisor-sum
  - def-w-trick-prime-modulus
  - lem-goldston-yildirim-choice-free-zeta-contour-calculus
  - thm-chinese-remainder-theorem
  - def-number-theoretic-mobius-function
  - thm-euler-totient-product-formula
  - thm-euler-product-for-riemann-zeta
  - def-complex-exponential
  - lem-mellin-log-positive-part-inversion
  - def-natural-logarithm
  - def-real-power
  - def-unit-group-modulo-n-and-euler-totient
  - thm-natural-logarithm-laws
  - def-prime
  - def-integers-modulo-n
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

For a finite set $S$, write $\mathbb E_{x\in S}F(x)=|S|^{-1}\sum_{x\in S}F(x)$. Fix positive integers $m,t$. Let $N$ tend to infinity through primes, choose an integer $w=w(N)\ge2$ with $w(N)\to\infty$ and $w(N)\log w(N)=o(\log\log\log N)$, put $W=\prod_{p\le w}p$ and $R=N^{1/(k2^{k+4})}$ for a fixed $k\ge3$, with real powers defined by $x^a=\exp(a\log x)$. For each $1\le i\le m$, let $\psi_i(x)=\sum_{j=1}^tL_{ij}x_j+b_i$ be an integer affine-linear form with $b_i\in\mathbb Z$, coefficient vector $L_i\ne0$, and $|L_{ij}|\le\sqrt w/2$. Assume no two $L_i$ are rational multiples and assume $W\psi_i(x)+1\ge1$ on the box $B=I_1\times\cdots\times I_t$. If each real interval $I_j$ contains at least $R^{10m}$ consecutive integers, then uniformly in the shifts and boxes,
$$\mathbb E_{x\in B\cap\mathbb Z^t}\prod_{i=1}^m\Lambda_R(W\psi_i(x)+1)^2=(1+o_{m,t,k}(1))\left(\frac{W\log R}{\varphi(W)}\right)^m.$$

## Statement references

[Green and Tao, Annals 2008, §§3, 9–10](https://annals.math.princeton.edu/wp-content/uploads/annals-v167-n2-p03.pdf)

[Goldston and Yıldırım, Theorem 1.1 and §6](https://arxiv.org/pdf/math/0209102)

[Conlon, §§8–9](https://arxiv.org/pdf/1403.2957)

## Facts & Assumptions

**Given:** Exactly the system and uniform box hypotheses in the original Statement. The new analytic suppliers and restricted improper Riemann exchanges below carry no choice premise.


[F1] [[def-goldston-yildirim-truncated-divisor-sum]] defines $\Lambda_R(n)=\sum_{d\mid n,\ d\le R}\mu(d)\log(R/d)$ for $n\ge1$. [[def-number-theoretic-mobius-function]] gives zero on nonsquare-free divisors and sign $(-1)^r$ on products of $r$ distinct primes. [[thm-canonical-prime-factorisation]] gives their unique prime index sets.

[F2] [[thm-chinese-remainder-theorem]] identifies residues modulo a product of distinct primes with the product of the residue rings, preserving the ring operations and the uniform finite counting probabilities.

[F3] [[lem-mellin-log-positive-part-inversion]] gives the vertical-line integral $\log(R/d)_+$ for every positive $d$, including zero at $d=R$.

[F4] [[lem-goldston-yildirim-choice-free-euler-factor-bounds]] supplies, for the actual local densities of nonparallel affine forms, the exact factorization $F=G_1G_2\prod_i\zeta(1+z_i+z'_i)/(\zeta(1+z_i)\zeta(1+z'_i))$. On the unbounded-right domain $U_{1/(12m)}$, $G_1(0)=1+O_m(w^{-1/3})$, $G_2(0)=(W/\varphi(W))^m$, and all norms of $G_1G_2$ through order $m$ are at most $C_m\exp(C_m w\log w)$; the C0 envelope is $\exp(C_{m,k}(\log R)^{1/3})$.

[F5] [[lem-goldston-yildirim-choice-free-zeta-contour-calculus]] gives the multivariable zeta integral's leading term $G(0)(\log R)^m$, derivative errors $O_{m,\sigma}(\|G\|_{C^j}(\log R)^{m-j})$, and exponentially small remainder for its original C0 envelope and finite higher norms.

[F6] The restricted calculus in [[lem-goldston-yildirim-choice-free-zeta-contour-calculus]] proves finite/improper product and countable-sum interchange for continuous separable integrable majorants and uniformly summable numerical coefficient tails. Its canonical boxes and smooth contour half-lines use no Lebesgue measure or choice premise. This is the exact exchange needed below, not a general improper Riemann dominated-convergence assertion.

## Proof

1.1 Put $L=\log R$. Write $H_j=|I_j\cap\mathbb Z|\ge R^{10m}$, so each coordinate has consecutive integer representatives and the box is nonempty. Expand the $2m$ finite divisor sums in [F1]. Each tuple $(d_i,d'_i)$ has square-free joint modulus $D=\operatorname{lcm}(d_1,d'_1,\ldots,d_m,d'_m)\le R^{2m}$. In any run of $H_j$ consecutive integers, each residue modulo $D$ occurs either $\lfloor H_j/D\rfloor$ or $\lceil H_j/D\rceil$ times, so the sum of the absolute differences from uniform residue probabilities is at most $D/H_j$. Telescope the $t$ product probability measures one coordinate at a time; all remaining measures have total mass1, hence the difference of averages of a bounded indicator is at most $\sum_jD/H_j\le tR^{-8m}$. All divisibility indicators depend only on the coordinate residues modulo $D$, regardless of the constants $b_i$. There are at most $R^{2m}$ tuples and each product logarithmic weight has absolute value at most $L^{2m}$. The average thus equals its residue-density expansion with total error $O_{m,t}(R^{-6m}L^{2m})$, uniformly in every shift and box. Positivity of the original arguments ensures every divisor sum used is defined. [F1, given, algebra]

2.1 For any fixed divisor tuple, [F2] factors its residue-density probability as $\prod_{p\mid D}\omega_{U_p}(p)$, where $U_p=\{i:p\mid d_i d'_i\}$. We must justify, rather than formally assert, the infinite Euler conversion. Set $c=1/L>0$ and consider all square-free divisor tuples with absolute weight $\prod_{p\mid D}\omega_{U_p}(p)\prod_i(d_i d'_i)^{-c}$. By the actual singleton and larger-density estimates in [F4], for every $p>w$ its nonconstant local absolute sum is at most $C_m p^{-1-c}$; for $p\le w$ it is zero. Indeed every nonempty term has density at most $1/p$ and at least one divisor index containing $p$. The series over primes converges by comparison with $\sum_{n\ge2}n^{-1-c}$. Finite prime expansions and unique factorization in [F1] show that the total absolute tuple sum is the limit of these bounded positive products, at most $\exp(C_m\sum_{n\ge2}n^{-1-c})<\infty$. For completeness each tuple eventually occurs in a finite prime expansion; enumerating tuples in lexicographic shells and using nonnegativity shows its sum equals the supremum of those finite expansions. [F1, F2, F4, step 1.1, algebra]

3.1 Apply [F3] with $x=R/d_i$ and $x=R/d'_i$ to every factor. For the fixed $c=1/L$, take $w(t)=e/(c^2+t^2)$ on each vertical parameter line. It is continuous, has finite ordinary improper Riemann integral, and dominates $|R^z/z^2|$. Each divisor tuple is dominated by $a_{\mathbf d}\prod_{i=1}^{2m}w(t_i)$, where $a_{\mathbf d}$ is its nonnegative absolute density weight times $\prod_i(d_i d'_i)^{-c}$. Step2.1 proves $\sum_{\mathbf d}a_{\mathbf d}<\infty$, with the explicit finite-shell enumeration of the integer tuples. Thus [F6] applies exactly: the tuple series converges locally uniformly on every finite parameter box, and its tail integrals in every finite/improper coordinate order are bounded by the numerical tail times the product of the $2m$ one-variable integrals. It permits all sum/integral exchanges without a counting-measure or Lebesgue Fubini premise. Each tuple with any $d_i>R$ or $d'_i>R$ has Mellin product zero, as does a factor with $d_i=R$, so extending the finite residue sum to all tuples changes nothing after integration. Recombining signs and local prime membership gives exactly the $E_p$ polynomial of [F4]. The residue expansion is therefore $I_m(G_1G_2;R)$ by its positive-real-region factorization. [F1, F3, F4, F6, step 2.1, algebra]

4.1 Set $\sigma=1/(12m)$ and $G=G_1G_2$. Its full unbounded-right domain and every norm in [F4] restrict to the ORIGINAL domain $-\sigma<\operatorname{Re}z_i,\operatorname{Re}z'_i<100$ in [F5]. It is holomorphic there, has finite higher norms through $m$, and meets precisely the supplied C0 envelope. Thus [F5] gives $$I_m(G;R)=\left(1+O_m(w^{-1/3})\right)(W/\varphi(W))^mL^m+\sum_{j=1}^mO_m(e^{C_mw\log w}L^{m-j})+O_{m,k}(e^{-\delta\sqrt L}).$$ Since $w\log w=o(\log\log\log N)=o(\log\log L)$, $e^{C_mw\log w}=(\log L)^{o(1)}=o(L)$. Dividing the $j$th error by the target $(W/\varphi(W))^mL^m\ge L^m$ gives $o(1)$ for every $j\ge1$. The exponentially small error and the finite CRT error in step1.1 are also $o(L^m)$, while $w^{-1/3}\to0$. Combining steps1.1 and3.1 proves the original displayed asymptotic, uniformly in all affine constants and boxes, at its original unqualified scope. [F4, F5, step 1.1, step 3.1, algebra] ∎

## Proof status

The full proof above establishes the original unqualified boxed linear-forms Statement using the separately reconstructed choice-free reciprocal, Euler-factor, and restricted Riemann contour suppliers. The accepted earlier CC counterpart proofs are preserved unchanged. This result supplies no cyclic arbitrary-m bound, unwrapped-discriminant correction, all-residue/freely-slow majorant, or full prime-pattern theorem; those distinct obligations remain held.
