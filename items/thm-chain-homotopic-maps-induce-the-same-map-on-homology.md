---
id: thm-chain-homotopic-maps-induce-the-same-map-on-homology
kind: theorem
title: "Chain-homotopic maps induce the same map on homology"
status: published
origin: pipeline
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-chain-homotopy, def-cycle-and-boundary-subobjects-of-a-complex, lem-the-boundary-subobject-factors-through-the-cycle-subobject, def-homology-object-of-a-chain-complex, def-kernels-and-cokernels-as-equalizers-and-coequalizers, lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries, thm-a-chain-map-induces-a-well-defined-map-on-homology]
proof_strategy: direct
verification:
  audited: 2026-09-24
  precheck: pass
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

[L2] The cycle inclusion $k_C:Z_n(C)\to C_n$ is the kernel of $d^C_n$, hence $d^C_n k_C=0$. The boundary inclusion $B_n(D)\to D_n$ is the image of $d^D_{n+1}$ ([[def-cycle-and-boundary-subobjects-of-a-complex]]).

[L3] The boundary inclusion factors through the cycle inclusion $k_D:Z_n(D)\to D_n$. Thus there are arrows $e_D:D_{n+1}\to B_n(D)$ and $\beta_D:B_n(D)\to Z_n(D)$ with $d^D_{n+1}=k_D\beta_D e_D$ ([[lem-the-boundary-subobject-factors-through-the-cycle-subobject]]).

[L4] The homology quotients $q_C:Z_n(C)\to H_n(C)$ and $q_D:Z_n(D)\to H_n(D)$ are cokernels of the respective boundary-to-cycle maps; in particular $q_D\beta_D=0$ ([[def-homology-object-of-a-chain-complex]]).

[L5] For a chain map $u:C_\bullet\to D_\bullet$, its cycle map satisfies $k_D Z_n(u)=u_n k_C$ ([[lem-a-chain-map-carries-cycles-to-cycles-and-boundaries-to-boundaries]]), and its induced homology map is characterized by $H_n(u)q_C=q_D Z_n(u)$ ([[thm-a-chain-map-induces-a-well-defined-map-on-homology]]).

[L6] A cokernel is a coequalizer and therefore an epimorphism: two arrows agreeing after precomposition with $q_C$ are equal ([[def-kernels-and-cokernels-as-equalizers-and-coequalizers]]).

## Proof

**Proof technique:** direct.

1.1 Restrict the homotopy identity [L1] along $k_C$. Since $d^C_n k_C=0$ by [L2], $$ (f_n-g_n)k_C=d^D_{n+1}s_n k_C=k_D\beta_D e_Ds_nk_C. $$ By [L5], the left side is $k_D\bigl(Z_n(f)-Z_n(g)\bigr)$. The kernel inclusion $k_D$ is monic, so $$Z_n(f)-Z_n(g)=\beta_D e_Ds_nk_C.$$ [L1, L2, L3, L5, given, algebra]

2.1 Apply $q_D$ to the equality in step 1.1. Since $q_D\beta_D=0$ by [L4], $$q_D\bigl(Z_n(f)-Z_n(g)\bigr)=0.$$ By [L5], this is $\bigl(H_n(f)-H_n(g)\bigr)q_C=0$. The cokernel map $q_C$ is epic by [L6], so $H_n(f)=H_n(g)$ for every $n$. [L4, L5, L6, step 1.1, algebra] ∎
