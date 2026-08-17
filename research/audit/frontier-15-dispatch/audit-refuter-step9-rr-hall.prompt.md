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
label: step9-rr-hall

run: frontier-15
role: refuter
label: step9-rr-hall
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

## ITEM: thm-fitting-subgroup-contains-its-centralizer-in-a-finite-solvable-group

```markdown
---
id: thm-fitting-subgroup-contains-its-centralizer-in-a-finite-solvable-group
kind: theorem
title: "Philip Hall: in a finite solvable group the Fitting subgroup contains its own centralizer"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: literature-derived
deps: [def-fitting-subgroup-of-a-finite-group, thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup, def-centralizer-of-a-subgroup, lem-centralizer-of-a-normal-subgroup-is-normal, lem-nontrivial-normal-subgroup-of-a-solvable-group-has-an-abelian-normal-subgroup, thm-subgroups-and-quotients-of-solvable-groups-are-solvable, thm-correspondence-theorem-groups, lem-dedekind-modular-law-for-subgroups, thm-quotient-abelian-iff-contains-commutator-subgroup, lem-intersection-of-normal-subgroups, def-nilpotent-group-and-nilpotency-class, def-upper-central-series, def-center-of-a-group, lem-center-is-normal]
justified_by: []
aliases: []
landmark: true
proof_strategy: contradiction
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "David A. Craven, Finite Group Theory, Theorem 2.13"
      url: "https://web.mat.bham.ac.uk/D.A.Craven/docs/lectures/finitegroups2012.pdf"
pipeline_run: null
---

## Statement

Let $G$ be a finite solvable group. Then $C_G(F(G))\le F(G)$.

## Facts & Assumptions

**Given:** A finite solvable group $G$. Write $F:=F(G)$ and $C:=C_G(F)$.

[L1] For a finite group $G$ the Fitting subgroup is $F(G)=\prod_{p\mid|G|}O_p(G)$; and if $A,B\trianglelefteq G$, then $AB$ is a subgroup, is normal, and satisfies $AB=BA$ ([[def-fitting-subgroup-of-a-finite-group]]).

[L2] For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$ ([[thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup]]).

[L3] $C_G(H)=\{g\in G:gh=hg\text{ for every }h\in H\}$, a subgroup of $G$ ([[def-centralizer-of-a-subgroup]]).

[L4] If $N\trianglelefteq G$, then $C_G(N)\trianglelefteq G$ ([[lem-centralizer-of-a-normal-subgroup-is-normal]]).

[L5] Every subgroup and every quotient of a solvable group is solvable; no finiteness hypothesis is required ([[thm-subgroups-and-quotients-of-solvable-groups-are-solvable]]).

[L6] For $N\trianglelefteq G$, the maps $H\mapsto H/N$ and $K\mapsto\pi^{-1}(K)$ are inverse inclusion-preserving bijections between the subgroups $H$ with $N\le H\le G$ and the subgroups $K\le G/N$; they preserve normality ([[thm-correspondence-theorem-groups]]).

[L7] Let $Q$ be a solvable group and let $N\trianglelefteq Q$ with $N\ne1$. Then $N$ contains a subgroup $A\ne1$ that is abelian and normal in $Q$ ([[lem-nontrivial-normal-subgroup-of-a-solvable-group-has-an-abelian-normal-subgroup]]).

[L8] Let $A,B,C\le G$ with $A\le C$. If $AB$ is a subgroup of $G$, then $A(B\cap C)=AB\cap C$ ([[lem-dedekind-modular-law-for-subgroups]]).

[L9] Let $N\trianglelefteq G$. Then $G/N$ is abelian if and only if $[G,G]\subseteq N$ ([[thm-quotient-abelian-iff-contains-commutator-subgroup]]).

[L10] Let $G$ be a group and let $\mathcal N$ be a nonempty family of normal subgroups of $G$. Then $\bigcap_{N\in\mathcal N}N$ is a normal subgroup of $G$ ([[lem-intersection-of-normal-subgroups]]).

[L11] A group $G$ is nilpotent if $Z_c(G)=G$ for some $c\in\mathbb N$, where $(Z_r(G))$ is its upper central series ([[def-nilpotent-group-and-nilpotency-class]]).

[L12] The upper central series begins with $Z_0(G)=1$ and satisfies $Z_{r+1}(G)/Z_r(G)=Z(G/Z_r(G))$; in particular $Z_1(G)=Z(G)$ ([[def-upper-central-series]]).

[L13] $Z(G)=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[L14] For every group $G$, the center $Z(G)$ is a normal subgroup of $G$ ([[lem-center-is-normal]]).

## Proof

**Proof technique:** contradiction.

1.1 By [L2], $F\trianglelefteq G$ and every normal nilpotent subgroup of $G$ is contained in $F$. [L2, given]

1.2 Assume towards a contradiction that $C\not\le F$. [assume-contra, given]

2.1 $F$ is normal in $G$, so $C=C_G(F)\trianglelefteq G$ by [L4]. [L4, step 1.1]

3.1 $C$ and $F$ are both normal in $G$, so by [L1] the product $CF$ is a subgroup of $G$, is normal in $G$, and satisfies $CF=FC$. Since the identity lies in $C$, also $F\le CF$. [L1, step 1.1, step 2.1]

4.1 $G$ is solvable, so its quotient $G/F$ is solvable by [L5]; and $CF\trianglelefteq G$ with $F\le CF$, so $CF/F\trianglelefteq G/F$ by [L6]. By step 1.2 some $c\in C$ lies outside $F$, so $cF\ne F$ and $CF/F\ne1$. [L5, L6, given, step 1.2, step 3.1]

5.1 Apply [L7] to the solvable group $G/F$ and its nontrivial normal subgroup $CF/F$: there is a subgroup $\bar A\ne1$ of $CF/F$ that is abelian and normal in $G/F$. Let $A$ be its preimage under $G\to G/F$. By [L6], $F\le A\le CF$, $A\trianglelefteq G$, and $A/F=\bar A$ is nontrivial and abelian. [L6, L7, step 4.1]

6.1 $F\trianglelefteq A$ and $A/F$ is abelian, so $[A,A]\le F$ by [L9]. [L9, step 5.1]

6.2 Put $D:=C\cap A$. Both $C$ and $A$ are normal in $G$, so $D\trianglelefteq G$ by [L10]. [L10, step 2.1, step 5.1]

7.1 Apply [L8] with its $A:=F$, its $B:=C$ and its $C:=A$. Its hypotheses hold: $F\le A$ by step 5.1, and $FC=CF$ is a subgroup by step 3.1. Hence $F(C\cap A)=FC\cap A$, and $A\le CF=FC$ makes the right-hand side equal to $A$. Therefore $A=FD$. [L8, step 3.1, step 5.1, step 6.2]

7.2 $D\le A$, so $[D,D]\le[A,A]\le F$ by step 6.1. Also $D\le C=C_G(F)$, so by [L3] every element of $D$ commutes with every element of $F$, in particular with every element of $[D,D]$. Since $[D,D]\le D$, this says $[D,D]\le Z(D)$ by [L13]. [L3, L13, step 6.1, step 6.2]

8.1 $Z(D)\trianglelefteq D$ by [L14], and $[D,D]\le Z(D)$, so $D/Z(D)$ is abelian by [L9]. [L9, L14, step 7.2]

9.1 By [L12], $Z_1(D)=Z(D)$ and $Z_2(D)/Z_1(D)=Z\!\left(D/Z_1(D)\right)$. Step 8.1 makes $D/Z_1(D)$ abelian, and the center of an abelian group is the whole group by [L13], so $Z_2(D)/Z_1(D)=D/Z_1(D)$ and hence $Z_2(D)=D$. By [L11], $D$ is nilpotent. [L11, L12, L13, step 8.1]

10.1 $D$ is a normal nilpotent subgroup of $G$ by steps 6.2 and 9.1, so $D\le F$ by step 1.1. [step 1.1, step 6.2, step 9.1]

11.1 Substituting into step 7.1 gives $A=FD\le F$, so $A/F$ is trivial, contradicting step 5.1. The assumption of step 1.2 is therefore untenable, and $C_G(F(G))\le F(G)$. This proves the stated claim. [discharge-contradiction: step 1.2, step 5.1, step 7.1, step 10.1] ∎

```

