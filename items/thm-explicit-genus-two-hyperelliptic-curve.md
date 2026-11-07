---
id: thm-explicit-genus-two-hyperelliptic-curve
kind: theorem
title: "The smooth projective model of $y^2=-(x^6+x+1)$ has genus two"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-curves-function-fields-equivalence
  - thm-nonconstant-morphism-proper-curves-finite-surjective
  - def-nonconstant-morphism-curves-degree
  - thm-riemann-hurwitz-complete
  - def-different-divisor-curve-map
  - lem-curve-different-local-support-and-index-bound
  - def-genus-euler-characteristic-curve
  - def-degree-divisor-proper-curve
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
sources:
  references:
    - title: "Bjorn Poonen and Michael Stoll, The Cassels–Tate Pairing on Polarized Abelian Varieties, Proposition 26"
      url: "https://math.mit.edu/~poonen/papers/sha.pdf"
      locator: "Printed p. 24: the genus-even hyperelliptic family and its Jacobian."
verification: {}
---

## Statement

Assume AC. Let $C/\mathbb Q$ be the smooth proper geometrically integral model of the
function field $\mathbb Q(x,y)$ with relation $y^2=-(x^6+x+1)$. Then
$C$ has genus two.

## Statement references

[[thm-curves-function-fields-equivalence|Smooth proper model of a one-variable function field]]

[[thm-riemann-hurwitz-complete|Riemann–Hurwitz formula with the different]]

[[def-genus-euler-characteristic-curve|Genus of a smooth proper curve]]

## Facts & Assumptions

**Given:** AC and the function field $L=\mathbb Q(x,y)$ with
$y^2=-(x^6+x+1)$.

[A1] AC is assumed in the curve–function-field equivalence and the
Riemann–Hurwitz theorem. ([[def-axiom-of-choice]],
[[thm-curves-function-fields-equivalence]],
[[thm-riemann-hurwitz-complete]])

[F1] A smooth proper geometrically integral curve over a perfect field
corresponds to a regular one-variable function field whose constant field is
relatively algebraically closed; the model is unique up to unique isomorphism.
([[thm-curves-function-fields-equivalence]])

[F2] For a finite separable morphism of smooth proper geometrically integral
curves, $2g(C)-2=d(2g(D)-2)+\deg R_f$, where $R_f$ is the different divisor
defined by lengths of relative differentials.
([[thm-riemann-hurwitz-complete]],
[[def-different-divisor-curve-map]])

[F3] At a closed point, the different coefficient is $e-1$ when the residue
extension is separable and the ramification index $e$ is invertible in the
residue field; it is zero at an unramified point with separable residue
extension. ([[lem-curve-different-local-support-and-index-bound]],
[[def-different-divisor-curve-map]])

[F4] The projective line has genus zero.
([[def-genus-euler-characteristic-curve]])

[F5] A nonconstant morphism of smooth proper curves is finite and
surjective, and its degree is the degree of the associated function-field
extension. ([[thm-nonconstant-morphism-proper-curves-finite-surjective]],
[[def-nonconstant-morphism-curves-degree]])

[F6] Divisor degree is preserved under extension to an algebraic closure;
the six roots of a squarefree degree-six polynomial contribute total degree
six over the ground field. ([[def-degree-divisor-proper-curve]])

## Proof

**Proof technique:** construct the smooth projective model from its function
field and apply Riemann–Hurwitz to its degree-two map to the projective line.

**Given:** AC and [F1]–[F6].

1.1 Put $f(x)=x^6+x+1$. It is squarefree over $\overline{\mathbb Q}$:
if $f(r)=f'(r)=0$, then $6r^5+1=0$, so $r^5=-1/6$ and
$r^6=-r/6$; substituting in $f(r)=0$ gives $r=-6/5$, which does not satisfy
$r^5=-1/6$. Thus $f$ has six distinct roots over $\overline{\mathbb Q}$.
Since a square in $\overline{\mathbb Q}(x)$ has even valuation at every
point, $-f(x)$ is not a square there. The polynomial $Y^2+f(x)$ is therefore
irreducible over $\overline{\mathbb Q}(x)$. The quotient
$\overline{\mathbb Q}[x,y]/(y^2+f(x))$ is free over $\overline{\mathbb Q}[x]$
with basis $1,y$ and embeds in its fraction-field quotient
$\overline{\mathbb Q}(x)[y]/(y^2+f(x))$, so it is a domain; localizing at
the nonzero polynomials in $x$ that came from $\mathbb Q[x]$ shows
$\overline{\mathbb Q}\otimes_{\mathbb Q}L$ is a domain. If $L$ contained a
nontrivial algebraic extension $E/\mathbb Q$, then $E/\mathbb Q$ would be
finite separable and $\overline{\mathbb Q}\otimes_{\mathbb Q}E$ would be a
product of at least two fields; flatness would inject this ring of zero
divisors into the domain $\overline{\mathbb Q}\otimes_{\mathbb Q}L$, a
contradiction. Thus $\mathbb Q$ is relatively algebraically closed in $L$;
because $\mathbb Q$ is perfect and
$\operatorname{trdeg}_{\mathbb Q}L=1$, [F1] supplies the stated smooth
proper model. [A1, F1, given, algebra]

1.2 The field extension $L/\mathbb Q(x)$ has degree two by the quadratic
equation and the nonsquare argument in step 1.1; it is separable because the
characteristic is zero. The field inclusion defines the nonconstant morphism
$x:C\to\mathbb P^1_{\mathbb Q}$ by [F1], and [F5] makes it finite of degree
two. The target has genus zero by [F4]. [A1, F1, F4, F5, step 1.1]

2.1 Over $\overline{\mathbb Q}$, each of the six distinct finite roots of
$f$ has valuation one in $\overline{\mathbb Q}(x)$. In the quadratic
extension obtained by adjoining $y$, a point above such a root has
$2v(y)=e\,v(f)=e$, so its ramification index is even and hence equals $2$;
the degree-two fibre formula gives exactly one point above each root. At
every other finite value, $f$ is a unit and the equation has two distinct
nonzero roots, so the cover is unramified there. [F2, F5, step 1.1,
algebra]

2.2 At infinity put $t=1/x$ and $w=yt^3$. The equation becomes
$w^2=-(1+t^5+t^6)$. At $t=0$ it has two distinct nonzero roots over
$\overline{\mathbb Q}$; the derivative with respect to $w$ is $2w\ne0$,
so there are two unramified points above infinity. At each finite root the
point above it has the same residue field as the root; the degrees of these
root fields sum to six because $f$ is squarefree of degree six. The
ramification index $e=2$ is invertible in each residue field; [F3] makes
each different coefficient $1$. All other different coefficients vanish.
Thus [F6] gives $\deg R_x=6$. [F3, F6, step 2.1, algebra]

3.1 Applying [F2] to $x:C\to\mathbb P^1$ and using [F4] gives
$$2g(C)-2=2(2\cdot0-2)+6=2,$$
so $g(C)=2$. [F2, F4, step 1.2, step 2.2, algebra] ∎
