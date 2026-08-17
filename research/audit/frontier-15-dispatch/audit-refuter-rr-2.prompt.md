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
label: rr-2

run: frontier-15
role: refuter
label: rr-2
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

## ITEM: thm-unit-square-criterion-modulo-two-powers

```markdown
---
id: thm-unit-square-criterion-modulo-two-powers
kind: theorem
title: "Unit square criterion and root count modulo powers of two"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-unit-group-modulo-two-power-structure]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, §B.VII"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.4"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

Let $a$ be odd.

- Modulo $2$, the congruence $x^2\equiv a\pmod2$ has exactly one solution class.
- Modulo $4$, it is soluble if and only if $a\equiv1\pmod4$, and then it has exactly two solution classes.
- For $k\ge3$, the congruence $x^2\equiv a\pmod{2^k}$ is soluble if and only if $a\equiv1\pmod8$; when soluble, the number of roots is one for modulus $2$, two for modulus $4$, and four for modulus $2^k$ with $k\ge3$.

## Facts & Assumptions

**Given:** An odd integer $a$ and an integer exponent $k\ge1$.

[L1] For $k\ge3$, every unit modulo $2^k$ has a unique representation $(-1)^\varepsilon5^j$ with $\varepsilon\in\{0,1\}$ and $j$ modulo $2^{k-2}$ ([[thm-unit-group-modulo-two-power-structure]]).

## Proof

**Proof technique:** direct.

1.1 Modulo $2$, the unique odd class is $1$ and its square is $1$. Modulo $4$, the odd classes $1$ and $3$ both square to $1$, so an odd target is soluble exactly when it is $1$ modulo $4$, and then both odd classes are roots. [given, algebra]

1.2 Let $k\ge3$ and write a unit uniquely as $(-1)^\varepsilon5^j$ by [L1]. Squaring sends $(\varepsilon,j)$ to $(0,2j)$, so a unit is a square exactly when $\varepsilon=0$ and $j$ is even. Modulo $8$, the four coordinate-parity possibilities give residues $1,5,7,3$, respectively, so this condition is equivalent to $a\equiv1\pmod8$. [L1, algebra]

2.1 The kernel of the squaring map in the coordinates of [L1] has the two choices for $\varepsilon$ and the two solutions of $2j=0$ modulo $2^{k-2}$, hence has four elements. Every nonempty fibre of a group homomorphism is a translate of its kernel, so every soluble target for $k\ge3$ has exactly four roots. Together with step 1.1, this proves all criteria and counts. [step 1.1, step 1.2, L1, algebra] ∎

```

### Recorded proof contract for thm-unit-square-criterion-modulo-two-powers

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-unit-group-modulo-two-power-structure",
   "source_section": "Statement",
   "quote": "More precisely, every unit has a unique representation $(-1)^\\varepsilon5^j$ with $\\varepsilon\\in\\{0,1\\}$ and $j$ modulo $2^{k-2}$.",
   "uses": [
    "1.2",
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Modulo $2$, the unique odd class is $1$ and its square is $1$. Modulo $4$, the odd classes $1$ and $3$ both square to $1$, so an odd target is soluble exactly when it is $1$ modulo $4$, and then both odd classes are roots.",
   "step": "1.1",
   "inputs": [
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "Let $k\\ge3$ and write a unit uniquely as $(-1)^\\varepsilon5^j$ by [L1]. Squaring sends $(\\varepsilon,j)$ to $(0,2j)$, so a unit is a square exactly when $\\varepsilon=0$ and $j$ is even. Modulo $8$, the four coordinate-parity possibilities give residues $1,5,7,3$, respectively, so this condition is equivalent to $a\\equiv1\\pmod8$.",
   "step": "1.2",
   "inputs": [
    "L1",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "The kernel of the squaring map in the coordinates of [L1] has the two choices for $\\varepsilon$ and the two solutions of $2j=0$ modulo $2^{k-2}$, hence has four elements. Every nonempty fibre of a group homomorphism is a translate of its kernel, so every soluble target for $k\\ge3$ has exactly four roots. Together with step 1.1, this proves all criteria and counts.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "step 1.2",
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
   "reason": "The proof concerns one power of two and no factor list."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "The theorem explicitly assumes the target is odd, hence a unit."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Step 1.1 handles exponent one and its unique root."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Step 1.1 handles exponents one and two before [L1] is used at exponent at least three."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "The transition from exponent two to exponent three is explicit in steps 1.1–1.2."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Unique coordinates in [L1] replace all representative choices."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "Steps 1.1–1.2 derive the necessary congruence in each exponent range."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "Steps 1.1–2.1 prove solubility and the root count whenever the congruence criterion holds."
  }
 ],
 "finite_smoke": [
  {
   "check": "binomial-congruence-solution-count",
   "asserts": "- Modulo $2$, the congruence $x^2\\equiv a\\pmod2$ has exactly one solution class.\n- Modulo $4$, it is soluble if and only if $a\\equiv1\\pmod4$, and then it has exactly two solution classes.",
   "claim": "PARTIAL BY CONSTRUCTION, and deliberately so: 2 and 4 are the only powers of two carrying a primitive root, so they are precisely the part of this statement the check can reach. It computes gcd(phi(2), 2) = 1 and gcd(phi(4), 2) = 2 against the actual counts, which is an off-by-one test on these two clauses. The k >= 3 clause (four roots) has no primitive root, is skipped by the check, and rests on step 2.1 and the human read alone.",
   "checked_in": "step 1.1"
  }
 ]
}
```

## ITEM: thm-jacobi-map-kernel-and-square-subgroup

```markdown
---
id: thm-jacobi-map-kernel-and-square-subgroup
kind: theorem
title: "The kernel of the Jacobi map and the subgroup of unit squares"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-jacobi-symbol-on-units-is-a-homomorphism,
       prop-unit-square-has-jacobi-symbol-one,
       thm-unit-square-criterion-modulo-odd-prime-powers,
       cor-number-of-square-roots-of-a-unit-modulo-n,
       thm-unit-group-modulo-odd-prime-power-is-cyclic,
       thm-unit-group-chinese-remainder-decomposition,
       def-kernel-and-image-of-group-homomorphism,
       def-jacobi-symbol, thm-canonical-prime-factorisation,
       lem-p-adic-valuation-additive, thm-first-isomorphism-theorem-groups,
       thm-lagrange, def-index, cor-index-tower-finite]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., Exercise 12.3"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

Let $n=\prod_{i<r}p_i^{e_i}$ be an odd positive integer in canonical prime factorisation, let $U_n=(\mathbb Z/n)^\times$, and let $U_n^2=\{u^2:u\in U_n\}$. Then

$$U_n^2\le\ker\chi_n,\qquad [U_n:U_n^2]=2^r.$$

The Jacobi homomorphism $\chi_n$ is trivial if and only if $n$ is a square. Consequently,

$$[\ker\chi_n:U_n^2]=\begin{cases}2^r,&n\text{ is a square},\\2^{r-1},&n\text{ is not a square}.\end{cases}$$

For $n=1$, one has $r=0$ and every group and index above is trivial and equal to one.

## Facts & Assumptions

**Given:** An odd positive integer $n=\prod_{i<r}p_i^{e_i}$ in canonical prime factorisation and its unit group $U_n$.

[L1] The assignment $\chi_n([a]_n)=\left(\frac an\right)$ is a group homomorphism $U_n\to\{\pm1\}$ ([[prop-jacobi-symbol-on-units-is-a-homomorphism]]).

[L2] Every unit square modulo an odd positive integer has Jacobi symbol one ([[prop-unit-square-has-jacobi-symbol-one]]).

[L3] For odd $n=\prod_{i<r}p_i^{e_i}$, the soluble unit congruence $x^2\equiv a\pmod n$ has exactly $2^r$ roots ([[cor-number-of-square-roots-of-a-unit-modulo-n]]).

[L4] For every odd prime $p$ and $k\ge1$, the group $(\mathbb Z/p^k)^\times$ is cyclic of even order $p^{k-1}(p-1)$ ([[thm-unit-group-modulo-odd-prime-power-is-cyclic]]).

[L5] The Chinese remainder map gives $U_n\cong\prod_{i<r}(\mathbb Z/p_i^{e_i})^\times$, including the empty factorisation ([[thm-unit-group-chinese-remainder-decomposition]]).

[L6] For a group homomorphism $f:G\to H$, one has $G/\ker f\cong\operatorname{im}f$ ([[thm-first-isomorphism-theorem-groups]]).

[L7] If $G$ is finite and $H\le G$, then $|G|=[G:H]|H|$ ([[thm-lagrange]]).

[L8] For a finite-index subgroup, $[G:H]=|G/H|$ ([[def-index]]).

[L9] If $K\le H\le G$ and $G$ is finite, then $[G:K]=[G:H][H:K]$ ([[cor-index-tower-finite]]).

[L10] For an odd prime $p$, a unit is a square modulo $p^k$ if and only if its Legendre symbol modulo $p$ is one ([[thm-unit-square-criterion-modulo-odd-prime-powers]]).

[L11] For a homomorphism $f:G\to H$, $\ker f=\{g\in G:f(g)=e_H\}$ and $\operatorname{im}f=\{f(g):g\in G\}$ ([[def-kernel-and-image-of-group-homomorphism]]).

