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

# Adversarial proof reading — `ex-finite-subset-net-for-unordered-real-summation`

## The item under review, in full

`items/ex-finite-subset-net-for-unordered-real-summation.md`

```markdown
---
id: ex-finite-subset-net-for-unordered-real-summation
kind: example
title: "Finite partial sums of a real family form a net directed by inclusion"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-directed-set-and-net, def-net-convergence-and-cluster-point, def-sum-over-a-finite-index-set, thm-sum-rule, def-finite-cardinality]
aliases: []
landmark: true
proof_strategy: constructive
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
    - title: "Unconditional convergence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Unconditional_convergence"
    - title: "Net (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Net_(mathematics)"
pipeline_run: null
---

## Example

For a family $(a_i)_{i\in I}$ of real numbers, let $\operatorname{Fin}(I)$ be the finite subsets of $I$, ordered by inclusion, and put $s_F=\sum_{i\in F}a_i$. Then $(s_F)_{F\in\operatorname{Fin}(I)}$ is the **finite-subset net**. The family is **summable with sum $s$** when this net converges to $s$ in the usual topology of $\mathbb R$.

## Facts & Assumptions

**Given:** A real family $(a_i)_{i\in I}$.

[L1] A finite-index sum is independent of its enumeration ([[def-sum-over-a-finite-index-set]]).

[L2] A union of two finite sets is finite, and sums split across disjoint finite sets ([[thm-sum-rule]]).

## Verification

**Proof technique:** constructive.

1.1 $\operatorname{Fin}(I)$ is nonempty because it contains $\varnothing$, and it is directed because $F\cup G$ is a finite upper bound of $F$ and $G$. [L2, construct]

1.2 Therefore $F\mapsto s_F$ is a net. If $F\subseteq G$, then $s_G=s_F+\sum_{i\in G\setminus F}a_i$, so later values add only terms not already counted. [L1, L2]

2.1 Thus the displayed finite partial sums form the announced net, and its convergence is a definition of unordered summability. [step 1.1, step 1.2, discharge-construct] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-directed-set-and-net` — definition — Directed preorders and nets

(statement provenance: literature-derived)

### Definition

A **directed preorder** is a nonempty set $D$ with a reflexive, transitive relation $\le$ such that every $d,e\in D$ have a common upper bound: some $f\in D$ satisfies $d\le f$ and $e\le f$. Antisymmetry is not required; thus this is a preorder obtained by omitting antisymmetry from the partial-order axioms of [[def-partial-order]].

If $X$ is the underlying set of a topological space ([[def-topological-space]]), a **net in $X$** indexed by $D$ is a function $x:D\to X$, written $(x_d)_{d\in D}$. The order on $D$ records which indices are sufficiently far along; it need not be a linear order.

### `def-net-convergence-and-cluster-point` — definition — Convergence and cluster points of a net in a topological space

(statement provenance: literature-derived)

### Definition

Let $x:D\to X$ be a net in a topological space $X$ and let $p\in X$.

- $x$ **converges to $p$**, written $x_d\to p$, if it is eventually in every neighbourhood of $p$ ([[def-neighbourhood-top]]).
- $p$ is a **cluster point** of $x$ if $x$ is frequently in every neighbourhood of $p$.

Convergence implies being a cluster point. If $x$ is eventually in a neighbourhood
$N$ after $d_0$, then for an arbitrary threshold $d$ choose a common upper bound
$e\ge d,d_0$; one has $x_e\in N$, so $x$ is frequently in $N$.

### `def-sum-over-a-finite-index-set` — definition — The sum $\\sum_{i \\in S} a_i$ over a finite index set, and its product form

(statement provenance: ai-altered)

### Definition

Let $S$ be a finite set, $n := \lvert S\rvert$ ([[def-finite-cardinality]]), and
let $a : S \to \mathbb{R}$ or $a : S \to \mathbb{N}$, written $a_i$ for $a(i)$.
Choose a bijection $\varphi : n \to S$, which exists because $S \approx n$
([[def-equinumerous]]), and set

