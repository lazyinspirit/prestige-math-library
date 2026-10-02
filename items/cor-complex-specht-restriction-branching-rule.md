---
id: cor-complex-specht-restriction-branching-rule
kind: corollary
title: "The complex Specht restriction branching rule"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [thm-specht-restriction-branching-filtration, thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order, cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order, thm-complex-irreducibles-of-symmetric-groups-are-specht-modules, def-corner-order-and-specht-deletion-map, def-sign-representation-and-restriction-of-a-representation, thm-first-isomorphism-theorem-for-vector-spaces]
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
verification:
  precheck: pass
---

## Statement

Let $n\ge1$, let $\lambda\vdash n$ with Young diagram $[\lambda]$, and let
$x_1,\dots,x_m$ be the removable corners of $[\lambda]$, listed from top to
bottom, so that $\lambda^{(i)}=\lambda-x_i\vdash n-1$ is the partition
obtained by deleting $x_i$
([[def-corner-order-and-specht-deletion-map]]). Then there is an isomorphism
of $\mathbb C S_{n-1}$-modules
$$\operatorname{Res}^{S_n}_{S_{n-1}}S^\lambda_{\mathbb C}\cong S^{\lambda^{(1)}}_{\mathbb C}\oplus\cdots\oplus S^{\lambda^{(m)}}_{\mathbb C},$$
the restriction being along the subgroup $S_{n-1}\le S_n$ of permutations
fixing $n$
([[def-sign-representation-and-restriction-of-a-representation]]).
Equivalently, for every $\mu\vdash n-1$ the multiplicity of
$S^\mu_{\mathbb C}$ as a summand of
$\operatorname{Res}^{S_n}_{S_{n-1}}S^\lambda_{\mathbb C}$ equals the number
of removable corners $x$ of $[\lambda]$ with $\lambda-x=\mu$, so it is $0$ or
$1$; in particular each $S^{\lambda^{(i)}}_{\mathbb C}$ occurs exactly once.

## Facts & Assumptions

**Given:** an integer $n\ge1$, a partition $\lambda\vdash n$, its removable
corners $x_1,\dots,x_m$ from top to bottom with $\lambda^{(i)}=\lambda-x_i$,
and the restricted complex Specht module
$\operatorname{Res}^{S_n}_{S_{n-1}}S^\lambda_{\mathbb C}$.

[F1] There is a filtration by $S_{n-1}$-submodules
$0=V_0\subsetneq V_1\subsetneq\cdots\subsetneq V_m=S^\lambda_{\mathbb C}$
with $V_i/V_{i-1}\cong S^{\lambda^{(i)}}_{\mathbb C}$ for every
$1\le i\le m$; this holds over every field and in particular over
$\mathbb C$ ([[thm-specht-restriction-branching-filtration]],
[[def-corner-order-and-specht-deletion-map]]).

[F2] The complex Specht modules $S^\mu_{\mathbb C}$, $\mu\vdash n-1$, form a
complete irredundant list of the finite-dimensional irreducible complex
$S_{n-1}$-representations
([[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]]).

[F3] Maschke's theorem: if $G$ is a finite group, $k$ a field with
$\operatorname{char}k\nmid|G|$, and $W\le V$ a subrepresentation of a
finite-dimensional representation of $G$ over $k$, then there is a
subrepresentation $U\le V$ with $V=W\oplus U$; consequently every
finite-dimensional representation of such a group is completely reducible
([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]],
[[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]]).

[F4] The partition $\lambda^{(i)}=\lambda-x_i$ is obtained by deleting a
distinct corner for each $i$, so $\lambda^{(i)}=\lambda^{(j)}$ happens only
for $i=j$; consequently the multiplicities in a direct sum of the
$S^{\lambda^{(i)}}_{\mathbb C}$ are $0$ or $1$
([[def-corner-order-and-specht-deletion-map]]).

[F5] If $V=W\oplus U$ and both are finite-dimensional, the projection
$V\to V/W$ restricts to an isomorphism $U\to V/W$
([[thm-first-isomorphism-theorem-for-vector-spaces]]).

## Proof

**Proof technique:** constructive.

