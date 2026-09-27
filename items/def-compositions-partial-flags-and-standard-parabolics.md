---
id: def-compositions-partial-flags-and-standard-parabolics
kind: definition
title: Compositions, partial flags, and standard parabolics
status: published
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-standard-subgroups-of-gl-n-over-a-finite-field, thm-complete-flags-form-gl-n-over-b, thm-dimension-of-a-linear-subspace, def-group-action, thm-transitive-actions-are-coset-actions, def-triangular-and-diagonal-matrices-over-a-commutative-ring, def-linear-basis, thm-matrix-multiplication-laws]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Example 8.4(a), printed p. 30"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Sections 3.5 and 4.7, printed pp. 37-39"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  audited: 2026-09-27
  precheck: n/a
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-27
---

## Definition

**Compositions.** A **positive-part composition of $n$**, or simply a
**composition**, is a finite list $\alpha=(a_1,\dots,a_r)$ of positive integers
with $a_1+\cdots+a_r=n$; here $r\ge0$ is the **length** of $\alpha$ and the
$a_i$ are its **parts**. A composition of $n$ thus records an ordered partition
of $n$ into nonzero parts, and for $n\ge1$ the length satisfies $1\le r\le n$.
Its **partial sums** are
$$d_i:=a_1+\cdots+a_i\qquad(0\le i\le r),$$
so that $0=d_0<d_1<\cdots<d_r=n$. The **blocks** of $\alpha$ are the disjoint
intervals of indices
$$I_i:=\{\,d_{i-1}+1,\ d_{i-1}+2,\ \dots,\ d_i\,\}\subseteq\{1,\dots,n\} \qquad(1\le i\le r),$$
which cover $\{1,\dots,n\}$ in order and have $|I_i|=a_i$. Two extreme cases
occur throughout: the one-part composition $\alpha=(n)$, with $r=1$ and block
$\{1,\dots,n\}$, and the all-singletons composition
$\alpha=(1,1,\dots,1)=(1^n)$, with $r=n$ and $I_i=\{i\}$. Write
$\operatorname{blk}(k):=i$ for the unique $i$ with $k\in I_i$, so that
$k<j$ with $\operatorname{blk}(k)<\operatorname{blk}(j)$ means that $k$ lies in a
strictly earlier block than $j$.

**Partial flags of type $\alpha$.** Fix the $n$-dimensional $\mathbb F_q$-space
$V=\mathbb F_q^n$ with standard basis $e_1,\dots,e_n$ and standard flag
$V_0\subsetneq V_1\subsetneq\cdots\subsetneq V_n=V$, where
$V_j=\langle e_1,\dots,e_j\rangle$ and $\dim_{\mathbb F_q}V_j=j$
([[def-standard-subgroups-of-gl-n-over-a-finite-field]]). A **partial flag of
type $\alpha$** is a strictly increasing chain of linear subspaces
$$0=F_0\subsetneq F_1\subsetneq\cdots\subsetneq F_r=V, \qquad \dim_{\mathbb F_q}F_i=d_i,$$
that is, a chain whose successive dimensions are the partial sums of $\alpha$;
equivalently, a chain of subspaces of $V$ in which exactly the dimensions
$d_0,\dots,d_r$ occur. The **standard partial flag of type $\alpha$** is
$$W_\bullet^{(\alpha)}:\quad W_i:=V_{d_i}=\langle e_1,\dots,e_{d_i}\rangle, \qquad \dim_{\mathbb F_q}W_i=d_i,$$
and its members are standard coordinate subspaces; the standard flag of
[[def-standard-subgroups-of-gl-n-over-a-finite-field]] is the special case
$\alpha=(1^n)$. Complete flags correspond to the composition
$(1,1,\dots,1)$ and arbitrary subspaces of dimension $r$ to $(r,n-r)$ with
$1\le r<n$.

