---
dependency_level: 3
id: lem-maynard-prime-coordinate-diagonal-form-with-error
kind: lemma
title: "Prime-coordinate quadratic form with exact endpoint and cross-array errors"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - lem-prime-level-shifted-endpoint-and-divisor-weight-control
  - lem-prime-power-removal-for-fixed-tuple-divisor-weights
  - lem-maynard-selberg-coordinate-transform-and-coefficient-bounds
  - lem-maynard-s1-diagonal-form-with-error
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
      locator: "Section5, Lemma5.2, equations(5.14)–(5.26); full-weight endpoint and proper-power adaptation is reconstructed locally."
    - title: "H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory II, Chapter 22"
      url: "https://personal.science.psu.edu/rcv4/Vol2/Vol2.pdf"
      locator: "Sections22.1–22.2, printed pp.323–341; source-backed local adaptation, not an imported theorem."
---

## Statement

Fix $k\ge2$, distinct integer shifts $H$, a coordinate $j$ and a prime level $\theta>0$. Choose $0<2\alpha<\min(\theta,1)$. As $N\to\infty$ through integers let $y=\log\log\log N$, $W=\prod_{p\le y}p$, $a=\varphi(W)/W$, $R=N^\alpha$ and $L=\log R$. Let $Y_r$ be any real array supported on $\prod r_i<R$ squarefree and coprime to $W$, put $Y=\max|Y_r|$, and define $\lambda$ by [[lem-maynard-selberg-coordinate-transform-and-coefficient-bounds]]. Choose $v$ with $(v+h_i,W)=1$ for every $i$. For squarefree numbers coprime to $W$, put $g(u)=\prod_{p\mid u}(p-2)$ and
$$Z_j(r)=\left(\prod_i\mu(r_i)g(r_i)\right) \sum_{r_i\mid d_i\ \forall i,\ d_j=1}\frac{\lambda_d}{\prod_i\varphi(d_i)}.$$
It vanishes unless $r_j=1$ and $\prod r_i<R$ is squarefree and coprime to $W$. Let $Z_{\max}=\max|Z_j|$ and
$$T_j=\sum_{N\le n<2N,\ n\equiv v\ (W)}1_{\mathbb P}(n+h_j)\log(n+h_j) \left(\sum_{d_i\mid n+h_i}\lambda_d\right)^2.$$
For every fixed $B>0$, $\varepsilon>0$,
$$\begin{aligned} T_j={}&\frac N{\varphi(W)}\sum_{r:r_j=1}\frac{Z_j(r)^2}{\prod_i g(r_i)}\\ &+O_{k,H,\theta,\alpha,B}\left(\frac{N Z_{\max}^2(aL)^{k-1}}{\varphi(W)y} +Y^2N(\log N)^{-B}\right) +O_{k,H,\varepsilon}\left(\lambda_{\max}^2N^{1/2+\varepsilon}(\log N)^2\right). \end{aligned}$$
This uses the given full-weight endpoint level directly and adds no choice hypotheses or Bombieri–Vinogradov input.

## Facts & Assumptions

**Given:** The parameters, finite coefficients and level in the Statement.

[F1] [[lem-maynard-selberg-coordinate-transform-and-coefficient-bounds]] gives the support and $\lambda_{\max}\ll_k YL^k$.

[F2] [[lem-prime-level-shifted-endpoint-and-divisor-weight-control]] gives the fixed-endpoint weighted error with exponent $(r^2+1-D)/2$ for every $D>0$.

[F3] [[lem-prime-power-removal-for-fixed-tuple-divisor-weights]] gives global proper-power removal before expansion.

[F4] [[lem-maynard-s1-diagonal-form-with-error]] proves the exact generic cross-array identity and its active-coordinate tail bound for $\chi(p)=p-1$, $h(p)=p-2$.

[F5] [[thm-chinese-remainder-theorem]] gives one residue class for pairwise-coprime moduli. Counting unit classes gives $\varphi$ multiplicative on those moduli.

## Proof

1.1 Restrict the inner divisor sum to $d_j=1$ and call its square $w_j(n)$. By [F3], replacing $T_j$ by $V_j=\sum\Lambda(n+h_j)w_j(n)$ costs at most the last error in the Statement, globally over the interval. Expanding this finite square leaves only $d_j=e_j=1$. Every other coordinate divisor is coprime to $W$ by [F1]. For large $N$ all prime factors of every nonzero shift difference are in $W$. Thus the congruences for a coefficient pair are compatible exactly when $(d_i,e_\ell)=1$ for $i\ne\ell$: a shared outside prime would have to divide $h_i-h_\ell$, while in its absence [F5] applies to $W,[d_i,e_i]$. [F1, F3, F5, given, algebra]

