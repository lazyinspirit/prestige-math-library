## Wave 9 target — `lem-hamel-basis-exists`

Selection: mandatory Wave 9 high/critical proof-bearing route.

Normalized current SHA-256: `bfa7c2db2de87e44995c287297559b3605fe83575aa1199e1ef26e56e05de458`

## Complete current target

````markdown
---
id: lem-hamel-basis-exists
kind: lemma
title: "Assuming the Axiom of Choice, $\\mathbb{R}$ has a Hamel basis over $\\mathbb{Q}$: there is $B \\subseteq \\mathbb{R}$ such that every real is a finite $\\mathbb{Q}$-linear combination of elements of $B$ in exactly one way, and each basis vector carries a well-defined $\\mathbb{Q}$-linear coefficient map"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
  evidence: semantic-source
deps: [def-vector-space, lem-restriction-of-scalars, def-subfield, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, lem-dependent-iff-a-vector-lies-in-the-span-of-the-others, lem-span-monotone-and-idempotent, lem-span-of-a-single-vector, lem-sum-is-span-of-union, def-sum-of-linear-subspaces, def-internal-direct-sum, lem-direct-sum-criterion, def-linear-subspace, def-linear-independence, def-linear-basis, cor-every-vector-space-has-a-basis, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-axiom-of-choice, thm-zorn, lem-rat-embeds-dense, thm-rationals-countable, thm-r-uncountable, lem-countable-iff-surjection-from-n, def-countable, def-field, def-complete-ordered-field, def-injection-surjection-bijection, def-natural-numbers]
justified_by: []
aliases: [lem-hamel-basis]
landmark: true
short: "a Hamel basis of $\\mathbb{R}$ over $\\mathbb{Q}$"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Hamel basis, in Basis (linear algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Hamel Basis (MathWorld)"
      url: "https://mathworld.wolfram.com/HamelBasis.html"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]). The hypothesis is
genuinely used: it enters through [[cor-every-vector-space-has-a-basis]], whose
own Statement begins "Assume the Axiom of Choice", and which rests on
[[thm-zorn]].

Write $\mathbb{Q}$ for the canonical copy $\{\hat q : q \in \mathbb{Q}\}$ of the
rationals inside $\mathbb{R}$ ([[lem-rat-embeds-dense]]). Then $\mathbb{Q}$ is a
subfield of $\mathbb{R}$ ([[def-subfield]]) and $\mathbb{R}$ is a vector space
over $\mathbb{Q}$ by restriction of scalars ([[lem-restriction-of-scalars]],
[[def-vector-space]]); all spans, linear independence and bases below are taken
in that structure. Then:

1. **Existence.** $\mathbb{R}$ has a basis $B$ over $\mathbb{Q}$
   ([[def-linear-basis]]), called a **Hamel basis**.
2. **Representation.** Every real $x$ is
   $x = \sum_{i<n}\lambda_i b_i$ for some $n \in \mathbb{N}$, some **injective**
   list $b : n \to B$ ([[def-injection-surjection-bijection]]) and some
   $\lambda : n \to \mathbb{Q}$ ([[def-linear-combination-and-span]]).
3. **Uniqueness along a list.** For a fixed $n$ and a fixed injective
   $b : n \to B$, if $\lambda, \mu : n \to \mathbb{Q}$ satisfy
   $\sum_{i<n}\lambda_i b_i = \sum_{i<n}\mu_i b_i$, then $\lambda_i = \mu_i$ for
   every $i < n$.
4. **The coefficient map of a basis vector.** Fix $b_{\star} \in B$ and put
   $W_{b_{\star}} := \operatorname{span}(B \setminus \{b_{\star}\})$. Every real
   $x$ is $x = \lambda\, b_{\star} + w$ with $\lambda \in \mathbb{Q}$ and
   $w \in W_{b_{\star}}$ in **exactly one** way. Writing
   $\Lambda_{b_{\star}}(x) := \lambda$ for that unique scalar, the map
   $\Lambda_{b_{\star}} : \mathbb{R} \to \mathbb{Q}$ satisfies
   $$\Lambda_{b_{\star}}(x+y) = \Lambda_{b_{\star}}(x) + \Lambda_{b_{\star}}(y), \qquad \Lambda_{b_{\star}}(qx) = q\,\Lambda_{b_{\star}}(x) \ \ (q \in \mathbb{Q}), \qquad \Lambda_{b_{\star}}(b_{\star}) = 1,$$
   its range is the whole of $\mathbb{Q}$, and
   $\{\, x \in \mathbb{R} : \Lambda_{b_{\star}}(x) = 0 \,\} = W_{b_{\star}}$.
5. **The complement is not trivial.** $W_{b_{\star}} \ne \{0\}$ for every
   $b_{\star} \in B$.

Claim 2 together with claim 4 is the precise content of the phrase "in exactly
one way" in the title: a real is a finite $\mathbb{Q}$-combination of basis
vectors, and the coefficient attached to each single basis vector is determined
by the real alone.

## Facts & Assumptions

**Given:** The field $\mathbb{R}$, the canonical copy $\mathbb{Q} \subseteq \mathbb{R}$ of the rationals, and the Axiom of Choice.

[A1] The Axiom of Choice, used only through [L4] ([[def-axiom-of-choice]], [[thm-zorn]]).

[L1] The map $q \mapsto \hat q$ is an embedding of ordered fields of $\mathbb{Q}$ into $\mathbb{R}$ ([[lem-rat-embeds-dense]]); a subfield is a subset containing $1$, closed under $a - b$ and $ab$, and containing $x^{-1}$ for each nonzero $x$ in it ([[def-subfield]], [[def-field]], [[def-complete-ordered-field]]).

[L2] A field is a vector space over itself, and an $F$-vector space is a $K$-vector space for every subfield $K \subseteq F$ by restricting the scalars ([[lem-restriction-of-scalars]], [[def-vector-space]]).

[L3] $\operatorname{span}(S)$ is the smallest linear subspace containing $S$; it is extensive, monotone and idempotent; $\operatorname{span}\{v\} = \{\lambda v : \lambda \in F\}$, and for $v \ne 0_V$ the scalar $\lambda$ in $\lambda v$ is determined ([[def-linear-combination-and-span]], [[def-linear-subspace]], [[lem-span-monotone-and-idempotent]], [[lem-span-of-a-single-vector]]).

[L4] **Assume the Axiom of Choice.** Then every vector space over every field has a basis, that is a linearly independent spanning subset ([[cor-every-vector-space-has-a-basis]], [[def-linear-basis]], [[def-linear-independence]]).

[L5] For $S \subseteq V$: $S$ is linearly dependent if and only if some $s \in S$ lies in $\operatorname{span}(S \setminus \{s\})$; and $\operatorname{span}(S)$ is already the set of linear combinations of **injective** finite lists into $S$ ([[lem-dependent-iff-a-vector-lies-in-the-span-of-the-others]], claims 1 and 2, [[lem-span-is-the-set-of-linear-combinations]]).

[L6] A finite list $v : n \to V$ is an ordered basis of $V$ if and only if every $x \in V$ is $\sum_{i<n}\lambda_i v_i$ for exactly one $\lambda : n \to F$; an ordered basis is an injective list whose image is a basis; and for a linear subspace $U \subseteq V$ and $A \subseteq U$ the readings of "$A$ is linearly independent" and "$A$ is a basis" computed in $U$ and in $V$ agree ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]], [[def-linear-basis]], [[def-natural-numbers]]).

[L7] For finitely many linear subspaces, $\sum_{i<n}U_i = \operatorname{span}(\bigcup_{i<n}U_i)$; and $V = \bigoplus_{i<n}U_i$ if and only if every $v \in V$ is $\sum_{i<n}u_i$ with $u_i \in U_i$ in exactly one way, which for $n = 2$ reads $v = u_0 + u_1$ ([[lem-sum-is-span-of-union]], [[def-sum-of-linear-subspaces]], [[def-internal-direct-sum]], [[lem-direct-sum-criterion]]).

[L8] $\mathbb{Q} \approx \mathbb{N}$ and $\mathbb{R}$ is uncountable; a nonempty at most countable set is the image of a surjection from $\mathbb{N}$, and the image of a surjection from $\mathbb{N}$ is at most countable ([[thm-rationals-countable]], [[thm-r-uncountable]], [[lem-countable-iff-surjection-from-n]], [[def-countable]]).

## Proof

**Proof technique:** direct.

1.1 $\mathbb{Q} = \{\hat q : q \in \mathbb{Q}\}$ is a subfield of $\mathbb{R}$: it contains $\hat 1 = 1$; it is closed under differences and products, since $\hat p - \hat q = \widehat{p-q}$ and $\hat p\,\hat q = \widehat{pq}$; and if $\hat q \ne 0$ then $q \ne 0$ and $\hat q^{-1} = \widehat{q^{-1}}$ lies in it. [L1]

2.1 $\mathbb{R}$ is a vector space over itself, so restricting the scalars to the subfield $\mathbb{Q}$ makes $\mathbb{R}$ a vector space over $\mathbb{Q}$, with the field addition as vector addition and the field multiplication restricted to $\mathbb{Q} \times \mathbb{R}$ as scalar multiplication. [step 1.1, L2]

3.1 Claim 1: assuming the Axiom of Choice, that vector space has a basis $B$, a linearly independent subset of $\mathbb{R}$ with $\operatorname{span}(B) = \mathbb{R}$. [step 2.1, A1, L4]

4.1 Claim 2: since $\operatorname{span}(B) = \mathbb{R}$ and the span of a set is already the set of linear combinations of injective finite lists into it, every real $x$ is $\sum_{i<n}\lambda_i b_i$ with $b : n \to B$ injective and $\lambda : n \to \mathbb{Q}$. [step 3.1, L5]

4.2 Claim 3: let $b : n \to B$ be injective and put $U := \operatorname{span}(b[n])$, a linear subspace of $\mathbb{R}$. The list $b$ is linearly independent, since $B$ is a linearly independent subset and $b$ is an injective finite list into $B$; its image $b[n]$ spans $U$ by construction, so $b[n]$ is a basis of $U$ and $b$ is an ordered basis of $U$, independence and spanning being the same conditions read in $U$ as in $\mathbb{R}$. [step 3.1, L3, L6]

4.3 Fix $b_{\star} \in B$ and put $U_{0} := \operatorname{span}\{b_{\star}\} = \{\, \lambda b_{\star} : \lambda \in \mathbb{Q} \,\}$ and $U_{1} := W_{b_{\star}} = \operatorname{span}(B \setminus \{b_{\star}\})$, both linear subspaces of $\mathbb{R}$. [step 3.1, L3, construct]

5.1 With $b$ and $U$ as in step 4.2, the coordinate theorem applied to the vector space $U$ says that every $x \in U$ is $\sum_{i<n}\lambda_i b_i$ for exactly one $\lambda : n \to \mathbb{Q}$; in particular $\sum_{i<n}\lambda_i b_i = \sum_{i<n}\mu_i b_i$ forces $\lambda = \mu$, which is claim 3. [step 4.2, L6]

5.2 $U_{0} + U_{1} = \mathbb{R}$. Indeed $U_{0} + U_{1} = \operatorname{span}(U_{0} \cup U_{1})$; the set $B$ is contained in $U_{0} \cup U_{1}$, since $b_{\star} \in U_{0}$ and $B \setminus \{b_{\star}\} \subseteq U_{1}$ by extensiveness of the span, so $\mathbb{R} = \operatorname{span}(B) \subseteq \operatorname{span}(U_{0} \cup U_{1})$ by monotonicity; and $U_{0} \cup U_{1} \subseteq \operatorname{span}(B)$, again by monotonicity, so $\operatorname{span}(U_{0} \cup U_{1}) \subseteq \operatorname{span}(\operatorname{span}(B)) = \operatorname{span}(B) = \mathbb{R}$ by idempotence. [step 3.1, step 4.3, L3, L7]

5.3 $b_{\star} \ne 0$ and $b_{\star} \notin U_{1}$. If $b_{\star}$ lay in $\operatorname{span}(B \setminus \{b_{\star}\})$ then $B$ would be linearly dependent, contrary to step 3.1; and $0 \in B$ would likewise make $B$ dependent, since $0 \in \operatorname{span}(B \setminus \{0\})$, every span containing the zero vector. [step 3.1, step 4.3, L5]

6.1 $U_{0} \cap U_{1} = \{0\}$. Let $z \in U_{0} \cap U_{1}$ and write $z = \lambda b_{\star}$ with $\lambda \in \mathbb{Q}$. If $\lambda \ne 0$ then $b_{\star} = \lambda^{-1}z \in U_{1}$, because $U_{1}$ is a linear subspace and $\lambda^{-1} \in \mathbb{Q}$, contradicting step 5.3; so $\lambda = 0$ and $z = 0$. [step 4.3, step 5.3, L3]

7.1 Hence $\mathbb{R} = U_{0} \oplus U_{1}$: condition (D1) is step 5.2, and condition (D2) is step 6.1, since for the two-member family the sum of the other summands is $U_{1}$ in the one case and $U_{0}$ in the other. By the direct-sum criterion every real $x$ is $u_{0} + u_{1}$ with $u_{0} \in U_{0}$ and $u_{1} \in U_{1}$ in exactly one way. [step 5.2, step 6.1, L7]

8.1 Writing $u_{0} = \lambda b_{\star}$, the scalar $\lambda \in \mathbb{Q}$ is determined by $u_{0}$, since $b_{\star} \ne 0$; so $\Lambda_{b_{\star}}(x) := \lambda$ is a well-defined map $\mathbb{R} \to \mathbb{Q}$, and $x = \Lambda_{b_{\star}}(x)\,b_{\star} + w$ with $w \in W_{b_{\star}}$ in exactly one way. [step 5.3, step 7.1, L3]

