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
label: n-28

run: frontier-15
role: refuter
label: n-28
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

## ITEM: ex-fp-t-over-fp-tp-is-purely-inseparable-of-degree-p

```markdown
---
id: ex-fp-t-over-fp-tp-is-purely-inseparable-of-degree-p
kind: example
title: "$\\mathbb F_p(t)/\\mathbb F_p(t^p)$ is purely inseparable of degree $p$ and separable degree one"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-rational-function-field-as-a-fraction-field, thm-polynomial-ring-over-a-field-is-a-ufd, lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power, thm-simple-algebraic-extension-quotient-power-basis-and-degree, thm-purely-inseparable-extension-characterizations]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapter 4"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Example

For a prime $p$, the extension
$\mathbb F_p(t)/\mathbb F_p(t^p)$ is purely inseparable, has ordinary degree
$p$, and has separable degree one.

## Facts & Assumptions

**Given:** A prime $p$, the field $K=\mathbb F_p(t)$, and its subfield $F=\mathbb F_p(t^p)$.

[L1] A rational function field is the fraction field of its polynomial ring ([[cor-rational-function-field-as-a-fraction-field]]).

[L2] A polynomial ring over a field is a unique factorization domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

[L3] If a constant is not a $p$th power, then $x^p-a$ is irreducible ([[lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power]]).

[L4] A simple extension has the power basis and degree of its minimal polynomial ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L5] A finite purely inseparable extension has separable degree one ([[thm-purely-inseparable-extension-characterizations]]).

## Verification

**Proof technique:** direct.

1.1 Put $u=t^p$, so $F=\mathbb F_p(u)$. If $u=(r(u)/s(u))^p$ for nonzero coprime $r,s\in\mathbb F_p[u]$, then unique factorization gives $1+p\,v_u(s)=p\,v_u(r)$, which is impossible modulo $p$. Thus $u$ is not a $p$th power in $F$. [L1, L2, algebra]

2.1 The element $t$ is a root of $x^p-u$, which is irreducible by [L3]. Hence [L4] gives $K=F(t)$ and $[K:F]=p$. [step 1.1, L3, L4]

3.1 For every $z=r(t)/s(t)\in K$, characteristic $p$ gives $z^p=r(t)^p/s(t)^p\in\mathbb F_p(t^p)=F$. Thus $K/F$ is purely inseparable, and [L5] gives $[K:F]_s=1$. [L5, algebra] ∎

```

