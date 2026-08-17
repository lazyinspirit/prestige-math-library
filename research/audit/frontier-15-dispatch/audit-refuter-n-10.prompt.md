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
label: n-10

run: frontier-15
role: refuter
label: n-10
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

## ITEM: ex-unique-sylow-subgroup-of-affine-group-modulo-p-squared

```markdown
---
id: ex-unique-sylow-subgroup-of-affine-group-modulo-p-squared
kind: example
title: "The unique Sylow $p$-subgroup of $\\operatorname{Aff}(\\mathbb Z/p^2)$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-sylow-third-theorem, cor-sylow-subgroup-normal-iff-unique, def-external-semidirect-product, thm-totient-of-a-prime-power, thm-unit-criterion-modulo-n]
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

For every prime $p$, the affine group of $\mathbb Z/p^2$ has a unique Sylow $p$-subgroup, consisting of the maps $x\mapsto ax+b$ with $a\equiv1\pmod p$. It has order $p^3$, including when $p=2$. See [[thm-sylow-third-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] Let $|G|=p^am$ with $p\nmid m$. Then the number of Sylow $p$-subgroups satisfies $$n_p(G)\equiv1\pmod p,\qquad n_p(G)\mid m.$$. ([[thm-sylow-third-theorem]]).

[L2] A Sylow $p$-subgroup of a finite group is normal if and only if it is the unique Sylow $p$-subgroup. ([[cor-sylow-subgroup-normal-iff-unique]]).

[L3] Let $N$ and $H$ be groups (def-group), and let $\alpha:H\to\operatorname{Aut}(N)$ be an action by automorphisms (def-action-by-automorphisms). The external semidirect product $N\rtimes_\alpha H$ is the set $N\times H$ with multiplication. ([[def-external-semidirect-product]]).

[L4] For every prime $p$ and natural $k\ge1$, $$\varphi(p^k)=p^k-p^{k-1}.$$ Equivalently, among the $p^k$ standard classes modulo $p^k$, the nonunits are exactly those whose standard representatives are divisible by $p$. ([[thm-totient-of-a-prime-power]]).

[L5] Let $n\ge1$ and $a\in\mathbb Z$. Then $[a]_n$ is a unit of $\mathbb Z/n$ (def-unit-group-modulo-n-and-euler-totient) if and only if $$\gcd(a,n)=1,$$ that is, if and only if $a$ and $n$ are coprime (def-coprime). Consequently the condition $\gcd(a,n)=1$ depends only on the class $[a]_n$. ([[thm-unit-criterion-modulo-n]]).

## Verification

**Proof technique:** direct.

1.1 The affine group is $(\mathbb Z/p^2)\rtimes(\mathbb Z/p^2)^\times$ and has order $p^2\varphi(p^2)=p^3(p-1)$. Reduction of the multiplier modulo $p$ is a homomorphism to $(\mathbb Z/p)^\times$. [L1, L2, L3, L4, L5, given, algebra]

2.1 Its kernel consists of arbitrary translations and the $p$ units $1+pt$ with $t\in\mathbb Z/p$. It is therefore normal of order $p^2\cdot p=p^3$, the full $p$-part of the affine-group order, and so is the unique Sylow $p$-subgroup. [step 1.1, given, algebra]

3.1 For $p=2$, both units modulo $4$ are congruent to $1$ modulo $2$, so the kernel is the whole affine group of order $8$; the same conclusion holds without exception. This proves the stated claim. [step 2.1, given, algebra] ∎

```

