---
id: prop-noncentral-conjugacy-classes-of-an-extraspecial-p-group-have-size-p
kind: proposition
title: "Every conjugacy class of an extraspecial $p$-group outside the centre has exactly $p$ elements"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p, def-conjugacy-class-and-centralizer, thm-conjugacy-class-cardinality, def-index, thm-lagrange, def-center-of-a-group, def-coset, def-finite-p-group, def-commutator-and-commutator-subgroup, def-special-and-extraspecial-p-groups]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "M. van Beek, Topics in Finite p-Groups, Proposition 2.41(ii)"
      url: "https://martinvanbeek.github.io/uploads/LectureNotes.pdf"
    - title: "D. A. Craven, The Theory of p-Groups, \u00a73.1"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/pgroups.pdf"
pipeline_run: null
---

## Statement

Every conjugacy class of an extraspecial $p$-group whose representative is not
central has exactly $p$ elements. That is, for an extraspecial $p$-group $P$ and
$x\in P\setminus Z(P)$,

$$\lvert\operatorname{Cl}_P(x)\rvert=p .$$

## Facts & Assumptions

**Given:** An extraspecial $p$-group $P$ ([[def-special-and-extraspecial-p-groups]]) and an element $x\in P$ with $x\notin Z(P)$.

[F1] $\operatorname{Cl}_G(x):=\{gxg^{-1}:g\in G\}$ and $C_G(x):=\{g\in G:gx=xg\}=\{g\in G:gxg^{-1}=x\}$ ([[def-conjugacy-class-and-centralizer]]).

[F2] $Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[F3] For $g,h\in G$ the commutator is $[g,h]:=ghg^{-1}h^{-1}$ ([[def-commutator-and-commutator-subgroup]]).

[F4] For $H\le G$ and $g\in G$, the right coset is $Hg:=\{hg:h\in H\}$ ([[def-coset]]).

[L1] An extraspecial $p$-group has derived subgroup $P'=Z(P)$ of order $p$ ([[cor-an-extraspecial-p-group-has-class-two-and-derived-subgroup-of-order-p]]).

[L2] $\lvert\operatorname{Cl}_G(x)\rvert=[G:C_G(x)]$ for a finite group $G$ ([[thm-conjugacy-class-cardinality]]).

[L3] For a finite group $G$ and $H\le G$, $|G|=[G:H]\,|H|$ ([[thm-lagrange]]).

[L4] $[G:H]:=|G/H|$, the number of left cosets of $H$ in $G$ ([[def-index]]).

[L5] A finite $p$-group is a finite group whose order has the form $|P|=p^n$ for some $n\in\mathbb N$ ([[def-finite-p-group]]).

## Proof

**Proof technique:** direct.

1.1 For every $g\in P$ one has $[g,x]x=(gxg^{-1}x^{-1})x=gxg^{-1}$, so each conjugate of $x$ has the form $[g,x]x$. [F3, algebra]

1.2 The derived subgroup of $P$ is $Z(P)$ and has order $p$, and $P$ is a finite $p$-group, so $|P|=p^n$ for some $n$. [L1, L5]

1.3 The size of the class of $x$ is the index $[P:C_P(x)]$, and by Lagrange that index divides $|P|$. [F1, L2, L3, L4]

2.1 Each $[g,x]$ lies in $P'=Z(P)$, so every conjugate of $x$ lies in the right coset $Z(P)x$; the map $z\mapsto zx$ is a bijection from $Z(P)$ onto that coset, so the coset has $p$ elements and the class of $x$ has at most $p$. [F4, step 1.1, step 1.2, algebra]

2.2 Since $x\notin Z(P)$, some $g\in P$ fails to commute with $x$, so $C_P(x)\ne P$, its index is greater than one, and the class of $x$ has more than one element. [F1, F2, step 1.3]

3.1 The class size divides $p^n$, so it is a power of $p$; it lies strictly between $1$ and $p$ inclusive, and the only such power of $p$ is $p$ itself. [step 1.2, step 1.3, step 2.1, step 2.2] ∎

## Remarks

The hypothesis $x\notin Z(P)$ is used only at step 2.2, and it is used to rule out the class of size one. A central $x$ runs through the same computation and comes out with the class $\{x\}$, which is consistent with step 2.1 and shows that the two cases exhaust the group.
