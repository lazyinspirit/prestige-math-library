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
label: rr-9

run: frontier-15
role: refuter
label: rr-9
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

## ITEM: thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core

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

### Recorded proof contract for thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-polynomial-is-separable-iff-coprime-to-its-derivative",
   "source_section": "Statement",
   "quote": "Let $F$ be a field and let $0\\ne f\\in F[x]$. Then $f$ is separable over $F$ if and only if $\\gcd(f,f')=1$ in $F[x]$.",
   "uses": [
    "3.1",
    "4.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-frobenius-endomorphism-and-finite-field-automorphism",
   "source_section": "Statement",
   "quote": "Let $F$ be a field of characteristic $p>0$. The **Frobenius map**\n\n$$\\operatorname{Fr}_F:F\\to F,\\qquad x\\mapsto x^p,$$\n\nis an injective field endomorphism. If $F$ is finite, it is an automorphism. Its $n$-fold iterate is $x\\mapsto x^{p^n}$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "lem-polynomial-factorisation-into-irreducibles",
   "source_section": "Statement",
   "quote": "Every nonzero nonunit polynomial over a field is a finite product of irreducible polynomials.",
   "uses": [
    "3.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The derivative $f'$ is zero exactly when every exponent occurring in $f$ is divisible by $p$; in that case there is a unique $h\\in F[x]$ with $f(x)=h(x^p)$. Repeating this finite descent in degree gives a unique maximal $e$ and a polynomial $g$ with $f(x)=g(x^{p^e})$ and $g'\\ne0$.",
   "step": "1.1",
   "inputs": [
    "L2",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "If $g=uv$ with both factors nonconstant, then $f=u(x^{p^e})v(x^{p^e})$, contradicting irreducibility of $f$; hence $g$ is irreducible.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Since $g'\\ne0$, any nonunit common divisor of $g$ and $g'$ has an irreducible factor by [L3], which would divide the irreducible $g$ and hence force $g\\mid g'$, impossible by degree; thus $\\gcd(g,g')=1$ and [L1] makes $g$ separable.",
   "step": "3.1",
   "inputs": [
    "step 1.1",
    "step 2.1",
    "L1",
    "L3"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "The exponents occurring in $f$ determine their largest common power $p^e$, so $e$ and then the coefficient-preserving core $g$ are unique. Moreover $e=0$ exactly when $f'\\ne0$, which for irreducible $f$ is equivalent to separability by [L1].",
   "step": "4.1",
   "inputs": [
    "step 1.1",
    "step 3.1",
    "L1"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For In characteristic p, every irreducible polynomial is uniquely g(x^{p^e}) with g irreducible and separable, no possibly empty indexed operation occurs; the proof instead begins from While the derivative vanishes, every exponent is divisible by p, so write f(x)=h(x^p) without changing the coefficients and repeat."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For In characteristic p, every irreducible polynomial is uniquely g(x^{p^e}) with g irreducible and separable, step 1.1 states: \"The derivative $f'$ is zero exactly when every exponent occurring in $f$ is divisible by $p$; in that case there is a unique $h\\in F[x]$ with $f(x)=h(x^p)$. Repeating this finite descent in degree gives a unique maximal $e$ and a polynomial $g$ with $f(x)=g(x^{p^e})$ and $g'\\ne0$.\" This is the final proof check that every zero exponent, index, degree, coefficient, or element is either handled or excluded by the exact hypotheses."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "For In characteristic p, every irreducible polynomial is uniquely g(x^{p^e}) with g irreducible and separable, no free numerical parameter has a separate value-one branch; the proof instead begins from While the derivative vanishes, every exponent is divisible by p, so write f(x)=h(x^p) without changing the coefficients and repeat."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For In characteristic p, every irreducible polynomial is uniquely g(x^{p^e}) with g irreducible and separable, step 1.1 states: \"The derivative $f'$ is zero exactly when every exponent occurring in $f$ is divisible by $p$; in that case there is a unique $h\\in F[x]$ with $f(x)=h(x^p)$. Repeating this finite descent in degree gives a unique maximal $e$ and a polynomial $g$ with $f(x)=g(x^{p^e})$ and $g'\\ne0$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For In characteristic p, every irreducible polynomial is uniquely g(x^{p^e}) with g irreducible and separable, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from While the derivative vanishes, every exponent is divisible by p, so write f(x)=h(x^p) without changing the coefficients and repeat."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For In characteristic p, every irreducible polynomial is uniquely g(x^{p^e}) with g irreducible and separable, step 1.1 states: \"The derivative $f'$ is zero exactly when every exponent occurring in $f$ is divisible by $p$; in that case there is a unique $h\\in F[x]$ with $f(x)=h(x^p)$. Repeating this finite descent in degree gives a unique maximal $e$ and a polynomial $g$ with $f(x)=g(x^{p^e})$ and $g'\\ne0$.\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "For In characteristic p, every irreducible polynomial is uniquely g(x^{p^e}) with g irreducible and separable, step 4.1 proves that e=0 implies f' is nonzero and hence f is separable."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "For In characteristic p, every irreducible polynomial is uniquely g(x^{p^e}) with g irreducible and separable, step 4.1 also proves that separability forces f' to be nonzero, so the maximal exponent is e=0."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power

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

### Recorded proof contract for lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-frobenius-endomorphism-and-finite-field-automorphism",
   "source_section": "Statement",
   "quote": "Let $F$ be a field of characteristic $p>0$. The **Frobenius map**\n\n$$\\operatorname{Fr}_F:F\\to F,\\qquad x\\mapsto x^p,$$\n\nis an injective field endomorphism. If $F$ is finite, it is an automorphism. Its $n$-fold iterate is $x\\mapsto x^{p^n}$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-polynomial-is-separable-iff-coprime-to-its-derivative",
   "source_section": "Statement",
   "quote": "Let $F$ be a field and let $0\\ne f\\in F[x]$. Then $f$ is separable over $F$ if and only if $\\gcd(f,f')=1$ in $F[x]$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-splitting-fields-exist-for-nonzero-polynomials",
   "source_section": "Statement",
   "quote": "For every field $F$ and every nonzero polynomial $f\\in F[x]$, there exists a splitting field of $f$ over $F$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core",
   "source_section": "Statement",
   "quote": "Let $F$ have characteristic $p>0$ and let $f\\in F[x]$ be nonconstant and\nirreducible. There are unique $e\\in\\mathbb N$ and $g\\in F[x]$ such that\n\n$$f(x)=g(x^{p^e}),$$\n\n$g$ is irreducible and separable, and $e$ is maximal with this property. The\ncase $e=0$ occurs exactly when $f$ is separable.",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "In a splitting field supplied by [L3], choose a root $b$ of $x^{p^n}-a$; [L1] gives $x^{p^n}-a=(x-b)^{p^n}$, so $b$ is its only distinct root.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L3"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Let $q$ be the minimal polynomial of $b$ over $F$. By [L4], write $q(x)=g(x^{p^r})$ with $g$ irreducible and separable. Every root of $q$ is also a root of $x^{p^n}-a$, hence equals $b$ by step 1.1; separability of $g$ and [L2] therefore force $g$ to be linear. Thus $q(x)=x^{p^r}-c$ for some $c=b^{p^r}\\in F$ and some $0\\le r\\le n$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L2",
    "L4"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "If $r<n$, then $a=b^{p^n}=c^{p^{n-r}}$ is a $p$th power in $F$, contrary to the hypothesis; hence $r=n$ and $q=x^{p^n}-a$.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "algebra"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "Therefore $x^{p^n}-a$ is the minimal polynomial of $b$ and is irreducible. The hypothesis excludes $a=0$ because $0=0^p$, and the same argument includes $n=1$.",
   "step": "4.1",
   "inputs": [
    "step 3.1"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For If a is not a pth power in a characteristic-p field, then x^{p^n}-a is irreducible for every nge1, no possibly empty indexed operation occurs; the proof instead begins from In an algebraic closure the polynomial is (x-b)^{p^n}."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For If a is not a pth power in a characteristic-p field, then x^{p^n}-a is irreducible for every n\\ge1, step 1.1 states: \"In a splitting field supplied by [L3], choose a root $b$ of $x^{p^n}-a$; [L1] gives $x^{p^n}-a=(x-b)^{p^n}$, so $b$ is its only distinct root.\" This is the final proof check that the hypotheses exclude both a=0 and n=0."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For If a is not a pth power in a characteristic-p field, then x^{p^n}-a is irreducible for every n\\ge1, step 1.1 states: \"In a splitting field supplied by [L3], choose a root $b$ of $x^{p^n}-a$; [L1] gives $x^{p^n}-a=(x-b)^{p^n}$, so $b$ is its only distinct root.\" This is the final proof check that n=1 is the first allowed exponent."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For If a is not a pth power in a characteristic-p field, then x^{p^n}-a is irreducible for every n\\ge1, step 2.1 states: \"Let $q$ be the minimal polynomial of $b$ over $F$. By [L4], write $q(x)=g(x^{p^r})$ with $g$ irreducible and separable. Every root of $q$ is also a root of $x^{p^n}-a$, hence equals $b$ by step 1.1; separability of $g$ and [L2] therefore force $g$ to be linear. Thus $q(x)=x^{p^r}-c$ for some $c=b^{p^r}\\in F$ and some $0\\le r\\le n$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For If a is not a pth power in a characteristic-p field, then x^{p^n}-a is irreducible for every nge1, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from In an algebraic closure the polynomial is (x-b)^{p^n}."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For If a is not a pth power in a characteristic-p field, then x^{p^n}-a is irreducible for every n\\ge1, step 1.1 states: \"In a splitting field supplied by [L3], choose a root $b$ of $x^{p^n}-a$; [L1] gives $x^{p^n}-a=(x-b)^{p^n}$, so $b$ is its only distinct root.\" This is the final proof check that a splitting field exists before a geometric root is selected."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim If a is not a pth power in a characteristic-p field, then x^{p^n}-a is irreducible for every nge1 is not a biconditional, so no forward implication is asserted; the proof begins from In an algebraic closure the polynomial is (x-b)^{p^n}."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim If a is not a pth power in a characteristic-p field, then x^{p^n}-a is irreducible for every nge1 is not a biconditional, so no reverse implication is asserted; the proof begins from In an algebraic closure the polynomial is (x-b)^{p^n}."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-perfect-field-characterizations

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

### Recorded proof contract for thm-perfect-field-characterizations

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-perfect-field",
   "source_section": "Definition",
   "quote": "A field $F$ ([[def-field]]) is **perfect** when every nonconstant irreducible\npolynomial in $F[x]$ is separable\n([[def-repeated-root-and-separable-polynomial]]).",
   "uses": [
    "1.1",
    "1.3"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-irreducible-polynomial-in-positive-characteristic-has-a-unique-separable-core",
   "source_section": "Statement",
   "quote": "Let $F$ have characteristic $p>0$ and let $f\\in F[x]$ be nonconstant and\nirreducible. There are unique $e\\in\\mathbb N$ and $g\\in F[x]$ such that\n\n$$f(x)=g(x^{p^e}),$$\n\n$g$ is irreducible and separable, and $e$ is maximal with this property. The\ncase $e=0$ occurs exactly when $f$ is separable.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-polynomial-is-separable-iff-coprime-to-its-derivative",
   "source_section": "Statement",
   "quote": "Let $F$ be a field and let $0\\ne f\\in F[x]$. Then $f$ is separable over $F$ if and only if $\\gcd(f,f')=1$ in $F[x]$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power",
   "source_section": "Statement",
   "quote": "Let $F$ have characteristic $p>0$, let $a\\in F$ not be a $p$th power in $F$,\nand let $n\\ge1$. Then $x^{p^n}-a$ is irreducible in $F[x]$.",
   "uses": [
    "1.3"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-frobenius-endomorphism-and-finite-field-automorphism",
   "source_section": "Statement",
   "quote": "Let $F$ be a field of characteristic $p>0$. The **Frobenius map**\n\n$$\\operatorname{Fr}_F:F\\to F,\\qquad x\\mapsto x^p,$$\n\nis an injective field endomorphism. If $F$ is finite, it is an automorphism. Its $n$-fold iterate is $x\\mapsto x^{p^n}$.",
   "uses": [
    "1.2"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "If $\\operatorname{char}F=0$ and $f$ is irreducible, then $f'\\ne0$; any common nonconstant divisor of $f$ and $f'$ would be associated to $f$, which is impossible because $\\deg f'<\\deg f$. Thus $\\gcd(f,f')=1$, so $f$ is separable by [L5].",
   "step": "1.1",
   "inputs": [
    "L1",
    "L5",
    "algebra"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "Suppose $\\operatorname{char}F=p>0$ and Frobenius is surjective. For irreducible $f=g(x^{p^e})$ as in [L2], if $e>0$ then taking $p^e$th roots of the coefficients through repeated surjectivity and using [L4] would write $f$ as a $p^e$th power of a nonconstant polynomial, contradicting irreducibility. Hence $e=0$ and every irreducible is separable.",
   "step": "1.2",
   "inputs": [
    "L2",
    "L4"
   ]
  },
  {
   "id": "step-1-3",
   "claim": "Conversely, if Frobenius is not surjective, choose $a\\notin F^p$. Then [L3] makes $x^p-a$ irreducible, while its derivative is zero, so it is not separable and $F$ is not perfect.",
   "step": "1.3",
   "inputs": [
    "L1",
    "L3"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "The characteristic-zero argument and the two implications in positive characteristic establish the equivalence.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "step 1.2",
    "step 1.3"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For A field is perfect exactly when it has characteristic zero or its Frobenius map is surjective, no possibly empty indexed operation occurs; the proof instead begins from In characteristic zero a nonzero derivative of an irreducible polynomial cannot share a factor with it."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For A field is perfect exactly when it has characteristic zero or its Frobenius map is surjective, step 1.3 states: \"Conversely, if Frobenius is not surjective, choose $a\\notin F^p$. Then [L3] makes $x^p-a$ irreducible, while its derivative is zero, so it is not separable and $F$ is not perfect.\" This is the final proof check that every zero exponent, index, degree, coefficient, or element is either handled or excluded by the exact hypotheses."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "For A field is perfect exactly when it has characteristic zero or its Frobenius map is surjective, no free numerical parameter has a separate value-one branch; the proof instead begins from In characteristic zero a nonzero derivative of an irreducible polynomial cannot share a factor with it."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For A field is perfect exactly when it has characteristic zero or its Frobenius map is surjective, step 1.2 states: \"Suppose $\\operatorname{char}F=p>0$ and Frobenius is surjective. For irreducible $f=g(x^{p^e})$ as in [L2], if $e>0$ then taking $p^e$th roots of the coefficients through repeated surjectivity and using [L4] would write $f$ as a $p^e$th power of a nonconstant polynomial, contradicting irreducibility. Hence $e=0$ and every irreducible is separable.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For A field is perfect exactly when it has characteristic zero or its Frobenius map is surjective, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from In characteristic zero a nonzero derivative of an irreducible polynomial cannot share a factor with it."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "For A field is perfect exactly when it has characteristic zero or its Frobenius map is surjective, only supplied data are used and no unproved nonempty selection occurs; the proof begins from In characteristic zero a nonzero derivative of an irreducible polynomial cannot share a factor with it."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "Step 1.1 proves the characteristic-zero branch via the exact gcd criterion [L5], while step 1.2 proves the positive-characteristic surjective-Frobenius branch."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "Step 1.3 starts from failure of Frobenius surjectivity and constructs the irreducible inseparable polynomial $x^p-a$, proving the converse independently."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, in full

## DEPENDENCY: def-polynomial-ring-on-a-family-of-indeterminates

```markdown
---
id: def-polynomial-ring-on-a-family-of-indeterminates
kind: definition
title: "The polynomial ring $R[x_i:i\\in I]$ as finitely supported coefficient families on monomials"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monomials-on-an-index-set, def-commutative-ring, def-finite-sum-in-a-commutative-monoid]
justified_by: [thm-polynomial-ring-on-a-family-is-a-commutative-ring]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "U. Thiel, Commutative Algebra, Section 1.4"
      url: "https://ulthiel.com/math/files/Commutative-Algebra.pdf"
pipeline_run: null
---

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
---
id: def-monomials-on-an-index-set
kind: definition
title: "Monomials on an index set as finitely supported exponent families"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-function, def-natural-numbers, def-nat-addition, def-countable]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "U. Thiel, Commutative Algebra, Section 1.4"
      url: "https://ulthiel.com/math/files/Commutative-Algebra.pdf"
pipeline_run: null
---

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
---
id: lem-finite-sum-reindexing-and-fubini
kind: lemma
title: "Finite commutative-monoid sums are invariant under bijective reindexing, split over disjoint unions, and satisfy the finite Fubini rule"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-finite-sum-in-a-commutative-monoid, thm-product-rule, thm-sum-rule, def-injection-surjection-bijection, thm-generalised-associativity]
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
    - title: "Andrade–da Cruz, Finite products in commutative monoids"
      url: "https://arxiv.org/abs/2605.08089"
pipeline_run: null
---

## Statement

Let $(M,+,0)$ be a commutative monoid and let all index sets below be finite.

1. If $h:T\to S$ is a bijection and $a:S\to M$, then $\sum_{t\in T}a_{h(t)}=\sum_{s\in S}a_s$.
2. If $S$ and $T$ are disjoint and $a:S\cup T\to M$, then $\sum_{u\in S\cup T}a_u=\sum_{s\in S}a_s+\sum_{t\in T}a_t$.
3. If $a:S\times T\to M$, then
   $$\sum_{(s,t)\in S\times T}a_{s,t}=\sum_{s\in S}\left(\sum_{t\in T}a_{s,t}\right)=\sum_{t\in T}\left(\sum_{s\in S}a_{s,t}\right).$$

## Facts & Assumptions

**Given:** A commutative monoid $(M,+,0)$, finite sets $S,T$, and functions and a bijection as in the Statement.

[F1] A finite commutative-monoid sum is obtained from any enumeration of its finite index set, and its value is independent of that enumeration ([[def-finite-sum-in-a-commutative-monoid]]).

[L1] A finite monoid product splits at a cut, may be regrouped into consecutive blocks, and in a commutative monoid is invariant under permutations ([[thm-generalised-associativity]]).

[L2] A finite family of pairwise disjoint finite sets has finite union, and its cardinality is the sum of the cardinalities; in particular, $|S\cup T|=|S|+|T|$ when $S$ and $T$ are disjoint ([[thm-sum-rule]]).

[L3] A Cartesian product of finite sets is finite with $|S\times T|=|S||T|$ ([[thm-product-rule]]).

[F2] Composites and inverses of bijections are bijections ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 For clause 1, choose an enumeration $\phi:|T|\to T$. Then $h\circ\phi$ enumerates $S$, and [F1] gives $\sum_{t\in T}a_{h(t)}=\sum_{k<|T|}a_{h(\phi(k))}=\sum_{s\in S}a_s$. [F1, F2]

1.2 For clause 2, choose enumerations of $S$ and $T$ and concatenate them. By [L2] this gives an enumeration of $S\cup T$ of length $|S|+|T|$, and the splitting law in [L1] turns the resulting finite sum into the sum over $S$ followed by the sum over $T$. [F1, L1, L2]

1.3 For clause 3, choose enumerations $\phi:|S|\to S$ and $\psi:|T|\to T$. The disjoint slices $\{\phi(i)\}\times T$ cover $S\times T$; concatenate their $\psi$-enumerations in the order of $i$. By [L2] and [L3] this is an enumeration of $S\times T$, and regrouping it into the $|S|$ consecutive slices gives $\sum_{(s,t)\in S\times T}a_{s,t}=\sum_{s\in S}(\sum_{t\in T}a_{s,t})$. [F1, L1, L2, L3]

2.1 The column-major list also enumerates $S\times T$, and permutation invariance followed by regrouping into columns gives $\sum_{(s,t)\in S\times T}a_{s,t}=\sum_{t\in T}(\sum_{s\in S}a_{s,t})$. [step 1.3, F1, L1, L3]

3.1 Steps 1.1, 1.2, 1.3 and 2.1 prove reindexing, disjoint splitting and both finite Fubini equalities. [step 1.1, step 1.2, step 1.3, step 2.1] ∎

```

## DEPENDENCY: def-ring-homomorphism

```markdown
---
id: def-ring-homomorphism
kind: definition
title: "Ring homomorphism: additive, multiplicative, and required to send $1$ to $1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-ring, def-group-homomorphism, def-semigroup-and-monoid, def-identity-element]
justified_by: []
aliases: []
landmark: true
short: "ring homomorphism"
verification:
  precheck: n/a
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Ring homomorphism (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ring_homomorphism"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §16.5: Ring Homomorphisms and Ideals"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/16%3A_Rings/16.05%3A_Ring_Homomorphisms_and_Ideals"
pipeline_run: null
---

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

## Remarks

- **What follows automatically, and what does not.** $f(0_R) = 0_S$,
  $f(-x) = -f(x)$ and $f(mx) = m f(x)$ for every integer $m$ all follow from
  (RH1) alone, and units are carried to units once (RH3) is available; these are
  [[lem-ring-homomorphism-basic-properties]]. What does not follow from (RH1)
  and (RH2) is (RH3) itself.

- **Between fields there is no difference from the published notion.** A ring
  homomorphism between fields is exactly a field homomorphism in the sense of
  [[def-field-homomorphism]], and every such map is injective; that is
  [[lem-ring-homomorphism-of-fields-is-a-field-homomorphism]].

- Kernels, quotient rings and the isomorphism theorems are not defined on this
  page and nothing here uses them.

```

## DEPENDENCY: thm-universal-property-of-a-polynomial-ring

```markdown
---
id: thm-universal-property-of-a-polynomial-ring
kind: theorem
title: 'Universal property of $R[x]$: a coefficient homomorphism and the image of $x$ determine a unique ring homomorphism'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-polynomial-evaluation-and-root, thm-polynomial-ring-is-a-commutative-ring, prop-polynomial-coefficient-sequences-and-trimmed-lists-agree, def-ring-homomorphism, lem-finite-sum-reindexing-and-fubini]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'James McKernan, MIT 18.703 Lecture 21, Lemma 21.3'
      url: 'https://opencw.aprende.org/courses/mathematics/18-703-modern-algebra-spring-2013/lecture-notes/MIT18_703S13_pra_l_21.pdf'
pipeline_run: null
---

## Statement

Let $R,S$ be commutative rings, let $\varphi\colon R\to S$ be a unital ring homomorphism, and let $s\in S$. There is a unique unital ring homomorphism

$$ \operatorname{ev}_{\varphi,s}\colon R[x]\to S $$

that extends $\varphi$ on constant polynomials and sends $x$ to $s$. It is given by $\operatorname{ev}_{\varphi,s}(\sum_i a_i x^i)=\sum_i\varphi(a_i)s^i$.

## Facts & Assumptions

**Given:** Commutative rings $R,S$, a unital ring homomorphism $\varphi\colon R\to S$, and an element $s\in S$.

[L1] Evaluation is the finite sum $f_\varphi(s)=\sum_i\varphi(a_i)s^i$ ([[def-polynomial-evaluation-and-root]]).

[L2] Polynomial convolution makes $R[x]$ a commutative ring with constant embedding $c\colon R\to R[x]$ ([[thm-polynomial-ring-is-a-commutative-ring]]).

[L3] Finitely supported sequences and trimmed coefficient lists have the same coefficients and operations ([[prop-polynomial-coefficient-sequences-and-trimmed-lists-agree]]).

[L4] A ring homomorphism preserves addition, multiplication, and one ([[def-ring-homomorphism]]).

[L5] Finite sums may be reindexed and iterated over finite products ([[lem-finite-sum-reindexing-and-fubini]]).

## Proof

**Proof technique:** direct.

1.1 The formula in [L1] preserves sums term by term, sends $1$ to $1$, and sends a convolution product to $\sum_{i,j}\varphi(a_i)\varphi(b_j)s^{i+j}=(\sum_i\varphi(a_i)s^i)(\sum_j\varphi(b_j)s^j)$ by [L5]; thus [L4] makes it a unital ring homomorphism, and [L2] shows that it extends $\varphi$ and sends $x$ to $s$. [given, L1, L2, L4, L5, algebra]

2.1 If $\psi\colon R[x]\to S$ is another such homomorphism, [L3] writes every polynomial as a finite sum $\sum_i c(a_i)x^i$, so [L4] forces $\psi(f)=\sum_i\varphi(a_i)s^i$; hence $\psi=\operatorname{ev}_{\varphi,s}$ and uniqueness holds. [step 1.1, L2, L3, L4] ∎

```

## DEPENDENCY: def-multivariate-polynomial-ring-by-iteration

```markdown
---
id: def-multivariate-polynomial-ring-by-iteration
kind: definition
title: 'Polynomial rings in finitely many commuting indeterminates by iteration'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-polynomial-ring-over-a-commutative-ring, thm-polynomial-ring-is-a-commutative-ring]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Thomas W. Judson, Abstract Algebra: Theory and Applications, Chapter 17.1'
      url: 'https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/17%3A_Polynomials'
    - title: 'Neil Donaldson, Math 120B Notes, Section 22, More general constructions'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Definition

Let $R$ be a commutative ring. Define polynomial rings in finitely many commuting indeterminates recursively by

$$ R[x_1,\ldots,x_0]:=R,\qquad R[x_1,\ldots,x_{n+1}]:=R[x_1,\ldots,x_n][x_{n+1}]. $$

At each stage the coefficient ring embeds as the constant polynomials ([[thm-polynomial-ring-is-a-commutative-ring]]), so all preceding indeterminates remain present. The new indeterminate commutes with every coefficient by the commutativity built into [[def-polynomial-ring-over-a-commutative-ring]], and consequently all $x_i$ commute. This iterated ring is denoted $R[x_1,\ldots,x_n]$.

```

## DEPENDENCY: prop-base-field-embeddings-carry-elements-to-conjugates

```markdown
---
id: prop-base-field-embeddings-carry-elements-to-conjugates
kind: proposition
title: "A base-field embedding carries an algebraic element to a conjugate"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-conjugate-elements-over-a-field, lem-polynomials-and-roots-transport-along-field-isomorphisms, prop-endomorphisms-of-a-splitting-field-permute-its-roots]
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

Let $\sigma:K\to L$ be an $F$-embedding and let $\alpha\in K$ be algebraic
over $F$. Then $\sigma(\alpha)$ is conjugate to $\alpha$ over $F$. In
particular, an $F$-endomorphism of a splitting field permutes the distinct roots
of every base polynomial that splits there.

## Facts & Assumptions

**Given:** An $F$-embedding $\sigma:K\to L$ and an element $\alpha\in K$ algebraic over $F$.

[L1] A field isomorphism transports polynomial evaluation and carries roots to roots after applying the induced coefficient map ([[lem-polynomials-and-roots-transport-along-field-isomorphisms]]).

[L2] An endomorphism of a splitting field fixing the base permutes the finite set of distinct roots of the defining polynomial ([[prop-endomorphisms-of-a-splitting-field-permute-its-roots]]).

[L3] Conjugate elements are the roots of the same minimal polynomial over the base ([[def-conjugate-elements-over-a-field]]).

## Proof

**Proof technique:** direct.

1.1 Regard $\sigma$ as an isomorphism $K\to\sigma(K)\subseteq L$. Let $m_\alpha\in F[x]$ be the minimal polynomial of $\alpha$. Since $\sigma$ fixes $F$, [L1] gives $m_\alpha(\sigma(\alpha))=\sigma(m_\alpha(\alpha))=0$. [L1]

2.1 Thus $\sigma(\alpha)$ is a root of $m_\alpha$ and is conjugate to $\alpha$ by [L3]. [step 1.1, L3]

3.1 When $K=L$ is a splitting field, [L2] strengthens this root preservation to a permutation of the distinct roots. [L2] ∎

```

## DEPENDENCY: thm-universal-property-of-adjoining-an-irreducible-root

```markdown
---
id: thm-universal-property-of-adjoining-an-irreducible-root
kind: theorem
title: 'Universal property of adjoining a root of an irreducible polynomial'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-irreducible-quotient-adjoins-a-root, thm-quotient-ring-universal-property, thm-universal-property-of-a-polynomial-ring]
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

Let $p\in F[x]$ be monic and irreducible, let $K=F[x]/(p)$, and put
$a=x+(p)$. If $L/F$ is a field extension and $b\in L$ satisfies $p(b)=0$,
there is a unique field homomorphism
$$\varphi:K\longrightarrow L$$
that fixes $F$ and sends $a$ to $b$. Its image is $F[b]$.

## Facts & Assumptions

**Given:** The fields and roots appearing in the statement.

[F1] Evaluation gives the unique homomorphism $F[x]\to L$ fixing $F$ and sending $x$ to $b$ ([[thm-universal-property-of-a-polynomial-ring]]).

[F2] A homomorphism $R\to S$ whose kernel contains an ideal $I$ factors uniquely through $R/I$ ([[thm-quotient-ring-universal-property]]).

[F3] $K$ is a field extension, $p(a)=0$, and every element of $K$ is a polynomial in $a$ ([[thm-irreducible-quotient-adjoins-a-root]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], evaluation at $b$ is a homomorphism $\operatorname{ev}_b:F[x]\to L$ fixing $F$. [F1]

2.1 Since $p(b)=0$, the ideal $(p)$ lies in $\ker(\operatorname{ev}_b)$; [F2] therefore gives a unique homomorphism $\varphi:K\to L$ with $\varphi(f+(p))=f(b)$. [F2, step 1.1]

3.1 The formula fixes constant classes and sends $a=x+(p)$ to $b$; its image is exactly the set $F[b]$ of polynomial values. [F3, step 2.1, algebra]

3.2 Because [F3] makes $K$ a field and $\varphi(1)=1$, its kernel is not all of $K$ and hence is zero; thus $\varphi$ is a field homomorphism. [F3, step 2.1, algebra]

4.1 Any homomorphism fixing $F$ and sending $a$ to $b$ sends every $f(a)$ to $f(b)$; since every element is such an $f(a)$ by [F3], it equals $\varphi$. [F3, step 3.1] ∎

```

## DEPENDENCY: def-algebraically-closed-field

```markdown
---
id: def-algebraically-closed-field
kind: definition
title: 'An algebraically closed field: every nonconstant polynomial has a root in the field'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-field, def-polynomial-evaluation-and-root, def-polynomial-degree-leading-coefficient-and-monic]
justified_by: []
aliases: []
landmark: false
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
    - title: 'M. Khovanov, Linear Algebra II notes, §6'
      url: 'https://www.math.columbia.edu/~khovanov/MA2_2022/files/lin_alg.pdf'
    - title: 'H. Pinkham, Linear Algebra, §12.1'
      url: 'https://www.math.columbia.edu/department/pinkham/HCP_LinearAlgebra.pdf'
pipeline_run: null
---

## Definition

A field $F$ is **algebraically closed** when every nonconstant polynomial $p\in F[x]$ has a root in $F$: there is $\lambda\in F$ such that $p(\lambda)=0$.

This definition concerns roots in the field itself. It does not assert here that any particular field, including $\mathbb C$, is algebraically closed.

```

## DEPENDENCY: thm-polynomial-is-separable-iff-coprime-to-its-derivative

```markdown
---
id: thm-polynomial-is-separable-iff-coprime-to-its-derivative
kind: theorem
title: 'A nonzero polynomial over a field is separable exactly when its gcd with its derivative is $1$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-repeated-root-derivative-criterion, lem-polynomial-gcd-is-stable-under-field-extension, thm-bezout-identity-for-polynomials, thm-polynomial-quotient-is-a-field-iff-irreducible, lem-polynomial-factorisation-into-irreducibles, thm-universal-property-of-a-polynomial-ring, prop-canonical-quotient-ring-map]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Brian Conrad, Differential Criterion and Primitivity, Proposition 1.2'
      url: 'https://math.stanford.edu/~conrad/210BPage/handouts/sepfield.pdf'
pipeline_run: null
---

## Statement

Let $F$ be a field and let $0\ne f\in F[x]$. Then $f$ is separable over $F$ if and only if $\gcd(f,f')=1$ in $F[x]$.

## Facts & Assumptions

**Given:** A field $F$ and a nonzero polynomial $f\in F[x]$.

[L1] In any extension field, a root of $f$ is repeated exactly when it is also a root of $f'$ ([[thm-repeated-root-derivative-criterion]]).

[L2] The monic gcd of two base-field polynomials is unchanged after a field extension ([[lem-polynomial-gcd-is-stable-under-field-extension]]).

[L3] If $p$ is irreducible, then $F[x]/(p)$ is a field ([[thm-polynomial-quotient-is-a-field-iff-irreducible]]).

[L4] Every nonzero nonunit polynomial over a field has an irreducible factor ([[lem-polynomial-factorisation-into-irreducibles]]).

[L5] A coefficient homomorphism and a chosen image of $x$ determine an evaluation homomorphism ([[thm-universal-property-of-a-polynomial-ring]]).

[L6] The canonical map $R\to R/I$ is a surjective ring homomorphism with kernel $I$ ([[prop-canonical-quotient-ring-map]]).

[L7] For polynomials not both zero over a field, their monic gcd is a polynomial linear combination of them ([[thm-bezout-identity-for-polynomials]]).

## Proof

**Proof technique:** direct.

1.1 If $\gcd(f,f')=1$, [L2] says that the gcd remains $1$ in every extension field, and [L7] supplies a Bézout identity there. A common root of $f$ and $f'$ would evaluate that identity to $0=1$ by [L5], so [L1] shows that $f$ has no repeated root and is separable. [given, L1, L2, L5, L7]

1.2 Conversely, if $d=\gcd(f,f')\ne1$, then $d$ is a nonconstant nonunit and [L4] supplies an irreducible factor $p$ of $d$. Fact [L3] makes $E=F[x]/(p)$ a field. No nonzero constant lies in $(p)$ because a nonconstant polynomial cannot divide it, so [L6] makes the canonical map $F\to E$ injective and identifies $F$ with a subfield of $E$. Under the evaluation map of [L5], the residue class of $x$ is a common root in $E$ of $p$, hence of $d$, $f$, and $f'$. [given, L2, L3, L4, L5, L6]

2.1 By [L1], the common root from step 1.2 is a repeated root of $f$, so a separable $f$ must have $d=1$; combined with step 1.1, this proves the biconditional. [step 1.1, step 1.2, L1] ∎

```

## DEPENDENCY: thm-frobenius-endomorphism-and-finite-field-automorphism

```markdown
---
id: thm-frobenius-endomorphism-and-finite-field-automorphism
kind: theorem
title: "Frobenius $x\\mapsto x^p$ is an injective endomorphism in characteristic $p$, and an automorphism for finite fields"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-binomial-theorem-over-a-commutative-ring, lem-prime-divides-intermediate-binomial-coefficients, thm-characteristic-of-a-field-is-zero-or-prime, def-field-homomorphism, thm-subset-of-a-finite-set]
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
    - title: "K. Conrad, Finite Fields, Sections 1-2"
      url: "https://kconrad.math.uconn.edu/blurbs/galoistheory/finitefields.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Propositions 4.19-4.24"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
pipeline_run: null
---

## Statement

Let $F$ be a field of characteristic $p>0$. The **Frobenius map**

$$\operatorname{Fr}_F:F\to F,\qquad x\mapsto x^p,$$

is an injective field endomorphism. If $F$ is finite, it is an automorphism. Its $n$-fold iterate is $x\mapsto x^{p^n}$.

## Facts & Assumptions

**Given:** A field $F$ of positive characteristic $p$.

[L1] The binomial theorem holds in every commutative ring ([[thm-binomial-theorem-over-a-commutative-ring]]).

[L2] For $0<k<p$, the prime $p$ divides $\binom pk$ ([[lem-prime-divides-intermediate-binomial-coefficients]]).

[L3] A positive field characteristic is prime ([[thm-characteristic-of-a-field-is-zero-or-prime]]).

[L4] A field homomorphism preserves addition, multiplication, and $1$ ([[def-field-homomorphism]]).

[L5] An injection from a finite set to itself is a bijection ([[thm-subset-of-a-finite-set]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], all intermediate terms in $(x+y)^p$ have coefficients divisible by $p$ and hence vanish in $F$, so $(x+y)^p=x^p+y^p$. [given, L1, L2, L3, algebra]

1.2 Commutativity gives $(xy)^p=x^py^p$, and $1^p=1$, so Frobenius is an endomorphism by [L4]. [given, L4, algebra]

2.1 If $x^p=y^p$, then step 1.1 gives $(x-y)^p=0$. A field has no nonzero nilpotents, so $x-y=0$ and the map is injective. [step 1.1, algebra]

3.1 If $F$ is finite, [L5] turns this injection into a bijection, hence an automorphism. [step 1.2, step 2.1, L5]

4.1 Iterating and using $(x^{p^r})^p=x^{p^{r+1}}$ gives $\operatorname{Fr}_F^n(x)=x^{p^n}$, including $n=0$ as the identity. [step 1.2, algebra] ∎

```

## DEPENDENCY: lem-polynomial-factorisation-into-irreducibles

```markdown
---
id: lem-polynomial-factorisation-into-irreducibles
kind: lemma
title: 'Every nonzero nonunit polynomial over a field factors into irreducible polynomials'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-irreducible-and-prime-elements-in-a-domain, thm-polynomial-degree-of-a-product-over-a-domain, cor-units-in-a-polynomial-ring-over-a-domain, thm-strong-induction]
justified_by: []
aliases: []
landmark: false
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'Neil Donaldson, Math 120B Notes, Theorem 23.7'
      url: 'https://www.math.uci.edu/~ndonalds/math120b/2poly.pdf'
pipeline_run: null
---

## Statement

Every nonzero nonunit polynomial over a field is a finite product of irreducible polynomials.

## Facts & Assumptions

**Given:** A field $F$ and a nonzero nonunit polynomial $f\in F[x]$.

[L1] A nonzero nonunit is irreducible when every factorization has a unit factor ([[def-irreducible-and-prime-elements-in-a-domain]]).

[L2] Degrees add under multiplication of nonzero polynomials over a field ([[thm-polynomial-degree-of-a-product-over-a-domain]]).

[L3] The units of $F[x]$ are exactly its nonzero constant polynomials ([[cor-units-in-a-polynomial-ring-over-a-domain]]).

[L4] Strong induction proves a natural-number property once the case at $n$ follows from all smaller cases ([[thm-strong-induction]]).

## Proof

**Proof technique:** induction.

1.1 Use strong induction on $n=\deg f$; by [L3], a nonzero nonunit has $n\ge1$. [base, given, L3, L4]

2.1 If $f$ is irreducible, it is already a one-factor product; otherwise [L1] gives $f=gh$ with $g,h$ nonunits, and neither is zero because $f\ne0$. [step 1.1, ih, L1, construct]

3.1 By [L2], $\deg g$ and $\deg h$ are positive and strictly below $n$, so the induction hypotheses factor both into irreducibles; concatenating those factorizations gives one for $f$, and [L4] completes the induction. [step 2.1, ih, L2, L3, L4, discharge-induction] ∎

```

## DEPENDENCY: thm-splitting-fields-exist-for-nonzero-polynomials

```markdown
---
id: thm-splitting-fields-exist-for-nonzero-polynomials
kind: theorem
title: 'Every nonzero polynomial over a field has a splitting field'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-adjoining-one-root-reduces-the-unsplit-degree, thm-strong-induction, def-polynomials-that-split-and-splitting-fields, thm-irreducible-quotient-adjoins-a-root]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: 'T. Judson, Abstract Algebra: Theory and Applications, Theorem 21.11'
      url: 'https://judsonbooks.org/aata-files/aata-html/fields-section-splitting-fields.html'
    - title: 'J. S. Milne, Fields and Galois Theory, Chapter 2'
      url: 'https://www.jmilne.org/math/CourseNotes/FT.pdf'
pipeline_run: frontier-12
---

## Statement

For every field $F$ and every nonzero polynomial $f\in F[x]$, there exists a splitting field of $f$ over $F$.

## Facts & Assumptions

**Given:** A field $F$ and a nonzero polynomial $f\in F[x]$.

[F1] Strong induction permits proving a property at degree $n$ from all smaller degrees ([[thm-strong-induction]]).

[F2] A positive-degree polynomial has a root $\alpha$ in an extension such that, for $K=F(\alpha)$, it factors in $K[x]$ as $(x-\alpha)g$ with $\deg g=\deg f-1$ ([[lem-adjoining-one-root-reduces-the-unsplit-degree]]).

[F3] A splitting field is an extension over which the polynomial splits and which is generated by all its roots; a nonzero constant splits over the base field ([[def-polynomials-that-split-and-splitting-fields]]).

## Proof

**Proof technique:** strong induction on degree.

1.1 Let $P(n)$ assert the theorem for every field and every nonzero polynomial of degree $n$. We prove $P(n)$ for all $n$ by [F1]. [F1]

1.2 If $n=0$, the polynomial is a nonzero constant. It splits over $F$, and its empty root set generates $F$, so $F$ itself is a splitting field. [F3, base]

1.3 Let $n\ge1$ and assume $P(m)$ for every $m<n$. By [F2], choose a root $\alpha$, put $K=F(\alpha)$, and choose $g\in K[x]$ with $f=(x-\alpha)g$ and $\deg g=n-1<n$. [F2, ih]

2.1 The induction hypothesis over the field $K$ gives a splitting field $L/K$ of $g$. Then $f$ splits over $L$ by [F2], and $L=K(\text{roots of }g)=F(\alpha,\text{roots of }g)$ is generated over $F$ by roots of $f$. Thus $L/F$ is a splitting field of $f$. [F2, F3, step 1.3, ih]

3.1 Steps 1.2, 1.3, and 2.1 verify the strong-induction hypothesis at every $n$, so [F1] proves the theorem. [F1, step 1.1, step 1.2, step 1.3, step 2.1, discharge-induction] ∎

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
