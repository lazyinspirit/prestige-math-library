---
id: thm-cohomological-dimension-noetherian-scheme
kind: theorem
title: Dimension bound for quasi-coherent cohomology on a Noetherian scheme
status: draft
origin: pipeline
deps:
  - def-locally-noetherian-and-noetherian-scheme
  - def-noetherian-topological-space
  - thm-noetherian-ring-has-noetherian-spectrum
  - lem-noetherian-subspaces-and-compact-opens
  - def-dimension-noetherian-topological-space
  - thm-noetherian-topological-space-dimension-vanishing
  - def-sheaf-cohomology-derived-global-sections
  - def-quasi-coherent-module-scheme
  - def-module-on-ringed-space
  - def-axiom-of-choice
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
    - title: "The Stacks Project, Cohomology of Schemes, Chapter 30, \u00a7\u00a730.2\u201330.22"
      url: "https://stacks.math.columbia.edu/download/coherent.pdf"
    - title: "Ravi Vakil, The Rising Sea (29 August 2022), \u00a7\u00a719.1, 19.6, 19.9, 28.1\u201328.2"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $X$ be a separated
Noetherian scheme ([[def-locally-noetherian-and-noetherian-scheme]]) whose
underlying topological space is Noetherian of dimension $\dim X\le d$ for an
integer $d\ge0$ ([[def-noetherian-topological-space]],
[[def-dimension-noetherian-topological-space]]); this is the finite Krull
dimension $d$ of the design's finite-dimensional setting, the chain dimension
of the underlying space being the dimension used throughout this page. Then
$$H^q(X,\mathcal F)=0$$
for every quasi-coherent $\mathcal O_X$-module $\mathcal F$
([[def-quasi-coherent-module-scheme]]) and every integer $q>d$, where
$H^q$ is sheaf cohomology ([[def-sheaf-cohomology-derived-global-sections]])
applied to the underlying sheaf of abelian groups of $\mathcal F$
([[def-module-on-ringed-space]]). The empty scheme has no positive
cohomology. Separation is retained from the design although it is not used:
the topological vanishing theorem quoted below needs only a Noetherian space
of dimension at most $d$.

## Facts & Assumptions
**Given:** The Axiom of Choice ([[def-axiom-of-choice]]) and a separated Noetherian scheme $X$ whose underlying space is Noetherian with $\dim X\le d$, $d\ge0$.

[F1] A scheme is Noetherian when it is locally Noetherian and quasi-compact, equivalently when it has a finite affine open cover by spectra of Noetherian rings; such a cover $X=U_1\cup\cdots\cup U_n$ with $U_i$ affine and $\Gamma(U_i,\mathcal O_X)$ Noetherian may therefore be chosen. ([[def-locally-noetherian-and-noetherian-scheme]])

[F2] Under AC, $\operatorname{Spec}(R)$ is a Noetherian topological space for every Noetherian commutative ring $R$. ([[thm-noetherian-ring-has-noetherian-spectrum]])

[F3] Under AC, every subspace of a Noetherian topological space is Noetherian; in particular the open subspaces $U_i$ occurring in a cover of $X$ are Noetherian as topological spaces. ([[def-noetherian-topological-space]], [[lem-noetherian-subspaces-and-compact-opens]])

[F4] For a Noetherian topological space $T$ the dimension $\dim T$ is the supremum of the lengths of strict chains of nonempty irreducible closed subsets, $\dim\varnothing=-\infty$, and $\dim T$ may be infinite. ([[def-dimension-noetherian-topological-space]])

[F5] Under AC, if $T$ is a Noetherian topological space with $\dim T\le d$ for an integer $d\ge0$, then $H^q(T,\mathcal G)=0$ for every sheaf of abelian groups $\mathcal G$ on $T$ and every integer $q>d$. ([[thm-noetherian-topological-space-dimension-vanishing]])

