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
label: n-14

run: frontier-15
role: refuter
label: n-14
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

## ITEM: ex-matrix-ring-decomposition-into-minimal-left-ideals

```markdown
---
id: ex-matrix-ring-decomposition-into-minimal-left-ideals
kind: example
title: "$M_n(F)$ as a direct sum of minimal left ideals"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-matrix-rings-over-division-rings-are-semisimple, thm-simple-modules-over-semisimple-rings, def-matrix-units]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Arvind Nair, Algebra I, Lecture 5"
      url: "https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf"
pipeline_run: null
---

## Example

For every field $F$ and $n\ge1$, the left regular module of $M_n(F)$ is the internal direct sum $$M_n(F)=\bigoplus_{j=1}^n M_n(F)e_{jj}$$ of simple left ideals. See [[thm-matrix-rings-over-division-rings-are-semisimple]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] For a division ring $D$ and $n\ge1$, the left regular module of $M_n(D)$ is the direct sum of its simple column ideals $M_n(D)e_{jj}\cong D^n$. ([[thm-matrix-rings-over-division-rings-are-semisimple]]).

[L2] For $r\ge1$, $n_i\ge1$, and division rings $D_i$, every simple left module over $\prod_iM_{n_i}(D_i)$ is supported on exactly one factor and is isomorphic to that factor's column module $D_i^{n_i}$. ([[thm-simple-modules-over-semisimple-rings]]).

[L3] The matrix unit $E_{ij}\in M_{m\times n}(F)$ has entries $$(E_{ij})_{rs}=\delta_{ri}\delta_{sj},$$ so it has entry $1$ in position $(i,j)$ and $0$ everywhere else. ([[def-matrix-units]]).

## Verification

**Proof technique:** direct.

1.1 The left ideal $M_n(F)e_{jj}$ consists of matrices supported in column $j$. Reading that column identifies it with the natural column module $F^n$. If a nonzero vector lies in a submodule of $F^n$, matrix units send it to every standard basis vector, so the submodule is all of $F^n$; each column ideal is therefore simple. [L1, L2, L3, given, algebra]

2.1 Every matrix is the sum of its column matrices, and matrices supported in distinct columns have zero intersection. Hence $M_n(F)=\bigoplus_{j=1}^nM_n(F)e_{jj}$ as a left module. [step 1.1, given, algebra]

3.1 For $n=1$ this is the single simple left ideal $F$. The decomposition selects $n$ minimal left ideals but makes no assertion that these are the only minimal left ideals. This proves the stated claim. [step 2.1, given, algebra] ∎

```

