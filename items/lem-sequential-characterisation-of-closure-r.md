---
id: lem-sequential-characterisation-of-closure-r
kind: lemma
title: "A point lies in the closure of $A \\subseteq \\mathbb{R}$ iff some sequence in $A$ converges to it, so a subset of $\\mathbb{R}$ is closed iff it is sequentially closed"
status: published
origin: session
deps: [thm-closure-characterisations-r, def-limit-point-r, def-real-limit, def-sequence, cor-archimedean-reciprocal, thm-of-archimedean, lem-of-inverse-positive, lem-of-naturals-positive, lem-rat-embeds-dense, def-countable-choice, def-neighbourhood-r, def-interior-closure-boundary-r, def-open-and-closed-in-r]
justified_by: []
aliases: []
landmark: false
short: "closure = sequential closure"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Closure (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_(topology)"
    - title: "Axiom of countable choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_countable_choice"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.2(d))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $A \subseteq \mathbb{R}$ and $x \in \mathbb{R}$, with closure as in
[[def-interior-closure-boundary-r]] and sequences and convergence as in
[[def-sequence]] and [[def-real-limit]]. Then

$$x \in \overline{A} \iff \text{there is a sequence } (a_k)_{k \in \mathbb{N}} \text{ with } a_k \in A \text{ for every } k \text{ and } a_k \to x .$$

Consequently $A$ is closed if and only if it is **sequentially closed**: whenever
a sequence with all its terms in $A$ converges, its limit lies in $A$.

**The right-to-left direction is choice free; the left-to-right direction spends
$\mathrm{AC}_\omega$** ([[def-countable-choice]]). Producing a sequence from a
point of the closure requires selecting one point of $A$ from each of the
countably many sets $N_{1/(k+1)}(x) \cap A$, and this library has no canonical
rule for that selection, so the axiom of countable choice is invoked
explicitly at step 2.2 and nowhere else.

## Facts & Assumptions

**Given:** A subset $A \subseteq \mathbb{R}$ and a real $x$. Sequences are functions on $\mathbb{N}$, which contains $0$, so a sequence is $(a_k)_{k \in \mathbb{N}}$ and the radii used below are $1/(k+1)$ rather than $1/k$ ([[def-sequence]]).

[L1] $\overline{A}$ is exactly the set of adherent points of $A$, that is, of points every neighbourhood of which meets $A$; and $A$ is closed exactly when $A = \overline{A}$ ([[thm-closure-characterisations-r]], [[def-limit-point-r]]).

[L2] $N_\varepsilon(x) = \{\, y \in \mathbb{R} : |y - x| < \varepsilon \,\}$ for real $\varepsilon > 0$ ([[def-neighbourhood-r]], [[def-open-and-closed-in-r]]).

[L3] $(a_k) \to x$ means: for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|a_k - x| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]], [[def-sequence]]).

[L4] Strictly between any two reals lies a rational; in particular for every real $\varepsilon > 0$ there is a rational $q$ with $0 < q < \varepsilon$ ([[lem-rat-embeds-dense]]).

