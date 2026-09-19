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
sources:
  references:
    - {title: "Saharon Shelah, Can You Take Solovay's Inaccessible Away?", url: "https://shelah.logic.at/files/95333/176.pdf", locator: "Definitions 7.2, 7.2A and 7.9, pp. 33-34 and 40"}
---

## Definition

The library order convention is used throughout: a forcing preorder $P$ carries a
reflexive transitive relation in which $q\le p$ means that $q$ is stronger than
$p$ ([[def-forcing-preorder-compatibility-and-filter]]).

A **Shelah sweetness model** is a triple $(P,D,(E_n)_{n<\omega})$ such that

- $P$ is a forcing preorder and $D\subseteq P$ is dense;
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
$E_n$-class.

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

Thus in particular $D_2\cap P_1=D_1$, and the preceding class-containment
clause may equivalently say that every $E^2_n$-class meeting $D_1$ is contained
in $D_1$. Standard iteration-stage inclusions are complete suborders in this
sense.

**Boolean-algebra language.** By
[[thm-forcing-equivalence-and-boolean-completion]] the separative quotient and
the regular-open completion of $P$ ([[def-complete-boolean-algebra-and-regular-open-sets]])
are forcing-equivalent to $P$, with generic filters corresponding by inverse
image. A sweetness model on $P$ therefore induces one on the nonzero elements
$B\setminus\{0_B\}$ of the completion, with the same dense set and the same
equivalence relations restricted to it, because a subset of $B\setminus\{0_B\}$
with a common lower bound in $B$ has a common lower bound among the nonzero
elements it meets. Conversely, when a later argument presents the model
directly on a complete Boolean algebra, the order is that of $B$ with $0_B$
removed, and the same clauses apply verbatim.