### Recorded proof contract for ex-matrix-ring-decomposition-into-minimal-left-ideals

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-matrix-rings-over-division-rings-are-semisimple",
   "source_section": "Statement",
   "quote": "Let $D$ be a division ring and $n\\ge1$. On the set of $n\\times n$ arrays over $D$, use entrywise addition and the product\n$$\n(AB)_{ij}:=\\sum_{k=1}^n a_{ik}b_{kj}.\n$$\nThese operations make a ring $M_n(D)$, and this ring is semisimple. More precisely, its left regular module is the direct sum of the simple column ideals $M_n(D)e_{jj}\\cong D^n$ for $1\\le j\\le n$. See [[def-semisimple-ring]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-simple-modules-over-semisimple-rings",
   "source_section": "Statement",
   "quote": "Let $r\\ge1$, let every $n_i\\ge1$, let every $D_i$ be a division ring, and put $R=\\prod_{i=1}^rM_{n_i}(D_i)$. Then every simple left $R$-module is supported on exactly one factor and is isomorphic to that factor's column module $D_i^{n_i}$. These column modules give all simple left $R$-module isomorphism classes, with one class for each factor. See [[thm-wedderburn-artin-theorem]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "def-matrix-units",
   "source_section": "Definition",
   "quote": "For indices $a,b$ in the same finite index set, the **Kronecker delta** is\n\n$$\\delta_{ab}:=\\begin{cases}1,&a=b,\\\\0,&a\\ne b.\\end{cases}$$\n\nLet $i<m$ and $j<n$. The **matrix unit** $E_{ij}\\in M_{m\\times n}(F)$ is the\nmatrix whose $(r,s)$-entry is\n\n$$(E_{ij})_{rs}:=\\delta_{ri}\\delta_{sj}.$$\n\nThus $E_{ij}$ has entry $1$ in position $(i,j)$ and entry $0$ everywhere else.\nWhen a dimension is zero, no index of that dimension exists and there are no\nmatrix units of the corresponding shape.",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The left ideal $M_n(F)e_{jj}$ consists of matrices supported in column $j$. Reading that column identifies it with the natural column module $F^n$. If a nonzero vector lies in a submodule of $F^n$, matrix units send it to every standard basis vector, so the submodule is all of $F^n$; each column ideal is therefore simple.",
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
   "claim": "Every matrix is the sum of its column matrices, and matrices supported in distinct columns have zero intersection. Hence $M_n(F)=\\bigoplus_{j=1}^nM_n(F)e_{jj}$ as a left module.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "For $n=1$ this is the single simple left ideal $F$. The decomposition selects $n$ minimal left ideals but makes no assertion that these are the only minimal left ideals. This proves the stated claim.",
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
   "reason": "$M_n(F)$ as a direct sum of minimal left ideals: the claim “For every field $F$ and $n\\ge1$, the left regular module of $M_n(F)$ is the internal direct sum $M_n(F)=\\bigoplus_{j=1}^n M_n(F)e_{jj}$ of simple left ideals.” has no set, family, sum, product, or series allowed to be empty."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "$M_n(F)$ as a direct sum of minimal left ideals: the zero or trivial specialization for “For every field $F$ and $n\\ge1$, the left regular module of $M_n(F)$ is the internal direct sum $M_n(F)=\\bigoplus_{j=1}^n M_n(F)e_{jj}$ of simple left ideals.” is resolved in step 3.1: “For $n=1$ this is the single simple left ideal $F$. The decomposition selects $n$ minimal left ideals but makes no assertion that these are the only minimal left ideals. This proves the stated claim.”."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "$M_n(F)$ as a direct sum of minimal left ideals: the smallest positive, one-factor, or $p=2$ specialization for “For every field $F$ and $n\\ge1$, the left regular module of $M_n(F)$ is the internal direct sum $M_n(F)=\\bigoplus_{j=1}^n M_n(F)e_{jj}$ of simple left ideals.” is resolved in step 3.1: “For $n=1$ this is the single simple left ideal $F$. The decomposition selects $n$ minimal left ideals but makes no assertion that these are the only minimal left ideals. This proves the stated claim.”."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "$M_n(F)$ as a direct sum of minimal left ideals: the collapsed or coincident-input case admitted by the hypotheses for “For every field $F$ and $n\\ge1$, the left regular module of $M_n(F)$ is the internal direct sum $M_n(F)=\\bigoplus_{j=1}^n M_n(F)e_{jj}$ of simple left ideals.” is resolved in step 3.1: “For $n=1$ this is the single simple left ideal $F$. The decomposition selects $n$ minimal left ideals but makes no assertion that these are the only minimal left ideals. This proves the stated claim.”."
  },
  {
   "case": "endpoints",
   "status": "not_applicable",
   "reason": "$M_n(F)$ as a direct sum of minimal left ideals: the claim “For every field $F$ and $n\\ge1$, the left regular module of $M_n(F)$ is the internal direct sum $M_n(F)=\\bigoplus_{j=1}^n M_n(F)e_{jj}$ of simple left ideals.” contains no interval, limiting process, or indexed chain with a first or terminal endpoint to check."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "$M_n(F)$ as a direct sum of minimal left ideals: the claim “For every field $F$ and $n\\ge1$, the left regular module of $M_n(F)$ is the internal direct sum $M_n(F)=\\bigoplus_{j=1}^n M_n(F)e_{jj}$ of simple left ideals.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "$M_n(F)$ as a direct sum of minimal left ideals: the claim “For every field $F$ and $n\\ge1$, the left regular module of $M_n(F)$ is the internal direct sum $M_n(F)=\\bigoplus_{j=1}^n M_n(F)e_{jj}$ of simple left ideals.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "$M_n(F)$ as a direct sum of minimal left ideals: the claim “For every field $F$ and $n\\ge1$, the left regular module of $M_n(F)$ is the internal direct sum $M_n(F)=\\bigoplus_{j=1}^n M_n(F)e_{jj}$ of simple left ideals.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-product-of-two-fields-is-semisimple

```markdown
---
id: ex-product-of-two-fields-is-semisimple
kind: example
title: "A product of two fields is semisimple with two simple-module types"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-wedderburn-artin-theorem, thm-simple-modules-over-semisimple-rings]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "MIT 18.706, Lecture 2: Semisimple Modules, Socles, Artinian Rings, Wedderburn's Theorem"
      url: "https://ocw.mit.edu/courses/18-706-noncommutative-algebra-spring-2023/mit18_706_s23_lec02.pdf"
pipeline_run: null
---

## Example

For fields $F$ and $K$, the ring $F\times K$ is semisimple. Its simple left modules are, up to isomorphism, $F$ supported on the first factor and $K$ supported on the second. See [[thm-wedderburn-artin-theorem]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] Let $R$ be a nonzero unital ring. Then $R$ is semisimple if and only if $$R\cong\prod_{i=1}^rM_{n_i}(D_i)$$ for positive integers $r,n_i$ and division rings $D_i$. ([[thm-wedderburn-artin-theorem]]).

[L2] For $r\ge1$, $n_i\ge1$, and division rings $D_i$, every simple left module over $\prod_iM_{n_i}(D_i)$ is supported on exactly one factor and is isomorphic to that factor's column module $D_i^{n_i}$; these give all isomorphism classes. ([[thm-simple-modules-over-semisimple-rings]]).

## Verification

**Proof technique:** direct.

1.1 The central idempotents $e_F=(1,0)$ and $e_K=(0,1)$ satisfy $e_F+e_K=1$ and $e_Fe_K=0$. Thus the regular module splits as the direct sum of the simple left ideals $F\times0$ and $0\times K$, proving semisimplicity. [L1, L2, given, algebra]

2.1 For every left module $M$, one has $M=e_FM\oplus e_KM$. If $M$ is simple, exactly one summand is nonzero; it is then a simple vector space over the corresponding field and hence isomorphic to $F$ on the first factor or $K$ on the second. [step 1.1, given, algebra]

3.1 Even when $F\cong K$ as fields, the two modules are not isomorphic as $F\times K$-modules because $e_F$ acts as the identity on one and as zero on the other. This proves the stated claim. [step 2.1, given, algebra] ∎

```

### Recorded proof contract for ex-product-of-two-fields-is-semisimple

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "thm-wedderburn-artin-theorem",
   "source_section": "Statement",
   "quote": "Let $R$ be a nonzero unital ring. Then $R$ is semisimple if and only if $$R\\cong\\prod_{i=1}^rM_{n_i}(D_i)$$ for positive integers $r,n_i$ and division rings $D_i$. See [[thm-endomorphism-ring-of-the-left-regular-module-is-opposite]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-simple-modules-over-semisimple-rings",
   "source_section": "Statement",
   "quote": "Let $r\\ge1$, let every $n_i\\ge1$, let every $D_i$ be a division ring, and put $R=\\prod_{i=1}^rM_{n_i}(D_i)$. Then every simple left $R$-module is supported on exactly one factor and is isomorphic to that factor's column module $D_i^{n_i}$. These column modules give all simple left $R$-module isomorphism classes, with one class for each factor. See [[thm-wedderburn-artin-theorem]].",
   "uses": [
    "1.1"
   ]
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "The central idempotents $e_F=(1,0)$ and $e_K=(0,1)$ satisfy $e_F+e_K=1$ and $e_Fe_K=0$. Thus the regular module splits as the direct sum of the simple left ideals $F\\times0$ and $0\\times K$, proving semisimplicity.",
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
   "claim": "For every left module $M$, one has $M=e_FM\\oplus e_KM$. If $M$ is simple, exactly one summand is nonzero; it is then a simple vector space over the corresponding field and hence isomorphic to $F$ on the first factor or $K$ on the second.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "Even when $F\\cong K$ as fields, the two modules are not isomorphic as $F\\times K$-modules because $e_F$ acts as the identity on one and as zero on the other. This proves the stated claim.",
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
   "evidence": "A product of two fields is semisimple with two simple-module types: the empty-object specialization for “For fields $F$ and $K$, the ring $F\\times K$ is semisimple. Its simple left modules are, up to isomorphism, $F$ supported on the first factor and $K$ supported on the second.” is resolved in step 3.1: “Even when $F\\cong K$ as fields, the two modules are not isomorphic as $F\\times K$-modules because $e_F$ acts as the identity on one and as zero on the other. This proves the stated claim.”."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "A product of two fields is semisimple with two simple-module types: the zero or trivial specialization for “For fields $F$ and $K$, the ring $F\\times K$ is semisimple. Its simple left modules are, up to isomorphism, $F$ supported on the first factor and $K$ supported on the second.” is resolved in step 3.1: “Even when $F\\cong K$ as fields, the two modules are not isomorphic as $F\\times K$-modules because $e_F$ acts as the identity on one and as zero on the other. This proves the stated claim.”."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "A product of two fields is semisimple with two simple-module types: the smallest positive, one-factor, or $p=2$ specialization for “For fields $F$ and $K$, the ring $F\\times K$ is semisimple. Its simple left modules are, up to isomorphism, $F$ supported on the first factor and $K$ supported on the second.” is resolved in step 3.1: “Even when $F\\cong K$ as fields, the two modules are not isomorphic as $F\\times K$-modules because $e_F$ acts as the identity on one and as zero on the other. This proves the stated claim.”."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "A product of two fields is semisimple with two simple-module types: the collapsed or coincident-input case admitted by the hypotheses for “For fields $F$ and $K$, the ring $F\\times K$ is semisimple. Its simple left modules are, up to isomorphism, $F$ supported on the first factor and $K$ supported on the second.” is resolved in step 3.1: “Even when $F\\cong K$ as fields, the two modules are not isomorphic as $F\\times K$-modules because $e_F$ acts as the identity on one and as zero on the other. This proves the stated claim.”."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "A product of two fields is semisimple with two simple-module types: the initial index and termination or stabilization endpoint for “For fields $F$ and $K$, the ring $F\\times K$ is semisimple. Its simple left modules are, up to isomorphism, $F$ supported on the first factor and $K$ supported on the second.” is resolved in step 3.1: “Even when $F\\cong K$ as fields, the two modules are not isomorphic as $F\\times K$-modules because $e_F$ acts as the identity on one and as zero on the other. This proves the stated claim.”."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "A product of two fields is semisimple with two simple-module types: the claim “For fields $F$ and $K$, the ring $F\\times K$ is semisimple. Its simple left modules are, up to isomorphism, $F$ supported on the first factor and $K$ supported on the second.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "A product of two fields is semisimple with two simple-module types: the claim “For fields $F$ and $K$, the ring $F\\times K$ is semisimple. Its simple left modules are, up to isomorphism, $F$ supported on the first factor and $K$ supported on the second.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "A product of two fields is semisimple with two simple-module types: the claim “For fields $F$ and $K$, the ring $F\\times K$ is semisimple. Its simple left modules are, up to isomorphism, $F$ supported on the first factor and $K$ supported on the second.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": []
}
```

## ITEM: ex-length-of-z-modulo-p-to-the-k

```markdown
---
id: ex-length-of-z-modulo-p-to-the-k
kind: example
title: "The $\\mathbb Z$-module $\\mathbb Z/p^k$ has length $k$"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-composition-series-and-length-of-a-module, thm-jordan-holder-theorem-for-modules, cor-length-is-additive-in-short-exact-sequences, cor-prime-order-group-is-cyclic]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Arvind Nair, Algebra I, Lecture 5"
      url: "https://mathweb.tifr.res.in/~arvind/algebra/Lectures_algebra.pdf"
