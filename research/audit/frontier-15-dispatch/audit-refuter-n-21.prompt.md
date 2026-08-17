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
label: n-21

run: frontier-15
role: refuter
label: n-21
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

## ITEM: cor-conjugate-elements-are-related-by-an-automorphism-of-an-algebraic-closure

```markdown
---
id: cor-conjugate-elements-are-related-by-an-automorphism-of-an-algebraic-closure
kind: corollary
title: "Assuming Choice, conjugates in an algebraic closure are related by a base automorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-conjugate-elements-over-a-field, prop-base-field-embeddings-carry-elements-to-conjugates, thm-universal-property-of-adjoining-an-irreducible-root, thm-algebraic-embedding-extension, def-algebraic-closure, thm-evaluation-kernel-and-minimal-polynomial]
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
    - title: "P. L. Clark, Field Theory, Chapters 3 to 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. Let $\Omega$ be an algebraic closure of $F$ and let $\alpha,\beta\in\Omega$.
Then $\alpha$ and $\beta$ are conjugate over $F$ if and only if some
$F$-automorphism of $\Omega$ sends $\alpha$ to $\beta$.

## Facts & Assumptions

**Given:** The Axiom of Choice, an algebraic closure $\Omega/F$, and elements $\alpha,\beta\in\Omega$.

[L1] An $F$-embedding carries an algebraic element to a conjugate ([[prop-base-field-embeddings-carry-elements-to-conjugates]]).

[L2] Conjugates are roots of the same minimal polynomial over $F$ ([[def-conjugate-elements-over-a-field]]).

[L3] A chosen conjugate root induces an $F$-isomorphism between the corresponding simple extensions ([[thm-universal-property-of-adjoining-an-irreducible-root]]).

[L4] Assuming Choice, a base embedding extends across an algebraic extension into an algebraically closed field ([[thm-algebraic-embedding-extension]]).

[L5] An algebraic closure is an algebraic extension whose top field is algebraically closed ([[def-algebraic-closure]]).

[L6] Every algebraic element has a monic irreducible minimal polynomial over the base ([[thm-evaluation-kernel-and-minimal-polynomial]]).

## Proof

**Proof technique:** direct.

1.1 If an $F$-automorphism sends $\alpha$ to $\beta$, then [L1] makes them conjugate. [L1]

1.2 Conversely, suppose they are conjugate. By [L2] and [L3], there is an $F$-isomorphism $F(\alpha)\to F(\beta)$ sending $\alpha$ to $\beta$. [L2, L3]

2.1 Apply [L4] with base $F(\alpha)$ to extend this map to an embedding $\tau:\Omega\to\Omega$. Its image $E$ is algebraically closed because it is isomorphic to $\Omega$. Every $b\in\Omega$ is algebraic over $F\subseteq E$ by [L5], so [L6] gives its minimal polynomial over $E$; this polynomial has a root in $E$ and is therefore linear. Hence $b\in E$, so $\tau$ is surjective and is an automorphism. [step 1.2, L4, L5, L6]

3.1 This automorphism sends $\alpha$ to $\beta$, proving the reverse implication. [step 1.2, step 2.1] ∎

```

