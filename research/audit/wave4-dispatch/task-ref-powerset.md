# Adversarial proof reading — `thm-cardinal-power-set-and-cantor`

## FOCUS

Step 2.2 writes kappa = |kappa| and concludes kappa is less than or equal to |P(kappa)|. Decide whether the fact kappa = |kappa| for a cardinal kappa is licensed by the facts as stated, in particular by [L3], and whether it is TRUE. Then check step 1.1's characteristic-function bijection, step 2.1's general clause for an arbitrary set A, step 3.1's appeal to trichotomy, and every Remark, including the claim that for infinite kappa any base mu with 2 <= mu <= 2^kappa gives the same value.

## THE ITEM UNDER REVIEW, in full, exactly as it stands on disk

```markdown
---
id: thm-cardinal-power-set-and-cantor
kind: theorem
title: "Assuming the Axiom of Choice, $2^{\\kappa} = \\lvert \\mathcal{P}(\\kappa) \\rvert$, and Cantor's theorem in cardinal form: $\\kappa < 2^{\\kappa}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cardinal-arithmetic, thm-cantor-powerset, def-equinumerous, lem-cardinality-of-a-well-orderable-set, lem-cardinal-operations-are-well-defined, def-injection-surjection-bijection, lem-cardinal-arithmetic-basic-laws, def-cardinal, def-axiom-of-choice, thm-well-ordering-theorem, lem-ordinal-trichotomy]
justified_by: []
aliases: []
landmark: true
short: "$\\kappa < 2^{\\kappa} = \\lvert\\mathcal{P}(\\kappa)\\rvert$"
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
    - title: "P. Koellner, Set Theory: The Independence Phenomenon, Ch. 3"
      url: "https://people.math.harvard.edu/~wboney/fall16/settheory.pdf"
    - title: "Cantor's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_theorem"
    - title: "Cardinal number — cardinal arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cardinal_number#Cardinal_arithmetic"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]), so that every set has a
cardinality ([[thm-well-ordering-theorem]],
[[lem-cardinality-of-a-well-orderable-set]]). Let $\kappa$ be a cardinal
([[def-cardinal]]) and read $2 = \{0,1\}$ as a cardinal. Then:

**(a)** $2^{\kappa} = \lvert \mathcal{P}(\kappa) \rvert$
([[def-cardinal-arithmetic]]), and more generally
$2^{\lvert A \rvert} = \lvert \mathcal{P}(A) \rvert$ for every set $A$;

**(b)** $\kappa < 2^{\kappa}$.

Clause (b) is [[thm-cantor-powerset]] transcribed into cardinal arithmetic. The
underlying combinatorial fact — that there is no surjection $A \to \mathcal{P}(A)$
— is a theorem of ZF and needs no choice at all; what the Axiom of Choice buys
here is only the right to write $\lvert \mathcal{P}(A) \rvert$ and $2^{\kappa}$
as cardinals in the first place.

## Facts & Assumptions

**Given:** The Axiom of Choice, a cardinal $\kappa$, and a set $A$.

[L1] $\kappa^{\lambda} = \lvert {}^{\lambda}\kappa \rvert$, where ${}^{\lambda}\kappa$ is the set of functions $\lambda \to \kappa$ ([[def-cardinal-arithmetic]]).

[L2] There is no surjection $A \to \mathcal{P}(A)$, and $A \prec \mathcal{P}(A)$, that is $A \preceq \mathcal{P}(A)$ and $A \not\approx \mathcal{P}(A)$ ([[thm-cantor-powerset]], [[def-equinumerous]]).

[L3] For a well-orderable $X$, $X \approx \lvert X \rvert$, the value is a cardinal, and equinumerous sets receive the same one ([[lem-cardinality-of-a-well-orderable-set]]).

[L4] $A \approx B$ implies $\mathcal{P}(A) \approx \mathcal{P}(B)$ (claim (b) of [[lem-cardinal-operations-are-well-defined]]).

[L5] For cardinals, $\kappa \le \lambda$ if and only if $\kappa \preceq \lambda$; and $A \preceq B$ with both well-orderable gives $\lvert A \rvert \le \lvert B \rvert$ (claim (a) of [[lem-cardinal-arithmetic-basic-laws]]).

[L6] Assuming the Axiom of Choice every set is well-orderable, hence has a cardinality ([[def-axiom-of-choice]], [[thm-well-ordering-theorem]]).

[L7] Ordinals satisfy trichotomy, and a map with a two-sided inverse is a bijection ([[lem-ordinal-trichotomy]], [[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 The map $\chi : \mathcal{P}(\kappa) \to {}^{\kappa}2$ sending $S$ to its characteristic function, $\chi_S(\xi) = 1$ for $\xi \in S$ and $\chi_S(\xi) = 0$ otherwise, has the two-sided inverse $h \mapsto h^{-1}[\{1\}]$, so it is a bijection and $\mathcal{P}(\kappa) \approx {}^{\kappa}2$. [L7]

1.2 By [L2], $\kappa \preceq \mathcal{P}(\kappa)$ and $\kappa \not\approx \mathcal{P}(\kappa)$. [L2]

2.1 Claim (a): by [L6] both $\mathcal{P}(\kappa)$ and ${}^{\kappa}2$ have cardinalities, equal by step 1.1 and [L3], so $\lvert \mathcal{P}(\kappa)\rvert = \lvert {}^{\kappa}2\rvert = 2^{\kappa}$ by [L1]; and for an arbitrary set $A$, $A \approx \lvert A \rvert$ by [L3] gives $\mathcal{P}(A) \approx \mathcal{P}(\lvert A \rvert)$ by [L4], hence $\lvert \mathcal{P}(A)\rvert = 2^{\lvert A \rvert}$. [step 1.1, L1, L3, L4, L6]

2.2 By [L5] applied to step 1.2, $\kappa = \lvert \kappa \rvert \le \lvert \mathcal{P}(\kappa)\rvert$; and $\kappa \ne \lvert \mathcal{P}(\kappa)\rvert$, since otherwise $\kappa \approx \lvert \mathcal{P}(\kappa)\rvert \approx \mathcal{P}(\kappa)$ by [L3], contradicting step 1.2. [step 1.2, L3, L5, L6]

3.1 Therefore $\kappa < \lvert \mathcal{P}(\kappa)\rvert = 2^{\kappa}$ by trichotomy, which with step 2.1 is claim (b). [step 2.1, step 2.2, L7] ∎

## Remarks

**Why $2$ and not some other base.** The characteristic function of a subset takes two values, so the power set is the function space with base $2$; that is the whole content of step 1.1, and it is why $2^{\kappa}$ rather than $\mathcal{P}$ is the object cardinal arithmetic manipulates. For infinite $\kappa$, any base $\mu$ with $2 \le \mu$ gives the same value once $\mu \le 2^{\kappa}$, by monotonicity, the second exponent law and [[thm-hessenberg]], and the companion page computes one such case; for finite $\kappa$ the bases genuinely differ, $3^{2} = 9 \ne 4 = 2^{2}$.

**No fixed point.** Clause (b) holds for **every** cardinal, so no cardinal satisfies $2^{\kappa} = \kappa$ and the hierarchy of cardinals never terminates. The corresponding statement one level up — that $\alpha \mapsto \aleph_\alpha$ has no fixed point — is **false**, and the companion page exhibits one; the two operations behave quite differently, and it is the power operation, not the successor operation, that is unboundedly expansive.

**Where the Axiom of Choice is and is not spent.** [[thm-cantor-powerset]] is choice free, and so is step 1.1. The hypothesis is used only to know that a set has a cardinality: at $\mathcal{P}(\kappa)$ and at ${}^{\kappa}2$ for clause (b), and again at $A$ and $\mathcal{P}(A)$ in the general form of clause (a). In ZF alone, $\mathcal{P}(\omega)$ may fail to be well-orderable, and then $2^{\aleph_0}$ is not an ordinal and the inequality of clause (b) has no cardinal to compare $\kappa$ with — while the underlying statement "there is no surjection $\omega \to \mathcal{P}(\omega)$" remains a theorem.
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

### `thm-cantor-powerset`

```markdown
## Statement

