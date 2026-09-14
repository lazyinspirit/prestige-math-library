---
id: thm-gitik-intermediate-model-zf-minus-power-set
kind: theorem
title: The intermediate extension satisfies ZF minus Power Set plus Collection
status: draft
origin: pipeline
deps:
  - def-gitik-strongly-compact-filter-system-and-class-forcing
  - thm-gitik-expanded-proper-class-forcing-theorem
  - lem-gitik-restriction-amalgamation-and-prikry-property
  - def-forcing-relation-for-formulas
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Schürz, Gitik's model, Lemma 9 and Theorems 10–11, pages 10–12"
      url: https://repositum.tuwien.at/bitstream/20.500.12708/5394/2/Schuerz%20Johannes%20Philipp%20-%202018%20-%20Gitiks%20model%20or%20a%20model%20of%20ZF%20where%20all...pdf
---

## Statement

The intermediate set universe $M[G]$ satisfies Extensionality, Empty Set,
Pairing, Union, Infinity, Separation, Foundation and Collection, and therefore
Replacement. Thus it satisfies ZF with Power Set omitted. Moreover, the
expanded ground-well-order predicate defines a global well-order of $M[G]$.
Power Set is deliberately not asserted.

## Facts & Assumptions

**Given:** The Gitik class extension $M[G]$ and expanded forcing language of the preceding theorem.

[F1] [[thm-gitik-expanded-proper-class-forcing-theorem]]: Expanded forcing is definable and satisfies truth, and every set name is bounded in a complete regular initial segment.

[F2] [[lem-gitik-restriction-amalgamation-and-prikry-property]]: Each $P_\theta$ is a complete set subforcing, $M[G]$ is the union of its transitive set-forcing extensions, and finite disjoint upper supports with compatible bounded restrictions amalgamate.

[F3] [[def-gitik-strongly-compact-filter-system-and-class-forcing]]: The ground class structure includes the amenable predicate $W_O$ globally well-ordering $M$, with Replacement allowed for formulas using it.

[F4] [[def-axiom-of-choice]]: Ground AC supports the cardinal thinning and set-sized simultaneous choices. It does not supply the global well-order predicate of F3, and no instance of Power Set in $M[G]$ is used.

[F5] [[def-forcing-relation-for-formulas]]: The existential forcing clause is density of named witnesses: $q\Vdash\exists y\,\psi(y)$ iff below every $q'\le q$ there are $r\le q'$ and a set name $\rho$ with $r\Vdash\psi(\rho)$.

## Proof

1.1 Every ground-definable antichain in $P_3$ is a set. Otherwise the ground global well-order recursively selects a proper-class sequence $\langle(p_\xi,U_\xi):\xi\in\operatorname{Ord}\rangle$ of distinct members. Thin first to a fixed finite support size and fixed finite pattern of section lengths. If every coordinate position were bounded, the antichain would lie in one set $P_\theta$, so some least support position is unbounded. All earlier positions are bounded by an ordinal $\beta$; thin so that the finite supports above $\beta$ are pairwise disjoint. There are only set many restrictions in $P_{\beta^+}$, so one proper subclass has identical bounded restriction. Any two conditions in that subclass now have compatible overlap and disjoint upper supports, and F2 amalgamates them, contradicting antichainhood. [F2, F3, F4]

1.2 Define $\Delta(x)$ to be the least regular $\theta$ with $x\in M[G_\theta]$, and within that least stage choose the $W_O$-least $P_\theta$-name evaluating to $x$. These data lexicographically order $M[G]$. They are definable by F1 and use the supplied predicate from F3. To see that every nonempty set $a$ has a least member, choose $x_0\in a$; only regular stages at most $\Delta(x_0)$ can improve its first coordinate, and those form a set. At the least occupied stage, the set-like restriction of $W_O$ chooses the least evaluating name. Hence the relation is a definable global well-order of $M[G]$. [F1, F2, F3]