### Recorded proof contract for cor-conjugate-elements-are-related-by-an-automorphism-of-an-algebraic-closure

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "prop-base-field-embeddings-carry-elements-to-conjugates",
   "source_section": "Statement",
   "quote": "Let $\\sigma:K\\to L$ be an $F$-embedding and let $\\alpha\\in K$ be algebraic\nover $F$. Then $\\sigma(\\alpha)$ is conjugate to $\\alpha$ over $F$. In\nparticular, an $F$-endomorphism of a splitting field permutes the distinct roots\nof every base polynomial that splits there.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-conjugate-elements-over-a-field",
   "source_section": "Definition",
   "quote": "Let $\\alpha$ and $\\beta$ be elements of field extensions of $F$, both\nalgebraic over $F$. They are **conjugate over $F$** when they have the same\nminimal polynomial over $F$ ([[thm-evaluation-kernel-and-minimal-polynomial]]),\nor equivalently when $\\beta$ is a root of the minimal polynomial of $\\alpha$.\nThe relation is relative to the chosen base field. Relative embeddings and\nautomorphisms are those of\n[[def-f-homomorphisms-and-embeddings-of-field-extensions]].",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-universal-property-of-adjoining-an-irreducible-root",
   "source_section": "Statement",
   "quote": "Let $p\\in F[x]$ be monic and irreducible, let $K=F[x]/(p)$, and put\n$a=x+(p)$. If $L/F$ is a field extension and $b\\in L$ satisfies $p(b)=0$,\nthere is a unique field homomorphism\n$$\\varphi:K\\longrightarrow L$$\nthat fixes $F$ and sends $a$ to $b$. Its image is $F[b]$.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-algebraic-embedding-extension",
   "source_section": "Statement",
   "quote": "Assume the Axiom of Choice. Let $K/F$ be algebraic, let $\\Omega$ be\nalgebraically closed, and let $\\sigma:F\\to\\Omega$ be a field embedding. Then\n$\\sigma$ extends to a field embedding $\\widetilde\\sigma:K\\to\\Omega$. The proof\nuses Zorn's lemma.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L5",
   "source": "def-algebraic-closure",
   "source_section": "Definition",
   "quote": "An **algebraic closure** of a field $F$ is a field extension $\\overline F/F$\nthat is algebraic ([[def-algebraic-and-transcendental-elements]]) and whose\nfield $\\overline F$ is algebraically closed\n([[def-algebraically-closed-field]]). The notation $\\overline F$ denotes a\nchosen algebraic closure; it does not specify a preferred one or a preferred\nisomorphism between two choices.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L6",
   "source": "thm-evaluation-kernel-and-minimal-polynomial",
   "source_section": "Statement",
   "quote": "Let $K/F$ be a field extension and $a\\in K$. Evaluation is the unique\n$F$-algebra homomorphism\n$$\\operatorname{ev}_a:F[x]\\longrightarrow K,\\qquad f\\longmapsto f(a).$$\nIf $a$ is transcendental, its kernel is zero. If $a$ is algebraic, there is a\nunique monic irreducible polynomial $m_a\\in F[x]$ such that\n$$\\ker(\\operatorname{ev}_a)=(m_a),$$\nand, for every $f\\in F[x]$,\n$$f(a)=0\\quad\\Longleftrightarrow\\quad m_a\\mid f.$$\nThe polynomial $m_a$ is the **minimal polynomial** of $a$ over $F$.",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "If an $F$-automorphism sends $\\alpha$ to $\\beta$, then [L1] makes them conjugate.",
   "step": "1.1",
   "inputs": [
    "L1"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "Conversely, suppose they are conjugate. By [L2] and [L3], there is an $F$-isomorphism $F(\\alpha)\\to F(\\beta)$ sending $\\alpha$ to $\\beta$.",
   "step": "1.2",
   "inputs": [
    "L2",
    "L3"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Apply [L4] with base $F(\\alpha)$ to extend this map to an embedding $\\tau:\\Omega\\to\\Omega$. Its image $E$ is algebraically closed because it is isomorphic to $\\Omega$. Every $b\\in\\Omega$ is algebraic over $F\\subseteq E$ by [L5], so [L6] gives its minimal polynomial over $E$; this polynomial has a root in $E$ and is therefore linear. Hence $b\\in E$, so $\\tau$ is surjective and is an automorphism.",
   "step": "2.1",
   "inputs": [
    "step 1.2",
    "L4",
    "L5",
    "L6"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "This automorphism sends $\\alpha$ to $\\beta$, proving the reverse implication.",
   "step": "3.1",
   "inputs": [
    "step 1.2",
    "step 2.1"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For Two elements of an algebraic closure are conjugate over F exactly when an F-automorphism carries one to the other, no possibly empty indexed operation occurs; the proof instead begins from One direction is preservation of minimal polynomials."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For Two elements of an algebraic closure are conjugate over F exactly when an F-automorphism carries one to the other, the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from One direction is preservation of minimal polynomials."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For Two elements of an algebraic closure are conjugate over F exactly when an F-automorphism carries one to the other, step 1.1 states: \"If an $F$-automorphism sends $\\alpha$ to $\\beta$, then [L1] makes them conjugate.\" This is the final proof check that every degree-one, exponent-one, singleton, or identity instance allowed by the hypotheses is evaluated."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For Two elements of an algebraic closure are conjugate over F exactly when an F-automorphism carries one to the other, step 1.1 states: \"If an $F$-automorphism sends $\\alpha$ to $\\beta$, then [L1] makes them conjugate.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For Two elements of an algebraic closure are conjugate over F exactly when an F-automorphism carries one to the other, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from One direction is preservation of minimal polynomials."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For Two elements of an algebraic closure are conjugate over F exactly when an F-automorphism carries one to the other, step 2.1 states: \"Apply [L4] with base $F(\\alpha)$ to extend this map to an embedding $\\tau:\\Omega\\to\\Omega$. Its image $E$ is algebraically closed because it is isomorphic to $\\Omega$. Every $b\\in\\Omega$ is algebraic over $F\\subseteq E$ by [L5], so [L6] gives its minimal polynomial over $E$; this polynomial has a root in $E$ and is therefore linear. Hence $b\\in E$, so $\\tau$ is surjective and is an automorphism.\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "For Two elements of an algebraic closure are conjugate over F exactly when an F-automorphism carries one to the other, step 1.1 proves that an F-automorphism carrying alpha to beta makes the two elements conjugate."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "For Two elements of an algebraic closure are conjugate over F exactly when an F-automorphism carries one to the other, steps 1.2, 2.1, and 3.1 extend the isomorphism determined by conjugacy to an automorphism carrying alpha to beta."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-finite-normal-closures-exist-and-are-finite

```markdown
---
id: thm-finite-normal-closures-exist-and-are-finite
kind: theorem
title: "The normal closure of a finite extension exists and is finite"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-normal-closure-of-an-algebraic-extension, cor-splitting-fields-exist-for-finite-families, prop-algebraic-splitting-extensions-are-normal, thm-finitely-generated-algebraic-extensions-are-finite, def-extension-degree-and-finite-extension]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Section 9.15: Normal extensions"
      url: "https://stacks.math.columbia.edu/tag/09HL"
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement

Let $K/F$ be a finite extension embedded in an algebraic closure $\Omega$ of
$F$. Its normal closure in $\Omega$ is a finite extension of $F$. If
$K=F(\alpha_1,\ldots,\alpha_r)$, it is the splitting field in $\Omega$ of the
product of the minimal polynomials of the $\alpha_i$.

## Facts & Assumptions

**Given:** A finite extension $F\subseteq K\subseteq\Omega$ with $\Omega/F$ an algebraic closure.

[L1] The normal closure is the intersection of the normal intermediate extensions containing $K$ ([[def-normal-closure-of-an-algebraic-extension]]).

[L2] A finite family of nonzero polynomials has a splitting field ([[cor-splitting-fields-exist-for-finite-families]]).

[L3] An algebraic splitting extension is normal ([[prop-algebraic-splitting-extensions-are-normal]]).

[L4] A field generated by finitely many algebraic elements is finite over the base ([[thm-finitely-generated-algebraic-extensions-are-finite]]).

[L5] A finite extension is finite-dimensional over its base ([[def-extension-degree-and-finite-extension]]).

## Proof

**Proof technique:** direct.

1.1 Choose a finite $F$-basis of $K$ using [L5]; it is also a finite generating family $\alpha_1,\ldots,\alpha_r$. Let $f_i$ be the minimal polynomial of $\alpha_i$ over $F$, and inside $\Omega$ let $E$ be the field generated by all roots of $f_1\cdots f_r$. [L2, L5, choose]

2.1 The field $E$ is generated by finitely many algebraic roots, so [L4] makes $E/F$ finite. It is a splitting field of the product and is normal by [L3], and it contains every $\alpha_i$, hence $K$. [step 1.1, L3, L4]

2.2 If $H/F$ is any normal intermediate extension in $\Omega$ containing $K$, then each $f_i$, having the root $\alpha_i\in H$, splits in $H$. Thus $H$ contains all generators of $E$ and $E\subseteq H$. [step 1.1, algebra]

3.1 Therefore $E$ is contained in every field intersected in [L1], while step 2.1 makes $E$ one of those fields. It equals the normal closure, which is consequently finite. [step 2.1, step 2.2, L1] ∎

```

### Recorded proof contract for thm-finite-normal-closures-exist-and-are-finite

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-normal-closure-of-an-algebraic-extension",
   "source_section": "Definition",
   "quote": "Let $F\\subseteq K\\subseteq\\Omega$, where $K/F$ is algebraic and $\\Omega/F$ is\na fixed algebraic closure ([[def-algebraic-closure]]). The **normal closure of\n$K/F$ in $\\Omega$** is\n\n$$N_{\\Omega}(K/F):=\\bigcap\\{E:K\\subseteq E\\subseteq\\Omega\\text{ and }E/F\\text{ is normal}\\}.$$\n\nThe family being intersected is nonempty: $\\Omega/F$ is normal because every\nminimal polynomial over $F$ splits in the algebraically closed field $\\Omega$\n([[def-normal-algebraic-extension]]). Its intersection is normal by\n[[prop-nonempty-intersections-of-normal-subextensions-are-normal]], so the\ndefinition produces the smallest normal intermediate extension containing $K$.",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L2",
   "source": "cor-splitting-fields-exist-for-finite-families",
   "source_section": "Statement",
   "quote": "Let $f_1,\\ldots,f_m\\in F[x]$ be nonzero, where $m\\in\\mathbb N$. A splitting field of the product\n$$ h=\\prod_{j=1}^m f_j $$\nis a splitting field of the family $\\{f_1,\\ldots,f_m\\}$. Hence every finite family of nonzero polynomials has a splitting field. For $m=0$, $h=1$ and the splitting field is $F$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "prop-algebraic-splitting-extensions-are-normal",
   "source_section": "Statement",
   "quote": "Let $E/F$ be algebraic. If $E$ is a splitting field over $F$ of a nonzero polynomial $f\\in F[x]$, then $E/F$ is normal.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-finitely-generated-algebraic-extensions-are-finite",
   "source_section": "Statement",
   "quote": "If $a_1,\\ldots,a_r$ are algebraic over $F$, then $F(a_1,\\ldots,a_r)/F$ is finite.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L5",
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
   "claim": "Choose a finite $F$-basis of $K$ using [L5]; it is also a finite generating family $\\alpha_1,\\ldots,\\alpha_r$. Let $f_i$ be the minimal polynomial of $\\alpha_i$ over $F$, and inside $\\Omega$ let $E$ be the field generated by all roots of $f_1\\cdots f_r$.",
   "step": "1.1",
   "inputs": [
    "L2",
    "L5",
    "choose"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "The field $E$ is generated by finitely many algebraic roots, so [L4] makes $E/F$ finite. It is a splitting field of the product and is normal by [L3], and it contains every $\\alpha_i$, hence $K$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L3",
    "L4"
   ]
  },
  {
   "id": "step-2-2",
   "claim": "If $H/F$ is any normal intermediate extension in $\\Omega$ containing $K$, then each $f_i$, having the root $\\alpha_i\\in H$, splits in $H$. Thus $H$ contains all generators of $E$ and $E\\subseteq H$.",
   "step": "2.2",
   "inputs": [
    "step 1.1",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Therefore $E$ is contained in every field intersected in [L1], while step 2.1 makes $E$ one of those fields. It equals the normal closure, which is consequently finite.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "step 2.2",
    "L1"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "For The normal closure of a finite extension exists and is finite, step 1.1 states: \"Choose a finite $F$-basis of $K$ using [L5]; it is also a finite generating family $\\alpha_1,\\ldots,\\alpha_r$. Let $f_i$ be the minimal polynomial of $\\alpha_i$ over $F$, and inside $\\Omega$ let $E$ be the field generated by all roots of $f_1\\cdots f_r$.\" This is the final proof check that the possibly empty family, list, union, product, or tower has its neutral case computed."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For The normal closure of a finite extension exists and is finite, the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from Choose finitely many algebraic generators and take in the fixed closure the splitting field of the product of their minimal polynomials."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "For The normal closure of a finite extension exists and is finite, no free numerical parameter has a separate value-one branch; the proof instead begins from Choose finitely many algebraic generators and take in the fixed closure the splitting field of the product of their minimal polynomials."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For The normal closure of a finite extension exists and is finite, step 2.2 states: \"If $H/F$ is any normal intermediate extension in $\\Omega$ containing $K$, then each $f_i$, having the root $\\alpha_i\\in H$, splits in $H$. Thus $H$ contains all generators of $E$ and $E\\subseteq H$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For The normal closure of a finite extension exists and is finite, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Choose finitely many algebraic generators and take in the fixed closure the splitting field of the product of their minimal polynomials."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For The normal closure of a finite extension exists and is finite, step 2.2 states: \"If $H/F$ is any normal intermediate extension in $\\Omega$ containing $K$, then each $f_i$, having the root $\\alpha_i\\in H$, splits in $H$. Thus $H$ contains all generators of $E$ and $E\\subseteq H$.\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim The normal closure of a finite extension exists and is finite is not a biconditional, so no forward implication is asserted; the proof begins from Choose finitely many algebraic generators and take in the fixed closure the splitting field of the product of their minimal polynomials."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim The normal closure of a finite extension exists and is finite is not a biconditional, so no reverse implication is asserted; the proof begins from Choose finitely many algebraic generators and take in the fixed closure the splitting field of the product of their minimal polynomials."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-separable-degree-is-independent-of-the-algebraic-closure

```markdown
---
id: thm-separable-degree-is-independent-of-the-algebraic-closure
kind: theorem
title: "The separable degree is independent of the chosen algebraic closure"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separable-degree, def-extension-degree-and-finite-extension, thm-evaluation-kernel-and-minimal-polynomial, def-polynomials-that-split-and-splitting-fields, cor-splitting-fields-are-unique-up-to-base-isomorphism]
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

For a finite extension $K/F$, the number of $F$-embeddings of $K$ into an
algebraic closure of $F$ is independent of the chosen algebraic closure.

## Facts & Assumptions

**Given:** A finite extension $K/F$ and algebraic closures $\Omega_1/F$ and $\Omega_2/F$.

[L1] Separable degree is the finite cardinality of the set of base-field embeddings into a chosen algebraic closure ([[def-separable-degree]]).

[L2] A finite extension has a finite basis over its base ([[def-extension-degree-and-finite-extension]]).

[L3] Every algebraic element has a unique monic irreducible minimal polynomial over the base ([[thm-evaluation-kernel-and-minimal-polynomial]]).

[L4] A splitting field of a polynomial is generated over the base by all of its roots ([[def-polynomials-that-split-and-splitting-fields]]).

[L5] Any two splitting fields of the same nonzero polynomial are isomorphic over the base ([[cor-splitting-fields-are-unique-up-to-base-isomorphism]]).

## Proof

**Proof technique:** direct.

1.1 Choose a finite $F$-basis $\alpha_1,\ldots,\alpha_r$ of $K$ by [L2], and let $f$ be the product of their minimal polynomials over $F$ from [L3]. For $j=1,2$, let $E_j\subseteq\Omega_j$ be generated over $F$ by all roots of $f$ in $\Omega_j$. Since $\Omega_j$ is algebraically closed, $f$ splits there, and [L4] makes $E_j/F$ a splitting field of $f$. [L2, L3, L4, choose]

1.2 By [L5], choose an $F$-isomorphism $\theta:E_1\to E_2$. Postcomposition with $\theta$ gives a bijection $\operatorname{Hom}_F(K,E_1)\to\operatorname{Hom}_F(K,E_2)$, with inverse given by postcomposition with $\theta^{-1}$. [L5, construct]

2.1 Every $F$-embedding $\sigma:K\to\Omega_j$ sends each $\alpha_i$ to a root of its minimal polynomial, so $\sigma(K)=F(\sigma(\alpha_1),\ldots,\sigma(\alpha_r))\subseteq E_j$. Hence $\operatorname{Hom}_F(K,\Omega_j)=\operatorname{Hom}_F(K,E_j)$. [step 1.1, L3, algebra]

3.1 Steps 2.1 and 1.2 give a bijection between the embedding sets into $\Omega_1$ and $\Omega_2$. Their finite cardinalities are equal, so the value in [L1] is independent of the closure. [step 2.1, step 1.2, L1] ∎

```

### Recorded proof contract for thm-separable-degree-is-independent-of-the-algebraic-closure

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-separable-degree",
   "source_section": "Definition",
   "quote": "Let $K/F$ be a finite field extension\n([[def-extension-degree-and-finite-extension]]) and let $\\Omega/F$ be an\nalgebraic closure. Assuming Choice, such a field exists by\n[[thm-existence-of-algebraic-closures]]. The\n**separable degree** of $K/F$ is\n\n$$[K:F]_s:=\\left|\\operatorname{Hom}_F(K,\\Omega)\\right|,$$\n\nwhere $\\operatorname{Hom}_F$ denotes the set of $F$-embeddings of\n[[def-f-homomorphisms-and-embeddings-of-field-extensions]]. This set is finite:\na finite $F$-basis generates $K$, an embedding is determined by the images of\nthose finitely many generators, and each image is among the finitely many roots\nof its minimal polynomial by\n[[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]].\nThus its cardinality is defined by [[def-finite-cardinality]]. The value is\nindependent of the chosen algebraic closure by\n[[thm-separable-degree-is-independent-of-the-algebraic-closure]].",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-extension-degree-and-finite-extension",
   "source_section": "Definition",
   "quote": "Let $K/F$ be a field extension. Scalar multiplication by $F\\subseteq K$, together with addition in $K$, makes $K$ an $F$-vector space. The extension is **finite** when this vector space is finite-dimensional. In that case its **degree** is\n\n$$[K:F]:=\\dim_FK.$$\n\nNo numerical degree is assigned here to an infinite-dimensional extension.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-evaluation-kernel-and-minimal-polynomial",
   "source_section": "Statement",
   "quote": "Let $K/F$ be a field extension and $a\\in K$. Evaluation is the unique\n$F$-algebra homomorphism\n$$\\operatorname{ev}_a:F[x]\\longrightarrow K,\\qquad f\\longmapsto f(a).$$\nIf $a$ is transcendental, its kernel is zero. If $a$ is algebraic, there is a\nunique monic irreducible polynomial $m_a\\in F[x]$ such that\n$$\\ker(\\operatorname{ev}_a)=(m_a),$$\nand, for every $f\\in F[x]$,\n$$f(a)=0\\quad\\Longleftrightarrow\\quad m_a\\mid f.$$\nThe polynomial $m_a$ is the **minimal polynomial** of $a$ over $F$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L4",
   "source": "def-polynomials-that-split-and-splitting-fields",
   "source_section": "Definition",
   "quote": "For a family $\\mathcal F$ of nonzero polynomials in $F[x]$, a **splitting field of $\\mathcal F$ over $F$** is a field extension $E/F$ such that every member of $\\mathcal F$ splits over $E$ and $E$ is generated over $F$ by all roots in $E$ of all polynomials in $\\mathcal F$. A splitting field of the one-element family $\\{f\\}$ is called a splitting field of $f$. For the empty family, the set of roots is empty and its splitting field is $F$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "cor-splitting-fields-are-unique-up-to-base-isomorphism",
   "source_section": "Statement",
   "quote": "If $E/F$ and $E'/F$ are splitting fields of the same nonzero polynomial $f\\in F[x]$, then there is a field isomorphism $E\\to E'$ that fixes $F$ pointwise.",
   "uses": [
    "1.2"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Choose a finite $F$-basis $\\alpha_1,\\ldots,\\alpha_r$ of $K$ by [L2], and let $f$ be the product of their minimal polynomials over $F$ from [L3]. For $j=1,2$, the subfield $E_j\\subseteq\\Omega_j$ generated by all roots of $f$ is a splitting field by [L4].",
   "step": "1.1",
   "inputs": [
    "L2",
    "L3",
    "L4",
    "choose"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "By [L5], choose an $F$-isomorphism $\\theta:E_1\\to E_2$. Postcomposition with $\\theta$ is a bijection of the two embedding sets, with inverse induced by $\\theta^{-1}$.",
   "step": "1.2",
   "inputs": [
    "L5",
    "construct"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Every $F$-embedding of $K$ into $\\Omega_j$ sends the chosen basis generators to roots of their minimal polynomials, so its image lies in $E_j$ and $\\operatorname{Hom}_F(K,\\Omega_j)=\\operatorname{Hom}_F(K,E_j)$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L3",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Steps 2.1 and 1.2 give a bijection between the embedding sets into $\\Omega_1$ and $\\Omega_2$, so their finite cardinalities and the value in [L1] agree.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "step 1.2",
    "L1"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "A finite extension is a nonzero finite-dimensional vector space, so its basis in step 1.1 is nonempty and no empty product occurs."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "The polynomial in step 1.1 is a product of nonzero monic minimal polynomials, so the nonzero-polynomial hypothesis of [L5] is met."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "In step 1.1, for $K=F$ choose the basis $(1)$; both generated splitting fields are $F$, and the two embedding sets are singletons."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Repeated roots of the product do not matter: $E_j$ is generated by the set of all roots, and step 2.1 uses only root containment."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "All parameters are fields, polynomials, and finite sets; there is no ordered or limiting endpoint."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "Step 1.1 uses the supplied algebraic closures and a finite basis, while step 1.2 uses [L5] for the splitting-field isomorphism."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The statement is an invariance assertion, not a biconditional."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The statement is an invariance assertion, not a biconditional."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, title and claim section only

## DEPENDENCY: def-conjugate-elements-over-a-field

```markdown
title: "Conjugate algebraic elements over a field"

## Definition
Let $\alpha$ and $\beta$ be elements of field extensions of $F$, both
algebraic over $F$. They are **conjugate over $F$** when they have the same
minimal polynomial over $F$ ([[thm-evaluation-kernel-and-minimal-polynomial]]),
or equivalently when $\beta$ is a root of the minimal polynomial of $\alpha$.
The relation is relative to the chosen base field. Relative embeddings and
automorphisms are those of
[[def-f-homomorphisms-and-embeddings-of-field-extensions]].
```

## DEPENDENCY: prop-base-field-embeddings-carry-elements-to-conjugates

```markdown
title: "A base-field embedding carries an algebraic element to a conjugate"

## Statement
Let $\sigma:K\to L$ be an $F$-embedding and let $\alpha\in K$ be algebraic
over $F$. Then $\sigma(\alpha)$ is conjugate to $\alpha$ over $F$. In
particular, an $F$-endomorphism of a splitting field permutes the distinct roots
of every base polynomial that splits there.
```

## DEPENDENCY: thm-universal-property-of-adjoining-an-irreducible-root

```markdown
title: 'Universal property of adjoining a root of an irreducible polynomial'

## Statement
Let $p\in F[x]$ be monic and irreducible, let $K=F[x]/(p)$, and put
$a=x+(p)$. If $L/F$ is a field extension and $b\in L$ satisfies $p(b)=0$,
there is a unique field homomorphism
$$\varphi:K\longrightarrow L$$
that fixes $F$ and sends $a$ to $b$. Its image is $F[b]$.
```

## DEPENDENCY: thm-algebraic-embedding-extension

```markdown
title: "Assuming Choice, a base-field embedding extends across every algebraic extension"

## Statement
Assume the Axiom of Choice. Let $K/F$ be algebraic, let $\Omega$ be
algebraically closed, and let $\sigma:F\to\Omega$ be a field embedding. Then
$\sigma$ extends to a field embedding $\widetilde\sigma:K\to\Omega$. The proof
uses Zorn's lemma.
```

## DEPENDENCY: def-algebraic-closure

```markdown
title: "An algebraic closure of a field"

## Definition
An **algebraic closure** of a field $F$ is a field extension $\overline F/F$
that is algebraic ([[def-algebraic-and-transcendental-elements]]) and whose
field $\overline F$ is algebraically closed
([[def-algebraically-closed-field]]). The notation $\overline F$ denotes a
chosen algebraic closure; it does not specify a preferred one or a preferred
isomorphism between two choices.
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

## DEPENDENCY: def-normal-closure-of-an-algebraic-extension

```markdown
title: "The normal closure of an algebraic extension inside a fixed algebraic closure"

## Definition
Let $F\subseteq K\subseteq\Omega$, where $K/F$ is algebraic and $\Omega/F$ is
a fixed algebraic closure ([[def-algebraic-closure]]). The **normal closure of
$K/F$ in $\Omega$** is

$$N_{\Omega}(K/F):=\bigcap\{E:K\subseteq E\subseteq\Omega\text{ and }E/F\text{ is normal}\}.$$

The family being intersected is nonempty: $\Omega/F$ is normal because every
minimal polynomial over $F$ splits in the algebraically closed field $\Omega$
([[def-normal-algebraic-extension]]). Its intersection is normal by
[[prop-nonempty-intersections-of-normal-subextensions-are-normal]], so the
definition produces the smallest normal intermediate extension containing $K$.
```

## DEPENDENCY: cor-splitting-fields-exist-for-finite-families

```markdown
title: 'Every finite family of nonzero polynomials has a splitting field, obtained from their product'

## Statement
Let $f_1,\ldots,f_m\in F[x]$ be nonzero, where $m\in\mathbb N$. A splitting field of the product
$$ h=\prod_{j=1}^m f_j $$
is a splitting field of the family $\{f_1,\ldots,f_m\}$. Hence every finite family of nonzero polynomials has a splitting field. For $m=0$, $h=1$ and the splitting field is $F$.
```

## DEPENDENCY: prop-algebraic-splitting-extensions-are-normal

```markdown
title: 'An algebraic extension that is a splitting field of a polynomial is normal'

## Statement
Let $E/F$ be algebraic. If $E$ is a splitting field over $F$ of a nonzero polynomial $f\in F[x]$, then $E/F$ is normal.
```

## DEPENDENCY: thm-finitely-generated-algebraic-extensions-are-finite

```markdown
title: "An extension generated by finitely many algebraic elements is finite"

## Statement
If $a_1,\ldots,a_r$ are algebraic over $F$, then $F(a_1,\ldots,a_r)/F$ is finite.
```

## DEPENDENCY: def-extension-degree-and-finite-extension

```markdown
title: "The degree $[K:F]=\\dim_F K$ of a finite field extension"

## Definition
Let $K/F$ be a field extension. Scalar multiplication by $F\subseteq K$, together with addition in $K$, makes $K$ an $F$-vector space. The extension is **finite** when this vector space is finite-dimensional. In that case its **degree** is

$$[K:F]:=\dim_FK.$$

No numerical degree is assigned here to an infinite-dimensional extension.
```

## DEPENDENCY: def-separable-degree

```markdown
title: "The separable degree $[K:F]_s$ as a count of embeddings into an algebraic closure"

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

## DEPENDENCY: def-polynomials-that-split-and-splitting-fields

```markdown
title: 'Polynomials that split and splitting fields of a polynomial or a family of polynomials'

## Definition
Let $E/F$ be a field extension and let $0\ne f\in F[x]$ have degree $n$. The polynomial $f$ **splits over $E$** if there are $c\in F^\times$ and $\alpha_1,\ldots,\alpha_n\in E$ such that
$$ f(x)=c\prod_{j=1}^n(x-\alpha_j) $$
in $E[x]$, with repetitions allowed. When $n=0$, the product is empty, so every nonzero constant polynomial splits over $F$.

For a family $\mathcal F$ of nonzero polynomials in $F[x]$, a **splitting field of $\mathcal F$ over $F$** is a field extension $E/F$ such that every member of $\mathcal F$ splits over $E$ and $E$ is generated over $F$ by all roots in $E$ of all polynomials in $\mathcal F$. A splitting field of the one-element family $\{f\}$ is called a splitting field of $f$. For the empty family, the set of roots is empty and its splitting field is $F$.
```

## DEPENDENCY: cor-splitting-fields-are-unique-up-to-base-isomorphism

```markdown
title: 'Any two splitting fields of a polynomial are isomorphic over the base field'

## Statement
If $E/F$ and $E'/F$ are splitting fields of the same nonzero polynomial $f\in F[x]$, then there is a field isomorphism $E\to E'$ that fixes $F$ pointwise.
```
