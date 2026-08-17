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
label: n-5

run: frontier-15
role: refuter
label: n-5
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

## ITEM: thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup

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

### Recorded proof contract for thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-fitting-subgroup-of-a-finite-group",
   "source_section": "Definition",
   "quote": "For a finite group $G$, the **Fitting subgroup** is $$F(G):=\\prod_{p\\mid |G|}O_p(G),$$ the product of its $p$-cores ([[def-p-core-of-a-finite-group]]). If $A,B\\trianglelefteq G$, then $AB$ is a subgroup, is normal because $gABg^{-1}=AB$, and satisfies $AB=BA$: indeed $ab=(aba^{-1})a\\in BA$, and the reverse inclusion is symmetric. Induction therefore shows that the finite product of the normal factors $O_p(G)$ is a normal subgroup independent of their order. For the trivial group the product is empty and equals $1$.",
   "uses": [
    "1.1",
    "3.1",
    "4.1"
   ]
  },
  {
   "fact": "L2",
   "source": "lem-finite-nilpotence-via-normal-sylow-subgroups",
   "source_section": "Statement",
   "quote": "For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; and $G$ is the internal direct product of its Sylow subgroups. See [[thm-normalizer-condition-for-finite-nilpotent-groups]].",
   "uses": [
    "1.1",
    "2.1",
    "3.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-internal-direct-product-recognition",
   "source_section": "Statement",
   "quote": "Let $N_0,\\ldots,N_{r-1}\\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\\in G$ has a unique expression $g=n_0\\cdots n_{r-1}$ with $n_i\\in N_i$; and the multiplication map $\\mu:\\prod_{i<r}N_i\\to G$ is an isomorphism. These statements include the empty family and the one-factor case.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "lem-characteristic-subgroup-of-a-normal-subgroup-is-normal",
   "source_section": "Statement",
   "quote": "If $K$ is characteristic in $N$ and $N\\trianglelefteq G$, then $K\\trianglelefteq G$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L5",
   "source": "def-p-core-of-a-finite-group",
   "source_section": "Definition",
   "quote": "For a finite group $G$ and a prime $p$, the **$p$-core** $O_p(G)$ is the subgroup generated by all normal $p$-subgroups of $G$. There are finitely many such subgroups. If $A$ and $B$ are two of them, then $AB$ is a subgroup by [[lem-product-with-normal-subgroup]] and is normal because $gABg^{-1}=AB$ for every $g\\in G$. For a fixed $ab\\in AB$, the fibres of the multiplication map $A\\times B\\to AB$ are exactly the pairs $(ax,x^{-1}b)$ with $x\\in A\\cap B$, so\n$$\n|AB|=\\frac{|A||B|}{|A\\cap B|}.\n$$\nLagrange's theorem [[thm-lagrange]] makes $|A\\cap B|$ a power of $p$, and therefore $AB$ is again a normal $p$-subgroup. Induction shows that the product of all normal $p$-subgroups is a normal $p$-subgroup. It contains every such subgroup, so it is the unique largest normal $p$-subgroup; this product is $O_p(G)$.",
   "uses": [
    "1.1",
    "2.1"
   ]
  },
  {
   "fact": "L6",
   "source": "thm-sylow-second-theorem",
   "source_section": "Statement",
   "quote": "Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\\le G$ be a $p$-subgroup. There is $g\\in G$ with $H\\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. See [[thm-sylow-first-theorem]].",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L7",
   "source": "thm-lagrange",
   "source_section": "Statement",
   "quote": "Let $G$ be a finite group and $H\\le G$. Then\n\n$$|G|=[G:H]\\,|H|.$$\n\nConsequently, under the canonical embedding $\\iota:\\mathbb N\\to\\mathbb Z$,\n$\\iota(|H|)$ divides $\\iota(|G|)$.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "For distinct primes $p$ and $q$, normality puts every commutator of an element of $O_p(G)$ with an element of $O_q(G)$ in $O_p(G)\\cap O_q(G)$. By [L7], the order of this intersection divides powers of both $p$ and $q$, so the intersection is trivial and the two $p$-cores centralize one another. If a product $\\prod_p x_p$ with $x_p\\in O_p(G)$ equals $1$, then for each $p$ the element $x_p$ lies both in the $p$-group $O_p(G)$ and in the commuting product of the other prime-power groups; its order divides two coprime numbers and is therefore $1$. Thus product expressions are unique, so [L3] identifies $F(G)$ with the internal direct product of the $p$-cores. The direct-product order shows that $O_p(G)$ is the Sylow $p$-subgroup of $F(G)$; [L2] makes $F(G)$ nilpotent, and [L1] gives its normality in $G$.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L2",
    "L3",
    "L5",
    "L7",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "If $N\\trianglelefteq G$ is nilpotent, [L2] makes each Sylow subgroup normal in $N$, and conjugacy [L6] makes it unique. Automorphisms preserve orders, so this unique Sylow subgroup is characteristic in $N$; [L4] makes it normal in $G$, and the maximality clause [L5] puts it in the corresponding $p$-core.",
   "step": "2.1",
   "inputs": [
    "L2",
    "L4",
    "L5",
    "L6",
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "By [L2], $N$ is the product of its Sylow subgroups, and step 2.1 puts every factor in the corresponding $p$-core. Hence $N\\le F(G)$.",
   "step": "3.1",
   "inputs": [
    "L1",
    "L2",
    "step 2.1",
    "given"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "For $G=1$ the family of $p$-cores is empty and $F(G)=1$, which is nilpotent and contains every normal nilpotent subgroup. This proves the stated claim.",
   "step": "4.1",
   "inputs": [
    "L1",
    "step 1.1",
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
   "status": "checked",
   "evidence": "Step 4.1 checks $G=1$: the family of $p$-cores is empty, $F(G)=1$, and the nilpotence and maximality clauses hold."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "The Fitting subgroup is nilpotent and is the largest normal nilpotent subgroup of a finite group: the claim “For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Step 4.1 explicitly treats the one-element group and its empty product of $p$-cores."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Step 4.1 checks the collapsed trivial-group case, where the only normal nilpotent subgroup is $1=F(G)$."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "The Fitting subgroup is nilpotent and is the largest normal nilpotent subgroup of a finite group: the claim “For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "The Fitting subgroup is nilpotent and is the largest normal nilpotent subgroup of a finite group: the claim “For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The Fitting subgroup is nilpotent and is the largest normal nilpotent subgroup of a finite group: the claim “For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The Fitting subgroup is nilpotent and is the largest normal nilpotent subgroup of a finite group: the claim “For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: lem-frattini-subgroup-nongenerator-characterization

```markdown
---
id: lem-frattini-subgroup-nongenerator-characterization
kind: lemma
title: "The Frattini subgroup consists exactly of the nongenerators of a finite group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-frattini-subgroup-of-a-finite-group, def-generated-subgroup]
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

For a finite group $G$, an element $x$ lies in $\Phi(G)$ if and only if, for every subset $S\subseteq G$, $\langle S,x\rangle=G$ implies $\langle S\rangle=G$. See [[def-frattini-subgroup-of-a-finite-group]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For a finite group $G$, the Frattini subgroup is $$\Phi(G):=\bigcap\{M\le G:M\text{ is maximal proper}\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\Phi(1)=1$. ([[def-frattini-subgroup-of-a-finite-group]]).

[L2] For a subset $S$ of a group $G$, the generated subgroup is $$\langle S\rangle:=\bigcap\{H:H\le G\text{ and }S\subseteq H\},$$ the smallest subgroup of $G$ containing $S$. ([[def-generated-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 If $x\notin\Phi(G)$, a maximal subgroup omitting $x$ shows that adjoining $x$ can enlarge a generating set. [L1, L2, given, algebra]

2.1 Conversely, if $\langle S,x\rangle=G$ while $\langle S\rangle\ne G$, extend the latter finite subgroup to a maximal subgroup; it contains $S$ but cannot contain $x$. [step 1.1, given, algebra]

3.1 We treat the trivial group, whose empty intersection convention gives $\Phi(1)=1$. This proves the stated claim. [step 2.1, given, algebra] ∎

```

### Recorded proof contract for lem-frattini-subgroup-nongenerator-characterization

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-frattini-subgroup-of-a-finite-group",
   "source_section": "Definition",
   "quote": "For a finite group $G$, the **Frattini subgroup** is $$\\Phi(G):=\\bigcap\\{M\\le G:M\\text{ is maximal proper}\\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\\Phi(1)=1$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
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
   "claim": "If $x\\notin\\Phi(G)$, a maximal subgroup omitting $x$ shows that adjoining $x$ can enlarge a generating set.",
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
   "claim": "Conversely, if $\\langle S,x\\rangle=G$ while $\\langle S\\rangle\\ne G$, extend the latter finite subgroup to a maximal subgroup; it contains $S$ but cannot contain $x$.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "We treat the trivial group, whose empty intersection convention gives $\\Phi(1)=1$. This proves the stated claim.",
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
   "evidence": "The Frattini subgroup consists exactly of the nongenerators of a finite group: the empty-object specialization for “For a finite group $G$, an element $x$ lies in $\\Phi(G)$ if and only if, for every subset $S\\subseteq G$, $\\langle S,x\\rangle=G$ implies $\\langle S\\rangle=G$.” is resolved in step 3.1: “We treat the trivial group, whose empty intersection convention gives $\\Phi(1)=1$. This proves the stated claim.”."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "The Frattini subgroup consists exactly of the nongenerators of a finite group: the zero or trivial specialization for “For a finite group $G$, an element $x$ lies in $\\Phi(G)$ if and only if, for every subset $S\\subseteq G$, $\\langle S,x\\rangle=G$ implies $\\langle S\\rangle=G$.” is resolved in step 3.1: “We treat the trivial group, whose empty intersection convention gives $\\Phi(1)=1$. This proves the stated claim.”."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "The Frattini subgroup consists exactly of the nongenerators of a finite group: the claim “For a finite group $G$, an element $x$ lies in $\\Phi(G)$ if and only if, for every subset $S\\subseteq G$, $\\langle S,x\\rangle=G$ implies $\\langle S\\rangle=G$.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The Frattini subgroup consists exactly of the nongenerators of a finite group: the collapsed or coincident-input case admitted by the hypotheses for “For a finite group $G$, an element $x$ lies in $\\Phi(G)$ if and only if, for every subset $S\\subseteq G$, $\\langle S,x\\rangle=G$ implies $\\langle S\\rangle=G$.” is resolved in step 3.1: “We treat the trivial group, whose empty intersection convention gives $\\Phi(1)=1$. This proves the stated claim.”."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "The Frattini subgroup consists exactly of the nongenerators of a finite group: the claim “For a finite group $G$, an element $x$ lies in $\\Phi(G)$ if and only if, for every subset $S\\subseteq G$, $\\langle S,x\\rangle=G$ implies $\\langle S\\rangle=G$.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "The Frattini subgroup consists exactly of the nongenerators of a finite group: the nonemptiness condition for the subgroup, chain, or Zorn selection for “For a finite group $G$, an element $x$ lies in $\\Phi(G)$ if and only if, for every subset $S\\subseteq G$, $\\langle S,x\\rangle=G$ implies $\\langle S\\rangle=G$.” is resolved in step 3.1: “We treat the trivial group, whose empty intersection convention gives $\\Phi(1)=1$. This proves the stated claim.”."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "The Frattini subgroup consists exactly of the nongenerators of a finite group: the forward implication of “For a finite group $G$, an element $x$ lies in $\\Phi(G)$ if and only if, for every subset $S\\subseteq G$, $\\langle S,x\\rangle=G$ implies $\\langle S\\rangle=G$.” is established beginning at step 1.1; its first derived assertion is “If $x\\notin\\Phi(G)$, a maximal subgroup omitting $x$ shows that adjoining $x$ can enlarge a generating set.”."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "The Frattini subgroup consists exactly of the nongenerators of a finite group: the reverse implication of “For a finite group $G$, an element $x$ lies in $\\Phi(G)$ if and only if, for every subset $S\\subseteq G$, $\\langle S,x\\rangle=G$ implies $\\langle S\\rangle=G$.” is completed by step 3.1: “We treat the trivial group, whose empty intersection convention gives $\\Phi(1)=1$. This proves the stated claim.”."
  }
 ],
 "finite_smoke": []
}
```

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

---

# DEPENDENCY TEXT — the cited items, title and claim section only

## DEPENDENCY: def-fitting-subgroup-of-a-finite-group

```markdown
title: "The Fitting subgroup $F(G)=\\prod_p O_p(G)$ of a finite group"

## Definition
For a finite group $G$, the **Fitting subgroup** is $$F(G):=\prod_{p\mid |G|}O_p(G),$$ the product of its $p$-cores ([[def-p-core-of-a-finite-group]]). If $A,B\trianglelefteq G$, then $AB$ is a subgroup, is normal because $gABg^{-1}=AB$, and satisfies $AB=BA$: indeed $ab=(aba^{-1})a\in BA$, and the reverse inclusion is symmetric. Induction therefore shows that the finite product of the normal factors $O_p(G)$ is a normal subgroup independent of their order. For the trivial group the product is empty and equals $1$.
```

## DEPENDENCY: def-p-core-of-a-finite-group

```markdown
title: "The $p$-core $O_p(G)$ as the largest normal $p$-subgroup"

## Definition
For a finite group $G$ and a prime $p$, the **$p$-core** $O_p(G)$ is the subgroup generated by all normal $p$-subgroups of $G$. There are finitely many such subgroups. If $A$ and $B$ are two of them, then $AB$ is a subgroup by [[lem-product-with-normal-subgroup]] and is normal because $gABg^{-1}=AB$ for every $g\in G$. For a fixed $ab\in AB$, the fibres of the multiplication map $A\times B\to AB$ are exactly the pairs $(ax,x^{-1}b)$ with $x\in A\cap B$, so
$$
|AB|=\frac{|A||B|}{|A\cap B|}.
$$
Lagrange's theorem [[thm-lagrange]] makes $|A\cap B|$ a power of $p$, and therefore $AB$ is again a normal $p$-subgroup. Induction shows that the product of all normal $p$-subgroups is a normal $p$-subgroup. It contains every such subgroup, so it is the unique largest normal $p$-subgroup; this product is $O_p(G)$.
```

## DEPENDENCY: lem-finite-nilpotence-via-normal-sylow-subgroups

```markdown
title: "A finite group is nilpotent if and only if all Sylow subgroups are normal, if and only if it is their internal direct product"

## Statement
For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; and $G$ is the internal direct product of its Sylow subgroups. See [[thm-normalizer-condition-for-finite-nilpotent-groups]].
```

## DEPENDENCY: thm-internal-direct-product-recognition

```markdown
title: "Internal direct products are external direct products, equivalently every element has a unique factorisation"

## Statement
Let $N_0,\ldots,N_{r-1}\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\in G$ has a unique expression $g=n_0\cdots n_{r-1}$ with $n_i\in N_i$; and the multiplication map $\mu:\prod_{i<r}N_i\to G$ is an isomorphism. These statements include the empty family and the one-factor case.
```

## DEPENDENCY: thm-sylow-second-theorem

```markdown
title: "Sylow II: every $p$-subgroup lies in a conjugate of any Sylow $p$-subgroup, and the Sylow $p$-subgroups form a single conjugacy class"

## Statement
Let $G$ be finite, let $P$ be a Sylow $p$-subgroup, and let $H\le G$ be a $p$-subgroup. There is $g\in G$ with $H\le gPg^{-1}$. In particular, for every Sylow $p$-subgroup $Q$ there is $g\in G$ with $Q=gPg^{-1}$, so the Sylow $p$-subgroups form one conjugacy class. See [[thm-sylow-first-theorem]].
```

## DEPENDENCY: lem-characteristic-subgroup-of-a-normal-subgroup-is-normal

```markdown
title: "If $K$ is characteristic in $N$ and $N$ is normal in $G$, then $K$ is normal in $G$"

## Statement
If $K$ is characteristic in $N$ and $N\trianglelefteq G$, then $K\trianglelefteq G$.
```

## DEPENDENCY: thm-lagrange

```markdown
title: "Lagrange's theorem: $|G|=[G:H]|H|$ for every subgroup $H$ of a finite group $G$"

## Statement
Let $G$ be a finite group and $H\le G$. Then

$$|G|=[G:H]\,|H|.$$

Consequently, under the canonical embedding $\iota:\mathbb N\to\mathbb Z$,
$\iota(|H|)$ divides $\iota(|G|)$.
```

## DEPENDENCY: def-frattini-subgroup-of-a-finite-group

```markdown
title: "The Frattini subgroup $\\Phi(G)$ as the intersection of the maximal subgroups of a finite group"

## Definition
For a finite group $G$, the **Frattini subgroup** is $$\Phi(G):=\bigcap\{M\le G:M\text{ is maximal proper}\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\Phi(1)=1$.
```

## DEPENDENCY: def-generated-subgroup

```markdown
title: "The subgroup $\\langle S \\rangle$ generated by a subset, the cyclic subgroup $\\langle g \\rangle$, and cyclic groups"

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
```

## DEPENDENCY: thm-frattini-argument

```markdown
title: "Frattini argument: if $N\\trianglelefteq G$ and $P$ is Sylow in $N$, then $G=N N_G(P)$"

## Statement
If $N\trianglelefteq G$ is finite and $P$ is a Sylow $p$-subgroup of $N$, then $$G=N N_G(P).$$ See [[thm-sylow-second-theorem]].
```

## DEPENDENCY: thm-correspondence-theorem-groups

```markdown
title: 'Correspondence theorem: subgroups of $G/N$ correspond to subgroups of $G$ containing $N$, with normality preserved'

## Statement
Correspondence theorem: subgroups of $G/N$ correspond to subgroups of $G$ containing $N$, with normality preserved.

For $N\mathrel{\trianglelefteq}G$, the maps $H\mapsto H/N$ and
$K\mapsto\pi^{-1}(K)$ are inverse inclusion-preserving bijections between
subgroups $H$ with $N\le H\le G$ and subgroups $K\le G/N$; they preserve
normality.
```

## DEPENDENCY: thm-subgroups-quotients-and-finite-products-of-nilpotent-groups

```markdown
title: "Subgroups, quotients, and finite direct products of nilpotent groups are nilpotent"

## Statement
Every subgroup and every quotient of a nilpotent group is nilpotent. Every finite direct product of nilpotent groups is nilpotent; the class of a subgroup or quotient is at most the class of the original group, and the class of a nonempty finite product is at most the maximum of the factor classes. The empty product is the trivial group of class zero.
```
