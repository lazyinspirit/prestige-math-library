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

# Adversarial proof reading — `ex-the-ordinal-spaces-omega-plus-one-and-omega-one`

## The item under review, in full

`items/ex-the-ordinal-spaces-omega-plus-one-and-omega-one.md`

```markdown
---
id: ex-the-ordinal-spaces-omega-plus-one-and-omega-one
kind: example
title: "$\\omega + 1$ as a convergent sequence together with its limit, and, assuming countable choice, $[0, \\omega_1)$, in which every sequence lies inside an at most countable initial segment"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-order-topology-on-an-ordinal, lem-ordinal-order-topology-is-t3,
       def-first-uncountable-ordinal, thm-omega-one-is-the-least-uncountable-ordinal,
       thm-countable-subsets-of-omega-one-are-bounded, def-cofinal-subset-of-an-ordinal,
       def-ordinal-addition, def-limit-ordinal, lem-omega-least-limit-ordinal,
       def-sequence-convergence-top, def-countable, lem-countable-iff-surjection-from-n,
       def-countable-choice, lem-ordinal-basics, lem-ordinal-trichotomy, def-ordinal,
       def-topological-space]
justified_by: []
aliases: []
landmark: false
short: "the ordinal spaces $\\omega+1$ and $[0,\\omega_1)$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Order topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Order_topology"
    - title: "First uncountable ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
    - title: "L. Steen and J. Seebach, Counterexamples in Topology, §39-43"
      url: "https://en.wikipedia.org/wiki/Counterexamples_in_Topology"
pipeline_run: null
---

## Example

Give every ordinal its order topology ([[def-order-topology-on-an-ordinal]]),
under which it is $T_3$ — that is $T_1$, Hausdorff and regular
([[lem-ordinal-order-topology-is-t3]]). Two ordinals are worked here.

**The space $\omega + 1$.** By the successor clause of ordinal addition
([[def-ordinal-addition]]), $\omega + 1 = \omega^{+} = \omega \cup \{\omega\}$,
so the space is the set of natural numbers together with one extra point on top
([[lem-omega-least-limit-ordinal]]). Then:

1. Every $n \in \omega$ is isolated: $\{0\} = [0,0]$ and
   $\{m^{+}\} = (m, m^{+}]$ are basic open sets.
2. The sequence $x_k := k$ ($k \in \mathbb{N}$) converges to $\omega$
   ([[def-sequence-convergence-top]]), and it converges to no other point of
   $\omega+1$.

So $\omega + 1$ is, as a topological space, exactly a convergent sequence
together with its limit, and $\omega$ is its unique non-isolated point.

**The space $[0,\omega_1) = \omega_1$.** Let $\omega_1$ be the first uncountable
ordinal ([[def-first-uncountable-ordinal]]), so that $\omega_1$ is a limit
ordinal, every ordinal below it is at most countable, and $\omega_1$ itself is
uncountable ([[thm-omega-one-is-the-least-uncountable-ordinal]]). As a set,
$[0,\omega_1)$ *is* $\omega_1$, an ordinal being the set of ordinals below it
([[def-ordinal]]). **Assuming the Axiom of Countable Choice**
([[def-countable-choice]]):

3. Every sequence $(x_k)$ in $\omega_1$ has an at most countable range, so there
   is $\alpha < \omega_1$ with $x_k \le \alpha$ for all $k$; hence the whole
   sequence lies inside the initial segment
   $[0,\alpha] = \alpha^{+}$, which is an ordinal below $\omega_1$ and is at most
   countable.
4. Consequently no sequence in $\omega_1$ has a range cofinal in $\omega_1$
   ([[def-cofinal-subset-of-an-ordinal]]).

Clause 3 is the fact the deleted Tychonoff plank consumes, and it is the reason
$[0,\omega_1)$ behaves unlike any metrizable space: a sequence can never
approach the "top" of $\omega_1$, because there is no top to approach along a
sequence.

## Facts & Assumptions

**Given:** Ordinals with their order topologies; the natural numbers $\omega$; the first uncountable ordinal $\omega_1$; a sequence $(x_k)_{k \in \mathbb{N}}$ in $\omega_1$; and the Axiom of Countable Choice where stated.

[A1] The basic open sets of an ordinal $\gamma$ are $[0,\beta]$ for $\beta \in \gamma$ and $(\alpha,\beta]$ for $\alpha < \beta$ in $\gamma$; they form a basis ([[def-order-topology-on-an-ordinal]], [[def-topological-space]]).

[A2] $\alpha + 1 = \alpha^{+}$, by the clauses of ordinal addition at $0$ and at a successor ([[def-ordinal-addition]]).

[L1] $\omega$ is an ordinal and a limit ordinal, every element of $\omega$ is $0$ or a successor, and $m \in n$ is $m < n$ for naturals ([[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[lem-ordinal-basics]]).

[L2] $x_k \to p$ means: for every neighbourhood $N$ of $p$ there is $K$ with $x_k \in N$ for all $k \ge K$; an open set containing $p$ is such a neighbourhood ([[def-sequence-convergence-top]]).

[L3] $\omega_1$ is uncountable, is a limit ordinal, and every ordinal below it is at most countable ([[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-first-uncountable-ordinal]], [[def-countable]]).

[L4] Assuming $\mathrm{AC}_\omega$, every at most countable subset of $\omega_1$ is bounded below $\omega_1$: there is $\alpha \in \omega_1$ with $\xi \le \alpha$ for every $\xi$ in the subset ([[thm-countable-subsets-of-omega-one-are-bounded]], [[def-countable-choice]]).

[L5] The range of a sequence is nonempty and at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L6] For ordinals exactly one of $\xi < \eta$, $\xi = \eta$, $\eta < \xi$ holds; $\alpha^{+}$ is an ordinal, and $\alpha^{+} = \{\, \xi : \xi \le \alpha \,\}$ ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-ordinal]]).

[L7] A subset $S$ of a limit ordinal $\gamma$ is cofinal in $\gamma$ when for every $\xi \in \gamma$ there is $\sigma \in S$ with $\xi \le \sigma$ ([[def-cofinal-subset-of-an-ordinal]]).

[L8] Every ordinal with its order topology is $T_1$, Hausdorff and regular ([[lem-ordinal-order-topology-is-t3]]).

## Verification

**Proof technique:** direct.

1.1 $\omega + 1 = \omega^{+} = \omega \cup \{\omega\}$ by [A2], so the points of the space are the natural numbers together with $\omega$. [A2, L1]

1.2 Let $N$ be a neighbourhood of $\omega$ in $\omega+1$; by [A1] and [L2] there is a basic set $B$ with $\omega \in B \subseteq N$, and $B$ is $[0,\beta]$ with $\omega \le \beta$ or $(\alpha,\beta]$ with $\alpha < \omega \le \beta$. In either case $(\alpha, \omega] \subseteq B$ for some $\alpha \in \omega$, taking $\alpha := 0$ in the first case. [A1, L2, L6]

1.3 Let $(x_k)$ be a sequence in $\omega_1$; its range $R := \{\, x_k : k \in \mathbb{N} \,\}$ is an at most countable subset of $\omega_1$ by [L5]. [L5]

2.1 Each $n \in \omega$ is $0$ or a successor $m^{+}$ by [L1]; in the first case $\{n\} = [0,0]$ and in the second $\{n\} = (m, m^{+}]$, both basic open sets of $\omega+1$ by [A1], since $0 \in \omega+1$ and $m < m^{+} = n$ in $\omega + 1$. So every $n \in \omega$ is isolated, which is claim 1. [step 1.1, A1, L1]

2.2 Under step 1.2: $\alpha \in \omega$, so for every $k > \alpha$ one has $\alpha < k \le \omega$ and hence $x_k = k \in (\alpha,\omega] \subseteq N$; so $x_k \to \omega$ by [L2]. [step 1.2, L1, L2, L6]

2.3 By [L4] there is $\alpha \in \omega_1$ with $\xi \le \alpha$ for every $\xi \in R$, hence $x_k \le \alpha$ for every $k$. [step 1.3, L4]

3.1 The sequence converges to no $n \in \omega$: by step 2.1 the set $\{n\}$ is an open neighbourhood of $n$, and $x_k = k \ne n$ for every $k > n$, so the sequence is not eventually in $\{n\}$. [step 2.1, L1, L2]

3.2 By [L6] the set $\alpha^{+} = \{\, \xi : \xi \le \alpha \,\}$ contains every $x_k$, and $\alpha^{+} \in \omega_1$ because $\omega_1$ is a limit ordinal and $\alpha \in \omega_1$; so $\alpha^{+}$ is an ordinal below $\omega_1$ and is at most countable by [L3]. This is claim 3. [step 2.3, L3, L6]

4.1 Steps 2.2 and 3.1 are claim 2. [step 2.2, step 3.1]

4.2 If some sequence had range cofinal in $\omega_1$, then by [L7] every $\xi \in \omega_1$ would satisfy $\xi \le x_k$ for some $k$; taking $\xi := \alpha^{+}$ of step 3.2 gives $\alpha^{+} \le x_k \le \alpha$ for some $k$, contradicting $\alpha < \alpha^{+}$ by [L6]. So claim 4 holds. [step 2.3, step 3.2, L6, L7]

5.1 Both spaces are $T_3$ by [L8], and steps 2.1, 4.1, 3.2 and 4.2 are claims 1 to 4. [step 2.1, step 4.1, step 3.2, step 4.2, L8] ∎

## Remarks

- **$\omega + 1$ is the smallest interesting ordinal space.** Every ordinal $\gamma \le \omega$ is discrete ([[def-order-topology-on-an-ordinal]]), so $\omega+1$ is where a non-isolated point appears for the first time, and it appears as the limit of the obvious sequence.

- **Clause 3 is where the countable choice enters and where it stays.** It is inherited from [[thm-countable-subsets-of-omega-one-are-bounded]] and from nothing else on this page; clauses 1, 2 and the $T_3$ property of both spaces are theorems of ZF ([[lem-ordinal-order-topology-is-t3]]).

- **What clause 4 rules out.** No sequence in $[0,\omega_1)$ can be used to approximate the space from below, which is why arguments about $\omega_1$ are written with arbitrary at most countable sets rather than with sequences, and why the plank argument on this page bounds a *set* of ordinals rather than taking a limit of a sequence.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-order-topology-on-an-ordinal` — definition — The order topology on an ordinal, with the half-open intervals $(\\alpha, \\beta]$ and the initial segments $[0, \\beta]$ as a basis

