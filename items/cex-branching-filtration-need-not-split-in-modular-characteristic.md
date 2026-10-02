---
id: cex-branching-filtration-need-not-split-in-modular-characteristic
kind: counterexample
title: "The branching filtration need not split in modular characteristic"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [def-polytabloid-specht-module-over-an-arbitrary-field, thm-specht-restriction-branching-filtration, def-young-subgroup-tabloid-and-permutation-module, def-row-and-column-stabilizers-of-a-tableau, def-corner-order-and-specht-deletion-map, thm-sign-is-a-homomorphism, def-subrepresentation-and-irreducible-representation, thm-existence-of-finite-fields, def-finite-field-and-its-order]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Mark Wildon, Representation Theory of the Symmetric Group, Section 6, printed pp. 26-33"
      url: "https://www.ma.rhul.ac.uk/~uvah099/Maths/Sym/SymGroup2014.pdf"
    - title: "David A. Craven, Groups, Geometries and Representation Theory, Sections 2.2 and 2.4, printed pp. 22-23 and 28-31"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
verification:
  precheck: pass
---

## Statement refuted

For every field $F$, every $n\ge1$ and every $\lambda\vdash n$, the
restriction $\operatorname{Res}^{S_n}_{S_{n-1}}S^\lambda_F$ is isomorphic to
the direct sum $\bigoplus_xS^{\lambda-x}_F$ of the removable-corner Specht
modules; equivalently, the removable-corner filtration of a Specht module
splits over every field.

## Facts & Assumptions

**Given:** Let $K$ be a field with two elements
([[thm-existence-of-finite-fields]], [[def-finite-field-and-its-order]]), let
$n=3$ and $\lambda=(2,1)$, and let $v_1,v_2,v_3$ be the $(2,1)$-tabloids,
$v_i$ being the tabloid whose singleton second row is $\{i\}$. Let
$V=\bigoplus_{i=1}^3Kv_i=M^{(2,1)}_K$ and let
$S^{(2,1)}_K\subseteq V$ be the modular Specht module spanned by the
polytabloids of all $(2,1)$-tableaux.

[F1] In $K$ one has $1+1=0$, so $-1=1$; the additive group of $K$ is
$\{0,1\}$. Consequently the sign of every permutation is $1$ in $K$ when
read through the values $\pm1$
([[thm-existence-of-finite-fields]], [[def-finite-field-and-its-order]],
[[thm-sign-is-a-homomorphism]]).

[F2] The $(2,1)$-tabloids form a basis of $M^{(2,1)}_K$, the action is
$\sigma\cdot\{t\}=\{\sigma\cdot t\}$ by relabelling the entries, and a
$(2,1)$-tabloid is determined by the label of its singleton second row
([[def-young-subgroup-tabloid-and-permutation-module]],
[[def-polytabloid-specht-module-over-an-arbitrary-field]]).

[F3] For a tableau $t$, one has $\kappa_t=\sum_{\gamma\in C_t}\operatorname{sgn}(\gamma)\gamma$
and $e_t=\kappa_t\cdot\{t\}$, where $C_t$ is the column stabilizer; $S^\lambda_K$
is the $K$-span of the polytabloids, and $e_t\ne0$
([[def-polytabloid-specht-module-over-an-arbitrary-field]],
[[def-row-and-column-stabilizers-of-a-tableau]]).

[F4] Over any field the restriction
$\operatorname{Res}^{S_n}_{S_{n-1}}S^\lambda_F$ has a filtration
$0=V_0\subsetneq V_1\subsetneq\cdots\subsetneq V_m=S^\lambda_F$ by
$S_{n-1}$-submodules with $V_i/V_{i-1}\cong S^{\lambda^{(i)}}_F$, the corners
being listed from top to bottom; $V_i$ is spanned by the standard
polytabloids whose tableaux carry $n$ in one of the first $i$ removable rows
([[thm-specht-restriction-branching-filtration]],
[[def-corner-order-and-specht-deletion-map]]).

[F5] A fixed space of a group action on a representation is a
subrepresentation, and a direct sum of trivial representations is the
representation on which every group element acts as the identity
([[def-subrepresentation-and-irreducible-representation]]).

## Counterexample

**Proof technique:** direct.

1.1 By [F2] the tabloids $v_1,v_2,v_3$ form a basis of $V$ and the transposition $\tau=(12)\in S_2$ acts by $\tau\cdot v_1=v_2$, $\tau\cdot v_2=v_1$ and $\tau\cdot v_3=v_3$: it permutes the labels $1,2$ of the singleton second row and fixes $3$. [given, F2]

