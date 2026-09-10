---
id: lem-dyadic-coding-coin-measure-and-lebesgue-transfer
kind: lemma
title: "Dyadic coding supplies coin measure and its completed Lebesgue transfer"
status: draft
origin: pipeline
deps: ["def-dependent-choice", "def-countable-choice", "lem-cantor-and-baire-sequence-coding", "thm-lebesgue-measure-is-a-complete-measure", "thm-borel-sets-are-lebesgue-measurable", "thm-lebesgue-measure-of-a-box-of-every-kind", "thm-continuity-from-above-for-measures", "thm-continuity-from-below-for-measures", "def-borel-sigma-algebra", "def-measure", "thm-recursion", "cor-archimedean-reciprocal", "thm-nested-interval-property", "def-continuous-map-top", "def-compact-space"]
justified_by: []
forward_refs: []
landmark: false
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: "direct"
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-10
sources:
  scraped: []
  references:
    - title: "opening coin-measure convention p393; local construction supplies its previously missing prerequisites; full mathematical text pp393–396 and references/end p397 read 2026-09-09. Measure construction and transfer supplied locally."
      url: "https://seminariomatematico.polito.it/rendiconti/61-4/393.pdf"
---
## Statement

In ZF there is an injection $b:[0,1)\to\mathcal C$ whose cylinder preimages are dyadic half-open intervals. Under DC, $\nu(D)=\lambda(b^{-1}[D])$ on Borel $D\subseteq\mathcal C$ is a probability measure with $\nu(N_s)=2^{-|s|}$. For arbitrary $E\subseteq\mathcal C$ put

$$\nu_{\rm in}(E)=\sup\{\nu(K):K\subseteq E\text{ closed}\},\qquad \nu_{\rm out}(E)=\inf\{\nu(O):E\subseteq O\text{ open}\}.$$

Then $0\leq\nu_{\rm in}(E)\leq\nu_{\rm out}(E)\leq1$ and $\nu_{\rm out}(E)=1-\nu_{\rm in}(\mathcal C\setminus E)$. Equality of the two bounds implies $b^{-1}[E]$ Lebesgue measurable. Continuity from above and below holds for $\nu$. Already in ZF, any compact Cantor copy in $b[A]$, for $A\subseteq[0,1)$, transfers to a compact Cantor copy in A. The ZF clauses do not use DC.

## Facts & Assumptions

[F1] [[lem-cantor-and-baire-sequence-coding]] gives the cylinder topology, compact Cantor space and explicit finite-word coding.

[F2] [[thm-recursion]] supplies prescribed natural recursion.

[F3] [[cor-archimedean-reciprocal]] gives shrinking reciprocal bounds; [[thm-nested-interval-property]] gives unique limits of nested intervals of vanishing length.

[F4] [[def-borel-sigma-algebra]] gives the least sigma-algebra containing opens.

[F5] [[thm-lebesgue-measure-is-a-complete-measure]] gives the complete Lebesgue measure under countable choice, and [[thm-borel-sets-are-lebesgue-measurable]] gives Borel measurability under that hypothesis.

[F6] [[thm-lebesgue-measure-of-a-box-of-every-kind]] gives half-open interval lengths under countable choice.

[F7] [[def-measure]] specifies countable additivity; [[thm-continuity-from-above-for-measures]] and [[thm-continuity-from-below-for-measures]] give the indicated continuity properties.

[F8] [[def-continuous-map-top]] and [[def-compact-space]] give the neighbourhood and open-cover definitions.

[A1] For measure clauses only assume [[def-dependent-choice]]. [[def-countable-choice]] is the countable selection assertion derived in step 1.2.

## Proof

**Given:** The fixed sequence space. Steps 1.1, 2.1, 2.2 and 6.1 are in ZF; steps 1.2, 3.1, 4.1 and 5.1 assume DC.

1.1 Put $I_\varnothing=[0,1)$. Recursively split $I_s=[a,a+2^{-n})$, $|s|=n$, into $I_{s^\frown0}=[a,a+2^{-n-1})$ and $I_{s^\frown1}=[a+2^{-n-1},a+2^{-n})$. The two halves partition I_s, including the midpoint in the right half only. For each $x\in[0,1)$ the unique half containing x at each stage determines b(x) by F2. Thus $b^{-1}[N_s]=I_s$ at every n, including the root. If b(x)=b(y), both points lie in one interval of length $2^{-n}$ for every n, so $|x-y|<2^{-n}$. Since $2^n\geq n+1$, F3 implies these bounds tend to zero, giving x=y. [F1, F2, F3]

