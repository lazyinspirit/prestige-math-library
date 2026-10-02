---
id: def-riemann-roch-space-of-divisor
kind: definition
title: "The space L(D)"
status: draft
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-algebraic-curve-over-field
  - def-axiom-of-choice
  - def-divisor-smooth-proper-curve
  - def-invertible-sheaf-of-cartier-divisor
  - def-order-codimension-one-rational-function
  - def-sheaf-cohomology-derived-global-sections
  - def-vector-space
  - thm-cartier-weil-divisors-curves-agree
  - thm-line-bundle-rational-section-cartier-divisor
  - thm-local-ring-smooth-curve-dvr
  - thm-choice-implies-dependent-implies-countable-choice
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "The Stacks Project, Algebraic Curves (tag 0BRV)"
      url: "https://stacks.math.columbia.edu/download/curves.pdf"
    - title: "Ravi Vakil, The Rising Sea (version of October 21, 2025), Chs. 19 and 21"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2125public.pdf"
    - title: "William Fulton, Algebraic Curves (Internet Archive copy), Chs. 6-8"
      url: "https://web.archive.org/web/20240102232744id_/https://dept.math.lsa.umich.edu/~wfulton/CurveBook.pdf"
---

## Definition

Assume the Axiom of Choice for the supplied local-order and Cartier/Weil
routes below ([[def-axiom-of-choice]]). It supplies Dependent Choice by
[[thm-choice-implies-dependent-implies-countable-choice]]. Let $k$ be a field,
let $C$ be a smooth proper geometrically integral curve
over $k$ with function field $k(C)$ ([[def-algebraic-curve-over-field]]), and
let $D=\sum_x n_x[x]$ be a divisor on $C$, a finite formal $\mathbb Z$-linear
combination of closed points ([[def-divisor-smooth-proper-curve]]). Every
closed point $x$ of $C$ has a well-defined order
$\operatorname{ord}_x\colon k(C)^{\times}\to\mathbb Z$, the discrete
valuation of the local ring $\mathcal O_{C,x}$, a discrete valuation ring
([[thm-local-ring-smooth-curve-dvr]],
[[def-order-codimension-one-rational-function]]), and the divisor of a
nonzero rational function $f$ is
$\operatorname{div}(f)=\sum_x\operatorname{ord}_x(f)[x]$
([[def-order-codimension-one-rational-function]]).
This sum has finite support: the curve-level Cartier/Weil route identifies it
with the cycle of the principal Cartier divisor, whose support is locally
finite and hence finite on the quasi-compact curve
([[thm-cartier-weil-divisors-curves-agree]]).

The **Riemann-Roch space of the divisor $D$**, also called the **space
$L(D)$**, is the subset
$$L(D)=\{\,f\in k(C)^{\times}:\operatorname{div}(f)+D\ge0\,\}\cup\{0\}\subseteq k(C),$$
where the inequality is read coefficientwise: $\operatorname{ord}_x(f)+n_x\ge0$
for every closed point $x$. If $n_x<0$, this condition requires a zero of
order at least $-n_x$ at $x$; if $n_x>0$, it permits a pole of order at most
$n_x$. This is a $k$-subspace of
$k(C)$ ([[def-vector-space]]): it contains $0$ by definition; it is closed
under addition, because $\operatorname{ord}_x(f+g)\ge\min\{\operatorname{ord}_x(f),\operatorname{ord}_x(g)\}\ge -n_x$
for $f,g\in L(D)$ by the valuation inequality in the discrete valuation ring
$\mathcal O_{C,x}$ ([[thm-local-ring-smooth-curve-dvr]]), with
$\operatorname{ord}_x(0)$ read as $+\infty$ so that a summand $0$ causes no
constraint; and it is closed under scalar multiplication, because
$\operatorname{ord}_x(cf)=\operatorname{ord}_x(f)$ for $c\in k^{\times}$ and
$0\cdot f=0$. In particular $L(D)$ is determined by $D$ and consists of the
rational functions that are regular where $n_x=0$, may have poles of order at
most $n_x$ where $n_x>0$, and must vanish to order at least $-n_x$ where
$n_x<0$.

*Equivalence with the space of global sections (promised clause).* By
[[thm-cartier-weil-divisors-curves-agree]] the divisor $D$ is Cartier. The
associated sheaf is the subsheaf $\mathcal O_C(D)\subseteq\mathcal K_C$
described in [[def-invertible-sheaf-of-cartier-divisor]]. Write
$H^0(C,\mathcal O_C(D))=\Gamma(C,\mathcal O_C(D))$ for its global sections as
in [[def-sheaf-cohomology-derived-global-sections]]. On a local-equation
cover $(U_i,t_i)$ for $D$ it satisfies
$$\mathcal O_C(D)|_{U_i}=t_i^{-1}\mathcal O_{U_i}\subseteq\mathcal K_C|_{U_i}.$$
Since $C$ is integral, $\mathcal K_C$ is the constant sheaf with value
$k(C)$. Thus any global section of $\mathcal O_C(D)$ has a single generic
value $f\in k(C)$, and all its local restrictions are that same rational
function. The zero section corresponds to $f=0$. For $f\ne0$, the
Cartier-to-Weil compatibility in
[[thm-cartier-weil-divisors-curves-agree]] says that the order of $t_i$ at a
closed point $x\in U_i$ is the coefficient $n_x$ of $D$. Therefore $f$ is a global
section exactly when each $t_i f$ is regular, which at every closed point is
the condition
$$\operatorname{ord}_x(t_i f)=n_x+\operatorname{ord}_x(f)\ge0.$$
Conversely, if these inequalities hold, then $t_i f$ lies in the local ring at
every point of $U_i$; at the generic point it is already an element of the
function field. The resulting local regular representatives agree as the
same element of $k(C)$ and glue on $U_i$. Consequently the canonical inclusion
$$H^0\bigl(C,\mathcal O_C(D)\bigr)\hookrightarrow k(C)$$
has image exactly $L(D)$, and the inclusion and its inverse are $k$-linear.
The local sheaf formula and the rational-section divisor dictionary are also
supplied by the current bodies of
[[def-invertible-sheaf-of-cartier-divisor]] and
[[thm-line-bundle-rational-section-cartier-divisor]].
