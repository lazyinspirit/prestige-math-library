# Adversarial proof reading — `cor-cardinal-absorption`

## FOCUS

Step 1.2 asserts that (i,xi) -> (xi,i) is an injection from kappa disjoint-union kappa into kappa x kappa because its image lies in kappa x 2 and 2 is an element of omega which is a subset of kappa. A judge alleged that the step never establishes xi in kappa for lambda-tagged elements. Decide whether step 1.2 is correct as written, and whether every one of steps 1.1 to 3.1 is licensed by the facts it cites. Pay particular attention to whether the unit law and monotonicity uses in 1.4 and 3.1, and the lambda = 0 exception, are exactly what [L3] states.

## THE ITEM UNDER REVIEW, in full, exactly as it stands on disk

```markdown
---
id: cor-cardinal-absorption
kind: corollary
title: "Absorption: for cardinals $\\kappa, \\lambda$ with $\\kappa$ infinite and $\\lambda \\le \\kappa$, $\\kappa \\oplus \\lambda = \\kappa$, and $\\kappa \\otimes \\lambda = \\kappa$ when $\\lambda \\ne 0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-hessenberg, def-cardinal-arithmetic, lem-cardinal-arithmetic-basic-laws, lem-cardinality-of-a-well-orderable-set, thm-cardinal-arithmetic-agrees-with-finite-counting, def-cardinal, lem-ordinal-trichotomy, lem-ordinal-basics, lem-omega-least-limit-ordinal, def-equinumerous, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
short: "$\\kappa \\oplus \\lambda = \\kappa$, and $\\kappa \\otimes \\lambda = \\kappa$ for $\\lambda \\ne 0$"
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
    - title: "Cardinal number — cardinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number#Cardinal_arithmetic"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 3 (Cardinal numbers)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Statement

Let $\kappa$ be an infinite cardinal and $\lambda$ a cardinal with
$\lambda \le \kappa$ ([[def-cardinal]]). Then

$$\kappa \oplus \lambda = \kappa, \qquad \text{and} \qquad \kappa \otimes \lambda = \kappa \ \text{ whenever } \lambda \ne 0$$

([[def-cardinal-arithmetic]]). The exception at $\lambda = 0$ is not an artefact:
$\kappa \otimes 0 = 0$.

**This is a theorem of ZF**, inherited from [[thm-hessenberg]], which is
choice free. In particular the ordinary arithmetic of infinite cardinals collapses
completely for $\oplus$ and $\otimes$: below the level of exponentiation, the
larger argument simply swallows the smaller one.

## Facts & Assumptions

**Given:** An infinite cardinal $\kappa$ and a cardinal $\lambda \le \kappa$, in ZF.

[L1] $\kappa \otimes \kappa = \kappa$ for every infinite cardinal $\kappa$ ([[thm-hessenberg]]).

[L2] $\kappa \oplus \lambda = \lvert \kappa \sqcup \lambda\rvert$ and $\kappa \otimes \lambda = \lvert \kappa \times \lambda\rvert$, with $\kappa \sqcup \lambda = (\{0\} \times \kappa) \cup (\{1\} \times \lambda)$ ([[def-cardinal-arithmetic]]).

[L3] For cardinals, $\kappa \le \lambda$ iff $\kappa \preceq \lambda$; $A \preceq B$ with both well-orderable gives $\lvert A\rvert \le \lvert B\rvert$; the unit laws $\kappa \otimes 1 = \kappa$ and $\kappa \otimes 0 = 0$ hold; and $\oplus$, $\otimes$ are monotone in each argument (claims (a), (d), (e) of [[lem-cardinal-arithmetic-basic-laws]]).

[L4] For a well-orderable set $X$, $\lvert X\rvert$ is the least ordinal equinumerous with $X$; and $\lvert \alpha\rvert = \alpha$ exactly when $\alpha$ is a cardinal ([[lem-cardinality-of-a-well-orderable-set]]).

[L5] Every natural number is a cardinal and $\omega$ is a cardinal, so $0, 1, 2 \in \omega \subseteq \kappa$ ([[thm-cardinal-arithmetic-agrees-with-finite-counting]], [[lem-omega-least-limit-ordinal]]).

[L6] Ordinals are comparable, $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$, trichotomy holds, and $\alpha \subseteq \beta \subseteq \alpha$ forces $\alpha = \beta$ ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]]).

[L7] A subset inclusion is an injection and a bijection witnesses $\approx$ ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

## Proof

**Proof technique:** direct.

1.1 The map $\xi \mapsto (0,\xi)$ is an injection $\kappa \to \kappa \sqcup \lambda$, so $\kappa \le \kappa \oplus \lambda$ by [L2], [L3] and [L4]. [L2, L3, L4, L7]

1.2 The map $(i,\xi) \mapsto (\xi,i)$ is an injection $\kappa \sqcup \kappa \to \kappa \times \kappa$, since its image lies in $\kappa \times 2$ and $2 \in \omega \subseteq \kappa$ by [L5], and it is injective because both coordinates are recovered from the image. [L5, L7]

1.3 From $\lambda \le \kappa$ and monotonicity, $\kappa \oplus \lambda \le \kappa \oplus \kappa$ and $\kappa \otimes \lambda \le \kappa \otimes \kappa$. [L3]

1.4 If $\lambda \ne 0$ then $1 \le \lambda$ by [L6] and [L5], so $\kappa = \kappa \otimes 1 \le \kappa \otimes \lambda$ by the unit law and monotonicity in [L3]. [L3, L5, L6]

2.1 $\kappa \oplus \kappa \le \kappa$: step 1.2 with [L3] gives $\lvert \kappa \sqcup \kappa\rvert \le \lvert \kappa \times \kappa\rvert$, which by [L2] and [L1] is $\kappa \otimes \kappa = \kappa$. [step 1.2, L1, L2, L3]

3.1 Combining: $\kappa \le \kappa \oplus \lambda \le \kappa \oplus \kappa \le \kappa$ gives $\kappa \oplus \lambda = \kappa$ by [L6]; and for $\lambda \ne 0$, $\kappa \le \kappa \otimes \lambda \le \kappa \otimes \kappa = \kappa$ gives $\kappa \otimes \lambda = \kappa$, while $\kappa \otimes 0 = 0$ by [L3]. [step 1.1, step 1.3, step 1.4, step 2.1, L1, L3, L6] ∎

## Remarks

**What absorption costs.** Nothing beyond [[thm-hessenberg]]: the only extra input is the injection of step 1.2, which folds two copies of $\kappa$ into a rectangle of width $2$. So absorption is choice free wherever Hessenberg's theorem is, that is, for cardinals.

**Why the hypothesis is $\lambda \le \kappa$ and not $\lambda < \kappa$.** The case $\lambda = \kappa$ is the interesting one and is used constantly: $\kappa \oplus \kappa = \kappa$ and $\kappa \otimes \kappa = \kappa$. Stating the corollary with $\le$ avoids a separate appeal to Hessenberg's theorem at every later use.

**Absorption destroys cancellation.** From $\kappa \oplus \lambda = \kappa$ for every $\lambda \le \kappa$ it follows at once that $\oplus$ cannot be cancellative on infinite cardinals, and the companion false statement [[fs-cardinal-addition-is-cancellative]] records exactly that. The same collapse does **not** reach exponentiation: assuming the Axiom of Choice, [[thm-cardinal-power-set-and-cantor]] gives a strict increase at every cardinal.
```

