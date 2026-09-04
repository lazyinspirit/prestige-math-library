---
id: lem-sheaf-condition-check-on-basis
kind: lemma
title: "The sheaf condition can be checked on a basis with basis-refinable intersections"
status: draft
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sheaf-on-topological-space, def-topology-basis-subbasis]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-04
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Sheaves on Spaces, Lemmas 30.3 and 30.4"
      url: "https://stacks.math.columbia.edu/download/sheaves.pdf"
    - title: "Ravi Vakil, Foundations of Algebraic Geometry, Class 4"
      url: "https://math.stanford.edu/~vakil/0506-216/216Ajun2807.pdf"
---

## Statement

Let $X$ be a topological space and let $\mathcal B$ be a basis for its topology
such that whenever $B,B' \in \mathcal B$ and $x \in B \cap B'$, there exists
$C \in \mathcal B$ with $x \in C \subseteq B \cap B'$. Let $\mathcal F$ be a
presheaf on $X$. Then $\mathcal F$ is a sheaf if and only if the following
condition holds:

for every open set $U \subseteq X$, every cover $U=\bigcup_{i\in I}B_i$ by
basis elements $B_i \in \mathcal B$, and every family
$s_i \in \mathcal F(B_i)$ such that
$$s_i|_C=s_j|_C$$
for every basis element $C \in \mathcal B$ with $C \subseteq B_i \cap B_j$,
there exists a unique section $s\in\mathcal F(U)$ with $s|_{B_i}=s_i$ for all
$i$.

## Facts & Assumptions

**Given:** A basis $\mathcal B$ as in the statement and a presheaf $\mathcal F$ on $X$.

[L1] A basis means that every open set and every point of it admit a containing basis element inside that open set ([[def-topology-basis-subbasis]]).

[L2] A sheaf is a presheaf with locality and unique gluing on every open cover ([[def-sheaf-on-topological-space]]).

## Proof

**Proof technique:** direct.

1.1 Assume $\mathcal F$ is a sheaf. Let $U=\bigcup_i B_i$ be a basis cover and let $(s_i)$ satisfy the basis-overlap hypothesis. Fix $i,j$. The sets $C\in\mathcal B$ with $C\subseteq B_i\cap B_j$ cover $B_i\cap B_j$ by [L1] and the intersection hypothesis on $\mathcal B$. On each such $C$ the restrictions of $s_i$ and $s_j$ agree, so locality from [L2] gives $s_i|_{B_i\cap B_j}=s_j|_{B_i\cap B_j}$. Gluing in [L2] then produces a unique $s\in\mathcal F(U)$ with $s|_{B_i}=s_i$. [L1, L2]

1.2 Assume the displayed basis condition. Let $U=\bigcup_{\alpha\in A}U_\alpha$ be an arbitrary open cover and let $t_\alpha\in\mathcal F(U_\alpha)$ be compatible on overlaps. For each $x\in U$, choose $\alpha(x)$ with $x\in U_{\alpha(x)}$, and then choose $B_x\in\mathcal B$ with $x\in B_x\subseteq U_{\alpha(x)}$ by [L1]. Put $r_x:=t_{\alpha(x)}|_{B_x}$. [L1, given, choose]

1.3 By the assumed basis condition, there is a unique $s\in\mathcal F(U)$ with $s|_{B_x}=r_x$ for every $x\in U$. [given]

2.1 Let $C\in\mathcal B$ satisfy $C\subseteq B_x\cap B_y$. Then $C\subseteq U_{\alpha(x)}\cap U_{\alpha(y)}$, so compatibility of the original family gives $r_x|_C=t_{\alpha(x)}|_C=t_{\alpha(y)}|_C=r_y|_C$. Therefore the family $(r_x)_{x\in U}$ satisfies the displayed basis condition for the basis cover $U=\bigcup_{x\in U}B_x$. [step 1.2, given]

3.1 Fix $\alpha\in A$. For each $y\in U_\alpha$, choose $C_y\in\mathcal B$ with $$y\in C_y\subseteq B_y\cap U_\alpha$$ by [L1] and the basis-refinement hypothesis. Then the $C_y$ form a basis cover of $U_\alpha$. Since $C_y\subseteq U_{\alpha(y)}\cap U_\alpha$, step 2.1 gives $$r_y|_{C_y}=t_{\alpha(y)}|_{C_y}=t_\alpha|_{C_y}.$$ Because $s|_{C_y}=r_y|_{C_y}$ by step 1.3, the two sections $s|_{U_\alpha}$ and $t_\alpha$ restrict to the same family on the basis cover $\{C_y\}_{y\in U_\alpha}$. By the uniqueness part of the assumed basis condition, $s|_{U_\alpha}=t_\alpha$. Since this holds for every $\alpha$, the arbitrary compatible family glues uniquely, so [L2] implies that $\mathcal F$ is a sheaf. [L1, L2, step 2.1, step 1.3, given, choose] ∎
