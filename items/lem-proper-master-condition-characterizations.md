---
id: lem-proper-master-condition-characterizations
kind: lemma
title: "Master-condition characterizations"
status: published
origin: pipeline
deps: [def-countable-model-generic-master-condition-and-proper-poset, thm-forcing-theorem, lem-forcing-monotonicity-density-and-decision, thm-downward-lowenheim-skolem-with-parameters, def-axiom-of-choice]
justified_by: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-14
sources:
  references:
    - title: "Karagila, Forcing & Symmetric Extensions, Proposition 8.4 and complete proof, printed pp. 38-39"
      url: https://karagila.org/files/Forcing-2023.pdf
    - title: "Cummings, Iterated Forcing and Elementary Embeddings, Lemma 24.2, printed pp. 97-98"
      url: https://www.math.cmu.edu/users/jcumming/papers/repaper_finished_june_2008.pdf
    - title: "Jech, Set Theory, Theorem 31.7 and Lemma 31.16, printed pp. 603-605"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/31-proper_forcing.pdf
---

## Statement

Let $P\in M$ and $M$ be as in the master-condition definition. For $q\in P$
the following are equivalent:

- (i) $q$ is $(M,P)$-generic;
- (ii) for every dense $D\in M$,
   $q\Vdash \dot G\cap D\cap M\ne\varnothing$;
- (iii) $q\Vdash M[\dot G]\cap V=M$;
- (iv) $q\Vdash M[\dot G]\cap\mathrm{Ord}=M\cap\mathrm{Ord}$.

Here $M[G]=\{\dot x^G:\dot x\in M\text{ is a }P\text{-name}\}$. Moreover,
the club-of-countable-models formulation of properness is equivalent to the
all-model formulation in sufficiently large structures
$(H_\lambda,\in,<_{\lambda},P,\ldots)$.

## Facts & Assumptions

**Given:** ZFC, the displayed $P,M,q$, and the stronger-is-smaller forcing convention.

[F1] $(M,P)$-genericity means that $D\cap M$ is predense below $q$ for every dense $D\in M$. [[def-countable-model-generic-master-condition-and-proper-poset]]

[F2] The forcing theorem supplies definability and the truth lemma for the formulas and names used below. [[thm-forcing-theorem]]

[F3] Forcing is persistent, every formula is densely decided, and truth on a dense set below a condition is equivalent to being forced by that condition. [[lem-forcing-monotonicity-density-and-decision]]

[F4] Downward Löwenheim--Skolem supplies elementary Skolem hulls containing specified parameters. [[thm-downward-lowenheim-skolem-with-parameters]]

[A1] AC supplies maximal antichains, well-orders of them, and the ambient well-orders/Skolem closures. [[def-axiom-of-choice]]

## Proof

1.1 Fix $D\in M$ dense. If $D\cap M$ is predense below $q$, then conditions below $q$ that extend a condition of $D\cap M$ are dense below $q$; F2 gives $q\Vdash\dot G\cap D\cap M\ne\varnothing$. Conversely, if some $r\leq q$ were incompatible with every member of $D\cap M$, then $r$ would force that intersection empty. This proves (1) if and only if (2). [F1, F2, F3]

2.1 Assume (1). The inclusion $M\subseteq M[G]\cap V$ follows from check names. For the reverse inclusion, let $r\leq q$ force that a name $\dot x\in M$ equals a ground object $x$. Define $D_{\dot x}$ to contain (a) every $s$ for which some ground object $y$ satisfies $s\Vdash\dot x=\check y$, and (b) every $s$ below which no condition has property (a). This set is dense: from any condition, either an extension has property (a), or the original condition has property (b). By definability of forcing it belongs to $M$. Since $D_{\dot x}\cap M$ is predense below $q$, some $s\in D_{\dot x}\cap M$ is compatible with $r$. It cannot have property (b), because a common extension with $r$ would force $\dot x=\check x$ while admitting no ground-value extension. Hence $s$ has property (a); by elementarity its witness may be taken as some $y\in M$. A common extension of $r$ and $s$ forces both $\dot x=\check x$ and $\dot x=\check y$, so $x=y\in M$. Thus $q$ forces every ground member of $M[\dot G]$ to lie in $M$, proving (3). Statement (3) immediately implies (4), since ordinals are ground objects and check names give the opposite inclusion. [F1, F2, F3, step 1.1]

3.1 Assume (4), and let $A\in M$ be a maximal antichain. In $M$, use A1 to fix a bijection $e:\xi\to A$ from an ordinal $\xi$, and form by mixing the name $\dot\beta$ for the unique index of the member of $A\cap\dot G$. Then $\dot\beta\in M$ and $q\Vdash\dot\beta\in M\cap\mathrm{Ord}$ by (4). Consequently $q$ forces $e(\dot\beta)\in A\cap M\cap\dot G$, so $A\cap M$ is predense below $q$. Every dense $D\in M$ contains, by elementarity and A1, such a maximal antichain $A\in M$; hence $D\cap M$ is predense below $q$ and (1) follows. [F1, F2, A1, step 2.1]

4.1 The all-model definition immediately gives the club formulation, since the countable elementary submodels of a fixed well-ordered $H_\mu$ structure form a club by F4 and A1. Conversely, suppose the good models contain a club in $[H_\mu]^\omega$, where $\mu>2^{|P|}$. Represent a subclub as the models closed under a function $F:H_\mu^{<\omega}\to H_\mu$. Choose $\lambda>\mu$ and a well-order $<_{\lambda}$ so that $F$ may be taken as the $<_{\lambda}$-least such witness. Every countable $M\prec(H_\lambda,\in,<_{\lambda},P,\ldots)$ is then closed under $F$, so $N=M\cap H_\mu$ is a good club model. Every subset of $P$, and hence every dense set or maximal antichain in $M$, belongs to $H_\mu$; therefore $D\cap N=D\cap M$. An $(N,P)$-master below $p\in P\cap M$ is thus also an $(M,P)$-master. This proves the all-model formulation and completes both claimed equivalences. AC is used exactly for A1; no countable transitive model or generic filter is selected. [F1, F4, A1, step 3.1] ∎
