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
$T\subseteq 2^{<\omega}$ is a perfect nowhere-dense subtree in the sense of
[[def-trees-and-bodies-on-discrete-alphabets]] and [[def-nowhere-dense-meagre-and-residual-subsets]],
and $t=T\cap 2^{\le n}$ is its finite initial tree through some height $n$. In the
library order of [[def-forcing-preorder-compatibility-and-filter]], the relation
is

$$(t_2,T_2)\le(t_1,T_1)\quad\Longleftrightarrow\quad T_1\subseteq T_2 \text{ and }t_1=t_2\cap 2^{\le|t_1|}.$$

Thus a stronger condition enlarges the witness tree while permanently preserving
the recorded finite initial tree. A condition is determined by its witness tree
and its height; the recorded tree is a sub-tree of every witness tree extending
it, so the extension relation is reflexive and transitive, and $\mathrm{UM}$ is
nonempty because the binary tree itself is perfect and nowhere dense.

**Basic properties used below.** Any two conditions $(t_1,T_1)$, $(t_2,T_2)$ are
compatible: if $|t_1|\le|t_2|$, the recorded initial trees agree on $2^{\le|t_1|}$
and the downward closure of $T_1\cup T_2$ is again a perfect nowhere-dense tree
whose initial tree through height $|t_2|$ is $t_2$, so $(t_2,T_1\cup T_2)$ is a
common strengthening. For a condition $(t,T)$ and a node $\sigma\in T$, the set
of conditions below $(t,T)$ whose recorded tree contains $\sigma$ is dense,
because one extends the height past $|\sigma|$. Consequently, for a generic
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
forcing is ccc, since it is the union of countably many directed sets: fix $n$
and note that the conditions with $|t|=n$ form a directed set below each
condition, so $\mathrm{UM}$ is $\sigma$-directed and the argument of
[[lem-shelah-sweet-forcings-are-sigma-directed-ccc]] applies.
