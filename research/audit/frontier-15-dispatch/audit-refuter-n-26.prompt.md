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
label: n-26

run: frontier-15
role: refuter
label: n-26
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

## ITEM: cor-separable-and-purely-inseparable-extension-is-trivial

```markdown
---
id: cor-separable-and-purely-inseparable-extension-is-trivial
kind: corollary
title: "An extension that is both separable and purely inseparable is trivial"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-separable-elements-and-separable-extensions, thm-purely-inseparable-extension-characterizations, thm-evaluation-kernel-and-minimal-polynomial]
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

If an algebraic extension $K/F$ is both separable and purely inseparable, then
$K=F$.

## Facts & Assumptions

**Given:** An algebraic extension $K/F$ that is separable and purely inseparable, and an element $\alpha\in K$.

[L1] Separability makes the minimal polynomial of every element separable ([[def-separable-elements-and-separable-extensions]]).

[L2] Pure inseparability makes every element have exactly one distinct conjugate over the base ([[thm-purely-inseparable-extension-characterizations]]).

[L3] Every algebraic element has a monic irreducible minimal polynomial over the base ([[thm-evaluation-kernel-and-minimal-polynomial]]).

## Proof

**Proof technique:** direct.

1.1 Let $m_\alpha$ be the minimal polynomial from [L3]. It is separable by [L1], so all of its roots are distinct, but [L2] says it has only one distinct root. Hence $\deg m_\alpha=1$. [L1, L2, L3]

2.1 A degree-one minimal polynomial puts $\alpha$ in $F$. Since $\alpha\in K$ was arbitrary, $K=F$. [step 1.1, algebra] ∎

```

### Recorded proof contract for cor-separable-and-purely-inseparable-extension-is-trivial

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-separable-elements-and-separable-extensions",
   "source_section": "Definition",
   "quote": "Let $K/F$ be a field extension. An element $\\alpha\\in K$ is **separable over\n$F$** when it is algebraic over $F$\n([[def-algebraic-and-transcendental-elements]]) and its minimal polynomial over\n$F$ ([[thm-evaluation-kernel-and-minimal-polynomial]]) is a separable polynomial\n([[def-repeated-root-and-separable-polynomial]]). The extension $K/F$ is\n**separable** when every element of $K$ is separable over $F$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-purely-inseparable-extension-characterizations",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq\\Omega$, where $K/F$ is algebraic and $\\Omega/F$ is\nan algebraic closure. The following are equivalent:\n\n1. $K/F$ is purely inseparable;\n2. every $\\alpha\\in K$ has exactly one distinct conjugate over $F$.\n\nIf $K/F$ is finite, these are also equivalent to the inclusion\n$K\\hookrightarrow\\Omega$ being the only $F$-embedding of $K$ into $\\Omega$,\nand to $[K:F]_s=1$. Assuming the Axiom of Choice, the same unique-embedding\ncriterion is equivalent to conditions 1 and 2 for arbitrary algebraic $K/F$. In\ncharacteristic $p>0$, they are equivalent elementwise to the minimal polynomial\nof each $\\alpha$ having the form $x^{p^e}-a$, or to\n$\\alpha^{p^e}\\in F$ for some $e\\ge0$. In characteristic zero they force\n$K=F$.",
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
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Let $m_\\alpha$ be the minimal polynomial from [L3]. It is separable by [L1], so all of its roots are distinct, but [L2] says it has only one distinct root. Hence $\\deg m_\\alpha=1$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "A degree-one minimal polynomial puts $\\alpha$ in $F$. Since $\\alpha\\in K$ was arbitrary, $K=F$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For An extension that is both separable and purely inseparable is trivial, no possibly empty indexed operation occurs; the proof instead begins from Every element has a separable minimal polynomial but, by pure inseparability, only one distinct root."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For An extension that is both separable and purely inseparable is trivial, the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from Every element has a separable minimal polynomial but, by pure inseparability, only one distinct root."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For An extension that is both separable and purely inseparable is trivial, step 2.1 states: \"A degree-one minimal polynomial puts $\\alpha$ in $F$. Since $\\alpha\\in K$ was arbitrary, $K=F$.\" This is the final proof check that every degree-one, exponent-one, singleton, or identity instance allowed by the hypotheses is evaluated."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For An extension that is both separable and purely inseparable is trivial, step 1.1 states: \"Let $m_\\alpha$ be the minimal polynomial from [L3]. It is separable by [L1], so all of its roots are distinct, but [L2] says it has only one distinct root. Hence $\\deg m_\\alpha=1$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For An extension that is both separable and purely inseparable is trivial, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Every element has a separable minimal polynomial but, by pure inseparability, only one distinct root."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For An extension that is both separable and purely inseparable is trivial, step 1.1 states: \"Let $m_\\alpha$ be the minimal polynomial from [L3]. It is separable by [L1], so all of its roots are distinct, but [L2] says it has only one distinct root. Hence $\\deg m_\\alpha=1$.\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim An extension that is both separable and purely inseparable is trivial is not a biconditional, so no forward implication is asserted; the proof begins from Every element has a separable minimal polynomial but, by pure inseparability, only one distinct root."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim An extension that is both separable and purely inseparable is trivial is not a biconditional, so no reverse implication is asserted; the proof begins from Every element has a separable minimal polynomial but, by pure inseparability, only one distinct root."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-algebraic-closure-of-the-rationals-and-real-algebraic-subfield

