---
id: thm-eulers-formula
kind: theorem
title: "Euler's formula: $\\exp(i\\theta)=\\cos\\theta+i\\sin\\theta$ for every real $\\theta$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complex-exponential, def-complex-integer-powers, lem-complex-exponential-series-converges-everywhere, def-sine-and-cosine-by-power-series, thm-absolute-convergence-of-complex-series, thm-direct-comparison-test, thm-componentwise-convergence-and-completeness, lem-series-linearity, thm-grouping-of-series]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "J. Lebl, Basic Analysis I: Complex Numbers and the Complex Exponential"
      url: "https://www.jirka.org/ra/html/sec_complexexp.html"
pipeline_run: null
---

## Statement

For every real $\theta$, $\exp(i\theta)=\cos\theta+i\sin\theta$.

## Facts & Assumptions

**Given:** A real $\theta$.

[L1] [[def-complex-exponential]] defines $\exp z$ as the sum of the complex series with terms $z^n/n!$, where the factorial is embedded in the complex field.

[L2] [[lem-complex-exponential-series-converges-everywhere]] states that for every $z\in\mathbb C$, the series $\sum z^n/n!$ converges absolutely.

[L3] [[thm-direct-comparison-test]] states that if $0\le u_n\le v_n$ eventually and $\sum v_n$ converges, then $\sum u_n$ converges.

[L4] [[thm-absolute-convergence-of-complex-series]] states that every absolutely convergent complex series converges.

[L5] [[thm-componentwise-convergence-and-completeness]] states that a sequence in $\mathbb R^2$ converges exactly when each coordinate sequence converges.

[L6] [[lem-series-linearity]] states that convergent real series add and scale termwise, with the corresponding sums.

[L7] [[thm-grouping-of-series]] states that a convergent real series may be grouped into consecutive finite blocks without changing its sum.

[L8] [[def-sine-and-cosine-by-power-series]] defines sine and cosine by the real series $\sum_{k=0}^{\infty}(-1)^k\theta^{2k+1}/(2k+1)!$ and $\sum_{k=0}^{\infty}(-1)^k\theta^{2k}/(2k)!$.

[L9] [[def-complex-integer-powers]] defines natural complex powers by $z^0=1$ and $z^{n+1}=z^nz$.

## Proof

**Proof technique:** direct.

1.1 Put $a_n=(i\theta)^n/n!$, and define the parity masks by $e_n=a_n$ for even $n$ and $e_n=0$ for odd $n$, while $o_n=0$ for even $n$ and $o_n=a_n$ for odd $n$. By [L1] and [L2], $\sum a_n$ converges absolutely and has sum $\exp(i\theta)$. [L1, L2, construct]

1.2 Induction from $i^2=-1$ and the recursion in [L9] gives $i^{2k}=(-1)^k$ and $i^{2k+1}=i(-1)^k$ for every $k\in\mathbb N$. Hence $e_{2k}=(-1)^k\theta^{2k}/(2k)!$, $e_{2k+1}=0$, $o_{2k}=0$, and $o_{2k+1}=i(-1)^k\theta^{2k+1}/(2k+1)!$. [L9, algebra]

2.1 Since $0\le|e_n|\le|a_n|$ and $0\le|o_n|\le|a_n|$, [L3] shows that both modulus series converge. Thus $\sum e_n$ and $\sum o_n$ are absolutely convergent and hence converge by [L4]. [L3, L4, step 1.1]

3.1 By [L5], the two coordinate series of $e$ and $o$ converge. Since $a_n=e_n+o_n$, applying [L6] in each coordinate gives $\sum_{n=0}^{\infty}a_n=\sum_{n=0}^{\infty}e_n+\sum_{n=0}^{\infty}o_n$. [L5, L6, step 2.1]

3.2 Apply [L7] to each real coordinate series of $e$, with consecutive blocks $[2k,2k+2)$. By step 1.2 the real-coordinate blocks are $(-1)^k\theta^{2k}/(2k)!$ and the imaginary-coordinate blocks are $0$. Therefore [L8] identifies $\sum e_n=\cos\theta$. [L5, L7, L8, step 2.1, step 1.2]

3.3 Apply the same coordinatewise grouping to $o$. Its real-coordinate blocks are $0$ and its imaginary-coordinate blocks are $(-1)^k\theta^{2k+1}/(2k+1)!$, so [L8] gives $\sum o_n=i\sin\theta$. [L5, L7, L8, step 2.1, step 1.2]

4.1 Substitute steps 3.2 and 3.3 into step 3.1 and use step 1.1: $\exp(i\theta)=\cos\theta+i\sin\theta$. [step 1.1, step 3.1, step 3.2, step 3.3] ∎
