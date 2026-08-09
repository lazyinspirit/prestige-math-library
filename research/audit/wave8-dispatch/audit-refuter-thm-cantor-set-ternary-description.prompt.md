# Audit proof-refuter brief — Wave 8, step A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as a
read-only adversarial proof-refuter for the published-page audit. You are
tool-less: you cannot open a file, run a command, browse, edit, or delegate.
Everything you may rely on is reproduced in the `This dispatch` section. Return
evidence only; Audit-Alpha alone adjudicates and edits.

## Triage — the standing rule (verbatim, binding on you)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

## Adversarial standard

Read the target's title, Statement/Definition/Example/Statement refuted, Facts &
Assumptions, every numbered proof/refutation/verification step, and Remarks.
Try to falsify the public claim and every load-bearing inference.

1. Compare every cited fact with the supplied source text before alleging that
   it is weak. Check domain, quantifiers, hypotheses, direction, conclusion,
   and whether the source licenses the exact use.
2. Check that the title and public statement assert no more than the proof
   establishes, and that every proof step uses only available premises.
3. Check both directions of biconditionals, uniqueness/existence claims,
   induction and limiting arguments, empty/zero/endpoint/degenerate cases,
   extended-real conventions, index shifts, and hidden division or choice.
4. Re-read Remarks as skeptically as a numbered step. A false mathematical
   remark is a defect even when the proof is sound.
5. When the target is marked `ai-generated`, actively search for a
   counterexample to its claim, witness, or refutation rather than merely
   checking prose consistency.
6. Treat a false public claim, logically invalid proof, missing necessary
   hypothesis, circularity, or materially inaccurate load-bearing citation as
   fatal. Do not inflate an expository omission or a gap closable within thirty
   seconds into a defect.

## Output format

Reply with exactly this structure and no preamble:

```text
VERDICT: CLEAN | DEFECTS
```

If `DEFECTS`, give one block per finding:

```text
FINDING 1
  location: [exact title, section, fact label, or numbered step]
  severity: fatal | nonfatal
  claim:    [the exact mathematical assertion]
  evidence: [counterexample, missing hypothesis, invalid inference, or exact source mismatch]
```