### Recorded proof contract for thm-fitting-subgroup-contains-its-centralizer-in-a-finite-solvable-group

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-fitting-subgroup-of-a-finite-group",
   "source_section": "Definition",
   "quote": "For a finite group $G$, the **Fitting subgroup** is $$F(G):=\\prod_{p\\mid |G|}O_p(G),$$ the product of its $p$-cores ([[def-p-core-of-a-finite-group]]). If $A,B\\trianglelefteq G$, then $AB$ is a subgroup, is normal because $gABg^{-1}=AB$, and satisfies $AB=BA$: indeed $ab=(aba^{-1})a\\in BA$, and the reverse inclusion is symmetric. Induction therefore shows that the finite product of the normal factors $O_p(G)$ is a normal subgroup independent of their order. For the trivial group the product is empty and equals $1$.",
   "uses": [
    "3.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup",
   "source_section": "Statement",
   "quote": "For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$. See [[def-fitting-subgroup-of-a-finite-group]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-centralizer-of-a-subgroup",
   "source_section": "Definition",
   "quote": "Let $G$ be a group ([[def-group]]) and let $H\\le G$. The **centralizer of $H$\nin $G$** is\n\n$$C_G(H):=\\{g\\in G:gh=hg\\text{ for every }h\\in H\\}.$$\n\nEquivalently, $C_G(H)=\\bigcap_{h\\in H}C_G(h)$, the intersection of the\ncentralizers of the individual elements of $H$\n([[def-conjugacy-class-and-centralizer]]).\n\n**Why it is a subgroup.** The identity satisfies $eh=h=he$ for every $h\\in H$,\nso $e\\in C_G(H)$. If $g_1,g_2\\in C_G(H)$ and $h\\in H$, then\n\n$$(g_1g_2)h=g_1(g_2h)=g_1(hg_2)=(g_1h)g_2=(hg_1)g_2=h(g_1g_2),$$\n\nso $g_1g_2\\in C_G(H)$. If $g\\in C_G(H)$ and $h\\in H$, then multiplying\n$gh=hg$ by $g^{-1}$ on both sides gives $hg^{-1}=g^{-1}h$, so\n$g^{-1}\\in C_G(H)$. Hence $C_G(H)\\le G$.\n\nTwo special cases are used without further comment. Taking $H=G$ gives\n$C_G(G)=Z(G)$, the center ([[def-center-of-a-group]]). Intersecting with $H$\ngives $C_G(H)\\cap H=Z(H)$, since an element of $H$ lies in $C_G(H)$ exactly\nwhen it commutes with every element of $H$.",
   "uses": [
    "7.2"
   ]
  },
  {
   "fact": "L4",
   "source": "lem-centralizer-of-a-normal-subgroup-is-normal",
   "source_section": "Statement",
   "quote": "If $N\\trianglelefteq G$, then $C_G(N)\\trianglelefteq G$.",
   "uses": [
    "2.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-subgroups-and-quotients-of-solvable-groups-are-solvable",
   "source_section": "Statement",
   "quote": "Every subgroup and every quotient of a solvable group is solvable. No finiteness hypothesis is required.",
   "uses": [
    "4.1"
   ]
  },
  {
   "fact": "L6",
   "source": "thm-correspondence-theorem-groups",
   "source_section": "Statement",
   "quote": "Correspondence theorem: subgroups of $G/N$ correspond to subgroups of $G$ containing $N$, with normality preserved.\n\nFor $N\\mathrel{\\trianglelefteq}G$, the maps $H\\mapsto H/N$ and\n$K\\mapsto\\pi^{-1}(K)$ are inverse inclusion-preserving bijections between\nsubgroups $H$ with $N\\le H\\le G$ and subgroups $K\\le G/N$; they preserve\nnormality.",
   "uses": [
    "4.1",
    "5.1"
   ]
  },
  {
   "fact": "L7",
   "source": "lem-nontrivial-normal-subgroup-of-a-solvable-group-has-an-abelian-normal-subgroup",
   "source_section": "Statement",
   "quote": "Let $Q$ be a solvable group and let $N\\trianglelefteq Q$ with $N\\ne1$. Then $N$\ncontains a subgroup $A\\ne1$ that is abelian and normal in $Q$.",
   "uses": [
    "5.1"
   ]
  },
  {
   "fact": "L8",
   "source": "lem-dedekind-modular-law-for-subgroups",
   "source_section": "Statement",
   "quote": "Let $A,B,C\\le G$ with $A\\le C$. If $AB$ is a subgroup of $G$, then\n$$A(B\\cap C)=AB\\cap C.$$\nThe equality also holds as an equality of subsets whenever the displayed products are formed; the subgroup hypothesis ensures that both sides are subgroups in later applications.",
   "uses": [
    "7.1"
   ]
  },
  {
   "fact": "L9",
   "source": "thm-quotient-abelian-iff-contains-commutator-subgroup",
   "source_section": "Statement",
   "quote": "Let $N\\mathrel{\\trianglelefteq}G$. Then $G/N$ is abelian if and only if\n\n$$[G,G]\\subseteq N.$$",
   "uses": [
    "6.1",
    "8.1"
   ]
  },
  {
   "fact": "L10",
   "source": "lem-intersection-of-normal-subgroups",
   "source_section": "Statement",
   "quote": "Let $G$ be a group and let $\\mathcal N$ be a nonempty family of normal\nsubgroups of $G$. Then\n\n$$K:=\\bigcap_{N\\in\\mathcal N}N$$\n\nis a normal subgroup of $G$.",
   "uses": [
    "6.2"
   ]
  },
  {
   "fact": "L11",
   "source": "def-nilpotent-group-and-nilpotency-class",
   "source_section": "Definition",
   "quote": "A group $G$ is **nilpotent** if $Z_c(G)=G$ for some $c\\in\\mathbb N$, where $(Z_r(G))$ is its upper central series ([[def-upper-central-series]]). The least such $c$ is the **nilpotency class** of $G$. This least index exists by the well-ordering principle for nonempty subsets of $\\mathbb N$ ([[thm-well-ordering-principle]]).\n\nThus the trivial group has class $0$. A nontrivial group has class $1$ exactly when it is abelian.",
   "uses": [
    "9.1"
   ]
  },
  {
   "fact": "L12",
   "source": "def-upper-central-series",
   "source_section": "Definition",
   "quote": "The **upper central series** of a group $G$ begins with $Z_0(G)=1$. Having defined $Z_r(G)\\trianglelefteq G$, define $Z_{r+1}(G)$ to be the inverse image of the center $Z(G/Z_r(G))$ under the quotient map $G\\to G/Z_r(G)$ ([[def-center-of-a-group]], [[def-quotient-group]]). Equivalently,\n$$Z_{r+1}(G)/Z_r(G)=Z(G/Z_r(G)).$$\nThe correspondence theorem makes this inverse image a uniquely determined normal subgroup containing $Z_r(G)$ ([[thm-correspondence-theorem-groups]]). In particular, $Z_1(G)=Z(G)$.",
   "uses": [
    "9.1"
   ]
  },
  {
   "fact": "L13",
   "source": "def-center-of-a-group",
   "source_section": "Definition",
   "quote": "Let $G$ be a group ([[def-group]]). The **center of $G$** is\n\n$$Z(G):=\\{z\\in G:zg=gz\\text{ for every }g\\in G\\}.$$\n\nThus $Z(G)$ consists of the elements that commute with every element of $G$.\nIts subgroup and normality properties are proved in [[lem-center-is-normal]].",
   "uses": [
    "7.2",
    "9.1"
   ]
  },
  {
   "fact": "L14",
   "source": "lem-center-is-normal",
   "source_section": "Statement",
   "quote": "For every group $G$, the center $Z(G)$ is a normal subgroup of $G$.",
   "uses": [
    "8.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "thm-fitting-subgroup-1-1",
   "claim": "F = F(G) is normal in G and contains every normal nilpotent subgroup of G.",
   "step": "1.1",
   "inputs": [
    "L2",
    "given"
   ]
  },
  {
   "id": "thm-fitting-subgroup-2-1",
   "claim": "C is normal in G, because it centralizes the normal subgroup F.",
   "step": "2.1",
   "inputs": [
    "L4",
    "step 1.1",
    "given"
   ]
  },
  {
   "id": "thm-fitting-subgroup-3-1",
   "claim": "CF is a normal subgroup of G with CF = FC and F <= CF.",
   "step": "3.1",
   "inputs": [
    "L1",
    "step 1.1",
    "step 2.1",
    "given"
   ]
  },
  {
   "id": "thm-fitting-subgroup-4-1",
   "claim": "G/F is solvable and CF/F is a nontrivial normal subgroup of it.",
   "step": "4.1",
   "inputs": [
    "L5",
    "L6",
    "step 1.2",
    "step 3.1",
    "given"
   ]
  },
  {
   "id": "thm-fitting-subgroup-5-1",
   "claim": "There is a subgroup A of G with F <= A <= CF, A normal in G, and A/F nontrivial and abelian.",
   "step": "5.1",
   "inputs": [
    "L7",
    "L6",
    "step 4.1",
    "given"
   ]
  },
  {
   "id": "thm-fitting-subgroup-6-1",
   "claim": "[A,A] <= F, because A/F is abelian.",
   "step": "6.1",
   "inputs": [
    "L9",
    "step 5.1",
    "given"
   ]
  },
  {
   "id": "thm-fitting-subgroup-6-2",
   "claim": "D := C intersect A is normal in G.",
   "step": "6.2",
   "inputs": [
    "L10",
    "step 2.1",
    "step 5.1",
    "given"
   ]
  },
  {
   "id": "thm-fitting-subgroup-7-1",
   "claim": "The Dedekind modular law gives A = FD.",
   "step": "7.1",
   "inputs": [
    "L8",
    "step 5.1",
    "step 3.1",
    "step 6.2",
    "given"
   ]
  },
  {
   "id": "thm-fitting-subgroup-7-2",
   "claim": "[D,D] <= Z(D): the derived subgroup of D lies in F, and D centralizes F.",
   "step": "7.2",
   "inputs": [
    "step 6.1",
    "L3",
    "L13",
    "step 6.2",
    "given"
   ]
  },
  {
   "id": "thm-fitting-subgroup-8-1",
   "claim": "D/Z(D) is abelian.",
   "step": "8.1",
   "inputs": [
    "L14",
    "L9",
    "step 7.2",
    "given"
   ]
  },
  {
   "id": "thm-fitting-subgroup-9-1",
   "claim": "D is nilpotent, since Z_2(D) = D in the upper central series.",
   "step": "9.1",
   "inputs": [
    "L12",
    "step 8.1",
    "L13",
    "L11",
    "given"
   ]
  },
  {
   "id": "thm-fitting-subgroup-10-1",
   "claim": "D is a normal nilpotent subgroup of G, hence D <= F.",
   "step": "10.1",
   "inputs": [
    "step 6.2",
    "step 9.1",
    "step 1.1",
    "given"
   ]
  },
  {
   "id": "thm-fitting-subgroup-11-1",
   "claim": "A = FD <= F contradicts A/F nontrivial, so the contradiction hypothesis fails and C_G(F(G)) <= F(G).",
   "step": "11.1",
   "inputs": [
    "step 7.1",
    "step 5.1",
    "step 1.2",
    "step 10.1",
    "given"
   ]
  }
 ],
 "routine_steps": [
  {
   "id": "thm-fitting-subgroup-1-2",
   "claim": "The contradiction hypothesis: C = C_G(F) is not contained in F.",
   "step": "1.2",
   "inputs": [
    "given"
   ]
  }
 ],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "The Statement admits $G=1$. The defining product $F(G)=\\prod_{p\\mid|G|}O_p(G)$ of [L1] is then empty and equals $1$, so $C_G(F)=1\\le F$ and the conclusion holds; the contradiction hypothesis of step 1.2 is never satisfiable in that case."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "No additive or numerical zero occurs. The only integers in play are the primes dividing $|G|$ and the upper-central-series indices $0,1,2$, and those are dispositioned under `endpoints`."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "No step assumes $F\\ne1$ or $C\\ne1$. The single place a triviality could break the argument is step 5.1, which needs $CF/F\\ne1$, and step 4.1 derives exactly that from the contradiction hypothesis of step 1.2 rather than assuming it."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The coincident cases $A=CF$ and $A=F$ are both admissible in step 7.1: the Dedekind application needs only $F\\le A$ and $FC$ a subgroup, which step 5.1 and step 3.1 supply. The case $D=F$ is likewise harmless, since step 10.1 concludes $D\\le F$ either way."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "The upper central series is used only at its first three indices and step 9.1 exhibits all of them: $Z_0(D)=1$ implicitly, $Z_1(D)=Z(D)$, and $Z_2(D)=D$. Nilpotency class at most $2$ is the exact bound the argument produces, and no higher index is needed."
  },
  {
   "case": "nonempty-choice",
   "status": "checked",
   "evidence": "The only element selected anywhere is $c\\in C$ with $c\\notin F$ in step 4.1, and its existence is precisely the contradiction hypothesis recorded in step 1.2. The subgroup $\\bar A$ of step 5.1 is produced by [L7], not chosen, so no choice principle is used and $G$ is finite in any case."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The Statement is the single containment $C_G(F(G))\\le F(G)$, not a biconditional, so no forward half is owed."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The reverse containment $F(G)\\le C_G(F(G))$ says exactly that $F(G)$ is abelian and is deliberately not claimed: $G=Q_8$ is finite solvable with $F(G)=Q_8$ nonabelian, so $C_G(F(G))=Z(Q_8)$ is a proper subgroup of $F(G)$."
  }
 ]
}
```

---

# DEPENDENCY TEXT — the cited items, in full

## DEPENDENCY: def-fitting-subgroup-of-a-finite-group

```markdown
---
id: def-fitting-subgroup-of-a-finite-group
kind: definition
title: "The Fitting subgroup $F(G)=\\prod_p O_p(G)$ of a finite group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-p-core-of-a-finite-group, def-internal-direct-product-of-subgroups]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "Rachel K. Carleton, The Commuting and Cyclic Graphs of Solvable A-Groups, Chapter 2 Section 2.1"
      url: "https://etd.ohiolink.edu/acprod/odb_etd/ws/send_file/send?accession=kent1713384046910533&disposition=inline"
