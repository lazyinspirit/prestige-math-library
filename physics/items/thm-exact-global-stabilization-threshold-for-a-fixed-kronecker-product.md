---
id: thm-exact-global-stabilization-threshold-for-a-fixed-kronecker-product
kind: theorem
title: "The exact global stabilization threshold for a fixed Kronecker product"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 13
deps: [def-first-row-padding-completion-and-the-stabilization-operator,
       def-reduced-kronecker-coefficient,
       lem-murnaghan-littlewood-top-degree-reduced-coefficients-are-lr-coefficients,
       prop-reduced-kronecker-support-satisfies-size-triangle-inequalities,
       thm-murnaghan-expansion-for-all-admissible-ranks,
       lem-bor-nonnegative-expansion-for-reduced-kronecker-coefficients,
       def-internal-product-on-symmetric-functions,
       def-kronecker-coefficient-and-internal-tensor-product,
       thm-littlewood-richardson-schur-product-expansion,
       def-littlewood-richardson-tableau-and-coefficient,
       def-iterated-schur-coefficients,
       thm-schur-functions-form-an-orthonormal-integral-basis]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Emmanuel Briand, Rosa Orellana and Mercedes Rosas, The stability of the Kronecker product of Schur functions, arXiv:0907.4652v2 (2009); Lemma 3.1, Theorem 3.2 and Theorem 1.2, pp. 4, 8-9"
      url: "https://arxiv.org/pdf/0907.4652"
    - title: "Emmanuel Briand, Amarpreeet Rattan and Mercedes Rosas, On the growth of the Kronecker coefficients, arXiv:1607.02887v1 (2016); Lemma 3.1 and the proof of Proposition 3.2, pp. 9-10"
      url: "https://arxiv.org/pdf/1607.02887"
---

## Statement

For all partitions $\alpha,\beta$ with missing parts read as zero,
$$\operatorname{stab}(\alpha,\beta)=N:=|\alpha|+|\beta|+\alpha_1+\beta_1,$$
with $\operatorname{stab}$ as in
[[def-first-row-padding-completion-and-the-stabilization-operator]].

More precisely. At every $n\ge N$ all support labels $\gamma[n]$ of the
finite support of $\bar g^\bullet_{\alpha,\beta}$ are ordinary partitions, the
full product has the fixed nonnegative Schur expansion
$s_{\alpha[n]}*s_{\beta[n]}=\sum_\gamma\bar g^\gamma_{\alpha,\beta}s_{\gamma[n]}$,
and the family is $V$-stable from $N$ onward. If both $\alpha$ and $\beta$ are
nonempty, $N-1$ is admissible and the product at $N$ is not $V$ of the product
at $N-1$: the coefficient of $s_{(\alpha+\beta)[N]}$ is $1$, its first two
parts are equal, and no such Schur basis vector lies in the image of $V$. If
exactly one input is empty, $N$ is already the least ordinary input rank, and
the same image obstruction at $N$ excludes any earlier stabilization index in
the Jacobi–Trudi convention of the Definition. If both inputs are empty,
$N=0$, $s_{(n)}*s_{(n)}=s_{(n)}$ (including $s_{(0)}=1$) and $V^n(1)=s_{(n)}$,
so stabilization begins at zero and no negative-rank product is invoked. No
sharpness for an individual coefficient is claimed.

## Facts & Assumptions

**Given:** Partitions $\alpha,\beta,\gamma$ with $\bar g^\gamma_{\alpha,\beta}\ne0$; a nonzero summand $(\mu,\lambda,\eta,\rho,\theta,\pi)$ of the nonnegative expansion.

[F1] $\bar g^\gamma_{\alpha,\beta}=\sum c^\gamma_{\mu,\theta,\pi}c^\alpha_{\rho,\lambda,\theta}c^\beta_{\rho,\eta,\pi}g^\mu_{\lambda,\eta}$ with the size equations $|\alpha|=|\rho|+|\lambda|+|\theta|$, $|\beta|=|\rho|+|\eta|+|\pi|$, $|\gamma|=|\mu|+|\theta|+|\pi|$, $|\mu|=|\lambda|=|\eta|$ for every nonzero summand ([[lem-bor-nonnegative-expansion-for-reduced-kronecker-coefficients]]).

[F2] Two-factor coefficients count LR tableaux and vanish outside containment and size compatibility; commutativity makes them symmetric in the two inputs. A positive threefold coefficient has a positive iterated two-factor summand ([[thm-littlewood-richardson-schur-product-expansion]], [[def-iterated-schur-coefficients]], [[def-littlewood-richardson-tableau-and-coefficient]]).