(statement provenance: ai-altered)

### Definition

Let $\gamma$ be an ordinal ([[def-ordinal]]). Since $\gamma$ is the set of
ordinals below it and $\xi < \eta$ means $\xi \in \eta$, the following two
families of subsets of $\gamma$ are defined for $\beta \in \gamma$ and
$\alpha \in \gamma$:

$$[0,\beta] \;:=\; \{\, \xi \in \gamma : \xi \le \beta \,\} \;=\; \beta^{+}, \qquad (\alpha,\beta] \;:=\; \{\, \xi \in \gamma : \alpha < \xi \le \beta \,\} \;=\; \beta^{+} \setminus \alpha^{+} .$$

Both identifications are immediate: $\beta^{+} = \beta \cup \{\beta\}$ is the set
of ordinals $\le \beta$, and it is a subset of $\gamma$ because $\gamma$ is
transitive and $\beta \in \gamma$ ([[def-ordinal]], [[lem-ordinal-basics]]).

Put

$$\mathcal{B}_\gamma \;:=\; \{\, [0,\beta] : \beta \in \gamma \,\} \;\cup\; \{\, (\alpha,\beta] : \alpha, \beta \in \gamma,\ \alpha < \beta \,\} .$$

**$\mathcal{B}_\gamma$ is a basis for a unique topology on $\gamma$**
([[thm-basis-criterion]], [[def-topology-basis-subbasis]]), and that topology is
the **order topology on $\gamma$**. The obligation is discharged here.

