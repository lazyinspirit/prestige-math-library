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
label: rr-12

run: frontier-15
role: refuter
label: rr-12
# Risk-review refutation — 7 high/critical-tier items
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

## ITEM: thm-finite-extension-is-separable-iff-separable-degree-is-full

```markdown
---
id: thm-finite-extension-is-separable-iff-separable-degree-is-full
kind: theorem
title: "A finite extension is separable if and only if $[K:F]_s=[K:F]$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-primitive-element-theorem-for-finite-separable-extensions, thm-multiplicativity-of-separable-degree, cor-separable-degree-is-at-most-extension-degree, cor-separable-degree-of-a-simple-extension-counts-distinct-roots, thm-tower-law-for-finite-field-extensions, def-separable-elements-and-separable-extensions]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

A finite extension $K/F$ is separable if and only if
$[K:F]_s=[K:F]$.

## Facts & Assumptions

**Given:** A finite extension $K/F$.

[L1] Every finite separable extension is simple ([[thm-primitive-element-theorem-for-finite-separable-extensions]]).

[L2] Separable degree is multiplicative in finite towers ([[thm-multiplicativity-of-separable-degree]]).

[L3] Separable degree is at most ordinary degree for every finite extension ([[cor-separable-degree-is-at-most-extension-degree]]).

[L4] For a simple extension, separable degree is the number of distinct roots of the minimal polynomial ([[cor-separable-degree-of-a-simple-extension-counts-distinct-roots]]).

[L5] Ordinary degrees multiply in finite towers ([[thm-tower-law-for-finite-field-extensions]]).

[L6] An extension is separable when every element has separable minimal polynomial over the base ([[def-separable-elements-and-separable-extensions]]).

## Proof

**Proof technique:** direct.

1.1 If $K/F$ is separable, [L1] gives $K=F(\alpha)$. The polynomial $m_\alpha$ is separable, so its number of distinct roots equals its degree; [L4] therefore gives $[K:F]_s=[K:F]$. [L1, L4, L6]

1.2 Conversely, assume $[K:F]_s=[K:F]$ and fix $\alpha\in K$. Put $a=[F(\alpha):F]_s$, $b=[F(\alpha):F]$, $c=[K:F(\alpha)]_s$, and $d=[K:F(\alpha)]$. Then [L2] and [L5] give $ac=bd$, while [L3] gives $a\le b$ and $c\le d$. [L2, L3, L5]

2.1 The inequalities give $ac\le bc\le bd$; equality of the endpoints and positivity of extension degrees force $a=b$. By [L4], the minimal polynomial of $\alpha$ therefore has as many distinct roots as its degree and is separable. [step 1.2, L4, algebra]

3.1 Since $\alpha$ was arbitrary, every element of $K$ is separable over $F$, so [L6] makes $K/F$ separable. This proves the reverse implication. [step 2.1, L6]

4.1 Steps 1.1 and 3.1 establish the biconditional. [step 1.1, step 3.1] ∎

```

