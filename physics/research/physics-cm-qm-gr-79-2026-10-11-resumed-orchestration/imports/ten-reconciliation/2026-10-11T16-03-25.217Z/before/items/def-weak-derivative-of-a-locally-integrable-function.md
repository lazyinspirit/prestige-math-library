---
id: def-weak-derivative-of-a-locally-integrable-function
kind: definition
title: Weak derivative of a locally integrable function
status: published
origin: pipeline
deps: [def-locally-integrable-function-as-a-regular-distribution, def-distributional-derivative, def-ck-and-multi-index-notation-in-several-variables, def-countable-choice]
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
    - title: Juha Kinnunen, Sobolev Spaces (2026), Chapter 1 §1.1
      url: https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf
    - title: John K. Hunter, Notes on Partial Differential Equations (2014), §3.1
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
---

## Definition

Let $\Omega\subseteq\mathbb R^n$ be open, $n\ge1$, let
$u,v\in L^1_{\mathrm{loc}}(\Omega)$, and let
$\alpha\in\mathbb N_0^n$ be the multi-index of
[[def-ck-and-multi-index-notation-in-several-variables]]. We say that $v$ is
the **weak derivative** $D^\alpha u$ if
$$\int_\Omega u\,D^\alpha\varphi\,dx =(-1)^{|\alpha|}\int_\Omega v\varphi\,dx \qquad\text{for every }\varphi\in C_c^\infty(\Omega).$$
Both integrals are finite because the test and all its derivatives are bounded
and compactly supported. The test identity is choice-free. By
[[def-locally-integrable-function-as-a-regular-distribution]] and the signed
transpose convention in [[def-distributional-derivative]], it is equivalent
to $\partial^\alpha T_u=T_v$ as distributions. For $\alpha=0$, this identity
reduces to $T_u=T_v$, hence to $u=v$ almost everywhere by the published
embedding theorem under [[def-countable-choice]].

**Well-definedness.** Changing either representative on a null set leaves each
test integral unchanged. Weak derivatives are therefore statements about
almost-everywhere classes; existence and uniqueness of their locally
integrable value classes are audited separately.
