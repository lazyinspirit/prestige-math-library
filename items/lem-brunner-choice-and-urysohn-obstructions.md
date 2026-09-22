---
id: lem-brunner-choice-and-urysohn-obstructions
kind: lemma
title: "Brunner's models satisfy the required choice and Urysohn obstructions"
status: draft
origin: pipeline
deps: [def-brunner-ordered-lauchli-permutation-models, def-normal-and-t4-spaces, def-hausdorff-space, def-continuous-map-top, thm-a-compact-hausdorff-space-is-regular-and-normal, def-countable-choice, def-compact-space, def-subspace-topology-top, def-order-topology-on-a-linearly-ordered-set, def-permutation-support-system-and-normal-filter, def-symmetric-and-hereditarily-symmetric-sets, def-interval, def-axiom-of-choice, thm-countable-union-of-countable, thm-heine-borel-characterisation-r, cor-interval-uncountable, lem-q-and-irrationals-dense-r, thm-intermediate-value, thm-rationals-countable]
justified_by: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-22
sources:
  scraped: []
  references:
    - title: "Norbert Brunner, Geordnete Läuchli Kontinuen"
      url: "https://matwbn.icm.edu.pl/ksiazki/fm/fm117/fm11718.pdf"
      locator: "§§1-3, printed pp. 67-73"
---

## Statement

The real-ordered countable-compact-support Läuchli model of
[[def-brunner-ordered-lauchli-permutation-models]] satisfies the Axiom of
Countable Choice ([[def-countable-choice]]), and both that model and the
rational-ordered finite-support model contain a nondegenerate compact linearly
ordered normal space $L$ ([[def-compact-space]], [[def-normal-and-t4-spaces]])
on which every continuous real-valued function is constant
([[def-continuous-map-top]]); hence Urysohn's lemma fails in both models.

## Facts & Assumptions

**Given:** The two models of [[def-brunner-ordered-lauchli-permutation-models]], formed internally in a ground model $M$ of ZFA+AC. All constructions and arguments below, including ranks, real coordinates, compactness and sequences, are interpreted inside $M$; no external well-foundedness or transitivity of $M$ is required. Write $N$ for either symmetric model and $L=[a,b]_A$ for the closed atom interval, with $a<b$. Ground order coordinates identify $A$ with $\mathbb R$ or $\mathbb Q$ in $M$, outside $N$; no such enumeration is asserted to belong to $N$.

[F1] Internally in $M$, the permutation model is membership-closed with the same pure kernel; its objects are hereditarily symmetric, not merely symmetric. Pure reals and natural numbers are fixed by every atom permutation. Conjugation transports supports, and a symmetric set of hereditarily symmetric members is hereditarily symmetric ([[def-brunner-ordered-lauchli-permutation-models]], [[def-permutation-support-system-and-normal-filter]], [[def-symmetric-and-hereditarily-symmetric-sets]]).

[F2] The real model's support ideal consists of subsets of countable compact ground sets; the rational model's supports are finite. The group is all increasing atom bijections. The interval and its internal order topology are objects of the model ([[def-brunner-ordered-lauchli-permutation-models]], [[def-order-topology-on-a-linearly-ordered-set]], [[def-subspace-topology-top]]).

[F3] Ground AC permits simultaneous witness choices and countable unions of countable sets are countable there ([[def-axiom-of-choice]], [[thm-countable-union-of-countable]]). A compact real set is closed and bounded, and conversely ([[thm-heine-borel-characterisation-r]]). Every nondegenerate real interval is uncountable ([[cor-interval-uncountable]]); the rationals are dense and countable ([[lem-q-and-irrationals-dense-r]], [[thm-rationals-countable]]).

[F4] A continuous real function on a closed real interval has the intermediate-value property ([[thm-intermediate-value]]). Continuity and the order topology have their ordinary preimage-of-open-set meaning ([[def-continuous-map-top]], [[def-order-topology-on-a-linearly-ordered-set]]).

[F5] A compact Hausdorff space is normal, without an additional choice hypothesis ([[thm-a-compact-hausdorff-space-is-regular-and-normal]], [[def-compact-space]], [[def-hausdorff-space]], [[def-normal-and-t4-spaces]]).

## Proof

**Proof technique:** direct.

1.1 All constructions involving order coordinates in the following support argument take place in $M$. Given a sequence $(F_n)$ of nonempty sets in the real model, enlarge a support for the sequence to a nonempty countable compact set $e$. Ground AC chooses $x_n\in F_n$ and countable compact supports $e_n$ for them. Each $x_n$ is hereditarily symmetric by membership closure. The sequence support fixes each $F_n$, since the index $n$ is pure. [given, F1, F2, F3]

1.2 In the real model the internal interval $L$ is compact: each internal open cover is, in ground real coordinates, an open cover of the real closed bounded interval, hence has a finite subcover by [F3]. Every member of this subcover is already hereditarily symmetric, and a finite set of such objects is hereditarily symmetric by combining their finitely many supports. Thus that finite subcover belongs to $N$. The internal order topology is Hausdorff in either model: between two distinct points choose two intervening points and use the disjoint order rays. This is a finite existence argument in the dense atom order. [given, F1, F2, F3]

1.3 In the rational model, every nonempty internal subset $S\subseteq L$ has a supremum in $L$. Enlarge a finite support for $S$ by $a,b$, and call it $e$. In the ground real completion of the rational order let $r=\sup S$. If $r\notin e$, it lies in a complementary interval of the finite set $e$. Choose rational points $u<r<v$ inside that interval and an increasing rational order automorphism fixing $e$ whose extension to real cuts moves $r$: for instance choose rational breakpoints around $r$ and a piecewise-affine map with positive rational slopes, identity outside the component, which moves the whole small interval containing $r$ to its right. Such a map preserves the rational order and fixes $e$, hence preserves $S$, contradicting uniqueness of its real supremum. Therefore $r\in e\cap L$, so it is an atom and is the supremum internally too. This concerns internal sets only; no ambient irrational cut is added to $N$. [given, F1, F2, F3]