1.1 [construct] By [F1] there is a chain of $S_{n-1}$-submodules $0=V_0\subsetneq V_1\subsetneq\cdots\subsetneq V_m=S^\lambda_{\mathbb C}$ whose successive quotients are $V_i/V_{i-1}\cong S^{\lambda^{(i)}}_{\mathbb C}$. Since $\operatorname{char}\mathbb C=0$ does not divide $|S_{n-1}|=(n-1)!$, [F3] applies to each subrepresentation $V_{i-1}\le V_i$: there is an $S_{n-1}$-submodule $U_i\le V_i$ with $V_i=V_{i-1}\oplus U_i$. [F1, F3, construct]

2.1 By [F5] the projection $V_i\to V_i/V_{i-1}$ restricts to an $S_{n-1}$-isomorphism $U_i\to V_i/V_{i-1}$; composing with the isomorphism of step 1.1 gives an $S_{n-1}$-isomorphism $U_i\cong S^{\lambda^{(i)}}_{\mathbb C}$. [F5, step 1.1, algebra]

2.2 Since $V_0=0$ we have $V_1=U_1$, and $V_i=V_{i-1}\oplus U_i$ for every $i$ by step 1.1, so $S^\lambda_{\mathbb C}=V_m=U_1\oplus U_2\oplus\cdots\oplus U_m$; in particular $\dim_{\mathbb C}S^\lambda_{\mathbb C}=\sum_{i=1}^m\dim_{\mathbb C}U_i$. [F1, step 1.1, algebra]

3.1 Combining steps 2.1 and 2.2 gives the asserted $\mathbb C S_{n-1}$-isomorphism $\operatorname{Res}^{S_n}_{S_{n-1}}S^\lambda_{\mathbb C}\cong S^{\lambda^{(1)}}_{\mathbb C}\oplus\cdots\oplus S^{\lambda^{(m)}}_{\mathbb C}$. By [F2] the irreducible summands of a decomposition into Specht modules are classified up to isomorphism by their shapes, and by [F4] the shapes $\lambda^{(i)}$ are pairwise distinct, so each $S^{\lambda^{(i)}}_{\mathbb C}$ occurs exactly once and, for $\mu\vdash n-1$, the multiplicity of $S^\mu_{\mathbb C}$ is the number of corners $x$ with $\lambda-x=\mu$. This proves the Statement. [F2, F4, step 2.1, step 2.2, algebra]

4.1 Boundary and choice audit. For $n=1$ one has $\lambda=(1)$, $m=1$, $x_1$ the unique box, $\lambda^{(1)}=\varnothing$ and $S^\varnothing_{\mathbb C}=\mathbb C$, so the isomorphism reads $\operatorname{Res}^{S_1}_{S_0}S^{(1)}_{\mathbb C}\cong S^\varnothing_{\mathbb C}$, both sides being the one-dimensional trivial representation of the trivial group; the filtration has length one and no splitting choice is needed beyond $U_1=V_1$. If $\lambda$ is a row or a column there is exactly one removable corner and the restriction is irreducible; in general $m$ is the finite number of removable corners of $\lambda$. The complement $U_i$ furnished by [F3] is produced by averaging over the finite group $S_{n-1}$ and involves no choice principle, and by step 3.1 the isomorphism type of the resulting direct sum does not depend on those complements. This proves the corollary. [F1, F3, F4, given, step 3.1, discharge-construct] ∎

## Remarks

- **Over other fields the splitting can fail.** The corollary uses
  characteristic zero through Maschke's theorem for $S_{n-1}$; over a field
  $F$ of positive characteristic the filtration of
  [[thm-specht-restriction-branching-filtration]] need not split, and the
  restriction of a Specht module can be a nonsplit extension of its
  removable-corner factors.

- **Two extreme shapes.** The one-row diagram $(n)$ has the single removable
  corner $(1,n)$ and the one-column diagram $(1^n)$ has the single removable
  corner $(n,1)$, so the corollary gives
  $\operatorname{Res}S^{(n)}_{\mathbb C}\cong S^{(n-1)}_{\mathbb C}$ and
  $\operatorname{Res}S^{(1^n)}_{\mathbb C}\cong S^{(1^{n-1})}_{\mathbb C}$:
  each of the two extremes restricts to the corresponding extreme shape with
  exactly one summand.
