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
label: n-15

run: frontier-15
role: refuter
label: n-15
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

## ITEM: thm-polynomial-ring-on-a-family-is-a-commutative-ring

```markdown
---
id: thm-polynomial-ring-on-a-family-is-a-commutative-ring
kind: theorem
title: "Finite convolution makes $R[x_i:i\\in I]$ a commutative ring containing $R$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-polynomial-ring-on-a-family-of-indeterminates, def-monomials-on-an-index-set, lem-finite-sum-reindexing-and-fubini, def-ring-homomorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "U. Thiel, Commutative Algebra, Section 1.4"
      url: "https://ulthiel.com/math/files/Commutative-Algebra.pdf"
pipeline_run: null
---

## Statement

For every commutative ring $R$ and set $I$, the addition and convolution of
[[def-polynomial-ring-on-a-family-of-indeterminates]] make $R[x_i:i\in I]$ a
commutative ring. The constant map $R\to R[x_i:i\in I]$ is an injective ring
homomorphism. If $I=\varnothing$, it is an isomorphism.

## Facts & Assumptions

**Given:** A commutative ring $R$, a set $I$, and finitely supported coefficient families $c,d,e:\mathcal M(I)\to R$.

[L1] Finite sums may be reindexed by bijections, split over disjoint unions, and evaluated in either order over a finite product ([[lem-finite-sum-reindexing-and-fubini]]).

[L2] A ring homomorphism preserves addition, multiplication, and the multiplicative identity ([[def-ring-homomorphism]]).

[L3] The coefficient families, pointwise addition, convolution, and constants are those of [[def-polynomial-ring-on-a-family-of-indeterminates]].

[L4] For the empty index set, the monomial set consists only of the zero monomial ([[def-monomials-on-an-index-set]]).

## Proof

**Proof technique:** direct.

1.1 For a fixed $u\in\mathcal M(I)$, only pairs $(a,b)\in\operatorname{supp}(c)\times\operatorname{supp}(d)$ with $a+b=u$ contribute to $(cd)_u$, so the coefficient sum is finite; moreover $\operatorname{supp}(cd)$ is contained in the finite image of $\operatorname{supp}(c)\times\operatorname{supp}(d)$ under $(a,b)\mapsto a+b$. Thus convolution is a finitely supported coefficient family. [L3]

1.2 Pointwise addition makes the coefficient families an abelian group, with the zero family as identity and pointwise negatives. [L3, algebra]

1.3 Reindexing $(a,b)$ by $(b,a)$ proves $cd=dc$, and reindexing triples together with finite Fubini proves $(cd)e=c(de)$ coefficient by coefficient. [L1, L3]

1.4 Splitting a finite sum proves $c(d+e)=cd+ce$, while the coefficient family supported at the zero monomial with value $1_R$ is a multiplicative identity. [L1, L3]

1.5 The constant map preserves addition, multiplication, and $1$ by the convolution formula, so it is a ring homomorphism by [L2]; its zero-monomial coefficient recovers the original scalar, hence it is injective. [L2, L3, algebra]

2.1 When $I=\varnothing$, [L4] gives only the zero monomial, so every coefficient family is constant and the constant embedding is surjective. [L3, L4] ∎

```