$$\sum_{i \in S} a_i := \sum_{k<n} a_{\varphi(k)}, \qquad \prod_{i \in S} a_i := \prod_{k<n} a_{\varphi(k)},$$

the right-hand sides being the iterated operations of [[def-finite-sum]] when the
values are real and of [[def-nat-finite-sum-and-product]] when they are natural.

**Independence of the enumeration, which is the content of the definition.** Let
$\varphi, \psi : n \to S$ be two bijections. Then $\pi := \varphi^{-1} \circ \psi$
is a bijection $n \to n$ ([[def-injection-surjection-bijection]]), and
$a_{\psi(k)} = a_{\varphi(\pi(k))}$ for every $k < n$. Applying
[[lem-finite-sum-permutation-invariance]] to the list $c_k := a_{\varphi(k)}$
gives

$$\sum_{k<n} a_{\psi(k)} = \sum_{k<n} c_{\pi(k)} = \sum_{k<n} c_k = \sum_{k<n} a_{\varphi(k)},$$

and identically for products. So the value does not depend on which bijection is
used, and $\sum_{i \in S} a_i$ is a single well-determined element.

**No choice principle is involved.** The definition does not select an
enumeration: it asserts that all enumerations give the same value, and that value
is what the notation names. Only one bijection is ever produced at a time, from a
set already known to be nonempty.

**Three clauses, recorded here because the page uses them constantly.**

**(a) The bridge to the old notation.** Taking $S = n$ and $\varphi = \mathrm{id}_n$,
which is legitimate since $\lvert n\rvert = n$, gives

$$\sum_{i \in n} a_i = \sum_{k<n} a_k, \qquad \prod_{i \in n} a_i = \prod_{k<n} a_k .$$

So the new notation **extends** the sum over an initial segment rather than
competing with it, and every law proved for the latter is available for the
former whenever the index set is a natural number.

**(b) Reindexing along a bijection.** If $h : T \to S$ is a bijection of finite
sets, then $\sum_{j \in T} a_{h(j)} = \sum_{i \in S} a_i$, and likewise for
products. Indeed $\lvert T\rvert = \lvert S\rvert = n$ by transport
([[def-finite-cardinality]]), and if $\varphi : n \to S$ is a bijection then
$h^{-1} \circ \varphi : n \to T$ is one, so
$\sum_{j \in T} a_{h(j)} = \sum_{k<n} a_{h(h^{-1}(\varphi(k)))} = \sum_{k<n} a_{\varphi(k)} = \sum_{i \in S} a_i$.

**(c) The empty index set and a constant summand.** $\lvert\varnothing\rvert = 0$,
so $\sum_{i \in \varnothing} a_i = 0$ and $\prod_{i \in \varnothing} a_i = 1$ by
the base clause of the recursion. And for a constant $c$, clause (a) together
with the constant clause of [[lem-nat-finite-sum-laws-and-the-canonical-embedding]]
in $\mathbb{N}$, or clause 2 of [[lem-finite-sum-laws]] in $\mathbb{R}$, gives

$$\sum_{i \in S} c = \lvert S\rvert \cdot c \quad (c \in \mathbb{N}), \qquad \sum_{i \in S} c = \iota(\lvert S\rvert)\cdot c \quad (c \in \mathbb{R}),$$

the second with $\iota$ written out because $\lvert S\rvert$ is a natural number
and not an element of $\mathbb{R}$ ([[def-canonical-natural]]).

### `thm-sum-rule` — theorem — The sum rule: a finite disjoint union is finite with $\\lvert A \\cup B\\rvert = \\lvert A\\rvert + \\lvert B\\rvert$ and $\\lvert\\bigcup_{i \\in I} A_i\\rvert = \\sum_{i \\in I}\\lvert A_i\\rvert$, and a sum over a finite index set splits along a partition

(statement provenance: ai-altered)

### Statement

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

### `def-finite-cardinality` — definition — The cardinality $\\lvert A\\rvert$ of a finite set

(statement provenance: ai-altered)

### Definition

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

## What to return

Read `ex-finite-subset-net-for-unordered-real-summation` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