pipeline_run: null
---

## Definition

For a finite group $G$, the **Fitting subgroup** is $$F(G):=\prod_{p\mid |G|}O_p(G),$$ the product of its $p$-cores ([[def-p-core-of-a-finite-group]]). If $A,B\trianglelefteq G$, then $AB$ is a subgroup, is normal because $gABg^{-1}=AB$, and satisfies $AB=BA$: indeed $ab=(aba^{-1})a\in BA$, and the reverse inclusion is symmetric. Induction therefore shows that the finite product of the normal factors $O_p(G)$ is a normal subgroup independent of their order. For the trivial group the product is empty and equals $1$.

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

## DEPENDENCY: def-centralizer-of-a-subgroup

```markdown
---
id: def-centralizer-of-a-subgroup
kind: definition
title: "The centralizer $C_G(H)$ of a subgroup"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group, def-conjugacy-class-and-centralizer, def-center-of-a-group]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Proposition 3.22"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Definition

Let $G$ be a group ([[def-group]]) and let $H\le G$. The **centralizer of $H$
in $G$** is

$$C_G(H):=\{g\in G:gh=hg\text{ for every }h\in H\}.$$

Equivalently, $C_G(H)=\bigcap_{h\in H}C_G(h)$, the intersection of the
centralizers of the individual elements of $H$
([[def-conjugacy-class-and-centralizer]]).

**Why it is a subgroup.** The identity satisfies $eh=h=he$ for every $h\in H$,
so $e\in C_G(H)$. If $g_1,g_2\in C_G(H)$ and $h\in H$, then

$$(g_1g_2)h=g_1(g_2h)=g_1(hg_2)=(g_1h)g_2=(hg_1)g_2=h(g_1g_2),$$

so $g_1g_2\in C_G(H)$. If $g\in C_G(H)$ and $h\in H$, then multiplying
$gh=hg$ by $g^{-1}$ on both sides gives $hg^{-1}=g^{-1}h$, so
$g^{-1}\in C_G(H)$. Hence $C_G(H)\le G$.

Two special cases are used without further comment. Taking $H=G$ gives
$C_G(G)=Z(G)$, the center ([[def-center-of-a-group]]). Intersecting with $H$
gives $C_G(H)\cap H=Z(H)$, since an element of $H$ lies in $C_G(H)$ exactly
when it commutes with every element of $H$.

```

