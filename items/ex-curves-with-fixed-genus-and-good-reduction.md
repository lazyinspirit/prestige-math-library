---
id: ex-curves-with-fixed-genus-and-good-reduction
kind: example
title: A genus-two curve over Q with good reduction outside 2 and 3
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 26
deps:
  - def-good-reduction-of-smooth-proper-curve-at-a-finite-place
  - def-algebraic-curve-over-field
  - def-genus-euler-characteristic-curve
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
  - def-relative-projective-space-standard-charts
  - def-finite-morphism-schemes
  - thm-projective-space-proper-over-base
  - cor-finite-morphism-proper
  - lem-composite-finite-proper-morphism-proper
  - thm-jacobian-criterion-smooth-morphism
  - lem-squarefree-quintic-double-cover-is-genus-two
  - thm-shafarevich-finiteness-for-curves-of-fixed-genus
justified_by: []
proof_strategy: direct
axiom_use: "AC is used through the current relative projective-space, properness, Jacobian-criterion, and squarefree-quintic suppliers; DC and Countable Choice enter only in the conditional application of the current Shafarevich supplier."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references: []
---

## Example

Let $R=\mathbb Z[1/6]$, let $f(x)=x(x-1)(x-2)(x-3)(x-4)$, and let
$h(u)=\prod_{j=0}^{4}(1-ju)$. Glue the two charts
$$\operatorname{Spec}R[x,y]/(y^2-f(x))
\quad\text{and}\quad
\operatorname{Spec}R[u,w]/(w^2-u h(u))$$
on $x\ne0$ and $u\ne0$ by $u=x^{-1}$ and $w=u^3y$. The resulting generic
curve $C/\mathbb Q$ has genus $2$ and good reduction at every rational prime
$p\ge5$. Thus it satisfies the hypotheses of the assigned curve-finiteness
statement for $K=\mathbb Q$, $g=2$, and $S=\{(2),(3)\}$; its membership in the
finite isomorphism-class set is conditional on proof closure of that theorem.

## Example references

[[def-good-reduction-of-smooth-proper-curve-at-a-finite-place]]

[[def-algebraic-curve-over-field]]

[[def-genus-euler-characteristic-curve]]

[[lem-squarefree-quintic-double-cover-is-genus-two]]

[[thm-shafarevich-finiteness-for-curves-of-fixed-genus]]

## Conditional proof scope

The original Example is retained without an axiom qualification. The direct
model, genus and good-reduction calculation below uses the actual AC-bearing
suppliers [F3]–[F7], so it supplies that calculation under AC only. Removing
this additional premise remains a separate original-scope obligation; no
unqualified proof closure is claimed. The final finite-family application
also remains conditional on the held Shafarevich supplier [F9], as [L1]
records. DC and Countable Choice are not used in the direct model calculation.

## Facts & Assumptions

**Given:** AC, $R=\mathbb Z[1/6]$, the polynomial $f$, the polynomial $h$, and
the two charts and transition in the Example.

[A1] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function.

[A2] [[def-dependent-choice]]: DC supplies a sequence along an entire relation from a prescribed start.

[A3] [[def-countable-choice]]: Countable Choice supplies a choice function for a sequence of nonempty sets.

[F1] [[def-relative-projective-space-standard-charts]]: for a base scheme $T$, relative projective space $\mathbb P^n_T$ is covered by its standard affine charts, and for $T=\operatorname{Spec}A$ those charts are $\operatorname{Spec}A[x^{(i)}_\ell:\ell\ne i]$.

[F2] [[def-finite-morphism-schemes]]: a morphism is finite when the inverse image of every affine open is affine with a module-finite coordinate algebra.

[F3] [[thm-projective-space-proper-over-base]]: under AC, $\mathbb P^n_T\to T$ is proper for every scheme $T$ and $n\ge0$.

[F4] [[cor-finite-morphism-proper]]: under AC, every finite morphism of schemes is proper.

