---
id: thm-box-finer-than-product
kind: theorem
title: "The box topology is finer than the product topology, the two agree for a finite index set in ZF, and, assuming the Axiom of Choice for nonempty factors, the box topology is strictly finer whenever infinitely many factors have a nonempty proper open subset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-product-topology, def-topological-space, def-topology-basis-subbasis,
       def-standard-topologies, def-axiom-of-choice, def-choice-function,
       thm-basis-criterion]
justified_by: []
aliases: []
landmark: true
short: "box finer than product, strictly so for infinite products"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Box topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Box_topology"
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "J. Munkres, Topology, 2nd ed., §19"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Statement

Let $(X_i, \mathcal{T}_i)_{i \in I}$ be topological spaces, let
$P := \prod_{i \in I} X_i$, and let $\mathcal{T}^{\Pi}$ and
$\mathcal{T}^{\square}$ be the product and the box topology on $P$
([[def-product-topology]]). Then:

1. $\mathcal{T}^{\Pi} \subseteq \mathcal{T}^{\square}$: the box topology is finer
   than the product topology ([[def-topological-space]]).
2. If $I$ is a natural number then $\mathcal{T}^{\Pi} = \mathcal{T}^{\square}$;
   this is a theorem of ZF.
3. Assume the Axiom of Choice. Suppose every $X_i$ is nonempty and let
   $$J \;:=\; \{\, i \in I : X_i \text{ has an open subset } U \text{ with } \varnothing \ne U \ne X_i \,\} .$$
   If $J$ is not finite then $\mathcal{T}^{\Pi} \subsetneq \mathcal{T}^{\square}$:
   the inclusion of claim 1 is strict.

Claim 3 spends the Axiom of Choice twice ([[def-axiom-of-choice]]), once to
produce a point of $P$ and once to select an open set together with a point of it
in each factor indexed by $J$; both uses are flagged at the steps that make them.
The hypothesis is stated in terms of open subsets rather than as "infinitely many
factors are non-trivial", because a factor may have more than one point and still
have no open set other than $\varnothing$ and itself, as the indiscrete topology
shows ([[def-standard-topologies]]), and for such a factor the conclusion fails.

## Facts & Assumptions

**Given:** Topological spaces $(X_i,\mathcal{T}_i)_{i \in I}$, the product set $P = \prod_{i \in I} X_i$ with its two topologies, and the set $J$ of the statement.

[A1] A basis for $\mathcal{T}^{\Pi}$ is the family $\mathcal{R}^{\Pi}$ of boxes $\prod_i U_i$ with every $U_i$ open and $U_i = X_i$ for all but finitely many $i$; a basis for $\mathcal{T}^{\square}$ is the family $\mathcal{R}$ of all boxes $\prod_i U_i$ with every $U_i$ open ([[def-product-topology]]).

[A2] A basic product-open set is an intersection of finitely many sets $\pi_{i}^{-1}[U]$, so its exceptional index set $\{\, i : U_i \ne X_i \,\}$ is contained in a set listed as $\{i_0, \dots, i_{n-1}\}$ for some natural $n$ ([[def-product-topology]], [[thm-basis-criterion]]).

[L1] If $\mathcal{B}_1 \subseteq \mathcal{B}_2$ are bases for topologies $\mathcal{T}_1$ and $\mathcal{T}_2$ on the same set, then $\mathcal{T}_1 \subseteq \mathcal{T}_2$, every member of $\mathcal{T}_1$ being a union of members of $\mathcal{B}_1 \subseteq \mathcal{B}_2 \subseteq \mathcal{T}_2$ ([[def-topology-basis-subbasis]], [[def-topological-space]]).

[L2] A subset of a finite set is finite; this is fact (i) discharged in [[def-standard-topologies]].

[L3] If every member of a family of nonempty sets is nonempty then the family has a choice function, and the product of the family is nonempty; this is the Axiom of Choice ([[def-axiom-of-choice]], [[def-choice-function]]).

## Proof

**Proof technique:** direct.

