---
id: lem-lc-random-algebra-preserves-cardinals-and-sets-continuum
kind: lemma
title: The inaccessible random algebra preserves cardinals and makes the continuum kappa
status: published
origin: pipeline
deps: [lem-lc-boolean-generic-zfc-and-ordinals, lem-lc-boolean-generic-truth, lem-lc-generic-boolean-ground-joins, lem-lc-probability-algebra-completeness, lem-lc-inaccessible-size-and-rank-bounds, thm-hessenberg, thm-generic-extension-transitivity-and-rank-bound, thm-kolmogorov-extension-for-standard-borel-coordinate-spaces, def-axiom-of-choice]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Bagaria and da Silva (2023), section 2.2 pp.7–10; local complete name-count and cardinal-preservation proof
      url: https://diposit.ub.edu/dspace/bitstream/2445/214429/1/847279.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
---

## Statement

Assume ZFC. Supply a transitive set model $M$ of ZFC with an inaccessible cardinal $\kappa$. Inside $M$ take the fair-coin probability on the finite-cylinder-generated sigma-algebra of $2^\kappa$ and its probability algebra $\mathbb B$. For every supplied $M$-generic $G$ on $\mathbb B\setminus\{0\}$, the transitive extension $W=M[G]$ satisfies ZFC, has the same ordinals and cardinals as $M$, and satisfies $2^{\aleph_0}=\kappa$.

This is a supplied-transitive-model theorem; it neither asserts existence of such a model and generic nor derives a formal relative-consistency statement. The sigma-algebra is the cylinder sigma-algebra, not an unstated larger Borel sigma-algebra.

## Facts & Assumptions

**Given:** The supplied model, inaccessible cardinal, probability algebra and generic of the statement. Ground cardinalities, antichains and Boolean calculations below are computed in $M$.

[F1] The supplied transitive Boolean generic extension satisfies ZFC and has exactly the ground ordinals. ([[lem-lc-boolean-generic-zfc-and-ordinals]])

[F2] For each fixed formula, truth on valuations is equivalent to membership of its internally computed Boolean value in the generic. ([[lem-lc-boolean-generic-truth]])

[F3] The generic is a proper Boolean ultrafilter and preserves membership tests for joins and meets of ground families. ([[lem-lc-generic-boolean-ground-joins]])

[F4] A probability algebra is complete, countably additive and strictly positive, and every antichain of nonzero elements is countable. ([[lem-lc-probability-algebra-completeness]])

[F5] Below an inaccessible, small exponents remain small; regularity bounds ranks and unions of small sets. ([[lem-lc-inaccessible-size-and-rank-bounds]])

[F6] Infinite cardinals satisfy $|\theta\times\theta|=\theta$. ([[thm-hessenberg]])

[F7] The valuation of a name has rank at most its name rank. ([[thm-generic-extension-transitivity-and-rank-bound]])

[F8] Consistent finite uniform laws on two-point spaces give the unique probability on the arbitrary-index cylinder sigma-algebra. ([[thm-kolmogorov-extension-for-standard-borel-coordinate-spaces]])

[F9] AC in the ground and extension permits cardinal comparisons, choices of set-indexed witnesses and countable enumerations. ([[def-axiom-of-choice]])



## Proof

1.1 Each finite two-point product has the uniform probability, and summing over deleted coordinates proves consistency. The discrete two-point space is standard Borel, so F8 gives the stated ground probability. F4 gives a complete nontrivial Boolean algebra with the countable chain condition. F1 applies to it and gives transitivity, ZFC and unchanged ordinals for $W$. No cardinal-preservation conclusion has yet been used. [F1, F4, F8, F9]

1.2 Internally $\kappa^{\aleph_0}=\kappa$. Every function $\omega\to\kappa$ has range bounded in an ordinal $\alpha<\kappa$, by uncountable regularity. For each such $\alpha$, its function set has cardinality below $\kappa$ by F5, applied to $|\alpha|$ and $\aleph_0$. AC chooses injections of these sets into $\kappa$. Their union injects into $\kappa\times\kappa$, using the least containing bound to tag a function; F6 gives an upper bound $\kappa$. Constant functions give the lower bound. In particular the ground continuum is below $\kappa$ by strong inaccessibility. [F5, F6, F9]

1.3 We prove directly that any complete Boolean algebra satisfying the ground countable chain condition preserves cardinals in this supplied extension, using F1–F3. Suppose $f\in W$ is a function with domain a ground ordinal $\alpha$ and ordinal values. Choose a ground name $\tau$ for its graph. By F7 all its ordinal values are below a ground ordinal $\delta$, for example its name rank plus $\omega$: an output ordinal is in the finite membership closure of an ordered pair belonging to the graph, so its rank is strictly below this bound. For $\xi<\alpha,\zeta<\delta$, form in $M$ the table $b_{\xi\zeta}=\|\langle\check\xi,\check\zeta\rangle\in\tau\|^M$, using the fixed membership formula for the Kuratowski pair. The names and all tables exist by internal Replacement; F2 says $b_{\xi\zeta}\in G$ exactly when $f(\xi)=\zeta$. Ordered pairs have their actual meaning in the transitive ZFC structures of F1. [F1, F2, F3, F7]

