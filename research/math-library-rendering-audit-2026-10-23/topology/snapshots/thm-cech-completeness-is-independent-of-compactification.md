---
id: thm-cech-completeness-is-independent-of-compactification
kind: theorem
title: "Under the ultrafilter lemma and Dependent Choice, a Tychonoff space is $G_\\delta$ in some Hausdorff compactification exactly when it is $G_\\delta$ in every one"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-cech-complete-space, lem-maps-of-compactifications-preserve-remainders, def-stone-cech-compactification, cor-stone-cech-compactification-is-unique-over-x]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "David Marker, Descriptive Set Theory, §§1–2"
      url: "https://www.math.uic.edu/~marker/math512/dst.pdf"
    - title: "Michael Kunzinger, General Topology, §§11.3–11.4"
      url: "https://www.mat.univie.ac.at/~mike/teaching/ss16/general_topology.pdf"
    - title: "MFF General Topology course summary, §4.3"
      url: "https://www.karlin.mff.cuni.cz/~cuth/doc/MFF/OT/ot_ENG.pdf"
    - title: "Jesse Peterson, Real Analysis, §§3.6–3.7"
      url: "https://math.vanderbilt.edu/peters10/teaching/fall2016/RealAnalysis.pdf"
pipeline_run: null
---

## Statement

Assume the ultrafilter lemma and Dependent Choice, the hypotheses under which the library establishes the Stone-Čech compactification and its universal property. A Tychonoff space is a $G_\delta$ subset of some Hausdorff compactification if and only if it is a $G_\delta$ subset of every Hausdorff compactification.

## Facts & Assumptions

**Given:** The objects, hypotheses, and choice principles stated above.

[F1] A Tychonoff space $X$ is **Čech-complete** when there is a Hausdorff compactification $(K,i)$ of $X$ (def-compactification-of-a-tychonoff-space) for which $i[X]$ is a $G_\delta$ subset of $K$ (def-g-delta-and-f-sigma-in-a-topological-space). The definition asks for one compactification; thm-cech-completeness-is-independent-of-compactification proves the equivalent every-compactification form. ([[def-cech-complete-space]]).

[F2] Let $X$ be dense in Hausdorff compactifications $K$ and $L$, and let $f:K\to L$ be continuous with $f|_X=\operatorname{id}_X$. Then $f$ is surjective and $f[K\setminus X]=L\setminus X$. ([[lem-maps-of-compactifications-preserve-remainders]]).

[F3] A **Stone–Čech compactification** of $X$ is a Hausdorff compactification $(B,i)$ (def-compactification-of-a-tychonoff-space) such that for every compact Hausdorff space $K$ and continuous map $f:X\to K$ (def-continuous-map-top), there is a unique continuous $\bar f:B\to K$ with $\bar f\circ i=f$. The universal property, rather than a particular construction, is the definition. ([[def-stone-cech-compactification]]).

[F4] Under the hypotheses of thm-stone-cech-evaluation-closure-universal-property, two Stone–Čech compactifications $(B,i)$ and $(B',i')$ of $X$ are uniquely homeomorphic by a map $u:B\to B'$ satisfying $u\circ i=i'$. ([[cor-stone-cech-compactification-is-unique-over-x]]).

## Proof

**Proof technique:** direct.

1.1 For the empty space the empty compactification witnesses both quantifiers. [given, F1, F3, F4]

2.1 Otherwise use the Stone–Čech compactification as a common dominating compactification. [step 1.1, F3, F1, F4]

3.1 The remainder-map lemma transfers the compact $F_\sigma$ remainder condition along the canonical maps, and complements convert it back to the $G_\delta$ condition. [step 2.1, F1, F2, F3]

4.1 The preceding construction and implications establish the assertion. [step 3.1] ∎

