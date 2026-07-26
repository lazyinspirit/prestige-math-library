---
id: thm-open-subsets-of-r-structure
kind: theorem
title: "Every open subset of $\\mathbb{R}$ is a countable disjoint union of open intervals, namely its order components"
status: published
origin: session
deps: [def-open-and-closed-in-r, def-neighbourhood-r, def-interval, def-complete-ordered-field, lem-sup-epsilon, lem-inf-epsilon, thm-infimum-property, def-infimum, lem-sup-unique, def-bounded-set, lem-rat-embeds-dense, thm-rationals-countable, lem-subset-of-countable, def-countable, def-injection-surjection-bijection, def-equinumerous, thm-well-ordering-principle, def-ordered-field]
justified_by: []
aliases: []
landmark: true
short: "structure of open subsets of $\\mathbb{R}$"
proof_strategy: constructive
verification:
  precheck: pass
  judge:
    model: z-ai/glm-5.2
    verdict: pass
    date: 2026-07-26
  audited: 2026-07-26
sources:
  scraped: []
  references:
    - title: "Open set (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Open_set"
    - title: "Interval (mathematics) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Interval_(mathematics)"
    - title: "W. Rudin, Principles of Mathematical Analysis, 3rd ed., Ch. 2 (Exercise 2.29)"
      url: "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
    - title: "J. Lebl, Basic Analysis I, §7.2"
      url: "https://www.jirka.org/ra/"
pipeline_run: null
---

## Statement

Let $U \subseteq \mathbb{R}$ be open ([[def-open-and-closed-in-r]]). For
$x, y \in \mathbb{R}$ write

$$H(x,y) \;:=\; \{\, z \in \mathbb{R} : x \le z \le y \text{ or } y \le z \le x \,\}$$

for the order-convex hull of the pair, and define a relation on $U$ by

$$x \sim y \quad :\Longleftrightarrow \quad H(x,y) \subseteq U .$$

Then $\sim$ is an equivalence relation on $U$. Its equivalence classes, called
the **order components** of $U$, form a family $\mathcal{C}$ with the following
properties:

1. the members of $\mathcal{C}$ are nonempty and pairwise disjoint, and
   $U = \bigcup \mathcal{C}$;
2. every member of $\mathcal{C}$ is an interval of one of the four open forms
   $(a,b)$, $(a,\infty)$, $(-\infty,b)$, $(-\infty,\infty)$ of
   [[def-interval]], and is an open set;
3. $\mathcal{C}$ is at most countable ([[def-countable]]).

So every open subset of $\mathbb{R}$ is the union of an at most countable family
of pairwise disjoint nonempty open intervals. For $U = \varnothing$ the family
$\mathcal{C}$ is empty and the union of the empty family is $\varnothing$, so the
statement holds in that case too.

**No choice principle is used.** The components are defined by an explicit
equivalence relation, and the enumeration in claim 3 is obtained by sending a
component to the *least* index of a rational lying in it, which is canonical by
[[thm-well-ordering-principle]].

## Facts & Assumptions

**Given:** An open set $U \subseteq \mathbb{R}$, the hull $H(x,y)$ and the relation $\sim$ as displayed in the Statement. Write $\mathbb{Q}_{\mathbb{R}}$ for the image of $\mathbb{Q}$ in $\mathbb{R}$ under the canonical embedding $q \mapsto \hat q$.

[L1] $U$ is open when every $u \in U$ admits a real $\varepsilon > 0$ with $N_\varepsilon(u) \subseteq U$ ([[def-open-and-closed-in-r]]).

[L2] $N_\varepsilon(u) = (u - \varepsilon, u + \varepsilon)$, and $u \in N_\varepsilon(u)$ ([[def-neighbourhood-r]]).

[L3] Order-convexity and the nine interval forms; each of the nine is order-convex, and $(a,b)$, $(a,\infty)$, $(-\infty,b)$, $(-\infty,\infty)$ are the open forms; trichotomy and transitivity of the order ([[def-interval]], [[def-ordered-field]], [[def-complete-ordered-field]]).

[L4] Least-upper-bound property: a nonempty subset of $\mathbb{R}$ bounded above has a least upper bound, unique, and dually a nonempty subset bounded below has a greatest lower bound, unique ([[def-complete-ordered-field]], [[thm-infimum-property]], [[def-infimum]], [[lem-sup-unique]]).

[L5] Epsilon characterisations: for nonempty $S$ bounded above and $b = \sup S$, every $\varepsilon > 0$ admits $s \in S$ with $b - \varepsilon < s$; for nonempty $S$ bounded below and $a = \inf S$, every $\varepsilon > 0$ admits $s \in S$ with $s < a + \varepsilon$ ([[lem-sup-epsilon]], [[lem-inf-epsilon]]).

