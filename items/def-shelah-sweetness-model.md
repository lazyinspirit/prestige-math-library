---
id: def-shelah-sweetness-model
kind: definition
title: Shelah sweetness models for forcing
status: draft
origin: pipeline
deps: [def-forcing-preorder-compatibility-and-filter, def-complete-boolean-algebra-and-regular-open-sets, thm-forcing-equivalence-and-boolean-completion]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Definitions 7.2, 7.2A and 7.9, pp. 33-34 and 40"}
    - {title: "Andrzej Roslanowski and Saharon Shelah, Sweet & sour and other flavours of ccc forcing notions", url: "https://shelah.logic.at/files/95909/672.pdf", locator: "§0.2(9), printed p. 586 (PDF p. 4); sweetness discussion, Section 4"}
---

## Definition

The library order convention is used throughout: a forcing preorder $P$ carries a
reflexive transitive relation in which $q\le p$ means that $q$ is stronger than
$p$ ([[def-forcing-preorder-compatibility-and-filter]]).

A **Shelah sweetness model** is a triple $(P,D,(E_n)_{n<\omega})$ such that

- $P$ is a forcing preorder with a distinguished weakest condition $1_P$
  (so $p\le 1_P$ for every $p\in P$), and $D\subseteq P$ is dense; the weak
  condition need not belong to $D$;
- each $E_n$ is an equivalence relation on $D$ with countably many classes, and
  $E_{n+1}$ **refines** $E_n$, that is, $p\mathrel{E_{n+1}}p'$ implies
  $p\mathrel{E_n}p'$;
- every $E_n$-class is **downward directed**: any two members of the class have a
  common lower bound that also belongs to the class;

and the two clauses below hold.

**Sequential clause.** If $p_i\in D$ for every $i\le\omega$ and
$p_i\mathrel{E_i}p_\omega$ for every $i<\omega$, then $\{p_i:i\le\omega\}$ has a
common lower bound; moreover for every $n<\omega$ the tail
$\{p_i:n\le i\le\omega\}$ has a common lower bound that lies in the $E_n$-class
of $p_\omega$.

**Transfer clause.** For all $p,q\in D$ and every $n<\omega$ there is
$k<\omega$ such that for every $p'\mathrel{E_k}p$: if some $r\mathrel{E_n}q$
satisfies $r\le p$, then some $r'\mathrel{E_n}q$ satisfies $r'\le p'$.

**Comparable form.** The transfer clause is equivalent to the following
statement, which is the form used below whenever a condition has to be
synchronized with a comparable one. If $q\le p$ in $D$ and $n<\omega$, then for
some $k<\omega$ every $p'\mathrel{E_k}p$ has a common strengthening inside the
$E_n$-class of $q$: there is $q'\mathrel{E_n}q$ with $q'\le q$ and $q'\le p'$.
For the forward implication apply the transfer clause to $p,q,n$, using $r=q$
as the required witness that some member of the $E_n$-class of $q$ lies below
$p$; it yields $r'\mathrel{E_n}q$ with $r'\le p'$, and downward directedness of
the class applied to the pair $q,r'$ supplies $q'\mathrel{E_n}q$ with
$q'\le q,r'$. For the converse reading, suppose the hypothesis of the transfer
clause holds for a triple $p,q,n$ and a witness $r\mathrel{E_n}q$ with $r\le p$;
applying the comparable form to the pair $r\le p$ and to $n$ gives a single $k$
such that every $p'\mathrel{E_k}p$ has a common strengthening with $r$ inside
the class of $r$, which is also the class of $q$, and this $k$ serves the
transfer clause, because $E_n$-equivalent conditions determine the same
$E_n$-class. If there is no witness $r$, the transfer implication is vacuous and $k=0$ suffices.

**Extension of sweetness models.** A sweetness model
$M_2=(P_2,D_2,(E^2_n))$ **extends** $M_1=(P_1,D_1,(E^1_n))$ when

- $P_1$ is a complete suborder of $P_2$, that is, $P_1\subseteq P_2$, the order
  and incompatibility relations on $P_1$ are the restrictions of those on
  $P_2$, and every maximal antichain of $P_1$ is maximal in $P_2$. This is not
  a density requirement: an arbitrary condition of $P_2$ need not have a
  stronger condition in $P_1$;
- $D_1\subseteq D_2$;
- each old $E^1_n$ is the restriction of $E^2_n$ to $D_1$;
- for every $p\in D_1$ and every $n<\omega$, its $E^2_n$-class is contained in
  $P_1$;
- whenever $p\in D_2$, $q\in P_1$ and $q\le p$, then $p\in D_1$.

The last clause is equivalent to restricting $q$ to $D_1$, as in the source:
if $q\in P_1$ strengthens $p$, density of $D_1$ in $P_1$ gives a
$d\in D_1$ with $d\le q\le p$, to which the restricted clause applies.
Thus in particular $D_2\cap P_1=D_1$, and the preceding class-containment
clause may equivalently say that every $E^2_n$-class meeting $D_1$ is contained
in $D_1$. Standard iteration-stage inclusions are complete suborders in this
sense.

**Boolean-algebra language.** By
[[thm-forcing-equivalence-and-boolean-completion]], $P$ is forcing-equivalent
to the nonzero part $B^+=B\setminus\{0_B\}$ of its regular-open completion
([[def-complete-boolean-algebra-and-regular-open-sets]]). This assertion
concerns forcing and generic extensions; it does not by itself identify the
conditions of $D$ or transport their equivalence relations through a possibly
noninjective separative quotient. When $\operatorname{BA}(P)$ is used as
shorthand for a sweetness presentation, the original $P,D,(E_n)$ data are
retained unless a transport has been specified.

In particular, if $e:P\to B^+$ is a dense **order embedding** (injective and
preserving and reflecting order), one may use $e[D]$ as the dense set and
transport each $E_n$ along the bijection $e|_D$. Density follows by first
refining a Boolean condition into $e[P]$ and then refining its preimage into
$D$. Countability, refinement and class directedness are preserved. In the
sequential clause an original lower bound $r\in P$ gives the nonzero lower
bound $e(r)$; the class-tail bounds similarly map into the required classes.
The transfer clause is preserved because its comparisons between members of
$D$ are equivalent to their image comparisons under the order embedding.
Thus these data give a sweetness model on $B^+$. This sufficient hypothesis
is not imposed on arbitrary forcing preorders, whose canonical completion
map may identify distinct conditions or fail to reflect the original order.

If a model is specified directly on a complete Boolean algebra, it means a
model on $B^+$ with the displayed sweetness clauses checked there. Every
common lower bound in these clauses must be **nonzero**: zero lies below even
a Boolean element and its complement, and cannot witness compatibility.
The one-element Boolean algebra has empty $B^+$ and hence cannot underlie a
forcing preorder under the library's nonemptiness convention.

The weak-condition requirement is part of the forcing interface used by the
source constructions, not a consequence of sweetness. In particular it rules
out a bare antichain with no common weak condition as an input to the amalgam
construction. In products, canonical copies and twisted amalgams below, an
unmentioned coordinate is filled with its distinguished weak condition.