*(B1), covering.* If $\xi \in \gamma$ then $\xi \in [0,\xi] \in \mathcal{B}_\gamma$,
so $\bigcup \mathcal{B}_\gamma = \gamma$. For $\gamma = 0 = \varnothing$ the
family is empty and $\bigcup \varnothing = \varnothing = \gamma$, so (B1) holds
there too.

*(B2), intersections.* By trichotomy of the ordinals ([[lem-ordinal-trichotomy]])
any two ordinals have a maximum and a minimum, namely the larger and the smaller
of the two, and for $\alpha_1, \alpha_2, \beta_1, \beta_2 \in \gamma$:

- $[0,\beta_1] \cap [0,\beta_2] = [0, \min\{\beta_1,\beta_2\}]$;
- $[0,\beta_1] \cap (\alpha_2,\beta_2] = (\alpha_2, \min\{\beta_1,\beta_2\}]$ when
  $\alpha_2 < \min\{\beta_1,\beta_2\}$, and $\varnothing$ otherwise;
- $(\alpha_1,\beta_1] \cap (\alpha_2,\beta_2] = (\max\{\alpha_1,\alpha_2\},\ \min\{\beta_1,\beta_2\}]$
  when $\max\{\alpha_1,\alpha_2\} < \min\{\beta_1,\beta_2\}$, and $\varnothing$
  otherwise.