[L12] Canonical prime-factor exponents are determined by the integer ([[thm-canonical-prime-factorisation]]).

[L13] For a prime $p$ and nonzero integers $u,v$, $v_p(uv)=v_p(u)+v_p(v)$ ([[lem-p-adic-valuation-additive]]).

[L14] The Jacobi symbol is the product of the prime Legendre symbols with their canonical multiplicities ([[def-jacobi-symbol]]).

## Proof

**Proof technique:** direct.

1.1 Since $U_n$ is abelian, the squaring map $s:U_n\to U_n$, $s(u)=u^2$, is a homomorphism with image $U_n^2$. By [L2] and the kernel definition [L11], every element of $U_n^2$ lies in $\ker\chi_n$, so $U_n^2\le\ker\chi_n$. [L1, L2, L11, algebra]

1.2 The kernel of $s$ is the root set of $x^2=1$, which has $2^r$ elements by [L3]. Applying [L6] to $s$ and then [L7] and [L8] gives $[U_n:U_n^2]=|\ker s|=2^r$. This also holds for $r=0$, when [L5] identifies $U_1$ with the one-element group. [L3, L5, L6, L7, L8, algebra]

1.3 By [L12] and [L13], $n$ is a square exactly when every exponent $e_i$ is even. In that case [L14] makes every value of $\chi_n$ equal to $1$. If some $e_j$ is odd, [L4] supplies a generator, hence a nonsquare, in $(\mathbb Z/p_j^{e_j})^\times$; [L10] gives it Legendre symbol $-1$. Combine it with identity elements in the other factors by [L5]. Formula [L14] gives the resulting global unit Jacobi value $-1$, so [L1] is surjective. Therefore $\chi_n$ is trivial exactly when $n$ is a square. [L1, L4, L5, L10, L12, L13, L14, choose]

2.1 If $n$ is a square, step 1.3 gives $\ker\chi_n=U_n$, so step 1.2 yields $[\ker\chi_n:U_n^2]=2^r$. Otherwise [L1], [L6], [L7], [L8], and [L11] give $[U_n:\ker\chi_n]=2$; applying [L9] to $U_n^2\le\ker\chi_n\le U_n$ and using step 1.2 gives $[\ker\chi_n:U_n^2]=2^{r-1}$. [step 1.1, step 1.2, step 1.3, L1, L6, L7, L8, L9, L11, algebra] ∎

```

### Recorded proof contract for thm-jacobi-map-kernel-and-square-subgroup

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
    "1.3",
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "prop-unit-square-has-jacobi-symbol-one",
   "source_section": "Statement",
   "quote": "If $a$ is a unit square modulo an odd positive integer $n$, then $\\left(\\frac an\\right)=1$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "cor-number-of-square-roots-of-a-unit-modulo-n",
   "source_section": "Statement",
   "quote": "For odd $n=\\prod_{i<r}p_i^{e_i}$, the soluble unit congruence $x^2\\equiv a\\pmod n$ has exactly $2^r$ roots.",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-unit-group-modulo-odd-prime-power-is-cyclic",
   "source_section": "Statement",
   "quote": "For every odd prime $p$ and integer $k\\ge1$, the group $(\\mathbb Z/p^k)^\\times$ is cyclic of order\n\n$$\\varphi(p^k)=p^{k-1}(p-1).$$",
   "uses": [
    "1.3"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-unit-group-chinese-remainder-decomposition",
   "source_section": "Statement",
   "quote": "Let $n_0,\\ldots,n_{r-1}$ be pairwise coprime positive integers and $N=\\prod_{i<r}n_i$. The Chinese remainder map restricts to a group isomorphism\n\n$$ (\\mathbb Z/N)^\\times\\cong\\prod_{i<r}(\\mathbb Z/n_i)^\\times.$$\n\nFor the empty list this identifies the two one-element groups.",
   "uses": [
    "1.2",
    "1.3"
   ]
  },
  {
   "fact": "L6",
   "source": "thm-first-isomorphism-theorem-groups",
   "source_section": "Statement",
   "quote": "First isomorphism theorem for groups: $G/\\ker f\\cong\\operatorname{im}f$.",
   "uses": [
    "1.2",
    "2.1"
   ]
  },
  {
   "fact": "L7",
   "source": "thm-lagrange",
   "source_section": "Statement",
   "quote": "$$|G|=[G:H]\\,|H|.$$",
   "uses": [
    "1.2",
    "2.1"
   ]
  },
  {
   "fact": "L8",
   "source": "def-index",
   "source_section": "Definition",
   "quote": "$$[G:H]:=|G/H|$$",
   "uses": [
    "1.2",
    "2.1"
   ]
  },
  {
   "fact": "L9",
   "source": "cor-index-tower-finite",
   "source_section": "Statement",
   "quote": "$$[G:K]=[G:H][H:K].$$",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L10",
   "source": "thm-unit-square-criterion-modulo-odd-prime-powers",
   "source_section": "Statement",
   "quote": "For an odd prime $p$, $k\\ge1$, and $p\\nmid a$, the congruence $x^2\\equiv a\\pmod{p^k}$ is soluble if and only if $\\left(\\frac ap\\right)=1$.",
   "uses": [
    "1.3"
   ]
  },
  {
   "fact": "L11",
   "source": "def-kernel-and-image-of-group-homomorphism",
   "source_section": "Definition",
   "quote": "$$\\ker f:=\\{g\\in G:f(g)=e_H\\},\\qquad\\operatorname{im}f:=\\{f(g):g\\in G\\}.$$",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L12",
   "source": "thm-canonical-prime-factorisation",
   "source_section": "Statement",
   "quote": "the exponents are determined by $n$",
   "uses": [
    "1.3"
   ]
  },
  {
   "fact": "L13",
   "source": "lem-p-adic-valuation-additive",
   "source_section": "Statement",
   "quote": "$$v_p(ab) \\;=\\; v_p(a) + v_p(b),$$",
   "uses": [
    "1.3"
   ]
  },
  {
   "fact": "L14",
   "source": "def-jacobi-symbol",
   "source_section": "Definition",
   "quote": "For odd $n\\ge1$ with canonical prime factorisation $n=\\prod_{i<r}p_i^{e_i}$, define $\\left(\\frac an\\right):=\\prod_{i<r}\\left(\\frac a{p_i}\\right)^{e_i}$.",
   "uses": [
    "1.3"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Since $U_n$ is abelian, the squaring map $s:U_n\\to U_n$, $s(u)=u^2$, is a homomorphism with image $U_n^2$. By [L2] and the kernel definition [L11], every element of $U_n^2$ lies in $\\ker\\chi_n$, so $U_n^2\\le\\ker\\chi_n$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L11",
    "algebra"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "The kernel of $s$ is the root set of $x^2=1$, which has $2^r$ elements by [L3]. Applying [L6] to $s$ and then [L7] and [L8] gives $[U_n:U_n^2]=|\\ker s|=2^r$. This also holds for $r=0$, when [L5] identifies $U_1$ with the one-element group.",
   "step": "1.2",
   "inputs": [
    "L3",
    "L5",
    "L6",
    "L7",
    "L8",
    "algebra"
   ]
  },
  {
   "id": "step-1-3",
   "claim": "By [L12] and [L13], $n$ is a square exactly when every exponent $e_i$ is even. In that case [L14] makes every value of $\\chi_n$ equal to $1$. If some $e_j$ is odd, [L4] supplies a generator, hence a nonsquare, in $(\\mathbb Z/p_j^{e_j})^\\times$; [L10] gives it Legendre symbol $-1$. Combine it with identity elements in the other factors by [L5]. Formula [L14] gives the resulting global unit Jacobi value $-1$, so [L1] is surjective. Therefore $\\chi_n$ is trivial exactly when $n$ is a square.",
   "step": "1.3",
   "inputs": [
    "L1",
    "L4",
    "L5",
    "L10",
    "L12",
    "L13",
    "L14",
    "choose"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "If $n$ is a square, step 1.3 gives $\\ker\\chi_n=U_n$, so step 1.2 yields $[\\ker\\chi_n:U_n^2]=2^r$. Otherwise [L1], [L6], [L7], [L8], and [L11] give $[U_n:\\ker\\chi_n]=2$; applying [L9] to $U_n^2\\le\\ker\\chi_n\\le U_n$ and using step 1.2 gives $[\\ker\\chi_n:U_n^2]=2^{r-1}$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "step 1.2",
    "step 1.3",
    "L1",
    "L6",
    "L7",
    "L8",
    "L9",
    "L11",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "Steps 1.2 and 2.1 include $n=1$, where $r=0$, the unit group is trivial, and the relevant index is $2^0=1$."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "The character is restricted to units, so the Jacobi zero value is outside its domain."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "The modulus-one and index-one boundary is explicit in steps 1.2 and 2.1."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Step 1.3 separates square denominators, where the character is trivial, from nonsquare denominators, where it is surjective."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "There is no ordered interval; $r=0$ is handled as the empty-factor boundary."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "Step 1.3 chooses a local nonsquare only after [L4] proves a generator exists, and [L5] supplies the global class."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "Step 1.3 proves that all prime exponents even implies the Jacobi map is trivial."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "Step 1.3 constructs a unit of Jacobi value minus one whenever some exponent is odd."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-complete-reciprocity-table-for-small-odd-primes

```markdown
---
id: ex-complete-reciprocity-table-for-small-odd-primes
kind: example
title: "A complete reciprocity table for $3,5,7,11$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-quadratic-reciprocity, def-legendre-symbol]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The nonzero square classes for the primes $3,5,7,11$ are

