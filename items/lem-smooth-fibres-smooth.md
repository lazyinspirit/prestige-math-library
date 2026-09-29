---
id: lem-smooth-fibres-smooth
kind: lemma
title: "Fibres of a smooth morphism are smooth"
status: draft
origin: pipeline
deps:
  - def-smooth-morphism-schemes
  - thm-smooth-morphisms-stable-base-change-composition
  - def-geometric-fibre
  - def-scheme-theoretic-fibre
  - def-base-change-morphism-schemes
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Sections 29.25-29.37 (fibres of smooth morphisms)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapter 25"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Assume the Axiom of Choice (AC). Let $f:X\to S$ be a morphism, $s\in S$ and let
$X_s$ be the scheme-theoretic fibre ([[def-scheme-theoretic-fibre]]), with
base-changed fibre $X_{s,K}=X_s\times_{\operatorname{Spec}\kappa(s)}
\operatorname{Spec}K$ for a field extension $K/\kappa(s)$
(a geometric fibre as in [[def-geometric-fibre]] when $K$ is an algebraic
closure of $\kappa(s)$).

1. If $f$ is smooth ([[def-smooth-morphism-schemes]]), then the structural
   morphism $X_s\to\operatorname{Spec}\kappa(s)$ is smooth.
2. If $f$ is smooth, then for every field extension $K/\kappa(s)$, the morphism
   $X_{s,K}\to\operatorname{Spec}K$ is smooth.
3. Pointwise: if $f$ is smooth at $x\in X_s\subseteq X$, then $X_s\to
   \operatorname{Spec}\kappa(s)$ is smooth at $x$.

Empty fibres are smooth vacuously.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] $X_s=X\times_S\operatorname{Spec}\kappa(s)$ with the second projection as structure morphism, and $X_{s,K}=X_s\times_{\operatorname{Spec}\kappa(s)}\operatorname{Spec}K$ with its projection to $\operatorname{Spec}K$ ([[def-scheme-theoretic-fibre]], [[def-geometric-fibre]]).

[F2] The fibre $X_s\to\operatorname{Spec}\kappa(s)$ is the base change of $f:X\to S$ along the canonical morphism $\operatorname{Spec}\kappa(s)\to S$, and $X_{s,K}\to\operatorname{Spec}K$ is the base change of $X_s\to\operatorname{Spec}\kappa(s)$ along $\operatorname{Spec}K\to\operatorname{Spec}\kappa(s)$ ([[def-base-change-morphism-schemes]], [[def-geometric-fibre]]).

[F3] Assume AC. For any morphisms $f:X\to S$, $h:S'\to S$, the base change $f_{S'}:X\times_SS'\to S'$ of a smooth $f$ is smooth ([[thm-smooth-morphisms-stable-base-change-composition]]); moreover smoothness of a morphism is a condition on each point of its source, preserved by restricting the source to an open neighbourhood ([[def-smooth-morphism-schemes]]).

[F4] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Clause 1. Let $\iota:\operatorname{Spec}\kappa(s)\to S$ be the canonical residue-field point. By [F1] and [F2] the structural morphism $X_s\to\operatorname{Spec}\kappa(s)$ is exactly the base change of $f$ along $\iota$. If $f$ is smooth, [F3] makes this base change smooth. If $X_s$ is empty the assertion is vacuous. [F1, F2, F3]

2.1 Clause 2. Assume $f$ is smooth and fix a field extension $K/\kappa(s)$. By [F1] and [F2] the morphism $X_{s,K}\to\operatorname{Spec}K$ is the base change of the smooth morphism $X_s\to\operatorname{Spec}\kappa(s)$ of step 1.1 along $\operatorname{Spec}K\to\operatorname{Spec}\kappa(s)$, hence smooth by [F3]. The empty case is again vacuous. [F1, F2, F3, step 1.1]

2.2 Clause 3 and accounting. Suppose $f$ is smooth at $x\in X_s$ and let $x$ also denote its image in the fibre. The pointwise standard-chart base-change argument of the stability theorem [F3] shows that base change of a morphism smooth at a point is smooth at every point lying over it, so $X_s\to\operatorname{Spec}\kappa(s)$ is smooth at $x$. The Axiom of Choice [F4] is assumed in the Statement and used exactly through the base-change stability theorem [F3] in steps 1.1 and 2.1. [F1, F3, F4, step 1.1]

$\square$