In each case the intersection is either a member of $\mathcal{B}_\gamma$ or
empty, and in the empty case (B2) is vacuous, having no point to test. So (B2)
holds, and [[thm-basis-criterion]] supplies the topology and its uniqueness.

**This definition is for ordinals only, and it says so.** The general order
topology of a linearly ordered set takes the open intervals, together with the
initial and final rays, as a basis. For an ordinal that family is the wrong one:
a successor $\beta^{+}$ has an immediate predecessor, so the smallest open
interval around it is already $\{\beta^{+}\}$, but no *interval* of the form
$(\alpha,\eta)$ isolates $0$, and the initial segments must be supplied
separately. The family $\mathcal{B}_\gamma$ above is exactly the general order
basis for an ordinal, rewritten so that no case analysis is needed; nothing here
claims to define the order topology of an arbitrary linearly ordered set, and no
statement on this page is about such a set.

**Isolated and non-isolated points.** Every ordinal is $0$, a successor, or a
limit ([[def-limit-ordinal]]). If $\xi = 0$ then $\{\xi\} = [0,0]$ is basic open;
if $\xi = \alpha^{+}$ then $\{\xi\} = (\alpha, \xi]$ is basic open; so every
non-limit point of $\gamma$ is isolated. If $\xi$ is a limit ordinal then every
basic set containing $\xi$ contains some $(\alpha,\xi]$ with $\alpha < \xi$, and
$\alpha^{+} < \xi$ because $\xi$ is a limit, so $\alpha^{+}$ is a second point of
that basic set; hence a limit point of $\gamma$ is not isolated. In particular
$\omega$, the least limit ordinal ([[lem-omega-least-limit-ordinal]]), is the
unique non-isolated point of $\omega + 1$, and every ordinal $\gamma \le \omega$
carries the discrete topology ([[def-standard-topologies]]).

### `lem-ordinal-order-topology-is-t3` — lemma — Every ordinal with its order topology has a basis of clopen sets, and is $T_1$, Hausdorff and regular

(statement provenance: ai-altered)

### Statement

Let $\gamma$ be an ordinal ([[def-ordinal]]) with its order topology
([[def-order-topology-on-an-ordinal]]), whose basis is
$\mathcal{B}_\gamma$. Then:

