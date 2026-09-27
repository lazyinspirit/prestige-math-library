---
id: ex-grassmannians-as-maximal-parabolic-quotients
kind: example
title: Grassmannians as maximal parabolic quotients
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-compositions-partial-flags-and-standard-parabolics, thm-transitive-actions-are-coset-actions, thm-dimension-of-a-linear-subspace, def-standard-subgroups-of-gl-n-over-a-finite-field, def-group-action, def-finite-field-and-its-order, def-field, def-vector-space, def-linear-combination-and-span, def-linear-basis, def-matrix-product-and-identity-matrix, thm-matrix-multiplication-laws]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  scraped: []
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Example 8.4(a), printed p. 30"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Sections 3.5 and 4.7, printed pp. 37-39"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: pass
---

## Example

Let $q$ be a prime power, let $n\ge2$ and $1\le r<n$, put
$G=\operatorname{GL}_n(\mathbb F_q)$ and $V=\mathbb F_q^n$ with its standard
basis $e_1,\dots,e_n$
([[def-standard-subgroups-of-gl-n-over-a-finite-field]]), and let
$\alpha=(r,n-r)$ be the two-part composition of $n$ attached to $r$. A partial
flag of type $\alpha$ is a chain $0=F_0\subsetneq F_1\subsetneq F_2=V$ with
$\dim_{\mathbb F_q}F_1=r$ and $F_2=V$ forced, so such a flag is determined by
its member $F_1$. The type-$\alpha$ partial flags are therefore in bijection
with the $r$-dimensional subspaces of $V$, the points of the **Grassmannian**
$\operatorname{Gr}(r,n)$. With the standard partial flag
$W_1=\langle e_1,\dots,e_r\rangle$, $W_2=V$ of type $\alpha$, the orbit map
$$G/P_\alpha\longrightarrow\operatorname{Gr}(r,n),\qquad gP_\alpha\longmapsto g(W_1)=\langle g(e_1),\dots,g(e_r)\rangle,$$
is a $G$-equivariant bijection onto the $r$-dimensional subspaces, for the
natural left action of $G$ on subspaces
([[def-compositions-partial-flags-and-standard-parabolics]],
[[thm-transitive-actions-are-coset-actions]], [[def-group-action]]), and the unquotiented orbit map $G\to\operatorname{Gr}(r,n)$,
$g\mapsto g(W_1)$, has fibres the left cosets of the stabiliser of $W_1$, which is
$$P_\alpha=P_{(r,n-r)}=\Bigl\{\,p\in G:\ p=\begin{pmatrix}A&B\\0&D\end{pmatrix},\ A\in M_r(\mathbb F_q),\ D\in M_{n-r}(\mathbb F_q),\ B\in M_{r\times(n-r)}(\mathbb F_q)\,\Bigr\}.$$
Among the standard parabolics $P_\beta$, this one is maximal: the only
composition $\beta$ of $n$ with $P_\beta\supsetneq P_\alpha$ is $\beta=(n)$,
for which $P_{(n)}=G$. For $r=1$ the Grassmannian is the projective space of
lines of $V$, and counting the nonzero vectors of $V$ line by line gives
$$\#\operatorname{Gr}(1,n)=\frac{q^n-1}{q-1}=q^{n-1}+q^{n-2}+\cdots+q+1,$$
so that $\mathbb F_q^2$ has $q+1$ lines and $\mathbb F_q^3$ has $q^2+q+1$.

## Facts & Assumptions

**Given:** A prime power $q$, integers $n\ge2$ and $1\le r<n$, the space $V=\mathbb F_q^n$ with standard basis $e_1,\dots,e_n$, the group $G=\operatorname{GL}_n(\mathbb F_q)$, and the composition $\alpha=(r,n-r)$ of $n$.

[F1] The standard flag of $V=\mathbb F_q^n$ consists of the coordinate subspaces $V_j=\langle e_1,\dots,e_j\rangle$ with $\dim_{\mathbb F_q}V_j=j$, and $G=\operatorname{GL}_n(\mathbb F_q)$ is the group of invertible $n\times n$ matrices over $\mathbb F_q$ ([[def-standard-subgroups-of-gl-n-over-a-finite-field]]).

