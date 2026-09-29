---
id: def-associated-sheaf-module-affine-scheme
kind: definition
title: Module sheaf on an affine scheme
status: published
origin: pipeline
deps:
  - def-localisation-of-a-module
  - def-affine-scheme-spectrum
  - thm-sections-basic-open-affine-scheme
  - thm-universal-property-localisation-of-a-module
justified_by: []
landmark: false
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6-sol"
    verdict: pass
    date: 2026-09-29
  audited: 2026-09-30
sources:
  scraped: []
  references:
    - title: "The Stacks Project, Schemes, §§26.5, 26.7, 26.24"
      url: "https://stacks.math.columbia.edu/download/schemes.pdf"
    - title: "Ravi Vakil, The Rising Sea, 29 August 2022, Chapters 6, 14, 17"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGaug2922public.pdf"
pipeline_run: frontier-36-complete
---

## Definition

Let $A$ be a commutative ring with $1$, let $M$ be an $A$-module, and put
$X=\operatorname{Spec}A$ with its distinguished-open basis
$D(f)=\{\mathfrak p:f\notin\mathfrak p\}$ ([[def-affine-scheme-spectrum]]).
For $f\in A$ write $M_f$ for the localisation of $M$ at the multiplicative
subset $\{1,f,f^2,\dots\}$, as in [[def-localisation-of-a-module]]. The
**distinguished-open data** of $M$ assign
$$\widetilde M(D(f)):=M_f .$$

*Restriction maps.* Suppose $D(g)\subseteq D(f)$. Then $g\in\sqrt{(f)}$, so
$g^n=fh$ for some $n\ge1$ and some $h\in A$; hence the image of $f$ in $A_g$
is a unit and $M_g$ is an $A_f$-module. The localisation map
$\lambda_g:M\to M_g$ is $A$-linear, so the universal property of module
localisation ([[thm-universal-property-localisation-of-a-module]]) gives a
unique $A_f$-linear map
$$\rho_{fg}:M_f\longrightarrow M_g,\qquad \rho_{fg}(m/f^n)=m/f^n ,$$
with $\rho_{fg}\circ\lambda_f=\lambda_g$.

*Well-definedness.* The map $\rho_{fg}$ depends only on the pair of open sets:
it is characterised as the unique $A_f$-linear map compatible with the
canonical maps from $M$. Consequently $\rho_{ff}=\operatorname{id}_{M_f}$, and
for distinguished opens $D(h)\subseteq D(g)\subseteq D(f)$ one has
$\rho_{fh}=\rho_{gh}\circ\rho_{fg}$, because both sides are $A_f$-linear maps
$M_f\to M_h$ that agree after composition with $\lambda_f$. Moreover, if
$D(f)=D(f')$ then the maps $\rho_{ff'}$ and $\rho_{f'f}$ are mutually inverse;
the two inclusions $D(f)\subseteq D(f')$ and $D(f')\subseteq D(f)$ are
available, and the composition rule gives
$\rho_{f'f}\circ\rho_{ff'}=\rho_{ff}=\operatorname{id}$ and
$\rho_{ff'}\circ\rho_{f'f}=\rho_{f'f'}=\operatorname{id}$. Thus the data are
functorial on distinguished opens, canonically up to these identifications.

*Module structure.* On $D(f)$ the structure sheaf has
$\mathcal O_X(D(f))=A_f$ and the ring restriction for $D(g)\subseteq D(f)$ is
the canonical localisation $A_f\to A_g$ ([[thm-sections-basic-open-affine-scheme]]).
The map $\rho_{fg}$ is $A_f$-linear by construction, so the data form an
$\mathcal O_X$-module on the distinguished-open basis: sections on $D(f)$ are
the $A_f$-modules $M_f$ and restrictions are compatible with the ring
restrictions.

*Completion to a sheaf.* A later result on this page proves that these
distinguished-open data satisfy the sheaf conditions on the basis and extend
uniquely to an $\mathcal O_X$-module, still denoted $\widetilde M$, whose
sections on $D(f)$ are the given modules $M_f$; the notation $\widetilde M$
always refers to that $\mathcal O_X$-module.

*Degenerate cases.* For $f=0$ one has $D(0)=\varnothing$ and $M_0=0$, the
localisation in which $0$ is inverted; this is the zero module. For a unit $f$
one has $D(f)=X$ and $M_f=M$. If $A=0$ then $X=\varnothing$ and
$\widetilde M$ is the zero sheaf on the empty space, whose module of sections
on $\varnothing$ is $0$. The construction is functorial in $M$: an
$A$-linear map $M\to N$ induces $A_f$-linear maps $M_f\to N_f$ commuting with
all restriction maps.
