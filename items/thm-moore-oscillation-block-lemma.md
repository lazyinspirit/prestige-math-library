---
id: thm-moore-oscillation-block-lemma
kind: theorem
title: The oscillation block lemma
status: draft
origin: pipeline
deps:
  - lem-moore-club-extension-for-minimal-walks
  - def-oscillation-on-minimal-walk-lower-traces
  - def-minimal-walk-weights-and-coherent-functions
  - lem-minimal-walk-functions-are-coherent-and-finite-to-one
  - lem-minimal-walk-trace-concatenation-and-limit-control
  - thm-countable-elementary-submodels-and-transitive-collapses
  - def-club-filter-and-nonstationary-ideal
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: induction
sources:
  references:
    - title: "Moore, A solution to the L space problem, Section 4, Lemma 4.1 and proof, printed pp. 10–14"
      url: https://arxiv.org/pdf/math/0501524
---

## Statement

Let $1\leq k,l<\omega$, let $A\subseteq[\omega_1]^k$ and
$B\subseteq[\omega_1]^l$ be uncountable pairwise-disjoint families, and let
$w\in C(2^\omega,\omega)$.  There is a sequence
$\langle b_m:m<\omega\rangle$ in $B$ such that, for every $n<\omega$, some
$a\in A$ and ordinals $\xi_0<\cdots<\xi_{n-1}$ satisfy, for all $m\leq n$,
$i<k$, and $j<l$:

