# Audit proof-refuter brief — Wave 7, step A6

> **NO SHELL-PERMISSION PROMPTS (owner, 2026-07-30) — binding on every current
> and future agent.** Use commands already allowed inside the workspace sandbox;
> choose non-escalated forms and never ask the owner to approve a shell command.
> If an indispensable operation has no escalation-free form, report a blocker.

You are **DeepSeek V4 Pro** at the API's maximum reasoning setting, serving as a
read-only adversarial proof-refuter for the published-page audit. You are
tool-less: you cannot open a file, run a command, browse, edit, or delegate.
Everything you may rely on is reproduced in the `This dispatch` section. Return
evidence only; Audit-Alpha alone adjudicates and edits.

## Triage — the standing rule (verbatim, binding on you)

- **Non-negotiable:** mathematical accuracy, logical validity, correct
  citation.
- **Explicitly acceptable, spend no effort:** minor citational quirks; logical
  gaps a competent reader closes **within 30 seconds**; other non-fatal quirks;
  imperfection at the level of the letter.

## Adversarial standard

Read the target's title, Statement/Definition/Example/Statement refuted, Facts &
Assumptions, every numbered proof/refutation/verification step, and Remarks.
Try to falsify the public claim and every load-bearing inference.

1. Compare every cited fact with the supplied source text before alleging that
   it is weak. Check domain, quantifiers, hypotheses, direction, conclusion,
   and whether the source licenses the exact use.
2. Check that the title and public statement assert no more than the proof
   establishes, and that every proof step uses only available premises.
3. Check both directions of biconditionals, uniqueness/existence claims,
   induction and limiting arguments, empty/zero/endpoint/degenerate cases,
   extended-real conventions, index shifts, and hidden division or choice.
4. Re-read Remarks as skeptically as a numbered step. A false mathematical
   remark is a defect even when the proof is sound.
5. When the target is marked `ai-generated`, actively search for a
   counterexample to its claim, witness, or refutation rather than merely
   checking prose consistency.
6. Treat a false public claim, logically invalid proof, missing necessary
   hypothesis, circularity, or materially inaccurate load-bearing citation as
   fatal. Do not inflate an expository omission or a gap closable within thirty
   seconds into a defect.

## Output format

Reply with exactly this structure and no preamble:

```text
VERDICT: CLEAN | DEFECTS
```

If `DEFECTS`, give one block per finding:

```text
FINDING 1
  location: [exact title, section, fact label, or numbered step]
  severity: fatal | nonfatal
  claim:    [the exact mathematical assertion]
  evidence: [counterexample, missing hypothesis, invalid inference, or exact source mismatch]
```

Then always end with:

```text
BOUNDARY: [specific boundary/counterexample checks and their disposition]
SOURCES:  [confirm every supplied cited item used by the target was inspected]
CHECKED:  [confirm the title, public claim, every numbered step, and Remarks were read]
```


---

# This dispatch

## Selection reasons

- critical risk (12): 8 declared dependencies; 7 cited facts; biconditional / both-direction claim; boundary-sensitive language; analytic limiting/completeness language

## Target item — `lem-lower-limit-plane-antidiagonal`

Normalized current SHA-256: `6e489b31eff3e76d82d9e72e6eb164249c73c77a1ae03ae91da534e35ca3d134`

The complete current item follows, including frontmatter:

````markdown
---
id: lem-lower-limit-plane-antidiagonal
kind: lemma
title: "The lower-limit plane has a countable dense set and a closed discrete antidiagonal of size $|\\mathbb{R}|$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-lower-limit-topology, def-product-topology, def-dense-top, def-subspace-topology-top, thm-rationals-countable, lem-rat-embeds-dense, thm-product-of-countable, thm-r-uncountable]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "G. Gruenhage, General Topology Course Notes, Sorgenfrey plane"
      url: "https://webhome.auburn.edu/~gruengf/papers/Topology_Course_Notes.pdf"
    - title: "Sorgenfrey plane (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Sorgenfrey_plane"
    - title: "Sorgenfrey topology (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Sorgenfrey_topology"
pipeline_run: null
---

## Statement

In the square of the lower-limit line, $\mathbb Q\times\mathbb Q$ is a countable dense subset, while $D=\{(x,-x):x\in\mathbb R\}$ is closed and discrete and has the same cardinality as $\mathbb R$.

## Facts & Assumptions

**Given:** The lower-limit plane and its basic rectangles $[a,b)\times[c,d)$.

[F1] Basic product-open sets restrict finitely many coordinates; for this binary product they are the basic rectangles ([[def-product-topology]], [[def-lower-limit-topology]]).

[F2] A subset is dense iff it meets every nonempty basic open set, the rational numbers are countably infinite, and a rational lies strictly between any two distinct reals ([[def-dense-top]], [[thm-rationals-countable]], [[lem-rat-embeds-dense]]).

[L1] A product of two at most countable sets is at most countable, and $\mathbb R$ is uncountable ([[thm-product-of-countable]], [[thm-r-uncountable]]).

## Proof

**Proof technique:** direct.

1.1 Every nonempty $[a,b)\times[c,d)$ contains a point of $\mathbb Q\times\mathbb Q$: choose rationals $p\in[a,b)$ and $q\in[c,d)$. Hence $\mathbb Q\times\mathbb Q$ is dense, and it is at most countable by [L1]. [F1, F2, L1]

1.2 The map $x\mapsto(x,-x)$ is a bijection from $\mathbb R$ onto $D$, so $D$ has cardinality $|\mathbb R|$ and is uncountable. [L1]

1.3 For $(x,-x)\in D$, the rectangle $[x,x+1)\times[-x,-x+1)$ meets $D$ only at $(x,-x)$, so $D$ is discrete in its subspace topology. [F1]

1.4 If $(u,v)\notin D$ and $u+v>0$, every sufficiently small lower-limit rectangle at $(u,v)$ has positive coordinate sum; if $u+v<0$, choose its two right endpoints so that their total increment is less than $-(u+v)$. In either case the rectangle misses $D$, so the complement of $D$ is open. [F1]

2.1 Therefore $D$ is closed discrete, with the stated cardinality, and the plane has the stated countable dense subset. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
````

## Wave 7 provenance row for the target

