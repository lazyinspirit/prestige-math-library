# Authoring design: the two foundations pages (spec pages 5 to 8)

Item ids, kinds, deps and proof strategies are fixed by `research/plan-spec.json`
(regenerate with `node research/gen-spec.mjs`). This file carries the part the
spec cannot hold: the **statements and proof skeletons**. Written 2026-07-25 so
the design survives context compaction.

Everything here is choice-free unless a step explicitly cites
`def-axiom-of-choice`. That bookkeeping is the point of the page.

---

## Page 5. `order-zorn-and-the-axiom-of-choice` (A, 24 items)

**Authored already (10):** `def-partial-order`, `def-chain`, `def-upper-bound`,
`def-maximal-element`, `def-chain-complete-poset`, `def-choice-function`,
`def-axiom-of-choice`, `def-admissible-set`, `def-bw-extremal`,
`lem-finite-choice` (precheck PASS, induction).

**Remaining (14), in page order.** Throughout: $(P,\le)$ is a chain-complete
poset, $f : P \to P$ is progressive, $\bot = \sup\emptyset$, and $M$ is the
smallest $f$-admissible subset. Admissible means (C1) closed under $f$ and (C2)
closed under suprema of chains; (C2) at the empty chain gives $\bot \in A$.

### 10. `lem-admissible-set-exists` (lemma, direct)

*Statement.* There is a smallest $f$-admissible subset $M \subseteq P$: it is
admissible, and $M \subseteq A$ for every admissible $A$.

*Skeleton.* $P$ is admissible, since $f$ maps $P$ into $P$ and chain suprema
exist in $P$ by chain-completeness. So the collection $\mathcal{A}$ of admissible
subsets is nonempty. Put $M = \bigcap \mathcal{A}$. Closed under $f$: if
$x \in M$ then $x \in A$ hence $f(x) \in A$, for every $A \in \mathcal{A}$.
Closed under chain suprema: a chain $C \subseteq M$ lies in every $A$, so
$\sup C \in A$ for every $A$. Minimality is immediate from being an
intersection.

### 11. `lem-extremal-cut-closed-under-f` (lemma, cases)

*Statement.* If $x \in M$ is extremal, then the cut
$M_x = \{y \in M : y \le x \text{ or } f(x) \le y\}$ satisfies $f(M_x) \subseteq M_x$.

*Skeleton.* Let $y \in M_x$. Then $f(y) \in M$ since $M$ is admissible. Three
exhaustive cases, from the definition of $M_x$ split at $y \le x$:
`[assume-case below]` $y < x$: extremality gives $f(y) \le x$, so $f(y) \in M_x$.
`[assume-case equal]` $y = x$: $f(y) = f(x)$ and $f(x) \le f(x)$, so $f(y) \in M_x$.
`[assume-case above]` $f(x) \le y$: progressivity gives $y \le f(y)$, so
$f(x) \le f(y)$, so $f(y) \in M_x$.
`[cases-exhaustive]`: membership of $M_x$ gives $y \le x$ or $f(x) \le y$, and
$y \le x$ splits as $y < x$ or $y = x$.

**Precheck note:** `[assume-case ...]` labels must be a single `\w+` token, hence
`below` / `equal` / `above`.

### 12. `lem-extremal-cut-closed-under-sups` (lemma, cases)

*Statement.* If $x \in M$ is extremal and $C \subseteq M_x$ is a chain, then
$\sup C \in M_x$.

*Skeleton.* $s = \sup C$ exists by chain-completeness and lies in $M$ because
$C \subseteq M$ and $M$ is admissible. Two exhaustive cases:
`[assume-case under]` every $y \in C$ satisfies $y \le x$: then $x$ is an upper
bound of $C$, so $s \le x$ by leastness, so $s \in M_x$.
`[assume-case over]` some $y_0 \in C$ has $y_0 \not\le x$: since $y_0 \in M_x$
this forces $f(x) \le y_0 \le s$, so $s \in M_x$.
`[cases-exhaustive]`: either every element of $C$ is $\le x$ or some element is
not.

### 13. `lem-extremal-comparability` (lemma, direct)

*Statement.* If $x \in M$ is extremal, then for every $y \in M$, either
$y \le x$ or $f(x) \le y$. Equivalently $M_x = M$.

*Skeleton.* $M_x$ is admissible by the two preceding lemmas, so $M \subseteq M_x$
by minimality of $M$; and $M_x \subseteq M$ by construction. Hence $M_x = M$,
which is the displayed statement.