9.1 $\Lambda_{b_{\star}}$ is additive and $\mathbb{Q}$-homogeneous: if $x = \lambda b_{\star} + w$ and $y = \mu b_{\star} + w'$ with $w, w' \in W_{b_{\star}}$, then $x + y = (\lambda + \mu)b_{\star} + (w + w')$ with $w + w' \in W_{b_{\star}}$, and $qx = (q\lambda)b_{\star} + qw$ with $qw \in W_{b_{\star}}$ for $q \in \mathbb{Q}$, both because $W_{b_{\star}}$ is a linear subspace; uniqueness in step 8.1 then identifies the coefficients. [step 8.1, L3]

10.1 $\Lambda_{b_{\star}}(b_{\star}) = 1$, from the representation $b_{\star} = 1\cdot b_{\star} + 0$; the range of $\Lambda_{b_{\star}}$ is all of $\mathbb{Q}$, since $\Lambda_{b_{\star}}(q b_{\star}) = q$ for every $q \in \mathbb{Q}$; and $\Lambda_{b_{\star}}(x) = 0$ holds exactly when $x = 0\cdot b_{\star} + w = w \in W_{b_{\star}}$. Claim 4 is proved. [step 8.1, step 9.1]

11.1 Claim 5: if $W_{b_{\star}} = \{0\}$ then step 8.1 gives $\mathbb{R} = \{\lambda b_{\star} : \lambda \in \mathbb{Q}\}$. That set is the image of $\mathbb{Q}$ under $\lambda \mapsto \lambda b_{\star}$, and $\mathbb{Q}$ is the image of a surjection from $\mathbb{N}$, so composing gives a surjection from $\mathbb{N}$ onto $\mathbb{R}$ and $\mathbb{R}$ would be at most countable, contradicting its uncountability. So $W_{b_{\star}} \ne \{0\}$. [step 8.1, L8] ∎

## Remarks

- **How this differs from [[ex-hamel-basis-of-r-over-q]], exactly.** That item, homed on the examples page of *Linear independence, bases and dimension*, proves three things: that $\mathbb{R}$ is a vector space over the canonical copy of $\mathbb{Q}$, that it has a basis there, and that **every** such basis is infinite, together with the observation that the existence proof exhibits none. The present lemma proves the first two and does **not** prove the third: nothing above says that a Hamel basis is infinite. What it adds instead is claims 2 to 5 — the representation by injective lists, uniqueness of the coefficients along a list, the coefficient map $\Lambda_{b_{\star}}$ of a single basis vector with its kernel, and the fact that $W_{b_{\star}} \ne \{0\}$ — none of which appears there. So neither statement contains the other, and they are **not** the same statement.

The duplication of the two shared clauses is deliberate. An examples page is a leaf of this library and nothing outside it may depend on an item homed there, so a citable Hamel basis had to be built on a page that is not a leaf. The proofs of those clauses are the same proof, and no originality is claimed for them.

- **Where the choice is spent.** Once, in [[cor-every-vector-space-has-a-basis]], which runs through [[thm-zorn]]. Everything after step 3.1 is elementary linear algebra over an arbitrary field, applied to $\mathbb{R}$ over $\mathbb{Q}$. Nothing here exhibits a Hamel basis, and nothing here claims that none can be exhibited; that would be an assertion about definability, and this library has established nothing of the kind.

- **The coefficient map is the source of the pathology.** $\Lambda_{b_{\star}}$ is additive ([[def-additive-function]]) and takes only rational values, so it is not of the form $x \mapsto cx$; that is the whole of [[fs-additive-implies-linear]], and the companion page reads off from it a function unbounded on every interval, with dense graph and dense level sets.
````

## Current Wave 9 provenance determination

```json
{
  "id": "lem-hamel-basis-exists",
  "statement": "ai-altered",
  "proof": "ai-generated",
  "evidence": "semantic-source",
  "urls": [
    "https://mathworld.wolfram.com/HamelBasis.html"
  ],
  "rationale": "The source gives existence of a Hamel basis of R over Q under choice and unique finite rational coordinates. The item additionally develops coefficient maps, kernels, fibres, and their algebraic properties.",
  "alpha_concurred": false,
  "at": "2026-08-09"
}
```

## Current Wave 9 proof contract

```json
{
  "citations": [
    {
      "fact": "A1",
      "source": "def-axiom-of-choice",
      "source_section": "Definition",
      "quote": "The **Axiom of Choice** (AC) is the following statement.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "A1",
      "source": "thm-zorn",
      "source_section": "Statement",
      "quote": "Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(P, \\le)$ be a\nnonempty poset in which **every chain has an upper bound**. Then $P$ has a\nmaximal element ([[def-maximal-element]]).",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L1",
      "source": "lem-rat-embeds-dense",
      "source_section": "Statement",
      "quote": "The map $q \\mapsto \\hat q$ ([[def-real-numbers]]) is an embedding of ordered\nfields. Every real is approximated by rationals: for $x \\in \\mathbb{R}$ and\nrational $\\varepsilon > 0$ there is $q \\in \\mathbb{Q}$ with\n$|x - \\hat q| < \\hat\\varepsilon$. Consequently, strictly between any two\nreals lies a rational.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-subfield",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]), regarded as a commutative ring by\n[[lem-field-is-a-commutative-ring]]. A subset $K \\subseteq F$ is a **subfield**\nof $F$ when",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-field",
      "source_section": "Definition",
      "quote": "A **field** is a set $F$ equipped with two binary operations $+$ (addition) and\n$\\cdot$ (multiplication) and two distinguished elements $0 \\ne 1$ of $F$,\nsatisfying:",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L1",
      "source": "def-complete-ordered-field",
      "source_section": "Definition",
      "quote": "Let $F$ be an ordered field ([[def-ordered-field]]) and $S \\subseteq F$.",
      "uses": [
        "1.1"
      ]
    },
    {
      "fact": "L2",
      "source": "lem-restriction-of-scalars",
      "source_section": "Statement",
      "quote": "1. $F$ is a vector space over itself ([[def-vector-space]]): take the set to be\n   $F$, the vector addition to be the field addition, the zero vector to be\n   $0_F$, and the scalar multiplication $F \\times F \\to F$ to be the field\n   multiplication.\n2. Let $K \\subseteq F$ be a subfield ([[def-subfield]]) and let $V$ be a vector\n   space over $F$. Then $V$, with the same addition and the same zero vector and\n   with the scalar multiplication restricted to $K \\times V$, is a vector space\n   over $K$. This is called **restricting the scalars** from $F$ to $K$.\n3. In particular $F$ is a vector space over every subfield $K \\subseteq F$, with\n   the field multiplication restricted to $K \\times F$ as scalar multiplication.",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L2",
      "source": "def-vector-space",
      "source_section": "Definition",
      "quote": "Let $F$ be a field ([[def-field]]), with additive identity $0_F$, multiplicative\nidentity $1_F$, and the field axioms as stated there. A **vector space over $F$**,\nalso called an **$F$-vector space**, consists of",
      "uses": [
        "2.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-linear-combination-and-span",
      "source_section": "Definition",
      "quote": "Let $S \\subseteq V$. The set of linear subspaces of $V$ containing $S$ is\nnonempty, since $V$ itself is one, so its intersection is a linear subspace of\n$V$ by [[lem-intersection-of-linear-subspaces]]. That intersection is the **span\nof $S$**,",
      "uses": [
        "4.2",
        "4.3",
        "5.2",
        "6.1",
        "8.1",
        "9.1"
      ]
    },
    {
      "fact": "L3",
      "source": "def-linear-subspace",
      "source_section": "Definition",
      "quote": "Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). A subset\n$W \\subseteq V$ is a **linear subspace** of $V$ when",
      "uses": [
        "4.2",
        "4.3",
        "5.2",
        "6.1",
        "8.1",
        "9.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-span-monotone-and-idempotent",
      "source_section": "Statement",
      "quote": "1. **Extensive.** $S \\subseteq \\operatorname{span}(S)$.\n2. **Monotone.** If $S \\subseteq T$ then\n   $\\operatorname{span}(S) \\subseteq \\operatorname{span}(T)$.\n3. **Idempotent.** $\\operatorname{span}(\\operatorname{span}(S)) = \\operatorname{span}(S)$.\n4. $\\operatorname{span}(S) = S$ **if and only if** $S$ is a linear subspace of $V$\n   ([[def-linear-subspace]]).\n5. $\\operatorname{span}(S \\cup \\{0_V\\}) = \\operatorname{span}(S)$.",
      "uses": [
        "4.2",
        "4.3",
        "5.2",
        "6.1",
        "8.1",
        "9.1"
      ]
    },
    {
      "fact": "L3",
      "source": "lem-span-of-a-single-vector",
      "source_section": "Statement",
      "quote": "1. $\\operatorname{span}\\{v\\} = Fv$;\n2. if $v = 0_V$ then $\\operatorname{span}\\{v\\} = \\{0_V\\}$;\n3. if $v \\ne 0_V$ then, for $\\lambda, \\mu \\in F$, $\\lambda v = \\mu v$ holds only\n   when $\\lambda = \\mu$; in particular $\\lambda v = 0_V$ holds only for\n   $\\lambda = 0_F$, so $0_V$ occurs in $\\operatorname{span}\\{v\\}$ only as the\n   multiple $0_F v$, and $\\operatorname{span}\\{v\\} \\ne \\{0_V\\}$.",
      "uses": [
        "4.2",
        "4.3",
        "5.2",
        "6.1",
        "8.1",
        "9.1"
      ]
    },
    {
      "fact": "L4",
      "source": "cor-every-vector-space-has-a-basis",
      "source_section": "Statement",
      "quote": "**Assume the Axiom of Choice**, through\n[[thm-every-independent-set-extends-to-a-basis]]. Then every vector space $V$\nover a field $F$ ([[def-vector-space]]) has a basis ([[def-linear-basis]]).",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-linear-basis",
      "source_section": "Definition",
      "quote": "Consequently $A \\subseteq U$ is a basis of the vector space $U$ if and only if\n$A$ is linearly independent as a subset of $V$ and $\\operatorname{span}(A) = U$.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L4",
      "source": "def-linear-independence",
      "source_section": "Definition",
      "quote": "A subset $S \\subseteq V$ is **linearly independent** when **every injective**\nfinite list $v : n \\to S$ ([[def-injection-surjection-bijection]]) is linearly\nindependent, and **linearly dependent** otherwise, that is, when some injective\nfinite list into $S$ is linearly dependent.",
      "uses": [
        "3.1"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-dependent-iff-a-vector-lies-in-the-span-of-the-others",
      "source_section": "Statement",
      "quote": "1. $S$ is linearly dependent ([[def-linear-independence]]) **if and only if**\n   there is $s \\in S$ with $s \\in \\operatorname{span}(S \\setminus \\{s\\})$\n   ([[def-linear-combination-and-span]]).\n2. $$\\operatorname{span}(S) \\;=\\; \\Bigl\\{\\, \\sum_{i<m} \\nu_i x_i \\;:\\; m \\in \\mathbb{N},\\ \\nu : m \\to F,\\ x : m \\to S \\text{ injective} \\,\\Bigr\\} .$$\n   That is, restricting the lists in [[lem-span-is-the-set-of-linear-combinations]]\n   to **injective** lists changes nothing.",
      "uses": [
        "4.1",
        "5.3"
      ]
    },
    {
      "fact": "L5",
      "source": "lem-span-is-the-set-of-linear-combinations",
      "source_section": "Statement",
      "quote": "In particular $\\operatorname{span}(\\varnothing) = \\{0_V\\}$, and for every\n$S \\subseteq V$ the span of $S$ contains $0_V$ as the empty linear combination.",
      "uses": [
        "4.1",
        "5.3"
      ]
    },
    {
      "fact": "L6",
      "source": "thm-unique-coordinates-with-respect-to-an-ordered-basis",
      "source_section": "Statement",
      "quote": "1. **The span of the image of a list.** Whether or not $v$ is injective,\n   $$\\operatorname{span}(v[n]) \\;=\\; \\Bigl\\{\\, \\sum_{i<n}\\lambda_i v_i \\;:\\; \\lambda : n \\to F \\,\\Bigr\\} .$$\n2. **Coordinates.** $v$ is an ordered basis of $V$ ([[def-linear-basis]]) **if and\n   only if** for every $x \\in V$ there is **exactly one** $\\lambda : n \\to F$ with\n   $x = \\sum_{i<n}\\lambda_i v_i$. When that holds, this $\\lambda$ is called the\n   **coordinate list of $x$ with respect to the ordered basis $v$**, and\n   $\\lambda_i$ its **$i$-th coordinate**.",
      "uses": [
        "4.2",
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-linear-basis",
      "source_section": "Definition",
      "quote": "By claim 6 of [[lem-independent-list-is-injective]], a list is linearly\nindependent exactly when it is injective with linearly independent image, so an\nordered basis is equally described as a **linearly independent list $v : n \\to V$\nwith $\\operatorname{span}(v[n]) = V$**: the injectivity does not have to be\nimposed separately. The empty list is the ordered basis of the zero space.",
      "uses": [
        "4.2",
        "5.1"
      ]
    },
    {
      "fact": "L6",
      "source": "def-natural-numbers",
      "source_section": "Definition",
      "quote": "The set of **natural numbers** is the **smallest inductive set**\n([[def-inductive-set]]),",
      "uses": [
        "4.2",
        "5.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-sum-is-span-of-union",
      "source_section": "Statement",
      "quote": "$$\\sum_{i<n} U_i \\;=\\; \\operatorname{span}\\Bigl(\\bigcup_{i<n} U_i\\Bigr),$$",
      "uses": [
        "5.2",
        "7.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-sum-of-linear-subspaces",
      "source_section": "Definition",
      "quote": "Let $V$ be a vector space over a field $F$ ([[def-vector-space]]), let\n$n \\in \\mathbb{N}$, and let $U$ be a **finite family of linear subspaces of\n$V$**, that is a function assigning to each $i < n$ a linear subspace $U_i$ of\n$V$ ([[def-linear-subspace]]); here $n = \\{0, \\dots, n-1\\}$\n([[def-natural-numbers]], [[lem-nat-order-is-membership]]), so the family is\nindexed from $0$. Define",
      "uses": [
        "5.2",
        "7.1"
      ]
    },
    {
      "fact": "L7",
      "source": "def-internal-direct-sum",
      "source_section": "Definition",
      "quote": "That (D2) implies the pairwise condition is immediate: for $i \\ne j$ with\n$i, j < n$ we have $U_i = U^{(j)}_i \\subseteq \\sum_{i \\ne j} U_i$, since a sum of\na family contains each of its summands ([[lem-sum-is-span-of-union]]), so\n$U_j \\cap U_i \\subseteq U_j \\cap \\sum_{i \\ne j} U_i = \\{0_V\\}$, and the reverse\ninclusion holds because both are linear subspaces.",
      "uses": [
        "5.2",
        "7.1"
      ]
    },
    {
      "fact": "L7",
      "source": "lem-direct-sum-criterion",
      "source_section": "Statement",
      "quote": "- **(a)** $V = \\bigoplus_{i<n} U_i$ ([[def-internal-direct-sum]]).\n- **(b)** For every $v \\in V$ there is exactly one admissible list $u$ with\n  $\\sum_{i<n} u_i = v$.\n- **(c)** $\\sum_{i<n} U_i = V$, and the only admissible list $u$ with\n  $\\sum_{i<n} u_i = 0_V$ is the list with $u_i = 0_V$ for every $i < n$.",
      "uses": [
        "5.2",
        "7.1"
      ]
    },
    {
      "fact": "L8",
      "source": "thm-rationals-countable",
      "source_section": "Statement",
      "quote": "**No choice principle is used.** The one place where a reader expects a choice,\n\"pick a representative $a/b$ of each rational\", is exactly where\n[[lem-rat-positive-denominator]] applies: every rational *has* a representative\nwith positive denominator, so the map $(a,b) \\mapsto [(a,b)]$ defined on\n$\\mathbb{Z} \\times \\mathbb{Z}_{>0}$ is already **surjective** onto $\\mathbb{Q}$,\nand countability follows from a surjection without ever selecting a\nrepresentative. The same device handles $\\mathbb{Z}$, which is a surjective image\nof $\\mathbb{N} \\times \\mathbb{N}$ by construction ([[def-integers]]).",
      "uses": [
        "11.1"
      ]
    },
    {
      "fact": "L8",
      "source": "thm-r-uncountable",
      "source_section": "Statement",
      "quote": "Let $\\mathbb{R}$ be a complete ordered field ([[def-complete-ordered-field]]).\nThen $\\mathbb{R}$ is **uncountable** ([[def-countable]]): there is no surjection\n$\\mathbb{N} \\to \\mathbb{R}$, so $\\mathbb{R}$ is neither finite nor countably\ninfinite.",
      "uses": [
        "11.1"
      ]
    },
    {
      "fact": "L8",
      "source": "lem-countable-iff-surjection-from-n",
      "source_section": "Statement",
      "quote": "Let $A$ be a nonempty set. Then $A$ is at most countable ([[def-countable]]) if\nand only if there is a surjection $s : \\mathbb{N} \\to A$\n([[def-injection-surjection-bijection]]).",
      "uses": [
        "11.1"
      ]
    },
    {
      "fact": "L8",
      "source": "def-countable",
      "source_section": "Definition",
      "quote": "- $A$ is **finite** if $A \\approx n$ for some $n \\in \\mathbb{N}$.\n- $A$ is **countably infinite** if $A \\approx \\mathbb{N}$.\n- $A$ is **at most countable** if it is finite or countably infinite.\n- $A$ is **uncountable** if it is not at most countable.",
      "uses": [
        "11.1"
      ]
    }
  ],
  "derivations": [
    {
      "id": "lem-hamel-basis-exists-step-1-1",
      "claim": "$\\mathbb{Q} = \\{\\hat q : q \\in \\mathbb{Q}\\}$ is a subfield of $\\mathbb{R}$: it contains $\\hat 1 = 1$; it is closed under differences and products, since $\\hat p - \\hat q = \\widehat{p-q}$ and $\\hat p\\,\\hat q = \\widehat{pq}$; and if $\\hat q \\ne 0$ then $q \\ne 0$ and $\\hat q^{-1} = \\widehat{q^{-1}}$ lies in it. [L1]",
      "step": "1.1",
      "inputs": [
        "L1"
      ]
    },
    {
      "id": "lem-hamel-basis-exists-step-2-1",
      "claim": "$\\mathbb{R}$ is a vector space over itself, so restricting the scalars to the subfield $\\mathbb{Q}$ makes $\\mathbb{R}$ a vector space over $\\mathbb{Q}$, with the field addition as vector addition and the field multiplication restricted to $\\mathbb{Q} \\times \\mathbb{R}$ as scalar multiplication. [step 1.1, L2]",
      "step": "2.1",
      "inputs": [
        "1.1",
        "L2"
      ]
    },
    {
      "id": "lem-hamel-basis-exists-step-3-1",
      "claim": "Claim 1: assuming the Axiom of Choice, that vector space has a basis $B$, a linearly independent subset of $\\mathbb{R}$ with $\\operatorname{span}(B) = \\mathbb{R}$. [step 2.1, A1, L4]",
      "step": "3.1",
      "inputs": [
        "2.1",
        "A1",
        "L4"
      ]
    },
    {
      "id": "lem-hamel-basis-exists-step-4-1",
      "claim": "Claim 2: since $\\operatorname{span}(B) = \\mathbb{R}$ and the span of a set is already the set of linear combinations of injective finite lists into it, every real $x$ is $\\sum_{i<n}\\lambda_i b_i$ with $b : n \\to B$ injective and $\\lambda : n \\to \\mathbb{Q}$. [step 3.1, L5]",
      "step": "4.1",
      "inputs": [
        "3.1",
        "L5"
      ]
    },
    {
      "id": "lem-hamel-basis-exists-step-4-2",
      "claim": "Claim 3: let $b : n \\to B$ be injective and put $U := \\operatorname{span}(b[n])$, a linear subspace of $\\mathbb{R}$. The list $b$ is linearly independent, since $B$ is a linearly independent subset and $b$ is an injective finite list into $B$; its image $b[n]$ spans $U$ by construction, so $b[n]$ is a basis of $U$ and $b$ is an ordered basis of $U$, independence and spanning being the same conditions read in $U$ as in $\\mathbb{R}$. [step 3.1, L3, L6]",
      "step": "4.2",
      "inputs": [
        "3.1",
        "L3",
        "L6"
      ]
    },
    {
      "id": "lem-hamel-basis-exists-step-4-3",
      "claim": "Fix $b_{\\star} \\in B$ and put $U_{0} := \\operatorname{span}\\{b_{\\star}\\} = \\{\\, \\lambda b_{\\star} : \\lambda \\in \\mathbb{Q} \\,\\}$ and $U_{1} := W_{b_{\\star}} = \\operatorname{span}(B \\setminus \\{b_{\\star}\\})$, both linear subspaces of $\\mathbb{R}$. [step 3.1, L3, construct]",
      "step": "4.3",
      "inputs": [
        "3.1",
        "L3"
      ]
    },
    {
      "id": "lem-hamel-basis-exists-step-5-1",
      "claim": "With $b$ and $U$ as in step 4.2, the coordinate theorem applied to the vector space $U$ says that every $x \\in U$ is $\\sum_{i<n}\\lambda_i b_i$ for exactly one $\\lambda : n \\to \\mathbb{Q}$; in particular $\\sum_{i<n}\\lambda_i b_i = \\sum_{i<n}\\mu_i b_i$ forces $\\lambda = \\mu$, which is claim 3. [step 4.2, L6]",
      "step": "5.1",
      "inputs": [
        "4.2",
        "L6"
      ]
    },
    {
      "id": "lem-hamel-basis-exists-step-5-2",
      "claim": "$U_{0} + U_{1} = \\mathbb{R}$. Indeed $U_{0} + U_{1} = \\operatorname{span}(U_{0} \\cup U_{1})$; the set $B$ is contained in $U_{0} \\cup U_{1}$, since $b_{\\star} \\in U_{0}$ and $B \\setminus \\{b_{\\star}\\} \\subseteq U_{1}$ by extensiveness of the span, so $\\mathbb{R} = \\operatorname{span}(B) \\subseteq \\operatorname{span}(U_{0} \\cup U_{1})$ by monotonicity; and $U_{0} \\cup U_{1} \\subseteq \\operatorname{span}(B)$, again by monotonicity, so $\\operatorname{span}(U_{0} \\cup U_{1}) \\subseteq \\operatorname{span}(\\operatorname{span}(B)) = \\operatorname{span}(B) = \\mathbb{R}$ by idempotence. [step 3.1, step 4.3, L3, L7]",
      "step": "5.2",
      "inputs": [
        "3.1",
        "4.3",
        "L3",
        "L7"
      ]
    },
    {
      "id": "lem-hamel-basis-exists-step-5-3",
      "claim": "$b_{\\star} \\ne 0$ and $b_{\\star} \\notin U_{1}$. If $b_{\\star}$ lay in $\\operatorname{span}(B \\setminus \\{b_{\\star}\\})$ then $B$ would be linearly dependent, contrary to step 3.1; and $0 \\in B$ would likewise make $B$ dependent, since $0 \\in \\operatorname{span}(B \\setminus \\{0\\})$, every span containing the zero vector. [step 3.1, step 4.3, L5]",
      "step": "5.3",
      "inputs": [
        "3.1",
        "4.3",
        "L5"
      ]
    },
    {
      "id": "lem-hamel-basis-exists-step-6-1",
      "claim": "$U_{0} \\cap U_{1} = \\{0\\}$. Let $z \\in U_{0} \\cap U_{1}$ and write $z = \\lambda b_{\\star}$ with $\\lambda \\in \\mathbb{Q}$. If $\\lambda \\ne 0$ then $b_{\\star} = \\lambda^{-1}z \\in U_{1}$, because $U_{1}$ is a linear subspace and $\\lambda^{-1} \\in \\mathbb{Q}$, contradicting step 5.3; so $\\lambda = 0$ and $z = 0$. [step 4.3, step 5.3, L3]",
      "step": "6.1",
      "inputs": [
        "5.3",
        "4.3",
        "L3"
      ]
    },
    {
      "id": "lem-hamel-basis-exists-step-7-1",
      "claim": "Hence $\\mathbb{R} = U_{0} \\oplus U_{1}$: condition (D1) is step 5.2, and condition (D2) is step 6.1, since for the two-member family the sum of the other summands is $U_{1}$ in the one case and $U_{0}$ in the other. By the direct-sum criterion every real $x$ is $u_{0} + u_{1}$ with $u_{0} \\in U_{0}$ and $u_{1} \\in U_{1}$ in exactly one way. [step 5.2, step 6.1, L7]",
      "step": "7.1",
      "inputs": [
        "5.2",
        "6.1",
        "L7"
      ]
    },
    {
      "id": "lem-hamel-basis-exists-step-8-1",
      "claim": "Writing $u_{0} = \\lambda b_{\\star}$, the scalar $\\lambda \\in \\mathbb{Q}$ is determined by $u_{0}$, since $b_{\\star} \\ne 0$; so $\\Lambda_{b_{\\star}}(x) := \\lambda$ is a well-defined map $\\mathbb{R} \\to \\mathbb{Q}$, and $x = \\Lambda_{b_{\\star}}(x)\\,b_{\\star} + w$ with $w \\in W_{b_{\\star}}$ in exactly one way. [step 5.3, step 7.1, L3]",
      "step": "8.1",
      "inputs": [
        "5.3",
        "7.1",
        "L3"
      ]
    },
    {
      "id": "lem-hamel-basis-exists-step-9-1",
      "claim": "$\\Lambda_{b_{\\star}}$ is additive and $\\mathbb{Q}$-homogeneous: if $x = \\lambda b_{\\star} + w$ and $y = \\mu b_{\\star} + w'$ with $w, w' \\in W_{b_{\\star}}$, then $x + y = (\\lambda + \\mu)b_{\\star} + (w + w')$ with $w + w' \\in W_{b_{\\star}}$, and $qx = (q\\lambda)b_{\\star} + qw$ with $qw \\in W_{b_{\\star}}$ for $q \\in \\mathbb{Q}$, both because $W_{b_{\\star}}$ is a linear subspace; uniqueness in step 8.1 then identifies the coefficients. [step 8.1, L3]",
      "step": "9.1",
      "inputs": [
        "8.1",
        "L3"
      ]
    },
    {
      "id": "lem-hamel-basis-exists-step-10-1",
      "claim": "$\\Lambda_{b_{\\star}}(b_{\\star}) = 1$, from the representation $b_{\\star} = 1\\cdot b_{\\star} + 0$; the range of $\\Lambda_{b_{\\star}}$ is all of $\\mathbb{Q}$, since $\\Lambda_{b_{\\star}}(q b_{\\star}) = q$ for every $q \\in \\mathbb{Q}$; and $\\Lambda_{b_{\\star}}(x) = 0$ holds exactly when $x = 0\\cdot b_{\\star} + w = w \\in W_{b_{\\star}}$. Claim 4 is proved. [step 8.1, step 9.1]",
      "step": "10.1",
      "inputs": [
        "8.1",
        "9.1"
      ]
    },
    {
      "id": "lem-hamel-basis-exists-step-11-1",
      "claim": "Claim 5: if $W_{b_{\\star}} = \\{0\\}$ then step 8.1 gives $\\mathbb{R} = \\{\\lambda b_{\\star} : \\lambda \\in \\mathbb{Q}\\}$. That set is the image of $\\mathbb{Q}$ under $\\lambda \\mapsto \\lambda b_{\\star}$, and $\\mathbb{Q}$ is the image of a surjection from $\\mathbb{N}$, so composing gives a surjection from $\\mathbb{N}$ onto $\\mathbb{R}$ and $\\mathbb{R}$ would be at most countable, contradicting its uncountability. So $W_{b_{\\star}} \\ne \\{0\\}$. [step 8.1, L8] ∎",
      "step": "11.1",
      "inputs": [
        "8.1",
        "L8"
      ]
    }
  ],
  "routine_steps": [],
  "boundaries": [
    {
      "case": "empty",
      "status": "not_applicable",
      "reason": "The statement forms no empty set, empty family, or empty finite sum whose value affects the claim."
    },
    {
      "case": "zero",
      "status": "checked",
      "evidence": "step 1.1: the zero-valued or zero-index boundary is handled explicitly, or is included without division by it."
    },
    {
      "case": "one",
      "status": "checked",
      "evidence": "step 1.1: the unit or first-index boundary is included explicitly in the stated construction."
    },
    {
      "case": "degenerate",
      "status": "not_applicable",
      "reason": "The claim is not parametrised by an interval, finite range, or object with a degenerate case."
    },
    {
      "case": "endpoints",
      "status": "not_applicable",
      "reason": "No interval endpoint or one-sided domain boundary occurs in the statement."
    },
    {
      "case": "nonempty-choice",
      "status": "checked",
      "evidence": "step 4.3: each existential witness used here is supplied by the cited existence result or by the displayed formula/construction."
    },
    {
      "case": "iff-forward",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional or equivalence."
    },
    {
      "case": "iff-reverse",
      "status": "not_applicable",
      "reason": "The statement is not a biconditional or equivalence."
    }
  ]
}
```

## Generated cross-batch/cross-level relationships sourced by this target

```json
[
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-vector-space",
    "declared_target": "def-vector-space",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-restriction-of-scalars",
    "declared_target": "lem-restriction-of-scalars",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-subfield",
    "declared_target": "def-subfield",
    "target_statement_provenance": "ai-altered",
    "targetPage": "rings-subrings-and-integral-domains",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-linear-combination-and-span",
    "declared_target": "def-linear-combination-and-span",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-span-is-the-set-of-linear-combinations",
    "declared_target": "lem-span-is-the-set-of-linear-combinations",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-dependent-iff-a-vector-lies-in-the-span-of-the-others",
    "declared_target": "lem-dependent-iff-a-vector-lies-in-the-span-of-the-others",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-span-monotone-and-idempotent",
    "declared_target": "lem-span-monotone-and-idempotent",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-span-of-a-single-vector",
    "declared_target": "lem-span-of-a-single-vector",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-sum-is-span-of-union",
    "declared_target": "lem-sum-is-span-of-union",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-sum-of-linear-subspaces",
    "declared_target": "def-sum-of-linear-subspaces",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-internal-direct-sum",
    "declared_target": "def-internal-direct-sum",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-direct-sum-criterion",
    "declared_target": "lem-direct-sum-criterion",
    "target_statement_provenance": "ai-altered",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-linear-subspace",
    "declared_target": "def-linear-subspace",
    "target_statement_provenance": "literature-derived",
    "targetPage": "vector-spaces-and-subspaces",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-linear-independence",
    "declared_target": "def-linear-independence",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-linear-basis",
    "declared_target": "def-linear-basis",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "cor-every-vector-space-has-a-basis",
    "declared_target": "cor-every-vector-space-has-a-basis",
    "target_statement_provenance": "literature-derived",
    "targetPage": "linear-independence-bases-and-dimension",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "thm-unique-coordinates-with-respect-to-an-ordered-basis",
    "declared_target": "thm-unique-coordinates-with-respect-to-an-ordered-basis",
    "target_statement_provenance": "ai-altered",
    "targetPage": "linear-independence-bases-and-dimension",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-axiom-of-choice",
    "declared_target": "def-axiom-of-choice",
    "target_statement_provenance": "literature-derived",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "thm-zorn",
    "declared_target": "thm-zorn",
    "target_statement_provenance": "literature-derived",
    "targetPage": "order-zorn-and-the-axiom-of-choice",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
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
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "thm-r-uncountable",
    "declared_target": "thm-r-uncountable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "lem-countable-iff-surjection-from-n",
    "declared_target": "lem-countable-iff-surjection-from-n",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-countable",
    "declared_target": "def-countable",
    "target_statement_provenance": "ai-altered",
    "targetPage": "countability-and-uncountability",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-field",
    "declared_target": "def-field",
    "target_statement_provenance": "ai-altered",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-complete-ordered-field",
    "declared_target": "def-complete-ordered-field",
    "target_statement_provenance": "literature-derived",
    "targetPage": "foundations-of-the-real-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-injection-surjection-bijection",
    "declared_target": "def-injection-surjection-bijection",
    "target_statement_provenance": "ai-altered",
    "targetPage": "relations-functions-and-quotients",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  },
  {
    "source": "lem-hamel-basis-exists",
    "sourcePage": "monotone-functions-and-discontinuities",
    "batch": "wave9-real-analysis",
    "target": "def-natural-numbers",
    "declared_target": "def-natural-numbers",
    "target_statement_provenance": "literature-derived",
    "targetPage": "construction-of-the-natural-numbers",
    "targetBatch": null,
    "edge_type": "dependency",
    "kind": "published-backward",
    "requires_semantic_audit": true
  }
]
```

## Complete current text of every declared or cited item (31)

### `cor-every-vector-space-has-a-basis`

````markdown
---
id: cor-every-vector-space-has-a-basis
kind: corollary
title: "Every vector space has a basis"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-every-independent-set-extends-to-a-basis, def-linear-basis, def-linear-independence, def-linear-combination-and-span, lem-span-monotone-and-idempotent, def-linear-subspace, def-vector-space, def-field]
justified_by: []
aliases: [cor-basis-exists]
landmark: true
short: "every vector space has a basis"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Basis (linear algebra) (Wikipedia) — where A. Blass, Existence of bases implies the axiom of choice, Contemporary Mathematics 31 (1984), 31-33, is recorded"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Cambridge University Press excerpt: Vector spaces and bases"
      url: "https://assets.cambridge.org/97810092/43902/excerpt/9781009243902_excerpt.pdf"
pipeline_run: null
---

## Statement

**Assume the Axiom of Choice**, through
[[thm-every-independent-set-extends-to-a-basis]]. Then every vector space $V$
over a field $F$ ([[def-vector-space]]) has a basis ([[def-linear-basis]]).

In particular the zero space has a basis, namely $\varnothing$.

## Facts & Assumptions

**Given:** A field $F$ and a vector space $V$ over $F$.

[L1] $\varnothing$ is linearly independent ([[def-linear-independence]]).

[L2] $\operatorname{span}(T) = T$ if and only if $T$ is a linear subspace of $V$, and $V$ is a linear subspace of itself ([[lem-span-monotone-and-idempotent]], claim 4, [[def-linear-subspace]], [[def-linear-combination-and-span]]).

[L3] If $L \subseteq S \subseteq V$ with $L$ linearly independent and $\operatorname{span}(S) = V$, there is a basis $B$ of $V$ with $L \subseteq B \subseteq S$ ([[thm-every-independent-set-extends-to-a-basis]]).

## Proof

**Proof technique:** direct.

1.1 $V$ is a linear subspace of itself, so $\operatorname{span}(V) = V$: the whole space satisfies the three closure conditions trivially, and the span of a linear subspace is that subspace. [L2]

1.2 The empty set is linearly independent and $\varnothing \subseteq V \subseteq V$. [L1]

2.1 By steps 1.1 and 1.2 the extension theorem applies with $L := \varnothing$ and $S := V$, and yields a basis $B$ of $V$ with $\varnothing \subseteq B \subseteq V$; so $V$ has a basis. When $V = \{0_V\}$ the basis produced is $\varnothing$, the only linearly independent subset of that space. [step 1.1, step 1.2, L3] ∎

## Remarks

- **The converse is a theorem of Blass, and it is not proved here.** The implication proved above runs from the Axiom of Choice, through Zorn's lemma, to the existence of bases. The opposite implication also holds: the statement that every vector space over every field has a basis implies the Axiom of Choice. That is a hard result of Andreas Blass, published in 1984 as "Existence of bases implies the axiom of choice"; this library does not prove it, does not use it, and nothing here rests on it. It is recorded because it fixes the exact strength of the statement above: existence of bases is not merely a consequence of choice, it is equivalent to it over ZF. The reference is listed in the sources of this item.

- **Where the choice is spent.** In [[thm-zorn]], once, and nowhere else on this page. Every other existence statement here is explicit: the standard basis of $F^{n}$ ([[lem-standard-basis-of-f-n]]) is written down, and so is the infinite basis of the eventually zero families on the companion page. The contrast between those and the present corollary — which produces a basis of $\mathbb{R}$ over $\mathbb{Q}$ while exhibiting none, as the companion page records — is the point of keeping them on the same page.

- **This says nothing about the size of the basis.** For a space with no finite basis, [[def-dimension]] assigns no dimension at all, and the corollary correspondingly asserts only existence.
````

### `def-additive-function`

````markdown
---
id: def-additive-function
kind: definition
title: "Cauchy's functional equation $f(x+y) = f(x) + f(y)$, and the additive functions $\\mathbb{R} \\to \\mathbb{R}$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
  evidence: exact-source
deps: [def-complete-ordered-field, def-ordered-field, def-field]
justified_by: []
aliases: [def-cauchy-functional-equation]
landmark: true
short: "additive function; Cauchy's equation"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
pipeline_run: null
---

## Definition

Let $\mathbb{R}$ be the complete ordered field ([[def-complete-ordered-field]],
[[def-ordered-field]], [[def-field]]). A function $f : \mathbb{R} \to \mathbb{R}$
is **additive** when it satisfies **Cauchy's functional equation**

$$f(x + y) \;=\; f(x) + f(y) \qquad \text{for all } x, y \in \mathbb{R}.$$

Equivalently, $f$ is a homomorphism of the additive group of $\mathbb{R}$ into
itself.

**The linear maps are additive.** For a fixed real $c$ the function
$x \mapsto cx$ satisfies $c(x+y) = cx + cy$ by distributivity, so it is
additive. Cauchy's question is whether these are the only additive functions,
and the answer is a genuine dichotomy: with any one of a short list of
regularity conditions the answer is yes
([[thm-cauchy-functional-equation-regularity]]), and without any of them it is
no ([[fs-additive-implies-linear]]).

**No continuity, no monotonicity and no measurability is part of the
definition.** The equation is purely algebraic, and every regularity hypothesis
below is stated explicitly where it is used.

**A first consequence, recorded here because it is used immediately.** An
additive $f$ satisfies $f(0) = 0$: putting $x = y = 0$ gives
$f(0) = f(0) + f(0)$, and subtracting $f(0)$ gives $f(0) = 0$. The remaining
elementary consequences, including $f(-x) = -f(x)$ and $\mathbb{Q}$-homogeneity,
are collected in [[lem-additive-is-q-linear]].
````

### `def-axiom-of-choice`

````markdown
---
id: def-axiom-of-choice
kind: definition
title: "The Axiom of Choice"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-choice-function]
justified_by: []
forward_refs: [ex-russells-socks, rem-choice-strengths, fs-zorn-provable-in-zf,
               lem-finite-choice, rem-choice-ledger]