```json
{
  "id": "lem-lower-limit-plane-antidiagonal",
  "statement": "ai-altered",
  "proof": "ai-altered",
  "evidence": "semantic-source",
  "urls": [
    "https://en.wikipedia.org/wiki/Sorgenfrey_plane",
    "https://encyclopediaofmath.org/wiki/Sorgenfrey_topology"
  ],
  "rationale": "The sources identify the separable Sorgenfrey plane and its uncountable closed-discrete antidiagonal; the library names Q squared and records the cardinal equivalence.",
  "alpha_concurred": false,
  "at": "2026-08-08",
  "ledger": "wave7-topology-separation-urysohn.provenance.jsonl"
}
```

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "F1",
      "source": "def-product-topology",
      "source_section": "Definition",
      "quote": "**The product set.** Let $I$ be a set and let $X_i$ be a set for each $i \\in I$.\nThe **product** is\n\n$$\\prod_{i \\in I} X_i \\;:=\\; \\Big\\{\\, x : x \\text{ is a function with domain } I \\text{ and } x(i) \\in X_i \\text{ for every } i \\in I \\,\\Big\\},$$\n\nand we write $x_i := x(i)$, the $i$-th **coordinate** of $x$. Two elements of the\nproduct are equal exactly when they agree at every index, functions being equal\nwhen they have the same domain and the same values. For $j \\in I$ the $j$-th\n**projection** is\n\n$$\\pi_j : \\prod_{i \\in I} X_i \\to X_j, \\qquad \\pi_j(x) := x_j .$$\n\n**Notation for a finite product.** For $I = n$ a natural number, which is the set\n$\\{0, 1, \\dots, n-1\\}$ of its predecessors, an element of $\\prod_{k<n} X_k$ is a\nfunction on $n$ and we write it $(x_0, \\dots, x_{n-1})$. In particular $I = 2$\ngives the **binary product**, written $X \\times Y$ for $\\prod_{i<2} X_i$ with\n$X_0 = X$ and $X_1 = Y$, whose elements are written $(u,v)$ for the function\n$0 \\mapsto u$, $1 \\mapsto v$. This is the only meaning the symbol $X \\times Y$\ncarries on this page.\n\n**Two facts about when the product is nonempty, stated because they are used and\nbecause they cost something.** If some $X_{i_0}$ is empty then the product is\nempty, since no function can take a value in $X_{i_0}$. Conversely, suppose every\n$X_i$ is nonempty.\n\n- For $I = n$ a natural number, the product is nonempty, and this is a theorem of\n  ZF: [[lem-finite-choice]] applied to the function $i \\mapsto X_i$ on $n$\n  supplies a choice function $g$ for the family of values, and\n  $x(i) := g(X_i)$ defines a member of $\\prod_{k<n} X_k$.\n- For an arbitrary $I$ the assertion \"$\\prod_{i \\in I} X_i \\ne \\varnothing$\n  whenever every $X_i$ is nonempty\" **is** the Axiom of Choice: it is the\n  formulation recorded in [[def-axiom-of-choice]], and the choice function of\n  [[def-choice-function]] is exactly a point of the product of a family by\n  itself. Every use of it below is flagged at the step that spends it.\n\n**The box topology.** Now let each $X_i$ carry a topology $\\mathcal{T}_i$\n([[def-topological-space]]). Put\n\n$$\\mathcal{R} \\;:=\\; \\Big\\{\\, \\prod_{i \\in I} U_i \\;:\\; U_i \\in \\mathcal{T}_i \\text{ for every } i \\in I \\,\\Big\\},$$\n\nthe family of **boxes**. $\\mathcal{R}$ is a basis for a topology\n([[thm-basis-criterion]]): it contains $\\prod_i X_i$, so it covers the product,\nand it is closed under binary intersections, since\n\n$$\\Big(\\prod_i U_i\\Big) \\cap \\Big(\\prod_i V_i\\Big) = \\prod_i (U_i \\cap V_i)$$\n\nand each $U_i \\cap V_i$ is open by (T3). The topology it generates is the **box\ntopology** $\\mathcal{T}^{\\square}$, and $\\mathcal{R}$ is a basis for it\n([[def-topology-basis-subbasis]]).\n\n**The product topology.** The **product topology** $\\mathcal{T}^{\\Pi}$ on\n$\\prod_i X_i$ is the initial topology of the family of projections\n$(\\pi_i)_{i \\in I}$ ([[def-initial-and-final-topology]]): the topology generated\nby the subbasis\n\n$$\\mathcal{G} \\;:=\\; \\{\\, \\pi_i^{-1}[U] : i \\in I,\\ U \\in \\mathcal{T}_i \\,\\}, \\qquad \\pi_i^{-1}[U] = \\prod_{j \\in I} W_j \\ \\text{ with } W_i = U \\text{ and } W_j = X_j \\text{ for } j \\ne i .$$\n\nBy [[thm-basis-criterion]] the finite intersections of members of $\\mathcal{G}$\nform a basis for $\\mathcal{T}^{\\Pi}$, and those finite intersections are exactly\nthe boxes with all but finitely many factors unrestricted:\n\n$$\\mathcal{R}^{\\Pi} \\;=\\; \\Big\\{\\, \\prod_{i \\in I} U_i \\;:\\; U_i \\in \\mathcal{T}_i \\text{ for every } i, \\text{ and } U_i = X_i \\text{ for all but finitely many } i \\,\\Big\\}.$$\n\nIndeed the intersection of $\\pi_{i_1}^{-1}[U_1], \\dots, \\pi_{i_n}^{-1}[U_n]$ is\nthe box whose factor at $i$ is the intersection of those $U_m$ with $i_m = i$ and\nis $X_i$ when no $i_m$ equals $i$; and the intersection of no members is the\nwhole product, the box with every factor $X_i$. Conversely a box with\n$U_i = X_i$ off a finite set is such an intersection. Members of\n$\\mathcal{R}^{\\Pi}$ are called **basic product-open** sets, and members of\n$\\mathcal{R}$ **boxes**. So $\\mathcal{R}^{\\Pi} \\subseteq \\mathcal{R}$, with\nequality when $I$ is a natural number.\n\n**The empty product.** For $I = \\varnothing$ there is exactly one function with\ndomain $\\varnothing$, the empty function, so $\\prod_{i \\in \\varnothing} X_i$ is a\none-point set. A one-point set carries exactly one topology, namely\n$\\{\\varnothing, \\{\\varnothing\\}\\}$, since a topology must contain the empty set\nand the whole set and there is nothing else to contain\n([[def-topological-space]]); so the box topology and the product topology agree\nthere, and both equal the discrete topology and the indiscrete topology\n([[def-standard-topologies]]), which coincide on a one-point set. There are no\nprojections to speak of, and the initial topology of the empty family is indeed\nthe indiscrete one ([[def-initial-and-final-topology]]).\n\n**Convention.** Unless the box topology is named explicitly, $\\prod_i X_i$ always\ncarries the product topology in this library. That is not a matter of taste: the\nproduct topology is the one with the characteristic property of the next item,\nand the box topology has no such property.",
      "uses": [
        "1.1",
        "1.3",
        "1.4"
      ]
    },
    {
      "fact": "F1",
      "source": "def-lower-limit-topology",
      "source_section": "Definition",
      "quote": "Let $\\mathcal B_\\ell=\\{[a,b):a,b\\in\\mathbb R,\\ a<b\\}$. The **lower-limit topology** $\\mathcal T_\\ell$ on $\\mathbb R$ is the topology having $\\mathcal B_\\ell$ as a basis. The resulting space is the **lower-limit line**.\n\nThis basis is well defined. It covers $\\mathbb R$, because $x\\in[x,x+1)$ for every $x$. If $x\\in[a,b)\\cap[c,d)$, then $x\\in[\\max(a,c),\\min(b,d))$, whose right endpoint exceeds $x$ and which lies inside the intersection. Thus the two basis conditions of [[thm-basis-criterion]] hold, so $\\mathcal B_\\ell$ determines a unique topology.\n\nThe lower-limit topology is finer than the usual topology: if $x\\in(a,b)$, then $[x,(x+b)/2)$ is a lower-limit basic interval containing $x$ and contained in $(a,b)$. No equality with the usual topology is asserted here. The half-open intervals use the interval convention of [[def-interval]], and opens are exactly unions of basis members by [[def-topology-basis-subbasis]].",
      "uses": [
        "1.1",
        "1.3",
        "1.4"
      ]
    },
    {
      "fact": "F2",
      "source": "def-dense-top",
      "source_section": "Definition",
      "quote": "Let $(X, \\mathcal{T})$ be a topological space, let $\\mathcal{B}$ be a basis for\n$\\mathcal{T}$ ([[def-topology-basis-subbasis]]) and let $A \\subseteq X$. Interior\nand closure are as in [[def-interior-closure-boundary-top]].\n\n- $A$ is **dense** in $X$ if $\\overline{A} = X$.\n- $A$ is **codense** in $X$ if $X \\setminus A$ is dense.\n- $A$ is **nowhere dense** in $X$ if $\\operatorname{int}(\\overline{A}) = \\varnothing$.\n\n**Three equivalent forms of density, and the one used in practice.** The\nfollowing are equivalent:\n\n1. $\\overline{A} = X$;\n2. $U \\cap A \\ne \\varnothing$ for every nonempty open $U \\subseteq X$;\n3. $B \\cap A \\ne \\varnothing$ for every nonempty $B \\in \\mathcal{B}$.\n\n*Proof.* (1) $\\Rightarrow$ (2): if $U$ is open and nonempty, pick $x \\in U$; then\n$x \\in \\overline{A}$, so $U \\cap A \\ne \\varnothing$ by clause (c) of\n[[thm-closure-characterisation-top]]. (2) $\\Rightarrow$ (3): a nonempty member of\n$\\mathcal{B}$ is a nonempty open set. (3) $\\Rightarrow$ (1): let $x \\in X$; every\n$B \\in \\mathcal{B}$ with $x \\in B$ is nonempty and so meets $A$, hence\n$x \\in \\overline{A}$ by clause (d) of [[thm-closure-characterisation-top]]. Form\n3 is what makes density checkable: for the Sorgenfrey line it is a statement\nabout half-open intervals, and for a metric space a statement about balls.\n\n**Codensity is emptiness of the interior.** $A$ is codense if and only if\n$\\operatorname{int}(A) = \\varnothing$, because\n$X \\setminus \\operatorname{int}(A) = \\overline{X \\setminus A}$\n([[def-interior-closure-boundary-top]]), so $\\overline{X \\setminus A} = X$ holds\nexactly when $\\operatorname{int}(A) = \\varnothing$.\n\n**Nowhere dense implies codense, and the converse fails.** If\n$\\operatorname{int}(\\overline{A}) = \\varnothing$ then\n$\\operatorname{int}(A) \\subseteq \\operatorname{int}(\\overline{A}) = \\varnothing$\nby monotonicity of the interior, so $A$ is codense. The two notions can differ\nonly on sets whose closure is larger than themselves, and there they sometimes\ndo: a dense set with empty interior, such as the rationals inside the real line,\nis codense and is not nowhere dense, its closure being everything. They may also\nagree on such a set: $(0,1)$ inside $\\mathbb{R}$ has closure $[0,1]$ and is\nneither codense nor nowhere dense. A *closed* set is nowhere dense\nprecisely when it is codense, since then $\\overline{A} = A$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "F2",
      "source": "thm-rationals-countable",
      "source_section": "Statement",
      "quote": "$\\mathbb{Q} \\approx \\mathbb{N}$ ([[def-equinumerous]]): the rationals are\ncountably infinite ([[def-countable]]).\n\n**No choice principle is used.** The one place where a reader expects a choice,\n\"pick a representative $a/b$ of each rational\", is exactly where\n[[lem-rat-positive-denominator]] applies: every rational *has* a representative\nwith positive denominator, so the map $(a,b) \\mapsto [(a,b)]$ defined on\n$\\mathbb{Z} \\times \\mathbb{Z}_{>0}$ is already **surjective** onto $\\mathbb{Q}$,\nand countability follows from a surjection without ever selecting a\nrepresentative. The same device handles $\\mathbb{Z}$, which is a surjective image\nof $\\mathbb{N} \\times \\mathbb{N}$ by construction ([[def-integers]]).",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "F2",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "The map $q \\mapsto \\hat q$ ([[def-real-numbers]]) is an embedding of ordered\nfields. Every real is approximated by rationals: for $x \\in \\mathbb{R}$ and\nrational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with\n$|x - \\hat q| < \\hat\\varepsilon$. Consequently, strictly between any two\nreals lies a rational.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-product-of-countable",
      "source_section": "Statement",
      "quote": "If $A$ and $B$ are at most countable ([[def-countable]]) then so is\n$A \\times B$.\n\n**No choice principle is used**: the two enumerations are given, and the\nenumeration of the product is written down from them.",
      "uses": [
        "1.1",
        "1.2"
      ]
    },
    {
      "fact": "L1",
      "source": "thm-r-uncountable",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).\nThen $\\mathbb{R}$ is **uncountable** ([[def-countable]]): there is no surjection\n$\\mathbb{N} \\to \\mathbb{R}$, so $\\mathbb{R}$ is neither finite nor countably\ninfinite.\n\nThe proof is Cantor's original argument of 1874, not the decimal diagonal.\nAssuming a surjection $f : \\mathbb{N} \\to \\mathbb{R}$, one builds nested closed\nintervals $[a_n, b_n]$ with $a_n < b_n$ and $f(n) \\notin [a_{n+1}, b_{n+1}]$, and\nthen $\\sup\\{a_n\\}$ is a real number that $f$ misses. **The decimal diagonal is\ndeliberately avoided**: decimal expansions are infinite series, which this\nlibrary has not yet constructed, so a diagonal proof here would rest on machinery\nthat does not exist. The diagonal argument survives in its non-circular form, on\npower sets, as Cantor's theorem earlier on this page; see the remarks below.\n\n**The construction uses no choice, and that is what the thirds are for.** Given\n$[a_n, b_n]$ of length $d$, its three closed thirds\n$[a_n, a_n + d/3]$, $[a_n + d/3, a_n + 2d/3]$, $[a_n + 2d/3, b_n]$ cannot all\ncontain $f(n)$, because the first and the third are disjoint; the rule takes the\n**first one in that fixed order** which does not contain $f(n)$. That is a\ndefinition by cases, so the whole construction is a single application of the\nrecursion theorem ([[thm-recursion]]) to one explicitly given function. A version\nof the argument that says \"pick a third avoiding $f(n)$\" would be using dependent\nchoice, silently and unnecessarily.",
      "uses": [
        "1.1",
        "1.2"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "Every nonempty $[a,b)\\times[c,d)$ contains a point of $\\mathbb Q\\times\\mathbb Q$: choose rationals $p\\in[a,b)$ and $q\\in[c,d)$. Hence $\\mathbb Q\\times\\mathbb Q$ is dense, and it is at most countable by [L1]. [F1, F2, L1]",
      "step": "1.1",
      "inputs": [
        "F1",
        "F2",
        "L1"
      ]
    },
    {
      "id": "step-1.2",
      "claim": "The map $x\\mapsto(x,-x)$ is a bijection from $\\mathbb R$ onto $D$, so $D$ has cardinality $|\\mathbb R|$ and is uncountable. [L1]",
      "step": "1.2",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "step-1.3",
      "claim": "For $(x,-x)\\in D$, the rectangle $[x,x+1)\\times[-x,-x+1)$ meets $D$ only at $(x,-x)$, so $D$ is discrete in its subspace topology. [F1]",
      "step": "1.3",
      "inputs": [
        "x",
        "x+1)\\times[-x",
        "-x+1)$ meets $D$ only at $(x",
        "-x)$",
        "so $D$ is discrete in its subspace topology. [F1",
        "F1"
      ]
    },
    {
      "id": "step-1.4",
      "claim": "If $(u,v)\\notin D$ and $u+v>0$, every sufficiently small lower-limit rectangle at $(u,v)$ has positive coordinate sum; if $u+v<0$, choose its two right endpoints so that their total increment is less than $-(u+v)$. In either case the rectangle misses $D$, so the complement of $D$ is open. [F1]",
      "step": "1.4",
      "inputs": [
        "F1"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Therefore $D$ is closed discrete, with the stated cardinality, and the plane has the stated countable dense subset. [step 1.1, step 1.2, step 1.3, step 1.4] ∎",
      "step": "2.1",
      "inputs": [
        "step 1.1",
        "step 1.2",
        "step 1.3",
        "step 1.4",
        "1.1",
        "1.2",
        "1.3",
        "1.4"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: empty-set or empty-family case was inspected and introduces no illicit witness"
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "statement and step 1.4: zero or base-value case was inspected under the displayed definitions"
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "statement and step 1.1: unit, singleton, or one-term case was inspected"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The statement has no distinguished degenerate or equality case parameter or case."
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "statement and step 1.4: endpoint and codomain-boundary behavior was inspected"
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "statement and step 1.1: nonempty-choice obligations were checked against the stated hypothesis or explicit construction"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not an equivalence and has no forward iff direction."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not an equivalence and has no reverse iff direction."
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "lem-lower-limit-plane-antidiagonal",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-lower-limit-topology",
    "declared_target": "def-lower-limit-topology",
    "target_statement_provenance": "literature-derived",
    "targetPage": "hereditary-and-productive-separation",
    "targetBatch": "wave7-topology-separation-urysohn",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-lower-limit-plane-antidiagonal",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-product-topology",
    "declared_target": "def-product-topology",
    "target_statement_provenance": "ai-altered",
    "targetPage": "subspaces-products-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-lower-limit-plane-antidiagonal",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-dense-top",
    "declared_target": "def-dense-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-lower-limit-plane-antidiagonal",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "def-subspace-topology-top",
    "declared_target": "def-subspace-topology-top",
    "target_statement_provenance": "ai-altered",
    "targetPage": "topological-spaces-and-continuity",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-lower-limit-plane-antidiagonal",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-rationals-countable",
    "declared_target": "thm-rationals-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-lower-limit-plane-antidiagonal",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "lem-rat-embeds-dense",
    "declared_target": "lem-rat-embeds-dense",
    "target_statement_provenance": "ai-altered",
    "targetPage": "construction-of-r-via-cauchy-sequences",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-lower-limit-plane-antidiagonal",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-product-of-countable",
    "declared_target": "thm-product-of-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-lower-limit-plane-antidiagonal",
    "sourcePage": "hereditary-and-productive-separation",
    "batch": "wave7-topology-separation-urysohn",
    "target": "thm-r-uncountable",
    "declared_target": "thm-r-uncountable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Relevant pending generated-risk rows

```json
[]
```

## Full text of every cited or declared item (8)

### `def-dense-top`

````markdown
---
id: def-dense-top
kind: definition
title: "Dense, nowhere dense and codense subsets of a topological space, and the criterion by basic open sets"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-interior-closure-boundary-top, thm-closure-characterisation-top, def-topology-basis-subbasis]
justified_by: []
forward_refs: [def-separable-space]
aliases: [def-nowhere-dense-top, def-codense-top]
landmark: false
short: "dense, nowhere dense, codense"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
    - title: "Nowhere dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nowhere_dense_set"
    - title: "J. Munkres, Topology, 2nd ed., §17"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space, let $\mathcal{B}$ be a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) and let $A \subseteq X$. Interior
and closure are as in [[def-interior-closure-boundary-top]].

- $A$ is **dense** in $X$ if $\overline{A} = X$.
- $A$ is **codense** in $X$ if $X \setminus A$ is dense.
- $A$ is **nowhere dense** in $X$ if $\operatorname{int}(\overline{A}) = \varnothing$.

**Three equivalent forms of density, and the one used in practice.** The
following are equivalent:

1. $\overline{A} = X$;
2. $U \cap A \ne \varnothing$ for every nonempty open $U \subseteq X$;
3. $B \cap A \ne \varnothing$ for every nonempty $B \in \mathcal{B}$.

*Proof.* (1) $\Rightarrow$ (2): if $U$ is open and nonempty, pick $x \in U$; then
$x \in \overline{A}$, so $U \cap A \ne \varnothing$ by clause (c) of
[[thm-closure-characterisation-top]]. (2) $\Rightarrow$ (3): a nonempty member of
$\mathcal{B}$ is a nonempty open set. (3) $\Rightarrow$ (1): let $x \in X$; every
$B \in \mathcal{B}$ with $x \in B$ is nonempty and so meets $A$, hence
$x \in \overline{A}$ by clause (d) of [[thm-closure-characterisation-top]]. Form
3 is what makes density checkable: for the Sorgenfrey line it is a statement
about half-open intervals, and for a metric space a statement about balls.

**Codensity is emptiness of the interior.** $A$ is codense if and only if
$\operatorname{int}(A) = \varnothing$, because
$X \setminus \operatorname{int}(A) = \overline{X \setminus A}$
([[def-interior-closure-boundary-top]]), so $\overline{X \setminus A} = X$ holds
exactly when $\operatorname{int}(A) = \varnothing$.

**Nowhere dense implies codense, and the converse fails.** If
$\operatorname{int}(\overline{A}) = \varnothing$ then
$\operatorname{int}(A) \subseteq \operatorname{int}(\overline{A}) = \varnothing$
by monotonicity of the interior, so $A$ is codense. The two notions can differ
only on sets whose closure is larger than themselves, and there they sometimes
do: a dense set with empty interior, such as the rationals inside the real line,
is codense and is not nowhere dense, its closure being everything. They may also
agree on such a set: $(0,1)$ inside $\mathbb{R}$ has closure $[0,1]$ and is
neither codense nor nowhere dense. A *closed* set is nowhere dense
precisely when it is codense, since then $\overline{A} = A$.

## Remarks

- **Density is a property of the pair, not of the set.** A subset dense in $X$
  need not be dense in a space with a finer topology. In a nonempty indiscrete
  space every nonempty subset is dense, while $\varnothing$ is not; in the empty
  space $\varnothing$ is dense as well. Where a density claim is made below the
  topology is always named.

- **The empty set.** $\varnothing$ is nowhere dense and codense in every space,
  and it is dense only in $X = \varnothing$. $X$ itself is dense in $X$ and is
  nowhere dense only when $X = \varnothing$.

- **What is deliberately not defined here.** Separability, meaning the existence
  of an at most countable dense subset, is a countability axiom not developed at
  this point in the reading order; it is defined later in
  [[def-separable-space]]. Where a space on the companion page has an at most
  countable dense subset, that is what is said in full.
````

### `def-lower-limit-topology`

````markdown
---
id: def-lower-limit-topology
kind: definition
title: "The lower-limit topology on $\\mathbb{R}$, with the half-open intervals $[a,b)$ as a basis"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-interval, thm-basis-criterion, def-topology-basis-subbasis]
aliases: [def-sorgenfrey-line]
landmark: true
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-31
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "L. A. Steen and J. A. Seebach, Counterexamples in Topology, Sorgenfrey line"
      url: "https://web.math.ucsb.edu/~bigelow/books/counterexamples.pdf"
    - title: "Lower limit topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Lower_limit_topology"
