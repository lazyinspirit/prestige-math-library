---
id: thm-the-lawrence-krammer-bigelow-representation-is-faithful
kind: theorem
title: The Lawrence-Krammer-Bigelow representation is faithful
status: draft
origin: pipeline
deps: [lem-an-lkb-kernel-braid-fixes-every-standard-adjacent-edge-up-to-isotopy, lem-a-punctured-disk-mapping-class-fixing-all-standard-adjacent-edges-is-a-boundary-twist-power, lem-the-full-boundary-twist-acts-on-lkb-by-the-scalar-q-to-two-n-t-squared, def-axiom-of-choice, def-lawrence-krammer-bigelow-representation]
justified_by: []
aliases: []
dependency_level: 12
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bigelow, Braid groups are linear, J. Amer. Math. Soc. 14 (2001) 471-486"
      url: "https://web.math.ucsb.edu/~bigelow/publications/03.pdf"
      locator: "Theorem 1.1 and Section 3.2, printed pp. 471 and 482: the kernel braid is isotoped to fix all edges, hence is (Delta^2)^k, and <N,(Delta^2)^k(F)> = -q(q^{2n}t^2)^k forces k=0"
    - title: "Krammer, Braid groups are linear, Ann. of Math. 155 (2002) 131-156"
      url: "https://arxiv.org/pdf/math/0405198"
      locator: "Theorem B and Section 4, printed pp. 134 and 143-145 (an independent proof of faithfulness that does not use the topological closure)"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
---
## Statement

Assume AC. The representation $\rho_{\mathrm{LKB}}$ of
[[def-lawrence-krammer-bigelow-representation]] is faithful for every
$n\ge1$: if a boundary-fixed homeomorphism $\sigma$ represents an element of
the kernel, then $\sigma$ is isotopic relative to $\partial D\cup P$ to
$(\Delta^2)^k$ for some $k\in\mathbb Z$. For $n\ge2$ the scalar value $q^{2n}t^2$ forces $k=0$; for $n=1$, $B_1$ is trivial.

## Facts & Assumptions

**Given:** the standard disk with punctures $p_1<\cdots<p_n$ and standard
edges $E_1,\dots,E_{n-1}$; a homeomorphism $\sigma$ of $(D,P)$ fixing
$\partial D$ pointwise and representing an element of
$\ker\rho_{\mathrm{LKB}}$.

[F1] [[lem-an-lkb-kernel-braid-fixes-every-standard-adjacent-edge-up-to-isotopy]]:
$\sigma(E_i)$ is isotopic to $E_i$ relative to $\partial D\cup P$ for every
$i$, and $\sigma$ preserves the labelling of the punctures.

[F2] [[lem-a-punctured-disk-mapping-class-fixing-all-standard-adjacent-edges-is-a-boundary-twist-power]]:
a label-preserving boundary-fixed mapping class fixing each $E_i$ up to isotopy relative to
$\partial D\cup P$ is isotopic to $(\Delta^2)^k$ for some $k\in\mathbb Z$.

[F3] [[lem-the-full-boundary-twist-acts-on-lkb-by-the-scalar-q-to-two-n-t-squared]]:
$\rho_{\mathrm{LKB}}(\Delta^{2k})=q^{2nk}t^{2k}\operatorname{id}$, and for $n\ge2$ this scalar acts as the identity only for $k=0$.

[F4] For $n=1$ the group $B_1$ is trivial by the Artin presentation, so every
representation of $B_1$ is faithful.



## Proof

1.1 Assume $n\ge2$ and let $[\sigma]\in\ker\rho_{\mathrm{LKB}}$. By [F1] the representative $\sigma$ preserves each marked label and fixes each standard edge up to isotopy, so [F2] produces $k\in\mathbb Z$ with $\sigma$ isotopic relative to $\partial D\cup P$ to $(\Delta^2)^k$. Since $\rho_{\mathrm{LKB}}$ only depends on the isotopy class relative to $\partial D\cup P$, $$\rho_{\mathrm{LKB}}(\sigma) =\rho_{\mathrm{LKB}}(\Delta^{2k})=q^{2nk}t^{2k}\operatorname{id}$$ by [F3]. [F1, F2, F3, given, algebra]

2.1 Since $\sigma$ lies in the kernel, the scalar in step 1.1 is the identity; by [F3] this forces $k=0$. Hence $\sigma$ is isotopic relative to $\partial D\cup P$ to the identity, so it represents the trivial element of $B_n$. Therefore $\ker\rho_{\mathrm{LKB}}$ is trivial and $\rho_{\mathrm{LKB}}$ is faithful for $n\ge2$. For $n=1$ the claim is immediate by [F4]. [F3, F4, step 1.1, algebra] ∎