### Recorded proof contract for ex-unique-sylow-subgroup-of-affine-group-modulo-p-squared

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
   "source": "def-external-semidirect-product",
   "source_section": "Definition",
   "quote": "Let $N$ and $H$ be groups ([[def-group]]), and let $\\alpha:H\\to\\operatorname{Aut}(N)$ be an action by automorphisms ([[def-action-by-automorphisms]]). The **external semidirect product** $N\\rtimes_\\alpha H$ is the set $N\\times H$ with multiplication\n\n$$(n,h)(n',h')=\\bigl(n\\alpha_h(n'),hh'\\bigr).$$\n\nWhen the action is clear, the subscript is omitted.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L4",
   "source": "thm-totient-of-a-prime-power",
   "source_section": "Statement",
   "quote": "For every prime $p$ and natural $k\\ge1$,\n\n$$\\varphi(p^k)=p^k-p^{k-1}.$$\n\nEquivalently, among the $p^k$ standard classes modulo $p^k$, the nonunits are\nexactly those whose standard representatives are divisible by $p$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L5",
   "source": "thm-unit-criterion-modulo-n",
   "source_section": "Statement",
   "quote": "Let $n\\ge1$ and $a\\in\\mathbb Z$. Then $[a]_n$ is a unit of $\\mathbb Z/n$\n([[def-unit-group-modulo-n-and-euler-totient]]) if and only if\n\n$$\\gcd(a,n)=1,$$\n\nthat is, if and only if $a$ and $n$ are coprime ([[def-coprime]]). Consequently\nthe condition $\\gcd(a,n)=1$ depends only on the class $[a]_n$.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The affine group is $(\\mathbb Z/p^2)\\rtimes(\\mathbb Z/p^2)^\\times$ and has order $p^2\\varphi(p^2)=p^3(p-1)$. Reduction of the multiplier modulo $p$ is a homomorphism to $(\\mathbb Z/p)^\\times$.",
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
   "claim": "Its kernel consists of arbitrary translations and the $p$ units $1+pt$ with $t\\in\\mathbb Z/p$. It is therefore normal of order $p^2\\cdot p=p^3$, the full $p$-part of the affine-group order, and so is the unique Sylow $p$-subgroup.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "For $p=2$, both units modulo $4$ are congruent to $1$ modulo $2$, so the kernel is the whole affine group of order $8$; the same conclusion holds without exception. This proves the stated claim.",
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
   "reason": "The unique Sylow $p$-subgroup of $\\operatorname{Aff}(\\mathbb Z/p^2)$: the claim “For every prime $p$, the affine group of $\\mathbb Z/p^2$ has a unique Sylow $p$-subgroup, consisting of the maps $x\\mapsto ax+b$ with $a\\equiv1\\pmod p$. It has order $p^3$, including when $p=2$.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "The unique Sylow $p$-subgroup of $\\operatorname{Aff}(\\mathbb Z/p^2)$: the claim “For every prime $p$, the affine group of $\\mathbb Z/p^2$ has a unique Sylow $p$-subgroup, consisting of the maps $x\\mapsto ax+b$ with $a\\equiv1\\pmod p$. It has order $p^3$, including when $p=2$.” introduces no freely varying parameter that may be zero and no zero object requiring a separate argument."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "The unique Sylow $p$-subgroup of $\\operatorname{Aff}(\\mathbb Z/p^2)$: the smallest positive, one-factor, or $p=2$ specialization for “For every prime $p$, the affine group of $\\mathbb Z/p^2$ has a unique Sylow $p$-subgroup, consisting of the maps $x\\mapsto ax+b$ with $a\\equiv1\\pmod p$. It has order $p^3$, including when $p=2$.” is resolved in step 3.1: “For $p=2$, both units modulo $4$ are congruent to $1$ modulo $2$, so the kernel is the whole affine group of order $8$; the same conclusion holds without exception. This proves the stated claim.”."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The unique Sylow $p$-subgroup of $\\operatorname{Aff}(\\mathbb Z/p^2)$: the collapsed or coincident-input case admitted by the hypotheses for “For every prime $p$, the affine group of $\\mathbb Z/p^2$ has a unique Sylow $p$-subgroup, consisting of the maps $x\\mapsto ax+b$ with $a\\equiv1\\pmod p$. It has order $p^3$, including when $p=2$.” is resolved in step 3.1: “For $p=2$, both units modulo $4$ are congruent to $1$ modulo $2$, so the kernel is the whole affine group of order $8$; the same conclusion holds without exception. This proves the stated claim.”."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "The unique Sylow $p$-subgroup of $\\operatorname{Aff}(\\mathbb Z/p^2)$: the claim “For every prime $p$, the affine group of $\\mathbb Z/p^2$ has a unique Sylow $p$-subgroup, consisting of the maps $x\\mapsto ax+b$ with $a\\equiv1\\pmod p$. It has order $p^3$, including when $p=2$.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "The unique Sylow $p$-subgroup of $\\operatorname{Aff}(\\mathbb Z/p^2)$: the claim “For every prime $p$, the affine group of $\\mathbb Z/p^2$ has a unique Sylow $p$-subgroup, consisting of the maps $x\\mapsto ax+b$ with $a\\equiv1\\pmod p$. It has order $p^3$, including when $p=2$.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The unique Sylow $p$-subgroup of $\\operatorname{Aff}(\\mathbb Z/p^2)$: the claim “For every prime $p$, the affine group of $\\mathbb Z/p^2$ has a unique Sylow $p$-subgroup, consisting of the maps $x\\mapsto ax+b$ with $a\\equiv1\\pmod p$. It has order $p^3$, including when $p=2$.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The unique Sylow $p$-subgroup of $\\operatorname{Aff}(\\mathbb Z/p^2)$: the claim “For every prime $p$, the affine group of $\\mathbb Z/p^2$ has a unique Sylow $p$-subgroup, consisting of the maps $x\\mapsto ax+b$ with $a\\equiv1\\pmod p$. It has order $p^3$, including when $p=2$.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

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

---

# DEPENDENCY TEXT — the cited items, title and claim section only

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

## DEPENDENCY: def-external-semidirect-product

```markdown
title: ' The external semidirect product $N\rtimes_\alpha H$'

## Definition
Let $N$ and $H$ be groups ([[def-group]]), and let $\alpha:H\to\operatorname{Aut}(N)$ be an action by automorphisms ([[def-action-by-automorphisms]]). The **external semidirect product** $N\rtimes_\alpha H$ is the set $N\times H$ with multiplication

$$(n,h)(n',h')=\bigl(n\alpha_h(n'),hh'\bigr).$$

When the action is clear, the subscript is omitted.
```

