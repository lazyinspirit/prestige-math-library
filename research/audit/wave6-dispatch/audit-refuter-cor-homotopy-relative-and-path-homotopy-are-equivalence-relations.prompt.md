# Audit proof-refuter brief — Wave 6, step A6

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

## Target item — `cor-homotopy-relative-and-path-homotopy-are-equivalence-relations`

Normalized current SHA-256: `3269cd2f27348b1451ffafd157ee1db38d164aec5702a18e620adaced87b34c6`

The complete current item follows, including frontmatter:

````markdown
---
id: cor-homotopy-relative-and-path-homotopy-are-equivalence-relations
kind: corollary
title: "Homotopy relative to a fixed subspace, and path homotopy relative to endpoints, are equivalence relations"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homotopy-relative-and-path-homotopy, lem-homotopy-reflexive-and-symmetric, lem-homotopy-transitivity-by-reparametrisation, def-equivalence-relation]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Homotopy lecture notes (University of Padua)"
      url: "https://www.math.unipd.it/~maraston/Topologia2/Topo2_1011_homotopy.pdf"
pipeline_run: null
---

## Statement

For fixed spaces $X,Y$ and a fixed subspace $A\subseteq X$, the relation $\simeq_A$ is an equivalence relation on the set of continuous maps $X\to Y$ that have a prescribed restriction to $A$. In particular ordinary homotopy is an equivalence relation on the continuous maps $X\to Y$.

For fixed endpoints $y_0,y_1\in Y$, path homotopy relative to the endpoints is an equivalence relation on the set of paths from $y_0$ to $y_1$.

## Facts & Assumptions

**Given:** Spaces $X,Y$, a subspace $A\subseteq X$, and the relations defined in [[def-homotopy-relative-and-path-homotopy]].

[L1] Homotopy rel $A$ is reflexive and symmetric ([[lem-homotopy-reflexive-and-symmetric]]).

[L2] Homotopy rel $A$ is transitive by the two-piece reparametrisation construction ([[lem-homotopy-transitivity-by-reparametrisation]]).