Then always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and their disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm the title, public claim, every numbered step, and Remarks were read]
```


---

# This dispatch

## Selection reasons

- critical risk (12): 22 declared dependencies; 22 cited facts; 9 numbered proof steps; boundary-sensitive language; induction, recursion, or minimality; analytic limiting/completeness language
- top-20 dependency-cone consumer (23 generated manifest edges)

## Target item — `thm-cantor-set-ternary-description`

Normalized current SHA-256: `717ea9e0c080af1ea2a947de1ca7d2bdeab7663d2a7e151db02a0ddd3548fa89`

The complete current item follows, including frontmatter:

````markdown
---
id: thm-cantor-set-ternary-description
kind: theorem
title: "The Cantor set is exactly the set of $\\sum_{k \\ge 1} a_k 3^{-k}$ with every $a_k \\in \\{0,2\\}$, and this gives a bijection with $\\{0,1\\}^{\\mathbb{N}}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cantor-set, def-series, thm-geometric-series, def-injection-surjection-bijection, def-integer-power, lem-power-laws, thm-nonnegative-series-bounded-partial-sums, def-interval, lem-series-linearity, thm-recursion, thm-induction-principle, thm-well-ordering-principle, lem-geometric-sequence-null, def-real-limit, lem-limit-unique, def-sequence, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules, lem-of-abs-value]
justified_by: []
forward_refs: [cex-cantor-point-that-is-not-an-endpoint]
aliases: []
landmark: true
short: "$C$ = ternary digits in $\\{0,2\\}$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (§2.44)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Stanford Math 205A, Homework 1"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF205-11/hw205-11-1.pdf"
    - title: "University of Chicago MATH 395 notes"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
pipeline_run: null
---

## Statement

Let $D$ be the set of sequences $a : \mathbb{N} \to \{0,2\}$
([[def-sequence]]), the two values being the real numbers $0$ and $2$. For
$a \in D$ the series $\sum_{k \ge 0} a_k 3^{-k-1}$ converges ([[def-series]]);
write

$$\Phi(a) \;:=\; \sum_{k=0}^{\infty} a_k 3^{-k-1} .$$

Then, with $C$ and $(C_n)$ as in [[def-cantor-set]]:

1. $\Phi(a) \in [0,1]$ for every $a \in D$, and $C = \{\, \Phi(a) : a \in D \,\}$;
2. $\Phi$ is injective, so $\Phi$ is a bijection from $D$ onto $C$
   ([[def-injection-surjection-bijection]]);
3. consequently $b \mapsto \Phi\big((2 b_k)_k\big)$ is a bijection from
   $\{0,1\}^{\mathbb{N}}$, the set of sequences with values in $\{0,1\}$, onto
   $C$;
4. $C = \tfrac13 C \cup \big(\tfrac23 + \tfrac13 C\big)$, and the two sets on the
   right are disjoint.

**On the indexing.** The digit $a_k$ carries the weight $3^{-k-1}$, so the
series starts at $k = 0$ with the term $a_0/3$; written with the classical
$1$-based index it reads $\sum_{k \ge 1} a_k 3^{-k}$, which is the form in the
title. Sequences in this library are functions on $\mathbb{N}$ and $\mathbb{N}$
contains $0$ ([[def-sequence]]), so the $0$-based form is the one used
throughout the proof.

## Facts & Assumptions

**Given:** The sets $C_n$ and $C$ of [[def-cantor-set]], the set $D$ of sequences with values in $\{0,2\}$, and for $a \in D$ the shifted sequence $\sigma a$ defined by $(\sigma a)_k := a_{k+1}$, which again lies in $D$.

[L1] The Cantor set: $C_0 = [0,1]$, $C_{n+1} = \tfrac13 C_n \cup (\tfrac23 + \tfrac13 C_n)$, $C = \bigcap_n C_n = \bigcap_n C_{n+1}$, every $C_n \subseteq [0,1]$, the two halves of $C_{n+1}$ lie in $[0,\tfrac13]$ and in $[\tfrac23,1]$ respectively and are disjoint, and $3^{-n}$ denotes $(3^{-1})^n$ ([[def-cantor-set]], [[def-interval]]).

[L2] Series: partial sums $s_n = \sum_{k<n} t_k$, convergence of $(s_n)$, the sum as its limit, the tail clause $\sum_{k \ge m} t_k$ and the identity $\sum_{k<n+1} t_k = t_0 + \sum_{j<n} t_{j+1}$ ([[def-series]], [[def-sequence]]).

[L3] A series of nonnegative terms converges exactly when its partial sums are bounded above, its sum is then their supremum, every partial sum is at most the sum, and a convergent series of nonnegative terms has sum $\ge 0$ ([[thm-nonnegative-series-bounded-partial-sums]]).

[L4] $\sum_{k=0}^{\infty} 3^{-k} = 1/(1 - 3^{-1}) = 3 \cdot 2^{-1}$ ([[thm-geometric-series]], [[def-integer-power]], [[lem-power-laws]]).

[L5] Convergent series add and scale termwise ([[lem-series-linearity]]).

[L6] Recursion and induction on $\mathbb{N}$ ([[thm-recursion]], [[thm-induction-principle]]).

[L7] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L8] $3^{-n} \to 0$ ([[lem-geometric-sequence-null]]); convergence is tested against rational $\varepsilon > 0$ and a convergent sequence has exactly one limit ([[def-real-limit]], [[lem-limit-unique]]); $|z| \ge 0$ and $|z| = z$ for $z \ge 0$ ([[lem-of-abs-value]]).

[L9] Ordered-field arithmetic: $0 < 1$, so $2 > 0$ and $3 > 0$ and $3^{-1} > 0$, and $3^{-1} < 2 \cdot 3^{-1}$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 **$\Phi$ is well defined and takes values in $[0,1]$.** For $a \in D$ every term $a_k 3^{-k-1}$ is $\ge 0$ by [L1] and [L9], and for every $n$ the partial sum satisfies $\sum_{k<n} a_k 3^{-k-1} \le \sum_{k<n} 2 \cdot 3^{-1} \cdot 3^{-k} = 2 \cdot 3^{-1} \sum_{k<n} 3^{-k} \le 2 \cdot 3^{-1} \cdot 3 \cdot 2^{-1} = 1$, by [L3], [L4] and [L9]. So by [L3] the series converges, its sum $\Phi(a)$ satisfies $0 \le \Phi(a) \le 1$, and $\Phi(a) \in [0,1]$ by [L1]. [given, L1, L3, L4, L9]

1.2 **Shift identity:** $\Phi(a) = a_0 \cdot 3^{-1} + 3^{-1}\Phi(\sigma a)$ for every $a \in D$. Indeed by [L2] the partial sums satisfy $\sum_{k<n+1} a_k 3^{-k-1} = a_0 3^{-1} + \sum_{j<n} a_{j+1} 3^{-j-2} = a_0 3^{-1} + 3^{-1}\sum_{j<n} a_{j+1}3^{-j-1}$, using $3^{-j-2} = 3^{-1}\cdot 3^{-j-1}$ from [L1] and [L9]; letting $n$ grow and using [L5] and [L2] gives the identity. [given, L1, L2, L5, L9]

1.3 **Self-similarity of $C$**, claim 4. If $y \in C$ then $y \in C_n$ for every $n$, so $y \cdot 3^{-1} \in \tfrac13 C_n \subseteq C_{n+1}$ and $2 \cdot 3^{-1} + y \cdot 3^{-1} \in \tfrac23 + \tfrac13 C_n \subseteq C_{n+1}$ for every $n$, whence both lie in $\bigcap_n C_{n+1} = C$ by [L1]; this gives the inclusion $\supseteq$. Conversely let $x \in C$, so $x \in C_{n+1}$ for every $n$. By [L1] the first half of $C_{n+1}$ lies in $[0,\tfrac13]$ and the second in $[\tfrac23,1]$, and $\tfrac13 < \tfrac23$ by [L9]. If $x \le \tfrac13$ then $x \notin [\tfrac23,1]$, so for every $n$ one has $x \in \tfrac13 C_n$, that is $3x \in C_n$; hence $3x \in C$ and $x \in \tfrac13 C$. If $x > \tfrac13$ then $x \notin [0,\tfrac13]$, so for every $n$ one has $x \in \tfrac23 + \tfrac13 C_n$, that is $3x - 2 \in C_n$; hence $3x - 2 \in C$ and $x \in \tfrac23 + \tfrac13 C$. Disjointness is [L1] and [L9], since $\tfrac13 C \subseteq [0,\tfrac13]$ and $\tfrac23 + \tfrac13 C \subseteq [\tfrac23,1]$. [L1, L9]

2.1 **$\Phi(a) \in C$ for every $a \in D$.** By induction on $n$ ([L6]) the statement "for every $a \in D$, $\Phi(a) \in C_n$" holds for every $n$: at $n = 0$ it is step 1.1 and [L1]; and if it holds at $n$, then for $a \in D$ the value $a_0$ is $0$ or $2$, so step 1.2 gives $\Phi(a) = 3^{-1}\Phi(\sigma a) \in \tfrac13 C_n$ in the first case and $\Phi(a) = 2 \cdot 3^{-1} + 3^{-1}\Phi(\sigma a) \in \tfrac23 + \tfrac13 C_n$ in the second, so $\Phi(a) \in C_{n+1}$ by [L1]. Hence $\Phi(a) \in \bigcap_n C_n = C$. [step 1.1, step 1.2, L1, L6]

2.2 **The digit recursion.** Fix $x \in C$ and let $T : \mathbb{R} \to \mathbb{R}$ be $T(y) := 3y$ for $y \le 3^{-1}$ and $T(y) := 3y - 2$ for $y > 3^{-1}$, a definition by cases on the total order ([L9]) and so a genuine function. By [L6] there is $y : \mathbb{N} \to \mathbb{R}$ with $y_0 = x$ and $y_{n+1} = T(y_n)$; put $a_n := 0$ when $y_n \le 3^{-1}$ and $a_n := 2$ otherwise, so that $a \in D$ and $y_{n+1} = 3 y_n - a_n$ for every $n$. Every $y_n$ lies in $C$, by induction on $n$: $y_0 = x \in C$; and if $y_n \in C$ then, by step 1.3, either $y_n \in \tfrac13 C \subseteq [0,\tfrac13]$ or $y_n \in \tfrac23 + \tfrac13 C \subseteq [\tfrac23,1]$, and these two cases are exactly $y_n \le \tfrac13$ and $y_n > \tfrac13$ by [L9]; in the first $y_n = z \cdot 3^{-1}$ with $z \in C$ and $y_{n+1} = 3y_n = z \in C$, in the second $y_n = 2 \cdot 3^{-1} + z \cdot 3^{-1}$ with $z \in C$ and $y_{n+1} = 3y_n - 2 = z \in C$. [step 1.3, L1, L6, L9]

2.3 **$\Phi$ is injective.** Let $a, b \in D$ with $a \ne b$; the set of $k$ with $a_k \ne b_k$ is a nonempty subset of $\mathbb{N}$, so by [L7] it has a least element $k$, and by symmetry we may take $a_k = 0$ and $b_k = 2$. By [L5], $\Phi(b) - \Phi(a) = \sum_{j \ge 0}(b_j - a_j)3^{-j-1}$, and the terms with $j < k$ vanish, so by [L2] this equals $2 \cdot 3^{-k-1} + R$ with $R := \sum_{j \ge k+1}(b_j - a_j)3^{-j-1}$. Every $b_j - a_j$ is at least $-2$, so the series $\sum_{j \ge k+1}\big((b_j - a_j) + 2\big)3^{-j-1}$ has nonnegative terms and hence nonnegative sum by [L3], giving $R \ge -\sum_{j \ge k+1} 2 \cdot 3^{-j-1} = -2 \cdot 3^{-k-2} \cdot 3 \cdot 2^{-1} = -3^{-k-1}$ by [L2], [L4], [L5] and [L9]. Therefore $\Phi(b) - \Phi(a) \ge 2 \cdot 3^{-k-1} - 3^{-k-1} = 3^{-k-1} > 0$ and $\Phi(a) \ne \Phi(b)$. [step 1.1, L2, L3, L4, L5, L7, L9]

3.1 **The value is recovered from the digits.** With $x$, $(y_n)$ and $a$ as in step 2.2, put $s_n := \sum_{k<n} a_k 3^{-k-1}$. Then $x = s_n + 3^{-n} y_n$ for every $n$, by induction on $n$ ([L6]): at $n = 0$ both sides are $x$, since $s_0 = 0$ by [L2] and $3^{0} = 1$; and if $x = s_n + 3^{-n}y_n$ then $s_{n+1} + 3^{-n-1}y_{n+1} = s_n + a_n 3^{-n-1} + 3^{-n-1}(3y_n - a_n) = s_n + 3^{-n}y_n = x$, using [L1], [L2] and [L9]. [step 2.2, L1, L2, L6, L9]

4.1 **Hence $x = \Phi(a)$, so $C \subseteq \Phi[D]$.** Every $y_n$ lies in $C \subseteq [0,1]$ by step 2.2 and [L1], so $0 \le x - s_n = 3^{-n}y_n \le 3^{-n}$ by step 3.1 and [L9]. Given a rational $\varepsilon > 0$, [L8] supplies $N$ with $3^{-n} < \varepsilon$ for all $n \ge N$, and then $|s_n - x| = x - s_n \le 3^{-n} < \varepsilon$ by [L8]; so $s_n \to x$. But $s_n \to \Phi(a)$ by [L2], since $(s_n)$ is the sequence of partial sums of the series defining $\Phi(a)$, and limits are unique by [L8]; therefore $x = \Phi(a)$ with $a \in D$. [step 2.2, step 3.1, L1, L2, L8, L9]

5.1 By steps 2.1 and 4.1 the image of $D$ under $\Phi$ is exactly $C$, which with step 1.1 is claim 1; step 2.3 is claim 2, so $\Phi$ is a surjection from $D$ onto $C$ that is injective, that is, a bijection ([[def-injection-surjection-bijection]]); the map $b \mapsto (2b_k)_k$ is a bijection from $\{0,1\}^{\mathbb{N}}$ onto $D$, with inverse $a \mapsto (a_k \cdot 2^{-1})_k$ by [L9], and a composition of bijections is a bijection, which is claim 3; and step 1.3 is claim 4. [step 1.1, step 1.3, step 2.1, step 2.3, step 4.1, L9] ∎

## Remarks

- **The endpoints are the digit sequences that are eventually constant.** For
  instance $0 = \Phi(0,0,0,\dots)$, $1 = \Phi(2,2,2,\dots)$,
  $\tfrac13 = \Phi(0,2,2,2,\dots)$ and $\tfrac23 = \Phi(2,0,0,0,\dots)$, the
  first two by [[thm-geometric-series]] and the last two by the shift identity of
  step 1.2. That the eventually constant sequences do **not** exhaust $C$ is the
  content of [[cex-cantor-point-that-is-not-an-endpoint]], where $1/4$ is
  computed to be $\Phi(0,2,0,2,\dots)$.

- **No digit is ever $1$, and that is the whole point.** A real of $[0,1]$ with a
  ternary expansion using the digit $1$ at some place and not representable
  without it lies in one of the removed middle thirds. The theorem does not
  assert that every real has a ternary expansion, and it does not need to: the
  map $\Phi$ is constructed from the digits, and the converse direction extracts
  digits from a point of $C$ by the canonical recursion of step 2.2, never by
  invoking a general expansion theorem.

- **Where the choice-freeness lies.** The digit extraction is a definition by
  cases on a total order fed to [[thm-recursion]], so the whole passage from a
  point of $C$ to its digit sequence is a single function, not a sequence of
  selections. The same discipline governs [[thm-perfect-set-uncountable-r]] and
  [[thm-baire-category-r]].

- **Claim 3 is what makes $C$ uncountable.** $\{0,1\}^{\mathbb{N}}$ is in
  bijection with the power set of $\mathbb{N}$, which is uncountable by
  [[thm-cantor-powerset]]; that route and the perfect-set route are both recorded
  in [[thm-cantor-set-properties]].
````

## Wave 8 provenance row for the target

```json
{
  "id": "thm-cantor-set-ternary-description",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://math.stanford.edu/~ryzhik/STANFORD/STANF205-11/hw205-11-1.pdf",
    "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
  ],
  "rationale": "The sources identify the Cantor set with ternary expansions using only 0 and 2. The local theorem strengthens the presentation to a uniquely chosen digit sequence and an explicit bijection with binary sequences, and adapts the standard digit proof.",
  "alpha_concurred": false,
  "at": "2026-08-09",
  "ledger": "wave8-real-analysis-cantor-continuity.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "def-cantor-set",
      "source_section": "Definition",
      "quote": "For $S \\subseteq \\mathbb{R}$ write $$\\tfrac{1}{3} S \\;:=\\; \\{\\, x \\cdot 3^{-1} : x \\in S \\,\\}, \\qquad \\tfrac{2}{3} + \\tfrac{1}{3} S \\;:=\\; \\{\\, 2 \\cdot 3^{-1} + x \\cdot 3^{-1} : x \\in S \\,\\},$$ and let $F : \\mathcal{P}(\\mathbb{R}) \\to \\mathcal{P}(\\mathbb{R})$ be $$F(S) \\;:=\\; \\tfrac{1}{3} S \\ \\cup \\ \\big(\\tfrac{2}{3} + \\tfrac{1}{3} S\\big).$$ By the recursion theorem ([[thm-recursion]]), applied to the set $\\mathcal{P}(\\mathbb{R})$, the starting element $[0,1]$ ([[def-interval]]) and the function $F$, there is a unique family $(C_n)_{n \\in \\mathbb{N}}$ of subsets of $\\mathbb{R}$ with $$C_0 = [0,1], \\qquad C_{n+1} = F(C_n) = \\tfrac{1}{3}C_n \\cup \\big(\\tfrac{2}{3} + \\tfrac{1}{3}C_n\\big) \\quad (n \\in \\mathbb{N}).$$ The **Cantor middle-thirds set** is $$C \\;:=\\; \\bigcap_{n \\in \\mathbb{N}} C_n .$$ **The first step really is the removal of the open middle third.** Directly from the clauses, $$C_1 \\;=\\; \\tfrac{1}{3}[0,1] \\cup \\big(\\tfrac{2}{3} + \\tfrac{1}{3}[0,1]\\big) \\;=\\; [0, \\tfrac13] \\cup [\\tfrac23, 1] \\;=\\; [0,1] \\setminus (\\tfrac13, \\tfrac23),$$ the middle equality because $x \\mapsto x \\cdot 3^{-1}$ is an order isomorphism of $\\mathbb{R}$ onto itself with inverse $x \\mapsto 3x$ ([[def-ordered-field]], [[lem-of-sign-rules]]), and the last because $0 \\le x \\le 1$ splits, by totality of the order, into $x \\le \\tfrac13$, $\\tfrac13 < x < \\tfrac23$ and $x \\ge \\tfrac23$. The recursion then performs the same operation inside each of the two scaled copies, which is what \"removing the open middle thirds\" names. **Every $C_n$ lies in $[0,1]$**, by induction on $n$ ([[thm-induction-principle]]): $C_0 = [0,1]$; and if $C_n \\subseteq [0,1]$ then $\\tfrac13 C_n \\subseteq [0,\\tfrac13]$ and $\\tfrac23 + \\tfrac13 C_n \\subseteq [\\tfrac23, 1]$, so $C_{n+1} \\subseteq [0,1]$ ([[lem-of-add-order]], [[lem-of-sign-rules]]). The same computation shows that **the two halves of $C_{n+1}$ are disjoint**, the first lying in $[0,\\tfrac13]$ and the second in $[\\tfrac23,1]$, and $\\tfrac13 < \\tfrac23$ ([[cor-of-one-positive]]). **The family is nested**, $C_{n+1} \\subseteq C_n$ for every $n$, again by induction. For $n = 0$ this is $C_1 = [0,\\tfrac13] \\cup [\\tfrac23,1] \\subseteq [0,1]$. And $F$ is monotone, in the sense that $S \\subseteq T$ implies $F(S) \\subseteq F(T)$, directly from the displayed description of $F$; so $C_{n+1} \\subseteq C_n$ gives $C_{n+2} = F(C_{n+1}) \\subseteq F(C_n) = C_{n+1}$. Consequently $C = \\bigcap_n C_n \\subseteq C_m$ for every $m$, and $\\bigcap_n C_{n+1} = \\bigcap_n C_n = C$. **Powers.** Here $3^{-n}$ means $(3^{-1})^n$, the integer power of [[def-integer-power]], so that $3^{0} = 1$, $3^{-(n+1)} \\cdot 3 = 3^{-n}$ and $3^{-n} > 0$ for every $n$ ([[lem-power-laws]], [[def-complete-ordered-field]]).",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "2.2",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "interval",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.1",
        "2.2",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-series",
      "source_section": "Definition",
      "quote": "**Convergence, the sum, divergence.** The **series** of $(a_k)$, written $\\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges ([[def-real-limit]]), and then the **sum of the series** is",
      "uses": [
        "1.2",
        "2.3",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-sequence",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]], [[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and $\\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]], [[def-nat-order]]). A **sequence of reals** is a function $x : \\mathbb{N} \\to \\mathbb{R}$. We write $x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or $(x_k)_{k \\in \\mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is the subset $\\{\\, x_k : k \\in \\mathbb{N} \\,\\} \\subseteq \\mathbb{R}$. Let $(x_k)$ be a sequence of reals and let $P$ be a property of indices. - $(x_k)$ is **bounded** if there is $M \\in \\mathbb{R}$ with $|x_k| \\le M$ for every $k \\in \\mathbb{N}$; it is **unbounded** otherwise. - $P$ holds **eventually** if there is $K \\in \\mathbb{N}$ such that $P(k)$ holds for every $k \\ge K$. - $P$ holds **frequently** if for every $K \\in \\mathbb{N}$ there is some $k \\ge K$ for which $P(k)$ holds. - For $K \\in \\mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \\in \\mathbb{N}$; it is again a sequence of reals. - A function $n : \\mathbb{N} \\to \\mathbb{N}$ is **strictly increasing** if $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$ along $n$ is the composite $x \\circ n$, written $(x_{n_k})_{k \\in \\mathbb{N}}$; it is again a sequence of reals. **Convergence and Cauchyness are not defined here.** They are already fixed, for sequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to $x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$ with $|x_k - x| < \\varepsilon$ for all $k \\ge K$, and $(x_k)$ is *Cauchy* when for every rational $\\varepsilon > 0$ there is $K \\in \\mathbb{N}$ with $|x_k - x_l| < \\varepsilon$ for all $k, l \\ge K$. This page builds the toolkit for those two notions and does not restate them. A sequence **converges** if it converges to some real, and **diverges** if it does not.",
      "uses": [
        "1.2",
        "2.3",
        "3.1",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-nonnegative-series-bounded-partial-sums",
      "source_section": "Statement",
      "quote": "converges **if and only if** $S$ is bounded above",
      "uses": [
        "1.1",
        "2.3"
      ]
    },
    {
      "fact": "L4",
      "source": "thm-geometric-series",
      "source_section": "Statement",
      "quote": "1. If $|r| < 1$ then the series $\\sum r^k$ converges ([[def-series]]) and",
      "uses": [
        "1.1",
        "2.3"
      ]
    },
    {
      "fact": "L4",
      "source": "def-integer-power",
      "source_section": "Definition",
      "quote": "**Integer exponents.** Every integer $m$ ([[def-integers]]) is either",
      "uses": [
        "1.1",
        "2.3"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-power-laws",
      "source_section": "Statement",
      "quote": "Let $a, b$ be elements of a field ([[def-field]]) and let integer powers be as in [[def-integer-power]]. 1. For all $m, n \\in \\mathbb{N}$: $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$. 2. If $a \\ne 0$ then $a^n \\ne 0$ for every $n \\in \\mathbb{N}$, and $a^{-m} = (a^m)^{-1}$ for every $m \\in \\mathbb{Z}$ ([[def-int-operations]]). 3. If $a \\ne 0$ and $b \\ne 0$ then all three identities of claim 1 hold for all $m, n \\in \\mathbb{Z}$.",
      "uses": [
        "1.1",
        "2.3"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-series-linearity",
      "source_section": "Statement",
      "quote": "Let $(a_k)$ and $(b_k)$ be sequences of reals whose series converge",
      "uses": [
        "1.2",
        "2.3"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-recursion",
      "source_section": "Statement",
      "quote": "there is a unique function $g : N \\to A$ such that $g(0) = a$ and $g(\\sigma(n)) = f(g(n))$ for all $n \\in N$",
      "uses": [
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-induction-principle",
      "source_section": "Statement",
      "quote": "This is the induction principle, the basis of proof by induction.",
      "uses": [
        "2.1",
        "2.2",
        "3.1"
      ]
    },
    {
      "fact": "L7",
      "source": "thm-well-ordering-principle",
      "source_section": "Statement",
      "quote": "Every nonempty subset $S \\subseteq \\mathbb{N}$ has a least element",
      "uses": [
        "2.3"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-geometric-sequence-null",
      "source_section": "Statement",
      "quote": "1. If $|r| < 1$ then $(r^k)$ is **null**, that is $r^k \\to 0$",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-real-limit",
      "source_section": "Definition",
      "quote": "A sequence $(x_k)$ of reals **converges** to $x \\in \\mathbb{R}$ when for every rational $\\varepsilon > 0$ there is $K$ with $|x_k - x| < \\hat\\varepsilon$ for all $k \\ge K$.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-limit-unique",
      "source_section": "Statement",
      "quote": "A sequence therefore has at most one limit",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with $|x|$ the absolute value ([[def-abs-value]]). Then $$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$ and, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "4.1"
      ]
    },
    {
      "fact": "L9",
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity satisfies $0 < 1$;",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.2",
        "2.3",
        "3.1",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L9",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and let $a, b, c, d \\in F$. 1. **Translation invariance.** If $a < b$ then $a + c < b + c$. 2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.2",
        "2.3",
        "3.1",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L9",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and let $a, b, c \\in F$. 1. If $a > 0$ and $b > 0$ then $ab > 0$. 2. If $a > 0$ and $b < 0$ then $ab < 0$. 3. If $a < 0$ and $b < 0$ then $ab > 0$. 4. If $c > 0$ then $a < b \\iff ac < bc$. 5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.2",
        "2.3",
        "3.1",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L9",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "ordered field",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.2",
        "2.3",
        "3.1",
        "4.1",
        "5.1"
      ]
    },
    {
      "fact": "L9",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.",
      "uses": [
        "1.1",
        "1.2",
        "1.3",
        "2.2",
        "2.3",
        "3.1",
        "4.1",
        "5.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "**$\\Phi$ is well defined and takes values in $[0,1]$.** For $a \\in D$ every term $a_k 3^{-k-1}$ is $\\ge 0$ by [L1] and [L9], and for every $n$ the partial sum satisfies $\\sum_{k<n} a_k 3^{-k-1} \\le \\sum_{k<n} 2 \\cdot 3^{-1} \\cdot 3^{-k} = 2 \\cdot 3^{-1} \\sum_{",
      "step": "1.1",
      "inputs": [
        "L1",
        "L9",
        "L3",
        "L4"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "**Shift identity:** $\\Phi(a) = a_0 \\cdot 3^{-1} + 3^{-1}\\Phi(\\sigma a)$ for every $a \\in D$. Indeed by [L2] the partial sums satisfy $\\sum_{k<n+1} a_k 3^{-k-1} = a_0 3^{-1} + \\sum_{j<n} a_{j+1} 3^{-j-2} = a_0 3^{-1} + 3^{-1}\\sum_{j<n} a_{j+1}3^{-j-1}$, using $",
      "step": "1.2",
      "inputs": [
        "L2",
        "L1",
        "L9",
        "L5"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "**Self-similarity of $C$**, claim 4. If $y \\in C$ then $y \\in C_n$ for every $n$, so $y \\cdot 3^{-1} \\in \\tfrac13 C_n \\subseteq C_{n+1}$ and $2 \\cdot 3^{-1} + y \\cdot 3^{-1} \\in \\tfrac23 + \\tfrac13 C_n \\subseteq C_{n+1}$ for every $n$, whence both lie in $\\big",
      "step": "1.3",
      "inputs": [
        "L1",
        "L9"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "**$\\Phi(a) \\in C$ for every $a \\in D$.** By induction on $n$ ([L6]) the statement \"for every $a \\in D$, $\\Phi(a) \\in C_n$\" holds for every $n$: at $n = 0$ it is step 1.1 and [L1]; and if it holds at $n$, then for $a \\in D$ the value $a_0$ is $0$ or $2$, so ste",
      "step": "2.1",
      "inputs": [
        "L6",
        "1.1",
        "L1",
        "1.2"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "**The digit recursion.** Fix $x \\in C$ and let $T : \\mathbb{R} \\to \\mathbb{R}$ be $T(y) := 3y$ for $y \\le 3^{-1}$ and $T(y) := 3y - 2$ for $y > 3^{-1}$, a definition by cases on the total order ([L9]) and so a genuine function. By [L6] there is $y : \\mathbb{N}",
      "step": "2.2",
      "inputs": [
        "L9",
        "L6",
        "1.3",
        "L1"
      ]
    },
    {
      "id": "step-2-3",
      "claim": "**$\\Phi$ is injective.** Let $a, b \\in D$ with $a \\ne b$; the set of $k$ with $a_k \\ne b_k$ is a nonempty subset of $\\mathbb{N}$, so by [L7] it has a least element $k$, and by symmetry we may take $a_k = 0$ and $b_k = 2$. By [L5], $\\Phi(b) - \\Phi(a) = \\sum_{j ",
      "step": "2.3",
      "inputs": [
        "L7",
        "L5",
        "L2",
        "L3",
        "L4",
        "L9",
        "1.1"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "**The value is recovered from the digits.** With $x$, $(y_n)$ and $a$ as in step 2.2, put $s_n := \\sum_{k<n} a_k 3^{-k-1}$. Then $x = s_n + 3^{-n} y_n$ for every $n$, by induction on $n$ ([L6]): at $n = 0$ both sides are $x$, since $s_0 = 0$ by [L2] and $3^{0}",
      "step": "3.1",
      "inputs": [
        "2.2",
        "L6",
        "L2",
        "L1",
        "L9"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "**Hence $x = \\Phi(a)$, so $C \\subseteq \\Phi[D]$.** Every $y_n$ lies in $C \\subseteq [0,1]$ by step 2.2 and [L1], so $0 \\le x - s_n = 3^{-n}y_n \\le 3^{-n}$ by step 3.1 and [L9]. Given a rational $\\varepsilon > 0$, [L8] supplies $N$ with $3^{-n} < \\varepsilon$ f",
      "step": "4.1",
      "inputs": [
        "2.2",
        "L1",
        "3.1",
        "L9",
        "L8",
        "L2"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "By steps 2.1 and 4.1 the image of $D$ under $\\Phi$ is exactly $C$, which with step 1.1 is claim 1; step 2.3 is claim 2, so $\\Phi$ is a surjection from $D$ onto $C$ that is injective, that is, a bijection ([[def-injection-surjection-bijection]]); the map $b \\ma",
      "step": "5.1",
      "inputs": [
        "2.1",
        "4.1",
        "1.1",
        "2.3",
        "L9",
        "1.3"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The Statement compares the fixed nonempty sets D and C; it has no empty input family."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "Steps 1.1–1.2 include the all-zero digit sequence and step 3.1 verifies the n=0 partial-sum identity."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "Step 1.1 bounds sums by 1 and step 1.3 treats the endpoint pieces inside [0,1]."
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "Step 2.3 separates distinct digit sequences; equality is the complementary harmless case needed for injectivity."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "Step 1.3 assigns the boundary 1/3 to the left branch with ≤ and keeps the two pieces disjoint; steps 1.1 and 5.1 include 0 and 1."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "Step 2.2 defines every digit and remainder by a deterministic order case and recursion; step 2.3 takes the least differing index, so no arbitrary digit choice occurs."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "Step 2.1 proves every permitted digit sequence maps into C."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "Steps 2.2–4.1 construct permitted digits for every x∈C and recover x as their series sum."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured this A2 contract by reading the item and each cited target from disk. Independent risk review occurs after A3/A4."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-cantor-set",
    "declared_target": "def-cantor-set",
    "target_statement_provenance": "literature-derived",
    "targetPage": "cantor-set-baire-and-measure-zero",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-series",
    "declared_target": "def-series",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-geometric-series",
    "declared_target": "thm-geometric-series",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-injection-surjection-bijection",
    "declared_target": "def-injection-surjection-bijection",
    "target_statement_provenance": "ai-altered",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-integer-power",
    "declared_target": "def-integer-power",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-power-laws",
    "declared_target": "lem-power-laws",
    "target_statement_provenance": "ai-altered",
    "targetPage": "roots-and-rational-powers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-nonnegative-series-bounded-partial-sums",
    "declared_target": "thm-nonnegative-series-bounded-partial-sums",
    "target_statement_provenance": "literature-derived",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-interval",
    "declared_target": "def-interval",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-series-linearity",
    "declared_target": "lem-series-linearity",
    "target_statement_provenance": "ai-altered",
    "targetPage": "series-and-nonnegative-tests",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-recursion",
    "declared_target": "thm-recursion",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-induction-principle",
    "declared_target": "thm-induction-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "thm-well-ordering-principle",
    "declared_target": "thm-well-ordering-principle",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-geometric-sequence-null",
    "declared_target": "lem-geometric-sequence-null",
    "target_statement_provenance": "ai-altered",
    "targetPage": "monotone-sequences-and-cauchy-completeness",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-real-limit",
    "declared_target": "def-real-limit",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-limit-unique",
    "declared_target": "lem-limit-unique",
    "target_statement_provenance": "literature-derived",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-sequence",
    "declared_target": "def-sequence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "sequences-and-limits",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "def-ordered-field",
    "declared_target": "def-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "cor-of-one-positive",
    "declared_target": "cor-of-one-positive",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-of-add-order",
    "declared_target": "lem-of-add-order",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-of-sign-rules",
    "declared_target": "lem-of-sign-rules",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "lem-of-abs-value",
    "declared_target": "lem-of-abs-value",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "thm-cantor-set-ternary-description",
    "sourcePage": "cantor-set-baire-and-measure-zero",
    "batch": "wave8-real-analysis-cantor-continuity",
    "target": "cex-cantor-point-that-is-not-an-endpoint",
    "declared_target": "cex-cantor-point-that-is-not-an-endpoint",
    "target_statement_provenance": "ai-generated",
    "targetPage": "cantor-set-baire-and-measure-zero-examples",
    "targetBatch": "wave8-real-analysis-cantor-continuity",
    "edge_type": "forward_ref",
    "kind": "forward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (27)

### `cex-cantor-point-that-is-not-an-endpoint`

````markdown
---
id: cex-cantor-point-that-is-not-an-endpoint
kind: counterexample
title: "$1/4$ lies in the Cantor set and is the endpoint of no removed interval, so the endpoints do not exhaust it"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [fs-cantor-set-countable, ex-cantor-set-in-ternary, thm-cantor-set-ternary-description, def-cantor-set, def-integer-power, lem-power-laws, def-series, thm-geometric-series, lem-series-linearity, thm-nonnegative-series-bounded-partial-sums, lem-geometric-sequence-null, def-real-limit, def-interval, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
cx_machine_verified: false
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Ternary numeral system (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ternary_numeral_system"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the Cantor set $C$ consists of the endpoints of the removed
intervals and is therefore at most countable
([[fs-cantor-set-countable]]).

The witness is $x_0 := 1/4$. It lies in $C$, its ternary digit sequence being the
alternating sequence $(0,2,0,2,\dots)$ ([[ex-cantor-set-in-ternary]]), and it is
the endpoint of no interval removed in the construction. Here, as everywhere on
this page, *$u$ is an endpoint of a removed interval* means that $u \in C$ and
there is $v \ne u$ with the open interval between $u$ and $v$ disjoint from $C$;
that is exactly what "the interval between them was removed" says in the
vocabulary available. What is shown below is that $C$ meets every interval
$(x_0, x_0 + \delta)$ and every interval $(x_0 - \delta, x_0)$, for every real
$\delta > 0$, so no such $v$ exists on either side.

## Facts & Assumptions

**Given:** The Cantor set $C$, the set $D$ of $\{0,2\}$-valued sequences and the bijection $\Phi : D \to C$ of [[thm-cantor-set-ternary-description]]; the alternating sequence $a \in D$, with $a_j = 0$ for even $j$ and $a_j = 2$ for odd $j$; and $x_0 := \Phi(a)$.

[A1] The refuted claim: every point of $C$ is an endpoint of a removed interval, so $C$ is at most countable.

[L1] $\Phi$ is a bijection from $D$ onto $C$ with $\Phi(b) = \sum_{j \ge 0}b_j 3^{-j-1}$, and $x_0 = \Phi(a) = 1/4$ ([[thm-cantor-set-ternary-description]], [[ex-cantor-set-in-ternary]], [[def-cantor-set]]).

[L2] Geometric tails: $\sum_{j \ge m}2 \cdot 3^{-j-1} = 3^{-m}$; a series of nonnegative terms has nonnegative sum and all partial sums at most the sum; convergent series add and scale termwise; and a series splits as $\sum_{j \ge 0} t_j = \sum_{j<m} t_j + \sum_{j \ge m} t_j$ ([[thm-geometric-series]], [[thm-nonnegative-series-bounded-partial-sums]], [[lem-series-linearity]], [[def-series]], [[def-integer-power]], [[lem-power-laws]]).

[L3] $3^{-n} \to 0$, and convergence to $0$ is tested against rational $\varepsilon > 0$ ([[lem-geometric-sequence-null]], [[def-real-limit]]).

[L4] Ordered-field arithmetic: $0 < 1$, so $3 > 0$ and $3^{-1} > 0$ and $2 \cdot 3^{-1} < 1$; $3^{-p} \le 3^{-q}$ whenever $q \le p$, by induction from $0 < 3^{-1} < 1$; adding a constant and multiplying by a positive preserve an inequality ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]], [[def-interval]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Counterexample

**Proof technique:** direct.

1.1 By [L1] the point $x_0 = 1/4$ lies in $C$ and has digit sequence $a$, with $a_{2m} = 0$ and $a_{2m+1} = 2$ for every $m \in \mathbb{N}$. By [L2], for every $m$ one may split $\Phi(a) = \sum_{j<2m}a_j3^{-j-1} + \sum_{j \ge 2m}a_j3^{-j-1}$, and every tail $\sum_{j \ge p}a_j3^{-j-1}$ lies between $0$ and $3^{-p}$. [given, L1, L2]

2.1 **Points of $C$ immediately above $x_0$.** For $m \in \mathbb{N}$ let $b \in D$ agree with $a$ at every index $< 2m$, have $b_{2m} = 2$, and have $b_j = 0$ for $j > 2m$. Writing $P := \sum_{j<2m}a_j3^{-j-1}$, step 1.1 and [L2] give $\Phi(b) = P + 2 \cdot 3^{-2m-1}$ and $\Phi(a) = P + 0 + T$ with $0 \le T \le 3^{-2m-1}$, so $\Phi(b) - x_0 = 2 \cdot 3^{-2m-1} - T$ lies between $3^{-2m-1}$ and $2 \cdot 3^{-2m-1}$; in particular $\Phi(b) > x_0$ and $\Phi(b) - x_0 \le 2 \cdot 3^{-2m-1} < 3^{-2m} \le 3^{-m}$ by [L4]. And $\Phi(b) \in C$ by [L1]. [step 1.1, L1, L2, L4]

2.2 **Points of $C$ immediately below $x_0$.** For $m \in \mathbb{N}$ let $d \in D$ agree with $a$ at every index $< 2m+1$, have $d_{2m+1} = 0$, and have $d_j = 2$ for $j > 2m+1$. Writing $Q := \sum_{j<2m+1}a_j3^{-j-1}$, step 1.1 and [L2] give $\Phi(d) = Q + 0 + 3^{-2m-2}$ and $\Phi(a) = Q + 2 \cdot 3^{-2m-2} + T'$ with $0 \le T' \le 3^{-2m-2}$, so $x_0 - \Phi(d) = 3^{-2m-2} + T'$ lies between $3^{-2m-2}$ and $2 \cdot 3^{-2m-2}$; in particular $\Phi(d) < x_0$ and $x_0 - \Phi(d) < 3^{-2m-1} \le 3^{-m}$ by [L4]. And $\Phi(d) \in C$ by [L1]. [step 1.1, L1, L2, L4]

3.1 Let the real $\delta > 0$ be given; by [L3] fix $m$ with $3^{-m} < \delta$. Steps 2.1 and 2.2 then produce points of $C$ in $(x_0,\ x_0 + \delta)$ and in $(x_0 - \delta,\ x_0)$. Consequently, for every $v > x_0$ the interval $(x_0, v)$ meets $C$, and for every $u < x_0$ the interval $(u, x_0)$ meets $C$; so there is no $v \ne x_0$ with the open interval between $x_0$ and $v$ disjoint from $C$, and $x_0$ is the endpoint of no removed interval. Since $x_0 \in C$, the claim [A1] fails at $x_0$. [step 2.1, step 2.2, A1, L1, L3, L4] ∎

## Remarks

- **The digits diagnose it.** By the argument of
  [[thm-cantor-function-properties]] the two endpoints of a gap have digit
  sequences that are eventually $2$ and eventually $0$ respectively; the digits of
  $1/4$ alternate for ever, so it can be neither. The proof above avoids that
  route and exhibits the approximating points directly, which is what makes it
  self-contained.

- **How many such points there are.** The eventually constant sequences form an
  at most countable set, while $C$ is uncountable
  ([[thm-cantor-set-properties]]); so the endpoints are a vanishing part of $C$
  and the refuted claim fails not marginally but completely.

- **$1/4$ is also where the Cantor function takes the value $1/3$**
  ([[ex-cantor-function-values]]), and it is the one value in that example whose
  computation needs the whole infinite digit sequence rather than a finite
  initial segment.
````

### `cor-of-one-positive`

````markdown
---
id: cor-of-one-positive
kind: corollary
title: "The multiplicative identity is positive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [lem-of-square-positive, def-field]
aliases: []
landmark: false
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "Elias Zakon, Mathematical Analysis: Axioms and Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.01%3A_Axioms_and_Basic_Definitions"
pipeline_run: null
proof_strategy: direct
---

## Statement

In any ordered field $F$ with positive cone $P$, the multiplicative identity
satisfies $0 < 1$; that is, $1 \in P$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$ and multiplicative identity $1$ ([[def-field]]).

[L1] In any field $1 \neq 0$ ([[def-field]]).

[L2] For every $x \neq 0$ the square satisfies $x^2 > 0$ ([[lem-of-square-positive]]).

[L3] The identity axiom gives $1 = 1 \cdot 1 = 1^2$ ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 By the field axioms $1 \neq 0$, and $1 = 1 \cdot 1 = 1^2$. [L1, L3]

2.1 Since $1 \neq 0$, applying the square lemma with $x = 1$ gives $1^2 > 0$. [step 1.1, L2]

3.1 Because $1 = 1^2$, it follows that $1 > 0$, i.e. $0 < 1$. [step 2.1, step 1.1, L3] ∎
````

### `def-cantor-set`

````markdown
---
id: def-cantor-set
kind: definition
title: "The Cantor middle-thirds set as the intersection of the sets $C_n$ obtained by removing open middle thirds"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-interval, thm-recursion, thm-induction-principle, def-integer-power, lem-power-laws, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: [def-cantor-middle-thirds-set]
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (§2.44)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "University of Chicago MATH 395 notes"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
pipeline_run: null
---

## Definition

For $S \subseteq \mathbb{R}$ write

$$\tfrac{1}{3} S \;:=\; \{\, x \cdot 3^{-1} : x \in S \,\}, \qquad \tfrac{2}{3} + \tfrac{1}{3} S \;:=\; \{\, 2 \cdot 3^{-1} + x \cdot 3^{-1} : x \in S \,\},$$

and let $F : \mathcal{P}(\mathbb{R}) \to \mathcal{P}(\mathbb{R})$ be

$$F(S) \;:=\; \tfrac{1}{3} S \ \cup \ \big(\tfrac{2}{3} + \tfrac{1}{3} S\big).$$

By the recursion theorem ([[thm-recursion]]), applied to the set
$\mathcal{P}(\mathbb{R})$, the starting element $[0,1]$ ([[def-interval]]) and
the function $F$, there is a unique family $(C_n)_{n \in \mathbb{N}}$ of subsets
of $\mathbb{R}$ with

$$C_0 = [0,1], \qquad C_{n+1} = F(C_n) = \tfrac{1}{3}C_n \cup \big(\tfrac{2}{3} + \tfrac{1}{3}C_n\big) \quad (n \in \mathbb{N}).$$

The **Cantor middle-thirds set** is

$$C \;:=\; \bigcap_{n \in \mathbb{N}} C_n .$$

**The first step really is the removal of the open middle third.** Directly from
the clauses,

$$C_1 \;=\; \tfrac{1}{3}[0,1] \cup \big(\tfrac{2}{3} + \tfrac{1}{3}[0,1]\big) \;=\; [0, \tfrac13] \cup [\tfrac23, 1] \;=\; [0,1] \setminus (\tfrac13, \tfrac23),$$

the middle equality because $x \mapsto x \cdot 3^{-1}$ is an order isomorphism of
$\mathbb{R}$ onto itself with inverse $x \mapsto 3x$ ([[def-ordered-field]],
[[lem-of-sign-rules]]), and the last because $0 \le x \le 1$ splits, by
totality of the order, into $x \le \tfrac13$, $\tfrac13 < x < \tfrac23$ and
$x \ge \tfrac23$. The recursion then performs the same operation inside each of
the two scaled copies, which is what "removing the open middle thirds" names.

**Every $C_n$ lies in $[0,1]$**, by induction on $n$ ([[thm-induction-principle]]):
$C_0 = [0,1]$; and if $C_n \subseteq [0,1]$ then $\tfrac13 C_n \subseteq [0,\tfrac13]$
and $\tfrac23 + \tfrac13 C_n \subseteq [\tfrac23, 1]$, so
$C_{n+1} \subseteq [0,1]$ ([[lem-of-add-order]], [[lem-of-sign-rules]]). The same
computation shows that **the two halves of $C_{n+1}$ are disjoint**, the first
lying in $[0,\tfrac13]$ and the second in $[\tfrac23,1]$, and $\tfrac13 < \tfrac23$
([[cor-of-one-positive]]).

**The family is nested**, $C_{n+1} \subseteq C_n$ for every $n$, again by
induction. For $n = 0$ this is $C_1 = [0,\tfrac13] \cup [\tfrac23,1] \subseteq
[0,1]$. And $F$ is monotone, in the sense that $S \subseteq T$ implies
$F(S) \subseteq F(T)$, directly from the displayed description of $F$; so
$C_{n+1} \subseteq C_n$ gives $C_{n+2} = F(C_{n+1}) \subseteq F(C_n) = C_{n+1}$.
Consequently $C = \bigcap_n C_n \subseteq C_m$ for every $m$, and
$\bigcap_n C_{n+1} = \bigcap_n C_n = C$.

**Powers.** Here $3^{-n}$ means $(3^{-1})^n$, the integer power of
[[def-integer-power]], so that $3^{0} = 1$, $3^{-(n+1)} \cdot 3 = 3^{-n}$ and
$3^{-n} > 0$ for every $n$ ([[lem-power-laws]], [[def-complete-ordered-field]]).

## Remarks

- **Why the self-similar recursion rather than a description by digits.** The
  clause $C_{n+1} = F(C_n)$ is a single application of [[thm-recursion]] to one
  explicitly given function on $\mathcal{P}(\mathbb{R})$, so nothing is selected
  at any stage and no listing of the $2^n$ intervals making up $C_n$ has to be
  constructed. Every structural property below is then proved by induction on
  $n$ through $F$. The description by ternary digits is a theorem about $C$, not
  its definition, and it is [[thm-cantor-set-ternary-description]].

- **$C$ is not empty.** $0 \in C_n$ for every $n$, by induction:
  $0 \in [0,1]$, and $0 \in C_n$ gives $0 = 0 \cdot 3^{-1} \in \tfrac13 C_n
  \subseteq C_{n+1}$. Likewise $1 \in C$, since $1 \in C_n$ gives
  $1 = \tfrac23 + 1 \cdot \tfrac13 \in C_{n+1}$. So $C$ contains at least the two
  endpoints; that it is in fact uncountable is
  [[thm-cantor-set-properties]].

- **The construction with a different proportion.** Replacing "middle third" by
  an interval of length $4^{-n}$ removed at stage $n$ produces a set that is
  closed, has empty interior and is *not* of measure zero
  ([[def-fat-cantor-set]]). So none of the qualitative properties of $C$ proved
  on this page is a consequence of its being nowhere dense, and the two
  constructions are kept apart deliberately.
````

### `def-complete-ordered-field`

````markdown
---
id: def-complete-ordered-field
kind: definition
title: "Complete ordered field (least-upper-bound property)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ordered-field]
aliases: [def-dedekind-complete-field]
landmark: true
short: "complete ordered field"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Wisconsin Math 521 notes: Real analysis"
      url: "https://people.math.wisc.edu/~jwrobbin/521dir/521.pdf"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]) and $S \subseteq F$.

- $u \in F$ is an **upper bound** of $S$ if $s \le u$ for all $s \in S$; $S$ is
  **bounded above** if it has an upper bound.
- $u \in F$ is a **least upper bound** (or **supremum**, $\sup S$) of $S$ if $u$
  is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$.

$F$ is a **complete ordered field** (equivalently, $F$ has the
**least-upper-bound property**, or is **Dedekind complete**) if every nonempty
$S \subseteq F$ that is bounded above has a least upper bound in $F$.

## Remarks

- A least upper bound, if it exists, is unique (two least upper bounds are each
  $\le$ the other, so equal by antisymmetry of the order).
- Applying the property to $\{-s : s \in S\}$ yields the dual **greatest lower
  bound** (infimum) property, so the two are equivalent.
- The Dedekind-cut reals have this property by construction
  ([[thm-dedekind-complete]]); the Cauchy-sequence reals acquire it via
  [[cor-cauchy-reals-lub-complete]]. This definition is the target for the
  uniqueness theorem [[thm-uniqueness-complete-ordered-field]].
````

### `def-injection-surjection-bijection`

````markdown
---
id: def-injection-surjection-bijection
kind: definition
title: "Injection, surjection, bijection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function, def-image-and-preimage-under-a-relation]
justified_by: []
aliases: [def-injective, def-surjective, def-bijective]
landmark: false
short: "injective, surjective, bijective"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-rehoming-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Bijection, injection and surjection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection"
    - title: "T. Tao, Analysis I, 3rd ed., §3.3 (Functions)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $A$ and $B$ be sets and let $f : A \to B$ be a function ([[def-function]]).

- $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all
  $x, y \in A$.
- $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$
  with $f(x) = b$; equivalently, the image $f[A] := \{ f(x) : x \in A \}$ equals
  $B$.
- $f$ is **bijective** if it is both injective and surjective.

For $S \subseteq A$ we write $f[S] = \{ f(x) : x \in S \}$ for the image of $S$,
and for $T \subseteq B$ we write $f^{-1}[T] = \{ x \in A : f(x) \in T \}$ for the
preimage of $T$; these are the image and preimage of a set under $f$ read as a
relation ([[def-image-and-preimage-under-a-relation]]).

## Remarks

- **Composition.** If $f : A \to B$ and $g : B \to C$ are both injective then so
  is $g \circ f$, since $g(f(x)) = g(f(y))$ forces $f(x) = f(y)$ and then
  $x = y$; if both are surjective then so is $g \circ f$, since any $c \in C$ is
  $g(b)$ for some $b \in B$ and that $b$ is $f(a)$ for some $a \in A$. Hence a
  composition of bijections is a bijection. These verifications, together with the
  two partial converses, are
  [[prop-composition-preserves-injectivity-surjectivity-and-bijectivity]].

- **Inverses.** $f : A \to B$ is bijective exactly when there is a function
  $f^{-1} : B \to A$ with $f^{-1}(f(x)) = x$ for all $x \in A$ and
  $f(f^{-1}(b)) = b$ for all $b \in B$; that two-sided inverse is unique, and it
  is itself a bijection. Injectivity alone gives a bijection from $A$ onto the
  image $f[A]$, and hence an inverse defined on $f[A]$ only. No choice principle
  is involved: the value $f^{-1}(b)$ is the *unique* $x$ with $f(x) = b$, so it
  is determined rather than selected. The full statement, with the uniqueness of the
  two-sided inverse, is
  [[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]; the
  corresponding statement for an arbitrary surjection is not available at this point
  in the reading order, because a right inverse for every surjection is equivalent
  to the Axiom of Choice.

- **What this item does and does not do.** A function $A \to B$ is a set of ordered
  pairs, single valued and total on $A$ ([[def-function]]); ordered pairs, Cartesian
  products, images and preimages are fixed by [[def-ordered-pair]],
  [[def-cartesian-product]] and [[def-image-and-preimage-under-a-relation]]. This
  item only fixes the three adjectives and the notation used for them. Nothing here
  is proved.
````

### `def-integer-power`

````markdown
---
id: def-integer-power
kind: definition
title: "Integer powers $a^m$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-recursion, def-ordered-field, def-integers, def-field, def-int-operations, lem-nat-embeds-int, lem-of-inverse-unique, lem-of-no-zero-divisors, lem-of-zero-mult, thm-int-ordered-ring]
justified_by: [lem-power-laws]
aliases: [def-power]
landmark: false
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §4.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $a \in \mathbb{R}$, where $\mathbb{R}$ is the ambient ordered field
([[def-ordered-field]], [[def-field]]).

**Natural exponents.** By the recursion theorem ([[thm-recursion]]) applied to
the set $\mathbb{R}$, the starting element $1$ and the function
$f(x) = x \cdot a$, there is a unique function $\mathbb{N} \to \mathbb{R}$,
written $n \mapsto a^n$, with

$$a^0 = 1, \qquad a^{n+1} = a^n \cdot a \quad (n \in \mathbb{N}).$$

Thus $a^1 = a$, $a^2 = a \cdot a$, and so on. Note that this is defined for
**every** $a$, including $a = 0$.

**Negative exponents.** If $a \ne 0$ and $n \in \mathbb{N}$ with $n \ge 1$, set

$$a^{-n} := (a^n)^{-1}.$$

**Why that is legitimate.** The right-hand side presupposes that $a^n$ is
invertible, that is, that $a^n \ne 0$. This is a proof obligation and not an
observation, and it is discharged by claim 2 of [[lem-power-laws]]: for $a \ne 0$
in a field, $a^n \ne 0$ for every $n \in \mathbb{N}$, proved there by induction on
$n$ from the fact that a field has no zero divisors ([[lem-of-no-zero-divisors]]).
That lemma is a statement *about* the operation introduced here, so it depends on
this definition and is recorded in this item's `justified_by` rather than in its
`deps` (SCHEMA §3). Given $a^n \ne 0$, the value $(a^n)^{-1}$ is a single
well-determined element, because multiplicative inverses in a field are unique
([[lem-of-inverse-unique]]).

**Integer exponents.** Every integer $m$ ([[def-integers]]) is either
$\iota(n)$ or $-\iota(n)$ for a unique natural $n$, where $\iota$ is the
embedding $\mathbb{N} \to \mathbb{Z}$ ([[lem-nat-embeds-int]],
[[def-int-operations]]). This too is a citation and not a slogan: the order on
$\mathbb{Z}$ is total ([[thm-int-ordered-ring]]), so $m \ge 0$ or $m < 0$; the
image of $\iota$ is exactly the set of nonnegative integers, and each of them is
$\iota(n)$ for a unique natural $n$ ([[lem-nat-embeds-int]]); and if $m < 0$ then
$-m > 0$, by compatibility of the order with addition ([[thm-int-ordered-ring]]),
so $-m = \iota(n)$ and $m = -\iota(n)$, with $n$ unique because $\iota$ is
injective. The two clauses above therefore define $a^m$ for every
$m \in \mathbb{Z}$ whenever $a \ne 0$, and for every $m \in \mathbb{N}$ for
arbitrary $a$. The clauses are consistent where they overlap: the only overlap is
$m = 0$, where $-\iota(0) = \iota(0)$ and $(a^0)^{-1} = 1^{-1} = 1 = a^0$.

## Remarks

- **The convention $0^0 = 1$ is adopted here**, and it is not a matter of taste
  but of agreement with the recursion above: $a^0 = 1$ is the starting value for
  every $a$, exactly as the empty product is $1$ ([[def-finite-sum]]). This is
  the convention that makes the empty product, the binomial theorem, and
  polynomial notation $\sum_k c_k x^k$ work at $x = 0$ without an exception. The
  competing convention "$0^0$ undefined" belongs to contexts where $x^y$ is
  studied as a function of two *real* variables and one wants continuity, which
  is unavailable and irrelevant here: the exponent in $a^m$ is an integer, never
  a real.
- $0^n = 0$ for every $n \ge 1$, since $0^{n} = 0^{n-1} \cdot 0 = 0$, a product
  with a zero factor ([[lem-of-zero-mult]]); and
  $0^{-n}$ is not defined for $n \ge 1$, since $0$ has no inverse.
- The exponent is an integer and stays an integer. Rational exponents are a
  separate construction resting on the existence of roots
  ([[thm-nth-roots-exist]], [[def-rational-power]]), and real exponents do not
  exist in this library yet ([[rem-real-exponents-deferred]]).
- The laws $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$ are
  proved, not assumed, in [[lem-power-laws]]; the order behaviour of $a \mapsto a^n$
  is [[lem-power-monotone]].
````

### `def-interval`

````markdown
---
id: def-interval
kind: definition
title: "Intervals of $\\mathbb{R}$: the nine order-convex forms, nondegeneracy, and length"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field, def-real-order, def-bounded-set]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (segments and cells)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §0.3 and §1.1"
      url: "https://www.jirka.org/ra/"
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]).

A subset $I \subseteq \mathbb{R}$ is **order-convex** when

$$x, y \in I \text{ and } x \le z \le y \;\Longrightarrow\; z \in I .$$

The **intervals** of $\mathbb{R}$ are the sets of the following nine forms, where
$a, b \in \mathbb{R}$:

| | bounded forms | | one-sided and full forms |
|---|---|---|---|
| $(a,b)$ | $\{x : a < x < b\}$ | $(a,\infty)$ | $\{x : a < x\}$ |
| $[a,b]$ | $\{x : a \le x \le b\}$ | $[a,\infty)$ | $\{x : a \le x\}$ |
| $[a,b)$ | $\{x : a \le x < b\}$ | $(-\infty,b)$ | $\{x : x < b\}$ |
| $(a,b]$ | $\{x : a < x \le b\}$ | $(-\infty,b]$ | $\{x : x \le b\}$ |
| | | $(-\infty,\infty)$ | $\mathbb{R}$ |

An interval is **open** when both of its written endpoints are excluded, that is
for the forms $(a,b)$, $(a,\infty)$, $(-\infty,b)$ and $(-\infty,\infty)$; it is
**closed** when both written endpoints are included, that is for $[a,b]$,
$[a,\infty)$, $(-\infty,b]$ and $(-\infty,\infty)$. The forms $[a,b)$ and
$(a,b]$ are **half-open**.

**The symbols $\pm\infty$ are notation and not elements of $\mathbb{R}$.** They
mark which side carries no endpoint condition at all; the five forms in the right
column are defined by the displayed conditions on $x$ alone, and no arithmetic is
ever performed with $\infty$. This is the same refusal to extend $\mathbb{R}$
silently that [[rem-sup-conventions]] records for suprema.

**Every one of the nine forms is order-convex.** Each is defined by a conjunction
of at most two conditions, each of the shape $a < x$, $a \le x$, $x < b$ or
$x \le b$, and each such condition is inherited by an intermediate point: if
$a < x$ and $x \le z$ then $a < z$, and if $z \le y$ and $y < b$ then $z < b$,
by transitivity of the order ([[def-ordered-field]]). Applying this to whichever
one or two conditions define the form in question gives $z \in I$ whenever
$x, y \in I$ and $x \le z \le y$.

**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly
when it is of one of the four forms in the left column: for those, $a$ is a lower
bound and $b$ an upper bound. The other five forms are unbounded, on the side or
sides written with $\infty$; the verification is in the remarks below.

**Nondegeneracy.** An interval is **degenerate** when it has at most one element,
and **nondegenerate** when it has at least two. For the four bounded forms with
endpoints $a$ and $b$:

- $[a,b]$ is nonempty exactly when $a \le b$, and it is nondegenerate exactly
  when $a < b$. It is the singleton $\{a\}$ when $a = b$.
- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each
  is nondegenerate.

The only assertion here that is not immediate from the defining conditions is
that $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because
$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to
both sides and halving ([[def-ordered-field]]); repeating the halving inside
$(a, (a+b)/2)$ produces a second point.

**Closed bounded intervals.** These are the sets $[a,b]$ with $a \le b$, which is
exactly the condition making them nonempty. They are the intervals the nested
interval property is stated for, and the phrase *closed bounded interval* always
carries the hypothesis $a \le b$ in this library.

**Length.** The **length** of a bounded interval presented by its endpoints
$a \le b$ is

$$\ell = b - a \;\ge\; 0 .$$

Length is attached to the presentation by endpoints and is not recovered from the
set: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is
$(c,c)$ for any other $c$, while each of these presentations has length $0$, so
nothing inconsistent arises; but the endpoints are named explicitly at every
point where a length is used in this library, and never inferred from the set.
Unbounded intervals are assigned no length.

## Remarks

- **Why the five unbounded forms really are unbounded.** Take $[a,\infty)$ and
  suppose $u \in \mathbb{R}$ were an upper bound of it. The element
  $x = a + |u - a| + 1$ satisfies $x \ge a$, so $x \in [a,\infty)$, and
  $x \ge a + (u - a) + 1 = u + 1 > u$, since $|t| \ge t$ ([[lem-of-abs-value]])
  and $1 > 0$ ([[cor-of-one-positive]]). That contradicts $x \le u$. The same
  computation with $a$ replaced by any element of $(a,\infty)$ handles the open
  form, and reflecting through the origin handles $(-\infty,b)$ and
  $(-\infty,b]$; $\mathbb{R}$ itself is unbounded on both sides for the same
  reason. Note that this uses no Archimedean property: it is the failure of a
  *single* bound, not the cofinality of the naturals.

- **The converse classification is not asserted here.** It is true that every
  order-convex subset of $\mathbb{R}$ is empty or one of the nine forms, and the
  proof runs through suprema and infima, but nothing in this library needs it and
  it is not proved anywhere here. What is used is only the direction proved
  above: each of the nine forms is order-convex.

- **Degenerate intervals are kept, not excluded.** $[a,a] = \{a\}$ and
  $(a,a) = \emptyset$ are intervals under this definition. Excluding them would
  force a nonemptiness hypothesis into every statement that produces an interval,
  and the nested interval property is a good illustration: its conclusion is that
  the intersection is nonempty, and in the equality case the intersection is the
  degenerate interval $[a,a]$, which is exactly the single point.
````

### `def-ordered-field`

````markdown
---
id: def-ordered-field
kind: definition
title: "Ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field]
aliases: []
landmark: true
short: "ordered field"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
---

## Definition

An **ordered field** is a field $F$ ([[def-field]]) together with a subset
$P \subseteq F$, the set of **positive** elements (the *positive cone*),
satisfying:

- **(O1) Trichotomy.** For each $x \in F$, exactly one of the following holds:
  $x \in P$, or $x = 0$, or $-x \in P$.
- **(O2) Closure.** If $x, y \in P$ then $x + y \in P$ and $x \cdot y \in P$.

We write $x > 0$ for $x \in P$ (read "$x$ is positive"), and define the order by

$$a < b \;:\Longleftrightarrow\; b - a \in P, \qquad a \le b \;:\Longleftrightarrow\; a < b \text{ or } a = b.$$

Thus $a > b$ means $b < a$, and $a \ge b$ means $b \le a$. An element $x$ with
$-x \in P$ (equivalently $x < 0$) is called **negative**.

## Remarks

- By trichotomy applied to $b - a$, for any $a, b$ exactly one of $a < b$,
  $a = b$, $a > b$ holds; this makes $\le$ a total order.
- (O2) says the positives are closed under addition and multiplication: sums and
  products of positives are positive.
- The rationals ([[thm-rat-ordered-field]]) and both constructions of the reals
  ([[thm-reals-ordered-field]], [[thm-reals-dedekind-ordered-field]]) are ordered
  fields, so every fact proved here from (O1)-(O2) holds in each of them.
````

### `def-real-limit`

````markdown
---
id: def-real-limit
kind: definition
title: "Limits and Cauchy sequences of reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-real-order]
aliases: []
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Cauchy sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy_sequence"
pipeline_run: null
---

## Definition

A sequence $(x_k)$ of reals **converges** to $x \in \mathbb{R}$ when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x| < \hat\varepsilon$ for all $k \ge K$. It is **Cauchy** when for
every rational $\varepsilon > 0$ there is $K$ with
$|x_k - x_l| < \hat\varepsilon$ for all $k, l \ge K$.

## Remarks

- Quantifying over rational $\varepsilon$ loses nothing: below any real
  $\varepsilon > 0$ lies a positive rational ([[lem-rat-embeds-dense]]).
- $|\cdot|$ is the absolute value of [[def-real-order]].
````

### `def-sequence`

````markdown
---
id: def-sequence
kind: definition
title: "Sequences of reals: bounded, eventually, frequently, tails, subsequences"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-numbers, def-natural-numbers, def-nat-order, def-real-limit, def-real-order, def-complete-ordered-field, lem-rat-embeds-dense]
justified_by: []
aliases: []
landmark: true
short: "$(x_k)$, bounded, eventually, subsequence"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "CMU 21-269 notes, Compactness — subsequences"
      url: "https://www.math.cmu.edu/~gautam/c/2026-269/notes/compactness.html"
    - title: "Sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequence"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "Subsequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subsequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-complete-ordered-field]],
[[def-real-numbers]]) with its order and absolute value ([[def-real-order]]), and
$\mathbb{N}$ is the set of natural numbers with its order ([[def-natural-numbers]],
[[def-nat-order]]).

A **sequence of reals** is a function $x : \mathbb{N} \to \mathbb{R}$. We write
$x_k$ for the value $x(k)$, call it the **$k$-th term**, and write $(x_k)$, or
$(x_k)_{k \in \mathbb{N}}$, for the function itself. The **range** of $(x_k)$ is
the subset $\{\, x_k : k \in \mathbb{N} \,\} \subseteq \mathbb{R}$.

Let $(x_k)$ be a sequence of reals and let $P$ be a property of indices.

- $(x_k)$ is **bounded** if there is $M \in \mathbb{R}$ with $|x_k| \le M$ for
  every $k \in \mathbb{N}$; it is **unbounded** otherwise.
- $P$ holds **eventually** if there is $K \in \mathbb{N}$ such that $P(k)$ holds
  for every $k \ge K$.
- $P$ holds **frequently** if for every $K \in \mathbb{N}$ there is some
  $k \ge K$ for which $P(k)$ holds.
- For $K \in \mathbb{N}$, the **$K$-th tail** of $(x_k)$ is the sequence
  $x^{(K)}$ defined by $x^{(K)}_j := x_{j + K}$ for $j \in \mathbb{N}$; it is
  again a sequence of reals.
- A function $n : \mathbb{N} \to \mathbb{N}$ is **strictly increasing** if
  $n_j < n_k$ whenever $j < k$. For such an $n$, the **subsequence** of $(x_k)$
  along $n$ is the composite $x \circ n$, written $(x_{n_k})_{k \in \mathbb{N}}$;
  it is again a sequence of reals.

**Convergence and Cauchyness are not defined here.** They are already fixed, for
sequences of reals, by the published [[def-real-limit]]: $(x_k)$ *converges* to
$x \in \mathbb{R}$ when for every rational $\varepsilon > 0$ there is
$K \in \mathbb{N}$ with $|x_k - x| < \varepsilon$ for all $k \ge K$, and $(x_k)$
is *Cauchy* when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$
with $|x_k - x_l| < \varepsilon$ for all $k, l \ge K$. This page builds the
toolkit for those two notions and does not restate them. A sequence
**converges** if it converges to some real, and **diverges** if it does not.

## Remarks

- **Identification of $\mathbb{Q}$ with its image.** The map $q \mapsto \hat q$
  is an embedding of ordered fields ([[lem-rat-embeds-dense]]), and as is
  standard we write $q$ for $\hat q$, so that a rational may be compared with a
  real without further comment. [[def-real-limit]] is stated with the hat; every
  rational $\varepsilon$ occurring on this page is its image under this
  embedding.

- **Rational and real $\varepsilon$ agree.** [[def-real-limit]] tests convergence
  against every *rational* $\varepsilon > 0$, and its own remark records that
  this loses nothing. Spelled out: suppose that for every rational
  $\varepsilon > 0$ there is $K$ with $|x_k - x| < \varepsilon$ for all
  $k \ge K$, and let $\eta > 0$ be an arbitrary *real*. Since $0 < \eta$,
  density of $\mathbb{Q}$ in $\mathbb{R}$ ([[lem-rat-embeds-dense]]) supplies a
  rational $\varepsilon$ with $0 < \varepsilon < \eta$, and the index $K$
  belonging to that $\varepsilon$ satisfies $|x_k - x| < \varepsilon < \eta$ for
  all $k \ge K$. The converse implication is immediate, since every positive
  rational is a positive real. So the two formulations define the same relation,
  and the same two lines apply verbatim to the Cauchy condition and to any
  condition of the shape "for every $\varepsilon > 0$, eventually
  $\cdots < \varepsilon$". Proofs on this page therefore run the test with a real
  $\varepsilon$ wherever that is more convenient, and say so by citing this
  remark; nothing is smuggled in.

- **Constant sequences converge.** For $c \in \mathbb{R}$ the constant sequence
  $x_k := c$ converges to $c$, because $|x_k - c| = |0| = 0 < \varepsilon$ for
  every $\varepsilon > 0$ and every $k$; it is bounded by $|c|$.

- **Eventually and frequently are dual.** $P$ holds frequently exactly when
  $\lnot P$ does not hold eventually, and $P$ holds eventually exactly when
  $\lnot P$ does not hold frequently. So the two quantifier patterns are
  negations of one another applied to the complementary property, and there is no
  third pattern hiding between them.

- **A sequence is not its range.** $(x_k)$ is a function, not a set, and the
  range does not determine the function: the sequence $x_0 = 0$, $x_k = 1$ for
  $k \ge 1$ and the sequence $y_0 = y_1 = 0$, $y_k = 1$ for $k \ge 2$ have the
  same range $\{0, 1\}$, yet they differ at $k = 1$, so they are different
  sequences. Order and repetition are part of the data and the range forgets
  both. Boundedness, on the other hand, depends only on the range.

- **Indexing.** Sequences here start at $k = 0$ because $\mathbb{N}$ contains
  $0$ ([[def-natural-numbers]]). Texts that index from $1$ describe the same
  objects up to a shift, and the shift changes nothing about convergence, by
  [[lem-limit-of-tail]].
````

### `def-series`

````markdown
---
id: def-series
kind: definition
title: "Series, partial sums, convergence and the sum, divergence, and the tail series"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-finite-sum, def-sequence, def-real-limit, def-real-numbers, lem-limit-unique]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field ([[def-real-numbers]]) and
a **sequence of reals** is a function $a : \mathbb{N} \to \mathbb{R}$
([[def-sequence]]), written $(a_k)$; recall that $\mathbb{N}$ contains $0$.

**Partial sums.** Let $(a_k)$ be a sequence of reals. Its **sequence of partial
sums** is

$$s_n \;:=\; \sum_{k < n} a_k \qquad (n \in \mathbb{N}),$$

the finite sum of [[def-finite-sum]]. In particular $s_0 = 0$, the empty sum, and
$s_{n+1} = s_n + a_n$ for every $n$, those being exactly the two recursion clauses
that define the finite sum. Note that $s_n$ is the sum of the $n$ terms
$a_0, \dots, a_{n-1}$, so the index $n$ counts terms rather than naming the last
one.

**Convergence, the sum, divergence.** The **series** of $(a_k)$, written
$\sum a_k$, **converges** when the sequence $(s_n)$ of partial sums converges
([[def-real-limit]]), and then the **sum of the series** is

$$\sum_{k=0}^{\infty} a_k \;:=\; \lim_{n} s_n .$$

The series **diverges** when $(s_n)$ does not converge. A convergent sequence of
reals has exactly one limit ([[lem-limit-unique]]), so the displayed symbol names
a single real number and nothing further has to be checked for it to be
well defined.

**Series with a general starting index.** Let $m \in \mathbb{N}$ and let $a$ be a
function on $\{\, k \in \mathbb{N} : k \ge m \,\}$, which we call a **family from
$m$** and write $(a_k)_{k \ge m}$. The series

$$\sum_{k \ge m} a_k$$

is by definition the series of the sequence $b_j := a_{j + m}$,
$j \in \mathbb{N}$, which is a genuine sequence of reals; it converges exactly
when that series converges, and its sum is then written
$\sum_{k = m}^{\infty} a_k$. Its partial sums are

$$\sum_{k=m}^{n-1} a_k \;=\; \sum_{j < n-m} a_{m+j} \qquad (n \ge m),$$

in the notation of [[def-finite-sum]], the value at $n = m$ being the empty sum
$0$. A sequence on $\mathbb{N}$ is the case $m = 0$, and the two readings of
$\sum a_k$ agree there, since $b_j = a_j$.

**This clause is not a convenience.** Sequences in this library are functions on
$\mathbb{N}$ and $\mathbb{N}$ contains $0$ ([[def-sequence]]), while many of the
classical series are built from expressions that are undefined at the index $0$:
$1/k$, $1/k^{p}$ and $|a_k|^{1/k}$ all require $k \ge 1$. Writing such a series as
$\sum_{k \ge 1} a_k$ names an honest object, whereas writing it as a sequence on
$\mathbb{N}$ would require a value at an index where the defining expression has
none. Every statement on this page says which starting index it uses.

**Tail series.** For $N \in \mathbb{N}$, the **$N$-th tail series** of
$\sum a_k$ is $\sum_{k \ge N} a_k$, that is the series of the $N$-th tail
$a^{(N)}$ of [[def-sequence]], whose terms are $a^{(N)}_j = a_{j+N}$. The
$0$-th tail series is the series itself.

## Remarks

- **"Diverges" here means "does not converge", and nothing more.** A divergent
  series may have partial sums that run away to $+\infty$, or to $-\infty$, or
  that oscillate without settling anywhere. The three behaviours are not
  distinguished by the word, and no statement on this page uses "diverges" to
  mean "the partial sums are unbounded" unless it says so.

- **The symbol $\sum_{k=0}^{\infty} a_k$ is defined only for a convergent
  series.** It denotes a real number, not a formal object, and it is illegitimate
  to write it down before convergence has been established. Where a proof needs
  to speak of the series without knowing whether it converges, it speaks of
  $(a_k)$ and of $(s_n)$.

- **Two indices, doing different work.** The index $k$ runs over the terms and is
  bound; the index $n$ runs over the partial sums and is the variable in which the
  limit is taken. Confusing them is the commonest slip in the subject, and it is
  the reason the definition above fixes $s_n = \sum_{k<n} a_k$ rather than
  $\sum_{k \le n} a_k$: with this choice the recursion $s_{n+1} = s_n + a_n$ is
  the one supplied by [[def-finite-sum]], with no shift anywhere.
````

### `lem-geometric-sequence-null`

````markdown
---
id: lem-geometric-sequence-null
kind: lemma
title: "For $|r| < 1$ the sequence $r^k$ is null, and for $|r| > 1$ the sequence $|r|^k$ diverges to $+\\infty$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-power, lem-power-laws, lem-bernoulli-inequality, lem-power-monotone, cor-archimedean-reciprocal, thm-of-archimedean, def-real-limit, def-sequence, def-divergence-to-infinity, lem-of-inverse-positive, lem-of-abs-value, def-abs-value, cor-of-one-positive, prop-of-reciprocal-order, thm-induction-principle, prop-of-multiply-inequalities, lem-of-naturals-positive, def-complete-ordered-field, def-ordered-field]
justified_by: []
forward_refs: [cex-cauchy-rationals-no-rational-limit]
aliases: []
landmark: false
proof_strategy: cases
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
    - title: "Geometric progression (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Geometric_progression"
    - title: "Bernoulli's inequality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bernoulli%27s_inequality"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Thm 3.20(b))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §6.5 (Lem 6.5.2)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
---

## Statement

Let $r \in \mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]).

1. If $|r| < 1$ then $(r^k)$ is **null**, that is $r^k \to 0$
   ([[def-real-limit]]).
2. If $|r| > 1$ then $(|r|^k)$ **diverges to $+\infty$**
   ([[def-divergence-to-infinity]]).

Claim 2 is stated for $|r|^k$ and not for $r^k$ on purpose: for $r < -1$ the
terms $r^k$ alternate in sign and are unbounded, so they neither converge nor
diverge to $+\infty$; what is true of them is the statement about their absolute
values.

Both claims come from Bernoulli's inequality ([[lem-bernoulli-inequality]]) and
the Archimedean property. Nothing here needs the least-upper-bound property
except through [[thm-of-archimedean]] and [[cor-archimedean-reciprocal]].

## Facts & Assumptions

**Given:** A real $r$, with integer powers as in [[def-integer-power]]; for $n \in \mathbb{N}$, the symbol $n$ also denotes the canonical natural $n \cdot 1_{\mathbb{R}}$ where it occurs in an arithmetic expression.

[L1] Absolute value: $|x| \ge 0$; $|x| = 0$ exactly when $x = 0$; $|xy| = |x|\,|y|$; and $|x| = x$ when $x \ge 0$, so in particular $|1| = 1$ because $1 > 0$ ([[lem-of-abs-value]], [[def-abs-value]], [[cor-of-one-positive]]).

[L2] Induction principle ([[thm-induction-principle]]), and the recursion clauses $a^0 = 1$, $a^{k+1} = a^k a$ defining integer powers ([[def-integer-power]]).

[L3] Bernoulli's inequality: $(1+x)^n \ge 1 + nx$ for $x \ge -1$ and $n \in \mathbb{N}$ ([[lem-bernoulli-inequality]]).

[L4] Power laws: $(ab)^n = a^n b^n$, and $a^n \ne 0$ when $a \ne 0$ ([[lem-power-laws]]).

[L5] Powers and order: $a \ge 0$ gives $a^n \ge 0$ and $a > 0$ gives $a^n > 0$; $1^n = 1$ for every $n$ ([[lem-power-monotone]]).

[L6] Reciprocals: $a > 0$ gives $a^{-1} > 0$; $0 < a < b$ gives $0 < b^{-1} < a^{-1}$ ([[lem-of-inverse-positive]]); and $0 < t < 1$ exactly when $1/t > 1$ ([[prop-of-reciprocal-order]]).

[L7] Archimedean property: for every $x \in \mathbb{R}$ there is a natural $n \ge 1$ with $x < n$ ([[thm-of-archimedean]]); and for every $\varepsilon > 0$ there is a natural $N \ge 1$ with $1/N < \varepsilon$ ([[cor-archimedean-reciprocal]]).

[L8] Canonical naturals: $n > 0$ for $n \ge 1$, and $m \le n$ in $\mathbb{N}$ gives $m \le n$ in $\mathbb{R}$ ([[lem-of-naturals-positive]]).

[L9] Multiplying inequalities of nonnegatives: $0 \le a \le b$ and $0 \le c \le d$ give $ac \le bd$ ([[prop-of-multiply-inequalities]]).

[L10] Trichotomy of the order on $\mathbb{R}$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

[L11] Convergence to $0$ and divergence to $+\infty$ for a sequence of reals; a rational test value $\varepsilon > 0$ is in particular a real one ([[def-real-limit]], [[def-divergence-to-infinity]], [[def-sequence]]).

## Proof

**Proof technique:** cases.

1.1 First, $|r^k| = |r|^k$ for every $k \in \mathbb{N}$, by induction: at $k = 0$ both sides are $|1| = 1$, and if $|r^k| = |r|^k$ then $|r^{k+1}| = |r^k r| = |r^k|\,|r| = |r|^k |r| = |r|^{k+1}$. [given, L1, L2]

1.2 **Case zero.** Assume $r = 0$. [given, assume-case zero]

1.3 **Case small.** Assume $0 < |r| < 1$. [given, assume-case small]

1.4 **Case large.** Assume $|r| > 1$. [given, assume-case large]

2.1 In case zero, $r^k = 0$ for every $k \ge 1$: indeed $r^1 = r^0 r = 1 \cdot 0 = 0$, and if $r^k = 0$ then $r^{k+1} = r^k r = 0$, so induction gives the claim from $k = 1$ on. [step 1.2, L2]

2.2 In case small, put $s := 1/|r|$, which is defined since $|r| \ne 0$, and $h := s - 1$. Then $s > 1$ and $h > 0$. [step 1.3, L1, L6, choose]

2.3 In case large, put $h' := |r| - 1$, so $h' > 0$ and $|r| = 1 + h'$. [step 1.4, choose]

3.1 In case zero, for every rational $\varepsilon > 0$ and every $k \ge 1$ we have $|r^k - 0| = |0| = 0 < \varepsilon$, so $r^k \to 0$ and claim 1 holds. [step 2.1, L1, L11]

3.2 In case small, $|r|^k s^k = (|r| s)^k = 1^k = 1$, so $|r|^k = 1/s^k$, and $s^k > 0$. [step 2.2, L4, L5]

3.3 In case small, Bernoulli applied to $h > 0 \ge -1$ gives $s^k = (1+h)^k \ge 1 + kh > kh > 0$ for every $k \ge 1$, using $1 > 0$ and $kh > 0$. [step 2.2, L3, L8, L9]

3.4 In case large, Bernoulli applied to $h' > 0 \ge -1$ gives $|r|^k = (1 + h')^k \ge 1 + k h'$ for every $k \in \mathbb{N}$. [step 2.3, L3]

3.5 In case large, let $M \in \mathbb{R}$ be arbitrary and use [L7] to fix a natural $n \ge 1$ with $M/h' < n$; then $M \le n h'$, since multiplying $M/h' \le n$ by $h' > 0$ preserves the inequality. [step 2.3, L7, L9, choose]

3.6 In case small, let $\varepsilon > 0$ be rational; then $\varepsilon h > 0$, so [L7] supplies a natural $N \ge 1$ with $1/N < \varepsilon h$, whence $1/(Nh) \le \varepsilon$ on multiplying by $1/h > 0$. [step 2.2, L6, L7, L9, choose]

4.1 In case small, combining steps 3.2 and 3.3: $0 < kh < s^k$ gives $|r|^k = 1/s^k < 1/(kh)$ for every $k \ge 1$. [step 3.2, step 3.3, L6]

4.2 In case large, for every $k \ge n$ we have $k h' \ge n h' \ge M$, so $|r|^k \ge 1 + k h' \ge 1 + M > M$, the last step because $1 > 0$. [step 3.4, step 3.5, L1, L8, L9]

5.1 In case small, for every $k \ge N$ we have $kh \ge Nh > 0$, hence $1/(kh) \le 1/(Nh) \le \varepsilon$, and therefore $|r^k - 0| = |r^k| = |r|^k < 1/(kh) \le \varepsilon$. [step 1.1, step 4.1, step 3.6, L6, L8, L9]

5.2 In case large, an index $n$ has been produced for an arbitrary real $M$ with $|r|^k > M$ for all $k \ge n$, which is exactly divergence to $+\infty$: claim 2 holds. [step 4.2, L11]

6.1 In case small, the rational $\varepsilon > 0$ was arbitrary and the index $N$ was produced from it, so $r^k \to 0$ and claim 1 holds. [step 5.1, L11]

7.1 The hypothesis $|r| < 1$ of claim 1 is exhausted by cases zero and small, since $|r| \ge 0$ with $|r| = 0$ exactly when $r = 0$, so trichotomy leaves only $0 < |r| < 1$; the hypothesis $|r| > 1$ of claim 2 is case large. Both claims are therefore established. [step 3.1, step 5.2, step 6.1, L1, L10, cases: zero small or large, cases-exhaustive] ∎

## Remarks

- **The two claims are not one claim in disguise.** For $|r| > 1$ the sequence
  $(r^k)$ itself has no limiting behaviour to record when $r$ is negative: its
  terms alternate in sign and grow, so it neither converges nor diverges to
  $+\infty$ nor to $-\infty$. Stating claim 2 for $|r|^k$ is what makes it true
  as written.

- **The boundary $|r| = 1$ is excluded and is genuinely different.** For $r = 1$
  the sequence is constant $1$; for $r = -1$ it is the alternating sequence
  ([[lem-alternating-sequence]]), which is bounded and divergent
  ([[fs-bounded-implies-convergent]]). So neither claim extends to $|r| = 1$, and
  the two cases at the boundary do not even agree with each other.

- **Where this is used.** Claim 1 supplies the null sequence $c^{k}$ that makes a
  contractive sequence Cauchy ([[thm-contractive-implies-cauchy]]) and the null
  sequence $(1/10)^n$ that identifies the limit of the decimal truncations of
  $\sqrt 2$ ([[cex-cauchy-rationals-no-rational-limit]]).
````

### `lem-limit-unique`

````markdown
---
id: lem-limit-unique
kind: lemma
title: "A sequence has at most one limit"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-real-limit, def-sequence, thm-of-archimedean, lem-of-triangle-inequality, lem-of-abs-value, lem-rat-embeds-dense, lem-of-inverse-positive, lem-of-add-order, lem-of-sign-rules, cor-of-one-positive, thm-nat-linear-order, def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "limits are unique"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis, Ch. 3"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/ch3.pdf"
    - title: "Limit of a sequence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Limit_of_a_sequence"
    - title: "T. Tao, Analysis I, 3rd ed., §6.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $(x_k)$ be a sequence of reals ([[def-sequence]]) and let $x, y \in
\mathbb{R}$. If $(x_k)$ converges to $x$ and $(x_k)$ converges to $y$
([[def-real-limit]]), then $x = y$. A sequence therefore has at most one limit,
and when a limit exists it may be denoted $\lim_{k} x_k$.

## Facts & Assumptions

**Given:** A sequence $(x_k)$ of reals and reals $x, y$ such that $(x_k)$ converges to $x$ and $(x_k)$ converges to $y$ ([[def-sequence]], [[def-real-limit]]).

[L1] Convergence: $(x_k)$ converges to $z$ when for every rational $\varepsilon > 0$ there is $K \in \mathbb{N}$ with $|x_k - z| < \varepsilon$ for all $k \ge K$ ([[def-real-limit]]).

[L2] Triangle inequality: $|a + b| \le |a| + |b|$ in any ordered field, in particular in $\mathbb{R}$ ([[lem-of-triangle-inequality]], [[def-complete-ordered-field]]).

[L3] Absolute value: $|u| \ge 0$, and $|u| = 0$ if and only if $u = 0$, and $|-u| = |u|$ ([[lem-of-abs-value]]).

[L4] Small rationals: for every real $\eta > 0$ there is a rational $\varepsilon$ with $0 < \varepsilon < \eta$. Either route gives this: density of $\mathbb{Q}$ in $\mathbb{R}$ ([[lem-rat-embeds-dense]]) applied to the pair $0 < \eta$; or the Archimedean property ([[thm-of-archimedean]]) applied to $1/\eta$, which yields a natural $n \ge 1$ with $1/\eta < n$ and hence $0 < 1/n < \eta$ ([[lem-of-inverse-positive]]).

[L5] Order arithmetic in $\mathbb{R}$. Trichotomy, so $u \ne 0$ together with $|u| \ge 0$ and $|u| \ne 0$ forces $|u| > 0$; transitivity and irreflexivity of $<$; and, since $u \le v$ means $u < v$ or $u = v$, the mixed form $u \le v < w \Rightarrow u < w$ ([[def-complete-ordered-field]], [[def-ordered-field]]). Adding two strict inequalities: $a < b$ and $c < d$ give $a + c < b + d$ ([[lem-of-add-order]]). Multiplying by a positive: for $c > 0$, $a < b$ gives $ac < bc$ ([[lem-of-sign-rules]]). Halving a positive: $1 > 0$ ([[cor-of-one-positive]]), so $2 := 1 + 1 > 0$ because the positives are closed under addition ([[def-ordered-field]]), hence $2^{-1} > 0$ ([[lem-of-inverse-positive]]) and $\eta/2 = \eta \cdot 2^{-1} > 0$ whenever $\eta > 0$ ([[lem-of-sign-rules]]).

[L6] The order on $\mathbb{N}$ is total, so any two indices $K_1, K_2$ admit an index $k$ with $k \ge K_1$ and $k \ge K_2$ ([[thm-nat-linear-order]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $x \ne y$. [assume-contra]

2.1 Then $x - y \ne 0$, so $|x - y| \ne 0$ while $|x - y| \ge 0$; by trichotomy $|x - y| > 0$, and hence $|x - y|/2 > 0$. [step 1.1, L3, L5]

3.1 Choose a rational $\varepsilon$ with $0 < \varepsilon < |x - y|/2$; multiplying that inequality by $2 > 0$ and using $(|x - y|/2) \cdot 2 = |x - y|$ gives $2\varepsilon < |x - y|$. [step 2.1, L4, L5, algebra, choose]

4.1 Since $(x_k)$ converges to $x$ there is $K_1$ with $|x_k - x| < \varepsilon$ for all $k \ge K_1$, and since $(x_k)$ converges to $y$ there is $K_2$ with $|x_k - y| < \varepsilon$ for all $k \ge K_2$. [step 3.1, L1]

5.1 Fix an index $k$ with $k \ge K_1$ and $k \ge K_2$; then $|x - y| = |(x - x_k) + (x_k - y)| \le |x - x_k| + |x_k - y| = |x_k - x| + |x_k - y|$, while adding the two strict inequalities of step 4.1 gives $|x_k - x| + |x_k - y| < \varepsilon + \varepsilon = 2\varepsilon$; composing the non-strict inequality with the strict one yields $|x - y| < 2\varepsilon$. [step 4.1, L2, L3, L5, L6]

6.1 Combining, $2\varepsilon < |x - y| < 2\varepsilon$, so $2\varepsilon < 2\varepsilon$, which contradicts irreflexivity of the strict order. [step 3.1, step 5.1, L5]

7.1 The assumption $x \ne y$ is therefore untenable, so $x = y$: a sequence of reals has at most one limit. [step 6.1, discharge-contradiction] ∎

## Remarks

- Uniqueness is what licenses the notation $\lim_{k} x_k$ and the phrase *the* limit. Without it the symbol would not denote. This library writes $\lim_k x_k$ only for sequences already known to converge, exactly as it writes $\sup S$ only for sets already known to have a supremum ([[rem-sup-conventions]]).

- The proof uses only that $\mathbb{R}$ is an ordered field in which arbitrarily small positive rationals exist, that is, an Archimedean ordered field ([[thm-of-archimedean]]). Completeness is not needed: limits are unique in $\mathbb{Q}$ too, where many sequences fail to have one.

- The hypothesis is genuinely about a single sequence having two limits. Two *different* sequences may of course share a limit, and a sequence with no limit at all is not excluded by anything here.
````

### `lem-of-abs-value`

````markdown
---
id: lem-of-abs-value
kind: lemma
title: "Basic properties of the absolute value"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-abs-value, def-ordered-field, lem-of-mult-neg, lem-of-sign-rules]
aliases: []
landmark: false
short: "|x| properties"
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed."
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Purdue University analysis notes: Ordered fields and absolute value"
      url: "https://www.math.purdue.edu/~gcavigli/Swanson.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$, with
$|x|$ the absolute value ([[def-abs-value]]). Then

$$|x| \ge 0; \quad |x| = 0 \iff x = 0; \quad -|x| \le x \le |x|; \quad |-x| = |x|; \quad |xy| = |x|\,|y|;$$

and, for every $c > 0$, one has $|x| < c \iff -c < x < c$.

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] Absolute value: $|u| = u$ if $u \ge 0$, and $|u| = -u$ if $u < 0$ ([[def-abs-value]]).

[L2] Ordered-field order: trichotomy holds (for each $u$ exactly one of $u > 0$, $u = 0$, $u < 0$), $a < b$ means $b - a$ is positive, and sums and products of positives are positive ([[def-ordered-field]]).

[L3] Signs in products: $(-a)b = -(ab)$ and $(-a)(-b) = ab$ ([[lem-of-mult-neg]]).

[L4] Sign rules: a product of two elements of the same sign is positive, and a product of two elements of opposite sign is negative ([[lem-of-sign-rules]]).

## Proof

**Proof technique:** cases.

1.1 Case $x > 0$: by [L1] $|x| = x > 0$, so $|x| \ge 0$ and $|x| \ne 0$; since $-x < 0$ we get $|-x| = -(-x) = x = |x|$ by [L1], and $-|x| = -x < 0 < x = |x|$, so $-|x| \le x \le |x|$. [assume-case pos, L1, L2, algebra]

1.2 Case $x = 0$: then $|x| = |0| = 0$, so $|x| \ge 0$ holds with $|x| = 0$ and $x = 0$, while $|-x| = |0| = |x|$ and $-|x| = 0 \le 0 \le 0 = |x|$. [assume-case zero, L1]

1.3 Case $x < 0$: by [L1] $|x| = -x$, and [L2] gives $-x > 0$, so $|x| > 0$ and $|x| \ne 0$; here $|-x| = -x = |x|$ by [L1], and $-|x| = -(-x) = x \le x$ while $x < 0 < -x = |x|$, so $-|x| \le x \le |x|$. [assume-case neg, L1, L2, algebra]

1.4 Case $x = 0$ or $y = 0$: then $xy = 0$, so $|xy| = 0$, and one of $|x|, |y|$ is $0$, whence $|x|\,|y| = 0 = |xy|$. [assume-case zerofactor, L1]

1.5 Case $x, y$ have the same sign (both positive or both negative): by [L4] $xy > 0$, so $|xy| = xy$, while $|x|\,|y| = xy$ by [L3] (for $x, y < 0$ this is $(-x)(-y) = xy$), hence $|xy| = |x|\,|y|$. [assume-case same, L1, L3, L4]

1.6 Case $x, y$ have opposite signs (one positive, one negative): by [L4] $xy < 0$, so $|xy| = -(xy)$, while $|x|\,|y| = -(xy)$ by [L3] (namely $x(-y)$ or $(-x)y$), hence $|xy| = |x|\,|y|$. [assume-case opposite, L1, L3, L4]

2.1 By trichotomy [L2] each $x$ lies in exactly one of the cases 1.1-1.3, and in each we verified $|x| \ge 0$, that $|x| = 0 \iff x = 0$, that $|-x| = |x|$, and that $-|x| \le x \le |x|$; hence all four hold for every $x$. [step 1.1, step 1.2, step 1.3, cases-exhaustive]

2.2 By trichotomy [L2] each pair $x, y$ lies in exactly one of the cases 1.4-1.6, and in each $|xy| = |x|\,|y|$; hence $|xy| = |x|\,|y|$ for all $x, y$. [step 1.4, step 1.5, step 1.6, cases-exhaustive]

3.1 Let $c > 0$: if $|x| < c$ then $-c < -|x| \le x \le |x| < c$ by [step 2.1] and [L2], so $-c < x < c$; conversely if $-c < x < c$ then both $x < c$ and $-x < c$, and since $|x|$ equals $x$ or $-x$ by [L1], we get $|x| < c$, so $|x| < c \iff -c < x < c$. [step 2.1, L1, L2] ∎
````

### `lem-of-add-order`

````markdown
---
id: lem-of-add-order
kind: lemma
title: "Order is preserved by adding a constant and by adding inequalities"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field]
aliases: []
landmark: false
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c, d \in F$.

1. **Translation invariance.** If $a < b$ then $a + c < b + c$.
2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b, c, d \in F$.

[L1] For $x, y \in F$, the relation $x < y$ means $y - x \in P$ ([[def-ordered-field]]).

[L2] $P$ is closed under addition: if $u, v \in P$ then $u + v \in P$ (axiom O2 of [[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a < b$; by the definition of the order this means $b - a \in P$. [assume-hyp, L1]

1.2 For every $c \in F$ the field identities give $(b + c) - (a + c) = b - a$. [algebra]

1.3 Assume moreover $c < d$; by the definition of the order this means $d - c \in P$. [assume-hyp, L1]

1.4 The field identities give $(b + d) - (a + c) = (b - a) + (d - c)$. [algebra]

2.1 Hence $(b + c) - (a + c) = b - a \in P$, which is exactly $a + c < b + c$, proving claim 1. [step 1.1, step 1.2, L1]

2.2 Since $b - a \in P$ and $d - c \in P$, closure under addition gives $(b - a) + (d - c) \in P$. [step 1.1, step 1.3, L2]

3.1 Therefore $(b + d) - (a + c) = (b - a) + (d - c) \in P$, which is exactly $a + c < b + d$, proving claim 2. [step 1.4, step 2.2, L1] ∎
````

### `lem-of-sign-rules`

````markdown
---
id: lem-of-sign-rules
kind: lemma
title: "Sign rules for products and monotonicity of multiplication"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field, lem-of-mult-neg, lem-of-zero-mult]
aliases: []
landmark: false
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Illinois Chicago notes: Ordered field axioms"
      url: "https://homepages.math.uic.edu/~jbaldwin/math215/fieldax.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b, c \in F$.

1. If $a > 0$ and $b > 0$ then $ab > 0$.
2. If $a > 0$ and $b < 0$ then $ab < 0$.
3. If $a < 0$ and $b < 0$ then $ab > 0$.
4. If $c > 0$ then $a < b \iff ac < bc$.
5. If $c < 0$ then $a < b \iff bc < ac$ (multiplication by a negative reverses order).

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b, c \in F$.

[L1] For $x, y \in F$: $x < y \iff y - x \in P$; $x > 0 \iff x \in P$; $x < 0 \iff -x \in P$; and (trichotomy) for each $x$ exactly one of $x \in P$, $x = 0$, $-x \in P$ holds, so $0 \notin P$ and $x \in P \Rightarrow x \neq 0$ ([[def-ordered-field]]).

[L2] $P$ is closed under multiplication: if $u, v \in P$ then $uv \in P$ (axiom O2 of [[def-ordered-field]]).

[L3] In any field, $(-u)v = -(uv)$ and $(-u)(-v) = uv$ ([[lem-of-mult-neg]]).

[L4] In any field, $0 \cdot u = 0$ ([[lem-of-zero-mult]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a > 0$ and $b > 0$, i.e. $a \in P$ and $b \in P$; closure gives $ab \in P$, so $ab > 0$, proving claim 1. [assume-hyp, L1, L2]

1.2 Assume $a > 0$ and $b < 0$, i.e. $a \in P$ and $-b \in P$; closure gives $a(-b) \in P$. [assume-hyp, L1, L2]

1.3 Assume $a < 0$ and $b < 0$, i.e. $-a \in P$ and $-b \in P$; closure gives $(-a)(-b) \in P$. [assume-hyp, L1, L2]

1.4 Assume $c > 0$ and $a < b$, i.e. $c \in P$ and $b - a \in P$; closure gives $(b - a)c \in P$. [assume-hyp, L1, L2]

1.5 Assume $c < 0$ and $a < b$, i.e. $-c \in P$ and $b - a \in P$; closure gives $(b - a)(-c) \in P$. [assume-hyp, L1, L2]

2.1 Since $a(-b) = -(ab)$ by L3, step 1.2 gives $-(ab) \in P$, so $ab < 0$, proving claim 2. [step 1.2, L3, L1]

2.2 Since $(-a)(-b) = ab$ by L3, step 1.3 gives $ab \in P$, so $ab > 0$, proving claim 3. [step 1.3, L3, L1]

2.3 By distributivity $(b - a)c = bc - ac$, so step 1.4 gives $bc - ac \in P$, i.e. $ac < bc$: this is the forward direction of claim 4. [step 1.4, algebra, L1]

2.4 By L3 and distributivity $(b - a)(-c) = -((b - a)c) = -(bc - ac) = ac - bc$, so step 1.5 gives $ac - bc \in P$, i.e. $bc < ac$: this is the forward direction of claim 5. [step 1.5, L3, algebra, L1]

3.1 Conversely, assume $c > 0$ and $ac < bc$; by trichotomy exactly one of $a < b$, $a = b$, $b < a$ holds. If $a = b$ then $ac = bc$, contradicting $ac < bc$; if $b < a$ then the argument of step 2.3 applied to the pair $b < a$ gives $bc < ac$, so $bc - ac \in P$ (from $ac < bc$) while $ac - bc \in P$ (from $bc < ac$), putting the element $bc - ac$ and its negative $ac - bc$ both in $P$, which trichotomy forbids; hence $a < b$: this completes claim 4. [assume-hyp, step 2.3, L4, L1, algebra]

4.1 Conversely, assume $c < 0$ and $bc < ac$; by trichotomy exactly one of $a < b$, $a = b$, $b < a$ holds. If $a = b$ then $ac = bc$, contradicting $bc < ac$; if $b < a$ then the argument of step 2.4 applied to the pair $b < a$ gives $ac < bc$, so $ac - bc \in P$ (from $bc < ac$) while $bc - ac \in P$ (from $ac < bc$), putting the element $ac - bc$ and its negative $bc - ac$ both in $P$, which trichotomy forbids; hence $a < b$: this completes claim 5. [assume-hyp, step 2.4, L4, L1, algebra] ∎
````

### `lem-power-laws`

````markdown
---
id: lem-power-laws
kind: lemma
title: "Laws of integer exponents"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integer-power, thm-induction-principle, def-field, def-int-operations, lem-of-inverse-unique, lem-of-no-zero-divisors, lem-nat-embeds-int, thm-int-comm-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
sources:
  scraped: []
  references:
    - title: "J. Aspnes, Summation Notation"
      url: "https://www.cs.yale.edu/homes/aspnes/pinewiki/SummationNotation.html"
    - title: "M. Fochler, Recursive sums, products, and powers"
      url: "https://people.math.binghamton.edu/mfochler/bu-mfx/bu-math-arv/math-330-arv/math-330-2019-08/html/lec-notes/bu-ln-330-m330-solns-2019-12-03.pdf"
    - title: "Exponentiation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Exponentiation"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "T. Tao, Analysis I, 3rd ed., §4.3"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $a, b$ be elements of a field ([[def-field]]) and let integer powers be as in
[[def-integer-power]].

1. For all $m, n \in \mathbb{N}$: $a^{m+n} = a^m a^n$, $(a^m)^n = a^{mn}$ and $(ab)^n = a^n b^n$.
2. If $a \ne 0$ then $a^n \ne 0$ for every $n \in \mathbb{N}$, and $a^{-m} = (a^m)^{-1}$ for every $m \in \mathbb{Z}$ ([[def-int-operations]]).
3. If $a \ne 0$ and $b \ne 0$ then all three identities of claim 1 hold for all $m, n \in \mathbb{Z}$.

## Facts & Assumptions

**Given:** Elements $a, b$ of a field $F$, naturals $m, n, p, q, k$ and integers ranged over by $m, n$ in claims 2 and 3.

[L1] Definition of powers ([[def-integer-power]]): $a^0 = 1$ and $a^{n+1} = a^n a$ for $n \in \mathbb{N}$; and $a^{-n} := (a^n)^{-1}$ for $a \ne 0$ and $n \ge 1$, the two clauses agreeing at $n = 0$.

[L2] Induction principle ([[thm-induction-principle]]).

[L3] Field arithmetic: multiplication is associative and commutative with identity $1$, and every nonzero element has an inverse ([[def-field]]); inverses are unique ([[lem-of-inverse-unique]], which states uniqueness and nothing further), and HENCE, for $x, y \ne 0$, $(xy)^{-1} = x^{-1} y^{-1}$ and $(x^{-1})^{-1} = x$, since $(xy)(x^{-1}y^{-1}) = 1$ and $x^{-1}x = 1$ exhibit inverses that uniqueness then identifies.

[L4] A field has no zero divisors: $xy = 0$ implies $x = 0$ or $y = 0$ ([[lem-of-no-zero-divisors]]).

[L5] $\mathbb{Z}$ is a commutative ring in which every element is $\iota(k)$ or $-\iota(k)$ for a unique natural $k$ ([[thm-int-comm-ring]], [[lem-nat-embeds-int]], [[def-int-operations]]); we write $k$ for $\iota(k)$.

## Proof

**Proof technique:** induction.

1.1 Base cases at $n = 0$ for the addition law, the product law and nonvanishing: $a^{m+0} = a^m = a^m \cdot 1 = a^m a^0$ for every $m \in \mathbb{N}$; $(ab)^0 = 1 = 1 \cdot 1 = a^0 b^0$; and if $a \ne 0$ then $a^0 = 1 \ne 0$. [base, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $a^{m+n} = a^m a^n$ for all $m \in \mathbb{N}$, $(ab)^n = a^n b^n$, and $a^n \ne 0$ whenever $a \ne 0$. The iterated-power law $(a^m)^n = a^{mn}$ is deliberately NOT carried in this hypothesis: its successor step needs the addition law at the exponent pair $(mn, m)$, whose second entry is not the current stage, so that law must be finished first and the iterated law proved afterwards. [ih]

1.3 For $a \ne 0$ and every integer $j$, $a^{-j} = (a^j)^{-1}$: for $j \ge 0$ this is the definition together with the agreement of the two clauses at $j = 0$, and for $j = -k$ with $k \ge 1$ it reads $a^{k} = (a^{-k})^{-1}$, which holds because $a^{-k} = (a^k)^{-1}$ and $(x^{-1})^{-1} = x$ at $x = a^{k}$. That last substitution needs $a^{k} \ne 0$, which is NOT free here and must not be read off the definition, since the definition of the negative clause is what is being justified; it is instead a self-contained induction on $k$, from $a^{0} = 1 \ne 0$ and the fact that $a^{k+1} = a^{k}a$ is a product of two nonzero elements of a field, hence nonzero. [L1, L2, L3, L4, L5]

2.1 Successor step for the addition law, the product law and nonvanishing: $a^{m+(n+1)} = a^{(m+n)+1} = a^{m+n} a = (a^m a^n) a = a^m (a^n a) = a^m a^{n+1}$ for every $m \in \mathbb{N}$; $(ab)^{n+1} = (ab)^n (ab) = (a^n b^n)(ab) = (a^n a)(b^n b) = a^{n+1} b^{n+1}$; and if $a \ne 0$ then $a^{n+1} = a^n a$ is a product of two nonzero elements, hence nonzero. [step 1.2, L1, L3, L4]

3.1 By the induction principle, for all $m, n \in \mathbb{N}$: $a^{m+n} = a^m a^n$ and $(ab)^n = a^n b^n$, and $a^n \ne 0$ whenever $a \ne 0$. The addition law is thereby available at EVERY pair of natural exponents, which is exactly what the iterated-power law needs. [step 1.1, step 2.1, L2]

4.1 The iterated-power law for natural exponents, $(a^m)^n = a^{mn}$, by a second induction on $n$ with $m \in \mathbb{N}$ fixed: at $n = 0$ both sides are $1$, since $(a^m)^0 = 1 = a^0 = a^{m \cdot 0}$; and if $(a^m)^n = a^{mn}$ then $(a^m)^{n+1} = (a^m)^n a^m = a^{mn} a^m = a^{mn+m} = a^{m(n+1)}$, where the third equality is the addition law of step 3.1 at the pair $(mn, m)$, legitimate precisely because that law is by now proved for all pairs of naturals. This completes claim 1. [step 3.1, L1, L2, L3]

4.2 For $a \ne 0$ and every integer $j$, $a^{j+1} = a^j a$: for $j \ge 0$ this is the recursion clause, and for $j = -k$ with $k \ge 1$ we compute $a^{-k} a = (a^k)^{-1} a = (a^{k-1} a)^{-1} a = (a^{k-1})^{-1} a^{-1} a = (a^{k-1})^{-1} = a^{-(k-1)} = a^{-k+1}$. [step 3.1, step 1.3, L1, L3]

4.3 For $a, b \ne 0$ the product law holds for all integers $n$: for $n \ge 0$ it is step 3.1, and for $n = -k$ with $k \ge 1$ we get $(ab)^{-k} = ((ab)^k)^{-1} = (a^k b^k)^{-1} = (a^k)^{-1}(b^k)^{-1} = a^{-k} b^{-k}$. [step 3.1, step 1.3, L3, L5]

5.1 For $a \ne 0$, every integer $j$ and every natural $k$, $a^{j+k} = a^j a^k$, by induction on $k$: the case $k = 0$ is $a^j = a^j \cdot 1$, and if $a^{j+k} = a^j a^k$ then $a^{j+k+1} = a^{j+k} a = a^j a^k a = a^j a^{k+1}$ by step 4.2 applied to the integer $j+k$ and by the recursion clause. [step 4.2, L1, L2, L3]

6.1 For $a \ne 0$ the addition law holds for all integers $m, n$: writing $n = k$ or $n = -k$ with $k \in \mathbb{N}$, the case $n = k$ is step 5.1, while for $n = -k$ step 5.1 applied to the integer $m - k$ gives $a^m = a^{(m-k)+k} = a^{m-k} a^k$, hence $a^{m-k} = a^m (a^k)^{-1} = a^m a^{-k}$. [step 5.1, step 1.3, L3, L5]

7.1 For $a \ne 0$ the iterated-power law holds for all integers $m, n$: for $n \ge 0$ induction on $n$ gives $(a^m)^{n+1} = (a^m)^n a^m = a^{mn} a^m = a^{mn+m} = a^{m(n+1)}$, the third equality by the integer addition law of step 6.1 at the pair $(mn, m)$, with base $(a^m)^0 = 1 = a^0$; and for $n = -q$ with $q \ge 1$, $(a^m)^{-q} = ((a^m)^q)^{-1} = (a^{mq})^{-1} = a^{-mq} = a^{m(-q)}$, using that $a^m \ne 0$ by step 3.1 and step 1.3. [step 6.1, step 3.1, step 1.3, L2, L3, L5]

8.1 Claims 1, 2 and 3 are therefore established: the addition, product and iterated-power laws for natural exponents together with nonvanishing by steps 3.1 and 4.1, the identity $a^{-m} = (a^m)^{-1}$ by step 1.3, and the three integer-exponent laws by steps 6.1, 4.3 and 7.1. [step 3.1, step 4.1, step 1.3, step 6.1, step 4.3, step 7.1, discharge-induction] ∎
````

### `lem-series-linearity`

````markdown
---
id: lem-series-linearity
kind: lemma
title: "Convergent series add and scale termwise"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-series, thm-algebra-of-limits, lem-finite-sum-laws, def-finite-sum]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "T. Tao, Analysis I, 3rd ed., §7.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ and $(b_k)$ be sequences of reals whose series converge
([[def-series]]), and let $c \in \mathbb{R}$. Then:

1. $\sum (a_k + b_k)$ converges, with
   $\displaystyle\sum_{k=0}^{\infty}(a_k + b_k) = \sum_{k=0}^{\infty} a_k + \sum_{k=0}^{\infty} b_k$;
2. $\sum c\,a_k$ converges, with
   $\displaystyle\sum_{k=0}^{\infty} c\,a_k = c \sum_{k=0}^{\infty} a_k$.

Moreover, for $c \ne 0$ and an arbitrary sequence $(a_k)$, whose series is not
assumed to converge:

3. $\sum c\,a_k$ converges **if and only if** $\sum a_k$ converges. Equivalently,
   $\sum a_k$ diverges if and only if $\sum c\,a_k$ diverges.

Claim 3 is the form used whenever a comparison is made against a constant
multiple of a known series.

## Facts & Assumptions

**Given:** Sequences $(a_k)$, $(b_k)$ of reals and $c \in \mathbb{R}$, with partial sums $s_n = \sum_{k<n} a_k$ and $t_n = \sum_{k<n} b_k$ ([[def-series]], [[def-finite-sum]]).

[L1] Additivity and scaling of finite sums: $\sum_{k<n}(a_k + b_k) = \sum_{k<n} a_k + \sum_{k<n} b_k$ and $\sum_{k<n} c\,a_k = c \sum_{k<n} a_k$ ([[lem-finite-sum-laws]]).

[L2] Algebra of limits: if $x_n \to x$ and $y_n \to y$ then $x_n + y_n \to x + y$ and $c\,x_n \to c\,x$ ([[thm-algebra-of-limits]]).

## Proof

**Proof technique:** direct.

1.1 The partial sums of $\sum (a_k + b_k)$ are $\sum_{k<n}(a_k + b_k) = s_n + t_n$, and those of $\sum c\,a_k$ are $\sum_{k<n} c\,a_k = c\,s_n$. [given, L1]

1.2 Assume $\sum a_k$ and $\sum b_k$ converge, say $s_n \to S$ and $t_n \to T$. [given]

2.1 Then $s_n + t_n \to S + T$, so $\sum(a_k + b_k)$ converges with sum $S + T$, which is claim 1. [step 1.2, step 1.1, L2]

2.2 Likewise $c\,s_n \to c\,S$, so $\sum c\,a_k$ converges with sum $c\,S$, which is claim 2. [step 1.2, step 1.1, L2]

3.1 For claim 3, let $c \ne 0$ and let $(a_k)$ be arbitrary. If $\sum a_k$ converges then $\sum c\,a_k$ converges by claim 2. [step 2.2]

3.2 Conversely, if $\sum c\,a_k$ converges then applying claim 2 to the sequence $(c\,a_k)$ and the scalar $1/c$, which exists since $c \ne 0$, shows that $\sum (1/c)(c\,a_k) = \sum a_k$ converges. [step 2.2, algebra]

4.1 The two implications are claim 3, and its contrapositive form is the statement about divergence. [step 3.1, step 3.2] ∎

## Remarks

- **There is no product rule here, and there is no rule for $\sum a_k b_k$.** The proof works because a finite sum is additive and homogeneous, and neither property has an analogue for products. Multiplying series is a genuinely harder question, requiring absolute convergence, and it is not treated on this page.

- **Claim 3 needs $c \ne 0$ and nothing else.** In particular it does not need either series to converge, which is what makes it usable in the divergence direction: scaling a divergent series by a nonzero constant leaves it divergent.
````

### `thm-baire-category-r`

````markdown
---
id: thm-baire-category-r
kind: theorem
title: "Baire category in $\\mathbb{R}$, by nested intervals with canonically chosen rational endpoints: a countable intersection of dense open sets is dense, so $\\mathbb{R}$ is not a countable union of nowhere dense sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-nowhere-dense-meager, thm-nested-interval-property, def-interval, def-open-and-closed-in-r, def-limit-point-r, thm-closure-characterisations-r, def-interior-closure-boundary-r, def-countable, def-equinumerous, def-injection-surjection-bijection, thm-rationals-countable, lem-rat-embeds-dense, thm-well-ordering-principle, thm-recursion, thm-open-set-algebra-r, def-neighbourhood-r]
justified_by: []
forward_refs: [ex-baire-reproves-r-uncountable, cex-meager-set-of-full-measure]
aliases: []
landmark: true
short: "countable intersection of dense open sets is dense"
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Baire category theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Baire_category_theorem"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (Exercise 22) and Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Baire theorem (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Baire_theorem"
    - title: "E. Zakon, Mathematical Analysis, §6.8: Baire Categories"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/06%3A_Differentiation_on_E_and_Other_Normed_Linear_Spaces/6.08%3A_Baire_Categories._More_on_Linear_Maps"
pipeline_run: null
---

## Statement

Let $(U_n)_{n \in \mathbb{N}}$ be a sequence of subsets of $\mathbb{R}$, each
open ([[def-open-and-closed-in-r]]) and dense ([[def-limit-point-r]]). Then

$$\bigcap_{n \in \mathbb{N}} U_n \quad \text{is dense in } \mathbb{R}.$$

Consequently, if $(A_n)_{n \in \mathbb{N}}$ is a sequence of nowhere dense
subsets of $\mathbb{R}$ ([[def-nowhere-dense-meager]]), then
$\bigcup_{n \in \mathbb{N}} A_n \ne \mathbb{R}$: no meager subset of
$\mathbb{R}$ exhausts $\mathbb{R}$, so $\mathbb{R}$ is of the second category in
itself.

**The selection is canonical, and the proof spends no choice principle.** The
textbook argument picks a nested interval at every stage in terms of the one
before it, which is the axiom of dependent choice ([[def-dependent-choice]]). The construction below
instead fixes one enumeration $e$ of the rationals ([[thm-rationals-countable]],
[[lem-rat-embeds-dense]]) and, at every stage, takes the interval whose two
rational endpoints have **least index** among those meeting the requirements.
The requirements are met by some rational-endpoint interval, which is what the
refinement claim of the proof establishes, and the least such index is
determined by [[thm-well-ordering-principle]]; so the whole recursion is a
single application of [[thm-recursion]] to one total map. This is the device of
[[thm-perfect-set-uncountable-r]], transplanted from perfect sets to dense open
sets. What it does **not** settle is the strength of the theorem for general
complete metric spaces, which is recorded separately in
[[rem-baire-in-r-is-choice-free]].

## Facts & Assumptions

**Given:** A sequence $(U_n)_{n \in \mathbb{N}}$ of dense open subsets of $\mathbb{R}$. Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$ under $q \mapsto \hat q$. A pair $(p,q) \in \mathbb{Q}_{\mathbb{R}} \times \mathbb{Q}_{\mathbb{R}}$ is called **good** when $p < q$, and $G$ denotes the set of good pairs.

[A1] Each $U_n$ is open and dense in $\mathbb{R}$.

[L1] $A \subseteq \mathbb{R}$ is dense when $\overline{A} = \mathbb{R}$, and $\overline{A}$ is exactly the set of points every neighbourhood of which meets $A$; so $A$ is dense if and only if $N_\varepsilon(x) \cap A \ne \varnothing$ for every $x \in \mathbb{R}$ and every real $\varepsilon > 0$ ([[def-limit-point-r]], [[thm-closure-characterisations-r]], [[def-neighbourhood-r]]).

[L2] $U$ is open when every $x \in U$ admits a real $\varepsilon > 0$ with $N_\varepsilon(x) \subseteq U$; $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$; every open interval $(p,q)$ is an open set, and $[p,q]$ is a closed bounded interval, nonempty when $p \le q$ ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]], [[def-interval]]).

[L3] The intersection of two open subsets of $\mathbb{R}$ is open, and the complement of a closed set is open ([[thm-open-set-algebra-r]], [[def-open-and-closed-in-r]]).

[L4] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]], [[def-equinumerous]]); $q \mapsto \hat q$ is injective with image $\mathbb{Q}_{\mathbb{R}}$, and strictly between any two reals lies an element of $\mathbb{Q}_{\mathbb{R}}$ ([[lem-rat-embeds-dense]]); a composition of bijections is a bijection ([[def-injection-surjection-bijection]]).

[L5] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L6] Recursion: for a set $Y$, an element $y_0 \in Y$ and a function $T : Y \to Y$ there is $h : \mathbb{N} \to Y$ with $h(0) = y_0$ and $h(\sigma(k)) = T(h(k))$ ([[thm-recursion]]).

[L7] Nested interval property: for nonempty closed bounded intervals $I_k = [a_k,b_k]$ with $I_{k+1} \subseteq I_k$, the intersection $\bigcap_k I_k$ is nonempty ([[thm-nested-interval-property]]).

[L8] $A$ is nowhere dense exactly when $\mathbb{R} \setminus \overline{A}$ is dense; $\overline{A}$ is a closed set containing $A$ ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]).

