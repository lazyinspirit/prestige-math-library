---
id: thm-specht-restriction-branching-filtration
kind: theorem
title: "Specht restriction has a removable-corner filtration over every field"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [lem-specht-branching-subspaces-are-invariant, lem-specht-branching-successive-quotients, def-corner-order-and-specht-deletion-map, def-polytabloid-specht-module-over-an-arbitrary-field, def-sign-representation-and-restriction-of-a-representation, def-subrepresentation-and-irreducible-representation, def-removable-and-addable-nodes-of-a-partition]
justified_by: []
aliases: []
landmark: false
proof_strategy: constructive
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Charlotte Chan, Representation Theory of Symmetric Groups, Theorem 4.16, printed pp. 18-19, and Theorem 6.8, printed p. 26"
      url: "https://web.math.princeton.edu/~charchan/RepresentationTheorySymmetricGroupsNotes.pdf"
    - title: "David A. Craven, Groups, Geometries and Representation Theory, Sections 2.2 and 2.4, printed pp. 22-23 and 28-31"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/groupsgeomreptheory2013.pdf"
    - title: "Mark Wildon, Representation Theory of the Symmetric Group, Section 6, printed pp. 26-33"
      url: "https://www.ma.rhul.ac.uk/~uvah099/Maths/Sym/SymGroup2014.pdf"
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $\lambda\vdash n$, let $F$ be any field, and let
$r_1<\cdots<r_m$ be the rows of the removable corners of $\lambda$, so that
$m\ge1$, the corners $x_i=(r_i,\lambda_{r_i})$ are listed from top to
bottom, and the partitions $\lambda^{(i)}$ of $n-1$ are obtained by deleting
$x_i$ ([[def-corner-order-and-specht-deletion-map]],
[[def-removable-and-addable-nodes-of-a-partition]]). Let
$V_i:=\operatorname{span}_F\{e_t:t$ a standard $\lambda$-tableau whose entry
$n$ lies in one of the rows $r_1,\dots,r_i\}$ for $1\le i\le m$ and $V_0:=0$,
inside the Specht module $S^\lambda_F$
([[def-polytabloid-specht-module-over-an-arbitrary-field]]). Then the
restriction $\operatorname{Res}^{S_n}_{S_{n-1}}S^\lambda_F$ of $S^\lambda_F$
to the subgroup $S_{n-1}\le S_n$ of permutations fixing $n$
([[def-sign-representation-and-restriction-of-a-representation]]) has a
filtration by $S_{n-1}$-submodules
$$0=V_0\subsetneq V_1\subsetneq\cdots\subsetneq V_m=S^\lambda_F$$
whose successive quotients are
$$V_i/V_{i-1}\cong S^{\lambda^{(i)}}_F\qquad(1\le i\le m)$$
as $S_{n-1}$-modules. Equivalently, the restriction of $S^\lambda_F$ has a
filtration whose successive quotients are
$S^{\lambda^{(1)}}_F,\dots,S^{\lambda^{(m)}}_F$, one for each removable
corner of $\lambda$, taken from top to bottom. No splitting of this filtration
is asserted.

## Facts & Assumptions

**Given:** an integer $n\ge1$, a partition $\lambda\vdash n$, a field $F$, the removable rows $r_1<\cdots<r_m$ with corners $x_i$ and partitions $\lambda^{(i)}$, the Specht module $S^\lambda_F$, and its subspaces $V_i$ defined in the Statement.

[F1] Each $V_i$ is stable under the action of $S_{n-1}$ on $S^\lambda_F$ by restriction, and $V_0\subseteq V_1\subseteq\cdots\subseteq V_m=S^\lambda_F$ ([[lem-specht-branching-subspaces-are-invariant]]).

[F2] For every $1\le i\le m$ the deletion map $\theta_i$ restricts to a surjection $V_i\to S^{\lambda^{(i)}}_F$ with kernel $V_{i-1}$, hence induces an isomorphism of $S_{n-1}$-modules $V_i/V_{i-1}\cong S^{\lambda^{(i)}}_F$ ([[lem-specht-branching-successive-quotients]]).

[F3] For every partition $\nu$ of $n-1$ the Specht module $S^\nu_F$ is nonzero: for $\nu=\varnothing$ one has $S^\varnothing_F=F$, and for $\nu\ne\varnothing$ the polytabloid $e_t$ of any $\nu$-tableau $t$ has coefficient $1$ at the tabloid $\{t\}$, whence $e_t\ne0$ ([[def-polytabloid-specht-module-over-an-arbitrary-field]]).

