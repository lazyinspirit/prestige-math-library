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
label: step9-rr-mix

run: frontier-15
role: refuter
label: step9-rr-mix
# Risk-review refutation — 2 high/critical-tier items
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

## ITEM: prop-complement-and-disjoint-union-axioms-for-a-lambda-system

```markdown
---
id: prop-complement-and-disjoint-union-axioms-for-a-lambda-system
kind: proposition
title: "A family is a lambda-system exactly when it contains $X$ and is closed under complements and countable disjoint unions"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-lambda-system]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "A. Dembo, Probability Theory lecture notes, Definition 1.1.36 and the Remark following it"
      url: "https://adembo.su.domains/stat-310b/lnotes.pdf"
pipeline_run: null
---

## Statement

Let $X$ be a set and let $\mathcal D\subseteq\mathcal P(X)$. Then $\mathcal D$ is
a lambda-system on $X$ if and only if

1. $X\in\mathcal D$;
2. $X\setminus A\in\mathcal D$ whenever $A\in\mathcal D$;
3. $\bigcup_{n\in\mathbb N}A_n\in\mathcal D$ whenever $A_0,A_1,\dots\in\mathcal D$
   are pairwise disjoint.

## Facts & Assumptions

**Given:** A set $X$ and a family $\mathcal D\subseteq\mathcal P(X)$.

[L1] A lambda-system on $X$ is a family $\mathcal D\subseteq\mathcal P(X)$ such that $X\in\mathcal D$; if $A,B\in\mathcal D$ and $A\subseteq B$, then $B\setminus A\in\mathcal D$; and if $A_0\subseteq A_1\subseteq\cdots$ with every $A_n\in\mathcal D$, then $\bigcup_{n\in\mathbb N}A_n\in\mathcal D$ ([[def-lambda-system]]).

## Proof

**Proof technique:** direct.

1.1 Assume $\mathcal D$ is a lambda-system. Then $X\in\mathcal D$ by [L1], which is clause 1. For $A\in\mathcal D$ we have $A\subseteq X$ and $X\in\mathcal D$, so $X\setminus A\in\mathcal D$ by the relative-difference clause of [L1]; this is clause 2. [L1, given]

1.2 Conversely, assume clauses 1, 2 and 3. Then $X\in\mathcal D$, which is the first lambda-system clause of [L1], and $\emptyset=X\setminus X\in\mathcal D$ by clauses 1 and 2. [given]

2.1 Let $A_0,A_1,\dots\in\mathcal D$ be pairwise disjoint and put $B_n:=\bigcup_{k\le n}A_k$. We show $B_n\in\mathcal D$ by induction on $n$. For $n=0$, $B_0=A_0\in\mathcal D$. Suppose $B_n\in\mathcal D$. Disjointness gives $A_{n+1}\subseteq X\setminus B_n$, and $X\setminus B_n\in\mathcal D$ by step 1.1, so $(X\setminus B_n)\setminus A_{n+1}\in\mathcal D$ by [L1]. Its complement in $X$ is $X\setminus\bigl((X\setminus B_n)\setminus A_{n+1}\bigr)=B_n\cup A_{n+1}=B_{n+1}$, which lies in $\mathcal D$ by step 1.1. [L1, step 1.1, algebra]

2.2 Let $A,B\in\mathcal D$ with $A\subseteq B$. Then $X\setminus B\in\mathcal D$ by clause 2, and $A\cap(X\setminus B)=\emptyset$ because $A\subseteq B$. The sequence $A,\ X\setminus B,\ \emptyset,\ \emptyset,\dots$ is therefore a pairwise disjoint sequence in $\mathcal D$ by step 1.2, so clause 3 gives $A\cup(X\setminus B)\in\mathcal D$, and clause 2 then gives $X\setminus\bigl(A\cup(X\setminus B)\bigr)=B\setminus A\in\mathcal D$, which is the relative-difference clause of [L1]. [L1, given, step 1.2, algebra]

3.1 The sets $B_n$ of step 2.1 increase and satisfy $\bigcup_nB_n=\bigcup_nA_n$, so $\bigcup_nA_n\in\mathcal D$ by the increasing-union clause of [L1]. This is clause 3, and with step 1.1 it proves the forward direction. [L1, step 1.1, step 2.1]

4.1 Let $A_0\subseteq A_1\subseteq\cdots$ lie in $\mathcal D$. Put $C_0:=A_0$ and $C_{n+1}:=A_{n+1}\setminus A_n$; each $C_{n+1}$ lies in $\mathcal D$ by step 2.2, the $C_n$ are pairwise disjoint, and $\bigcup_nC_n=\bigcup_nA_n$. Clause 3 then gives $\bigcup_nA_n\in\mathcal D$, which is the increasing-union clause of [L1]. With steps 1.2 and 2.2 this proves the reverse direction. This proves the stated claim. [L1, given, step 1.2, step 2.2, algebra] ∎

```

