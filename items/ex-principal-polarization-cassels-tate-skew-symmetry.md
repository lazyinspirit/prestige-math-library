---
id: ex-principal-polarization-cassels-tate-skew-symmetry
kind: example
title: "Skew-symmetry without alternation for a principally polarized Jacobian"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 16
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-cassels-tate-pairing-between-dual-abelian-varieties
  - rem-cassels-tate-alternating-condition-for-polarized-abelian-varieties
  - thm-jacobian-has-canonical-principal-polarization
  - thm-explicit-genus-two-hyperelliptic-curve
  - thm-square-criterion-in-q2
  - thm-picard-degree-one-component-is-a-jacobian-torsor
  - def-tate-shafarevich-group-of-abelian-variety
  - def-cassels-tate-polarization-obstruction-class
  - def-degree-divisor-proper-curve
  - cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals
  - cor-complex-numbers-are-a-quadratic-real-extension
  - thm-picard-degree-one-line-bundle-over-finite-field
  - lem-smooth-finite-line-curves-over-finite-fields-have-smooth-completions
  - thm-full-riemann-roch-divisor
  - cor-canonical-degree-two-g-minus-two
  - cor-negative-degree-no-sections-rr
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-cartier-weil-divisors-curves-agree
  - lem-effective-divisors-sections-mod-scalars
  - thm-principal-divisor-degree-zero-proper-curve
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree
  - lem-hensel-factor-lifting-over-a-complete-valued-field
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: escalated
sources:
  references:
    - title: "Bjorn Poonen and Michael Stoll, The Cassels–Tate Pairing on Polarized Abelian Varieties, Theorem 11 and Proposition 26"
      url: "https://math.mit.edu/~poonen/papers/sha.pdf"
      locator: "Printed pp. 14 and 24: self-pairing as half the number of deficient places, and the genus-even hyperelliptic family."
    - title: "Keith Conrad, Hensel's Lemma, Theorem 4.5"
      url: "https://kconrad.math.uconn.edu/blurbs/gradnumthy/hensel.pdf"
      locator: "Square criterion for odd 2-adic units, as recorded in the cited library supplier."
verification: {}
---

## Example

Assume AC and DC. Let $C/\mathbb Q$ be the smooth projective genus-two curve with function
field $\mathbb Q(x,y)$, $y^2=-(x^6+x+1)$, and let $J=\operatorname{Jac}(C)$
with its canonical principal polarization. Let
$c\in\operatorname{Sha}(J/\mathbb Q)[2]$ be the obstruction class of that polarization,
equivalently the torsor class of $\operatorname{Pic}^1_{C/\mathbb Q}$. Then
$$\langle c,c\rangle_{CT}=\frac12\in\mathbb Q/\mathbb Z.$$
Thus the polarized Cassels–Tate pairing is skew-symmetric but not
alternating.

## Example references

[[thm-explicit-genus-two-hyperelliptic-curve|Genus of the explicit hyperelliptic curve]]

[[thm-jacobian-has-canonical-principal-polarization|Canonical principal polarization of a Jacobian]]

[[rem-cassels-tate-alternating-condition-for-polarized-abelian-varieties|Alternation criterion]]

[[thm-square-criterion-in-q2|Square criterion in $\mathbb Q_2$]]

[[thm-picard-degree-one-component-is-a-jacobian-torsor|Picard degree-one torsor under the Jacobian]]

[[def-tate-shafarevich-group-of-abelian-variety|Tate–Shafarevich group]]

[[def-cassels-tate-polarization-obstruction-class|Polarization obstruction class]]

[[def-degree-divisor-proper-curve|Degree of divisors]]

[[cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals|Algebraic closure of the reals]]

[[cor-complex-numbers-are-a-quadratic-real-extension|The complex numbers have degree two over the reals]]

## Facts & Assumptions

**Given:** AC, DC, the curve $C$ of the Statement, its Jacobian $J$, the canonical
principal polarization, and the Cassels–Tate pairing.

[A1] AC and DC are inherited from the global-field and duality conventions.
([[def-axiom-of-choice]], [[def-dependent-choice]],
[[thm-cassels-tate-pairing-between-dual-abelian-varieties]])

[F1] The smooth projective model of $y^2=-(x^6+x+1)$ has genus two.
([[thm-explicit-genus-two-hyperelliptic-curve]])

[F2] The Jacobian of a smooth proper genus-two curve has a canonical
principal polarization; its polarization obstruction class is the class of
$\operatorname{Pic}^1_{C/\mathbb Q}$.
([[thm-jacobian-has-canonical-principal-polarization]],
[[def-cassels-tate-polarization-obstruction-class]])