1.3 Extensionality is absolute because $M[G]$ is transitive. Given finitely many parameters, F2 puts them in one $M[G_\theta]$, a transitive ZFC set-forcing extension; its empty set, pair, union and $\omega$ are unchanged in the larger union, proving Empty Set, Pairing, Union and Infinity. If $a\ne\varnothing$, put $a$ in one such stage and take there an $\in$-minimal member of $a$; transitivity makes it still $\in$-minimal in the full union, proving Foundation. [F2]

2.1 Every nonempty ground-definable class $C$ of conditions has a set-sized maximal antichain. Traverse the ground global well-order $W_O$ and accept the least member of $C$ incompatible with every previously accepted member. If this never became maximal, the accepted class would be a ground-definable proper-class antichain, contrary to step 1.1. The accepted set is therefore maximal among conditions compatible with some member of $C$; in particular, below any $c\in C$, common refinements with the antichain are dense. [F3, step 1.1]

3.1 Fix a formula $\varphi(x,\vec z)$ of the expanded language, a name $\tau$ for $a$, names for $\vec z$, and $p_0\in G$ forcing any hypotheses in use. For every occurrence $(\sigma,p)\in\tau$, let $C_{\sigma,p}$ be the definable class of common refinements of $p,p_0$ which force $\varphi(\sigma,\vec z)$. If this class is nonempty, use step 2.1 to choose an antichain $A_{\sigma,p}\subseteq C_{\sigma,p}$ maximal among these positive conditions; otherwise put $A_{\sigma,p}=\varnothing$. Form the set name $\dot b=\{(\sigma,q):(\sigma,p)\in\tau,\ q\in A_{\sigma,p}\}$. If $x\in\dot b_G$, some $q\in G$ lies in a positive antichain, so $x\in a$ and F1 gives $\varphi(x,\vec z)$. Conversely, if $x\in a$ and $\varphi(x,\vec z)$, choose $(\sigma,p)\in\tau$ with $p\in G$ and $\sigma_G=x$; F1 gives a positive condition in $G$ below $p,p_0$, and maximality makes common refinements with $A_{\sigma,p}$ dense there, so genericity puts a member of $A_{\sigma,p}$ in $G$. Thus $x\in\dot b_G$. This proves Separation. For $a=\varnothing$, the constructed name is empty. [F1, F3, step 2.1]

3.2 Suppose $p_0$ forces $\forall x\in\tau\,\exists y\,\varphi(x,y,\vec z)$. For each $(\sigma,p)\in\tau$, consider the definable class of common refinements $q\le p,p_0$ equipped with a set name $\rho$ such that $q\Vdash_3\varphi(\sigma,\rho,\vec z)$. Whenever $p$ is compatible with $p_0$, this class projects densely below their common cone: such a $q$ forces $\sigma\in\tau$, so the forced premise and the dense named-witness clause F5, used in F1's fixed-formula class recursion, give a stronger named witness. By step 2.1 choose a set maximal antichain of projected conditions and, using $W_O$, the least witness name $\rho_q$ for each member. Ground Replacement over the set of occurrences in $\tau$ and these set antichains forms the set name $\dot c=\{(\rho_q,q):q\text{ occurs in one of them}\}$. For every $x\in\tau_G$, directedness below the corresponding $p,p_0\in G$ and genericity meet its antichain, so some $(\rho_q)_G\in\dot c_G$ witnesses $\varphi(x,(\rho_q)_G,\vec z)$. This proves Collection, including the empty-domain case. [F1, F3, F5, step 2.1]

4.1 For a functional formula, Collection gives a set containing every unique value, and Separation cuts out exactly those values; hence Replacement follows. Together with step 1.3 and Separation this is ZF without Power Set. Neither the antichain construction nor the witness-name construction formed all subsets of any set: they used only ground Replacement and Separation on already available set names and antichains. Thus the omission of Power Set is genuine, while step 1.2 supplies the additional definable global well-order. [step 1.2, step 1.3, step 3.1, step 3.2] ∎
