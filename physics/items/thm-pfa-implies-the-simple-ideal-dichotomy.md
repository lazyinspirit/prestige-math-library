---
id: thm-pfa-implies-the-simple-ideal-dichotomy
kind: theorem
title: PFA implies the simple ideal dichotomy
status: published
origin: pipeline
deps:
  - def-simple-dichotomy-for-omega-one-generated-ideals
  - def-proper-forcing-axiom
  - def-countable-model-generic-master-condition-and-proper-poset
  - lem-proper-master-condition-characterizations
  - thm-ccc-and-countably-closed-forcings-are-proper
  - thm-countable-elementary-submodels-and-transitive-collapses
  - lem-uncountable-delta-system-for-finite-sets
  - thm-countable-union-of-countable
  - cor-cardinal-absorption
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
    - title: "Abraham, Lecture notes on the P-ideal dichotomy, First Form through Theorem 1.4, rendered lines 44–207"
      url: https://paperzz.com/doc/7877075/lecture-notes-on-the-p-ideal-dichotomy
    - title: "Abraham, Three applications of ideal dichotomy, slides 1–4"
      url: https://www.winterschool.eu/files/4-P-Ideal_Dichotomy_III.pdf
---

## Statement

The Proper Forcing Axiom proves both of Abraham's forms for every ideal
$\mathcal I$ of countable subsets generated modulo finite by $\omega_1$
members:

1. either the ground set is a countable union of sets inside $\mathcal I$, or
   it has an uncountable subset outside $\mathcal I$;
2. either the ground set is a countable union of sets outside $\mathcal I$, or
   it has an uncountable subset inside $\mathcal I$.

Consequently PFA implies the simple dichotomy for every such ideal.  No
P-ideal hypothesis is assumed.

## Facts & Assumptions

**Given:** ZFC plus PFA, an uncountable set $S$, and an ideal $\mathcal I$ on $S$ generated modulo finite by $\langle A_\xi:\xi<\omega_1\rangle$.

[F1] [[def-simple-dichotomy-for-omega-one-generated-ideals]] gives the ideal, generation, inside, outside, restriction, and simple-dichotomy conventions.

[F2] [[def-proper-forcing-axiom]] supplies a filter meeting any at-most $\omega_1$ family of dense subsets of a nonempty proper forcing.

[F3] Properness may be proved by adding an $(M,P)$-master below every $p\in M\cap P$; masterhood means that $D\cap M$ is predense below it for every dense $D\in M$ ([[def-countable-model-generic-master-condition-and-proper-poset]], [[lem-proper-master-condition-characterizations]]).

[F4] Suitable countable elementary submodels exist ([[thm-countable-elementary-submodels-and-transitive-collapses]]).

[F5] Every ccc forcing is proper ([[thm-ccc-and-countably-closed-forcings-are-proper]]).

[F6] Under AC, every uncountable family of finite sets has an uncountable $\Delta$-system ([[lem-uncountable-delta-system-for-finite-sets]]), a countable union of countable sets is countable ([[thm-countable-union-of-countable]]), and $\aleph_1\cdot\aleph_0=\aleph_1$ by infinite-cardinal absorption ([[cor-cardinal-absorption]]).

[F7] [[def-axiom-of-choice]] supplies all model, enumeration, thinning, and witness selections below and is part of the ambient ZFC of PFA.

## Proof

**Proof technique:** direct forcing construction.

1.1 Put $T=\bigcup_{\xi<\omega_1}A_\xi$ and $R=S\setminus T$.  Generation modulo finite makes $R$ outside $\mathcal I$.  AC chooses an enumeration of each countable $A_\xi$, so $T$ injects into $\omega_1\times\omega$ and [F6] gives $|T|\leq\aleph_1$.  If $R$ is uncountable, it already supplies the outside branch of Form 1.  Otherwise $|S|\leq\aleph_1$, and uncountability gives $|S|=\aleph_1$; transport $S,\mathcal I$, and the generators along a bijection with $\omega_1$.  Thus, for the nontrivial Form-1 case, we may work on $S=\omega_1$. [F1, F6, F7, given]