external_refs: [rem-godel-constructible-universe, rem-cohen-forcing-ac-independent]
aliases: [def-ac]
landmark: true
short: "axiom of choice"
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
    - title: "I. Khatchatourian, The Axiom of Choice (University of Toronto MAT327 notes)"
      url: "https://www.math.utoronto.ca/ivan/mat327/docs/notes/11-choice.pdf"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Choice function (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Choice_function"
pipeline_run: null
---

## Definition

The **Axiom of Choice** (AC) is the following statement.

> Every family of nonempty sets has a choice function
> ([[def-choice-function]]).

Written out: for every set $\mathcal{F}$ all of whose members are nonempty,
there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for
all $S \in \mathcal{F}$.

An equivalent formulation is that a product of nonempty sets is nonempty: if
$X_i \ne \emptyset$ for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$.
Here $\prod_{i \in I} X_i$ is the set of functions $f$ with domain $I$ such that
$f(i) \in X_i$ for every $i \in I$; when a family of nonempty sets is indexed by
itself, such an $f$ is precisely a choice function for it.

## Remarks

- **This is an axiom, not a theorem, and it is deliberately not derived here.**
  **Assume ZF is consistent.** Then AC is independent of the axioms of
  Zermelo–Fraenkel set theory: Gödel (1938) showed that ZF, if consistent, cannot
  refute it ([[rem-godel-constructible-universe]]), and Cohen (1963) showed that
  ZF, if consistent, cannot prove it ([[rem-cohen-forcing-ac-independent]]). The
  consistency hypothesis is not decoration and cannot be dropped: an inconsistent
  ZF proves everything, AC included, so both halves of the independence would
  fail. Nor can the hypothesis be discharged inside ZF. Both directions also
  require machinery (the constructible universe and forcing) that this library
  does not yet contain, so both are recorded with references rather than proved.
  [[fs-zorn-provable-in-zf]] carries the same consistency assumption explicitly
  in its Given; [[rem-choice-ledger]] records the weaker choice principles.
- Being an axiom, AC carries no well-definedness obligation, which is why this
  item has no `justified_by`.
- The case of a family listed by a natural number, which is the finite case once
  finiteness is defined, is a theorem of ZF and needs no axiom
  ([[lem-finite-choice]]). AC is exactly the extension of that theorem to
  arbitrary index sets, and the gap between the two is not a matter of degree:
  [[ex-russells-socks]] exhibits the difference concretely.
- "ZFC" abbreviates ZF together with AC. A result that invokes AC should say so
  where it is stated, so that a reader can tell which theorems are choice-free;
  that bookkeeping is the purpose of [[rem-choice-ledger]].
  [[rem-choice-strengths]] carries the narrower question of what the ultrafilter
  lemma costs, and on cited authority, and under the hypothesis that ZF is
  consistent, places that principle strictly between ZF and AC.
````

### `def-complete-ordered-field`

````markdown
---
id: def-complete-ordered-field
kind: definition
title: "Complete ordered field (least-upper-bound property)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-ordered-field]
aliases: [def-dedekind-complete-field]
landmark: true
short: "complete ordered field"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 8"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "University of Wisconsin Math 521 notes: Real analysis"
      url: "https://people.math.wisc.edu/~jwrobbin/521dir/521.pdf"
pipeline_run: null
---

## Definition

Let $F$ be an ordered field ([[def-ordered-field]]) and $S \subseteq F$.

- $u \in F$ is an **upper bound** of $S$ if $s \le u$ for all $s \in S$; $S$ is
  **bounded above** if it has an upper bound.
- $u \in F$ is a **least upper bound** (or **supremum**, $\sup S$) of $S$ if $u$
  is an upper bound of $S$ and $u \le u'$ for every upper bound $u'$ of $S$.

$F$ is a **complete ordered field** (equivalently, $F$ has the
**least-upper-bound property**, or is **Dedekind complete**) if every nonempty
$S \subseteq F$ that is bounded above has a least upper bound in $F$.

## Remarks

- A least upper bound, if it exists, is unique (two least upper bounds are each
  $\le$ the other, so equal by antisymmetry of the order).
- Applying the property to $\{-s : s \in S\}$ yields the dual **greatest lower
  bound** (infimum) property, so the two are equivalent.
- The Dedekind-cut reals have this property by construction
  ([[thm-dedekind-complete]]); the Cauchy-sequence reals acquire it via
  [[cor-cauchy-reals-lub-complete]]. This definition is the target for the
  uniqueness theorem [[thm-uniqueness-complete-ordered-field]].
````

### `def-countable`

````markdown
---
id: def-countable
kind: definition
title: "Finite, countably infinite, countable, uncountable"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-equinumerous, def-natural-numbers, def-nat-order, lem-nat-order-is-membership, lem-pigeonhole]
justified_by: []
aliases: [def-finite-set, def-countably-infinite, def-uncountable]
landmark: true
short: "finite, countable, uncountable"
verification:
  precheck: n/a
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
    - title: "Finite set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Finite_set"
    - title: "T. Tao, Analysis I, 3rd ed., §3.6 and §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Recall that a natural number is a von Neumann natural
([[def-natural-numbers]]): $0 = \varnothing$ and $\sigma(n) = n \cup \{n\}$, so
that

$$n = \{\, m \in \mathbb{N} : m < n \,\} = \{0, 1, \dots, n-1\}$$

is itself the set of its predecessors. Here $<$ is the order of
[[def-nat-order]], which is defined additively, so the displayed identity is a
theorem and not a convention: it is [[lem-nat-order-is-membership]], proved
immediately above. Let $A$ be a set, and let $\approx$ be equinumerosity
([[def-equinumerous]]).

- $A$ is **finite** if $A \approx n$ for some $n \in \mathbb{N}$.
- $A$ is **countably infinite** if $A \approx \mathbb{N}$.
- $A$ is **at most countable** if it is finite or countably infinite.
- $A$ is **uncountable** if it is not at most countable.

## Remarks

- **Convention: in this library "countable" alone always means "at most
  countable"**, so a finite set is countable. This is the convention of Halmos
  and of Tao, and it is the one that makes the theorems on this page read
  cleanly: subsets, products and unions of countable sets are countable, with no
  finite/infinite case split in the statement. The competing convention, used by
  Rudin among others, reserves "countable" for "countably infinite" and says
  "at most countable" for the disjunction. Under that convention every statement
  below still holds after replacing "countable" with "at most countable", but
  several would become false as literally written. Where the distinction
  matters, the long forms "countably infinite" and "at most countable" are used
  in full, and "uncountable" always means "not at most countable", on which the
  two conventions agree.

- **The three classes are exhaustive by construction**: every set is finite,
  countably infinite, or uncountable, since "uncountable" is defined as the
  negation of the disjunction. That they are also mutually exclusive, that is,
  that no set is both finite and countably infinite, is a genuine theorem
  amounting to $\mathbb{N} \not\approx n$ for every $n \in \mathbb{N}$, and it is
  proved immediately above as claim 4 of [[lem-pigeonhole]]. So a countably
  infinite set is never finite, and "$A$ is infinite", meaning not finite, is
  implied by $A \approx \mathbb{N}$. The same lemma pins down finiteness itself:
  by its claim 3 a finite set is equinumerous with exactly one natural number, so
  the number of elements of a finite set is well defined, and by its claim 5 no
  finite set is equinumerous with a proper subset of itself.

- **What the exclusivity is and is not used for below.** Nothing on this page
  needs it in order to run: the infinitude of $\mathbb{Q}$, for instance, is
  obtained by exhibiting a bijection $\mathbb{Q} \approx \mathbb{N}$ directly
  ([[thm-rationals-countable]]) rather than by ruling out finiteness. It is used
  where the two notions of infinity are compared
  ([[fs-infinite-has-countable-subset-in-zf]]) and where the continuum hypothesis
  is instantiated at $\mathbb{N}$ ([[rem-continuum-hypothesis]]), both of which
  need $\mathbb{N}$ to be infinite as a fact rather than as a convention.

- **$0$ and the empty set.** $0 = \varnothing$, and $A \approx 0$ holds exactly
  when $A = \varnothing$, so the empty set is finite. This matters in the proofs
  below, where the empty case is always separated out: a surjection
  $\mathbb{N} \to A$ cannot exist when $A = \varnothing$, which is why
  [[lem-countable-iff-surjection-from-n]] assumes $A$ nonempty.

- **Countability is a property of a set alone**, not of a set with structure. In
  particular $\mathbb{Q}$ is countable while carrying a dense order, and
  $\mathbb{R}$ is uncountable; neither statement says anything on its own about
  the order or the arithmetic those sets carry.
````

### `def-field`

````markdown
---
id: def-field
kind: definition
title: "Field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: []
justified_by: [lem-of-inverse-unique]
aliases: []
landmark: false
short: "field"
verification:
  precheck: n/a
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-28
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "M. Spivak, Calculus, 4th ed., Ch. 1"
      url: "https://en.wikipedia.org/wiki/Michael_Spivak"
    - title: "Elias Zakon, Mathematical Analysis: Axioms and Basic Definitions"
      url: "https://math.libretexts.org/Bookshelves/Analysis/Mathematical_Analysis_%28Zakon%29/02%3A_Real_Numbers_and_Fields/2.01%3A_Axioms_and_Basic_Definitions"
pipeline_run: null
---

## Definition

A **field** is a set $F$ equipped with two binary operations $+$ (addition) and
$\cdot$ (multiplication) and two distinguished elements $0 \ne 1$ of $F$,
satisfying:

- **(A)** $(F, +)$ is an abelian group with identity $0$: addition is
  associative and commutative, $x + 0 = x$ for all $x$, and every $x$ has an
  additive inverse $-x$ with $x + (-x) = 0$.
- **(M)** Multiplication is associative and commutative **on all of $F$**, and
  $x \cdot 1 = x$ for every $x \in F$; moreover $(F \setminus \{0\}, \cdot)$ is an
  abelian group with identity $1$, so every $x \ne 0$ has a multiplicative inverse
  $x^{-1}$ with $x \cdot x^{-1} = 1$.
- **(D)** Multiplication distributes over addition: $x \cdot (y + z) = x\cdot y + x\cdot z$.

We write $x - y := x + (-y)$ and $x/y := x \cdot y^{-1}$ (for $y \ne 0$), and
abbreviate $x \cdot y$ as $xy$.

## Remarks

- The rationals $\mathbb{Q}$ ([[thm-rat-field]]) and both constructions of the
  reals ([[thm-reals-field]], [[thm-reals-dedekind-field]]) are fields. This
  definition states the field axioms once, abstractly, so that every field fact
  proved from them applies to all of these at once.
- The requirement $0 \ne 1$ excludes the trivial one-element structure.
- **Why (M) quantifies over all of $F$ explicitly** (amended 2026-07-28, owner
  approved). An earlier wording headed (M) with the group
  $(F \setminus \{0\}, \cdot)$ alone, and under that strict reading the axioms
  do not pin down the products $0 \cdot y$: take $\mathbb{F}_2$ and redefine
  $0 \cdot y := y$, which leaves (A) untouched, leaves
  $(F \setminus \{0\}, \cdot)$ the trivial group, and satisfies (D) in all eight
  instances, yet has $0 \cdot 1 = 1$ — making [[lem-of-zero-mult]] false in a
  purported model of the axioms. Associativity, commutativity and
  $x \cdot 1 = x$ are therefore asserted on **all** of $F$, the element $0$
  included. Commutativity on all of $F$ is also what turns (D) into its
  right-hand form $(y + z) \cdot x = y \cdot x + z \cdot x$, which
  [[lem-of-zero-mult]] uses.
- The identities $0, 1$ and the inverses $-x, x^{-1}$ are unique
  ([[lem-of-inverse-unique]]), so writing them as single-valued notation, and
  the abbreviations $x - y := x + (-y)$ and $x/y := x y^{-1}$, are legitimate.
````

### `def-injection-surjection-bijection`

````markdown
---
id: def-injection-surjection-bijection
kind: definition
title: "Injection, surjection, bijection"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-function, def-image-and-preimage-under-a-relation]
justified_by: []
aliases: [def-injective, def-surjective, def-bijective]
landmark: false
short: "injective, surjective, bijective"
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
    - title: "J. K. Hunter, An Introduction to Real Analysis"
      url: "https://www.math.ucdavis.edu/~hunter/intro_analysis_pdf/intro_analysis.pdf"
    - title: "J. Lebl, Basic Analysis: Introduction to Real Analysis, basic set theory"
      url: "https://www.jirka.org/ra/html/sec_basicset.html"
    - title: "Bijection, injection and surjection (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bijection,_injection_and_surjection"
    - title: "T. Tao, Analysis I, 3rd ed., §3.3 (Functions)"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Definition

Let $A$ and $B$ be sets and let $f : A \to B$ be a function ([[def-function]]).

- $f$ is **injective** (one-to-one) if $f(x) = f(y)$ implies $x = y$, for all
  $x, y \in A$.
- $f$ is **surjective** (onto) if for every $b \in B$ there is some $x \in A$
  with $f(x) = b$; equivalently, the image $f[A] := \{ f(x) : x \in A \}$ equals
  $B$.
- $f$ is **bijective** if it is both injective and surjective.

For $S \subseteq A$ we write $f[S] = \{ f(x) : x \in S \}$ for the image of $S$,
and for $T \subseteq B$ we write $f^{-1}[T] = \{ x \in A : f(x) \in T \}$ for the
preimage of $T$; these are the image and preimage of a set under $f$ read as a
relation ([[def-image-and-preimage-under-a-relation]]).

## Remarks

- **Composition.** If $f : A \to B$ and $g : B \to C$ are both injective then so
  is $g \circ f$, since $g(f(x)) = g(f(y))$ forces $f(x) = f(y)$ and then
  $x = y$; if both are surjective then so is $g \circ f$, since any $c \in C$ is
  $g(b)$ for some $b \in B$ and that $b$ is $f(a)$ for some $a \in A$. Hence a
  composition of bijections is a bijection. These verifications, together with the
  two partial converses, are
  [[prop-composition-preserves-injectivity-surjectivity-and-bijectivity]].

- **Inverses.** $f : A \to B$ is bijective exactly when there is a function
  $f^{-1} : B \to A$ with $f^{-1}(f(x)) = x$ for all $x \in A$ and
  $f(f^{-1}(b)) = b$ for all $b \in B$; that two-sided inverse is unique, and it
  is itself a bijection. Injectivity alone gives a bijection from $A$ onto the
  image $f[A]$, and hence an inverse defined on $f[A]$ only. No choice principle
  is involved: the value $f^{-1}(b)$ is the *unique* $x$ with $f(x) = b$, so it
  is determined rather than selected. The full statement, with the uniqueness of the
  two-sided inverse, is
  [[thm-a-function-is-a-bijection-exactly-when-it-has-a-two-sided-inverse]]; the
  corresponding statement for an arbitrary surjection is not available at this point
  in the reading order, because a right inverse for every surjection is equivalent
  to the Axiom of Choice.

- **What this item does and does not do.** A function $A \to B$ is a set of ordered
  pairs, single valued and total on $A$ ([[def-function]]); ordered pairs, Cartesian
  products, images and preimages are fixed by [[def-ordered-pair]],
  [[def-cartesian-product]] and [[def-image-and-preimage-under-a-relation]]. This
  item only fixes the three adjectives and the notation used for them. Nothing here
  is proved.
````

### `def-internal-direct-sum`

````markdown
---
id: def-internal-direct-sum
kind: definition
title: "Internal direct sum $V = \\bigoplus_{i<n} U_i$: the sum is everything and each summand meets the sum of the others only in $0_V$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sum-of-linear-subspaces, lem-sum-is-span-of-union, def-linear-subspace, def-vector-space, lem-vector-space-elementary-consequences, def-natural-numbers, lem-nat-order-is-membership]
justified_by: []
aliases: [def-direct-sum-of-subspaces]
landmark: true
short: "$V = \\bigoplus_{i<n} U_i$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Direct sum of modules (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Direct_sum_of_modules"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 1"
      url: "https://linear.axler.net/"
    - title: "Direct sum (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Direct_sum"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]), let
$n \in \mathbb{N}$, and let $U$ be a finite family of linear subspaces $U_i$ of
$V$ indexed by $i < n$ ([[def-linear-subspace]],
[[def-sum-of-linear-subspaces]]); as everywhere on this page the index runs over
the von Neumann natural $n = \{0, \dots, n-1\}$ ([[def-natural-numbers]],
[[lem-nat-order-is-membership]]).

**The sum of the other summands.** The set $\{0_V\}$ is a linear subspace of $V$:
it contains $0_V$, it is closed under addition since $0_V + 0_V = 0_V$, and it is
closed under scalar multiplication since $\lambda 0_V = 0_V$
([[lem-vector-space-elementary-consequences]]). So for each $j < n$ the family
$U^{(j)}$ defined by

$$U^{(j)}_i := U_i \quad (i \ne j), \qquad U^{(j)}_j := \{0_V\}$$

is again a finite family of linear subspaces of $V$ indexed by $i < n$, and we
write

$$\sum_{i \ne j} U_i \;:=\; \sum_{i<n} U^{(j)}_i ,$$

a linear subspace of $V$ by [[def-sum-of-linear-subspaces]]. Replacing the
$j$-th summand by $\{0_V\}$, rather than re-indexing over a smaller set, keeps
every family on this page indexed by a natural number.

**The definition.** $V$ is the **internal direct sum** of the family $U$, written

$$V \;=\; \bigoplus_{i<n} U_i ,$$

when both of the following hold:

- **(D1)** $\displaystyle\sum_{i<n} U_i = V$;
- **(D2)** for every $j < n$,
  $\displaystyle U_j \cap \sum_{i \ne j} U_i = \{0_V\}$.

In (D2) the inclusion $\supseteq$ is automatic, since $U_j$ and
$\sum_{i \ne j} U_i$ are linear subspaces and each therefore contains $0_V$; the
content of (D2) is the inclusion $\subseteq$, that no nonzero vector of $U_j$ is
a sum of vectors drawn from the other summands.

### Two summands

Take $n = 2$ and write $U := U_0$, $W := U_1$. For $j = 0$ the family $U^{(0)}$ is
$\{0_V\}, W$, so $\sum_{i \ne 0} U_i = \{\, 0_V + w : w \in W \,\} = W$; for
$j = 1$ it is $U$ in the same way. So (D2) reduces to the single condition
$U \cap W = \{0_V\}$, and

$$V = U \oplus W \quad\text{means}\quad U + W = V \ \text{ and } \ U \cap W = \{0_V\}.$$

For two summands, therefore, (D2) and the pairwise condition coincide; this is
the familiar form of the definition.

### Three or more summands: (D2) is not the pairwise condition

For $n \ge 3$ the condition (D2) is **strictly stronger** than requiring
$U_i \cap U_j = \{0_V\}$ for all $i \ne j$.

That (D2) implies the pairwise condition is immediate: for $i \ne j$ with
$i, j < n$ we have $U_i = U^{(j)}_i \subseteq \sum_{i \ne j} U_i$, since a sum of
a family contains each of its summands ([[lem-sum-is-span-of-union]]), so
$U_j \cap U_i \subseteq U_j \cap \sum_{i \ne j} U_i = \{0_V\}$, and the reverse
inclusion holds because both are linear subspaces.

The converse fails, and it fails already for three summands: a family can satisfy
(D1) and have all its pairwise intersections trivial while (D2) is false, so that
decompositions are not unique. The companion examples page records a witness. A
definition stated with the pairwise condition in place of (D2) would therefore be
a different, and weaker, notion, and the characterisation by unique decomposition
([[lem-direct-sum-criterion]]) would be false for it.

### The empty family

$\mathbb{N}$ contains $0$, so $n = 0$ is a genuine case. Then
$\sum_{i<0} U_i = \{0_V\}$ ([[def-sum-of-linear-subspaces]]) and (D2) is vacuous,
there being no $j < 0$. So $V = \bigoplus_{i<0} U_i$ holds exactly when
$V = \{0_V\}$: the zero space is the direct sum of the empty family, and no other
space is.

## Remarks

- **"Internal" is the operative word.** The summands here are linear subspaces of
  one given space $V$, and the direct sum is a property of that configuration, not
  a construction producing a new space out of unrelated ones. No external direct
  sum, and no product of vector spaces, is defined on this page.

- **The notation $\bigoplus$ is reserved for the direct case.** Writing
  $\sum_{i<n} U_i$ asserts nothing beyond [[def-sum-of-linear-subspaces]];
  writing $\bigoplus_{i<n} U_i$ asserts (D1) and (D2) as well. In particular the
  symbol is not used for a sum that has merely been checked to be everything.

- **What (D2) is for.** It is exactly the condition that makes decompositions
  unique: $V = \bigoplus_{i<n} U_i$ holds if and only if every $v \in V$ is
  $\sum_{i<n} u_i$ with $u_i \in U_i$ in exactly one way. That equivalence is
  [[lem-direct-sum-criterion]], and it is the reason the definition is worth
  stating in this form rather than in terms of uniqueness directly.
````

### `def-linear-basis`

