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
