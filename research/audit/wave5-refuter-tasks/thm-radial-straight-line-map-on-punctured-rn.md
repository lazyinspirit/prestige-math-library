# Adversarial proof reading — `thm-radial-straight-line-map-on-punctured-rn`

## The item under review, in full

`items/thm-radial-straight-line-map-on-punctured-rn.md`

```markdown
---
id: thm-radial-straight-line-map-on-punctured-rn
kind: theorem
title: "For $n\\ge1$, the map $H(x,t)=((1-t)+t/\\lVert x\\rVert_2)x$ is continuous on $(\\mathbb{R}^n\\setminus\\{0\\})\\times[0,1]$, starts at $x$, ends at radial normalisation, fixes the unit sphere, and never reaches $0$"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [lem-radial-normalisation-is-continuous, thm-product-universal-property, thm-componentwise-limits-and-continuity, def-product-topology, def-euclidean-spheres-and-closed-balls, lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric, thm-algebra-of-continuous-functions, def-subspace-topology-top]
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
    - title: "Deformation retract"
      url: "https://en.wikipedia.org/wiki/Deformation_retract"
pipeline_run: null
---

## Statement

For $n\ge1$, put $P=\mathbb R^n\setminus\{0\}$ and define

$$H:P\times[0,1]\to P,\qquad H(x,t)=\bigl((1-t)+t/\lVert x\rVert_2\bigr)x.$$

Then $H$ is continuous, $H(x,0)=x$, $H(x,1)=x/\lVert x\rVert_2$, $H(s,t)=s$ for $s\in S^{n-1}$, and $H(x,t)\ne0$.

## Facts & Assumptions

**Given:** $x\in P$ and $t\in[0,1]$.

[L1] Radial normalisation is continuous on $P$ ([[lem-radial-normalisation-is-continuous]]).

[L2] Coordinate projections and the map into a product are continuous as stated by the product universal property ([[thm-product-universal-property]], [[def-product-topology]]).

[L3] The Euclidean norm is positive away from $0$ and the unit sphere consists of its norm-one points ([[lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric]], [[def-euclidean-spheres-and-closed-balls]]).

[L4] Sums, products, and quotients with nowhere-zero denominator of continuous real-valued functions are continuous, and a vector-valued map is continuous exactly when its coordinate functions are continuous ([[thm-algebra-of-continuous-functions]], [[thm-componentwise-limits-and-continuity]]).

[L5] A map into a subspace is continuous exactly when its composite with the ambient inclusion is continuous ([[def-subspace-topology-top]]).

## Proof

**Proof technique:** direct.

1.1 The scalar $c(x,t):=(1-t)+t/\lVert x\rVert_2$ is positive, since $1-t\ge0$, $t\ge0$, and $\lVert x\rVert_2>0$. [L3]

1.2 The coordinate projections on $P\times[0,1]$ are continuous by [L2]. Thus $c(x,t)$ is continuous by [L1] and the algebra rules in [L4], and each coordinate $H_i(x,t)=c(x,t)x_i$ is continuous. Componentwise continuity in [L4] makes $H$ continuous as a map into $\mathbb R^n$. [L1, L2, L4]

1.3 Substituting $t=0$ and $t=1$ gives $H(x,0)=x$ and $H(x,1)=x/\lVert x\rVert_2$. If $s\in S^{n-1}$, then $\lVert s\rVert_2=1$ and $H(s,t)=s$. [L3]

2.1 Since $c(x,t)>0$ and $x\ne0$, $H(x,t)\ne0$. Hence $H$ takes values in $P$, and [L5] makes it continuous as a map $P\times[0,1]\to P$. [step 1.1, step 1.2, L5]

3.1 These identities and step 2.1 prove the statement. [step 2.1, step 1.3] ∎
```

## The dependencies it declares, quoted verbatim from disk

Each block below is the claim-bearing text of one declared dependency.
These are the only statements the item is entitled to use. If a step
needs more than the text below gives, that is the defect — quote the
dependency text and show exactly what it fails to supply.

### `lem-radial-normalisation-is-continuous` — lemma — Radial normalisation $x\\mapsto x/\\lVert x\\rVert_2$ is continuous on $\\mathbb{R}^n\\setminus\\{0\\}$

