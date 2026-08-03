---
id: ex-convergent-sequence-with-its-limit-is-compact
kind: example
title: "In any metric space the range of a convergent sequence together with its limit is compact, worked out for $\\{0\\} \\cup \\{1/(k+1) : k \\in \\mathbb{N}\\}$ in $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-metric-compactness, lem-compactness-is-intrinsic, thm-compact-subset-is-closed-and-bounded, def-metric-convergence, def-sequence, lem-real-line-is-a-metric-space, def-isometry-and-metric-embedding, def-interval, def-metric-topology, def-metric-ball, lem-finite-choice, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, def-metric-space]
justified_by: []
aliases: []
landmark: false
short: "a convergent sequence with its limit"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Example 2.21(e))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Example

Let $(X,d)$ be a metric space ([[def-metric-space]]), let $(x_k)$ be a sequence
in $X$ converging to $p \in X$ ([[def-metric-convergence]], [[def-sequence]]),
and put

$$K \;:=\; \{\, x_k : k \in \mathbb{N} \,\} \cup \{p\}.$$

Then $K$ is a compact subset of $X$ ([[def-metric-compactness]]).

In $\mathbb{R}$ with the usual metric ([[lem-real-line-is-a-metric-space]]) the
sequence $x_k := 1/(k+1)$ converges to $0$, so
$\{0\} \cup \{\, 1/(k+1) : k \in \mathbb{N} \,\}$ is compact. The index is
written $k+1$ because $\mathbb{N}$ contains $0$ and $1/0$ is undefined
([[def-sequence]]).

Dropping the limit destroys compactness: the range alone is not closed in
$\mathbb{R}$, and a compact subset is closed
([[thm-compact-subset-is-closed-and-bounded]]).

## Facts & Assumptions

**Given:** A metric space $(X,d)$, a sequence $(x_k)$ in $X$ with $x_k \to p \in X$, and $K := \{x_k : k \in \mathbb{N}\} \cup \{p\}$.

[L1] $A \subseteq X$ is compact exactly when every family $(U_i)_{i \in I}$ of open subsets of $X$ with $A \subseteq \bigcup_{i \in I}U_i$ has finitely many members whose union contains $A$, or $A = \emptyset$ ([[lem-compactness-is-intrinsic]], [[def-metric-compactness]]).

[L2] $x_k \to p$ means: for every rational $\varepsilon > 0$ there is $K_0 \in \mathbb{N}$ with $d(x_k,p) < \varepsilon$ for all $k \ge K_0$ ([[def-metric-convergence]]).

[L3] $U$ is open when every point of $U$ has a ball around it inside $U$ ([[def-metric-topology]], [[def-metric-ball]]).

[L4] A function with domain a natural number all of whose values are nonempty sets has a choice function, in ZF ([[lem-finite-choice]]).

[L5] For every real $\eta > 0$ there is a natural $N \ge 1$ with $1/N < \eta$, and $0 < 1/(k+1) \le 1/N$ for $k + 1 \ge N$; in $(\mathbb{R},d_{\mathbb{R}})$ the distance is $|x-y|$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]], [[lem-of-inverse-positive]], [[lem-real-line-is-a-metric-space]], [[def-interval]], [[def-isometry-and-metric-embedding]]).

## Verification

**Proof technique:** direct.

1.1 Let $(U_i)_{i \in I}$ be a family of open subsets of $X$ with $K \subseteq \bigcup_{i \in I} U_i$. [L1]

2.1 Since $p \in K$ there is $i^{\ast} \in I$ with $p \in U_{i^{\ast}}$, and openness gives a real $r > 0$ with $B(p,r) \subseteq U_{i^{\ast}}$. [L3, step 1.1]

3.1 Taking a positive rational below $r$, for instance $1/N$ with $N \ge 1$ a natural and $1/N < r$, convergence supplies $K_0 \in \mathbb{N}$ with $d(x_k,p) < 1/N < r$ for every $k \ge K_0$, so $x_k \in B(p,r) \subseteq U_{i^{\ast}}$ for every $k \ge K_0$. [L2, L5, step 2.1]

4.1 For each $j < K_0$ the set $\{\, i \in I : x_j \in U_i \,\}$ is nonempty, since $x_j \in K$; finite choice applied to $j \mapsto$ that set gives indices $i_0, \dots, i_{K_0-1} \in I$ with $x_j \in U_{i_j}$ for every $j < K_0$, this list being empty when $K_0 = 0$. [L4, step 3.1]

5.1 Then $K \subseteq U_{i^{\ast}} \cup U_{i_0} \cup \dots \cup U_{i_{K_0-1}}$: the point $p$ and every $x_k$ with $k \ge K_0$ lie in $U_{i^{\ast}}$ by steps 2.1 and 3.1, and every $x_j$ with $j < K_0$ lies in $U_{i_j}$. So finitely many members of the family cover $K$, and $K$ is compact. [L1, step 2.1, step 3.1, step 4.1]

6.1 For the instance in $\mathbb{R}$, the terms $1/(k+1)$ satisfy $|1/(k+1) - 0| = 1/(k+1) < \varepsilon$ for every $k$ with $k+1 \ge N$, where $N \ge 1$ is a natural with $1/N < \varepsilon$; so $1/(k+1) \to 0$ and $\{0\} \cup \{1/(k+1) : k \in \mathbb{N}\}$ is compact by the general claim. [L2, L5, step 5.1] ∎

## Remarks

**Finitely many exceptional terms is the whole idea.** All but finitely many terms are captured by the single member containing the limit, and the remaining ones are finitely many points, each needing one member. That is why the selection at step 4.1 is over a finite index set and costs nothing ([[lem-finite-choice]]).

**Without the limit point the set is not compact.** In $\mathbb{R}$ the set $\{1/(k+1) : k \in \mathbb{N}\}$ has $0$ in its closure and does not contain it, so it is not closed and hence not compact ([[thm-compact-subset-is-closed-and-bounded]]).