| $p$ | nonzero squares modulo $p$ |
|---:|:---|
| $3$ | $1$ |
| $5$ | $1,4$ |
| $7$ | $1,2,4$ |
| $11$ | $1,3,4,5,9$ |

Using the definition of the Legendre symbol ([[def-legendre-symbol]]) gives the complete pair table

| $\{p,q\}$ | $(p/q)$ | $(q/p)$ | relation |
|:---:|:---:|:---:|:---|
| $\{3,5\}$ | $-1$ | $-1$ | agree |
| $\{3,7\}$ | $-1$ | $1$ | opposite |
| $\{3,11\}$ | $1$ | $-1$ | opposite |
| $\{5,7\}$ | $-1$ | $-1$ | agree |
| $\{5,11\}$ | $1$ | $1$ | agree |
| $\{7,11\}$ | $-1$ | $1$ | opposite |

The signs are opposite exactly when both primes are congruent to $3$ modulo $4$, as predicted by quadratic reciprocity ([[thm-quadratic-reciprocity]]).

## Facts & Assumptions

**Given:** The primes $3,5,7,11$ and the residue tables displayed in the Example.

[L1] For distinct odd primes $p,q$, $\left(\frac pq\right)\left(\frac qp\right)=(-1)^{(p-1)(q-1)/4}$ ([[thm-quadratic-reciprocity]]).

[L2] For an odd prime $p$, the Legendre symbol is $1$ on nonzero square classes, $-1$ on nonzero nonsquare classes, and $0$ on the zero class ([[def-legendre-symbol]]).

## Verification

**Proof technique:** direct.

1.1 Squaring every residue class modulo each prime gives the displayed nonzero square sets. Reading the residues of each numerator from those sets by [L2] gives all entries in the pair table. [L2, given, algebra]

2.1 For the pairs $\{3,7\}$, $\{3,11\}$, and $\{7,11\}$ both primes are $3$ modulo $4$ and the direct signs are opposite; in every other row at least one prime is $1$ modulo $4$ and the signs agree. Each row therefore has the product required by [L1]. [step 1.1, L1, algebra] ∎

```

### Recorded proof contract for ex-complete-reciprocity-table-for-small-odd-primes

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-quadratic-reciprocity",
   "source_section": "Statement",
   "quote": "For distinct odd primes $p,q$, $\\left(\\frac pq\\right)\\left(\\frac qp\\right)=(-1)^{(p-1)(q-1)/4}$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-legendre-symbol",
   "source_section": "Definition",
   "quote": "$$\\left(\\frac ap\\right):=\\begin{cases}0,&p\\mid a,\\\\1,&p\\nmid a\\text{ and }a\\text{ is a quadratic residue modulo }p,\\\\-1,&p\\nmid a\\text{ and }a\\text{ is a quadratic nonresidue modulo }p.\\end{cases}$$",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Squaring every residue class modulo each prime gives the displayed nonzero square sets. Reading the residues of each numerator from those sets by [L2] gives all entries in the pair table.",
   "step": "1.1",
   "inputs": [
    "L2",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "For the pairs $\\{3,7\\}$, $\\{3,11\\}$, and $\\{7,11\\}$ both primes are $3$ modulo $4$ and the direct signs are opposite; in every other row at least one prime is $1$ modulo $4$ and the signs agree. Each row therefore has the product required by [L1].",
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
   "reason": "The displayed prime set is explicitly nonempty and fixed."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Statement boundary: the table uses distinct primes, so no numerator is zero modulo its denominator."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "Every modulus in the table is at least three."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Statement boundary: only unordered pairs of distinct primes are tabulated; diagonal pairs are explicitly omitted."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "Step 1.1 enumerates every residue class from zero through $p-1$ before extracting nonzero squares."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "The square tables are exhaustively enumerated rather than sampled."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The statement of the small-prime reciprocity table is not a biconditional."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The statement of the small-prime reciprocity table is not a biconditional."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-square-roots-modulo-an-odd-prime-power

```markdown
---
id: ex-square-roots-modulo-an-odd-prime-power
kind: example
title: "Lifting both square roots of $2$ from modulo $7$ to modulo $7^4$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-nonsingular-square-root-lift-modulo-odd-prime-powers,
       thm-unit-square-criterion-modulo-odd-prime-powers]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The two roots of $2$ lift along the powers of $7$ as follows:

| modulus | first branch | second branch |
|---:|---:|---:|
| $7$ | $3$ | $4$ |
| $49$ | $10$ | $39$ |
| $343$ | $108$ | $235$ |
| $2401$ | $2166$ | $235$ |

Thus the square roots of $2$ modulo $7^4=2401$ are the classes of $235$ and $2166$.

## Facts & Assumptions

**Given:** The target $a=2$, the odd prime $p=7$, and the two roots $3,4$ modulo $7$.

[L1] A nonsingular root modulo $p^k$ has a unique lift of the form $x_k+tp^k$ modulo $p^{k+1}$, with $t$ uniquely determined modulo $p$ ([[lem-nonsingular-square-root-lift-modulo-odd-prime-powers]]).

[L2] A soluble unit square congruence modulo an odd prime power has exactly two solution classes ([[thm-unit-square-criterion-modulo-odd-prime-powers]]).

## Verification

**Proof technique:** direct.

1.1 Direct squaring gives the roots $3,4$ modulo $7$. Solving the correction congruence of [L1] on each branch gives corrections $(1,5)$ modulo $7$ for the lift to $49$, then $(2,4)$ for the lift to $343$, and finally $(6,0)$ for the lift to $2401$; these yield the two displayed chains $3\mapsto10\mapsto108\mapsto2166$ and $4\mapsto39\mapsto235\mapsto235$. [L1, given, algebra]

2.1 One has $235^2=23\cdot2401+2$ and $2166^2=1954\cdot2401+2$, so both final classes are roots. They are distinct, and [L2] says a soluble unit congruence has exactly two roots, so the list is complete. [step 1.1, L2, algebra] ∎

```

### Recorded proof contract for ex-square-roots-modulo-an-odd-prime-power

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "lem-nonsingular-square-root-lift-modulo-odd-prime-powers",
   "source_section": "Statement",
   "quote": "Let $p$ be an odd prime, let $k\\ge1$, and let $a,x_k\\in\\mathbb Z$ satisfy $p\\nmid a$ and $x_k^2\\equiv a\\pmod{p^k}$. Then there is a unique class $t\\pmod p$ such that $(x_k+tp^k)^2\\equiv a\\pmod{p^{k+1}}$.\n\nEquivalently, the root class of $x_k$ modulo $p^k$ has exactly one lift to a root class modulo $p^{k+1}$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-unit-square-criterion-modulo-odd-prime-powers",
   "source_section": "Statement",
   "quote": "When soluble it has exactly two solution classes modulo $p^k$.",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Direct squaring gives the roots $3,4$ modulo $7$. Solving the correction congruence of [L1] on each branch gives corrections $(1,5)$ modulo $7$ for the lift to $49$, then $(2,4)$ for the lift to $343$, and finally $(6,0)$ for the lift to $2401$; these yield the two displayed chains $3\\mapsto10\\mapsto108\\mapsto2166$ and $4\\mapsto39\\mapsto235\\mapsto235$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "One has $235^2=23\\cdot2401+2$ and $2166^2=1954\\cdot2401+2$, so both final classes are roots. They are distinct, and [L2] says a soluble unit congruence has exactly two roots, so the list is complete.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L2",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "Two explicit base roots are supplied and both branches are followed."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Statement boundary: the target two is a unit modulo seven, so [L1] is nonsingular at every step."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Statement boundary: the lift begins at exponent one before reaching exponent four."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Statement boundary: both sign-related base roots are retained; neither branch is collapsed into the other."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "Step 1.1 records every exponent from one through four without skipping an endpoint."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "Statement boundary: the two base roots are verified directly and every lift correction is unique by [L1]."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The statement of the odd-prime-power lifting example is not a biconditional."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The statement of the odd-prime-power lifting example is not a biconditional."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-square-roots-modulo-a-composite-by-crt

```markdown
---
id: ex-square-roots-modulo-a-composite-by-crt
kind: example
title: "The square roots of $1$ modulo $360$ by the Chinese remainder theorem"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [thm-unit-square-criterion-modulo-n,
       cor-number-of-square-roots-of-a-unit-modulo-n]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Example

The square roots of $1$ modulo $360$ are

$$1,19,71,89,91,109,161,179,181,199,251,269,271,289,341,359.$$

## Facts & Assumptions

**Given:** The factorisation $360=8\cdot9\cdot5$ into pairwise coprime prime powers.

[L1] A unit is a square modulo $n$ if and only if it is a square modulo every prime-power factor of $n$ ([[thm-unit-square-criterion-modulo-n]]).

[L2] The number of square roots of a soluble unit is the product of the local root counts ([[cor-number-of-square-roots-of-a-unit-modulo-n]]).

## Verification

**Proof technique:** direct.

1.1 The roots of $1$ are $1,3,5,7$ modulo $8$, are $1,8$ modulo $9$, and are $1,4$ modulo $5$. By [L1], every combination of these local roots gives a global root, and [L2] gives $4\cdot2\cdot2=16$ global roots. [L1, L2, given, algebra]

