---
id: lem-lc-solovay-measure-on-generic-subsets
kind: lemma
title: Solovay measure on all ground-set subsets in a supplied generic extension
status: published
origin: pipeline
deps: [lem-lc-solovay-density-locality-and-null-joins, lem-lc-generic-evaluation-of-measurable-densities, lem-lc-boolean-generic-truth, lem-lc-generic-boolean-ground-joins, thm-check-name-evaluation-and-generic-reconstruction, thm-generic-extension-transitivity-and-rank-bound, lem-bounded-definitions-of-basic-set-operations, def-axiom-of-choice]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-11
sources:
  references:
    - title: Bagaria and da Silva, Theorem 2.9 p.8, explicitly sketched source; local completed transitive-model density-name construction
      url: https://diposit.ub.edu/dspace/bitstream/2445/214429/1/847279.pdf
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
---

## Statement

Assume ZFC. Let $M$ be a transitive set model of ZFC in which $\kappa$ is an uncountable cardinal, $|[0,1]|<\kappa$, $U$ is a proper $\kappa$-complete ultrafilter on a set $I$, and $(X,\Sigma,\mu)$ is a probability space with probability algebra $\mathbb B$. All these parameters and their indicated properties are computed in $M$. Supply an $M$-generic filter $G$ on the nonzero elements of $\mathbb B$. Put $\mathcal D=\{A\in M[G]:A\subseteq I\}$, with actual subset inclusion.

There exist $\mathcal D,\eta\in M[G]$ such that $\eta$ is a function on exactly $\mathcal D$, with values real lower cuts in $[0,1]$, $\eta(I)=1$, and $\eta(\varnothing)=0$. It extends the ground ultrafilter measure: for $Z\in M$ with $Z\subseteq I$, $\eta(Z)=1$ if $Z\in U$ and $0$ otherwise. Every disjoint sequence $(A_n)_{n<\omega}$ belonging to $M[G]$, with all $A_n\in\mathcal D$, has its union in $\mathcal D$ and satisfies

$$\eta\left(\bigcup_{n<\omega}A_n\right)=\sum_{n<\omega}\eta(A_n).$$

For every ground ordinal $\beta<\kappa$ and every family $(A_\xi)_{\xi<\beta}\in M[G]$ in $\mathcal D$, if $\eta(A_\xi)=0$ for all $\xi<\beta$, then its union belongs to $\mathcal D$ and has measure zero. These are assertions for all subsets and indexed families present in this supplied extension, not only ground subsets or ground families. They do not assert that arbitrary external subsets or sequences belong to $M[G]$, that $\kappa$ is preserved, that the extension satisfies ZFC, or a formal consistency implication.

## Facts & Assumptions

**Given:** The supplied transitive $M$, probability algebra, complete ultrafilter and generic $G$ of the statement. All Boolean vector tables and density choices below are made inside $M$.

[F1] Every vector in $\mathbb B^I$ has a unique density class, with locality, indicator constants, localized disjoint countable sums, and the Boolean inequality for fewer than $\kappa$ zero sets. ([[lem-lc-solovay-density-locality-and-null-joins]])

[F2] A bounded nonnegative density has a rational-cut name; its evaluation is independent of null modifications, respects locality and countable sums, and is zero exactly when its zero-set class belongs to $G$. ([[lem-lc-generic-evaluation-of-measurable-densities]])

[F3] Each fixed membership formula is true of name valuations exactly when its internally computed Boolean value is in $G$. ([[lem-lc-boolean-generic-truth]])

[F4] $G$ is a proper Boolean ultrafilter and selects ground joins and ground meets. ([[lem-lc-generic-boolean-ground-joins]])

[F5] Check names evaluate to the corresponding ground sets and belong to the ground model. ([[thm-check-name-evaluation-and-generic-reconstruction]])

[F6] $M[G]$ is transitive; the assertion does not require axiom preservation. ([[thm-generic-extension-transitivity-and-rank-bound]])