[F4] A subspace of a representation stable under the action of a subgroup is a subrepresentation of the restricted representation ([[def-subrepresentation-and-irreducible-representation]], [[def-sign-representation-and-restriction-of-a-representation]]).

[F5] For $n\ge1$ a partition of $n$ has at least one removable corner, so $m\ge1$ and the list $r_1<\cdots<r_m$ is finite and nonempty ([[def-corner-order-and-specht-deletion-map]], [[def-removable-and-addable-nodes-of-a-partition]]).

## Proof

**Proof technique:** constructive.

1.1 [construct] By [F1] the subspaces $V_i$ are stable under the action of $S_{n-1}$ and satisfy $0=V_0\subseteq V_1\subseteq\cdots\subseteq V_m=S^\lambda_F$; by [F4] each $V_i$ is therefore an $S_{n-1}$-submodule of $\operatorname{Res}^{S_n}_{S_{n-1}}S^\lambda_F$. [F1, F4, construct]

1.2 By [F2], for every $1\le i\le m$ the quotient $V_i/V_{i-1}$ is isomorphic to $S^{\lambda^{(i)}}_F$ as an $S_{n-1}$-module; in particular the successive quotients of the chain are the Specht modules of the deletion shapes, in the order $i=1,\dots,m$ of the corners from top to bottom. [F2, algebra]

2.1 The inclusions are strict: by [F3] the quotient $S^{\lambda^{(i)}}_F$ is nonzero, so $V_i/V_{i-1}\ne0$ and $V_{i-1}\ne V_i$ for every $i$. Hence $0=V_0\subsetneq V_1\subsetneq\cdots\subsetneq V_m=S^\lambda_F$ is a filtration of the $S_{n-1}$-module $S^\lambda_F$ with successive quotients $S^{\lambda^{(1)}}_F,\dots,S^{\lambda^{(m)}}_F$. This proves the displayed filtration and the identification of its quotients. [F2, F3, step 1.1, step 1.2, algebra]

3.1 Boundary, field and choice audit. For $n=1$ one has $\lambda=(1)$, $m=1$, $r_1=1$, $\lambda^{(1)}=\varnothing$ and $S^{(1)}_F=F\,e_t$ with a single standard tableau $t$, so the filtration reads $0\subsetneq V_1=S^{(1)}_F$ with quotient $S^\varnothing_F=F$, in agreement with the statement. More generally the list of corners is finite and nonempty by [F5], and every removable corner of $\lambda$ occurs exactly once, as the corner $x_i$ for the unique $i$ with $r_i$ its row. The argument is uniform in $F$: the two quoted lemmas use the standard-polytabloid bases and the field-uniform deletion maps of [F2], with no division and no characteristic hypothesis, and [F3] gives nonzero quotients over every field, including $\operatorname{char}F=2$. Nothing here asserts that the filtration splits or that the quotients are simple or irreducible, and in positive characteristic the restriction need not be semisimple; only the existence of the filtration with the stated quotients is claimed. The subspaces $V_i$ are explicitly defined spans of finite standard-polytabloid sets determined by $\lambda$, and the corner list is determined by $\lambda$, so no choice principle is invoked. This proves the theorem. [F3, F5, given, step 2.1, discharge-construct] ∎

## Remarks

- **Why the order matters.** The standard-polytabloid filtration uses the top-to-bottom corner order of [[def-corner-order-and-specht-deletion-map]]; arbitrary reordering can destroy invariance. For $\lambda=(2,1)$, putting the bottom corner first gives the line spanned by $v=\{12\mid3\}-\{23\mid1\}$. But $(12)v=\{12\mid3\}-\{13\mid2\}$ lies outside that line, by independence of the three tabloids. The specified order is the one used in [[lem-specht-branching-successive-quotients]].

- **What is not claimed.** No direct sum decomposition $\operatorname{Res}^{S_n}_{S_{n-1}}S^\lambda_F\cong\bigoplus_iS^{\lambda^{(i)}}_F$ is asserted; over $\mathbb C$ such a splitting does follow from complete reducibility, which is the content of the complex branching rule proved later on this page, but in positive characteristic the filtration genuinely need not split.

- **Provenance caveat.** The statement of the filtration is classical (Chan Theorem 4.16, printed pp. 18-19; Wildon Section 6, printed pp. 26-33); the proof above is assembled from the two preceding lemmas, whose arguments are field-uniform and avoid the Robinson-Schensted-Knuth correspondence.
