---
id: lem-function-with-poles-defines-map-p1
kind: lemma
title: "A nonconstant rational function defines a finite map to the projective line"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-cartier-divisor
  - def-divisor-smooth-proper-curve
  - def-divisor-support-positive-negative-parts
  - def-effective-cartier-divisor
  - def-integral-scheme
  - def-order-codimension-one-rational-function
  - def-relative-projective-space-standard-charts
  - def-sheaf-on-topological-space
  - def-sheaf-total-quotient-rings
  - def-stalk-of-presheaf
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - cor-tensor-product-with-a-quotient-ring
  - lem-finite-flat-curve-fibre-degree
  - lem-integral-finite-type-scheme-function-field
  - lem-curve-closed-subsets-finite
  - lem-proper-normal-curve-rational-function-map
  - lem-scheme-fibre-stalk-quotient
  - thm-affine-fibre-coordinate-ring
  - thm-dvr-ideal-and-module-length
  - thm-effective-cartier-divisor-closed-immersion
  - thm-h0-structure-sheaf-proper-curve
  - thm-local-ring-smooth-curve-dvr
  - thm-regular-local-rings-are-normal
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
verification:
  audited: 2026-10-02
---

## Statement

Assume the Axiom of Choice. Let $C$ be a smooth proper geometrically integral
curve over a field $k$ and let $f\in k(C)^{\times}$ be nonconstant. Then $f$
defines a finite locally free morphism
$\varphi_f:C\to\mathbb P^1_k$ of degree $[k(C):k(f)]$, whose fibre over
infinity is the pole divisor
$(f)_\infty=\sum_{\operatorname{ord}_x(f)<0}(-\operatorname{ord}_x(f))[x]$
of degree $[k(C):k(f)]$, and whose fibre over zero is the zero divisor
$(f)_0=\sum_{\operatorname{ord}_x(f)>0}\operatorname{ord}_x(f)[x]$ of the same
degree. A nonzero rational function with no poles is algebraic over $k$ and is a
global unit.

## Facts & Assumptions

**Given:** The Axiom of Choice, a smooth proper geometrically integral curve
$C$ over $k$, a nonconstant rational function $f\in K^{\times}$ with
$K=k(C)$, and, for the last clause, an arbitrary $g\in K^{\times}$ with no
poles.

[F1] On a normal proper integral curve, an element of $K^{\times}$ algebraic
over $k$ and its inverse are global units; if it is transcendental, it
induces a finite locally free map to $\mathbb P^1_k$ of degree
$[K:k(f)]$, with the chart coordinates pulling back to $f$ and $f^{-1}$.
([[lem-proper-normal-curve-rational-function-map]])

[F2] For a smooth proper geometrically integral curve over $k$,
$H^0(C,\mathcal O_C)=k$ under the Axiom of Choice.
([[thm-h0-structure-sheaf-proper-curve]], [[def-axiom-of-choice]])

[F3] Each closed-point local ring $\mathcal O_{C,x}$ is a discrete valuation
ring with fraction field $K$. Its normalized order satisfies
$\operatorname{ord}_x(a)\ge0$ exactly when $a\in\mathcal O_{C,x}$, and each
nonzero element of the local ring has the form $u\pi_x^m$ for a unit $u$ and
$m\ge0$. The generic local ring is $K$. ([[thm-local-ring-smooth-curve-dvr]],
[[def-order-codimension-one-rational-function]])

[F4] The standard charts of $\mathbb P^1_k$ are
$U_0=\operatorname{Spec}k[t]$ and $U_1=\operatorname{Spec}k[s]$, with
$s=t^{-1}$ on the overlap. ([[def-relative-projective-space-standard-charts]])

[F5] For the finite locally free map in [F1], the scheme-theoretic fibres over
$0$ and $\infty$ have weighted degrees
$\sum_{\varphi_f(x)=0}\operatorname{ord}_x(f)[\kappa(x):k]=d$ and
$\sum_{\varphi_f(x)=\infty}(-\operatorname{ord}_x(f))[\kappa(x):k]=d$, where
$d=[K:k(f)]$. Each such fibre is a finite set of closed points.
([[lem-finite-flat-curve-fibre-degree]],
[[lem-curve-closed-subsets-finite]])

