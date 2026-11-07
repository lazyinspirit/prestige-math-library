---
id: ex-descent-versus-brauer-manin-sets
kind: example
title: "Descent and Brauer–Manin sets on a variety"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 14
deps:
  - def-projective-bundle-scheme
  - def-smooth-morphism-schemes
  - def-etale-morphism-schemes
  - def-adelic-points-of-variety-over-global-field
  - thm-local-ring-smooth-curve-dvr
  - thm-valuative-criterion-properness
  - thm-euclidean-inverse-function-theorem
  - lem-q-and-irrationals-dense-r
  - def-descent-set-and-selmer-set
  - def-etale-brauer-set
  - def-brauer-manin-set
  - thm-descent-obstruction-refines-brauer-manin
  - lem-torsor-twist-fiber-identifies-global-class
  - thm-etale-brauer-descent-equality-for-nice-number-field-variety
  - thm-elliptic-curve-y2-x3-minus-3-has-exactly-one-q-point
  - thm-quadratic-form-rank-five-isotropic-over-p-adic-field
  - thm-etale-fundamental-group-invariance-for-the-quadric-bundle
  - thm-brauer-pullback-surjective-for-this-quadric-bundle
  - thm-brauer-evaluation-locally-constant-over-local-fields
  - cor-henselian-local-simple-root-criterion
  - cor-complete-local-rings-are-henselian
  - thm-global-brauer-hasse-noether-exact-sequence-number-field
  - lem-finite-etale-real-curve-cover-lifts-connected-component
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
    - title: "Bjorn Poonen, Rational Points on Varieties, §§8.5.2–8.6.2, Theorem 8.6.5"
      url: "https://math.mit.edu/~poonen/papers/Qpoints.pdf"
      locator: "Quadric-bundle example with no rational point and a nonempty étale–Brauer set; proof of the finite étale and Brauer pullback steps."
    - title: "Alexei Skorobogatov, Arithmetic Geometry: Rational Points, §§2.2–2.3"
      url: "https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf"
      locator: "Descent and Brauer–Manin set conventions."
verification: {}
---

## Example

Assume the Axiom of Choice (AC), Dependent Choice (DC), and Countable Choice (AC$_\omega$).

Let $C/\mathbb Q$ be the smooth projective elliptic curve
$$y^2=x^3-3,$$
with its unique rational point $c$ at infinity. Choose a morphism
$f:C\to\mathbb P^1$ that is étale at $c$, has $f(c)=\infty$, and is étale
over $0$ and $1$. Choose a connected open interval $U\subset C(\mathbb R)$
containing $c$ such that $1\in f(U)$, and choose $c_{\mathbb R}\in U$ with
$f(c_{\mathbb R})=1$.

Construct a projective quadric bundle $Y\to\mathbb P^1$ as the zero locus
of a quadratic section in the projective bundle associated to
$\mathcal E=\mathcal O(1)\oplus\mathcal O^{\oplus4}$. Its two compatible
chart equations are
$$t(t-1)x_0^2+x_1^2+x_2^2+x_3^2+x_4^2=0$$
on the $t$-chart and
$$ (1-T)X_0^2+x_1^2+x_2^2+x_3^2+x_4^2=0$$
on the $T$-chart, glued by $t=1/T$, $x_0=T X_0$, and $x_i=x_i$ for
$1\le i\le4$. Let $X=Y\times_{\mathbb P^1}C$. Then $X$ is a smooth
projective geometrically integral variety over $\mathbb Q$ and
$$X(\mathbb Q)=\varnothing, \qquad X(\mathbb A_{\mathbb Q})^{\mathrm{et},\mathrm{Br}}\ne\varnothing, \qquad X(\mathbb A_{\mathbb Q})^{\mathrm{desc}} =X(\mathbb A_{\mathbb Q})^{\mathrm{et},\mathrm{Br}}.$$
In particular, $X(\mathbb A_{\mathbb Q})^{\operatorname{Br}}\ne\varnothing$:
neither the Brauer–Manin obstruction nor the descent obstruction explains
the failure of the local-global principle for this variety.

## Example references

[[def-projective-bundle-scheme|Projective bundle convention]]

