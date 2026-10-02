---
id: ex-youngs-rule-for-m-two-one
kind: example
title: "Young's rule for M^(2,1)"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [thm-youngs-rule-for-permutation-modules, def-semistandard-tableau-and-kostka-number, thm-standard-polytabloid-basis, def-young-subgroup-tabloid-and-permutation-module, def-column-antisymmetrizer-polytabloid-and-specht-module, def-row-and-column-stabilizers-of-a-tableau, cor-sign-from-disjoint-cycle-structure, thm-complex-specht-modules-are-irreducible, def-young-tableau-standard-tableau-and-shape]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "David A. Craven, Groups, Geometries and Representation Theory, Sections 2.2 and 2.4, printed pp. 22-23 and 28-31"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
    - title: "Andrew Snowden, MATH 711 Representation Theory of Symmetric Groups, Lemmas 2.45-2.46 and Section 3.2, PDF pp. 23-24 and 36-39"
      url: "https://people.maths.ox.ac.uk/horawa/math_711.pdf"
verification:
  audited: 2026-10-02
  precheck: pass
---

## Statement

Work over $\mathbb C$. Let $\mu=(2,1)\vdash3$ and let $v_1,v_2,v_3$ be the
$(2,1)$-tabloids, $v_i$ being the tabloid whose singleton second row is
$\{i\}$, so that its first row is the complementary pair. Then:

1. **(Kostka numbers.)** $K_{(3),(2,1)}=1$, $K_{(2,1),(2,1)}=1$ and
   $K_{(1,1,1),(2,1)}=0$.
