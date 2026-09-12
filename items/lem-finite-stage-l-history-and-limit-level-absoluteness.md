---
id: "lem-finite-stage-l-history-and-limit-level-absoluteness"
kind: "lemma"
title: "Finite-stage L histories and weak limit-level absoluteness"
deps: ["def-constructible-hierarchy-and-constructible-rank", "prop-constructible-levels-transitivity-ordinals-and-rank", "def-definable-subsets-of-a-membership-structure", "thm-set-structure-satisfaction-recursion", "thm-relativization-and-set-satisfaction", "thm-transfinite-recursion", "lem-canonical-well-order-of-finite-definition-codes", "thm-canonical-definable-global-well-order-of-l", "def-set-coded-terms-and-formulas", "lem-unique-parsing-of-set-coded-syntax", "thm-structural-recursion-on-set-coded-syntax"]
justified_by: []
forward_refs: []
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "Lietz, Set Theory, Lemma 7.11 and Proposition 7.21, printed pp.57–60; finite-history details completed locally"
      url: "https://andreas-lietz.github.io/resources/PDFs/Lecture_Notes.pdf"
    - title: "Moschovakis, Lecture Notes in Logic, formula coding and finite satisfaction recursion"
      url: "https://www.math.ucla.edu/~ynm/lectures/lnl.pdf"
verification:
  audited: 2026-09-13
status: published
origin: "pipeline"
proof_strategy: "direct"
---

## Statement

In ZF there are fixed pure-membership formulas
$\operatorname{Enum}(e,w,n)$, $\operatorname{Decode}(A,e,a,b)$,
$\operatorname{Hist}(h,\gamma)$ and $\chi(x,y)$, and a fixed finite
membership sentence $C$, with the following properties.

1. $\operatorname{Enum}$ is the graph of a total numerical enumeration of
   pairs consisting of a membership-formula word and an allowed parameter
   arity. Its finite trace is absolute in every transitive set containing the
   hereditarily finite sets. Invalid numerical inputs have the fixed value
   $(v_0=v_0,0)$.
2. $\operatorname{Decode}(A,e,a,b)$ is single-valued and holds exactly when
   the code $e$ with its allowed arity and tuple $a$ defines $b$ over
   $(A,\in)$. Unused parameters are allowed. For $A=\varnothing$ only one
   designated code with empty tuple decodes, and its value is
   $\varnothing$; thus the decoded range is exactly
   $\operatorname{Def}(A)$, including
   $\operatorname{Def}(\varnothing)=\{\varnothing\}$.
3. If $H_\gamma=\{\langle\delta,L_\delta\rangle:\delta\le\gamma\}$, then
   $H_\gamma\in L_{\gamma+8}$. Every nonzero limit $L_\lambda$ satisfies
   $C$. Conversely, every nonempty transitive set $N$ satisfying $C$ is
   $L_\beta$, where $\beta=N\cap\operatorname{Ord}$.
4. If $R_\gamma$ is the restriction to $L_\gamma$ of the published canonical
   order $<_L$, and
   $K_\gamma=\{\langle\delta,\langle L_\delta,R_\delta\rangle\rangle:
   \delta\le\gamma\}$, then
   $R_\gamma\in L_{\gamma+32}$ and $K_\gamma\in L_{\gamma+40}$.
   The formula $\chi$ obtained from these augmented histories defines the
   actual $<_L$; each $L_\gamma$ is an initial segment of this order, and the
   interpretation of $\chi$ in every nonzero limit level agrees with the
   restriction of that same order.

No weak level is assumed to satisfy Infinity, Power Set, Replacement, a full
Separation scheme, or Choice. In particular $L_\omega=V_\omega$ and does not
satisfy Infinity.

## Facts & Assumptions

**Given:** Ambient ZF. Finite words use the published membership syntax;
assignments are finite graphs of Kuratowski pairs. All assertions about weak
transitive sets explicitly require the displayed finite certificates rather
than internal ZF.

[F1] [[def-set-coded-terms-and-formulas]] and
[[lem-unique-parsing-of-set-coded-syntax]] supply the fixed finite-word syntax,
unique parsing, and shorter-child relation.

[F2] [[thm-structural-recursion-on-set-coded-syntax]] and
[[thm-set-structure-satisfaction-recursion]] supply external recursion on a
finite formula and its ordinary set-structure satisfaction relation.

[F3] [[thm-relativization-and-set-satisfaction]] identifies a fixed formula's
truth over a set with its guarded ambient relativization.

[F4] [[def-definable-subsets-of-a-membership-structure]] defines
$\operatorname{Def}(A)$ from formula/allowed-arity codes and finite parameter
tuples, with the separate clause
$\operatorname{Def}(\varnothing)=\{\varnothing\}$.

