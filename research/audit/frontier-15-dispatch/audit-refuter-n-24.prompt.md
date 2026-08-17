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
label: n-24

run: frontier-15
role: refuter
label: n-24
# Risk-review refutation — 3 high/critical-tier items
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

# DEPENDENCY TEXT — the cited items, title and claim section only

## DEPENDENCY: thm-purely-inseparable-extension-characterizations

```markdown
title: "Pure inseparability and its conjugate, embedding, and separable-degree criteria"

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
```

## DEPENDENCY: thm-simple-algebraic-extension-quotient-power-basis-and-degree

```markdown
title: 'A simple algebraic extension is its minimal-polynomial quotient and has power basis $1,a,\ldots,a^{n-1}$ and degree $n$'

## Statement
Let $K/F$ be a field extension and let $a\in K$ be algebraic with minimal
polynomial $m_a$ of degree $n$. Evaluation induces an $F$-isomorphism
$$F[x]/(m_a)\cong F(a),\qquad f+(m_a)\longmapsto f(a).$$
Moreover, every element of $F(a)$ has a unique expression
$$c_0+c_1a+\cdots+c_{n-1}a^{n-1},\qquad c_j\in F.$$
Thus $1,a,\ldots,a^{n-1}$ is the **power basis**, and the **degree** of the
simple extension is $[F(a):F]=n$.
```

## DEPENDENCY: thm-tower-law-for-finite-field-extensions

```markdown
title: "Tower law for finite extensions: $[L:F]=[L:K][K:F]$"

## Statement
Let $F\subseteq K\subseteq L$ be fields. If $K/F$ and $L/K$ are finite, then $L/F$ is finite and

$$[L:F]=[L:K][K:F].$$
```

## DEPENDENCY: def-extension-degree-and-finite-extension

```markdown
title: "The degree $[K:F]=\\dim_F K$ of a finite field extension"

## Definition
Let $K/F$ be a field extension. Scalar multiplication by $F\subseteq K$, together with addition in $K$, makes $K$ an $F$-vector space. The extension is **finite** when this vector space is finite-dimensional. In that case its **degree** is

$$[K:F]:=\dim_FK.$$

No numerical degree is assigned here to an infinite-dimensional extension.
```

## DEPENDENCY: def-normal-algebraic-extension

```markdown
title: 'A normal algebraic extension is one in which every minimal polynomial with a root in the extension splits there'

## Definition
An algebraic field extension $E/F$ is **normal** if, for every $\alpha\in E$, the minimal polynomial of $\alpha$ over $F$ splits over $E$.

Equivalently, every irreducible polynomial $p\in F[x]$ that has one root in $E$ splits over $E$. Indeed, the monic associate of such a $p$ is the minimal polynomial of any one of its roots in $E$, and multiplying by a nonzero scalar does not change whether a polynomial splits.
```

## DEPENDENCY: def-separable-closure-in-an-algebraic-extension

```markdown
title: "The separable closure of the base inside an algebraic extension"

## Definition
Let $K/F$ be algebraic. The **separable closure of $F$ in $K$** is

$$K_s:=\{a\in K:a\text{ is separable over }F\}.$$

This is an intermediate field by
[[thm-separable-elements-form-an-intermediate-field]]. It is the largest
intermediate extension of $K/F$ that is separable over $F$: any separable
intermediate field consists entirely of elements in the displayed set.
```

## DEPENDENCY: thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core

```markdown
title: "In characteristic $p$, every irreducible polynomial is uniquely $g(x^{p^e})$ with $g$ irreducible and separable"

## Statement
Let $F$ have characteristic $p>0$ and let $f\in F[x]$ be nonconstant and
irreducible. There are unique $e\in\mathbb N$ and $g\in F[x]$ such that

$$f(x)=g(x^{p^e}),$$

$g$ is irreducible and separable, and $e$ is maximal with this property. The
case $e=0$ occurs exactly when $f$ is separable.
```

## DEPENDENCY: def-purely-inseparable-extension

```markdown
title: "Purely inseparable algebraic extensions"

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

## DEPENDENCY: thm-perfect-field-characterizations

```markdown
title: "A field is perfect exactly when it has characteristic zero or its Frobenius map is surjective"

## Statement
A field $F$ is perfect if and only if either $\operatorname{char}F=0$, or
$\operatorname{char}F=p>0$ and the Frobenius map $a\mapsto a^p$ is surjective.
```

## DEPENDENCY: def-perfect-field

```markdown
title: "Perfect fields: every irreducible polynomial is separable"

## Definition
A field $F$ ([[def-field]]) is **perfect** when every nonconstant irreducible
polynomial in $F[x]$ is separable
([[def-repeated-root-and-separable-polynomial]]).
```
