---
id: fs-residue-theorem-applies-to-any-cycle-in-the-domain
kind: false-statement
title: "FALSE: the residue theorem applies to every cycle in the ambient domain"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-admissible-cycle-for-residue-theorem,
       thm-residue-theorem-null-homologous-cycle]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "L. V. Ahlfors, Complex Analysis, 3rd ed., Ch. 4 §5.1"
      url: "https://people.math.gatech.edu/~mccuan/courses/6321/lars-ahlfors-complex-analysis-third-edition-mcgraw-hill-science_engineering_math-1979.pdf"
pipeline_run: null
---

## Statement

**False claim:** if $f$ is meromorphic on an open set $\Omega$ and $\Gamma$ is any
cycle in $\Omega\setminus S$, then

$\int_\Gamma f(z)\,dz=2\pi i\sum_{a\in S}n(\Gamma,a)\operatorname{Res}(f,a).$

The missing hypothesis is that $\Gamma$ be null-homologous in $\Omega$.

## Facts & Assumptions

**Given:** The punctured plane $\Omega=\mathbb C\setminus\{0\}$, the function $f(z)=1/z$, and the positively oriented unit circle $\Gamma$.

[L1] The residue theorem requires an admissible cycle, hence in particular null-homology in the ambient open set ([[def-admissible-cycle-for-residue-theorem]], [[thm-residue-theorem-null-homologous-cycle]]).

## Refutation

**Proof technique:** direct.

1.1 In the punctured plane $\Omega=\mathbb C\setminus\{0\}$, the unit circle is not null-homologous: its winding number about the omitted point $0$ is $1$, not $0$. [given]

2.1 The function $1/z$ is holomorphic on $\Omega$, so its pole set in the ambient domain is empty and the right-hand sum in the false claim is $0$. However, the contour integral around the unit circle is $2\pi i$. Thus the displayed equality fails, exactly because the cycle is not null-homologous in $\Omega$. [step 1.1, L1, algebra] ∎
