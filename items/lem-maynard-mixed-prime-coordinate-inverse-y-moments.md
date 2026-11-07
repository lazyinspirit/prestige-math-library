---
dependency_level: 3
id: lem-maynard-mixed-prime-coordinate-inverse-y-moments
kind: lemma
title: Mixed prime-logarithmic inverse-Y moments at sharp outer-support cutoffs
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-prime-level-shifted-endpoint-and-divisor-weight-control
- lem-prime-power-removal-for-fixed-tuple-divisor-weights
- lem-maynard-selberg-coordinate-transform-and-coefficient-bounds
- lem-maynard-s1-diagonal-form-with-error
- lem-maynard-prime-coordinate-y-marginal-transfer
- thm-chinese-remainder-theorem
justified_by: []
proof_strategy: direct
axiom_use: Finite arithmetic and proper Riemann integrals; no choice hypothesis is added.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: D. H. J. Polymath, Variants of the Selberg sieve, and bounded intervals containing many primes
    url: https://arxiv.org/pdf/1407.4897v4
    locator: Theorem3.5(i), printedpp11–12, and fullSection5.3, printedpp36–40, especially equations(90)–(91)
---

## Statement

Fix $k\ge2$, distinct integer shifts $h_1,\ldots,h_k$, a coordinate $j$, a given prime level $0<\theta<1$, and constants $A,\alpha>0$ with $A\alpha<1/2$. Let $G,H$ be real smooth functions compactly supported in $\{t_i>0,\sum_i t_i<A\}$. Suppose their supports have outer-coordinate sums bounded by $\sigma_G,\sigma_H\ge0$ and $\alpha(\sigma_G+\sigma_H)<\min(\theta,1)$. As integers $N\to\infty$, put $L=\alpha\log N$, $R=N^{A\alpha}$, $y=\log\log\log N$, $W=\prod_{p\le y}p$, $a=\varphi(W)/W$, $C_N=Na^kL^k/W$. On product-squarefree tuples coprime to $W$ set $Y_G(r)=G(\log r/L)$, zero otherwise, and define the finite inverse transform
$$\lambda_G(d)=\left(\prod_i\mu(d_i)d_i\right)\sum_{d_i\mid r_i\ \forall i}\frac{Y_G(r)}{\prod_i\varphi(r_i)},\qquad B_G(n)=\sum_{d_i\mid n+h_i\ \forall i}\lambda_G(d),$$
and similarly for $H$. For any $v$ with $(v+h_i,W)=1$ for all $i$, let
$$T_j(G,H)=\sum_{N\le n<2N,\ n\equiv v\ (W)}1_{\mathbb P}(n+h_j)\log(n+h_j)B_G(n)B_H(n).$$
Write $M_jG(t_{-j})=\int_0^AG(t)\,dt_j$. Then
$$T_j(G,H)=C_N L\left[\int M_jG\,M_jH+o(1)\right].$$
All constants may depend on the fixed data and functions; there is no assertion of an asymptotic for $T_j(G,G)$ unless its own support satisfies the indicated two-function cutoff. No choice axiom or distribution theorem beyond the given level is used.

## Facts & Assumptions

**Given:** The data in the Statement. All integrals are proper Riemann integrals of zero extensions to enclosing rectangles.

[F1] [[lem-maynard-selberg-coordinate-transform-and-coefficient-bounds]] gives exactly the displayed finite inverse transform, product-squarefree support and $\lambda_{\max}\ll_k\|Y\|_\infty(\log R)^k$.

[F2] [[lem-prime-level-shifted-endpoint-and-divisor-weight-control]] supplies the two EXACT shifted full-weight endpoints with divisor weight $\tau_r$, error exponent $(r^2+1-D)/2$ for every $D$, and no endpoint maximum.

[F3] [[lem-prime-power-removal-for-fixed-tuple-divisor-weights]] removes proper powers globally from divisor-square weights with error $O(\lambda_{\max}^2N^{1/2+\delta}\log^2N)$ for any fixed $\delta>0$.