### Recorded proof contract for prop-complement-and-disjoint-union-axioms-for-a-lambda-system

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-lambda-system",
   "source_section": "Definition",
   "quote": "Let $X$ be a set. A **lambda-system**, or **Dynkin system**, on $X$ is a family\n$\\mathcal D\\subseteq\\mathcal P(X)$ such that:\n\n1. $X\\in\\mathcal D$;\n2. if $A,B\\in\\mathcal D$ and $A\\subseteq B$, then $B\\setminus A\\in\\mathcal D$;\n3. if $A_0\\subseteq A_1\\subseteq\\cdots$ and every $A_n\\in\\mathcal D$, then\n   $\\bigcup_{n\\in\\mathbb N}A_n\\in\\mathcal D$.",
   "uses": [
    "1.1",
    "1.2",
    "2.1",
    "2.2",
    "3.1",
    "4.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "prop-complement-and-1-1",
   "claim": "A lambda-system satisfies clauses 1 and 2: X belongs to it, and complements are relative differences from X.",
   "step": "1.1",
   "inputs": [
    "L1",
    "given"
   ]
  },
  {
   "id": "prop-complement-and-1-2",
   "claim": "Under clauses 1-3, X and the empty set both belong to the family.",
   "step": "1.2",
   "inputs": [
    "L1",
    "given"
   ]
  },
  {
   "id": "prop-complement-and-2-1",
   "claim": "Under the lambda-system axioms, every partial union of a pairwise disjoint family belongs to the family, by induction.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "L1",
    "given"
   ]
  },
  {
   "id": "prop-complement-and-2-2",
   "claim": "Under clauses 1-3, the relative difference of a nested pair belongs to the family.",
   "step": "2.2",
   "inputs": [
    "step 1.2",
    "L1",
    "given"
   ]
  },
  {
   "id": "prop-complement-and-3-1",
   "claim": "The increasing partial unions give clause 3, completing the forward direction.",
   "step": "3.1",
   "inputs": [
    "step 2.1",
    "L1",
    "step 1.1",
    "given"
   ]
  },
  {
   "id": "prop-complement-and-4-1",
   "claim": "Disjointifying an increasing sequence gives the increasing-union axiom, completing the reverse direction.",
   "step": "4.1",
   "inputs": [
    "step 2.2",
    "L1",
    "step 1.2",
    "given"
   ]
  }
 ],
 "routine_steps": [],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "Both the empty set and a padded family occur and are handled: step 1.2 derives $\\emptyset=X\\setminus X\\in\\mathcal D$ from clauses 1 and 2, and step 2.2 uses exactly that to pad the two-term disjoint family $A,\\ X\\setminus B$ out to a countable one, which is what clause 3 requires."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "Both constructions start at index zero and the base cases are stated: the induction of step 2.1 begins with $B_0=A_0$, and the disjointification of step 4.1 begins with $C_0=A_0$ rather than with a difference."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "A one-term disjoint family is covered by the padding of step 2.2, and the nested pair $A=B$ gives $B\\setminus A=\\emptyset$, which lies in $\\mathcal D$ by step 1.2."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The coincident inputs are admissible throughout: $A=B$ and $A=\\emptyset$ in step 2.2, and an eventually constant increasing sequence in step 4.1, where every later $C_{n+1}=\\emptyset$ and the union is unaffected."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "Both ends of each construction are named rather than assumed: $B_0=A_0$ in step 2.1 and $\\bigcup_nB_n=\\bigcup_nA_n$ in step 3.1; $C_0=A_0$ and $\\bigcup_nC_n=\\bigcup_nA_n$ in step 4.1."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Every set the proof uses is given by an explicit formula in the supplied families — the partial unions $B_n$, the differences $C_n$, and complements in $X$. Nothing is selected from a nonempty class, so the equivalence is provable in ZF."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "The forward direction, that a lambda-system satisfies clauses 1-3, is steps 1.1, 2.1 and 3.1, with step 3.1 stating the conclusion."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "The reverse direction, that clauses 1-3 give the three lambda-system axioms, is steps 1.2, 2.2 and 4.1, with step 4.1 stating the conclusion."
  }
 ]
}
```

## ITEM: ex-the-group-action-monad-and-its-algebras

```markdown
---
id: ex-the-group-action-monad-and-its-algebras
kind: example
title: "For a group $G$ the monad $G\\times(-)$ on sets has the $G$-sets as its algebras"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: literature-derived
deps: [def-monad, def-t-algebra-and-algebra-homomorphism, def-eilenberg-moore-category, def-group, def-group-action, def-equivariant-map-of-group-actions, prop-sets-and-functions-form-category-set]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., §VI.2, Group actions"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Example