## EVERY DEPENDENCY IT DECLARES — Statement/Definition text, verbatim from disk

Their own proofs are omitted; you are checking whether these statements license the
item above, not re-proving them.

### `thm-hessenberg`

```markdown
## Statement

Let $\kappa$ be an **infinite cardinal**, that is a cardinal
([[def-cardinal]]) with $\omega \le \kappa$. Then

$$\kappa \otimes \kappa = \kappa, \qquad \text{equivalently} \qquad \lvert \kappa \times \kappa \rvert = \kappa$$

([[def-cardinal-arithmetic]]).

**This is a theorem of ZF and uses no choice principle.** The well-order that
carries the proof is written down from the ordinal order on $\kappa$; nothing is
selected anywhere. That matters for this page: Hessenberg's theorem is exactly
the part of "an infinite set is the same size as its square" that survives
without choice.

## Facts & Assumptions

**Given:** An infinite cardinal $\kappa$, in ZF. No choice principle is assumed. For ordinals $\xi, \eta$ write $\max(\xi,\eta)$ for the $\subseteq$-larger of the two, which exists by comparability.

[L1] For a well-orderable $X$: $X \approx \lvert X \rvert$, the value is a cardinal, equinumerous sets receive the same one, $\lvert \alpha \rvert \le \alpha$, and $\lvert \alpha \rvert = \alpha$ exactly when $\alpha$ is a cardinal ([[lem-cardinality-of-a-well-orderable-set]]).

[L2] $\times$ respects $\approx$, and $\alpha \times \beta$ carries an explicit well-order for ordinals $\alpha, \beta$ ([[lem-cardinal-operations-are-well-defined]]).

[L3] For cardinals, $\kappa \le \lambda$ iff $\kappa \preceq \lambda$; and $A \preceq B$ with both well-orderable gives $\lvert A \rvert \le \lvert B \rvert$ (claim (a) of [[lem-cardinal-arithmetic-basic-laws]]).

[L4] $\omega$ is a cardinal, every natural number is a cardinal, every infinite cardinal is a limit ordinal, and for $m, n \in \omega$ the value $m \otimes n$ is again a natural number ([[thm-cardinal-arithmetic-agrees-with-finite-counting]], [[def-limit-ordinal]]).

[L5] $\mathbb{N} \times \mathbb{N} \approx \mathbb{N}$, that is $\omega \times \omega \approx \omega$ ([[thm-n-cross-n-countable]], [[def-countable]]).

[L6] Every well-order is order isomorphic to exactly one ordinal, its order type; an order isomorphism is a bijection and carries the initial segment below a point onto the initial segment below its image ([[thm-mostowski-collapse]], [[def-order-isomorphism]], [[def-initial-segment]]).

[L7] If $S \subseteq W$ for a well-order $(W,<)$ satisfies "$W_{<a} \subseteq S$ implies $a \in S$" for every $a \in W$, then $S = W$ ([[thm-transfinite-induction]]).

[L8] Ordinals: elements of ordinals are ordinals, $\alpha \notin \alpha$, $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$, trichotomy holds, every nonempty set of ordinals has an $\in$-least element, and every set of ordinals is well ordered by $\in$ ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]], [[def-ordinal]], [[def-well-order]]).

[L9] $\omega$ is the least limit ordinal and is an ordinal ([[lem-omega-least-limit-ordinal]]); a bijection witnesses $\approx$ and a subset inclusion is an injection ([[def-equinumerous]], [[def-injection-surjection-bijection]]).
```

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

