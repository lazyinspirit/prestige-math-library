---
id: thm-infinite-points-force-isotriviality-for-function-field-curves
kind: theorem
title: Infinite rational points force isotriviality for a genus-greater-than-one curve over a function field
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps:
  - def-algebraic-curve-over-field
  - def-constant-and-isotrivial-variety-over-function-field
  - def-function-field-with-exact-constant-field
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-perfect-field
  - lem-characteristic-zero-function-field-mordell-descends-to-exact-constants
  - lem-perfect-constant-regular-function-field-mordell-isotriviality
  - lem-smooth-function-field-curves-descend-after-finite-constant-extension
  - lem-proper-cohomology-field-extension
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: not-supplied
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, Theorem 9.5.10, printed pp. 287–288; necessary perfect-constant-or-smooth hypothesis corrected locally"
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
    - title: "Hans Grauert, Mordells Vermutung über rationale Punkte auf algebraischen Kurven und Funktionenkörper, Satz and §§1–4, printed pp. 132–149"
      url: https://numdam.org/item/PMIHES_1965__25__131_0.pdf
    - title: "Pierre Samuel, Compléments à un article de Hans Grauert sur la conjecture de Mordell, Theorems 4–6, printed pp. 58–62"
      url: https://www.numdam.org/item/PMIHES_1966__29__55_0.pdf
    - title: "J. F. Voloch, A Diophantine problem on algebraic curves over function fields of positive characteristic, Theorem 3, printed pp. 125–126"
      url: https://www.numdam.org/item/10.24033/bsmf.2160.pdf
    - title: "P. Samuel, Lectures On Old And New Results On Algebraic Curves, TIFR lecture notes (1966), Chapter III, §§C–E, printed pp. 66–81"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr36.pdf
verification: {}
---

## Statement

Let $k\subseteq K$ be fields such that $K=k(a_1,\ldots,a_n)$ for a finite
tuple $a_i\in K$, $\operatorname{trdeg}_k K>0$, and every element of $K$
algebraic over $k$ already lies in $k$. Let $X$ be a one-dimensional regular,
projective, geometrically integral $K$-scheme, where regular means that every
local ring of $X$ is a regular local ring and geometrically integral means
that $X_{\bar K}$ is integral for an algebraic closure $\bar K$ of $K$. Write
$g(X)=\dim_K H^1(X,\mathcal O_X)$ and suppose $g(X)>1$. In positive
characteristic assume additionally that either $k$ is perfect or $X$ is
smooth over $K$. If
$X(K):=\operatorname{Hom}_K(\operatorname{Spec}K,X)$ is infinite, then the
following hold. If $\operatorname{char}k=0$, there is a smooth proper
geometrically integral curve $X_0/k$ such that
$X\cong X_0\times_{\operatorname{Spec}k}\operatorname{Spec}K$. If
$\operatorname{char}k=p>0$, there is a finite extension $L/K$, its exact
constant field $k_L=\{a\in L:a\text{ is algebraic over }k\}$, and a smooth
proper geometrically integral curve $X_0/k_L$ such that
$X\times_{\operatorname{Spec}K}\operatorname{Spec}L\cong
X_0\times_{\operatorname{Spec}k_L}\operatorname{Spec}L$. In either case
$X$ is smooth over $K$, so $g(X)=g(X_{\bar K})$.

## Statement references

[[def-function-field-with-exact-constant-field]]

[[def-constant-and-isotrivial-variety-over-function-field]]

[[def-algebraic-curve-over-field]]