````markdown
---
id: def-linear-basis
kind: definition
title: "Basis of a vector space: a linearly independent spanning subset; and ordered basis: an injective finite list whose image is a basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-linear-independence, lem-independent-list-is-injective, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, def-linear-subspace, def-monoid-finite-product, def-vector-space, def-field, def-natural-numbers, lem-nat-order-is-membership, def-injection-surjection-bijection]
justified_by: []
forward_refs: [def-topology-basis-subbasis]
aliases: [def-hamel-basis, def-ordered-basis]
landmark: true
short: "basis; ordered basis"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Basis (linear algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
    - title: "Cambridge University Press excerpt: Vector spaces and bases"
      url: "https://assets.cambridge.org/97810092/43902/excerpt/9781009243902_excerpt.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]).

A subset $B \subseteq V$ is a **basis of $V$** when

- **(B1)** $B$ is linearly independent ([[def-linear-independence]]), and
- **(B2)** $B$ spans $V$, that is $\operatorname{span}(B) = V$
  ([[def-linear-combination-and-span]], which is where the words *spans* and
  *spanning set* are fixed; they are not redefined here).

**The empty set is a basis of the zero space, and of nothing else.**
$\varnothing$ is linearly independent ([[def-linear-independence]]) and
$\operatorname{span}(\varnothing) = \{0_V\}$
([[lem-span-is-the-set-of-linear-combinations]]), so $\varnothing$ is a basis of
$V$ exactly when $V = \{0_V\}$. This is the case $n = 0$ from which every
induction on this page starts, and it is a genuine case rather than a convention.

### Ordered bases

An **ordered basis of $V$** is a finite list $v : n \to V$, with $n \in
\mathbb{N}$ and $n = \{0, \dots, n-1\}$ the von Neumann natural
([[def-natural-numbers]], [[lem-nat-order-is-membership]]), such that $v$ is
injective ([[def-injection-surjection-bijection]]) and its image $v[n]$ is a
basis of $V$.

By claim 6 of [[lem-independent-list-is-injective]], a list is linearly
independent exactly when it is injective with linearly independent image, so an
ordered basis is equally described as a **linearly independent list $v : n \to V$
with $\operatorname{span}(v[n]) = V$**: the injectivity does not have to be
imposed separately. The empty list is the ordered basis of the zero space.

An ordered basis is a list, so it carries an order; a basis is a set, so it does
not. Reordering an ordered basis gives a different ordered basis with the same
image, and the coordinates of
[[thm-unique-coordinates-with-respect-to-an-ordered-basis]] are attached to the
list, not to the set.

### Bases of a linear subspace

Let $U$ be a linear subspace of $V$ ([[def-linear-subspace]]), which is itself a
vector space over $F$, with the addition, the zero vector and the scalar
multiplication of $V$ restricted to $U$. For $A \subseteq U$ the two readings of
"$A$ is a basis" — computed inside $U$, or computed inside $V$ — agree, so the
phrase needs no disambiguation below.

- **Independence agrees.** The finite sums $\sum_{i<n}\lambda_i a_i$ of a list
  $a : n \to U$ are given by the same recursion in $U$ as in $V$
  ([[def-monoid-finite-product]]), the base value $0_V$ and the operation $+$
  being literally those of $V$ ([[def-linear-subspace]]). So a list into $U$ has
  the same sums whichever space it is read in, and the vanishing condition of
  [[def-linear-independence]] is the same condition in both.
- **The span agrees.** A subset of $U$ is a linear subspace of $U$ exactly when it
  is a linear subspace of $V$, conditions (W1), (W2), (W3) being the same
  conditions in either reading. Now $\operatorname{span}_V(A) \subseteq U$, since
  $U$ is a linear subspace of $V$ containing $A$ and the span is contained in
  every such subspace; so $\operatorname{span}_V(A)$ is a linear subspace of $U$
  containing $A$, whence $\operatorname{span}_U(A) \subseteq \operatorname{span}_V(A)$.
  Conversely $\operatorname{span}_U(A)$ is a linear subspace of $V$ containing
  $A$, whence $\operatorname{span}_V(A) \subseteq \operatorname{span}_U(A)$. The
  two are therefore equal, and we write $\operatorname{span}(A)$ for both.

Consequently $A \subseteq U$ is a basis of the vector space $U$ if and only if
$A$ is linearly independent as a subset of $V$ and $\operatorname{span}(A) = U$.

## Remarks

- **The name is `def-linear-basis`, and the bare word is not used here.** The
  library already has a *basis* — a basis for a topology, defined in
  [[def-topology-basis-subbasis]] and namespaced there with the alias
  `def-basis-top`. The two notions share the word and nothing else: one is a
  family of open sets closed under a refinement condition, the other an
  independent spanning subset of a vector space. This page therefore follows the
  convention of [[def-linear-subspace]], where the same collision with the
  topological *subspace* was resolved the same way, and says *linear* in the id.
  In prose, where the ambient vector space is named, "basis" alone is used.

- **Nothing above asserts that a basis exists.** Existence for an arbitrary vector
  space is [[cor-every-vector-space-has-a-basis]], and it is proved from Zorn's
  lemma; existence for the concrete spaces $F^{n}$ is
  [[lem-standard-basis-of-f-n]] and needs no choice principle at all. The
  definition is stated first so that both statements have something to be about.

- **A basis need not be finite, and this definition does not assume it is.**
  Condition (B1) quantifies over finite lists drawn from $B$ and (B2) is an
  equality of sets, so both make sense for an arbitrary $B$. It is only
  [[def-dimension]] that restricts attention to spaces admitting a *finite* basis,
  and the companion page exhibits an explicit infinite basis, for the
  eventually zero families in $F^{\mathbb{N}}$.
````

### `def-linear-combination-and-span`

````markdown
---
id: def-linear-combination-and-span
kind: definition
title: "Linear combination of a finite list, and the span $\\operatorname{span}(S)$ as the smallest linear subspace containing $S$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-vector-space, def-linear-subspace, lem-intersection-of-linear-subspaces, def-monoid-finite-product, def-semigroup-and-monoid, def-group, def-natural-numbers, lem-nat-order-is-membership, def-field]
justified_by: []
aliases: [def-span, def-linear-combination, def-spanning-set]
landmark: true
short: "linear combination; $\\operatorname{span}(S)$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Linear span (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_span"
    - title: "Linear combination (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_combination"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed. (free PDF, CC BY-NC)"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]).

### Finite sums of vectors

By axiom (V1) the triple $(V, +, 0_V)$ is an abelian group ([[def-group]]), hence
in particular a commutative monoid ([[def-semigroup-and-monoid]]). So the finite
products of [[def-monoid-finite-product]] are available in it, and we write them
**additively**: for $n \in \mathbb{N}$ and a finite list $u : n \to V$, that is a
function on the von Neumann natural $n = \{0, \dots, n-1\}$
([[def-natural-numbers]], [[lem-nat-order-is-membership]]),

$$\sum_{i<n} u_i \;:=\; \prod_{i<n} u_i \quad \text{computed in } (V,+,0_V),$$

so that $\sum_{i<0} u_i = 0_V$ and $\sum_{i<\sigma(n)} u_i = \bigl(\sum_{i<n} u_i\bigr) + u_n$,
and the value depends only on $u_0, \dots, u_{n-1}$.

### Linear combinations

A **linear combination in $V$** is a vector of the form

$$\sum_{i<n} \lambda_i v_i$$

where $n \in \mathbb{N}$, $\lambda : n \to F$ is a finite list of scalars and
$v : n \to V$ is a finite list of vectors; the sum is the finite sum just
described, of the list $i \mapsto \lambda_i v_i$. For $S \subseteq V$, a vector
$w \in V$ is a **linear combination of elements of $S$** when there are
$n \in \mathbb{N}$, $\lambda : n \to F$ and $v : n \to S$ with
$w = \sum_{i<n} \lambda_i v_i$.

**The empty case is a real case.** $\mathbb{N}$ contains $0$
([[def-natural-numbers]]), and at $n = 0$ the sum is the empty sum, which is
$0_V$. So $0_V$ is a linear combination of elements of every subset of $V$,
including $S = \varnothing$. The lists are indexed from $0$, so a linear
combination of length $n$ is $\lambda_0 v_0 + \dots + \lambda_{n-1}v_{n-1}$; no
statement here is restricted to $n \ge 1$.

### The span

Let $S \subseteq V$. The set of linear subspaces of $V$ containing $S$ is
nonempty, since $V$ itself is one, so its intersection is a linear subspace of
$V$ by [[lem-intersection-of-linear-subspaces]]. That intersection is the **span
of $S$**,

$$\operatorname{span}(S) \;:=\; \bigcap \{\, W \;:\; W \text{ is a linear subspace of } V \text{ and } S \subseteq W \,\} .$$

It contains $S$, being an intersection of sets each of which contains $S$, and it
is contained in every linear subspace of $V$ that contains $S$. So it is the
**smallest** linear subspace of $V$ containing $S$, and those two properties
determine it uniquely: if $W$ and $W'$ both contain $S$ and are each contained in
every linear subspace containing $S$, then each is contained in the other. This
is what licenses the definite article.

A subset $S \subseteq V$ **spans** $V$, or is a **spanning set** of $V$, when
$\operatorname{span}(S) = V$.

## Remarks

- **The definition is the one already used for subgroups.**
  [[def-generated-subgroup]] defines $\langle S \rangle$ as the intersection of
  all subgroups containing $S$, licensed by
  [[lem-intersection-of-subgroups]]. Its Remarks also record a description from
  inside, as a set of products, proved there only for a single generator
  ([[lem-cyclic-subgroup-is-the-set-of-powers]]) with the general case deferred
  to a later page. The span is defined here in exactly that outside shape, and
  the identification from inside, that $\operatorname{span}(S)$ is precisely the
  set of linear combinations of elements of $S$, is proved in full as
  [[lem-span-is-the-set-of-linear-combinations]]. In particular
  $\operatorname{span}(\varnothing) = \{0_V\}$ is proved there, as a consequence
  of the definition, and is not stipulated here.

- **Why the finite sum is [[def-monoid-finite-product]] and not
  [[def-finite-sum]].** The latter is stated for sequences into the complete
  ordered field, so it cannot carry a sum of vectors in an arbitrary vector space
  over an arbitrary field. The monoid finite product is defined by recursion in
  any monoid, its empty value is the identity, and
  [[thm-generalised-associativity]] supplies the splitting, regrouping and
  reordering laws for it. Reading it additively in $(V,+,0_V)$ costs nothing and
  is the only sum of vectors this page uses.

- **A linear combination is a value, not an expression.** Two different lists may
  produce the same vector, and nothing above asserts otherwise. Repetitions are
  allowed in the list $v$, and so are coefficients equal to $0_F$; asking when a
  vector is a linear combination of a set in only one way is the question of
  linear independence, which belongs to a later page and is not raised here.
````

### `def-linear-independence`

````markdown
---
id: def-linear-independence
kind: definition
title: "Linear independence: a finite list $v : n \\to V$ is independent when $\\sum_{i<n} \\lambda_i v_i = 0_V$ forces every $\\lambda_i = 0_F$, and a subset $S \\subseteq V$ is independent when every injective finite list into $S$ is independent"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-vector-space, def-field, lem-vector-space-elementary-consequences, def-linear-combination-and-span, def-monoid-finite-product, def-natural-numbers, lem-nat-order-is-membership, def-injection-surjection-bijection]
justified_by: []
aliases: [def-linearly-independent, def-linear-dependence]
landmark: true
short: "linearly independent list; independent subset"
verification:
  audited: 2026-07-28
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Linear independence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_independence"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
    - title: "Interactive Linear Algebra: Linear Independence"
      url: "https://textbooks.math.gatech.edu/ila/linear-independence.html"
    - title: "Cambridge University Press excerpt: Vector spaces and bases"
      url: "https://assets.cambridge.org/97810092/43902/excerpt/9781009243902_excerpt.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). As in
[[def-linear-combination-and-span]], a **finite list** of vectors is a function
$v : n \to V$ on a von Neumann natural $n = \{0, \dots, n-1\}$
([[def-natural-numbers]], [[lem-nat-order-is-membership]]), written
$v_i := v(i)$, and

$$\sum_{i<n} \lambda_i v_i$$

is the finite sum of [[def-monoid-finite-product]] read additively in the abelian
group $(V,+,0_V)$, applied to the list $i \mapsto \lambda_i v_i$. No second notion
of finite sum is introduced here.

### Independence of a list

A finite list $v : n \to V$ is **linearly independent** when, for every list of
scalars $\lambda : n \to F$,

$$\sum_{i<n} \lambda_i v_i = 0_V \quad \Longrightarrow \quad \lambda_i = 0_F \text{ for every } i < n,$$

and **linearly dependent** otherwise, that is, when some $\lambda : n \to F$ has
$\sum_{i<n}\lambda_i v_i = 0_V$ while $\lambda_j \ne 0_F$ for at least one
$j < n$. Such a $\lambda$ is called a **witness** to the dependence of $v$.

### Independence of a subset

A subset $S \subseteq V$ is **linearly independent** when **every injective**
finite list $v : n \to S$ ([[def-injection-surjection-bijection]]) is linearly
independent, and **linearly dependent** otherwise, that is, when some injective
finite list into $S$ is linearly dependent.

**The injectivity clause is not decoration.** A linear combination in
[[def-linear-combination-and-span]] is indexed by an arbitrary list $v : n \to S$,
which is **not** required to be injective. If the definition above quantified
over all such lists, then for any $w \in S$ the list $v : 2 \to S$ with
$v_0 = v_1 = w$ and the scalars $\lambda_0 = 1_F$, $\lambda_1 = -1_F$ would give

$$\sum_{i<2}\lambda_i v_i = (0_V + 1_F w) + (-1_F)w = w + (-w) = 0_V$$

with $\lambda_0 = 1_F \ne 0_F$ ([[def-field]],
[[lem-vector-space-elementary-consequences]]), so **every** nonempty subset of
$V$ would be dependent and the notion would be empty. Quantifying over injective
lists is what makes the subset notion the intended one. It costs nothing for
lists: [[lem-independent-list-is-injective]] shows that the vanishing condition
above already forces a list to be injective, so no injectivity hypothesis has to
be carried alongside independence of a list.

### The boundary cases are genuine cases

$\mathbb{N}$ contains $0$ ([[def-natural-numbers]]), so both of the following are
instances of the definitions and neither is a convention.

- **The empty list is independent.** For $n = 0$ the only list of scalars is the
  empty one, and the condition "$\lambda_i = 0_F$ for every $i < 0$" holds
  vacuously.
- **$\varnothing \subseteq V$ is independent.** The only function $v : n \to
  \varnothing$ is the empty one, with $n = 0$, and it is independent by the
  previous point.
- **$\{0_V\}$ is dependent.** The list $v : 1 \to \{0_V\}$ with $v_0 = 0_V$ is
  injective, and taking $\lambda_0 = 1_F$ gives
  $\sum_{i<1}\lambda_i v_i = 0_V + 1_F 0_V = 0_V$ by the recursion of
  [[def-monoid-finite-product]] and $\lambda 0_V = 0_V$
  ([[lem-vector-space-elementary-consequences]]), while $1_F \ne 0_F$ in a field
  ([[def-field]]). So $\{0_V\}$, and hence every subset of $V$ containing $0_V$,
  is linearly dependent.

## Remarks

- **Independence is relative to the field, and to the ambient vector space.** The
  scalars range over $F$, so a set of vectors independent over a subfield
  $K \subseteq F$ may be dependent over $F$; [[lem-restriction-of-scalars]] is
  what makes both readings available on one set, and the companion page uses the
  distinction for $\mathbb{R}$ over $\mathbb{Q}$. The ambient space matters only
  through its addition, its zero and its scalar multiplication, all of which a
  linear subspace inherits from $V$ ([[def-linear-subspace]]); the resulting
  agreement is recorded in [[def-linear-basis]].

- **Dependence is a property of a list together with a witness, but of a subset
  outright.** A dependent list carries an explicit vanishing combination with a
  nonzero coefficient. For a subset, the witness is an injective list drawn from
  it; which list that is, is not part of the statement that the set is dependent.
  [[lem-dependent-iff-a-vector-lies-in-the-span-of-the-others]] converts the
  existential into a statement with no lists in it at all.

- **Why the two notions are both kept.** Lists carry order, and an ordered list is
  what a coordinate system is
  ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]); subsets carry no
  order, and it is subsets that the Zorn argument of
  [[thm-every-independent-set-extends-to-a-basis]] runs over. Keeping both, and
  proving that they agree, is cheaper than translating at every use.
````

### `def-linear-subspace`

````markdown
---
id: def-linear-subspace
kind: definition
title: "Linear subspace of a vector space"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-vector-space, def-subgroup, def-group, lem-vector-space-elementary-consequences]
justified_by: []
aliases: [def-linear-subspace-of-a-vector-space]
landmark: true
short: "linear subspace $W \\le V$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Linear subspace (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_subspace"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 1"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]). A subset
$W \subseteq V$ is a **linear subspace** of $V$ when

- **(W1)** $0_V \in W$;
- **(W2)** $W$ is closed under the vector addition: $u, v \in W$ implies
  $u + v \in W$;
- **(W3)** $W$ is closed under scalar multiplication: $\lambda \in F$ and
  $v \in W$ imply $\lambda v \in W$.

Every vector space $V$ has the two **trivial linear subspaces** $\{0_V\}$ and $V$
itself; a linear subspace $W$ with $W \ne V$ is called **proper**.

**The restricted operations are the required data, and $W$ is a vector space.**
By (W2) the vector addition of $V$ restricts to a binary operation
$W \times W \to W$, and by (W3) the scalar multiplication restricts to a map
$F \times W \to W$. With these and the element $0_V$, the set $W$ is a vector
space over $F$:

- axioms (V2)–(V5) are equations required of elements of $W$, which are in
  particular elements of $V$, so they are inherited from $V$; likewise
  associativity and commutativity of the restricted addition;
- $0_V$ lies in $W$ by (W1) and is a two-sided identity for the restricted
  addition, since it is one in $V$;
- for $v \in W$ the vector $(-1_F)v$ lies in $W$ by (W3), and
  $(-1_F)v = -v$ ([[lem-vector-space-elementary-consequences]]), so $-v \in W$
  and $v + (-v) = 0_V$ holds in $W$.

So $(W,+,0_V)$ is an abelian group, which is axiom (V1), and $W$ is a vector
space over $F$ **whose zero vector and whose additive inverses are those of
$V$**. In the language of [[def-subgroup]], the three displayed conditions
(S1) $0_V \in W$, (S2) closure under addition and (S3) closure under additive
inverses all hold, so $W$ is a subgroup of the abelian group $(V,+,0_V)$
([[def-group]]); that reading, and its converse, are recorded as
[[lem-linear-subspace-is-a-subgroup]] and are cited from there rather than
re-argued below.

## Remarks

- **"Linear subspace", never bare "subspace", in this library.** The word
  *subspace* is already in use here for the topological notion, a subset of a
  topological space carrying the induced topology, which is an unrelated idea.
  The names on this page therefore all say *linear*: `def-linear-subspace`,
  `lem-linear-subspace-criterion`, `lem-intersection-of-linear-subspaces`,
  `lem-linear-subspace-is-a-subgroup`, `def-sum-of-linear-subspaces`. Where the
  ambient vector space is fixed and no confusion is possible, the surrounding
  prose still writes the full phrase.

- **Closure under negatives is not a fourth condition.** It follows from (W3),
  because the additive inverse of a vector is the scalar multiple $(-1_F)v$. This
  is why the definition asks for three conditions where the definition of a
  subgroup asks for three of its own, and why the one-step test
  ([[lem-linear-subspace-criterion]]) can compress them into one.

- **(W1) cannot be replaced by "$W \ne \varnothing$" while dropping the others.**
  It can be replaced by nonemptiness *given* (W3), since a nonempty $W$ closed
  under scalar multiplication contains $0_F v = 0_V$
  ([[lem-vector-space-elementary-consequences]]) for any of its elements $v$.
  Stated with (W1) the definition is checkable one condition at a time, and the
  economical single test is [[lem-linear-subspace-criterion]].

- **The field matters.** A subset of $V$ may be closed under the scalars of a
  subfield $K \subseteq F$ without being closed under all of $F$, so "linear
  subspace" always means "linear subspace over the field named". Restriction of
  scalars ([[lem-restriction-of-scalars]]) is what makes that distinction
  possible.
````

### `def-natural-numbers`

````markdown
---
id: def-natural-numbers
kind: definition
title: "The natural numbers $\\mathbb{N}$ (von Neumann)"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-inductive-set, lem-omega-smallest-inductive, def-peano-system,
       def-axiom-of-infinity, def-axiom-schema-of-separation]
aliases: [def-omega, natural-numbers]
landmark: true
short: "$\\mathbb{N}=\\omega$, smallest inductive set"
verification:
  precheck: n/a
  audited: 2026-07-25
sources:
  scraped: []
  references:
    - title: "Set-theoretic definition of natural numbers (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Set-theoretic_definition_of_natural_numbers"
    - title: "Axiom of infinity (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_infinity"
    - title: "Peano axioms (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Peano_axioms"
    - title: "B. Kaya, MATH 320 Set Theory (METU lecture notes)"
      url: "https://users.metu.edu.tr/burakk/lecturenotes/320lecturenotes.pdf"
pipeline_run: null
---

## Definition

The set of **natural numbers** is the **smallest inductive set**
([[def-inductive-set]]),

$$\mathbb{N} = \omega := \bigcap\,\{\, I : I \text{ is inductive} \,\},$$

which exists and is itself inductive by [[lem-omega-smallest-inductive]] (the
Axiom of Infinity, [[def-axiom-of-infinity]], supplies one inductive set to
intersect within, and Separation, [[def-axiom-schema-of-separation]], makes the
intersection a set). On $\mathbb{N}$ we take

$$0 := \varnothing, \qquad \sigma(n) := n \cup \{n\},$$

the distinguished element and the successor function. Thus
$0 = \varnothing$, $1 = \{0\}$, $2 = \{0, 1\}$, $3 = \{0, 1, 2\}$, and in general
$n = \{0, 1, \dots, n-1\}$ is the set of its predecessors.

## Remarks

"Smallest" means $\omega \subseteq I$ for every inductive set $I$. This minimality
is exactly the **induction principle** ([[thm-induction-principle]]): a subset of
$\mathbb{N}$ that contains $0$ and is closed under $\sigma$ is itself inductive,
hence contains $\omega = \mathbb{N}$, hence equals $\mathbb{N}$.

With $0$ and $\sigma$ so defined, $(\mathbb{N}, 0, \sigma)$ satisfies the Peano
axioms ([[def-peano-system]], proved in [[thm-omega-is-peano-system]]), so it is a
**model** of the abstract natural numbers. By categoricity
([[thm-peano-categoricity]]) any other model is uniquely isomorphic to it, so the
particular set-theoretic encoding chosen here is immaterial to every arithmetic
and order property that follows: those are developed from the Peano axioms, not
from the sets themselves.
````

### `def-subfield`

````markdown
---
id: def-subfield
kind: definition
title: "Subfield: a subring of a field closed under inverses of its nonzero elements, and therefore a field with the restricted operations"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-subring, lem-subring-criterion, lem-field-is-a-commutative-ring, lem-commutative-division-ring-is-a-field, def-division-ring, def-commutative-ring, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "subfield"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Field (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Field_(mathematics)#Subfields"
    - title: "Field (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Field_(mathematics)"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]), regarded as a commutative ring by
[[lem-field-is-a-commutative-ring]]. A subset $K \subseteq F$ is a **subfield**
of $F$ when

- **(K1)** $K$ is a subring of $F$ ([[def-subring]]);
- **(K2)** $x^{-1} \in K$ for every $x \in K$ with $x \ne 0_F$.

Equivalently, by [[lem-subring-criterion]], $K$ is a subfield exactly when
$1_F \in K$, $a - b \in K$ and $ab \in K$ for all $a, b \in K$, and
$x^{-1} \in K$ for every nonzero $x \in K$.

**Why $K$ is then a field, and with the same $0$ and $1$.** By (K1) and
[[def-subring]], $K$ with the restricted operations is a ring whose zero is
$0_F$ and whose identity is $1_F$; its multiplication is commutative, being the
restriction of a commutative one ([[def-commutative-ring]]). Since $1_F \ne 0_F$
in $F$ and both lie in $K$, we have $1_K \ne 0_K$. Let $x \in K$ with
$x \ne 0_K$; then $x \ne 0_F$, so $x^{-1} \in F$ exists and lies in $K$ by (K2),
and $x x^{-1} = 1_F = 1_K = x^{-1} x$. So every nonzero element of $K$ is a unit
of the ring $K$, and $K$ is a commutative division ring ([[def-division-ring]]);
by [[lem-commutative-division-ring-is-a-field]] it is a field. Moreover the
inverse of $x$ computed in $K$ is its inverse computed in $F$, since $x^{-1}$
already satisfies the defining equation inside $K$.

In particular

$$0_K = 0_F, \qquad 1_K = 1_F, \qquad (-x)_K = (-x)_F, \qquad (x^{-1})_K = (x^{-1})_F \quad (x \in K,\ x \ne 0_F).$$

**A subfield of an ordered field inherits the order.** Let $(F,P)$ be an ordered
field ([[def-ordered-field]]) and $K$ a subfield. Put $P_K := P \cap K$. Then
(O1) holds in $K$: for $x \in K$ we have $-x \in K$ by (K1), and exactly one of
$x \in P$, $x = 0_F$, $-x \in P$ holds in $F$, so exactly one of
$x \in P_K$, $x = 0_K$, $-x \in P_K$ holds. And (O2) holds: if $x, y \in P_K$
then $x + y$ and $xy$ lie in $P$ by (O2) in $F$ and in $K$ by (K1), hence in
$P_K$. So $(K,P_K)$ is an ordered field, and its order is the restriction of the
order of $F$, because $a < b$ means $b - a \in P$ on both sides and
$b - a$ is the same element in $K$ as in $F$.

## Remarks

- **The inverse-closure clause is not implied by (K1).** The integers sit inside
  the rationals as a subring that is not a subfield, since $2$ is nonzero there
  and $2^{-1}$ is not an integer; the companion page records that witness. So
  (K2) is doing work.

- **The agreement of the two zeros and the two identities is the load-bearing
  part.** A later page restricts the scalars of a vector space along a subfield
  inclusion, and every axiom checked there uses that $1_K$ acts as $1_F$ does.
  Nothing would go through if a "subfield" were merely a subset that happens to
  be a field under some operations of its own.

- **Why the definition goes through subrings rather than restating the field
  axioms.** All of (A), (M) and (D) except the existence of inverses are already
  guaranteed by [[def-subring]], and the two bridge lemmas of this page convert
  the resulting commutative division ring back into a field. Restating the axioms
  would create a second definition of a field on this page, which is exactly what
  [[lem-field-is-a-commutative-ring]] and
  [[lem-commutative-division-ring-is-a-field]] exist to prevent.
````

### `def-sum-of-linear-subspaces`

````markdown
---
id: def-sum-of-linear-subspaces
kind: definition
title: "The sum $U + W$ of two linear subspaces and the sum $\\sum_{i<n} U_i$ of a finite family"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-linear-subspace, lem-linear-subspace-criterion, def-vector-space, def-monoid-finite-product, def-linear-combination-and-span, lem-vector-space-elementary-consequences, thm-induction-principle, def-natural-numbers, lem-nat-order-is-membership, def-field]
justified_by: []
aliases: [def-subspace-sum]
landmark: false
short: "$U + W$, $\\sum_{i<n} U_i$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Linear subspace (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_subspace"
    - title: "Direct sum of modules (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Direct_sum_of_modules"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed. (free PDF, CC BY-NC)"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Definition

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]), let
$n \in \mathbb{N}$, and let $U$ be a **finite family of linear subspaces of
$V$**, that is a function assigning to each $i < n$ a linear subspace $U_i$ of
$V$ ([[def-linear-subspace]]); here $n = \{0, \dots, n-1\}$
([[def-natural-numbers]], [[lem-nat-order-is-membership]]), so the family is
indexed from $0$. Define

$$\sum_{i<n} U_i \;:=\; \Bigl\{\, \sum_{i<n} u_i \;:\; u : n \to V \text{ with } u_i \in U_i \text{ for every } i < n \,\Bigr\},$$

the finite sums being those of [[def-monoid-finite-product]] read additively in
the abelian group $(V,+,0_V)$, as in [[def-linear-combination-and-span]]. For two
linear subspaces $U, W$ of $V$ we write

$$U + W \;:=\; \{\, u + w \;:\; u \in U,\ w \in W \,\},$$

which is the case $n = 2$ of the display above, since
$\sum_{i<2} u_i = (0_V + u_0) + u_1 = u_0 + u_1$.

### Three facts about finite sums of vectors

All three are proved by induction on $n$ ([[thm-induction-principle]]) from the
two defining clauses $\sum_{i<0} u_i = 0_V$ and
$\sum_{i<\sigma(n)} u_i = \bigl(\sum_{i<n} u_i\bigr) + u_n$
([[def-monoid-finite-product]]), together with the abelian group laws of
$(V,+,0_V)$. They are collected here because the definition itself needs the
first two, and because the lemmas below need all three.

**(F1) The all-zero list sums to $0_V$.** If $z : n \to V$ has $z_i = 0_V$ for
every $i < n$, then $\sum_{i<n} z_i = 0_V$. At $n = 0$ this is the empty sum, and
if it holds at $n$ then $\sum_{i<\sigma(n)} z_i = 0_V + 0_V = 0_V$.

**(F2) The mixed identity.** For every $\lambda \in F$ and all lists
$u, w : n \to V$,

$$\lambda \sum_{i<n} u_i \;+\; \sum_{i<n} w_i \;=\; \sum_{i<n} (\lambda u_i + w_i).$$

At $n = 0$ both sides are $0_V$, since $\lambda 0_V = 0_V$
([[lem-vector-space-elementary-consequences]]). If the identity holds at $n$,
then at $\sigma(n)$ the left-hand side is
$\lambda\bigl(\sum_{i<n} u_i + u_n\bigr) + \bigl(\sum_{i<n} w_i + w_n\bigr)$,
which by axiom (V2) equals
$\bigl(\lambda\sum_{i<n} u_i + \lambda u_n\bigr) + \bigl(\sum_{i<n} w_i + w_n\bigr)$;
commutativity and associativity of $+$ regroup this as
$\bigl(\lambda\sum_{i<n} u_i + \sum_{i<n} w_i\bigr) + (\lambda u_n + w_n)$, which
by the inductive hypothesis is
$\sum_{i<n}(\lambda u_i + w_i) + (\lambda u_n + w_n) = \sum_{i<\sigma(n)}(\lambda u_i + w_i)$.

**(F3) Extracting one term.** Let $u : n \to V$ and $j < n$, and let
$u^{(j)} : n \to V$ agree with $u$ at every $i \ne j$ and satisfy
$u^{(j)}_j = 0_V$. Then

$$\sum_{i<n} u_i \;=\; u_j + \sum_{i<n} u^{(j)}_i .$$

