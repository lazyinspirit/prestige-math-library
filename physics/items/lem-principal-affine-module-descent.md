---
id: lem-principal-affine-module-descent
kind: lemma
title: Descent of modules on a finite principal cover
status: published
origin: pipeline
deps:
  - def-localisation-of-a-module
  - thm-localisation-of-modules-is-exact
  - thm-localisation-of-modules-commutes-with-quotients-and-sums
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Let $A$ be a commutative ring and let $f_1,\dots,f_r\in A$ generate the unit
ideal, so that $\operatorname{Spec}A=\bigcup_{i=1}^{r}D(f_i)$ is a finite
principal cover. For each $i$ let $M_i$ be an $A_{f_i}$-module, and for each
pair $(i,j)$ let $\varphi_{ij}:(M_i)_{f_j}\to(M_j)_{f_i}$ be an isomorphism of
$A_{f_if_j}$-modules, subject to $\varphi_{ii}=\mathrm{id}$ and to the cocycle
condition $\varphi_{jk}\circ\varphi_{ij}=\varphi_{ik}$ on the common
localisation $(M_i)_{f_jf_k}$ for all $i,j,k$.

Set $P=\prod_{k=1}^{r}M_k$ and $Q=\prod_{k,l=1}^{r}(M_k)_{f_l}$, and let
$u,v:P\to Q$ be the $A$-linear maps whose $(k,l)$-components are
$$u\bigl((m_k)\bigr)_{k,l}=(m_k)|_{f_l},\qquad v\bigl((m_k)\bigr)_{k,l}=\varphi_{kl}^{-1}\bigl((m_l)|_{f_k}\bigr).$$
Let $M=\ker(u-v)\subseteq P$ be their equalizer. Then for every $i$ the
projection $M\subseteq P\to M_i$ induces an isomorphism of $A_{f_i}$-modules
$$M_{f_i}\longrightarrow M_i,$$
and these isomorphisms are compatible with the given $\varphi_{ij}$: for all
$i,j$ the natural map $M_{f_if_j}\to(M_i)_{f_j}$ followed by $\varphi_{ij}$
equals the natural map $M_{f_if_j}\to(M_j)_{f_i}$. The construction and the
proof use no choice principle.

## Facts & Assumptions

**Given:** A commutative ring $A$; elements $f_1,\dots,f_r\in A$ generating the
unit ideal; $A_{f_i}$-modules $M_i$; isomorphisms
$\varphi_{ij}:(M_i)_{f_j}\to(M_j)_{f_i}$ with $\varphi_{ii}=\mathrm{id}$ and
$\varphi_{jk}\circ\varphi_{ij}=\varphi_{ik}$ after localisation to
$A_{f_if_jf_k}$.

[F1] Localisation of modules is exact: every short exact sequence of
$R$-modules localises to a short exact sequence of $S^{-1}R$-modules
([[thm-localisation-of-modules-is-exact]]).

[F2] Localisation commutes with quotients and with arbitrary direct sums:
$S^{-1}(M/N)\cong (S^{-1}M)/(S^{-1}N)$ and
$S^{-1}\bigl(\bigoplus_iM_i\bigr)\cong\bigoplus_iS^{-1}M_i$. Since a finite
product of modules is a finite direct sum, this covers the finite products
occurring below ([[thm-localisation-of-modules-commutes-with-quotients-and-sums]]).

## Proof

**Proof technique:** direct localisation of an equalizer.

1.1 Both $P$ and $Q$ are $A$-modules, the maps $u$ and $v$ are $A$-linear, and $M=\ker(u-v)$ sits in the exact sequence $0\to M\to P\xrightarrow{u-v}Q$; every $M_k$ is an $A$-module through $A\to A_{f_k}$ and every $(M_k)_{f_l}$ is an $A$-module through $A\to A_{f_kf_l}$, so all localisations below are localisations of $A$-modules. [given, algebra]