1.1 $\mathcal{R}^{\Pi} \subseteq \mathcal{R}$, a box with all but finitely many factors equal to $X_i$ being in particular a box. [A1]

1.2 If $I$ is a natural number $n$ then $\mathcal{R} \subseteq \mathcal{R}^{\Pi}$, since the exceptional index set of any box is a subset of $n$ and hence finite by [L2], so every box is basic product-open. [A1, L2]

1.3 Assume every $X_i$ is nonempty and $J$ is not finite. For $i \in J$ let $\mathcal{A}_i := \{\, (U,u) : U \in \mathcal{T}_i,\ u \in U,\ U \ne X_i \,\}$; each $\mathcal{A}_i$ is nonempty, since $J$ supplies an open $U$ with $\varnothing \ne U \ne X_i$ and $U$ nonempty supplies a $u \in U$. [given, L3]

2.1 By [L3] applied to $(\mathcal{A}_i)_{i \in J}$ there are $(U_i, u_i) \in \mathcal{A}_i$ for every $i \in J$; and by [L3] applied to $(X_i)_{i \in I}$ there is a point $p \in P$. [step 1.3, L3, choose]

2.2 Claim 1 follows from step 1.1 and [L1], and claim 2 from steps 1.1 and 1.2 with [L1] applied in both directions. [step 1.1, step 1.2, L1]

3.1 Define $x \in P$ by $x_i := u_i$ for $i \in J$ and $x_i := p_i$ for $i \notin J$, and put $B := \prod_i V_i$ with $V_i := U_i$ for $i \in J$ and $V_i := X_i$ otherwise. Then $B \in \mathcal{R} \subseteq \mathcal{T}^{\square}$ and $x \in B$. [step 2.1, A1]

4.1 Suppose $B$ were in $\mathcal{T}^{\Pi}$. Then by [A1] there is a basic product-open $O = \prod_i O_i$ with $x \in O \subseteq B$, and by [A2] its exceptional index set is contained in $\{i_0, \dots, i_{n-1}\}$ for some natural $n$. [step 3.1, A1, A2, assume-hyp]

5.1 The set $J$ is not contained in $\{i_0, \dots, i_{n-1}\}$: otherwise $J$ would be a subset of a finite set and hence finite by [L2], contrary to the hypothesis of step 1.3. So there is $j \in J$ with $O_j = X_j$. [step 1.3, step 4.1, L2]

6.1 For $j$ as in step 5.1 and any $t \in X_j$, the point $y$ with $y_j := t$ and $y_i := x_i$ for $i \ne j$ lies in $O$, since $x \in O$ and $O_j = X_j$; hence $y \in B$ and $t = y_j \in V_j = U_j$. So $X_j \subseteq U_j$, contradicting $U_j \ne X_j$ from step 2.1. [step 2.1, step 3.1, step 4.1, step 5.1]

7.1 Therefore $B \notin \mathcal{T}^{\Pi}$ while $B \in \mathcal{T}^{\square}$, so the inclusion of claim 1 is strict, which is claim 3; with step 2.2 all three claims are proved. [step 2.2, step 3.1, step 6.1] ∎

## Remarks

- **Both hypotheses of claim 3 are needed.** If some factor is empty then $P$ is empty and there is exactly one topology on it, so the two agree. If only finitely many factors have a nonempty proper open subset then every box is, after replacing the unrestricted factors by $X_i$, already basic product-open, and again the two agree; the indiscrete topology on a set with many points is the standard case ([[def-standard-topologies]]).

- **The strictness argument is not constructive, and it does not have to be.** Claim 3 as stated quantifies over arbitrary factors, so a choice principle is unavoidable. In every concrete instance on the companion page the sets $U_i$ are written down by a formula and no choice is spent; the false statement on this page uses $\mathbb{R}^{\mathbb{N}}$ with $U_k = (-1/(k+1),\ 1/(k+1))$ and is choice free.

- **Finer means more open sets, and here it means too many.** The box topology has so many open sets that maps into it are hard to make continuous, which is exactly the failure the characteristic property of [[thm-product-universal-property]] avoids. That is why "product" without qualification means the product topology in this library.