2.1 Solving the finite CRT systems and reducing modulo $360$ gives exactly the displayed representatives. They are distinct, and reducing each one modulo $8$, $9$, and $5$ places it in the corresponding local root set from step 1.1, so [L1] verifies that each square is $1$ modulo $360$; the count in [L2] proves completeness. [step 1.1, L1, L2, algebra] ∎

```

### Recorded proof contract for ex-square-roots-modulo-a-composite-by-crt

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-unit-square-criterion-modulo-n",
   "source_section": "Statement",
   "quote": "A unit is a square modulo $n$ if and only if it is a square modulo every prime-power factor of $n$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "cor-number-of-square-roots-of-a-unit-modulo-n",
   "source_section": "Statement",
   "quote": "The number of square roots is the product of the local root counts.",
   "uses": [
    "1.1",
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The roots of $1$ are $1,3,5,7$ modulo $8$, are $1,8$ modulo $9$, and are $1,4$ modulo $5$. By [L1], every combination of these local roots gives a global root, and [L2] gives $4\\cdot2\\cdot2=16$ global roots.",
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
   "claim": "Solving the finite CRT systems and reducing modulo $360$ gives exactly the displayed representatives. They are distinct, and reducing each one modulo $8$, $9$, and $5$ places it in the corresponding local root set from step 1.1, so [L1] verifies that each square is $1$ modulo $360$; the count in [L2] proves completeness.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L1",
    "L2",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "The explicit prime-power factor list has three entries."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Statement boundary: the target one is a unit in every local modulus, and zero is excluded from each root list."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Statement boundary: the target is the identity unit and all of its local preimages are counted."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Statement boundary: the factors $8,9,5$ are pairwise coprime and include both the two-part and repeated odd-prime part."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "Step 2.1 reduces and verifies every listed class in the range from zero through 359."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "Statement boundary: every local tuple is exhaustively combined; no unlicensed representative selection affects completeness."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The statement of the CRT square-root example modulo 360 is not a biconditional."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The statement of the CRT square-root example modulo 360 is not a biconditional."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: cex-square-modulo-each-prime-does-not-ignore-the-two-part

```markdown
---
id: cex-square-modulo-each-prime-does-not-ignore-the-two-part
kind: counterexample
title: "Odd-prime tests alone miss the obstruction to $13$ being a square modulo $24$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
deps: [thm-unit-square-criterion-modulo-two-powers,
       thm-unit-square-criterion-modulo-n]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references: []
pipeline_run: null
---

## Statement refuted

For an even modulus, testing whether a unit is a square modulo every odd prime divisor does not suffice to prove that it is a square modulo the original modulus.

## Facts & Assumptions

**Given:** The unit $13$ modulo $24=8\cdot3$.

[L1] For $k\ge3$, an odd integer is a square modulo $2^k$ if and only if it is congruent to $1$ modulo $8$ ([[thm-unit-square-criterion-modulo-two-powers]]).

[L2] A unit square modulo $n$ is a square modulo every prime-power factor of $n$ ([[thm-unit-square-criterion-modulo-n]]).

## Counterexample

**Proof technique:** direct.

1.1 The only odd prime divisor of $24$ is $3$, and $13\equiv1\pmod3$, so it passes the odd-prime square test. But $13\equiv5\pmod8$, and [L1] shows that it is not a square modulo $8$. [L1, given, algebra]

2.1 If $13$ were a square modulo $24$, the forward implication in [L2] would make it a square modulo the prime-power factor $8$, contradicting step 1.1. Hence the odd-prime test misses the two-part obstruction. [step 1.1, L2] ∎

```

### Recorded proof contract for cex-square-modulo-each-prime-does-not-ignore-the-two-part

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-unit-square-criterion-modulo-two-powers",
   "source_section": "Statement",
   "quote": "For $k\\ge3$, the congruence $x^2\\equiv a\\pmod{2^k}$ is soluble if and only if $a\\equiv1\\pmod8$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-unit-square-criterion-modulo-n",
   "source_section": "Statement",
   "quote": "A unit is a square modulo $n$ if and only if it is a square modulo every prime-power factor of $n$.",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The only odd prime divisor of $24$ is $3$, and $13\\equiv1\\pmod3$, so it passes the odd-prime square test. But $13\\equiv5\\pmod8$, and [L1] shows that it is not a square modulo $8$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "If $13$ were a square modulo $24$, the forward implication in [L2] would make it a square modulo the prime-power factor $8$, contradicting step 1.1. Hence the odd-prime test misses the two-part obstruction.",
   "step": "2.1",
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
   "status": "not_applicable",
   "reason": "The modulus has explicit nonempty prime-factor data."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Statement boundary: the witness 13 is coprime to 24, so it is a unit in every tested component."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Statement boundary: the odd-prime test succeeds because the witness reduces to the square one modulo three."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Statement boundary: the example separates the odd prime divisor from the nontrivial $2^3$ factor."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "No ordered interval or truncated list is used."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "The witness and both modular reductions are explicit."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The statement of the missing two-part counterexample is not a biconditional."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The statement of the missing two-part counterexample is not a biconditional."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-primes-dividing-x-squared-plus-three

```markdown
---
id: ex-primes-dividing-x-squared-plus-three
kind: example
title: "Odd primes represented by a divisor of $x^2+3$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-quadratic-reciprocity,
       thm-first-supplement-to-quadratic-reciprocity,
       thm-legendre-symbol-multiplicativity, def-legendre-symbol]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Gorodnik, Number Theory, Lecture 9, Example 2.4"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Example

An odd prime $p$ divides $x^2+3$ for some integer $x$ if and only if $p=3$ or $p\equiv1\pmod3$. Equivalently, for every odd prime $p\ne3$, the congruence $x^2\equiv-3\pmod p$ is soluble if and only if $p\equiv1\pmod3$.

## Facts & Assumptions

**Given:** An odd prime $p$.

[L1] For distinct odd primes $p,q$, $\left(\frac pq\right)\left(\frac qp\right)=(-1)^{(p-1)(q-1)/4}$ ([[thm-quadratic-reciprocity]]).

[L2] For every odd prime $p$, $\left(\frac{-1}{p}\right)=(-1)^{(p-1)/2}$ ([[thm-first-supplement-to-quadratic-reciprocity]]).

[L3] For an odd prime $p$, the Legendre symbol is $1$ exactly on the nonzero square classes modulo $p$ ([[def-legendre-symbol]]).

[L4] For every odd prime $p$ and integers $a,b$, $\left(\frac{ab}{p}\right)=\left(\frac ap\right)\left(\frac bp\right)$ ([[thm-legendre-symbol-multiplicativity]]).

## Verification

**Proof technique:** direct.

1.1 Suppose $p\ne3$. Applying [L1] to $3$ and $p$ gives $(3/p)(p/3)=(-1)^{(p-1)/2}=(-1/p)$ by [L2]. Since $(3/p)$ is a sign and [L4] gives $(-3/p)=(-1/p)(3/p)$, multiplication by $(3/p)$ yields $(-3/p)=(p/3)$. [L1, L2, L4, given, algebra]

2.1 By [L3], $x^2\equiv-3\pmod p$ is soluble exactly when $(-3/p)=1$. For $p\ne3$, step 1.1 makes this equivalent to $(p/3)=1$, and the nonzero square classes modulo $3$ consist only of $1$, so this is equivalent to $p\equiv1\pmod3$. For $p=3$, the class $x=0$ directly satisfies $x^2\equiv-3\pmod3$. [step 1.1, L3, algebra] ∎

```

### Recorded proof contract for ex-primes-dividing-x-squared-plus-three

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-quadratic-reciprocity",
   "source_section": "Statement",
   "quote": "For distinct odd primes $p,q$, $\\left(\\frac pq\\right)\\left(\\frac qp\\right)=(-1)^{(p-1)(q-1)/4}$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-first-supplement-to-quadratic-reciprocity",
   "source_section": "Statement",
   "quote": "$$\\left(\\frac{-1}{p}\\right)=(-1)^{(p-1)/2}.$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-legendre-symbol",
   "source_section": "Definition",
   "quote": "$$\\left(\\frac ap\\right):=\\begin{cases}0,&p\\mid a,\\\\1,&p\\nmid a\\text{ and }a\\text{ is a quadratic residue modulo }p,\\\\-1,&p\\nmid a\\text{ and }a\\text{ is a quadratic nonresidue modulo }p.\\end{cases}$$",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-legendre-symbol-multiplicativity",
   "source_section": "Statement",
   "quote": "$$\\left(\\frac{ab}{p}\\right)=\\left(\\frac ap\\right)\\left(\\frac bp\\right).$$",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Suppose $p\\ne3$. Applying [L1] to $3$ and $p$ gives $(3/p)(p/3)=(-1)^{(p-1)/2}=(-1/p)$ by [L2]. Since $(3/p)$ is a sign and [L4] gives $(-3/p)=(-1/p)(3/p)$, multiplication by $(3/p)$ yields $(-3/p)=(p/3)$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L4",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "By [L3], $x^2\\equiv-3\\pmod p$ is soluble exactly when $(-3/p)=1$. For $p\\ne3$, step 1.1 makes this equivalent to $(p/3)=1$, and the nonzero square classes modulo $3$ consist only of $1$, so this is equivalent to $p\\equiv1\\pmod3$. For $p=3$, the class $x=0$ directly satisfies $x^2\\equiv-3\\pmod3$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L3",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "The argument concerns one fixed odd prime at a time."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Step 2.1 separates $p=3$, where the numerator minus three is zero modulo the denominator."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "The square class one modulo three is the successful residue class used in step 2.1."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Statement boundary: the exceptional prime three is stated separately rather than inserted into reciprocity for distinct primes."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "Step 2.1 checks both nonzero residue classes modulo three."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Solvability is characterised without selecting a square root."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "Steps 1.1–2.1 show a root forces $p\\equiv1\\pmod3$ for $p\\ne3$."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "Steps 1.1–2.1 use the Legendre definition to show $p\\equiv1\\pmod3$ supplies a root."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, in full

## DEPENDENCY: thm-unit-group-modulo-two-power-structure

```markdown
---
id: thm-unit-group-modulo-two-power-structure
kind: theorem
title: "For $k\\ge3$, $(\\mathbb Z/2^k\\mathbb Z)^\\times\\cong C_2\\times C_{2^{k-2}}$, generated uniquely as $(-1)^\\varepsilon5^j$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-order-of-five-modulo-two-powers, thm-totient-of-a-prime-power, prop-order-of-finite-direct-product, thm-unit-criterion-modulo-n, def-unit-group-modulo-n-and-euler-totient, def-group-isomorphism-and-automorphism]
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
    - title: "Peter Hackman, Elementary Number Theory, Theorem C.IV.8"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

