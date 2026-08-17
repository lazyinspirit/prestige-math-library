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
label: step9-rr-abel

run: frontier-15
role: refuter
label: step9-rr-abel
# Risk-review refutation — 1 high/critical-tier items
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

## ITEM: lem-nontrivial-normal-subgroup-of-a-solvable-group-has-an-abelian-normal-subgroup

```markdown
---
id: lem-nontrivial-normal-subgroup-of-a-solvable-group-has-an-abelian-normal-subgroup
kind: lemma
title: "A nontrivial normal subgroup of a solvable group contains a nontrivial abelian subgroup normal in the whole group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-derived-series-solvable-group-and-derived-length, thm-subgroups-and-quotients-of-solvable-groups-are-solvable, thm-derived-subgroup-is-characteristic-and-abelianization-is-universal, lem-characteristic-subgroups-are-normal-and-characteristic-is-transitive, lem-characteristic-subgroup-of-a-normal-subgroup-is-normal, thm-quotient-abelian-iff-contains-commutator-subgroup, def-normal-subgroup]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory, Theorem 2.13 (the claim opening its proof)"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
pipeline_run: null
---

## Statement

Let $Q$ be a solvable group and let $N\trianglelefteq Q$ with $N\ne1$. Then $N$
contains a subgroup $A\ne1$ that is abelian and normal in $Q$.

## Facts & Assumptions

**Given:** A solvable group $Q$ and a normal subgroup $N\trianglelefteq Q$ with $N\ne1$.

[L1] The derived series of a group $N$ is $N^{(0)}=N$, $N^{(r+1)}=[N^{(r)},N^{(r)}]$; $N$ is solvable when $N^{(n)}=1$ for some $n\in\mathbb N$, and its derived length is the least such $n$. The trivial group has derived length $0$ ([[def-derived-series-solvable-group-and-derived-length]]).

[L2] Every subgroup and every quotient of a solvable group is solvable; no finiteness hypothesis is required ([[thm-subgroups-and-quotients-of-solvable-groups-are-solvable]]).

[L3] For every group $G$, the derived subgroup $G'=[G,G]$ is characteristic, hence normal ([[thm-derived-subgroup-is-characteristic-and-abelianization-is-universal]]).

[L4] If $K\operatorname{char}H$ and $H\operatorname{char}G$, then $K\operatorname{char}G$ ([[lem-characteristic-subgroups-are-normal-and-characteristic-is-transitive]]).

[L5] If $K$ is characteristic in $N$ and $N\trianglelefteq G$, then $K\trianglelefteq G$ ([[lem-characteristic-subgroup-of-a-normal-subgroup-is-normal]]).

[L6] Let $N\trianglelefteq G$. Then $G/N$ is abelian if and only if $[G,G]\subseteq N$ ([[thm-quotient-abelian-iff-contains-commutator-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 $N$ is a subgroup of the solvable group $Q$, so $N$ is solvable by [L2]. Let $n$ be its derived length, so $N^{(n)}=1$ and $N^{(r)}\ne1$ for $r<n$ by the leastness in [L1]. Since $N\ne1$ and the trivial group is the only group of derived length $0$, we have $n\ge1$. [L1, L2, given]

2.1 Put $A:=N^{(n-1)}$. Then $A\ne1$ by the leastness in step 1.1, and $A\le N$ because each term of the derived series lies in the preceding one by [L1]. [L1, step 1.1]

2.2 $[A,A]=N^{(n)}=1$ by [L1] and step 1.1, so $A/1$ is abelian by [L6] applied to the trivial normal subgroup of $A$; that is, $A$ is abelian. [L1, L6, step 1.1]

3.1 Each term of the derived series is characteristic in the preceding term by [L3], so iterating [L4] along $N^{(n-1)}\operatorname{char}\cdots\operatorname{char}N^{(0)}=N$ makes $A$ characteristic in $N$. [L1, L3, L4, step 2.1]

4.1 $A$ is characteristic in $N$ and $N\trianglelefteq Q$, so $A\trianglelefteq Q$ by [L5]. With steps 2.1 and 2.2, $A$ is a nontrivial abelian subgroup of $N$ that is normal in $Q$. This proves the stated claim. [L5, given, step 2.1, step 2.2, step 3.1] ∎

```