Let $A$ be a set and $\mathcal{P}(A)$ its power set. Then there is **no
surjection** $A \to \mathcal{P}(A)$ ([[def-injection-surjection-bijection]]).

Consequently $A \not\approx \mathcal{P}(A)$ while $A \preceq \mathcal{P}(A)$,
that is, $A \prec \mathcal{P}(A)$ ([[def-equinumerous]]): the power set is
strictly larger, for every set whatsoever.

This is Cantor's diagonal argument in its non-circular form. It uses nothing
about $\mathbb{R}$, nothing about decimal or binary expansions, and no choice
principle: only the Power Set axiom, to form $\mathcal{P}(A)$, and Separation, to
form the diagonal set.

## Facts & Assumptions

**Given:** A set $A$, its power set $\mathcal{P}(A) = \{\, X : X \subseteq A \,\}$, which is a set by the Power Set axiom, and the Separation axiom scheme, which turns any property of elements of $A$ into a subset of $A$.

[L1] Injection, surjection and bijection; a bijection is in particular a surjection ([[def-injection-surjection-bijection]]).

[L2] $A \approx B$ means a bijection $A \to B$ exists, $A \preceq B$ means an injection $A \to B$ exists, and $A \prec B$ means $A \preceq B$ and $A \not\approx B$ ([[def-equinumerous]]).
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

