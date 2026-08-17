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
label: n-27

run: frontier-15
role: refuter
label: n-27
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

## ITEM: ex-cube-root-extension-has-three-embeddings-and-one-automorphism

```markdown
---
id: ex-cube-root-extension-has-three-embeddings-and-one-automorphism
kind: example
title: "$\\mathbb Q(\\sqrt[3]{2})$ has three embeddings into $\\overline{\\mathbb Q}$ but only one $\\mathbb Q$-automorphism"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots, thm-eisenstein-irreducibility-criterion, cor-fields-of-characteristic-zero-and-finite-fields-are-perfect, thm-nth-roots-exist, thm-reals-ordered-field]
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
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 2 to 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Example

Let $r=\sqrt[3]{2}$ be the positive real cube root of $2$. The extension
$\mathbb Q(r)/\mathbb Q$ has three embeddings into an algebraic closure of
$\mathbb Q$, but its only $\mathbb Q$-automorphism is the identity.

## Facts & Assumptions

**Given:** The positive real cube root $r$ of $2$ and an algebraic closure $\Omega/\mathbb Q$.

[L1] Eisenstein's criterion proves irreducibility over $\mathbb Q$ for a primitive integer polynomial satisfying its divisibility hypotheses ([[thm-eisenstein-irreducibility-criterion]]).

[L2] Embeddings of a simple algebraic extension correspond to the distinct roots of its minimal polynomial ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]).

[L3] Characteristic-zero fields are perfect, so their irreducible polynomials are separable ([[cor-fields-of-characteristic-zero-and-finite-fields-are-perfect]]).

[L4] Positive real $n$th roots exist and are unique ([[thm-nth-roots-exist]]).

[L5] The real numbers form an ordered field ([[thm-reals-ordered-field]]).

## Verification

**Proof technique:** direct.

1.1 The polynomial $x^3-2$ is Eisenstein at $2$, so [L1] makes it the minimal polynomial of $r$. By [L3] its three roots in $\Omega$ are distinct, and [L2] gives three $\mathbb Q$-embeddings of $\mathbb Q(r)$ into $\Omega$. [L1, L2, L3]

1.2 The field $\mathbb Q(r)$ lies in $\mathbb R$. In an ordered field the map $x\mapsto x^3$ is strictly increasing, or directly $u^3-v^3=(u-v)(u^2+uv+v^2)$ with the second factor positive for $u\ne v$; hence [L4] and [L5] make $r$ the only real root of $x^3-2$. [L4, L5, algebra]

2.1 A $\mathbb Q$-automorphism of $\mathbb Q(r)$ must send $r$ to another root lying inside the same real field. Step 1.2 forces that image to be $r$, so the automorphism fixes the generator and is the identity. [step 1.2, L2] ∎

```

