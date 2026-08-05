# Wave 5 audit — A6 adversarial proof reading

You are a **read-only adversarial reader** (DeepSeek V4 Pro, max reasoning)
dispatched by the wave-5 audit Alpha of the prestige-math-library published-page
retro-audit (`AUDIT-WORKFLOW.md` step A6). You return **evidence, never edits**,
and you never propose to apply anything yourself. Alpha alone adjudicates.

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Never ask the owner to approve a command. You have no
> shell at all, so this is automatic for you; it is stated here because the rule
> binds every agent in this workflow verbatim.

**You have no tools and no filesystem.** Everything you are to read is in this
prompt: the item under review in full, and the Statement or Definition text of
every dependency it declares, quoted verbatim from disk. Do not speculate about
text you were not given — if a decision genuinely turns on something absent,
say so explicitly and name what is missing rather than assuming its content.

**Why you specifically.** The audit-side lineup is otherwise entirely Claude:
the Beta that read and retagged these items, the Alpha adjudicating them, and
the certifier reading repairs are all Claude models, and much of this legacy
corpus was Claude-authored too. **You are the only cross-family reader in the
loop.** A shared blind spot among the Claude readers will not show up as
disagreement among them; it can only show up as you finding something they did
not. Do not defer to the fact that a published item has already passed several
readings — this audit has repeatedly confirmed fatal defects in text that had.

**This is a retro-audit of ALREADY-PUBLISHED pages.** The item in front of you
was written, gated, judged and published months ago. Nothing about that history
is evidence that it is correct; it is the reason nobody has re-read it
adversarially since. Wave 3 measured 6 of its 11 confirmed fatal defects in
items the audit had left byte-identical.

## Your standard — the judges' standard

Read every proof step and every cited dependency as someone trying to REFUTE the
item. The point of this audit is to find what is actually wrong, not to confirm
the text reads well.

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

**Choice discipline matters in this wave.** Wave 5 is real analysis and general
topology: countability axioms, separation axioms, nets, filters, ultrafilters
and function spaces. Countable choice, dependent choice, the ultrafilter lemma
and full AC are genuinely different hypotheses here, and this library records
which one an argument spends. A proof that silently uses a choice principle its
Statement does not scope, or a Statement scoping a principle strictly stronger
or weaker than the proof actually needs, is a FATAL defect of the
missing-hypothesis class — not a quibble. Equally, the library has already
adopted AC, countable choice and dependent choice as foundational axioms, so
using one *within its declared scope* is not a defect.

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

# Citation-precision audit — do these citing items state their target correctly?

You are reading a **published legacy corpus** of this library. Below are one or
more TARGET items, each quoted as it actually stands on disk, followed by every
place in this audit wave that cites it.

**The one question for every citing line:** does the citing text state the
target's own proposition — same domain, same quantifiers, same hypotheses, same
direction, same strength — or does it state something the target does not
actually give? A fact that quietly drops a hypothesis, flips an implication,
promotes an implication to a biconditional, or widens a domain is a **FATAL**
defect of the incorrect-dependency-citation class. It is this library's single
most common confirmed defect, and it is only visible by reading the two texts
against each other, which is what this file lets you do.

Do NOT report: a concise but faithful shortening (that is the required house
style); a paraphrase that preserves content; wording you would have chosen
differently; missing URLs; prose style. A citing line reading as a shortened
but faithful version of the target is CORRECT and must not be flagged.

Where a citing line says a dependency is declared but never cited in the body,
say whether that looks like a stale declaration or a use that lost its citation
— that one is NONFATAL either way.

For every finding use the block format from the brief, and finish with the
`N fatal, M nonfatal` line. If every citation is faithful, say so plainly and
name the targets you checked.

---

# Citation-precision audit — everything that cites `lem-of-inverse-positive`

## The target, as it actually stands on disk

`items/lem-of-inverse-positive.md` — lemma — Inverses of positives are positive, and reciprocation reverses order

#### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b \in F$.

1. If $a > 0$ then $a^{-1} > 0$.
2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.

## The 18 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- [L5] Order: $10 > 1 > 0$, so $0 < 1/10 < 1$ ([[prop-of-reciprocal-order]], [[lem-of-inverse-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]); and $|t| = t$ for $t \ge 0$ ([[lem-of-abs-value]]).

### `cex-compact-convergence-without-uniform-convergence` (published-backward, page function-space-topologies-examples)

Title: Refuted: convergence uniformly on every compact subset of $\\mathbb{R}$ implies uniform convergence. The maps $x \\mapsto x/(n+1)$ separate the two

