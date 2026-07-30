---
id: lem-finite-star-refinement-for-compact-hausdorff-spaces
kind: lemma
title: "Every open cover of a compact Hausdorff space has a finite open star-refinement"
status: published
origin: session
deps: [thm-a-compact-hausdorff-space-is-regular-and-normal, def-compact-space, def-hausdorff-space, def-finite-cardinality, lem-finite-choice, def-interior-closure-boundary-top]
aliases: []
landmark: false
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references: [{title: "J. Wodzicki, Uniform Structure", url: "https://math.berkeley.edu/~wodzicki/H104.F13/UniformStructure-alt.pdf"}]
pipeline_run: null
---

## Statement

Every open cover of a compact Hausdorff space has a finite open star-refinement.

## Facts & Assumptions

**Given:** A compact Hausdorff space $X$ and an open cover $\mathcal U$.

[L1] A compact Hausdorff space is regular and normal ([[thm-a-compact-hausdorff-space-is-regular-and-normal]]).

[L2] Compactness supplies finite subcovers ([[def-compact-space]]).

[L3] A finite family is indexed by a natural number ([[def-finite-cardinality]]).

[L4] A finite family of nonempty sets admits simultaneous choices ([[lem-finite-choice]]), and closure is the least closed superset ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** constructive.

1.1 Let $\mathcal V$ be the family of all open sets $V$ such that $\overline V\subseteq U$ for some $U\in\mathcal U$. This family covers $X$. Indeed, for $x\in U\in\mathcal U$, normality separates the closed sets $\{x\}$ and $X\setminus U$ by disjoint open sets; the open set containing $x$ has closure contained in $U$. This definition uses no choices indexed by $X$. [L1, L4, construct]

1.2 We record a finite shrinking construction. Given a finite open cover $A_0,\ldots,A_{m-1}$, recursively put $$ F_i=X\setminus\left(\bigcup_{j<i}B_j\cup\bigcup_{j>i}A_j\right). $$ The earlier covering clauses imply $F_i\subseteq A_i$. Normality separates $F_i$ from $X\setminus A_i$, giving an open $B_i$ with $F_i\subseteq B_i\subseteq\overline{B_i}\subseteq A_i$. At the last stage the $B_i$ cover $X$. Thus every finite open cover has an open shrinking whose closures remain in the original members. [L1, L3, L4, construct]

2.1 Compactness gives a finite subcover $V_0,\ldots,V_{n-1}$ of $\mathcal V$. Finite choice supplies $U_i\in\mathcal U$ with $\overline{V_i}\subseteq U_i$ for each $i<n$. [step 1.1, L2, L4]

2.2 From a finite cover $A_i$ and an open shrinking $B_i$ as in step 1.2, form, for each nonempty $S\subseteq\{0,\ldots,m-1\}$, $$ W_S=\left(\bigcap_{i\in S}A_i\right) \setminus\left(\bigcup_{j\notin S}\overline{B_j}\right), $$ discarding empty members. These finitely many sets are open and cover $X$: at $x$, take $S=\{i:x\in A_i\}$. Moreover, choose $k$ with $x\in B_k$. Every $W_S$ containing $x$ has $k\in S$, so $W_S\subseteq A_k$. Hence the point-star $\operatorname{St}(x,\mathcal W)$ lies in $A_k$. Call this a barycentric refinement of $(A_i)$. [step 1.2, L3, construct]

3.1 Apply step 2.2 to the finite cover $(U_i)$ and its shrinking $(V_i)$ from step 2.1, obtaining a finite open barycentric refinement $\mathcal W$ of $\mathcal U$. Apply steps 1.2 and 2.2 again to $\mathcal W$, obtaining a finite open barycentric refinement $\mathcal Z$ of $\mathcal W$. [step 2.1, step 1.2, step 2.2]

4.1 The cover $\mathcal Z$ star-refines $\mathcal U$. Fix $Z_0\in\mathcal Z$ and $x\in Z_0$. Barycentricity of $\mathcal W$ gives $U\in\mathcal U$ with $\operatorname{St}(x,\mathcal W)\subseteq U$. If $Z\in\mathcal Z$ meets $Z_0$ at $y$, barycentricity of $\mathcal Z$ gives $W_y\in\mathcal W$ containing $\operatorname{St}(y,\mathcal Z)$. Both $Z_0$ and $Z$ lie in $W_y$, and $x\in W_y$, so $Z\subseteq W_y\subseteq\operatorname{St}(x,\mathcal W)\subseteq U$. Thus $\operatorname{St}(Z_0,\mathcal Z)\subseteq U$. [step 3.1]

5.1 The finite open cover $\mathcal Z$ is therefore a star-refinement of the original cover. [step 4.1, discharge-construct] ∎
