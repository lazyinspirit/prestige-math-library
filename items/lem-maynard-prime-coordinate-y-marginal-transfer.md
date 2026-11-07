---
dependency_level: 2
id: lem-maynard-prime-coordinate-y-marginal-transfer
kind: lemma
title: "Uniform finite coordinate transfer and squared Maynard marginal"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-maynard-selberg-coordinate-transform-and-coefficient-bounds
  - lem-squarefree-multiplicative-logarithmic-sums
  - def-number-theoretic-mobius-function
  - def-maynard-variational-quantity-mk
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
      locator: "Section5 Lemma5.3 equations(5.28)–(5.32) and Section6 Lemma6.3; all finite divisor and uniform tail calculations reconstructed locally."
    - title: "H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory II, Chapter 22"
      url: "https://personal.science.psu.edu/rcv4/Vol2/Vol2.pdf"
      locator: "Sections22.1–22.2, printed pp.323–341; source-backed local adaptation, not an imported theorem."
---

## Statement

Fix $k\ge2$, $\alpha>0$, a coordinate $j$, and a real $\Phi\in C_c^\infty(U_k)$, where $U_k=\{t_i>0,\sum_i t_i<1\}$. As integers $N\to\infty$ put $y=\log\log\log N>3$, $W=\prod_{p\le y}p$, $a=\varphi(W)/W$, $R=N^\alpha$, $L=\log R$, and $K_*=(1+\log\log(3WR^k))^2$. Define $Y_r=\Phi(\log r/L)$ on $\prod r_i<R$ squarefree and coprime to $W$, zero otherwise; define $\lambda$ by the finite inverse transform and $Z_j$ by the coordinate transform in [[lem-maynard-prime-coordinate-diagonal-form-with-error]]. The latter is an algebraic definition; this lemma requires no prime level.

For $r_j=1$ on that support there is the EXACT finite identity
$$Z_j(r)=\left(\prod_{i\ne j}\mu(r_i)g(r_i)\right) \sum_{\substack{s_i:r_i\mid s_i\ (i\ne j)\\s_j\ge1}} \frac{Y_s}{\prod_i\varphi(s_i)} \prod_{i\ne j}\frac{\mu(s_i)r_i}{\varphi(s_i)},\quad g(u)=\prod_{p\mid u}(p-2). \tag{1}$$
Write $H_j(t_{-j})=\int_0^1\Phi(t)\,dt_j$. Uniformly in supported $r$ with $r_j=1$,
$$Z_j(r)=\sum_{s_j}\frac{Y_{r_1,\ldots,s_j,\ldots,r_k}}{\varphi(s_j)}+O_{k,\Phi}(aL/y) =aL\left(\prod_{i\ne j}\frac{\varphi(r_i)}{r_i}\right)H_j(\log r_{-j}/L) +O_{k,\Phi}(aL/y+K_*). \tag{2}$$
In particular $Z_{\max}\ll_{k,\Phi}aL$, and
$$\sum_{r:r_j=1}\frac{Z_j(r)^2}{\prod_i g(r_i)} =(aL)^{k+1}\left[J_{k,j}(\Phi)+O_{k,\Phi}\left(\frac1y+\frac{K_*}{aL}\right)\right]. \tag{3}$$
All transforms have product-squarefree coprime support; they are zero otherwise. No assertion of a prime distribution theorem is made.

## Facts & Assumptions

**Given:** The smooth weight, coordinate and asymptotic parameters in the Statement. All functions are extended by zero outside their indicated interior simplex.

[F1] [[lem-maynard-selberg-coordinate-transform-and-coefficient-bounds]] gives the finite inverse formula for $\lambda$ and its support.

[F2] [[lem-squarefree-multiplicative-logarithmic-sums]] gives uniform excluded-prime logarithmic sums, the three explicit local constants, reciprocal-square tails and pairwise-coprime smooth tensor sums. In particular $K_* /(aL)\to0$.

[F3] [[def-number-theoretic-mobius-function]] gives multiplicative signs on squarefree integers. The displayed definition of $Z_j$ and [F1] force its product-squarefree support and $r_j=1$; no conditional prime-level theorem is used.

[F4] [[def-maynard-variational-quantity-mk]] defines $J_{k,j}(\Phi)=\int H_j^2$ with Riemann integrals.

## Proof

1.1 Substitute [F1]'s finite formula for $\lambda_d$ in the definition of $Z_j$, retain $d_j=1$, and interchange finite sums. For $i\ne j$ the inner divisor sum, on squarefree $s_i$ with $r_i\mid s_i$, is [F1, F3, given, algebra]
$$\sum_{r_i\mid d_i\mid s_i}\frac{\mu(d_i)d_i}{\varphi(d_i)} =\prod_{p\mid r_i}\frac{-p}{p-1}\prod_{p\mid s_i/r_i}\left(1-\frac p{p-1}\right) =\frac{\mu(s_i)r_i}{\varphi(s_i)}.$$
The coordinate $j$ contributes one because $d_j=1$. Multiplying the remaining outer factors is exactly (1). This proves the transfer identity for every finite array of this support, independently of smoothness or level. [F1, F3, given, algebra]