- [L1] $\iota$ is strictly increasing on $\mathbb{N}$ with $\iota(n) > 0$ for $n \ge 1$, and $0 < u \le v$ gives $0 < 1/v \le 1/u$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

### `cex-nested-open-intervals-empty` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The nested open intervals $(0, 1/k)$ have empty intersection

- [L2] Canonical naturals are positive and strictly increasing in the index ([[lem-of-naturals-positive]]); reciprocals of positives are positive and reciprocation reverses the order ([[lem-of-inverse-positive]]).

### `cex-pointwise-bounded-but-not-equicontinuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: a pointwise bounded family of continuous functions is equicontinuous. The spikes are bounded by $1$ everywhere and are not equicontinuous at $0$

- [L4] For every real $\eta > 0$ there is a natural $m \ge 1$ with $1/\iota(m) < \eta$; $\iota$ is strictly increasing with $\iota(n) > 0$ for $n \ge 1$; and $0 < u \le v$ gives $0 < 1/v \le 1/u$ ([[cor-archimedean-reciprocal]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]], [[def-canonical-natural]]).

### `cex-sqrt-k-differences-null-not-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_k = \\sqrt{k}$ has $x_{k+1} - x_k \\to 0$ and is not Cauchy

- [L4] Canonical naturals: positive for $n \ge 1$, and strictly increasing in the index ([[lem-of-naturals-positive]]); reciprocals of positives are positive and reciprocation reverses the order ([[lem-of-inverse-positive]]).

### `cex-strictly-decreasing-gaps-no-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists

- [L2] Order and arithmetic: $1 > 0$, so $2 = 1 + 1 > 0$; sums of positives are positive; adding a constant preserves the order; a positive has a positive inverse, and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]).
- ([[lem-of-inverse-positive]]). So this sequence is also a witness for

### `cex-the-pointwise-limit-of-continuous-functions-need-not-be-continuous` (published-backward, page function-space-topologies-examples)

Title: Refuted: $C(X,Y)$ is closed in the topology of pointwise convergence. The ramps on $[0,1]$ converge pointwise to a discontinuous limit

- [L1] $\iota$ is strictly increasing on $\mathbb{N}$ with $\iota(n) > 0$ for $n \ge 1$, and $0 < u \le v$ gives $0 < 1/v \le 1/u$; hence $0 < a_k \le 1/\iota(2) = 1/2$ and $1/2 \le 1 - a_k < 1$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

### `ex-babylonian-sqrt-two` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The Babylonian sequence $x_1 = 2$, $x_{k+1} = (x_k + 2/x_k)/2$ decreases to $\\sqrt{2}$

- [L5] Order and arithmetic: $1 > 0$, hence $2 = 1 + 1 > 0$ and $2 > 1$; sums of positives are positive; adding a constant preserves the order; a positive has a positive inverse, and a quotient of positives is positive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]).

### `ex-contractive-sequence-fixed-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_{k+1} = (x_k + 1)/3$ is contractive with $c = 1/3$ and converges to $1/2$

- [L2] Order and arithmetic: $1 > 0$, so $3 = 1+1+1 > 1 > 0$; a positive has a positive inverse; and $0 < r < 1$ exactly when $1/r > 1$, so $0 < 1/3 < 1$ ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-inverse-positive]], [[prop-of-reciprocal-order]], [[def-ordered-field]], [[def-complete-ordered-field]]).

### `ex-dini-on-the-unit-interval` (published-backward, page function-space-topologies-examples)

Title: Dini's theorem applied to a nondecreasing sequence of piecewise linear approximations on $[0,1]$, and what fails when the limit is not continuous

- [L1] $\iota$ is strictly increasing on $\mathbb{N}$ with $\iota(n) > 0$ for $n \ge 1$, and $0 < u \le v$ gives $0 < 1/v \le 1/u$; hence $0 < a_{k+1} \le a_k \le 1/2$ and $1/2 \le 1 - a_k \le 1 - a_{k+1} < 1$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

### `ex-nested-intervals-single-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The nested intervals $[0, 1/k]$ intersect in exactly $\\{0\\}$

- [L4] Reciprocals: $a > 0$ gives $1/a > 0$, and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]).

### `ex-two-subsequential-limits` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $(-1)^k(1 + 1/k)$ is bounded with subsequential limit set exactly $\\{-1, 1\\}$

- [L3] Reciprocals: $a > 0$ gives $1/a > 0$, and $0 < a \le b$ gives $0 < 1/b \le 1/a$ ([[lem-of-inverse-positive]]).