2.1 Assume that $S$ is not a countable union of sets inside $\mathcal I$.  Define $P_1$ as follows.  A condition $p=(x_p,d_p,\mathcal N_p)$ has finite $x_p,d_p\subseteq\omega_1$ and a finite membership chain $\mathcal N_p$ of countable elementary submodels of a fixed well-ordered expansion of $H(\aleph_2)$ containing $\mathcal I$ and the generator map.  Require that whenever $\alpha<\beta$ are in $x_p$, some $N\in\mathcal N_p$ satisfies $\alpha\in N$ and $\beta\notin N$, equivalently $\alpha<N\cap\omega_1\leq\beta$; this is the meaning of “the models separate distinct points of $x_p$.”  If $\eta\in x_p$ lies above $N\cap\omega_1$ for $N\in\mathcal N_p$, then $\eta$ belongs to no $Y\in N$ that is inside $\mathcal I$.  A stronger $q\leq p$ enlarges all three finite coordinates and, for each $\xi\in d_p$, freezes $x_q\cap A_\xi=x_p\cap A_\xi$. [F1, F4, F7, step 1.1]

3.1 For every $\gamma<\omega_1$, conditions putting a point above $\gamma$ into $x_p$ are dense.  Given $p$, append a countable model $N$ containing $p$ and $\gamma$, so $x_p\subseteq N$ and $\gamma<N\cap\omega_1$.  The union of the countably many inside sets belonging to $N$ cannot cover $S$ by the assumption in step 2.1.  A point outside that union is outside $N\cap\omega_1$ because every singleton from $N$ is an inside set in $N$; append that point to $x_p$.  For every $\xi<\omega_1$, the set of conditions with $\xi\in d_p$ is dense by simply enlarging $d_p$. [F1, F4, F7, step 2.1]

3.2 To prove properness, take a large countable $M\prec H(\kappa)$ containing $P_1$ and a condition $p_0\in M\cap P_1$.  Append $N^*=M\cap H(\aleph_2)$ to the side chain.  Because every finite coordinate of $p_0$ lies in $M$, this is a condition $p\leq p_0$.  Fix $r\leq p$ and dense $D\in M$, and first strengthen $r$ into $D$.  The model $N^*$ cuts the increasing enumeration $x_r=\{\alpha_0<\cdots<\alpha_k\}$ after some $\alpha_i$; the lower part $r\restriction M$ belongs to $M$. [F3, F4, F7, step 2.1]

4.1 Let $E\in M$ be the set of $(k+1)$-tuples end-extending the $x$-coordinate of $r\restriction M$ that occur as the $x$-coordinate of some condition in $D$ extending that lower part.  It contains $(\alpha_0,\ldots,\alpha_k)$.  We use the following fibre observation at each side model: if $N$ is countable, $b\notin N$ avoids every inside set in $N$, $a\in N$, and $H=\{z<\omega_1:\varphi(z,a)\}\in N$ contains $b$, then $H$ is not inside $\mathcal I$; otherwise the condition's avoidance clause would exclude $b$.  Starting at $\alpha_k$ and moving down to $\alpha_{i+1}$, apply this observation to the definable successive fibres of $E$.  The intervening side model contains $E$ and all earlier coordinates but lies below the current coordinate.  We obtain in $M$ nested non-inside candidate sets $Y_{i+1},\ldots,Y_k$ such that every successive choice from them completes to a tuple in $E$. [F1, step 2.1, step 3.2]

5.1 Put $Z=\bigcup_{\xi\in d_r}A_\xi\in\mathcal I$.  At a candidate stage, $Y_j$ is not inside, so elementarity gives a countable $C_j\in M$ with $C_j\subseteq Y_j$ and $C_j\notin\mathcal I$.  Since $Z\in\mathcal I$, choose $a_j\in C_j\setminus Z$; countability of $C_j\in M$ gives $C_j\subseteq M$.  Recursing through the nested fibres gives a tuple in $E\cap M$ and hence $q\in D\cap M$ extending $r\restriction M$, with every new $x_q$-point outside $Z$.  The union of $q$ and $r$ is a condition: their model chains merge through $N^*$; upper points of $r$ avoid every inside generator named by $d_q\in M$; and the replacement points of $q$ avoid every generator named by $d_r$.  These last two facts verify both directions of the freezing requirement.  Thus $q$ is compatible with $r$. [F1, F3, F7, step 3.2, step 4.1]