2.1 Let $Y=\|\Phi\|_\infty$. In (1), if $s_i\ne r_i$ for an $i\ne j$, write $s_i=r_i u_i$; then $u_i>y$, squarefree, and coprime to $r_iW$. Dropping all cross restrictions gives [F2, step 1.1, algebra]
$$\sum_{r_i\mid s_i}\frac{\mu(s_i)^2}{\varphi(s_i)^2}\ll\frac1{\varphi(r_i)^2},\qquad \sum_{\substack{r_i\mid s_i\\s_i\ne r_i}} \frac{\mu(s_i)^2 1_{(s_i,W)=1}}{\varphi(s_i)^2} \ll\frac1{y\varphi(r_i)^2}$$
by the full and tail bounds of [F2]. Also $\sum_{s_j<R,(s_j,W)=1}\mu(s_j)^2/\varphi(s_j)\ll aL$. A union bound over $i\ne j$ bounds the total contribution of all these off-main terms by
$$\ll_k \frac{YaL}{y}\prod_{i\ne j}\frac{g(r_i)r_i}{\varphi(r_i)^2}\le\frac{C_kYaL}{y}.$$
The last product is at most one, since each of its prime factors is $p(p-2)/(p-1)^2=1-1/(p-1)^2$. [F2, step 1.1, algebra]

3.1 The remaining terms have $s_i=r_i$ for $i\ne j$. Their exact factor outside the $s_j$ sum is [F2, step 2.1, algebra]
$$P(r)=\prod_{i\ne j}\frac{g(r_i)r_i}{\varphi(r_i)^2} =\prod_{p\mid\prod_{i\ne j}r_i}\left(1-\frac1{(p-1)^2}\right).$$
All these primes exceed $y$, so $0\le1-P(r)\le\sum_{p>y}1/(p-1)^2\ll1/y$, uniformly in $r$. The remaining sum in absolute value is at most $CY aL$, by [F2]. Replace $P(r)$ by one and combine with step 2.1 to get the first equality of (2). This justifies the uniform error without assuming a bound on $r_i/\varphi(r_i)$. [F2, step 2.1, algebra]

4.1 Put $Q=W\prod_{i\ne j}r_i\le WR$. Product squarefreeness and coprimality show that the remaining sum in (2) is exactly [F2, step 3.1, given, algebra]
$$\sum_{s_j\le R}\frac{\mu(s_j)^2 1_{(s_j,Q)=1}}{\varphi(s_j)} \Phi(\log r_1/L,\ldots,\log s_j/L,\ldots,\log r_k/L).$$
Apply [F2]'s one-variable formula with $b_p=1/(p-1)$ and its exact constant $c_1(Q)=\varphi(Q)/Q=a\prod_{i\ne j}\varphi(r_i)/r_i$. The $C^1$ norm in $t_j$ is uniformly bounded by the fixed smooth $\Phi$; $K(Q)\ll K_*$. This proves the second equality of (2). The marginal $H_j$ is smooth, by differentiation under a proper integral of a smooth function, as follows from uniform difference-quotient convergence on its compact support; it is compactly supported in $U_{k-1}$. Since its supremum is bounded and $K_* /(aL)\to0$, (2) proves $Z_{\max}\ll_{k,\Phi}aL$. [F2, step 3.1, given, algebra]

5.1 Let $M_r=aL(\prod_{i\ne j}\varphi(r_i)/r_i)H_j(\log r_{-j}/L)$ and $E=C_{k,\Phi}(aL/y+K_*)$. Then $|Z_j-M_r|\le E$ and $|M_r|\ll_\Phi aL$. By [F2], the sum of positive weights $\prod_{i\ne j}\mu(r_i)^2/g(r_i)$ over supported $r$ is at most $C_k(aL)^{k-1}$; enlarge to the independent coordinate sums to see this. Therefore [F2, step 4.1, algebra]
$$\left|\sum_{r:r_j=1}\frac{Z_j(r)^2-M_r^2}{\prod_i g(r_i)}\right| \ll_{k,\Phi}(aL E+E^2)(aL)^{k-1} \ll_{k,\Phi}(aL)^{k+1}\left(\frac1y+\frac{K_*}{aL}\right)$$
for large $N$, since both small ratios tend to zero. [F2, step 4.1, algebra]

6.1 The exact outer prime factor in the main square is [F2, F4, step 5.1, algebra]
$$\frac{\varphi(p)^2}{g(p)p^2}=\frac{(p-1)^2}{p^2(p-2)}.$$
Consequently $\sum M_r^2/\prod_i g(r_i)$ is $(aL)^2$ times the pairwise-coprime $(k-1)$-coordinate smooth sum of $H_j^2$ with the THIRD weight in [F2]. The support of $H_j$ already enforces $\prod_{i\ne j}r_i<R$, so extending the remaining sum to its unit cube adds no main terms. Its local constant is $c_3(W)=a(1+O(1/y))$. The tensor formula of [F2] thus gives
$$\sum\frac{M_r^2}{\prod_i g(r_i)} =(aL)^2(c_3(W)L)^{k-1}\int H_j^2 +O_{k,\Phi}\left((aL)^{k+1}/y+K_*(aL)^k\right).$$
By [F4] and (2)'s constant this is (3), after including step 5.1. For $k=2$ the remaining dimension is one and the same formula holds without cross-coprimality loss. The zero function gives zero transforms and no positivity assertion. [F2, F4, step 5.1, algebra] ∎
