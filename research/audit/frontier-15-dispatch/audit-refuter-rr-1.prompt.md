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
label: rr-1

run: frontier-15
role: refuter
label: rr-1
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

## ITEM: prop-jacobi-symbol-well-defined

```markdown
---
id: prop-jacobi-symbol-well-defined
kind: proposition
title: "The Jacobi symbol is well defined on numerator residue classes"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-jacobi-symbol, thm-canonical-prime-factorisation,
       prop-legendre-symbol-well-defined,
       lem-every-integer-above-one-has-a-prime-divisor]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Gorodnik, Number Theory, Lecture 10, §1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture10.pdf"
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.2"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

For every integer $a$ and odd positive integer $n$, the product in [[def-jacobi-symbol]] is independent of the ordering used to list the canonical prime factors and belongs to $\{-1,0,1\}$. The Jacobi symbol depends only on $a\pmod n$, and it is zero exactly when $\gcd(a,n)>1$. At $n=1$ it has the value $1$.

## Facts & Assumptions

**Given:** An integer $a$ and an odd positive integer $n$.

[L1] For odd $n\ge1$ with canonical prime factorisation $n=\prod_{i<r}p_i^{e_i}$, define $\left(\frac an\right):=\prod_{i<r}\left(\frac a{p_i}\right)^{e_i}$ ([[def-jacobi-symbol]]).

[L2] In a prime factorisation of a positive integer, the exponents are determined by the integer; primes outside the factor list have exponent zero ([[thm-canonical-prime-factorisation]]).

[L3] For every odd prime $p$, the Legendre symbol belongs to $\{-1,0,1\}$, depends only on the numerator modulo $p$, and equals zero exactly when $p$ divides the numerator ([[prop-legendre-symbol-well-defined]]).

[L4] Every integer greater than $1$ has a prime divisor ([[lem-every-integer-above-one-has-a-prime-divisor]]).

## Proof

**Proof technique:** direct.

1.1 The uniqueness in [L2] fixes the set of prime factors and every exponent in [L1]; changing their order does not change a finite product of integers. Each factor belongs to $\{-1,0,1\}$ by [L3], so their product does too, and at $n=1$ the empty product is $1$. [L1, L2, L3, algebra]

2.1 If $a\equiv b\pmod n$, then $a\equiv b\pmod p$ for every prime factor $p$ of $n$, so [L3] makes every corresponding factor in [L1] equal. The product is zero exactly when some prime factor $p$ of $n$ divides $a$, which gives $\gcd(a,n)>1$; conversely, if $\gcd(a,n)>1$, [L4] supplies a prime divisor of the gcd, hence a prime factor of $n$ dividing $a$, and [L3] makes that Legendre factor zero. [step 1.1, L1, L3, L4, algebra] ∎

```

### Recorded proof contract for prop-jacobi-symbol-well-defined

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-jacobi-symbol",
   "source_section": "Definition",
   "quote": "For odd $n\\ge1$ with canonical prime factorisation $n=\\prod_{i<r}p_i^{e_i}$, define $\\left(\\frac an\\right):=\\prod_{i<r}\\left(\\frac a{p_i}\\right)^{e_i}$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-canonical-prime-factorisation",
   "source_section": "Statement",
   "quote": "the exponents are determined by $n$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "prop-legendre-symbol-well-defined",
   "source_section": "Statement",
   "quote": "For every odd prime $p$, the Legendre symbol belongs to $\\{-1,0,1\\}$, depends only on the numerator modulo $p$, and satisfies\n\n$$\\left(\\frac ap\\right)=0\\quad\\Longleftrightarrow\\quad p\\mid a.$$",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L4",
   "source": "lem-every-integer-above-one-has-a-prime-divisor",
   "source_section": "Statement",
   "quote": "In particular every integer greater than $1$ has a\nprime divisor.",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The uniqueness in [L2] fixes the set of prime factors and every exponent in [L1]; changing their order does not change a finite product of integers. Each factor belongs to $\\{-1,0,1\\}$ by [L3], so their product does too, and at $n=1$ the empty product is $1$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "If $a\\equiv b\\pmod n$, then $a\\equiv b\\pmod p$ for every prime factor $p$ of $n$, so [L3] makes every corresponding factor in [L1] equal. The product is zero exactly when some prime factor $p$ of $n$ divides $a$, which gives $\\gcd(a,n)>1$; conversely, if $\\gcd(a,n)>1$, [L4] supplies a prime divisor of the gcd, hence a prime factor of $n$ dividing $a$, and [L3] makes that Legendre factor zero.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L1",
    "L3",
    "L4",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "Step 1.1 evaluates the empty prime factorisation at $n=1$ as the product one."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Step 2.1 identifies the zero value exactly with a common prime divisor instead of assuming coprimality."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "The denominator-one convention is explicitly discharged in step 1.1."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Repeated prime factors are handled through their canonical exponents in step 1.1."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "No ordered range other than the finite factor list enters the well-definedness proof."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "Step 1.1 uses uniqueness of canonical prime exponents and therefore makes no choice of a factorisation."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "Step 2.1 proves that a zero Jacobi product gives a prime common divisor and hence $\\gcd(a,n)>1$."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "Step 2.1 proves that $\\gcd(a,n)>1$ supplies a common prime divisor and hence a zero Legendre factor."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: prop-jacobi-symbol-on-units-is-a-homomorphism

```markdown
---
id: prop-jacobi-symbol-on-units-is-a-homomorphism
kind: proposition
title: "For fixed odd modulus, the Jacobi symbol is a homomorphism on the unit group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-jacobi-symbol-well-defined, thm-jacobi-symbol-multiplicativity,
       def-unit-group-modulo-n-and-euler-totient, thm-unit-criterion-modulo-n,
       def-group-homomorphism]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.2"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

Fix an odd positive integer $n$. The assignment $\chi_n([a]_n)=\left(\frac an\right)$ is a group homomorphism $(\mathbb Z/n)^\times\to\{\pm1\}$.

Here $\{\pm1\}$ is the two-element multiplicative group, except that the image is the one-element subgroup $\{1\}$ when the character is trivial.

## Facts & Assumptions

**Given:** An odd positive integer $n$ and unit classes $[a]_n,[b]_n\in(\mathbb Z/n)^\times$.

[L1] The Jacobi symbol belongs to $\{-1,0,1\}$, depends only on $a\pmod n$, and is zero exactly when $\gcd(a,n)>1$ ([[prop-jacobi-symbol-well-defined]]).

[L2] For odd positive $n$, $\left(\frac{ab}{n}\right)=\left(\frac an\right)\left(\frac bn\right)$ ([[thm-jacobi-symbol-multiplicativity]]).

[L3] The unit group $(\mathbb Z/n)^\times$ consists of the invertible residue classes modulo $n$ under multiplication ([[def-unit-group-modulo-n-and-euler-totient]]).

[L4] The class $[a]_n$ is a unit if and only if $\gcd(a,n)=1$ ([[thm-unit-criterion-modulo-n]]).

[L5] A group homomorphism $f:G\to H$ is a function satisfying $f(xy)=f(x)f(y)$ for all $x,y\in G$ ([[def-group-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the value $\left(\frac an\right)$ depends only on the residue class. By [L3] and [L4], a unit class has $\gcd(a,n)=1$, so [L1] rules out the value zero; hence $\chi_n$ is a well-defined function from $(\mathbb Z/n)^\times$ to $\{\pm1\}$. [L1, L3, L4]

2.1 For unit classes $[a]_n$ and $[b]_n$, [L2] gives $\chi_n([a]_n[b]_n)=\chi_n([ab]_n)=\chi_n([a]_n)\chi_n([b]_n)$, which is the condition in [L5]. Thus $\chi_n$ is a group homomorphism, including when $n=1$ and the unit group has one element. [step 1.1, L2, L5] ∎

```

### Recorded proof contract for prop-jacobi-symbol-on-units-is-a-homomorphism

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "prop-jacobi-symbol-well-defined",
   "source_section": "Statement",
   "quote": "For every integer $a$ and odd positive integer $n$, the product in [[def-jacobi-symbol]] is independent of the ordering used to list the canonical prime factors and belongs to $\\{-1,0,1\\}$. The Jacobi symbol depends only on $a\\pmod n$, and it is zero exactly when $\\gcd(a,n)>1$. At $n=1$ it has the value $1$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-jacobi-symbol-multiplicativity",
   "source_section": "Statement",
   "quote": "For integers $a,b$ and an odd positive integer $n$,\n\n$$\\left(\\frac{ab}{n}\\right)=\\left(\\frac an\\right)\\left(\\frac bn\\right).$$",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-unit-group-modulo-n-and-euler-totient",
   "source_section": "Definition",
   "quote": "$$(\\mathbb Z/n)^\\times:=\\{\\,u\\in\\mathbb Z/n:\\text{some }v\\in\\mathbb Z/n\\text{ satisfies }uv=[1]_n\\,\\}.$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-unit-criterion-modulo-n",
   "source_section": "Statement",
   "quote": "Let $n\\ge1$ and $a\\in\\mathbb Z$. Then $[a]_n$ is a unit of $\\mathbb Z/n$\n([[def-unit-group-modulo-n-and-euler-totient]]) if and only if\n\n$$\\gcd(a,n)=1,$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "def-group-homomorphism",
   "source_section": "Definition",
   "quote": "$$f(xy) \\;=\\; f(x)\\, f(y) \\qquad \\text{for all } x, y \\in G .$$",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "By [L1], the value $\\left(\\frac an\\right)$ depends only on the residue class. By [L3] and [L4], a unit class has $\\gcd(a,n)=1$, so [L1] rules out the value zero; hence $\\chi_n$ is a well-defined function from $(\\mathbb Z/n)^\\times$ to $\\{\\pm1\\}$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L3",
    "L4"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "For unit classes $[a]_n$ and $[b]_n$, [L2] gives $\\chi_n([a]_n[b]_n)=\\chi_n([ab]_n)=\\chi_n([a]_n)\\chi_n([b]_n)$, which is the condition in [L5]. Thus $\\chi_n$ is a group homomorphism, including when $n=1$ and the unit group has one element.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L2",
    "L5"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "The map is defined on a fixed unit group, not by an indexed family."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Step 1.1 excludes the zero Jacobi value precisely because every domain element is a unit."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Step 2.1 handles modulus one and the identity value explicitly."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "At $n=1$ both domain and codomain image reduce to the identity case checked in step 2.1."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "No interval or bounded summation occurs in defining the homomorphism."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Representative independence makes the map canonical; no representative is selected."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The statement of the Jacobi homomorphism is not a biconditional."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The statement of the Jacobi homomorphism is not a biconditional."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-jacobi-symbol-supplements

```markdown
---
id: thm-jacobi-symbol-supplements
kind: theorem
title: "The two supplementary laws for the Jacobi symbol"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jacobi-symbol, thm-jacobi-symbol-multiplicativity,
       thm-first-supplement-to-quadratic-reciprocity,
       thm-second-supplement-to-quadratic-reciprocity]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, §D.II"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 10, §1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture10.pdf"
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.2"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

For every odd positive integer $n$,

$$\left(\frac{-1}{n}\right)=(-1)^{(n-1)/2},\qquad \left(\frac2n\right)=(-1)^{(n^2-1)/8}.$$

Both formulas include $n=1$, where each Jacobi symbol and each displayed power of $-1$ equals $1$.

## Facts & Assumptions

**Given:** An odd positive integer $n$.

[L1] The Jacobi symbol is the product of the prime Legendre symbols, taken with the multiplicities in the canonical prime factorisation ([[def-jacobi-symbol]]).

[L2] For odd positive $u,v$, $\left(\frac a{uv}\right)=\left(\frac au\right)\left(\frac av\right)$ ([[thm-jacobi-symbol-multiplicativity]]).

[L3] For every odd prime $p$, $\left(\frac{-1}{p}\right)=(-1)^{(p-1)/2}$ ([[thm-first-supplement-to-quadratic-reciprocity]]).

[L4] For every odd prime $p$, $\left(\frac2p\right)=(-1)^{(p^2-1)/8}$ ([[thm-second-supplement-to-quadratic-reciprocity]]).

## Proof

**Proof technique:** direct.

1.1 Expand $\left(\frac{-1}{n}\right)$ through [L1], applying [L3] to every prime factor with multiplicity and [L2] to multiply the contributions. For odd $u,v$, the difference $(uv-1)/2-(u-1)/2-(v-1)/2=(u-1)(v-1)/2$ is even, so iteration through the factor list gives $\left(\frac{-1}{n}\right)=(-1)^{(n-1)/2}$; for the empty factor list $n=1$, both sides are $1$. [L1, L2, L3, algebra]

2.1 Similarly, [L1] and [L4] give the product of the signs $(-1)^{(p^2-1)/8}$ with multiplicity. For odd $u,v$, the difference $((uv)^2-1)/8-(u^2-1)/8-(v^2-1)/8=(u^2-1)(v^2-1)/8$ is even, because each of $u^2-1$ and $v^2-1$ is divisible by $8$. Iterating this identity gives $\left(\frac2n\right)=(-1)^{(n^2-1)/8}$, again with value $1$ at $n=1$. [L1, L2, L4, algebra] ∎

```