1. Every member of $\mathcal{B}_\gamma$ is **clopen** in $\gamma$
   ([[def-topological-space]]), so $\gamma$ has a basis of clopen sets.
2. $\gamma$ is $T_1$ ([[def-t0-and-t1-spaces]]).
3. $\gamma$ is Hausdorff ([[def-hausdorff-space]]).
4. $\gamma$ is regular ([[def-regular-and-t3-spaces]]), and therefore $T_3$.

### `def-first-uncountable-ordinal` — definition — The first uncountable ordinal $\\omega_1 := \\aleph(\\omega)$

(statement provenance: literature-derived)

### Definition

The **first uncountable ordinal** is

$$\omega_1 \;:=\; \aleph(\omega),$$

the Hartogs number of $\mathbb{N} = \omega$ ([[thm-hartogs]],
[[def-natural-numbers]]): the least ordinal ([[def-ordinal]]) that admits no
injective function into $\mathbb{N}$. Equivalently, by that theorem,
$\omega_1$ is the set of order types of the well-ordered subsets of
$\mathbb{N}$.

**Existence is a theorem of ZF.** [[thm-hartogs]] is choice free, so $\omega_1$
is available without any choice principle, and its defining property needs
none either.

**"Uncountable" is [[def-countable]]'s word**, meaning "not at most countable",
and it is not redefined here. That $\omega_1$ deserves the name — that it is
uncountable, that every ordinal below it is at most countable, that it is a
cardinal and a limit ordinal — is proved in
[[thm-omega-one-is-the-least-uncountable-ordinal]], which is what discharges the
naming obligation of this definition.

### `thm-omega-one-is-the-least-uncountable-ordinal` — theorem — $\\omega_1$ is uncountable, every ordinal below it is at most countable, it is a cardinal and a limit ordinal, and its existence is a theorem of ZF

(statement provenance: ai-altered)

### Statement

Let $\omega_1 = \aleph(\omega)$ ([[def-first-uncountable-ordinal]]). Then:

**(a) The bridge.** An ordinal $\alpha$ ([[def-ordinal]]) injects into
$\mathbb{N}$ if and only if $\alpha$ is at most countable
([[def-countable]]).

**(b)** $\omega_1$ is **uncountable**.

**(c)** Every ordinal $\alpha \in \omega_1$ is at most countable; so $\omega_1$
is the least uncountable ordinal.

**(d)** $\omega_1$ is a **cardinal**, that is an initial ordinal
([[def-cardinal]]): no $\alpha \in \omega_1$ is equinumerous with $\omega_1$.

**(e)** $\omega_1$ is a **limit ordinal** ([[def-limit-ordinal]]).

**All of this is a theorem of ZF and uses no choice principle.** That matters
here and is stated deliberately: [[thm-hartogs]] is choice free,
[[lem-subset-of-countable]] and [[lem-countable-iff-surjection-from-n]] are
choice free, so $\omega_1$ and every property listed above exist in ZF alone.
The cost begins two items later on this page, at the boundedness theorem for at
most countable subsets of $\omega_1$, which genuinely needs countable choice.

### `thm-countable-subsets-of-omega-one-are-bounded` — theorem — Assuming countable choice: every at most countable subset of $\\omega_1$ is bounded below $\\omega_1$, so no at most countable subset of $\\omega_1$ is cofinal in it, and a supremum of at most countably many at most countable ordinals is at most countable

(statement provenance: ai-altered)

### Statement

**Assume the Axiom of Countable Choice $\mathrm{AC}_\omega$**
([[def-countable-choice]]). Let $\omega_1$ be the first uncountable ordinal
([[def-first-uncountable-ordinal]]). Then:

**(a) Boundedness.** Every at most countable ([[def-countable]]) subset
$A \subseteq \omega_1$ is bounded below $\omega_1$: the ordinal
$\sup A = \bigcup A$ lies in $\omega_1$ and satisfies $\alpha \le \sup A$ for
every $\alpha \in A$.

