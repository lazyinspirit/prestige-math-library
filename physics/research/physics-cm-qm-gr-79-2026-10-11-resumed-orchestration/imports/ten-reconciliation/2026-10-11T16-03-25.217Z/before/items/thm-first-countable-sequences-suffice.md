---
id: thm-first-countable-sequences-suffice
kind: theorem
title: "Assuming Countable Choice, in a first countable space sequential closure equals closure and sequential continuity at a point equals continuity there"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-first-countable-top, lem-sequential-closure-inside-closure, thm-closure-characterisation-top, def-sequence-convergence-top, def-countable-choice, def-continuous-map-top, def-neighbourhood-top, thm-recursion, lem-countable-iff-surjection-from-n]
justified_by: []
aliases: []
landmark: true
short: "under Countable Choice, first countable: sequences suffice"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "First-countable space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First-countable_space"
    - title: "Sequential space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequential_space"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
pipeline_run: null
---

## Statement

**Assume the Axiom of Countable Choice** ([[def-countable-choice]]). Let $X$ be a
first countable topological space ([[def-first-countable-top]]) and let $Y$ be a
topological space. Then:

1. $\operatorname{seqcl}(A) = \overline{A}$ for every $A \subseteq X$
   ([[def-sequence-convergence-top]], [[thm-closure-characterisation-top]]);
2. for $f : X \to Y$ and $p \in X$, $f$ is continuous at $p$
   ([[def-continuous-map-top]]) if and only if $f$ is sequentially continuous at
   $p$.

**Where $\mathrm{AC}_\omega$ is spent, and that it is not decoration.** Both
directions that this theorem adds to
[[lem-sequential-closure-inside-closure]] build a sequence by picking one point
from each of countably many nonempty sets $M_k \cap A$, respectively
$M_k \setminus f^{-1}[V]$, and the first countability hypothesis supplies no rule
for the pick. The two applications of $\mathrm{AC}_\omega$ below are the only
uses of any choice principle in the proof; the inclusions already proved in
[[lem-sequential-closure-inside-closure]] use none at all.

## Facts & Assumptions

**Given:** A first countable space $X$, a topological space $Y$, a subset $A \subseteq X$, a point $p \in X$, a function $f : X \to Y$, and the Axiom of Countable Choice as an explicit hypothesis.

[A1] Every point of $X$ has an at most countable neighbourhood base ([[def-first-countable-top]]).

[A2] $x_k \to p$ means that for every neighbourhood $N$ of $p$ there is $K$ with $x_k \in N$ for all $k \ge K$; $\operatorname{seqcl}(A)$ collects the points to which some sequence in $A$ converges; sequential continuity at $p$ says $x_k \to p$ implies $f(x_k) \to f(p)$ ([[def-sequence-convergence-top]]).

[A3] $f$ is continuous at $p$ when $f^{-1}[V]$ is a neighbourhood of $p$ for every neighbourhood $V$ of $f(p)$ ([[def-continuous-map-top]]).

[L1] $\operatorname{seqcl}(A) \subseteq \overline{A}$, and continuity at $p$ implies sequential continuity at $p$ ([[lem-sequential-closure-inside-closure]], claims 1 and 2).

[L2] $p \in \overline{A}$ if and only if every neighbourhood of $p$ meets $A$ ([[thm-closure-characterisation-top]], clause (b)).

[L3] A finite intersection of neighbourhoods of $p$ is a neighbourhood of $p$; every superset of a neighbourhood of $p$ is a neighbourhood of $p$; every point lies in each of its neighbourhoods; and $X$ itself is a neighbourhood of $p$ ([[def-neighbourhood-top]]).

[L4] A nonempty at most countable set is the image of a surjection from $\mathbb{N}$ ([[lem-countable-iff-surjection-from-n]]).

[L5] Recursion: for any set $Z$, any $z_0 \in Z$ and any $F : Z \to Z$ there is a function $h : \mathbb{N} \to Z$ with $h(0) = z_0$ and $h(\sigma(k)) = F(h(k))$ for every $k$ ([[thm-recursion]]).

[L6] $\mathrm{AC}_\omega$: for every family $(Z_k)_{k \in \mathbb{N}}$ of nonempty sets there is $c$ with $c(k) \in Z_k$ for every $k$ ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 Fix an at most countable neighbourhood base $\mathcal{B}_p$ at $p$; it is nonempty, since $X \in \mathcal{N}(p)$ forces some member of $\mathcal{B}_p$ to lie inside $X$, so by [L4] there is a surjection $k \mapsto N_k$ from $\mathbb{N}$ onto $\mathcal{B}_p$. [A1, L3, L4, choose]

2.1 Apply [L5] with $Z := \mathbb{N} \times \mathcal{N}(p)$, with $z_0 := (0, N_0)$ and with $F(k, M) := (\sigma(k),\ M \cap N_{\sigma(k)})$, which lands in $Z$ because an intersection of two neighbourhoods of $p$ is a neighbourhood of $p$; the resulting $h$ has first coordinate $h(k) = (k, M_k)$ by induction, so $M_0 = N_0$ and $M_{\sigma(k)} = M_k \cap N_{\sigma(k)}$. Hence every $M_k$ is a neighbourhood of $p$, the family is decreasing, $M_0 \supseteq M_1 \supseteq \dots$, and $M_k \subseteq N_k$ for every $k$. [step 1.1, L3, L5, construct]