### Recorded proof contract for lem-nontrivial-normal-subgroup-of-a-solvable-group-has-an-abelian-normal-subgroup

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-derived-series-solvable-group-and-derived-length",
   "source_section": "Definition",
   "quote": "The **derived series** of a group $G$ is defined recursively by\n$$G^{(0)}=G,\\qquad G^{(r+1)}=[G^{(r)},G^{(r)}].$$\nEach term is characteristic, hence normal, in the preceding term by [[thm-derived-subgroup-is-characteristic-and-abelianization-is-universal]].\n\nThe group $G$ is **solvable** if $G^{(n)}=1$ for some $n\\in\\mathbb N$. Its **derived length** is the least such $n$. This least index exists because the set of terminating indices is a nonempty subset of $\\mathbb N$ and every such subset has a least element ([[thm-well-ordering-principle]]). Thus the trivial group has derived length $0$, and a nontrivial abelian group has derived length $1$.",
   "uses": [
    "1.1",
    "2.1",
    "2.2",
    "3.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-subgroups-and-quotients-of-solvable-groups-are-solvable",
   "source_section": "Statement",
   "quote": "Every subgroup and every quotient of a solvable group is solvable. No finiteness hypothesis is required.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-derived-subgroup-is-characteristic-and-abelianization-is-universal",
   "source_section": "Statement",
   "quote": "For every group $G$, the derived subgroup $G'=[G,G]$ is characteristic, hence normal. The quotient $G^{\\mathrm{ab}}:=G/G'$ is abelian and has the following universal property: for every homomorphism $f:G\\to A$ into an abelian group, there is a unique homomorphism $\\bar f:G^{\\mathrm{ab}}\\to A$ with $f=\\bar f\\circ q$, where $q:G\\to G/G'$ is the quotient map.",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L4",
   "source": "lem-characteristic-subgroups-are-normal-and-characteristic-is-transitive",
   "source_section": "Statement",
   "quote": "If $H\\operatorname{char}G$, then $H\\trianglelefteq G$. If $K\\operatorname{char}H$ and $H\\operatorname{char}G$, then $K\\operatorname{char}G$.",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L5",
   "source": "lem-characteristic-subgroup-of-a-normal-subgroup-is-normal",
   "source_section": "Statement",
   "quote": "If $K$ is characteristic in $N$ and $N\\trianglelefteq G$, then $K\\trianglelefteq G$.",
   "uses": [
    "4.1"
   ]
  },
  {
   "fact": "L6",
   "source": "thm-quotient-abelian-iff-contains-commutator-subgroup",
   "source_section": "Statement",
   "quote": "Let $N\\mathrel{\\trianglelefteq}G$. Then $G/N$ is abelian if and only if\n\n$$[G,G]\\subseteq N.$$",
   "uses": [
    "2.2"
   ]
  }
 ],
 "derivations": [
  {
   "id": "lem-nontrivial-normal-1-1",
   "claim": "N inherits solvability from Q, and N nontrivial forces its derived length n to satisfy n >= 1.",
   "step": "1.1",
   "inputs": [
    "L2",
    "L1",
    "given"
   ]
  },
  {
   "id": "lem-nontrivial-normal-2-1",
   "claim": "A := N^{(n-1)} is defined, nontrivial by leastness of n, and contained in N.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L1",
    "given"
   ]
  },
  {
   "id": "lem-nontrivial-normal-2-2",
   "claim": "A is abelian, because [A,A] = N^{(n)} = 1.",
   "step": "2.2",
   "inputs": [
    "L1",
    "step 1.1",
    "L6",
    "given"
   ]
  },
  {
   "id": "lem-nontrivial-normal-3-1",
   "claim": "A is characteristic in N, by iterating transitivity along the derived series.",
   "step": "3.1",
   "inputs": [
    "L3",
    "L4",
    "L1",
    "step 2.1",
    "given"
   ]
  },
  {
   "id": "lem-nontrivial-normal-4-1",
   "claim": "A characteristic in N and N normal in Q give A normal in Q, completing the required nontrivial abelian normal subgroup inside N.",
   "step": "4.1",
   "inputs": [
    "L5",
    "step 2.1",
    "step 2.2",
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
   "reason": "The derived series is a sequence indexed by $\\mathbb N$ and every term is a subgroup, never an empty object; no sum, product or family over a possibly empty index set occurs."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Derived length $0$ is exactly the trivial group, so it is the case the hypothesis $N\\ne1$ excludes. Step 1.1 makes that exclusion explicit and is what licenses $n\\ge1$, without which $N^{(n-1)}$ would have no index."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Derived length $n=1$ is admissible and is the abelian case: then $A=N^{(0)}=N$ itself. Steps 2.1 and 2.2 give $A=N\\ne1$ abelian, and step 4.1 concludes from the hypothesis $N\\trianglelefteq Q$ directly."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "When $n=1$ the characteristic chain of step 3.1 has no links at all, and the conclusion $A\\operatorname{char}N$ degenerates to $N\\operatorname{char}N$, which holds. The other coincidence, $N=Q$, changes nothing: step 4.1 uses only $N\\trianglelefteq Q$."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "Both ends of the derived series are used and named: step 1.1 fixes $N^{(0)}=N$ and the terminating $N^{(n)}=1$, and step 2.1 takes $A$ at the index immediately before termination, which is where leastness of $n$ is consumed."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "The only selection is the derived length $n$, and it is the least element of a nonempty subset of $\\mathbb N$ supplied by the well-ordering appeal inside [[def-derived-series-solvable-group-and-derived-length]]. No element of a group is chosen, and no choice principle beyond that is invoked."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The conclusion is an existence claim — some nontrivial abelian $A\\le N$ is normal in $Q$ — not a biconditional, so no forward implication is owed."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "No converse is asserted. A group with a nontrivial abelian normal subgroup need not be solvable ($A_5\\times C_2$ is a witness), so the reverse implication would be false and is deliberately not claimed."
  }
 ]
}
```

---

# DEPENDENCY TEXT — the cited items, in full

## DEPENDENCY: def-derived-series-solvable-group-and-derived-length

```markdown
---
id: def-derived-series-solvable-group-and-derived-length
kind: definition
title: "The derived series, solvable groups, and derived length"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-derived-subgroup-is-characteristic-and-abelianization-is-universal, thm-well-ordering-principle]
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
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Definition

