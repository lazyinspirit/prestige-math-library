---
id: thm-complex-specht-induction-branching-rule
kind: theorem
title: "Multiplicity-free complex Specht induction"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps: [cor-complex-specht-restriction-branching-rule, thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules, thm-complex-irreducibles-of-symmetric-groups-are-specht-modules, thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order, def-induced-r-linear-g-module-by-h-covariant-functions, def-column-antisymmetrizer-polytabloid-and-specht-module, def-young-subgroup-tabloid-and-permutation-module, def-removable-and-addable-nodes-of-a-partition, def-symmetric-group, cor-schurs-lemma-for-irreducible-representations, cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars, cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order, def-completely-reducible-representation, thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique, def-isotypic-component-of-a-completely-reducible-representation]
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
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
---

## Statement

Let $n\ge0$ and $\lambda\vdash n$, let $S_n\le S_{n+1}$ be the subgroup of
permutations of $\{1,\dots,n+1\}$ fixing $n+1$
([[def-symmetric-group]]), and let
$\operatorname{Ind}^{S_{n+1}}_{S_n}S^\lambda_{\mathbb C}$ be the induced
$\mathbb C S_{n+1}$-module of the complex Specht module $S^\lambda_{\mathbb C}$
([[def-induced-r-linear-g-module-by-h-covariant-functions]],
[[def-column-antisymmetrizer-polytabloid-and-specht-module]]). Then
$$\operatorname{Ind}^{S_{n+1}}_{S_n}S^\lambda_{\mathbb C}\cong\bigoplus_{y\in\operatorname{Add}(\lambda)}S^{\lambda+y}_{\mathbb C},$$
where $\operatorname{Add}(\lambda)$ is the set of addable nodes of the Young
diagram $[\lambda]$ and $\lambda+y$ is the unique partition with
$[\lambda+y]=[\lambda]\cup\{y\}$
([[def-removable-and-addable-nodes-of-a-partition]]). Each summand occurs
exactly once; equivalently, for every $\nu\vdash n+1$ the multiplicity of
$S^\nu_{\mathbb C}$ in $\operatorname{Ind}^{S_{n+1}}_{S_n}S^\lambda_{\mathbb C}$
is $1$ when $\nu=\lambda+y$ for some addable node $y$ of $[\lambda]$, and $0$
otherwise. In particular, for $n=0$ this reads
$\operatorname{Ind}^{S_1}_{S_0}S^\varnothing_{\mathbb C}\cong S^{(1)}_{\mathbb C}$.

## Facts & Assumptions

**Given:** an integer $n\ge0$, a partition $\lambda\vdash n$, the finite
groups $H:=S_n\le G:=S_{n+1}$ with $H$ acting as the permutations of
$\{1,\dots,n\}$ extended by $n+1\mapsto n+1$, and the complex Specht modules
$S^\mu_{\mathbb C}$ for $\mu\vdash n$ and $S^\nu_{\mathbb C}$ for
$\nu\vdash n+1$.

[F1] For a commutative ring $R$, a finite group $G$, a subgroup $H\le G$ and
an $R$-linear $H$-module $W$, the induced module is
$\operatorname{Ind}_H^G W=\{f:G\to W:f(gh)=h^{-1}\cdot f(g)\text{ for all }g\in G,h\in H\}$
with $(x\cdot f)(g)=f(x^{-1}g)$; it is an $R$-linear $G$-module, and when $G$
is finite and $W$ is finite-dimensional over $R$ it is finite-dimensional
over $R$ ([[def-induced-r-linear-g-module-by-h-covariant-functions]]).

[F2] For a finite group $G$, a subgroup $H\le G$, an $H$-module $W$ and a
$G$-module $V$ there is a natural isomorphism
$\operatorname{Hom}_G(\operatorname{Ind}_H^G W,V)\cong\operatorname{Hom}_H(W,\operatorname{Res}_H^G V)$
([[thm-induction-is-left-adjoint-to-restriction-for-finite-group-modules]]).

