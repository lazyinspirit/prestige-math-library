---
id: lem-omega-least-limit-ordinal
kind: lemma
title: "$\\omega$ is the least limit ordinal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-limit-ordinal, def-ordinal, def-natural-numbers, def-nat-order, lem-omega-smallest-inductive, lem-nat-nonzero-is-successor, lem-nat-transitive-irreflexive, lem-nat-discrete, lem-nat-trichotomy, thm-nat-linear-order, thm-induction-principle, thm-well-ordering-principle, lem-nat-add-identity, lem-ordinal-basics, lem-ordinal-trichotomy]
justified_by: []
aliases: [lem-omega-is-an-ordinal]
landmark: false
short: "naturals and $\\omega$ are ordinals; $\\omega$ is the first limit"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Limit ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_ordinal"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "Ordinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_number"
    - title: "A. Marks, Set Theory"
      url: "https://math.berkeley.edu/~marks/notes/set_theory_notes_4.pdf"
pipeline_run: null
---

## Statement

Let $\mathbb{N} = \omega$ be the natural numbers ([[def-natural-numbers]]) with
their usual order ([[def-nat-order]]). Then:

**(i)** for all $m, n \in \mathbb{N}$, $m \in n$ if and only if $m < n$;

**(ii)** every natural number is an ordinal ([[def-ordinal]]), and $\omega$ is an
ordinal;

**(iii)** $\omega$ is a limit ordinal ([[def-limit-ordinal]]);

**(iv)** every ordinal $\alpha \in \omega$ is $0$ or a successor ordinal, and
consequently $\omega$ is the **least** limit ordinal: $\omega \subseteq \gamma$,
that is $\omega \le \gamma$, for every limit ordinal $\gamma$.

So the natural numbers are exactly the ordinals below $\omega$, and $\omega$ is
the first ordinal at which induction acquires a limit clause.

**Everything here is a theorem of ZF, and no choice principle is used.** The
only axiom beyond the basic ones that any of it needs is Infinity, which is what
makes $\omega$ a set at all ([[lem-omega-smallest-inductive]]).

## Facts & Assumptions

**Given:** $\mathbb{N} = \omega$ with $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$ ([[def-natural-numbers]]), and the order $m \le n \iff \exists k\,(m + k = n)$, $m < n \iff (m \le n$ and $m \ne n)$ ([[def-nat-order]]).

[L1] $\omega$ is inductive, that is $0 \in \omega$ and $n \in \omega \Rightarrow \sigma(n) \in \omega$, and $\omega$ is contained in every inductive set ([[lem-omega-smallest-inductive]]).

[L2] The induction principle: a subset of $\mathbb{N}$ containing $0$ and closed under $\sigma$ equals $\mathbb{N}$ ([[thm-induction-principle]]).

[L3] $m < n \iff \sigma(m) \le n$ ([[lem-nat-discrete]]).

[L4] $\le$ is a linear order on $\mathbb{N}$ with trichotomy, and $0 \le m$ for every $m$ because $0 + m = m$ ([[thm-nat-linear-order]], [[lem-nat-trichotomy]], [[lem-nat-add-identity]]).

[L5] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L6] Every natural number is a transitive set and satisfies $n \notin n$ ([[lem-nat-transitive-irreflexive]]).

[L7] Every nonzero natural number is $\sigma(m)$ for some natural number $m$ ([[lem-nat-nonzero-is-successor]]).

[L8] An ordinal is a transitive set strictly well ordered by $\in$, no ordinal is a member of itself, and a limit ordinal is a nonzero ordinal that is not of the form $\beta^{+}$ ([[def-ordinal]], [[lem-ordinal-basics]], [[def-limit-ordinal]]).

[L9] $n < \sigma(n)$ for every $n \in \mathbb{N}$. This is established at step 1.3 *of* [[lem-nat-trichotomy]], where it is derived from $n + \sigma(0) = \sigma(n)$ and $\sigma(0) \ne 0$; the reference is to that item's numbering, not to any step below.

[L10] For ordinals $\alpha, \beta$: $\alpha \subseteq \beta$ if and only if $\alpha \in \beta$ or $\alpha = \beta$, and any two ordinals are comparable under inclusion (claims (f) and (g) of [[lem-ordinal-basics]]); exactly one of $\alpha \in \beta$, $\alpha = \beta$, $\beta \in \alpha$ holds, and $\alpha \le \beta :\iff \alpha \subseteq \beta$ is the order under which sets of ordinals are well ordered, with strict part $\in$ ([[lem-ordinal-trichotomy]]).

## Proof

**Proof technique:** direct.

1.1 For all $m, n \in \mathbb{N}$, $m \le n$ if and only if $m < \sigma(n)$: from $m \le n$ and $n < \sigma(n)$ ([L9]) transitivity gives $m < \sigma(n)$; conversely if $m < \sigma(n)$ and $m \le n$ failed, then $n < m$ by trichotomy, so $\sigma(n) \le m < \sigma(n)$ by [L3], which is impossible. [L3, L4, L9]

1.2 $\omega$ is a transitive set: the set $S = \{n \in \omega : n \subseteq \omega\}$ contains $0 = \varnothing$ and is closed under $\sigma$, since $n \subseteq \omega$ together with $n \in \omega$ gives $\sigma(n) = n \cup \{n\} \subseteq \omega$; so $S = \omega$ by [L2]. [L2, L1]