pipeline_run: null
---

## Definition

Let $\mathcal B_\ell=\{[a,b):a,b\in\mathbb R,\ a<b\}$. The **lower-limit topology** $\mathcal T_\ell$ on $\mathbb R$ is the topology having $\mathcal B_\ell$ as a basis. The resulting space is the **lower-limit line**.

This basis is well defined. It covers $\mathbb R$, because $x\in[x,x+1)$ for every $x$. If $x\in[a,b)\cap[c,d)$, then $x\in[\max(a,c),\min(b,d))$, whose right endpoint exceeds $x$ and which lies inside the intersection. Thus the two basis conditions of [[thm-basis-criterion]] hold, so $\mathcal B_\ell$ determines a unique topology.

The lower-limit topology is finer than the usual topology: if $x\in(a,b)$, then $[x,(x+b)/2)$ is a lower-limit basic interval containing $x$ and contained in $(a,b)$. No equality with the usual topology is asserted here. The half-open intervals use the interval convention of [[def-interval]], and opens are exactly unions of basis members by [[def-topology-basis-subbasis]].
````

### `def-product-topology`

````markdown
---
id: def-product-topology
kind: definition
title: "The product set $\\prod_{i \\in I} X_i$ of functions choosing a point in each factor, the projections, the box topology, and the product topology as the initial topology of the projections; the empty product is a one-point space"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-initial-and-final-topology, def-topological-space, def-topology-basis-subbasis,
       thm-basis-criterion, def-choice-function, def-axiom-of-choice, lem-finite-choice,
       def-standard-topologies]
