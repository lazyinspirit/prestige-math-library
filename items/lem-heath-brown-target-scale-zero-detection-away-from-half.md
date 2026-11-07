---
id: lem-heath-brown-target-scale-zero-detection-away-from-half
kind: lemma
title: "Target-scale zero detection and mean square away from the critical line"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 4
deps: [lem-dirichlet-log-gaussian-short-zero-detector-away-from-half, lem-dirichlet-character-hybrid-sampling-with-varying-real-parts, thm-divisor-function-subpolynomial-bound, thm-canonical-prime-factorisation, thm-gaussian-integral]
justified_by: []
proof_strategy: direct
axiom_use: "The proof uses finite character sums and the stated Gaussian detector and sampling interfaces."
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "D. R. Heath-Brown, The Density of Zeros of Dirichlet's L-Functions"
      url: "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/7BEA17255131BE21F20DED8223306040/S0008414X00014942a.pdf/div-class-title-the-density-of-zeros-of-dirichlet-s-span-class-italic-l-span-functions-div.pdf"
      locator: "§2, equations (4)–(8); local proof uses the Gaussian-integrated detector instead of the source's pointwise detector"
verification: {}
---

## Statement

Let $0<\delta_0\le1/4$, $0<\epsilon\le\min(1/160,\delta_0/2)$, $A\ge1$, $1/2+\delta_0\le\sigma\le1$, and $Q,T\ge1$. Put $\alpha=20\epsilon$ and let $C_{\alpha,\delta_0},P_{\alpha,\delta_0}$ be the constants in the Gaussian Dirichlet zero detector in the references. Set
$$P=C_{\alpha,\delta_0} Q(T+4),\quad K=\lfloor P^\epsilon\rfloor,\quad N=\lfloor K P^{1/2+2\epsilon/5}\rfloor,\quad Y_H=P^{1/2+4\epsilon/(2\sigma-1)}.$$
Assume $P\ge P_{\alpha,\delta_0}$ and choose $U$ with $2Y_H\le U\le P^A$. Let $a\ge1$ be the unique integer satisfying $(2Y_H)^a\le U<(2Y_H)^{a+1}$. Let $\mathcal Z$ be any finite indexed family of zeros $\rho=\beta+i\gamma$ of primitive Dirichlet $L$-functions of conductor at most $Q$, with $\sigma\le\beta\le1$ and $|\gamma|\le T$. Assume ordinates of distinct indices with the same character label are separated by at least $1$, and for conductor one assume $|\gamma|>(\log P)^2$. Put $R=|\mathcal Z|$.

There is a real $W$ satisfying
$$U^{a/(a+1)}<W\le U$$
such that
$$R\le C_{\epsilon,A,\delta_0}\,P^{2\epsilon}(Q^2T+W)W^{1-2\sigma}.$$
The constant depends only on $\epsilon,A,\delta_0$. For $R>0$, $W$ may be chosen as $(2M)^r$ for a nonempty dyadic block $M<n\le2M$ of the common detector coefficient support and an integer $1\le r\le\lceil A/\epsilon\rceil$. This is a target-scale version of the mean-square zero-detection input in Heath–Brown §2 uniformly for $\sigma\ge1/2+\delta_0$; the Gaussian second detector term is handled inside the proof and is not asserted to be a pointwise common polynomial. The result does not establish the Halász or Jutila estimates or the complete density theorem.

## Statement references

[[lem-dirichlet-log-gaussian-short-zero-detector-away-from-half]]

[[lem-dirichlet-character-hybrid-sampling-with-varying-real-parts]]

