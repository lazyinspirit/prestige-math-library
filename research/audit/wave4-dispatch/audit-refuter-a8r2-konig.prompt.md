# Wave 4 audit — A8 round 2 adversarial proof reading

You are a **read-only adversarial reader** (DeepSeek V4 Pro, max reasoning)
dispatched by the wave-4 audit Alpha of the prestige-math-library published-page
retro-audit (`AUDIT-WORKFLOW.md` step A8). You return **evidence, never edits**,
and you never propose to apply anything yourself. Alpha alone adjudicates.

**You have no tools and no filesystem.** Everything you are to read is in this
prompt: the item under review in full, and the Statement or Definition text of
every dependency it declares, quoted verbatim from disk. Do not speculate about
text you were not given — if a decision genuinely turns on something absent,
say so explicitly and name what is missing rather than assuming its content.

**Why you specifically.** The audit-side lineup is otherwise entirely Claude:
the Beta that wrote these repairs, the Alpha adjudicating them, and the
certifier reading them are all Claude models, and much of this legacy corpus
was Claude-authored too. **You are the only cross-family reader in the loop.**
A shared blind spot among the Claude readers will not show up as disagreement
among them; it can only show up as you finding something they did not. Do not
defer to the fact that a published item has already passed several readings —
this wave has repeatedly confirmed fatal defects in text that had.

## Your standard — the judges' standard

Read every proof step and every cited dependency as someone trying to REFUTE the
item. These are already-published pages of a legacy corpus; the point of this
audit is to find what is actually wrong in them, not to confirm they read well.

