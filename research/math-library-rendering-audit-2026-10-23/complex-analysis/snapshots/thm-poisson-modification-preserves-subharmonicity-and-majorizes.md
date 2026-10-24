---
id: thm-poisson-modification-preserves-subharmonicity-and-majorizes
kind: theorem
title: "Poisson modification is subharmonic and majorizes the original function"
status: published
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-poisson-modification-of-a-subharmonic-function, lem-gluing-lemma-for-plane-subharmonic-functions, thm-harmonic-majorant-characterization-of-plane-subharmonicity, thm-poisson-integral-solves-the-disc-dirichlet-problem, thm-conformal-invariance-of-plane-harmonicity, thm-harnack-convergence-principle-for-plane-harmonic-functions, thm-plane-subharmonic-functions-are-locally-integrable]
proof_strategy: direct
verification:
  audited: 2026-08-27
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Sheldon Axler, Paul Bourdon, and Wade Ramey, Harmonic Function Theory, 2nd ed."
      url: "https://www.axler.net/HFT.pdf"
---

## Statement

Let $u$ be subharmonic on a complex domain $\Omega$ and let $D\Subset\Omega$ be
an open disc. Then the Poisson modification $P_Du$ of
[[def-poisson-modification-of-a-subharmonic-function]] is well defined,
subharmonic on $\Omega$, harmonic on $D$, and satisfies $P_Du\ge u$ on
$\Omega$.

## Facts & Assumptions

**Given:** A subharmonic function $u$ on a complex domain $\Omega$ and an open disc $D\Subset\Omega$.

[L1] A boundary approximation for $u|_{\partial D}$ produces harmonic functions $h_n$ on $D$ with continuous boundary values $\phi_n$ that decrease pointwise on $\partial D$ ([[def-poisson-modification-of-a-subharmonic-function]], [[thm-poisson-integral-solves-the-disc-dirichlet-problem]], [[thm-conformal-invariance-of-plane-harmonicity]]).

[L2] If a harmonic function dominates a subharmonic function on the boundary of a compactly contained disc, then it dominates it throughout the disc ([[thm-harmonic-majorant-characterization-of-plane-subharmonicity]]).

[L3] Subharmonic pieces glue when the inside boundary limsup is dominated by the outside value ([[lem-gluing-lemma-for-plane-subharmonic-functions]]).

[L4] An increasing harmonic sequence that is bounded above at one point converges locally uniformly to a harmonic limit ([[thm-harnack-convergence-principle-for-plane-harmonic-functions]]).

[L5] A subharmonic function is locally integrable, so it is finite almost everywhere on every disc in its domain ([[thm-plane-subharmonic-functions-are-locally-integrable]]).

## Proof

**Proof technique:** direct.

1.1 Choose a boundary approximation $(\phi_n)$ for $u|_{\partial D}$, and let $h_n$ be the associated harmonic functions from [L1]. Because $\phi_n\ge u$ on $\partial D$, [L2] gives $h_n\ge u$ on $D$ for every $n$. The sequence $(h_n)$ is decreasing because the boundary data are decreasing. [L1, L2, given, choose]

2.1 Let $M$ be an upper bound for $\phi_1$ on $\partial D$. Then each $M-h_n$ is a nonnegative harmonic function on $D$, and the sequence $(M-h_n)$ is increasing. By [L5], choose $z_0\in D$ with $u(z_0)>-\infty$. Step 1.1 gives $0\le M-h_n(z_0)\le M-u(z_0)$, so [L4] applied to $(M-h_n)$ yields a harmonic limit $H$ on $D$. Consequently $h:=M-H=\inf_n h_n$ is harmonic on $D$. [step 1.1, L4, L5, choose]

3.1 The inside function $h$ is independent of the chosen boundary approximation. Indeed, if $k$ is obtained from another approximation $(\psi_m)$, then $h$ is harmonic on $D$ and its boundary limsup satisfies [step 1.1, step 2.1, L2] $$\limsup_{\substack{z\to\zeta\\ z\in D}}h(z)\le\phi_n(\zeta)\quad(\zeta\in\partial D)$$ for every fixed $n$, hence $\limsup h\le u\le\psi_m$ on the boundary. Applying [L2] to the harmonic function $k_m$ extending $\psi_m$ gives $h\le k_m$ on $D$ for every $m$, so $h\le k$. Symmetry gives $k\le h$. [step 1.1, step 2.1, L2]

4.1 By step 1.1, $h\ge u$ on $D$, and by step 3.1 this harmonic function is intrinsic. Moreover, for every $\zeta\in\partial D$ and every fixed $n$, one has $h\le h_n$ on $D$ and $h_n(\zeta)=\phi_n(\zeta)$, so [step 1.1, step 2.1] $$\limsup_{\substack{z\to\zeta\\ z\in D}}h(z)\le\phi_n(\zeta).$$ Letting $n\to\infty$ yields $\limsup_{z\to\zeta,\ z\in D}h(z)\le u(\zeta)$. [step 1.1, step 2.1]

5.1 The Poisson modification equals $h$ on $D$ and $u$ on $\Omega\setminus D$. Step 4.1 provides the seam inequality, so [L3] shows that $P_Du$ is subharmonic on $\Omega$. It is harmonic on $D$ by step 2.1, equals $u$ outside $D$ by definition, and majorizes $u$ on $D$ by step 4.1. Hence $P_Du\ge u$ on all of $\Omega$. [L3, step 2.1, step 4.1] ∎