[L6] Bounded above, bounded below, and their negations: $S$ fails to be bounded above exactly when for every $w \in \mathbb{R}$ there is $v \in S$ with $w < v$, and fails to be bounded below exactly when for every $w$ there is $t \in S$ with $t < w$ ([[def-bounded-set]], [[def-complete-ordered-field]]).

[L7] Strictly between any two reals lies an element of $\mathbb{Q}_{\mathbb{R}}$, and $q \mapsto \hat q$ is injective ([[lem-rat-embeds-dense]]).

[L8] $\mathbb{Q} \approx \mathbb{N}$ ([[thm-rationals-countable]]); a composition of bijections is a bijection and an injection is a bijection onto its image ([[def-injection-surjection-bijection]], [[def-equinumerous]]); every subset of an at most countable set is at most countable ([[lem-subset-of-countable]], [[def-countable]]).

[L9] Every nonempty subset of $\mathbb{N}$ has a least element ([[thm-well-ordering-principle]]).

## Proof

**Proof technique:** constructive.

1.1 The hull satisfies $x, y \in H(x,y)$, $H(x,y) = H(y,x)$ and $H(x,x) = \{x\}$, and for all $x, y, z$ one has $H(x,z) \subseteq H(x,y) \cup H(y,z)$: given $w \in H(x,z)$, either $x \le w \le z$, in which case $w \le y$ puts $w$ in $H(x,y)$ and $y < w$ puts $w$ in $H(y,z)$, or $z \le w \le x$, in which case $w \le y$ puts $w$ in $H(y,z)$ and $y < w$ puts $w$ in $H(x,y)$. Hence $\sim$ is reflexive on $U$ (as $H(x,x) = \{x\} \subseteq U$), symmetric, and transitive. [given, L3]

1.2 Let $C \subseteq \mathbb{R}$ be nonempty, open and order-convex, and let $u \in C$; fix $\varepsilon > 0$ with $N_\varepsilon(u) \subseteq C$. Then $u - \varepsilon/2$ and $u + \varepsilon/2$ lie in $N_\varepsilon(u) \subseteq C$, so $u$ is neither an upper bound nor a lower bound of $C$. [L1, L2, L3, choose]

1.3 For $x \in U$ put $C_x := \{\, y \in U : H(x,y) \subseteq U \,\}$, the equivalence class of $x$, and let $\mathcal{C} := \{\, C_x : x \in U \,\}$. [construct]

2.1 Each $C_x$ is nonempty because $x \in C_x$; two classes of an equivalence relation are equal or disjoint; and every $x \in U$ lies in $C_x$, so $U = \bigcup \mathcal{C}$. This is claim 1. [step 1.1, step 1.3]

2.2 Each $C_x$ is order-convex: let $u, v \in C_x$ and $u \le w \le v$. From $u \sim x$ and $x \sim v$ we get $u \sim v$, so $H(u,v) \subseteq U$; since $w \in H(u,v)$ we get $w \in U$, and $H(u,w) \subseteq H(u,v) \subseteq U$ because every $t$ with $u \le t \le w$ satisfies $u \le t \le v$, so $u \sim w$ and hence $w \in C_u = C_x$. [step 1.1, step 1.3, L3]

2.3 Each $C_x$ is open: let $u \in C_x \subseteq U$ and fix $\varepsilon > 0$ with $N_\varepsilon(u) \subseteq U$. For $y \in N_\varepsilon(u)$ the hull $H(u,y)$ is contained in the order-convex set $N_\varepsilon(u)$, hence in $U$, so $u \sim y$ and $y \in C_u = C_x$; therefore $N_\varepsilon(u) \subseteq C_x$. [step 1.1, step 1.3, L1, L2, L3, choose]

2.4 Let $C$ be nonempty, open and order-convex and bounded both above and below; then $a := \inf C$ and $b := \sup C$ exist by [L4]. Every $u \in C$ satisfies $a \le u \le b$, and $u$ is neither an upper nor a lower bound of $C$, so $u \ne a$ and $u \ne b$, giving $a < u < b$; in particular $a < b$ and $C \subseteq (a,b)$. Conversely let $a < w < b$: by [L5] with $\varepsilon = b - w$ there is $v \in C$ with $w < v$, and with $\varepsilon = w - a$ there is $t \in C$ with $t < w$, so $t \le w \le v$ and order-convexity gives $w \in C$. Hence $C = (a,b)$. [step 1.2, L3, L4, L5]