### Recorded proof contract for thm-jacobi-symbol-supplements

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-jacobi-symbol",
   "source_section": "Definition",
   "quote": "For odd $n\\ge1$ with canonical prime factorisation $n=\\prod_{i<r}p_i^{e_i}$, define $\\left(\\frac an\\right):=\\prod_{i<r}\\left(\\frac a{p_i}\\right)^{e_i}$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-jacobi-symbol-multiplicativity",
   "source_section": "Statement",
   "quote": "For an integer $a$ and odd positive integers $m,n$,\n\n$$\\left(\\frac a{mn}\\right)=\\left(\\frac am\\right)\\left(\\frac an\\right).$$",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-first-supplement-to-quadratic-reciprocity",
   "source_section": "Statement",
   "quote": "$$\\left(\\frac{-1}{p}\\right)=(-1)^{(p-1)/2}.$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-second-supplement-to-quadratic-reciprocity",
   "source_section": "Statement",
   "quote": "$$\\left(\\frac2p\\right)=(-1)^{(p^2-1)/8}.$$",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Expand $\\left(\\frac{-1}{n}\\right)$ through [L1], applying [L3] to every prime factor with multiplicity and [L2] to multiply the contributions. For odd $u,v$, the difference $(uv-1)/2-(u-1)/2-(v-1)/2=(u-1)(v-1)/2$ is even, so iteration through the factor list gives $\\left(\\frac{-1}{n}\\right)=(-1)^{(n-1)/2}$; for the empty factor list $n=1$, both sides are $1$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Similarly, [L1] and [L4] give the product of the signs $(-1)^{(p^2-1)/8}$ with multiplicity. For odd $u,v$, the difference $((uv)^2-1)/8-(u^2-1)/8-(v^2-1)/8=(u^2-1)(v^2-1)/8$ is even, because each of $u^2-1$ and $v^2-1$ is divisible by $8$. Iterating this identity gives $\\left(\\frac2n\\right)=(-1)^{(n^2-1)/8}$, again with value $1$ at $n=1$.",
   "step": "2.1",
   "inputs": [
    "L1",
    "L2",
    "L4",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "Statement boundary: both steps evaluate the empty prime factorisation at $n=1$."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "The statement hypothesis that $n$ is positive excludes the zero denominator before the divisions in steps 1.1 and 2.1."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Steps 1.1 and 2.1 explicitly verify both formulas at $n=1$."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Statement boundary: prime powers and repeated prime factors are included by the multiplicity induction in both steps."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "There is no ordered interval; only parity identities for odd products are used."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Canonical prime factors are not selected noncanonically."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The statement of the Jacobi supplementary laws is not a biconditional."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The statement of the Jacobi supplementary laws is not a biconditional."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-euclidean-algorithm-for-jacobi-symbol

```markdown
---
id: thm-euclidean-algorithm-for-jacobi-symbol
kind: theorem
title: "The Euclidean algorithm computes the Jacobi symbol without factoring the denominator"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jacobi-symbol, prop-jacobi-symbol-well-defined,
       thm-jacobi-symbol-multiplicativity, thm-jacobi-symbol-supplements,
       thm-jacobi-symbol-reciprocity, thm-division-algorithm-in-z,
       lem-p-adic-valuation-basic]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.3"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
    - title: "P. Hackman, Elementary Number Theory, §D.II"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 10, §1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture10.pdf"
pipeline_run: null
---

## Statement

Let $a\in\mathbb Z$ and let $n\ge1$ be odd. Starting from $(\varepsilon,A,N)=(1,a,n)$, repeat the following deterministic procedure:

- if $N=1$, return $\varepsilon$;
- otherwise let $r$ be the least nonnegative remainder of $A$ modulo $N$, and return $0$ if $r=0$;
- write $r=2^s b$ with $b$ odd, replace $\varepsilon$ by $\varepsilon(-1)^{s(N^2-1)/8}$, then replace it by $\varepsilon(-1)^{(b-1)(N-1)/4}$ and replace $(A,N)$ by $(N,b)$.

The Euclidean Jacobi algorithm terminates and returns $\left(\frac an\right)$ without factoring the odd denominator $n$.

## Facts & Assumptions

**Given:** An integer $a$, an odd positive integer $n$, and the algorithmic state described in the Statement.

[L1] The Jacobi symbol satisfies $\left(\frac a1\right)=1$ and is zero exactly when $\gcd(a,n)>1$ ([[def-jacobi-symbol]]).

[L2] The Jacobi symbol depends only on its numerator modulo the odd positive denominator ([[prop-jacobi-symbol-well-defined]]).

[L3] For odd positive $N$, $\left(\frac{uv}{N}\right)=\left(\frac uN\right)\left(\frac vN\right)$ ([[thm-jacobi-symbol-multiplicativity]]).

[L4] For odd positive $N$, $\left(\frac2N\right)=(-1)^{(N^2-1)/8}$ ([[thm-jacobi-symbol-supplements]]).

[L5] For coprime odd positive $b,N$, $\left(\frac bN\right)\left(\frac Nb\right)=(-1)^{(b-1)(N-1)/4}$ ([[thm-jacobi-symbol-reciprocity]]).

[L6] Division by a positive integer has a unique remainder $r$ with $0\le r<N$ ([[thm-division-algorithm-in-z]]).

[L7] Every nonzero integer $r$ has a uniquely determined maximal power $2^s$ dividing it and can be written $r=2^s b$ with $b$ odd ([[lem-p-adic-valuation-basic]]).

## Proof

**Proof technique:** direct.

1.1 Maintain the invariant $\left(\frac an\right)=\varepsilon\left(\frac AN\right)$. By [L2] and [L6], replacing $A$ by $r$ preserves the current symbol. If $r=2^sb$, then [L3] and [L4] give $\left(\frac rN\right)=(-1)^{s(N^2-1)/8}\left(\frac bN\right)$. When $\gcd(b,N)=1$, [L5] gives $\left(\frac bN\right)=(-1)^{(b-1)(N-1)/4}\left(\frac Nb\right)$; when the gcd exceeds $1$, [L1] makes both Jacobi symbols zero, so the same signed equality remains true. Thus every nonterminal update preserves the invariant. [L1, L2, L3, L4, L5, L6, L7, algebra]

2.1 At a nonterminal update, $0<r<N$ and the new denominator is the positive odd part $b\le r$, so it is strictly smaller than $N$. A strictly decreasing chain of positive integers cannot have more terms than its initial value, so the procedure reaches a terminal state. [step 1.1, L6, algebra]

3.1 If $N=1$, [L1] and the invariant give $\left(\frac an\right)=\varepsilon$. If $r=0$ while $N>1$, then $N$ divides $A$, so [L1] gives $\left(\frac AN\right)=0$ and the invariant gives the returned value $0$. These are all terminal states, proving correctness and termination; only division, extraction of powers of $2$, and sign updates were used, not a factorisation of $n$. [step 1.1, step 2.1, L1, L6] ∎

```

### Recorded proof contract for thm-euclidean-algorithm-for-jacobi-symbol

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-jacobi-symbol",
   "source_section": "Definition",
   "quote": "The value is $0$ exactly when $\\gcd(a,n)>1$, and $\\left(\\frac a1\\right)=1$.",
   "uses": [
    "1.1",
    "3.1"
   ]
  },
  {
   "fact": "L2",
   "source": "prop-jacobi-symbol-well-defined",
   "source_section": "Statement",
   "quote": "The Jacobi symbol depends only on $a\\pmod n$, and it is zero exactly when $\\gcd(a,n)>1$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-jacobi-symbol-multiplicativity",
   "source_section": "Statement",
   "quote": "For integers $a,b$ and an odd positive integer $n$,\n\n$$\\left(\\frac{ab}{n}\\right)=\\left(\\frac an\\right)\\left(\\frac bn\\right).$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-jacobi-symbol-supplements",
   "source_section": "Statement",
   "quote": "$$\\left(\\frac{-1}{n}\\right)=(-1)^{(n-1)/2},\\qquad \\left(\\frac2n\\right)=(-1)^{(n^2-1)/8}.$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-jacobi-symbol-reciprocity",
   "source_section": "Statement",
   "quote": "$$\\left(\\frac mn\\right)\\left(\\frac nm\\right)=(-1)^{(m-1)(n-1)/4}.$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L6",
   "source": "thm-division-algorithm-in-z",
   "source_section": "Statement",
   "quote": "$$a \\;=\\; qb + r, \\qquad 0 \\le r < b,$$\n\nand the pair $(q,r)$ with these two properties is unique.",
   "uses": [
    "1.1",
    "2.1",
    "3.1"
   ]
  },
  {
   "fact": "L7",
   "source": "lem-p-adic-valuation-basic",
   "source_section": "Statement",
   "quote": "$a = p^{v} a'$ for some $a' \\in \\mathbb{Z}$ with $a' \\ne 0$ and $p \\nmid a'$",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Maintain the invariant $\\left(\\frac an\\right)=\\varepsilon\\left(\\frac AN\\right)$. By [L2] and [L6], replacing $A$ by $r$ preserves the current symbol. If $r=2^sb$, then [L3] and [L4] give $\\left(\\frac rN\\right)=(-1)^{s(N^2-1)/8}\\left(\\frac bN\\right)$. When $\\gcd(b,N)=1$, [L5] gives $\\left(\\frac bN\\right)=(-1)^{(b-1)(N-1)/4}\\left(\\frac Nb\\right)$; when the gcd exceeds $1$, [L1] makes both Jacobi symbols zero, so the same signed equality remains true. Thus every nonterminal update preserves the invariant.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "L4",
    "L5",
    "L6",
    "L7",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "At a nonterminal update, $0<r<N$ and the new denominator is the positive odd part $b\\le r$, so it is strictly smaller than $N$. A strictly decreasing chain of positive integers cannot have more terms than its initial value, so the procedure reaches a terminal state.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L6",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "If $N=1$, [L1] and the invariant give $\\left(\\frac an\\right)=\\varepsilon$. If $r=0$ while $N>1$, then $N$ divides $A$, so [L1] gives $\\left(\\frac AN\\right)=0$ and the invariant gives the returned value $0$. These are all terminal states, proving correctness and termination; only division, extraction of powers of $2$, and sign updates were used, not a factorisation of $n$.",
   "step": "3.1",
   "inputs": [
    "step 1.1",
    "step 2.1",
    "L1",
    "L6"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "The deterministic loop has a terminal state but no empty indexed product beyond the definition cited in [L1]."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Step 3.1 handles a zero remainder and returns the Jacobi zero value."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Step 3.1 handles denominator one before taking a remainder."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "When the reduced numerator is one, step 1.1 immediately reaches the denominator-one terminal evaluation without an invalid swap."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "Step 2.1 uses the strict remainder inequalities $0<r<n$ to prove descent."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "Statement boundary: the quotient-remainder pair and the power-of-two exponent are unique, so every update is deterministic."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The statement of the Euclidean Jacobi algorithm is not a biconditional."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The statement of the Euclidean Jacobi algorithm is not a biconditional."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: prop-unit-square-has-jacobi-symbol-one

```markdown
---
id: prop-unit-square-has-jacobi-symbol-one
kind: proposition
title: "A unit square modulo an odd integer has Jacobi symbol one"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-jacobi-symbol-on-units-is-a-homomorphism,
       thm-unit-criterion-modulo-n]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, §D.II"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 10, §1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture10.pdf"
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.2"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

If $a$ is a unit square modulo an odd positive integer $n$, then $\left(\frac an\right)=1$.

Explicitly, if $\gcd(a,n)=1$ and $x^2\equiv a\pmod n$ for some integer $x$, then the Jacobi symbol of $a$ modulo $n$ is $1$.

## Facts & Assumptions

**Given:** An odd positive integer $n$ and integers $a,x$ such that $\gcd(a,n)=1$ and $x^2\equiv a\pmod n$.

[L1] The assignment $\chi_n([u]_n)=\left(\frac un\right)$ is a group homomorphism $(\mathbb Z/n)^\times\to\{\pm1\}$ ([[prop-jacobi-symbol-on-units-is-a-homomorphism]]).

[L2] A residue class $[u]_n$ is a unit if and only if $\gcd(u,n)=1$ ([[thm-unit-criterion-modulo-n]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $[a]_n$ is a unit. If $v$ is its inverse, then $[x]_n([x]_n v)=[x]_n^2v=[a]_nv=[1]_n$, so $[x]_n$ is also a unit and lies in the domain of [L1]. [L1, L2, given, algebra]

2.1 Applying [L1] to $[a]_n=[x]_n^2$ gives $\left(\frac an\right)=\chi_n([a]_n)=\chi_n([x]_n)^2=1$, since $\chi_n([x]_n)\in\{\pm1\}$. [step 1.1, L1, algebra] ∎

```

### Recorded proof contract for prop-unit-square-has-jacobi-symbol-one

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "prop-jacobi-symbol-on-units-is-a-homomorphism",
   "source_section": "Statement",
   "quote": "The assignment $\\chi_n([a]_n)=\\left(\\frac an\\right)$ is a group homomorphism $(\\mathbb Z/n)^\\times\\to\\{\\pm1\\}$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-unit-criterion-modulo-n",
   "source_section": "Statement",
   "quote": "Let $n\\ge1$ and $a\\in\\mathbb Z$. Then $[a]_n$ is a unit of $\\mathbb Z/n$\n([[def-unit-group-modulo-n-and-euler-totient]]) if and only if\n\n$$\\gcd(a,n)=1,$$",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "By [L2], $[a]_n$ is a unit. If $v$ is its inverse, then $[x]_n([x]_n v)=[x]_n^2v=[a]_nv=[1]_n$, so $[x]_n$ is also a unit and lies in the domain of [L1].",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Applying [L1] to $[a]_n=[x]_n^2$ gives $\\left(\\frac an\\right)=\\chi_n([a]_n)=\\chi_n([x]_n)^2=1$, since $\\chi_n([x]_n)\\in\\{\\pm1\\}$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L1",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "Only one supplied square-root witness is used."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "The unit hypothesis used in step 1.1 excludes a zero Jacobi value, including nonunit square targets."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "At $n=1$ the unique class and empty-product Jacobi value make step 2.1 equal to one."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Statement boundary: the one-element unit group at modulus one satisfies the same homomorphism calculation."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "No interval or finite range appears in this group calculation."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "Statement boundary: the square root is part of the hypothesis, not selected from an unproved nonempty set."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The statement of unit squares and the Jacobi symbol is not a biconditional."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The statement of unit squares and the Jacobi symbol is not a biconditional."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: lem-nonsingular-square-root-lift-modulo-odd-prime-powers

```markdown
---
id: lem-nonsingular-square-root-lift-modulo-odd-prime-powers
kind: lemma
title: "A nonsingular square root lifts uniquely by one odd-prime-power step"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-linear-congruence-solvability-and-solution-count,
       thm-euclids-lemma, lem-prime-not-dividing-is-coprime]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Gorodnik, Number Theory, Lecture 7, §1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture7.pdf"
    - title: "P. Hackman, Elementary Number Theory, §B.VII"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

Let $p$ be an odd prime, let $k\ge1$, and let $a,x_k\in\mathbb Z$ satisfy $p\nmid a$ and $x_k^2\equiv a\pmod{p^k}$. Then there is a unique class $t\pmod p$ such that $(x_k+tp^k)^2\equiv a\pmod{p^{k+1}}$.

Equivalently, the root class of $x_k$ modulo $p^k$ has exactly one lift to a root class modulo $p^{k+1}$.

## Facts & Assumptions

**Given:** An odd prime $p$, an integer $k\ge1$, and integers $a,x_k$ with $p\nmid a$ and $x_k^2\equiv a\pmod{p^k}$.

[L1] If $d=\gcd(c,n)$, then $ct\equiv b\pmod n$ is soluble exactly when $d\mid b$, and when soluble it has exactly $d$ solution classes modulo $n$ ([[thm-linear-congruence-solvability-and-solution-count]]).

[L2] If a prime $p$ divides a product $uv$, then $p\mid u$ or $p\mid v$ ([[thm-euclids-lemma]]).

[L3] If a prime $p$ does not divide an integer $u$, then $\gcd(p,u)=1$ ([[lem-prime-not-dividing-is-coprime]]).

## Proof

**Proof technique:** direct.

1.1 Reducing the given congruence modulo $p$ shows that $p\mid x_k$ would force $p\mid a$, contrary to the hypothesis. If $p\mid2x_k$, [L2] would give $p\mid2$ or $p\mid x_k$; both are impossible because $p$ is odd. Hence $p\nmid2x_k$, and [L3] gives $\gcd(2x_k,p)=1$. [L2, L3, given]

2.1 Write $x_k^2-a=cp^k$. Every class modulo $p^{k+1}$ reducing to $x_k$ modulo $p^k$ has a unique form $x_k+tp^k$ with $t$ modulo $p$, and expansion gives $(x_k+tp^k)^2-a=p^k(c+2x_kt+t^2p^k)$. Since $k\ge1$, the lift is a root modulo $p^{k+1}$ exactly when $2x_kt\equiv-c\pmod p$. By step 1.1 and [L1], this linear congruence has exactly one solution class $t$ modulo $p$. [step 1.1, L1, algebra] ∎

```

### Recorded proof contract for lem-nonsingular-square-root-lift-modulo-odd-prime-powers

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-linear-congruence-solvability-and-solution-count",
   "source_section": "Statement",
   "quote": "The congruence\n\n$$ax\\equiv b\\pmod n$$\n\nhas an integer solution if and only if $d\\mid b$. When it is solvable, it has\nexactly $d$ solution classes in $\\mathbb Z/n$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-euclids-lemma",
   "source_section": "Statement",
   "quote": "$$p \\mid a \\qquad \\text{or} \\qquad p \\mid b .$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "lem-prime-not-dividing-is-coprime",
   "source_section": "Statement",
   "quote": "if $p \\nmid a$ then $p$ and $a$ are coprime",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Reducing the given congruence modulo $p$ shows that $p\\mid x_k$ would force $p\\mid a$, contrary to the hypothesis. If $p\\mid2x_k$, [L2] would give $p\\mid2$ or $p\\mid x_k$; both are impossible because $p$ is odd. Hence $p\\nmid2x_k$, and [L3] gives $\\gcd(2x_k,p)=1$.",
   "step": "1.1",
   "inputs": [
    "L2",
    "L3",
    "given"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Write $x_k^2-a=cp^k$. Every class modulo $p^{k+1}$ reducing to $x_k$ modulo $p^k$ has a unique form $x_k+tp^k$ with $t$ modulo $p$, and expansion gives $(x_k+tp^k)^2-a=p^k(c+2x_kt+t^2p^k)$. Since $k\\ge1$, the lift is a root modulo $p^{k+1}$ exactly when $2x_kt\\equiv-c\\pmod p$. By step 1.1 and [L1], this linear congruence has exactly one solution class $t$ modulo $p$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L1",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "The lemma lifts one supplied root and has no indexed family."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Step 1.1 uses $p\\nmid a$ to exclude the singular zero root modulo $p$."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "The minimum exponent $k=1$ is admitted and the expansion in step 2.1 still has the required $p^2$ error term."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Oddness of $p$ is spent in step 1.1; the singular prime-two case is deliberately excluded."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "The correction parameter is a residue class, not an interval endpoint."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "Statement boundary: the error quotient exists by the supplied congruence, and [L1] proves existence and uniqueness of the correction class."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The statement of one-step nonsingular square-root lifting is not a biconditional."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The statement of one-step nonsingular square-root lifting is not a biconditional."
  }
 ],
 "finite_smoke": [
  {
   "check": "binomial-congruence-solution-count",
   "asserts": "Equivalently, the root class of $x_k$ modulo $p^k$ has exactly one lift to a root class modulo $p^{k+1}$.",
   "claim": "Unique lifting is exactly what holds the solution count fixed as the exponent climbs: if some root class lifted in two ways at one step, the count at p^(k+1) would exceed gcd(phi(p^(k+1)), 2) = 2 while the count at p^k stayed 2. The check runs both exponents for 3/9/27, 5/25 and 7/49, so a failure of uniqueness at any of those steps is caught as a wrong count.",
   "checked_in": "step 2.1"
  }
 ]
}
```

## ITEM: thm-unit-square-criterion-modulo-odd-prime-powers

```markdown
---
id: thm-unit-square-criterion-modulo-odd-prime-powers
kind: theorem
title: "Unit square criterion and root count modulo odd prime powers"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-nonsingular-square-root-lift-modulo-odd-prime-powers,
       cor-number-of-solutions-to-quadratic-congruence-modulo-prime,
       def-legendre-symbol]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, §§B.VII and D.I"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 7, §1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture7.pdf"
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.4"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

