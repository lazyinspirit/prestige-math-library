---
id: thm-h-cobordism-identifies-theta-n-with-oriented-diffeomorphism-classes-for-n-at-least-five
kind: theorem
title: "H-cobordism of homotopy spheres equals oriented diffeomorphism"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-theta-n-group-of-oriented-h-cobordism-classes-of-homotopy-spheres, thm-smooth-simply-connected-h-cobordism-theorem, def-countable-choice]
justified_by: []
aliases: []
landmark: false
dependency_level: 19
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Michel Kervaire and John Milnor, Groups of Homotopy Spheres I, Annals of Mathematics 77 (1963), 504-537"
      url: "https://www.maths.ed.ac.uk/~v1ranick/papers/kervmiln.pdf"
      locator: "printed pp. 504-507, h-cobordism classes and diffeomorphism classes of homotopy spheres"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem, section 9, printed pp. 109-110"
      url: "https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
      locator: "the h-cobordism theorem in dimension at least six"
---

## Statement

Assume $\mathrm{AC}_\omega$. For $n\ge5$, two oriented smooth homotopy
$n$-spheres are oriented h-cobordant if and only if they are
orientation-preservingly diffeomorphic. Thus the underlying classes of
$\Theta_n$ can be read as oriented diffeomorphism classes.

## Facts & Assumptions

**Given:** Two oriented smooth homotopy $n$-spheres $\Sigma,\Sigma'$ with $n\ge5$.

[A1] Countable choice $\mathrm{AC}_\omega$ is assumed ([[def-countable-choice]]).

[L1] $\Theta_n$ is the group of oriented h-cobordism classes of oriented smooth homotopy $n$-spheres ([[def-theta-n-group-of-oriented-h-cobordism-classes-of-homotopy-spheres]]).

[L2] Assume $\mathrm{AC}_\omega$. A compact connected smooth h-cobordism of dimension at least six between closed simply connected manifolds is diffeomorphic to a product relative to one face ([[thm-smooth-simply-connected-h-cobordism-theorem]]).

## Proof

**Proof technique:** direct.

1.1 If $f:\Sigma\to\Sigma'$ is an orientation-preserving diffeomorphism, the product $\Sigma\times[0,1]$ with the two boundary identifications given by the identity and by $f$ is an oriented h-cobordism from $\Sigma$ to $\Sigma'$, so oriented diffeomorphism implies oriented h-cobordism. [L1, given]

2.1 Conversely, suppose $\Sigma,\Sigma'$ are oriented h-cobordant and let $C$ be a compact oriented h-cobordism between them; then $C$ has dimension $n+1\ge6$, and its boundary faces are the closed simply connected manifolds $\Sigma,\Sigma'$, since both are homotopy spheres. [step 1.1, L1]

3.1 By [L2] and [A1] the cobordism $C$ is diffeomorphic to a product relative to the face $\Sigma$; hence its other face $\Sigma'$ is orientation-preservingly diffeomorphic to $\Sigma$. [step 2.1, L2, A1]

4.1 Combining steps 1.1 and 3.1, oriented h-cobordism and orientation-preserving diffeomorphism define the same equivalence relation on oriented smooth homotopy $n$-spheres, so the classes of $\Theta_n$ are oriented diffeomorphism classes. [step 3.1] ∎
