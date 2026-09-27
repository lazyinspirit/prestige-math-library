---
id: def-weyl-group-and-length-for-finite-gl-n
kind: definition
title: Permutation Weyl group and inversion length
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-standard-subgroups-of-gl-n-over-a-finite-field, def-compositions-partial-flags-and-standard-parabolics, def-symmetric-group, def-subgroup, def-normal-subgroup, def-quotient-group, lem-symmetric-group-is-a-group, thm-matrix-multiplication-laws, cor-general-linear-group-is-a-group, thm-adjacent-transpositions-generate-the-symmetric-group]
justified_by: []
aliases: []
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Example 4.5 and Example 8.4, printed pp. 18 and 30"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Sections 4.7 and 5.3, printed pp. 38-39 and 46"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
---

## Definition

**Permutation matrices and the monomial subgroup.** Let $n\ge1$, let $q$ be a
prime power, let $G=\operatorname{GL}_n(\mathbb F_q)$ with diagonal torus $T$ and
standard flag $V_0\subsetneq\cdots\subsetneq V_n$ as in
[[def-standard-subgroups-of-gl-n-over-a-finite-field]], and let
$S_n:=\operatorname{Sym}(\{1,\dots,n\})$ be the symmetric group of the set
$\{1,\dots,n\}$ ([[def-symmetric-group]], [[lem-symmetric-group-is-a-group]]),
so that permutations are composed as functions and an element $\sigma\in S_n$ is
written in one-line notation as the list $\sigma(1),\sigma(2),\dots,\sigma(n)$.

For $\sigma\in S_n$ the **permutation matrix** $P_\sigma\in G$ is the matrix with
$$(P_\sigma)_{ij}=\begin{cases}1,&i=\sigma(j),\\0,&i\ne\sigma(j),\end{cases}$$
that is, the $j$-th column of $P_\sigma$ is the standard basis vector
$e_{\sigma(j)}$, so that the $j$-th column has its unique entry $1$ in row
$\sigma(j)$. In particular $P_{\mathrm{id}}=I_n$, and multiplying matrices gives
$$P_\sigma P_\tau=P_{\sigma\circ\tau}\qquad(\sigma,\tau\in S_n),$$
because the $(i,k)$ entry of $P_\sigma P_\tau$ is $\sum_j(P_\sigma)_{ij}(P_\tau)_{jk}$,
which is $1$ exactly when $j=\tau(k)$ and $i=\sigma(j)=\sigma(\tau(k))$, and $0$
otherwise. A matrix $m\in G$ is **monomial** when every row and every column of
$m$ has exactly one nonzero entry. The **monomial subgroup** of $G$ is
$$N:=\{\,m\in G:m\text{ is monomial}\,\}.$$
Every $m\in N$ has a unique expression
$$m=t\,P_\sigma,\qquad t=\operatorname{diag}(t_1,\dots,t_n)\in T,\quad\sigma\in S_n,$$
namely with $\sigma(j)$ the row of the nonzero entry of column $j$ and
$t_{\sigma(j)}$ that entry; conversely $tP_\sigma$ is monomial with nonzero
entries $t_i$ in the rows and columns determined by $\sigma$. Consequently
$$N=T\cdot\{P_\sigma:\sigma\in S_n\}=\{P_\sigma t':\sigma\in S_n,\ t'\in T\},$$
since diagonal matrices may be moved across a permutation matrix.
$N$ is a subgroup of $G$: it contains $I_n=P_{\mathrm{id}}$, the product
$m m'$ of monomial matrices is monomial because the unique nonzero entry of each
column of $m'$ is transported to a unique nonzero entry of the corresponding
column of $mm'$, and the inverse of a monomial matrix is monomial since
permuting and rescaling rows and columns can be undone. Moreover $T\le N$ and
$T\mathrel{\trianglelefteq}N$.

