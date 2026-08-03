---
id: lem-compact-metric-space-has-a-countable-dense-subset
kind: lemma
title: "A compact metric space has a countable dense subset, by countable choice"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-compactness, def-totally-bounded, thm-compact-implies-complete-and-totally-bounded, def-countable-choice, def-countable, lem-countable-iff-surjection-from-n, thm-countable-union-of-countable, thm-metric-closure-characterisation, def-metric-interior-closure-boundary, def-metric-ball, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, def-metric-space]
justified_by: []
aliases: []
landmark: false
short: "compact implies a countable dense subset"
proof_strategy: direct
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let $(X,d)$
be a compact metric space ([[def-metric-compactness]], [[def-metric-space]]).
Then there is an at most countable set $D \subseteq X$ ([[def-countable]]) that
is dense in $X$, that is $\overline{D} = X$
([[def-metric-interior-closure-boundary]]).

**Where the axiom is spent.** Once at step 2.1, to fix a finite $1/(n+1)$-net for
every $n \in \mathbb{N}$ at the same time; the family of sets chosen from is
written down before any selection and does not depend on the earlier ones. The
appeal to [[thm-countable-union-of-countable]] at step 4.1 carries the same
hypothesis $\mathrm{AC}_\omega$ and no more, so nothing further is spent there.
As always on this page the claim is an upper bound on the cost of this proof, not
an assertion that $\mathrm{AC}_\omega$ is necessary.

## Facts & Assumptions

**Given:** A compact metric space $(X,d)$ and the Axiom of Countable Choice.

[L1] A compact metric space is totally bounded: for every real $\varepsilon > 0$ there is a finite $F \subseteq X$ with $X = \bigcup_{y \in F} B(y,\varepsilon)$ ([[thm-compact-implies-complete-and-totally-bounded]], [[def-totally-bounded]], [[def-metric-ball]]).

[L2] Countable choice: for a family $(E_n)_{n \in \mathbb{N}}$ of nonempty sets there is a function $n \mapsto e_n$ with $e_n \in E_n$ ([[def-countable-choice]]).

[L3] Finite sets are at most countable, and, assuming countable choice, a union $\bigcup_{n \in \mathbb{N}} A_n$ of at most countable sets is at most countable ([[def-countable]], [[thm-countable-union-of-countable]], [[lem-countable-iff-surjection-from-n]]).

[L4] $x \in \overline{D}$ exactly when $B(x,r) \cap D \ne \emptyset$ for every real $r > 0$, and $D$ is dense when $\overline{D} = X$ ([[def-metric-interior-closure-boundary]], [[thm-metric-closure-characterisation]]).

[L5] For every real $r > 0$ there is a natural $N \ge 1$ with $1/N < r$, and $0 < 1/(n+1) \le 1/N$ whenever $n + 1 \ge N$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]]).

## Proof

**Proof technique:** direct.

1.1 For each $n \in \mathbb{N}$ let $E_n$ be the set of finite $1/(n+1)$-nets for $(X,d)$; each $E_n$ is nonempty because $(X,d)$ is compact and hence totally bounded. [L1]

2.1 Countable choice applied to $(E_n)_{n \in \mathbb{N}}$ fixes a function $n \mapsto F_n$ with $F_n \in E_n$ for every $n$, that is a finite $1/(n+1)$-net $F_n \subseteq X$ for each $n$; this is the only appeal to a choice principle here. [L2, step 1.1]

3.1 Put $D := \bigcup_{n \in \mathbb{N}} F_n \subseteq X$. [step 2.1]

4.1 Each $F_n$ is finite and therefore at most countable, so $D$ is at most countable by the countable union theorem, whose hypothesis is the same $\mathrm{AC}_\omega$ already assumed. [L3, step 3.1]

4.2 $D$ is dense: given $x \in X$ and a real $r > 0$, take a natural $N \ge 1$ with $1/N < r$ and put $n := N$, so that $1/(n+1) < 1/N < r$; since $F_n$ is a $1/(n+1)$-net there is $y \in F_n$ with $d(x,y) < 1/(n+1) < r$, and that $y$ lies in $B(x,r) \cap D$. [L1, L4, L5, step 2.1, step 3.1]

5.1 So every ball around every point of $X$ meets $D$, that is $\overline{D} = X$, and $D$ is an at most countable dense subset of $X$. [L4, step 4.1, step 4.2] ∎

## Remarks

**The word for this property is not used here.** A space with an at most countable dense subset has a standard name, and that name is not introduced at this point in the reading order; the statement therefore says what it means outright. Nothing below or elsewhere on this page depends on the terminology.

**Why a choice principle appears at all.** Total boundedness asserts that a finite $1/(n+1)$-net exists for each $n$; it names none, and there is no rule in this library that singles one out uniformly in $n$. Fixing one for every $n$ at once is precisely $\mathrm{AC}_\omega$, and it is spent in exactly the same way, and for exactly the same reason, as in [[thm-complete-and-totally-bounded-implies-compact]].

**The empty space is covered by the statement.** If $X = \emptyset$ then every $F_n$ is empty, $D$ is empty, and $\overline{D} = \emptyset = X$; the empty set is finite and hence at most countable.