2.5 Let $C$ be nonempty, open and order-convex. If $C$ is bounded below and not above, put $a := \inf C$; as in the bounded case every $u \in C$ satisfies $a < u$, and for $w > a$ the fact [L5] supplies $t \in C$ with $t < w$ while [L6] supplies $v \in C$ with $w < v$, so $w \in C$ by order-convexity; hence $C = (a,\infty)$. Symmetrically, if $C$ is bounded above and not below then $C = (-\infty, b)$ with $b := \sup C$. If $C$ is bounded neither above nor below then for every $w$ the fact [L6] supplies $t, v \in C$ with $t < w < v$, so $w \in C$ and $C = \mathbb{R}$. [step 1.2, L3, L4, L5, L6]

3.1 Every member of $\mathcal{C}$ is nonempty, open and order-convex by steps 2.1, 2.2 and 2.3, and it is bounded above or not and bounded below or not, so steps 2.4 and 2.5 exhibit it as an interval of one of the four open forms; this is claim 2. [step 2.1, step 2.2, step 2.3, step 2.4, step 2.5, L3]

3.2 Every member $C$ of $\mathcal{C}$ contains an element of $\mathbb{Q}_{\mathbb{R}}$: pick $u \in C$ and, by openness, $\varepsilon > 0$ with $N_\varepsilon(u) \subseteq C$; since $u - \varepsilon < u + \varepsilon$, the fact [L7] supplies $\hat q$ with $u - \varepsilon < \hat q < u + \varepsilon$, and $N_\varepsilon(u) = (u - \varepsilon, u + \varepsilon)$ by [L2], so $\hat q \in C$. [step 2.1, step 2.3, L2, L7, choose]

4.1 By [L8] fix a bijection $\beta : \mathbb{N} \to \mathbb{Q}$; then $e := \iota \circ \beta$, where $\iota(q) = \hat q$, is a bijection from $\mathbb{N}$ onto $\mathbb{Q}_{\mathbb{R}}$ by [L7] and [L8]. For $C \in \mathcal{C}$ the set $\{\, n \in \mathbb{N} : e(n) \in C \,\}$ is nonempty by step 3.2, so $\Phi(C) := \min \{\, n \in \mathbb{N} : e(n) \in C \,\}$ is defined by [L9] and no selection is made; and $\Phi$ is injective, since $e(\Phi(C)) \in C$ and distinct members of $\mathcal{C}$ are disjoint by step 2.1. [step 2.1, step 3.2, L7, L8, L9, construct]

5.1 Hence $\mathcal{C}$ is in bijection with $\Phi[\mathcal{C}] \subseteq \mathbb{N}$, and a subset of $\mathbb{N}$ is at most countable, so $\mathcal{C}$ is at most countable; this is claim 3. [step 4.1, L8]

6.1 The family $\mathcal{C}$ constructed in step 1.3 therefore consists of pairwise disjoint nonempty open intervals whose union is $U$, and it is at most countable, which is exactly the assertion. [step 2.1, step 3.1, step 5.1, discharge-construct] ∎

## Remarks

- **The components are forced, not chosen.** A component is an equivalence class
  of an explicitly written relation, so the family $\mathcal{C}$ is determined by
  $U$ alone, with no selection anywhere. One half of the usual uniqueness
  statement is immediate from that: if $U$ is written as a union of nonempty open
  intervals, each of those intervals is order-convex and contained in $U$, so any
  two of its points are equivalent and the whole interval lies inside a single
  component. That the intervals must then *be* the components is the other half,
  and it is neither needed below nor proved here.

- **Where completeness is spent.** Only in steps 2.4 and 2.5, which produce
  $\inf C$ and $\sup C$ from the least-upper-bound property. Everything else
  uses the order alone. The argument therefore does not transpose to an
  arbitrary ordered field, where the two bounds it asks for need not exist; the
  standard obstruction is the set of positive rationals whose square is below
  $2$, which is bounded above in $\mathbb{Q}$ and has no supremum there
  ([[ex-sup-rationals-below-sqrt-two]]).

- **The two sizes in the statement pull in opposite directions.** Each single
  component is an uncountable set, being a nonempty open set
  ([[lem-q-and-irrationals-dense-r]]), while the family of components is at most
  countable. There is no tension: the count in claim 3 is a count of components,
  not of points, and the injection of step 4.1 is into $\mathbb{N}$ through the
  rationals, which are countable and dense at once.

- **This is one of the results whose statement is order vocabulary throughout**,
  and [[rem-r-native-topology-scope]] collects them: interval, disjoint union of
  intervals, and the components themselves are all defined from the order, so
  there is nothing here to restate where no order is present.
