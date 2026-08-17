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
label: rr-6

run: frontier-15
role: refuter
label: rr-6
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

## ITEM: ex-heisenberg-sylow-subgroup-of-the-upper-triangular-group

```markdown
---
id: ex-heisenberg-sylow-subgroup-of-the-upper-triangular-group
kind: example
title: "The finite Heisenberg group is the unique Sylow $p$-subgroup of its coordinate upper-triangular group"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-external-direct-product-of-groups, thm-external-direct-product-is-a-group, def-action-by-automorphisms, def-external-semidirect-product, thm-external-semidirect-product-is-a-group, prop-canonical-subgroups-of-an-external-semidirect-product, cor-sylow-subgroup-normal-iff-unique, thm-z-mod-p-is-a-field, thm-standard-representatives-modulo-n, def-unit-group-modulo-n-and-euler-totient, cor-totient-at-one-and-at-a-prime, thm-product-rule]
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

## Example

Let $H_p=\mathbb F_p^3$ with $(a,b,c)(a',b',c')=(a+a',b+b',c+c'+ab')$, and let $D=(\mathbb F_p^\times)^3$ act by diagonal coordinate scaling. In the coordinate upper-triangular group $B_p=H_p\rtimes D$, the subgroup $H_p$ is the unique Sylow $p$-subgroup. See [[def-external-direct-product-of-groups]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] Let $G$ and $H$ be groups. Their external direct product has underlying set $$G\times H:=\{(g,h):g\in G,\ h\in H\}$$ and componentwise operation $$(g,h)(g',h') := (gg',hh').$$ The fact that this operation makes $G\times H$ a group, with the indicated identity and inverses, is proved in thm-external-direct-product-is-a-group. Until that result is used, this definition introduces only the set and its componentwise binary operation. ([[def-external-direct-product-of-groups]]).

[L2] For groups $G$ and $H$, the componentwise operation of def-external-direct-product-of-groups makes $G\times H$ a group. Its identity is $(e_G,e_H)$, and $$(g,h)^{-1}=(g^{-1},h^{-1}).$$ Moreover the coordinate maps $\pi_G(g,h)=g$ and $\pi_H(g,h)=h$ are group homomorphisms. ([[thm-external-direct-product-is-a-group]]).

[L3] An action of a group $H$ on a group $N$ by automorphisms is a homomorphism $$\alpha:H\longrightarrow\operatorname{Aut}(N).$$ Here automorphisms are those of def-group-isomorphism-and-automorphism. Writing $\alpha_h=\alpha(h)$, this means that every $\alpha_h$ is an automorphism of $N$, $\alpha_{hk}=\alpha_h\circ\alpha_k$, and $\alpha_1=\operatorname{id}_N$. Equivalently, by thm-group-actions-correspond-to-homomorphisms, it is a group action (def-group-action) on the underlying set of $N$ for which every acting permutation is an automorphism. ([[def-action-by-automorphisms]]).

[L4] For an action $\alpha:H\to\operatorname{Aut}(N)$, the external semidirect product $N\rtimes_\alpha H$ is $N\times H$ with multiplication $$(n,h)(n',h')=(n\alpha_h(n'),hh').$$ ([[def-external-semidirect-product]]).

[L5] Let $\alpha:H\to\operatorname{Aut}(N)$ be an action by automorphisms. The multiplication $$(n,h)(n',h')=\bigl(n\alpha_h(n'),hh'\bigr)$$ makes $N\times H$ a group with identity $(1_N,1_H)$ and inverse $$(n,h)^{-1}=\bigl(\alpha_{h^{-1}}(n^{-1}),h^{-1}\bigr).$$. ([[thm-external-semidirect-product-is-a-group]]).

[L6] In $N\rtimes_\alpha H$, the canonical copies $\bar N=\{(n,1):n\in N\}$ and $\bar H=\{(1,h):h\in H\}$ are subgroups, $\bar N$ is normal, their intersection is trivial, every element has a unique factorization $(n,1)(1,h)$, and $$(1,h)(n,1)(1,h)^{-1}=(\alpha_h(n),1).$$ ([[prop-canonical-subgroups-of-an-external-semidirect-product]]).

[L7] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

[L8] For every prime $p$, the operations of addition and multiplication on $\mathbb Z/p$ make it a field (def-field). ([[thm-z-mod-p-is-a-field]]).

[L9] Let $n$ be a positive integer. Every class in $\mathbb Z/n$ (def-integers-modulo-n) contains exactly one integer $r$ with $0\le r<n$. Consequently the map $$r\longmapsto[r]_n\qquad(0\le r<n)$$ is a bijection from the von Neumann natural $n$ to $\mathbb Z/n$, and $|\mathbb Z/n|=n$. This includes $n=1$, where the only representative is $0$. For $n=0$, the map $a\mapsto[a]_0$ is a bijection $\mathbb Z\to\mathbb Z/0$. ([[thm-standard-representatives-modulo-n]]).

[L10] For $n\ge1$, the unit group is $$(\mathbb Z/n)^\times:=\{u\in\mathbb Z/n:\text{some }v\in\mathbb Z/n\text{ satisfies }uv=[1]_n\},$$ and Euler's totient is $\varphi(n):=|(\mathbb Z/n)^\times|$. ([[def-unit-group-modulo-n-and-euler-totient]]).

[L11] Euler's totient satisfies $\varphi(1)=1$. If $p$ is prime (def-prime), then $$\varphi(p)=p-1.$$. ([[cor-totient-at-one-and-at-a-prime]]).

[L12] 1. If $A$ and $B$ are finite then $A \times B$ is finite and $\lvert A \times B\rvert = \lvert A\rvert \cdot \lvert B\rvert$ (def-finite-cardinality). 2. Let $m \in \mathbb{N}$ and let $A_0, \dots, A_{m-1}$ be finite sets. Write $$\prod_{i<m} A_i := \{\, f : f \text{ is a function with domain } m \text{ and } f(i) \in A_i \text{ for every } i < m \,\}.$$ Then $\prod_{i<m} A_i$ is finite and $\big\lvert\prod_{i<m} A_i\big\rvert = \prod_{i<m}\lvert A_i\rvert$, the right-hand product being the $\mathbb{N}$-valued one of def-nat-finite-sum-and-product. ([[thm-product-rule]]).

## Verification

**Proof technique:** direct.

1.1 In $H_p=\mathbb F_p^3$, expanding both triple products gives the same third coordinate $c+c'+c''+ab'+ab''+a'b''$; hence the operation is associative, with identity $(0,0,0)$ and inverse $(a,b,c)^{-1}=(-a,-b,-c+ab)$. [L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, L11, L12, given, algebra]

2.1 For $d=(d_1,d_2,d_3)\in D=(\mathbb F_p^\times)^3$, the scaling factors on $a,b,c$ are $\lambda=d_1d_2^{-1}$, $\mu=d_2d_3^{-1}$, and $\lambda\mu=d_1d_3^{-1}$. This identity preserves the cross term $ab'$, so the scaling is an automorphism, and coordinate multiplication makes $D\to\operatorname{Aut}(H_p)$ a homomorphism. [step 1.1, given, algebra]

3.1 The semidirect product $B_p=H_p\rtimes D$ is therefore defined, and its canonical copy of $H_p$ is normal. [step 2.1, given, algebra]

4.1 Since $|H_p|=p^3$ and $|B_p|=p^3(p-1)^3$, $H_p$ has the full $p$-part of $|B_p|$; normality makes it the unique Sylow $p$-subgroup. For $p=2$, $D$ is trivial and $B_p=H_p$. This proves the stated claim. [step 1.1, step 3.1, given, algebra] ∎

```