[F6] If $\operatorname{Spec}B\to\operatorname{Spec}A$ is an affine map, its
fibre over a point is computed by tensoring with the residue field; tensoring
with $A/(a)$ gives the quotient by $a$. The local ring of a scheme-theoretic
fibre at a point over $s$ is the source local ring modulo the extended maximal
ideal of $s$. ([[thm-affine-fibre-coordinate-ring]],
[[cor-tensor-product-with-a-quotient-ring]],
[[lem-scheme-fibre-stalk-quotient]])

[F7] A closed subscheme locally cut out by nonzerodivisors is the closed
subscheme of an effective Cartier divisor; an effective Cartier divisor has
regular local equations and its associated closed subscheme is locally the
quotient by those equations. ([[def-cartier-divisor]],
[[def-effective-cartier-divisor]],
[[thm-effective-cartier-divisor-closed-immersion]])

[F8] Divisors on a smooth proper curve are finite sums of closed points; the
coefficient contributed by a Cartier equation at $x$ is its normalized order
in the DVR $\mathcal O_{C,x}$, and degree weights each coefficient by
$[\kappa(x):k]$. The positive and negative parts of a rational function's
divisor separate its positive and negative orders.
([[def-divisor-smooth-proper-curve]],
[[def-divisor-support-positive-negative-parts]],
[[def-order-codimension-one-rational-function]])

[F9] On an integral scheme, the sheaf of meromorphic functions is the constant
sheaf with value $K$, the structure sheaf maps injectively to it, germs have
local representatives, and compatible local sections glue. Restriction maps
$H^0(C,\mathcal O_C)$ injectively into $K$.
([[def-sheaf-total-quotient-rings]], [[def-stalk-of-presheaf]],
[[def-sheaf-on-topological-space]],
[[lem-integral-finite-type-scheme-function-field]])

[F10] A proper closed subset of a finite-type integral curve is a finite set
of closed points. ([[lem-curve-closed-subsets-finite]])

[F11] A regular Noetherian local ring is an integrally closed domain; the
closed-point local rings of this smooth curve are regular and Noetherian.
([[thm-regular-local-rings-are-normal]],
[[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]])

[F12] If $V$ is a discrete valuation ring and $a=u\pi^m$ with $u$ a unit,
then the quotient $V/(a)$ has length $m$.
([[thm-dvr-ideal-and-module-length]])

## Proof

**Proof technique:** direct; construct the map, identify both scheme-theoretic fibres by their chart equations and local multiplicities, and handle the no-poles clause by local regularity.

1.1 By [F10], every point other than the generic point of $C$ is closed. The local rings at those points are discrete valuation rings by [F3], the generic local ring is $K$, and these rings are integrally closed by [F11]. Thus $C$ is normal and [F1] applies. [F3, F10, F11, given]

1.2 If $f$ were algebraic over $k$, [F1] would make it a global unit; by [F2] that unit lies in $k^{\times}$, contradicting nonconstancy. Thus $f$ is transcendental. Here nonconstant means $f\notin k$: if an algebraic element of $K$ lies outside $k$, the same supplier and $H^0(C,\mathcal O_C)=k$ force it into $k$. [F1, F2, algebra, given]

1.3 The transcendental case of [F1] gives a finite locally free map $\varphi_f:C\to\mathbb P^1_k$ of degree $d=[K:k(f)]$, with $t\mapsto f$ on $U_0$ and $s\mapsto f^{-1}$ on $U_1$ by [F4]. The generic point maps to the generic point. [F1, F4, given]

1.4 Let any $g\in K^{\times}$ have no poles. Then $\operatorname{ord}_x(g)\ge0$ gives $g\in\mathcal O_{C,x}$ at every closed point by [F3], and it belongs to the generic stalk $K$. Each stalk membership has a local representative in $\mathcal O_C$ by [F9]; all representatives map to the same $g$ in the constant meromorphic sheaf, so injectivity makes them agree on overlaps and the sheaf axiom glues them to a global section. [F3, F9, given]

1.5 By [F2], the global section from the preceding argument lies in $H^0(C,\mathcal O_C)=k$. Since $g\ne0$, it is in $k^{\times}$, hence algebraic over $k$ and a global unit. [F2, F9, given]

1.6 Write $\varphi_f^{-1}(U_0)=\operatorname{Spec}B_0$, with $k[t]\to B_0$ sending $t$ to $f$ by [F1]. Base change to $0=\operatorname{Spec}(k[t]/(t))$ gives the actual fibre $C_0=\operatorname{Spec}(B_0\otimes_{k[t]}k)=\operatorname{Spec}(B_0/fB_0)$. [F1, F4, F6]

