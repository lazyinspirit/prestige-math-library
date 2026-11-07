---
dependency_level: 4
id: thm-polymath8b-geh-dhl-3-2-criterion
kind: theorem
title: "Polymath8b’s GEH criterion for DHL[3,2]"
status: draft
origin: pipeline
deps:
  - thm-polymath8b-piecewise-polynomial-witness-for-dhl-3-2
  - def-generalized-elliott-halberstam-hypothesis
  - def-admissible-prime-tuple
  - lem-proper-riemann-direct-selberg-forms-and-weighted-almost-primality
  - lem-vanishing-marginal-smooth-cutoff-and-auxiliary-trace-tests
  - lem-polymath8b-rough-prime-products-and-difference-energy
  - lem-geh-prime-level-and-rough-divisor-product-distribution
  - lem-prime-level-shifted-endpoint-and-divisor-weight-control
  - lem-prime-power-removal-for-fixed-tuple-divisor-weights
  - lem-nonnegative-prime-cluster-weights-detect-bounded-gaps
  - thm-chinese-remainder-theorem
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "D. H. J. Polymath, “Variants of the Selberg sieve, and bounded intervals containing many primes” (2014), arXiv v4"
      url: "https://arxiv.org/pdf/1407.4897v4"
proof_strategy: direct
axiom_use: No choice hypothesis; finite piecewise-polynomial witness, specified smooth tests and proper Riemann form reconstruction. GEH at every fixed interior level is given.
---

## Statement

Assume GEH($\theta$) for every fixed $0<\theta<1$. For every admissible triple $H=\{h_1<h_2<h_3\}$, infinitely many positive integers $n$ have at least two prime values among $n+h_1,n+h_2,n+h_3$. This is the weak Dickson–Hardy–Littlewood conclusion DHL[3,2].


## Statement references

[[def-generalized-elliott-halberstam-hypothesis|GEH hypothesis]]

[[def-admissible-prime-tuple|Admissibility]]

