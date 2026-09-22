---
id: def-shelah-universal-meagre-forcing
kind: definition
title: Shelah's universal-meagre forcing
status: draft
origin: pipeline
deps: [def-trees-and-bodies-on-discrete-alphabets, def-nowhere-dense-meagre-and-residual-subsets, def-forcing-preorder-compatibility-and-filter, def-dense-open-sets-and-model-generic-filters]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Definition 7.7 and Claims 7.11, 7.15, pp. 36, 41 and 43"}
    - {title: "Andrzej Roslanowski and Saharon Shelah, Sweet & sour and other flavours of ccc forcing notions", url: "https://shelah.logic.at/files/95909/672.pdf", locator: "§0.2(9), printed p. 586 (PDF p. 4)"}
---

## Definition

Work in ZF with the usual cylinder topology on Cantor space $2^\omega$.
For a finite word $s$, its cylinder consists of all infinite binary extensions
of $s$. The **universal-meagre forcing** $\mathrm{UM}$ has a distinguished weakest
condition $1_{\mathrm{UM}}$ and the following nontrivial conditions. A nontrivial
condition is a pair $(t,T)$ where $T\subseteq 2^{<\omega}$ is a **nonempty**
subtree in the sense of
[[def-trees-and-bodies-on-discrete-alphabets]] that is **perfect** — every node of
$T$ has two incomparable extensions in $T$ — and whose body $[T]$ is nowhere
dense in the sense of [[def-nowhere-dense-meagre-and-residual-subsets]]; and
$t=T\cap 2^{\le n}$ is its finite initial tree through some height $n<\omega$.
Because $T$ is nonempty, downward closed and perfect, it contains the empty
node and has a node at every level. Thus $n$ is recovered from $t$ as
$\operatorname{ht}(t):=\max\{|s|:s\in t\}$; this is the meaning of the height
of a recorded tree below. In the library order of
[[def-forcing-preorder-compatibility-and-filter]], [[def-dense-open-sets-and-model-generic-filters]], every condition is below
$1_{\mathrm{UM}}$, and the order between nontrivial conditions is

$$(t_2,T_2)\le(t_1,T_1)\quad\Longleftrightarrow\quad T_1\subseteq T_2 \text{ and }t_1=t_2\cap 2^{\le\operatorname{ht}(t_1)}.$$

The symbol $1_{\mathrm{UM}}$ is not represented by an empty tree. This is the
separately adjoined weak condition used for zero coordinates in Shelah's
canonical embeddings; excluding an empty recorded tree prevents the vacuous
``perfectness'' convention from creating a second, absorbing condition.

Thus a stronger condition enlarges the witness tree while permanently preserving
the recorded finite initial tree. A condition is determined by its witness tree
and its height; the recorded tree is a sub-tree of every witness tree extending
it, so the extension relation is reflexive and transitive. $\mathrm{UM}$ is
nonempty: the perfect tree $T_0=\{\sigma\in2^{<\omega}:\sigma$ contains no two
consecutive $1$s$\}$ is nowhere dense, because every cylinder contains a string
with two consecutive $1$s and hence no cylinder is contained in $[T_0]$.

