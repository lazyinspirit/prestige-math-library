# Proof-refuter brief — run `frontier-15`

> **NO PERMISSION PROMPTS OF ANY KIND (owner, 2026-07-30; broadened
> 2026-08-11).** Shell, edit, web-search and git alike, and it binds a compound
> command as a whole — no segment of an `&&` chain may raise one. Web search is
> part of your job and you never ask before searching. If an indispensable
> operation has no escalation-free form, **record a blocker in your report** —
> that is the escape hatch, never a prompt.

You are a **read-only proof-refuter**, GPT 5.6 Sol. Your process is
`--sandbox read-only`: you *cannot* write, and that is deliberate. **You never
write content and never apply a fix.** Alpha adjudicates every finding from disk.
Your job is evidence, not a verdict.

Your assignment is in the "This dispatch" section appended below.

## Your standard is the step-7 judges' standard

You are held to the same skeptical, adversarial standard as the paired DeepSeek
V4 Pro and GPT 5.6 Terra judges. Report **only**:

- a concrete **false claim** — the Statement, a witness, or a computed value is
  actually wrong, and you can say why;
- an **unlicensed inference** — a step that does not follow from the facts,
  hypotheses and earlier steps it cites;
- a **missing hypothesis** — characteristic, ordering, nonnegativity,
  nonemptiness, smallness, local smallness, completeness, a size/class
  distinction, or a choice principle the proof silently uses;
- an **inaccurate citation** — a `[F#]`/`[A#]`/`[L#]` that does not state what the
  cited item states, with a changed domain, quantifier, hypothesis, direction or
  conclusion, or an invented converse.

**Open the cited item on disk before alleging a dependency is too weak.** Every
dependency is a real file at `items/<id>.md`. A restatement inflating a
dependency to carry more weight than it has is a defect; a terse but licensed
routine move is not.

## What is NOT a finding

A gap a competent reader closes in **30 seconds** is nonfatal (owner,
2026-07-31). Say so and move on. Style preferences, alternative proofs you
prefer, "could be deeper", and generality the page deliberately scoped away are
not findings.

An independent reader has already passed over this batch and its findings are
being adjudicated separately. **Do not pad your report with citation-hygiene
nitpicks.** What Alpha needs is the class the reader is most likely to have
missed: a Statement, title, witness or computed value that is actually **false**,
and an inference that cannot be closed at all rather than one whose citation is
merely imprecise. **Rank a real falsehood above a wording defect.**

## Titles and Statements

A **title or Statement asserting more than the proof delivers is fatal.** The
step-7 judges read Statements and cannot see a false title. Check the title
against what was actually proved, every time. Where a Statement carries a
hypothesis the proof's Given silently strengthens — a supplied family over a
proper class where the Statement promises only objectwise existence, a nonzero
space where the Statement says arbitrary — say so concretely.

## Boundary cases are where the defects were

Two contract boundary rows marked `not_applicable` each concealed a
confirmed-fatal defect: a division by zero at `h = 0`, and a counterexample at
`n = 0`. For every item, actively instantiate the **zero object or zero space**,
the **empty family or empty index set**, `n = 0` and `n = 1`, a degenerate
parameter, and both directions of an iff. State what you found.

## Provenance is part of your check

An **`ai-generated` Statement or Construction may never be a dependency target**
— finding one in another item's `deps` is a finding. For an `ai-generated`
statement, witness or refutation anywhere in your assignment, **actively search
for a counterexample** when you have concrete doubt; a plausible repaired proof
is not evidence the Statement is true.

## Your output

You are read-only and cannot write a file. **Put your complete report in your
final message**, structured per finding:

- the item id and exact location (Statement, a numbered step, a `[F#]` fact, the
  Remark, or page prose);
- what is wrong;
- the evidence — quote the dependency text from disk, or give the counterexample;
- your severity call: **fatal** or **nonfatal**.

Fatal findings first. Finish with a plain statement of coverage: which items you
read fully, which you sampled, and anything you could not check.

If you find nothing fatal, say so plainly. "No defect found in these N items,
here is what I checked" is a valuable and expected result — **do not manufacture
a finding to justify the dispatch.**


---

# This dispatch

run: frontier-15
role: audit-refuter
label: rr-8

