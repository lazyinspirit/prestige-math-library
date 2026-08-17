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
label: n-18

run: frontier-15
role: refuter
label: n-18
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

## ITEM: cor-algebraic-extensions-of-perfect-fields-are-separable

```markdown
---
id: cor-algebraic-extensions-of-perfect-fields-are-separable
kind: corollary
title: "Every algebraic extension of a perfect field is separable"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-perfect-field, def-separable-elements-and-separable-extensions, thm-evaluation-kernel-and-minimal-polynomial]
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

If $K/F$ is algebraic and $F$ is perfect, then $K/F$ is separable.

## Facts & Assumptions

**Given:** An algebraic extension $K/F$ with $F$ perfect.

[L1] Every algebraic element has a monic irreducible minimal polynomial over the base ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[L2] Every nonconstant irreducible polynomial over a perfect field is separable ([[def-perfect-field]]).

[L3] An extension is separable when every one of its elements has separable minimal polynomial over the base ([[def-separable-elements-and-separable-extensions]]).

## Proof

**Proof technique:** direct.

1.1 For each $\alpha\in K$, [L1] supplies its irreducible minimal polynomial over $F$, and [L2] makes that polynomial separable. [L1, L2]

2.1 Thus every element of $K$ is separable over $F$, so $K/F$ is separable by [L3]. [step 1.1, L3] ∎

```

### Recorded proof contract for cor-algebraic-extensions-of-perfect-fields-are-separable

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-evaluation-kernel-and-minimal-polynomial",
   "source_section": "Statement",
   "quote": "Let $K/F$ be a field extension and $a\\in K$. Evaluation is the unique\n$F$-algebra homomorphism\n$$\\operatorname{ev}_a:F[x]\\longrightarrow K,\\qquad f\\longmapsto f(a).$$\nIf $a$ is transcendental, its kernel is zero. If $a$ is algebraic, there is a\nunique monic irreducible polynomial $m_a\\in F[x]$ such that\n$$\\ker(\\operatorname{ev}_a)=(m_a),$$\nand, for every $f\\in F[x]$,\n$$f(a)=0\\quad\\Longleftrightarrow\\quad m_a\\mid f.$$\nThe polynomial $m_a$ is the **minimal polynomial** of $a$ over $F$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-perfect-field",
   "source_section": "Definition",
   "quote": "A field $F$ ([[def-field]]) is **perfect** when every nonconstant irreducible\npolynomial in $F[x]$ is separable\n([[def-repeated-root-and-separable-polynomial]]).",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-separable-elements-and-separable-extensions",
   "source_section": "Definition",
   "quote": "Let $K/F$ be a field extension. An element $\\alpha\\in K$ is **separable over\n$F$** when it is algebraic over $F$\n([[def-algebraic-and-transcendental-elements]]) and its minimal polynomial over\n$F$ ([[thm-evaluation-kernel-and-minimal-polynomial]]) is a separable polynomial\n([[def-repeated-root-and-separable-polynomial]]). The extension $K/F$ is\n**separable** when every element of $K$ is separable over $F$.",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "For each $\\alpha\\in K$, [L1] supplies its irreducible minimal polynomial over $F$, and [L2] makes that polynomial separable.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Thus every element of $K$ is separable over $F$, so $K/F$ is separable by [L3].",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L3"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For Every algebraic extension of a perfect field is separable, no possibly empty indexed operation occurs; the proof instead begins from Each element of the algebraic extension has an irreducible minimal polynomial over the perfect base, and that polynomial is separable by definition.."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For Every algebraic extension of a perfect field is separable, the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from Each element of the algebraic extension has an irreducible minimal polynomial over the perfect base, and that polynomial is separable by definition.."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "For Every algebraic extension of a perfect field is separable, no free numerical parameter has a separate value-one branch; the proof instead begins from Each element of the algebraic extension has an irreducible minimal polynomial over the perfect base, and that polynomial is separable by definition.."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For Every algebraic extension of a perfect field is separable, step 1.1 states: \"For each $\\alpha\\in K$, [L1] supplies its irreducible minimal polynomial over $F$, and [L2] makes that polynomial separable.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For Every algebraic extension of a perfect field is separable, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Each element of the algebraic extension has an irreducible minimal polynomial over the perfect base, and that polynomial is separable by definition.."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "For Every algebraic extension of a perfect field is separable, only supplied data are used and no unproved nonempty selection occurs; the proof begins from Each element of the algebraic extension has an irreducible minimal polynomial over the perfect base, and that polynomial is separable by definition.."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim Every algebraic extension of a perfect field is separable is not a biconditional, so no forward implication is asserted; the proof begins from Each element of the algebraic extension has an irreducible minimal polynomial over the perfect base, and that polynomial is separable by definition.."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim Every algebraic extension of a perfect field is separable is not a biconditional, so no reverse implication is asserted; the proof begins from Each element of the algebraic extension has an irreducible minimal polynomial over the perfect base, and that polynomial is separable by definition.."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: lem-simple-finite-extension-has-finitely-many-intermediate-fields