1.2 Assume A1's DC. Given any sequence of nonempty sets $(X_n)$, let S be the set of finite selections on initial segments, including the empty selection. Every selection of length n has an extension of length n+1, because X_n is nonempty. The relation of one-coordinate extension is entire on this nonempty set. DC with starting value empty gives a chain whose nth term has length n. Its union selects one member of every X_n, exactly countable choice. This licenses the countable-choice hypotheses of F5 and F6, without assuming AC. [A1]

2.1 Every open subset of $\mathcal C$ is the union of those cylinders it contains, an explicitly countably coded family by F1. Its b-preimage is the union of the corresponding I_s, hence Borel in $[0,1)$ and in $\mathbb R$, since these half-open intervals are Borel. The family of subsets D of $\mathcal C$ for which $b^{-1}[D]$ is real Borel is a sigma-algebra: preimages commute with countable unions and relative complements, the latter taken inside the Borel set [0,1). F4's leastness therefore proves b-preimages of all Borel D are Borel. [F1, F4, step 1.1]

2.2 Independently in ZF define $\pi:\mathcal C\to[0,1]$ by the unique point of $\bigcap_n\overline{I_{z\upharpoonright n}}$. These are nested nonempty bounded closed intervals with lengths $2^{-n}$ tending to zero, so F3 applies. If z,w share their first n bits, the two images belong to the same closed interval and differ by at most $2^{-n}$; hence $\pi$ is continuous by F8 and F1. Since x belongs to every interval chosen by b(x), uniqueness gives $\pi(b(x))=x$. Thus $\pi$ is injective on b[A] for every A. [F1, F3, F8, step 1.1]

3.1 Define $\nu(D)=\lambda(b^{-1}[D])$ on Borel D. Step 2.1 and F5 make the expression defined. Preimages of disjoint sequences are disjoint, so F5 and F7 give $\nu(\bigcup_n D_n)=\sum_n\nu(D_n)$ and $\nu(\varnothing)=0$. By F6 and step 1.1, $\nu(N_s)=\lambda(I_s)=2^{-|s|}$, in particular $\nu(\mathcal C)=1$. Thus it is a probability measure. F7's continuity from below applies to any increasing Borel sequence; continuity from above applies to any decreasing one because its first measure is at most one. [F5, F6, F7, step 1.1, step 2.1, step 1.2]

4.1 The inner supremum and outer infimum are over nonempty bounded sets of values: K empty and O whole are admissible. If $K\subseteq E\subseteq O$, monotonicity gives $0\leq\nu(K)\leq\nu(O)\leq1$, proving the four inequalities. Complementation bijects closed $K\subseteq\mathcal C\setminus E$ with open $O\supseteq E$. Finite additivity gives $\nu(O)=1-\nu(K)$, so taking the infimum on one side and supremum on the other proves the complement identity. [F7, step 3.1]

5.1 If both envelope values equal t, their supremum and infimum definitions give, for each n, a closed $K_n\subseteq E$ and open $O_n\supseteq E$ with $\nu(O_n)-\nu(K_n)<2^{-n}$. Indeed choose each value within $2^{-n-1}$ of t; if t=0 the empty K suffices, and if t=1 the whole O suffices. Step 1.2 selects these pairs simultaneously. Put $K=\bigcup_n K_n$, $O=\bigcap_n O_n$. They are Borel with $K\subseteq E\subseteq O$. For each n, $O\setminus K\subseteq O_n\setminus K_n$, whose measure is the displayed difference; hence $\nu(O\setminus K)=0$ by step 4.1 and the shrinking bound. Their b-preimages are Borel by step 2.1, and the difference is Lebesgue null by definition of $\nu$. Completeness F5 makes every subset of that difference measurable, so $b^{-1}[E]$, lying between those two Borel sets, is measurable. [F5, F7, step 2.1, step 1.2, step 3.1, step 4.1]

6.1 Let L be a compact Cantor copy in b[A]. Then $\pi|_L$ is a continuous injection into A by step 2.2. Its image is compact: pull an open cover back and use F8's finite-subcover condition. A compact set in a metric space is closed, since for an exterior point x the balls $B(y,d(x,y)/3)$ about compact-set points have a finite subcover, and a ball about x smaller than all the corresponding radii avoids the compact set. Closed subsets of L are compact by adjoining the open complement to a cover; their images are therefore closed by this same separation argument. Consequently the inverse of $\pi|_L$ is continuous, and the image is a compact Cantor copy in A. No unique binary expansion at dyadic endpoints was required; only the one-sided inverse equation for the fixed half-open coding was used. QED. [F8, step 2.2]
