---
id: thm-milnor-constructed-manifolds-homeomorphic-but-not-diffeomorphic-to-s-seven
kind: theorem
title: "The Milnor sphere $M_{2,-1}$ is homeomorphic but not diffeomorphic to $S^7$"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [cor-milnor-homotopy-seven-spheres-are-homeomorphic-to-s-seven, lem-relative-pontryagin-number-of-the-milnor-disk-bundle-is-controlled-by-h-minus-j, lem-disk-bundle-intersection-form-and-signature-for-xi-h-j, thm-milnor-lambda-invariant-is-well-defined-modulo-seven, def-axiom-of-choice, def-countable-choice]
justified_by: []
aliases: []
landmark: true
dependency_level: 20
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
    - title: "John Milnor, On Manifolds Homeomorphic to the 7-Sphere, Annals of Mathematics 64 (1956), 399-405"
      url: "https://sites.math.rutgers.edu/~feehan/teaching/math866/milnor7sphere.pdf"
      locator: "printed pp. 399-405, Theorems 1-3: the constructed manifolds are homeomorphic to S^7 and the congruence invariant distinguishes them"
    - title: "John Milnor, Lectures on the h-Cobordism Theorem, section 9, printed pp. 109-110"
      url: "https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf"
      locator: "the homeomorphism route through the h-cobordism cylinder"
---

## Statement

Assume the Axiom of Choice and countable choice. The manifold $M_{2,-1}$ is
homeomorphic to $S^7$ but is not diffeomorphic to it. More generally, for
$h+j=1$ the constructed sphere has
$$\lambda(M_{h,j})=(h-j)^2-1\pmod 7,$$
and a nonzero value obstructs a diffeomorphism to the standard sphere even
without a prescribed orientation.

## Facts & Assumptions

**Given:** Integers $h,j$ with $h+j=1$, $k=h-j$, the disk bundle $W_{h,j}=D(\xi_{h,j})$, the sphere bundle $M_{h,j}$, and the standard sphere $S^7$.

[A1] AC and $\mathrm{AC}_\omega$ are assumed ([[def-axiom-of-choice]], [[def-countable-choice]]).

[L1] The relative Pontryagin square of the disk bundle is $q(W_{h,j})=4\varepsilon k^2$ with $\varepsilon=h+j=1$, and the boundary middle form is the rank-one form $[\varepsilon]$ with $\sigma(W_{h,j})=\varepsilon=1$ ([[lem-relative-pontryagin-number-of-the-milnor-disk-bundle-is-controlled-by-h-minus-j]], [[lem-disk-bundle-intersection-form-and-signature-for-xi-h-j]]).

[L2] The invariant $\lambda(M)=2q(W)-\sigma(W)\bmod7$ is well defined for fillings, invariant under orientation-preserving boundary diffeomorphisms and negated by orientation reversal ([[thm-milnor-lambda-invariant-is-well-defined-modulo-seven]]).

[L3] For $h+j=\pm1$ the manifold $M_{h,j}$ is homeomorphic to $S^7$ ([[cor-milnor-homotopy-seven-spheres-are-homeomorphic-to-s-seven]]).

## Proof

**Proof technique:** direct.

1.1 By [L1] and [L2], for $h+j=1$ the filling $W_{h,j}$ gives $\lambda(M_{h,j})=2\cdot4k^2-1=8k^2-1\equiv k^2-1\pmod7$, because $8\equiv1$; in particular for $(h,j)=(2,-1)$ one has $k=3$ and $\lambda(M_{2,-1})\equiv9-1=8\equiv1\pmod7$. [L1, L2, A1]

2.1 The standard sphere $S^7$ bounds the disk $D^8$; for this filling $H^4(D^8,\partial D^8;\mathbb Z)=H^4(D^8;\mathbb Z)=0$, so $q(D^8)=0$ and $\sigma(D^8)=0$, giving $\lambda(S^7)=0$. [step 1.1, L2]

3.1 If there were an orientation-preserving diffeomorphism $M_{2,-1}\to S^7$, [L2] would give $\lambda(M_{2,-1})=\lambda(S^7)=0$, contradicting $\lambda(M_{2,-1})=1$; if the diffeomorphism reversed orientation, [L2] would give $\lambda(M_{2,-1})=-\lambda(S^7)=0$, the same contradiction; hence $M_{2,-1}$ is not diffeomorphic to $S^7$ in either orientation. [step 2.1, L2]

4.1 By [L3] the manifold $M_{2,-1}$ is homeomorphic to $S^7$ because $2+(-1)=1$. [step 3.1, L3]

5.1 Combining steps 3.1 and 4.1, $M_{2,-1}$ is homeomorphic but not diffeomorphic to $S^7$, and for general $h+j=1$ the computation of step 1.1 gives the stated congruence, whose nonzero value is an obstruction as asserted. [step 3.1, step 4.1] ∎