[F7] Kuratowski-pair and function-evaluation relations have bounded absolute definitions between transitive domains when their objects are present. ([[lem-bounded-definitions-of-basic-set-operations]])

[F8] AC in $M$ chooses representatives of the set-indexed density classes and supplies the analytic prerequisites of F1. ([[def-axiom-of-choice]])

## Proof

1.1 Let $T=(\mathbb B^I)^M$, a set in $M$. For $a\in T$ form $\sigma_a=\{\langle\check i,a_i\rangle:i\in I\}$. This is a name in $M$ by internal Replacement. F5 and valuation give $A(a):=\operatorname{val}_G(\sigma_a)=\{i\in I:a_i\in G\}$. Conversely, for any $A\in M[G]$ with $A\subseteq I$, take one name $\tau\in M$ whose valuation is $A$. Internal definability of the fixed atomic Boolean value gives the vector $a_i=\|\check i\in\tau\|^M$ in $T$. F3 says $a_i\in G$ iff $i\in A$, so $A=A(a)$. No simultaneous choice of a name for all such $A$ was used. The name $\dot{\mathcal D}=\{\langle\sigma_a,1\rangle:a\in T\}\in M$ evaluates exactly to $\mathcal D$, so this full collection belongs to $M[G]$ without an appeal to its Power Set axiom. [F3, F4, F5]

1.2 Internally apply F1 to all $a\in T$, and select measurable $[0,1]$-valued representatives $h_a$ by F8. Their assignment is a set function in $M$. F2 supplies the associated rational-cut names $\rho_a$ as a set-indexed assignment. For any two names $s,t$, the name $P(s,t)=\{\langle s,1\rangle,\langle t,1\rangle\}$ evaluates to the unordered pair of their valuations since $1\in G$. Therefore $K(s,t)=P(P(s,s),P(s,t))$ evaluates to their Kuratowski ordered pair. These finite constructions are internal set operations and yield names in $M$. Define the graph name $\dot\eta=\{\langle K(\sigma_a,\rho_a),1\rangle:a\in T\}$. Its valuation is the relation $\{(A(a),(h_a)_G):a\in T\}$, which belongs to $M[G]$. [F1, F2, F4, F8]

2.1 If $A(a)=A(b)$, then for every $i\in I$ either both $a_i,b_i$ belong to $G$ or neither does. Ultrafilterhood puts $e_i=(a_i\wedge b_i)\vee(\neg a_i\wedge\neg b_i)$ in $G$. The family $(e_i)_{i\in I}$ is a ground family, so its meet $c$ belongs to $G$ by F4, even when $I$ is large. Since $c\le e_i$, Boolean distributivity gives $c\wedge a_i=c\wedge b_i$ for every $i$. F1 locality gives $h_a=h_b$ almost everywhere on $c$, and F2 gives $(h_a)_G=(h_b)_G$. Consequently the relation from step 1.2 is a function on exactly $\mathcal D$. Null modifications of the selected representatives do not change its values, by F2. Every value is between zero and one, by the same evaluation lemma. [F1, F2, F4, step 1.1, step 1.2]

2.2 Let $\beta\in M$ be an ordinal and let $f=(A_\xi)_{\xi<\beta}\in M[G]$ be a function with values in $\mathcal D$. Take a single name $\tau\in M$ for its graph. For $(i,\xi)\in I\times\beta$, define $a_i^\xi=\|\exists y\,\exists p\,(p=\langle\check\xi,y\rangle\ \land\ p\in\tau\ \land\ \check i\in y)\|^M$, where the ordered-pair expression abbreviates its membership-language definition. This is a ground table by internal Replacement and fixed-formula definability in F3. F6 ensures transitivity of $M[G]$, F5 supplies $i,\xi$ there, and step 1.2 supplies its finite-pair closure. Thus F7 identifies the displayed pair formula with actual ordered pairs. Since the valuation of $\tau$ is the actual graph $f$, F3 proves $a_i^\xi\in G$ iff $i\in A_\xi$. Hence all family members are represented simultaneously by this single ground table. This conclusion does not assume that the family $f$ itself belongs to $M$. [F3, F5, F6, F7, step 1.1, step 1.2]

