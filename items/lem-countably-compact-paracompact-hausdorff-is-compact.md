---
id: lem-countably-compact-paracompact-hausdorff-is-compact
kind: lemma
title: "Assuming countable choice, every countably compact paracompact Hausdorff space is compact"
status: published
origin: session
deps: [lem-locally-finite-unions-and-closures, def-compactness-variants, def-paracompact-space, def-hausdorff-space, def-countable-choice, def-countable, thm-countable-union-of-countable, lem-finite-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Dartmouth Point-Set Topology, Lecture 25"
      url: "https://math.dartmouth.edu/~rmaguire/teaching/dartmouth_math_054_2022_summer/lectures/2022_summer_point_set_topology_lecture_25.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Countable Choice. Every countably compact paracompact
Hausdorff space is compact.

## Facts & Assumptions

**Given:** Countable choice and a countably compact paracompact Hausdorff space $X$.

[A1] Countable choice supplies a choice function for every sequence of nonempty sets ([[def-countable-choice]]).

[F1] Countable compactness tests at most countable open covers, while compactness tests all open covers ([[def-compactness-variants]]).

[F2] Paracompactness supplies a locally finite open refining cover ([[def-paracompact-space]]).

[F3] Hausdorff spaces separate distinct points by disjoint open neighbourhoods ([[def-hausdorff-space]]).

[L1] A locally finite union of closed sets is closed ([[lem-locally-finite-unions-and-closures]]).

[L2] Under countable choice, a countable union of at most countable sets is at most countable ([[thm-countable-union-of-countable]], [[def-countable]]).

[L3] Choice from a finite listed family is a theorem of ZF ([[lem-finite-choice]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal U$ be an arbitrary open cover, and take a locally finite open refining cover $\mathcal V$ by [F2]. [F2, choose]

2.1 Suppose $\mathcal V$ were infinite. For every $n$ the family of $(n+1)$-element subsets of $\mathcal V$ is nonempty; [A1] chooses one $E_n$. Then $E=\bigcup_nE_n$ is at most countable by [L2] and infinite because it has finite subsets of arbitrarily large size. Hence, by the definition of at-most-countable, $E$ is countably infinite; enumerate its distinct members as $(V_n)_{n\in\mathbb N}$. [A1, L2, step 1.1, construct]

3.1 By [A1] choose $d_n\in V_n$ for every $n$. The range $D=\{d_n:n\in\mathbb N\}$ is infinite: if it were finite, local finiteness would make only finitely many distinct $V_n$ meet $D$, but every $V_n$ contains $d_n\in D$. Moreover the singleton family $\{\{d\}:d\in D\}$ is locally finite, since a neighbourhood meeting only finitely many $V_n$ can contain only finitely many points $d\in D$. [A1, F2, step 2.1, construct]

4.1 Hausdorffness makes points closed, so [L1] makes $D$ closed. For each $d\in D$, local finiteness gives a neighbourhood meeting only finitely many points of $D$; pass to an open subneighbourhood and remove those finitely many other closed points. Using [A1] along an enumeration of $D$ yields open sets $O_d$ with $O_d\cap D=\{d\}$. [A1, F3, L1, step 3.1, construct]

5.1 The open set $X\setminus D$, together with the at most countable family $\{O_d:d\in D\}$, is an open cover with no finite subcover, contradicting countable compactness in [F1]. [F1, step 3.1, step 4.1]

6.1 Hence $\mathcal V$ is finite. By [L3], select for each member of this finite refining family one containing member of $\mathcal U$; the selected members form a finite subcover of $\mathcal U$. [step 1.1, step 5.1, L3]

7.1 Since $\mathcal U$ was arbitrary, [F1] proves that $X$ is compact. [F1, step 6.1] ∎

## Remarks

Countable choice is spent twice: first to extract a countably infinite subfamily from a putatively infinite locally finite cover, and then to choose one point from each member of that subfamily. The final selection is only finite choice, which is available in ZF.
