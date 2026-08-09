# Audit proof-refuter brief — Wave 7, step A6

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

- critical risk (10): 14 declared dependencies; 17 cited facts; 9 numbered proof steps; boundary-sensitive language; quotient or equivalence-class construction

## Target item — `ex-field-ordered-in-two-ways`

Normalized current SHA-256: `823471e3494ff0111fd75db55b6578bcc452a47f11c5779861eb1d7f9df28316`

The complete current item follows, including frontmatter:

````markdown
---
id: ex-field-ordered-in-two-ways
kind: example
title: "$\\mathbb{Q}(\\sqrt{2})$ carries exactly two distinct field orders, exchanged by the conjugation $\\sqrt{2} \\mapsto -\\sqrt{2}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-ordered-field, def-field, def-rationals, thm-of-square-roots, fs-sqrt2-rational, lem-of-square-positive, cor-of-one-positive, lem-of-sign-rules, lem-of-inverse-positive, lem-of-add-order, lem-of-naturals-positive, lem-of-q-embeds, def-complete-ordered-field, thm-reals-ordered-field]
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
    - title: "Ordered field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordered_field"
    - title: "Quadratic field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quadratic_field"
    - title: "Formally real field (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Formally_real_field"
pipeline_run: null
---

## Example

Let $u := \sqrt 2 \in \mathbb{R}$ ([[thm-of-square-roots]]) and

$$F \;:=\; \mathbb{Q}(\sqrt 2) \;=\; \{\, a + bu : a, b \in \mathbb{Q} \,\} \;\subseteq\; \mathbb{R}.$$

Then $F$ is a field, every element of it is $a + bu$ for exactly one pair
$(a,b)$ of rationals, and the **conjugation**
$\sigma(a + bu) := a - bu$ is a field automorphism of $F$.

$F$ carries **exactly two** positive cones ([[def-ordered-field]]):

$$P_1 \;=\; \{\, x \in F : x > 0 \text{ in } \mathbb{R} \,\}, \qquad P_2 \;=\; \{\, x \in F : \sigma(x) \in P_1 \,\},$$

and $\sigma$ exchanges them. They differ: $u \in P_1$ and $u \notin P_2$. In the
second order $\sqrt 2$ is *negative*, and indeed lies below every positive
rational, while $-\sqrt 2$ is positive; the rationals themselves are ordered the
same way in both.

The point of the example is that an order is extra structure on a field, not a
property of it: the same field is an ordered field in two inequivalent ways, and
no algebraic property of $F$ can distinguish $u$ from $-u$.

## Facts & Assumptions

**Given:** $\mathbb{R}$ with its order, $u = \sqrt 2$, the set $F$ above, and the map $\sigma(a+bu) = a - bu$.

[L1] $\mathbb{R}$ is a complete ordered field and every $a \ge 0$ in it has a unique $s \ge 0$ with $s^2 = a$; in particular $u > 0$ and $u^2 = 2$ ([[thm-of-square-roots]], [[def-complete-ordered-field]], [[thm-reals-ordered-field]]).

[L2] No rational squares to $2$ ([[fs-sqrt2-rational]], [[def-rationals]]); in particular $u \notin \mathbb{Q}$.

[L3] Field axioms and arithmetic ([[def-field]]); a positive cone is a subset $P$ satisfying trichotomy, exactly one of $x \in P$, $x = 0$, $-x \in P$, and closure under addition and multiplication, and $x < y$ means $y - x \in P$ ([[def-ordered-field]]).

[L4] In any ordered field: $0 < 1$ ([[cor-of-one-positive]]); $n \cdot 1 > 0$ for $n \ge 1$ ([[lem-of-naturals-positive]]); a nonzero square is positive ([[lem-of-square-positive]]); a positive element has a positive inverse ([[lem-of-inverse-positive]]); a product of two positives or of two negatives is positive and a product of a positive and a negative is negative ([[lem-of-sign-rules]]); sums of positives are positive and adding a constant preserves the order ([[lem-of-add-order]]). In each clause above, [[lem-of-sign-rules]] and [[lem-of-add-order]] state the STRICT forms and only those; the nonstrict forms used below are those together with the equality cases, which trichotomy settles, the order being total ([[def-ordered-field]]).

[L5] $\mathbb{Q}$ embeds in any ordered field as $\{(p \cdot 1)(q\cdot 1)^{-1}\}$, compatibly with the field operations ([[lem-of-q-embeds]]).

## Verification

**Proof technique:** direct.

1.1 $u \in \mathbb{R}$ satisfies $u > 0$ and $u^2 = 2$, and $u \notin \mathbb{Q}$. [L1, L2]

1.2 In every ordered field the positivity of a rational is forced: $n \cdot 1 > 0$ for $n \ge 1$, so for positive integers $p, q$ the element $(p\cdot 1)(q\cdot 1)^{-1}$ is positive, and hence a rational is in the positive cone exactly when it is positive in the usual sense. [L4, L5]

2.1 $F$ is a subfield of $\mathbb{R}$: it contains $0$ and $1$, is closed under subtraction, and $(a+bu)(c+du) = (ac + 2bd) + (ad + bc)u$ gives closure under multiplication; for $a + bu \ne 0$ one has $a^2 - 2b^2 \ne 0$, since $b \ne 0$ would otherwise give $(a/b)^2 = 2$ against [L2] while $b = 0$ forces $a \ne 0$, and then $(a+bu)^{-1} = (a - bu)(a^2-2b^2)^{-1} \in F$. [step 1.1, L2, L3]