[F6] A quasi-coherent $\mathcal O_X$-module is in particular an $\mathcal O_X$-module, hence a sheaf of abelian groups on $X$ with $\mathcal O_X(U)$-module structures compatible with restriction; a morphism of $\mathcal O_X$-modules is in particular a morphism of abelian sheaves. ([[def-quasi-coherent-module-scheme]], [[def-module-on-ringed-space]])

[F7] Under AC the sheaf cohomology groups $H^q(X,\mathcal G)$ of an abelian sheaf $\mathcal G$ on a topological space $X$ are defined as the right derived objects of global sections relative to a fixed supplied injective resolution datum, and $H^q(X,\mathcal G)=0$ for $q<0$. ([[def-sheaf-cohomology-derived-global-sections]])



## Proof

**Proof technique:** direct: pass from the finite affine cover of the Noetherian scheme to Noetherianness of the underlying space, then apply the published topological vanishing theorem to the underlying abelian sheaf of the quasi-coherent module; the empty scheme is covered by the $\dim=-\infty$ convention.

1.1 By [F1] there is a finite affine open cover $X=U_1\cup\cdots\cup U_n$ with each $R_i:=\Gamma(U_i,\mathcal O_X)$ a Noetherian ring, where $n=0$ occurs exactly when $X=\varnothing$; the underlying space of the affine scheme $U_i$ is $\operatorname{Spec}(R_i)$ with its Zariski topology. [F1]

1.2 The Axiom of Choice is available as a hypothesis and is consumed exactly in the two quoted results that require it, the Noetherian-spectrum theorem [F2] and the topological vanishing theorem [F5]. [F2, F5, given]

2.1 For each $i$, $\operatorname{Spec}(R_i)$ is Noetherian by [F2], and $U_i$ is an open subspace of $X$ whose topology is that of $\operatorname{Spec}(R_i)$, so each $U_i$ is a Noetherian topological space. [F2, F3, step 1.1]

3.1 If $n\ge1$ the space $X$ is Noetherian: for an ascending chain $V_0\subseteq V_1\subseteq\cdots$ of open subsets of $X$ the restrictions $V_j\cap U_i$ form, for each fixed $i$, an ascending chain of open subsets of the Noetherian space $U_i$, hence stabilize for $j\ge j_i$; with $j_0:=\max_i j_i$, which exists because the cover is finite, one has $V_j\cap U_i=V_{j_0}\cap U_i$ for all $j\ge j_0$ and all $i$, and since the $U_i$ cover $X$ this gives $V_j=V_{j_0}$ for all $j\ge j_0$. Thus every ascending chain of opens of $X$ stabilizes and the underlying space of $X$ is Noetherian; it is of dimension $\dim X\le d$ by hypothesis. [F4, step 1.1, step 2.1, construct]

4.1 If $n=0$ then $X=\varnothing$ by step 1.1, and [F4] gives $\dim X=-\infty\le d$; in either case $X$ is a Noetherian topological space of dimension at most $d$, so [F5] applies and yields $H^q(X,\mathcal G)=0$ for every sheaf of abelian groups $\mathcal G$ on $X$ and every integer $q>d$. [F4, F5, step 3.1, given]

5.1 Let $\mathcal F$ be a quasi-coherent $\mathcal O_X$-module. By [F6] its underlying sheaf of abelian groups is an abelian sheaf on $X$, so step 4.1 applied to that sheaf gives $H^q(X,\mathcal F)=0$ for every $q>d$, the symbol $H^q(X,\mathcal F)$ denoting the group of [F7] for the underlying abelian sheaf. In particular every quasi-coherent $\mathcal O_X$-module has vanishing cohomology above degree $d$, and for $X=\varnothing$ there is no positive-degree cohomology at all in the sense that every abelian sheaf on $X$ has zero groups in every positive degree, as follows from step 4.1 with any $d\ge0$. [F6, F7, step 4.1] ∎
