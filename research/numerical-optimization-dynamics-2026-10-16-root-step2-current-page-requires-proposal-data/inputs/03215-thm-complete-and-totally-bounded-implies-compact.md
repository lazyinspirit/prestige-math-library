---
id: thm-complete-and-totally-bounded-implies-compact
kind: theorem
title: "A complete, totally bounded metric space is compact, proved from countable choice used exactly once"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-compactness, def-totally-bounded, def-complete-metric-space, def-countable-choice, def-cauchy-in-metric, def-metric-convergence, def-metric-ball, def-metric-topology, thm-recursion, def-finite-sum, thm-well-ordering-principle, lem-finite-choice, thm-nat-linear-order, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, def-sequence, def-metric-space]
justified_by: []
forward_refs: [cex-totally-bounded-not-compact]
aliases: []
landmark: true
short: "complete + totally bounded implies compact"
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Totally bounded space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Totally_bounded_space"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let $(X,d)$
be a metric space ([[def-metric-space]]) that is complete
([[def-complete-metric-space]]) and totally bounded ([[def-totally-bounded]]).
Then $(X,d)$ is compact ([[def-metric-compactness]]).

**Where the axiom is spent, and why the weaker principle suffices.**
$\mathrm{AC}_\omega$ is used exactly once, at step 3.1, to fix one finite
$1/(n+1)$-net **together with a listing of it** for every $n \in \mathbb{N}$ at
once. The family of sets being chosen from is written down before any selection
is made and does not depend on the earlier selections, which is precisely the
situation countable choice covers and dependent choice
([[def-dependent-choice]]) is not needed for. Everything after step 3.1 is
canonical: at each stage the construction takes the **least** admissible index in
the listing already fixed.

As always on this page, the claim is an upper bound on the cost of the proof
given here, not an assertion that $\mathrm{AC}_\omega$ is necessary for the
theorem.

## Facts & Assumptions

**Given:** A complete, totally bounded metric space $(X,d)$, an open cover of it, and the Axiom of Countable Choice.

[L1] $(X,d)$ is compact when every family $\mathcal{U}$ of open subsets of $X$ with union $X$ has a finite subfamily with union $X$; $U$ open means every point of $U$ has a ball around it inside $U$ ([[def-metric-compactness]], [[def-metric-topology]], [[def-metric-ball]]).

[L2] $(X,d)$ is totally bounded: for every real $\delta > 0$ there is a finite $F \subseteq X$ with $X = \bigcup_{y \in F} B(y,\delta)$, and a nonempty finite set can be listed ([[def-totally-bounded]], [[def-metric-compactness]]).

[L3] Countable choice: for a family $(E_n)_{n \in \mathbb{N}}$ of nonempty sets there is a function $n \mapsto e_n$ with $e_n \in E_n$ for every $n$ ([[def-countable-choice]]).

[L4] Recursion: for a set $A$, an element $a \in A$ and a function $f : A \to A$ there is a unique $g : \mathbb{N} \to A$ with $g(0) = a$ and $g(n+1) = f(g(n))$; a stage-dependent rule is handled on $A = \mathbb{N} \times Z$, the first coordinate of $g(n)$ then being $n$ ([[thm-recursion]], [[def-finite-sum]]).

[L5] Every nonempty subset of $\mathbb{N}$ has a least element, and the order of $\mathbb{N}$ is linear ([[thm-well-ordering-principle]], [[thm-nat-linear-order]]).

[L6] A function with domain a natural number all of whose values are nonempty sets has a choice function, in ZF ([[lem-finite-choice]]).

[L7] $(X,d)$ is complete: every Cauchy sequence converges in $X$; $(c_n)$ is Cauchy when for every rational $\eta > 0$ there is $K$ with $d(c_n,c_m) < \eta$ for $n,m \ge K$; and $c_n \to p$ when for every rational $\eta > 0$ there is $K$ with $d(c_n,p) < \eta$ for $n \ge K$ ([[def-complete-metric-space]], [[def-cauchy-in-metric]], [[def-metric-convergence]], [[def-sequence]]).

[L8] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/N < \eta$, and $1/N$ is a positive rational; reciprocals of positives are positive and reverse the order ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

