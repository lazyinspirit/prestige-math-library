---
id: thm-right-adjoints-preserve-limits
kind: theorem
title: 'Right adjoints preserve every limit that exists'
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-adjunction-by-unit-counit-and-triangle-identities, def-limit-and-colimit-of-a-diagram, def-preservation-reflection-creation-continuity-and-cocontinuity]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: 'Emily Riehl, Category Theory in Context, 2nd ed., Theorem 4.6.2'
      url: 'https://emilyriehl.github.io/files/context.pdf'
    - title: 'Tom Leinster, Basic Category Theory, Section 6.3'
      url: 'https://arxiv.org/pdf/1612.09375.pdf'
pipeline_run: null
---

## Statement

Let $F:\mathcal C\to\mathcal D$ be left adjoint to $G:\mathcal D\to\mathcal C$. If a diagram $D:\mathcal J\to\mathcal D$ has a limit $(L,\lambda)$, then $(GL,G\lambda)$ is a limit of $GD$. Thus $G$ preserves every limit that exists, for arbitrary indexing categories for which the displayed diagram and cone categories are legitimate.

## Facts & Assumptions

**Given:** An adjunction $F\dashv G$ with unit $\eta$ and counit $\varepsilon$, a diagram $D:\mathcal J\to\mathcal D$, and a limiting cone $\lambda_j:L\to D_j$.

[F1] A limit of a diagram is a terminal cone: every cone has a unique mediating morphism to its vertex whose composites with the limiting legs are the given cone legs ([[def-limit-and-colimit-of-a-diagram]]).

[F2] A functor preserves a limit when the image of a limiting cone is limiting ([[def-preservation-reflection-creation-continuity-and-cocontinuity]]).

[L1] The unit and counit are natural and satisfy $\varepsilon_{Fc}F(\eta_c)=1_{Fc}$ and $G(\varepsilon_d)\eta_{Gd}=1_{Gd}$ ([[def-adjunction-by-unit-counit-and-triangle-identities]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mu_j:c\to GD_j$ be any cone over $GD$, and define $\bar\mu_j:=\varepsilon_{D_j}\circ F(\mu_j):Fc\to D_j$. [L1, construct]

2.1 For $a:j\to k$ in $\mathcal J$, naturality of $\varepsilon$ and the cone equation for $\mu$ give $D(a)\bar\mu_j=\varepsilon_{D_k}FGD(a)F(\mu_j)=\varepsilon_{D_k}F(GD(a)\mu_j)=\bar\mu_k$, so $\bar\mu$ is a cone over $D$. [step 1.1, L1]

3.1 By [F1], there is a unique $h:Fc\to L$ with $\lambda_jh=\bar\mu_j$ for every $j$. Define $\widehat h:=G(h)\eta_c:c\to GL$. [step 2.1, F1, construct]

4.1 For each $j$, $G(\lambda_j)\widehat h=G(\bar\mu_j)\eta_c=G(\varepsilon_{D_j})GF(\mu_j)\eta_c=G(\varepsilon_{D_j})\eta_{GD_j}\mu_j=\mu_j$, by naturality of $\eta$ and the second triangle identity. [step 1.1, step 3.1, L1]

4.2 If $k:c\to GL$ also satisfies $G(\lambda_j)k=\mu_j$, then $\varepsilon_LF(k):Fc\to L$ mediates $\bar\mu$ by naturality of $\varepsilon$. Uniqueness in [F1] makes it $h$, and naturality of $\eta$ together with the second triangle identity $G(\varepsilon_L)\eta_{GL}=1_{GL}$ give $k=G(\varepsilon_L)GF(k)\eta_c=G(\varepsilon_L)\eta_{GL}k$, that is $k=G(h)\eta_c=\widehat h$. [step 1.1, step 3.1, F1, L1]

5.1 Thus every cone over $GD$ factors uniquely through $(GL,G\lambda)$, so it is limiting by [F1]. The construction also covers the empty diagram, where there are no leg equations, and [F2] says exactly that $G$ preserves the limit. [step 4.1, step 4.2, F1, F2] ∎