### Recorded proof contract for thm-finite-extension-is-separable-iff-separable-degree-is-full

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-primitive-element-theorem-for-finite-separable-extensions",
   "source_section": "Statement",
   "quote": "Let $E=F(\\alpha_1,\\ldots,\\alpha_r)$ be a finite extension. If all but possibly\none of the generators are separable over $F$, then $E/F$ is simple. In\nparticular, every finite separable extension is simple.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-multiplicativity-of-separable-degree",
   "source_section": "Statement",
   "quote": "For every finite tower $F\\subseteq K\\subseteq L$,\n\n$$[L:F]_s=[L:K]_s[K:F]_s.$$",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L3",
   "source": "cor-separable-degree-is-at-most-extension-degree",
   "source_section": "Statement",
   "quote": "For every finite field extension $K/F$, one has $[K:F]_s\\le [K:F]$.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L4",
   "source": "cor-separable-degree-of-a-simple-extension-counts-distinct-roots",
   "source_section": "Statement",
   "quote": "If $\\alpha$ is algebraic over $F$, then $[F(\\alpha):F]_s$ equals the number of\ndistinct roots of the minimal polynomial $m_\\alpha$ in any algebraic closure of\n$F$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-tower-law-for-finite-field-extensions",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq L$ be fields. If $K/F$ and $L/K$ are finite, then $L/F$ is finite and\n\n$$[L:F]=[L:K][K:F].$$",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L6",
   "source": "def-separable-elements-and-separable-extensions",
   "source_section": "Definition",
   "quote": "Let $K/F$ be a field extension. An element $\\alpha\\in K$ is **separable over\n$F$** when it is algebraic over $F$\n([[def-algebraic-and-transcendental-elements]]) and its minimal polynomial over\n$F$ ([[thm-evaluation-kernel-and-minimal-polynomial]]) is a separable polynomial\n([[def-repeated-root-and-separable-polynomial]]). The extension $K/F$ is\n**separable** when every element of $K$ is separable over $F$.",
   "uses": [
    "1.1",
    "3.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "If $K/F$ is separable, [L1] gives $K=F(\\alpha)$. The polynomial $m_\\alpha$ is separable, so its number of distinct roots equals its degree; [L4] therefore gives $[K:F]_s=[K:F]$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L4",
    "L6"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "Conversely, assume $[K:F]_s=[K:F]$ and fix $\\alpha\\in K$. Put $a=[F(\\alpha):F]_s$, $b=[F(\\alpha):F]$, $c=[K:F(\\alpha)]_s$, and $d=[K:F(\\alpha)]$. Then [L2] and [L5] give $ac=bd$, while [L3] gives $a\\le b$ and $c\\le d$.",
   "step": "1.2",
   "inputs": [
    "L2",
    "L3",
    "L5"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "The inequalities give $ac\\le bc\\le bd$; equality of the endpoints and positivity of extension degrees force $a=b$. By [L4], the minimal polynomial of $\\alpha$ therefore has as many distinct roots as its degree and is separable.",
   "step": "2.1",
   "inputs": [
    "step 1.2",
    "L4",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Since $\\alpha$ was arbitrary, every element of $K$ is separable over $F$, so [L6] makes $K/F$ separable. This proves the reverse implication.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "L6"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "Steps 1.1 and 3.1 establish the biconditional.",
   "step": "4.1",
   "inputs": [
    "step 1.1",
    "step 3.1"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For A finite extension is separable if and only if [K:F]_s=[K:F], no possibly empty indexed operation occurs; the proof instead begins from If the extension is separable, the primitive element theorem writes it as F(alpha) and the simple-extension root count gives full degree."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For A finite extension is separable if and only if [K:F]_s=[K:F], step 1.1 states: \"If $K/F$ is separable, [L1] gives $K=F(\\alpha)$. The polynomial $m_\\alpha$ is separable, so its number of distinct roots equals its degree; [L4] therefore gives $[K:F]_s=[K:F]$.\" This is the final proof check that every ordinary and separable degree factor is positive."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For A finite extension is separable if and only if [K:F]_s=[K:F], step 2.1 states: \"The inequalities give $ac\\le bc\\le bd$; equality of the endpoints and positivity of extension degrees force $a=b$. By [L4], the minimal polynomial of $\\alpha$ therefore has as many distinct roots as its degree and is separable.\" This is the final proof check that the identity extension has both degrees one."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For A finite extension is separable if and only if [K:F]_s=[K:F], step 2.1 states: \"The inequalities give $ac\\le bc\\le bd$; equality of the endpoints and positivity of extension degrees force $a=b$. By [L4], the minimal polynomial of $\\alpha$ therefore has as many distinct roots as its degree and is separable.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For A finite extension is separable if and only if [K:F]_s=[K:F], every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from If the extension is separable, the primitive element theorem writes it as F(alpha) and the simple-extension root count gives full degree."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For A finite extension is separable if and only if [K:F]_s=[K:F], step 1.1 states: \"If $K/F$ is separable, [L1] gives $K=F(\\alpha)$. The polynomial $m_\\alpha$ is separable, so its number of distinct roots equals its degree; [L4] therefore gives $[K:F]_s=[K:F]$.\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "For A finite extension is separable if and only if [K:F]_s=[K:F], step 2.1 states: \"The inequalities give $ac\\le bc\\le bd$; equality of the endpoints and positivity of extension degrees force $a=b$. By [L4], the minimal polynomial of $\\alpha$ therefore has as many distinct roots as its degree and is separable.\" This is the final proof check that a primitive element and distinct-root count give full degree."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "For A finite extension is separable if and only if [K:F]_s=[K:F], step 2.1 states: \"The inequalities give $ac\\le bc\\le bd$; equality of the endpoints and positivity of extension degrees force $a=b$. By [L4], the minimal polynomial of $\\alpha$ therefore has as many distinct roots as its degree and is separable.\" This is the final proof check that factorwise upper bounds and equality force each simple subextension to have full degree."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-separability-is-transitive

```markdown
---
id: thm-separability-is-transitive
kind: theorem
title: "Separability is transitive in towers of algebraic extensions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-finite-extension-is-separable-iff-separable-degree-is-full, thm-multiplicativity-of-separable-degree, cor-separable-degree-of-a-simple-extension-counts-distinct-roots, lem-polynomial-gcd-is-stable-under-field-extension, thm-tower-law-for-finite-field-extensions, thm-finitely-generated-algebraic-extensions-are-finite, def-separable-elements-and-separable-extensions]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $F\subseteq K\subseteq L$ be algebraic field extensions. If $K/F$ and
$L/K$ are separable, then $L/F$ is separable.

## Facts & Assumptions

**Given:** An algebraic tower $F\subseteq K\subseteq L$ with $K/F$ and $L/K$ separable, and an element $a\in L$.

[L1] A finite extension is separable exactly when its separable degree equals its ordinary degree ([[thm-finite-extension-is-separable-iff-separable-degree-is-full]]).

[L2] Separable degree is multiplicative in finite towers ([[thm-multiplicativity-of-separable-degree]]).

[L3] A simple extension has full separable degree exactly when its minimal polynomial has all roots distinct ([[cor-separable-degree-of-a-simple-extension-counts-distinct-roots]]).

[L4] Polynomial gcd is unchanged after extending the coefficient field ([[lem-polynomial-gcd-is-stable-under-field-extension]]).

[L5] Ordinary degrees multiply in finite towers ([[thm-tower-law-for-finite-field-extensions]]).

[L6] Finitely many algebraic generators produce a finite extension ([[thm-finitely-generated-algebraic-extensions-are-finite]]).

[L7] Separability is the elementwise separability of minimal polynomials ([[def-separable-elements-and-separable-extensions]]).

## Proof

**Proof technique:** direct.

1.1 Let $f\in K[x]$ be the minimal polynomial of $a$ over $K$, and let $E=F(c_0,\ldots,c_r)\subseteq K$ be generated by its coefficients. The $c_i$ are separable over $F$ by hypothesis and $E/F$ is finite by [L6]. Adjoining the $c_i$ successively, each relative minimal polynomial divides a separable minimal polynomial over $F$, so [L3], [L2], and [L5] give $[E:F]_s=[E:F]$. [L2, L3, L5, L6, L7]

1.2 The polynomial $f$ is separable over $K$ because $a$ is separable over $K$. By gcd stability [L4], it is already coprime to its derivative in $E[x]$; hence every irreducible factor over $E$, in particular the minimal polynomial of $a$ over $E$, is separable. Thus $E(a)/E$ has full separable degree by [L3]. [L3, L4, L7]

2.1 Multiplicativity [L2] and the ordinary tower law [L5] now give $[E(a):F]_s=[E(a):F]$. By [L1], $E(a)/F$ is separable, so its element $a$ is separable over $F$. [step 1.1, step 1.2, L1, L2, L5]

3.1 Since $a\in L$ was arbitrary, [L7] makes $L/F$ separable. Trivial steps of the tower are included because their degree and separable degree are both one. [step 2.1, L7] ∎

```

### Recorded proof contract for thm-separability-is-transitive

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-finite-extension-is-separable-iff-separable-degree-is-full",
   "source_section": "Statement",
   "quote": "A finite extension $K/F$ is separable if and only if\n$[K:F]_s=[K:F]$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-multiplicativity-of-separable-degree",
   "source_section": "Statement",
   "quote": "For every finite tower $F\\subseteq K\\subseteq L$,\n\n$$[L:F]_s=[L:K]_s[K:F]_s.$$",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L3",
   "source": "cor-separable-degree-of-a-simple-extension-counts-distinct-roots",
   "source_section": "Statement",
   "quote": "If $\\alpha$ is algebraic over $F$, then $[F(\\alpha):F]_s$ equals the number of\ndistinct roots of the minimal polynomial $m_\\alpha$ in any algebraic closure of\n$F$.",
   "uses": [
    "1.1",
    "1.2"
   ]
  },
  {
   "fact": "L4",
   "source": "lem-polynomial-gcd-is-stable-under-field-extension",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq E$ be a field extension and let $f,g\\in F[x]$ be not both zero. The monic gcd of $f$ and $g$ computed in $F[x]$ is also their monic gcd in $E[x]$.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-tower-law-for-finite-field-extensions",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq L$ be fields. If $K/F$ and $L/K$ are finite, then $L/F$ is finite and\n\n$$[L:F]=[L:K][K:F].$$",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L6",
   "source": "thm-finitely-generated-algebraic-extensions-are-finite",
   "source_section": "Statement",
   "quote": "If $a_1,\\ldots,a_r$ are algebraic over $F$, then $F(a_1,\\ldots,a_r)/F$ is finite.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L7",
   "source": "def-separable-elements-and-separable-extensions",
   "source_section": "Definition",
   "quote": "Let $K/F$ be a field extension. An element $\\alpha\\in K$ is **separable over\n$F$** when it is algebraic over $F$\n([[def-algebraic-and-transcendental-elements]]) and its minimal polynomial over\n$F$ ([[thm-evaluation-kernel-and-minimal-polynomial]]) is a separable polynomial\n([[def-repeated-root-and-separable-polynomial]]). The extension $K/F$ is\n**separable** when every element of $K$ is separable over $F$.",
   "uses": [
    "1.1",
    "1.2",
    "3.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Let $f\\in K[x]$ be the minimal polynomial of $a$ over $K$, and let $E=F(c_0,\\ldots,c_r)\\subseteq K$ be generated by its coefficients. The $c_i$ are separable over $F$ by hypothesis and $E/F$ is finite by [L6]. Adjoining the $c_i$ successively, each relative minimal polynomial divides a separable minimal polynomial over $F$, so [L3], [L2], and [L5] give $[E:F]_s=[E:F]$.",
   "step": "1.1",
   "inputs": [
    "L2",
    "L3",
    "L5",
    "L6",
    "L7"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "The polynomial $f$ is separable over $K$ because $a$ is separable over $K$. By gcd stability [L4], it is already coprime to its derivative in $E[x]$; hence every irreducible factor over $E$, in particular the minimal polynomial of $a$ over $E$, is separable. Thus $E(a)/E$ has full separable degree by [L3].",
   "step": "1.2",
   "inputs": [
    "L3",
    "L4",
    "L7"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Multiplicativity [L2] and the ordinary tower law [L5] now give $[E(a):F]_s=[E(a):F]$. By [L1], $E(a)/F$ is separable, so its element $a$ is separable over $F$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "step 1.2",
    "L1",
    "L2",
    "L5"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Since $a\\in L$ was arbitrary, [L7] makes $L/F$ separable. Trivial steps of the tower are included because their degree and separable degree are both one.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "L7"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "For Separability is transitive in towers of algebraic extensions, step 1.1 states: \"Let $f\\in K[x]$ be the minimal polynomial of $a$ over $K$, and let $E=F(c_0,\\ldots,c_r)\\subseteq K$ be generated by its coefficients. The $c_i$ are separable over $F$ by hypothesis and $E/F$ is finite by [L6]. Adjoining the $c_i$ successively, each relative minimal polynomial divides a separable minimal polynomial over $F$, so [L3], [L2], and [L5] give $[E:F]_s=[E:F]$.\" This is the final proof check that an empty coefficient list gives E=F."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For Separability is transitive in towers of algebraic extensions, step 1.1 states: \"Let $f\\in K[x]$ be the minimal polynomial of $a$ over $K$, and let $E=F(c_0,\\ldots,c_r)\\subseteq K$ be generated by its coefficients. The $c_i$ are separable over $F$ by hypothesis and $E/F$ is finite by [L6]. Adjoining the $c_i$ successively, each relative minimal polynomial divides a separable minimal polynomial over $F$, so [L3], [L2], and [L5] give $[E:F]_s=[E:F]$.\" This is the final proof check that r=0 requires no first coefficient field."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For Separability is transitive in towers of algebraic extensions, step 2.1 states: \"Multiplicativity [L2] and the ordinary tower law [L5] now give $[E(a):F]_s=[E(a):F]$. By [L1], $E(a)/F$ is separable, so its element $a$ is separable over $F$.\" This is the final proof check that either tower step may be the identity."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For Separability is transitive in towers of algebraic extensions, step 1.1 states: \"Let $f\\in K[x]$ be the minimal polynomial of $a$ over $K$, and let $E=F(c_0,\\ldots,c_r)\\subseteq K$ be generated by its coefficients. The $c_i$ are separable over $F$ by hypothesis and $E/F$ is finite by [L6]. Adjoining the $c_i$ successively, each relative minimal polynomial divides a separable minimal polynomial over $F$, so [L3], [L2], and [L5] give $[E:F]_s=[E:F]$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For Separability is transitive in towers of algebraic extensions, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from For L/K/F and ain L, place the finitely many coefficients of the minimal polynomial of a over K in a field E=F(c_1,ldots,c_r)subseteq K."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For Separability is transitive in towers of algebraic extensions, step 1.1 states: \"Let $f\\in K[x]$ be the minimal polynomial of $a$ over $K$, and let $E=F(c_0,\\ldots,c_r)\\subseteq K$ be generated by its coefficients. The $c_i$ are separable over $F$ by hypothesis and $E/F$ is finite by [L6]. Adjoining the $c_i$ successively, each relative minimal polynomial divides a separable minimal polynomial over $F$, so [L3], [L2], and [L5] give $[E:F]_s=[E:F]$.\" This is the final proof check that only the finite coefficient set of the chosen minimal polynomial is selected."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim Separability is transitive in towers of algebraic extensions is not a biconditional, so no forward implication is asserted; the proof begins from For L/K/F and ain L, place the finitely many coefficients of the minimal polynomial of a over K in a field E=F(c_1,ldots,c_r)subseteq K."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim Separability is transitive in towers of algebraic extensions is not a biconditional, so no reverse implication is asserted; the proof begins from For L/K/F and ain L, place the finitely many coefficients of the minimal polynomial of a over K in a field E=F(c_1,ldots,c_r)subseteq K."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-purely-inseparable-extension-characterizations

```markdown
---
id: thm-purely-inseparable-extension-characterizations
kind: theorem
title: "Pure inseparability and its conjugate, embedding, and separable-degree criteria"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-purely-inseparable-extension, thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots, thm-algebraic-embedding-extension, lem-restriction-fibres-for-embeddings-in-a-finite-tower, thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core, def-separable-degree, thm-perfect-field-characterizations, def-perfect-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $F\subseteq K\subseteq\Omega$, where $K/F$ is algebraic and $\Omega/F$ is
an algebraic closure. The following are equivalent:

1. $K/F$ is purely inseparable;
2. every $\alpha\in K$ has exactly one distinct conjugate over $F$.

If $K/F$ is finite, these are also equivalent to the inclusion
$K\hookrightarrow\Omega$ being the only $F$-embedding of $K$ into $\Omega$,
and to $[K:F]_s=1$. Assuming the Axiom of Choice, the same unique-embedding
criterion is equivalent to conditions 1 and 2 for arbitrary algebraic $K/F$. In
characteristic $p>0$, they are equivalent elementwise to the minimal polynomial
of each $\alpha$ having the form $x^{p^e}-a$, or to
$\alpha^{p^e}\in F$ for some $e\ge0$. In characteristic zero they force
$K=F$.

## Facts & Assumptions

**Given:** Fields $F\subseteq K\subseteq\Omega$, with $K/F$ algebraic and $\Omega/F$ an algebraic closure.

[L1] Pure inseparability is the elementwise $p$-power condition in characteristic $p$, and means the trivial extension in characteristic zero ([[def-purely-inseparable-extension]]).

[L2] Embeddings of $F(\alpha)$ into an algebraic closure correspond to distinct roots of the minimal polynomial ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]).

[L3] Assuming Choice, an embedding of a base field extends across every algebraic extension into an algebraically closed field ([[thm-algebraic-embedding-extension]]).

[L4] In characteristic $p$, an irreducible polynomial is uniquely $g(x^{p^e})$ with $g$ irreducible and separable ([[thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core]]).

[L5] For a finite extension, separable degree counts its embeddings into an algebraic closure ([[def-separable-degree]]).

[L6] In a finite tower, every embedding of the middle field into an algebraic closure extends to the top field ([[lem-restriction-fibres-for-embeddings-in-a-finite-tower]]).

[L7] Every field of characteristic zero is perfect ([[thm-perfect-field-characterizations]]).

[L8] Every nonconstant irreducible polynomial over a perfect field is separable ([[def-perfect-field]]).

## Proof

**Proof technique:** direct.

1.1 In characteristic $p$, if $\alpha^{p^n}=a\in F$, then the minimal polynomial of $\alpha$ divides $x^{p^n}-a=(x-\alpha)^{p^n}$ in $\Omega[x]$, so it has only the distinct root $\alpha$. Conversely, if the minimal polynomial has one distinct root, write it as $g(x^{p^e})$ by [L4]; the separable polynomial $g$ can then have only one root and must be linear, so the minimal polynomial is $x^{p^e}-a$ and $\alpha^{p^e}=a\in F$. [L1, L4, algebra]

1.2 If every element has one conjugate, [L2] shows that every $F$-embedding fixes every element, so the inclusion is the only embedding. If some $\alpha$ has a different conjugate, [L2] gives a nonidentity embedding of $F(\alpha)$ into $\Omega$. When $K/F$ is finite, [L6] extends it across the finite tower $F\subseteq F(\alpha)\subseteq K$; for arbitrary algebraic $K/F$, [L3] gives the same extension under Choice. Thus the unique-embedding criterion is equivalent in exactly the two settings stated. [L2, L3, L6]

2.1 Thus condition 1 is equivalent to condition 2 in positive characteristic. In characteristic zero [L7] and [L8] make every irreducible polynomial separable, so one distinct root forces degree one; hence condition 2 is equivalent to $K=F$, which is condition 1 by [L1]. [step 1.1, L1, L7, L8]

3.1 For finite $K/F$, [L5] says that having exactly one embedding is exactly $[K:F]_s=1$. Together with steps 2.1 and 1.2, this proves the finite equivalences; step 1.2 also proves the asserted arbitrary-extension equivalence under Choice. The trivial extension is included by $e=0$. [step 2.1, step 1.2, L5] ∎

```

### Recorded proof contract for thm-purely-inseparable-extension-characterizations

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-purely-inseparable-extension",
   "source_section": "Definition",
   "quote": "Let $K/F$ be algebraic ([[def-algebraic-and-transcendental-elements]]). If\n$\\operatorname{char}F=p>0$, the extension is **purely inseparable** when for\nevery $\\alpha\\in K$ there is $n\\in\\mathbb N$ such that\n$\\alpha^{p^n}\\in F$. The exponent $n=0$ is allowed. If\n$\\operatorname{char}F=0$, the term purely inseparable is reserved for the\ntrivial extension $K=F$.\n\nThe powers in positive characteristic are governed by the Frobenius\nendomorphism of [[thm-frobenius-endomorphism-and-finite-field-automorphism]].",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots",
   "source_section": "Statement",
   "quote": "Let $\\alpha$ be algebraic over $F$, and let $\\Omega$ be an algebraically closed\nfield containing $F$. Sending an $F$-embedding\n$\\sigma:F(\\alpha)\\to\\Omega$ to $\\sigma(\\alpha)$ is a bijection from the set of\nsuch embeddings to the set of distinct roots in $\\Omega$ of the minimal\npolynomial $m_\\alpha$. Consequently the number of embeddings is the number of\ndistinct roots of $m_\\alpha$, not the sum of their multiplicities.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-algebraic-embedding-extension",
   "source_section": "Statement",
   "quote": "Assume the Axiom of Choice. Let $K/F$ be algebraic, let $\\Omega$ be\nalgebraically closed, and let $\\sigma:F\\to\\Omega$ be a field embedding. Then\n$\\sigma$ extends to a field embedding $\\widetilde\\sigma:K\\to\\Omega$. The proof\nuses Zorn's lemma.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core",
   "source_section": "Statement",
   "quote": "Let $F$ have characteristic $p>0$ and let $f\\in F[x]$ be nonconstant and\nirreducible. There are unique $e\\in\\mathbb N$ and $g\\in F[x]$ such that\n\n$$f(x)=g(x^{p^e}),$$\n\n$g$ is irreducible and separable, and $e$ is maximal with this property. The\ncase $e=0$ occurs exactly when $f$ is separable.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "def-separable-degree",
   "source_section": "Definition",
   "quote": "Let $K/F$ be a finite field extension\n([[def-extension-degree-and-finite-extension]]) and let $\\Omega/F$ be an\nalgebraic closure. Assuming Choice, such a field exists by\n[[thm-existence-of-algebraic-closures]]. The\n**separable degree** of $K/F$ is\n\n$$[K:F]_s:=\\left|\\operatorname{Hom}_F(K,\\Omega)\\right|,$$\n\nwhere $\\operatorname{Hom}_F$ denotes the set of $F$-embeddings of\n[[def-f-homomorphisms-and-embeddings-of-field-extensions]]. This set is finite:\na finite $F$-basis generates $K$, an embedding is determined by the images of\nthose finitely many generators, and each image is among the finitely many roots\nof its minimal polynomial by\n[[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]].\nThus its cardinality is defined by [[def-finite-cardinality]]. The value is\nindependent of the chosen algebraic closure by\n[[thm-separable-degree-is-independent-of-the-algebraic-closure]].",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L6",
   "source": "lem-restriction-fibres-for-embeddings-in-a-finite-tower",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq L$ be a finite tower and let $\\Omega$ be an algebraic\nclosure of $F$. Restriction defines a surjection\n\n$$\\operatorname{Hom}_F(L,\\Omega)\\longrightarrow\\operatorname{Hom}_F(K,\\Omega).$$\n\nFor every $F$-embedding $\\sigma:K\\to\\Omega$, its fibre is nonempty and has\ncardinality $[L:K]_s$ after transporting the $K$-structure along $\\sigma$.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L7",
   "source": "thm-perfect-field-characterizations",
   "source_section": "Statement",
   "quote": "A field $F$ is perfect if and only if either $\\operatorname{char}F=0$, or\n$\\operatorname{char}F=p>0$ and the Frobenius map $a\\mapsto a^p$ is surjective.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L8",
   "source": "def-perfect-field",
   "source_section": "Definition",
   "quote": "A field $F$ ([[def-field]]) is **perfect** when every nonconstant irreducible\npolynomial in $F[x]$ is separable\n([[def-repeated-root-and-separable-polynomial]]).",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "In characteristic $p$, if $\\alpha^{p^n}=a\\in F$, then the minimal polynomial of $\\alpha$ divides $x^{p^n}-a=(x-\\alpha)^{p^n}$ in $\\Omega[x]$, so it has only the distinct root $\\alpha$. Conversely, if the minimal polynomial has one distinct root, write it as $g(x^{p^e})$ by [L4]; the separable polynomial $g$ can then have only one root and must be linear, so the minimal polynomial is $x^{p^e}-a$ and $\\alpha^{p^e}=a\\in F$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L4",
    "algebra"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "If every element has one conjugate, [L2] shows that every $F$-embedding fixes every element. If some $\\alpha$ has a different conjugate, [L2] gives a nonidentity embedding of $F(\\alpha)$; [L6] extends it when $K/F$ is finite, and [L3] extends it for arbitrary algebraic $K/F$ under Choice.",
   "step": "1.2",
   "inputs": [
    "L2",
    "L3",
    "L6"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Thus condition 1 is equivalent to condition 2 in positive characteristic. In characteristic zero [L7] and [L8] make every irreducible polynomial separable, so one distinct root forces degree one; hence condition 2 is equivalent to $K=F$, which is condition 1 by [L1].",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L1",
    "L7",
    "L8"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "For finite $K/F$, [L5] identifies unique embeddability with $[K:F]_s=1$. Steps 2.1 and 1.2 prove the finite equivalences and the arbitrary-extension embedding equivalence under Choice; the trivial extension is the $e=0$ case.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "step 1.2",
    "L5"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "No indexed family or empty product occurs; every condition is quantified elementwise."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Step 2.1 treats characteristic zero explicitly, and step 3.1 states that exponent $e=0$ includes the trivial extension."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Step 3.1 identifies the finite unique-embedding condition with separable degree one, including $K=F$."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The trivial extension is explicit in steps 2.1 and 3.1; repeated-root behavior is precisely the one-distinct-root case analyzed in step 1.1."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "All parameters are algebraic and discrete; there is no ordered or limiting endpoint."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "The algebraic closure is supplied. Step 1.2 uses the finite extension lemma [L6] without Choice and invokes [L3] only for the separately stated arbitrary-extension criterion under Choice."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "Step 1.1 proves the $p$-power condition implies one distinct conjugate; step 1.2 then proves uniqueness of embeddings."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "Step 1.1 proves one distinct conjugate implies the $p$-power condition; step 1.2 supplies the reverse embedding implication in the finite and Choice-qualified settings."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-p-bases-and-degree-in-exponent-one-purely-inseparable-extensions

```markdown
---
id: thm-p-bases-and-degree-in-exponent-one-purely-inseparable-extensions
kind: theorem
title: "A minimal generating family in a finite exponent-one purely inseparable extension is a $p$-basis and gives degree $p^r$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-p-basis-of-an-exponent-one-purely-inseparable-extension, lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power, thm-simple-algebraic-extension-quotient-power-basis-and-degree, lem-product-basis-for-a-tower-of-finite-extensions, thm-tower-law-for-finite-field-extensions]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapter 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 3"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $K/F$ be a finite exponent-one purely inseparable extension of
characteristic $p$, and let $(b_1,\ldots,b_r)$ be a minimal generating family
for $K$ over $F$. Then it is a $p$-basis, and

$$[K:F]=p^r.$$

Conversely, every $p$-basis generates $K$ over $F$. The empty family gives the
trivial extension and degree $p^0=1$.

## Facts & Assumptions

**Given:** A finite exponent-one purely inseparable extension $K/F$ and a minimal generating family $(b_1,\ldots,b_r)$.

[L1] If a constant is not a $p$th power in a characteristic-$p$ field, then $x^p-a$ is irreducible ([[lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power]]).

[L2] A simple algebraic extension has the power basis whose length is the degree of the minimal polynomial ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L3] Products of bases in a finite tower form a basis of the top field over the bottom field ([[lem-product-basis-for-a-tower-of-finite-extensions]]).

[L4] Degrees multiply in a finite tower ([[thm-tower-law-for-finite-field-extensions]]).

[L5] A $p$-basis is the restricted-monomial basis of [[def-p-basis-of-an-exponent-one-purely-inseparable-extension]].

## Proof

**Proof technique:** direct.

1.1 Put $K_j=F(b_1,\ldots,b_j)$. Minimality gives $b_j\notin K_{j-1}$, while exponent one gives $b_j^p=a_j\in F\subseteq K_{j-1}$. If $a_j=c^p$ for some $c\in K_{j-1}$, injectivity of Frobenius in $K$ would give $b_j=c$, a contradiction; hence [L1] makes $x^p-a_j$ the minimal polynomial of $b_j$ over $K_{j-1}$. [L1, algebra]

2.1 By [L2], each step $K_j/K_{j-1}$ has basis $1,b_j,\ldots,b_j^{p-1}$ and degree $p$. [step 1.1, L2]

3.1 Repeated use of [L3] gives the restricted monomials $b_1^{e_1}\cdots b_r^{e_r}$ as an $F$-basis of $K$, so the family is a $p$-basis by [L5]. Repeated use of [L4] gives $[K:F]=p^r$. [step 2.1, L3, L4, L5]

4.1 Conversely, if the restricted monomials form a basis, every element of $K$ is an $F$-linear combination of products of the $b_i$, so $K=F(b_1,\ldots,b_r)$. For $r=0$ this says $K=F$ and the degree is one. [L5, algebra] ∎

```

### Recorded proof contract for thm-p-bases-and-degree-in-exponent-one-purely-inseparable-extensions

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power",
   "source_section": "Statement",
   "quote": "Let $F$ have characteristic $p>0$, let $a\\in F$ not be a $p$th power in $F$,\nand let $n\\ge1$. Then $x^{p^n}-a$ is irreducible in $F[x]$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-simple-algebraic-extension-quotient-power-basis-and-degree",
   "source_section": "Statement",
   "quote": "Let $K/F$ be a field extension and let $a\\in K$ be algebraic with minimal\npolynomial $m_a$ of degree $n$. Evaluation induces an $F$-isomorphism\n$$F[x]/(m_a)\\cong F(a),\\qquad f+(m_a)\\longmapsto f(a).$$\nMoreover, every element of $F(a)$ has a unique expression\n$$c_0+c_1a+\\cdots+c_{n-1}a^{n-1},\\qquad c_j\\in F.$$\nThus $1,a,\\ldots,a^{n-1}$ is the **power basis**, and the **degree** of the\nsimple extension is $[F(a):F]=n$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L3",
   "source": "lem-product-basis-for-a-tower-of-finite-extensions",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq L$ be fields. If $(u_1,\\ldots,u_m)$ is an $F$-basis of $K$ and $(v_1,\\ldots,v_n)$ is a $K$-basis of $L$, then\n\n$$\\{u_iv_j:1\\le i\\le m,\\ 1\\le j\\le n\\}$$\n\nis an $F$-basis of $L$.",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-tower-law-for-finite-field-extensions",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq L$ be fields. If $K/F$ and $L/K$ are finite, then $L/F$ is finite and\n\n$$[L:F]=[L:K][K:F].$$",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L5",
   "source": "def-p-basis-of-an-exponent-one-purely-inseparable-extension",
   "source_section": "Definition",
   "quote": "Let $K/F$ be a finite purely inseparable extension of characteristic $p>0$\n([[def-purely-inseparable-extension]]) and suppose it has **exponent at most\none**, meaning $a^p\\in F$ for every $a\\in K$. A finite ordered family\n$(b_1,\\ldots,b_r)$ in $K$ is a **$p$-basis of $K/F$** when the restricted\nmonomials\n\n$$b_1^{e_1}\\cdots b_r^{e_r}\\qquad(0\\le e_i<p)$$\n\nform an $F$-basis of $K$ ([[def-linear-basis]]). For $r=0$, the sole restricted\nmonomial is the empty product $1$, so the definition gives the basis $(1)$ of\nthe trivial extension and degree one\n([[def-extension-degree-and-finite-extension]]).",
   "uses": [
    "3.1",
    "4.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Put $K_j=F(b_1,\\ldots,b_j)$. Minimality gives $b_j\\notin K_{j-1}$, while exponent one gives $b_j^p=a_j\\in F\\subseteq K_{j-1}$. If $a_j=c^p$ for some $c\\in K_{j-1}$, injectivity of Frobenius in $K$ would give $b_j=c$, a contradiction; hence [L1] makes $x^p-a_j$ the minimal polynomial of $b_j$ over $K_{j-1}$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "By [L2], each step $K_j/K_{j-1}$ has basis $1,b_j,\\ldots,b_j^{p-1}$ and degree $p$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L2"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Repeated use of [L3] gives the restricted monomials $b_1^{e_1}\\cdots b_r^{e_r}$ as an $F$-basis of $K$, so the family is a $p$-basis by [L5]. Repeated use of [L4] gives $[K:F]=p^r$.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "L3",
    "L4",
    "L5"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "Conversely, if the restricted monomials form a basis, every element of $K$ is an $F$-linear combination of products of the $b_i$, so $K=F(b_1,\\ldots,b_r)$. For $r=0$ this says $K=F$ and the degree is one.",
   "step": "4.1",
   "inputs": [
    "L5",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "For A minimal generating family in a finite exponent-one purely inseparable extension is a p-basis and gives degree p^r, step 2.1 states: \"By [L2], each step $K_j/K_{j-1}$ has basis $1,b_j,\\ldots,b_j^{p-1}$ and degree $p$.\" This is the final proof check that the empty p-basis corresponds to K=F."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For A minimal generating family in a finite exponent-one purely inseparable extension is a p-basis and gives degree p^r, step 1.1 states: \"Put $K_j=F(b_1,\\ldots,b_j)$. Minimality gives $b_j\\notin K_{j-1}$, while exponent one gives $b_j^p=a_j\\in F\\subseteq K_{j-1}$. If $a_j=c^p$ for some $c\\in K_{j-1}$, injectivity of Frobenius in $K$ would give $b_j=c$, a contradiction; hence [L1] makes $x^p-a_j$ the minimal polynomial of $b_j$ over $K_{j-1}$.\" This is the final proof check that r=0 gives p^0=1."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For A minimal generating family in a finite exponent-one purely inseparable extension is a p-basis and gives degree p^r, step 1.1 states: \"Put $K_j=F(b_1,\\ldots,b_j)$. Minimality gives $b_j\\notin K_{j-1}$, while exponent one gives $b_j^p=a_j\\in F\\subseteq K_{j-1}$. If $a_j=c^p$ for some $c\\in K_{j-1}$, injectivity of Frobenius in $K$ would give $b_j=c$, a contradiction; hence [L1] makes $x^p-a_j$ the minimal polynomial of $b_j$ over $K_{j-1}$.\" This is the final proof check that one generator gives its usual power basis."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For A minimal generating family in a finite exponent-one purely inseparable extension is a p-basis and gives degree p^r, step 1.1 states: \"Put $K_j=F(b_1,\\ldots,b_j)$. Minimality gives $b_j\\notin K_{j-1}$, while exponent one gives $b_j^p=a_j\\in F\\subseteq K_{j-1}$. If $a_j=c^p$ for some $c\\in K_{j-1}$, injectivity of Frobenius in $K$ would give $b_j=c$, a contradiction; hence [L1] makes $x^p-a_j$ the minimal polynomial of $b_j$ over $K_{j-1}$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For A minimal generating family in a finite exponent-one purely inseparable extension is a p-basis and gives degree p^r, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Adjoin a minimal generating list one element at a time."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For A minimal generating family in a finite exponent-one purely inseparable extension is a p-basis and gives degree p^r, step 2.1 states: \"By [L2], each step $K_j/K_{j-1}$ has basis $1,b_j,\\ldots,b_j^{p-1}$ and degree $p$.\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "For A minimal generating family in a finite exponent-one purely inseparable extension is a p-basis and gives degree p^r, step 3.1 states: \"Repeated use of [L3] gives the restricted monomials $b_1^{e_1}\\cdots b_r^{e_r}$ as an $F$-basis of $K$, so the family is a $p$-basis by [L5]. Repeated use of [L4] gives $[K:F]=p^r$.\" This is the final proof check that minimal generation yields independence of restricted p-monomials."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "For A minimal generating family in a finite exponent-one purely inseparable extension is a p-basis and gives degree p^r, step 2.1 states: \"By [L2], each step $K_j/K_{j-1}$ has basis $1,b_j,\\ldots,b_j^{p-1}$ and degree $p$.\" This is the final proof check that a spanning p-basis generates the extension."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: cor-finite-purely-inseparable-extensions-have-prime-power-degree

```markdown
---
id: cor-finite-purely-inseparable-extensions-have-prime-power-degree
kind: corollary
title: "A finite purely inseparable extension in characteristic $p$ has degree a power of $p$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-purely-inseparable-extension-characterizations, thm-simple-algebraic-extension-quotient-power-basis-and-degree, thm-tower-law-for-finite-field-extensions, def-extension-degree-and-finite-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

If $K/F$ is a finite purely inseparable extension of characteristic $p>0$, then
$[K:F]=p^r$ for some $r\in\mathbb N$. The trivial extension gives $r=0$.

## Facts & Assumptions

**Given:** A finite purely inseparable extension $K/F$ of characteristic $p>0$.

[L1] The minimal polynomial of each element has the form $x^{p^e}-a$ and hence has $p$-power degree ([[thm-purely-inseparable-extension-characterizations]]).

[L2] The degree of a simple algebraic extension is the degree of its minimal polynomial ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L3] Degrees multiply in a finite tower ([[thm-tower-law-for-finite-field-extensions]]).

[L4] A finite extension has a finite basis over its base ([[def-extension-degree-and-finite-extension]]).

## Proof

**Proof technique:** direct.

1.1 Choose a finite basis using [L4]; its elements generate $K$, so adjoining them successively gives a finite tower of simple extensions. [L4, choose]

2.1 At each nontrivial step, [L1] and [L2] make the degree a power of $p$. The tower law [L3] makes the product, and hence $[K:F]$, a power of $p$. [step 1.1, L1, L2, L3]

3.1 If $K=F$, the empty tower has degree $1=p^0$, so the boundary case is included. [L3] ∎

```

### Recorded proof contract for cor-finite-purely-inseparable-extensions-have-prime-power-degree

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-purely-inseparable-extension-characterizations",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq\\Omega$, where $K/F$ is algebraic and $\\Omega/F$ is\nan algebraic closure. The following are equivalent:\n\n1. $K/F$ is purely inseparable;\n2. every $\\alpha\\in K$ has exactly one distinct conjugate over $F$.\n\nIf $K/F$ is finite, these are also equivalent to the inclusion\n$K\\hookrightarrow\\Omega$ being the only $F$-embedding of $K$ into $\\Omega$,\nand to $[K:F]_s=1$. Assuming the Axiom of Choice, the same unique-embedding\ncriterion is equivalent to conditions 1 and 2 for arbitrary algebraic $K/F$. In\ncharacteristic $p>0$, they are equivalent elementwise to the minimal polynomial\nof each $\\alpha$ having the form $x^{p^e}-a$, or to\n$\\alpha^{p^e}\\in F$ for some $e\\ge0$. In characteristic zero they force\n$K=F$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-simple-algebraic-extension-quotient-power-basis-and-degree",
   "source_section": "Statement",
   "quote": "Let $K/F$ be a field extension and let $a\\in K$ be algebraic with minimal\npolynomial $m_a$ of degree $n$. Evaluation induces an $F$-isomorphism\n$$F[x]/(m_a)\\cong F(a),\\qquad f+(m_a)\\longmapsto f(a).$$\nMoreover, every element of $F(a)$ has a unique expression\n$$c_0+c_1a+\\cdots+c_{n-1}a^{n-1},\\qquad c_j\\in F.$$\nThus $1,a,\\ldots,a^{n-1}$ is the **power basis**, and the **degree** of the\nsimple extension is $[F(a):F]=n$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-tower-law-for-finite-field-extensions",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq L$ be fields. If $K/F$ and $L/K$ are finite, then $L/F$ is finite and\n\n$$[L:F]=[L:K][K:F].$$",
   "uses": [
    "2.1",
    "3.1"
   ]
  },
  {
   "fact": "L4",
   "source": "def-extension-degree-and-finite-extension",
   "source_section": "Definition",
   "quote": "Let $K/F$ be a field extension. Scalar multiplication by $F\\subseteq K$, together with addition in $K$, makes $K$ an $F$-vector space. The extension is **finite** when this vector space is finite-dimensional. In that case its **degree** is\n\n$$[K:F]:=\\dim_FK.$$\n\nNo numerical degree is assigned here to an infinite-dimensional extension.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Choose a finite basis using [L4]; its elements generate $K$, so adjoining them successively gives a finite tower of simple extensions.",
   "step": "1.1",
   "inputs": [
    "L4",
    "choose"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "At each nontrivial step, [L1] and [L2] make the degree a power of $p$. The tower law [L3] makes the product, and hence $[K:F]$, a power of $p$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L1",
    "L2",
    "L3"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "If $K=F$, the empty tower has degree $1=p^0$, so the boundary case is included.",
   "step": "3.1",
   "inputs": [
    "L3"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "For A finite purely inseparable extension in characteristic p has degree a power of p, step 1.1 states: \"Choose a finite basis using [L4]; its elements generate $K$, so adjoining them successively gives a finite tower of simple extensions.\" This is the final proof check that an empty generating list gives K=F."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For A finite purely inseparable extension in characteristic p has degree a power of p, step 3.1 states: \"If $K=F$, the empty tower has degree $1=p^0$, so the boundary case is included.\" This is the final proof check that the empty tower has degree p^0."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For A finite purely inseparable extension in characteristic p has degree a power of p, step 2.1 states: \"At each nontrivial step, [L1] and [L2] make the degree a power of $p$. The tower law [L3] makes the product, and hence $[K:F]$, a power of $p$.\" This is the final proof check that degree one is a p-power."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For A finite purely inseparable extension in characteristic p has degree a power of p, step 3.1 states: \"If $K=F$, the empty tower has degree $1=p^0$, so the boundary case is included.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For A finite purely inseparable extension in characteristic p has degree a power of p, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Choose finitely many generators and adjoin them one at a time."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For A finite purely inseparable extension in characteristic p has degree a power of p, step 1.1 states: \"Choose a finite basis using [L4]; its elements generate $K$, so adjoining them successively gives a finite tower of simple extensions.\" This is the final proof check that a finite vector-space basis supplies a finite field-generating list."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim A finite purely inseparable extension in characteristic p has degree a power of p is not a biconditional, so no forward implication is asserted; the proof begins from Choose finitely many generators and adjoin them one at a time."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim A finite purely inseparable extension in characteristic p has degree a power of p is not a biconditional, so no reverse implication is asserted; the proof begins from Choose finitely many generators and adjoin them one at a time."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: cor-purely-inseparable-extensions-are-normal

```markdown
---
id: cor-purely-inseparable-extensions-are-normal
kind: corollary
title: "Every purely inseparable algebraic extension is normal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-purely-inseparable-extension-characterizations, def-normal-algebraic-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "The Stacks Project, Section 9.15: Normal extensions"
      url: "https://stacks.math.columbia.edu/tag/09HL"
pipeline_run: null
---

## Statement

Every purely inseparable algebraic extension is normal.

## Facts & Assumptions

**Given:** A purely inseparable algebraic extension $K/F$ and an element $\alpha\in K$.

[L1] In positive characteristic, the minimal polynomial of $\alpha$ has the form $x^{p^e}-a$; in characteristic zero the extension is trivial ([[thm-purely-inseparable-extension-characterizations]]).

[L2] An algebraic extension is normal exactly when the minimal polynomial over the base of every one of its elements splits in the extension ([[def-normal-algebraic-extension]]).

## Proof

**Proof technique:** direct.

1.1 In characteristic $p$, [L1] gives $m_\alpha(x)=x^{p^e}-a=(x-\alpha)^{p^e}$ in $K[x]$, so the minimal polynomial splits in $K$. [L1, algebra]

1.2 In characteristic zero, [L1] gives $K=F$, which is normal. [L1, L2]

2.1 Thus every minimal polynomial required by [L2] splits in $K$, and $K/F$ is normal. [step 1.1, step 1.2, L2] ∎

```

### Recorded proof contract for cor-purely-inseparable-extensions-are-normal

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-purely-inseparable-extension-characterizations",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq\\Omega$, where $K/F$ is algebraic and $\\Omega/F$ is\nan algebraic closure. The following are equivalent:\n\n1. $K/F$ is purely inseparable;\n2. every $\\alpha\\in K$ has exactly one distinct conjugate over $F$.\n\nIf $K/F$ is finite, these are also equivalent to the inclusion\n$K\\hookrightarrow\\Omega$ being the only $F$-embedding of $K$ into $\\Omega$,\nand to $[K:F]_s=1$. Assuming the Axiom of Choice, the same unique-embedding\ncriterion is equivalent to conditions 1 and 2 for arbitrary algebraic $K/F$. In\ncharacteristic $p>0$, they are equivalent elementwise to the minimal polynomial\nof each $\\alpha$ having the form $x^{p^e}-a$, or to\n$\\alpha^{p^e}\\in F$ for some $e\\ge0$. In characteristic zero they force\n$K=F$.",
   "uses": [
    "1.1",
    "1.2"
   ]
  },
  {
   "fact": "L2",
   "source": "def-normal-algebraic-extension",
   "source_section": "Definition",
   "quote": "An algebraic field extension $E/F$ is **normal** if, for every $\\alpha\\in E$, the minimal polynomial of $\\alpha$ over $F$ splits over $E$.\n\nEquivalently, every irreducible polynomial $p\\in F[x]$ that has one root in $E$ splits over $E$. Indeed, the monic associate of such a $p$ is the minimal polynomial of any one of its roots in $E$, and multiplying by a nonzero scalar does not change whether a polynomial splits.",
   "uses": [
    "1.2",
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "In characteristic $p$, [L1] gives $m_\\alpha(x)=x^{p^e}-a=(x-\\alpha)^{p^e}$ in $K[x]$, so the minimal polynomial splits in $K$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "algebra"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "In characteristic zero, [L1] gives $K=F$, which is normal.",
   "step": "1.2",
   "inputs": [
    "L1",
    "L2"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Thus every minimal polynomial required by [L2] splits in $K$, and $K/F$ is normal.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "step 1.2",
    "L2"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For Every purely inseparable algebraic extension is normal, no possibly empty indexed operation occurs; the proof instead begins from The minimal polynomial of each element is x^{p^e}-a=(x-alpha)^{p^e} in the extension, so it splits there."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For Every purely inseparable algebraic extension is normal, the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from The minimal polynomial of each element is x^{p^e}-a=(x-alpha)^{p^e} in the extension, so it splits there."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "For Every purely inseparable algebraic extension is normal, no free numerical parameter has a separate value-one branch; the proof instead begins from The minimal polynomial of each element is x^{p^e}-a=(x-alpha)^{p^e} in the extension, so it splits there."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For Every purely inseparable algebraic extension is normal, step 1.1 states: \"In characteristic $p$, [L1] gives $m_\\alpha(x)=x^{p^e}-a=(x-\\alpha)^{p^e}$ in $K[x]$, so the minimal polynomial splits in $K$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For Every purely inseparable algebraic extension is normal, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from The minimal polynomial of each element is x^{p^e}-a=(x-alpha)^{p^e} in the extension, so it splits there."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "For Every purely inseparable algebraic extension is normal, only supplied data are used and no unproved nonempty selection occurs; the proof begins from The minimal polynomial of each element is x^{p^e}-a=(x-alpha)^{p^e} in the extension, so it splits there."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim Every purely inseparable algebraic extension is normal is not a biconditional, so no forward implication is asserted; the proof begins from The minimal polynomial of each element is x^{p^e}-a=(x-alpha)^{p^e} in the extension, so it splits there."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim Every purely inseparable algebraic extension is normal is not a biconditional, so no reverse implication is asserted; the proof begins from The minimal polynomial of each element is x^{p^e}-a=(x-alpha)^{p^e} in the extension, so it splits there."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure

```markdown
---
id: thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure
kind: theorem
title: "An algebraic extension is purely inseparable over its separable closure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separable-closure-in-an-algebraic-extension, thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core, def-purely-inseparable-extension, thm-perfect-field-characterizations, def-perfect-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $K/F$ be algebraic and let $K_s$ be the separable closure of $F$ in $K$.
Then $K/K_s$ is purely inseparable.

## Facts & Assumptions

**Given:** An algebraic extension $K/F$, its separable closure $K_s$, and an element $\alpha\in K$.

[L1] The field $K_s$ consists exactly of the elements of $K$ separable over $F$ ([[def-separable-closure-in-an-algebraic-extension]]).

[L2] In characteristic $p$, the minimal polynomial of $\alpha$ has a unique form $g(x^{p^e})$ with $g$ irreducible and separable ([[thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core]]).

[L3] Pure inseparability is the elementwise $p$-power condition, with only the trivial case in characteristic zero ([[def-purely-inseparable-extension]]).

[L4] Every field of characteristic zero is perfect ([[thm-perfect-field-characterizations]]).

[L5] In a perfect field, every nonconstant irreducible polynomial is separable ([[def-perfect-field]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\operatorname{char}F=p>0$ and write the minimal polynomial of $\alpha$ as $g(x^{p^e})$ using [L2]. Then $g(\alpha^{p^e})=0$, and the minimal polynomial over $F$ of $\alpha^{p^e}$ divides the separable polynomial $g$, so $\alpha^{p^e}$ is separable over $F$ and belongs to $K_s$ by [L1]. [L1, L2, algebra]

2.1 Thus every element of $K$ has a suitable $p$-power in $K_s$, so [L3] makes $K/K_s$ purely inseparable. [step 1.1, L3]

3.1 In characteristic zero [L4] and [L5] make every irreducible polynomial separable, so $K_s=K$ by [L1]; the extension $K/K_s$ is trivial and purely inseparable by [L3]. [L1, L3, L4, L5] ∎

```

### Recorded proof contract for thm-algebraic-extension-is-purely-inseparable-over-its-separable-closure

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-separable-closure-in-an-algebraic-extension",
   "source_section": "Definition",
   "quote": "Let $K/F$ be algebraic. The **separable closure of $F$ in $K$** is\n\n$$K_s:=\\{a\\in K:a\\text{ is separable over }F\\}.$$\n\nThis is an intermediate field by\n[[thm-separable-elements-form-an-intermediate-field]]. It is the largest\nintermediate extension of $K/F$ that is separable over $F$: any separable\nintermediate field consists entirely of elements in the displayed set.",
   "uses": [
    "1.1",
    "3.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core",
   "source_section": "Statement",
   "quote": "Let $F$ have characteristic $p>0$ and let $f\\in F[x]$ be nonconstant and\nirreducible. There are unique $e\\in\\mathbb N$ and $g\\in F[x]$ such that\n\n$$f(x)=g(x^{p^e}),$$\n\n$g$ is irreducible and separable, and $e$ is maximal with this property. The\ncase $e=0$ occurs exactly when $f$ is separable.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-purely-inseparable-extension",
   "source_section": "Definition",
   "quote": "Let $K/F$ be algebraic ([[def-algebraic-and-transcendental-elements]]). If\n$\\operatorname{char}F=p>0$, the extension is **purely inseparable** when for\nevery $\\alpha\\in K$ there is $n\\in\\mathbb N$ such that\n$\\alpha^{p^n}\\in F$. The exponent $n=0$ is allowed. If\n$\\operatorname{char}F=0$, the term purely inseparable is reserved for the\ntrivial extension $K=F$.\n\nThe powers in positive characteristic are governed by the Frobenius\nendomorphism of [[thm-frobenius-endomorphism-and-finite-field-automorphism]].",
   "uses": [
    "2.1",
    "3.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-perfect-field-characterizations",
   "source_section": "Statement",
   "quote": "A field $F$ is perfect if and only if either $\\operatorname{char}F=0$, or\n$\\operatorname{char}F=p>0$ and the Frobenius map $a\\mapsto a^p$ is surjective.",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L5",
   "source": "def-perfect-field",
   "source_section": "Definition",
   "quote": "A field $F$ ([[def-field]]) is **perfect** when every nonconstant irreducible\npolynomial in $F[x]$ is separable\n([[def-repeated-root-and-separable-polynomial]]).",
   "uses": [
    "3.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Suppose $\\operatorname{char}F=p>0$ and write the minimal polynomial of $\\alpha$ as $g(x^{p^e})$ using [L2]. Then $g(\\alpha^{p^e})=0$, and the minimal polynomial over $F$ of $\\alpha^{p^e}$ divides the separable polynomial $g$, so $\\alpha^{p^e}$ is separable over $F$ and belongs to $K_s$ by [L1].",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Thus every element of $K$ has a suitable $p$-power in $K_s$, so [L3] makes $K/K_s$ purely inseparable.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L3"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "In characteristic zero [L4] and [L5] make every irreducible polynomial separable, so $K_s=K$ by [L1]; the extension $K/K_s$ is trivial and purely inseparable by [L3].",
   "step": "3.1",
   "inputs": [
    "L1",
    "L3",
    "L4",
    "L5"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For An algebraic extension is purely inseparable over its separable closure, no possibly empty indexed operation occurs; the proof instead begins from For ain K, the separable core of its minimal polynomial over F evaluates at a suitable p^eth power of a, placing that power in K_s."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For An algebraic extension is purely inseparable over its separable closure, step 2.1 states: \"Thus every element of $K$ has a suitable $p$-power in $K_s$, so [L3] makes $K/K_s$ purely inseparable.\" This is the final proof check that every zero exponent, index, degree, coefficient, or element is either handled or excluded by the exact hypotheses."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "For An algebraic extension is purely inseparable over its separable closure, no free numerical parameter has a separate value-one branch; the proof instead begins from For ain K, the separable core of its minimal polynomial over F evaluates at a suitable p^eth power of a, placing that power in K_s."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Step 3.1 uses [L4] and [L5] to prove $K_s=K$ in characteristic zero, then invokes the explicit trivial-extension clause of [L3]."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For An algebraic extension is purely inseparable over its separable closure, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from For ain K, the separable core of its minimal polynomial over F evaluates at a suitable p^eth power of a, placing that power in K_s."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "For An algebraic extension is purely inseparable over its separable closure, only supplied data are used and no unproved nonempty selection occurs; the proof begins from For ain K, the separable core of its minimal polynomial over F evaluates at a suitable p^eth power of a, placing that power in K_s."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim An algebraic extension is purely inseparable over its separable closure is not a biconditional, so no forward implication is asserted; the proof begins from For ain K, the separable core of its minimal polynomial over F evaluates at a suitable p^eth power of a, placing that power in K_s."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim An algebraic extension is purely inseparable over its separable closure is not a biconditional, so no reverse implication is asserted; the proof begins from For ain K, the separable core of its minimal polynomial over F evaluates at a suitable p^eth power of a, placing that power in K_s."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, in full

## DEPENDENCY: thm-primitive-element-theorem-for-finite-separable-extensions

```markdown
---
id: thm-primitive-element-theorem-for-finite-separable-extensions
kind: theorem
title: "A finite extension generated by elements all but possibly one of which are separable is simple"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separable-elements-and-separable-extensions, lem-polynomial-gcd-is-stable-under-field-extension, cor-splitting-fields-exist-for-finite-families, cor-finite-extensions-of-finite-fields-are-simple, thm-finitely-generated-algebraic-extensions-are-finite]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Theorem 5.1"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "P. L. Clark, Field Theory, Chapter 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: null
---

## Statement

Let $E=F(\alpha_1,\ldots,\alpha_r)$ be a finite extension. If all but possibly
one of the generators are separable over $F$, then $E/F$ is simple. In
particular, every finite separable extension is simple.

## Facts & Assumptions

**Given:** A finite extension $E=F(\alpha_1,\ldots,\alpha_r)$ in which all but possibly one generator are separable over $F$.

[L1] A polynomial gcd computed over a field is unchanged after extending the coefficient field ([[lem-polynomial-gcd-is-stable-under-field-extension]]).

[L2] A finite family of nonzero polynomials has a common splitting field ([[cor-splitting-fields-exist-for-finite-families]]).

[L3] Every finite extension of a finite field is simple ([[cor-finite-extensions-of-finite-fields-are-simple]]).

[L4] A field generated by finitely many algebraic elements is a finite extension ([[thm-finitely-generated-algebraic-extensions-are-finite]]).

[L5] An element is separable when its minimal polynomial has no repeated root ([[def-separable-elements-and-separable-extensions]]).

## Proof

**Proof technique:** direct.

1.1 For $r=0$, one has $E=F=F(0)$, and for $r=1$ the displayed presentation is already simple. Assume $r\ge2$. It is enough to combine two generators: if $F(\alpha,\beta)=F(\gamma)$ whenever $\beta$ is separable, repeated combination leaves at most the originally exceptional generator as the first entry and a separable generator as the second. Finiteness of each intermediate extension follows from [L4]. [given, L4, L5]

1.2 If $F$ is finite, the two-generator extension is simple by [L3]. [L3]

1.3 Suppose $F$ is infinite. In a common splitting field from [L2], list the distinct conjugates $\alpha_i$ of $\alpha$ and the pairwise distinct conjugates $\beta_j$ of the separable element $\beta$. Choose a nonzero $c\in F$ avoiding the finitely many values $(\alpha_1-\alpha_i)/(\beta_j-\beta_1)$ with $\beta_j\ne\beta_1$, and put $\gamma=\alpha+c\beta$. [L2, L5, choose]

2.1 In $F(\gamma)[x]$, the minimal polynomial of $\alpha$ and the translated minimal polynomial of $\beta$ have $\alpha$ as a common root. By the choice of $c$, any common root would give $\alpha_i+c\beta_j=\alpha+c\beta$ and hence must be $\alpha$; [L1] therefore makes their monic gcd $x-\alpha$. Thus $\alpha\in F(\gamma)$ and then $\beta=(\gamma-\alpha)/c\in F(\gamma)$. [step 1.3, L1, algebra]

3.1 Hence $F(\alpha,\beta)=F(\gamma)$ over either a finite or an infinite base. Iterating step 1.1 proves the theorem, and when every generator is separable it gives the usual finite separable primitive-element theorem. [step 1.1, step 1.2, step 2.1] ∎

```

## DEPENDENCY: thm-multiplicativity-of-separable-degree

```markdown
---
id: thm-multiplicativity-of-separable-degree
kind: theorem
title: "Separable degree is multiplicative in finite towers: $[L:F]_s=[L:K]_s[K:F]_s$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separable-degree, lem-restriction-fibres-for-embeddings-in-a-finite-tower]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

For every finite tower $F\subseteq K\subseteq L$,

$$[L:F]_s=[L:K]_s[K:F]_s.$$

## Facts & Assumptions

**Given:** A finite tower $F\subseteq K\subseteq L$ and an algebraic closure $\Omega/F$.

[L1] Separable degree counts embeddings into an algebraic closure ([[def-separable-degree]]).

[L2] Restriction from $F$-embeddings of $L$ to $F$-embeddings of $K$ is surjective, and every fibre has cardinality $[L:K]_s$ ([[lem-restriction-fibres-for-embeddings-in-a-finite-tower]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the finite set $\operatorname{Hom}_F(L,\Omega)$ is the disjoint union of the restriction fibres indexed by $\operatorname{Hom}_F(K,\Omega)$. [L2]

2.1 There are $[K:F]_s$ fibres by [L1], and each has $[L:K]_s$ elements by [L2]. Counting the disjoint union gives the displayed product. [step 1.1, L1, L2, algebra] ∎

```

## DEPENDENCY: cor-separable-degree-is-at-most-extension-degree

```markdown
---
id: cor-separable-degree-is-at-most-extension-degree
kind: corollary
title: "For a finite extension, $[K:F]_s\\le [K:F]$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-multiplicativity-of-separable-degree, thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots, thm-tower-law-for-finite-field-extensions, def-extension-degree-and-finite-extension]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

For every finite field extension $K/F$, one has $[K:F]_s\le [K:F]$.

## Facts & Assumptions

**Given:** A finite extension $K/F$.

[L1] Separable degree is multiplicative in finite towers ([[thm-multiplicativity-of-separable-degree]]).

[L2] Embeddings of a simple algebraic extension correspond to the distinct roots of its minimal polynomial ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]).

[L3] Ordinary extension degrees multiply in finite towers ([[thm-tower-law-for-finite-field-extensions]]).

[L4] A finite extension has a finite basis over its base ([[def-extension-degree-and-finite-extension]]).

## Proof

**Proof technique:** direct.

1.1 Choose a finite $F$-basis of $K$ by [L4]; its elements generate $K$, so adjoining them successively gives a finite tower of simple extensions from $F$ to $K$. [L4, choose]

1.2 At each simple step, [L2] counts embeddings by distinct roots of a minimal polynomial, so its separable degree is at most the degree of that polynomial, which is the ordinary degree of the step. [L2]

2.1 Multiplying the inequalities in step 1.2 and using [L1] and [L3] for the two tower products gives $[K:F]_s\le[K:F]$. [step 1.1, step 1.2, L1, L3, algebra] ∎

```

## DEPENDENCY: cor-separable-degree-of-a-simple-extension-counts-distinct-roots

```markdown
---
id: cor-separable-degree-of-a-simple-extension-counts-distinct-roots
kind: corollary
title: "The separable degree of $F(\\alpha)/F$ is the number of distinct roots of $m_{\\alpha}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separable-degree, thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots, thm-separable-degree-is-independent-of-the-algebraic-closure]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

If $\alpha$ is algebraic over $F$, then $[F(\alpha):F]_s$ equals the number of
distinct roots of the minimal polynomial $m_\alpha$ in any algebraic closure of
$F$.

## Facts & Assumptions

**Given:** An algebraic element $\alpha$ over $F$ and an algebraic closure $\Omega/F$.

[L1] Separable degree counts $F$-embeddings into an algebraic closure ([[def-separable-degree]]).

[L2] Such embeddings of $F(\alpha)$ correspond bijectively to the distinct roots of $m_\alpha$ ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]).

[L3] The embedding count is independent of the chosen algebraic closure ([[thm-separable-degree-is-independent-of-the-algebraic-closure]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], the embedding set counted in [L1] is in bijection with the distinct-root set of $m_\alpha$ in $\Omega$. [L1, L2]

2.1 Taking finite cardinalities gives the assertion, and [L3] removes dependence on $\Omega$. [step 1.1, L3] ∎

```

## DEPENDENCY: thm-tower-law-for-finite-field-extensions

```markdown
---
id: thm-tower-law-for-finite-field-extensions
kind: theorem
title: "Tower law for finite extensions: $[L:F]=[L:K][K:F]$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-product-basis-for-a-tower-of-finite-extensions, def-extension-degree-and-finite-extension]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 1"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Statement

Let $F\subseteq K\subseteq L$ be fields. If $K/F$ and $L/K$ are finite, then $L/F$ is finite and

$$[L:F]=[L:K][K:F].$$

## Facts & Assumptions

**Given:** Finite extensions $K/F$ and $L/K$.

[L1] Products of an $F$-basis of $K$ and a $K$-basis of $L$ form an $F$-basis of $L$ ([[lem-product-basis-for-a-tower-of-finite-extensions]]).

[L2] Extension degree is the size of a finite basis ([[def-extension-degree-and-finite-extension]]).

## Proof

**Proof technique:** direct.

1.1 Choose bases of sizes $m=[K:F]$ and $n=[L:K]$. [given, L2, choose]

2.1 By [L1], their $mn$ pairwise products form an $F$-basis of $L$. [step 1.1, L1]

3.1 Hence $L/F$ is finite and [L2] gives $[L:F]=mn=[L:K][K:F]$. [step 2.1, L2, algebra] ∎

```

## DEPENDENCY: def-separable-elements-and-separable-extensions

```markdown
---
id: def-separable-elements-and-separable-extensions
kind: definition
title: "Separable algebraic elements and separable extensions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-repeated-root-and-separable-polynomial, thm-evaluation-kernel-and-minimal-polynomial, def-algebraic-and-transcendental-elements]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 2, 3, and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Definition

Let $K/F$ be a field extension. An element $\alpha\in K$ is **separable over
$F$** when it is algebraic over $F$
([[def-algebraic-and-transcendental-elements]]) and its minimal polynomial over
$F$ ([[thm-evaluation-kernel-and-minimal-polynomial]]) is a separable polynomial
([[def-repeated-root-and-separable-polynomial]]). The extension $K/F$ is
**separable** when every element of $K$ is separable over $F$.

```

## DEPENDENCY: lem-polynomial-gcd-is-stable-under-field-extension

```markdown
---
id: lem-polynomial-gcd-is-stable-under-field-extension
kind: lemma
title: 'The monic gcd of two base-field polynomials is unchanged after extending the coefficient field'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-monic-greatest-common-divisor-of-polynomials, thm-bezout-identity-for-polynomials, def-subfield, thm-universal-property-of-a-polynomial-ring]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Brian Conrad, Differential Criterion and Primitivity, Lemma 1.1'
      url: 'https://math.stanford.edu/~conrad/210BPage/handouts/sepfield.pdf'
pipeline_run: null
---

## Statement

Let $F\subseteq E$ be a field extension and let $f,g\in F[x]$ be not both zero. The monic gcd of $f$ and $g$ computed in $F[x]$ is also their monic gcd in $E[x]$.

## Facts & Assumptions

**Given:** A subfield $F\subseteq E$ and polynomials $f,g\in F[x]$ not both zero.

[L1] The monic gcd is the unique monic common divisor divisible by every common divisor ([[def-monic-greatest-common-divisor-of-polynomials]]).

[L2] If $d=\gcd(f,g)$ in $F[x]$, then $d=Af+Bg$ for some $A,B\in F[x]$ ([[thm-bezout-identity-for-polynomials]]).

[L3] A subfield has the same zero, one, operations, and inverses as the ambient field ([[def-subfield]]).

[L4] A coefficient inclusion extends uniquely to a ring homomorphism of polynomial rings ([[thm-universal-property-of-a-polynomial-ring]]).

## Proof

**Proof technique:** direct.

1.1 Let $d$ be the monic gcd in $F[x]$; it divides $f,g$ there and hence in $E[x]$ under [L4], while [L2] remains the identity $d=Af+Bg$ in $E[x]$ by [L3] and [L4]. [given, L1, L2, L3, L4]

2.1 Every common divisor of $f,g$ in $E[x]$ divides the right side of the Bézout identity and hence divides $d$; since $d$ is monic, [L1] identifies it as the monic gcd computed in $E[x]$. [step 1.1, L1, L2] ∎

```

## DEPENDENCY: thm-finitely-generated-algebraic-extensions-are-finite

```markdown
---
id: thm-finitely-generated-algebraic-extensions-are-finite
kind: theorem
title: "An extension generated by finitely many algebraic elements is finite"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-finitely-generated-field-extension, cor-element-algebraic-iff-simple-extension-finite, thm-tower-law-for-finite-field-extensions, def-algebraic-and-transcendental-elements]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 1"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Statement

If $a_1,\ldots,a_r$ are algebraic over $F$, then $F(a_1,\ldots,a_r)/F$ is finite.

## Facts & Assumptions

**Given:** A field extension containing elements $a_1,\ldots,a_r$ algebraic over $F$.

[L1] The field $F(a_1,\ldots,a_r)$ is obtained by adjoining the finite list of generators ([[def-finitely-generated-field-extension]]).

[L2] An algebraic element generates a finite simple extension ([[cor-element-algebraic-iff-simple-extension-finite]]).

[L3] Degrees multiply in a finite tower ([[thm-tower-law-for-finite-field-extensions]]).

[L4] An element algebraic over $F$ satisfies a nonzero polynomial in $F[t]$ ([[def-algebraic-and-transcendental-elements]]).

## Proof

**Proof technique:** direct.

1.1 Put $F_0=F$ and $F_i=F(a_1,\ldots,a_i)$ for $1\le i\le r$. By [L4], the nonzero polynomial over $F$ satisfied by $a_i$ also belongs to $F_{i-1}[t]$, so $a_i$ is algebraic over $F_{i-1}$. Thus [L2] makes $F_i/F_{i-1}$ finite. [given, L1, L2, L4]

2.1 Repeated application of [L3] makes $F_r/F$ finite, with degree equal to the product of the simple-step degrees. [step 1.1, L3]

3.1 By [L1], $F_r=F(a_1,\ldots,a_r)$. If $r=0$, this is $F/F$ of degree one, so the boundary case also holds. [step 2.1, L1] ∎

```

## DEPENDENCY: def-purely-inseparable-extension

```markdown
---
id: def-purely-inseparable-extension
kind: definition
title: "Purely inseparable algebraic extensions"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-algebraic-and-transcendental-elements, thm-frobenius-endomorphism-and-finite-field-automorphism]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Definition

Let $K/F$ be algebraic ([[def-algebraic-and-transcendental-elements]]). If
$\operatorname{char}F=p>0$, the extension is **purely inseparable** when for
every $\alpha\in K$ there is $n\in\mathbb N$ such that
$\alpha^{p^n}\in F$. The exponent $n=0$ is allowed. If
$\operatorname{char}F=0$, the term purely inseparable is reserved for the
trivial extension $K=F$.

The powers in positive characteristic are governed by the Frobenius
endomorphism of [[thm-frobenius-endomorphism-and-finite-field-automorphism]].

```

## DEPENDENCY: thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots

```markdown
---
id: thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots
kind: theorem
title: "$F$-embeddings of $F(\\alpha)$ into an algebraically closed field correspond to the distinct roots of $m_{\\alpha}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-base-field-embeddings-carry-elements-to-conjugates, thm-universal-property-of-adjoining-an-irreducible-root, def-algebraically-closed-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 2, 3, and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $\alpha$ be algebraic over $F$, and let $\Omega$ be an algebraically closed
field containing $F$. Sending an $F$-embedding
$\sigma:F(\alpha)\to\Omega$ to $\sigma(\alpha)$ is a bijection from the set of
such embeddings to the set of distinct roots in $\Omega$ of the minimal
polynomial $m_\alpha$. Consequently the number of embeddings is the number of
distinct roots of $m_\alpha$, not the sum of their multiplicities.

## Facts & Assumptions

**Given:** An algebraic element $\alpha$ over $F$, its minimal polynomial $m_\alpha$, and an algebraically closed overfield $\Omega$ of $F$.

[L1] An $F$-embedding carries an algebraic element to a conjugate root of its minimal polynomial ([[prop-base-field-embeddings-carry-elements-to-conjugates]]).

[L2] For a monic irreducible polynomial, every chosen root in an extension induces a unique homomorphism from the quotient adjoining that root ([[thm-universal-property-of-adjoining-an-irreducible-root]]).

[L3] Every nonconstant polynomial over an algebraically closed field has a root there ([[def-algebraically-closed-field]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the image $\sigma(\alpha)$ of every $F$-embedding is a root of $m_\alpha$ in $\Omega$. [L1]

1.2 Conversely, if $\beta\in\Omega$ is a root of $m_\alpha$, [L2] applied to the two realizations of $F[x]/(m_\alpha)$ gives a unique $F$-embedding $F(\alpha)\to\Omega$ with $\alpha\mapsto\beta$. [L2]

2.1 The constructions in steps 1.1 and 1.2 are inverse because an $F$-homomorphism on $F(\alpha)$ is determined by the image of $\alpha$. [step 1.1, step 1.2]

3.1 The polynomial $m_\alpha$ splits in $\Omega$ by repeated use of [L3], and the bijection indexes embeddings by its distinct roots, so repeated roots are counted once. [step 2.1, L3] ∎

```

## DEPENDENCY: thm-algebraic-embedding-extension

```markdown
---
id: thm-algebraic-embedding-extension
kind: theorem
title: "Assuming Choice, a base-field embedding extends across every algebraic extension"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-zorn, thm-universal-property-of-adjoining-an-irreducible-root, lem-polynomials-and-roots-transport-along-field-isomorphisms, def-f-homomorphisms-and-embeddings-of-field-extensions, def-algebraically-closed-field]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "P. L. Clark, Field Theory, Chapter 4"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Let $K/F$ be algebraic, let $\Omega$ be
algebraically closed, and let $\sigma:F\to\Omega$ be a field embedding. Then
$\sigma$ extends to a field embedding $\widetilde\sigma:K\to\Omega$. The proof
uses Zorn's lemma.

## Facts & Assumptions

**Given:** The Axiom of Choice, an algebraic extension $K/F$, an algebraically closed field $\Omega$, and an embedding $\sigma:F\to\Omega$.

[L1] Assuming Choice, a nonempty poset in which every chain has an upper bound has a maximal element ([[thm-zorn]]).

[L2] A chosen root of an irreducible polynomial induces the unique embedding of the corresponding simple root extension ([[thm-universal-property-of-adjoining-an-irreducible-root]]).

[L3] A field isomorphism transports coefficients, evaluation, and roots of polynomials ([[lem-polynomials-and-roots-transport-along-field-isomorphisms]]).

[L4] Relative embeddings are field embeddings agreeing with the specified map on the base ([[def-f-homomorphisms-and-embeddings-of-field-extensions]]).

[L5] Every nonconstant polynomial over an algebraically closed field has a root ([[def-algebraically-closed-field]]).

## Proof

**Proof technique:** direct.

1.1 Let $\mathcal P$ consist of pairs $(E,\tau)$ where $F\subseteq E\subseteq K$ is an intermediate field and $\tau:E\to\Omega$ is an embedding extending $\sigma$, ordered by extension of the domain and map. The pair $(F,\sigma)$ shows that $\mathcal P$ is nonempty. [L4, construct]

2.1 The union of a chain of such pairs has the union of the domains as an intermediate field and the union of the compatible maps as an embedding into $\Omega$, so every chain has an upper bound. [step 1.1, L4]

3.1 By Zorn's lemma [L1], choose a maximal pair $(M,\tau)$ in $\mathcal P$. [step 1.1, step 2.1, L1, choose]

4.1 If $M\ne K$, choose $\alpha\in K\setminus M$. It is algebraic over $M$. Transport its minimal polynomial through the isomorphism $M\to\tau(M)$ using [L3], choose a root in $\Omega$ by [L5], and use [L2] to extend $\tau$ to an embedding of $M(\alpha)$. [step 3.1, L2, L3, L5, choose]

5.1 Step 4.1 contradicts maximality unless $M=K$. Thus $\tau$ on the maximal domain is the required extension of $\sigma$; the use of Choice is precisely [L1]. [step 3.1, step 4.1] ∎

```

## DEPENDENCY: lem-restriction-fibres-for-embeddings-in-a-finite-tower

```markdown
---
id: lem-restriction-fibres-for-embeddings-in-a-finite-tower
kind: lemma
title: "Restriction partitions embeddings in a finite tower into extension fibres"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-f-homomorphisms-and-embeddings-of-field-extensions, def-extension-degree-and-finite-extension, lem-polynomials-and-roots-transport-along-field-isomorphisms, thm-universal-property-of-adjoining-an-irreducible-root, def-algebraically-closed-field, thm-separable-degree-is-independent-of-the-algebraic-closure]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $F\subseteq K\subseteq L$ be a finite tower and let $\Omega$ be an algebraic
closure of $F$. Restriction defines a surjection

$$\operatorname{Hom}_F(L,\Omega)\longrightarrow\operatorname{Hom}_F(K,\Omega).$$

For every $F$-embedding $\sigma:K\to\Omega$, its fibre is nonempty and has
cardinality $[L:K]_s$ after transporting the $K$-structure along $\sigma$.

## Facts & Assumptions

**Given:** A finite tower $F\subseteq K\subseteq L$, an algebraic closure $\Omega/F$, and an $F$-embedding $\sigma:K\to\Omega$.

[L1] Relative embeddings are field embeddings fixing the specified base map ([[def-f-homomorphisms-and-embeddings-of-field-extensions]]).

[L2] A finite extension has a finite basis over its base ([[def-extension-degree-and-finite-extension]]).

[L3] A field isomorphism transports polynomial coefficients, evaluation, and roots ([[lem-polynomials-and-roots-transport-along-field-isomorphisms]]).

[L4] A chosen root of a transported irreducible polynomial induces the unique embedding of the corresponding simple root extension ([[thm-universal-property-of-adjoining-an-irreducible-root]]).

[L5] Every nonconstant polynomial over an algebraically closed field has a root ([[def-algebraically-closed-field]]).

[L6] For a finite extension, the number of base-field embeddings into an algebraic closure is independent of the chosen algebraic closure ([[thm-separable-degree-is-independent-of-the-algebraic-closure]]).

## Proof

**Proof technique:** direct.

1.1 Restricting an $F$-embedding $L\to\Omega$ to $K$ gives an $F$-embedding by [L1]. [L1]

1.2 To extend a chosen $\sigma$, take a finite $K$-basis $a_1,\ldots,a_r$ of $L$ by [L2] and put $K_i=K(a_1,\ldots,a_i)$. Starting with $\tau_0=\sigma$, regard each $\tau_{i-1}$ as an isomorphism onto its image, transport the minimal polynomial of $a_i$ over $K_{i-1}$ along it by [L3], choose a root in $\Omega$ by [L5], and extend $\tau_{i-1}$ to $K_i$ by [L4]. After finitely many steps, $K_r=L$, so every $\sigma$ has an extension and the restriction map is surjective. [L2, L3, L4, L5, construct]

1.3 Identify $K$ with $\sigma(K)$. The extensions of $\sigma$ are exactly the $\sigma(K)$-embeddings of the scalar-transported copy of $L$ into $\Omega$. Since $\Omega$ is algebraically closed and algebraic over $\sigma(K)$, it is an algebraic closure of that copy of $K$. [L1, algebra]

2.1 Transporting scalars and maps along the isomorphism $K\to\sigma(K)$ identifies the embeddings in step 1.3 with embeddings of $L/K$ into an algebraic closure of $K$. By [L6], their number is the closure-independent value $[L:K]_s$. Thus every fibre of restriction has that cardinality. [step 1.3, L6, algebra]

3.1 In particular, transport along an isomorphism between two embedded copies of $K$ gives a bijection between their restriction fibres. [step 2.1] ∎

```

## DEPENDENCY: thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core

```markdown
---
id: thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core
kind: theorem
title: "In characteristic $p$, every irreducible polynomial is uniquely $g(x^{p^e})$ with $g$ irreducible and separable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-polynomial-is-separable-iff-coprime-to-its-derivative, thm-frobenius-endomorphism-and-finite-field-automorphism, lem-polynomial-factorisation-into-irreducibles]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 2, 3, and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $F$ have characteristic $p>0$ and let $f\in F[x]$ be nonconstant and
irreducible. There are unique $e\in\mathbb N$ and $g\in F[x]$ such that

$$f(x)=g(x^{p^e}),$$

$g$ is irreducible and separable, and $e$ is maximal with this property. The
case $e=0$ occurs exactly when $f$ is separable.

## Facts & Assumptions

**Given:** A field $F$ of characteristic $p>0$ and a nonconstant irreducible polynomial $f\in F[x]$.

[L1] A nonzero polynomial is separable exactly when it is coprime to its formal derivative ([[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]).

[L2] In characteristic $p$, Frobenius is an injective endomorphism and $(a+b)^p=a^p+b^p$ ([[thm-frobenius-endomorphism-and-finite-field-automorphism]]).

[L3] Every nonzero nonunit polynomial over a field factors into irreducibles ([[lem-polynomial-factorisation-into-irreducibles]]).

## Proof

**Proof technique:** direct.

1.1 The derivative $f'$ is zero exactly when every exponent occurring in $f$ is divisible by $p$; in that case there is a unique $h\in F[x]$ with $f(x)=h(x^p)$. Repeating this finite descent in degree gives a unique maximal $e$ and a polynomial $g$ with $f(x)=g(x^{p^e})$ and $g'\ne0$. [L2, algebra]

2.1 If $g=uv$ with both factors nonconstant, then $f=u(x^{p^e})v(x^{p^e})$, contradicting irreducibility of $f$; hence $g$ is irreducible. [step 1.1, algebra]

3.1 Since $g'\ne0$, any nonunit common divisor of $g$ and $g'$ has an irreducible factor by [L3], which would divide the irreducible $g$ and hence force $g\mid g'$, impossible by degree; thus $\gcd(g,g')=1$ and [L1] makes $g$ separable. [step 1.1, step 2.1, L1, L3]

4.1 The exponents occurring in $f$ determine their largest common power $p^e$, so $e$ and then the coefficient-preserving core $g$ are unique. Moreover $e=0$ exactly when $f'\ne0$, which for irreducible $f$ is equivalent to separability by [L1]. [step 1.1, step 3.1, L1] ∎

```

## DEPENDENCY: def-separable-degree

```markdown
---
id: def-separable-degree
kind: definition
title: "The separable degree $[K:F]_s$ as a count of embeddings into an algebraic closure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-f-homomorphisms-and-embeddings-of-field-extensions, def-algebraic-closure, def-extension-degree-and-finite-extension, thm-existence-of-algebraic-closures, thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots, def-finite-cardinality]
justified_by: [thm-separable-degree-is-independent-of-the-algebraic-closure]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Definition

Let $K/F$ be a finite field extension
([[def-extension-degree-and-finite-extension]]) and let $\Omega/F$ be an
algebraic closure. Assuming Choice, such a field exists by
[[thm-existence-of-algebraic-closures]]. The
**separable degree** of $K/F$ is

$$[K:F]_s:=\left|\operatorname{Hom}_F(K,\Omega)\right|,$$

where $\operatorname{Hom}_F$ denotes the set of $F$-embeddings of
[[def-f-homomorphisms-and-embeddings-of-field-extensions]]. This set is finite:
a finite $F$-basis generates $K$, an embedding is determined by the images of
those finitely many generators, and each image is among the finitely many roots
of its minimal polynomial by
[[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]].
Thus its cardinality is defined by [[def-finite-cardinality]]. The value is
independent of the chosen algebraic closure by
[[thm-separable-degree-is-independent-of-the-algebraic-closure]].

```

## DEPENDENCY: thm-perfect-field-characterizations

```markdown
---
id: thm-perfect-field-characterizations
kind: theorem
title: "A field is perfect exactly when it has characteristic zero or its Frobenius map is surjective"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-perfect-field, thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core, lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power, thm-frobenius-endomorphism-and-finite-field-automorphism, thm-polynomial-is-separable-iff-coprime-to-its-derivative]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 2, 3, and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

A field $F$ is perfect if and only if either $\operatorname{char}F=0$, or
$\operatorname{char}F=p>0$ and the Frobenius map $a\mapsto a^p$ is surjective.

## Facts & Assumptions

**Given:** A field $F$.

[L1] A field is perfect when all of its nonconstant irreducible polynomials are separable ([[def-perfect-field]]).

[L2] In characteristic $p$, every irreducible polynomial has a unique form $g(x^{p^e})$ with $g$ irreducible and separable ([[thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core]]).

[L3] If $a$ is not a $p$th power, then $x^p-a$ is irreducible ([[lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power]]).

[L4] Frobenius is an injective field endomorphism in characteristic $p$ ([[thm-frobenius-endomorphism-and-finite-field-automorphism]]).

[L5] A nonzero polynomial is separable exactly when it is coprime to its derivative ([[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]).

## Proof

**Proof technique:** direct.

1.1 If $\operatorname{char}F=0$ and $f$ is irreducible, then $f'\ne0$; any common nonconstant divisor of $f$ and $f'$ would be associated to $f$, which is impossible because $\deg f'<\deg f$. Thus $\gcd(f,f')=1$, so $f$ is separable by [L5]. [L1, L5, algebra]

1.2 Suppose $\operatorname{char}F=p>0$ and Frobenius is surjective. For irreducible $f=g(x^{p^e})$ as in [L2], if $e>0$ then taking $p^e$th roots of the coefficients through repeated surjectivity and using [L4] would write $f$ as a $p^e$th power of a nonconstant polynomial, contradicting irreducibility. Hence $e=0$ and every irreducible is separable. [L2, L4]

1.3 Conversely, if Frobenius is not surjective, choose $a\notin F^p$. Then [L3] makes $x^p-a$ irreducible, while its derivative is zero, so it is not separable and $F$ is not perfect. [L1, L3]

2.1 The characteristic-zero argument and the two implications in positive characteristic establish the equivalence. [step 1.1, step 1.2, step 1.3] ∎

```

## DEPENDENCY: def-perfect-field

```markdown
---
id: def-perfect-field
kind: definition
title: "Perfect fields: every irreducible polynomial is separable"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-repeated-root-and-separable-polynomial, def-field]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 2, 3, and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Definition

A field $F$ ([[def-field]]) is **perfect** when every nonconstant irreducible
polynomial in $F[x]$ is separable
([[def-repeated-root-and-separable-polynomial]]).

```

## DEPENDENCY: def-p-basis-of-an-exponent-one-purely-inseparable-extension

```markdown
---
id: def-p-basis-of-an-exponent-one-purely-inseparable-extension
kind: definition
title: "$p$-bases for finite exponent-one purely inseparable extensions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-purely-inseparable-extension, def-linear-basis, def-extension-degree-and-finite-extension]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapter 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 3"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Definition

Let $K/F$ be a finite purely inseparable extension of characteristic $p>0$
([[def-purely-inseparable-extension]]) and suppose it has **exponent at most
one**, meaning $a^p\in F$ for every $a\in K$. A finite ordered family
$(b_1,\ldots,b_r)$ in $K$ is a **$p$-basis of $K/F$** when the restricted
monomials

$$b_1^{e_1}\cdots b_r^{e_r}\qquad(0\le e_i<p)$$

form an $F$-basis of $K$ ([[def-linear-basis]]). For $r=0$, the sole restricted
monomial is the empty product $1$, so the definition gives the basis $(1)$ of
the trivial extension and degree one
([[def-extension-degree-and-finite-extension]]).

```

## DEPENDENCY: lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power

```markdown
---
id: lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power
kind: lemma
title: "If $a$ is not a $p$th power in a characteristic-$p$ field, then $x^{p^n}-a$ is irreducible for every $n\\ge1$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-frobenius-endomorphism-and-finite-field-automorphism, thm-polynomial-is-separable-iff-coprime-to-its-derivative, thm-splitting-fields-exist-for-nonzero-polynomials, thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 3 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $F$ have characteristic $p>0$, let $a\in F$ not be a $p$th power in $F$,
and let $n\ge1$. Then $x^{p^n}-a$ is irreducible in $F[x]$.

## Facts & Assumptions

**Given:** A field $F$ of characteristic $p>0$, an element $a\notin F^p$, and a natural number $n\ge1$.

[L1] Frobenius is injective and $(u-v)^{p^r}=u^{p^r}-v^{p^r}$ in characteristic $p$ ([[thm-frobenius-endomorphism-and-finite-field-automorphism]]).

[L2] A nonzero polynomial is separable exactly when it is coprime to its derivative ([[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]).

[L3] Every nonzero polynomial over a field has a splitting field ([[thm-splitting-fields-exist-for-nonzero-polynomials]]).

[L4] Every irreducible polynomial in characteristic $p$ is uniquely a separable irreducible polynomial in a power $x^{p^e}$ ([[thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core]]).

## Proof

**Proof technique:** direct.

1.1 In a splitting field supplied by [L3], choose a root $b$ of $x^{p^n}-a$; [L1] gives $x^{p^n}-a=(x-b)^{p^n}$, so $b$ is its only distinct root. [L1, L3]

2.1 Let $q$ be the minimal polynomial of $b$ over $F$. By [L4], write $q(x)=g(x^{p^r})$ with $g$ irreducible and separable. Every root of $q$ is also a root of $x^{p^n}-a$, hence equals $b$ by step 1.1; separability of $g$ and [L2] therefore force $g$ to be linear. Thus $q(x)=x^{p^r}-c$ for some $c=b^{p^r}\in F$ and some $0\le r\le n$. [step 1.1, L2, L4]

3.1 If $r<n$, then $a=b^{p^n}=c^{p^{n-r}}$ is a $p$th power in $F$, contrary to the hypothesis; hence $r=n$ and $q=x^{p^n}-a$. [step 2.1, algebra]

4.1 Therefore $x^{p^n}-a$ is the minimal polynomial of $b$ and is irreducible. The hypothesis excludes $a=0$ because $0=0^p$, and the same argument includes $n=1$. [step 3.1] ∎

```

## DEPENDENCY: thm-simple-algebraic-extension-quotient-power-basis-and-degree

```markdown
---
id: thm-simple-algebraic-extension-quotient-power-basis-and-degree
kind: theorem
title: 'A simple algebraic extension is its minimal-polynomial quotient and has power basis $1,a,\ldots,a^{n-1}$ and degree $n$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-field-extension-generated-subfields-and-simple-extension, thm-evaluation-kernel-and-minimal-polynomial, thm-first-isomorphism-theorem-rings, thm-polynomial-division-algorithm-over-a-field, thm-polynomial-quotient-is-a-field-iff-irreducible]
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
    - title: "J. S. Milne, Fields and Galois Theory"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: frontier-11
---

## Statement

Let $K/F$ be a field extension and let $a\in K$ be algebraic with minimal
polynomial $m_a$ of degree $n$. Evaluation induces an $F$-isomorphism
$$F[x]/(m_a)\cong F(a),\qquad f+(m_a)\longmapsto f(a).$$
Moreover, every element of $F(a)$ has a unique expression
$$c_0+c_1a+\cdots+c_{n-1}a^{n-1},\qquad c_j\in F.$$
Thus $1,a,\ldots,a^{n-1}$ is the **power basis**, and the **degree** of the
simple extension is $[F(a):F]=n$.

## Facts & Assumptions

**Given:** A field extension $K/F$ and an algebraic element $a\in K$ whose minimal polynomial $m_a$ has degree $n$.

[F1] Evaluation has kernel $(m_a)$, and $m_a$ is irreducible ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[F2] The first isomorphism theorem identifies a ring modulo the kernel of a homomorphism with its image ([[thm-first-isomorphism-theorem-rings]]).

[F3] Division by a nonzero polynomial gives a unique remainder of smaller degree ([[thm-polynomial-division-algorithm-over-a-field]]).

[F4] A quotient $F[x]/(p)$ by a nonconstant polynomial is a field exactly when $p$ is irreducible ([[thm-polynomial-quotient-is-a-field-iff-irreducible]]).

[F5] $F[a]$ is the generated subring and $F(a)$ the generated subfield ([[def-field-extension-generated-subfields-and-simple-extension]]).

## Proof

**Proof technique:** direct.

1.1 Evaluation has image $F[a]$ and kernel $(m_a)$ by [F1]; [F2] therefore induces $F[x]/(m_a)\cong F[a]$. [F1, F2]

2.1 Since $m_a$ is irreducible, [F4] makes the quotient and hence $F[a]$ a field. [F1, F4, step 1.1]

3.1 The field $F[a]$ contains $F$ and $a$, while every subfield containing them contains all polynomial values; minimality in [F5] gives $F[a]=F(a)$. [F5, step 2.1]

4.1 Division by $m_a$ in [F3] gives each quotient class a representative of degree below $n$, hence gives every element of $F(a)$ a displayed power expression. [F3, step 1.1, step 3.1]

5.1 If two such expressions agree, their difference is a polynomial of degree below $n$ in the kernel $(m_a)$; uniqueness of the remainder in [F3] makes the difference zero coefficientwise. [F1, F3, step 4.1]

6.1 The existence and uniqueness in steps 4.1--5.1 are exactly the assertion that the displayed powers form a basis; by definition, its number $n$ is $[F(a):F]$. [step 4.1, step 5.1] ∎

```

## DEPENDENCY: lem-product-basis-for-a-tower-of-finite-extensions

```markdown
---
id: lem-product-basis-for-a-tower-of-finite-extensions
kind: lemma
title: "Products of bases form a basis in a tower of finite extensions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-linear-basis, thm-unique-coordinates-with-respect-to-an-ordered-basis]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 1"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Statement

Let $F\subseteq K\subseteq L$ be fields. If $(u_1,\ldots,u_m)$ is an $F$-basis of $K$ and $(v_1,\ldots,v_n)$ is a $K$-basis of $L$, then

$$\{u_iv_j:1\le i\le m,\ 1\le j\le n\}$$

is an $F$-basis of $L$.

## Facts & Assumptions

**Given:** A tower $F\subseteq K\subseteq L$ and the two finite bases in the Statement.

[L1] A basis is a linearly independent spanning set ([[def-linear-basis]]).

[L2] Every vector has unique coordinates with respect to an ordered basis ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]).

## Proof

**Proof technique:** direct.

1.1 For $x\in L$, use the $K$-basis to write $x=\sum_jb_jv_j$ with $b_j\in K$, then use the $F$-basis to write $b_j=\sum_i c_{ij}u_i$. Thus $x=\sum_{i,j}c_{ij}u_iv_j$, so the products span $L$ over $F$. [given, L1, L2]

1.2 Suppose $\sum_{i,j}c_{ij}u_iv_j=0$ with $c_{ij}\in F$. Grouping by $v_j$ gives $\sum_j(\sum_i c_{ij}u_i)v_j=0$. Independence of the $v_j$ makes every inner coefficient zero, and independence of the $u_i$ then makes every $c_{ij}=0$. [given, L1, L2, algebra]

2.1 The products span and are independent, hence form an $F$-basis. [step 1.1, step 1.2, L1] ∎

```

## DEPENDENCY: def-extension-degree-and-finite-extension

```markdown
---
id: def-extension-degree-and-finite-extension
kind: definition
title: "The degree $[K:F]=\\dim_F K$ of a finite field extension"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-field-extension-generated-subfields-and-simple-extension, def-dimension]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "A. W. Knapp, Basic Algebra, 2nd ed., Chapter IX, Section 1"
      url: "https://www.math.stonybrook.edu/~aknapp/download/b2-alg-inside.pdf"
pipeline_run: null
---

## Definition

Let $K/F$ be a field extension. Scalar multiplication by $F\subseteq K$, together with addition in $K$, makes $K$ an $F$-vector space. The extension is **finite** when this vector space is finite-dimensional. In that case its **degree** is

$$[K:F]:=\dim_FK.$$

No numerical degree is assigned here to an infinite-dimensional extension.

```

## DEPENDENCY: def-normal-algebraic-extension

```markdown
---
id: def-normal-algebraic-extension
kind: definition
title: 'A normal algebraic extension is one in which every minimal polynomial with a root in the extension splits there'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-algebraic-and-transcendental-elements, thm-evaluation-kernel-and-minimal-polynomial, def-polynomials-that-split-and-splitting-fields]
justified_by: []
aliases: [normal extension]
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
    - title: 'The Stacks Project, Section 9.15: Normal extensions'
      url: 'https://stacks.math.columbia.edu/tag/09HL'
    - title: 'J. S. Milne, Fields and Galois Theory, Chapter 2'
      url: 'https://www.jmilne.org/math/CourseNotes/FT.pdf'
pipeline_run: frontier-12
---

## Definition

An algebraic field extension $E/F$ is **normal** if, for every $\alpha\in E$, the minimal polynomial of $\alpha$ over $F$ splits over $E$.

Equivalently, every irreducible polynomial $p\in F[x]$ that has one root in $E$ splits over $E$. Indeed, the monic associate of such a $p$ is the minimal polynomial of any one of its roots in $E$, and multiplying by a nonzero scalar does not change whether a polynomial splits.

```

## DEPENDENCY: def-separable-closure-in-an-algebraic-extension

```markdown
---
id: def-separable-closure-in-an-algebraic-extension
kind: definition
title: "The separable closure of the base inside an algebraic extension"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-separable-elements-form-an-intermediate-field]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapters 4 and 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Definition

Let $K/F$ be algebraic. The **separable closure of $F$ in $K$** is

$$K_s:=\{a\in K:a\text{ is separable over }F\}.$$

This is an intermediate field by
[[thm-separable-elements-form-an-intermediate-field]]. It is the largest
intermediate extension of $K/F$ that is separable over $F$: any separable
intermediate field consists entirely of elements in the displayed set.

```
