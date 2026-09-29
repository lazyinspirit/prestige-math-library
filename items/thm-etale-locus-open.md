---
id: thm-etale-locus-open
kind: theorem
title: "The etale locus is open"
status: draft
origin: pipeline
deps:
  - def-etale-locus-morphism
  - thm-jacobian-criterion-smooth-morphism
  - def-etale-morphism-schemes
  - def-relative-dimension-smooth-morphism
  - def-smooth-morphism-schemes
  - def-ag-standard-smooth-algebra
  - def-locally-finite-presentation-morphism
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "The Stacks Project, Morphisms of Schemes, Lemma 29.36.6 and Section 29.36 (tag 02G4)"
      url: https://stacks.math.columbia.edu/download/morphisms.pdf
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022 public draft, Chapter 26 (the etale locus is open)"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $f\colon X\to S$ be
a morphism locally of finite presentation
([[def-locally-finite-presentation-morphism]]) and let
$$\operatorname{Et}(f)=\{x\in X: f\text{ is \'etale at }x\}$$
be its \'etale locus ([[def-etale-locus-morphism]]). Then
$\operatorname{Et}(f)$ is open in $X$, and the restriction of $f$ to
$\operatorname{Et}(f)$ is \'etale
([[def-etale-morphism-schemes]]). In particular \'etaleness is an open
condition on the source, and if $X=\varnothing$ the locus is empty.

## Facts & Assumptions


**Given:** The data and hypotheses displayed in the Statement, with the conventions fixed there.

[F1] Assume AC. If $f$ is locally of finite presentation, then $f$ is smooth at $x$ if and only if there are affine charts $U=\operatorname{Spec}C$ of $x$ over $V=\operatorname{Spec}A$ of $f(x)$ and a presentation of $C_h$, for some $h\in C\smallsetminus\mathfrak q$ with $\mathfrak q$ the prime of $x$, as $C_h\cong(A[t_1,\dots,t_m]/(f_1,\dots,f_r))_g$ in which some $r\times r$ Jacobian minor has image a unit of $C_h$; such a chart is smooth over $A$ with geometrically regular fibres and exhibits relative dimension $m-r$ at $x$ ([[thm-jacobian-criterion-smooth-morphism]], [[def-ag-standard-smooth-algebra]]).

[F2] \'Etale at $x$ means smooth at $x$ together with relative dimension $0$ at $x$; for a smooth germ the relative dimension is a well-defined integer, and a morphism is \'etale exactly when it is smooth of relative dimension $0$ at every point ([[def-etale-morphism-schemes]], [[def-relative-dimension-smooth-morphism]], [[def-smooth-morphism-schemes]]).

[F3] The \'etale locus $\operatorname{Et}(f)$ is the subset of points at which the conditions of \'etaleness hold; membership depends only on the germ, and the restriction of $f$ to an open subscheme $U$ has locus $\operatorname{Et}(f|_U)=\operatorname{Et}(f)\cap U$ ([[def-etale-locus-morphism]]).

[F4] The Axiom of Choice states that every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Chart around an \'etale point. Let $x\in\operatorname{Et}(f)$, so $f$ is \'etale at $x$ and hence smooth at $x$ of relative dimension $0$ by [F2]; put $s=f(x)$. Since $f$ is locally of finite presentation, the Jacobian criterion [F1] (AC) provides affine charts $U=\operatorname{Spec}C$ of $x$ and $V=\operatorname{Spec}A$ of $s$ with $f(U)\subseteq V$, an element $h\in C\smallsetminus\mathfrak q$ with $\mathfrak q$ the prime of $x$, and a presentation $C_h\cong(A[t_1,\dots,t_m]/(f_1,\dots,f_r))_g$ whose $r\times r$ Jacobian minor is a unit of $C_h$; the same criterion says this chart exhibits relative dimension $m-r$ at $x$. [F1, F2]

2.1 The chart has no free parameters. By [F2] the relative dimension of the smooth germ $f$ at $x$ is the well-defined integer $0$, and by step 1.1 the chart exhibits the relative dimension $m-r$ at $x$; hence $m-r=0$, so $m=r$. [F2, step 1.1]

3.1 The chart is \'etale throughout a neighbourhood. Since the minor is a unit of $C_h$ and $m=r$, the presentation of step 1.1 exhibits an invertible $m\times m$ Jacobian minor, so for every point $y\in D(h)\subseteq U$ the same presentation and the same charts $U,V$ satisfy the hypothesis of the Jacobian criterion [F1] at $y$ (the element $h$ does not lie in the prime of $y$ because $y\in D(h)$). The criterion therefore makes $f$ smooth at $y$ with relative dimension $m-r=0$, so $f$ is \'etale at $y$ by [F2]. Hence $D(h)\subseteq\operatorname{Et}(f)$ is an open neighbourhood of $x$ in $X$. [F1, F2, step 2.1]

4.1 Openness and the restricted morphism. Every point $x$ of $\operatorname{Et}(f)$ has, by steps 1.1, 2.1 and 3.1, an open neighbourhood $D(h)$ contained in $\operatorname{Et}(f)$; hence $\operatorname{Et}(f)$ is open in $X$. By [F3] the restriction of $f$ to the open subscheme $\operatorname{Et}(f)$ has étale locus $\operatorname{Et}(f)\cap\operatorname{Et}(f)=\operatorname{Et}(f)$, which is its whole source, so the restriction is \'etale by [F2]. For $X=\varnothing$ the locus is empty by [F3], which is open. [F2, F3, step 3.1]

5.1 Choice accounting. The Axiom of Choice [F4] is assumed in the Statement and used exactly through the Jacobian criterion [F1] in steps 1.1 and 3.1; the locus description [F3] and the relative-dimension conventions [F2] are choice-free. [F1, F2, F4] $\square$