3.1 For a ground $Z\subseteq I$, use the vector $a_i=1$ on $Z$ and zero elsewhere, which evaluates to $Z$. F1 says its density is almost everywhere constant one or zero according as $Z\in U$ or not. F2 evaluates those constants to themselves, proving the extension assertion. A proper ultrafilter contains $I$ and excludes the empty set, so in particular $\eta(I)=1$ and $\eta(\varnothing)=0$. Properness also rules out the degenerate case $I=\varnothing$. [F1, F2, step 1.1, step 2.1]

3.2 Put $a_i=\bigvee_{\xi<\beta}a_i^\xi$ internally. F4 gives $a_i\in G$ iff some $a_i^\xi\in G$, because each coordinate's joined family belongs to $M$. Thus $A(a)=\bigcup_{\xi<\beta}A_\xi$, and this union lies in $\mathcal D$ by step 1.1. For $\beta=0$ the vector is constantly zero and the union empty. This works for any ground ordinal $\beta$; no completeness property of $U$ has been used in this union calculation. [F4, step 1.1, step 2.2]

4.1 Suppose now $\beta=\omega$ and the $A_n$ are disjoint. For each $i\in I$ and $n<r<\omega$, the element $\neg(a_i^n\wedge a_i^r)$ lies in $G$, since otherwise ultrafilterhood would put both coefficients in $G$ and hence $i$ in both sets. These elements form one ground family, so F4 puts their common meet $c$ in $G$. On this $c$, every coordinatewise intersection $c\wedge a_i^n\wedge a_i^r$ is zero. F1 then proves $h_a=\sum_n h_{a^n}$ almost everywhere on $c$, where $a$ is the union vector of step 3.2. The density representatives are a ground sequence of bounded nonnegative functions, so F2 gives $(h_a)_G=\sum_n(h_{a^n})_G$. Step 2.1 identifies these values with $\eta(\bigcup_n A_n)$ and $\eta(A_n)$, respectively. This proves the asserted countable additivity for every extension sequence in the statement. [F1, F2, F4, step 2.1, step 2.2, step 3.2]

4.2 Finally let $\beta<\kappa$ and suppose every $\eta(A_\xi)=0$. For the ground table of step 2.2, F2 says each zero-set class $z(a^\xi)$ belongs to $G$. The density assignment and this table are in $M$, so this is a ground family of zero-set classes. F4 places $c=\bigwedge_{\xi<\beta}z(a^\xi)$ in $G$. Internally F1 gives $c\le z(a)$ for the coordinatewise union vector, since $\beta<\kappa$ there. Upward closure and the reverse zero-test direction in F2 give $\eta(A(a))=(h_a)_G=0$. Step 3.2 identifies $A(a)$ with the required union. For the empty family F1 uses its empty-meet inequality, and step 3.1 already gives the same conclusion; the singleton case gives the original null set. This proves the full stated indexed null closure without taking an uncountable union of exceptional measurable null sets. [F1, F2, F4, step 2.1, step 3.1, step 2.2, step 3.2]

5.1 The names in steps 1.1–1.2 witness that both the full subset collection and its measure graph are elements of $M[G]$. Steps 2.2–4.2 cover new indexed families by one ground Boolean table, rather than by an assumption that the new family is ground. Their only cardinal comparison is the ground comparison $\beta<\kappa$; preservation of $\kappa$ and its relation to the new continuum are not conclusions here. AC was used for the ground set of density representatives and the prerequisites in F1, as specified in F8. Every other selected name was one existential witness. The argument proves exactly the supplied-model statement, with no inference from it to formal Con. [F1, F8, step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 4.1, step 4.2] ∎