For an odd prime $p$, $k\ge1$, and $p\nmid a$, the congruence $x^2\equiv a\pmod{p^k}$ is soluble if and only if $\left(\frac ap\right)=1$.

When soluble it has exactly two solution classes modulo $p^k$.

## Facts & Assumptions

**Given:** An odd prime $p$, an integer $k\ge1$, and an integer $a$ with $p\nmid a$.

[L1] Every root modulo $p^j$ has a unique lift to a root modulo $p^{j+1}$ when $j\ge1$ and $p\nmid a$ ([[lem-nonsingular-square-root-lift-modulo-odd-prime-powers]]).

[L2] The congruence $x^2\equiv a\pmod p$ has exactly $1+(a/p)$ solution classes modulo $p$ ([[cor-number-of-solutions-to-quadratic-congruence-modulo-prime]]).

[L3] For $p\nmid a$, the Legendre symbol $(a/p)$ is $1$ when $a$ is a square modulo $p$ and $-1$ otherwise ([[def-legendre-symbol]]).

## Proof

**Proof technique:** direct.

1.1 Any root modulo $p^k$ reduces to a root modulo $p$. Since $p\nmid a$, [L3] makes $(a/p)$ a sign, and [L2] says that a root exists only when $1+(a/p)=2$, equivalently when $(a/p)=1$. [L2, L3, given]

1.2 Conversely, if $(a/p)=1$, [L2] gives exactly two root classes modulo $p$. For $k=1$ these are the required roots. For $k>1$, repeatedly apply [L1] from exponent $1$ through exponent $k-1$ to lift each class uniquely; the two lifted classes remain distinct because their reductions modulo $p$ are distinct. [L1, L2, L3]

2.1 Every root modulo $p^k$ reduces to one of the two roots modulo $p$, and at every successive exponent [L1] forces it to be the unique lift of that reduction. Thus step 1.2 constructs all roots, so there are exactly two. Together with step 1.1 this proves both directions of the criterion and the count. [step 1.1, step 1.2, L1] ∎

```

### Recorded proof contract for thm-unit-square-criterion-modulo-odd-prime-powers

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "lem-nonsingular-square-root-lift-modulo-odd-prime-powers",
   "source_section": "Statement",
   "quote": "Let $p$ be an odd prime, let $k\\ge1$, and let $a,x_k\\in\\mathbb Z$ satisfy $p\\nmid a$ and $x_k^2\\equiv a\\pmod{p^k}$. Then there is a unique class $t\\pmod p$ such that $(x_k+tp^k)^2\\equiv a\\pmod{p^{k+1}}$.\n\nEquivalently, the root class of $x_k$ modulo $p^k$ has exactly one lift to a root class modulo $p^{k+1}$.",
   "uses": [
    "1.2",
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "cor-number-of-solutions-to-quadratic-congruence-modulo-prime",
   "source_section": "Statement",
   "quote": "$$x^2\\equiv a\\pmod p$$\n\nhas exactly $1+(a/p)$ solution classes modulo $p$.",
   "uses": [
    "1.1",
    "1.2"
   ]
  },
  {
   "fact": "L3",
   "source": "def-legendre-symbol",
   "source_section": "Definition",
   "quote": "$$\\left(\\frac ap\\right):=\\begin{cases}0,&p\\mid a,\\\\1,&p\\nmid a\\text{ and }a\\text{ is a quadratic residue modulo }p,\\\\-1,&p\\nmid a\\text{ and }a\\text{ is a quadratic nonresidue modulo }p.\\end{cases}$$",
   "uses": [
    "1.1",
    "1.2"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Any root modulo $p^k$ reduces to a root modulo $p$. Since $p\\nmid a$, [L3] makes $(a/p)$ a sign, and [L2] says that a root exists only when $1+(a/p)=2$, equivalently when $(a/p)=1$.",
   "step": "1.1",
   "inputs": [
    "L2",
    "L3",
    "given"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "Conversely, if $(a/p)=1$, [L2] gives exactly two root classes modulo $p$. For $k=1$ these are the required roots. For $k>1$, repeatedly apply [L1] from exponent $1$ through exponent $k-1$ to lift each class uniquely; the two lifted classes remain distinct because their reductions modulo $p$ are distinct.",
   "step": "1.2",
   "inputs": [
    "L1",
    "L2",
    "L3"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Every root modulo $p^k$ reduces to one of the two roots modulo $p$, and at every successive exponent [L1] forces it to be the unique lift of that reduction. Thus step 1.2 constructs all roots, so there are exactly two. Together with step 1.1 this proves both directions of the criterion and the count.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
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
   "reason": "The proof follows one prime-power chain rather than a possibly empty factor family."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "The hypothesis $p\\nmid a$ is used in step 1.1 and excludes the singular zero target."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Step 1.2 treats exponent $k=1$ as the base case."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Statement boundary: the theorem requires an odd prime, exactly the nonsingular setting needed by [L1]."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "Step 1.2 starts at exponent one and lifts only through exponent $k-1$."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "[L2] proves that the two base roots exist, and [L1] proves existence and uniqueness at every lift in steps 1.2–2.1."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "Step 1.1 proves that solubility modulo $p^k$ forces Legendre symbol one."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "Steps 1.2–2.1 prove that Legendre symbol one yields exactly two roots."
  }
 ],
 "finite_smoke": [
  {
   "check": "binomial-congruence-solution-count",
   "asserts": "When soluble it has exactly two solution classes modulo $p^k$.",
   "claim": "Every odd prime power below the search bound has a primitive root, so at exponent m = 2 the check computes gcd(phi(p^k), 2) = 2 — phi(p^k) = p^(k-1)(p-1) is even — and compares it against the actual number of solutions of x^2 = a for every solvable unit a. A count other than two at any of 3, 9, 27, 5, 25, 7, 49, 11, 13, ... is a countermodel to this clause.",
   "checked_in": "steps 1.2 and 2.1"
  }
 ]
}
```

---

# DEPENDENCY TEXT — the cited items, in full

## DEPENDENCY: def-jacobi-symbol

```markdown
---
id: def-jacobi-symbol
kind: definition
title: "The Jacobi symbol, with its zero value and empty-product convention"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-legendre-symbol, thm-canonical-prime-factorisation,
       def-monoid-finite-product, def-common-divisor-and-gcd]
justified_by: [prop-jacobi-symbol-well-defined]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, §D.II"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 10, §1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture10.pdf"
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.2"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Definition

Let $a\in\mathbb Z$ and let $n$ be an odd positive integer. For odd $n\ge1$ with canonical prime factorisation $n=\prod_{i<r}p_i^{e_i}$, define $\left(\frac an\right):=\prod_{i<r}\left(\frac a{p_i}\right)^{e_i}$.

This is the **Jacobi symbol** of $a$ modulo $n$. The prime factors are distinct, every exponent is positive, and each factor on the right is a Legendre symbol ([[def-legendre-symbol]]). When $n=1$, the factor list is empty and the finite-product convention ([[def-monoid-finite-product]]) gives

$$\left(\frac a1\right)=1.$$

The value is $0$ exactly when $\gcd(a,n)>1$, and $\left(\frac a1\right)=1$. Independence from the ordering of the canonical factors, dependence only on $a\pmod n$, and the stated zero criterion are proved in [[prop-jacobi-symbol-well-defined]].

```

## DEPENDENCY: thm-canonical-prime-factorisation