```markdown
---
id: ex-algebraic-closure-of-the-rationals-and-real-algebraic-subfield
kind: example
title: "Assuming Choice, real algebraic numbers embed properly in an algebraic closure of $\\mathbb Q$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-existence-of-algebraic-closures, thm-algebraic-elements-form-a-subfield, thm-algebraic-embedding-extension, thm-reals-ordered-field]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Corollary 3.4"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: null
---

## Example

Assume the Axiom of Choice. Let $A=\{r\in\mathbb R:r\text{ is algebraic over }\mathbb Q\}$. There is an
algebraic closure $\overline{\mathbb Q}$ containing a $\mathbb Q$-isomorphic
copy of $A$, and that copy is a proper subfield which is not algebraically
closed.

## Facts & Assumptions

**Given:** The Axiom of Choice, the rational subfield of the ordered field $\mathbb R$, and the set $A$ displayed above.

[L1] Assuming Choice, every field has an algebraic closure ([[thm-existence-of-algebraic-closures]]).

[L2] The elements of an extension algebraic over the base form a subfield ([[thm-algebraic-elements-form-a-subfield]]).

[L3] Assuming Choice, a base embedding extends across every algebraic extension into an algebraically closed field ([[thm-algebraic-embedding-extension]]).

[L4] The real numbers form an ordered field ([[thm-reals-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 By [L2], $A$ is a subfield of $\mathbb R$ containing $\mathbb Q$, and $A/\mathbb Q$ is algebraic. Choose an algebraic closure $\Omega/\mathbb Q$ by [L1]. [L1, L2, choose]

1.2 The polynomial $x^2+1$ has no root in the ordered field $A\subseteq\mathbb R$, since every square is nonnegative and $-1<0$ by [L4]. [L4, algebra]

2.1 The identity on $\mathbb Q$ extends by [L3] to an embedding $A\to\Omega$; denote its image by $A'$. [step 1.1, L3]

3.1 If $A'$ contained a root of $x^2+1$, its preimage under the isomorphism $A\to A'$ would be a root in $A$, contrary to step 1.2. The algebraically closed field $\Omega$ does contain such a root, so $A'$ is proper in $\Omega$ and is not algebraically closed. No use of $\mathbb C$ is required. [step 2.1, step 1.2, algebra] ∎

```