justified_by: []
aliases: [def-product-top, def-box-topology, def-projection-top]
landmark: true
short: "product topology, box topology, projections"
verification:
  precheck: n/a
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Product topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Product_topology"
    - title: "Box topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Box_topology"
    - title: "J. Munkres, Topology, 2nd ed., §19"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

**The product set.** Let $I$ be a set and let $X_i$ be a set for each $i \in I$.
The **product** is

$$\prod_{i \in I} X_i \;:=\; \Big\{\, x : x \text{ is a function with domain } I \text{ and } x(i) \in X_i \text{ for every } i \in I \,\Big\},$$

and we write $x_i := x(i)$, the $i$-th **coordinate** of $x$. Two elements of the
product are equal exactly when they agree at every index, functions being equal
when they have the same domain and the same values. For $j \in I$ the $j$-th
**projection** is

$$\pi_j : \prod_{i \in I} X_i \to X_j, \qquad \pi_j(x) := x_j .$$

**Notation for a finite product.** For $I = n$ a natural number, which is the set
$\{0, 1, \dots, n-1\}$ of its predecessors, an element of $\prod_{k<n} X_k$ is a
function on $n$ and we write it $(x_0, \dots, x_{n-1})$. In particular $I = 2$
gives the **binary product**, written $X \times Y$ for $\prod_{i<2} X_i$ with
$X_0 = X$ and $X_1 = Y$, whose elements are written $(u,v)$ for the function
$0 \mapsto u$, $1 \mapsto v$. This is the only meaning the symbol $X \times Y$
carries on this page.

**Two facts about when the product is nonempty, stated because they are used and
because they cost something.** If some $X_{i_0}$ is empty then the product is
empty, since no function can take a value in $X_{i_0}$. Conversely, suppose every
$X_i$ is nonempty.

- For $I = n$ a natural number, the product is nonempty, and this is a theorem of
  ZF: [[lem-finite-choice]] applied to the function $i \mapsto X_i$ on $n$
  supplies a choice function $g$ for the family of values, and
  $x(i) := g(X_i)$ defines a member of $\prod_{k<n} X_k$.
- For an arbitrary $I$ the assertion "$\prod_{i \in I} X_i \ne \varnothing$
  whenever every $X_i$ is nonempty" **is** the Axiom of Choice: it is the
  formulation recorded in [[def-axiom-of-choice]], and the choice function of
  [[def-choice-function]] is exactly a point of the product of a family by
  itself. Every use of it below is flagged at the step that spends it.

**The box topology.** Now let each $X_i$ carry a topology $\mathcal{T}_i$
([[def-topological-space]]). Put

$$\mathcal{R} \;:=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i \in I \,\Big\},$$

the family of **boxes**. $\mathcal{R}$ is a basis for a topology
([[thm-basis-criterion]]): it contains $\prod_i X_i$, so it covers the product,
and it is closed under binary intersections, since

$$\Big(\prod_i U_i\Big) \cap \Big(\prod_i V_i\Big) = \prod_i (U_i \cap V_i)$$

and each $U_i \cap V_i$ is open by (T3). The topology it generates is the **box
topology** $\mathcal{T}^{\square}$, and $\mathcal{R}$ is a basis for it
([[def-topology-basis-subbasis]]).

**The product topology.** The **product topology** $\mathcal{T}^{\Pi}$ on
$\prod_i X_i$ is the initial topology of the family of projections
$(\pi_i)_{i \in I}$ ([[def-initial-and-final-topology]]): the topology generated
by the subbasis

$$\mathcal{G} \;:=\; \{\, \pi_i^{-1}[U] : i \in I,\ U \in \mathcal{T}_i \,\}, \qquad \pi_i^{-1}[U] = \prod_{j \in I} W_j \ \text{ with } W_i = U \text{ and } W_j = X_j \text{ for } j \ne i .$$

By [[thm-basis-criterion]] the finite intersections of members of $\mathcal{G}$
form a basis for $\mathcal{T}^{\Pi}$, and those finite intersections are exactly
the boxes with all but finitely many factors unrestricted:

$$\mathcal{R}^{\Pi} \;=\; \Big\{\, \prod_{i \in I} U_i \;:\; U_i \in \mathcal{T}_i \text{ for every } i, \text{ and } U_i = X_i \text{ for all but finitely many } i \,\Big\}.$$

