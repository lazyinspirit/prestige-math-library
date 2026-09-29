---
id: thm-support-finite-type-qc-closed
kind: theorem
title: Support of a finite-type quasi-coherent sheaf is closed
status: draft
origin: pipeline
deps:
  - def-support-module-sheaf
  - def-finite-type-finite-presentation-module-sheaf
  - lem-associated-sheaf-stalk-localization
  - thm-support-and-annihilator-of-a-finite-module
  - def-topological-space
  - def-axiom-of-choice
justified_by: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
    - title: "The Stacks Project, Cohomology of Schemes §30.9"
      url: "https://stacks.math.columbia.edu/tag/01XY"
    - title: "The Stacks Project, Properties of Schemes, §§28.20, 28.26"
      url: "https://stacks.math.columbia.edu/download/properties.pdf"
pipeline_run: frontier-36-complete
---

## Statement

Assume the Axiom of Choice, inherited from the construction of associated
sheaves and from the stalk identification used below. Let $X$ be a scheme and
let $\mathcal F$ be a quasi-coherent $\mathcal O_X$-module of finite type
([[def-finite-type-finite-presentation-module-sheaf]]), with support
$\operatorname{Supp}(\mathcal F)=\{x\in X:\mathcal F_x\neq0\}$
([[def-support-module-sheaf]]).

Then $\operatorname{Supp}(\mathcal F)$ is a closed subset of $X$. Moreover, if
$U=\operatorname{Spec}A$ is an affine open with $\mathcal F|_U\cong\widetilde M$
for a finitely generated $A$-module $M$, then
$$\operatorname{Supp}(\mathcal F)\cap U=\{\mathfrak p\in\operatorname{Spec}A:\operatorname{Ann}_A(M)\subseteq\mathfrak p\}=V(\operatorname{Ann}_A(M)),$$
the zero set of the annihilator ideal of $M$; in particular
$\operatorname{Supp}(\mathcal F)\cap U$ is closed in $U$, and
$\mathcal F|_U=0$ exactly when $M=0$.

## Facts & Assumptions

**Given:** The Axiom of Choice; a scheme $X$; a finite-type quasi-coherent
$\mathcal O_X$-module $\mathcal F$.

[F1] The support is $\operatorname{Supp}(\mathcal F)=\{x:\mathcal F_x\neq0\}$,
and for an open $U\subseteq X$ one has
$\operatorname{Supp}(\mathcal F|_U)=\operatorname{Supp}(\mathcal F)\cap U$
([[def-support-module-sheaf]]).

[F2] For an affine scheme $\operatorname{Spec}A$ with associated sheaf
$\widetilde M$ one has $(\widetilde M)_{\mathfrak p}\cong M_{\mathfrak p}$ for
every prime $\mathfrak p$ ([[lem-associated-sheaf-stalk-localization]]).

[F3] If $M$ is a finitely generated $A$-module, then
$\operatorname{Supp}_A(M)=\{\mathfrak p:\operatorname{Ann}_A(M)\subseteq\mathfrak p\}$
([[thm-support-and-annihilator-of-a-finite-module]]).

[F4] $\mathcal F$ is of finite type: every point of $X$ has an affine open
neighbourhood $U=\operatorname{Spec}A$ with $\mathcal F|_U\cong\widetilde M$
for a finitely generated $A$-module $M$
([[def-finite-type-finite-presentation-module-sheaf]]).

[F5] A subset $Z\subseteq X$ is closed exactly when its complement is open, and
openness of a subset can be checked on the members of any open cover: if every
$W\cap U_i$ is open in $U_i$ for a cover $X=\bigcup_iU_i$ by open sets, then
$W$ is open in $X$ ([[def-topological-space]]).

[F6] Axiom of Choice: every family of nonempty sets has a choice function
([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct; compute the support on affine charts and use that
closedness can be checked on an open cover.

1.1 Let $U=\operatorname{Spec}A$ be an affine open with $\mathcal F|_U\cong\widetilde M$ for a finitely generated $A$-module $M$; then $\operatorname{Supp}(\mathcal F)\cap U=\operatorname{Supp}(\mathcal F|_U)$ by [F1] equals $\{\mathfrak p:(\widetilde M)_{\mathfrak p}\neq0\}$, which by [F2] is $\{\mathfrak p:M_{\mathfrak p}\neq0\}=\operatorname{Supp}_A(M)$, and by [F3] this is $\{\mathfrak p:\operatorname{Ann}_A(M)\subseteq\mathfrak p\}=V(\operatorname{Ann}_A(M))$, the zero set of an ideal and hence closed in $U=\operatorname{Spec}A$. [F1, F2, F3]

1.2 Let $\{U_i\}_{i\in I}$ be the family of all affine open subsets $U_i$ of $X$ with $\mathcal F|_{U_i}\cong\widetilde{M_i}$ for a finitely generated module $M_i$; by [F4] every point of $X$ lies in such a chart, so this family covers $X$, and it is the family of all such charts, determined without selecting anything. [F4, given]

2.1 For every chart $U$ of the cover of step 1.2 the intersection $\operatorname{Supp}(\mathcal F)\cap U$ is closed in $U$ by step 1.1, so its complement $U\setminus\operatorname{Supp}(\mathcal F)$ is open in $U$, and since the $U$ cover $X$ the complement $$X\setminus\operatorname{Supp}(\mathcal F)=\bigcup_{U}\bigl(U\setminus\operatorname{Supp}(\mathcal F)\bigr)$$ is open in $X$ by [F5]; hence $\operatorname{Supp}(\mathcal F)$ is closed in $X$, as claimed. [F5, step 1.1, step 1.2]

3.1 The identification of the affine support with $V(\operatorname{Ann}_A(M))$ is step 1.1, and the Axiom of Choice is used only through [F2], inherited from the associated-sheaf construction, and through the supplier [F3]; the cover of step 1.2 is the family of all admissible charts, so no selection occurs there. [F2, F3, F6, step 1.1, step 2.1] ∎
