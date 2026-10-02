---
id: def-green-function-with-pole-at-infinity
kind: definition
title: "Green function with a pole at infinity"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-logarithmic-capacity-compact-set
  - def-polar-set-and-quasi-everywhere
  - thm-complement-of-a-compact-plane-set-has-one-unbounded-component
  - def-green-function-plane-domain
  - def-complex-domain
  - def-plane-harmonic-function
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-metric-interior-closure-boundary
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "E. B. Saff, Logarithmic Potential Theory with Applications to Approximation Theory, §3"
      url: "https://arxiv.org/pdf/1010.3760"
      locator: "Definition 3.4 and the following paragraph, printed pp. 184–185"
    - title: "B. Khoruzhenko, LTCC Potential Theory notes, §3"
      url: "https://maths.qmul.ac.uk/~boris/potential_th_notes.pdf"
      locator: "§3, Green functions of the exterior of a compact set"
verification:
  audited: 2026-10-02
  precheck: n/a
---

## Definition

Let $K\subseteq\mathbb C$ be **compact and nonpolar**, meaning that
$\operatorname{cap}(K)>0$ for the logarithmic capacity of
[[def-logarithmic-capacity-compact-set]]; by [[def-polar-set-and-quasi-everywhere]]
this is exactly the statement that $K$ is not capacity-polar. Such a $K$ is
nonempty, the complement $\mathbb C\setminus K$ is a nonempty open set, and it
has exactly one unbounded connected component
([[thm-complement-of-a-compact-plane-set-has-one-unbounded-component]]); that
component is written

$$\Omega:=\Omega(K)\subseteq\mathbb C\setminus K .$$

By [[def-complex-domain]], $\Omega$ is a complex domain, and $\Omega\ne\mathbb C$
because $K\ne\varnothing$ is disjoint from it. It is called the **exterior
domain of $K$**. Its boundary $\partial\Omega$ (interior, closure and boundary
in the sense of [[def-metric-interior-closure-boundary]]) is a compact subset of
$K$: indeed $\partial\Omega\subseteq\partial(\mathbb C\setminus K)\subseteq K$,
and it is called the **outer boundary of $K$**. Every point of $\partial\Omega$
is a finite point of $\mathbb C$; the point $\infty$ is not part of it.

Since $\operatorname{cap}(K)>0$, the Robin constant
$V_K=\inf_{\mu\in P(K)}I(\mu)$ of $K$ is a real number, $V_K<+\infty$
([[def-logarithmic-capacity-compact-set]]); it is the **Robin constant in the
pole at infinity**. Harmonicity below is that of
[[def-plane-harmonic-function]], and moduli are those of
[[def-complex-conjugate-real-imaginary-part-and-modulus]].

A **Green function of $\Omega$ with pole at infinity and Robin constant
$V_K$** is a function $g:\Omega\to\mathbb R$ with the following four
properties.

1. **Positive and harmonic.** $g(z)>0$ for every $z\in\Omega$, and $g$ is
   harmonic on $\Omega$.
2. **Logarithmic normalization at infinity.** Writing $\log$ for the natural
   logarithm and $|{\cdot}|$ for the modulus,

   $$g(z)-\log|z|\longrightarrow V_K\qquad\text{as }|z|\to\infty,\ z\in\Omega, $$

   meaning: for every real $\varepsilon>0$ there is a real $r$ such that
   $|g(z)-\log|z|-V_K|<\varepsilon$ for every $z\in\Omega$ with $|z|>r$.
   Because $\Omega$ is unbounded, this condition is never vacuous.
3. **Local boundedness near finite boundary points.** For every
   $\xi\in\partial\Omega$ there is a real $r>0$ with

   $$\sup\{\,g(z):z\in\Omega,\ |z-\xi|<r\,\}<+\infty .$$

4. **Zero boundary limit quasi-everywhere.** There is a Borel capacity-polar
   set $E\subseteq\partial\Omega$ such that

   $$\lim_{\Omega\ni z\to\xi}g(z)=0\qquad\text{for every }\xi\in\partial\Omega\setminus E .$$

   That is, $g$ has boundary limit $0$ **quasi-everywhere on the outer
   boundary**, in the sense of [[def-polar-set-and-quasi-everywhere]] applied
   to the compact conductor $\partial\Omega$.

**Notation.** If a Green function with pole at infinity and Robin constant
$V_K$ exists and is unique under properties 1–4, that unique function is
written

$$z\mapsto g_\Omega(z,\infty),\qquad\text{equivalently } z\mapsto g_{\Omega(K)}(z,\infty).$$

Neither existence nor uniqueness is asserted by this definition: they are
conclusions of the theorem that builds the Green function from the equilibrium
potential, and it is only there that the notation $g_\Omega(\cdot,\infty)$ is
licensed.

**Independence from the finite-pole kernel.** Properties 1–4 are stated for an
unbounded exterior domain and normalize the logarithmic term with coefficient
$+1$ and the additive constant $V_K$ at infinity. This is not the published
finite-pole canonical Green kernel $z\mapsto g_\Omega(z,a)$ of
[[def-green-function-plane-domain]], whose pole is a point $a\in\Omega$ and
whose local form is $g_\Omega(z,a)=-\log|z-a|+h(z)$ with $h$ harmonic across $a$. No clause
above is imported from, or reduces to, that kernel; the two are different
objects even on a common domain.

## Remarks

**Local boundedness in the comparison argument.** Property 3 records the
local upper bound at each finite boundary point used in the comparison
argument that identifies two candidates. Property 4 is a boundary condition on the candidate,
not a regularity assumption on $\partial\Omega$.

**Why the boundary limit is only quasi-everywhere.** For a general compact
nonpolar $K$ the outer boundary can contain irregular points, at which the
equilibrium potential need not tend to its boundary value; those points form a
capacity-polar set. Requiring the limit $0$ at every boundary point would
exclude the model function $g=V_K-U^{\mu_K}$ and would not be the convention
under which existence holds. The quasi-everywhere convention is the one under
which the Green function is characterized by properties 1–4.