[F2] A composition $\alpha$ of $n$ has blocks $I_i=\{\,d_{i-1}+1,\dots,d_i\,\}$ and a block map $\operatorname{blk}$; a partial flag of type $\alpha$ is a strictly increasing chain $0=F_0\subsetneq\cdots\subsetneq F_r=V$ with $\dim_{\mathbb F_q}F_i=d_i$; the standard partial flag is $W_i=V_{d_i}$; a matrix $p\in G$ lies in the standard parabolic $P_\alpha$ exactly when $p_{kl}=0$ for all $k,l$ with $\operatorname{blk}(k)>\operatorname{blk}(l)$, and $P_{(n)}=G$ while $P_{(1^n)}=B$ is the standard Borel subgroup; the group $G$ acts on the set $\mathcal F_\alpha$ of partial flags of type $\alpha$ by $g\cdot F_\bullet=(g(F_0),\dots,g(F_r))$, this action is transitive, the stabiliser of the standard partial flag is $P_\alpha$, and $gP_\alpha\mapsto g\cdot W_\bullet^{(\alpha)}$ is a $G$-equivariant bijection $G/P_\alpha\to\mathcal F_\alpha$ ([[def-compositions-partial-flags-and-standard-parabolics]], [[def-group-action]], [[thm-transitive-actions-are-coset-actions]]).

[F3] If $U\subseteq W$ are linear subspaces of a finite-dimensional vector space and $\dim U=\dim W$, then $U=W$; moreover every linearly independent subset of a finite-dimensional space is contained in a basis, so a nonzero vector spans a $1$-dimensional subspace ([[thm-dimension-of-a-linear-subspace]], [[def-linear-basis]]).

[F4] The span of a set is the intersection of all linear subspaces containing it, and for a linear map $g$ and vectors $v_1,\dots,v_k$ one has $g(\langle v_1,\dots,v_k\rangle)=\langle g(v_1),\dots,g(v_k)\rangle$ ([[def-linear-combination-and-span]], [[def-linear-basis]]).

[F5] For matrices over a field, $(AB)_{il}=\sum_{j=1}^{k}a_{ij}b_{jl}$ when the shapes match, and $I_n$ is the identity matrix with entries $\delta_{kl}$ ([[def-matrix-product-and-identity-matrix]], [[thm-matrix-multiplication-laws]]).

[F6] The finite field $\mathbb F_q$ has exactly $q$ elements, so $V=\mathbb F_q^n$ has $q^n$ elements; and in a vector space over a field, $\lambda v=0$ with $v\ne0$ forces $\lambda=0$, while $\lambda v=\mu v$ forces $\lambda=\mu$ ([[def-finite-field-and-its-order]], [[def-field]], [[def-vector-space]]).

## Verification

**Proof technique:** direct.

1.1 The composition $\alpha=(r,n-r)$ has length $2$, partial sums $d_1=r$ and $d_2=n$, and blocks $I_1=\{1,\dots,r\}$, $I_2=\{r+1,\dots,n\}$; hence a partial flag of type $\alpha$ is a chain $0=F_0\subsetneq F_1\subsetneq F_2=V$ with $\dim_{\mathbb F_q}F_1=r$, and its last member is forced to be $V$. Consequently $F_\bullet\mapsto F_1$ is a bijection from $\mathcal F_\alpha$ onto the set $\operatorname{Gr}(r,n)$ of $r$-dimensional subspaces of $V$, whose inverse sends $E$ to the chain $0\subsetneq E\subsetneq V$; the standard partial flag is $W_1=V_r=\langle e_1,\dots,e_r\rangle$, $W_2=V_n=V$. [given, F1, F2]

