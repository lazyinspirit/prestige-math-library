---
id: thm-completion-universal-property-for-bounded-linear-maps
kind: theorem
title: "Bounded linear maps extend uniquely across the completion"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-banach-space, def-completion-of-a-normed-space,
       thm-metric-completion-carries-a-unique-banach-space-structure,
       def-linear-map, def-lipschitz-holder-contraction,
       thm-metric-regularity-hierarchy,
       thm-uniformly-continuous-extension-from-dense,
       lem-vector-operations-are-continuous-in-a-normed-space]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-27
---

## Statement

Let $X$ be a normed space, let $(\widehat X,i)$ be its completion, and let $Y$
be a Banach space. Suppose $T:X\to Y$ is linear and bounded in the concrete
sense that some constant $C\ge 0$ satisfies
$$\|Tx\|\le C\|x\|\qquad (x\in X).$$
Then there is a unique bounded linear map $\widehat T:\widehat X\to Y$ with
$$\widehat T\circ i=T,$$
and the same constant $C$ satisfies
$$\|\widehat T u\|\le C\|u\|\qquad (u\in \widehat X).$$

## Facts & Assumptions

**Given:** A normed space $X$, its completion $(\widehat X,i)$, a Banach space $Y$, a linear map $T:X\to Y$, and a constant $C\ge 0$ with $\|Tx\|\le C\|x\|$ for all $x\in X$.

[L1] The completion $(\widehat X,i)$ is a Banach space and $i[X]$ is dense in $\widehat X$ ([[thm-metric-completion-carries-a-unique-banach-space-structure]], [[def-completion-of-a-normed-space]]).

[L2] A bound $\|Tx\|\le C\|x\|$ implies $\|Tx-Ty\|\le C\|x-y\|$, so $T$ is Lipschitz and hence uniformly continuous ([[def-linear-map]], [[def-lipschitz-holder-contraction]], [[thm-metric-regularity-hierarchy]]).

[L3] A uniformly continuous map from a dense subspace into a complete metric space extends uniquely to a continuous map on the whole space ([[thm-uniformly-continuous-extension-from-dense]]).

[L4] Addition and scalar multiplication are continuous in every normed space, hence in the Banach spaces $\widehat X$ and $Y$ ([[lem-vector-operations-are-continuous-in-a-normed-space]]).

## Proof

**Proof technique:** direct.

1.1 For $x,y\in X$, linearity gives $Tx-Ty=T(x-y)$, so the bound in [L2] yields $\|Tx-Ty\|\le C\|x-y\|$. Thus $T$ is Lipschitz and uniformly continuous. [L2]

2.1 Define $S:i[X]\to Y$ by $S(i(x)):=T(x)$. This is well defined because $i$ is injective as a linear isometry, and $S$ is uniformly continuous with the same constant $C$. [step 1.1, L1]

3.1 Since $i[X]$ is dense in the Banach space $\widehat X$ and $Y$ is complete, [L3] gives a unique continuous map $\widehat T:\widehat X\to Y$ with $\widehat T\!\restriction_{\,i[X]}=S$, equivalently $\widehat T\circ i=T$. [step 2.1, L1, L3]

4.1 Let $u,v\in\widehat X$. Choose sequences $i(x_n)\to u$ and $i(y_n)\to v$ from the dense copy. By [L4], $i(x_n+y_n)=i(x_n)+i(y_n)\to u+v$ in $\widehat X$, so continuity of $\widehat T$ gives $$\widehat T(u+v)=\lim_n \widehat T(i(x_n+y_n))=\lim_n T(x_n+y_n)=\lim_n\bigl(Tx_n+Ty_n\bigr).$$ Using linearity of $T$ and continuity of addition in $Y$ from [L4], the right-hand side is $$\lim_n Tx_n+\lim_n Ty_n=\widehat T(u)+\widehat T(v).$$ Hence $\widehat T(u+v)=\widehat T(u)+\widehat T(v)$. [step 3.1, L1, L4, construct]

4.2 For $u\in\widehat X$, choose a sequence $i(x_n)\to u$ from the dense copy. Continuity gives $\widehat T(u)=\lim_n T(x_n)$, and step 1.1 yields $\|T(x_n)\|\le C\|x_n\|=C\|i(x_n)\|$ for every $n$; passing to the limit gives $\|\widehat T(u)\|\le C\|u\|$. So $\widehat T$ is bounded with the same constant. [step 1.1, step 3.1, L1]

5.1 Let $\lambda$ be a scalar and let $u\in\widehat X$, and choose a sequence $i(x_n)\to u$ from the dense copy. By [L4], $i(\lambda x_n)=\lambda i(x_n)\to \lambda u$ in $\widehat X$, so continuity of $\widehat T$ gives $$\widehat T(\lambda u)=\lim_n \widehat T(i(\lambda x_n))=\lim_n T(\lambda x_n)=\lim_n \lambda T(x_n)=\lambda \lim_n T(x_n)=\lambda\widehat T(u).$$ Thus $\widehat T$ is homogeneous, and with step 4.1 it is linear. [step 3.1, L1, L4, construct]

6.1 The continuity extension in step 3.1 was unique, so no second bounded linear map can also extend $T$. Therefore $\widehat T$ is the unique bounded linear extension of $T$ across the completion. [step 3.1, step 5.1] ∎
