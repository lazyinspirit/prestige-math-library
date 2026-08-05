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

# Adversarial proof reading — `ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence`

## The item under review, in full

`items/ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence.md`

```markdown
---
id: ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence
kind: example
title: "The coordinate-reading sequence in a compact binary cube has a convergent subnet but no convergent subsequence"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [fs-compact-implies-sequentially-compact, thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma, thm-compactness-via-nets-filters-and-ultrafilters, def-subnet, def-sequence-convergence-top, def-standard-topologies, thm-product-universal-property, thm-continuity-characterised-by-nets]
aliases: []
landmark: false
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Tychonoff's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff%27s_theorem"
    - title: "Sequential space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequential_space"
pipeline_run: null
---

## Example

Let $D=\{0,1\}^{\mathbb N}$ and $Y=\{0,1\}^{D}$ with the product topology. The coordinate-reading sequence is $F_n(r)=r_n$. Assuming the ultrafilter lemma, $Y$ is compact and $(F_n)$ has a convergent subnet, but it has no convergent subsequence.

## Facts & Assumptions

**Given:** The binary cube and the coordinate-reading sequence above.

[L1] The published refutation [[fs-compact-implies-sequentially-compact]] defines this cube and sequence as a compact nonsequentially compact witness.

[L2] Under the ultrafilter lemma, every net in a compact space has a convergent subnet ([[thm-compactness-via-nets-filters-and-ultrafilters]]).

[L3] Under the ultrafilter lemma, an arbitrary product of compact Hausdorff spaces is compact ([[thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma]]).

[L4] Each coordinate projection from a product is continuous, so it sends a convergent net to a convergent coordinate net ([[thm-product-universal-property]], [[thm-continuity-characterised-by-nets]]).


## Verification

**Proof technique:** contradiction.

1.1 Each two-point discrete factor is compact and Hausdorff, so the cube is compact under the ultrafilter lemma by [L3]; then [L2] gives a convergent subnet of $(F_n)$. [L2, L3]

1.2 Assume for a contradiction that $F_{n_j}$ is a convergent subsequence. Define $r\in D$ by $r_{n_j}=0$ for even $j$ and $r_{n_j}=1$ for odd $j$, assigning $0$ elsewhere. [L1, assume-contra]

2.1 The $r$-coordinate of $F_{n_j}$ alternates $0,1$, so it does not converge in the discrete two-point factor. By [L4], a convergent product net has convergent coordinate nets, contradiction. [step 1.2, L4]

3.1 Hence no convergent subsequence exists, while step 1.1 supplies a convergent subnet. [step 1.1, step 2.1, discharge-contradiction] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `fs-compact-implies-sequentially-compact` — false-statement — FALSE: every compact space is sequentially compact

(statement provenance: ai-altered)

### Statement

**False claim:** every compact topological space ([[def-compact-space]]) is
sequentially compact ([[def-compactness-variants]]).

**Where the claim comes from, and what is actually true.** For a metric space the
two conditions are equivalent, and the claim above is that equivalence
transplanted to an arbitrary topological space. The refutation builds its own
witness out of Tychonoff's theorem ([[thm-tychonoff]]): the product

$$Y \;:=\; \prod_{x \in D} \{0,1\}, \qquad D := \{0,1\}^{\mathbb{N}},$$

of one copy of the two-point discrete space for every $0$-$1$ sequence, together
with the sequence $(F_n)$ in $Y$ whose $n$-th term reads off the $n$-th
coordinate, $F_n(x) := x_n$. The Axiom of Choice is assumed, since
[[thm-tychonoff]] carries it.

### `thm-compact-hausdorff-tychonoff-from-the-ultrafilter-lemma` — theorem — Assuming the ultrafilter lemma, an arbitrary product of compact Hausdorff spaces is compact

(statement provenance: ai-altered)

### Statement

**Assume the ultrafilter lemma.** If $(X_i)_{i\in I}$ is any family of compact Hausdorff spaces, then $\prod_{i\in I}X_i$, with its product topology, is compact.

### `thm-compactness-via-nets-filters-and-ultrafilters` — theorem — Assuming the ultrafilter lemma, compactness is equivalent to every net having a cluster point, every net having a convergent subnet, every filter having a cluster point, and every ultrafilter converging

(statement provenance: ai-altered)

### Statement

**Assume the ultrafilter lemma.** For a topological space $X$, the following are equivalent:

1. $X$ is compact;
2. every net in $X$ has a cluster point;
3. every net in $X$ has a convergent subnet;
4. every filter on $X$ has a cluster point;
5. every ultrafilter on $X$ converges.

### `def-subnet` — definition — Subnet via an eventually cofinal index map

(statement provenance: ai-altered)

### Definition

Let $x:D\to X$ be a net. A net $y:E\to X$ is a **subnet** of $x$ if $E$ is a directed preorder and there is a map $\phi:E\to D$ such that $y_e=x_{\phi(e)}$ for every $e\in E$ and

$$\text{for every }d\in D\text{ there is }e_0\in E\text{ such that }e\ge e_0\Longrightarrow\phi(e)\ge d.$$

The displayed condition says that $\phi$ is **eventually cofinal**. No order-preservation condition is imposed on $\phi$.

### `def-sequence-convergence-top` — definition — Convergence and cluster points of a sequence in a topological space, sequential continuity, and the sequential closure

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
neighbourhoods as in [[def-neighbourhood-top]].

A **sequence in $X$** is a function $x : \mathbb{N} \to X$, written $(x_k)$ with
$x_k := x(k)$. As everywhere in this library $\mathbb{N}$ contains $0$
([[def-natural-numbers]]) and a sequence is indexed from $0$
([[def-sequence]]); an index range copied from a text that starts at $1$ must be
shifted before it is used here. The **range** of $(x_k)$ is
$\{\, x_k : k \in \mathbb{N} \,\}$. Following [[def-sequence]], a property of
indices holds **eventually** if it holds for all $k \ge K$ for some
$K \in \mathbb{N}$, and **frequently** if for every $K$ it holds for some
$k \ge K$; that vocabulary is used here for sequences in an arbitrary set.

Let $(x_k)$ be a sequence in $X$ and let $p \in X$.

- $(x_k)$ **converges to $p$**, written $x_k \to p$, if for every neighbourhood
  $N$ of $p$ one has $x_k \in N$ eventually. The point $p$ is then called **a
  limit of $(x_k)$**.
- $p$ is a **cluster point** of $(x_k)$ if for every neighbourhood $N$ of $p$ one
  has $x_k \in N$ frequently.
- For $A \subseteq X$, the **sequential closure** of $A$ is
  $$\operatorname{seqcl}(A) := \{\, p \in X : x_k \to p \text{ for some sequence } (x_k) \text{ with } x_k \in A \text{ for all } k \,\} .$$
- A function $f : X \to Y$ into a topological space $Y$ is **sequentially
  continuous at $p$** if $x_k \to p$ in $X$ implies $f(x_k) \to f(p)$ in $Y$, and
  **sequentially continuous** if it is sequentially continuous at every point of
  $X$ ([[def-continuous-map-top]] for the ordinary notion).

**The notation $\lim_k x_k$ is not available at this generality, and the reason
is not fastidiousness.** In a general topological space a sequence may converge
to more than one point, so there is no function taking a convergent sequence to
"its" limit, and a symbol $\lim_k x_k$ would not denote. In the indiscrete
topology on a set with at least two points the only neighbourhood of any point is
$X$, so **every** sequence converges to **every** point; in the cofinite topology
on an infinite set every injective sequence converges to every point. Both
witnesses are on the companion page. Accordingly this library writes "$p$ is *a*
limit of $(x_k)$" and "$(x_k)$ converges to $p$", never "*the* limit" and never
$\lim_k x_k$, for a sequence in a space that has not been given a hypothesis
restoring uniqueness.

**Where the notation becomes legitimate again.** Uniqueness of limits is what
licenses the symbol, exactly as it does for sequences of reals
([[lem-limit-unique]]) and in a metric space ([[lem-metric-limits-unique]]): in a
metric space a sequence has at most one limit and $\lim_k x_k$ is unambiguous.
Every metrizable space therefore admits the notation, and so does every space in
which distinct points have disjoint neighbourhoods; where this page uses a
metrizable space, and only there, the usual notation is used without further
comment. The general reading of "$x_k \to p$" above never presupposes it.

**Convergence agrees with the metric notion on a metric topology.** For a metric
space the balls around $p$ are a neighbourhood base at $p$
([[lem-metric-ball-neighbourhood-base]]), so "eventually in every neighbourhood
of $p$" and "eventually in every ball around $p$" are the same condition, and the
latter is [[def-metric-convergence]]. The identification is carried out where
metrizable spaces are defined, later on this page.

### `def-standard-topologies` — definition — The discrete, indiscrete, cofinite, cocountable, particular-point and Sierpinski topologies

(statement provenance: ai-altered)

### Definition

Throughout, a topology is as in [[def-topological-space]], and *finite*,
*at most countable* and *uncountable* are as in [[def-countable]], so that
"countable" always means "at most countable" and every finite set is countable.
Let $X$ be a set. The six families below are topologies on $X$; that each really
satisfies (T1), (T2) and (T3) is discharged in full after the list.

1. **Discrete topology.** $\mathcal{T}_{\mathrm{disc}} := \mathcal{P}(X)$: every
   subset is open, hence every subset is closed, hence every subset is clopen.
2. **Indiscrete topology.** $\mathcal{T}_{\mathrm{ind}} := \{\varnothing, X\}$.
   Its closed sets are again $\varnothing$ and $X$.
3. **Cofinite topology.**
   $\mathcal{T}_{\mathrm{cof}} := \{\varnothing\} \cup \{\, U \subseteq X : X \setminus U \text{ is finite} \,\}$.
   Its closed sets are $X$ together with the finite subsets of $X$.
4. **Cocountable topology.**
   $\mathcal{T}_{\mathrm{coc}} := \{\varnothing\} \cup \{\, U \subseteq X : X \setminus U \text{ is at most countable} \,\}$.
   Its closed sets are $X$ together with the at most countable subsets of $X$.
5. **Particular-point topology.** Fix $p \in X$ and put
   $\mathcal{T}_p := \{\varnothing\} \cup \{\, U \subseteq X : p \in U \,\}$: the
   open sets are $\varnothing$ and the sets containing $p$. Its closed sets are
   $X$ together with the sets **not** containing $p$.
6. **Sierpinski topology.** On a two-point set $S = \{a, b\}$ with $a \ne b$,
   $\mathcal{T}_{\mathrm{Sier}} := \{\varnothing, \{b\}, S\}$. The pair
   $(S, \mathcal{T}_{\mathrm{Sier}})$ is **Sierpinski space**; $b$ is its open
   point and $a$ its closed point. This is exactly the particular-point topology
   of item 5 on a two-point set with particular point $b$, listed separately
   because it is quoted so often.

**Two elementary facts about finite sets are used below, and both are proved
here.**

*(i) A subset of a finite set is finite.* Let $F \approx n$ with $n \in \mathbb{N}$
([[def-equinumerous]], [[def-natural-numbers]]), witnessed by a bijection
$\varphi : F \to n$, and let $B \subseteq F$. Then $\varphi$ restricts to a
bijection of $B$ onto $\varphi[B] \subseteq n$
([[def-injection-surjection-bijection]]). Every element of the von Neumann natural
$n$ is a natural number strictly smaller than $n$
([[lem-nat-order-is-membership]]), so $\varphi[B]$ is a subset of $\mathbb{N}$
bounded above by $n$, hence finite by the sharper form of
[[lem-subset-of-countable]] ("a subset $S \subseteq \mathbb{N}$ is finite if it is
bounded above"). Since $\approx$ is symmetric and transitive, $B$ is finite.

*(ii) A union of two finite sets is finite.* First, if $H$ is finite and $g$ is
any object then $H \cup \{g\}$ is finite: if $g \in H$ there is nothing to prove,
and otherwise a bijection $u : H \to k$ extends to a bijection
$H \cup \{g\} \to k \cup \{k\} = \sigma(k)$ by setting $u(g) := k$, which is
injective because $k \notin k$ ([[lem-nat-transitive-irreflexive]]). Now fix a
finite set $F$ and argue by induction ([[thm-induction-principle]]) on
$m \in \mathbb{N}$ over the statement "for every $G$ with $G \approx m$, the union
$F \cup G$ is finite". At $m = 0$ we have $G = \varnothing$ and $F \cup G = F$. At
$m = \sigma(j)$, a bijection $\psi : G \to \sigma(j)$ gives $g := \psi^{-1}(j)$
and $G' := G \setminus \{g\} \approx j$ (restrict $\psi$), so
$F \cup G = (F \cup G') \cup \{g\}$ is finite by the induction hypothesis and the
previous sentence.

**Discharge of the topology axioms.**

*Discrete.* Every subset of $X$ lies in $\mathcal{P}(X)$, so (T1), (T2) and (T3)
hold with nothing to check.

*Indiscrete.* (T1) is the definition. For (T2), a subfamily of
$\{\varnothing, X\}$ has union $\varnothing$ (if it is empty or $\{\varnothing\}$)
or $X$ (otherwise). For (T3), $\varnothing \cap A = \varnothing$ and
$X \cap X = X$.

*Cofinite.* (T1): $\varnothing$ is listed, and $X \setminus X = \varnothing$ is
finite. (T2): let $\mathcal{S} \subseteq \mathcal{T}_{\mathrm{cof}}$. If every
member is $\varnothing$ the union is $\varnothing$. Otherwise fix
$U_0 \in \mathcal{S}$ with $U_0 \ne \varnothing$; then
$X \setminus \bigcup \mathcal{S} \subseteq X \setminus U_0$, which is finite, so
the left side is finite by (i). (T3): for nonempty $U, V$ with finite
complements, $X \setminus (U \cap V) = (X \setminus U) \cup (X \setminus V)$ is
finite by (ii); and if either of $U, V$ is empty so is $U \cap V$. The closed sets
are the complements of the open ones, that is $X = X \setminus \varnothing$
together with the finite sets.

*Cocountable.* Identical to the cofinite case with "at most countable" in place of
"finite": (i) is replaced by [[lem-subset-of-countable]] itself, and (ii) by the
statement that a union of two at most countable sets is at most countable, which
is the two-set instance of [[thm-countable-union-of-countable]] applied to the
family $A_0 := U, A_1 := V, A_k := \varnothing$ for $k \ge 2$.

*Particular point.* (T1): $\varnothing$ is listed and $p \in X$. (T2): a
subfamily whose members are all $\varnothing$ has union $\varnothing$; otherwise
some member contains $p$, hence so does the union. (T3): if $U$ and $V$ both
contain $p$ then so does $U \cap V$; and if either is $\varnothing$ then so is the
intersection.

*Sierpinski.* The special case $X = \{a,b\}$, $p = b$ of the previous paragraph:
the sets containing $b$ are $\{b\}$ and $S$, so
$\mathcal{T}_b = \{\varnothing, \{b\}, S\} = \mathcal{T}_{\mathrm{Sier}}$.

### `thm-product-universal-property` — theorem — A map into a product is continuous iff each of its components is; the projections are continuous and open; and each projection is surjective when every factor is nonempty, which for an infinite index set uses the Axiom of Choice

(statement provenance: ai-altered)

### Statement

Let $(X_i, \mathcal{T}_i)_{i \in I}$ be topological spaces and let
$P := \prod_{i \in I} X_i$ carry the product topology, with projections $\pi_j$
([[def-product-topology]]). Then:

1. **The projections are continuous**, and the product topology is the coarsest
   topology on $P$ making all of them continuous.
2. **Characteristic property.** For every space $Z$ and every function
   $h : Z \to P$,
   $$h \text{ is continuous } \iff \pi_i \circ h \text{ is continuous for every } i \in I .$$
   The functions $\pi_i \circ h$ are the **components** of $h$, and every family
   of functions $h_i : Z \to X_i$ arises from exactly one $h$, namely
   $h(z)(i) := h_i(z)$.
3. **The projections are open maps** ([[def-homeomorphism-and-open-maps]]), for
   the product topology and for the box topology alike. They need not be closed;
   that failure is recorded on this page as a false statement.
4. **Surjectivity.** If every $X_i$ is nonempty then every $\pi_j$ is surjective.
   For $I$ a natural number this is a theorem of ZF ([[lem-finite-choice]]); for
   an arbitrary $I$ it is the Axiom of Choice ([[def-axiom-of-choice]]), and this
   is the only place in the item where a choice principle is used.

### `thm-continuity-characterised-by-nets` — theorem — A map of topological spaces is continuous at a point if and only if it preserves every net converging to that point

(statement provenance: literature-derived)

### Statement

Let $f:X\to Y$ and $p\in X$. Then $f$ is continuous at $p$ if and only if, for every net $x_d\to p$ in $X$, the net $f(x_d)$ converges to $f(p)$ in $Y$.

## What to return

Read `ex-coordinate-reading-sequence-has-subnets-but-no-convergent-subsequence` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
