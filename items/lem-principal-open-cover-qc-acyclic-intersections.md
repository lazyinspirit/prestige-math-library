---
id: lem-principal-open-cover-qc-acyclic-intersections
kind: lemma
title: "Acyclicity on intersections of a standard affine cover"
status: draft
origin: pipeline
deps:
  - def-axiom-of-choice
  - lem-spectrum-localization-open-immersion
  - lem-distinguished-subset-identities
  - def-quasi-coherent-module-scheme
  - thm-qc-sheaf-affine-higher-cohomology-vanishes
  - def-sheaf-cohomology-derived-global-sections
  - def-affine-scheme-spectrum
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
sources:
  references:
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, Sections 30.2-30.22"
      url: https://stacks.math.columbia.edu/download/coherent.pdf
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), Sections 19.1, 19.6, 19.9, 28.1-28.2"
      url: https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $A$ be a commutative ring, let $X=\operatorname{Spec}A$
([[def-affine-scheme-spectrum]]), let $f_1,\dots,f_r\in A$ generate the unit
ideal, so that the distinguished opens $D(f_1),\dots,D(f_r)$ form a finite
standard cover of $X$, and let $\mathcal F$ be a quasi-coherent
$\mathcal O_X$-module ([[def-quasi-coherent-module-scheme]]). For every
nonempty subset $S\subseteq\{1,\dots,r\}$ put $g_S=\prod_{i\in S}f_i$. Then
$$\bigcap_{i\in S}D(f_i)=D(g_S)\;\cong\;\operatorname{Spec}A_{g_S}$$
as schemes, and
$$H^q\Bigl(\bigcap_{i\in S}D(f_i),\;\mathcal F|_{\bigcap_{i\in S}D(f_i)}\Bigr)=0\qquad\text{for every }q>0,$$
where $H^q$ is sheaf cohomology
([[def-sheaf-cohomology-derived-global-sections]]).

The degenerate cases are included and are read through the same identities:
if $g_S$ is nilpotent then $A_{g_S}=0$ and the intersection is the empty
scheme $\operatorname{Spec}0=\varnothing$, on which the restriction of
$\mathcal F$ is the zero sheaf; and the empty intersection, corresponding to
$S=\varnothing$, is $X=D(1)=\operatorname{Spec}A_1$ itself, again an affine
scheme with a quasi-coherent sheaf on it. The unit-ideal hypothesis is not
used in the proof below; it is retained because the statement is consumed for
standard covers.

## Facts & Assumptions

**Given:** The Axiom of Choice, a commutative ring $A$, elements $f_1,\dots,f_r\in A$, and a
quasi-coherent $\mathcal O_X$-module $\mathcal F$ on $X=\operatorname{Spec}A$.

[F1] For $h\in A$ the morphism induced by $A\to A_h$ identifies
$\operatorname{Spec}(A_h)$ with the open locally ringed subspace $D(h)$ of
$\operatorname{Spec}A$; moreover $D(0)=\varnothing$, $D(1)=\operatorname{Spec}A$
and $D(hk)=D(h)\cap D(k)$ for all $h,k\in A$.
([[lem-spectrum-localization-open-immersion]],
[[lem-distinguished-subset-identities]])

[F2] If $\mathcal F$ is quasi-coherent on a scheme $X$ and $V\subseteq X$ is
open, then the restriction $\mathcal F|_V$ is a quasi-coherent
$\mathcal O_V$-module. ([[def-quasi-coherent-module-scheme]])

[F3] If $X=\operatorname{Spec}B$ is an affine scheme, including the empty
affine scheme and the zero ring, and $\mathcal G$ is a quasi-coherent
$\mathcal O_X$-module, then $H^q(X,\mathcal G)=0$ for every $q>0$.
([[thm-qc-sheaf-affine-higher-cohomology-vanishes]])