For every $k\ge3$,

$$ (\mathbb Z/2^k)^\times\cong C_2\times C_{2^{k-2}}.$$

More precisely, every unit has a unique representation $(-1)^\varepsilon5^j$ with $\varepsilon\in\{0,1\}$ and $j$ modulo $2^{k-2}$.

## Facts & Assumptions

**Given:** An integer $k\ge3$.

[L1] The class of $5$ has order $2^{k-2}$ modulo $2^k$ ([[lem-order-of-five-modulo-two-powers]]).

[L2] $\varphi(2^k)=2^{k-1}$ ([[thm-totient-of-a-prime-power]]).

[L3] A direct product of finite groups has the product of their orders ([[prop-order-of-finite-direct-product]]).

[L4] The units modulo $2^k$ are the classes represented by odd integers ([[thm-unit-criterion-modulo-n]]).

[L5] Multiplication modulo $2^k$ is commutative and restricts to the unit group ([[def-unit-group-modulo-n-and-euler-totient]]).

[L6] A bijective group homomorphism is a group isomorphism ([[def-group-isomorphism-and-automorphism]]).

## Proof

**Proof technique:** direct.

1.1 The class of $-1$ has order $2$, and [L1] gives order $2^{k-2}$ for $5$. [L1, algebra]

1.2 Every power of $5$ is $1$ modulo $4$, whereas $-1$ is $3$ modulo $4$; hence $\langle-1\rangle\cap\langle5\rangle=\{1\}$. [algebra]

2.1 The map $C_2\times C_{2^{k-2}}\to(\mathbb Z/2^k)^\times$ given by $(\varepsilon,j)\mapsto(-1)^\varepsilon5^j$ is a homomorphism by [L5], and step 1.2 makes it injective. [step 1.1, step 1.2, L4, L5]

3.1 Its domain has $2^{k-1}$ elements by [L3], equal to the size of the target by [L2]; thus it is bijective. [step 2.1, L2, L3]

4.1 By [L6] the map is an isomorphism, and its bijectivity is exactly the asserted unique representation. [step 3.1, L6] ∎

```

## DEPENDENCY: prop-jacobi-symbol-on-units-is-a-homomorphism

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

## DEPENDENCY: prop-unit-square-has-jacobi-symbol-one

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

## DEPENDENCY: thm-unit-square-criterion-modulo-odd-prime-powers

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

## DEPENDENCY: cor-number-of-square-roots-of-a-unit-modulo-n

```markdown
---
id: cor-number-of-square-roots-of-a-unit-modulo-n
kind: corollary
title: "The number of square roots of a unit modulo $n$ is the product of the local counts"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-unit-square-criterion-modulo-odd-prime-powers,
       thm-unit-square-criterion-modulo-two-powers,
       thm-unit-group-chinese-remainder-decomposition,
       thm-fundamental-theorem-of-arithmetic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, §B.VII"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

Let $[a]_n$ be a unit square modulo $n\ge1$. The number of square roots is the product of the local root counts.

More explicitly, write $n=2^e\prod_{i<r}p_i^{e_i}$ with distinct odd primes $p_i$. The number of roots of $x^2\equiv a\pmod n$ is $2^r c_e$, where

$$c_e=\begin{cases}1,&e=0\text{ or }e=1,\\2,&e=2,\\4,&e\ge3.\end{cases}$$

For odd $n=\prod_{i<r}p_i^{e_i}$, the soluble unit congruence $x^2\equiv a\pmod n$ has exactly $2^r$ roots. At $n=1$ the empty product gives one root.

## Facts & Assumptions

**Given:** A positive integer $n$ and a unit $[a]_n$ for which $x^2\equiv a\pmod n$ is soluble.

[L1] A soluble unit square congruence modulo an odd prime power has exactly two root classes ([[thm-unit-square-criterion-modulo-odd-prime-powers]]).

[L2] A soluble unit square congruence modulo $2^e$ has one root for $e=1$, two roots for $e=2$, and four roots for $e\ge3$ ([[thm-unit-square-criterion-modulo-two-powers]]).

[L3] The Chinese remainder map is a group isomorphism from the unit group modulo a product of pairwise coprime positive integers to the product of their unit groups, including the empty product ([[thm-unit-group-chinese-remainder-decomposition]]).

[L4] Every positive integer has a finite prime factorisation, unique up to the order of its prime factors ([[thm-fundamental-theorem-of-arithmetic]]).

## Proof

**Proof technique:** direct.

1.1 By [L4], group the finite prime factorisation of $n$ into its pairwise coprime prime-power factors. Restrict the CRT isomorphism [L3] to the equation $u^2=[a]_n$. It gives a bijection from the global root set to the Cartesian product of the root sets in those components, because an element satisfies the global equation exactly when each component satisfies its local equation. [L3, L4, given]

2.1 The cardinality of that finite Cartesian product is the product of its local cardinalities. Each odd-prime-power factor contributes $2$ by [L1], while [L2] gives the factor $c_e$ for the two-part; if there are no prime-power factors, the empty product is $1$. This is the displayed formula. [step 1.1, L1, L2, algebra] ∎

```

## DEPENDENCY: thm-unit-group-modulo-odd-prime-power-is-cyclic

```markdown
---
id: thm-unit-group-modulo-odd-prime-power-is-cyclic
kind: theorem
title: "For every odd prime $p$ and $k\\ge1$, $(\\mathbb Z/p^k\\mathbb Z)^\\times$ is cyclic of order $p^{k-1}(p-1)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-primitive-roots-modulo-prime, lem-primitive-root-lift-to-prime-square, lem-order-of-one-plus-pu-modulo-prime-powers, thm-totient-of-a-prime-power, lem-order-characterisation, cor-order-of-element-divides-group-order, lem-coprime-divides-product]
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
    - title: "Peter Hackman, Elementary Number Theory, Theorem C.IV.4"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "William Stein, Elementary Number Theory, Theorem 2.5.11"
      url: "https://wstein.org/ent/ent.pdf"
pipeline_run: null
---

## Statement

For every odd prime $p$ and integer $k\ge1$, the group $(\mathbb Z/p^k)^\times$ is cyclic of order

$$\varphi(p^k)=p^{k-1}(p-1).$$

## Facts & Assumptions

**Given:** An odd prime $p$ and an integer $k\ge1$.

[L1] Every prime modulus admits a primitive root ([[cor-primitive-roots-modulo-prime]]), and from a primitive root modulo an odd prime $p$, at least one of $g$ and $g+p$ is primitive modulo $p^2$ ([[lem-primitive-root-lift-to-prime-square]]).

[L2] If $p\nmid u$, the class $1+pu$ has order $p^{k-1}$ modulo $p^k$ ([[lem-order-of-one-plus-pu-modulo-prime-powers]]).

[L3] $\varphi(p^k)=p^{k-1}(p-1)$ ([[thm-totient-of-a-prime-power]]).

[L4] For an element of finite order $r$, $x^t=1$ exactly when $r\mid t$ ([[lem-order-characterisation]]).

[L5] The order of an element of a finite group divides the group order ([[cor-order-of-element-divides-group-order]]).

[L6] If two coprime integers divide an integer, then their product divides it ([[lem-coprime-divides-product]]).

## Proof

**Proof technique:** direct.

1.1 Choose a primitive root modulo $p$ by [L1], and replace its integer representative by the lift supplied there so that it is primitive modulo $p^2$. Reduction modulo $p$ gives $g^{p-1}=1+pu$ for some integer $u$, while primitivity modulo $p^2$ and [L4] show $p\nmid u$. [L1, L4, choose, algebra]

2.1 Reduction modulo $p$ shows that the order of $g$ modulo $p^k$ is divisible by $p-1$, while [L2] applied to step 1.1 shows that the order of $g^{p-1}$ is $p^{k-1}$. [step 1.1, L2, L4]

