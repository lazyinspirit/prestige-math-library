---
id: thm-eisenstein-series-are-modular-forms
kind: theorem
title: "Eisenstein series are modular forms; their Fourier coefficients"
status: published
origin: pipeline
verification:
  verified:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
    scope: "Whole authored item, including statement or definition, every proof or verification step, and used direct supplier interfaces; completed prior Step5 reader/adjudicator evidence reconciled to the current mathematics. Transitive supplier proofs were not audited in full."
    delegated_by: "owner via tools/autopilot (frontier-38-owner-30)"
    evidence:
      - "research/frontier-38-owner-30-reader-21.md"
      - "research/frontier-38-owner-30-alpha-batch-21-5a.md"
      - "research/frontier-38-owner-30-step5-hash-21-post.json"
    reviewed_raw_sha256: "762816afa0455b4d8d18c88623e31f93bf7537e8aba5dff29af19c2e02bfc6f0"
    content_sha256: "e8670a50fa0265e2b83f9be8698a070c286f513ae5b1043fce54010f95e21893"
deps:
  - def-modular-group-action-on-the-upper-half-plane
  - def-level-one-modular-form-and-cusp-form
  - lem-lattice-eisenstein-sums-converge
  - def-divisor-power-sums-sigma-k
  - def-level-one-eisenstein-series
  - lem-lipschitz-formula-for-the-lattice-sum
  - def-bernoulli-numbers-by-their-generating-function
  - thm-mittag-leffler-expansion-of-pi-cotangent
  - def-complex-trigonometric-and-hyperbolic-functions
  - thm-complex-exponential-addition-and-real-extension
  - def-riemann-zeta-function
  - thm-double-series-fubini
  - thm-algebra-of-complex-derivatives
  - thm-ratio-test
  - thm-q-expansion-principle-at-the-cusp
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Proposition 5 and its complete proof, printed pp. 16–17; equation (13) gives the Fourier coefficients and equation (14) is the cotangent identity."
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Proposition 4.7, p. 50; Propositions 4.18 and 4.20, pp. 55–57. Milne uses weight 2k and a different Bernoulli indexing."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Ch. 5, 'Modular forms', printed pp. 99-101."
---

## Statement

For every even $k\ge4$:
(a) $E_k$ is a modular form of weight $k$ for $PSL_2(\mathbb Z)$;
(b) writing $B_k$ for the $k$-th Bernoulli number, $E_k(\tau)=1-\frac{2k}{B_k}\sum_{n\ge1}\sigma_{k-1}(n)q^n$, $q=e^{2\pi i\tau}$, with $\sigma_{k-1}(n)=\sum_{d\mid n}d^{k-1}$;
(c) $E_k(\infty)=1$, and $G_k=2\zeta(k)E_k$;
(d) in particular $E_4=1+240q+2160q^2+O(q^3)$ and $E_6=1-504q-16632q^2+O(q^3)$.

## Facts & Assumptions

**Given:** Even $k\ge4$, $G_k(\tau)=\sum'_{(m,n)}(m\tau+n)^{-k}$ and $E_k=G_k/(2\zeta(k))$ ([[def-level-one-eisenstein-series]], [[def-riemann-zeta-function]], [[def-divisor-power-sums-sigma-k]]).

[F1] The family $((m\tau+n)^{-k})$ is absolutely summable with locally uniform convergence on $\mathfrak H$, and the action is by $\Im(\gamma\tau)=\Im\tau/|c\tau+d|^2$ with $\gamma=\bigl(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\bigr)$ ([[lem-lattice-eisenstein-sums-converge]], [[def-modular-group-action-on-the-upper-half-plane]]).

[F2] Lipschitz: $\sum_{n\in\mathbb Z}(z+n)^{-k}=\frac{(-2\pi i)^k}{(k-1)!}\sum_{r\ge1}r^{k-1}e^{2\pi irz}$ for $\operatorname{Im}z>0$, absolutely convergent ([[lem-lipschitz-formula-for-the-lattice-sum]]).

[F3] $M_k$ is defined by the weight-$k$ transformation law and holomorphy at the cusp, with $E_k=1+O(q)$ ([[def-level-one-modular-form-and-cusp-form]], [[def-level-one-eisenstein-series]]); $2\zeta(k)>0$ and $(m,n)\mapsto(ma+nc,mb+nd)$ is a bijection of $\mathbb Z^2$ for $\gamma\in SL_2(\mathbb Z)$ ([[def-riemann-zeta-function]], [[thm-double-series-fubini]]).