[L9] An at most countable family may always be presented as a sequence indexed by $\mathbb{N}$ ([[def-countable]], [[def-nowhere-dense-meager]]).

## Proof

**Proof technique:** constructive.

1.1 Fix $x_0 \in \mathbb{R}$ and a real $\varepsilon_0 > 0$; by [L1] it suffices to produce a point of $\bigcap_n U_n$ lying in $N_{\varepsilon_0}(x_0)$, since $x_0$ and $\varepsilon_0$ are then arbitrary. [given, L1, suffices: one point in each neighbourhood]

1.2 By [L4] fix a bijection $\beta : \mathbb{N} \to \mathbb{Q}$ and put $e := \iota \circ \beta$, where $\iota(q) = \hat q$, so that $e$ is a bijection from $\mathbb{N}$ onto $\mathbb{Q}_{\mathbb{R}}$. [L4, choose]

1.3 Recall the terminology of the Given: a pair $(p,q)$ of elements of $\mathbb{Q}_{\mathbb{R}}$ is good when $p < q$, and $G$ is the set of good pairs. [given, construct]

2.1 **Refinement claim.** For every good $(p,q)$ and every $n \in \mathbb{N}$ there is a good $(p',q')$ with $[p',q'] \subseteq (p,q) \cap U_n$. To see it, note first that $(p,q)$ is nonempty, since [L4] supplies an element of $\mathbb{Q}_{\mathbb{R}}$ strictly between $p$ and $q$, and that $(p,q)$ is open by [L2]; fix $y_1 \in (p,q)$ and, by [L2], a real $\rho_1 > 0$ with $N_{\rho_1}(y_1) \subseteq (p,q)$. Since $U_n$ is dense, [A1] and [L1] give $y \in N_{\rho_1}(y_1) \cap U_n$, so $y \in (p,q) \cap U_n$, and that set is open by [A1], [L2] and [L3], so there is a real $\rho > 0$ with $N_\rho(y) \subseteq (p,q) \cap U_n$. By [L4] fix $p', q' \in \mathbb{Q}_{\mathbb{R}}$ with $y - \rho < p' < y < q' < y + \rho$. Then $p' < q'$, so $(p',q')$ is good, and every $t \in [p',q']$ satisfies $y - \rho < p' \le t \le q' < y + \rho$, whence $|t - y| < \rho$ and $t \in N_\rho(y)$; thus $[p',q'] \subseteq N_\rho(y) \subseteq (p,q) \cap U_n$. [step 1.3, A1, L1, L2, L3, L4, choose]