pipeline_run: null
---

## Example

For a prime $p$ and $k\in\mathbb N$, the $\mathbb Z$-module $\mathbb Z/p^k\mathbb Z$ has length $k$. In particular, $k=0$ gives the zero module. See [[def-composition-series-and-length-of-a-module]].

## Facts & Assumptions

**Given:** The hypotheses and objects in the Example.

[L1] A composition series of a left $R$-module $M$ is a finite chain $$0=M_0<M_1<\cdots<M_n=M$$ whose factors $M_i/M_{i-1}$ are simple. If such a series exists, the length $\ell_R(M)$ is its number $n$ of factors; thm-jordan-holder-theorem-for-modules proves independence of the chosen series. The zero module has the empty series and length $0$. ([[def-composition-series-and-length-of-a-module]]).

[L2] Any two composition series of a module have the same length, and their simple factors agree up to permutation and isomorphism. ([[thm-jordan-holder-theorem-for-modules]]).

[L3] For a short exact sequence $0\to N\to M\to Q\to0$, the module $M$ has finite length if and only if $N$ and $Q$ do, and then $$\ell_R(M)=\ell_R(N)+\ell_R(Q).$$. ([[cor-length-is-additive-in-short-exact-sequences]]).

[L4] Let $G$ be a finite group such that the positive integer $|G|$ is prime. Then every $g\ne e$ has order $|G|$, satisfies $\langle g\rangle=G$, and hence generates $G$. In particular, $G$ is cyclic. ([[cor-prime-order-group-is-cyclic]]).