(statement provenance: ai-altered)

### Statement

For $n\ge1$, the map $\rho:\mathbb R^n\setminus\{0\}\to S^{n-1}$ defined by $\rho(x)=x/\lVert x\rVert_2$ is continuous.

### `thm-product-universal-property` — theorem — A map into a product is continuous iff each of its components is; the projections are continuous and open; and each projection is surjective when every factor is nonempty, which for an infinite index set uses the Axiom of Choice

(statement provenance: ai-altered)

### Statement

Let $(X_i, \mathcal{T}_i)_{i \in I}$ be topological spaces and let
$P := \prod_{i \in I} X_i$ carry the product topology, with projections $\pi_j$
([[def-product-topology]]). Then:

1. **The projections are continuous**, and the product topology is the coarsest
   topology on $P$ making all of them continuous.
2. **Characteristic property.** For every space $Z$ and every function
   $h : Z \to P$,
   $$h \text{ is continuous } \iff \pi_i \circ h \text{ is continuous for every } i \in I .$$
   The functions $\pi_i \circ h$ are the **components** of $h$, and every family
   of functions $h_i : Z \to X_i$ arises from exactly one $h$, namely
   $h(z)(i) := h_i(z)$.
3. **The projections are open maps** ([[def-homeomorphism-and-open-maps]]), for
   the product topology and for the box topology alike. They need not be closed;
   that failure is recorded on this page as a false statement.
4. **Surjectivity.** If every $X_i$ is nonempty then every $\pi_j$ is surjective.
   For $I$ a natural number this is a theorem of ZF ([[lem-finite-choice]]); for
   an arbitrary $I$ it is the Axiom of Choice ([[def-axiom-of-choice]]), and this
   is the only place in the item where a choice principle is used.

### `thm-componentwise-limits-and-continuity` — theorem — A vector-valued function has a limit, or is continuous, if and only if each of its components does; with the algebra of continuous vector-valued functions

(statement provenance: untagged)

### Statement

Let $m \in \mathbb{N}$ with $m \ge 1$, with vector-valued functions, their
components $f_i = \pi_i \circ f$, their limits and their continuity as in
[[def-vector-valued-functions-limits-and-continuity]].

1. **Continuity is componentwise.** Let $(X,d_X)$ be a metric space, $A \subseteq X$,
   $f : A \to \mathbb{R}^{m}$ and $a \in A$. Then $f$ is continuous at $a$ if and
   only if every component $f_i : A \to \mathbb{R}$ $(i<m)$ is continuous at $a$.
2. **Limits are componentwise.** Let $A \subseteq \mathbb{R}$, let $c$ be a limit
   point of $A$ ([[def-limit-point-r]]), let $f : A \to \mathbb{R}^{m}$ and let
   $L \in \mathbb{R}^{m}$. Then $\lim_{x\to c} f(x) = L$ if and only if
   $\lim_{x\to c} f_i(x) = L_i$ for every $i<m$ ([[def-function-limit]]).
3. **Algebra.** Let $(X,d_X)$, $A$, $a$ be as in clause 1, let
   $f, g : A \to \mathbb{R}^{m}$ be continuous at $a$ and let $\lambda \in \mathbb{R}$.
   Then $f + g$ and $\lambda f$ (defined pointwise) are continuous at $a$; the
   real-valued function $x \mapsto \langle f(x), g(x)\rangle$ is continuous at
   $a$ ([[def-euclidean-inner-product]]); and for every norm $N$ on
   $\mathbb{R}^{m}$ the real-valued function $x \mapsto N(f(x))$ is continuous at
   $a$ ([[def-norm-and-normed-space]]).

**Where $m \ge 1$ is spent.** The "if" direction of clauses 1 and 2 divides
$\varepsilon$ by $\iota(m)$, which requires $\iota(m) \ne 0$; and clause 3's last
part quotes a bound available only for $m \ge 1$. The "only if" directions hold
for every $m$ but say nothing at $m = 0$, there being no index $i < 0$.

