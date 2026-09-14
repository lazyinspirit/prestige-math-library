---
id: lem-suslin-algebra-refining-antichain-tree
kind: lemma
title: "Refining antichains of a Suslin algebra form a tree"
status: published
origin: pipeline
deps: [def-suslin-hypothesis-and-suslin-algebra, def-normal-splitting-set-theoretic-tree, def-aronszajn-suslin-and-special-tree, thm-transfinite-recursion, thm-countable-union-of-countable, def-axiom-of-choice]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Jech, Set Theory, Definition 30.19 and the converse Suslin-algebra assertion, printed p. 594"
      url: https://fa.ewi.tudelft.nl/~hart/onderwijs/set_theory/Jech/30-complete_Boolean_algebras.pdf
    - title: "Bukovsky, Generic extensions of models of ZFC, Lemma 9 proof, printed pp. 356-357"
      url: https://cmuc.karlin.mff.cuni.cz/pdf/cmuc1703/bukovsky.pdf
justified_by: []
forward_refs: []
---

## Statement

Let $B$ be a Suslin algebra. In ZFC there is a sequence $(A_\alpha)_{\alpha<\omega_1}$ of countable maximal Boolean antichains such that $A_0=\{1\}$, every $A_\beta$ refines every earlier $A_\alpha$, each successor level strictly splits every member of the preceding level into two members, and at a nonzero limit $\lambda$,

$$A_\lambda=\left\{\bigwedge_{\xi<\lambda}a_\xi>0:(a_\xi)_{\xi<\lambda}\text{ is a coherent branch through the earlier }A_\xi\right\}.$$

Thus the tagged union of the $A_\alpha$, ordered by reverse strict Boolean order, is a normal splitting Suslin tree.

## Facts & Assumptions

**Given:** A Suslin algebra $B$ and AC.

[F1] A Suslin algebra is a nontrivial complete atomless ccc Boolean algebra satisfying the exact diagonal countable-distributivity law. [[def-suslin-hypothesis-and-suslin-algebra]]

[F2] A normal tree has one root, extensions to every higher level, and unique limit nodes over a predecessor set; splitting means at least two immediate successors. [[def-normal-splitting-set-theoretic-tree]]

[F3] A Suslin tree has height $\omega_1$, countable levels, no cofinal branch, and no uncountable antichain. [[def-aronszajn-suslin-and-special-tree]]

[F4] A well-determined rule on earlier values has a unique transfinite-recursive solution. [[thm-transfinite-recursion]]

[F5] A countable union of at most countable sets is at most countable under countable choice. [[thm-countable-union-of-countable]]

[A1] AC supplies a well-order of the relevant sets, simultaneous choices from nonempty splitting sets, countable choice, and countable enumerations. [[def-axiom-of-choice]]

## Proof

1.1 By AC well-order $B$. For each $a>0$, atomlessness makes $S_a=\{c:0<c<a\}$ nonempty; let $s(a)$ be its least member and put $a^0=s(a)$ and $a^1=a\wedge\neg s(a)$. Then $a^0,a^1$ are nonzero, disjoint, and have join $a$: if $a^1=0$, then $a\le s(a)$, contradicting $s(a)<a$. Thus this one fixed selector gives a genuine binary split of every positive element, including $1$; zero is never a node. [F1, A1, choose]

2.1 Prescribe $A_0=\{1\}$; prescribe $A_{\alpha+1}=\{a^0,a^1:a\in A_\alpha\}$; and, for every nonzero limit $\lambda<\omega_1$, prescribe $A_\lambda$ to be exactly the positive meets $\bigwedge_{\xi<\lambda}a_\xi$ of coherent sequences with $a_\xi\in A_\xi$ and $a_\eta\le a_\xi$ whenever $\xi<\eta<\lambda$. These clauses are determined by the earlier levels and the fixed selector from step 1.1, so F4 gives a unique sequence $(A_\alpha)_{\alpha<\omega_1}$. [F4, step 1.1, construct]