## DEPENDENCY: lem-centralizer-of-a-normal-subgroup-is-normal

```markdown
---
id: lem-centralizer-of-a-normal-subgroup-is-normal
kind: lemma
title: "The centralizer of a normal subgroup is normal"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-centralizer-of-a-subgroup, def-normal-subgroup, def-group]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Group Theory, Proposition 3.22"
      url: "https://www.jmilne.org/math/CourseNotes/GT.pdf"
pipeline_run: null
---

## Statement

If $N\trianglelefteq G$, then $C_G(N)\trianglelefteq G$.

## Facts & Assumptions

**Given:** A group $G$ and a normal subgroup $N\trianglelefteq G$.

[L1] $C_G(N)=\{g\in G:gn=ng\text{ for every }n\in N\}$, and it is a subgroup of $G$ ([[def-centralizer-of-a-subgroup]]).

[L2] $N\trianglelefteq G$ means $gNg^{-1}=N$ for every $g\in G$ ([[def-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 Fix $g\in G$, $x\in C_G(N)$ and $n\in N$. By [L2] the element $g^{-1}ng$ lies in $N$, so $x(g^{-1}ng)=(g^{-1}ng)x$ by [L1]. [L1, L2, given]

2.1 Multiplying that identity by $g$ on the left and by $g^{-1}$ on the right gives $(gxg^{-1})n=gx(g^{-1}ng)g^{-1}=g(g^{-1}ng)xg^{-1}=n(gxg^{-1})$, and since $n\in N$ was arbitrary, $gxg^{-1}\in C_G(N)$ by [L1]. [L1, step 1.1, algebra]

3.1 Hence $gC_G(N)g^{-1}\subseteq C_G(N)$ for every $g\in G$. Applying this inclusion to $g^{-1}$ and conjugating by $g$ gives $C_G(N)\subseteq gC_G(N)g^{-1}$, so $gC_G(N)g^{-1}=C_G(N)$ for every $g\in G$, which is normality by [L2]. This proves the stated claim. [L1, L2, step 2.1] ∎

```

