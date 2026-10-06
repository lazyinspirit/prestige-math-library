---
id: cor-good-reduction-admits-a-neron-model
kind: corollary
title: "Good reduction supplies a Neron model"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-good-reduction-and-abelian-scheme-model
  - thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre
  - def-neron-model-and-mapping-property
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "S. Bosch, W. Lutkebohmert, M. Raynaud, Neron Models (1990), 1.2/8 and 1.3/1 (good reduction and Neron models)"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
---

## Statement

Assume AC and DC. Let $S$ be a Dedekind scheme with function field $K$ and let $A_K$ be an abelian variety over $K$ with good reduction over $S$ ([[def-good-reduction-and-abelian-scheme-model]]). Then $A_K$ admits a Neron model over $S$, namely any abelian scheme model $A\to S$ of $A_K$, and this model is unique up to a unique $S$-isomorphism inducing the specified identity on $A_K$. In particular, for a discrete valuation ring $R$ with fraction field $K$, every abelian variety over $K$ with good reduction has a Neron model over $R$, and that Neron model is proper and smooth over $R$.

## Facts & Assumptions

**Given:** AC and DC, a Dedekind scheme $S$ with function field $K$, an abelian variety $A_K/K$ with good reduction, and an abelian scheme model $A\to S$ of $A_K$.

[F1] By definition of good reduction there is an abelian scheme $A\to S$ with $A\times_S\operatorname{Spec}K\cong A_K$ ([[def-good-reduction-and-abelian-scheme-model]]).

[F2] An abelian scheme over a Dedekind scheme is a Neron model of its generic fibre, and Neron models are unique up to a unique isomorphism over the generic fibre ([[thm-abelian-scheme-is-the-neron-model-of-its-generic-fibre]], [[def-neron-model-and-mapping-property]]).

## Proof

**Proof technique:** direct.

1.1 Let $A\to S$ be an abelian scheme model of $A_K$, supplied by [F1]. By [F2] $A$ satisfies the Neron mapping property; since $A\to S$ is smooth, separated and of finite type, it is a Neron model of $A_K$. [F1, F2, given, algebra]

2.1 Any two Neron models of $A_K$ are related by a unique $S$-isomorphism inducing the specified identity on $A_K$, by the uniqueness clause of [F2], so the model is unique up to unique isomorphism over the specified generic fibre; it is proper and smooth because it is an abelian scheme. In the DVR case the same statement applies to $S=\operatorname{Spec}R$. [F2, step 1.1, algebra] ∎ 