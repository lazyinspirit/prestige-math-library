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
label: n-19

run: frontier-15
role: refuter
label: n-19
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

## ITEM: thm-primitive-element-theorem-for-finite-separable-extensions

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

### Recorded proof contract for thm-primitive-element-theorem-for-finite-separable-extensions

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "lem-polynomial-gcd-is-stable-under-field-extension",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq E$ be a field extension and let $f,g\\in F[x]$ be not both zero. The monic gcd of $f$ and $g$ computed in $F[x]$ is also their monic gcd in $E[x]$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "cor-splitting-fields-exist-for-finite-families",
   "source_section": "Statement",
   "quote": "Let $f_1,\\ldots,f_m\\in F[x]$ be nonzero, where $m\\in\\mathbb N$. A splitting field of the product\n$$ h=\\prod_{j=1}^m f_j $$\nis a splitting field of the family $\\{f_1,\\ldots,f_m\\}$. Hence every finite family of nonzero polynomials has a splitting field. For $m=0$, $h=1$ and the splitting field is $F$.",
   "uses": [
    "1.3"
   ]
  },
  {
   "fact": "L3",
   "source": "cor-finite-extensions-of-finite-fields-are-simple",
   "source_section": "Statement",
   "quote": "Every finite-degree extension $K/F$ of a finite field is simple: there exists $a\\in K$ with $K=F(a)$.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-finitely-generated-algebraic-extensions-are-finite",
   "source_section": "Statement",
   "quote": "If $a_1,\\ldots,a_r$ are algebraic over $F$, then $F(a_1,\\ldots,a_r)/F$ is finite.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "def-separable-elements-and-separable-extensions",
   "source_section": "Definition",
   "quote": "Let $K/F$ be a field extension. An element $\\alpha\\in K$ is **separable over\n$F$** when it is algebraic over $F$\n([[def-algebraic-and-transcendental-elements]]) and its minimal polynomial over\n$F$ ([[thm-evaluation-kernel-and-minimal-polynomial]]) is a separable polynomial\n([[def-repeated-root-and-separable-polynomial]]). The extension $K/F$ is\n**separable** when every element of $K$ is separable over $F$.",
   "uses": [
    "1.1",
    "1.3"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "For $r=0$, one has $E=F=F(0)$, and for $r=1$ the displayed presentation is already simple. Assume $r\\ge2$. It is enough to combine two generators: if $F(\\alpha,\\beta)=F(\\gamma)$ whenever $\\beta$ is separable, repeated combination leaves at most the originally exceptional generator as the first entry and a separable generator as the second. Finiteness of each intermediate extension follows from [L4].",
   "step": "1.1",
   "inputs": [
    "given",
    "L4",
    "L5"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "If $F$ is finite, the two-generator extension is simple by [L3].",
   "step": "1.2",
   "inputs": [
    "L3"
   ]
  },
  {
   "id": "step-1-3",
   "claim": "Suppose $F$ is infinite. In a common splitting field from [L2], list the distinct conjugates $\\alpha_i$ of $\\alpha$ and the pairwise distinct conjugates $\\beta_j$ of the separable element $\\beta$. Choose a nonzero $c\\in F$ avoiding the finitely many values $(\\alpha_1-\\alpha_i)/(\\beta_j-\\beta_1)$ with $\\beta_j\\ne\\beta_1$, and put $\\gamma=\\alpha+c\\beta$.",
   "step": "1.3",
   "inputs": [
    "L2",
    "L5",
    "choose"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "In $F(\\gamma)[x]$, the minimal polynomial of $\\alpha$ and the translated minimal polynomial of $\\beta$ have $\\alpha$ as a common root. By the choice of $c$, any common root would give $\\alpha_i+c\\beta_j=\\alpha+c\\beta$ and hence must be $\\alpha$; [L1] therefore makes their monic gcd $x-\\alpha$. Thus $\\alpha\\in F(\\gamma)$ and then $\\beta=(\\gamma-\\alpha)/c\\in F(\\gamma)$.",
   "step": "2.1",
   "inputs": [
    "step 1.3",
    "L1",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Hence $F(\\alpha,\\beta)=F(\\gamma)$ over either a finite or an infinite base. Iterating step 1.1 proves the theorem, and when every generator is separable it gives the usual finite separable primitive-element theorem.",
   "step": "3.1",
   "inputs": [
    "step 1.1",
    "step 1.2",
    "step 2.1"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "Step 1.1 computes the empty generating list explicitly: for $r=0$, $E=F=F(0)$."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Step 1.1 treats list length $r=0$ explicitly, and step 1.3 chooses $c\\ne0$ before step 2.1 divides by $c$."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Step 1.1 treats the singleton presentation $r=1$ as already simple."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The trivial extension occurs in the $r=0$ branch of step 1.1; inseparable behavior is confined to the one permitted exceptional generator."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For A finite extension generated by elements all but possibly one of which are separable is simple, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Reduce the generating list to two elements, with the second separable."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For A finite extension generated by elements all but possibly one of which are separable is simple, step 1.1 states: \"It is enough to combine two generators: if $F(\\alpha,\\beta)=F(\\gamma)$ whenever $\\beta$ is separable, repeated combination leaves at most the originally exceptional generator as the first entry and a separable generator as the second. Finiteness of each intermediate extension follows from [L4].\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim A finite extension generated by elements all but possibly one of which are separable is simple is not a biconditional, so no forward implication is asserted; the proof begins from Reduce the generating list to two elements, with the second separable."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim A finite extension generated by elements all but possibly one of which are separable is simple is not a biconditional, so no reverse implication is asserted; the proof begins from Reduce the generating list to two elements, with the second separable."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-one-step-simultaneous-root-extension

```markdown
---
id: thm-one-step-simultaneous-root-extension
kind: theorem
title: "Assuming Choice, every field has an algebraic extension containing roots of all nonconstant base polynomials"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-artin-simultaneous-root-ideal-is-proper, thm-proper-ideal-contained-in-maximal-ideal, thm-quotient-is-field-iff-ideal-maximal, thm-finitely-generated-algebraic-extensions-are-finite, thm-zorn]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Chapter 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "P. L. Clark, Field Theory, Theorem 4.9"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice. For every field $F$ there is an algebraic extension
$L/F$ such that every nonconstant polynomial in $F[x]$ has a root in $L$. The
construction uses Zorn's lemma to place Artin's proper ideal inside a maximal
ideal.

## Facts & Assumptions

**Given:** A field $F$, the set $\mathcal S$ of its monic nonconstant polynomials, $A=F[x_f:f\in\mathcal S]$, and $I=(f(x_f):f\in\mathcal S)$.

[L1] Artin's ideal $I$ is proper ([[lem-artin-simultaneous-root-ideal-is-proper]]).

[L2] Assuming Choice, every proper ideal of a nonzero commutative ring is contained in a maximal ideal ([[thm-proper-ideal-contained-in-maximal-ideal]]).

[L3] The quotient of a commutative ring by a maximal ideal is a field ([[thm-quotient-is-field-iff-ideal-maximal]]).

[L4] A field generated by finitely many algebraic elements is finite, and therefore algebraic, over the base ([[thm-finitely-generated-algebraic-extensions-are-finite]]).

[L5] Assuming Choice, a nonempty poset whose chains have upper bounds has a maximal element ([[thm-zorn]]).

## Proof

**Proof technique:** constructive.

1.1 By [L1] and the maximal-ideal theorem [L2], whose choice step is Zorn's lemma [L5], choose a maximal ideal $M$ of $A$ containing $I$. [L1, L2, L5, choose]

2.1 Put $L=A/M$. By [L3] this is a field. The composite $F\to A\to L$ is injective, since a nonzero scalar in $M$ would be a unit and force $1\in M$, so it identifies $F$ with a subfield of $L$. [step 1.1, L3, construct]

3.1 For each $f\in\mathcal S$, the residue $\overline{x_f}\in L$ satisfies $f(\overline{x_f})=0$ because $f(x_f)\in I\subseteq M$. Multiplying an arbitrary nonconstant polynomial by the inverse of its leading coefficient makes it monic without changing its roots, so every nonconstant polynomial over $F$ has a root in $L$. [step 1.1, step 2.1, algebra]

4.1 Every element of $L$ is represented by a polynomial involving finitely many variables $x_{f_1},\ldots,x_{f_r}$, hence lies in $F(\overline{x_{f_1}},\ldots,\overline{x_{f_r}})$. Each residue is algebraic over $F$, and [L4] makes this finite subextension algebraic. Thus $L/F$ is algebraic. [step 2.1, step 3.1, L4]

5.1 The field $L$ constructed above is the required algebraic root extension, and the only choice principle used is the maximal-ideal application in step 1.1. [step 1.1, step 3.1, step 4.1, discharge-construct] ∎

```

### Recorded proof contract for thm-one-step-simultaneous-root-extension

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "lem-artin-simultaneous-root-ideal-is-proper",
   "source_section": "Statement",
   "quote": "Let $\\mathcal S$ be the set of monic nonconstant polynomials in $F[x]$, let\n$A=F[x_f:f\\in\\mathcal S]$, and let\n\n$$I=(f(x_f):f\\in\\mathcal S)\\mathrel{\\trianglelefteq}A.$$\n\nThen $I$ is a proper ideal of $A$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-proper-ideal-contained-in-maximal-ideal",
   "source_section": "Statement",
   "quote": "Assume the Axiom of Choice ([[def-axiom-of-choice]]).\n\nIn a nonzero commutative ring, every proper ideal is contained in a maximal ideal.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-quotient-is-field-iff-ideal-maximal",
   "source_section": "Statement",
   "quote": "$R/M$ is a field if and only if $M$ is a maximal ideal.\n\nHere $R$ is commutative and $M$ is an ideal of $R$.",
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
    "4.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-zorn",
   "source_section": "Statement",
   "quote": "Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(P, \\le)$ be a\nnonempty poset in which **every chain has an upper bound**. Then $P$ has a\nmaximal element ([[def-maximal-element]]).\n\nNote the hypothesis asks only for an upper bound, not a least upper bound, and\nthe conclusion asserts only that a maximal element exists, never that a greatest\none does.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "By [L1] and the maximal-ideal theorem [L2], whose choice step is Zorn's lemma [L5], choose a maximal ideal $M$ of $A$ containing $I$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L5",
    "choose"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Put $L=A/M$. By [L3] this is a field. The composite $F\\to A\\to L$ is injective, since a nonzero scalar in $M$ would be a unit and force $1\\in M$, so it identifies $F$ with a subfield of $L$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L3",
    "construct"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "For each $f\\in\\mathcal S$, the residue $\\overline{x_f}\\in L$ satisfies $f(\\overline{x_f})=0$ because $f(x_f)\\in I\\subseteq M$. Multiplying an arbitrary nonconstant polynomial by the inverse of its leading coefficient makes it monic without changing its roots, so every nonconstant polynomial over $F$ has a root in $L$.",
   "step": "3.1",
   "inputs": [
    "step 1.1",
    "step 2.1",
    "algebra"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "Every element of $L$ is represented by a polynomial involving finitely many variables $x_{f_1},\\ldots,x_{f_r}$, hence lies in $F(\\overline{x_{f_1}},\\ldots,\\overline{x_{f_r}})$. Each residue is algebraic over $F$, and [L4] makes this finite subextension algebraic. Thus $L/F$ is algebraic.",
   "step": "4.1",
   "inputs": [
    "step 2.1",
    "step 3.1",
    "L4"
   ]
  },
  {
   "id": "step-5-1",
   "claim": "The field $L$ constructed above is the required algebraic root extension, and the only choice principle used is the maximal-ideal application in step 1.1.",
   "step": "5.1",
   "inputs": [
    "step 1.1",
    "step 3.1",
    "step 4.1",
    "discharge-construct"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "For Every field has an algebraic extension in which every nonconstant polynomial over the base has a root, step 4.1 states: \"Every element of $L$ is represented by a polynomial involving finitely many variables $x_{f_1},\\ldots,x_{f_r}$, hence lies in $F(\\overline{x_{f_1}},\\ldots,\\overline{x_{f_r}})$. Each residue is algebraic over $F$, and [L4] makes this finite subextension algebraic. Thus $L/F$ is algebraic.\" This is the final proof check that a quotient element using no variables is a base constant."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For Every field has an algebraic extension in which every nonconstant polynomial over the base has a root, step 2.1 states: \"Put $L=A/M$. By [L3] this is a field. The composite $F\\to A\\to L$ is injective, since a nonzero scalar in $M$ would be a unit and force $1\\in M$, so it identifies $F$ with a subfield of $L$.\" This is the final proof check that properness makes the quotient nonzero."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For Every field has an algebraic extension in which every nonconstant polynomial over the base has a root, step 1.1 states: \"By [L1] and the maximal-ideal theorem [L2], whose choice step is Zorn's lemma [L5], choose a maximal ideal $M$ of $A$ containing $I$.\" This is the final proof check that linear polynomials and constant representatives are included."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For Every field has an algebraic extension in which every nonconstant polynomial over the base has a root, step 3.1 states: \"For each $f\\in\\mathcal S$, the residue $\\overline{x_f}\\in L$ satisfies $f(\\overline{x_f})=0$ because $f(x_f)\\in I\\subseteq M$. Multiplying an arbitrary nonconstant polynomial by the inverse of its leading coefficient makes it monic without changing its roots, so every nonconstant polynomial over $F$ has a root in $L$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For Every field has an algebraic extension in which every nonconstant polynomial over the base has a root, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Place Artin's proper ideal inside a maximal ideal and quotient the family polynomial ring."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For Every field has an algebraic extension in which every nonconstant polynomial over the base has a root, step 1.1 states: \"By [L1] and the maximal-ideal theorem [L2], whose choice step is Zorn's lemma [L5], choose a maximal ideal $M$ of $A$ containing $I$.\" This is the final proof check that the maximal-ideal theorem supplies the chosen ideal."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim Every field has an algebraic extension in which every nonconstant polynomial over the base has a root is not a biconditional, so no forward implication is asserted; the proof begins from Place Artin's proper ideal inside a maximal ideal and quotient the family polynomial ring."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim Every field has an algebraic extension in which every nonconstant polynomial over the base has a root is not a biconditional, so no reverse implication is asserted; the proof begins from Place Artin's proper ideal inside a maximal ideal and quotient the family polynomial ring."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: lem-one-step-root-extension-over-a-perfect-field-is-algebraically-closed

```markdown
---
id: lem-one-step-root-extension-over-a-perfect-field-is-algebraically-closed
kind: lemma
title: "The one-step root condition makes an algebraic extension of a perfect field algebraically closed"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-algebraic-extensions-of-perfect-fields-are-separable, thm-primitive-element-theorem-for-finite-separable-extensions, thm-universal-property-of-adjoining-an-irreducible-root, thm-splitting-fields-exist-for-nonzero-polynomials, thm-transitivity-of-algebraicity, def-algebraically-closed-field, thm-finitely-generated-algebraic-extensions-are-finite]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, Proposition 6.5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
    - title: "P. L. Clark, Field Theory, Theorem 4.9"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
pipeline_run: null
---

## Statement

Let $F$ be perfect and let $L/F$ be algebraic. If every nonconstant polynomial
in $F[x]$ has a root in $L$, then $L$ is algebraically closed.

## Facts & Assumptions

**Given:** A perfect field $F$ and an algebraic extension $L/F$ in which every nonconstant polynomial over $F$ has a root.

[L1] Algebraic extensions of perfect fields are separable ([[cor-algebraic-extensions-of-perfect-fields-are-separable]]).

[L2] Every finite separable extension is simple ([[thm-primitive-element-theorem-for-finite-separable-extensions]]).

[L3] A root of an irreducible polynomial induces the unique base-field embedding of the corresponding simple extension ([[thm-universal-property-of-adjoining-an-irreducible-root]]).

[L4] Every nonzero polynomial has a splitting field ([[thm-splitting-fields-exist-for-nonzero-polynomials]]).

[L5] Algebraicity is transitive in towers ([[thm-transitivity-of-algebraicity]]).

[L6] A field is algebraically closed when every nonconstant polynomial over it has a root in it ([[def-algebraically-closed-field]]).

[L7] A field generated by finitely many algebraic elements is finite over its base ([[thm-finitely-generated-algebraic-extensions-are-finite]]).

## Proof

**Proof technique:** direct.

1.1 Let $f\in F[x]$ be irreducible and nonconstant, and choose a splitting field $E/F$ by [L4]. It is generated by the finitely many roots of $f$, so [L7] makes it finite; [L1] makes it separable and [L2] gives $E=F(\alpha)$ for some $\alpha$. [L1, L2, L4, L7]

2.1 The minimal polynomial $m_\alpha\in F[x]$ has a root $\beta\in L$ by hypothesis. By [L3] there is an $F$-embedding $E=F(\alpha)\to L$ sending $\alpha$ to $\beta$. Since $f$ splits in $E$ and its coefficients are fixed, it splits in the image inside $L$. [step 1.1, L3]

3.1 Thus every irreducible polynomial over $F$, and hence every polynomial over $F$, splits in $L$. [step 2.1, algebra]

4.1 Let $q\in L[x]$ be nonconstant and choose a root $\gamma$ in a splitting field by [L4]. The element $\gamma$ is algebraic over $L$, while $L/F$ is algebraic, so [L5] makes $\gamma$ algebraic over $F$. Its minimal polynomial over $F$ splits in $L$ by step 3.1; since $\gamma$ is one of its roots, $\gamma\in L$. [step 3.1, L4, L5]

5.1 Every nonconstant polynomial over $L$ therefore has a root in $L$, so [L6] makes $L$ algebraically closed. [step 4.1, L6] ∎

```

### Recorded proof contract for lem-one-step-root-extension-over-a-perfect-field-is-algebraically-closed

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "cor-algebraic-extensions-of-perfect-fields-are-separable",
   "source_section": "Statement",
   "quote": "If $K/F$ is algebraic and $F$ is perfect, then $K/F$ is separable.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-primitive-element-theorem-for-finite-separable-extensions",
   "source_section": "Statement",
   "quote": "Let $E=F(\\alpha_1,\\ldots,\\alpha_r)$ be a finite extension. If all but possibly\none of the generators are separable over $F$, then $E/F$ is simple. In\nparticular, every finite separable extension is simple.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-universal-property-of-adjoining-an-irreducible-root",
   "source_section": "Statement",
   "quote": "Let $p\\in F[x]$ be monic and irreducible, let $K=F[x]/(p)$, and put\n$a=x+(p)$. If $L/F$ is a field extension and $b\\in L$ satisfies $p(b)=0$,\nthere is a unique field homomorphism\n$$\\varphi:K\\longrightarrow L$$\nthat fixes $F$ and sends $a$ to $b$. Its image is $F[b]$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-splitting-fields-exist-for-nonzero-polynomials",
   "source_section": "Statement",
   "quote": "For every field $F$ and every nonzero polynomial $f\\in F[x]$, there exists a splitting field of $f$ over $F$.",
   "uses": [
    "1.1",
    "4.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-transitivity-of-algebraicity",
   "source_section": "Statement",
   "quote": "If $F\\subseteq K\\subseteq L$, the extension $K/F$ is algebraic, and $L/K$ is algebraic, then $L/F$ is algebraic.",
   "uses": [
    "4.1"
   ]
  },
  {
   "fact": "L6",
   "source": "def-algebraically-closed-field",
   "source_section": "Definition",
   "quote": "A field $F$ is **algebraically closed** when every nonconstant polynomial $p\\in F[x]$ has a root in $F$: there is $\\lambda\\in F$ such that $p(\\lambda)=0$.\n\nThis definition concerns roots in the field itself. It does not assert here that any particular field, including $\\mathbb C$, is algebraically closed.",
   "uses": [
    "5.1"
   ]
  },
  {
   "fact": "L7",
   "source": "thm-finitely-generated-algebraic-extensions-are-finite",
   "source_section": "Statement",
   "quote": "If $a_1,\\ldots,a_r$ are algebraic over $F$, then $F(a_1,\\ldots,a_r)/F$ is finite.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Let $f\\in F[x]$ be irreducible and nonconstant, and choose a splitting field $E/F$ by [L4]. It is generated by the finitely many roots of $f$, so [L7] makes it finite; [L1] makes it separable and [L2] gives $E=F(\\alpha)$ for some $\\alpha$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L4",
    "L7"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "The minimal polynomial $m_\\alpha\\in F[x]$ has a root $\\beta\\in L$ by hypothesis. By [L3] there is an $F$-embedding $E=F(\\alpha)\\to L$ sending $\\alpha$ to $\\beta$. Since $f$ splits in $E$ and its coefficients are fixed, it splits in the image inside $L$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L3"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Thus every irreducible polynomial over $F$, and hence every polynomial over $F$, splits in $L$.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "algebra"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "Let $q\\in L[x]$ be nonconstant and choose a root $\\gamma$ in a splitting field by [L4]. The element $\\gamma$ is algebraic over $L$, while $L/F$ is algebraic, so [L5] makes $\\gamma$ algebraic over $F$. Its minimal polynomial over $F$ splits in $L$ by step 3.1; since $\\gamma$ is one of its roots, $\\gamma\\in L$.",
   "step": "4.1",
   "inputs": [
    "step 3.1",
    "L4",
    "L5"
   ]
  },
  {
   "id": "step-5-1",
   "claim": "Every nonconstant polynomial over $L$ therefore has a root in $L$, so [L6] makes $L$ algebraically closed.",
   "step": "5.1",
   "inputs": [
    "step 4.1",
    "L6"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For The one-step root condition makes an algebraic extension of a perfect field algebraically closed, no possibly empty indexed operation occurs; the proof instead begins from For an irreducible f over the perfect base, its splitting field is finite and generated by roots that are separable over F; the generalized primitive-element theorem therefore makes it simple, say F(alpha)."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For The one-step root condition makes an algebraic extension of a perfect field algebraically closed, the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from For an irreducible f over the perfect base, its splitting field is finite and generated by roots that are separable over F; the generalized primitive-element theorem therefore makes it simple, say F(alpha)."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For The one-step root condition makes an algebraic extension of a perfect field algebraically closed, step 4.1 states: \"Let $q\\in L[x]$ be nonconstant and choose a root $\\gamma$ in a splitting field by [L4]. The element $\\gamma$ is algebraic over $L$, while $L/F$ is algebraic, so [L5] makes $\\gamma$ algebraic over $F$. Its minimal polynomial over $F$ splits in $L$ by step 3.1; since $\\gamma$ is one of its roots, $\\gamma\\in L$.\" This is the final proof check that every degree-one, exponent-one, singleton, or identity instance allowed by the hypotheses is evaluated."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For The one-step root condition makes an algebraic extension of a perfect field algebraically closed, step 2.1 states: \"The minimal polynomial $m_\\alpha\\in F[x]$ has a root $\\beta\\in L$ by hypothesis. By [L3] there is an $F$-embedding $E=F(\\alpha)\\to L$ sending $\\alpha$ to $\\beta$. Since $f$ splits in $E$ and its coefficients are fixed, it splits in the image inside $L$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For The one-step root condition makes an algebraic extension of a perfect field algebraically closed, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from For an irreducible f over the perfect base, its splitting field is finite and generated by roots that are separable over F; the generalized primitive-element theorem therefore makes it simple, say F(alpha)."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For The one-step root condition makes an algebraic extension of a perfect field algebraically closed, step 2.1 states: \"The minimal polynomial $m_\\alpha\\in F[x]$ has a root $\\beta\\in L$ by hypothesis. By [L3] there is an $F$-embedding $E=F(\\alpha)\\to L$ sending $\\alpha$ to $\\beta$. Since $f$ splits in $E$ and its coefficients are fixed, it splits in the image inside $L$.\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim The one-step root condition makes an algebraic extension of a perfect field algebraically closed is not a biconditional, so no forward implication is asserted; the proof begins from For an irreducible f over the perfect base, its splitting field is finite and generated by roots that are separable over F; the generalized primitive-element theorem therefore makes it simple, say F(alpha)."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim The one-step root condition makes an algebraic extension of a perfect field algebraically closed is not a biconditional, so no reverse implication is asserted; the proof begins from For an irreducible f over the perfect base, its splitting field is finite and generated by roots that are separable over F; the generalized primitive-element theorem therefore makes it simple, say F(alpha)."
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

## DEPENDENCY: lem-polynomial-gcd-is-stable-under-field-extension

```markdown
title: 'The monic gcd of two base-field polynomials is unchanged after extending the coefficient field'

## Statement
Let $F\subseteq E$ be a field extension and let $f,g\in F[x]$ be not both zero. The monic gcd of $f$ and $g$ computed in $F[x]$ is also their monic gcd in $E[x]$.
```

## DEPENDENCY: cor-splitting-fields-exist-for-finite-families

```markdown
title: 'Every finite family of nonzero polynomials has a splitting field, obtained from their product'

## Statement
Let $f_1,\ldots,f_m\in F[x]$ be nonzero, where $m\in\mathbb N$. A splitting field of the product
$$ h=\prod_{j=1}^m f_j $$
is a splitting field of the family $\{f_1,\ldots,f_m\}$. Hence every finite family of nonzero polynomials has a splitting field. For $m=0$, $h=1$ and the splitting field is $F$.
```

## DEPENDENCY: cor-finite-extensions-of-finite-fields-are-simple

```markdown
title: "Every finite extension of a finite field is simple"

## Statement
Every finite-degree extension $K/F$ of a finite field is simple: there exists $a\in K$ with $K=F(a)$.
```

## DEPENDENCY: thm-finitely-generated-algebraic-extensions-are-finite

```markdown
title: "An extension generated by finitely many algebraic elements is finite"

## Statement
If $a_1,\ldots,a_r$ are algebraic over $F$, then $F(a_1,\ldots,a_r)/F$ is finite.
```

## DEPENDENCY: lem-artin-simultaneous-root-ideal-is-proper

```markdown
title: "Artin's ideal generated by $f(x_f)$ for all monic nonconstant $f\\in F[x]$ is proper"

## Statement
Let $\mathcal S$ be the set of monic nonconstant polynomials in $F[x]$, let
$A=F[x_f:f\in\mathcal S]$, and let

$$I=(f(x_f):f\in\mathcal S)\mathrel{\trianglelefteq}A.$$

Then $I$ is a proper ideal of $A$.
```

## DEPENDENCY: thm-proper-ideal-contained-in-maximal-ideal

```markdown
title: 'In a nonzero commutative ring, every proper ideal is contained in a maximal ideal'

## Statement
Assume the Axiom of Choice ([[def-axiom-of-choice]]).

In a nonzero commutative ring, every proper ideal is contained in a maximal ideal.
```

## DEPENDENCY: thm-quotient-is-field-iff-ideal-maximal

```markdown
title: '$R/M$ is a field if and only if $M$ is a maximal ideal'

## Statement
$R/M$ is a field if and only if $M$ is a maximal ideal.

Here $R$ is commutative and $M$ is an ideal of $R$.
```

## DEPENDENCY: thm-zorn

```markdown
title: "Zorn's lemma"

## Statement
Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(P, \le)$ be a
nonempty poset in which **every chain has an upper bound**. Then $P$ has a
maximal element ([[def-maximal-element]]).

Note the hypothesis asks only for an upper bound, not a least upper bound, and
the conclusion asserts only that a maximal element exists, never that a greatest
one does.
```

## DEPENDENCY: cor-algebraic-extensions-of-perfect-fields-are-separable

```markdown
title: "Every algebraic extension of a perfect field is separable"

## Statement
If $K/F$ is algebraic and $F$ is perfect, then $K/F$ is separable.
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

## DEPENDENCY: thm-splitting-fields-exist-for-nonzero-polynomials

```markdown
title: 'Every nonzero polynomial over a field has a splitting field'

## Statement
For every field $F$ and every nonzero polynomial $f\in F[x]$, there exists a splitting field of $f$ over $F$.
```

## DEPENDENCY: thm-transitivity-of-algebraicity

```markdown
title: "Algebraicity is transitive in towers of field extensions"

## Statement
If $F\subseteq K\subseteq L$, the extension $K/F$ is algebraic, and $L/K$ is algebraic, then $L/F$ is algebraic.
```

## DEPENDENCY: def-algebraically-closed-field

```markdown
title: 'An algebraically closed field: every nonconstant polynomial has a root in the field'

## Definition
A field $F$ is **algebraically closed** when every nonconstant polynomial $p\in F[x]$ has a root in $F$: there is $\lambda\in F$ such that $p(\lambda)=0$.

This definition concerns roots in the field itself. It does not assert here that any particular field, including $\mathbb C$, is algebraically closed.
```