Let $G$ be a group with identity $u$. On $\mathbf{Set}$ put

$$T(X)=G\times X,\qquad T(f)=1_G\times f,\qquad \eta_X(x)=(u,x),\qquad \mu_X\bigl(g_1,(g_2,x)\bigr)=(g_1g_2,x).$$

Then $(T,\eta,\mu)$ is a monad, and its $T$-algebras are exactly the $G$-sets:
a structure map $h:G\times X\to X$ is the same thing as a left action of $G$ on
$X$, and a $T$-algebra homomorphism is the same thing as a $G$-equivariant map.

## Facts & Assumptions

**Given:** A group $G$ with identity $u$.

[L1] A monad on $\mathcal C$ is an endofunctor $T$ with natural transformations $\eta:1_{\mathcal C}\Rightarrow T$ and $\mu:T^2\Rightarrow T$ such that componentwise $\mu_A\circ T(\mu_A)=\mu_A\circ\mu_{TA}$ and $\mu_A\circ T(\eta_A)=1_{TA}=\mu_A\circ\eta_{TA}$ ([[def-monad]]).

[L2] A $T$-algebra is an object $A$ with a morphism $a:TA\to A$ satisfying $a\circ\eta_A=1_A$ and $a\circ T(a)=a\circ\mu_A$; a $T$-algebra homomorphism $f:(A,a)\to(B,b)$ is a morphism $f:A\to B$ with $f\circ a=b\circ T(f)$ ([[def-t-algebra-and-algebra-homomorphism]]).

[L3] A left action of $G$ on a set $X$ is a function $G\times X\to X$, written $(g,x)\mapsto g\cdot x$, such that $u\cdot x=x$ and $(gh)\cdot x=g\cdot(h\cdot x)$ for all $g,h\in G$ and $x\in X$; then $X$ is a $G$-set ([[def-group-action]]).

[L4] A function $f:X\to Y$ between $G$-sets is $G$-equivariant when $f(g\cdot x)=g\cdot f(x)$ for every $g\in G$ and $x\in X$ ([[def-equivariant-map-of-group-actions]]).

[L5] Sets and functions form the category $\mathbf{Set}$, with composition of functions and identity functions ([[prop-sets-and-functions-form-category-set]]).

[L6] The Eilenberg–Moore category $\mathcal C^T$ has the $T$-algebras as objects and the $T$-algebra homomorphisms as morphisms ([[def-eilenberg-moore-category]]).

## Verification

**Proof technique:** direct.

