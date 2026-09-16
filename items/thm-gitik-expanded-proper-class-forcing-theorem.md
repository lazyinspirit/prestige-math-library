---
id: thm-gitik-expanded-proper-class-forcing-theorem
kind: theorem
title: The forcing theorem for Gitik's expanded proper-class language
status: published
origin: pipeline
deps:
  - def-gitik-strongly-compact-filter-system-and-class-forcing
  - lem-gitik-restriction-amalgamation-and-prikry-property
  - def-forcing-relation-for-formulas
  - thm-forcing-theorem
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Schürz, Gitik's model, Lemmas 6 and 8, pages 8–11"
      url: https://repositum.tuwien.at/bitstream/20.500.12708/5394/2/Schuerz%20Johannes%20Philipp%20-%202018%20-%20Gitiks%20model%20or%20a%20model%20of%20ZF%20where%20all...pdf
---

## Statement

Let $P_3$ be Gitik's definable proper-class forcing, let $G\subseteq P_3$ be
an upward-closed directed filter meeting every ground-definable dense subclass,
and expand membership language
by predicates

$$B(x)\ \Longleftrightarrow\ x\in M,\qquad A(x,y)\ \Longleftrightarrow\ (x,y)\in G,$$

and by $W_O(x,y)$, the ground global well-order. For every fixed formula in
this expanded language there is a first-order definable forcing predicate, and

$$M[G]\models\varphi(\vec\tau_G)\quad\Longleftrightarrow\quad(\exists p\in G)\ p\Vdash_3\varphi(\vec\tau).$$

Every set name, every finite tuple of set names, and every particular witness
used in this equivalence belongs to some complete set subforcing $P_\theta$.
For atomic membership and equality, all sufficiently large such restrictions
give the same forcing value. This is the exact set-sized control asserted here:
it is not a claim that an arbitrary formula mentioning $A$ is uniformly
equivalent to its interpretation in one fixed $P_\theta$.

## Facts & Assumptions

**Given:** The definable class forcing $P_3$, its complete regular initial segments, a ground-definable global well-order, and a class-generic $G$ as in the statement.

[F1] [[lem-gitik-restriction-amalgamation-and-prikry-property]]: Every regular $P_\theta$ is a complete set subforcing of $P_3$, every set name is bounded in one such restriction, and $M[G]$ is the union of the $M[G_\theta]$.

[F2] [[def-forcing-relation-for-formulas]]: Negation and existential forcing are expressed by absence of a stronger forcing condition and by a dense set of name witnesses.

[F3] [[thm-forcing-theorem]]: For each set forcing $P_\theta$, forcing is definable and satisfies the truth lemma.

[F4] [[def-gitik-strongly-compact-filter-system-and-class-forcing]]: $P_3$, its order, its set restrictions and the ground global well-order are definable classes.

[F5] [[def-axiom-of-choice]]: The ground model satisfies AC. The argument below uses the given global well-order when a canonical ground witness is desired; it does not assert AC in a later symmetric submodel.

## Proof

1.1 A $P_3$-name is a set whose transitive closure contains only set many conditions. By F1, the union of their finite coordinate supports is bounded by a regular $\theta$, so rank induction makes the name a $P_\theta$-name. A finite tuple has a common regular bound, as does that tuple together with any one witness name or condition. [F1]

1.2 For names $\tau,\sigma$ and a condition $p$, define $p\Vdash_3\tau\in\sigma$ iff some regular $\theta$ satisfies: for every regular $\eta\ge\theta$, $p\in P_\eta$, $\tau,\sigma$ are $P_\eta$-names, and $p\Vdash_{P_\eta}\tau\in\sigma$; define equality identically. F1 gives a starting bound. If $\theta\le\eta$, completeness of $P_\theta\subseteq P_\eta$ preserves the set-forcing value of atomic formulas on $P_\theta$-names: a maximal antichain deciding the atomic statement in $P_\theta$ remains maximal in $P_\eta$. Thus the eventual value exists, is independent of the starting bound, and is first-order definable by F3. [F1, F3, F4]