```markdown
---
id: lem-simple-finite-extension-has-finitely-many-intermediate-fields
kind: lemma
title: "A simple finite extension has only finitely many intermediate fields"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-field-extension-generated-subfields-and-simple-extension, thm-evaluation-kernel-and-minimal-polynomial, thm-polynomial-ring-over-a-field-is-a-ufd, thm-tower-law-for-finite-field-extensions]
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
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

If $E/F$ is a finite simple extension, then there are only finitely many
intermediate fields $F\subseteq M\subseteq E$.

## Facts & Assumptions

**Given:** A finite simple extension $E=F(\alpha)$.

[L1] The notation $F(\alpha)$ denotes the smallest subfield containing $F$ and $\alpha$ ([[def-field-extension-generated-subfields-and-simple-extension]]).

[L2] An algebraic element has a unique monic irreducible minimal polynomial over its base field ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[L3] A polynomial ring over a field is a unique factorisation domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

[L4] Degrees multiply in a finite tower of field extensions ([[thm-tower-law-for-finite-field-extensions]]).

## Proof

**Proof technique:** direct.

1.1 Let $f$ be the minimal polynomial of $\alpha$ over $F$. For an intermediate field $M$, let $g_M$ be the minimal polynomial of $\alpha$ over $M$ and let $M_0$ be the subfield of $M$ generated over $F$ by the coefficients of $g_M$. [L1, L2]

2.1 The polynomial $g_M$ divides $f$ in $M[x]$ and therefore in $E[x]$. It is irreducible over $M_0$, since a factorisation over $M_0$ would be one over $M$, so it is also the minimal polynomial of $\alpha$ over $M_0$. [step 1.1, L2]

3.1 Thus $[E:M_0]=\deg g_M=[E:M]$; the tower law [L4] in $M_0\subseteq M\subseteq E$ gives $[M:M_0]=1$, so $M=M_0$. Hence the coefficients of $g_M$ determine $M$. [step 2.1, L4]

4.1 By unique factorisation [L3], the fixed polynomial $f$ has only finitely many monic divisors in $E[x]$. The injective assignment $M\mapsto g_M$ therefore proves that there are only finitely many intermediate fields. [step 3.1, L3] ∎

```