run: frontier-15
role: refuter
label: rr-8
# Risk-review refutation — 2 high/critical-tier items
You have **no tools**: every file you need is reproduced below in full.
Do not ask to read anything; if something you need is genuinely absent, say so.

These items were scored high or critical risk by structural triage (many
dependencies, biconditionals, existence/uniqueness/well-definedness claims,
boundary language, induction, quotients). Your job is to attack the specific
risk, not to survey.

For **every** item below, report: is the Statement true as written; does each
numbered step follow from the facts, hypotheses and earlier steps it cites; does
any `[L#]`/`[F#]`/`[A#]` restate its cited item inaccurately (the cited item's
own text is reproduced under DEPENDENCY TEXT — check against it, and if a
dependency's text is not reproduced, say that rather than guessing); is a
hypothesis silently used (characteristic, finiteness, nonzero, coprimality, a
choice principle); does the **title** claim more than the proof delivers.

Actively instantiate the degenerate cases: n = 0, n = 1, the empty family, the
zero module/ring, the trivial group, a degenerate parameter, and BOTH directions
of every iff. Two contract rows marked `not_applicable` each hid a
confirmed-fatal defect on earlier runs.

Rank a genuine falsehood above a wording defect. A gap a competent reader closes
in 30 seconds is nonfatal — say so and move on. Do not manufacture findings:
"no defect in these N items, here is what I checked" is a valuable result.

Structure each finding as: item id | exact location (Statement, step 1.2, [L3],
title, Remark) | what is wrong | the evidence | fatal or nonfatal.

---

# ITEMS UNDER REVIEW

## ITEM: ex-quadratic-algebraic-integers-and-one-half

```markdown
---
id: ex-quadratic-algebraic-integers-and-one-half
kind: example
title: "$\\sqrt2$ and $(1+\\sqrt5)/2$ are algebraic integers, while $1/2$ is not"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-integral-element-and-algebraic-integer, cor-rational-algebraic-integers-are-integers, thm-of-square-roots]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Eloisa Grifo, Commutative Algebra I, Section 1.4"
      url: "https://eloisagrifo.github.io/Teaching/ca1/CA1notes.pdf"
pipeline_run: null
---

## Example

The numbers $\sqrt2$ and $(1+\sqrt5)/2$ are algebraic integers, whereas $1/2$ is not. See [[def-integral-element-and-algebraic-integer]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] Let $A\to B$ be a homomorphism of commutative rings. An element $b\in B$ is integral over $A$ when it is a root of a monic polynomial in $A[X]$. The extension is integral when every element is integral. An algebraic integer is a complex number integral over $\mathbb Z$. ([[def-integral-element-and-algebraic-integer]]).

[L2] A rational number is an algebraic integer if and only if it is an integer. ([[cor-rational-algebraic-integers-are-integers]]).

[L3] Let $F$ be a complete ordered field (def-complete-ordered-field). Then every $a \in F$ with $a \ge 0$ has a unique $s \in F$ with $s \ge 0$ and $s^2 = a$; we write $s = \sqrt{a}$. Consequently the positive elements of $F$ are exactly the nonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \neq 0$. ([[thm-of-square-roots]]).

## Verification

**Proof technique:** direct.

1.1 The number $\sqrt2$ is a root of the monic polynomial $X^2-2$, and $(1+\sqrt5)/2$ is a root of the monic polynomial $X^2-X-1$; both are therefore algebraic integers. [L1, L2, L3, given, algebra]

2.1 The rational algebraic-integer criterion already excludes $1/2$. Directly, a monic equation of degree $n$ at $1/2$ would, after multiplication by $2^n$, read $1+2a_{n-1}+\cdots+2^na_0=0$, whose left side is odd. This proves the stated claim. [step 1.1, given, algebra] ∎

```

### Recorded proof contract for ex-quadratic-algebraic-integers-and-one-half

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-integral-element-and-algebraic-integer",
   "source_section": "Definition",
   "quote": "Let $A\\to B$ be a homomorphism of commutative rings. An element $b\\in B$ is **integral over $A$** when it is a root of a monic polynomial in $A[X]$. The extension is integral when every element is integral. An **algebraic integer** is a complex number integral over $\\mathbb Z$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "cor-rational-algebraic-integers-are-integers",
   "source_section": "Statement",
   "quote": "A rational number is an algebraic integer if and only if it is an integer. See [[def-integral-element-and-algebraic-integer]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-of-square-roots",
   "source_section": "Statement",
   "quote": "Let $F$ be a complete ordered field ([[def-complete-ordered-field]]). Then every\n$a \\in F$ with $a \\ge 0$ has a **unique** $s \\in F$ with $s \\ge 0$ and $s^2 = a$;\nwe write $s = \\sqrt{a}$. Consequently the positive elements of $F$ are exactly the\nnonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \\neq 0$.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The number $\\sqrt2$ is a root of the monic polynomial $X^2-2$, and $(1+\\sqrt5)/2$ is a root of the monic polynomial $X^2-X-1$; both are therefore algebraic integers.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "The rational algebraic-integer criterion already excludes $1/2$. Directly, a monic equation of degree $n$ at $1/2$ would, after multiplication by $2^n$, read $1+2a_{n-1}+\\cdots+2^na_0=0$, whose left side is odd. This proves the stated claim.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "$\\sqrt2$ and $(1+\\sqrt5)/2$ are algebraic integers, while $1/2$ is not: the claim “The numbers $\\sqrt2$ and $(1+\\sqrt5)/2$ are algebraic integers, whereas $1/2$ is not.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "$\\sqrt2$ and $(1+\\sqrt5)/2$ are algebraic integers, while $1/2$ is not: the claim “The numbers $\\sqrt2$ and $(1+\\sqrt5)/2$ are algebraic integers, whereas $1/2$ is not.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "$\\sqrt2$ and $(1+\\sqrt5)/2$ are algebraic integers, while $1/2$ is not: the claim “The numbers $\\sqrt2$ and $(1+\\sqrt5)/2$ are algebraic integers, whereas $1/2$ is not.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "not_applicable",
   "reason": "$\\sqrt2$ and $(1+\\sqrt5)/2$ are algebraic integers, while $1/2$ is not: the claim “The numbers $\\sqrt2$ and $(1+\\sqrt5)/2$ are algebraic integers, whereas $1/2$ is not.” does not admit coincident endpoints, an empty choice, or a collapsed structure distinct from its general case."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "$\\sqrt2$ and $(1+\\sqrt5)/2$ are algebraic integers, while $1/2$ is not: the claim “The numbers $\\sqrt2$ and $(1+\\sqrt5)/2$ are algebraic integers, whereas $1/2$ is not.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "$\\sqrt2$ and $(1+\\sqrt5)/2$ are algebraic integers, while $1/2$ is not: the claim “The numbers $\\sqrt2$ and $(1+\\sqrt5)/2$ are algebraic integers, whereas $1/2$ is not.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "$\\sqrt2$ and $(1+\\sqrt5)/2$ are algebraic integers, while $1/2$ is not: the claim “The numbers $\\sqrt2$ and $(1+\\sqrt5)/2$ are algebraic integers, whereas $1/2$ is not.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "$\\sqrt2$ and $(1+\\sqrt5)/2$ are algebraic integers, while $1/2$ is not: the claim “The numbers $\\sqrt2$ and $(1+\\sqrt5)/2$ are algebraic integers, whereas $1/2$ is not.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: fs-noetherian-rings-have-noetherian-subrings

```markdown
---
id: fs-noetherian-rings-have-noetherian-subrings
kind: false-statement
title: "False statement: every subring of a Noetherian ring is Noetherian"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-noetherian-ring, def-field-of-fractions, thm-field-of-fractions-is-a-field-and-the-domain-embeds]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Noetherian Modules, Sections 1-2"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/noetherianmod.pdf"
pipeline_run: null
---

## Statement

**False claim:** every subring of a Noetherian ring is Noetherian. See [[def-noetherian-ring]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the false claim.

[L1] A unital ring $R$ is left Noetherian when its left regular module ${}_R R$ is Noetherian, and right Noetherian when the right regular module $R_R$ is Noetherian. Unqualified “Noetherian ring” means left Noetherian here; the side is stated whenever both notions occur. ([[def-noetherian-ring]]).

[L2] If $D$ is an integral domain, then $D\setminus\{0\}$ is multiplicative. Its localisation $$ \operatorname{Frac}(D)=(D\setminus\{0\})^{-1}D $$ is the field of fractions of $D$. Thus its elements are fractions $a/b$ with $a,b\in D$ and $b\ne0$, modulo the localisation equivalence relation. ([[def-field-of-fractions]]).

[L3] For every integral domain $D$, the localisation $\operatorname{Frac}(D)$ is a field. Its canonical map $$ D\longrightarrow\operatorname{Frac}(D),\qquad d\longmapsto d/1, $$ is an injective unital ring homomorphism. ([[thm-field-of-fractions-is-a-field-and-the-domain-embeds]]).

## Refutation

**Proof technique:** direct.

1.1 Fix a field $F$ and let $R$ consist of polynomials in symbols $x_0,x_1,\ldots$ in which each polynomial contains only finitely many monomials and variables. The usual polynomial operations make $R$ a domain, so it embeds in its fraction field $K$. [L1, L2, L3, given, algebra]

2.1 The field $K$ is Noetherian because its only ideals are $0$ and $K$. In $R$, the ideals $I_n=(x_0,\ldots,x_n)$ satisfy $I_n<I_{n+1}$: setting $x_0,\ldots,x_n$ to zero leaves $x_{n+1}$ nonzero, so $x_{n+1}\notin I_n$. [step 1.1, given, algebra]

3.1 Thus the Noetherian ring $K$ contains the non-Noetherian subring $R$, which refutes the claim. This proves the stated claim. [step 2.1, given, algebra] ∎

```

### Recorded proof contract for fs-noetherian-rings-have-noetherian-subrings

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-noetherian-ring",
   "source_section": "Definition",
   "quote": "A unital ring $R$ is **left Noetherian** when its left regular module ${}_R R$ is Noetherian, and **right Noetherian** when the right regular module $R_R$ is Noetherian. Unqualified “Noetherian ring” means left Noetherian here; the side is stated whenever both notions occur.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-field-of-fractions",
   "source_section": "Definition",
   "quote": "If $D$ is an integral domain, then $D\\setminus\\{0\\}$ is multiplicative. Its localisation\n$$ \\operatorname{Frac}(D)=(D\\setminus\\{0\\})^{-1}D $$\nis the **field of fractions** of $D$. Thus its elements are fractions $a/b$ with $a,b\\in D$ and $b\\ne0$, modulo the localisation equivalence relation.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-field-of-fractions-is-a-field-and-the-domain-embeds",
   "source_section": "Statement",
   "quote": "For every integral domain $D$, the localisation $\\operatorname{Frac}(D)$ is a field. Its canonical map\n$$ D\\longrightarrow\\operatorname{Frac}(D),\\qquad d\\longmapsto d/1, $$\nis an injective unital ring homomorphism.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Fix a field $F$ and let $R$ consist of polynomials in symbols $x_0,x_1,\\ldots$ in which each polynomial contains only finitely many monomials and variables. The usual polynomial operations make $R$ a domain, so it embeds in its fraction field $K$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "The field $K$ is Noetherian because its only ideals are $0$ and $K$. In $R$, the ideals $I_n=(x_0,\\ldots,x_n)$ satisfy $I_n<I_{n+1}$: setting $x_0,\\ldots,x_n$ to zero leaves $x_{n+1}$ nonzero, so $x_{n+1}\\notin I_n$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Thus the Noetherian ring $K$ contains the non-Noetherian subring $R$, which refutes the claim. This proves the stated claim.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "given",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "False statement: every subring of a Noetherian ring is Noetherian: the claim “**False claim:** every subring of a Noetherian ring is Noetherian.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "False statement: every subring of a Noetherian ring is Noetherian: the zero or trivial specialization for “**False claim:** every subring of a Noetherian ring is Noetherian.” is resolved in step 2.1: “The field $K$ is Noetherian because its only ideals are $0$ and $K$. In $R$, the ideals $I_n=(x_0,\\ldots,x_n)$ satisfy $I_n<I_{n+1}$: setting $x_0,\\ldots,x_n$ to zero leaves $x_{n+1}$ nonzero, so $x_{n+1}\\notin I_n$.”."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "False statement: every subring of a Noetherian ring is Noetherian: the claim “**False claim:** every subring of a Noetherian ring is Noetherian.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "False statement: every subring of a Noetherian ring is Noetherian: the collapsed or coincident-input case admitted by the hypotheses for “**False claim:** every subring of a Noetherian ring is Noetherian.” is resolved in step 2.1: “The field $K$ is Noetherian because its only ideals are $0$ and $K$. In $R$, the ideals $I_n=(x_0,\\ldots,x_n)$ satisfy $I_n<I_{n+1}$: setting $x_0,\\ldots,x_n$ to zero leaves $x_{n+1}$ nonzero, so $x_{n+1}\\notin I_n$.”."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "False statement: every subring of a Noetherian ring is Noetherian: the claim “**False claim:** every subring of a Noetherian ring is Noetherian.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "False statement: every subring of a Noetherian ring is Noetherian: the claim “**False claim:** every subring of a Noetherian ring is Noetherian.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "False statement: every subring of a Noetherian ring is Noetherian: the claim “**False claim:** every subring of a Noetherian ring is Noetherian.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "False statement: every subring of a Noetherian ring is Noetherian: the claim “**False claim:** every subring of a Noetherian ring is Noetherian.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, in full

## DEPENDENCY: def-integral-element-and-algebraic-integer

```markdown
---
id: def-integral-element-and-algebraic-integer
kind: definition
title: "Integral elements over a commutative ring and algebraic integers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-algebra-over-a-commutative-ring, def-polynomial-degree-leading-coefficient-and-monic, def-polynomial-evaluation-and-root]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Eloisa Grifo, Commutative Algebra I, Section 1.4"
      url: "https://eloisagrifo.github.io/Teaching/ca1/CA1notes.pdf"
pipeline_run: null
---

## Definition

Let $A\to B$ be a homomorphism of commutative rings. An element $b\in B$ is **integral over $A$** when it is a root of a monic polynomial in $A[X]$. The extension is integral when every element is integral. An **algebraic integer** is a complex number integral over $\mathbb Z$.

```

## DEPENDENCY: cor-rational-algebraic-integers-are-integers

```markdown
---
id: cor-rational-algebraic-integers-are-integers
kind: corollary
title: "The rational algebraic integers are exactly the integers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-integral-element-and-algebraic-integer, thm-rational-root-theorem, thm-rat-field, lem-int-embeds-rat]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Eloisa Grifo, Commutative Algebra I, Section 1.4"
      url: "https://eloisagrifo.github.io/Teaching/ca1/CA1notes.pdf"
pipeline_run: null
---

## Statement

A rational number is an algebraic integer if and only if it is an integer. See [[def-integral-element-and-algebraic-integer]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $A\to B$ be a homomorphism of commutative rings. An element $b\in B$ is integral over $A$ when it is a root of a monic polynomial in $A[X]$. The extension is integral when every element is integral. An algebraic integer is a complex number integral over $\mathbb Z$. ([[def-integral-element-and-algebraic-integer]]).

[L2] Let $f=a_nx^n+\cdots+a_1x+a_0\in\mathbb Z[x]$ with $a_n\ne0$. If a reduced rational number $r/s$, where $r,s\in\mathbb Z$, $s>0$, and $\gcd(r,s)=1$, is a root of $f$, then $$ r\mid a_0\qquad\text{and}\qquad s\mid a_n. $$. ([[thm-rational-root-theorem]]).

[L3] $(\mathbb{Q}, +, \cdot, 0, 1)$ with the operations of def-rat-operations is a field: a commutative ring with $1 \ne 0$ in which every nonzero element has a multiplicative inverse. ([[thm-rat-field]]).

[L4] The map $j(k) = [(k,1)]$ is injective and preserves addition, multiplication, and order. Composing with lem-nat-embeds-int embeds $\mathbb{N}$ in $\mathbb{Q}$; we write $k$ for $j(k)$ throughout. ([[lem-int-embeds-rat]]).

## Proof

**Proof technique:** direct.

1.1 We write a rational algebraic integer in lowest terms $r/s$ with $s>0$. [L1, L2, L3, L4, given, algebra]

2.1 It is a root of a monic integer polynomial, so the rational-root theorem makes $s\mid1$, hence $s=1$. [step 1.1, given, algebra]

3.1 Conversely every integer satisfies the monic polynomial $X-n$. [step 2.1, given, algebra]

4.1 Both are admitted and neither is exceptional. The polynomial $X-n$ of step 3.1 is monic with integer coefficients for every integer $n$, giving $X$ at $n=0$ and $X+|n|$ for $n<0$; and in step 2.1 the lowest-terms representation covers $0$ as $0/1$, where the denominator is already $1$. This proves the stated claim. [step 2.1, step 3.1, given, algebra] ∎

```

## DEPENDENCY: thm-of-square-roots

```markdown
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

```

## DEPENDENCY: def-noetherian-ring

```markdown
---
id: def-noetherian-ring
kind: definition
title: "Left and right Noetherian rings"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-noetherian-module, def-left-and-right-modules]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Noetherian Modules, Sections 1-2"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/noetherianmod.pdf"
pipeline_run: null
---

## Definition

A unital ring $R$ is **left Noetherian** when its left regular module ${}_R R$ is Noetherian, and **right Noetherian** when the right regular module $R_R$ is Noetherian. Unqualified “Noetherian ring” means left Noetherian here; the side is stated whenever both notions occur.

```

## DEPENDENCY: def-field-of-fractions

```markdown
---
id: def-field-of-fractions
kind: definition
title: 'The field of fractions $\operatorname{Frac}(D)=(D\setminus\{0\})^{-1}D$ of an integral domain'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-multiplicative-subset-and-localisation, def-zero-divisor-and-integral-domain]
justified_by: []
aliases: [fraction field]
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'The CRing Project, Chapter 13: Fields and Extensions'
      url: 'https://math.colorado.edu/topology/cringproject.pdf'
pipeline_run: frontier-12
---

## Definition

If $D$ is an integral domain, then $D\setminus\{0\}$ is multiplicative. Its localisation
$$ \operatorname{Frac}(D)=(D\setminus\{0\})^{-1}D $$
is the **field of fractions** of $D$. Thus its elements are fractions $a/b$ with $a,b\in D$ and $b\ne0$, modulo the localisation equivalence relation.

```

## DEPENDENCY: thm-field-of-fractions-is-a-field-and-the-domain-embeds

```markdown
---
id: thm-field-of-fractions-is-a-field-and-the-domain-embeds
kind: theorem
title: '$\operatorname{Frac}(D)$ is a field and $d\mapsto d/1$ embeds the integral domain $D$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-field-of-fractions, prop-localisation-zero-equality-and-kernel-criteria, thm-localisation-equivalence-and-ring-laws, def-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'The CRing Project, Chapter 13: Fields and Extensions'
      url: 'https://math.colorado.edu/topology/cringproject.pdf'
pipeline_run: frontier-12
---

## Statement

For every integral domain $D$, the localisation $\operatorname{Frac}(D)$ is a field. Its canonical map
$$ D\longrightarrow\operatorname{Frac}(D),\qquad d\longmapsto d/1, $$
is an injective unital ring homomorphism.

## Facts & Assumptions

**Given:** An integral domain $D$.

[F1] The field of fractions is the localisation at $D\setminus\{0\}$ ([[def-field-of-fractions]]).

[F2] A localisation map is injective exactly when every denominator has trivial annihilator ([[prop-localisation-zero-equality-and-kernel-criteria]]).

[F3] Localisation is a commutative ring with the stated fraction arithmetic ([[thm-localisation-equivalence-and-ring-laws]]).

[F4] A field is a nonzero commutative ring in which every nonzero element is a unit ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 Every nonzero element of the domain $D$ has trivial annihilator. Hence [F2], applied to $S=D\setminus\{0\}$, makes the canonical homomorphism injective. In particular $1/1\ne0/1$, so the localisation is nonzero. [F1, F2]

1.2 Let $a/b$ be nonzero. By the vanishing criterion in [F2], $a\ne0$, because otherwise $a/b=0$. Thus $a\in D\setminus\{0\}$, and [F3] gives $(a/b)(b/a)=1$. [F1, F2, F3]

2.1 Every nonzero element is therefore a unit, and [F3] supplies the commutative-ring structure. By [F4], $\operatorname{Frac}(D)$ is a field. [F3, F4, step 1.1, step 1.2] ∎

```