### 14. `lem-successor-of-extremal` (lemma, cases)

*Statement.* If $x \in M$ is extremal, then $f(x)$ is extremal.

*Skeleton.* $f(x) \in M$ by admissibility. Let $y \in M$ with $y < f(x)$; we must
show $f(y) \le f(x)$. By `lem-extremal-comparability`, $y \le x$ or
$f(x) \le y$. The second contradicts $y < f(x)$, so $y \le x$. Then:
`[assume-case strict]` $y < x$: extremality of $x$ gives $f(y) \le x \le f(x)$,
using progressivity for $x \le f(x)$.
`[assume-case equal]` $y = x$: $f(y) = f(x) \le f(x)$.
`[cases-exhaustive]`: $y \le x$ splits as $y < x$ or $y = x$.

### 15. `lem-sup-of-extremals` (lemma, direct)

*Statement.* If $C \subseteq M$ is a chain all of whose elements are extremal,
then $\sup C$ is extremal.

*Skeleton.* $s = \sup C \in M$ by admissibility. Let $y \in M$ with $y < s$. Then
$y$ is not an upper bound of $C$ (else $s \le y$ by leastness, contradicting
$y < s$), so there is $x \in C$ with $x \not\le y$. Apply
`lem-extremal-comparability` to the extremal $x$: either $y \le x$, or
$f(x) \le y$ and then $x \le f(x) \le y$ contradicts $x \not\le y$. So $y \le x$,
and $y \ne x$ since $x \not\le y$. Hence $y < x$, and extremality of $x$ gives
$f(y) \le x \le s$.

**This is the subtle step.** The move "$y < s$ implies $y$ is not an upper bound
of $C$" is exactly leastness of the supremum, and is where chain-completeness
does real work rather than merely providing an element.

### 16. `lem-all-extremal` (lemma, direct)

*Statement.* Every element of $M$ is extremal.

*Skeleton.* Let $E = \{x \in M : x \text{ extremal}\}$. $E$ is closed under $f$
by `lem-successor-of-extremal` and under chain suprema by `lem-sup-of-extremals`,
so $E$ is admissible; minimality gives $M \subseteq E$, and $E \subseteq M$ by
definition. ($\bot \in E$ needs no separate argument: it arrives with (C2) at the
empty chain, and is extremal vacuously.)

### 17. `lem-admissible-is-chain` (lemma, direct)

*Statement.* $M$ is a chain.

*Skeleton.* Let $x, y \in M$. By `lem-all-extremal` $x$ is extremal, so
`lem-extremal-comparability` gives $y \le x$ or $f(x) \le y$; in the second case
progressivity gives $x \le f(x) \le y$. Either way $x$ and $y$ are comparable.

### 18. `thm-bourbaki-witt` (theorem, direct) — LANDMARK

*Statement.* Let $(P,\le)$ be a chain-complete poset and $f : P \to P$
progressive. Then $f$ has a fixed point. **No form of the Axiom of Choice is
used, and $f$ is not assumed monotone.**

*Skeleton.* $M$ is a chain (`lem-admissible-is-chain`), so $c = \sup M$ exists,
and $c \in M$ because $M$ is closed under suprema of its own chains. Then
$f(c) \in M$ by (C1), so $f(c) \le c$ since $c$ is an upper bound of $M$; and
$c \le f(c)$ by progressivity. Antisymmetry gives $f(c) = c$.

### 19. `thm-zorn` (theorem, contradiction) — LANDMARK

*Statement.* Assume the Axiom of Choice. Let $(P,\le)$ be a nonempty poset in
which every chain has an upper bound. Then $P$ has a maximal element.