At $n = 0$ there is no $j < 0$ and the claim is vacuous. Assume it at $n$ and let
$j < \sigma(n)$, so $j \le n$ ([[lem-nat-order-is-membership]]). If $j = n$, then
$u^{(n)}$ agrees with $u$ on $n$, so $\sum_{i<\sigma(n)} u^{(n)}_i = \sum_{i<n} u_i + 0_V = \sum_{i<n} u_i$,
and $u_n + \sum_{i<n} u_i = \sum_{i<n} u_i + u_n = \sum_{i<\sigma(n)} u_i$ by
commutativity. If $j < n$, then $u^{(j)}$ agrees with $u$ at $n$, so
$\sum_{i<\sigma(n)} u^{(j)}_i = \sum_{i<n} u^{(j)}_i + u_n$, and the inductive
hypothesis applied to the restriction of $u$ to $n$ gives
$\sum_{i<\sigma(n)} u_i = \bigl(u_j + \sum_{i<n} u^{(j)}_i\bigr) + u_n = u_j + \sum_{i<\sigma(n)} u^{(j)}_i$,
by associativity.

**A consequence of (F1) and (F3).** If $u_i = 0_V$ for every $i \ne j$, then
$u^{(j)}$ is the all-zero list, so $\sum_{i<n} u_i = u_j + 0_V = u_j$: a list
vanishing off a single index sums to its value at that index.

### The sum is a linear subspace

$\sum_{i<n} U_i$ is a linear subspace of $V$. It is nonempty: each $U_i$ contains
$0_V$, and the all-zero list sums to $0_V$ by (F1), so $0_V \in \sum_{i<n} U_i$.
And it satisfies the one-step test ([[lem-linear-subspace-criterion]]): if
$x = \sum_{i<n} u_i$ and $y = \sum_{i<n} w_i$ with $u_i, w_i \in U_i$, and
$\lambda \in F$, then (F2) gives
$\lambda x + y = \sum_{i<n} (\lambda u_i + w_i)$, and $\lambda u_i + w_i \in U_i$
because $U_i$ is a linear subspace, so $\lambda x + y \in \sum_{i<n} U_i$.

So the definition really does produce a linear subspace, and this is asserted
here rather than assumed.

### The boundary case

$\mathbb{N}$ contains $0$, so $n = 0$ is a genuine case. The only list
$u : 0 \to V$ is the empty function, and its sum is the empty sum $0_V$, so

$$\sum_{i<0} U_i \;=\; \{0_V\},$$

the sum of the empty family of linear subspaces being the zero subspace. This is
the base case of the induction in [[lem-sum-is-span-of-union]] and of the
boundary case of [[def-internal-direct-sum]].

## Remarks

- **The sum is a set of vectors, not a set of decompositions.** An element of
  $\sum_{i<n} U_i$ is a vector that admits at least one expression
  $\sum_{i<n} u_i$ with $u_i \in U_i$; different lists may give the same vector,
  and whether they can is exactly the question answered by
  [[lem-direct-sum-criterion]].

- **Why not the union.** $\bigcup_{i<n} U_i$ is in general not a linear subspace,
  and the sum is what repairs that: [[lem-sum-is-span-of-union]] identifies
  $\sum_{i<n} U_i$ with $\operatorname{span}\bigl(\bigcup_{i<n} U_i\bigr)$, so the
  sum is the smallest linear subspace containing every $U_i$.

- **(F3) is stated with an index, not with a set.** It removes one term from a
  finite sum by replacing it with $0_V$ rather than by re-indexing the list over a
  smaller set, which keeps every sum on this page indexed by a von Neumann natural
  and avoids any appeal to a bijection between index sets. The same device is used
  in [[def-internal-direct-sum]] to say "the sum of the other summands".
````

### `def-vector-space`

````markdown
---
id: def-vector-space
kind: definition
title: "Vector space over a field"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: not-applicable
deps: [def-field, def-group, def-binary-operation, def-identity-element, def-invertible-element, lem-identity-unique, lem-inverse-unique]
justified_by: []
aliases: [def-vector, def-scalar-multiplication]
landmark: true
short: "vector space over $F$"
verification:
  precheck: n/a
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector_space"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 1"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Definition

Let $F$ be a field ([[def-field]]), with additive identity $0_F$, multiplicative
identity $1_F$, and the field axioms as stated there. A **vector space over $F$**,
also called an **$F$-vector space**, consists of

- a set $V$, whose elements are called **vectors**;
- a binary operation $+ : V \times V \to V$ on $V$ ([[def-binary-operation]]),
  the **vector addition**;
- an element $0_V \in V$, the **zero vector**;
- a map $\cdot \,:\, F \times V \to V$, the **scalar multiplication**, written
  $\lambda v := \cdot(\lambda, v)$;

subject to the following axioms, in which $u, v \in V$ and $\lambda, \mu \in F$
are arbitrary.

- **(V1)** $(V, +, 0_V)$ is an abelian group ([[def-group]]): $+$ is associative
  and commutative, $0_V$ is a two-sided identity for $+$
  ([[def-identity-element]]), and every $v \in V$ has an additive inverse
  ([[def-invertible-element]]).
- **(V2)** $\lambda(u + v) = \lambda u + \lambda v$.
- **(V3)** $(\lambda + \mu)v = \lambda v + \mu v$.
- **(V4)** $(\lambda\mu)v = \lambda(\mu v)$.
- **(V5)** $1_F v = v$.

The elements of $F$ are called **scalars**. When several vector spaces are in
play we write $0_V$ for the zero of $V$, and we write $-v$ for the additive
inverse of $v$ and $u - v := u + (-v)$.

**The notation $0_V$ and $-v$ is legitimate.** Axiom (V1) asserts only that some
two-sided identity and some additive inverses exist. That there is at most one
two-sided identity for $+$ is [[lem-identity-unique]], and that an invertible
element of a monoid has exactly one inverse is [[lem-inverse-unique]]; both are
proved before [[def-group]] and are inherited here with the group structure. So
$0_V$ and $-v$ denote well-defined elements, and nothing below re-derives them.

**What (V1) buys, and why it is not restated.** Associativity, commutativity, the
identity law $v + 0_V = v = 0_V + v$, the inverse law $v + (-v) = 0_V$,
cancellation ([[lem-group-cancellation]]) and the inverse identities
([[lem-group-inverse-laws]]) are facts about abelian groups. They are quoted from
the group page wherever they are used and are never proved again for vectors.

## Remarks

- **Scalar multiplication is not a binary operation on a set.** It is a map
  $F \times V \to V$ with arguments from two different sets, so
  [[def-binary-operation]], which is about a map $S \times S \to S$, does not
  apply to it and is never cited for it. The definition above cites that item for
  the vector addition only. In particular "closed under scalar multiplication"
  below always means $\lambda v \in W$ for $\lambda \in F$ and $v \in W$, which is
  not an instance of the closure condition defined there.

- **(V5) is an axiom, not a consequence of (V2)–(V4).** Take any abelian group
  $(V,+,0_V)$ and define $\lambda v := 0_V$ for every $\lambda$ and $v$. Then
  (V2), (V3) and (V4) all hold, both sides of each being $0_V$, while (V5) fails
  as soon as $V \ne \{0_V\}$. So (V5) has to be imposed, and it is what ties the
  scalar action to the identity of $F$.

- **Two structures, one set.** A vector space is data: the set $V$, the addition,
  the zero, and the scalar multiplication, over a fixed field $F$. The same set
  may carry vector-space structures over different fields, and the field is part
  of the statement of every result below. [[lem-restriction-of-scalars]] is the
  first place where that matters.

- **The field is the published one.** No field axiom is restated here; $F$ is a
  field in the sense of [[def-field]], whose axiom (A) already says that $(F,+)$
  is an abelian group and whose axiom (M) says the same of
  $(F \setminus \{0_F\}, \cdot)$. In particular every field is a vector space over
  itself, which is [[lem-restriction-of-scalars]].
````

### `ex-hamel-basis-of-r-over-q`

````markdown
---
id: ex-hamel-basis-of-r-over-q
kind: example
title: "$\\mathbb{R}$ as a vector space over $\\mathbb{Q}$ has a basis, and every such basis is infinite; the existence proof exhibits none"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [cor-every-vector-space-has-a-basis, def-axiom-of-choice, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-linear-basis, def-linear-independence, def-dimension, def-linear-combination-and-span, def-monoid-finite-product, lem-restriction-of-scalars, def-subfield, def-field-homomorphism, lem-of-q-embeds, def-ordered-field, thm-reals-ordered-field, cor-cauchy-reals-lub-complete, def-complete-ordered-field, thm-rationals-countable, thm-product-of-countable, thm-r-uncountable, lem-subset-of-countable, lem-pigeonhole, def-countable, def-equinumerous, def-injection-surjection-bijection, def-function-space, def-vector-space, def-field, def-rationals, def-real-numbers, thm-rat-field, thm-reals-field, thm-induction-principle, def-natural-numbers, lem-nat-order-is-membership]
justified_by: []
aliases: [ex-hamel-basis]
landmark: false
short: "a Hamel basis of $\\mathbb{R}$ over $\\mathbb{Q}$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + gpt-5.6-terra"
    verdict: pass
    date: 2026-08-03
    scope: published-audit-targeted
    context_sha256: ff3022315d73b9da68f16ae0a9988d72cc3258ff7c7720e37577cc05df079e74
    item_sha256: b89c7eed4ea43833c1288e7bc4bdde98bc4536d6309f619c68a15a51569ec399
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-03
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Hamel basis (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "University of Vermont notes: Infinite-dimensional vector spaces"
      url: "https://www.uvm.edu/~smillere/Curio2.pdf"
pipeline_run: null
---

## Example

**Assume the Axiom of Choice** ([[def-axiom-of-choice]]). Let $\mathbb{R}$ be
the real numbers ([[def-real-numbers]]), a field
([[thm-reals-field]]) and an ordered field ([[thm-reals-ordered-field]],
[[def-ordered-field]]), with the least-upper-bound property and hence complete
as an ordered field ([[cor-cauchy-reals-lub-complete]],
[[def-complete-ordered-field]]), and let $\mathbb{Q}$ be the rationals
([[def-rationals]]), a field ([[thm-rat-field]]). Let
$\iota : \mathbb{Q} \to \mathbb{R}$ be the unique field homomorphism
([[lem-of-q-embeds]], [[def-field-homomorphism]]), which is injective, and put
$\mathbb{Q}_{\mathbb{R}} := \iota[\mathbb{Q}]$. Then:

1. $\mathbb{Q}_{\mathbb{R}}$ is a subfield of $\mathbb{R}$ ([[def-subfield]]) and
   $\mathbb{R}$ is a vector space over $\mathbb{Q}_{\mathbb{R}}$ by restriction of
   scalars ([[lem-restriction-of-scalars]]); setting $q \cdot x := \iota(q)\,x$
   also makes $\mathbb{R}$ a vector space over $\mathbb{Q}$ itself;
2. $\mathbb{R}$ has a basis over $\mathbb{Q}_{\mathbb{R}}$
   ([[def-linear-basis]], [[cor-every-vector-space-has-a-basis]]);
3. $\mathbb{R}$ is infinite-dimensional over $\mathbb{Q}_{\mathbb{R}}$
   ([[def-dimension]]): **no** basis of $\mathbb{R}$ over
   $\mathbb{Q}_{\mathbb{R}}$ is finite;
4. the two structures of claim 1 have the same linearly independent subsets, the
   same spans and the same bases, so claims 2 and 3 hold verbatim for
   $\mathbb{R}$ as a $\mathbb{Q}$-vector space.

**The existence proof exhibits no basis.** Claim 2 comes from
[[cor-every-vector-space-has-a-basis]], which runs through Zorn's lemma and
therefore through the Axiom of Choice; nothing in it names a real number
belonging to the basis it produces. That is a statement about *this* proof. It is
**not** claimed here that no basis can be exhibited by any means: that would be a
metamathematical assertion about what is definable, and this library has
established nothing of the kind.

## Facts & Assumptions

**Given:** The Axiom of Choice; the complete ordered field $\mathbb{R}$, the field $\mathbb{Q}$, the unique field homomorphism $\iota : \mathbb{Q} \to \mathbb{R}$, and $\mathbb{Q}_{\mathbb{R}} = \iota[\mathbb{Q}]$.

[L1] There is a unique field homomorphism $\iota : \mathbb{Q} \to \mathbb{R}$ and it is injective ([[lem-of-q-embeds]]); a field homomorphism satisfies $\varphi(x+y) = \varphi(x)+\varphi(y)$, $\varphi(xy) = \varphi(x)\varphi(y)$, $\varphi(1) = 1$, $\varphi(0) = 0$, $\varphi(-x) = -\varphi(x)$ and $\varphi(x^{-1}) = \varphi(x)^{-1}$ for $x \ne 0$ ([[def-field-homomorphism]]); a subfield is a subset containing $1$, closed under $a - b$ and $ab$, and containing $x^{-1}$ for each nonzero $x$ in it ([[def-subfield]]).

[L2] A field is a vector space over itself, and an $F$-vector space is a $K$-vector space for every subfield $K \subseteq F$ by restricting the scalar multiplication ([[lem-restriction-of-scalars]], [[def-vector-space]], [[def-field]]).

[L3] Under the Axiom of Choice every vector space has a basis ([[def-axiom-of-choice]], [[cor-every-vector-space-has-a-basis]]); a basis is a linearly independent spanning subset, an ordered basis is an injective list whose image is a basis, and $\dim_F V$ is defined exactly when some basis is finite ([[def-linear-basis]], [[def-linear-independence]], [[def-dimension]], [[def-linear-combination-and-span]]).

[L4] A list $v : n \to V$ is an ordered basis if and only if every $x \in V$ is $\sum_{i<n}\lambda_i v_i$ for exactly one $\lambda : n \to F$ ([[thm-unique-coordinates-with-respect-to-an-ordered-basis]]); finite sums are those of [[def-monoid-finite-product]] read additively.

[L5] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]]); a product of two at most countable sets is at most countable ([[thm-product-of-countable]]); a subset of an at most countable set is at most countable ([[lem-subset-of-countable]]); the Cauchy-sequence reals have the least-upper-bound property and hence form a complete ordered field ([[cor-cauchy-reals-lub-complete]], [[def-complete-ordered-field]]), so $\mathbb{R}$ is uncountable ([[thm-r-uncountable]]); a finite set is equinumerous with exactly one natural ([[lem-pigeonhole]]); "at most countable" means finite or equinumerous with $\mathbb{N}$, and this property transfers along a bijection ([[def-countable]], [[def-equinumerous]], [[def-injection-surjection-bijection]]).

[L6] $K^{X}$ is the set of functions $X \to K$ ([[def-function-space]]); $\sigma(n) = n \cup \{n\}$ with $n \notin n$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]); induction ([[thm-induction-principle]]).

## Verification

**Proof technique:** direct.

1.1 Claim 1. $\mathbb{Q}_{\mathbb{R}} = \iota[\mathbb{Q}]$ is a subfield of $\mathbb{R}$: it contains $\iota(1) = 1$; for $p, q \in \mathbb{Q}$ it contains $\iota(p) - \iota(q) = \iota(p-q)$ and $\iota(p)\iota(q) = \iota(pq)$; and if $\iota(q) \ne 0$ then $q \ne 0$, since $\iota(0) = 0$, so $\iota(q)^{-1} = \iota(q^{-1}) \in \mathbb{Q}_{\mathbb{R}}$. Since $\mathbb{R}$ is a vector space over itself, restriction of scalars makes it a vector space over $\mathbb{Q}_{\mathbb{R}}$, with the field multiplication restricted to $\mathbb{Q}_{\mathbb{R}} \times \mathbb{R}$. The operation $(q,x) \mapsto \iota(q)x$ is a map $\mathbb{Q} \times \mathbb{R} \to \mathbb{R}$, and it satisfies (V2) to (V5) because $\iota$ preserves sums and products and $\iota(1) = 1$, while (V1) is the abelian group $(\mathbb{R},+,0)$; so it makes $\mathbb{R}$ a vector space over $\mathbb{Q}$. [L1, L2]

1.2 $\mathbb{Q}_{\mathbb{R}}$ is at most countable: $\iota$ is injective with image $\mathbb{Q}_{\mathbb{R}}$, hence a bijection $\mathbb{Q} \to \mathbb{Q}_{\mathbb{R}}$, and $\mathbb{Q} \approx \mathbb{N}$; composing bijections gives $\mathbb{Q}_{\mathbb{R}} \approx \mathbb{N}$. [L1, L5]

1.3 If $K$ is at most countable then so is $K^{n}$, the set of functions $n \to K$, for every $n \in \mathbb{N}$. By induction on $n$: at $n = 0$ the set $K^{0}$ has exactly one element, the empty function, so it is finite; and the map $K^{\sigma(n)} \to K^{n} \times K$ sending $f$ to the pair consisting of its restriction to $n$ and its value at $n$ is a bijection, since $\sigma(n) = n \cup \{n\}$ and $n \notin n$, so a function on $\sigma(n)$ is determined by, and may be assembled from, those two data. Hence $K^{\sigma(n)} \approx K^{n} \times K$, which is at most countable by the inductive hypothesis and the product theorem, and countability transfers along the bijection. [L5, L6]

1.4 Claim 4. For a list $v : n \to \mathbb{R}$ and scalars $\lambda : n \to \mathbb{Q}$, the vector $\sum_{i<n}\lambda_i \cdot v_i$ computed in the $\mathbb{Q}$-structure is by definition $\sum_{i<n}\iota(\lambda_i)v_i$, computed in the $\mathbb{Q}_{\mathbb{R}}$-structure; the two structures have the same underlying set, the same addition and the same zero, so their finite sums agree. Since $\iota$ is a bijection $\mathbb{Q} \to \mathbb{Q}_{\mathbb{R}}$, the scalar lists $\lambda : n \to \mathbb{Q}$ and $\iota \circ \lambda : n \to \mathbb{Q}_{\mathbb{R}}$ correspond bijectively, and $\lambda_i = 0$ for all $i$ exactly when $\iota(\lambda_i) = 0$ for all $i$. So a vanishing combination exists on one side exactly when it does on the other, and likewise for representations of an arbitrary vector; hence the two structures have the same linearly independent subsets, the same spans and the same bases. [L1, L3, L4]

2.1 Claim 2. $\mathbb{R}$ is a vector space over $\mathbb{Q}_{\mathbb{R}}$ by step 1.1, and every vector space has a basis, so a basis $B$ of $\mathbb{R}$ over $\mathbb{Q}_{\mathbb{R}}$ exists. [step 1.1, L3]

2.2 Claim 3. Suppose some basis $B$ of $\mathbb{R}$ over $\mathbb{Q}_{\mathbb{R}}$ were finite, say $B \approx n$. A bijection $n \to B$ is an injective list whose image is a basis, hence an ordered basis, so every $x \in \mathbb{R}$ is $\sum_{i<n}\lambda_i b_i$ for exactly one $\lambda : n \to \mathbb{Q}_{\mathbb{R}}$. The resulting map $\Phi : \mathbb{R} \to (\mathbb{Q}_{\mathbb{R}})^{n}$, sending $x$ to that $\lambda$, is injective, since $\Phi(x) = \Phi(y)$ makes $x$ and $y$ the same sum. By steps 1.2 and 1.3 the set $(\mathbb{Q}_{\mathbb{R}})^{n}$ is at most countable, hence so is its subset $\Phi[\mathbb{R}]$; and $\Phi$ is a bijection $\mathbb{R} \to \Phi[\mathbb{R}]$, so $\mathbb{R}$ is at most countable, contradicting the uncountability of $\mathbb{R}$. So no basis of $\mathbb{R}$ over $\mathbb{Q}_{\mathbb{R}}$ is finite, and $\mathbb{R}$ is infinite-dimensional over $\mathbb{Q}_{\mathbb{R}}$. [step 1.1, step 1.2, step 1.3, L3, L4, L5]

3.1 Claim 1 is step 1.1, claim 2 is step 2.1, claim 3 is step 2.2, and claim 4 is step 1.4; by claim 4 the last two transfer to $\mathbb{R}$ as a $\mathbb{Q}$-vector space. [step 1.1, step 1.4, step 2.1, step 2.2] ∎

## Remarks

- **Agreement with the order-69 examples page.** Claim 1 above is exactly claims 2 and 3 of [[ex-r-as-a-vector-space-over-q]], which states that $\iota[\mathbb{Q}]$ is a subfield of $\mathbb{R}$, that restriction of scalars makes $\mathbb{R}$ a vector space over it, and that $q \cdot x := \iota(q)x$ makes $\mathbb{R}$ a vector space over $\mathbb{Q}$. It is rebuilt here rather than quoted, because an examples page is a leaf of the library and nothing outside it may depend on the items homed there; the statements agree, and neither is stronger than the other. That page says explicitly that nothing there claims anything about size; claims 2, 3 and 4 are new here.

- **What the sharper statement would need.** This item does not claim that no basis of $\mathbb{R}$ over $\mathbb{Q}_{\mathbb{R}}$ is countably infinite. That statement is not proved here: it would need a count of the finite combinations drawn from a countably infinite set, which is a countable union of countable sets, and [[thm-countable-union-of-countable]] costs the Axiom of Countable Choice. The argument above avoids the question entirely by ruling out only finite bases, which is all that "infinite-dimensional" means ([[def-dimension]]).

- **The contrast this page is built around.** The eventually zero families have an infinite basis that is written down and costs no choice principle ([[ex-basis-of-the-eventually-zero-families]]); $\mathbb{R}$ over $\mathbb{Q}_{\mathbb{R}}$ has one that is produced by Zorn's lemma and that no argument here exhibits. Both are infinite-dimensional, and the difference is in what the proof delivers, not in the statement proved.
````

### `fs-additive-implies-linear`

````markdown
---
id: fs-additive-implies-linear
kind: false-statement
title: "FALSE: every additive $f : \\mathbb{R} \\to \\mathbb{R}$ is of the form $x \\mapsto cx$ for a single real $c$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
  evidence: exact-source
deps: [def-additive-function, lem-additive-is-q-linear, lem-hamel-basis-exists, thm-cauchy-functional-equation-regularity, def-vector-space, def-linear-combination-and-span, lem-restriction-of-scalars, def-axiom-of-choice, thm-zorn, def-complete-ordered-field, lem-rat-embeds-dense, lem-q-and-irrationals-dense-r]
justified_by: []
aliases: []
landmark: true
short: "additive does not imply linear"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Cauchy's functional equation (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cauchy%27s_functional_equation"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
    - title: "Hamel Basis (MathWorld)"
      url: "https://mathworld.wolfram.com/HamelBasis.html"
pipeline_run: null
---

## Statement

**FALSE.** Every additive $f : \mathbb{R} \to \mathbb{R}$
([[def-additive-function]]) is of the form $x \mapsto c\,x$ for a single real
$c$.

What is true is the $\mathbb{Q}$-linear part of it, $f(qx) = q f(x)$ for rational
$q$ ([[lem-additive-is-q-linear]]), and the conditional statements of
[[thm-cauchy-functional-equation-regularity]], each of which adds a regularity
hypothesis. The claim above asserts the conclusion with no hypothesis at all,
and it is false.

**The refutation assumes the Axiom of Choice** ([[def-axiom-of-choice]]), which
it uses through [[lem-hamel-basis-exists]] and hence through [[thm-zorn]]. The
hypothesis is carried explicitly in the Facts below and in every step that needs
it. It is an axiom already adopted in this library, so the refutation is a
refutation and not a conditional one; what it does not settle is whether a
counterexample exists without choice, and nothing here bears on that question.

## Facts & Assumptions

**Given:** The Axiom of Choice, and $\mathbb{Q}$ denoting the canonical copy of the rationals inside $\mathbb{R}$ ([[lem-rat-embeds-dense]]).

[A1] The Axiom of Choice ([[def-axiom-of-choice]], [[thm-zorn]]).

[L1] **Assume the Axiom of Choice.** Then there is $B \subseteq \mathbb{R}$, a basis of $\mathbb{R}$ as a vector space over $\mathbb{Q}$ by restriction of scalars, and for each $b_{\star} \in B$ a map $\Lambda_{b_{\star}} : \mathbb{R} \to \mathbb{Q}$ with $\Lambda_{b_{\star}}(x+y) = \Lambda_{b_{\star}}(x) + \Lambda_{b_{\star}}(y)$ for all reals $x, y$, with $\Lambda_{b_{\star}}(b_{\star}) = 1$, and with range the whole of $\mathbb{Q}$ ([[lem-hamel-basis-exists]], claims 1 and 4, [[lem-restriction-of-scalars]], [[def-vector-space]], [[def-linear-combination-and-span]]).

[L2] A function $f : \mathbb{R} \to \mathbb{R}$ is additive when $f(x+y) = f(x)+f(y)$ for all reals $x, y$ ([[def-additive-function]]).

[L3] There exists an irrational real, that is a real not lying in $\mathbb{Q}$: the irrationals are dense in $\mathbb{R}$ and in particular nonempty ([[lem-q-and-irrationals-dense-r]]).

[L4] $\mathbb{R}$ is a field, so a nonzero real is invertible ([[def-complete-ordered-field]]).

## Refutation

**Proof technique:** direct.

1.1 Assume the Axiom of Choice and fix a Hamel basis $B$ of $\mathbb{R}$ over $\mathbb{Q}$ together with an element $b_{\star} \in B$; such an element exists because $B$ spans $\mathbb{R}$, which is not $\{0\}$, so $B$ is nonempty. Put $f := \Lambda_{b_{\star}}$, regarded as a function $\mathbb{R} \to \mathbb{R}$. [A1, L1, construct]

2.1 $f$ is additive: $\Lambda_{b_{\star}}(x+y) = \Lambda_{b_{\star}}(x) + \Lambda_{b_{\star}}(y)$ for all reals $x, y$ is one of the properties of the coefficient map. [step 1.1, L1, L2]

2.2 Every value of $f$ is rational, and $f(b_{\star}) = 1$. [step 1.1, L1]

3.1 Suppose there were a real $c$ with $f(x) = c\,x$ for every real $x$. Then $c\,b_{\star} = f(b_{\star}) = 1$, so $c \ne 0$ and $c$ is invertible. [step 1.1, step 2.2, L4]

4.1 Take an irrational real $\theta$ and put $x_{0} := c^{-1}\theta$. Then $f(x_{0}) = c\,x_{0} = \theta$, which is irrational; but every value of $f$ is rational by step 2.2. This is impossible, so no such $c$ exists. [step 2.2, step 3.1, L3, L4]

5.1 So $f$ is an additive function $\mathbb{R} \to \mathbb{R}$ that is not of the form $x \mapsto c\,x$ for any real $c$, and the claim in the Statement is false. [step 2.1, step 4.1, discharge-construct] ∎

