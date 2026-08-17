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
label: n-16

run: frontier-15
role: refuter
label: n-16
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

## ITEM: thm-universal-property-of-a-polynomial-ring-on-a-family

```markdown
---
id: thm-universal-property-of-a-polynomial-ring-on-a-family
kind: theorem
title: "Universal property of a polynomial ring on an arbitrary family of indeterminates"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-polynomial-ring-on-a-family-is-a-commutative-ring, def-ring-homomorphism, lem-finite-sum-reindexing-and-fubini]
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

Let $R,S$ be commutative rings, let $\varphi:R\to S$ be a ring homomorphism,
and let $(s_i)_{i\in I}$ be a family in $S$. There is a unique ring homomorphism

$$\Phi:R[x_i:i\in I]\longrightarrow S$$

whose restriction to $R$ is $\varphi$ and which satisfies $\Phi(x_i)=s_i$ for
every $i\in I$.

## Facts & Assumptions

**Given:** Commutative rings $R,S$, a ring homomorphism $\varphi:R\to S$, and a family $(s_i)_{i\in I}$ in $S$.

[L1] The finite convolution construction is a commutative ring containing $R$ ([[thm-polynomial-ring-on-a-family-is-a-commutative-ring]]).

[L2] A ring homomorphism preserves addition, multiplication, and the multiplicative identity ([[def-ring-homomorphism]]).

[L3] Finite sums may be reindexed and evaluated in either order over finite products ([[lem-finite-sum-reindexing-and-fubini]]).

## Proof

**Proof technique:** direct.

1.1 For $a\in\mathcal M(I)$ define $s^a:=\prod_{i\in\operatorname{supp}(a)}s_i^{a_i}$, and for $c=\sum_a c_ax^a$ define $\Phi(c):=\sum_a\varphi(c_a)s^a$; both expressions are finite and the empty product is $1_S$. [L1, construct]

2.1 Pointwise addition gives $\Phi(c+d)=\Phi(c)+\Phi(d)$, while $s^{a+b}=s^as^b$ and finite reindexing give $\Phi(cd)=\Phi(c)\Phi(d)$. [step 1.1, L3, algebra]

3.1 The zero monomial gives $\Phi(1)=1$, constants give $\Phi(r)=\varphi(r)$, and the one-supported exponent family gives $\Phi(x_i)=s_i$; hence $\Phi$ is the required ring homomorphism by [L2]. [step 1.1, step 2.1, L2]

4.1 Any ring homomorphism with these values must send $c_ax^a$ to $\varphi(c_a)s^a$ and therefore, by finite additivity, must equal the formula in step 1.1. [step 1.1, L2] ∎

```