[Poonen, Theorem 9.5.10, printed pp. 287–288](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

[Grauert, Satz, printed p. 132](https://numdam.org/item/PMIHES_1965__25__131_0.pdf)

[Samuel, Theorems 4–6, printed pp. 58–62](https://www.numdam.org/item/PMIHES_1966__29__55_0.pdf)

[Voloch, Theorem 3, printed pp. 125–126](https://www.numdam.org/item/10.24033/bsmf.2160.pdf)


## Facts & Assumptions

**Given:** For the conditional argument below, AC in addition to the
hypotheses of the Statement.

[A1] AC implies DC and countable choice. These are exactly the choice
principles required by the local reconstruction suppliers below.
[[def-axiom-of-choice]]
[[thm-choice-implies-dependent-implies-countable-choice]]

[F1] Under AC, a regular projective geometrically integral curve of
arithmetic genus greater than one over a finitely generated
positive-transcendence-degree characteristic-zero field with exact
constants $k$, and with infinitely many rational points, is smooth and
actually isomorphic to a smooth projective curve defined over $k$.
[[lem-characteristic-zero-function-field-mordell-descends-to-exact-constants]]

[F2] Under AC, in positive characteristic with perfect exact constants,
the same regular input and infinite point set force smoothness and a
smooth projective constant model after a finite extension, over its exact
constant field. This result includes the full geometric-genus-zero and
geometric-genus-one exclusion; it does not assume the input smooth.
[[lem-perfect-constant-regular-function-field-mordell-isotriviality]]
[[def-perfect-field]]

[F3] Under AC, for arbitrary possibly imperfect exact constants in
positive characteristic, a smooth proper geometrically integral
function-field curve of genus greater than one with infinitely many
rational points has such a smooth projective exact-constant model after
a finite field extension, which is allowed to be inseparable.
[[lem-smooth-function-field-curves-descend-after-finite-constant-extension]]

[F4] Proper coherent cohomology commutes with field extension. In
particular the cohomological arithmetic genus used in the Statement is
preserved after scalar extension.
[[lem-proper-cohomology-field-extension]]

## Proof

**Proof technique:** direct, conditional on AC; apply the complete local
branch proofs with their exact geometric hypotheses. This is not asserted
to prove the unqualified choice scope of the Statement.

1.1 If $\operatorname{char}k=0$, the exact-constant and finite-generation hypotheses are precisely those of [F1]. Apply it to $X$. It proves that $X$ is smooth and gives a smooth projective geometrically integral $X_0/k$ with $X\cong(X_0)_K$. Projective curves are proper, so this supplies the characteristic-zero conclusion as stated. [A1, F1, given]

1.2 If $\operatorname{char}k=p>0$ and $k$ is perfect, apply [F2] to the original regular projective curve $X$. Its arithmetic genus is greater than one and its point set is infinite, as required. The supplier proves smoothness, excludes nonsmooth low geometric genera by its actual local Frobenius and jet-group arguments, and provides a finite $L/K$ and a smooth projective geometrically integral exact-constant model $X_0/k_L$ with $X_L\cong(X_0)_L$. [A1, F2, given]

1.3 In the remaining case $\operatorname{char}k=p>0$ and $k$ is imperfect, the additional geometric hypothesis says that $X$ is already smooth over $K$. Thus [F3] applies over the arbitrary exact constants $k$. It gives a finite possibly inseparable extension $L/K$, its exact constant field $k_L$, and a smooth projective geometrically integral $X_0/k_L$ with $X_L\cong(X_0)_L$. Smoothness at this branch is an explicit geometric input, not an assertion derived from regularity over imperfect constants. [A1, F3, given]

2.1 These cases exhaust the allowed characteristics and geometric hypotheses. In every case $X$ is smooth and the required constant or finite-extension constant model has been constructed. The final equality of cohomological genera follows from [F4]. Consequently every conclusion of the repaired geometric Statement holds under AC (and its DC consequence [A1]). The separate unqualified no-AC obligation is not discharged by this conditional proof. [A1, F4, step 1.1, step 1.2, step 1.3] ∎

## Remaining proof obligation

The proof above assumes AC through its branch suppliers. A proof in the
unqualified choice scope of the Statement remains to be supplied. No
choice-free proof is claimed here.

## Remarks

The extra positive-characteristic geometric hypothesis corrects a false
regular-to-smooth implication in the original formulation, including the
unqualified imperfect-constant formulation printed in Poonen's Theorem
9.5.10. It retains the full regular-input perfect-constant branch and the
smooth-input branch over arbitrary constants.

Here is the omitted-case obstruction explicitly. Let
$k=\mathbb F _5(a)^{\mathrm{sep}}$, with $a$ transcendental, and $K=k(t)$.
Then $a\notin k^5$ or $K^5$, since a fifth root is purely inseparable
whereas the first extension is separable and $k$ is relatively algebraically
closed in $k(t)$. Glue
$y^2=x^5-a$ to $v^2=u-a u^6$ by $u=x^{-1}$, $v=x^{-3}y$.
The resulting $C/K$ is finite locally free of rank two over $\mathbf P^1_K$,
hence proper and projective. It is geometrically integral: over an
algebraic closure $x^5-a=(x-\alpha)^5$ has an odd valuation, so is not a
square in the rational function field. The only affine point with $y=0$
has maximal ideal generated by $y$ and residue field $K[x]/(x^5-a)$, so
its one-dimensional local ring is regular. Elsewhere $2y$ is nonzero,
and at the point at infinity the derivative in $u$ is $-1$, so every
remaining point is smooth. The two affine charts compute $H^1$ as
$K[x,x^{-1}]y/(K[x]y+x^{-3}K[x^{-1}]y)$, with basis
$x^{-1}y,x^{-2}y$; its arithmetic genus is two. For each $b\in k$,
$b^5-a\ne0$ has a square root in separably closed $k$, giving infinitely
many $K$-points. But over an algebraic closure the point $(\alpha,0)$
has equation $y^2=(x-\alpha)^5$ and two-dimensional cotangent space in
a one-dimensional local ring. It is not smooth, and cannot become smooth
after any field extension. Its geometric normalization is rational,
parametrized by $x-\alpha=s^2$, $y=s^5$. Thus smoothness and a smooth
constant model cannot be concluded for an arbitrary imperfect-constant
regular nonsmooth input. This counterexample does not affect either
geometric branch now stated.

With the cohomological definition in this item, arithmetic genus itself
commutes with field extension even for a nonsmooth curve; it must be
distinguished from the genus of its geometric normalization. The
counterexample has the former genus two and the latter genus zero.
