---
id: ex-noncommuting-two-noise-milstein-area
kind: example
title: "A noncommuting two-noise equation requires an area term"
status: published
origin: pipeline
pipeline_run: numerical-optimization-dynamics-2026-10-16
dependency_level: 2
deps:
  - def-milstein-scheme-and-iterated-integrals
  - lem-iterated-brownian-integral-identities
  - def-continuous-brownian-ito-process
  - thm-ito-isometry-and-linearity-in-predictable-l2
  - def-conditional-expectation-given-a-sigma-algebra
  - thm-basic-algebra-and-order-properties-of-conditional-expectation
  - thm-conditional-expectation-is-the-l2-orthogonal-projection
  - def-standard-normal-and-normal-laws
  - cor-cauchy-schwarz-for-random-variables
  - def-axiom-of-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-17}}
sources:
  references:
    - title: "Kloeden and Platen, Numerical Solution of Stochastic Differential Equations, Example 10.3.4, printed pp. 349-350"
      url: "https://stevencjxie8.com/files/refs/ref7.pdf"
---

## Example

Let $W^1,W^2$ be independent standard Brownian coordinates and solve from $(0,0)$ the two-dimensional SDE
$$dX_t^1=dW_t^1,\qquad dX_t^2=X_t^1dW_t^2.$$
Its diffusion fields are $\sigma_1(x_1,x_2)=(1,0)$ and $\sigma_2(x_1,x_2)=(0,x_1)$. They are noncommuting: $L_1\sigma_2=(0,1)$ while $L_2\sigma_1=(0,0)$. On the first step, the exact second coordinate and its Milstein Taylor increment are $I_{12}=\int_0^hW_s^1dW_s^2$. Although $I_{12}+I_{21}=\Delta W^1\Delta W^2$, the individual area term is not determined by the two endpoint increments.

## Facts & Assumptions

**Given:** AC; a filtered probability space whose filtration satisfies the usual conditions; and a standard two-dimensional Brownian motion $W=(W^1,W^2)$ adapted to that filtration such that $W_t-W_s$ is independent of $\mathcal F_s$ and has its standard two-dimensional normal law with covariance $(t-s)I_2$ for every $0\le s<t$ (for example, the usual augmentation of the joint natural filtration of $(W^1,W^2)$), as required by [[def-continuous-brownian-ito-process]]; a step length $h>0$; and the It\^o integrals in the Definition.

[F1] [[def-continuous-brownian-ito-process]]: Brownian coordinates are independent and increments after time zero are normal with their stated variances.

[F2] [[def-milstein-scheme-and-iterated-integrals]]: $L_i\sigma_j=D\sigma_j\,\sigma_i$ and $I_{ij}=\int_0^hW_s^i dW_s^j$.

[L1] [[lem-iterated-brownian-integral-identities]]: $I_{12}+I_{21}=\Delta W^1\Delta W^2$.

[F3] [[thm-ito-isometry-and-linearity-in-predictable-l2]]: $\mathbb E I_{12}^2=\mathbb E\int_0^h(W_s^1)^2ds$.

[F4] [[def-standard-normal-and-normal-laws]]: Brownian increments have Gaussian densities, and independent coordinates have product law.

[F5] [[def-conditional-expectation-given-a-sigma-algebra]]: conditional expectation is characterized by integrals on events in the conditioning sigma algebra.

[F6] [[thm-basic-algebra-and-order-properties-of-conditional-expectation]]: conditional expectation is linear, preserves expectation, and is $L^1$-contractive.

[F7] [[cor-cauchy-schwarz-for-random-variables]]: $\mathbb E|Z|\le(\mathbb E|Z|^2)^{1/2}$ for square-integrable $Z$.

[F8] [[thm-conditional-expectation-is-the-l2-orthogonal-projection]]: for $I\in L^2$ and $J=\mathbb E[I\mid\mathcal G]$, $\mathbb E[(I-J)Z]=0$ for every $Z\in L^2(\mathcal G)$, in particular $Z=J$.

[A1] [[def-axiom-of-choice]]: AC is inherited through [F1], [F3], and the conditional-expectation interface [F6].