### `fs-consecutive-differences-null-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: if $|x_{k+1} - x_k| \\to 0$ then $(x_k)$ is Cauchy

- [L5] Reciprocals: $a > 0$ gives $1/a > 0$, and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]).

### `fs-nested-open-intervals-nonempty` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: a nested sequence of nonempty bounded open intervals has nonempty intersection

- [L3] Reciprocals: if $a > 0$ then $1/a > 0$, and $0 < a < b$ gives $0 < 1/b < 1/a$ ([[lem-of-inverse-positive]]).

### `fs-pointwise-convergence-implies-uniform-convergence-on-compact-sets` (published-backward, page function-space-topologies)

Title: FALSE: a pointwise convergent sequence of continuous functions converges uniformly on every compact set

- [L1] $\iota$ is strictly increasing on $\mathbb{N}$ and $\iota(n) > 0$ for $n \ge 1$, so $0 < a_k \le 1/\iota(2) = 1/2$ and $0 < 2a_k \le 1$ for every $k \in \mathbb{N}$, and $m \le n$ gives $a_n \le a_m$ ([[def-canonical-natural]], [[lem-of-naturals-positive]], [[lem-of-inverse-positive]]).

### `lem-geometric-sequence-null` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- [L6] Reciprocals: $a > 0$ gives $a^{-1} > 0$; $0 < a < b$ gives $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]); and $0 < t < 1$ exactly when $1/t > 1$ ([[prop-of-reciprocal-order]]).

### `lem-the-k-topology-is-hausdorff-and-not-regular` (published-backward, page separation-axioms)

Title: The $K$-topology on $\\mathbb{R}$, generated by the open intervals together with their complements of $K = \\{1/(n+1) : n \\in \\mathbb{N}\\}$, is $T_1$ and Hausdorff but not regular

- [L4] For $n \ge 1$ the canonical natural $\iota(n)$ is positive and $n \mapsto \iota(n)$ is strictly increasing on the naturals $\ge 1$ ([[lem-of-naturals-positive]]); and $0 < u < v$ implies $0 < 1/v < 1/u$ ([[lem-of-inverse-positive]]).

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- [L7] Reciprocals of positives are positive ([[lem-of-inverse-positive]]).


---

# Citation-precision audit — everything that cites `thm-basis-criterion`

## The target, as it actually stands on disk

`items/thm-basis-criterion.md` — theorem — A family is a basis for a unique topology iff it covers the set and every point of an intersection of two members lies in a member inside that intersection; finite intersections of any subbasis form a basis

#### Statement

Let $X$ be a set, and for $\mathcal{B} \subseteq \mathcal{P}(X)$ write

$$\mathcal{T}_{\mathcal{B}} := \{\, U \subseteq X : \text{for every } x \in U \text{ there is } B \in \mathcal{B} \text{ with } x \in B \subseteq U \,\} .$$

1. $\mathcal{B}$ is a basis for some topology on $X$ ([[def-topology-basis-subbasis]])
   if and only if

   - **(B1)** $\bigcup \mathcal{B} = X$, and
   - **(B2)** for all $B_1, B_2 \in \mathcal{B}$ and every $x \in B_1 \cap B_2$
     there is $B_3 \in \mathcal{B}$ with $x \in B_3 \subseteq B_1 \cap B_2$.

   When (B1) and (B2) hold, that topology is **unique**: it is
   $\mathcal{T}_{\mathcal{B}}$, which is also exactly the family of all unions of
   subfamilies of $\mathcal{B}$.

2. Let $\mathcal{S} \subseteq \mathcal{P}(X)$ be an arbitrary family and let
   $\mathcal{B}_{\mathcal{S}}$ be the family of intersections of finitely many
   members of $\mathcal{S}$. Then $\mathcal{B}_{\mathcal{S}}$ satisfies (B1) and
   (B2), and $\mathcal{T}_{\mathcal{B}_{\mathcal{S}}} = \langle \mathcal{S} \rangle$,
   the topology generated by $\mathcal{S}$. So the finite intersections of any
   subbasis form a basis for the topology it generates.

**The nullary intersection: this library takes the empty intersection to be $X$.**
In claim 2 the phrase "finitely many" includes **none**, and the intersection of
the empty subfamily of $\mathcal{S}$ is $X$, because the defining condition "lies
in every member of the empty family" holds of every point of $X$. Hence
$X \in \mathcal{B}_{\mathcal{S}}$ for every $\mathcal{S}$, including
$\mathcal{S} = \varnothing$, and **no covering hypothesis is imposed on a
subbasis**. The competing convention takes only nonempty finite intersections and
compensates by requiring $\bigcup \mathcal{S} = X$; under it claim 2 holds
verbatim once that hypothesis is added, and the two conventions differ only in
which of the two devices supplies (B1). The choice made here is recorded again
among this page's conventions, and it is the reason
$\langle \varnothing \rangle$ comes out as the indiscrete topology
$\{\varnothing, X\}$ rather than being undefined.

