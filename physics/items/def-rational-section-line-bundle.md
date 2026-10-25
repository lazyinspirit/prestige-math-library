---
id: def-rational-section-line-bundle
kind: definition
title: "Rational section line bundle"
status: published
origin: pipeline
pipeline_run: frontier-37-owner-30
deps:
  - def-invertible-sheaf
  - def-locally-free-sheaf-finite-rank
  - def-sheaf-total-quotient-rings
  - def-sheaf-tensor-product
  - def-integral-scheme
  - def-generic-point-irreducible-closed-subset
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  audited: 2026-10-02
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-02
sources:
  references:
    - title: "The Stacks Project, Divisors, §§31.14–31.30"
      url: "https://stacks.math.columbia.edu/download/divisors.pdf"
    - title: "Ravi Vakil, The Rising Sea, Ch. 15 §§15.1–15.3"
      url: "https://math.stanford.edu/~vakil/216blog/FOAGoct2111public.pdf"
    - title: "The Stacks Project, Exercises, Definition 111.49.1(6)–(8)"
      url: "https://stacks.math.columbia.edu/tag/02AR"
---

## Definition

Let $X$ be an integral scheme ([[def-integral-scheme]]) with generic point
$\eta$ ([[def-generic-point-irreducible-closed-subset]]), let $K_X$ be its
sheaf of meromorphic functions ([[def-sheaf-total-quotient-rings]]), and let
$\mathcal L$ be an invertible $\mathcal O_X$-module ([[def-invertible-sheaf]]).

The **sheaf of meromorphic sections** of $\mathcal L$ is the
$\mathcal O_X$-module
$$K_X(\mathcal L)=\mathcal L\otimes_{\mathcal O_X}K_X,$$
the tensor product of sheaves of modules
([[def-sheaf-tensor-product]]). A **meromorphic section** of $\mathcal L$ is a
global section of $K_X(\mathcal L)$; it is **regular**, or a **rational
section**, when it is nonzero.

On an integral scheme the sheaf $K_X$ is the constant sheaf with value the
function field $K(X)=\mathcal O_{X,\eta}$, so $K_X(\mathcal L)$ is the
constant sheaf with value the stalk $\mathcal L_\eta$. This stalk is a
one-dimensional vector space over the function field: fixing a
$\mathcal O_{X,\eta}$-basis of identity $1_\eta$ of the field $K(X)$, the
vector space is
$$K(X)\otimes_{\mathcal O_{X,\eta}}\mathcal L_\eta\cong K(X),$$
and a rational section is a nonzero element of the one-dimensional
$K(X)$-vector space $\mathcal L_\eta$. The
stalk $\mathcal L_\eta$ is one-dimensional over $K(X)$ because $\mathcal L$ is
locally free of rank one ([[def-locally-free-sheaf-finite-rank]]): on a
neighbourhood of $\eta$ a generator identifies $\mathcal L$ with
$\mathcal O_X$, and passing to stalks gives
$\mathcal L_\eta\cong\mathcal O_{X,\eta}=K(X)$. A rational section is
therefore the same thing as a $K(X)$-multiple of any chosen local generator of
$\mathcal L$ near $\eta$, and two rational sections $s,s'$ satisfy
$s'=g\,s$ for a unique $g\in K(X)^{\times}$ when both are nonzero.

On the empty scheme there is no generic point and no invertible module with a
nonzero stalk, so the notation is not used there; on a nonempty integral
scheme the generic point exists and the construction is never vacuous. The
definition imposes no properness, finiteness or normality assumption on $X$;
those enter only when one wants to associate divisors to the sections.