Indeed the intersection of $\pi_{i_1}^{-1}[U_1], \dots, \pi_{i_n}^{-1}[U_n]$ is
the box whose factor at $i$ is the intersection of those $U_m$ with $i_m = i$ and
is $X_i$ when no $i_m$ equals $i$; and the intersection of no members is the
whole product, the box with every factor $X_i$. Conversely a box with
$U_i = X_i$ off a finite set is such an intersection. Members of
$\mathcal{R}^{\Pi}$ are called **basic product-open** sets, and members of
$\mathcal{R}$ **boxes**. So $\mathcal{R}^{\Pi} \subseteq \mathcal{R}$, with
equality when $I$ is a natural number.

**The empty product.** For $I = \varnothing$ there is exactly one function with
domain $\varnothing$, the empty function, so $\prod_{i \in \varnothing} X_i$ is a
one-point set. A one-point set carries exactly one topology, namely
$\{\varnothing, \{\varnothing\}\}$, since a topology must contain the empty set
and the whole set and there is nothing else to contain
([[def-topological-space]]); so the box topology and the product topology agree
there, and both equal the discrete topology and the indiscrete topology
([[def-standard-topologies]]), which coincide on a one-point set. There are no
projections to speak of, and the initial topology of the empty family is indeed
the indiscrete one ([[def-initial-and-final-topology]]).

**Convention.** Unless the box topology is named explicitly, $\prod_i X_i$ always
carries the product topology in this library. That is not a matter of taste: the
product topology is the one with the characteristic property of the next item,
and the box topology has no such property.

## Remarks

- **Where the two topologies actually differ.** The box topology is finer than
  the product topology by construction, since $\mathcal{R}^{\Pi} \subseteq
  \mathcal{R}$. They agree whenever $I$ is finite; and, assuming the Axiom of Choice, for a
  family of **nonempty** spaces they differ for infinite $I$ as soon as infinitely
  many factors have a nonempty proper open subset. Nonemptiness is not decoration: if one factor is
  empty then the product is empty and carries exactly one topology, so the two
  agree however the other factors are chosen. Both statements are proved two items
  below, with that hypothesis, and the failure is recorded on this page as a false
  statement.

- **The product set is a set of functions, and that is not a technicality.** The
  factors are indexed by an arbitrary set, so there is no "list" to write down;
  writing $x = (x_i)_{i \in I}$ is notation for the function $x$. The finite case
  recovers the familiar tuple, and the identification of $\prod_{k<n}\mathbb{R}$
  with the $\mathbb{R}^n$ of [[lem-metrics-on-rn]] is literal, that item defining
  $\mathbb{R}^n$ as the set of functions $n \to \mathbb{R}$.

- **The projections carry no hypothesis.** They are defined for every product,
  including the empty one and products with an empty factor; what does need a
  hypothesis is their *surjectivity*, which is the point at which choice enters
  and which is stated separately in the next item.
````

### `def-subspace-topology-top`

````markdown
---
id: def-subspace-topology-top
kind: definition
title: "Subspace topology: the traces of the open sets, its closed sets and its bases, the continuity of the inclusion, and the characteristic property of a map into a subspace"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-topological-space, def-topology-basis-subbasis, def-continuous-map-top, thm-continuity-characterisations-top]
justified_by: []
aliases: [def-subspace-top, def-relative-topology]
landmark: true
short: "subspace topology"
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
    - title: "Subspace topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Subspace_topology"
    - title: "J. Munkres, Topology, 2nd ed., §16"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
pipeline_run: null
---

## Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$S \subseteq X$. The **subspace topology** (also *relative topology*) on $S$ is

$$\mathcal{T}_S := \{\, U \cap S : U \in \mathcal{T} \,\},$$

the family of **traces** on $S$ of the open sets of $X$. The pair
$(S, \mathcal{T}_S)$ is a **subspace** of $X$. A subset of $S$ that lies in
$\mathcal{T}_S$ is said to be **open in $S$**, and *relatively open* where the
ambient space needs emphasis.

**$\mathcal{T}_S$ is a topology, and this is discharged here.** (T1):
$\varnothing = \varnothing \cap S$ and $S = X \cap S$ are traces. (T2): if
$\mathcal{S}' \subseteq \mathcal{T}_S$, choose for each member a set of
$\mathcal{T}$ tracing to it — no choice principle is needed, since
$U' := \bigcup \{\, U \in \mathcal{T} : U \cap S \subseteq W \,\}$ is a canonical
such set for $W \in \mathcal{T}_S$, being open by (T2) in $X$ and satisfying
$U' \cap S = W$ — and then
$\bigcup_i (U_i \cap S) = (\bigcup_i U_i) \cap S \in \mathcal{T}_S$ by (T2) in
$X$. (T3): $(U \cap S) \cap (V \cap S) = (U \cap V) \cap S \in \mathcal{T}_S$ by
(T3) in $X$.

**Closed sets of a subspace are the traces of the closed sets.** A set
$C \subseteq S$ is closed in $S$ if and only if $C = F \cap S$ for some closed
$F \subseteq X$. Indeed $S \setminus (U \cap S) = (X \setminus U) \cap S$ and
$S \setminus (F \cap S) = (X \setminus F) \cap S$, so complementation inside $S$
matches complementation inside $X$ under tracing.

**Bases and subbases trace as well.** If $\mathcal{B}$ is a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) then
$\mathcal{B}_S := \{\, B \cap S : B \in \mathcal{B} \,\}$ is a basis for
$\mathcal{T}_S$: its members are open in $S$, and for $W = U \cap S$ open in $S$
and $x \in W$ there is $B \in \mathcal{B}$ with $x \in B \subseteq U$, whence
$x \in B \cap S \subseteq W$. The same computation with a subbasis $\mathcal{S}$
shows that $\{\, S_0 \cap S : S_0 \in \mathcal{S} \,\}$ is a subbasis for
$\mathcal{T}_S$, since tracing commutes with finite intersections and with
unions.

**The inclusion is continuous.** The inclusion map $\iota : S \to X$,
$\iota(s) = s$, satisfies $\iota^{-1}[U] = U \cap S$ for every $U \subseteq X$,
so preimages of open sets are open and $\iota$ is continuous
([[thm-continuity-characterisations-top]], clause (b)). Moreover
$\mathcal{T}_S$ is the **coarsest** topology on $S$ making $\iota$ continuous: any
topology on $S$ for which $\iota$ is continuous must contain every
$\iota^{-1}[U] = U \cap S$, hence contain $\mathcal{T}_S$.

**Characteristic property of a map into a subspace.** Let $(Z, \mathcal{T}_Z)$ be
a topological space and let $g : Z \to S$ be a function. Then

$$g \text{ is continuous as a map } Z \to (S,\mathcal{T}_S) \iff \iota \circ g \text{ is continuous as a map } Z \to (X,\mathcal{T}) .$$

*Proof.* For $U \in \mathcal{T}$ one has
$(\iota \circ g)^{-1}[U] = g^{-1}[\iota^{-1}[U]] = g^{-1}[U \cap S]$. If $g$ is
continuous then each $g^{-1}[U \cap S]$ is open, so $\iota \circ g$ is continuous;
conversely if $\iota \circ g$ is continuous then for any $W = U \cap S$ open in
$S$ the set $g^{-1}[W] = (\iota \circ g)^{-1}[U]$ is open, so $g$ is continuous.
Both directions use only clause (b) of [[thm-continuity-characterisations-top]].

**Restriction of a continuous map.** If $f : X \to Y$ is continuous and
$S \subseteq X$, then $f|_S : S \to Y$ is continuous, since
$(f|_S)^{-1}[V] = f^{-1}[V] \cap S$ is open in $S$ for every open $V \subseteq Y$
([[def-continuous-map-top]], [[thm-continuity-characterisations-top]]).

**When relative and ambient agree.** If $S$ is open in $X$ then a subset of $S$
is open in $S$ if and only if it is open in $X$: a trace $U \cap S$ is then an
intersection of two open sets of $X$, and conversely an open subset of $X$
contained in $S$ is its own trace. The same statement with "closed" throughout
holds when $S$ is closed in $X$. Both are used in the pasting lemma of the next
item, and both fail without the hypothesis: $S$ itself is always open and closed
in $S$, and need be neither in $X$.

## Remarks

- **The subspace topology is what makes a subset a space.** Before it, a statement
  such as "the restriction of $f$ to $C$ is continuous" has no meaning, because
  $C$ carries no topology. Every restriction below is taken with respect to the
  subspace topology and with no other convention available.

- **Openness and closedness are not absolute.** $[0,1)$ is open in $[0,2)$ and is
  neither open nor closed in $\mathbb{R}$; the interval $(0,1)$ is closed in
  itself. A sentence of the form "$A$ is open" is incomplete unless the space is
  named, and this library names it whenever more than one is in play.

- **Transitivity.** If $S \subseteq T \subseteq X$ then the subspace topology $S$
  inherits from $(T, \mathcal{T}_T)$ is the subspace topology it inherits from
  $X$, since $(U \cap T) \cap S = U \cap S$ for $U \in \mathcal{T}$. So no
  ambiguity arises from the route by which a subset is reached.