3.1 **Successor rule.** For $(k, (p,q)) \in \mathbb{N} \times G$ let $m$ be the least natural for which some natural $j$ makes $(e(m), e(j))$ good with $[e(m), e(j)] \subseteq (p,q) \cap U_k$, and let $j$ be the least natural with that property for that $m$; put $T(k,(p,q)) := (\sigma(k), (e(m), e(j)))$. The set of eligible $m$ is nonempty by step 2.1 applied with $n = k$, since $e$ is onto $\mathbb{Q}_{\mathbb{R}}$ by step 1.2, so both minima exist by [L5] and $T : \mathbb{N} \times G \to \mathbb{N} \times G$ is a total function defined without any selection. [step 1.2, step 2.1, L4, L5, construct]

4.1 **The recursion.** By [L4] fix $p_0, q_0 \in \mathbb{Q}_{\mathbb{R}}$ with $x_0 - \varepsilon_0 < p_0 < x_0 < q_0 < x_0 + \varepsilon_0$; then $(p_0,q_0)$ is good and, as in step 2.1, $[p_0,q_0] \subseteq N_{\varepsilon_0}(x_0)$ by [L2]. Apply [L6] with $Y = \mathbb{N} \times G$, seed $(0,(p_0,q_0))$ and map $T$ to get $h : \mathbb{N} \to \mathbb{N} \times G$ with $h(0) = (0,(p_0,q_0))$ and $h(\sigma(k)) = T(h(k))$; an induction on $k$ shows that the first coordinate of $h(k)$ is $k$, so write $h(k) = (k,(p_k,q_k))$, every $(p_k,q_k)$ being good. [step 1.1, step 1.3, step 3.1, L2, L4, L6, construct]