### `lem-cardinal-operations-are-well-defined`

```markdown
## Statement

For sets $A$ and $B$ write

$$A \sqcup B := (\{0\} \times A) \cup (\{1\} \times B), \qquad {}^{B}A := \{\, h : h \text{ is a function } B \to A \,\},$$

so $A \sqcup B$ is the **disjoint union**, made disjoint by tagging, and
${}^{B}A$ is the set of all functions from $B$ to $A$. Work in ZF. Then:

**(a) Representative independence.** If $A \approx A'$ and $B \approx B'$
([[def-equinumerous]]) then

$$A \sqcup B \approx A' \sqcup B', \qquad A \times B \approx A' \times B', \qquad {}^{B}A \approx {}^{B'}A'.$$

**(b) Power sets.** If $A \approx B$ then $\mathcal{P}(A) \approx \mathcal{P}(B)$.

**(c) Two operations are choice-free.** For ordinals $\alpha$ and $\beta$
([[def-ordinal]]) the sets $\alpha \sqcup \beta$ and $\alpha \times \beta$ carry
**explicitly defined** well-orders ([[def-well-order]]), so each is equinumerous
with an ordinal and each has a cardinality
$\lvert \alpha \sqcup \beta \rvert$, $\lvert \alpha \times \beta \rvert$
in ZF ([[lem-cardinality-of-a-well-orderable-set]]).

**(d) The third is not.** Nothing here well-orders ${}^{\beta}\alpha$, and no
argument on this page does. Assuming the Axiom of Choice
([[def-axiom-of-choice]]) every set is well-orderable
([[thm-well-ordering-theorem]]) and ${}^{\beta}\alpha$ has a cardinality like any
other set; that is where cardinal exponentiation gets its hypothesis.

## Facts & Assumptions

**Given:** Sets $A, A', B, B'$ and ordinals $\alpha, \beta$, in ZF. No choice principle is assumed except where the Axiom of Choice is named.

[L1] A set is well-orderable if and only if it is equinumerous with an ordinal; it then has a least such ordinal $\lvert X \rvert$, which is a cardinal, and equinumerous sets receive the same one ([[lem-cardinality-of-a-well-orderable-set]], [[def-cardinal]]).

[L2] A well-order is a relation that is irreflexive, transitive, trichotomous, and such that every nonempty subset has a least element ([[def-well-order]]).

[L3] Every set of ordinals is well ordered by $\in$, and every nonempty set of ordinals has an $\in$-least element ([[lem-ordinal-trichotomy]]).

[L4] A composition of bijections is a bijection, the inverse of a bijection is a bijection, and a function with a two-sided inverse is a bijection ([[def-injection-surjection-bijection]]).

[L5] $\approx$ means that a bijection exists, and it is reflexive, symmetric and transitive ([[def-equinumerous]]).

[L6] Every element of an ordinal is an ordinal and $\alpha \notin \alpha$ ([[lem-ordinal-basics]], [[def-ordinal]]).

[L7] Assuming the Axiom of Choice, every set carries a well-order ([[def-axiom-of-choice]], [[thm-well-ordering-theorem]]).
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

### `def-axiom-of-choice`

```markdown
## Definition

