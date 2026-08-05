# Wave 4 audit — A8 round 3 adversarial proof reading

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

# The item under review, in full: `def-cofinality`

A **published** `definition` item on the page
`foundations/cardinal-arithmetic-and-cofinality`. Declared `deps`:
`lem-cofinality-is-well-defined`, `def-cofinal-subset-of-an-ordinal`,
`def-ordinal`, `def-cardinal`, `def-cardinal-arithmetic`,
`def-aleph-and-beth-hierarchies`. `justified_by`: `thm-cofinality-basics`.

Read the **Definition section and all four Remarks**. The Remarks are prose, but
in this library a false mathematical assertion in a Remark counts exactly as a
false assertion anywhere else. In particular, check every claim the Remarks make
about WHICH ordinals or WHICH cardinals satisfy a stated condition, against the
dependency and neighbour texts quoted below.

```markdown
## Definition

Let $\alpha$ be an ordinal ([[def-ordinal]]). The **cofinality** of $\alpha$ is

$$\operatorname{cf}(\alpha) \;:=\; \text{the least ordinal } \beta \text{ for which some } f : \beta \to \alpha \text{ has cofinal range},$$

cofinal range meaning that $f[\beta]$ is a cofinal subset of $\alpha$
([[def-cofinal-subset-of-an-ordinal]]): every $\zeta \in \alpha$ satisfies
$\zeta \le f(\xi)$ for some $\xi \in \beta$. That such a least ordinal exists, and
that a witnessing map of that length may be taken strictly increasing, is
[[lem-cofinality-is-well-defined]], and both are theorems of ZF. So
$\operatorname{cf}$ is defined at every ordinal, without any choice principle.

**Regular and singular.** An **infinite cardinal** $\kappa$ — a cardinal
([[def-cardinal]]) with $\omega \subseteq \kappa$ ([[def-cardinal-arithmetic]]),
for instance any $\aleph_\alpha$ ([[def-aleph-and-beth-hierarchies]]) — is

- **regular** when $\operatorname{cf}(\kappa) = \kappa$;
- **singular** when $\operatorname{cf}(\kappa) \ne \kappa$.

The two cases are exhaustive by definition, and by
[[thm-cofinality-basics]] singular means exactly
$\operatorname{cf}(\kappa) < \kappa$, since $\operatorname{cf}(\alpha) \le \alpha$
always holds.

## Remarks

**Why regularity is defined for cardinals and not for ordinals.** The definition
of $\operatorname{cf}$ applies to every ordinal, and it must, because the
construction quantifies over maps into $\alpha$ of every length. But
$\operatorname{cf}(\alpha) = \alpha$ is an uninteresting condition on a general
ordinal: it fails at $\omega + 1$ and at $\omega \cdot 2$ for reasons that have
nothing to do with size, and it holds only at $0$, at $1$, and at those ordinals
that are already infinite cardinals. Calling an ordinal regular would therefore
say nothing new, which is why the words are attached to cardinals here.

**What a singular cardinal is, in one sentence.** A cardinal that is reachable
from below by fewer than $\kappa$ steps: there is a strictly increasing family of
ordinals below $\kappa$, indexed by an ordinal strictly shorter than $\kappa$,
whose supremum is $\kappa$. That is exactly the failure of regularity, and
[[thm-regularity-of-the-alephs]] exhibits a cardinal for which it happens.

**Why $\operatorname{cf}(\kappa)$ being a regular cardinal is a theorem and not
part of the definition.** Regularity is *defined through* $\operatorname{cf}$, so
building "$\operatorname{cf}(\kappa)$ is regular" into the definition would make
the definition refer to itself. The statement is true, and it is
[[thm-cofinality-basics]]; it is recorded here as the item that discharges the
naming obligation of this definition, and nothing above depends on it.

**Only one notion of "cofinal" exists in this library.**
[[def-cofinal-subset-of-an-ordinal]] introduces cofinal subsets, because the
boundedness theorem for $\omega_1$ needs them, and deliberately introduces
neither the cofinality function nor the regular/singular vocabulary. Both are
introduced here, and the definition above is written in exactly that item's
terms, so no second notion is created.
```

---

# Dependency and neighbour texts, verbatim from disk

`thm-regularity-of-the-alephs` is not a declared dependency; it is a theorem on
the SAME page, cited by name inside the second Remark of the item above. It is
quoted because the item points at it.


### `lem-cofinality-is-well-defined`
**Title:** For every ordinal $\alpha$ there is a least ordinal $\beta$ admitting a map $\beta \to \alpha$ with cofinal range, and that map may always be taken strictly increasing