[L9] A metric is symmetric and satisfies the triangle inequality ([[def-metric-space]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $(X,d)$ is complete and totally bounded and that some family $\mathcal{U}$ of open subsets of $X$ with union $X$ has no finite subfamily with union $X$; call a subset $S \subseteq X$ **finitely covered** when some finite subfamily of $\mathcal{U}$ has union containing $S$, so that $X$ itself is not finitely covered. [L1, assume-contra]

2.1 $X \ne \emptyset$, since the empty subfamily of $\mathcal{U}$ has union $\emptyset$ and would finitely cover an empty $X$; consequently, for each $n \in \mathbb{N}$, the set $E_n$ of pairs $(m,f)$ with $m \in \mathbb{N}$ and $f : \sigma(m) \to X$ such that $\{f(0), \dots, f(m)\}$ is a finite $1/(n+1)$-net for $X$ is nonempty. [L2, L8, step 1.1]

3.1 Countable choice applied to $(E_n)_{n \in \mathbb{N}}$ fixes, once and for all, a function $n \mapsto (m_n, f_n)$ with $(m_n,f_n) \in E_n$; this is the single appeal to a choice principle in this proof, and the family $(E_n)$ was written down at step 2.1 before any of it was made. [L3, step 2.1]

4.1 If $S \subseteq X$ is not finitely covered and $n \in \mathbb{N}$, then $S \cap B(f_n(i), 1/(n+1))$ fails to be finitely covered for at least one $i \le m_n$: otherwise finite choice applied to $i \mapsto \{\text{finite subfamilies of } \mathcal{U} \text{ covering } S \cap B(f_n(i), 1/(n+1))\}$ produces one such subfamily for each $i \le m_n$, and the concatenation of those finitely many finite lists is a finite subfamily of $\mathcal{U}$ whose union contains $S = \bigcup_{i \le m_n} \big(S \cap B(f_n(i), 1/(n+1))\big)$. [L2, L6, step 3.1]

5.1 Let $i(n,S)$ be the least $i \le m_n$ with $S \cap B(f_n(i), 1/(n+1))$ not finitely covered when such an $i$ exists, and $0$ otherwise; recursion on $\mathbb{N} \times \mathcal{P}(X)$ with starting value $(0, X)$ and rule $F(n,S) := \big(n+1,\ S \cap B(f_n(i(n,S)), 1/(n+1))\big)$ then produces $g : \mathbb{N} \to \mathbb{N} \times \mathcal{P}(X)$ whose first coordinate at $n$ is $n$; write $A_n$ for its second coordinate and $c_n := f_n(i(n,A_n))$. [L4, L5, step 4.1]

6.1 By induction, no $A_n$ is finitely covered: $A_0 = X$ is not, by step 1.1, and if $A_n$ is not then step 4.1 supplies an admissible $i$, so $i(n,A_n)$ is one and $A_{n+1} = A_n \cap B(c_n, 1/(n+1))$ is not finitely covered either. In particular every $A_n$ is nonempty, since the empty set is finitely covered by the empty subfamily; moreover $A_{n+1} \subseteq A_n$ and $A_{n+1} \subseteq B(c_n, 1/(n+1))$. [step 4.1, step 5.1]

7.1 The sequence $(c_n)$ is Cauchy: for $m \ge n$ one has $A_{m+1} \subseteq A_{n+1} \subseteq B(c_n, 1/(n+1))$ and $A_{m+1} \subseteq B(c_m, 1/(m+1))$, and taking $z \in A_{m+1}$ gives $d(c_n,c_m) \le d(c_n,z) + d(z,c_m) < 1/(n+1) + 1/(m+1) \le 2/(n+1)$; so given a rational $\eta > 0$, a natural $N \ge 1$ with $1/N < \eta/2$ makes $d(c_n,c_m) < \eta$ for all $n,m \ge N$. [L8, L9, step 6.1]

8.1 By completeness $c_n \to p$ for some $p \in X$; since $\mathcal{U}$ has union $X$ there is $U \in \mathcal{U}$ with $p \in U$, and openness of $U$ gives a real $r > 0$ with $B(p,r) \subseteq U$. [L1, L7, step 7.1]

9.1 Take a natural $N \ge 1$ with $1/N < r/2$, then $K \in \mathbb{N}$ with $d(c_n,p) < 1/N$ for all $n \ge K$, and let $n$ be whichever of $N$ and $K$ is the greater; then $1/(n+1) < 1/N < r/2$ and $d(c_n,p) < r/2$, so every $y \in A_{n+1} \subseteq B(c_n,1/(n+1))$ satisfies $d(y,p) \le d(y,c_n) + d(c_n,p) < r$, that is $A_{n+1} \subseteq B(p,r) \subseteq U$. [L5, L7, L8, L9, step 8.1]

10.1 So the one-member subfamily $\{U\}$ of $\mathcal{U}$ has union containing $A_{n+1}$, making $A_{n+1}$ finitely covered and contradicting step 6.1; the assumption of step 1.1 therefore fails, every family of open sets with union $X$ has a finite subfamily with union $X$, and $(X,d)$ is compact. [L1, step 6.1, step 9.1, discharge-contradiction] ∎

## Remarks

**Why the nets have to be chosen with their listings.** Total boundedness asserts that a finite $1/(n+1)$-net exists for each $n$; it names none, and a bare net is a set, which carries no order in which its points may be scanned. The construction needs both: a net for each $n$, so that the sets $A_n$ shrink, and a listing of it, so that "the least admissible index" is meaningful. That is why the chosen object at step 3.1 is the pair $(m_n, f_n)$ and not the net alone.

**Non-dependent, and that is the whole point.** The sets $E_n$ of step 2.1 depend on $n$ and on $(X,d)$, and on nothing that the construction produces. Had the net at stage $n+1$ been required to depend on $A_n$ — for instance a net *of the set* $A_n$ rather than of $X$ — the selection would have been dependent and countable choice would not have licensed it; the cost would then have been the dependent choice of [[def-dependent-choice]], as in [[thm-sequentially-compact-implies-totally-bounded]]. Keeping the nets fixed in advance and intersecting with balls of $X$ is what holds the price down.

**Both hypotheses are needed.** A totally bounded space that is not complete need not be compact ([[fs-totally-bounded-implies-compact]], [[cex-totally-bounded-not-compact]]), and a complete space that is not totally bounded need not be compact either, $\mathbb{R}$ with its usual metric being complete and having no finite $1$-net.