### `def-product-topology` — definition — The product set $\\prod_{i \\in I} X_i$ of functions choosing a point in each factor, the projections, the box topology, and the product topology as the initial topology of the projections; the empty product is a one-point space

(statement provenance: ai-altered)

### Definition

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

### `def-euclidean-spheres-and-closed-balls` — definition — Euclidean spheres and closed balls as subspaces of $\\mathbb{R}^n$

(statement provenance: literature-derived)

### Definition

Let $n \in \mathbb{N}$ with $n \ge 1$. Give $\mathbb{R}^n$ its Euclidean norm $\lVert\cdot\rVert_2$ and its induced Euclidean metric $d_2$ ([[lem-metrics-on-rn]], [[def-norm-and-normed-space]]). For $c \in \mathbb{R}^n$ and $r>0$, put

$$\overline B_2(c,r):=\{x\in\mathbb{R}^n:\lVert x-c\rVert_2\le r\},\qquad S_2(c,r):=\{x\in\mathbb{R}^n:\lVert x-c\rVert_2=r\}.$$

These are respectively the **Euclidean closed ball** and **Euclidean sphere** with centre $c$ and radius $r$. They carry the subspace topology inherited from $\mathbb{R}^n$ ([[def-subspace-topology-top]]). Since $d_2(c,x)=\lVert x-c\rVert_2$, they are precisely the closed ball and sphere $\bar B(c,r)$ and $S(c,r)$ of the metric-space definition ([[def-metric-ball]]).

For the unit sphere centred at the origin write

$$S^{n-1}:=S_2(0,1).$$

The exponent is notation for this particular sphere, not a claim that a dimension theory has been developed here.

### `lem-every-norm-on-rn-is-continuous-for-the-euclidean-metric` — lemma — The finite and reverse triangle inequalities for a norm; and for $n \\ge 1$ every norm $N$ on $\\mathbb{R}^n$ satisfies $N(x) \\le C\\lVert x\\rVert_1$ and is Lipschitz, hence continuous, for $d_2$

(statement provenance: untagged)

### Statement

**Clause 1 is about an arbitrary norm; clauses 2 to 4 are about
$\mathbb{R}^{n}$ with $n \ge 1$.**

1. **Finite and reverse triangle inequalities.** Let $V$ be a vector space over
   $\mathbb{R}$ and $N$ a norm on it ([[def-norm-and-normed-space]]). For every
   $p \in \mathbb{N}$ and every list $u : p \to V$
   ([[def-linear-combination-and-span]]),
   $$N\Bigl(\sum_{j<p} u_j\Bigr) \;\le\; \sum_{j<p} N(u_j),$$
   and for all $u, w \in V$,
   $$\bigl|N(u) - N(w)\bigr| \;\le\; N(u - w).$$

Now let $n \in \mathbb{N}$ with $n \ge 1$, let $\mathbb{R}^{n}$ carry the norms of
[[def-p-norms-on-rn]] and write $\iota$ for the canonical natural
([[def-canonical-natural]]).

2. **Every norm is dominated by the $1$-norm.** Let $N$ be a norm on
   $\mathbb{R}^{n}$ and put $C := \max\{\, N(e_k) : k<n \,\}$, a maximum over a
   nonempty finite set of reals ([[lem-standard-basis-of-f-n]],
   [[lem-finite-set-has-max]]). Then $C \ge 0$ and
   $$N(x) \;\le\; C\,\lVert x\rVert_1 \qquad \text{for every } x \in \mathbb{R}^{n}.$$
3. **The comparison chain.** For every $x \in \mathbb{R}^{n}$,
   $$\lVert x\rVert_\infty \;\le\; \lVert x\rVert_2 \;\le\; \lVert x\rVert_1 \;\le\; \iota(n)\,\lVert x\rVert_\infty , \qquad \lVert x\rVert_1 \;\le\; \sqrt{\iota(n)}\;\lVert x\rVert_2 .$$
   In particular $\lVert\cdot\rVert_1$, $\lVert\cdot\rVert_2$ and
   $\lVert\cdot\rVert_\infty$ are pairwise equivalent norms on $\mathbb{R}^{n}$,
   with the constants displayed ([[def-equivalent-norms]]).
