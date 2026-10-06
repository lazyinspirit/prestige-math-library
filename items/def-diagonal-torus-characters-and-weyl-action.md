---
id: def-diagonal-torus-characters-and-weyl-action
kind: definition
title: "Diagonal torus characters and the Weyl action"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
deps:
  - def-standard-subgroups-of-gl-n-over-a-finite-field
  - def-weyl-group-and-length-for-finite-gl-n
  - def-symmetric-group
  - lem-symmetric-group-is-a-group
  - def-character-of-a-complex-representation
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Olivier Dudas and Jean Michel, Lectures on Finite Reductive Groups and Their Representations - Section 11.1 (T split, characters of the torus), printed pp. 45-46"
      url: "https://webusers.imj-prg.fr/~jean.michel/papiers/lectures_beijing_2015.pdf"
    - title: "Jay Taylor, Finite Reductive Groups - Section 5, the split torus and Weyl group, printed pp. 42-43"
      url: "https://pages.uoregon.edu/belias/WARTHOG/DLtheory/TaylorReductiveGroups.pdf"
    - title: "Masao Oi, Representation Theory of Finite Groups of Lie Type - Section 2.3, diagonal torus and characters $\\chi=\\chi_1\\boxtimes\\chi_2$, printed pp. 11-12"
      url: "https://masaooi.github.io/DL.pdf"
verification:
  precheck: n/a
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---

## Definition

Let $n\ge1$, let $q$ be a prime power, and put $G=\operatorname{GL}_n(\mathbb F_q)$
with diagonal torus $T$, upper triangular Borel $B=T\ltimes U$, monomial subgroup
$N$ and Weyl group $W=N/T\cong S_n$
([[def-standard-subgroups-of-gl-n-over-a-finite-field]],
[[def-weyl-group-and-length-for-finite-gl-n]]). For $w\in S_n$ let
$\dot w:=P_w\in G$ be the permutation matrix of $w$, so that
$\dot w^{-1}\,t\,\dot w$ is diagonal for every $t\in T$. A **character** of $T$ is
a group homomorphism $\chi:T\to\mathbb C^\times$; write
$\widehat T:=\operatorname{Hom}(T,\mathbb C^\times)$ for the group of characters,
with pointwise multiplication and the trivial character $1_{\widehat T}$.

**Coordinates.** Since $T\cong(\mathbb F_q^\times)^n$ via
$t=\operatorname{diag}(t_1,\dots,t_n)\mapsto(t_1,\dots,t_n)$, the assignment
$\chi\mapsto(\chi_1,\dots,\chi_n)$ with
$\chi(\operatorname{diag}(t_1,\dots,t_n))=\prod_{i=1}^n\chi_i(t_i)$ is a bijection
from $\widehat T$ onto the set of $n$-tuples of characters of
$\mathbb F_q^\times$; the $\chi_i$, given by
$\chi_i(a)=\chi(\operatorname{diag}(1,\dots,a,\dots,1))$ with $a$ in the $i$-th
position, are the **coordinates** of $\chi$, and the tuple of coordinates
determines $\chi$ by the displayed product formula.

**The Weyl action and equal-character blocks.** The group $S_n$ acts on
$\widehat T$ by
$$(w\cdot\chi)(t):=\chi(\dot w^{-1}t\dot w)\qquad(w\in S_n,\ \chi\in\widehat T,\ t\in T),$$
and for the coordinates this reads
$$(w\cdot\chi)_j=\chi_{w^{-1}(j)}\qquad(1\le j\le n):$$
the action permutes the coordinates. For $\chi\in\widehat T$ define the **Weyl
stabiliser** $W_\chi:=\{\,w\in S_n:w\cdot\chi=\chi\,\}$. A permutation $w$ lies in
$W_\chi$ exactly when $\chi_{w^{-1}(j)}=\chi_j$ for all $j$, that is, exactly when
$w$ preserves every level set $\{\,j:\chi_j=a\,\}$, $a\in\operatorname{Hom}(\mathbb F_q^\times,\mathbb C^\times)$. These
level sets, the orbits of $W_\chi$ on $\{1,\dots,n\}$, are the **equal-character
blocks** of $\chi$; they are the maximal subsets on which $\chi$ is constant. If
they have sizes $n_1,\dots,n_k$, with $n_1+\cdots+n_k=n$, then $W_\chi$ is the
Young subgroup $S_{n_1}\times\cdots\times S_{n_k}\le S_n$ of permutations
preserving each block, so that $|W_\chi|=\prod_{r=1}^kn_r!$.

**Intrinsic Coxeter system.** The intrinsic Coxeter generators of $W_\chi$ are the
transpositions of successive elements of each equal-character block, listed in
increasing order. They need not be adjacent transpositions of $S_n$: for
$\chi=(a,b,a)$ with $a\ne b$ the block $\{1,3\}$ produces the generator $(1\,3)$.
To record this system choose a permutation $\sigma\in S_n$ for which
$\eta:=\sigma\cdot\chi$ has each equal-character block contiguous, the blocks
being ordered by the first occurrence of their character in $\chi$ and the order
inside each block preserved; such a $\sigma$ is obtained by listing the blocks in
that order. Write $S_\eta$ for the set of ambient adjacent transpositions $s_i$
with $i,i+1$ inside one block of $\eta$, and put
$S_\chi:=\sigma^{-1}S_\eta\sigma$. Then $(W_\chi,S_\chi)$ is the Coxeter system
obtained by transporting the product system of the standard contiguous Young
subgroup $W_\eta$. The **intrinsic length** on $W_\chi$ is transported along this
identification from the length of the product system; it is not the ambient
inversion length $\ell$ of $S_n$, and $S_\chi$ need not consist of simple
reflections of $W$.

**Regular characters.** Call $\chi$ **regular** when its coordinates are pairwise
distinct, that is, when every equal-character block has size $1$; then
$W_\chi=1$, $k=n$ and $S_\chi=\varnothing$. At the other extreme, since
$\mathbb F_2^\times$ is the trivial group, for $q=2$ there is exactly one character
of $T$, and then $W_\chi=S_n$ and $k=1$.
