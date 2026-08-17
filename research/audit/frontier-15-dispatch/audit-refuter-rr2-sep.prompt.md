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
label: rr2-sep

run: frontier-15
role: refuter
label: rr2-sep
# Risk-review refutation — 1 high/critical-tier items
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

## ITEM: thm-extension-generated-by-separable-elements-is-separable

```markdown
---
id: thm-extension-generated-by-separable-elements-is-separable
kind: theorem
title: "An algebraic extension generated by separable elements is separable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separable-elements-and-separable-extensions, def-field-extension-generated-subfields-and-simple-extension, cor-separable-degree-of-a-simple-extension-counts-distinct-roots, thm-simple-algebraic-extension-quotient-power-basis-and-degree, thm-multiplicativity-of-separable-degree, thm-tower-law-for-finite-field-extensions, thm-finitely-generated-algebraic-extensions-are-finite, thm-finite-extension-is-separable-iff-separable-degree-is-full]
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

Let $K/F$ be algebraic and suppose $K=F(S)$ for a set $S$ of elements separable
over $F$. Then $K/F$ is separable.

## Facts & Assumptions

**Given:** An algebraic extension $K=F(S)$ whose generators are separable over $F$.

[L1] An element is separable over $F$ when it is algebraic over $F$ and its minimal polynomial over $F$ is separable; the extension is separable when every element is ([[def-separable-elements-and-separable-extensions]]).

[L2] The generated field $F(S)$ is the smallest subfield containing $F\cup S$ ([[def-field-extension-generated-subfields-and-simple-extension]]).

[L3] The separable degree of a simple algebraic extension is the number of distinct roots of its generator's minimal polynomial ([[cor-separable-degree-of-a-simple-extension-counts-distinct-roots]]).

[L4] The degree of a simple algebraic extension is the degree of that minimal polynomial ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L5] Separable degree is multiplicative in finite towers ([[thm-multiplicativity-of-separable-degree]]).

[L6] Ordinary degrees multiply in finite towers ([[thm-tower-law-for-finite-field-extensions]]).

[L7] Finitely many algebraic generators produce a finite extension ([[thm-finitely-generated-algebraic-extensions-are-finite]]).

[L8] A finite extension is separable exactly when its separable degree equals its ordinary degree ([[thm-finite-extension-is-separable-iff-separable-degree-is-full]]).

## Proof

**Proof technique:** direct.

1.1 The union of $F(T)$ over the finite subsets $T\subseteq S$ is a subfield containing $F\cup S$, so by [L2] it equals $F(S)$. Hence every $a\in K$ lies in $E=F(s_1,\ldots,s_r)$ for finitely many $s_i\in S$. [L2]

1.2 Put $E_j=F(s_1,\ldots,s_j)$, so that $E_0=F$, $E_r=E$, and $E_j=E_{j-1}(s_j)$. Each $s_j$ is algebraic over $F$ by [L1], so [L7] makes $E/F$ finite and every step of the tower finite. [L1, L7]

2.1 The minimal polynomial of $s_j$ over $E_{j-1}$ divides its minimal polynomial over $F$, which is separable by [L1]; a divisor of a polynomial with no repeated root has none, so the relative minimal polynomial has as many distinct roots as its degree. Hence [L3] and [L4] give $[E_j:E_{j-1}]_s=[E_j:E_{j-1}]$ at every step. [step 1.2, L1, L3, L4]

3.1 Multiplying these equalities over the tower, [L5] and [L6] give $[E:F]_s=[E:F]$, so [L8] makes $E/F$ separable and the chosen $a$ separable over $F$. [step 1.2, step 2.1, L5, L6, L8]

4.1 Since $a\in K$ was arbitrary, [L1] makes $K/F$ separable. If $S=\varnothing$, [L2] gives $K=F$, whose separable and ordinary degrees are both one, so the conclusion holds there as well. [step 1.1, step 3.1, L1, L2] ∎

```

