---
id: ex-augmentation-erases-class-information
kind: example
title: "An augmentation that erases the label-relevant class coordinate"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 4
deps:
  - def-latent-class-contrastive-learning
  - lem-contrastive-hinge-and-logistic-loss-properties
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
verification: {judge: {model: "gpt-6-luna", verdict: pass, date: 2026-10-20}}
sources:
  references:
    - title: "Ting Chen et al., A Simple Framework for Contrastive Learning of Visual Representations, Section 3"
      url: "https://proceedings.mlr.press/v119/chen20j/chen20j.pdf"
---

## Example

Let the raw input be $(c,n)\in\{-1,+1\}^2$, where the latent class is $c$ and, conditional on either class, the nuisance coordinate $n$ is uniform on $\{-1,+1\}$. Apply the augmentation $T(c,n)=n$ before forming positive pairs and negative samples. The resulting input law $D_c$ is the same uniform law for both classes, so $D_{\rm sim}=D_{\rm neg}\otimes D_{\rm neg}$ and the observed triplets carry no class-dependent distributional signal. Consequently, every deterministic representation of the augmented input is independent of the binary task label, and its optimal average hinge risk for a uniform-label two-class task is exactly $1$; the erased class coordinate is unavailable to both the contrastive learner and the downstream linear classifier.

## Example references

[[def-latent-class-contrastive-learning]]: defines the class-conditional post-augmentation laws and binary tasks.

[[lem-contrastive-hinge-and-logistic-loss-properties]]: defines the hinge loss used to compute the downstream risk.

[Chen et al., Section 3](https://proceedings.mlr.press/v119/chen20j/chen20j.pdf): explains how augmentation choices define the predictive tasks in contrastive learning.

## Facts & Assumptions

**Given:** The two latent classes, the nuisance law, the deterministic augmentation $T(c,n)=n$, and a deterministic representation $f$ of the augmented input.

[F1] After augmentation, $D_{+1}=D_{-1}$ is uniform on $\{-1,+1\}$, so the observed input has the same law under both labels. [[def-latent-class-contrastive-learning]]

[F2] For a fixed score $z=w^\top f(x)$, the average hinge loss over uniform labels is $\frac12[(1-z)_++(1+z)_+]$, which is at least $1$ for every real $z$; choosing $w=0$ gives risk $1$. [[lem-contrastive-hinge-and-logistic-loss-properties]]

## Proof

**Given:** The finite model in the Example.

1.1 Since $T(c,n)=n$ and $n$ is uniform independently of $c$, each post-augmentation class law is the same uniform law $U$. The mixture formula gives $D_{\rm neg}=U$ and $D_{\rm sim}(A\times B)=U(A)U(B)$ for all subsets $A,B$ of the finite input space, hence $D_{\rm sim}=U\otimes U$. Thus the observed triplet law is $U\otimes U\otimes U$, independent of the latent task labels, and every score $z=w^\top f(n)$ has the same distribution under both labels. [F1, given]

2.1 For each fixed score $z$, if $|z|\le1$ then $(1-z)_++(1+z)_+=2$. If $z\ge1$, the sum is $0+(1+z)\ge2$; if $z\le-1$, it is $(1-z)+0\ge2$. Therefore [F2] gives average risk at least $1$ after integrating over the common input law, and $w=0$ attains $1$. The class coordinate erased by $T$ cannot be recovered by this downstream classifier. [F1, F2, step 1.1, given, algebra] ∎
