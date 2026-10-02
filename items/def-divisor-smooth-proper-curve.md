---
id: def-divisor-smooth-proper-curve
kind: definition
title: "Divisors on a smooth proper curve"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-degree-divisor-proper-curve
  - def-divisor-support-positive-negative-parts
  - def-locally-factorial-scheme
  - def-locally-noetherian-and-noetherian-scheme
  - def-normal-noetherian-ring
  - def-unique-factorisation-domain
  - def-weil-divisor-normal-noetherian-scheme
  - lem-field-is-noetherian
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-local-ring-smooth-curve-dvr
  - cor-dvr-is-a-pid
  - cor-finite-type-algebra-over-noetherian-ring-is-noetherian
  - thm-principal-ideal-domains-are-unique-factorisation-domains
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
verification:
  audited: 2026-10-02
---

## Definition

Let $k$ be a field and let $C$ be a smooth proper geometrically integral curve
over $k$ ([[def-algebraic-curve-over-field]]). A **divisor on $C$** is a finite
formal $\mathbb Z$-linear combination
$$ D=\sum_{x\in C}n_x[x],\qquad n_x\in\mathbb Z, $$
of closed points $x$ of $C$, all but finitely many coefficients vanishing.

The finite-formal-sum definition above is unqualified. For the following
local-ring and normality context, assume the Axiom of Choice
([[def-axiom-of-choice]]); it supplies Dependent Choice by
[[thm-choice-implies-dependent-implies-countable-choice]]. If $x$ is a closed
point of $C$, then $\mathcal O_{C,x}$ is a discrete valuation ring by
[[thm-local-ring-smooth-curve-dvr]]. At the generic point $\eta$, the local
ring is the function field $k(C)$, which is a field. These are all the points
of this one-dimensional integral curve, and both kinds of local rings are
integrally closed domains. Since $C$ is finite type over the field $k$, its
affine coordinate rings are Noetherian; the finite-type scheme is
quasi-compact, so $C$ is Noetherian
([[lem-field-is-noetherian]],
[[cor-finite-type-algebra-over-noetherian-ring-is-noetherian]],
[[def-locally-noetherian-and-noetherian-scheme]]). Thus $C$ is normal
([[def-normal-noetherian-ring]]). The codimension-one points are exactly the
closed points. Hence the finite sums above are the Weil divisors of the fixed
normal-scheme convention ([[def-weil-divisor-normal-noetherian-scheme]]).

Under the same Choice assumption, each closed-point local ring is a PID by
[[cor-dvr-is-a-pid]] and a UFD by
[[thm-principal-ideal-domains-are-unique-factorisation-domains]]; the generic
local ring is a field and hence a UFD. Thus $C$ is locally factorial
([[def-locally-factorial-scheme]]). This is the local-factorial input for the
usual Cartier interpretation of these curve divisors, established by the
separate curve-level Cartier/Weil comparison. The divisor group, support,
degree, and effectivity conventions used throughout are:

1. the **support** $\operatorname{Supp}D=\{x:n_x\ne0\}$ is the finite set of
   closed points with nonzero coefficient, and the **positive and negative
   parts** are $D^+=\sum_{n_x>0}n_x[x]$ and $D^-=\sum_{n_x<0}(-n_x)[x]$, so
   that $D=D^+-D^-$ ([[def-divisor-support-positive-negative-parts]]);
2. the **degree** is $\deg_k(D)=\sum_x n_x[\kappa(x):k]$, the sum over the
   finite support of the coefficients weighted by the residue degrees
   ([[def-degree-divisor-proper-curve]]); for a closed point of a curve over
   $k$ the residue field $\kappa(x)$ is a finite extension of $k$;
3. $D$ is **effective**, written $D\ge0$, when $n_x\ge0$ for every $x$; and
   for two divisors one writes $D\ge D'$ when $D-D'$ is effective.

A divisor is thus an element of the free abelian group on the closed points
of $C$, and the divisor of a nonzero rational function, the class group, and
the Riemann–Roch space of $D$ are the invariants built from this group later
on this page.
