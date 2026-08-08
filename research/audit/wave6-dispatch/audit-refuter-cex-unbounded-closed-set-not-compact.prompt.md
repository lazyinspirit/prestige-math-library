# Audit proof-refuter brief — Wave 6, step A6

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

## Target item — `cex-unbounded-closed-set-not-compact`

Normalized current SHA-256: `7146ef31cbef3d5527c4a6284e077f173aea53f012a2774cd023254a5f2fb299`

The complete current item follows, including frontmatter:

````markdown
---
id: cex-unbounded-closed-set-not-compact
kind: counterexample
title: "$\\mathbb{Z}$ is closed and not compact, and $(0,1)$ is bounded and not compact: neither hypothesis of Heine-Borel can be dropped"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-heine-borel-characterisation-r, def-open-cover-r, def-integers, thm-of-archimedean, def-interval, lem-of-q-embeds, lem-of-naturals-positive, lem-of-triangle-inequality, lem-of-abs-value, lem-finite-set-has-max, def-max-min, def-open-and-closed-in-r, def-neighbourhood-r, def-bounded-set, def-ordered-field, def-complete-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
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
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "Integer (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement refuted

**Refuted claims:** (i) every closed subset of $\mathbb{R}$ is compact; (ii)
every bounded subset of $\mathbb{R}$ is compact
([[def-open-cover-r]]).

Both are refuted, so neither hypothesis of
[[thm-heine-borel-characterisation-r]] can be dropped. The witness for (i) is
the set $\mathbb{Z}$ of integers of $\mathbb{R}$, which is closed and unbounded;
the witness for (ii) is the interval $(0,1)$, which is bounded and not closed.

**What $\mathbb{Z}$ means here.** Write
$$\mathbb{Z} \;:=\; \{\, n \cdot 1_{\mathbb{R}} : n \in \mathbb{N} \,\} \cup \{\, -(n \cdot 1_{\mathbb{R}}) : n \in \mathbb{N} \,\}, \qquad 0 \cdot 1_{\mathbb{R}} := 0,$$
the set of **canonical integers** of $\mathbb{R}$. By [[lem-of-q-embeds]] this is
exactly the image of the integers ([[def-integers]]) under the unique field
homomorphism $\mathbb{Q} \to \mathbb{R}$, which sends $n$ to $n \cdot
1_{\mathbb{R}}$ and $-n$ to $-(n \cdot 1_{\mathbb{R}})$; as is standard we write
$\mathbb{Z}$ for it. Nothing below uses that identification: every step is
carried out with the displayed description.

## Facts & Assumptions

**Given:** The set $\mathbb{Z}$ of canonical integers of $\mathbb{R}$ as displayed above, and the interval $(0,1)$.

[A1] The refuted claims: (i) every closed subset of $\mathbb{R}$ is compact; (ii) every bounded subset of $\mathbb{R}$ is compact.

[L1] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded ([[thm-heine-borel-characterisation-r]], [[def-open-cover-r]]).

[L2] Canonical naturals: $n \cdot 1_{\mathbb{R}} > 0$ for $n \ge 1$, the map $n \mapsto n \cdot 1_{\mathbb{R}}$ is strictly increasing on $\{1,2,\dots\}$ with $1 \cdot 1_{\mathbb{R}} = 1$, and $(m+n) \cdot 1_{\mathbb{R}} = m \cdot 1_{\mathbb{R}} + n \cdot 1_{\mathbb{R}}$ for $m, n \ge 1$ ([[lem-of-naturals-positive]]).

[L3] Archimedean property: for every $x \in \mathbb{R}$ there is a natural $n \ge 1$ with $x < n \cdot 1_{\mathbb{R}}$ ([[thm-of-archimedean]]).

[L4] $U$ is open when each of its points has a neighbourhood inside it; $F$ is closed when $\mathbb{R} \setminus F$ is open; $N_\varepsilon(x) = \{\, y : |y-x| < \varepsilon \,\}$; each interval $(a,b)$ is an open set ([[def-open-and-closed-in-r]], [[def-neighbourhood-r]], [[def-interval]]).

[L5] A set is bounded when it has a lower and an upper bound ([[def-bounded-set]]).

[L6] Triangle inequality: $|p + q| \le |p| + |q|$ ([[lem-of-triangle-inequality]]); $|z| = z$ for $z \ge 0$ and $|z| = -z$ for $z < 0$, and $|-z| = |z|$ ([[lem-of-abs-value]]).