### Recorded proof contract for ex-fp-t-over-fp-tp-is-purely-inseparable-of-degree-p

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "cor-rational-function-field-as-a-fraction-field",
   "source_section": "Statement",
   "quote": "For every field $F$, the polynomial ring $F[t]$ is an integral domain, and\n$$ F(t):=\\operatorname{Frac}(F[t])=\\left\\{\\frac{f(t)}{g(t)}:f,g\\in F[t],\\ g\\ne0\\right\\} $$\nis a field containing an embedded copy of $F[t]$. It is called the **rational function field** over $F$. In particular, $\\mathbb R(t)=\\operatorname{Frac}(\\mathbb R[t])$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-polynomial-ring-over-a-field-is-a-ufd",
   "source_section": "Statement",
   "quote": "For every field $F$, the polynomial ring $F[x]$ is a unique factorisation domain.",
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
   "source": "thm-purely-inseparable-extension-characterizations",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq\\Omega$, where $K/F$ is algebraic and $\\Omega/F$ is\nan algebraic closure. The following are equivalent:\n\n1. $K/F$ is purely inseparable;\n2. every $\\alpha\\in K$ has exactly one distinct conjugate over $F$.\n\nIf $K/F$ is finite, these are also equivalent to the inclusion\n$K\\hookrightarrow\\Omega$ being the only $F$-embedding of $K$ into $\\Omega$,\nand to $[K:F]_s=1$. Assuming the Axiom of Choice, the same unique-embedding\ncriterion is equivalent to conditions 1 and 2 for arbitrary algebraic $K/F$. In\ncharacteristic $p>0$, they are equivalent elementwise to the minimal polynomial\nof each $\\alpha$ having the form $x^{p^e}-a$, or to\n$\\alpha^{p^e}\\in F$ for some $e\\ge0$. In characteristic zero they force\n$K=F$.",
   "uses": [
    "3.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Put $u=t^p$, so $F=\\mathbb F_p(u)$. If $u=(r(u)/s(u))^p$ for nonzero coprime $r,s\\in\\mathbb F_p[u]$, then unique factorization gives $1+p\\,v_u(s)=p\\,v_u(r)$, which is impossible modulo $p$. Thus $u$ is not a $p$th power in $F$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "The element $t$ is a root of $x^p-u$, which is irreducible by [L3]. Hence [L4] gives $K=F(t)$ and $[K:F]=p$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L3",
    "L4"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "For every $z=r(t)/s(t)\\in K$, characteristic $p$ gives $z^p=r(t)^p/s(t)^p\\in\\mathbb F_p(t^p)=F$. Thus $K/F$ is purely inseparable, and [L5] gives $[K:F]_s=1$.",
   "step": "3.1",
   "inputs": [
    "L5",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For mathbb F_p(t)/mathbb F_p(t^p) is purely inseparable of degree p and separable degree one, no possibly empty indexed operation occurs; the proof instead begins from The element t satisfies x^p-t^p over the base."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For mathbb F_p(t)/mathbb F_p(t^p) is purely inseparable of degree p and separable degree one, the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from The element t satisfies x^p-t^p over the base."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For \\mathbb F_p(t)/\\mathbb F_p(t^p) is purely inseparable of degree p and separable degree one, step 1.1 states: \"Put $u=t^p$, so $F=\\mathbb F_p(u)$. If $u=(r(u)/s(u))^p$ for nonzero coprime $r,s\\in\\mathbb F_p[u]$, then unique factorization gives $1+p\\,v_u(s)=p\\,v_u(r)$, which is impossible modulo $p$. Thus $u$ is not a $p$th power in $F$.\" This is the final proof check that every degree-one, exponent-one, singleton, or identity instance allowed by the hypotheses is evaluated."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For \\mathbb F_p(t)/\\mathbb F_p(t^p) is purely inseparable of degree p and separable degree one, step 2.1 states: \"The element $t$ is a root of $x^p-u$, which is irreducible by [L3]. Hence [L4] gives $K=F(t)$ and $[K:F]=p$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For mathbb F_p(t)/mathbb F_p(t^p) is purely inseparable of degree p and separable degree one, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from The element t satisfies x^p-t^p over the base."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "For mathbb F_p(t)/mathbb F_p(t^p) is purely inseparable of degree p and separable degree one, only supplied data are used and no unproved nonempty selection occurs; the proof begins from The element t satisfies x^p-t^p over the base."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim mathbb F_p(t)/mathbb F_p(t^p) is purely inseparable of degree p and separable degree one is not a biconditional, so no forward implication is asserted; the proof begins from The element t satisfies x^p-t^p over the base."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim mathbb F_p(t)/mathbb F_p(t^p) is purely inseparable of degree p and separable degree one is not a biconditional, so no reverse implication is asserted; the proof begins from The element t satisfies x^p-t^p over the base."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: cex-degree-p-squared-purely-inseparable-extension-is-not-simple

```markdown
---
id: cex-degree-p-squared-purely-inseparable-extension-is-not-simple
kind: counterexample
title: "$\\mathbb F_p(s,t)/\\mathbb F_p(s^p,t^p)$ has degree $p^2$, infinitely many intermediate fields, and no primitive element"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-rational-function-field-as-a-fraction-field, thm-polynomial-ring-over-a-field-is-a-ufd, thm-p-bases-and-degree-in-exponent-one-purely-inseparable-extensions, thm-steinitz-primitive-element-criterion]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "P. L. Clark, Field Theory, Chapter 5"
      url: "https://plclark.github.io/PeteLClark/Expositions/FieldTheory.pdf"
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 3 and 5"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Statement refuted

Every finite purely inseparable extension is simple.

## Facts & Assumptions

**Given:** A prime $p$, the field $F=\mathbb F_p(s^p,t^p)$, and $E=\mathbb F_p(s,t)$.

[L1] For every field $k$, the rational function field $k(u)$ is the fraction field of $k[u]$ ([[cor-rational-function-field-as-a-fraction-field]]).

[L2] A polynomial ring over a field is a unique factorization domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

[L3] In an exponent-one purely inseparable extension, a minimal generating family of length $r$ gives degree $p^r$ and the restricted-monomial basis ([[thm-p-bases-and-degree-in-exponent-one-purely-inseparable-extensions]]).

[L4] A finite extension is simple exactly when it has finitely many intermediate fields ([[thm-steinitz-primitive-element-criterion]]).

## Counterexample

**Proof technique:** direct.

1.1 Write $u=s^p$ and $v=t^p$. In the rational function field $\mathbb F_p(v)(u)$, the $u$-adic valuation of a $p$th power is divisible by $p$, so $u$ is not a $p$th power and $s\notin F$. Likewise, in $F(s)=\mathbb F_p(s)(v)$, the $v$-adic valuation shows that $v$ is not a $p$th power and $t\notin F(s)$. These valuation statements follow from reduced fractions in the UFDs of [L1] and [L2]. Every element of $E$ has its $p$th power in $F$, so $(s,t)$ is a minimal generating family for an exponent-one purely inseparable extension. By [L3], $[E:F]=p^2$ and $\{s^it^j:0\le i,j<p\}$ is an $F$-basis. [L1, L2, L3, algebra]

2.1 The base field $F$ is infinite because it contains the rational function field $\mathbb F_p(s^p)$ from [L1]. For each $c\in F$, put $u_c=s+ct$. Then $u_c^p=s^p+c^pt^p\in F$, while the basis in step 1.1 shows $u_c\notin F$, so [L3] gives $[F(u_c):F]=p$. [step 1.1, L1, L3, algebra]

3.1 If $c\ne d$ and $F(u_c)=F(u_d)$, that common field contains $(u_c-u_d)/(c-d)=t$ and then $s=u_c-ct$, so it equals $E$. This contradicts its degree $p$ against $[E:F]=p^2$. Hence the fields $F(u_c)$ are pairwise distinct. [step 1.1, step 2.1, algebra]

4.1 There are therefore infinitely many intermediate fields, and [L4] says that the finite extension $E/F$ is not simple. This refutes the stated universal claim. [step 2.1, step 3.1, L4] ∎

```

### Recorded proof contract for cex-degree-p-squared-purely-inseparable-extension-is-not-simple

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "cor-rational-function-field-as-a-fraction-field",
   "source_section": "Statement",
   "quote": "For every field $F$, the polynomial ring $F[t]$ is an integral domain, and\n$$ F(t):=\\operatorname{Frac}(F[t])=\\left\\{\\frac{f(t)}{g(t)}:f,g\\in F[t],\\ g\\ne0\\right\\} $$\nis a field containing an embedded copy of $F[t]$. It is called the **rational function field** over $F$. In particular, $\\mathbb R(t)=\\operatorname{Frac}(\\mathbb R[t])$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-polynomial-ring-over-a-field-is-a-ufd",
   "source_section": "Statement",
   "quote": "For every field $F$, the polynomial ring $F[x]$ is a unique factorisation domain.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-p-bases-and-degree-in-exponent-one-purely-inseparable-extensions",
   "source_section": "Statement",
   "quote": "Let $K/F$ be a finite exponent-one purely inseparable extension of\ncharacteristic $p$, and let $(b_1,\\ldots,b_r)$ be a minimal generating family\nfor $K$ over $F$. Then it is a $p$-basis, and\n\n$$[K:F]=p^r.$$\n\nConversely, every $p$-basis generates $K$ over $F$. The empty family gives the\ntrivial extension and degree $p^0=1$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-steinitz-primitive-element-criterion",
   "source_section": "Statement",
   "quote": "A finite field extension $E/F$ is simple if and only if it has finitely many\nintermediate fields.",
   "uses": [
    "4.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Write $u=s^p$ and $v=t^p$. In the rational function field $\\mathbb F_p(v)(u)$, the $u$-adic valuation of a $p$th power is divisible by $p$, so $u$ is not a $p$th power and $s\\notin F$. Likewise, in $F(s)=\\mathbb F_p(s)(v)$, the $v$-adic valuation shows that $v$ is not a $p$th power and $t\\notin F(s)$. These valuation statements follow from reduced fractions in the UFDs of [L1] and [L2]. Every element of $E$ has its $p$th power in $F$, so $(s,t)$ is a minimal generating family for an exponent-one purely inseparable extension. By [L3], $[E:F]=p^2$ and $\\{s^it^j:0\\le i,j<p\\}$ is an $F$-basis.",
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
   "claim": "The base field $F$ is infinite because it contains the rational function field $\\mathbb F_p(s^p)$ from [L1]. For each $c\\in F$, put $u_c=s+ct$. Then $u_c^p=s^p+c^pt^p\\in F$, while the basis in step 1.1 shows $u_c\\notin F$, so [L3] gives $[F(u_c):F]=p$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L1",
    "L3",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "If $c\\ne d$ and $F(u_c)=F(u_d)$, that common field contains $(u_c-u_d)/(c-d)=t$ and then $s=u_c-ct$, so it equals $E$. This contradicts its degree $p$ against $[E:F]=p^2$. Hence the fields $F(u_c)$ are pairwise distinct.",
   "step": "3.1",
   "inputs": [
    "step 1.1",
    "step 2.1",
    "algebra"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "There are therefore infinitely many intermediate fields, and [L4] says that the finite extension $E/F$ is not simple. This refutes the stated universal claim.",
   "step": "4.1",
   "inputs": [
    "step 2.1",
    "step 3.1",
    "L4"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "For \\mathbb F_p(s,t)/\\mathbb F_p(s^p,t^p) has degree p^2, infinitely many intermediate fields, and no primitive element, step 1.1 states: \"Write $u=s^p$ and $v=t^p$. In the rational function field $\\mathbb F_p(v)(u)$, the $u$-adic valuation of a $p$th power is divisible by $p$, so $u$ is not a $p$th power and $s\\notin F$. Likewise, in $F(s)=\\mathbb F_p(s)(v)$, the $v$-adic valuation shows that $v$ is not a $p$th power and $t\\notin F(s)$. These valuation statements follow from reduced fractions in the UFDs of [L1] and [L2]. Every element of $E$ has its $p$th power in $F$, so $(s,t)$ is a minimal generating family for an exponent-one purely inseparable extension. By [L3], $[E:F]=p^2$ and $\\{s^it^j:0\\le i,j<p\\}$ is an $F$-basis.\" This is the final proof check that the p-squared basis exists before parameters are selected."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For \\mathbb F_p(s,t)/\\mathbb F_p(s^p,t^p) has degree p^2, infinitely many intermediate fields, and no primitive element, step 1.1 states: \"Write $u=s^p$ and $v=t^p$. In the rational function field $\\mathbb F_p(v)(u)$, the $u$-adic valuation of a $p$th power is divisible by $p$, so $u$ is not a $p$th power and $s\\notin F$. Likewise, in $F(s)=\\mathbb F_p(s)(v)$, the $v$-adic valuation shows that $v$ is not a $p$th power and $t\\notin F(s)$. These valuation statements follow from reduced fractions in the UFDs of [L1] and [L2]. Every element of $E$ has its $p$th power in $F$, so $(s,t)$ is a minimal generating family for an exponent-one purely inseparable extension. By [L3], $[E:F]=p^2$ and $\\{s^it^j:0\\le i,j<p\\}$ is an $F$-basis.\" This is the final proof check that c=0 is included."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For \\mathbb F_p(s,t)/\\mathbb F_p(s^p,t^p) has degree p^2, infinitely many intermediate fields, and no primitive element, step 1.1 states: \"Write $u=s^p$ and $v=t^p$. In the rational function field $\\mathbb F_p(v)(u)$, the $u$-adic valuation of a $p$th power is divisible by $p$, so $u$ is not a $p$th power and $s\\notin F$. Likewise, in $F(s)=\\mathbb F_p(s)(v)$, the $v$-adic valuation shows that $v$ is not a $p$th power and $t\\notin F(s)$. These valuation statements follow from reduced fractions in the UFDs of [L1] and [L2]. Every element of $E$ has its $p$th power in $F$, so $(s,t)$ is a minimal generating family for an exponent-one purely inseparable extension. By [L3], $[E:F]=p^2$ and $\\{s^it^j:0\\le i,j<p\\}$ is an $F$-basis.\" This is the final proof check that p=2 retains both degree-p steps."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For \\mathbb F_p(s,t)/\\mathbb F_p(s^p,t^p) has degree p^2, infinitely many intermediate fields, and no primitive element, step 4.1 states: \"There are therefore infinitely many intermediate fields, and [L4] says that the finite extension $E/F$ is not simple. This refutes the stated universal claim.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For mathbb F_p(s,t)/mathbb F_p(s^p,t^p) has degree p^2, infinitely many intermediate fields, and no primitive element, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Adjoin s and then t and apply the preceding one-variable calculation twice to obtain degree p^2."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For \\mathbb F_p(s,t)/\\mathbb F_p(s^p,t^p) has degree p^2, infinitely many intermediate fields, and no primitive element, step 2.1 states: \"The base field $F$ is infinite because it contains the rational function field $\\mathbb F_p(s^p)$ from [L1]. For each $c\\in F$, put $u_c=s+ct$. Then $u_c^p=s^p+c^pt^p\\in F$, while the basis in step 1.1 shows $u_c\\notin F$, so [L3] gives $[F(u_c):F]=p$.\" This is the final proof check that the infinite field F_p(s^p,t^p), not F_p, supplies parameters."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim mathbb F_p(s,t)/mathbb F_p(s^p,t^p) has degree p^2, infinitely many intermediate fields, and no primitive element is not a biconditional, so no forward implication is asserted; the proof begins from Adjoin s and then t and apply the preceding one-variable calculation twice to obtain degree p^2."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim mathbb F_p(s,t)/mathbb F_p(s^p,t^p) has degree p^2, infinitely many intermediate fields, and no primitive element is not a biconditional, so no reverse implication is asserted; the proof begins from Adjoin s and then t and apply the preceding one-variable calculation twice to obtain degree p^2."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: fs-every-algebraic-extension-is-simple

```markdown
---
id: fs-every-algebraic-extension-is-simple
kind: false-statement
title: "FALSE: every algebraic extension is simple"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [ex-algebraic-closure-of-a-finite-field, cor-element-algebraic-iff-simple-extension-finite]
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

## Statement

Every algebraic field extension is simple.

## Facts & Assumptions

**Given:** The universal claim in the Statement and a prime $p$.

[L1] The algebraic closure $\overline{\mathbb F_p}/\mathbb F_p$ is algebraic and infinite ([[ex-algebraic-closure-of-a-finite-field]]).

[L2] An algebraic element generates a finite simple extension ([[cor-element-algebraic-iff-simple-extension-finite]]).

## Refutation

**Proof technique:** direct.

1.1 If $\overline{\mathbb F_p}=\mathbb F_p(\alpha)$ for one element $\alpha$, then $\alpha$ is algebraic and [L2] would make the extension finite. [L2]

2.1 This contradicts the infinitude in [L1]. Hence the algebraic extension $\overline{\mathbb F_p}/\mathbb F_p$ is not simple, refuting the Statement. [step 1.1, L1] ∎

```

### Recorded proof contract for fs-every-algebraic-extension-is-simple

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "ex-algebraic-closure-of-a-finite-field",
   "source_section": "Example",
   "quote": "For a prime $p$, an algebraic closure $\\overline{\\mathbb F_p}$ is the union of\nits finite subfields. It contains one subfield of order $p^n$ for every\n$n\\ge1$, the nested fields $\\mathbb F_{p^{n!}}$ for $n\\ge1$ exhaust it, and it\nis an infinite algebraic extension of $\\mathbb F_p$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L2",
   "source": "cor-element-algebraic-iff-simple-extension-finite",
   "source_section": "Statement",
   "quote": "For an element $a$ of an extension $K/F$,\n\n$$a\\text{ is algebraic over }F\\quad\\Longleftrightarrow\\quad F(a)/F\\text{ is finite}.$$\n\nIf $a$ is algebraic with minimal polynomial of degree $n$, then $[F(a):F]=n$.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "If $\\overline{\\mathbb F_p}=\\mathbb F_p(\\alpha)$ for one element $\\alpha$, then $\\alpha$ is algebraic and [L2] would make the extension finite.",
   "step": "1.1",
   "inputs": [
    "L2"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "This contradicts the infinitude in [L1]. Hence the algebraic extension $\\overline{\\mathbb F_p}/\\mathbb F_p$ is not simple, refuting the Statement.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L1"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For FALSE: every algebraic extension is simple, no possibly empty indexed operation occurs; the proof instead begins from Use the published infinite algebraic extension of mathbb Q."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For FALSE: every algebraic extension is simple, the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from Use the published infinite algebraic extension of mathbb Q."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For FALSE: every algebraic extension is simple, step 1.1 states: \"If $\\overline{\\mathbb F_p}=\\mathbb F_p(\\alpha)$ for one element $\\alpha$, then $\\alpha$ is algebraic and [L2] would make the extension finite.\" This is the final proof check that every degree-one, exponent-one, singleton, or identity instance allowed by the hypotheses is evaluated."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For FALSE: every algebraic extension is simple, step 1.1 states: \"If $\\overline{\\mathbb F_p}=\\mathbb F_p(\\alpha)$ for one element $\\alpha$, then $\\alpha$ is algebraic and [L2] would make the extension finite.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For FALSE: every algebraic extension is simple, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Use the published infinite algebraic extension of mathbb Q."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "For FALSE: every algebraic extension is simple, only supplied data are used and no unproved nonempty selection occurs; the proof begins from Use the published infinite algebraic extension of mathbb Q."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim FALSE: every algebraic extension is simple is not a biconditional, so no forward implication is asserted; the proof begins from Use the published infinite algebraic extension of mathbb Q."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim FALSE: every algebraic extension is simple is not a biconditional, so no reverse implication is asserted; the proof begins from Use the published infinite algebraic extension of mathbb Q."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, title and claim section only

## DEPENDENCY: cor-rational-function-field-as-a-fraction-field

```markdown
title: 'For a field $F$, $F(t)=\operatorname{Frac}(F[t])$ is its rational function field; in particular $\mathbb R(t)=\operatorname{Frac}(\mathbb R[t])$'

## Statement
For every field $F$, the polynomial ring $F[t]$ is an integral domain, and
$$ F(t):=\operatorname{Frac}(F[t])=\left\{\frac{f(t)}{g(t)}:f,g\in F[t],\ g\ne0\right\} $$
is a field containing an embedded copy of $F[t]$. It is called the **rational function field** over $F$. In particular, $\mathbb R(t)=\operatorname{Frac}(\mathbb R[t])$.
```

## DEPENDENCY: thm-polynomial-ring-over-a-field-is-a-ufd

```markdown
title: 'For every field $F$, $F[x]$ is a unique factorisation domain'

## Statement
For every field $F$, the polynomial ring $F[x]$ is a unique factorisation domain.
```

## DEPENDENCY: lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power

```markdown
title: "If $a$ is not a $p$th power in a characteristic-$p$ field, then $x^{p^n}-a$ is irreducible for every $n\\ge1$"

## Statement
Let $F$ have characteristic $p>0$, let $a\in F$ not be a $p$th power in $F$,
and let $n\ge1$. Then $x^{p^n}-a$ is irreducible in $F[x]$.
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

## DEPENDENCY: thm-p-bases-and-degree-in-exponent-one-purely-inseparable-extensions

```markdown
title: "A minimal generating family in a finite exponent-one purely inseparable extension is a $p$-basis and gives degree $p^r$"

## Statement
Let $K/F$ be a finite exponent-one purely inseparable extension of
characteristic $p$, and let $(b_1,\ldots,b_r)$ be a minimal generating family
for $K$ over $F$. Then it is a $p$-basis, and

$$[K:F]=p^r.$$

Conversely, every $p$-basis generates $K$ over $F$. The empty family gives the
trivial extension and degree $p^0=1$.
```

## DEPENDENCY: thm-steinitz-primitive-element-criterion

```markdown
title: "A finite field extension is simple if and only if it has finitely many intermediate fields"

## Statement
A finite field extension $E/F$ is simple if and only if it has finitely many
intermediate fields.
```

## DEPENDENCY: ex-algebraic-closure-of-a-finite-field

```markdown
title: "$\\overline{\\mathbb F_p}$ is the union of its finite subfields and is an infinite algebraic extension"

## Example
For a prime $p$, an algebraic closure $\overline{\mathbb F_p}$ is the union of
its finite subfields. It contains one subfield of order $p^n$ for every
$n\ge1$, the nested fields $\mathbb F_{p^{n!}}$ for $n\ge1$ exhaust it, and it
is an infinite algebraic extension of $\mathbb F_p$.
```

## DEPENDENCY: cor-element-algebraic-iff-simple-extension-finite

```markdown
title: "An element is algebraic over $F$ if and only if its simple extension $F(a)/F$ is finite"

## Statement
For an element $a$ of an extension $K/F$,

$$a\text{ is algebraic over }F\quad\Longleftrightarrow\quad F(a)/F\text{ is finite}.$$

If $a$ is algebraic with minimal polynomial of degree $n$, then $[F(a):F]=n$.
```