[F3] $s_{\alpha[n]}*s_{\beta[n]}=\sum_\gamma\bar g^\gamma_{\alpha,\beta}s_{\gamma[n]}$ for every admissible $n\ge\max\{|\alpha|+\alpha_1,|\beta|+\beta_1\}$ ([[thm-murnaghan-expansion-for-all-admissible-ranks]]).

[F4] For $n\ge|\gamma|+\gamma_1$, increasing $n$ by $k\ge0$ adds $k$ to the first part, so $s_{\gamma[n+k]}=V^k(s_{\gamma[n]})$; the support of $\bar g^\bullet_{\alpha,\beta}$ is finite; and for $|\gamma|=|\alpha|+|\beta|$, $\bar g^\gamma_{\alpha,\beta}=c^\gamma_{\alpha,\beta}$ with $\bar g^{\alpha+\beta}_{\alpha,\beta}=1$ ([[def-first-row-padding-completion-and-the-stabilization-operator]], [[lem-murnaghan-littlewood-top-degree-reduced-coefficients-are-lr-coefficients]], [[def-reduced-kronecker-coefficient]]).

[F5] If $\bar g^\gamma_{\alpha,\beta}>0$ then $|\alpha|\le|\beta|+|\gamma|$, $|\beta|\le|\alpha|+|\gamma|$, $|\gamma|\le|\alpha|+|\beta|$ ([[prop-reduced-kronecker-support-satisfies-size-triangle-inequalities]]).

[F6] The image of $V$ is contained in the span of the Schur functions $s_\nu$ with $\nu_1>\nu_2$, and these are linearly independent; the Schur functions of each degree form a $\mathbb Z$-basis ([[def-first-row-padding-completion-and-the-stabilization-operator]], [[thm-schur-functions-form-an-orthonormal-integral-basis]]).

[F7] On $\Lambda^n$ the internal product has unit $h_n=s_{(n)}$, and $s_{(n)}*s_{(n)}=s_{(n)}$ ([[def-internal-product-on-symmetric-functions]], [[def-kronecker-coefficient-and-internal-tensor-product]]).

## Proof

**Proof technique:** direct.

1.1 *Upper bound on the support.* Let $\gamma$ have $\bar g^\gamma_{\alpha,\beta}\ne0$ and choose a nonzero summand of [F1]. First derive the needed row bounds from [F2]: if $c^\zeta_{a,b}>0$ and its first skew row is nonempty, the rightmost entry is the first reading-word letter and must be $1$; weak row increase forces all added first-row entries to be $1$. Thus $\zeta_1-a_1\le b_1$; an empty first skew row gives the same inequality. Iterating gives $\gamma_1\le\mu_1+\theta_1+\pi_1$. Containment, applied with $\theta$ (respectively $\pi$) first by symmetry, gives $\theta_1\le\alpha_1$, $\pi_1\le\beta_1$; the degree equations give $|\lambda|+|\theta|\le|\alpha|$ and $|\eta|+|\pi|\le|\beta|$. Therefore $\gamma_1\le\mu_1+\theta_1+\pi_1\le|\mu|+\theta_1+\pi_1$, so $|\gamma|+\gamma_1\le(|\mu|+|\theta|+|\pi|)+(|\mu|+\theta_1+\pi_1)=2|\mu|+|\theta|+\theta_1+|\pi|+\pi_1$; using $|\mu|=|\lambda|=|\eta|$ this is $(|\lambda|+|\theta|+\theta_1)+(|\eta|+|\pi|+\pi_1)\le(|\alpha|+\alpha_1)+(|\beta|+\beta_1)$ by [F2]. Hence every nonzero reduced coefficient has $|\gamma|+\gamma_1\le N$. [F1, F2]

1.2 *Both inputs empty.* Here $N=0$, $\alpha[n]=\beta[n]=(n)$ for every $n\ge0$, and $s_{(n)}*s_{(n)}=s_{(n)}$ by [F7]; also $V^n(1)=V^n(s_\varnothing)=s_{(n)}$ by [F6], since $V$ adds a box to the first row and $s_{\varnothing}=1$. Hence $s_{\alpha[n+k]}*s_{\beta[n+k]}=s_{(n+k)}=V^k(s_{\alpha[n]}*s_{\beta[n]})$ for all $n\ge0,k>0$, with no negative-rank product invoked, so $\operatorname{stab}(\varnothing,\varnothing)=0$, the least possible value of the defining index. [F6, F7]

2.1 *Attainment and identification of the maximum.* The partition $\gamma^\ast:=\alpha+\beta$ satisfies $|\gamma^\ast|+\gamma^\ast_1=|\alpha|+|\beta|+(\alpha_1+\beta_1)=N$ and $\bar g^{\gamma^\ast}_{\alpha,\beta}=c^{\gamma^\ast}_{\alpha,\beta}=1$ by [F4]; hence $\max\{|\gamma|+\gamma_1:\bar g^\gamma_{\alpha,\beta}\ne0\}=N$. In particular $|\gamma|+\gamma_1\le n$ for every support label and every $n\ge N$, so all support labels $\gamma[n]$ are ordinary partitions at such $n$; this proves the stated support maximum. [F4, step 1.1]