2.1 The ground cylinder sigma-algebra has cardinality at most $\kappa$. To verify the often implicit coding bound, finite cylinders have codes consisting of finite ordinal lists and finite bit lists, so there are at most $\kappa$ codes by F6. Allow a countable well-founded tree of finite sequences of naturals, whose leaves carry finite-cylinder codes and whose internal nodes are labelled either complement (one child) or countable union. Evaluate the code recursively from its leaves as complement or union. There are at most $\kappa^{\aleph_0}=\kappa$ such labelled trees, since $\omega^{<\omega}$ is countable and their labels range over a set of size at most $\kappa$. The sets with such a code contain the generators, are closed under complement by adjoining a root, and under countable union by attaching countably many chosen trees below a new root. The new tree is well-founded: an infinite branch, after its first choice of child, would be a branch through that one constituent tree. AC supplies the sequence of chosen codes. Thus these coded sets form a sigma-algebra and include every cylinder-measurable set; every code also evaluates to a member of that sigma-algebra. The bound follows. Passing to equivalence classes cannot increase cardinality under AC, so $|\mathbb B|\le\kappa$. [F6, F8, F9, step 1.2]

2.2 For each $\xi$ and each distinct $\zeta,\zeta'<\delta$, functionality of the actual $f$ and F3 give $\neg(b_{\xi\zeta}\wedge b_{\xi\zeta'})\in G$. These elements form a single ground family. Let $c$ be its ground meet. By F3, $c\in G$, hence $c\ne0$. For fixed $\xi$ the nonzero values $c\wedge b_{\xi\zeta}$ are pairwise disjoint, and distinct indices cannot give the same nonzero value. Ground countable chain condition therefore makes $A_\xi=\{\zeta<\delta:c\wedge b_{\xi\zeta}\ne0\}$ countable inside $M$. Every actual $f(\xi)$ belongs to $A_\xi$, since its coefficient and $c$ both belong to the proper filter. The ground set $A=\bigcup_{\xi<\alpha}A_\xi$ contains the range of $f$ and has ground cardinality at most $\max(|\alpha|,\aleph_0)$, by AC and F6. Empty domains give an empty range. This constructs the necessary ground cover without assuming that any externally given antichain belongs to $M$. [F3, F4, F6, F9, step 1.3]

2.3 Choose in $M$ an injection $t:\kappa\times\omega\to\kappa$, using F6. Let $b_\xi$ be the Boolean class of the cylinder whose $\xi$-bit is one. Define $g(\xi)=1$ exactly when $b_\xi\in G$; the vector-name construction and F1 put its characteristic function in $W$. For $\alpha<\kappa$, define the real bit sequence $r_\alpha(n)=g(t(\alpha,n))$. Replacement in $W$ forms this entire family. For distinct $\alpha,\beta$ put $e_n=(b_{t(\alpha,n)}\wedge b_{t(\beta,n)})\vee(\neg b_{t(\alpha,n)}\wedge\neg b_{t(\beta,n)})$. Injectivity makes all the involved coordinates distinct. The uniform finite marginals therefore give $m(\bigwedge_{n<N}e_n)=2^{-N}$. The countable meet $e=\bigwedge_{n<\omega}e_n$ lies below each finite meet, so its measure is at most $2^{-N}$ for every $N$ and hence zero. Strict positivity makes $e=0$. If $r_\alpha=r_\beta$ in $W$, F3 would put every $e_n$ in $G$ and then their ground meet zero in $G$, a contradiction. Thus the family is injective. [F1, F3, F4, F6, F8, F9, step 1.1]

3.1 If a ground uncountable cardinal $\lambda$ were no longer a cardinal in $W$, AC there would give a surjection from an ordinal $\alpha<\lambda$ onto $\lambda$. By step 2.2 its range would lie in a ground set of cardinality at most $\max(|\alpha|,\aleph_0)<\lambda$, impossible because that set would contain all ordinals below $\lambda$. The inclusion and the ground cardinal bound are absolute statements about the same sets. Finite cardinalities and $\omega$ cannot collapse in a transitive ZFC model: its finite ordinals are the actual finite sets and no finite set maps onto $\omega$. Thus every ground cardinal remains a cardinal. Conversely an ordinal that was not a ground cardinal already had a ground bijection to a smaller ordinal; that bijection remains in $W$. So no new cardinals appear. [F1, F9, step 1.1, step 2.2]

4.1 Every $A\subseteq\omega$ in $W$ is represented by a ground vector $(b_n)_{n<\omega}\in(\mathbb B^\omega)^M$: choose a name $\tau$ for $A$ and put $b_n=\|\check n\in\tau\|^M$, so F2 gives $A=\{n:b_n\in G\}$. The explicit vector name $\{\langle\check n,b_n\rangle:n<\omega\}$ realizes every vector's evaluated set, as in ordinary valuation. By steps 1.2 and 2.1, the ground set of these vectors has size at most $\kappa$. A ground enumeration of it still exists in $W$, where Replacement evaluates the vectors using the set $G$. This gives a surjection from a set of size at most $\kappa$ onto $\mathcal P(\omega)^W$. Cardinal preservation therefore proves $(2^{\aleph_0})^W\le\kappa$. [F1, F2, F9, step 1.2, step 2.1, step 3.1]

5.1 Step 2.3 gives $(2^{\aleph_0})^W\ge\kappa$, while step 4.1 gives the reverse bound. Together with steps 1.1 and 3.1 this proves the statement. The two-valued coordinates included both bit choices, and the upper-bound name argument includes the empty subset and the whole set of naturals. Countable choice and all enumerations occurred under the explicitly assumed ZFC models. No supplied model or generic was constructed, and no inference to formal Con was made. [F1, F9, step 1.1, step 3.1, step 4.1, step 2.3] ∎