[F5] [[def-constructible-hierarchy-and-constructible-rank]] and
[[prop-constructible-levels-transitivity-ordinals-and-rank]] give the Def
recursion, transitivity, continuity, nesting, and ordinal contents of the
levels.

[F6] [[lem-canonical-well-order-of-finite-definition-codes]] orders codes first
by their numerical formula/arity code and then lexicographically among tuples
of that fixed arity, including its designated empty-carrier code.

[F7] [[thm-canonical-definable-global-well-order-of-l]] defines the published
canonical order by the unique coherent recursion that retains the old order,
puts old members before new ones, orders new members by their least fixed
formula/arity definition codes, and takes unions at nonzero limits.

[F8] [[thm-transfinite-recursion]] supplies the external unique hierarchy and
augmented-order histories; no recursion is performed internally in a weak
level.

## Proof

1.1 Fix the sentinel numerical coding from F1. Let the total external enumeration $\nu(e)$ first unpair $e$ as $(f,n)$, deterministically decode $f$ to a finite word $w$, and accept it exactly when the finite parse trace ends in a formula and its free-variable set is contained in $\{0,\ldots,n\}$. On an invalid input return the fixed pair $(v_0=v_0,0)$. The formula $\operatorname{Enum}(e,w,n)$ says that the finite unpairing, decoding, parse and free-variable trace has that output. Induction over the trace proves existence, uniqueness, soundness and completeness. Every trace and every competing trace is hereditarily finite, so the same induction proves absoluteness in each transitive domain containing all hereditarily finite sets. [F1, F2]

1.2 Suppose $A\ne\varnothing$. Choose a finite assignment length $m$ strictly above $n$ and every variable index occurring in $w$. Let $U$ be exactly the set of graph-coded functions $m\to A$. On the distinct subformulas in the canonical closing-order parse trace, form a graph $T$ of truth subsets of $U$: equality and membership read coordinates, negation takes complement in $U$, conjunction takes intersection, and an existential in coordinate $i$ uses assignments obtained by replacing exactly coordinate $i$. Induction in the finite child-before-parent order proves that any such table is unique and agrees with satisfaction. It also proves coincidence: changing coordinates not free in a subformula does not change its truth row. Thus shifting the tuple $a\in A^n$ to coordinates $1,\ldots,n$, reserving coordinate zero for $x$, and existentially padding the remaining coordinates defines a unique $b=\{x\in A:(A,\in)\models w[x,a]\}$. [F1, F2, F3]

2.1 Define $\operatorname{Decode}$ by exactly two disjoint branches. If $A=\varnothing$, require the designated empty code, the empty tuple and the empty output. If $A\ne\varnothing$, require $\operatorname{Enum}(e,w,n)$ and the construction of step 1.2. Enum uniqueness, table uniqueness and coincidence make this relation single-valued. In the nonempty branch its range consists of exactly the definitions in F4, since every allowed formula/arity pair has a numerical code and unused parameters are permitted. The empty branch gives exactly the special value in F4; it is not inferred from satisfaction on an empty structure. [F4, F6, step 1.1, step 1.2]

2.2 The formulas checking the finite parse, assignment and table graphs are fixed pure-membership formulas. If $A\in L_\eta$ and $\eta$ is infinite, an $m$-assignment into $A$ belongs to $L_{\eta+3}$: its Kuratowski-pair entries cost two successor stages and the finite graph one. The exact assignment set is definable over that level and lies in $L_{\eta+4}$. For each fixed subformula its truth row is defined directly over the same containing level by the relativization in F3, rather than one Def step per syntactic node. Pairing the finitely many words with their rows and collecting the table costs at most three more stages. All parse and Enum traces are hereditarily finite, so they add no stage above an infinite base. Hence every needed certificate and decoded subset appears after a fixed finite overhead. [F3, F5, step 1.1, step 1.2]

3.1 For finite $r$, induction gives $L_r=V_r$: every subset of the finite set $V_r$ is finite and is definable using its members as parameters. Therefore $L_\omega=V_\omega$. Every particular syntax trace, finite assignment table, decoded subset and finite initial history is hereditarily finite, so all of them belong to $L_\omega$ even though no one stage contains codes of every finite size. An inductive set would contain every finite ordinal and hence would not be hereditarily finite; therefore $L_\omega$ does not satisfy Infinity. [F4, F5, step 1.1, step 2.1]

