---
dependency_level: 2
id: lem-prime-level-shifted-endpoint-and-divisor-weight-control
kind: lemma
title: "Fixed shifted endpoints and divisor-weighted errors from a given prime level"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-prime-level-of-distribution
  - def-prime-progression-discrepancy
  - thm-first-mertens-theorem-for-primes
  - thm-chinese-remainder-theorem
  - thm-fundamental-theorem-of-arithmetic
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
      locator: "Section5, equations(5.19)–(5.20); adapted here to the library full-weight fixed-endpoint convention."
    - title: "H. L. Montgomery and R. C. Vaughan, Multiplicative Number Theory II, Chapter 22"
      url: "https://personal.science.psu.edu/rcv4/Vol2/Vol2.pdf"
      locator: "Sections22.1–22.2, printed pp.323–341; source-backed local adaptation, not an imported theorem."
---

## Statement

Use the full von Mangoldt endpoint discrepancy $E_\psi$ and prime level from [[def-prime-level-of-distribution]]. A level $\theta>0$ necessarily satisfies $\theta\le1$, and supplies every smaller positive level.

Fix an integer $h$, $0<\eta<1$, and a positive integer $r$. For sufficiently large integers $N$ put $A=N+h-1$, $B=2N+h-1$. Suppose the primes have level $\theta>0$ and
$$1\le Q\le N^\eta,\qquad Q\le\min(A^\theta,B^\theta).$$
Define
$$e(q)=\max_{(a,q)=1}(|E_\psi(A;q,a)|+|E_\psi(B;q,a)|).$$
For every fixed $D>0$,
$$\sum_{q\le Q}\mu(q)^2\tau_r(q)e(q) \ll_{h,\eta,r,\theta,D}N(\log N)^{(r^2+1-D)/2}.$$
Here $\tau_r$ counts ordered $r$-factorizations. In particular the sum has every fixed negative logarithmic power by choosing $D$ large. These are two fixed endpoints, with no maximum over endpoints. The underlying bounds are
$$\sum_{q\le Q}e(q)\ll_D N(\log N)^{-D},\quad e(q)\ll_{h,\eta}\frac{N\log N}{\varphi(q)},\quad \sum_{q\le Q}\frac{\mu(q)^2\tau_r(q)^2}{\varphi(q)}\ll_r(\log(2Q))^{r^2}.$$

## Facts & Assumptions

**Given:** The parameters and the level hypothesis in the Statement.

[F1] [[def-prime-level-of-distribution]] and [[def-prime-progression-discrepancy]] specify all fixed logarithmic savings, the full weight, $n\le x$, and main term $x/\varphi(q)$; $\Lambda(n)\le\log n$ for $n\ge2$ by the same weight definition.

[F2] [[thm-first-mertens-theorem-for-primes]] gives $\sum_{p\le t}(\log p)/p=\log t+O(1)$.

[F3] [[thm-fundamental-theorem-of-arithmetic]] and [[thm-chinese-remainder-theorem]] give prime factorization and finite CRT. Counting nonzero residues gives $\varphi(p)=p-1$ and CRT gives multiplicativity on coprime arguments.

## Proof

1.1 If $\theta>1$, take integers $\lceil x\rceil+2\le q\le\lfloor x^\theta\rfloor$. The reduced residue $q-1$ has no positive representative at most $x$, so its error has absolute value $x/\varphi(q)\ge x/q$. Comparison of the decreasing function $1/t$ with its integrals shows that this harmonic sum is $(\theta-1)\log x+O(1)$. Thus the level sum is at least $x((\theta-1)\log x+O(1))$, contradicting [F1] with saving exponent one. Hence $\theta\le1$. Restricting a nonnegative modulus sum from $q\le x^\theta$ to $q\le x^{\theta_0}$ proves descent for $0<\theta_0<\theta$ without changing the endpoint convention. [F1, F3, given, algebra]

1.2 Partial summation of [F2] gives $\sum_{p\le X}1/p=\log\log X+O(1)$: with $M(t)=\sum_{p\le t}(\log p)/p$, the sum equals $M(X)/\log X+\int_2^X M(t)/(t\log^2t)\,dt$. The bounded error in $M$ has bounded integral. Unique factorization gives $\tau_r(q)=r^{\omega(q)}$ for squarefree $q$. Consequently the nonnegative finite sum in the last bound of the Statement is at most [F2, F3, algebra]
$$\prod_{p\le Q}\left(1+\frac{r^2}{p-1}\right) \ll_r\exp\left(r^2\sum_{p\le Q}\frac1p\right) \ll_r(\log(2Q))^{r^2}.$$
The first inequality follows by expanding the finite product, whose terms include every squarefree $q\le Q$. The bounded correction in its logarithm follows from $1/(p-1)=1/p+O(p^{-2})$ and convergence of $\sum_{n\ge2}n^{-2}$. For $Q<2$ enlarge the constant. [F2, F3, algebra]

1.3 The maximum of the sum of the two errors is at most the sum of their separate maxima. Apply [F1] at $A$ and $B$, since $Q\le\min(A^\theta,B^\theta)$. For fixed $h$, both endpoints are comparable to $N$, so this proves $\sum_{q\le Q}e(q)\ll_D N(\log N)^{-D}$. A residue class has at most $x/q+1$ positive representatives at most $x$. Since $x\asymp_h N$, $q\le N^\eta<N$, and $\Lambda(n)\le\log(3N)$ for the relevant representatives, its weighted sum and endpoint main term are at most $O_{h,\eta}(N\log N/\varphi(q))$. Apply this separately at the two endpoints to obtain the stated trivial bound. This includes $q=1$ and integral endpoints without half-weight. [F1, F3, given, algebra]

2.1 Apply finite Cauchy–Schwarz to $\mu(q)^2\tau_r(q)\sqrt{e(q)}$ and $\sqrt{e(q)}$. Steps 1.2 and 1.3 give [step 1.2, step 1.3, algebra]
$$\begin{aligned} \sum_{q\le Q}\mu(q)^2\tau_r(q)e(q) &\le\left(\sum_{q\le Q}\mu(q)^2\tau_r(q)^2e(q)\right)^{1/2} \left(\sum_{q\le Q}e(q)\right)^{1/2}\\ &\ll (N\log N)^{1/2}(\log(2Q))^{r^2/2} (N(\log N)^{-D})^{1/2}. \end{aligned}$$
Since $\log(2Q)\ll\log N$, this is the required bound. The elementary finite inequality follows by expanding $\sum_{q,t}(u_qv_t-u_tv_q)^2\ge0$; it requires no infinite summation or choice principle. [step 1.2, step 1.3, algebra] ∎
