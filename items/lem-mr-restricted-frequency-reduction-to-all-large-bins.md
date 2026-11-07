---
id: lem-mr-restricted-frequency-reduction-to-all-large-bins
kind: lemma
title: Matomäki–Radziwiłł restricted frequency reduction to all-large bins
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 5
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
axiom_use: No choice axiom is used; all partitions and integrations are finite.
deps:
  - lem-ramare-short-bin-factorization-without-frequency-shifts
  - lem-multiscale-later-prime-frequency-square-bound
  - lem-dirichlet-polynomial-threshold-partition-is-finite
  - thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials
sources:
  references:
    - title: Matomäki and Radziwiłł, Multiplicative Functions in Short Intervals
      url: https://arxiv.org/pdf/1501.04585v4
      locator: Section 2, conditions (2)–(3); Proposition 1, Sections 8.1–8.2. Section 8.3 remains an explicit obligation.
---

## Statement

Let $X\ge e^{16}$, $0<\eta<1/6$, and $J\ge1$ be an integer. Let $[P_j,Q_j]$, $1\le j\le J$, be increasing disjoint real intervals with $2\le P_j\le Q_j\le\exp(\sqrt{\log X})$. For every $2\le j\le J$, assume
$$\frac{\log\log Q_j}{\log P_{j-1}-1}\le\frac{\eta}{4j^2},\qquad \frac{\eta}{j^2}\log P_j\ge8\log Q_{j-1}+16\log j,$$
where the first denominator is positive. Let $f:\mathbb N\to[-1,1]$ be multiplicative with $f(1)=1$. Define $\mathcal S$ on all positive integers by requiring a prime divisor in every $[P_j,Q_j]$, and put
$$F(s)=\sum_{\substack{X\le n\le2X\\n\in\mathcal S}}f(n)n^{-s},\quad a=\frac16-\eta,\quad B=\frac{(\log Q_1)^{1/3}}{P_1^a},\quad H_j=\frac{j^2}{B},\quad \alpha_j=\frac14-\eta\left(1+\frac1{2j}\right),\quad T_0=(\log X)^{1/15}.$$
For each integer $v$ whose half-open bin meets $[P_j,Q_j]$ in a prime, define
$$Q_{j,v}(s)=\sum_{\substack{P_j\le p\le Q_j\\e^{v/H_j}\le p<e^{(v+1)/H_j}}}f(p)p^{-s}.$$
For $T_0\le T\le X$, let $\mathcal U_T\subset[T_0,T]$ consist of the $t$ such that, for every $j$, some nonempty bin satisfies $|Q_{j,v}(1+it)|>e^{-\alpha_jv/H_j}$. Then there is a constant $C_\eta$ depending only on $\eta$ such that
$$\int_{T_0}^T|F(1+it)|^2dt\le C_\eta\left(\left(1+\frac{TQ_1}{X}\right)B+\int_{\mathcal U_T}|F(1+it)|^2dt\right).$$
All these frequency sets are finite unions of intervals and points; their integrals are finite Riemann integrals. In particular, the additional hypothesis, with a supplied constant $K\ge0$,
$$\int_{\mathcal U_T}|F(1+it)|^2dt\le K\left(1+\frac TX\right)(\log X)^{-1/50}\quad(T_0\le T\le X)$$
implies
$$\int_{T_0}^T|F(1+it)|^2dt\ll_\eta(1+K)\left(\left(1+\frac{TQ_1}{X}\right)B+(\log X)^{-1/50}\right)\quad(T\ge T_0).$$
The bound on $\mathcal U_T$ is a hypothesis here, not a proved estimate. No numeric value for the final implied constant, or for the parent theorem's constant $20000$, is asserted.

## Statement references

[[lem-ramare-short-bin-factorization-without-frequency-shifts]]

[[lem-multiscale-later-prime-frequency-square-bound]]

[[lem-dirichlet-polynomial-threshold-partition-is-finite]]

[[thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials]]

