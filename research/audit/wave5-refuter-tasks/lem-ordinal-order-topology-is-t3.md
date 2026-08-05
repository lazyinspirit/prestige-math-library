# Adversarial proof reading — `lem-ordinal-order-topology-is-t3`

## The item under review, in full

`items/lem-ordinal-order-topology-is-t3.md`

```markdown
---
id: lem-ordinal-order-topology-is-t3
kind: lemma
title: "Every ordinal with its order topology has a basis of clopen sets, and is $T_1$, Hausdorff and regular"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-order-topology-on-an-ordinal, def-t0-and-t1-spaces,
       thm-t1-iff-singletons-are-closed, def-hausdorff-space, def-regular-and-t3-spaces,
       lem-regularity-via-closed-neighbourhoods, def-neighbourhood-top,
       def-interior-closure-boundary-top, lem-ordinal-basics, lem-ordinal-trichotomy,
       def-ordinal, def-topological-space, def-topology-basis-subbasis]
justified_by: []
aliases: []
landmark: true
short: "ordinal spaces are $T_3$"
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Order topology (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Order_topology"
    - title: "Ordinal number (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Ordinal_number"
    - title: "J. Munkres, Topology, 2nd ed., §14"
      url: "https://en.wikipedia.org/wiki/James_Munkres"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 17: Closed Sets and Limit Points (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-17.pdf"
    - title: "R. Gardner, Introduction to Topology, notes on Munkres Section 32: Normal Spaces (East Tennessee State University)"
      url: "https://faculty.etsu.edu/gardnerr/5357/notes/Munkres-32.pdf"
pipeline_run: null
---

## Statement

Let $\gamma$ be an ordinal ([[def-ordinal]]) with its order topology
([[def-order-topology-on-an-ordinal]]), whose basis is
$\mathcal{B}_\gamma$. Then:

1. Every member of $\mathcal{B}_\gamma$ is **clopen** in $\gamma$
   ([[def-topological-space]]), so $\gamma$ has a basis of clopen sets.
2. $\gamma$ is $T_1$ ([[def-t0-and-t1-spaces]]).
3. $\gamma$ is Hausdorff ([[def-hausdorff-space]]).
4. $\gamma$ is regular ([[def-regular-and-t3-spaces]]), and therefore $T_3$.

## Facts & Assumptions

**Given:** An ordinal $\gamma$ with its order topology, ordinals $\alpha, \beta, \xi, \eta \in \gamma$, and the basis $\mathcal{B}_\gamma$ consisting of the sets $[0,\beta]$ for $\beta \in \gamma$ and $(\alpha,\beta]$ for $\alpha < \beta$ in $\gamma$.

[A1] $[0,\beta] = \{\, \zeta \in \gamma : \zeta \le \beta \,\}$ and $(\alpha,\beta] = \{\, \zeta \in \gamma : \alpha < \zeta \le \beta \,\}$, and $\mathcal{B}_\gamma$ is a basis for the order topology ([[def-order-topology-on-an-ordinal]], [[def-topology-basis-subbasis]]).

[L1] For ordinals exactly one of $\zeta < \eta$, $\zeta = \eta$, $\eta < \zeta$ holds, and $<$ is transitive; every element of an ordinal is an ordinal ([[lem-ordinal-trichotomy]], [[lem-ordinal-basics]], [[def-ordinal]]).

[L2] A set is open exactly when each of its points lies in a basic set inside it; a set is closed exactly when its complement is open; a union of open sets is open ([[def-topology-basis-subbasis]], [[def-topological-space]]).

[L3] A space is $T_1$ exactly when every singleton is closed ([[thm-t1-iff-singletons-are-closed]], clause (b), [[def-t0-and-t1-spaces]]).

[L4] The basic sets containing a point form a neighbourhood base at that point, consisting of open sets ([[def-neighbourhood-top]]).

[L5] A space is regular exactly when every point has a neighbourhood base of closed neighbourhoods ([[lem-regularity-via-closed-neighbourhoods]], clause (c), [[def-regular-and-t3-spaces]]).

[L6] A closed neighbourhood of a point is a neighbourhood of it that is closed, and $\overline{K} = K$ for such a $K$ ([[def-interior-closure-boundary-top]]).

## Proof

**Proof technique:** direct.

1.1 The set $T_\beta := \{\, \zeta \in \gamma : \beta < \zeta \,\}$ is open for every $\beta \in \gamma$: if $\beta < \zeta$ with $\zeta \in \gamma$ then $(\beta,\zeta]$ is a basic set with $\zeta \in (\beta,\zeta] \subseteq T_\beta$, by [A1] and transitivity in [L1]. [A1, L1, L2]

1.2 The set $S_\xi := \{\, \zeta \in \gamma : \zeta < \xi \,\}$ is open for every $\xi \in \gamma$: if $\zeta < \xi$ then $[0,\zeta]$ is a basic set with $\zeta \in [0,\zeta] \subseteq S_\xi$, again by [A1] and transitivity. [A1, L1, L2]

1.3 Let $\xi \ne \eta$ in $\gamma$ and assume $\xi < \eta$ without loss of generality, by [L1]. Then $[0,\xi]$ and $(\xi,\eta]$ are basic open sets with $\xi \in [0,\xi]$, $\eta \in (\xi,\eta]$ and $[0,\xi] \cap (\xi,\eta] = \varnothing$ by [A1] and trichotomy; so $\gamma$ is Hausdorff, which is claim 3. [A1, L1]

2.1 $\gamma \setminus [0,\beta] = T_\beta$ by trichotomy, so $[0,\beta]$ is closed by step 1.1 and [L2]; and $[0,\beta]$ is open, being basic. [step 1.1, A1, L1, L2]

2.2 $\gamma \setminus (\alpha,\beta] = S_{\alpha^{+}} \cup T_\beta$ by trichotomy, where $S_{\alpha^{+}} = [0,\alpha]$ is basic open and $T_\beta$ is open by step 1.1, so $(\alpha,\beta]$ is closed by [L2]; and it is open, being basic. [step 1.1, A1, L1, L2]

2.3 $\gamma \setminus \{\xi\} = S_\xi \cup T_\xi$ by trichotomy, which is open by steps 1.1 and 1.2 and [L2], so $\{\xi\}$ is closed. [step 1.1, step 1.2, L1, L2]

3.1 Steps 2.1 and 2.2 exhaust $\mathcal{B}_\gamma$, so every basic set is clopen, which is claim 1. [step 2.1, step 2.2, A1]

3.2 Step 2.3 makes every singleton closed, so $\gamma$ is $T_1$ by [L3], which is claim 2. [step 2.3, L3]

4.1 Let $\xi \in \gamma$ and let $N$ be a neighbourhood of $\xi$; by [L4] there is a basic $B \in \mathcal{B}_\gamma$ with $\xi \in B \subseteq N$, and $B$ is closed by step 3.1 and open, hence a closed neighbourhood of $\xi$ inside $N$. [step 3.1, L4, L6]

5.1 By step 4.1 every point of $\gamma$ has a neighbourhood base of closed neighbourhoods, so $\gamma$ is regular by [L5]; with step 3.2 it is $T_3$, which is claim 4. [step 3.2, step 4.1, L5] ∎

## Remarks

- **The clopen basis is the whole content.** A space with a basis of clopen sets is regular for the reason given in step 4.1, and the ordinals have such a basis because a half-open interval $(\alpha,\beta]$ has an *immediate* left endpoint outside it, namely $\alpha$, and everything above $\beta$ is separated from it by a further half-open interval. No case distinction between successors and limits is needed anywhere in the proof.

- **Regularity is claimed and normality is not.** Nothing above asserts that an ordinal with its order topology is normal, and nothing on this page proves it. The companion page's deleted plank is a subspace of a product of two ordinal spaces and is *not* normal, so no normality statement about ordinal spaces may be read off from this lemma in either direction.

- **No choice principle is used**, every ingredient being a theorem of ZF ([[lem-ordinal-basics]], [[lem-ordinal-trichotomy]]).
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `def-order-topology-on-an-ordinal` — definition — The order topology on an ordinal, with the half-open intervals $(\\alpha, \\beta]$ and the initial segments $[0, \\beta]$ as a basis

(statement provenance: ai-altered)

### Definition

Let $\gamma$ be an ordinal ([[def-ordinal]]). Since $\gamma$ is the set of
ordinals below it and $\xi < \eta$ means $\xi \in \eta$, the following two
families of subsets of $\gamma$ are defined for $\beta \in \gamma$ and
$\alpha \in \gamma$:

$$[0,\beta] \;:=\; \{\, \xi \in \gamma : \xi \le \beta \,\} \;=\; \beta^{+}, \qquad (\alpha,\beta] \;:=\; \{\, \xi \in \gamma : \alpha < \xi \le \beta \,\} \;=\; \beta^{+} \setminus \alpha^{+} .$$

Both identifications are immediate: $\beta^{+} = \beta \cup \{\beta\}$ is the set
of ordinals $\le \beta$, and it is a subset of $\gamma$ because $\gamma$ is
transitive and $\beta \in \gamma$ ([[def-ordinal]], [[lem-ordinal-basics]]).

Put

$$\mathcal{B}_\gamma \;:=\; \{\, [0,\beta] : \beta \in \gamma \,\} \;\cup\; \{\, (\alpha,\beta] : \alpha, \beta \in \gamma,\ \alpha < \beta \,\} .$$

**$\mathcal{B}_\gamma$ is a basis for a unique topology on $\gamma$**
([[thm-basis-criterion]], [[def-topology-basis-subbasis]]), and that topology is
the **order topology on $\gamma$**. The obligation is discharged here.

*(B1), covering.* If $\xi \in \gamma$ then $\xi \in [0,\xi] \in \mathcal{B}_\gamma$,
so $\bigcup \mathcal{B}_\gamma = \gamma$. For $\gamma = 0 = \varnothing$ the
family is empty and $\bigcup \varnothing = \varnothing = \gamma$, so (B1) holds
there too.

*(B2), intersections.* By trichotomy of the ordinals ([[lem-ordinal-trichotomy]])
any two ordinals have a maximum and a minimum, namely the larger and the smaller
of the two, and for $\alpha_1, \alpha_2, \beta_1, \beta_2 \in \gamma$:

- $[0,\beta_1] \cap [0,\beta_2] = [0, \min\{\beta_1,\beta_2\}]$;
- $[0,\beta_1] \cap (\alpha_2,\beta_2] = (\alpha_2, \min\{\beta_1,\beta_2\}]$ when
  $\alpha_2 < \min\{\beta_1,\beta_2\}$, and $\varnothing$ otherwise;
- $(\alpha_1,\beta_1] \cap (\alpha_2,\beta_2] = (\max\{\alpha_1,\alpha_2\},\ \min\{\beta_1,\beta_2\}]$
  when $\max\{\alpha_1,\alpha_2\} < \min\{\beta_1,\beta_2\}$, and $\varnothing$
  otherwise.

In each case the intersection is either a member of $\mathcal{B}_\gamma$ or
empty, and in the empty case (B2) is vacuous, having no point to test. So (B2)
holds, and [[thm-basis-criterion]] supplies the topology and its uniqueness.

**This definition is for ordinals only, and it says so.** The general order
topology of a linearly ordered set takes the open intervals, together with the
initial and final rays, as a basis. For an ordinal that family is the wrong one:
a successor $\beta^{+}$ has an immediate predecessor, so the smallest open
interval around it is already $\{\beta^{+}\}$, but no *interval* of the form
$(\alpha,\eta)$ isolates $0$, and the initial segments must be supplied
separately. The family $\mathcal{B}_\gamma$ above is exactly the general order
basis for an ordinal, rewritten so that no case analysis is needed; nothing here
claims to define the order topology of an arbitrary linearly ordered set, and no
statement on this page is about such a set.

**Isolated and non-isolated points.** Every ordinal is $0$, a successor, or a
limit ([[def-limit-ordinal]]). If $\xi = 0$ then $\{\xi\} = [0,0]$ is basic open;
if $\xi = \alpha^{+}$ then $\{\xi\} = (\alpha, \xi]$ is basic open; so every
non-limit point of $\gamma$ is isolated. If $\xi$ is a limit ordinal then every
basic set containing $\xi$ contains some $(\alpha,\xi]$ with $\alpha < \xi$, and
$\alpha^{+} < \xi$ because $\xi$ is a limit, so $\alpha^{+}$ is a second point of
that basic set; hence a limit point of $\gamma$ is not isolated. In particular
$\omega$, the least limit ordinal ([[lem-omega-least-limit-ordinal]]), is the
unique non-isolated point of $\omega + 1$, and every ordinal $\gamma \le \omega$
carries the discrete topology ([[def-standard-topologies]]).

### `def-t0-and-t1-spaces` — definition — $T_0$ (Kolmogorov) and $T_1$ (Frechet) spaces

(statement provenance: literature-derived)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **$T_0$**, or a **Kolmogorov space**, when any two distinct points are
  *topologically distinguishable*: for all $x, y \in X$ with $x \ne y$ there is
  an open set containing exactly one of $x$ and $y$.
- $X$ is **$T_1$**, or a **Frechet space**, when each of any two distinct points
  has an open set containing it and missing the other: for all $x, y \in X$ with
  $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \quad y \notin U, \qquad y \in V, \quad x \notin V .$$

Nothing is asserted about a pair of equal points, so a space with at most one
point satisfies both conditions vacuously.

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), both conditions may be read with "open
neighbourhood" in place of "open set"; and by the same equivalence recorded in
[[def-neighbourhood-top]] they may be read with arbitrary neighbourhoods, since
a neighbourhood of $x$ contains an open one and an open neighbourhood is a
neighbourhood.

**Every $T_1$ space is $T_0$, and this is discharged here** rather than left to
the reader, because it is the bottom arrow of the whole hierarchy on this page.
Let $x \ne y$ and take $U, V$ as in the $T_1$ condition. Then $U$ is an open set
containing $x$ and not $y$, so it contains exactly one of the two points, which
is the $T_0$ condition. Only the first half of the $T_1$ condition is used, so
the implication does not reverse formally, and it does not reverse in fact:
Sierpinski space is a witness, recorded on the companion page.

**The two conditions differ exactly in symmetry.** $T_0$ asks for *one* open set
that tells the pair apart, with no control over which of the two it contains;
$T_1$ asks for *both* separations at once. In Sierpinski space
$(\{a,b\}, \{\varnothing, \{b\}, \{a,b\}\})$ of [[def-standard-topologies]] the
open set $\{b\}$ contains $b$ and not $a$, so the space is $T_0$; but the only
open set containing $a$ is the whole space, which also contains $b$, so it is
not $T_1$.

**Neither condition is a property of a set alone.** Both are properties of the
pair $(X, \mathcal{T})$, and both are inherited upwards along the comparison
order of [[def-topological-space]]: if $\mathcal{T}_1 \subseteq \mathcal{T}_2$
and $(X,\mathcal{T}_1)$ is $T_0$, respectively $T_1$, then so is
$(X,\mathcal{T}_2)$, since the separating open sets of the coarser topology lie
in the finer one. In particular the discrete topology satisfies both, and the
indiscrete topology on a set with at least two points satisfies neither.

### `thm-t1-iff-singletons-are-closed` — theorem — A space is $T_1$ if and only if every singleton is closed, if and only if every finite subset is closed, if and only if its topology contains the cofinite topology

(statement provenance: literature-derived)

### Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$\mathcal{T}_{\mathrm{cof}}$ be the cofinite topology on the set $X$
([[def-standard-topologies]]). The following four conditions are equivalent.

- **(a)** $X$ is $T_1$ ([[def-t0-and-t1-spaces]]).
- **(b)** $\{x\}$ is closed for every $x \in X$.
- **(c)** $F$ is closed for every finite $F \subseteq X$ ([[def-countable]]).
- **(d)** $\mathcal{T}_{\mathrm{cof}} \subseteq \mathcal{T}$, that is, the
  topology of $X$ is finer than the cofinite topology on the same set.

Condition (d) says that the cofinite topology is the **coarsest** $T_1$ topology
on any set: it is $T_1$ by the equivalence, and every $T_1$ topology on that set
contains it.

### `def-hausdorff-space` — definition — Hausdorff space: distinct points have disjoint open neighbourhoods; every metrizable space is Hausdorff and the indiscrete topology on two points is not

(statement provenance: ai-altered)

### Definition

A topological space $(X, \mathcal{T})$ ([[def-topological-space]]) is
**Hausdorff** when any two distinct points are separated by disjoint open sets:
for all $x, y \in X$ with $x \ne y$ there are $U, V \in \mathcal{T}$ with

$$x \in U, \qquad y \in V, \qquad U \cap V = \varnothing .$$

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), the condition reads: distinct points have disjoint
open neighbourhoods. Nothing is asserted about points that are equal, and the
condition is vacuous for a space with at most one point, so every such space is
Hausdorff.

**Every metrizable space is Hausdorff.** This is not proved here, because it is
already discharged: [[def-metrizable-space]] records it among the two things
every metrizable space has, deriving it from
[[thm-metric-hausdorff-separation]], which separates $p \ne q$ in a metric space
by the disjoint open balls $B(p,r)$ and $B(q,r)$ with $r = d(p,q)/2 > 0$. In
particular $\mathbb{R}$ with its usual topology, every $\mathbb{R}^n$, and every
subspace of a metrizable space are Hausdorff.

**Not every space is Hausdorff.** The indiscrete topology
$\mathcal{T}_{\mathrm{ind}} = \{\varnothing, X\}$ on a set $X = \{a,b\}$ with
$a \ne b$ ([[def-standard-topologies]]) is not: the only open set containing $a$
is $X$, the only one containing $b$ is $X$, and $X \cap X = X \ne \varnothing$.
This is the same two-point space that [[def-metrizable-space]] uses to exhibit a
topology induced by no metric, and the reason is the same one: failure of the
Hausdorff condition is an obstruction to metrizability.

**Being Hausdorff is a topological property** ([[def-homeomorphism-and-open-maps]]).
If $h : X \to Z$ is a homeomorphism and $X$ is Hausdorff, then for $z \ne z'$ in
$Z$ the points $h^{-1}(z)$ and $h^{-1}(z')$ are distinct, so they have disjoint
open $U, V$; the images $h[U]$ and $h[V]$ are open, disjoint, and contain $z$ and
$z'$ respectively, a homeomorphism carrying the open sets of one space
bijectively onto those of the other. So no space homeomorphic to a Hausdorff
space fails the condition.

**Scope of this item.** Only the definition, the metrizable case and the
two-point failure are recorded here, because that is all this page uses. The
Hausdorff condition is one of a graded family of separation axioms; that family,
its ordering, and the questions of which of its members are hereditary or
preserved by products, are not available at this point in the reading order and
nothing here anticipates them. What this page does use is a single negative
result: a quotient of a Hausdorff space need not be Hausdorff, which is recorded
below as a false statement and witnessed on the companion page.

### `def-regular-and-t3-spaces` — definition — Regular spaces and $T_3$ spaces, with the source disagreement over whether regularity includes $T_1$ stated explicitly

(statement provenance: literature-derived)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

- $X$ is **regular** when a point can be separated from a closed set not
  containing it: for every closed $C \subseteq X$ and every
  $x \in X \setminus C$ there are $U, V \in \mathcal{T}$ with
  $$x \in U, \qquad C \subseteq V, \qquad U \cap V = \varnothing .$$
- $X$ is **$T_3$** when it is regular **and** $T_1$ ([[def-t0-and-t1-spaces]]).

Since an open set containing a point is an open neighbourhood of it
([[def-neighbourhood-top]]), regularity reads: $x$ and $C$ have disjoint open
neighbourhoods. The case $C = \varnothing$ is allowed and is satisfied by
$U = X$, $V = \varnothing$, so no nonemptiness is hidden in the condition.

**The convention fork, and this library's side of it.** Textbooks disagree about
whether the word *regular* carries a $T_1$ hypothesis. Munkres builds it in,
defining a regular space to be one in which points are closed and the separation
condition above holds; Kelley, Willard and Engelking do not, and reserve $T_3$
for the conjunction. **This library takes the second side**: *regular* names the
separation condition alone, $T_3$ names regular plus $T_1$, and every statement
that needs points to be closed writes the $T_1$ hypothesis out. The reason is
that the two halves are genuinely independent and each is used alone below: the
indiscrete topology on a two-point set is regular and not $T_0$
([[def-standard-topologies]]), and the cofinite topology on an infinite set is
$T_1$ and not regular, both witnessed on the companion page.

**Regularity alone implies no other separation axiom.** It does not imply $T_0$,
$T_1$ or Hausdorff ([[def-hausdorff-space]]): in the indiscrete topology on a set
$X$ the only closed sets are $\varnothing$ and $X$, so the only pair $(C, x)$ to
be separated has $C = \varnothing$, and $U = X$, $V = \varnothing$ separates it;
yet no two distinct points are distinguished by any open set. Conversely $T_1$
does not imply regularity. It is the *conjunction* $T_3$ that sits above
Hausdorff in the hierarchy, and the proof of that is two items below.

### `lem-regularity-via-closed-neighbourhoods` — lemma — A space is regular if and only if every point has a neighbourhood base of closed neighbourhoods, if and only if $x \\in U$ open gives an open $V$ with $x \\in V \\subseteq \\overline{V} \\subseteq U$

(statement provenance: ai-altered)

### Statement

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), with
closures as in [[def-interior-closure-boundary-top]] and neighbourhoods as in
[[def-neighbourhood-top]], so that a neighbourhood need not be open. The
following three conditions are equivalent.

- **(a)** $X$ is regular ([[def-regular-and-t3-spaces]]).
- **(b)** For every $x \in X$ and every open $U$ with $x \in U$ there is an open
  $V$ with
  $$x \in V \subseteq \overline{V} \subseteq U .$$
- **(c)** Every point of $X$ has a neighbourhood base consisting of **closed**
  neighbourhoods: for every $x \in X$ and every neighbourhood $N$ of $x$ there is
  a closed neighbourhood $K$ of $x$ with $K \subseteq N$.

### `def-neighbourhood-top` — definition — Neighbourhood of a point and neighbourhood base, with this library's convention that a neighbourhood need not be open

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]) and let
$x \in X$.

A set $N \subseteq X$ is a **neighbourhood of $x$** if there is an open
$U \in \mathcal{T}$ with $x \in U \subseteq N$. The family of all neighbourhoods
of $x$ is written $\mathcal{N}(x)$ and called the **neighbourhood filter** at
$x$. A neighbourhood that is itself open is an **open neighbourhood**.

**Convention, and it is a live fork: in this library a neighbourhood need not be
open.** The competing convention, used by Munkres among others, defines a
neighbourhood of $x$ to be an *open* set containing $x$. Both are in current use;
this library follows the one above and writes "open neighbourhood" in full
whenever openness is wanted, so that no statement here depends on which
convention a reader brings.

A family $\mathcal{B}_x \subseteq \mathcal{N}(x)$ is a **neighbourhood base at
$x$** if every neighbourhood of $x$ contains a member of $\mathcal{B}_x$: for
every $N \in \mathcal{N}(x)$ there is $B \in \mathcal{B}_x$ with $B \subseteq N$.

**Four immediate consequences, established here because they are used
constantly.**

1. *$X$ is a neighbourhood of each of its points*, since $x \in X \subseteq X$
   and $X$ is open by (T1); so $\mathcal{N}(x) \ne \varnothing$ and every point
   has at least one neighbourhood base, namely $\mathcal{N}(x)$ itself.
2. *A superset of a neighbourhood of $x$ is a neighbourhood of $x$*: if
   $x \in U \subseteq N \subseteq M$ with $U$ open then $x \in U \subseteq M$.
3. *The intersection of two neighbourhoods of $x$ is a neighbourhood of $x$*: if
   $x \in U \subseteq N$ and $x \in V \subseteq M$ with $U, V$ open, then
   $U \cap V$ is open by (T3) and $x \in U \cap V \subseteq N \cap M$. By
   iteration the same holds for any intersection of finitely many
   neighbourhoods of $x$.
4. *A set is open exactly when it is a neighbourhood of each of its points.* If
   $U$ is open and $x \in U$ then $x \in U \subseteq U$. Conversely, if $N$ is a
   neighbourhood of each of its points, choose for each $x \in N$ an open $U_x$
   with $x \in U_x \subseteq N$; then $N = \bigcup_{x \in N} U_x$ is open by (T2).
   No choice principle is involved: $U_x$ may be taken to be the union of *all*
   open subsets of $N$ containing $x$, which is determined by $x$ and $N$, and is
   open by (T2).

**Basic sets give neighbourhood bases.** If $\mathcal{B}$ is a basis for
$\mathcal{T}$ ([[def-topology-basis-subbasis]]) then
$\mathcal{B}_x := \{\, B \in \mathcal{B} : x \in B \,\}$ is a neighbourhood base
at $x$ consisting of open sets. Each such $B$ is open and contains $x$, hence is
a neighbourhood of $x$; and if $N \in \mathcal{N}(x)$, fix open $U$ with
$x \in U \subseteq N$ and then $B \in \mathcal{B}$ with $x \in B \subseteq U$,
which gives $B \in \mathcal{B}_x$ with $B \subseteq N$. A member of
$\mathcal{B}_x$ is called a **basic neighbourhood** of $x$.

### `def-interior-closure-boundary-top` — definition — Interior, closure, boundary, exterior, derived set and isolated point in a topological space

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]), let
$A \subseteq X$ and let $x \in X$. Neighbourhoods are as in
[[def-neighbourhood-top]], so a neighbourhood need not be open.

- The **interior** of $A$ is
  $\operatorname{int}(A) := \bigcup \{\, U \in \mathcal{T} : U \subseteq A \,\}$.
- The **closure** of $A$ is
  $\overline{A} := \bigcap \{\, F \subseteq X : F \text{ closed and } A \subseteq F \,\}$.
- The **exterior** of $A$ is $\operatorname{ext}(A) := \operatorname{int}(X \setminus A)$.
- The **boundary** of $A$ is $\partial A := \overline{A} \setminus \operatorname{int}(A)$.
- $x$ is a **limit point** (accumulation point) of $A$ if every neighbourhood $N$
  of $x$ satisfies $N \cap (A \setminus \{x\}) \ne \varnothing$. The set of limit
  points of $A$ is the **derived set** $A'$.
- $x$ is an **isolated point of $A$** if $x \in A$ and some neighbourhood $N$ of
  $x$ satisfies $N \cap A = \{x\}$.

**Both operators are well posed, and the two names are justified rather than
asserted.** The interior is a union of open sets, hence open by (T2), it is
contained in $A$, and it contains every open $U \subseteq A$: so
$\operatorname{int}(A)$ is *the largest open subset of $A$*. The family being
intersected in the definition of $\overline{A}$ is nonempty, since $X$ is closed
and contains $A$, so the intersection is a set; it is closed by (C2) of
[[def-topological-space]], it contains $A$, and it is contained in every closed
$F \supseteq A$: so $\overline{A}$ is *the smallest closed superset of $A$*. In
particular

$$\operatorname{int}(A) \subseteq A \subseteq \overline{A},$$

and $A$ is open if and only if $A = \operatorname{int}(A)$, and closed if and
only if $A = \overline{A}$, in each case because one inclusion is automatic and
the other says exactly that $A$ belongs to the family in question.

**Interior and closure are exchanged by complementation.** For every
$A \subseteq X$,

$$X \setminus \operatorname{int}(A) = \overline{X \setminus A}, \qquad X \setminus \overline{A} = \operatorname{int}(X \setminus A) = \operatorname{ext}(A).$$

Indeed $U \mapsto X \setminus U$ is a bijection between the open subsets of $A$
and the closed supersets of $X \setminus A$, and it turns unions into
intersections ([[def-topological-space]]); applying complementation to the first
identity gives the second. So $\operatorname{ext}(A) = X \setminus \overline{A}$,
and every statement about interiors has a mirror statement about closures.

**The pointwise description of the interior.** $x \in \operatorname{int}(A)$ if
and only if $A$ is a neighbourhood of $x$. If $x \in \operatorname{int}(A)$ then
$\operatorname{int}(A)$ is an open set with $x \in \operatorname{int}(A) \subseteq A$;
conversely a neighbourhood relation $x \in U \subseteq A$ with $U$ open puts $x$
in the union defining $\operatorname{int}(A)$. The corresponding description of
the closure is proved as the next item, because it is the statement that does the
work in every later proof.

**$X$ is the disjoint union of the three regions.** Since
$\operatorname{int}(A) \subseteq \overline{A}$, the three sets
$\operatorname{int}(A)$, $\partial A = \overline{A} \setminus \operatorname{int}(A)$
and $\operatorname{ext}(A) = X \setminus \overline{A}$ are pairwise disjoint and
their union is $X$. This is recorded again, with the identities for interior and
closure of unions and intersections, in the lemma two items below.

### `lem-ordinal-basics` — lemma — Basic closure properties of ordinals

(statement provenance: ai-altered)

### Statement

Let $\alpha$ and $\beta$ be ordinals ([[def-ordinal]]). Then:

**(a)** every element of $\alpha$ is an ordinal;

**(b)** $\alpha \notin \alpha$;

**(c)** $\alpha^{+} = \alpha \cup \{\alpha\}$ is an ordinal;

**(d)** if $A$ is a **nonempty** set of ordinals then $\bigcap A$ is an ordinal;

**(e)** if $A$ is any set of ordinals then $\bigcup A$ is an ordinal;

**(f)** $\alpha \subseteq \beta$ if and only if $\alpha \in \beta$ or
$\alpha = \beta$;

**(g)** any two ordinals are comparable under inclusion: $\alpha \subseteq \beta$
or $\beta \subseteq \alpha$.

Everything here is a theorem of ZF and uses no choice principle.

### `lem-ordinal-trichotomy` — lemma — Trichotomy and well-ordering of the ordinals

(statement provenance: literature-derived)

### Statement

For ordinals $\alpha$ and $\beta$ ([[def-ordinal]]), **exactly one** of

$$\alpha \in \beta, \qquad \alpha = \beta, \qquad \beta \in \alpha$$

holds. Moreover every nonempty **set** $A$ of ordinals has an $\in$-least
element, and consequently $A$ ordered by
$\alpha \le \beta :\iff \alpha \subseteq \beta$ is a well-order
([[def-well-order]]) whose strict part is membership.

So the ordinals are linearly ordered by $\in$, every set of them is well
ordered, and [[thm-transfinite-induction]] is available on any such set. No
choice principle is used.

### `def-ordinal` — definition — Ordinal (von Neumann)

(statement provenance: literature-derived)

### Definition

A set $\alpha$ is an **ordinal** when both of the following hold.

1. $\alpha$ is a **transitive set**: every element of $\alpha$ is also a subset
   of $\alpha$, that is $x \in \alpha \Rightarrow x \subseteq \alpha$.
2. The membership relation restricted to $\alpha$, namely
   $\{(x, y) \in \alpha \times \alpha : x \in y\}$, is a **strict well-order**
   of $\alpha$ ([[def-well-order]]): it is irreflexive, transitive as a
   relation, trichotomous on $\alpha$, and every nonempty subset of $\alpha$ has
   an $\in$-least element.

Ordinals are written with lowercase Greek letters, and for ordinals we set

$$\alpha < \beta :\iff \alpha \in \beta, \qquad \alpha \le \beta :\iff (\alpha \in \beta \text{ or } \alpha = \beta).$$

Write $0 := \emptyset$, which is an ordinal because both clauses hold vacuously,
and write $\alpha^{+} := \alpha \cup \{\alpha\}$ for the **successor** of
$\alpha$.

### `def-topological-space` — definition — Topology on a set, open and closed sets, clopen sets, the closed-set axiomatisation, and the coarser/finer comparison

(statement provenance: ai-altered)

### Definition

Let $X$ be a set and write $\mathcal{P}(X)$ for its power set. A **topology** on
$X$ is a family $\mathcal{T} \subseteq \mathcal{P}(X)$ such that

- **(T1)** $\varnothing \in \mathcal{T}$ and $X \in \mathcal{T}$;
- **(T2)** $\bigcup \mathcal{S} \in \mathcal{T}$ for every $\mathcal{S} \subseteq \mathcal{T}$;
- **(T3)** $U \cap V \in \mathcal{T}$ for all $U, V \in \mathcal{T}$.

A **topological space** is a pair $(X, \mathcal{T})$ consisting of a set $X$ and
a topology $\mathcal{T}$ on it; the elements of $X$ are its **points**. When only
one topology is in play we write $X$ for the pair; when several are, the topology
is always named.

The members of $\mathcal{T}$ are the **open** sets of $(X,\mathcal{T})$. A subset
$F \subseteq X$ is **closed** when its complement $X \setminus F$ is open, and
**clopen** when it is both open and closed. By (T1) both $\varnothing$ and $X$
are clopen. *Open and closed are not opposites*: a set may be neither, and it may
be both, so "not open" is never a synonym for "closed".

**Finite intersections, and the empty one.** Axiom (T3) is stated for two sets
because that is all that is ever needed: if $n \ge 1$ and
$U_1, \dots, U_n \in \mathcal{T}$, then $U_1 \cap \dots \cap U_n \in \mathcal{T}$
follows by iterating (T3) $n-1$ times. The intersection of the **empty** family
of subsets of $X$ is $X$, since the condition "lies in every member of the empty
family" is vacuous; that case is covered by (T1) rather than by (T3), which is
one of the two reasons $X \in \mathcal{T}$ is demanded outright. The other is
that (T2) alone gives only $\bigcup \varnothing = \varnothing$.

**The closed sets, and the dual axiomatisation.** Put
$\mathcal{C} := \{\, X \setminus U : U \in \mathcal{T} \,\}$, the family of closed
sets. Then

- **(C1)** $\varnothing \in \mathcal{C}$ and $X \in \mathcal{C}$;
- **(C2)** $\bigcap \mathcal{D} \in \mathcal{C}$ for every **nonempty**
  $\mathcal{D} \subseteq \mathcal{C}$;
- **(C3)** $C \cup D \in \mathcal{C}$ for all $C, D \in \mathcal{C}$.

Conversely, if a family $\mathcal{C} \subseteq \mathcal{P}(X)$ satisfies (C1),
(C2) and (C3), then $\mathcal{T} := \{\, X \setminus C : C \in \mathcal{C} \,\}$
is a topology on $X$ whose closed sets are exactly the members of $\mathcal{C}$.
So a topology may be presented equally well by its open sets or by its closed
sets, and this library uses whichever is shorter.

*Both directions are one computation, and it is carried out here rather than
assumed.* The map $U \mapsto X \setminus U$ is an involution of
$\mathcal{P}(X)$, hence a bijection, and it carries the two De Morgan identities

$$X \setminus \bigcup_{i \in I} A_i = \bigcap_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing), \qquad X \setminus \bigcap_{i \in I} A_i = \bigcup_{i \in I} (X \setminus A_i) \quad (I \ne \varnothing)$$

term by term into each other. Given (T1)–(T3): $\varnothing = X \setminus X$ and
$X = X \setminus \varnothing$ lie in $\mathcal{C}$, which is (C1); for nonempty
$\mathcal{D} \subseteq \mathcal{C}$ the family
$\mathcal{S} = \{\, X \setminus C : C \in \mathcal{D} \,\}$ lies in $\mathcal{T}$
and $\bigcap \mathcal{D} = X \setminus \bigcup \mathcal{S}$ is closed by (T2),
which is (C2); and $C \cup D = X \setminus ((X \setminus C) \cap (X \setminus D))$
is closed by (T3), which is (C3). Given (C1)–(C3) the same three lines run
backwards, the empty-union case $\bigcup \varnothing = \varnothing$ being supplied
by (C1) rather than by (C2); and $\{\, X \setminus C : C \in \mathcal{C} \,\}$ has
$\mathcal{C}$ as its family of complements because complementation is an
involution.

**Comparison of topologies.** If $\mathcal{T}_1$ and $\mathcal{T}_2$ are
topologies on the same set $X$ and $\mathcal{T}_1 \subseteq \mathcal{T}_2$, then
$\mathcal{T}_1$ is **coarser** than $\mathcal{T}_2$ and $\mathcal{T}_2$ is
**finer** than $\mathcal{T}_1$; the comparison is **strict** when the inclusion
is. Inclusion is a partial order on the set of topologies on $X$
([[def-partial-order]]), and it is not a total one: two topologies on the same
set may be incomparable.

### `def-topology-basis-subbasis` — definition — Basis and subbasis for a topology, and the topology generated by a family of sets

(statement provenance: ai-altered)

### Definition

Let $(X, \mathcal{T})$ be a topological space ([[def-topological-space]]).

A family $\mathcal{B} \subseteq \mathcal{T}$ is a **basis for $\mathcal{T}$** if
every open set is a union of members of $\mathcal{B}$: for every
$U \in \mathcal{T}$ there is $\mathcal{B}_U \subseteq \mathcal{B}$ with
$U = \bigcup \mathcal{B}_U$. Equivalently, and this is the form used in proofs,

$$\text{for every } U \in \mathcal{T} \text{ and every } x \in U \text{ there is } B \in \mathcal{B} \text{ with } x \in B \subseteq U .$$

*The two forms say the same thing.* If every open $U$ is such a union and
$x \in U$, then $x$ lies in one of the sets united, which is a member of
$\mathcal{B}$ inside $U$. Conversely, if the displayed condition holds then
$U = \bigcup \{\, B \in \mathcal{B} : B \subseteq U \,\}$, since each such $B$ is
contained in $U$ and each $x \in U$ lies in one of them. Note that
$\bigcup \varnothing = \varnothing$, so the empty open set is covered by the empty
subfamily and needs no member of $\mathcal{B}$. The members of a basis are called
**basic open sets**.

**The topology generated by a family.** Let $\mathcal{S} \subseteq \mathcal{P}(X)$
be *any* family of subsets of $X$. Then

$$\langle \mathcal{S} \rangle := \bigcap \{\, \mathcal{T}' : \mathcal{T}' \text{ is a topology on } X \text{ with } \mathcal{S} \subseteq \mathcal{T}' \,\}$$

is a topology on $X$, it contains $\mathcal{S}$, and it is contained in every
topology on $X$ that contains $\mathcal{S}$. It is called the **topology
generated by $\mathcal{S}$**, and $\mathcal{S}$ is a **subbasis** for a topology
$\mathcal{T}$ when $\mathcal{T} = \langle \mathcal{S} \rangle$.

*This is well posed, and the obligation is discharged here.* The collection being
intersected is nonempty, because $\mathcal{P}(X)$ is a topology on $X$ containing
$\mathcal{S}$; so the intersection is an intersection of a nonempty family of
subsets of $\mathcal{P}(X)$ and is a set. It is a topology: $\varnothing$ and $X$
lie in every topology on $X$, hence in the intersection, which is (T1); if
$\mathcal{S}' \subseteq \langle \mathcal{S} \rangle$ then $\mathcal{S}'$ is a
subfamily of each $\mathcal{T}'$ in the collection, so $\bigcup \mathcal{S}'$ lies
in each $\mathcal{T}'$ and hence in the intersection, which is (T2); and the same
argument with $U \cap V$ gives (T3). It contains $\mathcal{S}$ because every
$\mathcal{T}'$ in the collection does, and it is contained in each such
$\mathcal{T}'$ because an intersection is contained in each of its members. So
$\langle \mathcal{S} \rangle$ is the coarsest topology on $X$ containing
$\mathcal{S}$ ([[def-topological-space]]), and in particular it is uniquely
determined by $\mathcal{S}$.

**Neither notion is intrinsic to the family alone.** "$\mathcal{B}$ is a basis
for $\mathcal{T}$" and "$\mathcal{S}$ is a subbasis for $\mathcal{T}$" are
relations between a family and a topology, not properties of the family. The
question of which families are a basis *for some* topology, and how the topology
generated by a subbasis is computed from it, is settled by the next item.

## What to return

Read `lem-ordinal-order-topology-is-t3` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