### Recorded proof contract for ex-cube-root-extension-has-three-embeddings-and-one-automorphism

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-eisenstein-irreducibility-criterion",
   "source_section": "Statement",
   "quote": "Let $f=a_nx^n+\\cdots+a_0\\in\\mathbb Z[x]$ be primitive with $n\\ge1$. If there is a prime $p$ such that\n\n$$ p\\nmid a_n,\\qquad p\\mid a_i\\ \\text{for every }i<n,\\qquad p^2\\nmid a_0, $$\n\nthen $f$ is irreducible in $\\mathbb Q[x]$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots",
   "source_section": "Statement",
   "quote": "Let $\\alpha$ be algebraic over $F$, and let $\\Omega$ be an algebraically closed\nfield containing $F$. Sending an $F$-embedding\n$\\sigma:F(\\alpha)\\to\\Omega$ to $\\sigma(\\alpha)$ is a bijection from the set of\nsuch embeddings to the set of distinct roots in $\\Omega$ of the minimal\npolynomial $m_\\alpha$. Consequently the number of embeddings is the number of\ndistinct roots of $m_\\alpha$, not the sum of their multiplicities.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L3",
   "source": "cor-fields-of-characteristic-zero-and-finite-fields-are-perfect",
   "source_section": "Statement",
   "quote": "Every field of characteristic zero is perfect. Every finite field is perfect,\nand every algebraically closed field is perfect.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-nth-roots-exist",
   "source_section": "Statement",
   "quote": "Let $\\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).\nFor every $a \\in \\mathbb{R}$ with $a \\ge 0$ and every $n \\in \\mathbb{N}$ with\n$n \\ge 1$ there is a **unique** $s \\in \\mathbb{R}$ with $s \\ge 0$ and $s^n = a$\n([[def-integer-power]]); we write\n\n$$s = a^{1/n} = \\sqrt[n]{a}.$$\n\nMoreover $a^{1/n} > 0$ when $a > 0$, and $a^{1/1} = a$.\n\n**This generalises the published [[thm-of-square-roots]], and the case $n = 2$ is\nnot new.** That theorem already produces the unique $\\sqrt{a} \\ge 0$ with\n$(\\sqrt{a})^2 = a$, and it is cited as such throughout the library; the notation\n$a^{1/2}$ introduced here is the same number. What is new is the passage to\ngeneral $n$: the completed square that drives the $n = 2$ argument has no direct\nanalogue, and its place is taken by the factorisation of $b^n - a^n$ and the\nresulting Lipschitz estimate ([[lem-power-difference-factorisation]]).",
   "uses": [
    "1.2"
   ]
  },
  {
   "fact": "L5",
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
   "claim": "The polynomial $x^3-2$ is Eisenstein at $2$, so [L1] makes it the minimal polynomial of $r$. By [L3] its three roots in $\\Omega$ are distinct, and [L2] gives three $\\mathbb Q$-embeddings of $\\mathbb Q(r)$ into $\\Omega$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "The field $\\mathbb Q(r)$ lies in $\\mathbb R$. In an ordered field the map $x\\mapsto x^3$ is strictly increasing, or directly $u^3-v^3=(u-v)(u^2+uv+v^2)$ with the second factor positive for $u\\ne v$; hence [L4] and [L5] make $r$ the only real root of $x^3-2$.",
   "step": "1.2",
   "inputs": [
    "L4",
    "L5",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "A $\\mathbb Q$-automorphism of $\\mathbb Q(r)$ must send $r$ to another root lying inside the same real field. Step 1.2 forces that image to be $r$, so the automorphism fixes the generator and is the identity.",
   "step": "2.1",
   "inputs": [
    "step 1.2",
    "L2"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For mathbb Q(sqrt[3]{2}) has three embeddings into overline{mathbb Q} but only one mathbb Q-automorphism, no possibly empty indexed operation occurs; the proof instead begins from Eisenstein makes x^3-2 the minimal polynomial, and characteristic zero makes its three closure roots distinct, so the simple-extension theorem gives three embeddings."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For \\mathbb Q(\\sqrt[3]{2}) has three embeddings into \\overline{\\mathbb Q} but only one \\mathbb Q-automorphism, step 1.1 states: \"The polynomial $x^3-2$ is Eisenstein at $2$, so [L1] makes it the minimal polynomial of $r$. By [L3] its three roots in $\\Omega$ are distinct, and [L2] gives three $\\mathbb Q$-embeddings of $\\mathbb Q(r)$ into $\\Omega$.\" This is the final proof check that every zero exponent, index, degree, coefficient, or element is either handled or excluded by the exact hypotheses."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For \\mathbb Q(\\sqrt[3]{2}) has three embeddings into \\overline{\\mathbb Q} but only one \\mathbb Q-automorphism, step 2.1 states: \"A $\\mathbb Q$-automorphism of $\\mathbb Q(r)$ must send $r$ to another root lying inside the same real field. Step 1.2 forces that image to be $r$, so the automorphism fixes the generator and is the identity.\" This is the final proof check that every degree-one, exponent-one, singleton, or identity instance allowed by the hypotheses is evaluated."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For \\mathbb Q(\\sqrt[3]{2}) has three embeddings into \\overline{\\mathbb Q} but only one \\mathbb Q-automorphism, step 1.1 states: \"The polynomial $x^3-2$ is Eisenstein at $2$, so [L1] makes it the minimal polynomial of $r$. By [L3] its three roots in $\\Omega$ are distinct, and [L2] gives three $\\mathbb Q$-embeddings of $\\mathbb Q(r)$ into $\\Omega$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For mathbb Q(sqrt[3]{2}) has three embeddings into overline{mathbb Q} but only one mathbb Q-automorphism, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from Eisenstein makes x^3-2 the minimal polynomial, and characteristic zero makes its three closure roots distinct, so the simple-extension theorem gives three embeddings."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For \\mathbb Q(\\sqrt[3]{2}) has three embeddings into \\overline{\\mathbb Q} but only one \\mathbb Q-automorphism, step 2.1 states: \"A $\\mathbb Q$-automorphism of $\\mathbb Q(r)$ must send $r$ to another root lying inside the same real field. Step 1.2 forces that image to be $r$, so the automorphism fixes the generator and is the identity.\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim mathbb Q(sqrt[3]{2}) has three embeddings into overline{mathbb Q} but only one mathbb Q-automorphism is not a biconditional, so no forward implication is asserted; the proof begins from Eisenstein makes x^3-2 the minimal polynomial, and characteristic zero makes its three closure roots distinct, so the simple-extension theorem gives three embeddings."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim mathbb Q(sqrt[3]{2}) has three embeddings into overline{mathbb Q} but only one mathbb Q-automorphism is not a biconditional, so no reverse implication is asserted; the proof begins from Eisenstein makes x^3-2 the minimal polynomial, and characteristic zero makes its three closure roots distinct, so the simple-extension theorem gives three embeddings."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-biquadratic-extension-has-four-embeddings

```markdown
---
id: ex-biquadratic-extension-has-four-embeddings
kind: example
title: "$\\mathbb Q(\\sqrt2,\\sqrt3)$ has four embeddings into $\\overline{\\mathbb Q}$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots, lem-restriction-fibres-for-embeddings-in-a-finite-tower, thm-tower-law-for-finite-field-extensions, thm-simple-algebraic-extension-quotient-power-basis-and-degree, def-field-extension-generated-subfields-and-simple-extension, thm-eisenstein-irreducibility-criterion]
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
    - title: "J. S. Milne, Fields and Galois Theory, Chapters 2 to 6"
      url: "https://www.jmilne.org/math/Books/FT0.pdf"
pipeline_run: null
---

## Example

The field $E=\mathbb Q(\sqrt2,\sqrt3)$ has degree four over $\mathbb Q$ and
has four embeddings into an algebraic closure. They are the independent sign
choices

$$(\sqrt2,\sqrt3)\longmapsto(\pm\sqrt2,\pm\sqrt3).$$

## Facts & Assumptions

**Given:** Positive real square roots $\sqrt2,\sqrt3$ and an algebraic closure $\Omega/\mathbb Q$.

[L1] Eisenstein's criterion proves the irreducibility of the integer polynomials used below ([[thm-eisenstein-irreducibility-criterion]]).

[L2] A simple algebraic extension has the power basis and degree of the minimal polynomial ([[thm-simple-algebraic-extension-quotient-power-basis-and-degree]]).

[L3] Ordinary degrees multiply in finite towers ([[thm-tower-law-for-finite-field-extensions]]).

[L4] Embeddings of a simple extension correspond to distinct roots of its minimal polynomial ([[thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots]]).

[L5] Restriction partitions embeddings in a finite tower into equal extension fibres ([[lem-restriction-fibres-for-embeddings-in-a-finite-tower]]).

[L6] The notation $F(\alpha,\beta)$ denotes the subfield generated by the named elements ([[def-field-extension-generated-subfields-and-simple-extension]]).

## Verification

**Proof technique:** direct.

1.1 Eisenstein at $2$, $3$, and $2$ makes $x^2-2$, $x^2-3$, and $x^2-6$ irreducible over $\mathbb Q$ by [L1]. Thus none of $\sqrt2,\sqrt3,\sqrt6$ is rational, and [L2] gives the basis $(1,\sqrt2)$ of $\mathbb Q(\sqrt2)/\mathbb Q$. [L1, L2]

2.1 If $\sqrt3=a+b\sqrt2$ with $a,b\in\mathbb Q$, squaring and using the basis gives $2ab=0$. If $b=0$, then $\sqrt3$ is rational; if $a=0$, then $2b$ is a rational square root of $6$. Both contradict step 1.1. Hence $x^2-3$ has no root in $\mathbb Q(\sqrt2)$ and is irreducible there. [step 1.1, L2, algebra]

3.1 By [L2] the second tower step has degree two, and [L3] gives $[E:\mathbb Q]=4$. [step 1.1, step 2.1, L2, L3]

4.1 The first square root has two distinct images by [L4]. Over each image of $\mathbb Q(\sqrt2)$, the second square root has the two distinct images $\pm\sqrt3$; [L5] shows these fibres exhaust all extensions. Thus the four independent sign choices are exactly the four embeddings. [L4, L5, L6] ∎

```

### Recorded proof contract for ex-biquadratic-extension-has-four-embeddings

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-eisenstein-irreducibility-criterion",
   "source_section": "Statement",
   "quote": "Let $f=a_nx^n+\\cdots+a_0\\in\\mathbb Z[x]$ be primitive with $n\\ge1$. If there is a prime $p$ such that\n\n$$ p\\nmid a_n,\\qquad p\\mid a_i\\ \\text{for every }i<n,\\qquad p^2\\nmid a_0, $$\n\nthen $f$ is irreducible in $\\mathbb Q[x]$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-simple-algebraic-extension-quotient-power-basis-and-degree",
   "source_section": "Statement",
   "quote": "Let $K/F$ be a field extension and let $a\\in K$ be algebraic with minimal\npolynomial $m_a$ of degree $n$. Evaluation induces an $F$-isomorphism\n$$F[x]/(m_a)\\cong F(a),\\qquad f+(m_a)\\longmapsto f(a).$$\nMoreover, every element of $F(a)$ has a unique expression\n$$c_0+c_1a+\\cdots+c_{n-1}a^{n-1},\\qquad c_j\\in F.$$\nThus $1,a,\\ldots,a^{n-1}$ is the **power basis**, and the **degree** of the\nsimple extension is $[F(a):F]=n$.",
   "uses": [
    "1.1",
    "2.1",
    "3.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-tower-law-for-finite-field-extensions",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq L$ be fields. If $K/F$ and $L/K$ are finite, then $L/F$ is finite and\n\n$$[L:F]=[L:K][K:F].$$",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots",
   "source_section": "Statement",
   "quote": "Let $\\alpha$ be algebraic over $F$, and let $\\Omega$ be an algebraically closed\nfield containing $F$. Sending an $F$-embedding\n$\\sigma:F(\\alpha)\\to\\Omega$ to $\\sigma(\\alpha)$ is a bijection from the set of\nsuch embeddings to the set of distinct roots in $\\Omega$ of the minimal\npolynomial $m_\\alpha$. Consequently the number of embeddings is the number of\ndistinct roots of $m_\\alpha$, not the sum of their multiplicities.",
   "uses": [
    "4.1"
   ]
  },
  {
   "fact": "L5",
   "source": "lem-restriction-fibres-for-embeddings-in-a-finite-tower",
   "source_section": "Statement",
   "quote": "Let $F\\subseteq K\\subseteq L$ be a finite tower and let $\\Omega$ be an algebraic\nclosure of $F$. Restriction defines a surjection\n\n$$\\operatorname{Hom}_F(L,\\Omega)\\longrightarrow\\operatorname{Hom}_F(K,\\Omega).$$\n\nFor every $F$-embedding $\\sigma:K\\to\\Omega$, its fibre is nonempty and has\ncardinality $[L:K]_s$ after transporting the $K$-structure along $\\sigma$.",
   "uses": [
    "4.1"
   ]
  },
  {
   "fact": "L6",
   "source": "def-field-extension-generated-subfields-and-simple-extension",
   "source_section": "Definition",
   "quote": "A **field extension** $K/F$ is a field $K$ together with a specified field\nhomomorphism $F\\to K$ ([[def-field]], [[def-field-homomorphism]]). Since that\nmap is injective, we identify $F$ with its image and write $F\\subseteq K$.\n\nFor $S\\subseteq K$, the **subring generated by $F$ and $S$** is\n$$F[S]=\\bigcap\\{R:R\\text{ is a subring of }K\\text{ and }F\\cup S\\subseteq R\\},$$\nand the **subfield generated by $F$ and $S$** is\n$$F(S)=\\bigcap\\{E:E\\text{ is a subfield of }K\\text{ and }F\\cup S\\subseteq E\\}.$$\nThese intersections are nonempty because $K$ is among the displayed subrings\nand subfields, and they are respectively a subring and a subfield\n([[def-subring]], [[def-subfield]]). Equivalently, $F[S]$ and $F(S)$ are the\nsmallest subring and subfield of $K$ containing $F\\cup S$. For a singleton,\nwrite $F[a]$ and $F(a)$. An extension $K/F$ is **simple** if $K=F(a)$ for some\n$a\\in K$.\n\nFor completeness, the asserted injectivity is immediate: if $\\varphi(a)=0$\nwith $a\\ne0$, then\n$1=\\varphi(a^{-1}a)=\\varphi(a^{-1})\\varphi(a)=0$, a contradiction.",
   "uses": [
    "4.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Eisenstein at $2$, $3$, and $2$ makes $x^2-2$, $x^2-3$, and $x^2-6$ irreducible over $\\mathbb Q$ by [L1]. Thus none of $\\sqrt2,\\sqrt3,\\sqrt6$ is rational, and [L2] gives the basis $(1,\\sqrt2)$ of $\\mathbb Q(\\sqrt2)/\\mathbb Q$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "If $\\sqrt3=a+b\\sqrt2$ with $a,b\\in\\mathbb Q$, squaring and using the basis gives $2ab=0$. If $b=0$, then $\\sqrt3$ is rational; if $a=0$, then $2b$ is a rational square root of $6$. Both contradict step 1.1. Hence $x^2-3$ has no root in $\\mathbb Q(\\sqrt2)$ and is irreducible there.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L2",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "By [L2] the second tower step has degree two, and [L3] gives $[E:\\mathbb Q]=4$.",
   "step": "3.1",
   "inputs": [
    "step 1.1",
    "step 2.1",
    "L2",
    "L3"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "The first square root has two distinct images by [L4]. Over each image of $\\mathbb Q(\\sqrt2)$, the second square root has the two distinct images $\\pm\\sqrt3$; [L5] shows these fibres exhaust all extensions. Thus the four independent sign choices are exactly the four embeddings.",
   "step": "4.1",
   "inputs": [
    "L4",
    "L5",
    "L6"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For mathbb Q(sqrt2,sqrt3) has four embeddings into overline{mathbb Q}, no possibly empty indexed operation occurs; the proof instead begins from The published degree-four computation gives the tower."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "For mathbb Q(sqrt2,sqrt3) has four embeddings into overline{mathbb Q}, the hypotheses leave no unrestricted zero denominator, exponent, degree, or list length; the proof instead begins from The published degree-four computation gives the tower."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "For mathbb Q(sqrt2,sqrt3) has four embeddings into overline{mathbb Q}, no free numerical parameter has a separate value-one branch; the proof instead begins from The published degree-four computation gives the tower."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For \\mathbb Q(\\sqrt2,\\sqrt3) has four embeddings into \\overline{\\mathbb Q}, step 2.1 states: \"If $\\sqrt3=a+b\\sqrt2$ with $a,b\\in\\mathbb Q$, squaring and using the basis gives $2ab=0$. If $b=0$, then $\\sqrt3$ is rational; if $a=0$, then $2b$ is a rational square root of $6$. Both contradict step 1.1. Hence $x^2-3$ has no root in $\\mathbb Q(\\sqrt2)$ and is irreducible there.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For mathbb Q(sqrt2,sqrt3) has four embeddings into overline{mathbb Q}, every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from The published degree-four computation gives the tower."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "For \\mathbb Q(\\sqrt2,\\sqrt3) has four embeddings into \\overline{\\mathbb Q}, step 2.1 states: \"If $\\sqrt3=a+b\\sqrt2$ with $a,b\\in\\mathbb Q$, squaring and using the basis gives $2ab=0$. If $b=0$, then $\\sqrt3$ is rational; if $a=0$, then $2b$ is a rational square root of $6$. Both contradict step 1.1. Hence $x^2-3$ has no root in $\\mathbb Q(\\sqrt2)$ and is irreducible there.\" This is the final proof check that each selected root, generator, basis, maximal object, coefficient set, or ambient closure is preceded by its existence proof."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim mathbb Q(sqrt2,sqrt3) has four embeddings into overline{mathbb Q} is not a biconditional, so no forward implication is asserted; the proof begins from The published degree-four computation gives the tower."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim mathbb Q(sqrt2,sqrt3) has four embeddings into overline{mathbb Q} is not a biconditional, so no reverse implication is asserted; the proof begins from The published degree-four computation gives the tower."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-x-p-minus-t-is-irreducible-and-inseparable

```markdown
---
id: ex-x-p-minus-t-is-irreducible-and-inseparable
kind: example
title: "$x^p-t$ is irreducible and inseparable over $\\mathbb F_p(t)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-rational-function-field-as-a-fraction-field, thm-polynomial-ring-over-a-field-is-a-ufd, lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power, thm-polynomial-is-separable-iff-coprime-to-its-derivative]
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

Over the rational function field $\mathbb F_p(t)$, the polynomial $x^p-t$ is
irreducible and inseparable. In a field containing a $p$th root $t^{1/p}$, it
equals $(x-t^{1/p})^p$.

## Facts & Assumptions

**Given:** A prime $p$ and the rational function field $\mathbb F_p(t)$.

[L1] The rational function field is the fraction field of $\mathbb F_p[t]$ ([[cor-rational-function-field-as-a-fraction-field]]).

[L2] A polynomial ring over a field is a unique factorisation domain ([[thm-polynomial-ring-over-a-field-is-a-ufd]]).

[L3] If a constant is not a $p$th power, then $x^p-a$ is irreducible in characteristic $p$ ([[lem-p-power-polynomial-is-irreducible-when-its-constant-is-not-a-pth-power]]).

[L4] A nonzero polynomial is separable exactly when it is coprime to its derivative ([[thm-polynomial-is-separable-iff-coprime-to-its-derivative]]).

## Verification

**Proof technique:** direct.

1.1 Suppose $t=(u/v)^p$ with coprime nonzero $u,v\in\mathbb F_p[t]$, using [L1]. Then $u^p=tv^p$. In the UFD of [L2], the exponent of the irreducible factor $t$ on the left is divisible by $p$, while on the right it is congruent to $1$ modulo $p$, a contradiction. Thus $t$ is not a $p$th power in $\mathbb F_p(t)$. [L1, L2, algebra]

2.1 By [L3], $x^p-t$ is irreducible. [step 1.1, L3]

3.1 Its derivative is zero, so [L4] makes it inseparable. In an extension containing $t^{1/p}$, the characteristic-$p$ binomial identity gives $x^p-t=(x-t^{1/p})^p$. [L4, algebra] ∎

```

### Recorded proof contract for ex-x-p-minus-t-is-irreducible-and-inseparable

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
   "source": "thm-polynomial-is-separable-iff-coprime-to-its-derivative",
   "source_section": "Statement",
   "quote": "Let $F$ be a field and let $0\\ne f\\in F[x]$. Then $f$ is separable over $F$ if and only if $\\gcd(f,f')=1$ in $F[x]$.",
   "uses": [
    "3.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Suppose $t=(u/v)^p$ with coprime nonzero $u,v\\in\\mathbb F_p[t]$, using [L1]. Then $u^p=tv^p$. In the UFD of [L2], the exponent of the irreducible factor $t$ on the left is divisible by $p$, while on the right it is congruent to $1$ modulo $p$, a contradiction. Thus $t$ is not a $p$th power in $\\mathbb F_p(t)$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "By [L3], $x^p-t$ is irreducible.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L3"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Its derivative is zero, so [L4] makes it inseparable. In an extension containing $t^{1/p}$, the characteristic-$p$ binomial identity gives $x^p-t=(x-t^{1/p})^p$.",
   "step": "3.1",
   "inputs": [
    "L4",
    "algebra"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "For x^p-t is irreducible and inseparable over mathbb F_p(t), no possibly empty indexed operation occurs; the proof instead begins from In the UFD mathbb F_p[t], comparison of exponents in a reduced fraction shows that t is not a pth power in mathbb F_p(t)."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For x^p-t is irreducible and inseparable over \\mathbb F_p(t), step 1.1 states: \"Suppose $t=(u/v)^p$ with coprime nonzero $u,v\\in\\mathbb F_p[t]$, using [L1]. Then $u^p=tv^p$. In the UFD of [L2], the exponent of the irreducible factor $t$ on the left is divisible by $p$, while on the right it is congruent to $1$ modulo $p$, a contradiction. Thus $t$ is not a $p$th power in $\\mathbb F_p(t)$.\" This is the final proof check that every zero exponent, index, degree, coefficient, or element is either handled or excluded by the exact hypotheses."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "For x^p-t is irreducible and inseparable over mathbb F_p(t), no free numerical parameter has a separate value-one branch; the proof instead begins from In the UFD mathbb F_p[t], comparison of exponents in a reduced fraction shows that t is not a pth power in mathbb F_p(t)."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For x^p-t is irreducible and inseparable over \\mathbb F_p(t), step 3.1 states: \"Its derivative is zero, so [L4] makes it inseparable. In an extension containing $t^{1/p}$, the characteristic-$p$ binomial identity gives $x^p-t=(x-t^{1/p})^p$.\" This is the final proof check that every trivial extension, repeated-root case, coincident endpoint, zero polynomial, or collapsed construction allowed by the hypotheses is resolved."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For x^p-t is irreducible and inseparable over mathbb F_p(t), every parameter is algebraic or discrete, so no ordered-interval or limiting endpoint exists; the proof begins from In the UFD mathbb F_p[t], comparison of exponents in a reduced fraction shows that t is not a pth power in mathbb F_p(t)."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "For x^p-t is irreducible and inseparable over mathbb F_p(t), only supplied data are used and no unproved nonempty selection occurs; the proof begins from In the UFD mathbb F_p[t], comparison of exponents in a reduced fraction shows that t is not a pth power in mathbb F_p(t)."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The claim x^p-t is irreducible and inseparable over mathbb F_p(t) is not a biconditional, so no forward implication is asserted; the proof begins from In the UFD mathbb F_p[t], comparison of exponents in a reduced fraction shows that t is not a pth power in mathbb F_p(t)."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The claim x^p-t is irreducible and inseparable over mathbb F_p(t) is not a biconditional, so no reverse implication is asserted; the proof begins from In the UFD mathbb F_p[t], comparison of exponents in a reduced fraction shows that t is not a pth power in mathbb F_p(t)."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, title and claim section only

## DEPENDENCY: thm-embeddings-of-a-simple-algebraic-extension-correspond-to-distinct-roots

```markdown
title: "$F$-embeddings of $F(\\alpha)$ into an algebraically closed field correspond to the distinct roots of $m_{\\alpha}$"

## Statement
Let $\alpha$ be algebraic over $F$, and let $\Omega$ be an algebraically closed
field containing $F$. Sending an $F$-embedding
$\sigma:F(\alpha)\to\Omega$ to $\sigma(\alpha)$ is a bijection from the set of
such embeddings to the set of distinct roots in $\Omega$ of the minimal
polynomial $m_\alpha$. Consequently the number of embeddings is the number of
distinct roots of $m_\alpha$, not the sum of their multiplicities.
```

## DEPENDENCY: thm-eisenstein-irreducibility-criterion

```markdown
title: 'Eisenstein criterion over the integers'

## Statement
Let $f=a_nx^n+\cdots+a_0\in\mathbb Z[x]$ be primitive with $n\ge1$. If there is a prime $p$ such that

$$ p\nmid a_n,\qquad p\mid a_i\ \text{for every }i<n,\qquad p^2\nmid a_0, $$

then $f$ is irreducible in $\mathbb Q[x]$.
```

## DEPENDENCY: cor-fields-of-characteristic-zero-and-finite-fields-are-perfect

```markdown
title: "Fields of characteristic zero, finite fields, and algebraically closed fields are perfect"

## Statement
Every field of characteristic zero is perfect. Every finite field is perfect,
and every algebraically closed field is perfect.
```

## DEPENDENCY: thm-nth-roots-exist

```markdown
title: "Existence and uniqueness of $n$-th roots: a unique $a^{1/n} \\ge 0$ with $(a^{1/n})^n = a$"

## Statement
Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).
For every $a \in \mathbb{R}$ with $a \ge 0$ and every $n \in \mathbb{N}$ with
$n \ge 1$ there is a **unique** $s \in \mathbb{R}$ with $s \ge 0$ and $s^n = a$
([[def-integer-power]]); we write

$$s = a^{1/n} = \sqrt[n]{a}.$$

Moreover $a^{1/n} > 0$ when $a > 0$, and $a^{1/1} = a$.

**This generalises the published [[thm-of-square-roots]], and the case $n = 2$ is
not new.** That theorem already produces the unique $\sqrt{a} \ge 0$ with
$(\sqrt{a})^2 = a$, and it is cited as such throughout the library; the notation
$a^{1/2}$ introduced here is the same number. What is new is the passage to
general $n$: the completed square that drives the $n = 2$ argument has no direct
analogue, and its place is taken by the factorisation of $b^n - a^n$ and the
resulting Lipschitz estimate ([[lem-power-difference-factorisation]]).
```

## DEPENDENCY: thm-reals-ordered-field

```markdown
title: "The reals form a totally ordered field"

## Statement
The relation of [[def-real-order]] is well defined and makes $\mathbb{R}$
([[thm-reals-field]]) a totally ordered field.
```

## DEPENDENCY: lem-restriction-fibres-for-embeddings-in-a-finite-tower

```markdown
title: "Restriction partitions embeddings in a finite tower into extension fibres"

## Statement
Let $F\subseteq K\subseteq L$ be a finite tower and let $\Omega$ be an algebraic
closure of $F$. Restriction defines a surjection

$$\operatorname{Hom}_F(L,\Omega)\longrightarrow\operatorname{Hom}_F(K,\Omega).$$

For every $F$-embedding $\sigma:K\to\Omega$, its fibre is nonempty and has
cardinality $[L:K]_s$ after transporting the $K$-structure along $\sigma$.
```

## DEPENDENCY: thm-tower-law-for-finite-field-extensions

```markdown
title: "Tower law for finite extensions: $[L:F]=[L:K][K:F]$"

## Statement
Let $F\subseteq K\subseteq L$ be fields. If $K/F$ and $L/K$ are finite, then $L/F$ is finite and

$$[L:F]=[L:K][K:F].$$
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

## DEPENDENCY: thm-polynomial-is-separable-iff-coprime-to-its-derivative

```markdown
title: 'A nonzero polynomial over a field is separable exactly when its gcd with its derivative is $1$'

## Statement
Let $F$ be a field and let $0\ne f\in F[x]$. Then $f$ is separable over $F$ if and only if $\gcd(f,f')=1$ in $F[x]$.
```