````

### `lem-rat-embeds-dense`

````markdown
---
id: lem-rat-embeds-dense
kind: lemma
title: "The rationals embed densely in the reals"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-real-numbers, def-real-order, thm-reals-ordered-field, thm-reals-field, def-rational-cauchy-sequence, thm-rat-ordered-field, thm-rat-field]
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
    - title: "T. Tao, Analysis I, 3rd ed., §5.4"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
    - title: "Dense set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Dense_set"
pipeline_run: null
---

## Statement

The map $q \mapsto \hat q$ ([[def-real-numbers]]) is an embedding of ordered
fields. Every real is approximated by rationals: for $x \in \mathbb{R}$ and
rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with
$|x - \hat q| < \hat\varepsilon$. Consequently, strictly between any two
reals lies a rational.

## Facts & Assumptions

**Given:** A real $x = [(a_n)]$ and a rational $\varepsilon > 0$.

[L1] The orders of $\mathbb{Q}$ and $\mathbb{R}$; ordered-field arithmetic ([[thm-rat-ordered-field]], [[thm-reals-ordered-field]]).

[L2] Field arithmetic in $\mathbb{Q}$: $\varepsilon/2, \delta/4$ are positive rationals, and every nonzero rational $q$ has a reciprocal $1/q$ with $q \cdot (1/q) = 1$ ([[thm-rat-field]]).

[L3] Cauchy definition ([[def-rational-cauchy-sequence]]).

[L4] Real positivity via eventual rational lower bounds ([[def-real-order]]).

[L5] $\mathbb{R} = \mathcal{C}/\mathcal{N}$ is a field ([[thm-reals-field]]), and $0_{\mathbb{R}} = \hat 0$, $1_{\mathbb{R}} = \hat 1$ are the classes of the constant sequences ([[def-real-numbers]]). A multiplicative inverse there is unique: if $ab = 1_{\mathbb{R}} = ac$ then $b = b(ac) = (ba)c = c$.

## Proof

**Proof technique:** direct.

1.1 Embedding: constant sequences are Cauchy; $\hat q = \hat r$ iff the constant $q - r$ is null iff $q = r$; operations match termwise; and $q < r$ gives the constant lower bound $r - q > 0$, so $\hat q < \hat r$ and order is preserved and reflected. [L1, L4]

1.2 Fix $N$ with $|a_m - a_n| < \varepsilon/2$ for all $m, n \ge N$, and set $q = a_N$. [L3, L2]

2.1 The difference $\hat q - x$ has representative $(a_N - a_n)$ with $|a_N - a_n| < \varepsilon/2$ for $n \ge N$; hence both $\hat\varepsilon - (x - \hat q)$ and $\hat\varepsilon - (\hat q - x)$ have representatives eventually $> \varepsilon/2$, so both are positive: $|x - \hat q| < \hat\varepsilon$. [step 1.2, L4, L1]

2.2 Inverses: let $q$ be a nonzero rational. Then $\hat q \ne \hat 0 = 0_{\mathbb{R}}$ by the injectivity of step 1.1, and $1/q$ exists in $\mathbb{Q}$ by [L2]; since the operations match termwise (step 1.1), $\hat q \cdot \widehat{1/q} = \widehat{q \cdot (1/q)} = \hat 1 = 1_{\mathbb{R}}$. Inverses in $\mathbb{R}$ are unique by [L5], so $(\hat q)^{-1} = \widehat{1/q}$: the embedding preserves reciprocals. [step 1.1, L2, L5]

3.1 Density: let $x < y$; pick $\delta > 0$ rational and $N$ with the representative of $y - x$ eventually $> \delta$; set $\varepsilon = \delta/4$ and pick $q$ with $|x - \hat q| < \hat\varepsilon$; then $q' = q + 2\varepsilon$ satisfies $\hat q' - x \ge -\hat\varepsilon + 2\hat\varepsilon = \hat\varepsilon > 0$ and $y - \hat q' \ge \hat\delta - \hat\varepsilon - 2\hat\varepsilon = \hat\delta/4 > 0$, so $x < \hat q' < y$. [step 2.1, L4, L1, L2]

4.1 The rationals embed as an ordered subfield — injectively, preserving the order in both directions, the ring operations, and reciprocals — and they approximate every real arbitrarily well and separate any two reals. [step 1.1, step 2.2, step 3.1] ∎
````

### `thm-product-of-countable`

````markdown
---
id: thm-product-of-countable
kind: theorem
title: "A product of two at most countable sets is at most countable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-n-cross-n-countable, def-countable, lem-countable-iff-surjection-from-n, def-equinumerous, def-injection-surjection-bijection, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
short: "$A\\times B$ countable"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: openai/gpt-5.4
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "T. Tao, Analysis I, 3rd ed., §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

If $A$ and $B$ are at most countable ([[def-countable]]) then so is
$A \times B$.

**No choice principle is used**: the two enumerations are given, and the
enumeration of the product is written down from them.

## Facts & Assumptions

**Given:** At most countable sets $A$ and $B$, and the product $A \times B = \{\, (a,b) : a \in A,\ b \in B \,\}$.

[L1] Finite, countably infinite and at most countable; $\varnothing \approx 0$, so $\varnothing$ is finite ([[def-countable]], [[def-natural-numbers]]).

[L2] A nonempty set is at most countable if and only if some surjection $\mathbb{N} \to$ it exists ([[lem-countable-iff-surjection-from-n]]).

[L3] There is a bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ ([[thm-n-cross-n-countable]], [[def-equinumerous]]).

[L4] A composition of surjections is a surjection ([[def-injection-surjection-bijection]]).

## Proof

**Proof technique:** direct.

1.1 If $A = \varnothing$ or $B = \varnothing$ then $A \times B = \varnothing$, which is finite and hence at most countable. [given, L1]

1.2 Assume instead $A \ne \varnothing$ and $B \ne \varnothing$; then [L2] provides surjections $f : \mathbb{N} \to A$ and $g : \mathbb{N} \to B$. [given, L2]

1.3 Fix the bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ of [L3], in particular a surjection. [L3]

2.1 Define $t : \mathbb{N} \times \mathbb{N} \to A \times B$ by $t(m,n) = (f(m), g(n))$. It is surjective: any $(a,b) \in A \times B$ has $a = f(m)$ and $b = g(n)$ for some $m, n$, so $(a,b) = t(m,n)$. [step 1.2]

3.1 Hence $t \circ \beta : \mathbb{N} \to A \times B$ is a surjection by [L4], and $A \times B$ is nonempty, so it is at most countable by [L2]. [step 1.3, step 2.1, L2, L4]

4.1 Both cases give the conclusion: $A \times B$ is at most countable whenever $A$ and $B$ are. [step 1.1, step 3.1, L1] ∎

## Remarks

- Iterating gives the same conclusion for $A_1 \times A_2 \times \dots \times A_k$ for each fixed $k$: $(A_1 \times A_2) \times A_3$ is a product of two at most countable sets, and so on, so $k - 1$ applications of the theorem settle the case $k$. Stating this uniformly in $k$, as a single theorem quantified over $k$, needs finite sequences of sets and a recursive definition of the $k$-fold product, which this library does not yet have; the iterated form above is the honest statement of what is proved.

- The infinite product is a different matter and is **not** covered: $\{0,1\}^{\mathbb{N}}$ is a product of countably many two-element sets and is uncountable, by the same diagonal argument as [[thm-cantor-powerset]]. Countability is not preserved by infinite products of any kind.

- Together with [[lem-subset-of-countable]] this gives the countability of every set that can be coded by finitely many naturals, which is how [[thm-rationals-countable]] is proved.
````

### `thm-r-uncountable`

````markdown
---
id: thm-r-uncountable
kind: theorem
title: "$\\mathbb{R}$ is uncountable (Cantor's nested intervals, 1874)"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable, def-complete-ordered-field, thm-recursion, lem-sup-epsilon, lem-sup-unique, def-bounded-set, lem-countable-iff-surjection-from-n, lem-of-add-order, def-ordered-field, cor-of-one-positive, lem-of-inverse-positive, lem-of-sign-rules, thm-induction-principle, def-natural-numbers, def-nat-order, lem-nat-trichotomy, lem-nat-order-is-membership]
justified_by: []
aliases: [thm-reals-uncountable]
landmark: true
short: "no surjection $\\mathbb N\\to\\mathbb R$"
proof_strategy: contradiction
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis I"
      url: "https://www.jirka.org/ra/realanal.pdf"
    - title: "Cantor's first set theory article (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cantor%27s_first_set_theory_article"
    - title: "Nested intervals (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Nested_intervals"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
pipeline_run: null
---

## Statement

Let $\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).
Then $\mathbb{R}$ is **uncountable** ([[def-countable]]): there is no surjection
$\mathbb{N} \to \mathbb{R}$, so $\mathbb{R}$ is neither finite nor countably
infinite.

