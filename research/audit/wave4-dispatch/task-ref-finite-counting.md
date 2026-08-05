# Adversarial proof reading — `thm-cardinal-arithmetic-agrees-with-finite-counting`

## FOCUS

Concentrate on step 1.3, the proof that every infinite cardinal is a limit ordinal. It supposes kappa = beta union {beta}, derives omega subset-or-equal beta, and then claims the map sending beta to 0, each j in omega to sigma(j), and each xi in beta with omega subset-or-equal xi to itself is a BIJECTION from kappa onto beta, with pairwise disjoint images {0}, omega minus {0}, and {xi in beta : omega subset-or-equal xi}. A judge alleged the three pieces are not shown to be disjoint and that the map is not shown to be surjective onto beta. Decide: is the map well defined on all of kappa, injective, and onto beta? Is the case split on elements of beta exhaustive? Then check every other step.

## THE ITEM UNDER REVIEW, in full, exactly as it stands on disk

```markdown
---
id: thm-cardinal-arithmetic-agrees-with-finite-counting
kind: theorem
title: "Every natural number and $\\omega$ are cardinals, every infinite cardinal is a limit ordinal, and on the natural numbers the cardinal operations are the published finite counting operations, with $\\lvert A \\rvert$ in the finite sense equal to $\\lvert A \\rvert$ in the cardinal sense"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-cardinal-arithmetic, lem-cardinality-of-a-well-orderable-set, def-finite-cardinality, thm-sum-rule, thm-product-rule, thm-cardinality-of-a-set-of-functions, def-nat-power, lem-pigeonhole, def-cardinal, lem-omega-least-limit-ordinal, thm-ordinal-arithmetic-agrees-on-omega, def-countable, def-natural-numbers, lem-nat-order-is-membership, lem-nat-nonzero-is-successor, thm-omega-is-peano-system, lem-ordinal-basics, lem-ordinal-trichotomy, def-limit-ordinal, def-ordinal, def-equinumerous, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
short: "the finite dictionary for $\\oplus$, $\\otimes$, $\\kappa^{\\lambda}$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-05
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "K. Kearnes, Cardinal Arithmetic (Fall 2025 course handout)"
      url: "https://math.colorado.edu/~kearnes/Teaching/Courses/F25/cardinals_arithmetic.pdf"
    - title: "Cardinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
pipeline_run: null
---

## Statement

Work in ZF; no choice principle is used. Let $\mathbb{N} = \omega$ be the von
Neumann naturals ([[def-natural-numbers]]), and let $+_{\mathbb{N}}$,
$\cdot_{\mathbb{N}}$ and $m^{n}$ be the natural-number operations
([[def-nat-power]] for the power). Then:

**(a)** Every natural number is a cardinal ([[def-cardinal]]), and $\omega$ is a
cardinal.

**(b)** Every infinite cardinal is a limit ordinal ([[def-limit-ordinal]]).

**(c) One notation, one meaning.** If $A$ is finite ([[def-countable]]) then $A$
is well-orderable and the natural number $\lvert A \rvert$ of
[[def-finite-cardinality]] **is** the cardinal $\lvert A \rvert$ of
[[lem-cardinality-of-a-well-orderable-set]].

**(d) One arithmetic.** For $m, n \in \omega$, read as cardinals,

$$m \oplus n = m +_{\mathbb{N}} n, \qquad m \otimes n = m \cdot_{\mathbb{N}} n, \qquad m^{n} \text{ as a cardinal } = m^{n} \text{ as a natural number},$$

the natural-number power being that of [[def-nat-power]] and the cardinal
exponential being defined in ZF here because the function set it counts is
finite. Moreover $m \oplus n$ and $m \otimes n$ are also the **ordinal**
sum and product of $m$ and $n$ ([[thm-ordinal-arithmetic-agrees-on-omega]]).
**No agreement is claimed between the cardinal power and the ordinal power**;
[[thm-ordinal-arithmetic-agrees-on-omega]] itself claims none for exponentiation,
and none is needed below.

## Facts & Assumptions

**Given:** The von Neumann naturals $\mathbb{N} = \omega$, the finite counting operations of [[def-finite-cardinality]], and the cardinal operations of [[def-cardinal-arithmetic]], in ZF.

[L1] If $n \approx m$ with $n, m \in \mathbb{N}$ then $n = m$ (claim 3 of [[lem-pigeonhole]]); and $\mathbb{N} \not\approx n$ for every $n \in \mathbb{N}$ (claim 4).

[L2] $\mathbb{N}$ is a transitive set and $m \in n$ if and only if $m < n$, so $n = \{m \in \mathbb{N} : m < n\}$ ([[lem-nat-order-is-membership]]).

[L3] Every natural number is an ordinal, and $\omega$ is an ordinal ([[lem-omega-least-limit-ordinal]] claim (ii), [[def-ordinal]]).

[L4] Every element of an ordinal is an ordinal, $\alpha \notin \alpha$, $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$, and ordinals satisfy trichotomy ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).

[L5] For a well-orderable $X$, $\lvert X \rvert$ is the least ordinal equinumerous with $X$, and equinumerous sets receive the same one ([[lem-cardinality-of-a-well-orderable-set]]).

[L6] For finite $A$ there is exactly one $n \in \mathbb{N}$ with $A \approx n$, written $\lvert A \rvert$; $\lvert n \rvert = n$; and $\lvert B \rvert = \lvert A \rvert$ when $A \approx B$ ([[def-finite-cardinality]], [[def-countable]]).

[L7] For finite disjoint $A, B$: $A \cup B$ is finite with $\lvert A \cup B\rvert = \lvert A\rvert +_{\mathbb{N}} \lvert B\rvert$ ([[thm-sum-rule]], claim 1). For finite $A, B$: $A \times B$ is finite with $\lvert A \times B\rvert = \lvert A\rvert \cdot_{\mathbb{N}} \lvert B\rvert$ ([[thm-product-rule]], claim 1). For finite $A, B$: the set of functions $B \to A$ is finite with cardinality $\lvert A\rvert^{\lvert B\rvert}$ ([[thm-cardinality-of-a-set-of-functions]], [[def-nat-power]]).

[L8] $\omega$ is inductive, so it is closed under $\sigma(n) = n \cup \{n\}$; $\sigma$ is injective and never $0$; and every nonzero natural number is a successor ([[def-natural-numbers]], [[thm-omega-is-peano-system]], [[lem-nat-nonzero-is-successor]]).

[L9] $\kappa \oplus \lambda = \lvert \kappa \sqcup \lambda\rvert$, $\kappa \otimes \lambda = \lvert \kappa \times \lambda\rvert$, $\kappa^{\lambda} = \lvert {}^{\lambda}\kappa\rvert$ ([[def-cardinal-arithmetic]]); a bijection witnesses $\approx$ and compositions of bijections are bijections ([[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L10] On $\omega$ the ordinal sum and product are the Peano ones ([[thm-ordinal-arithmetic-agrees-on-omega]], claim (b)).

## Proof

**Proof technique:** direct.

1.1 Let $n \in \mathbb{N}$ and suppose $\alpha \in n$ with $\alpha \approx n$; then $\alpha \in \mathbb{N}$ by [L2], so $\alpha = n$ by [L1], giving $n \in n$, which [L4] forbids; so $n$ is a cardinal. [L1, L2, L3, L4]

1.2 Suppose $\alpha \in \omega$ with $\alpha \approx \omega$; then $\alpha \in \mathbb{N}$ and $\mathbb{N} \approx \alpha$, which [L1] forbids; so $\omega$ is a cardinal, and claim (a) holds. [L1, L3, L4]

1.3 Let $\kappa$ be an infinite cardinal, so $\omega \subseteq \kappa$; then $\kappa \ne 0$, and if $\kappa = \beta \cup \{\beta\}$ for an ordinal $\beta$ then $\beta \in \omega$ is impossible, since $\kappa = \sigma(\beta) \in \omega$ by [L8] would give $\kappa \in \kappa$ against [L4], so $\omega \subseteq \beta$ by [L4]; the map sending $\beta$ to $0$, each $j \in \omega$ to $\sigma(j)$, and each $\xi \in \beta$ with $\omega \subseteq \xi$ to itself is then a bijection $\kappa \to \beta$, its three pieces having the pairwise disjoint images $\{0\}$, $\omega \setminus \{0\}$ and $\{\xi \in \beta : \omega \subseteq \xi\}$ by [L8]; so $\beta \approx \kappa$ with $\beta \in \kappa$, contradicting that $\kappa$ is a cardinal, and $\kappa$ is therefore a limit ordinal, which is claim (b). [L4, L8, L9]

1.4 For $m, n \in \mathbb{N}$ the sets $\{0\} \times m$ and $\{1\} \times n$ are finite and disjoint with $\lvert \{0\} \times m\rvert = m$ and $\lvert \{1\} \times n\rvert = n$ by [L6], so [L7] gives that $m \sqcup n$, $m \times n$ and ${}^{n}m$ are all finite, with finite cardinalities $m +_{\mathbb{N}} n$, $m \cdot_{\mathbb{N}} n$ and $m^{n}$ respectively. [L6, L7, L9]

2.1 Claim (c): let $A$ be finite and $n = \lvert A \rvert$ in the sense of [L6], so $A \approx n$ and $A$ is well-orderable; if $\beta \approx A$ with $\beta \in n$ then $\beta \in \mathbb{N}$ by [L2] and $\beta \approx n$ by [L9], so $\beta = n$ by [L1], contradicting [L4]; hence $n$ is the least ordinal equinumerous with $A$ and equals the cardinal $\lvert A \rvert$ of [L5]. [step 1.1, L1, L2, L4, L5, L6, L9]

3.1 Claim (d): each of $m \sqcup n$, $m \times n$ and ${}^{n}m$ is finite by step 1.4, hence well-orderable, so its cardinal cardinality is defined in ZF and equals its finite cardinality by step 2.1; reading this through [L9] gives $m \oplus n = m +_{\mathbb{N}} n$, $m \otimes n = m \cdot_{\mathbb{N}} n$ and $m^{n}$ (cardinal) $= m^{n}$ ([[def-nat-power]]), and [L10] identifies the first two with the ordinal sum and product. [step 1.4, step 2.1, L9, L10]

4.1 Claims (a), (b), (c) and (d) all hold, in ZF. [step 1.2, step 1.3, step 2.1, step 3.1] ∎

## Remarks

**Why this theorem is not optional.** Two published items already write $\lvert A \rvert$: [[def-finite-cardinality]], where the value is a natural number and the definition applies to finite sets only, and [[def-cardinal]], where the value is an initial ordinal. On a finite set both apply. Without claim (c) the same symbol would carry two meanings and every finite computation on this page would be ambiguous; with it there is one meaning, and a natural number may be read as a cardinal without comment.

**The same holds for $+$ on $\omega$, twice over.** Claim (d) closes the second half of a dictionary whose first half is [[thm-ordinal-arithmetic-agrees-on-omega]]: the Peano sum, the ordinal sum and the cardinal sum of two natural numbers are one natural number. The three operations diverge immediately above $\omega$, and that divergence is the reason [[def-cardinal-arithmetic]] writes $\oplus$ and $\otimes$ rather than $+$ and $\cdot$.

**What claim (b) is for.** It is used wherever an argument needs to take suprema below an infinite cardinal, or to know that $\max(\xi,\eta) + 1$ stays below $\kappa$ when $\xi, \eta < \kappa$. The proof is the shift bijection that [[def-cardinal]] already describes for $\omega^{+}$, carried out at an arbitrary infinite cardinal: prepending or removing one point does not change the size of an infinite well-ordered set, so a successor ordinal above $\omega$ is never an initial ordinal.
```