```markdown
---
id: thm-canonical-prime-factorisation
kind: theorem
title: "For $n \\ge 1$ and any injective list $p : r \\to \\mathbb{Z}$ of primes containing every prime divisor of $n$, one has $n = \\prod_{i<r} p_i^{\\,v_{p_i}(n)}$; the exponents are determined by $n$, and $v_q(n) = 0$ for every prime $q$ outside the list"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-fundamental-theorem-of-arithmetic, lem-p-adic-valuation-additive, lem-p-adic-valuation-basic, def-p-adic-valuation, def-prime, lem-every-integer-above-one-has-a-prime-divisor, def-semigroup-and-monoid, lem-units-of-z, def-monoid-finite-product, def-group-power, lem-group-power-laws, def-injection-surjection-bijection, thm-induction-principle, def-divides-in-z, lem-divisibility-basic, lem-nat-order-is-membership, lem-nat-discrete, def-nat-order, def-nat-addition, lem-nat-add-commutative, def-integers, def-int-operations, def-int-order, thm-int-comm-ring, thm-int-ordered-ring, def-natural-numbers, lem-nat-embeds-int]
justified_by: []
aliases: [thm-canonical-factorisation]
landmark: true
short: "$n = \\prod p_i^{v_{p_i}(n)}$"
proof_strategy: induction
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Fundamental theorem of arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic"
    - title: "P-adic valuation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/P-adic_valuation"
    - title: "Neil Donaldson, Math 180A notes: Unique factorisation"
      url: "https://www.math.uci.edu/~ndonalds/math180a/2unique.pdf"
pipeline_run: null
---

## Statement

Powers are the natural powers of [[def-group-power]] and finite products those of
[[def-monoid-finite-product]], both taken in the commutative monoid
$(\mathbb{Z},\cdot,1)$ of [[lem-units-of-z]]. Call $p : r \to \mathbb{Z}$ an
**injective list of primes** when every $p_i$ is prime ([[def-prime]]) and
$p_i = p_j$ forces $i = j$ ([[def-injection-surjection-bijection]]).

Let $n \in \mathbb{Z}$ with $n \ge 1$ and let $p : r \to \mathbb{Z}$ be an
injective list of primes such that every prime divisor of $n$ equals $p_i$ for
some $i < r$. Then, with $v_q$ as in [[def-p-adic-valuation]]:

1. $\displaystyle n \;=\; \prod_{i<r} p_i^{\,v_{p_i}(n)}$;
2. $v_q(n) = 0$ for every prime $q$ that is not among $p_0,\dots,p_{r-1}$;
3. the exponents are determined by $n$: if $e : r \to \mathbb{N}$ and
   $n = \prod_{i<r} p_i^{\,e_i}$, then $e_j = v_{p_j}(n)$ for every $j < r$.

Clause 3 needs only injectivity of the list, not the covering hypothesis.

## Facts & Assumptions

**Given:** The commutative monoid $(\mathbb{Z},\cdot,1)$ ([[lem-units-of-z]], [[def-semigroup-and-monoid]]); and the property $Q(r)$: "for every $n \ge 1$ and every injective list $p : r \to \mathbb{Z}$ of primes containing every prime divisor of $n$, one has $n = \prod_{i<r} p_i^{\,v_{p_i}(n)}$".

[L1] $\prod_{i<0} g_i = e$ and $\prod_{i<\sigma(t)} g_i = \bigl(\prod_{i<t} g_i\bigr) g_t$; the value depends only on the entries named ([[def-monoid-finite-product]]).

[L2] $g^{0} = e$ and $g^{\sigma(k)} = g^{k} g$; and $g^{m+n} = g^{m} g^{n}$ for natural exponents in a monoid ([[def-group-power]], [[lem-group-power-laws]]).

[L3] For a prime $p$ and nonzero $a$: $p^{k} \ge 1$ for every $k$, so $p^{k} > 0$ and $p^{k} \ne 0$; $a = p^{v_p(a)} a'$ with $a' \ne 0$ and $p \nmid a'$; $p^{k} \mid a$ exactly for $k \le v_p(a)$; $v_p(a) \ge 1$ exactly when $p \mid a$; $v_p(1) = 0$; and $v_p(p) = 1$ ([[lem-p-adic-valuation-basic]], [[def-p-adic-valuation]]).

[L4] For a prime $p$ and nonzero $a, b$: $ab \ne 0$ and $v_p(ab) = v_p(a) + v_p(b)$ ([[lem-p-adic-valuation-additive]]).

[L5] Every integer $> 1$ has a prime divisor ([[lem-every-integer-above-one-has-a-prime-divisor]]); every prime $u$ satisfies $u > 1$, and every positive divisor of a prime $w$ is $1$ or $w$ ([[def-prime]]).

[L6] Divisibility is reflexive and transitive; $d \mid u$ means $u = dc$ for some $c$ ([[lem-divisibility-basic]], [[def-divides-in-z]]).

[L7] Induction on $\mathbb{N}$ ([[thm-induction-principle]]).

[L8] On $\mathbb{N}$: $m \le n$ means $m + c = n$ for some $c$ ([[def-nat-order]]); $\sigma(k) = k+1$ and addition is commutative ([[def-nat-addition]], [[lem-nat-add-commutative]], [[def-natural-numbers]]); $t < \sigma(t)$ and $i < \sigma(t)$ exactly when $i \le t$ ([[lem-nat-order-is-membership]]); $m < n$ exactly when $\sigma(m) \le n$ ([[lem-nat-discrete]]).

[L9] $\mathbb{Z}$ is a commutative ring; its order is total, antisymmetric and transitive, is compatible with addition, and positives are closed under multiplication; $\iota : \mathbb{N} \to \mathbb{Z}$ is injective and order preserving with image the nonnegative integers, $\iota(0) = 0$, $\iota(1) = 1$ ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]], [[thm-int-ordered-ring]], [[def-int-order]], [[lem-nat-embeds-int]]).

## Proof

**Proof technique:** induction.

1.1 Distinct primes do not divide one another: if $q$ and $w$ are primes with $q \mid w$, then $q$ is a positive divisor of $w$ (as $q > 1 > 0$) other than $1$, so $q = w$. Consequently $v_q(w) = 0$ whenever $q \ne w$ are primes. [L3, L5, L9]

1.2 $Q(0)$ holds: an empty list contains no prime, so $n$ has no prime divisor at all; if $n > 1$ it would have one, so $n = 1$, and $\prod_{i<0} p_i^{\,v_{p_i}(n)} = 1 = n$. [base, L1, L5, L9]

1.3 Let $t \in \mathbb{N}$ and assume $Q(t)$. [ih]

1.4 Let $n \ge 1$ and let $p : \sigma(t) \to \mathbb{Z}$ be an injective list of primes containing every prime divisor of $n$. Write $\pi := p_t$, $v := v_{\pi}(n)$, and fix $n'$ with $n = \pi^{v} n'$, $n' \ne 0$ and $\pi \nmid n'$. [L3, choose]

2.1 For a prime $w$ and $k \in \mathbb{N}$: $v_w(w^{k}) = k$, and $v_q(w^{k}) = 0$ for every prime $q \ne w$. Both sets of $k$ for which these hold contain $0$, since $w^{0} = 1$ and $v_u(1) = 0$ for every prime $u$; and if they hold at $k$ then, $w^{k}$ and $w$ being nonzero, additivity gives $v_w(w^{\sigma(k)}) = v_w(w^{k} w) = v_w(w^{k}) + v_w(w) = k + 1 = \sigma(k)$ and $v_q(w^{\sigma(k)}) = v_q(w^{k}) + v_q(w) = 0 + 0 = 0$. Induction finishes both. [step 1.1, L2, L3, L4, L7, L8]

2.2 $n' \ge 1$: $\pi^{v} \ge 1 > 0$ and $n > 0$, so $n' \le 0$ would make $\pi^{v} n' \le 0 < n$; hence $n' > 0$, and a positive integer is $\ge 1$ because $n' = \iota(j)$ with $j \ne 0$, so $1 = \sigma(0) \le j$. [step 1.4, L3, L8, L9]

3.1 Clause 3. Let $p : r \to \mathbb{Z}$ be an injective list of primes, $e : r \to \mathbb{N}$, and $M := \prod_{i<r} p_i^{\,e_i}$; we claim $M \ge 1$, that $v_{p_j}(M) = e_j$ for every $j < r$, and that $v_q(M) = 0$ for every prime $q$ off the list. Let $T$ be the set of $r \in \mathbb{N}$ for which this holds for all such $p$ and $e$. Then $0 \in T$: the empty product is $1$, which is $\ge 1$, has $v_q(1) = 0$ for every prime $q$, and imposes no condition on indices. Suppose $r \in T$ and let $p : \sigma(r) \to \mathbb{Z}$ be injective with primes and $e : \sigma(r) \to \mathbb{N}$. Writing $M' := \prod_{i<r} p_i^{\,e_i}$ we have $M = M' \cdot p_r^{\,e_r}$, with $M' \ge 1 > 0$ and $p_r^{\,e_r} \ge 1 > 0$, so $M \ge 1 > 0$ and both factors are nonzero; additivity then gives $v_u(M) = v_u(M') + v_u(p_r^{\,e_r})$ for every prime $u$. Taking $u = p_j$ with $j < r$ gives $e_j + 0 = e_j$, since $p_j \ne p_r$ by injectivity; taking $u = p_r$ gives $0 + e_r = e_r$, since $p_r$ is off the list $p_0,\dots,p_{r-1}$; and taking a prime $u$ off the whole list gives $0 + 0 = 0$. So $\sigma(r) \in T$, and $T = \mathbb{N}$ by induction. [step 2.1, L1, L3, L4, L7, L8, L9]

3.2 The restriction $p \restriction t$ is an injective list of primes containing every prime divisor of $n'$. Indeed if $q$ is prime with $q \mid n'$ then $q \mid n$, since $n = \pi^{v} n'$; so $q = p_i$ for some $i < \sigma(t)$; and $q \ne \pi = p_t$, because $\pi \nmid n'$; hence $i \ne t$, and $i < \sigma(t)$ gives $i \le t$, so $i < t$. [step 1.4, step 2.2, L5, L6, L8]

3.3 For $i < t$ we have $v_{p_i}(n) = v_{p_i}(\pi^{v}) + v_{p_i}(n') = 0 + v_{p_i}(n') = v_{p_i}(n')$, using additivity on the nonzero factors $\pi^{v}$ and $n'$, and step 2.1 with $p_i \ne \pi$, which holds by injectivity since $i < t$. [step 2.1, step 1.4, step 2.2, L3, L4, L8]

4.1 By step 1.3 applied to $n'$ and $p \restriction t$: $n' = \prod_{i<t} p_i^{\,v_{p_i}(n')}$. [step 1.3, step 2.2, step 3.2]

5.1 Therefore $\prod_{i<\sigma(t)} p_i^{\,v_{p_i}(n)} = \bigl(\prod_{i<t} p_i^{\,v_{p_i}(n)}\bigr) \cdot \pi^{\,v_{\pi}(n)} = \bigl(\prod_{i<t} p_i^{\,v_{p_i}(n')}\bigr) \cdot \pi^{v} = n' \pi^{v} = n$, so $Q(\sigma(t))$ holds. [step 1.4, step 4.1, step 3.3, L1, L9]

6.1 With step 1.2 as base, induction gives $Q(r)$ for every $r \in \mathbb{N}$, which is clause 1. Clause 2 follows because a prime $q$ off the list does not divide $n$ — otherwise it would be a prime divisor of $n$ and hence on the list — so $v_q(n) = 0$; and clause 3 is step 3.1. [step 3.1, step 1.2, step 5.1, L3, L7, discharge-induction] ∎

## Remarks

- **This is [[thm-fundamental-theorem-of-arithmetic]] read by exponents rather than by lists**, not a further theorem. A list of primes with repetitions becomes an injective list with multiplicities, and the multiplicity of $p_i$ is exactly $v_{p_i}(n)$; uniqueness up to a permutation becomes clause 3, that the exponent vector is determined.

- **There is deliberately no product over all primes.** The familiar notation $\prod_p p^{v_p(n)}$ abbreviates a product with finitely many factors different from $1$, and an indexed product with finite support is not available at this point in the library — [[def-monoid-finite-product]] multiplies a finite list. The honest form quantifies over a finite injective list covering the prime divisors of $n$ and adds clause 2, which says every prime off the list contributes exponent $0$. Nothing is lost: any two such lists agree on the exponents by clause 3.

- **Why injectivity is a hypothesis.** Without it clause 3 fails outright: with $r = 2$, $p_0 = p_1 = 2$ and $(e_0,e_1) = (1,1)$ or $(2,0)$, both products are $4$, so the exponent vector is not determined. Injectivity is what makes $v_{p_j}$ read off one multiplicity rather than a sum of several.

```

## DEPENDENCY: prop-legendre-symbol-well-defined

```markdown
---
id: prop-legendre-symbol-well-defined
kind: proposition
title: "The Legendre symbol is well defined on residue classes"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-legendre-symbol, prop-quadratic-residue-is-representative-independent, def-congruence-modulo-an-integer]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "H. Hackman, Elementary Number Theory, Chapter D, Section D.I"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 9, Section 1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Statement

For every odd prime $p$, the Legendre symbol belongs to $\{-1,0,1\}$, depends only on the numerator modulo $p$, and satisfies

$$\left(\frac ap\right)=0\quad\Longleftrightarrow\quad p\mid a.$$

## Facts & Assumptions

**Given:** An odd prime $p$ and integers $a,b$ with $a\equiv b\pmod p$.

[L1] The Legendre symbol is $0$ on a numerator divisible by $p$, $1$ on a quadratic residue modulo $p$, and $-1$ on a quadratic nonresidue ([[def-legendre-symbol]]).

[L2] The congruence $a\equiv b\pmod p$ means that $p$ divides $a-b$ ([[def-congruence-modulo-an-integer]]).

[L3] Quadratic residuosity of a unit integer depends only on its residue class ([[prop-quadratic-residue-is-representative-independent]]).

## Proof

**Proof technique:** direct.

1.1 By [L2], $p\mid(a-b)$, so $p\mid a$ exactly when $p\mid b$. Thus congruent numerators enter the zero branch of [L1] simultaneously. [L1, L2, given]

2.1 If $p\nmid a$, then also $p\nmid b$ by step 1.1, and [L3] says that $a$ and $b$ are simultaneously quadratic residues or simultaneously nonresidues. Hence [L1] assigns them the same sign. [L1, L3, step 1.1]

3.1 The three disjoint branches in [L1] give only the values $-1,0,1$; step 1.1 proves that divisibility gives value zero, and the two unit branches give nonzero values. Therefore the symbol is representative-independent and is zero exactly when $p$ divides its numerator. [L1, step 1.1, step 2.1] ∎

```

## DEPENDENCY: lem-every-integer-above-one-has-a-prime-divisor

```markdown
---
id: lem-every-integer-above-one-has-a-prime-divisor
kind: lemma
title: "Every integer $n > 1$ has a prime divisor; indeed the least divisor of $n$ that exceeds $1$ is prime"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-prime, def-divides-in-z, lem-divisibility-basic, lem-divisor-bound, lem-int-bounded-above-has-greatest, def-int-abs, lem-int-abs-properties, def-int-order, thm-int-ordered-ring, def-natural-numbers, def-nat-order, lem-nat-embeds-int, lem-nat-discrete]
justified_by: []
aliases: []
landmark: false
short: "$n > 1$ has a prime divisor"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Fundamental theorem of arithmetic (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic"
    - title: "Janssen and Lindsey, Rings with Inquiry: Primes and Factorization"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Rings_with_Inquiry_%28Janssen_and_Lindsey%29/01%3A_The_Integers/1.03%3A_Primes_and_Factorization"
pipeline_run: null
---

## Statement

Let $n \in \mathbb{Z}$ with $n > 1$, and put

$$S \;:=\; \{\, d \in \mathbb{Z} \;:\; d \mid n \ \text{ and } \ d > 1 \,\}$$

([[def-divides-in-z]]). Then $S$ is nonempty and has a least element $q$, and
$q$ is prime ([[def-prime]]). In particular every integer greater than $1$ has a
prime divisor.

## Facts & Assumptions

**Given:** An integer $n$ with $n > 1$, and the set $S$ above.

[L2] Divisibility is reflexive and transitive ([[lem-divisibility-basic]]).

[L3] A nonempty set of integers with a lower bound has a unique least element ([[lem-int-bounded-above-has-greatest]]).

[L4] If $d \mid u$ and $u \ne 0$ then $d \ne 0$ and $|d| \le |u|$ ([[lem-divisor-bound]]).

[L5] $p$ is prime exactly when $p > 1$ and every positive divisor of $p$ is $1$ or $p$ ([[def-prime]]).

[L6] The order on $\mathbb{Z}$ is total, antisymmetric and transitive and is compatible with addition; $x < y$ means $x \le y$ together with $x \ne y$ ([[thm-int-ordered-ring]], [[def-int-order]]).

[L8] The embedding $\iota : \mathbb{N} \to \mathbb{Z}$ is injective, preserves addition and order, and has as image exactly the nonnegative integers, with $\iota(0) = 0$ and $\iota(1) = 1$ ([[lem-nat-embeds-int]]).

[L9] On $\mathbb{N}$: $0 \le k$ for every $k$, since $0 + k = k$ ([[def-nat-order]]); $m < k$ exactly when $\sigma(m) \le k$ ([[lem-nat-discrete]]); and $1 = \sigma(0)$ ([[def-natural-numbers]]).

[L10] $|x| = x$ when $x \ge 0$ and $|x| = -x$ when $x < 0$; $|x| \ge 0$ ([[def-int-abs]], [[lem-int-abs-properties]]).

## Proof

**Proof technique:** direct.

1.1 $0 < 1$ in $\mathbb{Z}$: $1 = \iota(1)$ lies in the image of $\iota$, so $1 \ge 0$, and $1 \ne 0$ because $\iota$ is injective and $\iota(0) = 0$. [L8]

1.2 Discreteness: if $x \in \mathbb{Z}$ and $0 < x$ then $1 \le x$. Indeed $x \ge 0$, so $x = \iota(k)$ for some $k \in \mathbb{N}$; $k \ne 0$ since $\iota(0) = 0 \ne x$; hence $0 < k$ in $\mathbb{N}$, so $1 = \sigma(0) \le k$, and applying the order-preserving $\iota$ gives $1 = \iota(1) \le \iota(k) = x$. [L8, L9]

1.3 $n \in S$, since $n \mid n$ and $n > 1$; so $S$ is nonempty. [L2]

1.4 $1$ is a lower bound for $S$: every $d \in S$ satisfies $d > 1$, hence $1 \le d$. [L6]

2.1 By [L3] the set $S$ has a unique least element $q$: that is, $q \mid n$, $q > 1$, and $q \le d$ for every $d \in S$. [step 1.3, step 1.4, L3]

3.1 $n > 1 > 0$ and $q > 1 > 0$, so $n \ne 0$ and $q \ne 0$, and $|q| = q$. [step 1.1, step 2.1, L6, L10]

3.2 Let $e$ be a positive divisor of $q$ with $e \ne 1$. Then $1 \le e$ by step 1.2, and $e \ne 1$, so $e > 1$. [step 1.2, step 2.1, L6]

4.1 Also $e \mid q$ and $q \mid n$, so $e \mid n$ by transitivity; with $e > 1$ this gives $e \in S$, hence $q \le e$. [step 2.1, step 3.2, L2]

5.1 On the other hand $e \mid q$ with $q \ne 0$ gives $|e| \le |q| = q$, and $|e| = e$ because $e > 0$; so $e \le q$. With step 4.1 and antisymmetry, $e = q$. [step 3.1, step 3.2, step 4.1, L4, L6, L10]

6.1 So every positive divisor of $q$ is $1$ or $q$, and $q > 1$: $q$ is prime. Since $q \mid n$, the integer $n$ has a prime divisor. [step 2.1, step 3.2, step 5.1, L5] ∎

## Remarks

- **Well-ordering is used through the integer bridge, not directly.** [[thm-well-ordering-principle]] gives a least element of a nonempty subset of $\mathbb{N}$, whereas $S$ is a set of *integers*. [[lem-int-bounded-above-has-greatest]] is the published lemma that crosses that gap, and its Statement covers the lower-bound case explicitly, so it is what this proof cites.

- **The bound $q$ is genuinely the least divisor above $1$, not merely some prime divisor.** That is what makes the argument work: minimality is the only reason $q$ has no proper divisor above $1$, since any such divisor would divide $n$ as well and be smaller.

- **The hypothesis $n > 1$ cannot be dropped.** At $n = 1$ the set $S$ is empty, since $d \mid 1$ forces $d = 1$ or $d = -1$ ([[lem-units-of-z]]) and neither exceeds $1$; so $1$ has no prime divisor, which is exactly why the empty product is the right factorisation of $1$ in [[thm-prime-factorisation-exists]]. At $n = 0$ every integer divides $0$, so $S$ is the whole set of integers greater than $1$; it does have a least element, namely $2$, but a statement about the divisors of $0$ is of no use below and the lemma is not claimed there.

```