[F3] For $m\ge1$, $\nu\vdash m$ and the subgroup $S_{m-1}\le S_m$ of
permutations fixing $m$, there is an isomorphism of $\mathbb C S_{m-1}$-modules
$\operatorname{Res}^{S_m}_{S_{m-1}}S^\nu_{\mathbb C}\cong\bigoplus_{x\in\operatorname{Rem}(\nu)}S^{\nu-x}_{\mathbb C}$,
each summand occurring once
([[cor-complex-specht-restriction-branching-rule]],
[[def-removable-and-addable-nodes-of-a-partition]]).

[F4] For every $m\ge0$ the modules $\{S^\mu_{\mathbb C}:\mu\vdash m\}$ form a
complete irredundant list, up to isomorphism, of the finite-dimensional
irreducible complex $S_m$-representations
([[thm-complex-irreducibles-of-symmetric-groups-are-specht-modules]]).

[F5] A nonzero intertwiner between irreducible representations is an
isomorphism, and over the algebraically closed field $\mathbb C$ every
endomorphism of an irreducible representation is a scalar; hence for
partitions $\rho,\tau\vdash m$ the space
$\operatorname{Hom}_{S_m}(S^\rho_{\mathbb C},S^\tau_{\mathbb C})$ is
$\mathbb C\,\mathrm{id}$ when $\rho=\tau$ and is $0$ otherwise
([[cor-schurs-lemma-for-irreducible-representations]],
[[cor-endomorphisms-of-an-irreducible-over-an-algebraically-closed-field-are-scalars]]).

[F6] Every finite-dimensional complex representation of a finite group is
completely reducible, so it is a direct sum of finitely many irreducible
subrepresentations; this is Maschke's theorem in characteristic $0$
([[thm-maschkes-theorem-for-finite-groups-over-fields-whose-characteristic-does-not-divide-the-group-order]],
[[cor-finite-dimensional-representations-are-completely-reducible-when-char-k-does-not-divide-group-order]],
[[def-completely-reducible-representation]]).

[F7] For a completely reducible representation, the isotypic component
$V_{(S)}$ is the sum of all irreducible subrepresentations equivalent to $S$,
only the equivalence class of $S$ matters, and $V$ is the direct sum of its
isotypic components, a decomposition that is independent of the chosen
decomposition of $V$ into irreducibles
([[def-isotypic-component-of-a-completely-reducible-representation]],
[[thm-isotypic-decomposition-of-a-completely-reducible-representation-is-unique]]).

[F8] A node $x\in[\nu]$ is removable when $[\nu]\setminus\{x\}=[\nu-x]$ for a
partition $\nu-x$ of $m-1$, which is then unique, and a point $y\notin[\lambda]$
is addable for $\lambda$ when $[\lambda]\cup\{y\}=[\lambda+y]$ for a partition
$\lambda+y$ of $n+1$, which is then unique
([[def-removable-and-addable-nodes-of-a-partition]]).

[F9] For $\mu\vdash k$ the complex Specht module $S^\mu_{\mathbb C}$ is the
span of the polytabloids inside the tabloid module $M^\mu_{\mathbb C}$, which
has finitely many tabloids of shape $\mu$ as a basis; hence $S^\mu_{\mathbb C}$
is a finite-dimensional complex $S_k$-module
([[def-column-antisymmetrizer-polytabloid-and-specht-module]],
[[def-young-subgroup-tabloid-and-permutation-module]]).

No form of the Axiom of Choice is used: $G$ is finite, all direct sums are
finite, and the corresponding statements of [F3] and [F4] are themselves
choice-free.

## Proof

**Proof technique:** constructive.

1.1 Put $m:=n+1\ge1$, $G:=S_{n+1}$, $H:=S_n$ and $W:=S^\lambda_{\mathbb C}$; by [F1] the induced module $\operatorname{Ind}_H^G W$ is a finite-dimensional complex $G$-module, and by [F9] for every $\nu\vdash m$ the modules $S^\nu_{\mathbb C}$ and, for every $x$, $S^{\nu-x}_{\mathbb C}$ are finite-dimensional complex representations of $G$ and of $H$ respectively. [given, F1, F9]