## EVERY DEPENDENCY IT DECLARES — Statement/Definition text, verbatim from disk

Their own proofs are omitted; you are checking whether these statements license the
item above, not re-proving them.

### `def-cardinal-arithmetic`

```markdown
## Definition

Let $\kappa$ and $\lambda$ be cardinals ([[def-cardinal]]), and recall the
notation of [[lem-cardinal-operations-are-well-defined]]:

$$\kappa \sqcup \lambda = (\{0\} \times \kappa) \cup (\{1\} \times \lambda), \qquad {}^{\lambda}\kappa = \{\, h : h \text{ is a function } \lambda \to \kappa \,\}.$$

**Sum and product.**

$$\kappa \oplus \lambda \;:=\; \lvert \kappa \sqcup \lambda \rvert, \qquad \kappa \otimes \lambda \;:=\; \lvert \kappa \times \lambda \rvert .$$

Both values exist in ZF and are cardinals: claim (c) of
[[lem-cardinal-operations-are-well-defined]] well-orders each of the two sets
explicitly, and [[lem-cardinality-of-a-well-orderable-set]] then supplies the
least equinumerous ordinal. **No choice principle is used.**

**Exponentiation.**

$$\kappa^{\lambda} \;:=\; \lvert {}^{\lambda}\kappa \rvert ,$$

the number of functions from a set of size $\lambda$ to a set of size $\kappa$.
The right-hand side is defined exactly when ${}^{\lambda}\kappa$ is
well-orderable. **Assuming the Axiom of Choice** ([[def-axiom-of-choice]]) every
set is well-orderable ([[thm-well-ordering-theorem]]) and $\kappa^{\lambda}$ is
defined for all cardinals; every statement on this page that writes
$\kappa^{\lambda}$ for an infinite exponent says so in its own hypotheses.

**Transport to arbitrary sets.** If $A$ and $B$ are well-orderable with
$\lvert A \rvert = \kappa$ and $\lvert B \rvert = \lambda$, then

$$\lvert A \sqcup B \rvert = \kappa \oplus \lambda, \qquad \lvert A \times B \rvert = \kappa \otimes \lambda, \qquad \lvert {}^{B}A \rvert = \kappa^{\lambda}$$

whenever the sets on the left have cardinalities at all, because $A \approx \kappa$
and $B \approx \lambda$ ([[def-equinumerous]]) and the three constructions
respect $\approx$ (claim (a) of [[lem-cardinal-operations-are-well-defined]],
[[def-injection-surjection-bijection]]). So the operations may be computed from
any representatives.

**Finite and infinite cardinals.** A cardinal $\kappa$ is **finite** when
$\kappa \in \omega$ and **infinite** when $\omega \subseteq \kappa$, that is
$\omega \le \kappa$; by trichotomy ([[lem-ordinal-trichotomy]]) and
[[lem-omega-least-limit-ordinal]] every cardinal is exactly one of the two.

## Remarks

**The symbols $\oplus$ and $\otimes$ are not decoration.** Ordinal addition and
ordinal multiplication ([[def-ordinal-addition]], [[def-ordinal-multiplication]])
are defined on **the same objects** — cardinals are ordinals — and give
**different values**. With $\omega$ read as a cardinal,
$\omega \oplus \omega = \omega$, whereas the ordinal sum $\omega + \omega$ is
strictly larger than $\omega$; and $\omega \otimes \omega = \omega$, whereas the
ordinal product $\omega \cdot \omega$ is larger still. Writing both operations
with $+$ and $\cdot$ would make every equation on this page ambiguous, so the
cardinal operations get their own symbols and the plain $+$ and $\cdot$ on this
page always mean the ordinal ones.

**Exponentiation keeps the symbol, under a hard rule.** There is no comparably
readable alternative to $\kappa^{\lambda}$, and
[[rem-ordinal-versus-cardinal-exponentiation]] already records that
$\alpha^{\beta}$ is used for two different operations: as ordinals
$2^{\omega} = \omega$, while the cardinal $2^{\omega}$ counts the functions
$\omega \to \{0,1\}$ and is uncountable. The rule adopted here, and followed on
this page and its companion, is:

> **In an exponential, the base and the exponent are always alephs, letters or
> expressions denoting cardinals — $\kappa$, $\lambda$, $\mu$,
> $\mathfrak{c}$, $\operatorname{cf}(\kappa)$, $\lvert A \rvert$ — or a natural
> number read as a cardinal; never $\omega$, never $\omega_1$, and never a
> letter denoting an ordinal, such as $\alpha, \beta, \gamma, \xi, \eta$.**

So $2^{\aleph_0}$, $\kappa^{\lambda}$ and $\aleph_1^{\aleph_0}$ are cardinal
exponentials, and an expression such as $\omega^{\omega}$ or $\alpha^{\beta}$ is
never written here at all. Where a value has to be named in both readings, the
two are given different letters.

**What is being counted, in each case.** $\kappa \oplus \lambda$ is the size of
two disjoint blocks laid side by side; the tagging in $\sqcup$ is what makes
"disjoint" true even though one of $\kappa$ and $\lambda$ is always a subset of
the other, so their intersection is the smaller of the two. $\kappa \otimes \lambda$
is the size of a rectangle. $\kappa^{\lambda}$ is the number of ways to choose a
value in $\kappa$ for each of $\lambda$ positions, independently. None of the
three is sensitive to the order in which the elements are arranged, which is
exactly what distinguishes them from the ordinal operations
([[def-ordinal-exponentiation]] included), whose values depend on the arrangement.

**The zero and one cases are not special.** $0 = \varnothing$ and $1 = \{0\}$ are
cardinals ([[def-ordinal]]), and the definitions apply to them unchanged:
$\kappa \sqcup 0 = \{0\} \times \kappa$, $\kappa \times 0 = \varnothing$, and
${}^{0}\kappa = \{\varnothing\}$ has exactly one element, the empty function.
The resulting unit laws are proved rather than stipulated, in
[[lem-cardinal-arithmetic-basic-laws]].
```

### `lem-cardinality-of-a-well-orderable-set`

```markdown
## Statement

Call a set $X$ **well-orderable** when some relation well-orders it
([[def-well-order]]). Work in ZF, with no choice principle. Then:

**(a)** $X$ is well-orderable if and only if $X \approx \alpha$
([[def-equinumerous]]) for some ordinal $\alpha$ ([[def-ordinal]]).

**(b)** If $X$ is well-orderable there is a **least** ordinal equinumerous with
$X$. It is written $\lvert X \rvert$ and called the **cardinality** of $X$.

**(c)** $\lvert X \rvert$ is a cardinal ([[def-cardinal]]).

**(d)** If $X \approx Y$ and $X$ is well-orderable, then $Y$ is well-orderable
and $\lvert Y \rvert = \lvert X \rvert$.

**(e)** $\lvert \alpha \rvert \le \alpha$ for every ordinal $\alpha$, and
$\lvert \alpha \rvert = \alpha$ exactly when $\alpha$ is a cardinal.

Assuming the Axiom of Choice ([[def-axiom-of-choice]]) every set is
well-orderable ([[thm-well-ordering-theorem]]), so $\lvert X \rvert$ is then
defined for every set and is exactly the cardinality of [[def-cardinal]].

**Why this item exists.** [[def-cardinal]] introduces $\lvert X \rvert$ under the
hypothesis "Assume the Axiom of Choice", and it needs that hypothesis only to
know that $X$ carries a well-order at all. Everything below is about
well-orderable sets and is a theorem of ZF, which is what makes it possible to
state Hessenberg's theorem and Tarski's theorem, one of which is choice-free and
the other of which is precisely about the gap between ZF and ZFC.

## Facts & Assumptions

**Given:** The axioms of ZF, in particular Separation and Replacement. No choice principle is assumed except where the Axiom of Choice is named.

[L1] Every well-order is order isomorphic to exactly one ordinal, its order type ([[thm-mostowski-collapse]]).

[L2] An order isomorphism is in particular a bijection ([[def-order-isomorphism]], [[def-injection-surjection-bijection]]).

[L3] $\alpha^{+} = \alpha \cup \{\alpha\}$ is an ordinal, every element of an ordinal is an ordinal, $\alpha \notin \alpha$, and $\alpha \subseteq \beta$ if and only if $\alpha \in \beta$ or $\alpha = \beta$ ([[lem-ordinal-basics]], [[def-ordinal]]).

[L4] For ordinals exactly one of $\alpha \in \beta$, $\alpha = \beta$, $\beta \in \alpha$ holds, and every nonempty set of ordinals has an $\in$-least element ([[lem-ordinal-trichotomy]]).

[L5] $\approx$ is reflexive, symmetric and transitive, and the order relation $\alpha \le \beta$ on ordinals is $\alpha \subseteq \beta$ ([[def-equinumerous]], [[def-ordinal]]).

[L6] An ordinal $\kappa$ is a **cardinal** when no $\alpha \in \kappa$ satisfies $\alpha \approx \kappa$; under the Axiom of Choice, $\lvert X \rvert$ is the least ordinal equinumerous with $X$ ([[def-cardinal]]).

[L7] Assuming the Axiom of Choice, every set carries a well-order ([[def-axiom-of-choice]], [[thm-well-ordering-theorem]]).
```