5.1 Write $I_k := [p_k, q_k]$, a nonempty closed bounded interval by [L2]. The rule of step 3.1 gives, for every $k \in \mathbb{N}$, that $I_{k+1} \subseteq (p_k,q_k) \cap U_k \subseteq I_k$; in particular the family $(I_k)$ is nested and $I_{k+1} \subseteq U_k$. [step 3.1, step 4.1, L2]

6.1 By [L7] applied to the nested family $(I_k)$ of nonempty closed bounded intervals, $\bigcap_{k} I_k \ne \varnothing$; fix $x$ in it. [step 5.1, L7, choose]

7.1 For every $n \in \mathbb{N}$ one has $x \in I_{n+1} \subseteq U_n$ by steps 5.1 and 6.1, so $x \in \bigcap_n U_n$; and $x \in I_0 \subseteq N_{\varepsilon_0}(x_0)$ by steps 4.1 and 6.1. So $N_{\varepsilon_0}(x_0)$ meets $\bigcap_n U_n$. [step 4.1, step 5.1, step 6.1]

8.1 Since $x_0 \in \mathbb{R}$ and the real $\varepsilon_0 > 0$ were arbitrary, every neighbourhood of every point of $\mathbb{R}$ meets $\bigcap_n U_n$, so that set is dense by [L1]. [step 1.1, step 7.1, L1]

