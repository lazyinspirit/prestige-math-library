---
id: thm-chain-homotopic-maps-induce-the-same-map-on-homology
kind: theorem
title: "Chain-homotopic maps induce the same map on homology"
status: draft
origin: pipeline
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-chain-homotopy, thm-a-chain-map-induces-a-well-defined-map-on-homology]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-30
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "Joseph J. Rotman, An Introduction to Homological Algebra, 2nd ed."
      url: "https://dokumen.pub/an-introduction-to-homological-algebra-2nbsped-9780387245270-9780387683249.html"
pipeline_run: frontier-25
---

## Statement

If $f,g:C_\bullet\to D_\bullet$ are chain-homotopic chain maps, then for every
$n\in\mathbb Z$,
$$H_n(f)=H_n(g):H_n(C)\to H_n(D).$$

## Facts & Assumptions

**Given:** A chain homotopy $s:f\simeq g$ and an integer $n$.

[L1] A chain homotopy satisfies $$f_n-g_n=d^D_{n+1}s_n+s_{n-1}d^C_n$$ ([[def-chain-homotopy]]).

[L2] Every chain map induces a well-defined map on homology ([[thm-a-chain-map-induces-a-well-defined-map-on-homology]]).

## Proof

**Proof technique:** direct.

1.1 Let $z\in Z_n(C)$ be an $n$-cycle. Since $d^C_nz=0$, [L1] gives $$ (f_n-g_n)(z)=d^D_{n+1}s_n(z), $$ so $(f_n-g_n)(z)$ is a boundary in degree $n$. [L1, given, algebra]

2.1 By [L2], $H_n(f)$ and $H_n(g)$ are defined on homology classes of cycles. Step 1.1 shows that every $n$-cycle has images under $f_n$ and $g_n$ differing by a boundary, so those induced homology classes coincide. Hence $H_n(f)=H_n(g)$. [L2, step 1.1, algebra] ∎
