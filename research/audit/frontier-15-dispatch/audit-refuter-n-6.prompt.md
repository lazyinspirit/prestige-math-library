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
label: n-6

run: frontier-15
role: refuter
label: n-6
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

---

# DEPENDENCY TEXT — the cited items, title and claim section only

## DEPENDENCY: thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup

```markdown
title: "The Fitting subgroup is nilpotent and is the largest normal nilpotent subgroup of a finite group"

## Statement
For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$. See [[def-fitting-subgroup-of-a-finite-group]].
```

## DEPENDENCY: cor-frattini-subgroup-is-contained-in-the-fitting-subgroup

```markdown
title: "The Frattini subgroup is contained in the Fitting subgroup"

## Statement
For every finite group $G$, $\Phi(G)\le F(G)$. See [[thm-frattini-subgroup-is-nilpotent]].
```

## DEPENDENCY: thm-nilpotence-is-detected-modulo-the-frattini-subgroup

```markdown
title: "Nilpotence lifts over the Frattini subgroup of a finite group"

## Statement
Let $G$ be finite and let $\Phi(G)\le N\trianglelefteq G$. Then $N$ is nilpotent if and only if $N/\Phi(G)$ is nilpotent. In particular, $G$ is nilpotent if and only if $G/\Phi(G)$ is nilpotent. See [[def-frattini-subgroup-of-a-finite-group]].
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

## DEPENDENCY: def-group-isomorphism-and-automorphism

```markdown
title: 'Group isomorphisms, automorphisms and the set $\operatorname{Aut}(G)$'

## Definition
Group isomorphisms, automorphisms and the set $\operatorname{Aut}(G)$.

An **isomorphism** $f:G\to H$ is a bijective group homomorphism
([[def-group-homomorphism]], [[def-injection-surjection-bijection]]).  When
$G=H$, it is an **automorphism** of $G$.  Write

$$\operatorname{Aut}(G):=\{f:G\to G:f\text{ is an automorphism}\}.$$
```

## DEPENDENCY: def-external-direct-product-of-groups

```markdown
title: 'The external direct product $G\times H$ with componentwise multiplication'

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
title: '$G\times H$ is a group with identity $(e_G,e_H)$, coordinatewise inverses, and homomorphic coordinate projections'

## Statement
For groups $G$ and $H$, the componentwise operation of
[[def-external-direct-product-of-groups]] makes $G\times H$ a group. Its
identity is $(e_G,e_H)$, and

$$(g,h)^{-1}=(g^{-1},h^{-1}).$$

Moreover the coordinate maps $\pi_G(g,h)=g$ and $\pi_H(g,h)=h$ are group
homomorphisms.
```

## DEPENDENCY: thm-z-mod-p-is-a-field

```markdown
title: "For every prime $p$, the two operations on $\\mathbb{Z}/p$ make it a field"

## Statement
For every prime $p$, the operations of addition and multiplication on
$\mathbb Z/p$ make it a field ([[def-field]]).
```

## DEPENDENCY: thm-standard-representatives-modulo-n

```markdown
title: "For $n\\ge 1$, every class in $\\mathbb{Z}/n$ has one representative $r$ with $0\\le r<n$, so $\\lvert\\mathbb{Z}/n\\rvert=n$; while $\\mathbb{Z}/0$ is in bijection with $\\mathbb{Z}$"

## Statement
Let $n$ be a positive integer. Every class in $\mathbb Z/n$
([[def-integers-modulo-n]]) contains exactly one integer $r$ with
$0\le r<n$. Consequently the map

$$r\longmapsto[r]_n\qquad(0\le r<n)$$

is a bijection from the von Neumann natural $n$ to $\mathbb Z/n$, and
$|\mathbb Z/n|=n$. This includes $n=1$, where the only representative is $0$.
For $n=0$, the map $a\mapsto[a]_0$ is a bijection $\mathbb Z\to\mathbb Z/0$.
```

## DEPENDENCY: thm-product-rule

```markdown
title: "The product rule: $\\lvert A \\times B\\rvert = \\lvert A\\rvert\\,\\lvert B\\rvert$, and $\\big\\lvert\\prod_{i<m} A_i\\big\\rvert = \\prod_{i<m}\\lvert A_i\\rvert$"

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
```

## DEPENDENCY: thm-subset-of-a-finite-set

```markdown
title: "A subset of a finite set is finite, with $\\lvert B\\rvert \\le \\lvert A\\rvert$, and equality holds if and only if $B = A$"

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

## DEPENDENCY: thm-sylow-third-theorem

```markdown
title: "Sylow III: $n_p\\equiv1\\pmod p$ and $n_p\\mid m$ when $|G|=p^a m$ with $p\\nmid m$"

## Statement
Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$ See [[thm-sylow-second-theorem]].
```

## DEPENDENCY: cor-sylow-subgroup-normal-iff-unique

```markdown
title: "A Sylow $p$-subgroup is normal if and only if it is unique"

## Statement
A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. See [[thm-sylow-second-theorem]].
```