2. **(Young's rule.)** There is an isomorphism of $\mathbb C S_3$-modules
   $$M^{(2,1)}\cong S^{(3)}\oplus S^{(2,1)},$$
   the shape $(1,1,1)$ contributing no summand.
3. **(Concrete decomposition.)** Inside $M^{(2,1)}$ one has
   $$M^{(2,1)}=\mathbb C(v_1+v_2+v_3)\oplus S^{(2,1)},$$
   where $\mathbb C(v_1+v_2+v_3)$ is the trivial submodule, isomorphic to
   $S^{(3)}$, and $S^{(2,1)}=\operatorname{span}_{\mathbb C}\{v_3-v_1,\,v_2-v_1\}$
   is the sum-zero hyperplane. In particular the dimension count is
   $3=1+2$, and the multiplicity of $S^{(2,1)}$ in $M^{(2,1)}$ is $1$.

## Facts & Assumptions

**Given:** the group $S_3$, the partition $\mu=(2,1)$, the three partitions
$(3),(2,1),(1,1,1)$ of $3$, and the tabloids $v_1,v_2,v_3$ of the Statement.

[F1] The $(2,1)$-tabloids form a basis of $M^{(2,1)}$, the action is by
relabelling the entries, and a tabloid of shape $(2,1)$ is determined by the
label of its singleton second row
([[def-young-subgroup-tabloid-and-permutation-module]]).

[F2] A semistandard filling of $[\lambda]$ with content $\mu$ satisfies: the entry $i$
occurs $\mu_i$ times, entries weakly increase along rows and strictly
increase down columns; $K_{\lambda,\mu}$ is the number of such semistandard
fillings
([[def-semistandard-tableau-and-kostka-number]]).

[F3] Over $\mathbb C$ one has
$M^{(2,1)}\cong\bigoplus_{\lambda\vdash3}(S^\lambda)^{\oplus K_{\lambda,(2,1)}}$
as $\mathbb C S_3$-modules, and the multiplicity of $S^\lambda$ is
$K_{\lambda,(2,1)}$
([[thm-youngs-rule-for-permutation-modules]]).

[F4] For a $(2,1)$-tableau $s$ the polytabloid is $e_s=\kappa_s\cdot\{s\}$
with $\kappa_s=\sum_{\gamma\in C_s}\operatorname{sgn}(\gamma)\gamma$ over the
column stabilizer $C_s$, and a transposition has sign $-1$. The tabloid of a
tableau is determined by its two row sets, so
$\{t\}=v_3$ for $t=\begin{smallmatrix}1&2\\3&\end{smallmatrix}$ and
$\{u\}=v_2$ for $u=\begin{smallmatrix}1&3\\2&\end{smallmatrix}$; their column
stabilizers are $C_t=\{\mathrm{id},(13)\}$ and $C_u=\{\mathrm{id},(12)\}$
([[def-column-antisymmetrizer-polytabloid-and-specht-module]],
[[def-row-and-column-stabilizers-of-a-tableau]],
[[def-young-subgroup-tabloid-and-permutation-module]],
[[cor-sign-from-disjoint-cycle-structure]]).

[F5] The standard polytabloids of a partition form a basis of the complex
Specht module ([[thm-standard-polytabloid-basis]]).

[F6] The complex Specht modules are irreducible
([[thm-complex-specht-modules-are-irreducible]]). For the one-row shape
$(3)$ the unique tabloid is fixed by every permutation and the column
stabilizer is trivial, so its polytabloid is that tabloid and $S^{(3)}$ is
one-dimensional and trivial
([[def-column-antisymmetrizer-polytabloid-and-specht-module]],
[[def-young-subgroup-tabloid-and-permutation-module]]).

No form of the Axiom of Choice is used; all enumerations below are finite and
explicit.

## Proof

**Proof technique:** direct.

1.1 The tabloids $v_1,v_2,v_3$ are distinct by [F1], since their singleton second rows $\{1\},\{2\},\{3\}$ are distinct; by [F1] they form a basis of $M^{(2,1)}$, so $\dim_{\mathbb C}M^{(2,1)}=3$. [given, F1]

1.2 The semistandard fillings with content $(2,1)$ are enumerated by shape. Shape $(3)$: the single row carries two $1$'s and one $2$ weakly increasingly, so the only filling is $112$ and $K_{(3),(2,1)}=1$. Shape $(2,1)$: the entry in the box $(2,1)$ must strictly exceed the entry in the box above it, and only the entries $1,2$ occur, so $(2,1)$ carries $2$ and $(1,1)$ carries $1$; the remaining entry $1$ fills the box $(1,2)$, whose left neighbour is $1$, and weak increase holds; hence the unique filling is $\begin{smallmatrix}1&1\\2&\end{smallmatrix}$ and $K_{(2,1),(2,1)}=1$. Shape $(1,1,1)$: the three boxes form a column with strictly increasing entries, but the content has the entry $1$ twice, so no such filling exists and $K_{(1,1,1),(2,1)}=0$. [given, F2]

2.1 The shape $(2,1)$ has exactly two standard tableaux: the entry $1$ must occupy the box $(1,1)$, and the remaining boxes $(1,2)$ and $(2,1)$ receive $2$ and $3$ in either order, both fillings being standard, namely $t=\begin{smallmatrix}1&2\\3&\end{smallmatrix}$ and $u=\begin{smallmatrix}1&3\\2&\end{smallmatrix}$. By [F4] one has $\kappa_t=\mathrm{id}-(13)$ and $\kappa_u=\mathrm{id}-(12)$, and the action on tabloids is by relabelling, so $(13)\cdot v_3=v_1$ and $(12)\cdot v_2=v_1$. Hence $e_t=v_3-v_1$ and $e_u=v_2-v_1$, whose coordinate vectors $(-1,0,1)$ and $(-1,1,0)$ in the basis $v_1,v_2,v_3$ of [F1] are linearly independent. By [F5] the standard polytabloids of shape $(2,1)$ form a basis of $S^{(2,1)}$, whose dimension is therefore the number $2$ of standard tableaux, so $\{e_t,e_u\}$ is a basis of $S^{(2,1)}$. [F1, F4, F5, step 1.1, algebra]

2.2 Substituting step 1.2 into [F3] gives the $\mathbb C S_3$-isomorphism $M^{(2,1)}\cong(S^{(3)})^{\oplus1}\oplus(S^{(2,1)})^{\oplus1}\oplus(S^{(1,1,1)})^{\oplus0}=S^{(3)}\oplus S^{(2,1)}$, which is claim 2 and shows that the multiplicity of $S^{(2,1)}$ in $M^{(2,1)}$ is one. [F3, step 1.2, algebra]

2.3 Put $w:=v_1+v_2+v_3$ and let $H:=\{a_1v_1+a_2v_2+a_3v_3:a_1+a_2+a_3=0\}$ be the sum-zero hyperplane. Every $\sigma\in S_3$ permutes the tabloid basis, so $\sigma w=w$ and $\mathbb Cw$ is a submodule isomorphic to the trivial representation; and $H$ is $\sigma$-stable, since $\sigma$ merely permutes the coefficients. For any $a=a_1v_1+a_2v_2+a_3v_3$ with $c:=(a_1+a_2+a_3)/3$ one has $a=cw+(a-cw)$ with $a-cw\in H$, so $M^{(2,1)}=\mathbb Cw+H$; and $\mathbb Cw\cap H=0$, since $cw\in H$ forces $3c=0$, hence $c=0$. Therefore $M^{(2,1)}=\mathbb Cw\oplus H$ with $\dim_{\mathbb C}H=2$. [given, F1, step 1.1, algebra]

3.1 By step 2.1 the standard polytabloids $e_t=v_3-v_1$ and $e_u=v_2-v_1$ form a basis of $S^{(2,1)}$, and both lie in $H$ because their coordinates sum to zero; hence $S^{(2,1)}=\operatorname{span}\{v_3-v_1,v_2-v_1\}\subseteq H$ with $\dim_{\mathbb C}S^{(2,1)}=2=\dim_{\mathbb C}H$, so $S^{(2,1)}=H$. By [F6] $S^{(3)}$ is one-dimensional and trivial, whereas $S^{(2,1)}$ has dimension two by step 2.1; they are therefore non-isomorphic, and $\mathbb Cw\cong S^{(3)}$ and $H=S^{(2,1)}$ are exactly the two summands found in step 2.2; combined with step 2.3 this proves claim 3 and the dimension count $3=1+2$. [F5, F6, step 1.1, step 2.1, step 2.2, step 2.3, algebra]

4.1 Consistency and boundary audit. The third partition $(1,1,1)$ of $3$ contributes nothing, as computed directly from the strict column increase in step 1.2; the value $K_{(2,1),(2,1)}=1$ follows from the unique filling enumerated in step 1.2; the row shape $(3)$ contributes exactly one trivial summand, realized concretely as $\mathbb C(v_1+v_2+v_3)$; and the column shape $(1,1,1)$ would require three distinct entries, which content $(2,1)$ does not provide. The decomposition $\mathbb Cw\oplus H$ is $\sigma$-stable for every $\sigma\in S_3$ by step 2.3, and the ambient module has dimension three over $\mathbb C$, so $3=1+2$ is the complete dimension count. This proves the Statement. [F1, F2, F4, F6, step 2.2, step 2.3, step 3.1] ∎

## Remarks

- **What the example checks.** The example checks both halves of the picture
  in one three-dimensional module: the multiplicities $1,1,0$ are read off
  from the semistandard fillings, and the abstract decomposition is realized
  by the familiar splitting of the permutation module into constants and
  sum-zero vectors, with
  $S^{(2,1)}=\{a_1v_1+a_2v_2+a_3v_3:\sum_ia_i=0\}$
  (this basis is computed in step 2.1 and the identification of the hyperplane
  with $S^{(2,1)}$ is step 3.1; see also
  [[ex-polytabloids-for-shape-two-one]] for the same polytabloid computation).