[F4] Sheaf cohomology is the right derived functor of global sections: an
isomorphism of ringed spaces $\varphi:Y\to X$ induces an equivalence of
abelian-sheaf categories carrying $\mathcal O_Y$-modules to $\mathcal O_X$-modules
and identifies the global-sections functors, so that
$H^q(Y,\varphi^*\mathcal G)\cong H^q(X,\mathcal G)$ for every $\mathcal O_X$-module
$\mathcal G$; also $H^q=0$ for $q<0$ by convention.
([[def-sheaf-cohomology-derived-global-sections]])

## Proof

**Proof technique:** direct: identify each finite intersection of distinguished opens with a principal distinguished open, transport to the affine scheme $\operatorname{Spec}A_{g_S}$, and apply affine acyclicity.

1.1 Let $S=\{i_1,\dots,i_k\}\subseteq\{1,\dots,r\}$ be nonempty. Iterating the identity $D(h)\cap D(k)=D(hk)$ of [F1] gives $\bigcap_{i\in S}D(f_i)=D(g_S)$ with $g_S=\prod_{i\in S}f_i$, and [F1] applied to $h=g_S$ identifies this open locally ringed subspace with $\operatorname{Spec}A_{g_S}$. [F1]

1.2 Degenerate cases. If $S=\varnothing$ then the empty intersection is $X=D(1)=\operatorname{Spec}A_1$ by [F1]. If $g_S$ is nilpotent for some nonempty $S$, then $A_{g_S}=0$ and $D(g_S)=\varnothing=\operatorname{Spec}0$ by [F1], and the restriction of $\mathcal F$ to the empty scheme is the zero sheaf. [F1]

2.1 Let $S$ be nonempty with intersection $Y=D(g_S)\neq\varnothing$. Then $Y$ is an open subscheme of $X$, so $\mathcal F|_Y$ is a quasi-coherent $\mathcal O_Y$-module by [F2]; under the isomorphism $Y\cong\operatorname{Spec}A_{g_S}$ of step 1.1 it corresponds to a quasi-coherent module $\mathcal G$ on the affine scheme $\operatorname{Spec}A_{g_S}$, and [F4] identifies $H^q(Y,\mathcal F|_Y)\cong H^q(\operatorname{Spec}A_{g_S},\mathcal G)$. By [F3] the right-hand group vanishes for every $q>0$, hence so does the left-hand group. [F2, F3, F4, step 1.1]

2.2 Let $S$ be nonempty with $Y=D(g_S)=\varnothing$. Then $A_{g_S}=0$ by step 1.2, the restriction of $\mathcal F$ to $Y$ is the zero sheaf on the empty ringed space, and $H^q(Y,\mathcal F|_Y)=0$ for every $q>0$: this is the empty affine scheme case of [F3] transported along the isomorphism $Y\cong\operatorname{Spec}0$ of step 1.1, or directly the case of the zero sheaf. [F3, F4, step 1.1, step 1.2]

2.3 For $S=\varnothing$ the empty intersection is $X=\operatorname{Spec}A$ by step 1.2, an affine scheme with the quasi-coherent module $\mathcal F$, so $H^q(X,\mathcal F)=0$ for every $q>0$ directly by [F3]. [F3, step 1.2]

3.1 Combining the cases, for every nonempty $S\subseteq\{1,\dots,r\}$ the intersection $\bigcap_{i\in S}D(f_i)=D(g_S)$ is isomorphic to $\operatorname{Spec}A_{g_S}$ and the restriction of $\mathcal F$ to it has vanishing cohomology in every positive degree. The argument used only that each finite intersection of distinguished opens is a principal distinguished open, hence an affine open subscheme possibly empty; the unit-ideal hypothesis on $f_1,\dots,f_r$ was not needed, and the quasi-coherence of the restrictions was supplied by [F2]. The Axiom of Choice is inherited from [F3] and [F4] and no additional selection is made. [F2, F3, F4, step 1.1, step 1.2, step 2.1, step 2.2, step 2.3] ∎