## Remarks

- **What the witness looks like, by the regularity theorem.** Since $f$ is additive and not of the form $x \mapsto cx$, the contrapositive of each clause of [[thm-cauchy-functional-equation-regularity]] applies: $f$ is continuous at no point of $\mathbb{R}$, is bounded neither above nor below on any nondegenerate interval, is monotone on no nondegenerate interval, is of constant sign on none, and its graph is dense in $\mathbb{R}^{2}$. The companion page states and uses exactly this in full.

- **The cost is the Axiom of Choice, and only that.** The construction uses no other principle, and AC is an axiom this library has adopted, so nothing here is conditional in the sense of resting on unproved material. It is worth being precise about what is *not* claimed: it is not claimed that no explicit non-linear additive function can be written down, only that this one is produced by a proof that exhibits nothing.

- **Every hypothesis that would rescue the claim is already recorded.** Adding any single one of the six conditions of [[thm-cauchy-functional-equation-regularity]] turns the false statement into a theorem. That is the reason the false statement is worth stating: the failure is not marginal, and yet it is repaired by an extremely weak hypothesis, as little as continuity at one single point.
````

### `lem-countable-iff-surjection-from-n`

````markdown
---
id: lem-countable-iff-surjection-from-n
kind: lemma
title: "A nonempty set is at most countable iff it is a surjective image of $\\mathbb{N}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-countable, thm-well-ordering-principle, def-injection-surjection-bijection, lem-subset-of-countable, def-equinumerous, def-natural-numbers, def-nat-order, lem-nat-order-is-membership]
justified_by: []
aliases: []
landmark: false
short: "countable iff enumerable by a surjection"
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
    - title: "T. Tao, Analysis I, 3rd ed., §8.1"
      url: "https://terrytao.wordpress.com/books/analysis-i/"
pipeline_run: null
---

## Statement

Let $A$ be a nonempty set. Then $A$ is at most countable ([[def-countable]]) if
and only if there is a surjection $s : \mathbb{N} \to A$
([[def-injection-surjection-bijection]]).

Moreover, from any such surjection an injection $A \to \mathbb{N}$ is obtained
explicitly, without any choice, by

$$j(a) := \min\{\, k \in \mathbb{N} : s(k) = a \,\}.$$

This is the working form of countability used everywhere below: to prove a
nonempty set countable it suffices to list its elements, repetitions and all.

**No choice principle is used.** The backward direction is where an appeal to
choice would be natural ("for each $a$ pick some $k$ with $s(k) = a$") and it is
avoided outright, because $\min$ is canonical: every nonempty set of naturals has
a *least* element ([[thm-well-ordering-principle]]), so $j(a)$ is determined by
$a$ and $s$ alone.

## Facts & Assumptions

**Given:** A nonempty set $A$. For $a \in A$ and a function $s : \mathbb{N} \to A$ write $s^{-1}(\{a\}) = \{\, k \in \mathbb{N} : s(k) = a \,\}$.

[L1] $A$ is at most countable when $A \approx n$ for some $n \in \mathbb{N}$ or $A \approx \mathbb{N}$; $A \approx 0 = \varnothing$ holds only for $A = \varnothing$ ([[def-countable]], [[def-natural-numbers]]).

[L2] Bijections, injections, surjections, images and the symmetry and transitivity of $\approx$; an injection is a bijection onto its image ([[def-injection-surjection-bijection]], [[def-equinumerous]]).

[L3] Well-ordering: every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

[L4] Every subset of an at most countable set is at most countable ([[lem-subset-of-countable]]).

[L5] For naturals, $k \in n \iff k < n$, so a natural number $n$ is the set $\{\, k \in \mathbb{N} : k < n \,\}$ of naturals below it; in particular $0 \in n$ whenever $n \ne 0$ ([[lem-nat-order-is-membership]], proved earlier on this page from the additive order of [[def-nat-order]] on the von Neumann naturals of [[def-natural-numbers]]).

## Proof

**Proof technique:** direct.

1.1 For the forward implication assume $A$ is at most countable; since $A \ne \varnothing$ we have $A \approx \mathbb{N}$, or $A \approx n$ for some $n \in \mathbb{N}$ with $n \ne 0$, and in either case fix a bijection $\psi$ from $\mathbb{N}$, respectively from $n$, onto $A$. [assume-hyp, given, L1, L2]

1.2 For the converse implication assume a surjection $s : \mathbb{N} \to A$ is given. [assume-hyp]

2.1 If $\psi$ is defined on $\mathbb{N}$ it is itself a surjection $\mathbb{N} \to A$; if $\psi$ is defined on $n \ne 0$, then $0 \in n$ by [L5] and the function $s_\psi : \mathbb{N} \to A$ with $s_\psi(k) = \psi(k)$ for $k < n$ and $s_\psi(k) = \psi(0)$ for $k \ge n$ is a surjection, since every element of $A$ is $\psi(k)$ for some $k \in n$. In both cases a surjection $\mathbb{N} \to A$ exists. [step 1.1, L2, L5, construct]

2.2 For each $a \in A$ the set $s^{-1}(\{a\})$ is a nonempty subset of $\mathbb{N}$, because $s$ is surjective, so [L3] provides its least element and $j(a) := \min s^{-1}(\{a\})$ defines a function $j : A \to \mathbb{N}$; no selection is made, since the least element is uniquely determined. [step 1.2, L3, construct]

3.1 $j$ is injective: if $j(a) = j(a') = k$ then $s(k) = a$ and $s(k) = a'$, because $j(a) \in s^{-1}(\{a\})$ and $j(a') \in s^{-1}(\{a'\})$, so $a = a'$. [step 2.2, L2]

4.1 Hence $j$ is a bijection of $A$ onto $j[A] \subseteq \mathbb{N}$, so $A \approx j[A]$; the subset $j[A]$ of the at most countable set $\mathbb{N}$ is at most countable by [L4], and transitivity of $\approx$ transfers this to $A$. [step 3.1, L1, L2, L4]

5.1 The forward implication is step 2.1 and the converse is step 4.1, so for nonempty $A$ countability and the existence of a surjection $\mathbb{N} \to A$ are equivalent, with $j$ of step 2.2 the promised injection $A \to \mathbb{N}$. [step 2.1, step 3.1, step 4.1] ∎

## Remarks

- The hypothesis $A \ne \varnothing$ cannot be dropped in the forward direction: $\varnothing$ is finite, hence at most countable, but no function $\mathbb{N} \to \varnothing$ exists at all. The converse direction needs no such hypothesis, since a surjection onto $A$ already forces $A \ne \varnothing$.

- Combining the two directions: a nonempty $A$ is at most countable if and only if $A \preceq \mathbb{N}$ ([[def-equinumerous]]). The forward direction of that reformulation is immediate, and the backward direction is step 4.1.

- The lemma is what licenses the informal phrase "enumerate $A$ as $a_0, a_1, a_2, \dots$, possibly with repetitions". Repetitions are exactly what distinguishes a surjection from a bijection, and allowing them is what makes the criterion easy to apply: the enumerations built in [[thm-product-of-countable]] and [[thm-countable-union-of-countable]] repeat.
````

### `lem-dependent-iff-a-vector-lies-in-the-span-of-the-others`

````markdown
---
id: lem-dependent-iff-a-vector-lies-in-the-span-of-the-others
kind: lemma
title: "A subset $S \\subseteq V$ is linearly dependent if and only if some $s \\in S$ lies in $\\operatorname{span}(S \\setminus \\{s\\})$; and $\\operatorname{span}(S)$ is already the set of linear combinations of INJECTIVE finite lists into $S$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-linear-independence, lem-independent-list-is-injective, def-vector-space, def-field, lem-vector-space-elementary-consequences, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, def-sum-of-linear-subspaces, def-monoid-finite-product, thm-induction-principle, def-natural-numbers, lem-nat-order-is-membership, lem-nat-nonzero-is-successor, def-injection-surjection-bijection]
justified_by: []
aliases: [lem-dependent-iff-redundant]
landmark: false
short: "dependent iff one vector is spanned by the rest"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Linear independence (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_independence"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
    - title: "Interactive Linear Algebra: Linear Independence"
      url: "https://textbooks.math.gatech.edu/ila/linear-independence.html"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]) and let
$S \subseteq V$.

1. $S$ is linearly dependent ([[def-linear-independence]]) **if and only if**
   there is $s \in S$ with $s \in \operatorname{span}(S \setminus \{s\})$
   ([[def-linear-combination-and-span]]).
2. $$\operatorname{span}(S) \;=\; \Bigl\{\, \sum_{i<m} \nu_i x_i \;:\; m \in \mathbb{N},\ \nu : m \to F,\ x : m \to S \text{ injective} \,\Bigr\} .$$
   That is, restricting the lists in [[lem-span-is-the-set-of-linear-combinations]]
   to **injective** lists changes nothing.

**The two boundary cases are instances, not exceptions.** For $S = \varnothing$
both sides of claim 1 fail: $\varnothing$ is independent and there is no $s$. For
$S = \{0_V\}$ both hold: $\{0_V\}$ is dependent, and
$0_V \in \operatorname{span}(\varnothing) = \{0_V\}$
([[lem-span-is-the-set-of-linear-combinations]]).

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, and a subset $S \subseteq V$.

[L1] $\operatorname{span}(T)$ is exactly the set of vectors $\sum_{i<p}\mu_i w_i$ with $p \in \mathbb{N}$, $\mu : p \to F$ and $w : p \to T$; it is a linear subspace of $V$ containing $T$; and $\operatorname{span}(\varnothing) = \{0_V\}$ ([[lem-span-is-the-set-of-linear-combinations]], [[def-linear-combination-and-span]]).

[L2] Finite sums: $\sum_{i<0} u_i = 0_V$ and $\sum_{i<\sigma(p)} u_i = \bigl(\sum_{i<p} u_i\bigr) + u_p$, the value depending only on $u_0, \dots, u_{p-1}$ ([[def-monoid-finite-product]], [[def-linear-combination-and-span]]).

[L3] (F1) an all-$0_V$ list sums to $0_V$; (F2) $\lambda\sum_{i<p} u_i + \sum_{i<p} w_i = \sum_{i<p}(\lambda u_i + w_i)$; (F3) $\sum_{i<p} u_i = u_j + \sum_{i<p} u^{(j)}_i$ for $j < p$, where $u^{(j)}$ agrees with $u$ off $j$ and is $0_V$ at $j$ ([[def-sum-of-linear-subspaces]]).

[L4] Deleting one index: for $k < \sigma(p)$ the map $\delta_k : p \to \sigma(p)$ is injective with image $\sigma(p) \setminus \{k\}$, and a list $u : \sigma(p) \to V$ with $u_k = 0_V$ satisfies $\sum_{j<\sigma(p)} u_j = \sum_{i<p} u_{\delta_k(i)}$ ([[lem-independent-list-is-injective]], claim 2).

[L5] The vector space axioms ([[def-vector-space]]) and their elementary consequences ([[lem-vector-space-elementary-consequences]]): $(V,+,0_V)$ is an abelian group; $0_F w = 0_V$; $\lambda 0_V = 0_V$; $(-1_F)w = -w$; $1_F w = w$; and (V4) $(\lambda\mu)w = \lambda(\mu w)$, (V3) $(\lambda+\mu)w = \lambda w + \mu w$.

[L6] $F$ is a field: $0_F \ne 1_F$, every $\lambda \ne 0_F$ has an inverse $\lambda^{-1}$ with $\lambda^{-1}\lambda = 1_F$, and every $\mu$ has an additive inverse $-\mu$ ([[def-field]]).

[L7] A list $v : p \to V$ is independent when $\sum_{i<p}\lambda_i v_i = 0_V$ forces every $\lambda_i = 0_F$, and $S$ is dependent exactly when some injective finite list into $S$ is dependent ([[def-linear-independence]]).

[L8] Naturals and maps: every $p \ne 0$ is a successor ([[lem-nat-nonzero-is-successor]]); $\sigma(p) = p \cup \{p\}$ with $p \notin p$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]); induction ([[thm-induction-principle]]); and injectivity as in [[def-injection-surjection-bijection]].

## Proof

**Proof technique:** direct.

1.1 Collecting repeated entries. For every $p \in \mathbb{N}$, every $w : p \to V$ and every $\mu : p \to F$ there are $m \in \mathbb{N}$, an injective $x : m \to V$ with $x[m] \subseteq w[p]$, and $\nu : m \to F$, with $\sum_{i<p}\mu_i w_i = \sum_{i<m}\nu_i x_i$. By induction on $p$: at $p = 0$ take $m = 0$, both sums being $0_V$. Assume it at $p$, and let $w : \sigma(p) \to V$ and $\mu : \sigma(p) \to F$; applying the hypothesis to the restrictions gives $\sum_{i<p}\mu_i w_i = \sum_{i<m}\nu_i x_i$ with $x$ injective and $x[m] \subseteq w[p]$, and the recursion gives $\sum_{i<\sigma(p)}\mu_i w_i = \sum_{i<m}\nu_i x_i + \mu_p w_p$. If $w_p \notin x[m]$, extend $x$ to $x' : \sigma(m) \to V$ by $x'_m := w_p$ and $\nu$ to $\nu'$ by $\nu'_m := \mu_p$; then $x'$ is injective with $x'[\sigma(m)] \subseteq w[\sigma(p)]$ and the recursion gives $\sum_{i<\sigma(m)}\nu'_i x'_i = \sum_{i<m}\nu_i x_i + \mu_p w_p$. If instead $w_p = x_k$ for the unique such $k < m$, put $\nu'_k := \nu_k + \mu_p$ and $\nu'_i := \nu_i$ for $i \ne k$; applying (F3) at $k$ to the lists $i \mapsto \nu_i x_i$ and $i \mapsto \nu'_i x_i$, whose $k$-deleted forms coincide, and using (V3) in the form $(\nu_k + \mu_p)x_k = \nu_k x_k + \mu_p x_k$, gives $\sum_{i<m}\nu'_i x_i = \sum_{i<m}\nu_i x_i + \mu_p x_k$, which is the required value. [L2, L3, L5, L8]

1.2 A scalar passes through a finite sum: for $\lambda \in F$, $p \in \mathbb{N}$ and $u : p \to V$, applying (F2) with the all-$0_V$ second list and using (F1) and the identity law gives $\lambda\sum_{i<p} u_i = \sum_{i<p}\lambda u_i$; combined with (V4) this yields $\lambda \sum_{i<p}\lambda_i v_i = \sum_{i<p}(\lambda\lambda_i)v_i$ for scalars $\lambda_i$ and vectors $v_i$. [L3, L5]

2.1 Claim 2. Every $\sum_{i<m}\nu_i x_i$ with $x : m \to S$ is a linear combination of elements of $S$, hence lies in $\operatorname{span}(S)$, so the right-hand set is contained in $\operatorname{span}(S)$. Conversely an element of $\operatorname{span}(S)$ is $\sum_{i<p}\mu_i w_i$ for some $w : p \to S$, and step 1.1 rewrites it as $\sum_{i<m}\nu_i x_i$ with $x$ injective and $x[m] \subseteq w[p] \subseteq S$, so $x : m \to S$ is an injective finite list. [step 1.1, L1]

2.2 Claim 1, from left to right. Let $S$ be dependent, witnessed by an injective $v : n \to S$ and $\lambda : n \to F$ with $\sum_{i<n}\lambda_i v_i = 0_V$ and $\lambda_j \ne 0_F$ for some $j < n$. Put $u_i := \lambda_i v_i$, so (F3) at $j$ gives $0_V = u_j + R$ with $R := \sum_{i<n} u^{(j)}_i$, whence $u_j = -R$ and $v_j = 1_F v_j = (\lambda_j^{-1}\lambda_j)v_j = \lambda_j^{-1}(\lambda_j v_j) = \lambda_j^{-1}(-R) = (-\lambda_j^{-1})R$. Now $u^{(j)}_i = \lambda'_i v_i$ where $\lambda'_j := 0_F$ and $\lambda'_i := \lambda_i$ for $i \ne j$, since $0_F v_j = 0_V$; also $n \ne 0$, say $n = \sigma(n')$, and the entry of this list at $j$ is $0_V$, so deleting the index $j$ gives $R = \sum_{i<n'}\lambda'_{\delta_j(i)} v_{\delta_j(i)}$. Applying step 1.2 to the scalar $-\lambda_j^{-1}$ gives $v_j = \sum_{i<n'}\kappa_i y_i$ with $\kappa_i := (-\lambda_j^{-1})\lambda'_{\delta_j(i)}$ and $y := v \circ \delta_j$. Since $\delta_j$ has image $n \setminus \{j\}$ and $v$ is injective, $y$ takes its values in $S \setminus \{v_j\}$, so $v_j$ is a linear combination of elements of $S \setminus \{v_j\}$ and therefore lies in $\operatorname{span}(S \setminus \{v_j\})$. Taking $s := v_j \in S$ finishes this direction. [step 1.2, L1, L3, L4, L5, L6, L7]

3.1 Claim 1, from right to left. Let $s \in S$ with $s \in \operatorname{span}(S \setminus \{s\})$. By step 2.1 applied to $S \setminus \{s\}$ there are $m$, an injective $x : m \to S \setminus \{s\}$ and $\nu : m \to F$ with $s = \sum_{i<m}\nu_i x_i$. Extend $x$ to $v : \sigma(m) \to S$ by $v_m := s$, which is injective because $s \notin x[m]$, and extend $\nu$ to $\lambda : \sigma(m) \to F$ by $\lambda_m := -1_F$. The recursion then gives $\sum_{i<\sigma(m)}\lambda_i v_i = \sum_{i<m}\nu_i x_i + (-1_F)s = s + (-s) = 0_V$, while $\lambda_m = -1_F \ne 0_F$, since $-1_F = 0_F$ would give $1_F = 0_F$. So $v$ is an injective finite list into $S$ that is dependent, and $S$ is dependent. [step 2.1, L2, L5, L6, L7]

4.1 Claim 1 is steps 2.2 and 3.1 together, and claim 2 is step 2.1. [step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **Claim 2 is the working form of the span.** Once it is available, "a vector of $\operatorname{span}(S)$" may always be taken to come with an injective list of vectors of $S$ carrying it, which is what makes the coefficient of a chosen entry meaningful. Every later argument on this page that solves for one entry of a list drawn from a span uses it in that form — [[thm-steinitz-exchange]] and [[cor-a-linear-subspace-has-a-complement]] — and [[lem-span-is-the-set-of-linear-combinations]] on its own does not supply it, since its lists may repeat. [[lem-adjoining-a-vector-outside-the-span]] solves for an entry too but needs nothing from here, its list being injective by hypothesis, drawn from the definition of independence of a subset.

- **Claim 1 removes the lists from the statement.** Dependence as defined is an existential over lists and witnesses; claim 1 restates it as a property of the set alone: some member is redundant, in that the span does not shrink when it is removed. That is also the form in which dependence is used to characterise bases ([[lem-basis-iff-maximal-independent-iff-minimal-spanning]]).

- **The vector produced is not unique and the lemma does not say it is.** In a dependent set several members may be redundant, and which ones they are depends on the set. What the proof produces is one $s$, read off from a chosen witness; a different witness may produce a different $s$.
````

### `lem-direct-sum-criterion`

````markdown
---
id: lem-direct-sum-criterion
kind: lemma
title: "$V = \\bigoplus_{i<n} U_i$ if and only if every $v \\in V$ is $\\sum_{i<n} u_i$ with $u_i \\in U_i$ in exactly one way; equivalently, if and only if the sum is $V$ and $\\sum_{i<n} u_i = 0_V$ with $u_i \\in U_i$ forces every $u_i = 0_V$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-internal-direct-sum, def-sum-of-linear-subspaces, def-linear-subspace, def-vector-space, lem-vector-space-elementary-consequences, def-monoid-finite-product, lem-group-cancellation, def-group, def-natural-numbers, lem-nat-order-is-membership]
justified_by: []
aliases: [lem-unique-decomposition-criterion]
landmark: false
short: "direct sum $\\Leftrightarrow$ unique decomposition"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Direct sum of modules (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Direct_sum_of_modules"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 1"
      url: "https://linear.axler.net/"
    - title: "Direct sum (Encyclopedia of Mathematics)"
      url: "https://encyclopediaofmath.org/wiki/Direct_sum"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]), let
$n \in \mathbb{N}$, and let $U$ be a finite family of linear subspaces $U_i$ of
$V$ indexed by $i < n$ ([[def-sum-of-linear-subspaces]]). Call a list
$u : n \to V$ **admissible** when $u_i \in U_i$ for every $i < n$. The following
are equivalent.

- **(a)** $V = \bigoplus_{i<n} U_i$ ([[def-internal-direct-sum]]).
- **(b)** For every $v \in V$ there is exactly one admissible list $u$ with
  $\sum_{i<n} u_i = v$.
- **(c)** $\sum_{i<n} U_i = V$, and the only admissible list $u$ with
  $\sum_{i<n} u_i = 0_V$ is the list with $u_i = 0_V$ for every $i < n$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, a natural number $n$, and a finite family of linear subspaces $U_i$ of $V$ indexed by $i < n$; a list $u : n \to V$ is called admissible when $u_i \in U_i$ for every $i < n$.

[L1] $V = \bigoplus_{i<n} U_i$ means (D1) $\sum_{i<n} U_i = V$ and (D2) $U_j \cap \sum_{i \ne j} U_i = \{0_V\}$ for every $j < n$, where $\sum_{i \ne j} U_i = \sum_{i<n} U^{(j)}_i$ for the family $U^{(j)}$ with $U^{(j)}_i = U_i$ for $i \ne j$ and $U^{(j)}_j = \{0_V\}$ ([[def-internal-direct-sum]]).

[L2] The elements of $\sum_{i<n} U_i$ are exactly the vectors $\sum_{i<n} u_i$ with $u$ admissible; it is a linear subspace of $V$; the mixed identity (F2) $\lambda \sum_{i<n} u_i + \sum_{i<n} w_i = \sum_{i<n}(\lambda u_i + w_i)$ holds; and by (F3) with (F1), $\sum_{i<n} u_i = u_j + \sum_{i<n} u^{(j)}_i$ for $j < n$, where $u^{(j)}$ agrees with $u$ off $j$ and has $u^{(j)}_j = 0_V$, while a list vanishing off a single index sums to its value there ([[def-sum-of-linear-subspaces]], [[def-monoid-finite-product]]).

[L3] A linear subspace contains $0_V$ and is closed under $+$ and under scalar multiplication ([[def-linear-subspace]]).

[L4] $(-1_F)x = -x$ for every $x \in V$, and $1_F x = x$ ([[lem-vector-space-elementary-consequences]], [[def-vector-space]]).

[L5] Cancellation in the abelian group $(V,+,0_V)$: if $x + y = x + z$ then $y = z$, and if $y + x = z + x$ then $y = z$ ([[lem-group-cancellation]], [[def-group]]).

[L6] $(V,+,0_V)$ is an abelian group: $+$ is associative and commutative, $0_V$ is a two-sided identity, and each $x$ has an additive inverse $-x$ with $x + (-x) = 0_V = (-x) + x$ ([[def-vector-space]], [[def-group]]).

[L7] The index $i$ runs over the von Neumann natural $n = \{0,\dots,n-1\}$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]).

## Proof

**Proof technique:** direct.

1.1 Let $u$ be admissible and $j < n$. The list $u^{(j)}$ is admissible for the family $U^{(j)}$, since $u^{(j)}_i = u_i \in U_i = U^{(j)}_i$ for $i \ne j$ and $u^{(j)}_j = 0_V \in \{0_V\} = U^{(j)}_j$; hence $s := \sum_{i<n} u^{(j)}_i$ lies in $\sum_{i \ne j} U_i$, and $\sum_{i<n} u_i = u_j + s$. [L1, L2, L7]

1.2 A linear subspace $W$ of $V$ is closed under additive inverses: for $x \in W$ we have $(-1_F)x \in W$ by closure under scalar multiplication, and $(-1_F)x = -x$. [L3, L4]

1.3 Let $j < n$ and $x \in U_j$. The list $z : n \to V$ with $z_j = x$ and $z_i = 0_V$ for $i \ne j$ is admissible, each $U_i$ containing $0_V$, and it sums to $x$. [L2, L3, L7]

1.4 (c) implies (b). Assume (c). Existence: since $\sum_{i<n} U_i = V$, every $v \in V$ is $\sum_{i<n} u_i$ for some admissible $u$. Uniqueness: suppose $u$ and $w$ are admissible with $\sum_{i<n} u_i = \sum_{i<n} w_i =: v$. The mixed identity with $\lambda = -1_F$, applied to $w$ and $u$ in that order, gives $(-1_F)\sum_{i<n} w_i + \sum_{i<n} u_i = \sum_{i<n}\bigl((-1_F)w_i + u_i\bigr)$, whose left-hand side is $-v + v = 0_V$; the list $i \mapsto (-1_F)w_i + u_i = (-w_i) + u_i$ is admissible, each $U_i$ being closed under additive inverses and addition; so by (c) every $(-w_i) + u_i = 0_V = (-w_i) + w_i$, and cancelling $-w_i$ on the left gives $u_i = w_i$ for every $i < n$. [L2, L3, L4, L5, L6]

2.1 (a) implies (c). Assume (a). Condition (D1) is the first half of (c). For the second, let $u$ be admissible with $\sum_{i<n} u_i = 0_V$ and let $j < n$. Writing $s = \sum_{i<n} u^{(j)}_i \in \sum_{i \ne j} U_i$, we get $u_j + s = 0_V$, while $(-s) + s = 0_V$ as well, so cancelling $s$ on the right gives $u_j = -s$; and $-s \in \sum_{i \ne j} U_i$ because that set is a linear subspace. Hence $u_j \in U_j \cap \sum_{i \ne j} U_i$, which is $\{0_V\}$ by (D2), so $u_j = 0_V$. As $j < n$ was arbitrary, $u$ is the all-zero list. [step 1.1, step 1.2, L1, L2, L5, L6]