1.2 The right-hand module $\bigoplus_{y\in\operatorname{Add}(\lambda)}S^{\lambda+y}_{\mathbb C}$ is a finite direct sum of irreducible $G$-modules with multiplicity exactly $1$ at those $\nu$ of the form $\nu=\lambda+y$ and multiplicity $0$ at all other $\nu$: the addable nodes $y$ of $[\lambda]$ give pairwise distinct partitions $\lambda+y$ and hence pairwise non-isomorphic summands by [F4] and [F8]. [F4, F8]

2.1 For every $\nu\vdash m$, the adjunction [F2] with $R=\mathbb C$ gives a $\mathbb C$-linear isomorphism $\operatorname{Hom}_G\bigl(\operatorname{Ind}_H^G W,S^\nu_{\mathbb C}\bigr)\cong\operatorname{Hom}_H\bigl(W,\operatorname{Res}^G_H S^\nu_{\mathbb C}\bigr)$. [F2, step 1.1]

2.2 For every $\nu\vdash m$ the restriction rule [F3] applies with its parameter equal to $m\ge1$, so $\operatorname{Res}^G_H S^\nu_{\mathbb C}\cong\bigoplus_{x\in\operatorname{Rem}(\nu)}S^{\nu-x}_{\mathbb C}$; composing with this isomorphism and splitting a homomorphism into a direct sum into its finitely many components gives $\operatorname{Hom}_H\bigl(W,\operatorname{Res}^G_H S^\nu_{\mathbb C}\bigr)\cong\bigoplus_{x\in\operatorname{Rem}(\nu)}\operatorname{Hom}_{S_n}\bigl(S^\lambda_{\mathbb C},S^{\nu-x}_{\mathbb C}\bigr)$. [F3, step 1.1]

2.3 For each $x\in\operatorname{Rem}(\nu)$ the summand $\operatorname{Hom}_{S_n}(S^\lambda_{\mathbb C},S^{\nu-x}_{\mathbb C})$ is one-dimensional when $\nu-x=\lambda$ and is zero otherwise: both arguments are irreducible complex $S_n$-modules and the partitions $\lambda$ and $\nu-x$ of $n$ are either equal or distinct, so [F5] applies. [F4, F5, step 1.1]

2.4 By [F6] the module $\operatorname{Ind}_H^G W$ is completely reducible, so it is isomorphic to a finite direct sum $\bigoplus_{\nu\vdash m}(S^\nu_{\mathbb C})^{\oplus m_\nu}$ for nonnegative integers $m_\nu$; [F4] makes the indexing complete and irredundant, and [F5] together with additivity of $\operatorname{Hom}$ in each argument gives $m_\nu=\dim_{\mathbb C}\operatorname{Hom}_G(S^\nu_{\mathbb C},\operatorname{Ind}_H^G W)=\dim_{\mathbb C}\operatorname{Hom}_G(\operatorname{Ind}_H^G W,S^\nu_{\mathbb C})$. [F4, F5, F6, step 1.1]

3.1 Steps 2.1, 2.2 and 2.3 combine to $\dim_{\mathbb C}\operatorname{Hom}_G\bigl(\operatorname{Ind}_H^G W,S^\nu_{\mathbb C}\bigr)=\#\{x\in\operatorname{Rem}(\nu):\nu-x=\lambda\}$. [step 2.1, step 2.2, step 2.3, algebra]