[F4] The even zeta values follow locally without a choice assumption. For $|z|<1$, the cotangent expansion ([[thm-mittag-leffler-expansion-of-pi-cotangent]]) gives $\pi z\cot(\pi z)=1-2\sum_{m\ge1}\zeta(2m)z^{2m}$: expand $2z^2/(z^2-n^2)$ geometrically and interchange the sums, whose absolute total on $|z|\le r<1$ is bounded by $2r^2(1-r^2)^{-1}\sum_{n\ge1}n^{-2}$. Put $t=2\pi iz$. The exponential definitions of sine and cosine give $\pi z\cot(\pi z)=t/(e^t-1)+t/2$. Comparing the coefficient of $z^{2m}$ in the Bernoulli generating series yields $\zeta(2m)=(-1)^{m+1}B_{2m}(2\pi)^{2m}/(2(2m)!)$ ([[def-bernoulli-numbers-by-their-generating-function]], [[def-complex-trigonometric-and-hyperbolic-functions]], [[thm-complex-exponential-addition-and-real-extension]], [[thm-double-series-fubini]], [[thm-ratio-test]]).

## Proof

1.1 Let $\gamma=\bigl(\begin{smallmatrix}a&b\\c&d\end{smallmatrix}\bigr)\in SL_2(\mathbb Z)$. Writing $m\gamma\tau+n=\frac{(ma+nc)\tau+(mb+nd)}{c\tau+d}$ and using that $(m,n)\mapsto(ma+nc,mb+nd)$ is a bijection [F3], the absolute summability [F1] permits reindexing, so $G_k(\gamma\tau)=(c\tau+d)^kG_k(\tau)$. Hence $E_k(\gamma\tau)=(c\tau+d)^kE_k(\tau)$. By [F3], $E_k=1+O(q)$ as $\operatorname{Im}\tau\to\infty$, so in particular $E_k$ is bounded near the cusp, and its periodic function $F$ extends holomorphically to $q=0$ by the q-expansion principle; therefore $E_k\in M_k$ and (a) holds. [F1, F3, given, algebra]

1.2 Split the absolutely summable sum defining $G_k$ into $m=0$ and $m\ne0$. The $m=0$ part is $\sum_{n\ne0}n^{-k}=2\zeta(k)$ because $k$ is even. For $m\ne0$ pair $m$ with $-m$ and $n$ with $-n$; by [F3] this reindexing preserves the sum, and each remaining term with $m\ge1$ is handled by [F2] applied to $z=m\tau$ (whose imaginary part is positive): $\sum_{n\in\mathbb Z}(m\tau+n)^{-k}=\frac{(-2\pi i)^k}{(k-1)!}\sum_{r\ge1}r^{k-1}q^{mr}$. Therefore $G_k=2\zeta(k)+2\frac{(-2\pi i)^k}{(k-1)!}\sum_{m\ge1}\sum_{r\ge1}r^{k-1}q^{mr}=2\zeta(k)+2\frac{(-2\pi i)^k}{(k-1)!}\sum_{n\ge1}\sigma_{k-1}(n)q^n$, the last regrouping being the absolutely summable family $(r^{k-1}q^{mr})_{m,r\ge1}$ grouped by $n=mr$ [F3]: for $|q|\le\rho<1$, its absolute sum is at most $(1-\rho)^{-1}\sum_{r\ge1}r^{k-1}\rho^r<\infty$ by the ratio test ([[thm-ratio-test]]). Dividing by $2\zeta(k)$ gives $E_k=1+\frac{(-2\pi i)^k}{(k-1)!\zeta(k)}\sum_{n\ge1}\sigma_{k-1}(n)q^n$. [F2, F3, given, algebra]

2.1 For even $k$ write $k=2m$. Then $(-2\pi i)^k=2^k\pi^k(-i)^{2m}=(-1)^m2^k\pi^k$, and by [F4] $\zeta(2m)=(-1)^{m+1}\frac{B_k(2\pi)^k}{2k!}$, so $(k-1)!\zeta(k)=(-1)^{m+1}\frac{B_k(2\pi)^k}{2k}$ and the coefficient of $\sum\sigma_{k-1}(n)q^n$ in 1.2 is $\frac{(-1)^m2^k\pi^k\cdot2k}{(-1)^{m+1}B_k(2\pi)^k}=-\frac{2k}{B_k}$, proving (b). The constant term gives $E_k(\infty)=1$ and $G_k=2\zeta(k)E_k$, which is (c) (see [F3]). For (d): $B_4=-1/30$ and $B_6=1/42$, so $-\frac{2\cdot4}{B_4}=240$ and $-\frac{2\cdot6}{B_6}=-504$; with $\sigma_3(1)=1$, $\sigma_3(2)=1+8=9$ and $\sigma_5(1)=1$, $\sigma_5(2)=1+32=33$ this gives $E_4=1+240q+2160q^2+O(q^3)$ and $E_6=1-504q-16632q^2+O(q^3)$, as claimed. The special values used here are the local coefficient computation in [F4]. [F4, step 1.2, given, algebra] ∎
