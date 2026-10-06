---
id: def-canonical-divisor-of-a-smooth-projective-surface
kind: definition
title: "The canonical divisor of a smooth projective surface"
status: draft
origin: pipeline
pipeline_run: frontier-40-geometry-braids-rep-27
dependency_level: 0
deps:
  - def-axiom-of-choice
  - def-cartier-divisor
  - def-dimension-noetherian-topological-space
  - def-divisor-intersection-number-on-smooth-projective-surface
  - def-euler-characteristic-coherent-sheaf
  - def-integral-scheme
  - def-invertible-sheaf-of-cartier-divisor
  - def-linear-equivalence-cartier-divisors
  - def-projective-morphism-pre-proj
  - def-rational-section-line-bundle
  - def-smooth-morphism-to-field-classical
  - def-smooth-projective-dualizing-line-bundle-and-trace
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-serre-duality-smooth-projective-variety-locally-free-sheaves
  - thm-surface-intersection-product-bilinear-and-symmetric
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Ravi Vakil, The Rising Sea: Foundations of Algebraic Geometry, pre-publication version 2025-10-21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "A. Kumar and K. Venkatram, MIT 18.727 Topics in Algebraic Geometry: Algebraic Surfaces, Spring 2008, Lecture 2"
      url: "https://ocw.mit.edu/courses/18-727-topics-in-algebraic-geometry-algebraic-surfaces-spring-2008/198274c0c471d31fc05d600e28e403db_lect2.pdf"
---

## Definition

Assume the Axiom of Choice, inherited from the dualizing-bundle supplier and
the Euler-characteristic and Serre-duality suppliers below
([[def-axiom-of-choice]]). Let $k$ be a field and let $X$ be an integral
([[def-integral-scheme]]), smooth ([[def-smooth-morphism-to-field-classical]]),
projective ([[def-projective-morphism-pre-proj]]) $k$-scheme of pure dimension
two ([[def-dimension-noetherian-topological-space]]). Such an $X$ is an
integral regular projective surface over $k$
([[def-divisor-intersection-number-on-smooth-projective-surface]]): it is of
finite type over $k$ and smoothness makes every local ring regular, so all the
intersection-theoretic and cohomological constructions of that item apply.

Let $\omega_X=\bigwedge^2\Omega^1_{X/k}$ be the dualizing line bundle
([[def-smooth-projective-dualizing-line-bundle-and-trace]]), an invertible
$\mathcal O_X$-module, and recall that all its cohomology groups are
finite-dimensional and the Euler characteristic $\chi(X,-)$ of
[[def-euler-characteristic-coherent-sheaf]] is defined on it.

**Canonical divisor.** A **canonical divisor** on $X$ is a Cartier divisor
$K_X$ ([[def-cartier-divisor]]) whose associated invertible sheaf satisfies
$\mathcal O_X(K_X)\cong\omega_X$
([[def-invertible-sheaf-of-cartier-divisor]]).

One exists. The generic stalk of $\omega_X$ is one-dimensional over the
function field $K(X)$, so $\omega_X$ has a rational section $s$
([[def-rational-section-line-bundle]]); by
[[thm-line-bundle-rational-section-cartier-divisor]] the divisor
$K_X=\operatorname{div}_C(s)$ is a well-defined Cartier divisor and the
canonical section $1_{K_X}$ identifies
$\mathcal O_X(K_X)\cong\omega_X$ carrying $1_{K_X}$ to $s$. Conversely, for
every Cartier divisor $D$ the canonical section $1_D$ is a rational section of
$\mathcal O_X(D)$ with $\operatorname{div}_C(1_D)=D$.

Any two canonical divisors are linearly equivalent
([[def-linear-equivalence-cartier-divisors]]), and every Cartier divisor
linearly equivalent to a canonical divisor is canonical. Indeed, if $D,D'$ are
Cartier divisors with $\mathcal O_X(D)\cong\mathcal O_X(D')\cong\omega_X$,
transport the canonical rational section $1_D$ across an isomorphism
$\varphi:\mathcal O_X(D)\to\mathcal O_X(D')$. There is a unique
$g\in K(X)^{\times}$ with $\varphi(1_D)=g\,1_{D'}$, since two rational
sections of one invertible sheaf differ by a meromorphic unit
([[def-rational-section-line-bundle]]), and comparing local equations in
trivializations shows $\operatorname{div}_C(g\,1_{D'})=\operatorname{div}_C(g)+D'$
([[def-cartier-divisor]]). Divisors of sections are preserved by a sheaf
isomorphism, and $\operatorname{div}_C(1_D)=D$ and
$\operatorname{div}_C(1_{D'})=D'$ by
[[thm-line-bundle-rational-section-cartier-divisor]], so
$D-D'=\operatorname{div}_C(g)$ is principal and
$D\sim D'$; the converse is immediate from the same computation.

**Basic properties.**

1. The intersection numbers $K_X\cdot D$ and $D\cdot K_X$ depend only on the
   linear equivalence classes of $K_X$ and $D$ and are therefore independent
   of the chosen canonical divisor
   ([[def-divisor-intersection-number-on-smooth-projective-surface]],
   [[thm-surface-intersection-product-bilinear-and-symmetric]]); in particular
   $K_X\cdot D=D\cdot K_X$. For an invertible $\mathcal O_X$-module $\mathcal L$
   one writes
   $\mathcal L\cdot K_X:=\mathcal L\cdot\omega_X$ and
   $K_X\cdot\mathcal L:=\omega_X\cdot\mathcal L$; these depend only on the
   classes.
2. Serre duality
   ([[thm-serre-duality-smooth-projective-variety-locally-free-sheaves]])
   gives $\chi(X,\omega_X)=\chi(X,\mathcal O_X)$ and, for every invertible
   $\mathcal O_X$-module $\mathcal L$, the identity
   $\chi(X,\mathcal L\otimes\omega_X)=\chi(X,\mathcal L^{\vee})$: dualizing
   $E=\mathcal O_X$ and $E=\mathcal L^{\vee}$ pairs $H^q$ with $H^{2-q}$ and
   preserves the alternating sum because the pairings are perfect and all
   groups are finite-dimensional. Equivalently
   $\chi(X,\mathcal O_X(K_X+D))=\chi(X,\mathcal O_X(-D))$ for every Cartier
   divisor $D$ on $X$.
3. The **Euler characteristic of the structure sheaf** is the integer
   $\chi(X,\mathcal O_X)=h^0(X,\mathcal O_X)-h^1(X,\mathcal O_X)+h^2(X,\mathcal O_X)$ with
   $h^q=\dim_kH^q(X,\mathcal O_X)$; by property 2 it equals
   $\chi(X,\omega_X)$. The surface arithmetic genus is
   $p_a(X)=\chi(X,\mathcal O_X)-1$ (Vakil, §18.4.4). No topological
   description of this integer is used on this page. The expression becomes
   $1-h^1+h^2$ when $H^0(X,\mathcal O_X)=k$; integrality alone over an
   arbitrary field does not imply that condition.