1.7 The generic point is not in $C_0$ by [F1], so [F10] makes all its points closed. At a closed point $x$, $\varphi_f(x)=0$ exactly when $f\in\mathfrak m_x$, or $\operatorname{ord}_x(f)>0$ by [F3]. Conversely, a positive order makes $f$ regular with zero residue and $f^{-1}\notin\mathcal O_{C,x}$, so [F1] puts $x$ over $U_0$ with $t$-value $0$; on $U_0\setminus\{0\}$, $t$ and its pullback $f$ are units, while points outside $U_0$ map to $\infty$. Thus these are exactly the zero-fibre points. [F1, F3, F4, F10]

1.8 For each $x\in C_0$, [F6] gives $\mathcal O_{C_0,x}\cong\mathcal O_{C,x}/(f)$. Writing $f=u\pi_x^m$ with $m=\operatorname{ord}_x(f)>0$, this is $\mathcal O_{C,x}/(\pi_x^m)$ and has length $m$ by [F12]. [F3, F6, F12]

1.9 On $\varphi_f^{-1}(U_0)$ the fibre is cut out by $f$; on the open complement of its support it is empty and cut out by $1$. The germs of $f$ are nonzero in the local domains since they map to $f\ne0$ in $K$, and $f$ is a unit on the overlap because it maps into $U_0\setminus\{0\}$. These compatible nonzerodivisor equations make the fibre an effective Cartier divisor by [F7]. Its coefficient at $x$ is the order $m$ of its local equation, and it has coefficient zero elsewhere; hence $C_0=(f)_0=\sum_{\operatorname{ord}_x(f)>0}\operatorname{ord}_x(f)[x]$. [F3, F7, F8]

1.10 Write $\varphi_f^{-1}(U_1)=\operatorname{Spec}B_1$, with $k[s]\to B_1$ sending $s$ to $f^{-1}$. Base change to $\infty=\operatorname{Spec}(k[s]/(s))$ gives $C_\infty=\operatorname{Spec}(B_1\otimes_{k[s]}k)=\operatorname{Spec}(B_1/f^{-1}B_1)$. Its points are closed by [F10] because the generic point maps to the generic point. [F1, F4, F6, F10]

1.11 A closed point $x$ lies over $\infty$ exactly when $f^{-1}\in\mathfrak m_x$, or $\operatorname{ord}_x(f)<0$; conversely, this negative order makes $f^{-1}$ regular with zero residue and $f\notin\mathcal O_{C,x}$, so [F1] places $x$ over $U_1$ with $s$-value zero. Away from $\infty$ in $U_1$, $s$ and its pullback $f^{-1}$ are units; points outside $U_1$ map to $0$. [F1, F3, F4]

1.12 For each $x\in C_\infty$, put $m=-\operatorname{ord}_x(f)>0$. The fibre-stalk quotient is $\mathcal O_{C,x}/(f^{-1})=\mathcal O_{C,x}/(\pi_x^m)$ up to a unit, so it has length $m$ by [F12]. [F3, F6, F12]

1.13 The equations $f^{-1}$ on $\varphi_f^{-1}(U_1)$ and $1$ off the fibre are compatible nonzerodivisors: the germs of $f^{-1}$ map to the nonzero element $f^{-1}$ in $K$, and it is a unit on the overlap mapping into $U_1\setminus\{\infty\}$. By [F7] they define the effective Cartier fibre; its local Weil coefficient is $m=-\operatorname{ord}_x(f)$ and is zero elsewhere. Hence $C_\infty=(f)_\infty=\sum_{\operatorname{ord}_x(f)<0}(-\operatorname{ord}_x(f))[x]$. [F3, F4, F7, F8]

1.14 By [F5], the weighted residue-degree sums of these actual zero and pole fibres both equal $d=[K:k(f)]$. The divisor degree convention in [F8] therefore gives $\deg_k((f)_0)=\deg_k((f)_\infty)=[K:k(f)]$. [F1, F5, F8]

2.1 The constructed morphism is finite locally free of degree $[K:k(f)]$, its actual scheme-theoretic zero and infinity fibres are the stated effective Cartier/Weil divisors with the displayed local multiplicities, and both have degree $[K:k(f)]$. The no-poles argument shows that every nonzero rational function with no poles is in $k^{\times}$, hence algebraic and a global unit. The Axiom of Choice enters through [F1], [F2], [F3] and [F5]. [F1, F2, F3, F5] ∎