**(b) No small cofinal set.** No at most countable subset of $\omega_1$ is
cofinal in $\omega_1$ ([[def-cofinal-subset-of-an-ordinal]]).

**(c) Suprema stay countable.** If $A$ is an at most countable set of at most
countable ordinals, then $\sup A = \bigcup A$ is an at most countable ordinal.

**The hypothesis is not decoration.** $\mathrm{AC}_\omega$ is spent at exactly
one step, step 1.2 below, and it is spent there only through
[[thm-countable-union-of-countable]], whose own statement carries the same
hypothesis. Everything else on this page, including the existence of $\omega_1$
and all of [[thm-omega-one-is-the-least-uncountable-ordinal]], is a theorem of
ZF. The ledger is the choice-ledger remark at the end of this page.

### `def-cofinal-subset-of-an-ordinal` — definition — Cofinal subset of an ordinal

(statement provenance: ai-altered)

### Definition

Let $\alpha$ be an ordinal ([[def-ordinal]]). A subset $C \subseteq \alpha$ is
**cofinal in $\alpha$**, equivalently **unbounded in $\alpha$**, when

$$\text{for every } \xi \in \alpha \text{ there is } \eta \in C \text{ with } \xi \le \eta.$$

A subset that is not cofinal is **bounded below $\alpha$**: there is
$\xi \in \alpha$ such that $\eta < \xi$ for every $\eta \in C$.

### `def-ordinal-addition` — definition — Ordinal addition $\\alpha + \\beta$

(statement provenance: literature-derived)

### Definition

Let $\alpha$ and $\beta$ be ordinals ([[def-ordinal]]). The **sum**
$\alpha + \beta$ is defined by recursion on $\beta$, in the three cases of
[[def-limit-ordinal]]:

$$\alpha + 0 = \alpha, \qquad \alpha + \beta^{+} = (\alpha + \beta)^{+}, \qquad \alpha + \lambda = \bigcup\{\, \alpha + \beta : \beta \in \lambda \,\} \quad (\lambda \text{ a limit ordinal}).$$

That exactly one operation satisfies these three clauses, and that all its
values are ordinals, is [[cor-ordinal-addition-well-defined]], proved
immediately above. The union in the limit clause is the least upper bound of the
values already produced (claim (e) of [[lem-ordinal-basics]]), so it may be
written $\sup$ and the clause read as "at a limit, take the supremum".

**Notation.** We write $1 = 0^{+}$, $2 = 1^{+}$, and so on for the finite
ordinals, and $\sup$ for $\bigcup$ applied to a set of ordinals. The successor
operation is now a special case of addition:

$$\alpha + 1 = \alpha + 0^{+} = (\alpha + 0)^{+} = \alpha^{+},$$

so from here on $\alpha + 1$ and $\alpha^{+}$ denote the same ordinal, and both
notations are used, whichever reads better.

### `def-limit-ordinal` — definition — Successor and limit ordinals

(statement provenance: literature-derived)

### Definition

Let $\alpha$ be an ordinal ([[def-ordinal]]).

- $\alpha$ is a **successor ordinal** when $\alpha = \beta^{+} = \beta \cup \{\beta\}$
  for some ordinal $\beta$, which is then an ordinal by [[lem-ordinal-basics]];
- $\alpha$ is a **limit ordinal** when $\alpha \ne 0$ and $\alpha$ is not a
  successor ordinal.

Every ordinal is therefore exactly one of: $0$, a successor ordinal, or a limit
ordinal. The three cases are the three clauses of a definition or a proof by
transfinite recursion or induction over the ordinals.

### `lem-omega-least-limit-ordinal` — lemma — $\\omega$ is the least limit ordinal

(statement provenance: ai-altered)

### Statement

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

### `def-countable` — definition — Finite, countably infinite, countable, uncountable

