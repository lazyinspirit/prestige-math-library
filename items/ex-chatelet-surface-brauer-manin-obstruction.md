---
id: ex-chatelet-surface-brauer-manin-obstruction
kind: example
title: "A Châtelet surface with a Brauer–Manin obstruction"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 12
deps:
  - def-iskovskikh-chatelet-surface
  - thm-iskovskikh-chatelet-class-extends-to-brauer-group
  - thm-azumaya-unramified-residue-purity-for-regular-schemes
  - def-brauer-manin-set
  - thm-global-brauer-hasse-noether-exact-sequence-number-field
  - thm-odd-p-hilbert-symbol-formula
  - thm-two-adic-hilbert-symbol-formula
  - thm-real-hilbert-symbol-formula
  - lem-equivalent-definitions-of-the-hilbert-symbol
  - def-quaternion-symbol-over-a-field
  - lem-quaternion-algebra-splits-iff-quadratic-norm
  - thm-local-brauer-invariant-for-finite-residue-local-field
  - thm-archimedean-brauer-groups-and-invariant-maps
  - def-local-invariant-map-of-the-brauer-group
  - def-cohomological-brauer-group-of-a-variety
  - cor-henselian-local-simple-root-criterion
  - cor-complete-local-rings-are-henselian
  - thm-multiplicative-group-of-a-finite-field-is-cyclic
  - def-axiom-of-choice
  - def-dependent-choice
  - def-countable-choice
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, §8.2.5.3, Propositions 8.2.14–8.2.15"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "The Iskovskikh surface, the extending quaternion class, the complete place-by-place invariant computation, and local solubility."
    - title: "Alexei Skorobogatov, Arithmetic Geometry: Rational Points, §3.2"
      url: "https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf"
      locator: "Châtelet surface example and local norm computations."
verification: {}
---

## Example

Assume the Axiom of Choice (AC), Dependent Choice (DC), and Countable Choice (AC$_\omega$). Let $X/\mathbb Q$ be the smooth projective Châtelet surface whose affine open
is
$$y^2+z^2=(3-x^2)(x^2-2).$$
The adelic set $X(\mathbb A_{\mathbb Q})$ is nonempty, but the class
$$\alpha=(3-x^2,-1)\in\operatorname{Br}(X)$$
satisfies
$$\sum_v\operatorname{inv}_v(\alpha(P_v))=\frac12\in\mathbb Q/\mathbb Z$$
for every adelic point $(P_v)_v$. Therefore
$X(\mathbb A_{\mathbb Q})^{\operatorname{Br}}=\varnothing$, so the
Brauer–Manin obstruction excludes rational points on $X$.

## Example references

[[def-iskovskikh-chatelet-surface|Compactification and equation]]

[[thm-iskovskikh-chatelet-class-extends-to-brauer-group|Quaternion-class extension claim; purity proof remains escalated]]

[[def-brauer-manin-set|Brauer–Manin set]]

[[thm-odd-p-hilbert-symbol-formula|Odd-prime Hilbert symbols]]

[[thm-two-adic-hilbert-symbol-formula|Two-adic Hilbert symbols]]

[[thm-real-hilbert-symbol-formula|Real Hilbert symbols]]

[[lem-equivalent-definitions-of-the-hilbert-symbol|Hilbert symbol and quadratic norms]]

[[def-quaternion-symbol-over-a-field|Quaternion algebras and Brauer classes]]

[[lem-quaternion-algebra-splits-iff-quadratic-norm|Quaternion splitting and quadratic norms]]

[[def-axiom-of-choice|Axiom of Choice]]

[[def-dependent-choice|Dependent Choice]]

[[def-countable-choice|Countable Choice]]

[[cor-henselian-local-simple-root-criterion|Simple-root lifting over Henselian rings]]

[[cor-complete-local-rings-are-henselian|Completeness of the local integers implies Henselianity]]