The **derived series** of a group $G$ is defined recursively by
$$G^{(0)}=G,\qquad G^{(r+1)}=[G^{(r)},G^{(r)}].$$
Each term is characteristic, hence normal, in the preceding term by [[thm-derived-subgroup-is-characteristic-and-abelianization-is-universal]].

The group $G$ is **solvable** if $G^{(n)}=1$ for some $n\in\mathbb N$. Its **derived length** is the least such $n$. This least index exists because the set of terminating indices is a nonempty subset of $\mathbb N$ and every such subset has a least element ([[thm-well-ordering-principle]]). Thus the trivial group has derived length $0$, and a nontrivial abelian group has derived length $1$.

```

## DEPENDENCY: thm-subgroups-and-quotients-of-solvable-groups-are-solvable

```markdown
---
id: thm-subgroups-and-quotients-of-solvable-groups-are-solvable
kind: theorem
title: "Subgroups and quotients of solvable groups are solvable"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [lem-homomorphisms-respect-commutators-and-derived-series, def-derived-series-solvable-group-and-derived-length, prop-canonical-quotient-map]
justified_by: []
aliases: []
landmark: false
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
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Statement

Every subgroup and every quotient of a solvable group is solvable. No finiteness hypothesis is required.

## Facts & Assumptions

**Given:** A solvable group $G$, a subgroup $H\le G$, and a normal subgroup $N\trianglelefteq G$.

[L1] For every $r$, $H^{(r)}\le G^{(r)}$, and a surjection $f:G\to Q$ satisfies $f(G^{(r)})=Q^{(r)}$ ([[lem-homomorphisms-respect-commutators-and-derived-series]]).

[F1] Solvability means $G^{(n)}=1$ for some natural number $n$ ([[def-derived-series-solvable-group-and-derived-length]]).

[F2] For $N\trianglelefteq G$, the canonical projection $q:G\to G/N$, $q(g)=gN$, is a surjective group homomorphism ([[prop-canonical-quotient-map]]).

## Proof

**Proof technique:** direct.

1.1 Choose $n$ with $G^{(n)}=1$. [given, F1, choose]

2.1 By [L1], $H^{(n)}\le G^{(n)}=1$, so $H$ is solvable. [step 1.1, L1, F1]

2.2 Since the quotient map is surjective, [L1] and [F2] give $(G/N)^{(n)}=q(G^{(n)})=1$, so $G/N$ is solvable. [step 1.1, L1, F1, F2]

3.1 Thus solvability passes to both subgroups and quotients. [step 2.1, step 2.2] ∎

```

## DEPENDENCY: thm-derived-subgroup-is-characteristic-and-abelianization-is-universal

```markdown
---
id: thm-derived-subgroup-is-characteristic-and-abelianization-is-universal
kind: theorem
title: "The derived subgroup is characteristic and the abelianization is universal"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-commutator-and-commutator-subgroup, def-characteristic-subgroup, lem-characteristic-subgroups-are-normal-and-characteristic-is-transitive, thm-quotient-abelian-iff-contains-commutator-subgroup, thm-quotient-group-universal-property]
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
    - title: "J. S. Milne, Group Theory, Chapter 6"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
    - title: "K. Conrad, Subgroup Series I"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/subgpseries1.pdf"
    - title: "K. Igusa, Notes on Jordan-Hölder, section 5"
      url: "https://people.brandeis.edu/~igusa/Math131b/JH.pdf"