6.1 Step 5.1 says that $p$ is an $(M,P_1)$-master, so [F3] makes $P_1$ proper.  Apply PFA to the dense sets in step 3.1.  For the resulting filter $G$, let $X=\bigcup_{p\in G}x_p$.  It is unbounded, hence uncountable.  For each generator $A_\xi$, a condition in $G$ puts $\xi$ into its finite $d$-coordinate, after which directedness and freezing show that $X\cap A_\xi$ is exactly that condition's finite intersection.  By [F1], $X$ is outside $\mathcal I$.  Together with the alternative excluded in step 2.1 and the reduction in step 1.1, this proves Form 1. [F1, F2, F3, step 1.1, step 2.1, step 3.1, step 5.1]

7.1 Now suppose there is no uncountable set inside $\mathcal I$.  For every uncountable $Y\subseteq S$, apply Form 1 to $\mathcal I\restriction Y$.  Its countable-union branch would make some inside piece uncountable by [F6], contrary to the supposition.  Hence every uncountable $Y\subseteq S$ contains an uncountable subset outside $\mathcal I$. [F1, F6, F7, step 6.1]

8.1 Retain $T$ and $R$ from step 1.1.  The set $R$ is outside.  If $T$ is countable, partition it into singletons, which are outside, and add $R$ as one more piece; this proves the countable outside decomposition.  Assume henceforth that $T$ is uncountable.  Then $|T|=\aleph_1$ by [F6]. [F1, F6, step 1.1, step 7.1]

9.1 On $T$ define $P_2$ to consist of pairs $(f_p,d_p)$ with $f_p:T\rightharpoonup\omega$ finite and $d_p\subseteq\omega_1$ finite.  Put $q\leq p$ when $q$ extends both coordinates and, for every $\xi\in d_p$ and every $n\in\operatorname{ran}(f_p)$, $$f_q^{-1}\{n\}\cap A_\xi=f_p^{-1}\{n\}\cap A_\xi.$$ Thus a recorded generator freezes every colour already present, while a new colour may be introduced once. [F1, step 7.1, step 8.1]

10.1 The forcing $P_2$ is ccc.  Given uncountably many conditions, apply [F6] to their function domains and $d$-coordinates, thin to fixed finite sizes and common roots, and make all functions agree on the domain root.  Enumerate the disjoint domain petals in a fixed order.  Repeatedly use step 7.1 so that, for each petal coordinate, its uncountable set of values is outside $\mathcal I$.  Their finite union $O$ is outside.  For each remaining condition $p_\eta$, the set $B_\eta=O\cap\bigcup_{\xi\in d_{p_\eta}}A_\xi$ is finite.  Thin the finite $B_\eta$ to a $\Delta$-system.  Its root meets at most one disjoint domain petal, while its disjoint petals and the domain petals each meet only finitely many petals of the other family.  Hence choose distinct $\eta,\zeta$ with each condition's domain petal disjoint from the other's $B$-set.  The coordinatewise unions of their functions and side sets then satisfy both freezing clauses and form a common extension. [F1, F6, F7, step 7.1, step 9.1]

10.2 The following sets are dense in $P_2$: conditions deciding a specified $t\in T$, conditions placing a specified $\xi<\omega_1$ into $d_p$, and conditions whose function range contains a specified $n<\omega$.  For the first or third demand, if necessary assign a new point a colour not yet in the finite range (the specified $n$ itself when it is absent); this cannot violate a freeze, which only mentions old colours. [step 9.1]

11.1 By steps 10.1 and [F5], $P_2$ is proper.  PFA applied to the at-most-$\omega_1$ dense sets of step 10.2 gives a filter whose union is a total $f:T\to\omega$.  Fix $n$ and $\xi$.  Directedness combines a condition recording $\xi$ with one already using colour $n$; below their common extension that intersection is frozen.  Consequently $f^{-1}\{n\}\cap A_\xi$ is finite.  Each colour class is outside $\mathcal I$ by [F1], so these classes, together with $R$, form a countable outside decomposition of $S$.  This proves Form 2 under the no-inside hypothesis; its other branch is precisely an uncountable inside set. [F1, F2, F5, step 8.1, step 10.1, step 10.2]

12.1 Finally, Form 1 alone yields the simple dichotomy: its outside branch is already a witness, while in its countable-union branch [F6] makes at least one inside piece uncountable.  Form 2 gives the symmetric conclusion as well.  Empty finite coordinates, empty roots, a generator-free $T$, and new colours were handled in steps 1.1, 8.1, 9.1, and 10.2.  All model, thinning, enumeration, and witness choices are the AC uses recorded by [F7]. [F1, F6, F7, step 6.1, step 11.1] ∎