## The 18 citing use(s), quoted verbatim from the citing items

### `cex-the-deleted-tychonoff-plank-is-not-normal` (published-backward, page separation-axioms-examples)

Title: Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal

- [A2] For a binary product the basic product-open sets are exactly the boxes $P \times Q$ with $P$ and $Q$ open, and the boxes $P_0 \times Q_0$ with $P_0$, $Q_0$ basic in the factors also form a basis: given $(x,y) \in P \times Q$, basic $P_0 \ni x$ inside $P$ and $Q_0 \ni y$ inside $Q$ give $(x,y) \in P_0 \times Q_0 \subseteq P \times Q$ ([[def-product-topology]], [[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

### `def-compact-open-topology` (published-backward, page function-space-topologies)

Title: The compact-open topology on $C(X,Y)$ for a metric domain $X$, with subbasis $S(K,V) = \\{f : f[K] \\subseteq V\\}$

- as a subbasis ([[def-topology-basis-subbasis]]). By [[thm-basis-criterion]] the

### `def-order-topology-on-an-ordinal` (published-backward, page separation-axioms)

Title: The order topology on an ordinal, with the half-open intervals $(\\alpha, \\beta]$ and the initial segments $[0, \\beta]$ as a basis

- ([[thm-basis-criterion]], [[def-topology-basis-subbasis]]), and that topology is
- holds, and [[thm-basis-criterion]] supplies the topology and its uniqueness.

### `def-topology-of-compact-convergence` (published-backward, page function-space-topologies)

Title: The topology of compact convergence on $C(X,Y)$ for metric $X$ and $Y$: uniform convergence on each compact subset of $X$

- topology on $C(X,Y)$** ([[thm-basis-criterion]], claim 1); that topology is the
- By [[thm-basis-criterion]] the family $\mathcal{B}_{\mathrm{cc}}$ is therefore a

### `def-topology-of-pointwise-convergence` (published-backward, page function-space-topologies)

Title: The topology of pointwise convergence on $Y^{X}$, which is the product topology, and its restriction to $C(X,Y)$

- By [[thm-basis-criterion]] the finite intersections of members of $\mathcal{G}$

### `ex-cardinal-functions-of-the-lower-limit-line` (published-backward, page countability-axioms-and-cardinal-functions-examples)

Title: For the lower-limit line, $\\chi=d=L=c=\\aleph_0$ and $w=2^{\\aleph_0}$ under choice

- **NO WIKILINK TO THE TARGET ANYWHERE IN THE BODY** — the dependency is declared in `deps` but never cited in a fact or step. Report whether that is a stale declaration or a use that lost its citation.

### `fs-lindelofness-is-productive` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Assuming countable choice, refuted: Lindelöfness is productive

- [L1] A basis characterises its open sets locally, and the products of basic open sets form a basis for the product topology ([[thm-basis-criterion]], [[def-product-topology]]).

### `fs-separability-is-hereditary` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: separability is hereditary

- [F1] The half-open intervals $[a,b)$, $a<b$, satisfy the basis criterion, and products of their members form a basis for the product topology ([[def-interval]], [[thm-basis-criterion]], [[def-product-topology]]).

### `fs-separable-spaces-are-second-countable` (published-backward, page countability-axioms-and-cardinal-functions)

Title: Refuted: every separable space is second countable

- [L2] A basis gives, for every open set $U$ and each $x\in U$, a basis member $B$ with $x\in B\subseteq U$ ([[thm-basis-criterion]]).

### `fs-the-compact-open-topology-is-always-metrizable` (published-backward, page function-space-topologies)

Title: FALSE: the compact-open topology on $C(X,Y)$ is metrizable for every metric $X$ and $Y$

- [L4] The subbasic sets of the compact-open topology are $S(K,V) = \{\, f : f[K] \subseteq V \,\}$ for compact $K$ and open $V$, and those of the topology of pointwise convergence on $Y^{X}$ are $\pi_x^{-1}[V] = \{\, f : f(x) \in V \,\}$; finite intersections of subbasic sets form a basis in both cases, and a topology generated by a family is contained in every topology containing that family ([[def-compact-open-topology]], [[def-topology-of-pointwise-convergence]], [[def-product-topology]], [[def-topology-basis-subbasis]], [[thm-basis-criterion]]).

### `fs-the-evaluation-map-is-always-continuous` (published-backward, page function-space-topologies)

Title: FALSE: the evaluation map on $C(X,Y)$ with the compact-open topology is continuous for every metric $X$

- [L7] Continuity of a map at a point, in the open-set form, and the fact that the boxes $O \times U$ with $O$ open in $C(\mathbb{Q},\mathbb{R})$ and $U$ open in $\mathbb{Q}$ form a basis for the product topology, while the finite intersections of the sets $S(K,W)$ form a basis for the compact-open topology ([[def-continuous-map-top]], [[thm-continuity-characterisations-top]], [[def-product-topology]], [[def-compact-open-topology]], [[def-topology-basis-subbasis]], [[thm-basis-criterion]], [[def-topological-space]]).

### `lem-convergence-in-the-pointwise-topology` (published-backward, page function-space-topologies)

Title: A sequence converges in the topology of pointwise convergence exactly when it converges at every point

- [L1] For $x \in X$ and $V \in \mathcal{T}_Y$ the set $\pi_x^{-1}[V] = \{\, g \in Y^{X} : g(x) \in V \,\}$ is open in $Y^{X}$, and the sets $\{\, g \in Y^{X} : g(x_j) \in V_j \text{ for every } j < n \,\}$, for $n \in \mathbb{N}$, points $x_0, \dots, x_{n-1} \in X$ and open $V_0, \dots, V_{n-1} \subseteq Y$, form a basis for the topology of pointwise convergence ([[def-topology-of-pointwise-convergence]], [[def-product-topology]], [[thm-basis-criterion]]).

### `lem-the-k-topology-is-hausdorff-and-not-regular` (published-backward, page separation-axioms)

Title: The $K$-topology on $\\mathbb{R}$, generated by the open intervals together with their complements of $K = \\{1/(n+1) : n \\in \\mathbb{N}\\}$, is $T_1$ and Hausdorff but not regular

- $\mathbb{R}$ ([[thm-basis-criterion]]), the **$K$-topology**, and
- [L1] A family satisfying (B1) and (B2) is a basis for exactly one topology, namely the family of sets each of whose points lies in a member inside the set ([[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

### `lem-tube-lemma-for-a-compact-metric-factor` (published-backward, page function-space-topologies)

Title: Tube lemma: if $K$ is a compact subset of a metric space $X$, $Z$ is a topological space and $N$ is open in $X \\times Z$ with $K \\times \\{z_0\\} \\subseteq N$, then $K \\times W \\subseteq N$ for some open $W \\ni z_0$

- [L1] For a two-element index set the basic product-open sets are exactly the boxes: the sets $U \times W$ with $U$ open in $X$ and $W$ open in $Z$ form a basis for the product topology on $X \times Z$ ([[def-product-topology]], [[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

### `thm-compact-open-equals-compact-convergence` (published-backward, page function-space-topologies)

Title: For a metric domain and a metric target the compact-open topology on $C(X,Y)$ is the topology of compact convergence

- [L1] The sets $S(K,V)$, for $K \subseteq X$ compact and $V \subseteq Y$ open, are a subbasis for $\mathcal{T}_{\mathrm{co}}$; $S(\varnothing,V) = S(K,Y) = C(X,Y)$; and finite intersections of subbasic sets are open ([[def-compact-open-topology]], [[thm-basis-criterion]], [[def-topology-basis-subbasis]]).
- [L3] A topology generated by a family $\mathcal{S}$ is contained in every topology containing $\mathcal{S}$, and a set all of whose points lie in a basic set inside it is a union of basic sets, hence open ([[def-topology-basis-subbasis]], [[thm-basis-criterion]]).

### `thm-comparison-of-the-three-function-space-topologies` (published-backward, page function-space-topologies)

Title: On $C(X,Y)$ with $X$ and $Y$ metric, uniform convergence is finer than compact convergence, which is finer than pointwise convergence

- [L4] A topology generated by a family is contained in every topology containing that family, and a set all of whose points lie in a member of a basis inside it is open ([[def-topology-basis-subbasis]], [[thm-basis-criterion]]).

### `thm-evaluation-is-continuous-on-a-locally-compact-metric-domain` (published-backward, page function-space-topologies)

Title: If $X$ is a locally compact metric space then the evaluation map is continuous for the compact-open topology

- [L2] For a two-element index set the basic product-open sets are the boxes: $O \times U$ with $O$ open in $C(X,Y)$ and $U$ open in $X$ is open in $C(X,Y) \times X$ ([[def-product-topology]], [[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

### `thm-exponential-correspondence-is-continuous` (published-backward, page function-space-topologies)

Title: If $f : X \\times Z \\to Y$ is continuous then its transpose $F : Z \\to C(X,Y)$, $F(z)(x) = f(x,z)$, is continuous for the compact-open topology, with no hypothesis on $X$ beyond being metric

- [L5] Continuity may be checked on a subbasis: $h$ is continuous exactly when $h^{-1}[S]$ is open for every member $S$ of a subbasis of the target ([[thm-continuity-characterisations-top]], clause (d), [[def-topology-basis-subbasis]], [[thm-basis-criterion]]).


---

# Citation-precision audit — everything that cites `lem-of-abs-value`

## The target, as it actually stands on disk

`items/lem-of-abs-value.md` — lemma — Basic properties of the absolute value

#### Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$, with
$|x|$ the absolute value ([[def-abs-value]]). Then

$$|x| \ge 0; \quad |x| = 0 \iff x = 0; \quad -|x| \le x \le |x|; \quad |-x| = |x|; \quad |xy| = |x|\,|y|;$$

and, for every $c > 0$, one has $|x| < c \iff -c < x < c$.

## The 17 citing use(s), quoted verbatim from the citing items

### `cex-cauchy-rationals-no-rational-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The truncated decimal approximations of $\\sqrt{2}$ form a Cauchy sequence of rationals with no rational limit

- [L5] Order: $10 > 1 > 0$, so $0 < 1/10 < 1$ ([[prop-of-reciprocal-order]], [[lem-of-inverse-positive]], [[def-ordered-field]], [[def-complete-ordered-field]]); and $|t| = t$ for $t \ge 0$ ([[lem-of-abs-value]]).

### `cex-sqrt-k-differences-null-not-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_k = \\sqrt{k}$ has $x_{k+1} - x_k \\to 0$ and is not Cauchy

- [L6] Absolute value: $|t| = t$ for $t \ge 0$, and $|t| \ge t$ ([[lem-of-abs-value]]).

### `cex-strictly-decreasing-gaps-no-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists

- [L5] Absolute value: $|t| = t$ for $t \ge 0$ and $|t| \ge t$ ([[lem-of-abs-value]]).

### `cex-unbounded-with-convergent-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $1, 1, 2, 1, 3, 1, 4, \\dots$ is unbounded and has a convergent subsequence

- [L6] Absolute value: $|t| = t$ for $t \ge 0$ ([[lem-of-abs-value]]); trichotomy of the order ([[def-complete-ordered-field]], [[def-ordered-field]]).

### `cor-monotone-converges-iff-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A monotone sequence converges if and only if it is bounded

- [L5] Absolute value: $|t| \le M$ exactly when $-M \le t \le M$ ([[lem-of-abs-value]]).

### `def-contractive-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Contractive sequence: $|x_{k+2} - x_{k+1}| \\le c\\,|x_{k+1} - x_k|$ for a fixed $0 < c < 1$

- ([[def-real-order]], [[lem-of-abs-value]]). Such a $c$ is called a **contraction
- $|x_{k+1} - x_k| \ge 0$ ([[lem-of-abs-value]]). Statements about contractive

### `ex-closed-subsets-of-the-line-as-zero-sets-and-g-delta-sets` (published-backward, page separation-axioms-examples)

Title: Every nonempty closed subset $A$ of $\\mathbb{R}$ is the zero set of $x \\mapsto d(x, A)$ and the intersection of the open sets $\\{x : d(x,A) < 1/(n+1)\\}$, worked for $[0,1]$ and for $\\{0\\}$

- [L3] $|s| \ge 0$, $|s| = 0$ exactly when $s = 0$, and for $c > 0$ one has $|s| < c$ exactly when $-c < s < c$ ([[lem-of-abs-value]]).

### `ex-contractive-sequence-fixed-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $x_{k+1} = (x_k + 1)/3$ is contractive with $c = 1/3$ and converges to $1/2$

- [L4] Absolute value: $|ab| = |a|\,|b|$, and $|t| = t$ for $t \ge 0$, so $|(u-v)/3| = |u-v|/3$ ([[lem-of-abs-value]]).

### `ex-nested-intervals-single-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The nested intervals $[0, 1/k]$ intersect in exactly $\\{0\\}$

- [L6] Absolute value: $|t| = t$ when $t \ge 0$ ([[lem-of-abs-value]]).

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- [L2] $|uv| = |u||v|$, $|u+v| \le |u|+|v|$, and $|u| \ge 0$ ([[lem-of-abs-value]], [[lem-of-triangle-inequality]], [[def-abs-value]]).

### `ex-two-subsequential-limits` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $(-1)^k(1 + 1/k)$ is bounded with subsequential limit set exactly $\\{-1, 1\\}$

- [L5] Absolute value: $|ab| = |a||b|$, $|t| \ge 0$, $|t| = t$ for $t \ge 0$, and $|t| = 1$ forces $t = 1$ or $t = -1$ ([[lem-of-abs-value]], [[def-abs-value]]).

### `fs-consecutive-differences-null-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: if $|x_{k+1} - x_k| \\to 0$ then $(x_k)$ is Cauchy

- [L7] Absolute value: $|t| \ge 0$, $|t| \ge t$, and $|t| = t$ for $t \ge 0$ ([[lem-of-abs-value]]).

### `fs-convergent-subsequence-implies-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: a sequence with a convergent subsequence is bounded (the converse of Bolzano-Weierstrass)

- [L4] Absolute value: $|t| \ge t$ always, and $|t| = t$ when $t \ge 0$ ([[lem-of-abs-value]]).

### `lem-alternating-sequence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: The even and odd index maps and the alternating sequence: strictly increasing $e, o$ with $\\mathbb{N}$ their disjoint union, and the unique $(s_k)$ with $s_0 = 1$, $s_{\\sigma(k)} = -s_k$, which satisfies $|s_k| = 1$, $s \\circ e \\equiv 1$ and $s \\circ o \\equiv -1$

- [L5] Absolute value and field arithmetic: $|-u| = |u|$ ([[lem-of-abs-value]]); $|v| = v$ whenever $v \ge 0$ ([[def-abs-value]], [[def-real-order]]); and $-(-u) = u$ ([[def-field]]).

### `lem-geometric-sequence-null` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- [L1] Absolute value: $|x| \ge 0$; $|x| = 0$ exactly when $x = 0$; $|xy| = |x|\,|y|$; and $|x| = x$ when $x \ge 0$, so in particular $|1| = 1$ because $1 > 0$ ([[lem-of-abs-value]], [[def-abs-value]], [[cor-of-one-positive]]).

### `thm-contractive-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: Every contractive sequence is Cauchy, hence converges, with error bound $|x - x_k| \\le c^{k-1}|x_2 - x_1|/(1-c)$ for $k \\ge 1$

- [L5] Absolute value: $|t| \ge 0$, $|t| = |-t|$, and $|t| \le u$ exactly when $-u \le t \le u$ ([[lem-of-abs-value]]).

### `thm-monotone-convergence` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: A nondecreasing sequence bounded above converges to the supremum of its range, and a nonincreasing sequence bounded below to the infimum

- [L7] Absolute value: for $c > 0$, $|t| < c$ exactly when $-c < t < c$ ([[lem-of-abs-value]]).


---

# Citation-precision audit — everything that cites `thm-of-archimedean`

## The target, as it actually stands on disk

`items/thm-of-archimedean.md` — theorem — Every complete ordered field is Archimedean

#### Statement

Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:
for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$,
where $n \cdot 1_F$ is the canonical natural of the ordered field $F$
([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.

## The 16 citing use(s), quoted verbatim from the citing items

### `cex-closed-unbounded-euclidean-subset-not-compact` (published-backward, page the-topology-of-euclidean-space-examples)

Title: $\\mathbb{R}^n$ is closed and unbounded and is not compact for $n\\ge1$

- [L3] For every real radius there is a natural number larger than it ([[thm-of-archimedean]]).

### `cex-nested-open-intervals-empty` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The nested open intervals $(0, 1/k)$ have empty intersection

- [L3] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

### `cex-nested-unbounded-closed-empty` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The nested closed unbounded sets $[k, \\infty)$ have empty intersection, so boundedness cannot be dropped

- [L3] Archimedean property: for every real $x$ there is a natural $n \ge 1$ with $x < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]).

### `cex-sqrt-k-differences-null-not-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_k = \\sqrt{k}$ has $x_{k+1} - x_k \\to 0$ and is not Cauchy

- [L5] Archimedean property, both forms ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]]).

### `cex-strictly-decreasing-gaps-no-limit` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: $x_{k+1} = x_k + 1/x_k$ from $x_1 = 1$ has strictly decreasing consecutive gaps and diverges, so no uniform $c < 1$ exists

- [L4] Canonical naturals: positive for $n \ge 1$, and strictly increasing in the index ([[lem-of-naturals-positive]]); the Archimedean property ([[thm-of-archimedean]]).

### `cex-unbounded-with-convergent-subsequence` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $1, 1, 2, 1, 3, 1, 4, \\dots$ is unbounded and has a convergent subsequence

- [L3] Canonical naturals: positive for $m \ge 1$ and strictly increasing in the index ([[lem-of-naturals-positive]]); the Archimedean property ([[thm-of-archimedean]]).

### `cor-rn-is-locally-compact-and-sigma-compact` (published-backward, page the-topology-of-euclidean-space)

Title: $\\mathbb{R}^n$ is locally compact and $\\sigma$-compact

- [L3] For every real $M$ there is a natural $k\ge1$ with $M<k\cdot1_{\mathbb R}$ ([[thm-of-archimedean]]).

### `ex-nested-intervals-single-point` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The nested intervals $[0, 1/k]$ intersect in exactly $\\{0\\}$

- [L5] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

### `ex-the-compact-open-topology-on-the-continuous-functions-of-the-line` (published-backward, page function-space-topologies-examples)

Title: On $C(\\mathbb{R}, \\mathbb{R})$ the compact-open topology has the sets $\\{g : \\sup_{[-m,m]} |f-g| < \\varepsilon\\}$ as a neighbourhood base, and $\\mathbb{R}$ is locally compact so evaluation is continuous

- [L3] For every real $x$ there is a natural $m \ge 1$ with $x < \iota(m)$, and $\iota$ is strictly increasing with $\iota(m) > 0$ for $m \ge 1$ ([[thm-of-archimedean]], [[lem-of-naturals-positive]], [[def-canonical-natural]]).

### `ex-the-exponential-law-worked-on-the-line` (published-backward, page function-space-topologies-examples)

Title: The map $(x,z) \\mapsto x \\cdot z$ on $\\mathbb{R} \\times \\mathbb{R}$ and its transpose $z \\mapsto (x \\mapsto x \\cdot z)$ traced through the exponential law

- [L6] For every real $x$ there is a natural $m \ge 1$ with $|x| + 1 < \iota(m)$, and $\iota(m) \ge 1 > 0$ for $m \ge 1$ ([[thm-of-archimedean]], [[lem-of-naturals-positive]], [[cor-archimedean-reciprocal]], [[def-canonical-natural]]).

### `ex-two-subsequential-limits` (published-backward, page monotone-sequences-and-cauchy-completeness-examples)

Title: The sequence $(-1)^k(1 + 1/k)$ is bounded with subsequential limit set exactly $\\{-1, 1\\}$

- [L4] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

### `fs-consecutive-differences-null-implies-cauchy` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: if $|x_{k+1} - x_k| \\to 0$ then $(x_k)$ is Cauchy

- [L6] Archimedean property, in both forms: for every real $x$ there is a natural $n \ge 1$ with $x < n$, and for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[thm-of-archimedean]], [[cor-archimedean-reciprocal]]).

### `fs-convergent-subsequence-implies-bounded` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: a sequence with a convergent subsequence is bounded (the converse of Bolzano-Weierstrass)

- [L3] Archimedean property: for every real $x$ there is a natural $m \ge 1$ with $x < m \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]).

### `fs-nested-open-intervals-nonempty` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: FALSE: a nested sequence of nonempty bounded open intervals has nonempty intersection

- [L4] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

### `lem-geometric-sequence-null` (published-backward, page monotone-sequences-and-cauchy-completeness)

Title: For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$

- except through [[thm-of-archimedean]] and [[cor-archimedean-reciprocal]].
- [L7] Archimedean property: for every $x \in \mathbb{R}$ there is a natural $n \ge 1$ with $x < n$ ([[thm-of-archimedean]]); and for every $\varepsilon > 0$ there is a natural $N \ge 1$ with $1/N < \varepsilon$ ([[cor-archimedean-reciprocal]]).

### `lem-the-k-topology-is-hausdorff-and-not-regular` (published-backward, page separation-axioms)

Title: The $K$-topology on $\\mathbb{R}$, generated by the open intervals together with their complements of $K = \\{1/(n+1) : n \\in \\mathbb{N}\\}$, is $T_1$ and Hausdorff but not regular

- [L3] For every real $\varepsilon > 0$ there is a natural $k \ge 1$ with $1/k < \varepsilon$; every nonzero natural is a successor; and for every real $x$ there is a natural $k \ge 1$ with $x < k$ ([[cor-archimedean-reciprocal]], [[lem-nat-nonzero-is-successor]], [[thm-of-archimedean]]).
