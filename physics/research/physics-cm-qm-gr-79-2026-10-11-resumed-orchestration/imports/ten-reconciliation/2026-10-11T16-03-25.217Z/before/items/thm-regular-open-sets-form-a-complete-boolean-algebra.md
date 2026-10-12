---
id: thm-regular-open-sets-form-a-complete-boolean-algebra
kind: theorem
title: Regular open algebra in ZF
status: published
origin: pipeline
deps: [def-complete-boolean-algebra-and-regular-open-sets, lem-boolean-quotient-congruence]
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
verification:
  audited: 2026-09-12
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  references:
    - title: "Fremlin, Measure Theory, 314O–314P, Chapter 31, pp. 37–38"
      url: https://www1.essex.ac.uk/maths/people/fremlin/chap31.pdf
---

## Statement

In ZF, for every topological space $X$, the operations in the regular-open definition make $\operatorname{RO}(X)$ a complete Boolean algebra. Its order is inclusion, finite meets are intersections, and its bounds are $\varnothing,X$. The displayed formulas apply to empty as well as nonempty families, and $X$ may be empty.

## Facts & Assumptions

[F1] [[def-complete-boolean-algebra-and-regular-open-sets]] defines regular opens, their proposed operations, completeness, interior and closure.

[F2] [[lem-boolean-quotient-congruence]] makes the quotient of a Boolean algebra by an ideal a Boolean algebra, identifying two elements exactly when their symmetric difference is in the ideal.

## Proof

**Given:** A topological space $X$; all arguments take place in ZF.

1.1 Put $r(E)=\operatorname{int}\overline E$. This is regular open for any $E\subseteq X$: $r(E)$ is open and contained in the closed set $\overline E$, so $r(E)\subseteq r(r(E))\subseteq\operatorname{int}\overline E=r(E)$. Call $N$ nowhere dense if $\operatorname{int}\overline N=\varnothing$. These sets form an ideal $\mathcal N$ of subsets: the empty set qualifies; subsets qualify by monotonicity; and if $N,M$ qualify, any nonempty open $W$ has a nonempty open part $W\setminus\overline N$, which in turn has a nonempty open part outside $\overline M$. Thus no nonempty open set lies in $\overline N\cup\overline M=\overline{N\cup M}$, proving the finite-union condition. A nowhere-dense set contains no nonempty open set. [F1, algebra]

2.1 For $E\subseteq X$ put $\partial E=\overline E\setminus\operatorname{int}E$, and let $\mathcal A=\{E\subseteq X:\partial E\in\mathcal N\}$. The identities $\partial(X\setminus E)=\partial E$ and $\partial(E\cup F)\subseteq\partial E\cup\partial F$ follow respectively from $\overline{X\setminus E}=X\setminus\operatorname{int}E$ and the closure/interior union inclusions. They and $\partial\varnothing=\varnothing$ show that $\mathcal A$ is closed under complements and finite unions, hence all finite set Boolean operations. It is therefore a Boolean algebra with those operations. If $N\in\mathcal N$, then $\operatorname{int}N=\varnothing$ and $\partial N=\overline N$ is nowhere dense, so $\mathcal N\subseteq\mathcal A$ and is an ideal of it. Every open $U$ belongs to $\mathcal A$: its closed boundary $\overline U\setminus U$ contains no nonempty open $W$, since $W\subseteq\overline U$ would force $W\cap U\ne\varnothing$. [step 1.1, algebra]

3.1 For $E\in\mathcal A$, $\operatorname{int}E\subseteq r(E)\subseteq\overline E$ gives $E\mathbin\triangle r(E)\subseteq\partial E\in\mathcal N$. Also $r(E)\in\mathcal A$ by openness. If regular opens $U,V$ differ by a nowhere-dense set, the open set $U\setminus\overline V$ is a subset of that difference, so it is empty by step 1.1. Hence $U\subseteq\overline V$, and openness gives $U\subseteq\operatorname{int}\overline V=V$. Interchanging $U,V$ gives equality. More generally if both $U$ and $V$ differ from $E$ by nowhere-dense sets, then $U\mathbin\triangle V\subseteq(U\mathbin\triangle E)\cup(E\mathbin\triangle V)$ is nowhere dense, so this uniqueness applies. Thus every class of $\mathcal A/\mathcal N$ has exactly one regular-open representative, namely $r(E)$. [step 1.1, step 2.1, algebra]

4.1 F2 and step 3.1 transport a Boolean algebra structure to $\operatorname{RO}(X)$. To identify its operations, first $U\cap V$ is regular: monotonicity gives $r(U\cap V)\subseteq r(U)\cap r(V)=U\cap V$, and the reverse inclusion follows from openness. Thus the transported meet is $U\cap V$. The transported join is $r(U\cup V)$, the representative of its set-theoretic union class. For the complement put $W=\operatorname{int}(X\setminus U)=X\setminus\overline U$. Since $W\subseteq X\setminus U$ and that latter set is closed, $r(W)\subseteq\operatorname{int}(X\setminus U)=W$; openness gives equality. Also $(X\setminus U)\mathbin\triangle W=\overline U\setminus U$ is nowhere dense by step 2.1, so $W$ is the required complement representative. Bounds transport to $\varnothing,X$, which are regular. The transported order satisfies $U\le V$ iff $U\cap V=U$ iff $U\subseteq V$. In particular all distributive and complement laws hold by F2, rather than by a claim that regular opens are closed under ordinary unions. [F1, F2, step 2.1, step 3.1, algebra]

5.1 For any $\mathcal U\subseteq\operatorname{RO}(X)$, $J=r(\bigcup\mathcal U)$ is regular by step 1.1 and contains each $U\in\mathcal U$, since those sets are open subsets of $\overline{\bigcup\mathcal U}$. If a regular open $V$ contains each $U$, monotonicity gives $J\subseteq r(V)=V$, proving it is the least upper bound. Put $M=\operatorname{int}\bigcap\mathcal U$. For every $U\in\mathcal U$, $r(M)\subseteq r(U)=U$. Since $r(M)$ is open, it follows that $r(M)\subseteq\operatorname{int}\bigcap\mathcal U=M$; the reverse holds because $M$ is open. Thus $M$ is regular. Any regular-open lower bound is an open subset of $\bigcap\mathcal U$, hence lies in $M$, so $M$ is the greatest lower bound. If $\mathcal U$ is empty, these formulas give $J=r(\varnothing)=\varnothing$ and $M=\operatorname{int}X=X$, directly verifying both bounds. If $X=\varnothing$ there is just the one regular open $\varnothing=X$, and the same proof gives the trivial complete Boolean algebra. No countable union of nowhere-dense sets or choice principle has been used. QED. [F1, step 1.1, step 4.1, algebra]