### Recorded proof contract for thm-polynomial-ring-on-a-family-is-a-commutative-ring

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "lem-finite-sum-reindexing-and-fubini",
   "source_section": "Statement",
   "quote": "Let $(M,+,0)$ be a commutative monoid and let all index sets below be finite.\n\n1. If $h:T\\to S$ is a bijection and $a:S\\to M$, then $\\sum_{t\\in T}a_{h(t)}=\\sum_{s\\in S}a_s$.\n2. If $S$ and $T$ are disjoint and $a:S\\cup T\\to M$, then $\\sum_{u\\in S\\cup T}a_u=\\sum_{s\\in S}a_s+\\sum_{t\\in T}a_t$.\n3. If $a:S\\times T\\to M$, then\n   $$\\sum_{(s,t)\\in S\\times T}a_{s,t}=\\sum_{s\\in S}\\left(\\sum_{t\\in T}a_{s,t}\\right)=\\sum_{t\\in T}\\left(\\sum_{s\\in S}a_{s,t}\\right).$$",
   "uses": [
    "1.3",
    "1.4"
   ]
  },
  {
   "fact": "L2",
   "source": "def-ring-homomorphism",
   "source_section": "Definition",
   "quote": "Let $R$ and $S$ be rings ([[def-ring]]). A **ring homomorphism** from $R$ to $S$\nis a function $f : R \\to S$ such that, for all $x, y \\in R$,\n\n- **(RH1)** $f(x + y) = f(x) + f(y)$;\n- **(RH2)** $f(xy) = f(x)f(y)$;\n- **(RH3)** $f(1_R) = 1_S$.\n\nA ring homomorphism from a ring to itself is a **ring endomorphism**; a\nbijective ring homomorphism is a **ring isomorphism**.\n\n**(RH3) is imposed, not derived, and the reason is exactly the reason\n[[def-group-homomorphism]] treats monoids and groups differently.** Condition\n(RH1) says that $f$ is a homomorphism of the additive groups\n$(R,+,0_R) \\to (S,+,0_S)$, and for groups preservation of the identity is *free*:\nit follows from (RH1) by cancellation\n([[lem-group-homomorphism-basic-properties]]). Condition (RH2) says only that\n$f$ is a homomorphism of the multiplicative *semigroups*, and $(R,\\cdot,1_R)$ is\na monoid that need not be a group ([[def-semigroup-and-monoid]]); for monoids preservation\nof the identity does **not** follow and must be assumed, which is precisely why\n[[def-group-homomorphism]] puts the clause $f(e) = e'$ into the definition of a\nmonoid homomorphism and leaves it out of the definition of a group homomorphism\n([[def-identity-element]]).\n\nSo a ring homomorphism is: a homomorphism of additive groups that is also a\nhomomorphism of multiplicative monoids. The clause is not redundant: the\ncompanion page exhibits a map $\\mathbb{Z} \\to \\mathbb{Z} \\times \\mathbb{Z}$\nsatisfying (RH1) and (RH2) and failing (RH3).",
   "uses": [
    "1.5"
   ]
  },
  {
   "fact": "L3",
   "source": "def-polynomial-ring-on-a-family-of-indeterminates",
   "source_section": "Definition",
   "quote": "Let $R$ be a commutative ring ([[def-commutative-ring]]) and let $I$ be a set.\nThe set $R[x_i:i\\in I]$ consists of the functions\n\n$$c:\\mathcal M(I)\\longrightarrow R$$\n\nwith finite support, where $\\mathcal M(I)$ is the monoid of\n[[def-monomials-on-an-index-set]]. We write such a function as the formal sum\n$\\sum_a c_a x^a$. Addition is pointwise. Multiplication is the convolution\n\n$$(cd)_u:=\\sum_{a+b=u}c_a d_b,$$\n\nwhere only pairs in $\\operatorname{supp}(c)\\times\\operatorname{supp}(d)$\ncontribute and the sum is the finite sum of\n[[def-finite-sum-in-a-commutative-monoid]]. The constant $r\\in R$ is the\ncoefficient family supported at the zero monomial with value $r$, and the\nindeterminate $x_i$ is supported at the exponent family that is $1$ at $i$ and\n$0$ elsewhere.\n\nThe convolution is well defined and these operations make the displayed set a\ncommutative ring by [[thm-polynomial-ring-on-a-family-is-a-commutative-ring]].",
   "uses": [
    "1.1",
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "2.1"
   ]
  },
  {
   "fact": "L4",
   "source": "def-monomials-on-an-index-set",
   "source_section": "Definition",
   "quote": "Let $I$ be a set. A **monomial on $I$** is a function $a:I\\to\\mathbb N$\n([[def-function]], [[def-natural-numbers]]) whose support\n\n$$\\operatorname{supp}(a):=\\{i\\in I:a_i\\ne0\\}$$\n\nis finite in the sense of [[def-countable]]. The set of all such exponent\nfamilies is denoted $\\mathcal M(I)$. The **zero monomial** is the constant-zero\nfunction, and the sum $a+b$ is defined pointwise using natural-number addition\n([[def-nat-addition]]). It again has finite support because\n$\\operatorname{supp}(a+b)\\subseteq\\operatorname{supp}(a)\\cup\\operatorname{supp}(b)$.\n\nWe write $x^a$ for the formal monomial indexed by $a$. If $I=\\varnothing$,\nthere is exactly one function $I\\to\\mathbb N$, so $\\mathcal M(I)$ consists only\nof the zero monomial.",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "For a fixed $u\\in\\mathcal M(I)$, only pairs $(a,b)\\in\\operatorname{supp}(c)\\times\\operatorname{supp}(d)$ with $a+b=u$ contribute to $(cd)_u$, so the coefficient sum is finite; moreover $\\operatorname{supp}(cd)$ is contained in the finite image of $\\operatorname{supp}(c)\\times\\operatorname{supp}(d)$ under $(a,b)\\mapsto a+b$. Thus convolution is a finitely supported coefficient family.",
   "step": "1.1",
   "inputs": [
    "L3"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "Pointwise addition makes the coefficient families an abelian group, with the zero family as identity and pointwise negatives.",
   "step": "1.2",
   "inputs": [
    "L3",
    "algebra"
   ]
  },
  {
   "id": "step-1-3",
   "claim": "Reindexing $(a,b)$ by $(b,a)$ proves $cd=dc$, and reindexing triples together with finite Fubini proves $(cd)e=c(de)$ coefficient by coefficient.",
   "step": "1.3",
   "inputs": [
    "L1",
    "L3"
   ]
  },
  {
   "id": "step-1-4",
   "claim": "Splitting a finite sum proves $c(d+e)=cd+ce$, while the coefficient family supported at the zero monomial with value $1_R$ is a multiplicative identity.",
   "step": "1.4",
   "inputs": [
    "L1",
    "L3"
   ]
  },
  {
   "id": "step-1-5",
   "claim": "The constant map preserves addition, multiplication, and $1$ by the convolution formula, so it is a ring homomorphism by [L2]; its zero-monomial coefficient recovers the original scalar, hence it is injective.",
   "step": "1.5",
   "inputs": [
    "L2",
    "L3",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "When $I=\\varnothing$, [L4] gives only the zero monomial, so every coefficient family is constant and the constant embedding is surjective.",
   "step": "2.1",
   "inputs": [
    "L3",
    "L4"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "For Finite convolution makes R[x_i:i\\in I] a commutative ring containing R, step 2.1 states: \"When $I=\\varnothing$, [L4] gives only the zero monomial, so every coefficient family is constant and the constant embedding is surjective.\" This is the final proof check that the empty index set leaves only the zero exponent family and recovers R."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For Finite convolution makes R[x_i:i\\in I] a commutative ring containing R, step 1.2 states: \"Pointwise addition makes the coefficient families an abelian group, with the zero family as identity and pointwise negatives.\" This is the final proof check that the zero coefficient function has empty support."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For Finite convolution makes R[x_i:i\\in I] a commutative ring containing R, step 1.4 states: \"Splitting a finite sum proves $c(d+e)=cd+ce$, while the coefficient family supported at the zero monomial with value $1_R$ is a multiplicative identity.\" This is the final proof check that one is supported at the zero exponent family."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For Finite convolution makes R[x_i:i\\in I] a commutative ring containing R, step 1.2 states: \"Pointwise addition makes the coefficient families an abelian group, with the zero family as identity and pointwise negatives.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For Finite convolution makes R[x_i:iin I] a commutative ring containing R, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Define multiplication by convolution over pairs of finitely supported exponent families whose pointwise sum is the target monomial."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "For Finite convolution makes R[x_i:iin I] a commutative ring containing R, only supplied data are used and no unproved nonempty selection occurs; the proof begins from Define multiplication by convolution over pairs of finitely supported exponent families whose pointwise sum is the target monomial."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim Finite convolution makes R[x_i:iin I] a commutative ring containing R is not a biconditional, so no forward implication is asserted; the proof begins from Define multiplication by convolution over pairs of finitely supported exponent families whose pointwise sum is the target monomial."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim Finite convolution makes R[x_i:iin I] a commutative ring containing R is not a biconditional, so no reverse implication is asserted; the proof begins from Define multiplication by convolution over pairs of finitely supported exponent families whose pointwise sum is the target monomial."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, title and claim section only

## DEPENDENCY: def-integral-element-and-algebraic-integer

```markdown
title: "Integral elements over a commutative ring and algebraic integers"

## Definition
Let $A\to B$ be a homomorphism of commutative rings. An element $b\in B$ is **integral over $A$** when it is a root of a monic polynomial in $A[X]$. The extension is integral when every element is integral. An **algebraic integer** is a complex number integral over $\mathbb Z$.
```

## DEPENDENCY: cor-rational-algebraic-integers-are-integers

```markdown
title: "The rational algebraic integers are exactly the integers"

## Statement
A rational number is an algebraic integer if and only if it is an integer. See [[def-integral-element-and-algebraic-integer]].
```

## DEPENDENCY: thm-of-square-roots

```markdown
title: "Square roots exist: a unique $\\sqrt{a} \\ge 0$ with $(\\sqrt{a})^2 = a$; the positives are $\\{x^2 : x \\neq 0\\}$"

## Statement
Let $F$ be a complete ordered field ([[def-complete-ordered-field]]). Then every
$a \in F$ with $a \ge 0$ has a **unique** $s \in F$ with $s \ge 0$ and $s^2 = a$;
we write $s = \sqrt{a}$. Consequently the positive elements of $F$ are exactly the
nonzero squares: $x > 0$ if and only if $x = y^2$ for some $y \neq 0$.
```

## DEPENDENCY: def-noetherian-ring

```markdown
title: "Left and right Noetherian rings"

## Definition
A unital ring $R$ is **left Noetherian** when its left regular module ${}_R R$ is Noetherian, and **right Noetherian** when the right regular module $R_R$ is Noetherian. Unqualified “Noetherian ring” means left Noetherian here; the side is stated whenever both notions occur.
```

## DEPENDENCY: def-field-of-fractions

```markdown
title: 'The field of fractions $\operatorname{Frac}(D)=(D\setminus\{0\})^{-1}D$ of an integral domain'

## Definition
If $D$ is an integral domain, then $D\setminus\{0\}$ is multiplicative. Its localisation
$$ \operatorname{Frac}(D)=(D\setminus\{0\})^{-1}D $$
is the **field of fractions** of $D$. Thus its elements are fractions $a/b$ with $a,b\in D$ and $b\ne0$, modulo the localisation equivalence relation.
```

## DEPENDENCY: thm-field-of-fractions-is-a-field-and-the-domain-embeds

```markdown
title: '$\operatorname{Frac}(D)$ is a field and $d\mapsto d/1$ embeds the integral domain $D$'

## Statement
For every integral domain $D$, the localisation $\operatorname{Frac}(D)$ is a field. Its canonical map
$$ D\longrightarrow\operatorname{Frac}(D),\qquad d\longmapsto d/1, $$
is an injective unital ring homomorphism.
```

## DEPENDENCY: def-polynomial-ring-on-a-family-of-indeterminates

```markdown
title: "The polynomial ring $R[x_i:i\\in I]$ as finitely supported coefficient families on monomials"

## Definition
Let $R$ be a commutative ring ([[def-commutative-ring]]) and let $I$ be a set.
The set $R[x_i:i\in I]$ consists of the functions

$$c:\mathcal M(I)\longrightarrow R$$

with finite support, where $\mathcal M(I)$ is the monoid of
[[def-monomials-on-an-index-set]]. We write such a function as the formal sum
$\sum_a c_a x^a$. Addition is pointwise. Multiplication is the convolution

$$(cd)_u:=\sum_{a+b=u}c_a d_b,$$

where only pairs in $\operatorname{supp}(c)\times\operatorname{supp}(d)$
contribute and the sum is the finite sum of
[[def-finite-sum-in-a-commutative-monoid]]. The constant $r\in R$ is the
coefficient family supported at the zero monomial with value $r$, and the
indeterminate $x_i$ is supported at the exponent family that is $1$ at $i$ and
$0$ elsewhere.

The convolution is well defined and these operations make the displayed set a
commutative ring by [[thm-polynomial-ring-on-a-family-is-a-commutative-ring]].
```

## DEPENDENCY: def-monomials-on-an-index-set

```markdown
title: "Monomials on an index set as finitely supported exponent families"

## Definition
Let $I$ be a set. A **monomial on $I$** is a function $a:I\to\mathbb N$
([[def-function]], [[def-natural-numbers]]) whose support

$$\operatorname{supp}(a):=\{i\in I:a_i\ne0\}$$

is finite in the sense of [[def-countable]]. The set of all such exponent
families is denoted $\mathcal M(I)$. The **zero monomial** is the constant-zero
function, and the sum $a+b$ is defined pointwise using natural-number addition
([[def-nat-addition]]). It again has finite support because
$\operatorname{supp}(a+b)\subseteq\operatorname{supp}(a)\cup\operatorname{supp}(b)$.

We write $x^a$ for the formal monomial indexed by $a$. If $I=\varnothing$,
there is exactly one function $I\to\mathbb N$, so $\mathcal M(I)$ consists only
of the zero monomial.
```

## DEPENDENCY: lem-finite-sum-reindexing-and-fubini

```markdown
title: "Finite commutative-monoid sums are invariant under bijective reindexing, split over disjoint unions, and satisfy the finite Fubini rule"

## Statement
Let $(M,+,0)$ be a commutative monoid and let all index sets below be finite.

1. If $h:T\to S$ is a bijection and $a:S\to M$, then $\sum_{t\in T}a_{h(t)}=\sum_{s\in S}a_s$.
2. If $S$ and $T$ are disjoint and $a:S\cup T\to M$, then $\sum_{u\in S\cup T}a_u=\sum_{s\in S}a_s+\sum_{t\in T}a_t$.
3. If $a:S\times T\to M$, then
   $$\sum_{(s,t)\in S\times T}a_{s,t}=\sum_{s\in S}\left(\sum_{t\in T}a_{s,t}\right)=\sum_{t\in T}\left(\sum_{s\in S}a_{s,t}\right).$$
```

## DEPENDENCY: def-ring-homomorphism

```markdown
title: "Ring homomorphism: additive, multiplicative, and required to send $1$ to $1$"

## Definition
Let $R$ and $S$ be rings ([[def-ring]]). A **ring homomorphism** from $R$ to $S$
is a function $f : R \to S$ such that, for all $x, y \in R$,

- **(RH1)** $f(x + y) = f(x) + f(y)$;
- **(RH2)** $f(xy) = f(x)f(y)$;
- **(RH3)** $f(1_R) = 1_S$.

A ring homomorphism from a ring to itself is a **ring endomorphism**; a
bijective ring homomorphism is a **ring isomorphism**.

**(RH3) is imposed, not derived, and the reason is exactly the reason
[[def-group-homomorphism]] treats monoids and groups differently.** Condition
(RH1) says that $f$ is a homomorphism of the additive groups
$(R,+,0_R) \to (S,+,0_S)$, and for groups preservation of the identity is *free*:
it follows from (RH1) by cancellation
([[lem-group-homomorphism-basic-properties]]). Condition (RH2) says only that
$f$ is a homomorphism of the multiplicative *semigroups*, and $(R,\cdot,1_R)$ is
a monoid that need not be a group ([[def-semigroup-and-monoid]]); for monoids preservation
of the identity does **not** follow and must be assumed, which is precisely why
[[def-group-homomorphism]] puts the clause $f(e) = e'$ into the definition of a
monoid homomorphism and leaves it out of the definition of a group homomorphism
([[def-identity-element]]).

So a ring homomorphism is: a homomorphism of additive groups that is also a
homomorphism of multiplicative monoids. The clause is not redundant: the
companion page exhibits a map $\mathbb{Z} \to \mathbb{Z} \times \mathbb{Z}$
satisfying (RH1) and (RH2) and failing (RH3).
```