1.1 $T$ is an endofunctor of $\mathbf{Set}$: $T(1_X)=1_G\times1_X=1_{G\times X}$, and $T(f'\circ f)=1_G\times(f'\circ f)=(1_G\times f')\circ(1_G\times f)=T(f')\circ T(f)$, since both sides send $(g,x)$ to $(g,f'(f(x)))$. [L1, L5, given]

1.2 $\eta$ is natural: for $f:X\to Y$, both $T(f)\circ\eta_X$ and $\eta_Y\circ f$ send $x$ to $(u,f(x))$. And $\mu$ is natural: for $f:X\to Y$, both $T(f)\circ\mu_X$ and $\mu_Y\circ T(T(f))$ send $\bigl(g_1,(g_2,x)\bigr)$ to $(g_1g_2,f(x))$. [L1, given]

2.1 Associativity holds componentwise: on $\bigl(g_1,(g_2,(g_3,x))\bigr)$ the composite $\mu_X\circ T(\mu_X)$ gives $(g_1(g_2g_3),x)$ and $\mu_X\circ\mu_{TX}$ gives $((g_1g_2)g_3,x)$, and these agree because multiplication in $G$ is associative. [L1, given, step 1.1, step 1.2]

2.2 The unit laws hold componentwise: on $(g,x)$ the composite $\mu_X\circ T(\eta_X)$ gives $(gu,x)$ and $\mu_X\circ\eta_{TX}$ gives $(ug,x)$, and both equal $(g,x)$ because $u$ is a two-sided identity of $G$. Hence $(T,\eta,\mu)$ is a monad by [L1]. [L1, given, step 1.1, step 1.2]

3.1 Let $h:G\times X\to X$ be a structure map. By [L2] the unit law $h\circ\eta_X=1_X$ says $h(u,x)=x$ for every $x$, and the associativity law $h\circ T(h)=h\circ\mu_X$ evaluated at $\bigl(g_1,(g_2,x)\bigr)$ says $h(g_1,h(g_2,x))=h(g_1g_2,x)$. Writing $g\cdot x:=h(g,x)$, these are exactly the two clauses of [L3], so $h$ is a left action of $G$ on $X$. [L2, L3, step 2.1, step 2.2]

4.1 Conversely, a left action of $G$ on $X$ is a function $h:G\times X\to X$ with $h(u,x)=x$ and $h(g_1g_2,x)=h(g_1,h(g_2,x))$ by [L3], which are the two $T$-algebra laws of [L2] read backwards. So the $T$-algebras with underlying set $X$ are precisely the left actions of $G$ on $X$. [L2, L3, step 3.1]

5.1 For algebras $(X,h)$ and $(Y,k)$ and a function $f:X\to Y$, the homomorphism condition $f\circ h=k\circ T(f)$ of [L2] evaluated at $(g,x)$ reads $f(h(g,x))=k(g,f(x))$, that is $f(g\cdot x)=g\cdot f(x)$, which is $G$-equivariance in the sense of [L4]. [L2, L4, step 3.1, step 4.1]

6.1 By [L6] the Eilenberg–Moore category of this monad therefore has the $G$-sets as objects and the $G$-equivariant maps as morphisms. This proves the stated claim. [L6, step 4.1, step 5.1] ∎

```

### Recorded proof contract for ex-the-group-action-monad-and-its-algebras

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-monad",
   "source_section": "Definition",
   "quote": "Let $\\mathcal C$ be a category. A **monad on $\\mathcal C$** is a triple $(T,\\eta,\\mu)$ consisting of an endofunctor $T:\\mathcal C\\to\\mathcal C$ ([[def-functor-and-contravariant-functor]]) and natural transformations ([[def-natural-transformation]])\n\n$$\\eta:1_{\\mathcal C}\\Rightarrow T,\\qquad \\mu:T^2\\Rightarrow T,$$\n\ncalled the **unit** and **multiplication**, such that\n\n$$\\mu\\circ T\\mu=\\mu\\circ\\mu T:T^3\\Rightarrow T,$$\n\n$$\\mu\\circ T\\eta=1_T=\\mu\\circ\\eta T:T\\Rightarrow T.$$\n\nHere $T\\mu$, $\\mu T$, $T\\eta$, and $\\eta T$ are whiskerings in the sense of [[def-horizontal-composition-and-whiskering-of-natural-transformations]]. Componentwise, for every object $A$,\n\n$$\\mu_A\\circ T(\\mu_A)=\\mu_A\\circ\\mu_{TA},\\qquad \\mu_A\\circ T(\\eta_A)=1_{TA}=\\mu_A\\circ\\eta_{TA}.$$",
   "uses": [
    "1.1",
    "1.2",
    "2.1",
    "2.2"
   ]
  },
  {
   "fact": "L2",
   "source": "def-t-algebra-and-algebra-homomorphism",
   "source_section": "Definition",
   "quote": "Let $(T,\\eta,\\mu)$ be a monad on $\\mathcal C$ ([[def-monad]]). A **$T$-algebra** is an object $A$ together with a morphism $a:TA\\to A$, called its **structure map**, satisfying\n\n$$a\\circ\\eta_A=1_A,\\qquad a\\circ T(a)=a\\circ\\mu_A.$$\n\nFor $T$-algebras $(A,a)$ and $(B,b)$, a **$T$-algebra homomorphism** $f:(A,a)\\to(B,b)$ is a morphism $f:A\\to B$ in $\\mathcal C$ such that\n\n$$f\\circ a=b\\circ T(f).$$",
   "uses": [
    "3.1",
    "4.1",
    "5.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-group-action",
   "source_section": "Definition",
   "quote": "Let $G$ be a group with identity $e$ and let $X$ be a set. A **left action** of\n$G$ on $X$ is a function $G\\times X\\to X$, written $(g,x)\\mapsto g\\cdot x$,\nsuch that\n\n$$e\\cdot x=x,\\qquad (gh)\\cdot x=g\\cdot(h\\cdot x)$$\n\nfor all $g,h\\in G$ and $x\\in X$. Then $X$ is a **$G$-set**. The action is\n**transitive** when every $x,y\\in X$ satisfy $g\\cdot x=y$ for some $g\\in G$.\nIt is **faithful** when $g\\cdot x=x$ for every $x\\in X$ implies $g=e$.",
   "uses": [
    "3.1",
    "4.1"
   ]
  },
  {
   "fact": "L4",
   "source": "def-equivariant-map-of-group-actions",
   "source_section": "Definition",
   "quote": "Let $X$ and $Y$ be $G$-sets ([[def-group-action]]). A function\n$f:X\\to Y$ ([[def-function]]) is **$G$-equivariant** when\n\n$$f(g\\cdot x)=g\\cdot f(x)$$\n\nfor every $g\\in G$ and $x\\in X$. An **isomorphism of $G$-sets** is an\nequivariant bijection ([[def-injection-surjection-bijection]]). Two actions are\n**equivariantly isomorphic** when such a bijection exists between their\n$G$-sets.",
   "uses": [
    "5.1"
   ]
  },
  {
   "fact": "L5",
   "source": "prop-sets-and-functions-form-category-set",
   "source_section": "Statement",
   "quote": "Sets as objects and functions as morphisms form a large locally small category\n$\\mathbf{Set}$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L6",
   "source": "def-eilenberg-moore-category",
   "source_section": "Definition",
   "quote": "For a monad $T$ on $\\mathcal C$, the **Eilenberg–Moore category** $\\mathcal C^T$ has the $T$-algebras as objects and the $T$-algebra homomorphisms as morphisms. Its identities and composition are those of $\\mathcal C$; [[thm-t-algebra-homomorphisms-are-closed-under-identities-and-composition]] proves that these operations are closed and satisfy the category laws.\n\nThe **Eilenberg–Moore forgetful functor** $U^T:\\mathcal C^T\\to\\mathcal C$ sends $(A,a)$ to $A$ and acts as the identity on each underlying morphism.",
   "uses": [
    "6.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "ex-the-group-2-1",
   "claim": "Monad associativity holds, from associativity of multiplication in G.",
   "step": "2.1",
   "inputs": [
    "L1",
    "step 1.1",
    "step 1.2",
    "given"
   ]
  },
  {
   "id": "ex-the-group-2-2",
   "claim": "The two monad unit laws hold, from u being a two-sided identity of G; hence (T, eta, mu) is a monad.",
   "step": "2.2",
   "inputs": [
    "L1",
    "step 1.1",
    "step 1.2",
    "given"
   ]
  },
  {
   "id": "ex-the-group-3-1",
   "claim": "A T-algebra structure map is a left action of G on its underlying set.",
   "step": "3.1",
   "inputs": [
    "L2",
    "L3",
    "step 2.1",
    "step 2.2",
    "given"
   ]
  },
  {
   "id": "ex-the-group-4-1",
   "claim": "Conversely, every left action of G on X is a T-algebra structure map, so the two notions coincide.",
   "step": "4.1",
   "inputs": [
    "L3",
    "L2",
    "step 3.1",
    "given"
   ]
  },
  {
   "id": "ex-the-group-5-1",
   "claim": "A T-algebra homomorphism is exactly a G-equivariant map.",
   "step": "5.1",
   "inputs": [
    "L2",
    "L4",
    "step 3.1",
    "step 4.1",
    "given"
   ]
  },
  {
   "id": "ex-the-group-6-1",
   "claim": "The Eilenberg-Moore category of T is the category of G-sets and equivariant maps.",
   "step": "6.1",
   "inputs": [
    "L6",
    "step 4.1",
    "step 5.1",
    "given"
   ]
  }
 ],
 "routine_steps": [
  {
   "id": "ex-the-group-1-1",
   "claim": "T(X) = G x X with T(f) = 1_G x f is an endofunctor of Set.",
   "step": "1.1",
   "inputs": [
    "L1",
    "L5",
    "given"
   ]
  },
  {
   "id": "ex-the-group-1-2",
   "claim": "The unit and multiplication formulas are natural transformations.",
   "step": "1.2",
   "inputs": [
    "L1",
    "given"
   ]
  }
 ],
 "boundaries": [
  {
   "case": "empty",
   "status": "checked",
   "evidence": "$X=\\emptyset$ is admissible: $T(\\emptyset)=G\\times\\emptyset=\\emptyset$ and the unique map $\\emptyset\\to\\emptyset$ is a structure map, so the empty $G$-set is an algebra. Every identity in steps 1.1 and 2.2 is verified pointwise, so each holds vacuously there."
  },
  {
   "case": "zero",
   "status": "not_applicable",
   "reason": "No numerical or additive zero occurs. The only distinguished element is the group identity $u$, whose behaviour is dispositioned under `one`."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "The trivial group $G=1$ gives $T(X)=1\\times X$, the identity monad up to the canonical bijection, whose algebras are all sets with the trivial action. Step 2.2 is where $u$ enters and is exactly the computation that degenerates, and step 3.1 then reads the unit law as $u\\cdot x=x$."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "A one-point $X$ carries exactly one structure map, and steps 3.1 and 4.1 identify it with the trivial action; the coincident inputs $g_1=g_2$ and $g_1=u$ are nowhere excluded in step 2.1, whose verification is an identity in the group elements."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "Nothing is indexed, ordered or iterated: the monad laws are equations between two composites and are checked elementwise, with no first or last term."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "Every element is universally quantified and every map is given by an explicit formula ($1_G\\times f$, $(u,x)$, $(g_1g_2,x)$). Nothing is selected from a class whose nonemptiness must be argued, so no choice principle is used."
  },
  {
   "case": "iff-forward",
   "status": "checked",
   "evidence": "The forward reading — every $T$-algebra structure map is a left action — is step 3.1, which converts the two algebra laws into the two action axioms."
  },
  {
   "case": "iff-reverse",
   "status": "checked",
   "evidence": "The converse — every left action is a structure map — is step 4.1, and step 5.1 does both directions for homomorphisms against equivariant maps, since the displayed condition is a single equation read either way."
  }
 ]
}
```

---

# DEPENDENCY TEXT — the cited items, in full

## DEPENDENCY: def-lambda-system

```markdown
---
id: def-lambda-system
kind: definition
title: "Lambda-systems, or Dynkin systems"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: []
aliases: [def-dynkin-system]
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "A. Dembo, Probability Theory lecture notes, Definition 1.1.36"
      url: "https://adembo.su.domains/stat-310b/lnotes.pdf"
pipeline_run: null
---

## Definition

Let $X$ be a set. A **lambda-system**, or **Dynkin system**, on $X$ is a family
$\mathcal D\subseteq\mathcal P(X)$ such that:

1. $X\in\mathcal D$;
2. if $A,B\in\mathcal D$ and $A\subseteq B$, then $B\setminus A\in\mathcal D$;
3. if $A_0\subseteq A_1\subseteq\cdots$ and every $A_n\in\mathcal D$, then
   $\bigcup_{n\in\mathbb N}A_n\in\mathcal D$.

```

## DEPENDENCY: def-monad

```markdown
---
id: def-monad
kind: definition
title: "Monad on a category"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-functor-and-contravariant-functor, def-natural-transformation, def-horizontal-composition-and-whiskering-of-natural-transformations]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definition 5.1.1"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, Definition 6.1.1"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
    - title: "S. Mac Lane, Categories for the Working Mathematician, 2nd ed., Chapter VI.1"
      url: "https://math.mit.edu/~hrm/palestine/maclane-categories.pdf"
pipeline_run: null
---

## Definition

Let $\mathcal C$ be a category. A **monad on $\mathcal C$** is a triple $(T,\eta,\mu)$ consisting of an endofunctor $T:\mathcal C\to\mathcal C$ ([[def-functor-and-contravariant-functor]]) and natural transformations ([[def-natural-transformation]])

$$\eta:1_{\mathcal C}\Rightarrow T,\qquad \mu:T^2\Rightarrow T,$$

called the **unit** and **multiplication**, such that

$$\mu\circ T\mu=\mu\circ\mu T:T^3\Rightarrow T,$$

$$\mu\circ T\eta=1_T=\mu\circ\eta T:T\Rightarrow T.$$

Here $T\mu$, $\mu T$, $T\eta$, and $\eta T$ are whiskerings in the sense of [[def-horizontal-composition-and-whiskering-of-natural-transformations]]. Componentwise, for every object $A$,

$$\mu_A\circ T(\mu_A)=\mu_A\circ\mu_{TA},\qquad \mu_A\circ T(\eta_A)=1_{TA}=\mu_A\circ\eta_{TA}.$$

```

## DEPENDENCY: def-t-algebra-and-algebra-homomorphism

```markdown
---
id: def-t-algebra-and-algebra-homomorphism
kind: definition
title: "Algebra and algebra homomorphism for a monad"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-monad]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definition 5.2.4"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, Definition 6.2.1"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Definition

Let $(T,\eta,\mu)$ be a monad on $\mathcal C$ ([[def-monad]]). A **$T$-algebra** is an object $A$ together with a morphism $a:TA\to A$, called its **structure map**, satisfying

$$a\circ\eta_A=1_A,\qquad a\circ T(a)=a\circ\mu_A.$$

For $T$-algebras $(A,a)$ and $(B,b)$, a **$T$-algebra homomorphism** $f:(A,a)\to(B,b)$ is a morphism $f:A\to B$ in $\mathcal C$ such that

$$f\circ a=b\circ T(f).$$

```

## DEPENDENCY: def-eilenberg-moore-category

```markdown
---
id: def-eilenberg-moore-category
kind: definition
title: "Eilenberg–Moore category of a monad"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [thm-t-algebra-homomorphisms-are-closed-under-identities-and-composition]
aliases: []
landmark: true
verification:
  precheck: n/a
sources:
  scraped: []
  references:
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Definition 5.2.4"
      url: "https://emilyriehl.github.io/files/context.pdf"
    - title: "B. Richter, From Categories to Homotopy Theory, Section 6.2"
      url: "https://www.math.uni-hamburg.de/personen/richter/bookdraft.pdf"
pipeline_run: null
---

## Definition

For a monad $T$ on $\mathcal C$, the **Eilenberg–Moore category** $\mathcal C^T$ has the $T$-algebras as objects and the $T$-algebra homomorphisms as morphisms. Its identities and composition are those of $\mathcal C$; [[thm-t-algebra-homomorphisms-are-closed-under-identities-and-composition]] proves that these operations are closed and satisfy the category laws.

The **Eilenberg–Moore forgetful functor** $U^T:\mathcal C^T\to\mathcal C$ sends $(A,a)$ to $A$ and acts as the identity on each underlying morphism.

```

## DEPENDENCY: def-group

```markdown
---
id: def-group
kind: definition
title: "Group and abelian group"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-semigroup-and-monoid, def-invertible-element, lem-inverse-unique, def-identity-element, def-binary-operation]
justified_by: []
aliases: [def-abelian-group]
landmark: true
short: "group, abelian group"
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
    - title: "Group (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Group_(mathematics)"
    - title: "Abelian group (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Abelian_group"
pipeline_run: null
---

## Definition

A **group** is a monoid $(G,*,e)$ ([[def-semigroup-and-monoid]]) in which every
element is invertible ([[def-invertible-element]]). Written out, a group is a set
$G$ with a binary operation $*$ ([[def-binary-operation]]) and an element
$e \in G$ such that

- **(G1)** $(x * y) * z = x * (y * z)$ for all $x, y, z \in G$;
- **(G2)** $e * x = x = x * e$ for every $x \in G$;
- **(G3)** for every $x \in G$ there is $y \in G$ with $y * x = e = x * y$.

By [[lem-identity-unique]] the element $e$ of (G2) is unique, and by
[[lem-inverse-unique]] the element $y$ of (G3) is unique for each $x$ and is
determined by either one of the two equations alone. So the notations $e$ for the
identity and $x^{-1}$ for the inverse of $x$ are legitimate, and asserting
$y * x = e$ alone already says $y = x^{-1}$.

A group is **abelian**, or **commutative**, when its operation is commutative:
$x * y = y * x$ for all $x, y \in G$.

**Notation.** The operation is usually written multiplicatively, $xy$ for
$x * y$, with identity $e$ (or $1$) and inverse $x^{-1}$. For an abelian group it
is often written additively, $x + y$, with identity $0$ and inverse $-x$; the two
notations describe the same notion and nothing below depends on the choice. We
write $G$ for the group when the operation is understood.

## Remarks

- **Why (G3) may be stated one-sidedly in practice.** The axiom as written asks
  for a two-sided inverse. Because [[lem-inverse-unique]] is proved before this
  definition, and is proved in the sharp form "a left inverse and a right inverse
  of the same element coincide", verifying either equation for a candidate $y$
  suffices once the element is known to be invertible. Nothing on this page ever
  uses a one-sided inverse without that lemma standing behind it.

- **A group is a monoid, not merely like one.** Every statement proved for
  monoids applies verbatim to groups. In the other direction the invertible
  elements of a monoid form a group ([[lem-monoid-units-form-a-group]]), so
  groups arise inside every monoid.

- **The axioms are not independent of the notation, but the content is.** Read
  additively, (G1)–(G3) are exactly the additive axioms in the definition of a
  field ([[def-field]]), whose axiom (A) says in as many words that $(F,+)$ is an
  abelian group and whose axiom (M) says the same of
  $(F \setminus \{0\}, \cdot)$; so every field already carries two groups.

```

## DEPENDENCY: def-group-action

```markdown
---
id: def-group-action
kind: definition
title: "Left group actions, transitive actions, and faithful actions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-03
sources:
  scraped: []
  references:
    - title: "Brosnan, Group actions"
      url: "https://math.umd.edu/~pbrosnan/notes/ugalg/sect0034.html"
pipeline_run: null
---

## Definition

Let $G$ be a group with identity $e$ and let $X$ be a set. A **left action** of
$G$ on $X$ is a function $G\times X\to X$, written $(g,x)\mapsto g\cdot x$,
such that

$$e\cdot x=x,\qquad (gh)\cdot x=g\cdot(h\cdot x)$$

for all $g,h\in G$ and $x\in X$. Then $X$ is a **$G$-set**. The action is
**transitive** when every $x,y\in X$ satisfy $g\cdot x=y$ for some $g\in G$.
It is **faithful** when $g\cdot x=x$ for every $x\in X$ implies $g=e$.

```

## DEPENDENCY: def-equivariant-map-of-group-actions

```markdown
---
id: def-equivariant-map-of-group-actions
kind: definition
title: "Equivariant maps and isomorphisms of group actions"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-group-action, def-function, def-injection-surjection-bijection]
justified_by: []
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-08-11
sources:
  scraped: []
  references:
    - title: "P. Brosnan, Undergraduate Algebra Notes, 3.14: G-Sets"
      url: "https://www.math.umd.edu/~pbrosnan/notes/ugalg/sect0035.html"
pipeline_run: null
---

## Definition

Let $X$ and $Y$ be $G$-sets ([[def-group-action]]). A function
$f:X\to Y$ ([[def-function]]) is **$G$-equivariant** when

$$f(g\cdot x)=g\cdot f(x)$$

for every $g\in G$ and $x\in X$. An **isomorphism of $G$-sets** is an
equivariant bijection ([[def-injection-surjection-bijection]]). Two actions are
**equivariantly isomorphic** when such a bijection exists between their
$G$-sets.

```

## DEPENDENCY: prop-sets-and-functions-form-category-set

```markdown
---
id: prop-sets-and-functions-form-category-set
kind: proposition
title: "Sets and functions form the large locally small category $\\mathbf{Set}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-category, def-small-locally-small-and-large-category, def-function, def-the-set-of-functions-from-one-set-to-another, thm-burali-forti]
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
    - title: "Emily Riehl, Category Theory in Context, Chapter 1"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Sets as objects and functions as morphisms form a large locally small category
$\mathbf{Set}$.

## Facts & Assumptions

**Given:** Sets $A,B,C$ and functions $f:A\to B$, $g:B\to C$.

[L1] A category has associative composition and an identity at every object, and when it is presented by its hom-collections a morphism is the triple $(A,B,f)$, so that $\operatorname{dom}$ and $\operatorname{cod}$ are the projections ([[def-category]]); a function is a set of ordered pairs with a set domain and a uniquely determined value at each point of it, and does not itself determine a codomain ([[def-function]]); the functions $A\to B$ form the set $B^A$ ([[def-the-set-of-functions-from-one-set-to-another]]).

[L2] Small, locally small, and large have the meanings in [[def-small-locally-small-and-large-category]], and the ordinals do not form a set ([[thm-burali-forti]]).

## Proof

**Proof technique:** direct.

1.1 Identity functions are functions, composites of functions are functions, function composition is associative, and $1_B\circ f=f=f\circ1_A$. [given, L1]

2.1 Hence sets and functions satisfy every axiom of a category. [step 1.1, L1]

3.1 For fixed $A,B$, the hom-collection is $\{(A,B,f):f\in B^A\}$, a set in bijection with the set $B^A$ from [L1]; the tagging is what gives each morphism a unique codomain, since the empty function alone would be a morphism into every set. The object class contains every ordinal and therefore is not a set, so $\mathbf{Set}$ is locally small and large. [step 2.1, L1, L2] ∎

```


## What the lead Alpha most wants tested on these items

1. prop-complement-and-disjoint-union-axioms-for-a-lambda-system CORRECTS its
   source. Dembo's Remark after Definition 1.1.36 offers complements IN PLACE OF
   relative differences while keeping increasing limits; the lead Alpha believes
   that is NOT an equivalent axiom system, on the witness
   D = {{}, {1}, {1,2}, {3,4}, {2,3,4}, X} over X = {1,2,3,4}: it contains X, is
   closed under complements and under increasing unions, yet {1,2} \ {1} = {2}
   is not in it. Check that witness. Then check that the form the item actually
   proves equivalent — X, complements, COUNTABLE DISJOINT unions — really is
   equivalent, in both directions, and that no step uses a choice principle.
2. Step 2.2 pads a two-term disjoint family out to a countable one with copies of
   the empty set. Is that licensed by clause 3 as the item states it?
3. ex-the-group-action-monad-and-its-algebras: check step 3.1's reading of the
   two T-algebra laws really is the two action axioms of def-group-action and
   not a weaker pair, and that step 5.1's homomorphism condition is equivariance
   in the library's sense. The source is Mac Lane, CWM, section VI.2 "Group
   actions", printed p. 141.
4. The eight boundary dispositions on each item. Instantiate the empty set, the
   trivial group, a one-point X, n = 0, n = 1, and both directions of every iff,
   and say whether each recorded disposition is TRUE.
