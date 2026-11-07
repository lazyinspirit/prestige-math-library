---
id: lem-heath-brown-target-scale-hybrid-large-values
kind: lemma
title: "Target-scale hybrid large-values bound for the Gaussian detector"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps: [lem-dirichlet-log-gaussian-short-zero-detector-away-from-half, lem-dirichlet-character-hybrid-reflection-large-values, thm-divisor-function-subpolynomial-bound, thm-canonical-prime-factorisation, thm-gaussian-integral]
justified_by: []
proof_strategy: direct
axiom_use: "The proof uses finite families and the stated Gaussian detector and hybrid large-values interfaces."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "D. R. Heath-Brown, The Density of Zeros of Dirichlet's L-Functions"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/7BEA17255131BE21F20DED8223306040/S0008414X00014942a.pdf/div-class-title-the-density-of-zeros-of-dirichlet-s-span-class-italic-l-span-functions-div.pdf"
      locator: "§2, equations (6), (8) and (9); this proof uses an integrated Gaussian detector"
verification: {}
---

## Statement

Let $0<\delta_0\le1/4$, $0<\epsilon\le\min(1/160,\delta_0/2)$, $A\ge1$, $1/2+\delta_0\le\sigma\le1$, and $Q,T\ge1$. Put $\alpha=20\epsilon$ and let $C_{\alpha,\delta_0},P_{\alpha,\delta_0}$ be the constants in the Gaussian zero detector away from the critical line in the references. Set
$$P=C_{\alpha,\delta_0}Q(T+4),\quad Y_H=P^{1/2+4\epsilon/(2\sigma-1)}.$$
Assume $P\ge P_{\alpha,\delta_0}$ and choose $2Y_H\le U\le P^A$. Let $a\ge1$ be the unique integer with $(2Y_H)^a\le U<(2Y_H)^{a+1}$. Let $\mathcal Z$ be a finite indexed family of zeros $\rho=\beta+i\gamma$ of primitive Dirichlet $L$-functions of conductor at most $Q$, with $\sigma\le\beta\le1$, $|\gamma|\le T$, and at least unit spacing between distinct ordinates of each character label. For conductor one require $|\gamma|>(\log P)^2$. Put $R=|\mathcal Z|$.

There exists $W$ with $U^{a/(a+1)}<W\le U$ such that
$$R\le C_{\epsilon,A,\delta_0}P^{2\epsilon}\left(W^{2-2\sigma}+Q^2T\,W^{4-6\sigma}\right).$$
The constant depends only on the indicated parameters. This is a locally derived Gaussian-integrated version of the Huxley/Halász-type input in Heath–Brown's equation (9); it does not assert the source's pointwise detector, Jutila's higher-moment bound, or the full density theorem.

## Statement references

[[lem-dirichlet-log-gaussian-short-zero-detector-away-from-half]]

[[lem-dirichlet-character-hybrid-reflection-large-values]]

