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
label: n-12

run: frontier-15
role: refuter
label: n-12
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

---

# DEPENDENCY TEXT — the cited items, title and claim section only

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

## DEPENDENCY: def-fitting-subgroup-of-a-finite-group

```markdown
title: "The Fitting subgroup $F(G)=\\prod_p O_p(G)$ of a finite group"

## Definition
For a finite group $G$, the **Fitting subgroup** is $$F(G):=\prod_{p\mid |G|}O_p(G),$$ the product of its $p$-cores ([[def-p-core-of-a-finite-group]]). If $A,B\trianglelefteq G$, then $AB$ is a subgroup, is normal because $gABg^{-1}=AB$, and satisfies $AB=BA$: indeed $ab=(aba^{-1})a\in BA$, and the reverse inclusion is symmetric. Induction therefore shows that the finite product of the normal factors $O_p(G)$ is a normal subgroup independent of their order. For the trivial group the product is empty and equals $1$.
```

## DEPENDENCY: def-frattini-subgroup-of-a-finite-group

```markdown
title: "The Frattini subgroup $\\Phi(G)$ as the intersection of the maximal subgroups of a finite group"

## Definition
For a finite group $G$, the **Frattini subgroup** is $$\Phi(G):=\bigcap\{M\le G:M\text{ is maximal proper}\}.$$ If $G=1$, the family is empty and its intersection inside $G$ is $G$ itself. Thus $\Phi(1)=1$.
```

## DEPENDENCY: thm-fitting-subgroup-of-the-frattini-quotient

```markdown
title: "$F(G/\\Phi(G))=F(G)/\\Phi(G)$ for every finite group"

## Statement
For every finite group $G$, $$F(G/\Phi(G))=F(G)/\Phi(G).$$ See [[thm-fitting-subgroup-is-largest-normal-nilpotent-subgroup]].
```

## DEPENDENCY: def-finite-symmetric-group-and-permutation-notation

```markdown
title: 'The finite symmetric group $S_n$, one-line notation, and cycle notation'

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
```

## DEPENDENCY: thm-first-isomorphism-theorem-modules

```markdown
title: 'First isomorphism theorem for modules: $M/\ker f\cong\operatorname{im}f$'

## Statement
For every module homomorphism $f:M\to N$, there is a module isomorphism

$$M/\ker f\ \cong\ \operatorname{im}f,$$

given by $m+\ker f\mapsto f(m)$.
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

## DEPENDENCY: thm-quotient-module-universal-property

```markdown
title: "A module homomorphism vanishing on $N$ factors uniquely through $M/N$"

## Statement
Let $f:M\to P$ be a module homomorphism and let $N\le M$ satisfy
$N\subseteq\ker f$. There is a unique module homomorphism

$$\bar f:M/N\longrightarrow P$$

such that $\bar f(m+N)=f(m)$, equivalently $f=\bar f\circ\pi$.
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

## DEPENDENCY: thm-equivalent-characterizations-of-noetherian-modules

```markdown
title: "Finite generation, ACC, and maximal-condition characterizations of Noetherian modules"

## Statement
For a left $R$-module $M$, the following are equivalent: every submodule is finitely generated; every ascending chain of submodules stabilizes; and every nonempty family of submodules has a maximal member. The implication from ACC to the maximal condition uses dependent choice; the other displayed implications are choice-free. See [[def-noetherian-module]].
```

## DEPENDENCY: thm-equivalent-characterizations-of-artinian-modules

```markdown
title: "DCC and minimal-condition characterizations of Artinian modules"

## Statement
For a left $R$-module $M$, DCC is equivalent to the condition that every nonempty family of submodules has a minimal member. The implication from DCC to the minimal condition uses dependent choice. See [[def-artinian-module]].
```

## DEPENDENCY: thm-second-isomorphism-theorem-modules

```markdown
title: "Second isomorphism theorem for modules"

## Statement
For submodules $L,N\le M$, there is a canonical isomorphism $$L/(L\cap N)\cong(L+N)/N.$$ See [[thm-first-isomorphism-theorem-modules]].
```

## DEPENDENCY: thm-correspondence-theorem-modules

```markdown
title: "Correspondence theorem for submodules of a quotient module"

## Statement
For $N\le M$, inverse image and quotient induce mutually inverse inclusion-preserving bijections between submodules of $M/N$ and submodules of $M$ containing $N$. They preserve sums, intersections, and successive quotients. See [[def-quotient-module]].
```

## DEPENDENCY: def-exact-and-short-exact-sequences-of-modules

```markdown
title: "Exact sequences and short exact sequences of modules"

## Definition
A sequence of left $R$-modules and homomorphisms
$$\cdots\longrightarrow M_{i-1}\xrightarrow{d_{i-1}}M_i\xrightarrow{d_i}M_{i+1}\longrightarrow\cdots$$
is **exact at $M_i$** if $\operatorname{im}d_{i-1}=\ker d_i$ ([[def-module-homomorphism-kernel-image-and-cokernel]]). It is **exact** if it is exact at every displayed module at which two arrows meet.

A **short exact sequence** is an exact sequence
$$0\longrightarrow A\xrightarrow{i}B\xrightarrow{p}C\longrightarrow0.$$
Thus $i$ is injective, $p$ is surjective, and $\operatorname{im}i=\ker p$ ([[thm-module-kernel-image-and-injectivity]]).
```
