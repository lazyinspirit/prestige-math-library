---
id: ex-extending-a-degree-zero-natural-transformation
kind: example
title: "Extending a degree-zero natural transformation"
status: published
origin: session
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
deps: [lem-extend-a-degree-zero-transformation-through-one-dimension-shift, lem-the-effacement-extension-is-independent-of-the-effacing-morphism, lem-the-effacement-extension-commutes-with-connecting-morphisms, thm-derived-functors-are-universal-delta-functors]
proof_strategy: direct
verification:
  audited: 2026-09-05
  precheck: pass
sources:
  scraped: []
  references:
    - title: "Alexandre Grothendieck, Some aspects of homological algebra (Barr translation)"
      url: "https://ncatlab.org/nlab/files/BarrTranslOf-GrothedieckTohoku.pdf"
    - title: "Charles A. Weibel, An Introduction to Homological Algebra, Chapter 2 `Derived Functors`"
      url: "https://math.mit.edu/~hrm/palestine/weibel/02-derived_functors.pdf"
pipeline_run: frontier-30
---

## Example

Let $S=(S_n,\partial^S)$ be a homological delta functor, let
$T=(T_n,\partial^T)$ be an effaceable homological delta functor, and let
$u_0:S_0\Rightarrow T_0$ be a natural transformation. For an object $A$, choose
an effacement
$$0\to K\to P\xrightarrow{p}A\to0$$
with $T_1(p)=0$. Then the degree-one component of the universal extension is
the unique map
$$u_1(A):S_1(A)\to T_1(A)$$
satisfying
$$\partial_1^T\,u_1(A)=u_0(K)\,\partial_1^S,$$
and this map is independent of the chosen effacement and compatible with the
connecting morphisms.
## Facts & Assumptions

**Given:** A degree-zero natural transformation $u_0:S_0\Rightarrow T_0$ and a
chosen effacement of one object $A$.

[L1] One dimension shift defines the next-degree component from the chosen
effacement
([[lem-extend-a-degree-zero-transformation-through-one-dimension-shift]]).

[L2] The resulting component is independent of the effacing morphism and
commutes with connecting maps
([[lem-the-effacement-extension-is-independent-of-the-effacing-morphism]],
[[lem-the-effacement-extension-commutes-with-connecting-morphisms]]).

[L3] Derived-functor universality is built from exactly this extension
mechanism
([[thm-derived-functors-are-universal-delta-functors]]).

## Verification

**Proof technique:** direct.

1.1 The defining equation for $u_1(A)$ is exactly the homological case of [L1] with $n=1$. [L1, given]

2.1 Item [L2] removes dependence on the chosen effacement and supplies the required compatibility with connecting morphisms, so the map from step 1.1 is the correct first higher component of the universal extension. This is the degree-one pattern used abstractly in [L3]. [L2, L3, step 1.1] ∎