1.2 For an $A$-module $N$ on which $f_i$ acts invertibly the localisation map $\lambda:N\to N_{f_i}$ is an isomorphism, with inverse $n/f_i^t\mapsto f_i^{-t}n$: if $f_i^u(f_i^sn-f_i^tn')=0$ in $N$ with $u,s,t\ge0$, then multiplying by $f_i^{-(u+s+t)}$ gives $f_i^{-t}n=f_i^{-s}n'$, so the inverse is well defined, and it is $A_{f_i}$-linear and inverts $\lambda$ on the image of $N$; in particular $\lambda:(M_k)_{f_i}\to(M_k)_{f_if_i}=(M_k)_{f_i}$ is the identity. [given, algebra]

2.1 Localising the exact sequence of step 1.1 at $f_i$, [F1] makes $0\to M_{f_i}\to P_{f_i}\xrightarrow{(u-v)_{f_i}}Q_{f_i}$ exact, and [F2] identifies the finite products componentwise, $P_{f_i}\cong\prod_k(M_k)_{f_i}$ and $Q_{f_i}\cong\prod_{k,l}(M_k)_{f_if_l}$; under these identifications the $(k,l)$-component of $u_{f_i}$ is $(m_k)\mapsto(m_k)|_{f_l}$ and the $(k,l)$-component of $v_{f_i}$ is $(m_k)\mapsto\varphi_{kl}^{-1}((m_l)|_{f_k})$, so $M_{f_i}$ is the set of families $(m_k)\in\prod_k(M_k)_{f_i}$ with $(m_k)|_{f_l}=\varphi_{kl}^{-1}((m_l)|_{f_k})$ for all $k,l$. [F1, F2, step 1.1]

3.1 The projection $\mathrm{pr}_i:M\to M_i$ is $A$-linear and hence induces an $A_{f_i}$-linear map $\theta_i:M_{f_i}\to(M_i)_{f_i}=M_i$, the identification $(M_i)_{f_i}=M_i$ being the case $N=M_i$ of step 1.2; on the description of step 2.1, $\theta_i$ sends a compatible family $(m_k)$ to its $i$-th component $m_i$, viewed in $(M_i)_{f_i}=M_i$. [step 1.2, step 2.1]

3.2 The map $\theta_i$ is surjective: given $m\in M_i$ set $m_k:=\varphi_{ik}(m)\in(M_k)_{f_i}$ for every $k$, where $\varphi_{ik}:(M_i)_{f_k}\to(M_k)_{f_i}$ and $m$ is regarded in $(M_i)_{f_k}$ through the inverse of the isomorphism $(M_i)_{f_k}\to(M_i)_{f_if_k}=(M_i)_{f_k}$ of step 1.2; for all $k,l$ the cocycle condition identifies the localisations of $\varphi_{il}$ and of $\varphi_{kl}\circ\varphi_{ik}$ to $A_{f_if_kf_l}$, so $(m_k)|_{f_l}=\varphi_{ik}(m)|_{f_if_kf_l}=\varphi_{kl}^{-1}(\varphi_{il}(m)|_{f_if_kf_l})=\varphi_{kl}^{-1}((m_l)|_{f_k})$, and $(m_k)$ is a compatible family with $i$-th component $m$. [given, step 1.2, step 2.1]

4.1 The map $\theta_i$ is injective: if $(m_k)$ is a compatible family with $m_i=0$, then for every $l$ the $(i,l)$-component of the compatibility reads $(m_i)|_{f_l}=\varphi_{il}^{-1}((m_l)|_{f_i})$, whose left side is $m_i=0$ by step 1.2, so $(m_l)|_{f_i}=0$, and since localising at $f_i$ is an isomorphism on $(M_l)_{f_i}$ by step 1.2, $m_l=0$; hence $(m_k)=0$. [step 2.1, step 3.1]

5.1 Consequently every $\theta_i$ is an isomorphism; for the compatibility with the overlap data, let $(m_k)\in M_{f_if_j}$ be a compatible family, whose image under the map induced by $\theta_i$ followed by $\varphi_{ij}$ is $\varphi_{ij}((m_i)|_{f_j})$ in $(M_j)_{f_i}$ and whose image under the map induced by $\theta_j$ is $(m_j)|_{f_i}$, and the $(i,j)$-component of the compatibility in step 2.1 states exactly that these agree; every construction used only the given modules, the given isomorphisms and universal constructions of kernels and localisations, so no choice principle is invoked. [step 2.1, step 4.1, step 3.2] ∎
