---
verification:
  repair: research/math-library-rendering-repairs-2026-10-23/receipts/thm-naturality-of-the-connecting-morphism.json
  precheck: pass
id: thm-naturality-of-the-connecting-morphism
kind: theorem
title: "Naturality of the connecting morphism"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-snake-data,
       def-the-arrow-category-of-an-abelian-category,
       thm-the-connecting-morphism-exists-and-is-unique]
justified_by: []
landmark: true
proof_strategy: direct
sources:
  scraped: []
  references:
    - title: "Saunders Mac Lane, Categories for the Working Mathematician, Exercise VIII.4.4"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
    - title: "The Stacks Project, Section 12.5, Lemma 12.5.18"
      url: "https://stacks.math.columbia.edu/tag/00ZX"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Proposition 1.3.4"
      url: "https://djvu.online/file/WrPctxOTQCdBj"
pipeline_run: frontier-24
---

## Statement

Given a morphism between two pieces of snake data in the Mac Lane shape in an
abelian category, the induced square between their connecting morphisms
commutes.

## Facts & Assumptions

**Given:** A commutative ladder between two Mac Lane snake diagrams.

[L1] The arrow category of an abelian category is again abelian ([[def-the-arrow-category-of-an-abelian-category]]).

[L2] The connecting morphism exists and is unique for Mac Lane snake diagrams ([[thm-the-connecting-morphism-exists-and-is-unique]]).

## Proof

**Proof technique:** direct.

1.1 Regard each vertical arrow of the given ladder as an object of the arrow category $\mathcal A^{\to}$. Because kernels, cokernels, pullbacks, and pushouts in $\mathcal A^{\to}$ are computed componentwise, the entire ladder is again a Mac Lane snake diagram in $\mathcal A^{\to}$. [L1, L2, given]

2.1 Applying [L2] in $\mathcal A^{\to}$ produces a connecting morphism between the arrow objects $$\ker(\gamma) \to \operatorname{coker}(\alpha).$$ Read componentwise in $\mathcal A$, that morphism is exactly the pair consisting of the two ordinary connecting morphisms together with the comparison square between them. [L2, step 1.1, construct]

3.1 The defining square for the arrow-category connecting morphism commutes by construction, and uniqueness in [L2] forces that componentwise square to be the naturality square for the two ordinary connecting morphisms. Therefore the connecting morphism is natural. [L2, step 2.1] ∎

## Remarks

Index the two Mac Lane snake diagrams by $X$ and $Y$, and write their left and right vertical maps as $f_X:A_X\to A'_X$, $h_X:C_X\to C'_X$ and $f_Y:A_Y\to A'_Y$, $h_Y:C_Y\to C'_Y$. Set $K_X=\ker(h_X)$, $Q_X=\operatorname{coker}(f_X)$, and similarly for $Y$. The comparison ladder induces maps $k:K_X\to K_Y$ and $q:Q_X\to Q_Y$. The naturality square is

```tikzcd
K_X \arrow[r, "\delta_X"] \arrow[d, "k"'] & Q_X \arrow[d, "q"] \\
K_Y \arrow[r, "\delta_Y"'] & Q_Y\vphantom{g_j}
```

More explicitly, if $u:C_X\to C_Y$ and $v:A'_X\to A'_Y$ are the corresponding ladder maps, the induced maps are characterized by $k_{h_Y}k=u k_{h_X}$ and $q q_{f_X}=q_{f_Y}v$, using the kernel inclusions and cokernel projections of the connecting-morphism construction. The displayed relation $q\delta_X=\delta_Y k$ is precisely the commutativity of the arrow-category morphism in steps 2.1–3.1. Both connecting maps use the same convention $\delta\pi=q_fa$ from that construction; no sign change occurs. The rigorous proof above is independent of the illustration.
