---
id: "lem-derivatives-of-a-multiple-test-blowup"
kind: "lemma"
title: "Derivative ideals under a multiple test blow-up"
status: draft
origin: pipeline
pipeline_run: "frontier-40-geometry-braids-rep-27"
dependency_level: 6
deps:
  - "def-ideal-of-derivatives"
  - "def-multiple-test-blowup-and-controlled-transform"
  - "lem-controlled-transform-is-well-defined"
  - "lem-derivative-ideals-have-the-same-support"
  - "lem-derivatives-commute-with-controlled-transform"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Jaroslaw Wlodarczyk, Simple Hironaka resolution in characteristic zero, J. Amer. Math. Soc. 18 (2005) 779-822; author's arXiv version math/0401401 (28 pp., dated October 25, 2018)"
      url: "https://arxiv.org/pdf/math/0401401"
---

## Statement

Let $(\mathcal I,\mu)$ be a marked ideal on a smooth $K$-scheme and let $(X_i)_{0\le i\le k}$ be a multiple test blow-up with controlled transforms $(\mathcal I_i,\mu)$ ([[def-multiple-test-blowup-and-controlled-transform]]).
Then $(X_i)$ is also a multiple test blow-up of the marked ideal $\mathcal D^j(\mathcal I,\mu)$ for every $0\le j\le\mu$, and for all $i$
$$\bigl[\mathcal D^j(\mathcal I,\mu)\bigr]_i\subseteq\mathcal D^j(\mathcal I_i,\mu).$$
Indeed the centers of $(X_i)$ lie in the derivative supports by the all-characteristic forward inclusion in [[lem-derivative-ideals-have-the-same-support]], and the transform inclusion follows by induction on $i$ using [[lem-derivatives-commute-with-controlled-transform]].

## Facts & Assumptions

**Given:** A marked ideal $(\mathcal I,\mu)$ on a smooth $K$-scheme and a multiple test blow-up $(X_i)_{0\le i\le k}$ with controlled transforms $(\mathcal I_i,\mu)$, and $0\le j\le\mu$.

[F1] [[def-multiple-test-blowup-and-controlled-transform]]: each step blows up a regular center $C_i\subseteq\operatorname{supp}(\mathcal I_i,\mu)$ in SNC position with $E_i$, or is an isomorphism; the controlled transform is $\sigma^{\mathrm c}(\mathcal A,\nu)=(\mathcal I(D)^{-\nu}\sigma^*\mathcal A,\nu)$.

[F2] [[lem-derivative-ideals-have-the-same-support]]: in every characteristic, $\operatorname{supp}(\mathcal I_i,\mu)\subseteq\operatorname{supp}(\mathcal D^j(\mathcal I_i),\mu-j)$ for $0\le j<\mu$; for $j=\mu$ the target marking is zero and its support is all of $X_i$.

[F3] [[lem-derivatives-commute-with-controlled-transform]]: for the single blow-up $\sigma_{i+1}$ with center in the support, $\sigma_{i+1}^{\mathrm c}(\mathcal D^j(\mathcal A),\mu_{\mathcal A}-j)\subseteq\mathcal D^j(\sigma_{i+1}^{\mathrm c}(\mathcal A,\mu_{\mathcal A}))$, and $\mathcal D^j$ is monotone on inclusions.

[F4] [[lem-controlled-transform-is-well-defined]], [[def-ideal-of-derivatives]]: the controlled transform and the derivative ideal are well-defined ideal sheaves, so inclusions can be checked locally.

## Proof

1.1 The centers are admissible for the derivative ideal. Let $0\le j\le\mu$ and let $(\mathcal D^j(\mathcal I,\mu))_i$ denote the $i$-th controlled transform of the marked ideal $\mathcal D^j(\mathcal I,\mu)$ along the same sequence. We prove by induction on $i$ that the sequence $(X_i)$ is a multiple test blow-up of $\mathcal D^j(\mathcal I,\mu)$ and that $(\mathcal D^j(\mathcal I,\mu))_i\subseteq\mathcal D^j(\mathcal I_i,\mu)$. For $i=0$ this is equality. Assume it for $i$. By [F2] applied at stage $i$, $C_i\subseteq\operatorname{supp}(\mathcal I_i,\mu)\subseteq\operatorname{supp}(\mathcal D^j(\mathcal I_i),\mu-j)$, and the latter is contained in $\operatorname{supp}((\mathcal D^j(\mathcal I,\mu))_i,\mu-j)$ by the induction inclusion (a smaller ideal has a larger order-superlevel support), so $C_i$ is an admissible center for the derivative marked ideal and step $i+1$ is defined for it. [F1, F2]

2.1 The transform inclusion. With the notation of step 1.1, $(\mathcal D^j(\mathcal I,\mu))_{i+1}=\sigma_{i+1}^{\mathrm c}((\mathcal D^j(\mathcal I,\mu))_i)\subseteq\sigma_{i+1}^{\mathrm c}(\mathcal D^j(\mathcal I_i,\mu))\subseteq\mathcal D^j(\sigma_{i+1}^{\mathrm c}(\mathcal I_i,\mu))=\mathcal D^j(\mathcal I_{i+1},\mu)$, using the induction inclusion and the monotonicity of the controlled transform in step 1, and [F3] in step 2. This completes the induction and proves both assertions. [F3, F4, step 1.1] ∎ 