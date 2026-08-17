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
label: rr-7

run: frontier-15
role: refuter
label: rr-7
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

## ITEM: thm-chain-conditions-in-short-exact-sequences

```markdown
---
id: thm-chain-conditions-in-short-exact-sequences
kind: theorem
title: "Noetherian and Artinian conditions are each exact in short exact sequences"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-noetherian-module, def-artinian-module, thm-equivalent-characterizations-of-noetherian-modules, thm-equivalent-characterizations-of-artinian-modules, thm-second-isomorphism-theorem-modules, thm-correspondence-theorem-modules, def-exact-and-short-exact-sequences-of-modules]
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

In a short exact sequence $0\to N\to M\to Q\to0$, the module $M$ is Noetherian if and only if $N$ and $Q$ are Noetherian; the same equivalence holds with “Artinian” in place of “Noetherian”. See [[def-noetherian-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A left $R$-module $M$ is Noetherian when every submodule of $M$ is finitely generated (def-generated-cyclic-finitely-generated-and-free-modules). This finite-generation definition is the convention; its equivalence with ACC and the maximal condition is proved in thm-equivalent-characterizations-of-noetherian-modules. ([[def-noetherian-module]]).

[L2] A left $R$-module $M$ is Artinian when every descending chain $M_0\supseteq M_1\supseteq\cdots$ of submodules stabilizes: there is $N$ such that $M_n=M_N$ for all $n\ge N$. This is the descending chain condition. ([[def-artinian-module]]).

[L3] For submodules $L,N\le M$, there is a canonical isomorphism $$L/(L\cap N)\cong(L+N)/N.$$. ([[thm-second-isomorphism-theorem-modules]]).

[L4] For $N\le M$, inverse image and quotient induce mutually inverse inclusion-preserving bijections between submodules of $M/N$ and submodules of $M$ containing $N$. They preserve sums, intersections, and successive quotients. ([[thm-correspondence-theorem-modules]]).

[L5] A short exact sequence is an exact sequence $$0\longrightarrow N\xrightarrow{i}M\xrightarrow{p}Q\longrightarrow0;$$ thus $i$ is injective, $p$ is surjective, and $\operatorname{im}i=\ker p$. ([[def-exact-and-short-exact-sequences-of-modules]]).

[L6] A module is Noetherian if and only if every ascending chain of submodules stabilizes. ([[thm-equivalent-characterizations-of-noetherian-modules]]).

[L7] A module is Artinian if and only if every descending chain of submodules stabilizes. ([[thm-equivalent-characterizations-of-artinian-modules]]).

## Proof

**Proof technique:** direct.

1.1 Identify $N$ with its image in $M$. A chain in $N$ is a chain in $M$, and the correspondence theorem lifts every chain in $Q=M/N$ to a chain of submodules of $M$ containing $N$; hence both ACC and DCC pass from $M$ to $N$ and $Q$. [L1, L2, L3, L4, L5, L6, L7, given, algebra]

2.1 Conversely, for a chain $(M_i)$ in $M$, the chains $(M_i\cap N)$ and $((M_i+N)/N)$ stabilize when $N$ and $Q$ have the relevant chain condition. If $M_i\subseteq M_j$ are beyond both stabilization indices and $x\in M_j$, equality of the images gives $y\in M_i$ with $x-y\in N$; equality of the intersections then puts $x-y\in M_i$, so $x\in M_i$. The same argument with the inclusions reversed handles descending chains. [step 1.1, given, algebra]

3.1 Thus $M$ has ACC exactly when $N$ and $Q$ do, and it has DCC exactly when $N$ and $Q$ do. Facts [L6] and [L7] convert these chain statements into the asserted Noetherian and Artinian equivalences. [L6, L7, step 1.1, step 2.1] ∎

```

### Recorded proof contract for thm-chain-conditions-in-short-exact-sequences

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
   "source": "thm-second-isomorphism-theorem-modules",
   "source_section": "Statement",
   "quote": "For submodules $L,N\\le M$, there is a canonical isomorphism $$L/(L\\cap N)\\cong(L+N)/N.$$ See [[thm-first-isomorphism-theorem-modules]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-correspondence-theorem-modules",
   "source_section": "Statement",
   "quote": "For $N\\le M$, inverse image and quotient induce mutually inverse inclusion-preserving bijections between submodules of $M/N$ and submodules of $M$ containing $N$. They preserve sums, intersections, and successive quotients. See [[def-quotient-module]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "def-exact-and-short-exact-sequences-of-modules",
   "source_section": "Definition",
   "quote": "A sequence of left $R$-modules and homomorphisms\n$$\\cdots\\longrightarrow M_{i-1}\\xrightarrow{d_{i-1}}M_i\\xrightarrow{d_i}M_{i+1}\\longrightarrow\\cdots$$\nis **exact at $M_i$** if $\\operatorname{im}d_{i-1}=\\ker d_i$ ([[def-module-homomorphism-kernel-image-and-cokernel]]). It is **exact** if it is exact at every displayed module at which two arrows meet.\n\nA **short exact sequence** is an exact sequence\n$$0\\longrightarrow A\\xrightarrow{i}B\\xrightarrow{p}C\\longrightarrow0.$$\nThus $i$ is injective, $p$ is surjective, and $\\operatorname{im}i=\\ker p$ ([[thm-module-kernel-image-and-injectivity]]).",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L6",
   "source": "thm-equivalent-characterizations-of-noetherian-modules",
   "source_section": "Statement",
   "quote": "For a left $R$-module $M$, the following are equivalent: every submodule is finitely generated; every ascending chain of submodules stabilizes; and every nonempty family of submodules has a maximal member. The implication from ACC to the maximal condition uses dependent choice; the other displayed implications are choice-free. See [[def-noetherian-module]].",
   "uses": [
    "1.1",
    "3.1"
   ]
  },
  {
   "fact": "L7",
   "source": "thm-equivalent-characterizations-of-artinian-modules",
   "source_section": "Statement",
   "quote": "For a left $R$-module $M$, DCC is equivalent to the condition that every nonempty family of submodules has a minimal member. The implication from DCC to the minimal condition uses dependent choice. See [[def-artinian-module]].",
   "uses": [
    "1.1",
    "3.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Identify $N$ with its image in $M$. A chain in $N$ is a chain in $M$, and the correspondence theorem lifts every chain in $Q=M/N$ to a chain of submodules of $M$ containing $N$; hence both ACC and DCC pass from $M$ to $N$ and $Q$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "L4",
    "L5",
    "L6",
    "L7",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Conversely, for a chain $(M_i)$ in $M$, the chains $(M_i\\cap N)$ and $((M_i+N)/N)$ stabilize when $N$ and $Q$ have the relevant chain condition. If $M_i\\subseteq M_j$ are beyond both stabilization indices and $x\\in M_j$, equality of the images gives $y\\in M_i$ with $x-y\\in N$; equality of the intersections then puts $x-y\\in M_i$, so $x\\in M_i$. The same argument with the inclusions reversed handles descending chains.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Thus $M$ has ACC exactly when $N$ and $Q$ do, and it has DCC exactly when $N$ and $Q$ do. Facts [L6] and [L7] convert these chain statements into the asserted Noetherian and Artinian equivalences.",
   "step": "3.1",
   "inputs": [
    "L6",
    "L7",
    "step 1.1",
    "step 2.1"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "Noetherian and Artinian conditions are each exact in short exact sequences: the claim “In a short exact sequence $0\\to N\\to M\\to Q\\to0$, the module $M$ is Noetherian if and only if $N$ and $Q$ are Noetherian; the same equivalence holds with “Artinian” in place of “Noetherian”.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "Noetherian and Artinian conditions are each exact in short exact sequences: the claim “In a short exact sequence $0\\to N\\to M\\to Q\\to0$, the module $M$ is Noetherian if and only if $N$ and $Q$ are Noetherian; the same equivalence holds with “Artinian” in place of “Noetherian”.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "Noetherian and Artinian conditions are each exact in short exact sequences: the claim “In a short exact sequence $0\\to N\\to M\\to Q\\to0$, the module $M$ is Noetherian if and only if $N$ and $Q$ are Noetherian; the same equivalence holds with “Artinian” in place of “Noetherian”.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "not_applicable",
   "reason": "Noetherian and Artinian conditions are each exact in short exact sequences: the claim “In a short exact sequence $0\\to N\\to M\\to Q\\to0$, the module $M$ is Noetherian if and only if $N$ and $Q$ are Noetherian; the same equivalence holds with “Artinian” in place of “Noetherian”.” does not admit coincident endpoints, an empty choice, or a collapsed structure distinct from its general case."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "Noetherian and Artinian conditions are each exact in short exact sequences: the initial index and termination or stabilization endpoint for “In a short exact sequence $0\\to N\\to M\\to Q\\to0$, the module $M$ is Noetherian if and only if $N$ and $Q$ are Noetherian; the same equivalence holds with “Artinian” in place of “Noetherian”.” is resolved in step 3.1: “Thus $M$ has ACC exactly when $N$ and $Q$ do, and it has DCC exactly when $N$ and $Q$ do. Using the established characterizations of Noetherian and Artinian modules gives both asserted equivalences. This proves the stated claim.”."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Noetherian and Artinian conditions are each exact in short exact sequences: the claim “In a short exact sequence $0\\to N\\to M\\to Q\\to0$, the module $M$ is Noetherian if and only if $N$ and $Q$ are Noetherian; the same equivalence holds with “Artinian” in place of “Noetherian”.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "Noetherian and Artinian conditions are each exact in short exact sequences: the forward implication of “In a short exact sequence $0\\to N\\to M\\to Q\\to0$, the module $M$ is Noetherian if and only if $N$ and $Q$ are Noetherian; the same equivalence holds with “Artinian” in place of “Noetherian”.” is established beginning at step 1.1; its first derived assertion is “Identify $N$ with its image in $M$. A chain in $N$ is a chain in $M$, and the correspondence theorem lifts every chain in $Q=M/N$ to a chain of submodules of $M$ containing $N$; hence both ACC and DCC pass from $M$ to $N$ and $Q$.”."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "Noetherian and Artinian conditions are each exact in short exact sequences: the reverse implication of “In a short exact sequence $0\\to N\\to M\\to Q\\to0$, the module $M$ is Noetherian if and only if $N$ and $Q$ are Noetherian; the same equivalence holds with “Artinian” in place of “Noetherian”.” is completed by step 3.1: “Thus $M$ has ACC exactly when $N$ and $Q$ do, and it has DCC exactly when $N$ and $Q$ do. Using the established characterizations of Noetherian and Artinian modules gives both asserted equivalences. This proves the stated claim.”."
  }
 ],
 "finite_smoke": []
}
```

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

## ITEM: ex-matrix-ring-decomposition-into-minimal-left-ideals

```markdown
---
id: ex-matrix-ring-decomposition-into-minimal-left-ideals
kind: example
title: "$M_n(F)$ as a direct sum of minimal left ideals"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-matrix-rings-over-division-rings-are-semisimple, thm-simple-modules-over-semisimple-rings, def-matrix-units]
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