4.1 The set $\{x\in\operatorname{Rem}(\nu):\nu-x=\lambda\}$ is in bijection with $\{y\in\operatorname{Add}(\lambda):\lambda+y=\nu\}$ by the identity map on nodes: if $x$ is removable with $[\nu]\setminus\{x\}=[\lambda]$, then $y:=x$ is a point outside $[\lambda]$ with $[\lambda]\cup\{y\}=[\nu]$ a Young diagram, so $y$ is addable for $\lambda$ and $\lambda+y=\nu$; conversely if $y$ is addable with $[\lambda]\cup\{y\}=[\nu]$, then $x:=y$ lies in $[\nu]$ with $[\nu]\setminus\{x\}=[\lambda]$ a Young diagram, so $x$ is removable for $\nu$ and $\nu-x=\lambda$. Hence by step 3.1 the dimension $\dim_{\mathbb C}\operatorname{Hom}_G(\operatorname{Ind}_H^G W,S^\nu_{\mathbb C})$ equals $1$ if $\nu=\lambda+y$ for some addable node $y$ of $[\lambda]$, and equals $0$ otherwise. [F8, step 3.1, construct, algebra]

5.1 By step 2.4 and step 4.1 the multiplicities of $\operatorname{Ind}_H^G W$ are $1$ exactly at the partitions $\nu=\lambda+y$ with $y$ addable for $\lambda$ and $0$ at all other $\nu\vdash m$; by step 1.2 the module $\bigoplus_{y}S^{\lambda+y}_{\mathbb C}$ has the same multiplicities, and both modules are completely reducible by [F6]. Grouping each module into its isotypic components, which by [F7] are determined by the multiplicities alone, gives the asserted isomorphism $\operatorname{Ind}^{S_{n+1}}_{S_n}S^\lambda_{\mathbb C}\cong\bigoplus_{y\in\operatorname{Add}(\lambda)}S^{\lambda+y}_{\mathbb C}$ with each summand occurring once. [F6, F7, step 4.1, step 2.4, step 1.2]

6.1 Boundary and consistency check. For $n=0$ one has $\lambda=\varnothing$, $H=S_0=\{1\}$ and $m=1$; the single partition $\nu=(1)$ has the single removable node $x=(1,1)$ with $\nu-x=\varnothing=\lambda$, while $\operatorname{Add}(\varnothing)=\{(1,1)\}$ by [F8], so step 5.1 gives $\operatorname{Ind}^{S_1}_{S_0}S^\varnothing_{\mathbb C}\cong S^{(1)}_{\mathbb C}$; every partition $\lambda\vdash n$ with $n\ge1$ has at least the addable node opening a new row, so the displayed direct sum is never empty in that case, and the theorem uses the finite groups $S_n$, $S_{n+1}$ and finitely many partitions throughout, invoking no choice principle. This proves the Statement. [F8, step 5.1, given, algebra, discharge-construct] ∎

## Remarks

- **Consistency of dimensions.** For $\lambda=(2,1)\vdash3$ the theorem reads
  $\operatorname{Ind}^{S_4}_{S_3}S^{(2,1)}_{\mathbb C}\cong S^{(3,1)}_{\mathbb C}\oplus S^{(2,2)}_{\mathbb C}\oplus S^{(2,1,1)}_{\mathbb C}$,
  and the standard tableaux counts $f^{(3,1)}=3$, $f^{(2,2)}=2$,
  $f^{(2,1,1)}=3$ give $3+2+3=8=4\cdot2=[S_4:S_3]\,f^{(2,1)}$, as they must.
  Similarly $\operatorname{Ind}^{S_4}_{S_3}S^{(3)}_{\mathbb C}\cong S^{(4)}_{\mathbb C}\oplus S^{(3,1)}_{\mathbb C}$
  with $1+3=4=4\cdot1$.

- **Where semisimplicity enters.** Both the complete reducibility of the
  induced module (step 2.4) and the splitting of the restriction filtration
  used in [F3] require Maschke's theorem over $\mathbb C$; the multiplicity-free
  statement above is therefore a characteristic-zero result. The corresponding
  statement over fields of positive characteristic is a different theorem, and
  the two directions of the rule are mirror images of one another along the
  add/remove-one-node correspondence of step 4.1.