1. $a<b_m$, meaning $a(i)<b_m(j)$ for every $i,j$;
2. $\operatorname{Osc}(a(i),b_m(j))$ is the disjoint union
   $$\operatorname{Osc}(a(i),b_0(j))\mathbin{\dot\cup}\{\xi_{m'}:m'<m\};$$
3. $\mu(a(i),b_0(j))$ is the restriction of $\mu(a(i),b_m(j))$ to
   $L(a(i),b_0(j))$; and
4. $\mu(a(i),b_m(j))(\xi_{m'})=w$ whenever $m'<m$.

For $n=0$ the ordinal list is empty and clauses 2 and 4 have their literal
empty meanings.  This is Moore's all-coordinate block lemma; it has no
coordinate-map parameter.

## Facts & Assumptions

**Given:** ZFC, positive $k,l$, uncountable pairwise-disjoint $A,B$, and $w\in C(2^\omega,\omega)$.

[F1] [[lem-moore-club-extension-for-minimal-walks]] supplies, at every cut in one club, an equality or strict-comparison extension with exact trace and label preservation.

[F2] [[def-oscillation-on-minimal-walk-lower-traces]] defines oscillations as the adjacent changes from $e_a\leq e_b$ to $e_a>e_b$.

[F3] [[def-minimal-walk-weights-and-coherent-functions]] makes $\{\delta:w_\delta=w\}$ stationary and defines the labelled traces.

[F4] [[lem-minimal-walk-functions-are-coherent-and-finite-to-one]] says that every pair of $e$-functions has only finitely many disagreements on its common domain.

[F5] [[lem-minimal-walk-trace-concatenation-and-limit-control]] supplies the separated trace splice and the limit law $\min L(\xi,\delta)\to\delta$.

[F6] [[thm-countable-elementary-submodels-and-transitive-collapses]] and [[def-axiom-of-choice]] supply the elementary-model selection used below.

[F7] A stationary subset of $\omega_1$ meets every club, and the intersection of finitely many clubs is club. [[def-club-filter-and-nonstationary-ideal]]

## Proof

**Proof technique:** induction, using one equality extension and one strict extension per new oscillation.

1.1 Fix Skolem functions for a sufficiently large $H(\Theta)$. The cuts $M\cap\omega_1$ of countable elementary Skolem hulls containing the fixed parameters form a club $C$: larger countable ordinal parameter sets give unboundedly many cuts, and unions of increasing $\omega$-chains give closure. Intersect $C$ with the club supplied by F1. By F3 and F7 this intersection meets the stationary set $\{\delta:w_\delta=w\}$. Choose $M$ whose cut $\delta=M\cap\omega_1$ is such a point. This is the sole model-selection use of AC. [F1, F3, F6, F7, given]

2.1 Choose initial $a\in A$ and $b\in B$ with every coordinate strictly above $\delta$; only finitely many members of either pairwise-disjoint family can contain $\delta$. Apply the strict branch of F1 to this pair and call its outputs $a_0,b_0$. The appended nonempty block is the final part of every $L(\delta,b_0(j))$, and F1 makes the comparison strict on that block. Hence $e_{a_0(i)}(\max L(\delta,b_0(j)))>e_{b_0(j)}(\max L(\delta,b_0(j)))$ for all $i,j$. [F1, step 1.1, base]

3.1 Suppose $a_m,b_m$ have been chosen, the previously marked points lie below both first-disagreement bounds to the next stage, and the last point of $L(\delta,b_m(j))$ has $e_{a_m(i)}>e_{b_m(j)}$ for every $i,j$.  Apply [F1] first with equality, producing a common nonempty block $K_m^=$ on which the new $e$-values agree, and then to that output with strict inequality, producing a common nonempty block $K_m^>$ on which the next $a$-values exceed the next $b$-values.  Put $\xi_m=\min K_m^>$.  The two trace splices give $L(\delta,b_m(j))<K_m^=<K_m^>$, independently of $j$, and both new minima have label $w_\delta=w$. [F1, step 1.1, step 2.1, ih]

4.1 On the old trace, the first-disagreement bounds preserve every comparison. At the first point of $K_m^=$ the previous comparison is strict $>$ and the new comparison is equality, so [F2] creates no downward crossing.  Comparisons remain equality through that block.  At $\xi_m$, equality at its predecessor changes to strict $>$, so exactly $\xi_m$ is added to every coordinatewise oscillation set; the comparison stays strict through $K_m^>$, so no other new crossing appears.  Label restriction in [F1] preserves all old marked labels and assigns $w$ to $\xi_m$. [F1, F2, step 3.1]

5.1 Finite induction therefore produces sequences $a_m,b_m$ above $\delta$ and increasing $\xi_m$ with the seven invariants used in Moore's proof: proper common trace extension, one new oscillation, preservation below the first-disagreement bounds, a terminal strict comparison, old-label restriction, and label $w$ at every marked point. [step 2.1, step 3.1, step 4.1]

6.1 Fix $n<\omega$.  By [F4], choose $\gamma_0<\delta$ above every $L(\delta,b_n(j))$ and every disagreement below $\delta$ between $e_{b_m(j)}$ and $e_{b_{m'}(j)}$ for $m,m'\leq n$.  Put $\gamma_1=\max\bigcup_{j<l}L(\delta,b_n(j))$.  For each $i<k$, the restriction $r_i=e_{a_n(i)}\restriction(\gamma_1+1)$ belongs to $M$: the corresponding restriction of $e_{\gamma_1+1}$ belongs to $M$, and [F4] says that $r_i$ is a finite modification of it.  Hence $S=\{a\in A:(\forall i<k)\ e_{a(i)}\restriction(\gamma_1+1)=r_i\}$ belongs to $M$.  It contains $a_n\notin M$, so it is uncountable; if it were countable, an enumeration in $M$ would put every member of $S$ in $M$. [F4, F6, step 1.1, step 5.1]

7.1 By the limit law in [F5], choose $\eta<\delta$ such that $\eta<\xi<\delta$ implies $\gamma_0<\min L(\xi,\delta)$.  Since $S$ is an uncountable pairwise-disjoint family and $\eta$ is countable, some member of $S$ has all coordinates above $\eta$; this assertion has parameters in $M$, so elementarity gives such an $a\in S\cap M$.  Thus $a<\delta$, $\gamma_0<L(a(i),\delta)$, and the definition of $S$ gives $L(\delta,b_n(j))<\Delta(e_{a(i)},e_{a_n(i)})$ for every $i,j$.  Since every $b_m$ lies above $\delta$, one also has $a<b_m$ for all $m\leq n$. [F5, F6, step 6.1]

8.1 The inequalities in step 7.1 let [F5] splice every trace through $\delta$, and [F3] gives the corresponding labelled splice $\mu(a(i),b_m(j))=\mu(a(i),\delta)\cup\mu(\delta,b_m(j))$.  On $L(a(i),\delta)$ the functions $e_{b_m(j)}$ do not depend on $m$, by the choice of $\gamma_0$; on $L(\delta,b_m(j))$, step 5.1 added exactly the marked oscillations and preserved their labels.  The terminal comparison on the first piece is strict, so the splice boundary creates no further $\leq$-to-$>$ oscillation.  Hence clauses 2--4 hold, while step 7.1 gives clause 1.  For $n=0$ the same reflection chooses $a$ and all unions over marked points are empty. [F2, F3, F4, F5, step 5.1, step 7.1]

9.1 Since the recursively chosen sequence $\langle b_m:m<\omega\rangle$ is fixed before $n$ is specified, step 8.1 proves the required quantifier order. No coordinate assignment was introduced: the conclusion holds for all $i<k,j<l$ simultaneously. [step 5.1, step 8.1, discharge-induction] ∎
