---
id: lem-stabilization-of-a-framed-submanifold-suspends-the-pontryagin-thom-map
kind: lemma
title: "Stabilizing a framed submanifold suspends its Pontryagin-Thom map"
status: published
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 8
deps:
  - lem-based-and-free-homotopy-classes-of-sphere-maps-agree
  - lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map
  - def-stabilized-framed-cobordism-colimit
  - thm-pontryagin-thom-correspondence-in-fixed-codimension
  - prop-a-framing-identifies-the-thom-target-with-a-sphere-smash-product
  - def-pontryagin-thom-map-of-a-framed-submanifold
  - lem-stabilizing-a-normal-bundle-suspends-its-thom-space
  - def-reduced-cone-suspension-and-cofiber-sequence
  - prop-loop-suspension-adjunction-on-based-homotopy-classes
  - def-smash-product-of-based-spaces
  - prop-smash-product-is-associative-symmetric-and-unital-up-to-the-canonical-homeomorphisms
  - def-suspension-prespectrum-and-sphere-prespectrum
  - def-stable-stem-of-the-sphere
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Daniel S. Freed, Bordism: Old and New (lecture notes, UT Austin, Fall 2012)"
      url: "https://people.math.harvard.edu/~dafr/bordism.pdf"
      locator: "(4.42)-(4.43): the equator inclusion and prepending $\\partial/\\partial x_1$ to the framing, printed p.36"
    - title: "Andrew Ranicki, Algebraic and Geometric Surgery (Oxford Mathematical Monographs, 2002)"
      url: "https://math.uchicago.edu/~shmuel/tom-readings/ranicki-intro"
      locator: "Proposition 6.18(i): the equatorial sphere with its standard framing, electronic pp.115-116"
    - title: "J. P. May, A Concise Course in Algebraic Topology"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "Chapter 23, section 5, printed pp.194-196"
---

## Statement

Assume $\mathrm{AC}_\omega$. For $d\ge0$, $k\ge1$, equatorial stabilization of a closed framed $d$-submanifold $(N,\varphi)$ of $S^{d+k}$ satisfies
$$\mathrm{PT}(\sigma(N,\varphi))=E(\mathrm{PT}(N,\varphi))\in\pi_{d+k+1}(S^{k+1}).$$
The new equatorial normal is prepended, agreeing with the new first smash coordinate in the sphere-prespectrum convention. Thus the levelwise bijections intertwine stabilization and suspension.

## Facts & Assumptions

**Given:** $(N,\varphi)$ as above, its equatorial stabilization, and the suspension map $E$.

[F1] The stabilized framing prepends the chosen equatorial normal, and stabilization respects framed cobordism ([[def-stabilized-framed-cobordism-colimit]]).

[F2] The sphere-prespectrum bonding map uses $S^1\wedge S^k\cong S^{k+1}$ with the new coordinate first ([[def-suspension-prespectrum-and-sphere-prespectrum]], [[def-stable-stem-of-the-sphere]]). Smash products and their coherence are [[def-smash-product-of-based-spaces]] and [[prop-smash-product-is-associative-symmetric-and-unital-up-to-the-canonical-homeomorphisms]].

[F3] The normalized collapse is smooth, constant off a small tube, and has its given framing as centre differential ([[def-pontryagin-thom-map-of-a-framed-submanifold]]). A continuous sphere-valued map smooth near a regular fibre is homotopic to the collapse of that framed fibre ([[lem-collapse-after-regular-preimage-is-homotopic-to-the-original-map]]).

[F4] The fixed-codimension correspondence and the based/free identification are [[thm-pontryagin-thom-correspondence-in-fixed-codimension]] and [[lem-based-and-free-homotopy-classes-of-sphere-maps-agree]].

## Proof

1.1 Choose a point outside $N$, possible because a positive-codimension submanifold has empty interior. A plane-rotation path can move that point to the chosen sphere basepoint; transporting $N$ and its framing along this path gives a framed cobordism (flatten the time at its ends). Thus we may choose a representative avoiding the basepoint. Take its tube small enough to avoid that point too. Its collapse $f$ is then based on $S^n$ itself, $n=d+k$, and constant on a neighbourhood of its basepoint, with $f^{-1}(y_0)=N$ and centre differential $\varphi$. [F1, F3, F4, construct]

2.1 Write the sphere complements as $\mathbb R^n$ and $\mathbb R^k$, choosing an equatorial stereographic chart of the next sphere in which the equator is $\{0\}\times\mathbb R^n$ and the chosen new normal points in the positive first coordinate. The smash $S^1\wedge S^n$ is the one-point compactification of $\mathbb R\times\mathbb R^n$: the quotient of the compact product of the two one-point compactifications has exactly this open complement of its collapsed wedge, and its neighbourhoods at the collapsed point have compact complements. Under this identification $\mathrm{id}_{S^1}\wedge f$ is $$F(t,x)=(t,z(f(x)))\quad(f(x)\ne\infty),\qquad F(t,x)=\infty\quad(f(x)=\infty).$$ It is continuous by the smash quotient, represents $E[f]$, and near its centre fibre it is smooth. Its centre preimage is exactly $\{0\}\times N$, with normal differential $(a,v)\mapsto(a,\varphi(v))$, the prepended framing of [F1]. This is a statement about the class, not an assertion that a radial stabilized tube collapse equals a suspension pointwise. [F1, F2, F3, step 1.1, construct]

3.1 By the continuous local-smooth version of [F3], $F$ is homotopic to the collapse of its framed centre preimage, namely $\sigma(N,\varphi)$. Hence its free class is $\mathrm{PT}(\sigma(N,\varphi))$, and [F4] identifies the corresponding based classes. Since $[F]=E[f]$, the desired identity follows. Both constructions respect classes, so it gives a map of directed systems. [F3, F4, step 2.1] ∎