2.1 Claim (i): the set $T = \{n \in \omega : m \in n \iff m < n \text{ for every } m \in \omega\}$ contains $0$, because $m \in \varnothing$ is false and $m < 0$ is false, since $0 \le m$ always and $m < 0$ would give $m = 0$ by antisymmetry and then $m < m$; and $n \in T$ gives $\sigma(n) \in T$, because $m \in \sigma(n) \iff (m \in n \text{ or } m = n) \iff (m < n \text{ or } m = n) \iff m \le n \iff m < \sigma(n)$; hence $T = \omega$ by [L2]. [step 1.1, L2, L4]

3.1 Claim (ii) for natural numbers: fix $n \in \omega$; then $n$ is a transitive set by [L6], its elements are natural numbers by step 1.2, and on them membership is the strict order by step 2.1, so $\in$ is irreflexive, transitive and trichotomous on $n$ by [L4] and every nonempty subset of $n$ has an $\in$-least element by [L5]; hence $n$ is an ordinal. [step 1.2, step 2.1, L4, L5, L6, L8]

3.2 Claim (ii) for $\omega$: $\omega$ is a transitive set by step 1.2 and membership is the strict order on it by step 2.1, so the same four properties hold by [L4] and [L5]; hence $\omega$ is an ordinal. [step 1.2, step 2.1, L4, L5, L8]

4.1 Claim (iii): $\omega \ne 0$ because $0 \in \omega$; and $\omega$ is not a successor ordinal, since $\omega = \beta^{+}$ would give $\beta \in \omega$ and hence $\sigma(\beta) = \beta^{+} = \omega \in \omega$ because $\omega$ is inductive, contradicting the fact that no ordinal is a member of itself; so $\omega$ is a limit ordinal. [step 3.2, L1, L8]

5.1 Claim (iv), first half: the ordinals $\alpha$ with $\alpha \in \omega$ are exactly the natural numbers, each of which is $0$ or of the form $\sigma(m) = m^{+}$ with $m$ a natural number by [L7], hence $0$ or a successor ordinal; so no ordinal $\in$-below $\omega$ is a limit ordinal. [step 3.1, step 4.1, L7, L8]

6.1 Claim (iv), second half, which is where "least" is more than $\in$-minimality: let $\gamma$ be any limit ordinal; $\omega$ is an ordinal by step 3.2, so by comparability of ordinals under inclusion [L10] either $\omega \subseteq \gamma$ or $\gamma \subseteq \omega$, and in the second case [L10] gives $\gamma \in \omega$ or $\gamma = \omega$; but $\gamma \in \omega$ would make $\gamma$ equal to $0$ or to a successor ordinal by step 5.1, contradicting the definition of a limit ordinal in [L8], so $\gamma = \omega$ and $\omega \subseteq \gamma$ again; hence $\omega \subseteq \gamma$, that is $\omega \le \gamma$ in the ordering of [L10], for every limit ordinal $\gamma$, and since $\omega$ is itself a limit ordinal by step 4.1 it is the least one. [step 5.1, step 4.1, step 3.2, L8, L10]

7.1 Claims (i) to (iv) are established. [step 2.1, step 3.1, step 3.2, step 4.1, step 5.1, step 6.1] ∎

## Remarks

**Why claim (i) has to be proved.** The published development builds the order on $\mathbb{N}$ from addition ([[def-nat-order]]) and never identifies it with membership; the identification is recorded there as a remark, not a theorem. Ordinals need it as a theorem, because the whole definition of an ordinal is phrased in terms of $\in$. Once claim (i) is available, the two pictures of $n$, as "the number of predecessors" and as "the set of its predecessors", coincide.

**The finite ordinals.** Claims (ii) and (iv) say the natural numbers are exactly the ordinals $\alpha$ with $\alpha \in \omega$, and that each is $0$ or a successor. This is the precise sense in which $\mathbb{N}$ is an initial segment of the ordinals, and it is why ordinary induction ([[thm-induction-principle]]) is the special case of [[thm-transfinite-induction]] at $W = \omega$.

**Limits exist only because $\omega$ does.** The Axiom of Infinity is what makes $\omega$ a set ([[lem-omega-smallest-inductive]]), and it is also what gives this lemma its content: ZF without Infinity cannot prove that any limit ordinal exists, assuming that theory consistent. The reason is that every limit ordinal $\gamma$ is itself an inductive set, and so would witness Infinity outright: $0 \in \gamma$, because the $\in$-least element of a nonempty ordinal is $\varnothing$; and $\beta \in \gamma$ gives $\beta^{+} \subseteq \gamma$, hence $\beta^{+} \in \gamma$ by claim (f) of [[lem-ordinal-basics]] unless $\beta^{+} = \gamma$, which a limit ordinal excludes. Dropping an axiom is not the same as assuming its negation, and nothing here says that without Infinity every ordinal is $0$ or a successor: ZF itself extends ZF without Infinity and has limit ordinals. What is lost is any proof that one exists. The successor operation alone never produces a limit; a limit is always reached by taking a union, here $\omega = \bigcup \{n : n \in \omega\}$.

**Ordinal arithmetic is not developed here.** Sums and products of ordinals, and the ordinals $\omega + 1$, $\omega \cdot 2$ and so on, are defined by transfinite recursion and would fit naturally after this item, but nothing on this page needs them, so they are left to a later page rather than introduced unused.