### Recorded proof contract for thm-universal-property-of-a-polynomial-ring-on-a-family

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-polynomial-ring-on-a-family-is-a-commutative-ring",
   "source_section": "Statement",
   "quote": "For every commutative ring $R$ and set $I$, the addition and convolution of\n[[def-polynomial-ring-on-a-family-of-indeterminates]] make $R[x_i:i\\in I]$ a\ncommutative ring. The constant map $R\\to R[x_i:i\\in I]$ is an injective ring\nhomomorphism. If $I=\\varnothing$, it is an isomorphism.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-ring-homomorphism",
   "source_section": "Definition",
   "quote": "Let $R$ and $S$ be rings ([[def-ring]]). A **ring homomorphism** from $R$ to $S$\nis a function $f : R \\to S$ such that, for all $x, y \\in R$,\n\n- **(RH1)** $f(x + y) = f(x) + f(y)$;\n- **(RH2)** $f(xy) = f(x)f(y)$;\n- **(RH3)** $f(1_R) = 1_S$.\n\nA ring homomorphism from a ring to itself is a **ring endomorphism**; a\nbijective ring homomorphism is a **ring isomorphism**.\n\n**(RH3) is imposed, not derived, and the reason is exactly the reason\n[[def-group-homomorphism]] treats monoids and groups differently.** Condition\n(RH1) says that $f$ is a homomorphism of the additive groups\n$(R,+,0_R) \\to (S,+,0_S)$, and for groups preservation of the identity is *free*:\nit follows from (RH1) by cancellation\n([[lem-group-homomorphism-basic-properties]]). Condition (RH2) says only that\n$f$ is a homomorphism of the multiplicative *semigroups*, and $(R,\\cdot,1_R)$ is\na monoid that need not be a group ([[def-semigroup-and-monoid]]); for monoids preservation\nof the identity does **not** follow and must be assumed, which is precisely why\n[[def-group-homomorphism]] puts the clause $f(e) = e'$ into the definition of a\nmonoid homomorphism and leaves it out of the definition of a group homomorphism\n([[def-identity-element]]).\n\nSo a ring homomorphism is: a homomorphism of additive groups that is also a\nhomomorphism of multiplicative monoids. The clause is not redundant: the\ncompanion page exhibits a map $\\mathbb{Z} \\to \\mathbb{Z} \\times \\mathbb{Z}$\nsatisfying (RH1) and (RH2) and failing (RH3).",
   "uses": [
    "3.1",
    "4.1"
   ]
  },
  {
   "fact": "L3",
   "source": "lem-finite-sum-reindexing-and-fubini",
   "source_section": "Statement",
   "quote": "Let $(M,+,0)$ be a commutative monoid and let all index sets below be finite.\n\n1. If $h:T\\to S$ is a bijection and $a:S\\to M$, then $\\sum_{t\\in T}a_{h(t)}=\\sum_{s\\in S}a_s$.\n2. If $S$ and $T$ are disjoint and $a:S\\cup T\\to M$, then $\\sum_{u\\in S\\cup T}a_u=\\sum_{s\\in S}a_s+\\sum_{t\\in T}a_t$.\n3. If $a:S\\times T\\to M$, then\n   $$\\sum_{(s,t)\\in S\\times T}a_{s,t}=\\sum_{s\\in S}\\left(\\sum_{t\\in T}a_{s,t}\\right)=\\sum_{t\\in T}\\left(\\sum_{s\\in S}a_{s,t}\\right).$$",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "For $a\\in\\mathcal M(I)$ define $s^a:=\\prod_{i\\in\\operatorname{supp}(a)}s_i^{a_i}$, and for $c=\\sum_a c_ax^a$ define $\\Phi(c):=\\sum_a\\varphi(c_a)s^a$; both expressions are finite and the empty product is $1_S$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "construct"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Pointwise addition gives $\\Phi(c+d)=\\Phi(c)+\\Phi(d)$, while $s^{a+b}=s^as^b$ and finite reindexing give $\\Phi(cd)=\\Phi(c)\\Phi(d)$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L3",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "The zero monomial gives $\\Phi(1)=1$, constants give $\\Phi(r)=\\varphi(r)$, and the one-supported exponent family gives $\\Phi(x_i)=s_i$; hence $\\Phi$ is the required ring homomorphism by [L2].",
   "step": "3.1",
   "inputs": [
    "step 1.1",
    "step 2.1",
    "L2"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "Any ring homomorphism with these values must send $c_ax^a$ to $\\varphi(c_a)s^a$ and therefore, by finite additivity, must equal the formula in step 1.1.",
   "step": "4.1",
   "inputs": [
    "step 1.1",
    "L2"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "For Universal property of a polynomial ring on an arbitrary family of indeterminates, step 1.1 states: \"For $a\\in\\mathcal M(I)$ define $s^a:=\\prod_{i\\in\\operatorname{supp}(a)}s_i^{a_i}$, and for $c=\\sum_a c_ax^a$ define $\\Phi(c):=\\sum_a\\varphi(c_a)s^a$; both expressions are finite and the empty product is $1_S$.\" This is the final proof check that the possibly empty family, list, union, product, or tower has its neutral case computed."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For Universal property of a polynomial ring on an arbitrary family of indeterminates, step 3.1 states: \"The zero monomial gives $\\Phi(1)=1$, constants give $\\Phi(r)=\\varphi(r)$, and the one-supported exponent family gives $\\Phi(x_i)=s_i$; hence $\\Phi$ is the required ring homomorphism by [L2].\" This is the final proof check that every zero exponent, index, degree, coefficient, or element is either handled or excluded by the exact hypotheses."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For Universal property of a polynomial ring on an arbitrary family of indeterminates, step 3.1 states: \"The zero monomial gives $\\Phi(1)=1$, constants give $\\Phi(r)=\\varphi(r)$, and the one-supported exponent family gives $\\Phi(x_i)=s_i$; hence $\\Phi$ is the required ring homomorphism by [L2].\" This is the final proof check that every degree-one, exponent-one, singleton, or identity instance allowed by the hypotheses is evaluated."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For Universal property of a polynomial ring on an arbitrary family of indeterminates, step 3.1 states: \"The zero monomial gives $\\Phi(1)=1$, constants give $\\Phi(r)=\\varphi(r)$, and the one-supported exponent family gives $\\Phi(x_i)=s_i$; hence $\\Phi$ is the required ring homomorphism by [L2].\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For Universal property of a polynomial ring on an arbitrary family of indeterminates, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Given a homomorphism Rto S and a family (s_i)_{iin I} in a commutative ring, evaluate a finite polynomial by sending the exponent family a to the finite product of the s_i^{a_i}."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "For Universal property of a polynomial ring on an arbitrary family of indeterminates, only supplied data are used and no unproved nonempty selection occurs; the proof begins from Given a homomorphism Rto S and a family (s_i)_{iin I} in a commutative ring, evaluate a finite polynomial by sending the exponent family a to the finite product of the s_i^{a_i}."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim Universal property of a polynomial ring on an arbitrary family of indeterminates is not a biconditional, so no forward implication is asserted; the proof begins from Given a homomorphism Rto S and a family (s_i)_{iin I} in a commutative ring, evaluate a finite polynomial by sending the exponent family a to the finite product of the s_i^{a_i}."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim Universal property of a polynomial ring on an arbitrary family of indeterminates is not a biconditional, so no reverse implication is asserted; the proof begins from Given a homomorphism Rto S and a family (s_i)_{iin I} in a commutative ring, evaluate a finite polynomial by sending the exponent family a to the finite product of the s_i^{a_i}."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: cor-polynomial-ring-on-a-finite-family-agrees-with-the-iterated-construction

```markdown
---
id: cor-polynomial-ring-on-a-finite-family-agrees-with-the-iterated-construction
kind: corollary
title: "A polynomial ring on a finite ordered family agrees canonically with the iterated polynomial-ring construction"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-universal-property-of-a-polynomial-ring-on-a-family, thm-universal-property-of-a-polynomial-ring, def-multivariate-polynomial-ring-by-iteration]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
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

For a commutative ring $R$ and a finite ordered family
$(x_0,\ldots,x_{n-1})$, the arbitrary-family construction
$R[x_i:i<n]$ is canonically isomorphic as an $R$-algebra to the recursively
iterated polynomial ring $R[x_0]\cdots[x_{n-1}]$. The isomorphism fixes $R$ and
sends each formal indeterminate to the corresponding iterated indeterminate.
For $n=0$, both sides are $R$.

## Facts & Assumptions

**Given:** A commutative ring $R$ and a natural number $n$ indexing an ordered family of indeterminates.

[L1] A homomorphism out of the family polynomial ring is uniquely determined by its restriction to $R$ and the images of all indeterminates ([[thm-universal-property-of-a-polynomial-ring-on-a-family]]).

[L2] A homomorphism from $A[x]$ is uniquely determined by a homomorphism from $A$ and the image of $x$ ([[thm-universal-property-of-a-polynomial-ring]]).

[L3] The finite multivariate polynomial ring is defined recursively, with the empty iteration equal to $R$ and the successor obtained by adjoining one indeterminate ([[def-multivariate-polynomial-ring-by-iteration]]).

## Proof

**Proof technique:** induction.

1.1 For $n=0$, [L3] makes the iterated construction $R$, while the empty-family clause of [L1] makes the family construction canonically $R$. [base, L1, L3]

1.2 Assume the canonical isomorphism has been constructed for a family of length $n$ and fixes $R$ and its indeterminates. [ih]

2.1 For length $n+1$, [L2] extends the induction isomorphism after choosing the image of the new variable, while [L1] gives a homomorphism in the reverse direction fixing $R$ and all $n+1$ variables. [step 1.2, L1, L2, L3]

3.1 Both composites fix $R$ and every indeterminate, so uniqueness in [L1] and [L2] makes them identity homomorphisms; the construction therefore holds for every $n$, including the empty family. [step 2.1, L1, L2, discharge-induction] ∎

```

### Recorded proof contract for cor-polynomial-ring-on-a-finite-family-agrees-with-the-iterated-construction

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-universal-property-of-a-polynomial-ring-on-a-family",
   "source_section": "Statement",
   "quote": "Let $R,S$ be commutative rings, let $\\varphi:R\\to S$ be a ring homomorphism,\nand let $(s_i)_{i\\in I}$ be a family in $S$. There is a unique ring homomorphism\n\n$$\\Phi:R[x_i:i\\in I]\\longrightarrow S$$\n\nwhose restriction to $R$ is $\\varphi$ and which satisfies $\\Phi(x_i)=s_i$ for\nevery $i\\in I$.",
   "uses": [
    "1.1",
    "2.1",
    "3.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-universal-property-of-a-polynomial-ring",
   "source_section": "Statement",
   "quote": "Let $R,S$ be commutative rings, let $\\varphi\\colon R\\to S$ be a unital ring homomorphism, and let $s\\in S$. There is a unique unital ring homomorphism\n\n$$ \\operatorname{ev}_{\\varphi,s}\\colon R[x]\\to S $$\n\nthat extends $\\varphi$ on constant polynomials and sends $x$ to $s$. It is given by $\\operatorname{ev}_{\\varphi,s}(\\sum_i a_i x^i)=\\sum_i\\varphi(a_i)s^i$.",
   "uses": [
    "2.1",
    "3.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-multivariate-polynomial-ring-by-iteration",
   "source_section": "Definition",
   "quote": "Let $R$ be a commutative ring. Define polynomial rings in finitely many commuting indeterminates recursively by\n\n$$ R[x_1,\\ldots,x_0]:=R,\\qquad R[x_1,\\ldots,x_{n+1}]:=R[x_1,\\ldots,x_n][x_{n+1}]. $$\n\nAt each stage the coefficient ring embeds as the constant polynomials ([[thm-polynomial-ring-is-a-commutative-ring]]), so all preceding indeterminates remain present. The new indeterminate commutes with every coefficient by the commutativity built into [[def-polynomial-ring-over-a-commutative-ring]], and consequently all $x_i$ commute. This iterated ring is denoted $R[x_1,\\ldots,x_n]$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "For $n=0$, [L3] makes the iterated construction $R$, while the empty-family clause of [L1] makes the family construction canonically $R$.",
   "step": "1.1",
   "inputs": [
    "base",
    "L1",
    "L3"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "Assume the canonical isomorphism has been constructed for a family of length $n$ and fixes $R$ and its indeterminates.",
   "step": "1.2",
   "inputs": [
    "ih"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "For length $n+1$, [L2] extends the induction isomorphism after choosing the image of the new variable, while [L1] gives a homomorphism in the reverse direction fixing $R$ and all $n+1$ variables.",
   "step": "2.1",
   "inputs": [
    "step 1.2",
    "L1",
    "L2",
    "L3"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Both composites fix $R$ and every indeterminate, so uniqueness in [L1] and [L2] makes them identity homomorphisms; the construction therefore holds for every $n$, including the empty family.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "L1",
    "L2",
    "discharge-induction"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "For A polynomial ring on a finite ordered family agrees canonically with the iterated polynomial-ring construction, step 2.1 states: \"For length $n+1$, [L2] extends the induction isomorphism after choosing the image of the new variable, while [L1] gives a homomorphism in the reverse direction fixing $R$ and all $n+1$ variables.\" This is the final proof check that zero variables give the identity comparison R to R."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For A polynomial ring on a finite ordered family agrees canonically with the iterated polynomial-ring construction, step 1.1 states: \"For $n=0$, [L3] makes the iterated construction $R$, while the empty-family clause of [L1] makes the family construction canonically $R$.\" This is the final proof check that the induction starts at family size zero."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For A polynomial ring on a finite ordered family agrees canonically with the iterated polynomial-ring construction, step 2.1 states: \"For length $n+1$, [L2] extends the induction isomorphism after choosing the image of the new variable, while [L1] gives a homomorphism in the reverse direction fixing $R$ and all $n+1$ variables.\" This is the final proof check that one variable agrees with the published polynomial ring."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For A polynomial ring on a finite ordered family agrees canonically with the iterated polynomial-ring construction, step 1.1 states: \"For $n=0$, [L3] makes the iterated construction $R$, while the empty-family clause of [L1] makes the family construction canonically $R$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For A polynomial ring on a finite ordered family agrees canonically with the iterated polynomial-ring construction, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Induct on the family length."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "For A polynomial ring on a finite ordered family agrees canonically with the iterated polynomial-ring construction, only supplied data are used and no unproved nonempty selection occurs; the proof begins from Induct on the family length."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim A polynomial ring on a finite ordered family agrees canonically with the iterated polynomial-ring construction is not a biconditional, so no forward implication is asserted; the proof begins from Induct on the family length."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim A polynomial ring on a finite ordered family agrees canonically with the iterated polynomial-ring construction is not a biconditional, so no reverse implication is asserted; the proof begins from Induct on the family length."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots

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

### Recorded proof contract for thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots

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
   "source": "thm-universal-property-of-adjoining-an-irreducible-root",
   "source_section": "Statement",
   "quote": "Let $p\\in F[x]$ be monic and irreducible, let $K=F[x]/(p)$, and put\n$a=x+(p)$. If $L/F$ is a field extension and $b\\in L$ satisfies $p(b)=0$,\nthere is a unique field homomorphism\n$$\\varphi:K\\longrightarrow L$$\nthat fixes $F$ and sends $a$ to $b$. Its image is $F[b]$.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L3",
   "source": "def-algebraically-closed-field",
   "source_section": "Definition",
   "quote": "A field $F$ is **algebraically closed** when every nonconstant polynomial $p\\in F[x]$ has a root in $F$: there is $\\lambda\\in F$ such that $p(\\lambda)=0$.\n\nThis definition concerns roots in the field itself. It does not assert here that any particular field, including $\\mathbb C$, is algebraically closed.",
   "uses": [
    "3.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "By [L1], the image $\\sigma(\\alpha)$ of every $F$-embedding is a root of $m_\\alpha$ in $\\Omega$.",
   "step": "1.1",
   "inputs": [
    "L1"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "Conversely, if $\\beta\\in\\Omega$ is a root of $m_\\alpha$, [L2] applied to the two realizations of $F[x]/(m_\\alpha)$ gives a unique $F$-embedding $F(\\alpha)\\to\\Omega$ with $\\alpha\\mapsto\\beta$.",
   "step": "1.2",
   "inputs": [
    "L2"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "The constructions in steps 1.1 and 1.2 are inverse because an $F$-homomorphism on $F(\\alpha)$ is determined by the image of $\\alpha$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "step 1.2"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "The polynomial $m_\\alpha$ splits in $\\Omega$ by repeated use of [L3], and the bijection indexes embeddings by its distinct roots, so repeated roots are counted once.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "L3"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For F-embeddings of F(alpha) into an algebraically closed field correspond to the distinct roots of m_{alpha}, no possibly empty indexed operation occurs; the proof instead begins from Send an embedding to the image of alpha."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For F-embeddings of F(alpha) into an algebraically closed field correspond to the distinct roots of m_{alpha}, the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from Send an embedding to the image of alpha."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For F-embeddings of F(\\alpha) into an algebraically closed field correspond to the distinct roots of m_{\\alpha}, step 1.1 states: \"By [L1], the image $\\sigma(\\alpha)$ of every $F$-embedding is a root of $m_\\alpha$ in $\\Omega$.\" This is the final proof check that every degree-one, exponent-one, singleton, or identity instance allowed by the hypotheses is evaluated."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For F-embeddings of F(\\alpha) into an algebraically closed field correspond to the distinct roots of m_{\\alpha}, step 3.1 states: \"The polynomial $m_\\alpha$ splits in $\\Omega$ by repeated use of [L3], and the bijection indexes embeddings by its distinct roots, so repeated roots are counted once.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For F-embeddings of F(alpha) into an algebraically closed field correspond to the distinct roots of m_{alpha}, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Send an embedding to the image of alpha."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For F-embeddings of F(\\alpha) into an algebraically closed field correspond to the distinct roots of m_{\\alpha}, step 1.1 states: \"By [L1], the image $\\sigma(\\alpha)$ of every $F$-embedding is a root of $m_\\alpha$ in $\\Omega$.\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim F-embeddings of F(alpha) into an algebraically closed field correspond to the distinct roots of m_{alpha} is not a biconditional, so no forward implication is asserted; the proof begins from Send an embedding to the image of alpha."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim F-embeddings of F(alpha) into an algebraically closed field correspond to the distinct roots of m_{alpha} is not a biconditional, so no reverse implication is asserted; the proof begins from Send an embedding to the image of alpha."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, title and claim section only

## DEPENDENCY: thm-polynomial-ring-on-a-family-is-a-commutative-ring

```markdown
title: "Finite convolution makes $R[x_i:i\\in I]$ a commutative ring containing $R$"

## Statement
For every commutative ring $R$ and set $I$, the addition and convolution of
[[def-polynomial-ring-on-a-family-of-indeterminates]] make $R[x_i:i\in I]$ a
commutative ring. The constant map $R\to R[x_i:i\in I]$ is an injective ring
homomorphism. If $I=\varnothing$, it is an isomorphism.
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

## DEPENDENCY: thm-universal-property-of-a-polynomial-ring

```markdown
title: 'Universal property of $R[x]$: a coefficient homomorphism and the image of $x$ determine a unique ring homomorphism'

## Statement
Let $R,S$ be commutative rings, let $\varphi\colon R\to S$ be a unital ring homomorphism, and let $s\in S$. There is a unique unital ring homomorphism

$$ \operatorname{ev}_{\varphi,s}\colon R[x]\to S $$

that extends $\varphi$ on constant polynomials and sends $x$ to $s$. It is given by $\operatorname{ev}_{\varphi,s}(\sum_i a_i x^i)=\sum_i\varphi(a_i)s^i$.
```

## DEPENDENCY: def-multivariate-polynomial-ring-by-iteration

```markdown
title: 'Polynomial rings in finitely many commuting indeterminates by iteration'

## Definition
Let $R$ be a commutative ring. Define polynomial rings in finitely many commuting indeterminates recursively by

$$ R[x_1,\ldots,x_0]:=R,\qquad R[x_1,\ldots,x_{n+1}]:=R[x_1,\ldots,x_n][x_{n+1}]. $$

At each stage the coefficient ring embeds as the constant polynomials ([[thm-polynomial-ring-is-a-commutative-ring]]), so all preceding indeterminates remain present. The new indeterminate commutes with every coefficient by the commutativity built into [[def-polynomial-ring-over-a-commutative-ring]], and consequently all $x_i$ commute. This iterated ring is denoted $R[x_1,\ldots,x_n]$.
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

## DEPENDENCY: def-algebraically-closed-field

```markdown
title: 'An algebraically closed field: every nonconstant polynomial has a root in the field'

## Definition
A field $F$ is **algebraically closed** when every nonconstant polynomial $p\in F[x]$ has a root in $F$: there is $\lambda\in F$ such that $p(\lambda)=0$.

This definition concerns roots in the field itself. It does not assert here that any particular field, including $\mathbb C$, is algebraically closed.
```
