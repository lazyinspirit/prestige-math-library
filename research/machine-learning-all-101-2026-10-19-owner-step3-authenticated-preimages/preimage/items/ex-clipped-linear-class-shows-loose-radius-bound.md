---
id: ex-clipped-linear-class-shows-loose-radius-bound
kind: example
title: "Clipping can make the linear radius bound loose"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 1
deps:
  - def-rademacher-complexity
  - lem-cauchy-schwarz-for-finite-random-variables
  - thm-rademacher-contraction-inequality
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {}
---

## Example

Let $m\ge1$, let the fixed sample be $x_1=\cdots=x_m=1$ in $\mathbb R$ with its Borel sigma-algebra, and let $B\ge1$. Define $\operatorname{clip}(u):=\max\{-1,\min\{1,u\}\}$ and

$$\mathcal G_B:=\left\{g_w:\mathbb R\to[0,1],\quad g_w(x)=\frac{1+\operatorname{clip}(wx)}2,\quad |w|\le B\right\}.$$

For this sample, $\widehat{\mathfrak R}_S(\mathcal G_B)=m^{-1}\mathbb E_\sigma[(\sum_i\sigma_i)_+]$, where $u_+:=\max\{u,0\}$, so $\widehat{\mathfrak R}_S(\mathcal G_B)\le1/(2\sqrt m)$ independently of $B$. The contraction inequality and the direct radius estimate for the unclipped linear class also give $\widehat{\mathfrak R}_S(\mathcal G_B)\le B/(2\sqrt m)$; this latter bound grows with $B$ although the actual complexity on this fixed sample does not.

## Example references

[[def-rademacher-complexity]]: fixes the empirical one-sided sign-average convention.

[[thm-rademacher-contraction-inequality]]: gives the factor-one contraction bound used for the second, looser estimate.

[[lem-cauchy-schwarz-for-finite-random-variables]]: bounds the sign-average absolute sum by its second moment.

## Facts & Assumptions

**Given:** $m\ge1$, the all-ones sample, radius $B\ge1$, and independent uniform signs.

[F1] The one-sided empirical complexity is the sign average of the supremum divided by $m$. [[def-rademacher-complexity]]

[F2] For a fixed sample and an admissible nonempty real-valued class $\mathcal H$, the general one-sided convention is $\widehat{\mathfrak R}_S(\mathcal H):=m^{-1}\mathbb E_\sigma\sup_{h\in\mathcal H}\sum_i\sigma_i h(z_i)$. Under the theorem's class and finite-supremum hypotheses, a common 1-Lipschitz coordinate map contracts this complexity by factor 1, without a zero-at-zero assumption. [[thm-rademacher-contraction-inequality]]

[F3] For finite random variables, $(\mathbb E[XY])^2\le\mathbb E[X^2]\mathbb E[Y^2]$. [[lem-cauchy-schwarz-for-finite-random-variables]]

## Verification

**Given:** The objects and hypotheses in the Example.

1.1 Since $B\ge1$ and every sample input is $1$, the clipped values $\operatorname{clip}(w)$ range over all of $[-1,1]$, so the class values on the sample range over $a\in[0,1]$. For $T:=\sum_i\sigma_i$, the signwise supremum is $\sup_{a\in[0,1]}aT=T_+$. Hence $\widehat{\mathfrak R}_S(\mathcal G_B)=m^{-1}\mathbb E_\sigma T_+$. [F1, given, construct]

2.1 The distribution of $T$ is symmetric, so $\mathbb E T_+=\tfrac12\mathbb E|T|$. Apply [F3] to $X=|T|$ and $Y=1$; independence and symmetry of the signs give $\mathbb E T^2=m$. Thus $\mathbb E T_+\le\sqrt m/2$ and step 1.1 gives $\widehat{\mathfrak R}_S(\mathcal G_B)\le1/(2\sqrt m)$. [F3, step 1.1, given, algebra]

3.1 Put $\mathcal H_B:=\{h_w:x\mapsto wx:|w|\le B\}$ and $\mathcal H_0:=\{h_{-B},h_B\}\subseteq\mathcal H_B$. For every sign vector, with $T=\sum_i\sigma_i$, the raw supremum is $\sup_{|w|\le B}wT=B|T|$, attained at an endpoint. The clipped supremum is $\sup_{|w|\le B}\operatorname{clip}(w)T=|T|$, also attained at an endpoint because $B\ge1$. Thus $\mathcal H_0$ gives both suprema required by [F2]. The map $\operatorname{clip}$ is 1-Lipschitz: for $u\le v$, its increase is $0$ if both are below $-1$ or both above $1$, is $v-u$ if both lie in $[-1,1]$, is $v+1\le v-u$ if $u\le-1\le v\le1$, is $1-u\le v-u$ if $-1\le u\le1\le v$, and is $2\le v-u$ if $u\le-1$ and $v\ge1$. Thus [F2] applies. The constant offset $1/2$ has zero expected sign sum, and scaling by $1/2$ gives $\widehat{\mathfrak R}_S(\mathcal G_B)=\tfrac12\widehat{\mathfrak R}_S(\operatorname{clip}\circ\mathcal H_B)$. By the general formula in [F2], $\widehat{\mathfrak R}_S(\mathcal H_B)=m^{-1}\mathbb E_\sigma\sup_{|w|\le B}wT=B\mathbb E|T|/m\le B/\sqrt m$, where [F3] is applied to $X=|T|$ and $Y=1$ and $\mathbb E T^2=m$. Therefore the contraction route gives $\widehat{\mathfrak R}_S(\mathcal G_B)\le B/(2\sqrt m)$, which can grow arbitrarily relative to the bound in step 2.1 as $B$ increases. [F2, F3, step 2.1, given, algebra] ∎