## DEPENDENCY: thm-totient-of-a-prime-power

```markdown
title: "For a prime $p$ and $k\\ge1$, $\\varphi(p^k)=p^k-p^{k-1}$"

## Statement
For every prime $p$ and natural $k\ge1$,

$$\varphi(p^k)=p^k-p^{k-1}.$$

Equivalently, among the $p^k$ standard classes modulo $p^k$, the nonunits are
exactly those whose standard representatives are divisible by $p$.
```

## DEPENDENCY: thm-unit-criterion-modulo-n

```markdown
title: "For $n\\ge1$, $[a]_n$ is a unit if and only if $\\gcd(a,n)=1$"

## Statement
Let $n\ge1$ and $a\in\mathbb Z$. Then $[a]_n$ is a unit of $\mathbb Z/n$
([[def-unit-group-modulo-n-and-euler-totient]]) if and only if

$$\gcd(a,n)=1,$$

that is, if and only if $a$ and $n$ are coprime ([[def-coprime]]). Consequently
the condition $\gcd(a,n)=1$ depends only on the class $[a]_n$.
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

## DEPENDENCY: def-action-by-automorphisms

```markdown
title: "An action of a group $H$ on a group $N$ by automorphisms"

## Definition
An **action of a group $H$ on a group $N$ by automorphisms** is a homomorphism

$$\alpha:H\longrightarrow\operatorname{Aut}(N).$$

Here automorphisms are those of [[def-group-isomorphism-and-automorphism]]. Writing $\alpha_h=\alpha(h)$, this means that every $\alpha_h$ is an automorphism of $N$, $\alpha_{hk}=\alpha_h\circ\alpha_k$, and $\alpha_1=\operatorname{id}_N$. Equivalently, by [[thm-group-actions-correspond-to-homomorphisms]], it is a group action ([[def-group-action]]) on the underlying set of $N$ for which every acting permutation is an automorphism.
```

## DEPENDENCY: thm-external-semidirect-product-is-a-group

```markdown
title: ' The semidirect-product multiplication makes $N\times H$ a group'

## Statement
Let $\alpha:H\to\operatorname{Aut}(N)$ be an action by automorphisms. The multiplication

$$(n,h)(n',h')=\bigl(n\alpha_h(n'),hh'\bigr)$$

makes $N\times H$ a group with identity $(1_N,1_H)$ and inverse

$$(n,h)^{-1}=\bigl(\alpha_{h^{-1}}(n^{-1}),h^{-1}\bigr).$$
```

## DEPENDENCY: prop-canonical-subgroups-of-an-external-semidirect-product

```markdown
title: "The canonical copy of $N$ is normal, the canonical copy of $H$ is a complement, and conjugation induces the action"

## Statement
In $N\rtimes_\alpha H$, the sets

$$\bar N=\{(n,1):n\in N\},\qquad \bar H=\{(1,h):h\in H\}$$

are subgroups, $\bar N$ is normal, $\bar N\cap\bar H=\{(1,1)\}$, and every element has a unique factorisation $(n,1)(1,h)$. Moreover,

$$(1,h)(n,1)(1,h)^{-1}=(\alpha_h(n),1).$$
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

## DEPENDENCY: def-unit-group-modulo-n-and-euler-totient

```markdown
title: "The unit group $(\\mathbb{Z}/n)^\\times$ and Euler's totient $\\varphi(n)=\\lvert(\\mathbb{Z}/n)^\\times\\rvert$ for $n\\ge1$"

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
```

## DEPENDENCY: cor-totient-at-one-and-at-a-prime

```markdown
title: "$\\varphi(1)=1$, and $\\varphi(p)=p-1$ for every prime $p$"

## Statement
Euler's totient satisfies $\varphi(1)=1$. If $p$ is prime
([[def-prime]]), then

$$\varphi(p)=p-1.$$
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

## DEPENDENCY: thm-sylow-first-theorem

```markdown
title: "Sylow I: every finite group has a Sylow $p$-subgroup"

## Statement
Let $G$ be finite, let $p$ be prime, and write $|G|=p^am$ with $p\nmid m$. Then $G$ has a subgroup of order $p^a$, hence a Sylow $p$-subgroup ([[def-sylow-p-subgroup]]). See [[def-sylow-p-subgroup]].
```

## DEPENDENCY: thm-classification-of-groups-of-order-pq

```markdown
title: "Classification of groups of order $pq$ for primes $p<q$"

## Statement
Let $p<q$ be primes.

- If $p\nmid(q-1)$, every group of order $pq$ is cyclic.
- If $p\mid(q-1)$, there are exactly two isomorphism classes of groups of order $pq$: the cyclic group $C_{pq}$ and one nonabelian semidirect product $C_q\rtimes C_p$.
```

## DEPENDENCY: thm-finite-p-groups-are-nilpotent

```markdown
title: "Every finite $p$-group is nilpotent"

## Statement
Every finite $p$-group is nilpotent. The trivial group is included and has nilpotency class zero.
```
