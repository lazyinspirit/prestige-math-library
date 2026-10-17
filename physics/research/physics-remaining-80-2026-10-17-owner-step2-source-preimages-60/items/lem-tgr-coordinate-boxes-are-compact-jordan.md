---
id: lem-tgr-coordinate-boxes-are-compact-jordan
kind: lemma
title: "Finite coordinate boxes and their faces are compact Jordan sets"
status: draft
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 0
deps:
  - def-multidimensional-rectangle-and-volume
  - def-jordan-inner-and-outer-content
  - thm-heine-borel-rn
  - thm-jordan-boundary-criterion
  - def-null-and-content-zero-in-rn
  - thm-continuous-functions-on-compact-jordan-sets-are-integrable
  - thm-lebesgue-criterion-in-rn
  - def-riemann-integral-over-a-jordan-set
dependency_roles:
  def-multidimensional-rectangle-and-volume: mathematical-premise
  def-jordan-inner-and-outer-content: mathematical-premise
  thm-heine-borel-rn: mathematical-premise
  thm-jordan-boundary-criterion: mathematical-premise
  def-null-and-content-zero-in-rn: mathematical-premise
  thm-continuous-functions-on-compact-jordan-sets-are-integrable: mathematical-premise
  thm-lebesgue-criterion-in-rn: mathematical-premise
  def-riemann-integral-over-a-jordan-set: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "J. Lebl, Basic Analysis II, §10.5.1 'Volume and Jordan measurable sets', Proposition 10.5.1"
      url: "https://www.jirka.org/ra/html/sec_jordansets.html"
      locator: "Section 10.5.1 states and proves that a bounded set is Jordan measurable exactly when its boundary has measure zero. The thin-cover proof for coordinate-box faces is supplied locally."
---

## Statement

Let $m\ge1$ and let
$$Q=\prod_{j=1}^{m}[a_j,b_j]\subseteq\mathbb R^m, \qquad a_j<b_j.$$
Then $Q$ is compact and Jordan measurable, and its boundary has Jordan
content zero. For any product $R=\prod_{j=1}^m I_j$ where each $I_j$ is one
of $[a_j,b_j]$, $(a_j,b_j)$, $[a_j,b_j)$ or $(a_j,b_j]$, the set $R$ is a
bounded Jordan set with closure contained in $Q$. Every continuous
$f:Q\to\mathbb R$ is Riemann integrable over $R$. When $m\ge2$, each closed
coordinate face of $Q$ is compact and Jordan measurable in its own
$(m-1)$-dimensional coordinate space; the same endpoint-variant and
integrability conclusions hold for products in that face.

## Facts & Assumptions

**Given:** A positive integer $m$ and finite real endpoints $a_j<b_j$ for
$j=1,\ldots,m$.

[F1] An axis-parallel rectangle has volume equal to the product of its side
lengths ([[def-multidimensional-rectangle-and-volume]]).

[F2] Jordan outer content is the infimum of total volumes of finite
axis-parallel rectangle covers; Jordan measurability is equality of inner and
outer content ([[def-jordan-inner-and-outer-content]]). Content zero implies
nullity in the covering sense used in Lebesgue's criterion, and content zero
passes to subsets ([[def-null-and-content-zero-in-rn]]).

[F3] A closed axis-parallel box in Euclidean $\mathbb R^m$ is compact
([[thm-heine-borel-rn]] clause 1).

[F4] A bounded set is Jordan measurable exactly when its boundary has Jordan
content zero ([[thm-jordan-boundary-criterion]]).

[F5] A continuous real function on a compact Jordan set is Riemann integrable
([[thm-continuous-functions-on-compact-jordan-sets-are-integrable]]).

[F6] A bounded function on a rectangle whose discontinuity set is null in the
covering sense is Riemann integrable
([[thm-lebesgue-criterion-in-rn]]).

[F7] A bounded function on a bounded Jordan set is Riemann integrable when
its zero extension to a containing rectangle is Riemann integrable
([[def-riemann-integral-over-a-jordan-set]]).

## Proof


**Proof technique:** direct thin-slab covering.

1.1 The box $Q$ is closed and bounded because it is a finite product of closed bounded intervals; [F3] therefore makes $Q$ compact. Its boundary is the union of the $2m$ coordinate faces $F_{r,-}:=\{x\in Q:x_r=a_r\}$ and $F_{r,+}:=\{x\in Q:x_r=b_r\}$, since a point of $Q$ is interior exactly when all its coordinates lie strictly between the endpoints. [given, F3, algebra]

2.1 For $r=1,\ldots,m$ put $C_r:=\prod_{j\ne r}(b_j-a_j+2)$, with the empty product $1$, and let $C:=\max(1,C_1,\ldots,C_m)$. Fix $\varepsilon>0$ and choose $0<\delta<\min(1,\varepsilon/(4mC))$. Each face $F_{r,\pm}$ is covered by the rectangle that thickens its fixed $r$-coordinate by $\delta$ and enlarges every other interval by $\delta$. By [F1], this cover has volume $$2\delta\prod_{j\ne r}(b_j-a_j+2\delta)\le2\delta C <\varepsilon/(2m).$$ Thus each face has zero outer content by [F2]. The finite union of the $2m$ faces has content zero: the displayed covers have total volume less than $\varepsilon$. Since their union is $\partial Q$ by step 1.1, the boundary has content zero. [F1, F2, step 1.1, algebra]

3.1 The box is bounded and has boundary of content zero by step 2.1, so [F4] makes $Q$ Jordan measurable. For any stated endpoint variant $R$, its boundary is contained in the same coordinate faces from step 1.1, hence has content zero by step 2.1; since $R$ is bounded, [F4] makes it Jordan measurable as well. [F2, F4, step 1.1, step 2.1]

4.1 Let $f:Q\to\mathbb R$ be continuous. By [F5], $f$ is Riemann integrable on $Q$ and therefore bounded there. For any endpoint variant $R$, extend $f|_R$ by zero to $Q$. At every point outside $\partial R$ this extension is either $f$ on a neighborhood in $R$ or zero on a neighborhood in $Q\setminus \overline R$; thus its discontinuities lie in $\partial R$. The boundary has content zero by step 3.1, hence is null by [F2]. Then [F6] makes this zero extension integrable on $Q$, and [F7] gives the Riemann integrability of $f|_R$ over $R$. [F2, F5, F6, F7, step 3.1]

5.1 For $m\ge2$, a closed coordinate face of $Q$ is a closed rectangle in $\mathbb R^{m-1}$, so it is compact by [F3]. Applying steps 1.1–4.1 in dimension $m-1$ proves its Jordan measurability and the stated integrability of every endpoint variant on that face. [F3, step 1.1, step 2.1, step 3.1, step 4.1] ∎

## Remarks

This lemma proves only finite-dimensional box and face regularity. It asserts
no integrability or convergence result for unbounded sets or exhaustions.