**Basic properties used below.** Let $(t_1,T_1)$, $(t_2,T_2)$ be nontrivial
conditions with $\operatorname{ht}(t_1)\le\operatorname{ht}(t_2)$. A common
strengthening $(\tilde t,\tilde T)$ satisfies
$\tilde T\supseteq T_1\cup T_2$ and
$\tilde t\cap 2^{\le\operatorname{ht}(t_1)}=t_1$,
$\tilde t\cap 2^{\le\operatorname{ht}(t_2)}=t_2$; hence two conditions are
**necessary** for compatibility:
$t_1=t_2\cap 2^{\le\operatorname{ht}(t_1)}$, and every node of $T_1$ of height at
most $\operatorname{ht}(t_2)$ belongs to $t_2$. These two conditions are also sufficient: if
$T:=T_1\cup T_2$, then $T$ is a subtree, it is perfect because every node of $T$
splits inside whichever of $T_1,T_2$ contains it, its body
$[T]=[T_1]\cup[T_2]$ is nowhere dense as a finite union of closed nowhere-dense
sets, and $T\cap 2^{\le\operatorname{ht}(t_2)}=t_2$, so $(t_2,T)$ is a common strengthening of
$(t_1,T_1)$ and $(t_2,T_2)$. The first condition alone is not sufficient: for
$T_1$ the tree of strings with no two consecutive $0$s and $T_2$ the tree of
strings with no two consecutive $1$s one has $\operatorname{ht}(t_1)=1$,
$\operatorname{ht}(t_2)=2$,
$t_1=t_2\cap 2^{\le 1}=\{\emptyset,0,1\}$, yet $11\in T_1\cap 2^{\le 2}$ while
$11\notin t_2$, so the two conditions have no common strengthening. In particular
the conditions carrying one fixed recorded tree $t$ are pairwise compatible:
their witness trees agree on $2^{\le\operatorname{ht}(t)}$, so their union is again a witness
tree, it is perfect because every node splits inside one of the two trees, it is
nowhere dense as a finite union of closed nowhere-dense sets, and its initial
tree through height $\operatorname{ht}(t)$ is $t$. Two conditions whose recorded trees
disagree on the levels common to both heights are incomparable, since a common
strengthening would have to record both trees below the shorter height; distinct
perfect nowhere-dense trees can disagree on such a level, so compatibility of
$\mathrm{UM}$ is not automatic. For a condition $(t,T)$ and a node
$\sigma\in T$, the conditions below $(t,T)$ whose recorded tree contains
$\sigma$ are dense in the cone below $(t,T)$, because one extends the height
past $|\sigma|$. They need not be dense in all of $\mathrm{UM}$, since
conditions incompatible with $(t,T)$ have no such extension. For the generic-object assertion, compute $\mathrm{UM}$ in a transitive ZF
ground model $M$ and let $G$ be an $M$-generic filter as in
[[def-dense-open-sets-and-model-generic-filters]]. A set $D\in M$ dense below
$p\in G$ is met by $G$: adjoining all conditions incompatible with $p$ makes
it dense in the whole forcing, and directedness excludes those incompatible
conditions from $G$. Consequently, every witness tree of a nontrivial condition in $G$ is
contained in the **generic tree**

$$U_G=\bigcup\{t:\text{some }(t,T)\in G\}=\bigcup\{T:(t,T)\in G\},$$

This union is nonempty because nontrivial conditions are dense. It is a
tree, and each of its nodes lies in a witness tree contained in the union;
that witness supplies two incomparable extensions, proving perfection.
Its body is closed: a real outside the body has a finite prefix absent from
the tree and the corresponding cylinder misses the body.

Nowhere density needs a separate dense-set argument. Given any finite word
$s$ and nontrivial condition $(t,T)$, the closed nowhere-dense body $[T]$
has a cylinder $[v]\subseteq[s]$ disjoint from it. Here $v\notin T$: every
node of the pruned binary tree $T$ lies on a branch, obtained by recursively
taking the least available child. Increase the recorded height to at least
$|v|$, keeping $T$ unchanged. All stronger conditions now omit $v$ from
their witness trees. Thus the conditions recording such a missing extension
of $s$ form a ground-model dense set (also below $1_{\mathrm{UM}}$).
Genericity meets it, and filter directedness ensures that $v$ belongs to no
witness tree from $G$. Every cylinder therefore contains a cylinder disjoint
from $[U_G]$, proving that $[U_G]$ is nowhere dense. These arguments use
finite binary recursion, not a choice principle.

The **finite-prefix rearrangements** are precisely the maps
$\pi_\rho(s\frown x)=\rho(s)\frown x$, for $s\in2^n$, $x\in2^\omega$,
and a permutation $\rho$ of the finite set $2^n$, for some $n<\omega$.
Each map is a homeomorphism preserving the tail after coordinate $n$.
There are countably many such maps, since these permutations have finite
codes. A partial bijection on $2^n$ extends to one by matching unused domain
and range words in lexicographic order; it is this full permutation, not
an arbitrary homeomorphic extension, that defines the rearrangement.

The forcing is ccc, since it is the union of countably many directed sets: the
singleton $\{1_{\mathrm{UM}}\}$ is one such set, and for each
finite tree $t$ the class of conditions of $\mathrm{UM}$ carrying the recorded
tree $t$ is directed by the paragraph above, and there are only countably many
finite trees $t$. Hence $\mathrm{UM}$ is a countable union of directed sets, and
an antichain meets each directed class in at most one element because any two
members of one class are compatible. Assigning each antichain member the
least code of a class containing it gives an injection into $\omega$,
including for the empty antichain. This proves ccc without choice.

## Remarks

The point of the forcing is *not* that the generic tree contains an arbitrary old
nowhere-dense tree: the old sets are absorbed at the next stage, by the
countable union of finite-prefix rearrangements of $[U_G]$ constructed in
[[lem-shelah-universal-meagre-forcing-absorbs-old-nowhere-dense-sets]], and the
assertion $[S]\subseteq[U_G]$ for an arbitrary old tree $S$ is never used.