Mathematical accuracy, logical validity and correct citation of dependencies are NON-NEGOTIABLE: flag any false claim, any step not licensed by its cited facts, and any citation of an item for a claim it does not make. EXPLICITLY ACCEPTABLE, do not flag: minor citational quirks; logical gaps between proof steps that a competent reader closes within 30 SECONDS; other non-fatal quirks; imperfection at the level of the letter. Library conventions that are NOT defects: sequences are functions on N and N CONTAINS 0, so indices start at 0; a natural number is a von Neumann natural (a set), so 1/k is written 1/iota(k) with iota the canonical natural of the field; the successor of a von Neumann natural n is sigma(n) = n union {n}, so n = {0,1,...,n-1} and sigma(n) = {0,1,...,n} has exactly n+1 elements; sigma(n) is NOT {0,...,n-1}, and an off-by-one objection that rests on reading it that way is a misreading of the library, not a defect; items cite by [L#] into a Facts and Assumptions block; a definition may discharge its own well-definedness inline or via justified_by. Also check the TITLE against what is actually proved: a title asserting more than the proof gives is a defect even when the Statement is correct. CITATION VOICE AND FIDELITY: every [F#], [A#], and [L#] fact must state the cited Definition or Statement itself, exactly when practical or in a concise version preserving its domain, quantifiers, hypotheses, conclusion, and direction.

## Triage — the standing rule, binding

- **Non-negotiable, always report:** mathematical accuracy, logical validity,
  correct citation.
- **Explicitly acceptable, spend no effort and do NOT report:** minor citational
  quirks; logical gaps a competent reader closes **within 30 seconds**; other
  non-fatal quirks; imperfection at the level of the letter; prose style; page
  summary length; missing provenance URLs.

**Before alleging a cited dependency is too weak, quote the dependency text you
were given and show exactly what it fails to supply.** A refuter that asserts a
dependency is insufficient without quoting it is producing noise, and this
library's dominant real defect class — a citation of an item for a claim it does
not make — can only be established by that quotation.

**Read the Remarks with a numbered step's suspicion.** Measured across this
audit, Remark and Facts-block prose, not numbered steps, is where nearly every
confirmed fatal defect in this corpus has been found. A Remark that asserts how
some *other* item in the library uses this one is a frequent falsehood: you
cannot check those from here, so say so rather than passing them.

## Output — the only thing you return

Plain markdown. For each finding, one block:

```
### FINDING 1, 2, 3, ... — FATAL or NONFATAL — location: title / Statement / [L#] / step X.Y / Remark
CLAIM AS WRITTEN: "<verbatim quote of the offending text>"
WHY IT FAILS: <the concrete false claim, unlicensed inference, missing
hypothesis, or inaccurate citation — with the verbatim dependency text that
does or does not license it>
WHAT WOULD FIX IT: <the smallest correction you can name, or "not obvious">
```

If, having genuinely tried to refute it, you find nothing fatal, say so plainly
and list what you checked. Finish with one line: `N fatal, M nonfatal`.

A confident empty reading is worse than useless here. Either name a concrete
defect with its quotation, or state clearly that you could not find one.


---

# This dispatch

# Adversarial proof reading — `thm-konig`

## FOCUS

Check step 5.1 and step 6.1 in particular: does the proof establish that lambda_i minus B_i is nonempty for EVERY i before applying [L5] to choose g? Check step 1.1's injectivity argument, including the case i = i' with xi different from xi'. Then check every remaining step, the Remarks, and whether the title and Statement claim exactly what the proof delivers.

## THE ITEM UNDER REVIEW, in full, exactly as it stands on disk

```markdown
---
id: thm-konig
kind: theorem
title: "König's theorem: assuming the Axiom of Choice, if $\\kappa_i < \\lambda_i$ for every $i \\in I$ then $\\sum_{i \\in I} \\kappa_i < \\prod_{i \\in I} \\lambda_i$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-infinite-cardinal-sum-and-product, def-cardinal-arithmetic, lem-cardinal-arithmetic-basic-laws, lem-cardinality-of-a-well-orderable-set, def-axiom-of-choice, def-choice-function, thm-well-ordering-theorem, def-cardinal, def-equinumerous, def-injection-surjection-bijection, lem-ordinal-trichotomy, lem-ordinal-basics, def-well-order]
justified_by: []
aliases: [thm-koenig, thm-konig-inequality]
landmark: true
short: "$\\sum_i \\kappa_i < \\prod_i \\lambda_i$"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-29
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-29
sources:
  scraped: []
  references:
    - title: "K. Kearnes, Cardinal Arithmetic, König’s Lemma"
      url: "https://math.colorado.edu/~kearnes/Teaching/Courses/F25/cardinals_arithmetic.pdf"
    - title: "König's theorem (set theory) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/K%C3%B6nig%27s_theorem_(set_theory)"
    - title: "T. Jech, Set Theory, 3rd millennium ed., Ch. 5 (Cardinal arithmetic)"
      url: "https://link.springer.com/book/10.1007/3-540-44761-X"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]). Let $I$ be a set and
let $(\kappa_i)_{i \in I}$ and $(\lambda_i)_{i \in I}$ be families of cardinals
([[def-cardinal]]) with

$$\kappa_i < \lambda_i \qquad \text{for every } i \in I .$$

Then

$$\sum_{i \in I} \kappa_i \;<\; \prod_{i \in I} \lambda_i$$

([[def-infinite-cardinal-sum-and-product]]).

**The hypothesis is named in the statement, not only in the facts**, and it is
spent twice: once in the definition of the two sides, which are cardinalities of
sets ZF does not well-order, and once in the diagonal step of the proof, which
selects an omitted value in each coordinate at the same time.

## Facts & Assumptions

**Given:** The Axiom of Choice; a set $I$; families of cardinals $(\kappa_i)_{i \in I}$, $(\lambda_i)_{i \in I}$ with $\kappa_i < \lambda_i$ for every $i$. Write $S = \bigcup_{i \in I}(\{i\} \times \kappa_i)$ and $P$ for the set of functions $f$ on $I$ with $f(i) \in \lambda_i$ for every $i$.

[L1] $\sum_{i \in I}\kappa_i = \lvert S\rvert$ and $\prod_{i \in I}\lambda_i = \lvert P\rvert$, both defined because the Axiom of Choice well-orders every set ([[def-infinite-cardinal-sum-and-product]], [[thm-well-ordering-theorem]], [[def-cardinal-arithmetic]]).

[L2] For cardinals $\kappa \le \lambda$ iff $\kappa \preceq \lambda$, and $A \preceq B$ with both well-orderable gives $\lvert A\rvert \le \lvert B\rvert$ (claim (a) of [[lem-cardinal-arithmetic-basic-laws]]).

[L3] $X \approx \lvert X\rvert$ for well-orderable $X$, and equinumerous sets receive the same cardinality ([[lem-cardinality-of-a-well-orderable-set]], [[def-equinumerous]]).

[L4] Ordinals satisfy trichotomy, $\alpha \subseteq \beta$ iff $\alpha \in \beta$ or $\alpha = \beta$, $\alpha \notin \alpha$, and every nonempty set of ordinals has an $\in$-least element ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-well-order]]).

[L5] A product of nonempty sets is nonempty: if $X_i \ne \varnothing$ for every $i \in I$ then some function $g$ on $I$ has $g(i) \in X_i$ for all $i$ ([[def-axiom-of-choice]], [[def-choice-function]]).

[L6] A composition of injections is an injection, and a bijection is in particular a surjection ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** contradiction.

1.1 The map $h$ sending $(i,\xi) \in S$ to the function on $I$ taking the value $\xi$ at $i$ and the value $\kappa_j$ at each $j \ne i$ takes values in $P$, because $\xi \in \kappa_i \subseteq \lambda_i$ and $\kappa_j \in \lambda_j$ by [L4]; and it is injective, since $h(i,\xi) = h(i',\xi')$ with $i \ne i'$ would give $\xi = \kappa_i$ at the coordinate $i$, impossible as $\xi \in \kappa_i$ and $\kappa_i \notin \kappa_i$, so $i = i'$ and then $\xi = \xi'$. [L4, L6]

2.1 Hence $S \preceq P$ and $\sum_{i \in I}\kappa_i \le \prod_{i \in I}\lambda_i$ by [L1] and [L2]. [step 1.1, L1, L2]

3.1 Suppose, for contradiction, that $\sum_{i \in I}\kappa_i < \prod_{i \in I}\lambda_i$ fails; then trichotomy and step 2.1 force $\sum_{i \in I}\kappa_i = \prod_{i \in I}\lambda_i$. [step 2.1, L4, assume-contra]

4.1 Then $S \approx \lvert S\rvert = \lvert P\rvert \approx P$ by [L1] and [L3], so there is a bijection $F : S \to P$, in particular a surjection. [step 3.1, L1, L3, L6]

5.1 For each $i \in I$ put $B_i = \{\, F(i,\xi)(i) : \xi \in \kappa_i \,\} \subseteq \lambda_i$; the map sending $b \in B_i$ to the $\in$-least $\xi \in \kappa_i$ with $F(i,\xi)(i) = b$ is an injection $B_i \to \kappa_i$ by [L4], so $\lvert B_i\rvert \le \kappa_i < \lambda_i$ by [L2], and therefore $B_i \ne \lambda_i$ and $\lambda_i \setminus B_i \ne \varnothing$. [step 4.1, L2, L3, L4]

6.1 By [L5] there is a function $g$ on $I$ with $g(i) \in \lambda_i \setminus B_i$ for every $i$, and $g \in P$ since $\lambda_i \setminus B_i \subseteq \lambda_i$. [step 5.1, L5]

7.1 But $g \ne F(i,\xi)$ for every $(i,\xi) \in S$, because the two differ at the coordinate $i$, where $F(i,\xi)(i) \in B_i$ and $g(i) \notin B_i$; so $g$ is outside the image of $F$ and $F$ is not surjective, contradicting step 4.1. Therefore the assumption of step 3.1 is false and $\sum_{i \in I}\kappa_i < \prod_{i \in I}\lambda_i$. [step 4.1, step 5.1, step 6.1, discharge-contradiction] ∎

## Remarks

**The set form of the theorem implies the Axiom of Choice outright, in one line.** Suppose it were true that for families of **sets** with $A_i \prec B_i$ for every $i$ one had $\bigsqcup_i A_i \prec \prod_i B_i$. Given nonempty sets $B_i$, take $A_i = \varnothing$: then $A_i \preceq B_i$ and $A_i \not\approx B_i$, so $A_i \prec B_i$; the conclusion gives $\varnothing \prec \prod_i B_i$, hence $\prod_i B_i \not\approx \varnothing$ and $\prod_i B_i \ne \varnothing$, which is exactly the product formulation of [[def-axiom-of-choice]]. So the hypothesis of this theorem is not an artefact of the proof, and the version stated above, for **cardinals**, is the one that can be written down at all without presupposing choice somewhere.

**Where the diagonal is.** Step 5.1 says that the $i$-th block of $S$, which has only $\kappa_i$ members, cannot exhaust the $\lambda_i$ possible values in the $i$-th coordinate. Step 6.1 assembles the omitted values into a single element of the product. This is Cantor's diagonal argument with an arbitrary index set in place of $\mathbb{N}$, and with the two-element set replaced by $\lambda_i$; the one thing it needs beyond Cantor's version is the simultaneous selection, which is where the Axiom of Choice is spent the second time.

**What it is used for on this page.** With $\lambda_i$ constant the product becomes an exponential, and the resulting inequality bounds the cofinality of a power from below; that consequence is [[cor-cofinality-of-a-cardinal-power]], and it is the only ZFC constraint on $2^{\aleph_0}$ established here.
```

## EVERY DEPENDENCY IT DECLARES — Statement/Definition text, verbatim from disk

Their own proofs are omitted; you are checking whether these statements license the
item above, not re-proving them.

### `def-infinite-cardinal-sum-and-product`

```markdown
## Definition

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]). Let $I$ be a set and
$(\kappa_i)_{i \in I}$ a family of cardinals ([[def-cardinal]]), that is, a
function on $I$ whose value at $i$ is the cardinal $\kappa_i$. Put

$$\textstyle\bigsqcup_{i \in I} \kappa_i \;:=\; \bigcup_{i \in I} \big(\{i\} \times \kappa_i\big), \qquad \prod^{\mathrm{set}}_{i \in I} \kappa_i \;:=\; \{\, f : f \text{ is a function on } I \text{ with } f(i) \in \kappa_i \text{ for all } i \in I \,\},$$

both sets by Replacement, Union and Power Set. The **sum** and **product** of the
family are their cardinalities:

$$\sum_{i \in I} \kappa_i \;:=\; \Big\lvert \textstyle\bigsqcup_{i \in I} \kappa_i \Big\rvert, \qquad \prod_{i \in I} \kappa_i \;:=\; \Big\lvert \prod^{\mathrm{set}}_{i \in I} \kappa_i \Big\rvert .$$

**Why the hypothesis is in the definition.** Both right-hand sides are
cardinalities of sets that ZF does not well-order. Under the Axiom of Choice
every set is well-orderable ([[thm-well-ordering-theorem]]) and both values exist
([[lem-cardinality-of-a-well-orderable-set]]). Nothing else is being assumed: the
two sets themselves are constructed in ZF, and the family
$(\kappa_i)_{i \in I}$ is a *function*, so no representative is selected.

**The finite cases are the operations already defined.** Take $I = 2 = \{0,1\}$.
Then $\bigsqcup_{i \in 2} \kappa_i = (\{0\} \times \kappa_0) \cup (\{1\} \times \kappa_1)
= \kappa_0 \sqcup \kappa_1$ literally, so
$\sum_{i \in 2} \kappa_i = \kappa_0 \oplus \kappa_1$
([[def-cardinal-arithmetic]]); and $f \mapsto (f(0), f(1))$ is a bijection from
$\prod^{\mathrm{set}}_{i \in 2} \kappa_i$ onto $\kappa_0 \times \kappa_1$, with
inverse $(a,b) \mapsto \{(0,a),(1,b)\}$, so
$\prod_{i \in 2} \kappa_i = \kappa_0 \otimes \kappa_1$ by
[[lem-cardinality-of-a-well-orderable-set]].

**A constant family recovers $\otimes$ and exponentiation.** If $\kappa_i = \kappa$
for every $i \in I$ and $\lambda = \lvert I \rvert$, then
$\bigsqcup_{i \in I} \kappa = I \times \kappa$ and
$\prod^{\mathrm{set}}_{i \in I} \kappa = {}^{I}\kappa$, so

$$\sum_{i \in I} \kappa = \lambda \otimes \kappa, \qquad \prod_{i \in I} \kappa = \kappa^{\lambda},$$

by the transport clause of [[def-cardinal-arithmetic]] together with
[[lem-cardinal-operations-are-well-defined]] and
[[def-injection-surjection-bijection]].

## Remarks

**The product set is the set of choice functions.** An element of
$\prod^{\mathrm{set}}_{i \in I} \kappa_i$ picks one element of $\kappa_i$ for
every $i$, which is exactly a choice function for the family
([[def-choice-function]]). So the assertion "the product set is nonempty when
every $\kappa_i$ is nonempty" **is** the Axiom of Choice for that family, in the
formulation recorded in [[def-axiom-of-choice]], and it is not an incidental
consequence of the definition.

**Why the sum tags its blocks.** Without the tag $\{i\} \times \kappa_i$ the
union $\bigcup_i \kappa_i$ would be a union of ordinals, which is the
*supremum* of the family and not its sum: with $\kappa_i = 1$ for every
$i \in \omega$ the untagged union is $1$, while the sum is $\aleph_0$, and the
difference is exactly that the tagged blocks are disjoint. The tagging is the
same device
[[def-cardinal-arithmetic]] uses for $\oplus$, applied to an arbitrary index set.

**What is not defined here.** Nothing is said about $\sum$ and $\prod$ over an
index set for which the family has no cardinal values, and nothing is said in ZF
alone. The theorem this definition exists for,
[[thm-konig]], carries the same hypothesis for the same reason.
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

### `def-choice-function`

```markdown
## Definition

Let $\mathcal{F}$ be a family of sets, every member of which is nonempty. A
**choice function** for $\mathcal{F}$ is a function
$$g : \mathcal{F} \to \bigcup \mathcal{F} \qquad \text{such that} \qquad g(S) \in S \ \text{ for every } S \in \mathcal{F}.$$

Given a set $X$, a **choice function on $X$** means a choice function for the
family $\mathcal{P}(X) \setminus \{\emptyset\}$ of nonempty subsets of $X$.

## Remarks

- The requirement is only that $g$ pick *some* element of each member. Nothing
  requires the choices to be coherent, definable, or computable, and this is
  exactly where the difficulty lies: for a single nonempty set $S$ the existence
  of an element to pick is immediate, and for a family presented as the values
  of a function on a natural number the picks can be made one after another
  ([[lem-finite-choice]]). What is not available in ZF is
  a *simultaneous* choice across an arbitrary family.
- A choice function often exists for a concrete family with no appeal to any
  axiom, because the family carries extra structure that names a canonical
  element. Every nonempty set of natural numbers has a least element, so
  $S \mapsto \min S$ is an explicit choice function on $\mathbb{N}$
  ([[ex-canonical-choice-on-naturals]]). The contrast with families that admit no
  such rule is the content of [[ex-russells-socks]].
- Members of $\mathcal{F}$ must be nonempty: no function can select an element of
  $\emptyset$. The family $\mathcal{F}$ itself is allowed to be empty, and the
  empty function is then a choice function for it.
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

### `def-well-order`

```markdown
## Definition

Let $W$ be a set. A **well-order** on $W$ is a total order $\le$ on $W$
([[def-partial-order]]) with the property that

$$\text{every nonempty } S \subseteq W \text{ has a least element, i.e. an } \ell \in S \text{ with } \ell \le s \text{ for all } s \in S.$$

The pair $(W, \le)$ is then a **well-ordered set**, and $W$ is **well-ordered**
by $\le$.

A least element of $S$ is unique when it exists: two of them are below each
other, hence equal by antisymmetry ([[def-partial-order]]). We may therefore
write $\min S$ for it.

**Strict form.** Everything on this page is more convenient in terms of the
associated strict order $x < y :\iff (x \le y \text{ and } x \ne y)$
([[def-partial-order]]). Spelled out strictly, a well-order on $W$ is a relation
$<$ that is

- **irreflexive**: $x < x$ holds for no $x \in W$;
- **transitive**: $x < y$ and $y < z$ imply $x < z$;
- **trichotomous**: for all $x, y \in W$ exactly one of $x < y$, $x = y$,
  $y < x$ holds;
- and such that every nonempty $S \subseteq W$ has an element $\ell$ with no
  $s \in S$ satisfying $s < \ell$.

The two presentations determine each other by $x \le y \iff (x < y$ or
$x = y)$, and we write $(W, <)$ or $(W, \le)$ as convenient.

## Remarks

- **Totality is not an extra hypothesis.** If $\le$ is a partial order on $W$ in
  which every nonempty subset has a least element, then $\le$ is already total:
  apply the hypothesis to the two element subset $\{x, y\}$, whose least element
  is below the other. Totality is nevertheless stated, because in the strict
  presentation trichotomy has to be written down explicitly.
- A well-order is total, so **every subset of a well-ordered set is a chain**
  ([[def-chain]]), and $W$ itself is one. Chains are therefore not the
  interesting invariant here; the least element property is.
- **The model case is $(\mathbb{N}, \le)$**, which is a linear order
  ([[thm-nat-linear-order]]) in which every nonempty subset has a least element
  ([[thm-well-ordering-principle]]). Ordinals, defined later on this page, are
  the exact generalisation of that picture.
- $(\mathbb{Z}, \le)$ and $(\mathbb{R}, \le)$ are total orders but not
  well-orders: $\mathbb{Z}$ has no least element at all, and the bounded set
  $\{x \in \mathbb{R} : 0 < x < 1\}$ has none either. Being bounded below does
  not help, which is exactly why well-ordering is a strong condition.
- The empty set carries exactly one well-order, the empty relation, vacuously.
  Every one element set carries exactly one.
- A well-order admits no infinite strictly decreasing sequence
  $x_0 > x_1 > x_2 > \cdots$, since the set of its terms would have no least
  element. That direction is a theorem of ZF and is used freely here. The
  **converse**, that a total order with no infinite strictly decreasing sequence
  is a well-order, is a different matter: the natural argument takes a nonempty
  $S$ with no least element and assembles a decreasing sequence inside it by
  choosing each term below the previous one, which is exactly the principle of
  **dependent choice** (DC), described in [[def-countable-choice]]. DC is not a
  theorem of ZF **unless ZF is inconsistent**; that much is recorded in the
  ledger ([[rem-choice-ledger]]), which lists DC among the principles not
  provable in ZF. Granted the consistency of ZF, the converse above is likewise
  unprovable in ZF, and this is a *separate* statement that the ledger does not
  record. The witness for it that the library does record is Cohen's first model
  ([[rem-cohen-first-model]]), which contains an infinite set
  $A \subseteq \mathbb{R}$ with no countably infinite subset. Order $A$ by the
  order it inherits from $\mathbb{R}$: a strictly decreasing sequence in $A$
  would be an injection $\mathbb{N} \to A$, so there is none, while $A$ is not
  well ordered, since a well-ordered infinite set is order isomorphic to an
  ordinal at least $\omega$ ([[thm-mostowski-collapse]]) and so does have a
  countably infinite subset. Both statements are external metamathematical
  results, established by forcing and permutation models; they are quoted from
  the references below, and neither is proved anywhere in this library, which
  contains neither technique. Nothing on this page depends on any of it: the
  library takes the least element formulation as the definition and never uses
  the descending sequence characterisation, precisely so that no result here
  inherits that cost.
```

