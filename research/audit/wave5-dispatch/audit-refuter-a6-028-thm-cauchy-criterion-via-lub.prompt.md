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

# Adversarial proof reading — `thm-cauchy-criterion-via-lub`

## The item under review, in full

`items/thm-cauchy-criterion-via-lub.md`

```markdown
---
id: thm-cauchy-criterion-via-lub
kind: theorem
title: "The Cauchy criterion from the least-upper-bound property: in a complete ordered field every Cauchy sequence converges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-cauchy-sequence-bounded, thm-bolzano-weierstrass, lem-cauchy-with-convergent-subsequence, def-real-limit, def-complete-ordered-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Completeness of the real numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Completeness_of_the_real_numbers"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.11(c))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.4 (Thm 6.4.18)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "J. Lebl, Basic Analysis I, §2.4 (Thm 2.4.5)"
      url: "https://www.jirka.org/ra/"
---

## Statement

Every Cauchy sequence of reals converges to a real ([[def-real-limit]]).

More carefully, this is a statement about the *axioms*: in a complete ordered
field, that is in an ordered field with the least-upper-bound property
([[def-complete-ordered-field]]), every Cauchy sequence converges. The proof
below uses nothing about $\mathbb{R}$ except that property, through
[[thm-bolzano-weierstrass]].

**This library already knows the conclusion by a different route.**
It is proved on the Cauchy-construction page, where
$\mathbb{R}$ is built out of Cauchy sequences of rationals and completeness is
read off the construction. That proof is about a particular construction; this
one is about the axioms, and it is what tells us the statement holds in *any*
complete ordered field, however it was obtained.

## Facts & Assumptions

**Given:** A Cauchy sequence $(x_k)$ of reals, $\mathbb{R}$ being a complete ordered field.

[L1] Every Cauchy sequence of reals is bounded ([[lem-cauchy-sequence-bounded]]).

[L2] Bolzano-Weierstrass: every bounded sequence of reals has a convergent subsequence, that is a strictly increasing $n$ and a real $L$ with $x_{n_j} \to L$ ([[thm-bolzano-weierstrass]]).

[L3] A Cauchy sequence with a subsequence converging to $L$ converges to $L$ ([[lem-cauchy-with-convergent-subsequence]]).

[L4] Convergence of a sequence of reals to a real ([[def-real-limit]]).

[L5] $\mathbb{R}$ is a complete ordered field, and this is the only property of it used, through [L2] ([[def-complete-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 The Cauchy sequence $(x_k)$ is bounded. [given, L1]

2.1 Being bounded, $(x_k)$ has a convergent subsequence: fix a strictly increasing $n : \mathbb{N} \to \mathbb{N}$ and a real $L$ with $x_{n_j} \to L$. [step 1.1, L2, L5, choose]

3.1 The sequence $(x_k)$ is Cauchy and has a subsequence converging to $L$, so it converges to $L$. [step 2.1, L3]

4.1 An arbitrary Cauchy sequence of reals has therefore been shown to converge to a real, so every Cauchy sequence of reals converges, and this was derived from the least-upper-bound property alone. [step 3.1, L4, L5] ∎

## Remarks

- **The three steps are exactly the three lemmas, and each is sharp.** A Cauchy
  sequence is bounded ([[lem-cauchy-sequence-bounded]]); a bounded sequence has a
  convergent subsequence ([[thm-bolzano-weierstrass]]); a Cauchy sequence with a
  convergent subsequence converges ([[lem-cauchy-with-convergent-subsequence]]).
  Dropping the Cauchy hypothesis at the last step breaks the chain, since a
  bounded sequence need not converge ([[fs-bounded-implies-convergent]]).

- **Where completeness enters.** Only in the middle step, and there only through
  [[cor-monotone-converges-iff-bounded]] inside the proof of
  Bolzano-Weierstrass. The first and third steps hold in any ordered field. That
  localisation is the reason for the page order.

- **The converse needs an extra hypothesis.** Cauchy completeness alone does not
  imply the least-upper-bound property; it does so together with the Archimedean
  property, and there are Cauchy complete non-Archimedean ordered fields that are
  not Dedekind complete. This library does not prove that here; the equivalences
  between the forms of completeness are the subject of a later page, and
  [[rem-completeness-routes]] states precisely what is and is not established
  now.

- **The name.** "Cauchy criterion" is the useful reading: the theorem lets one
  prove convergence without producing the limit, which is what makes it the
  standard tool for series and for uniform convergence later on.

- The construction-side proof of the same sentence is
  [[thm-reals-cauchy-complete]], and [[rem-completeness-routes]] sets out why
  this library keeps both. Neither proof uses the other, and nothing above
  depends on that item.
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `lem-cauchy-sequence-bounded` — lemma — Every Cauchy sequence of reals is bounded

(statement provenance: literature-derived)

### Statement

Every Cauchy sequence of reals is bounded: if $(x_k)$ is a Cauchy sequence
([[def-real-limit]]) then there is $M \in \mathbb{R}$ with $|x_k| \le M$ for every
$k \in \mathbb{N}$ ([[def-sequence]]).

This is the real-number counterpart of the lemma proving the same statement for
Cauchy sequences of rationals inside $\mathbb{Q}$, and the argument is the same
one: the Cauchy condition at a single value of $\varepsilon$
confines all but finitely many terms, and the finitely many exceptions are
handled by a maximum.

### `thm-bolzano-weierstrass` — theorem — Bolzano-Weierstrass: every bounded real sequence has a convergent subsequence

(statement provenance: literature-derived)

### Statement

Every bounded sequence of reals has a convergent subsequence: if $(x_k)$ is a
sequence of reals and there is $M \in \mathbb{R}$ with $|x_k| \le M$ for every
$k \in \mathbb{N}$ ([[def-sequence]]), then there is a strictly increasing
$n : \mathbb{N} \to \mathbb{N}$ and a real $L$ with $x_{n_j} \to L$.

Equivalently: the subsequential limit set of a bounded sequence is nonempty
([[def-subsequential-limit]]).

The theorem is the exact repair of the false claim that a bounded sequence
converges. A bounded
sequence need not converge, and the alternating sequence is the standing witness;
what boundedness does force is that *some* subsequence converges. The converse of
the theorem is false, and badly so: a sequence with a convergent subsequence need
not be bounded.

### `lem-cauchy-with-convergent-subsequence` — lemma — A Cauchy sequence with a convergent subsequence converges, to that subsequence’s limit

(statement provenance: literature-derived)

### Statement

Let $(x_k)$ be a Cauchy sequence of reals ([[def-real-limit]]) and suppose some
subsequence $(x_{n_j})$ converges to $L \in \mathbb{R}$, that is, $L$ is a
subsequential limit of $(x_k)$ ([[def-subsequential-limit]]). Then the whole
sequence $(x_k)$ converges, and its limit is $L$.

So for a Cauchy sequence a single convergent subsequence already determines the
behaviour of the sequence. This is exactly the step that upgrades
Bolzano-Weierstrass into Cauchy completeness in
the Cauchy criterion later on this page, and it is false without the Cauchy
hypothesis.

### `def-real-limit` — definition — Limits and Cauchy sequences of reals

(statement provenance: ai-altered)

### Definition

A sequence $(x_k)$ of reals **converges** to $x \in \mathbb{R}$ when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x| < \hat\varepsilon$ for all $k \ge K$. It is **Cauchy** when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$.

### `def-complete-ordered-field` — definition — Complete ordered field (least-upper-bound property)

(statement provenance: literature-derived)

### Definition

Let $F$ be an ordered field ([[def-ordered-field]]) and $S \subseteq F$.

- $u \in F$ is an **upper bound** of $S$ if $s \le u$ for all $s \in S$; $S$ is
  **bounded above** if it has an upper bound.
- $u \in F$ is a **least upper bound** (or **supremum**, $\sup S$) of $S$ if $u$
  is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$.

$F$ is a **complete ordered field** (equivalently, $F$ has the
**least-upper-bound property**, or is **Dedekind complete**) if every nonempty
$S \subseteq F$ that is bounded above has a least upper bound in $F$.

## What to return

Read `thm-cauchy-criterion-via-lub` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
