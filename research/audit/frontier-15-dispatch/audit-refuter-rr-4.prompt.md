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
label: rr-4

run: frontier-15
role: refuter
label: rr-4
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

## ITEM: thm-nilpotence-is-detected-modulo-the-frattini-subgroup

```markdown
---
id: thm-nilpotence-is-detected-modulo-the-frattini-subgroup
kind: theorem
title: "Nilpotence lifts over the Frattini subgroup of a finite group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-frattini-subgroup-of-a-finite-group, thm-frattini-argument, lem-finite-nilpotence-via-normal-sylow-subgroups, thm-correspondence-theorem-groups, thm-subgroups-quotients-and-finite-products-of-nilpotent-groups, thm-sylow-second-theorem, lem-characteristic-subgroup-of-a-normal-subgroup-is-normal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory, Sections 1.4 and 2.3"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
pipeline_run: null
---

## Statement

Let $G$ be finite and let $\Phi(G)\le N\trianglelefteq G$. Then $N$ is nilpotent if and only if $N/\Phi(G)$ is nilpotent. In particular, $G$ is nilpotent if and only if $G/\Phi(G)$ is nilpotent. See [[def-frattini-subgroup-of-a-finite-group]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For a finite group $G$, the Frattini subgroup is $$\Phi(G):=\bigcap\{M\le G:M\text{ is maximal proper}\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\Phi(1)=1$. ([[def-frattini-subgroup-of-a-finite-group]]).

[L2] If $N\trianglelefteq G$ is finite and $P$ is a Sylow $p$-subgroup of $N$, then $$G=N N_G(P).$$. ([[thm-frattini-argument]]).

[L3] For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; and $G$ is the internal direct product of its Sylow subgroups. ([[lem-finite-nilpotence-via-normal-sylow-subgroups]]).

[L4] For $K\mathrel{\trianglelefteq}G$, subgroups of $G/K$ correspond to subgroups of $G$ containing $K$, and the correspondence preserves normality. ([[thm-correspondence-theorem-groups]]).

[L5] Every subgroup and every quotient of a nilpotent group is nilpotent, and every finite direct product of nilpotent groups is nilpotent. ([[thm-subgroups-quotients-and-finite-products-of-nilpotent-groups]]).

[L6] Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\le G$ be a $p$-subgroup. There is $g\in G$ with $H\le gPg^{-1}$; in particular all Sylow $p$-subgroups are conjugate. ([[thm-sylow-second-theorem]]).

[L7] If $K$ is characteristic in $N$ and $N\trianglelefteq G$, then $K\trianglelefteq G$. ([[lem-characteristic-subgroup-of-a-normal-subgroup-is-normal]]).

## Proof

**Proof technique:** direct.

1.1 If $N$ is nilpotent, then its quotient $N/\Phi(G)$ is nilpotent by [L5]. [L1, L5, given]

1.2 Conversely, assume that $N/\Phi(G)$ is nilpotent, and let $P$ be a Sylow $p$-subgroup of $N$. Every automorphism of $G$ permutes its maximal proper subgroups, so [L1] makes $\Phi(G)$ characteristic and hence normal in $G$. If $S$ is Sylow in $\Phi(G)$, then [L6] gives $n\in N$ with $S\le nPn^{-1}$; normality of $\Phi(G)$ gives $n^{-1}Sn\le P\cap\Phi(G)$. Thus $P\cap\Phi(G)$ contains a Sylow $p$-subgroup of $\Phi(G)$ and, being a $p$-subgroup, is itself Sylow there. Consequently $P\Phi(G)/\Phi(G)$ is a Sylow $p$-subgroup of $N/\Phi(G)$. [L1, L3, L4, L6, given, algebra]

2.1 By nilpotence and [L3], this quotient Sylow subgroup is normal; conjugacy [L6] makes it unique, hence characteristic in $N/\Phi(G)$. Since $N/\Phi(G)\trianglelefteq G/\Phi(G)$, [L7] and [L4] give $P\Phi(G)\trianglelefteq G$. [step 1.2, L3, L4, L6, L7, given, algebra]

3.1 Because $P\cap\Phi(G)$ is Sylow in $\Phi(G)$, the product-order formula shows that $P$ is Sylow in $P\Phi(G)$. Apply the Frattini argument [L2] to the normal subgroup $P\Phi(G)$: $$G=P\Phi(G)N_G(P)=\Phi(G)N_G(P).$$ If $N_G(P)$ were proper, finiteness would place it in a maximal subgroup $M$; [L1] gives $\Phi(G)\le M$, contradicting the displayed equality. Hence $N_G(P)=G$. [L1, L2, step 1.2, step 2.1, given, algebra]

4.1 Thus every Sylow subgroup of $N$ is normal, so [L3] makes $N$ nilpotent. Together with step 1.1 this proves both directions. [L3, step 1.1, step 3.1, given]

5.1 Taking $N=G$ gives the asserted special case. When $G=1$, one has $N=\Phi(G)=1$, and both groups in the equivalence are trivial and nilpotent. [L1, step 4.1, given] ∎

```

