---
id: ex-isotrivial-but-nonconstant-curve-with-infinite-points
kind: example
title: Isotrivial nonconstant genus-two curve with infinitely many points
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 2
deps:
  - def-axiom-of-choice
  - def-algebraic-curve-over-field
  - def-base-change-morphism-schemes
  - def-constant-and-isotrivial-variety-over-function-field
  - def-extension-degree-and-finite-extension
  - def-function-field-with-exact-constant-field
  - def-perfect-field
  - def-projective-line-two-affine-cover-and-twisting-sheaf
  - def-proper-morphism
  - def-locally-finite-type-and-finite-type-morphism
  - lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite
  - lem-no-nonconstant-morphism-from-projective-line-to-positive-genus-curve
  - lem-projective-line-curve-and-divisor-basics
  - lem-proper-cohomology-field-extension
  - lem-squarefree-quintic-double-cover-is-genus-two
  - thm-curves-function-fields-equivalence
  - thm-conjugates-over-a-finite-field-are-the-frobenius-powers
  - prop-finite-fields-are-splitting-fields-of-x-q-minus-x
  - thm-perfect-field-characterizations
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Bjorn Poonen, Rational Points on Varieties, Examples 9.5.3–9.5.5, printed p. 287"
      url: https://math.mit.edu/~poonen/papers/Qpoints.pdf
    - title: "The Stacks Project, Algebraic Curves, Lemma 53.12.2 (tag 0C1D)"
      url: https://stacks.math.columbia.edu/tag/0C1D
verification:
  precheck: pass
---

## Example

Let $k=\mathbb F_{17}$, $a_i=i-1$ for $1\le i\le5$,
$f(z)=\prod_{i=1}^5(z-a_i)$, and $g(u)=\prod_{i=1}^5(1-a_i u)$. Let $C_0/k$
be the curve obtained by gluing
$$\operatorname{Spec}k[x,y']/({y'}^2-f(x))$$
to
$$\operatorname{Spec}k[u,w]/(w^2-u g(u))$$
by $u=x^{-1}$ and $w=u^3y'$ on $x,u\ne0$. Put $K=k(t)$ and let $X/K$ be
obtained by gluing
$$\operatorname{Spec}K[x,y]/(f(t)y^2-f(x))$$
to
$$\operatorname{Spec}K[u,w]/(f(t)w^2-u g(u))$$
by $u=x^{-1}$ and $w=u^3y$. Then $X$ is a smooth proper geometrically
integral curve of genus two, is isotrivial but not constant over $k$, and
$X(K)$ is infinite, where for every $K$-scheme $Z$ we write
$Z(K)=\operatorname{Hom}_K(\operatorname{Spec}K,Z)$.
Its distinct $K$-points include
$$P_n=\left(t^{17^n},\ f(t)^{(17^n-1)/2}\right)\qquad(n\ge0).$$
Indeed, after the finite extension $L=K(s)$ with $s^2=f(t)$, the map
$(x,y)\mapsto(x,sy)$ identifies $X_L$ with $(C_0)_{k_L}\times_{k_L}L$,
where $k_L$ is the subfield of $L$ algebraic over $k$.

## Example references

[[def-constant-and-isotrivial-variety-over-function-field]]

[[def-extension-degree-and-finite-extension]]

[[lem-squarefree-quintic-double-cover-is-genus-two]]

[[lem-no-nonconstant-morphism-from-projective-line-to-positive-genus-curve]]