3.1 *$V$-stability from $N$.* For $n\ge N$ the identity of [F3] is available (the thresholds $|\alpha|+\alpha_1,|\beta|+\beta_1$ are $\le N$) and every $\gamma[n]$ in the finite support is a partition by step 2.1; applying [F3] at $n+k$ and using [F4] term by term gives $s_{\alpha[n+k]}*s_{\beta[n+k]}=\sum_\gamma\bar g^\gamma_{\alpha,\beta}s_{\gamma[n+k]}=\sum_\gamma\bar g^\gamma_{\alpha,\beta}V^k(s_{\gamma[n]})=V^k(s_{\alpha[n]}*s_{\beta[n]})$ for all $k>0$, together with the fixed nonnegative Schur expansion at every rank $n\ge N$. Hence $\operatorname{stab}(\alpha,\beta)\le N$ in the sense of the Definition. [F3, F4, step 2.1]

4.1 *$N$ is not in the image of $V$, when $N>0$.* If $N>0$ then $\alpha$ or $\beta$ is nonempty and the partition $(\alpha+\beta)[N]=(N-|\alpha|-|\beta|,(\alpha+\beta)_1,\dots)=(\alpha_1+\beta_1,\alpha_1+\beta_1,\dots)$ has equal first two parts, which are positive because at least one of $\alpha,\beta$ is nonempty. At rank $N$ the coefficient of $s_{(\alpha+\beta)[N]}$ in the product is $\bar g^{\alpha+\beta}_{\alpha,\beta}=1$ by [F4] and step 3.1. If $N>0$ and the product at $N$ lay in the image of $V$, then by [F6] its coefficient of $s_{(\alpha+\beta)[N]}$ would be $0$, a contradiction. [F4, F6, step 3.1]

5.1 *Least-ness, both inputs nonempty.* Suppose $\alpha\ne\varnothing\ne\beta$. Then $N-1=|\alpha|+|\beta|+\alpha_1+\beta_1-1\ge|\alpha|+\alpha_1$ and $\ge|\beta|+\beta_1$, since $|\beta|+\beta_1\ge1$ and $|\alpha|+\alpha_1\ge1$; so $N-1$ is an admissible rank and the product at $N-1$ is defined. If some $n_0<N$ satisfied the stabilization condition of the Definition, then the product at $N$ would equal $V^{N-n_0}$ of the product at $n_0$, which lies in the image of $V$, contradicting step 4.1; taking $n_0=N-1$ shows in particular that the product at $N$ is not $V$ of the product at $N-1$. Hence $\operatorname{stab}(\alpha,\beta)=N$ in this case. [F6, step 3.1, step 4.1]

5.2 *Least-ness, exactly one input empty.* Say $\beta=\varnothing\ne\alpha$, so $N=|\alpha|+\alpha_1$ is the least rank at which $\alpha[n]$ (and $\beta[n]=(n)$) is an ordinary partition. By [F5], every $\gamma$ with $\bar g^\gamma_{\alpha,\varnothing}\ne0$ satisfies $|\gamma|\le|\alpha|\le|\emptyset|+|\gamma|=|\gamma|$, hence $|\gamma|=|\alpha|$, and then [F4] gives $\bar g^\gamma_{\alpha,\varnothing}=c^\gamma_{\alpha,\varnothing}=\delta_{\gamma,\alpha}$; so the product at rank $N$ is exactly $s_{\alpha[N]}$, whose first two parts are $\alpha_1,\alpha_1$ with $\alpha_1\ge1$. The obstruction of step 4.1 therefore applies at $N$: the product at $N$ does not lie in the image of $V$, so no $n_0<N$ can satisfy the stabilization condition, while $n_0=N$ does by step 3.1. The case $\alpha=\varnothing\ne\beta$ is symmetric. [F4, F5, step 3.1, step 4.1]

6.1 *Conclusion.* Combining steps 3.1, 5.1, 5.2 and 1.2 gives $\operatorname{stab}(\alpha,\beta)=N=|\alpha|+|\beta|+\alpha_1+\beta_1$ in all cases, with the fixed nonnegative expansion and $V$-stability from $N$ onward; the statement claims nothing about sharpness for an individual coefficient, and the proof used only finite sums, the proved all-rank expansion and the unit of the internal product. No choice principle is used. [F3, F4, step 3.1, step 5.1, step 5.2, step 1.2] ∎