[L5] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L6] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$ and $m \le n$ in $\mathbb{N}$ gives $m \cdot 1_{\mathbb{R}} \le n \cdot 1_{\mathbb{R}}$ ([[lem-of-naturals-positive]]); a positive element has a positive inverse and $0 < a \le b$ gives $0 < 1/b \le 1/a$ ([[lem-of-inverse-positive]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L7] Countable choice: for every family $(X_k)_{k \in \mathbb{N}}$ of nonempty sets there is a function $f$ with domain $\mathbb{N}$ such that $f(k) \in X_k$ for every $k$ ([[def-countable-choice]]).

## Proof

**Proof technique:** direct.

1.1 For the right-to-left implication, assume $a_k \in A$ for every $k \in \mathbb{N}$ and $a_k \to x$, and let $\varepsilon > 0$ be an arbitrary real. [assume-hyp, L3]

1.2 For the left-to-right implication, assume $x \in \overline{A}$; then for every $k \in \mathbb{N}$ the radius $1/(k+1)$ is a positive real and the set $X_k := N_{1/(k+1)}(x) \cap A$ is nonempty, because $x$ is an adherent point of $A$ by [L1]. [assume-hyp, L1, L2, L6]

2.1 Fix a rational $q$ with $0 < q < \varepsilon$ by [L4], and then $K \in \mathbb{N}$ with $|a_k - x| < q$ for all $k \ge K$ by [L3]; in particular $|a_K - x| < q < \varepsilon$, so $a_K \in N_\varepsilon(x) \cap A$ and that intersection is nonempty. As $\varepsilon$ was an arbitrary positive real, $x$ is an adherent point of $A$, hence $x \in \overline{A}$ by [L1]. [step 1.1, L1, L2, L3, L4, choose]

2.2 Apply [L7] to the family $(X_k)_{k \in \mathbb{N}}$ of step 1.2 and fix $f$ with $f(k) \in X_k$ for every $k$; putting $a_k := f(k)$ gives a sequence with $a_k \in A$ and $|a_k - x| < 1/(k+1)$ for every $k \in \mathbb{N}$. [step 1.2, L2, L7, choose]

3.1 That sequence converges to $x$: let $\varepsilon > 0$ be rational, fix by [L5] a natural $n \ge 1$ with $1/n < \varepsilon$, and put $K := n - 1$, a natural number since $n \ge 1$; for every $k \ge K$ one has $k + 1 \ge n \ge 1$, hence $0 < 1/(k+1) \le 1/n < \varepsilon$ by [L6], and therefore $|a_k - x| < 1/(k+1) < \varepsilon$. [step 2.2, L3, L5, L6, choose]

4.1 Step 2.1 gives the implication from right to left and steps 2.2 and 3.1 give it from left to right, so $x \in \overline{A}$ holds exactly when some sequence with all terms in $A$ converges to $x$. [step 2.1, step 2.2, step 3.1]

4.2 Sequential closedness: if $A$ is closed and a sequence with all terms in $A$ converges to some $y$, then $y \in \overline{A}$ by step 2.1 and $\overline{A} = A$ by [L1], so $y \in A$; conversely, if every convergent sequence with terms in $A$ has its limit in $A$, then any $y \in \overline{A}$ is the limit of the sequence produced by steps 2.2 and 3.1, hence lies in $A$, so $\overline{A} \subseteq A$, and with $A \subseteq \overline{A}$ this gives $A = \overline{A}$, that is, $A$ is closed. [step 2.1, step 2.2, step 3.1, L1]

5.1 Both assertions of the statement are proved, namely the sequential description of the closure in step 4.1 and the equivalence of closedness with sequential closedness in step 4.2. [step 4.1, step 4.2] ∎

## Remarks

- **Where the choice is spent, and why it cannot be avoided here.** Step 2.2 is
  the only appeal to [[def-countable-choice]]. A canonical selection would
  require a rule picking a distinguished element of an arbitrary nonempty subset
  of $\mathbb{R}$, and $\mathbb{R}$ carries no well-ordering that this library
  has constructed, so this library has no such rule to offer. Contrast
  [[lem-subset-of-countable]] and [[lem-countable-iff-surjection-from-n]], where
  the selection is from subsets of $\mathbb{N}$ and the least element is
  canonical.

- **The choice is genuinely confined to one direction.** Step 2.1 selects a
  single rational $q$ and a single index $K$ for one $\varepsilon$ at a time, and
  finitely many selections need no choice principle. So "the limit of a
  convergent sequence in a closed set lies in the set" is a theorem of ZF, and
  only the production of a sequence out of a point of the closure is not.

- **The indices start at $0$.** Since $\mathbb{N}$ contains $0$
  ([[def-sequence]]), the shrinking radii are $1/(k+1)$ and not $1/k$; the
  latter is undefined at $k = 0$. The threshold in step 3.1 is $K = n - 1$ for
  the same reason, and $n \ge 1$ is exactly what makes $K$ a natural number.