### `def-finite-cardinality`

```markdown
## Definition

Throughout this page $\mathbb{N}$ is the set of von Neumann naturals
([[def-natural-numbers]]): $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$, and
$n = \{\, m \in \mathbb{N} : m < n \,\}$ is itself the set of its predecessors,
the order being the additive order of [[def-nat-order]] identified with
membership in [[lem-nat-order-is-membership]]. Write $A \approx B$ when a
bijection $A \to B$ exists ([[def-equinumerous]],
[[def-injection-surjection-bijection]]). A set $A$ is **finite** when
$A \approx n$ for some $n \in \mathbb{N}$ ([[def-countable]]).

**Definition.** Let $A$ be a finite set. Then there is **exactly one**
$n \in \mathbb{N}$ with $A \approx n$, and we write

$$\lvert A\rvert := \text{that } n,$$

the **cardinality**, or number of elements, of $A$. The notation $\lvert A\rvert$
is defined for finite $A$ only, and its value is a natural number.

**Why exactly one, which is the whole content of the definition.** At least one
such $n$ exists: that is literally what "$A$ is finite" says. At most one exists:
if $A \approx n$ and $A \approx m$ with $n, m \in \mathbb{N}$, then $n \approx A$,
because the inverse of a bijection is a bijection, and hence $n \approx m$,
because a composition of bijections is a bijection
([[def-injection-surjection-bijection]]); and $n \approx m$ forces $n = m$ by
claim 3 of [[lem-pigeonhole]]. So $\lvert A\rvert$ names a single natural number
and not a family of choices.

**Four consequences, proved here because everything on this page uses them.**

**(a) $\lvert n\rvert = n$ for every $n \in \mathbb{N}$.** The identity map
$\mathrm{id}_n$ is a bijection $n \to n$, so $n \approx n$; thus $n$ is finite and
the unique natural equinumerous with it is $n$ itself.

**(b) $\lvert\varnothing\rvert = 0$, and a finite $A$ satisfies
$\lvert A\rvert = 0$ if and only if $A = \varnothing$.** Since $0 = \varnothing$,
part (a) gives $\lvert\varnothing\rvert = 0$. Conversely, if $\lvert A\rvert = 0$
then there is a bijection $f : A \to \varnothing$; were some $a \in A$, the value
$f(a)$ would be an element of $\varnothing$, and $\varnothing$ has none, so
$A = \varnothing$.

**(c) Transport along a bijection.** If $A$ is finite and $f : A \to B$ is a
bijection, then $B$ is finite and $\lvert B\rvert = \lvert A\rvert$. Indeed
$B \approx A$ through $f^{-1}$ and $A \approx \lvert A\rvert$, so
$B \approx \lvert A\rvert$ by transitivity.

**(d) Equality of cardinalities is equinumerosity.** For finite $A$ and $B$:
$\lvert A\rvert = \lvert B\rvert$ if and only if $A \approx B$. If the
cardinalities agree then $A \approx \lvert A\rvert = \lvert B\rvert \approx B$;
conversely $A \approx B$ gives $\lvert B\rvert = \lvert A\rvert$ by (c).

## Remarks

- **$\mathbb{N}$ contains $0$ here, and that is not a detail.** Every index range
  on this page starts at $0$, a one-element set has cardinality
  $1 = \{0\}$, and $\lvert A\rvert$ is never a positive-integer-only object. A
  statement about $\lvert A\rvert$ that is true only for $\lvert A\rvert \ge 1$
  must say so.

- **$\lvert A\rvert$ is a natural number, not a cardinal number.** The theory of
  cardinals ([[def-cardinal]]) is developed much later in the library and nothing
  here uses it, or any cardinal arithmetic: the pointer is orientation only. What
  makes the notation legitimate at this point in the reading order is exactly
  claim 3 of [[lem-pigeonhole]], and nothing more.

- **What the definition does not supply.** It asserts that *some* bijection
  $A \to \lvert A\rvert$ exists; it does not single one out, and nothing in the
  library does. Two sets can have equal cardinality with no distinguished
  bijection between them, which is the point of the counterexample on this page's
  companion.
```

### `thm-sum-rule`