(statement provenance: ai-altered)

### Definition

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

### `lem-countable-iff-surjection-from-n` — lemma — A nonempty set is at most countable iff it is a surjective image of $\\mathbb{N}$

(statement provenance: ai-altered)

### Statement

Let $A$ be a nonempty set. Then $A$ is at most countable ([[def-countable]]) if
and only if there is a surjection $s : \mathbb{N} \to A$
([[def-injection-surjection-bijection]]).

Moreover, from any such surjection an injection $A \to \mathbb{N}$ is obtained
explicitly, without any choice, by

$$j(a) := \min\{\, k \in \mathbb{N} : s(k) = a \,\}.$$

This is the working form of countability used everywhere below: to prove a
nonempty set countable it suffices to list its elements, repetitions and all.

**No choice principle is used.** The backward direction is where an appeal to
choice would be natural ("for each $a$ pick some $k$ with $s(k) = a$") and it is
avoided outright, because $\min$ is canonical: every nonempty set of naturals has
a *least* element ([[thm-well-ordering-principle]]), so $j(a)$ is determined by
$a$ and $s$ alone.

### `def-countable-choice` — definition — The Axiom of Countable Choice ($\\mathrm{AC}_\\omega$)

(statement provenance: ai-altered)

### Definition

The **Axiom of Countable Choice**, written $\mathrm{AC}_\omega$, is the following
statement.

> For every family $(X_n)_{n \in \mathbb{N}}$ of nonempty sets indexed by
> $\mathbb{N}$ there is a function $f$ with domain $\mathbb{N}$ such that
> $f(n) \in X_n$ for every $n \in \mathbb{N}$.

Equivalently, in the vocabulary of [[def-choice-function]]: every at most
countable family of nonempty sets ([[def-countable]]) has a choice function.

### `lem-ordinal-basics` — lemma — Basic closure properties of ordinals

(statement provenance: ai-altered)

### Statement

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

### `lem-ordinal-trichotomy` — lemma — Trichotomy and well-ordering of the ordinals

(statement provenance: literature-derived)

### Statement

For ordinals $\alpha$ and $\beta$ ([[def-ordinal]]), **exactly one** of

$$\alpha \in \beta, \qquad \alpha = \beta, \qquad \beta \in \alpha$$

holds. Moreover every nonempty **set** $A$ of ordinals has an $\in$-least
element, and consequently $A$ ordered by
$\alpha \le \beta :\iff \alpha \subseteq \beta$ is a well-order
([[def-well-order]]) whose strict part is membership.

So the ordinals are linearly ordered by $\in$, every set of them is well
ordered, and [[thm-transfinite-induction]] is available on any such set. No
choice principle is used.

### `def-ordinal` — definition — Ordinal (von Neumann)

(statement provenance: literature-derived)

### Definition

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

### `def-topological-space` — definition — Topology on a set, open and closed sets, clopen sets, the closed-set axiomatisation, and the coarser/finer comparison

(statement provenance: ai-altered)

### Definition

Let $X$ be a set and write $\mathcal{P}(X)$ for its power set. A **topology** on
$X$ is a family $\mathcal{T} \subseteq \mathcal{P}(X)$ such that

- **(T1)** $\varnothing \in \mathcal{T}$ and $X \in \mathcal{T}$;
- **(T2)** $\bigcup \mathcal{S} \in \mathcal{T}$ for every $\mathcal{S} \subseteq \mathcal{T}$;
- **(T3)** $U \cap V \in \mathcal{T}$ for all $U, V \in \mathcal{T}$.

A **topological space** is a pair $(X, \mathcal{T})$ consisting of a set $X$ and
a topology $\mathcal{T}$ on it; the elements of $X$ are its **points**. When only
one topology is in play we write $X$ for the pair; when several are, the topology
is always named.

