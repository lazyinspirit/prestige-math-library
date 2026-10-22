---
id: prop-tangent-space-of-a-regular-level-set-is-the-kernel
kind: proposition
title: "The tangent space of a regular level set is the kernel"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-regular-and-critical-points-and-values, thm-a-regular-level-set-is-an-embedded-submanifold, cor-local-normal-form-for-submersions, prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets, thm-chain-rule-for-differentials-of-smooth-maps]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-31
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Will J. Merry, Differential Geometry, Proposition 6.15"
      url: "https://www2.math.ethz.ch/will-merry/files/Merry%20-%20Differential%20Geometry%20(2021).pdf"
---

## Statement

Let $F:M\to N$ be smooth, let $q$ be a regular value, and let $p\in F^{-1}(q)$.
Then

$$T_p\bigl(F^{-1}(q)\bigr)=\ker dF_p.$$

## Facts & Assumptions

**Given:** A smooth map $F:M\to N$, a regular value $q$, and a point $p\in F^{-1}(q)$.

[F1] A regular value has only submersion points in its fibre ([[def-regular-and-critical-points-and-values]]).

[L1] The fibre $F^{-1}(q)$ is an embedded submanifold ([[thm-a-regular-level-set-is-an-embedded-submanifold]]).

[L2] Near a submersion point, suitable coordinates put $F$ into the form $(u,v)\mapsto u$ ([[cor-local-normal-form-for-submersions]]).

[L3] Chart maps are diffeomorphisms onto open Euclidean sets ([[prop-chart-maps-are-diffeomorphisms-onto-euclidean-open-sets]]).

[L4] Differentials satisfy the chain rule ([[thm-chain-rule-for-differentials-of-smooth-maps]]).

## Proof
**Proof technique:** direct.

1.1 Because $q$ is a regular value and $p\in F^{-1}(q)$, [F1] makes $F$ a submersion at $p$. Write $m:=\dim M$, $n:=\dim N$, and $\ell:=m-n$. By [L2], choose local coordinates near $p$ and $q$ in which the representative of $F$ is $(u,v)\mapsto u$ on $\mathbb R^n\times\mathbb R^\ell$, with $p$ and $q$ sent to the origins. Then the fibre $F^{-1}(q)$ is represented by the slice $\{0\}\times\mathbb R^\ell$. By [L1], this is the embedded-submanifold structure on the fibre near $p$, so its tangent vectors are exactly the vectors of the form $(0,w)$. [F1, L1, L2, given]

2.1 Let $\pi(u,v)=u$ be the coordinate projection. Step 1.1 makes $\psi\circ F\circ\varphi^{-1}=\pi$ near the distinguished point. By [L3], the differentials $d\varphi_p$ and $d\psi_q$ are isomorphisms, and [L4] gives $$ d\psi_q\circ dF_p\circ d(\varphi^{-1})_{\varphi(p)}=d\pi_{\varphi(p)}. $$ Because $d\pi_{\varphi(p)}$ has kernel $\{0\}\times\mathbb R^\ell$, one gets $$ \ker dF_p=d\varphi_p^{-1}\bigl(\{0\}\times\mathbb R^\ell\bigr). $$ Step 1.1 identifies the same subspace with $T_p(F^{-1}(q))$, so $T_p(F^{-1}(q))=\ker dF_p$. [L3, L4, step 1.1]

3.1 Therefore the intrinsic tangent space of the regular level set equals $\ker dF_p$. [step 1.1, step 2.1] ∎