## Verification

**Proof technique:** direct.

1.1 For $k\ge1$, the chain $0<p^{k-1}\mathbb Z/p^k\mathbb Z<\cdots<p\mathbb Z/p^k\mathbb Z<\mathbb Z/p^k\mathbb Z$ is strict, and every successive quotient has order $p$ and is therefore the simple $\mathbb Z$-module $\mathbb Z/p$. [L1, L2, L3, L4, given, algebra]

2.1 This composition series has $k$ factors, so Jordan–Hölder gives length $k$. For $k=0$, $\mathbb Z/p^0\mathbb Z=0$ has the empty series; for $k=1$, the displayed module itself is simple. [step 1.1, given, algebra]

3.1 The calculation concerns the finite-length quotient module and does not require the ambient ring $\mathbb Z$ to be Artinian. This proves the stated claim. [step 2.1, given, algebra] ∎

```

### Recorded proof contract for ex-length-of-z-modulo-p-to-the-k

```json
{
 "citations": [
  {
   "fact": "L1",
   "source": "def-composition-series-and-length-of-a-module",
   "source_section": "Definition",
   "quote": "A **composition series** of a left $R$-module $M$ is a finite chain $$0=M_0<M_1<\\cdots<M_n=M$$ whose factors $M_i/M_{i-1}$ are simple. If such a series exists, the **length** $\\ell_R(M)$ is its number $n$ of factors; [[thm-jordan-holder-theorem-for-modules]] proves independence of the chosen series. The zero module has the empty series and length $0$.",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L2",
   "source": "thm-jordan-holder-theorem-for-modules",
   "source_section": "Statement",
   "quote": "Any two composition series of a module have the same length, and their simple factors agree up to permutation and isomorphism. See [[def-composition-series-and-length-of-a-module]].",
   "uses": [
    "1.1"
   ]
  },
  {
   "fact": "L3",
   "source": "cor-length-is-additive-in-short-exact-sequences",
   "source_section": "Statement",
   "quote": "For a short exact sequence $0\\to N\\to M\\to Q\\to0$, the module $M$ has finite length if and only if $N$ and $Q$ do, and then $$\\ell_R(M)=\\ell_R(N)+\\ell_R(Q).$$ See [[thm-jordan-holder-theorem-for-modules]].",
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
  }
 ],
 "derivations": [
  {
   "id": "step-1-1",
   "claim": "For $k\\ge1$, the chain $0<p^{k-1}\\mathbb Z/p^k\\mathbb Z<\\cdots<p\\mathbb Z/p^k\\mathbb Z<\\mathbb Z/p^k\\mathbb Z$ is strict, and every successive quotient has order $p$ and is therefore the simple $\\mathbb Z$-module $\\mathbb Z/p$.",
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
   "claim": "This composition series has $k$ factors, so Jordan–Hölder gives length $k$. For $k=0$, $\\mathbb Z/p^0\\mathbb Z=0$ has the empty series; for $k=1$, the displayed module itself is simple.",
   "step": "2.1",
   "inputs": [
    "step 1.1",
    "given",
    "algebra"
   ]
  },
  {
   "id": "step-3-1",
   "claim": "The calculation concerns the finite-length quotient module and does not require the ambient ring $\\mathbb Z$ to be Artinian. This proves the stated claim.",
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
   "evidence": "The $\\mathbb Z$-module $\\mathbb Z/p^k$ has length $k$: the empty-object specialization for “For a prime $p$ and $k\\in\\mathbb N$, the $\\mathbb Z$-module $\\mathbb Z/p^k\\mathbb Z$ has length $k$. In particular, $k=0$ gives the zero module.” is resolved in step 2.1: “This composition series has $k$ factors, so Jordan–Hölder gives length $k$. For $k=0$, $\\mathbb Z/p^0\\mathbb Z=0$ has the empty series; for $k=1$, the displayed module itself is simple.”."
  },
  {
   "case": "zero",
   "status": "checked",
   "evidence": "The $\\mathbb Z$-module $\\mathbb Z/p^k$ has length $k$: the zero or trivial specialization for “For a prime $p$ and $k\\in\\mathbb N$, the $\\mathbb Z$-module $\\mathbb Z/p^k\\mathbb Z$ has length $k$. In particular, $k=0$ gives the zero module.” is resolved in step 2.1: “This composition series has $k$ factors, so Jordan–Hölder gives length $k$. For $k=0$, $\\mathbb Z/p^0\\mathbb Z=0$ has the empty series; for $k=1$, the displayed module itself is simple.”."
  },
  {
   "case": "one",
   "status": "checked",
   "evidence": "The $\\mathbb Z$-module $\\mathbb Z/p^k$ has length $k$: the smallest positive, one-factor, or $p=2$ specialization for “For a prime $p$ and $k\\in\\mathbb N$, the $\\mathbb Z$-module $\\mathbb Z/p^k\\mathbb Z$ has length $k$. In particular, $k=0$ gives the zero module.” is resolved in step 2.1: “This composition series has $k$ factors, so Jordan–Hölder gives length $k$. For $k=0$, $\\mathbb Z/p^0\\mathbb Z=0$ has the empty series; for $k=1$, the displayed module itself is simple.”."
  },
  {
   "case": "degenerate",
   "status": "checked",
   "evidence": "The $\\mathbb Z$-module $\\mathbb Z/p^k$ has length $k$: the collapsed or coincident-input case admitted by the hypotheses for “For a prime $p$ and $k\\in\\mathbb N$, the $\\mathbb Z$-module $\\mathbb Z/p^k\\mathbb Z$ has length $k$. In particular, $k=0$ gives the zero module.” is resolved in step 2.1: “This composition series has $k$ factors, so Jordan–Hölder gives length $k$. For $k=0$, $\\mathbb Z/p^0\\mathbb Z=0$ has the empty series; for $k=1$, the displayed module itself is simple.”."
  },
  {
   "case": "endpoints",
   "status": "checked",
   "evidence": "The $\\mathbb Z$-module $\\mathbb Z/p^k$ has length $k$: the initial index and termination or stabilization endpoint for “For a prime $p$ and $k\\in\\mathbb N$, the $\\mathbb Z$-module $\\mathbb Z/p^k\\mathbb Z$ has length $k$. In particular, $k=0$ gives the zero module.” is resolved in step 2.1: “This composition series has $k$ factors, so Jordan–Hölder gives length $k$. For $k=0$, $\\mathbb Z/p^0\\mathbb Z=0$ has the empty series; for $k=1$, the displayed module itself is simple.”."
  },
  {
   "case": "nonempty-choice",
   "status": "not_applicable",
   "reason": "The $\\mathbb Z$-module $\\mathbb Z/p^k$ has length $k$: the claim “For a prime $p$ and $k\\in\\mathbb N$, the $\\mathbb Z$-module $\\mathbb Z/p^k\\mathbb Z$ has length $k$. In particular, $k=0$ gives the zero module.” uses explicit elements, fixed subgroups, homomorphisms, or finite arithmetic and makes no arbitrary selection from a class whose nonemptiness is in question."
  },
  {
   "case": "iff-forward",
   "status": "not_applicable",
   "reason": "The $\\mathbb Z$-module $\\mathbb Z/p^k$ has length $k$: the claim “For a prime $p$ and $k\\in\\mathbb N$, the $\\mathbb Z$-module $\\mathbb Z/p^k\\mathbb Z$ has length $k$. In particular, $k=0$ gives the zero module.” is a one-way assertion rather than a biconditional, so it has no forward iff direction."
  },
  {
   "case": "iff-reverse",
   "status": "not_applicable",
   "reason": "The $\\mathbb Z$-module $\\mathbb Z/p^k$ has length $k$: the claim “For a prime $p$ and $k\\in\\mathbb N$, the $\\mathbb Z$-module $\\mathbb Z/p^k\\mathbb Z$ has length $k$. In particular, $k=0$ gives the zero module.” is a one-way assertion rather than a biconditional, so it has no reverse iff direction."
  }
 ],
 "finite_smoke": [
  {
   "check": "cyclic-subgroup-lagrange",
   "asserts": "the chain $0<p^{k-1}\\mathbb Z/p^k\\mathbb Z<\\cdots<p\\mathbb Z/p^k\\mathbb Z<\\mathbb Z/p^k\\mathbb Z$ is strict, and every successive quotient has order $p$",
   "claim": "The terms of this chain are the subgroups generated by p^i inside Z/p^k. The check computes |<d>| = n/d for every divisor d of every n through the bound and verifies it divides n; at n = 4, 8, 16 and 9 those subgroups ARE this chain, so a wrong subgroup order would break the order-p successive quotients and with them the count of k factors.",
   "checked_in": "steps 1.1 and 2.1"
  }
 ]
}
```

---

# DEPENDENCY TEXT — the cited items, title and claim section only

## DEPENDENCY: thm-matrix-rings-over-division-rings-are-semisimple

```markdown
title: "Matrix rings over division rings are semisimple"