[Poonen, Examples 9.5.3–9.5.5, printed p. 287](https://math.mit.edu/~poonen/papers/Qpoints.pdf)

## Facts & Assumptions

**Given:** AC, $k=\mathbb F_{17}$, $K=k(t)$, the two curves $C_0$ and $X$
specified in the Example, and $L=K(s)$ with $s^2=f(t)$.

[A1] AC: every family of nonempty sets has a choice function.
[[def-axiom-of-choice]]

[F1] The two-chart construction with a nonzero scalar and five distinct roots
in characteristic different from two gives a smooth, proper, geometrically
integral curve of genus two and a finite degree-two map to the projective
line. [[lem-squarefree-quintic-double-cover-is-genus-two]]

[F2] An element algebraic over a finite field generates a finite field of
some order $q$, and every element of a field of order $q$ satisfies
$r^q=r$. Thus an element of $\mathbb F_{17}(t)$ algebraic over
$\mathbb F_{17}$ satisfies $r^{17^m}=r$ for some $m$.
[[thm-conjugates-over-a-finite-field-are-the-frobenius-powers]]
[[prop-finite-fields-are-splitting-fields-of-x-q-minus-x]]

[F3] Exact constant field $k$ means that every element of $K$ algebraic over
$k$ already belongs to $k$. [[def-function-field-with-exact-constant-field]]

[F4] A smooth proper geometrically integral curve over a field has its
function field as the stalk at its generic point; an injective function-field
map in the reverse direction is induced by a unique dominant morphism.
[[thm-curves-function-fields-equivalence]]

[F5] A finite-type affine algebra over a field has finite residue field
extension at each maximal ideal. [[lem-maximal-ideal-residue-field-of-an-affine-algebra-is-finite]]

[F6] On smooth proper curves, coherent cohomology commutes with field
extension; in particular the genus is unchanged by field extension.
[[lem-proper-cohomology-field-extension]]

[F7] A projective line has function field $k(t)$ and is smooth, proper and
geometrically integral. [[def-projective-line-two-affine-cover-and-twisting-sheaf]]
[[lem-projective-line-curve-and-divisor-basics]]

[F8] No nonconstant morphism exists from a projective line over a perfect
field to a smooth proper geometrically integral curve of genus at least one.
[[lem-no-nonconstant-morphism-from-projective-line-to-positive-genus-curve]]

[F9] A K-point of $D_K=D\times_kK$ is equivalent to a $k$-morphism
$\operatorname{Spec}K\to D$, paired with the identity on $\operatorname{Spec}K$.
[[def-base-change-morphism-schemes]]

[F10] The field $\mathbb F_{17}$ is perfect.
[[def-perfect-field]] [[thm-perfect-field-characterizations]]

[F11] A proper curve is quasi-compact and admits a finite affine open cover.
[[def-proper-morphism]] [[def-algebraic-curve-over-field]]
[[def-locally-finite-type-and-finite-type-morphism]]

[F12] A finite field extension is a field extension of finite degree.
[[def-extension-degree-and-finite-extension]]

## Axiom use

AC is assumed through the double-cover, function-field/morphism,
finite-residue-field and cohomology suppliers [F1], [F4], [F5] and [F6].
The point count over $k$ itself uses only finite generation and finiteness of
$k$, and no choice function.

## Proof

**Proof technique:** direct; verify the twisted curve and its points, then
exclude every possible constant model by separating closed and generic images
of rational points.

1.1 The roots $a_i$ are distinct and $f(t)\ne0$. Applying [F1] with scalar $1$ gives that $C_0$ is smooth, proper and geometrically integral of genus two; applying it with scalar $f(t)$ gives the same properties and genus for $X$. The field $K=k(t)$ is generated by the transcendental element $t$, so it is finitely generated of transcendence degree one. [A1, F1, given, algebra]

2.1 Let $r=A(t)/B(t)\in K$ be algebraic over $k$, with coprime $A,B\in k[T]$. By [F2] it satisfies $r^q=r$ for some $q=17^m>1$. If $r$ were nonconstant and $B$ nonconstant, a root $\alpha\in\bar k$ of $B$ satisfies $A(\alpha)\ne0$, so $r$ has a pole there; if $B$ is constant, a nonconstant $A$ gives a pole at infinity. If its pole order is $N>0$, then $r^q$ has pole order $qN$, contradicting $r^q=r$. Thus $r$ is constant; if $r=A/B=c$ with $B\ne0$, any nonzero coefficient of $B$ gives $c$ as a ratio of coefficients in $k$, hence $c\in k$. By [F3], $k$ is the exact constant field of $K$. [F2, F3, given, algebra, step 1.1]

2.2 For $q=17^n$, the polynomial coefficients lie in $\mathbb F_{17}$, so $f(t^q)=f(t)^q$. The exponent $(q-1)/2$ is an integer and hence $$f(t)\left(f(t)^{(q-1)/2}\right)^2=f(t)^q=f(t^q).$$ Thus each displayed $P_n$ lies on the affine chart of $X$. Their first coordinates $t^{17^n}$ are pairwise distinct rational functions, so $X(K)$ is infinite. [F1, given, algebra, step 1.1]

3.1 If $L=K(s)$ with $s^2=f(t)$, the valuation of $f(t)$ at each $t=a_i$ is one, so $f(t)$ is not a square in $K$; the polynomial $T^2-f(t)$ is irreducible, hence [F12] gives $[L:K]=2$. Over $L$, $y'=sy$ satisfies ${y'}^2=f(x)$, and the inverse substitution is $y=y'/s$. This identifies $X_L$ with $(C_0)_L$, hence with the base change of the $k_L$-curve $(C_0)_{k_L}$; therefore $X$ is isotrivial. [A1, F1, F12, given, construct, algebra, step 1.1, step 2.1]

3.2 Suppose, for contradiction, that $X$ is constant over $k$. By the definition of constant in this setting, there is a smooth proper geometrically integral curve $D/k$ with $X\cong D_K$. This isomorphism identifies $D(K)$ with $X(K)$ by [F9], so $D(K)$ is infinite. By [F6], $g(D)=g(D_K)=g(X)=2$. [F6, F9, given, step 2.2]

4.1 By [F10] the field $k=\mathbb F_{17}$ is perfect, so [F8] applies to $D$. Let $P\in D(K)$. If its image in $D$ is a closed point $z$, then $\kappa(z)$ is finite over $k$ by [F5] and embeds into $K$ through [F9]. Every element of this residue field is algebraic over $k$, so [F3] forces $\kappa(z)=k$ and $P$ is a $k$-point. If instead the image is the generic point, the induced map $k(D)\hookrightarrow K=k(t)$ is an injective $k$-homomorphism by [F9]. By [F4] it gives a dominant nonconstant morphism $\mathbb P^1_k\to D$, contradicting [F8] because $g(D)=2$. Therefore $D(K)=D(k)$. [F3, F4, F5, F6, F7, F8, F9, F10, given, step 3.2]

5.1 The set $D(k)$ is finite: [F11] gives a finite affine open cover of the proper curve $D$; each chart has a finitely generated $k$-algebra, and a $k$-point is determined by the images of finitely many generators in the finite field $k$. The finite union of these point sets is finite. This contradicts the infinitude of $D(K)$ from step 3.2. Hence $X$ is not constant. [F11, step 3.2, step 4.1, construct, algebra] ∎