[Polymath8b, Theorem 3.14 (the distinct vanishing-marginal criterion)](https://arxiv.org/pdf/1407.4897v4)

[[thm-polymath8b-piecewise-polynomial-witness-for-dhl-3-2|Piecewise-polynomial witness]]


## Facts & Assumptions

**Given:** Exactly the original Statement: the full family-uniform GEH$(\theta)$ for every fixed $0<\theta<1$, and one fixed admissible integer triple.

[F1] [[thm-polymath8b-piecewise-polynomial-witness-for-dhl-3-2]] supplies its complete finite piecewise-polynomial symmetric witness, support sum at most $3/2$, each marginal zero above other-coordinate sum $5/4$, and truncated-marginal ratio above2 at cutoff $3/4$. Its finite polynomial function is bounded on its compact support; the accepted sixty-cell arithmetic is not rechecked here.

[F2] [[lem-vanishing-marginal-smooth-cutoff-and-auxiliary-trace-tests]] yields finite smooth tensor sums $f,g_i$ and fixed $0<\theta<1$, $A,B,C<1$ with $4A/3<\theta$, $B+C<\theta$, $2B<\theta$ and $\sum_i\beta_i>I_f>0$. Full component support sums are at most $A$; full components nonzero at the $i$th coordinate origin have outer support sum at most $C$; auxiliary $g_i$ outer support sums are at most $B$. Here $\beta_i=2\int U_iV_i-\int V_i^2$ for their mixed-derivative traces.

[F3] [[lem-proper-riemann-direct-selberg-forms-and-weighted-almost-primality]] gives direct denominator-$p$ and denominator-$(p-1)$ smooth forms, plus the uniform $O(\delta+1/\log N)$ mixed weighted rough-removal estimate, with no choice premise.

[F4] [[lem-polymath8b-rough-prime-products-and-difference-energy]] supplies the fixed-$\delta$ shifted rough-coordinate moment $[C_\delta(u,v)+o_\delta(1)]N/\log N$ and $C_\delta(u,v)\to\int_0^1u'v'$ as $\delta\downarrow0$.

[F5] [[lem-geh-prime-level-and-rough-divisor-product-distribution]] derives from the GIVEN [[def-generalized-elliott-halberstam-hypothesis]] every fixed prime level below $\theta$ and every logarithmic saving for the fixed rough-coordinate coefficient family, with squarefree modulus weight $\tau(q)^s$ at every fixed $s$. Its full family-uniform/all-saving input is retained, not replaced by a single output saving.

[F6] [[lem-prime-level-shifted-endpoint-and-divisor-weight-control]] supplies divisor-weighted errors at the two exact shifted full von Mangoldt endpoints.

[F7] [[lem-prime-power-removal-for-fixed-tuple-divisor-weights]] removes proper powers globally, before summing moduli, for arbitrary bounded finite coefficient arrays of product support $R<N/2$.

[F8] [[lem-nonnegative-prime-cluster-weights-detect-bounded-gaps]] converts $S_2>S_1$ for nonnegative weights into infinitely many translates with two prime coordinates.

[F9] [[def-admissible-prime-tuple]] and [[thm-chinese-remainder-theorem]] give a good presieving residue modulo the finite primorial; the least such residue is a canonical choice.

## Proof

1.1 Apply [F2] to the particular [F1] witness and fix all its data. Choose fixed numbers $\max(4A/3,B+C,2B)<\theta_0<\lambda<\theta<1$; the given hypothesis supplies GEH$(\theta)$. Write $T=\log N$, $y=\log\log\log N$, $W=\prod_{p\le y}p$, $a=\varphi(W)/W$, and $D_N=N/[W(aT)^3]$. Let $b$ be the least good residue from [F9]. Every prime divisor of a fixed nonzero shift difference is eventually in $W$. For each full tensor component put $\lambda_{f_{r,\ell}}(n+h_\ell)=\sum_{d\mid n+h_\ell}\mu(d)f_{r,\ell}(\log d/T)$ and [F1, F2, F9, given, construct, algebra]
$$B_f(n)=\sum_rc_r\prod_{\ell=1}^3\lambda_{f_{r,\ell}}(n+h_\ell),\qquad B_i(n)=\sum_rc_{i,r}\prod_{\ell=1}^3\lambda_{g_{i,r,\ell}}(n+h_\ell).$$
Use only $N\le n<2N$, $n\equiv b\pmod W$. All components have product support at most $N^A<N/2$ eventually, and bounded coefficients. Effective squarefree divisor tuples are coprime to $W$ and have pairwise coprime coordinates: otherwise their prime would divide a shift difference outside $W$. Every individual nonnegative support endpoint is at most $A<1$. [F1, F2, F9, given, construct, algebra]

2.1 For a pair of full components put $s_\ell=S(f_{r,\ell})$, $t_\ell=S(f_{r',\ell})$. Their total is at most $2A$. Some omitted coordinate $j$ therefore satisfies $\sum_{\ell\ne j}(s_\ell+t_\ell)\le4A/3<\theta_0$. Fix $0<\delta<1/60$. By [F3], removing $n$ whose $n+h_j$ has least prime factor at most $N^\delta$ changes this pair's mixed sum by $O(\delta+1/T)D_N$. The assertion is valid for signed factors by bounding their absolute mixed product; the constant is independent of small fixed $\delta$. Expand the divisor sums in the two OUTER coordinates only. A compatible pair gives [F2, F3, F9, step 1.1, algebra]
$$q=W\prod_{\ell\ne j}[d_\ell,e_\ell]\le WN^{4A/3}\le N^{\theta_0}$$
eventually. The residue of $u=n+h_j$ modulo $q$ is reduced, since at an outside coordinate prime it is $h_j-h_\ell\ne0$, and at $W$ it is the good residue. The exact interval is $N+h_j-1<u\le2N+h_j-1$. [F2, F3, F9, step 1.1, algebra]

3.1 Apply [F5] to the rough sequence $\lambda_{f_{r,j}}\lambda_{f_{r',j}}$ on those exact shifted endpoints. Both smooth supports are less than1. For each squarefree outer modulus, every outside prime has at most six membership/coordinate choices (two coordinates times d-only/e-only/both), so its coefficient multiplicity is bounded by $\tau_9(q)$, times a fixed coefficient bound. On squarefree moduli $\tau_9(q)\le\tau(q)^4$; [F5] therefore gives every logarithmic saving after summing all outer tuples. Choose a saving, for example100, larger than the fixed normalization loss. Indeed $W\le T$ eventually and $a\le1$, hence $D_N\ge N/T^4$. Thus these errors are $o_\delta(D_N)$. The principal unit mean is $\varphi(q)^{-1}$ times the rough sum restricted to $(u,q)=1$. [F5, step 1.1, step 2.1, algebra]

4.1 Replacing that restricted rough sum by its unrestricted version costs $o_\delta(D_N)$ after summing outer coefficients. Here are the full positive bounds. On the rough set $n+h_j\le3N$ has at most $O(1/\delta)$ prime factors, so each divisor product is bounded by a fixed $\delta$-dependent constant. A deleted $u$ shares a prime $p>N^\delta$ with an outer lcm; the shifted interval contains $O(N/p)$ multiples. The outer absolute form sum is at most a fixed power of $T$, from the finite Euler bound $\sum_{\ell\le N^2}\mu^2(\ell)3^{\omega(\ell)}/\varphi(\ell)\ll T^{C'}$ in [F3]'s elementary estimates. Requiring that outer lcm to contain $p$ gains the further factor $O(1/p)$, by its three membership patterns and denominator $p-1$. Drop remaining restrictions for an upper bound, and sum over the two designated outer coordinates. The correction is [F3, step 2.1, step 3.1, algebra]
$$\ll_\delta\frac N{\varphi(W)}T^{C'}\sum_{p>N^\delta}p^{-2} \ll_\delta N^{1-\delta}T^{C'}/\varphi(W)=o_\delta(D_N).$$
There is no missing endpoint error: for $p\le3N$, $N/p+1\le4N/p$; larger $p$ cannot divide a positive $u$ in this interval. [F3, step 2.1, step 3.1, algebra]

5.1 The remaining outer sum is exactly the two-coordinate form [F3] with $\chi(p)=p-1$, $Q=W$, $L=T$. It contributes $(aT)^{-2}[\prod_{\ell\ne j}\int f_{r,\ell}'f_{r',\ell}'+o(1)]$. The rough coordinate contributes $[C_\delta(f_{r,j},f_{r',j})+o_\delta(1)]N/T$ by [F4], and the principal coefficient is $1/\varphi(W)=1/(aW)$. Thus the pair moment equals [F3, F4, F5, step 2.1, step 3.1, step 4.1, algebra]
$$D_N\left[C_\delta(f_{r,j},f_{r',j})\prod_{\ell\ne j}\int f_{r,\ell}'f_{r',\ell}'+o_\delta(1)+O(\delta)\right].$$
First let $N\to\infty$ at fixed $\delta$, then $\delta\downarrow0$. By [F4] and the supports below1, $C_\delta\to\int_0^\infty f_{r,j}'f_{r',j}'$. These two limit estimates imply the ordinary $o(1)$ assertion: for each tolerance choose one sufficiently small fixed $\delta$, then a sufficiently large $N$. Summing finitely many pairs gives
$$S_1=\sum_nB_f(n)^2=D_N[I_f+o(1)].$$
The omitted coordinate may depend on the component pair; there are only finitely many pairs and every gap was fixed. [F3, F4, F5, step 2.1, step 3.1, step 4.1, algebra]

6.1 After the first-moment evaluation of step 5.1, for the $i$th prime coordinate evaluate a full/auxiliary pair or an auxiliary/auxiliary pair. On a prime $n+h_i$, every one-coordinate divisor weight equals its test value at0: its only other divisor is the prime, with logarithmic argument tending to1 and hence outside every fixed support bounded by $A<1$. Full components with their $i$th value0 contribute nothing. For every remaining full/auxiliary pair the other-coordinate support sum is at most $C+B<\theta_0$; for auxiliary/auxiliary it is at most $2B<\theta_0$. These are the exact new trace-support bounds needed here. By [F5] the primes have level $\lambda>\theta_0$. Apply [F7] first to the bounded finite product-support arrays, using polarization $uv=((u+v)^2-(u-v)^2)/4$ for mixed pairs. With a fixed exponent, say $1/10$, its global proper-power error is $O(N^{3/5}T^2)=o(D_NT)$, before any modulus expansion. [F2, F5, F7, step 1.1, step 5.1, algebra]

7.1 Expand the two remaining coordinates. All compatible CRT classes are reduced and have modulus $q\le WN^{\max(B+C,2B)}\le N^{\theta_0}$ eventually. The full-weight endpoints are again exactly $N+h_i-1$ and $2N+h_i-1$. The prime level $\lambda$ covers this power interior range at both endpoints; [F6] supplies every fixed logarithmic saving with multiplicity weight $\tau_9(q)$. Consequently the total discrepancy is $o(D_NT)$. The principal term is $N/\varphi(W)$ times the two-coordinate $\chi(p)=p-1$ form in [F3], times the two coordinate values at0. Its normalization is [F3, F5, F6, F9, step 1.1, step 6.1, algebra]
$$\frac N{\varphi(W)}(aT)^{-2}=D_NT.$$
Summing the fixed pairs therefore gives
$$T_i(f,g_i)=D_NT[\int U_iV_i+o(1)],\qquad T_i(g_i,g_i)=D_NT[\int V_i^2+o(1)],$$
where $T_i(u,v)=\sum_n1_{\mathbb P}(n+h_i)\log(n+h_i)B_u(n)B_v(n)$. There is no signed prime-count/log conversion in these evaluations. [F3, F5, F6, F9, step 1.1, step 6.1, algebra]

8.1 Pointwise $B_f^2\ge2B_fB_i-B_i^2$. Multiply by the nonnegative prime-LOG weight and apply step 7.1 to obtain $T_i(f,f)\ge D_NT[\beta_i-o(1)]$. The actual weights $w(n)=B_f(n)^2$ are nonnegative. For large $N$, every positive $n+h_i$ has logarithm at most $T+C_H$, with fixed $C_H\ge0$, so their full prime-count sum satisfies [F2, F8, step 5.1, step 7.1, algebra]
$$S_2=\sum_nw(n)\sum_i1_{\mathbb P}(n+h_i) \ge\frac{\sum_iT_i(f,f)}{T+C_H} \ge D_N[\sum_i\beta_i-o(1)]>S_1.$$
Here the strict fixed margin is exactly [F2] and $I_f>0$ ensures nonzero weights eventually. We converted only the full nonnegative weights. By [F8], arbitrarily large intervals contain a translate with at least two primes; its least coordinate tends to infinity, yielding infinitely many positive translating integers. This proves the entire original Statement. The numerical witness, accepted GEH interfaces and all original GEH hypotheses were preserved; no truth of GEH, external theorem import, or choice axiom was inferred. [F2, F8, step 5.1, step 7.1, algebra] ∎

## Proof status

Complete at the original unqualified GEH-for-every-fixed-level Statement. The distinct source Theorem3.14 trace geometry is reconstructed by the two displayed local suppliers, rather than applying the ordinary enlarged criterion outside its support. The sixty-cell witness is used only at its accepted interface; no numerical replay or old proof review was repeated. Proper Riemann reconstructions remove the unused historical Countable Choice route without narrowing the public claim.
