---
id: thm-the-cone-long-exact-sequence
kind: theorem
title: "The cone long exact sequence"
status: published
origin: pipeline
landmark: true
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-long-exact-sequence-in-homology,
       thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact,
       def-mapping-cone-of-a-chain-map,
       thm-snake-lemma-under-the-weaker-stacks-hypotheses,
       prop-homology-of-a-shift-is-shifted-homology,
       thm-a-chain-map-induces-a-well-defined-map-on-homology]
proof_strategy: direct
verification:
  audited: 2026-09-01
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Charles A. Weibel, Chapter 1 of An Introduction to Homological Algebra"
      url: "https://math.mit.edu/~hrm/palestine/weibel/01-chain_complexes.pdf"
    - title: "The Stacks Project, Section 12.13: Complexes"
      url: "https://stacks.math.columbia.edu/tag/010V"
pipeline_run: frontier-27
---

## Statement

For every chain map $f:C_\bullet\to D_\bullet$ in an abelian category, there is
an exact sequence
$$\cdots\to H_n(C)\xrightarrow{H_n(f)}H_n(D)\to H_n(\operatorname{Cone}(f))\to H_{n-1}(C)\xrightarrow{H_{n-1}(f)}H_{n-1}(D)\to\cdots.$$

## Facts & Assumptions

**Given:** A chain map $f:C_\bullet\to D_\bullet$.

[L1] The canonical cone sequence $$0\to D_\bullet\to\operatorname{Cone}(f)_\bullet\to C[1]_\bullet\to0$$ is degreewise split short exact ([[thm-the-canonical-mapping-cone-sequence-is-degreewise-split-short-exact]]).

[L2] Homology of a shift satisfies $$H_n(C[1])\cong H_{n-1}(C)$$ ([[prop-homology-of-a-shift-is-shifted-homology]]).

[L3] A chain map induces a well-defined map on homology ([[thm-a-chain-map-induces-a-well-defined-map-on-homology]]).

[L4] Every short exact sequence of complexes yields a long exact homology sequence ([[thm-long-exact-sequence-in-homology]]).

[L5] The cone differential on $D_n\oplus C_{n-1}$ is $d(y,x)=(d_Dy+f(x),-d_Cx)$ ([[def-mapping-cone-of-a-chain-map]]).

[L6] In the weaker snake construction, the connecting morphism is obtained from a pullback $P$ with maps $\pi:P\to\ker(\gamma)$ and $r:P\to U$ and is characterized by $\delta\pi=q_\alpha r$ ([[thm-snake-lemma-under-the-weaker-stacks-hypotheses]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L4] to the short exact sequence from [L1]. This gives an exact sequence $$\cdots\to H_n(D)\to H_n(\operatorname{Cone}(f))\to H_n(C[1])\xrightarrow{\delta_n}H_{n-1}(D)\to\cdots.$$ [L1, L4, given, construct]

2.1 Apply the weaker snake construction [L6] to the quotient-kernel diagram of the cone sequence from [L1] in degree $n+1$. Let $z_C:Z_n(C)\to C_n$ be the cycle inclusion and let $s:Z_n(C)\to\operatorname{Cone}(f)_{n+1}$ have components $(0,z_C)$. Its projection to $C[1]_{n+1}=C_n$ is $z_C$, so $s$ and the quotient $q_C:Z_n(C)\to H_n(C)$ induce a morphism $t:Z_n(C)\to P$ into the pullback used in [L6], with $\pi t=q_C$. By [L5], $$d^{\operatorname{Cone}(f)}s=j_nf_nz_C,$$ and the defining equation for $r$ in the snake construction therefore gives $rt=Z_n(f)$. Consequently [L6] yields $$\delta_{n+1}q_C=\delta_{n+1}\pi t=q_Drt=q_DZ_n(f)=H_n(f)q_C.$$ The last equality is the defining square for [L3]. Since $q_C$ is epic, $\delta_{n+1}=H_n(f)$. Reindexing step 1.1 by [L2] gives the displayed cone long exact sequence. [L1, L2, L3, L5, L6, step 1.1, construct, algebra] ∎