pipeline_run: null
---

## Statement

For every group $G$, the derived subgroup $G'=[G,G]$ is characteristic, hence normal. The quotient $G^{\mathrm{ab}}:=G/G'$ is abelian and has the following universal property: for every homomorphism $f:G\to A$ into an abelian group, there is a unique homomorphism $\bar f:G^{\mathrm{ab}}\to A$ with $f=\bar f\circ q$, where $q:G\to G/G'$ is the quotient map.

## Facts & Assumptions

**Given:** A group $G$, its commutator subgroup $G'$, and a homomorphism $f:G\to A$ to an abelian group.

[F1] $[G,G]$ is generated by the commutators $[x,y]=xyx^{-1}y^{-1}$ ([[def-commutator-and-commutator-subgroup]]).

[F2] A characteristic subgroup is preserved by every automorphism ([[def-characteristic-subgroup]]).

[L1] Characteristic subgroups are normal ([[lem-characteristic-subgroups-are-normal-and-characteristic-is-transitive]]).

[L2] For $N\trianglelefteq G$, $G/N$ is abelian if and only if $[G,G]\le N$ ([[thm-quotient-abelian-iff-contains-commutator-subgroup]]).

[L3] If $N\trianglelefteq G$ and $N\le\ker f$, then $f$ factors uniquely through $G/N$ ([[thm-quotient-group-universal-property]]).

## Proof

**Proof technique:** direct.

1.1 Every automorphism $\alpha$ satisfies $\alpha([x,y])=[\alpha(x),\alpha(y)]$, so it maps the generating commutators of $G'$ into $G'$; applying the same argument to $\alpha^{-1}$ gives $\alpha(G')=G'$. [F1, algebra]

1.2 For $x,y\in G$, the group $A$ is abelian, so $f([x,y])=[f(x),f(y)]=1$; hence every generator of $G'$ lies in $\ker f$, and $G'\le\ker f$. [given, F1, algebra]

2.1 Thus $G'$ is characteristic by [F2], and therefore normal by [L1]. [step 1.1, F2, L1]

3.1 Since $G'\le G'$, [L2] gives that $G/G'$ is abelian. [step 2.1, L2]

4.1 By [L3] there is a unique $\bar f:G/G'\to A$ with $f=\bar f\circ q$. Together with step 3.1, this is the asserted universal abelian quotient. [step 2.1, step 1.2, L3] ∎

```

## DEPENDENCY: lem-characteristic-subgroups-are-normal-and-characteristic-is-transitive

```markdown
---
id: lem-characteristic-subgroups-are-normal-and-characteristic-is-transitive
kind: lemma
title: "Characteristic subgroups are normal, and characteristicity is transitive"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-characteristic-subgroup, def-normal-subgroup]
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

If $H\operatorname{char}G$, then $H\trianglelefteq G$. If $K\operatorname{char}H$ and $H\operatorname{char}G$, then $K\operatorname{char}G$.

## Facts & Assumptions

**Given:** Groups and subgroups satisfying the hypotheses of either assertion.

[F1] $H\operatorname{char}G$ means that every automorphism of $G$ maps $H$ onto itself ([[def-characteristic-subgroup]]).