## DEPENDENCY: lem-nontrivial-normal-subgroup-of-a-solvable-group-has-an-abelian-normal-subgroup

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

## DEPENDENCY: lem-dedekind-modular-law-for-subgroups

```markdown
---
id: lem-dedekind-modular-law-for-subgroups
kind: lemma
title: "Dedekind's modular law for subgroup products"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-subgroup]
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

Let $A,B,C\le G$ with $A\le C$. If $AB$ is a subgroup of $G$, then
$$A(B\cap C)=AB\cap C.$$
The equality also holds as an equality of subsets whenever the displayed products are formed; the subgroup hypothesis ensures that both sides are subgroups in later applications.

## Facts & Assumptions

**Given:** Subgroups $A,B,C\le G$ with $A\le C$, and with $AB$ a subgroup.

[F1] A subgroup contains the identity and inverses and is closed under products ([[def-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 If $x\in A(B\cap C)$, write $x=ab$ with $a\in A$ and $b\in B\cap C$; then $x\in AB$, and $a,b\in C$ gives $x\in C$, so $x\in AB\cap C$. [given, F1]

1.2 If $x\in AB\cap C$, write $x=ab$ with $a\in A$ and $b\in B$; since $a,x\in C$, one has $b=a^{-1}x\in C$, hence $b\in B\cap C$ and $x\in A(B\cap C)$. [given, F1]

2.1 The two inclusions prove $A(B\cap C)=AB\cap C$. [step 1.1, step 1.2] ∎

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

## DEPENDENCY: lem-intersection-of-normal-subgroups

```markdown
---
id: lem-intersection-of-normal-subgroups
kind: lemma
title: "The intersection of a nonempty family of normal subgroups is normal"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-intersection-of-subgroups, thm-normal-subgroup-characterisations]
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
    - title: "Encyclopedia of Mathematics, Normal subgroup"
      url: "https://encyclopediaofmath.org/wiki/Normal_subgroup"