**The standard parabolic subgroup of type $\alpha$.** A matrix
$p=(p_{kl})\in M_n(\mathbb F_q)$ is **upper block triangular of type $\alpha$**
when
$$p_{kl}=0\quad\text{whenever }\operatorname{blk}(k)>\operatorname{blk}(l),$$
that is, whenever $k$ lies in a strictly later block than $l$; entries with
$\operatorname{blk}(k)\le\operatorname{blk}(l)$ are unconstrained. Thus $p$ is
upper block triangular of type $\alpha$ exactly when it has the block shape
$$\begin{pmatrix} A_{11}&A_{12}&\cdots&A_{1r}\\ 0&A_{22}&\cdots&A_{2r}\\ \vdots&\ddots&\ddots&\vdots\\ 0&\cdots&0&A_{rr} \end{pmatrix}, \qquad A_{ij}\in M_{a_i\times a_j}(\mathbb F_q),$$
with square diagonal blocks $A_{ii}$ and arbitrary blocks above the diagonal.
The **standard parabolic subgroup of type $\alpha$** is
$$P_\alpha:=\{\,p\in G:p\text{ is upper block triangular of type }\alpha\,\},$$
and it is a subgroup of $G$: it contains $I_n$, and sums and products of upper
block triangular matrices, as well as inverses of invertible ones, are again
upper block triangular, because the block shape is stable under the block
matrix operations of [[thm-matrix-multiplication-laws]]. It is the stabiliser
in $G$ of the standard partial flag of type $\alpha$, as verified below, and the
two extreme cases are
$$P_{(n)}=G,\qquad P_{(1^n)}=B,$$
the second because "upper block triangular of type $(1^n)$" says
$p_{kl}=0$ for $k>l$, which is exactly the definition of an upper triangular
matrix ([[def-triangular-and-diagonal-matrices-over-a-commutative-ring]]),
whose invertible members form $B$ by
[[def-standard-subgroups-of-gl-n-over-a-finite-field]]. The subgroup $P_\alpha$
is the **standard parabolic** subgroup containing $B$, and $B\le P_\alpha\le G$
for every composition $\alpha$.

**Partial flags as the coset space $G/P_\alpha$.** The group $G$ acts on the set
$\mathcal F_\alpha$ of partial flags of type $\alpha$ by
$g\cdot F_\bullet:=(\,g(F_0),\dots,g(F_r)\,)$; this is a well-defined left action
because $g$ is an invertible linear map, so it preserves strict inclusions and
dimensions, with $I_n$ acting trivially. The action is transitive: given
$F_\bullet\in\mathcal F_\alpha$, choose vectors as follows. Extending a
basis of $F_{i-1}$ to a basis of $F_i$ is possible by the extension clause of
[[thm-dimension-of-a-linear-subspace]], and doing this successively for
$i=1,\dots,r$ produces an ordered basis $v_1,\dots,v_n$ of $V$ with
$$F_i=\langle v_1,\dots,v_{d_i}\rangle\qquad(0\le i\le r);$$
the linear map $g$ with $g(e_j)=v_j$ then has an invertible matrix in the
standard basis ([[thm-complete-flags-form-gl-n-over-b]], where the same argument
produces an element of $G$) and satisfies $g(W_i)=F_i$ for all $i$, that is,
$g\cdot W_\bullet^{(\alpha)}=F_\bullet$. The stabiliser of the standard partial
flag is $P_\alpha$: a matrix $p\in G$ satisfies $p(W_i)=W_i$ for all $i$ exactly
when $p(W_i)\subseteq W_i$ for all $i$, because $p$ is injective and
$\dim_{\mathbb F_q}p(W_i)=\dim_{\mathbb F_q}W_i=d_i$; and
$p(W_i)\subseteq W_i$ means that the column block $l$ of $p$ has no nonzero
entries below block $i$ whenever $\operatorname{blk}(l)\le i$, which is exactly
$p_{kl}=0$ for $\operatorname{blk}(k)>\operatorname{blk}(l)$. Consequently the
orbit map
$$G/P_\alpha\longrightarrow\mathcal F_\alpha,\qquad gP_\alpha\longmapsto g\cdot W_\bullet^{(\alpha)},$$
is a $G$-equivariant bijection by
[[thm-transitive-actions-are-coset-actions]] and
[[def-group-action]], so partial flags of type $\alpha$ are the left cosets of
$P_\alpha$.

**Block Levis and unipotent radicals.** With $\alpha$ fixed, the **standard
Levi subgroup** of type $\alpha$ is the group of block diagonal matrices
$$L_\alpha:=\{\,l\in P_\alpha:l_{kl}=0\text{ whenever }\operatorname{blk}(k)\ne\operatorname{blk}(l)\,\},$$
isomorphic to $\operatorname{GL}_{a_1}(\mathbb F_q)\times\cdots\times\operatorname{GL}_{a_r}(\mathbb F_q)$
by the block diagonal blocks, and the **standard unipotent radical** is
$$U_\alpha:=\{\,u\in P_\alpha:u_{kk}=1\text{ for all }k,\text{ and }u_{kl}=0\text{ whenever }k\ne l\text{ and }\operatorname{blk}(k)\ge\operatorname{blk}(l)\,\},$$
the upper block triangular matrices with identity diagonal blocks and the
off-diagonal blocks above the block diagonal. Thus $U_{(n)}=\{I_n\}$ and
$U_{(1^n)}=U$ is the standard maximal unipotent subgroup of $G$. The
decomposition $P_\alpha=L_\alpha\ltimes U_\alpha$ and the identification
$L_\alpha\cong\prod_{i\le r}\operatorname{GL}_{a_i}(\mathbb F_q)$ are proved in
[[thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq]].
