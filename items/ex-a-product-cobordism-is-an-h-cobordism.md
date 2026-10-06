---
id: ex-a-product-cobordism-is-an-h-cobordism
kind: example
title: A product cobordism is an h-cobordism
status: draft
origin: pipeline
pipeline_run: frontier-41-ha-dt-29
dependency_level: 3
deps:
- def-h-cobordism
- def-retraction-and-deformation-retract
- lem-product-cobordisms-have-critical-point-free-presentations
- def-countable-choice
- lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends
- thm-smooth-simply-connected-h-cobordism-theorem
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
  - title: John Milnor, Lectures on the h-Cobordism Theorem (notes by L. Siebenmann and J. Sondow, Princeton University Press 1965; scanned edition with searchable text layer)
    url: https://www.maths.ed.ac.uk/~v1ranick/surgery/hcobord.pdf
    locator: Introduction and §§1--9, printed pp. 1--113; Concluding Remarks, printed pp. 113--114
  - title: Wolfgang Lück, A Basic Introduction to Surgery Theory (ICTP lecture notes, 27 October 2004; complete author text)
    url: https://him-lueck.uni-bonn.de/data/ictp.pdf
    locator: Chapter 1, printed pp. 1--22 (§§1.1--1.5)
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---
## Example

Assume $\mathrm{AC}_\omega$ ([[def-countable-choice]]). Let $M_0$ be a closed smooth $n$-manifold with $n\ge1$ and let $W=M_0\times[0,1]$ with faces
$M_0\times\{0\}$ and $M_0\times\{1\}$. Then
$(W;M_0\times\{0\},M_0\times\{1\})$ is an h-cobordism: the maps
$W\to M_0\times\{i\}$, $(x,t)\mapsto(x,i)$, are retractions and the linear
homotopies $(x,t)\mapsto(x,(1-s)t+si)$ are deformation retractions fixing
$M_0\times\{i\}$ pointwise, so both inclusions are homotopy equivalences. Its
handle decomposition relative to $M_0\times\{0\}$ is empty, its relative
homology vanishes in all degrees, and if $M_0$ is simply connected with $n\ge5$
the h-cobordism theorem returns exactly this product.

## Facts & Assumptions

**Given:** Countable choice and a closed smooth $n$-manifold $M_0$ with $n\ge1$, its product $W=M_0\times[0,1]$ with the two faces $M_0\times\{0\}$ and $M_0\times\{1\}$, and the inclusions $\iota_0:M_0\times\{0\}\hookrightarrow W$, $\iota_1:M_0\times\{1\}\hookrightarrow W$.

[F1] A retraction of $X$ onto $A$ is a continuous $r:X\to A$ with $r\circ i=\operatorname{id}_A$, equivalently $r(a)=a$ on $A$; $A$ is a deformation retract when in addition there is a homotopy $H:\operatorname{id}_X\simeq_A i\circ r$ fixing $A$ pointwise ([[def-retraction-and-deformation-retract]]).

[F2] A compact smooth cobordism triad is an h-cobordism when both face inclusions are homotopy equivalences ([[def-h-cobordism]]).

[F3] For a compact boundaryless smooth manifold $M$ the product $W=M\times[0,1]$ has the empty handle decomposition relative to $M\times\{0\}$: the projection $W\to[0,1]$ is an adapted Morse function without critical points and $W$ is diffeomorphic to the collar $M_0\times[0,1]$, no handle being attached ([[lem-product-cobordisms-have-critical-point-free-presentations]]).

## Verification

**Proof technique:** direct.

1.1 The projections $r_i:W\to M_0\times\{i\}$, $r_i(x,t)=(x,i)$, are continuous and satisfy $r_i(\iota_i(x))=r_i(x,i)=(x,i)=\iota_i(x)$ for every $x\in M_0$, so by [F1] each $r_i$ is a retraction onto the corresponding face. [F1, given]

1.2 Read the product presentation through [F3]: $W$ has the empty handle list relative to $M_0\times\{0\}$, and no handle is attached. [F3, given]

2.1 The linear homotopy $H_s(x,t)=(x,(1-s)t+si)$ is continuous with $H_0=\operatorname{id}_W$ and $H_1=\iota_i\circ r_i$, and it satisfies $H_s(x,i)=(x,i)$ for all $s$; hence by [F1] each face is a deformation retract of $W$, in particular each inclusion is a homotopy equivalence with homotopy inverse $r_i$. The product is a compact smooth triad with its product collars and dimension $n+1\ge2$, so by [F2] the triad $(W;M_0\times\{0\},M_0\times\{1\})$ is an h-cobordism. [F1, F2, step 1.1]

3.1 The relative homology now vanishes by [[lem-relative-homology-of-an-h-cobordism-vanishes-at-both-ends]], applied to step 2.1. Therefore the product cobordism has an empty presentation and vanishing relative homology; when $M_0$ is simply connected of dimension $n\ge5$, the later h-cobordism theorem applied to this h-cobordism returns precisely the product it started from, so the product is the trivial model that the theorem's conclusion describes. [step 1.2, step 2.1] ∎