pipeline_run: null
---

## Statement

Let $G$ be a group and let $\mathcal N$ be a nonempty family of normal
subgroups of $G$. Then

$$K:=\bigcap_{N\in\mathcal N}N$$

is a normal subgroup of $G$.

## Facts & Assumptions

**Given:** A group $G$ and a nonempty family $\mathcal N$ of normal subgroups of $G$.

[L1] The intersection of a nonempty family of subgroups of a group is a subgroup ([[lem-intersection-of-subgroups]]).

[L2] A subgroup $K\le G$ is normal if $gKg^{-1}\subseteq K$ for every $g\in G$ ([[thm-normal-subgroup-characterisations]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the set $K=\bigcap_{N\in\mathcal N}N$ is a subgroup of $G$. [L1]

1.2 Fix $g\in G$ and $x\in K$. For every $N\in\mathcal N$, one has $x\in N$ and $N\mathrel{\trianglelefteq}G$, so $gxg^{-1}\in N$ by [L2]. Hence $gxg^{-1}\in K$. [given, L2]

2.1 Thus $gKg^{-1}\subseteq K$ for every $g\in G$, and [L2] gives $K\mathrel{\trianglelefteq}G$. [step 1.1, step 1.2, L2] ∎

```

## DEPENDENCY: def-nilpotent-group-and-nilpotency-class

```markdown
---
id: def-nilpotent-group-and-nilpotency-class
kind: definition
title: "Nilpotent groups and nilpotency class"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-upper-central-series, thm-well-ordering-principle]
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

A group $G$ is **nilpotent** if $Z_c(G)=G$ for some $c\in\mathbb N$, where $(Z_r(G))$ is its upper central series ([[def-upper-central-series]]). The least such $c$ is the **nilpotency class** of $G$. This least index exists by the well-ordering principle for nonempty subsets of $\mathbb N$ ([[thm-well-ordering-principle]]).

Thus the trivial group has class $0$. A nontrivial group has class $1$ exactly when it is abelian.

```

## DEPENDENCY: def-upper-central-series

```markdown
---
id: def-upper-central-series
kind: definition
title: "The upper central series"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-center-of-a-group, def-quotient-group, thm-correspondence-theorem-groups]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
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