```markdown
## Statement

1. **Two blocks.** If $A$ and $B$ are finite and **disjoint**, then $A \cup B$ is
   finite and $\lvert A \cup B\rvert = \lvert A\rvert + \lvert B\rvert$
   ([[def-finite-cardinality]]).
2. **A finite partition.** If $I$ is a finite set and $(A_i)_{i \in I}$ is a
   family of finite sets that are pairwise disjoint, then $\bigcup_{i \in I} A_i$
   is finite and
   $\big\lvert\bigcup_{i \in I} A_i\big\rvert = \sum_{i \in I}\lvert A_i\rvert$,
   the sum being that of [[def-sum-over-a-finite-index-set]].
3. **Splitting a sum along a partition of its index set.** Let $S$ be finite, let
   $J$ be finite, and let $(S_j)_{j \in J}$ be pairwise disjoint subsets of $S$
   with $\bigcup_{j \in J} S_j = S$. Then for $a : S \to \mathbb{R}$ or
   $a : S \to \mathbb{N}$,
   $$\sum_{i \in S} a_i = \sum_{j \in J}\Big(\sum_{i \in S_j} a_i\Big), \qquad \prod_{i \in S} a_i = \prod_{j \in J}\Big(\prod_{i \in S_j} a_i\Big).$$
   In particular $\sum_{i \in S \cup T} a_i = \sum_{i \in S} a_i + \sum_{i \in T} a_i$
   for disjoint finite $S$ and $T$.

**Disjointness is a hypothesis and not a formality.** It is spent at exactly one
step, the injectivity of the splice map, and dropping it makes clause 1 false;
the companion page carries that false statement with its smallest witness.

```tikz
\begin{tikzpicture}[x=1.05cm,y=1cm]
  \node at (1,2.45) {$A$};
  \node at (5.2,2.45) {$B$};
  \node at (3.1,2.45) {$p,q>0$};
  \node (f0) at (0,1.55) {$f(0)$};
  \node (fd) at (1,1.55) {$\cdots$};
  \node (fp) at (2,1.55) {$f(p-1)$};
  \node (g0) at (4.2,1.55) {$g(0)$};
  \node (gd) at (5.2,1.55) {$\cdots$};
  \node (gq) at (6.2,1.55) {$g(q-1)$};
  \node (d0) at (0,0) {$0$};
  \node (dd1) at (1,0) {$\cdots$};
  \node (dp) at (2,0) {$p-1$};
  \node (dpp) at (4.2,0) {$p$};
  \node (dd2) at (5.2,0) {$\cdots$};
  \node (dpq) at (6.2,0) {$p+q-1$};
  \draw[->] (d0) -- (f0);
  \draw[->] (dp) -- (fp);
  \draw[->] (dpp) -- (g0);
  \draw[->] (dpq) -- (gq);
  \draw[dashed] (3.1,-0.45) -- (3.1,2.15);
  \node at (1,-0.65) {$h(k)=f(k)$};
  \node at (5.2,-0.65) {$h(p+j)=g(j)$};
  \node at (3.1,-1.2) {$h:p+q\longrightarrow A\cup B$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** Finite sets as in the statement, and the truncated difference and the two finite sums of [[def-nat-finite-sum-and-product]]. Throughout, $\ast$ denotes either $+$ or $\cdot$ on $\mathbb{R}$ or on $\mathbb{N}$, $e$ the corresponding identity, and $\bigstar_{k<n} c_k$ the associated iterated operation; the four cases are proved by one argument, as in [[lem-finite-sum-permutation-invariance]].

[L1] Induction ([[thm-induction-principle]]).

[L2] Cardinality ([[def-finite-cardinality]]): $\lvert A\rvert$ is the unique natural with $A \approx \lvert A\rvert$; $\lvert n\rvert = n$; $\lvert\varnothing\rvert = 0$; a bijection transports finiteness and cardinality.

[L3] Sums over a finite index set ([[def-sum-over-a-finite-index-set]]): $\sum_{i \in S} a_i = \sum_{k<n} a_{\varphi(k)}$ for any bijection $\varphi : \lvert S\rvert \to S$, the value being independent of $\varphi$; $\sum_{i \in n} a_i = \sum_{k<n} a_k$; reindexing along a bijection $T \to S$ leaves the value unchanged; and $\sum_{i \in \varnothing} a_i = e$.

[L4] Recursion clauses: $\bigstar_{k<0} c_k = e$ and $\bigstar_{k<\sigma(n)} c_k = \big(\bigstar_{k<n} c_k\big) \ast c_n$ ([[def-nat-finite-sum-and-product]], [[def-finite-sum]]).

[L5] Splitting at an index: for $p \le N$ and $q = N - p$, $\bigstar_{k<N} c_k = \big(\bigstar_{k<p} c_k\big) \ast \big(\bigstar_{j<q} c_{p+j}\big)$ (clause 3 of [[lem-nat-finite-sum-laws-and-the-canonical-embedding]], clause 3 of [[lem-finite-sum-laws]]).

[L6] Order and addition in $\mathbb{N}$: $p \le k$ gives a unique $j$ with $p + j = k$; $p + j < p + q \iff j < q$; addition is commutative; $\sigma(m) = m + 1$ ([[def-nat-order]], [[lem-nat-add-cancellative]], [[lem-nat-order-add-compatible]], [[lem-nat-add-commutative]], [[def-nat-addition]], [[lem-nat-order-is-membership]]).

[L7] Maps ([[def-injection-surjection-bijection]], [[def-equinumerous]]): composites and inverses of bijections are bijections, and an injective surjection is a bijection.

[L8] A subset of a finite set is finite ([[thm-subset-of-a-finite-set]], clause 1).
```

### `thm-product-rule`

```markdown
## Statement

1. If $A$ and $B$ are finite then $A \times B$ is finite and
   $\lvert A \times B\rvert = \lvert A\rvert \cdot \lvert B\rvert$
   ([[def-finite-cardinality]]).
2. Let $m \in \mathbb{N}$ and let $A_0, \dots, A_{m-1}$ be finite sets. Write
   $$\prod_{i<m} A_i := \{\, f : f \text{ is a function with domain } m \text{ and } f(i) \in A_i \text{ for every } i < m \,\}.$$
   Then $\prod_{i<m} A_i$ is finite and
   $\big\lvert\prod_{i<m} A_i\big\rvert = \prod_{i<m}\lvert A_i\rvert$, the
   right-hand product being the $\mathbb{N}$-valued one of
   [[def-nat-finite-sum-and-product]].

At $m = 0$ clause 2 reads $\big\lvert\prod_{i<0} A_i\big\rvert = 1$: there is
exactly one function with domain $\varnothing$, the empty function, and the empty
product is $1$. Both sides are computed, not stipulated.

```tikz
\begin{tikzpicture}[x=1.45cm,y=0.9cm]
  \node at (0,2.45) {$a_0$};
  \node at (1,2.45) {$a_1$};
  \node at (2,2.45) {$a_2$};
  \node at (-1.1,1.5) {$b_0$};
  \node at (-1.1,0.5) {$b_1$};
  \draw (-0.5,0) rectangle (2.5,2);
  \draw (0.5,0) -- (0.5,2);
  \draw (1.5,0) -- (1.5,2);
  \draw (-0.5,1) -- (2.5,1);
  \node at (0,1.5) {$(a_0,b_0)$};
  \node at (1,1.5) {$(a_1,b_0)$};
  \node at (2,1.5) {$(a_2,b_0)$};
  \node at (0,0.5) {$(a_0,b_1)$};
  \node at (1,0.5) {$(a_1,b_1)$};
  \node at (2,0.5) {$(a_2,b_1)$};
  \node at (1,-0.6) {$|A\times B|=3\cdot2=6$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** Finite sets $A$, $B$ and a finite list $A_0, \dots, A_{m-1}$ of finite sets. Recall $\sigma(m) = m \cup \{m\}$ and $m = \{\,i : i < m\,\}$.

[L1] Induction ([[thm-induction-principle]]).

[L2] Cardinality ([[def-finite-cardinality]]): $\lvert A\rvert$ is the unique natural with $A \approx \lvert A\rvert$; $\lvert n\rvert = n$; and a bijection transports finiteness and cardinality.

[L3] The sum rule ([[thm-sum-rule]]): a family of pairwise disjoint finite sets indexed by a finite set has finite union, whose cardinality is the sum over that index set of the cardinalities.

[L4] Sums over a finite index set ([[def-sum-over-a-finite-index-set]]): $\sum_{i \in S} c = \lvert S\rvert \cdot c$ for a constant $c$.

[L5] Recursion clause for the $\mathbb{N}$-valued product ([[def-nat-finite-sum-and-product]]): $\prod_{i<0} c_i = 1$ and $\prod_{i<\sigma(m)} c_i = \big(\prod_{i<m} c_i\big)\cdot c_m$.

[L6] Maps ([[def-injection-surjection-bijection]], [[def-equinumerous]]): a map with a two-sided inverse is a bijection, and composites of bijections are bijections.

[L7] Arithmetic: multiplication of naturals is commutative ([[lem-nat-mult-commutative]], [[def-nat-multiplication]]); and $m = \{\,i : i<m\,\}$, $\sigma(m) = m \cup \{m\}$, $m \notin m$ ([[lem-nat-order-is-membership]], [[def-natural-numbers]]).
```

### `thm-cardinality-of-a-set-of-functions`

```markdown
## Statement

Let $A$ and $B$ be finite sets and write

$$A^{B} := \{\, f : f \text{ is a function } B \to A \,\}.$$

Then $A^{B}$ is finite and $\lvert A^{B}\rvert = \lvert A\rvert^{\lvert B\rvert}$,
the power being the $\mathbb{N}$-valued exponentiation of [[def-nat-power]].

Both degenerate cases are covered and neither is a stipulation. If
$B = \varnothing$ there is exactly one function $B \to A$, the empty function, so
$\lvert A^{\varnothing}\rvert = 1 = \lvert A\rvert^{0}$ **even when
$A = \varnothing$**. If $A = \varnothing$ and $B \ne \varnothing$ there is no
function at all, so $\lvert A^{B}\rvert = 0 = 0^{\lvert B\rvert}$ with
$\lvert B\rvert \ge 1$.

## Facts & Assumptions

**Given:** Finite sets $A$ and $B$, and $n := \lvert B \rvert$. Here $A^B$ is the SET of functions $B \to A$; it carries no further structure.

[L1] Induction ([[thm-induction-principle]]).

[L2] Cardinality ([[def-finite-cardinality]]): $\lvert A\rvert$ is the unique natural with $A \approx \lvert A\rvert$; $\lvert n\rvert = n$; $\lvert A\rvert = 0$ exactly when $A = \varnothing$; and a bijection transports finiteness and cardinality.

[L3] The sum rule for two disjoint blocks: $\lvert S \cup T\rvert = \lvert S\rvert + \lvert T\rvert$ ([[thm-sum-rule]], clause 1).

[L4] The product rule: $\lvert X \times Y\rvert = \lvert X\rvert\cdot\lvert Y\rvert$ for finite $X$, $Y$ ([[thm-product-rule]], clause 1).

[L5] Powers ([[def-nat-power]]): $m^{0} = 1$ and $m^{\sigma(n)} = m^{n}\cdot m$.

[L6] Maps ([[def-injection-surjection-bijection]], [[def-equinumerous]]): a map with a two-sided inverse is a bijection.

[L7] A subset of a finite set is finite ([[thm-subset-of-a-finite-set]], clause 1); cancellation in $\mathbb{N}$: $x + 1 = y + 1$ implies $x = y$ ([[lem-nat-add-cancellative]]); and $\sigma(n) = n+1$, $n = \{\,i : i<n\,\}$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]).
```

### `def-nat-power`

```markdown
## Definition

Let $m \in \mathbb{N}$. By the recursion theorem ([[thm-recursion]]) applied to
the set $\mathbb{N}$, the starting element $1$ and the function
$f(x) = x \cdot m$ ([[def-nat-multiplication]]), there is a unique function
$\mathbb{N} \to \mathbb{N}$, written $n \mapsto m^{n}$, with

$$m^{0} = 1, \qquad m^{\sigma(n)} = m^{n} \cdot m \quad (n \in \mathbb{N}).$$

Both the base and the value are natural numbers, so $m^n \in \mathbb{N}$ for all
$m, n$. In particular $m^{1} = m^{0}\cdot m = m$ and $m^{2} = m \cdot m$.

**Why a new item is needed.** [[def-integer-power]] defines $a^{n}$ for a
**real** base $a$, so its value is a real number. The counts on this page,
$\lvert A^{B}\rvert$ and $\lvert\mathcal{P}(A)\rvert$ among them, are natural
numbers, and an identity between them has to be an identity in $\mathbb{N}$. The
two operations are related by clause (d) below and by nothing weaker.

**(a) $0^{0} = 1$ and $0^{n} = 0$ for $n \ge 1$.** The first is the base clause.
For the second, $0^{\sigma(n)} = 0^{n}\cdot 0 = 0$, the clause $x \cdot 0 = 0$
being definitional ([[def-nat-multiplication]]), and every $n \ge 1$ is a
successor.

**(b) $1^{n} = 1$ for every $n$.** Induction: $1^{0} = 1$, and
$1^{\sigma(n)} = 1^{n}\cdot 1 = 1^{n}$ ([[lem-nat-mult-identity]],
[[thm-induction-principle]]).

**(c) $m^{p+q} = m^{p}\,m^{q}$ and $(m p)^{q} = m^{q} p^{q}$.** Both by induction
on $q$, using associativity and commutativity of multiplication
([[lem-nat-mult-associative]], [[lem-nat-mult-commutative]]). For the first, at
$q = 0$ we have $m^{p+0} = m^{p} = m^{p}\cdot 1 = m^{p}m^{0}$, and
$m^{p+\sigma(q)} = m^{\sigma(p+q)} = m^{p+q}\cdot m = (m^{p}m^{q})\cdot m = m^{p}\,m^{\sigma(q)}$,
using $p + \sigma(q) = \sigma(p+q)$ ([[def-nat-addition]]). For the second, at
$q = 0$ both sides are $1$, and
$(mp)^{\sigma(q)} = (mp)^{q}(mp) = m^{q}p^{q}mp = m^{\sigma(q)}p^{\sigma(q)}$.

**(d) The bridge into $\mathbb{R}$.** With $\iota : \mathbb{N} \to \mathbb{R}$
the canonical natural ([[def-canonical-natural]]) and $x^{n}$ the integer power
of [[def-integer-power]],

$$\iota\big(m^{n}\big) = \iota(m)^{n} \qquad (m, n \in \mathbb{N}).$$

Induction on $n$: at $n = 0$ both sides are $1$, since $\iota(1) = 1$; and
$\iota(m^{\sigma(n)}) = \iota(m^{n}\cdot m) = \iota(m^{n})\,\iota(m) = \iota(m)^{n}\iota(m) = \iota(m)^{\sigma(n)}$,
the second equality being the multiplicativity of $\iota$ (clause 0 of
[[lem-nat-finite-sum-laws-and-the-canonical-embedding]]) and the last the
recursion clause of [[def-integer-power]].

**(e) $m^{n}$ is a constant product.** $m^{n} = \prod_{k<n} m$, the
$\mathbb{N}$-valued product of the constant list
([[def-nat-finite-sum-and-product]]). Induction: at $n = 0$ both sides are $1$,
and $\prod_{k<\sigma(n)} m = \big(\prod_{k<n} m\big)\cdot m = m^{n}\cdot m = m^{\sigma(n)}$.

## Remarks

- **$0^{0} = 1$, $0! = 1$ and the empty product are one convention, not three.**
  The value $0^{0} = 1$ here is the base clause of the recursion above; by clause
  (e) it is the empty product of [[def-nat-finite-sum-and-product]]; and
  [[def-integer-power]] adopts $a^{0} = 1$ for **every** real $a$, $0$ included,
  so clause (d) is consistent at $m = n = 0$. The reasons for the convention are
  set out in [[def-integer-power]] and are not repeated here.

- **The laws are the same laws.** Clause (c) is the $\mathbb{N}$-valued form of
  clause 1 of [[lem-power-laws]], which states $a^{m+n} = a^m a^n$,
  $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$ for a base in a field. Only the two
  identities actually used on this page are proved above; the third is available
  in $\mathbb{R}$ through clause (d) whenever it is wanted.

- **The exponent stays a natural number.** Following the convention of
  [[def-finite-sum]], the identification of a natural with its canonical natural
  is deliberately *not* made in an exponent: in $m^n$ and in $\iota(m)^n$ the
  exponent $n$ is a natural number, never a real.
```

### `lem-pigeonhole`

```markdown
## Statement

Let $\mathbb{N}$ be the von Neumann naturals, with $0 = \varnothing$ and
$\sigma(n) = n \cup \{n\}$ ([[def-natural-numbers]]), and let $<$ be the order of
[[def-nat-order]], so that $m < n \iff m \in n$ and
$n = \{\, m \in \mathbb{N} : m < n \,\}$ ([[lem-nat-order-is-membership]]).
Write $\approx$ for equinumerosity ([[def-equinumerous]]). Then:

1. for every $n \in \mathbb{N}$ there is **no injection** $\sigma(n) \to n$;
2. if $m < n$ then there is no injection $n \to m$;
3. if $n \approx m$ with $n, m \in \mathbb{N}$, then $n = m$;
4. $\mathbb{N} \not\approx n$ for every $n \in \mathbb{N}$;
5. no natural number is equinumerous with a proper subset of itself: if
   $A \subseteq n$ and $n \approx A$, then $A = n$.

Claim 1 is the pigeonhole principle in its sharpest form, that $n + 1$ pigeons do
not fit injectively into $n$ holes; the other four are the consequences the
library actually quotes. Claim 3 says a finite set is equinumerous with exactly
one natural number, so "the number of elements" is well defined. Claim 4 says
$\mathbb{N}$ is infinite. Claim 5 says no natural number is Dedekind-infinite.

**Why this is proved here.** The next item on this page defines finiteness as
equinumerosity with a natural number, and the three size classes it introduces
are exhaustive by construction but mutually exclusive only because of claim 4.
Several later items also need claim 3 or claim 5. The principle is elementary and
belongs with the naturals, but it is about counting rather than about order, so
it is proved here, immediately before finiteness is defined, from induction and
the identification of the order with membership alone. Nothing below uses
ordinals, cardinals, or any later material.

## Facts & Assumptions

**Given:** $\mathbb{N}$ with $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$, and $\mathbb{N}$ closed under $\sigma$, since it is an inductive set ([[def-natural-numbers]]); the order $m \le n \iff \exists k \in \mathbb{N}\ (m + k = n)$ and $m < n \iff (m \le n$ and $m \ne n)$ ([[def-nat-order]]); and $A \approx B$ meaning that a bijection $A \to B$ exists ([[def-equinumerous]]).

[L1] Induction: if $P(0)$ holds and $P(n)$ implies $P(\sigma(n))$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$ ([[thm-induction-principle]]).

[L2] On $\mathbb{N}$ the order is membership ([[lem-nat-order-is-membership]]): $\mathbb{N}$ is a transitive set, so every element of a natural number is again a natural number; $m < n \iff m \in n$; $m \le n \iff m \subseteq n$; and consequently $n = \{\, m \in \mathbb{N} : m < n \,\}$.

[L3] Every natural number is a transitive set and satisfies $n \notin n$ ([[lem-nat-transitive-irreflexive]]).

[L4] Trichotomy: for all $m, n \in \mathbb{N}$ exactly one of $m < n$, $m = n$, $n < m$ holds ([[lem-nat-trichotomy]]).

[L5] Every natural number $n \ne 0$ equals $\sigma(m)$ for some $m \in \mathbb{N}$ ([[lem-nat-nonzero-is-successor]]).

[L6] Maps ([[def-injection-surjection-bijection]]): $f$ is injective when $f(x) = f(y)$ forces $x = y$, and bijective when it is injective and surjective, so every bijection is an injection; a composite of two injections is an injection, a composite of two bijections is a bijection, and a bijection has a two sided inverse which is again a bijection. Two immediate consequences of the definition of injectivity are used below: the restriction of an injection to a subset of its domain is an injection, injectivity being a condition on pairs of points of the domain; and a map whose values all lie in a subset $C$ of its codomain may be read as a map into $C$, without affecting injectivity.
```

### `def-cardinal`

```markdown
## Definition

Write $X \approx Y$, and say $X$ and $Y$ are **equinumerous**, when there is a
bijection $X \to Y$.

An ordinal $\kappa$ ([[def-ordinal]]) is a **cardinal**, equivalently an
**initial ordinal**, when

$$\text{no } \alpha \in \kappa \text{ satisfies } \alpha \approx \kappa,$$

that is, $\kappa$ is not equinumerous with any strictly smaller ordinal.

**Cardinality, under the Axiom of Choice.** Assume the Axiom of Choice
([[def-axiom-of-choice]]) and let $X$ be a set. Then $X$ carries a well-order
([[thm-well-ordering-theorem]]), which has an order type $\alpha$
([[thm-mostowski-collapse]]) and in particular $\alpha \approx X$. Now
$\alpha^{+} = \alpha \cup \{\alpha\}$ is an ordinal ([[lem-ordinal-basics]],
claim (c)) whose elements are ordinals (claim (a)) and which contains $\alpha$,
so $C = \{\xi \in \alpha^{+} : \xi \approx X\}$ is a nonempty set of ordinals and
has an $\in$-least element $\kappa$ ([[lem-ordinal-trichotomy]]). This $\kappa$ is the
**cardinality** of $X$, written $|X|$; it is a cardinal, because
$\beta \in \kappa$ with $\beta \approx \kappa \approx X$ would lie in
$\alpha^{+}$ and contradict the minimality of $\kappa$.

**Well-definedness: $\kappa$ does not depend on the well-order or on $\alpha$.**
The recipe above instantiates a well-order of $X$ and an order type $\alpha$ for
it, and $X$ will in general carry many well-orders with many different order
types, so the value $\kappa$ has to be shown independent of both. It is, because
$\kappa$ is in fact the least ordinal equinumerous with $X$ **outright**, a
description in which neither the well-order nor $\alpha$ appears. Let $\beta$ be
any ordinal with $\beta \approx X$. By trichotomy for ordinals
([[lem-ordinal-trichotomy]]) exactly one of $\beta \in \alpha^{+}$,
$\beta = \alpha^{+}$, $\alpha^{+} \in \beta$ holds. In the first case
$\beta \in C$, so $\kappa \subseteq \beta$ by minimality of $\kappa$. In the
other two cases claim (f) of [[lem-ordinal-basics]] gives
$\alpha^{+} \subseteq \beta$, and $\alpha \in \alpha^{+}$ because
$\alpha^{+} = \alpha \cup \{\alpha\}$, so $\alpha \in \beta$ and hence
$\alpha \subseteq \beta$ by claim (f) again; and $\alpha \in C$, so
$\kappa \subseteq \alpha$ by minimality, whence $\kappa \subseteq \beta$. In every case
$\kappa \subseteq \beta$, that is $\kappa \le \beta$. So $\kappa$ is the least
element of the collection of **all** ordinals equinumerous with $X$, and any two
runs of the recipe, from any two well-orders of $X$, return the same $\kappa$.

## Remarks

- **What the well-definedness argument does and does not need.** The obligation
  is that $|X|$ depend on $X$ alone, and it is discharged in the definition
  itself, from two lemmas that are genuine prerequisites of this item and
  therefore sit in `deps` rather than in `justified_by`: comparability and
  trichotomy of ordinals ([[lem-ordinal-trichotomy]]) and the elementary closure
  facts ([[lem-ordinal-basics]]). Neither mentions cardinals, so neither points
  forward, and no separate discharging lemma is needed. The bound $\alpha^{+}$ is
  a device for turning "the least ordinal equinumerous with $X$" into a
  Separation instance over a **set**; the argument above is what shows that the
  device does not change the answer.

- **The definition is choice-free; the cardinality assignment is not.** Being a
  cardinal is a property of an ordinal and needs no axiom beyond ZF. Attaching a
  cardinality to an arbitrary *set* is a different matter: a set that carries no
  well-order is equinumerous with no ordinal at all, so $|X|$ simply does not
  exist for it. Without the Axiom of Choice there is no ordinal-valued notion of
  size for arbitrary sets, and what survives is [[thm-hartogs]]: every set $A$
  has a smallest ordinal $\aleph(A)$ that does not inject into it.
- **Most ordinals are not cardinals.** The successor $\omega^{+} = \omega \cup \{\omega\}$
  is equinumerous with $\omega \in \omega^{+}$, by the explicit bijection sending
  $\omega$ to $0$ and each natural number $n$ to $\sigma(n)$, which is a
  bijection because $\sigma$ is injective and its image is exactly the nonzero
  natural numbers. So $\omega^{+}$ is an ordinal and not a cardinal, and the
  same shift applies to the successor of any ordinal containing $\omega$.
  Cardinals are sparse among ordinals, which is
  precisely why the least one equinumerous with a given set is a useful
  representative.
- **Which ordinals up to and including $\omega$ are cardinals.** Every natural
  number is a cardinal, and so is $\omega$. Both facts are counting facts rather
  than order facts, and both come from the pigeonhole principle
  ([[lem-pigeonhole]]), proved on the countability page. Every natural number is
  an ordinal, and so is $\omega$ ([[lem-omega-least-limit-ordinal]], claim (ii));
  and if $\alpha \in n$ with $n$ a natural number then $\alpha$ is itself a
  natural number, since $\mathbb{N}$ is a transitive set
  ([[lem-nat-order-is-membership]]), with $\alpha < n$ by claim (i) of
  [[lem-omega-least-limit-ordinal]].
  So if some $\alpha \in n$ had $\alpha \approx n$, claim 3 of the pigeonhole
  principle would force $\alpha = n$ and hence $n \in n$, which claim (b) of
  [[lem-ordinal-basics]] forbids; therefore $n$ is a cardinal. And if some
  $\alpha \in \omega$ had $\alpha \approx \omega$, then $\alpha$ would be a
  natural number equinumerous with $\mathbb{N} = \omega$, which claim 4 of the
  pigeonhole principle forbids; therefore $\omega$ is a cardinal. Nothing else on
  this page depends on either fact, and the definition above is stated so that it
  does not.
- **Notation.** The infinite cardinals are traditionally written
  $\aleph_0, \aleph_1, \dots$, with $\aleph_0 = \omega$. That last equation can
  now be stated outright rather than quoted: it says $\omega$ is the least
  ordinal equinumerous with $\omega$, which is precisely the assertion that
  $\omega$ is a cardinal, established in the previous remark from claim 4 of
  [[lem-pigeonhole]]. Nothing below rests on it. The notation
  $\aleph(A)$ for the Hartogs number of $A$ ([[thm-hartogs]]) comes from the
  same source and is deliberately close: under the Axiom of Choice
  $\aleph(A)$ is the successor cardinal of $|A|$.
- **Why initial ordinals rather than equivalence classes.** The natural
  definition of "cardinal" as the class of all sets equinumerous with a given
  one never yields a set, for the same reason as in [[thm-burali-forti]].
  Choosing the least ordinal in the class is von Neumann's fix, and it works
  exactly when the class contains an ordinal, which is exactly when the set can
  be well ordered.
```

### `lem-omega-least-limit-ordinal`

```markdown
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
```

### `thm-ordinal-arithmetic-agrees-on-omega`

```markdown
## Statement

Write $+$, $\cdot$ and $\alpha^{\beta}$ for the ordinal operations
([[def-ordinal-addition]], [[def-ordinal-multiplication]],
[[def-ordinal-exponentiation]]), and $+_{\mathbb{N}}$, $\cdot_{\mathbb{N}}$ for
the natural-number operations defined by Peano recursion
([[def-nat-addition]], [[def-nat-multiplication]]). Let
$m, n \in \mathbb{N} = \omega$. Then:

**(a) Closure.** $m + n$, $m \cdot n$ and $m^{n}$ all lie in $\omega$.

**(b) Agreement for $+$ and $\cdot$.** $m + n = m +_{\mathbb{N}} n$ and
$m \cdot n = m \cdot_{\mathbb{N}} n$.

**(c) Agreement of the orders.** For $m, n \in \omega$, $m \in n$ if and only if
$m < n$ in the additive order of [[def-nat-order]]. This is claim (i) of
[[lem-omega-least-limit-ordinal]] and is cited, not reproved.

**No agreement is claimed for exponentiation.** The dictionary drawn here is
with `construction-of-the-natural-numbers`, which defines addition and
multiplication and no exponentiation, and nothing among this page's declared
prerequisites supplies a natural-number power for the ordinal power to be
compared with. What clause (a) says about $m^{n}$ is only that the ordinal power
of two naturals is again a natural.

**This item is the dictionary between the two arithmetics on $\mathbb{N}$.**
Without it the library would carry two unrelated operations written with the
same symbol on the same set. **No choice principle is used.**

## Facts & Assumptions

**Given:** Natural numbers $m, n \in \mathbb{N} = \omega$ ([[def-natural-numbers]]).

[L1] $\mathbb{N} = \omega$ carries $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$ ([[def-natural-numbers]]), and $(\mathbb{N}, 0, \sigma)$ is the Peano system over which $+_{\mathbb{N}}$ and $\cdot_{\mathbb{N}}$ are defined ([[thm-omega-is-peano-system]]). For an ordinal $\nu$ the successor is $\nu^{+} = \nu \cup \{\nu\}$ ([[def-ordinal]]), so $\sigma$ and ${\cdot}^{+}$ are the same operation on $\omega$.

[L2] $m +_{\mathbb{N}} 0 = m$ and $m +_{\mathbb{N}} \sigma(n) = \sigma(m +_{\mathbb{N}} n)$ ([[def-nat-addition]]); $m \cdot_{\mathbb{N}} 0 = 0$ and $m \cdot_{\mathbb{N}} \sigma(n) = m \cdot_{\mathbb{N}} n +_{\mathbb{N}} m$ ([[def-nat-multiplication]]).

[L3] $\alpha + 0 = \alpha$ and $\alpha + \delta^{+} = (\alpha + \delta)^{+}$ ([[def-ordinal-addition]]); $\alpha \cdot 0 = 0$ and $\alpha \cdot \delta^{+} = \alpha \cdot \delta + \alpha$ ([[def-ordinal-multiplication]]); $\alpha^{0} = 1$ and $\alpha^{\delta^{+}} = \alpha^{\delta} \cdot \alpha$ ([[def-ordinal-exponentiation]]).

[L4] Every natural number is an ordinal, $\omega$ is a limit ordinal, and every ordinal in $\omega$ is $0$ or a successor ordinal; moreover $m \in n$ if and only if $m < n$ for $m, n \in \omega$ (claims (i), (ii), (iii), (iv) of [[lem-omega-least-limit-ordinal]], with the order of [[def-nat-order]]).

[L5] A limit ordinal is closed under successor ([[def-limit-ordinal]]), and every ordinal is exactly one of $0$, a successor or a limit; $1 = 0^{+}$ and $\mu^{+}$ is an ordinal ([[lem-ordinal-basics]]); trichotomy holds for ordinals ([[lem-ordinal-trichotomy]]).

[L6] Induction on $\mathbb{N}$: a subset of $\mathbb{N}$ containing $0$ and closed under $\sigma$ equals $\mathbb{N}$ ([[thm-induction-principle]]).
```

### `def-countable`

```markdown
## Definition

Recall that a natural number is a von Neumann natural
([[def-natural-numbers]]): $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$, so
that

$$n = \{\, m \in \mathbb{N} : m < n \,\} = \{0, 1, \dots, n-1\}$$

is itself the set of its predecessors. Here $<$ is the order of
[[def-nat-order]], which is defined additively, so the displayed identity is a
theorem and not a convention: it is [[lem-nat-order-is-membership]], proved
immediately above. Let $A$ be a set, and let $\approx$ be equinumerosity
([[def-equinumerous]]).

- $A$ is **finite** if $A \approx n$ for some $n \in \mathbb{N}$.
- $A$ is **countably infinite** if $A \approx \mathbb{N}$.
- $A$ is **at most countable** if it is finite or countably infinite.
- $A$ is **uncountable** if it is not at most countable.

## Remarks

- **Convention: in this library "countable" alone always means "at most
  countable"**, so a finite set is countable. This is the convention of Halmos
  and of Tao, and it is the one that makes the theorems on this page read
  cleanly: subsets, products and unions of countable sets are countable, with no
  finite/infinite case split in the statement. The competing convention, used by
  Rudin among others, reserves "countable" for "countably infinite" and says
  "at most countable" for the disjunction. Under that convention every statement
  below still holds after replacing "countable" with "at most countable", but
  several would become false as literally written. Where the distinction
  matters, the long forms "countably infinite" and "at most countable" are used
  in full, and "uncountable" always means "not at most countable", on which the
  two conventions agree.

- **The three classes are exhaustive by construction**: every set is finite,
  countably infinite, or uncountable, since "uncountable" is defined as the
  negation of the disjunction. That they are also mutually exclusive, that is,
  that no set is both finite and countably infinite, is a genuine theorem
  amounting to $\mathbb{N} \not\approx n$ for every $n \in \mathbb{N}$, and it is
  proved immediately above as claim 4 of [[lem-pigeonhole]]. So a countably
  infinite set is never finite, and "$A$ is infinite", meaning not finite, is
  implied by $A \approx \mathbb{N}$. The same lemma pins down finiteness itself:
  by its claim 3 a finite set is equinumerous with exactly one natural number, so
  the number of elements of a finite set is well defined, and by its claim 5 no
  finite set is equinumerous with a proper subset of itself.

- **What the exclusivity is and is not used for below.** Nothing on this page
  needs it in order to run: the infinitude of $\mathbb{Q}$, for instance, is
  obtained by exhibiting a bijection $\mathbb{Q} \approx \mathbb{N}$ directly
  ([[thm-rationals-countable]]) rather than by ruling out finiteness. It is used
  where the two notions of infinity are compared
  ([[fs-infinite-has-countable-subset-in-zf]]) and where the continuum hypothesis
  is instantiated at $\mathbb{N}$ ([[rem-continuum-hypothesis]]), both of which
  need $\mathbb{N}$ to be infinite as a fact rather than as a convention.

- **$0$ and the empty set.** $0 = \varnothing$, and $A \approx 0$ holds exactly
  when $A = \varnothing$, so the empty set is finite. This matters in the proofs
  below, where the empty case is always separated out: a surjection
  $\mathbb{N} \to A$ cannot exist when $A = \varnothing$, which is why
  [[lem-countable-iff-surjection-from-n]] assumes $A$ nonempty.

- **Countability is a property of a set alone**, not of a set with structure. In
  particular $\mathbb{Q}$ is countable while carrying a dense order, and
  $\mathbb{R}$ is uncountable; neither statement says anything on its own about
  the order or the arithmetic those sets carry.
```

### `def-natural-numbers`

```markdown
## Definition

The set of **natural numbers** is the **smallest inductive set**
([[def-inductive-set]]),

$$\mathbb{N} = \omega := \bigcap\,\{\, I : I \text{ is inductive} \,\},$$

which exists and is itself inductive by [[lem-omega-smallest-inductive]] (the
Axiom of Infinity supplies one inductive set to intersect within, and Separation
makes the intersection a set). On $\mathbb{N}$ we take

$$0 := \varnothing, \qquad \sigma(n) := n \cup \{n\},$$

the distinguished element and the successor function. Thus
$0 = \varnothing$, $1 = \{0\}$, $2 = \{0, 1\}$, $3 = \{0, 1, 2\}$, and in general
$n = \{0, 1, \dots, n-1\}$ is the set of its predecessors.

## Remarks

"Smallest" means $\omega \subseteq I$ for every inductive set $I$. This minimality
is exactly the **induction principle** ([[thm-induction-principle]]): a subset of
$\mathbb{N}$ that contains $0$ and is closed under $\sigma$ is itself inductive,
hence contains $\omega = \mathbb{N}$, hence equals $\mathbb{N}$.

With $0$ and $\sigma$ so defined, $(\mathbb{N}, 0, \sigma)$ satisfies the Peano
axioms ([[def-peano-system]], proved in [[thm-omega-is-peano-system]]), so it is a
**model** of the abstract natural numbers. By categoricity
([[thm-peano-categoricity]]) any other model is uniquely isomorphic to it, so the
particular set-theoretic encoding chosen here is immaterial to every arithmetic
and order property that follows: those are developed from the Peano axioms, not
from the sets themselves.
```

### `lem-nat-order-is-membership`

```markdown
## Statement

Let $\mathbb{N} = \omega$ be the von Neumann naturals, with $0 = \varnothing$ and
$\sigma(n) = n \cup \{n\}$ ([[def-natural-numbers]]), and let $\le$ and $<$ be
the order defined additively by $m \le n \iff \exists k \in \mathbb{N}\ (m + k = n)$
and $m < n \iff (m \le n$ and $m \ne n)$ ([[def-nat-order]]). Then $\mathbb{N}$ is
a **transitive set**: every element of a natural number is itself a natural
number. Moreover, for all $m, n \in \mathbb{N}$:

1. $m < n \iff m \in n$;
2. $m \le n \iff m \subseteq n$;
3. $n < \sigma(n)$, and $m < \sigma(n) \iff m \le n$;
4. $0 \le n$, and $0 \in n$ whenever $n \ne 0$.

Consequently $n = \{\, m \in \mathbb{N} : m < n \,\}$ for every $n$: a natural
number is exactly the set of the naturals below it.

**Why this is proved here.** [[def-nat-order]] defines the order additively and
records the identification with membership only as an orienting remark, without
proof. The countability arguments on this page use that identification as a
working fact, so it is established here, from the additive order and induction
alone. Nothing below uses ordinals or any later material.

## Facts & Assumptions

**Given:** $\mathbb{N} = \omega$ with $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$ ([[def-natural-numbers]]); $m \le n \iff \exists k \in \mathbb{N}\ (m + k = n)$ and $m < n \iff (m \le n \text{ and } m \ne n)$ ([[def-nat-order]]). Note that $<$ is irreflexive by this definition alone, since $m < m$ would require $m \ne m$.

[L1] Induction: if $P(0)$ holds and $P(n)$ implies $P(\sigma(n))$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$ ([[thm-induction-principle]]).

[L2] Addition: $m + 0 = m$ and $m + \sigma(k) = \sigma(m + k)$ ([[def-nat-addition]]); and $0 + n = n$ for every $n$ ([[lem-nat-add-identity]]).

[L3] $\le$ is a linear order on $\mathbb{N}$: reflexive, antisymmetric, transitive and total ([[thm-nat-linear-order]]); and exactly one of $m < n$, $m = n$, $n < m$ holds, so the failure of $m \le n$ is exactly $n < m$ ([[lem-nat-trichotomy]]).

[L4] Discreteness: $m < n \iff \sigma(m) \le n$ ([[lem-nat-discrete]]).

[L5] Every natural number is a transitive set and satisfies $n \notin n$ ([[lem-nat-transitive-irreflexive]]).

[L6] $n \ne \sigma(n)$ for every $n \in \mathbb{N}$ ([[lem-nat-successor-neq-self]]).
```

### `lem-nat-nonzero-is-successor`

```markdown
## Statement

For every $n \in \mathbb{N}$ with $n \neq 0$, there exists $m \in \mathbb{N}$ with $n = \sigma(m)$. Equivalently, every natural number is either $0$ or a successor.

## Facts & Assumptions

**Given:** $\mathbb{N}$ with distinguished element $0$ and successor $\sigma$. Let $S = \{n \in \mathbb{N} : n = 0 \text{ or } \exists m \in \mathbb{N}\ (n = \sigma(m))\}$.

[L1] The induction principle ([[thm-induction-principle]]).
```

### `thm-omega-is-peano-system`

```markdown
## Statement

The triple $(\mathbb{N}, 0, \sigma) = (\omega, \varnothing, {\cdot}^{+})$ satisfies the three Peano axioms ([[def-peano-system]]): (P1) $\sigma(n) \neq 0$ for all $n$; (P2) $\sigma$ is injective; (P3) induction. Hence a Peano system exists.

## Facts & Assumptions

**Given:** $\mathbb{N} = \omega$, $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$ ([[def-natural-numbers]]).

[L1] Induction principle ([[thm-induction-principle]]).

[L2] Every natural number is transitive and satisfies $n \notin n$ ([[lem-nat-transitive-irreflexive]]).
```

### `lem-ordinal-basics`

```markdown
## Statement

Let $\alpha$ and $\beta$ be ordinals ([[def-ordinal]]). Then:

**(a)** every element of $\alpha$ is an ordinal;

**(b)** $\alpha \notin \alpha$;

**(c)** $\alpha^{+} = \alpha \cup \{\alpha\}$ is an ordinal;

**(d)** if $A$ is a **nonempty** set of ordinals then $\bigcap A$ is an ordinal;

**(e)** if $A$ is any set of ordinals then $\bigcup A$ is an ordinal;

**(f)** $\alpha \subseteq \beta$ if and only if $\alpha \in \beta$ or
$\alpha = \beta$;

**(g)** any two ordinals are comparable under inclusion: $\alpha \subseteq \beta$
or $\beta \subseteq \alpha$.

Everything here is a theorem of ZF and uses no choice principle.

## Facts & Assumptions

**Given:** Ordinals $\alpha$, $\beta$ and, where stated, a set $A$ all of whose members are ordinals. Claim (g) is not in the usual list of basic facts, but claim (e) needs it, so it is proved here rather than deferred; the trichotomy statement is then read off from it on the next item of this page.

[A1] An ordinal is a transitive set on which $\in$ is a strict well-order: irreflexive, transitive as a relation, trichotomous, and with a least element in every nonempty subset ([[def-ordinal]]).

[L1] The restriction of a strict well-order to a subset is again a strict well-order, since totality and least elements are inherited by subsets ([[def-well-order]]).
```

### `lem-ordinal-trichotomy`

```markdown
## Statement

For ordinals $\alpha$ and $\beta$ ([[def-ordinal]]), **exactly one** of

$$\alpha \in \beta, \qquad \alpha = \beta, \qquad \beta \in \alpha$$

holds. Moreover every nonempty **set** $A$ of ordinals has an $\in$-least
element, and consequently $A$ ordered by
$\alpha \le \beta :\iff \alpha \subseteq \beta$ is a well-order
([[def-well-order]]) whose strict part is membership.

So the ordinals are linearly ordered by $\in$, every set of them is well
ordered, and [[thm-transfinite-induction]] is available on any such set. No
choice principle is used.

## Facts & Assumptions

**Given:** Ordinals $\alpha$, $\beta$, and a nonempty set $A$ whose members are all ordinals.

[A1] An ordinal is a transitive set on which $\in$ is a strict well-order ([[def-ordinal]]).

[L1] Every element of an ordinal is an ordinal; $\alpha \notin \alpha$; $\alpha \subseteq \beta$ if and only if $\alpha \in \beta$ or $\alpha = \beta$; and any two ordinals are comparable under inclusion ([[lem-ordinal-basics]]).

[L2] A partial order is a reflexive, antisymmetric and transitive relation; a total order is a partial order any two of whose elements are comparable; and the strict part of $\le$ is $x < y :\iff (x \le y$ and $x \ne y)$ ([[def-partial-order]]).

[L3] A well-order is a total order in which every nonempty subset has a least element ([[def-well-order]]).

[L4] Transfinite induction holds on every well-order ([[thm-transfinite-induction]]).
```

### `def-limit-ordinal`

```markdown
## Definition

Let $\alpha$ be an ordinal ([[def-ordinal]]).

- $\alpha$ is a **successor ordinal** when $\alpha = \beta^{+} = \beta \cup \{\beta\}$
  for some ordinal $\beta$, which is then an ordinal by [[lem-ordinal-basics]];
- $\alpha$ is a **limit ordinal** when $\alpha \ne 0$ and $\alpha$ is not a
  successor ordinal.

Every ordinal is therefore exactly one of: $0$, a successor ordinal, or a limit
ordinal. The three cases are the three clauses of a definition or a proof by
transfinite recursion or induction over the ordinals.

## Remarks

- **The predecessor of a successor is unique.** If $\alpha = \beta^{+}$ then
  $\beta \in \alpha$ and every $\xi \in \alpha$ satisfies $\xi \le \beta$, so
  $\beta$ is the largest element of $\alpha$ and is determined by $\alpha$. In
  particular $\beta^{+} = \gamma^{+}$ forces $\beta = \gamma$.
- **Union characterisation.** For a nonzero ordinal $\alpha$: $\alpha$ is a limit
  ordinal if and only if $\alpha = \bigcup \alpha$, and $\alpha$ is a successor
  if and only if $\bigcup \alpha \in \alpha$, in which case
  $\alpha = (\bigcup \alpha)^{+}$. For the successor case,
  $\bigcup(\beta \cup \{\beta\}) = (\bigcup \beta) \cup \beta = \beta$, because
  $\bigcup \beta \subseteq \beta$ by transitivity. For the limit case,
  $\bigcup \alpha \subseteq \alpha$ always holds by transitivity, and
  conversely, given $\xi \in \alpha$, the ordinal $\xi^{+}$ satisfies
  $\xi^{+} \in \alpha$: by [[lem-ordinal-trichotomy]] the alternatives are
  $\xi^{+} = \alpha$, excluded because $\alpha$ is not a successor, and
  $\alpha \in \xi^{+}$, which gives $\alpha \in \xi$ or $\alpha = \xi$ and hence
  $\alpha \in \alpha$ using $\xi \in \alpha$ and transitivity, excluded by
  [[lem-ordinal-basics]]; so $\xi \in \xi^{+} \in \alpha$ puts
  $\xi \in \bigcup \alpha$. The hypothesis $\alpha \ne 0$ cannot be dropped,
  since $\bigcup 0 = 0$.
- **Closure under successor.** The previous paragraph says exactly that a nonzero
  ordinal is a limit if and only if it is closed under the successor operation.
  That is the form in which limit ordinals are recognised in practice.
- $0$ is not a limit ordinal here. Some texts include it, so that "limit
  ordinal" means "$\alpha = \bigcup \alpha$" outright. The convention adopted is
  the more widely used one, and it is the one that makes "$0$, successor, limit"
  a genuine three way split.
- The least limit ordinal is $\omega$ ([[lem-omega-least-limit-ordinal]]), so the
  distinction is invisible below $\omega$: every natural number is either $0$ or
  a successor. That is precisely why ordinary induction on $\mathbb{N}$ needs
  only a base case and a successor step, while induction over the ordinals needs
  a limit clause as well.
```

### `def-ordinal`

```markdown
## Definition

A set $\alpha$ is an **ordinal** when both of the following hold.

1. $\alpha$ is a **transitive set**: every element of $\alpha$ is also a subset
   of $\alpha$, that is $x \in \alpha \Rightarrow x \subseteq \alpha$.
2. The membership relation restricted to $\alpha$, namely
   $\{(x, y) \in \alpha \times \alpha : x \in y\}$, is a **strict well-order**
   of $\alpha$ ([[def-well-order]]): it is irreflexive, transitive as a
   relation, trichotomous on $\alpha$, and every nonempty subset of $\alpha$ has
   an $\in$-least element.

Ordinals are written with lowercase Greek letters, and for ordinals we set

$$\alpha < \beta :\iff \alpha \in \beta, \qquad \alpha \le \beta :\iff (\alpha \in \beta \text{ or } \alpha = \beta).$$

Write $0 := \emptyset$, which is an ordinal because both clauses hold vacuously,
and write $\alpha^{+} := \alpha \cup \{\alpha\}$ for the **successor** of
$\alpha$.

## Remarks

- **Two different transitivities.** Clause 1 is about the *set* $\alpha$: it
  contains all members of its members. Clause 2 asks in part that the *relation*
  $\in$ be transitive on $\alpha$. If every element of $\alpha$ is itself a
  transitive set then the relation $\in$ is transitive on $\alpha$; the converse
  holds *given clause 1*, and fails without it. For
  $\alpha = \{\{\{\emptyset\}\}\}$ the relation
  $\{(x, y) \in \alpha \times \alpha : x \in y\}$ is empty, hence vacuously
  transitive, yet the sole element $\{\{\emptyset\}\}$ of $\alpha$ is not a
  transitive set, since $\{\emptyset\} \in \{\{\emptyset\}\}$ while
  $\emptyset \notin \{\{\emptyset\}\}$. Under clause 1 the two readings do
  coincide, because then every member of a member of $\alpha$ again lies in
  $\alpha$, where the relation has something to say. Neither clause implies the
  other, and both are needed.
- **Every ordinal is literally the set of all smaller ordinals.** By clause 1 and
  the notation above, $\alpha = \{\beta : \beta < \alpha\}$, so the ordinals
  carry their own order relation as membership. This is von Neumann's device,
  and it is what makes it unnecessary to define an order type as an equivalence
  class of well-orders: apart from the class of the empty well-order, which is the
  singleton $\{\varnothing\}$, such a class is a proper class rather than a set,
  whereas the representative chosen here is always a set.
- **The natural numbers are ordinals, and so is $\omega$.** Each natural number
  is a transitive set ([[lem-nat-transitive-irreflexive]]), and on $\mathbb{N}$
  membership coincides with the usual strict order, so each natural number and
  $\mathbb{N} = \omega$ itself ([[def-natural-numbers]]) satisfy both clauses.
  Both facts are proved in [[lem-omega-least-limit-ordinal]], where they are
  needed; they are recorded here because they are the intended picture.
- **The Axiom of Foundation is not used.** Some treatments define an ordinal as a
  transitive set *linearly* ordered by $\in$, which is equivalent to the
  definition above only in the presence of Foundation, since Foundation is what
  supplies the least element. This library does not assume Foundation anywhere,
  so the least element property is written into the definition instead.
- The definition is absolute in a strong sense: whether a set is an ordinal
  depends only on its members and the membership relation among them, with no
  reference to any ambient construction. That is why ordinals can be used to
  index constructions in any model of ZF without further hypotheses.
```

### `def-equinumerous`

```markdown
## Definition

Let $A$ and $B$ be sets ([[def-injection-surjection-bijection]] for the
terminology).

- $A$ and $B$ are **equinumerous**, written $A \approx B$, if there exists a
  bijection $f : A \to B$.
- $A$ is **dominated by** $B$, written $A \preceq B$, if there exists an
  injection $f : A \to B$.
- $A \prec B$ abbreviates: $A \preceq B$ and not $A \approx B$.

## Remarks

- **$\approx$ behaves like an equivalence relation.** It is reflexive
  ($\mathrm{id}_A$ is a bijection), symmetric (the inverse of a bijection is a
  bijection) and transitive (a composition of bijections is a bijection). The
  careful statement is that these three properties hold for all sets, and that
  $\approx$ restricted to any *set* of sets is an equivalence relation on that
  set. It is not a relation on "the set of all sets", which does not exist; the
  reflexivity, symmetry and transitivity statements are schemas about arbitrary
  sets, which is all any argument below uses.

- **$\preceq$ is reflexive and transitive**, for the same reasons, and
  $A \approx B$ implies both $A \preceq B$ and $B \preceq A$. The converse, that
  $A \preceq B$ and $B \preceq A$ together give $A \approx B$, is a theorem and
  not a triviality: it is [[thm-schroder-bernstein]], and it is proved without
  any use of choice.

- **Subsets.** $A \subseteq B$ implies $A \preceq B$, since the inclusion map is
  injective. The reverse fails badly for infinite sets: the successor map
  $\sigma$ is a bijection $\mathbb{N} \to \mathbb{N} \setminus \{0\}$, being
  injective and never zero ([[thm-omega-is-peano-system]]) and hitting every
  nonzero natural ([[lem-nat-nonzero-is-successor]]), so
  $\mathbb{N} \approx \mathbb{N} \setminus \{0\}$ and a proper subset can be
  equinumerous with the whole.

- $\approx$ is the library's substitute for "has the same number of elements",
  stated without introducing cardinal numbers. Everything on this page is phrased
  with $\approx$, $\preceq$ and $\prec$ alone, so no theory of cardinals is
  presupposed.
```

### `def-injection-surjection-bijection`

```markdown
## Definition

Let $A$ and $B$ be sets and let $f : A \to B$ be a function.

- $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all
  $x, y \in A$.
- $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$
  with $f(x) = b$; equivalently, the image $f[A] := \{ f(x) : x \in A \}$ equals
  $B$.
- $f$ is **bijective** if it is both injective and surjective.

For $S \subseteq A$ we write $f[S] = \{ f(x) : x \in S \}$ for the image of $S$,
and for $T \subseteq B$ we write $f^{-1}[T] = \{ x \in A : f(x) \in T \}$ for the
preimage of $T$.

## Remarks

- **Composition.** If $f : A \to B$ and $g : B \to C$ are both injective then so
  is $g \circ f$, since $g(f(x)) = g(f(y))$ forces $f(x) = f(y)$ and then
  $x = y$; if both are surjective then so is $g \circ f$, since any $c \in C$ is
  $g(b)$ for some $b \in B$ and that $b$ is $f(a)$ for some $a \in A$. Hence a
  composition of bijections is a bijection. These one-line verifications are used
  silently throughout the library.

- **Inverses.** $f : A \to B$ is bijective exactly when there is a function
  $f^{-1} : B \to A$ with $f^{-1}(f(x)) = x$ for all $x \in A$ and
  $f(f^{-1}(b)) = b$ for all $b \in B$; that two-sided inverse is unique, and it
  is itself a bijection. Injectivity alone gives a bijection from $A$ onto the
  image $f[A]$, and hence an inverse defined on $f[A]$ only. No choice principle
  is involved: the value $f^{-1}(b)$ is the *unique* $x$ with $f(x) = b$, so it
  is determined rather than selected.

- **What this item does and does not do.** Functions, ordered pairs, Cartesian
  products, images and preimages are ambient ZFC vocabulary in this library, on
  the same footing as "subset" and "union": a function $A \to B$ is a set of
  ordered pairs, single valued and total on $A$. This item only fixes the three
  adjectives and the notation used for them. Nothing here is proved, and nothing
  here is assumed beyond the set-theoretic background already in use.
```