[Poonen, §8.2.5.3](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[Skorobogatov, §3.2](https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf)

## Facts & Assumptions

**Given:** The surface $X$, the quaternion class $\alpha$, and its local
points over $\mathbb Q_v$.

[F1] The function-field equation on the affine chart is
$y^2+z^2=(3-x^2)(x^2-2)$. [[def-iskovskikh-chatelet-surface]]

[F2] In the generic Brauer group,
$(3-x^2,-1)=(x^2-2,-1)=(3/x^2-1,-1)$; the class extends to $\operatorname{Br}(X)$
by the Châtelet-class theorem. Its current proof remains open at residue
purity; its natural Azumaya-to-cohomological class map is supplied locally.
[[thm-iskovskikh-chatelet-class-extends-to-brauer-group]]

[F3] For $F=\mathbb Q_v$, the quaternion algebra $Q_F(a,-1)$ is split
exactly when $a$ is a norm from $F(i):$ the algebraic splitting criterion
and the equivalent Hilbert-symbol definition identify the same norm group.
Also, $(a,b)_v=1$ exactly when $b$ is a norm from $F(\sqrt a)$.
[[def-quaternion-symbol-over-a-field]]
[[lem-quaternion-algebra-splits-iff-quadratic-norm]]
[[lem-equivalent-definitions-of-the-hilbert-symbol]]

[F4] At odd primes, two units have Hilbert symbol $+1$; at $2$, the formula
gives $(-1,-6)_2=+1$ and gives $(u,-1)_2=-1$ for every $u\equiv-1\pmod4$;
over $\mathbb R$, a positive first parameter with second parameter $-1$ has
symbol $+1$. [[thm-odd-p-hilbert-symbol-formula]]
[[thm-two-adic-hilbert-symbol-formula]]
[[thm-real-hilbert-symbol-formula]]

[A1] AC and DC are inherited from the place, completion, and invariant-map
conventions; AC$_\omega$ is needed for the adelic restricted product.
[[def-axiom-of-choice]] [[def-dependent-choice]] [[def-countable-choice]]

[F5] For each odd prime $p$, the nonzero value $-2\in\mathbb F_p$ is
represented by $a^2+b^2$. If $-1$ is a square, write
$a^2+b^2=(a+ib)(a-ib)$ and choose factors $(-2,1)$. If $-1$ is not a
square, identify $\mathbb F_p(i)$ with $\mathbb F_{p^2}$; its norm is
$z\mapsto z^{p+1}$ on the cyclic group of order $p^2-1$, so its image has
order $p-1$ and equals $\mathbb F_p^\times$. The resulting pair is nonzero,
so one partial derivative of $y^2+z^2+2$ is nonzero modulo $p$ and the
simple-root Hensel criterion lifts it to $\mathbb Z_p$.
[[thm-multiplicative-group-of-a-finite-field-is-cyclic]]
[[cor-henselian-local-simple-root-criterion]]
[[cor-complete-local-rings-are-henselian]]

[F6] For a number field, a class pulled back to $\operatorname{Br}(\mathbb Q)$
has finite local support and its local invariants sum to zero by the
Brauer–Hasse–Noether sequence under the assumed AC hypothesis. [[thm-global-brauer-hasse-noether-exact-sequence-number-field]]

[F7] Pullback of a cohomological Brauer class is functorial in the point
morphism and in the field extension. [[def-cohomological-brauer-group-of-a-variety]]

[F8] For finite places, the local invariant is an isomorphism under the
AC/DC branch used here; at the real place the archimedean invariant sends the
unique nonzero class to $1/2$. [[thm-local-brauer-invariant-for-finite-residue-local-field]]
[[thm-archimedean-brauer-groups-and-invariant-maps]]

[L1] The class $\alpha$ is usable as an element of $\operatorname{Br}(X)$
only after the unramified residue-purity input in [F2] is supplied.
The natural Azumaya-to-cohomological class map is supplied in [F2].
The field-cohomology comparison is available in
its AC/DC branch by the theorem referenced in [F2].
[[thm-azumaya-unramified-residue-purity-for-regular-schemes]]

## Proof

**Proof technique:** construct local points, compute the invariant at every
place, and use the global invariant sequence for the rational-point
conclusion.

**Given:** The data above.

1.1 For every odd prime $p$, the finite-field norm argument [F5] represents $-2$ as $\bar y^2+\bar z^2$ with a nonsingular pair. Hensel lifting gives $y,z\in\mathbb Z_p$ with $y^2+z^2=-2$, so $(x,y,z)=(1,y,z)\in U(\mathbb Q_p)$. At $p=2$, [F4] and [F3] show that $-6$ is a norm from $\mathbb Q_2(i)$, so $x=0$ gives a point. At the real place, take $x=\sqrt{5/2}$, $y=1/2$, $z=0$; then the right side is $1/4$. The odd-prime points have integral coordinates, so together with the finitely many exceptional coordinates these define an adelic point. [A1, F1, F3, F4, F5, given]

1.2 At the real place, the fiber over $x=\infty$ has equation $u^2+v^2+w^2=0$ and has no real projective point. For every real finite $x$, either $x^2<3$ or $x^2>2$, so at least one of $3-x^2$ and $x^2-2$ is strictly positive. This is a norm from $\mathbb C/\mathbb R$; [F2], [F3], and [F8] give $\operatorname{inv}_\infty(\alpha(P))=0$. [A1, F1, F2, F3, F4, F8]

2.1 Let $P\in X(\mathbb Q_p)$ with odd $p$, and use an affine coordinate $x=x(P)$ when finite. If $v_p(x)<0$ or $x=\infty$, then $3/x^2-1\in\mathbb Z_p^\times$. If $v_p(x)\ge0$, the two elements $3-x^2$ and $x^2-2$ sum to $1$, so at least one is a unit. By [F2], use the corresponding representative of $\alpha$; its two entries are units, so its Hilbert symbol is $+1$ by [F4]. By [F3] the corresponding quaternion class splits, and [F8] gives $\operatorname{inv}_p(\alpha(P))=0$. [A1, F2, F3, F4, F8, step 1.1]

3.1 At $p=2$, if $v_2(x)>0$ then $3-x^2\equiv-1\pmod4$; if $v_2(x)=0$ then $x^2-2\equiv-1\pmod4$; if $v_2(x)<0$ or $x=\infty$ then $3/x^2-1\equiv-1\pmod4$. A 2-adic norm $a^2+b^2$ that is integral must have $a,b\in\mathbb Z_2$: if their minimum valuation were $m<0$, then after scaling the sum of two integral squares with at least one odd would have valuation at most $1$, making the original valuation $2m$ or $2m+1<0$. For integral $a,b$, the squares modulo $4$ are $0$ or $1$, so their sum cannot be $3$. By [F3], the chosen parameter gives Hilbert symbol $-1$, so the quaternion class is nonsplit; [F8] gives invariant $1/2$. [A1, F2, F3, F4, F8, step 2.1]

4.1 Steps 2.1, 1.2, and 3.1 show that every adelic point has zero local invariant away from $2$, invariant zero at $\infty$, and invariant $1/2$ at $2$. The sum is therefore $1/2$, and no adelic point lies in the Brauer–Manin set. This calculation is conditional on [L1], because without the missing purity input the class has not been established as an element of $\operatorname{Br}(X)$. [F2, F3, F4, L1, step 2.1, step 1.2, step 3.1]

5.1 If $P\in X(\mathbb Q)$, then $\beta=P^*\alpha\in\operatorname{Br}(\mathbb Q)$ has localizations $\alpha(P_v)$ by [F7]. [F6] says their invariant sum is zero, contradicting step 4.1, where the sum is $1/2$. The number-field exact-sequence proof is supplied by [F6] under AC. The surface class extension in [L1] remains open, so the example remains escalated. [F1, F6, F7, L1, step 4.1] ∎