[F4] [[lem-maynard-s1-diagonal-form-with-error]] proves its finite cross-array identity for BOTH $\chi(p)=p$ and $\chi(p)=p-1$, arbitrary finite arrays, active-coordinate restrictions and the absolute cross-tail bound.

[F5] [[lem-maynard-prime-coordinate-y-marginal-transfer]] proves the finite coordinate transform, uniform $Z_{\max}\ll a\log R$, and its squared-marginal asymptotic for every smooth unit-simplex function and every fixed positive exponent, independently of a level assumption.

[F6] [[thm-chinese-remainder-theorem]] gives the finite CRT for pairwise coprime moduli.

## Proof

1.1 By [F1] all coefficients are finite and supported on squarefree $\prod_i d_i<R$ coprime to $W$. More sharply, if $d_j=1$ and $\lambda_G(d)\ne0$, some nonzero summand $Y_G(r)$ has $d_i\mid r_i$, whence $\prod_{i\ne j}d_i\le\prod_{i\ne j}r_i\le N^{\alpha\sigma_G}$. If cancellation makes a coefficient zero this implication still holds for every nonzero coefficient. The analogous assertion holds for $H$. On $n+h_j$ prime, each $d_j<R<N/2$ is one for large $N$. Apply [F3] to the restricted arrays from $\lambda_G+\lambda_H$ and $\lambda_G-\lambda_H$ and use $xy=((x+y)^2-(x-y)^2)/4$. Thus replacing the prime-logarithmic bilinear sum by $\sum\Lambda(n+h_j)B'_G(n)B'_H(n)$, where primes mean $d_j=1$, costs $O_{G,H,k}(N^{1/2+\delta}(\log N)^{2k+2})$. This is one global error, not one error per modulus. [F1, F3, given, algebra]

2.1 For large $N$ every prime divisor of every nonzero $h_i-h_l$ belongs to $W$. Therefore a coefficient pair is compatible precisely when $(d_i,e_l)=1$ for $i\ne l$: a common outside prime would divide a fixed shift difference. Product squarefreeness already excludes repeated primes within each tuple. In the compatible case [F6] gives modulus $q=W\prod_i[d_i,e_i]\le WN^{\alpha(\sigma_G+\sigma_H)}$ and a reduced residue for $t=n+h_j$: modulo a prime in coordinate $i\ne j$, $t\equiv h_j-h_i\ne0$. At $W$ the chosen $v$ supplies the unit condition. The exact endpoints are $x_-=N+h_j-1$, $x_+=2N+h_j-1$, so the progression sum is $N/\varphi(q)+E_\psi(x_+;q,b)-E_\psi(x_-;q,b)$. This follows from $x_-<t\le x_+$ and includes $q=1$; there is no half-weight or endpoint supremum. [F1, F2, F6, step 1.1, algebra]

3.1 Choose a fixed $\eta$ strictly between $\alpha(\sigma_G+\sigma_H)$ and $\min(\theta,1)$. Since $\log W\le y\log y=o(\log N)$, eventually every modulus in step 2.1 is at most $N^\eta$ and at most $\min(x_-^\theta,x_+^\theta)$. For each squarefree $q$, each prime outside $W$ has at most $3k$ choices: coordinate and membership in $d$ only, $e$ only or both. Thus pair multiplicity is at most $\tau_{3k}(q)$. Bounds [F1],[F2] give a total error $O(N(\log N)^{2k+(9k^2+1-D)/2})$. Given any $B_0>0$, choose $D>9k^2+4k+2B_0+1$ to make this $O(N\log^{-B_0}N)$. The fixed level supplies this exact all-savings error. If a support or array is empty its contribution is zero and the same estimates hold. [F1, F2, step 2.1, algebra]