3.1 The family $(M_k)_{k \in \mathbb{N}}$ is again a neighbourhood base at $p$: given $N \in \mathcal{N}(p)$ there is a member of $\mathcal{B}_p$ inside $N$, and that member is $N_k$ for some $k$ by surjectivity, so $M_k \subseteq N_k \subseteq N$. [step 1.1, step 2.1, A1]

3.2 Let $p \in \overline{A}$. Each $M_k$ is a neighbourhood of $p$, so $M_k \cap A \ne \varnothing$ by [L2]; by $\mathrm{AC}_\omega$ applied to the family $(M_k \cap A)_{k \in \mathbb{N}}$ there is a sequence $(x_k)$ with $x_k \in M_k \cap A$ for every $k$. [step 2.1, L2, L6]

3.3 Assume $f$ is sequentially continuous at $p$, let $V$ be a neighbourhood of $f(p)$, and suppose no $M_k$ satisfied $M_k \subseteq f^{-1}[V]$. Then every set $M_k \setminus f^{-1}[V]$ would be nonempty, so $\mathrm{AC}_\omega$ would supply a sequence $(y_k)$ with $y_k \in M_k \setminus f^{-1}[V]$ for every $k$. [step 2.1, assume-hyp, L6]

4.1 The sequence of step 3.2 converges to $p$: given $N \in \mathcal{N}(p)$, step 3.1 gives $k_0$ with $M_{k_0} \subseteq N$, and for $k \ge k_0$ the nesting of step 2.1 gives $x_k \in M_k \subseteq M_{k_0} \subseteq N$. Its terms lie in $A$, so $p \in \operatorname{seqcl}(A)$. [step 2.1, step 3.1, step 3.2, A2]

4.2 The sequence of step 3.3 converges to $p$ for the same reason, while $f(y_k) \notin V$ for every $k$, so $(f(y_k))$ is not eventually in the neighbourhood $V$ of $f(p)$ and does not converge to $f(p)$; that contradicts sequential continuity at $p$. Hence some $M_{k_1}$ satisfies $M_{k_1} \subseteq f^{-1}[V]$, and $f^{-1}[V]$ is then a neighbourhood of $p$ by [L3], since it contains the neighbourhood $M_{k_1}$ of $p$. [step 2.1, step 3.1, step 3.3, A2, L3]

5.1 Step 4.1 gives $\overline{A} \subseteq \operatorname{seqcl}(A)$, and [L1] gives the reverse inclusion, so claim 1 holds. [step 4.1, L1]

6.1 Step 4.2 shows that sequential continuity at $p$ implies continuity at $p$, and [L1] gives the converse, so claim 2 holds. [step 4.2, A3, L1] ∎

## Remarks

- **The hypothesis cannot be dropped.** Under the standing Axiom of Countable Choice assumption, the cocountable topology on $\mathbb{R}$ is not first countable, and both conclusions fail there: the sequential closure of $[0,1]$ is $[0,1]$ while its closure is $\mathbb{R}$, and the identity onto the usual topology is sequentially continuous without being continuous. Both are on the companion page, and the second is recorded on this page as a false statement.

- **Every metrizable space satisfies the hypothesis.** The balls of radius $1/n$ form an at most countable neighbourhood base at each point ([[lem-metric-ball-neighbourhood-base]]), so claim 1 specialises to the sequential characterisation of the closure in a metric space ([[thm-metric-sequential-closure]]), which spends countable choice in exactly the same one of its two directions. Nothing here is new in the metric setting; what is new is that first countability alone is enough.

- **Why the base is made decreasing.** Without the nesting of step 2.1 the chosen points $x_k \in N_k \cap A$ need not converge to $p$: the sets $N_k$ may oscillate, and a point chosen from a large $N_k$ carries no information about membership in a small one. The running intersections repair this and cost only a recursion.

- **The real-analysis track states the same phenomenon for function limits, at the same cost in choice.** $\mathbb{R}$ with its usual topology is metrizable ([[def-metrizable-space]], [[lem-real-line-is-a-metric-space]]), hence first countable by the bullet above, and the Heine criterion [[thm-sequential-criterion-for-function-limits]] is the function-limit form of this theorem there: sequences detect the $\varepsilon$-$\delta$ limit at a limit point of the domain, its sequence-to-$\varepsilon$ direction spends countable choice on a shrinking-neighbourhood selection exactly as the proof above does, and its other direction is choice-free ([[rem-heine-criterion-choice-cost]]). Neither result cites the other, and neither is proved from the other: the criterion is proved from the order and the absolute value of $\mathbb{R}$ directly. This is a sufficient first-countable instance of the broader sequential phenomenon, not a characterisation.
