---
id: ex-cylinder-and-mobius-band-as-quotients
kind: example
title: "The cylinder and the Mobius band as quotients of the square by $(0,y) \\sim (1,y)$ and by $(0,y) \\sim (1, 1-y)$, both by a closed quotient map"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-generated
deps: [def-quotient-topology, lem-open-or-closed-surjection-is-quotient,
       def-adjunction-cone-suspension, def-subspace-topology-top, lem-product-topology-on-rn,
       def-product-topology, def-interval, def-metrizable-space,
       thm-product-of-subspaces-and-closures, thm-quotient-universal-property,
       thm-product-universal-property, ex-circle-as-r-mod-z, ex-torus-as-a-quotient-of-the-square,
       lem-continuity-is-local-and-pastes, lem-integer-part, def-integers,
       lem-real-line-is-a-metric-space, def-homeomorphism-and-open-maps]
justified_by: []
aliases: [ex-mobius-band, ex-cylinder-top]
landmark: false
short: "cylinder and Mobius band"
proof_strategy: direct
verification:
  precheck: pass
  verified:
    model: gpt-5.6-sol-codex-subscription
    verdict: certify
    date: 2026-08-04
    scope: published-audit
    delegated_by: owner
sources:
  scraped: []
  references:
    - title: "Mobius strip (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/M%C3%B6bius_strip"
    - title: "Cylinder (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Cylinder"
    - title: "Quotient space (topology) (Wikipedia)"
      url: "https://en.wikipedia.org/wiki/Quotient_space_(topology)"
pipeline_run: null
---

## Example

Let $S := [0,1] \times [0,1]$ be the unit square, which carries one topology by
claim 1 of [[thm-product-of-subspaces-and-closures]]
([[lem-product-topology-on-rn]], [[def-subspace-topology-top]],
[[def-interval]]). Define two relations on $S$, in each case leaving every point
not on the two vertical edges alone:

$$\text{cylinder:}\quad (0,y) \sim_{\mathrm{c}} (1,y); \qquad\qquad \text{Mobius band:}\quad (0,y) \sim_{\mathrm{m}} (1, 1-y) \qquad (y \in [0,1]).$$

Precisely, $\sim_{\mathrm{c}}$ has as classes the pairs $\{(0,y),(1,y)\}$ and the
singletons $\{(s,t)\}$ with $0 < s < 1$; $\sim_{\mathrm{m}}$ has as classes the
pairs $\{(0,y),(1,1-y)\}$ and the same singletons. Write
$M_{\mathrm{c}} := S/\!\sim_{\mathrm{c}}$ (the **cylinder**) and
$M_{\mathrm{m}} := S/\!\sim_{\mathrm{m}}$ (the **Mobius band**), each with the
quotient topology ([[def-quotient-topology]]) and canonical projection
$P_{\mathrm{c}}$, $P_{\mathrm{m}}$. Then:

1. **Both projections are closed quotient maps**: the saturation of a closed
   subset of $S$ is closed, so $P_{\mathrm{c}}$ and $P_{\mathrm{m}}$ carry closed
   sets to closed sets ([[lem-open-or-closed-surjection-is-quotient]]).
2. **The cylinder is $(\mathbb{R}/\mathbb{Z}) \times [0,1]$.** With
   $T = \mathbb{R}/\mathbb{Z}$ and its open quotient map $q$
   ([[ex-circle-as-r-mod-z]]), the map $Q_1 := q \times \mathrm{id}_{[0,1]}$ is an
   open quotient map $\mathbb{R} \times [0,1] \to T \times [0,1]$ and induces a
   homeomorphism $M_{\mathrm{c}} \cong T \times [0,1]$
   ([[def-homeomorphism-and-open-maps]]).

**Nothing here claims that the cylinder and the Mobius band are different
spaces.** Distinguishing them needs an invariant, and the standard ones are not
available at this point in the reading order
([[rem-constructions-this-page-stops-short-of]]). Both are recorded as
constructions, and only the cylinder is identified with a space built earlier.

## Facts & Assumptions

**Given:** The square $S = [0,1]\times[0,1]$; the relations $\sim_{\mathrm{c}}$ and $\sim_{\mathrm{m}}$ with their quotients and projections; the edges $E_0 := \{0\}\times[0,1]$ and $E_1 := \{1\}\times[0,1]$; $T = \mathbb{R}/\mathbb{Z}$ with projection $q$; the maps $Q_1 := q \times \mathrm{id} : \mathbb{R}\times[0,1] \to T \times [0,1]$ and $F_1 : \mathbb{R}\times[0,1] \to M_{\mathrm{c}}$, $F_1(x,y) := P_{\mathrm{c}}(x - \lfloor x \rfloor,\ y)$.

