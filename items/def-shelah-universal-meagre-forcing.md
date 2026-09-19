---
id: def-shelah-universal-meagre-forcing
kind: definition
title: Shelah's universal-meagre forcing
status: draft
origin: pipeline
deps: [def-trees-and-bodies-on-discrete-alphabets, def-nowhere-dense-meagre-and-residual-subsets, def-forcing-preorder-compatibility-and-filter]
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Definition 7.7 and Claim 7.15, pp. 36 and 43"}
---

## Definition

The **universal-meagre forcing** $\mathrm{UM}$ consists of the pairs $(t,T)$ where
$T\subseteq 2^{<\omega}$ is a subtree in the sense of
[[def-trees-and-bodies-on-discrete-alphabets]] that is **perfect** — every node of
$T$ has two incomparable extensions in $T$ — and whose body $[T]$ is nowhere
dense in the sense of [[def-nowhere-dense-meagre-and-residual-subsets]]; and
$t=T\cap 2^{\le n}$ is its finite initial tree through some height $n$. In the
library order of [[def-forcing-preorder-compatibility-and-filter]], the relation
is

$$(t_2,T_2)\le(t_1,T_1)\quad\Longleftrightarrow\quad T_1\subseteq T_2 \text{ and }t_1=t_2\cap 2^{\le|t_1|}.$$

Thus a stronger condition enlarges the witness tree while permanently preserving
the recorded finite initial tree. A condition is determined by its witness tree
and its height; the recorded tree is a sub-tree of every witness tree extending
it, so the extension relation is reflexive and transitive. $\mathrm{UM}$ is
nonempty: the perfect tree $T_0=\{\sigma\in2^{<\omega}:\sigma$ contains no two
consecutive $1$s$\}$ is nowhere dense, because every cylinder contains a string
with two consecutive $1$s and hence no cylinder is contained in $[T_0]$.

**Basic properties used below.** Let $(t_1,T_1)$, $(t_2,T_2)$ be conditions with
$|t_1|\le|t_2|$. A common strengthening $(\tilde t,\tilde T)$ satisfies
$\tilde T\supseteq T_1\cup T_2$ and $\tilde t\cap 2^{\le|t_1|}=t_1$,
$\tilde t\cap 2^{\le|t_2|}=t_2$; hence two conditions are **necessary** for
compatibility: $t_1=t_2\cap 2^{\le|t_1|}$, and every node of $T_1$ of height at
most $|t_2|$ belongs to $t_2$. These two conditions are also sufficient: if
$T:=T_1\cup T_2$, then $T$ is a subtree, it is perfect because every node of $T$
splits inside whichever of $T_1,T_2$ contains it, its body
$[T]=[T_1]\cup[T_2]$ is nowhere dense as a finite union of closed nowhere-dense
sets, and $T\cap 2^{\le|t_2|}=t_2$, so $(t_2,T)$ is a common strengthening of
$(t_1,T_1)$ and $(t_2,T_2)$. The first condition alone is not sufficient: for
$T_1$ the tree of strings with no two consecutive $0$s and $T_2$ the tree of
strings with no two consecutive $1$s one has $|t_1|=1$, $|t_2|=2$,
$t_1=t_2\cap 2^{\le 1}=\{\emptyset,0,1\}$, yet $11\in T_1\cap 2^{\le 2}$ while
$11\notin t_2$, so the two conditions have no common strengthening. In particular
the conditions carrying one fixed recorded tree $t$ are pairwise compatible:
their witness trees agree on $2^{\le|t|}$, so their union is again a witness
tree, it is perfect because every node splits inside one of the two trees, it is
nowhere dense as a finite union of closed nowhere-dense sets, and its initial
tree through height $|t|$ is $t$. Two conditions whose recorded trees
disagree on the levels common to both heights are incomparable, since a common
strengthening would have to record both trees below the shorter height; distinct
perfect nowhere-dense trees can disagree on such a level, so compatibility of
$\mathrm{UM}$ is not automatic. For a condition $(t,T)$ and a node
$\sigma\in T$, the conditions below $(t,T)$ whose recorded tree contains
$\sigma$ are dense in the cone below $(t,T)$, because one extends the height
past $|\sigma|$. They need not be dense in all of $\mathrm{UM}$, since
conditions incompatible with $(t,T)$ have no such extension. Consequently, for a generic
filter $G\subseteq\mathrm{UM}$, every witness tree of a condition in $G$ is
contained in the **generic tree**

$$U_G=\bigcup\{t:\text{some }(t,T)\in G\}=\bigcup\{T:(t,T)\in G\},$$

which is a perfect nowhere-dense tree in the extension. The family of
**finite-prefix rearrangements** of $2^\omega$ is the countable family of
homeomorphisms induced by finite bijections between level-$n$ cylinders: each is
determined by a finite partial bijection of $2^n$ to itself, extended to a
bijection of $2^\omega$ that is a section map on each cylinder.

The point of the forcing is *not* that the generic tree contains an arbitrary old
nowhere-dense tree: the old sets are absorbed at the next stage, by the
countable union of finite-prefix rearrangements of $[U_G]$ constructed in
[[lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets]], and the
assertion $[S]\subseteq[U_G]$ for an arbitrary old tree $S$ is never used. The
forcing is ccc, since it is the union of countably many directed sets: for each
finite tree $t$ the class of conditions of $\mathrm{UM}$ carrying the recorded
tree $t$ is directed by the paragraph above, and there are only countably many
finite trees $t$. Hence $\mathrm{UM}$ is a countable union of directed sets, and
an antichain meets each directed class in at most one element because any two
members of one class are compatible; the argument of
[[lem-shelah-sweet-forcings-are-sigma-directed-ccc]] applies verbatim.