## Statement
Let $D$ be a division ring and $n\ge1$. On the set of $n\times n$ arrays over $D$, use entrywise addition and the product
$$
(AB)_{ij}:=\sum_{k=1}^n a_{ik}b_{kj}.
$$
These operations make a ring $M_n(D)$, and this ring is semisimple. More precisely, its left regular module is the direct sum of the simple column ideals $M_n(D)e_{jj}\cong D^n$ for $1\le j\le n$. See [[def-semisimple-ring]].
```

## DEPENDENCY: thm-simple-modules-over-semisimple-rings

```markdown
title: "Simple modules over a product of matrix rings over division rings"

## Statement
Let $r\ge1$, let every $n_i\ge1$, let every $D_i$ be a division ring, and put $R=\prod_{i=1}^rM_{n_i}(D_i)$. Then every simple left $R$-module is supported on exactly one factor and is isomorphic to that factor's column module $D_i^{n_i}$. These column modules give all simple left $R$-module isomorphism classes, with one class for each factor. See [[thm-wedderburn-artin-theorem]].
```

## DEPENDENCY: def-matrix-units

```markdown
title: 'Matrix units $E_{ij}$ and the Kronecker delta'

## Definition
For indices $a,b$ in the same finite index set, the **Kronecker delta** is

$$\delta_{ab}:=\begin{cases}1,&a=b,\\0,&a\ne b.\end{cases}$$

