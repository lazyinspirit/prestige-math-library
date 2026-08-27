---
id: ex-kernels-cokernels-images-and-coimages-computed-in-abelian-groups
kind: example
title: "Kernels, cokernels, images, and coimages in abelian groups are the familiar subgroup and quotient constructions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-abelian-groups-form-an-abelian-category]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-08-27
sources:
  scraped: []
  references:
    - title: "Gautam Tamme, Algebra II Lecture 9, §9.4"
      url: "https://people.math.osu.edu/gautam.42/S21/AII/Notes/Lecture09.pdf"
pipeline_run: frontier-21
---

## Example

For a homomorphism $f:G\to H$ of abelian groups, the kernel is the usual
subgroup $\ker(f)\subseteq G$, the cokernel is the quotient
$H/\operatorname{im}(f)$, the coimage is $G/\ker(f)$, and the image is the
subgroup $\operatorname{im}(f)\subseteq H$. The canonical map
$G/\ker(f)\to\operatorname{im}(f)$ is the usual first-isomorphism map
$g+\ker(f)\mapsto f(g)$.

## Facts & Assumptions

**Given:** A homomorphism $f:G\to H$ of abelian groups.

[L1] Abelian groups form an abelian category
([[thm-abelian-groups-form-an-abelian-category]]).

## Verification

**Proof technique:** direct.

1.1 In $\mathbf{Ab}$, kernels and cokernels are computed by the familiar subgroup and quotient constructions. So the categorical kernel and cokernel of $f$ are exactly $\ker(f)$ and $H/\operatorname{im}(f)$. [L1]

2.1 Therefore the categorical coimage is $G/\ker(f)$ and the categorical image is $\operatorname{im}(f)$. The canonical coimage-to-image comparison is the map $g+\ker(f)\mapsto f(g)$, which is the usual first-isomorphism map. [L1, step 1.1] ∎