[F2] $H\trianglelefteq G$ means that conjugation by every element of $G$ preserves $H$ ([[def-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 For each $g\in G$, conjugation $x\mapsto gxg^{-1}$ is an automorphism of $G$; if $H\operatorname{char}G$, [F1] says it preserves $H$, so [F2] gives $H\trianglelefteq G$. [F1, F2]

1.2 Suppose $K\operatorname{char}H\operatorname{char}G$ and let $\alpha\in\operatorname{Aut}(G)$. By [F1], $\alpha(H)=H$, so $\alpha|_H$ is an automorphism of $H$; applying [F1] to $K\operatorname{char}H$ gives $\alpha(K)=K$. [F1]

2.1 Since step 1.2 holds for every automorphism of $G$, $K\operatorname{char}G$; together with step 1.1 this proves both assertions. [step 1.1, step 1.2, F1] ∎

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

## DEPENDENCY: thm-quotient-abelian-iff-contains-commutator-subgroup

```markdown
---
id: thm-quotient-abelian-iff-contains-commutator-subgroup
kind: theorem
title: '$G/N$ is abelian if and only if $[G,G]\subseteq N$'
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [thm-quotient-group-laws, def-commutator-and-commutator-subgroup, def-generated-subgroup, lem-coset-membership-and-equality, def-group]
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
    - title: "Encyclopedia of Mathematics, Commutator subgroup"
      url: "https://encyclopediaofmath.org/wiki/Commutator_subgroup"
pipeline_run: null
---

## Statement

Let $N\mathrel{\trianglelefteq}G$. Then $G/N$ is abelian if and only if

$$[G,G]\subseteq N.$$

## Facts & Assumptions

**Given:** A group $G$, a normal subgroup $N\mathrel{\trianglelefteq}G$, and the quotient group $G/N$.

[L1] In $G/N$, products and inverses satisfy $(gN)(hN)=ghN$ and $(gN)^{-1}=g^{-1}N$, with identity $N$ ([[thm-quotient-group-laws]]).

[F1] The commutator subgroup $[G,G]$ is generated by the elements $[g,h]=ghg^{-1}h^{-1}$ ([[def-commutator-and-commutator-subgroup]]).

[L2] A subgroup generated by a set is contained in every subgroup containing that set ([[def-generated-subgroup]]).

[L3] For $x\in G$, one has $xN=N$ if and only if $x\in N$ ([[lem-coset-membership-and-equality]]).

[F2] A group is abelian when every two of its elements commute ([[def-group]]).

## Proof

**Proof technique:** direct.

1.1 Suppose $G/N$ is abelian. For $g,h\in G$, the commutator of the cosets $gN$ and $hN$ is the identity, so [L1] gives $[g,h]N=N$; hence $[g,h]\in N$ by [L3]. [given, L1, L3, F2, algebra]

1.2 Conversely, suppose $[G,G]\subseteq N$. Then for any $g,h\in G$, one has $[g,h]\in N$, so [L3] and [L1] show that the commutator of $gN$ and $hN$ is $N$. Multiplying the equality $(gN)(hN)(gN)^{-1}(hN)^{-1}=N$ on the right by $(hN)(gN)$ gives $(gN)(hN)=(hN)(gN)$. Thus $G/N$ is abelian. [given, L1, L3, F2, algebra]

2.1 The subgroup $N$ contains every commutator, so it contains the subgroup they generate: $[G,G]\subseteq N$. [step 1.1, F1, L2]

3.1 Steps 1.1 and 2.1 prove the forward implication, and step 1.2 proves the reverse implication. [step 1.1, step 2.1, step 1.2] ∎

```

## DEPENDENCY: def-normal-subgroup

```markdown
---
id: def-normal-subgroup
kind: definition
title: "Normal subgroup: invariance under conjugation"
status: published
origin: session
authorship: literature-derived
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-subgroup, def-coset]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Normal subgroup"
      url: "https://encyclopediaofmath.org/wiki/Normal_subgroup"
pipeline_run: null
---

## Definition

Let $G$ be a group and let $N\le G$ be a subgroup ([[def-subgroup]]). For
$g\in G$, write

$$gNg^{-1}:=\{gng^{-1}:n\in N\}.$$

The subgroup $N$ is **normal in $G$** when

$$gNg^{-1}=N\qquad\text{for every }g\in G.$$

In that case write $N\mathrel{\trianglelefteq}G$. Equivalently, every inner
conjugation of $G$ maps $N$ onto itself. The connection with equality of the
left and right cosets of [[def-coset]] is proved in
[[thm-normal-subgroup-characterisations]].

```


## What the lead Alpha most wants tested on this item

1. The Statement is the claim opening Craven's proof of Theorem 2.13: "Let N be
   a normal subgroup of G. We claim that N contains some normal abelian subgroup
   of G: since G is soluble so is N, and if N has derived length n, then N^(n-1)
   is a characteristic abelian subgroup of N, hence a normal abelian subgroup of
   G." The item adds the hypothesis N != 1 so that the conclusion can assert the
   subgroup is NONTRIVIAL. Is that faithful, and is n >= 1 correctly derived?
2. Step 3.1 says A = N^(n-1) is characteristic in N by ITERATING transitivity
   along the derived series. When n = 1 that chain has no links at all. Does the
   step still hold, and does the boundary row for `degenerate` say so honestly?
3. Step 2.2 concludes A abelian by applying thm-quotient-abelian-iff-contains-
   commutator-subgroup to the TRIVIAL normal subgroup of A. Is that a licensed
   use of the cited theorem?
4. The eight boundary dispositions. Instantiate n = 1, N = Q, and the excluded
   N = 1, and say whether each recorded disposition is TRUE.
