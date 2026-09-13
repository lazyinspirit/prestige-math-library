---
id: ex-trivial-principal-bundle-corresponds-to-a-nullhomotopic-classifying-map
kind: example
title: The trivial principal bundle has a nullhomotopic classifying map
status: draft
origin: pipeline
deps: ["thm-principal-bundles-are-classified-by-maps-to-bg", "def-milnor-infinite-join-model-of-eg"]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-13
sources:
  references:
    - title: Dale Husemoller, Fibre Bundles, Third Edition
      url: https://link.springer.com/book/10.1007/978-1-4757-2261-1
      locator: Chapter 4, Corollary 8.3 and Theorems 9.9 and 12.2--12.5, printed pages 48--58
---

## Claim

Assume AC. Let $G$ be a well-pointed topological group of CW type and let
$X$ be a CGWH space. Under the classification of numerable principal
$G$-bundles over $X$, the product bundle $X\times G\to X$ corresponds to the
constant homotopy class in $[X,BG]$. Consequently a numerable principal
$G$-bundle over $X$ is trivial if and only if its classifying map is
nullhomotopic.

## Facts & Assumptions

[F1] Assuming AC, for $G$ well-pointed of CW type and $X$ CGWH, pullback
along homotopic maps gives isomorphic numerable principal bundles, and
pullback gives a bijection from $[X,BG]$ to their isomorphism classes
([[thm-principal-bundles-are-classified-by-maps-to-bg]]).

[F2] The fiber of $EG\to BG$ over $b_0$ is the right $G$-torsor $\{e_0g:g\in G\}$ ([[def-milnor-infinite-join-model-of-eg]]).

## Verification

**Given:** AC, $G$ and $X$ as in the Claim, and the constant map
$c:X\to BG$ with value $b_0$.

1.1 The constant pullback has total space [F2]

$$ c^*EG=\{(x,e):p(e)=b_0\}\longrightarrow X $$

is equivariantly isomorphic to $X\times G$ by $(x,g)\mapsto(x,e_0g)$. Thus the constant homotopy class maps to the trivial bundle. [F2]

2.1 If $f$ is nullhomotopic, [F1] gives $f^*EG\cong c^*EG$, so its pullback is trivial. Conversely, if $f^*EG$ is trivial, then it has the same bundle class as $c^*EG$; injectivity of the classification bijection gives $[f]=[c]$. This proves both directions, including disconnected $X$ because the constant map uses the same based orbit on every component. $\square$ [F1, step 1.1]
