---
id: lem-gitik-restriction-amalgamation-and-prikry-property
kind: lemma
title: Restriction, amalgamation, and the set-sized Prikry property
status: published
origin: pipeline
deps:
  - def-gitik-strongly-compact-filter-system-and-class-forcing
  - cor-lc-large-cardinal-implication-ledger
  - cor-cardinal-absorption
  - def-kappa-closure-distributivity-and-chain-condition
  - lem-forcing-monotonicity-density-and-decision
  - thm-forcing-theorem
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
    - title: "Schürz, Gitik's model, Lemmas 1–6, pages 5–11"
      url: https://repositum.tuwien.at/bitstream/20.500.12708/5394/2/Schuerz%20Johannes%20Philipp%20-%202018%20-%20Gitiks%20model%20or%20a%20model%20of%20ZF%20where%20all...pdf
    - title: "Dimitriou, Symmetric Models, Theorem 2.37, Claims 1–5, pages 61–69"
      url: https://d-nb.info/1020630655/34
---

## Statement

Let $a$ be a finite set of regular coordinates closed under
$\operatorname{cf}'$.

1. Restriction to $a$, strengthening to a trunk, finite support extension and
   intersection of upper trees with a common trunk preserve Gitik conditions.
   Consequently compatible trunks on overlapping finite closed supports admit
   amalgamation. For every regular $\theta$, $P_\theta$ is a complete
   subforcing of $P_3$; every set name is a $P_\theta$-name for some regular
   $\theta$, and hence
   $M[G]=\bigcup_{\theta\in\operatorname{Reg}}M[G_\theta]$.
2. Let $\kappa$ be one of the strongly compact cutoffs. On a dense cone, the
   set forcing on $a$ densely embeds into a two-step iteration
   $E*(\dot Q)$, where $E$ uses the coordinates in $a\cap\kappa$ and, in the
   $E$-extension, $Q$ uses the remaining coordinates with
   $\kappa$-complete successor ultrafilters. The fixed-trunk order on $Q$ is
   $\kappa$-closed and has the Prikry property.
3. Therefore $Q$ adds no subsets of any $\gamma<\kappa$ over the lower
   extension.

Here “set-sized restriction” means the finite closed support restriction used
by symmetric names. The statement does not claim a factorization of the whole
proper class, nor of an arbitrary name ranging over unboundedly many finite
supports.

## Facts & Assumptions

**Given:** The ground model and Gitik forcing of
[[def-gitik-strongly-compact-filter-system-and-class-forcing]], a finite
$\operatorname{cf}'$-closed support $a$, and a strongly compact cutoff
$\kappa$.

[F1] [[def-gitik-strongly-compact-filter-system-and-class-forcing]]: The ten
tree clauses give measure-one successor sets, predecessor closure, compatible
small-coordinate unions, restrictions, support extensions and tree shrinking.

[F2] [[cor-lc-large-cardinal-implication-ledger]]: Every strongly compact
cardinal is inaccessible.

[F3] [[cor-cardinal-absorption]]: Finite products and sums of infinite
cardinals below an infinite cardinal remain bounded by it.

[F4] [[lem-forcing-monotonicity-density-and-decision]]: Decision conditions are
dense, decisions persist downward, and a formula forced densely below a
condition is forced there.

[F5] [[thm-forcing-theorem]]: Set forcing is definable and satisfies truth in
the lower set-sized extension.

[F6] [[def-kappa-closure-distributivity-and-chain-condition]]: The
$\kappa$-closed order is the order in which every descending sequence of length
below $\kappa$ has a common lower bound.

[F7] [[def-axiom-of-choice]]: AC selects the simultaneous tree prunings,
maximal antichains and deciding refinements used below.

## Proof

1.1 Put $U\restriction a=\{q\restriction a:q\in U\}$. For a Gitik condition $(p,U)$, clauses 1–4 and 7–9 of F1 plainly survive restriction to a closed support. For the small-coordinate successor clause, lift a projected trunk $r$ and use clause 7 to replace its lift by one agreeing with $p$ off $a$; the old measure-one successor set is contained in the projected one. For union/tree monotonicity, use the lifts $p\cup r_i$ and clause 6 before projecting. For predecessors, choose a lift with the least finite number of added triples; clause 10's last triple must then lie in the projection. Thus $(p\restriction a,U\restriction a)$ is a condition. [F1]

2.1 If $s\in U$, the cone $U_s=\{t\in U:s\subseteq t\}$ satisfies all ten clauses: clauses 5–7 follow by first adjoining the small part of $s$ with clauses 6–7, and the remaining clauses are inherited. If $b\supseteq\operatorname{dom}_1(p)$ is finite and closed under $\operatorname{cf}'$, extending every trunk coherently to $b$ gives a condition by the same clause-by-clause induction. Two upper trees with a common trunk may be intersected because every relevant coordinate filter is closed under finite intersections. Combining these operations aligns compatible trunks on the union of two finite closed supports and then intersects their upper trees, proving the asserted amalgamation. [F1, step 1.1]

3.1 Let $A\subseteq P_\theta$ be a maximal antichain and $c=(p,U)\in P_3$. The restriction $c\restriction\theta$ is compatible with some $r\in A$; take a common refinement $d=(q,V)\in P_\theta$ and first directly lengthen its finitely many trunk sections to a common finite length. Choose $t\in U$ whose restriction to the old coordinates below $\theta$ is the corresponding part of $q$, and pass to the cone above $t$. The union $t\cup q$ is a coherent trunk: on the overlap the two functions agree, while outside it their coordinate domains are disjoint. Support extension and intersection of the two lifted upper trees, as in step 2.1, produce a condition refining both $c$ and $d$, hence both $c$ and $r$. Thus every maximal antichain of $P_\theta$ remains maximal in $P_3$, which is the complete-subforcing assertion. If $G\subseteq P_3$ is generic for the ground-definable dense classes, $G_\theta=G\cap P_\theta$ consequently meets every ground dense subset of $P_\theta$. Finally, the transitive closure of a set name is a set; the union of the finite coordinate supports of all conditions occurring in it is therefore a set of ordinals and is bounded by a regular $\theta$. Induction on name rank makes the name a $P_\theta$-name. Evaluating it uses only $G_\theta$, proving the displayed union of extensions. [F1, step 1.1, step 2.1]