[F3] For a canonically polarized Jacobian, its obstruction class $c_\lambda$
is $2$-torsion and belongs to $\operatorname{Sha}$; for a genus-two curve it is the
torsor class of $\operatorname{Pic}^1_{C/\mathbb Q}$.
([Poonen–Stoll, Corollary 2 and Corollary 4](https://math.mit.edu/~poonen/papers/sha.pdf))

[F4] If $c=\operatorname{Pic}^1_{C/\mathbb Q}$ is locally trivial, then
$\langle c,c\rangle_{CT}=N/2$ in $\mathbb Q/\mathbb Z$, where $N$ is the
number of places $v$ for which $C$ has no $\mathbb Q_v$-rational divisor of
degree one. ([Poonen–Stoll, Theorem 11](https://math.mit.edu/~poonen/papers/sha.pdf))

[F5] An odd $2$-adic unit congruent to $1$ modulo $8$ is a square in
$\mathbb Q_2$. ([[thm-square-criterion-in-q2]])

[F6] Divisor degree is the sum of closed-point degrees. A finite extension of
$\mathbb R$ inside its algebraic closure is either $\mathbb R$ or $\mathbb C$,
of degree one or two. ([[def-degree-divisor-proper-curve]],
[[cor-the-complex-numbers-are-an-algebraic-closure-of-the-reals]],
[[cor-complex-numbers-are-a-quadratic-real-extension]])

[F7] Under AC and DC, every smooth proper geometrically integral curve over a finite field has a line bundle of degree one. A smooth curve finite over an open subset of the affine line has a smooth projective completion with finite complement.
([[thm-picard-degree-one-line-bundle-over-finite-field]],
[[lem-smooth-finite-line-curves-over-finite-fields-have-smooth-completions]])

[F8] On a smooth proper curve of genus $h$, Riemann–Roch gives $l(D)-l(K-D)=\deg D+1-h$, the canonical degree is $2h-2$, and negative-degree divisors have no sections. Every line bundle is represented by a divisor, and a nonzero regular section gives an effective divisor of the same degree; principal divisors have degree zero.
([[thm-full-riemann-roch-divisor]], [[cor-canonical-degree-two-g-minus-two]],
[[cor-negative-degree-no-sections-rr]],
[[thm-line-bundle-rational-section-cartier-divisor]],
[[thm-cartier-weil-divisors-curves-agree]],
[[lem-effective-divisors-sections-mod-scalars]],
[[thm-principal-divisor-degree-zero-proper-curve]])

[F9] Every finite extension $\ell/\mathbb F_p$ of degree $d$ is the residue field of an unramified extension $L/\mathbb Q_p$ of degree $d$. The extension is complete, and a simple residue root of a monic polynomial lifts to a root in its valuation ring.
([[thm-finite-unramified-local-extensions-classified-by-residue-extensions]],
[[thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree]],
[[lem-hensel-factor-lifting-over-a-complete-valued-field]])

## Verification

**Proof technique:** count the deficient places and apply the
Poonen–Stoll self-pairing formula. For the odd-prime divisor calculation, use finite-field Picard descent and Riemann–Roch.

**Given:** [A1], [F1]–[F9], and the curve in the Statement.

1.1 The polynomial $f(x)=x^6+x+1$ is squarefree: if $f(r)=f'(r)=0$, then
$6r^5+1=0$, so $r^5=-1/6$ and $r^6=-r/6$; substituting in $f(r)=0$ gives
$r=-6/5$, which does not satisfy $r^5=-1/6$. Thus the stated smooth
projective hyperelliptic curve is the genus-two model of [F1].
[F1, algebra]

1.2 At $p=2$, the choice $x=-2$ gives
$y^2=-(64-2+1)=-63$. Since $-63$ is an odd $2$-adic unit congruent to
$1$ modulo $8$, [F5] gives a point in $C(\mathbb Q_2)$ and hence a
$\mathbb Q_2$-rational divisor of degree one. [F5, step 1.1, algebra]

1.3 Let $p$ be odd and put $g(x)=-(x^6+x+1)\in\mathbb F_p[x]$. If $g=u h^2$ for any $u\in\mathbb F_p^\times$ and $h=ax^3+bx^2+cx+d$, the leading coefficient forces $a\ne0$. Comparing the $x^5$, $x^4$, and $x^3$ coefficients successively gives $b=c=d=0$, contradicting the nonzero $x$ coefficient. Over the perfect field $\mathbb F_p$, a polynomial that becomes a square up to scalar over an algebraic closure has even multiplicity at every irreducible factor, and is already a scalar times a square over $\mathbb F_p$. Thus $g$ is not a square even in $\overline{\mathbb F}_p(x)$. [given, algebra]

1.4 Let $U=\operatorname{Spec}\mathbb F_p[x,1/g]$ and let $Y$ over $U$ be defined by $z^2=g(x)$. This is finite over $U$, and is smooth because $2z$ is a unit there. Step 1.3 makes its coordinate ring geometrically integral: the quadratic polynomial in $z$ is irreducible over $\overline{\mathbb F}_p(x)$, and its monic quotient over $\overline{\mathbb F}_p[x,1/g]$ embeds in that field extension. By [F7], $Y$ has a smooth projective completion $X$ with finite complement $S$. This completion is geometrically integral, since after algebraic closure its smooth one-dimensional components all meet the dense geometrically integral open $Y$, the complement being finite. [F7, step 1.3, construct, algebra]

1.5 Write $S$ also for the reduced divisor supported on $X\setminus Y$ and let $h$ be the genus of $X$. By [F7] and [F8], choose a degree-one divisor $D$ on $X$. Choose a positive odd integer $n$ with $n-\deg S>2h-2$ and $n\ge 2h+1$. Riemann–Roch and negative-degree vanishing in [F8] give $l(nD)=n+1-h$ and $l(nD-S)=n-\deg S+1-h$. The evaluation map from $H^0(X,\mathcal O_X(nD))$ to the direct sum of its fibers at the closed points of $S$ has kernel $H^0(X,\mathcal O_X(nD-S))$: in a local generator, vanishing in the residue fiber means divisibility by the local uniformizer. The target has dimension $\deg S$ over $\mathbb F_p$, so the displayed dimension difference makes this map surjective. [F7, F8, step 1.4, choose, algebra]

1.6 Prescribe a nonzero vector in each of those finitely many one-dimensional residue-field fibers and lift this tuple by step 1.5 to a section $s$. If $S$ is empty, choose any nonzero section, which exists since $l(nD)=n+1-h>0$. The zero divisor $E$ of $s$ is effective, disjoint from $S$, and has positive odd degree $n$ by [F8]. Since its degree is the sum of multiplicities times residue degrees, at least one point $Q$ in its support has odd residue degree $d=[\kappa(Q):\mathbb F_p]$. Thus $Q\in Y$ has coordinates $(\bar a,\bar b)$ in $\kappa(Q)$ with $\bar b^2=g(\bar a)\ne0$. [F6, F8, step 1.5, choose, algebra]

1.7 By [F9], take the degree-$d$ unramified extension $L/\mathbb Q_p$ with residue field $\kappa(Q)$, and lift $\bar a$ to $a\in\mathcal O_L$. The reduction of $T^2+(a^6+a+1)$ has the root $\bar b$ and derivative $2\bar b\ne0$, so Hensel lifting in [F9] supplies $b\in\mathcal O_L$ with $b^2=-(a^6+a+1)$. This gives an $L$-point $P$ of $C$. If its image on $C$ is the closed point $R$ with residue field $M\subseteq L$, the divisor $T=[L:M][R]$ on $C_{\mathbb Q_p}$ has degree $[L:M][M:\mathbb Q_p]=d$. This is the trace divisor, whether or not $P$ has full orbit size $d$. [F6, F9, step 1.6, construct, algebra]

1.8 The fiber $x=0$ on $C_{\mathbb Q_p}$ is the degree-two divisor $H$ given by $y^2=-1$: it is two rational points if $-1$ is a square and otherwise one point of degree two. Consequently $T-((d-1)/2)H$ is a $\mathbb Q_p$-rational divisor of degree one. Negative coefficients are allowed in a divisor; no rational point of $C$ is asserted. This proves that every odd prime is nondeficient, using [F7]–[F9] instead of a curve point-count bound. [F6, step 1.7, construct, algebra]

2.1 Over $\mathbb R$, for $x\ge0$ one has $x^6+x+1>0$. For $x<0$, put
$u=-x>0$; if $u<1$, then $u^6-u+1>1-u>0$, and if $u\ge1$, then
$u^6-u+1\ge1$. Hence $-(x^6+x+1)<0$ for every real $x$, so
there is no affine real point. At infinity, the coordinates $t=1/x$ and
$w=y/x^3$ satisfy $w^2=-(1+t^5+t^6)$; above $t=0$ this requires
$w^2=-1$, which has no real solution. Thus $C(\mathbb R)=\varnothing$.
Every closed point of a curve over $\mathbb R$
has degree one or two; without real points, all closed points have degree
two. Every real divisor therefore has even degree, so $\mathbb R$ is
deficient. [F1, F6, algebra]

2.2 By step 1.8, only the
real place is deficient, so $N=1$ in [F4] and
$\langle c,c\rangle_{CT}=1/2$. By the criterion in the Remark, a nonzero
self-pairing proves the pairing is not alternating; that Remark also proves
it is skew-symmetric. [F4, step 1.2, step 1.8, step 2.1, algebra]

## Unresolved prerequisites

- The self-pairing source theorem uses the Cassels–Tate pairing and local duality; the current in-run Cassels–Tate pairing carrier is escalated pending local Tate duality and global-flat-duality boundary compatibility.

The local divisor calculation in steps 1.3–1.8 is an alternative to the point-count argument in Poonen–Stoll Lemma 15. It uses the explicitly listed finite-field Picard, completion, Riemann–Roch and local-extension suppliers. The source-derived identities [F2]–[F4], including the obstruction-class identification, local triviality and self-pairing formula, still need local proofs; the divisor calculation does not establish them.