1.2 Put $t=\begin{smallmatrix}1&2\\3&\end{smallmatrix}$ and $u=\begin{smallmatrix}1&3\\2&\end{smallmatrix}$, the two standard $(2,1)$-tableaux. Their column stabilizers are $C_t=\{1,(13)\}$ and $C_u=\{1,(12)\}$ by [F3], and the associated tabloids are $\{t\}=v_3$, $(13)\cdot\{t\}=v_1$, $\{u\}=v_2$, $(12)\cdot\{u\}=v_1$. Since all signs equal $1$ in $K$ by [F1], [F3] gives $e_t=v_3+v_1$ and $e_u=v_2+v_1$, and these two vectors are linearly independent by their coefficients at the basis vectors $v_3$ and $v_2$. For any $(2,1)$-tableau with first row $(a,b)$ and second row $(c)$, the column stabilizer is $\{1,(ac)\}$, so its polytabloid is $v_c+v_a$. Each such pair sum lies in the span of the two displayed vectors: the only other pair sum is $v_2+v_3=(v_2+v_1)+(v_3+v_1)$ in characteristic two. Thus all polytabloids lie in this span, and $S^{(2,1)}_K=\operatorname{span}_K\{v_3+v_1,\,v_2+v_1\}$ is two-dimensional. [given, F1, F2, F3, algebra]

2.1 The fixed space of $\tau$ on $S^{(2,1)}_K$ is one-dimensional: writing $x=a(v_3+v_1)+b(v_2+v_1)=(a+b)v_1+bv_2+av_3$ with $a,b\in K$, step 1.1 gives $\tau\cdot x=(a+b)v_2+bv_1+av_3=bv_1+(a+b)v_2+av_3$, and $\tau\cdot x=x$ forces $a+b=b$ and $b=a+b$, that is $a=0$; conversely every $x=b(v_2+v_1)$ is fixed. So the fixed space is $\operatorname{span}_K\{v_2+v_1\}$, of dimension one. [step 1.1, step 1.2, algebra]

3.1 The removable rows of $(2,1)$ are $r_1=1$ and $r_2=2$, with $\lambda^{(1)}=(1,1)$ and $\lambda^{(2)}=(2)$. By [F4] the restriction of $S^{(2,1)}_K$ to $S_2$ has the filtration $0\subsetneq V_1\subsetneq V_2=S^{(2,1)}_K$ with $V_1/V_0\cong S^{(1,1)}_K$ and $V_2/V_1\cong S^{(2)}_K$, where $V_1$ is spanned by the standard polytabloids whose tableaux have largest label $3$ in row $r_1=1$, that is $V_1=\operatorname{span}_K\{e_u\}=\operatorname{span}_K\{v_2+v_1\}$. Both quotient modules are one-dimensional over $K$ and trivial for $S_2$: $S^{(2)}_K$ is spanned by the unique $(2)$-tabloid, on which $S_2$ acts trivially, and $S^{(1,1)}_K$ is spanned by $e_w$ for a column tableau $w$, which is invariant under the transposition because the two $(1,1)$-tabloids are exchanged; in particular the submodule $V_1$ is exactly the fixed space computed in step 2.1. [given, F1, F2, F3, F4, step 1.2, step 2.1, algebra]

4.1 Suppose the restriction were the direct sum of the two removable-corner factors, that is $S^{(2,1)}_K\cong S^{(1,1)}_K\oplus S^{(2)}_K$ as $S_2$-modules. Since both summands are trivial by step 3.1, the right-hand side would be a two-dimensional trivial $S_2$-module, on which $\tau$ acts as the identity by [F5], so every vector of $S^{(2,1)}_K$ would be fixed by $\tau$. This contradicts the fixed space computed in step 2.1, which is one-dimensional. Equivalently, $V_1$ equals the full fixed space, so an $S_2$-complement to $V_1$ would be a submodule contained in the fixed space $V_1$ and hence would be zero, showing that the extension $0\to V_1\to S^{(2,1)}_K\to S^{(2,1)}_K/V_1\to0$ of two trivial one-dimensional $S_2$-modules does not split. Thus the removable-corner filtration of $S^{(2,1)}_{K}$ over $K$ of characteristic two is a nonsplit extension of the two one-dimensional Specht factors $S^{(1,1)}_K$ and $S^{(2)}_K$, both trivial for $S_2$, and the field-independent branching rule is refuted. [F4, F5, step 2.1, step 3.1, algebra] ∎

## Remarks

- **Where the splitting fails.** The two factors are individually trivial,
  so the failure is not visible from the constituent list alone: it is
  visible in the fixed space, which has dimension one rather than the
  dimension two that a direct sum of two trivial modules would exhibit. Over
  $\mathbb C$ the analogous restriction does split, by Maschke's theorem for
  $S_2$; the obstruction here is that $2$ divides $|S_2|$.

- **Consistency with the filtration theorem.** The example realizes the
  chain $0\subsetneq V_1\subsetneq V_2=S^{(2,1)}_K$ explicitly:
  $V_1=\operatorname{span}_K\{v_1+v_2\}$ and
  $S^{(2,1)}_K=\operatorname{span}_K\{v_1+v_2,\,v_1+v_3\}$, in agreement
  with [[thm-specht-restriction-branching-filtration]].