Let $i<m$ and $j<n$. The **matrix unit** $E_{ij}\in M_{m\times n}(F)$ is the
matrix whose $(r,s)$-entry is

$$(E_{ij})_{rs}:=\delta_{ri}\delta_{sj}.$$

Thus $E_{ij}$ has entry $1$ in position $(i,j)$ and entry $0$ everywhere else.
When a dimension is zero, no index of that dimension exists and there are no
matrix units of the corresponding shape.
```

## DEPENDENCY: thm-wedderburn-artin-theorem

```markdown
title: "Wedderburn–Artin theorem for semisimple rings"

## Statement
Let $R$ be a nonzero unital ring. Then $R$ is semisimple if and only if $$R\cong\prod_{i=1}^rM_{n_i}(D_i)$$ for positive integers $r,n_i$ and division rings $D_i$. See [[thm-endomorphism-ring-of-the-left-regular-module-is-opposite]].
```

## DEPENDENCY: def-composition-series-and-length-of-a-module

```markdown
title: "Composition series and length of a module"

## Definition
A **composition series** of a left $R$-module $M$ is a finite chain $$0=M_0<M_1<\cdots<M_n=M$$ whose factors $M_i/M_{i-1}$ are simple. If such a series exists, the **length** $\ell_R(M)$ is its number $n$ of factors; [[thm-jordan-holder-theorem-for-modules]] proves independence of the chosen series. The zero module has the empty series and length $0$.
```

## DEPENDENCY: thm-jordan-holder-theorem-for-modules

```markdown
title: "Jordan–Hölder theorem for modules"

## Statement
Any two composition series of a module have the same length, and their simple factors agree up to permutation and isomorphism. See [[def-composition-series-and-length-of-a-module]].
```

## DEPENDENCY: cor-length-is-additive-in-short-exact-sequences

```markdown
title: "Module length is additive in short exact sequences"

## Statement
For a short exact sequence $0\to N\to M\to Q\to0$, the module $M$ has finite length if and only if $N$ and $Q$ do, and then $$\ell_R(M)=\ell_R(N)+\ell_R(Q).$$ See [[thm-jordan-holder-theorem-for-modules]].
```

## DEPENDENCY: cor-prime-order-group-is-cyclic

```markdown
title: "A finite group of prime order is cyclic and every nonidentity element generates it"

## Statement
Let $G$ be a finite group such that the positive integer $\iota(|G|)$ is prime.
Then every $g\ne e$ has order $|G|$, satisfies $\langle g\rangle=G$, and hence
generates $G$. In particular, $G$ is cyclic.
```