9.1 For the consequence, let $(A_n)$ be a sequence of nowhere dense sets and put $U_n := \mathbb{R} \setminus \overline{A_n}$, which is open by [L3] and [L8] and dense by [L8]; by step 8.1 the set $\bigcap_n U_n$ is dense, hence nonempty, and any $x$ in it lies outside every $\overline{A_n}$ and so outside every $A_n$, giving $x \notin \bigcup_n A_n$ and therefore $\bigcup_n A_n \ne \mathbb{R}$. By [L9] the same conclusion covers a union of an at most countable family of nowhere dense sets, so no meager set is all of $\mathbb{R}$. [step 8.1, L1, L3, L8, L9, discharge-construct] ∎

## Remarks

- **What "dense" is doing at each end.** Density of the $U_n$ is used exactly once, in the refinement claim, to find a point of $U_n$ inside a given open interval; openness is used exactly once, immediately after, to fit a whole closed interval with rational endpoints around that point. Neither hypothesis can be dropped. Without openness the conclusion fails: the family consisting of $\mathbb{Q}$ together with all the sets $\mathbb{R} \setminus \{q\}$ for $q \in \mathbb{Q}$ is an at most countable family of dense sets, all but the first of them open, and its intersection is empty. Without density it fails too, for the constant sequence $U_n := (0,1)$ has intersection $(0,1)$, which is not dense in $\mathbb{R}$.

- **Only nonemptiness of the nested intersection is used.** The construction does not force the interval lengths to $0$ and does not need to: claim 1 of [[thm-nested-interval-property]] already produces a point, and one point is all the argument wants. That is why no Archimedean step appears anywhere above.

- **The consequence is the form used downstream.** Applying it to the sequence of singletons $\{x_n\}$ of a supposed enumeration of $\mathbb{R}$ reproves that $\mathbb{R}$ is uncountable ([[ex-baire-reproves-r-uncountable]]); applying it to a supposed presentation of $\mathbb{Q}$ as a $G_\delta$ set is what shows that no such presentation exists ([[cor-q-is-meager-and-not-g-delta]]).

- **Category is not measure.** The intersection produced above is dense but may be very small in the sense of [[def-measure-zero-and-content-zero]]; indeed $\mathbb{R}$ decomposes as a meager set together with a set of measure zero ([[cex-meager-set-of-full-measure]]), so this theorem says nothing whatever about size in measure.
````

### `thm-cantor-powerset`

````markdown
---
id: thm-cantor-powerset
kind: theorem
title: "Cantor's theorem: $A \\prec \\mathcal{P}(A)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-injection-surjection-bijection, def-equinumerous]
justified_by: []
aliases: [thm-cantor-diagonal, cantors-theorem]
landmark: true
short: "no surjection $A\\to\\mathcal P(A)$"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Cantor's theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_theorem"
    - title: "Cantor's diagonal argument (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument"
pipeline_run: null
---

## Statement

Let $A$ be a set and $\mathcal{P}(A)$ its power set. Then there is **no
surjection** $A \to \mathcal{P}(A)$ ([[def-injection-surjection-bijection]]).

Consequently $A \not\approx \mathcal{P}(A)$ while $A \preceq \mathcal{P}(A)$,
that is, $A \prec \mathcal{P}(A)$ ([[def-equinumerous]]): the power set is
strictly larger, for every set whatsoever.

This is Cantor's diagonal argument in its non-circular form. It uses nothing
about $\mathbb{R}$, nothing about decimal or binary expansions, and no choice
principle: only the Power Set axiom, to form $\mathcal{P}(A)$, and Separation, to
form the diagonal set.

## Facts & Assumptions

**Given:** A set $A$, its power set $\mathcal{P}(A) = \{\, X : X \subseteq A \,\}$, which is a set by the Power Set axiom, and the Separation axiom scheme, which turns any property of elements of $A$ into a subset of $A$.

[L1] Injection, surjection and bijection; a bijection is in particular a surjection ([[def-injection-surjection-bijection]]).

[L2] $A \approx B$ means a bijection $A \to B$ exists, $A \preceq B$ means an injection $A \to B$ exists, and $A \prec B$ means $A \preceq B$ and $A \not\approx B$ ([[def-equinumerous]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that some function $f : A \to \mathcal{P}(A)$ is surjective. [assume-contra]

1.2 The map $x \mapsto \{x\}$ is a function $A \to \mathcal{P}(A)$ and is injective, since $\{x\} = \{y\}$ forces $x = y$; hence $A \preceq \mathcal{P}(A)$, independently of the assumption. [L1, L2]

2.1 By Separation the diagonal set $D = \{\, x \in A : x \notin f(x) \,\}$ is a subset of $A$, hence an element of $\mathcal{P}(A)$. [step 1.1, given, construct]

3.1 By surjectivity there is $d \in A$ with $f(d) = D$. [step 1.1, step 2.1]

4.1 Then $d \in D$ if and only if $d \notin f(d) = D$, by the definition of $D$ and $f(d) = D$; a statement equivalent to its own negation is impossible, so no surjection $A \to \mathcal{P}(A)$ exists. In particular no bijection does, so $A \not\approx \mathcal{P}(A)$, and with step 1.2, $A \prec \mathcal{P}(A)$. [step 1.2, step 2.1, step 3.1, L1, L2, discharge-contradiction] ∎

## Remarks

- **Where the "diagonal" is.** Reading $f$ as a table whose row $x$ lists which elements belong to $f(x)$, the set $D$ flips the diagonal entries: $x \in D$ exactly when the entry at position $(x,x)$ says "no". The resulting subset differs from every row in at least one place, namely on the diagonal, so it is no row at all.

- **Why this is the diagonal argument that survives in this library.** The familiar diagonal proof that $\mathbb{R}$ is uncountable alters the digits of a decimal expansion. Decimal expansions are infinite series, which this library has not built, so that proof would rest on machinery that is not yet available. Applied to power sets the argument needs nothing but Separation, and $\mathbb{R}$ is instead proved uncountable by Cantor's earlier nested-interval argument ([[thm-r-uncountable]]).

- Taking $A = \mathbb{N}$ gives $\mathbb{N} \prec \mathcal{P}(\mathbb{N})$. It also gives that $\mathcal{P}(\mathbb{N})$ is **uncountable**, and by the shortest possible route: $\mathcal{P}(\mathbb{N})$ is nonempty, so if it were at most countable there would be a surjection $\mathbb{N} \to \mathcal{P}(\mathbb{N})$ ([[lem-countable-iff-surjection-from-n]]), which is exactly what the theorem forbids. No fact about finite sets is needed for this. Iterating gives $\mathbb{N} \prec \mathcal{P}(\mathbb{N}) \prec \mathcal{P}(\mathcal{P}(\mathbb{N})) \prec \cdots$, so there is no largest set and no "set of all sets": such a set would have its own power set as a subset, contradicting the theorem.

- The proof is the same argument as Russell's paradox, in a form where nothing goes wrong: the assumption refuted is not the existence of a set but the surjectivity of a function. See [[rem-continuum-hypothesis]] for what is, and is not, known about the gap between $\mathbb{N}$ and $\mathcal{P}(\mathbb{N})$.
````

### `thm-cantor-set-properties`

````markdown
---
id: thm-cantor-set-properties
kind: theorem
title: "The Cantor set is compact, perfect, uncountable, nowhere dense and of measure zero, and it contains no interval of positive length, so its only nonempty connected subsets are single points"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-cantor-set, thm-cantor-set-ternary-description, thm-heine-borel-characterisation-r, def-open-cover-r, def-perfect-set-r, thm-perfect-set-uncountable-r, def-nowhere-dense-meager, def-measure-zero-and-content-zero, lem-content-zero-implies-null, lem-nondegenerate-interval-is-not-null, def-connected-r, thm-connected-subsets-of-r-are-intervals, thm-open-set-algebra-r, def-countable, def-interval, def-integer-power, lem-power-laws, def-open-and-closed-in-r, def-limit-point-r, def-neighbourhood-r, def-interior-closure-boundary-r, thm-closure-characterisations-r, thm-induction-principle, def-finite-sum, lem-finite-sum-laws, lem-series-linearity, def-series, lem-geometric-sequence-null, def-real-limit, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
aliases: []
landmark: true
short: "$C$ compact, perfect, uncountable, null"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Cantor set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor_set"
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (§2.44)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "University of Chicago MATH 395 notes"
      url: "https://math.uchicago.edu/~alephnil/notes/MATH-395-notes.pdf"
    - title: "Stanford Math 205A, Homework 1"
      url: "https://math.stanford.edu/~ryzhik/STANFORD/STANF205-11/hw205-11-1.pdf"
pipeline_run: null
---

## Statement

Let $C$ be the Cantor set ([[def-cantor-set]]). Then:

1. $C$ is closed and bounded, hence compact
   ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]);
2. $C$ has content zero, and therefore measure zero
   ([[def-measure-zero-and-content-zero]]);
3. $C$ is perfect ([[def-perfect-set-r]]);
4. $C$ is uncountable ([[def-countable]]);
5. $C$ contains no interval with two distinct endpoints, and is nowhere dense
   ([[def-nowhere-dense-meager]]);
6. every nonempty connected subset of $C$ ([[def-connected-r]]) is a single
   point.

Claim 6 is what the phrase "totally disconnected" names elsewhere; that phrase
is **not** used here, because no definition of total disconnectedness exists at
this point in the reading order. What is proved is exactly the displayed
statement, and it is obtained from claim 5 through
[[thm-connected-subsets-of-r-are-intervals]].

## Facts & Assumptions

**Given:** The sets $C_n$ and $C$ of [[def-cantor-set]], and the map $\Phi$ and the set $D$ of $\{0,2\}$-valued sequences of [[thm-cantor-set-ternary-description]].

[L1] $C_0 = [0,1]$, $C_{n+1} = \tfrac13 C_n \cup (\tfrac23 + \tfrac13 C_n)$, $C = \bigcap_n C_n \subseteq C_m$ for every $m$, every $C_n \subseteq [0,1]$, $0 \in C$, and $3^{-n} = (3^{-1})^n$ ([[def-cantor-set]], [[def-interval]], [[def-integer-power]], [[lem-power-laws]]).

[L2] $\Phi$ is a bijection from $D$ onto $C$, $\Phi(a) = \sum_{k \ge 0} a_k 3^{-k-1}$, and convergent series add and scale termwise ([[thm-cantor-set-ternary-description]], [[lem-series-linearity]], [[def-series]]).

[L3] $[c,d]$ is a closed set and a bounded interval, $(c,d)$ is open, $N_\varepsilon(x) = (x-\varepsilon, x+\varepsilon)$, and every open set contains a neighbourhood of each of its points ([[def-interval]], [[def-open-and-closed-in-r]], [[def-neighbourhood-r]]).

[L4] Finite unions of closed sets are closed, and an intersection of a nonempty family of closed sets is closed ([[thm-open-set-algebra-r]]).

[L5] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

[L6] Content zero and measure zero as in [[def-measure-zero-and-content-zero]]; a set of content zero is null ([[lem-content-zero-implies-null]]); no null set contains an interval $[u,v]$ with $u < v$ ([[lem-nondegenerate-interval-is-not-null]]).

[L7] $P$ is perfect when it is closed and no point of it is isolated in it ([[def-perfect-set-r]], [[def-limit-point-r]]); every nonempty perfect subset of $\mathbb{R}$ is uncountable ([[thm-perfect-set-uncountable-r]], [[def-countable]]).

[L8] A set is nowhere dense exactly when the interior of its closure is empty, and a closed set equals its closure ([[def-nowhere-dense-meager]], [[def-interior-closure-boundary-r]], [[thm-closure-characterisations-r]]).

[L9] A subset of $\mathbb{R}$ is connected exactly when it is order-convex ([[thm-connected-subsets-of-r-are-intervals]], [[def-connected-r]], [[def-interval]]).