The members of $\mathcal{T}$ are the **open** sets of $(X,\mathcal{T})$. A subset
$F \subseteq X$ is **closed** when its complement $X \setminus F$ is open, and
**clopen** when it is both open and closed. By (T1) both $\varnothing$ and $X$
are clopen. *Open and closed are not opposites*: a set may be neither, and it may
be both, so "not open" is never a synonym for "closed".

**Finite intersections, and the empty one.** Axiom (T3) is stated for two sets
because that is all that is ever needed: if $n \ge 1$ and
$U_1, \dots, U_n \in \mathcal{T}$, then $U_1 \cap \dots \cap U_n \in \mathcal{T}$
follows by iterating (T3) $n-1$ times. The intersection of the **empty** family
of subsets of $X$ is $X$, since the condition "lies in every member of the empty
family" is vacuous; that case is covered by (T1) rather than by (T3), which is
one of the two reasons $X \in \mathcal{T}$ is demanded outright. The other is
that (T2) alone gives only $\bigcup \varnothing = \varnothing$.

**The closed sets, and the dual axiomatisation.** Put
$\mathcal{C} := \{\, X \setminus U : U \in \mathcal{T} \,\}$, the family of closed
sets. Then

- **(C1)** $\varnothing \in \mathcal{C}$ and $X \in \mathcal{C}$;
- **(C2)** $\bigcap \mathcal{D} \in \mathcal{C}$ for every **nonempty**
  $\mathcal{D} \subseteq \mathcal{C}$;
- **(C3)** $C \cup D \in \mathcal{C}$ for all $C, D \in \mathcal{C}$.

Conversely, if a family $\mathcal{C} \subseteq \mathcal{P}(X)$ satisfies (C1),
(C2) and (C3), then $\mathcal{T} := \{\, X \setminus C : C \in \mathcal{C} \,\}$
is a topology on $X$ whose closed sets are exactly the members of $\mathcal{C}$.
So a topology may be presented equally well by its open sets or by its closed
sets, and this library uses whichever is shorter.

*Both directions are one computation, and it is carried out here rather than
assumed.* The map $U \mapsto X \setminus U$ is an involution of
$\mathcal{P}(X)$, hence a bijection, and it carries the two De Morgan identities

$$X \setminus \bigcup_{i \in I} A_i = \bigcap_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing), \qquad X \setminus \bigcap_{i \in I} A_i = \bigcup_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing)$$

term by term into each other. Given (T1)–(T3): $\varnothing = X \setminus X$ and
$X = X \setminus \varnothing$ lie in $\mathcal{C}$, which is (C1); for nonempty
$\mathcal{D} \subseteq \mathcal{C}$ the family
$\mathcal{S} = \{\, X \setminus C : C \in \mathcal{D} \,\}$ lies in $\mathcal{T}$
and $\bigcap \mathcal{D} = X \setminus \bigcup \mathcal{S}$ is closed by (T2),
which is (C2); and $C \cup D = X \setminus ((X \setminus C) \cap (X \setminus D))$
is closed by (T3), which is (C3). Given (C1)–(C3) the same three lines run
backwards, the empty-union case $\bigcup \varnothing = \varnothing$ being supplied
by (C1) rather than by (C2); and $\{\, X \setminus C : C \in \mathcal{C} \,\}$ has
$\mathcal{C}$ as its family of complements because complementation is an
involution.

**Comparison of topologies.** If $\mathcal{T}_1$ and $\mathcal{T}_2$ are
topologies on the same set $X$ and $\mathcal{T}_1 \subseteq \mathcal{T}_2$, then
$\mathcal{T}_1$ is **coarser** than $\mathcal{T}_2$ and $\mathcal{T}_2$ is
**finer** than $\mathcal{T}_1$; the comparison is **strict** when the inclusion
is. Inclusion is a partial order on the set of topologies on $X$
([[def-partial-order]]), and it is not a total one: two topologies on the same
set may be incomparable.

## What to return

Read `ex-the-ordinal-spaces-omega-plus-one-and-omega-one` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