3.1 The cyclic subgroup generated by $g^{p-1}$ lies in that generated by $g$, so [L5] and step 2.1 make $p^{k-1}$ divide the order of $g$. That order is also divisible by $p-1$ by step 2.1. These two divisors are coprime, so [L6] makes their product divide the order; conversely [L3] and [L5] make the order divide $p^{k-1}(p-1)$. Therefore it equals that group order. [step 2.1, L3, L5, L6, algebra]

4.1 Thus $g$ generates the entire unit group, proving cyclicity; when $k=1$ the same argument reduces to the original primitive root modulo $p$. [step 3.1, L3] ∎

```

## DEPENDENCY: thm-unit-group-chinese-remainder-decomposition

```markdown
---
id: thm-unit-group-chinese-remainder-decomposition
kind: theorem
title: "For pairwise coprime positive moduli, the Chinese remainder bijection restricts to an isomorphism of unit groups"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-chinese-remainder-theorem, def-unit-group-modulo-n-and-euler-totient, def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: false
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
    - title: "Peter Hackman, Elementary Number Theory, §C.V"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
pipeline_run: null
---

## Statement

Let $n_0,\ldots,n_{r-1}$ be pairwise coprime positive integers and $N=\prod_{i<r}n_i$. The Chinese remainder map restricts to a group isomorphism

$$ (\mathbb Z/N)^\times\cong\prod_{i<r}(\mathbb Z/n_i)^\times.$$

For the empty list this identifies the two one-element groups.

## Facts & Assumptions

**Given:** The stated finite pairwise-coprime list and its product $N$.

[L1] The Chinese remainder map $\mathbb Z/N\to\prod_{i<r}\mathbb Z/n_i$ is a bijection preserving multiplication and identity, including for the empty list ([[thm-chinese-remainder-theorem]]).

[L2] For $n\ge1$, the invertible classes of $\mathbb Z/n$ form a group $(\mathbb Z/n)^\times$ under multiplication ([[def-unit-group-modulo-n-and-euler-totient]]).