### `lem-cardinal-arithmetic-basic-laws`

```markdown
## Statement

Let $\kappa$, $\lambda$, $\mu$ be cardinals ([[def-cardinal]]) and let
$\oplus$, $\otimes$, $\kappa^{\lambda}$ be as in [[def-cardinal-arithmetic]].
Clauses (a) to (e) are theorems of ZF; the clauses naming an exponential hold
whenever those exponentials are defined, in particular under the Axiom of Choice
([[def-axiom-of-choice]]).

**(a) Comparison.** $\kappa \le \lambda$ if and only if $\kappa \preceq \lambda$,
that is, if and only if there is an injection $\kappa \to \lambda$
([[def-equinumerous]]). More generally, if $A$ and $B$ are well-orderable and
$A \preceq B$ then $\lvert A \rvert \le \lvert B \rvert$.

**(b) Commutativity and associativity.**
$\kappa \oplus \lambda = \lambda \oplus \kappa$,
$\kappa \otimes \lambda = \lambda \otimes \kappa$,
$(\kappa \oplus \lambda) \oplus \mu = \kappa \oplus (\lambda \oplus \mu)$ and
$(\kappa \otimes \lambda) \otimes \mu = \kappa \otimes (\lambda \otimes \mu)$.

**(c) Distributivity.**
$\kappa \otimes (\lambda \oplus \mu) = (\kappa \otimes \lambda) \oplus (\kappa \otimes \mu)$.

**(d) Units.** $\kappa \oplus 0 = \kappa$, $\kappa \otimes 0 = 0$,
$\kappa \otimes 1 = \kappa$, and $\kappa^{0} = 1$, $\kappa^{1} = \kappa$,
$1^{\kappa} = 1$, together with $0^{\kappa} = 0$ for $\kappa \ne 0$. The four
exponential unit laws need no choice principle, because the function sets they
count are empty, a singleton, or a copy of $\kappa$.

**(e) Monotonicity.** If $\kappa \le \lambda$ then
$\kappa \oplus \mu \le \lambda \oplus \mu$ and
$\kappa \otimes \mu \le \lambda \otimes \mu$; and
$\kappa^{\mu} \le \lambda^{\mu}$, and $\mu^{\kappa} \le \mu^{\lambda}$ provided
$\mu \ne 0$.

**(f) The two exponent laws.**
$\kappa^{\lambda \oplus \mu} = \kappa^{\lambda} \otimes \kappa^{\mu}$ and
$(\kappa^{\lambda})^{\mu} = \kappa^{\lambda \otimes \mu}$.

**Each clause is an equality or an inequality of cardinals**, not merely of sizes: each side is
an ordinal, and the claim is that the two ordinals are the same.

## Facts & Assumptions

**Given:** Cardinals $\kappa, \lambda, \mu$, in ZF; the Axiom of Choice is assumed only where an exponential is written and is not one of the four unit cases.

[L1] For a well-orderable $X$, $\lvert X \rvert$ is the least ordinal equinumerous with $X$, it satisfies $X \approx \lvert X \rvert$, it is a cardinal, equinumerous sets receive the same one, and $\lvert \alpha \rvert = \alpha$ exactly when $\alpha$ is a cardinal ([[lem-cardinality-of-a-well-orderable-set]]).

[L2] $\sqcup$, $\times$ and ${}^{B}A$ respect $\approx$ in both arguments ([[lem-cardinal-operations-are-well-defined]], claim (a)).

[L3] $\kappa \oplus \lambda = \lvert \kappa \sqcup \lambda \rvert$, $\kappa \otimes \lambda = \lvert \kappa \times \lambda \rvert$, $\kappa^{\lambda} = \lvert {}^{\lambda}\kappa \rvert$, and these may be computed from any equinumerous representatives ([[def-cardinal-arithmetic]]).

[L4] If $A \preceq B$ and $B \preceq A$ then $A \approx B$ ([[thm-schroder-bernstein]]).

[L5] Ordinals are comparable, exactly one of $\alpha \in \beta$, $\alpha = \beta$, $\beta \in \alpha$ holds, $\alpha \subseteq \beta$ if and only if $\alpha \in \beta$ or $\alpha = \beta$, and $\alpha \notin \alpha$ ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]]).

[L6] A composition of bijections is a bijection, a map with a two-sided inverse is a bijection, and a subset inclusion is an injection ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L7] An ordinal $\kappa$ is a cardinal when no $\alpha \in \kappa$ has $\alpha \approx \kappa$ ([[def-cardinal]]).

[L8] Assuming the Axiom of Choice every set is well-orderable, so every exponential written below is defined ([[def-axiom-of-choice]], [[thm-well-ordering-theorem]]).
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

### `thm-cardinal-arithmetic-agrees-with-finite-counting`

```markdown
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

