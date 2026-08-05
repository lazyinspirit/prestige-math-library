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

# Adversarial proof reading — `cex-the-deleted-tychonoff-plank-is-not-normal`

## The item under review, in full

`items/cex-the-deleted-tychonoff-plank-is-not-normal.md`

```markdown
---
id: cex-the-deleted-tychonoff-plank-is-not-normal
kind: counterexample
title: "Refuted, assuming countable choice: every Hausdorff space built from ordinal spaces is normal. The deleted Tychonoff plank $((\\omega_1 + 1) \\times (\\omega + 1)) \\setminus \\{(\\omega_1, \\omega)\\}$ is Hausdorff and not normal"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-order-topology-on-an-ordinal, lem-ordinal-order-topology-is-t3,
       def-first-uncountable-ordinal, thm-omega-one-is-the-least-uncountable-ordinal,
       thm-countable-subsets-of-omega-one-are-bounded, def-cofinal-subset-of-an-ordinal,
       def-ordinal-addition, def-product-topology, def-subspace-topology-top,
       thm-subspace-closure-and-interior, def-normal-and-t4-spaces, def-hausdorff-space,
       def-t0-and-t1-spaces, def-interior-closure-boundary-top,
       thm-closure-characterisation-top, thm-basis-criterion, def-topology-basis-subbasis,
       def-countable, lem-countable-iff-surjection-from-n, def-countable-choice,
       lem-omega-least-limit-ordinal, def-limit-ordinal, lem-ordinal-basics,
       lem-ordinal-trichotomy, def-ordinal, def-topological-space]
justified_by: []
aliases: [cex-deleted-tychonoff-plank]
landmark: true
short: "the deleted Tychonoff plank is not normal"
proof_strategy: contradiction
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
    - title: "Tychonoff plank (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Tychonoff_plank"
    - title: "Normal space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Normal_space"
    - title: "L. Steen and J. Seebach, Counterexamples in Topology, §86-87"
      url: "https://en.wikipedia.org/wiki/Counterexamples_in_Topology"
    - title: "First uncountable ordinal (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/First_uncountable_ordinal"
pipeline_run: null
---

## Statement refuted

**False claim:** every Hausdorff space obtained from ordinals with their order
topologies ([[def-order-topology-on-an-ordinal]]) by forming a product
([[def-product-topology]]) and passing to a subspace
([[def-subspace-topology-top]]) is normal ([[def-normal-and-t4-spaces]]).

**The witness is the deleted Tychonoff plank.** Write $W := \omega_1 + 1$ and
$Z := \omega + 1$, which by the successor clause of ordinal addition
([[def-ordinal-addition]]) are $\omega_1^{+}$ and $\omega^{+}$; give each its
order topology and $W \times Z$ the product topology, and put

$$T \;:=\; (W \times Z) \setminus \{(\omega_1, \omega)\}$$

with the subspace topology. Then $T$ is Hausdorff ([[def-hausdorff-space]]) and
$T$ is **not** normal: the two sets

$$A \;:=\; \{\, (\omega_1, n) : n \in \omega \,\}, \qquad B \;:=\; \{\, (\xi, \omega) : \xi \in \omega_1 \,\}$$

are disjoint and closed in $T$ and have no disjoint open neighbourhoods.

**Assuming the Axiom of Countable Choice** ([[def-countable-choice]]). The cost
is inherited from [[thm-countable-subsets-of-omega-one-are-bounded]], which is
the single step of the argument that spends it; everything else below is a
theorem of ZF, the ordinals $\alpha_n$ being defined as *least* elements rather
than selected.

**What is and is not claimed.** $T$ is Hausdorff and not normal, and that is all.
Nothing here asserts that $T$ is regular, nor that $W \times Z$ itself is normal,
nor anything about which separation axioms are hereditary or productive; those
questions need machinery this page does not have.

## Facts & Assumptions

**Given:** $W = \omega_1 + 1$ and $Z = \omega + 1$ with their order topologies, the product $W \times Z$, the subspace $T = (W \times Z) \setminus \{(\omega_1,\omega)\}$, and the sets $A$ and $B$ above.

[A1] The basic open sets of an ordinal $\gamma$ are $[0,\beta]$ for $\beta \in \gamma$ and $(\alpha,\beta]$ for $\alpha < \beta$ in $\gamma$, and they form a basis ([[def-order-topology-on-an-ordinal]], [[def-topology-basis-subbasis]]).

[A2] For a binary product the basic product-open sets are exactly the boxes $P \times Q$ with $P$ and $Q$ open, and the boxes $P_0 \times Q_0$ with $P_0$, $Q_0$ basic in the factors also form a basis: given $(x,y) \in P \times Q$, basic $P_0 \ni x$ inside $P$ and $Q_0 \ni y$ inside $Q$ give $(x,y) \in P_0 \times Q_0 \subseteq P \times Q$ ([[def-product-topology]], [[thm-basis-criterion]], [[def-topology-basis-subbasis]]).

[A3] The open sets of $T$ are the traces $U' \cap T$ of the open sets of $W \times Z$, the closed sets of $T$ are the traces of the closed sets, and the traces of a basis form a basis ([[def-subspace-topology-top]], [[thm-subspace-closure-and-interior]]).

[L1] $\alpha + 1 = \alpha^{+}$; $\omega$ and $\omega_1$ are limit ordinals; $\omega_1$ is uncountable and every ordinal below it is at most countable ([[def-ordinal-addition]], [[lem-omega-least-limit-ordinal]], [[def-limit-ordinal]], [[thm-omega-one-is-the-least-uncountable-ordinal]], [[def-first-uncountable-ordinal]], [[def-countable]]).

[L2] For ordinals exactly one of $\xi < \eta$, $\xi = \eta$, $\eta < \xi$ holds, and every nonempty set of ordinals has a least element ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-ordinal]]).

[L3] Assuming $\mathrm{AC}_\omega$, every at most countable subset of $\omega_1$ has an upper bound $\alpha \in \omega_1$, and no such subset is cofinal in $\omega_1$ ([[thm-countable-subsets-of-omega-one-are-bounded]], [[def-cofinal-subset-of-an-ordinal]], [[def-countable-choice]]).

[L4] The image of $\mathbb{N}$ under a function is nonempty and at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L5] Every ordinal with its order topology is $T_1$, Hausdorff and regular ([[lem-ordinal-order-topology-is-t3]], [[def-t0-and-t1-spaces]]).

[L6] Normality: two disjoint closed sets have disjoint open supersets. Hausdorff: distinct points have disjoint open neighbourhoods. A set is closed exactly when its complement is open ([[def-normal-and-t4-spaces]], [[def-hausdorff-space]], [[def-topological-space]], [[def-interior-closure-boundary-top]], [[thm-closure-characterisation-top]]).

## Counterexample

**Proof technique:** contradiction.

1.1 $\omega_1$ is open in $W$ and $\omega$ is open in $Z$: for $\xi < \omega_1$ the basic set $[0,\xi]$ lies inside $\omega_1$, and for $n < \omega$ the basic set $[0,n]$ lies inside $\omega$. [A1, L2]

1.2 $A$ and $B$ are subsets of $T$ and are disjoint: every point of $A$ has second coordinate in $\omega$ and every point of $B$ has second coordinate $\omega$, and $\omega \notin \omega$. [L1, L2]

1.3 $T$ is Hausdorff: let $(\xi,\eta) \ne (\xi',\eta')$ in $T$. If $\xi \ne \xi'$, [L5] gives disjoint open $P, P'$ in $W$ containing them, and $(P \times Z) \cap T$ and $(P' \times Z) \cap T$ are disjoint open sets of $T$ containing the two points by [A2] and [A3]; if $\eta \ne \eta'$ the same argument runs in the second factor. [A2, A3, L5, L6]

2.1 $T \setminus A = (\omega_1 \times Z) \cap T$: a point $(\xi,\eta) \in T$ with $\xi = \omega_1$ has $\eta \ne \omega$, hence $\eta \in \omega$ and $(\xi,\eta) \in A$; so the points of $T$ outside $A$ are exactly those with $\xi \in \omega_1$. [step 1.2, L1, L2]

2.2 $T \setminus B = (W \times \omega) \cap T$: a point $(\xi,\eta) \in T$ with $\eta = \omega$ has $\xi \ne \omega_1$, hence $\xi \in \omega_1$ and $(\xi,\eta) \in B$; so the points of $T$ outside $B$ are exactly those with $\eta \in \omega$. [step 1.2, L1, L2]

3.1 By steps 1.1, 2.1 and 2.2 and [A2] and [A3], the sets $T \setminus A$ and $T \setminus B$ are open in $T$, so $A$ and $B$ are closed in $T$. [step 1.1, step 2.1, step 2.2, A2, A3, L6]

4.1 Suppose $U$ and $V$ are disjoint open subsets of $T$ with $A \subseteq U$ and $B \subseteq V$. [step 3.1, L6, assume-contra]

5.1 Fix $n \in \omega$. Then $(\omega_1, n) \in U$, so by [A2] and [A3] there are basic $P$ in $W$ and $Q$ in $Z$ with $(\omega_1,n) \in (P \times Q) \cap T \subseteq U$. [step 4.1, A2, A3]

6.1 Under step 5.1: $P$ contains $\omega_1$, and $\omega_1$ is the largest element of $W$, so $P$ is $[0,\omega_1] = W$ or $(\alpha,\omega_1]$ with $\alpha \in \omega_1$; in either case $(\alpha, \omega_1] \subseteq P$ for some $\alpha \in \omega_1$, taking $\alpha := 0$ in the first case. [step 5.1, A1, L1, L2]

7.1 Under step 5.1: $(\alpha,\omega_1] \times \{n\} \subseteq (P \times Q) \cap T \subseteq U$, since $n \in Q$ and since every point of $(\alpha,\omega_1] \times \{n\}$ has second coordinate $n \ne \omega$ and so lies in $T$. [step 5.1, step 6.1, L1, L2]

8.1 For each $n \in \omega$ the set of $\alpha \in \omega_1$ with $(\alpha,\omega_1] \times \{n\} \subseteq U$ is nonempty by step 7.1, so it has a least element $\alpha_n$ by [L2]; this defines $\alpha_n$ from $n$ and $U$ alone and selects nothing. [step 7.1, L2]

9.1 The set $S := \{\, \alpha_n : n \in \omega \,\}$ is an at most countable subset of $\omega_1$ by [L4], so [L3] gives $\alpha \in \omega_1$ with $\alpha_n \le \alpha$ for every $n \in \omega$. [step 8.1, L3, L4]

10.1 Hence $(\alpha,\omega_1] \subseteq (\alpha_n,\omega_1]$ for every $n$, and therefore $(\alpha,\omega_1] \times \{n\} \subseteq U$ for every $n \in \omega$. [step 8.1, step 9.1, L2]

10.2 $\alpha^{+} \in \omega_1$, since $\omega_1$ is a limit ordinal and $\alpha \in \omega_1$; so $(\alpha^{+}, \omega) \in B \subseteq V$. [step 4.1, step 9.1, L1, L2]

11.1 By [A2] and [A3] there are basic $P'$ in $W$ and $Q'$ in $Z$ with $(\alpha^{+},\omega) \in (P' \times Q') \cap T \subseteq V$; and $Q'$ contains $\omega$, the largest element of $Z$, so $Q'$ is $[0,\omega] = Z$ or $(m,\omega]$ with $m \in \omega$, and in either case $(m,\omega] \subseteq Q'$ for some $m \in \omega$. [step 10.2, A1, A2, A3, L1, L2]

12.1 Put $z := (\alpha^{+}, m^{+})$. Then $m^{+} \in \omega$ because $\omega$ is a limit ordinal, and $m < m^{+} \le \omega$, so $m^{+} \in (m,\omega] \subseteq Q'$; also $\alpha^{+} \in P'$; and $z \in T$ because its first coordinate is $\alpha^{+} \ne \omega_1$. Hence $z \in (P' \times Q') \cap T \subseteq V$. [step 11.1, L1, L2]

13.1 Also $\alpha < \alpha^{+} \le \omega_1$, so $\alpha^{+} \in (\alpha,\omega_1]$, and $m^{+} \in \omega$; hence $z \in (\alpha,\omega_1] \times \{m^{+}\} \subseteq U$ by step 10.1. [step 10.1, step 12.1, L2]

14.1 Steps 12.1 and 13.1 put $z$ in $U \cap V$, contradicting the disjointness assumed in step 4.1; so no such $U$ and $V$ exist, the disjoint closed sets $A$ and $B$ of step 3.1 cannot be separated, and $T$ is not normal by [L6]. With step 1.3 the space $T$ is Hausdorff and not normal, which refutes the claim. [step 3.1, step 1.3, step 4.1, step 12.1, step 13.1, L6, discharge-contradiction] ∎

## Remarks

- **Where the uncountability of $\omega_1$ is spent, and where it is not.** The whole argument turns on step 9.1: a countable family of ordinals below $\omega_1$ is bounded below $\omega_1$, so a single $\alpha$ works for every $n$ at once. Nothing analogous holds in the second factor, and nothing analogous is needed: $\omega$ enters only through the fact that $m^{+}$ is again below $\omega$.

- **Why the point $(\omega_1,\omega)$ must be deleted.** With that corner present, the set $B$ would not be closed in the ambient space in the form used here, and the two sets $A$ and $B$ would both have the corner in their closures; deleting it is exactly what makes them disjoint closed sets with no room between them.

- **The ordinals $\alpha_n$ are defined, not chosen.** Taking the *least* $\alpha$ that works is what keeps the construction free of dependent choice; the only choice principle in the argument is the countable one inside [[thm-countable-subsets-of-omega-one-are-bounded]], and it is declared in the statement.

- **The classical use of this witness is not made here.** The plank is the standard example showing that normality is neither hereditary nor productive; both readings need the normality of $W \times Z$ itself, which this page does not prove and does not assert ([[def-normal-and-t4-spaces]]).
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

### `def-product-topology` — definition — The product set $\\prod_{i \\in I} X_i$ of functions choosing a point in each factor, the projections, the box topology, and the product topology as the initial topology of the projections; the empty product is a one-point space

(statement provenance: ai-altered)

### Definition

**The product set.** Let $I$ be a set and let $X_i$ be a set for each $i \in I$.
The **product** is

$$\prod_{i \in I} X_i \;:=\; \Big\{\, x : x \text{ is a function with domain } I \text{ and } x(i) \in X_i \text{ for every } i \in I \,\Big\},$$

and we write $x_i := x(i)$, the $i$-th **coordinate** of $x$. Two elements of the
product are equal exactly when they agree at every index, functions being equal
when they have the same domain and the same values. For $j \in I$ the $j$-th
**projection** is

$$\pi_j : \prod_{i \in I} X_i \to X_j, \qquad \pi_j(x) := x_j .$$

**Notation for a finite product.** For $I = n$ a natural number, which is the set
$\{0, 1, \dots, n-1\}$ of its predecessors, an element of $\prod_{k<n} X_k$ is a
function on $n$ and we write it $(x_0, \dots, x_{n-1})$. In particular $I = 2$
gives the **binary product**, written $X \times Y$ for $\prod_{i<2} X_i$ with
$X_0 = X$ and $X_1 = Y$, whose elements are written $(u,v)$ for the function
$0 \mapsto u$, $1 \mapsto v$. This is the only meaning the symbol $X \times Y$
carries on this page.

**Two facts about when the product is nonempty, stated because they are used and
because they cost something.** If some $X_{i_0}$ is empty then the product is
empty, since no function can take a value in $X_{i_0}$. Conversely, suppose every
$X_i$ is nonempty.

- For $I = n$ a natural number, the product is nonempty, and this is a theorem of
  ZF: [[lem-finite-choice]] applied to the function $i \mapsto X_i$ on $n$
  supplies a choice function $g$ for the family of values, and
  $x(i) := g(X_i)$ defines a member of $\prod_{k<n} X_k$.
- For an arbitrary $I$ the assertion "$\prod_{i \in I} X_i \ne \varnothing$
  whenever every $X_i$ is nonempty" **is** the Axiom of Choice: it is the
  formulation recorded in [[def-axiom-of-choice]], and the choice function of
  [[def-choice-function]] is exactly a point of the product of a family by
  itself. Every use of it below is flagged at the step that spends it.

**The box topology.** Now let each $X_i$ carry a topology $\mathcal{T}_i$
([[def-topological-space]]). Put

$$\mathcal{R} \;:=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i \in I \,\Big\},$$

the family of **boxes**. $\mathcal{R}$ is a basis for a topology
([[thm-basis-criterion]]): it contains $\prod_i X_i$, so it covers the product,
and it is closed under binary intersections, since

$$\Big(\prod_i U_i\Big) \cap \Big(\prod_i V_i\Big) = \prod_i (U_i \cap V_i)$$

and each $U_i \cap V_i$ is open by (T3). The topology it generates is the **box
topology** $\mathcal{T}^{\square}$, and $\mathcal{R}$ is a basis for it
([[def-topology-basis-subbasis]]).

**The product topology.** The **product topology** $\mathcal{T}^{\Pi}$ on
$\prod_i X_i$ is the initial topology of the family of projections
$(\pi_i)_{i \in I}$ ([[def-initial-and-final-topology]]): the topology generated
by the subbasis

$$\mathcal{G} \;:=\; \{\, \pi_i^{-1}[U] : i \in I,\ U \in \mathcal{T}_i \,\}, \qquad \pi_i^{-1}[U] = \prod_{j \in I} W_j \ \text{ with } W_i = U \text{ and } W_j = X_j \text{ for } j \ne i .$$

By [[thm-basis-criterion]] the finite intersections of members of $\mathcal{G}$
form a basis for $\mathcal{T}^{\Pi}$, and those finite intersections are exactly
the boxes with all but finitely many factors unrestricted:

$$\mathcal{R}^{\Pi} \;=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i, \text{ and } U_i = X_i \text{ for all but finitely many } i \,\Big\}.$$

Indeed the intersection of $\pi_{i_1}^{-1}[U_1], \dots, \pi_{i_n}^{-1}[U_n]$ is
the box whose factor at $i$ is the intersection of those $U_m$ with $i_m = i$ and
is $X_i$ when no $i_m$ equals $i$; and the intersection of no members is the
whole product, the box with every factor $X_i$. Conversely a box with
$U_i = X_i$ off a finite set is such an intersection. Members of
$\mathcal{R}^{\Pi}$ are called **basic product-open** sets, and members of
$\mathcal{R}$ **boxes**. So $\mathcal{R}^{\Pi} \subseteq \mathcal{R}$, with
equality when $I$ is a natural number.

**The empty product.** For $I = \varnothing$ there is exactly one function with
domain $\varnothing$, the empty function, so $\prod_{i \in \varnothing} X_i$ is a
one-point set. A one-point set carries exactly one topology, namely
$\{\varnothing, \{\varnothing\}\}$, since a topology must contain the empty set
and the whole set and there is nothing else to contain
([[def-topological-space]]); so the box topology and the product topology agree
there, and both equal the discrete topology and the indiscrete topology
([[def-standard-topologies]]), which coincide on a one-point set. There are no
projections to speak of, and the initial topology of the empty family is indeed
the indiscrete one ([[def-initial-and-final-topology]]).

**Convention.** Unless the box topology is named explicitly, $\prod_i X_i$ always
carries the product topology in this library. That is not a matter of taste: the
product topology is the one with the characteristic property of the next item,
and the box topology has no such property.

### `def-subspace-topology-top` — definition — Subspace topology: the traces of the open sets, its closed sets and its bases, the continuity of the inclusion, and the characteristic property of a map into a subspace

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$S \subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is

$$\mathcal{T}_S := \{\, U \cap S : U \in \mathcal{T} \,\},$$

the family of **traces** on $S$ of the open sets of $X$. The pair
$(S, \mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in
$\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the
ambient space needs emphasis.

**$\mathcal{T}_S$ is a topology, and this is discharged here.** (T1):
$\varnothing = \varnothing \cap S$ and $S = X \cap S$ are traces. (T2): if
$\mathcal{S}' \subseteq \mathcal{T}_S$, choose for each member a set of
$\mathcal{T}$ tracing to it — no choice principle is needed, since
$U' := \bigcup \{\, U \in \mathcal{T} : U \cap S \subseteq W \,\}$ is a canonical
such set for $W \in \mathcal{T}_S$, being open by (T2) in $X$ and satisfying
$U' \cap S = W$ — and then
$\bigcup_i (U_i \cap S) = (\bigcup_i U_i) \cap S \in \mathcal{T}_S$ by (T2) in
$X$. (T3): $(U \cap S) \cap (V \cap S) = (U \cap V) \cap S \in \mathcal{T}_S$ by
(T3) in $X$.

**Closed sets of a subspace are the traces of the closed sets.** A set
$C \subseteq S$ is closed in $S$ if and only if $C = F \cap S$ for some closed
$F \subseteq X$. Indeed $S \setminus (U \cap S) = (X \setminus U) \cap S$ and
$S \setminus (F \cap S) = (X \setminus F) \cap S$, so complementation inside $S$
matches complementation inside $X$ under tracing.

**Bases and subbases trace as well.** If $\mathcal{B}$ is a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) then
$\mathcal{B}_S := \{\, B \cap S : B \in \mathcal{B} \,\}$ is a basis for
$\mathcal{T}_S$: its members are open in $S$, and for $W = U \cap S$ open in $S$
and $x \in W$ there is $B \in \mathcal{B}$ with $x \in B \subseteq U$, whence
$x \in B \cap S \subseteq W$. The same computation with a subbasis $\mathcal{S}$
shows that $\{\, S_0 \cap S : S_0 \in \mathcal{S} \,\}$ is a subbasis for
$\mathcal{T}_S$, since tracing commutes with finite intersections and with
unions.

**The inclusion is continuous.** The inclusion map $\iota : S \to X$,
$\iota(s) = s$, satisfies $\iota^{-1}[U] = U \cap S$ for every $U \subseteq X$,
so preimages of open sets are open and $\iota$ is continuous
([[thm-continuity-characterisations-top]], clause (b)). Moreover
$\mathcal{T}_S$ is the **coarsest** topology on $S$ making $\iota$ continuous: any
topology on $S$ for which $\iota$ is continuous must contain every
$\iota^{-1}[U] = U \cap S$, hence contain $\mathcal{T}_S$.

**Characteristic property of a map into a subspace.** Let $(Z, \mathcal{T}_Z)$ be
a topological space and let $g : Z \to S$ be a function. Then

$$g \text{ is continuous as a map } Z \to (S,\mathcal{T}_S) \iff \iota \circ g \text{ is continuous as a map } Z \to (X,\mathcal{T}) .$$

*Proof.* For $U \in \mathcal{T}$ one has
$(\iota \circ g)^{-1}[U] = g^{-1}[\iota^{-1}[U]] = g^{-1}[U \cap S]$. If $g$ is
continuous then each $g^{-1}[U \cap S]$ is open, so $\iota \circ g$ is continuous;
conversely if $\iota \circ g$ is continuous then for any $W = U \cap S$ open in
$S$ the set $g^{-1}[W] = (\iota \circ g)^{-1}[U]$ is open, so $g$ is continuous.
Both directions use only clause (b) of [[thm-continuity-characterisations-top]].

**Restriction of a continuous map.** If $f : X \to Y$ is continuous and
$S \subseteq X$, then $f|_S : S \to Y$ is continuous, since
$(f|_S)^{-1}[V] = f^{-1}[V] \cap S$ is open in $S$ for every open $V \subseteq Y$
([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

**When relative and ambient agree.** If $S$ is open in $X$ then a subset of $S$
is open in $S$ if and only if it is open in $X$: a trace $U \cap S$ is then an
intersection of two open sets of $X$, and conversely an open subset of $X$
contained in $S$ is its own trace. The same statement with "closed" throughout
holds when $S$ is closed in $X$. Both are used in the pasting lemma of the next
item, and both fail without the hypothesis: $S$ itself is always open and closed
in $S$, and need be neither in $X$.

### `thm-subspace-closure-and-interior` — theorem — For $A \\subseteq S \\subseteq X$ the closure of $A$ in $S$ is $\\overline{A}^{X} \\cap S$, while the interior only contains $\\operatorname{int}^{X}(A) \\cap S$, with equality when $S$ is open; and a dense subset of $X$ traces to a dense subset of every open $S$

(statement provenance: ai-altered)

### Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), let
$S \subseteq X$ carry the subspace topology $\mathcal{T}_S$
([[def-subspace-topology-top]]) and let $A \subseteq S$. Write $\overline{A}$ and
$\operatorname{int}(A)$ for the closure and the interior of $A$ in $X$, and
$\operatorname{cl}_S(A)$ and $\operatorname{int}_S(A)$ for those taken in the
space $(S, \mathcal{T}_S)$ ([[def-interior-closure-boundary-top]]). Then:

1. **Closure traces exactly.**
   $$\operatorname{cl}_S(A) \;=\; \overline{A} \cap S .$$
2. **Interior traces only one way.** $\operatorname{int}(A) \subseteq S$, so
   $\operatorname{int}(A) \cap S = \operatorname{int}(A)$, and
   $$\operatorname{int}(A) \;\subseteq\; \operatorname{int}_S(A) ,$$
   an inclusion that may be strict.
3. **Equality for an open subspace.** If $S \in \mathcal{T}$ then
   $\operatorname{int}_S(A) = \operatorname{int}(A)$.
4. **Density traces to open subspaces only.** If $D \subseteq X$ is dense in $X$
   ([[def-dense-top]]) and $S \in \mathcal{T}$, then $D \cap S$ is dense in
   $(S, \mathcal{T}_S)$. Without the hypothesis $S \in \mathcal{T}$ this fails.

Both failures are witnessed inside the proof, in Sierpinski space
([[def-standard-topologies]]): the unqualified forms of claims 2 and 3 and of
claim 4 are false, and the counterexamples are two lines each rather than
deferred.

### `def-normal-and-t4-spaces` — definition — Normal spaces and $T_4$ spaces, with the source disagreement over whether normality includes $T_1$ stated explicitly

(statement provenance: literature-derived)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **normal** when any two disjoint closed sets can be separated by
  disjoint open sets: for all closed $A, B \subseteq X$ with
  $A \cap B = \varnothing$ there are $U, V \in \mathcal{T}$ with
  $$A \subseteq U, \qquad B \subseteq V, \qquad U \cap V = \varnothing .$$
- $X$ is **$T_4$** when it is normal **and** $T_1$ ([[def-t0-and-t1-spaces]]).

Either of $A$, $B$ may be empty, and those cases are met by $U = \varnothing$ or
$V = \varnothing$ together with $X$; so the condition hides no nonemptiness
hypothesis. As with regularity, "disjoint open sets" may equivalently be read as
"disjoint open neighbourhoods of the two sets" ([[def-neighbourhood-top]]).

**Normality is the special case of complete normality at a disjoint closed
pair.** Disjoint closed sets are separated in the sense of
[[def-separated-sets]], since the closure of a closed set is itself; so a space
in which every *separated* pair can be put into disjoint open sets is in
particular normal. That stronger condition is defined later on this page, and the
implication is proved there.

**The convention fork, and this library's side of it.** Exactly as for
regularity, textbooks disagree about whether *normal* carries a $T_1$ hypothesis.
Munkres builds it in; Kelley, Willard and Engelking do not. **This library takes
the second side**: *normal* names the separation condition alone, $T_4$ names
normal plus $T_1$, and the $T_1$ hypothesis is written out wherever it is used.
The reason is again that the two halves are independent, and here the point is
sharp: **normality without $T_1$ implies nothing at all** in the hierarchy. The
indiscrete topology on a two-point set ([[def-standard-topologies]]) is normal,
its only closed sets being $\varnothing$ and the whole space, and it is not even
$T_0$; Sierpinski space is normal, $T_0$ and not regular. Both are recorded on
this page, the first as a false statement and both on the companion page.

### `def-hausdorff-space` — definition — Hausdorff space: distinct points have disjoint open neighbourhoods; every metrizable space is Hausdorff and the indiscrete topology on two points is not

(statement provenance: ai-altered)

### Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**Hausdorff** when any two distinct points are separated by disjoint open sets:
for all $x, y \in X$ with $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \qquad y \in V, \qquad U \cap V = \varnothing .$$

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), the condition reads: distinct points have disjoint
open neighbourhoods. Nothing is asserted about points that are equal, and the
condition is vacuous for a space with at most one point, so every such space is
Hausdorff.

**Every metrizable space is Hausdorff.** This is not proved here, because it is
already discharged: [[def-metrizable-space]] records it among the two things
every metrizable space has, deriving it from
[[thm-metric-hausdorff-separation]], which separates $p \ne q$ in a metric space
by the disjoint open balls $B(p,r)$ and $B(q,r)$ with $r = d(p,q)/2 > 0$. In
particular $\mathbb{R}$ with its usual topology, every $\mathbb{R}^n$, and every
subspace of a metrizable space are Hausdorff.

**Not every space is Hausdorff.** The indiscrete topology
$\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$ on a set $X = \{a,b\}$ with
$a \ne b$ ([[def-standard-topologies]]) is not: the only open set containing $a$
is $X$, the only one containing $b$ is $X$, and $X \cap X = X \ne \varnothing$.
This is the same two-point space that [[def-metrizable-space]] uses to exhibit a
topology induced by no metric, and the reason is the same one: failure of the
Hausdorff condition is an obstruction to metrizability.

**Being Hausdorff is a topological property** ([[def-homeomorphism-and-open-maps]]).
If $h : X \to Z$ is a homeomorphism and $X$ is Hausdorff, then for $z \ne z'$ in
$Z$ the points $h^{-1}(z)$ and $h^{-1}(z')$ are distinct, so they have disjoint
open $U, V$; the images $h[U]$ and $h[V]$ are open, disjoint, and contain $z$ and
$z'$ respectively, a homeomorphism carrying the open sets of one space
bijectively onto those of the other. So no space homeomorphic to a Hausdorff
space fails the condition.

**Scope of this item.** Only the definition, the metrizable case and the
two-point failure are recorded here, because that is all this page uses. The
Hausdorff condition is one of a graded family of separation axioms; that family,
its ordering, and the questions of which of its members are hereditary or
preserved by products, are not available at this point in the reading order and
nothing here anticipates them. What this page does use is a single negative
result: a quotient of a Hausdorff space need not be Hausdorff, which is recorded
below as a false statement and witnessed on the companion page.

### `def-t0-and-t1-spaces` — definition — $T_0$ (Kolmogorov) and $T_1$ (Frechet) spaces

(statement provenance: literature-derived)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **$T_0$**, or a **Kolmogorov space**, when any two distinct points are
  *topologically distinguishable*: for all $x, y \in X$ with $x \ne y$ there is
  an open set containing exactly one of $x$ and $y$.
- $X$ is **$T_1$**, or a **Frechet space**, when each of any two distinct points
  has an open set containing it and missing the other: for all $x, y \in X$ with
  $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \quad y \notin U, \qquad y \in V, \quad x \notin V .$$

Nothing is asserted about a pair of equal points, so a space with at most one
point satisfies both conditions vacuously.

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), both conditions may be read with "open
neighbourhood" in place of "open set"; and by the same equivalence recorded in
[[def-neighbourhood-top]] they may be read with arbitrary neighbourhoods, since
a neighbourhood of $x$ contains an open one and an open neighbourhood is a
neighbourhood.

**Every $T_1$ space is $T_0$, and this is discharged here** rather than left to
the reader, because it is the bottom arrow of the whole hierarchy on this page.
Let $x \ne y$ and take $U, V$ as in the $T_1$ condition. Then $U$ is an open set
containing $x$ and not $y$, so it contains exactly one of the two points, which
is the $T_0$ condition. Only the first half of the $T_1$ condition is used, so
the implication does not reverse formally, and it does not reverse in fact:
Sierpinski space is a witness, recorded on the companion page.

**The two conditions differ exactly in symmetry.** $T_0$ asks for *one* open set
that tells the pair apart, with no control over which of the two it contains;
$T_1$ asks for *both* separations at once. In Sierpinski space
$(\{a,b\}, \{\varnothing, \{b\}, \{a,b\}\})$ of [[def-standard-topologies]] the
open set $\{b\}$ contains $b$ and not $a$, so the space is $T_0$; but the only
open set containing $a$ is the whole space, which also contains $b$, so it is
not $T_1$.

**Neither condition is a property of a set alone.** Both are properties of the
pair $(X, \mathcal{T})$, and both are inherited upwards along the comparison
order of [[def-topological-space]]: if $\mathcal{T}_1 \subseteq \mathcal{T}_2$
and $(X,\mathcal{T}_1)$ is $T_0$, respectively $T_1$, then so is
$(X,\mathcal{T}_2)$, since the separating open sets of the coarser topology lie
in the finer one. In particular the discrete topology satisfies both, and the
indiscrete topology on a set with at least two points satisfies neither.

### `def-interior-closure-boundary-top` — definition — Interior, closure, boundary, exterior, derived set and isolated point in a topological space

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), let
$A \subseteq X$ and let $x \in X$. Neighbourhoods are as in
[[def-neighbourhood-top]], so a neighbourhood need not be open.

- The **interior** of $A$ is
  $\operatorname{int}(A) := \bigcup \{\, U \in \mathcal{T} : U \subseteq A \,\}$.
- The **closure** of $A$ is
  $\overline{A} := \bigcap \{\, F \subseteq X : F \text{ closed and } A \subseteq F \,\}$.
- The **exterior** of $A$ is $\operatorname{ext}(A) := \operatorname{int}(X \setminus A)$.
- The **boundary** of $A$ is $\partial A := \overline{A} \setminus \operatorname{int}(A)$.
- $x$ is a **limit point** (accumulation point) of $A$ if every neighbourhood $N$
  of $x$ satisfies $N \cap (A \setminus \{x\}) \ne \varnothing$. The set of limit
  points of $A$ is the **derived set** $A'$.
- $x$ is an **isolated point of $A$** if $x \in A$ and some neighbourhood $N$ of
  $x$ satisfies $N \cap A = \{x\}$.

**Both operators are well posed, and the two names are justified rather than
asserted.** The interior is a union of open sets, hence open by (T2), it is
contained in $A$, and it contains every open $U \subseteq A$: so
$\operatorname{int}(A)$ is *the largest open subset of $A$*. The family being
intersected in the definition of $\overline{A}$ is nonempty, since $X$ is closed
and contains $A$, so the intersection is a set; it is closed by (C2) of
[[def-topological-space]], it contains $A$, and it is contained in every closed
$F \supseteq A$: so $\overline{A}$ is *the smallest closed superset of $A$*. In
particular

$$\operatorname{int}(A) \subseteq A \subseteq \overline{A},$$

and $A$ is open if and only if $A = \operatorname{int}(A)$, and closed if and
only if $A = \overline{A}$, in each case because one inclusion is automatic and
the other says exactly that $A$ belongs to the family in question.

**Interior and closure are exchanged by complementation.** For every
$A \subseteq X$,

$$X \setminus \operatorname{int}(A) = \overline{X \setminus A}, \qquad X \setminus \overline{A} = \operatorname{int}(X \setminus A) = \operatorname{ext}(A).$$

Indeed $U \mapsto X \setminus U$ is a bijection between the open subsets of $A$
and the closed supersets of $X \setminus A$, and it turns unions into
intersections ([[def-topological-space]]); applying complementation to the first
identity gives the second. So $\operatorname{ext}(A) = X \setminus \overline{A}$,
and every statement about interiors has a mirror statement about closures.

**The pointwise description of the interior.** $x \in \operatorname{int}(A)$ if
and only if $A$ is a neighbourhood of $x$. If $x \in \operatorname{int}(A)$ then
$\operatorname{int}(A)$ is an open set with $x \in \operatorname{int}(A) \subseteq A$;
conversely a neighbourhood relation $x \in U \subseteq A$ with $U$ open puts $x$
in the union defining $\operatorname{int}(A)$. The corresponding description of
the closure is proved as the next item, because it is the statement that does the
work in every later proof.

**$X$ is the disjoint union of the three regions.** Since
$\operatorname{int}(A) \subseteq \overline{A}$, the three sets
$\operatorname{int}(A)$, $\partial A = \overline{A} \setminus \operatorname{int}(A)$
and $\operatorname{ext}(A) = X \setminus \overline{A}$ are pairwise disjoint and
their union is $X$. This is recorded again, with the identities for interior and
closure of unions and intersections, in the lemma two items below.

### `thm-closure-characterisation-top` — theorem — A point lies in the closure of $A$ iff every basic neighbourhood of it meets $A$; the closure is the smallest closed superset and equals $A$ together with its derived set

(statement provenance: ai-altered)

### Statement

Let $(X, \mathcal{T})$ be a topological space, let $\mathcal{B}$ be a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]), let $A \subseteq X$ and let
$x \in X$. Closure, derived set and limit points are as in
[[def-interior-closure-boundary-top]]. Then:

1. The following four conditions are equivalent.
   - (a) $x \in \overline{A}$;
   - (b) $N \cap A \ne \varnothing$ for every neighbourhood $N$ of $x$
     ([[def-neighbourhood-top]]);
   - (c) $U \cap A \ne \varnothing$ for every open $U$ with $x \in U$;
   - (d) $B \cap A \ne \varnothing$ for every $B \in \mathcal{B}$ with $x \in B$.
2. $\overline{A}$ is closed, contains $A$, and is contained in every closed
   $F \subseteq X$ with $A \subseteq F$; so it is the smallest closed superset of
   $A$, and $A$ is closed if and only if $A = \overline{A}$.
3. $\overline{A} = A \cup A'$.

Claim 2 is recorded here for reference and is discharged in
[[def-interior-closure-boundary-top]], where it is what makes the definition of
$\overline{A}$ well posed; claims 1 and 3 are proved below. Claim 1 is the form in
which the closure is used everywhere afterwards, and clause (d) is what makes a
closure computable from a basis rather than from all open sets.

### `thm-basis-criterion` — theorem — A family is a basis for a unique topology iff it covers the set and every point of an intersection of two members lies in a member inside that intersection; finite intersections of any subbasis form a basis

(statement provenance: ai-altered)

### Statement

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

### `def-topology-basis-subbasis` — definition — Basis and subbasis for a topology, and the topology generated by a family of sets

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

A family $\mathcal{B} \subseteq \mathcal{T}$ is a **basis for $\mathcal{T}$** if
every open set is a union of members of $\mathcal{B}$: for every
$U \in \mathcal{T}$ there is $\mathcal{B}_U \subseteq \mathcal{B}$ with
$U = \bigcup \mathcal{B}_U$. Equivalently, and this is the form used in proofs,

$$\text{for every } U \in \mathcal{T} \text{ and every } x \in U \text{ there is } B \in \mathcal{B} \text{ with } x \in B \subseteq U .$$

*The two forms say the same thing.* If every open $U$ is such a union and
$x \in U$, then $x$ lies in one of the sets united, which is a member of
$\mathcal{B}$ inside $U$. Conversely, if the displayed condition holds then
$U = \bigcup \{\, B \in \mathcal{B} : B \subseteq U \,\}$, since each such $B$ is
contained in $U$ and each $x \in U$ lies in one of them. Note that
$\bigcup \varnothing = \varnothing$, so the empty open set is covered by the empty
subfamily and needs no member of $\mathcal{B}$. The members of a basis are called
**basic open sets**.

**The topology generated by a family.** Let $\mathcal{S} \subseteq \mathcal{P}(X)$
be *any* family of subsets of $X$. Then

$$\langle \mathcal{S} \rangle := \bigcap \{\, \mathcal{T}' : \mathcal{T}' \text{ is a topology on } X \text{ with } \mathcal{S} \subseteq \mathcal{T}' \,\}$$

is a topology on $X$, it contains $\mathcal{S}$, and it is contained in every
topology on $X$ that contains $\mathcal{S}$. It is called the **topology
generated by $\mathcal{S}$**, and $\mathcal{S}$ is a **subbasis** for a topology
$\mathcal{T}$ when $\mathcal{T} = \langle \mathcal{S} \rangle$.

*This is well posed, and the obligation is discharged here.* The collection being
intersected is nonempty, because $\mathcal{P}(X)$ is a topology on $X$ containing
$\mathcal{S}$; so the intersection is an intersection of a nonempty family of
subsets of $\mathcal{P}(X)$ and is a set. It is a topology: $\varnothing$ and $X$
lie in every topology on $X$, hence in the intersection, which is (T1); if
$\mathcal{S}' \subseteq \langle \mathcal{S} \rangle$ then $\mathcal{S}'$ is a
subfamily of each $\mathcal{T}'$ in the collection, so $\bigcup \mathcal{S}'$ lies
in each $\mathcal{T}'$ and hence in the intersection, which is (T2); and the same
argument with $U \cap V$ gives (T3). It contains $\mathcal{S}$ because every
$\mathcal{T}'$ in the collection does, and it is contained in each such
$\mathcal{T}'$ because an intersection is contained in each of its members. So
$\langle \mathcal{S} \rangle$ is the coarsest topology on $X$ containing
$\mathcal{S}$ ([[def-topological-space]]), and in particular it is uniquely
determined by $\mathcal{S}$.

**Neither notion is intrinsic to the family alone.** "$\mathcal{B}$ is a basis
for $\mathcal{T}$" and "$\mathcal{S}$ is a subbasis for $\mathcal{T}$" are
relations between a family and a topology, not properties of the family. The
question of which families are a basis *for some* topology, and how the topology
generated by a subbasis is computed from it, is settled by the next item.

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

Read `cex-the-deleted-tychonoff-plank-is-not-normal` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