*Skeleton.* `[assume-contra]` $P$ has no maximal element. Let $\mathcal{C}$ be
the set of all chains of $P$, ordered by $\subseteq$.
(i) $\mathcal{C}$ is chain-complete: the union of a $\subseteq$-chain of chains
is a chain and is its least upper bound, and $\sup \emptyset = \emptyset$, which
is a chain.
(ii) For $C \in \mathcal{C}$ let $S_C$ be the set of **strict** upper bounds of
$C$ in $P$. Then $S_C \ne \emptyset$: $C$ has an upper bound $u$ by hypothesis
(for $C = \emptyset$ take any element, $P$ being nonempty), and since $u$ is not
maximal there is $v$ with $u < v$; then $c \le u < v$ for every $c \in C$.
(iii) By AC choose $g$ with $g(S_C) \in S_C$ for every $C \in \mathcal{C}$.
(iv) Define $f(C) = C \cup \{g(S_C)\}$. This lands in $\mathcal{C}$: $g(S_C)$ is
comparable to every element of $C$, being a strict upper bound. And $f$ is
progressive for $\subseteq$.
(v) Bourbaki-Witt gives $C_0$ with $f(C_0) = C_0$, so $g(S_{C_0}) \in C_0$, while
$g(S_{C_0})$ is a strict upper bound of $C_0$, giving
$g(S_{C_0}) < g(S_{C_0})$. `[discharge-contradiction]`

**The one place AC enters**, and it enters exactly once, at (iii). Everything
before it is ZF.

### 20. `thm-zorn-implies-ac` (theorem, contradiction)

*Statement.* Zorn's lemma implies the Axiom of Choice.

*Skeleton.* Let $\mathcal{F}$ be a family of nonempty sets.
`[assume-contra]` $\mathcal{F}$ has no choice function. Let $P$ be the set of
**partial choice functions**: pairs $(\mathcal{G}, h)$ with
$\mathcal{G} \subseteq \mathcal{F}$ and $h$ a choice function for $\mathcal{G}$,
ordered by extension. $P \ne \emptyset$ since $(\emptyset, \emptyset) \in P$.
Every chain in $P$ has an upper bound: the union of the domains with the union of
the functions, which is a function because the members of a chain are pairwise
compatible. Zorn gives a maximal $(\mathcal{G}, h)$. If
$\mathcal{G} = \mathcal{F}$ then $h$ is a choice function for $\mathcal{F}$,
against the assumption; so there is $S \in \mathcal{F} \setminus \mathcal{G}$,
and $S \ne \emptyset$ gives some $a \in S$, and
$(\mathcal{G} \cup \{S\}, h \cup \{(S,a)\})$ strictly extends the maximal
element. `[discharge-contradiction]`

### 21. `cor-ac-iff-zorn` (corollary, direct)

*Statement.* Over ZF, the Axiom of Choice and Zorn's lemma are equivalent.

*Skeleton.* Both implications are the two preceding theorems. This is the item
later pages cite when they need to use either form.

### 22. `fs-zorn-provable-in-zf` (false-statement, contradiction)

*The FALSE claim.* Zorn's lemma is a theorem of ZF.

*Refutation skeleton.* `[assume-contra]` assume it is. By `cor-ac-iff-zorn` the
implication Zorn $\Rightarrow$ AC is itself a ZF theorem, so AC would be a
theorem of ZF. But Cohen (1963) proved ZF does not prove AC (cited as [A1], an
external fact this library does not prove, see `rem-choice-strengths`).
`[discharge-contradiction]`

**Honesty requirement:** the independence is a *cited* fact, flagged as not
proved here, because forcing is deferred (`DEFERRED.md` §3b). Do not let a
subagent present it as derived.

### 23. `fs-maximal-is-greatest` (false-statement, direct)

*The FALSE claim.* Every maximal element of a poset is a greatest element.

*Refutation skeleton.* Exhibit $P = \{a, b\}$ with $a \ne b$ and no relation
beyond reflexivity. This is a partial order. Both $a$ and $b$ are maximal, since
neither is strictly below anything. Neither is greatest, since $b \not\le a$ and
$a \not\le b$.

**Must be self-contained.** Do NOT put `cex-maximal-not-greatest` in `deps`: it
lives on the B page, and B pages are leaves. Prose may link to it.

---

## Page 6. `order-zorn-and-the-axiom-of-choice-examples` (B, 8 items)

- `ex-finite-choice-by-induction` — run the `lem-finite-choice` induction on a
  concrete three-member family, exhibiting the nested existential
  instantiations.
- `ex-canonical-choice-on-naturals` — $S \mapsto \min S$ is an explicit choice
  function on the nonempty subsets of $\mathbb{N}$, by
  `thm-well-ordering-principle`. No choice needed.
- `ex-russells-socks` — pairs of shoes admit the definable rule "take the left
  one"; pairs of socks admit no such rule. The clearest statement of what AC
  buys. Keep it as a *description of a definable selection*, not a claim about
  physical objects.