The proof is Cantor's original argument of 1874, not the decimal diagonal.
Assuming a surjection $f : \mathbb{N} \to \mathbb{R}$, one builds nested closed
intervals $[a_n, b_n]$ with $a_n < b_n$ and $f(n) \notin [a_{n+1}, b_{n+1}]$, and
then $\sup\{a_n\}$ is a real number that $f$ misses. **The decimal diagonal is
deliberately avoided**: decimal expansions are infinite series, which this
library has not yet constructed, so a diagonal proof here would rest on machinery
that does not exist. The diagonal argument survives in its non-circular form, on
power sets, as Cantor's theorem earlier on this page; see the remarks below.

**The construction uses no choice, and that is what the thirds are for.** Given
$[a_n, b_n]$ of length $d$, its three closed thirds
$[a_n, a_n + d/3]$, $[a_n + d/3, a_n + 2d/3]$, $[a_n + 2d/3, b_n]$ cannot all
contain $f(n)$, because the first and the third are disjoint; the rule takes the
**first one in that fixed order** which does not contain $f(n)$. That is a
definition by cases, so the whole construction is a single application of the
recursion theorem ([[thm-recursion]]) to one explicitly given function. A version
of the argument that says "pick a third avoiding $f(n)$" would be using dependent
choice, silently and unnecessarily.

## Facts & Assumptions

**Given:** A complete ordered field $\mathbb{R}$, with $0 \ne 1$ and the order of [[def-ordered-field]]. For $a \le b$ write $[a,b] = \{\, x \in \mathbb{R} : a \le x \le b \,\}$, and write $I = \{\, (a,b) \in \mathbb{R} \times \mathbb{R} : a < b \,\}$ for the set of pairs coding nondegenerate closed intervals.

[L1] Least-upper-bound property: every nonempty $S \subseteq \mathbb{R}$ that is bounded above has a least upper bound $\sup S$, an upper bound below every upper bound ([[def-complete-ordered-field]], [[def-bounded-set]]).

[L2] The least upper bound is unique when it exists ([[lem-sup-unique]]).

[L3] Epsilon characterisation: for a nonempty $S$ bounded above and an upper bound $u$ of $S$, $u = \sup S$ if and only if for every $\varepsilon > 0$ there is $s \in S$ with $u - \varepsilon < s$ ([[lem-sup-epsilon]]).

[L4] Order and arithmetic in an ordered field: $0 < 1$ ([[cor-of-one-positive]]); $a < b$ implies $a + c < b + c$, and $a < b$ with $c < d$ implies $a + c < b + d$ ([[lem-of-add-order]]); $a > 0$ implies $a^{-1} > 0$ ([[lem-of-inverse-positive]]); a product of positives is positive ([[lem-of-sign-rules]]); the order is transitive and satisfies trichotomy ([[def-ordered-field]]).

[L5] Recursion: for any set $X$, $x_0 \in X$ and $F : X \to X$ there is $h : \mathbb{N} \to X$ with $h(0) = x_0$ and $h(\sigma(n)) = F(h(n))$ ([[thm-recursion]]).

[L6] Induction ([[thm-induction-principle]]); any two naturals are comparable ([[lem-nat-trichotomy]]); the order of $\mathbb{N}$ is the additive one, $m \le n$ meaning $m + k = n$ for some $k$ ([[def-nat-order]], [[def-natural-numbers]]), and it satisfies $n < \sigma(n)$ and $m < \sigma(n) \iff m \le n$ ([[lem-nat-order-is-membership]]), so $m \le \sigma(n)$ holds exactly when $m \le n$ or $m = \sigma(n)$.

[L7] A nonempty set is at most countable if and only if some surjection from $\mathbb{N}$ onto it exists; uncountable means not at most countable ([[lem-countable-iff-surjection-from-n]], [[def-countable]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose, for contradiction, that $\mathbb{R}$ is at most countable. Since $0 \in \mathbb{R}$, it is nonempty, so [L7] provides a surjection $f : \mathbb{N} \to \mathbb{R}$. [assume-contra, given, L7]

1.2 Put $3 := 1 + 1 + 1$. Adding the inequality $0 < 1$ to itself twice gives $3 > 0$ by [L4], so $3 \ne 0$ and $3^{-1} > 0$; hence for $d > 0$ the element $d/3 := d \cdot 3^{-1}$ is positive, and $d/3 + d/3 + d/3 = d \cdot 3^{-1} \cdot 3 = d$. [L4, algebra]

2.1 Fix the trisection rule. Let $(a,b) \in I$ and $y \in \mathbb{R}$. Put $d = b - a > 0$, $p = a + d/3$ and $q = p + d/3$; then $a < p < q < b$ by step 1.2 and [L4], since $p - a = q - p = b - q = d/3 > 0$. The three pairs $(a,p)$, $(p,q)$, $(q,b)$ all lie in $I$ and their intervals are contained in $[a,b]$. Moreover $[a,p]$ and $[q,b]$ are disjoint, because $x \le p < q \le x$ is impossible; so $y$ fails to lie in at least one of the three. Define $T(a,b,y)$ to be the **first** of $(a,p)$, $(p,q)$, $(q,b)$, in that fixed order, whose interval does not contain $y$. This is a definition by cases on the three conditions $y \in [a,p]$, $y \in [p,q]$, $y \in [q,b]$, so $T : I \times \mathbb{R} \to I$ is a function and no choice is made. [step 1.2, L4, construct]

3.1 Apply [L5] with $X = \mathbb{N} \times I$, $x_0 = (0, (0,1))$, which lies in $X$ because $0 < 1$ by [L4], and $F(n, (a,b)) = (\sigma(n), T(a, b, f(n)))$: this yields $h : \mathbb{N} \to \mathbb{N} \times I$ with $h(0) = x_0$ and $h(\sigma(n)) = F(h(n))$. An induction using [L6] shows the first coordinate of $h(n)$ is $n$, so we may write $h(n) = (n, (a_n, b_n))$ with $a_n < b_n$, $a_0 = 0$, $b_0 = 1$ and $(a_{\sigma(n)}, b_{\sigma(n)}) = T(a_n, b_n, f(n))$ for every $n$. By step 2.1 this gives $a_n \le a_{\sigma(n)}$, $b_{\sigma(n)} \le b_n$ and $f(n) \notin [a_{\sigma(n)}, b_{\sigma(n)}]$. [step 1.1, step 2.1, L4, L5, L6, construct]

4.1 For $m \le n$ one has $a_m \le a_n$ and $b_n \le b_m$, by induction on $n$ using step 3.1 and transitivity; consequently $a_m \le b_n$ for all $m, n$: if $m \le n$ then $a_m \le a_n < b_n$, and if $n \le m$ then $a_m < b_m \le b_n$, and any two naturals are comparable by [L6]. [step 3.1, L4, L6]

5.1 The set $S = \{\, a_n : n \in \mathbb{N} \,\}$ is nonempty and bounded above by $b_0$ by step 4.1, so [L1] gives its least upper bound $x = \sup S$, unique by [L2]. [step 3.1, step 4.1, L1, L2]

6.1 For every $n$: $a_n \le x$, because $x$ is an upper bound of $S$; and $x \le b_n$, because otherwise $\varepsilon := x - b_n > 0$ and [L3] would produce $a_m \in S$ with $b_n = x - \varepsilon < a_m$, contradicting $a_m \le b_n$ from step 4.1. Hence $x \in [a_n, b_n]$ for every $n$. [step 4.1, step 5.1, L1, L3, L4]

7.1 Fix $n \in \mathbb{N}$. By step 6.1 applied to $\sigma(n)$, $x \in [a_{\sigma(n)}, b_{\sigma(n)}]$, whereas $f(n) \notin [a_{\sigma(n)}, b_{\sigma(n)}]$ by step 3.1, so $x \ne f(n)$. As $n$ was arbitrary, the real number $x$ is not a value of $f$, contradicting the surjectivity of $f$ obtained in step 1.1. Therefore no surjection $\mathbb{N} \to \mathbb{R}$ exists and, $\mathbb{R}$ being nonempty, [L7] makes $\mathbb{R}$ uncountable. [step 1.1, step 3.1, step 6.1, L7, discharge-contradiction] ∎

## Remarks

- **What the proof actually uses.** Completeness enters once, at step 5.1, to produce $\sup\{a_n\}$; everything else is ordered-field arithmetic and the recursion theorem. The argument therefore applies verbatim to any ordered field with the least-upper-bound property, and it fails for $\mathbb{Q}$ exactly because the supremum of the left endpoints need not exist there, which is as it should be, since $\mathbb{Q}$ is countable ([[thm-rationals-countable]]).

- **Why thirds and not halves.** Two closed halves share the midpoint, so if $f(n)$ happens to be that midpoint then *both* halves contain it and the rule "take the first closed half not containing $f(n)$" has nothing to return. Three closed thirds fix this: the first and the third are disjoint, so at least one of the three always misses $f(n)$, and listing them in a fixed order makes the selection a definition by cases rather than a choice. Open intervals would avoid the overlap too, but closed intervals are what make step 6.1 work, since the point $\sup\{a_n\}$ must be allowed to be an endpoint.

- **The diagonal argument is not lost, only relocated.** [[thm-cantor-powerset]], proved earlier on this page, is Cantor's diagonal argument in a setting where it needs nothing but the Power Set and Separation axioms. What is unavailable here is only the *decimal* diagonal, and only because decimal expansions are infinite series.

- **The choice-freeness matters beyond tidiness.** It is what lets [[fs-countable-union-theorem-of-zf]] draw a conclusion about ZF: since this theorem is proved in ZF alone, any model of ZF in which $\mathbb{R}$ is a countable union of countable sets is a model in which the countable-union theorem fails.

- **The argument gives more than the statement does.** Nothing above depends on the starting interval being $(0,1)$, so re-seeding the recursion inside a given interval shows that every nondegenerate interval, open or closed, is uncountable. That extension is [[cor-interval-uncountable]], next on this page, where it is proved rather than asserted.
````

### `thm-rationals-countable`

````markdown
---
id: thm-rationals-countable
kind: theorem
title: "$\\mathbb{Q}$ is countably infinite"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-n-cross-n-countable, thm-product-of-countable, def-rationals, lem-rat-positive-denominator, def-countable, lem-subset-of-countable, def-integers, lem-countable-iff-surjection-from-n, thm-schroder-bernstein, def-equinumerous, def-injection-surjection-bijection, lem-nat-embeds-int, lem-int-embeds-rat, def-int-order, thm-int-ordered-ring, thm-omega-is-peano-system, lem-nat-order-is-membership]
justified_by: []
aliases: []
landmark: true
short: "$\\mathbb{Q}\\approx\\mathbb{N}$"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-07-26
    scope: page
    delegated_by: owner
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-25
sources:
  scraped: []
  references:
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Countable set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Countable_set"
    - title: "Rational number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Rational_number"
    - title: "T. Tao, Analysis I, 3rd ed., §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

$\mathbb{Q} \approx \mathbb{N}$ ([[def-equinumerous]]): the rationals are
countably infinite ([[def-countable]]).

**No choice principle is used.** The one place where a reader expects a choice,
"pick a representative $a/b$ of each rational", is exactly where
[[lem-rat-positive-denominator]] applies: every rational *has* a representative
with positive denominator, so the map $(a,b) \mapsto [(a,b)]$ defined on
$\mathbb{Z} \times \mathbb{Z}_{>0}$ is already **surjective** onto $\mathbb{Q}$,
and countability follows from a surjection without ever selecting a
representative. The same device handles $\mathbb{Z}$, which is a surjective image
of $\mathbb{N} \times \mathbb{N}$ by construction ([[def-integers]]).

## Facts & Assumptions

**Given:** $\mathbb{Z} = (\mathbb{N} \times \mathbb{N})/\sim$ with quotient map $(a,b) \mapsto [(a,b)]$ ([[def-integers]]), and $\mathbb{Q}$ the set of classes $[(a,b)]$ of pairs of integers with $b \ne 0$ ([[def-rationals]]). Write $\mathbb{Z}_{>0} = \{\, b \in \mathbb{Z} : b > 0 \,\}$ ([[def-int-order]]).

[L1] Finite, countably infinite, at most countable, uncountable ([[def-countable]]).

[L2] Bijections, injections, surjections, composition; $\approx$ and $\preceq$ ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L3] A nonempty $X$ is at most countable iff there is a surjection $\mathbb{N} \to X$; and from such a surjection $s$ the map $x \mapsto \min\{\, k : s(k) = x \,\}$ is an injection $X \to \mathbb{N}$ ([[lem-countable-iff-surjection-from-n]]).