1.2 The entry criterion of [F2] for $\alpha=(r,n-r)$ reads $p_{kl}=0$ whenever $\operatorname{blk}(k)>\operatorname{blk}(l)$, that is, whenever $k\ge r+1$ and $l\le r$; hence $P_\alpha$ consists exactly of the matrices $p\in G$ with zero bottom-left block, that is, of the invertible block matrices $\begin{pmatrix}A&B\\0&D\end{pmatrix}$ with $A\in M_r(\mathbb F_q)$, $D\in M_{n-r}(\mathbb F_q)$ and arbitrary $B\in M_{r\times(n-r)}(\mathbb F_q)$. In particular $P_\alpha$ is the stabiliser of $W_1$, because $W_2=V$ is fixed by every element of $G$ and the stabiliser of the standard partial flag is $P_\alpha$ by [F2]. [F1, F2]

1.3 **Maximality among standard parabolics.** For a composition $\beta$ of $n$ put $T(\beta):=\{\,(k,l):\operatorname{blk}_\beta(k)>\operatorname{blk}_\beta(l)\,\}$, so that by the entry criterion of [F2] a matrix $p\in G$ lies in $P_\beta$ exactly when $p_{kl}=0$ for all $(k,l)\in T(\beta)$. For $k\ne l$ let $\tau_{kl}(c):=I_n+c\,e_ke_l^{\mathsf T}$ be the elementary matrix with the single off-diagonal entry $c$ in position $(k,l)$; by [F5] one has $\tau_{kl}(c)\tau_{kl}(-c)=I_n$, so $\tau_{kl}(c)\in G$, and $\tau_{kl}(c)\in P_\beta$ if and only if $(k,l)\notin T(\beta)$ or $c=0$; taking $c=1$, the matrix $\tau_{kl}(1)$ lies in $P_\beta$ exactly when $(k,l)\notin T(\beta)$. [F2, F5]

2.1 Composing the bijection $gP_\alpha\mapsto g\cdot W_\bullet^{(\alpha)}$ of [F2] with the identification $\mathcal F_\alpha\to\operatorname{Gr}(r,n)$, $F_\bullet\mapsto F_1$, of step 1.1 gives the map $\varphi(gP_\alpha):=g(W_1)=\langle g(e_1),\dots,g(e_r)\rangle$; it is a bijection $G/P_\alpha\to\operatorname{Gr}(r,n)$ by [F2] and step 1.1, it is well defined and has singleton fibres, while the unquotiented map $g\mapsto g(W_1)$ has fibres the left cosets of $P_\alpha$ by step 1.2, and it is $G$-equivariant: $\varphi(x\cdot gP_\alpha)=\varphi(xgP_\alpha)=(xg)(W_1)=x(g(W_1))=x\cdot\varphi(gP_\alpha)$, where the action on $\operatorname{Gr}(r,n)$ is the natural one induced by the action on chains. Thus the $r$-dimensional subspaces of $V$ are the left cosets of $P_\alpha$ in $G$, with $gP_\alpha\leftrightarrow g(W_1)$, and $\varphi$ is an isomorphism of $G$-sets. [step 1.1, step 1.2, F2, F4]

2.2 If $(k,l)\in T(\beta)$ but $(k,l)\notin T(\alpha)$, then $\tau_{kl}(1)$ lies in $P_\alpha$ but not in $P_\beta$ by step 1.3, so $P_\beta\not\supseteq P_\alpha$; therefore $P_\beta\supseteq P_\alpha$ forces $T(\beta)\subseteq T(\alpha)$. Conversely $T(\beta)\subseteq T(\alpha)$ means that every matrix vanishing on $T(\alpha)$ vanishes on $T(\beta)$, that is, $P_\alpha\subseteq P_\beta$; hence $$P_\beta\supseteq P_\alpha\iff T(\beta)\subseteq T(\alpha).$$ [step 1.3, F2]

