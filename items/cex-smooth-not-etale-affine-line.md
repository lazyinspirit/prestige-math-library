---
id: cex-smooth-not-etale-affine-line
kind: counterexample
title: "The affine line is smooth but not etale"
status: draft
origin: pipeline
deps:
  - ex-polynomial-ring-flat-smooth
  - def-etale-morphism-schemes
  - def-relative-dimension-smooth-morphism
  - def-smooth-morphism-schemes
  - thm-differentials-smooth-locally-free
  - thm-etale-equivalent-flat-unramified-fp
  - thm-formally-unramified-differentials-zero
  - def-unramified-morphism-finite-type
  - def-sheaf-relative-differentials
  - ex-affine-n-space-over-arbitrary-base
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Section 29.36 (etale versus smooth of relative dimension zero, tag 02G4)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapter 26 (the affine line is smooth but not etale)"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Let $k$ be a field and let
$$f\colon \mathbf A^1_k=\operatorname{Spec}k[T]\longrightarrow\operatorname{Spec}k$$
be the structure morphism ([[ex-affine-n-space-over-arbitrary-base]]).

1. $f$ is flat and locally of finite presentation, and it is smooth of
   relative dimension $1$ ([[def-smooth-morphism-schemes]],
   [[def-relative-dimension-smooth-morphism]]); this is the case $n=1$ of
   [[ex-polynomial-ring-flat-smooth]].
2. $f$ is \'etale at no point of $\mathbf A^1_k$
   ([[def-etale-morphism-schemes]]): its relative dimension is $1$, not $0$,
   and its sheaf of relative differentials $\Omega_{\mathbf A^1_k/k}$ is
   locally free of rank $1$.
3. Consequently the implication "smooth $\Rightarrow$ \'etale" is false, and
   the relative dimension zero clause in the definition of \'etaleness cannot
   be dropped. The failure is detected both by the relative dimension and by
   unramifiedness: $\Omega_{\mathbf A^1_k/k}\neq0$ at every point.

Assume the Axiom of Choice ([[def-axiom-of-choice]]) for the smoothness
statement and for the rank computation of the differentials.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] For every ring $A$ and $n\ge0$ the polynomial algebra $A[T_1,\dots,T_n]$ is a free $A$-module, hence flat, and the structure morphism $\mathbf A^n_A=\operatorname{Spec}A[T_1,\dots,T_n]\to\operatorname{Spec}A$ is flat, locally of finite presentation and smooth of relative dimension $n$; for $n=0$ it is the identity and \'etale ([[ex-polynomial-ring-flat-smooth]], [[ex-affine-n-space-over-arbitrary-base]]).

[F2] \'Etale at $x$ means smooth at $x$ together with relative dimension $0$ at $x$; for a smooth germ the relative dimension is the well-defined local dimension of the geometric fibres over $x$, and it equals the number of free parameters of a standard smooth chart ([[def-etale-morphism-schemes]], [[def-relative-dimension-smooth-morphism]], [[def-smooth-morphism-schemes]]).

[F3] Assume AC. If $f$ is smooth at $x$, then $\Omega_{X/S}$ is locally free of finite rank near $x$ and its rank at $x$ equals the relative dimension of $f$ at $x$ ([[thm-differentials-smooth-locally-free]], [[def-sheaf-relative-differentials]]).

[F4] Assume AC. For a locally finitely presented morphism, \'etale at $x$ is equivalent to flatness at $x$ together with unramifiedness at $x$; unramifiedness at $x$ is equivalent to the vanishing of $\Omega_{X/S,x}$ ([[thm-etale-equivalent-flat-unramified-fp]], [[def-unramified-morphism-finite-type]], [[thm-formally-unramified-differentials-zero]]).

[F5] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Smoothness of relative dimension one. Take $A=k$ and $n=1$ in [F1]: the algebra $k[T]$ is a free $k$-module (the monomials form a basis) and the structure morphism $f$ is flat, locally of finite presentation and smooth of relative dimension $1$ at every point. This is claim 1. [F1]

2.1 \'Etaleness fails by relative dimension. By [F2] \'etaleness of $f$ at a point $x$ requires relative dimension $0$ at $x$; but by step 1.1 the smooth germ $f$ has relative dimension $1$ at $x$, and by [F2] this integer is well-defined, so $1\neq0$ and $f$ is not \'etale at $x$. As $x\in\mathbf A^1_k$ was arbitrary, $f$ is \'etale at no point. [F2, step 1.1]

2.2 The differentials are locally free of rank one. By [F3] (AC) applied to the smooth morphism $f$, the sheaf $\Omega_{\mathbf A^1_k/k}$ is locally free of finite rank near every point and its rank at a point $x$ equals the relative dimension, namely $1$; in particular $\Omega_{\mathbf A^1_k/k,x}\neq0$ for every $x\in\mathbf A^1_k$. By [F4] (AC), applied at $x$, $f$ is \'etale at $x$ if and only if it is flat at $x$ and unramified at $x$, and unramifiedness at $x$ would force $\Omega_{\mathbf A^1_k/k,x}=0$; since $f$ is flat by step 1.1 and the stalk of the differentials does not vanish, $f$ fails to be unramified and hence to be \'etale at $x$. This corroborates claim 2 and proves claim 3. [F3, F4, step 1.1]

3.1 Choice accounting. The Axiom of Choice [F5] is assumed in the Statement and used exactly through the smoothness of the affine space in [F1] in step 1.1 and the rank computation [F3] with the flat-unramified criterion [F4] in step 2.2; the relative-dimension argument of step 2.1 is choice-free. [F1, F3, F4, F5] $\square$
