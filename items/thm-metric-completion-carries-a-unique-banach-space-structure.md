---
id: thm-metric-completion-carries-a-unique-banach-space-structure
kind: theorem
title: "The metric completion of a normed space carries a unique compatible Banach-space structure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-banach-space, def-completion-of-a-normed-space,
       lem-completion-operations-are-well-defined,
       thm-metric-completion-exists,
       lem-vector-operations-are-continuous-in-a-normed-space]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Theo Buhler and Dietmar A. Salamon, Functional Analysis"
      url: "https://www.scribd.com/document/978968885/Functional-Analysis-1st-Edition-Theo-Bhler-Dietmar-A-Salamon"
    - title: "Gerald Teschl, Topics in Real and Functional Analysis"
      url: "https://www.uomustansiriyah.edu.iq/media/lectures/9/9_2018_12_07!10_23_44_AM.pdf"
pipeline_run: frontier-27
---

## Statement

Let $X$ be a normed space. The published metric completion of the norm metric on
$X$ admits a unique vector-space structure and norm whose induced metric is the
published completion metric and such that the constant sequence embedding
$i:X\to \widehat X$ is a dense linear isometry. With this structure,
$\widehat X$ is a Banach space.

## Facts & Assumptions

**Given:** A normed space $X$, its published metric completion $\widehat X$ by Cauchy classes, and the constant-sequence embedding $i:X\to\widehat X$.

[L1] The published metric completion exists, is complete, and $i[X]$ is dense in it ([[thm-metric-completion-exists]]).

[L2] Termwise addition, scalar multiplication, and the limiting norm on Cauchy classes are well defined ([[lem-completion-operations-are-well-defined]]).

[L3] A Banach space is a normed space complete for its norm metric, and a completion of a normed space is a Banach space with dense linear isometry from the original space ([[def-banach-space]], [[def-completion-of-a-normed-space]]).

[L4] Addition and scalar multiplication are continuous in every normed space ([[lem-vector-operations-are-continuous-in-a-normed-space]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the Cauchy classes carry termwise addition and scalar multiplication, and each class has a well-defined norm $\|[x_n]\|:=\lim_n\|x_n\|$. [L2]

2.1 On constant sequences these operations agree with those of $X$, and $\|i(x)\|=\|x\|$ by definition, so $i$ is a linear isometry. [step 1.1, L2]

2.2 For classes $[x_n]$ and $[y_n]$, the distance of the published metric completion is $\lim_n\|x_n-y_n\|$, while the new difference class is $[x_n-y_n]$; therefore the completion metric is exactly the metric induced by the norm from step 1.1. [step 1.1, L1, L2]

3.1 Because the underlying metric space is complete by [L1], step 2.2 makes $\widehat X$ complete for its new norm metric. So $\widehat X$ is Banach and $(\widehat X,i)$ is a completion of $X$ in the sense of [L3]. [step 2.1, step 2.2, L1, L3]

3.2 Suppose a second Banach-space structure on the same underlying set induces the published completion metric and also makes $i$ a dense linear isometry. Its addition and scalar multiplication are continuous by [L4], and they agree with the operations of step 1.1 on the dense subset $i[X]\times i[X]$ and on $\mathbb K\times i[X]$; therefore they agree everywhere. [step 2.1, L4]

4.1 The norm is then forced as well, because in any compatible normed structure $\|u\|$ equals the metric distance from $u$ to $0$. So the compatible Banach-space structure is unique. [step 2.2, step 3.2] ∎