**Statement:**
Let $\alpha$ be an ordinal ([[def-ordinal]]). Say that a function
$f : \beta \to \alpha$ is **cofinal** when its range
$f[\beta] = \{f(\xi) : \xi \in \beta\}$ is a cofinal subset of $\alpha$
([[def-cofinal-subset-of-an-ordinal]]), that is, when for every $\zeta \in \alpha$
there is $\xi \in \beta$ with $\zeta \le f(\xi)$. Then, in ZF:

**(a)** there is a **least** ordinal $\beta$ for which some cofinal
$f : \beta \to \alpha$ exists;

**(b)** for that least $\beta$ a cofinal $g : \beta \to \alpha$ can be taken
**strictly increasing**: $\eta \in \xi \in \beta$ implies $g(\eta) \in g(\xi)$.

**No choice principle is used.** The least ordinal of claim (a) is a least
element of a set of ordinals, and the map of claim (b) is built by transfinite
recursion from a formula.


### `def-cofinal-subset-of-an-ordinal`
**Title:** Cofinal subset of an ordinal

**Definition:**
Let $\alpha$ be an ordinal ([[def-ordinal]]). A subset $C \subseteq \alpha$ is
**cofinal in $\alpha$**, equivalently **unbounded in $\alpha$**, when

$$\text{for every } \xi \in \alpha \text{ there is } \eta \in C \text{ with } \xi \le \eta.$$

A subset that is not cofinal is **bounded below $\alpha$**: there is
$\xi \in \alpha$ such that $\eta < \xi$ for every $\eta \in C$.


### `def-ordinal`
**Title:** Ordinal (von Neumann)

**Definition:**
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


### `def-cardinal`
**Title:** Cardinal (initial ordinal) and cardinality

**Definition:**
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


### `def-cardinal-arithmetic`
**Title:** Cardinal sum $\kappa \oplus \lambda$, product $\kappa \otimes \lambda$ and exponentiation $\kappa^{\lambda}$, and why they are written apart from the ordinal operations

**Definition:**
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


### `def-aleph-and-beth-hierarchies`
**Title:** The successor cardinal $\kappa^{+}$, the alephs $\aleph_\alpha$, the beths $\beth_\alpha$, successor and limit cardinals, and the identifications $\aleph_0 = \omega$ and $\aleph_1 = \omega_1$

**Definition:**
**The successor cardinal.** For a cardinal $\kappa$ ([[def-cardinal]]) write

$$\kappa^{+} \;:=\; \aleph(\kappa),$$

the Hartogs number of $\kappa$ ([[thm-hartogs]]). By
[[lem-successor-cardinal-exists]] this is the least cardinal strictly above
$\kappa$, and its existence is a theorem of ZF.

> **Notation rule, in force on this page and its companion.** The superscript
> $+$ means the **successor cardinal** only on a cardinal letter
> $\kappa, \lambda, \mu$ or an aleph. On an ordinal letter
> $\alpha, \beta, \gamma, \xi, \eta$ the superscript $+$ keeps its published
> meaning, the **ordinal successor** $\alpha^{+} = \alpha \cup \{\alpha\}$ of
> [[def-ordinal]]. The two never agree on an infinite cardinal: $\kappa \cup \{\kappa\}$
> is a successor ordinal and therefore not a cardinal at all, while $\kappa^{+}$
> is much larger. To keep the reader out of the collision, everything below
> writes $\alpha + 1$ for the ordinal successor and reserves $\kappa^{+}$ for the
> cardinal one.

**The alephs.** By [[cor-the-aleph-and-beth-hierarchies-are-well-defined]] there
is exactly one operation $\alpha \mapsto \aleph_\alpha$, defined at every ordinal
([[def-ordinal]]), with

$$\aleph_0 = \omega, \qquad \aleph_{\alpha+1} = \aleph_\alpha^{+}, \qquad \aleph_\lambda = \sup\{\, \aleph_\alpha : \alpha \in \lambda \,\} \ \ (\lambda \text{ a limit ordinal}),$$

the limit clause being taken over limit ordinals in the sense of
[[def-limit-ordinal]], and $\sup$ being $\bigcup$ applied to a set of ordinals.
Every $\aleph_\alpha$ is an infinite cardinal, the operation is strictly
increasing, and $\alpha \le \aleph_\alpha$; all of this is that corollary, and all
of it is ZF.

**The beths**, assuming the Axiom of Choice, are the parallel operation

$$\beth_0 = \omega, \qquad \beth_{\alpha+1} = 2^{\beth_\alpha}, \qquad \beth_\lambda = \sup\{\, \beth_\alpha : \alpha \in \lambda \,\} \ \ (\lambda \text{ a limit ordinal}),$$

with $2^{\kappa}$ the cardinal power of [[def-cardinal-arithmetic]].