[L7] Every nonempty finite set of reals has a minimum, which is one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L8] $0 < 1$, so $2 := 1+1 > 0$ and $0 < d \cdot 2^{-1} < d$ for $d > 0$; adding a constant preserves an inequality and the order is total and transitive ([[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

## Counterexample

**Proof technique:** direct.

1.1 Distinct elements of $\mathbb{Z}$ differ by at least $1$ in absolute value. For $m, n \in \mathbb{N}$ with $m < n$: if $m = 0$ then $n \cdot 1_{\mathbb{R}} - 0 = n \cdot 1_{\mathbb{R}} \ge 1$ by [L2], since $n \ge 1$ and the map is increasing with value $1$ at $1$; and if $m \ge 1$ then $m + (n-m) = n$ with $n - m \ge 1$ gives $n \cdot 1_{\mathbb{R}} - m \cdot 1_{\mathbb{R}} = (n-m) \cdot 1_{\mathbb{R}} \ge 1$ by [L2]. The same computation after negation covers two distinct elements of the form $-(n \cdot 1_{\mathbb{R}})$, using $|-z| = |z|$ from [L6]. Finally, for distinct $n \cdot 1_{\mathbb{R}}$ and $-(m \cdot 1_{\mathbb{R}})$ at least one of $n, m$ is $\ge 1$, so their difference $n \cdot 1_{\mathbb{R}} + m \cdot 1_{\mathbb{R}}$ is a sum of two nonnegative terms one of which is $\ge 1$, hence is $\ge 1$. [given, L2, L6, L8]

1.2 $\mathbb{Z}$ is not bounded: given any $x \in \mathbb{R}$, [L3] supplies a natural $n \ge 1$ with $x < n \cdot 1_{\mathbb{R}}$, and $n \cdot 1_{\mathbb{R}} \in \mathbb{Z}$, so no $x$ is an upper bound of $\mathbb{Z}$ and $\mathbb{Z}$ has no upper bound at all. [given, L3, L5]

1.3 $(0,1)$ is bounded, since $0 \le y \le 1$ for every $y \in (0,1)$, and it is not closed: $0 \notin (0,1)$, while for every real $\varepsilon > 0$ the point $t := \min\{\varepsilon, 1\} \cdot 2^{-1}$ satisfies $0 < t < 1$ and $|t - 0| = t \le \varepsilon \cdot 2^{-1} < \varepsilon$ by [L7] and [L8], so $t \in N_\varepsilon(0) \cap (0,1)$ and no neighbourhood of $0$ lies in the complement of $(0,1)$. [L4, L5, L6, L7, L8]

2.1 $\mathbb{Z}$ is closed: let $x \in \mathbb{R} \setminus \mathbb{Z}$. The neighbourhood $N_{1 \cdot 2^{-1}}(x)$ contains at most one element of $\mathbb{Z}$, since two distinct elements $z, z'$ of it would satisfy $|z - z'| = |(z - x) + (x - z')| \le |z - x| + |x - z'| < 1 \cdot 2^{-1} + 1 \cdot 2^{-1} = 1$ by [L6], contradicting step 1.1. If it contains none, then $N_{1 \cdot 2^{-1}}(x) \cap \mathbb{Z} = \varnothing$. If it contains exactly one element $z$, then $z \ne x$ because $x \notin \mathbb{Z}$, so $|x - z| > 0$, and $\varepsilon := \min\{\, 1 \cdot 2^{-1},\ |x - z| \,\}$ is positive by [L7]; then $N_\varepsilon(x) \subseteq N_{1 \cdot 2^{-1}}(x)$, so any element of $\mathbb{Z}$ in $N_\varepsilon(x)$ must be $z$, whereas $|z - x| \ge \varepsilon$ excludes $z$. In both cases some neighbourhood of $x$ misses $\mathbb{Z}$, so $\mathbb{R} \setminus \mathbb{Z}$ is open. [step 1.1, L4, L6, L7, L8]

3.1 By step 2.1 the set $\mathbb{Z}$ is closed and by step 1.2 it is not bounded, so [L1] denies that it is compact, refuting claim (i) of [A1]; and by step 1.3 the set $(0,1)$ is bounded and not closed, so [L1] denies that it is compact, refuting claim (ii). Neither hypothesis of [L1] is therefore removable. [step 1.2, step 1.3, step 2.1, A1, L1] ∎

## Remarks

- **The two failures are of opposite kinds.** $\mathbb{Z}$ has all its limit
  points, of which it has none, and escapes to infinity; $(0,1)$ stays inside a
  bounded region and loses its two endpoints. Compactness rules out both, and
  [[thm-heine-borel-characterisation-r]] says these are the only two ways to
  fail for a subset of $\mathbb{R}$.

- **An explicit cover for each.** For $\mathbb{Z}$ the intervals $(-n,n)$ with
  $n \ge 1$ cover $\mathbb{R}$ and any finite subfamily has union $(-N,N)$, which
  omits the element $N \cdot 1_{\mathbb{R}}$ of $\mathbb{Z}$. For $(0,1)$ the
  cover $\{(1/k,1)\}$ of
  [[cex-open-cover-of-unit-interval-no-finite-subcover]] does the same job.
  Neither cover is needed above, since [[thm-heine-borel-characterisation-r]]
  already converts the failure of a hypothesis into the failure of compactness.

- **$\mathbb{Z}$ is closed and has no limit points at all**, which is what the
  separation computation really shows: its points are uniformly apart. A set of
  that kind is closed for free, and it is the standard example of a closed set
  that is as far from perfect as possible, every one of its points being
  isolated ([[def-perfect-set-r]]).
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-heine-borel-characterisation-r",
      "source_section": "Statement",
      "quote": "Let $K \\subseteq \\mathbb{R}$. Then $K$ is compact ([[def-open-cover-r]]) if and\nonly if $K$ is closed ([[def-open-and-closed-in-r]]) and bounded\n([[def-bounded-set]]).\n\nThis is the Heine-Borel theorem in the form used everywhere below. The forward\nimplication is [[lem-compact-implies-closed-and-bounded-r]] and spends no\ncompleteness, only the Archimedean property and the existence of maxima of\nfinite sets; the backward implication rests on\n[[thm-heine-borel-r]] and therefore on the completeness of $\\mathbb{R}$, and the\nremarks below record where it fails without completeness.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-open-cover-r",
      "source_section": "Definition",
      "quote": "Let $K \\subseteq \\mathbb{R}$, with open sets as in\n[[def-open-and-closed-in-r]].\n\n- An **open cover** of $K$ is a family $\\mathcal{U}$ of open subsets of\n  $\\mathbb{R}$ with $K \\subseteq \\bigcup \\mathcal{U}$.\n- A **subcover** of $\\mathcal{U}$ is a subfamily $\\mathcal{V} \\subseteq\n  \\mathcal{U}$ that is still an open cover of $K$.\n- A subfamily $\\mathcal{V} \\subseteq \\mathcal{U}$ is **finite** when\n  $\\mathcal{V} = \\varnothing$ or there are $n \\in \\mathbb{N}$ and members\n  $U_0, \\dots, U_n$ of $\\mathcal{U}$ with $\\mathcal{V} = \\{U_0, \\dots, U_n\\}$;\n  repetitions in the list are allowed and harmless.\n- $K$ is **compact** when every open cover of $K$ has a finite subcover:\n  for every open cover $\\mathcal{U}$ of $K$, either $K = \\varnothing$ and the\n  empty subfamily covers it, or there are $n \\in \\mathbb{N}$ and\n  $U_0, \\dots, U_n \\in \\mathcal{U}$ with\n  $$K \\subseteq U_0 \\cup \\dots \\cup U_n .$$\n- $K$ is **sequentially compact** when every sequence $(x_k)$ of reals with\n  $x_k \\in K$ for all $k \\in \\mathbb{N}$ ([[def-sequence]]) has a subsequence\n  converging ([[def-real-limit]]) to some point of $K$; equivalently, when every\n  such sequence has a subsequential limit ([[def-subsequential-limit]]) that\n  lies in $K$.\n\n**Compactness is a property of $K$ alone.** The covering families range over open\nsubsets of $\\mathbb{R}$, not over sets open in some other ambient space, so the\nnotion defined here is compactness of $K$ as a subset of $\\mathbb{R}$. Nothing\nbelow relativises it to a smaller ambient field; where an ordered field other\nthan $\\mathbb{R}$ is meant, as in\n[[fs-closed-bounded-compact-without-completeness]], the whole vocabulary is set\nup again there for that field.\n\n**$\\varnothing$ is compact and sequentially compact.** The empty subfamily covers\nit, and there is no sequence with all terms in $\\varnothing$, so both conditions\nhold vacuously.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "thm-of-archimedean",
      "source_section": "Statement",
      "quote": "Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:\nfor every $x \\in F$ there is a natural number $n \\ge 1$ with $x < n \\cdot 1_F$,\nwhere $n \\cdot 1_F$ is the canonical natural of the ordered field $F$\n([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.",
      "uses": [
        "1.2"
      ]
    },
    {
      "fact": "L4",
      "source": "def-open-and-closed-in-r",
      "source_section": "Definition",
      "quote": "Let $U, F \\subseteq \\mathbb{R}$, with neighbourhoods as in\n[[def-neighbourhood-r]].\n\n- $U$ is **open** when for every $x \\in U$ there is a real $\\varepsilon > 0$\n  with $N_\\varepsilon(x) \\subseteq U$.\n- $F$ is **closed** when its complement $\\mathbb{R} \\setminus F$ is open.\n- A set is **clopen** when it is both open and closed.\n\nThe whole of the topology of $\\mathbb{R}$ developed on this page rests on this\none definition: closedness is *defined* as openness of the complement, and every\nother description of a closed set on this page is a theorem\n([[thm-closure-characterisations-r]], [[lem-sequential-characterisation-of-closure-r]]).\n\n**$\\varnothing$ and $\\mathbb{R}$ are clopen.** The condition defining openness\nquantifies over the elements of the set, so it holds vacuously for\n$\\varnothing$; and for $x \\in \\mathbb{R}$ one has $N_1(x) \\subseteq \\mathbb{R}$,\nso $\\mathbb{R}$ is open. Since each of the two is the complement of the other,\neach is also closed.\n\n**Every neighbourhood is open.** Let $y \\in N_\\varepsilon(x)$ and put\n$\\delta := \\varepsilon - |y - x|$, which is $> 0$ because\n$y \\in N_\\varepsilon(x)$. The nesting property of [[def-neighbourhood-r]] gives\n$N_\\delta(y) \\subseteq N_\\varepsilon(x)$. So every point of $N_\\varepsilon(x)$\nhas a neighbourhood inside it.\n\n**The four open forms of [[def-interval]] are open sets.** Let $a, b \\in\n\\mathbb{R}$.\n\n- $(a,b)$: for $x$ with $a < x < b$, both $x - a > 0$ and $b - x > 0$, so\n  $\\delta := \\min\\{x - a,\\ b - x\\}$ is a positive real (the minimum of a\n  two-element set of reals exists, [[lem-finite-set-has-max]], [[def-max-min]]).\n  If $|y - x| < \\delta$ then $y > x - \\delta \\ge x - (x - a) = a$ and\n  $y < x + \\delta \\le x + (b - x) = b$, so $y \\in (a,b)$; hence\n  $N_\\delta(x) \\subseteq (a,b)$.\n- $(a,\\infty)$: for $x > a$ take $\\delta := x - a > 0$; then $|y - x| < \\delta$\n  gives $y > x - \\delta = a$.\n- $(-\\infty,b)$: for $x < b$ take $\\delta := b - x > 0$; then $|y - x| < \\delta$\n  gives $y < x + \\delta = b$.\n- $(-\\infty,\\infty) = \\mathbb{R}$: already treated above.\n\n**The four closed forms of [[def-interval]] are closed sets.** In each case the\ncomplement is shown open directly.\n\n- $[a,b]$: if $x \\notin [a,b]$ then $x < a$ or $x > b$ by trichotomy\n  ([[def-ordered-field]]). If $x < a$, take $\\delta := a - x > 0$; every\n  $y \\in N_\\delta(x)$ has $y < x + \\delta = a$, hence $y \\notin [a,b]$. If\n  $x > b$, take $\\delta := x - b > 0$; every $y \\in N_\\delta(x)$ has\n  $y > x - \\delta = b$, hence $y \\notin [a,b]$. So\n  $\\mathbb{R} \\setminus [a,b]$ is open.\n- $[a,\\infty)$: its complement is $(-\\infty,a)$, which is open by the previous\n  paragraph.\n- $(-\\infty,b]$: its complement is $(b,\\infty)$, which is open.\n- $(-\\infty,\\infty) = \\mathbb{R}$: its complement is $\\varnothing$, which is\n  open.",
      "uses": [
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-neighbourhood-r",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]) and its absolute value ([[def-abs-value]]).\n\nLet $x \\in \\mathbb{R}$ and let $\\varepsilon \\in \\mathbb{R}$ with\n$\\varepsilon > 0$. The **$\\varepsilon$-neighbourhood of $x$** is\n\n$$N_\\varepsilon(x) \\;:=\\; \\{\\, y \\in \\mathbb{R} : |y - x| < \\varepsilon \\,\\},$$\n\nand the **punctured $\\varepsilon$-neighbourhood of $x$** is\n\n$$N^{*}_\\varepsilon(x) \\;:=\\; N_\\varepsilon(x) \\setminus \\{x\\} \\;=\\; \\{\\, y \\in \\mathbb{R} : 0 < |y - x| < \\varepsilon \\,\\}.$$\n\nThe two descriptions of $N^{*}_\\varepsilon(x)$ agree because $|y - x| = 0$ holds\nexactly when $y = x$ ([[lem-of-abs-value]]).\n\n**A neighbourhood is an open interval.** For every $x$ and every\n$\\varepsilon > 0$,\n\n$$N_\\varepsilon(x) \\;=\\; (x - \\varepsilon,\\ x + \\varepsilon),$$\n\nthe interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for\n$\\varepsilon > 0$, the equivalence $|y - x| < \\varepsilon \\iff -\\varepsilon <\ny - x < \\varepsilon$, and adding $x$ throughout turns the right-hand side into\n$x - \\varepsilon < y < x + \\varepsilon$ ([[def-ordered-field]]).\n\n**The centre lies in its own neighbourhoods.** $x \\in N_\\varepsilon(x)$, since\n$|x - x| = |0| = 0 < \\varepsilon$ ([[lem-of-abs-value]]).\n\n**Punctured neighbourhoods are never empty.** The element\n$y := x + \\varepsilon/2$ satisfies $|y - x| = \\varepsilon/2$, which is\n$> 0$ and $< \\varepsilon$, so $y \\in N^{*}_\\varepsilon(x)$\n([[lem-of-abs-value]], [[def-ordered-field]]).\n\n**Monotonicity in the radius.** If $0 < \\delta \\le \\varepsilon$ then\n$N_\\delta(x) \\subseteq N_\\varepsilon(x)$, because $|y - x| < \\delta \\le\n\\varepsilon$ ([[def-ordered-field]]).\n\n**Nesting at an interior point.** If $y \\in N_\\varepsilon(x)$ and\n$0 < \\delta \\le \\varepsilon - |y - x|$, then\n\n$$N_\\delta(y) \\;\\subseteq\\; N_\\varepsilon(x).$$\n\nIndeed for $z \\in N_\\delta(y)$ the triangle inequality\n([[lem-of-triangle-inequality]]) gives\n$|z - x| = |(z - y) + (y - x)| \\le |z - y| + |y - x| < \\delta + |y - x| \\le\n\\varepsilon$. Note that $\\varepsilon - |y - x| > 0$ precisely because\n$y \\in N_\\varepsilon(x)$, so such a $\\delta$ always exists.",
      "uses": [
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-interval",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ is the complete ordered field\n([[def-complete-ordered-field]], [[def-ordered-field]]) with its order\n([[def-real-order]]).\n\nA subset $I \\subseteq \\mathbb{R}$ is **order-convex** when\n\n$$x, y \\in I \\text{ and } x \\le z \\le y \\;\\Longrightarrow\\; z \\in I .$$\n\nThe **intervals** of $\\mathbb{R}$ are the sets of the following nine forms, where\n$a, b \\in \\mathbb{R}$:\n\n| | bounded forms | | one-sided and full forms |\n|---|---|---|---|\n| $(a,b)$ | $\\{x : a < x < b\\}$ | $(a,\\infty)$ | $\\{x : a < x\\}$ |\n| $[a,b]$ | $\\{x : a \\le x \\le b\\}$ | $[a,\\infty)$ | $\\{x : a \\le x\\}$ |\n| $[a,b)$ | $\\{x : a \\le x < b\\}$ | $(-\\infty,b)$ | $\\{x : x < b\\}$ |\n| $(a,b]$ | $\\{x : a < x \\le b\\}$ | $(-\\infty,b]$ | $\\{x : x \\le b\\}$ |\n| | | $(-\\infty,\\infty)$ | $\\mathbb{R}$ |\n\nAn interval is **open** when both of its written endpoints are excluded, that is\nfor the forms $(a,b)$, $(a,\\infty)$, $(-\\infty,b)$ and $(-\\infty,\\infty)$; it is\n**closed** when both written endpoints are included, that is for $[a,b]$,\n$[a,\\infty)$, $(-\\infty,b]$ and $(-\\infty,\\infty)$. The forms $[a,b)$ and\n$(a,b]$ are **half-open**.\n\n**The symbols $\\pm\\infty$ are notation and not elements of $\\mathbb{R}$.** They\nmark which side carries no endpoint condition at all; the five forms in the right\ncolumn are defined by the displayed conditions on $x$ alone, and no arithmetic is\never performed with $\\infty$. This is the same refusal to extend $\\mathbb{R}$\nsilently that [[rem-sup-conventions]] records for suprema.\n\n**Every one of the nine forms is order-convex.** Each is defined by a conjunction\nof at most two conditions, each of the shape $a < x$, $a \\le x$, $x < b$ or\n$x \\le b$, and each such condition is inherited by an intermediate point: if\n$a < x$ and $x \\le z$ then $a < z$, and if $z \\le y$ and $y < b$ then $z < b$,\nby transitivity of the order ([[def-ordered-field]]). Applying this to whichever\none or two conditions define the form in question gives $z \\in I$ whenever\n$x, y \\in I$ and $x \\le z \\le y$.\n\n**Bounded intervals.** An interval is **bounded** ([[def-bounded-set]]) exactly\nwhen it is of one of the four forms in the left column: for those, $a$ is a lower\nbound and $b$ an upper bound. The other five forms are unbounded, on the side or\nsides written with $\\infty$; the verification is in the remarks below.\n\n**Nondegeneracy.** An interval is **degenerate** when it has at most one element,\nand **nondegenerate** when it has at least two. For the four bounded forms with\nendpoints $a$ and $b$:\n\n- $[a,b]$ is nonempty exactly when $a \\le b$, and it is nondegenerate exactly\n  when $a < b$. It is the singleton $\\{a\\}$ when $a = b$.\n- $(a,b)$, $[a,b)$ and $(a,b]$ are nonempty exactly when $a < b$, and then each\n  is nondegenerate.\n\nThe only assertion here that is not immediate from the defining conditions is\nthat $a < b$ makes $(a,b)$ nonempty with at least two points. It holds because\n$a < (a+b)/2 < b$, which follows from $a < b$ by adding $a$, respectively $b$, to\nboth sides and halving ([[def-ordered-field]]); repeating the halving inside\n$(a, (a+b)/2)$ produces a second point.\n\n**Closed bounded intervals.** These are the sets $[a,b]$ with $a \\le b$, which is\nexactly the condition making them nonempty. They are the intervals the nested\ninterval property is stated for, and the phrase *closed bounded interval* always\ncarries the hypothesis $a \\le b$ in this library.\n\n**Length.** The **length** of a bounded interval presented by its endpoints\n$a \\le b$ is\n\n$$\\ell = b - a \\;\\ge\\; 0 .$$\n\nLength is attached to the presentation by endpoints and is not recovered from the\nset: $(a,b)$, $[a,b)$ and $(a,b]$ are all empty when $a = b$, and so is\n$(c,c)$ for any other $c$, while each of these presentations has length $0$, so\nnothing inconsistent arises; but the endpoints are named explicitly at every\npoint where a length is used in this library, and never inferred from the set.\nUnbounded intervals are assigned no length.",
      "uses": [
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L5",
      "source": "def-bounded-set",
      "source_section": "Definition",
      "quote": "Throughout, $\\mathbb{R}$ denotes the complete ordered field\n([[def-complete-ordered-field]]) and $S \\subseteq \\mathbb{R}$ is a subset of it.\n\nThe notions **upper bound** and **bounded above** are already fixed by\n[[def-complete-ordered-field]] and are only recalled here, never redefined:\n$u \\in \\mathbb{R}$ is an *upper bound* of $S$ if $s \\le u$ for all $s \\in S$, and\n$S$ is *bounded above* if it has at least one upper bound. The dual notions are:\n\n- $\\ell \\in \\mathbb{R}$ is a **lower bound** of $S$ if $\\ell \\le s$ for all $s \\in S$.\n- $S$ is **bounded below** if it has at least one lower bound.\n- $S$ is **bounded** if it is both bounded above and bounded below, that is, if\n  there are $\\ell, u \\in \\mathbb{R}$ with $\\ell \\le s \\le u$ for every $s \\in S$.",
      "uses": [
        "1.2",
        "1.3"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-triangle-inequality",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$. Then\n\n$$|x + y| \\le |x| + |y|.$$",
      "uses": [
        "1.1",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L6",
      "source": "lem-of-abs-value",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \\in F$, with\n$|x|$ the absolute value ([[def-abs-value]]). Then\n\n$$|x| \\ge 0; \\quad |x| = 0 \\iff x = 0; \\quad -|x| \\le x \\le |x|; \\quad |-x| = |x|; \\quad |xy| = |x|\\,|y|;$$\n\nand, for every $c > 0$, one has $|x| < c \\iff -c < x < c$.",
      "uses": [
        "1.1",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-finite-set-has-max",
      "source_section": "Statement",
      "quote": "For every $n \\in \\mathbb{N}$ and all $a_0, a_1, \\dots, a_n \\in \\mathbb{R}$, the\nset $\\{a_0, a_1, \\dots, a_n\\}$ has a maximum and a minimum ([[def-max-min]]).\n\nWhat is proved below is exactly the displayed statement, by induction on $n$.\n\nThe usual reading, that *every nonempty finite subset of $\\mathbb{R}$ has a\nmaximum and a minimum*, follows once one identifies the nonempty finite subsets\nof $\\mathbb{R}$ with the sets listable as $\\{a_0, \\dots, a_n\\}$. That\nidentification is recorded as a stipulation in the Given below, because this page\nhas no definition of finiteness to prove it against. **It is discharged, not\nmerely assumed**: [[lem-finite-subsets-listable]] proves that the two\ndescriptions of a nonempty finite subset of $\\mathbb{R}$ agree. That lemma is\nrecorded in `justified_by` rather than in `deps`, since it is about the sets this\nlemma quantifies over and therefore depends on this one. This is what licenses\nthe notation\n$\\max\\{a_1, \\dots, a_n\\}$ and $\\min\\{a_1, \\dots, a_n\\}$ for finite sets of\n**real** numbers from this page onwards.",
      "uses": [
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-max-min",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq \\mathbb{R}$ and $m \\in \\mathbb{R}$.\n\n- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \\in S$ and $s \\le m$\n  for every $s \\in S$.\n- $m$ is a **minimum** (or *least element*) of $S$ if $m \\in S$ and $m \\le s$\n  for every $s \\in S$.\n\nA set has at most one maximum: if $m_1$ and $m_2$ are both maxima then\n$m_1 \\in S$ gives $m_1 \\le m_2$ and $m_2 \\in S$ gives $m_2 \\le m_1$, so\n$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy\naxiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).\nThe same argument applies to minima, so we may write $\\max S$ and $\\min S$.",
      "uses": [
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L8",
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity\nsatisfies $0 < 1$; that is, $1 \\in P$.",
      "uses": [
        "1.1",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c, d \\in F$.\n\n1. **Translation invariance.** If $a < b$ then $a + c < b + c$.\n2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "1.1",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c \\in F$.\n\n1. If $a > 0$ and $b > 0$ then $ab > 0$.\n2. If $a > 0$ and $b < 0$ then $ab < 0$.\n3. If $a < 0$ and $b < 0$ then $ab > 0$.\n4. If $c > 0$ then $a < b \\iff ac < bc$.\n5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "1.1",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.1",
        "1.3",
        "2.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "1.1",
        "1.3",
        "2.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "Distinct elements of $\\mathbb{Z}$ differ by at least $1$ in absolute value. For $m, n \\in \\mathbb{N}$ with $m < n$: if $m = 0$ then $n \\cdot 1_{\\mathbb{R}} - 0 = n \\cdot 1_{\\mathbb{R}} \\ge 1$ by [L2], since $n \\ge 1$ and the map is increasing with value $1$ at $1$; and if $m \\ge 1$ then $m + (n-m) = n$ with $n - m \\ge 1$ gives $n \\cdot 1_{\\mathbb{R}} - m \\cdot 1_{\\mathbb{R}} = (n-m) \\cdot 1_{\\mathbb{R}} \\ge 1$ by [L2]. The same computation after negation covers two distinct elements of the form $-(n \\cdot 1_{\\mathbb{R}})$, using $|-z| = |z|$ from [L6]. Finally, for distinct $n \\cdot 1_{\\mathbb{R}}$ and $-(m \\cdot 1_{\\mathbb{R}})$ at least one of $n, m$ is $\\ge 1$, so their difference $n \\cdot 1_{\\mathbb{R}} + m \\cdot 1_{\\mathbb{R}}$ is a sum of two nonnegative terms one of which is $\\ge 1$, hence is $\\ge 1$.",
      "step": "1.1",
      "inputs": [
        "given",
        "L2",
        "L6",
        "L8"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "$\\mathbb{Z}$ is not bounded: given any $x \\in \\mathbb{R}$, [L3] supplies a natural $n \\ge 1$ with $x < n \\cdot 1_{\\mathbb{R}}$, and $n \\cdot 1_{\\mathbb{R}} \\in \\mathbb{Z}$, so no $x$ is an upper bound of $\\mathbb{Z}$ and $\\mathbb{Z}$ has no upper bound at all.",
      "step": "1.2",
      "inputs": [
        "given",
        "L3",
        "L5"
      ]
    },
    {
      "id": "step-1-3",
      "claim": "$(0,1)$ is bounded, since $0 \\le y \\le 1$ for every $y \\in (0,1)$, and it is not closed: $0 \\notin (0,1)$, while for every real $\\varepsilon > 0$ the point $t := \\min\\{\\varepsilon, 1\\} \\cdot 2^{-1}$ satisfies $0 < t < 1$ and $|t - 0| = t \\le \\varepsilon \\cdot 2^{-1} < \\varepsilon$ by [L7] and [L8], so $t \\in N_\\varepsilon(0) \\cap (0,1)$ and no neighbourhood of $0$ lies in the complement of $(0,1)$.",
      "step": "1.3",
      "inputs": [
        "L4",
        "L5",
        "L6",
        "L7",
        "L8"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "$\\mathbb{Z}$ is closed: let $x \\in \\mathbb{R} \\setminus \\mathbb{Z}$. The neighbourhood $N_{1 \\cdot 2^{-1}}(x)$ contains at most one element of $\\mathbb{Z}$, since two distinct elements $z, z'$ of it would satisfy $|z - z'| = |(z - x) + (x - z')| \\le |z - x| + |x - z'| < 1 \\cdot 2^{-1} + 1 \\cdot 2^{-1} = 1$ by [L6], contradicting step 1.1. If it contains none, then $N_{1 \\cdot 2^{-1}}(x) \\cap \\mathbb{Z} = \\varnothing$. If it contains exactly one element $z$, then $z \\ne x$ because $x \\notin \\mathbb{Z}$, so $|x - z| > 0$, and $\\varepsilon := \\min\\{\\, 1 \\cdot 2^{-1},\\ |x - z| \\,\\}$ is positive by [L7]; then $N_\\varepsilon(x) \\subseteq N_{1 \\cdot 2^{-1}}(x)$, so any element of $\\mathbb{Z}$ in $N_\\varepsilon(x)$ must be $z$, whereas $|z - x| \\ge \\varepsilon$ excludes $z$. In both cases some neighbourhood of $x$ misses $\\mathbb{Z}$, so $\\mathbb{R} \\setminus \\mathbb{Z}$ is open.",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "L4",
        "L6",
        "L7",
        "L8"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "By step 2.1 the set $\\mathbb{Z}$ is closed and by step 1.2 it is not bounded, so [L1] denies that it is compact, refuting claim (i) of [A1]; and by step 1.3 the set $(0,1)$ is bounded and not closed, so [L1] denies that it is compact, refuting claim (ii). Neither hypothesis of [L1] is therefore removable.",
      "step": "3.1",
      "inputs": [
        "step 1.2",
        "step 1.3",
        "step 2.1",
        "A1",
        "L1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The cex-unbounded-closed-set-not-compact statement has no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "The statement and step 1.1 explicitly treat the zero boundary."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "The statement and step 1.1 explicitly treat the unit or first-index boundary."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The cex-unbounded-closed-set-not-compact statement has no parameter degeneracy that changes the claim."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The cex-unbounded-closed-set-not-compact statement has no interval or extended-real endpoint convention."
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "The cex-unbounded-closed-set-not-compact proof makes no selection from a set whose nonemptiness needs a separate discharge."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The cex-unbounded-closed-set-not-compact statement is not a biconditional requiring a forward implication."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The cex-unbounded-closed-set-not-compact statement is not a biconditional requiring a reverse implication."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": null,
    "notes": "Reserved for the independent Alpha proof-refuter when risk routing is run after A3."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cex-unbounded-closed-set-not-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-heine-borel-characterisation-r",
    "declared_target": "thm-heine-borel-characterisation-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-unbounded-closed-set-not-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-open-cover-r",
    "declared_target": "def-open-cover-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-unbounded-closed-set-not-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-integers",
    "declared_target": "def-integers",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-unbounded-closed-set-not-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "thm-of-archimedean",
    "declared_target": "thm-of-archimedean",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-unbounded-closed-set-not-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-unbounded-closed-set-not-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-of-q-embeds",
    "declared_target": "lem-of-q-embeds",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-unbounded-closed-set-not-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-of-naturals-positive",
    "declared_target": "lem-of-naturals-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-unbounded-closed-set-not-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-of-triangle-inequality",
    "declared_target": "lem-of-triangle-inequality",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-unbounded-closed-set-not-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-unbounded-closed-set-not-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-finite-set-has-max",
    "declared_target": "lem-finite-set-has-max",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-unbounded-closed-set-not-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-max-min",
    "declared_target": "def-max-min",
    "target_statement_provenance": "ai-altered",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-unbounded-closed-set-not-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-open-and-closed-in-r",
    "declared_target": "def-open-and-closed-in-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-unbounded-closed-set-not-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-neighbourhood-r",
    "declared_target": "def-neighbourhood-r",
    "target_statement_provenance": null,
    "targetPage": "topology-of-r",
    "targetBatch": "wave6-real-analysis-limits",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-unbounded-closed-set-not-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "def-bounded-set",
    "declared_target": "def-bounded-set",
    "target_statement_provenance": "literature-derived",
    "targetPage": "suprema-and-infima",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "cex-unbounded-closed-set-not-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-unbounded-closed-set-not-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-unbounded-closed-set-not-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-unbounded-closed-set-not-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
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
    "source": "cex-unbounded-closed-set-not-compact",
    "sourcePage": "topology-of-r-examples",
    "batch": "wave6-real-analysis-limits",
    "target": "lem-of-sign-rules",
    "declared_target": "lem-of-sign-rules",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (21)

### `cex-open-cover-of-unit-interval-no-finite-subcover`

````markdown
---
id: cex-open-cover-of-unit-interval-no-finite-subcover
kind: counterexample
title: "The cover $\\{(1/k, 1)\\}$ of $(0,1)$ has no finite subcover, so $(0,1)$ is not compact"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-open-cover-r, thm-heine-borel-characterisation-r, cor-archimedean-reciprocal, thm-of-archimedean, def-interval, def-open-and-closed-in-r, def-neighbourhood-r, lem-of-naturals-positive, lem-of-inverse-positive, lem-finite-set-has-max, def-max-min, lem-of-abs-value, def-ordered-field, def-complete-ordered-field, cor-of-one-positive, lem-of-add-order, lem-of-sign-rules]
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
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Example 2.21(h))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "University of Colorado, Analysis I midterm solutions"
      url: "https://math.colorado.edu/~stade/AnalysisI/TH_Midterm_3001_sol.pdf"
pipeline_run: null
---

## Statement refuted

**Refuted claim:** the bounded interval $(0,1)$ is compact
([[def-open-cover-r]]); equivalently, boundedness on its own is enough for
compactness.

The witness is the family

$$\mathcal{U} \;:=\; \{\, V_k : k \ge 1 \,\}, \qquad V_k := (1/k,\ 1),$$

of open subsets of $\mathbb{R}$. The index runs over $k \ge 1$ because $1/0$ is
undefined, and the first member is degenerate: $V_1 = (1,1) = \varnothing$,
which is harmless, since a cover may contain empty members. The family covers
$(0,1)$ and no finite subfamily does.

## Facts & Assumptions

**Given:** For each natural $k \ge 1$ the interval $V_k := (1/k,\ 1)$, where $1/k$ is the inverse of the canonical natural $k \cdot 1_{\mathbb{R}}$, and the family $\mathcal{U} := \{\, V_k : k \ge 1 \,\}$.

[A1] The refuted claim: $(0,1)$ is compact.

[L1] An open cover of $S$ is a family of open subsets of $\mathbb{R}$ whose union contains $S$; $S$ is compact when every open cover has a finite subfamily, empty or of the form $\{U_0, \dots, U_p\}$, whose union contains $S$ ([[def-open-cover-r]]).

[L2] Each interval of the form $(a,b)$ is an open set; $N_\varepsilon(x) = \{\, y : |y-x| < \varepsilon \,\}$ ([[def-open-and-closed-in-r]], [[def-interval]], [[def-neighbourhood-r]]).

[L3] Reciprocal Archimedean property: for every real $\varepsilon > 0$ there is a natural $n \ge 1$ with $1/n < \varepsilon$ ([[cor-archimedean-reciprocal]], [[thm-of-archimedean]]).

[L4] Canonical naturals are positive and increasing for $k \ge 1$, with $1 \cdot 1_{\mathbb{R}} = 1$; reciprocation of positives is positive and reverses the order, so $1 \le m \le n$ gives $0 < 1/n \le 1/m \le 1$ ([[lem-of-naturals-positive]], [[lem-of-inverse-positive]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L5] Every nonempty finite set of reals has a maximum and a minimum, each one of its members ([[lem-finite-set-has-max]], [[def-max-min]]).

[L6] Absolute value and ordered-field arithmetic: $|z| = z$ for $z \ge 0$; $0 < 1$, so $2 := 1+1 > 0$ and $0 < d \cdot 2^{-1} < d$ for $d > 0$; the order is total and transitive ([[lem-of-abs-value]], [[cor-of-one-positive]], [[lem-of-add-order]], [[lem-of-sign-rules]], [[def-ordered-field]], [[def-complete-ordered-field]]). These order-arithmetic facts are stated by their sources for the strict order only; the nonstrict forms used below follow by adjoining the equality case, in which the two sides coincide.

[L7] A subset of $\mathbb{R}$ is compact exactly when it is closed and bounded ([[thm-heine-borel-characterisation-r]]).

## Counterexample

**Proof technique:** direct.

1.1 Each $V_k$ is an open subset of $\mathbb{R}$ by [L2], and $\mathcal{U}$ covers $(0,1)$: given $x$ with $0 < x < 1$, [L3] supplies a natural $n \ge 1$ with $1/n < x$, so $x \in V_n$. Hence $\mathcal{U}$ is an open cover of $(0,1)$. [L1, L2, L3, L4]

1.2 $(0,1)$ is nonempty, since $1 \cdot 2^{-1}$ satisfies $0 < 1 \cdot 2^{-1} < 1$ by [L6]. [L6]

1.3 $(0,1)$ is not closed: $0 \notin (0,1)$, and for a real $\varepsilon > 0$ the point $t := \min\{\varepsilon, 1\} \cdot 2^{-1}$ is positive, satisfies $t \le 1 \cdot 2^{-1} < 1$ and $|t - 0| = t \le \varepsilon \cdot 2^{-1} < \varepsilon$ by [L5] and [L6], so $t \in N_\varepsilon(0) \cap (0,1)$; hence no neighbourhood of $0$ lies in the complement of $(0,1)$ and that complement is not open. [L2, L5, L6]

2.1 No finite subfamily of $\mathcal{U}$ covers $(0,1)$: the empty subfamily fails by step 1.2, and a nonempty finite subfamily is $\{V_{k_0}, \dots, V_{k_p}\}$ with each $k_i \ge 1$; put $K := \max\{k_0, \dots, k_p\}$ by [L5], one of the $k_i$, so $K \ge 1$. Since $k_i \le K$ gives $1/K \le 1/k_i$ by [L4], each $V_{k_i}$ is contained in $V_K = (1/K, 1)$, so the union of the subfamily lies in $V_K$. The point $z := 1/(K+1)$ satisfies $0 < z \le 1 \cdot 2^{-1} < 1$ by [L4] and [L6], since $K + 1 \ge 2$, so $z \in (0,1)$; and $z \le 1/K$ by [L4], so $1/K < z$ fails and $z \notin V_K$. Thus $z$ is uncovered. [step 1.2, L1, L4, L5, L6]

3.1 The family $\mathcal{U}$ is therefore an open cover of $(0,1)$ with no finite subcover, so $(0,1)$ is not compact and the claim [A1] is refuted. This is consistent with [L7]: $(0,1)$ is bounded but not closed by step 1.3, so [L7] predicts exactly this failure. [step 1.1, step 1.3, step 2.1, A1, L1, L7] ∎

## Remarks

- **The cover creeps up on the missing endpoint.** Every member of
  $\mathcal{U}$ stops short of $0$, and the whole family reaches every point of
  $(0,1)$ only because the reciprocals $1/k$ get arbitrarily small
  ([[cor-archimedean-reciprocal]]). A finite subfamily stops at the largest of
  its indices $K$ and therefore misses every point of $(0,1)$ that is at most
  $1/K$.

- **The empty member is not a defect.** $V_1 = (1,1)$ is empty because
  $1/1 = 1$; a family of open sets is a cover as long as its union contains the
  set, and an empty member contributes nothing either way. Writing the family
  from $k = 2$ instead would change nothing in the argument.

- **The closed interval behaves differently, and that is the whole point.**
  $[0,1]$ is compact by [[thm-heine-borel-r]], and the analogous family
  $\{(1/k, 1)\}$ is not even a cover of it, since it misses both $0$ and $1$.
  The endpoint that the cover above exploits is $0$, which $(0,1)$ omits and
  $[0,1]$ contains.
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

### `def-bounded-set`

````markdown
---
id: def-bounded-set
kind: definition
title: "Lower bound, bounded below, bounded set"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-complete-ordered-field]
justified_by: []
aliases: []
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
    - title: "Upper and lower bounds (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Upper_and_lower_bounds"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ denotes the complete ordered field
([[def-complete-ordered-field]]) and $S \subseteq \mathbb{R}$ is a subset of it.

The notions **upper bound** and **bounded above** are already fixed by
[[def-complete-ordered-field]] and are only recalled here, never redefined:
$u \in \mathbb{R}$ is an *upper bound* of $S$ if $s \le u$ for all $s \in S$, and
$S$ is *bounded above* if it has at least one upper bound. The dual notions are:

- $\ell \in \mathbb{R}$ is a **lower bound** of $S$ if $\ell \le s$ for all $s \in S$.
- $S$ is **bounded below** if it has at least one lower bound.
- $S$ is **bounded** if it is both bounded above and bounded below, that is, if
  there are $\ell, u \in \mathbb{R}$ with $\ell \le s \le u$ for every $s \in S$.

## Remarks

- A bound is an element of $\mathbb{R}$ and is not required to lie in $S$. A
  bound that does lie in $S$ is a maximum or a minimum ([[def-max-min]]), and
  that is a strictly stronger condition ([[fs-sup-belongs-to-set]]).
- Bounds come in half-lines: if $\ell$ is a lower bound of $S$ then so is every
  $\ell'' \le \ell$, and if $u$ is an upper bound then so is every $u'' \ge u$.
  Consequently a set that has one bound of a given kind has infinitely many, and
  the interesting question is whether the collection of them has a best element,
  which is what a supremum ([[def-complete-ordered-field]]) or an infimum
  ([[def-infimum]]) is.
- Bounded above and bounded below are independent conditions. The set
  $A = \{\, n \cdot 1_{\mathbb{R}} : n \ge 1 \,\}$ of canonical naturals of
  $\mathbb{R}$ is bounded below by $0$ ([[lem-of-naturals-positive]]) and is not
  bounded above ([[thm-of-archimedean]]); its reflection $-A$ is bounded above
  and not bounded below ([[lem-reflection]]).
- The empty set is bounded, and vacuously so: every real number is both an upper
  bound and a lower bound of $\emptyset$, since the defining condition quantifies
  over no elements. Having bounds is therefore much weaker than having a least
  upper bound or a greatest lower bound ([[fs-every-set-has-sup]]).
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

### `def-integers`

````markdown
---
id: def-integers
kind: definition
title: "The integers as equivalence classes of pairs of naturals"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-natural-numbers, def-nat-addition]
justified_by: [lem-int-equivalence]
aliases: []
landmark: true
short: "ℤ"
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://archive.org/details/foundationsofana0000land"
    - title: "Integer — construction from pairs of naturals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Integer"
pipeline_run: null
---

## Definition

On the set $\mathbb{N} \times \mathbb{N}$ of pairs of natural numbers, define

$$(a,b) \sim (c,d) \iff a + d = b + c.$$

This is an equivalence relation ([[lem-int-equivalence]]). The **integers** are
the quotient

$$\mathbb{Z} := (\mathbb{N} \times \mathbb{N}) / \sim,$$

and we write $[(a,b)]$ for the equivalence class of $(a,b)$.

## Remarks

- The pair $(a,b)$ encodes the formal difference $a - b$; the defining relation
  $a + d = b + c$ is the equation "$a - b = c - d$" restated using only
  addition, which is all $\mathbb{N}$ has.
- $\mathbb{N}$ and its arithmetic (commutativity, associativity,
  distributivity, cancellation of addition, the order) are taken as given
  background throughout this construction.
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

### `def-max-min`

````markdown
---
id: def-max-min
kind: definition
title: "Maximum and minimum of a set"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-complete-ordered-field, def-ordered-field]
justified_by: []
aliases: []
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
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "David H. Ernst, An Introduction to Proof via Inquiry-Based Learning, Section 5.1"
      url: "https://math.libretexts.org/Bookshelves/Mathematical_Logic_and_Proof/An_Introduction_to_Proof_via_Inquiry-Based_Learning_%28Ernst%29/05%253A_New_Page/5.01%253A_New_Page"
pipeline_run: null
---

## Definition

Let $S \subseteq \mathbb{R}$ and $m \in \mathbb{R}$.

- $m$ is a **maximum** (or *greatest element*) of $S$ if $m \in S$ and $s \le m$
  for every $s \in S$.
- $m$ is a **minimum** (or *least element*) of $S$ if $m \in S$ and $m \le s$
  for every $s \in S$.

A set has at most one maximum: if $m_1$ and $m_2$ are both maxima then
$m_1 \in S$ gives $m_1 \le m_2$ and $m_2 \in S$ gives $m_2 \le m_1$, so
$m_1 = m_2$ by antisymmetry of the order, which is immediate from the trichotomy
axiom of an ordered field ([[def-ordered-field]], [[def-complete-ordered-field]]).
The same argument applies to minima, so we may write $\max S$ and $\min S$.

## Remarks

- A maximum is precisely an upper bound of $S$ ([[def-complete-ordered-field]])
  that happens to lie in $S$; a minimum is a lower bound of $S$
  ([[def-bounded-set]]) that lies in $S$. In particular a set with a maximum is
  bounded above and a set with a minimum is bounded below.
- The empty set has neither a maximum nor a minimum, because the requirement
  $m \in S$ cannot be met.
- The membership requirement $m \in S$ is exactly what separates a maximum from a
  supremum, and it is the theme of this page. A supremum is a bound on the set
  and is not asked to belong to it; a maximum is an element of the set. The two
  agree exactly when the supremum happens to be attained ([[lem-max-is-sup]]),
  and they genuinely differ in general ([[fs-sup-belongs-to-set]]).
- Every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum
  ([[lem-finite-set-has-max]]), which is what licenses the notation
  $\max\{a_1, \dots, a_n\}$. Infinite sets need not: the failure of attainment is
  an infinitary phenomenon.
````

### `def-neighbourhood-r`

````markdown
---
id: def-neighbourhood-r
kind: definition
title: "The $\\varepsilon$-neighbourhood and the punctured $\\varepsilon$-neighbourhood of a point of $\\mathbb{R}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-real-order, def-interval, lem-of-abs-value, def-complete-ordered-field, def-ordered-field, def-abs-value, lem-of-triangle-inequality]
justified_by: []
aliases: []
landmark: false
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
    - title: "Neighbourhood (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Neighbourhood_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18(a))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.1 and §1.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Throughout, $\mathbb{R}$ is the complete ordered field
([[def-complete-ordered-field]], [[def-ordered-field]]) with its order
([[def-real-order]]) and its absolute value ([[def-abs-value]]).

Let $x \in \mathbb{R}$ and let $\varepsilon \in \mathbb{R}$ with
$\varepsilon > 0$. The **$\varepsilon$-neighbourhood of $x$** is

$$N_\varepsilon(x) \;:=\; \{\, y \in \mathbb{R} : |y - x| < \varepsilon \,\},$$

and the **punctured $\varepsilon$-neighbourhood of $x$** is

$$N^{*}_\varepsilon(x) \;:=\; N_\varepsilon(x) \setminus \{x\} \;=\; \{\, y \in \mathbb{R} : 0 < |y - x| < \varepsilon \,\}.$$

The two descriptions of $N^{*}_\varepsilon(x)$ agree because $|y - x| = 0$ holds
exactly when $y = x$ ([[lem-of-abs-value]]).

**A neighbourhood is an open interval.** For every $x$ and every
$\varepsilon > 0$,

$$N_\varepsilon(x) \;=\; (x - \varepsilon,\ x + \varepsilon),$$

the interval of [[def-interval]]. Indeed [[lem-of-abs-value]] gives, for
$\varepsilon > 0$, the equivalence $|y - x| < \varepsilon \iff -\varepsilon <
y - x < \varepsilon$, and adding $x$ throughout turns the right-hand side into
$x - \varepsilon < y < x + \varepsilon$ ([[def-ordered-field]]).

**The centre lies in its own neighbourhoods.** $x \in N_\varepsilon(x)$, since
$|x - x| = |0| = 0 < \varepsilon$ ([[lem-of-abs-value]]).

**Punctured neighbourhoods are never empty.** The element
$y := x + \varepsilon/2$ satisfies $|y - x| = \varepsilon/2$, which is
$> 0$ and $< \varepsilon$, so $y \in N^{*}_\varepsilon(x)$
([[lem-of-abs-value]], [[def-ordered-field]]).

**Monotonicity in the radius.** If $0 < \delta \le \varepsilon$ then
$N_\delta(x) \subseteq N_\varepsilon(x)$, because $|y - x| < \delta \le
\varepsilon$ ([[def-ordered-field]]).

**Nesting at an interior point.** If $y \in N_\varepsilon(x)$ and
$0 < \delta \le \varepsilon - |y - x|$, then

$$N_\delta(y) \;\subseteq\; N_\varepsilon(x).$$

Indeed for $z \in N_\delta(y)$ the triangle inequality
([[lem-of-triangle-inequality]]) gives
$|z - x| = |(z - y) + (y - x)| \le |z - y| + |y - x| < \delta + |y - x| \le
\varepsilon$. Note that $\varepsilon - |y - x| > 0$ precisely because
$y \in N_\varepsilon(x)$, so such a $\delta$ always exists.

## Remarks

- **The radius is a real number, not a rational.** Nothing on this page tests a
  condition against rational radii only. That convention belongs to
  [[def-real-limit]], where the quantifier is over rational $\varepsilon$ and
  the passage between the rational and the real form is the sanctioned remark of
  [[def-sequence]]. Here $\varepsilon$ ranges over the positive reals
  throughout, and every statement above is proved for an arbitrary positive
  real.

- **Why the punctured version is separated out.** A limit point of a set is a
  point every punctured neighbourhood of which meets the set
  ([[def-limit-point-r]]), and deleting the centre is exactly what stops a point
  of the set from qualifying automatically. The unpunctured condition defines
  the weaker notion of an adherent point, and the difference between the two is
  precisely an isolated point.

- **Nesting is the workhorse.** Almost every openness verification on this page
  has the shape "given $y$ in the set, shrink the radius by the distance
  already travelled", which is the nesting property above. It is recorded here
  once so that no later proof has to redo the triangle inequality in passing.
````

### `def-open-and-closed-in-r`

````markdown
---
id: def-open-and-closed-in-r
kind: definition
title: "Open subset of $\\mathbb{R}$ (every point has a neighbourhood inside it), closed subset (complement open), and clopen"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-neighbourhood-r, def-interval, def-complete-ordered-field, def-ordered-field, def-real-order, lem-finite-set-has-max, def-max-min]
justified_by: []
aliases: []
landmark: true
short: "open, closed, clopen in $\\mathbb{R}$"
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
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Closed set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closed_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $U, F \subseteq \mathbb{R}$, with neighbourhoods as in
[[def-neighbourhood-r]].

- $U$ is **open** when for every $x \in U$ there is a real $\varepsilon > 0$
  with $N_\varepsilon(x) \subseteq U$.
- $F$ is **closed** when its complement $\mathbb{R} \setminus F$ is open.
- A set is **clopen** when it is both open and closed.

The whole of the topology of $\mathbb{R}$ developed on this page rests on this
one definition: closedness is *defined* as openness of the complement, and every
other description of a closed set on this page is a theorem
([[thm-closure-characterisations-r]], [[lem-sequential-characterisation-of-closure-r]]).

**$\varnothing$ and $\mathbb{R}$ are clopen.** The condition defining openness
quantifies over the elements of the set, so it holds vacuously for
$\varnothing$; and for $x \in \mathbb{R}$ one has $N_1(x) \subseteq \mathbb{R}$,
so $\mathbb{R}$ is open. Since each of the two is the complement of the other,
each is also closed.

**Every neighbourhood is open.** Let $y \in N_\varepsilon(x)$ and put
$\delta := \varepsilon - |y - x|$, which is $> 0$ because
$y \in N_\varepsilon(x)$. The nesting property of [[def-neighbourhood-r]] gives
$N_\delta(y) \subseteq N_\varepsilon(x)$. So every point of $N_\varepsilon(x)$
has a neighbourhood inside it.

**The four open forms of [[def-interval]] are open sets.** Let $a, b \in
\mathbb{R}$.

- $(a,b)$: for $x$ with $a < x < b$, both $x - a > 0$ and $b - x > 0$, so
  $\delta := \min\{x - a,\ b - x\}$ is a positive real (the minimum of a
  two-element set of reals exists, [[lem-finite-set-has-max]], [[def-max-min]]).
  If $|y - x| < \delta$ then $y > x - \delta \ge x - (x - a) = a$ and
  $y < x + \delta \le x + (b - x) = b$, so $y \in (a,b)$; hence
  $N_\delta(x) \subseteq (a,b)$.
- $(a,\infty)$: for $x > a$ take $\delta := x - a > 0$; then $|y - x| < \delta$
  gives $y > x - \delta = a$.
- $(-\infty,b)$: for $x < b$ take $\delta := b - x > 0$; then $|y - x| < \delta$
  gives $y < x + \delta = b$.
- $(-\infty,\infty) = \mathbb{R}$: already treated above.

**The four closed forms of [[def-interval]] are closed sets.** In each case the
complement is shown open directly.

- $[a,b]$: if $x \notin [a,b]$ then $x < a$ or $x > b$ by trichotomy
  ([[def-ordered-field]]). If $x < a$, take $\delta := a - x > 0$; every
  $y \in N_\delta(x)$ has $y < x + \delta = a$, hence $y \notin [a,b]$. If
  $x > b$, take $\delta := x - b > 0$; every $y \in N_\delta(x)$ has
  $y > x - \delta = b$, hence $y \notin [a,b]$. So
  $\mathbb{R} \setminus [a,b]$ is open.
- $[a,\infty)$: its complement is $(-\infty,a)$, which is open by the previous
  paragraph.
- $(-\infty,b]$: its complement is $(b,\infty)$, which is open.
- $(-\infty,\infty) = \mathbb{R}$: its complement is $\varnothing$, which is
  open.

## Remarks

- **Open and closed are not opposites, and not exhaustive.** A set may be
  neither: the half-open interval $[0,1)$ is neither open nor closed
  ([[fs-every-set-is-open-or-closed]]). A set may be both: $\varnothing$ and
  $\mathbb{R}$ are clopen. The words are inherited from the interval terminology
  of [[def-interval]], and the agreement between the two usages is exactly the
  two lists verified above: an interval called open there is an open set here,
  and an interval called closed there is a closed set here.

- **A clopen set is a disconnection waiting to happen.** If $A$ is clopen and
  both $A$ and $\mathbb{R} \setminus A$ are nonempty, then each of the two is
  its own closure, so the two are separated in the sense of
  [[def-connected-r]] and $\mathbb{R} = A \cup (\mathbb{R} \setminus A)$ is a
  disconnection. Since $\mathbb{R}$ is order-convex it is connected
  ([[thm-connected-subsets-of-r-are-intervals]]), so no such $A$ exists:
  $\varnothing$ and $\mathbb{R}$ are the only clopen subsets of $\mathbb{R}$.

- **The half-open forms are the ones the two lists omit**, and deliberately so:
  $[a,b)$ and $(a,b]$ with $a < b$ are neither open nor closed as subsets of
  $\mathbb{R}$.

- **The radius depends on the point.** Openness asks for *some* $\varepsilon$
  at each point, and that $\varepsilon$ may shrink to nothing as the point
  approaches the edge of the set, as the computation for $(a,b)$ shows: there
  $\delta = \min\{x - a,\ b - x\}$ tends to $0$ as $x$ tends to either endpoint.
  Asking instead for a single $\varepsilon$ that works simultaneously at every
  point of the set is a strictly stronger condition, and it is not what is
  defined here; nothing on this page uses it.
````

### `def-open-cover-r`

````markdown
---
id: def-open-cover-r
kind: definition
title: "Open cover, subcover, compact subset of $\\mathbb{R}$ (every open cover has a finite subcover), and sequentially compact subset"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-open-and-closed-in-r, def-sequence, def-subsequential-limit, def-real-limit]
justified_by: []
aliases: [def-compact-in-r, def-sequentially-compact-in-r]
landmark: true
short: "open cover, compact, sequentially compact"
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
    - title: "Compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Compact_space"
    - title: "Sequentially compact space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sequentially_compact_space"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.31, 2.32)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Definition

Let $K \subseteq \mathbb{R}$, with open sets as in
[[def-open-and-closed-in-r]].

- An **open cover** of $K$ is a family $\mathcal{U}$ of open subsets of
  $\mathbb{R}$ with $K \subseteq \bigcup \mathcal{U}$.
- A **subcover** of $\mathcal{U}$ is a subfamily $\mathcal{V} \subseteq
  \mathcal{U}$ that is still an open cover of $K$.
- A subfamily $\mathcal{V} \subseteq \mathcal{U}$ is **finite** when
  $\mathcal{V} = \varnothing$ or there are $n \in \mathbb{N}$ and members
  $U_0, \dots, U_n$ of $\mathcal{U}$ with $\mathcal{V} = \{U_0, \dots, U_n\}$;
  repetitions in the list are allowed and harmless.
- $K$ is **compact** when every open cover of $K$ has a finite subcover:
  for every open cover $\mathcal{U}$ of $K$, either $K = \varnothing$ and the
  empty subfamily covers it, or there are $n \in \mathbb{N}$ and
  $U_0, \dots, U_n \in \mathcal{U}$ with
  $$K \subseteq U_0 \cup \dots \cup U_n .$$
- $K$ is **sequentially compact** when every sequence $(x_k)$ of reals with
  $x_k \in K$ for all $k \in \mathbb{N}$ ([[def-sequence]]) has a subsequence
  converging ([[def-real-limit]]) to some point of $K$; equivalently, when every
  such sequence has a subsequential limit ([[def-subsequential-limit]]) that
  lies in $K$.

**Compactness is a property of $K$ alone.** The covering families range over open
subsets of $\mathbb{R}$, not over sets open in some other ambient space, so the
notion defined here is compactness of $K$ as a subset of $\mathbb{R}$. Nothing
below relativises it to a smaller ambient field; where an ordered field other
than $\mathbb{R}$ is meant, as in
[[fs-closed-bounded-compact-without-completeness]], the whole vocabulary is set
up again there for that field.

**$\varnothing$ is compact and sequentially compact.** The empty subfamily covers
it, and there is no sequence with all terms in $\varnothing$, so both conditions
hold vacuously.

## Remarks

- **Why "finite" is spelled out by listing.** A finite subfamily is described
  here as one that can be written $\{U_0, \dots, U_n\}$ with $n \in \mathbb{N}$,
  which is exactly the form every proof on this page produces or consumes: the
  bisection argument of [[thm-heine-borel-r]] produces a one-member list, and
  the arguments of [[lem-compact-implies-closed-and-bounded-r]] consume a list by
  taking a maximum over it ([[lem-finite-set-has-max]]). Since $\mathbb{N}$
  contains $0$, the shortest nonempty list is $\{U_0\}$.

- **The two notions are not defined to be equivalent, and their equivalence is a
  theorem.** For subsets of $\mathbb{R}$ it is
  [[thm-compact-iff-sequentially-compact-r]]; both of its implications run
  through the characterisation of compactness by closed and bounded, and its
  forward implication additionally uses Bolzano-Weierstrass. Neither implication
  is formal.

- **Compactness is not inherited by subsets, but by closed subsets.** A closed
  subset of a compact set is compact, which is immediate from
  [[thm-heine-borel-characterisation-r]] once that is available, whereas
  $(0,1) \subseteq [0,1]$ shows that an arbitrary subset of a compact set need
  not be compact.

- **The empty cover.** If $K \ne \varnothing$ then no open cover of $K$ is
  empty, so the case distinction in the definition of compactness only ever
  matters for $K = \varnothing$; it is written out so that the definition does
  not quietly assume $K$ nonempty.
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

### `def-perfect-set-r`

````markdown
---
id: def-perfect-set-r
kind: definition
title: "Perfect subset of $\\mathbb{R}$: closed with no isolated points"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-limit-point-r, def-open-and-closed-in-r, thm-closure-characterisations-r]
justified_by: []
forward_refs: [cex-closed-set-with-an-isolated-point-is-not-perfect, ex-closed-interval-is-perfect]
aliases: []
landmark: false
short: "perfect set"
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
    - title: "Perfect set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Perfect_set"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Def. 2.18(h))"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "Isolated point (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Isolated_point"
    - title: "A. Erdman, Companion to Real Analysis"
      url: "https://web.pdx.edu/~erdman/CRA/COMPANION_ANALYSIS_pdf.pdf"
pipeline_run: null
---

## Definition

A set $P \subseteq \mathbb{R}$ is **perfect** when

- $P$ is closed ([[def-open-and-closed-in-r]]), and
- $P$ has no isolated points ([[def-limit-point-r]]): no $x \in P$ admits a real
  $\varepsilon > 0$ with $N_\varepsilon(x) \cap P = \{x\}$.

**Equivalently, $P$ is closed and $P \subseteq P'$.** By
[[def-limit-point-r]], a point of $P$ is isolated in $P$ exactly when it is not
a limit point of $P$, so "no point of $P$ is isolated in $P$" says precisely
that every point of $P$ is a limit point of $P$, that is, $P \subseteq P'$.
Combined with the characterisation of closedness as $P' \subseteq P$
([[thm-closure-characterisations-r]]), a perfect set is exactly a set with
$P = P'$, though only the two conditions above are used below.

## Remarks

- **Both conditions are needed and neither implies the other.** The set
  $\{0\} \cup [1,2]$ is closed and has the isolated point $0$, so it is not
  perfect ([[cex-closed-set-with-an-isolated-point-is-not-perfect]]); the open
  interval $(0,1)$ has no isolated points and is not closed, so it is not
  perfect either.

- **$\varnothing$ is perfect**, vacuously: it is closed and has no points at
  all, hence no isolated ones. This is why
  [[thm-perfect-set-uncountable-r]] carries the hypothesis that $P$ is nonempty:
  the empty set is perfect and countable.

- **A nonempty perfect set is forced to be large.** It is uncountable
  ([[thm-perfect-set-uncountable-r]]), and the simplest examples are the
  nondegenerate closed intervals ([[ex-closed-interval-is-perfect]]). A perfect
  set need not contain any interval, the Cantor set being the standard example
  of that; it is not constructed anywhere in this library, and the statement is
  recorded here as orientation only, on the references above.
````

### `lem-finite-set-has-max`

````markdown
---
id: lem-finite-set-has-max
kind: lemma
title: "Every nonempty finite set of reals has a maximum and a minimum"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-max-min, thm-induction-principle, def-nat-addition, def-complete-ordered-field, def-ordered-field]
justified_by: [lem-finite-subsets-listable]
forward_refs: [def-countable]
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Maximum and minimum (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Maximum_and_minimum"
    - title: "Mathematical induction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Mathematical_induction"
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "John K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

For every $n \in \mathbb{N}$ and all $a_0, a_1, \dots, a_n \in \mathbb{R}$, the
set $\{a_0, a_1, \dots, a_n\}$ has a maximum and a minimum ([[def-max-min]]).

What is proved below is exactly the displayed statement, by induction on $n$.

The usual reading, that *every nonempty finite subset of $\mathbb{R}$ has a
maximum and a minimum*, follows once one identifies the nonempty finite subsets
of $\mathbb{R}$ with the sets listable as $\{a_0, \dots, a_n\}$. That
identification is recorded as a stipulation in the Given below, because this page
has no definition of finiteness to prove it against. **It is discharged, not
merely assumed**: [[lem-finite-subsets-listable]] proves that the two
descriptions of a nonempty finite subset of $\mathbb{R}$ agree. That lemma is
recorded in `justified_by` rather than in `deps`, since it is about the sets this
lemma quantifies over and therefore depends on this one. This is what licenses
the notation
$\max\{a_1, \dots, a_n\}$ and $\min\{a_1, \dots, a_n\}$ for finite sets of
**real** numbers from this page onwards.

## Facts & Assumptions

**Given:** Real numbers $a_0, a_1, a_2, \dots$; for $n \in \mathbb{N}$ write $F_n := \{a_0, \dots, a_n\}$, so that $F_{n+1} = F_n \cup \{a_{n+1}\}$. A subset of $\mathbb{R}$ is nonempty and finite exactly when it equals $F_n$ for some $n \in \mathbb{N}$ and some choice of $a_0, \dots, a_n$.

[A1] $P(n)$ denotes the statement: for all $a_0, \dots, a_n \in \mathbb{R}$, the set $F_n$ has a maximum and a minimum.

[L1] Maximum and minimum: $m = \max X$ means $m \in X$ and $x \le m$ for all $x \in X$; $m = \min X$ means $m \in X$ and $m \le x$ for all $x \in X$; each is unique when it exists ([[def-max-min]]).

[L2] Induction principle: if $P(0)$ holds and $P(n)$ implies $P(n+1)$ for every $n \in \mathbb{N}$, then $P(n)$ holds for every $n \in \mathbb{N}$, where $n + 1$ denotes the successor $\sigma(n)$ ([[thm-induction-principle]], [[def-nat-addition]]).

[L3] The order on $\mathbb{R}$ is reflexive, total and transitive: $a \le a$; for all $a, b$ exactly one of $a < b$, $a = b$, $b < a$ holds, so at least one of $a \le b$ and $b \le a$ holds; and $a \le b$ with $b \le c$ gives $a \le c$ ([[def-complete-ordered-field]], [[def-ordered-field]]).

## Proof

**Proof technique:** induction.

1.1 Base case: $F_0 = \{a_0\}$, and $a_0 \in F_0$ with $a_0 \le a_0$ by reflexivity, so $a_0$ is both a maximum and a minimum of $F_0$; hence $P(0)$ holds. [base, A1, L1, L3]

1.2 Inductive hypothesis: fix $n \in \mathbb{N}$ and assume $P(n)$, that is, for all reals $a_0, \dots, a_n$ the set $F_n$ has a maximum and a minimum. [ih, A1]

2.1 Let $a_0, \dots, a_{n+1} \in \mathbb{R}$ be arbitrary; by the inductive hypothesis the set $F_n$ has a maximum $M$ and a minimum $m$, and $F_{n+1} = F_n \cup \{a_{n+1}\}$. [step 1.2, L1]

3.1 By totality at least one of $a_{n+1} \le M$ and $M \le a_{n+1}$ holds. If $a_{n+1} \le M$, then $M \in F_n \subseteq F_{n+1}$, every element of $F_n$ is $\le M$ because $M = \max F_n$, and $a_{n+1} \le M$ as well, so $M$ is a maximum of $F_{n+1}$. If $M \le a_{n+1}$, then $a_{n+1} \in F_{n+1}$, every $x \in F_n$ satisfies $x \le M \le a_{n+1}$ hence $x \le a_{n+1}$ by transitivity, and $a_{n+1} \le a_{n+1}$, so $a_{n+1}$ is a maximum of $F_{n+1}$. Either way $F_{n+1}$ has a maximum. [step 2.1, L1, L3]

3.2 Dually, at least one of $m \le a_{n+1}$ and $a_{n+1} \le m$ holds. If $m \le a_{n+1}$, then $m \in F_{n+1}$ and every element of $F_{n+1}$ is $\ge m$, so $m$ is a minimum of $F_{n+1}$. If $a_{n+1} \le m$, then $a_{n+1} \in F_{n+1}$ and every $x \in F_n$ satisfies $a_{n+1} \le m \le x$ hence $a_{n+1} \le x$ by transitivity, so $a_{n+1}$ is a minimum of $F_{n+1}$. Either way $F_{n+1}$ has a minimum. [step 2.1, L1, L3]

4.1 Since $a_0, \dots, a_{n+1}$ were arbitrary, $F_{n+1}$ has a maximum and a minimum for every such list, that is, $P(n)$ implies $P(n+1)$. [step 3.1, step 3.2, A1]

5.1 The base case and the inductive step give $P(n)$ for every $n \in \mathbb{N}$ by the induction principle; since a nonempty finite subset of $\mathbb{R}$ is exactly a set of the form $F_n$, every nonempty finite subset of $\mathbb{R}$ has both a maximum and a minimum. [step 1.1, step 4.1, given, L2, discharge-induction] ∎

## Remarks

- **Where the stipulation is discharged.** Finiteness itself is defined later, in [[def-countable]], as equinumerosity with a von Neumann natural; with that definition in hand [[lem-finite-subsets-listable]] proves that a subset of $\mathbb{R}$ is nonempty and finite exactly when it is listable as $\{a_0, \dots, a_n\}$, which is the Given below. So nothing on this page rests on an assumption that is never paid for; it is paid for later, and the payment is recorded in `justified_by`.
- **Only the total order is used, never completeness.** The base case needs reflexivity, the inductive step needs totality and transitivity, and the induction itself runs over $\mathbb{N}$. The same induction works in any totally ordered field; what is recorded here is its specialisation to $\mathbb{R}$.
- Nonemptiness is essential: $\emptyset$ is finite and has no maximum ([[def-max-min]]). Finiteness is essential too: $\{x \in \mathbb{R} : 0 < x < 1\}$ is bounded and has no maximum ([[fs-sup-belongs-to-set]]).
- Combined with claim 1 of [[lem-max-is-sup]], this says every nonempty finite subset of $\mathbb{R}$ has a supremum, and that the supremum is attained, because it equals the maximum. The infimum half is *not* part of [[lem-max-is-sup]], which speaks only of maxima and suprema; it follows from the minimum proved here together with the reflection identity $\inf X = -\sup(-X)$ ([[lem-reflection]], [[thm-infimum-property]]).
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

### `lem-of-naturals-positive`

````markdown
---
id: lem-of-naturals-positive
kind: lemma
title: "Canonical naturals are positive and strictly increasing"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-of-one-positive, lem-of-add-order, def-field]
aliases: []
landmark: false
short: "n·1 > 0"
proof_strategy: induction
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
    - title: "Elias Zakon, Mathematical Analysis: Natural Numbers and Induction"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.02%3A_Natural_Numbers._Induction"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field, with field structure as in [[def-field]], and for
$n \ge 1$ let $n \cdot 1_F$ denote the canonical natural number
$\underbrace{1_F + \cdots + 1_F}_{n}$, defined recursively by $1 \cdot 1_F = 1_F$
and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$. Then for every $n \ge 1$:

- $n \cdot 1_F > 0$ and $(n+1) \cdot 1_F > n \cdot 1_F$;
- the map $n \mapsto n \cdot 1_F$ is strictly increasing, hence injective, on $\{1, 2, 3, \dots\}$;
- $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ and $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ for all $m, n \ge 1$.

## Facts & Assumptions

**Given:** An ordered field $F$ whose canonical naturals are defined recursively by $1 \cdot 1_F = 1_F$ and $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, with $0 \cdot 1_F = 0$.

[L1] $0 < 1_F$ in every ordered field ([[cor-of-one-positive]]).

[L2] The order is compatible with addition and positives are closed under addition: $a < b$ implies $a + c < b + c$, and $a > 0$, $b > 0$ imply $a + b > 0$ ([[lem-of-add-order]]).

## Proof

**Proof technique:** induction.

1.1 Base case $n = 1$: by definition $1 \cdot 1_F = 1_F$, and $1_F > 0$. [L1, base]

1.2 Inductive hypothesis: assume $n \cdot 1_F > 0$ for some fixed $n \ge 1$. [ih]

1.3 By the recursion, $(n+1) \cdot 1_F - n \cdot 1_F = 1_F > 0$, so $(n+1) \cdot 1_F > n \cdot 1_F$. [given, L1]

1.4 Additive identity: fix $m$ and induct on $n$; at $n = 1$, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F$ by the recursion, and if $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$ then $(m+n+1) \cdot 1_F = (m+n) \cdot 1_F + 1_F = m \cdot 1_F + n \cdot 1_F + 1_F = m \cdot 1_F + (n+1) \cdot 1_F$. [given, algebra]

2.1 Inductive step: $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$ is a sum of two positives, by the hypothesis and $1_F > 0$, hence $(n+1) \cdot 1_F > 0$. [step 1.2, L1, L2]

2.2 Iterating 1.3, for $m < n$ one has $m \cdot 1_F < n \cdot 1_F$, so $n \mapsto n \cdot 1_F$ is strictly increasing and therefore injective on $\{1, 2, 3, \dots\}$. [step 1.3, L2]

2.3 Multiplicative identity: fix $m$ and induct on $n$; at $n = 1$, $(m \cdot 1) \cdot 1_F = m \cdot 1_F = (m \cdot 1_F)(1 \cdot 1_F)$, and the step $(m(n+1)) \cdot 1_F = (mn + m) \cdot 1_F = (mn) \cdot 1_F + m \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F) + (m \cdot 1_F)(1_F) = (m \cdot 1_F)((n+1) \cdot 1_F)$ uses 1.4 and distributivity. [step 1.4, algebra]

3.1 By induction on 1.1, 1.2, 2.1, $n \cdot 1_F > 0$ for every $n \ge 1$; with the strict increase 2.2 and the identities 1.4, 2.3, every claim holds. [step 2.1, step 2.2, step 1.4, step 2.3, discharge-induction] ∎
````

### `lem-of-q-embeds`

````markdown
---
id: lem-of-q-embeds
kind: lemma
title: "The unique embedding of ℚ into an ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-of-naturals-positive, lem-of-inverse-positive, lem-of-sign-rules, def-field-homomorphism, def-ordered-field, thm-rat-ordered-field]
aliases: []
landmark: false
short: "ℚ embeds"
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://bookstore.ams.org/chel-79"
    - title: "University of Wisconsin Math 521 notes: Real analysis"
      url: "https://people.math.wisc.edu/~jwrobbin/521dir/521.pdf"
pipeline_run: null
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]). There is a unique field
homomorphism $\iota : \mathbb{Q} \to F$ ([[def-field-homomorphism]]). On the
integers it is given by $n \mapsto n \cdot 1_F$ (with $-n \mapsto -(n \cdot 1_F)$
and $0 \mapsto 0$), and on a rational written as $p/q$ with $q \ge 1$ by
$\iota(p/q) = \iota(p)\,(q \cdot 1_F)^{-1}$. Moreover $\iota$ is injective and
order-preserving, so it is an embedding of $\mathbb{Q}$ as an ordered subfield of
$F$, and it is the only field homomorphism $\mathbb{Q} \to F$.

## Facts & Assumptions

**Given:** An ordered field $F$; the field $\mathbb{Q}$ of [[thm-rat-ordered-field]], every element of which is $0$ or $\pm p/q$ with integers $p, q \ge 1$. For an integer $p$ write $\iota(p)$ for $p \cdot 1_F$ if $p \ge 0$ and $-(|p| \cdot 1_F)$ if $p < 0$.

[L1] $\mathbb{Q}$ is an ordered field; a nonzero $p/q$ with $q \ge 1$ is positive exactly when $p \ge 1$ ([[thm-rat-ordered-field]]).

[L2] The canonical naturals satisfy $n \cdot 1_F > 0$ for $n \ge 1$, $n \mapsto n \cdot 1_F$ is injective, $(m+n) \cdot 1_F = m \cdot 1_F + n \cdot 1_F$, and $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ ([[lem-of-naturals-positive]]).

[L3] If $a > 0$ then $a^{-1} > 0$ ([[lem-of-inverse-positive]]).

[L4] Sign rules: a product of positives is positive, and for $c > 0$ one has $a < b$ iff $ac < bc$ ([[lem-of-sign-rules]]).

[L5] A field homomorphism preserves $+$, $\cdot$, and $1$, and hence $0$, negation, and inverses ([[def-field-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Define $\iota$ on the integers by $\iota(n) = n \cdot 1_F$ for $n \ge 0$ and $\iota(-n) = -(n \cdot 1_F)$; by [L2] this is additive and multiplicative on $\mathbb{Z}$ and sends $1 \mapsto 1_F$. [L2]

1.2 For a rational $x = p/q$ with $q \ge 1$ define $\iota(x) = \iota(p)\,(q \cdot 1_F)^{-1}$, which makes sense because $q \cdot 1_F > 0 \ne 0$ has an inverse. [L2]

2.1 Well-defined: if $p/q = p'/q'$ with $q, q' \ge 1$, then $p q' = p' q$ in $\mathbb{Z}$, so [L2] gives $\iota(p)(q' \cdot 1_F) = \iota(p')(q \cdot 1_F)$, and multiplying by the positive $(q \cdot 1_F)^{-1}(q' \cdot 1_F)^{-1}$ yields $\iota(p)(q \cdot 1_F)^{-1} = \iota(p')(q' \cdot 1_F)^{-1}$; thus $\iota(x)$ is independent of the representative. [step 1.1, step 1.2, L2, L3]

2.2 Multiplicativity: for $x = p/q$, $y = r/s$ one has $xy = (pr)/(qs)$, and $\iota(xy) = \iota(pr)((qs) \cdot 1_F)^{-1} = \iota(p)\iota(r)(q \cdot 1_F)^{-1}(s \cdot 1_F)^{-1} = \iota(x)\iota(y)$, using $(mn) \cdot 1_F = (m \cdot 1_F)(n \cdot 1_F)$ and $(uv)^{-1} = u^{-1} v^{-1}$. [step 1.2, L2]

2.3 Additivity: with $x + y = (ps + rq)/(qs)$, $\iota(x+y) = (\iota(p)(s \cdot 1_F) + \iota(r)(q \cdot 1_F))(q \cdot 1_F)^{-1}(s \cdot 1_F)^{-1} = \iota(p)(q \cdot 1_F)^{-1} + \iota(r)(s \cdot 1_F)^{-1} = \iota(x) + \iota(y)$, using the additive and multiplicative identities of [L2]. [step 1.2, L2]

2.4 Positivity: if $x = p/q > 0$ in $\mathbb{Q}$ with $q \ge 1$, then $p \ge 1$ by [L1], so $\iota(p) = p \cdot 1_F > 0$ and $q \cdot 1_F > 0$ by [L2], whence $(q \cdot 1_F)^{-1} > 0$ by [L3] and $\iota(x) = \iota(p)(q \cdot 1_F)^{-1} > 0$ by [L4]. [step 1.2, L1, L2, L3, L4]

2.5 Uniqueness on $\mathbb{Z}$: let $\psi : \mathbb{Q} \to F$ be any field homomorphism; then $\psi(1) = 1_F$, additivity forces $\psi(n) = n \cdot 1_F = \iota(n)$ for $n \ge 1$, and $\psi(0) = 0$, $\psi(-n) = -(n \cdot 1_F)$, so $\psi = \iota$ on $\mathbb{Z}$. [step 1.1, L5]

3.1 Unit: $\iota(1) = \iota(1/1) = \iota(1)(1 \cdot 1_F)^{-1} = 1_F$; hence $\iota$ is a field homomorphism $\mathbb{Q} \to F$. [step 2.2, step 2.3, L2, L5]

3.2 Order: for $x < y$ in $\mathbb{Q}$ we have $y - x > 0$, so $\iota(y) - \iota(x) = \iota(y - x) > 0$ by 2.3 and 2.4, that is $\iota(x) < \iota(y)$; thus $\iota$ is order-preserving. [step 2.3, step 2.4]

4.1 Injectivity: if $x \ne y$ then $x < y$ or $y < x$, and 3.2 forces $\iota(x) \ne \iota(y)$; so $\iota$ is injective, an embedding of ordered fields. [step 3.2]

5.1 Uniqueness on $\mathbb{Q}$: for $p/q \in \mathbb{Q}$, $\psi(p/q) = \psi(p)\psi(q)^{-1} = \iota(p)(q \cdot 1_F)^{-1} = \iota(p/q)$ since $\psi$ preserves products and inverses; hence $\psi = \iota$, so $\iota$ is the unique field homomorphism $\mathbb{Q} \to F$. [step 2.5, step 1.2, L5] ∎
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

### `lem-of-triangle-inequality`

````markdown
---
id: lem-of-triangle-inequality
kind: lemma
title: "The triangle inequality"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-of-abs-value, lem-of-add-order, def-ordered-field]
aliases: []
landmark: true
short: "Triangle ineq."
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
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

Let $F$ be an ordered field ([[def-ordered-field]]) and let $x, y \in F$. Then

$$|x + y| \le |x| + |y|.$$

## Facts & Assumptions

**Given:** An ordered field $F$ and elements $x, y \in F$.

[L1] For every $u \in F$, $-|u| \le u \le |u|$, and $|u|$ equals $u$ or $-u$ ([[lem-of-abs-value]]).

[L2] Order compatible with addition: if $a \le b$ and $c \le d$, then $a + c \le b + d$. [[lem-of-add-order]] states the STRICT forms and only those ($a < b \Rightarrow a + c < b + c$, and $a < b$ with $c < d$ giving $a + c < b + d$); the nonstrict form used here is those two together with the cases $a = b$ and $c = d$, settled by trichotomy, the order being total ([[def-ordered-field]]). Explicitly: if $a < b$ and $c < d$ the second strict form applies; if $a < b$ and $c = d$ the first gives $a + c < b + c = b + d$; if $a = b$ and $c < d$ the first gives $a + c < a + d = b + d$; and if $a = b$ and $c = d$ the two sides are equal.

[L3] Field and order arithmetic: $-(a + b) = -a + (-b)$, and $a \le b \iff -b \le -a$ ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], $-|x| \le x \le |x|$ and $-|y| \le y \le |y|$. [L1]

2.1 Adding the two chains of [step 1.1] with [L2] and using $-(|x| + |y|) = -|x| + (-|y|)$ from [L3] gives $-(|x| + |y|) \le x + y \le |x| + |y|$. [step 1.1, L2, L3]

3.1 By [L1] the value $|x + y|$ equals $x + y$ or $-(x + y)$; both $x + y \le |x| + |y|$ and $-(x + y) \le |x| + |y|$ hold by [step 2.1] and [L3] (the latter from $-(|x| + |y|) \le x + y$), so $|x + y| \le |x| + |y|$. [step 2.1, L1, L3] ∎
````

### `thm-heine-borel-characterisation-r`

````markdown
---
id: thm-heine-borel-characterisation-r
kind: theorem
title: "A subset of $\\mathbb{R}$ is compact if and only if it is closed and bounded"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-heine-borel-r, lem-compact-implies-closed-and-bounded-r, def-open-cover-r, def-interval, def-bounded-set, def-open-and-closed-in-r]
justified_by: []
forward_refs: [cex-unbounded-closed-set-not-compact, cex-closed-bounded-in-q-not-compact]
aliases: []
landmark: true
short: "compact $\\iff$ closed and bounded"
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
    - title: "Heine-Borel theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Heine%E2%80%93Borel_theorem"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Thm 2.41)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.4"
      url: "https://www.jirka.org/ra/"
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
pipeline_run: null
---

## Statement

Let $K \subseteq \mathbb{R}$. Then $K$ is compact ([[def-open-cover-r]]) if and
only if $K$ is closed ([[def-open-and-closed-in-r]]) and bounded
([[def-bounded-set]]).

This is the Heine-Borel theorem in the form used everywhere below. The forward
implication is [[lem-compact-implies-closed-and-bounded-r]] and spends no
completeness, only the Archimedean property and the existence of maxima of
finite sets; the backward implication rests on
[[thm-heine-borel-r]] and therefore on the completeness of $\mathbb{R}$, and the
remarks below record where it fails without completeness.

## Facts & Assumptions

**Given:** A subset $K \subseteq \mathbb{R}$.

[L1] Open cover, finite subfamily and compactness; the empty subfamily covers $\varnothing$ ([[def-open-cover-r]]).

[L2] A compact subset of $\mathbb{R}$ is closed and bounded ([[lem-compact-implies-closed-and-bounded-r]]).

[L3] Every closed bounded interval $[\ell,u]$ with $\ell \le u$ is compact ([[thm-heine-borel-r]]).

[L4] $K$ is closed exactly when $\mathbb{R} \setminus K$ is open ([[def-open-and-closed-in-r]]).

[L5] $K$ is bounded exactly when there are $\ell, u \in \mathbb{R}$ with $\ell \le y \le u$ for every $y \in K$ ([[def-bounded-set]]).

[L6] $[\ell,u] = \{\, z \in \mathbb{R} : \ell \le z \le u \,\}$ ([[def-interval]]).

## Proof

**Proof technique:** direct.

1.1 If $K$ is compact then $K$ is closed and bounded, which is [L2]; this is the forward implication. [L2]

1.2 For the backward implication assume $K$ is closed and bounded. If $K = \varnothing$ then every open cover of $K$ admits the empty subfamily as a finite subcover, so $K$ is compact. [assume-hyp, L1]

1.3 Assume moreover $K \ne \varnothing$; fix $s \in K$ and, by [L5], reals $\ell, u$ with $\ell \le y \le u$ for every $y \in K$. Then $\ell \le s \le u$, so $\ell \le u$, and $K \subseteq [\ell,u]$ by [L6]. [assume-hyp, L5, L6, choose]

2.1 Let $\mathcal{U}$ be an open cover of $K$ and put $\mathcal{W} := \mathcal{U} \cup \{\mathbb{R} \setminus K\}$. Every member of $\mathcal{W}$ is open, since $\mathbb{R} \setminus K$ is open by [L4], and $\mathcal{W}$ covers $[\ell,u]$: a point of $[\ell,u]$ either lies in $K$, hence in some member of $\mathcal{U}$, or lies outside $K$, hence in $\mathbb{R} \setminus K$. [step 1.3, L1, L4]

3.1 By [L3] the interval $[\ell,u]$ is compact, so some finite subfamily $\{W_0, \dots, W_p\}$ of $\mathcal{W}$ covers $[\ell,u]$, where the case of an empty subfamily is possible only when $[\ell,u] = \varnothing$, which is excluded by $\ell \le u$. Put $\mathcal{V} := \{\, W_i : W_i \in \mathcal{U} \,\}$, a finite subfamily of $\mathcal{U}$. Then $K \subseteq \bigcup \mathcal{V}$: a point $y \in K \subseteq [\ell,u]$ lies in some $W_i$, and $W_i$ cannot be a member of $\mathcal{W}$ outside $\mathcal{U}$, because the only such member is $\mathbb{R} \setminus K$ and $y \in K$; so $W_i \in \mathcal{U}$ and $W_i \in \mathcal{V}$. [step 2.1, L1, L3, L6]

4.1 Every open cover of a nonempty closed bounded $K$ therefore has a finite subcover, so such a $K$ is compact; together with the empty case of step 1.2 this proves the backward implication, and step 1.1 is the forward one. [step 1.1, step 1.2, step 3.1, L1] ∎

## Remarks

- **A closed subset of a compact set is compact.** If $C \subseteq K$ with $K$
  compact and $C$ closed, then $C$ is bounded, being a subset of a bounded set,
  and closed by hypothesis, so it is compact by the theorem. The corresponding
  statement for arbitrary subsets is false: $(0,1) \subseteq [0,1]$ is bounded
  and not compact ([[cex-unbounded-closed-set-not-compact]]).

- **Both hypotheses are needed and neither implies the other.**
  [[cex-unbounded-closed-set-not-compact]] exhibits a closed set that is not
  bounded and a bounded set that is not closed, and neither is compact.

- **What the theorem is not.** It characterises compactness *for subsets of
  $\mathbb{R}$*. The two halves are of very different strengths: the forward
  half is elementary and general, while the backward half rests on the
  completeness of $\mathbb{R}$ and fails over $\mathbb{Q}$
  ([[fs-closed-bounded-compact-without-completeness]], witnessed by
  [[cex-closed-bounded-in-q-not-compact]]). Nothing here licenses "closed and
  bounded implies compact" in any other setting.
````

### `thm-of-archimedean`

````markdown
---
id: thm-of-archimedean
kind: theorem
title: "Every complete ordered field is Archimedean"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-complete-ordered-field, lem-of-naturals-positive, cor-of-one-positive, def-ordered-field]
aliases: []
landmark: true
short: "complete ⇒ Archimedean"
proof_strategy: contradiction
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
    - title: "Neil Donaldson, Math 140A notes: Completeness and the Archimedean property"
      url: "https://www.math.uci.edu/~ndonalds/math140a/1complete.html"
pipeline_run: null
---

## Statement

Every complete ordered field $F$ ([[def-complete-ordered-field]]) is Archimedean:
for every $x \in F$ there is a natural number $n \ge 1$ with $x < n \cdot 1_F$,
where $n \cdot 1_F$ is the canonical natural of the ordered field $F$
([[def-ordered-field]]). Equivalently, the canonical naturals are cofinal in $F$.

## Facts & Assumptions

**Given:** A complete ordered field $F$; write $A = \{\, n \cdot 1_F : n \ge 1 \,\}$ for the set of its canonical naturals.

[L1] Least-upper-bound property: every nonempty $S \subseteq F$ that is bounded above has a least upper bound $\sup S \in F$ ([[def-complete-ordered-field]]).

[L2] Each canonical natural satisfies $n \cdot 1_F > 0$, one has $(n+1) \cdot 1_F = n \cdot 1_F + 1_F$, and $(n+1) \cdot 1_F > n \cdot 1_F$ ([[lem-of-naturals-positive]]).

[L3] $0 < 1_F$ ([[cor-of-one-positive]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $F$ is not Archimedean: there is some $x \in F$ with $n \cdot 1_F \le x$ for all $n \ge 1$, that is, $x$ is an upper bound of $A$. [assume-contra]

2.1 The set $A$ is nonempty, since $1 \cdot 1_F = 1_F \in A$, and it is bounded above by $x$. [step 1.1, L2]

3.1 By the least-upper-bound property, $A$ has a least upper bound $s = \sup A \in F$. [step 2.1, L1]

4.1 Since $1_F > 0$, we have $s - 1_F < s$; as $s$ is the least upper bound, $s - 1_F$ is not an upper bound of $A$. [step 3.1, L3]

5.1 Hence there is some $m \ge 1$ with $m \cdot 1_F > s - 1_F$. [step 4.1]

6.1 Adding $1_F$ to both sides, $(m+1) \cdot 1_F = m \cdot 1_F + 1_F > s$. [step 5.1, L2]

7.1 But $(m+1) \cdot 1_F \in A$, so $(m+1) \cdot 1_F \le s$ because $s$ is an upper bound of $A$, contradicting 6.1. [step 6.1, step 3.1, L2]

8.1 The assumption is therefore untenable, so $F$ is Archimedean. [step 7.1, discharge-contradiction] ∎
````