For every field $F$ and $n\ge1$, the left regular module of $M_n(F)$ is the internal direct sum $$M_n(F)=\bigoplus_{j=1}^n M_n(F)e_{jj}$$ of simple left ideals. See [[thm-matrix-rings-over-division-rings-are-semisimple]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] For a division ring $D$ and $n\ge1$, the left regular module of $M_n(D)$ is the direct sum of its simple column ideals $M_n(D)e_{jj}\cong D^n$. ([[thm-matrix-rings-over-division-rings-are-semisimple]]).

[L2] For $r\ge1$, $n_i\ge1$, and division rings $D_i$, every simple left module over $\prod_iM_{n_i}(D_i)$ is supported on exactly one factor and is isomorphic to that factor's column module $D_i^{n_i}$. ([[thm-simple-modules-over-semisimple-rings]]).

[L3] The matrix unit $E_{ij}\in M_{m\times n}(F)$ has entries $$(E_{ij})_{rs}=\delta_{ri}\delta_{sj},$$ so it has entry $1$ in position $(i,j)$ and $0$ everywhere else. ([[def-matrix-units]]).

## Verification

**Proof technique:** direct.

1.1 The left ideal $M_n(F)e_{jj}$ consists of matrices supported in column $j$. Reading that column identifies it with the natural column module $F^n$. If a nonzero vector lies in a submodule of $F^n$, matrix units send it to every standard basis vector, so the submodule is all of $F^n$; each column ideal is therefore simple. [L1, L2, L3, given, algebra]

2.1 Every matrix is the sum of its column matrices, and matrices supported in distinct columns have zero intersection. Hence $M_n(F)=\bigoplus_{j=1}^nM_n(F)e_{jj}$ as a left module. [step 1.1, given, algebra]

3.1 For $n=1$ this is the single simple left ideal $F$. The decomposition selects $n$ minimal left ideals but makes no assertion that these are the only minimal left ideals. This proves the stated claim. [step 2.1, given, algebra] ∎

```

### Recorded proof contract for ex-matrix-ring-decomposition-into-minimal-left-ideals

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-matrix-rings-over-division-rings-are-semisimple",
   "source_section": "Statement",
   "quote": "Let $D$ be a division ring and $n\\ge1$. On the set of $n\\times n$ arrays over $D$, use entrywise addition and the product\n$$\n(AB)_{ij}:=\\sum_{k=1}^n a_{ik}b_{kj}.\n$$\nThese operations make a ring $M_n(D)$, and this ring is semisimple. More precisely, its left regular module is the direct sum of the simple column ideals $M_n(D)e_{jj}\\cong D^n$ for $1\\le j\\le n$. See [[def-semisimple-ring]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-simple-modules-over-semisimple-rings",
   "source_section": "Statement",
   "quote": "Let $r\\ge1$, let every $n_i\\ge1$, let every $D_i$ be a division ring, and put $R=\\prod_{i=1}^rM_{n_i}(D_i)$. Then every simple left $R$-module is supported on exactly one factor and is isomorphic to that factor's column module $D_i^{n_i}$. These column modules give all simple left $R$-module isomorphism classes, with one class for each factor. See [[thm-wedderburn-artin-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-matrix-units",
   "source_section": "Definition",
   "quote": "For indices $a,b$ in the same finite index set, the **Kronecker delta** is\n\n$$\\delta_{ab}:=\\begin{cases}1,&a=b,\\\\0,&a\\ne b.\\end{cases}$$\n\nLet $i<m$ and $j<n$. The **matrix unit** $E_{ij}\\in M_{m\\times n}(F)$ is the\nmatrix whose $(r,s)$-entry is\n\n$$(E_{ij})_{rs}:=\\delta_{ri}\\delta_{sj}.$$\n\nThus $E_{ij}$ has entry $1$ in position $(i,j)$ and entry $0$ everywhere else.\nWhen a dimension is zero, no index of that dimension exists and there are no\nmatrix units of the corresponding shape.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The left ideal $M_n(F)e_{jj}$ consists of matrices supported in column $j$. Reading that column identifies it with the natural column module $F^n$. If a nonzero vector lies in a submodule of $F^n$, matrix units send it to every standard basis vector, so the submodule is all of $F^n$; each column ideal is therefore simple.",
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
   "claim": "Every matrix is the sum of its column matrices, and matrices supported in distinct columns have zero intersection. Hence $M_n(F)=\\bigoplus_{j=1}^nM_n(F)e_{jj}$ as a left module.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "For $n=1$ this is the single simple left ideal $F$. The decomposition selects $n$ minimal left ideals but makes no assertion that these are the only minimal left ideals. This proves the stated claim.",
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
   "reason": "$M_n(F)$ as a direct sum of minimal left ideals: the claim “For every field $F$ and $n\\ge1$, the left regular module of $M_n(F)$ is the internal direct sum $M_n(F)=\\bigoplus_{j=1}^n M_n(F)e_{jj}$ of simple left ideals.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "$M_n(F)$ as a direct sum of minimal left ideals: the zero or trivial specialization for “For every field $F$ and $n\\ge1$, the left regular module of $M_n(F)$ is the internal direct sum $M_n(F)=\\bigoplus_{j=1}^n M_n(F)e_{jj}$ of simple left ideals.” is resolved in step 3.1: “For $n=1$ this is the single simple left ideal $F$. The decomposition selects $n$ minimal left ideals but makes no assertion that these are the only minimal left ideals. This proves the stated claim.”."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "$M_n(F)$ as a direct sum of minimal left ideals: the smallest positive, one-factor, or $p=2$ specialization for “For every field $F$ and $n\\ge1$, the left regular module of $M_n(F)$ is the internal direct sum $M_n(F)=\\bigoplus_{j=1}^n M_n(F)e_{jj}$ of simple left ideals.” is resolved in step 3.1: “For $n=1$ this is the single simple left ideal $F$. The decomposition selects $n$ minimal left ideals but makes no assertion that these are the only minimal left ideals. This proves the stated claim.”."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "$M_n(F)$ as a direct sum of minimal left ideals: the collapsed or coincident-input case admitted by the hypotheses for “For every field $F$ and $n\\ge1$, the left regular module of $M_n(F)$ is the internal direct sum $M_n(F)=\\bigoplus_{j=1}^n M_n(F)e_{jj}$ of simple left ideals.” is resolved in step 3.1: “For $n=1$ this is the single simple left ideal $F$. The decomposition selects $n$ minimal left ideals but makes no assertion that these are the only minimal left ideals. This proves the stated claim.”."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "$M_n(F)$ as a direct sum of minimal left ideals: the claim “For every field $F$ and $n\\ge1$, the left regular module of $M_n(F)$ is the internal direct sum $M_n(F)=\\bigoplus_{j=1}^n M_n(F)e_{jj}$ of simple left ideals.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "$M_n(F)$ as a direct sum of minimal left ideals: the claim “For every field $F$ and $n\\ge1$, the left regular module of $M_n(F)$ is the internal direct sum $M_n(F)=\\bigoplus_{j=1}^n M_n(F)e_{jj}$ of simple left ideals.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "$M_n(F)$ as a direct sum of minimal left ideals: the claim “For every field $F$ and $n\\ge1$, the left regular module of $M_n(F)$ is the internal direct sum $M_n(F)=\\bigoplus_{j=1}^n M_n(F)e_{jj}$ of simple left ideals.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "$M_n(F)$ as a direct sum of minimal left ideals: the claim “For every field $F$ and $n\\ge1$, the left regular module of $M_n(F)$ is the internal direct sum $M_n(F)=\\bigoplus_{j=1}^n M_n(F)e_{jj}$ of simple left ideals.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-product-of-two-fields-is-semisimple

```markdown
---
id: ex-product-of-two-fields-is-semisimple
kind: example
title: "A product of two fields is semisimple with two simple-module types"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-wedderburn-artin-theorem, thm-simple-modules-over-semisimple-rings]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT 18.706, Lecture 2: Semisimple Modules, Socles, Artinian Rings, Wedderburn's Theorem"
      url: "https://ocw.mit.edu/courses/18-706-noncommutative-algebra-spring-2023/mit18_706_s23_lec02.pdf"
pipeline_run: null
---

## Example