**Successor and limit cardinals.** An infinite cardinal $\kappa$ is a
**successor cardinal** when $\kappa = \lambda^{+}$ for some infinite cardinal
$\lambda$, and a **limit cardinal** otherwise. So $\aleph_{\alpha+1}$ is a
successor cardinal for every $\alpha$, and $\aleph_0 = \omega$ is a limit
cardinal, there being no infinite cardinal below it.

**The two identifications.**

$$\aleph_0 = \omega, \qquad \aleph_1 = \omega_1 .$$

The first is the base clause. The second holds because
$\aleph_1 = \aleph_0^{+} = \aleph(\omega)$, and $\aleph(\omega)$ is by definition
the first uncountable ordinal $\omega_1$ ([[def-first-uncountable-ordinal]]);
[[thm-omega-one-is-the-least-uncountable-ordinal]] independently confirms that
$\omega_1$ is a cardinal, is uncountable ([[def-countable]]), and has every
ordinal below it at most countable, which is the same thing said in the language
of the ordinal development.


### `thm-cofinality-basics`
**Title:** $\operatorname{cf}(\alpha) \le \alpha$; $\operatorname{cf}(0) = 0$ and $\operatorname{cf}(\alpha + 1) = 1$; for a limit ordinal $\lambda$ the value $\operatorname{cf}(\lambda)$ is an infinite cardinal with $\operatorname{cf}(\operatorname{cf}(\lambda)) = \operatorname{cf}(\lambda)$, so it is regular; and every cofinal subset of $\lambda$ has cardinality at least $\operatorname{cf}(\lambda)$, a value that is attained

**Statement:**
Work in ZF; no choice principle is used. Let $\operatorname{cf}$ be the
cofinality of [[def-cofinality]]. Then:

**(a)** $\operatorname{cf}(\alpha) \le \alpha$ for every ordinal $\alpha$
([[def-ordinal]]);

**(b)** $\operatorname{cf}(0) = 0$, and $\operatorname{cf}(\alpha + 1) = 1$ for
every ordinal $\alpha$, where $\alpha + 1 = \alpha \cup \{\alpha\}$
([[def-ordinal-addition]]);

**(c)** for a limit ordinal $\lambda$ ([[def-limit-ordinal]]),
$\operatorname{cf}(\lambda)$ is an **infinite cardinal** ([[def-cardinal]]) and
$\operatorname{cf}(\operatorname{cf}(\lambda)) = \operatorname{cf}(\lambda)$, so
$\operatorname{cf}(\lambda)$ is a **regular** cardinal;

**(d)** for a limit ordinal $\lambda$, every cofinal $C \subseteq \lambda$
([[def-cofinal-subset-of-an-ordinal]]) satisfies
$\operatorname{cf}(\lambda) \le \lvert C \rvert$, and some cofinal subset of
$\lambda$ has cardinality exactly $\operatorname{cf}(\lambda)$.

Clause (c) is what discharges the naming obligation of [[def-cofinality]]:
"regular" is defined through $\operatorname{cf}$, and it is a theorem, not a
convention, that $\operatorname{cf}$ of a limit ordinal is a cardinal at which
the definition can be tested.


### `thm-regularity-of-the-alephs`
**Title:** $\aleph_0$ is regular in ZF; assuming the Axiom of Choice every successor aleph $\aleph_{\alpha+1}$ is regular; $\operatorname{cf}(\aleph_\omega) = \aleph_0$, so $\aleph_\omega$ is singular, and under choice it is the least singular infinite cardinal

**Statement:**
Let $\operatorname{cf}$, regular and singular be as in [[def-cofinality]], and
let $\aleph_\alpha$ be as in [[def-aleph-and-beth-hierarchies]]. Then:

**(a) In ZF.** $\operatorname{cf}(\aleph_0) = \aleph_0$, so $\aleph_0$ is
regular.

**(b) Assuming the Axiom of Choice** ([[def-axiom-of-choice]]).
$\aleph_{\alpha+1}$ is regular for every ordinal $\alpha$.

**(c) In ZF.** $\operatorname{cf}(\aleph_\omega) = \aleph_0$, and
$\aleph_0 < \aleph_\omega$, so $\aleph_\omega$ is **singular**.

**(d) Assuming the Axiom of Choice.** Every infinite cardinal below
$\aleph_\omega$ is regular, so $\aleph_\omega$ is the least singular infinite
cardinal.

**Clause (b) is where the Axiom of Choice becomes indispensable, and the
hypothesis is not decoration.** The proof spends it once, to select an injection
$g(\xi) \to \aleph_\alpha$ for each $\xi$ below the cofinality, and there is no
canonical such family to fall back on: the sets $g(\xi)$ are ordinals, but the
injections are not determined by them. Clauses (a), (c) and the classification
half of (d) are choice free.


---

# What to return

The output format in the brief above, unchanged. Report every FATAL finding you
can establish from the text you were given, and finish with the `N fatal, M
nonfatal` line.