3.2 Work below a fixed condition on $a$. For every type-2 tail coordinate $\alpha\in a\setminus\kappa$ whose $\operatorname{cf}'(\alpha)$ coordinate lies below $\kappa$, choose the least index $\lambda_\alpha$ for which $\kappa^\alpha_{\lambda_\alpha}\ge\kappa$. Prune the lower-coordinate successor sets so that every later value used as an index is at least the maximum of the finitely many relevant $\lambda_\alpha$. This is dense by the uniformity of those successor filters. Call the resulting dense set $J$. On $J$, split every trunk as $r=r_0\cup r_1$ below and above $\kappa$. Map $(r,R)$ to its lower restriction $(r_0,R_0)$ together with the lower-forcing name whose pairs are the tail projections $r'\restriction(a\setminus\kappa)$, placed under the lower trunk condition $R_0\uparrow(r'\restriction(a\cap\kappa))$. Clauses 8–10 in F1 say exactly that this name evaluates to a tail condition with $\kappa$-complete successor filters. Conversely, strengthen a proposed pair in $E*\dot Q$ to decide its tail trunk, follow its lower tree below $\kappa$, and recursively admit a successor $\xi$ above $\kappa$ precisely when some lower refinement forces that tail successor into the named tree. The forced measure-one clauses supply a ground measure-one subset at every node, so the reconstructed combined tree is a condition in $J$. The two constructions preserve restriction and tree inclusion and the second refines every proposed iteration condition; hence this is a dense embedding. [F1, F5, F7, step 1.1, step 2.1]

4.1 The lower forcing $E$ has size $\mu<\kappa$: it uses finitely many coordinates below the inaccessible $\kappa$; F3 bounds the finite products of possible triples, and the strong-limit part of F2 bounds the power sets coding their upper trees. Let $H$ be $E$-generic and let $U$ be any ground $\kappa$-complete tail ultrafilter. In the extension define $U^*=\{X:(\exists Y\in U)\ Y\subseteq X\}$. To decide a new $X\subseteq I$ below any lower condition, choose for every $i\in I$ a stronger condition deciding $i\in\dot X$ and partition $I$ by the deciding condition and truth value. There are fewer than $\kappa$ cells, so $\kappa$-completeness and ultrafilterhood put one cell in $U$; the corresponding condition forces that cell into $X$ or its complement. These conditions are dense, so $U^*$ is an ultrafilter. For a sequence of $\delta<\kappa$ members of $U^*$, maximal antichains of size at most $\mu$ list ground witnesses for each member. Intersecting all fewer than $\kappa$ listed witnesses gives one ground $U$-set contained in their intersection. Thus $U^*$ is $\kappa$-complete in $M[H]$. [F2, F3, F4, F5, F7, step 3.2]

5.1 A descending sequence of fewer than $\kappa$ fixed-trunk tail conditions has a lower bound obtained by intersecting their trees. At every surviving node the successor set is the intersection of fewer than $\kappa$ members of the relevant $U^*$ and is therefore measure one by step 4.1; predecessor and coherence clauses survive intersection. This is precisely $\kappa$-closure in F6. The empty tail is the trivial forcing and satisfies the same conclusion. [F1, F6, step 4.1]

6.1 Fix $(s,S)\in Q$ and a sentence $\varphi$. Cycle from left to right through the finitely many tail coordinates, thereby enumerating the unfilled slots and levels above $s$. At a level $j$, colour a trunk $r$ by $0$, $1$, or $2$ according as some upper subtree with trunk $r$ forces $\varphi$, forces $\neg\varphi$, or neither; same-trunk intersection makes the first two alternatives exclusive. Define the colour at earlier levels backwards: at a node $r$, take the unique colour whose successor set is in the ultrafilter at $r$. Countable completeness permits simultaneous intersection over all later levels, and AC chooses these prunings at every node, producing one tree $W\subseteq S$. If two extensions of $(s,W)$ forced opposite alternatives, extend the shorter trunk through finitely many measure-one intersections until both trunks have the same level. Backward homogeneity then assigns them the same colour, a contradiction. By decision density, some extension decides $\varphi$; since the opposite alternative occurs nowhere below $(s,W)$, its chosen alternative is dense there, and F4 makes $(s,W)$ itself decide it without changing $s$. [F1, F4, F7, step 4.1, step 5.1]

7.1 Let $\gamma<\kappa$ and suppose a tail condition forces $\dot x\subseteq\gamma$. Recursively apply step 6.1 to decide each statement ``$\xi\in\dot x$'' by a fixed-trunk refinement. At limit stages below $\gamma$, and once more at the end, use the direct $\kappa$-closure from step 5.1. The final condition decides all memberships; Separation in the lower extension forms the corresponding set $x\subseteq\gamma$, and F4 gives that the condition forces $\dot x=\check x$. This includes $\gamma=0$ (the original condition and the empty set) and proves that $Q$ adds no bounded subsets below its completeness bound. [F4, F7, step 5.1, step 6.1] ∎

Normality is absent from the proof: the backward finite colouring uses only
ultrafilterhood, and the simultaneous pruning uses completeness. This is why
the ordinary normal-measure Rowbottom lemma is not a dependency.
