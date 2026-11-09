---
title: Stage projections, kernels and image groups
status: published
research_item: lem-filtered-stage-exact-sequence
dependency_level: 5
---

PDF p. 9: Low and high filtration exact sequences

## Prerequisites

- [def-stable-spectra-interface](item-def-stable-spectra-interface)
- [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)
- [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness)

## Statement
Let $E$ be a spectrum with a decreasing filtration and let $i,j\in\mathbb Z$. There is a natural exact sequence of abelian groups

$$\pi_{i+1}\operatorname{gr}^jE\longrightarrow\pi_iF^{j+1}E\longrightarrow\pi_iF^jE\xrightarrow{p}\pi_i\operatorname{gr}^jE\longrightarrow\pi_{i-1}F^{j+1}E.$$

Write $q:\pi_iF^jE\to\pi_iE$ for the structure homomorphism and $F^j\pi_iE=\operatorname{im}q$. The stage projection $p$ induces a homomorphism $\bar p:F^j\pi_iE\to\pi_i\operatorname{gr}^jE$ satisfying $\bar p(q(x))=p(x)$ precisely when $\ker q\subseteq\ker p$. When it exists, its kernel is $F^{j+1}\pi_iE$. In particular, injectivity of $q$ is sufficient, and then $q$ identifies $\ker p$ with $F^{j+1}\pi_iE$.

A decreasing filtration consists of spectra $F^jE$ with compatible maps $F^{j+1}E\to F^jE\to E$. Its graded spectrum is the cofiber $\operatorname{gr}^jE=\operatorname{cofib}(F^{j+1}E\to F^jE)$. The image filtration is $F^j\pi_iE=\operatorname{im}(\pi_iF^jE\to\pi_iE)$. Exactness means that the image of each map equals the kernel of the next; $\pi_i$ denotes the $i$th homotopy group of a spectrum.

## Facts & Assumptions

**Given:** A spectrum $E$ with a decreasing filtration and integers $i,j$.

**Goal:** Prove the stage exact sequence and determine when its graded projection descends to the image filtration, together with its kernel.

[F1] The filtration supplies the compatible maps $F^{j+1}E\to F^jE\to E$, and $\operatorname{gr}^jE$ is the cofiber of the first map. Its image filtration is defined by the images of the structure maps. [def-decreasing-filtered-spectrum](item-def-decreasing-filtered-spectrum)

[F2] In spectra, a cofiber sequence is also a fiber sequence, with its coherent nullhomotopy. Homotopy groups are functorial abelian groups. [def-stable-spectra-interface](item-def-stable-spectra-interface)

[F3] A fiber sequence $A\to B\to C$ gives a natural long exact sequence $\cdots\to\pi_{i+1}C\to\pi_iA\to\pi_iB\to\pi_iC\to\pi_{i-1}A\to\cdots$. [lem-fiber-sequence-homotopy-exactness](item-lem-fiber-sequence-homotopy-exactness)

## Proof

**Proof technique:** Apply homotopy exactness to the cofiber sequence, then use the elementary criterion for a homomorphism to factor through an image.

1.1 By [F1] and [F2], $F^{j+1}E\to F^jE\to\operatorname{gr}^jE$ is a fiber sequence. Applying [F3] gives the displayed exact sequence, including the indicated connecting maps. Its naturality follows from the naturality in [F3] for maps of these sequences. [F1, F2, F3, given]

2.1 Let $r:\pi_iF^{j+1}E\to\pi_iF^jE$ be the transition homomorphism. Exactness at $\pi_iF^jE$ gives $\ker p=\operatorname{im}r$. Compatibility of the filtration maps gives $q\circ r:\pi_iF^{j+1}E\to\pi_iE$ as the structure homomorphism, and hence $q(\ker p)=F^{j+1}\pi_iE$. [F1, step 1.1]

3.1 If a homomorphism $\bar p$ with $\bar p q=p$ exists on $\operatorname{im}q$, then $q(x)=0$ implies $p(x)=\bar p(0)=0$, so $\ker q\subseteq\ker p$. Conversely, under this inclusion define $\bar p(q(x))=p(x)$. If $q(x)=q(y)$, then $x-y\in\ker q\subseteq\ker p$, so $p(x)=p(y)$; thus the formula is independent of the lift. It defines a homomorphism because $p$ and $q$ are homomorphisms, and it is the unique such homomorphism because $q$ is onto its image. [F2, construct, step 2.1]

4.1 When $\bar p$ exists, an element $q(x)$ is in its kernel exactly when $p(x)=0$. Consequently $\ker\bar p=q(\ker p)=F^{j+1}\pi_iE$ by step 2.1. If $q$ is injective, $\ker q=0\subseteq\ker p$, so the projection exists; moreover $q$ restricts to an isomorphism from $\ker p$ onto $F^{j+1}\pi_iE$. This proves all assertions. [step 2.1, step 3.1] ∎