2.2 (b) implies (a). Assume (b). For (D1): every $v \in V$ is $\sum_{i<n} u_i$ for some admissible $u$, so $V \subseteq \sum_{i<n} U_i$, and the reverse inclusion holds because $\sum_{i<n} U_i$ is a subset of $V$. For (D2): let $j < n$ and $x \in U_j \cap \sum_{i \ne j} U_i$. Then $x = \sum_{i<n} w_i$ for some list $w$ admissible for $U^{(j)}$; such a $w$ has $w_j = 0_V$ and $w_i \in U_i$ for $i \ne j$, so it is admissible for $U$ as well, $U_j$ containing $0_V$. The list $z$ of step 1.3 is also admissible and also sums to $x$, so uniqueness in (b) forces $z = w$, and in particular $x = z_j = w_j = 0_V$. Since $\{0_V\}$ is contained in the intersection anyway, (D2) holds. [step 1.3, L1, L2, L3]

3.1 Steps 2.1, 1.4 and 2.2 give (a) implies (c), (c) implies (b) and (b) implies (a), so the three conditions are equivalent. [step 1.4, step 2.1, step 2.2] ∎

## Remarks

- **Condition (c) is the one used in practice.** Checking uniqueness of every
  decomposition is checking a single one: that of $0_V$. The reduction is the
  content of the implication from (c) to (b), and it works because the difference
  of two admissible decompositions of the same vector is an admissible
  decomposition of $0_V$.

- **This is what makes (D2) the right condition.** If the definition of a direct
  sum had asked only for pairwise trivial intersections, the equivalence above
  would fail for $n \ge 3$: the companion examples page exhibits three linear
  subspaces of a plane whose pairwise intersections are trivial, whose sum is
  everything, and for which some vector has two different decompositions. So the
  equivalence proved here is not available for the pairwise notion, and (D2) is
  exactly the strengthening that restores it.

- **The two-summand case reads as usual.** For $n = 2$, condition (a) says
  $U + W = V$ and $U \cap W = \{0_V\}$ ([[def-internal-direct-sum]]), and the
  lemma says that this holds exactly when every $v \in V$ is $u + w$ with $u \in U$
  and $w \in W$ in exactly one way.

- **No finiteness of $V$ and no dimension anywhere.** The family of summands is
  finite because the sum $\sum_{i<n} U_i$ is defined through a finite sum of
  vectors; $V$ itself is arbitrary, and nothing above counts anything.
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

### `lem-restriction-of-scalars`

````markdown
---
id: lem-restriction-of-scalars
kind: lemma
title: "A field is a vector space over itself, and over any subfield $K \\subseteq F$ every $F$-vector space is a $K$-vector space by restricting the scalars"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-vector-space, def-subfield, def-field]
justified_by: []
aliases: [lem-field-is-a-vector-space-over-itself]
landmark: false
short: "restriction of scalars"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  verified:
    model: claude-fable-5
    verdict: certify
    date: 2026-07-28
    scope: page
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Restriction of scalars (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Restriction_of_scalars"
    - title: "Vector space (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Vector_space"
pipeline_run: null
---

## Statement

Let $F$ be a field ([[def-field]]).

1. $F$ is a vector space over itself ([[def-vector-space]]): take the set to be
   $F$, the vector addition to be the field addition, the zero vector to be
   $0_F$, and the scalar multiplication $F \times F \to F$ to be the field
   multiplication.
2. Let $K \subseteq F$ be a subfield ([[def-subfield]]) and let $V$ be a vector
   space over $F$. Then $V$, with the same addition and the same zero vector and
   with the scalar multiplication restricted to $K \times V$, is a vector space
   over $K$. This is called **restricting the scalars** from $F$ to $K$.
3. In particular $F$ is a vector space over every subfield $K \subseteq F$, with
   the field multiplication restricted to $K \times F$ as scalar multiplication.

## Facts & Assumptions

**Given:** A field $F$, a subfield $K \subseteq F$, and a vector space $V$ over $F$.

[L1] The vector space axioms (V1)–(V5) ([[def-vector-space]]): $(V,+,0_V)$ is an abelian group; $\lambda(u+v) = \lambda u + \lambda v$; $(\lambda+\mu)v = \lambda v + \mu v$; $(\lambda\mu)v = \lambda(\mu v)$; $1_F v = v$.

[L2] The field axioms of [[def-field]], read as they are read throughout this library: $(F,+,0_F)$ is an abelian group; multiplication on $F$ is associative and commutative with two-sided identity $1_F$; multiplication distributes over addition, so that $x(y+z) = xy+xz$ and $(y+z)x = yx+zx$; and every $x \ne 0_F$ has a multiplicative inverse.

[L3] A subfield $K$ of $F$ is a subring of $F$ closed under inverses of its nonzero elements; equivalently, a subset containing $1_F$ with $a - b \in K$ and $ab \in K$ for all $a, b \in K$ and $x^{-1} \in K$ for every nonzero $x \in K$. With the restricted operations $K$ is itself a field, its addition and multiplication being the restrictions of those of $F$, and $0_K = 0_F$, $1_K = 1_F$, with the negatives and the inverses of $K$ those of $F$ ([[def-subfield]]).

## Proof

**Proof technique:** direct.

1.1 Put $V_F := F$ as a set, let the vector addition be the field addition with zero vector $0_F$, and let the scalar multiplication be the field multiplication, which is a map $F \times F \to F$ as required. [L2]

1.2 Axiom (V1) holds for $V_F$: axiom (A) of a field says exactly that $(F,+,0_F)$ is an abelian group. [L2]

1.3 Axiom (V2) holds for $V_F$: $\lambda(u+v) = \lambda u + \lambda v$ is distributivity of multiplication over addition. [L2]

1.4 Axiom (V3) holds for $V_F$: $(\lambda+\mu)v = \lambda v + \mu v$ is distributivity on the other side. [L2]

1.5 Axiom (V4) holds for $V_F$: $(\lambda\mu)v = \lambda(\mu v)$ is associativity of the field multiplication. [L2]

1.6 Axiom (V5) holds for $V_F$: $1_F v = v$ is the multiplicative identity law. [L2]

1.7 For claim 2: since $K \subseteq F$, restricting the scalar multiplication of $V$ to the subset $K \times V$ of $F \times V$ yields a map $K \times V \to V$, which is the required datum. [L3]

1.8 The set $V$, its addition and its zero vector are unchanged by the restriction, so $(V,+,0_V)$ is still an abelian group; this is axiom (V1) for the $K$-structure. [L1]

1.9 For $\lambda, \mu \in K$ the sum $\lambda + \mu$ and the product $\lambda\mu$ formed in $K$ are the sum and the product formed in $F$, and the multiplicative identity of $K$ is $1_F$. [L3]

2.1 Steps 1.1 to 1.6 verify (V1)–(V5), so $F$ with the operations of step 1.1 is a vector space over itself: claim 1. [step 1.1, step 1.2, step 1.3, step 1.4, step 1.5, step 1.6, L1]

2.2 Let $\lambda, \mu \in K$ and $u, v \in V$. Then $\lambda(u+v) = \lambda u + \lambda v$ and $(\lambda\mu)v = \lambda(\mu v)$ are the instances of (V2) and (V4) for these elements of $F$, the product $\lambda\mu$ being the same whether formed in $K$ or in $F$; $(\lambda+\mu)v = \lambda v + \mu v$ is the instance of (V3), the sum $\lambda+\mu$ being likewise the same; and the identity of $K$ is $1_F$, so $1_K v = 1_F v = v$ is the instance of (V5). [step 1.7, step 1.9, L1, L3]

3.1 With step 1.8, the restricted structure satisfies (V1)–(V5) over $K$, so $V$ is a vector space over $K$: claim 2. [step 1.8, step 2.2, L1]

4.1 Claim 3 follows by applying claim 2 to the $F$-vector space of claim 1: $F$ is a vector space over $K$, its scalar multiplication being the field multiplication restricted to $K \times F$. [step 2.1, step 3.1] ∎

## Remarks

- **On the field facts in [L2].** Axiom (M) of [[def-field]] asserts that multiplication is associative and commutative on all of $F$ with $x \cdot 1_F = x$ for every $x \in F$, the element $0_F$ included, and right distributivity then follows from axiom (D) by commuting, as [[lem-of-zero-mult]] already records. These unrestricted forms are spent in exactly three of the steps above, where axioms (V3), (V4) and (V5) are read off for arbitrary scalars including $0_F$: step 1.4 needs distributivity on the right; step 1.5 needs associativity of the multiplication at $0_F$ as well; and step 1.6 needs $1_F x = x$ rather than the literal $x \cdot 1_F = x$, which commutativity supplies, and needs it at $x = 0_F$ too. They are used nowhere else: step 1.2 is axiom (A) verbatim, step 1.3 is axiom (D) verbatim, and steps 1.7 to 4.1 use only the vector-space axioms of $V$ and the subfield facts of [L3].

- **Restricting the scalars changes the structure, not the set.** The vectors, the addition and the zero are untouched; only the collection of scalars allowed to act shrinks. Everything that can be said about $V$ as a $K$-vector space is therefore a statement about the same object with fewer operations available, and every $F$-linear subspace of $V$ is in particular a $K$-linear subspace ([[def-linear-subspace]]). The converse fails, and that is the point of the construction.

- **The field is part of the data.** Because of this lemma, a bare phrase like "the vector space $V$" is incomplete: $\mathbb{R}$ is a vector space over $\mathbb{R}$ and also over the embedded copy of $\mathbb{Q}$ inside it, and these are different structures on one set. Every statement on this page names its field.

- **Nothing here is about dimension.** How much smaller $K$ is than $F$, and what that does to $V$, is a question about bases and dimension, which are developed on a later page. This lemma asserts only that the restricted structure satisfies the five axioms.
````

### `lem-span-is-the-set-of-linear-combinations`

````markdown
---
id: lem-span-is-the-set-of-linear-combinations
kind: lemma
title: "$\\operatorname{span}(S)$ is exactly the set of linear combinations of finite lists of elements of $S$, and $\\operatorname{span}(\\varnothing) = \\{0_V\\}$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-linear-combination-and-span, def-monoid-finite-product, lem-linear-subspace-criterion, def-linear-subspace, def-vector-space, lem-vector-space-elementary-consequences, thm-induction-principle, def-natural-numbers, lem-nat-order-is-membership, def-field]
justified_by: []
aliases: []
landmark: true
short: "$\\operatorname{span}(S)$ from inside"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Linear span (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_span"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]) and let
$S \subseteq V$. Write

$$L(S) \;:=\; \Bigl\{\, \sum_{i<n} \lambda_i v_i \;:\; n \in \mathbb{N},\ \lambda : n \to F,\ v : n \to S \,\Bigr\}$$

for the set of linear combinations of elements of $S$
([[def-linear-combination-and-span]]). Then

$$\operatorname{span}(S) \;=\; L(S).$$

In particular $\operatorname{span}(\varnothing) = \{0_V\}$, and for every
$S \subseteq V$ the span of $S$ contains $0_V$ as the empty linear combination.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, and a subset $S \subseteq V$.

[L1] $\operatorname{span}(S)$ is a linear subspace of $V$, it contains $S$, and it is contained in every linear subspace of $V$ that contains $S$ ([[def-linear-combination-and-span]]).

[L2] Finite sums in $(V,+,0_V)$, written additively: $\sum_{i<0} u_i = 0_V$; $\sum_{i<\sigma(n)} u_i = \bigl(\sum_{i<n} u_i\bigr) + u_n$; and the value of $\sum_{i<n} u_i$ depends only on $u_0, \dots, u_{n-1}$, so a list $u : n \to V$ determines it ([[def-monoid-finite-product]], [[def-linear-combination-and-span]]).

[L3] Induction on $\mathbb{N}$: a property holding at $0$ and passing from $n$ to $\sigma(n)$ holds at every natural number ([[thm-induction-principle]]).

[L4] The vector space axioms ([[def-vector-space]]): $(V,+,0_V)$ is an abelian group, so $+$ is associative and commutative and $0_V$ is a two-sided identity; (V2) $\lambda(u+w) = \lambda u + \lambda w$; (V4) $(\lambda\mu)w = \lambda(\mu w)$; (V5) $1_F w = w$.

[L5] $\lambda 0_V = 0_V$ for every $\lambda \in F$ ([[lem-vector-space-elementary-consequences]]).

[L6] A linear subspace satisfies (W1) $0_V \in W$, (W2) closure under $+$, (W3) closure under scalar multiplication; and a nonempty $T \subseteq V$ with $\lambda u + v \in T$ for all $\lambda \in F$, $u, v \in T$ is a linear subspace ([[def-linear-subspace]], [[lem-linear-subspace-criterion]]).

[L7] $\sigma(n) = n \cup \{n\}$ and $n \notin n$; $n = \{\, m \in \mathbb{N} : m < n \,\}$; and $0 \in n$ whenever $n \ne 0$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]).

## Proof

**Proof technique:** direct.

1.1 $L(S) \subseteq V$ by construction, and $0_V \in L(S)$: take $n = 0$, whose only lists are the empty ones, and whose sum is the empty sum $0_V$. In particular $L(S)$ is nonempty. [L2]

1.2 $S \subseteq L(S)$: for $w \in S$ take $n = 1$ with $\lambda_0 = 1_F$ and $v_0 = w$, so that $\sum_{i<1} \lambda_i v_i = 0_V + 1_F w = 1_F w = w$, using the recursion at $\sigma(0) = 1$, the identity law and (V5). [L2, L4]

1.3 Extending a list. Let $A$ be a set, $n \in \mathbb{N}$, $u : n \to A$ and $x \in A$. Since $\sigma(n) = n \cup \{n\}$ and $n \notin n$, there is exactly one $u' : \sigma(n) \to A$ with $u'(i) = u(i)$ for $i < n$ and $u'(n) = x$; and when $A = V$, the recursion gives $\sum_{i<\sigma(n)} u'_i = \bigl(\sum_{i<n} u_i\bigr) + x$. [L2, L7]

1.4 Scalars pass through a finite sum: for every $\mu \in F$, every $n \in \mathbb{N}$ and every list $u : n \to V$, $\mu \sum_{i<n} u_i = \sum_{i<n} \mu u_i$. By induction on $n$: at $n = 0$ both sides are $0_V$, since $\mu 0_V = 0_V$; and if the identity holds at $n$, then for a list on $\sigma(n)$ we get $\mu \sum_{i<\sigma(n)} u_i = \mu\bigl(\sum_{i<n} u_i + u_n\bigr) = \mu \sum_{i<n} u_i + \mu u_n = \sum_{i<n} \mu u_i + \mu u_n = \sum_{i<\sigma(n)} \mu u_i$, by (V2), the inductive hypothesis and the recursion. [L2, L3, L4, L5]

1.5 A linear subspace $W$ with $S \subseteq W$ contains every linear combination of elements of $S$. By induction on $n$: at $n = 0$ the sum is $0_V \in W$ by (W1); and if every such combination of length $n$ lies in $W$, then for lists $\lambda : \sigma(n) \to F$ and $v : \sigma(n) \to S$ we have $\sum_{i<\sigma(n)} \lambda_i v_i = \bigl(\sum_{i<n} \lambda_i v_i\bigr) + \lambda_n v_n$, whose first summand lies in $W$ by the inductive hypothesis and whose second lies in $W$ by (W3) applied to $v_n \in S \subseteq W$, so the whole lies in $W$ by (W2). [L2, L3, L6]

1.6 The only function $v : n \to \varnothing$ has $n = 0$: if $n \ne 0$ then $0 \in n$, and $v(0)$ would be an element of $\varnothing$. So the only linear combination of elements of $\varnothing$ is the empty sum, and $L(\varnothing) = \{0_V\}$. [L2, L7]

2.1 $L(S)$ is closed under scalar multiplication: if $w = \sum_{i<n} \lambda_i v_i$ with $\lambda : n \to F$ and $v : n \to S$, and $\mu \in F$, then $\mu w = \sum_{i<n} \mu(\lambda_i v_i) = \sum_{i<n} (\mu\lambda_i) v_i$ by (V4), and $i \mapsto \mu\lambda_i$ is a list $n \to F$, so $\mu w \in L(S)$. [step 1.4, L4]

2.2 $L(S)$ is closed under addition. Fix $x \in L(S)$; we show by induction on $n$ that $x + \sum_{i<n} \mu_i v_i \in L(S)$ for all lists $\mu : n \to F$ and $v : n \to S$. At $n = 0$ the sum is $0_V$ and $x + 0_V = x \in L(S)$. Assume it at $n$ and let $\mu : \sigma(n) \to F$, $v : \sigma(n) \to S$; then $x + \sum_{i<\sigma(n)} \mu_i v_i = \bigl(x + \sum_{i<n} \mu_i v_i\bigr) + \mu_n v_n$ by the recursion and associativity, and $y := x + \sum_{i<n} \mu_i v_i$ lies in $L(S)$ by the inductive hypothesis, say $y = \sum_{i<m} \nu_i w_i$ with $\nu : m \to F$ and $w : m \to S$; extending $\nu$ by $\mu_n$ and $w$ by $v_n$ as in step 1.3 gives lists on $\sigma(m)$ whose combination is $y + \mu_n v_n$, so $x + \sum_{i<\sigma(n)} \mu_i v_i \in L(S)$. [step 1.3, L2, L3, L4]

2.3 $L(S) \subseteq \operatorname{span}(S)$: the span is a linear subspace of $V$ containing $S$, so by step 1.5 it contains every linear combination of elements of $S$. [step 1.5, L1]

3.1 $L(S)$ is a linear subspace of $V$: it is nonempty, and for $\lambda \in F$ and $u, v \in L(S)$ we have $\lambda u \in L(S)$ and then $\lambda u + v \in L(S)$, so the one-step test applies. [step 1.1, step 2.1, step 2.2, L6]

4.1 $\operatorname{span}(S) \subseteq L(S)$: by steps 1.2 and 3.1 the set $L(S)$ is a linear subspace of $V$ containing $S$, and the span is contained in every such subspace. [step 1.2, step 3.1, L1]

5.1 Combining the two inclusions, $\operatorname{span}(S) = L(S)$. [step 2.3, step 4.1]

6.1 Taking $S = \varnothing$ and using step 1.6 gives $\operatorname{span}(\varnothing) = L(\varnothing) = \{0_V\}$; and for arbitrary $S$, the empty combination shows $0_V \in L(S) = \operatorname{span}(S)$. [step 1.1, step 1.6, step 5.1] ∎

## Remarks

- **Two descriptions of one object.** The definition of
  $\operatorname{span}(S)$ is from outside, cutting down from all linear subspaces
  containing $S$; this lemma describes it from inside, as the vectors actually
  built from $S$. The same pair of descriptions appears for the subgroup generated
  by a set ([[def-generated-subgroup]],
  [[lem-cyclic-subgroup-is-the-set-of-powers]]), and the proof has the same shape:
  the inside set is shown to be a linear subspace containing $S$, which gives one
  inclusion, and every linear subspace containing $S$ is shown closed under the
  construction, which gives the other.

- **$\operatorname{span}(\varnothing) = \{0_V\}$ is a consequence, not a
  convention.** It comes from the empty sum being $0_V$, which is itself forced by
  the recursion defining finite products ([[def-monoid-finite-product]]). Nothing
  is stipulated at the empty set, and $n = 0$ is a genuine case of every induction
  above.

- **No finiteness assumption on $S$.** The set $S$ may be infinite; what is finite
  is each individual list. So a vector lies in $\operatorname{span}(S)$ exactly
  when it is built from finitely many elements of $S$, however large $S$ is. The
  companion page uses this for $S$ an infinite subset of a function space.
````

### `lem-span-monotone-and-idempotent`

````markdown
---
id: lem-span-monotone-and-idempotent
kind: lemma
title: "The span is monotone and idempotent, $\\operatorname{span}(S) = S$ exactly when $S$ is a linear subspace, and $\\operatorname{span}(S \\cup \\{0_V\\}) = \\operatorname{span}(S)$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-linear-combination-and-span, def-linear-subspace, def-vector-space]
justified_by: []
aliases: []
landmark: false
short: "span is a closure operator"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Linear span (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_span"
    - title: "Closure operator (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Closure_operator"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]) and let
$S, T \subseteq V$. Then:

1. **Extensive.** $S \subseteq \operatorname{span}(S)$.
2. **Monotone.** If $S \subseteq T$ then
   $\operatorname{span}(S) \subseteq \operatorname{span}(T)$.
3. **Idempotent.** $\operatorname{span}(\operatorname{span}(S)) = \operatorname{span}(S)$.
4. $\operatorname{span}(S) = S$ **if and only if** $S$ is a linear subspace of $V$
   ([[def-linear-subspace]]).
5. $\operatorname{span}(S \cup \{0_V\}) = \operatorname{span}(S)$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, and subsets $S, T \subseteq V$.

[L1] $\operatorname{span}(S)$ is a linear subspace of $V$, it contains $S$, and it is contained in every linear subspace of $V$ that contains $S$; the same holds with $T$ or any other subset in place of $S$ ([[def-linear-combination-and-span]]).

[L2] Every linear subspace of $V$ contains $0_V$, by condition (W1) ([[def-linear-subspace]]).

## Proof

**Proof technique:** direct.

1.1 Claim 1 is part of the defining description of the span: it contains $S$. [L1]

1.2 Claim 2. Suppose $S \subseteq T$. Then $\operatorname{span}(T)$ is a linear subspace of $V$ containing $T$, hence containing $S$; since $\operatorname{span}(S)$ is contained in every linear subspace containing $S$, we get $\operatorname{span}(S) \subseteq \operatorname{span}(T)$. [L1]

1.3 If $S$ is a linear subspace of $V$, then $S$ is itself a linear subspace containing $S$, so $\operatorname{span}(S) \subseteq S$; together with $S \subseteq \operatorname{span}(S)$ this gives $\operatorname{span}(S) = S$. [L1]

1.4 Conversely, if $\operatorname{span}(S) = S$ then $S$ is a linear subspace of $V$, because $\operatorname{span}(S)$ is one. [L1]

1.5 $0_V \in \operatorname{span}(S)$, since $\operatorname{span}(S)$ is a linear subspace of $V$. [L1, L2]

2.1 Steps 1.3 and 1.4 together are claim 4. [step 1.3, step 1.4]

2.2 Claim 5. From $S \subseteq S \cup \{0_V\}$ and step 1.2 we get $\operatorname{span}(S) \subseteq \operatorname{span}(S \cup \{0_V\})$. Conversely $S \subseteq \operatorname{span}(S)$ by step 1.1 and $0_V \in \operatorname{span}(S)$ by step 1.5, so $S \cup \{0_V\} \subseteq \operatorname{span}(S)$, and since $\operatorname{span}(S)$ is a linear subspace containing $S \cup \{0_V\}$, minimality gives $\operatorname{span}(S \cup \{0_V\}) \subseteq \operatorname{span}(S)$. [step 1.1, step 1.2, step 1.5, L1]

3.1 Claim 3. The set $\operatorname{span}(S)$ is a linear subspace of $V$, so applying claim 4 to it gives $\operatorname{span}(\operatorname{span}(S)) = \operatorname{span}(S)$. [step 2.1, L1]

4.1 Claims 1, 2, 3, 4 and 5 are steps 1.1, 1.2, 3.1, 2.1 and 2.2 respectively. [step 1.1, step 1.2, step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **These three properties are exactly what makes the span a closure operator** on
  the subsets of $V$: extensive, monotone and idempotent. The closed sets of that
  operator are the linear subspaces, which is the content of claim 4. The subgroup
  generated by a subset ([[def-generated-subgroup]]) is the closure operator of
  the same shape on the subsets of a group.

- **Claim 5 says $0_V$ is invisible to the span.** Adding or deleting the zero
  vector changes nothing, since every linear subspace contains it. It does not
  follow, and is not claimed here, that deleting any other single vector changes
  nothing: that question is about linear independence and belongs to a later page.

- **Claim 2 is used constantly in the form "a bigger set spans more".** It is what
  lets a spanning set be enlarged freely, and, with claim 3, what lets the span be
  computed in stages: spanning a set, then spanning the result, gains nothing.
````

### `lem-span-of-a-single-vector`

````markdown
---
id: lem-span-of-a-single-vector
kind: lemma
title: "$\\operatorname{span}\\{v\\} = \\{\\, \\lambda v : \\lambda \\in F \\,\\}$, which is $\\{0_V\\}$ when $v = 0_V$, and when $v \\ne 0_V$ contains $0_V$ only as the multiple $0_F v$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-linear-combination-and-span, lem-linear-subspace-criterion, lem-vector-space-elementary-consequences, def-linear-subspace, def-vector-space, def-field]
justified_by: []
aliases: [lem-line-through-the-origin]
landmark: false
short: "$\\operatorname{span}\\{v\\} = Fv$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Linear span (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_span"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 2"
      url: "https://linear.axler.net/"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]) and let
$v \in V$. Write $Fv := \{\, \lambda v : \lambda \in F \,\}$. Then:

1. $\operatorname{span}\{v\} = Fv$;
2. if $v = 0_V$ then $\operatorname{span}\{v\} = \{0_V\}$;
3. if $v \ne 0_V$ then, for $\lambda, \mu \in F$, $\lambda v = \mu v$ holds only
   when $\lambda = \mu$; in particular $\lambda v = 0_V$ holds only for
   $\lambda = 0_F$, so $0_V$ occurs in $\operatorname{span}\{v\}$ only as the
   multiple $0_F v$, and $\operatorname{span}\{v\} \ne \{0_V\}$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, and a vector $v \in V$.

[L1] $\operatorname{span}\{v\}$ is a linear subspace of $V$ containing $v$, and it is contained in every linear subspace of $V$ containing $v$ ([[def-linear-combination-and-span]]).

[L2] A linear subspace is closed under scalar multiplication, by condition (W3) ([[def-linear-subspace]]).

[L3] One-step test: a nonempty $T \subseteq V$ with $\lambda u + w \in T$ for all $\lambda \in F$ and $u, w \in T$ is a linear subspace of $V$ ([[lem-linear-subspace-criterion]]).

[L4] The vector space axioms ([[def-vector-space]]): (V3) $(\lambda+\mu)w = \lambda w + \mu w$; (V4) $(\lambda\mu)w = \lambda(\mu w)$; (V5) $1_F w = w$.

[L5] $0_F w = 0_V$ and $\lambda 0_V = 0_V$ for all $\lambda \in F$ and $w \in V$; $(-\lambda)w = -(\lambda w)$, which is claim 3 there; and if $\lambda w = 0_V$ then $\lambda = 0_F$ or $w = 0_V$ ([[lem-vector-space-elementary-consequences]]).