4. **Every norm is Lipschitz for the Euclidean metric.** With $N$ and $C$ as in
   clause 2, $N : (\mathbb{R}^{n}, d_2) \to (\mathbb{R}, d_{\mathbb{R}})$ is
   Lipschitz with constant $C\sqrt{\iota(n)}$
   ([[def-lipschitz-holder-contraction]], [[lem-metrics-on-rn]],
   [[lem-real-line-is-a-metric-space]]), hence uniformly continuous and
   continuous ([[thm-metric-regularity-hierarchy]], [[def-metric-continuity]]).

**Where $n \ge 1$ enters.** Clauses 2 and 4 need the maximum defining $C$ to
exist, and clause 3 mentions $\lVert\cdot\rVert_\infty$; at $n = 0$ each is a
maximum over the empty index set and does not exist, exactly as in
[[lem-metrics-on-rn]] and [[def-p-norms-on-rn]]. Clause 1 carries no hypothesis
on the dimension and no hypothesis on the space.

### `thm-algebra-of-continuous-functions` — theorem — Sums, scalar multiples, products, absolute values, maxima, minima and quotients with nonvanishing denominator of continuous functions are continuous, as are constants, the identity and every polynomial function

(statement provenance: untagged)

### Statement

Let $A \subseteq \mathbb{R}$, let $f, g : A \to \mathbb{R}$, let
$\alpha \in \mathbb{R}$ and let $c \in A$. Suppose $f$ and $g$ are continuous at
$c$ ([[def-continuity-real]]). Then:

1. $f + g$, $\alpha f$ and $fg$ are continuous at $c$;
2. $|f|$, the function $x \mapsto |f(x)|$, is continuous at $c$;
3. $\max\{f,g\}$ and $\min\{f,g\}$, defined pointwise by
   $x \mapsto \max\{f(x), g(x)\}$ and $x \mapsto \min\{f(x), g(x)\}$
   ([[def-max-min]]), are continuous at $c$;
4. if $g(c) \ne 0$ then, writing $A_0 := \{\, x \in A : g(x) \ne 0 \,\}$, the
   point $c$ lies in $A_0$ and the quotient
   $(f/g)|_{A_0} : A_0 \to \mathbb{R}$, $x \mapsto f(x)/g(x)$, is continuous at
   $c$ as a function on $A_0$.

Moreover, with no hypothesis at all:

5. every constant function $A \to \mathbb{R}$ and the identity
   $\mathrm{id} : A \to \mathbb{R}$, $x \mapsto x$, are continuous on $A$; hence
   so is $x \mapsto x^{n}$ for every $n \in \mathbb{N}$
   ([[def-integer-power]]), and hence so is every **polynomial function**
   $x \mapsto a_0 + a_1 x + \dots + a_n x^{n}$ with real coefficients.

Consequently, if $f$ and $g$ are continuous **on** $A$ then so are $f+g$,
$\alpha f$, $fg$, $|f|$, $\max\{f,g\}$ and $\min\{f,g\}$, and
$(f/g)|_{A_0}$ is continuous on $A_0$.

**Claim 4 is stated on $A_0$ because $f/g$ is not defined where $g$ vanishes**,
and $g$ may well vanish at points of $A$ far from $c$. The hypothesis is
$g(c) \ne 0$, not "$g$ nowhere zero"; what it buys is that $c$ itself lies in
the smaller domain, which is what makes continuity there mean anything.

**Nothing here is proved through a sequence.** Claims 1 and 4 are read off from
[[thm-algebra-of-function-limits]], which is itself proved from $\varepsilon$
and $\delta$, and claims 2, 3 and 5 are proved directly below. So no choice
principle is used anywhere in this item.

### `def-subspace-topology-top` — definition — Subspace topology: the traces of the open sets, its closed sets and its bases, the continuity of the inclusion, and the characteristic property of a map into a subspace

(statement provenance: ai-altered)

### Definition

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

## What to return

Read `thm-radial-straight-line-map-on-punctured-rn` adversarially against the dependency text above and return
your findings in the block format the brief specifies, ending with the
`N fatal, M nonfatal` line.