3.1 The inclusion $T(\beta)\subseteq T(\alpha)$ holds if and only if every block of $\alpha$ is contained in a block of $\beta$: if $k<l$ lie in a common block of $\alpha$ then $(l,k)\notin T(\alpha)$, so $(l,k)\notin T(\beta)$, which by $\operatorname{blk}_\beta(l)\ge\operatorname{blk}_\beta(k)$ gives $\operatorname{blk}_\beta(l)=\operatorname{blk}_\beta(k)$, so the whole $\alpha$-block lies in one $\beta$-block; conversely, if every $\alpha$-block lies in a $\beta$-block, then $\operatorname{blk}_\beta(k)>\operatorname{blk}_\beta(l)$ puts the $\beta$-block of $k$ strictly to the right of that of $l$, hence the $\alpha$-block of $k$ strictly to the right of that of $l$, that is $\operatorname{blk}_\alpha(k)>\operatorname{blk}_\alpha(l)$. For $\alpha=(r,n-r)$ the blocks are the two nonempty intervals $I_1$ and $I_2$, so a composition $\beta$ such that every $\alpha$-block lies in a $\beta$-block is either $\beta=\alpha$ or $\beta=(n)$; by step 2.2 the standard parabolics containing $P_\alpha$ are therefore exactly $P_\alpha$ and $P_{(n)}=G$, so $P_{(r,n-r)}$ is maximal among the standard parabolics $P_\beta$. [step 2.2, F2]

3.2 For $r=1$ a subspace is a line exactly when it is one-dimensional; for $0\ne w\in V$ the span $\langle w\rangle=\{\lambda w:\lambda\in\mathbb F_q\}$ is such a line, since $w$ is linearly independent, and every line $L=\langle v\rangle$ with $0\ne v$ consists of $0$ together with the $q-1$ vectors $\lambda v$ with $\lambda\ne0$, which are pairwise distinct by [F6]. Every nonzero vector $w$ lies in the line $\langle w\rangle$, and if $w$ lies in lines $L,L'$ then $L=\langle w\rangle=L'$ by [F3], because both are one-dimensional subspaces containing the nonzero vector $w$; hence the $q^n-1$ nonzero vectors of $V$ are partitioned into the sets $L\smallsetminus\{0\}$ of the lines, each of size $q-1$. Counting gives $q^n-1=\#\operatorname{Gr}(1,n)\cdot(q-1)$, so $\#\operatorname{Gr}(1,n)=(q^n-1)/(q-1)=q^{n-1}+\cdots+q+1$; in particular $\mathbb F_q^2$ has $q+1$ lines and $\mathbb F_q^3$ has $q^2+q+1$ lines. [step 2.1, F3, F6]

4.1 At $n\ge2$ and $1\le r<n$ the quotient $G/P_{(r,n-r)}$ is in $G$-equivariant bijection with the Grassmannian $\operatorname{Gr}(r,n)$ of $r$-dimensional subspaces of $\mathbb F_q^n$ via $gP_\alpha\mapsto g\langle e_1,\dots,e_r\rangle$ (step 2.1), the subgroup $P_{(r,n-r)}$ is the stabiliser of $\langle e_1,\dots,e_r\rangle$ (step 1.2) and is maximal among the standard parabolics, its only standard overgroup being $P_{(n)}=G$ (step 3.1); in the extreme case $r=1$ the quotient is the projective space of lines, of cardinality $(q^n-1)/(q-1)$ (step 3.2). ∎ [step 1.2, step 2.1, step 3.1, step 3.2]

## Remarks

The quotient in this example is the one used by
[[def-compositions-partial-flags-and-standard-parabolics]] for a two-part
composition, read on the Grassmannian: the parabolic $P_{(r,n-r)}$ contains the
Borel subgroup $B=P_{(1^n)}$, and it stabilises the $r$-dimensional coordinate
subspace $\langle e_1,\dots,e_r\rangle$. The maximality proved in the
Verification section is maximality among the standard parabolics $P_\beta$ of
the page, that is, the assertion that no $P_\beta$ with $\beta\ne(n)$ lies
strictly between $P_{(r,n-r)}$ and $G$; maximality of $P_{(r,n-r)}$ among all
proper subgroups of $G$ is a different statement that is not needed here and is
not proved in this example.