## DEPENDENCY: thm-jacobi-symbol-multiplicativity

```markdown
---
id: thm-jacobi-symbol-multiplicativity
kind: theorem
title: "The Jacobi symbol is multiplicative in numerator and denominator"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-jacobi-symbol, thm-legendre-symbol-multiplicativity,
       thm-canonical-prime-factorisation, thm-fundamental-theorem-of-arithmetic,
       lem-p-adic-valuation-additive]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, §D.II"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 10, §1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture10.pdf"
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.2"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

For integers $a,b$ and an odd positive integer $n$,

$$\left(\frac{ab}{n}\right)=\left(\frac an\right)\left(\frac bn\right).$$

For an integer $a$ and odd positive integers $m,n$,

$$\left(\frac a{mn}\right)=\left(\frac am\right)\left(\frac an\right).$$

No coprimality hypothesis is imposed on either pair of arguments.

## Facts & Assumptions

**Given:** Integers $a,b$ and odd positive integers $m,n$.

[L1] For odd $n\ge1$ with canonical prime factorisation $n=\prod_{i<r}p_i^{e_i}$, the Jacobi symbol is $\left(\frac an\right)=\prod_{i<r}\left(\frac a{p_i}\right)^{e_i}$ ([[def-jacobi-symbol]]).

[L2] For every odd prime $p$ and integers $a,b$, $\left(\frac{ab}{p}\right)=\left(\frac ap\right)\left(\frac bp\right)$ ([[thm-legendre-symbol-multiplicativity]]).

[L3] Canonical prime-factor exponents are determined by the positive integer being factored ([[thm-canonical-prime-factorisation]]).

[L4] For a prime $p$ and nonzero integers $u,v$, $v_p(uv)=v_p(u)+v_p(v)$ ([[lem-p-adic-valuation-additive]]).

[L5] Every positive integer has a finite prime factorisation, unique up to the order of its prime factors ([[thm-fundamental-theorem-of-arithmetic]]).

## Proof

**Proof technique:** direct.

1.1 Apply [L2] to every prime factor in [L1] and regroup the finite product: $\left(\frac{ab}{n}\right)=\prod_i\left(\frac a{p_i}\right)^{e_i}\prod_i\left(\frac b{p_i}\right)^{e_i}=\left(\frac an\right)\left(\frac bn\right)$. This remains valid when a Legendre factor is zero. [L1, L2, algebra]

2.1 By [L5], choose finite prime factorisations of $m$ and $n$; concatenating their factor lists gives a prime factorisation of $mn$. Grouping equal primes and using [L3] and [L4], the exponent of each prime in $mn$ is the sum of its exponents in $m$ and $n$. Substituting those sums in [L1] and regrouping gives $\left(\frac a{mn}\right)=\left(\frac am\right)\left(\frac an\right)$. If either denominator is $1$, its factor list is empty and its contribution is $1$. [L1, L3, L4, L5, algebra] ∎

```

## DEPENDENCY: def-unit-group-modulo-n-and-euler-totient

```markdown
---
id: def-unit-group-modulo-n-and-euler-totient
kind: definition
title: "The unit group $(\\mathbb{Z}/n)^\\times$ and Euler's totient $\\varphi(n)=\\lvert(\\mathbb{Z}/n)^\\times\\rvert$ for $n\\ge1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-integers-modulo-n-basic-algebra, def-invertible-element, lem-monoid-units-form-a-group, thm-standard-representatives-modulo-n, def-finite-cardinality, thm-subset-of-a-finite-set, def-field]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, The Chinese Remainder Theorem"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf"
    - title: "Mathematics LibreTexts, Euler's phi Function"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function"
pipeline_run: null
---

## Definition

Let $n\ge1$ be an integer. Multiplication makes $\mathbb Z/n$ a commutative
monoid with identity $[1]_n$ by [[thm-integers-modulo-n-basic-algebra]]. A class
$u\in\mathbb Z/n$ is a **unit** when it is invertible in that monoid
([[def-invertible-element]]). The set of all units is

$$(\mathbb Z/n)^\times:=\{\,u\in\mathbb Z/n:\text{some }v\in\mathbb Z/n\text{ satisfies }uv=[1]_n\,\}.$$

By [[lem-monoid-units-form-a-group]], multiplication restricts to a group
operation on $(\mathbb Z/n)^\times$, called the **unit group modulo $n$**.

The quotient $\mathbb Z/n$ is finite with cardinality $n$ by
[[thm-standard-representatives-modulo-n]], and its unit set is a finite subset by
[[thm-subset-of-a-finite-set]]. Euler's **totient function** is therefore defined
for every positive integer $n$ by

$$\varphi(n):=\big|(\mathbb Z/n)^\times\big|\in\mathbb N$$

([[def-finite-cardinality]]). For $n=1$, the quotient has one element, which is
its multiplicative identity and hence a unit, so $\varphi(1)=1$ follows from the
definition.

## Remarks

- The domain of $\varphi$ here is the positive integers. No value $\varphi(0)$
  is defined.
- The one-element multiplicative monoid is a group, even though its identity is
  also its additive zero. It is not a field because a field requires distinct
  elements $0$ and $1$ ([[def-field]]).

```

## DEPENDENCY: thm-unit-criterion-modulo-n

```markdown
---
id: thm-unit-criterion-modulo-n
kind: theorem
title: "For $n\\ge1$, $[a]_n$ is a unit if and only if $\\gcd(a,n)=1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-unit-group-modulo-n-and-euler-totient, thm-bezout-identity, def-common-divisor-and-gcd, def-coprime, lem-coprime-criterion, lem-divisibility-basic]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, Modular Arithmetic"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/modarithshort.pdf"
    - title: "Mathematics LibreTexts, Euler's phi Function"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function"
    - title: "UW Oshkosh, Number Theory Notes 3"
      url: "https://www.uwosh.edu/faculty_staff/pennistd/ntn3.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$ and $a\in\mathbb Z$. Then $[a]_n$ is a unit of $\mathbb Z/n$
([[def-unit-group-modulo-n-and-euler-totient]]) if and only if

$$\gcd(a,n)=1,$$

that is, if and only if $a$ and $n$ are coprime ([[def-coprime]]). Consequently
the condition $\gcd(a,n)=1$ depends only on the class $[a]_n$.

## Facts & Assumptions

**Given:** A positive integer $n$ and an integer $a$.

[L1] Integers $u,v$ are coprime exactly when $ux+vy=1$ for some integers $x,y$ ([[lem-coprime-criterion]], [[thm-bezout-identity]], [[def-common-divisor-and-gcd]], [[def-coprime]]).

[F1] The class $[a]_n$ is a unit exactly when some $[b]_n$ satisfies $[a]_n[b]_n=[1]_n$ ([[def-unit-group-modulo-n-and-euler-totient]]).

[L2] If an integer divides two integers, it divides every integer linear combination of them ([[lem-divisibility-basic]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $\gcd(a,n)=1$. By [L1], choose integers $x,y$ with $ax+ny=1$. Reducing this equality modulo $n$ gives $[a]_n[x]_n=[1]_n$, so $[a]_n$ is a unit. [L1, F1, choose]

1.2 Conversely, suppose $[a]_n$ is a unit. Choose $b$ with $[a]_n[b]_n=[1]_n$. Then $ab\equiv1\pmod n$, so $ab-1=nq$ for some integer $q$, and $ab+n(-q)=1$. By [L1], $\gcd(a,n)=1$. [F1, L1, choose]

1.3 If $a\equiv a'\pmod n$ and $\gcd(a,n)=1$, write $a'=a+nk$. A Bézout identity $ax+ny=1$ then becomes $a'x+n(y-kx)=1$, so $\gcd(a',n)=1$ by [L1]; symmetry gives the converse. Thus the criterion is representative independent. [L1, L2, algebra]

2.1 Steps 1.1 and 1.2 prove the equivalence, and step 1.3 proves its final representative-independence assertion. [step 1.1, step 1.2, step 1.3] ∎

```

## DEPENDENCY: def-group-homomorphism

```markdown
---
id: def-group-homomorphism
kind: definition
title: "Monoid homomorphism and group homomorphism"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-semigroup-and-monoid, def-group, def-identity-element, def-binary-operation]
justified_by: []
aliases: [def-monoid-homomorphism, def-homomorphism]
landmark: false
short: "monoid / group homomorphism"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Group homomorphism (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Group_homomorphism"
    - title: "Monoid homomorphism (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Monoid#Monoid_homomorphisms"
pipeline_run: null
---

## Definition

Let $(M,\cdot,e)$ and $(M',\cdot',e')$ be monoids ([[def-semigroup-and-monoid]]).
A **monoid homomorphism** from $M$ to $M'$ is a function $f : M \to M'$ such that

- **(H1)** $f(x \cdot y) = f(x) \cdot' f(y)$ for all $x, y \in M$;
- **(H2)** $f(e) = e'$.

Let $G$ and $G'$ be groups ([[def-group]]). A **group homomorphism** from $G$ to
$G'$ is a function $f : G \to G'$ satisfying (H1) alone:

$$f(xy) \;=\; f(x)\, f(y) \qquad \text{for all } x, y \in G .$$

Condition (H2) is not imposed for groups because it follows: a group
homomorphism automatically satisfies $f(e) = e'$ and $f(x^{-1}) = f(x)^{-1}$
([[lem-group-homomorphism-basic-properties]]). For monoids it does **not**
follow and must be assumed, which is why the two definitions differ.

A homomorphism from a structure to itself is an **endomorphism**. The identity
map of $M$ is a monoid homomorphism, and a composite of monoid homomorphisms is
one, since $(g \circ f)(xy) = g(f(x)f(y)) = g(f(x))\,g(f(y))$ and
$(g \circ f)(e) = g(e') = e''$; the same computation, without the second clause,
shows a composite of group homomorphisms is a group homomorphism.

## Remarks

- **(H1) is a statement about two different operations.** On the left the product
  is formed in $M$, on the right in $M'$; the notation suppresses that and the
  reader must supply it. The definition says exactly that $f$ turns products into
  products, and nothing else.

- **The asymmetry between the two definitions is real, not stylistic.** The map
  $\mathbb{Z} \to \mathbb{Z}$ sending every integer to $0$ satisfies (H1) for the
  multiplicative monoid of $\mathbb{Z}$, since $0 = 0 \cdot 0$, and it sends the
  identity $1$ to $0 \ne 1$, so it is not a monoid homomorphism. In a group the
  same phenomenon is impossible, and cancellation is the reason
  ([[lem-group-homomorphism-basic-properties]]).

- Only the definition is given here. Kernels, images, isomorphisms and the
  isomorphism theorems belong to a later page; nothing on this page or its
  companion uses them.

```

## DEPENDENCY: thm-first-supplement-to-quadratic-reciprocity