4.1 Let $W$ be the fixed finite sentence asserting Empty Set, Pairing and Union, the Enum trace clauses, the existence and exactness of the assignment and truth tables for every nonempty carrier, and both branches of Decode. For a nonzero limit $\lambda>\omega$, any finite tuple of parameters lies in some infinite $L_\eta$ with $\eta<\lambda$; step 2.2 places the witnesses below $\lambda$. Step 3.1 handles $\lambda=\omega$. Thus every nonzero limit $L_\lambda$ satisfies $W$. If a transitive $N$ satisfies $W$, all its accepted finite traces are actual by step 1.1, all actual finite assignments occur in its exact $U$, and induction through the accepted table proves its Decode relation is the external one. Consequently whenever $N$ recognizes a supplied $B$ as the decoded range over $A$, $B=\operatorname{Def}(A)$ externally. [F4, F5, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1]

5.1 Let $\operatorname{Hist}(h,\gamma)$ say that $h$ is a function on $\gamma+1$, starts with the empty set, takes the decoded range at successors, and at limits takes the union of its earlier values. In any transitive model of $W$, external induction on the supplied history identifies its value at $\delta$ with the actual $L_\delta$; this uses step 4.1 at successors and bounded membership at limits. It assumes no internal recursion theorem. [F4, F5, step 4.1]

6.1 Prove $H_\gamma\in L_{\gamma+8}$ by external induction. At finite $\gamma$ it is hereditarily finite by step 3.1. If $\gamma=\delta+1$, the inductive $H_\delta$ is in $L_{\delta+8}$, while $\langle\delta+1,L_{\delta+1}\rangle$ is in $L_{\delta+4}$; one definition over $L_{\delta+8}$ appends it and gives $H_\gamma$ in $L_{\delta+9}=L_{\gamma+8}$. At an infinite limit $\lambda$, define the strict prefix over $L_\lambda$ by the existence of an accepted shorter history with the displayed terminal value. All true shorter histories already belong to $L_\lambda$, and step 5.1 excludes false ones. The prefix lies in $L_{\lambda+1}$; pairing and appending $\langle\lambda,L_\lambda\rangle$ puts $H_\lambda$ in $L_{\lambda+4}$. [F5, F8, step 3.1, step 5.1, induction]

6.2 Augment histories by relations. At a successor retain the earlier order, place every old member before every new one, and order new members by their least Decode code: first the same numerical $e$ from Enum, then the parameter tuples lexicographically at the fixed allowed arity. Step 2.1 gives the exact decoding fibres, including unused parameters and the designated empty case; F6 gives their unique least elements. At limits take unions. Simultaneous external induction proves every accepted augmented history has the actual levels and exactly this actual relation. By F7 it is the published $<_L$, not merely an isomorphic well-order. [F6, F7, F8, step 1.1, step 2.1, step 5.1]

7.1 Let $C$ conjoin $W$ with: every ordinal has its ordinal successor; every ordinal has a Hist witness; and every set belongs to a value on such a history. Step 6.1 and level exhaustion show that every nonzero limit $L_\lambda$ satisfies $C$. Conversely let nonempty transitive $N$ satisfy $C$ and put $\beta=N\cap\operatorname{Ord}$. Empty-set existence makes $\beta$ nonzero, and successor closure makes it a limit. Steps 4.1 and 5.1 show that every internal history is actual, so $L_\delta\in N$ for every $\delta<\beta$ and hence $L_\beta\subseteq N$. Exhaustion gives the reverse inclusion. Therefore $N=L_\beta$. [F5, step 4.1, step 5.1, step 6.1]

7.2 For finite $\gamma$, the order and history are hereditarily finite. At an infinite successor, define $R_{\delta+1}$ over $L_{\delta+32}$ from $R_\delta$ and the two levels. Step 2.2 places every relevant finite table far below this bound, and step 6.2 makes minimization exact, so $R_{\delta+1}\in L_{\delta+33}$. The two nested pairs in the new augmented history entry lie below $L_{\delta+40}$; one definition appends them, giving $K_{\delta+1}\in L_{\delta+41}$. At an infinite limit, define the strict augmented prefix over $L_\lambda$ from accepted shorter histories; step 6.2 excludes false witnesses. Its union order is in $L_{\lambda+1}$ and finite pairing places the appended history below $L_{\lambda+6}$. Thus the stated $+32$ and $+40$ bounds hold. [F5, F7, step 2.2, step 6.2, induction]

8.1 Define $\chi(x,y)$ to mean that some accepted augmented history contains $\langle x,y\rangle$ in its terminal order. Steps 6.2 and 7.2 show in ambient ZF that this is exactly $x<_Ly$. In a nonzero limit $L_\lambda$, every required shorter augmented history is present by step 7.2; conversely its transitivity, $W$, and step 6.2 make every internally accepted history actual. Therefore the interpretation of this very formula $\chi$ in $L_\lambda$ is precisely $<_L\restriction L_\lambda$. This proves agreement of least codes as well as agreement on already selected elements, without applying full-ZF absoluteness to the weak level. [F7, step 4.1, step 6.2, step 7.2] ∎
