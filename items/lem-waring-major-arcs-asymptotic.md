---
id: lem-waring-major-arcs-asymptotic
kind: lemma
title: "The major-arc contribution to the Waring asymptotic"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps:
  - def-exponential-character-e
  - def-real-power
  - lem-integer-part
  - def-waring-singular-series-and-singular-integral
  - alg-circle-method-major-minor-arc-decomposition
  - lem-waring-singular-series-well-defined-and-local-densities
  - lem-waring-singular-integral-converges-and-evaluates
  - lem-waring-major-arcs-disjoint
  - lem-waring-major-arc-approximation
  - thm-dominated-convergence
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: n/a
sources:
  references:
    - title: "T. D. Wooley, Vinogradov's Mean Value Theorem via Efficient Congruencing"
      url: "https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf"
      locator: "§10, major-arc evaluation in the proof of Theorem 1.4, printed p. 1621"
    - title: "N. Assing, The Circle Method and Waring's Problem"
      url: "https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf"
      locator: "§6.1, asymptotic evaluation of major arcs, printed pp. 34–39"
---

## Statement

Let $k\ge2$ and $s>2k$ be integers, put $e(t)=\exp(2\pi i t)$ and $S_k(q,a)=\sum_{r=0}^{q-1}e(ar^k/q)$. For positive integers $n$ tending to infinity, put $N=\lfloor n^{1/k}\rfloor$, $P=\lfloor N^{1/8}\rfloor$, $Q=\lfloor N^{1/16}\rfloor$, and regard $\mathbb T=\mathbb R/\mathbb Z$ as having distance $\|t\|_{\mathbb T}=\min_{m\in\mathbb Z}|t-m|$. A reduced residue $a\pmod q$ has no positive common divisor with $q$ other than $1$. Define the major arcs
$$\mathfrak M_N=\bigcup_{q\le Q}\ \bigcup_{\substack{0\le a<q\\\gcd(a,q)=1}}\left\{\alpha\in\mathbb T:\left\|\alpha-\frac aq\right\|_{\mathbb T}\le\frac{16P}{qN^k}\right\}.$$
With $g_{k,N}(\alpha)=\sum_{x=1}^Ne(\alpha x^k)$, define the singular series and singular integral by
$$\mathfrak S_{s,k}(n)=\sum_{q\ge1}\sum_{\substack{0\le a<q\\\gcd(a,q)=1}}q^{-s}S_k(q,a)^s e(-an/q),\qquad \mathfrak J_{s,k}=\int_{\mathbb R}\left(\int_0^1e(\beta x^k)dx\right)^s e(-\beta)d\beta,$$
the major-arc integral satisfies
$$\lim_{n\to\infty}\frac{\displaystyle\int_{\mathfrak M_N}g_{k,N}(\alpha)^s e(-n\alpha)d\alpha-\mathfrak J_{s,k}\mathfrak S_{s,k}(n)N^{s-k}}{N^{s-k}}=0.$$

## Statement references

[Wooley, §10, major-arc evaluation](https://annals.math.princeton.edu/wp-content/uploads/annals-v175-n3-p12-p.pdf)

[Assing, §6.1](https://www.math.uni-bonn.de/people/assing/lectures/circle_method.pdf)

## Facts & Assumptions

**Given:** Integers $k\ge2$, $s>2k$, positive integers $n$, $N=\lfloor n^{1/k}\rfloor$, $P=\lfloor N^{1/8}\rfloor$, $Q=\lfloor N^{1/16}\rfloor$, and the major arcs in the Statement.

[F1] On each reduced arc centered at $a/q$, $|\alpha-a/q|\le16P/(qN^k)$, and these arcs are pairwise disjoint for sufficiently large $N$ ([[alg-circle-method-major-minor-arc-decomposition]], [[lem-waring-major-arcs-disjoint]]).

[F2] On a rational arc,
$$g_{k,N}(a/q+\beta)=q^{-1}S_k(q,a)\int_0^N e(\beta t^k)dt+O_k(q(1+N^k|\beta|))$$
([[lem-waring-major-arc-approximation]]).

[F3] The singular series converges absolutely, uniformly in $n$, with a tail bounded by $C_{k,s}Q^{1-s/(2k)}$ after $q>Q$ ([[lem-waring-singular-series-well-defined-and-local-densities]], proof step 1.1).

[F4] For $s>2k$, $v_k(\gamma)=\int_0^1e(\gamma x^k)dx$ satisfies $v_k^s\in L^1(\mathbb R)$ and $\int_{\mathbb R}v_k(\gamma)^s e(-\gamma)d\gamma=\mathfrak J_{s,k}$ ([[lem-waring-singular-integral-converges-and-evaluates]]).

[F5] Dominated convergence passes a pointwise limit through an integral under a single integrable majorant ([[thm-dominated-convergence]]).

## Proof

**Proof technique:** uniform major-arc approximation and dominated convergence.

1.1 For $\alpha$ in the arc $(q,a)$ write $\alpha=a/q+\beta$. Since $q\le Q\le P$ and $N^k|\beta|\le16P/q$, [F2] gives an approximation error at most $C_kP$. The main term has modulus at most $N$, because $|S_k(q,a)|\le q$ and $|v_k(\gamma)|\le1$. Thus
$$|g_{k,N}(\alpha)^s-(q^{-1}S_k(q,a)Nv_k(N^k\beta))^s|\le C_{k,s}PN^{s-1}.$$
The total measure of the disjoint arcs is at most
$$\sum_{q\le Q}\sum_{a\pmod q,(a,q)=1}\frac{32P}{qN^k}\le\frac{32PQ}{N^k},$$
so replacing the integrand by its main term makes an error $O_{k,s}(P^2Q N^{s-k-1})=o(N^{s-k})$, since $P^2Q/N\le N^{-11/16}$. [F1, F2, algebra]

1.2 For each arc, substitute $\gamma=N^k\beta$ and put $\rho_N=n/N^k$. The resulting main contribution is
$$N^{s-k}\sum_{q\le Q}A_{s,k}(q,n)\int_{|\gamma|\le16P/q}v_k(\gamma)^s e(-\rho_N\gamma)d\gamma.$$
Here $\rho_N\to1$ because $N^k\le n<(N+1)^k$. [F1, F2, algebra]

2.1 The smallest truncation radius satisfies $16P/Q\to\infty$. By [F4, F5],
$$\sup_{q\le Q}\left|\int_{|\gamma|\le16P/q}v_k(\gamma)^s e(-\rho_N\gamma)d\gamma-\mathfrak J_{s,k}\right|\le\int_{|\gamma|>16P/Q}|v_k(\gamma)|^s d\gamma+\int_{\mathbb R}|v_k(\gamma)|^s|e(-\rho_N\gamma)-e(-\gamma)|d\gamma\longrightarrow0,$$
the first term by integrability and the second by dominated convergence. [F4, F5, step 1.2]

2.2 By [F3], $\sum_{q\le Q}A_{s,k}(q,n)=\mathfrak S_{s,k}(n)+o(1)$ uniformly in $n$, and $\sum_{q\le Q}|A_{s,k}(q,n)|$ is uniformly bounded. Combining this with step 2.1 in step 1.2 shows that the main-arc contribution is
$$N^{s-k}\mathfrak J_{s,k}\mathfrak S_{s,k}(n)+o(N^{s-k}).$$
Together with the error in step 1.1 this proves the limit in the Statement. [F3, step 1.1, step 1.2, step 2.1] ∎
