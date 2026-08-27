---
id: thm-in-a-pullback-square-the-induced-morphism-on-the-kernels-of-the-parallel-legs-is-an-isomorphism
kind: theorem
title: "In a pullback square, the induced map on the kernels of the two parallel arrows is an isomorphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-the-pullback-of-a-cospan-is-the-kernel-of-the-difference-of-its-legs, thm-the-pullback-of-an-epimorphism-is-an-epimorphism, def-abelian-category]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  audited: 2026-08-28
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.12"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
pipeline_run: frontier-21
---

## Statement

In a pullback square in an abelian category

```tikzcd
P \arrow[r, "\beta"] \arrow[d, "\alpha"'] & B \arrow[d, "g"] \\
A \arrow[r, "f"'] & C,
```

the induced morphism from $\ker(\beta)$ to $\ker(f)$ is an isomorphism.

## Facts & Assumptions

**Given:** The displayed pullback square in an abelian category.

[L1] Abelian categories have pullbacks, and the square above is one
([[def-abelian-category]],
[[thm-the-pullback-of-a-cospan-is-the-kernel-of-the-difference-of-its-legs]]).

## Proof

**Proof technique:** direct.

1.1 Let $k_\beta:K_\beta\to P$ be a kernel of $\beta$ and let $k_f:K_f\to A$ be a kernel of $f$. Since $g\beta k_\beta=f\alpha k_\beta=0$, the kernel property of $k_f$ gives a unique map $u:K_\beta\to K_f$ with $k_f u=\alpha k_\beta$. [L1, given]

2.1 Because $f k_f=0=g0$, the pullback universal property gives a unique map $s:K_f\to P$ with $\alpha s=k_f$ and $\beta s=0$. Since $\beta s=0$, the kernel property of $k_\beta$ gives a unique map $v:K_f\to K_\beta$ with $k_\beta v=s$. Then $k_fuv=\alpha k_\beta v=\alpha s=k_f$, so $uv=1$ by monicity of $k_f$; similarly $k_\beta vu=s=k_\beta$, so $vu=1$ by monicity of $k_\beta$. Thus $u$ is an isomorphism. [step 1.1, L1] ∎
