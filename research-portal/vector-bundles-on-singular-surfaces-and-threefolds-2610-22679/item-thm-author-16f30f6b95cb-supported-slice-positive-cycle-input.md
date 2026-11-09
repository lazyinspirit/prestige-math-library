---
title: External supported slice projection with positive generic coefficient
status: published
research_item: thm-author-16f30f6b95cb-supported-slice-positive-cycle-input
dependency_level: 0
---

PDF p. 16: Supported leading weight two

## Prerequisites

None.

## Statement
Let $k$ be perfect, let $V$ be a smooth quasi-projective finite-type $k$-scheme, and let $W\subset V$ be integral closed support of codimension $q$. In classical slice K-theory the actual stage augmentation $\epsilon_q:(f_qK)_W(V)\to K_W(V)$ is an equivalence. Set
$$\psi_W=\pi_0\bigl((f_qK)_W(V)\to(s_qK)_W(V)\bigr)\circ(\pi_0\epsilon_q)^{-1}.$$
The canonical slice-to-cycle comparison identifies the generic coefficient of $\psi_W$ with
$$K_0^W(V)\longrightarrow G_0(W)\longrightarrow K_0(k(W))\xrightarrow{\dim}\mathbb Z.$$
The first arrow is the coherent Euler/devissage comparison, the second is actual generic restriction, and dimension sends $[k(W)]$ to $+1$. This statement includes support: the q-th supported slice restricts equivalently to its codimension-q generic-point coefficient. It does not identify a supported class with its possibly zero image in the ambient Chow group.

## Source contract

**Given:** Exactly the perfect-field, smooth quasi-projective ambient and integral codimension-q support hypotheses above.

**Goal:** Import the exact actual supported projection and its positive cycle normalization.

[F1] Kahn–Levine Proposition 2.2.2 gives the compatible coniveau/slice towers; Lemmas 2.3.1–2.3.2 give the supported augmentation equivalence and generic detection. Definition 3.1.5 defines precisely $\psi_W$.

[F2] Their Definitions 3.1.9–3.1.15, Theorem 3.2.4 and Lemma 6.4.2 identify the slice-cycle map with the support-pair K-to-G map and generic restriction constructed explicitly in Lemma 6.2.1.

[F3] Section 5.9 identifies $K_0(F)$ with $\mathbb Z$ by dimension, compatible with the Serre face convention. In the ordinary case no reduced-norm scaling or negative generator is inserted.

## External input
Import the restricted package [F1]–[F3], assembled from the displayed source constructions and commuting diagrams with exactly their hypotheses. It supplies a map and its coefficient, not an inference from equality of groups. Its application to a smooth ambient that is not quasi-projective is made only after restricting to an affine neighborhood of the generic point and using the local detection lemma; quasi-projectivity is not added as a global hypothesis. The full coniveau, purity and moving-lemma constructions are substantial external inputs and are not locally rebuilt.

The S1 coniveau/slice construction is connected to the P1-stable KGL tower by the actual augmentation-adjoint comparison of Levine section8.3/Theorem9.0.3, as specified in the dedicated reference; this stabilization is an imported map-level input, not an identification inferred from the equality of cohomology groups.