- `ex-powerset-is-chain-complete` — $(\mathcal{P}(X), \subseteq)$ is
  chain-complete, with $\sup \mathcal{C} = \bigcup \mathcal{C}$ and
  $\bot = \emptyset$. The standard target of Zorn.
- `ex-zorn-poset-of-chains` — the poset of chains used inside `thm-zorn`, worked
  out concretely on a small $P$.
- `cex-maximal-not-greatest` — the two-element antichain; refutes
  `fs-maximal-is-greatest`.
- `cex-zorn-hypothesis-fails` — $\mathbb{N}$ under its usual order: every chain
  that is bounded has an upper bound, but the chain $\mathbb{N}$ itself has none,
  and there is no maximal element. Shows the chain-bound hypothesis is not
  decorative.
- `cex-progressive-map-without-fixed-point` — $[0,1) \cap \mathbb{Q}$, or
  $\mathbb{N}$, with $x \mapsto x+1$: progressive, no fixed point, and the poset
  is not chain-complete. Shows chain-completeness is not decorative in
  Bourbaki-Witt.

---

## Page 7. `filters-and-ultrafilters` (A, 12 items)

- `def-filter` — nonempty, upward closed, closed under finite intersections;
  **proper** means $\emptyset \notin \mathcal{F}$.
- `def-filter-base` — downward directed, no empty member.
- `lem-filter-base-generates` — the upward closure of a filter base is a filter.
- `def-finite-intersection-property`
- `lem-fip-generates-filter` — a family with the FIP generates a proper filter.
  This is the bridge to the compactness characterisation on the topology track.
- `def-ultrafilter` — a maximal proper filter; principal versus free.
- `lem-union-of-chain-of-filters` — the union of a $\subseteq$-chain of proper
  filters is a proper filter. Isolated because it is the step Zorn consumes, and
  because it is exactly what fails for arbitrary unions
  (`cex-union-of-filters-not-filter`).
- `thm-ultrafilter-lemma` — every proper filter extends to an ultrafilter. Zorn
  on the proper filters refining it, ordered by inclusion. LANDMARK.
- `thm-ultrafilter-characterisation` — $\mathcal{U}$ is an ultrafilter iff for
  every $A$, either $A \in \mathcal{U}$ or its complement is. Both directions.
- `lem-ultrafilter-prime` — if a union lies in an ultrafilter then one of the two
  sets does. This is the step Tychonoff's ultrafilter proof consumes.
- `rem-choice-strengths` — the choice ledger. **Content is fixed and corrected**
  in `research/plan-choice-and-ultrafilters-page.md` (the amended
  `rem-choice-strengths` block) and `notes-delta-counterexamples.md` §4. It must
  include: the Kelley repair (his spaces ARE T1; the defect is that $X_a$ is not
  closed; Schechter 2006); do NOT upgrade Hausdorff to Tychonoff in
  Los-Ryll-Nardzewski; BCT is FOUR principles; Urysohn's lemma is not a ZF
  theorem. Every claim cited, none proved.
- `fs-every-ultrafilter-principal` — FALSE. Refuted by extending the Frechet
  filter, which needs `thm-ultrafilter-lemma`.

## Page 8. `filters-and-ultrafilters-examples` (B, 5 items)

`ex-principal-ultrafilter` · `ex-frechet-filter` (cofinite filter on
$\mathbb{N}$: proper, not an ultrafilter) · `ex-free-ultrafilter-on-naturals`
(any ultrafilter extending the Frechet filter is free; existence needs the
ultrafilter lemma, so flag the choice cost) · `cex-union-of-filters-not-filter`
(two filters whose union is not a filter, so the Zorn argument must use CHAINS)
· `cex-improper-filter` (dropping properness collapses the theory, the power set
becoming the unique maximal filter).

---

## Standing constraints for whoever authors these

1. **No em dashes anywhere** (owner rule; use commas, colons, parentheses).
2. Display math must be a **single source line** between `$$ ... $$`.
3. Every numbered proof step is **one physical line**; run `tools/reflow.mts`
   before precheck.
4. `**Given:**` line is REQUIRED in `## Facts & Assumptions`.
5. `[assume-case X]` labels are a **single `\w+` token**.
6. Adopt precheck's REPAIR stratification verbatim, and fix stale in-prose
   "step k.j" references to match.
7. Wikilinks may point anywhere that resolves; `deps` may NOT point at a B page
   from outside it.
8. Every source needs a **working URL** (verified 200 before it enters
   frontmatter).
