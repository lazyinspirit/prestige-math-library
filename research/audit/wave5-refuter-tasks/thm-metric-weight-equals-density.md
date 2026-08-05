# Adversarial proof reading — `thm-metric-weight-equals-density`

## The item under review, in full

`items/thm-metric-weight-equals-density.md`

```markdown
---
id: thm-metric-weight-equals-density
kind: theorem
title: "Under choice, every metrizable space has $w(X)=d(X)$"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-generated
deps: [thm-basic-cardinal-function-inequalities, def-metrizable-space, def-metric-topology, thm-rationals-countable, lem-rat-embeds-dense, def-cardinal-arithmetic, cor-cardinal-absorption, def-axiom-of-choice]
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
    - title: "D. H. Fremlin, Measure Theory, Chapter 5A"
      url: "https://www1.essex.ac.uk/maths/people/fremlin/chap5a.pdf"
pipeline_run: null
---
## Statement
Assuming choice, every metrizable space satisfies $w(X)=d(X)$ under the raw convention.
## Facts & Assumptions
**Given:** The Axiom of Choice, a metric inducing the topology of $X$, and a dense set $D$ of least cardinality $\kappa=d(X)$.

[L1] $d(X)\le w(X)$ ([[thm-basic-cardinal-function-inequalities]]).

[L2] The rationals are countably infinite and lie densely between reals ([[thm-rationals-countable]], [[lem-rat-embeds-dense]]).

[L3] If $\kappa$ is infinite, then $\kappa\cdot\aleph_0=\kappa$ ([[def-cardinal-arithmetic]], [[cor-cardinal-absorption]]).
## Proof

**Proof technique:** direct.

1.1 Suppose first that $\kappa$ is infinite. The family $$\mathcal B=\{B(d,q):d\in D,\ q\in\mathbb Q,\ q>0\}$$ has cardinality at most $\kappa\cdot\aleph_0=\kappa$ by [L2] and [L3]. It is a basis: if $x\in U$ with $U$ open, choose $\varepsilon>0$ with $B(x,\varepsilon)\subseteq U$, choose $d\in D$ with $d(x,d)<\varepsilon/3$, and then by [L2] choose a positive rational $q$ with $d(x,d)<q<\varepsilon-d(x,d)$. Thus $x\in B(d,q)\subseteq B(x,\varepsilon)\subseteq U$. Hence $w(X)\le\kappa=d(X)$. [given, L2, L3]

1.2 Suppose $\kappa$ is finite. If $D=\varnothing$, density forces $X=\varnothing$ and both raw invariants are $0$. Otherwise $X=D$: if $x\notin D$, the finitely many positive distances $d(x,a)$ for $a\in D$ have a positive minimum, and a smaller ball about $x$ misses $D$, contradicting density. A finite metric space is discrete, since at each point a ball smaller than all distances to the other finitely many points is a singleton. The singleton family is a basis of size $|X|$, and every basis of a discrete space must contain each singleton; also every dense set must contain every point. Therefore $w(X)=|X|=d(X)=\kappa$. [given]

2.1 Step 1.1 handles infinite density and step 1.2 handles finite density; combining the resulting upper bound with [L1] gives $w(X)=d(X)$ in every case. [step 1.1, step 1.2, L1] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `thm-basic-cardinal-function-inequalities` — theorem — Under choice, $c(X)\\le d(X)\\le w(X)$ and $\\chi(X),L(X)\\le w(X)$

(statement provenance: ai-altered)

### Statement

Assuming choice, $c(X)\le d(X)\le w(X)$ and $\chi(X),L(X)\le w(X)$.

### `def-metrizable-space` — definition — Metrizable space: a topological space whose topology is induced by some metric; metrizability is topological, the metric is not

(statement provenance: ai-altered)

### Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**metrizable** if there is a metric $d$ on $X$ ([[def-metric-space]]) whose
metric topology is $\mathcal{T}$, that is $\mathcal{T} = \mathcal{T}_d$
([[def-metric-topology]]). Such a $d$ is said to **induce** or **metrise**
$\mathcal{T}$.

**The definition presupposes that $\mathcal{T}_d$ is a topology in the sense of
[[def-topological-space]], and it is.** By [[def-metric-topology]] both
$\varnothing$ and $X$ are open in $(X,d)$, which is (T1), and by
[[thm-metric-open-set-algebra]] the family $\mathcal{T}_d$ is closed under
arbitrary unions, which is (T2), and under intersections of $n \ge 1$ members,
which contains (T3). So every metric space is a topological space, and the
metric-space development of this library is a special case of the present one.

**The standard local notions in the two developments agree after translating
their neighbourhood conventions.** Let $d$ be a metric on $X$ and give $X$ the
topology $\mathcal{T}_d$.

- *Neighbourhoods and balls.* [[def-metric-topology]] uses "neighbourhood" for
  an open set containing $x$, whereas [[def-neighbourhood-top]] also allows a
  non-open superset of such a set. Thus the two collections are not literally
  equal, but the open metric neighbourhoods are cofinal in the broader
  neighbourhood filter. The balls $B(x,r)$, $r > 0$ ([[def-metric-ball]]), are
  open ([[thm-metric-open-set-algebra]]) and form a neighbourhood base at $x$:
  any neighbourhood $N$ contains an open $U \ni x$, hence a ball around $x$ by
  [[def-metric-topology]]. The balls of radius $1/n$ alone already suffice
  ([[lem-metric-ball-neighbourhood-base]]).
- *Interior, closure, boundary.* [[def-metric-interior-closure-boundary]] defines
  them by the same conditions with balls in place of neighbourhoods, and the
  previous bullet makes the two conditions equivalent; the metric closure is the
  smallest closed superset ([[thm-metric-closure-characterisation]]), which is the
  definition used here ([[def-interior-closure-boundary-top]]). So the two
  closures, the two interiors and the two boundaries are the same three
  operations.
- *Convergence.* $x_k \to p$ in the sense of [[def-sequence-convergence-top]] is
  "eventually in every neighbourhood of $p$", and by the first bullet this is
  "eventually in every ball around $p$", which is [[def-metric-convergence]].
- *Continuity.* $\varepsilon$-$\delta$ continuity at $a$
  ([[def-metric-continuity]]) says that every ball around $f(a)$ has a ball
  around $a$ mapped into it, which by the first bullet is continuity at $a$ in
  the sense of [[def-continuous-map-top]].

- *Subspaces.* For $A \subseteq X$ the subspace topology
  $\{\, U \cap A : U \in \mathcal{T}_d \,\}$ of [[def-subspace-topology-top]] is
  exactly the metric topology of the subspace metric $d_A$
  ([[def-isometry-and-metric-embedding]]), so the two uses of the phrase
  *subspace topology* in this library name one thing. Indeed
  $B_A(a,r) = B_X(a,r) \cap A$: a trace $U \cap A$ is $d_A$-open, since each of
  its points $a$ has $B_X(a,r) \subseteq U$ and hence $B_A(a,r) \subseteq U \cap A$;
  and a $d_A$-open $W$ is the trace of
  $U := \bigcup \{\, B_X(a,r) : a \in W,\ r > 0,\ B_X(a,r) \cap A \subseteq W \,\}$,
  which is $d_X$-open, satisfies $U \cap A = W$, and involves no choice principle,
  the union being taken over a set of pairs rather than over a selection.

Consequently the metric-space notions of interior, closure, boundary, density,
convergence, continuity and subspace agree with the topological notions here,
and statements about them transfer once a metric is named. For neighbourhoods
the transfer uses the explicit convention change above: a metric-page
neighbourhood is an open topological neighbourhood, while every topological
neighbourhood contains one.

**Metrizability is a topological property; the metric is not part of it.** If
$h : X \to Y$ is a homeomorphism ([[def-homeomorphism-and-open-maps]]) and $d$
metrises $X$, then $d'(y_1,y_2) := d(h^{-1}(y_1), h^{-1}(y_2))$ is a metric on
$Y$ — the three axioms transfer along the bijection $h^{-1}$ — and
$h[B_d(x,r)] = B_{d'}(h(x), r)$, so $h$ carries a basis of $\mathcal{T}_d$ to a
basis of $\mathcal{T}_{d'}$ and $\mathcal{T}_{d'} = h[\mathcal{T}_d] = \mathcal{T}_Y$.
Hence $Y$ is metrizable. The metric itself, however, is **not** determined by the
topology: two metrics on one set may induce the same topology without agreeing,
which is exactly topological equivalence ([[def-equivalent-metrics]]), and
properties of a metric that are not properties of its topology, boundedness among
them, are therefore not properties of a metrizable space.

**Two things every metrizable space has.** It is **Hausdorff**: distinct points
have disjoint open neighbourhoods, by [[thm-metric-hausdorff-separation]] applied
to any metric inducing the topology. And it is **first countable**
([[def-first-countable-top]]), by [[lem-metric-ball-neighbourhood-base]]. Either
failure is therefore an obstruction to metrizability, and this page uses the
first of them to exhibit a topology induced by no metric.

**Sequential limits in a metrizable space are unique, so the notation
$\lim_k x_k$ is available there.** In a metric space a sequence has at most one
limit ([[lem-metric-limits-unique]]), and by the agreement of convergence above
that uniqueness is a statement about the topology alone; so within a metrizable
space, and only there, this page writes $\lim_k x_k$ in the ordinary way. In a
general space the symbol is unavailable ([[def-sequence-convergence-top]]).

**The usual topology of $\mathbb{R}$.** The absolute value makes $\mathbb{R}$ a
metric space under $d_{\mathbb{R}}(x,y) = |x-y|$, its open balls are the bounded
open intervals, and the resulting metric topology is what claim 3 of
[[lem-real-line-is-a-metric-space]] names the **usual topology** of $\mathbb{R}$.
That is the topology meant by the phrase throughout these two pages, and
$\mathbb{R}$ carrying it is metrizable by definition. Every statement about it on
these two pages is proved from the metric $d_{\mathbb{R}}$ and the bridge above,
and no example re-derives any of it.

### `def-metric-topology` — definition — The metric topology: a set is open when every one of its points has a ball around it inside the set; closed means open complement

(statement provenance: literature-derived)

### Definition

Let $(X,d)$ be a metric space ([[def-metric-space]]).

A subset $U \subseteq X$ is **open in $(X,d)$** if for every $x \in U$ there is a
real $r > 0$ with $B(x,r) \subseteq U$ ([[def-metric-ball]]). A subset
$F \subseteq X$ is **closed in $(X,d)$** if its complement $X \setminus F$ is
open.

The collection

$$\mathcal{T}_d := \{\, U \subseteq X : U \text{ is open in } (X,d) \,\}$$

of all open subsets is the **metric topology** of $d$ on $X$. A subset of $X$
that is both open and closed is called **clopen**.

**Two sets are open for trivial reasons.** $\emptyset$ is open, because the
defining condition quantifies over no points; and $X$ is open, because
$B(x,r) \subseteq X$ for every $x$ and every $r > 0$. Consequently $X$ and
$\emptyset$ are also closed, and both are clopen.

**A neighbourhood of a point $x$** is any open set containing $x$. The condition
above therefore reads: $U$ is open exactly when every point of $U$ has a ball
around it inside $U$, and it is the balls alone that have to be tested.

**The metric, not the set, determines $\mathcal{T}_d$.** Two metrics on the same
set may have different metric topologies, and two different metrics may have the
same one; the systematic comparison is [[def-equivalent-metrics]].

### `thm-rationals-countable` — theorem — $\\mathbb{Q}$ is countably infinite

(statement provenance: ai-altered)

### Statement

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

### `lem-rat-embeds-dense` — lemma — The rationals embed densely in the reals

(statement provenance: ai-altered)

### Statement

The map $q \mapsto \hat q$ ([[def-real-numbers]]) is an embedding of ordered
fields. Every real is approximated by rationals: for $x \in \mathbb{R}$ and
rational $\varepsilon > 0$ there is $q \in \mathbb{Q}$ with
$|x - \hat q| < \hat\varepsilon$. Consequently, strictly between any two
reals lies a rational.

### `def-cardinal-arithmetic` — definition — Cardinal sum $\\kappa \\oplus \\lambda$, product $\\kappa \\otimes \\lambda$ and exponentiation $\\kappa^{\\lambda}$, and why they are written apart from the ordinal operations

(statement provenance: ai-altered)

### Definition

Let $\kappa$ and $\lambda$ be cardinals ([[def-cardinal]]), and recall the
notation of [[lem-cardinal-operations-are-well-defined]]:

$$\kappa \sqcup \lambda = (\{0\} \times \kappa) \cup (\{1\} \times \lambda), \qquad {}^{\lambda}\kappa = \{\, h : h \text{ is a function } \lambda \to \kappa \,\}.$$

**Sum and product.**

$$\kappa \oplus \lambda \;:=\; \lvert \kappa \sqcup \lambda \rvert, \qquad \kappa \otimes \lambda \;:=\; \lvert \kappa \times \lambda \rvert .$$

Both values exist in ZF and are cardinals: claim (c) of
[[lem-cardinal-operations-are-well-defined]] well-orders each of the two sets
explicitly, and [[lem-cardinality-of-a-well-orderable-set]] then supplies the
least equinumerous ordinal. **No choice principle is used.**

**Exponentiation.**

$$\kappa^{\lambda} \;:=\; \lvert {}^{\lambda}\kappa \rvert ,$$

the number of functions from a set of size $\lambda$ to a set of size $\kappa$.
The right-hand side is defined exactly when ${}^{\lambda}\kappa$ is
well-orderable. **Assuming the Axiom of Choice** ([[def-axiom-of-choice]]) every
set is well-orderable ([[thm-well-ordering-theorem]]) and $\kappa^{\lambda}$ is
defined for all cardinals; every statement on this page that writes
$\kappa^{\lambda}$ for an infinite exponent says so in its own hypotheses.

**Transport to arbitrary sets.** If $A$ and $B$ are well-orderable with
$\lvert A \rvert = \kappa$ and $\lvert B \rvert = \lambda$, then

$$\lvert A \sqcup B \rvert = \kappa \oplus \lambda, \qquad \lvert A \times B \rvert = \kappa \otimes \lambda, \qquad \lvert {}^{B}A \rvert = \kappa^{\lambda}$$

whenever the sets on the left have cardinalities at all, because $A \approx \kappa$
and $B \approx \lambda$ ([[def-equinumerous]]) and the three constructions
respect $\approx$ (claim (a) of [[lem-cardinal-operations-are-well-defined]],
[[def-injection-surjection-bijection]]). So the operations may be computed from
any representatives.

**Finite and infinite cardinals.** A cardinal $\kappa$ is **finite** when
$\kappa \in \omega$ and **infinite** when $\omega \subseteq \kappa$, that is
$\omega \le \kappa$; by trichotomy ([[lem-ordinal-trichotomy]]) and
[[lem-omega-least-limit-ordinal]] every cardinal is exactly one of the two.

### `cor-cardinal-absorption` — corollary — Absorption: for cardinals $\\kappa, \\lambda$ with $\\kappa$ infinite and $\\lambda \\le \\kappa$, $\\kappa \\oplus \\lambda = \\kappa$, and $\\kappa \\otimes \\lambda = \\kappa$ when $\\lambda \\ne 0$

(statement provenance: ai-altered)

### Statement

Let $\kappa$ be an infinite cardinal and $\lambda$ a cardinal with
$\lambda \le \kappa$ ([[def-cardinal]]). Then

$$\kappa \oplus \lambda = \kappa, \qquad \text{and} \qquad \kappa \otimes \lambda = \kappa \ \text{ whenever } \lambda \ne 0$$

([[def-cardinal-arithmetic]]). The exception at $\lambda = 0$ is not an artefact:
$\kappa \otimes 0 = 0$.

**This is a theorem of ZF**, inherited from [[thm-hessenberg]], which is
choice free. In particular the ordinary arithmetic of infinite cardinals collapses
completely for $\oplus$ and $\otimes$: below the level of exponentiation, the
larger argument simply swallows the smaller one.

### `def-axiom-of-choice` — definition — The Axiom of Choice

(statement provenance: literature-derived)

### Definition

The **Axiom of Choice** (AC) is the following statement.

> Every family of nonempty sets has a choice function
> ([[def-choice-function]]).

Written out: for every set $\mathcal{F}$ all of whose members are nonempty,
there exists a function $g$ with domain $\mathcal{F}$ satisfying $g(S) \in S$ for
all $S \in \mathcal{F}$.

An equivalent formulation, immediate from the definition of the Cartesian
product, is that a product of nonempty sets is nonempty: if $X_i \ne \emptyset$
for every $i \in I$, then $\prod_{i \in I} X_i \ne \emptyset$.

## What to return

Read `thm-metric-weight-equals-density` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