[L3] A relation is an equivalence relation exactly when it is reflexive, symmetric and transitive ([[def-equivalence-relation]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], $\simeq_A$ is reflexive, symmetric and transitive, so it is an equivalence relation by [L3]. Taking $A=\varnothing$ gives ordinary homotopy. [L1, L2, L3]

2.1 Paths from $y_0$ to $y_1$ are continuous maps $I\to Y$ with one prescribed restriction to the subspace $\{0,1\}$, and their path homotopies are exactly homotopies rel $\{0,1\}$. Hence step 1.1 applies to them. [step 1.1, given] ∎
````

## Proof contract for the target

```json
{
  "citations": [
    {
      "fact": "L1",
      "source": "lem-homotopy-reflexive-and-symmetric",
      "source_section": "Statement",
      "quote": "Let $A\\subseteq X$. Every continuous map $f:X\\to Y$ is homotopic to itself rel $A$. If $f\\simeq_A g$, then $g\\simeq_A f$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-homotopy-transitivity-by-reparametrisation",
      "source_section": "Statement",
      "quote": "Let $A\\subseteq X$ and let $f,g,h:X\\to Y$ be continuous. If $F$ is a homotopy from $f$ to $g$ rel $A$ and $G$ is a homotopy from $g$ to $h$ rel $A$, then $$K(x,t):=\\begin{cases}F(x,2t),&0\\le t\\le \\tfrac12,\\\\G(x,2t-1),&\\tfrac12\\le t\\le1\\end{cases}$$ is a continuous homotopy from $f$ to $h$ rel $A$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-equivalence-relation",
      "source_section": "Definition",
      "quote": "A binary relation $\\sim$ on $A$ is an **equivalence relation** when it is reflexive on $A$, symmetric and transitive ([[def-properties-of-a-relation-on-a-set]]), that is, when it is - **reflexive**: $a \\sim a$ for every $a \\in A$; - **symmetric**: $a \\sim b$ implies $b \\sim a$, for all $a, b \\in A$; - **transitive**: $a \\sim b$ and $b \\sim c$ imply $a \\sim c$, for all $a, b, c \\in A$.",
      "uses": [
        "1.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "step-1.1",
      "claim": "By [L1] and [L2], $\\simeq_A$ is reflexive, symmetric and transitive, so it is an equivalence relation by [L3]. Taking $A=\\varnothing$ gives ordinary homotopy. [L1, L2, L3]",
      "step": "1.1",
      "inputs": [
        "L1",
        "L2",
        "L3"
      ]
    },
    {
      "id": "step-2.1",
      "claim": "Paths from $y_0$ to $y_1$ are continuous maps $I\\to Y$ with one prescribed restriction to the subspace $\\{0,1\\}$, and their path homotopies are exactly homotopies rel $\\{0,1\\}$. Hence step 1.1 applies to them. [step 1.1, given] ∎",
      "step": "2.1",
      "inputs": [
        "1.1"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "checked",
      "evidence": "statement and step 1.1: the empty-domain or empty-space instance is vacuous or formula-defined and selects no point"
    },
    {
      "case": "zero",
      "status": "not_applicable",
      "reason": "no independently varying cardinal, dimension, norm, or scalar parameter has a separate zero case"
    },
    {
      "case": "one",
      "status": "not_applicable",
      "reason": "no independently varying cardinal, dimension, or index has a separate one case"
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "the statement has no separate coincident-map, constant-map, singleton, or collapsed-parameter branch"
    },
    {
      "case": "endpoints",
      "status": "checked",
      "evidence": "steps 1.1 and 2.1 preserve the endpoint restrictions through the cited homotopies"
    },
    {
      "case": "nonempty-choice",
      "status": "not_applicable",
      "reason": "the proof uses only formula-defined maps, fixed quantified data, and cited implications; it selects from no asserted nonempty family"
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "the statement is not a biconditional"
    }
  ],
  "finite_smoke": []
}
```

## Generated audit-manifest relationships for the target

```json
[
  {
    "source": "cor-homotopy-relative-and-path-homotopy-are-equivalence-relations",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-homotopy-relative-and-path-homotopy",
    "declared_target": "def-homotopy-relative-and-path-homotopy",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-homotopy-relative-and-path-homotopy-are-equivalence-relations",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "lem-homotopy-reflexive-and-symmetric",
    "declared_target": "lem-homotopy-reflexive-and-symmetric",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-homotopy-relative-and-path-homotopy-are-equivalence-relations",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "lem-homotopy-transitivity-by-reparametrisation",
    "declared_target": "lem-homotopy-transitivity-by-reparametrisation",
    "target_statement_provenance": null,
    "targetPage": "homotopy-and-homotopy-equivalence",
    "targetBatch": "wave6-topology",
    "edge_type": "dependency",
    "kind": "same-batch",
    "requires_semantic_audit": true
  },
  {
    "source": "cor-homotopy-relative-and-path-homotopy-are-equivalence-relations",
    "sourcePage": "homotopy-and-homotopy-equivalence",
    "batch": "wave6-topology",
    "target": "def-equivalence-relation",
    "declared_target": "def-equivalence-relation",
    "target_statement_provenance": "ai-altered",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Full text of every cited or declared item (4)

### `def-equivalence-relation`

````markdown
---
id: def-equivalence-relation
kind: definition
title: "Equivalence relation, equivalence class, and the quotient set $A/{\\sim}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-relation-domain-range-and-field, def-cartesian-product,
       def-properties-of-a-relation-on-a-set, def-power-set, def-function,
       def-axiom-schema-of-separation, def-injection-surjection-bijection]
justified_by: []
forward_refs: [lem-int-add-well-defined, lem-int-mul-well-defined,
               lem-rat-ops-well-defined, lem-int-equivalence, lem-rat-equivalence]
aliases: [def-equivalence-class, def-quotient-set]
landmark: false
short: "equivalence relation, class, quotient"
verification:
  precheck: n/a
  verified:
    model: claude-opus-5
    verdict: certify
    date: 2026-08-06
    scope: published-rehoming-repair
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Equivalence relation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_relation"
    - title: "Equivalence class (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Equivalence_class"
    - title: "T. Tao, Analysis I, 3rd ed., §4.1 (the integers as a quotient)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

A **binary relation** on a set $A$ is a subset $R \subseteq A \times A$
([[def-relation-domain-range-and-field]], [[def-cartesian-product]]); we write
$a \sim b$ for $(a,b) \in R$ and read it "$a$ is related to $b$".

A binary relation $\sim$ on $A$ is an **equivalence relation** when it is reflexive
on $A$, symmetric and transitive ([[def-properties-of-a-relation-on-a-set]]), that
is, when it is

- **reflexive**: $a \sim a$ for every $a \in A$;
- **symmetric**: $a \sim b$ implies $b \sim a$, for all $a, b \in A$;
- **transitive**: $a \sim b$ and $b \sim c$ imply $a \sim c$, for all
  $a, b, c \in A$.

Let $\sim$ be an equivalence relation on $A$. For $a \in A$, the **equivalence
class** of $a$ is the subset

$$[a] \;:=\; \{\, b \in A \;:\; a \sim b \,\} \;\subseteq\; A,$$

and any $b$ with $[b] = C$ is called a **representative** of the class $C$. The
**quotient set** is the set of all classes,

$$A/{\sim} \;:=\; \{\, [a] \;:\; a \in A \,\},$$

a subset of the power set of $A$ ([[def-power-set]]). The map
$\pi : A \to A/{\sim}$ ([[def-function]]) with $\pi(a) = [a]$ is the **quotient
map**; it is surjective by construction ([[def-injection-surjection-bijection]]).

## Remarks

- **What the classes look like** is the content of
  [[lem-equivalence-classes-partition]]: they are nonempty, they cover $A$, and
  any two of them are either equal or disjoint. That lemma also runs the
  converse, so "equivalence relation on $A$" and "partition of $A$" are two names
  for the same data.

- **Well-definedness.** A rule that assigns a value to $[a]$ by a formula in the
  representative $a$ defines a function on $A/{\sim}$ only if the value is the
  same for every representative, that is, only if $a \sim a'$ implies that the
  formula returns the same value at $a$ and at $a'$. The general statement of that
  obligation, with the uniqueness of the induced function, is
  [[thm-universal-property-of-the-quotient]]. The constructions of $\mathbb{Z}$
  and of $\mathbb{Q}$ discharge it for their own operations
  ([[lem-int-add-well-defined]], [[lem-int-mul-well-defined]],
  [[lem-rat-ops-well-defined]]).

- **Where the general notion is used.** The construction of $\mathbb{Z}$ verifies
  the three properties for the concrete relation
  $(a,b) \sim (c,d) \iff a + d = b + c$ ([[lem-int-equivalence]]), and the
  construction of $\mathbb{Q}$ does the same for its own relation
  ([[lem-rat-equivalence]]). Each of those items settles one relation and defines
  no general notion. Cosets, quotient groups, congruence classes and quotient
  rings are further instances of the definition given here.
````

### `def-homotopy-relative-and-path-homotopy`

````markdown
---
id: def-homotopy-relative-and-path-homotopy
kind: definition
title: "Homotopies of continuous maps, homotopies relative to a subspace, and path homotopies relative to the endpoints"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-continuous-map-top, def-product-topology, def-subspace-topology-top, def-interval, def-path-connected]
aliases: []
landmark: true
verification:
  precheck: n/a
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
pipeline_run: null
---

## Definition

Write $I=[0,1]$ with its usual subspace topology, as in [[def-path-connected]]. Let $X$ and $Y$ be topological spaces, and let $f,g:X\to Y$ be continuous maps ([[def-continuous-map-top]]).

A **homotopy from $f$ to $g$** is a continuous map

$$H:X\times I\longrightarrow Y$$

from the product space ([[def-product-topology]]) such that $H(x,0)=f(x)$ and $H(x,1)=g(x)$ for every $x\in X$. When such an $H$ exists, $f$ and $g$ are **homotopic**, written $f\simeq g$.

Let $A\subseteq X$ carry the subspace topology ([[def-subspace-topology-top]]). The homotopy $H$ is a **homotopy relative to $A$**, or a homotopy **rel $A$**, when

$$H(a,t)=f(a)=g(a)\qquad(a\in A,\ t\in I).$$

Thus a homotopy rel $A$ can exist only when $f|_A=g|_A$, and every ordinary homotopy is a homotopy rel $\varnothing$. We write $f\simeq_A g$ when a homotopy rel $A$ exists.

If $\alpha,\beta:I\to Y$ are paths with the same initial point and the same terminal point ([[def-path-connected]]), a **path homotopy from $\alpha$ to $\beta$ relative to the endpoints** is a homotopy $H:I\times I\to Y$ rel $\{0,1\}$. Explicitly,

$$H(s,0)=\alpha(s),\quad H(s,1)=\beta(s),\quad H(0,t)=\alpha(0)=\beta(0),\quad H(1,t)=\alpha(1)=\beta(1).$$

The first coordinate $s$ parametrises the path and the second coordinate $t$ parametrises the deformation.

## Remarks

- The adjective *relative* means pointwise fixed throughout the deformation, not merely mapped back into $A$.
- A homotopy is a map on a product. A family of maps $H_t(x):=H(x,t)$ is not by itself a homotopy unless the joint map $(x,t)\mapsto H_t(x)$ is continuous.
````

### `lem-homotopy-reflexive-and-symmetric`

````markdown
---
id: lem-homotopy-reflexive-and-symmetric
kind: lemma
title: "Homotopy relative to a subspace is reflexive and symmetric"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homotopy-relative-and-path-homotopy, thm-product-universal-property, thm-continuity-characterisations-top, def-subspace-topology-top, lem-real-line-is-a-metric-space]
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Homotopy lecture notes (University of Padua)"
      url: "https://www.math.unipd.it/~maraston/Topologia2/Topo2_1011_homotopy.pdf"
pipeline_run: null
---

## Statement

Let $A\subseteq X$. Every continuous map $f:X\to Y$ is homotopic to itself rel $A$. If $f\simeq_A g$, then $g\simeq_A f$.

## Facts & Assumptions

**Given:** Topological spaces $X,Y$, a subspace $A\subseteq X$, continuous maps $f,g:X\to Y$, and, for symmetry, a homotopy $H:X\times I\to Y$ from $f$ to $g$ rel $A$.

[A1] A homotopy rel $A$ is a continuous $K:X\times I\to Y$ with $K(x,0)$ and $K(x,1)$ the prescribed endpoint maps and $K(a,t)$ equal to their common value for every $a\in A$ and $t\in I$ ([[def-homotopy-relative-and-path-homotopy]]).

[L1] The projections from a product are continuous, and a map into a product is continuous exactly when all of its components are continuous ([[thm-product-universal-property]]).

[L2] A map is continuous exactly when preimages of open sets are open ([[thm-continuity-characterisations-top]], condition (b)).

[L3] In the usual topology of $\mathbb R$, the open balls are the intervals $(u-r,u+r)$; $I=[0,1]$ has the subspace topology ([[lem-real-line-is-a-metric-space]], [[def-subspace-topology-top]]).

## Proof

**Proof technique:** direct.

1.1 The projection $p_X:X\times I\to X$ is continuous by [L1]. For every open $V\subseteq Y$, $(f\circ p_X)^{-1}[V]=p_X^{-1}[f^{-1}[V]]$ is open, so $K_f(x,t):=f(x)$ is continuous by [L2]. [L1, L2]

1.2 The map $r:I\to I$, $r(t)=1-t$, is continuous: for $t_0\in I$ and an open neighbourhood $V=O\cap I$ of $r(t_0)$, with $O$ open in $\mathbb R$, [L3] gives $\varepsilon>0$ with $(r(t_0)-\varepsilon,r(t_0)+\varepsilon)\subseteq O$; then $U=(t_0-\varepsilon,t_0+\varepsilon)\cap I$ is an open neighbourhood of $t_0$ and $r[U]\subseteq V$, since $|r(t)-r(t_0)|=|t-t_0|$. [L3]

2.1 The homotopy $K_f$ has $K_f(x,0)=K_f(x,1)=f(x)$ and $K_f(a,t)=f(a)$ for $a\in A$, so it is a homotopy from $f$ to itself rel $A$. [step 1.1, A1]

2.2 The map $R:X\times I\to X\times I$, $R(x,t)=(x,r(t))$, is continuous because its components are continuous by step 1.2 and [L1]. For every open $V\subseteq Y$, $(H\circ R)^{-1}[V]=R^{-1}[H^{-1}[V]]$ is open, so $\overline H:=H\circ R$ is continuous by [L2]. [step 1.2, L1, L2]

3.1 One has $\overline H(x,0)=H(x,1)=g(x)$ and $\overline H(x,1)=H(x,0)=f(x)$; for $a\in A$, $\overline H(a,t)=H(a,1-t)=f(a)=g(a)$. Hence $\overline H$ is a homotopy from $g$ to $f$ rel $A$. [step 2.2, A1] ∎
````

### `lem-homotopy-transitivity-by-reparametrisation`

````markdown
---
id: lem-homotopy-transitivity-by-reparametrisation
kind: lemma
title: "Two homotopies relative to the same subspace concatenate after piecewise-linear reparametrisation"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-homotopy-relative-and-path-homotopy, thm-continuity-characterisations-top, def-subspace-topology-top, thm-product-universal-property, def-topological-space, lem-real-line-is-a-metric-space]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  audited: 2026-07-31
sources:
  scraped: []
  references:
    - title: "A. Hatcher, Algebraic Topology, Section 0"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT.pdf"
    - title: "Homotopy lecture notes (University of Padua)"
      url: "https://www.math.unipd.it/~maraston/Topologia2/Topo2_1011_homotopy.pdf"
pipeline_run: null
---

## Statement

Let $A\subseteq X$ and let $f,g,h:X\to Y$ be continuous. If $F$ is a homotopy from $f$ to $g$ rel $A$ and $G$ is a homotopy from $g$ to $h$ rel $A$, then

$$K(x,t):=\begin{cases}F(x,2t),&0\le t\le \tfrac12,\\G(x,2t-1),&\tfrac12\le t\le1\end{cases}$$

is a continuous homotopy from $f$ to $h$ rel $A$.

## Facts & Assumptions

**Given:** Topological spaces $X,Y$, a subspace $A\subseteq X$, continuous maps $f,g,h:X\to Y$, and homotopies $F:f\simeq_A g$ and $G:g\simeq_A h$.

[A1] The endpoint and relative conditions for $F$ and $G$ are those of [[def-homotopy-relative-and-path-homotopy]].

[L1] A map is continuous exactly when preimages of closed sets are closed ([[thm-continuity-characterisations-top]], condition (c)).

[L2] In a subspace, closed sets are exactly traces of ambient closed sets; restrictions of continuous maps to subspaces are continuous ([[def-subspace-topology-top]]).

[L3] Product projections are continuous, and a map into a product is continuous exactly when its components are continuous ([[thm-product-universal-property]]).

[L4] A finite union of closed sets is closed, and the complement of an open set is closed ([[def-topological-space]]).

[L5] In the usual topology of $\mathbb R$, open balls are open intervals; $I=[0,1]$ has the subspace topology ([[lem-real-line-is-a-metric-space]], [[def-subspace-topology-top]]).

## Proof

**Proof technique:** direct.

1.1 The sets $I_0=[0,\tfrac12]$ and $I_1=[\tfrac12,1]$ are closed in $I$: their complements are respectively $I\cap(\tfrac12,\tfrac32)$ and $I\cap(-\tfrac12,\tfrac12)$, traces of open intervals of $\mathbb R$. Hence $D_0=X\times I_0$ and $D_1=X\times I_1$ are closed in $X\times I$, because they are the preimages of $I_0,I_1$ under the continuous time projection. [L1, L3, L4, L5]

1.2 The maps $a_0:I_0\to I$, $a_0(t)=2t$, and $a_1:I_1\to I$, $a_1(t)=2t-1$, are continuous. Indeed, at any $t_0$ and for any ambient open interval of radius $\varepsilon$ about $a_j(t_0)$, the relative interval of radius $\varepsilon/2$ about $t_0$ maps into it, since $|a_j(t)-a_j(t_0)|=2|t-t_0|$; [L5] turns these intervals into the required subspace neighbourhoods. [L5]

2.1 Define $r_j:D_j\to X\times I$ by $r_j(x,t)=(x,a_j(t))$. The first component is the restricted product projection and the second is $a_j$ after the time projection, so $r_j$ is continuous by [L2], step 1.2 and [L3]. [step 1.2, L2, L3]

3.1 The maps $K_0:=F\circ r_0:D_0\to Y$ and $K_1:=G\circ r_1:D_1\to Y$ are continuous: for every closed $C\subseteq Y$, $K_j^{-1}[C]=r_j^{-1}[F^{-1}[C]]$ or $r_j^{-1}[G^{-1}[C]]$, which is closed by [L1]. On $D_0\cap D_1=X\times\{\tfrac12\}$ they agree, since $K_0(x,\tfrac12)=F(x,1)=g(x)=G(x,0)=K_1(x,\tfrac12)$. [step 2.1, A1, L1]

4.1 Thus the displayed clauses define one function $K:X\times I\to Y$. If $C\subseteq Y$ is closed, then $K^{-1}[C]$ is the union of $K_0^{-1}[C]$, regarded as a closed subset of $X\times I$ through the closed subspace $D_0$, and $K_1^{-1}[C]$, regarded likewise through $D_1$. Each is closed by [L2] and steps 1.1 and 3.1, so their union is closed by [L4]. Hence $K$ is continuous by [L1]. [step 1.1, step 3.1, L1, L2, L4]

5.1 At $t=0$ the first clause gives $K(x,0)=F(x,0)=f(x)$, and at $t=1$ the second gives $K(x,1)=G(x,1)=h(x)$. If $a\in A$, both clauses give the common value $f(a)=g(a)=h(a)$ for every $t$. Therefore $K$ is a homotopy from $f$ to $h$ rel $A$. [step 4.1, A1] ∎

## Remarks

The continuity argument uses only a cover by the two closed sets $D_0,D_1$ and proves the finite pasting step directly. No assertion about an infinite closed cover is used.
````

