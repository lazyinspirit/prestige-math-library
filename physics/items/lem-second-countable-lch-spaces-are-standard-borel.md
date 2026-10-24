---
id: lem-second-countable-lch-spaces-are-standard-borel
kind: lemma
title: Second-countable locally compact Hausdorff spaces are Polish, and homogeneous quotients are standard Borel
status: published
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
local_addition: true
proof_strategy: direct
deps:
  - def-second-countable-space
  - def-locally-compact-space
  - def-topological-space
  - def-polish-space
  - def-standard-borel-space
  - def-compactness-variants
  - lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure
  - cor-urysohn-metrization
  - cor-locally-compact-hausdorff-spaces-are-cech-complete
  - cor-metrizable-cech-complete-iff-completely-metrizable
  - prop-polish-space-countability-conventions-agree
  - lem-closed-subgroup-quotient-averaging-and-compact-lifts
  - def-coset
  - def-quotient-topology
  - def-axiom-of-choice
  - def-topological-group
  - thm-choice-implies-dependent-implies-countable-choice
  - def-group-action
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "G. B. Folland, A Course in Abstract Harmonic Analysis, Chapter 2 (locally compact groups and homogeneous spaces, Polish structure)"
      url: "https://www.math.tamu.edu/~folland/"
    - title: "G. Misra, E. K. Narayanan and C. Varughese, Mackey Imprimitivity and commuting tuples of homogeneous normal operators, arXiv:2402.15737"
      url: "https://arxiv.org/pdf/2402.15737"
---

## Statement

Assume AC. Every second-countable locally compact Hausdorff space is Polish,
hence standard Borel. Consequently, if $G$ is a second-countable locally
compact Hausdorff topological group and $H\le G$ is a closed subgroup, then
the homogeneous space $G/H$ with its quotient topology is Polish and the
quotient Borel structure together with the left action
$G\times G/H\to G/H$ is a standard Borel $G$-space with Borel action.

## Facts & Assumptions

**Given:** AC, a second-countable LCH space $X$; later a second-countable LCH group $G$ and a closed subgroup $H\le G$.

[F1] For a locally compact Hausdorff space $X$: every point and open neighbourhood admit an open $V$ with $x\in V\subseteq\overline V\subseteq U$ and $\overline V$ compact; the open sets with compact closure form a base of $X$; and $X$ is regular ([[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]], [[def-compactness-variants]], [[def-locally-compact-space]]).

[F2] AC implies DC and DC implies Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]]); AC implies the ultrafilter lemma, as recorded by the locally proved upper bound in the choice ledger.

[F3] Every regular $T_1$ second-countable space is metrizable ([[cor-urysohn-metrization]]); in particular so is $X$ ([[def-second-countable-space]], [[def-topological-space]]).

[F4] Every locally compact Hausdorff space is Čech-complete ([[cor-locally-compact-hausdorff-spaces-are-cech-complete]]), and a metrizable space is Čech-complete if and only if it is completely metrizable ([[cor-metrizable-cech-complete-iff-completely-metrizable]]).

[F5] For a completely metrizable space, separability is equivalent to second countability; a Polish space is a separable completely metrizable space, and a standard Borel space is a measurable space Borel isomorphic to a Polish space ([[prop-polish-space-countability-conventions-agree]], [[def-polish-space]], [[def-standard-borel-space]]).

[F6] If $H$ is closed in an LCH group $G$, then $G/H$ with the quotient topology is locally compact Hausdorff and the quotient map $p:G\to G/H$ is open; every compact subset of $G/H$ lies in $p(K)$ for a compact $K\subseteq G$ ([[lem-closed-subgroup-quotient-averaging-and-compact-lifts]], [[def-coset]], [[def-quotient-topology]], [[def-topological-group]]).

[F7] Multiplication $G\times G\to G$ is continuous, and the left action of a group on a quotient by a subgroup is induced by it ([[def-topological-group]], [[def-group-action]], [[def-coset]]).

## Proof

**Proof technique:** direct.

**Given:** AC; a second-countable LCH space $X$, later a second-countable LCH group $G$ with closed subgroup $H$.

1.1 Let $\mathcal B$ be a countable base of $X$ and let $\mathcal B_{\mathrm{c}}$ be the members of $\mathcal B$ whose closure is compact. This is a base: given $x$ and an open $U\ni x$, [F1] yields an open $W$ with $x\in W\subseteq\overline W\subseteq U$ and $\overline W$ compact, and then some $B\in\mathcal B$ satisfies $x\in B\subseteq W$, so $\overline B\subseteq\overline W$ is compact and $B\in\mathcal B_{\mathrm{c}}$. Hence every point of $X$ lies in a member of $\mathcal B_{\mathrm{c}}$, whose closure is compact, and the closures of the countably many members of $\mathcal B_{\mathrm{c}}$ cover $X$; thus $X$ is a countable union of compact sets. [F1]

1.2 $X$ is regular by [F1] and $T_1$ because it is Hausdorff, so with its countable base it is metrizable by [F3]; fix a compatible metric $d$. [F1, F3]

2.1 $X$ is Čech-complete by [F4], and being metrizable it is completely metrizable by the equivalence in [F4]; the choice hypotheses of [F4] are DC and the ultrafilter lemma with AC, which hold by [F2] under the standing AC. Since $X$ is second countable, [F5] makes it Polish, and then standard Borel by [F5]. This proves the first assertion. [step 1.2, F2, F4, F5]

3.1 Now let $G$ be a second-countable LCH group and $H\le G$ closed. By [F6] the quotient $G/H$ is locally compact Hausdorff and $p$ is open, so the images $p(B)$ of the members of a countable base $B$ of $G$ form a countable family of open sets; it is a base of $G/H$ because for $x\in G/H$ and an open $U\ni x$ the preimage $p^{-1}(U)$ is open and contains a basic $B$ through some point of the fibre, whence $x\in p(B)\subseteq U$. Thus $G/H$ is second-countable LCH, and [step 2.1] applied to $G/H$ shows that $G/H$ is Polish and its Borel structure is standard Borel. [step 2.1, F6]

4.1 The left action $a:G\times G/H\to G/H$, $a(g,xH)=gxH$, is continuous: the composite $(g,x)\mapsto p(gx)$ is continuous on $G\times G$ by [F7], it factors through the surjective open map $\operatorname{id}\times p:G\times G\to G\times G/H$ (because $xH=x'H$ implies $gxH=gx'H$), and a continuous open surjection is a quotient map, so $a$ is continuous; in particular $a$ is Borel for the product of the Borel structures. [step 3.1, F7]

5.1 Combining the two parts: every second-countable LCH space is Polish and standard Borel, and for a second-countable LCH group $G$ with closed subgroup $H$ the homogeneous space $G/H$ is Polish with standard Borel structure and the left action is continuous and hence Borel. The empty space is Polish and standard Borel by the same definitions, consistently with the vacuous case of the first assertion. [step 2.1, step 3.1, step 4.1] ∎ 