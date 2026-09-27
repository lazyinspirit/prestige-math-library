---
id: def-coordinate-parabolics-for-ordered-partitions
kind: definition
title: Ordered partitions and coordinate parabolics
status: draft
origin: pipeline
pipeline_run: frontier-35-ten-categories
deps: [def-compositions-partial-flags-and-standard-parabolics, thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq, def-standard-subgroups-of-gl-n-over-a-finite-field, def-weyl-group-and-length-for-finite-gl-n, thm-matrix-multiplication-laws, def-matrix-product-and-identity-matrix, def-subgroup, def-normal-subgroup, def-group-action, def-symmetric-group, lem-symmetric-group-is-a-group, def-linear-basis, thm-complete-flags-form-gl-n-over-b, def-linear-subspace, thm-dimension-of-a-linear-subspace, thm-invertible-matrix-theorem, cor-general-linear-group-is-a-group, def-harish-chandra-induction-and-restriction-for-finite-gl-n]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  scraped: []
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Example 8.4 and the proof of Lemma 9.9, printed pp. 30 and 40"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Sections 3.5, 4.7 and 5.2, printed pp. 37-39 and 41-43"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
verification:
  precheck: n/a
---

## Definition

**Ordered partitions.** An **ordered partition** of $\{1,\dots,n\}$ is a finite
list $\gamma=(S_1,\dots,S_r)$ of nonempty pairwise disjoint subsets
$S_1,\dots,S_r\subseteq\{1,\dots,n\}$ with
$S_1\cup\cdots\cup S_r=\{1,\dots,n\}$. Its members are the **blocks** of
$\gamma$, its **length** is $r$ (so that $1\le r\le n$ for $n\ge1$), and for
$1\le k\le n$ we write $\operatorname{blk}_\gamma(k)$ for the unique index with
$k\in S_{\operatorname{blk}_\gamma(k)}$, so that $k$ lies in an earlier block
than $l$ exactly when $\operatorname{blk}_\gamma(k)<\operatorname{blk}_\gamma(l)$.
A composition $\alpha=(a_1,\dots,a_r)$ of $n$ is the same datum as the ordered
partition $(I_1,\dots,I_r)$ whose blocks are its consecutive intervals
$I_i=\{\,d_{i-1}+1,\dots,d_i\,\}$
([[def-compositions-partial-flags-and-standard-parabolics]]); every ordered
partition is of this restricted form after relabelling, and the two notions are
compared below. The extreme ordered partitions are the one-block partition
$(\{1,\dots,n\})$ and the all-singleton partition
$(\{1\},\{2\},\dots,\{n\})$, which correspond to the compositions $(n)$ and
$(1^n)$.