### Recorded proof contract for thm-extension-generated-by-separable-elements-is-separable

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-separable-elements-and-separable-extensions",
   "source_section": "Definition",
   "quote": "Let $K/F$ be a field extension. An element $\\alpha\\in K$ is **separable over\n$F$** when it is algebraic over $F$\n([[def-algebraic-and-transcendental-elements]]) and its minimal polynomial over\n$F$ ([[thm-evaluation-kernel-and-minimal-polynomial]]) is a separable polynomial\n([[def-repeated-root-and-separable-polynomial]]). The extension $K/F$ is\n**separable** when every element of $K$ is separable over $F$.",
   "uses": [
    "1.2",
    "2.1",
    "4.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-field-extension-generated-subfields-and-simple-extension",
   "source_section": "Definition",
   "quote": "A **field extension** $K/F$ is a field $K$ together with a specified field\nhomomorphism $F\\to K$ ([[def-field]], [[def-field-homomorphism]]). Since that\nmap is injective, we identify $F$ with its image and write $F\\subseteq K$.\n\nFor $S\\subseteq K$, the **subring generated by $F$ and $S$** is\n$$F[S]=\\bigcap\\{R:R\\text{ is a subring of }K\\text{ and }F\\cup S\\subseteq R\\},$$\nand the **subfield generated by $F$ and $S$** is\n$$F(S)=\\bigcap\\{E:E\\text{ is a subfield of }K\\text{ and }F\\cup S\\subseteq E\\}.$$\nThese intersections are nonempty because $K$ is among the displayed subrings\nand subfields, and they are respectively a subring and a subfield\n([[def-subring]], [[def-subfield]]). Equivalently, $F[S]$ and $F(S)$ are the\nsmallest subring and subfield of $K$ containing $F\\cup S$. For a singleton,\nwrite $F[a]$ and $F(a)$. An extension $K/F$ is **simple** if $K=F(a)$ for some\n$a\\in K$.\n\nFor completeness, the asserted injectivity is immediate: if $\\varphi(a)=0$\nwith $a\\ne0$, then\n$1=\\varphi(a^{-1}a)=\\varphi(a^{-1})\\varphi(a)=0$, a contradiction.",
   "uses": [
    "1.1",
    "4.1"
   ]
  },
  {
   "fact": "L3",
   "source": "cor-separable-degree-of-a-simple-extension-counts-distinct-roots",
   "source_section": "Statement",
   "quote": "If $\\alpha$ is algebraic over $F$, then $[F(\\alpha):F]_s$ equals the number of\ndistinct roots of the minimal polynomial $m_\\alpha$ in any algebraic closure of\n$F$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-simple-algebraic-extension-quotient-power-basis-and-degree",
   "source_section": "Statement",
   "quote": "Let $K/F$ be a field extension and let $a\\in K$ be algebraic with minimal\npolynomial $m_a$ of degree $n$. Evaluation induces an $F$-isomorphism\n$$F[x]/(m_a)\\cong F(a),\\qquad f+(m_a)\\longmapsto f(a).$$\nMoreover, every element of $F(a)$ has a unique expression\n$$c_0+c_1a+\\cdots+c_{n-1}a^{n-1},\\qquad c_j\\in F.$$\nThus $1,a,\\ldots,a^{n-1}$ is the **power basis**, and the **degree** of the\nsimple extension is $[F(a):F]=n$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-multiplicativity-of-separable-degree",
   "source_section": "Statement",
   "quote": "For every finite tower $F\\subseteq K\\subseteq L$,\n\n$$[L:F]_s=[L:K]_s[K:F]_s.$$",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L6",
   "source": "thm-tower-law-for-finite-field-extensions",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq L$ be fields. If $K/F$ and $L/K$ are finite, then $L/F$ is finite and\n\n$$[L:F]=[L:K][K:F].$$",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L7",
   "source": "thm-finitely-generated-algebraic-extensions-are-finite",
   "source_section": "Statement",
   "quote": "If $a_1,\\ldots,a_r$ are algebraic over $F$, then $F(a_1,\\ldots,a_r)/F$ is finite.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L8",
   "source": "thm-finite-extension-is-separable-iff-separable-degree-is-full",
   "source_section": "Statement",
   "quote": "A finite extension $K/F$ is separable if and only if\n$[K:F]_s=[K:F]$.",
   "uses": [
    "3.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The union of $F(T)$ over the finite subsets $T\\subseteq S$ is a subfield containing $F\\cup S$, so by [L2] it equals $F(S)$. Hence every $a\\in K$ lies in $E=F(s_1,\\ldots,s_r)$ for finitely many $s_i\\in S$.",
   "step": "1.1",
   "inputs": [
    "L2"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "Put $E_j=F(s_1,\\ldots,s_j)$, so that $E_0=F$, $E_r=E$, and $E_j=E_{j-1}(s_j)$. Each $s_j$ is algebraic over $F$ by [L1], so [L7] makes $E/F$ finite and every step of the tower finite.",
   "step": "1.2",
   "inputs": [
    "L1",
    "L7"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "The minimal polynomial of $s_j$ over $E_{j-1}$ divides its minimal polynomial over $F$, which is separable by [L1]; a divisor of a polynomial with no repeated root has none, so the relative minimal polynomial has as many distinct roots as its degree. Hence [L3] and [L4] give $[E_j:E_{j-1}]_s=[E_j:E_{j-1}]$ at every step.",
   "step": "2.1",
   "inputs": [
    "step 1.2",
    "L1",
    "L3",
    "L4"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Multiplying these equalities over the tower, [L5] and [L6] give $[E:F]_s=[E:F]$, so [L8] makes $E/F$ separable and the chosen $a$ separable over $F$.",
   "step": "3.1",
   "inputs": [
    "step 1.2",
    "step 2.1",
    "L5",
    "L6",
    "L8"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "Since $a\\in K$ was arbitrary, [L1] makes $K/F$ separable. If $S=\\varnothing$, [L2] gives $K=F$, whose separable and ordinary degrees are both one, so the conclusion holds there as well.",
   "step": "4.1",
   "inputs": [
    "step 1.1",
    "step 3.1",
    "L1",
    "L2"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "The generating set may be empty. Step 4.1 disposes of it explicitly: \"If $S=\\varnothing$, [L2] gives $K=F$, whose separable and ordinary degrees are both one, so the conclusion holds there as well.\" The tower of step 1.2 then has $r=0$ and $E_0=E_r=F$, and the trivial extension is separable because every element of $F$ has minimal polynomial $x-a$ over $F$."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "The number $r$ of generators actually adjoined may be zero, which is the case $a\\in F$ of step 1.1. The tower of step 1.2 then has no steps, the product of step degrees multiplied in step 3.1 is the empty product $1$, and $[E:F]_s=[E:F]=1$, which step 4.1 records for $S=\\varnothing$ and which holds equally for a nonempty $S$ when the chosen $a$ already lies in $F$."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "The one-generator case $r=1$ is the simple extension $E=F(s_1)$. Step 2.1 applies to it unchanged, since $E_0=F$ and the minimal polynomial of $s_1$ over $E_0$ is its minimal polynomial over $F$, which is separable by [L1]; step 3.1's product then has the single factor $[E:F]_s=[E:F]$, so no multi-step tower is needed for the conclusion."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "A tower step may be trivial, when $s_j\\in E_{j-1}$ and $E_j=E_{j-1}$. Step 2.1 still holds there: the minimal polynomial of $s_j$ over $E_{j-1}$ is $x-s_j$, which has degree one and exactly one distinct root, so [L3] and [L4] give $[E_j:E_{j-1}]_s=1=[E_j:E_{j-1}]$. Repeated generators and generators already lying in $F$ are therefore admitted without a separate argument."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For An algebraic extension generated by separable elements is separable, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Every element lies in a subextension generated by finitely many of the given generators."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "Two selections are made and each is preceded by its existence proof. The finite subset $s_1,\\ldots,s_r$ with $a\\in F(s_1,\\ldots,s_r)$ exists by step 1.1, which identifies $F(S)$ with the union of the $F(T)$ over finite $T\\subseteq S$ using [L2]. The minimal polynomial of $s_j$ over $E_{j-1}$ used in step 2.1 exists because $s_j$ is algebraic over $F$ by [L1], hence algebraic over the larger field $E_{j-1}$; no root, basis or ambient closure is chosen anywhere in the proof."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim An algebraic extension generated by separable elements is separable is not a biconditional, so no forward implication is asserted; the proof begins from Every element lies in a subextension generated by finitely many of the given generators."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim An algebraic extension generated by separable elements is separable is not a biconditional, so no reverse implication is asserted; the proof begins from Every element lies in a subextension generated by finitely many of the given generators."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, in full

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

## DEPENDENCY: def-field-extension-generated-subfields-and-simple-extension

```markdown
---
id: def-field-extension-generated-subfields-and-simple-extension
kind: definition
title: 'Field extensions, generated subrings $F[S]$, generated subfields $F(S)$, and simple extensions'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-field, def-field-homomorphism, def-subring, def-subfield]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "T. Judson, Abstract Algebra: Theory and Applications, Extension Fields"
      url: "https://judsonbooks.org/aata-files/aata-html/fields-section-extension-fields.html"
pipeline_run: frontier-11
---

## Definition

A **field extension** $K/F$ is a field $K$ together with a specified field
homomorphism $F\to K$ ([[def-field]], [[def-field-homomorphism]]). Since that
map is injective, we identify $F$ with its image and write $F\subseteq K$.

For $S\subseteq K$, the **subring generated by $F$ and $S$** is
$$F[S]=\bigcap\{R:R\text{ is a subring of }K\text{ and }F\cup S\subseteq R\},$$
and the **subfield generated by $F$ and $S$** is
$$F(S)=\bigcap\{E:E\text{ is a subfield of }K\text{ and }F\cup S\subseteq E\}.$$
These intersections are nonempty because $K$ is among the displayed subrings
and subfields, and they are respectively a subring and a subfield
([[def-subring]], [[def-subfield]]). Equivalently, $F[S]$ and $F(S)$ are the
smallest subring and subfield of $K$ containing $F\cup S$. For a singleton,
write $F[a]$ and $F(a)$. An extension $K/F$ is **simple** if $K=F(a)$ for some
$a\in K$.

For completeness, the asserted injectivity is immediate: if $\varphi(a)=0$
with $a\ne0$, then
$1=\varphi(a^{-1}a)=\varphi(a^{-1})\varphi(a)=0$, a contradiction.

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

## DEPENDENCY: thm-finite-extension-is-separable-iff-separable-degree-is-full

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
