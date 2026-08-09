---
id: lem-jones-normal-density-discrete-bound
kind: lemma
title: "Jones's bound: under choice, a closed discrete subspace of a normal space cannot have more subsets than a dense set has subsets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-normal-and-t4-spaces, def-dense-top, def-subspace-topology-top, def-axiom-of-choice, def-cardinal-arithmetic, thm-cardinal-power-set-and-cantor]
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
    - title: "G. Gruenhage, General Topology Course Notes, Jones's lemma"
      url: "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf"
    - title: "Samuel Gomes da Silva, Closed discrete subsets of separable spaces and relative versions of normality, countable paracompactness and property (a)"
      url: "https://dml.cz/bitstream/handle/10338.dmlcz/141614/CommentatMathUnivCarolRetro_52-2011-3_10.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. If $D$ is a closed discrete subspace of a normal space $X$ and $E\subseteq X$ is dense, then there is an injection $\mathcal P(D)\to\mathcal P(E)$. In cardinal notation, $2^{|D|}\le 2^{|E|}$.

## Facts & Assumptions

**Given:** A normal space $X$, a closed discrete $D\subseteq X$, and a dense $E\subseteq X$.

[A1] The Axiom of Choice supplies a choice function for every family of nonempty sets ([[def-axiom-of-choice]]).

[F1] Every subset of a discrete subspace is closed in that subspace; because $D$ is closed in $X$, each subset of $D$ is closed in $X$ ([[def-subspace-topology-top]]).

[F2] Normality separates disjoint closed sets by disjoint open sets, and every nonempty open set meets a dense subset ([[def-normal-and-t4-spaces]], [[def-dense-top]]).

[F3] Under choice, $2^{\kappa}=|\mathcal P(\kappa)|$ for every cardinal $\kappa$ ([[def-cardinal-arithmetic]], [[thm-cardinal-power-set-and-cantor]]).

## Proof

**Proof technique:** direct.

1.1 For every $A\subseteq D$, the sets $A$ and $D\setminus A$ are disjoint closed subsets of $X$. By normality there is an open $U_A$ containing $A$ and an open $V_A$ containing $D\setminus A$ with $U_A\cap V_A=\varnothing$. [F1, F2]

2.1 Apply [A1] to choose one such pair $(U_A,V_A)$ for every $A\subseteq D$, and define $\Phi(A)=U_A\cap E\subseteq E$. [A1, step 1.1]

3.1 If $A\ne B$, take $d\in A\setminus B$ after interchanging them if necessary. Then $d\in U_A\cap V_B$, a nonempty open set meeting $E$; a point of $E\cap U_A\cap V_B$ lies in $\Phi(A)$ and not in $\Phi(B)$. [F2, step 2.1]

4.1 Thus $\Phi$ is injective. By [F3], this is the asserted cardinal inequality. [F3, step 3.1] ∎