**The Weyl group.** Define the **sign permutation** of a monomial matrix by
$$w:N\longrightarrow S_n,\qquad w(tP_\sigma):=\sigma,$$
which is well defined by the uniqueness of the decomposition. It is a group
homomorphism: if $m=tP_\sigma$ and $m'=t'P_\tau$, then
$t''':=P_\sigma t'P_\sigma^{-1}$ is diagonal, so
$mm'=t\,t'''\,P_\sigma P_\tau=t\,t'''\,P_{\sigma\tau}$ by
[[thm-matrix-multiplication-laws]], whence $w(mm')=\sigma\circ\tau=w(m)w(m')$.
Its kernel is exactly $T$, since $w(tP_\sigma)=\mathrm{id}$ says
$\sigma=\mathrm{id}$ and then $tP_{\mathrm{id}}=t$. Being a surjective
homomorphism, $w$ has kernel $T\mathrel{\trianglelefteq}N$ by
[[def-normal-subgroup]], and the induced map on cosets
$$W:=N/T\longrightarrow S_n,\qquad mT\longmapsto w(m),$$
is well defined (left multiplication by an element of $T=\ker w$ does not change
$w$) and is an isomorphism of groups, with inverse $\sigma\mapsto P_\sigma T$;
here $N/T$ is the quotient group of [[def-quotient-group]]. We call
$$W=N/T\cong S_n$$
the **(split) Weyl group** of $G$. Note that $W$ is defined as a quotient of the
monomial subgroup $N$ and **not** as the quotient $N_G(T)/T$ of the normaliser
of $T$ inside $G$: at $q=2$ the torus $T$ is trivial and $N_G(T)/T$ is all of
$G$, while $N/T\cong S_n$ still holds. For $\sigma\in S_n$ we write $w_\sigma$ for
the class of $P_\sigma$ in $W$, so that $w_\sigma w_\tau=w_{\sigma\tau}$ and the
isomorphism above sends $w_\sigma$ to $\sigma$; we write $1:=w_{\mathrm{id}}$
for the identity of $W$.

**Simple reflections.** For $1\le i<n$ let $s_i:=(i\ i+1)\in S_n$ be the
adjacent transposition of $i$ and $i+1$
([[def-symmetric-group]]), and put
$$\mathbf s_i:=w_{s_i}=P_{s_i}T\in W .$$
The elements $\mathbf s_1,\dots,\mathbf s_{n-1}$ are the **simple reflections** of
$W$; they generate $W$, because the adjacent transpositions generate $S_n$
([[thm-adjacent-transpositions-generate-the-symmetric-group]]) and $w$ is
surjective.

**Inversion length.** For $\sigma\in S_n$ the **inversion set** and **length**
are
$$\operatorname{Inv}(\sigma):=\{\,(i,j):1\le i<j\le n,\ \sigma(i)>\sigma(j)\,\}, \qquad \ell(\sigma):=\#\operatorname{Inv}(\sigma),$$
and for $w_\sigma\in W$ we set $\ell(w_\sigma):=\ell(\sigma)$, which is
well defined because every element of $W$ has the form $w_\sigma$ for exactly
one $\sigma$. Thus $\ell(1)=0$ and $\ell(w_{s_i})=1$ for every $i$, a single
inversion being created by the transposition of adjacent entries. Length is
invariant under inversion of the permutation: the map
$(i,j)\mapsto(\sigma(j),\sigma(i))$ is a bijection from $\operatorname{Inv}(\sigma)$
to $\operatorname{Inv}(\sigma^{-1})$ — if $i<j$ and $\sigma(i)>\sigma(j)$, then
setting $a:=\sigma(j)<b:=\sigma(i)$ gives $a<b$ while
$\sigma^{-1}(a)=j>i=\sigma^{-1}(b)$ — hence
$$\ell(w^{-1})=\ell(w)\qquad(w\in W).$$
We stress that $\ell$ is here defined combinatorially as an inversion count and
that no Coxeter-theoretic description of it as a minimal word length is used on
this page.

**Parabolic Weyl subgroups.** Let $\alpha=(a_1,\dots,a_r)$ be a composition of
$n$ with blocks $I_1,\dots,I_r$ and standard parabolic $P_\alpha$ and Levi
$L_\alpha$ ([[def-compositions-partial-flags-and-standard-parabolics]]). The
**standard parabolic subgroup of $W$** attached to $\alpha$ is
$$W_\alpha:=\{\,\sigma\in S_n:\sigma(I_i)=I_i\text{ for every }1\le i\le r\,\},$$
the group of permutations preserving each block of $\alpha$ as a set; it is
isomorphic to $S_{a_1}\times\cdots\times S_{a_r}$ by restriction to the blocks,
and its elements are exactly the $\sigma$ whose length is the sum of the lengths
of the restrictions $\sigma|_{I_i}$. In terms of the monomial subgroup, a
monomial matrix lies in $P_\alpha$ exactly when its permutation matrix has
$\sigma(I_i)=I_i$ for all $i$, that is, exactly when $\sigma\in W_\alpha$;
consequently
$$N\cap P_\alpha=N\cap L_\alpha=T\cdot\{\,P_\sigma:\sigma\in W_\alpha\,\}, \qquad W_\alpha=w(N\cap P_\alpha),$$
and $\{P_\sigma:\sigma\in W_\alpha\}$ is a complement to $T$ in $N\cap P_\alpha$: its intersection with $T$ is $\{I_n\}$ and every element has the unique form $tP_\sigma$. The two extreme
cases are
$$W_{(n)}=S_n,\qquad W_{(1^n)}=\{1\},$$
corresponding to $P_{(n)}=G=L_{(n)}$ and to $P_{(1^n)}=B$ with $L_{(1^n)}=T$
and $W_{(1^n)}=w(T)=\{1\}$: the single block of $(n)$ is preserved by every
permutation, while each singleton block of $(1^n)$ must be fixed, so only the
identity survives.