[L3] A bijective group homomorphism is an isomorphism ([[def-group-isomorphism-and-automorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the CRT map preserves multiplication and identity. If a class has an inverse, its image has the coordinatewise image of that inverse. [L1, L2]

1.2 Conversely, if every coordinate is a unit, take the tuple of coordinatewise inverses and use surjectivity in [L1] to lift it; multiplicativity shows that the lift is an inverse of the original class. [L1, L2, choose]

2.1 Steps 1.1 and 1.2 show that [L1] restricts to a bijective homomorphism between the displayed unit groups. [step 1.1, step 1.2, L1, L2]

3.1 It is therefore an isomorphism by [L3], and [L1] supplies the empty-list case. [step 2.1, L1, L3] ∎

```

## DEPENDENCY: def-kernel-and-image-of-group-homomorphism

```markdown
---
id: def-kernel-and-image-of-group-homomorphism
kind: definition
title: 'The kernel and image of a group homomorphism'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-homomorphism, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Ernst, An Inquiry-Based Approach to Abstract Algebra, Homomorphisms"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/07%3A_Homomorphisms_and_the_Isomorphism_Theorems/7.01%3A_Homomorphisms"
pipeline_run: null
---

## Definition

The kernel and image of a group homomorphism.

For a group homomorphism $f:G\to H$, define

$$\ker f:=\{g\in G:f(g)=e_H\},\qquad\operatorname{im}f:=\{f(g):g\in G\}.$$

Thus $f$ is surjective exactly when $\operatorname{im}f=H$
([[def-injection-surjection-bijection]]).

```

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

## DEPENDENCY: lem-p-adic-valuation-additive

```markdown
---
id: lem-p-adic-valuation-additive
kind: lemma
title: "$v_p(ab) = v_p(a) + v_p(b)$ for nonzero integers $a, b$, and $v_p(a+b) \\ge \\min\\{v_p(a), v_p(b)\\}$ whenever $a$, $b$ and $a+b$ are all nonzero"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-p-adic-valuation, lem-p-adic-valuation-basic, thm-euclids-lemma, def-prime, def-group-power, lem-group-power-laws, def-semigroup-and-monoid, lem-units-of-z, def-divides-in-z, lem-divisibility-basic, thm-nat-linear-order, lem-nat-order-is-membership, lem-nat-discrete, def-nat-order, def-nat-addition, def-natural-numbers, lem-int-cancellation, def-integers, def-int-operations, def-int-order, thm-int-comm-ring, thm-int-ordered-ring, lem-nat-embeds-int]
justified_by: []
forward_refs: [ex-prime-factorisation-worked]
aliases: []
landmark: false
short: "$v_p(ab) = v_p(a) + v_p(b)$"
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
    - title: "P-adic valuation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/P-adic_valuation"
    - title: "Valuation (algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Valuation_(algebra)"
    - title: "University of Chicago REU notes: p-adic numbers"
      url: "https://www.math.uchicago.edu/~may/VIGRE/VIGRE2011/REUPapers/Herwig.pdf"
    - title: "Jürgen Neukirch, Algebraic Number Theory"
      url: "https://www.math.toronto.edu/~ila/Neukirch_Algebraic_number_theory.pdf"
pipeline_run: null
---

## Statement

Let $p$ be a prime ([[def-prime]]) and let $a, b \in \mathbb{Z}$ be nonzero,
with $v_p$ as in [[def-p-adic-valuation]]. Then $ab \ne 0$ and

$$v_p(ab) \;=\; v_p(a) + v_p(b),$$

the sum taken in $\mathbb{N}$ ([[def-nat-addition]]). If moreover $a + b \ne 0$,
then

$$v_p(a+b) \;\ge\; \min\{\, v_p(a),\, v_p(b) \,\},$$

the minimum of two natural numbers, which exists because the order on
$\mathbb{N}$ is total ([[thm-nat-linear-order]]).

## Facts & Assumptions

**Given:** A prime $p$ and nonzero integers $a, b$; $\alpha := v_p(a)$ and $\beta := v_p(b)$.

[L1] For a nonzero $u$: $p^{v_p(u)} \mid u$, and $u = p^{v_p(u)} u'$ for some nonzero $u'$ with $p \nmid u'$; moreover $p^{k} \mid u$ holds exactly for $k \le v_p(u)$ ([[lem-p-adic-valuation-basic]], [[def-p-adic-valuation]]).

[L2] Exponent law in a monoid for natural exponents: $g^{m+n} = g^{m} g^{n}$ ([[lem-group-power-laws]], [[def-group-power]], [[def-semigroup-and-monoid]], [[lem-units-of-z]]).

[L3] If $p$ is prime and $p \mid uv$ then $p \mid u$ or $p \mid v$ ([[thm-euclids-lemma]]).

[L4] Divisibility is linear: $d \mid u$ and $d \mid v$ give $d \mid ux + vy$, in particular $d \mid u + v$ ([[lem-divisibility-basic]]); $d \mid u$ means $u = dc$ for some $c$ ([[def-divides-in-z]]).

[L5] A product of two nonzero integers is nonzero, and $xz = yz$ with $z \ne 0$ gives $x = y$ ([[lem-int-cancellation]]).

[L6] $\mathbb{Z}$ is a commutative ring: multiplication is associative and commutative and $x \cdot 1 = x$ ([[thm-int-comm-ring]], [[def-int-operations]], [[def-integers]]); its order is total, antisymmetric and transitive ([[thm-int-ordered-ring]], [[def-int-order]], [[lem-nat-embeds-int]]).

[L7] On $\mathbb{N}$: $\le$ is a linear order, so any two naturals are comparable and have a minimum ([[thm-nat-linear-order]]); $m \le n$ means $m + c = n$ for some $c$ ([[def-nat-order]]); $\sigma(k) = k + 1$ ([[def-nat-addition]], [[def-natural-numbers]]); $m < n$ exactly when $\sigma(m) \le n$ ([[lem-nat-discrete]]), and $m < \sigma(n)$ exactly when $m \le n$ ([[lem-nat-order-is-membership]]).

## Proof

**Proof technique:** direct.

1.1 $ab \ne 0$, so $v_p(ab)$ is defined. [L5]

1.2 Fix $a'$ and $b'$ with $a = p^{\alpha} a'$, $b = p^{\beta} b'$, both nonzero, and $p \nmid a'$, $p \nmid b'$. [L1, choose]

1.3 Now assume also $a + b \ne 0$, and put $m := \min\{\alpha,\beta\}$, which exists because $\le$ is total on $\mathbb{N}$; then $m \le \alpha$ and $m \le \beta$. [L7]

2.1 $ab = (p^{\alpha} a')(p^{\beta} b') = (p^{\alpha} p^{\beta})(a' b') = p^{\alpha+\beta}(a'b')$, using commutativity, associativity and the exponent law. [step 1.2, L2, L6]

2.2 $p \nmid a'b'$: otherwise [L3] would give $p \mid a'$ or $p \mid b'$, both excluded by step 1.2. [step 1.2, L3]

2.3 By [L1], $p^{m} \mid a$ and $p^{m} \mid b$, so $p^{m} \mid a + b$ by linearity; since $a + b \ne 0$, [L1] applied to $a+b$ gives $m \le v_p(a+b)$, which is the second assertion. [step 1.3, L1, L4]

3.1 $p^{\alpha+\beta} \ne 0$, since $ab \ne 0$ and $ab = p^{\alpha+\beta}(a'b')$ would otherwise be $0$. [step 1.1, step 2.1, L6]

3.2 $p^{\alpha+\beta} \mid ab$ by step 2.1, so $\alpha + \beta \le v_p(ab)$. [step 1.1, step 2.1, L1, L4]

4.1 Suppose $\alpha + \beta < v_p(ab)$. Then $\alpha + \beta + 1 \le v_p(ab)$, so $p^{\alpha+\beta+1} \mid ab$; fix $c$ with $ab = p^{\alpha+\beta+1}c = p^{\alpha+\beta}(pc)$, using the exponent law. Cancelling $p^{\alpha+\beta} \ne 0$ against step 2.1 gives $a'b' = pc$, that is $p \mid a'b'$, contradicting step 2.2. [step 2.1, step 2.2, step 3.1, L1, L2, L4, L5, L7]

5.1 Hence $v_p(ab) = \alpha + \beta$ by totality and antisymmetry of the order on $\mathbb{N}$, which is the first assertion. [step 3.2, step 4.1, L7]

6.1 Both assertions are established. [step 5.1, step 2.3] ∎

## Remarks

- **Primality is used exactly once**, at step 2.2, and it is used through [[thm-euclids-lemma]]. That is the whole reason the additivity of $v_p$ is a theorem about *primes* and not about arbitrary integers greater than $1$: for a composite base the analogue fails, and the companion page of the divisibility page already carries the failure of the product principle ([[cex-divides-a-product-without-dividing-a-factor]]).

- **The second clause is an inequality and cannot be an equality.** Take $p = 2$, $a = 2$, $b = 2$: then $v_2(a) = v_2(b) = 1$ while $v_2(a+b) = v_2(4) = 2$. The companion page's worked example computes such valuations explicitly ([[ex-prime-factorisation-worked]]).

- **The minimum is taken in $\mathbb{N}$, through [[thm-nat-linear-order]]**, not through the library's [[def-max-min]], which is stated for real numbers. The values of $v_p$ are natural numbers, so no passage to $\mathbb{R}$ is needed or wanted here.

```

## DEPENDENCY: thm-first-isomorphism-theorem-groups

```markdown
---
id: thm-first-isomorphism-theorem-groups
kind: theorem
title: 'First isomorphism theorem for groups: $G/\ker f\cong\operatorname{im}f$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-quotient-group-universal-property, thm-image-subgroup-and-kernel-normal, thm-group-homomorphism-injective-iff-trivial-kernel, lem-equal-images-iff-same-kernel-coset, def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Judson, Abstract Algebra: Theory and Applications, Isomorphism Theorems"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/11%3A_Homomorphisms/11.02%3A_The_Isomorphism_Theorms"
pipeline_run: null
---

## Statement

First isomorphism theorem for groups: $G/\ker f\cong\operatorname{im}f$.

For every homomorphism $f:G\to H$, the rule
$g\ker f\mapsto f(g)$ is an isomorphism from $G/\ker f$ onto
$\operatorname{im}f$.

## Facts & Assumptions

**Given:** A group homomorphism $f:G\to H$.

[L1] A homomorphism killing a normal subgroup factors uniquely through the quotient ([[thm-quotient-group-universal-property]]).

[L2] $\ker f$ is normal and $\operatorname{im}f$ is a subgroup ([[thm-image-subgroup-and-kernel-normal]]).

[L3] A homomorphism is injective exactly when its kernel is trivial ([[thm-group-homomorphism-injective-iff-trivial-kernel]]).

[L4] Equal images are exactly equal kernel cosets ([[lem-equal-images-iff-same-kernel-coset]]).

[L5] An isomorphism is a bijective group homomorphism ([[def-group-isomorphism-and-automorphism]]).

## Proof

**Proof technique:** direct.

1.1 By [L2] and [L1], $\bar f:G/\ker f\to\operatorname{im}f$, $\bar f(g\ker f)=f(g)$, is a well-defined homomorphism; [L4] also gives representative independence directly. [L1, L2, L3, L4, L5, given, construct]

2.1 Its image is all of $\operatorname{im}f$, and $\bar f(g\ker f)=e_H$ implies $f(g)=e_H$, hence $g\ker f=\ker f$; therefore its kernel is trivial. [step 1.1, L1, L2, L3, L4, L5, given, algebra]

3.1 The trivial-kernel conclusion of step 2.1 makes $\bar f$ an isomorphism. [step 2.1] ∎

```

## DEPENDENCY: thm-lagrange

```markdown
---
id: thm-lagrange
kind: theorem
title: "Lagrange's theorem: $|G|=[G:H]|H|$ for every subgroup $H$ of a finite group $G$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-finite-coset-partition, lem-coset-partition, lem-coset-equinumerous-with-subgroup, def-index, def-order-in-a-group, def-finite-cardinality, thm-sum-rule, def-sum-over-a-finite-index-set, def-divides-in-z, lem-nat-embeds-int]
justified_by: []
aliases: []
landmark: true
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
    - title: "UCL lecture notes, Cosets and Lagrange's theorem"
      url: "https://www.homepages.ucl.ac.uk/~ucahmto/0007/_book/4-6-cosets-and-lagranges-theorem.html"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §6.2: Lagrange's Theorem"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/06%3A_Cosets_and_Lagrange%27s_Theorem/6.02%3A_Lagrange%27s_Theorem"
pipeline_run: null
---

## Statement

Let $G$ be a finite group and $H\le G$. Then

$$|G|=[G:H]\,|H|.$$

Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$,
$\iota(|H|)$ divides $\iota(|G|)$.

## Facts & Assumptions

**Given:** A finite group $G$ and a subgroup $H\le G$.

[L1] The distinct left cosets of $H$ partition $G$ ([[lem-coset-partition]]).

[L2] The subgroup, every coset, and $G/H$ are finite; every coset has cardinality $|H|$ and $|G/H|=[G:H]$ ([[lem-finite-coset-partition]], [[lem-coset-equinumerous-with-subgroup]], [[def-index]]).

[L3] For a finite partition $A=\bigsqcup_{i\in I}A_i$, one has $|A|=\sum_{i\in I}|A_i|$; if every summand has the same value $c$, then $\sum_{i\in I}c=|I|c$ ([[thm-sum-rule]], [[def-sum-over-a-finite-index-set]]).

[F1] The order $|G|$ of a finite group is the unique natural equinumerous with its underlying set, hence agrees with finite cardinality ([[def-order-in-a-group]], [[def-finite-cardinality]]).

[L4] The embedding $\iota$ preserves multiplication, and $d\mid a$ in $\mathbb Z$ means $a=dq$ for some integer $q$ ([[lem-nat-embeds-int]], [[def-divides-in-z]]).

## Proof

**Proof technique:** direct.

1.1 Apply the finite partition sum to the coset partition: $|G|=\sum_{C\in G/H}|C|$. [L1, L2, L3, F1]

2.1 Every summand equals $|H|$, and there are $|G/H|=[G:H]$ summands, so the constant-sum clause gives $|G|=[G:H]|H|$. [step 1.1, L2, L3]

3.1 Applying $\iota$ gives $\iota(|G|)=\iota(|H|)\iota([G:H])$, so $\iota(|H|)\mid\iota(|G|)$. [step 2.1, L4] ∎

```

## DEPENDENCY: def-index

```markdown
---
id: def-index
kind: definition
title: "The coset set $G/H$ and the index $[G:H]$ of a subgroup"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [lem-coset-partition, lem-left-and-right-cosets-equinumerous, def-finite-cardinality]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-01
sources:
  scraped: []
  references:
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Cosets and Lagrange's Theorem"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §6.2: Lagrange's Theorem"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/06%3A_Cosets_and_Lagrange%27s_Theorem/6.02%3A_Lagrange%27s_Theorem"
pipeline_run: null
---

## Definition

Let $H\le G$. The **left coset set** is

$$G/H:=\{gH:g\in G\}.$$

By [[lem-coset-partition]], its elements are exactly the blocks of the coset
partition of $G$. The **index** of $H$ in $G$ is

$$[G:H]:=|G/H|$$

when $G/H$ is finite, with finite cardinality as in
[[def-finite-cardinality]]. If $G/H$ is not finite, write $[G:H]=\infty$.
Here $\infty$ is a symbol, not a natural number, and no arithmetic with it is
defined.

The right coset set has the same finite or infinite size because
[[lem-left-and-right-cosets-equinumerous]] gives an explicit bijection between
the two coset sets. Thus the index does not depend on choosing left rather than
right cosets.

```

## DEPENDENCY: cor-index-tower-finite

```markdown
---
id: cor-index-tower-finite
kind: corollary
title: "For $K\\le H\\le G$ with $G$ finite, $[G:K]=[G:H][H:K]$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-lagrange, def-index, def-order-in-a-group, def-subgroup, thm-subset-of-a-finite-set, lem-nat-mult-associative, lem-nat-mult-cancellative]
justified_by: []
aliases: []
landmark: false
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
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Lagrange's Theorem"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §6.2: Lagrange's Theorem"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/06%3A_Cosets_and_Lagrange%27s_Theorem/6.02%3A_Lagrange%27s_Theorem"
pipeline_run: null
---

## Statement

If $K\le H\le G$ and $G$ is finite, then all three indices are finite and

$$[G:K]=[G:H][H:K].$$

## Facts & Assumptions

**Given:** A finite group $G$ and subgroups $K\le H\le G$.

[L1] Lagrange's theorem gives $|B|=[B:A]|A|$ whenever $A\le B$ and $B$ is finite ([[thm-lagrange]], [[def-index]], [[def-order-in-a-group]]).

[F1] Every subgroup contains the identity; hence its underlying set is nonempty. Also, if $K\le H\le G$, then $K\le G$: one has $K\subseteq H\subseteq G$, and the identity, product, and inverse conditions for $K$ are the same inherited operations in $H$ and $G$ ([[def-subgroup]]).

[F2] Every subset of a finite set is finite ([[thm-subset-of-a-finite-set]]).

[L2] Natural multiplication is associative, and $xz=yz$ with $z\ne0$ implies $x=y$ ([[lem-nat-mult-associative]], [[lem-nat-mult-cancellative]]).

## Proof

**Proof technique:** direct.

1.1 Since $H\le G$, its underlying set is a subset of the finite set $G$, so $H$ is finite by [F2]. Also $K\le G$ by the subgroup-transitivity derivation in [F1]. Applying [L1] to $K\le H$, $H\le G$ and this $K\le G$ gives $|H|=[H:K]|K|$, $|G|=[G:H]|H|$, and $|G|=[G:K]|K|$. [given, F1, F2, L1]

2.1 Substituting the first equality into the second and comparing with the third gives $[G:K]|K|=([G:H][H:K])|K|$. [step 1.1, L2]

3.1 Since $K$ contains the identity, $|K|\ne0$. Cancellation in $\mathbb N$ therefore yields $[G:K]=[G:H][H:K]$. [step 2.1, F1, L2] ∎

```

## DEPENDENCY: thm-quadratic-reciprocity

```markdown
---
id: thm-quadratic-reciprocity
kind: theorem
title: "Quadratic reciprocity for distinct odd primes"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-gauss-lower-half-lattice-count,
       lem-reciprocity-rectangle-lattice-count]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. Hackman, Elementary Number Theory, §D.V"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "W. Stein, Elementary Number Theory, §§4.1 and 4.3"
      url: "https://wstein.org/ent/ent.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 9, §2"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Statement

For distinct odd primes $p,q$, $\left(\frac pq\right)\left(\frac qp\right)=(-1)^{(p-1)(q-1)/4}$.

Equivalently, the two Legendre symbols agree unless $p\equiv q\equiv3\pmod4$, in which case they have opposite signs.

## Facts & Assumptions

**Given:** Distinct odd primes $p$ and $q$.

[L1] For distinct odd primes $p,q$, the lower-half count satisfies $\left(\frac qp\right)=(-1)^{S_{p,q}}$ ([[lem-gauss-lower-half-lattice-count]]).

[L2] For the two orientations of the rectangle, $S_{p,q}+S_{q,p}=(p-1)(q-1)/4$ ([[lem-reciprocity-rectangle-lattice-count]]).

## Proof

**Proof technique:** direct.

1.1 Applying [L1] in both orientations, multiplying, and then using [L2] gives $\left(\frac pq\right)\left(\frac qp\right)=(-1)^{S_{q,p}+S_{p,q}}=(-1)^{(p-1)(q-1)/4}$. [L1, L2, algebra]

2.1 The exponent is $((p-1)/2)((q-1)/2)$, which is odd exactly when both factors are odd, equivalently when $p\equiv q\equiv3\pmod4$. Since the Legendre symbols are signs for distinct primes, their product is then $-1$, and in every other case it is $1$, proving the equivalent formulation. [step 1.1, algebra] ∎

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

## DEPENDENCY: lem-nonsingular-square-root-lift-modulo-odd-prime-powers

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

## DEPENDENCY: thm-unit-square-criterion-modulo-n

```markdown
---
id: thm-unit-square-criterion-modulo-n
kind: theorem
title: "A unit is a square modulo $n$ exactly when it is a square at every prime-power factor"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-unit-square-criterion-modulo-odd-prime-powers,
       thm-unit-square-criterion-modulo-two-powers,
       thm-unit-group-chinese-remainder-decomposition,
       thm-canonical-prime-factorisation,
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
    - title: "P. Hackman, Elementary Number Theory, §B.VII"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "V. Shoup, A Computational Introduction to Number Theory and Algebra, 2nd ed., §12.4"
      url: "https://www.shoup.net/ntb/ntb-v2.pdf"
pipeline_run: null
---

## Statement

Let $n\ge1$ and let $[a]_n\in(\mathbb Z/n)^\times$. A unit is a square modulo $n$ if and only if it is a square modulo every prime-power factor of $n$.

Equivalently, for every odd prime $p\mid n$ one must have $(a/p)=1$; for the factor $2^e$, there is no additional condition when $e\le1$, one needs $a\equiv1\pmod4$ when $e=2$, and one needs $a\equiv1\pmod8$ when $e\ge3$. At $n=1$, the unique unit class is a square.

## Facts & Assumptions

**Given:** A positive integer $n$ and a unit class $[a]_n$.

[L1] For an odd prime $p$, $k\ge1$, and $p\nmid a$, the congruence $x^2\equiv a\pmod{p^k}$ is soluble if and only if $\left(\frac ap\right)=1$ ([[thm-unit-square-criterion-modulo-odd-prime-powers]]).

[L2] For powers of $2$, the unit square criterion is automatic modulo $2$, is $a\equiv1\pmod4$ modulo $4$, and is $a\equiv1\pmod8$ modulo $2^k$ for $k\ge3$ ([[thm-unit-square-criterion-modulo-two-powers]]).

[L3] For pairwise coprime positive integers $n_i$ with product $N$, the Chinese remainder map gives $(\mathbb Z/N)^\times\cong\prod_i(\mathbb Z/n_i)^\times$, including the empty list ([[thm-unit-group-chinese-remainder-decomposition]]).

[L4] The prime factors and exponents in the canonical factorisation of a positive integer are determined by that integer ([[thm-canonical-prime-factorisation]]).

[L5] Every positive integer has a finite prime factorisation, unique up to the order of its prime factors ([[thm-fundamental-theorem-of-arithmetic]]).

## Proof

**Proof technique:** direct.

1.1 By [L5], $n$ has a finite prime factorisation; grouping equal factors and using [L4] gives its uniquely determined nontrivial prime-power factors, which are pairwise coprime. Apply [L3] to identify the unit group modulo $n$ with the product of their unit groups; when $n=1$, this is the empty product of groups and has one element. [L3, L4, L5]

2.1 Under the isomorphism of step 1.1, a global square maps to a square in every component. Conversely, if every component is a square, choose one root in each of the finitely many nonempty local root sets and apply the inverse CRT isomorphism to obtain a global root. Substitution of [L1] and [L2] gives the explicit local conditions in the Statement, and the empty product handles $n=1$. [step 1.1, L1, L2, L3, choose] ∎

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

## DEPENDENCY: thm-legendre-symbol-multiplicativity

```markdown
---
id: thm-legendre-symbol-multiplicativity
kind: theorem
title: "The Legendre symbol is multiplicative for all integer numerators"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-legendre-symbol, prop-legendre-symbol-on-units-is-homomorphism, thm-unit-criterion-modulo-n]
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
    - title: "H. Hackman, Elementary Number Theory, Chapter D, Section D.I"
      url: "https://courses.mai.liu.se/GU/TATA54/Dokument/booktot.pdf"
    - title: "A. Gorodnik, Number Theory, Lecture 9, Theorem 1.6"
      url: "https://www.math.uzh.ch/gorodnik/nt/lecture9.pdf"