[[def-smooth-morphism-schemes|Smooth morphisms]]

[[def-etale-morphism-schemes|Étale morphisms]]

[[def-adelic-points-of-variety-over-global-field|Adelic points]]

[[thm-local-ring-smooth-curve-dvr|Local rings at smooth curve points]]

[[thm-valuative-criterion-properness|Extension of rational maps to the proper projective line]]

[[thm-euclidean-inverse-function-theorem|Real inverse function theorem]]

[[lem-q-and-irrationals-dense-r|Density of the rational numbers in the reals]]

[[def-etale-brauer-set|Étale–Brauer set]]

[[def-descent-set-and-selmer-set|Descent set]]

[[def-brauer-manin-set|Brauer–Manin set]]

[[thm-descent-obstruction-refines-brauer-manin|Descent containment theorem; current proof gates remain open]]

[[lem-torsor-twist-fiber-identifies-global-class|Twisted-fiber evaluation criterion]]

[[thm-etale-brauer-descent-equality-for-nice-number-field-variety|Required equality theorem; not currently authored]]

[[ex-selmer-cubic-nontrivial-sha|Selmer cubic with nontrivial Tate–Shafarevich class; current carrier is draft on the Selmer examples page]]

[[def-axiom-of-choice|Axiom of Choice]]

[[def-dependent-choice|Dependent Choice]]

[[def-countable-choice|Countable Choice]]

[[cor-henselian-local-simple-root-criterion|Simple-root lifting over Henselian rings]]

[[cor-complete-local-rings-are-henselian|Completeness of the local integers implies Henselianity]]