## Verification

**Given:** The assumptions above.

1.1 The Jacobian of $\sigma_2$ sends $(1,0)$ to $(0,1)$, so $L_1\sigma_2=(0,1)$; the Jacobian of the constant field $\sigma_1$ is zero, so $L_2\sigma_1=(0,0)$. Thus commutativity fails. Starting from $X_0=(0,0)$, the first coordinate is $W_t^1$ and the second is $\int_0^tW_s^1dW_s^2$. The general Milstein Taylor update [F2] therefore has second-coordinate increment $I_{12}$ on the first step. [F1, F2, given, algebra]

1.2 By [L1], the endpoints determine $I_{12}+I_{21}=UV$, where $U=\Delta W^1$ and $V=\Delta W^2$. Let $\pi_n=\{0=s_0<\cdots<s_{q_n}=h\}$ be deterministic partitions with mesh $|\pi_n|\to0$, and put $S_n=\sum_{k=0}^{q_n-1}W^1_{s_k}(W^2_{s_{k+1}}-W^2_{s_k})$. The It\^o isometry [F3] gives $\mathbb E|S_n-I_{12}|^2=\sum_k\int_{s_k}^{s_{k+1}}(s-s_k)ds\le h|\pi_n|/2\to0$. [F3, L1, given]

2.1 For $0<s<h$, write $A=W_s^1$ and $U-A=W_h^1-W_s^1$; their joint density is $p_s(a)p_{h-s}(u-a)$, where $p_r$ is the $N(0,r)$ density. Dividing by the marginal density $p_h(u)$ and completing the square gives $\mathbb E[A\mid U=u]=(s/h)u$. At $s=0$ and $s=h$ the same formula follows from $A=0$ and $A=U$, respectively. For $\ell_k=s_{k+1}-s_k$, the pair $B_k=W^2_{s_{k+1}}-W^2_{s_k}$ and $V-B_k$ has density $p_{\ell_k}(b)p_{h-\ell_k}(v-b)$ when $\ell_k<h$; completing the square gives $\mathbb E[B_k\mid V=v]=(\ell_k/h)v$, and if $\ell_k=h$ then $B_k=V$ gives the same result. Independence of the two Brownian coordinate processes [F1] makes the joint density of $(A,U,B_k,V)$ the product of these two pair densities. Dividing by $p_h(u)p_h(v)$ shows that the conditional density of $(A,B_k)$ given $(U,V)=(u,v)$ factors, so $\mathbb E[AB_k\mid U,V]=(s/h)U(\ell_k/h)V$. Therefore $$\mathbb E[S_n\mid\sigma(U,V)]=\frac{UV}{h^2}\sum_k s_k(s_{k+1}-s_k)\longrightarrow\frac{UV}{2},$$ because the sum is a left Riemann sum for $\int_0^h s\,ds=h^2/2$. By [F7], step 1.2 implies $S_n\to I_{12}$ in $L^1$; conditional expectation is $L^1$-contractive by [F6], so [F5] gives $\mathbb E[I_{12}\mid\sigma(U,V)]=UV/2$. [F1, F5, F6, F7, step 1.2, algebra]

3.1 The isometry [F3] gives $\mathbb E I_{12}^2=\int_0^h\mathbb E(W_s^1)^2ds=h^2/2$. Also $U,V$ are independent with second moments $h$, so step 2.1 gives $J:=\mathbb E[I_{12}\mid\sigma(U,V)]=UV/2$ and $\mathbb E J^2=\mathbb E[U^2V^2]/4=h^2/4$. By [F8], $\mathbb E[(I_{12}-J)J]=0$; expanding the square therefore gives $\mathbb E|I_{12}-J|^2=\mathbb E I_{12}^2-\mathbb E J^2=h^2/4>0$. If $I_{12}$ were a measurable function of $(U,V)$, the conditional-expectation identity [F5] would give $I_{12}=J$ almost surely, contradicting this positive residual. Thus the endpoint increments do not determine the required area sample, and any approximation has a separate error and cost. [F1, F3, F4, F5, F8, step 2.1, A1, algebra] ∎