2.1 For a compatible pair put $q=W\prod_i[d_i,e_i]\le WR^2$. The residue class of $t=n+h_j$ is reduced: it is a unit modulo $W$ by the choice of $v$; a prime of $[d_i,e_i]$, $i\ne j$, makes $t\equiv h_j-h_i\not\equiv0$ modulo that prime. There are no factors from coordinate $j$. Set the EXACT endpoints $A_j=N+h_j-1$ and $B_j=2N+h_j-1$. Since $N,h_j$ are integers, $N\le n<2N$ corresponds exactly to $A_j<t\le B_j$. The full-weight discrepancy therefore gives [F1, F2, F5, step 1.1, algebra]
$$\sum_{\substack{A_j<t\le B_j\\t\equiv b_q\ (q)}}\Lambda(t) =\frac N{\varphi(q)}+E_\psi(B_j;q,b_q)-E_\psi(A_j;q,b_q). \tag{1}$$
This is a difference of two literal endpoints, not an estimate with an endpoint supremum. [F1, F2, F5, step 1.1, algebra]

3.1 For a fixed squarefree $q$, each prime outside $W$ can belong to only one coordinate and can occur in $d$ only, $e$ only, or both. Hence at most $\tau_{3k}(q)$ supported coefficient pairs have that modulus. Choose $2\alpha<\eta<\min(\theta,1)$. The bound $\log W\le y\log y=o(\log N)$ ensures eventually $WR^2\le N^\eta$ and $WR^2\le\min(A_j^\theta,B_j^\theta)$. Apply [F2] with $r=3k$ and saving parameter $D$ to bound the total discrepancy contribution to the expansion by [F1, F2, step 2.1, algebra]
$$\lambda_{\max}^2\sum_{q\le WR^2}\mu(q)^2\tau_{3k}(q)e_j(q) \ll_{k,H,\theta,\alpha,D}Y^2N(\log N)^{2k+(9k^2+1-D)/2}.$$
Taking $D>9k^2+4k+2B+1$ bounds it by $O(Y^2N(\log N)^{-B})$. The level hypothesis supplies precisely this saving. [F1, F2, step 2.1, algebra]

4.1 By multiplicativity in [F5], the main term from (1) is $N/\varphi(W)$ times [F3, F4, F5, step 1.1, step 2.1, step 3.1, algebra]
$$Q_j=\sum_{\substack{d,e\text{ compatible}\\d_j=e_j=1}} \frac{\lambda_d\lambda_e}{\prod_i\varphi([d_i,e_i])}.$$
Apply the proved finite identity [F4] to the restricted array $\lambda'_d=\lambda_d1_{d_j=1}$ and $\chi(p)=p-1$. Its transform is exactly $Z_j$. In particular $r_j=1$ and the support assertions follow. More explicitly its exact finite sum is
$$Q_j=\sum_{u,s}^{*}\left(\prod_{i\ne j}\frac{\mu(u_i)^2}{g(u_i)}\right) \left(\prod_{i\ne\ell,\ i,\ell\ne j}\frac{\mu(s_{i\ell})}{g(s_{i\ell})^2}\right)Z_j(A)Z_j(B),$$
where all variables are squarefree, mutually coprime and coprime to $W$, $A_i=u_i\prod_{\ell\ne i,j}s_{i\ell}$, $B_i=u_i\prod_{\ell\ne i,j}s_{\ell i}$, and $A_j=B_j=1$. These restrictions and coefficients follow by the two finite divisor expansions proved in [F4]; incident variables at coordinate $j$ must be one because its transform otherwise vanishes. Its all-cross-one terms give the displayed diagonal; every other cross variable exceeds $y$. The active-set bound in [F4], with $k-1$ active coordinates, gives
$$Q_j=\sum_{r:r_j=1}\frac{Z_j(r)^2}{\prod_i g(r_i)} +O_k(Z_{\max}^2(aL)^{k-1}/y).$$
Here $g(p)>0$ because all primes at most $y>3$ are excluded. Combine this with steps 1.1 and 3.1 to prove the Statement. Empty arrays give zero in every term. [F3, F4, F5, step 1.1, step 2.1, step 3.1, algebra] ∎