The **upper central series** of a group $G$ begins with $Z_0(G)=1$. Having defined $Z_r(G)\trianglelefteq G$, define $Z_{r+1}(G)$ to be the inverse image of the center $Z(G/Z_r(G))$ under the quotient map $G\to G/Z_r(G)$ ([[def-center-of-a-group]], [[def-quotient-group]]). Equivalently,
$$Z_{r+1}(G)/Z_r(G)=Z(G/Z_r(G)).$$
The correspondence theorem makes this inverse image a uniquely determined normal subgroup containing $Z_r(G)$ ([[thm-correspondence-theorem-groups]]). In particular, $Z_1(G)=Z(G)$.

```

## DEPENDENCY: def-center-of-a-group

```markdown
---
id: def-center-of-a-group
kind: definition
title: "The center $Z(G)$ of a group"
status: published
origin: session
authorship: literature-derived
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-02
sources:
  scraped: []
  references:
    - title: "Encyclopedia of Mathematics, Characteristic subgroup"
      url: "https://encyclopediaofmath.org/wiki/Characteristic_subgroup"
pipeline_run: null
---

## Definition

Let $G$ be a group ([[def-group]]). The **center of $G$** is

$$Z(G):=\{z\in G:zg=gz\text{ for every }g\in G\}.$$