[L4] There is a bijection $\beta : \mathbb{N} \to \mathbb{N} \times \mathbb{N}$ ([[thm-n-cross-n-countable]]).

[L5] A product of two at most countable sets is at most countable ([[thm-product-of-countable]]); a subset of an at most countable set is at most countable ([[lem-subset-of-countable]]).

[L6] Every rational is $[(a,b)]$ for some integers $a$ and $b$ with $b > 0$ ([[lem-rat-positive-denominator]]).

[L7] $\mathbb{N}$ embeds injectively in $\mathbb{Z}$ by $n \mapsto [(n,0)]$ ([[lem-nat-embeds-int]]) and $\mathbb{Z}$ embeds injectively in $\mathbb{Q}$ by $k \mapsto [(k,1)]$ ([[lem-int-embeds-rat]]).

[L8] $\preceq$ in both directions gives $\approx$ ([[thm-schroder-bernstein]]).

[L9] The relation of [[def-int-order]] is a total order on $\mathbb{Z}$ compatible with the ring structure ([[thm-int-ordered-ring]]), and $\mathbb{Z}_{>0} \ne \varnothing$: on representatives $0 < [(a,b)]$ holds exactly when $b < a$ in $\mathbb{N}$ ([[def-int-order]]), and $0 < 1$ in $\mathbb{N}$, since $1 = \sigma(0) \ne 0$ ([[thm-omega-is-peano-system]]) while $0 < n$ for every nonzero natural $n$ (claim 4 of [[lem-nat-order-is-membership]]); so the integer $[(1,0)]$ is positive.

## Proof

**Proof technique:** direct.

1.1 The quotient map $\pi : \mathbb{N} \times \mathbb{N} \to \mathbb{Z}$, $\pi(a,b) = [(a,b)]$, is surjective, since every integer is by definition such a class; hence $\pi \circ \beta : \mathbb{N} \to \mathbb{Z}$ is a surjection, and $\mathbb{Z} \ne \varnothing$, so $\mathbb{Z}$ is at most countable by [L3]. [given, L2, L3, L4]

1.2 The composite $\iota : \mathbb{N} \to \mathbb{Q}$, $n \mapsto [([(n,0)],1)]$, of the two embeddings of [L7] is injective, so $\mathbb{N} \preceq \mathbb{Q}$. [L2, L7]

2.1 $\mathbb{Z}_{>0}$ is a subset of $\mathbb{Z}$, hence at most countable by [L5], and it is nonempty by [L9]; therefore $\mathbb{Z} \times \mathbb{Z}_{>0}$ is at most countable by [L5] and nonempty, so [L3] provides a surjection $u : \mathbb{N} \to \mathbb{Z} \times \mathbb{Z}_{>0}$. [step 1.1, L3, L5, L9]

3.1 The map $\rho : \mathbb{Z} \times \mathbb{Z}_{>0} \to \mathbb{Q}$, $\rho(a,b) = [(a,b)]$, is well defined because $b > 0$ gives $b \ne 0$, and it is surjective by [L6]; hence $\rho \circ u : \mathbb{N} \to \mathbb{Q}$ is a surjection, $\mathbb{Q}$ is at most countable, and [L3] turns that surjection into an injection $j : \mathbb{Q} \to \mathbb{N}$, so $\mathbb{Q} \preceq \mathbb{N}$. [step 2.1, given, L2, L3, L6]

4.1 From $\mathbb{N} \preceq \mathbb{Q}$ and $\mathbb{Q} \preceq \mathbb{N}$, the Schröder-Bernstein theorem [L8] yields a bijection $\mathbb{Q} \to \mathbb{N}$; hence $\mathbb{Q} \approx \mathbb{N}$ and $\mathbb{Q}$ is countably infinite. [step 1.2, step 3.1, L1, L8] ∎

## Remarks

- **Why Schröder-Bernstein rather than a count.** The usual last line is "countable, and infinite because $\mathbb{N}$ injects into it". Turning that into a proof requires knowing that a set containing an injective copy of $\mathbb{N}$ is not finite, which is the pigeonhole principle, [[lem-pigeonhole]], proved earlier on this page. That route is now available, but it is a detour: [[thm-schroder-bernstein]] gets the bijection directly from the two injections already in hand, and it is choice free, so nothing is lost.

- **Lowest terms are not needed and are not available.** A frequent presentation injects $\mathbb{Q}$ into $\mathbb{Z} \times \mathbb{N}$ by sending each rational to its representative in lowest terms. That map needs greatest common divisors, which this library has not developed. Working with a surjection instead of an injection avoids the issue entirely: repetitions in an enumeration are harmless ([[lem-countable-iff-surjection-from-n]]).

- The proof shows in passing that $\mathbb{Z} \approx \mathbb{N}$, by the same two-injection argument applied to [L7] and step 1.1, and that $\mathbb{Q} \times \mathbb{Q}$, $\mathbb{Q}^3$ and so on are countable ([[thm-product-of-countable]]). The contrast with [[thm-r-uncountable]] is the point of the page: adding all limits of rational approximations to $\mathbb{Q}$ changes the size of the set, not merely its arithmetic.
````

