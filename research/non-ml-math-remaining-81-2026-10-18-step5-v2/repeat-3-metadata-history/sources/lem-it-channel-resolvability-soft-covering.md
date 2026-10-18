---
id: lem-it-channel-resolvability-soft-covering
kind: lemma
title: "Finite DMC resolvability by random codebooks"
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 5
deps: [def-discrete-memoryless-channel, lem-discrete-memoryless-channel-block-kernels-are-stochastic, def-it-finite-mutual-information, def-it-information-units-and-logarithm-base, def-natural-logarithm, def-qa-35-finite-probability-entropy-and-stochastic-matrices, thm-it-finite-kl-nonnegative-equality, lem-it-finite-dmc-information-density-concentration, lem-natural-logarithm-bounded-by-argument]
justified_by: []
aliases: []
proof_strategy: direct
axiom_use: "No choice axiom is used; each codebook, alphabet, and output law is finite."
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pending
sources:
  references:
    - title: "Paul Cuff, Princeton ELE 538: Information Theoretic Security, Lecture 13"
      url: https://www.princeton.edu/~cuff/ele538/files/lecture_13.pdf
      locator: "PDF pp. 1–3: soft covering, likelihood truncation, and total-variation bound."
    - title: "Matthieu R. Bloch and J. Nicholas Laneman, Strong Secrecy from Channel Resolvability, arXiv:1105.5419"
      url: https://arxiv.org/pdf/1105.5419
      locator: "§§III and V: secrecy metrics and resolvability-based strong secrecy for memoryless channels."
---

## Statement

Let $W(z\mid u)$ be a finite DMC, let $P_U$ be an input probability vector, and let $P_Z(z)=\sum_uP_U(u)W(z\mid u)$. On the joint support define $J(u,z):=\ln(W(z\mid u)/P_Z(z))$ and let $I=I(U;Z)$. Set $B=\max(0,\max_{P_U(u)W(z\mid u)>0}J(u,z))$. For $R_0>I$ and any $\gamma$ with $0<\gamma<R_0-I$, draw $L_n=\lceil e^{nR_0}\rceil$ independent words $U^n(\ell)\sim P_U^n$ and define the induced mixture

$$P_Z^n(z^n):=\prod_{i=1}^nP_Z(z_i),\qquad Q_{Z^n\mid C}:=\frac1{L_n}\sum_{\ell=1}^{L_n}W^n(\cdot\mid U^n(\ell)).$$

There is a $\rho\in(0,1)$, depending only on $(P_U,W,\gamma)$, for which

$$\mathbb E_C D(Q_{Z^n\mid C}\|P_Z^n)\le e^{-n(R_0-I-\gamma)}+(\ln2+nB)\rho^n,$$

and

$$\mathbb E_C\,\operatorname{TV}(Q_{Z^n\mid C},P_Z^n)\le\rho^n+\frac12e^{-n(R_0-I-\gamma)/2},$$

where $\operatorname{TV}(P,Q):=\frac12\sum_z|P(z)-Q(z)|$. Thus both expected deviations tend to zero. Here $D$ is the directional finite KL divergence of [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]].

## Facts & Assumptions

**Given:** A finite DMC $W$, an input law $P_U$, a rate $R_0>I(U;Z)$, and $0<\gamma<R_0-I(U;Z)$.

[F1] [[def-discrete-memoryless-channel]]: $W^n(z^n\mid u^n)=\prod_iW(z_i\mid u_i)$.

[F2] [[lem-discrete-memoryless-channel-block-kernels-are-stochastic]]: each block product law is a stochastic kernel.

[F3] [[def-it-finite-mutual-information]]: $I(U;Z)=\mathbb E[J(U,Z)]$ under $P_UW$.

[F4] [[thm-it-finite-kl-nonnegative-equality]]: finite KL divergence is nonnegative.

[F5] [[lem-it-finite-dmc-information-density-concentration]]: for IID $(U_i,Z_i)\sim P_UW$, $S_n=\sum_iJ(U_i,Z_i)$ has upper tail $\Pr[S_n>n(I+\gamma)]\le\rho^n$ for some $0<\rho<1$.

[F6] [[def-it-information-units-and-logarithm-base]]: unmarked logarithms are natural, so the displayed KL divergence and rates use nats.

[F7] [[def-qa-35-finite-probability-entropy-and-stochastic-matrices]]: finite KL is $D(P\|Q)=\sum_{p_i>0}p_i\ln(p_i/q_i)$, with value $+\infty$ if $p_i>0=q_i$ for some coordinate.

[F8] [[lem-natural-logarithm-bounded-by-argument]]: for $x\ge0$, $\ln(1+x)\le x$.

## Proof

1.1 Write $Q_C$ for the mixture in the Statement. Any $z^n$ with $Q_C(z^n)>0$ has $P_Z^n(z^n)>0$, since each sampled codeword has letters in $\operatorname{supp}P_U$ and any output reachable from such a letter has positive $P_Z$ mass. Hence all divergences below are well-defined and finite. [given, F1, F2, F7]