### Recorded proof contract for lem-simple-finite-extension-has-finitely-many-intermediate-fields

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-field-extension-generated-subfields-and-simple-extension",
   "source_section": "Definition",
   "quote": "A **field extension** $K/F$ is a field $K$ together with a specified field\nhomomorphism $F\\to K$ ([[def-field]], [[def-field-homomorphism]]). Since that\nmap is injective, we identify $F$ with its image and write $F\\subseteq K$.\n\nFor $S\\subseteq K$, the **subring generated by $F$ and $S$** is\n$$F[S]=\\bigcap\\{R:R\\text{ is a subring of }K\\text{ and }F\\cup S\\subseteq R\\},$$\nand the **subfield generated by $F$ and $S$** is\n$$F(S)=\\bigcap\\{E:E\\text{ is a subfield of }K\\text{ and }F\\cup S\\subseteq E\\}.$$\nThese intersections are nonempty because $K$ is among the displayed subrings\nand subfields, and they are respectively a subring and a subfield\n([[def-subring]], [[def-subfield]]). Equivalently, $F[S]$ and $F(S)$ are the\nsmallest subring and subfield of $K$ containing $F\\cup S$. For a singleton,\nwrite $F[a]$ and $F(a)$. An extension $K/F$ is **simple** if $K=F(a)$ for some\n$a\\in K$.\n\nFor completeness, the asserted injectivity is immediate: if $\\varphi(a)=0$\nwith $a\\ne0$, then\n$1=\\varphi(a^{-1}a)=\\varphi(a^{-1})\\varphi(a)=0$, a contradiction.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-evaluation-kernel-and-minimal-polynomial",
   "source_section": "Statement",
   "quote": "Let $K/F$ be a field extension and $a\\in K$. Evaluation is the unique\n$F$-algebra homomorphism\n$$\\operatorname{ev}_a:F[x]\\longrightarrow K,\\qquad f\\longmapsto f(a).$$\nIf $a$ is transcendental, its kernel is zero. If $a$ is algebraic, there is a\nunique monic irreducible polynomial $m_a\\in F[x]$ such that\n$$\\ker(\\operatorname{ev}_a)=(m_a),$$\nand, for every $f\\in F[x]$,\n$$f(a)=0\\quad\\Longleftrightarrow\\quad m_a\\mid f.$$\nThe polynomial $m_a$ is the **minimal polynomial** of $a$ over $F$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-polynomial-ring-over-a-field-is-a-ufd",
   "source_section": "Statement",
   "quote": "For every field $F$, the polynomial ring $F[x]$ is a unique factorisation domain.",
   "uses": [
    "4.1"
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
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Let $f$ be the minimal polynomial of $\\alpha$ over $F$. For an intermediate field $M$, let $g_M$ be the minimal polynomial of $\\alpha$ over $M$ and let $M_0$ be the subfield of $M$ generated over $F$ by the coefficients of $g_M$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "The polynomial $g_M$ divides $f$ in $M[x]$ and therefore in $E[x]$. It is irreducible over $M_0$, since a factorisation over $M_0$ would be one over $M$, so it is also the minimal polynomial of $\\alpha$ over $M_0$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L2"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Thus $[E:M_0]=\\deg g_M=[E:M]$; the tower law [L4] in $M_0\\subseteq M\\subseteq E$ gives $[M:M_0]=1$, so $M=M_0$. Hence the coefficients of $g_M$ determine $M$.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "L4"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "By unique factorisation [L3], the fixed polynomial $f$ has only finitely many monic divisors in $E[x]$. The injective assignment $M\\mapsto g_M$ therefore proves that there are only finitely many intermediate fields.",
   "step": "4.1",
   "inputs": [
    "step 3.1",
    "L3"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For A simple finite extension has only finitely many intermediate fields, no possibly empty indexed operation occurs; the proof instead begins from For E=F(alpha) and an intermediate field M, let g_M be the minimal polynomial of alpha over M."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For A simple finite extension has only finitely many intermediate fields, the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from For E=F(alpha) and an intermediate field M, let g_M be the minimal polynomial of alpha over M."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "For A simple finite extension has only finitely many intermediate fields, no free numerical parameter has a separate value-one branch; the proof instead begins from For E=F(alpha) and an intermediate field M, let g_M be the minimal polynomial of alpha over M."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For A simple finite extension has only finitely many intermediate fields, step 1.1 states: \"Let $f$ be the minimal polynomial of $\\alpha$ over $F$. For an intermediate field $M$, let $g_M$ be the minimal polynomial of $\\alpha$ over $M$ and let $M_0$ be the subfield of $M$ generated over $F$ by the coefficients of $g_M$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For A simple finite extension has only finitely many intermediate fields, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from For E=F(alpha) and an intermediate field M, let g_M be the minimal polynomial of alpha over M."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "For A simple finite extension has only finitely many intermediate fields, only supplied data are used and no unproved nonempty selection occurs; the proof begins from For E=F(alpha) and an intermediate field M, let g_M be the minimal polynomial of alpha over M."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim A simple finite extension has only finitely many intermediate fields is not a biconditional, so no forward implication is asserted; the proof begins from For E=F(alpha) and an intermediate field M, let g_M be the minimal polynomial of alpha over M."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim A simple finite extension has only finitely many intermediate fields is not a biconditional, so no reverse implication is asserted; the proof begins from For E=F(alpha) and an intermediate field M, let g_M be the minimal polynomial of alpha over M."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces

```markdown
---
id: lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces
kind: lemma
title: "A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-vector-space, def-linear-basis, def-finite-cardinality]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapter 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $V$ be a finite-dimensional vector space over an infinite field $F$. No
finite family of proper linear subspaces of $V$ has union $V$.

## Facts & Assumptions

**Given:** A finite-dimensional vector space $V$ over an infinite field $F$, and a finite family $W_0,\ldots,W_{m-1}$ of proper linear subspaces.

[L1] A vector space has addition and scalar multiplication satisfying the vector-space axioms ([[def-vector-space]]).

[L2] A finite-dimensional vector space has a finite basis, and the empty basis occurs exactly for the zero space ([[def-linear-basis]]).

[L3] A finite set has a natural-number cardinality invariant under bijection ([[def-finite-cardinality]]).

## Proof

**Proof technique:** induction.

1.1 For $m=0$, the union is empty and cannot equal the nonempty set $V$, even when $V$ is the zero space. [base, L1]

1.2 Assume the assertion for families of fewer than $m>0$ proper subspaces, in every finite-dimensional vector space over $F$. [ih]

2.1 If $m=1$, choose $b\in V\setminus W_0$ and the result is immediate. For $m>1$, remove any $W_i$ contained in another member; if this shortens the family, the induction hypothesis applies. Otherwise every $W_{m-1}\cap W_i$ is a proper subspace of $W_{m-1}$, so the induction hypothesis inside $W_{m-1}$ gives a nonzero $a\in W_{m-1}$ lying in none of the earlier $W_i$. Choose $b\in V\setminus W_{m-1}$. [step 1.2, L1, L2, choose]

3.1 In the unresolved case $m>1$, on the affine line $\{b+ta:t\in F\}$ each $W_i$ contains at most one point: two such points would have difference a nonzero scalar multiple of $a$, putting $a$ in $W_i$ for $i<m-1$, while any point in $W_{m-1}$ would put $b$ there. [step 2.1, L1, algebra]

4.1 For $m>1$ the union therefore meets the line in at most a finite set of points by [L3], whereas $t\mapsto b+ta$ is injective and $F$ is infinite. Some point of the line lies outside every $W_i$; together with the $m=1$ conclusion in step 2.1, this completes the induction. [step 2.1, step 3.1, L3, discharge-induction] ∎

```

### Recorded proof contract for lem-finite-dimensional-space-over-an-infinite-field-is-not-a-finite-union-of-proper-subspaces

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-vector-space",
   "source_section": "Definition",
   "quote": "Let $F$ be a field ([[def-field]]), with additive identity $0_F$, multiplicative\nidentity $1_F$, and the field axioms as stated there. A **vector space over $F$**,\nalso called an **$F$-vector space**, consists of\n\n- a set $V$, whose elements are called **vectors**;\n- a binary operation $+ : V \\times V \\to V$ on $V$ ([[def-binary-operation]]),\n  the **vector addition**;\n- an element $0_V \\in V$, the **zero vector**;\n- a map $\\cdot \\,:\\, F \\times V \\to V$, the **scalar multiplication**, written\n  $\\lambda v := \\cdot(\\lambda, v)$;\n\nsubject to the following axioms, in which $u, v \\in V$ and $\\lambda, \\mu \\in F$\nare arbitrary.\n\n- **(V1)** $(V, +, 0_V)$ is an abelian group ([[def-group]]): $+$ is associative\n  and commutative, $0_V$ is a two-sided identity for $+$\n  ([[def-identity-element]]), and every $v \\in V$ has an additive inverse\n  ([[def-invertible-element]]).\n- **(V2)** $\\lambda(u + v) = \\lambda u + \\lambda v$.\n- **(V3)** $(\\lambda + \\mu)v = \\lambda v + \\mu v$.\n- **(V4)** $(\\lambda\\mu)v = \\lambda(\\mu v)$.\n- **(V5)** $1_F v = v$.\n\nThe elements of $F$ are called **scalars**. When several vector spaces are in\nplay we write $0_V$ for the zero of $V$, and we write $-v$ for the additive\ninverse of $v$ and $u - v := u + (-v)$.\n\n**The notation $0_V$ and $-v$ is legitimate.** Axiom (V1) asserts only that some\ntwo-sided identity and some additive inverses exist. That there is at most one\ntwo-sided identity for $+$ is [[lem-identity-unique]], and that an invertible\nelement of a monoid has exactly one inverse is [[lem-inverse-unique]]; both are\nproved before [[def-group]] and are inherited here with the group structure. So\n$0_V$ and $-v$ denote well-defined elements, and nothing below re-derives them.\n\n**What (V1) buys, and why it is not restated.** Associativity, commutativity, the\nidentity law $v + 0_V = v = 0_V + v$, the inverse law $v + (-v) = 0_V$,\ncancellation ([[lem-group-cancellation]]) and the inverse identities\n([[lem-group-inverse-laws]]) are facts about abelian groups. They are quoted from\nthe group page wherever they are used and are never proved again for vectors.",
   "uses": [
    "1.1",
    "2.1",
    "3.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-linear-basis",
   "source_section": "Definition",
   "quote": "Let $V$ be a vector space over a field $F$ ([[def-vector-space]]).\n\nA subset $B \\subseteq V$ is a **basis of $V$** when\n\n- **(B1)** $B$ is linearly independent ([[def-linear-independence]]), and\n- **(B2)** $B$ spans $V$, that is $\\operatorname{span}(B) = V$\n  ([[def-linear-combination-and-span]], which is where the words *spans* and\n  *spanning set* are fixed; they are not redefined here).\n\n**The empty set is a basis of the zero space, and of nothing else.**\n$\\varnothing$ is linearly independent ([[def-linear-independence]]) and\n$\\operatorname{span}(\\varnothing) = \\{0_V\\}$\n([[lem-span-is-the-set-of-linear-combinations]]), so $\\varnothing$ is a basis of\n$V$ exactly when $V = \\{0_V\\}$. This is the case $n = 0$ from which every\ninduction on this page starts, and it is a genuine case rather than a convention.\n\n### Ordered bases\n\nAn **ordered basis of $V$** is a finite list $v : n \\to V$, with $n \\in\n\\mathbb{N}$ and $n = \\{0, \\dots, n-1\\}$ the von Neumann natural\n([[def-natural-numbers]], [[lem-nat-order-is-membership]]), such that $v$ is\ninjective ([[def-injection-surjection-bijection]]) and its image $v[n]$ is a\nbasis of $V$.\n\nBy claim 6 of [[lem-independent-list-is-injective]], a list is linearly\nindependent exactly when it is injective with linearly independent image, so an\nordered basis is equally described as a **linearly independent list $v : n \\to V$\nwith $\\operatorname{span}(v[n]) = V$**: the injectivity does not have to be\nimposed separately. The empty list is the ordered basis of the zero space.\n\nAn ordered basis is a list, so it carries an order; a basis is a set, so it does\nnot. Reordering an ordered basis gives a different ordered basis with the same\nimage, and the coordinates of\n[[thm-unique-coordinates-with-respect-to-an-ordered-basis]] are attached to the\nlist, not to the set.\n\n### Bases of a linear subspace\n\nLet $U$ be a linear subspace of $V$ ([[def-linear-subspace]]), which is itself a\nvector space over $F$, with the addition, the zero vector and the scalar\nmultiplication of $V$ restricted to $U$. For $A \\subseteq U$ the two readings of\n\"$A$ is a basis\" — computed inside $U$, or computed inside $V$ — agree, so the\nphrase needs no disambiguation below.\n\n- **Independence agrees.** The finite sums $\\sum_{i<n}\\lambda_i a_i$ of a list\n  $a : n \\to U$ are given by the same recursion in $U$ as in $V$\n  ([[def-monoid-finite-product]]), the base value $0_V$ and the operation $+$\n  being literally those of $V$ ([[def-linear-subspace]]). So a list into $U$ has\n  the same sums whichever space it is read in, and the vanishing condition of\n  [[def-linear-independence]] is the same condition in both.\n- **The span agrees.** A subset of $U$ is a linear subspace of $U$ exactly when it\n  is a linear subspace of $V$, conditions (W1), (W2), (W3) being the same\n  conditions in either reading. Now $\\operatorname{span}_V(A) \\subseteq U$, since\n  $U$ is a linear subspace of $V$ containing $A$ and the span is contained in\n  every such subspace; so $\\operatorname{span}_V(A)$ is a linear subspace of $U$\n  containing $A$, whence $\\operatorname{span}_U(A) \\subseteq \\operatorname{span}_V(A)$.\n  Conversely $\\operatorname{span}_U(A)$ is a linear subspace of $V$ containing\n  $A$, whence $\\operatorname{span}_V(A) \\subseteq \\operatorname{span}_U(A)$. The\n  two are therefore equal, and we write $\\operatorname{span}(A)$ for both.\n\nConsequently $A \\subseteq U$ is a basis of the vector space $U$ if and only if\n$A$ is linearly independent as a subset of $V$ and $\\operatorname{span}(A) = U$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-finite-cardinality",
   "source_section": "Definition",
   "quote": "Throughout this page $\\mathbb{N}$ is the set of von Neumann naturals\n([[def-natural-numbers]]): $0 = \\varnothing$, $\\sigma(n) = n \\cup \\{n\\}$, and\n$n = \\{\\, m \\in \\mathbb{N} : m < n \\,\\}$ is itself the set of its predecessors,\nthe order being the additive order of [[def-nat-order]] identified with\nmembership in [[lem-nat-order-is-membership]]. Write $A \\approx B$ when a\nbijection $A \\to B$ exists ([[def-equinumerous]],\n[[def-injection-surjection-bijection]]). A set $A$ is **finite** when\n$A \\approx n$ for some $n \\in \\mathbb{N}$ ([[def-countable]]).\n\n**Definition.** Let $A$ be a finite set. Then there is **exactly one**\n$n \\in \\mathbb{N}$ with $A \\approx n$, and we write\n\n$$\\lvert A\\rvert := \\text{that } n,$$\n\nthe **cardinality**, or number of elements, of $A$. The notation $\\lvert A\\rvert$\nis defined for finite $A$ only, and its value is a natural number.\n\n**Why exactly one, which is the whole content of the definition.** At least one\nsuch $n$ exists: that is literally what \"$A$ is finite\" says. At most one exists:\nif $A \\approx n$ and $A \\approx m$ with $n, m \\in \\mathbb{N}$, then $n \\approx A$,\nbecause the inverse of a bijection is a bijection, and hence $n \\approx m$,\nbecause a composition of bijections is a bijection\n([[def-injection-surjection-bijection]]); and $n \\approx m$ forces $n = m$ by\nclaim 3 of [[lem-pigeonhole]]. So $\\lvert A\\rvert$ names a single natural number\nand not a family of choices.\n\n**Four consequences, proved here because everything on this page uses them.**\n\n**(a) $\\lvert n\\rvert = n$ for every $n \\in \\mathbb{N}$.** The identity map\n$\\mathrm{id}_n$ is a bijection $n \\to n$, so $n \\approx n$; thus $n$ is finite and\nthe unique natural equinumerous with it is $n$ itself.\n\n**(b) $\\lvert\\varnothing\\rvert = 0$, and a finite $A$ satisfies\n$\\lvert A\\rvert = 0$ if and only if $A = \\varnothing$.** Since $0 = \\varnothing$,\npart (a) gives $\\lvert\\varnothing\\rvert = 0$. Conversely, if $\\lvert A\\rvert = 0$\nthen there is a bijection $f : A \\to \\varnothing$; were some $a \\in A$, the value\n$f(a)$ would be an element of $\\varnothing$, and $\\varnothing$ has none, so\n$A = \\varnothing$.\n\n**(c) Transport along a bijection.** If $A$ is finite and $f : A \\to B$ is a\nbijection, then $B$ is finite and $\\lvert B\\rvert = \\lvert A\\rvert$. Indeed\n$B \\approx A$ through $f^{-1}$ and $A \\approx \\lvert A\\rvert$, so\n$B \\approx \\lvert A\\rvert$ by transitivity.\n\n**(d) Equality of cardinalities is equinumerosity.** For finite $A$ and $B$:\n$\\lvert A\\rvert = \\lvert B\\rvert$ if and only if $A \\approx B$. If the\ncardinalities agree then $A \\approx \\lvert A\\rvert = \\lvert B\\rvert \\approx B$;\nconversely $A \\approx B$ gives $\\lvert B\\rvert = \\lvert A\\rvert$ by (c).",
   "uses": [
    "4.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "For $m=0$, the union is empty and cannot equal the nonempty set $V$, even when $V$ is the zero space.",
   "step": "1.1",
   "inputs": [
    "base",
    "L1"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "Assume the assertion for families of fewer than $m>0$ proper subspaces, in every finite-dimensional vector space over $F$.",
   "step": "1.2",
   "inputs": [
    "ih"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "If $m=1$, choose $b\\in V\\setminus W_0$ and the result is immediate. For $m>1$, remove any $W_i$ contained in another member; if this shortens the family, the induction hypothesis applies. Otherwise every $W_{m-1}\\cap W_i$ is a proper subspace of $W_{m-1}$, so the induction hypothesis inside $W_{m-1}$ gives a nonzero $a\\in W_{m-1}$ lying in none of the earlier $W_i$. Choose $b\\in V\\setminus W_{m-1}$.",
   "step": "2.1",
   "inputs": [
    "step 1.2",
    "L1",
    "L2",
    "choose"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "In the unresolved case $m>1$, on the affine line $\\{b+ta:t\\in F\\}$ each $W_i$ contains at most one point: two such points would have difference a nonzero scalar multiple of $a$, putting $a$ in $W_i$ for $i<m-1$, while any point in $W_{m-1}$ would put $b$ there.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "L1",
    "algebra"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "For $m>1$ the union therefore meets the line in at most a finite set of points by [L3], whereas $t\\mapsto b+ta$ is injective and $F$ is infinite. Some point of the line lies outside every $W_i$; together with the $m=1$ conclusion in step 2.1, this completes the induction.",
   "step": "4.1",
   "inputs": [
    "step 2.1",
    "step 3.1",
    "L3",
    "discharge-induction"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "For A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces, step 1.1 states: \"For $m=0$, the union is empty and cannot equal the nonempty set $V$, even when $V$ is the zero space.\" This is the final proof check that the possibly empty family, list, union, product, or tower has its neutral case computed."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces, step 1.1 states: \"For $m=0$, the union is empty and cannot equal the nonempty set $V$, even when $V$ is the zero space.\" This is the final proof check that every zero exponent, index, degree, coefficient, or element is either handled or excluded by the exact hypotheses."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces, step 3.1 states: \"In the unresolved case $m>1$, on the affine line $\\{b+ta:t\\in F\\}$ each $W_i$ contains at most one point: two such points would have difference a nonzero scalar multiple of $a$, putting $a$ in $W_i$ for $i<m-1$, while any point in $W_{m-1}$ would put $b$ there.\" This is the final proof check that every degree-one, exponent-one, singleton, or identity instance allowed by the hypotheses is evaluated."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces, step 1.1 states: \"For $m=0$, the union is empty and cannot equal the nonempty set $V$, even when $V$ is the zero space.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Choose a line not contained in any one of the finitely many proper subspaces, after induction on their number and the dimension."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces, step 1.1 states: \"For $m=0$, the union is empty and cannot equal the nonempty set $V$, even when $V$ is the zero space.\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces is not a biconditional, so no forward implication is asserted; the proof begins from Choose a line not contained in any one of the finitely many proper subspaces, after induction on their number and the dimension."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim A finite-dimensional vector space over an infinite field is not a finite union of proper subspaces is not a biconditional, so no reverse implication is asserted; the proof begins from Choose a line not contained in any one of the finitely many proper subspaces, after induction on their number and the dimension."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, title and claim section only

## DEPENDENCY: def-perfect-field

```markdown
title: "Perfect fields: every irreducible polynomial is separable"

## Definition
A field $F$ ([[def-field]]) is **perfect** when every nonconstant irreducible
polynomial in $F[x]$ is separable
([[def-repeated-root-and-separable-polynomial]]).
```

## DEPENDENCY: def-separable-elements-and-separable-extensions

```markdown
title: "Separable algebraic elements and separable extensions"

## Definition
Let $K/F$ be a field extension. An element $\alpha\in K$ is **separable over
$F$** when it is algebraic over $F$
([[def-algebraic-and-transcendental-elements]]) and its minimal polynomial over
$F$ ([[thm-evaluation-kernel-and-minimal-polynomial]]) is a separable polynomial
([[def-repeated-root-and-separable-polynomial]]). The extension $K/F$ is
**separable** when every element of $K$ is separable over $F$.
```

## DEPENDENCY: thm-evaluation-kernel-and-minimal-polynomial

```markdown
title: 'The evaluation kernel and the unique monic irreducible minimal polynomial of an algebraic element'

## Statement
Let $K/F$ be a field extension and $a\in K$. Evaluation is the unique
$F$-algebra homomorphism
$$\operatorname{ev}_a:F[x]\longrightarrow K,\qquad f\longmapsto f(a).$$
If $a$ is transcendental, its kernel is zero. If $a$ is algebraic, there is a
unique monic irreducible polynomial $m_a\in F[x]$ such that
$$\ker(\operatorname{ev}_a)=(m_a),$$
and, for every $f\in F[x]$,
$$f(a)=0\quad\Longleftrightarrow\quad m_a\mid f.$$
The polynomial $m_a$ is the **minimal polynomial** of $a$ over $F$.
```

## DEPENDENCY: def-field-extension-generated-subfields-and-simple-extension

```markdown
title: 'Field extensions, generated subrings $F[S]$, generated subfields $F(S)$, and simple extensions'

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

## DEPENDENCY: thm-polynomial-ring-over-a-field-is-a-ufd

```markdown
title: 'For every field $F$, $F[x]$ is a unique factorisation domain'

## Statement
For every field $F$, the polynomial ring $F[x]$ is a unique factorisation domain.
```

## DEPENDENCY: thm-tower-law-for-finite-field-extensions

```markdown
title: "Tower law for finite extensions: $[L:F]=[L:K][K:F]$"

## Statement
Let $F\subseteq K\subseteq L$ be fields. If $K/F$ and $L/K$ are finite, then $L/F$ is finite and

$$[L:F]=[L:K][K:F].$$
```

## DEPENDENCY: def-vector-space

```markdown
title: "Vector space over a field"

## Definition
Let $F$ be a field ([[def-field]]), with additive identity $0_F$, multiplicative
identity $1_F$, and the field axioms as stated there. A **vector space over $F$**,
also called an **$F$-vector space**, consists of

- a set $V$, whose elements are called **vectors**;
- a binary operation $+ : V \times V \to V$ on $V$ ([[def-binary-operation]]),
  the **vector addition**;
- an element $0_V \in V$, the **zero vector**;
- a map $\cdot \,:\, F \times V \to V$, the **scalar multiplication**, written
  $\lambda v := \cdot(\lambda, v)$;

subject to the following axioms, in which $u, v \in V$ and $\lambda, \mu \in F$
are arbitrary.

- **(V1)** $(V, +, 0_V)$ is an abelian group ([[def-group]]): $+$ is associative
  and commutative, $0_V$ is a two-sided identity for $+$
  ([[def-identity-element]]), and every $v \in V$ has an additive inverse
  ([[def-invertible-element]]).
- **(V2)** $\lambda(u + v) = \lambda u + \lambda v$.
- **(V3)** $(\lambda + \mu)v = \lambda v + \mu v$.
- **(V4)** $(\lambda\mu)v = \lambda(\mu v)$.
- **(V5)** $1_F v = v$.

The elements of $F$ are called **scalars**. When several vector spaces are in
play we write $0_V$ for the zero of $V$, and we write $-v$ for the additive
inverse of $v$ and $u - v := u + (-v)$.

**The notation $0_V$ and $-v$ is legitimate.** Axiom (V1) asserts only that some
two-sided identity and some additive inverses exist. That there is at most one
two-sided identity for $+$ is [[lem-identity-unique]], and that an invertible
element of a monoid has exactly one inverse is [[lem-inverse-unique]]; both are
proved before [[def-group]] and are inherited here with the group structure. So
$0_V$ and $-v$ denote well-defined elements, and nothing below re-derives them.

**What (V1) buys, and why it is not restated.** Associativity, commutativity, the
identity law $v + 0_V = v = 0_V + v$, the inverse law $v + (-v) = 0_V$,
cancellation ([[lem-group-cancellation]]) and the inverse identities
([[lem-group-inverse-laws]]) are facts about abelian groups. They are quoted from
the group page wherever they are used and are never proved again for vectors.
```

## DEPENDENCY: def-linear-basis

```markdown
title: "Basis of a vector space: a linearly independent spanning subset; and ordered basis: an injective finite list whose image is a basis"

## Definition
Let $V$ be a vector space over a field $F$ ([[def-vector-space]]).

A subset $B \subseteq V$ is a **basis of $V$** when

- **(B1)** $B$ is linearly independent ([[def-linear-independence]]), and
- **(B2)** $B$ spans $V$, that is $\operatorname{span}(B) = V$
  ([[def-linear-combination-and-span]], which is where the words *spans* and
  *spanning set* are fixed; they are not redefined here).

**The empty set is a basis of the zero space, and of nothing else.**
$\varnothing$ is linearly independent ([[def-linear-independence]]) and
$\operatorname{span}(\varnothing) = \{0_V\}$
([[lem-span-is-the-set-of-linear-combinations]]), so $\varnothing$ is a basis of
$V$ exactly when $V = \{0_V\}$. This is the case $n = 0$ from which every
induction on this page starts, and it is a genuine case rather than a convention.

### Ordered bases

An **ordered basis of $V$** is a finite list $v : n \to V$, with $n \in
\mathbb{N}$ and $n = \{0, \dots, n-1\}$ the von Neumann natural
([[def-natural-numbers]], [[lem-nat-order-is-membership]]), such that $v$ is
injective ([[def-injection-surjection-bijection]]) and its image $v[n]$ is a
basis of $V$.

By claim 6 of [[lem-independent-list-is-injective]], a list is linearly
independent exactly when it is injective with linearly independent image, so an
ordered basis is equally described as a **linearly independent list $v : n \to V$
with $\operatorname{span}(v[n]) = V$**: the injectivity does not have to be
imposed separately. The empty list is the ordered basis of the zero space.

An ordered basis is a list, so it carries an order; a basis is a set, so it does
not. Reordering an ordered basis gives a different ordered basis with the same
image, and the coordinates of
[[thm-unique-coordinates-with-respect-to-an-ordered-basis]] are attached to the
list, not to the set.

### Bases of a linear subspace

Let $U$ be a linear subspace of $V$ ([[def-linear-subspace]]), which is itself a
vector space over $F$, with the addition, the zero vector and the scalar
multiplication of $V$ restricted to $U$. For $A \subseteq U$ the two readings of
"$A$ is a basis" — computed inside $U$, or computed inside $V$ — agree, so the
phrase needs no disambiguation below.

- **Independence agrees.** The finite sums $\sum_{i<n}\lambda_i a_i$ of a list
  $a : n \to U$ are given by the same recursion in $U$ as in $V$
  ([[def-monoid-finite-product]]), the base value $0_V$ and the operation $+$
  being literally those of $V$ ([[def-linear-subspace]]). So a list into $U$ has
  the same sums whichever space it is read in, and the vanishing condition of
  [[def-linear-independence]] is the same condition in both.
- **The span agrees.** A subset of $U$ is a linear subspace of $U$ exactly when it
  is a linear subspace of $V$, conditions (W1), (W2), (W3) being the same
  conditions in either reading. Now $\operatorname{span}_V(A) \subseteq U$, since
  $U$ is a linear subspace of $V$ containing $A$ and the span is contained in
  every such subspace; so $\operatorname{span}_V(A)$ is a linear subspace of $U$
  containing $A$, whence $\operatorname{span}_U(A) \subseteq \operatorname{span}_V(A)$.
  Conversely $\operatorname{span}_U(A)$ is a linear subspace of $V$ containing
  $A$, whence $\operatorname{span}_V(A) \subseteq \operatorname{span}_U(A)$. The
  two are therefore equal, and we write $\operatorname{span}(A)$ for both.

Consequently $A \subseteq U$ is a basis of the vector space $U$ if and only if
$A$ is linearly independent as a subset of $V$ and $\operatorname{span}(A) = U$.
```

## DEPENDENCY: def-finite-cardinality

```markdown
title: "The cardinality $\\lvert A\\rvert$ of a finite set"

## Definition
Throughout this page $\mathbb{N}$ is the set of von Neumann naturals
([[def-natural-numbers]]): $0 = \varnothing$, $\sigma(n) = n \cup \{n\}$, and
$n = \{\, m \in \mathbb{N} : m < n \,\}$ is itself the set of its predecessors,
the order being the additive order of [[def-nat-order]] identified with
membership in [[lem-nat-order-is-membership]]. Write $A \approx B$ when a
bijection $A \to B$ exists ([[def-equinumerous]],
[[def-injection-surjection-bijection]]). A set $A$ is **finite** when
$A \approx n$ for some $n \in \mathbb{N}$ ([[def-countable]]).

**Definition.** Let $A$ be a finite set. Then there is **exactly one**
$n \in \mathbb{N}$ with $A \approx n$, and we write

$$\lvert A\rvert := \text{that } n,$$

the **cardinality**, or number of elements, of $A$. The notation $\lvert A\rvert$
is defined for finite $A$ only, and its value is a natural number.

**Why exactly one, which is the whole content of the definition.** At least one
such $n$ exists: that is literally what "$A$ is finite" says. At most one exists:
if $A \approx n$ and $A \approx m$ with $n, m \in \mathbb{N}$, then $n \approx A$,
because the inverse of a bijection is a bijection, and hence $n \approx m$,
because a composition of bijections is a bijection
([[def-injection-surjection-bijection]]); and $n \approx m$ forces $n = m$ by
claim 3 of [[lem-pigeonhole]]. So $\lvert A\rvert$ names a single natural number
and not a family of choices.

**Four consequences, proved here because everything on this page uses them.**

**(a) $\lvert n\rvert = n$ for every $n \in \mathbb{N}$.** The identity map
$\mathrm{id}_n$ is a bijection $n \to n$, so $n \approx n$; thus $n$ is finite and
the unique natural equinumerous with it is $n$ itself.

**(b) $\lvert\varnothing\rvert = 0$, and a finite $A$ satisfies
$\lvert A\rvert = 0$ if and only if $A = \varnothing$.** Since $0 = \varnothing$,
part (a) gives $\lvert\varnothing\rvert = 0$. Conversely, if $\lvert A\rvert = 0$
then there is a bijection $f : A \to \varnothing$; were some $a \in A$, the value
$f(a)$ would be an element of $\varnothing$, and $\varnothing$ has none, so
$A = \varnothing$.

**(c) Transport along a bijection.** If $A$ is finite and $f : A \to B$ is a
bijection, then $B$ is finite and $\lvert B\rvert = \lvert A\rvert$. Indeed
$B \approx A$ through $f^{-1}$ and $A \approx \lvert A\rvert$, so
$B \approx \lvert A\rvert$ by transitivity.

**(d) Equality of cardinalities is equinumerosity.** For finite $A$ and $B$:
$\lvert A\rvert = \lvert B\rvert$ if and only if $A \approx B$. If the
cardinalities agree then $A \approx \lvert A\rvert = \lvert B\rvert \approx B$;
conversely $A \approx B$ gives $\lvert B\rvert = \lvert A\rvert$ by (c).
```
