---
id: ex-intersection-pairing-on-blowup-of-p2
kind: example
title: "The intersection form of the blown-up projective plane"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - def-axiom-of-choice
  - def-blowup-scheme-along-ideal
  - def-cartier-divisor
  - def-divisor-intersection-number-on-smooth-projective-surface
  - def-effective-cartier-divisor
  - def-exceptional-divisor-blowup
  - def-integral-scheme
  - def-pullback-cartier-divisor
  - def-strict-transform-closed-subscheme
  - def-total-transform-divisor
  - ex-intersection-pairing-on-p2
  - lem-blowup-intersection-matrix-at-smooth-point
  - lem-exceptional-curve-normal-bundle-minus-one
  - lem-pullback-cartier-divisor-line-bundle
  - lem-total-transform-strict-plus-exceptional-multiplicity
  - thm-intersection-with-curve-as-degree-of-restriction
  - thm-surface-intersection-product-bilinear-and-symmetric
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  precheck: pass
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "The Stacks Project, Varieties, Section 33.45 (Numerical intersections)"
      url: "https://stacks.math.columbia.edu/tag/0BEL"
---

## Example

Assume the Axiom of Choice, inherited through the Euler-characteristic and
blowup suppliers ([[def-axiom-of-choice]]). Let $k$ be a field,
$X=\mathbb P^2_k$, let $p\in X(k)$ be a $k$-rational point, let
$\pi:X'=\operatorname{Bl}_pX\to X$ be the blowup
([[def-blowup-scheme-along-ideal]]), let $E=\pi^{-1}(p)$ be the exceptional
curve ([[def-exceptional-divisor-blowup]]) and let
$l:=\pi^*\mathcal O_X(1)$ in $\operatorname{Pic}(X')$ (the pullback of the
hyperplane class; it is also the strict transform of any line not passing
through $p$). Then
$$l\cdot l=1,\qquad l\cdot E=0,\qquad E\cdot E=-1,$$
so the intersection form on the sublattice $\mathbb Zl+\mathbb ZE$ of
$\operatorname{Pic}(X')$ has matrix
$$\begin{pmatrix}1&0\\0&-1\end{pmatrix}.$$
Moreover the strict transform $m:=\pi^*\mathcal O(1)-E$ of a line through $p$
([[def-strict-transform-closed-subscheme]]) satisfies $m=l-E$, $m\cdot E=1$
and $m\cdot m=0$.

## Facts & Assumptions

**Given:** a field $k$, the plane $X=\mathbb P^2_k$, a $k$-rational point $p\in X(k)$, the blowup $\pi:X'=\operatorname{Bl}_pX\to X$ with exceptional curve $E=\pi^{-1}(p)$, the class $l=\pi^*\mathcal O_X(1)$, and the Axiom of Choice ([[def-axiom-of-choice]]).

[F1] The plane $X$ is an integral regular projective surface over $k$; the intersection product $C\cdot D$ of Cartier divisors is defined, symmetric and bilinear, and $\mathcal O(d)\cdot\mathcal O(e)=de$ on $X$, in particular $\mathcal O(1)\cdot\mathcal O(1)=1$ ([[def-divisor-intersection-number-on-smooth-projective-surface]], [[thm-surface-intersection-product-bilinear-and-symmetric]], [[ex-intersection-pairing-on-p2]], [[def-integral-scheme]]).

[F2] Blowup calculus at a $k$-rational point: since $p$ is $k$-rational its residue field is $\kappa(p)=k$ and $r=[\kappa(p):k]=1$; the blowup $X'$ is an integral regular projective surface over $k$, $E$ is an effective Cartier divisor with $E\cong\mathbb P^1_k$ and $\mathcal O_E(E)\cong\mathcal O_{\mathbb P^1_k}(-1)$; for all Cartier divisors $D,D'$ on $X$ one has $E\cdot\pi^*D=0$ and $\pi^*D\cdot\pi^*D'=D\cdot D'$; and for a reduced effective Cartier divisor $C$ through $p$ with multiplicity $m\ge1$ and strict transform $C'$ one has $\pi^*C=C'+mE$, $C'\cdot E=m$ and $C'\cdot C'=C\cdot C-m^2$ ([[lem-blowup-intersection-matrix-at-smooth-point]], $r=1$; [[lem-exceptional-curve-normal-bundle-minus-one]], [[def-pullback-cartier-divisor]]).

[F3] Pullback of divisor classes: for a Cartier divisor $D$ the total transform $\pi^*D$ is the pullback Cartier divisor with $\mathcal O_{X'}(\pi^*D)\cong\pi^*\mathcal O_X(D)$ ([[def-total-transform-divisor]], [[lem-pullback-cartier-divisor-line-bundle]]); hence $l=[\mathcal O_{X'}(\pi^*L)]$ for any line $L$ on $X$, and the total transform of a line $L$ not through $p$ is its strict transform because $\pi$ is an isomorphism away from $p$. For a line $L$ through $p$ the multiplicity of a local equation at $p$ is $1$, so $\pi^*L=m+E$ with $m$ the strict transform ([[lem-total-transform-strict-plus-exceptional-multiplicity]], [[def-effective-cartier-divisor]]).