### Recorded proof contract for ex-algebraic-closure-of-the-rationals-and-real-algebraic-subfield

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-existence-of-algebraic-closures",
   "source_section": "Statement",
   "quote": "Assuming the Axiom of Choice, every field has an algebraic closure.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-algebraic-elements-form-a-subfield",
   "source_section": "Statement",
   "quote": "For a field extension $K/F$, the set\n\n$$A=\\{a\\in K:a\\text{ is algebraic over }F\\}$$\n\nis a subfield of $K$ containing $F$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-algebraic-embedding-extension",
   "source_section": "Statement",
   "quote": "Assume the Axiom of Choice. Let $K/F$ be algebraic, let $\\Omega$ be\nalgebraically closed, and let $\\sigma:F\\to\\Omega$ be a field embedding. Then\n$\\sigma$ extends to a field embedding $\\widetilde\\sigma:K\\to\\Omega$. The proof\nuses Zorn's lemma.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-reals-ordered-field",
   "source_section": "Statement",
   "quote": "The relation of [[def-real-order]] is well defined and makes $\\mathbb{R}$\n([[thm-reals-field]]) a totally ordered field.",
   "uses": [
    "1.2"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "By [L2], $A$ is a subfield of $\\mathbb R$ containing $\\mathbb Q$, and $A/\\mathbb Q$ is algebraic. Choose an algebraic closure $\\Omega/\\mathbb Q$ by [L1].",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "choose"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "The polynomial $x^2+1$ has no root in the ordered field $A\\subseteq\\mathbb R$, since every square is nonnegative and $-1<0$ by [L4].",
   "step": "1.2",
   "inputs": [
    "L4",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "The identity on $\\mathbb Q$ extends by [L3] to an embedding $A\\to\\Omega$; denote its image by $A'$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L3"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "If $A'$ contained a root of $x^2+1$, its preimage under the isomorphism $A\\to A'$ would be a root in $A$, contrary to step 1.2. The algebraically closed field $\\Omega$ does contain such a root, so $A'$ is proper in $\\Omega$ and is not algebraically closed. No use of $\\mathbb C$ is required.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "step 1.2",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For An algebraic closure overline{mathbb Q} and the proper subfield of real algebraic numbers, no possibly empty indexed operation occurs; the proof instead begins from Choose an algebraic closure of mathbb Q."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For An algebraic closure overline{mathbb Q} and the proper subfield of real algebraic numbers, the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from Choose an algebraic closure of mathbb Q."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "For An algebraic closure overline{mathbb Q} and the proper subfield of real algebraic numbers, no free numerical parameter has a separate value-one branch; the proof instead begins from Choose an algebraic closure of mathbb Q."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For An algebraic closure \\overline{\\mathbb Q} and the proper subfield of real algebraic numbers, step 1.2 states: \"The polynomial $x^2+1$ has no root in the ordered field $A\\subseteq\\mathbb R$, since every square is nonnegative and $-1<0$ by [L4].\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For An algebraic closure overline{mathbb Q} and the proper subfield of real algebraic numbers, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Choose an algebraic closure of mathbb Q."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For An algebraic closure \\overline{\\mathbb Q} and the proper subfield of real algebraic numbers, step 1.1 states: \"By [L2], $A$ is a subfield of $\\mathbb R$ containing $\\mathbb Q$, and $A/\\mathbb Q$ is algebraic. Choose an algebraic closure $\\Omega/\\mathbb Q$ by [L1].\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim An algebraic closure overline{mathbb Q} and the proper subfield of real algebraic numbers is not a biconditional, so no forward implication is asserted; the proof begins from Choose an algebraic closure of mathbb Q."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim An algebraic closure overline{mathbb Q} and the proper subfield of real algebraic numbers is not a biconditional, so no reverse implication is asserted; the proof begins from Choose an algebraic closure of mathbb Q."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-algebraic-closure-of-a-finite-field

```markdown
---
id: ex-algebraic-closure-of-a-finite-field
kind: example
title: "$\\overline{\\mathbb F_p}$ is the union of its finite subfields and is an infinite algebraic extension"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-algebraic-closure, cor-element-algebraic-iff-simple-extension-finite, thm-frobenius-endomorphism-and-finite-field-automorphism, def-subfield, prop-finite-fields-are-splitting-fields-of-x-q-minus-x, cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree, thm-polynomial-is-separable-iff-coprime-to-its-derivative, thm-simple-algebraic-extension-quotient-power-basis-and-degree]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, finite fields and algebraic closures"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Example

For a prime $p$, an algebraic closure $\overline{\mathbb F_p}$ is the union of
its finite subfields. It contains one subfield of order $p^n$ for every
$n\ge1$, the nested fields $\mathbb F_{p^{n!}}$ for $n\ge1$ exhaust it, and it
is an infinite algebraic extension of $\mathbb F_p$.

## Facts & Assumptions

**Given:** A prime $p$ and an algebraic closure $\Omega=\overline{\mathbb F_p}$.

[L1] An element is algebraic over a field exactly when its simple extension is finite ([[cor-element-algebraic-iff-simple-extension-finite]]).

[L2] Frobenius and all its iterates respect field operations in characteristic $p$ ([[thm-frobenius-endomorphism-and-finite-field-automorphism]]).

[L3] A subset containing $0,1$ and closed under subtraction, multiplication, and nonzero inverses is a subfield ([[def-subfield]]).

[L4] Every field of order $q$ is the splitting field of $x^q-x$ over its prime field, and all of its elements are roots ([[prop-finite-fields-are-splitting-fields-of-x-q-minus-x]]).

[L5] Over every finite field there is an irreducible polynomial of each positive degree ([[cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree]]).

[L6] An algebraic closure is algebraic over its base and algebraically closed ([[def-algebraic-closure]]).

[L7] A nonzero polynomial is separable exactly when it is coprime to its derivative ([[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]).

[L8] The degree of a simple algebraic extension is the degree of the minimal polynomial of its generator ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

## Verification

**Proof technique:** direct.

1.1 Every $a\in\Omega$ is algebraic over $\mathbb F_p$ by [L6], so [L1] makes $\mathbb F_p(a)$ a finite field. Hence $\Omega$ is the union of its finite subfields. [L1, L6]

1.2 For $n\ge1$, let $E_n$ be the roots in $\Omega$ of $x^{p^n}-x$. This polynomial splits by [L6], and its derivative is $-1$, so [L7] gives exactly $p^n$ distinct roots. By [L2], the root set is closed under subtraction and multiplication, and it is closed under nonzero inverses; hence [L3] makes $E_n$ a subfield of order $p^n$. Any other subfield of that order consists entirely of roots by [L4], so it equals $E_n$. [L2, L3, L4, L6, L7, algebra]

2.1 If $a$ lies in a finite subfield of order $p^d$, choose $n\ge d$. Every element $b$ of that subfield satisfies $b^{p^d}=b$ by [L4]. Since $d$ divides $n!$, iterating Frobenius by [L2] gives $b^{p^{n!}}=b$, so the subfield lies in $E_{n!}$. The same argument shows $E_{n!}\subseteq E_{(n+1)!}$, and step 1.1 now shows that their nested union is all of $\Omega$. [step 1.1, step 1.2, L2, L4]

3.1 The irreducibles supplied by [L5] have roots in $\Omega$ by [L6], and [L8] makes the generated simple subextensions have arbitrarily large finite degree. Therefore $\Omega$ cannot be finite, while it is algebraic by [L6]. [L5, L6, L8] ∎

```

### Recorded proof contract for ex-algebraic-closure-of-a-finite-field

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "cor-element-algebraic-iff-simple-extension-finite",
   "source_section": "Statement",
   "quote": "For an element $a$ of an extension $K/F$,\n\n$$a\\text{ is algebraic over }F\\quad\\Longleftrightarrow\\quad F(a)/F\\text{ is finite}.$$\n\nIf $a$ is algebraic with minimal polynomial of degree $n$, then $[F(a):F]=n$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-frobenius-endomorphism-and-finite-field-automorphism",
   "source_section": "Statement",
   "quote": "Let $F$ be a field of characteristic $p>0$. The **Frobenius map**\n\n$$\\operatorname{Fr}_F:F\\to F,\\qquad x\\mapsto x^p,$$\n\nis an injective field endomorphism. If $F$ is finite, it is an automorphism. Its $n$-fold iterate is $x\\mapsto x^{p^n}$.",
   "uses": [
    "1.2",
    "2.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-subfield",
   "source_section": "Definition",
   "quote": "Equivalently, by [[lem-subring-criterion]], $K$ is a subfield exactly when\n$1_F \\in K$, $a - b \\in K$ and $ab \\in K$ for all $a, b \\in K$, and\n$x^{-1} \\in K$ for every nonzero $x \\in K$.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L4",
   "source": "prop-finite-fields-are-splitting-fields-of-x-q-minus-x",
   "source_section": "Statement",
   "quote": "If $F$ is a field with $q$ elements, then every $a\\in F$ satisfies $a^q=a$, and $F$ is the splitting field of $t^q-t$ over its prime subfield.",
   "uses": [
    "1.2",
    "2.1"
   ]
  },
  {
   "fact": "L5",
   "source": "cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree",
   "source_section": "Statement",
   "quote": "For every finite field $\\mathbb F_q$ and every integer $n\\ge1$, there exists a monic irreducible polynomial in $\\mathbb F_q[t]$ of degree $n$.",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L6",
   "source": "def-algebraic-closure",
   "source_section": "Definition",
   "quote": "An **algebraic closure** of a field $F$ is a field extension $\\overline F/F$\nthat is algebraic ([[def-algebraic-and-transcendental-elements]]) and whose\nfield $\\overline F$ is algebraically closed\n([[def-algebraically-closed-field]]). The notation $\\overline F$ denotes a\nchosen algebraic closure; it does not specify a preferred one or a preferred\nisomorphism between two choices.",
   "uses": [
    "1.1",
    "1.2",
    "3.1"
   ]
  },
  {
   "fact": "L7",
   "source": "thm-polynomial-is-separable-iff-coprime-to-its-derivative",
   "source_section": "Statement",
   "quote": "Let $F$ be a field and let $0\\ne f\\in F[x]$. Then $f$ is separable over $F$ if and only if $\\gcd(f,f')=1$ in $F[x]$.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L8",
   "source": "thm-simple-algebraic-extension-quotient-power-basis-and-degree",
   "source_section": "Statement",
   "quote": "Let $K/F$ be a field extension and let $a\\in K$ be algebraic with minimal\npolynomial $m_a$ of degree $n$. Evaluation induces an $F$-isomorphism\n$$F[x]/(m_a)\\cong F(a),\\qquad f+(m_a)\\longmapsto f(a).$$\nMoreover, every element of $F(a)$ has a unique expression\n$$c_0+c_1a+\\cdots+c_{n-1}a^{n-1},\\qquad c_j\\in F.$$\nThus $1,a,\\ldots,a^{n-1}$ is the **power basis**, and the **degree** of the\nsimple extension is $[F(a):F]=n$.",
   "uses": [
    "3.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Every $a\\in\\Omega$ is algebraic over $\\mathbb F_p$ by [L6], so [L1] makes $\\mathbb F_p(a)$ a finite field. Hence the supplied closure is the union of its finite subfields.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L6"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "For $n\\ge1$, the roots $E_n$ in $\\Omega$ of $x^{p^n}-x$ form a subfield by [L2] and [L3]. The polynomial splits by [L6] and is separable by [L7], so $E_n$ has $p^n$ elements. Every other subfield of that order consists of roots by [L4], hence equals $E_n$.",
   "step": "1.2",
   "inputs": [
    "L2",
    "L3",
    "L4",
    "L6",
    "L7",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "If $a$ lies in a subfield of order $p^d$, every element satisfies $b^{p^d}=b$ by [L4]. For $n\\ge d$, iterating Frobenius [L2] and $d\\mid n!$ puts that subfield in $E_{n!}$; the same argument nests the $E_{n!}$, and step 1.1 proves they exhaust $\\Omega$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "step 1.2",
    "L2",
    "L4"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "The irreducibles supplied by [L5] have roots in $\\Omega$ by [L6], and [L8] gives generated simple subextensions of arbitrarily large finite degree. Thus $\\Omega$ is infinite and is algebraic by [L6].",
   "step": "3.1",
   "inputs": [
    "L5",
    "L6",
    "L8"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "Step 2.1 starts the nested family at $E_{1!}=E_1$; no empty union is used."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Step 1.2 restricts to $n\\ge1$; the polynomial $x^{p^n}-x$ is nonzero with derivative $-1$."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "In step 1.2, for $n=1$, $E_1$ is the unique subfield of order $p$, namely the prime field."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Derivative $-1$ in step 1.2 excludes repeated roots, and the root-set construction determines each finite subfield without an embedding choice."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "All parameters are discrete positive integers and finite fields; there is no ordered or limiting endpoint."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "The algebraic closure is supplied in the Given block, and each $E_n$ is the definable root set of a fixed polynomial; no Choice-based selection is made."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim overline{mathbb F_p} is the union of its finite subfields and is an infinite algebraic extension is not a biconditional, so no forward implication is asserted; the proof begins from Inside an algebraic closure, each element generates a finite extension and hence lies in a finite field."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim overline{mathbb F_p} is the union of its finite subfields and is an infinite algebraic extension is not a biconditional, so no reverse implication is asserted; the proof begins from Inside an algebraic closure, each element generates a finite extension and hence lies in a finite field."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, title and claim section only

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

## DEPENDENCY: thm-existence-of-algebraic-closures

```markdown
title: "Assuming Choice, every field has an algebraic closure"

## Statement
Assuming the Axiom of Choice, every field has an algebraic closure.
```

## DEPENDENCY: thm-algebraic-elements-form-a-subfield

```markdown
title: "The elements of an extension algebraic over the base field form a subfield"

## Statement
For a field extension $K/F$, the set

$$A=\{a\in K:a\text{ is algebraic over }F\}$$

is a subfield of $K$ containing $F$.
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

## DEPENDENCY: thm-reals-ordered-field

```markdown
title: "The reals form a totally ordered field"

## Statement
The relation of [[def-real-order]] is well defined and makes $\mathbb{R}$
([[thm-reals-field]]) a totally ordered field.
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

## DEPENDENCY: cor-element-algebraic-iff-simple-extension-finite

```markdown
title: "An element is algebraic over $F$ if and only if its simple extension $F(a)/F$ is finite"

## Statement
For an element $a$ of an extension $K/F$,

$$a\text{ is algebraic over }F\quad\Longleftrightarrow\quad F(a)/F\text{ is finite}.$$

If $a$ is algebraic with minimal polynomial of degree $n$, then $[F(a):F]=n$.
```

## DEPENDENCY: thm-frobenius-endomorphism-and-finite-field-automorphism

```markdown
title: "Frobenius $x\\mapsto x^p$ is an injective endomorphism in characteristic $p$, and an automorphism for finite fields"

## Statement
Let $F$ be a field of characteristic $p>0$. The **Frobenius map**

$$\operatorname{Fr}_F:F\to F,\qquad x\mapsto x^p,$$

is an injective field endomorphism. If $F$ is finite, it is an automorphism. Its $n$-fold iterate is $x\mapsto x^{p^n}$.
```

## DEPENDENCY: def-subfield

```markdown
title: "Subfield: a subring of a field closed under inverses of its nonzero elements, and therefore a field with the restricted operations"

## Definition
Let $F$ be a field ([[def-field]]), regarded as a commutative ring by
[[lem-field-is-a-commutative-ring]]. A subset $K \subseteq F$ is a **subfield**
of $F$ when

- **(K1)** $K$ is a subring of $F$ ([[def-subring]]);
- **(K2)** $x^{-1} \in K$ for every $x \in K$ with $x \ne 0_F$.

Equivalently, by [[lem-subring-criterion]], $K$ is a subfield exactly when
$1_F \in K$, $a - b \in K$ and $ab \in K$ for all $a, b \in K$, and
$x^{-1} \in K$ for every nonzero $x \in K$.

**Why $K$ is then a field, and with the same $0$ and $1$.** By (K1) and
[[def-subring]], $K$ with the restricted operations is a ring whose zero is
$0_F$ and whose identity is $1_F$; its multiplication is commutative, being the
restriction of a commutative one ([[def-commutative-ring]]). Since $1_F \ne 0_F$
in $F$ and both lie in $K$, we have $1_K \ne 0_K$. Let $x \in K$ with
$x \ne 0_K$; then $x \ne 0_F$, so $x^{-1} \in F$ exists and lies in $K$ by (K2),
and $x x^{-1} = 1_F = 1_K = x^{-1} x$. So every nonzero element of $K$ is a unit
of the ring $K$, and $K$ is a commutative division ring ([[def-division-ring]]);
by [[lem-commutative-division-ring-is-a-field]] it is a field. Moreover the
inverse of $x$ computed in $K$ is its inverse computed in $F$, since $x^{-1}$
already satisfies the defining equation inside $K$.

In particular

$$0_K = 0_F, \qquad 1_K = 1_F, \qquad (-x)_K = (-x)_F, \qquad (x^{-1})_K = (x^{-1})_F \quad (x \in K,\ x \ne 0_F).$$

**A subfield of an ordered field inherits the order.** Let $(F,P)$ be an ordered
field ([[def-ordered-field]]) and $K$ a subfield. Put $P_K := P \cap K$. Then
(O1) holds in $K$: for $x \in K$ we have $-x \in K$ by (K1), and exactly one of
$x \in P$, $x = 0_F$, $-x \in P$ holds in $F$, so exactly one of
$x \in P_K$, $x = 0_K$, $-x \in P_K$ holds. And (O2) holds: if $x, y \in P_K$
then $x + y$ and $xy$ lie in $P$ by (O2) in $F$ and in $K$ by (K1), hence in
$P_K$. So $(K,P_K)$ is an ordered field, and its order is the restriction of the
order of $F$, because $a < b$ means $b - a \in P$ on both sides and
$b - a$ is the same element in $K$ as in $F$.
```

## DEPENDENCY: prop-finite-fields-are-splitting-fields-of-x-q-minus-x

```markdown
title: "A field with $q$ elements is the splitting field of $x^q-x$ over its prime subfield"

## Statement
If $F$ is a field with $q$ elements, then every $a\in F$ satisfies $a^q=a$, and $F$ is the splitting field of $t^q-t$ over its prime subfield.
```

## DEPENDENCY: cor-irreducible-polynomials-exist-over-finite-fields-in-every-degree

```markdown
title: "For every finite field $\\mathbb F_q$ and every $n\\ge1$, a monic irreducible polynomial of degree $n$ exists"

## Statement
For every finite field $\mathbb F_q$ and every integer $n\ge1$, there exists a monic irreducible polynomial in $\mathbb F_q[t]$ of degree $n$.
```

## DEPENDENCY: thm-polynomial-is-separable-iff-coprime-to-its-derivative

```markdown
title: 'A nonzero polynomial over a field is separable exactly when its gcd with its derivative is $1$'

## Statement
Let $F$ be a field and let $0\ne f\in F[x]$. Then $f$ is separable over $F$ if and only if $\gcd(f,f')=1$ in $F[x]$.
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