[Poonen, §§8.5.2–8.6.2](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[Skorobogatov, §§2.2–2.3](https://www.ma.imperial.ac.uk/~anskor/arith_geom_files/TCCnotes.pdf)

## Facts & Assumptions

**Given:** AC, DC, and AC$_\omega$, the curve $C$, its point $c$, the
morphism $f$, the quadric bundle $Y$, and the base-changed variety $X$.

[A1] These axioms are inherited from the place, completion, torsor, and
adelic conventions used in the construction.
[[def-axiom-of-choice]] [[def-dependent-choice]] [[def-countable-choice]]

[F1] The displayed curve has $C(\mathbb Q)=\{c\}$.
[[thm-elliptic-curve-y2-x3-minus-3-has-exactly-one-q-point]]

[F2] The fiber $Y_\infty$ is the projective quadric
$X_0^2+x_1^2+x_2^2+x_3^2+x_4^2=0$, which has no rational point because a sum
of rational squares is zero only when every coordinate is zero.

[F3] Every quadratic form of rank five over $\mathbb Q_p$ has a nonzero
zero, so $Y_\infty(\mathbb Q_p)\ne\varnothing$ at every finite prime.
[[thm-quadratic-form-rank-five-isotropic-over-p-adic-field]]

[F4] The morphism $X\to C$ induces an equivalence on finite étale covers
because every geometric fiber, a smooth quadric or a cone over a smooth
quadric, has no nontrivial connected finite étale cover. The quadric-bundle
invariance theorem proving this implication is not currently authored.
[[thm-etale-fundamental-group-invariance-for-the-quadric-bundle]]

[F5] The Brauer pullback $\operatorname{Br}(C')\to\operatorname{Br}(X')$
is surjective for this quadric bundle after every finite étale base change
$C'\to C$. The source invokes a separate smooth-quadric and purity argument;
no current supplier proves it. [[thm-brauer-pullback-surjective-for-this-quadric-bundle]]

[F6] For every smooth projective geometrically integral variety over a number field,
$X(\mathbb A)^{\mathrm{et},\mathrm{Br}}=X(\mathbb A)^{\mathrm{desc}}$.
The equality is a cited global theorem, not a consequence of definitions;
its required current supplier is absent.
[[thm-etale-brauer-descent-equality-for-nice-number-field-variety]]

[F7] Membership in the Brauer–Manin set means finite-support local invariant
values whose sum is zero for every cohomological Brauer class.
[[def-brauer-manin-set]]

[F8] The local integers $\mathbb Z_p$ are complete and separated for their
maximal-ideal topology, hence Henselian; therefore a nonsingular zero of a
one-variable polynomial modulo $p$ lifts to a zero over $\mathbb Z_p$.
[[cor-complete-local-rings-are-henselian]]
[[cor-henselian-local-simple-root-criterion]]

[F9] For a torsor and its twist, a point in the twisted image is equivalent
to the local fiber torsor having the restricted global twisting class.
[[lem-torsor-twist-fiber-identifies-global-class]]

[F10] The relative Proj convention gives the projective bundle, its
tautological coordinates, and the indicated line-bundle transition.
[[def-projective-bundle-scheme]]

[F11] At the smooth point $c$ of the curve, the local ring is a DVR, so a
uniformizer has order one. [[thm-local-ring-smooth-curve-dvr]]

[F12] A rational map from the generic point of a proper curve to the proper
projective line extends over every DVR local ring by the valuative criterion;
the extensions glue by separatedness. [[thm-valuative-criterion-properness]]

[F13] A real analytic map with nonzero derivative at a point maps a
neighborhood of that point onto a neighborhood of its value.
[[thm-euclidean-inverse-function-theorem]]

[F14] Smooth and étale morphisms are preserved by base change, and an étale
morphism to a smooth scheme is smooth. [[def-smooth-morphism-schemes]]
[[def-etale-morphism-schemes]]

[F15] Every nonempty real interval contains rational numbers.
[[lem-q-and-irrationals-dense-r]]

[L3] Under AC, a finite étale cover of a smooth projective real curve
induces a finite covering of its real image. The source component containing
a real point over $c$ maps onto the connected real component containing $c$.
[[lem-finite-etale-real-curve-cover-lifts-connected-component]].

[L4] Step 2.2 needs local constancy of Brauer evaluation on $C(\mathbb R)$
and the zero sum of local invariants for the rational point $c$. The proposed
local-constancy supplier is
[[thm-brauer-evaluation-locally-constant-over-local-fields]], which is not
currently authored. The number-field invariant sequence is
[[thm-global-brauer-hasse-noether-exact-sequence-number-field]], whose
current proof supplies finite support and the zero invariant sum under AC.
The local-constancy supplier remains absent.

## Proof

**Proof technique:** first prove the rational-point and adelic claims, then
lift a single adelic point through every finite étale torsor and check its
Brauer evaluations.

**Given:** The data above.

1.1 The projective elliptic curve $C$ is smooth because the discriminant of $y^2=x^3-3$ is $-3888\ne0$. By [F11], its local ring at $c$ is a DVR; a uniformizer gives a rational function with a simple zero there. By [F12], this rational map extends to a morphism $C\to\mathbb P^1$, and order one at $c$ makes it étale there. A projective linear change sends its value at $c$ to $\infty$. Since the map is nonconstant in characteristic zero, its ramification locus is a proper closed subset of the projective curve and has finite image. By [F13], the real image of a neighborhood of $c$ contains a neighborhood of $\infty$. The translations that put $1$ in that image form a nonempty open subset of $\mathbb R$; by [F15] it contains infinitely many rational translations, so one avoids the finite set that makes $0$ or $1$ a branch value. This constructs $f$ and $U$. The chart equations glue because substituting $T=1/t$ and $x_0=T X_0$ changes $t(t-1)x_0^2$ into $(1-T)X_0^2$. The transition is that of the $\mathcal O(1)$ summand, so the equation defines a closed hypersurface in a projective bundle and $Y$ is projective by [F10]. Each fiber is a nonzero rank-five quadric except at $0$ and $1$, where it is a rank-four quadric cone. Over an algebraic closure, a product of two linear forms has quadratic rank at most two, so each of these rank-four or rank-five quadrics is geometrically integral. The equation is a nonzero Cartier divisor in the five-dimensional projective bundle, so $Y$ is pure of dimension four and no component is vertical over the one-dimensional base. Its geometrically integral generic fiber therefore gives geometric irreducibility, and the smoothness calculation below gives reducedness. In the $t$-chart, a singular point of the total hypersurface would satisfy $x_1=\cdots=x_4=0$, $t(t-1)x_0=0$, and $(2t-1)x_0^2=0$. Projective coordinates force $x_0\ne0$, but $t=0$ or $1$ makes $2t-1\ne0$; hence there is no singular point. In the $T$-chart the equations $x_i=0$ for $i\ge1$, $(1-T)X_0=0$, and $-X_0^2=0$ are incompatible with projective coordinates. Thus $Y$ is smooth and geometrically integral. Away from $0,1$, the base change $X\to C$ is smooth because $Y\to\mathbb P^1$ is smooth there; above $0,1$, the map $f$ is étale, so $X\to Y$ is étale and $Y$ is smooth by [F14]. Hence $X$ is smooth. It is projective as a base change of $Y$. The same nonzero-Cartier-divisor, pure-dimension, and no-vertical-component argument over $C$ shows that its geometrically integral generic fiber yields geometric integrality. [F10, F11, F12, F13, F14, F15, given, algebra]

1.2 At every finite prime choose $y_p\in Y_\infty(\mathbb Q_p)$ using [F3] and set $x_p=(y_p,c)$. At the real place the fiber $Y_1$ has the point $[1:0:0:0:0]$; together with $c_{\mathbb R}$ it gives $x_{\mathbb R}\in X(\mathbb R)$. Scale the homogeneous coordinates of each $y_p$ by the least of their $p$-adic valuations. They then lie in $\mathbb Z_p$ and at least one is a unit, while their homogeneous quadratic equation remains zero. Thus each $y_p$ is integral for the displayed projective model. The curve point $c$ and the construction spread out away from finitely many primes, so this proves the restricted-product condition. [A1, F3, F8, given]

2.1 By [F1], a rational point of $X$ must project to $c$. Its fiber is $Y_\infty$, which has no rational point by [F2]. Thus $X(\mathbb Q)=\varnothing$. [F1, F2, step 1.1]

2.2 Let $\pi:X\to C$ be the projection. The local points $\pi(x_v)$ equal $c$ at every finite place and lie with $c$ in the same connected component at the real place. Conditional on [L4], every class in $\operatorname{Br}(C)$ has the same local evaluations at $\pi(x)$ as at the rational point $c$, and its invariant sum is zero. If [F5] holds, every class on $X$ is pulled back from $C$; functoriality and [F7] then give $x\in X(\mathbb A)^{\operatorname{Br}}$. The missing local-constancy and Brauer-pullback inputs leave this step conditional. [F5, F7, L4, step 1.2]

2.3 Let $G$ be a finite étale group scheme and $Z\to X$ a $G$-torsor. Assuming [F4], it descends from a $G$-torsor $C'\to C$. Twist by the class of its fiber above $c$; [F9] makes that fiber trivial and gives a rational point $c''\in C'(\mathbb Q)$ over $c$. Let $C''$ be the component containing $c''$ and put $X''=X\times_C C''$. For every finite $p$, the point $(x_p,c'')$ lies in $X''(\mathbb Q_p)$. To obtain a real point over $c_{\mathbb R}$ in the connected real component containing $c''$, the real-locus covering result [L3] gives a lift $c''_{\mathbb R}$ of $c_{\mathbb R}$ in that component, and then $(x_{\mathbb R},c''_{\mathbb R})$ lies in $X''(\mathbb R)$. The adelic lifting step remains conditional on [F4]. [F4, F9, L3, step 1.2]

3.1 Conditional on the torsor descent in [F4], apply the argument established in step 2.2 to $X''\to C''$, using [F5] for this base-changed bundle. It gives $x''\in X''(\mathbb A)^{\operatorname{Br}}$. Thus every finite étale torsor has a twist with a Brauer-admissible adelic point, and the definition gives $x\in X(\mathbb A)^{\mathrm{et},\mathrm{Br}}$. By [F6], this set equals the descent set; its trivial torsor term also places $x$ in the Brauer–Manin set. The source proof route is fully identified, but [F4]–[F7] include absent deep suppliers, so the example remains escalated without treating the source citation as an authored proof. [F4, F5, F6, F7, L3, L4, step 2.2, step 2.3] ∎
