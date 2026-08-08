---
id: cor-liminf-is-least-subsequential-limit
kind: corollary
title: "The limit inferior is the least subsequential limit in $\\overline{\\mathbb{R}}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-limsup-is-greatest-subsequential-limit, lem-limsup-reflection, def-limsup-liminf, def-subsequential-limit, def-extended-limits, def-extended-reals, thm-algebra-of-limits, def-divergence-to-infinity, def-real-limit, def-sequence, lem-of-add-order]
justified_by: []
aliases: []
landmark: false
short: "$\\liminf = \\min \\overline{\\operatorname{SL}}$"
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
    - title: "Limit superior and limit inferior (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_superior_and_limit_inferior"
    - title: "Subsequential limit (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequential_limit"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.17)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "N. Donaldson, Math 140A: Real Analysis notes"
      url: "https://www.math.uci.edu/~ndonalds/math140a/notes.pdf"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]). Then
$\liminf_{k} x_k \in \overline{\operatorname{SL}}(x)$ and
$\liminf_{k} x_k \le L$ for every $L \in \overline{\operatorname{SL}}(x)$
([[def-limsup-liminf]], [[def-extended-limits]]).

So the extended subsequential limit set of any real sequence has a **least**
element as well as a greatest one, and the two are
$\liminf_k x_k$ and $\limsup_k x_k$ respectively
([[thm-limsup-is-greatest-subsequential-limit]]). Every extended subsequential
limit lies between them.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals, and its reflection $y_k := -x_k$.

[L1] Reflection on $\overline{\mathbb{R}}$: $a \mapsto -a$ satisfies $-(-a) = a$ and $a \le b$ if and only if $-b \le -a$ ([[def-extended-reals]]).

[L2] $\limsup_k(-x_k) = -\liminf_k x_k$ ([[lem-limsup-reflection]]).

[L3] For every real sequence the extended subsequential limit set is nonempty and has greatest element the limit superior ([[thm-limsup-is-greatest-subsequential-limit]]).

[L4] Convergence in $\overline{\mathbb{R}}$, subsequences and the set $\overline{\operatorname{SL}}$ ([[def-extended-limits]], [[def-subsequential-limit]], [[def-sequence]], [[def-real-limit]]).

[L5] Scalar multiples of convergent sequences: $z_j \to z$ in $\mathbb{R}$ implies $c z_j \to c z$ ([[thm-algebra-of-limits]]).

[L6] Divergence to $\pm\infty$, and order reversal: $z_j > M$ is equivalent to $-z_j < -M$, and $M$ runs over all reals exactly when $-M$ does ([[def-divergence-to-infinity]], [[lem-of-add-order]]).

[L7] Limit superior and limit inferior of a real sequence ([[def-limsup-liminf]]).

## Proof

**Proof technique:** direct.

1.1 Put $y_k := -x_k$, a sequence of reals; then $-y_k = x_k$ for every $k$, by the involution property of the reflection. [given, L1, L4]

1.2 Let $L \in \overline{\mathbb{R}}$ and let $n : \mathbb{N} \to \mathbb{N}$ be strictly increasing with $(x_{n_j})$ converging to $L$ in $\overline{\mathbb{R}}$. [given, L4]

1.3 By [L3] applied to the sequence $(y_k)$, the set $\overline{\operatorname{SL}}(y)$ is nonempty and has greatest element $N_0 := \limsup_k y_k$, and $N_0 = -\liminf_k x_k$ by [L2]. [given, L2, L3, L7]

2.1 The reflected subsequence $(y_{n_j}) = (-x_{n_j})$ converges to $-L$ in $\overline{\mathbb{R}}$. If $L$ is real this is the scalar rule with $c = -1$. If $L = +\infty$ then for every real $M$ there is $J$ with $x_{n_j} > M$ for all $j \ge J$, hence $y_{n_j} < -M$ for all such $j$; since $-M$ runs over all reals as $M$ does, $y_{n_j} \to -\infty = -L$. If $L = -\infty$ the same argument with the inequalities exchanged gives $y_{n_j} \to +\infty = -L$. [step 1.2, L1, L4, L5, L6]

3.1 Hence $L \in \overline{\operatorname{SL}}(x)$ implies $-L \in \overline{\operatorname{SL}}(y)$, the same index map serving. Applying that implication to the sequence $(y_k)$, whose reflection is $(x_k)$, gives conversely that $N \in \overline{\operatorname{SL}}(y)$ implies $-N \in \overline{\operatorname{SL}}(x)$. So $\overline{\operatorname{SL}}(x) = \{\, -N : N \in \overline{\operatorname{SL}}(y) \,\}$. [step 2.1, step 1.1, L1, L4]

4.1 Therefore $-N_0 \in \overline{\operatorname{SL}}(x)$, and $-N_0 = -(-\liminf_k x_k) = \liminf_k x_k$; and for any $L \in \overline{\operatorname{SL}}(x)$ the element $-L$ lies in $\overline{\operatorname{SL}}(y)$, so $-L \le N_0$ by maximality, whence $\liminf_k x_k = -N_0 \le L$ by order reversal. Thus $\liminf_k x_k$ is the least element of $\overline{\operatorname{SL}}(x)$. [step 3.1, step 1.3, L1, L2] ∎

## Remarks

- **Nothing is reconstructed.** The subsequence realising $\liminf_k x_k$ is the
  one produced by [[thm-limsup-is-greatest-subsequential-limit]] for the reflected
  sequence, read back through $y \mapsto -y$. That is the whole point of proving
  [[lem-limsup-reflection]] first: the recursion and the well-ordering argument
  are done once.

- **Combined with the greatest element, this brackets every subsequential
  limit.** For any real sequence and any $L \in \overline{\operatorname{SL}}(x)$,
  $$\liminf_{k} x_k \;\le\; L \;\le\; \limsup_{k} x_k,$$
  which contains [[lem-liminf-le-limsup]] as the special case obtained by taking
  for $L$ either endpoint, both of which are in the set.

- **The real subsequential limit set inherits the statement only when the value is
  finite.** If $\liminf_k x_k$ is a real number it is the least element of
  $\operatorname{SL}(x)$ as well, since the two sets agree on $\mathbb{R}$
  ([[def-extended-limits]]). If it is $-\infty$, then $\operatorname{SL}(x)$ may
  have no least element at all, or be empty.