[F5] [[lem-composite-finite-proper-morphism-proper]]: under AC, the composite of a finite morphism and a proper morphism is proper.

[F6] [[thm-jacobian-criterion-smooth-morphism]]: under AC, a finitely presented hypersurface chart is smooth at a point when one partial derivative is a unit there.

[F7] [[lem-squarefree-quintic-double-cover-is-genus-two]]: under AC, over a field of characteristic different from two, a double cover from a squarefree quintic has a smooth proper geometrically integral genus-two completion with the stated two-chart gluing.

[F8] [[def-good-reduction-of-smooth-proper-curve-at-a-finite-place]]: good reduction at a finite prime means existence of a proper smooth model with geometrically connected curve fibres and the stated generic fibre.

[F9] [[thm-shafarevich-finiteness-for-curves-of-fixed-genus]]: for fixed number field, genus at least two, and finite bad-reduction set, the target family of curve isomorphism classes is finite.

[L1] [[thm-shafarevich-finiteness-for-curves-of-fixed-genus]]: its finite-family conclusion remains an unproved supplier in this run; the calculation below verifies the example's hypotheses only.

## Proof

**Given:** The data stated in the Example.

1.1 The transition is compatible with the equations because $u^6 f(u^{-1})=u h(u)$. On each standard chart of $\mathbb P^1_R$, the coordinate algebra is free of rank two over the chart ring, with basis $1,y$ or $1,w$; the displayed transition identifies these algebras on the overlap. Thus the glued morphism $\mathcal C\to\mathbb P^1_R$ is finite. By [F3] the base $\mathbb P^1_R$ is proper over $R$; [F4] also makes the finite cover proper. The composite lemma [F5] then makes $\mathcal C\to\operatorname{Spec}R$ proper. [A1, F1, F2, F3, F4, F5, given, construct, algebra]

2.1 In every geometric fibre of $\operatorname{Spec}R$, the characteristic is zero or greater than $3$, so $2$ is nonzero. On the first chart, at a point with $y\ne0$ the derivative $2y$ is nonzero. At a point with $y=0$, one has $x\in\{0,1,2,3,4\}$ and $f'(x)=\prod_{j\ne x}(x-j)$ is nonzero because each difference is a unit in $R$. On the second chart the only point with $u=0$ is $(u,w)=(0,0)$, where the derivative in $u$ of $w^2-u h(u)$ is $-h(0)=-1$; all other points lie in the first chart. Hence every point has an invertible Jacobian minor, and [F6] gives smoothness of $\mathcal C/R$. [A1, F6, given, step 1.1, algebra]

3.1 For each rational prime $p\ge5$, the same displayed chart gluing over $\mathbb Z_{(p)}$ is defined because $2$ and $3$ are units there. The finite map to $\mathbb P^1_{\mathbb Z_{(p)}}$ and the properness check already given apply unchanged, and the smoothness calculation above applies because the root differences remain units. Every geometric fibre is a squarefree quintic double cover in characteristic different from two; applying [F7] shows it is geometrically integral of genus two. Thus this is a smooth proper model with geometrically connected curve fibres, so [F8] gives good reduction at $p$. [A1, F1, F2, F3, F4, F5, F6, F7, F8, given, step 1.1, step 2.1, algebra]

4.1 For $K=\mathbb Q$, $g=2$, and $S=\{(2),(3)\}$, step 3.1 verifies all hypotheses of [F9]. Conditional on the conclusion of [F9], the class of $C$ is one member of its finite family. Since [L1] records that [F9] is not proof-closed in this run, this application is escalated and is not an independent proof of the finiteness conclusion. [A1, A2, A3, F9, L1, step 3.1] ∎
## Axiom use

AC is used through [F3]–[F7]. The last step is conditional on the current
Shafarevich supplier, whose statement assumes AC, DC, and Countable Choice;
no claim that these axioms are necessary for the curve theorem is made.

## Proof status

The model, genus, smoothness, and good-reduction verification are supplied
locally. The finite-family application is conditional on the unclosed theorem
supplier and remains escalated.