[L10] $|r|^k \to 0$ for $|r| < 1$ ([[lem-geometric-sequence-null]]); convergence to $0$ is tested against rational $\varepsilon > 0$ ([[def-real-limit]]); $|z| \ge 0$, $|z| = z$ for $z \ge 0$, and $|uv| = |u||v|$ ([[lem-of-abs-value]]).

[L11] Induction on $\mathbb{N}$ ([[thm-induction-principle]]); finite sums split, scale and are monotone in their terms ([[def-finite-sum]], [[lem-finite-sum-laws]]).

[L12] Ordered-field arithmetic: $0 < 1$, so $2 > 0$, $3 > 0$, $3^{-1} > 0$ and $0 < 2 \cdot 3^{-1} < 1$; adding a constant and multiplying by a positive preserve an inequality; the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Proof

**Proof technique:** direct.

1.1 **$C$ is compact, claim 1.** First, for $\lambda \ne 0$ and $c \in \mathbb{R}$ the set $\lambda S + c := \{\lambda s + c : s \in S\}$ is closed whenever $S$ is: if $x \notin \lambda S + c$ then $(x - c)\lambda^{-1} \notin S$, so by [L3] there is a real $\eta > 0$ with $N_\eta((x-c)\lambda^{-1}) \cap S = \varnothing$, and every $z$ with $|z - x| < |\lambda|\eta$ satisfies $|(z-c)\lambda^{-1} - (x-c)\lambda^{-1}| = |z-x| \cdot |\lambda|^{-1} < \eta$ by [L10] and [L12], hence $(z-c)\lambda^{-1} \notin S$ and $z \notin \lambda S + c$. Now every $C_n$ is closed, by induction on $n$ ([L11]): $C_0 = [0,1]$ is closed by [L3], and $C_{n+1}$ is the union of the two closed sets $\tfrac13 C_n$ and $\tfrac23 + \tfrac13 C_n$, hence closed by [L4]. So $C = \bigcap_n C_n$ is closed by [L4], and $C \subseteq [0,1]$ is bounded by [L1] and [L3]; by [L5] it is compact. [L1, L3, L4, L5, L10, L11, L12]

1.2 **$C$ has content zero and measure zero, claim 2.** By induction on $n$ ([L11]) the following holds for every $n$: there are $m \in \mathbb{N}$ and reals $u_0 \le v_0, \dots, u_m \le v_m$ with $C_n \subseteq \bigcup_{j \le m}[u_j,v_j]$ and $\sum_{j \le m}(v_j - u_j) = (2 \cdot 3^{-1})^{n}$. At $n = 0$ take the single interval $[0,1]$, of total length $1 = (2 \cdot 3^{-1})^0$ by [L1]. Given such a list at $n$, define $2m + 2$ intervals by $[u_j 3^{-1},\, v_j 3^{-1}]$ for $j \le m$ and $[2 \cdot 3^{-1} + u_{j-m-1}3^{-1},\, 2 \cdot 3^{-1} + v_{j-m-1}3^{-1}]$ for $m < j \le 2m+1$; they cover $\tfrac13 C_n$ and $\tfrac23 + \tfrac13 C_n$ respectively, hence cover $C_{n+1}$, and their total length is $3^{-1}(2 \cdot 3^{-1})^{n} + 3^{-1}(2 \cdot 3^{-1})^{n} = (2 \cdot 3^{-1})^{n+1}$ by [L11] and [L12]. Since $0 < 2 \cdot 3^{-1} < 1$ by [L12], [L10] gives, for every real $\varepsilon > 0$, an $n$ with $(2 \cdot 3^{-1})^{n} \le \varepsilon$; as $C \subseteq C_n$ by [L1], the corresponding finite list covers $C$ with total length at most $\varepsilon$. So $C$ has content zero by [L6], and hence measure zero by [L6]. [L1, L6, L10, L11, L12]

2.1 **$C$ is perfect, claim 3.** $C$ is closed by step 1.1. Let $x \in C$ and let the real $\varepsilon > 0$ be given. By [L2] write $x = \Phi(a)$ with $a \in D$. By [L10] and [L12] fix $k \in \mathbb{N}$ with $2 \cdot 3^{-k-1} < \varepsilon$, and define $b \in D$ by $b_j := a_j$ for $j \ne k$ and $b_k := 2 - a_k$, so $b_k \in \{0,2\}$ and $b \ne a$. Then $\Phi(b) \in C$ and $\Phi(b) \ne \Phi(a)$ by [L2], while $\Phi(b) - \Phi(a) = \sum_{j \ge 0}(b_j - a_j)3^{-j-1} = (b_k - a_k)3^{-k-1}$ by [L2], all other terms being $0$, so $|\Phi(b) - x| = 2 \cdot 3^{-k-1} < \varepsilon$ by [L10]. Thus $N_\varepsilon(x)$ contains a point of $C$ other than $x$, for every $\varepsilon$, so $x$ is not isolated in $C$; by [L7] $C$ is perfect. [step 1.1, L2, L7, L10, L12]

2.2 **$C$ contains no nondegenerate interval and is nowhere dense, claim 5.** By step 1.2 the set $C$ is null, so by [L6] it contains no $[u,v]$ with $u < v$; in particular it contains no interval of any of the four bounded forms with distinct endpoints, since such an interval contains a closed one with distinct endpoints by [L6] and [L12]. Its interior is therefore empty: if $N_\varepsilon(x) \subseteq C$ for some real $\varepsilon > 0$, then $[x - \varepsilon \cdot 2^{-1},\, x + \varepsilon \cdot 2^{-1}] \subseteq N_\varepsilon(x) \subseteq C$ by [L3] and [L12], an interval with distinct endpoints. Since $C$ is closed by step 1.1, it equals its closure, so [L8] gives that $C$ is nowhere dense. [step 1.1, step 1.2, L3, L6, L8, L12]

3.1 **$C$ is uncountable, claim 4.** $C$ is nonempty, since $0 \in C$ by [L1], and perfect by step 2.1, so [L7] applies. [step 2.1, L1, L7]

3.2 **Connected subsets, claim 6.** Let $E \subseteq C$ be connected and nonempty. By [L9] $E$ is order-convex, so if $u, v \in E$ with $u < v$ then $[u,v] \subseteq E \subseteq C$, contradicting step 2.2. Hence no two distinct elements of $E$ exist, and $E$, being nonempty, is a single point. [step 2.2, L9, L12]

4.1 Claims 1 to 6 are steps 1.1, 1.2, 2.1, 3.1, 2.2 and 3.2 respectively, so all six hold. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1, step 3.2] ∎

## Remarks

- **Two independent proofs of uncountability.** The route above is [[thm-perfect-set-uncountable-r]] applied to a nonempty perfect set. The other is claim 3 of [[thm-cantor-set-ternary-description]]: $C$ is in bijection with $\{0,1\}^{\mathbb{N}}$, which is in bijection with the power set of $\mathbb{N}$, uncountable by [[thm-cantor-powerset]]. The two arguments share nothing, and the second is the one that makes the *size* of $C$ evident: $C$ is in bijection with the power set of $\mathbb{N}$, while having content zero. **It is deliberately not said here that $C$ has as many points as $\mathbb{R}$.** That would require a bijection between $\mathbb{R}$ and the power set of $\mathbb{N}$, and no such bijection is constructed anywhere at this point in the reading order; the two uncountability results available here are separate facts, one proved by the diagonal argument on power sets and one by nested intervals.

- **Claim 2 and claim 4 together are the point of the whole construction.** A set of measure zero may be uncountable, so nullity is not a cardinality condition; and a nowhere dense set need not be null, so it is not a category condition either ([[fs-nowhere-dense-implies-measure-zero]], [[thm-fat-cantor-set-has-positive-measure]]).

- **Why claim 5 is proved through measure and not by inspection.** The intervals making up $C_n$ have length $3^{-n}$, and one can see directly that a long interval cannot fit inside $C$. Doing that rigorously means keeping track of the $2^n$ component intervals of $C_n$ and their gaps; going through [[lem-nondegenerate-interval-is-not-null]] uses the estimate already made in step 1.2 and needs no such bookkeeping.

- **Every point of $C$ is a limit of other points of $C$, and the witnesses are explicit**: change one ternary digit far out, as step 2.1 does. This is also what shows $C$ has no isolated points without any appeal to the structure of its complement.
````

### `thm-geometric-series`

````markdown
---
id: thm-geometric-series
kind: theorem
title: "For $|r| < 1$, $\\sum_{k \\ge 0} r^k = 1/(1-r)$, and for $|r| \\ge 1$ the series diverges"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, lem-power-difference-factorisation, lem-geometric-sequence-null, lem-nth-term-test, def-integer-power, thm-algebra-of-limits, def-finite-sum, lem-of-abs-value, lem-power-monotone, thm-induction-principle, def-real-limit]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Geometric series (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Geometric_series"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $r \in \mathbb{R}$ and let $r^k$ be the integer power ([[def-integer-power]]),
so that $r^0 = 1$ for every $r$, including $r = 0$.

1. If $|r| < 1$ then the series $\sum r^k$ converges ([[def-series]]) and
   $$\sum_{k=0}^{\infty} r^{k} \;=\; \frac{1}{1-r} .$$
2. If $|r| \ge 1$ then $\sum r^k$ diverges.

The series starts at $k = 0$ and its first term is $r^0 = 1$; in particular
$\sum_{k=0}^{\infty} 2^{-k} = 2$, while the series starting at $k = 1$ sums to
$1$. Which starting index is meant has to be said, and it is said here.

## Facts & Assumptions

**Given:** A real number $r$, the integer powers $r^k$ ([[def-integer-power]]), and the partial sums $s_n = \sum_{k<n} r^k$ of $\sum r^k$ ([[def-series]], [[def-finite-sum]]).

[L1] Factorisation of a difference of powers: for $a, b \in \mathbb{R}$ and natural $n \ge 1$, $b^n - a^n = (b-a)\sum_{k=0}^{n-1} a^k b^{\,n-1-k}$ ([[lem-power-difference-factorisation]]).

[L2] For $|r| < 1$ the sequence $(r^k)$ is null, that is $r^k \to 0$ ([[lem-geometric-sequence-null]]).

[L3] Algebra of limits: sums, differences and quotients of convergent sequences converge to the corresponding combination, the quotient rule requiring a nonzero limit and nonzero denominators ([[thm-algebra-of-limits]], [[def-real-limit]]).

[L4] Absolute value: $|xy| = |x|\,|y|$, $|x| \ge 0$, and $|x| = 0$ exactly when $x = 0$; also $|1| = 1$, since $1 > 0$ ([[lem-of-abs-value]]).

[L5] Powers and order: $a^0 = 1$ for every $a$; if $a \ge 1$ and $n \ge 1$ then $a^n \ge a \ge 1$; and $1^n = 1$ for every $n$ ([[lem-power-monotone]], [[def-integer-power]]).

[L6] The principle of induction ([[thm-induction-principle]]).

[L7] If a series converges then its terms tend to $0$ ([[lem-nth-term-test]]).

[L8] Notation of [[def-finite-sum]]: $\sum_{k=0}^{n-1} x_k$ is $\sum_{k<n} x_k$, and the empty sum $\sum_{k<0} x_k$ is $0$.

## Proof

**Proof technique:** cases.

1.1 Assume $|r| < 1$. [assume-case lt]

1.2 Assume instead $|r| \ge 1$. [assume-case ge]

1.3 For every natural $n \ge 1$, applying [L1] with $b = 1$ and $a = r$ gives $1 - r^n = (1-r)\sum_{k=0}^{n-1} r^k \cdot 1^{\,n-1-k} = (1-r)\,s_n$, using $1^m = 1$ and the notation of [L8]. [L1, L5, L8]

1.4 At $n = 0$ the identity $1 - r^n = (1-r)s_n$ also holds, both sides being $0$ because $r^0 = 1$ and $s_0$ is the empty sum. [L5, L8]

2.1 In the case $|r| < 1$ we have $r \ne 1$, since $|1| = 1$ and $|r| < 1$; hence $1 - r \ne 0$. [step 1.1, L4, algebra]

2.2 In the case $|r| \ge 1$, an induction gives $|r^k| = |r|^k$ for every $k \in \mathbb{N}$: at $k = 0$ both sides are $1$, and if $|r^k| = |r|^k$ then $|r^{k+1}| = |r^k \cdot r| = |r^k|\,|r| = |r|^k |r| = |r|^{k+1}$. [step 1.2, L4, L5, L6]

2.3 In the case $|r| \ge 1$ we get $|r|^k \ge 1$ for every $k \in \mathbb{N}$: at $k = 0$ this reads $1 \ge 1$, and for $k \ge 1$ it is the comparison $|r|^k \ge |r| \ge 1$. [step 1.2, L5]

3.1 In the case $|r| < 1$, dividing by $1 - r \ne 0$ gives $s_n = (1 - r^n)/(1-r)$ for every $n \in \mathbb{N}$. [step 2.1, step 1.3, step 1.4, algebra]

3.2 In the case $|r| \ge 1$, combining the two previous steps gives $|r^k - 0| = |r^k| = |r|^k \ge 1$ for every $k \in \mathbb{N}$. [step 2.2, step 2.3]

4.1 In the case $|r| < 1$ the sequence $(r^n)$ is null, so $1 - r^n \to 1$ and therefore $s_n \to 1/(1-r)$, the denominator being the nonzero constant $1-r$; hence $\sum r^k$ converges with sum $1/(1-r)$, which is claim 1. [step 1.1, step 3.1, step 2.1, L2, L3]

4.2 In the case $|r| \ge 1$ the sequence $(r^k)$ does not converge to $0$, since the rational tolerance $\varepsilon = 1$ admits no index $K$ with $|r^k - 0| < 1$ for all $k \ge K$; so by the term test $\sum r^k$ diverges, which is claim 2. [step 3.2, L7]

5.1 The two cases $|r| < 1$ and $|r| \ge 1$ exhaust the possibilities, since the order on $\mathbb{R}$ is total, so claims 1 and 2 together cover every real $r$. [step 4.1, step 4.2, cases-exhaustive] ∎

## Remarks

- **The divergence half needs no separate treatment of $r = 1$ and $r = -1$.** Both are covered by $|r| \ge 1$, and the single reason is the same in every case: the terms have absolute value at least $1$, so they cannot tend to $0$. For $r = 1$ the partial sums are $s_n = n$ and run to $+\infty$; for $r = -1$ they oscillate between $0$ and $1$. The theorem says only that neither converges, which is all that "diverges" means here ([[def-series]]).

- **Why the identity is proved at $n = 0$ separately.** [[lem-power-difference-factorisation]] requires $n \ge 1$, since its right-hand side is a sum over $k < n$ of a term involving $b^{\,n-1-k}$, and $n-1$ is not a natural number at $n = 0$. The identity is still true at $n = 0$, but by inspection of two empty objects rather than by that lemma, and step 1.4 says so rather than letting the reader assume the citation covers it.
````

### `thm-induction-principle`

````markdown
---
id: thm-induction-principle
kind: theorem
title: "The principle of mathematical induction"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-inductive-set, lem-omega-smallest-inductive]
aliases: [principle-of-induction, induction-principle]
landmark: true
short: "$0\\in S$, $\\sigma$-closed $\\Rightarrow S=\\mathbb N$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
pipeline_run: null
---

## Statement

Let $S \subseteq \mathbb{N}$. If $0 \in S$ and $\sigma(n) \in S$ whenever $n \in S$, then $S = \mathbb{N}$. Equivalently (property form): if a property $P$ satisfies $P(0)$ and ($P(n) \Rightarrow P(\sigma(n))$) for all $n$, then $P(n)$ holds for all $n \in \mathbb{N}$. This is the induction principle, the basis of proof by induction.

## Facts & Assumptions

**Given:** $\mathbb{N} = \omega$ is the smallest inductive set ([[def-inductive-set]], [[def-natural-numbers]], [[lem-omega-smallest-inductive]]); $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$.

[L1] $\omega$ is contained in every inductive set ([[lem-omega-smallest-inductive]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $S \subseteq \mathbb{N}$ with $0 = \varnothing \in S$ and ($x \in S \Rightarrow \sigma(x) = x \cup \{x\} \in S$). [given]

2.1 Then $S$ contains $\varnothing$ and is closed under $x \mapsto x \cup \{x\}$, so $S$ is an inductive set. [step 1.1]

3.1 $\mathbb{N} = \omega \subseteq S$ because $\omega$ is a subset of every inductive set. [L1, step 2.1]

4.1 With $S \subseteq \mathbb{N}$ by hypothesis, $S = \mathbb{N}$. [step 3.1, given]

5.1 The property form is the set case with $S = \{n \in \mathbb{N} : P(n)\}$: $P(0)$ and $P(n) \Rightarrow P(\sigma(n))$ give $0 \in S$ and $\sigma$-closure, so $S = \mathbb{N}$, i.e. $P$ holds for all $n$; conversely the set form is the property form applied to $P(n) :\equiv n \in S$, so the two are equivalent. [step 4.1] ∎
````

### `thm-nonnegative-series-bounded-partial-sums`

````markdown
---
id: thm-nonnegative-series-bounded-partial-sums
kind: theorem
title: "A series of nonnegative terms converges iff its partial sums are bounded, and then the sum is their supremum"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-series, def-monotone-sequence, thm-monotone-convergence, cor-monotone-converges-iff-bounded, lem-monotone-unbounded-diverges, def-bounded-set, def-finite-sum, lem-finite-sum-laws, def-sequence, def-divergence-to-infinity, def-complete-ordered-field]
justified_by: []
forward_refs: [cex-comparison-needs-nonnegativity]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Series (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Series_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 3 (3.24)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $(a_k)$ be a sequence of reals with $a_k \ge 0$ for every $k \in \mathbb{N}$,
let $s_n = \sum_{k<n} a_k$ be its partial sums and let
$S = \{\, s_n : n \in \mathbb{N} \,\}$ be the range of $(s_n)$ ([[def-series]]).
Then:

1. $(s_n)$ is nondecreasing ([[def-monotone-sequence]]) and $s_n \ge 0$ for every
   $n$;
2. $\sum a_k$ converges **if and only if** $S$ is bounded above
   ([[def-bounded-set]]), and in that case
   $$\sum_{k=0}^{\infty} a_k \;=\; \sup S ,$$
   so in particular $s_n \le \sum_{k=0}^{\infty} a_k$ for every $n$;
3. if $S$ is not bounded above then $s_n \to +\infty$
   ([[def-divergence-to-infinity]]) and $\sum a_k$ diverges.

This is the theorem that makes the nonnegative theory work: for terms of one
sign, convergence is a boundedness question and no candidate limit is ever
needed. Every comparison test on this page is an application of it.

## Facts & Assumptions

**Given:** A sequence $(a_k)$ of reals with $a_k \ge 0$ for every $k$, its partial sums $s_n = \sum_{k<n} a_k$, and the range $S = \{s_n : n \in \mathbb{N}\}$ ([[def-series]], [[def-finite-sum]], [[def-sequence]]).

[L1] The recursion clause of the finite sum: $s_{n+1} = s_n + a_n$ ([[def-finite-sum]]).

[L2] Consecutive comparisons suffice for monotonicity: $(x_k)$ is nondecreasing if and only if $x_k \le x_{k+1}$ for every $k$; and a nondecreasing sequence is bounded below by its first term ([[def-monotone-sequence]]).

[L3] Monotonicity of finite sums: if $a_k \ge 0$ for all $k < n$ then $\sum_{k<n} a_k \ge 0$ ([[lem-finite-sum-laws]]).

[L4] A monotone sequence converges if and only if it is bounded, that is if and only if there is $M$ with $|x_k| \le M$ for every $k$ ([[cor-monotone-converges-iff-bounded]], [[def-sequence]]).

[L5] A nondecreasing sequence bounded above converges to the supremum of its range, which exists by the least-upper-bound property ([[thm-monotone-convergence]], [[def-complete-ordered-field]], [[def-bounded-set]]).

[L6] A nondecreasing sequence whose range is not bounded above diverges to $+\infty$ ([[lem-monotone-unbounded-diverges]], [[def-divergence-to-infinity]]).

## Proof

**Proof technique:** direct.

1.1 For every $n$, $s_{n+1} - s_n = a_n \ge 0$, so $s_n \le s_{n+1}$ and $(s_n)$ is nondecreasing. [given, L1, L2]

1.2 For every $n$, $s_n = \sum_{k<n} a_k \ge 0$, all terms being nonnegative. [given, L3]

2.1 Claim 1 is steps 1.1 and 1.2 together. [step 1.1, step 1.2]

2.2 Since $s_n \ge 0$ we have $|s_n| = s_n$, so $(s_n)$ is bounded in the sense of [L4] if and only if $S$ is bounded above. [step 1.2, L4]

3.1 By [L4] applied to the monotone sequence $(s_n)$, the series converges if and only if $(s_n)$ is bounded, hence if and only if $S$ is bounded above. [step 1.1, step 2.2, L4]

4.1 If $S$ is bounded above then $(s_n)$ converges to $\sup S$, so $\sum a_k$ converges with sum $\sup S$; and since $\sup S$ is an upper bound of $S$, $s_n \le \sup S$ for every $n$. [step 1.1, step 3.1, L5]

4.2 If $S$ is not bounded above then $s_n \to +\infty$, and by step 3.1 the series diverges. [step 1.1, step 3.1, L6]

5.1 The equivalence and the identification of the sum as the supremum together make claim 2, and the divergence statement is claim 3. [step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **"Bounded" and "bounded above" coincide here, and only here.** The equivalence used in step 2.2 rests on $s_n \ge 0$, which rests on every term being nonnegative. For a series with terms of both signs the partial sums can be bounded above and still fail to converge, so nothing in this theorem survives the loss of the sign hypothesis. That failure is exhibited by [[cex-comparison-needs-nonnegativity]] on the companion page.

- **Claim 3 is a strictly stronger statement than "diverges".** Divergence alone permits oscillation ([[def-series]]); for nonnegative terms it cannot occur, and the partial sums necessarily run to $+\infty$. This is what licenses the phrase "the series diverges to $+\infty$" for nonnegative terms, and it is what the Abel-Dini theorem later on this page uses.

- **This criterion is the monotone convergence property, worn differently.** The proof above is monotone convergence for $\mathbb{R}$ applied to the nondecreasing sequence of partial sums, and nothing is lost going back the other way. Given a nondecreasing sequence $(x_n)$ of reals, put $y_n := x_n - x_0 \ge 0$ and let $a_0 := 0$, $a_{k+1} := y_{k+1} - y_k \ge 0$; then $s_{n+1} = y_n$ ([[def-series]]), the partial sums are bounded exactly when $(x_n)$ is bounded above, and claim 1 returns the convergence of $(y_n)$ and so of $(x_n)$. Testing boundedness of partial sums is therefore not a device special to series. Read in the vocabulary of [[def-completeness-properties]] it is the property (MCT), which in an arbitrary ordered field already forces the Archimedean property on its own ([[lem-mct-implies-archimedean]]) and with it the least-upper-bound property ([[lem-mct-implies-lub]]). The translation just given is carried out in $\mathbb{R}$, since [[def-series]] is stated for sequences of reals and this library defines no series over a general ordered field.
````

### `thm-perfect-set-uncountable-r`

````markdown
---
id: thm-perfect-set-uncountable-r
kind: theorem
title: "Every nonempty perfect subset of $\\mathbb{R}$ is uncountable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-perfect-set-r, thm-nested-interval-property, def-countable, lem-countable-iff-surjection-from-n, thm-recursion, def-interval, def-neighbourhood-r, thm-closure-characterisations-r, def-open-and-closed-in-r, def-limit-point-r, lem-rat-embeds-dense, thm-rationals-countable, thm-well-ordering-principle, cor-archimedean-reciprocal, thm-of-archimedean, def-injection-surjection-bijection, def-equinumerous, def-real-limit, def-sequence, lem-of-naturals-positive, lem-of-inverse-positive, lem-of-abs-value, lem-finite-set-has-max, def-max-min, def-complete-ordered-field, def-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
justified_by: []
forward_refs: [ex-closed-interval-is-perfect, cex-closed-set-with-an-isolated-point-is-not-perfect, ex-reciprocals-with-zero-are-compact]
aliases: []
landmark: true
short: "nonempty perfect $\\Rightarrow$ uncountable"
proof_strategy: contradiction
verification:
  precheck: pass
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
    - title: "Cantor-Bendixson theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%E2%80%93Bendixson_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.43)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "A. W. Miller, Tameness notes"
      url: "https://people.math.osu.edu/miller.1987/tameness.pdf"
pipeline_run: null
---

## Statement

Let $P \subseteq \mathbb{R}$ be nonempty and perfect ([[def-perfect-set-r]]).
Then $P$ is uncountable ([[def-countable]]).

**The selection is canonical, so that this proof spends no dependent choice.**
The textbook proof shrinks a neighbourhood at every stage by *choosing* a point
of $P$ and then a radius, a choice made infinitely often and each time depending
on the previous one: that is the axiom of dependent choice
([[def-dependent-choice]]), which is not available at this point in the reading
order; only the axiom of countable choice is, and it does not
licence a recursive selection. The construction below therefore fixes an
enumeration $e$ of the rationals once ([[thm-rationals-countable]],
[[lem-rat-embeds-dense]]) and, at every stage, takes the interval with
**least-indexed rational endpoints** meeting the requirements. The requirements
are met by some rational-endpoint interval, which is what step 2.1 proves, and
the least such index is determined by [[thm-well-ordering-principle]], so the
whole recursion is a single application of [[thm-recursion]] to a total map and
no choice principle is used anywhere.

## Facts & Assumptions

**Given:** A nonempty perfect set $P \subseteq \mathbb{R}$. Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$ under $q \mapsto \hat q$. A pair $(p,q) \in \mathbb{Q}_{\mathbb{R}} \times \mathbb{Q}_{\mathbb{R}}$ is called **good** when $p < q$ and $(p,q) \cap P \ne \varnothing$, and $G$ denotes the set of good pairs.

[L1] $P$ is perfect: $P$ is closed and every $x \in P$ is a limit point of $P$, so every punctured neighbourhood of $x$ meets $P$ ([[def-perfect-set-r]], [[def-limit-point-r]]).

[L2] $\overline{A}$ is the set of points every neighbourhood of which meets $A$, and $A$ is closed exactly when $A = \overline{A}$ ([[thm-closure-characterisations-r]], [[def-open-and-closed-in-r]]).

[L3] $N_\varepsilon(x) = (x - \varepsilon, x + \varepsilon)$; $x \in N_\varepsilon(x)$; $N^{*}_\varepsilon(x) = N_\varepsilon(x) \setminus \{x\}$; and $y \in N_\varepsilon(x)$ with $0 < \delta \le \varepsilon - |y - x|$ gives $N_\delta(y) \subseteq N_\varepsilon(x)$ ([[def-neighbourhood-r]]).

[L4] Intervals: $(p,q)$ is an open set and $[p,q]$ is a closed bounded interval, nonempty when $p \le q$ ([[def-interval]], [[def-open-and-closed-in-r]]).

[L5] A nonempty at most countable set admits a surjection from $\mathbb{N}$; uncountable means not at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

[L6] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]]); $q \mapsto \hat q$ is injective with image $\mathbb{Q}_{\mathbb{R}}$ and strictly between any two reals lies an element of $\mathbb{Q}_{\mathbb{R}}$ ([[lem-rat-embeds-dense]]); a composition of bijections is a bijection ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L7] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L8] Recursion: for a set $Y$, an element $y_0 \in Y$ and a function $T : Y \to Y$ there is $h : \mathbb{N} \to Y$ with $h(0) = y_0$ and $h(\sigma(k)) = T(h(k))$ ([[thm-recursion]]).