[Heath-Brown, *The Density of Zeros of Dirichlet's L-Functions*, §2, equations (4)–(8)](https://www.cambridge.org/core/services/aop-cambridge-core/content/view/7BEA17255131BE21F20DED8223306040/S0008414X00014942a.pdf/div-class-title-the-density-of-zeros-of-dirichlet-s-span-class-italic-l-span-functions-div.pdf)

## Facts & Assumptions

**Given:** The parameter ranges, target scale and separated finite zero family in the Statement.

[F1] The short Gaussian detector supplies two coefficient arrays common to all characters and zeros, with $|a(n)|,|b(n;v)|\le d(n)$, support $K<n\le N$, and the stated integral detection inequality. [[lem-dirichlet-log-gaussian-short-zero-detector-away-from-half]]

[F2] Primitive-character hybrid sampling with nonnegative varying real parts bounds a separated family's squared polynomial values using weights $Q^2(2T)+u$ and $W_N(u)=1+\log(\log(2N)/\log(2u))$; the label weights are at least one. [[lem-dirichlet-character-hybrid-sampling-with-varying-real-parts]]

[F3] For every $\eta>0$, $d(u)\le C_\eta u^\eta$, and prime-factor counting gives $d_k(u)\le d(u)^{k-1}$. [[thm-divisor-function-subpolynomial-bound]] [[thm-canonical-prime-factorisation]]

[F4] The normalized Gaussian $\varphi(v)=(2\pi)^{-1/2}e^{-v^2/2}$ has total mass one. [[thm-gaussian-integral]]

## Proof

1.1 Since $n>K=\lfloor P^\epsilon\rfloor$ implies $n>P^\epsilon$, and $N\le P^{1/2+7\epsilon/5}\le Y_H$, partition the coefficient support into dyadic blocks $(M_j,2M_j]$ with $M_j=2^jP^\epsilon<N$. These form a finite nonempty list of size $J\le1+\log_2N$: indeed $N>P^\epsilon$ because $P\ge e^{64}$ and the displayed exponent in $X=P^{1/2+2\epsilon/5}$ is larger than $\epsilon$. Put $r_j=\lfloor\log U/\log(2M_j)\rfloor$ and $W_j=(2M_j)^{r_j}$. Since $2M_j<2Y_H\le U$, each $r_j\ge1$ and $$r_j\le b:=\lceil A/\epsilon\rceil,\qquad W_j\le U<(2M_j)^{r_j+1}.$$ Also $r_j\ge a$, since $2M_j\le2Y_H$ and $U\ge(2Y_H)^a$. Therefore $U^{a/(a+1)}<W_j\le U$ for every block. [F1, given, construct, algebra]

2.1 For each zero, split both detector polynomials into those blocks, and let their values be $A_j(\rho)$ and $B_j(\rho;v)$. By [F1] and [F4], $$1\le C_{\alpha,\delta_0}\sum_{j<J}\left(|A_j(\rho)|+\sqrt{2\pi}\int\varphi(v)|B_j(\rho;v)|\,dv\right).$$ Some one of these $2J$ nonnegative terms is at least $(2C_{\alpha,\delta_0} J)^{-1}$. Raising that term to its block-specific power $2r_j$ and using Jensen for the Gaussian integral gives, for every zero, $$1\le\sum_{j<J}(2C_{\alpha,\delta_0} J)^{2r_j}\left(|A_j(\rho)|^{2r_j}+(2\pi)^{r_j}\int\varphi(v)|B_j(\rho;v)|^{2r_j}dv\right).$$ This remains valid without choosing a common $v$ or a block for each zero. [F1, F4, step 1.1, given, algebra]

2.2 Expand the $r_j$th power of each block polynomial. Character multiplicativity gives polynomials in the same character and $u^{-\rho}$, supported on $2^{-r_j}W_j<u\le W_j$, with coefficients bounded by $d_{2r_j}(u)$; the Gaussian coefficients may depend on $v$ but not on the character or zero. For each fixed $v$, apply [F2] on $[-T,T]$ with coefficient $c(u;v)u^{-\sigma}$ and varying part $\beta-\sigma\ge0$, using the separation and dropping the label weights. By [F3], for any fixed $\delta>0$, $$\sum_{u\le W_j}|c(u;v)|^2u^{-2\sigma}\le C_{b,\delta}4^b W_j^{1-2\sigma+\delta}.$$ The sampler's two logarithmic factors are at most $C(1+\log(2W_j))^2$ and its arithmetic weight at most $C(Q^2T+W_j)$. These bounds are uniform in $v$; [F4] handles its Gaussian integral. [F1, F2, F3, F4, step 1.1, given, algebra]

3.1 Sum step 2.1 over the finite zero family and use step 2.2 for every block. Choosing a block with largest resulting contribution gives $$R\le C_{\epsilon,A,\delta_0,\delta}J^{2b+1}(1+\log(2W))^2(Q^2T+W)W^{1-2\sigma+\delta}$$ for its $W=W_j$, with $U^{a/(a+1)}<W\le U$. Take $\delta=\epsilon/A$, so $W^\delta\le P^\epsilon$. Since $b$ is fixed in terms of $\epsilon,A$, $J\ll\log P$ and $\log(2W)\ll_A\log P$; the remaining fixed logarithmic power is at most $C_{\epsilon,A,\delta_0}P^\epsilon$. This proves the stated $P^{2\epsilon}$ bound. If $R>0$ the selected contribution is positive, so its block contains a nonzero detector coefficient. If $R=0$, choose any block. [step 1.1, step 2.1, step 2.2, given, choose, algebra] ∎