[L6] $F$ is a field, so $(F,+,0_F)$ is an abelian group with $0_F, 1_F \in F$ and an additive inverse $-\mu$ for each $\mu$; adding $\mu$ to both sides of $\lambda + (-\mu) = 0_F$ therefore gives $\lambda = \mu$ ([[def-field]]).

## Proof

**Proof technique:** direct.

1.1 $Fv$ is nonempty, since $0_F v = 0_V$ lies in it. [L5]

1.2 $Fv$ is closed under the one-step expression: for $\lambda, \mu, \nu \in F$, $\lambda(\mu v) + \nu v = (\lambda\mu)v + \nu v = (\lambda\mu + \nu)v \in Fv$, by (V4) and (V3). [L4]

1.3 $v \in Fv$, since $v = 1_F v$ by (V5). [L4]

1.4 If $W$ is a linear subspace of $V$ with $v \in W$, then $\lambda v \in W$ for every $\lambda \in F$, so $Fv \subseteq W$. [L2]

1.5 If $\lambda v = \mu v$ then $0_V = \lambda v + (-(\mu v)) = \lambda v + (-\mu)v = (\lambda + (-\mu))v$, using claim 3 of the elementary consequences and (V3); so $\lambda + (-\mu) = 0_F$ or $v = 0_V$. [L4, L5]

2.1 $Fv$ is a linear subspace of $V$ containing $v$, by the one-step test. [step 1.1, step 1.2, step 1.3, L3]

2.2 If $v \ne 0_V$ and $\lambda v = \mu v$, then step 1.5 forces $\lambda + (-\mu) = 0_F$, that is $\lambda = \mu$; taking $\mu = 0_F$ and using $0_F v = 0_V$ gives that $\lambda v = 0_V$ only for $\lambda = 0_F$. [step 1.5, L5, L6]

3.1 $\operatorname{span}\{v\} = Fv$: the span is contained in $Fv$ because $Fv$ is a linear subspace containing $v$, and $Fv$ is contained in the span because the span is a linear subspace containing $v$. This is claim 1. [step 2.1, step 1.4, L1]

4.1 If $v = 0_V$ then every scalar multiple is $\lambda 0_V = 0_V$, so $Fv = \{0_V\}$; combined with claim 1 this is claim 2. [step 3.1, L5]

4.2 Suppose $v \ne 0_V$. Then $\lambda v = \mu v$ forces $\lambda = \mu$, and $\lambda v = 0_V$ forces $\lambda = 0_F$; moreover $v = 1_F v$ lies in $Fv$, which is $\operatorname{span}\{v\}$ by claim 1, and $v \ne 0_V$, so $\operatorname{span}\{v\} \ne \{0_V\}$. This is claim 3. [step 2.2, step 3.1, L4]

5.1 Claims 1, 2 and 3 are steps 3.1, 4.1 and 4.2. [step 3.1, step 4.1, step 4.2] ∎

## Remarks

- **The set $Fv$ is what a "line through the origin" is, over any field.** Claim 3
  says that for $v \ne 0_V$ the scalars are recovered from the multiples: distinct
  scalars give distinct vectors. That is the first place where claim 5 of
  [[lem-vector-space-elementary-consequences]] does real work, and it is what
  makes a single nonzero vector behave like a coordinate axis.

- **The word "line" is informal here.** Dimension is not available on this page,
  so nothing above asserts that $\operatorname{span}\{v\}$ is one-dimensional; what
  is asserted is exactly the three displayed claims. The companion page uses the
  word in the same informal way, for the same sets.

- **The zero vector is not an exception to claim 1, only to claim 3.** At
  $v = 0_V$ the set $Fv$ collapses to $\{0_V\}$ and the map $\lambda \mapsto
  \lambda v$ is constant, so no scalar is recoverable. This is why claim 3 carries
  the hypothesis $v \ne 0_V$ and claim 1 does not.
````

### `lem-sum-is-span-of-union`

````markdown
---
id: lem-sum-is-span-of-union
kind: lemma
title: "$\\sum_{i<n} U_i = \\operatorname{span}\\bigl(\\bigcup_{i<n} U_i\\bigr)$, so the sum is the smallest linear subspace containing every $U_i$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-sum-of-linear-subspaces, def-linear-combination-and-span, def-linear-subspace, def-monoid-finite-product, def-vector-space, thm-induction-principle, lem-nat-order-is-membership, def-natural-numbers]
justified_by: []
aliases: []
landmark: false
short: "$\\sum U_i = \\operatorname{span}(\\bigcup U_i)$"
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
  audited: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Linear subspace (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_subspace"
    - title: "Linear span (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Linear_span"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed. (free PDF, CC BY-NC)"
      url: "https://linear.axler.net/LADR4e.pdf"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]), let
$n \in \mathbb{N}$, and let $U$ be a finite family of linear subspaces $U_i$ of
$V$ indexed by $i < n$ ([[def-sum-of-linear-subspaces]]). Write

$$\bigcup_{i<n} U_i \;=\; \{\, x \in V \;:\; x \in U_i \text{ for some } i < n \,\}.$$

Then

$$\sum_{i<n} U_i \;=\; \operatorname{span}\Bigl(\bigcup_{i<n} U_i\Bigr),$$

so $\sum_{i<n} U_i$ is the smallest linear subspace of $V$ containing $U_i$ for
every $i < n$: it contains each $U_i$, and it is contained in every linear
subspace of $V$ that contains each $U_i$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, a natural number $n$, and a family of linear subspaces $U_i$ of $V$ indexed by $i < n$.

[L1] $\sum_{i<n} U_i$ is a linear subspace of $V$ whose elements are exactly the vectors $\sum_{i<n} u_i$ with $u_i \in U_i$ for every $i < n$; and a list vanishing off a single index $j < n$ sums to its value at $j$ ([[def-sum-of-linear-subspaces]]).

[L2] For $T \subseteq V$, the span $\operatorname{span}(T)$ is a linear subspace of $V$ containing $T$ and contained in every linear subspace of $V$ containing $T$ ([[def-linear-combination-and-span]]).

[L3] A linear subspace contains $0_V$ by (W1) and is closed under $+$ by (W2) ([[def-linear-subspace]]).

[L4] Finite sums in $(V,+,0_V)$: $\sum_{i<0} u_i = 0_V$ and $\sum_{i<\sigma(m)} u_i = \bigl(\sum_{i<m} u_i\bigr) + u_m$ ([[def-monoid-finite-product]], [[def-linear-combination-and-span]]).

[L5] Induction on $\mathbb{N}$, whose elements are the von Neumann naturals with $m = \{\, k : k < m \,\}$ ([[thm-induction-principle]], [[def-natural-numbers]], [[lem-nat-order-is-membership]]).

## Proof

**Proof technique:** direct.

1.1 Each $U_j$ with $j < n$ is contained in $\sum_{i<n} U_i$: given $x \in U_j$, let $u : n \to V$ be the list with $u_j = x$ and $u_i = 0_V$ for $i \ne j$; then $u_i \in U_i$ for every $i < n$, since each $U_i$ contains $0_V$, and this list sums to $x$. [L1, L3]

1.2 A linear subspace $W$ of $V$ is closed under finite sums: for every $m \in \mathbb{N}$ and every list $u : m \to W$, the vector $\sum_{i<m} u_i$ lies in $W$. By induction on $m$: at $m = 0$ the sum is $0_V \in W$ by (W1), and if it holds at $m$ then $\sum_{i<\sigma(m)} u_i = \bigl(\sum_{i<m} u_i\bigr) + u_m$ lies in $W$ by the inductive hypothesis and (W2). [L3, L4, L5]

2.1 $\bigcup_{i<n} U_i \subseteq \sum_{i<n} U_i$ by step 1.1, and $\sum_{i<n} U_i$ is a linear subspace of $V$, so the span of the union is contained in it: $\operatorname{span}\bigl(\bigcup_{i<n} U_i\bigr) \subseteq \sum_{i<n} U_i$. [step 1.1, L1, L2]

2.2 Conversely, $\operatorname{span}\bigl(\bigcup_{i<n} U_i\bigr)$ is a linear subspace of $V$ containing the union, hence containing each $U_i$; so any list $u : n \to V$ with $u_i \in U_i$ for every $i < n$ takes its values in it, and step 1.2 gives $\sum_{i<n} u_i \in \operatorname{span}\bigl(\bigcup_{i<n} U_i\bigr)$. As these vectors are exactly the elements of $\sum_{i<n} U_i$, that yields $\sum_{i<n} U_i \subseteq \operatorname{span}\bigl(\bigcup_{i<n} U_i\bigr)$. [step 1.2, L1, L2]

3.1 The two inclusions give $\sum_{i<n} U_i = \operatorname{span}\bigl(\bigcup_{i<n} U_i\bigr)$. [step 2.1, step 2.2]

4.1 A linear subspace of $V$ contains $\bigcup_{i<n} U_i$ exactly when it contains $U_i$ for every $i < n$, so the span of the union is the smallest linear subspace containing every $U_i$; by step 3.1 the sum is that subspace. [step 3.1, L2] ∎

## Remarks

- **The empty family is consistent with the statement.** At $n = 0$ the union is
  $\varnothing$ and the sum is $\{0_V\}$ ([[def-sum-of-linear-subspaces]]), while
  $\operatorname{span}(\varnothing) = \{0_V\}$
  ([[lem-span-is-the-set-of-linear-combinations]]), so both sides agree. This is
  the case that would be lost if $\mathbb{N}$ started at $1$.

- **What the identification buys.** The left-hand side is concrete, a set of
  vectors one can produce; the right-hand side is a universal property, "smallest
  linear subspace containing all the $U_i$". Having both means the sum can be
  computed by exhibiting decompositions and bounded by minimality, which is how
  the examples on the companion page proceed.

- **This is the linear analogue of a familiar fact about subgroups.** The subgroup
  generated by a union of subgroups is the smallest subgroup containing them all
  ([[def-generated-subgroup]]); here the sum plays that role, and no separate
  "generated by" notation is needed for linear subspaces because
  [[lem-span-is-the-set-of-linear-combinations]] already describes the span from
  inside.
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

### `thm-unique-coordinates-with-respect-to-an-ordered-basis`

````markdown
---
id: thm-unique-coordinates-with-respect-to-an-ordered-basis
kind: theorem
title: "A finite list $v : n \\to V$ is an ordered basis if and only if every $x \\in V$ equals $\\sum_{i<n} \\lambda_i v_i$ for exactly one $\\lambda : n \\to F$; those scalars are the coordinates of $x$ in that ordered basis"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [def-linear-basis, def-linear-independence, lem-independent-list-is-injective, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, def-sum-of-linear-subspaces, def-monoid-finite-product, def-linear-subspace, lem-linear-subspace-criterion, def-vector-space, def-field, lem-vector-space-elementary-consequences, def-natural-numbers, lem-nat-order-is-membership, def-injection-surjection-bijection]
justified_by: []
aliases: [def-coordinates, thm-coordinates-unique]
landmark: true
short: "coordinates in an ordered basis"
proof_strategy: direct
verification:
  audited: 2026-07-28
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-28
sources:
  scraped: []
  references:
    - title: "Basis (linear algebra) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Basis_(linear_algebra)"
    - title: "S. Axler, Linear Algebra Done Right, 4th ed., Ch. 3"
      url: "https://linear.axler.net/"
    - title: "UC Berkeley Math 54 notes: Bases and coordinates"
      url: "https://math.berkeley.edu/~arash/54/notes/04_04.pdf"
pipeline_run: null
---

## Statement

Let $V$ be a vector space over a field $F$ ([[def-vector-space]]), let
$n \in \mathbb{N}$ and let $v : n \to V$ be a finite list
([[def-linear-combination-and-span]]).

1. **The span of the image of a list.** Whether or not $v$ is injective,
   $$\operatorname{span}(v[n]) \;=\; \Bigl\{\, \sum_{i<n}\lambda_i v_i \;:\; \lambda : n \to F \,\Bigr\} .$$
2. **Coordinates.** $v$ is an ordered basis of $V$ ([[def-linear-basis]]) **if and
   only if** for every $x \in V$ there is **exactly one** $\lambda : n \to F$ with
   $x = \sum_{i<n}\lambda_i v_i$. When that holds, this $\lambda$ is called the
   **coordinate list of $x$ with respect to the ordered basis $v$**, and
   $\lambda_i$ its **$i$-th coordinate**.

The coordinate list is attached to the **ordered** basis and not to the basis as
a set: reordering the list permutes the coordinates of every vector, as the
companion page shows on a worked example in $\mathbb{R}^{2}$.

## Facts & Assumptions

**Given:** A field $F$, a vector space $V$ over $F$, a natural number $n$ and a list $v : n \to V$.

[L1] For $T \subseteq V$, $\operatorname{span}(T)$ is a linear subspace of $V$ containing $T$ and contained in every linear subspace of $V$ containing $T$, and it is exactly the set of linear combinations $\sum_{i<p}\mu_i y_i$ with $y : p \to T$ ([[def-linear-combination-and-span]], [[lem-span-is-the-set-of-linear-combinations]]).

[L2] Finite sums: $\sum_{i<0}u_i = 0_V$ and $\sum_{i<\sigma(p)}u_i = \bigl(\sum_{i<p}u_i\bigr) + u_p$ ([[def-monoid-finite-product]], [[def-linear-combination-and-span]]); (F1) an all-$0_V$ list sums to $0_V$; (F2) $\lambda\sum_{i<p}u_i + \sum_{i<p}w_i = \sum_{i<p}(\lambda u_i + w_i)$; (F3) with (F1), a list vanishing off a single index $j$ sums to its value at $j$ ([[def-sum-of-linear-subspaces]]).

[L3] One-step test: a nonempty $W \subseteq V$ with $\mu u + w \in W$ for all $\mu \in F$ and $u, w \in W$ is a linear subspace of $V$ ([[lem-linear-subspace-criterion]], [[def-linear-subspace]]).

[L4] The vector space axioms ([[def-vector-space]]) and their consequences ([[lem-vector-space-elementary-consequences]]): $(V,+,0_V)$ is an abelian group; (V3) $(\lambda+\mu)y = \lambda y + \mu y$; (V4) $(\lambda\mu)y = \lambda(\mu y)$; (V5) $1_F y = y$; $0_F y = 0_V$; and $(-1_F)y = -y$.

[L5] An ordered basis of $V$ is an injective list $v : n \to V$ whose image is a basis, equivalently a linearly independent list $v : n \to V$ with $\operatorname{span}(v[n]) = V$; and a list is linearly independent exactly when it is injective with linearly independent image ([[def-linear-basis]], [[def-linear-independence]], [[lem-independent-list-is-injective]], claim 6).

[L6] $F$ is a field: it has $0_F$ and $1_F$, and every $\mu \in F$ has an additive inverse $-\mu$ with $\mu + (-\mu) = 0_F$ ([[def-field]]).

[L7] Images and injectivity are as in [[def-injection-surjection-bijection]]; $n = \{0,\dots,n-1\}$ ([[def-natural-numbers]], [[lem-nat-order-is-membership]]).

## Proof

**Proof technique:** direct.

1.1 Write $W := \{\, \sum_{i<n}\lambda_i v_i : \lambda : n \to F \,\}$. It is a linear subspace of $V$: it contains $0_V$, taking $\lambda_i = 0_F$ for every $i$, since then every entry $0_F v_i$ is $0_V$ and (F1) applies; and for $\mu \in F$ and elements $x = \sum_{i<n}\lambda_i v_i$ and $y = \sum_{i<n}\kappa_i v_i$ of $W$, the identity (F2) gives $\mu x + y = \sum_{i<n}\bigl(\mu(\lambda_i v_i) + \kappa_i v_i\bigr) = \sum_{i<n}(\mu\lambda_i + \kappa_i)v_i$ by (V4) and (V3), which again lies in $W$. So the one-step test applies. [L2, L3, L4]

1.2 $v[n] \subseteq W$: for $j < n$ take $\lambda_j = 1_F$ and $\lambda_i = 0_F$ for $i \ne j$; the list $i \mapsto \lambda_i v_i$ then vanishes off the single index $j$ and has the value $1_F v_j = v_j$ there, so it sums to $v_j$. [L2, L4]

1.3 $W \subseteq \operatorname{span}(v[n])$: each $\sum_{i<n}\lambda_i v_i$ is a linear combination of the list $v$, which takes its values in $v[n]$, so it lies in the span of $v[n]$. [L1, L7]

2.1 Claim 1. By steps 1.1 and 1.2 the set $W$ is a linear subspace of $V$ containing $v[n]$, so minimality of the span gives $\operatorname{span}(v[n]) \subseteq W$; with step 1.3 the two sets are equal. [step 1.1, step 1.2, step 1.3, L1]

3.1 Claim 2, from left to right. Let $v$ be an ordered basis, so the list $v$ is linearly independent and $\operatorname{span}(v[n]) = V$. Existence: by step 2.1 every $x \in V = \operatorname{span}(v[n])$ lies in $W$, that is, $x = \sum_{i<n}\lambda_i v_i$ for some $\lambda : n \to F$. Uniqueness: if $\sum_{i<n}\lambda_i v_i = \sum_{i<n}\kappa_i v_i = x$, apply (F2) with the scalar $-1_F$ to the lists $i \mapsto \kappa_i v_i$ and $i \mapsto \lambda_i v_i$; the left-hand side is $-x + x = 0_V$ and the right-hand side is $\sum_{i<n}\bigl((-1_F)(\kappa_i v_i) + \lambda_i v_i\bigr) = \sum_{i<n}(\lambda_i + (-\kappa_i))v_i$ by (V4), (V3) and $(-1_F)\kappa_i = -\kappa_i$. Independence of the list $v$ now gives $\lambda_i + (-\kappa_i) = 0_F$, hence $\lambda_i = \kappa_i$, for every $i < n$. [step 2.1, L2, L4, L5, L6]

3.2 Claim 2, from right to left. Suppose every $x \in V$ is $\sum_{i<n}\lambda_i v_i$ for exactly one $\lambda$. Then $V \subseteq W$, and step 2.1 gives $W = \operatorname{span}(v[n]) \subseteq V$, so $\operatorname{span}(v[n]) = V$. The list $v$ is independent: if $\sum_{i<n}\lambda_i v_i = 0_V$, then $\lambda$ and the all-zero scalar list both represent $0_V$, the latter by (F1) and $0_F v_i = 0_V$, so uniqueness at $x = 0_V$ forces $\lambda_i = 0_F$ for every $i < n$. Being independent, $v$ is injective with linearly independent image, so $v[n]$ is a basis of $V$ and $v$ is an ordered basis. [step 2.1, L2, L4, L5]

4.1 Claim 1 is step 2.1, and claim 2 is steps 3.1 and 3.2 together. [step 2.1, step 3.1, step 3.2] ∎

## Remarks

- **Claim 1 needs no hypothesis on the list.** It says that spanning by a finite set can always be computed with one coefficient per listed vector, repetitions and all. It is claim 2 that turns this into a coordinate system, and what it adds is uniqueness, which is exactly independence.

- **The assignment $x \mapsto \lambda$ is deliberately left un-named here.** It is a bijection $V \to F^{n}$ compatible with the operations, that is a linear isomorphism; but linear maps are the subject of a later page, and naming the map now would be to use a notion this page does not have. What is used below is only the statement above: existence and uniqueness of the coordinate list.

- **Reordering is not a harmless relabelling.** Two ordered bases with the same image assign different coordinate lists to the same vector, so "the coordinates of $x$ in $B$" is incomplete language when $B$ is a set. The companion page computes the same vector's coordinates in three ordered bases of $\mathbb{R}^{2}$, two of which have the same image.
````

### `thm-zorn`

````markdown
---
id: thm-zorn
kind: theorem
title: "Zorn's lemma"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [thm-bourbaki-witt, def-axiom-of-choice, def-maximal-element, def-upper-bound, def-chain, def-partial-order]
justified_by: []
forward_refs: [cex-zorn-hypothesis-fails]
aliases: [thm-zorns-lemma]
landmark: true
short: "Zorn's lemma"
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
    - title: "Encyclopedia of Mathematics, Zorn lemma"
      url: "https://encyclopediaofmath.org/wiki/Zorn_lemma"
    - title: "Bourbaki–Witt theorem (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Bourbaki%E2%80%93Witt_theorem"
    - title: "Zorn's lemma (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Zorn%27s_lemma"
    - title: "Axiom of choice (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Axiom_of_choice"
pipeline_run: null
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $(P, \le)$ be a
nonempty poset in which **every chain has an upper bound**. Then $P$ has a
maximal element ([[def-maximal-element]]).

Note the hypothesis asks only for an upper bound, not a least upper bound, and
the conclusion asserts only that a maximal element exists, never that a greatest
one does.

## Facts & Assumptions

**Given:** A nonempty poset $(P, \le)$ in which every chain has an upper bound, and the Axiom of Choice.

[A1] $P \ne \emptyset$, and every chain $C \subseteq P$ has an upper bound in $P$.

[A2] Every family of nonempty sets has a choice function ([[def-axiom-of-choice]]).

[L1] A progressive map on a chain-complete poset has a fixed point ([[thm-bourbaki-witt]]).

[L2] $m$ is maximal when there is no $x$ with $m < x$ ([[def-maximal-element]]).

[L3] $u$ is a strict upper bound of $S$ when $s < u$ for every $s \in S$ ([[def-upper-bound]]).

[L4] The empty set is a chain, and a subset is a chain when any two of its elements are comparable ([[def-chain]]).

[L5] $\le$ is a partial order, in particular transitive ($u \le v$ and $v \le w$ imply $u \le w$) and antisymmetric ($u \le v$ and $v \le u$ imply $u = v$); the strict order $u < v$ means $u \le v$ and $u \ne v$, so $<$ is irreflexive ([[def-partial-order]]).

[L6] Inclusion is a partial order on any collection of sets: $A \subseteq A$; $A \subseteq B$ and $B \subseteq A$ give $A = B$ by extensionality; and $A \subseteq B \subseteq C$ gives $A \subseteq C$ ([[def-partial-order]]).

## Proof

**Proof technique:** contradiction.

1.1 Suppose $P$ has no maximal element. [assume-contra]

1.2 Let $\mathcal{C}$ be the set of all chains of $P$, a subset of the power set of $P$, partially ordered by inclusion. [L4, L6, construct]

2.1 $(\mathcal{C}, \subseteq)$ is a chain-complete poset: if $\mathcal{D} \subseteq \mathcal{C}$ is a chain under inclusion then $\bigcup \mathcal{D}$ is a chain of $P$, since any two of its elements lie in a common member of $\mathcal{D}$, and it is the least upper bound of $\mathcal{D}$ under inclusion; the empty chain has least upper bound $\bigcup \emptyset = \emptyset$, which is a chain. [step 1.2, L4, L6]

2.2 For $C \in \mathcal{C}$ let $S_C$ be the set of strict upper bounds of $C$ in $P$. [step 1.2, L3, construct]

3.1 Each $S_C$ is nonempty: $C$ has an upper bound $u$ in $P$ by hypothesis, taking any element of the nonempty $P$ when $C = \emptyset$; by assumption $u$ is not maximal, so there is $v$ with $u < v$; then for every $c \in C$ transitivity gives $c \le v$ from $c \le u \le v$, and $c \ne v$, since $c = v$ would give $v \le u$ and $u \le v$, hence $u = v$ by antisymmetry, contradicting $u < v$; so $c < v$ for every $c \in C$ and $v \in S_C$. [step 2.2, step 1.1, A1, L2, L3, L5]

4.1 Apply the Axiom of Choice to the family $\mathcal{S} = \{S_C : C \in \mathcal{C}\}$, every member of which is nonempty, obtaining a choice function $g$ with $g(S) \in S$ for each $S \in \mathcal{S}$; composing with the map $C \mapsto S_C$, which is a function on $\mathcal{C}$, yields a selection $C \mapsto g(S_C) \in S_C$ defined for every chain $C$, and no injectivity of $C \mapsto S_C$ is needed, since two chains with the same set of strict upper bounds simply receive the same chosen element. [step 3.1, A2]

5.1 Define $f(C) = C \cup \{g(S_C)\}$ for $C \in \mathcal{C}$; this is again a chain, because $g(S_C)$ is a strict upper bound of $C$ and so is comparable to every element of $C$. [step 4.1, step 2.2, L3, L4, L5, construct]

6.1 $f$ is progressive for inclusion, since $C \subseteq f(C)$ by construction. [step 5.1]

7.1 By Bourbaki–Witt applied to the chain-complete $\mathcal{C}$ and the progressive $f$, there is $C_0 \in \mathcal{C}$ with $f(C_0) = C_0$, that is $g(S_{C_0}) \in C_0$. [step 2.1, step 6.1, L1]

8.1 But $g(S_{C_0})$ is a strict upper bound of $C_0$, so every element of $C_0$ is strictly below it, giving $g(S_{C_0}) < g(S_{C_0})$, which is impossible because $<$ is irreflexive. [step 7.1, step 4.1, L3, L5, discharge-contradiction] ∎

## Remarks

- **The Axiom of Choice is used exactly once, at step 4.1**, and nowhere else. Everything before it, including Bourbaki–Witt, is a theorem of ZF. That is why the fixed point theorem is kept as a separate item: it marks the boundary between what is free and what is bought.
- The hypothesis is about **all** chains, including the empty one, whose upper bounds are exactly the elements of $P$. So on this library's convention, where $\emptyset$ is a chain ([[def-chain]]), requiring every chain to have an upper bound **already forces** $P \ne \emptyset$, and the nonemptiness hypothesis is stated separately for emphasis rather than as an independent assumption. In particular the empty poset does **not** satisfy the hypothesis: there the empty chain has no upper bound, because there is nothing at all to be one. Under the competing convention, on which chains are required to be nonempty, nonemptiness of $P$ is genuinely independent and cannot be dropped. See [[cex-zorn-hypothesis-fails]] for the failure when unbounded chains exist.
- The conclusion is **maximal, not greatest**, and conflating the two is the most common error in applying the lemma ([[fs-maximal-is-greatest]]).
- The converse holds: Zorn's lemma implies the Axiom of Choice ([[thm-zorn-implies-ac]]), so the two are equivalent over ZF ([[cor-ac-iff-zorn]]).
````