[F4] The Axiom of Choice enters through the blowup, Euler-characteristic and bilinearity suppliers of [F1]–[F3]; the point, the lines and the blowup are given data and no selection is made below.

## Verification

**Given:** a field $k$, the plane $X=\mathbb P^2_k$, a $k$-rational point $p$, the blowup $\pi:X'=\operatorname{Bl}_pX\to X$, its exceptional curve $E$, the class $l=\pi^*\mathcal O_X(1)$, and a line $L$ through $p$.

1.1 The blowup data. Since $p$ is $k$-rational, $r=1$; the surface $X'$ is integral regular projective and $E$ is an effective Cartier divisor isomorphic to $\mathbb P^1_k$ with $\mathcal O_E(E)\cong\mathcal O(-1)$, so the intersection product is defined on $X'$ and $E^2=-r=-1$; moreover $E\cdot\pi^*D=0$ and $\pi^*D\cdot\pi^*D'=D\cdot D'$ for all Cartier divisors $D,D'$ on $X$. [F2]

1.2 $l\cdot l=1$. Choose a line $L'$ on $X$; its class satisfies $[\mathcal O_X(L')]=[\mathcal O_X(1)]$, so $l\cdot l=\pi^*\mathcal O_X(L')\cdot\pi^*\mathcal O_X(L')=\mathcal O_X(L')\cdot\mathcal O_X(L')=1$ by the pullback identity and the plane computation. [F1, F2, F3]

1.3 $l\cdot E=0$. With $D$ the Cartier divisor of any line on $X$, so that $\pi^*D$ has class $l$, the orthogonality clause gives $E\cdot\pi^*D=0$, that is, $l\cdot E=E\cdot l=0$ by symmetry. [F2, F3]

2.1 $E\cdot E=-1$. This is the self-intersection formula of step 1.1 with $r=1$. [F2, step 1.1]

3.1 The matrix. Steps 1.2, 1.3 and 2.1 give $l\cdot l=1$, $l\cdot E=0=E\cdot l$ and $E\cdot E=-1$; if $al+bE=0$ in $\operatorname{Pic}(X\prime)$, pairing with $l$ gives $a=0$ and pairing with $E$ gives $-b=0$. Thus these classes freely generate the stated sublattice; by bilinearity its Gram matrix of the sublattice $\mathbb Zl+\mathbb ZE$ in the basis $(l,E)$ is $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$. [F1, step 1.2, step 1.3, step 2.1]

3.2 The strict transform of a line through $p$. Let $L$ be a line through $p$ with strict transform $m$. The line is reduced and its multiplicity at $p$ is $1$, so $\pi^*L=m+E$ and $m\cdot E=1$ and $m\cdot m=L\cdot L-1=0$; equivalently, taking classes and using $\mathcal O_{X'}(\pi^*L)\cong\pi^*\mathcal O_X(1)$, the class of $m$ is $l-E$, and bilinearity and steps 1.2–2.1 give $m\cdot E=l\cdot E-E\cdot E=0+1=1$ and $m\cdot m=l\cdot l-2l\cdot E+E\cdot E=1-0-1=0$, in agreement. [F1, F2, F3, step 1.2, step 1.3, step 2.1]

4.1 Conclusion and choice accounting. Steps 1.2, 1.3 and 2.1 give the matrix of the intersection form on $\mathbb Zl+\mathbb ZE$, and step 3.2 gives $m=l-E$, $m\cdot E=1$, $m\cdot m=0$ for the strict transform of a line through $p$. The Axiom of Choice enters through the suppliers recorded in [F4]; the point, the lines and the blowup are given data and no selection is made in the computations. [F4, step 3.1, step 3.2] ∎