1.4 Let $g:L\to\mathbb R$ be an internal continuous map. Enlarge a support of $g$ to include $a,b$, using a countable compact support in the real model and a finite support in the rational model. An automorphism fixing this support fixes every pure real value, hence $g(px)=g(x)$. On each complementary interval of the support in $L$, increasing automorphisms fixing the support act transitively: a piecewise-affine increasing map sends any prescribed interior point to another and fixes the boundary, and in the rational case its pieces can have rational coefficients. Hence $g$ is constant on each such interval. No assertion is made that supported points move. [given, F1, F2, F4]

2.1 Put $\varepsilon_n=1/(n+1)$. There is an increasing bijection $p_n$ of the real order fixing $e$ and sending every point of $e_n$ within distance $\varepsilon_n$ of $e$. Here is the component construction. On a bounded complementary interval $(c,d)$ of $e$, choose $c<u<v<d$ with $[u,v]\cap e_n=\varnothing$: the closed countable set $e_n$ cannot contain an interval by [F3]. Choose $0<\delta<\min(\varepsilon_n,(d-c)/3)$. Map $[c,u]$ affinely to $[c,c+\delta]$, $[u,v]$ affinely to $[c+\delta,d-\delta]$, and $[v,d]$ affinely to $[d-\delta,d]$. The pieces agree, are strictly increasing and send the portion of $e_n$ into the two boundary strips. On a right unbounded component $(c,\infty)$, choose $R>c$ above all of $e_n$, map $[c,R]$ affinely onto $[c,c+\varepsilon_n/2]$, and continue by a positive-slope affine bijection onto $[c+\varepsilon_n/2,\infty)$; treat the left ray by reflection. Fix $e$ pointwise. The component maps and this fixed part form a global increasing bijection, since each component maps onto itself with its endpoints fixed. AC in $M$ permits these choices for all components and $n$. [step 1.1, F2, F3]

2.2 Order completeness from step 1.3 implies compactness of the rational-model interval without choice. Given an internal open cover, internally form $C=\{x\in L:[a,x]\text{ has a finite subcover}\}$. It contains $a$ and has a supremum $c$. A cover member containing $c$ contains an interval neighbourhood of $c$. If $c>a$, choose $x\in C$ in the left part of that neighbourhood using the supremum property; its finite subcover together with this member covers $[a,c]$. If $c=a$, that member alone covers $[a,c]$. Thus $c\in C$. If $c<b$, the same neighbourhood extends to a point to the right of $c$ and would put that point in $C$, a contradiction. Hence $c=b$, and the cover has a finite subcover. This whole argument is internal to $N$. Combined with step 1.2, both intervals are compact Hausdorff and therefore normal by [F5]. [step 1.2, step 1.3, F2, F5]

2.3 In the rational model there are only finitely many support points and complementary intervals. Continuity at each interior support point makes the constants on its two adjacent intervals equal to its value: if a constant differed, disjoint real neighbourhoods of the two values would contradict continuity along that adjacent interval. The same one-sided argument applies at $a,b$. Moving across the finite ordered list of support points proves that $g$ is constant on $L$. [step 1.4, F4]

2.4 In the real model the complementary intervals are countable in $M$: enumerate the ground rationals and assign to each interval the least rational index inside it; disjoint intervals get different indices. Together with the countable support and step 1.4 this makes $g[L]$ at most countable in $M$, by [F3]. But $g$, viewed in ground real coordinates, is continuous: the preimage of every ground open real set is internally open (the pure kernel is unchanged), and internally open subsets of $L$ are ground open subsets. If two values differed, the intermediate-value theorem on the real subinterval between their arguments would put a nondegenerate real interval in $g[L]$, contrary to [F3]. Thus $g$ is constant here as well. [step 1.4, F1, F3, F4]

3.1 Let $K=e\cup\bigcup_n p_n[e_n]$. It is countable by [F3] and bounded, since every new point is within $1$ of the bounded nonempty set $e$. It is closed: if $z\notin e$, some neighbourhood of $z$ has positive distance from $e$, so it misses $p_n[e_n]$ for all sufficiently large $n$. The remaining finitely many sets $p_n[e_n]$, and $e$, are closed, since increasing real bijections are homeomorphisms (they map order intervals to order intervals). Thus a point outside $K$ has an open neighbourhood missing $K$. By [F3], $K$ is compact and is an allowed support. [step 2.1, F3]

4.1 Set $y_n=p_n(x_n)$. Since $p_n$ fixes $e$, $y_n\in F_n$; conjugation makes $p_n[e_n]$ a support for $y_n$. Hence $K$ supports the graph $\{(n,y_n):n\in\mathbb N\}$. Its members and all their membership descendants are hereditarily symmetric by [F1], so this graph belongs to $N$. It is a choice function for the given sequence. This proves Countable Choice in the real model; AC was used only in $M$ to obtain the supported graph. [step 1.1, step 2.1, step 3.1, F1, F3]

5.1 The endpoint atoms $a,b$ are distinct closed singleton subsets of the normal space $L$. A Urysohn separator would take values $0$ and $1$ at these endpoints and would be a nonconstant internal continuous real-valued function, contradicting steps 2.3 and 2.4. Hence Urysohn's lemma fails in both models, while step 4.1 establishes Countable Choice in the real model. [step 4.1, step 2.2, step 2.3, step 2.4, F2, F5] ∎