### Recorded proof contract for ex-heisenberg-sylow-subgroup-of-the-upper-triangular-group

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-external-direct-product-of-groups",
   "source_section": "Definition",
   "quote": "Let $G$ and $H$ be groups. Their **external direct product** has underlying set\n\n$$G\\times H:=\\{(g,h):g\\in G,\\ h\\in H\\}$$\n\nand componentwise operation\n\n$$(g,h)(g',h') := (gg',hh').$$\n\nThe fact that this operation makes $G\\times H$ a group, with the indicated\nidentity and inverses, is proved in [[thm-external-direct-product-is-a-group]].\nUntil that result is used, this definition introduces only the set and its\ncomponentwise binary operation.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-external-direct-product-is-a-group",
   "source_section": "Statement",
   "quote": "For groups $G$ and $H$, the componentwise operation of\n[[def-external-direct-product-of-groups]] makes $G\\times H$ a group. Its\nidentity is $(e_G,e_H)$, and\n\n$$(g,h)^{-1}=(g^{-1},h^{-1}).$$\n\nMoreover the coordinate maps $\\pi_G(g,h)=g$ and $\\pi_H(g,h)=h$ are group\nhomomorphisms.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-action-by-automorphisms",
   "source_section": "Definition",
   "quote": "An **action of a group $H$ on a group $N$ by automorphisms** is a homomorphism\n\n$$\\alpha:H\\longrightarrow\\operatorname{Aut}(N).$$\n\nHere automorphisms are those of [[def-group-isomorphism-and-automorphism]]. Writing $\\alpha_h=\\alpha(h)$, this means that every $\\alpha_h$ is an automorphism of $N$, $\\alpha_{hk}=\\alpha_h\\circ\\alpha_k$, and $\\alpha_1=\\operatorname{id}_N$. Equivalently, by [[thm-group-actions-correspond-to-homomorphisms]], it is a group action ([[def-group-action]]) on the underlying set of $N$ for which every acting permutation is an automorphism.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "def-external-semidirect-product",
   "source_section": "Definition",
   "quote": "Let $N$ and $H$ be groups ([[def-group]]), and let $\\alpha:H\\to\\operatorname{Aut}(N)$ be an action by automorphisms ([[def-action-by-automorphisms]]). The **external semidirect product** $N\\rtimes_\\alpha H$ is the set $N\\times H$ with multiplication\n\n$$(n,h)(n',h')=\\bigl(n\\alpha_h(n'),hh'\\bigr).$$\n\nWhen the action is clear, the subscript is omitted.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-external-semidirect-product-is-a-group",
   "source_section": "Statement",
   "quote": "Let $\\alpha:H\\to\\operatorname{Aut}(N)$ be an action by automorphisms. The multiplication\n\n$$(n,h)(n',h')=\\bigl(n\\alpha_h(n'),hh'\\bigr)$$\n\nmakes $N\\times H$ a group with identity $(1_N,1_H)$ and inverse\n\n$$(n,h)^{-1}=\\bigl(\\alpha_{h^{-1}}(n^{-1}),h^{-1}\\bigr).$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L6",
   "source": "prop-canonical-subgroups-of-an-external-semidirect-product",
   "source_section": "Statement",
   "quote": "In $N\\rtimes_\\alpha H$, the sets\n\n$$\\bar N=\\{(n,1):n\\in N\\},\\qquad \\bar H=\\{(1,h):h\\in H\\}$$\n\nare subgroups, $\\bar N$ is normal, $\\bar N\\cap\\bar H=\\{(1,1)\\}$, and every element has a unique factorisation $(n,1)(1,h)$. Moreover,\n\n$$(1,h)(n,1)(1,h)^{-1}=(\\alpha_h(n),1).$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L7",
   "source": "cor-sylow-subgroup-normal-iff-unique",
   "source_section": "Statement",
   "quote": "A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. See [[thm-sylow-second-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L8",
   "source": "thm-z-mod-p-is-a-field",
   "source_section": "Statement",
   "quote": "For every prime $p$, the operations of addition and multiplication on\n$\\mathbb Z/p$ make it a field ([[def-field]]).",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L9",
   "source": "thm-standard-representatives-modulo-n",
   "source_section": "Statement",
   "quote": "Let $n$ be a positive integer. Every class in $\\mathbb Z/n$\n([[def-integers-modulo-n]]) contains exactly one integer $r$ with\n$0\\le r<n$. Consequently the map\n\n$$r\\longmapsto[r]_n\\qquad(0\\le r<n)$$\n\nis a bijection from the von Neumann natural $n$ to $\\mathbb Z/n$, and\n$|\\mathbb Z/n|=n$. This includes $n=1$, where the only representative is $0$.\nFor $n=0$, the map $a\\mapsto[a]_0$ is a bijection $\\mathbb Z\\to\\mathbb Z/0$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L10",
   "source": "def-unit-group-modulo-n-and-euler-totient",
   "source_section": "Definition",
   "quote": "Let $n\\ge1$ be an integer. Multiplication makes $\\mathbb Z/n$ a commutative\nmonoid with identity $[1]_n$ by [[thm-integers-modulo-n-basic-algebra]]. A class\n$u\\in\\mathbb Z/n$ is a **unit** when it is invertible in that monoid\n([[def-invertible-element]]). The set of all units is\n\n$$(\\mathbb Z/n)^\\times:=\\{\\,u\\in\\mathbb Z/n:\\text{some }v\\in\\mathbb Z/n\\text{ satisfies }uv=[1]_n\\,\\}.$$\n\nBy [[lem-monoid-units-form-a-group]], multiplication restricts to a group\noperation on $(\\mathbb Z/n)^\\times$, called the **unit group modulo $n$**.\n\nThe quotient $\\mathbb Z/n$ is finite with cardinality $n$ by\n[[thm-standard-representatives-modulo-n]], and its unit set is a finite subset by\n[[thm-subset-of-a-finite-set]]. Euler's **totient function** is therefore defined\nfor every positive integer $n$ by\n\n$$\\varphi(n):=\\big|(\\mathbb Z/n)^\\times\\big|\\in\\mathbb N$$\n\n([[def-finite-cardinality]]). For $n=1$, the quotient has one element, which is\nits multiplicative identity and hence a unit, so $\\varphi(1)=1$ follows from the\ndefinition.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L11",
   "source": "cor-totient-at-one-and-at-a-prime",
   "source_section": "Statement",
   "quote": "Euler's totient satisfies $\\varphi(1)=1$. If $p$ is prime\n([[def-prime]]), then\n\n$$\\varphi(p)=p-1.$$",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L12",
   "source": "thm-product-rule",
   "source_section": "Statement",
   "quote": "1. If $A$ and $B$ are finite then $A \\times B$ is finite and\n   $\\lvert A \\times B\\rvert = \\lvert A\\rvert \\cdot \\lvert B\\rvert$\n   ([[def-finite-cardinality]]).\n2. Let $m \\in \\mathbb{N}$ and let $A_0, \\dots, A_{m-1}$ be finite sets. Write\n   $$\\prod_{i<m} A_i := \\{\\, f : f \\text{ is a function with domain } m \\text{ and } f(i) \\in A_i \\text{ for every } i < m \\,\\}.$$\n   Then $\\prod_{i<m} A_i$ is finite and\n   $\\big\\lvert\\prod_{i<m} A_i\\big\\rvert = \\prod_{i<m}\\lvert A_i\\rvert$, the\n   right-hand product being the $\\mathbb{N}$-valued one of\n   [[def-nat-finite-sum-and-product]].\n\nAt $m = 0$ clause 2 reads $\\big\\lvert\\prod_{i<0} A_i\\big\\rvert = 1$: there is\nexactly one function with domain $\\varnothing$, the empty function, and the empty\nproduct is $1$. Both sides are computed, not stipulated.\n\n```tikz\n\\begin{tikzpicture}[x=1.45cm,y=0.9cm]\n  \\node at (0,2.45) {$a_0$};\n  \\node at (1,2.45) {$a_1$};\n  \\node at (2,2.45) {$a_2$};\n  \\node at (-1.1,1.5) {$b_0$};\n  \\node at (-1.1,0.5) {$b_1$};\n  \\draw (-0.5,0) rectangle (2.5,2);\n  \\draw (0.5,0) -- (0.5,2);\n  \\draw (1.5,0) -- (1.5,2);\n  \\draw (-0.5,1) -- (2.5,1);\n  \\node at (0,1.5) {$(a_0,b_0)$};\n  \\node at (1,1.5) {$(a_1,b_0)$};\n  \\node at (2,1.5) {$(a_2,b_0)$};\n  \\node at (0,0.5) {$(a_0,b_1)$};\n  \\node at (1,0.5) {$(a_1,b_1)$};\n  \\node at (2,0.5) {$(a_2,b_1)$};\n  \\node at (1,-0.6) {$|A\\times B|=3\\cdot2=6$};\n\\end{tikzpicture}\n```",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "In $H_p=\\mathbb F_p^3$, expanding both triple products gives the same third coordinate $c+c'+c''+ab'+ab''+a'b''$; hence the operation is associative, with identity $(0,0,0)$ and inverse $(a,b,c)^{-1}=(-a,-b,-c+ab)$.",
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
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-2-1",
   "claim": "For $d=(d_1,d_2,d_3)\\in D=(\\mathbb F_p^\\times)^3$, the scaling factors on $a,b,c$ are $\\lambda=d_1d_2^{-1}$, $\\mu=d_2d_3^{-1}$, and $\\lambda\\mu=d_1d_3^{-1}$. This identity preserves the cross term $ab'$, so the scaling is an automorphism, and coordinate multiplication makes $D\\to\\operatorname{Aut}(H_p)$ a homomorphism.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "The semidirect product $B_p=H_p\\rtimes D$ is therefore defined, and its canonical copy of $H_p$ is normal.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-4-1",
   "claim": "Since $|H_p|=p^3$ and $|B_p|=p^3(p-1)^3$, $H_p$ has the full $p$-part of $|B_p|$; normality makes it the unique Sylow $p$-subgroup. For $p=2$, $D$ is trivial and $B_p=H_p$. This proves the stated claim.",
   "step": "4.1",
   "inputs": [
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
   "status": "not_applicable",
   "reason": "The finite Heisenberg group is the unique Sylow $p$-subgroup of its coordinate upper-triangular group: the claim “Let $H_p=\\mathbb F_p^3$ with $(a,b,c)(a′,b′,c′)=(a+a′,b+b′,c+c′+ab′)$, and let $D=(\\mathbb F_p^\\times)^3$ act by diagonal coordinate scaling. In the coordinate upper-triangular group $B_p=H_p\\rtimes D$, the sub” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "The finite Heisenberg group is the unique Sylow $p$-subgroup of its coordinate upper-triangular group: the zero or trivial specialization for “Let $H_p=\\mathbb F_p^3$ with $(a,b,c)(a′,b′,c′)=(a+a′,b+b′,c+c′+ab′)$, and let $D=(\\mathbb F_p^\\times)^3$ act by diagonal coordinate scaling. In the coordinate upper-triangular group $B_p=H_p\\rtimes D$, the sub” is resolved in step 4.1: “Since $|H_p|=p^3$ and $|B_p|=p^3(p-1)^3$, $H_p$ has the full $p$-part of $|B_p|$; normality makes it the unique Sylow $p$-subgroup. For $p=2$, $D$ is trivial and $B_p=H_p$. This proves the stated claim.”."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "The finite Heisenberg group is the unique Sylow $p$-subgroup of its coordinate upper-triangular group: the smallest positive, one-factor, or $p=2$ specialization for “Let $H_p=\\mathbb F_p^3$ with $(a,b,c)(a′,b′,c′)=(a+a′,b+b′,c+c′+ab′)$, and let $D=(\\mathbb F_p^\\times)^3$ act by diagonal coordinate scaling. In the coordinate upper-triangular group $B_p=H_p\\rtimes D$, the sub” is resolved in step 4.1: “Since $|H_p|=p^3$ and $|B_p|=p^3(p-1)^3$, $H_p$ has the full $p$-part of $|B_p|$; normality makes it the unique Sylow $p$-subgroup. For $p=2$, $D$ is trivial and $B_p=H_p$. This proves the stated claim.”."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The finite Heisenberg group is the unique Sylow $p$-subgroup of its coordinate upper-triangular group: the collapsed or coincident-input case admitted by the hypotheses for “Let $H_p=\\mathbb F_p^3$ with $(a,b,c)(a′,b′,c′)=(a+a′,b+b′,c+c′+ab′)$, and let $D=(\\mathbb F_p^\\times)^3$ act by diagonal coordinate scaling. In the coordinate upper-triangular group $B_p=H_p\\rtimes D$, the sub” is resolved in step 4.1: “Since $|H_p|=p^3$ and $|B_p|=p^3(p-1)^3$, $H_p$ has the full $p$-part of $|B_p|$; normality makes it the unique Sylow $p$-subgroup. For $p=2$, $D$ is trivial and $B_p=H_p$. This proves the stated claim.”."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "The finite Heisenberg group is the unique Sylow $p$-subgroup of its coordinate upper-triangular group: the claim “Let $H_p=\\mathbb F_p^3$ with $(a,b,c)(a′,b′,c′)=(a+a′,b+b′,c+c′+ab′)$, and let $D=(\\mathbb F_p^\\times)^3$ act by diagonal coordinate scaling. In the coordinate upper-triangular group $B_p=H_p\\rtimes D$, the sub” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "The finite Heisenberg group is the unique Sylow $p$-subgroup of its coordinate upper-triangular group: the claim “Let $H_p=\\mathbb F_p^3$ with $(a,b,c)(a′,b′,c′)=(a+a′,b+b′,c+c′+ab′)$, and let $D=(\\mathbb F_p^\\times)^3$ act by diagonal coordinate scaling. In the coordinate upper-triangular group $B_p=H_p\\rtimes D$, the sub” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The finite Heisenberg group is the unique Sylow $p$-subgroup of its coordinate upper-triangular group: the claim “Let $H_p=\\mathbb F_p^3$ with $(a,b,c)(a′,b′,c′)=(a+a′,b+b′,c+c′+ab′)$, and let $D=(\\mathbb F_p^\\times)^3$ act by diagonal coordinate scaling. In the coordinate upper-triangular group $B_p=H_p\\rtimes D$, the sub” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The finite Heisenberg group is the unique Sylow $p$-subgroup of its coordinate upper-triangular group: the claim “Let $H_p=\\mathbb F_p^3$ with $(a,b,c)(a′,b′,c′)=(a+a′,b+b′,c+c′+ab′)$, and let $D=(\\mathbb F_p^\\times)^3$ act by diagonal coordinate scaling. In the coordinate upper-triangular group $B_p=H_p\\rtimes D$, the sub” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-sylow-data-for-groups-of-order-at-most-fifteen

```markdown
---
id: ex-sylow-data-for-groups-of-order-at-most-fifteen
kind: example
title: "Sylow data for finite groups of order at most $15$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sylow-first-theorem, thm-sylow-third-theorem, cor-sylow-subgroup-normal-iff-unique, thm-classification-of-groups-of-order-pq, thm-finite-p-groups-are-nilpotent]
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

## Example

For finite groups of positive order at most $15$, the Sylow subgroup orders and possible counts are as follows. An entry $p^a:n_p$ gives the Sylow order and the permitted values of its count.

$$\begin{array}{c|l|l}|G|&\text{Sylow data}&\text{forced normal Sylow subgroups}\\ \hline 1&\text{none}&\text{none}\\ 2&2:1&2\\ 3&3:1&3\\ 4&4:1&4\\ 5&5:1&5\\ 6&2:1\text{ or }3,\ 3:1&3\\ 7&7:1&7\\ 8&8:1&8\\ 9&9:1&9\\ 10&2:1\text{ or }5,\ 5:1&5\\ 11&11:1&11\\ 12&4:1\text{ or }3,\ 3:1\text{ or }4&\text{none from the numerical restrictions alone}\\ 13&13:1&13\\ 14&2:1\text{ or }7,\ 7:1&7\\ 15&3:1,\ 5:1&3,5\end{array}$$

The order-$15$ entry also uses the order-$pq$ classification; no classification at orders $8$ or $12$ is asserted. See [[thm-sylow-first-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup (def-sylow-p-subgroup). ([[thm-sylow-first-theorem]]).

[L2] Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$. ([[thm-sylow-third-theorem]]).

[L3] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

[L4] Let $p<q$ be primes. - If $p\nmid(q-1)$, every group of order $pq$ is cyclic. - If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$. ([[thm-classification-of-groups-of-order-pq]]).

[L5] Every finite $p$-group is nilpotent. The trivial group is included and has nilpotency class zero. ([[thm-finite-p-groups-are-nilpotent]]).

## Verification

**Proof technique:** direct.

1.1 Factoring each order and applying $n_p\mid |G|/p^a$ together with $n_p\equiv1\pmod p$ gives every entry through order $14$, including the two independent possibilities displayed at order $12$. [L1, L2, L3, L4, L5, given, algebra]

2.1 At order $15$, Sylow III forces $n_5=1$, while the order-$pq$ classification makes the group cyclic and hence also gives $n_3=1$. The entries at orders $8$ and $12$ record only Sylow data, not isomorphism types. [step 1.1, given, algebra]

3.1 At order $1$ no prime divides the group order, so there is no Sylow subgroup to list. This proves the stated claim. [step 2.1, given, algebra] ∎

```

### Recorded proof contract for ex-sylow-data-for-groups-of-order-at-most-fifteen

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-sylow-first-theorem",
   "source_section": "Statement",
   "quote": "Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup ([[def-sylow-p-subgroup]]). See [[def-sylow-p-subgroup]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-sylow-third-theorem",
   "source_section": "Statement",
   "quote": "Let $|G|=p^am$ with $p\\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\\equiv1\\pmod p,\\qquad n_p(G)\\mid m.$$ See [[thm-sylow-second-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "cor-sylow-subgroup-normal-iff-unique",
   "source_section": "Statement",
   "quote": "A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. See [[thm-sylow-second-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-classification-of-groups-of-order-pq",
   "source_section": "Statement",
   "quote": "Let $p<q$ be primes.\n\n- If $p\\nmid(q-1)$, every group of order $pq$ is cyclic.\n- If $p\\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\\rtimes C_p$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-finite-p-groups-are-nilpotent",
   "source_section": "Statement",
   "quote": "Every finite $p$-group is nilpotent. The trivial group is included and has nilpotency class zero.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "Factoring each order and applying $n_p\\mid |G|/p^a$ together with $n_p\\equiv1\\pmod p$ gives every entry through order $14$, including the two independent possibilities displayed at order $12$.",
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
   "claim": "At order $15$, Sylow III forces $n_5=1$, while the order-$pq$ classification makes the group cyclic and hence also gives $n_3=1$. The entries at orders $8$ and $12$ record only Sylow data, not isomorphism types.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "At order $1$ no prime divides the group order, so there is no Sylow subgroup to list. This proves the stated claim.",
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
   "evidence": "Sylow data for finite groups of order at most $15$: the empty-object specialization for “For finite groups of positive order at most $15$, the Sylow restrictions in the displayed table determine the listed subgroup orders, possible counts, and forced normal Sylow subgroups; no classification at ord” is resolved in step 3.1: “At order $1$ no prime divides the group order, so there is no Sylow subgroup to list. This proves the stated claim.”."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "Sylow data for finite groups of order at most $15$: the claim “For finite groups of positive order at most $15$, the Sylow restrictions in the displayed table determine the listed subgroup orders, possible counts, and forced normal Sylow subgroups; no classification at ord” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "Sylow data for finite groups of order at most $15$: the smallest positive, one-factor, or $p=2$ specialization for “For finite groups of positive order at most $15$, the Sylow restrictions in the displayed table determine the listed subgroup orders, possible counts, and forced normal Sylow subgroups; no classification at ord” is resolved in step 3.1: “At order $1$ no prime divides the group order, so there is no Sylow subgroup to list. This proves the stated claim.”."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "Sylow data for finite groups of order at most $15$: the collapsed or coincident-input case admitted by the hypotheses for “For finite groups of positive order at most $15$, the Sylow restrictions in the displayed table determine the listed subgroup orders, possible counts, and forced normal Sylow subgroups; no classification at ord” is resolved in step 3.1: “At order $1$ no prime divides the group order, so there is no Sylow subgroup to list. This proves the stated claim.”."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "Sylow data for finite groups of order at most $15$: the initial index and termination or stabilization endpoint for “For finite groups of positive order at most $15$, the Sylow restrictions in the displayed table determine the listed subgroup orders, possible counts, and forced normal Sylow subgroups; no classification at ord” is resolved in step 3.1: “At order $1$ no prime divides the group order, so there is no Sylow subgroup to list. This proves the stated claim.”."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Sylow data for finite groups of order at most $15$: the claim “For finite groups of positive order at most $15$, the Sylow restrictions in the displayed table determine the listed subgroup orders, possible counts, and forced normal Sylow subgroups; no classification at ord” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "Sylow data for finite groups of order at most $15$: the claim “For finite groups of positive order at most $15$, the Sylow restrictions in the displayed table determine the listed subgroup orders, possible counts, and forced normal Sylow subgroups; no classification at ord” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "Sylow data for finite groups of order at most $15$: the claim “For finite groups of positive order at most $15$, the Sylow restrictions in the displayed table determine the listed subgroup orders, possible counts, and forced normal Sylow subgroups; no classification at ord” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-groups-of-order-thirty

```markdown
---
id: ex-groups-of-order-thirty
kind: example
title: "The four isomorphism types of groups of order $30$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-groups-of-order-thirty-have-a-normal-sylow-subgroup, thm-classification-of-groups-of-order-pq, lem-actions-related-by-automorphisms-give-isomorphic-semidirect-products, def-external-semidirect-product]
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

## Example

Up to isomorphism, the groups of order $30$ are the four semidirect products $C_{15}\rtimes C_2$ in which the involution acts trivially, by inversion on both prime factors, by inversion on $C_3$ only, or by inversion on $C_5$ only. See [[thm-groups-of-order-thirty-have-a-normal-sylow-subgroup]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] Every group of order $30$ has normal Sylow $3$- and $5$-subgroups and is not simple. ([[thm-groups-of-order-thirty-have-a-normal-sylow-subgroup]]).

[L2] Let $p<q$ be primes. - If $p\nmid(q-1)$, every group of order $pq$ is cyclic. - If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$. ([[thm-classification-of-groups-of-order-pq]]).

[L3] Let $\alpha,β:H\to\operatorname{Aut}(N)$ be actions. If $u\in\operatorname{Aut}(N)$ and $v\in\operatorname{Aut}(H)$ satisfy $$\beta_{v(h)}=u\alpha_hu^{-1}\qquad(h\in H),$$ then $$N\rtimes_\alpha H\cong N\rtimes_\beta H$$. ([[lem-actions-related-by-automorphisms-give-isomorphic-semidirect-products]]).

[L4] Let $N$ and $H$ be groups (def-group), and let $\alpha:H\to\operatorname{Aut}(N)$ be an action by automorphisms (def-action-by-automorphisms). The external semidirect product $N\rtimes_\alpha H$ is the set $N\times H$ with multiplication. ([[def-external-semidirect-product]]).

## Verification

**Proof technique:** direct.

1.1 The normal Sylow $3$- and $5$-subgroups commute and form a cyclic normal subgroup $N\cong C_{15}$. A Sylow $2$-subgroup $C_2$ meets $N$ trivially and $NC_2=G$, so $G\cong C_{15}\rtimes C_2$. [L1, L2, L3, L4, given, algebra]

2.1 Under $C_{15}\cong C_3\times C_5$, an involutory automorphism acts independently on the prime factors. Each factor admits either the trivial action or inversion, giving the four actions stated in the Example. [step 1.1, given, algebra]

3.1 The corresponding centers have orders $30$, $1$, $5$, and $3$, respectively, so the groups are pairwise nonisomorphic. Every group of order $30$ arose in step 1.1, proving exhaustiveness. This proves the stated claim. [step 2.1, given, algebra] ∎

```

### Recorded proof contract for ex-groups-of-order-thirty

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-groups-of-order-thirty-have-a-normal-sylow-subgroup",
   "source_section": "Statement",
   "quote": "Every group of order $30$ has normal Sylow $3$- and $5$-subgroups and is not simple. See [[thm-cauchys-theorem-for-finite-groups]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-classification-of-groups-of-order-pq",
   "source_section": "Statement",
   "quote": "Let $p<q$ be primes.\n\n- If $p\\nmid(q-1)$, every group of order $pq$ is cyclic.\n- If $p\\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\\rtimes C_p$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "lem-actions-related-by-automorphisms-give-isomorphic-semidirect-products",
   "source_section": "Statement",
   "quote": "Let $\\alpha,β:H\\to\\operatorname{Aut}(N)$ be actions. If $u\\in\\operatorname{Aut}(N)$ and $v\\in\\operatorname{Aut}(H)$ satisfy\n\n$$\\beta_{v(h)}=u\\alpha_hu^{-1}\\qquad(h\\in H),$$\n\nthen\n\n$$N\\rtimes_\\alpha H\\cong N\\rtimes_\\beta H$$\n\nby $(n,h)\\mapsto(u(n),v(h))$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "def-external-semidirect-product",
   "source_section": "Definition",
   "quote": "Let $N$ and $H$ be groups ([[def-group]]), and let $\\alpha:H\\to\\operatorname{Aut}(N)$ be an action by automorphisms ([[def-action-by-automorphisms]]). The **external semidirect product** $N\\rtimes_\\alpha H$ is the set $N\\times H$ with multiplication\n\n$$(n,h)(n',h')=\\bigl(n\\alpha_h(n'),hh'\\bigr).$$\n\nWhen the action is clear, the subscript is omitted.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The normal Sylow $3$- and $5$-subgroups commute and form a cyclic normal subgroup $N\\cong C_{15}$. A Sylow $2$-subgroup $C_2$ meets $N$ trivially and $NC_2=G$, so $G\\cong C_{15}\\rtimes C_2$.",
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
   "claim": "Under $C_{15}\\cong C_3\\times C_5$, an involutory automorphism acts independently on the prime factors. Each factor admits either the trivial action or inversion, giving the four actions stated in the Example.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "The corresponding centers have orders $30$, $1$, $5$, and $3$, respectively, so the groups are pairwise nonisomorphic. Every group of order $30$ arose in step 1.1, proving exhaustiveness. This proves the stated claim.",
   "step": "3.1",
   "inputs": [
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
   "reason": "The four isomorphism types of groups of order $30$: the claim “Up to isomorphism, the groups of order $30$ are the four semidirect products $C_{15}\\rtimes C_2$ in which the involution acts trivially, by inversion on both prime factors, by inversion on $C_3$ only, or by inv” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "The four isomorphism types of groups of order $30$: the zero or trivial specialization for “Up to isomorphism, the groups of order $30$ are the four semidirect products $C_{15}\\rtimes C_2$ in which the involution acts trivially, by inversion on both prime factors, by inversion on $C_3$ only, or by inv” is resolved in step 2.1: “Under $C_{15}\\cong C_3\\times C_5$, an involutory automorphism acts independently on the prime factors. Each factor admits either the trivial action or inversion, giving the four actions stated in the Example.”."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "The four isomorphism types of groups of order $30$: the claim “Up to isomorphism, the groups of order $30$ are the four semidirect products $C_{15}\\rtimes C_2$ in which the involution acts trivially, by inversion on both prime factors, by inversion on $C_3$ only, or by inv” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The four isomorphism types of groups of order $30$: the collapsed or coincident-input case admitted by the hypotheses for “Up to isomorphism, the groups of order $30$ are the four semidirect products $C_{15}\\rtimes C_2$ in which the involution acts trivially, by inversion on both prime factors, by inversion on $C_3$ only, or by inv” is resolved in step 2.1: “Under $C_{15}\\cong C_3\\times C_5$, an involutory automorphism acts independently on the prime factors. Each factor admits either the trivial action or inversion, giving the four actions stated in the Example.”."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "The four isomorphism types of groups of order $30$: the claim “Up to isomorphism, the groups of order $30$ are the four semidirect products $C_{15}\\rtimes C_2$ in which the involution acts trivially, by inversion on both prime factors, by inversion on $C_3$ only, or by inv” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "The four isomorphism types of groups of order $30$: the claim “Up to isomorphism, the groups of order $30$ are the four semidirect products $C_{15}\\rtimes C_2$ in which the involution acts trivially, by inversion on both prime factors, by inversion on $C_3$ only, or by inv” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The four isomorphism types of groups of order $30$: the claim “Up to isomorphism, the groups of order $30$ are the four semidirect products $C_{15}\\rtimes C_2$ in which the involution acts trivially, by inversion on both prime factors, by inversion on $C_3$ only, or by inv” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The four isomorphism types of groups of order $30$: the claim “Up to isomorphism, the groups of order $30$ are the four semidirect products $C_{15}\\rtimes C_2$ in which the involution acts trivially, by inversion on both prime factors, by inversion on $C_3$ only, or by inv” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-a-four-is-not-nilpotent

```markdown
---
id: ex-a-four-is-not-nilpotent
kind: example
title: "$A_4$ is not nilpotent"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sylow-characterizations-of-finite-nilpotence, def-alternating-group, cor-sylow-subgroup-normal-iff-unique]
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

## Example

The group $A_4$ has a normal Klein four Sylow $2$-subgroup and four nonnormal Sylow $3$-subgroups. Consequently $A_4$ is not nilpotent. See [[thm-sylow-characterizations-of-finite-nilpotence]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; $G$ is the internal direct product of its Sylow subgroups; and every maximal subgroup of $G$ is normal. ([[thm-sylow-characterizations-of-finite-nilpotence]]).

[L2] For $n\in\mathbb N$, the alternating group is the kernel of the sign homomorphism, $$A_n:=\ker(\operatorname{sgn}:S_n\to\{+1,-1\})=\{\sigma\in S_n:\operatorname{sgn}(\sigma)=1\}.$$ Thus $A_n$ consists exactly of the even permutations. The subgroup and normality assertions implicit in the word “group” follow from thm-image-subgroup-and-kernel-normal. ([[def-alternating-group]]).

[L3] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

## Verification

**Proof technique:** direct.

1.1 The eight $3$-cycles in $A_4$ occur in four inverse pairs, so they generate four distinct subgroups of order $3$. These are all the Sylow $3$-subgroups. [L1, L2, L3, given, algebra]

2.1 Since there is more than one Sylow $3$-subgroup, none is normal and the Sylow characterization rules out nilpotence. By contrast, the identity together with the three double transpositions is a conjugation-invariant Klein four group, hence the normal Sylow $2$-subgroup. This proves the stated claim. [step 1.1, given, algebra] ∎

```

### Recorded proof contract for ex-a-four-is-not-nilpotent

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-sylow-characterizations-of-finite-nilpotence",
   "source_section": "Statement",
   "quote": "For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; $G$ is the internal direct product of its Sylow subgroups; and every maximal subgroup of $G$ is normal. See [[lem-finite-nilpotence-via-normal-sylow-subgroups]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-alternating-group",
   "source_section": "Definition",
   "quote": "For $n\\in\\mathbb N$, the **alternating group** is the kernel of the sign\nhomomorphism,\n\n$$A_n:=\\ker(\\operatorname{sgn}:S_n\\to\\{+1,-1\\})=\\{\\sigma\\in S_n:\\operatorname{sgn}(\\sigma)=1\\}.$$\n\nThus $A_n$ consists exactly of the even permutations. The subgroup and\nnormality assertions implicit in the word “group” follow from\n[[thm-image-subgroup-and-kernel-normal]]",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
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
   "claim": "The eight $3$-cycles in $A_4$ occur in four inverse pairs, so they generate four distinct subgroups of order $3$. These are all the Sylow $3$-subgroups.",
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
   "claim": "Since there is more than one Sylow $3$-subgroup, none is normal and the Sylow characterization rules out nilpotence. By contrast, the identity together with the three double transpositions is a conjugation-invariant Klein four group, hence the normal Sylow $2$-subgroup. This proves the stated claim.",
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
   "reason": "$A_4$ is not nilpotent: the claim “The group $A_4$ has a normal Klein four Sylow $2$-subgroup and four nonnormal Sylow $3$-subgroups. Consequently $A_4$ is not nilpotent.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "$A_4$ is not nilpotent: the claim “The group $A_4$ has a normal Klein four Sylow $2$-subgroup and four nonnormal Sylow $3$-subgroups. Consequently $A_4$ is not nilpotent.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "$A_4$ is not nilpotent: the claim “The group $A_4$ has a normal Klein four Sylow $2$-subgroup and four nonnormal Sylow $3$-subgroups. Consequently $A_4$ is not nilpotent.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "not_applicable",
   "reason": "$A_4$ is not nilpotent: the claim “The group $A_4$ has a normal Klein four Sylow $2$-subgroup and four nonnormal Sylow $3$-subgroups. Consequently $A_4$ is not nilpotent.” does not admit coincident endpoints, an empty choice, or a collapsed structure distinct from its general case."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "$A_4$ is not nilpotent: the claim “The group $A_4$ has a normal Klein four Sylow $2$-subgroup and four nonnormal Sylow $3$-subgroups. Consequently $A_4$ is not nilpotent.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "$A_4$ is not nilpotent: the claim “The group $A_4$ has a normal Klein four Sylow $2$-subgroup and four nonnormal Sylow $3$-subgroups. Consequently $A_4$ is not nilpotent.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "$A_4$ is not nilpotent: the claim “The group $A_4$ has a normal Klein four Sylow $2$-subgroup and four nonnormal Sylow $3$-subgroups. Consequently $A_4$ is not nilpotent.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "$A_4$ is not nilpotent: the claim “The group $A_4$ has a normal Klein four Sylow $2$-subgroup and four nonnormal Sylow $3$-subgroups. Consequently $A_4$ is not nilpotent.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-fitting-and-frattini-subgroups-of-s-three

```markdown
---
id: ex-fitting-and-frattini-subgroups-of-s-three
kind: example
title: "The Fitting and Frattini subgroups of $S_3$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-fitting-subgroup-of-a-finite-group, def-frattini-subgroup-of-a-finite-group, thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup, def-finite-symmetric-group-and-permutation-notation]
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

For $S_3$, one has $O_3(S_3)=A_3$, $O_2(S_3)=1$, $F(S_3)=A_3$, and $\Phi(S_3)=1$. Hence $F(S_3/\Phi(S_3))=F(S_3)/\Phi(S_3)$. See [[def-fitting-subgroup-of-a-finite-group]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] For a finite group $G$, the Fitting subgroup is $$F(G):=\prod_{p\mid |G|}O_p(G),$$ the product of its $p$-cores (def-p-core-of-a-finite-group). The factors are normal, so their finite product is a normal subgroup and does not depend on the order of multiplication. For the trivial group the product is empty and equals $1$. ([[def-fitting-subgroup-of-a-finite-group]]).

[L2] For a finite group $G$, the Frattini subgroup is $$\Phi(G):=\bigcap\{M\le G:M\text{ is maximal proper}\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\Phi(1)=1$. ([[def-frattini-subgroup-of-a-finite-group]]).

[L3] For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$. ([[thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup]]).

[L4] Let $n\in\mathbb N$, so that $n=\{0,1,\dots,n-1\}$ (def-natural-numbers). The symmetric group on $n$ letters is $$S_n:=\operatorname{Sym}(n)=\operatorname{Sym}(\{0,1,\dots,n-1\}),$$ the group of all bijections of $n$ under composition (def-symmetric-group), with the composition convention. ([[def-finite-symmetric-group-and-permutation-notation]]).

## Verification

**Proof technique:** direct.

1.1 The subgroup $A_3$ is the unique Sylow $3$-subgroup, so $O_3(S_3)=A_3$. The three order-$2$ subgroups are conjugate, so no nontrivial $2$-subgroup is normal and $O_2(S_3)=1$. Therefore $F(S_3)=A_3$. [L1, L2, L3, L4, given, algebra]

2.1 The maximal subgroups are $A_3$ and the three order-$2$ subgroups, whose intersection is $1$; hence $\Phi(S_3)=1$. The quotient identity reduces to $F(S_3)=F(S_3)$ and is therefore satisfied. This proves the stated claim. [step 1.1, given, algebra] ∎

```

### Recorded proof contract for ex-fitting-and-frattini-subgroups-of-s-three

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-fitting-subgroup-of-a-finite-group",
   "source_section": "Definition",
   "quote": "For a finite group $G$, the **Fitting subgroup** is $$F(G):=\\prod_{p\\mid |G|}O_p(G),$$ the product of its $p$-cores ([[def-p-core-of-a-finite-group]]). If $A,B\\trianglelefteq G$, then $AB$ is a subgroup, is normal because $gABg^{-1}=AB$, and satisfies $AB=BA$: indeed $ab=(aba^{-1})a\\in BA$, and the reverse inclusion is symmetric. Induction therefore shows that the finite product of the normal factors $O_p(G)$ is a normal subgroup independent of their order. For the trivial group the product is empty and equals $1$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-frattini-subgroup-of-a-finite-group",
   "source_section": "Definition",
   "quote": "For a finite group $G$, the **Frattini subgroup** is $$\\Phi(G):=\\bigcap\\{M\\le G:M\\text{ is maximal proper}\\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\\Phi(1)=1$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup",
   "source_section": "Statement",
   "quote": "For every finite group $G$, $F(G)$ is nilpotent and normal, and every normal nilpotent subgroup of $G$ is contained in $F(G)$. See [[def-fitting-subgroup-of-a-finite-group]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "def-finite-symmetric-group-and-permutation-notation",
   "source_section": "Definition",
   "quote": "Let $n\\in\\mathbb N$, so that $n=\\{0,1,\\dots,n-1\\}$ ([[def-natural-numbers]]). The\n**symmetric group on $n$ letters** is\n\n$$S_n:=\\operatorname{Sym}(n)=\\operatorname{Sym}(\\{0,1,\\dots,n-1\\}),$$\n\nthe group of all bijections of $n$ under composition ([[def-symmetric-group]]),\nwith the composition convention\n\n$$(\\sigma\\tau)(i):=(\\sigma\\circ\\tau)(i)=\\sigma(\\tau(i))\\qquad(i\\in n),$$\n\nso that in a product the right-hand factor acts first. An element of $S_n$ is\nnamed by either of the two notations below.\n\n**One-line notation.** For $\\sigma\\in S_n$, its **one-line form** is the list of\nits values in order of their arguments,\n\n$$\\sigma=[\\sigma(0),\\sigma(1),\\dots,\\sigma(n-1)].$$\n\nThis list has length $n$ and its entries are $0,1,\\dots,n-1$, each occurring\nonce, because $\\sigma$ is a bijection of $n$. Conversely, a list\n$[b_0,b_1,\\dots,b_{n-1}]$ whose entries are $0,1,\\dots,n-1$ each occurring once\nis the one-line form of exactly one element of $S_n$, namely the map sending\neach $i\\in n$ to $b_i$: that map is injective because the entries are distinct,\nand surjective because every element of $n$ occurs among them. So one-line\nnotation is a bijection from $S_n$ to the arrangements of $0,1,\\dots,n-1$ in a\nlist. For $n=0$ the one-line form of the unique element of $S_0$ is the empty\nlist.\n\n**Cycle notation.** For distinct $a_0,a_1,\\dots,a_{k-1}\\in n$ with $k\\ge2$, the\nsymbol $(a_0\\,a_1\\,\\cdots\\,a_{k-1})$ denotes the element of $S_n$ that sends\n$a_i$ to $a_{i+1}$ for each $i<k-1$, sends $a_{k-1}$ to $a_0$, and fixes every\nelement of $n$ outside $\\{a_0,\\dots,a_{k-1}\\}$ ([[def-symmetric-group]]); it is\ncalled a **$k$-cycle**, and a $2$-cycle is a **transposition**. Writing cycle\nsymbols side by side means composing them, so $(a\\,b)(c\\,d)$ is\n$(a\\,b)\\circ(c\\,d)$, and the empty juxtaposition of cycle symbols is the\nidentity $\\operatorname{id}$.\n\nUnlike one-line notation, cycle notation does not name each permutation once:\nthe symbol may be started at any of its entries, so\n\n$$(a_0\\,a_1\\,\\cdots\\,a_{k-1})=(a_1\\,\\cdots\\,a_{k-1}\\,a_0)$$\n\nand each $k$-cycle is written by exactly $k$ symbols of this shape. A cycle\nsymbol also does not record $n$, which must be supplied by the context.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The subgroup $A_3$ is the unique Sylow $3$-subgroup, so $O_3(S_3)=A_3$. The three order-$2$ subgroups are conjugate, so no nontrivial $2$-subgroup is normal and $O_2(S_3)=1$. Therefore $F(S_3)=A_3$.",
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
   "claim": "The maximal subgroups are $A_3$ and the three order-$2$ subgroups, whose intersection is $1$; hence $\\Phi(S_3)=1$. The quotient identity reduces to $F(S_3)=F(S_3)$ and is therefore satisfied. This proves the stated claim.",
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
   "reason": "The Fitting and Frattini subgroups of $S_3$: the claim “For $S_3$, one has $O_3(S_3)=A_3$, $O_2(S_3)=1$, $F(S_3)=A_3$, and $\\Phi(S_3)=1$. Hence $F(S_3/\\Phi(S_3))=F(S_3)/\\Phi(S_3)$.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "The Fitting and Frattini subgroups of $S_3$: the zero or trivial specialization for “For $S_3$, one has $O_3(S_3)=A_3$, $O_2(S_3)=1$, $F(S_3)=A_3$, and $\\Phi(S_3)=1$. Hence $F(S_3/\\Phi(S_3))=F(S_3)/\\Phi(S_3)$.” is resolved in step 1.1: “The subgroup $A_3$ is the unique Sylow $3$-subgroup, so $O_3(S_3)=A_3$. The three order-$2$ subgroups are conjugate, so no nontrivial $2$-subgroup is normal and $O_2(S_3)=1$. Therefore $F(S_3)=A_3$.”."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "The Fitting and Frattini subgroups of $S_3$: the claim “For $S_3$, one has $O_3(S_3)=A_3$, $O_2(S_3)=1$, $F(S_3)=A_3$, and $\\Phi(S_3)=1$. Hence $F(S_3/\\Phi(S_3))=F(S_3)/\\Phi(S_3)$.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The Fitting and Frattini subgroups of $S_3$: the collapsed or coincident-input case admitted by the hypotheses for “For $S_3$, one has $O_3(S_3)=A_3$, $O_2(S_3)=1$, $F(S_3)=A_3$, and $\\Phi(S_3)=1$. Hence $F(S_3/\\Phi(S_3))=F(S_3)/\\Phi(S_3)$.” is resolved in step 1.1: “The subgroup $A_3$ is the unique Sylow $3$-subgroup, so $O_3(S_3)=A_3$. The three order-$2$ subgroups are conjugate, so no nontrivial $2$-subgroup is normal and $O_2(S_3)=1$. Therefore $F(S_3)=A_3$.”."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "The Fitting and Frattini subgroups of $S_3$: the claim “For $S_3$, one has $O_3(S_3)=A_3$, $O_2(S_3)=1$, $F(S_3)=A_3$, and $\\Phi(S_3)=1$. Hence $F(S_3/\\Phi(S_3))=F(S_3)/\\Phi(S_3)$.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "The Fitting and Frattini subgroups of $S_3$: the claim “For $S_3$, one has $O_3(S_3)=A_3$, $O_2(S_3)=1$, $F(S_3)=A_3$, and $\\Phi(S_3)=1$. Hence $F(S_3/\\Phi(S_3))=F(S_3)/\\Phi(S_3)$.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The Fitting and Frattini subgroups of $S_3$: the claim “For $S_3$, one has $O_3(S_3)=A_3$, $O_2(S_3)=1$, $F(S_3)=A_3$, and $\\Phi(S_3)=1$. Hence $F(S_3/\\Phi(S_3))=F(S_3)/\\Phi(S_3)$.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The Fitting and Frattini subgroups of $S_3$: the claim “For $S_3$, one has $O_3(S_3)=A_3$, $O_2(S_3)=1$, $F(S_3)=A_3$, and $\\Phi(S_3)=1$. Hence $F(S_3/\\Phi(S_3))=F(S_3)/\\Phi(S_3)$.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-p-cores-fitting-and-frattini-subgroups-of-s-four

```markdown
---
id: ex-p-cores-fitting-and-frattini-subgroups-of-s-four
kind: example
title: "The $p$-cores, Fitting subgroup, and Frattini subgroup of $S_4$"
status: draft
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [def-p-core-of-a-finite-group, def-fitting-subgroup-of-a-finite-group, def-frattini-subgroup-of-a-finite-group, thm-fitting-subgroup-of-the-frattini-quotient, def-finite-symmetric-group-and-permutation-notation]
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

For $S_4$, one has $O_2(S_4)=V_4$, $O_p(S_4)=1$ for every odd prime $p$, $F(S_4)=V_4$, and $\Phi(S_4)=1$. Hence $F(S_4/\Phi(S_4))=F(S_4)/\Phi(S_4)$. See [[def-p-core-of-a-finite-group]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] For a finite group $G$ and a prime $p$, the $p$-core $O_p(G)$ is the subgroup generated by all normal $p$-subgroups of $G$. There are finitely many such subgroups, their product is normal, and repeated use of $|AB|=|A||B|/|A\cap B|$ shows that the product is again a $p$-group. It contains every normal $p$-subgroup, so it is the unique largest normal $p$-subgroup. ([[def-p-core-of-a-finite-group]]).

[L2] For a finite group $G$, the Fitting subgroup is $$F(G):=\prod_{p\mid |G|}O_p(G),$$ the product of its $p$-cores (def-p-core-of-a-finite-group). The factors are normal, so their finite product is a normal subgroup and does not depend on the order of multiplication. For the trivial group the product is empty and equals $1$. ([[def-fitting-subgroup-of-a-finite-group]]).

[L3] For a finite group $G$, the Frattini subgroup is $$\Phi(G):=\bigcap\{M\le G:M\text{ is maximal proper}\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\Phi(1)=1$. ([[def-frattini-subgroup-of-a-finite-group]]).

[L4] For every finite group $G$, $$F(G/\Phi(G))=F(G)/\Phi(G).$$. ([[thm-fitting-subgroup-of-the-frattini-quotient]]).

[L5] Let $n\in\mathbb N$, so that $n=\{0,1,\dots,n-1\}$ (def-natural-numbers). The symmetric group on $n$ letters is $$S_n:=\operatorname{Sym}(n)=\operatorname{Sym}(\{0,1,\dots,n-1\}),$$ the group of all bijections of $n$ under composition (def-symmetric-group), with the composition convention. ([[def-finite-symmetric-group-and-permutation-notation]]).

## Verification

**Proof technique:** direct.

1.1 The identity and the three double transpositions form a normal Klein four group $V_4$. Since the three Sylow $2$-subgroups are not normal, no normal $2$-subgroup can properly contain $V_4$, so $O_2(S_4)=V_4$. The four Sylow $3$-subgroups are nonnormal, and no other odd prime divides $24$, so every odd $p$-core is trivial and $F(S_4)=V_4$. [L1, L2, L3, L4, L5, given, algebra]

2.1 The four point stabilizers are maximal subgroups isomorphic to $S_3$, and their intersection fixes every point and is therefore $1$. Thus the intersection of all maximal subgroups is $\Phi(S_4)=1$. Again the quotient formula reduces to the identity $F(S_4)=F(S_4)$. This proves the stated claim. [step 1.1, given, algebra] ∎

```

### Recorded proof contract for ex-p-cores-fitting-and-frattini-subgroups-of-s-four

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-p-core-of-a-finite-group",
   "source_section": "Definition",
   "quote": "For a finite group $G$ and a prime $p$, the **$p$-core** $O_p(G)$ is the subgroup generated by all normal $p$-subgroups of $G$. There are finitely many such subgroups. If $A$ and $B$ are two of them, then $AB$ is a subgroup by [[lem-product-with-normal-subgroup]] and is normal because $gABg^{-1}=AB$ for every $g\\in G$. For a fixed $ab\\in AB$, the fibres of the multiplication map $A\\times B\\to AB$ are exactly the pairs $(ax,x^{-1}b)$ with $x\\in A\\cap B$, so\n$$\n|AB|=\\frac{|A||B|}{|A\\cap B|}.\n$$\nLagrange's theorem [[thm-lagrange]] makes $|A\\cap B|$ a power of $p$, and therefore $AB$ is again a normal $p$-subgroup. Induction shows that the product of all normal $p$-subgroups is a normal $p$-subgroup. It contains every such subgroup, so it is the unique largest normal $p$-subgroup; this product is $O_p(G)$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-fitting-subgroup-of-a-finite-group",
   "source_section": "Definition",
   "quote": "For a finite group $G$, the **Fitting subgroup** is $$F(G):=\\prod_{p\\mid |G|}O_p(G),$$ the product of its $p$-cores ([[def-p-core-of-a-finite-group]]). If $A,B\\trianglelefteq G$, then $AB$ is a subgroup, is normal because $gABg^{-1}=AB$, and satisfies $AB=BA$: indeed $ab=(aba^{-1})a\\in BA$, and the reverse inclusion is symmetric. Induction therefore shows that the finite product of the normal factors $O_p(G)$ is a normal subgroup independent of their order. For the trivial group the product is empty and equals $1$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-frattini-subgroup-of-a-finite-group",
   "source_section": "Definition",
   "quote": "For a finite group $G$, the **Frattini subgroup** is $$\\Phi(G):=\\bigcap\\{M\\le G:M\\text{ is maximal proper}\\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\\Phi(1)=1$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-fitting-subgroup-of-the-frattini-quotient",
   "source_section": "Statement",
   "quote": "For every finite group $G$, $$F(G/\\Phi(G))=F(G)/\\Phi(G).$$ See [[thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "def-finite-symmetric-group-and-permutation-notation",
   "source_section": "Definition",
   "quote": "Let $n\\in\\mathbb N$, so that $n=\\{0,1,\\dots,n-1\\}$ ([[def-natural-numbers]]). The\n**symmetric group on $n$ letters** is\n\n$$S_n:=\\operatorname{Sym}(n)=\\operatorname{Sym}(\\{0,1,\\dots,n-1\\}),$$\n\nthe group of all bijections of $n$ under composition ([[def-symmetric-group]]),\nwith the composition convention\n\n$$(\\sigma\\tau)(i):=(\\sigma\\circ\\tau)(i)=\\sigma(\\tau(i))\\qquad(i\\in n),$$\n\nso that in a product the right-hand factor acts first. An element of $S_n$ is\nnamed by either of the two notations below.\n\n**One-line notation.** For $\\sigma\\in S_n$, its **one-line form** is the list of\nits values in order of their arguments,\n\n$$\\sigma=[\\sigma(0),\\sigma(1),\\dots,\\sigma(n-1)].$$\n\nThis list has length $n$ and its entries are $0,1,\\dots,n-1$, each occurring\nonce, because $\\sigma$ is a bijection of $n$. Conversely, a list\n$[b_0,b_1,\\dots,b_{n-1}]$ whose entries are $0,1,\\dots,n-1$ each occurring once\nis the one-line form of exactly one element of $S_n$, namely the map sending\neach $i\\in n$ to $b_i$: that map is injective because the entries are distinct,\nand surjective because every element of $n$ occurs among them. So one-line\nnotation is a bijection from $S_n$ to the arrangements of $0,1,\\dots,n-1$ in a\nlist. For $n=0$ the one-line form of the unique element of $S_0$ is the empty\nlist.\n\n**Cycle notation.** For distinct $a_0,a_1,\\dots,a_{k-1}\\in n$ with $k\\ge2$, the\nsymbol $(a_0\\,a_1\\,\\cdots\\,a_{k-1})$ denotes the element of $S_n$ that sends\n$a_i$ to $a_{i+1}$ for each $i<k-1$, sends $a_{k-1}$ to $a_0$, and fixes every\nelement of $n$ outside $\\{a_0,\\dots,a_{k-1}\\}$ ([[def-symmetric-group]]); it is\ncalled a **$k$-cycle**, and a $2$-cycle is a **transposition**. Writing cycle\nsymbols side by side means composing them, so $(a\\,b)(c\\,d)$ is\n$(a\\,b)\\circ(c\\,d)$, and the empty juxtaposition of cycle symbols is the\nidentity $\\operatorname{id}$.\n\nUnlike one-line notation, cycle notation does not name each permutation once:\nthe symbol may be started at any of its entries, so\n\n$$(a_0\\,a_1\\,\\cdots\\,a_{k-1})=(a_1\\,\\cdots\\,a_{k-1}\\,a_0)$$\n\nand each $k$-cycle is written by exactly $k$ symbols of this shape. A cycle\nsymbol also does not record $n$, which must be supplied by the context.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The identity and the three double transpositions form a normal Klein four group $V_4$. Since the three Sylow $2$-subgroups are not normal, no normal $2$-subgroup can properly contain $V_4$, so $O_2(S_4)=V_4$. The four Sylow $3$-subgroups are nonnormal, and no other odd prime divides $24$, so every odd $p$-core is trivial and $F(S_4)=V_4$.",
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
   "claim": "The four point stabilizers are maximal subgroups isomorphic to $S_3$, and their intersection fixes every point and is therefore $1$. Thus the intersection of all maximal subgroups is $\\Phi(S_4)=1$. Again the quotient formula reduces to the identity $F(S_4)=F(S_4)$. This proves the stated claim.",
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
   "reason": "The $p$-cores, Fitting subgroup, and Frattini subgroup of $S_4$: the claim “For $S_4$, one has $O_2(S_4)=V_4$, $O_p(S_4)=1$ for every odd prime $p$, $F(S_4)=V_4$, and $\\Phi(S_4)=1$. Hence $F(S_4/\\Phi(S_4))=F(S_4)/\\Phi(S_4)$.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "The $p$-cores, Fitting subgroup, and Frattini subgroup of $S_4$: the zero or trivial specialization for “For $S_4$, one has $O_2(S_4)=V_4$, $O_p(S_4)=1$ for every odd prime $p$, $F(S_4)=V_4$, and $\\Phi(S_4)=1$. Hence $F(S_4/\\Phi(S_4))=F(S_4)/\\Phi(S_4)$.” is resolved in step 1.1: “The identity and the three double transpositions form a normal Klein four group $V_4$. Since the three Sylow $2$-subgroups are not normal, no normal $2$-subgroup can properly contain $V_4$, so $O_2(S_4)=V_4$. The four Sylow $3$-su”."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "The $p$-cores, Fitting subgroup, and Frattini subgroup of $S_4$: the claim “For $S_4$, one has $O_2(S_4)=V_4$, $O_p(S_4)=1$ for every odd prime $p$, $F(S_4)=V_4$, and $\\Phi(S_4)=1$. Hence $F(S_4/\\Phi(S_4))=F(S_4)/\\Phi(S_4)$.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The $p$-cores, Fitting subgroup, and Frattini subgroup of $S_4$: the collapsed or coincident-input case admitted by the hypotheses for “For $S_4$, one has $O_2(S_4)=V_4$, $O_p(S_4)=1$ for every odd prime $p$, $F(S_4)=V_4$, and $\\Phi(S_4)=1$. Hence $F(S_4/\\Phi(S_4))=F(S_4)/\\Phi(S_4)$.” is resolved in step 1.1: “The identity and the three double transpositions form a normal Klein four group $V_4$. Since the three Sylow $2$-subgroups are not normal, no normal $2$-subgroup can properly contain $V_4$, so $O_2(S_4)=V_4$. The four Sylow $3$-su”."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "The $p$-cores, Fitting subgroup, and Frattini subgroup of $S_4$: the initial index and termination or stabilization endpoint for “For $S_4$, one has $O_2(S_4)=V_4$, $O_p(S_4)=1$ for every odd prime $p$, $F(S_4)=V_4$, and $\\Phi(S_4)=1$. Hence $F(S_4/\\Phi(S_4))=F(S_4)/\\Phi(S_4)$.” is resolved in step 1.1: “The identity and the three double transpositions form a normal Klein four group $V_4$. Since the three Sylow $2$-subgroups are not normal, no normal $2$-subgroup can properly contain $V_4$, so $O_2(S_4)=V_4$. The four Sylow $3$-su”."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "The $p$-cores, Fitting subgroup, and Frattini subgroup of $S_4$: the claim “For $S_4$, one has $O_2(S_4)=V_4$, $O_p(S_4)=1$ for every odd prime $p$, $F(S_4)=V_4$, and $\\Phi(S_4)=1$. Hence $F(S_4/\\Phi(S_4))=F(S_4)/\\Phi(S_4)$.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The $p$-cores, Fitting subgroup, and Frattini subgroup of $S_4$: the claim “For $S_4$, one has $O_2(S_4)=V_4$, $O_p(S_4)=1$ for every odd prime $p$, $F(S_4)=V_4$, and $\\Phi(S_4)=1$. Hence $F(S_4/\\Phi(S_4))=F(S_4)/\\Phi(S_4)$.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The $p$-cores, Fitting subgroup, and Frattini subgroup of $S_4$: the claim “For $S_4$, one has $O_2(S_4)=V_4$, $O_p(S_4)=1$ for every odd prime $p$, $F(S_4)=V_4$, and $\\Phi(S_4)=1$. Hence $F(S_4/\\Phi(S_4))=F(S_4)/\\Phi(S_4)$.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: thm-third-isomorphism-theorem-modules

```markdown
---
id: thm-third-isomorphism-theorem-modules
kind: theorem
title: "Third isomorphism theorem for modules"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-first-isomorphism-theorem-modules, def-quotient-module, thm-quotient-module-universal-property]
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

If $N\le L\le M$, then $L/N$ is a submodule of $M/N$ and $$(M/N)/(L/N)\cong M/L.$$ See [[thm-first-isomorphism-theorem-modules]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For every module homomorphism $f:M\to N$, there is a module isomorphism $$M/\ker f\ \cong\ \operatorname{im}f,$$ given by $m+\ker f\mapsto f(m)$. ([[thm-first-isomorphism-theorem-modules]]).

[L2] For $N\le M$, the additive cosets $m+N$ form the quotient module $M/N$ under the well-defined scalar action $$r(m+N):=rm+N.$$ ([[def-quotient-module]]).

[L3] Let $f:M\to P$ be a module homomorphism and let $N\le M$ satisfy $N\subseteq\ker f$. There is a unique module homomorphism $$\bar f:M/N\longrightarrow P$$ such that $\bar f(m+N)=f(m)$, equivalently $f=\bar f\circ\pi$. ([[thm-quotient-module-universal-property]]).

## Proof

**Proof technique:** direct.

1.1 For $N\le L\le M$, send $m+N$ to $m+L$. [L1, L2, L3, given, algebra]

2.1 If $m+N=m'+N$, then $m-m'\in N\le L$, so the images modulo $L$ agree. The map is surjective, and its kernel consists exactly of the cosets $m+N$ with $m\in L$, namely $L/N$; the first isomorphism theorem gives the displayed isomorphism. [step 1.1, given, algebra]

3.1 The two coincident cases are admitted by $N\le L\le M$ and hold. For $N=L$ the submodule $L/N$ is zero and the isomorphism reads $(M/N)/0\cong M/N=M/L$; for $L=M$ it is $L/N=M/N$ and the isomorphism reads $(M/N)/(M/N)=0\cong M/M=0$. This proves the stated claim. [step 2.1, given, algebra] ∎

```

### Recorded proof contract for thm-third-isomorphism-theorem-modules

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-first-isomorphism-theorem-modules",
   "source_section": "Statement",
   "quote": "For every module homomorphism $f:M\\to N$, there is a module isomorphism\n\n$$M/\\ker f\\ \\cong\\ \\operatorname{im}f,$$\n\ngiven by $m+\\ker f\\mapsto f(m)$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "def-quotient-module",
   "source_section": "Definition",
   "quote": "Let $N\\le M$ be a submodule of a left $R$-module. Since the additive group of\n$M$ is abelian, $N$ is normal, so the additive quotient group $M/N$ consists of\nthe cosets $m+N$. Its proposed scalar action is\n\n$$r(m+N):=rm+N.$$\n\nThe well-definedness and module laws are established in\n[[thm-quotient-module-laws]]. The resulting module is the **quotient module**\n$M/N$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "thm-quotient-module-universal-property",
   "source_section": "Statement",
   "quote": "Let $f:M\\to P$ be a module homomorphism and let $N\\le M$ satisfy\n$N\\subseteq\\ker f$. There is a unique module homomorphism\n\n$$\\bar f:M/N\\longrightarrow P$$\n\nsuch that $\\bar f(m+N)=f(m)$, equivalently $f=\\bar f\\circ\\pi$.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "step": "1.1",
   "claim": "For $N\\le L\\le M$, send $m+N$ to $m+L$.",
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
   "step": "2.1",
   "claim": "If $m+N=m'+N$, then $m-m'\\in N\\le L$, so the images modulo $L$ agree. The map is surjective, and its kernel consists exactly of the cosets $m+N$ with $m\\in L$, namely $L/N$; the first isomorphism theorem gives the displayed isomorphism.",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "step": "3.1",
   "claim": "The two coincident cases are admitted by $N\\le L\\le M$ and hold. For $N=L$ the submodule $L/N$ is zero and the isomorphism reads $(M/N)/0\\cong M/N=M/L$; for $L=M$ it is $L/N=M/N$ and the isomorphism reads $(M/N)/(M/N)=0\\cong M/M=0$. This proves the stated claim.",
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
   "reason": "Third isomorphism theorem for modules: the claim “If $N\\le L\\le M$, then $L/N$ is a submodule of $M/N$ and $(M/N)/(L/N)\\cong M/L.$.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "Third isomorphism theorem for modules: the claim “If $N\\le L\\le M$, then $L/N$ is a submodule of $M/N$ and $(M/N)/(L/N)\\cong M/L.$.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "not_applicable",
   "reason": "Third isomorphism theorem for modules: the claim “If $N\\le L\\le M$, then $L/N$ is a submodule of $M/N$ and $(M/N)/(L/N)\\cong M/L.$.” has no exceptional one-element, one-index, or one-factor input beyond the general calculation."
  },
  {
   "case": "degenerate",
   "status": "not_applicable",
   "reason": "Third isomorphism theorem for modules: the claim “If $N\\le L\\le M$, then $L/N$ is a submodule of $M/N$ and $(M/N)/(L/N)\\cong M/L.$.” does not admit coincident endpoints, an empty choice, or a collapsed structure distinct from its general case."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "Third isomorphism theorem for modules: the claim “If $N\\le L\\le M$, then $L/N$ is a submodule of $M/N$ and $(M/N)/(L/N)\\cong M/L.$.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Third isomorphism theorem for modules: the claim “If $N\\le L\\le M$, then $L/N$ is a submodule of $M/N$ and $(M/N)/(L/N)\\cong M/L.$.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "Third isomorphism theorem for modules: the claim “If $N\\le L\\le M$, then $L/N$ is a submodule of $M/N$ and $(M/N)/(L/N)\\cong M/L.$.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "Third isomorphism theorem for modules: the claim “If $N\\le L\\le M$, then $L/N$ is a submodule of $M/N$ and $(M/N)/(L/N)\\cong M/L.$.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

---

# DEPENDENCY TEXT — the cited items, in full

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

## DEPENDENCY: def-action-by-automorphisms

```markdown
---
id: def-action-by-automorphisms
kind: definition
title: "An action of a group $H$ on a group $N$ by automorphisms"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-action, thm-group-actions-correspond-to-homomorphisms, def-group-isomorphism-and-automorphism]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Semidirect Products"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Definition

An **action of a group $H$ on a group $N$ by automorphisms** is a homomorphism

$$\alpha:H\longrightarrow\operatorname{Aut}(N).$$

Here automorphisms are those of [[def-group-isomorphism-and-automorphism]]. Writing $\alpha_h=\alpha(h)$, this means that every $\alpha_h$ is an automorphism of $N$, $\alpha_{hk}=\alpha_h\circ\alpha_k$, and $\alpha_1=\operatorname{id}_N$. Equivalently, by [[thm-group-actions-correspond-to-homomorphisms]], it is a group action ([[def-group-action]]) on the underlying set of $N$ for which every acting permutation is an automorphism.

```

## DEPENDENCY: def-external-semidirect-product

```markdown
---
id: def-external-semidirect-product
kind: definition
title: ' The external semidirect product $N\rtimes_\alpha H$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-action-by-automorphisms, def-group]
justified_by: [thm-external-semidirect-product-is-a-group]
aliases: []
landmark: true
verification:
  precheck: n/a
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-15
  audited: 2026-08-16
sources:
  scraped: []
  references:
    - title: "Keith Conrad, Semidirect Products"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Definition

Let $N$ and $H$ be groups ([[def-group]]), and let $\alpha:H\to\operatorname{Aut}(N)$ be an action by automorphisms ([[def-action-by-automorphisms]]). The **external semidirect product** $N\rtimes_\alpha H$ is the set $N\times H$ with multiplication

$$(n,h)(n',h')=\bigl(n\alpha_h(n'),hh'\bigr).$$

When the action is clear, the subscript is omitted.

```

## DEPENDENCY: thm-external-semidirect-product-is-a-group

```markdown
---
id: thm-external-semidirect-product-is-a-group
kind: theorem
title: ' The semidirect-product multiplication makes $N\times H$ a group'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-external-semidirect-product, def-action-by-automorphisms, lem-group-homomorphism-basic-properties]
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
    - title: "Keith Conrad, Semidirect Products"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Statement

Let $\alpha:H\to\operatorname{Aut}(N)$ be an action by automorphisms. The multiplication

$$(n,h)(n',h')=\bigl(n\alpha_h(n'),hh'\bigr)$$

makes $N\times H$ a group with identity $(1_N,1_H)$ and inverse

$$(n,h)^{-1}=\bigl(\alpha_{h^{-1}}(n^{-1}),h^{-1}\bigr).$$

## Facts & Assumptions

**Given:** Groups $N,H$ and a homomorphism $\alpha:H\to\operatorname{Aut}(N)$.

[L1] The external semidirect-product multiplication is $(n,h)(n',h')=(n\alpha_h(n'),hh')$ ([[def-external-semidirect-product]]).

[L2] An action by automorphisms satisfies $\alpha_{hh'}=\alpha_h\circ\alpha_{h'}$ and $\alpha_1=\operatorname{id}_N$, with every $\alpha_h$ an automorphism of $N$ ([[def-action-by-automorphisms]]).

[L3] A homomorphism preserves identities and inverses ([[lem-group-homomorphism-basic-properties]]).

## Proof

**Proof technique:** direct.

1.1 For three pairs, multiplication in either parenthesisation gives $\bigl(n\alpha_h(n')\alpha_{hh'}(n''),hh'h''\bigr)$ because $\alpha_h$ is a homomorphism and $\alpha_{hh'}=\alpha_h\alpha_{h'}$. Thus the operation is associative. [L1, L2, algebra]

1.2 Since $\alpha_1$ is the identity and every $\alpha_h$ preserves $1_N$, the pair $(1_N,1_H)$ is a two-sided identity. [L1, L2, L3]

2.1 Put $y=\alpha_{h^{-1}}(n^{-1})$. Then $(n,h)(y,h^{-1})=(n\alpha_h(y),1_H)=(1_N,1_H)$ and $(y,h^{-1})(n,h)=(y\alpha_{h^{-1}}(n),1_H)=(1_N,1_H)$. Hence the displayed pair is the two-sided inverse. [L1, L2, L3, algebra] ∎

```

## DEPENDENCY: prop-canonical-subgroups-of-an-external-semidirect-product

```markdown
---
id: prop-canonical-subgroups-of-an-external-semidirect-product
kind: proposition
title: "The canonical copy of $N$ is normal, the canonical copy of $H$ is a complement, and conjugation induces the action"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-external-semidirect-product-is-a-group, def-normal-subgroup, def-subgroup]
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
    - title: "Keith Conrad, Semidirect Products"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Statement

In $N\rtimes_\alpha H$, the sets

$$\bar N=\{(n,1):n\in N\},\qquad \bar H=\{(1,h):h\in H\}$$

are subgroups, $\bar N$ is normal, $\bar N\cap\bar H=\{(1,1)\}$, and every element has a unique factorisation $(n,1)(1,h)$. Moreover,

$$(1,h)(n,1)(1,h)^{-1}=(\alpha_h(n),1).$$

## Facts & Assumptions

**Given:** An external semidirect product $N\rtimes_\alpha H$.

[L1] The semidirect-product law defines a group and gives its inverse formula ([[thm-external-semidirect-product-is-a-group]]).

[L2] A subgroup is a subset closed under the group operations and normality means invariance under conjugation ([[def-subgroup]], [[def-normal-subgroup]]).

## Proof

**Proof technique:** direct.

1.1 The multiplication and inverse formulas in [L1] show that both displayed sets contain the identity and are closed under products and inverses. Hence both are subgroups by [L2]. [L1, L2]

1.2 Direct multiplication gives $(n,1)(1,h)=(n,h)$, while equality $(n,1)=(1,h)$ forces $n=1$ and $h=1$. This proves existence and uniqueness of the factorisation and the trivial intersection. [L1]

2.1 Using the inverse formula gives $(1,h)(n,1)(1,h)^{-1}=(\alpha_h(n),1)$. Conjugation by an element of $\bar N$ also preserves $\bar N$ because it is a subgroup. By step 1.2 every group element is a product of an element of $\bar N$ and one of $\bar H$, so its conjugation preserves $\bar N$; applying the same argument to its inverse gives equality. Thus $\bar N$ is normal by [L2], and the displayed calculation identifies the induced action with $\alpha$. [step 1.1, step 1.2, L1, L2, algebra] ∎

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

## DEPENDENCY: def-unit-group-modulo-n-and-euler-totient

```markdown
---
id: def-unit-group-modulo-n-and-euler-totient
kind: definition
title: "The unit group $(\\mathbb{Z}/n)^\\times$ and Euler's totient $\\varphi(n)=\\lvert(\\mathbb{Z}/n)^\\times\\rvert$ for $n\\ge1$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [thm-integers-modulo-n-basic-algebra, def-invertible-element, lem-monoid-units-form-a-group, thm-standard-representatives-modulo-n, def-finite-cardinality, thm-subset-of-a-finite-set, def-field]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "K. Conrad, The Chinese Remainder Theorem"
      url: "https://kconrad.math.uconn.edu/blurbs/ugradnumthy/crt.pdf"
    - title: "Mathematics LibreTexts, Euler's phi Function"
      url: "https://math.libretexts.org/Bookshelves/Combinatorics_and_Discrete_Mathematics/Yet_Another_Introductory_Number_Theory_Textbook_-_Cryptology_Emphasis_%28Poritz%29/02%3A_Congruences/2.05%3A_Euler%27s__%CF%95__Function"
pipeline_run: null
---

## Definition

Let $n\ge1$ be an integer. Multiplication makes $\mathbb Z/n$ a commutative
monoid with identity $[1]_n$ by [[thm-integers-modulo-n-basic-algebra]]. A class
$u\in\mathbb Z/n$ is a **unit** when it is invertible in that monoid
([[def-invertible-element]]). The set of all units is

$$(\mathbb Z/n)^\times:=\{\,u\in\mathbb Z/n:\text{some }v\in\mathbb Z/n\text{ satisfies }uv=[1]_n\,\}.$$

By [[lem-monoid-units-form-a-group]], multiplication restricts to a group
operation on $(\mathbb Z/n)^\times$, called the **unit group modulo $n$**.

The quotient $\mathbb Z/n$ is finite with cardinality $n$ by
[[thm-standard-representatives-modulo-n]], and its unit set is a finite subset by
[[thm-subset-of-a-finite-set]]. Euler's **totient function** is therefore defined
for every positive integer $n$ by

$$\varphi(n):=\big|(\mathbb Z/n)^\times\big|\in\mathbb N$$

([[def-finite-cardinality]]). For $n=1$, the quotient has one element, which is
its multiplicative identity and hence a unit, so $\varphi(1)=1$ follows from the
definition.

## Remarks

- The domain of $\varphi$ here is the positive integers. No value $\varphi(0)$
  is defined.
- The one-element multiplicative monoid is a group, even though its identity is
  also its additive zero. It is not a field because a field requires distinct
  elements $0$ and $1$ ([[def-field]]).

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

## DEPENDENCY: thm-finite-p-groups-are-nilpotent

```markdown
---
id: thm-finite-p-groups-are-nilpotent
kind: theorem
title: "Every finite $p$-group is nilpotent"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-upper-central-series, def-nilpotent-group-and-nilpotency-class, thm-nontrivial-center-of-a-finite-p-group, thm-lagrange, cor-order-of-a-quotient-group, thm-correspondence-theorem-groups]
justified_by: []
aliases: []
landmark: true
proof_strategy: induction
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

Every finite $p$-group is nilpotent. The trivial group is included and has nilpotency class zero.

## Facts & Assumptions

**Given:** A prime $p$ and a finite group $G$ of order $p^n$ for some $n\in\mathbb N$.

[F1] $Z_{r+1}(G)$ is the inverse image of $Z(G/Z_r(G))$ under the quotient map ([[def-upper-central-series]]).

[F2] $G$ is nilpotent if $Z_c(G)=G$ for some $c$; the trivial group has class zero ([[def-nilpotent-group-and-nilpotency-class]]).

[L1] Every nontrivial finite $p$-group has nontrivial center ([[thm-nontrivial-center-of-a-finite-p-group]]).

[L2] For $N\trianglelefteq G$, $|G/N|=|G|/|N|$ in the finite case ([[cor-order-of-a-quotient-group]], [[thm-lagrange]]).

[L3] Subgroups of $G/N$ correspond to subgroups of $G$ containing $N$ ([[thm-correspondence-theorem-groups]]).

## Proof

**Proof technique:** induction.

1.1 If $n=0$, then $|G|=1$, so $G=1$ is nilpotent of class zero by [F2]. [base, F2]

1.2 Assume $n>0$ and that every $p$-group of order smaller than $p^n$ is nilpotent. [ih]

2.1 By [L1], $Z(G)$ is nontrivial. Its order is a positive power $p^k$ with $1\le k\le n$, and [L2] gives $|G/Z(G)|=p^{n-k}<p^n$. [step 1.2, L1, L2]

3.1 By induction, $G/Z(G)$ is nilpotent, so its upper central series reaches the whole quotient at some term $c$. [step 2.1, ih, F2]

4.1 Starting with $Z_1(G)=Z(G)$, [F1] shows inductively that the inverse image in $G$ of $Z_r(G/Z(G))$ is $Z_{r+1}(G)$. Since the quotient series reaches $G/Z(G)$ at $r=c$, one has $Z_{c+1}(G)=G$. [step 3.1, F1, L3]

5.1 Thus $G$ is nilpotent by [F2], completing the induction. [step 4.1, F2, discharge-induction] ∎

```

## DEPENDENCY: thm-groups-of-order-thirty-have-a-normal-sylow-subgroup

```markdown
---
id: thm-groups-of-order-thirty-have-a-normal-sylow-subgroup
kind: theorem
title: "Every group of order $30$ has normal Sylow $3$- and $5$-subgroups and is not simple"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-cauchys-theorem-for-finite-groups, thm-left-coset-action-and-its-kernel, thm-sign-is-a-homomorphism, cor-sign-from-disjoint-cycle-structure, thm-image-subgroup-and-kernel-normal, thm-first-isomorphism-theorem-groups, cor-order-of-a-quotient-group, thm-classification-of-groups-of-order-pq, cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal, def-simple-group]
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

Every group of order $30$ has normal Sylow $3$- and $5$-subgroups and is not simple. See [[thm-cauchys-theorem-for-finite-groups]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] Let $G$ be a finite group and let $p$ be prime. If $p\mid|G|$, then $G$ contains an element of order $p$. ([[thm-cauchys-theorem-for-finite-groups]]).

[L2] For $H\le G$, left multiplication gives a transitive action on $G/H$ and a homomorphism $\rho:G\to\operatorname{Sym}(G/H)$ with $$\ker\rho=\operatorname{Core}_G(H).$$ ([[thm-left-coset-action-and-its-kernel]]).

[L3] For every natural $n$, the function $\operatorname{sgn}:S_n\to\{+1,-1\}$ is a group homomorphism. It is surjective exactly when $n\ge2$; for $n=0$ and $n=1$ its image is $\{1\}$. ([[thm-sign-is-a-homomorphism]]).

[L4] A cycle of length $k$ has sign $(-1)^{k-1}$. If $\sigma\in S_n$ and $c(\sigma)$ is the number of cycles after every fixed point is included as a one-cycle, then $$\operatorname{sgn}(\sigma)=(-1)^{n-c(\sigma)}.$$. ([[cor-sign-from-disjoint-cycle-structure]]).

[L5] The image of a group homomorphism is a subgroup and its kernel is a normal subgroup. For every group homomorphism $f:G\to H$, one has $\operatorname{im}f\le H$ and $\ker f\mathrel{\trianglelefteq}G$. ([[thm-image-subgroup-and-kernel-normal]]).

[L6] First isomorphism theorem for groups: $G/\ker f\cong\operatorname{im}f$. For every homomorphism $f:G\to H$, the rule $g\ker f\mapsto f(g)$ is an isomorphism from $G/\ker f$ onto $\operatorname{im}f$. ([[thm-first-isomorphism-theorem-groups]]).

[L7] Let $N\mathrel{\trianglelefteq}G$. If $[G:N]$ is finite, then the quotient group $G/N$ is finite and $$|G/N|=[G:N].$$ In particular, if $G$ is finite, then $$|G/N|=\frac{|G|}{|N|}.$$. ([[cor-order-of-a-quotient-group]]).

[L8] Let $p<q$ be primes. - If $p\nmid(q-1)$, every group of order $pq$ is cyclic. - If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$. ([[thm-classification-of-groups-of-order-pq]]).

[L9] If $N\trianglelefteq G$ and $P$ is a normal Sylow $p$-subgroup of $N$, then $P\trianglelefteq G$. ([[cor-normal-sylow-subgroup-of-a-normal-subgroup-is-normal]]).

[L10] A group $G$ is simple if $G\ne\{1\}$ and its only normal subgroups are $\{1\}$ and $G$, where normality is as in def-normal-subgroup. ([[def-simple-group]]).

## Proof

**Proof technique:** direct.

1.1 Choose an involution by Cauchy's theorem and use the left regular permutation representation. [L1, L2, L3, L4, L5, L6, L7, L8, L9, L10, given, algebra]

2.1 Left multiplication by the involution is a product of fifteen transpositions, so composing with sign gives a surjection to ${\pm1}$ whose normal kernel has order $15$. [step 1.1, given, algebra]

3.1 The published order-$pq$ classification makes that kernel cyclic. [step 2.1, given, algebra]

4.1 Its Sylow $3$- and $5$-subgroups are normal in the kernel and hence normal in $G$. [step 3.1, given, algebra]

5.1 Either is a nontrivial proper normal subgroup. This proves the stated claim. [step 4.1, given, algebra] ∎

```

## DEPENDENCY: lem-actions-related-by-automorphisms-give-isomorphic-semidirect-products

```markdown
---
id: lem-actions-related-by-automorphisms-give-isomorphic-semidirect-products
kind: lemma
title: "Actions changed by automorphisms of the kernel and complement give isomorphic semidirect products"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-external-semidirect-product, thm-external-semidirect-product-is-a-group, def-group-isomorphism-and-automorphism]
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
    - title: "Keith Conrad, Semidirect Products"
      url: "https://kconrad.math.uconn.edu/blurbs/grouptheory/semidirect-product.pdf"
pipeline_run: null
---

## Statement

Let $\alpha,β:H\to\operatorname{Aut}(N)$ be actions. If $u\in\operatorname{Aut}(N)$ and $v\in\operatorname{Aut}(H)$ satisfy

$$\beta_{v(h)}=u\alpha_hu^{-1}\qquad(h\in H),$$

then

$$N\rtimes_\alpha H\cong N\rtimes_\beta H$$

by $(n,h)\mapsto(u(n),v(h))$.

## Facts & Assumptions

**Given:** Actions $\alpha,β$ and automorphisms $u,v$ satisfying the displayed compatibility.

[L1] The multiplication in $N\rtimes_\alpha H$ is $(n,h)(n',h')=(n\alpha_h(n'),hh')$ ([[def-external-semidirect-product]]).

[L2] Both semidirect products are groups ([[thm-external-semidirect-product-is-a-group]]).

[L3] A bijective homomorphism is an isomorphism ([[def-group-isomorphism-and-automorphism]]).

## Proof

**Proof technique:** direct.

1.1 Let $F(n,h)=(u(n),v(h))$. Then $F((n,h)(n',h'))=\bigl(u(n)u(\alpha_h(n')),v(h)v(h')\bigr)$. The compatibility gives $u\alpha_h=\beta_{v(h)}u$, so this is $F(n,h)F(n',h')$ under the $\beta$ multiplication. Thus $F$ is a homomorphism. [L1, algebra]

2.1 The map $(m,k)\mapsto(u^{-1}(m),v^{-1}(k))$ is the set-theoretic inverse of $F$. Therefore $F$ is bijective and is an isomorphism by [L2] and [L3]. [step 1.1, L2, L3] ∎

```

## DEPENDENCY: thm-sylow-characterizations-of-finite-nilpotence

```markdown
---
id: thm-sylow-characterizations-of-finite-nilpotence
kind: theorem
title: "Sylow and maximal-subgroup characterizations of finite nilpotence"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [lem-finite-nilpotence-via-normal-sylow-subgroups, thm-maximal-subgroups-of-finite-nilpotent-groups, thm-nilpotence-is-detected-modulo-the-frattini-subgroup, def-frattini-subgroup-of-a-finite-group, thm-internal-direct-product-recognition, thm-correspondence-theorem-groups, thm-cauchys-theorem-for-finite-groups, thm-finite-p-groups-are-nilpotent, thm-subgroups-quotients-and-finite-products-of-nilpotent-groups]
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

For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; $G$ is the internal direct product of its Sylow subgroups; and every maximal subgroup of $G$ is normal. See [[lem-finite-nilpotence-via-normal-sylow-subgroups]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Statement.

[L1] For a finite group $G$, the following are equivalent: $G$ is nilpotent; every Sylow subgroup is normal; and $G$ is the internal direct product of its Sylow subgroups. ([[lem-finite-nilpotence-via-normal-sylow-subgroups]]).

[L2] Every maximal proper subgroup of a finite nilpotent group is normal and has prime index. ([[thm-maximal-subgroups-of-finite-nilpotent-groups]]).

[L3] Let $G$ be finite and let $\Phi(G)\le N\trianglelefteq G$. Then $N$ is nilpotent if and only if $N/\Phi(G)$ is nilpotent. In particular, $G$ is nilpotent if and only if $G/\Phi(G)$ is nilpotent. ([[thm-nilpotence-is-detected-modulo-the-frattini-subgroup]]).

[L4] For a finite group $G$, the Frattini subgroup is $$\Phi(G):=\bigcap\{M\le G:M\text{ is maximal proper}\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\Phi(1)=1$. ([[def-frattini-subgroup-of-a-finite-group]]).

[L5] Let $N_0,\ldots,N_{r-1}\trianglelefteq G$. The following are equivalent: the $N_i$ form an internal direct product of $G$; every $g\in G$ has a unique expression $g=n_0\cdots n_{r-1}$ with $n_i\in N_i$; and the multiplication map $\mu:\prod_{i<r}N_i\to G$ is an isomorphism. These statements include the empty family and the one-factor case. ([[thm-internal-direct-product-recognition]]).

[L6] If a prime $p$ divides the order of a finite group $H$, then $H$ contains an element, and hence a subgroup, of order $p$. ([[thm-cauchys-theorem-for-finite-groups]]).

[L7] Every finite $p$-group is nilpotent, including the trivial group. ([[thm-finite-p-groups-are-nilpotent]]).

[L8] Every subgroup and every quotient of a nilpotent group is nilpotent, and every finite direct product of nilpotent groups is nilpotent. ([[thm-subgroups-quotients-and-finite-products-of-nilpotent-groups]]).

[L9] For $K\trianglelefteq G$, subgroups of $G/K$ correspond to subgroups of $G$ containing $K$, and the correspondence preserves inclusion and normality. ([[thm-correspondence-theorem-groups]]).

## Proof

**Proof technique:** direct.

1.1 By [L1], the first three conditions are equivalent, and [L2] proves that any of them implies normality of every maximal subgroup. [L1, L2, given]

2.1 Conversely, assume every maximal subgroup $M$ is normal. The diagonal map $G/\Phi(G)\to\prod_M G/M$ is injective because its kernel is the intersection [L4]. By [L9] and maximality, each nontrivial quotient $G/M$ has no nontrivial proper subgroup. If $p$ divides its order, [L6] supplies a subgroup of order $p$, which must be all of $G/M$. Thus each factor has prime order and is nilpotent by [L7]. [L4, L6, L7, L9, step 1.1, given, algebra]

3.1 The finite product in step 2.1 is nilpotent and so is its subgroup $G/\Phi(G)$ by [L8]. The lifting theorem [L3] now makes $G$ nilpotent. [L3, L8, step 2.1]

4.1 This proves the reverse implication and hence all four equivalences. [step 1.1, step 3.1]

5.1 If the family of maximal subgroups is empty, finiteness forces $G=1$; the diagonal target is then the empty product $1$, and every condition holds. [L1, L4, L5, L7, step 4.1, given] ∎

```

## DEPENDENCY: def-alternating-group

```markdown
---
id: def-alternating-group
kind: definition
title: 'The alternating group $A_n=\ker(\operatorname{sgn})$ of even permutations'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-sign-is-a-homomorphism, def-kernel-and-image-of-group-homomorphism, thm-image-subgroup-and-kernel-normal]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: 'T. W. Judson, Abstract Algebra: Theory and Applications, §5.1'
      url: 'https://judsonbooks.org/aata-files/aata-20140815.pdf'
pipeline_run: null
---

## Definition

For $n\in\mathbb N$, the **alternating group** is the kernel of the sign
homomorphism,

$$A_n:=\ker(\operatorname{sgn}:S_n\to\{+1,-1\})=\{\sigma\in S_n:\operatorname{sgn}(\sigma)=1\}.$$

Thus $A_n$ consists exactly of the even permutations. The subgroup and
normality assertions implicit in the word “group” follow from
[[thm-image-subgroup-and-kernel-normal]].

```

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

## DEPENDENCY: def-finite-symmetric-group-and-permutation-notation

```markdown
---
id: def-finite-symmetric-group-and-permutation-notation
kind: definition
title: 'The finite symmetric group $S_n$, one-line notation, and cycle notation'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-symmetric-group, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-11
    scope: item
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: 'Permutation (Wikipedia)'
      url: 'https://en.wikipedia.org/wiki/Permutation'
    - title: 'T. W. Judson, Abstract Algebra: Theory and Applications, §5.1'
      url: 'https://judsonbooks.org/aata-files/aata-20140815.pdf'
pipeline_run: null
---

## Definition

Let $n\in\mathbb N$, so that $n=\{0,1,\dots,n-1\}$ ([[def-natural-numbers]]). The
**symmetric group on $n$ letters** is

$$S_n:=\operatorname{Sym}(n)=\operatorname{Sym}(\{0,1,\dots,n-1\}),$$

the group of all bijections of $n$ under composition ([[def-symmetric-group]]),
with the composition convention

$$(\sigma\tau)(i):=(\sigma\circ\tau)(i)=\sigma(\tau(i))\qquad(i\in n),$$

so that in a product the right-hand factor acts first. An element of $S_n$ is
named by either of the two notations below.

**One-line notation.** For $\sigma\in S_n$, its **one-line form** is the list of
its values in order of their arguments,

$$\sigma=[\sigma(0),\sigma(1),\dots,\sigma(n-1)].$$

This list has length $n$ and its entries are $0,1,\dots,n-1$, each occurring
once, because $\sigma$ is a bijection of $n$. Conversely, a list
$[b_0,b_1,\dots,b_{n-1}]$ whose entries are $0,1,\dots,n-1$ each occurring once
is the one-line form of exactly one element of $S_n$, namely the map sending
each $i\in n$ to $b_i$: that map is injective because the entries are distinct,
and surjective because every element of $n$ occurs among them. So one-line
notation is a bijection from $S_n$ to the arrangements of $0,1,\dots,n-1$ in a
list. For $n=0$ the one-line form of the unique element of $S_0$ is the empty
list.

**Cycle notation.** For distinct $a_0,a_1,\dots,a_{k-1}\in n$ with $k\ge2$, the
symbol $(a_0\,a_1\,\cdots\,a_{k-1})$ denotes the element of $S_n$ that sends
$a_i$ to $a_{i+1}$ for each $i<k-1$, sends $a_{k-1}$ to $a_0$, and fixes every
element of $n$ outside $\{a_0,\dots,a_{k-1}\}$ ([[def-symmetric-group]]); it is
called a **$k$-cycle**, and a $2$-cycle is a **transposition**. Writing cycle
symbols side by side means composing them, so $(a\,b)(c\,d)$ is
$(a\,b)\circ(c\,d)$, and the empty juxtaposition of cycle symbols is the
identity $\operatorname{id}$.

Unlike one-line notation, cycle notation does not name each permutation once:
the symbol may be started at any of its entries, so

$$(a_0\,a_1\,\cdots\,a_{k-1})=(a_1\,\cdots\,a_{k-1}\,a_0)$$

and each $k$-cycle is written by exactly $k$ symbols of this shape. A cycle
symbol also does not record $n$, which must be supplied by the context.

## Remarks

- **The brackets carry the meaning, so the same list of numbers reads two
  different ways.** Square brackets are one-line notation and round brackets are
  cycle notation. In $S_3$ the one-line form $[1,2,0]$ and the cycle symbol
  $(0\,1\,2)$ happen to name the same permutation, the one sending $0\mapsto1$,
  $1\mapsto2$, $2\mapsto0$; but $[0,1,2]$ is the identity while $(0\,1\,2)$ is
  not, and $[2,1,0]$ is the transposition exchanging $0$ and $2$ while
  $(2\,1\,0)$ is a $3$-cycle. Inside a cycle symbol this library separates the
  entries by thin spaces rather than by commas, which keeps the two notations
  apart on the page.

- **Relation to the two-row form.** Many texts write a permutation as the array
  $\sigma=\begin{pmatrix}0&1&\cdots&n-1\\\sigma(0)&\sigma(1)&\cdots&\sigma(n-1)\end{pmatrix}$,
  whose first row lists the arguments and whose second row lists their images.
  One-line notation is that array with its first row deleted, which loses
  nothing because the first row is the same for every $\sigma\in S_n$.

- **Why the identity is a product of no cycles rather than a cycle.** The cycle
  symbols are restricted to $k\ge2$, so a fixed point is never written. The
  identity is therefore the empty product, and a permutation is written by
  listing only the cycles that move something. Which permutations admit such a
  factorisation, and in how many ways, is
  [[thm-disjoint-cycle-decomposition]]; the fixed points that cycle notation
  suppresses are restored as one-cycles when a cycle type is recorded
  ([[def-permutation-support-disjoint-cycles-and-cycle-type]]).

```

## DEPENDENCY: def-p-core-of-a-finite-group

```markdown
---
id: def-p-core-of-a-finite-group
kind: definition
title: "The $p$-core $O_p(G)$ as the largest normal $p$-subgroup"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-finite-p-group, def-normal-subgroup, lem-product-with-normal-subgroup, thm-lagrange]
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

For a finite group $G$ and a prime $p$, the **$p$-core** $O_p(G)$ is the subgroup generated by all normal $p$-subgroups of $G$. There are finitely many such subgroups. If $A$ and $B$ are two of them, then $AB$ is a subgroup by [[lem-product-with-normal-subgroup]] and is normal because $gABg^{-1}=AB$ for every $g\in G$. For a fixed $ab\in AB$, the fibres of the multiplication map $A\times B\to AB$ are exactly the pairs $(ax,x^{-1}b)$ with $x\in A\cap B$, so
$$
|AB|=\frac{|A||B|}{|A\cap B|}.
$$
Lagrange's theorem [[thm-lagrange]] makes $|A\cap B|$ a power of $p$, and therefore $AB$ is again a normal $p$-subgroup. Induction shows that the product of all normal $p$-subgroups is a normal $p$-subgroup. It contains every such subgroup, so it is the unique largest normal $p$-subgroup; this product is $O_p(G)$.

```

## DEPENDENCY: thm-fitting-subgroup-of-the-frattini-quotient

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

## DEPENDENCY: thm-first-isomorphism-theorem-modules

```markdown
---
id: thm-first-isomorphism-theorem-modules
kind: theorem
title: 'First isomorphism theorem for modules: $M/\ker f\cong\operatorname{im}f$'
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-quotient-module-universal-property, thm-module-kernel-image-and-injectivity, def-module-homomorphism-kernel-image-and-cokernel]
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
    - title: "McGerty, Algebra II: Rings and Modules, Section 3"
      url: "https://people.maths.ox.ac.uk/mcgerty/Algebra%20II.pdf"
pipeline_run: null
---

## Statement

For every module homomorphism $f:M\to N$, there is a module isomorphism

$$M/\ker f\ \cong\ \operatorname{im}f,$$

given by $m+\ker f\mapsto f(m)$.

## Facts & Assumptions

**Given:** A module homomorphism $f:M\to N$.

[L1] Its kernel and image are submodules, and a module homomorphism is
injective exactly when its kernel is trivial
([[thm-module-kernel-image-and-injectivity]]).

[L2] A homomorphism vanishing on a submodule factors uniquely through the
quotient module ([[thm-quotient-module-universal-property]]).

[L3] Module isomorphisms are precisely bijective module homomorphisms; kernel
and image have their displayed definitions
([[def-module-homomorphism-kernel-image-and-cokernel]]).

## Proof

**Proof technique:** direct.

1.1 Since $\ker f$ is a submodule and $f$ vanishes on it, [L2] gives a module homomorphism $\bar f:M/\ker f\to N$ with $\bar f(m+\ker f)=f(m)$. [L1, L2, L3, given]

2.1 Every value of $\bar f$ lies in $\operatorname{im}f$, and every $f(m)$ is the value of $\bar f$ at $m+\ker f$; hence its corestriction $\bar f:M/\ker f\to\operatorname{im}f$ is a surjective module homomorphism. [step 1.1, L1, L3, given]

2.2 The corestriction has trivial kernel: $\bar f(m+\ker f)=0_N$ means $f(m)=0_N$, hence $m\in\ker f$ and $m+\ker f=0_{M/\ker f}$. [step 1.1, L1, L3, given]

3.1 The corestriction is injective by [L1], so it is bijective. [step 2.1, step 2.2, L1]

4.1 By [L3], this bijective module homomorphism is the claimed module isomorphism. [step 3.1, L3] ∎

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

## DEPENDENCY: thm-quotient-module-universal-property

```markdown
---
id: thm-quotient-module-universal-property
kind: theorem
title: "A module homomorphism vanishing on $N$ factors uniquely through $M/N$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [prop-canonical-quotient-module-map, thm-quotient-group-universal-property, def-module-homomorphism-kernel-image-and-cokernel]
justified_by: []
aliases: []
landmark: true
proof_strategy: constructive
verification:
  precheck: pass
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "McGerty, Algebra II: Rings and Modules, Section 3"
      url: "https://people.maths.ox.ac.uk/mcgerty/Algebra%20II.pdf"
pipeline_run: null
---

## Statement

Let $f:M\to P$ be a module homomorphism and let $N\le M$ satisfy
$N\subseteq\ker f$. There is a unique module homomorphism

$$\bar f:M/N\longrightarrow P$$

such that $\bar f(m+N)=f(m)$, equivalently $f=\bar f\circ\pi$.

## Facts & Assumptions

**Given:** A module homomorphism $f:M\to P$ and a submodule $N\le M$ with $N\subseteq\ker f$.

[L1] The canonical map $\pi:M\to M/N$ is a surjective module homomorphism with kernel $N$ ([[prop-canonical-quotient-module-map]]).

[L2] A group homomorphism that kills a normal subgroup factors uniquely through the group quotient ([[thm-quotient-group-universal-property]]).

[L3] A module homomorphism is additive and scalar-preserving, and its kernel is the preimage of zero ([[def-module-homomorphism-kernel-image-and-cokernel]]).

## Proof

**Proof technique:** constructive.

1.1 By [L1], the canonical map $\pi:M\to M/N$ is an additive-group quotient map with kernel $N$. Viewing the modules as additive groups, [L3] makes $f$ a group homomorphism and the hypothesis says it kills $N$. By [L2], define the unique additive homomorphism $\bar f$ by $\bar f(m+N)=f(m)$, with $f=\bar f\circ\pi$. [L1, L2, L3, given, construct]

2.1 For every coset, $\bar f(r(m+N))=\bar f(rm+N)=f(rm)=rf(m)=r\bar f(m+N)$, so $\bar f$ is scalar-preserving. [step 1.1, L3, given]

3.1 Thus $\bar f$ is a module homomorphism with the required factorisation. [step 1.1, step 2.1, L3]

4.1 Any module-homomorphism factor is in particular an additive-group factor, so the uniqueness in step 1.1 proves its uniqueness as a module homomorphism. [step 1.1, L2, L3, discharge-construct: final] ∎

```