**Coordinate parabolics.** Let $n\ge1$, let $q$ be a prime power, put
$G=\operatorname{GL}_n(\mathbb F_q)$ with diagonal torus $T$ and standard basis
$e_1,\dots,e_n$ ([[def-standard-subgroups-of-gl-n-over-a-finite-field]]), and
let $\gamma=(S_1,\dots,S_r)$ be an ordered partition of $\{1,\dots,n\}$. Define
$$P_\gamma:=\{\,g\in G:g_{kl}=0\text{ whenever }\operatorname{blk}_\gamma(k)>\operatorname{blk}_\gamma(l)\,\},$$
$$L_\gamma:=\{\,g\in P_\gamma:g_{kl}=0\text{ whenever }\operatorname{blk}_\gamma(k)\ne\operatorname{blk}_\gamma(l)\,\},$$
$$U_\gamma:=\{\,g\in P_\gamma:g_{kk}=1\text{ for all }k,\text{ and }g_{kl}=0\text{ whenever }k\ne l\text{ and }\operatorname{blk}_\gamma(k)\ge\operatorname{blk}_\gamma(l)\,\},$$
the **coordinate parabolic**, its **coordinate Levi subgroup** and its
**coordinate unipotent radical** of type $\gamma$. For a composition $\alpha$
these are the standard subgroups $P_\alpha,L_\alpha,U_\alpha$ of
[[def-compositions-partial-flags-and-standard-parabolics]]. We also call
$$F^{(\gamma)}_i:=\langle e_j:j\in S_1\cup\cdots\cup S_i\rangle\qquad(0\le i\le r)$$
the **coordinate flag of type $\gamma$**, so that $F^{(\gamma)}_\bullet$ is a
strictly increasing chain of subspaces with
$\dim_{\mathbb F_q}F^{(\gamma)}_i=|S_1|+\cdots+|S_i|$, and $P_\gamma$ is the
stabiliser in $G$ of $F^{(\gamma)}_\bullet$: a matrix $p\in G$ satisfies
$p[F^{(\gamma)}_i]\subseteq F^{(\gamma)}_i$ for all $i$ exactly when, for every
$l$ with $\operatorname{blk}_\gamma(l)\le i$, the $l$-th column of $p$ has no
nonzero entry in a block $S_{i'}$ with $i'>i$, which is exactly
$p_{kl}=0$ whenever $\operatorname{blk}_\gamma(k)>\operatorname{blk}_\gamma(l)$
(the argument is that of
[[def-compositions-partial-flags-and-standard-parabolics]], where the same
computation is carried out for consecutive blocks, and it uses only the block
shape); since $p$ is injective and the chain is finite with
$\dim_{\mathbb F_q}p[F^{(\gamma)}_i]=\dim_{\mathbb F_q}F^{(\gamma)}_i$
([[thm-invertible-matrix-theorem]], [[def-linear-subspace]]), the inclusions are
equalities. In particular $P_\gamma$ is a subgroup of $G$, since the stabiliser
of a subset of the flag is a subgroup
([[def-subgroup]], [[def-group-action]]), and the diagonal torus satisfies
$T\le L_\gamma\le P_\gamma$.

**Change of coordinates.** Let $\sigma\in S_n$ and let
$u:=P_\sigma\in G$ be the associated permutation matrix
([[def-weyl-group-and-length-for-finite-gl-n]]), so that
$(u^{-1}gu)_{ij}=g_{\sigma(i),\sigma(j)}$ for every matrix $g$
([[thm-matrix-multiplication-laws]],
[[def-matrix-product-and-identity-matrix]]). For an ordered partition
$\gamma=(S_1,\dots,S_r)$ put $\sigma(\gamma):=(\sigma(S_1),\dots,\sigma(S_r))$,
again an ordered partition of $\{1,\dots,n\}$; then
$$\operatorname{blk}_{\sigma(\gamma)}(k)=\operatorname{blk}_\gamma(\sigma^{-1}(k))\qquad(1\le k\le n),$$
and applying the entry formula for conjugation to the three defining conditions
above gives
$$P_{\sigma(\gamma)}=uP_\gamma u^{-1},\qquad L_{\sigma(\gamma)}=uL_\gamma u^{-1},\qquad U_{\sigma(\gamma)}=uU_\gamma u^{-1}.$$
For instance $g\in uU_\gamma u^{-1}$ says that
$(u^{-1}gu)_{kk}=1$ and $(u^{-1}gu)_{kl}=0$ whenever $k\ne l$ and
$\operatorname{blk}_\gamma(k)\ge\operatorname{blk}_\gamma(l)$, which by the
displayed formula for $\operatorname{blk}_{\sigma(\gamma)}$ is the defining
condition for $U_{\sigma(\gamma)}$; the other two computations are identical.
Since a composition $\alpha$ is an ordered partition with consecutive blocks,
and since an arbitrary ordered partition $\gamma$ becomes a composition after
the relabelling that replaces every block by its position, the change of
coordinates shows that the coordinate parabolics of the ordered partitions are
exactly the conjugates $gP_\alpha g^{-1}$ of the standard parabolics by the
permutation matrices, and in particular they are split parabolic subgroups in
the sense of
[[def-harish-chandra-induction-and-restriction-for-finite-gl-n]].

**Consequences of the change of coordinates.** Fix an ordered partition
$\gamma=(S_1,\dots,S_r)$, choose the composition
$\alpha:=(|S_1|,\dots,|S_r|)$ of $n$, and let $\sigma\in S_n$ be the unique
permutation with $\sigma(I_i)=S_i$ for all $i$ that is increasing on each block
$I_i$; then $\gamma=\sigma(\alpha)$, and because
$P_\alpha=L_\alpha\ltimes U_\alpha$ with $U_\alpha\trianglelefteq P_\alpha$
([[thm-levi-decomposition-of-standard-parabolics-in-gl-n-fq]]), conjugation by
the permutation matrix $u=P_\sigma$ maps this decomposition to
$$P_\gamma=L_\gamma\ltimes U_\gamma,\qquad U_\gamma\trianglelefteq P_\gamma,\qquad L_\gamma\cap U_\gamma=\{I_n\},$$
because conjugation is an automorphism of $G$ and carries the block diagonal
matrices of type $\alpha$ onto those of type $\gamma$
([[cor-general-linear-group-is-a-group]], [[def-normal-subgroup]]); moreover
$P_\gamma$ is the stabiliser of the coordinate flag $F^{(\gamma)}_\bullet$, as
computed above. For the Weyl group, a permutation $\rho\in S_n$ satisfies
$\rho(S_i)=S_i$ for all $i$ exactly when $(\sigma^{-1}\rho\sigma)(I_i)=I_i$ for
all $i$, so with
$$W_\gamma:=\{\,\rho\in S_n:\rho(S_i)=S_i\text{ for every }1\le i\le r\,\}$$
one has $W_\gamma=\sigma W_\alpha\sigma^{-1}$ in the group $S_n$, where
$W_\alpha$ is the parabolic Weyl subgroup of
[[def-weyl-group-and-length-for-finite-gl-n]]; combining that criterion with the
change of coordinates shows that a monomial matrix lies in $P_\gamma$ exactly
when its permutation lies in $W_\gamma$, so that
$$N\cap P_\gamma=T\cdot\{\,P_\rho:\rho\in W_\gamma\,\}$$
for the monomial subgroup $N$ of [[def-weyl-group-and-length-for-finite-gl-n]].
Finally, varying only the order of the blocks leaves the Levi unchanged: if
$\gamma'$ is obtained from $\gamma$ by permuting the list $(S_1,\dots,S_r)$,
then $\operatorname{blk}_{\gamma'}(k)\ne\operatorname{blk}_{\gamma'}(l)$ holds
exactly when $\operatorname{blk}_\gamma(k)\ne\operatorname{blk}_\gamma(l)$,
namely when $k,l$ lie in different blocks, so $L_{\gamma'}=L_\gamma$; the
unipotent radical $U_\gamma$ on the other hand depends on the order of the
blocks, as the case $r=2$ shows.

## Remarks

- **Coordinate parabolics contain the diagonal torus, and for $q>2$ they are
  all the parabolics that do.** We have $T\le L_\gamma\le P_\gamma$ from the
  definitions above. Conversely let $q>2$ and let $P\le G$ be a parabolic
  subgroup of $G$ containing $T$, say $P=gP_\alpha g^{-1}$ for some composition
  $\alpha$ and some $g\in G$; since $P_\alpha$ stabilises the standard partial
  flag $W_\bullet^{(\alpha)}$ of type $\alpha$
  ([[def-compositions-partial-flags-and-standard-parabolics]]), the group $P$
  is the stabiliser of the partial flag
  $\mathcal F:=gW^{(\alpha)}_\bullet$, and $T\le P$ means that every member of
  $\mathcal F$ is $T$-stable. Since $q>2$, choose
  $\lambda\in\mathbb F_q^\times$ with $\lambda\ne1$. For each $i$ let
  $t_i\in T$ act by $\lambda$ on $e_i$ and by $1$ on every other coordinate
  line. If $W\subseteq V$ is $T$-stable and $v=\sum_jv_je_j\in W$, then
  $(t_i-1)v=(\lambda-1)v_ie_i\in W$, hence $v_ie_i\in W$ because
  $\lambda-1$ is invertible. Thus $W$ is spanned by the coordinate vectors
  it contains; therefore every member of $\mathcal F$
  is a coordinate subspace, and the resulting strictly increasing chain of
  coordinate subspaces is the coordinate flag of a unique ordered partition
  $\gamma$ of $\{1,\dots,n\}$ with $P=P_\gamma$. At $q=2$ the conclusion
  fails, and not merely for want of proof: the torus $T$ is then the trivial
  group, so every parabolic contains it, while for $n=2$ the three Borels of
  $\operatorname{GL}_2(\mathbb F_2)\cong S_3$ are the upper triangular, the
  lower triangular and the stabiliser of the line
  $\langle e_1+e_2\rangle$; only the upper and lower triangular ones are
  coordinate parabolics, those of $(\{1\},\{2\})$ and $(\{2\},\{1\})$.
  Consequently the theory below is stated for coordinate parabolics, which is
  the class that the finite general linear group controls at every $q$; the
  larger class of all parabolics containing $T$ agrees with it whenever
  $q>2$.
- **Every block order is a choice.** Two ordered partitions with the same
  blocks in different orders give the same Levi and the same $W_\gamma$ but
  different parabolics $P_\gamma$; comparing the corresponding
  Harish-Chandra functors is the content of the parabolic-independence theorem
  of this page, and it is the reason the parabolics, not only the Levis, are
  carried as data in
  [[def-harish-chandra-induction-and-restriction-for-finite-gl-n]].
