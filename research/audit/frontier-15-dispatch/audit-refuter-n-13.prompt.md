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
label: n-13

run: frontier-15
role: refuter
label: n-13
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

## ITEM: thm-equivalent-characterizations-of-semisimple-rings

```markdown
---
id: thm-equivalent-characterizations-of-semisimple-rings
kind: theorem
title: "Equivalent module-theoretic characterizations of semisimple rings"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-semisimple-ring, thm-equivalent-characterizations-of-semisimple-modules, thm-submodules-and-quotients-of-semisimple-modules, cor-every-module-is-a-quotient-of-a-free-module, def-split-short-exact-sequence, thm-splitting-lemma-for-modules, def-projective-module, thm-projective-module-characterizations]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Crawley-Boevey, Noncommutative Algebra, Chapter 1 Sections 1.1-1.9"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
pipeline_run: null
---

## Statement

Assuming the Axiom of Choice, for a unital ring $R$ the following are equivalent: ${}_R R$ is semisimple; every left $R$-module is semisimple; every short exact sequence of left $R$-modules splits; and every left $R$-module is projective. See [[def-semisimple-ring]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A unital ring $R$ is semisimple when its left regular module ${}_R R$ is semisimple. This is a left-module definition and uses no Jacobson radical. For the zero ring, the regular module is zero and hence semisimple; the Wedderburn-Artin theorem below is stated for nonzero rings. ([[def-semisimple-ring]]).

[L2] Assuming the Axiom of Choice, every submodule and every quotient of a semisimple module is semisimple. ([[thm-submodules-and-quotients-of-semisimple-modules]]).

[L3] For every left $R$-module $M$, the free module $R^{(M)}$ on its underlying set admits a canonical surjection $\varepsilon_M:R^{(M)}\to M$, determined by $\varepsilon_M(e_m)=m$. Consequently $M\cong R^{(M)}/\ker\varepsilon_M$. ([[cor-every-module-is-a-quotient-of-a-free-module]]).

[L4] In a short exact sequence $$0\to A\xrightarrow iB\xrightarrow pC\to0,$$ a section of $p$ is a homomorphism $s:C\to B$ with $p\circ s=\operatorname{id}_C$, and a retraction of $i$ is a homomorphism $r:B\to A$ with $r\circ i=\operatorname{id}_A$. ([[def-split-short-exact-sequence]]).

[L5] For a short exact sequence $$0\to A\xrightarrow iB\xrightarrow pC\to0,$$ the following are equivalent: 1. $p$ has a section $s:C\to B$; 2. $i$ has a retraction $r:B\to A$; 3. there is an isomorphism $\Phi:A\oplus C\to B$ with $\Phi(a,0)=i(a)$ and $p(\Phi(a,c))=c$. ([[thm-splitting-lemma-for-modules]]).

[L6] A left $R$-module $P$ is projective if it has the lifting property for epimorphisms: whenever $q:E\to M$ is a surjective module homomorphism and $f:P\to M$ is a module homomorphism, there exists a module homomorphism $\tilde f:P\to E$ such that $q\circ\tilde f=f$ (def-module-homomorphism-kernel-image-and-cokernel, def-injection-surjection-bijection). ([[def-projective-module]]).

[L7] For a left $R$-module $P$, assertions 1 to 3 below are equivalent without choice. Under the Axiom of Choice, they are also equivalent to assertion 4: 1. $P$ is projective; 2. every short exact sequence $0\to K\to E\to P\to0$ splits; 3. $\operatorname{Hom}_R(P,-)$ takes every short exact sequence to a short exact sequence; 4. $P$ is a direct summand of a free module. ([[thm-projective-module-characterizations]]).

[L8] Assuming the Axiom of Choice, a module is semisimple if and only if every submodule has a complementary submodule. ([[thm-equivalent-characterizations-of-semisimple-modules]]).

## Proof

**Proof technique:** direct.

1.1 If ${}_RR$ is semisimple, every free left module, being a direct sum of copies of $R$, is semisimple; every module is a quotient of a free module, so every left module is semisimple. [L1, L2, L3, L4, L5, L6, L7, L8, given, algebra]

2.1 If every left module is semisimple, [L8] gives every submodule a complement, and the splitting lemma makes every short exact sequence split. Conversely, if every short exact sequence splits, the projective criterion makes every module projective; if every module is projective, each quotient map splits, so [L8] makes every module semisimple. [L5, L7, L8, step 1.1, given, algebra]

3.1 Applying the universal module condition to the left regular module recovers the first condition, and every clause is left-handed as asserted. This proves the stated claim. [step 2.1, given, algebra] ∎

```

