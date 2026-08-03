---
id: thm-compact-implies-the-other-compactness-forms
kind: theorem
title: "In any metric space compactness implies countable compactness and limit point compactness, and each of countable compactness and limit point compactness implies sequential compactness; every implication here is proved without a choice principle"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-metric-compactness, def-metric-compactness-variants, thm-metric-closure-characterisation, def-metric-interior-closure-boundary, def-metric-topology, thm-metric-open-set-algebra, def-metric-ball, thm-recursion, def-finite-sum, thm-well-ordering-principle, lem-finite-choice, lem-finite-set-has-max, def-max-min, def-canonical-natural, lem-of-naturals-positive, thm-nat-linear-order, def-metric-convergence, lem-index-map-grows, cor-archimedean-reciprocal, thm-of-archimedean, def-sequence, def-countable, lem-countable-iff-surjection-from-n, lem-subset-of-countable, def-injection-surjection-bijection, def-metric-space]
justified_by: []
aliases: []
landmark: true
short: "the choice-free implications"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "Limit point compact (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_point_compact"
    - title: "Countably compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countably_compact_space"
pipeline_run: null
---

## Statement

Let $(X,d)$ be a metric space ([[def-metric-space]]), with compactness as in
[[def-metric-compactness]] and the three variants as in
[[def-metric-compactness-variants]]. Then:

1. If $(X,d)$ is compact, it is countably compact.
2. If $(X,d)$ is compact, it is limit point compact.
3. If $(X,d)$ is countably compact, it is sequentially compact.
4. If $(X,d)$ is limit point compact, it is sequentially compact.

**Every one of the four is a theorem of ZF.** Where a subsequence is extracted,
the index at each stage is the **least** admissible one, which
[[thm-well-ordering-principle]] makes canonical and [[thm-recursion]] then
assembles into a function; where finitely many indices have to be recovered from
finitely many sets, [[lem-finite-choice]] supplies them and is itself a theorem
of ZF. Nothing below appeals to countable or to dependent choice.

## Facts & Assumptions

**Given:** A metric space $(X,d)$, whichever of the four properties is assumed in the claim under proof.

[L1] The definitions: $(X,d)$ is compact when every family of open subsets with union $X$ has a finite subfamily with union $X$; countably compact when every such family that is at most countable does; sequentially compact when every sequence has a subsequence converging in $X$; limit point compact when every infinite subset has a limit point in $X$, where $p$ is a limit point of $A$ when $B(p,r) \cap (A \setminus \{p\}) \ne \emptyset$ for every real $r>0$ ([[def-metric-compactness]], [[def-metric-compactness-variants]], [[def-metric-interior-closure-boundary]], [[def-sequence]]).

[L3] Open balls are open, an arbitrary union of open sets is open, and a set is closed exactly when its complement is open ([[thm-metric-open-set-algebra]], [[def-metric-topology]], [[def-metric-ball]]).

[L4] The closure $\overline{S}$ is closed, contains $S$ and is the smallest closed superset of $S$; and $x \in \overline{S}$ exactly when $B(x,r) \cap S \ne \emptyset$ for every real $r > 0$ ([[thm-metric-closure-characterisation]], [[def-metric-interior-closure-boundary]]).

[L5] Recursion: for a set $A$, an element $a \in A$ and a function $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g(0) = a$ and $g(n+1) = f(g(n))$; when the recursion rule depends on the stage, it is applied to $A = \mathbb{N} \times Z$ and the first coordinate of $g(n)$ is $n$, by the small induction recorded in [[def-finite-sum]] ([[thm-recursion]]).

[L6] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L7] A finite list $n_0, \dots, n_p$ of natural numbers has a greatest member: the reals $\iota(n_0+1), \dots, \iota(n_p+1)$, with $\iota$ the canonical natural of $\mathbb{R}$ ([[def-canonical-natural]]), form a nonempty finite set of reals and so have a maximum, which is one of them, say $\iota(n_j+1)$ ([[lem-finite-set-has-max]], [[def-max-min]]); $m \mapsto \iota(m)$ is strictly increasing on the naturals $\ge 1$ ([[lem-of-naturals-positive]]) and the order of $\mathbb{N}$ is linear ([[thm-nat-linear-order]]), so $n_i \le n_j$ for every $i \le p$.