[Heath-Brown, *The Density of Zeros of Dirichlet's L-Functions*, §2, equations (6), (8) and (9)](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/7BEA17255131BE21F20DED8223306040/S0008414X00014942a.pdf/div-class-title-the-density-of-zeros-of-dirichlet-s-span-class-italic-l-span-functions-div.pdf)

## Facts & Assumptions

**Given:** The parameters and finite separated family in the Statement.

[F1] The Gaussian detector supplies common coefficient arrays bounded by $d(n)$, supported on $K<n\le N$ with $K=\lfloor P^\epsilon\rfloor$, $N\le P^{1/2+7\epsilon/5}$, and its stated two-term detection inequality. [[lem-dirichlet-log-gaussian-short-zero-detector-away-from-half]]

[F2] For finite separated primitive-character samples, the hybrid reflection inequality bounds the sum of squared polynomial values by $C(NG+R^{2/3}(NH)^{1/3}G^{2/3}G_2^{1/3}\log(2H))$, with arbitrary nonnegative varying real parts and $H=Q^2(U+2)$ for an interval of length $U$. [[lem-dirichlet-character-hybrid-reflection-large-values]]

[F3] The divisor function satisfies $d(u)\le C_\eta u^\eta$ for every $\eta>0$, and prime-factor counting gives $d_k(u)\le d(u)^{k-1}$. [[thm-divisor-function-subpolynomial-bound]] [[thm-canonical-prime-factorisation]]

[F4] The normalized Gaussian $\varphi(v)=(2\pi)^{-1/2}e^{-v^2/2}$ has integral one. [[thm-gaussian-integral]]

## Proof

1.1 As in the stated parameter definitions, $K<n\le N$ implies $P^\epsilon<n\le Y_H$. Partition this range into dyadic blocks $(M_j,2M_j]$ with $M_j=2^jP^\epsilon<N$ and $J\le1+\log_2N$. For each $j$ put $r_j=\lfloor\log U/\log(2M_j)\rfloor$ and $W_j=(2M_j)^{r_j}$. The inequalities $2M_j<2Y_H\le U\le P^A$ give $$1\le a\le r_j\le b:=\lceil A/\epsilon\rceil,\qquad U^{a/(a+1)}<W_j\le U.$$ The final inequality follows from $W_j\le U<(2M_j)^{r_j+1}$. [F1, given, construct, algebra]

2.1 Split each detector polynomial into its dyadic values $A_j(\rho)$ and $B_j(\rho;v)$. By [F1] and [F4], each zero has a block $j$ for which either $|A_j(\rho)|\ge(2C_{\alpha,\delta_0}J)^{-1}$ or $\int\varphi(v)|B_j(\rho;v)|dv\ge(2C_{\alpha,\delta_0}J\sqrt{2\pi})^{-1}$. Assign each indexed zero to one such block and type. With $$V=(2C_{\alpha,\delta_0}J\sqrt{2\pi})^{-b},$$ every assigned $A$-type zero satisfies $|A_j(\rho)^{r_j}|\ge V$, while every assigned $B$-type zero satisfies $\int\varphi(v)|B_j(\rho;v)^{r_j}|^2dv\ge V^2$, by Jensen. [F1, F4, step 1.1, given, choose, algebra]

3.1 Fix one block and type, and write $R_j$ for its assigned count. Expanding the $r_j$th powers gives Dirichlet polynomials with coefficients $c(u;v)$ independent of the zero and character, supported on $2^{-r_j}W_j<u\le W_j$, and bounded by $d_{2r_j}(u)$. For fixed $v$, apply [F2] on $[-T,T]$ to coefficients $c(u;v)u^{-\sigma}$ and sample real parts $\beta-\sigma\ge0$. Its parameter satisfies $H\le4Q^2T$. Applying [F3] to $d(u)^{4b}$ gives, uniformly in $v$ and for any fixed $\delta>0$, $$G,\ G_2\le C_{b,\delta}W_j^{1-2\sigma+\delta}.$$ For $A$-type samples, the threshold bounds the sum below by $R_jV^2$. For $B$-type samples, integrate the same estimate in $v$ against $\varphi$; step 2.1 gives the same lower bound and [F4] preserves the uniform upper bound. Therefore $$R_jV^2\le C\left(W_jG_*+R_j^{2/3}(W_jH)^{1/3}G_*\log(2H)\right),\quad G_*=C_{b,\delta}W_j^{1-2\sigma+\delta}.$$ [F2, F3, F4, step 1.1, step 2.1, given, algebra]

4.1 If the first term on the right of step 3.1 is at least half the sum, then $R_j\ll W_jG_*/V^2$. Otherwise the second is at least half and division by $R_j^{2/3}$ gives $R_j\ll W_jH G_*^3\log^3(2H)/V^6$; the empty case is immediate. Summing over at most $2J$ assigned groups and choosing the largest bound yields, for some $W=W_j$, $$R\le C_{\epsilon,A,\delta_0,\delta}J^{6b+1}(1+\log P)^3\left(W^{2-2\sigma+\delta}+Q^2T W^{4-6\sigma+3\delta}\right).$$ Take $\delta=\epsilon/(3A)$. Since $W\le P^A$, $W^{3\delta}\le P^\epsilon$, while the fixed power of $J\ll\log P$ and the logarithm are $O_{\epsilon,A,\delta_0}(P^\epsilon)$. This proves the Statement. If $R=0$, choose any $W$ from step 1.1. [F4, step 1.1, step 2.1, step 3.1, given, choose, algebra] ∎