2.2 The representation is unique: $a + bu = a' + b'u$ with $b \ne b'$ would give $u = (a-a')(b'-b)^{-1} \in \mathbb{Q}$, against step 1.1; so $b = b'$ and then $a = a'$. [step 1.1, L2, L3]

3.1 $\sigma$ is therefore a well-defined map $F \to F$, and it is a field automorphism: it is additive by inspection, $\sigma(1) = 1$, and $\sigma(a+bu)\sigma(c+du) = (ac+2bd) - (ad+bc)u = \sigma\big((a+bu)(c+du)\big)$; moreover $\sigma \circ \sigma$ is the identity, so $\sigma$ is a bijection. [step 2.1, step 2.2, L3]

3.2 Let $Q$ be any positive cone on $F$. Since $u \ne 0$, exactly one of $u \in Q$, $-u \in Q$ holds. [step 2.1, L3]

4.1 $Q$ is determined by that choice. Suppose $u \in Q$ (the other case is the same with $u$ replaced by $-u$, which also squares to $2$). Let $x = a + bu \ne 0$. If $b = 0$ then $x$ is a nonzero rational and step 1.2 decides it. If $b \ne 0$ then $x = b(u + c)$ with $c := a/b \in \mathbb{Q}$, and by [L4] the membership of $x$ is decided by those of $b$ and of $u + c$; for $c \ge 0$ one has $u + c \in Q$, while for $c < 0$, writing $e := -c > 0$, the identity $(u-e)(u+e) = 2 - e^2$ with $u + e \in Q$ and $2 - e^2 \ne 0$ shows that $u - e \in Q$ exactly when $2 - e^2 > 0$, a condition on a rational decided by step 1.2. So $Q$ is uniquely determined, and there are at most two positive cones on $F$. [step 1.2, step 2.1, step 3.2, L2, L3, L4]

4.2 Both occur. $P_1$ is a positive cone on $F$, being the restriction to the subfield $F$ of the positive cone of $\mathbb{R}$; and $P_2 = \sigma^{-1}(P_1)$ is one because $\sigma$ is a field automorphism, so trichotomy and closure transfer along it. They are distinct: $u \in P_1$ by step 1.1, whereas $\sigma(u) = -u \notin P_1$, so $u \notin P_2$. [step 1.1, step 2.1, step 3.1, L3]

5.1 Hence $F$ carries exactly two positive cones, $P_1$ and $P_2$, and since $\sigma$ is an involution, $P_2 = \sigma(P_1)$ and $P_1 = \sigma(P_2)$: the conjugation exchanges the two orders. [step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **Two orders, one field, and no way to tell them apart algebraically.** The
  automorphism $\sigma$ carries $(F,P_1)$ isomorphically onto $(F,P_2)$ as an
  *ordered* field, so the two ordered fields are isomorphic even though the two
  orders on the underlying $F$ are different subsets. That is the precise sense
  in which an order is not determined by the field: what is determined here is
  the order up to isomorphism, not the order itself.

- **Contrast with $\mathbb{Q}$ and with $\mathbb{R}$**, each of which carries
  exactly one order. For $\mathbb{Q}$ this is step 1.2: every rational is a
  quotient of canonical naturals, so its sign is forced. For $\mathbb{R}$ it is
  [[thm-of-square-roots]]: the positives are exactly the nonzero squares, and
  the squares are fixed by the field structure alone. $\mathbb{Q}(\sqrt 2)$ sits
  between the two and has room for exactly two, because $2$ acquires a square
  root while $F$ still has elements that are not squares.

- **What decides an order on $F$ is a single bit**, the sign of $u$, after which
  every other comparison reduces to a comparison of rationals. That is also
  why there are exactly two and not more: the sign of $u$ is the only free
  choice, and both of its values are realised.
````

## Wave 7 provenance row for the target

```json
{
  "id": "ex-field-ordered-in-two-ways",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "established-knowledge",
  "urls": [],
  "rationale": "ESCALATED TO ALPHA. The two orders on Q(sqrt(2)) obtained from the two real embeddings are a standard algebraic example, and the local proof also shows these are the only two. Searches surfaced informal exact discussions but no reputable source among the allowed classes for the full exact package; this is established mathematics, not an invented construction. ALPHA CONCURRENCE: The current construction is the canonical quadratic-field ordering argument: the two real embeddings send sqrt(2) to its two conjugates, and every field order is fixed by the sign of that generator. This is standard established ordered-field mathematics, merely packaged locally.",
  "alpha_concurred": true,
  "at": "2026-08-08",
  "ledger": "wave7-real-analysis-completeness-limits.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "thm-of-square-roots",
      "source_section": "Statement",
      "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]). Then every\n$a \\in F$ with $a \\ge 0$ has a **unique** $s \\in F$ with $s \\ge 0$ and $s^2 = a$;\nwe write $s = \\sqrt{a}$. Consequently the positive elements of $F$ are exactly the\nnonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \\neq 0$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.\n\n- $u \\in F$ is an **upper bound** of $S$ if $s \\le u$ for all $s \\in S$; $S$ is\n  **bounded above** if it has an upper bound.\n- $u \\in F$ is a **least upper bound** (or **supremum**, $\\sup S$) of $S$ if $u$\n  is an upper bound of $S$ and $u \\le u'$ for every upper bound $u'$ of $S$.\n\n$F$ is a **complete ordered field** (equivalently, $F$ has the\n**least-upper-bound property**, or is **Dedekind complete**) if every nonempty\n$S \\subseteq F$ that is bounded above has a least upper bound in $F$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-reals-ordered-field",
      "source_section": "Statement",
      "quote": "The relation of [[def-real-order]] is well defined and makes $\\mathbb{R}$\n([[thm-reals-field]]) a totally ordered field.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "fs-sqrt2-rational",
      "source_section": "Statement",
      "quote": "**False claim:** there exists $x \\in \\mathbb{Q}$ with $x^2 = 2$.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "4.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-rationals",
      "source_section": "Definition",
      "quote": "On the set of pairs $(a,b)$ with $a, b \\in \\mathbb{Z}$ and $b \\ne 0$, define\n\n$$(a,b) \\sim (c,d) \\iff ad = cb \\quad \\text{in } \\mathbb{Z}.$$\n\nThis is an equivalence relation ([[lem-rat-equivalence]]). The **rationals** are\nthe quotient $\\mathbb{Q}$, and $[(a,b)]$ is written $a/b$.",
      "uses": [
        "1.1",
        "2.1",
        "2.2",
        "4.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-field",
      "source_section": "Definition",
      "quote": "A **field** is a set $F$ equipped with two binary operations $+$ (addition) and\n$\\cdot$ (multiplication) and two distinguished elements $0 \\ne 1$ of $F$,\nsatisfying:\n\n- **(A)** $(F, +)$ is an abelian group with identity $0$: addition is\n  associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an\n  additive inverse $-x$ with $x + (-x) = 0$.\n- **(M)** Multiplication is associative and commutative **on all of $F$**, and\n  $x \\cdot 1 = x$ for every $x \\in F$; moreover $(F \\setminus \\{0\\}, \\cdot)$ is an\n  abelian group with identity $1$, so every $x \\ne 0$ has a multiplicative inverse\n  $x^{-1}$ with $x \\cdot x^{-1} = 1$.\n- **(D)** Multiplication distributes over addition: $x \\cdot (y + z) = x\\cdot y + x\\cdot z$.\n\nWe write $x - y := x + (-y)$ and $x/y := x \\cdot y^{-1}$ (for $y \\ne 0$), and\nabbreviate $x \\cdot y$ as $xy$.",
      "uses": [
        "2.1",
        "2.2",
        "3.1",
        "3.2",
        "4.1",
        "4.2"
      ]
    },
    {
      "fact": "L3",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "2.1",
        "2.2",
        "3.1",
        "3.2",
        "4.1",
        "4.2"
      ]
    },
    {
      "fact": "L4",
      "source": "cor-of-one-positive",
      "source_section": "Statement",
      "quote": "In any ordered field $F$ with positive cone $P$, the multiplicative identity\nsatisfies $0 < 1$; that is, $1 \\in P$.",
      "uses": [
        "1.2",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-naturals-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field, with field structure as in [[def-field]], and for\n$n \\ge 1$ let $n \\cdot 1_F$ denote the canonical natural number\n$\\underbrace{1_F + \\cdots + 1_F}_{n}$, defined recursively by $1 \\cdot 1_F = 1_F$\nand $(n+1) \\cdot 1_F = n \\cdot 1_F + 1_F$. Then for every $n \\ge 1$:\n\n- $n \\cdot 1_F > 0$ and $(n+1) \\cdot 1_F > n \\cdot 1_F$;\n- the map $n \\mapsto n \\cdot 1_F$ is strictly increasing, hence injective, on $\\{1, 2, 3, \\dots\\}$;\n- $(m+n) \\cdot 1_F = m \\cdot 1_F + n \\cdot 1_F$ and $(mn) \\cdot 1_F = (m \\cdot 1_F)(n \\cdot 1_F)$ for all $m, n \\ge 1$.",
      "uses": [
        "1.2",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-square-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$. For\nevery $a \\in F$ with $a \\neq 0$ we have $a^2 > 0$, where $a^2 = a \\cdot a$. In\nparticular, every nonzero square is positive.",
      "uses": [
        "1.2",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-inverse-positive",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b \\in F$.\n\n1. If $a > 0$ then $a^{-1} > 0$.\n2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.",
      "uses": [
        "1.2",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-sign-rules",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c \\in F$.\n\n1. If $a > 0$ and $b > 0$ then $ab > 0$.\n2. If $a > 0$ and $b < 0$ then $ab < 0$.\n3. If $a < 0$ and $b < 0$ then $ab > 0$.\n4. If $c > 0$ then $a < b \\iff ac < bc$.\n5. If $c < 0$ then $a < b \\iff bc < ac$ (multiplication by a negative reverses order).",
      "uses": [
        "1.2",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "lem-of-add-order",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and\nlet $a, b, c, d \\in F$.\n\n1. **Translation invariance.** If $a < b$ then $a + c < b + c$.\n2. **Adding inequalities.** If $a < b$ and $c < d$ then $a + c < b + d$.",
      "uses": [
        "1.2",
        "4.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-ordered-field",
      "source_section": "Definition",
      "quote": "An **ordered field** is a field $F$ ([[def-field]]) together with a subset\n$P \\subseteq F$, the set of **positive** elements (the *positive cone*),\nsatisfying:\n\n- **(O1) Trichotomy.** For each $x \\in F$, exactly one of the following holds:\n  $x \\in P$, or $x = 0$, or $-x \\in P$.\n- **(O2) Closure.** If $x, y \\in P$ then $x + y \\in P$ and $x \\cdot y \\in P$.\n\nWe write $x > 0$ for $x \\in P$ (read \"$x$ is positive\"), and define the order by\n\n$$a < b \\;:\\Longleftrightarrow\\; b - a \\in P, \\qquad a \\le b \\;:\\Longleftrightarrow\\; a < b \\text{ or } a = b.$$\n\nThus $a > b$ means $b < a$, and $a \\ge b$ means $b \\le a$. An element $x$ with\n$-x \\in P$ (equivalently $x < 0$) is called **negative**.",
      "uses": [
        "1.2",
        "4.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-of-q-embeds",
      "source_section": "Statement",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]). There is a unique field\nhomomorphism $\\iota : \\mathbb{Q} \\to F$ ([[def-field-homomorphism]]). On the\nintegers it is given by $n \\mapsto n \\cdot 1_F$ (with $-n \\mapsto -(n \\cdot 1_F)$\nand $0 \\mapsto 0$), and on a rational written as $p/q$ with $q \\ge 1$ by\n$\\iota(p/q) = \\iota(p)\\,(q \\cdot 1_F)^{-1}$. Moreover $\\iota$ is injective and\norder-preserving, so it is an embedding of $\\mathbb{Q}$ as an ordered subfield of\n$F$, and it is the only field homomorphism $\\mathbb{Q} \\to F$.",
      "uses": [
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1-1",
      "claim": "$u \\in \\mathbb{R}$ satisfies $u > 0$ and $u^2 = 2$, and $u \\notin \\mathbb{Q}$.",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2"
      ]
    },
    {
      "id": "step-1-2",
      "claim": "In every ordered field the positivity of a rational is forced: $n \\cdot 1 > 0$ for $n \\ge 1$, so for positive integers $p, q$ the element $(p\\cdot 1)(q\\cdot 1)^{-1}$ is positive, and hence a rational is in the positive cone exactly when it is positive in the usual sense.",
      "step": "1.2",
      "inputs": [
        "L4",
        "L5"
      ]
    },
    {
      "id": "step-2-1",
      "claim": "$F$ is a subfield of $\\mathbb{R}$: it contains $0$ and $1$, is closed under subtraction, and $(a+bu)(c+du) = (ac + 2bd) + (ad + bc)u$ gives closure under multiplication; for $a + bu \\ne 0$ one has $a^2 - 2b^2 \\ne 0$, since $b \\ne 0$ would otherwise give $(a/b)^2 = 2$ against [L2] while $b = 0$ forces $a \\ne 0$, and then $(a+bu)^{-1} = (a - bu)(a^2-2b^2)^{-1} \\in F$.",
      "step": "2.1",
      "inputs": [
        "L2",
        "1.1",
        "L3"
      ]
    },
    {
      "id": "step-2-2",
      "claim": "The representation is unique: $a + bu = a' + b'u$ with $b \\ne b'$ would give $u = (a-a')(b'-b)^{-1} \\in \\mathbb{Q}$, against step 1.1; so $b = b'$ and then $a = a'$.",
      "step": "2.2",
      "inputs": [
        "1.1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-3-1",
      "claim": "$\\sigma$ is therefore a well-defined map $F \\to F$, and it is a field automorphism: it is additive by inspection, $\\sigma(1) = 1$, and $\\sigma(a+bu)\\sigma(c+du) = (ac+2bd) - (ad+bc)u = \\sigma\\big((a+bu)(c+du)\\big)$; moreover $\\sigma \\circ \\sigma$ is the identity, so $\\sigma$ is a bijection.",
      "step": "3.1",
      "inputs": [
        "2.1",
        "2.2",
        "L3"
      ]
    },
    {
      "id": "step-3-2",
      "claim": "Let $Q$ be any positive cone on $F$. Since $u \\ne 0$, exactly one of $u \\in Q$, $-u \\in Q$ holds.",
      "step": "3.2",
      "inputs": [
        "2.1",
        "L3"
      ]
    },
    {
      "id": "step-4-1",
      "claim": "$Q$ is determined by that choice. Suppose $u \\in Q$ (the other case is the same with $u$ replaced by $-u$, which also squares to $2$). Let $x = a + bu \\ne 0$. If $b = 0$ then $x$ is a nonzero rational and step 1.2 decides it. If $b \\ne 0$ then $x = b(u + c)$ with $c := a/b \\in \\mathbb{Q}$, and by [L4] the membership of $x$ is decided by those of $b$ and of $u + c$; for $c \\ge 0$ one has $u + c \\in Q$, while for $c < 0$, writing $e := -c > 0$, the identity $(u-e)(u+e) = 2 - e^2$ with $u + e \\in Q$ and $2 - e^2 \\ne 0$ shows that $u - e \\in Q$ exactly when $2 - e^2 > 0$, a condition on a rational decided by step 1.2. So $Q$ is uniquely determined, and there are at most two positive cones on $F$.",
      "step": "4.1",
      "inputs": [
        "1.2",
        "L4",
        "2.1",
        "3.2",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-4-2",
      "claim": "Both occur. $P_1$ is a positive cone on $F$, being the restriction to the subfield $F$ of the positive cone of $\\mathbb{R}$; and $P_2 = \\sigma^{-1}(P_1)$ is one because $\\sigma$ is a field automorphism, so trichotomy and closure transfer along it. They are distinct: $u \\in P_1$ by step 1.1, whereas $\\sigma(u) = -u \\notin P_1$, so $u \\notin P_2$.",
      "step": "4.2",
      "inputs": [
        "1.1",
        "2.1",
        "3.1",
        "L3"
      ]
    },
    {
      "id": "step-5-1",
      "claim": "Hence $F$ carries exactly two positive cones, $P_1$ and $P_2$, and since $\\sigma$ is an involution, $P_2 = \\sigma(P_1)$ and $P_1 = \\sigma(P_2)$: the conjugation exchanges the two orders.",
      "step": "5.1",
      "inputs": [
        "3.1",
        "4.1",
        "4.2"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The Statement quantifies over fixed nonempty data and introduces no empty-set or empty-family boundary."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: $u \\in \\mathbb{R}$ satisfies $u > 0$ and $u^2 = 2$, and $u \\notin \\mathbb{Q}$."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.2: In every ordered field the positivity of a rational is forced: $n \\cdot 1 > 0$ for $n \\ge 1$, so for positive integers $p, q$ the element $(p\\cdot 1)(q\\cdot 1)^{-1}$ is positive, and hence a rational is in the positive cone exactly when it is positive in the u"
    },
    {
      "case": "degenerate",
      "status": "checked",
      "evidence": "step 4.1: $Q$ is determined by that choice. Suppose $u \\in Q$ (the other case is the same with $u$ replaced by $-u$, which also squares to $2$). Let $x = a + bu \\ne 0$. If $b = 0$ then $x$ is a nonzero rational and step 1.2 decides it. If $b \\ne 0$ then $x = b(u + c)$ w"
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "The Statement has no interval endpoint or finite-index endpoint boundary."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 4.1: all existence or selection moves were checked; any countable-choice use is explicitly tagged in the cited step."
    },
    {
      "case": "iff-forward",
      "status": "checked",
      "evidence": "step 1.1: the forward direction (or first implication in the stated equivalence cycle) starts here and was checked through the subsequent cited steps."
    },
    {
      "case": "iff-reverse",
      "status": "checked",
      "evidence": "step 5.1: the converse direction (or closing implication in the stated equivalence cycle) is established here and was checked."
    }
  ],
  "finite_smoke": [],
  "risk_review": {
    "status": "pending",
    "reviewer": "Alpha",
    "notes": "Audit-Beta captured this A2 contract after reading every numbered step and every cited target section; independent risk review remains for A6."
  }
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "ex-field-ordered-in-two-ways",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "ex-field-ordered-in-two-ways",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-field",
    "declared_target": "def-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-field-ordered-in-two-ways",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "def-rationals",
    "declared_target": "def-rationals",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-field-ordered-in-two-ways",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-of-square-roots",
    "declared_target": "thm-of-square-roots",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-field-ordered-in-two-ways",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "fs-sqrt2-rational",
    "declared_target": "fs-sqrt2-rational",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-field-ordered-in-two-ways",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-of-square-positive",
    "declared_target": "lem-of-square-positive",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-field-ordered-in-two-ways",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "ex-field-ordered-in-two-ways",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "ex-field-ordered-in-two-ways",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "lem-of-inverse-positive",
    "declared_target": "lem-of-inverse-positive",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "ex-field-ordered-in-two-ways",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "ex-field-ordered-in-two-ways",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "ex-field-ordered-in-two-ways",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "ex-field-ordered-in-two-ways",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
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
    "source": "ex-field-ordered-in-two-ways",
    "sourcePage": "equivalent-forms-of-completeness-examples",
    "batch": "wave7-real-analysis-completeness-limits",
    "target": "thm-reals-ordered-field",
    "declared_target": "thm-reals-ordered-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (14)

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

### `def-field`

````markdown
---
id: def-field
kind: definition
title: "Field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: []
justified_by: [lem-of-inverse-unique]
aliases: []
landmark: false
short: "field"
verification:
  precheck: n/a
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-28
    scope: page
    delegated_by: owner
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
---

## Definition

A **field** is a set $F$ equipped with two binary operations $+$ (addition) and
$\cdot$ (multiplication) and two distinguished elements $0 \ne 1$ of $F$,
satisfying:

- **(A)** $(F, +)$ is an abelian group with identity $0$: addition is
  associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an
  additive inverse $-x$ with $x + (-x) = 0$.
- **(M)** Multiplication is associative and commutative **on all of $F$**, and
  $x \cdot 1 = x$ for every $x \in F$; moreover $(F \setminus \{0\}, \cdot)$ is an
  abelian group with identity $1$, so every $x \ne 0$ has a multiplicative inverse
  $x^{-1}$ with $x \cdot x^{-1} = 1$.
- **(D)** Multiplication distributes over addition: $x \cdot (y + z) = x\cdot y + x\cdot z$.

We write $x - y := x + (-y)$ and $x/y := x \cdot y^{-1}$ (for $y \ne 0$), and
abbreviate $x \cdot y$ as $xy$.

## Remarks

- The rationals $\mathbb{Q}$ ([[thm-rat-field]]) and both constructions of the
  reals ([[thm-reals-field]], [[thm-reals-dedekind-field]]) are fields. This
  definition states the field axioms once, abstractly, so that every field fact
  proved from them applies to all of these at once.
- The requirement $0 \ne 1$ excludes the trivial one-element structure.
- **Why (M) quantifies over all of $F$ explicitly** (amended 2026-07-28, owner
  approved). An earlier wording headed (M) with the group
  $(F \setminus \{0\}, \cdot)$ alone, and under that strict reading the axioms
  do not pin down the products $0 \cdot y$: take $\mathbb{F}_2$ and redefine
  $0 \cdot y := y$, which leaves (A) untouched, leaves
  $(F \setminus \{0\}, \cdot)$ the trivial group, and satisfies (D) in all eight
  instances, yet has $0 \cdot 1 = 1$ — making [[lem-of-zero-mult]] false in a
  purported model of the axioms. Associativity, commutativity and
  $x \cdot 1 = x$ are therefore asserted on **all** of $F$, the element $0$
  included. Commutativity on all of $F$ is also what turns (D) into its
  right-hand form $(y + z) \cdot x = y \cdot x + z \cdot x$, which
  [[lem-of-zero-mult]] uses.
- The identities $0, 1$ and the inverses $-x, x^{-1}$ are unique
  ([[lem-of-inverse-unique]]), so writing them as single-valued notation, and
  the abbreviations $x - y := x + (-y)$ and $x/y := x y^{-1}$, are legitimate.
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

### `def-rationals`

````markdown
---
id: def-rationals
kind: definition
title: "The rationals as equivalence classes of pairs of integers"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-integers, thm-int-comm-ring]
justified_by: [lem-rat-equivalence]
aliases: []
landmark: true
short: "ℚ"
verification:
  precheck: n/a
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "E. Landau, Foundations of Analysis"
      url: "https://archive.org/details/foundationsofana0000land"
    - title: "Rational number — formal construction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_number"
pipeline_run: null
---

## Definition

On the set of pairs $(a,b)$ with $a, b \in \mathbb{Z}$ and $b \ne 0$, define

$$(a,b) \sim (c,d) \iff ad = cb \quad \text{in } \mathbb{Z}.$$

This is an equivalence relation ([[lem-rat-equivalence]]). The **rationals** are
the quotient $\mathbb{Q}$, and $[(a,b)]$ is written $a/b$.

## Remarks

- The pair $(a,b)$ encodes the formal quotient $a/b$; the relation
  $ad = cb$ is "$a/b = c/d$" cleared of denominators, using only the ring
  arithmetic of $\mathbb{Z}$ ([[thm-int-comm-ring]]).
````

### `fs-sqrt2-rational`

````markdown
---
id: fs-sqrt2-rational
kind: false-statement
title: "FALSE: some rational number squares to 2"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rationals, thm-rat-field]
aliases: []
proof_strategy: contradiction
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Square root of 2 — proofs of irrationality (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Square_root_of_2"
pipeline_run: null
---

## Statement

**False claim:** there exists $x \in \mathbb{Q}$ with $x^2 = 2$.

## Facts & Assumptions

**Given:** The rationals as quotients of integer pairs ([[def-rationals]]).

[A1] Every rational can be written $a/b$ in lowest terms, with $a, b$ not both even (cancel common factors of $2$; the process terminates by well-ordering of $\mathbb{N}$).

[A2] Parity in $\mathbb{Z}$: if $k^2$ is even then $k$ is even (an odd $k = 2j+1$ has odd square $4j^2 + 4j + 1$).

## Refutation

**Proof technique:** contradiction.

1.1 Assume, for contradiction, that some $x \in \mathbb{Q}$ has $x^2 = 2$; write $x = a/b$ in lowest terms, $a, b$ not both even. [assume-contra, A1]

2.1 Clearing denominators: $a^2 = 2b^2$. [step 1.1, algebra]

3.1 $a^2$ is even, hence $a$ is even: $a = 2c$. [step 2.1, A2]

4.1 Substituting: $4c^2 = 2b^2$, so $b^2 = 2c^2$ is even, hence $b$ is even. [step 3.1, A2, algebra]

5.1 Both $a$ and $b$ are even, contradicting the lowest-terms choice of step 1.1; the assumption fails: no rational squares to $2$. [step 4.1, step 1.1, discharge-contradiction] ∎
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

### `lem-of-inverse-positive`

````markdown
---
id: lem-of-inverse-positive
kind: lemma
title: "Inverses of positives are positive, and reciprocation reverses order"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-ordered-field, lem-of-sign-rules, cor-of-one-positive]
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
    - title: "University of Innsbruck notes: Ordered fields"
      url: "https://www.uibk.ac.at/media/filer_public/28/02/280225fd-dde6-4e9c-bff6-baad33ff4a05/ragen.pdf"
pipeline_run: null
proof_strategy: direct
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$, and
let $a, b \in F$.

1. If $a > 0$ then $a^{-1} > 0$.
2. If $0 < a < b$ then $0 < b^{-1} < a^{-1}$.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and elements $a, b \in F$.

[L1] $x > 0 \iff x \in P$; $x < 0 \iff -x \in P$; and for $x \neq 0$ exactly one of $x \in P$, $-x \in P$ holds ([[def-ordered-field]]).

[L2] Sign rules: a product of a positive and a negative is negative, a product of two positives is positive, and for $c > 0$ one has $a < b \iff ac < bc$ ([[lem-of-sign-rules]]).

[L3] $0 < 1$; in particular $1 \neq 0$ ([[cor-of-one-positive]]).

[L4] $P$ is closed under addition, so $<$ is transitive ([[def-ordered-field]]).

## Proof

**Proof technique:** direct.

1.1 Assume $a > 0$, so $a \neq 0$ and its inverse $a^{-1}$ exists with $a \cdot a^{-1} = 1$; moreover $a^{-1} \neq 0$, since $a^{-1}$ has $a$ as its inverse while $0$ is non-invertible ($1 \neq 0$ by L3). [assume-hyp, L1, L3]

2.1 By trichotomy $a^{-1} \in P$ or $-a^{-1} \in P$; if $-a^{-1} \in P$, then $a > 0$ and $a^{-1} < 0$ give $a \cdot a^{-1} < 0$ by the sign rules, i.e. $1 < 0$, contradicting $0 < 1$; hence $a^{-1} \in P$, i.e. $a^{-1} > 0$, proving claim 1. [step 1.1, L2, L3, L1]

3.1 Assume $0 < a < b$; then $0 < b$ by transitivity, so by claim 1 both $a^{-1} > 0$ and $b^{-1} > 0$, and the sign rules give $a^{-1} b^{-1} > 0$. [assume-hyp, step 2.1, L4, L2, L1]

4.1 Multiplying $a < b$ by the positive $a^{-1} b^{-1}$ via the sign rules gives $a (a^{-1} b^{-1}) < b (a^{-1} b^{-1})$; since $a a^{-1} = 1$ and $b b^{-1} = 1$, this simplifies to $b^{-1} < a^{-1}$. [step 3.1, L2, algebra]

5.1 Together with $b^{-1} > 0$ from step 3.1, we conclude $0 < b^{-1} < a^{-1}$, proving claim 2. [step 3.1, step 4.1] ∎
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

### `lem-of-square-positive`

````markdown
---
id: lem-of-square-positive
kind: lemma
title: "Squares of nonzero elements are positive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-ordered-field, lem-of-mult-neg]
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
    - title: "University of Innsbruck notes: Ordered fields"
      url: "https://www.uibk.ac.at/media/filer_public/28/02/280225fd-dde6-4e9c-bff6-baad33ff4a05/ragen.pdf"
pipeline_run: null
proof_strategy: cases
---

## Statement

Let $F$ be an ordered field ([[def-ordered-field]]) with positive cone $P$. For
every $a \in F$ with $a \neq 0$ we have $a^2 > 0$, where $a^2 = a \cdot a$. In
particular, every nonzero square is positive.

## Facts & Assumptions

**Given:** An ordered field $F$ with positive cone $P$, and an element $a \in F$ with $a \neq 0$.

[L1] $x > 0 \iff x \in P$, and by trichotomy for $a \neq 0$ exactly one of $a \in P$, $-a \in P$ holds ([[def-ordered-field]]).

[L2] $P$ is closed under multiplication: if $u, v \in P$ then $uv \in P$ (axiom O2 of [[def-ordered-field]]).

[L3] In any field, $(-u)(-v) = uv$ ([[lem-of-mult-neg]]).

## Proof

**Proof technique:** cases.

1.1 Since $a \neq 0$, trichotomy leaves exactly two possibilities: $a \in P$ or $-a \in P$. [L1]

2.1 Case $a > 0$: then $a \in P$, so closure gives $a \cdot a \in P$, i.e. $a^2 > 0$. [assume-case pos, step 1.1, L2, L1]

2.2 Case $a < 0$: then $-a \in P$, so closure gives $(-a)(-a) \in P$; since $(-a)(-a) = a \cdot a = a^2$ by L3, we get $a^2 \in P$, i.e. $a^2 > 0$. [assume-case neg, step 1.1, L2, L3, L1]

3.1 The cases $a > 0$ and $a < 0$ exhaust all of $a \neq 0$ by trichotomy, and both yield $a^2 > 0$. [cases-exhaustive, step 2.1, step 2.2] ∎
````

### `thm-of-square-roots`

````markdown
---
id: thm-of-square-roots
kind: theorem
title: "Square roots exist: a unique $\\sqrt{a} \\ge 0$ with $(\\sqrt{a})^2 = a$; the positives are $\\{x^2 : x \\neq 0\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-complete-ordered-field, lem-of-sign-rules, lem-of-square-monotone, lem-of-square-positive, prop-of-multiply-inequalities, def-ordered-field]
aliases: []
landmark: true
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
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1 (Thm 1.21)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Colorado analysis notes: The real numbers"
      url: "https://spot.colorado.edu/~baggett/chap1.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a complete ordered field ([[def-complete-ordered-field]]). Then every
$a \in F$ with $a \ge 0$ has a **unique** $s \in F$ with $s \ge 0$ and $s^2 = a$;
we write $s = \sqrt{a}$. Consequently the positive elements of $F$ are exactly the
nonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \neq 0$.

## Facts & Assumptions

**Given:** A complete ordered field $F$ ([[def-complete-ordered-field]]), that is, an ordered field ([[def-ordered-field]]) with the least-upper-bound property, and an element $a \in F$ with $a \ge 0$.

[L1] Every nonempty subset of $F$ that is bounded above has a least upper bound in $F$ ([[def-complete-ordered-field]]).

[L2] Sign and scaling rules: a product of positives is positive, and for $c > 0$ one has $x < y \iff cx < cy$ ([[lem-of-sign-rules]]).

[L3] Squaring is strictly monotone on the nonnegatives: if $0 \le x < y$ then $x^2 < y^2$; in particular squaring is injective on $\{x : x \ge 0\}$ ([[lem-of-square-monotone]]).

[L4] A nonzero square is positive: if $y \neq 0$ then $y^2 > 0$ ([[lem-of-square-positive]]).

[L5] Multiplying inequalities of positives: if $0 < x < y$ and $0 < u < v$ then $xu < yv$ ([[prop-of-multiply-inequalities]]).

## Proof

**Proof technique:** contradiction.

1.1 If $a = 0$, then $s = 0$ satisfies $s \ge 0$ and $s^2 = 0 = a$, so existence holds; assume henceforth $a > 0$. [given, algebra]

1.2 Uniqueness holds once a root exists: if $u, v \ge 0$ satisfy $u^2 = v^2$, then strict monotonicity of squaring on nonnegatives [L3] rules out both $u < v$ and $u > v$, forcing $u = v$; so at most one $s \ge 0$ has $s^2 = a$. [L3, given]

1.3 Define $S = \{ t \in F : t \ge 0 \text{ and } t^2 \le a \}$; then $0 \in S$ because $0 \ge 0$ and $0^2 = 0 \le a$, so $S \neq \emptyset$. [given, algebra]

1.4 The element $1 + a$ is an upper bound of $S$: since $a > 0$ we have $1 + a > 1$, so any $t > 1 + a$ has $t > 1$ and $t > 0$, whence $t^2 = t \cdot t > 1 \cdot t = t > 1 + a > a$, giving $t \notin S$. [given, L2]

2.1 By completeness [L1], $s := \sup S$ exists in $F$; and since $0 \in S$ we have $s \ge 0$. [L1, step 1.3, step 1.4]

3.1 Assume, for contradiction, that $s^2 \neq a$; by trichotomy either $s^2 < a$ or $s^2 > a$. [assume-contra, step 2.1]

4.1 (Case $s^2 < a$.) Choose $h$ with $0 < h < 1$ and $h < \dfrac{a - s^2}{2s + 1}$, possible since $a - s^2 > 0$ and $2s + 1 \ge 1 > 0$; then $h^2 = h \cdot h < h \cdot 1 = h$ and $h(2s+1) < a - s^2$, so $(s+h)^2 = s^2 + 2sh + h^2 < s^2 + 2sh + h = s^2 + h(2s+1) < a$, whence $s + h \in S$ with $s + h > s$, contradicting that $s$ is an upper bound of $S$. [assume-case low, step 3.1, step 2.1, L2, L5, choose]

4.2 (Case $s^2 > a$.) Here $s > 0$ since $s^2 > a \ge 0$; choose $h$ with $0 < h < s$ and $h < \dfrac{s^2 - a}{2s}$, so $2sh < s^2 - a$ and $(s-h)^2 = s^2 - 2sh + h^2 \ge s^2 - 2sh > a$, hence every $t \in S$ has $t^2 \le a < (s-h)^2$ with $t \ge 0$ and $s - h > 0$, so $t < s - h$ by [L3]; thus $s - h$ is an upper bound of $S$ with $s - h < s$, contradicting that $s$ is the least upper bound. [assume-case high, step 3.1, step 2.1, L3, choose]

5.1 Both cases of the disjunction in step 3.1 give a contradiction, so the assumption fails and $s^2 = a$: a unique (by step 1.2) $s = \sqrt{a} \ge 0$ with $s^2 = a$ exists, and applying this to any $x > 0$ writes $x = (\sqrt{x})^2$ with $\sqrt{x} \neq 0$ while conversely any nonzero square is positive by [L4], so the positive elements of $F$ are exactly the nonzero squares. [step 4.1, step 4.2, step 3.1, step 1.2, L4, cases, discharge-contradiction] ∎
````

### `thm-reals-ordered-field`

````markdown
---
id: thm-reals-ordered-field
kind: theorem
title: "The reals form a totally ordered field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-real-order, def-real-numbers, thm-reals-field, lem-cauchy-away-from-zero, thm-rat-ordered-field, def-null-sequence]
aliases: []
landmark: true
short: "ℝ ordered field"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "L. S. Krapp, Constructions of the real numbers: a set theoretical approach (Oxford, 2014)"
      url: "https://www.math.uni-konstanz.de/~krapp/research/Constructions_of_the_real_numbers.pdf"
pipeline_run: null
---

## Statement

The relation of [[def-real-order]] is well defined and makes $\mathbb{R}$
([[thm-reals-field]]) a totally ordered field.

## Facts & Assumptions

**Given:** Reals $x, y$ with representatives $(a_n), (b_n)$.

[L1] A sequence $(u_n)_{n \ge 1}$ of rational numbers is null if, for every rational $\varepsilon > 0$, there is $N \in \mathbb{N}$ such that $|u_n| < \varepsilon$ for every $n \ge N$ ([[def-null-sequence]]).

[L2] Ordered-field arithmetic in $\mathbb{Q}$: $\delta/2 > 0$; sums and products of eventual lower bounds ([[thm-rat-ordered-field]]).

[L3] Dichotomy for non-null Cauchy sequences: eventually $> \delta$ or eventually $< -\delta$ ([[lem-cauchy-away-from-zero]]).

[L4] $\mathbb{R}$ is a field ([[thm-reals-field]]).

[L5] In $\mathbb{R} = \mathcal{C}/\mathcal{N}$, $x = 0$ iff a representative is null; so $x \ne 0$ iff every representative is non-null ([[def-real-numbers]]).

## Proof

**Proof technique:** direct.

1.1 Positivity is independent of the representative: if $a_n > \delta$ for $n \ge N$ and $(a'_n - a_n)$ is null, then beyond some $N' \ge N$ also $|a'_n - a_n| < \delta/2$, so $a'_n > \delta/2$: the defining property holds for $(a'_n)$ with $\delta/2$. [L1, L2]

1.2 Trichotomy: if $x \ne 0$, any representative is non-null, so by the dichotomy either $a_n > \delta$ eventually ($x$ positive) or $a_n < -\delta$ eventually ($-x$ positive); the two exclude each other, and exactly one of $x$ positive, $x = 0$, $-x$ positive holds. [L1, L3, L5]

1.3 Positives are closed under $+$ and $\cdot$: from $a_n > \delta$ and $b_n > \delta'$ eventually, $a_n + b_n > \delta + \delta'$ and $a_n b_n > \delta\delta'$ eventually, with $\delta + \delta', \delta\delta' > 0$. [L2]

2.1 Consequently $\le$ is a total order (trichotomy plus transitivity from closure under sums), compatible with addition (translation preserves the difference) and with multiplication by positives: $\mathbb{R}$ is a totally ordered field. [step 1.1, step 1.2, step 1.3, L4] ∎
````

