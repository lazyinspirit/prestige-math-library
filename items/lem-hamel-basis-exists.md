---
id: lem-hamel-basis-exists
kind: lemma
title: "Assuming the Axiom of Choice, $\\mathbb{R}$ has a Hamel basis over $\\mathbb{Q}$: there is $B \\subseteq \\mathbb{R}$ such that every real is a finite $\\mathbb{Q}$-linear combination of elements of $B$ in exactly one way, and each basis vector carries a well-defined $\\mathbb{Q}$-linear coefficient map"
status: draft
origin: session
deps: [def-vector-space, lem-restriction-of-scalars, def-subfield, def-linear-combination-and-span, lem-span-is-the-set-of-linear-combinations, lem-dependent-iff-a-vector-lies-in-the-span-of-the-others, lem-span-monotone-and-idempotent, lem-span-of-a-single-vector, lem-sum-is-span-of-union, def-sum-of-linear-subspaces, def-internal-direct-sum, lem-direct-sum-criterion, def-linear-subspace, def-linear-independence, def-linear-basis, cor-every-vector-space-has-a-basis, thm-unique-coordinates-with-respect-to-an-ordered-basis, def-axiom-of-choice, thm-zorn, lem-rat-embeds-dense, thm-rationals-countable, thm-r-uncountable, lem-countable-iff-surjection-from-n, def-countable, def-field, def-complete-ordered-field, def-injection-surjection-bijection, def-natural-numbers]
justified_by: []
aliases: [lem-hamel-basis]
landmark: true
short: "a Hamel basis of $\\mathbb{R}$ over $\\mathbb{Q}$"
proof_strategy: direct
verification:
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

- **How this differs from [[ex-hamel-basis-of-r-over-q]], exactly.** That item,
  homed on the examples page of *Linear independence, bases and dimension*,
  proves three things: that $\mathbb{R}$ is a vector space over the canonical
  copy of $\mathbb{Q}$, that it has a basis there, and that **every** such basis
  is infinite, together with the observation that the existence proof exhibits
  none. The present lemma proves the first two and does **not** prove the third:
  nothing above says that a Hamel basis is infinite. What it adds instead is
  claims 2 to 5 — the representation by injective lists, uniqueness of the
  coefficients along a list, the coefficient map $\Lambda_{b_{\star}}$ of a
  single basis vector with its kernel, and the fact that
  $W_{b_{\star}} \ne \{0\}$ — none of which appears there. So neither statement
  contains the other, and they are **not** the same statement.

  The duplication of the two shared clauses is deliberate. An examples page is a
  leaf of this library and nothing outside it may depend on an item homed there,
  so a citable Hamel basis had to be built on a page that is not a leaf. The
  proofs of those clauses are the same proof, and no originality is claimed for
  them.

- **Where the choice is spent.** Once, in [[cor-every-vector-space-has-a-basis]],
  which runs through [[thm-zorn]]. Everything after step 3.1 is elementary
  linear algebra over an arbitrary field, applied to $\mathbb{R}$ over
  $\mathbb{Q}$. Nothing here exhibits a Hamel basis, and nothing here claims that
  none can be exhibited; that would be an assertion about definability, and this
  library has established nothing of the kind.

- **The coefficient map is the source of the pathology.**
  $\Lambda_{b_{\star}}$ is additive ([[def-additive-function]]) and takes only
  rational values, so it is not of the form $x \mapsto cx$; that is the whole of
  [[fs-additive-implies-linear]], and the companion page reads off from it a
  function unbounded on every interval, with dense graph and dense level sets
  on the companion examples page.
