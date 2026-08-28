---
id: lem-all-charts-compatible-with-a-smooth-atlas-form-a-smooth-atlas
kind: lemma
title: "All charts compatible with a smooth atlas form a smooth atlas"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-smooth-atlas, def-smoothly-compatible-charts,
       lem-smooth-chart-compatibility-is-symmetric-and-reflexive,
       prop-compatibility-of-smooth-atlases-is-an-equivalence-relation]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Rob van der Vorst, Introduction to differentiable manifolds, §2"
      url: "https://www.few.vu.nl/~vdvorst/notes-2012.pdf"
    - title: "Nigel Hitchin, Differentiable Manifolds, §2.2"
      url: "https://web.archive.org/web/20201111215108id_/https://people.maths.ox.ac.uk/hitchin/files/LectureNotes/Differentiable_manifolds/manifolds2014.pdf"
pipeline_run: null
---

## Statement

Let $\mathcal A$ be a smooth atlas on a topological manifold $M$. Then the set
$\mathcal A'$ of all charts on $M$ that are smoothly compatible with
every chart of $\mathcal A$ is again a smooth atlas on $M$. It contains
$\mathcal A$, and every member of $\mathcal A'$ is by construction compatible
with every chart of $\mathcal A$.

## Facts & Assumptions

**Given:** A smooth atlas $\mathcal A$ on a topological manifold $M$.

[F1] Two charts are smoothly compatible exactly when their domains are disjoint
or both transition maps are smooth; in dimension zero overlapping charts are
declared compatible ([[def-smoothly-compatible-charts]]).

[F2] A smooth atlas is a family of charts on $M$ whose domains cover $M$ and
whose members are pairwise smoothly compatible ([[def-smooth-atlas]]).

[F3] Every chart is smoothly compatible with itself, and smooth compatibility of
charts is symmetric
([[lem-smooth-chart-compatibility-is-symmetric-and-reflexive]]).

[L1] The composite of two smooth maps between open subsets of Euclidean spaces
is smooth ([[prop-compatibility-of-smooth-atlases-is-an-equivalence-relation]]).

## Proof

**Proof technique:** direct.

1.1 Every chart of $\mathcal A$ is compatible with itself by [F3] and with
every other chart of $\mathcal A$ by the pairwise condition in [F2], so every
chart of $\mathcal A$ is compatible with every chart of $\mathcal A$; hence
$\mathcal A\subseteq\mathcal A'$. Since the domains of $\mathcal A$ cover $M$ by
[F2], the domains of $\mathcal A'$ cover $M$. [given, F2, F3]

1.2 Let $(U,\varphi)$ and $(V,\psi)$ be charts compatible with every chart of
$\mathcal A$, and let $p\in U\cap V$. Because $\mathcal A$ covers $M$ by [F2],
choose $(W,\chi)\in\mathcal A$ with $p\in W$. On
$\varphi(U\cap V\cap W)$ the transition factors as
$\psi\circ\varphi^{-1}=(\psi\circ\chi^{-1})\circ(\chi\circ\varphi^{-1})$; the two
factors are smooth because $(U,\varphi)$ and $(V,\psi)$ are each compatible with
$(W,\chi)$, whose overlaps with both are nonempty, so the nonempty-overlap
clause of [F1] supplies all four transitions, and [L1] makes the composite
smooth on $\varphi(U\cap V\cap W)$. [given, F1, F2, L1, choose]

2.1 Every point of $\varphi(U\cap V)$ lies in such a set
$\varphi(U\cap V\cap W)$, and a map between Euclidean open sets that is smooth
on an open neighbourhood of every point is smooth: the iterated coordinate
partial derivatives exist and are continuous near every point, hence on all of
the open set $\varphi(U\cap V)$. Therefore $\psi\circ\varphi^{-1}$ is smooth on
$\varphi(U\cap V)$. Interchanging the roles of $(U,\varphi)$ and $(V,\psi)$ runs
the same argument for $\varphi\circ\psi^{-1}$, again through the two-sided
clause of [F1]. [given, F1, step 1.2]

3.1 By [F1] any two members of $\mathcal A'$ are smoothly compatible, and with
the covering condition of step 1.1 [F2] makes $\mathcal A'$ a smooth atlas; each
member of $\mathcal A'$ is compatible with every chart of $\mathcal A$ by the
way $\mathcal A'$ was defined. [F1, F2, step 1.1, step 2.1] ∎