pipeline_run: null
---

## Statement

For every odd prime $p$ and all integers $a,b$,

$$\left(\frac{ab}{p}\right)=\left(\frac ap\right)\left(\frac bp\right).$$

Consequently, if $p\nmid c$, then $(ac^2/p)=(a/p)$.

## Facts & Assumptions

**Given:** An odd prime $p$ and integers $a,b,c$.

[L1] The Legendre symbol is $0$ when its numerator is divisible by $p$, $1$ on a quadratic residue, and $-1$ on a quadratic nonresidue ([[def-legendre-symbol]]).

[L2] A class $[a]_p$ is a unit exactly when $\gcd(a,p)=1$ ([[thm-unit-criterion-modulo-n]]).

[L3] Restricted to $(\mathbb Z/p)^\times$, the Legendre symbol is a homomorphism to $\{\pm1\}$ whose kernel is the nonzero square subgroup ([[prop-legendre-symbol-on-units-is-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 If $p$ divides $a$ or $b$, then it divides $ab$. By [L1], the left side is zero and one factor on the right is zero, so the identity holds. [L1, L2, given]

2.1 If $p$ divides neither factor, then [L2] makes $[a]_p$ and $[b]_p$ units. The homomorphism identity in [L3] gives the displayed multiplicativity. [L2, L3, step 1.1]

3.1 If $p\nmid c$, then $[c]_p^2$ lies in the kernel described by [L3], so $(c^2/p)=1$. Applying the proved multiplicative identity to $a$ and $c^2$ gives $(ac^2/p)=(a/p)$. [L1, L3, step 2.1] ∎

```