### Recorded proof contract for thm-equivalent-characterizations-of-semisimple-rings

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-semisimple-ring",
   "source_section": "Definition",
   "quote": "A unital ring $R$ is **semisimple** when its left regular module ${}_R R$ is semisimple. This is a left-module definition and uses no Jacobson radical. For the zero ring, the regular module is zero and hence semisimple; the Wedderburn-Artin theorem below is stated for nonzero rings.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-submodules-and-quotients-of-semisimple-modules",
   "source_section": "Statement",
   "quote": "Assuming the Axiom of Choice, every submodule and every quotient of a semisimple module is semisimple. See [[thm-equivalent-characterizations-of-semisimple-modules]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "cor-every-module-is-a-quotient-of-a-free-module",
   "source_section": "Statement",
   "quote": "For every left $R$-module $M$, the free module $R^{(M)}$ on its underlying set admits a canonical surjection $\\varepsilon_M:R^{(M)}\\to M$, determined by $\\varepsilon_M(e_m)=m$. Consequently $M\\cong R^{(M)}/\\ker\\varepsilon_M$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "def-split-short-exact-sequence",
   "source_section": "Definition",
   "quote": "In a short exact sequence\n$$0\\to A\\xrightarrow iB\\xrightarrow pC\\to0,$$\na **section** of $p$ is a homomorphism $s:C\\to B$ with $p\\circ s=\\operatorname{id}_C$, and a **retraction** of $i$ is a homomorphism $r:B\\to A$ with $r\\circ i=\\operatorname{id}_A$.\n\nThe sequence **splits** if it has a section, equivalently, as proved in [[thm-splitting-lemma-for-modules]], if it has a retraction or if its middle term is isomorphic to $A\\oplus C$ compatibly with $i$ and $p$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-splitting-lemma-for-modules",
   "source_section": "Statement",
   "quote": "For a short exact sequence\n$$0\\to A\\xrightarrow iB\\xrightarrow pC\\to0,$$\nthe following are equivalent:\n\n1. $p$ has a section $s:C\\to B$;\n2. $i$ has a retraction $r:B\\to A$;\n3. there is an isomorphism $\\Phi:A\\oplus C\\to B$ with $\\Phi(a,0)=i(a)$ and $p(\\Phi(a,c))=c$.\n\nGiven a section, $\\Phi(a,c)=i(a)+s(c)$ and $B=i(A)\\oplus s(C)$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L6",
   "source": "def-projective-module",
   "source_section": "Definition",
   "quote": "A left $R$-module $P$ is **projective** if it has the lifting property for epimorphisms: whenever $q:E\\to M$ is a surjective module homomorphism and $f:P\\to M$ is a module homomorphism, there exists a module homomorphism $\\tilde f:P\\to E$ such that $q\\circ\\tilde f=f$ ([[def-module-homomorphism-kernel-image-and-cokernel]], [[def-injection-surjection-bijection]]).\n\nThe lift need not be unique. Projectivity asks for a lift in every such square.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L7",
   "source": "thm-projective-module-characterizations",
   "source_section": "Statement",
   "quote": "For a left $R$-module $P$, assertions 1 to 3 below are equivalent without choice. Under the Axiom of Choice, they are also equivalent to assertion 4:\n\n1. $P$ is projective;\n2. every short exact sequence $0\\to K\\to E\\to P\\to0$ splits;\n3. $\\operatorname{Hom}_R(P,-)$ takes every short exact sequence to a short exact sequence;\n4. $P$ is a direct summand of a free module.\n\nThe equivalence of 1 to 3 is choice-free. The implication $1\\Rightarrow4$ uses the canonical free cover and is choice-free; under AC, every free module is projective, so $4\\Rightarrow1$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L8",
   "source": "thm-equivalent-characterizations-of-semisimple-modules",
   "source_section": "Statement",
   "quote": "Assuming the Axiom of Choice, for a module $M$ the following are equivalent: $M$ is a direct sum of simple submodules; $M$ is the sum of its simple submodules; and every submodule of $M$ has a complementary submodule. See [[def-semisimple-module]].",
   "uses": [
    "1.1",
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "If ${}_RR$ is semisimple, every free left module, being a direct sum of copies of $R$, is semisimple; every module is a quotient of a free module, so every left module is semisimple.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "L4",
    "L5",
    "L6",
    "L7",
    "L8",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "If every left module is semisimple, [L8] gives every submodule a complement, and the splitting lemma makes every short exact sequence split. Conversely, if every short exact sequence splits, the projective criterion makes every module projective; if every module is projective, each quotient map splits, so [L8] makes every module semisimple.",
   "step": "2.1",
   "inputs": [
    "L5",
    "L7",
    "L8",
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Applying the universal module condition to the left regular module recovers the first condition, and every clause is left-handed as asserted. This proves the stated claim.",
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
   "reason": "Equivalent module-theoretic characterizations of semisimple rings: the claim “Assuming the Axiom of Choice, for a unital ring $R$ the following are equivalent: ${}_R R$ is semisimple; every left $R$-module is semisimple; every short exact sequence of left $R$-modules splits; and every le” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "Equivalent module-theoretic characterizations of semisimple rings: the claim “Assuming the Axiom of Choice, for a unital ring $R$ the following are equivalent: ${}_R R$ is semisimple; every left $R$-module is semisimple; every short exact sequence of left $R$-modules splits; and every le” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "Equivalent module-theoretic characterizations of semisimple rings: the claim “Assuming the Axiom of Choice, for a unital ring $R$ the following are equivalent: ${}_R R$ is semisimple; every left $R$-module is semisimple; every short exact sequence of left $R$-modules splits; and every le” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "not_applicable",
   "reason": "Equivalent module-theoretic characterizations of semisimple rings: the claim “Assuming the Axiom of Choice, for a unital ring $R$ the following are equivalent: ${}_R R$ is semisimple; every left $R$-module is semisimple; every short exact sequence of left $R$-modules splits; and every le” does not admit coincident endpoints, an empty choice, or a collapsed structure distinct from its general case."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "Equivalent module-theoretic characterizations of semisimple rings: the claim “Assuming the Axiom of Choice, for a unital ring $R$ the following are equivalent: ${}_R R$ is semisimple; every left $R$-module is semisimple; every short exact sequence of left $R$-modules splits; and every le” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Equivalent module-theoretic characterizations of semisimple rings: the claim “Assuming the Axiom of Choice, for a unital ring $R$ the following are equivalent: ${}_R R$ is semisimple; every left $R$-module is semisimple; every short exact sequence of left $R$-modules splits; and every le” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "Equivalent module-theoretic characterizations of semisimple rings: the forward implication of “Assuming the Axiom of Choice, for a unital ring $R$ the following are equivalent: ${}_R R$ is semisimple; every left $R$-module is semisimple; every short exact sequence of left $R$-modules splits; and every le” is established beginning at step 1.1; its first derived assertion is “If ${}_RR$ is semisimple, every free left module, being a direct sum of copies of $R$, is semisimple; every module is a quotient of a free module, so every left module is semisimple.”."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "Equivalent module-theoretic characterizations of semisimple rings: the reverse implication of “Assuming the Axiom of Choice, for a unital ring $R$ the following are equivalent: ${}_R R$ is semisimple; every left $R$-module is semisimple; every short exact sequence of left $R$-modules splits; and every le” is completed by step 3.1: “Applying the universal module condition to the left regular module recovers the first condition, and every clause is left-handed as asserted. This proves the stated claim.”."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: cor-left-and-right-semisimplicity-agree

```markdown
---
id: cor-left-and-right-semisimplicity-agree
kind: corollary
title: "Left and right semisimplicity of a ring agree"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-semisimple-ring, thm-wedderburn-artin-theorem, def-opposite-ring, thm-matrix-rings-over-division-rings-are-semisimple]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "William Crawley-Boevey, Noncommutative Algebra, Chapter 1 Sections 1.1-1.9"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
pipeline_run: null
---

## Statement

A unital ring is semisimple as a left regular module if and only if it is semisimple as a right regular module. See [[thm-wedderburn-artin-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A unital ring $R$ is semisimple when its left regular module ${}_R R$ is semisimple; the zero ring is semisimple because its regular module is zero. ([[def-semisimple-ring]]).

[L2] Let $R$ be a nonzero unital ring. Then $R$ is semisimple if and only if $$R\cong\prod_{i=1}^rM_{n_i}(D_i)$$ for positive integers $r,n_i$ and division rings $D_i$. ([[thm-wedderburn-artin-theorem]]).

[L3] For a unital ring $R$, the opposite ring $R^{\mathrm{op}}$ has the same underlying abelian group, identity, and addition as $R$, with multiplication $a\star b:=ba$. Associativity and both distributive laws follow from those of $R$ with the order reversed, and the same element $1$ is a two-sided identity. Thus the displayed operations really form a unital ring, including when $R$ is the zero ring. ([[def-opposite-ring]]).

[L4] For a division ring $D$ and $n\ge1$, the ring $M_n(D)$ is semisimple and its left regular module is a finite direct sum of simple column ideals. ([[thm-matrix-rings-over-division-rings-are-semisimple]]).

## Proof

**Proof technique:** direct.

1.1 First suppose that $R$ is semisimple on the left. If $R$ is the zero ring, its right regular module is also the zero module and is semisimple. Otherwise [L2] gives $R\cong\prod_iM_{n_i}(D_i)$. [L1, L2, given]

2.1 By [L4], it suffices to identify the opposite factors as matrix rings over division rings. Each $D_i^{\mathrm{op}}$ is a division ring, and entrywise transpose defines a ring isomorphism $$ M_{n_i}(D_i)^{\mathrm{op}}\longrightarrow M_{n_i}(D_i^{\mathrm{op}}),\qquad A\longmapsto A^{\mathsf T}, $$ because $(AB)^{\mathsf T}=B^{\mathsf T}A^{\mathsf T}$ with the products interpreted in the indicated rings. Hence $R^{\mathrm{op}}\cong\prod_iM_{n_i}(D_i^{\mathrm{op}})$. By [L4], each factor's left regular module is semisimple, and the regular module of the finite product is their finite direct sum. Thus $R^{\mathrm{op}}$ is left semisimple, equivalently $R$ is right semisimple. [L3, L4, step 1.1, given, algebra]

3.1 Conversely, if $R$ is right semisimple, then $R^{\mathrm{op}}$ is left semisimple. Applying steps 1.1–2.1 to $R^{\mathrm{op}}$ makes it right semisimple, which is exactly left semisimplicity of $R$. This also retains the zero-ring case. [L3, step 1.1, step 2.1, given, algebra] ∎

```

### Recorded proof contract for cor-left-and-right-semisimplicity-agree

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-semisimple-ring",
   "source_section": "Definition",
   "quote": "A unital ring $R$ is **semisimple** when its left regular module ${}_R R$ is semisimple. This is a left-module definition and uses no Jacobson radical. For the zero ring, the regular module is zero and hence semisimple; the Wedderburn-Artin theorem below is stated for nonzero rings.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-wedderburn-artin-theorem",
   "source_section": "Statement",
   "quote": "Let $R$ be a nonzero unital ring. Then $R$ is semisimple if and only if $$R\\cong\\prod_{i=1}^rM_{n_i}(D_i)$$ for positive integers $r,n_i$ and division rings $D_i$. See [[thm-endomorphism-ring-of-the-left-regular-module-is-opposite]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-opposite-ring",
   "source_section": "Definition",
   "quote": "For a unital ring $R$, the **opposite ring** $R^{\\mathrm{op}}$ has the same underlying abelian group, identity, and addition as $R$, with multiplication $a\\star b:=ba$. Associativity and both distributive laws follow from those of $R$ with the order reversed, and the same element $1$ is a two-sided identity. Thus the displayed operations really form a unital ring, including when $R$ is the zero ring.",
   "uses": [
    "2.1",
    "3.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-matrix-rings-over-division-rings-are-semisimple",
   "source_section": "Statement",
   "quote": "Let $D$ be a division ring and $n\\ge1$. On the set of $n\\times n$ arrays over $D$, use entrywise addition and the product\n$$\n(AB)_{ij}:=\\sum_{k=1}^n a_{ik}b_{kj}.\n$$\nThese operations make a ring $M_n(D)$, and this ring is semisimple. More precisely, its left regular module is the direct sum of the simple column ideals $M_n(D)e_{jj}\\cong D^n$ for $1\\le j\\le n$. See [[def-semisimple-ring]].",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "First suppose that $R$ is semisimple on the left. If $R$ is the zero ring, its right regular module is also the zero module and is semisimple. Otherwise [L2] gives $R\\cong\\prod_iM_{n_i}(D_i)$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "given"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "By [L4], it suffices to identify the opposite factors as matrix rings over division rings. Each $D_i^{\\mathrm{op}}$ is a division ring, and entrywise transpose defines a ring isomorphism $$ M_{n_i}(D_i)^{\\mathrm{op}}\\longrightarrow M_{n_i}(D_i^{\\mathrm{op}}),\\qquad A\\longmapsto A^{\\mathsf T}, $$ because $(AB)^{\\mathsf T}=B^{\\mathsf T}A^{\\mathsf T}$ with the products interpreted in the indicated rings. Hence $R^{\\mathrm{op}}\\cong\\prod_iM_{n_i}(D_i^{\\mathrm{op}})$. By [L4], each factor's left regular module is semisimple, and the regular module of the finite product is their finite direct sum. Thus $R^{\\mathrm{op}}$ is left semisimple, equivalently $R$ is right semisimple.",
   "step": "2.1",
   "inputs": [
    "L3",
    "L4",
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Conversely, if $R$ is right semisimple, then $R^{\\mathrm{op}}$ is left semisimple. Applying steps 1.1–2.1 to $R^{\\mathrm{op}}$ makes it right semisimple, which is exactly left semisimplicity of $R$. This also retains the zero-ring case.",
   "step": "3.1",
   "inputs": [
    "L3",
    "step 1.1",
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
   "reason": "Left and right semisimplicity of a ring agree: the claim “A unital ring is semisimple as a left regular module if and only if it is semisimple as a right regular module.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Step 1.1 checks the zero ring directly: both regular modules are zero and semisimple; step 3.1 retains this case in the converse."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "The one-element ring is the zero ring and is handled explicitly in steps 1.1 and 3.1."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The collapsed zero-ring case is separated in step 1.1 before Wedderburn–Artin is applied."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "Left and right semisimplicity of a ring agree: the claim “A unital ring is semisimple as a left regular module if and only if it is semisimple as a right regular module.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Left and right semisimplicity of a ring agree: the claim “A unital ring is semisimple as a left regular module if and only if it is semisimple as a right regular module.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "Steps 1.1–2.1 prove left semisimplicity implies right semisimplicity, separating the zero ring and using the explicit opposite-matrix isomorphism otherwise."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "Step 3.1 applies the established implication to $R^{\\mathrm{op}}$, translating right $R$-modules into left $R^{\\mathrm{op}}$-modules and back."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-prufer-p-group-is-artinian-not-noetherian

```markdown
---
id: ex-prufer-p-group-is-artinian-not-noetherian
kind: example
title: "The Prüfer $p$-group is Artinian but not Noetherian"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-noetherian-module, def-artinian-module, thm-rat-field, lem-int-embeds-rat, def-quotient-module]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Arvind Nair, Algebra I, Lecture 5"
      url: "https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf"
pipeline_run: null
---

## Example

For every prime $p$, the Prüfer group $\mathbb Z(p^\infty)\le\mathbb Q/\mathbb Z$ is Artinian but not Noetherian as a $\mathbb Z$-module. See [[def-noetherian-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] A left $R$-module $M$ is Noetherian when every submodule of $M$ is finitely generated (def-generated-cyclic-finitely-generated-and-free-modules). This finite-generation definition is the convention; its equivalence with ACC and the maximal condition is proved in thm-equivalent-characterizations-of-noetherian-modules. ([[def-noetherian-module]]).

[L2] A left $R$-module $M$ is Artinian when every descending chain $M_0\supseteq M_1\supseteq\cdots$ of submodules stabilizes: there is $N$ such that $M_n=M_N$ for all $n\ge N$. This is the descending chain condition. ([[def-artinian-module]]).

[L3] $(\mathbb{Q}, +, \cdot, 0, 1)$ with the operations of def-rat-operations is a field: a commutative ring with $1 \ne 0$ in which every nonzero element has a multiplicative inverse. ([[thm-rat-field]]).

[L4] The map $j(k) = [(k,1)]$ is injective and preserves addition, multiplication, and order. Composing with lem-nat-embeds-int embeds $\mathbb{N}$ in $\mathbb{Q}$; we write $k$ for $j(k)$ throughout. ([[lem-int-embeds-rat]]).

[L5] For $N\le M$, the additive cosets $m+N$ form the quotient module $M/N$ under the well-defined scalar action $$r(m+N):=rm+N.$$ ([[def-quotient-module]]).

## Verification

**Proof technique:** direct.

1.1 Let $C_n=\{a/p^n+\mathbb Z:a\in\mathbb Z\}\le\mathbb Q/\mathbb Z$. The class $1/p^n+\mathbb Z$ generates $C_n$ and has order $p^n$, while $C_n<C_{n+1}$. If an element of $\bigcup_kC_k$ has order dividing $p^n$, cancelling its denominator shows that it lies in $C_n$. Hence every cyclic subgroup of order $p^n$ is $C_n$, and $$\mathbb Z(p^\infty):=\bigcup_{n\ge0}C_n$$ is the Prüfer $p$-group. [L1, L2, L3, L4, L5, given, algebra]

2.1 The strict ascending chain $C_0<C_1<C_2<\cdots$ does not stabilize, so the module is not Noetherian. [step 1.1, given, algebra]

3.1 If a subgroup $H$ contains elements of unbounded order, then for every $n$ it contains an element whose cyclic subgroup contains the unique $C_n$, so $C_n\le H$ and $H=\mathbb Z(p^\infty)$. Otherwise the element orders in $H$ are bounded by some $p^n$, and step 1.1 gives $H\le C_n$. The subgroups of the cyclic group $C_n$ are the unique $C_m$ for $0\le m\le n$, so every proper subgroup of the Prüfer group is one of these finite cyclic groups. [step 1.1, step 2.1, given, algebra]

4.1 A descending chain either remains at the whole group or enters some finite $C_n$, after which it stabilizes because $C_n$ has only the chain $0=C_0<C_1<\cdots<C_n$ of subgroups. Thus DCC holds. The argument includes $C_0=0$ and is unchanged for $p=2$. This proves the stated claim. [step 3.1, given, algebra] ∎

```

### Recorded proof contract for ex-prufer-p-group-is-artinian-not-noetherian

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-noetherian-module",
   "source_section": "Definition",
   "quote": "A left $R$-module $M$ is **Noetherian** when every submodule of $M$ is finitely generated ([[def-generated-cyclic-finitely-generated-and-free-modules]]). This finite-generation definition is the convention; its equivalence with ACC and the maximal condition is proved in [[thm-equivalent-characterizations-of-noetherian-modules]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-artinian-module",
   "source_section": "Definition",
   "quote": "A left $R$-module $M$ is **Artinian** when every descending chain $M_0\\supseteq M_1\\supseteq\\cdots$ of submodules stabilizes: there is $N$ such that $M_n=M_N$ for all $n\\ge N$. This is the descending chain condition.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-rat-field",
   "source_section": "Statement",
   "quote": "$(\\mathbb{Q}, +, \\cdot, 0, 1)$ with the operations of [[def-rat-operations]]\nis a field: a commutative ring with $1 \\ne 0$ in which every nonzero element\nhas a multiplicative inverse.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "lem-int-embeds-rat",
   "source_section": "Statement",
   "quote": "The map $j(k) = [(k,1)]$ is injective and preserves addition, multiplication,\nand order. Composing with [[lem-nat-embeds-int]] embeds $\\mathbb{N}$ in\n$\\mathbb{Q}$; we write $k$ for $j(k)$ throughout.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "def-quotient-module",
   "source_section": "Definition",
   "quote": "Let $N\\le M$ be a submodule of a left $R$-module. Since the additive group of\n$M$ is abelian, $N$ is normal, so the additive quotient group $M/N$ consists of\nthe cosets $m+N$. Its proposed scalar action is\n\n$$r(m+N):=rm+N.$$\n\nThe well-definedness and module laws are established in\n[[thm-quotient-module-laws]]. The resulting module is the **quotient module**\n$M/N$.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Let $C_n=\\{a/p^n+\\mathbb Z:a\\in\\mathbb Z\\}\\le\\mathbb Q/\\mathbb Z$. The class $1/p^n+\\mathbb Z$ generates $C_n$ and has order $p^n$, while $C_n<C_{n+1}$. If an element of $\\bigcup_kC_k$ has order dividing $p^n$, cancelling its denominator shows that it lies in $C_n$. Hence every cyclic subgroup of order $p^n$ is $C_n$, and $$\\mathbb Z(p^\\infty):=\\bigcup_{n\\ge0}C_n$$ is the Prüfer $p$-group.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "L4",
    "L5",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "The strict ascending chain $C_0<C_1<C_2<\\cdots$ does not stabilize, so the module is not Noetherian.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "If a subgroup $H$ contains elements of unbounded order, then for every $n$ it contains an element whose cyclic subgroup contains the unique $C_n$, so $C_n\\le H$ and $H=\\mathbb Z(p^\\infty)$. Otherwise the element orders in $H$ are bounded by some $p^n$, and step 1.1 gives $H\\le C_n$. The subgroups of the cyclic group $C_n$ are the unique $C_m$ for $0\\le m\\le n$, so every proper subgroup of the Prüfer group is one of these finite cyclic groups.",
   "step": "3.1",
   "inputs": [
    "step 1.1",
    "step 2.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "A descending chain either remains at the whole group or enters some finite $C_n$, after which it stabilizes because $C_n$ has only the chain $0=C_0<C_1<\\cdots<C_n$ of subgroups. Thus DCC holds. The argument includes $C_0=0$ and is unchanged for $p=2$. This proves the stated claim.",
   "step": "4.1",
   "inputs": [
    "step 3.1",
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
   "reason": "The Prüfer $p$-group is Artinian but not Noetherian: the claim “For every prime $p$, the Prüfer group $\\mathbb Z(p^\\infty)\\le\\mathbb Q/\\mathbb Z$ is Artinian but not Noetherian as a $\\mathbb Z$-module.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "The Prüfer $p$-group is Artinian but not Noetherian: the zero or trivial specialization for “For every prime $p$, the Prüfer group $\\mathbb Z(p^\\infty)\\le\\mathbb Q/\\mathbb Z$ is Artinian but not Noetherian as a $\\mathbb Z$-module.” is resolved in step 4.1: “A descending chain either remains at the whole group or enters some finite $C_n$, after which it stabilizes because $C_n$ has only the chain $0=C_0<C_1<\\cdots<C_n$ of subgroups. Thus DCC holds. The argument includes $C_0=0$ and is”."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "The Prüfer $p$-group is Artinian but not Noetherian: the smallest positive, one-factor, or $p=2$ specialization for “For every prime $p$, the Prüfer group $\\mathbb Z(p^\\infty)\\le\\mathbb Q/\\mathbb Z$ is Artinian but not Noetherian as a $\\mathbb Z$-module.” is resolved in step 4.1: “A descending chain either remains at the whole group or enters some finite $C_n$, after which it stabilizes because $C_n$ has only the chain $0=C_0<C_1<\\cdots<C_n$ of subgroups. Thus DCC holds. The argument includes $C_0=0$ and is”."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The Prüfer $p$-group is Artinian but not Noetherian: the collapsed or coincident-input case admitted by the hypotheses for “For every prime $p$, the Prüfer group $\\mathbb Z(p^\\infty)\\le\\mathbb Q/\\mathbb Z$ is Artinian but not Noetherian as a $\\mathbb Z$-module.” is resolved in step 4.1: “A descending chain either remains at the whole group or enters some finite $C_n$, after which it stabilizes because $C_n$ has only the chain $0=C_0<C_1<\\cdots<C_n$ of subgroups. Thus DCC holds. The argument includes $C_0=0$ and is”."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "The Prüfer $p$-group is Artinian but not Noetherian: the initial index and termination or stabilization endpoint for “For every prime $p$, the Prüfer group $\\mathbb Z(p^\\infty)\\le\\mathbb Q/\\mathbb Z$ is Artinian but not Noetherian as a $\\mathbb Z$-module.” is resolved in step 4.1: “A descending chain either remains at the whole group or enters some finite $C_n$, after which it stabilizes because $C_n$ has only the chain $0=C_0<C_1<\\cdots<C_n$ of subgroups. Thus DCC holds. The argument includes $C_0=0$ and is”."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "The Prüfer $p$-group is Artinian but not Noetherian: the claim “For every prime $p$, the Prüfer group $\\mathbb Z(p^\\infty)\\le\\mathbb Q/\\mathbb Z$ is Artinian but not Noetherian as a $\\mathbb Z$-module.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The Prüfer $p$-group is Artinian but not Noetherian: the claim “For every prime $p$, the Prüfer group $\\mathbb Z(p^\\infty)\\le\\mathbb Q/\\mathbb Z$ is Artinian but not Noetherian as a $\\mathbb Z$-module.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The Prüfer $p$-group is Artinian but not Noetherian: the claim “For every prime $p$, the Prüfer group $\\mathbb Z(p^\\infty)\\le\\mathbb Q/\\mathbb Z$ is Artinian but not Noetherian as a $\\mathbb Z$-module.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, title and claim section only

## DEPENDENCY: def-semisimple-ring

```markdown
title: "A semisimple ring as a ring whose left regular module is semisimple"

## Definition
A unital ring $R$ is **semisimple** when its left regular module ${}_R R$ is semisimple. This is a left-module definition and uses no Jacobson radical. For the zero ring, the regular module is zero and hence semisimple; the Wedderburn-Artin theorem below is stated for nonzero rings.
```

## DEPENDENCY: thm-equivalent-characterizations-of-semisimple-modules

```markdown
title: "Equivalent characterizations of semisimple modules"

## Statement
Assuming the Axiom of Choice, for a module $M$ the following are equivalent: $M$ is a direct sum of simple submodules; $M$ is the sum of its simple submodules; and every submodule of $M$ has a complementary submodule. See [[def-semisimple-module]].
```

## DEPENDENCY: thm-submodules-and-quotients-of-semisimple-modules

```markdown
title: "Under Choice, submodules and quotients of semisimple modules are semisimple"

## Statement
Assuming the Axiom of Choice, every submodule and every quotient of a semisimple module is semisimple. See [[thm-equivalent-characterizations-of-semisimple-modules]].
```

## DEPENDENCY: cor-every-module-is-a-quotient-of-a-free-module

```markdown
title: "Every module is a quotient of a free module"

## Statement
For every left $R$-module $M$, the free module $R^{(M)}$ on its underlying set admits a canonical surjection $\varepsilon_M:R^{(M)}\to M$, determined by $\varepsilon_M(e_m)=m$. Consequently $M\cong R^{(M)}/\ker\varepsilon_M$.
```

## DEPENDENCY: def-split-short-exact-sequence

```markdown
title: "Split short exact sequences, sections, and retractions"

## Definition
In a short exact sequence
$$0\to A\xrightarrow iB\xrightarrow pC\to0,$$
a **section** of $p$ is a homomorphism $s:C\to B$ with $p\circ s=\operatorname{id}_C$, and a **retraction** of $i$ is a homomorphism $r:B\to A$ with $r\circ i=\operatorname{id}_A$.

The sequence **splits** if it has a section, equivalently, as proved in [[thm-splitting-lemma-for-modules]], if it has a retraction or if its middle term is isomorphic to $A\oplus C$ compatibly with $i$ and $p$.
```

## DEPENDENCY: thm-splitting-lemma-for-modules

```markdown
title: "The splitting lemma for short exact sequences of modules"

## Statement
For a short exact sequence
$$0\to A\xrightarrow iB\xrightarrow pC\to0,$$
the following are equivalent:

1. $p$ has a section $s:C\to B$;
2. $i$ has a retraction $r:B\to A$;
3. there is an isomorphism $\Phi:A\oplus C\to B$ with $\Phi(a,0)=i(a)$ and $p(\Phi(a,c))=c$.

Given a section, $\Phi(a,c)=i(a)+s(c)$ and $B=i(A)\oplus s(C)$.
```

## DEPENDENCY: def-projective-module

```markdown
title: "Projective modules and the lifting property"

## Definition
A left $R$-module $P$ is **projective** if it has the lifting property for epimorphisms: whenever $q:E\to M$ is a surjective module homomorphism and $f:P\to M$ is a module homomorphism, there exists a module homomorphism $\tilde f:P\to E$ such that $q\circ\tilde f=f$ ([[def-module-homomorphism-kernel-image-and-cokernel]], [[def-injection-surjection-bijection]]).

The lift need not be unique. Projectivity asks for a lift in every such square.
```

## DEPENDENCY: thm-projective-module-characterizations

```markdown
title: "Equivalent characterizations of projective modules"

## Statement
For a left $R$-module $P$, assertions 1 to 3 below are equivalent without choice. Under the Axiom of Choice, they are also equivalent to assertion 4:

1. $P$ is projective;
2. every short exact sequence $0\to K\to E\to P\to0$ splits;
3. $\operatorname{Hom}_R(P,-)$ takes every short exact sequence to a short exact sequence;
4. $P$ is a direct summand of a free module.

The equivalence of 1 to 3 is choice-free. The implication $1\Rightarrow4$ uses the canonical free cover and is choice-free; under AC, every free module is projective, so $4\Rightarrow1$.
```

## DEPENDENCY: thm-wedderburn-artin-theorem

```markdown
title: "Wedderburn–Artin theorem for semisimple rings"

## Statement
Let $R$ be a nonzero unital ring. Then $R$ is semisimple if and only if $$R\cong\prod_{i=1}^rM_{n_i}(D_i)$$ for positive integers $r,n_i$ and division rings $D_i$. See [[thm-endomorphism-ring-of-the-left-regular-module-is-opposite]].
```

## DEPENDENCY: def-opposite-ring

```markdown
title: "The opposite ring $R^{\\mathrm{op}}$"

## Definition
For a unital ring $R$, the **opposite ring** $R^{\mathrm{op}}$ has the same underlying abelian group, identity, and addition as $R$, with multiplication $a\star b:=ba$. Associativity and both distributive laws follow from those of $R$ with the order reversed, and the same element $1$ is a two-sided identity. Thus the displayed operations really form a unital ring, including when $R$ is the zero ring.
```

## DEPENDENCY: thm-matrix-rings-over-division-rings-are-semisimple

```markdown
title: "Matrix rings over division rings are semisimple"

## Statement
Let $D$ be a division ring and $n\ge1$. On the set of $n\times n$ arrays over $D$, use entrywise addition and the product
$$
(AB)_{ij}:=\sum_{k=1}^n a_{ik}b_{kj}.
$$
These operations make a ring $M_n(D)$, and this ring is semisimple. More precisely, its left regular module is the direct sum of the simple column ideals $M_n(D)e_{jj}\cong D^n$ for $1\le j\le n$. See [[def-semisimple-ring]].
```

## DEPENDENCY: def-noetherian-module

```markdown
title: "Noetherian modules: every submodule is finitely generated"

## Definition
A left $R$-module $M$ is **Noetherian** when every submodule of $M$ is finitely generated ([[def-generated-cyclic-finitely-generated-and-free-modules]]). This finite-generation definition is the convention; its equivalence with ACC and the maximal condition is proved in [[thm-equivalent-characterizations-of-noetherian-modules]].
```

## DEPENDENCY: def-artinian-module

```markdown
title: "Artinian modules by the descending chain condition"

## Definition
A left $R$-module $M$ is **Artinian** when every descending chain $M_0\supseteq M_1\supseteq\cdots$ of submodules stabilizes: there is $N$ such that $M_n=M_N$ for all $n\ge N$. This is the descending chain condition.
```

## DEPENDENCY: thm-rat-field

```markdown
title: "The rationals form a field"

## Statement
$(\mathbb{Q}, +, \cdot, 0, 1)$ with the operations of [[def-rat-operations]]
is a field: a commutative ring with $1 \ne 0$ in which every nonzero element
has a multiplicative inverse.
```

## DEPENDENCY: lem-int-embeds-rat

```markdown
title: "The integers embed in the rationals"

## Statement
The map $j(k) = [(k,1)]$ is injective and preserves addition, multiplication,
and order. Composing with [[lem-nat-embeds-int]] embeds $\mathbb{N}$ in
$\mathbb{Q}$; we write $k$ for $j(k)$ throughout.
```

## DEPENDENCY: def-quotient-module

```markdown
title: 'Quotient module $M/N$ with scalar multiplication on additive cosets'

## Definition
Let $N\le M$ be a submodule of a left $R$-module. Since the additive group of
$M$ is abelian, $N$ is normal, so the additive quotient group $M/N$ consists of
the cosets $m+N$. Its proposed scalar action is

$$r(m+N):=rm+N.$$

The well-definedness and module laws are established in
[[thm-quotient-module-laws]]. The resulting module is the **quotient module**
$M/N$.
```