```markdown
---
id: thm-first-supplement-to-quadratic-reciprocity
kind: theorem
title: "First supplement: $(-1/p)=(-1)^{(p-1)/2}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-eulers-criterion-for-legendre-symbol, def-congruence-modulo-an-integer, thm-division-algorithm-in-z, def-legendre-symbol]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "H. Hackman, Elementary Number Theory, Chapter D, Section D.I"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "W. Stein, Elementary Number Theory, Theorem 4.1.7"
      url: "https://wstein.org/ent/ent.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 9, Theorem 1.6"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Statement

For every odd prime $p$,

$$\left(\frac{-1}{p}\right)=(-1)^{(p-1)/2}.$$

Equivalently, $(-1/p)=1$ if and only if $p\equiv1\pmod4$, while $(-1/p)=-1$ if and only if $p\equiv3\pmod4$.

## Facts & Assumptions

**Given:** An odd prime $p$.

[L1] Euler's criterion gives $(a/p)\equiv a^{(p-1)/2}\pmod p$ for every integer $a$ ([[thm-eulers-criterion-for-legendre-symbol]]).

[L2] Division by a positive integer has a unique quotient and remainder in the standard range ([[thm-division-algorithm-in-z]]).

[L3] The congruence $a\equiv b\pmod n$ means that $n$ divides $a-b$ ([[def-congruence-modulo-an-integer]]).

[L4] For an odd prime $p$, $\left(\frac ap\right)=1$ when $p\nmid a$ and $a$ is a quadratic residue modulo $p$, and $\left(\frac ap\right)=-1$ when $p\nmid a$ and $a$ is a quadratic nonresidue modulo $p$ ([[def-legendre-symbol]]).

## Proof

**Proof technique:** direct.

1.1 Substitute $a=-1$ in [L1]. An odd prime never divides $-1$, so [L4] gives $(-1/p)\in\{1,-1\}$, and $(-1)^{(p-1)/2}$ is likewise $1$ or $-1$; two such integers differ by at most $2<p$, so their congruence modulo the odd prime $p$ is equality: $(-1/p)=(-1)^{(p-1)/2}$. [L1, L4, given, algebra]

1.2 By [L2], write $p=4q+r$ with $0\le r<4$. Since $p$ is odd, $r$ is $1$ or $3$. If $r=1$, then $(p-1)/2=2q$ is even; if $r=3$, then $(p-1)/2=2q+1$ is odd. [L2, algebra]

2.1 By [L3], the two remainder cases in step 1.2 are exactly $p\equiv1\pmod4$ and $p\equiv3\pmod4$. Combining their parities with step 1.1 proves both biconditionals. [L3, step 1.1, step 1.2] ∎

```

## DEPENDENCY: thm-second-supplement-to-quadratic-reciprocity

```markdown
---
id: thm-second-supplement-to-quadratic-reciprocity
kind: theorem
title: "Second supplement: $(2/p)=(-1)^{(p^2-1)/8}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-gauss-quadratic-residue-lemma, def-congruence-modulo-an-integer, thm-division-algorithm-in-z]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "H. Hackman, Elementary Number Theory, Chapter D, Sections D.I and D.IV"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "W. Stein, Elementary Number Theory, Theorem 4.1.7"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

For every odd prime $p$,

$$\left(\frac2p\right)=(-1)^{(p^2-1)/8}.$$

Equivalently, $(2/p)=1$ if and only if $p\equiv1$ or $7\pmod8$, while $(2/p)=-1$ if and only if $p\equiv3$ or $5\pmod8$.

## Facts & Assumptions

**Given:** An odd prime $p$.

[L1] If $N(a,p)$ counts the least positive residues of $aj$ modulo $p$, for $1\le j\le(p-1)/2$, that exceed $p/2$, then $(a/p)=(-1)^{N(a,p)}$ ([[thm-gauss-quadratic-residue-lemma]]).

[L2] Division by a positive integer has a unique quotient and remainder in the standard range ([[thm-division-algorithm-in-z]]).

[L3] The congruence $a\equiv b\pmod n$ means that $n$ divides $a-b$ ([[def-congruence-modulo-an-integer]]).

## Proof

**Proof technique:** direct.

1.1 Put $m=(p-1)/2$. For $1\le j\le m$, the least positive residue of $2j$ is $2j$ itself because $2j\le p-1$. It exceeds $p/2$ exactly when $j>p/4$, so [L1] counts precisely the integers with $p/4<j<p/2$. [L1, given, algebra]

2.1 By [L2], write $p=8q+r$ with $0\le r<8$. Since $p$ is odd, $r\in\{1,3,5,7\}$. In these cases the crossing indices of step 1.1 are respectively $2q+1,\ldots,4q$; $2q+1,\ldots,4q+1$; $2q+2,\ldots,4q+2$; and $2q+2,\ldots,4q+3$. Their counts are $2q$, $2q+1$, $2q+1$, and $2q+2$. [L2, L3, step 1.1, algebra]

3.1 For $r=1,3,5,7$, direct substitution gives $(p^2-1)/8=8q^2+2q$, $8q^2+6q+1$, $8q^2+10q+3$, and $8q^2+14q+6$, respectively. These have parity even, odd, odd, and even, exactly matching the four crossing counts in step 2.1. [L3, step 2.1, algebra]

4.1 Fact [L1] and step 3.1 give $(2/p)=(-1)^{(p^2-1)/8}$. The exhaustive remainder cases yield value $1$ exactly for residues $1,7$ modulo $8$, and value $-1$ exactly for residues $3,5$. [L1, step 1.1, step 3.1] ∎

```

## DEPENDENCY: thm-jacobi-symbol-reciprocity

```markdown
---
id: thm-jacobi-symbol-reciprocity
kind: theorem
title: "Quadratic reciprocity for coprime odd Jacobi denominators"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-quadratic-reciprocity, def-jacobi-symbol,
       thm-jacobi-symbol-multiplicativity, thm-canonical-prime-factorisation,
       thm-fundamental-theorem-of-arithmetic]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, §D.II"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 10, §1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture10.pdf"
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.2"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

For coprime odd positive integers $m,n$,

$$\left(\frac mn\right)\left(\frac nm\right)=(-1)^{(m-1)(n-1)/4}.$$

The formula includes $m=1$ or $n=1$.

## Facts & Assumptions

**Given:** Coprime odd positive integers $m,n$.

[L1] For distinct odd primes $p,q$, $\left(\frac pq\right)\left(\frac qp\right)=(-1)^{(p-1)(q-1)/4}$ ([[thm-quadratic-reciprocity]]).

[L2] For an odd positive denominator, the Jacobi symbol is the product of the Legendre symbols over its canonical prime factors with multiplicity ([[def-jacobi-symbol]]).

[L3] The Jacobi symbol is multiplicative in both its numerator and its odd positive denominator ([[thm-jacobi-symbol-multiplicativity]]).

[L4] The primes and their exponents in the canonical factorisation of a positive integer are determined by that integer ([[thm-canonical-prime-factorisation]]).

[L5] Every positive integer has a finite prime factorisation, unique up to the order of its prime factors ([[thm-fundamental-theorem-of-arithmetic]]).

## Proof

**Proof technique:** direct.

1.1 By [L5], $m$ and $n$ have finite prime factorisations; grouping equal factors and using [L4], write their canonical forms as $m=\prod_i p_i^{\alpha_i}$ and $n=\prod_j q_j^{\beta_j}$. Expanding both Jacobi symbols by [L2] and [L3] expresses their product as $\prod_{i,j}\left[\left(\frac{p_i}{q_j}\right)\left(\frac{q_j}{p_i}\right)\right]^{\alpha_i\beta_j}$. Coprimality makes every $p_i$ distinct from every $q_j$, so [L1] turns this into $(-1)^E$, where $E=\sum_{i,j}\alpha_i\beta_j(p_i-1)(q_j-1)/4$. [L1, L2, L3, L4, L5, given, algebra]

2.1 For a product of odd integers, repeated use of $(uv-1)/2\equiv(u-1)/2+(v-1)/2\pmod2$ gives $(m-1)/2\equiv\sum_i\alpha_i(p_i-1)/2$ and $(n-1)/2\equiv\sum_j\beta_j(q_j-1)/2$ modulo $2$. Their product is congruent to $E$, so step 1.1 gives the stated sign. If either integer is $1$, the relevant prime list and cross-product are empty and both sides equal $1$. [step 1.1, L2, algebra] ∎

```

## DEPENDENCY: thm-division-algorithm-in-z

```markdown
---
id: thm-division-algorithm-in-z
kind: theorem
title: "Division with remainder in $\\mathbb{Z}$: for $a \\in \\mathbb{Z}$ and $b > 0$ there are unique $q, r \\in \\mathbb{Z}$ with $a = qb + r$ and $0 \\le r < b$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-integers, def-int-operations, def-int-order, thm-int-comm-ring, thm-int-ordered-ring, lem-nat-embeds-int, thm-well-ordering-principle, def-natural-numbers, def-nat-order, lem-nat-nonzero-is-successor, lem-nat-trichotomy, lem-nat-add-commutative]
justified_by: []
aliases: [thm-euclidean-division, thm-division-with-remainder]
landmark: true
short: "$a = qb + r$, $0 \\le r < b$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-27
  audited: 2026-07-27
sources:
  scraped: []
  references:
    - title: "Euclidean division (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclidean_division"
    - title: "T. Tao, Analysis I, 3rd ed., §4.1 (the integers)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $a, b \in \mathbb{Z}$ ([[def-integers]]) with $b > 0$. Then there exist
integers $q$ and $r$ with

$$a \;=\; qb + r, \qquad 0 \le r < b,$$

and the pair $(q,r)$ with these two properties is unique.

We say $b$ **divides** $a$, written $b \mid a$, when $a = qb$ for some
$q \in \mathbb{Z}$; by the above, for $b > 0$ this holds exactly when the
remainder $r$ is $0$.

## Facts & Assumptions

**Given:** Integers $a$ and $b$ with $b > 0$, and the embedding $\iota : \mathbb{N} \to \mathbb{Z}$, $\iota(k) = [(k,0)]$, of [[lem-nat-embeds-int]].

[L1] $\mathbb{Z}$ is a commutative ring: addition and multiplication are associative and commutative, $x + 0 = x$, $x \cdot 1 = x$, multiplication distributes over addition, and every $x$ has an additive inverse $-x$; we write $u - v$ for $u + (-v)$ ([[thm-int-comm-ring]], [[def-int-operations]]).

[L2] The order on $\mathbb{Z}$ is total, antisymmetric and transitive, is compatible with addition ($x \le y$ implies $x + z \le y + z$), and positives are closed under multiplication ($0 < x$ and $0 < y$ imply $0 < xy$) ([[thm-int-ordered-ring]], [[def-int-order]]).

[L3] $\iota$ is injective, preserves addition, multiplication and order, and its image is exactly the set of nonnegative integers; $\iota(0) = 0$ and $\iota(1) = 1$ ([[lem-nat-embeds-int]], [[def-int-operations]]).

[L4] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L5] On $\mathbb{N}$: every $k \ne 0$ is a successor $\sigma(j)$ ([[lem-nat-nonzero-is-successor]]); $\sigma(j) = j + 1 = 1 + j$ ([[def-natural-numbers]], [[lem-nat-add-commutative]]); $m \le n$ means $m + t = n$ for some $t \in \mathbb{N}$ ([[def-nat-order]]); and exactly one of $m < n$, $m = n$, $n < m$ holds ([[lem-nat-trichotomy]]).

## Proof

**Proof technique:** direct.

1.1 Sums and products of nonnegative integers are nonnegative: if $0 \le u$ and $0 \le v$ then $u \le u + v$ by compatibility with addition, so $0 \le u + v$ by transitivity; and if either factor is $0$ then $uv = 0$, while if both are positive then $0 < uv$. [L1, L2]

1.2 Discreteness: if $0 < x$ in $\mathbb{Z}$ then $1 \le x$. Indeed $x$ is nonnegative, so $x = \iota(k)$ for some $k \in \mathbb{N}$, and $k \ne 0$ because $\iota(0) = 0 \ne x$; hence $k = \sigma(j) = 1 + j$ for some $j$, so $1 \le k$ in $\mathbb{N}$, and applying $\iota$, which preserves the order, gives $1 = \iota(1) \le \iota(k) = x$. [L3, L5]

1.3 $\iota$ reflects the order: if $\iota(m) < \iota(n)$ then $m < n$. For otherwise trichotomy on $\mathbb{N}$ gives $n \le m$, whence $\iota(n) \le \iota(m)$ because $\iota$ preserves the order, and this together with $\iota(m) < \iota(n)$ contradicts antisymmetry. [L2, L3, L5]

1.4 Write $a = \iota(a_1) - \iota(a_2)$ with $a_1, a_2 \in \mathbb{N}$, which is possible because $a = [(a_1,a_2)]$ for some naturals and $[(a_1,a_2)] = [(a_1,0)] + [(0,a_2)] = \iota(a_1) - \iota(a_2)$. [L1, L3, given]

1.5 Uniqueness. Suppose $a = q_1 b + r_1 = q_2 b + r_2$ with $0 \le r_i < b$ for $i = 1, 2$, and set $d := q_1 - q_2$. Ring arithmetic gives $d b = r_2 - r_1$. [L1, given]

2.1 From $0 < b$ and step 1.2, $1 \le b$, so $0 \le b - 1$ by compatibility with addition. [step 1.2, L1, L2]

2.2 Put $q_0 := -\iota(a_2)$. Then $a - q_0 b = a + \iota(a_2) b = \bigl(\iota(a_1) - \iota(a_2)\bigr) + \iota(a_2) b = \iota(a_1) + \iota(a_2)(b - 1)$, by ring arithmetic. [step 1.4, L1]

2.3 If $0 < d$ then $1 \le d$ by step 1.2, so $0 \le d - 1$ and hence $0 \le (d-1)b$ by step 1.1, that is $b \le db$; but $r_1 \ge 0$ gives $r_2 - r_1 \le r_2 < b$, so $b \le db = r_2 - r_1 < b$, contradicting antisymmetry. [step 1.1, step 1.2, step 1.5, L1, L2]

2.4 If $d < 0$ then $0 < -d$, and the same computation with the roles of the two pairs interchanged, using $(-d)b = r_1 - r_2$, gives $b \le r_1 - r_2 < b$, again a contradiction. [step 1.1, step 1.2, step 1.5, L1, L2]

3.1 The integer $a - q_0 b$ is nonnegative: $\iota(a_1) \ge 0$ and $\iota(a_2) \ge 0$ because both lie in the image of $\iota$, $b - 1 \ge 0$ by step 2.1, and sums and products of nonnegative integers are nonnegative. [step 1.1, step 2.1, step 2.2, L3]

3.2 Hence $d = 0$ by totality, so $q_1 = q_2$, and then $r_1 = a - q_1 b = a - q_2 b = r_2$. [step 1.5, step 2.3, step 2.4, L1, L2]

4.1 Hence the set $T := \{\, k \in \mathbb{N} : \iota(k) = a - qb \text{ for some } q \in \mathbb{Z} \,\}$ is nonempty, since $a - q_0 b$ is a nonnegative integer and therefore equals $\iota(k)$ for some $k \in \mathbb{N}$. [step 3.1, L3]

5.1 By well-ordering let $r_0$ be the least element of $T$, choose $q \in \mathbb{Z}$ with $\iota(r_0) = a - qb$, and set $r := \iota(r_0)$. Then $a = qb + r$ and $0 \le r$. [step 4.1, L1, L3, L4, choose]

6.1 Suppose $b \le r$. Then $0 \le r - b$ by compatibility with addition, and $r - b = (a - qb) - b = a - (q+1)b$ by ring arithmetic, so $r - b = \iota(k')$ for some $k' \in \mathbb{N}$ with $k' \in T$. Also $-b < 0$, since $0 < b$, so $r - b < r$, that is $\iota(k') < \iota(r_0)$, whence $k' < r_0$ by step 1.3. This contradicts the minimality of $r_0$. [step 1.3, step 5.1, L1, L2, L3, given]

7.1 Therefore $b \le r$ fails, and by totality of the order $r < b$; with step 5.1 this establishes existence of a pair $(q,r)$ with $a = qb + r$ and $0 \le r < b$. [step 5.1, step 6.1, L2]

8.1 Existence is step 7.1 and uniqueness is step 3.2, so for every $a \in \mathbb{Z}$ and every $b > 0$ there is exactly one pair $(q,r)$ of integers with $a = qb + r$ and $0 \le r < b$. [step 7.1, step 3.2] ∎

## Remarks

- **Stated for a positive divisor only.** Nothing here needs an absolute value on $\mathbb{Z}$, and none is available at this point in the reading order. The version for $b \ne 0$, with $0 \le r < |b|$, follows once absolute values are in hand and is not needed by anything on this page.

- **Why it is proved here.** The characterisation of the order of an element, $g^{k} = e$ exactly when $\operatorname{ord}(g)$ divides $k$, and the count $|\langle g \rangle| = \operatorname{ord}(g)$, are both unprovable without division with remainder ([[lem-order-characterisation]]). No earlier page in the library supplies it.

- **This is not a theory of divisibility.** The relation $b \mid a$ is defined here for use on this page and its companion; greatest common divisors, primes and unique factorisation are developed on a later page, and that page must record that its general divisibility in a ring restricts on $\mathbb{Z}$ to the relation defined here, rather than introduce a second notion silently.

- **A published claim this theorem falsified.** A published example on the metric spaces companion page used to record in its Remarks that this library had no divisibility theory at all in which to state or prove Euclid's lemma. That was true when it was written; the present item, which is earlier in the reading order, made it false, and the sentence has since been narrowed to say that the example itself neither establishes nor assumes that lemma. Nothing here depends on that example, and nothing here supplies Euclid's lemma either: what is proved above is division with remainder, and no more.

```

