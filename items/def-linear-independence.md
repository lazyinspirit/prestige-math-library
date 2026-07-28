---
id: def-linear-independence
kind: definition
title: "Linear independence: a finite list $v : n \\to V$ is independent when $\\sum_{i<n} \\lambda_i v_i = 0_V$ forces every $\\lambda_i = 0_F$, and a subset $S \\subseteq V$ is independent when every injective finite list into $S$ is independent"
status: draft
origin: session
deps: [def-vector-space, def-field, lem-vector-space-elementary-consequences, def-linear-combination-and-span, def-monoid-finite-product, def-natural-numbers, lem-nat-order-is-membership, def-injection-surjection-bijection]
justified_by: []
aliases: [def-linearly-independent, def-linear-dependence]
landmark: true
short: "linearly independent list; independent subset"
verification:
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