[Matomäki–Radziwiłł, Proposition 1 and Sections 8.1–8.2](https://arxiv.org/pdf/1501.04585v4)

## Facts & Assumptions

**Given:** The parameters, real multiplicative function, bins, and spacing assumptions in the Statement. The displayed hypothesis with constant $K$ is used only for the final conditional conclusion.

[F1] Short-bin Ramaré factorization applies on a finite union of compact frequency intervals when $1\le H\le X$, $1\le T\le X$, and $a_{mp}=b_mc_p$ for $p\nmid m$. Its error is $O(H^{-1}+P^{-1})$. [[lem-ramare-short-bin-factorization-without-frequency-shifts]]

[F2] In the later-frequency regime, with every current bin small and at least one preceding bin large, the integral is bounded by the finite double sum of the supplier, with terms $e^{-2\alpha u+2\beta k w}(T/X+2^ke^w)(k!)^2$, multiplied by $H\log(2Q/P)$, plus $O(H^{-1}+P^{-1})$. Here $u=v/H$, $w=r/H'$, and $k=\lceil u/w\rceil$. [[lem-multiscale-later-prime-frequency-square-bound]]

[F3] Finite Boolean combinations of polynomial threshold conditions on a compact interval have finite interval decompositions. Changing finitely many endpoints does not change a continuous integrand's integral. [[lem-dirichlet-polynomial-threshold-partition-is-finite]]

[F4] The continuous mean-square bound on a translated interval of length $L\ge2$ is $O((N+L)\sum|d_n|^2)$ for $\sum_{n\le N}d_nn^{-it}$; translation multiplies coefficients by numbers of modulus one. [[thm-montgomery-vaughan-mean-square-for-dirichlet-polynomials]]

## Proof

1.1 The coefficients of $F$ on the $1$-line have squared norm $O(1/X)$ and support at most $2X$. Thus [F4], extending coefficients by zero up to $\lceil2X\rceil$, gives an integral $O(1+T/X)$ on $[0,T]$ for $T\ge T_0>1$ (enlarge a shorter interval to length two if necessary). If $B\ge1/2$ and $T\le X$, this is $O(B)$ and proves the first conclusion immediately. Hence suppose $B<1/2$. If $P_1<3$, then $B\ge(\log2)^{1/3}3^{-1/6}>1/2$, a contradiction. Therefore $\log Q_1>1$, and $P_1^a>2(\log Q_1)^{1/3}>2$ implies $\log P_1>6\log2>4$. Also $H_j>2j^2$. For $j\ge2$, spacing gives $j^2\le\eta\log P_j/(8\log Q_{j-1})\le\sqrt{\log X}$; this holds for $j=1$ as well. Consequently $H_j\le\sqrt{\log X}\exp(\sqrt{\log X}/6)\le X$ for $\log X\ge16$. The short-bin parameter restrictions are satisfied. [F4, given, algebra]

2.1 Define $\mathcal T_j$ as the set where $j$ is the first index for which all bins are small. These sets and $\mathcal U_T$ partition $[T_0,T]$. By [F3] they have finite interval decompositions. Their closures add only finitely many endpoints. On $\overline{\mathcal T_j}$ the current inequalities remain weak upper bounds; for $j\ge2$ at least one preceding bin has the weak lower bound $e^{-\alpha_{j-1}r/H_{j-1}}$, since the finite union of such weak lower-bound sets is closed and contains $\mathcal T_j$. Thus the suppliers apply to these closures. [F3, step 1.1, given, construct]

2.2 Fix $j\ge2$ and write $u=v/H_j$, $w=r/H_{j-1}$, $k=\lceil u/w\rceil$, $\alpha=\alpha_j$, and $\beta=\alpha_{j-1}$. The nonempty bins obey $u\ge\log P_j-1$, $u\le\log Q_j$, $\log P_{j-1}-1\le w\le\log Q_{j-1}$. Spacing gives $u>w>2$. There are $O(H_j\log Q_j)$ current bins and at most this many preceding bins. For integers $k\ge1$, integrating the increasing function $\log x$ gives $\log(k!)\le k\log k-k+1+\log k$, and hence $2^k(k!)^2\le C\exp(2k\log k)$, since $k^2\exp(-(2-\log2)k)$ is bounded. Also $kw\le u+w$ and, by the mean-value theorem for $x\log x$, $k\log k\le(u/w)\log(u/w)+\log u+1$. It follows that $2k\log k\le\eta u/(2j^2)+2\log\log Q_j+2$, using the first spacing condition. [step 1.1, given, algebra]

3.1 Let $\mathcal S_j$ be the divisibility condition with range $j$ omitted, on all positive integers. Apply [F1] with $a_n=b_n=f(n)\mathbf1_{\mathcal S_j}(n)$ and $c_p=f(p)$. For $p$ in range $j$ and $p\nmid m$, disjointness of the ranges gives $\mathbf1_{\mathcal S_j}(mp)=\mathbf1_{\mathcal S_j}(m)$ and multiplicativity gives the coefficient identity. The factorization's restriction $\omega_{[P_j,Q_j]}(n)>0$ produces exactly $F$. Its residual polynomial is supported on $[Xe^{-u},2Xe^{-u}]$, $u=v/H_j$, and has coefficients of modulus at most one before its $m^{-s}$ weight. Write it as $R_{j,v}$. Hence on $\overline{\mathcal T_1}$ the main contribution is at most $CH_1\log Q_1\sum_v e^{-2\alpha_1v/H_1}\int_{-T}^T|R_{1,v}(1+it)|^2dt$, plus $O(H_1^{-1}+P_1^{-1})$. [F1, step 1.1, step 2.1, given, algebra]

4.1 By [F4], each residual square integral is $O(1+(T/X)e^{v/H_1})$, since $Xe^{-v/H_1}\ge X/Q_1\ge1$. The bin indices satisfy $H_1\log P_1-1\le v\le H_1\log Q_1$. Since $\alpha_1=3a/2>0$, the geometric sum of $e^{-2\alpha_1v/H_1}$ is $O_\eta(H_1P_1^{-3a})$. Bound $1+(T/X)e^{v/H_1}$ by $1+TQ_1/X$. The main contribution in step 3.1 is therefore $O_\eta((1+TQ_1/X)H_1^2\log Q_1P_1^{-3a})=O_\eta((1+TQ_1/X)B)$. This argument permits all $0<\eta<1/6$; its constant may depend on $\eta$. [F4, step 3.1, algebra]

4.2 Apply [F2] on $\overline{\mathcal T_j}$. For each term, $\beta\ge0$ and step 2.2 give $e^{2\beta kw}\le e^{2\beta u+2\beta w}$ and $T/X+2^ke^w\le(1+T/X)2^ke^w$. Since $0\le\beta<1/4$ and $e^w\le Q_{j-1}$, the double sum, including its exterior factor, is at most a constant times $$\left(1+\frac TX\right)H_j^3(\log Q_j)^5Q_{j-1}^2\exp\left(2(\beta-\alpha)u+\frac{\eta u}{2j^2}\right).$$ Here one takes the largest term over the finite bin pairs; an empty pair set contributes zero. The first spacing condition implies $\log\log Q_j\le\frac1{96}\log Q_{j-1}$, so $(\log Q_j)^5\le Q_{j-1}^{1/2}$. Moreover $H_j^3=j^6P_1^{3a}/\log Q_1\le j^6Q_{j-1}^{1/2}$. Thus the prefactor apart from $1+T/X$ is at most $j^6Q_{j-1}^3$. [F2, step 2.1, step 3.1, step 2.2, algebra]

5.1 The exact difference $\beta-\alpha=-\eta/(2j(j-1))$ makes the exponent in step 4.2 at most $-\eta u/(2j^2)$. Replacing $u$ by $\log P_j-1$ loses at most an absolute factor. The second spacing condition gives $\exp(-\eta\log P_j/(2j^2))\le Q_{j-1}^{-4}j^{-8}$. Therefore the main contribution on $\mathcal T_j$ is $O((1+T/X)/(j^2Q_{j-1}))\le O((1+T/X)/(j^2P_1))$, plus its factorization error. [step 4.2, given, algebra]

6.1 Summing factorization errors gives $O(B)$: $\sum H_j^{-1}=B\sum j^{-2}\ll B$, while spacing gives $P_j\ge P_1^{j^2}$ for $j\ge2$, so $\sum P_j^{-1}\ll P_1^{-1}\le B$ in the present nontrivial case. The elementary bound $\sum j^{-2}\le2$ follows by comparison with the integral of $x^{-2}$. Steps 4.1 and 5.1 and the finite partition in step 2.1 now give the first asserted inequality. Overlap of closures affects only finitely many endpoints, which contribute zero by [F3]. [F3, step 2.1, step 4.1, step 5.1, algebra]

7.1 If the additional bound with $K$ holds, insert it in step 6.1. For $T\le X$, $1+T/X\le2$, giving the stated conditional conclusion. For $T>X$, step 1.1 gives $O(1+T/X)$. Since $Q_1B\ge Q_1^{1-a}(\log Q_1)^{1/3}>1$ for $Q_1\ge2$ and $a<1/6$, one has $1+T/X\le2(T/X)Q_1B$. This proves the same conditional conclusion for $T>X$ without using any assertion about $\mathcal U_T$ there. [step 1.1, step 6.1, given, algebra] ∎

## Remarks

This proves the ordinary-frequency assembly and a conditional reduction. It does not prove the additional bound on $\mathcal U_T$. To recover the source's full Proposition 1, one must supply that estimate for the maximal range index $J$ of Section 2, including the analytic estimates in Section 8.3. The reduction itself does not need maximality of $J$ and therefore does not assume it. The source's exponents $1/3$, $1/6-\eta$, $1/15$, and the conditional $1/50$ are retained; uniformity as $\eta$ approaches $1/6$ is not claimed.