For fields $F$ and $K$, the ring $F\times K$ is semisimple. Its simple left modules are, up to isomorphism, $F$ supported on the first factor and $K$ supported on the second. See [[thm-wedderburn-artin-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] Let $R$ be a nonzero unital ring. Then $R$ is semisimple if and only if $$R\cong\prod_{i=1}^rM_{n_i}(D_i)$$ for positive integers $r,n_i$ and division rings $D_i$. ([[thm-wedderburn-artin-theorem]]).

[L2] For $r\ge1$, $n_i\ge1$, and division rings $D_i$, every simple left module over $\prod_iM_{n_i}(D_i)$ is supported on exactly one factor and is isomorphic to that factor's column module $D_i^{n_i}$; these give all isomorphism classes. ([[thm-simple-modules-over-semisimple-rings]]).

## Verification

**Proof technique:** direct.

1.1 The central idempotents $e_F=(1,0)$ and $e_K=(0,1)$ satisfy $e_F+e_K=1$ and $e_Fe_K=0$. Thus the regular module splits as the direct sum of the simple left ideals $F\times0$ and $0\times K$, proving semisimplicity. [L1, L2, given, algebra]

2.1 For every left module $M$, one has $M=e_FM\oplus e_KM$. If $M$ is simple, exactly one summand is nonzero; it is then a simple vector space over the corresponding field and hence isomorphic to $F$ on the first factor or $K$ on the second. [step 1.1, given, algebra]

3.1 Even when $F\cong K$ as fields, the two modules are not isomorphic as $F\times K$-modules because $e_F$ acts as the identity on one and as zero on the other. This proves the stated claim. [step 2.1, given, algebra] ∎

```

### Recorded proof contract for ex-product-of-two-fields-is-semisimple

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-wedderburn-artin-theorem",
   "source_section": "Statement",
   "quote": "Let $R$ be a nonzero unital ring. Then $R$ is semisimple if and only if $$R\\cong\\prod_{i=1}^rM_{n_i}(D_i)$$ for positive integers $r,n_i$ and division rings $D_i$. See [[thm-endomorphism-ring-of-the-left-regular-module-is-opposite]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-simple-modules-over-semisimple-rings",
   "source_section": "Statement",
   "quote": "Let $r\\ge1$, let every $n_i\\ge1$, let every $D_i$ be a division ring, and put $R=\\prod_{i=1}^rM_{n_i}(D_i)$. Then every simple left $R$-module is supported on exactly one factor and is isomorphic to that factor's column module $D_i^{n_i}$. These column modules give all simple left $R$-module isomorphism classes, with one class for each factor. See [[thm-wedderburn-artin-theorem]].",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The central idempotents $e_F=(1,0)$ and $e_K=(0,1)$ satisfy $e_F+e_K=1$ and $e_Fe_K=0$. Thus the regular module splits as the direct sum of the simple left ideals $F\\times0$ and $0\\times K$, proving semisimplicity.",
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
   "claim": "For every left module $M$, one has $M=e_FM\\oplus e_KM$. If $M$ is simple, exactly one summand is nonzero; it is then a simple vector space over the corresponding field and hence isomorphic to $F$ on the first factor or $K$ on the second.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Even when $F\\cong K$ as fields, the two modules are not isomorphic as $F\\times K$-modules because $e_F$ acts as the identity on one and as zero on the other. This proves the stated claim.",
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
   "status": "checked",
   "evidence": "A product of two fields is semisimple with two simple-module types: the empty-object specialization for “For fields $F$ and $K$, the ring $F\\times K$ is semisimple. Its simple left modules are, up to isomorphism, $F$ supported on the first factor and $K$ supported on the second.” is resolved in step 3.1: “Even when $F\\cong K$ as fields, the two modules are not isomorphic as $F\\times K$-modules because $e_F$ acts as the identity on one and as zero on the other. This proves the stated claim.”."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "A product of two fields is semisimple with two simple-module types: the zero or trivial specialization for “For fields $F$ and $K$, the ring $F\\times K$ is semisimple. Its simple left modules are, up to isomorphism, $F$ supported on the first factor and $K$ supported on the second.” is resolved in step 3.1: “Even when $F\\cong K$ as fields, the two modules are not isomorphic as $F\\times K$-modules because $e_F$ acts as the identity on one and as zero on the other. This proves the stated claim.”."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "A product of two fields is semisimple with two simple-module types: the smallest positive, one-factor, or $p=2$ specialization for “For fields $F$ and $K$, the ring $F\\times K$ is semisimple. Its simple left modules are, up to isomorphism, $F$ supported on the first factor and $K$ supported on the second.” is resolved in step 3.1: “Even when $F\\cong K$ as fields, the two modules are not isomorphic as $F\\times K$-modules because $e_F$ acts as the identity on one and as zero on the other. This proves the stated claim.”."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "A product of two fields is semisimple with two simple-module types: the collapsed or coincident-input case admitted by the hypotheses for “For fields $F$ and $K$, the ring $F\\times K$ is semisimple. Its simple left modules are, up to isomorphism, $F$ supported on the first factor and $K$ supported on the second.” is resolved in step 3.1: “Even when $F\\cong K$ as fields, the two modules are not isomorphic as $F\\times K$-modules because $e_F$ acts as the identity on one and as zero on the other. This proves the stated claim.”."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "A product of two fields is semisimple with two simple-module types: the initial index and termination or stabilization endpoint for “For fields $F$ and $K$, the ring $F\\times K$ is semisimple. Its simple left modules are, up to isomorphism, $F$ supported on the first factor and $K$ supported on the second.” is resolved in step 3.1: “Even when $F\\cong K$ as fields, the two modules are not isomorphic as $F\\times K$-modules because $e_F$ acts as the identity on one and as zero on the other. This proves the stated claim.”."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "A product of two fields is semisimple with two simple-module types: the claim “For fields $F$ and $K$, the ring $F\\times K$ is semisimple. Its simple left modules are, up to isomorphism, $F$ supported on the first factor and $K$ supported on the second.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "A product of two fields is semisimple with two simple-module types: the claim “For fields $F$ and $K$, the ring $F\\times K$ is semisimple. Its simple left modules are, up to isomorphism, $F$ supported on the first factor and $K$ supported on the second.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "A product of two fields is semisimple with two simple-module types: the claim “For fields $F$ and $K$, the ring $F\\times K$ is semisimple. Its simple left modules are, up to isomorphism, $F$ supported on the first factor and $K$ supported on the second.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-length-of-z-modulo-p-to-the-k

```markdown
---
id: ex-length-of-z-modulo-p-to-the-k
kind: example
title: "The $\\mathbb Z$-module $\\mathbb Z/p^k$ has length $k$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-composition-series-and-length-of-a-module, thm-jordan-holder-theorem-for-modules, cor-length-is-additive-in-short-exact-sequences, cor-prime-order-group-is-cyclic]
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

For a prime $p$ and $k\in\mathbb N$, the $\mathbb Z$-module $\mathbb Z/p^k\mathbb Z$ has length $k$. In particular, $k=0$ gives the zero module. See [[def-composition-series-and-length-of-a-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] A composition series of a left $R$-module $M$ is a finite chain $$0=M_0<M_1<\cdots<M_n=M$$ whose factors $M_i/M_{i-1}$ are simple. If such a series exists, the length $\ell_R(M)$ is its number $n$ of factors; thm-jordan-holder-theorem-for-modules proves independence of the chosen series. The zero module has the empty series and length $0$. ([[def-composition-series-and-length-of-a-module]]).

[L2] Any two composition series of a module have the same length, and their simple factors agree up to permutation and isomorphism. ([[thm-jordan-holder-theorem-for-modules]]).

[L3] For a short exact sequence $0\to N\to M\to Q\to0$, the module $M$ has finite length if and only if $N$ and $Q$ do, and then $$\ell_R(M)=\ell_R(N)+\ell_R(Q).$$. ([[cor-length-is-additive-in-short-exact-sequences]]).

[L4] Let $G$ be a finite group such that the positive integer $|G|$ is prime. Then every $g\ne e$ has order $|G|$, satisfies $\langle g\rangle=G$, and hence generates $G$. In particular, $G$ is cyclic. ([[cor-prime-order-group-is-cyclic]]).

## Verification

**Proof technique:** direct.

1.1 For $k\ge1$, the chain $0<p^{k-1}\mathbb Z/p^k\mathbb Z<\cdots<p\mathbb Z/p^k\mathbb Z<\mathbb Z/p^k\mathbb Z$ is strict, and every successive quotient has order $p$ and is therefore the simple $\mathbb Z$-module $\mathbb Z/p$. [L1, L2, L3, L4, given, algebra]

2.1 This composition series has $k$ factors, so Jordan–Hölder gives length $k$. For $k=0$, $\mathbb Z/p^0\mathbb Z=0$ has the empty series; for $k=1$, the displayed module itself is simple. [step 1.1, given, algebra]

3.1 The calculation concerns the finite-length quotient module and does not require the ambient ring $\mathbb Z$ to be Artinian. This proves the stated claim. [step 2.1, given, algebra] ∎

```

### Recorded proof contract for ex-length-of-z-modulo-p-to-the-k

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-composition-series-and-length-of-a-module",
   "source_section": "Definition",
   "quote": "A **composition series** of a left $R$-module $M$ is a finite chain $$0=M_0<M_1<\\cdots<M_n=M$$ whose factors $M_i/M_{i-1}$ are simple. If such a series exists, the **length** $\\ell_R(M)$ is its number $n$ of factors; [[thm-jordan-holder-theorem-for-modules]] proves independence of the chosen series. The zero module has the empty series and length $0$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-jordan-holder-theorem-for-modules",
   "source_section": "Statement",
   "quote": "Any two composition series of a module have the same length, and their simple factors agree up to permutation and isomorphism. See [[def-composition-series-and-length-of-a-module]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "cor-length-is-additive-in-short-exact-sequences",
   "source_section": "Statement",
   "quote": "For a short exact sequence $0\\to N\\to M\\to Q\\to0$, the module $M$ has finite length if and only if $N$ and $Q$ do, and then $$\\ell_R(M)=\\ell_R(N)+\\ell_R(Q).$$ See [[thm-jordan-holder-theorem-for-modules]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "cor-prime-order-group-is-cyclic",
   "source_section": "Statement",
   "quote": "Let $G$ be a finite group such that the positive integer $\\iota(|G|)$ is prime.\nThen every $g\\ne e$ has order $|G|$, satisfies $\\langle g\\rangle=G$, and hence\ngenerates $G$. In particular, $G$ is cyclic.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "For $k\\ge1$, the chain $0<p^{k-1}\\mathbb Z/p^k\\mathbb Z<\\cdots<p\\mathbb Z/p^k\\mathbb Z<\\mathbb Z/p^k\\mathbb Z$ is strict, and every successive quotient has order $p$ and is therefore the simple $\\mathbb Z$-module $\\mathbb Z/p$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "L4",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "This composition series has $k$ factors, so Jordan–Hölder gives length $k$. For $k=0$, $\\mathbb Z/p^0\\mathbb Z=0$ has the empty series; for $k=1$, the displayed module itself is simple.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "The calculation concerns the finite-length quotient module and does not require the ambient ring $\\mathbb Z$ to be Artinian. This proves the stated claim.",
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
   "status": "checked",
   "evidence": "The $\\mathbb Z$-module $\\mathbb Z/p^k$ has length $k$: the empty-object specialization for “For a prime $p$ and $k\\in\\mathbb N$, the $\\mathbb Z$-module $\\mathbb Z/p^k\\mathbb Z$ has length $k$. In particular, $k=0$ gives the zero module.” is resolved in step 2.1: “This composition series has $k$ factors, so Jordan–Hölder gives length $k$. For $k=0$, $\\mathbb Z/p^0\\mathbb Z=0$ has the empty series; for $k=1$, the displayed module itself is simple.”."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "The $\\mathbb Z$-module $\\mathbb Z/p^k$ has length $k$: the zero or trivial specialization for “For a prime $p$ and $k\\in\\mathbb N$, the $\\mathbb Z$-module $\\mathbb Z/p^k\\mathbb Z$ has length $k$. In particular, $k=0$ gives the zero module.” is resolved in step 2.1: “This composition series has $k$ factors, so Jordan–Hölder gives length $k$. For $k=0$, $\\mathbb Z/p^0\\mathbb Z=0$ has the empty series; for $k=1$, the displayed module itself is simple.”."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "The $\\mathbb Z$-module $\\mathbb Z/p^k$ has length $k$: the smallest positive, one-factor, or $p=2$ specialization for “For a prime $p$ and $k\\in\\mathbb N$, the $\\mathbb Z$-module $\\mathbb Z/p^k\\mathbb Z$ has length $k$. In particular, $k=0$ gives the zero module.” is resolved in step 2.1: “This composition series has $k$ factors, so Jordan–Hölder gives length $k$. For $k=0$, $\\mathbb Z/p^0\\mathbb Z=0$ has the empty series; for $k=1$, the displayed module itself is simple.”."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The $\\mathbb Z$-module $\\mathbb Z/p^k$ has length $k$: the collapsed or coincident-input case admitted by the hypotheses for “For a prime $p$ and $k\\in\\mathbb N$, the $\\mathbb Z$-module $\\mathbb Z/p^k\\mathbb Z$ has length $k$. In particular, $k=0$ gives the zero module.” is resolved in step 2.1: “This composition series has $k$ factors, so Jordan–Hölder gives length $k$. For $k=0$, $\\mathbb Z/p^0\\mathbb Z=0$ has the empty series; for $k=1$, the displayed module itself is simple.”."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "The $\\mathbb Z$-module $\\mathbb Z/p^k$ has length $k$: the initial index and termination or stabilization endpoint for “For a prime $p$ and $k\\in\\mathbb N$, the $\\mathbb Z$-module $\\mathbb Z/p^k\\mathbb Z$ has length $k$. In particular, $k=0$ gives the zero module.” is resolved in step 2.1: “This composition series has $k$ factors, so Jordan–Hölder gives length $k$. For $k=0$, $\\mathbb Z/p^0\\mathbb Z=0$ has the empty series; for $k=1$, the displayed module itself is simple.”."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "The $\\mathbb Z$-module $\\mathbb Z/p^k$ has length $k$: the claim “For a prime $p$ and $k\\in\\mathbb N$, the $\\mathbb Z$-module $\\mathbb Z/p^k\\mathbb Z$ has length $k$. In particular, $k=0$ gives the zero module.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The $\\mathbb Z$-module $\\mathbb Z/p^k$ has length $k$: the claim “For a prime $p$ and $k\\in\\mathbb N$, the $\\mathbb Z$-module $\\mathbb Z/p^k\\mathbb Z$ has length $k$. In particular, $k=0$ gives the zero module.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The $\\mathbb Z$-module $\\mathbb Z/p^k$ has length $k$: the claim “For a prime $p$ and $k\\in\\mathbb N$, the $\\mathbb Z$-module $\\mathbb Z/p^k\\mathbb Z$ has length $k$. In particular, $k=0$ gives the zero module.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": [
  {
   "check": "cyclic-subgroup-lagrange",
   "asserts": "the chain $0<p^{k-1}\\mathbb Z/p^k\\mathbb Z<\\cdots<p\\mathbb Z/p^k\\mathbb Z<\\mathbb Z/p^k\\mathbb Z$ is strict, and every successive quotient has order $p$",
   "claim": "The terms of this chain are the subgroups generated by p^i inside Z/p^k. The check computes |<d>| = n/d for every divisor d of every n through the bound and verifies it divides n; at n = 4, 8, 16 and 9 those subgroups ARE this chain, so a wrong subgroup order would break the order-p successive quotients and with them the count of k factors.",
   "checked_in": "steps 1.1 and 2.1"
  }
 ]
}
```

---

# DEPENDENCY TEXT — the cited items, in full

## DEPENDENCY: def-noetherian-module

```markdown
---
id: def-noetherian-module
kind: definition
title: "Noetherian modules: every submodule is finitely generated"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-submodule, def-generated-cyclic-finitely-generated-and-free-modules]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Noetherian Modules, Sections 1-2"
      url: "https://kconrad.math.uconn.edu/blurbs/linmultialg/noetherianmod.pdf"
pipeline_run: null
---

## Definition

A left $R$-module $M$ is **Noetherian** when every submodule of $M$ is finitely generated ([[def-generated-cyclic-finitely-generated-and-free-modules]]). This finite-generation definition is the convention; its equivalence with ACC and the maximal condition is proved in [[thm-equivalent-characterizations-of-noetherian-modules]].

```

## DEPENDENCY: def-artinian-module

```markdown
---
id: def-artinian-module
kind: definition
title: "Artinian modules by the descending chain condition"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-submodule]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Arvind Nair, Algebra I, Lecture 5"
      url: "https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf"
pipeline_run: null
---

## Definition

A left $R$-module $M$ is **Artinian** when every descending chain $M_0\supseteq M_1\supseteq\cdots$ of submodules stabilizes: there is $N$ such that $M_n=M_N$ for all $n\ge N$. This is the descending chain condition.

```

## DEPENDENCY: thm-equivalent-characterizations-of-noetherian-modules

```markdown
---
id: thm-equivalent-characterizations-of-noetherian-modules
kind: theorem
title: "Finite generation, ACC, and maximal-condition characterizations of Noetherian modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-noetherian-module]
justified_by: []
aliases: []
landmark: true
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

For a left $R$-module $M$, the following are equivalent: every submodule is finitely generated; every ascending chain of submodules stabilizes; and every nonempty family of submodules has a maximal member. The implication from ACC to the maximal condition uses dependent choice; the other displayed implications are choice-free. See [[def-noetherian-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement. The adopted axiom of dependent choice is assumed for the one direction identified in the Statement; it is not cited as a forward dependency.

[L1] A left $R$-module $M$ is Noetherian when every submodule of $M$ is finitely generated (def-generated-cyclic-finitely-generated-and-free-modules). This finite-generation definition is the convention; its equivalence with ACC and the maximal condition is proved in thm-equivalent-characterizations-of-noetherian-modules. ([[def-noetherian-module]]).

## Proof

**Proof technique:** direct.

1.1 We prove that finite generation of every submodule implies ACC by taking the union of a chain and locating a finite generating set in one stage. [L1, given, algebra]

2.1 Assuming the adopted dependent-choice axiom in Facts, ACC implies the maximal condition: if a nonempty family had no maximal member, recursively choose a strict ascending chain in it. [step 1.1, given, algebra]

3.1 Choice-free: for a submodule N, the maximal condition applied to its finitely generated submodules gives a maximal L; if L is proper in N, adjoining one element of N minus L contradicts maximality. [step 2.1, given, algebra]

4.1 Thus the finite-generation condition, ACC, and the maximal condition are equivalent. Only the recursive construction in step 2.1 uses the adopted dependent-choice axiom. This proves the stated claim. [step 3.1, given, algebra] ∎

```

## DEPENDENCY: thm-equivalent-characterizations-of-artinian-modules

```markdown
---
id: thm-equivalent-characterizations-of-artinian-modules
kind: theorem
title: "DCC and minimal-condition characterizations of Artinian modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-artinian-module]
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

## Statement

For a left $R$-module $M$, DCC is equivalent to the condition that every nonempty family of submodules has a minimal member. The implication from DCC to the minimal condition uses dependent choice. See [[def-artinian-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement. The adopted axiom of dependent choice is assumed for the one direction identified in the Statement; it is not cited as a forward dependency.

[L1] A left $R$-module $M$ is Artinian when every descending chain $M_0\supseteq M_1\supseteq\cdots$ of submodules stabilizes: there is $N$ such that $M_n=M_N$ for all $n\ge N$. This is the descending chain condition. ([[def-artinian-module]]).

## Proof

**Proof technique:** direct.

1.1 DCC gives a minimal member of every nonempty family by contradiction: under dependent choice, absence of a minimal member yields a strict descending chain. [L1, given, algebra]

2.1 Conversely, a nonstabilizing descending chain has no minimal member. [step 1.1, given, algebra]

3.1 We treat repeated terms and the zero module. This proves the stated claim. [step 2.1, given, algebra] ∎

```

## DEPENDENCY: thm-second-isomorphism-theorem-modules

```markdown
---
id: thm-second-isomorphism-theorem-modules
kind: theorem
title: "Second isomorphism theorem for modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-first-isomorphism-theorem-modules, lem-submodule-criterion-sums-and-intersections, def-quotient-module]
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

For submodules $L,N\le M$, there is a canonical isomorphism $$L/(L\cap N)\cong(L+N)/N.$$ See [[thm-first-isomorphism-theorem-modules]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For every module homomorphism $f:M\to N$, there is a module isomorphism $$M/\ker f\ \cong\ \operatorname{im}f,$$ given by $m+\ker f\mapsto f(m)$. ([[thm-first-isomorphism-theorem-modules]]).

[L2] For submodules $A,B\le M$, the intersection $A\cap B$ and the sum $$A+B:=\{a+b:a\in A,\ b\in B\}$$ are submodules of $M$. ([[lem-submodule-criterion-sums-and-intersections]]).

[L3] For $N\le M$, the additive cosets $m+N$ form the quotient module $M/N$ under the well-defined scalar action $$r(m+N):=rm+N.$$ ([[def-quotient-module]]).

## Proof

**Proof technique:** direct.

1.1 For submodules $L,N\le M$, map $L\to(L+N)/N$. [L1, L2, L3, given, algebra]

2.1 Its kernel is $L\cap N$, and it is surjective by the definition of $L+N$; the first isomorphism theorem gives $L/(L\cap N)\cong(L+N)/N$. [step 1.1, given, algebra]

3.1 The coincident and zero cases are admitted and give equalities rather than exceptions. For $L=0$ both sides are $0$, since $0/(0\cap N)=0$ and $(0+N)/N=N/N=0$; for $N=0$ both sides are $L$; and for $L=N$ both sides are $0$. This proves the stated claim. [step 2.1, given, algebra] ∎

```

## DEPENDENCY: thm-correspondence-theorem-modules

```markdown
---
id: thm-correspondence-theorem-modules
kind: theorem
title: "Correspondence theorem for submodules of a quotient module"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-quotient-module, thm-quotient-module-universal-property, thm-third-isomorphism-theorem-modules]
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

For $N\le M$, inverse image and quotient induce mutually inverse inclusion-preserving bijections between submodules of $M/N$ and submodules of $M$ containing $N$. They preserve sums, intersections, and successive quotients. See [[def-quotient-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For $N\le M$, the additive cosets $m+N$ form the quotient module $M/N$ under the well-defined scalar action $$r(m+N):=rm+N.$$ ([[def-quotient-module]]).

[L2] Let $f:M\to P$ be a module homomorphism and let $N\le M$ satisfy $N\subseteq\ker f$. There is a unique module homomorphism $$\bar f:M/N\longrightarrow P$$ such that $\bar f(m+N)=f(m)$, equivalently $f=\bar f\circ\pi$. ([[thm-quotient-module-universal-property]]).

[L3] If $N\le L\le M$, then $L/N$ is a submodule of $M/N$ and $$(M/N)/(L/N)\cong M/L.$$ ([[thm-third-isomorphism-theorem-modules]]).

## Proof

**Proof technique:** direct.

1.1 Inverse image and quotient give mutually inverse inclusion-preserving bijections between submodules of $M/N$ and submodules of $M$ containing $N$. [L1, L2, L3, given, algebra]

2.1 If $P\le M/N$, then $\pi(\pi^{-1}P)=P$ by surjectivity of $\pi$; if $L\le M$ contains $N$, then $\pi^{-1}(L/N)=L$. Direct calculation with inverse images gives preservation of sums and intersections, while [L3] identifies successive quotients. This proves the stated claim. [L3, step 1.1, given, algebra] ∎

```

## DEPENDENCY: def-exact-and-short-exact-sequences-of-modules

```markdown
---
id: def-exact-and-short-exact-sequences-of-modules
kind: definition
title: "Exact sequences and short exact sequences of modules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-module-homomorphism-kernel-image-and-cokernel, thm-module-kernel-image-and-injectivity]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Definition

A sequence of left $R$-modules and homomorphisms
$$\cdots\longrightarrow M_{i-1}\xrightarrow{d_{i-1}}M_i\xrightarrow{d_i}M_{i+1}\longrightarrow\cdots$$
is **exact at $M_i$** if $\operatorname{im}d_{i-1}=\ker d_i$ ([[def-module-homomorphism-kernel-image-and-cokernel]]). It is **exact** if it is exact at every displayed module at which two arrows meet.

A **short exact sequence** is an exact sequence
$$0\longrightarrow A\xrightarrow{i}B\xrightarrow{p}C\longrightarrow0.$$
Thus $i$ is injective, $p$ is surjective, and $\operatorname{im}i=\ker p$ ([[thm-module-kernel-image-and-injectivity]]).

```

## DEPENDENCY: def-semisimple-ring

```markdown
---
id: def-semisimple-ring
kind: definition
title: "A semisimple ring as a ring whose left regular module is semisimple"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-semisimple-module, def-left-and-right-modules]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "William Crawley-Boevey, Noncommutative Algebra, Chapter 1 Sections 1.1-1.9"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
pipeline_run: null
---

## Definition

A unital ring $R$ is **semisimple** when its left regular module ${}_R R$ is semisimple. This is a left-module definition and uses no Jacobson radical. For the zero ring, the regular module is zero and hence semisimple; the Wedderburn-Artin theorem below is stated for nonzero rings.

```

## DEPENDENCY: thm-equivalent-characterizations-of-semisimple-modules

```markdown
---
id: thm-equivalent-characterizations-of-semisimple-modules
kind: theorem
title: "Equivalent characterizations of semisimple modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-semisimple-module, def-socle-of-a-module, thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules, thm-zorn, thm-universal-property-of-module-direct-sums]
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

Assuming the Axiom of Choice, for a module $M$ the following are equivalent: $M$ is a direct sum of simple submodules; $M$ is the sum of its simple submodules; and every submodule of $M$ has a complementary submodule. See [[def-semisimple-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A left $R$-module is semisimple when it is an internal direct sum of simple submodules, allowing the empty direct sum. Hence the zero module is semisimple. ([[def-semisimple-module]]).

[L2] Assuming the Axiom of Choice, every finitely generated nonzero module has a maximal proper submodule. ([[thm-finitely-generated-nonzero-modules-have-maximal-proper-submodules]]).

[L3] Assume the Axiom of Choice (def-axiom-of-choice). Let $(P, \le)$ be a nonempty poset in which every chain has an upper bound. Then $P$ has a maximal element (def-maximal-element). Note the hypothesis asks only for an upper bound, not a least upper bound, and the conclusion asserts only that a maximal element exists, never that a greatest one does. ([[thm-zorn]]).

[L4] Let $(M_i)_{i\in I}$ be left $R$-modules and $N$ a left $R$-module. For every family of homomorphisms $f_i:M_i\to N$, there is a unique homomorphism $$f:\bigoplus_{i\in I}M_i\longrightarrow N$$ such that $f\circ\jmath_i=f_i$ for every $i$. It is given by $$f((m_i))=\sum_{i\in\operatorname{supp}(m)}f_i(m_i).$$ For $I=\varnothing$, this is the unique map $0\to N$. ([[thm-universal-property-of-module-direct-sums]]).

[L5] The socle $\operatorname{Soc}(M)$ is the sum of all simple submodules of $M$. ([[def-socle-of-a-module]]).

## Proof

**Proof technique:** direct.

1.1 A direct sum of simple submodules is plainly their sum. Conversely, if $M$ is a sum of simple submodules, Zorn's lemma applied to independent families of them gives a maximal direct sum $D$; if $D\ne M$, a simple submodule not contained in $D$ meets $D$ trivially, contradicting maximality. [L1, L2, L3, L4, L5, given, algebra]

2.1 Given $N\le M$ and a direct-sum decomposition $M=\bigoplus_{i\in I}S_i$ into simples, use Zorn to choose a maximal sum $C=\bigoplus_{j\in J}S_j$ with $C\cap N=0$. If some $S_i$ were not contained in $N+C$, simplicity would give $S_i\cap(N+C)=0$, so adjoining it would contradict maximality. Hence every $S_i\le N+C$, and therefore $M=N\oplus C$. [L3, step 1.1, given, algebra]

3.1 Conversely suppose every submodule has a complement. By [L5], choose $C$ with $M=\operatorname{Soc}(M)\oplus C$. If $C\ne0$, choose $0\ne x\in C$. The cyclic module $Rx$ has a maximal proper submodule $K$ by [L2]. Let $D$ complement $K$ in $M$. Then $Rx=K\oplus(Rx\cap D)$, and $Rx\cap D\cong Rx/K$ is a nonzero simple submodule of $C$, contrary to $C\cap\operatorname{Soc}(M)=0$. Hence $C=0$ and $M$ is a sum of simples. The zero module is the empty sum. [L2, L5, step 2.1, given, algebra] ∎

```

## DEPENDENCY: thm-submodules-and-quotients-of-semisimple-modules

```markdown
---
id: thm-submodules-and-quotients-of-semisimple-modules
kind: theorem
title: "Under Choice, submodules and quotients of semisimple modules are semisimple"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-equivalent-characterizations-of-semisimple-modules, thm-second-isomorphism-theorem-modules]
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

Assuming the Axiom of Choice, every submodule and every quotient of a semisimple module is semisimple. See [[thm-equivalent-characterizations-of-semisimple-modules]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Assuming the Axiom of Choice, for a module $M$ the following are equivalent: $M$ is a direct sum of simple submodules; $M$ is the sum of its simple submodules; and every submodule of $M$ has a complementary submodule. ([[thm-equivalent-characterizations-of-semisimple-modules]]).

[L2] For submodules $L,N\le M$, there is a canonical isomorphism $$L/(L\cap N)\cong(L+N)/N.$$. ([[thm-second-isomorphism-theorem-modules]]).

## Proof

**Proof technique:** direct.

1.1 A submodule inherits the complement property by intersecting a complement in the ambient module. [L1, L2, given, algebra]

2.1 For a quotient, complement the kernel and identify the quotient with that semisimple complement. [step 1.1, given, algebra]

3.1 The extreme submodules are admitted and give nothing new: the zero submodule is the empty direct sum, hence semisimple, and its quotient $M/0\cong M$ is semisimple by hypothesis; the whole submodule $M$ is semisimple by hypothesis and its quotient $M/M=0$ is again the empty direct sum. This proves the stated claim. [step 1.1, step 2.1, given, algebra] ∎

```

## DEPENDENCY: cor-every-module-is-a-quotient-of-a-free-module

```markdown
---
id: cor-every-module-is-a-quotient-of-a-free-module
kind: corollary
title: "Every module is a quotient of a free module"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [thm-universal-property-of-free-modules, def-quotient-module]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement

For every left $R$-module $M$, the free module $R^{(M)}$ on its underlying set admits a canonical surjection $\varepsilon_M:R^{(M)}\to M$, determined by $\varepsilon_M(e_m)=m$. Consequently $M\cong R^{(M)}/\ker\varepsilon_M$.

## Facts & Assumptions

**Given:** A left $R$-module $M$.

[L1] Every set map from a basis set to a module extends uniquely to a homomorphism from the free module ([[thm-universal-property-of-free-modules]]).

[F1] The quotient module $F/K$ consists of additive cosets and carries the induced module operations ([[def-quotient-module]]).

## Proof

**Proof technique:** constructive.

1.1 Apply [L1] to the identity set map on the underlying set of $M$; this defines $\varepsilon_M:R^{(M)}\to M$ with $\varepsilon_M(e_m)=m$. [L1, construct]

2.1 Every $m\in M$ equals $\varepsilon_M(e_m)$, so $\varepsilon_M$ is surjective, including when $M=0$. [step 1.1]

2.2 Define $\phi:R^{(M)}/\ker\varepsilon_M\to M$ by $\phi(x+\ker\varepsilon_M)=\varepsilon_M(x)$. Equality of cosets makes this well defined, and [F1] makes it a homomorphism. [step 1.1, F1, construct]

3.1 The map $\phi$ is surjective by step 2.1 and injective because $\phi(x+\ker\varepsilon_M)=0$ exactly when $x\in\ker\varepsilon_M$. Hence it is an isomorphism. [step 2.1, step 2.2]

4.1 Thus $M$ is canonically a quotient of a free module. [step 3.1, discharge-construct] ∎

```

## DEPENDENCY: def-split-short-exact-sequence

```markdown
---
id: def-split-short-exact-sequence
kind: definition
title: "Split short exact sequences, sections, and retractions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-exact-and-short-exact-sequences-of-modules]
justified_by: [thm-splitting-lemma-for-modules]
aliases: []
landmark: true
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
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Definition

In a short exact sequence
$$0\to A\xrightarrow iB\xrightarrow pC\to0,$$
a **section** of $p$ is a homomorphism $s:C\to B$ with $p\circ s=\operatorname{id}_C$, and a **retraction** of $i$ is a homomorphism $r:B\to A$ with $r\circ i=\operatorname{id}_A$.

The sequence **splits** if it has a section, equivalently, as proved in [[thm-splitting-lemma-for-modules]], if it has a retraction or if its middle term is isomorphic to $A\oplus C$ compatibly with $i$ and $p$.

```

## DEPENDENCY: thm-splitting-lemma-for-modules

```markdown
---
id: thm-splitting-lemma-for-modules
kind: theorem
title: "The splitting lemma for short exact sequences of modules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-split-short-exact-sequence, lem-endpoints-in-a-short-exact-sequence, thm-universal-property-of-module-direct-sums]
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
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement

For a short exact sequence
$$0\to A\xrightarrow iB\xrightarrow pC\to0,$$
the following are equivalent:

1. $p$ has a section $s:C\to B$;
2. $i$ has a retraction $r:B\to A$;
3. there is an isomorphism $\Phi:A\oplus C\to B$ with $\Phi(a,0)=i(a)$ and $p(\Phi(a,c))=c$.

Given a section, $\Phi(a,c)=i(a)+s(c)$ and $B=i(A)\oplus s(C)$.

## Facts & Assumptions

**Given:** A short exact sequence $0\to A\xrightarrow iB\xrightarrow pC\to0$.

[F1] A section satisfies $p\circ s=\operatorname{id}_C$, and a retraction satisfies $r\circ i=\operatorname{id}_A$ ([[def-split-short-exact-sequence]]).

[L1] Short exactness means that $i$ is injective, $p$ is surjective, and $\operatorname{im}i=\ker p$ ([[lem-endpoints-in-a-short-exact-sequence]]).

[L2] Homomorphisms from $A\oplus C$ are uniquely determined by their restrictions to the two summands ([[thm-universal-property-of-module-direct-sums]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $s$ is a section and define $\Phi:A\oplus C\to B$ by $\Phi(a,c)=i(a)+s(c)$; [L2] makes this a homomorphism. [assume-hyp, F1, L2]

1.2 Suppose assertion 3 holds. Define $r:B\to A$ as the first coordinate of $\Phi^{-1}$; then $\Phi(a,0)=i(a)$ gives $r(i(a))=a$, so $r$ is a retraction. [assume-hyp, F1, construct]

1.3 Suppose instead that $r$ is a retraction. For each $c\in C$, choose any $b$ with $p(b)=c$ using surjectivity and put $k=b-i(r(b))$. Then $r(k)=0$ and $p(k)=c$. [assume-hyp, F1, L1, choose]

2.1 For $b\in B$, the element $b-s(p(b))$ lies in $\ker p=\operatorname{im}i$, so by injectivity of $i$ there is a unique $a\in A$ with $i(a)=b-s(p(b))$; hence $b=\Phi(a,p(b))$ and $\Phi$ is surjective. [step 1.1, F1, L1]

2.2 If $\Phi(a,c)=0$, applying $p$ gives $c=0$, and then injectivity of $i$ gives $a=0$; thus $\Phi$ is injective and satisfies the compatibility conditions in assertion 3. [step 1.1, F1, L1]

2.3 The element $k$ of step 1.3 is unique in $\ker r$ with image $c$: if $k'\in\ker r$ and $p(k')=c$, then $k-k'\in\ker p=\operatorname{im}i$, say $k-k'=i(a)$, and applying $r$ gives $a=0$. Therefore the rule $s(c)=k$ is independent of the temporary lift $b$, is linear by uniqueness, and satisfies $p\circ s=\operatorname{id}_C$. [step 1.3, F1, L1]

3.1 Steps 1.1, 2.1, and 2.2 prove $1\Rightarrow3$, step 1.2 proves $3\Rightarrow2$, and steps 1.3 and 2.3 prove $2\Rightarrow1$. The formula for $\Phi$ also yields the internal direct sum $B=i(A)\oplus s(C)$. [step 1.1, step 2.1, step 2.2, step 1.2, step 1.3, step 2.3] ∎

```

## DEPENDENCY: def-projective-module

```markdown
---
id: def-projective-module
kind: definition
title: "Projective modules and the lifting property"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-module-homomorphism-kernel-image-and-cokernel, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
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
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Definition

A left $R$-module $P$ is **projective** if it has the lifting property for epimorphisms: whenever $q:E\to M$ is a surjective module homomorphism and $f:P\to M$ is a module homomorphism, there exists a module homomorphism $\tilde f:P\to E$ such that $q\circ\tilde f=f$ ([[def-module-homomorphism-kernel-image-and-cokernel]], [[def-injection-surjection-bijection]]).

The lift need not be unique. Projectivity asks for a lift in every such square.

```

## DEPENDENCY: thm-projective-module-characterizations

```markdown
---
id: thm-projective-module-characterizations
kind: theorem
title: "Equivalent characterizations of projective modules"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-projective-module, thm-splitting-lemma-for-modules, thm-hom-functors-are-left-exact, cor-every-module-is-a-quotient-of-a-free-module, thm-free-modules-are-projective-with-choice-boundary, def-axiom-of-choice]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-13
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "A. Kleshchev, Lectures on Abstract Algebra for Graduate Students, sections 3.6, 3.14, and 3.15"
      url: "https://darkwing.uoregon.edu/~klesh/teaching/Alg600LN12.pdf"
    - title: "The Stacks Project, Algebra"
      url: "https://stacks.math.columbia.edu/tag/05CD"
    - title: "P. Hekmati, Homological Algebra, section 3.1"
      url: "https://www.math.auckland.ac.nz/~hekmati/HomologicalAlgebra.pdf"
pipeline_run: null
---

## Statement

For a left $R$-module $P$, assertions 1 to 3 below are equivalent without choice. Under the Axiom of Choice, they are also equivalent to assertion 4:

1. $P$ is projective;
2. every short exact sequence $0\to K\to E\to P\to0$ splits;
3. $\operatorname{Hom}_R(P,-)$ takes every short exact sequence to a short exact sequence;
4. $P$ is a direct summand of a free module.

The equivalence of 1 to 3 is choice-free. The implication $1\Rightarrow4$ uses the canonical free cover and is choice-free; under AC, every free module is projective, so $4\Rightarrow1$.

## Facts & Assumptions

**Given:** A left $R$-module $P$.

[F1] Projectivity is the lifting property for surjections ([[def-projective-module]]).

[L1] A short exact sequence splits exactly when its epimorphism has a section, equivalently its monomorphism has a retraction ([[thm-splitting-lemma-for-modules]]).

[L2] Applying $\operatorname{Hom}_R(P,-)$ to an exact sequence $0\to A\to B\to C$ gives an exact sequence $0\to\operatorname{Hom}_R(P,A)\to\operatorname{Hom}_R(P,B)\to\operatorname{Hom}_R(P,C)$ ([[thm-hom-functors-are-left-exact]]).

[L3] The canonical map $R^{(P)}\to P$ is surjective ([[cor-every-module-is-a-quotient-of-a-free-module]]).

[L4] Under AC, every free module is projective ([[thm-free-modules-are-projective-with-choice-boundary]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 If $P$ is projective and $0\to K\to E\xrightarrow qP\to0$ is short exact, lift $\operatorname{id}_P$ through $q$ using [F1]; the lift is a section, so the sequence splits by [L1]. [assume-hyp, F1, L1]

1.2 If every such sequence splits, then for a surjection $q:E\to M$ and map $f:P\to M$, form the pullback module $T=\{(x,e)\in P\oplus E:f(x)=q(e)\}$. The projection $T\to P$ is surjective with kernel isomorphic to $\ker q$, so its short exact sequence splits; a section followed by the projection $T\to E$ is a lift of $f$. Thus $P$ is projective. [assume-hyp, L1, construct]

1.3 By [L2], applying $\operatorname{Hom}_R(P,-)$ to $0\to A\to B\xrightarrow qC\to0$ is exact through $\operatorname{Hom}_R(P,B)$; its last map is surjective exactly when every $P\to C$ lifts through $q$. Hence [F1] makes assertions 1 and 3 equivalent. [F1, L2]

1.4 If $P$ is projective, lift $\operatorname{id}_P$ through the canonical surjection $R^{(P)}\to P$ from [L3]. This section splits the free cover by [L1], so $P$ is a direct summand of $R^{(P)}$. [assume-hyp, F1, L1, L3]

1.5 A direct summand of a projective module is projective: precompose a map from the summand with the projection, lift the resulting map, and restrict the lift along the inclusion. Under AC the free ambient module in assertion 4 is projective by [L4], so assertion 4 implies assertion 1. [assume-hyp, F1, L4]

2.1 Steps 1.1 and 1.2 prove $1\Leftrightarrow2$, step 1.3 proves $1\Leftrightarrow3$, and steps 1.4 and 1.5 prove $1\Leftrightarrow4$ with the stated choice boundary. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5] ∎

```

## DEPENDENCY: thm-wedderburn-artin-theorem

```markdown
---
id: thm-wedderburn-artin-theorem
kind: theorem
title: "Wedderburn–Artin theorem for semisimple rings"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-endomorphism-ring-of-the-left-regular-module-is-opposite, thm-endomorphism-ring-of-a-finite-direct-sum-as-hom-matrices, thm-finitely-generated-semisimple-modules-are-finite-direct-sums-of-simple-modules, thm-schurs-lemma-for-modules, thm-matrix-rings-over-division-rings-are-semisimple, def-opposite-ring, def-semisimple-ring]
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

Let $R$ be a nonzero unital ring. Then $R$ is semisimple if and only if $$R\cong\prod_{i=1}^rM_{n_i}(D_i)$$ for positive integers $r,n_i$ and division rings $D_i$. See [[thm-endomorphism-ring-of-the-left-regular-module-is-opposite]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For every unital ring $R$, evaluation at $1$ identifies endomorphisms of the left regular module with right multiplications and gives a ring isomorphism $$\operatorname{End}_R({}_R R)\cong R^{\mathrm{op}}.$$. ([[thm-endomorphism-ring-of-the-left-regular-module-is-opposite]]).

[L2] For left $R$-modules $M_1,\ldots,M_n$, endomorphisms of $\bigoplus_jM_j$ correspond to matrices $(f_{ij})$ with $f_{ij}\in\operatorname{Hom}_R(M_j,M_i)$, and composition is matrix multiplication using composition in the entries. ([[thm-endomorphism-ring-of-a-finite-direct-sum-as-hom-matrices]]).

[L3] Every finitely generated semisimple module is a finite direct sum of simple modules. ([[thm-finitely-generated-semisimple-modules-are-finite-direct-sums-of-simple-modules]]).

[L4] A nonzero homomorphism between simple modules is an isomorphism. Consequently the endomorphism ring of a simple module is a division ring. ([[thm-schurs-lemma-for-modules]]).

[L5] For a division ring $D$ and $n\ge1$, matrices with product $(AB)_{ij}=\sum_k a_{ik}b_{kj}$ form a semisimple ring whose left regular module is the direct sum of its simple column ideals. ([[thm-matrix-rings-over-division-rings-are-semisimple]]).

[L6] The opposite ring $R^{\mathrm{op}}$ has the same addition and identity as $R$ and multiplication $a\star b:=ba$. ([[def-opposite-ring]]).

[L7] A unital ring $R$ is semisimple when its left regular module ${}_R R$ is semisimple. This is a left-module definition and uses no Jacobson radical. For the zero ring, the regular module is zero and hence semisimple; the Wedderburn-Artin theorem below is stated for nonzero rings. ([[def-semisimple-ring]]).

## Proof

**Proof technique:** direct.

1.1 If $R$ is semisimple, its cyclic left regular module is a finite direct sum of simple modules. Grouping isomorphic summands gives ${}_RR\cong\bigoplus_{i=1}^rS_i^{n_i}$ with pairwise nonisomorphic $S_i$ and positive $r,n_i$. [L1, L2, L3, L4, L5, L6, L7, given, algebra]

2.1 Schur's lemma gives $\operatorname{Hom}_R(S_j,S_i)=0$ for $i\ne j$ and makes $E_i=\operatorname{End}_R(S_i)$ a division ring. Hence the endomorphism-matrix theorem gives $\operatorname{End}_R({}_RR)\cong\prod_iM_{n_i}(E_i)$. [step 1.1, given, algebra]

3.1 Since $\operatorname{End}_R({}_RR)\cong R^{\mathrm{op}}$, taking opposites gives $R\cong\prod_iM_{n_i}(E_i)^{\mathrm{op}}$. The opposite $E_i^{\mathrm{op}}$ is again a division ring, and entrywise transpose is a ring isomorphism $$ M_{n_i}(E_i)^{\mathrm{op}}\longrightarrow M_{n_i}(E_i^{\mathrm{op}}),\qquad A\longmapsto A^{\mathsf T}, $$ because reversing both the matrix product and the entry product gives $(BA)^{\mathsf T}=A^{\mathsf T}B^{\mathsf T}$ in the target. Thus $R\cong\prod_iM_{n_i}(D_i)$ with $D_i=E_i^{\mathrm{op}}$. [L5, L6, step 2.1, given, algebra]

4.1 Conversely, each $M_{n_i}(D_i)$ is semisimple by its column-ideal decomposition, and a finite product is semisimple because its regular module is the finite direct sum of the factors' regular modules. [step 3.1, given, algebra]

5.1 The Statement assumes that $R$ is nonzero, so the decomposition has at least one factor; no empty-product convention is asserted. This proves the stated claim. [step 4.1, given, algebra] ∎

```

## DEPENDENCY: def-opposite-ring

```markdown
---
id: def-opposite-ring
kind: definition
title: "The opposite ring $R^{\\mathrm{op}}$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ring]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "William Crawley-Boevey, Noncommutative Algebra, Chapter 1 Sections 1.1-1.9"
      url: "https://www.math.uni-bielefeld.de/~wcrawley/1617noncommalg/Noncommutative%20algebra.pdf"
pipeline_run: null
---

## Definition

For a unital ring $R$, the **opposite ring** $R^{\mathrm{op}}$ has the same underlying abelian group, identity, and addition as $R$, with multiplication $a\star b:=ba$. Associativity and both distributive laws follow from those of $R$ with the order reversed, and the same element $1$ is a two-sided identity. Thus the displayed operations really form a unital ring, including when $R$ is the zero ring.

```

## DEPENDENCY: thm-matrix-rings-over-division-rings-are-semisimple

```markdown
---
id: thm-matrix-rings-over-division-rings-are-semisimple
kind: theorem
title: "Matrix rings over division rings are semisimple"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-semisimple-ring, def-division-ring, def-ring, def-finite-sum-in-a-commutative-monoid, def-simple-module]
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

Let $D$ be a division ring and $n\ge1$. On the set of $n\times n$ arrays over $D$, use entrywise addition and the product
$$
(AB)_{ij}:=\sum_{k=1}^n a_{ik}b_{kj}.
$$
These operations make a ring $M_n(D)$, and this ring is semisimple. More precisely, its left regular module is the direct sum of the simple column ideals $M_n(D)e_{jj}\cong D^n$ for $1\le j\le n$. See [[def-semisimple-ring]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A unital ring $R$ is semisimple when its left regular module ${}_R R$ is semisimple. This is a left-module definition and uses no Jacobson radical. For the zero ring, the regular module is zero and hence semisimple; the Wedderburn-Artin theorem below is stated for nonzero rings. ([[def-semisimple-ring]]).

[L2] A division ring is a ring $D$ with $1\ne0$ in which every nonzero element has a two-sided multiplicative inverse. ([[def-division-ring]]).

[L3] A ring has an abelian-group addition, an associative multiplication with identity, and both distributive laws; multiplication need not be commutative. ([[def-ring]]).

[L4] Finite sums in a commutative monoid are independent of the chosen enumeration, and the empty sum is $0$. ([[def-finite-sum-in-a-commutative-monoid]]).

[L5] A left $R$-module $M$ is simple if $M\ne0$ and its only submodules are $0$ and $M$. Equivalently, $M$ has no proper nonzero submodule. ([[def-simple-module]]).

## Proof

**Proof technique:** direct.

1.1 Entrywise addition makes the arrays an abelian group. Associativity of multiplication follows by expanding both $(AB)C$ and $A(BC)$ and reassociating the finite double sum; the two distributive laws follow entrywise from those of $D$. The matrix $I=(\delta_{ij}1_D)$ is a two-sided identity. Thus the displayed operations make the unital ring $M_n(D)$ without any commutativity assumption on $D$. [L2, L3, L4, given, algebra]

2.1 Let $e_j=e_{jj}$. Every matrix has the unique decomposition $A=\sum_{j=1}^nAe_j$, and $M_n(D)e_i\cap\sum_{j\ne i}M_n(D)e_j=0$ because the two sides have disjoint possible nonzero columns. Hence $$ {}_{M_n(D)}M_n(D)=\bigoplus_{j=1}^nM_n(D)e_j. $$ [step 1.1, L4, given, algebra]

3.1 Sending a matrix in $M_n(D)e_j$ to its $j$-th column identifies that left ideal with $D^n$ under left matrix multiplication. If $0\ne v\in D^n$, choose $k$ with $v_k\ne0$. For any $w\in D^n$, the matrix whose only possibly nonzero column is column $k$, with entry $a_{ik}=w_i v_k^{-1}$, sends $v$ to $w$. Thus every nonzero submodule of $D^n$ is all of $D^n$, so each column ideal is simple. [L2, L5, step 1.1, step 2.1, given, algebra]

4.1 The decomposition in step 2.1 is therefore a finite direct sum of simple left modules, so [L1] makes $M_n(D)$ semisimple. For $n=1$ it is the single simple column ideal, and the hypothesis $n\ge1$ excludes an empty decomposition. [L1, step 2.1, step 3.1, given] ∎

```

## DEPENDENCY: thm-rat-field

```markdown
---
id: thm-rat-field
kind: theorem
title: "The rationals form a field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-rat-operations, lem-rat-ops-well-defined, thm-int-comm-ring, lem-int-cancellation]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-24
  audited: 2026-07-24
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Rational number — formal construction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_number"
pipeline_run: null
---

## Statement

$(\mathbb{Q}, +, \cdot, 0, 1)$ with the operations of [[def-rat-operations]]
is a field: a commutative ring with $1 \ne 0$ in which every nonzero element
has a multiplicative inverse.

## Facts & Assumptions

**Given:** Rationals with representatives $(a,b), (c,d), (e,f)$, second components nonzero.

[L1] The operations are independent of representatives ([[lem-rat-ops-well-defined]]).

[L2] $\mathbb{Z}$ is a commutative ring in which $1 \ne 0$ ([[thm-int-comm-ring]]; $1 \ne 0$ because $1 \ne 0$ in $\mathbb{N}$).

[L3] $\mathbb{Z}$ has no zero divisors and admits cancellation ([[lem-int-cancellation]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], each axiom may be verified on fixed representatives. [L1, suffices]

1.2 Associativity of $+$: both $((a,b)+(c,d))+(e,f)$ and $(a,b)+((c,d)+(e,f))$ have representative $(adf + cbf + ebd,\; bdf)$. [L2]

1.3 Commutativity of $+$: $(ad+cb,\, bd)$ and $(cb+ad,\, db)$ are equal pairs. [L2]

1.4 Additive identity: $(a,b) + (0,1) = (a \cdot 1 + 0 \cdot b,\; b \cdot 1) = (a,b)$. [L2]

1.5 Additive inverses: $(a,b) + (-a,b) = (ab - ab,\; b^2) = (0, b^2) \sim (0,1)$. [L2]

1.6 Associativity and commutativity of $\cdot$: $((ac)e,\, (bd)f) = (a(ce),\, b(df))$ and $(ac,\, bd) = (ca,\, db)$. [L2]

1.7 Multiplicative identity: $(a,b)(1,1) = (a,b)$; and $1 \ne 0$ since $1 \cdot 1 \ne 0 \cdot 1$. [L2]

1.8 Distributivity: $(a,b)\bigl((c,d)+(e,f)\bigr)$ has representative $(a(cf+ed),\; b(df))$, while $(a,b)(c,d) + (a,b)(e,f)$ has representative $(acbf + aebd,\; b^2 df) = (b(acf + aed),\; b(bdf))$; cancelling the common nonzero factor $b$ these are equivalent. [L2, L3]

1.9 Inverses: $[(a,b)] = 0$ iff $a \cdot 1 = 0 \cdot b$ iff $a = 0$; for $a \ne 0$, $(a,b)(b,a) = (ab,\, ba) \sim (1,1)$. [L2]

2.1 All field axioms hold: $\mathbb{Q}$ is a field. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, step 1.7, step 1.8, step 1.9] ∎

```

## DEPENDENCY: lem-int-embeds-rat

```markdown
---
id: lem-int-embeds-rat
kind: lemma
title: "The integers embed in the rationals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-rat-operations, def-rat-order, def-int-order, def-rationals, thm-int-comm-ring, lem-nat-embeds-int]
aliases: []
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-02
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "T. Tao, Analysis I, 3rd ed., §4.2"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Rational number — formal construction (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_number"
pipeline_run: null
---

## Statement

The map $j(k) = [(k,1)]$ is injective and preserves addition, multiplication,
and order. Composing with [[lem-nat-embeds-int]] embeds $\mathbb{N}$ in
$\mathbb{Q}$; we write $k$ for $j(k)$ throughout.

## Facts & Assumptions

**Given:** The map $j : \mathbb{Z} \to \mathbb{Q}$, $j(k) = [(k,1)]$.

[L1] Ring arithmetic in $\mathbb{Z}$ ([[thm-int-comm-ring]]).

[L2] The order on $\mathbb{Q}$ ([[def-rat-order]]), whose defining inequality is read in the order on $\mathbb{Z}$ ([[def-int-order]]).

[L3] Equality in $\mathbb{Q}$: $[(a,b)] = [(c,d)]$ iff $ad = cb$ ([[def-rationals]]).

## Proof

**Proof technique:** direct.

1.1 Injectivity: $(k,1) \sim (m,1)$ means $k \cdot 1 = m \cdot 1$, i.e. $k = m$. [L3, L1]

1.2 Addition: $j(k) + j(m) = [(k \cdot 1 + m \cdot 1,\; 1)] = j(k+m)$. [L1]

1.3 Multiplication: $j(k)\,j(m) = [(km,\, 1)] = j(km)$. [L1]

1.4 Order: denominators are $1 > 0$, so $j(k) \le j(m)$ reads $k \cdot 1 \le m \cdot 1$, i.e. $k \le m$. [L1, L2]

2.1 $j$ embeds $\mathbb{Z}$ into $\mathbb{Q}$, preserving arithmetic and order. [step 1.1, step 1.2, step 1.3, step 1.4] ∎

```

## DEPENDENCY: def-quotient-module

```markdown
---
id: def-quotient-module
kind: definition
title: 'Quotient module $M/N$ with scalar multiplication on additive cosets'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-submodule, def-quotient-group, def-left-and-right-modules]
justified_by: [thm-quotient-module-laws]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "McGerty, Algebra II: Rings and Modules, Section 3"
      url: "https://people.maths.ox.ac.uk/mcgerty/Algebra%20II.pdf"
pipeline_run: null
---

## Definition

Let $N\le M$ be a submodule of a left $R$-module. Since the additive group of
$M$ is abelian, $N$ is normal, so the additive quotient group $M/N$ consists of
the cosets $m+N$. Its proposed scalar action is

$$r(m+N):=rm+N.$$

The well-definedness and module laws are established in
[[thm-quotient-module-laws]]. The resulting module is the **quotient module**
$M/N$.

```

## DEPENDENCY: thm-simple-modules-over-semisimple-rings

```markdown
---
id: thm-simple-modules-over-semisimple-rings
kind: theorem
title: "Simple modules over a product of matrix rings over division rings"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-wedderburn-artin-theorem, thm-schurs-lemma-for-modules, thm-matrix-rings-over-division-rings-are-semisimple]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT 18.706, Lecture 2: Semisimple Modules, Socles, Artinian Rings, Wedderburn's Theorem"
      url: "https://ocw.mit.edu/courses/18-706-noncommutative-algebra-spring-2023/mit18_706_s23_lec02.pdf"
pipeline_run: null
---

## Statement

Let $r\ge1$, let every $n_i\ge1$, let every $D_i$ be a division ring, and put $R=\prod_{i=1}^rM_{n_i}(D_i)$. Then every simple left $R$-module is supported on exactly one factor and is isomorphic to that factor's column module $D_i^{n_i}$. These column modules give all simple left $R$-module isomorphism classes, with one class for each factor. See [[thm-wedderburn-artin-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A nonzero homomorphism between simple modules is an isomorphism. Consequently the endomorphism ring of a simple module is a division ring. ([[thm-schurs-lemma-for-modules]]).

[L2] If $D$ is a division ring and $n\ge1$, then the left regular module of $M_n(D)$ is the direct sum of its simple column ideals $M_n(D)e_{jj}\cong D^n$. ([[thm-matrix-rings-over-division-rings-are-semisimple]]).

## Proof

**Proof technique:** direct.

1.1 Write $c_i\in R$ for the central idempotent that is $1$ in factor $i$ and $0$ elsewhere. For a simple left $R$-module $S$, every $c_iS$ is a submodule and $S=\sum_i c_iS$. Hence some $c_iS$ is nonzero and therefore equals $S$; then $c_jS=c_jc_iS=0$ for $j\ne i$. Thus $S$ is supported on exactly one factor $A_i=M_{n_i}(D_i)$. [given, algebra]

2.1 Choose $0\ne s\in S$. The map $A_i\to S$, $a\mapsto as$, is surjective because its image is a nonzero submodule. By [L2], $A_i$ is a direct sum of simple column ideals $C_j\cong D_i^{n_i}$. At least one restriction $C_j\to S$ is nonzero, so [L1] makes it an isomorphism. Hence $S\cong D_i^{n_i}$. [L1, L2, step 1.1, given, algebra]

3.1 Conversely each column module is simple by [L2]. Modules supported on different factors cannot be isomorphic, because the corresponding $c_i$ acts as the identity on one and as zero on the other. For a fixed factor all column ideals are isomorphic to $D_i^{n_i}$ by [L2]. This proves the classification, including the one-factor case $r=1$. [L2, step 1.1, step 2.1, given, algebra] ∎

```

## DEPENDENCY: def-matrix-units

```markdown
---
id: def-matrix-units
kind: definition
title: 'Matrix units $E_{ij}$ and the Kronecker delta'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-matrix-space]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'P. E. Leonard, Linear Algebra Notes, §3.4'
      url: 'https://www.ms.uky.edu/~leep/linalg_notes_f12.pdf'
pipeline_run: null
---

## Definition

For indices $a,b$ in the same finite index set, the **Kronecker delta** is

$$\delta_{ab}:=\begin{cases}1,&a=b,\\0,&a\ne b.\end{cases}$$

Let $i<m$ and $j<n$. The **matrix unit** $E_{ij}\in M_{m\times n}(F)$ is the
matrix whose $(r,s)$-entry is

$$(E_{ij})_{rs}:=\delta_{ri}\delta_{sj}.$$

Thus $E_{ij}$ has entry $1$ in position $(i,j)$ and entry $0$ everywhere else.
When a dimension is zero, no index of that dimension exists and there are no
matrix units of the corresponding shape.

```

## DEPENDENCY: def-composition-series-and-length-of-a-module

```markdown
---
id: def-composition-series-and-length-of-a-module
kind: definition
title: "Composition series and length of a module"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-submodule, def-quotient-module, def-simple-module]
justified_by: [thm-jordan-holder-theorem-for-modules]
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Arvind Nair, Algebra I, Lecture 5"
      url: "https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf"
pipeline_run: null
---

## Definition

A **composition series** of a left $R$-module $M$ is a finite chain $$0=M_0<M_1<\cdots<M_n=M$$ whose factors $M_i/M_{i-1}$ are simple. If such a series exists, the **length** $\ell_R(M)$ is its number $n$ of factors; [[thm-jordan-holder-theorem-for-modules]] proves independence of the chosen series. The zero module has the empty series and length $0$.

```

## DEPENDENCY: thm-jordan-holder-theorem-for-modules

```markdown
---
id: thm-jordan-holder-theorem-for-modules
kind: theorem
title: "Jordan–Hölder theorem for modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-composition-series-and-length-of-a-module, thm-second-isomorphism-theorem-modules, thm-third-isomorphism-theorem-modules, thm-correspondence-theorem-modules]
justified_by: []
aliases: []
landmark: true
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

## Statement

Any two composition series of a module have the same length, and their simple factors agree up to permutation and isomorphism. See [[def-composition-series-and-length-of-a-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A composition series of a left $R$-module $M$ is a finite chain $$0=M_0<M_1<\cdots<M_n=M$$ whose factors $M_i/M_{i-1}$ are simple. If such a series exists, the length $\ell_R(M)$ is its number $n$ of factors; thm-jordan-holder-theorem-for-modules proves independence of the chosen series. The zero module has the empty series and length $0$. ([[def-composition-series-and-length-of-a-module]]).

[L2] For submodules $L,N\le M$, there is a canonical isomorphism $$L/(L\cap N)\cong(L+N)/N.$$. ([[thm-second-isomorphism-theorem-modules]]).

[L3] If $N\le L\le M$, then $L/N$ is a submodule of $M/N$ and $$(M/N)/(L/N)\cong M/L.$$. ([[thm-third-isomorphism-theorem-modules]]).

[L4] For $N\le M$, inverse image and quotient induce mutually inverse inclusion-preserving bijections between submodules of $M/N$ and submodules of $M$ containing $N$. They preserve sums, intersections, and successive quotients. ([[thm-correspondence-theorem-modules]]).

## Proof

**Proof technique:** direct.

1.1 Fix a composition series $0=M_0<\cdots<M_n=M$ and prove by induction on $n$ that it has the asserted comparison with every other composition series of $M$. We use simultaneously the elementary consequence that, for any $C\le M$, intersecting the fixed series with $C$ and deleting repetitions gives a composition series of $C$: each remaining factor embeds in the corresponding simple factor $M_i/M_{i-1}$ and is therefore simple. [L1, L2, L3, L4, given, algebra]

2.1 The case $n=0$ is $M=0$. For $n>0$, let $A=M_{n-1}$ and let $B$ be the penultimate term of a second series. If $A=B$, the induction hypothesis applied in $A$ matches all lower factors, and the common top factor finishes. [step 1.1, given]

3.1 Suppose $A\ne B$. Since $A$ and $B$ are maximal proper submodules, $A+B=M$. Put $C=A\cap B$. The second isomorphism theorem gives $$A/C\cong M/B,\qquad B/C\cong M/A,$$ so both quotients are simple. [L2, step 1.1, step 2.1, given, algebra]

4.1 By step 1.1, $C$ has a composition series. Appending $A$ gives a composition series of $A$ ending in $A/C$. Compare it with $0=M_0<\cdots<M_{n-1}=A$ using the induction hypothesis, whose fixed first series has length $n-1$. It follows that the series of $C$ has length $n-2$ and that its factors together with $A/C$ are exactly the factors below $M/A$ in the fixed series. [L3, L4, step 1.1, step 3.1, given]

5.1 Appending $B$ to the same series of $C$ gives a composition series of $B$ of length $n-1$. Using this as the fixed first series, the induction hypothesis compares it with the lower part of the second series. The isomorphisms in step 3.1 exchange the two top simple factors $A/C$ and $M/A$ with $M/B$ and $B/C$. Hence the two original series have length $n$ and the same factors up to permutation. This also covers $n=1$, when $C=0$. [step 2.1, step 3.1, step 4.1, given] ∎

```

## DEPENDENCY: cor-length-is-additive-in-short-exact-sequences

```markdown
---
id: cor-length-is-additive-in-short-exact-sequences
kind: corollary
title: "Module length is additive in short exact sequences"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-jordan-holder-theorem-for-modules, def-composition-series-and-length-of-a-module, thm-correspondence-theorem-modules]
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

## Statement

For a short exact sequence $0\to N\to M\to Q\to0$, the module $M$ has finite length if and only if $N$ and $Q$ do, and then $$\ell_R(M)=\ell_R(N)+\ell_R(Q).$$ See [[thm-jordan-holder-theorem-for-modules]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Any two composition series of a module have the same length, and their simple factors agree up to permutation and isomorphism. ([[thm-jordan-holder-theorem-for-modules]]).

[L2] A composition series of a left $R$-module $M$ is a finite chain $$0=M_0<M_1<\cdots<M_n=M$$ whose factors $M_i/M_{i-1}$ are simple. If such a series exists, the length $\ell_R(M)$ is its number $n$ of factors; thm-jordan-holder-theorem-for-modules proves independence of the chosen series. The zero module has the empty series and length $0$. ([[def-composition-series-and-length-of-a-module]]).

[L3] For $N\le M$, inverse image and quotient induce mutually inverse inclusion-preserving bijections between submodules of $M/N$ and submodules of $M$ containing $N$. They preserve sums, intersections, and successive quotients. ([[thm-correspondence-theorem-modules]]).

## Proof

**Proof technique:** direct.

1.1 If $N$ and $Q$ have composition series, lift the series of $Q$ along $M\to Q$ and splice it above the series of $N$. Correspondence identifies all lifted factors, so this is a composition series of $M$ with $\ell_R(N)+\ell_R(Q)$ factors. [L1, L2, L3, given, algebra]

1.2 Conversely, let $0=M_0<\cdots<M_n=M$ be a composition series. Put $N_i=M_i\cap N$ and let $Q_i$ be the image of $M_i$ in $Q$. For each $i$, the simple factor $M_i/M_{i-1}$ has submodule $N_i/N_{i-1}$ and corresponding quotient $Q_i/Q_{i-1}$; exactly one is that simple factor and the other is zero. Deleting repetitions therefore gives composition series of $N$ and $Q$, and their numbers of factors add to $n$. [L2, L3, given, algebra]

2.1 Jordan–Hölder makes all three lengths independent of the chosen series, so steps 1.1 and 1.2 prove both directions and the formula. If $N=0$, $Q=0$, or $M=0$, the relevant series is empty and the same count applies. [L1, L2, step 1.1, step 1.2, given] ∎

```

## DEPENDENCY: cor-prime-order-group-is-cyclic

```markdown
---
id: cor-prime-order-group-is-cyclic
kind: corollary
title: "A finite group of prime order is cyclic and every nonidentity element generates it"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [cor-order-of-element-divides-group-order, def-prime, def-order-in-a-group,
       lem-order-characterisation, def-generated-subgroup,
       lem-cyclic-subgroup-is-the-set-of-powers, thm-subset-of-a-finite-set,
       lem-nat-embeds-int, def-finite-cardinality]
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
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, Lagrange's Theorem"
      url: "https://judsonbooks.org/abstract-algebra-theory-and-applications/"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §6.2: Lagrange's Theorem"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/06%3A_Cosets_and_Lagrange%27s_Theorem/6.02%3A_Lagrange%27s_Theorem"
    - title: "Thomas W. Judson, Abstract Algebra: Theory and Applications, §4.1: Cyclic Subgroups"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/04%3A_Cyclic_Groups/4.01%3A_Cyclic_Subgroups"
pipeline_run: null
---

## Statement

Let $G$ be a finite group such that the positive integer $\iota(|G|)$ is prime.
Then every $g\ne e$ has order $|G|$, satisfies $\langle g\rangle=G$, and hence
generates $G$. In particular, $G$ is cyclic.

## Facts & Assumptions

**Given:** A finite group $G$ with identity $e$, with $\iota(|G|)$ prime, and an element $g\in G$ with $g\ne e$.

[F1] A prime integer $p$ satisfies $p>1$, and every positive divisor of $p$ is $1$ or $p$ ([[def-prime]]).

[L1] The natural $\operatorname{ord}(g)$ is positive, equals $1$ exactly when $g=e$, and its image in $\mathbb Z$ divides $\iota(|G|)$; the embedding $\iota:\mathbb N\to\mathbb Z$ is injective and preserves order ([[def-order-in-a-group]], [[cor-order-of-element-divides-group-order]], [[lem-nat-embeds-int]]).

[L2] The cyclic subgroup $\langle g\rangle$ is a subgroup with $|\langle g\rangle|=\operatorname{ord}(g)$ ([[def-generated-subgroup]], [[lem-cyclic-subgroup-is-the-set-of-powers]], [[lem-order-characterisation]]).

[L3] If $A\subseteq B$ are finite and $|A|=|B|$, then $A=B$ ([[thm-subset-of-a-finite-set]]).

[F2] If a finite set $G$ contains $e$ and $|G|\ne1$, then some element of $G$ differs from $e$: otherwise $G=\{e\}$, whose cardinality is $1$ ([[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 The positive integer $\iota(\operatorname{ord}(g))$ divides the prime $\iota(|G|)$, so it is $1$ or $\iota(|G|)$. It is not $1$ because $g\ne e$, hence $\operatorname{ord}(g)=|G|$ by injectivity of $\iota$. [given, F1, L1]

2.1 The subgroup $\langle g\rangle\subseteq G$ has cardinality $\operatorname{ord}(g)=|G|$, so $\langle g\rangle=G$. [step 1.1, L2, L3]

3.1 Thus every nonidentity element generates $G$. Since $\iota(|G|)>1=\iota(1)$ by [F1], these two integers differ; injectivity in [L1] gives $|G|\ne1$, and [F2] supplies a nonidentity element. Consequently $G$ is cyclic. [step 2.1, F1, F2, L1] ∎

```