## DEPENDENCY: lem-p-adic-valuation-basic

```markdown
---
id: lem-p-adic-valuation-basic
kind: lemma
title: "For a prime $p$ and a nonzero integer $a$: $p^{v_p(a)} \\mid a$ and $p^{v_p(a)+1} \\nmid a$; $p^{k} \\mid a$ holds exactly for $k \\le v_p(a)$; $v_p(a) \\ge 1$ exactly when $p \\mid a$; $v_p(1) = v_p(-1) = 0$; and $v_p(p) = 1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-p-adic-valuation, def-prime, def-group-power, lem-group-power-laws,
       def-semigroup-and-monoid, lem-units-of-z, def-divides-in-z, lem-divisibility-basic,
       lem-int-cancellation, thm-induction-principle, lem-nat-order-is-membership, lem-nat-discrete,
       thm-nat-linear-order, def-nat-order, def-nat-addition, def-natural-numbers,
       def-integers, def-int-operations, def-int-order, thm-int-comm-ring,
       thm-int-ordered-ring, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: false
short: "basic properties of $v_p$"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "P-adic valuation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/P-adic_valuation"
    - title: "University of Chicago REU notes: p-adic numbers"
      url: "https://www.math.uchicago.edu/~may/VIGRE/VIGRE2011/REUPapers/Herwig.pdf"
pipeline_run: null
---

## Statement

Let $p$ be a prime ([[def-prime]]), let $a \in \mathbb{Z}$ with $a \ne 0$, and
write $v := v_p(a)$ ([[def-p-adic-valuation]]). Powers are the natural powers of
[[def-group-power]] in the commutative monoid $(\mathbb{Z},\cdot,1)$
([[lem-units-of-z]]), and $k + 1$ means $\sigma(k)$. Then:

0. $p^{k} \ge 1$ for every $k \in \mathbb{N}$; in particular $p^{k} > 0$ and
   $p^{k} \ne 0$;
1. $p^{v} \mid a$ and $p^{v+1} \nmid a$;
2. for $k \in \mathbb{N}$: $p^{k} \mid a$ if and only if $k \le v$;
3. $a = p^{v} a'$ for some $a' \in \mathbb{Z}$ with $a' \ne 0$ and $p \nmid a'$;
4. $v \ge 1$ if and only if $p \mid a$;
5. $v_p(1) = v_p(-1) = 0$ and $v_p(p) = 1$.

## Facts & Assumptions

**Given:** A prime $p$, a nonzero integer $a$, and $v := v_p(a)$.

[L1] $v_p(a)$ is the greatest $k \in \mathbb{N}$ with $p^{k} \mid a$; in particular $p^{v} \mid a$, and $p^{k} \mid a$ fails for every $k > v$ ([[def-p-adic-valuation]]).

[L2] $p^{0} = 1$ and $p^{\sigma(k)} = p^{k} \cdot p$ ([[def-group-power]], [[def-semigroup-and-monoid]], [[lem-units-of-z]]).

[L3] Exponent law in a monoid, for natural exponents: $g^{m+n} = g^{m} g^{n}$ ([[lem-group-power-laws]]).

[L4] Divisibility is reflexive and transitive; $d \mid u$ implies $d \mid uc$; and $d \mid u$, $d \mid -u$, $-d \mid u$ are equivalent ([[lem-divisibility-basic]]).

[L5] $d \mid u$ means $u = dc$ for some $c \in \mathbb{Z}$ ([[def-divides-in-z]]).

[L6] $u \mid 1$ exactly when $u = 1$ or $u = -1$ ([[lem-units-of-z]]).

[L7] Every prime satisfies $p > 1$ ([[def-prime]]).

[L8] If $xz = yz$ and $z \ne 0$ then $x = y$; and a product of two nonzero integers is nonzero ([[lem-int-cancellation]]).

[L9] On $\mathbb{N}$: $m \le n$ means $m + c = n$ for some $c$ ([[def-nat-order]]); $\sigma(k) = k + 1$ ([[def-nat-addition]], [[def-natural-numbers]]); $k < \sigma(k)$ and $m < \sigma(n)$ exactly when $m \le n$ ([[lem-nat-order-is-membership]]); $m < n$ exactly when $\sigma(m) \le n$ ([[lem-nat-discrete]]); and $\le$ is a linear order, so it is antisymmetric and total ([[thm-nat-linear-order]]).

[L10] $\mathbb{Z}$ is a commutative ring, its order is total, antisymmetric and transitive and compatible with addition, and $\iota : \mathbb{N} \to \mathbb{Z}$ is injective, order preserving, with image the nonnegative integers and $\iota(0) = 0$, $\iota(1) = 1$ ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]], [[thm-int-ordered-ring]], [[def-int-order]], [[lem-nat-embeds-int]]).

[L11] Induction on $\mathbb{N}$: a subset containing $0$ and closed under $\sigma$ is all of $\mathbb{N}$ ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 $p^{1} = p^{\sigma(0)} = p^{0} \cdot p = 1 \cdot p = p$. [L2, L10]

1.2 $0 < 1 < p$ in $\mathbb{Z}$, since $1 = \iota(1)$ is nonnegative and differs from $0$; hence $p \ne 0$, $p \ne 1$ and $p \ne -1$. [L7, L10]

1.3 Clause 1. $p^{v} \mid a$ by [L1], and $v < \sigma(v) = v + 1$, so $p^{v+1} \mid a$ would contradict the maximality of $v$; hence $p^{v+1} \nmid a$. [L1, L9]

1.4 Clause 2, the other direction. If $p^{k} \mid a$ then $k$ belongs to the set of which $v$ is the greatest element, so $k \le v$. [L1, L9]

2.1 Clause 0: $p^{k} \ge 1$ for every $k \in \mathbb{N}$. The set of such $k$ contains $0$, since $p^{0} = 1$; and if $p^{k} \ge 1$ then $p^{\sigma(k)} = p^{k} p$ has both factors $\ge 1 > 0$, so the product is positive, hence $\ge 1$ by discreteness of the order on $\mathbb{Z}$ (a positive integer is $\iota(j)$ with $j \ne 0$, so $1 = \sigma(0) \le j$ and $1 \le \iota(j)$). By induction the set is all of $\mathbb{N}$, and in particular $p^{k} > 0$ and $p^{k} \ne 0$. [step 1.1, step 1.2, L2, L9, L10, L11]

2.2 Clause 2, one direction. Let $k \le v$ and write $v = k + c$ with $c \in \mathbb{N}$. Then $p^{v} = p^{k+c} = p^{k} p^{c}$, so $p^{k} \mid p^{v}$; with $p^{v} \mid a$ and transitivity, $p^{k} \mid a$. [step 1.3, L1, L3, L4, L5, L9]

2.3 Clause 3. By [L1] fix $a'$ with $a = p^{v} a'$. Then $a' \ne 0$, since $a \ne 0$. If $p \mid a'$, say $a' = pb$, then $a = p^{v}(pb) = (p^{v} p) b = p^{v+1} b$, so $p^{v+1} \mid a$, contradicting step 1.3. Hence $p \nmid a'$. [step 1.3, L1, L2, L5, L9, L10, choose]

2.4 If $k \ge 1$ then $p \mid p^{k}$: write $k = 1 + c$, so $p^{k} = p^{1} p^{c} = p \cdot p^{c}$. [step 1.1, L3, L5, L9]

3.1 Clause 4. If $v \ge 1$ then $p = p^{1} \mid a$ by step 2.2. Conversely if $p \mid a$ then $p^{1} \mid a$, so $1 \le v$ by step 1.4. [step 1.1, step 2.2, step 1.4]

3.2 $v_p(1) = 0$. If $p^{k} \mid 1$ with $k \ge 1$, then $p \mid p^{k} \mid 1$ by step 2.4 and transitivity, so $p = 1$ or $p = -1$, contradicting step 1.2. So no $k \ge 1$ satisfies $p^{k} \mid 1$, while $p^{0} = 1 \mid 1$; the greatest such $k$ is $0$. [step 1.2, step 2.4, L1, L2, L4, L6, L9]

3.3 $v_p(p) = 1$. First $p^{1} = p \mid p$, so $1 \le v_p(p)$ by step 1.4 applied to $a := p$. Next $p^{2} \nmid p$, where $2 = \sigma(1)$: otherwise $p = p^{2}c = p(pc)$ for some $c$, and cancelling $p \ne 0$ gives $1 = pc$, so $p \mid 1$, contradicting step 1.2. Hence $v_p(p) < 2$ by step 2.2, that is $v_p(p) \le 1$, and antisymmetry gives $v_p(p) = 1$. [step 1.1, step 1.2, step 2.2, step 1.4, L2, L5, L8, L9]

4.1 $v_p(-1) = 0$, because $p^{k} \mid -1$ holds exactly when $p^{k} \mid 1$, so the two sets of exponents coincide. [step 3.2, L1, L4]

5.1 Clauses 0 to 5 are established. [step 1.3, step 2.1, step 2.2, step 1.4, step 2.3, step 3.1, step 3.2, step 4.1, step 3.3] ∎

## Remarks

- **Clause 3 is the working form.** Every later proof on this page writes a nonzero integer as $a = p^{v_p(a)} a'$ with $p \nmid a'$ and then argues about $a'$; that is how [[lem-p-adic-valuation-additive]] gets additivity, and it is where Euclid's lemma enters.

- **The hypothesis $a \ne 0$ is carried everywhere** because $v_p(0)$ is not defined: every power of $p$ divides $0$, so there is no greatest exponent ([[def-p-adic-valuation]]).

- **Clause 2 says the exponents form an initial segment**, which is what makes "the greatest $k$ with $p^{k} \mid a$" the same as "the number of times $p$ divides $a$". Without it the maximum could in principle skip values.

```

## DEPENDENCY: thm-linear-congruence-solvability-and-solution-count

```markdown
---
id: thm-linear-congruence-solvability-and-solution-count
kind: theorem
title: "For $n\\ge1$, $ax\\equiv b\\pmod n$ is solvable exactly when $\\gcd(a,n)\\mid b$, and then has exactly $\\gcd(a,n)$ solution classes modulo $n$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-linear-congruence-reduction-by-the-gcd, thm-bezout-identity, lem-coprime-criterion, thm-standard-representatives-modulo-n, def-finite-cardinality, lem-divisibility-basic, def-common-divisor-and-gcd]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Mathematics LibreTexts, Linear Congruences"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.02%3A_Linear_Congruences"
pipeline_run: null
---

## Statement

Let $a,b\in\mathbb Z$ and $n\ge1$, and put $d:=\gcd(a,n)$. The congruence

$$ax\equiv b\pmod n$$

has an integer solution if and only if $d\mid b$. When it is solvable, it has
exactly $d$ solution classes in $\mathbb Z/n$. More explicitly, if
$a=da'$, $n=dn'$, $b=db'$ and $x_0$ solves
$a'x_0\equiv b'\pmod{n'}$, the solutions modulo $n$ are

$$[x_0+jn']_n\qquad(0\le j<d).$$

## Facts & Assumptions

**Given:** Integers $a,b$, a positive integer $n$, and $d:=\gcd(a,n)$.

[L1] The integer $d$ divides both $a$ and $n$, and every common divisor of $a,n$ divides each integer linear combination of them ([[def-common-divisor-and-gcd]], [[lem-divisibility-basic]]).

[L2] If $d\mid b$, the original congruence is equivalent to $a'x\equiv b'\pmod{n'}$, where $a=da'$, $n=dn'$, $b=db'$, $n'>0$, and $a',n'$ are coprime ([[lem-linear-congruence-reduction-by-the-gcd]]).

[L3] Coprime integers $u,v$ admit integers $s,t$ with $su+tv=1$ ([[lem-coprime-criterion]], [[thm-bezout-identity]]).

[L4] Every class modulo a positive integer $c$ has a unique representative $r$ with $0\le r<c$, and the quotient has cardinality $c$ ([[thm-standard-representatives-modulo-n]], [[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 If $x$ solves the congruence, then $n\mid ax-b$, so $ax-b=nq$ for some $q$ and $b=ax-nq$. Since $d\mid a$ and $d\mid n$, it follows that $d\mid b$. [L1]

1.2 Conversely suppose $d\mid b$ and use the notation of [L2]. Choose $u,v$ with $ua'+vn'=1$ by [L3]. Then $x_0:=ub'$ satisfies $a'x_0-b'=b'(ua'-1)=-b'vn'$, so it solves the reduced congruence and hence the original one. [L2, L3]

1.3 By [L4], every integer $q$ has a unique residue $j$ with $0\le j<d$ modulo $d$. Thus every integer congruent to $x_0$ modulo $n'$ is congruent modulo $dn'=n$ to exactly one $x_0+jn'$ with $0\le j<d$. [L4]

2.1 Every solution $x$ of the reduced congruence is congruent to $x_0$ modulo $n'$. Indeed, $n'\mid a'(x-x_0)$; multiplying $ua'+vn'=1$ by $x-x_0$ shows that $n'$ divides $x-x_0$. Conversely every $x\equiv x_0\pmod{n'}$ solves the reduced congruence. [step 1.2, L2, L3]

2.2 If $0\le i,j<d$ and $[x_0+in']_n=[x_0+jn']_n$, then $dn'\mid(i-j)n'$, so cancellation gives $d\mid i-j$; uniqueness of the standard representatives modulo $d$ yields $i=j$. Hence the displayed $d$ classes are distinct. [step 1.3, L4]

3.1 Steps 1.1 and 1.2 prove the solvability criterion. When it holds, steps 2.1, 1.3 and 2.2 show that the displayed list is exhaustive and contains exactly $d$ distinct solution classes. [step 1.1, step 1.2, step 2.1, step 1.3, step 2.2] ∎

```