[A1] For a quotient $Z/\!\sim$ with projection $\Pi$: $\Pi$ is a surjection, $W$ is open exactly when $\Pi^{-1}[W]$ is open, $W$ is closed exactly when $\Pi^{-1}[W]$ is closed, and $\Pi^{-1}[\Pi[A]]$ is the saturation of $A$ ([[def-quotient-topology]], [[def-adjunction-cone-suspension]]).

[A2] $q$ is a surjective open quotient map with $q(x) = q(x')$ exactly when $x - x' \in \mathbb{Z}$; for every real $x$ there is exactly one integer $\lfloor x \rfloor$ with $\lfloor x\rfloor \le x < \lfloor x\rfloor + 1$, and $\lfloor x+m\rfloor = \lfloor x \rfloor + m$ for integers $m$ ([[ex-circle-as-r-mod-z]], [[lem-integer-part]], [[def-integers]]).

[L1] A continuous closed surjection and a continuous open surjection are quotient maps ([[lem-open-or-closed-surjection-is-quotient]], clauses 1 and 2); for a quotient map $s$ and a continuous $f$ constant on its fibres there is exactly one continuous $\bar f$ with $\bar f \circ s = f$ ([[thm-quotient-universal-property]], claim 2).

[L2] A basis for a binary product is the family of boxes $U \times V$ with $U, V$ open; a map into a binary product is continuous exactly when both components are ([[def-product-topology]], [[thm-product-universal-property]]).

[L3] Restrictions of continuous maps to subspaces are continuous, composites of continuous maps are continuous, and continuity may be checked on an open cover and on a finite closed cover ([[def-subspace-topology-top]], [[lem-continuity-is-local-and-pastes]]).

[L4] A subset of a closed subspace that is closed in that subspace is closed in the ambient space; a finite union of closed sets is closed; $[0,1]$ is closed in $\mathbb{R}$ and the maps $y \mapsto 1-y$ of $[0,1]$ and $t \mapsto t + c$ of $\mathbb{R}$ are homeomorphisms ([[def-subspace-topology-top]], [[lem-real-line-is-a-metric-space]], [[def-interval]], [[def-metrizable-space]], [[def-homeomorphism-and-open-maps]], [[lem-product-topology-on-rn]]).

[L5] The pasting technique of [[ex-torus-as-a-quotient-of-the-square]]: a map defined on $\mathbb{R}$ by taking a fractional part and then applying a quotient projection that identifies the two endpoints of $[0,1]$ is continuous, because on $[m-1,m+1]$ it agrees with a map glued from two continuous pieces over the finite closed cover $\{[m-1,m],\ [m,m+1]\}$, and the open intervals $(m-1,m+1)$, $m \in \mathbb{Z}$, cover $\mathbb{R}$.

## Verification

**Proof technique:** direct.

1.1 $E_0$ and $E_1$ are closed in $S$: each is the trace on $S$ of a closed subset of $\mathbb{R}^2$, namely $\{0\}\times\mathbb{R}$ and $\{1\}\times\mathbb{R}$, whose complements are open by [L2] and [L4]. [L2, L4]

1.2 The maps $\tau_{\mathrm{c}}(0,y) := (1,y)$ and $\tau_{\mathrm{m}}(0,y) := (1,1-y)$ are homeomorphisms $E_0 \to E_1$, being $y \mapsto y$ and $y \mapsto 1-y$ read through the homeomorphisms $y \mapsto (0,y)$ and $y \mapsto (1,y)$ of $[0,1]$ onto $E_0$ and $E_1$, and both are continuous with continuous inverses by [L2], [L3] and [L4]. [L2, L3, L4]

1.3 For $C \subseteq S$ the saturation of $C$ under $\sim_{\mathrm{c}}$ is $C \cup \tau_{\mathrm{c}}[C \cap E_0] \cup \tau_{\mathrm{c}}^{-1}[C \cap E_1]$, since the only non-singleton classes are the pairs $\{(0,y),(1,y)\}$; the same formula with $\tau_{\mathrm{m}}$ gives the saturation under $\sim_{\mathrm{m}}$. [given, A1]

1.4 $Q_1$ is continuous, surjective and open: continuity and surjectivity are [L2] and [A2] coordinatewise, and $Q_1[U \times V] = q[U] \times V$ for $U$ open in $\mathbb{R}$ and $V$ open in $[0,1]$, which is open by [A2] and [L2]; images of unions are unions of images. By [L1] it is an open quotient map. [A2, L1, L2]

1.5 $Q_1(x,y) = Q_1(x',y')$ exactly when $x - x' \in \mathbb{Z}$ and $y = y'$, by [A2]; so the restriction $E := Q_1 \restriction S$ has exactly the classes of $\sim_{\mathrm{c}}$ as its fibres, and $E$ is continuous by [L3] and surjective, since $x - \lfloor x \rfloor \in [0,1)$ by [A2]. [A2, L3]

1.6 $F_1$ is constant on the fibres of $Q_1$, since $x - \lfloor x \rfloor$ depends only on the class of $x$ modulo $\mathbb{Z}$ by [A2], and it is continuous by [L5] applied in the first variable, the second variable being untouched, together with [L2] and [L3]. [A2, L2, L3, L5]

2.1 If $C$ is closed in $S$ then $C \cap E_0$ is closed in $E_0$ and hence in $S$ by step 1.1 and [L4], so $\tau_{\mathrm{c}}[C\cap E_0]$ is closed in $E_1$ by step 1.2 and hence in $S$; likewise for $\tau_{\mathrm{c}}^{-1}[C \cap E_1]$. So by step 1.3 the saturation of $C$ is a union of three closed sets, hence closed, and $P_{\mathrm{c}}[C]$ is closed by [A1]. The same argument with $\tau_{\mathrm{m}}$ gives the statement for $P_{\mathrm{m}}$. [step 1.1, step 1.2, step 1.3, A1, L4]

2.2 By step 1.5 and [L1] applied to the quotient map $P_{\mathrm{c}}$ and the continuous $E$, there is exactly one continuous $\bar E : M_{\mathrm{c}} \to T \times [0,1]$ with $\bar E \circ P_{\mathrm{c}} = E$; by step 1.6 and [L1] applied to the quotient map $Q_1$ of step 1.4 and the continuous $F_1$, there is exactly one continuous $\bar F : T \times [0,1] \to M_{\mathrm{c}}$ with $\bar F \circ Q_1 = F_1$. [step 1.4, step 1.5, step 1.6, A1, L1]

3.1 $\bar F \circ \bar E = \mathrm{id}$ and $\bar E \circ \bar F = \mathrm{id}$: for $(s,t) \in S$ one has $\bar F(\bar E(P_{\mathrm{c}}(s,t))) = F_1(s,t) = P_{\mathrm{c}}(s - \lfloor s \rfloor,\ t)$, which is $P_{\mathrm{c}}(s,t)$ because $\lfloor s \rfloor = 0$ for $s \in [0,1)$ and $(0,t) \sim_{\mathrm{c}} (1,t)$ for $s = 1$; and for $(x,y) \in \mathbb{R}\times[0,1]$ one has $\bar E(\bar F(Q_1(x,y))) = E(x - \lfloor x\rfloor,\ y) = Q_1(x,y)$ by [A2]. Both $P_{\mathrm{c}}$ and $Q_1$ are surjective. [step 1.4, step 1.5, step 2.2, A1, A2]

4.1 Claim 1 is step 2.1, and claim 2 follows from steps 2.2 and 3.1, the maps $\bar E$ and $\bar F$ being mutually inverse and continuous, hence homeomorphisms. [step 2.1, step 2.2, step 3.1] ∎

## Remarks

- **The two constructions differ in one sign and in nothing else.** They use the
  same square, the same two edges and the same kind of relation; the Mobius band
  glues the left edge to the right edge after reversing it. Claim 1 is proved for
  both. Claim 2 is not: it identifies the cylinder with
  $(\mathbb{R}/\mathbb{Z}) \times [0,1]$, and no analogous description of the
  Mobius band is attempted here. Separating the two spaces would need an invariant,
  and none is claimed here.

- **Why closedness rather than openness.** Neither projection is open. Take
  $U := \{\, (s,t) \in S : s < 1/2 \,\}$, which is open in $S$; its saturation is
  $U \cup (\{1\} \times [0,1])$, and that is not open in $S$, because every
  neighbourhood in $S$ of the point $(1,1/2)$ contains points $(s,1/2)$ with
  $1/2 < s < 1$, which lie in neither piece. So $P_{\mathrm{c}}[U]$ is not open,
  and the same computation applies to $P_{\mathrm{m}}$; this is the failure
  recorded in [[fs-quotient-map-is-open]]. Closedness holds instead because the
  two edges are closed and the gluing map between them is a homeomorphism, which
  is what step 2.1 uses.

- **The cylinder is a product and the Mobius band is not built as one.** Claim 2
  writes $M_{\mathrm{c}}$ as $T \times [0,1]$; no analogous description is
  attempted for $M_{\mathrm{m}}$, and none is available at this point in the
  reading order.