### Recorded proof contract for thm-nilpotence-is-detected-modulo-the-frattini-subgroup

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-frattini-subgroup-of-a-finite-group",
   "source_section": "Definition",
   "quote": "For a finite group $G$, the **Frattini subgroup** is $$\\Phi(G):=\\bigcap\\{M\\le G:M\\text{ is maximal proper}\\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\\Phi(1)=1$.",
   "uses": [
    "1.1",
    "1.2",
    "3.1",
    "5.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-frattini-argument",
   "source_section": "Statement",
   "quote": "If $N\\trianglelefteq G$ is finite and $P$ is a Sylow $p$-subgroup of $N$, then $$G=N N_G(P).$$ See [[thm-sylow-second-theorem]].",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L3",
   "source": "lem-finite-nilpotence-via-normal-sylow-subgroups",
   "source_section": "Statement",
   "quote": "For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; and $G$ is the internal direct product of its Sylow subgroups. See [[thm-normalizer-condition-for-finite-nilpotent-groups]].",
   "uses": [
    "1.2",
    "2.1",
    "4.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-correspondence-theorem-groups",
   "source_section": "Statement",
   "quote": "Correspondence theorem: subgroups of $G/N$ correspond to subgroups of $G$ containing $N$, with normality preserved.\n\nFor $N\\mathrel{\\trianglelefteq}G$, the maps $H\\mapsto H/N$ and\n$K\\mapsto\\pi^{-1}(K)$ are inverse inclusion-preserving bijections between\nsubgroups $H$ with $N\\le H\\le G$ and subgroups $K\\le G/N$; they preserve\nnormality.",
   "uses": [
    "1.2",
    "2.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-subgroups-quotients-and-finite-products-of-nilpotent-groups",
   "source_section": "Statement",
   "quote": "Every subgroup and every quotient of a nilpotent group is nilpotent. Every finite direct product of nilpotent groups is nilpotent; the class of a subgroup or quotient is at most the class of the original group, and the class of a nonempty finite product is at most the maximum of the factor classes. The empty product is the trivial group of class zero.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L6",
   "source": "thm-sylow-second-theorem",
   "source_section": "Statement",
   "quote": "Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\\le G$ be a $p$-subgroup. There is $g\\in G$ with $H\\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. See [[thm-sylow-first-theorem]].",
   "uses": [
    "1.2",
    "2.1"
   ]
  },
  {
   "fact": "L7",
   "source": "lem-characteristic-subgroup-of-a-normal-subgroup-is-normal",
   "source_section": "Statement",
   "quote": "If $K$ is characteristic in $N$ and $N\\trianglelefteq G$, then $K\\trianglelefteq G$.",
   "uses": [
    "2.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "If $N$ is nilpotent, then its quotient $N/\\Phi(G)$ is nilpotent by [L5].",
   "step": "1.1",
   "inputs": [
    "L1",
    "L5",
    "given"
   ]
  },
  {
   "id": "step-1-2",
   "claim": "Conversely, assume that $N/\\Phi(G)$ is nilpotent, and let $P$ be a Sylow $p$-subgroup of $N$. Every automorphism of $G$ permutes its maximal proper subgroups, so [L1] makes $\\Phi(G)$ characteristic and hence normal in $G$. If $S$ is Sylow in $\\Phi(G)$, then [L6] gives $n\\in N$ with $S\\le nPn^{-1}$; normality of $\\Phi(G)$ gives $n^{-1}Sn\\le P\\cap\\Phi(G)$. Thus $P\\cap\\Phi(G)$ contains a Sylow $p$-subgroup of $\\Phi(G)$ and, being a $p$-subgroup, is itself Sylow there. Consequently $P\\Phi(G)/\\Phi(G)$ is a Sylow $p$-subgroup of $N/\\Phi(G)$.",
   "step": "1.2",
   "inputs": [
    "L1",
    "L3",
    "L4",
    "L6",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "By nilpotence and [L3], this quotient Sylow subgroup is normal; conjugacy [L6] makes it unique, hence characteristic in $N/\\Phi(G)$. Since $N/\\Phi(G)\\trianglelefteq G/\\Phi(G)$, [L7] and [L4] give $P\\Phi(G)\\trianglelefteq G$.",
   "step": "2.1",
   "inputs": [
    "step 1.2",
    "L3",
    "L4",
    "L6",
    "L7",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Because $P\\cap\\Phi(G)$ is Sylow in $\\Phi(G)$, the product-order formula shows that $P$ is Sylow in $P\\Phi(G)$. Apply the Frattini argument [L2] to the normal subgroup $P\\Phi(G)$: $$G=P\\Phi(G)N_G(P)=\\Phi(G)N_G(P).$$ If $N_G(P)$ were proper, finiteness would place it in a maximal subgroup $M$; [L1] gives $\\Phi(G)\\le M$, contradicting the displayed equality. Hence $N_G(P)=G$.",
   "step": "3.1",
   "inputs": [
    "L1",
    "L2",
    "step 1.2",
    "step 2.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "Thus every Sylow subgroup of $N$ is normal, so [L3] makes $N$ nilpotent. Together with step 1.1 this proves both directions.",
   "step": "4.1",
   "inputs": [
    "L3",
    "step 1.1",
    "step 3.1",
    "given"
   ]
  },
  {
   "id": "step-5-1",
   "claim": "Taking $N=G$ gives the asserted special case. When $G=1$, one has $N=\\Phi(G)=1$, and both groups in the equivalence are trivial and nilpotent.",
   "step": "5.1",
   "inputs": [
    "L1",
    "step 4.1",
    "given"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "When $G=1$, the family of maximal proper subgroups defining $\\Phi(G)$ is empty; step 5.1 uses $\\Phi(1)=1$ and verifies that both sides are the trivial nilpotent group."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "Nilpotence lifts over the Frattini subgroup of a finite group: the claim “Let $G$ be finite and let $\\Phi(G)\\le N\\trianglelefteq G$. Then $N$ is nilpotent if and only if $N/\\Phi(G)$ is nilpotent. In particular, $G$ is nilpotent if and only if $G/\\Phi(G)$ is nilpotent.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Step 5.1 checks the one-element group explicitly: $G=N=\\Phi(G)=1$, and $N$ and $N/\\Phi(G)$ are nilpotent."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The collapsed case $N=\\Phi(G)$ has trivial quotient; steps 1.2–4.1 apply unchanged and prove $N$ nilpotent, while step 1.1 covers the converse."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "Nilpotence lifts over the Frattini subgroup of a finite group: the claim “Let $G$ be finite and let $\\Phi(G)\\le N\\trianglelefteq G$. Then $N$ is nilpotent if and only if $N/\\Phi(G)$ is nilpotent. In particular, $G$ is nilpotent if and only if $G/\\Phi(G)$ is nilpotent.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Nilpotence lifts over the Frattini subgroup of a finite group: the claim “Let $G$ be finite and let $\\Phi(G)\\le N\\trianglelefteq G$. Then $N$ is nilpotent if and only if $N/\\Phi(G)$ is nilpotent. In particular, $G$ is nilpotent if and only if $G/\\Phi(G)$ is nilpotent.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "Step 1.1 proves the forward direction: if $N$ is nilpotent, quotient closure makes $N/\\Phi(G)$ nilpotent."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "Steps 2.1–5.1 prove the reverse direction: quotient nilpotence makes every Sylow subgroup of $N$ normal, hence makes $N$ nilpotent."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-fitting-subgroup-of-the-frattini-quotient

```markdown
---
id: thm-fitting-subgroup-of-the-frattini-quotient
kind: theorem
title: "$F(G/\\Phi(G))=F(G)/\\Phi(G)$ for every finite group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup, cor-frattini-subgroup-is-contained-in-the-fitting-subgroup, thm-nilpotence-is-detected-modulo-the-frattini-subgroup, thm-correspondence-theorem-groups]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory, Sections 1.4 and 2.3"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
pipeline_run: null
---

## Statement

For every finite group $G$, $$F(G/\Phi(G))=F(G)/\Phi(G).$$ See [[thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$. ([[thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup]]).

[L2] For every finite group $G$, $\Phi(G)\le F(G)$. ([[cor-frattini-subgroup-is-contained-in-the-fitting-subgroup]]).

[L3] Let $G$ be finite and let $\Phi(G)\le N\trianglelefteq G$. Then $N$ is nilpotent if and only if $N/\Phi(G)$ is nilpotent. In particular, $G$ is nilpotent if and only if $G/\Phi(G)$ is nilpotent. ([[thm-nilpotence-is-detected-modulo-the-frattini-subgroup]]).

[L4] Correspondence theorem: subgroups of $G/N$ correspond to subgroups of $G$ containing $N$, with normality preserved. For $N\mathrel{\trianglelefteq}G$, the maps $H\mapsto H/N$ and $K\mapsto\pi^{-1}(K)$ are inverse inclusion-preserving bijections between subgroups $H$ with $N\le H\le G$ and subgroups $K\le G/N$; they preserve normality. ([[thm-correspondence-theorem-groups]]).

## Proof

**Proof technique:** direct.

1.1 The image $F(G)/\Phi(G)$ is normal and nilpotent, giving one inclusion. [L1, L2, L3, L4, given, algebra]

2.1 For the reverse inclusion, pull $F(G/\Phi(G))$ back to a normal subgroup $N$ of $G$; the lifting theorem makes $N$ nilpotent, so $N\le F(G)$. [step 1.1, given, algebra]

3.1 We check the trivial quotient. This proves the stated claim. [step 2.1, given, algebra] ∎

```

### Recorded proof contract for thm-fitting-subgroup-of-the-frattini-quotient

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup",
   "source_section": "Statement",
   "quote": "For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$. See [[def-fitting-subgroup-of-a-finite-group]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "cor-frattini-subgroup-is-contained-in-the-fitting-subgroup",
   "source_section": "Statement",
   "quote": "For every finite group $G$, $\\Phi(G)\\le F(G)$. See [[thm-frattini-subgroup-is-nilpotent]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-nilpotence-is-detected-modulo-the-frattini-subgroup",
   "source_section": "Statement",
   "quote": "Let $G$ be finite and let $\\Phi(G)\\le N\\trianglelefteq G$. Then $N$ is nilpotent if and only if $N/\\Phi(G)$ is nilpotent. In particular, $G$ is nilpotent if and only if $G/\\Phi(G)$ is nilpotent. See [[def-frattini-subgroup-of-a-finite-group]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-correspondence-theorem-groups",
   "source_section": "Statement",
   "quote": "Correspondence theorem: subgroups of $G/N$ correspond to subgroups of $G$ containing $N$, with normality preserved.\n\nFor $N\\mathrel{\\trianglelefteq}G$, the maps $H\\mapsto H/N$ and\n$K\\mapsto\\pi^{-1}(K)$ are inverse inclusion-preserving bijections between\nsubgroups $H$ with $N\\le H\\le G$ and subgroups $K\\le G/N$; they preserve\nnormality.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The image $F(G)/\\Phi(G)$ is normal and nilpotent, giving one inclusion.",
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
   "claim": "For the reverse inclusion, pull $F(G/\\Phi(G))$ back to a normal subgroup $N$ of $G$; the lifting theorem makes $N$ nilpotent, so $N\\le F(G)$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "We check the trivial quotient. This proves the stated claim.",
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
   "reason": "$F(G/\\Phi(G))=F(G)/\\Phi(G)$ for every finite group: the claim “For every finite group $G$, $F(G/\\Phi(G))=F(G)/\\Phi(G).$.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "$F(G/\\Phi(G))=F(G)/\\Phi(G)$ for every finite group: the zero or trivial specialization for “For every finite group $G$, $F(G/\\Phi(G))=F(G)/\\Phi(G).$.” is resolved in step 3.1: “We check the trivial quotient. This proves the stated claim.”."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "$F(G/\\Phi(G))=F(G)/\\Phi(G)$ for every finite group: the claim “For every finite group $G$, $F(G/\\Phi(G))=F(G)/\\Phi(G).$.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "$F(G/\\Phi(G))=F(G)/\\Phi(G)$ for every finite group: the collapsed or coincident-input case admitted by the hypotheses for “For every finite group $G$, $F(G/\\Phi(G))=F(G)/\\Phi(G).$.” is resolved in step 3.1: “We check the trivial quotient. This proves the stated claim.”."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "$F(G/\\Phi(G))=F(G)/\\Phi(G)$ for every finite group: the claim “For every finite group $G$, $F(G/\\Phi(G))=F(G)/\\Phi(G).$.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "$F(G/\\Phi(G))=F(G)/\\Phi(G)$ for every finite group: the claim “For every finite group $G$, $F(G/\\Phi(G))=F(G)/\\Phi(G).$.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "$F(G/\\Phi(G))=F(G)/\\Phi(G)$ for every finite group: the claim “For every finite group $G$, $F(G/\\Phi(G))=F(G)/\\Phi(G).$.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "$F(G/\\Phi(G))=F(G)/\\Phi(G)$ for every finite group: the claim “For every finite group $G$, $F(G/\\Phi(G))=F(G)/\\Phi(G).$.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-order-of-automorphism-group-of-elementary-abelian-rank-two

```markdown
---
id: thm-order-of-automorphism-group-of-elementary-abelian-rank-two
kind: theorem
title: "For prime $p$, $|\\operatorname{Aut}((\\mathbb Z/p)\\times(\\mathbb Z/p))|=(p^2-1)(p^2-p)$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-group-isomorphism-and-automorphism, def-external-direct-product-of-groups, thm-external-direct-product-is-a-group, thm-z-mod-p-is-a-field, thm-standard-representatives-modulo-n, thm-product-rule, thm-subset-of-a-finite-set, def-generated-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

For every prime $p$, $$|\operatorname{Aut}((\mathbb Z/p)\times(\mathbb Z/p))|=(p^2-1)(p^2-p).$$ See [[def-group-isomorphism-and-automorphism]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] An isomorphism is a bijective group homomorphism; an automorphism is an isomorphism from a group to itself, and $$\operatorname{Aut}(G):=\{f:G\to G:f\text{ is an automorphism}\}.$$ ([[def-group-isomorphism-and-automorphism]]).

[L2] Let $G$ and $H$ be groups. Their external direct product has underlying set $$G\times H:=\{(g,h):g\in G,\ h\in H\}$$ and componentwise operation $$(g,h)(g',h') := (gg',hh').$$ The fact that this operation makes $G\times H$ a group, with the indicated identity and inverses, is proved in thm-external-direct-product-is-a-group. Until that result is used, this definition introduces only the set and its componentwise binary operation. ([[def-external-direct-product-of-groups]]).

[L3] For groups $G$ and $H$, the componentwise operation of def-external-direct-product-of-groups makes $G\times H$ a group. Its identity is $(e_G,e_H)$, and $$(g,h)^{-1}=(g^{-1},h^{-1}).$$ Moreover the coordinate maps $\pi_G(g,h)=g$ and $\pi_H(g,h)=h$ are group homomorphisms. ([[thm-external-direct-product-is-a-group]]).

[L4] For every prime $p$, the operations of addition and multiplication on $\mathbb Z/p$ make it a field (def-field). ([[thm-z-mod-p-is-a-field]]).

[L5] Let $n$ be a positive integer. Every class in $\mathbb Z/n$ (def-integers-modulo-n) contains exactly one integer $r$ with $0\le r<n$. Consequently the map $$r\longmapsto[r]_n\qquad(0\le r<n)$$ is a bijection from the von Neumann natural $n$ to $\mathbb Z/n$, and $|\mathbb Z/n|=n$. This includes $n=1$, where the only representative is $0$. For $n=0$, the map $a\mapsto[a]_0$ is a bijection $\mathbb Z\to\mathbb Z/0$. ([[thm-standard-representatives-modulo-n]]).

[L6] 1. If $A$ and $B$ are finite then $A \times B$ is finite and $\lvert A \times B\rvert = \lvert A\rvert \cdot \lvert B\rvert$ (def-finite-cardinality). 2. Let $m \in \mathbb{N}$ and let $A_0, \dots, A_{m-1}$ be finite sets. Write $$\prod_{i<m} A_i := \{\, f : f \text{ is a function with domain } m \text{ and } f(i) \in A_i \text{ for every } i < m \,\}.$$ Then $\prod_{i<m} A_i$ is finite and $\big\lvert\prod_{i<m} A_i\big\rvert = \prod_{i<m}\lvert A_i\rvert$, the right-hand product being the $\mathbb{N}$-valued one of def-nat-finite-sum-and-product. ([[thm-product-rule]]).

[L7] Let $A$ be a finite set (def-countable) and let $B \subseteq A$. Then: 1. $B$ is finite; 2. $\lvert B\rvert \le \lvert A\rvert$ (def-finite-cardinality); 3. $\lvert B\rvert = \lvert A\rvert$ if and only if $B = A$; 4. every injection $f : A \to A$ is a bijection, and every surjection $f : A \to A$ is a bijection. ([[thm-subset-of-a-finite-set]]).

[L8] For a subset $S$ of a group $G$, the generated subgroup is $$\langle S\rangle:=\bigcap\{H:H\le G\text{ and }S\subseteq H\},$$ the smallest subgroup of $G$ containing $S$. ([[def-generated-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 In the additive group $E_p=(\mathbb Z/p)\times(\mathbb Z/p)$, a homomorphism $E_p\to E_p$ is determined by the images $u$ and $v$ of the two coordinate generators, because every element has a unique coordinate expression. [L1, L2, L3, L4, L5, L6, L7, L8, given, algebra]

2.1 If $u=0$ or $v\in\langle u\rangle$, the image is a proper cyclic subgroup. If $u\ne0$ and $v\notin\langle u\rangle$, the $p$ elements of each coset $jv+\langle u\rangle$ are disjoint as $j$ varies, so $u,v$ generate all $p^2$ elements and the homomorphism is bijective. [step 1.1, given, algebra]

3.1 There are $p^2-1$ choices for nonzero $u$. Its cyclic subgroup has exactly $p$ elements, leaving $p^2-p$ choices for $v$; multiplication gives $(p^2-1)(p^2-p)$ automorphisms. [step 2.1, given, algebra]

4.1 When $p=2$, the same count gives $(4-1)(4-2)=6$; the argument is entirely in coordinates and makes no matrix-group identification. This proves the stated claim. [step 1.1, step 2.1, step 3.1, given, algebra] ∎

```

### Recorded proof contract for thm-order-of-automorphism-group-of-elementary-abelian-rank-two

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-group-isomorphism-and-automorphism",
   "source_section": "Definition",
   "quote": "Group isomorphisms, automorphisms and the set $\\operatorname{Aut}(G)$.\n\nAn **isomorphism** $f:G\\to H$ is a bijective group homomorphism\n([[def-group-homomorphism]], [[def-injection-surjection-bijection]]).  When\n$G=H$, it is an **automorphism** of $G$.  Write\n\n$$\\operatorname{Aut}(G):=\\{f:G\\to G:f\\text{ is an automorphism}\\}.$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-external-direct-product-of-groups",
   "source_section": "Definition",
   "quote": "Let $G$ and $H$ be groups. Their **external direct product** has underlying set\n\n$$G\\times H:=\\{(g,h):g\\in G,\\ h\\in H\\}$$\n\nand componentwise operation\n\n$$(g,h)(g',h') := (gg',hh').$$\n\nThe fact that this operation makes $G\\times H$ a group, with the indicated\nidentity and inverses, is proved in [[thm-external-direct-product-is-a-group]].\nUntil that result is used, this definition introduces only the set and its\ncomponentwise binary operation.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-external-direct-product-is-a-group",
   "source_section": "Statement",
   "quote": "For groups $G$ and $H$, the componentwise operation of\n[[def-external-direct-product-of-groups]] makes $G\\times H$ a group. Its\nidentity is $(e_G,e_H)$, and\n\n$$(g,h)^{-1}=(g^{-1},h^{-1}).$$\n\nMoreover the coordinate maps $\\pi_G(g,h)=g$ and $\\pi_H(g,h)=h$ are group\nhomomorphisms.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-z-mod-p-is-a-field",
   "source_section": "Statement",
   "quote": "For every prime $p$, the operations of addition and multiplication on\n$\\mathbb Z/p$ make it a field ([[def-field]]).",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-standard-representatives-modulo-n",
   "source_section": "Statement",
   "quote": "Let $n$ be a positive integer. Every class in $\\mathbb Z/n$\n([[def-integers-modulo-n]]) contains exactly one integer $r$ with\n$0\\le r<n$. Consequently the map\n\n$$r\\longmapsto[r]_n\\qquad(0\\le r<n)$$\n\nis a bijection from the von Neumann natural $n$ to $\\mathbb Z/n$, and\n$|\\mathbb Z/n|=n$. This includes $n=1$, where the only representative is $0$.\nFor $n=0$, the map $a\\mapsto[a]_0$ is a bijection $\\mathbb Z\\to\\mathbb Z/0$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L6",
   "source": "thm-product-rule",
   "source_section": "Statement",
   "quote": "1. If $A$ and $B$ are finite then $A \\times B$ is finite and\n   $\\lvert A \\times B\\rvert = \\lvert A\\rvert \\cdot \\lvert B\\rvert$\n   ([[def-finite-cardinality]]).\n2. Let $m \\in \\mathbb{N}$ and let $A_0, \\dots, A_{m-1}$ be finite sets. Write\n   $$\\prod_{i<m} A_i := \\{\\, f : f \\text{ is a function with domain } m \\text{ and } f(i) \\in A_i \\text{ for every } i < m \\,\\}.$$\n   Then $\\prod_{i<m} A_i$ is finite and\n   $\\big\\lvert\\prod_{i<m} A_i\\big\\rvert = \\prod_{i<m}\\lvert A_i\\rvert$, the\n   right-hand product being the $\\mathbb{N}$-valued one of\n   [[def-nat-finite-sum-and-product]].\n\nAt $m = 0$ clause 2 reads $\\big\\lvert\\prod_{i<0} A_i\\big\\rvert = 1$: there is\nexactly one function with domain $\\varnothing$, the empty function, and the empty\nproduct is $1$. Both sides are computed, not stipulated.\n\n```tikz\n\\begin{tikzpicture}[x=1.45cm,y=0.9cm]\n  \\node at (0,2.45) {$a_0$};\n  \\node at (1,2.45) {$a_1$};\n  \\node at (2,2.45) {$a_2$};\n  \\node at (-1.1,1.5) {$b_0$};\n  \\node at (-1.1,0.5) {$b_1$};\n  \\draw (-0.5,0) rectangle (2.5,2);\n  \\draw (0.5,0) -- (0.5,2);\n  \\draw (1.5,0) -- (1.5,2);\n  \\draw (-0.5,1) -- (2.5,1);\n  \\node at (0,1.5) {$(a_0,b_0)$};\n  \\node at (1,1.5) {$(a_1,b_0)$};\n  \\node at (2,1.5) {$(a_2,b_0)$};\n  \\node at (0,0.5) {$(a_0,b_1)$};\n  \\node at (1,0.5) {$(a_1,b_1)$};\n  \\node at (2,0.5) {$(a_2,b_1)$};\n  \\node at (1,-0.6) {$|A\\times B|=3\\cdot2=6$};\n\\end{tikzpicture}\n```",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L7",
   "source": "thm-subset-of-a-finite-set",
   "source_section": "Statement",
   "quote": "Let $A$ be a finite set ([[def-countable]]) and let $B \\subseteq A$. Then:\n\n1. $B$ is finite;\n2. $\\lvert B\\rvert \\le \\lvert A\\rvert$ ([[def-finite-cardinality]]);\n3. $\\lvert B\\rvert = \\lvert A\\rvert$ if and only if $B = A$;\n4. every injection $f : A \\to A$ is a bijection, and every surjection\n   $f : A \\to A$ is a bijection.\n\nClause 3 is the finite form of the Dedekind statement: a finite set is not\nequinumerous with a proper subset of itself. Clause 4 is its working form, and\n**finiteness is exactly the hypothesis that fails in general**: the successor map\nis an injection of $\\mathbb{N}$ into itself that is not surjective, which is the\nfalse statement recorded on this page's companion.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L8",
   "source": "def-generated-subgroup",
   "source_section": "Definition",
   "quote": "Let $G$ be a group ([[def-group]]) and $S \\subseteq G$ a subset. The set of\nsubgroups of $G$ containing $S$ is nonempty, since $G$ itself is such a subgroup,\nso its intersection is a subgroup of $G$ by [[lem-intersection-of-subgroups]].\nThat intersection is the **subgroup generated by $S$**,\n\n$$\\langle S \\rangle \\;:=\\; \\bigcap \\{\\, H \\;:\\; H \\le G \\text{ and } S \\subseteq H \\,\\} .$$\n\nIt contains $S$, being an intersection of sets each containing $S$, and it is\ncontained in every subgroup of $G$ that contains $S$; so it is the **smallest**\nsubgroup of $G$ containing $S$, and these two properties determine it uniquely.\nThe elements of $S$ are called **generators**.\n\nFor a single element $g \\in G$ we write $\\langle g \\rangle := \\langle \\{g\\}\\rangle$\nand call it the **cyclic subgroup generated by $g$**. A group $G$ is **cyclic**\nwhen $G = \\langle g \\rangle$ for some $g \\in G$.\n\nBy convention $\\langle \\varnothing \\rangle = \\{e\\}$: the trivial subgroup is the\nsmallest subgroup containing the empty set, and this is a consequence of the\ndefinition, not a stipulation, since every subgroup contains $e$\n([[def-subgroup]]).",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "In the additive group $E_p=(\\mathbb Z/p)\\times(\\mathbb Z/p)$, a homomorphism $E_p\\to E_p$ is determined by the images $u$ and $v$ of the two coordinate generators, because every element has a unique coordinate expression.",
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
   "claim": "If $u=0$ or $v\\in\\langle u\\rangle$, the image is a proper cyclic subgroup. If $u\\ne0$ and $v\\notin\\langle u\\rangle$, the $p$ elements of each coset $jv+\\langle u\\rangle$ are disjoint as $j$ varies, so $u,v$ generate all $p^2$ elements and the homomorphism is bijective.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "There are $p^2-1$ choices for nonzero $u$. Its cyclic subgroup has exactly $p$ elements, leaving $p^2-p$ choices for $v$; multiplication gives $(p^2-1)(p^2-p)$ automorphisms.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "When $p=2$, the same count gives $(4-1)(4-2)=6$; the argument is entirely in coordinates and makes no matrix-group identification. This proves the stated claim.",
   "step": "4.1",
   "inputs": [
    "step 1.1",
    "step 2.1",
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
   "reason": "For prime $p$, $|\\operatorname{Aut}((\\mathbb Z/p)\\times(\\mathbb Z/p))|=(p^2-1)(p^2-p)$: the claim “For every prime $p$, $|\\operatorname{Aut}((\\mathbb Z/p)\\times(\\mathbb Z/p))|=(p^2-1)(p^2-p).$.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "For prime $p$, $|\\operatorname{Aut}((\\mathbb Z/p)\\times(\\mathbb Z/p))|=(p^2-1)(p^2-p)$: the zero or trivial specialization for “For every prime $p$, $|\\operatorname{Aut}((\\mathbb Z/p)\\times(\\mathbb Z/p))|=(p^2-1)(p^2-p).$.” is resolved in step 4.1: “When $p=2$, the same count gives $(4-1)(4-2)=6$; the argument is entirely in coordinates and makes no matrix-group identification. This proves the stated claim.”."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "For prime $p$, $|\\operatorname{Aut}((\\mathbb Z/p)\\times(\\mathbb Z/p))|=(p^2-1)(p^2-p)$: the smallest positive, one-factor, or $p=2$ specialization for “For every prime $p$, $|\\operatorname{Aut}((\\mathbb Z/p)\\times(\\mathbb Z/p))|=(p^2-1)(p^2-p).$.” is resolved in step 4.1: “When $p=2$, the same count gives $(4-1)(4-2)=6$; the argument is entirely in coordinates and makes no matrix-group identification. This proves the stated claim.”."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "For prime $p$, $|\\operatorname{Aut}((\\mathbb Z/p)\\times(\\mathbb Z/p))|=(p^2-1)(p^2-p)$: the collapsed or coincident-input case admitted by the hypotheses for “For every prime $p$, $|\\operatorname{Aut}((\\mathbb Z/p)\\times(\\mathbb Z/p))|=(p^2-1)(p^2-p).$.” is resolved in step 4.1: “When $p=2$, the same count gives $(4-1)(4-2)=6$; the argument is entirely in coordinates and makes no matrix-group identification. This proves the stated claim.”."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "For prime $p$, $|\\operatorname{Aut}((\\mathbb Z/p)\\times(\\mathbb Z/p))|=(p^2-1)(p^2-p)$: the claim “For every prime $p$, $|\\operatorname{Aut}((\\mathbb Z/p)\\times(\\mathbb Z/p))|=(p^2-1)(p^2-p).$.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "For prime $p$, $|\\operatorname{Aut}((\\mathbb Z/p)\\times(\\mathbb Z/p))|=(p^2-1)(p^2-p)$: the claim “For every prime $p$, $|\\operatorname{Aut}((\\mathbb Z/p)\\times(\\mathbb Z/p))|=(p^2-1)(p^2-p).$.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "For prime $p$, $|\\operatorname{Aut}((\\mathbb Z/p)\\times(\\mathbb Z/p))|=(p^2-1)(p^2-p)$: the claim “For every prime $p$, $|\\operatorname{Aut}((\\mathbb Z/p)\\times(\\mathbb Z/p))|=(p^2-1)(p^2-p).$.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "For prime $p$, $|\\operatorname{Aut}((\\mathbb Z/p)\\times(\\mathbb Z/p))|=(p^2-1)(p^2-p)$: the claim “For every prime $p$, $|\\operatorname{Aut}((\\mathbb Z/p)\\times(\\mathbb Z/p))|=(p^2-1)(p^2-p).$.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-groups-of-order-p-squared-q-have-a-normal-sylow-subgroup

```markdown
---
id: thm-groups-of-order-p-squared-q-have-a-normal-sylow-subgroup
kind: theorem
title: "Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-third-theorem, cor-sylow-subgroup-normal-iff-unique]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup. See [[thm-sylow-third-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$. ([[thm-sylow-third-theorem]]).

[L2] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

## Proof

**Proof technique:** direct.

1.1 If $p>q$, the restrictions $n_p\mid q$ and $n_p\equiv1\pmod p$ force $n_p=1$. [L1, L2, given, algebra]

2.1 If $q>p$, then $n_q\in\{1,p^2\}$; the second value forces $q\mid(p-1)(p+1)$, hence the sole exceptional pair $(p,q)=(2,3)$. [step 1.1, given, algebra]

3.1 For order $12$, if the four Sylow $3$-subgroups are nonnormal, their eight nonidentity elements leave exactly four elements, so every Sylow $2$-subgroup is that same four-element complement and is normal. [step 2.1, given, algebra]

4.1 Keep the two prime orderings and the order-twelve boundary case explicit. This proves the stated claim. [step 3.1, given, algebra] ∎

```

### Recorded proof contract for thm-groups-of-order-p-squared-q-have-a-normal-sylow-subgroup

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-sylow-third-theorem",
   "source_section": "Statement",
   "quote": "Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$$ See [[thm-sylow-second-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "cor-sylow-subgroup-normal-iff-unique",
   "source_section": "Statement",
   "quote": "A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. See [[thm-sylow-second-theorem]].",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "If $p>q$, the restrictions $n_p\\mid q$ and $n_p\\equiv1\\pmod p$ force $n_p=1$.",
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
   "claim": "If $q>p$, then $n_q\\in\\{1,p^2\\}$; the second value forces $q\\mid(p-1)(p+1)$, hence the sole exceptional pair $(p,q)=(2,3)$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "For order $12$, if the four Sylow $3$-subgroups are nonnormal, their eight nonidentity elements leave exactly four elements, so every Sylow $2$-subgroup is that same four-element complement and is normal.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "Keep the two prime orderings and the order-twelve boundary case explicit. This proves the stated claim.",
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
   "reason": "Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup: the claim “Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup: the claim “Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup: the smallest positive, one-factor, or $p=2$ specialization for “Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup.” is resolved in step 4.1: “Keep the two prime orderings and the order-twelve boundary case explicit. This proves the stated claim.”."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup: the collapsed or coincident-input case admitted by the hypotheses for “Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup.” is resolved in step 4.1: “Keep the two prime orderings and the order-twelve boundary case explicit. This proves the stated claim.”."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup: the claim “Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup: the claim “Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup: the claim “Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup: the claim “Every group of order $p^2q$ for distinct primes has a normal Sylow subgroup.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup

```markdown
---
id: thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup
kind: theorem
title: "Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-third-theorem, cor-sylow-subgroup-normal-iff-unique, lem-product-with-normal-subgroup, thm-left-coset-action-and-its-kernel, thm-image-subgroup-and-kernel-normal, thm-first-isomorphism-theorem-groups, cor-order-of-a-quotient-group, thm-lagrange, thm-number-of-bijections-of-a-finite-set, thm-classification-of-groups-of-order-pq, cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal, def-simple-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple. See [[thm-sylow-third-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$. ([[thm-sylow-third-theorem]]).

[L2] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

[L3] If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$. Here $HN:=\{hn:h\in H,\ n\in N\}$. ([[lem-product-with-normal-subgroup]]).

[L4] Let $H\le G$. Left multiplication defines a transitive action on $G/H$, and the corresponding homomorphism $\rho:G\to\operatorname{Sym}(G/H)$ has $$\ker\rho=\operatorname{Core}_G(H)\le H.$$ ([[thm-left-coset-action-and-its-kernel]]).

[L5] The image of a group homomorphism is a subgroup and its kernel is a normal subgroup. For every group homomorphism $f:G\to H$, one has $\operatorname{im}f\le H$ and $\ker f\mathrel{\trianglelefteq}G$. ([[thm-image-subgroup-and-kernel-normal]]).

[L6] First isomorphism theorem for groups: $G/\ker f\cong\operatorname{im}f$. For every homomorphism $f:G\to H$, the rule $g\ker f\mapsto f(g)$ is an isomorphism from $G/\ker f$ onto $\operatorname{im}f$. ([[thm-first-isomorphism-theorem-groups]]).

[L7] Let $N\mathrel{\trianglelefteq}G$. If $[G:N]$ is finite, then the quotient group $G/N$ is finite and $$|G/N|=[G:N].$$ In particular, if $G$ is finite, then $$|G/N|=\frac{|G|}{|N|}.$$. ([[cor-order-of-a-quotient-group]]).

[L8] Let $p<q$ be primes. - If $p\nmid(q-1)$, every group of order $pq$ is cyclic. - If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$. ([[thm-classification-of-groups-of-order-pq]]).

[L9] If $N\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\trianglelefteq G$. ([[cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal]]).

[L10] A group $G$ is simple if $G\ne\{1\}$ and its only normal subgroups are $\{1\}$ and $G$, where normality is as in def-normal-subgroup. ([[def-simple-group]]).

[L11] If $H\le G$ and $G$ is finite, then $|G|=[G:H]|H|$; in particular $|H|$ divides $|G|$. ([[thm-lagrange]]).

[L12] A set of cardinality $n$ has exactly $n!$ bijections to itself; in particular the symmetric group on three points has order $3!=6$. ([[thm-number-of-bijections-of-a-finite-set]]).

## Proof

**Proof technique:** direct.

1.1 The nonunique counts $n_5=21$ and $n_7=15$ would already contribute $84+90$ distinct nonidentity elements, so at least one of the two Sylow subgroups is normal. [L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, given, algebra]

2.1 Let $P$ be the normal Sylow subgroup supplied by step 1.1 and let $Q$ be a Sylow subgroup for the other prime. By [L3], $H=PQ$ is a subgroup. Its multiplication map $P\times Q\to PQ$ has fibres indexed by $P\cap Q=1$, so $|H|=|P||Q|=35$. [L3, step 1.1, given, algebra]

3.1 The action on the three left cosets has kernel $K\subseteq H$. By [L6], $G/K$ is isomorphic to a subgroup of the symmetric group on three points, so [L11] and [L12] give $[G:K]\mid6$. Also [L7] and [L11] give $[G:K]\mid105$, while $K\le H$ gives $3=[G:H]\mid[G:K]$. Hence $[G:K]=3=[G:H]$, so $K=H$ and $H\trianglelefteq G$. [L4, L5, L6, L7, L11, L12, step 2.1, given, algebra]

4.1 The order-$pq$ classification [L8] makes $H$ cyclic, and its Sylow $5$- and $7$-subgroups are normal in $H$ and therefore normal in $G$ by [L9]. Either is a nontrivial proper normal subgroup of $G$, so [L10] also shows that $G$ is not simple. [L8, L9, L10, step 3.1, given] ∎

```

### Recorded proof contract for thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-sylow-third-theorem",
   "source_section": "Statement",
   "quote": "Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$$ See [[thm-sylow-second-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "cor-sylow-subgroup-normal-iff-unique",
   "source_section": "Statement",
   "quote": "A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. See [[thm-sylow-second-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "lem-product-with-normal-subgroup",
   "source_section": "Statement",
   "quote": "If $H\\le G$ and $N\\mathrel{\\trianglelefteq}G$, then $HN$ is a subgroup and $H\\cap N\\mathrel{\\trianglelefteq}H$.\n\nHere $HN:=\\{hn:h\\in H,\\ n\\in N\\}$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-left-coset-action-and-its-kernel",
   "source_section": "Statement",
   "quote": "Let $H\\le G$. Left multiplication defines a transitive action of $G$ on the\ncoset set $G/H$ by\n\n$$g\\cdot(aH):=(ga)H.$$\n\nThe stabilizer of the point $H$ is $H$. The corresponding homomorphism\n$\\rho:G\\to\\operatorname{Sym}(G/H)$ has\n\n$$\\ker\\rho=\\operatorname{Core}_G(H).$$",
   "uses": [
    "1.1",
    "3.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-image-subgroup-and-kernel-normal",
   "source_section": "Statement",
   "quote": "The image of a group homomorphism is a subgroup and its kernel is a normal subgroup.\n\nFor every group homomorphism $f:G\\to H$, one has\n$\\operatorname{im}f\\le H$ and $\\ker f\\mathrel{\\trianglelefteq}G$.",
   "uses": [
    "1.1",
    "3.1"
   ]
  },
  {
   "fact": "L6",
   "source": "thm-first-isomorphism-theorem-groups",
   "source_section": "Statement",
   "quote": "First isomorphism theorem for groups: $G/\\ker f\\cong\\operatorname{im}f$.\n\nFor every homomorphism $f:G\\to H$, the rule\n$g\\ker f\\mapsto f(g)$ is an isomorphism from $G/\\ker f$ onto\n$\\operatorname{im}f$.",
   "uses": [
    "1.1",
    "3.1"
   ]
  },
  {
   "fact": "L7",
   "source": "cor-order-of-a-quotient-group",
   "source_section": "Statement",
   "quote": "Let $N\\mathrel{\\trianglelefteq}G$. If $[G:N]$ is finite, then the quotient group\n$G/N$ is finite and\n\n$$|G/N|=[G:N].$$\n\nIn particular, if $G$ is finite, then\n\n$$|G/N|=\\frac{|G|}{|N|}.$$",
   "uses": [
    "1.1",
    "3.1"
   ]
  },
  {
   "fact": "L8",
   "source": "thm-classification-of-groups-of-order-pq",
   "source_section": "Statement",
   "quote": "Let $p<q$ be primes.\n\n- If $p\\nmid(q-1)$, every group of order $pq$ is cyclic.\n- If $p\\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\\rtimes C_p$.",
   "uses": [
    "1.1",
    "4.1"
   ]
  },
  {
   "fact": "L9",
   "source": "cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal",
   "source_section": "Statement",
   "quote": "If $N\\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\\trianglelefteq G$. See [[cor-sylow-subgroup-normal-iff-unique]].",
   "uses": [
    "1.1",
    "4.1"
   ]
  },
  {
   "fact": "L10",
   "source": "def-simple-group",
   "source_section": "Definition",
   "quote": "A group $G$ is **simple** if $G\\ne\\{1\\}$ and its only normal subgroups are\n$\\{1\\}$ and $G$, where normality is as in [[def-normal-subgroup]].",
   "uses": [
    "1.1",
    "4.1"
   ]
  },
  {
   "fact": "L11",
   "source": "thm-lagrange",
   "source_section": "Statement",
   "quote": "Let $G$ be a finite group and $H\\le G$. Then\n\n$$|G|=[G:H]\\,|H|.$$\n\nConsequently, under the canonical embedding $\\iota:\\mathbb N\\to\\mathbb Z$,\n$\\iota(|H|)$ divides $\\iota(|G|)$.",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L12",
   "source": "thm-number-of-bijections-of-a-finite-set",
   "source_section": "Statement",
   "quote": "Let $A$ be a finite set with $n := \\lvert A\\rvert$ and write\n\n$$\\operatorname{Bij}(A) := \\{\\, f : A \\to A \\ :\\ f \\text{ is a bijection} \\,\\}.$$\n\nThen $\\operatorname{Bij}(A)$ is finite and $\\lvert\\operatorname{Bij}(A)\\rvert = n!$\n([[def-factorial-and-falling-factorial]]).\n\nMore generally, for finite sets $X$ and $Y$ write $\\operatorname{Bij}(X,Y)$ for\nthe set of bijections $X \\to Y$. If $\\lvert X\\rvert = \\lvert Y\\rvert = n$ then\n$\\operatorname{Bij}(X,Y)$ is finite with $n!$ elements, and if\n$\\lvert X\\rvert \\ne \\lvert Y\\rvert$ then $\\operatorname{Bij}(X,Y) = \\varnothing$.",
   "uses": [
    "3.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The nonunique counts $n_5=21$ and $n_7=15$ would already contribute $84+90$ distinct nonidentity elements, so at least one of the two Sylow subgroups is normal.",
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
    "L9",
    "L10",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Let $P$ be the normal Sylow subgroup supplied by step 1.1 and let $Q$ be a Sylow subgroup for the other prime. By [L3], $H=PQ$ is a subgroup. Its multiplication map $P\\times Q\\to PQ$ has fibres indexed by $P\\cap Q=1$, so $|H|=|P||Q|=35$.",
   "step": "2.1",
   "inputs": [
    "L3",
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "The action on the three left cosets has kernel $K\\subseteq H$. By [L6], $G/K$ is isomorphic to a subgroup of the symmetric group on three points, so [L11] and [L12] give $[G:K]\\mid6$. Also [L7] and [L11] give $[G:K]\\mid105$, while $K\\le H$ gives $3=[G:H]\\mid[G:K]$. Hence $[G:K]=3=[G:H]$, so $K=H$ and $H\\trianglelefteq G$.",
   "step": "3.1",
   "inputs": [
    "L4",
    "L5",
    "L6",
    "L7",
    "L11",
    "L12",
    "step 2.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "The order-$pq$ classification [L8] makes $H$ cyclic, and its Sylow $5$- and $7$-subgroups are normal in $H$ and therefore normal in $G$ by [L9]. Either is a nontrivial proper normal subgroup of $G$, so [L10] also shows that $G$ is not simple.",
   "step": "4.1",
   "inputs": [
    "L8",
    "L9",
    "L10",
    "step 3.1",
    "given"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "not_applicable",
   "reason": "Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple: the claim “Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple: the claim “Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple: the claim “Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "not_applicable",
   "reason": "Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple: the claim “Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple.” does not admit coincident endpoints, an empty choice, or a collapsed structure distinct from its general case."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple: the claim “Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple: the claim “Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple: the claim “Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple: the claim “Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: cor-classification-of-groups-of-order-one-hundred-five

```markdown
---
id: cor-classification-of-groups-of-order-one-hundred-five
kind: corollary
title: "There are exactly two isomorphism classes of groups of order $105$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup, thm-sylow-first-theorem, lem-product-with-normal-subgroup, cor-prime-order-group-is-cyclic, thm-conjugation-is-an-automorphism, thm-automorphisms-form-a-group, thm-image-subgroup-and-kernel-normal, thm-automorphisms-of-a-finite-cyclic-group, cor-totient-at-one-and-at-a-prime, thm-lagrange, thm-internal-external-semidirect-product-equivalence, prop-semidirect-product-is-direct-iff-action-is-trivial, thm-classification-of-groups-of-order-pq, thm-order-of-element-in-direct-product, thm-classification-of-cyclic-groups]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

Up to isomorphism, the groups of order $105$ are the cyclic group $C_{105}$ and the direct product $C_5\times(C_7\rtimes C_3)$, where the action of $C_3$ on $C_7$ is nontrivial. In particular, there are exactly two isomorphism classes. See [[thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple. ([[thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup]]).

[L2] Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup (def-sylow-p-subgroup). ([[thm-sylow-first-theorem]]).

[L3] If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$. Here $HN:=\{hn:h\in H,\ n\in N\}$. ([[lem-product-with-normal-subgroup]]).

[L4] Let $G$ be a finite group such that the positive integer $|G|$ is prime. Then every $g\ne e$ has order $|G|$, satisfies $\langle g\rangle=G$, and hence generates $G$. In particular, $G$ is cyclic. ([[cor-prime-order-group-is-cyclic]]).

[L5] Conjugation $x\mapsto gxg^{-1}$ is an automorphism. For each $g\in G$, the map $c_g:G\to G$, $c_g(x)=gxg^{-1}$, is an automorphism. ([[thm-conjugation-is-an-automorphism]]).

[L6] The automorphisms of a group form a group under composition. ([[thm-automorphisms-form-a-group]]).

[L7] The image of a group homomorphism is a subgroup and its kernel is a normal subgroup. For every group homomorphism $f:G\to H$, one has $\operatorname{im}f\le H$ and $\ker f\mathrel{\trianglelefteq}G$. ([[thm-image-subgroup-and-kernel-normal]]).

[L8] For every $n\ge1$, $$\operatorname{Aut}(C_n)\cong(\mathbb Z/n)^\times.$$ If $C_n=\langle g\rangle$, the unit class $[a]$ corresponds to the automorphism $g\mapsto g^a$. ([[thm-automorphisms-of-a-finite-cyclic-group]]).

[L9] Euler's totient satisfies $\varphi(1)=1$. If $p$ is prime (def-prime), then $$\varphi(p)=p-1.$$. ([[cor-totient-at-one-and-at-a-prime]]).

[L10] Let $G$ be a finite group and $H\le G$. Then $$|G|=[G:H]\,|H|.$$ Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$, $|H|$ divides $|G|$. ([[thm-lagrange]]).

[L11] Let $N,H\le G$. The conditions $$N\trianglelefteq G,\qquad G=NH,\qquad N\cap H=\{1\}$$ hold if and only if both of the following hold: conjugation $\alpha_h(n)=hnh^{-1}$ restricts to an action $\alpha:H\to\operatorname{Aut}(N)$, and the resulting map. ([[thm-internal-external-semidirect-product-equivalence]]).

[L12] The canonical factors of $N\rtimes_\alpha H$ form an internal direct product if and only if $\alpha_h=\operatorname{id}_N$ for every $h\in H$. In that case $N\rtimes_\alpha H$ is the external direct product $N\times H$. ([[prop-semidirect-product-is-direct-iff-action-is-trivial]]).

[L13] Let $p<q$ be primes. - If $p\nmid(q-1)$, every group of order $pq$ is cyclic. - If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$. ([[thm-classification-of-groups-of-order-pq]]).

[L14] If $g\in G$ and $h\in H$ have finite orders $m,n\ge1$, then in the external direct product $$\operatorname{ord}(g,h)=\operatorname{lcm}(m,n).$$ ([[thm-order-of-element-in-direct-product]]).

[L15] If $G=\langle g\rangle$ is cyclic, then exactly one of the following applies: - if $g$ has infinite order, $G\cong(\mathbb Z,+)$; - if $g$ has finite order $n$, necessarily $n\ge1$, then $G\cong(\mathbb Z/n,+)$. ([[thm-classification-of-cyclic-groups]]).

## Proof

**Proof technique:** direct.

1.1 Let $N_5,N_7$ be the normal Sylow subgroups and let $P$ be Sylow of order $3$. Since $N_7$ is normal, $H=N_7P$ is a subgroup of order $21$; similarly $G=N_5H$ and $N_5\cap H=1$. [L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11, L12, L13, L14, L15, given, algebra]

2.1 Conjugation gives a homomorphism $H\to\operatorname{Aut}(N_5)$. Its image order divides $|H|=21$ and $|\operatorname{Aut}(C_5)|=4$, so the image is trivial. [step 1.1, given, algebra]

3.1 Thus $H$ centralizes $N_5$, and the internal product is $G\cong C_5\times H$. [step 1.1, step 2.1, given, algebra]

4.1 The order-$pq$ classification makes $H$ either $C_{21}$ or the unique nonabelian $C_7\rtimes C_3$. In the first case, generators of $C_5$ and $C_{21}$ combine to an element of order $\operatorname{lcm}(5,21)=105$, so $C_5\times H\cong C_{105}$. [step 3.1, given, algebra]

5.1 The two resulting groups are distinguished by abelianness, and exhaustiveness of the order-$21$ classification leaves no third case. This proves the stated claim. [step 3.1, step 4.1, given, algebra] ∎

```

### Recorded proof contract for cor-classification-of-groups-of-order-one-hundred-five

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-groups-of-order-one-hundred-five-have-a-normal-sylow-subgroup",
   "source_section": "Statement",
   "quote": "Every group of order $105$ has normal Sylow $5$- and $7$-subgroups and is not simple. See [[thm-sylow-third-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-sylow-first-theorem",
   "source_section": "Statement",
   "quote": "Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup ([[def-sylow-p-subgroup]]). See [[def-sylow-p-subgroup]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "lem-product-with-normal-subgroup",
   "source_section": "Statement",
   "quote": "If $H\\le G$ and $N\\mathrel{\\trianglelefteq}G$, then $HN$ is a subgroup and $H\\cap N\\mathrel{\\trianglelefteq}H$.\n\nHere $HN:=\\{hn:h\\in H,\\ n\\in N\\}$.",
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
  },
  {
   "fact": "L5",
   "source": "thm-conjugation-is-an-automorphism",
   "source_section": "Statement",
   "quote": "Conjugation $x\\mapsto gxg^{-1}$ is an automorphism.\n\nFor each $g\\in G$, the map $c_g:G\\to G$, $c_g(x)=gxg^{-1}$, is an\nautomorphism.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L6",
   "source": "thm-automorphisms-form-a-group",
   "source_section": "Statement",
   "quote": "The automorphisms of a group form a group under composition.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L7",
   "source": "thm-image-subgroup-and-kernel-normal",
   "source_section": "Statement",
   "quote": "The image of a group homomorphism is a subgroup and its kernel is a normal subgroup.\n\nFor every group homomorphism $f:G\\to H$, one has\n$\\operatorname{im}f\\le H$ and $\\ker f\\mathrel{\\trianglelefteq}G$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L8",
   "source": "thm-automorphisms-of-a-finite-cyclic-group",
   "source_section": "Statement",
   "quote": "For every $n\\ge1$,\n\n$$\\operatorname{Aut}(C_n)\\cong(\\mathbb Z/n)^\\times.$$\n\nIf $C_n=\\langle g\\rangle$, the unit class $[a]$ corresponds to the automorphism $g\\mapsto g^a$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L9",
   "source": "cor-totient-at-one-and-at-a-prime",
   "source_section": "Statement",
   "quote": "Euler's totient satisfies $\\varphi(1)=1$. If $p$ is prime\n([[def-prime]]), then\n\n$$\\varphi(p)=p-1.$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L10",
   "source": "thm-lagrange",
   "source_section": "Statement",
   "quote": "Let $G$ be a finite group and $H\\le G$. Then\n\n$$|G|=[G:H]\\,|H|.$$\n\nConsequently, under the canonical embedding $\\iota:\\mathbb N\\to\\mathbb Z$,\n$\\iota(|H|)$ divides $\\iota(|G|)$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L11",
   "source": "thm-internal-external-semidirect-product-equivalence",
   "source_section": "Statement",
   "quote": "Let $N,H\\le G$. The conditions\n\n$$N\\trianglelefteq G,\\qquad G=NH,\\qquad N\\cap H=\\{1\\}$$\n\nhold if and only if both of the following hold: conjugation $\\alpha_h(n)=hnh^{-1}$ restricts to an action $\\alpha:H\\to\\operatorname{Aut}(N)$, and the resulting map\n\n$$\\Phi:N\\rtimes_\\alpha H\\longrightarrow G,\\qquad (n,h)\\longmapsto nh$$\n\nis an isomorphism carrying the can",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L12",
   "source": "prop-semidirect-product-is-direct-iff-action-is-trivial",
   "source_section": "Statement",
   "quote": "The canonical factors of $N\\rtimes_\\alpha H$ form an internal direct product if and only if $\\alpha_h=\\operatorname{id}_N$ for every $h\\in H$. In that case $N\\rtimes_\\alpha H$ is the external direct product $N\\times H$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L13",
   "source": "thm-classification-of-groups-of-order-pq",
   "source_section": "Statement",
   "quote": "Let $p<q$ be primes.\n\n- If $p\\nmid(q-1)$, every group of order $pq$ is cyclic.\n- If $p\\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\\rtimes C_p$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L14",
   "source": "thm-order-of-element-in-direct-product",
   "source_section": "Statement",
   "quote": "Let $\\iota:\\mathbb N\\to\\mathbb Z$ be the canonical embedding. If $g\\in G$\nand $h\\in H$ have finite orders $m,n\\ge1$, then in the external direct product\n\n$$\\iota(\\operatorname{ord}(g,h))=\\operatorname{lcm}(\\iota(m),\\iota(n)).$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L15",
   "source": "thm-classification-of-cyclic-groups",
   "source_section": "Statement",
   "quote": "If $G=\\langle g\\rangle$ is cyclic, then exactly one of the following applies:\n\n- if $g$ has infinite order, $G\\cong(\\mathbb Z,+)$;\n- if $g$ has finite order $n$, necessarily $n\\ge1$, then $G\\cong(\\mathbb Z/n,+)$.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Let $N_5,N_7$ be the normal Sylow subgroups and let $P$ be Sylow of order $3$. Since $N_7$ is normal, $H=N_7P$ is a subgroup of order $21$; similarly $G=N_5H$ and $N_5\\cap H=1$.",
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
    "L9",
    "L10",
    "L11",
    "L12",
    "L13",
    "L14",
    "L15",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "Conjugation gives a homomorphism $H\\to\\operatorname{Aut}(N_5)$. Its image order divides $|H|=21$ and $|\\operatorname{Aut}(C_5)|=4$, so the image is trivial.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Thus $H$ centralizes $N_5$, and the internal product is $G\\cong C_5\\times H$.",
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
   "claim": "The order-$pq$ classification makes $H$ either $C_{21}$ or the unique nonabelian $C_7\\rtimes C_3$. In the first case, generators of $C_5$ and $C_{21}$ combine to an element of order $\\operatorname{lcm}(5,21)=105$, so $C_5\\times H\\cong C_{105}$.",
   "step": "4.1",
   "inputs": [
    "step 3.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-5-1",
   "claim": "The two resulting groups are distinguished by abelianness, and exhaustiveness of the order-$21$ classification leaves no third case. This proves the stated claim.",
   "step": "5.1",
   "inputs": [
    "step 3.1",
    "step 4.1",
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
   "reason": "There are exactly two isomorphism classes of groups of order $105$: the claim “Up to isomorphism, the groups of order $105$ are the cyclic group $C_{105}$ and the direct product $C_5\\times(C_7\\rtimes C_3)$, where the action of $C_3$ on $C_7$ is nontrivial. In particular, there are exactly” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "There are exactly two isomorphism classes of groups of order $105$: the zero or trivial specialization for “Up to isomorphism, the groups of order $105$ are the cyclic group $C_{105}$ and the direct product $C_5\\times(C_7\\rtimes C_3)$, where the action of $C_3$ on $C_7$ is nontrivial. In particular, there are exactly” is resolved in step 2.1: “Conjugation gives a homomorphism $H\\to\\operatorname{Aut}(N_5)$. Its image order divides $|H|=21$ and $|\\operatorname{Aut}(C_5)|=4$, so the image is trivial.”."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "There are exactly two isomorphism classes of groups of order $105$: the claim “Up to isomorphism, the groups of order $105$ are the cyclic group $C_{105}$ and the direct product $C_5\\times(C_7\\rtimes C_3)$, where the action of $C_3$ on $C_7$ is nontrivial. In particular, there are exactly” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "There are exactly two isomorphism classes of groups of order $105$: the collapsed or coincident-input case admitted by the hypotheses for “Up to isomorphism, the groups of order $105$ are the cyclic group $C_{105}$ and the direct product $C_5\\times(C_7\\rtimes C_3)$, where the action of $C_3$ on $C_7$ is nontrivial. In particular, there are exactly” is resolved in step 2.1: “Conjugation gives a homomorphism $H\\to\\operatorname{Aut}(N_5)$. Its image order divides $|H|=21$ and $|\\operatorname{Aut}(C_5)|=4$, so the image is trivial.”."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "There are exactly two isomorphism classes of groups of order $105$: the claim “Up to isomorphism, the groups of order $105$ are the cyclic group $C_{105}$ and the direct product $C_5\\times(C_7\\rtimes C_3)$, where the action of $C_3$ on $C_7$ is nontrivial. In particular, there are exactly” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "There are exactly two isomorphism classes of groups of order $105$: the claim “Up to isomorphism, the groups of order $105$ are the cyclic group $C_{105}$ and the direct product $C_5\\times(C_7\\rtimes C_3)$, where the action of $C_3$ on $C_7$ is nontrivial. In particular, there are exactly” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "There are exactly two isomorphism classes of groups of order $105$: the claim “Up to isomorphism, the groups of order $105$ are the cyclic group $C_{105}$ and the direct product $C_5\\times(C_7\\rtimes C_3)$, where the action of $C_3$ on $C_7$ is nontrivial. In particular, there are exactly” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "There are exactly two isomorphism classes of groups of order $105$: the claim “Up to isomorphism, the groups of order $105$ are the cyclic group $C_{105}$ and the direct product $C_5\\times(C_7\\rtimes C_3)$, where the action of $C_3$ on $C_7$ is nontrivial. In particular, there are exactly” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-groups-of-order-forty-five-are-abelian

```markdown
---
id: thm-groups-of-order-forty-five-are-abelian
kind: theorem
title: "Every group of order $45$ is abelian"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-third-theorem, cor-sylow-subgroup-normal-iff-unique, lem-distinct-normal-sylow-subgroups-commute, cor-groups-of-order-p-squared-are-abelian, thm-internal-direct-product-recognition]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

Every group of order $45$ is abelian. See [[thm-sylow-third-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$. ([[thm-sylow-third-theorem]]).

[L2] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

[L3] Normal Sylow subgroups for distinct primes centralize one another. ([[lem-distinct-normal-sylow-subgroups-commute]]).

[L4] If $p$ is prime and $G$ is a group of order $p^2$, then $G$ is abelian. ([[cor-groups-of-order-p-squared-are-abelian]]).

[L5] Let $N_0,\ldots,N_{r-1}\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\in G$ has a unique expression $g=n_0\cdots n_{r-1}$ with $n_i\in N_i$; and the multiplication map $\mu:\prod_{i<r}N_i\to G$ is an isomorphism. These statements include the empty family and the one-factor case. ([[thm-internal-direct-product-recognition]]).

## Proof

**Proof technique:** direct.

1.1 Sylow III forces both the order-nine and order-five Sylow subgroups to be unique. [L1, L2, L3, L4, L5, given, algebra]

2.1 They commute, their product is the whole group, and both factors are abelian, so the internal direct product is abelian. This proves the stated claim. [step 1.1, given, algebra] ∎

```

### Recorded proof contract for thm-groups-of-order-forty-five-are-abelian

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-sylow-third-theorem",
   "source_section": "Statement",
   "quote": "Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$$ See [[thm-sylow-second-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "cor-sylow-subgroup-normal-iff-unique",
   "source_section": "Statement",
   "quote": "A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. See [[thm-sylow-second-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "lem-distinct-normal-sylow-subgroups-commute",
   "source_section": "Statement",
   "quote": "Normal Sylow subgroups for distinct primes centralize one another. See [[def-sylow-p-subgroup]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "cor-groups-of-order-p-squared-are-abelian",
   "source_section": "Statement",
   "quote": "If $p$ is prime and $G$ is a group of order $p^2$, then $G$ is abelian.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-internal-direct-product-recognition",
   "source_section": "Statement",
   "quote": "Let $N_0,\\ldots,N_{r-1}\\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\\in G$ has a unique expression $g=n_0\\cdots n_{r-1}$ with $n_i\\in N_i$; and the multiplication map $\\mu:\\prod_{i<r}N_i\\to G$ is an isomorphism. These statements include the empty family and the one-factor case.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Sylow III forces both the order-nine and order-five Sylow subgroups to be unique.",
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
   "claim": "They commute, their product is the whole group, and both factors are abelian, so the internal direct product is abelian. This proves the stated claim.",
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
   "reason": "Every group of order $45$ is abelian: the claim “Every group of order $45$ is abelian.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "Every group of order $45$ is abelian: the claim “Every group of order $45$ is abelian.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "Every group of order $45$ is abelian: the claim “Every group of order $45$ is abelian.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "not_applicable",
   "reason": "Every group of order $45$ is abelian: the claim “Every group of order $45$ is abelian.” does not admit coincident endpoints, an empty choice, or a collapsed structure distinct from its general case."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "Every group of order $45$ is abelian: the claim “Every group of order $45$ is abelian.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Every group of order $45$ is abelian: the claim “Every group of order $45$ is abelian.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "Every group of order $45$ is abelian: the claim “Every group of order $45$ is abelian.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "Every group of order $45$ is abelian: the claim “Every group of order $45$ is abelian.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, in full

## DEPENDENCY: def-frattini-subgroup-of-a-finite-group

```markdown
---
id: def-frattini-subgroup-of-a-finite-group
kind: definition
title: "The Frattini subgroup $\\Phi(G)$ as the intersection of the maximal subgroups of a finite group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-maximal-subgroup-of-a-group]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory, Sections 1.4 and 2.3"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
pipeline_run: null
---

## Definition

For a finite group $G$, the **Frattini subgroup** is $$\Phi(G):=\bigcap\{M\le G:M\text{ is maximal proper}\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\Phi(1)=1$.

```

## DEPENDENCY: thm-frattini-argument

```markdown
---
id: thm-frattini-argument
kind: theorem
title: "Frattini argument: if $N\\trianglelefteq G$ and $P$ is Sylow in $N$, then $G=N N_G(P)$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-second-theorem, def-normalizer-of-a-subgroup, lem-product-with-normal-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory, Sections 1.4 and 2.3"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
pipeline_run: null
---

## Statement

If $N\trianglelefteq G$ is finite and $P$ is a Sylow $p$-subgroup of $N$, then $$G=N N_G(P).$$ See [[thm-sylow-second-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\le G$ be a $p$-subgroup. There is $g\in G$ with $H\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. ([[thm-sylow-second-theorem]]).

[L2] Let $H\le G$ be a subgroup (def-subgroup). The normalizer of $H$ in $G$ is $$N_G(H):=\{g\in G:gHg^{-1}=H\}.$$ Thus $g\in N_G(H)$ exactly when the conjugation automorphism $c_g$ preserves $H$ setwise (thm-conjugation-is-an-automorphism). The subgroup property is proved in lem-centralizers-and-normalizers-are-subgroups. ([[def-normalizer-of-a-subgroup]]).

[L3] If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$. Here $HN:=\{hn:h\in H,\ n\in N\}$. ([[lem-product-with-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 For each $g\in G$, normality makes $gPg^{-1}$ Sylow in $N$. [L1, L2, L3, given, algebra]

2.1 Sylow II inside $N$ supplies $n\in N$ conjugating it back to $P$, so $ng\in N_G(P)$ and $g\in N N_G(P)$. [step 1.1, given, algebra]

3.1 The reverse containment is immediate. This proves the stated claim. [step 2.1, given, algebra] ∎

```

## DEPENDENCY: lem-finite-nilpotence-via-normal-sylow-subgroups

```markdown
---
id: lem-finite-nilpotence-via-normal-sylow-subgroups
kind: lemma
title: "A finite group is nilpotent if and only if all Sylow subgroups are normal, if and only if it is their internal direct product"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-normalizer-condition-for-finite-nilpotent-groups, thm-normalizer-of-a-sylow-normalizer, thm-sylow-first-theorem, lem-distinct-normal-sylow-subgroups-commute, thm-internal-direct-product-recognition, thm-subgroups-quotients-and-finite-products-of-nilpotent-groups, thm-finite-p-groups-are-nilpotent]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; and $G$ is the internal direct product of its Sylow subgroups. See [[thm-normalizer-condition-for-finite-nilpotent-groups]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Every proper subgroup of a finite nilpotent group is properly contained in its normalizer. ([[thm-normalizer-condition-for-finite-nilpotent-groups]]).

[L2] Let $P$ be a Sylow $p$-subgroup of a finite group $G$. If $N_G(P)\le H\le G$, then $N_G(H)=H$. In particular, $N_G(N_G(P))=N_G(P)$. ([[thm-normalizer-of-a-sylow-normalizer]]).

[L3] Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup (def-sylow-p-subgroup). ([[thm-sylow-first-theorem]]).

[L4] Normal Sylow subgroups for distinct primes centralize one another. ([[lem-distinct-normal-sylow-subgroups-commute]]).

[L5] Let $N_0,\ldots,N_{r-1}\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\in G$ has a unique expression $g=n_0\cdots n_{r-1}$ with $n_i\in N_i$; and the multiplication map $\mu:\prod_{i<r}N_i\to G$ is an isomorphism. These statements include the empty family and the one-factor case. ([[thm-internal-direct-product-recognition]]).

[L6] Every subgroup and every quotient of a nilpotent group is nilpotent. Every finite direct product of nilpotent groups is nilpotent; the class of a subgroup or quotient is at most the class of the original group, and the class of a nonempty finite product is at most the maximum of the factor classes. The empty product is the trivial group of class zero. ([[thm-subgroups-quotients-and-finite-products-of-nilpotent-groups]]).

[L7] Every finite $p$-group is nilpotent. The trivial group is included and has nilpotency class zero. ([[thm-finite-p-groups-are-nilpotent]]).

## Proof

**Proof technique:** direct.

1.1 If $G$ is nilpotent and $P$ is Sylow, self-normalization of $N_G(P)$ contradicts the normalizer condition unless $N_G(P)=G$. [L1, L2, L3, L4, L5, L6, L7, given, algebra]

2.1 Normal Sylow subgroups for distinct primes commute and have trivial intersections; their product has order $|G|$, so it is the internal direct product. [step 1.1, given, algebra]

3.1 Conversely each factor is a finite $p$-group and hence nilpotent, and a finite direct product of nilpotent groups is nilpotent. [step 2.1, given, algebra]

4.1 The two degenerate cases are admitted by [L5] and hold. For $G=1$ the family of Sylow subgroups is empty, the empty internal direct product is the trivial group, and $G$ is nilpotent of class zero by [L7]. If $|G|$ is a power of a single prime, the family has one member, namely $G$ itself, the one-factor internal direct product is $G$, and [L7] again makes $G$ nilpotent. This proves the stated claim. [L5, L7, step 3.1, given, algebra] ∎

```

## DEPENDENCY: thm-correspondence-theorem-groups

```markdown
---
id: thm-correspondence-theorem-groups
kind: theorem
title: 'Correspondence theorem: subgroups of $G/N$ correspond to subgroups of $G$ containing $N$, with normality preserved'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-canonical-quotient-map, def-kernel-and-image-of-group-homomorphism, thm-image-subgroup-and-kernel-normal, lem-subgroup-criterion, thm-normal-subgroup-characterisations, def-quotient-group]
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

Correspondence theorem: subgroups of $G/N$ correspond to subgroups of $G$ containing $N$, with normality preserved.

For $N\mathrel{\trianglelefteq}G$, the maps $H\mapsto H/N$ and
$K\mapsto\pi^{-1}(K)$ are inverse inclusion-preserving bijections between
subgroups $H$ with $N\le H\le G$ and subgroups $K\le G/N$; they preserve
normality.

## Facts & Assumptions

**Given:** A normal subgroup $N\mathrel{\trianglelefteq}G$ and the quotient map $\pi:G\to G/N$.

[L1] $\pi$ is surjective with kernel $N$ ([[prop-canonical-quotient-map]]).

[L2] Kernels and images are defined by inverse images and values ([[def-kernel-and-image-of-group-homomorphism]]).

[L3] Images are subgroups and kernels are normal ([[thm-image-subgroup-and-kernel-normal]]).

[L4] The subgroup criterion is closure under $xy^{-1}$ ([[lem-subgroup-criterion]]).

[L5] Normality has the conjugation and coset characterisations ([[thm-normal-subgroup-characterisations]]).

[L6] $G/N$ is the quotient group of cosets ([[def-quotient-group]]).

## Proof

**Proof technique:** direct.

1.1 For $N\le H\le G$, $H/N=\pi[H]$ is a subgroup, while $\pi^{-1}(K)$ is a subgroup containing $\ker\pi=N$. [L1, L2, L3, L4, L5, L6, given, construct]

2.1 Surjectivity gives $\pi[\pi^{-1}(K)]=K$, and $N\le H$ gives $\pi^{-1}(\pi[H])=H$; both assignments therefore preserve inclusion and are inverse. [step 1.1, L1, L2, L3, L4, L5, L6, given, algebra]

3.1 The image and preimage calculation of step 2.1 also preserves normality. [step 2.1] ∎

```

## DEPENDENCY: thm-subgroups-quotients-and-finite-products-of-nilpotent-groups

```markdown
---
id: thm-subgroups-quotients-and-finite-products-of-nilpotent-groups
kind: theorem
title: "Subgroups, quotients, and finite direct products of nilpotent groups are nilpotent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-subgroup-commutator-and-lower-central-series, thm-upper-and-lower-central-characterizations-of-nilpotence, thm-external-direct-product-is-a-group]
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
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Statement

Every subgroup and every quotient of a nilpotent group is nilpotent. Every finite direct product of nilpotent groups is nilpotent; the class of a subgroup or quotient is at most the class of the original group, and the class of a nonempty finite product is at most the maximum of the factor classes. The empty product is the trivial group of class zero.

## Facts & Assumptions

**Given:** A nilpotent group $G$, a subgroup $H\le G$, a normal subgroup $N\trianglelefteq G$, and nilpotent groups $G_1,\ldots,G_t$.

[F1] $\gamma_1(K)=K$ and $\gamma_{r+1}(K)=[K,\gamma_r(K)]$ ([[def-subgroup-commutator-and-lower-central-series]]).

[L1] For every group $K$ and natural number $c$, the conditions that $K$ has a central series of length $c$, that $Z_c(K)=K$, and that $\gamma_{c+1}(K)=1$ are equivalent; the least such $c$ is the nilpotency class ([[thm-upper-and-lower-central-characterizations-of-nilpotence]]).

[L2] Direct products have coordinatewise multiplication and inverses ([[thm-external-direct-product-is-a-group]]).

## Proof

**Proof technique:** direct.

1.1 Induction on $r$ gives $\gamma_r(H)\le\gamma_r(G)$: it is clear at $r=1$, and subgroup commutators preserve an inclusion at the next term. [F1, algebra]

1.2 For the quotient map $q:G\to G/N$, induction on $r$ gives $q(\gamma_r(G))=\gamma_r(G/N)$, because $q$ is surjective and sends commutators onto commutators. [F1, algebra]

1.3 Coordinatewise commutators from [L2] give $\gamma_r(K\times L)=\gamma_r(K)\times\gamma_r(L)$ for every $r$, by induction. [F1, L2, algebra]

2.1 If $G$ has class $e\le c$, then [L1] gives $\gamma_{e+1}(G)=1$, and [F1] keeps every later lower-central term trivial, so $\gamma_{c+1}(G)=1$. Steps 1.1 and 1.2 make $\gamma_{c+1}(H)$ and $\gamma_{c+1}(G/N)$ trivial; [L1] then makes both nilpotent of class at most $c$. [step 1.1, step 1.2, F1, L1]

2.2 For a nonempty finite product, choose the maximum $c$ of the finitely many factor classes. Repeated use of step 1.3 makes its $(c+1)$-st lower-central term trivial, so [L1] gives class at most $c$; the empty product is the trivial group of class zero. [step 1.3, L1, choose]

3.1 These arguments establish all three closure assertions and their stated class bounds. [step 2.1, step 2.2] ∎

```

## DEPENDENCY: thm-sylow-second-theorem

```markdown
---
id: thm-sylow-second-theorem
kind: theorem
title: "Sylow II: every $p$-subgroup lies in a conjugate of any Sylow $p$-subgroup, and the Sylow $p$-subgroups form a single conjugacy class"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-first-theorem, thm-p-group-fixed-point-congruence, def-number-of-sylow-p-subgroups, def-normalizer-of-a-subgroup, thm-lagrange]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\le G$ be a $p$-subgroup. There is $g\in G$ with $H\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. See [[thm-sylow-first-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup (def-sylow-p-subgroup). ([[thm-sylow-first-theorem]]).

[L2] If a finite $p$-group $P$ acts on a finite set $X$, then $$|X|\equiv|X^P|\pmod p.$$. ([[thm-p-group-fixed-point-congruence]]).

[L3] For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups (def-sylow-p-subgroup). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; thm-sylow-first-theorem later shows it is nonzero. ([[def-number-of-sylow-p-subgroups]]).

[L4] Let $H\le G$ be a subgroup (def-subgroup). The normalizer of $H$ in $G$ is $$N_G(H):=\{g\in G:gHg^{-1}=H\}.$$ Thus $g\in N_G(H)$ exactly when the conjugation automorphism $c_g$ preserves $H$ setwise (thm-conjugation-is-an-automorphism). The subgroup property is proved in lem-centralizers-and-normalizers-are-subgroups. ([[def-normalizer-of-a-subgroup]]).

[L5] Let $G$ be a finite group and $H\le G$. Then $$|G|=[G:H]\,|H|.$$ Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$, $|H|$ divides $|G|$. ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 Let a finite $p$-subgroup $H$ act by left multiplication on $G/P$. [L1, L2, L3, L4, L5, given, algebra]

2.1 Its cardinality is prime to $p$, so the fixed-point congruence gives a fixed coset $gP$, and the fixed-coset condition is exactly $H\le gPg^{-1}$. [step 1.1, given, algebra]

3.1 Taking $H$ Sylow, Lagrange's theorem turns containment into equality; applying this to any Sylow $p$-subgroup $Q$ gives $Q=gPg^{-1}$. [step 2.1, given, algebra]

4.1 We treat the trivial $p$-subgroup and primes not dividing $|G|$. This proves the stated claim. [step 3.1, given, algebra] ∎

```

## DEPENDENCY: lem-characteristic-subgroup-of-a-normal-subgroup-is-normal

```markdown
---
id: lem-characteristic-subgroup-of-a-normal-subgroup-is-normal
kind: lemma
title: "If $K$ is characteristic in $N$ and $N$ is normal in $G$, then $K$ is normal in $G$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-characteristic-subgroup, def-normal-subgroup, thm-conjugation-is-an-automorphism]
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
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Statement

If $K$ is characteristic in $N$ and $N\trianglelefteq G$, then $K\trianglelefteq G$.

## Facts & Assumptions

**Given:** Subgroups $K\le N\le G$ with $K$ characteristic in $N$ and $N$ normal in $G$.

[L1] A characteristic subgroup is preserved by every automorphism of its ambient group ([[def-characteristic-subgroup]]).

[L2] A subgroup is normal exactly when conjugation by every ambient element preserves it ([[def-normal-subgroup]]).

[L3] Conjugation by a fixed group element is an automorphism ([[thm-conjugation-is-an-automorphism]]).

## Proof

**Proof technique:** direct.

1.1 Fix $g\in G$. Normality of $N$ and [L2] show that conjugation by $g$ maps $N$ to itself; by [L3], its restriction is an automorphism of $N$. [L2, L3]

2.1 Since $K$ is characteristic in $N$, [L1] gives $gKg^{-1}=K$. This holds for every $g\in G$, so $K\trianglelefteq G$ by [L2]. [step 1.1, L1, L2] ∎

```

## DEPENDENCY: thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup

```markdown
---
id: thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup
kind: theorem
title: "The Fitting subgroup is nilpotent and is the largest normal nilpotent subgroup of a finite group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-fitting-subgroup-of-a-finite-group, def-p-core-of-a-finite-group, lem-finite-nilpotence-via-normal-sylow-subgroups, thm-internal-direct-product-recognition, thm-sylow-second-theorem, lem-characteristic-subgroup-of-a-normal-subgroup-is-normal, thm-lagrange]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory, Sections 1.4 and 2.3"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
pipeline_run: null
---

## Statement

For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$. See [[def-fitting-subgroup-of-a-finite-group]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For a finite group $G$, the Fitting subgroup is $$F(G):=\prod_{p\mid |G|}O_p(G),$$ the product of its $p$-cores (def-p-core-of-a-finite-group). The factors are normal, so their finite product is a normal subgroup and does not depend on the order of multiplication. For the trivial group the product is empty and equals $1$. ([[def-fitting-subgroup-of-a-finite-group]]).

[L2] For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; and $G$ is the internal direct product of its Sylow subgroups. ([[lem-finite-nilpotence-via-normal-sylow-subgroups]]).

[L3] Let $N_0,\ldots,N_{r-1}\trianglelefteq G$. They form an internal direct product of $G$ if and only if every $g\in G$ has a unique expression $g=n_0\cdots n_{r-1}$ with $n_i\in N_i$, equivalently the multiplication map $\prod_{i<r}N_i\to G$ is an isomorphism. ([[thm-internal-direct-product-recognition]]).

[L4] If $K$ is characteristic in $N$ and $N\trianglelefteq G$, then $K\trianglelefteq G$. ([[lem-characteristic-subgroup-of-a-normal-subgroup-is-normal]]).

[L5] The $p$-core $O_p(G)$ is the unique largest normal $p$-subgroup of the finite group $G$. ([[def-p-core-of-a-finite-group]]).

[L6] Every $p$-subgroup of a finite group is contained in a Sylow $p$-subgroup, and all Sylow $p$-subgroups are conjugate. ([[thm-sylow-second-theorem]]).

[L7] The order of a subgroup of a finite group divides the order of the group. ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 For distinct primes $p$ and $q$, normality puts every commutator of an element of $O_p(G)$ with an element of $O_q(G)$ in $O_p(G)\cap O_q(G)$. By [L7], the order of this intersection divides powers of both $p$ and $q$, so the intersection is trivial and the two $p$-cores centralize one another. If a product $\prod_p x_p$ with $x_p\in O_p(G)$ equals $1$, then for each $p$ the element $x_p$ lies both in the $p$-group $O_p(G)$ and in the commuting product of the other prime-power groups; its order divides two coprime numbers and is therefore $1$. Thus product expressions are unique, so [L3] identifies $F(G)$ with the internal direct product of the $p$-cores. The direct-product order shows that $O_p(G)$ is the Sylow $p$-subgroup of $F(G)$; [L2] makes $F(G)$ nilpotent, and [L1] gives its normality in $G$. [L1, L2, L3, L5, L7, given, algebra]

2.1 If $N\trianglelefteq G$ is nilpotent, [L2] makes each Sylow subgroup normal in $N$, and conjugacy [L6] makes it unique. Automorphisms preserve orders, so this unique Sylow subgroup is characteristic in $N$; [L4] makes it normal in $G$, and the maximality clause [L5] puts it in the corresponding $p$-core. [L2, L4, L5, L6, step 1.1, given, algebra]

3.1 By [L2], $N$ is the product of its Sylow subgroups, and step 2.1 puts every factor in the corresponding $p$-core. Hence $N\le F(G)$. [L1, L2, step 2.1, given]

4.1 For $G=1$ the family of $p$-cores is empty and $F(G)=1$, which is nilpotent and contains every normal nilpotent subgroup. This proves the stated claim. [L1, step 1.1, step 3.1, given, algebra] ∎

```

## DEPENDENCY: cor-frattini-subgroup-is-contained-in-the-fitting-subgroup

```markdown
---
id: cor-frattini-subgroup-is-contained-in-the-fitting-subgroup
kind: corollary
title: "The Frattini subgroup is contained in the Fitting subgroup"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-frattini-subgroup-is-nilpotent, thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory, Sections 1.4 and 2.3"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
pipeline_run: null
---

## Statement

For every finite group $G$, $\Phi(G)\le F(G)$. See [[thm-frattini-subgroup-is-nilpotent]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] The Frattini subgroup of every finite group is nilpotent. ([[thm-frattini-subgroup-is-nilpotent]]).

[L2] For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$. ([[thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 The Frattini subgroup is characteristic, hence normal, and is nilpotent; maximality of the Fitting subgroup gives the inclusion. [L1, L2, given, algebra]

2.1 The preceding argument gives the conclusion under every hypothesis of the Statement. This proves the stated claim. [step 1.1, given, algebra] ∎

```

## DEPENDENCY: def-group-isomorphism-and-automorphism

```markdown
---
id: def-group-isomorphism-and-automorphism
kind: definition
title: 'Group isomorphisms, automorphisms and the set $\operatorname{Aut}(G)$'
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
    - title: "Judson, Abstract Algebra: Theory and Applications, Isomorphism Theorems"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%3A_Theory_and_Applications_%28Judson%29/11%3A_Homomorphisms/11.02%3A_The_Isomorphism_Theorms"
pipeline_run: null
---

## Definition

Group isomorphisms, automorphisms and the set $\operatorname{Aut}(G)$.

An **isomorphism** $f:G\to H$ is a bijective group homomorphism
([[def-group-homomorphism]], [[def-injection-surjection-bijection]]).  When
$G=H$, it is an **automorphism** of $G$.  Write

$$\operatorname{Aut}(G):=\{f:G\to G:f\text{ is an automorphism}\}.$$

```

## DEPENDENCY: def-external-direct-product-of-groups

```markdown
---
id: def-external-direct-product-of-groups
kind: definition
title: 'The external direct product $G\times H$ with componentwise multiplication'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group]
justified_by: [thm-external-direct-product-is-a-group]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Sharifi, Abstract Algebra, direct products"
      url: "https://math.ucla.edu/~sharifi/algebra.pdf"
pipeline_run: null
---

## Definition

Let $G$ and $H$ be groups. Their **external direct product** has underlying set

$$G\times H:=\{(g,h):g\in G,\ h\in H\}$$

and componentwise operation

$$(g,h)(g',h') := (gg',hh').$$

The fact that this operation makes $G\times H$ a group, with the indicated
identity and inverses, is proved in [[thm-external-direct-product-is-a-group]].
Until that result is used, this definition introduces only the set and its
componentwise binary operation.

```

## DEPENDENCY: thm-external-direct-product-is-a-group

```markdown
---
id: thm-external-direct-product-is-a-group
kind: theorem
title: '$G\times H$ is a group with identity $(e_G,e_H)$, coordinatewise inverses, and homomorphic coordinate projections'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-external-direct-product-of-groups, def-group, def-group-homomorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Sharifi, Abstract Algebra, direct products"
      url: "https://math.ucla.edu/~sharifi/algebra.pdf"
pipeline_run: null
---

## Statement

For groups $G$ and $H$, the componentwise operation of
[[def-external-direct-product-of-groups]] makes $G\times H$ a group. Its
identity is $(e_G,e_H)$, and

$$(g,h)^{-1}=(g^{-1},h^{-1}).$$

Moreover the coordinate maps $\pi_G(g,h)=g$ and $\pi_H(g,h)=h$ are group
homomorphisms.

## Facts & Assumptions

**Given:** Groups $G,H$ with identities $e_G,e_H$.

[L1] $G\times H$ has the componentwise operation
$(g,h)(g',h')=(gg',hh')$ ([[def-external-direct-product-of-groups]]).

[L2] A group operation is associative, has a two-sided identity, and gives every
element a two-sided inverse ([[def-group]]).

[L3] A map between groups is a group homomorphism exactly when it preserves products
([[def-group-homomorphism]]).

## Proof

**Proof technique:** direct.

1.1 For $(g,h),(g',h'),(g'',h'')\in G\times H$, associativity in each factor gives $((g,h)(g',h'))(g'',h'')=(gg'g'',hh'h'')=(g,h)((g',h')(g'',h''))$; thus the componentwise operation is associative. [L1, L2, given, algebra]

1.2 For every $(g,h)\in G\times H$, $(e_G,e_H)(g,h)=(g,h)=(g,h)(e_G,e_H)$; thus $(e_G,e_H)$ is a two-sided identity. [L1, L2, given, algebra]

1.3 For every $(g,h)\in G\times H$, $(g,h)(g^{-1},h^{-1})=(e_G,e_H)=(g^{-1},h^{-1})(g,h)$; so $(g^{-1},h^{-1})$ is its inverse. [L1, L2, given, algebra]

2.1 Steps 1.1–1.3 verify the group axioms for $G\times H$. [step 1.1, step 1.2, step 1.3, L2]

3.1 For pairs $(g,h),(g',h')$, $\pi_G((g,h)(g',h'))=gg'=\pi_G(g,h)\pi_G(g',h')$; the same coordinatewise calculation holds for $\pi_H$, so both projections are homomorphisms from the group in step 2.1. [step 2.1, L1, L3, given, algebra]

4.1 The stated identity, inverse formula, and coordinate homomorphisms follow. [step 2.1, step 3.1] ∎

```

## DEPENDENCY: thm-z-mod-p-is-a-field

```markdown
---
id: thm-z-mod-p-is-a-field
kind: theorem
title: "For every prime $p$, the two operations on $\\mathbb{Z}/p$ make it a field"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-integers-modulo-n-basic-algebra, thm-unit-criterion-modulo-n, lem-prime-not-dividing-is-coprime, def-prime, def-field, def-integers-modulo-n, def-congruence-modulo-an-integer]
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
    - title: "MIT 18.783 Lecture Notes 3"
      url: "https://math.mit.edu/classes/18.783/2022/LectureNotes3.pdf"
pipeline_run: null
---

## Statement

For every prime $p$, the operations of addition and multiplication on
$\mathbb Z/p$ make it a field ([[def-field]]).

## Facts & Assumptions

**Given:** A prime integer $p$.

[L1] Modular addition makes $\mathbb Z/p$ an abelian group, modular multiplication makes it a commutative monoid, and both distributive laws hold ([[thm-integers-modulo-n-basic-algebra]]).

[L2] A prime satisfies $p>1$, and if $p\nmid a$ then $\gcd(a,p)=1$ ([[def-prime]], [[lem-prime-not-dividing-is-coprime]]).

[L3] For positive modulus $p$, $[a]_p$ is invertible exactly when $\gcd(a,p)=1$ ([[thm-unit-criterion-modulo-n]]).

[L4] Equality $[a]_p=[b]_p$ is equivalent to $a\equiv b\pmod p$, which means $p\mid(a-b)$ ([[def-integers-modulo-n]], [[def-congruence-modulo-an-integer]]).

[L5] A field is a commutative ring with $0\ne1$ in which every nonzero element is multiplicatively invertible ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], all additive, multiplicative, identity, inverse, commutativity, associativity and distributive field axioms already hold except possibly $[0]_p\ne[1]_p$ and invertibility of nonzero classes. [L1, L5]

1.2 Since $p>1$, it does not divide $1$, so [L4] gives $[0]_p\ne[1]_p$. [L2, L4]

1.3 If $[a]_p\ne[0]_p$, then $p\nmid a$ by [L4]. Hence $\gcd(a,p)=1$ by [L2], and [L3] makes $[a]_p$ invertible. [L2, L3, L4]

2.1 Steps 1.1 through 1.3 verify every clause of [L5], so $\mathbb Z/p$ is a field. [step 1.1, step 1.2, step 1.3, L5] ∎

```

## DEPENDENCY: thm-standard-representatives-modulo-n

```markdown
---
id: thm-standard-representatives-modulo-n
kind: theorem
title: "For $n\\ge 1$, every class in $\\mathbb{Z}/n$ has one representative $r$ with $0\\le r<n$, so $\\lvert\\mathbb{Z}/n\\rvert=n$; while $\\mathbb{Z}/0$ is in bijection with $\\mathbb{Z}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-integers-modulo-n, thm-division-algorithm-in-z, def-finite-cardinality, def-injection-surjection-bijection, def-natural-numbers, lem-nat-embeds-int]
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
pipeline_run: null
---

## Statement

Let $n$ be a positive integer. Every class in $\mathbb Z/n$
([[def-integers-modulo-n]]) contains exactly one integer $r$ with
$0\le r<n$. Consequently the map

$$r\longmapsto[r]_n\qquad(0\le r<n)$$

is a bijection from the von Neumann natural $n$ to $\mathbb Z/n$, and
$|\mathbb Z/n|=n$. This includes $n=1$, where the only representative is $0$.
For $n=0$, the map $a\mapsto[a]_0$ is a bijection $\mathbb Z\to\mathbb Z/0$.

## Facts & Assumptions

**Given:** A positive integer $n$ and integers $a,b$; separately, the modulus $0$.

[L1] For $n>0$ there are unique integers $q,r$ with $a=qn+r$ and $0\le r<n$ ([[thm-division-algorithm-in-z]]).

[F1] $[u]_n=[v]_n$ exactly when $n\mid(u-v)$ ([[def-integers-modulo-n]]).

[L2] The natural-number embedding into $\mathbb Z$ is injective and has image the nonnegative integers; the von Neumann natural $n$ is the set of naturals $r<n$ ([[lem-nat-embeds-int]], [[def-natural-numbers]]).

[F2] A bijection transports finite cardinality, and $|n|=n$ ([[def-injection-surjection-bijection]], [[def-finite-cardinality]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], write $a=qn+r$ with $0\le r<n$. Then $n\mid(a-r)$, so $[a]_n=[r]_n$. [L1, F1]

1.2 If $0\le r,s<n$ and $[r]_n=[s]_n$, then $r-s=kn$ for some integer $k$, so $r=kn+s$. Both $r=0n+r$ and $r=kn+s$ express $r$ with a remainder in the range from $0$ to $n-1$, so uniqueness in [L1] gives $r=s$. [F1, L1]

1.3 At modulus $0$, [F1] says $[a]_0=[b]_0$ exactly when $0\mid(a-b)$, exactly when $a=b$. Hence $a\mapsto[a]_0$ is injective, and it is surjective by the definition of the quotient set. [F1, algebra]

2.1 Thus $r\mapsto[r]_n$ from the natural $n$ to $\mathbb Z/n$ is surjective by step 1.1 and injective by step 1.2, hence bijective. [step 1.1, step 1.2, L2, F2]

3.1 Since $n$ is finite with cardinality $n$, the bijection in step 2.1 gives $|\mathbb Z/n|=n$. At $n=1$ its domain is $1=\{0\}$, so there is one class. [step 2.1, F2, L2]

4.1 Steps 1.1 through 3.1 prove the positive-modulus statement, and step 1.3 proves the bijection at modulus $0$. [step 1.1, step 1.2, step 2.1, step 3.1, step 1.3] ∎

```

## DEPENDENCY: thm-product-rule

```markdown
---
id: thm-product-rule
kind: theorem
title: "The product rule: $\\lvert A \\times B\\rvert = \\lvert A\\rvert\\,\\lvert B\\rvert$, and $\\big\\lvert\\prod_{i<m} A_i\\big\\rvert = \\prod_{i<m}\\lvert A_i\\rvert$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-finite-cardinality, thm-sum-rule, def-sum-over-a-finite-index-set,
       def-nat-finite-sum-and-product, def-injection-surjection-bijection,
       def-equinumerous, def-nat-multiplication, lem-nat-mult-commutative,
       thm-induction-principle, lem-nat-order-is-membership, def-natural-numbers]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Rule of product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rule_of_product"
    - title: "Cartesian product (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cartesian_product"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

## Statement

1. If $A$ and $B$ are finite then $A \times B$ is finite and
   $\lvert A \times B\rvert = \lvert A\rvert \cdot \lvert B\rvert$
   ([[def-finite-cardinality]]).
2. Let $m \in \mathbb{N}$ and let $A_0, \dots, A_{m-1}$ be finite sets. Write
   $$\prod_{i<m} A_i := \{\, f : f \text{ is a function with domain } m \text{ and } f(i) \in A_i \text{ for every } i < m \,\}.$$
   Then $\prod_{i<m} A_i$ is finite and
   $\big\lvert\prod_{i<m} A_i\big\rvert = \prod_{i<m}\lvert A_i\rvert$, the
   right-hand product being the $\mathbb{N}$-valued one of
   [[def-nat-finite-sum-and-product]].

At $m = 0$ clause 2 reads $\big\lvert\prod_{i<0} A_i\big\rvert = 1$: there is
exactly one function with domain $\varnothing$, the empty function, and the empty
product is $1$. Both sides are computed, not stipulated.

```tikz
\begin{tikzpicture}[x=1.45cm,y=0.9cm]
  \node at (0,2.45) {$a_0$};
  \node at (1,2.45) {$a_1$};
  \node at (2,2.45) {$a_2$};
  \node at (-1.1,1.5) {$b_0$};
  \node at (-1.1,0.5) {$b_1$};
  \draw (-0.5,0) rectangle (2.5,2);
  \draw (0.5,0) -- (0.5,2);
  \draw (1.5,0) -- (1.5,2);
  \draw (-0.5,1) -- (2.5,1);
  \node at (0,1.5) {$(a_0,b_0)$};
  \node at (1,1.5) {$(a_1,b_0)$};
  \node at (2,1.5) {$(a_2,b_0)$};
  \node at (0,0.5) {$(a_0,b_1)$};
  \node at (1,0.5) {$(a_1,b_1)$};
  \node at (2,0.5) {$(a_2,b_1)$};
  \node at (1,-0.6) {$|A\times B|=3\cdot2=6$};
\end{tikzpicture}
```

## Facts & Assumptions

**Given:** Finite sets $A$, $B$ and a finite list $A_0, \dots, A_{m-1}$ of finite sets. Recall $\sigma(m) = m \cup \{m\}$ and $m = \{\,i : i < m\,\}$.

[L1] Induction ([[thm-induction-principle]]).

[L2] Cardinality ([[def-finite-cardinality]]): $\lvert A\rvert$ is the unique natural with $A \approx \lvert A\rvert$; $\lvert n\rvert = n$; and a bijection transports finiteness and cardinality.

[L3] The sum rule ([[thm-sum-rule]]): a family of pairwise disjoint finite sets indexed by a finite set has finite union, whose cardinality is the sum over that index set of the cardinalities.

[L4] Sums over a finite index set ([[def-sum-over-a-finite-index-set]]): $\sum_{i \in S} c = \lvert S\rvert \cdot c$ for a constant $c$.

[L5] Recursion clause for the $\mathbb{N}$-valued product ([[def-nat-finite-sum-and-product]]): $\prod_{i<0} c_i = 1$ and $\prod_{i<\sigma(m)} c_i = \big(\prod_{i<m} c_i\big)\cdot c_m$.

[L6] Maps ([[def-injection-surjection-bijection]], [[def-equinumerous]]): a map with a two-sided inverse is a bijection, and composites of bijections are bijections.

[L7] Arithmetic: multiplication of naturals is commutative ([[lem-nat-mult-commutative]], [[def-nat-multiplication]]); and $m = \{\,i : i<m\,\}$, $\sigma(m) = m \cup \{m\}$, $m \notin m$ ([[lem-nat-order-is-membership]], [[def-natural-numbers]]).

## Proof

**Proof technique:** induction.

1.1 The slices. For $b \in B$ put $A_b := A \times \{b\}$. The map $a \mapsto (a,b)$ is a bijection of $A$ onto $A_b$, with inverse the first projection, so $A_b$ is finite with $\lvert A_b\rvert = \lvert A\rvert$; and the family $(A_b)_{b \in B}$ is pairwise disjoint, since an element of $A_b$ has second coordinate $b$. Moreover $A \times B = \bigcup_{b \in B} A_b$. [L2, L6, construct]

1.2 Base case of clause 2, at $m = 0$. A function with domain $0 = \varnothing$ is the empty function and there is exactly one of them, so $\prod_{i<0} A_i = \{\varnothing\}$, which is finite with cardinality $1$ because $b \mapsto \varnothing$ is a bijection of $1 = \{0\}$ onto it; and $\prod_{i<0}\lvert A_i\rvert = 1$ by [L5]. [base, L2, L5, L6]

1.3 Inductive hypothesis for clause 2: fix $m$ and assume that for every finite list $A_0, \dots, A_{m-1}$ of finite sets the set $\prod_{i<m} A_i$ is finite with cardinality $\prod_{i<m}\lvert A_i\rvert$. [ih]

2.1 Clause 1. By step 1.1 and [L3], $A \times B$ is finite and $\lvert A \times B\rvert = \sum_{b \in B}\lvert A_b\rvert = \sum_{b \in B}\lvert A\rvert = \lvert B\rvert \cdot \lvert A\rvert = \lvert A\rvert \cdot \lvert B\rvert$, using [L4] for the constant summand and commutativity for the last step. [step 1.1, L3, L4, L7]

3.1 Inductive step for clause 2. Let $A_0, \dots, A_m$ be finite. Define $\Phi : \prod_{i<\sigma(m)} A_i \to \big(\prod_{i<m} A_i\big) \times A_m$ by $\Phi(f) = (f\restriction m,\ f(m))$, where $f \restriction m$ is the restriction of $f$ to $m$. Its inverse is $(g, a) \mapsto g \cup \{(m,a)\}$, a function with domain $\sigma(m) = m \cup \{m\}$ because $m \notin m$; the two composites are the identity, so $\Phi$ is a bijection. By the hypothesis of step 1.3 and clause 1, the codomain is finite with cardinality $\big(\prod_{i<m}\lvert A_i\rvert\big)\cdot\lvert A_m\rvert = \prod_{i<\sigma(m)}\lvert A_i\rvert$, and transport carries this to $\prod_{i<\sigma(m)} A_i$. [step 1.3, step 2.1, L2, L5, L6, L7]

4.1 By step 1.2, step 3.1 and induction, clause 2 holds for every $m \in \mathbb{N}$. [step 1.2, step 3.1, L1]

5.1 Clause 1 is step 2.1 and clause 2 is step 4.1. [step 2.1, step 4.1, discharge-induction] ∎

## Remarks

- **No arithmetic is needed for clause 1.** Slicing $A \times B$ over $B$ and
  applying the sum rule replaces the usual bijection
  $(p,q) \mapsto p\lvert B\rvert + q$, which would have to be proved bijective by
  division with remainder. Division with remainder lives later in the reading
  order, so the slicing argument is not merely shorter here, it is the one
  available.

- **The empty cases are computed.** With $A = \varnothing$ and $B$ arbitrary,
  clause 1 reads $\lvert\varnothing\rvert = 0 \cdot \lvert B\rvert = 0$, which is
  right because $\varnothing \times B = \varnothing$. With $m = 0$, clause 2 reads
  $1 = 1$. Neither is a convention.

- **The infinite analogue of clause 1 fails in the shape a reader expects.** A
  product of two infinite sets need not be strictly larger than either factor:
  $\mathbb{N}\times\mathbb{N} \approx \mathbb{N}$ ([[thm-n-cross-n-countable]]).
  The companion page records that as a false statement, with finiteness located
  as the hypothesis that fails.

```

## DEPENDENCY: thm-subset-of-a-finite-set

```markdown
---
id: thm-subset-of-a-finite-set
kind: theorem
title: "A subset of a finite set is finite, with $\\lvert B\\rvert \\le \\lvert A\\rvert$, and equality holds if and only if $B = A$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-finite-cardinality, def-countable, def-equinumerous, def-injection-surjection-bijection,
       def-natural-numbers, lem-nat-order-is-membership, def-nat-order, def-nat-addition,
       thm-induction-principle, lem-nat-add-cancellative, lem-nat-order-add-compatible,
       lem-nat-discrete, thm-well-ordering-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "Dedekind-infinite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dedekind-infinite_set"
    - title: "P. Halmos, Naive Set Theory, §13"
      url: "https://en.wikipedia.org/wiki/Naive_Set_Theory_(book)"
    - title: "J. Sylvestre, Elementary Foundations 12.02, Properties of finite sets and their cardinality (LibreTexts)"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Elementary_Foundations:_An_Introduction_to_Topics_in_Discrete_Mathematics_(Sylvestre)/12:_Cardinality/12.02:_Properties_of_finite_sets_and_their_cardinality"
pipeline_run: null
---

## Statement

Let $A$ be a finite set ([[def-countable]]) and let $B \subseteq A$. Then:

1. $B$ is finite;
2. $\lvert B\rvert \le \lvert A\rvert$ ([[def-finite-cardinality]]);
3. $\lvert B\rvert = \lvert A\rvert$ if and only if $B = A$;
4. every injection $f : A \to A$ is a bijection, and every surjection
   $f : A \to A$ is a bijection.

Clause 3 is the finite form of the Dedekind statement: a finite set is not
equinumerous with a proper subset of itself. Clause 4 is its working form, and
**finiteness is exactly the hypothesis that fails in general**: the successor map
is an injection of $\mathbb{N}$ into itself that is not surjective, which is the
false statement recorded on this page's companion.

## Facts & Assumptions

**Given:** A finite set $A$, its cardinality $n := \lvert A\rvert$, and a subset $B \subseteq A$. Throughout, $\sigma(n) = n \cup \{n\}$ and $\sigma(n) = n + 1$, the latter because $n + \sigma(0) = \sigma(n + 0) = \sigma(n)$ ([[def-nat-addition]]).

[L1] Induction: a property holding at $0$ and inherited by successors holds at every natural ([[thm-induction-principle]]).

[L2] On $\mathbb{N}$ the order is membership: $m < n \iff m \in n$, $m \le n \iff m \subseteq n$, and $n = \{\, m \in \mathbb{N} : m < n \,\}$; also $m < \sigma(n) \iff m \le n$ ([[lem-nat-order-is-membership]], [[def-nat-order]], [[def-natural-numbers]]). By the definition of the strict order, $m < m$ is impossible.

[L3] Cardinality ([[def-finite-cardinality]]): $\lvert A\rvert$ is the unique natural with $A \approx \lvert A\rvert$; $\lvert n\rvert = n$; $\lvert\varnothing\rvert = 0$; and if $A$ is finite and $A \approx B$ then $B$ is finite with $\lvert B\rvert = \lvert A\rvert$ (transport).

[L4] Maps and equinumerosity ([[def-injection-surjection-bijection]], [[def-equinumerous]], [[def-countable]]): $A$ is finite when $A \approx m$ for some $m \in \mathbb{N}$; the restriction of an injection to a subset of its domain is an injection; an injection is a bijection onto its image; inverses and composites of bijections are bijections; and $f^{-1}[f[S]] = S$ for a bijection $f$ and $S$ contained in its domain.

[L5] Order and successor: $k \le n$ implies $\sigma(k) \le \sigma(n)$, and $\sigma(k) = \sigma(n)$ implies $k = n$ ([[lem-nat-order-add-compatible]], [[lem-nat-add-cancellative]], with $\sigma(m) = m + 1$).

[L6] Discreteness: $m < n \iff \sigma(m) \le n$ ([[lem-nat-discrete]]).

[L7] Well-ordering: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

## Proof

**Proof technique:** induction.

1.1 The whole theorem rests on the special case where the ambient set is a natural number, which we call $(\ast)$: for every $n \in \mathbb{N}$ and every $B \subseteq n$, the set $B$ is finite, $\lvert B\rvert \le n$, and $\lvert B\rvert = n$ implies $B = n$. It is proved by induction on $n$. [given]

1.2 Base case $n = 0$. Since $0 = \varnothing$, a subset $B \subseteq 0$ satisfies $B = \varnothing = 0$; so $B$ is finite with $\lvert B\rvert = 0 \le 0$, and $\lvert B\rvert = 0$ indeed gives $B = 0$. [base, L3, L2]

1.3 Inductive hypothesis. Fix $n \in \mathbb{N}$ and assume $(\ast)$ holds for $n$: every $C \subseteq n$ is finite with $\lvert C\rvert \le n$, and $\lvert C\rvert = n$ implies $C = n$. [ih]

2.1 Let $B \subseteq \sigma(n) = n \cup \{n\}$ and put $B' := B \cap n$, so that $B' \subseteq n$, and $B = B'$ when $n \notin B$ while $B = B' \cup \{n\}$ with $n \notin B'$ when $n \in B$. By the inductive hypothesis of step 1.3 the set $B'$ is finite; write $k := \lvert B'\rvert$, so $k \le n$, and $k = n$ forces $B' = n$. [step 1.3, L2]

3.1 Case $n \notin B$. Here $B = B'$ is finite with $\lvert B\rvert = k \le n$, and $k \le n \le \sigma(n)$ gives $\lvert B\rvert \le \sigma(n)$; moreover $\lvert B\rvert = \sigma(n)$ is impossible, since $\sigma(n) = k \le n$ would give $n < n$ by [L6], so the third assertion of $(\ast)$ holds vacuously in this case. [step 2.1, L2, L6]

3.2 Case $n \in B$. Choose a bijection $g : k \to B'$, which exists because $\lvert B'\rvert = k$, and define $h : \sigma(k) \to B$ by $h(i) = g(i)$ for $i \in k$ and $h(k) = n$; the two clauses do not conflict, since $k \notin k$. Then $h$ is injective, because $g$ is injective and takes its values in $B' \subseteq n$, so no value $g(i)$ equals $n$; and $h$ is surjective onto $B = B' \cup \{n\}$. Hence $B \approx \sigma(k)$, so $B$ is finite with $\lvert B\rvert = \sigma(k)$. [step 2.1, L3, L4, construct]

4.1 In the case $n \in B$ we therefore have $\lvert B\rvert = \sigma(k) \le \sigma(n)$, because $k \le n$; and if $\lvert B\rvert = \sigma(n)$ then $\sigma(k) = \sigma(n)$, so $k = n$, so $B' = n$ and therefore $B = n \cup \{n\} = \sigma(n)$. [step 2.1, step 3.2, L5]

5.1 The two cases are exhaustive, so $(\ast)$ holds at $\sigma(n)$ whenever it holds at $n$; with the base case this gives $(\ast)$ for every $n \in \mathbb{N}$. [step 1.2, step 1.3, step 3.1, step 4.1, L1]

6.1 Clauses 1 and 2 in general. Fix a bijection $u : A \to n$, available since $n = \lvert A\rvert$. Then $u[B] \subseteq n$, and the restriction of $u$ to $B$ is a bijection of $B$ onto $u[B]$, so $B \approx u[B]$. By $(\ast)$ the set $u[B]$ is finite with $\lvert u[B]\rvert \le n$, hence $B$ is finite with $\lvert B\rvert = \lvert u[B]\rvert \le n = \lvert A\rvert$. [step 5.1, L3, L4]

7.1 Clause 3. If $B = A$ then $\lvert B\rvert = \lvert A\rvert$. Conversely assume $\lvert B\rvert = \lvert A\rvert = n$. Then $\lvert u[B]\rvert = \lvert B\rvert = n$ by transport, so $u[B] = n$ by $(\ast)$, and therefore $B = u^{-1}[u[B]] = u^{-1}[n] = A$, because $u$ is a bijection of $A$ onto $n$. [step 5.1, step 6.1, L3, L4]

8.1 Clause 4, the injective half. Let $f : A \to A$ be injective. Then $f$ is a bijection of $A$ onto its image $f[A] \subseteq A$, so $\lvert f[A]\rvert = \lvert A\rvert$ by transport, and clause 3 gives $f[A] = A$. Thus $f$ is surjective, hence a bijection. [step 7.1, L3, L4]

9.1 Clause 4, the surjective half. Let $f : A \to A$ be surjective. For each $b \in A$ the set $u[f^{-1}[\{b\}]] \subseteq n$ is nonempty, so it has a least element by [L7]; let $g(b)$ be the value of $u^{-1}$ at that least element. No choice principle is used, since each $g(b)$ is determined by $b$ rather than selected. By construction $g(b) \in f^{-1}[\{b\}]$, that is $f(g(b)) = b$ for every $b$; and $g$ is injective, since $g(b) = g(b')$ gives $b = f(g(b)) = f(g(b')) = b'$. So $g$ is a bijection by step 8.1. [step 6.1, step 8.1, L4, L7, construct]

10.1 Composing $f \circ g = \mathrm{id}_A$ on the right with $g^{-1}$ gives $f = g^{-1}$, which is a bijection; so a surjection of $A$ onto itself is a bijection, and in particular an injection. [step 9.1, L4]

11.1 Clauses 1 and 2 are step 6.1, clause 3 is step 7.1, and clause 4 is steps 8.1 and 10.1, each resting on the induction that establishes $(\ast)$. [step 5.1, step 6.1, step 7.1, step 8.1, step 10.1, discharge-induction] ∎

## Remarks

- **Where finiteness is spent.** Only in $(\ast)$, and there only through the base
  case $0 = \varnothing$ and the fact that removing the top point of $\sigma(n)$
  leaves $n$. Clause 4 then follows formally, which is why the failure of clause 4
  for $\mathbb{N}$ is a failure of finiteness and of nothing else.

- **The surjective half needs no choice.** The obvious argument, "pick a preimage
  of each $b$", would need a choice function on the fibres. Transporting the
  fibres into $\mathbb{N}$ and taking least elements replaces the choice by a
  determination, which is what [[thm-well-ordering-principle]] is for.

- **Clause 2 is not the pigeonhole principle restated.** [[lem-pigeonhole]] is
  about injections between natural numbers, and it is what makes
  [[def-finite-cardinality]] well posed in the first place; clause 2 compares the
  cardinalities of a set and a subset, and is proved here by induction directly.

```

## DEPENDENCY: def-generated-subgroup

```markdown
---
id: def-generated-subgroup
kind: definition
title: "The subgroup $\\langle S \\rangle$ generated by a subset, the cyclic subgroup $\\langle g \\rangle$, and cyclic groups"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-subgroup, lem-intersection-of-subgroups, def-group]
justified_by: []
aliases: [def-cyclic-group, def-cyclic-subgroup]
landmark: false
short: "$\\langle S \\rangle$, $\\langle g \\rangle$, cyclic"
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
    - title: "Generating set of a group (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Generating_set_of_a_group"
    - title: "Cyclic group (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cyclic_group"
pipeline_run: null
---

## Definition

Let $G$ be a group ([[def-group]]) and $S \subseteq G$ a subset. The set of
subgroups of $G$ containing $S$ is nonempty, since $G$ itself is such a subgroup,
so its intersection is a subgroup of $G$ by [[lem-intersection-of-subgroups]].
That intersection is the **subgroup generated by $S$**,

$$\langle S \rangle \;:=\; \bigcap \{\, H \;:\; H \le G \text{ and } S \subseteq H \,\} .$$

It contains $S$, being an intersection of sets each containing $S$, and it is
contained in every subgroup of $G$ that contains $S$; so it is the **smallest**
subgroup of $G$ containing $S$, and these two properties determine it uniquely.
The elements of $S$ are called **generators**.

For a single element $g \in G$ we write $\langle g \rangle := \langle \{g\}\rangle$
and call it the **cyclic subgroup generated by $g$**. A group $G$ is **cyclic**
when $G = \langle g \rangle$ for some $g \in G$.

By convention $\langle \varnothing \rangle = \{e\}$: the trivial subgroup is the
smallest subgroup containing the empty set, and this is a consequence of the
definition, not a stipulation, since every subgroup contains $e$
([[def-subgroup]]).

## Remarks

- **Two descriptions, one object.** The definition above is "from outside": cut
  down from all subgroups containing $S$. There is also a description "from
  inside", as the set of all finite products of generators and their inverses.
  For a single generator that inside description is
  $\langle g \rangle = \{\, g^{n} : n \in \mathbb{Z} \,\}$, proved in
  [[lem-cyclic-subgroup-is-the-set-of-powers]]. The general case belongs to a
  later page; nothing here needs it.

- **Cyclic does not mean finite.** $(\mathbb{Z},+)$ is cyclic, generated by $1$,
  and infinite; the generator may also fail to be unique, since $-1$ generates it
  too.

- Every cyclic group is abelian ([[lem-cyclic-subgroup-is-the-set-of-powers]]),
  so a non-abelian group is never cyclic; the converse fails, and the Klein
  four-group on the companion page is an abelian group that is not cyclic.

```

## DEPENDENCY: thm-sylow-third-theorem

```markdown
---
id: thm-sylow-third-theorem
kind: theorem
title: "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-second-theorem, thm-sylow-number-as-normalizer-index, thm-p-group-fixed-point-congruence, def-number-of-sylow-p-subgroups, lem-product-with-normal-subgroup]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$ See [[thm-sylow-second-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\le G$ be a $p$-subgroup. There is $g\in G$ with $H\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. ([[thm-sylow-second-theorem]]).

[L2] If $P$ is a Sylow $p$-subgroup of a finite group $G$, then $$n_p(G)=[G:N_G(P)].$$. ([[thm-sylow-number-as-normalizer-index]]).

[L3] If a finite $p$-group $P$ acts on a finite set $X$, then $$|X|\equiv|X^P|\pmod p.$$. ([[thm-p-group-fixed-point-congruence]]).

[L4] For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups (def-sylow-p-subgroup). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; thm-sylow-first-theorem later shows it is nonzero. ([[def-number-of-sylow-p-subgroups]]).

[L5] If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$. Here $HN:=\{hn:h\in H,\ n\in N\}$. ([[lem-product-with-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 Let a Sylow subgroup $P$ act by conjugation on the Sylow set. [L1, L2, L3, L4, L5, given, algebra]

2.1 If $P$ fixes $Q$, then $P,Q\le N_G(Q)$, and Sylow II inside that normalizer forces $P=Q$; hence there is exactly one fixed point and the congruence follows. [step 1.1, given, algebra]

3.1 The normalizer-index formula and $P\le N_G(P)$ give $n_p\mid m$. This proves the stated claim. [step 2.1, given, algebra] ∎

```

## DEPENDENCY: cor-sylow-subgroup-normal-iff-unique

```markdown
---
id: cor-sylow-subgroup-normal-iff-unique
kind: corollary
title: "A Sylow $p$-subgroup is normal if and only if it is unique"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-sylow-second-theorem, def-number-of-sylow-p-subgroups, def-normal-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. See [[thm-sylow-second-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\le G$ be a $p$-subgroup. There is $g\in G$ with $H\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. ([[thm-sylow-second-theorem]]).

[L2] For a finite group $G$ and a prime $p$, let $\operatorname{Syl}_p(G)$ be the set of Sylow $p$-subgroups (def-sylow-p-subgroup). Define $$n_p(G):=|\operatorname{Syl}_p(G)|.$$ This cardinal is defined even before existence is proved because $\operatorname{Syl}_p(G)$ is a subset of the finite power set of $G$; thm-sylow-first-theorem later shows it is nonzero. ([[def-number-of-sylow-p-subgroups]]).

[L3] Let $G$ be a group and let $N\le G$ be a subgroup (def-subgroup). For $g\in G$, write $$gNg^{-1}:=\{gng^{-1}:n\in N\}.$$ The subgroup $N$ is normal in $G$ when $$gNg^{-1}=N\qquad\text{for every }g\in G.$$ In that case write $N\mathrel{\trianglelefteq}G$. Equivalently, every inner conjugation of $G$ maps $N$ onto itself. The connection with equality of the left and right cosets of def-coset is proved in thm-normal-subgroup-characterisations. ([[def-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 A normal Sylow subgroup is fixed by every conjugation, and Sylow II says every Sylow subgroup is one of its conjugates. [L1, L2, L3, given, algebra]

2.1 Conversely, uniqueness makes the subgroup conjugation-invariant. This proves the stated claim. [step 1.1, given, algebra] ∎

```

## DEPENDENCY: lem-product-with-normal-subgroup

```markdown
---
id: lem-product-with-normal-subgroup
kind: lemma
title: 'If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-subgroup-criterion, def-normal-subgroup, thm-normal-subgroup-characterisations, lem-group-inverse-laws]
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

If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$.

Here $HN:=\{hn:h\in H,\ n\in N\}$.

## Facts & Assumptions

**Given:** A subgroup $H\le G$ and a normal subgroup $N\mathrel{\trianglelefteq}G$.

[L1] A nonempty subset closed under $xy^{-1}$ is a subgroup ([[lem-subgroup-criterion]]).

[L2] Normality means $gNg^{-1}=N$ for every $g\in G$ ([[def-normal-subgroup]]).

[L3] A subgroup is normal if its conjugates by ambient elements lie in it ([[thm-normal-subgroup-characterisations]]).

[L4] $(ab)^{-1}=b^{-1}a^{-1}$ in a group ([[lem-group-inverse-laws]]).

## Proof

**Proof technique:** direct.

1.1 The identity lies in $HN$; for $h_1n_1,h_2n_2\in HN$, put $m=n_1n_2^{-1}\in N$, so $(h_1n_1)(h_2n_2)^{-1}=h_1mh_2^{-1}=h_1h_2^{-1}(h_2mh_2^{-1})\in HN$. [L1, L2, L3, L4, given, algebra]

2.1 Thus [L1] gives $HN\le G$; moreover for $h\in H$ and $x\in H\cap N$, both $hxh^{-1}\in H$ and $hxh^{-1}\in N$, so it lies in $H\cap N$. [step 1.1, L1, L2, L3, L4, given, algebra]

3.1 The conjugation closure in step 2.1 gives $H\cap N\mathrel{\trianglelefteq}H$. [step 2.1] ∎

```

## DEPENDENCY: thm-left-coset-action-and-its-kernel

```markdown
---
id: thm-left-coset-action-and-its-kernel
kind: theorem
title: 'Left multiplication on $G/H$ is transitive, has stabiliser $H$ at $H$, and has kernel $\operatorname{Core}_G(H)$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-action, thm-group-actions-correspond-to-homomorphisms, def-coset, def-index, lem-coset-membership-and-equality, def-kernel-and-image-of-group-homomorphism, def-core-of-a-subgroup, lem-core-is-largest-normal-subgroup-contained]
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
    - title: "P. Brosnan, Undergraduate Algebra Notes, 3.14: G-Sets, Proposition 3.102 and Corollary 3.104"
      url: "https://www.math.umd.edu/~pbrosnan/notes/ugalg/sect0035.html"
    - title: "K. Conrad, Group Actions, Theorem 6.8"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf"
pipeline_run: null
---

## Statement

Let $H\le G$. Left multiplication defines a transitive action of $G$ on the
coset set $G/H$ by

$$g\cdot(aH):=(ga)H.$$

The stabilizer of the point $H$ is $H$. The corresponding homomorphism
$\rho:G\to\operatorname{Sym}(G/H)$ has

$$\ker\rho=\operatorname{Core}_G(H).$$

## Facts & Assumptions

**Given:** A group $G$ and a subgroup $H\le G$.

[L1] A left action satisfies the identity and multiplication laws and is transitive when some group element carries any chosen point to any other ([[def-group-action]]).

[L2] Every action yields a homomorphism into the symmetric group of the acted-on set ([[thm-group-actions-correspond-to-homomorphisms]]).

[L3] The elements of $G/H$ are the left cosets $aH$ ([[def-coset]], [[def-index]]).

[L4] One has $aH=bH$ exactly when $a^{-1}b\in H$ ([[lem-coset-membership-and-equality]]).

[L5] The kernel of a homomorphism consists of the elements mapped to the identity ([[def-kernel-and-image-of-group-homomorphism]]).

[L6] The core is $\operatorname{Core}_G(H)=\bigcap_{a\in G}aHa^{-1}$ ([[def-core-of-a-subgroup]]).

[L7] The core is a normal subgroup contained in $H$ ([[lem-core-is-largest-normal-subgroup-contained]]).

## Proof

**Proof technique:** direct.

1.1 If $aH=bH$, then $a^{-1}b\in H$ by [L4], and $(ga)^{-1}(gb)=a^{-1}b\in H$, so $(ga)H=(gb)H$ and the rule is well-defined. It satisfies $e\cdot(aH)=aH$ and $g\cdot(k\cdot(aH))=(gk)aH=(gk)\cdot(aH)$; moreover $a\cdot H=aH$, so the action is transitive, and $g\cdot H=H$ exactly when $g\in H$. [L1, L3, L4]

2.1 By [L2], the action defines $\rho:G\to\operatorname{Sym}(G/H)$. By [L5], an element $k$ lies in $\ker\rho$ exactly when $k\cdot(aH)=aH$ for every $a\in G$, that is, when $(ka)H=aH$ for every $a$. [step 1.1, L2, L5]

3.1 By [L4], $(ka)H=aH$ is equivalent to $a^{-1}ka\in H$, or to $k\in aHa^{-1}$. Requiring this for every $a$ gives $k\in\bigcap_a aHa^{-1}=\operatorname{Core}_G(H)$, so $\ker\rho=\operatorname{Core}_G(H)$, which is normal by [L7]. [step 2.1, L4, L6, L7] ∎

```

## DEPENDENCY: thm-image-subgroup-and-kernel-normal

```markdown
---
id: thm-image-subgroup-and-kernel-normal
kind: theorem
title: 'The image of a group homomorphism is a subgroup and its kernel is a normal subgroup'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-kernel-and-image-of-group-homomorphism, lem-group-homomorphism-basic-properties, lem-subgroup-criterion, def-normal-subgroup]
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
    - title: "Ernst, An Inquiry-Based Approach to Abstract Algebra, Homomorphisms"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/An_Inquiry-Based_Approach_to_Abstract_Algebra_%28Ernst%29/07%3A_Homomorphisms_and_the_Isomorphism_Theorems/7.01%3A_Homomorphisms"
pipeline_run: null
---

## Statement

The image of a group homomorphism is a subgroup and its kernel is a normal subgroup.

For every group homomorphism $f:G\to H$, one has
$\operatorname{im}f\le H$ and $\ker f\mathrel{\trianglelefteq}G$.

## Facts & Assumptions

**Given:** A group homomorphism $f:G\to H$.

[L1] The kernel is the inverse image of $e_H$ and the image is the set of values of $f$ ([[def-kernel-and-image-of-group-homomorphism]]).

[L2] A group homomorphism preserves products and inverses ([[lem-group-homomorphism-basic-properties]]).

[L3] A nonempty subset closed under $xy^{-1}$ is a subgroup ([[lem-subgroup-criterion]]).

[L4] A subgroup $N$ is normal when $gNg^{-1}=N$ for every $g\in G$ ([[def-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 The image contains $e_H=f(e_G)$ and, for $f(x),f(y)\in\operatorname{im}f$, contains $f(x)f(y)^{-1}=f(xy^{-1})$; thus [L3] gives $\operatorname{im}f\le H$. [L1, L2, L3, L4, given, algebra]

2.1 The kernel is a subgroup by the same calculation, and for $k\in\ker f$ one has $f(gkg^{-1})=f(g)e_Hf(g)^{-1}=e_H$, so $g(\ker f)g^{-1}\subseteq\ker f$; applying this to $g^{-1}$ gives equality. [step 1.1, L1, L2, L3, L4, given, algebra]

3.1 The conjugation calculation in step 2.1 completes both assertions. [step 1.1, step 2.1] ∎

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

## DEPENDENCY: cor-order-of-a-quotient-group

```markdown
---
id: cor-order-of-a-quotient-group
kind: corollary
title: "If $[G:N]$ is finite then $|G/N|=[G:N]$; for finite $G$ this equals $|G|/|N|$"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-quotient-group-laws, def-index, thm-lagrange, def-order-in-a-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "T. W. Judson, Abstract Algebra: Theory and Applications, Factor Groups and Normal Subgroups"
      url: "https://math.libretexts.org/Bookshelves/Abstract_and_Geometric_Algebra/Abstract_Algebra%253A_Theory_and_Applications_%28Judson%29/10%253A_Normal_Subgroups_and_Factor_Groups/10.01%253A_Factor_Groups_and_Normal_Subgroups"
pipeline_run: null
---

## Statement

Let $N\mathrel{\trianglelefteq}G$. If $[G:N]$ is finite, then the quotient group
$G/N$ is finite and

$$|G/N|=[G:N].$$

In particular, if $G$ is finite, then

$$|G/N|=\frac{|G|}{|N|}.$$

## Facts & Assumptions

**Given:** A group $G$ and a normal subgroup $N\mathrel{\trianglelefteq}G$.

[F1] The index $[G:N]$ is the finite cardinality of the left-coset set $G/N$ when that set is finite ([[def-index]]).

[L1] If $G$ is finite and $N\le G$, then $|G|=[G:N]|N|$ ([[thm-lagrange]]).

[F2] The order $|K|$ of a finite group $K$ is the cardinality of its underlying set ([[def-order-in-a-group]]).

[L2] The quotient group has the left cosets of $N$ as its underlying set ([[thm-quotient-group-laws]]).

## Proof

**Proof technique:** direct.

1.1 If $[G:N]$ is finite, then by [F1] the coset set underlying $G/N$ is finite with cardinality $[G:N]$; hence [F2] and [L2] give $|G/N|=[G:N]$. [F1, F2, L2]

2.1 If $G$ is finite, then [L1] gives $|G|=[G:N]|N|$. Since $N$ contains the identity, $|N|\ne0$, and step 1.1 yields $|G/N|=[G:N]=|G|/|N|$. [step 1.1, L1, algebra]

3.1 The two asserted formulas follow. [step 1.1, step 2.1] ∎

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

## DEPENDENCY: thm-number-of-bijections-of-a-finite-set

```markdown
---
id: thm-number-of-bijections-of-a-finite-set
kind: theorem
title: "A finite set $A$ with $\\lvert A\\rvert = n$ has exactly $n!$ bijections onto itself, and $n!$ bijections onto any set of the same cardinality"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-number-of-injections, thm-subset-of-a-finite-set, def-factorial-and-falling-factorial,
       def-finite-cardinality, def-injection-surjection-bijection, def-equinumerous]
justified_by: []
forward_refs: [def-symmetric-group]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-29
sources:
  scraped: []
  references:
    - title: "Permutation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Permutation"
    - title: "Factorial (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Factorial"
    - title: "R. Stanley, Enumerative Combinatorics, Vol. 1, Ch. 1"
      url: "https://en.wikipedia.org/wiki/Enumerative_Combinatorics"
pipeline_run: null
---

## Statement

Let $A$ be a finite set with $n := \lvert A\rvert$ and write

$$\operatorname{Bij}(A) := \{\, f : A \to A \ :\ f \text{ is a bijection} \,\}.$$

Then $\operatorname{Bij}(A)$ is finite and $\lvert\operatorname{Bij}(A)\rvert = n!$
([[def-factorial-and-falling-factorial]]).

More generally, for finite sets $X$ and $Y$ write $\operatorname{Bij}(X,Y)$ for
the set of bijections $X \to Y$. If $\lvert X\rvert = \lvert Y\rvert = n$ then
$\operatorname{Bij}(X,Y)$ is finite with $n!$ elements, and if
$\lvert X\rvert \ne \lvert Y\rvert$ then $\operatorname{Bij}(X,Y) = \varnothing$.

## Facts & Assumptions

**Given:** Finite sets $A$, $X$, $Y$, with $n = \lvert A\rvert$.

[L1] $\lvert\operatorname{Inj}(B,A)\rvert = \lvert A\rvert^{\underline{\lvert B\rvert}}$, and $\operatorname{Inj}(B,A)$ is finite ([[thm-number-of-injections]]).

[L2] Every injection of a finite set into itself is a bijection ([[thm-subset-of-a-finite-set]], clause 4).

[L3] $n^{\underline{n}} = n!$ ([[def-factorial-and-falling-factorial]], clause (d)).

[L4] Cardinality ([[def-finite-cardinality]]): a bijection transports finiteness and cardinality, and for finite $X$, $Y$ one has $\lvert X\rvert = \lvert Y\rvert$ if and only if $X \approx Y$.

[L5] Maps ([[def-injection-surjection-bijection]], [[def-equinumerous]]): composites and inverses of bijections are bijections, and every bijection is an injection.

## Proof

**Proof technique:** direct.

1.1 The two sets coincide: $\operatorname{Bij}(A) = \operatorname{Inj}(A,A)$. Every bijection is an injection, and by [L2] every injection $A \to A$ is a bijection, $A$ being finite. [L2, L5]

2.1 Hence $\operatorname{Bij}(A)$ is finite with $\lvert\operatorname{Bij}(A)\rvert = \lvert\operatorname{Inj}(A,A)\rvert = n^{\underline{n}} = n!$, by [L1] with $B = A$ and by [L3]. [step 1.1, L1, L3]

3.1 The two-set form. Suppose $\lvert X\rvert = \lvert Y\rvert = n$. Then $X \approx Y$ by [L4], so fix a bijection $u : Y \to X$. The map $g \mapsto u \circ g$ sends $\operatorname{Bij}(X,Y)$ into $\operatorname{Bij}(X,X) = \operatorname{Bij}(X)$ and has the two-sided inverse $h \mapsto u^{-1}\circ h$, so it is a bijection; hence $\operatorname{Bij}(X,Y)$ is finite with $\lvert\operatorname{Bij}(X,Y)\rvert = \lvert\operatorname{Bij}(X)\rvert = n!$ by step 2.1 and [L4]. If instead $\lvert X\rvert \ne \lvert Y\rvert$ then $X \not\approx Y$ by [L4], so no bijection $X \to Y$ exists at all. [step 2.1, L4, L5]

4.1 The first assertion is step 2.1 and the second is step 3.1. [step 2.1, step 3.1] ∎

## Remarks

- **No group vocabulary is used or needed.** $\operatorname{Bij}(A)$ is written
  here as a **set** of bijections. Composition makes it a group, and that
  structure, together with the name *symmetric group*, is introduced in
  [[def-symmetric-group]] later in the reading order; the pointer is orientation
  only and nothing above rests on it. The count $n!$ proved here is what a later
  page needs in order to say that the symmetric group on $n$ letters has $n!$
  elements.

- **Why this is on the main page and not among the examples.** Later pages
  consume this count, and an examples page is a leaf that nothing else may
  depend on.

- **The two-set form costs one line and is used immediately.** The closed formula
  for $\binom{n}{k}$ counts the bijections between an initial segment and an
  arbitrary $k$-element subset, which is exactly $\operatorname{Bij}(X,Y)$ with
  $X \ne Y$.

```

## DEPENDENCY: thm-classification-of-groups-of-order-pq

```markdown
---
id: thm-classification-of-groups-of-order-pq
kind: theorem
title: "Classification of groups of order $pq$ for primes $p<q$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-groups-of-order-pq-have-a-normal-q-subgroup, lem-order-p-actions-on-a-cyclic-q-group, thm-cauchys-theorem-for-finite-groups, cor-prime-order-group-is-cyclic, thm-internal-external-semidirect-product-equivalence, lem-product-with-normal-subgroup, lem-group-power-laws, lem-order-characterisation, lem-coprime-divides-product, thm-lagrange, thm-classification-of-cyclic-groups]
justified_by: []
aliases: []
landmark: true
proof_strategy: cases
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Statement

Let $p<q$ be primes.

- If $p\nmid(q-1)$, every group of order $pq$ is cyclic.
- If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$.

## Facts & Assumptions

**Given:** Primes $p<q$ and a group $G$ of order $pq$.

[L1] The group $G$ has a normal subgroup $Q$ of order $q$ ([[lem-groups-of-order-pq-have-a-normal-q-subgroup]]).

[L2] Cauchy's theorem supplies a subgroup $P$ of order $p$, and every prime-order group is cyclic ([[thm-cauchys-theorem-for-finite-groups]], [[cor-prime-order-group-is-cyclic]]).

[L3] A normal factor and a complement with trivial intersection realise an external semidirect product ([[thm-internal-external-semidirect-product-equivalence]]).

[L4] Nontrivial actions of $C_p$ on $C_q$ exist exactly when $p\mid(q-1)$ and give a unique semidirect-product type ([[lem-order-p-actions-on-a-cyclic-q-group]]).

[L5] A product with a normal subgroup is a subgroup; group powers obey the addition law; and $x^m=1$ exactly when the order of $x$ divides $m$ ([[lem-product-with-normal-subgroup]], [[lem-group-power-laws]], [[lem-order-characterisation]]).

[L6] If two coprime integers divide an integer, then their product divides it ([[lem-coprime-divides-product]]).

[L7] The order of a subgroup divides the order of a finite group ([[thm-lagrange]]).

[L8] Finite cyclic groups are determined up to isomorphism by their order ([[thm-classification-of-cyclic-groups]]).

## Proof

**Proof technique:** cases.

1.1 Choose $Q$ and $P$ as in [L1] and [L2]. By [L7], the order of $Q\cap P$ divides both primes, so the intersection is trivial. Since $Q$ is normal, $QP$ is a subgroup by [L5]. Its cosets $xP$ for $x\in Q$ are distinct because $xP=x'P$ would give $x'^{-1}x\in Q\cap P$, and each has $p$ elements. Thus $|QP|=pq=|G|$, so $G=QP$. [L1, L2, L5, L7, algebra]

2.1 Both $Q$ and $P$ are cyclic by [L2], and [L3] gives $G\cong C_q\rtimes C_p$. [step 1.1, L2, L3]

3.1 [assume-case first] Suppose the action is trivial. Let $x,y$ generate the commuting factors of orders $q,p$. If $(xy)^m=1$, then $x^m=y^{-m}$ belongs to their trivial intersection, so $q\mid m$ and $p\mid m$ by [L5]. Since $p,q$ are coprime, [L6] gives $pq\mid m$. Hence $xy$ has order $pq$, and $G$ is cyclic. [step 2.1, L5, L6]

3.2 [assume-case second] Suppose the action is nontrivial. Then [L4] says that this is possible exactly when $p\mid(q-1)$ and that all such products are isomorphic. The product is nonabelian because some element of $P$ acts nontrivially on $Q$. [step 2.1, L4]

4.1 [cases-exhaustive] If $p\nmid(q-1)$ only step 3.1 occurs. If $p\mid(q-1)$, steps 3.1 and 3.2 give two types, distinguished by commutativity; [L8] gives uniqueness of the cyclic type and [L4] gives uniqueness of the nonabelian type. [step 3.1, step 3.2, L4, L8] ∎

```

## DEPENDENCY: cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal

```markdown
---
id: cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal
kind: corollary
title: "A normal Sylow subgroup of a normal subgroup is normal in the whole group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-sylow-subgroup-normal-iff-unique, lem-characteristic-subgroup-of-a-normal-subgroup-is-normal]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

If $N\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\trianglelefteq G$. See [[cor-sylow-subgroup-normal-iff-unique]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

[L2] If $K$ is characteristic in $N$ and $N\trianglelefteq G$, then $K\trianglelefteq G$. ([[lem-characteristic-subgroup-of-a-normal-subgroup-is-normal]]).

## Proof

**Proof technique:** direct.

1.1 A unique Sylow subgroup is preserved by every automorphism of its ambient normal subgroup, so it is characteristic there; characteristic-in-normal gives normality in the whole group. [L1, L2, given, algebra]

2.1 The preceding argument gives the conclusion under every hypothesis of the Statement. This proves the stated claim. [step 1.1, given, algebra] ∎

```

## DEPENDENCY: def-simple-group

```markdown
---
id: def-simple-group
kind: definition
title: 'Simple groups'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-normal-subgroup]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-13
sources:
  scraped: []
  references:
    - title: "T. Judson, Abstract Algebra: Theory and Applications, Simplicity of $A_n$"
      url: "https://judsonbooks.org/aata-files/aata-html/normal-section-simplicity-of-an.html"
pipeline_run: frontier-11
---

## Definition

A group $G$ is **simple** if $G\ne\{1\}$ and its only normal subgroups are
$\{1\}$ and $G$, where normality is as in [[def-normal-subgroup]].

```

## DEPENDENCY: thm-sylow-first-theorem

```markdown
---
id: thm-sylow-first-theorem
kind: theorem
title: "Sylow I: every finite group has a Sylow $p$-subgroup"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sylow-p-subgroup, lem-wielandt-sylow-binomial-valuation, thm-orbit-stabilizer, cor-orbit-stabilizer-cardinality, thm-lagrange, thm-strong-induction, thm-orbits-partition-the-set]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Amin Idelhaj, The Sylow Theorems and Their Applications, Section 3, Lemma 3.6 and the proof of Sylow's first theorem"
      url: "https://math.uchicago.edu/~may/REU2016/REUPapers/Idelhaj.pdf"
    - title: "Keith Conrad, The Sylow Theorems, Section 2, Proof of Sylow I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowpf.pdf"
pipeline_run: null
---

## Statement

Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup ([[def-sylow-p-subgroup]]). See [[def-sylow-p-subgroup]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be a finite group, let $p$ be prime, and write $|G|=p^a m$ with $a\in\mathbb N$ and $p\nmid m$. A subgroup $P\le G$ is a Sylow $p$-subgroup when $|P|=p^a$. Equivalently, its order is the largest power of $p$ dividing $|G|$. This is a property of a subgroup and does not presume that such a subgroup exists; existence is proved in thm-sylow-first-theorem. ([[def-sylow-p-subgroup]]).

[L2] Let $p$ be prime and let $a,m\in\mathbb N$ satisfy $p\nmid m$. Then $$v_p\!\left(\binom{p^am}{p^a}\right)=0.$$ The valuation is applied only to nonzero integers. ([[lem-wielandt-sylow-binomial-valuation]]).

[L3] Let $G$ act on $X$ and let $x\in X$. The rule $$\Phi:G/G_x\longrightarrow G\cdot x,\qquad \Phi(gG_x)=g\cdot x,$$ is well-defined and bijective. Thus every orbit is naturally in bijection with the left cosets of its stabilizer. ([[thm-orbit-stabilizer]]).

[L4] For an action of $G$ on $X$ and $x\in X$, $$|G\cdot x|=[G:G_x]$$ whenever either side is finite. In particular, if $G$ is finite, then $$|G|=|G_x|\,|G\cdot x|.$$. ([[cor-orbit-stabilizer-cardinality]]).

[L5] Let $G$ be a finite group and $H\le G$. Then $$|G|=[G:H]\,|H|.$$ Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$, $|H|$ divides $|G|$. ([[thm-lagrange]]).

[L6] Let $P$ be a property of naturals such that for every $n \in \mathbb{N}$, if $P(m)$ holds for all $m < n$ then $P(n)$. Then $P(n)$ holds for all $n \in \mathbb{N}$. (At $n = 0$ the hypothesis is vacuous, so $P(0)$ is forced.). ([[thm-strong-induction]]).

[L7] For a left action of $G$ on $X$, the relation $x\sim y$ defined by $y=g\cdot x$ for some $g\in G$ is an equivalence relation whose class at $x$ is $G\cdot x$, and the distinct orbits partition $X$ ([[thm-orbits-partition-the-set]]).

## Proof

**Proof technique:** direct.

1.1 Argue by strong induction [L6] on $|G|$, the induction statement being that every finite group of order $n$ has a subgroup of order $p^a$ whenever $n=p^am$ with $p\nmid m$. Let $\Omega$ be the set of subsets of $G$ of size $p^a$ and let $G$ act on $\Omega$ by left translation, $g\cdot A:=gA$; this is an action, and $|gA|=|A|$ because left translation is a bijection of $G$. Counting subsets gives $|\Omega|=\binom{p^am}{p^a}$, so [L2] yields $v_p(|\Omega|)=0$, that is $p\nmid|\Omega|$. [L2, L6, given, algebra]

2.1 By [L7] the orbits partition $\Omega$, so $|\Omega|$ is the sum of the orbit sizes. Were $p$ to divide every orbit size it would divide $|\Omega|$, so some orbit $\mathcal O$ has $p\nmid|\mathcal O|$. Choose $A\in\mathcal O$ and put $H=G_A=\{g\in G:gA=A\}$. The bijection of [L3] between $G/H$ and $\mathcal O$ gives $|\mathcal O|=[G:H]$, so [L4] gives $p^am=|G|=|H|\,|\mathcal O|$; since $p\nmid|\mathcal O|$, the full power $p^a$ divides $|H|$. [step 1.1, L3, L4, L7, choose]

3.1 Suppose $H=G$. Then $gA=A$ for every $g\in G$, so for any $x\in A$ the set $A$ contains $Gx=G$, whence $A=G$ and $p^a=|A|=|G|=p^am$. Thus $m=1$ and $G$ itself is a subgroup of order $p^a$. [step 2.1, given, algebra]

3.2 Suppose instead $H\ne G$, so $|H|<|G|$. By [L5], $|H|$ divides $p^am$; writing $|H|=p^bm'$ with $p\nmid m'$, step 2.1 gives $b\ge a$, while $p^b\mid p^am$ with $p\nmid m$ gives $b\le a$. Hence $|H|=p^am'$ with $p\nmid m'$, and the induction hypothesis applied to $H$ supplies a subgroup of $H$ of order $p^a$, which is a subgroup of $G$. [step 2.1, L5, L6, given, algebra]

4.1 Steps 3.1 and 3.2 are exhaustive, so $G$ has a subgroup $P$ of order $p^a$, and $|P|$ is the largest power of $p$ dividing $|G|$, so $P$ is a Sylow $p$-subgroup by [L1]. At $a=0$ the argument returns the trivial subgroup, of order $p^0=1$; for the trivial group $|G|=1$ this is $G$ itself, and $m=1$ is the case settled in step 3.1. [L1, step 3.1, step 3.2, given] ∎

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

## DEPENDENCY: thm-conjugation-is-an-automorphism

```markdown
---
id: thm-conjugation-is-an-automorphism
kind: theorem
title: 'Conjugation $x\mapsto gxg^{-1}$ is an automorphism'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-isomorphism-and-automorphism, lem-group-inverse-laws]
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
    - title: "Milne, Group Theory, Automorphisms of Groups"
      url: "https://math.libretexts.org/Workbench/Group_Theory_4e_%28Milne%29/03%3A_Automorphisms_and_Extensions/3.01%3A_Automorphisms_of_groups"
pipeline_run: null
---

## Statement

Conjugation $x\mapsto gxg^{-1}$ is an automorphism.

For each $g\in G$, the map $c_g:G\to G$, $c_g(x)=gxg^{-1}$, is an
automorphism.

## Facts & Assumptions

**Given:** A group $G$ and $g\in G$.

[L1] An automorphism is a bijective group homomorphism ([[def-group-isomorphism-and-automorphism]]).

[L2] Inverses reverse products and $g^{-1}$ is the inverse of $g$ ([[lem-group-inverse-laws]]).

## Proof

**Proof technique:** direct.

1.1 Associativity gives $c_g(xy)=gx yg^{-1}=(gxg^{-1})(gyg^{-1})$, so $c_g$ is a homomorphism. [L1, L2, given, algebra]

2.1 The map $c_{g^{-1}}$ is inverse to $c_g$ by cancellation. [step 1.1, L1, L2, given, algebra]

3.1 Thus $c_g$ is a bijective homomorphism and hence an automorphism. [step 2.1] ∎

```

## DEPENDENCY: thm-automorphisms-form-a-group

```markdown
---
id: thm-automorphisms-form-a-group
kind: theorem
title: 'The automorphisms of a group form a group under composition'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-isomorphism-and-automorphism, lem-inverse-of-bijective-group-homomorphism, def-symmetric-group, lem-symmetric-group-is-a-group]
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
    - title: "Milne, Group Theory, Automorphisms of Groups"
      url: "https://math.libretexts.org/Workbench/Group_Theory_4e_%28Milne%29/03%3A_Automorphisms_and_Extensions/3.01%3A_Automorphisms_of_groups"
pipeline_run: null
---

## Statement

The automorphisms of a group form a group under composition.

## Facts & Assumptions

**Given:** A group $G$.

[L1] $\operatorname{Aut}(G)$ is the set of bijective homomorphisms $G\to G$ ([[def-group-isomorphism-and-automorphism]]).

[L2] The inverse of a bijective homomorphism is a homomorphism ([[lem-inverse-of-bijective-group-homomorphism]]).

[L3] The symmetric group uses composition of bijections ([[def-symmetric-group]]).

[L4] Bijections of a set form a group under composition ([[lem-symmetric-group-is-a-group]]).

## Proof

**Proof technique:** direct.

1.1 The identity map is an automorphism, and the composite of two automorphisms is again a bijective homomorphism. [L1, L2, L3, L4, given, algebra]

2.1 By [L2], the inverse of every automorphism is an automorphism, while associativity comes from composition of functions. [step 1.1, L1, L2, L3, L4, given, algebra]

3.1 Hence the closure and inverse properties in step 2.1 give a group structure on $\operatorname{Aut}(G)$. [step 2.1] ∎

```

## DEPENDENCY: thm-automorphisms-of-a-finite-cyclic-group

```markdown
---
id: thm-automorphisms-of-a-finite-cyclic-group
kind: theorem
title: ' $\operatorname{Aut}(C_n)\cong(\mathbb Z/n\mathbb Z)^\times$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-group-isomorphism-and-automorphism, thm-classification-of-cyclic-groups, thm-unit-criterion-modulo-n, lem-order-characterisation, thm-bezout-identity, lem-cyclic-subgroup-is-the-set-of-powers]
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
    - title: "J. S. Milne, Group Theory"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Statement

For every $n\ge1$,

$$\operatorname{Aut}(C_n)\cong(\mathbb Z/n)^\times.$$

If $C_n=\langle g\rangle$, the unit class $[a]$ corresponds to the automorphism $g\mapsto g^a$.

## Facts & Assumptions

**Given:** An integer $n\ge1$ and a cyclic group $C_n=\langle g\rangle$.

[L1] A cyclic group whose generator has finite order $n$ is isomorphic to $(\mathbb Z/n,+)$ ([[thm-classification-of-cyclic-groups]]).

[L2] A residue class modulo $n$ is a unit exactly when its representative is coprime to $n$ ([[thm-unit-criterion-modulo-n]]).

[L3] If $g$ has order $n$, then $g^k=1$ exactly when $n\mid k$ ([[lem-order-characterisation]]).

[L4] An automorphism is an isomorphism from a group to itself ([[def-group-isomorphism-and-automorphism]]).

[L5] If $\gcd(a,n)=1$, there are integers $u,v$ with $au+nv=1$ ([[thm-bezout-identity]]).

[L6] The cyclic subgroup generated by $g$ is exactly the set of integer powers of $g$ ([[lem-cyclic-subgroup-is-the-set-of-powers]]).

## Proof

**Proof technique:** direct.

1.1 By [L6] every element of $C_n$ is a power $g^k$, and a homomorphism $f$ satisfies $f(g^k)=f(g)^k$, so $f$ is determined by $f(g)$; writing $f(g)=g^a$, every endomorphism has the form $f_a(g^k)=g^{ak}$. By [L3], $f_a=f_b$ exactly when $a\equiv b\pmod n$, so the endomorphisms are indexed by the residue classes of $\mathbb Z/n$, which [L1] identifies with $C_n$ as an additive group. [L1, L3, L6, algebra]

1.2 The element $g^a$ generates $C_n$ exactly when $\gcd(a,n)=1$: [L5] gives $au+nv=1$, hence $g=(g^a)^u$, in one direction, while a common divisor greater than one makes every power of $g^a$ have exponent divisible by that divisor in the other. Hence $f_a$ is an automorphism exactly when $[a]$ is a unit by [L2] and [L4]. [L2, L3, L4, L5, algebra]

2.1 Since $f_a\circ f_b=f_{ab}$, the correspondence $[a]\mapsto f_a$ is a group homomorphism. Steps 1.1 and 1.2 make it bijective, so it is the claimed isomorphism. For $n=1$, both groups are trivial. [step 1.1, step 1.2, L4] ∎

```

## DEPENDENCY: cor-totient-at-one-and-at-a-prime

```markdown
---
id: cor-totient-at-one-and-at-a-prime
kind: corollary
title: "$\\varphi(1)=1$, and $\\varphi(p)=p-1$ for every prime $p$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-unit-criterion-modulo-n, def-prime, lem-prime-not-dividing-is-coprime, thm-standard-representatives-modulo-n, def-finite-cardinality, thm-subset-of-a-finite-set, def-unit-group-modulo-n-and-euler-totient]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "Mathematics LibreTexts, Euler's phi Function"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function"
    - title: "UW Oshkosh, Number Theory Notes 3"
      url: "https://www.uwosh.edu/faculty_staff/pennistd/ntn3.pdf"
pipeline_run: null
---

## Statement

Euler's totient satisfies $\varphi(1)=1$. If $p$ is prime
([[def-prime]]), then

$$\varphi(p)=p-1.$$

## Facts & Assumptions

**Given:** A prime integer $p$.

[F1] $\varphi(n)$ is the cardinality of the unit group of $\mathbb Z/n$ for positive $n$, and a class is a unit exactly when its representative is coprime to $n$ ([[def-unit-group-modulo-n-and-euler-totient]], [[thm-unit-criterion-modulo-n]]).

[L1] For a prime $p$, if $p\nmid a$ then $\gcd(p,a)=1$ ([[lem-prime-not-dividing-is-coprime]]).

[L2] The standard representatives modulo a positive $n$ are the unique integers $r$ with $0\le r<n$, and there are $n$ of them ([[thm-standard-representatives-modulo-n]], [[def-finite-cardinality]]).

[L3] A subset of a finite set is finite ([[thm-subset-of-a-finite-set]]).

[F2] A prime integer satisfies $p>1$ ([[def-prime]]).

## Proof

**Proof technique:** direct.

1.1 Modulo $1$ there is one class, and it is the multiplicative identity, hence a unit. Therefore $\varphi(1)=1$. [F1, L2]

1.2 Let $0\le r<p$. If $r=0$, then $p\mid r$, so $[r]_p$ is not a unit by the unit criterion. If $r>0$, then $p\nmid r$: otherwise $r=pk$ with $p>0$ and $r>0$, forcing $k\ge1$ and $r\ge p$, contrary to $r<p$. [F1, F2, L2, algebra]

2.1 For $0<r<p$, [L1] gives $\gcd(p,r)=1$, hence $\gcd(r,p)=1$, so $[r]_p$ is a unit by the unit criterion. Thus the units are exactly the classes with representatives $1,2,\ldots,p-1$. [step 1.2, F1, L1]

3.1 Translation by $1$ is a bijection from the natural $p-1$ onto the representatives $r$ with $0<r<p$. Hence that finite set, and therefore the unit group, has cardinality $p-1$. [step 2.1, L2, L3, algebra]

4.1 By [F1] and step 3.1, $\varphi(p)=p-1$; together with step 1.1 this proves both clauses. [step 1.1, step 3.1, F1] ∎

```

## DEPENDENCY: thm-internal-external-semidirect-product-equivalence

```markdown
---
id: thm-internal-external-semidirect-product-equivalence
kind: theorem
title: ' Recognition theorem: $G=NH$ with $N\trianglelefteq G$, $N\cap H=1$ exactly realises an external semidirect product'
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-internal-semidirect-product, thm-external-semidirect-product-is-a-group, prop-canonical-subgroups-of-an-external-semidirect-product, thm-conjugation-is-an-automorphism, def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: true
proof_strategy: iff
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Semidirect Products, Definition 3.1 and Theorem 4.1"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Statement

Let $N,H\le G$. The conditions

$$N\trianglelefteq G,\qquad G=NH,\qquad N\cap H=\{1\}$$

hold if and only if both of the following hold: conjugation $\alpha_h(n)=hnh^{-1}$ restricts to an action $\alpha:H\to\operatorname{Aut}(N)$, and the resulting map

$$\Phi:N\rtimes_\alpha H\longrightarrow G,\qquad (n,h)\longmapsto nh$$

is an isomorphism carrying the canonical factors onto $N$ and $H$.

The first clause of the right-hand side is what makes $N\rtimes_\alpha H$ defined at all: without normality of $N$, the map $\alpha_h$ need not send $N$ into $N$.

## Facts & Assumptions

**Given:** Subgroups $N,H$ of a group $G$.

[L1] An internal semidirect product satisfies $N\trianglelefteq G$, $G=NH$, and $N\cap H=\{1\}$ ([[def-internal-semidirect-product]]).

[L2] Conjugation is an automorphism; normality of $N$ makes conjugation by $H$ restrict to $N$ ([[thm-conjugation-is-an-automorphism]]).

[L3] The external semidirect product is a group ([[thm-external-semidirect-product-is-a-group]]).

[L4] Its canonical factors have precisely the normality, product, intersection, and conjugation properties stated above ([[prop-canonical-subgroups-of-an-external-semidirect-product]]).

[L5] An isomorphism is a bijective homomorphism ([[def-group-isomorphism-and-automorphism]]).

## Proof

**Proof technique:** iff.

1.1 [forward] Assume the three conditions in [L1]. By [L2], conjugation defines an action $\alpha:H\to\operatorname{Aut}(N)$, so the domain of $\Phi$ is a group by [L3]. [L1, L2, L3]

1.2 For $(n,h),(n',h')$ one has

$$\Phi((n,h)(n',h'))=n(hn'h^{-1})hh'=nhn'h'=\Phi(n,h)\Phi(n',h'),$$

so $\Phi$ is a homomorphism. It is surjective because $G=NH$. [step 1.1, L1, algebra]

2.1 If $nh=n'h'$, then $n^{-1}n'=hh'^{-1}\in N\cap H$, hence both sides are $1$; therefore $n=n'$ and $h=h'$. Thus $\Phi$ is injective, and step 1.2 makes it bijective and therefore an isomorphism by [L5]. [step 1.2, L1, L5, algebra]

3.1 [reverse] Conversely, assume conjugation restricts to $\alpha:H\to\operatorname{Aut}(N)$ and that $\Phi$ is such an isomorphism; the first assumption is what makes $N\rtimes_\alpha H$, and hence $\Phi$, defined. Transport the canonical-factor properties from [L4] through $\Phi$. The images are $N,H$, so the three conditions in [L1] hold. [L1, L4, L5] ∎

```

## DEPENDENCY: prop-semidirect-product-is-direct-iff-action-is-trivial

```markdown
---
id: prop-semidirect-product-is-direct-iff-action-is-trivial
kind: proposition
title: "The canonical semidirect decomposition is an internal direct product if and only if the defining action is trivial"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-canonical-subgroups-of-an-external-semidirect-product, def-external-direct-product-of-groups, def-normal-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: iff
verification:
  precheck: pass
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Semidirect Products"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Statement

The canonical factors of $N\rtimes_\alpha H$ form an internal direct product if and only if $\alpha_h=\operatorname{id}_N$ for every $h\in H$. In that case $N\rtimes_\alpha H$ is the external direct product $N\times H$.

## Facts & Assumptions

**Given:** An external semidirect product $N\rtimes_\alpha H$ with its canonical factors $\bar N$ and $\bar H$.

[L1] The canonical factors have trivial intersection, multiply to the whole group, and satisfy $(1,h)(n,1)(1,h)^{-1}=(\alpha_h(n),1)$ ([[prop-canonical-subgroups-of-an-external-semidirect-product]]).

[L2] The external direct product has coordinatewise multiplication ([[def-external-direct-product-of-groups]]).

[L3] A subgroup $M\le G$ is normal when $gMg^{-1}=M$ for every $g\in G$ ([[def-normal-subgroup]]).

## Proof

**Proof technique:** iff.

1.1 [reverse] Suppose the action is trivial. The semidirect law becomes $(n,h)(n',h')=(nn',hh')$, which is the direct-product law from [L2]. [L1, L2]

1.2 [forward] Suppose the canonical decomposition is an internal direct product, so $\bar H$ as well as $\bar N$ is normal. For $x\in\bar N$ and $y\in\bar H$, normality gives $xyx^{-1}y^{-1}\in\bar H$ and also $xyx^{-1}y^{-1}=x(yx^{-1}y^{-1})\in\bar N$. Thus this commutator lies in $\bar N\cap\bar H=\{1\}$ by [L1], so $x$ and $y$ commute. [L1, L3, algebra]

2.1 The conjugation formula in [L1] now gives $(\alpha_h(n),1)=(n,1)$ for every $n,h$. Hence every $\alpha_h$ is the identity. [step 1.2, L1] ∎

```

## DEPENDENCY: thm-order-of-element-in-direct-product

```markdown
---
id: thm-order-of-element-in-direct-product
kind: theorem
title: "If $g$ and $h$ have finite orders $m$ and $n$, then $\\iota(\\operatorname{ord}(g,h))=\\operatorname{lcm}(\\iota(m),\\iota(n))$ in $G\\times H$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-external-direct-product-is-a-group, def-order-in-a-group, lem-order-characterisation, def-lcm, thm-gcd-lcm-product, lem-nat-embeds-int, thm-induction-principle]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Sharifi, Abstract Algebra, direct products"
      url: "https://math.ucla.edu/~sharifi/algebra.pdf"
pipeline_run: null
---

## Statement

Let $\iota:\mathbb N\to\mathbb Z$ be the canonical embedding. If $g\in G$
and $h\in H$ have finite orders $m,n\ge1$, then in the external direct product

$$\iota(\operatorname{ord}(g,h))=\operatorname{lcm}(\iota(m),\iota(n)).$$

## Facts & Assumptions

**Given:** Groups $G,H$, elements $g\in G,h\in H$, and positive natural
numbers $m,n$ with $\operatorname{ord}(g)=m$ and $\operatorname{ord}(h)=n$.

[L1] The direct product is a group with componentwise multiplication
([[thm-external-direct-product-is-a-group]]).

[L2] If an element has finite order $r$, then for every natural $k$ its $k$th
power is the identity exactly when $\iota(r)\mid\iota(k)$; equivalently, $r$ is
the least positive natural exponent taking it to the identity
([[def-order-in-a-group]], [[lem-order-characterisation]]).

[L3] For positive $m,n$, the integer
$L=\operatorname{lcm}(\iota(m),\iota(n))$ is a positive common multiple of
$\iota(m)$ and $\iota(n)$, and it divides every common multiple. Thus
$L=\iota(\ell)$ for a unique natural $\ell\ge1$
([[def-lcm]], [[thm-gcd-lcm-product]], [[lem-nat-embeds-int]]).

[L4] Induction is valid for natural-number powers ([[thm-induction-principle]]).

## Proof

**Proof technique:** direct.

1.1 For every natural $k$, $(g,h)^k=(g^k,h^k)$: it holds at $k=0$, and the successor step follows by componentwise multiplication. [L1, L4, given]

2.1 Let $\ell$ be the natural from [L3]. Since $\iota(m)\mid\iota(\ell)$ and $\iota(n)\mid\iota(\ell)$, [L2] and step 1.1 give $(g,h)^\ell=(e_G,e_H)$. [step 1.1, L2, L3, given]

2.2 If $(g,h)^k=(e_G,e_H)$ for a positive natural $k$, then step 1.1 gives $g^k=e_G$ and $h^k=e_H$. Hence $\iota(m)\mid\iota(k)$ and $\iota(n)\mid\iota(k)$. [step 1.1, L2, given]

3.1 By [L3], the two divisibilities of step 2.2 imply $\iota(\ell)\mid\iota(k)$. As $\ell,k\ge1$, this forces $\ell\le k$: an integer quotient $q$ with $\iota(k)=q\iota(\ell)$ is positive and hence at least $1$. Thus $\ell$ is the least positive exponent sending $(g,h)$ to the identity. [step 2.1, step 2.2, L3, algebra]

4.1 The definition of element order gives $\operatorname{ord}(g,h)=\ell$. Applying $\iota$ and using [L3] gives the displayed equality. [step 3.1, L2, L3] ∎

```

## DEPENDENCY: thm-classification-of-cyclic-groups

```markdown
---
id: thm-classification-of-cyclic-groups
kind: theorem
title: "Every cyclic group is isomorphic to $(\\mathbb Z,+)$ or to $(\\mathbb Z/n,+)$ for its finite order $n\\ge1$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-generated-subgroup, lem-cyclic-subgroup-is-the-set-of-powers, def-order-in-a-group, lem-order-characterisation, def-group-homomorphism, lem-group-power-laws, def-group-isomorphism-and-automorphism, prop-integers-modulo-n-as-a-quotient-group]
justified_by: []
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Romyar Sharifi, Abstract Algebra"
      url: "https://math.ucla.edu/~sharifi/algebra.pdf"
pipeline_run: null
---

## Statement

If $G=\langle g\rangle$ is cyclic, then exactly one of the following applies:

- if $g$ has infinite order, $G\cong(\mathbb Z,+)$;
- if $g$ has finite order $n$, necessarily $n\ge1$, then $G\cong(\mathbb Z/n,+)$.

## Facts & Assumptions

**Given:** A group $G$ and an element $g\in G$ with $G=\langle g\rangle$.

[L1] A cyclic subgroup is precisely the set of all integer powers of its generator
([[lem-cyclic-subgroup-is-the-set-of-powers]]).

[L2] For finite order $n$, $g^k=e$ exactly when $n\mid k$, while for infinite
order no nonzero integer power of $g$ is the identity
([[lem-order-characterisation]]).

[L3] Integer powers satisfy $g^{r+s}=g^rg^s$ and
$g^{-s}=(g^s)^{-1}$; a bijective group homomorphism is a group isomorphism
([[lem-group-power-laws]], [[def-group-isomorphism-and-automorphism]]).

[L4] The additive quotient group $(\mathbb Z,+)/n\mathbb Z$ is the group $(\mathbb Z/n,+)$
([[prop-integers-modulo-n-as-a-quotient-group]]).

## Proof

**Proof technique:** direct.

1.1 Suppose first that $g$ has infinite order. The map $\phi:\mathbb Z\to G$, $r\mapsto g^r$, is a homomorphism by the power law in [L3]. If $g^r=g^s$, then $g^{r-s}=g^r(g^s)^{-1}=e$ by [L3], so [L2] forces $r=s$; it is surjective by [L1]. [L1, L2, L3, given]

1.2 Suppose instead that $g$ has finite order $n$. Then $n\ge1$ by the definition of element order, and $[r]\mapsto g^r$ defines a map $\bar\phi:\mathbb Z/n\to G$ because $[r]=[s]$ means $n\mid(r-s)$, so [L2] gives $g^{r-s}=e$ and [L3] gives $g^r=g^{r-s}g^s=g^s$. [L2, L3, L4, given]

2.1 Hence in the infinite-order case $\phi$ is an isomorphism $\mathbb Z\cong G$. [step 1.1, L3]

2.2 The map $\bar\phi$ is a homomorphism by the power law, is injective because $g^r=g^s$ gives $g^{r-s}=g^r(g^s)^{-1}=e$ by [L3] and then [L2] gives $n\mid(r-s)$, and is surjective by [L1]. [step 1.2, L1, L2, L3]

3.1 Thus $\bar\phi$ is an isomorphism $(\mathbb Z/n,+)\cong G$ in the finite-order case. [step 2.2, L3, L4]

4.1 Steps 2.1 and 3.1 give the asserted classification according as the order of $g$ is infinite or finite. [step 2.1, step 3.1] ∎

```

## DEPENDENCY: lem-distinct-normal-sylow-subgroups-commute

```markdown
---
id: lem-distinct-normal-sylow-subgroups-commute
kind: lemma
title: "Distinct normal Sylow subgroups centralize one another"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-sylow-p-subgroup, def-subgroup-commutator-and-lower-central-series, def-normal-subgroup, thm-lagrange]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Consequences of the Sylow Theorems, Sections 1-5"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/sylowapp.pdf"
pipeline_run: null
---

## Statement

Normal Sylow subgroups for distinct primes centralize one another. See [[def-sylow-p-subgroup]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be a finite group, let $p$ be prime, and write $|G|=p^a m$ with $a\in\mathbb N$ and $p\nmid m$. A subgroup $P\le G$ is a Sylow $p$-subgroup when $|P|=p^a$. Equivalently, its order is the largest power of $p$ dividing $|G|$. This is a property of a subgroup and does not presume that such a subgroup exists; existence is proved in thm-sylow-first-theorem. ([[def-sylow-p-subgroup]]).

[L2] For subgroups $A,B\le G$, their subgroup commutator is $$[A,B]=\langle [a,b]:a\in A,\ b\in B\rangle,$$ where $[a,b]=aba^{-1}b^{-1}$ (def-commutator-and-commutator-subgroup, def-generated-subgroup). The lower central series is $$\gamma_1(G)=G,\qquad \gamma_{r+1}(G)=[G,\gamma_r(G)]\quad(r\ge1).$$ Each $\gamma_r(G)$ is characteristic in $G$, and the series descends because $[G,N]\le N$ whenever $N\trianglelefteq G$. ([[def-subgroup-commutator-and-lower-central-series]]).

[L3] Let $G$ be a group and let $N\le G$ be a subgroup (def-subgroup). For $g\in G$, write $$gNg^{-1}:=\{gng^{-1}:n\in N\}.$$ The subgroup $N$ is normal in $G$ when $$gNg^{-1}=N\qquad\text{for every }g\in G.$$ In that case write $N\mathrel{\trianglelefteq}G$. Equivalently, every inner conjugation of $G$ maps $N$ onto itself. The connection with equality of the left and right cosets of def-coset is proved in thm-normal-subgroup-characterisations. ([[def-normal-subgroup]]).

[L4] Let $G$ be a finite group and $H\le G$. Then $$|G|=[G:H]\,|H|.$$ Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$, $|H|$ divides $|G|$. ([[thm-lagrange]]).

## Proof

**Proof technique:** direct.

1.1 For normal Sylow $p$- and $q$-subgroups with $p\ne q$, every commutator lies in their intersection. [L1, L2, L3, L4, given, algebra]

2.1 Lagrange makes that intersection trivial because its order divides coprime prime powers. This proves the stated claim. [step 1.1, given, algebra] ∎

```

## DEPENDENCY: cor-groups-of-order-p-squared-are-abelian

```markdown
---
id: cor-groups-of-order-p-squared-are-abelian
kind: corollary
title: "Every group of order $p^2$, for prime $p$, is abelian"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-nontrivial-center-of-a-finite-p-group, lem-cyclic-quotient-by-center-implies-abelian, cor-order-of-a-quotient-group, cor-prime-order-group-is-cyclic, def-finite-p-group, lem-subgroups-of-finite-p-groups-are-p-groups, lem-center-is-normal, thm-subset-of-a-finite-set]
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
    - title: "K. Conrad, Group Actions, Corollary 5.2"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/gpaction.pdf"
pipeline_run: null
---

## Statement

If $p$ is prime and $G$ is a group of order $p^2$, then $G$ is abelian.

## Facts & Assumptions

**Given:** A prime $p$ and a finite group $G$ with $|G|=p^2$.

[L1] A nontrivial finite $p$-group has nontrivial center ([[thm-nontrivial-center-of-a-finite-p-group]]).

[L2] If $G/Z(G)$ is cyclic, then $G$ is abelian ([[lem-cyclic-quotient-by-center-implies-abelian]]).

[L3] For finite $G$, $|G/Z(G)|=|G|/|Z(G)|$ ([[cor-order-of-a-quotient-group]]).

[L4] A group of prime order is cyclic ([[cor-prime-order-group-is-cyclic]]).

[L5] A group of order $p^2$ is a finite $p$-group ([[def-finite-p-group]]).

[L6] Every subgroup of a finite $p$-group has prime-power order ([[lem-subgroups-of-finite-p-groups-are-p-groups]]).

[L7] The center $Z(G)$ is a normal subgroup, hence in particular a subgroup, of $G$ ([[lem-center-is-normal]]).

[L8] A finite subset with the same cardinality as its ambient finite set is the whole set ([[thm-subset-of-a-finite-set]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L7], $Z(G)$ is a nontrivial subgroup of $G$; [L5] and [L6] therefore show that it has order $p$ or $p^2$. [L1, L5, L6, L7]

2.1 If $|Z(G)|=p^2=|G|$, then [L8] gives $Z(G)=G$, so $G$ is abelian. If $|Z(G)|=p$, then [L3] gives $|G/Z(G)|=p$, so [L4] makes $G/Z(G)$ cyclic. [step 1.1, L3, L4, L8]

3.1 In the second case [L2] makes $G$ abelian, and the first case already did so. Hence every group of order $p^2$ is abelian. [step 2.1, L2] ∎

```

## DEPENDENCY: thm-internal-direct-product-recognition

```markdown
---
id: thm-internal-direct-product-recognition
kind: theorem
title: "Internal direct products are external direct products, equivalently every element has a unique factorisation"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [def-internal-direct-product-of-subgroups, thm-external-direct-product-is-a-group, def-group-homomorphism, thm-group-homomorphism-injective-iff-trivial-kernel, lem-product-with-normal-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Decomposition of Finite Abelian Groups, §§1-4"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/finite-abelian.pdf"
    - title: "Richard Elman, Lectures on Abstract Algebra, Ch. 14"
      url: "https://www.math.ucla.edu/~rse/algebra_book.pdf"
pipeline_run: null
---
## Statement

Let $N_0,\ldots,N_{r-1}\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\in G$ has a unique expression $g=n_0\cdots n_{r-1}$ with $n_i\in N_i$; and the multiplication map $\mu:\prod_{i<r}N_i\to G$ is an isomorphism. These statements include the empty family and the one-factor case.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[L1] Let $G$ be a group and let $N_0,\ldots,N_{r-1}$ be normal subgroups, where $r\in\mathbb N$. They form an **internal direct product** when they generate $G$ and, for each $i<r$, $$N_i\cap\langle N_j:j<r,\ j\ne i\rangle=\{e\}.$$ The empty family is an internal direct product of the trivial group. For two subgroups of an abelian group this says $G=HK$ and $H\cap K=\{e\}$; in additive notation one writes $G=H\oplus K$. Normal subgroups and generated subgroups are those of def-normal-subgroup and def-generated-subgroup, and the comparison product is def-external-direct-product-of-groups. ([[def-internal-direct-product-of-subgroups]]).

[L2] For groups $G$ and $H$, the componentwise operation of def-external-direct-product-of-groups makes $G\times H$ a group. Its identity is $(e_G,e_H)$, and $$(g,h)^{-1}=(g^{-1},h^{-1}).$$ Moreover the coordinate maps $\pi_G(g,h)=g$ and $\pi_H(g,h)=h$ are group homomorphisms. ([[thm-external-direct-product-is-a-group]]).

[L3] Let $(M,\cdot,e)$ and $(M',\cdot',e')$ be monoids (def-semigroup-and-monoid). A **monoid homomorphism** from $M$ to $M'$ is a function $f : M \to M'$ such that - **(H1)** $f(x \cdot y) = f(x) \cdot' f(y)$ for all $x, y \in M$; - **(H2)** $f(e) = e'$. Let $G$ and $G'$ be groups (def-group). A **group homomorphism** from $G$ to $G'$ is a function $f : G \to G'$ satisfying (H1) alone: $$f(xy) \;=\; f(x)\, f(y) \qquad \text{for all } x, y \in G .$$ Condition (H2) is not imposed for groups because it follows: a group homomorphism automatically satisfies $f(e) = e'$ and $f(x^{-1}) = f(x)^{-1}$ (lem-group-homomorphism-basic-properties). For monoids it does **not** follow and must be assumed, which is why the two definitions differ. A homomorphism from a structure to itself is an **endomorphism**. The identity map of $M$ is a monoid homomorphism, and a composite of monoid homomorphisms is one, since $(g \circ f)(xy) = g(f(x)f(y)) = g(f(x))\,g(f(y))$ and $(g \circ f)(e) = g(e') = e''$; the same computation, without the second clause, shows a composite of group homomorphisms is a group homomorphism. ([[def-group-homomorphism]]).

[L4] A group homomorphism is injective if and only if its kernel is trivial. For a group homomorphism $f:G\to H$, $f$ is injective exactly when $\ker f=\{e_G\}$. ([[thm-group-homomorphism-injective-iff-trivial-kernel]]).

[L5] If $H\le G$ and $N\mathrel{\trianglelefteq}G$, then $HN$ is a subgroup and $H\cap N\mathrel{\trianglelefteq}H$. Here $HN:=\{hn:h\in H,\ n\in N\}$. ([[lem-product-with-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 The internal intersection condition gives $N_i\cap N_j=\{e\}$ for $i\ne j$. Unique factorisation gives the same conclusion, since an element of $N_i\cap N_j$ has expressions supported in either coordinate. In either case normality puts $[N_i,N_j]$ inside $N_i\cap N_j$, so distinct factors commute and the multiplication map $\mu((n_i))=n_0\cdots n_{r-1}$ is a homomorphism. [given, L1, L2, L3]

1.2 Conversely, suppose that $\mu$ is an isomorphism. Coordinate subgroups in the external product commute, so their images $N_i$ commute, and surjectivity says that the factors generate $G$. If $x\in N_i\cap\langle N_j:j\ne i\rangle$, the commuting factors express $x$ as an ordered product of elements from the other $N_j$. The tuple supported at $i$ and this tuple supported away from $i$ have the same image, so injectivity gives $x=e$. Hence the factors form an internal direct product. [given, L1, L2, L3, L4, L5]

2.1 Under the internal-product condition, the image of $\mu$ is the subgroup generated by the factors, hence is all of $G$. If $\mu((n_i))=e$, then each $n_i$ is the inverse of a product of the other factors and so lies in $N_i\cap\langle N_j:j\ne i\rangle$; therefore every $n_i=e$. Thus $\mu$ is an isomorphism. [step 1.1, L1, L4, L5]

2.2 Under unique factorisation, every element has exactly one preimage under the homomorphism $\mu$. Thus $\mu$ is bijective and hence is an isomorphism. [step 1.1, L3, L4]

3.1 For the empty family, each condition says that $G$ is trivial. For one factor, each says that $N_0=G$, and the multiplication map is then the identity after identifying the one-fold product with $N_0$. [given, L1, L2] ∎

```