## DEPENDENCY: thm-euclids-lemma

```markdown
---
id: thm-euclids-lemma
kind: theorem
title: "Euclid's lemma: if $p$ is prime and $p \\mid ab$ then $p \\mid a$ or $p \\mid b$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-prime, lem-prime-not-dividing-is-coprime, lem-coprime-divides-product,
       def-coprime, def-common-divisor-and-gcd, def-divides-in-z,
       lem-divisibility-basic, def-integers, def-int-operations, thm-int-comm-ring]
justified_by: []
aliases: [thm-euclid-lemma]
landmark: true
short: "$p \\mid ab \\Rightarrow p \\mid a$ or $p \\mid b$"
proof_strategy: cases
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Euclid's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclid%27s_lemma"
    - title: "Inquiry into Advanced Algebra: Division, primes, and factorisation"
      url: "https://web.math.utk.edu/~dcartwr1/iaawa/section-division-algorithm.html"
pipeline_run: null
---

## Statement

Let $p$ be a prime ([[def-prime]]) and let $a, b \in \mathbb{Z}$. If
$p \mid ab$ ([[def-divides-in-z]]) then

$$p \mid a \qquad \text{or} \qquad p \mid b .$$

## Facts & Assumptions

**Given:** A prime $p$ and integers $a, b$ with $p \mid ab$.

[L1] For a prime $p$ and any integer $u$: if $p \nmid u$ then $\gcd(p,u) = 1$ ([[lem-prime-not-dividing-is-coprime]], [[def-common-divisor-and-gcd]]).

[L2] If $\gcd(u,v) = 1$ and $u \mid vw$ then $u \mid w$, for all integers $u, v, w$ ([[lem-coprime-divides-product]]).

[L3] $u$ and $v$ are coprime exactly when $\gcd(u,v) = 1$ ([[def-coprime]]).

[L4] $d \mid u$ means $u = dq$ for some $q \in \mathbb{Z}$; divisibility is reflexive and transitive ([[def-divides-in-z]], [[lem-divisibility-basic]]).

[L5] $\mathbb{Z}$ is a commutative ring; in particular multiplication is commutative and associative ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]).

[L6] $p > 1$, and every positive divisor of $p$ is $1$ or $p$ ([[def-prime]]).

## Proof

**Proof technique:** cases.

1.1 Suppose $p \mid a$. Then the disjunction $p \mid a$ or $p \mid b$ holds on its first alternative, and there is nothing further to prove. [assume-case div]

1.2 Suppose instead $p \nmid a$. Then $\gcd(p,a) = 1$, so $p$ and $a$ are coprime. [assume-case nodiv, L1, L3, L6]

2.1 Apply [L2] with $u := p$, $v := a$ and $w := b$. Its two hypotheses are exactly $\gcd(p,a) = 1$, which is step 1.2, and $p \mid ab$, which is given; its conclusion is $p \mid b$. [assume-case nodiv, step 1.2, L2, L4, L5]

3.1 Either $p \mid a$ or $p \nmid a$, so the two cases are exhaustive; in the first $p \mid a$ and in the second $p \mid b$, which is the assertion. [step 1.1, step 2.1, cases-exhaustive] ∎

## Remarks

- **This is a two-line consequence, and that is the point.** The work was done one page earlier: [[lem-coprime-divides-product]] proves that $\gcd(u,v) = 1$ together with $u \mid vw$ forces $u \mid w$, and its own Remarks record that "no primality is used" in it — the proof is pure Bézout. The summary of the page carrying it says in as many words that "primes, Euclid's lemma and unique factorisation are **not** proved here; they belong to a later page". This is that page, and the only new ingredient is [[lem-prime-not-dividing-is-coprime]], which converts primality into the coprimality that lemma actually consumes.

- **The hypothesis cannot be weakened to $p > 1$.** For a composite modulus the conclusion fails, and the published witness is [[cex-divides-a-product-without-dividing-a-factor]]: $6 \mid 4 \cdot 9$ while $6 \nmid 4$ and $6 \nmid 9$. Its Remarks identify the failure as exactly the failure of coprimality, which is what primality supplies here.

- **The converse holds too.** For $p > 1$ the property proved here characterises primality; that is [[cor-prime-iff-euclid-property]], next on this page.

```

## DEPENDENCY: lem-prime-not-dividing-is-coprime

```markdown
---
id: lem-prime-not-dividing-is-coprime
kind: lemma
title: "For a prime $p$ and any integer $a$, $\\gcd(p,a)$ is $p$ when $p \\mid a$ and $1$ otherwise; so $p \\nmid a$ makes $p$ and $a$ coprime"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-prime, def-common-divisor-and-gcd, cor-common-divisor-divides-gcd,
       lem-gcd-basic-values, def-coprime, def-divides-in-z, lem-divisibility-basic,
       lem-units-of-z, def-integers, def-int-operations, def-int-order,
       thm-int-comm-ring, thm-int-ordered-ring, def-natural-numbers, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: false
short: "$p \\nmid a \\Rightarrow \\gcd(p,a) = 1$"
proof_strategy: cases
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Euclid's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Euclid%27s_lemma"
    - title: "Coprime integers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Coprime_integers"
    - title: "Inquiry into Advanced Algebra: Division, primes, and factorisation"
      url: "https://web.math.utk.edu/~dcartwr1/iaawa/section-division-algorithm.html"
pipeline_run: null
---

## Statement

Let $p$ be a prime ([[def-prime]]) and let $a \in \mathbb{Z}$. Then

$$\gcd(p,a) \;=\; \begin{cases} p & \text{if } p \mid a, \\ 1 & \text{if } p \nmid a, \end{cases}$$

with $\gcd$ as in [[def-common-divisor-and-gcd]] and divisibility as in
[[def-divides-in-z]]. In particular, if $p \nmid a$ then $p$ and $a$ are coprime
([[def-coprime]]).

## Facts & Assumptions

**Given:** A prime $p$, an integer $a$, and $g := \gcd(p,a)$ ([[def-common-divisor-and-gcd]]).

[L1] $p > 1$, and every positive divisor $d$ of $p$ satisfies $d = 1$ or $d = p$ ([[def-prime]]).

[L2] $g \ge 0$, $g \mid p$, $g \mid a$, and every common divisor of $p$ and $a$ divides $g$ ([[cor-common-divisor-divides-gcd]], [[def-common-divisor-and-gcd]]).

[L3] $\gcd(u,v) \ge 1$ unless $u = v = 0$, in which case $\gcd(u,v) = 0$ ([[lem-gcd-basic-values]]).

[L4] Divisibility is reflexive and transitive: $u \mid u$ for every $u$, and $d \mid u$ with $u \mid v$ gives $d \mid v$ ([[lem-divisibility-basic]], [[def-divides-in-z]]).

[L5] $u \mid 1$ exactly when $u = 1$ or $u = -1$ ([[lem-units-of-z]]).

[L6] $u$ and $v$ are coprime exactly when $\gcd(u,v) = 1$ ([[def-coprime]]).

[L7] The order on $\mathbb{Z}$ is total, antisymmetric and transitive and is compatible with addition; $x < y$ means $x \le y$ together with $x \ne y$ ([[thm-int-ordered-ring]], [[def-int-order]]).

[L8] The embedding $\iota : \mathbb{N} \to \mathbb{Z}$ is injective, preserves the order, and has as image exactly the nonnegative integers, with $\iota(0) = 0$ and $\iota(1) = 1$; and $0 \ne 1$ in $\mathbb{N}$ ([[lem-nat-embeds-int]], [[def-natural-numbers]], [[def-integers]]).

[L9] $\mathbb{Z}$ is a commutative ring: addition is associative and commutative, $x + 0 = x$, and every $x$ has an additive inverse $-x$, with $-(-x) = x$; we write $u - v$ for $u + (-v)$ ([[thm-int-comm-ring]], [[def-int-operations]]).

## Proof

**Proof technique:** cases.

1.1 $0 < 1$ in $\mathbb{Z}$: $1 = \iota(1)$ lies in the image of $\iota$, hence $1 \ge 0$, and $1 \ne 0$ because $\iota$ is injective and $0 \ne 1$ in $\mathbb{N}$. [L8]

1.2 Suppose $p \mid a$. Then $p$ is a common divisor of $p$ and $a$, since $p \mid p$, so $p \mid g$. [assume-case div, L2, L4]

2.1 $-1 < 0$: adding $-1$ to both sides of $0 < 1$ preserves the order, giving $-1 < 0$. [step 1.1, L7, L9]

2.2 $p > 0$ and $p \ne 0$, so $(p,a) \ne (0,0)$; consequently $g \ge 1$, and in particular $g > 0$. [step 1.1, L1, L3, L7]

3.1 $p \ne 1$ and $p \ne -1$: the first because $p > 1$, the second because $-1 < 0 < 1 < p$ and the order is transitive. [step 1.1, step 2.1, L1, L7]

3.2 $g$ is a positive divisor of $p$, so $g = 1$ or $g = p$. [step 2.2, L1, L2]

4.1 In that case $g \ne 1$: otherwise $p \mid 1$, forcing $p = 1$ or $p = -1$ and contradicting step 3.1. So $g = p$ by step 3.2. [assume-case div, step 3.1, step 3.2, L5]

4.2 Suppose instead $p \nmid a$. Then $g \ne p$, since $g \mid a$ and $g = p$ would give $p \mid a$. So $g = 1$ by step 3.2, that is, $p$ and $a$ are coprime. [assume-case nodiv, step 3.2, L2, L6]

5.1 Either $p \mid a$ or $p \nmid a$, and no third possibility exists, so the two cases above are exhaustive and give the stated value of $g$ in each. [step 4.1, step 4.2, cases-exhaustive] ∎

## Remarks

- **This is the only place on this page where primality becomes coprimality.** Every later appeal to Bézout's identity — Euclid's lemma ([[thm-euclids-lemma]]) first among them — runs through this lemma rather than through the definition of a prime, because the published [[lem-coprime-divides-product]] is stated for coprime integers and uses no primality at all.

- **The hypothesis that $p$ is prime is used twice**, and both uses are essential: once for $p > 1$, which puts $(p,a)$ outside the pair $(0,0)$ where the $\gcd$ convention lives and excludes $p$ from being a unit, and once for the divisor condition, which is what leaves only the two candidate values $1$ and $p$. For a composite $p$ the conclusion fails: $\gcd(4,6) = 2$, which is neither $4$ nor $1$, while $4 \nmid 6$.

```

## DEPENDENCY: cor-number-of-solutions-to-quadratic-congruence-modulo-prime

```markdown
---
id: cor-number-of-solutions-to-quadratic-congruence-modulo-prime
kind: corollary
title: '$x^2\equiv a\pmod p$ has exactly $1+(a/p)$ solution classes'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-legendre-symbol, cor-number-of-solutions-of-a-binomial-congruence, cor-primitive-roots-modulo-prime, cor-totient-at-one-and-at-a-prime, thm-z-mod-p-is-a-field, lem-field-is-a-commutative-ring, lem-prime-not-dividing-is-coprime]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "W. Stein, Elementary Number Theory, Corollary 4.2.3"
      url: "https://wstein.org/ent/ent.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 9, Section 1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Statement

For every integer $a$ and odd prime $p$, the congruence

$$x^2\equiv a\pmod p$$

has exactly $1+(a/p)$ solution classes modulo $p$.

## Facts & Assumptions

**Given:** An integer $a$ and an odd prime $p$.

[L1] The Legendre symbol is $0$ when $p\mid a$, $1$ when $a$ is a quadratic residue modulo $p$, and $-1$ when $a$ is a quadratic nonresidue ([[def-legendre-symbol]]).

[L2] The quotient $\mathbb Z/p$ is a field ([[thm-z-mod-p-is-a-field]]).

[L3] Every field is an integral domain ([[lem-field-is-a-commutative-ring]]).

[L4] Under its primitive-root, coprimality, positivity, and solubility hypotheses, $x^m\equiv a\pmod n$ has exactly $\gcd(\varphi(n),m)$ solution classes ([[cor-number-of-solutions-of-a-binomial-congruence]]).

[L5] Every prime admits a primitive root modulo that prime ([[cor-primitive-roots-modulo-prime]]).

[L6] For every prime $p$, $\varphi(p)=p-1$ ([[cor-totient-at-one-and-at-a-prime]]).

[L7] If $p\nmid a$, then $p$ and $a$ are coprime ([[lem-prime-not-dividing-is-coprime]]).

## Proof

**Proof technique:** direct.

1.1 If $p\mid a$, the equation in the field [L2] is $[x]_p^2=[0]_p$. Since [L3] gives no zero divisors, $[x]_p=[0]_p$ is the unique solution. This count is $1+0$ by [L1]. [L1, L2, L3, given]

1.2 Suppose $p\nmid a$. By [L7], $\gcd(a,p)=1$. If $(a/p)=1$, the congruence is soluble by [L1], and [L4], [L5], and [L6] give exactly $\gcd(p-1,2)=2$ roots. If $(a/p)=-1$, [L1] says that no root exists. [L1, L4, L5, L6, L7, algebra]

2.1 The three possible symbol values $0,1,-1$ therefore give respectively one, two, and zero solution classes, which in every case equals $1+(a/p)$. [L1, step 1.1, step 1.2] ∎

```

## DEPENDENCY: def-legendre-symbol

```markdown
---
id: def-legendre-symbol
kind: definition
title: "The Legendre symbol, including its zero value"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-quadratic-residue-modulo-n]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-16
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "H. Hackman, Elementary Number Theory, Chapter D, Section D.I"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "W. Stein, Elementary Number Theory, Section 4.1"
      url: "https://wstein.org/ent/ent.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 9, Section 1"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Definition

Let $p$ be an odd prime and let $a\in\mathbb Z$. The **Legendre symbol** is

$$\left(\frac ap\right):=\begin{cases}0,&p\mid a,\\1,&p\nmid a\text{ and }a\text{ is a quadratic residue modulo }p,\\-1,&p\nmid a\text{ and }a\text{ is a quadratic nonresidue modulo }p.\end{cases}$$

The zero branch is separate from the quadratic residue and nonresidue branches of [[def-quadratic-residue-modulo-n]], which apply only to unit numerators.

```