3.2 Put $g(p)=p-2$, extended multiplicatively, and $Z_G(r)=(\prod_i\mu(r_i)g(r_i))\sum_{r_i\mid d_i,\ d_j=1}\lambda_G(d)/\prod_i\varphi(d_i)$; similarly $Z_H$. These arrays have $r_j=1$ and the product-squarefree support. Apply the exact finite identity [F4] to the restricted arrays $\lambda'_G+\lambda'_H$ and $\lambda'_G-\lambda'_H$ with $\chi(p)=p-1$, then subtract and divide by four. The transform is linear; exchanging every directed cross variable $s_{il}$ with $s_{li}$ interchanges its two arguments. Hence the resulting bilinear identity is exactly [F4, step 2.1, algebra]
$$Q(G,H)=\sum_{u,s}^{*}\left(\prod_{i\ne j}\frac{\mu(u_i)^2}{g(u_i)}\right)\left(\prod_{i\ne l,\ i,l\ne j}\frac{\mu(s_{il})}{g(s_{il})^2}\right)Z_G(A_u)Z_H(B_u),$$
where all variables are mutually coprime, squarefree and coprime to $W$, $(A_u)_i=u_i\prod_{l\ne i,j}s_{il}$, $(B_u)_i=u_i\prod_{l\ne i,j}s_{li}$ and both $j$th coordinates are one. The star restrictions are essential: one prime in two edges would repeat it in an original tuple and give zero. Incident edges at $j$ are one because its transform is zero otherwise. The all-cross-one terms give $\sum Z_G(r)Z_H(r)/\prod g(r_i)$. Any other term has a cross variable $>y$. The absolute tail estimate in [F4] therefore bounds the remainder by $O_k((Z_{G,\max}+Z_{H,\max})^2(a\log R)^{k-1}/y)$. No distribution hypothesis enters this finite identity or tail. [F4, step 1.1, step 2.1, algebra]

4.1 Set $\widetilde G(u)=G(Au)$ and $\widetilde H(u)=H(Au)$. They are smooth and compactly supported in the positive unit simplex; their sampled arrays at $\log R=A L$ are EXACTLY the arrays in this Statement. Apply [F5] separately to $\widetilde G+\widetilde H$ and $\widetilde G-\widetilde H$. Linearity and the same difference of squares give [F5, step 3.2, algebra]
$$\sum\frac{Z_G(r)Z_H(r)}{\prod_i g(r_i)}=(a\log R)^{k+1}\left[\int M_j\widetilde G\,M_j\widetilde H+O\left(1/y+K_*/(a\log R)\right)\right],$$
where $K_*=(1+\log\log(3WR^k))^2$. Substitution gives $M_j\widetilde G(u_{-j})=A^{-1}M_jG(Au_{-j})$, so its product integral is $A^{-(k+1)}\int M_jG M_jH$. Consequently the main factor is $(aL)^{k+1}$ with NO remaining loss of $A$. The uniform $Z$ bounds from [F5] make step 3.2's tail relative $O(1/y)$. This use retains the exact third outer Euler factor $(p-1)^2/(p^2(p-2))$ and its local constant proved in [F5]; it does not replace it by $1/p$. [F5, step 3.2, algebra]

5.1 The main progression factor is $N/\varphi(W)=N/(aW)$. Multiplying step 4.1 gives $C_NL\int M_jG M_jH$. The relative errors are $O(1/y+K_*/(aL))=o(1)$ by [F5]. Also $a^{-1}\le W=(\log N)^{o(1)}$. Choosing $B_0$ large in step 3.1 makes its error $o(C_NL)$. Choose $0<\delta<1/2$ in step 1.1; its global power error is likewise $o(C_NL)$. Combine steps 1.1–4.1 to obtain the stated asymptotic. Only signed PRIME-LOG bilinear sums have been evaluated: no signed prime-count/log conversion has occurred. All support parameters and smooth functions are fixed before $N\to\infty$. [F1, F2, F3, F4, F5, step 1.1, step 3.1, step 4.1, algebra] ∎

## Source notes


**Statement adaptation:** Adapts the source asymmetric full/good outer-coordinate support bilinear prime-log estimate to the library inverseYarrays and exact endpointlevel; all new sharp support and scaling derivations are written locally. The actual source reading and local proof boundary are recorded in `source-reading-and-barriers.json`; this is not a claim of verbatim source wording or an external theorem input.