[L9] Nested interval property: for nonempty closed bounded intervals $I_k = [a_k,b_k]$ with $I_{k+1} \subseteq I_k$, the intersection is nonempty, and it is a single point exactly when the lengths $b_k - a_k$ tend to $0$ ([[thm-nested-interval-property]]).

[L10] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]); canonical naturals are positive and increasing, and reciprocation of positives reverses the order ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L11] Every nonempty finite set of reals has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]); $0 < 1$, so $2 := 1+1 > 0$ and $0 < d \cdot 2^{-1} < d$ for $d > 0$; adding a constant and multiplying by a positive preserve inequalities ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L12] Convergence of a sequence of reals to $0$ is tested against rational $\varepsilon > 0$ ([[def-real-limit]], [[def-sequence]]).

[L13] Absolute value: $|z| \ge 0$, and $|y - x| \le b - a$ whenever $x, y \in [a,b]$ ([[lem-of-abs-value]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that the nonempty perfect set $P$ is at most countable; by [L5] fix a surjection $f : \mathbb{N} \to P$. [assume-contra, L5, choose]

1.2 By [L6] fix a bijection $\beta : \mathbb{N} \to \mathbb{Q}$ and put $e := \iota \circ \beta$ with $\iota(q) = \hat q$, a bijection from $\mathbb{N}$ onto $\mathbb{Q}_{\mathbb{R}}$. [L6, choose]

1.3 Recall the terminology of the Given: a pair $(p,q)$ of elements of $\mathbb{Q}_{\mathbb{R}}$ is good when $p < q$ and $(p,q) \cap P \ne \varnothing$, and $G$ is the set of good pairs. [given, construct]

2.1 **Refinement claim.** For every good $(p,q)$, every $x \in \mathbb{R}$ and every real $\eta > 0$ there is a good $(p',q')$ with $[p',q'] \subseteq (p,q)$, $x \notin [p',q']$ and $q' - p' < \eta$. To see it, fix $y \in (p,q) \cap P$ and, $(p,q)$ being open, a real $\varepsilon > 0$ with $N_\varepsilon(y) \subseteq (p,q)$; since $y \in P$ is not isolated, [L1] gives $z \in N^{*}_\varepsilon(y) \cap P$, so $z \in P \cap (p,q)$ and $z \ne y$. At least one of $y, z$ differs from $x$; let $w$ be $y$ if $y \ne x$ and $z$ otherwise, so $w \in P \cap N_\varepsilon(y)$ and $w \ne x$. Put $\delta := \min\{\, \varepsilon - |w - y|,\ |w - x|,\ \eta \cdot 2^{-1} \,\}$, a positive real by [L11] since each entry is positive, and use [L6] to fix $p', q' \in \mathbb{Q}_{\mathbb{R}}$ with $w - \delta < p' < w < q' < w + \delta$. Then $[p',q'] \subseteq N_\delta(w) \subseteq N_\varepsilon(y) \subseteq (p,q)$ by [L3], the pair $(p',q')$ is good because $w \in (p',q') \cap P$, the point $x$ lies outside $N_\delta(w)$ because $|x - w| \ge \delta$, and $q' - p' < 2\delta \le \eta$. [step 1.3, L1, L3, L4, L6, L11, choose]

3.1 **Successor rule.** For $(k,(p,q)) \in \mathbb{N} \times G$ let $m$ be the least natural for which some natural $n$ makes $(e(m),e(n))$ good with $[e(m),e(n)] \subseteq (p,q)$, $f(k) \notin [e(m),e(n)]$ and $e(n) - e(m) < 1/(k+1)$, and let $n$ be the least natural with those properties for that $m$; put $T(k,(p,q)) := (\sigma(k), (e(m),e(n)))$. The set of eligible $m$ is nonempty by step 2.1 applied with $x = f(k)$ and $\eta = 1/(k+1) > 0$, since $e$ is onto $\mathbb{Q}_{\mathbb{R}}$, so both minima exist by [L7] and $T : \mathbb{N} \times G \to \mathbb{N} \times G$ is a total function defined without any selection. [step 2.1, L6, L7, L10, construct]

4.1 **The recursion.** $P$ is nonempty, so fix $y_0 \in P$ and, by [L6], elements $p_0 < y_0 < q_0$ of $\mathbb{Q}_{\mathbb{R}}$; then $(p_0,q_0)$ is good. Apply [L8] with $Y = \mathbb{N} \times G$, seed $(0,(p_0,q_0))$ and map $T$ to get $h : \mathbb{N} \to \mathbb{N} \times G$ with $h(0) = (0,(p_0,q_0))$ and $h(\sigma(k)) = T(h(k))$; an induction on $k$ shows the first coordinate of $h(k)$ is $k$, so write $h(k) = (k,(p_k,q_k))$ with every $(p_k,q_k)$ good. [step 1.3, step 3.1, L6, L8, construct]

5.1 Writing $I_k := [p_k,q_k]$ and $\ell_k := q_k - p_k > 0$, the rule of step 3.1 gives, for every $k \in \mathbb{N}$: $I_{k+1} \subseteq (p_k,q_k) \subseteq I_k$, so the intervals are nested and nonempty; $f(k) \notin I_{k+1}$; $\ell_{k+1} < 1/(k+1)$; and $I_k \cap P \ne \varnothing$, because $(p_k,q_k) \cap P \ne \varnothing$. [step 3.1, step 4.1, L4]

6.1 For every real $\varepsilon > 0$ there is $k \ge 1$ with $\ell_k < \varepsilon$, and moreover $\ell_k \to 0$: by step 5.1 one has $\ell_j < 1/j$ for every $j \ge 1$, since $\ell_j = \ell_{(j-1)+1} < 1/((j-1)+1) = 1/j$; given $\varepsilon > 0$, [L10] supplies a natural $n \ge 1$ with $1/n < \varepsilon$, and then every $k \ge n$ satisfies $k \ge 1$ and $|\ell_k - 0| = \ell_k < 1/k \le 1/n < \varepsilon$ by [L10] and [L13], which is both assertions, the second by [L12] since a rational $\varepsilon > 0$ is in particular a real one. [step 5.1, L10, L12, L13]

7.1 By [L9] the nested family $(I_k)$ of nonempty closed bounded intervals has an intersection that is a single point, since its lengths tend to $0$ by step 6.1; write $\{x\}$ for it, so $x \in I_k$ for every $k$. [step 5.1, step 6.1, L9]

8.1 $x \in P$: let $\varepsilon > 0$ be real and use step 6.1 to fix $k \ge 1$ with $\ell_k < \varepsilon$; by step 5.1 there is $y \in I_k \cap P$, and $x \in I_k$ by step 7.1, so $|y - x| \le \ell_k < \varepsilon$ by [L13] and $y \in N_\varepsilon(x) \cap P$. Every neighbourhood of $x$ therefore meets $P$, so $x \in \overline{P} = P$ by [L1] and [L2]. [step 5.1, step 6.1, step 7.1, L1, L2, L3, L13]

9.1 For every $k \in \mathbb{N}$ one has $x \in I_{k+1}$ by step 7.1 while $f(k) \notin I_{k+1}$ by step 5.1, so $x \ne f(k)$; thus the element $x$ of $P$ found in step 8.1 is not a value of $f$, contradicting the surjectivity of the $f$ fixed in step 1.1. The assumption is therefore untenable: a nonempty perfect subset of $\mathbb{R}$ is not at most countable, that is, it is uncountable. [step 1.1, step 5.1, step 7.1, step 8.1, L5, discharge-contradiction] ∎

## Remarks

- **Which hypothesis does what.** Closedness of $P$ is used exactly once, at the
  step that puts the limit point $x$ back into $P$; without it the construction
  still produces a point, but that point may lie outside $P$ and the
  contradiction evaporates. Having no isolated points is used exactly once, in
  the refinement claim, to produce a second point of $P$ inside a neighbourhood,
  which is what allows the excluded point $f(k)$ to be dodged. Nonemptiness is
  used to seed the recursion, and it cannot be dropped: $\varnothing$ is perfect
  and countable ([[def-perfect-set-r]]).

- **Why rational endpoints.** They are what make the construction canonical.
  The requirement "some good rational-endpoint interval inside $(p,q)$ misses
  $f(k)$ and is short" is a property of a pair of natural numbers, so it can be
  minimised by [[thm-well-ordering-principle]]; the same requirement stated for
  arbitrary real endpoints comes with no canonical least witness, and picking one
  would be a choice made afresh at every stage. This is the same device that
  keeps
  [[lem-subset-of-countable]] and [[lem-countable-iff-surjection-from-n]] choice
  free, transplanted from subsets of $\mathbb{N}$ to intervals.

- **The shrinking condition is $\ell_{k+1} < 1/(k+1)$ and not $1/k$.** Sequences
  and recursions here are indexed from $0$ ([[def-sequence]]), so the bound
  available at stage $k$ has to be positive at $k = 0$; $1/k$ is undefined
  there. The consequence, $\ell_j < 1/j$ for $j \ge 1$, is what step 6.1 uses,
  and it says nothing about $\ell_0$, which is not needed.

- **The result is sharp in both directions.** A nondegenerate closed interval is
  perfect and uncountable ([[ex-closed-interval-is-perfect]]), and deleting the
  no-isolated-points clause loses the conclusion: a closed set with an isolated
  point need not be perfect
  ([[cex-closed-set-with-an-isolated-point-is-not-perfect]]) and may be
  countable, as $\{\, 1/k : k \ge 1 \,\} \cup \{0\}$ is
  ([[ex-reciprocals-with-zero-are-compact]]). Applied to a
  nondegenerate closed interval, which [[ex-closed-interval-is-perfect]] shows
  to be perfect, the theorem reproves the uncountability of intervals
  ([[cor-interval-uncountable]]) by a different route; the two proofs share
  nothing but the completeness of $\mathbb{R}$, which
  [[cor-interval-uncountable]] spends as a supremum and the argument above
  spends through [[thm-nested-interval-property]].
````

### `thm-recursion`

````markdown
---
id: thm-recursion
kind: theorem
title: "The recursion theorem"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-peano-system, def-natural-numbers, thm-induction-principle]
aliases: [dedekind-recursion, recursion-theorem]
landmark: true
short: "$g(0)=a,\\ g(\\sigma n)=f(g n)$ unique"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §2.1-2.3 (Peano axioms, recursion, arithmetic)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "W. Aitken, MATH 378 Ch. 1: The Peano Axioms (CSU San Marcos)"
      url: "https://public.csusm.edu/aitken_html/m378_S2016/Ch1PeanoAxioms.pdf"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Let $(N,0,\sigma)$ be a Peano system ([[def-peano-system]]), in particular the natural numbers $\mathbb{N}$ ([[def-natural-numbers]]). For any set $A$, any element $a \in A$, and any function $f : A \to A$, there is a unique function $g : N \to A$ such that $g(0) = a$ and $g(\sigma(n)) = f(g(n))$ for all $n \in N$.

## Facts & Assumptions

**Given:** a Peano system $(N,0,\sigma)$, a set $A$, an element $a \in A$, and a function $f : A \to A$. Call a set $R \subseteq N \times A$ **closed** when $(0,a) \in R$ and, for all $n \in N$ and $x \in A$, $(n,x) \in R$ implies $(\sigma(n),f(x)) \in R$.

[L1] Induction holds in $N$: any $S \subseteq N$ with $0 \in S$ that is closed under $\sigma$ equals $N$ (axiom P3, [[thm-induction-principle]]).

[L2] In a Peano system $\sigma(n) \ne 0$ (P1) and $\sigma$ is injective (P2) ([[def-peano-system]]).

## Proof

**Proof technique:** direct.

1.1 The set $N \times A$ is closed, so the collection of closed subsets of $N \times A$ is nonempty; let $g := \bigcap \{ R : R \subseteq N \times A \text{ closed} \}$, which is itself closed, since if every closed $R$ contains $(0,a)$ then so does $g$, and if $(n,x) \in g$ then $(n,x) \in R$ for each closed $R$, whence $(\sigma(n),f(x)) \in R$ for each such $R$, so $(\sigma(n),f(x)) \in g$. [given, construct]

2.1 Let $D = \{ n \in N : \exists x \in A,\ (n,x) \in g \}$; then $0 \in D$ since $(0,a) \in g$, and if $n \in D$ with $(n,x) \in g$ then $(\sigma(n),f(x)) \in g$ by closure, so $\sigma(n) \in D$; by induction $D = N$, hence $g$ relates every $n$ to at least one $x$. [L1, step 1.1]

2.2 Suppose $(0,b) \in g$ with $b \ne a$; then $g \setminus \{(0,b)\}$ still contains $(0,a)$ and is closed, since any generated pair $(\sigma(m),f(z))$ has $\sigma(m) \ne 0$ by P1 and so is never equal to $(0,b)$; this contradicts the minimality of $g$, so $a$ is the unique second coordinate paired with $0$. [L2, step 1.1]

3.1 Let $U = \{ n \in N : \text{there is exactly one } x \text{ with } (n,x) \in g \}$; then $0 \in U$ by step 2.2. [step 2.2]

4.1 Assume $n \in U$ with unique value $x$, so $(n,x) \in g$ and $(\sigma(n),f(x)) \in g$ by closure; if $(\sigma(n),c) \in g$ with $c \ne f(x)$, then $g \setminus \{(\sigma(n),c)\}$ contains $(0,a)$ because $\sigma(n) \ne 0$, and is closed, because a generated pair $(\sigma(m),f(z))$ with $(m,z) \in g \setminus \{(\sigma(n),c)\}$ can equal $(\sigma(n),c)$ only if $\sigma(m) = \sigma(n)$ and $f(z) = c$, but $\sigma(m) = \sigma(n)$ forces $m = n$ by injectivity, then $z = x$ by uniqueness at $n$, giving $f(z) = f(x) \ne c$, a contradiction; hence $g \setminus \{(\sigma(n),c)\}$ is closed and smaller than $g$, contradicting minimality, so $f(x)$ is the unique value at $\sigma(n)$ and $\sigma(n) \in U$. [L2, step 3.1, step 1.1]

5.1 By induction $U = N$, so together with the totality from step 2.1 the relation $g$ is a function $g : N \to A$; it satisfies $g(0) = a$, and closure with uniqueness gives $g(\sigma(n)) = f(g(n))$ for all $n$. [L1, step 2.1, step 3.1, step 4.1]

6.1 If $h : N \to A$ also satisfies $h(0) = a$ and $h(\sigma(n)) = f(h(n))$, then the set $\{ n : g(n) = h(n) \}$ contains $0$ and is closed under $\sigma$, since $g(n) = h(n)$ implies $g(\sigma(n)) = f(g(n)) = f(h(n)) = h(\sigma(n))$, so by induction it equals $N$, that is $h = g$. [L1, step 5.1] ∎
````

### `thm-well-ordering-principle`

````markdown
---
id: thm-well-ordering-principle
kind: theorem
title: "The well-ordering principle"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-natural-numbers, def-nat-order, thm-induction-principle, lem-nat-discrete, lem-nat-trichotomy, thm-omega-is-peano-system, lem-nat-add-successor-left, lem-nat-add-identity]
aliases: [well-ordering]
landmark: true
short: "every nonempty $S\\subseteq\\mathbb N$ has a least element"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Well-ordering principle (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Well-ordering_principle"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Statement

Every nonempty subset $S \subseteq \mathbb{N}$ has a least element: there is $\ell \in S$ with $\ell \le s$ for all $s \in S$.

## Facts & Assumptions

**Given:** A nonempty subset $S \subseteq \mathbb{N}$. Define $T = \{\, n \in \mathbb{N} : \text{every } m \text{ with } m \le n \text{ satisfies } m \notin S \,\}$ (informally, no element of $S$ is $\le n$).

[L1] Induction principle: a subset of $\mathbb{N}$ that contains $0$ and is closed under $\sigma$ equals $\mathbb{N}$ ([[thm-induction-principle]]).

[L2] $m < n \iff \sigma(m) \le n$; consequently no $k$ satisfies $n < k < \sigma(n)$ ([[lem-nat-discrete]]).

[L3] Exactly one of $s < n$, $s = n$, $n < s$ holds ([[lem-nat-trichotomy]]); and $n < s \iff \sigma(n) \le s$ ([[lem-nat-discrete]]).

[L4] $\sigma$ is injective (Peano axiom P2) ([[thm-omega-is-peano-system]]).

[L5] $\sigma(a) + i = \sigma(a + i)$ for all $a, i$ (the left successor law, [[lem-nat-add-successor-left]]).

[L6] $0 + k = k$ for all $k$ ([[lem-nat-add-identity]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $S$ is nonempty but has no least element. [assume-contra]

1.2 If $m < \sigma(n)$ then $m \le n$: by [L2] applied to $m$ and $\sigma(n)$ we get $\sigma(m) \le \sigma(n)$, say $\sigma(m) + i = \sigma(n)$; then $\sigma(m + i) = \sigma(m) + i = \sigma(n)$ [L5], so $m + i = n$ by injectivity [L4], hence $m \le n$. [L2, L4, L5]

2.1 First, $0 \in T$: if $0 \in S$ then $0 \le s$ for all $s \in S$, since $0 + s = s$ [L6], making $0$ a least element, contrary to the assumption; hence $0 \notin S$; moreover $m \le 0$ forces $m = 0$, because $m \ne 0$ would give $0 < m$ (as $0 + m = m$ [L6] with $m \ne 0$) while $m \le 0$ gives $m < 0$, and [L3] admits at most one of these; so every $m \le 0$ lies outside $S$. [step 1.1, L3, L6, given]

2.2 Next, $T$ is closed under $\sigma$: assume $n \in T$; if $\sigma(n) \in S$ then no $s \in S$ satisfies $s < \sigma(n)$ (else $s \le n$ by step 1.2, so $s \notin S$ because $n \in T$, a contradiction), hence $\sigma(n) \le s$ for all $s \in S$ by [L3], making $\sigma(n)$ a least element, contrary to the assumption; therefore $\sigma(n) \notin S$, and any $m$ with $m \le \sigma(n)$ satisfies $m = \sigma(n)$ or $m \ne \sigma(n)$; in the second case $m \le \sigma(n)$ together with $m \ne \sigma(n)$ gives $m < \sigma(n)$ by the definition of the strict order, hence $m \le n$ by step 1.2 and $m \notin S$ because $n \in T$, while in the first case $m = \sigma(n) \notin S$; so every $m \le \sigma(n)$ lies outside $S$, giving $\sigma(n) \in T$. [step 1.1, step 1.2, L3]

3.1 By the induction principle [L1], from $0 \in T$ and closure under $\sigma$, $T = \mathbb{N}$; then for every $n$, taking $m = n \le n$ shows $n \notin S$, so $S = \varnothing$, contradicting nonemptiness; therefore $S$ has a least element. [step 2.1, step 2.2, L1, discharge-contradiction] ∎
````

