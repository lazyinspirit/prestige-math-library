---
id: lem-ordinal-definable-maximal-proper-ideal-in-the-basic-cohen-model
kind: lemma
title: A supported Boolean algebra has an ideal maximal in its supported-definability class
status: draft
origin: pipeline
deps: [def-boolean-ideals-filters-and-primality, def-ordinal-definability-and-hod, lem-canonical-well-order-of-finite-definition-codes, thm-transfinite-recursion]
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - {title: "Miroslav Repický, A proof of the independence of the Axiom of Choice from the Boolean Prime Ideal Theorem, maximal-ideal construction, p.545", url: "https://im.saske.sk/~repicky/-r30.pdf"}
---

## Statement

Work in Repický's basic Cohen presentation $C=\operatorname{HOD}^{V[G]}(A)$, with its displayed finite-support convention: every member is hereditarily ordinal-definable in $V[G]$ from $A$ and finitely many members of $A$. Let $B\in C$ be a nontrivial Boolean algebra, so $0_B\ne1_B$, and suppose $B$ is ordinal-definable from $A$ and a fixed finite tuple $f$ of members of $A$. Then there is a proper ideal $I\subseteq B$ such that

- $I$ is ordinal-definable from $A,f$; and
- whenever $J\subseteq B$ is a proper ideal ordinal-definable from $A,f$ and $I\subseteq J$, one has $J=I$.

Thus $I$ is maximal among the proper ideals in the fixed supported definability class. No assertion of maximality among all ideals of $B$ is made here.

## Facts & Assumptions

**Given:** The nontrivial Boolean algebra $B$ and its fixed ordinal definition from $A,f$.

[F1] [[def-boolean-ideals-filters-and-primality]] defines proper ideals and says that the trivial Boolean algebra has no proper ideal.

[F2] [[def-ordinal-definability-and-hod]] makes unique ordinal definability a first-order coded property using a rank, a formula code, and a finite ordinal tuple. Treat $A$ as one fixed predicate and $f$ as one fixed finite parameter; neither is drawn from a family that must be well-ordered.  For codes $(\theta,e,\vec\alpha)$, first minimize the rank $\theta$, then the natural-number formula/arity code $e$, and finally the tuple $\vec\alpha\in\theta^n$ lexicographically.  The last minimization is exactly [[lem-canonical-well-order-of-finite-definition-codes]] applied to the well-ordered set $\theta$ and the one fixed arity $n$.  Thus every supported-definable object has a unique least code. Replacement collects the least codes of any given set of such objects into a set well-order; no well-order of $A$ is asserted.

[F3] [[thm-transfinite-recursion]] gives a unique recursion along a set well-order in ZF.

[F4] [[thm-transfinite-recursion]] explicitly uses no form of Choice.

## Proof

**Proof technique:** induction.

1.1 Let $\mathcal D$ be the set of all proper ideals $J\subseteq B$ which are ordinal-definable from $A,f$. This is a set by Separation from $\mathcal P(B)$, because existence of a rank, formula code, and finite ordinal tuple giving a unique definition is the first-order property in F2. It is nonempty: nontriviality makes $\{0_B\}$ a proper ideal, and $0_B$ is uniquely definable from the supported algebra $B$. Assign to each member of $\mathcal D$ its unique least code in the rank–formula–fixed-arity tuple order of F2. Replacement makes the range a set; restriction of that setlike class order well-orders the range and therefore well-orders $\mathcal D$. Enumerate its order type as $\langle J_\xi:\xi<\theta\rangle$. [F1, F2, given]

1.2 By F3 define an increasing sequence $\langle I_\xi:\xi\le\theta\rangle$. Put $I_0=\{0_B\}$. Given $I_\xi$, set

$$I_{\xi+1}=\begin{cases}J_\xi,&I_\xi\subseteq J_\xi,\\ I_\xi,&I_\xi\nsubseteq J_\xi.\end{cases}$$

At a nonzero limit $\lambda\le\theta$, put $I_\lambda=\bigcup_{\xi<\lambda}I_\xi$. Every successor value is uniquely determined by the displayed test, and every limit value is a specified union, so this is a class-function recursion rather than a sequence of choices. [F3, F4, step 1.1, construct]

2.1 We prove by transfinite induction that every $I_\xi$ is a proper ideal and that $I_\eta\subseteq I_\xi$ for $\eta<\xi$. The initial ideal is proper by nontriviality. [F1, step 1.2, base] At a successor, either the value is unchanged or it is the proper ideal $J_\xi$ containing the preceding value. At a limit, the union of an increasing chain of ideals contains $0_B$, is downward closed, and is closed under binary joins because any two of its elements already occur together at some later one of their two stages. If $1_B$ belonged to the union, it would belong to one earlier $I_\xi$, contradicting that stage's propriety. [F1, step 1.2, ih]

3.1 Put $I=I_\theta$. The recursion and its input well-order are uniquely definable from $A,f$ and the fixed definition of $B$, so F2 and F3 make $I$ ordinal-definable from $A,f$. Step 2.1 makes it a proper ideal. Moreover $\operatorname{TC}(I)\subseteq\{I\}\cup\operatorname{TC}(B)$ because $I\subseteq B$. The set $I$ has the displayed supported definition, while every descendant in $\operatorname{TC}(B)$ has the hereditary definability required by $B\in C$. The parameter-HOD convention in the Statement therefore gives $I\in C$ directly; no theorem about ordinary parameter-free HOD is being substituted. [F2, F3, step 2.1, given]

4.1 Suppose $J\in\mathcal D$ and $I\subseteq J$. Write $J=J_\beta$. Since $I_\beta\subseteq I\subseteq J_\beta$, the successor rule gives $I_{\beta+1}=J_\beta$. Monotonicity then gives $J\subseteq I$, and hence $J=I$. This proves the asserted maximality within $\mathcal D$. It neither applies Zorn's lemma nor chooses a maximal member of an arbitrary partially ordered set; every stage is forced by a fixed definable well-order and a yes-or-no inclusion test, as F4 permits. [F4, step 1.1, step 1.2, step 2.1, discharge-induction] ∎