The **Axiom of Choice** (AC) is the following statement.

> Every family of nonempty sets has a choice function
> ([[def-choice-function]]).

Written out: for every set $\mathcal{F}$ all of whose members are nonempty,
there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for
all $S \in \mathcal{F}$.

An equivalent formulation, immediate from the definition of the Cartesian
product, is that a product of nonempty sets is nonempty: if $X_i \ne \emptyset$
for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$.

## Remarks

- **This is an axiom, not a theorem, and it is deliberately not derived here.**
  **Assume ZF is consistent.** Then AC is independent of the remaining axioms of
  Zermelo–Fraenkel set theory: Gödel (1938) showed that ZF, if consistent, cannot
  refute it ([[rem-godel-constructible-universe]]), and Cohen (1963) showed that
  ZF, if consistent, cannot prove it ([[rem-cohen-forcing-ac-independent]]). The
  consistency hypothesis is not decoration and cannot be dropped: an inconsistent
  ZF proves everything, AC included, so both halves of the independence would
  fail. Nor can the hypothesis be discharged inside ZF. Both directions also
  require machinery (the constructible universe and forcing) that this library
  does not yet contain, so both are recorded with references rather than proved.
  [[fs-zorn-provable-in-zf]] is the corresponding warning and carries the same
  consistency assumption explicitly in its Given; [[rem-choice-strengths]]
  locates the weaker choice principles.
- Being an axiom, AC carries no well-definedness obligation, which is why this
  item has no `justified_by`.
- The case of a family listed by a natural number, which is the finite case once
  finiteness is defined, is a theorem of ZF and needs no axiom
  ([[lem-finite-choice]]). AC is exactly the extension of that theorem to
  arbitrary index sets, and the gap between the two is not a matter of degree:
  [[ex-russells-socks]] exhibits the difference concretely.
- "ZFC" abbreviates ZF together with AC. Everything on this page after
  [[lem-finite-choice]] that invokes AC is flagged as doing so, because later
  pages need to state honestly which of their theorems are choice-free; that
  bookkeeping is the purpose of [[rem-choice-strengths]].
```

### `thm-well-ordering-theorem`

```markdown
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Then **every set $X$ can
be well ordered**: there is a relation on $X$ making it a well-ordered set
([[def-well-order]]).

The Axiom of Choice is used only inside [[thm-zorn]], and nowhere else in the
argument below.

## Facts & Assumptions

**Given:** A set $X$, the axioms of ZF, and the Axiom of Choice. Write $(B, R) \preceq (B', R')$ for **end extension**: $B \subseteq B'$, the relation $R'$ restricted to $B$ is $R$, and $B$ is an initial segment of $(B', R')$.

[A1] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[L1] Zorn's lemma: a nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]]).

[L2] A partial order is reflexive, antisymmetric and transitive, and its strict part is $x < y$ meaning $x \le y$ with $x \ne y$ ([[def-partial-order]]).

[L3] A chain is a subset any two of whose elements are comparable, and the empty set is a chain ([[def-chain]]).

[L4] An upper bound of a subset is an element weakly above every member of it ([[def-upper-bound]]).

[L5] A maximal element has nothing strictly above it ([[def-maximal-element]]).

[L6] A well-order is given in two interchangeable presentations, and the two determine each other ([[def-well-order]]): **weakly**, as a total order $\le$ in which every nonempty subset has a least element; **strictly**, as a relation $<$ that is irreflexive, transitive and trichotomous and in which every nonempty subset $S$ has an element $\ell$ with no $s \in S$ satisfying $s < \ell$. **This proof uses the strict presentation throughout**, as does [[def-initial-segment]]; the end-extension order $\preceq$ on $P$ below is a separate relation and is weak, since Zorn's lemma is about partial orders.

[L7] An initial segment is a downward closed subset ([[def-initial-segment]]).
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