1.2 For the total-variation bound, let $L_\ell(z^n):=W^n(z^n\mid U^n(\ell))/P_Z^n(z^n)$ on the support, let $L_C=L_n^{-1}\sum_\ell L_\ell$, set $T=e^{n(I+\gamma)}$, and truncate to $\widetilde L_\ell=L_\ell\mathbf1\{L_\ell\le T\}$ and $\widetilde L_C=L_n^{-1}\sum_\ell\widetilde L_\ell$. If $\alpha_n:=\Pr[S_n>n(I+\gamma)]$, then the expected removed mass $\sum_{z^n}P_Z^n(z^n)\mathbb E_C[L_C-\widetilde L_C]$ is exactly $\alpha_n$, and the missing mass $\sum_{z^n}P_Z^n(z^n)(1-\mathbb E_C\widetilde L_C)$ is also $\alpha_n$, because $\sum_{z^n}P_Z^n(z^n)\mathbb E_C L_C=1$. Since $L_C\ge\widetilde L_C$ and $\mathbb E_C\widetilde L_C\le1$, the triangle inequality gives $2\operatorname{TV}(Q_C,P_Z^n)\le\sum_{z^n}P_Z^n(z^n)\bigl((L_C-\widetilde L_C)+|\widetilde L_C-\mathbb E_C\widetilde L_C|+(1-\mathbb E_C\widetilde L_C)\bigr).$ After expectation, the first and third terms together contribute $\alpha_n$ to total variation (the factor $1/2$ in its definition is included). [F1, F2, F3, F5, given]

2.1 For fixed $C$, expand $D(Q_C\|P_Z^n)$ as an expectation over a uniform index $J$ and then $Z^n\sim W^n(\cdot\mid U^n(J))$. Averaging over codebooks and using symmetry lets us take $J=1$. The divergence and all rates use natural-log nats by [F6]. Conditional on $U^n(1),Z^n$, the remaining codewords are independent and $\mathbb E_{U^n(2),\ldots,U^n(L_n)}\left[\frac{Q_C(Z^n)}{P_Z^n(Z^n)}\right]=\frac{e^{S_n}+L_n-1}{L_n}.$ For any finite positive random variable $A$ with law $p$ and mean $a$, the vector $q_i=p_iA_i/a$ is a probability vector; [F4] gives $0\le D(p\|q)=\ln a-\mathbb E[\ln A]$. Thus $\mathbb E\ln A\le\ln\mathbb E A$. Applying this finite Jensen inequality to the displayed likelihood ratio gives $\mathbb E_C D(Q_C\|P_Z^n)\le\mathbb E\ln\left(1+e^{S_n}/L_n\right).$ [F1, F3, F4, F6, given, step 1.1, algebra]

3.1 On $S_n\le n(I+\gamma)$, $L_n\ge e^{nR_0}$ and [F8] bound the logarithm by $e^{-n(R_0-I-\gamma)}$. On the complement, $S_n\le nB$ by the definition of $B$, so $\ln(1+e^{S_n}/L_n)\le\ln2+nB$. The complement has probability at most $\rho^n$ by [F5]. Splitting the expectation in step 2.1 across these two events proves the KL bound. [F5, F8, step 2.1, algebra]

4.1 For fixed $z^n$, let $A=\widetilde L_C(z^n)-\mathbb E_C\widetilde L_C(z^n)$. The finite inequality $\mathbb E|A|\le\sqrt{\mathbb E A^2}$ follows by expanding $0\le\mathbb E(|A|-\mathbb E|A|)^2$. Independence of the $L_n$ codewords makes the cross terms vanish, so $\mathbb E A^2=\frac1{L_n}\left(\mathbb E_U[\widetilde L_1(z^n)^2]-(\mathbb E_U\widetilde L_1(z^n))^2\right)\le\frac{\mathbb E_U[\widetilde L_1(z^n)^2]}{L_n}.$ Since $0\le\widetilde L_1\le T$ and $\mathbb E_U L_1(z^n)=\sum_{u^n}P_U^n(u^n)\frac{W^n(z^n\mid u^n)}{P_Z^n(z^n)}=1,$ the numerator is at most $T$. Finite Cauchy–Schwarz with weights $P_Z^n(z^n)$ then gives $\sum_{z^n}P_Z^n(z^n)\mathbb E_C|A|\le\sum_{z^n}P_Z^n(z^n)\sqrt{\mathbb E_C A^2}\le\left(\sum_{z^n}P_Z^n(z^n)\right)^{1/2}\left(\sum_{z^n}P_Z^n(z^n)\mathbb E_C A^2\right)^{1/2}\le\sqrt{T/L_n},$ where the middle inequality is finite Cauchy–Schwarz and $\sum_{z^n}P_Z^n(z^n)=1$. Together with step 1.2, this fluctuation contributes at most $\frac12\sqrt{T/L_n}$ to expected total variation. Using [F5], $\alpha_n\le\rho^n$, and $L_n\ge e^{nR_0}$ gives the stated bound. [F1, F2, F5, step 1.2, algebra] ∎