3.1 Inductively, each $A_\alpha$ is a countable maximal Boolean antichain and every later level refines every earlier one. This is clear for $A_0$; the split identities of step 1.1 prove it at successors and prove strict refinement. Let $0<\lambda<\omega_1$ be limit and assume the assertion below $\lambda$. The tagged union of the earlier levels is countable by F5, since $\lambda$ and all its levels are countable. Choose a nondecreasing cofinal sequence $(\xi_n)_{n<\omega}$ in $\lambda$ and enumerate each nonempty countable antichain $A_{\xi_n}$ as $(a_{n,m})_{m<\omega}$, repeating entries when necessary. Each row has join $1$, so F1 gives $1=\bigwedge_n\bigvee_m a_{n,m}=\bigvee_{f\in\omega^\omega}\bigwedge_n a_{n,f(n)}$. A positive diagonal meet can use only compatible entries; refinement and the antichain property then make these entries a decreasing cofinal selection, which extends uniquely to a coherent choice through every earlier level. Its meet over all $\xi<\lambda$ equals its meet on the cofinal sequence, so every positive diagonal meet belongs to $A_\lambda$. Hence $\bigvee A_\lambda=1$. Distinct coherent branches first differ in some earlier antichain and therefore have disjoint meets, so $A_\lambda$ is an antichain; join $1$ makes it maximal, and ccc makes it countable. Its definition gives refinement. This proves the induction, and also proves that every limit level is precisely the displayed continuous branch-meet level rather than a subsequent maximal extension. [F1, F5, A1, step 1.1, step 2.1]

4.1 Let $T=\{(\alpha,a):\alpha<\omega_1\text{ and }a\in A_\alpha\}$ and define $(\alpha,a)<_T(\beta,b)$ exactly when $\alpha<\beta$ and $b\le_B a$. By step 3.1, every $b\in A_\beta$ lies below exactly one member of each $A_\alpha$ for $\alpha<\beta$: existence is refinement and uniqueness is disjointness. Consequently the strict predecessors of $(\beta,b)$ are well-ordered with one node at each height below $\beta$, so $T$ is a tree, its $\alpha$-th level is the tagged copy of $A_\alpha$, and its height is $\omega_1$. [step 3.1, construct]

5.1 The node $(0,1)$ is the unique root. If $(\alpha,a)\in T$ and $\alpha<\beta<\omega_1$, some member of $A_\beta$ lies below $a$: otherwise refinement would put every member of $A_\beta$ below an $A_\alpha$-member disjoint from $a$. In a complete Boolean algebra, fixed meet distributes over an arbitrary join (if $y$ bounds every $a\wedge x$, then $\neg a\vee y$ bounds every $x$), so this would give $a=a\wedge\bigvee A_\beta=\bigvee_{b\in A_\beta}(a\wedge b)=0$, a contradiction. Thus every node extends to every higher level. If two nodes on a nonzero limit level have the same strict predecessors, their coherent earlier choices agree, and step 2.1 makes both Boolean values the meet of that same branch, so the nodes coincide. At a successor level, step 1.1 gives exactly the two immediate successors $(\alpha+1,a^0)$ and $(\alpha+1,a^1)$ of $(\alpha,a)$. Hence $T$ is normal and splitting in the exact sense of F2. [F1, F2, step 1.1, step 2.1, step 3.1, step 4.1]

5.2 If two nodes are incomparable in $T$, their Boolean values are disjoint: for nodes on different levels, the later value lies below a unique member of the earlier antichain, and incomparability says that member is not the earlier node. Thus a tree antichain maps injectively to a Boolean antichain, which is countable by the ccc of $B$. In particular every level is countable, as was also proved in step 3.1. [F1, step 3.1, step 4.1]

6.1 Suppose that $C$ were a cofinal branch. Maximality of a branch together with the unique-predecessor description in step 4.1 puts exactly one node $(\alpha,a_\alpha)$ of $C$ on every level. At each successor, $0<a_{\alpha+1}<a_\alpha$ by the strict split, so $d_\alpha=a_\alpha\wedge\neg a_{\alpha+1}$ is nonzero. If $\alpha<\beta$, then $d_\beta\le a_\beta\le a_{\alpha+1}$ while $d_\alpha\wedge a_{\alpha+1}=0$; hence $(d_\alpha)_{\alpha<\omega_1}$ is an uncountable Boolean antichain, contradicting ccc. Therefore $T$ has no cofinal branch. [F1, step 1.1, step 4.1, step 5.1]

7.1 Steps 4.1, 5.1, 5.2, and 6.1 verify height $\omega_1$, countable levels, no cofinal branch, no uncountable antichain, normality, and splitting. By F3, $T$ is a normal splitting Suslin tree, and step 3.1 supplies the promised continuous refining antichain sequence. AC was used only to fix the simultaneous split selector and the countable enumerations/cofinal sequences; no Boolean prime ideal theorem or maximal-antichain extension is used. [F3, A1, step 3.1, step 4.1, step 5.1, step 5.2, step 6.1] ∎