[L8] A nonempty finite set of reals has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L9] Finiteness: a set listed as $\{a_0, \dots, a_n\}$ is finite, a nonempty finite set can be listed, and a subset of $\mathbb{N}$ bounded above is finite ([[def-metric-compactness]], [[def-countable]], [[lem-subset-of-countable]]); an injection carries a set to a set in bijection with its image ([[def-injection-surjection-bijection]]).

[L10] A family indexed by $\mathbb{N}$ is at most countable, being the image of a surjection from $\mathbb{N}$ ([[def-countable]], [[lem-countable-iff-surjection-from-n]]).

[L11] $x_k \to p$ when for every rational $\varepsilon > 0$ there is $K$ with $d(x_k,p) < \varepsilon$ for $k \ge K$; and for every real $\varepsilon > 0$ there is a natural $N \ge 1$ with $1/N < \varepsilon$ ([[def-metric-convergence]], [[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L12] An index map $n : \mathbb{N} \to \mathbb{N}$ with $n_k < n_{k+1}$ for every $k$ is strictly increasing, and then $n_k \ge k$ ([[lem-index-map-grows]]).

[L13] A function with domain a natural number all of whose values are nonempty sets has a choice function, in ZF ([[lem-finite-choice]]).

[L14] A metric is symmetric and satisfies the triangle inequality, and $d(x,y) = 0$ exactly when $x = y$ ([[def-metric-space]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1 is immediate: an at most countable family of open sets with union $X$ is in particular a family of open sets with union $X$, so compactness supplies the finite subfamily that countable compactness asks for. [L1]

2.1 For claim 2, assume $(X,d)$ compact, let $A \subseteq X$ have no limit point in $X$, and put $\mathcal{U} := \{\, U \subseteq X : U \text{ open in } X \text{ and } U \cap A \text{ has at most one element} \,\}$, a family cut out by a property; $\mathcal{U}$ has union $X$, because each $p \in X$ fails to be a limit point of $A$ and so admits $r > 0$ with $B(p,r) \cap (A \setminus \{p\}) = \emptyset$, whence $B(p,r) \in \mathcal{U}$ and $p \in B(p,r)$. [L1, L3, step 1.1]

3.1 Compactness gives $n \in \mathbb{N}$ and $U_0, \dots, U_n \in \mathcal{U}$ with $X = U_0 \cup \dots \cup U_n$, unless $X = \emptyset$, in which case $A = \emptyset$ is finite. [L1, step 2.1]

4.1 Define $\varphi : A \to \sigma(n)$ by letting $\varphi(a)$ be the least $i \le n$ with $a \in U_i$; this is well defined and canonical, and it is injective, since $\varphi(a) = \varphi(b) = i$ puts both $a$ and $b$ in $U_i \cap A$, a set with at most one element. Hence $A$ is in bijection with $\varphi[A]$, a subset of $\mathbb{N}$ bounded above by $n$, so $A$ is finite. [L6, L9, step 3.1]

5.1 So a subset of $X$ with no limit point in $X$ is finite; contrapositively every infinite subset of $X$ has a limit point in $X$, and $(X,d)$ is limit point compact: claim 2. [L1, step 4.1]

6.1 For claim 3, assume $(X,d)$ countably compact, let $(x_k)$ be a sequence in $X$ and put $T_n := \overline{\{\, x_k : k \ge n \,\}}$ for $n \in \mathbb{N}$. [L1, L4, step 5.1]

7.1 Each $T_n$ is closed and contains $x_n$, and $T_m \subseteq T_n$ whenever $m \ge n$, because $\{x_k : k \ge m\} \subseteq \{x_k : k \ge n\} \subseteq T_n$ and $T_m$ is the smallest closed superset of the first set. [L4, step 6.1]

8.1 Suppose for contradiction that $\bigcap_{n \in \mathbb{N}} T_n = \emptyset$; then $\mathcal{V} := \{\, X \setminus T_n : n \in \mathbb{N} \,\}$ is an at most countable family of open subsets of $X$ whose union is $X \setminus \bigcap_{n} T_n = X$. [L3, L10, step 7.1, assume-contra]

9.1 Countable compactness gives a finite subfamily $V_0, \dots, V_p$ of $\mathcal{V}$ with union $X$; putting $W_i := X \setminus V_i$, each $W_i$ equals $T_n$ for at least one $n$, so finite choice applied to $i \mapsto \{\, n \in \mathbb{N} : T_n = W_i \,\}$ yields indices $n_0, \dots, n_p$ with $W_i = T_{n_i}$, and a greatest member $n_j$ of that list satisfies $T_{n_j} \subseteq T_{n_i}$ for every $i \le p$. [L7, L13, step 8.1]

10.1 Then $T_{n_j} = T_{n_0} \cap \dots \cap T_{n_p} = X \setminus (V_0 \cup \dots \cup V_p) = \emptyset$, contradicting $x_{n_j} \in T_{n_j}$. [step 7.1, step 9.1, discharge-contradiction]

11.1 Hence there is $p \in X$ with $p \in T_n$ for every $n \in \mathbb{N}$. [step 10.1]

12.1 For every $k \in \mathbb{N}$ and every $m \in \mathbb{N}$ the set $\{\, j \in \mathbb{N} : j > m \text{ and } d(x_j,p) < 1/(k+2) \,\}$ is nonempty, since $p \in T_{m+1}$ means that the ball $B(p, 1/(k+2))$ meets $\{x_j : j \ge m+1\}$; so it has a least element, and likewise $\{\, j : d(x_j,p) < 1 \,\}$ is nonempty and has a least element $m_0$. [L4, L6, L11, step 11.1]

13.1 Applying recursion on $\mathbb{N} \times \mathbb{N}$ to the starting value $(0, m_0)$ and the rule $f(k,m) := (k+1,\ \text{the least } j > m \text{ with } d(x_j,p) < 1/(k+2))$ produces $g : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ whose first coordinate at $k$ is $k$; write $n_k$ for its second coordinate. [L5, step 12.1]

14.1 Then $n_k < n_{k+1}$ for every $k$, so $k \mapsto n_k$ is strictly increasing, and $d(x_{n_k},p) < 1/(k+1)$ for every $k$, the case $k = 0$ being the choice of $m_0$. [L12, step 13.1]

15.1 Given a rational $\varepsilon > 0$ take a natural $N \ge 1$ with $1/N < \varepsilon$; for $k \ge N$ one has $k + 1 > N$ and so $d(x_{n_k},p) < 1/(k+1) < 1/N < \varepsilon$. Hence $x_{n_k} \to p$, the sequence $(x_k)$ has a convergent subsequence, and $(X,d)$ is sequentially compact: claim 3. [L1, L11, step 14.1]

16.1 For claim 4, assume $(X,d)$ limit point compact, let $(x_k)$ be a sequence in $X$ and let $R := \{\, x_k : k \in \mathbb{N} \,\}$ be its range, a nonempty subset of $X$. [L1, step 15.1]

17.1 Suppose first that $R$ is finite, and list it as $R = \{v_0, \dots, v_m\}$; putting $S_i := \{\, k \in \mathbb{N} : x_k = v_i \,\}$ for $i \le m$ gives $\mathbb{N} = S_0 \cup \dots \cup S_m$. [L9, step 16.1]

18.1 Some $S_i$ is unbounded in $\mathbb{N}$: otherwise each $S_i$ has an upper bound in $\mathbb{N}$ and hence a least upper bound $N_i$, canonical by well-ordering, and a greatest member $N$ of the list $N_0, \dots, N_m$ would satisfy $N + 1 > N_i$ for every $i$, so that $N+1$ lies in no $S_i$, against $\mathbb{N} = S_0 \cup \dots \cup S_m$. Let $i^{\ast}$ be the least $i \le m$ for which $S_i$ is unbounded. [L6, L7, step 17.1]

19.1 Recursion applied to the starting value $\min S_{i^{\ast}}$ and the rule $f(m) := \min \{\, k \in S_{i^{\ast}} : k > m \,\}$, each of these sets being nonempty because $S_{i^{\ast}}$ is unbounded, produces a strictly increasing $k \mapsto n_k$ with $x_{n_k} = v_{i^{\ast}}$ for every $k$; a constant sequence converges to its value, so $x_{n_k} \to v_{i^{\ast}} \in X$. [L5, L6, L11, L12, L14, step 18.1]

20.1 Suppose instead that $R$ is infinite; limit point compactness then gives a limit point $p \in X$ of $R$. [L1, step 19.1]

21.1 Suppose for contradiction that some real $r > 0$ and some $N \in \mathbb{N}$ satisfy $d(x_k,p) \ge r$ for every $k \ge N$. [step 20.1, assume-contra]

22.1 Let $E$ be the set listed by $r$ together with the $N$ entries $e_k$ for $k < N$, where $e_k := d(x_k,p)$ if $x_k \ne p$ and $e_k := r$ otherwise; every listed entry is a positive real, so $E$ is a nonempty finite set of positive reals and $s := \min E > 0$. Then $B(p,s)$ misses $R \setminus \{p\}$: a point of $R \setminus \{p\}$ is $x_k$ with $x_k \ne p$, and $d(x_k,p) \ge r \ge s$ when $k \ge N$, while $d(x_k,p) = e_k \ge s$ when $k < N$. That contradicts $p$ being a limit point of $R$. [L1, L8, L14, step 21.1, discharge-contradiction]

23.1 Hence for every real $r > 0$ and every $N \in \mathbb{N}$ there is $k \ge N$ with $d(x_k,p) < r$. [step 22.1]

24.1 Consequently, for every $k$ and every $m$ the set $\{\, j > m : d(x_j,p) < 1/(k+2) \,\}$ is nonempty, as is $\{\, j : d(x_j,p) < 1 \,\}$, and the recursion of steps 13.1 and 14.1 applies verbatim, producing a strictly increasing $k \mapsto n_k$ with $d(x_{n_k},p) < 1/(k+1)$; by the estimate of step 15.1, $x_{n_k} \to p$. [L5, L6, L11, L12, step 13.1, step 14.1, step 15.1, step 23.1]

25.1 In both cases $(x_k)$ has a subsequence converging in $X$, so $(X,d)$ is sequentially compact: claim 4. [L1, step 19.1, step 24.1]

26.1 Claims 1, 2, 3 and 4 are proved by steps 1.1, 5.1, 15.1 and 25.1 respectively. [step 1.1, step 5.1, step 15.1, step 25.1] ∎

## Remarks

**Why "least" and not "some".** At every stage of every recursion above, the next index is the least one meeting the requirement. That is what keeps the four implications inside ZF: a rule that says "take some admissible $j$" would be a selection made infinitely often, and one made in terms of the previous stage, which is dependent choice ([[def-dependent-choice]]) rather than countable choice. The same device is what [[thm-sequentially-compact-implies-totally-bounded]] cannot use, and that is exactly why that theorem, alone among the implications between the compactness properties on this page, costs dependent choice. It is not the only implication on the page with a choice cost: [[thm-complete-and-totally-bounded-implies-compact]] spends countable choice, for the different reason that it needs one net for every radius at once. The arrow-by-arrow accounting is [[rem-compactness-choice-ledger-metric]].

**Finite selections are free.** Step 9.1 does select, but only over the finite index set $\{0, \dots, p\}$, and [[lem-finite-choice]] proves that such a selection exists in ZF by induction on the size of the index set. Nothing is being smuggled in: what a choice principle buys is infinitely many selections at once.

**The two routes to sequential compactness are genuinely different.** Claim 3 works with the closures of the tails of the given sequence and needs the countable cover they generate; claim 4 works with the range of the sequence and splits on whether it is finite. Neither argument subsumes the other, and both are needed, because the equivalence proved in [[thm-metric-compactness-equivalences]] passes through both.