2.1 Using the atomic equality relation from step 1.2, define the three new atoms by density below $p$: $p\Vdash_3B(\tau)$ iff $\{q\le p:(\exists x\in M)\ q\Vdash_3\tau=\check x\}$ is dense below $p$; $p\Vdash_3A(\tau,\sigma)$ iff $\{q\le p:(\exists(a,b)\in P_3)\ q\le(a,b),\ q\Vdash_3\tau=\check a,\ q\Vdash_3\sigma=\check b\}$ is dense below $p$; and $p\Vdash_3W_O(\tau,\sigma)$ iff $\{q\le p:(\exists x,y\in M)\ W_O(x,y),\ q\Vdash_3\tau=\check x,\ q\Vdash_3\sigma=\check y\}$ is dense below $p$. All quantifiers range over sets satisfying definable class predicates, so these are first-order formulas rather than quantification over a set of all conditions or names. [F4, step 1.2]

2.2 Suppose $p\in G$ and $\tau,\sigma$ have a common bound $\theta$. The restriction $G_\theta$ is $P_\theta$-generic by F1. The set-forcing truth lemma F3 identifies the eventual atomic relations from step 1.2 with $\tau_G\in\sigma_G$ and $\tau_G=\sigma_G$: evaluation of bounded names by $G$ equals evaluation by every sufficiently large $G_\eta$. Conversely, when one of these atomic statements is true, F3 supplies a condition in some $G_\eta$ forcing it, and that condition forces the same eventual value. [F1, F3, step 1.1, step 1.2]

3.1 For every fixed expanded formula, recurse externally through its finite syntax. Use conjunction in the usual way, let $p\Vdash_3\neg\psi$ iff no $q\le p$ forces $\psi$, and let $p\Vdash_3\exists x\,\psi(x,\vec\tau)$ iff $\{q\le p:(\exists\text{ set name }\sigma)\ q\Vdash_3\psi(\sigma,\vec\tau)\}$ is dense below $p$. Namehood and $P_3$ are definable classes, so each fixed recursion clause is first order. This is a scheme indexed externally by formulas, not a uniform satisfaction predicate. Induction also gives persistence under strengthening. [F2, F4, step 1.2, step 2.1]

3.2 The dense clauses have the intended truth values. If $p\in G$ forces $B(\tau)$, genericity meets the dense class below $p$, giving $q\in G$ and $x\in M$ with $q\Vdash_3\tau=\check x$; hence $\tau_G=x\in M$. Conversely, if $\tau_G=x\in M$, atomic set-stage truth gives $q\in G$ forcing $\tau=\check x$, and persistence makes every extension of $q$ a witness to the $B$-clause. The $W_O$ proof is identical. For $A$, a forward witness has $q\le(a,b)$ with $q\in G$, so upward closure puts $(a,b)\in G$ and atomic truth gives $(\tau_G,\sigma_G)=(a,b)$. Conversely, if this pair is a condition in $G$, directedness combines it with conditions forcing the two equalities; their common refinement makes the witnesses dense below it. [F3, step 1.2, step 2.1]

4.1 Induct on formula complexity. Conjunction follows immediately. For negation, if $p\in G$ forces $\neg\psi$, no member of $G$ below $p$ forces $\psi$, so induction makes $\psi$ false. Conversely, if $\neg\psi$ is true, no condition in $G$ forces $\psi$; the defining negation clause makes the conditions deciding $\psi$ dense, so $G$ contains one forcing $\neg\psi$. If $p\in G$ forces an existential, genericity meets its dense witness class; a resulting $q\in G$ and set name $\sigma$ satisfy $q\Vdash_3\psi(\sigma,\vec\tau)$, and induction makes $\sigma_G$ a witness. Conversely, a true existential has a set witness $y\in M[G]$; F1 supplies a bounded name $\sigma$ for $y$, induction supplies $q\in G$ forcing $\psi(\sigma,\vec\tau)$, and persistence makes $q$ force the existential clause. [F1, F2, step 3.1, step 2.2, step 3.2]

5.1 Steps 2.2–4.1 prove both implications of the truth lemma for every fixed expanded formula, and steps 1.2–3.1 prove definability. Step 1.1 bounds every parameter tuple and each actual witness; step 1.2 gives the stronger eventual-stage invariance exactly for membership and equality. The $A$-predicate remains a predicate for the full generic class, so no unsupported uniform stage bound for arbitrary expanded formulas has been inferred. The only choice principle present is the declared ground AC/global-well-order hypothesis F5. [F5, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 3.2, step 4.1] ∎