Thus $Z(G)$ consists of the elements that commute with every element of $G$.
Its subgroup and normality properties are proved in [[lem-center-is-normal]].

```

## DEPENDENCY: lem-center-is-normal

```markdown
---
id: lem-center-is-normal
kind: lemma
title: "The center of a group is a normal subgroup"
status: published
origin: session
authorship: ai-altered
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-center-of-a-group, thm-normal-subgroup-characterisations, def-subgroup]
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
    - title: "Encyclopedia of Mathematics, Characteristic subgroup"
      url: "https://encyclopediaofmath.org/wiki/Characteristic_subgroup"
pipeline_run: null
---

## Statement

For every group $G$, the center $Z(G)$ is a normal subgroup of $G$.

## Facts & Assumptions

**Given:** A group $G$ with identity $e$ and center $Z(G)$.

[F1] The center is $Z(G)=\{z\in G:zg=gz\text{ for every }g\in G\}$ ([[def-center-of-a-group]]).

[F2] A subset of a group is a subgroup when it contains the identity and is closed under products and inverses ([[def-subgroup]]).

[L1] A subgroup $N\le G$ is normal if $gNg^{-1}=N$ for every $g\in G$ ([[thm-normal-subgroup-characterisations]]).

## Proof

**Proof technique:** direct.

1.1 The identity lies in $Z(G)$. If $x,y\in Z(G)$ and $g\in G$, then $(xy)g=x(yg)=x(gy)=(xg)y=(gx)y=g(xy)$, so $xy\in Z(G)$. If $x\in Z(G)$, then $xg=gx$ implies $x^{-1}g=gx^{-1}$ after multiplying by $x^{-1}$ on both sides, so $x^{-1}\in Z(G)$. Hence $Z(G)\le G$. [F1, F2, algebra]

1.2 If $z\in Z(G)$ and $g\in G$, then $gzg^{-1}=zgg^{-1}=z$. Therefore $gZ(G)g^{-1}=Z(G)$ for every $g\in G$. [F1, algebra]

2.1 Steps 1.1 and 1.2 show that $Z(G)$ is a subgroup invariant under conjugation, so it is normal. [step 1.1, step 1.2, L1] ∎

```


## What the lead Alpha most wants tested on this item

1. The Statement was NARROWED against its source. Craven, Finite Group Theory,
   Theorem 2.13 (Philip Hall) reads "Let G be a soluble group. We have
   C_G(F(G)) <= F(G)." The item says "finite solvable", because the library's
   def-fitting-subgroup-of-a-finite-group defines F(G) only for finite G, and
   provenance.statement is `ai-altered` for exactly that reason. Is the
   narrowing faithful, and does any step silently need more than finiteness and
   solvability?
2. Step 7.1 applies the Dedekind modular law with a VARIABLE CLASH: it
   substitutes the lemma's A := F, B := C, C := A. Check that the lemma's own
   hypothesis (its A <= C, i.e. F <= A) and its "AB is a subgroup" hypothesis
   (i.e. FC) are actually discharged, and that FC and A intersect back to A.
3. Step 9.1 concludes nilpotency from Z_2(D) = D. The library defines nilpotence
   by the UPPER central series. Does the step quietly assume the upper/lower
   central series equivalence, which is not cited?
4. Step 7.2 claims [D,D] <= Z(D). Verify both halves: that [D,D] <= [A,A] <= F,
   and that D <= C_G(F) makes every element of D commute with every element of
   [D,D].
5. The eight boundary dispositions. Instantiate G = 1, F = 1, D = F, A = CF, and
   both directions of the containment, and say whether each recorded disposition
   is TRUE. This class hid confirmed-fatal defects on frontier-13 and
   frontier-14.
