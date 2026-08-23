---
id: thm-the-compact-hausdorff-and-ultrafilter-algebra-constructions-are-inverse
kind: theorem
title: "Under the ultrafilter lemma, compact Hausdorff spaces and ultrafilter algebras are recovered by the two limit constructions"
status: published
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [lem-the-limit-map-of-a-compact-hausdorff-space-is-an-ultrafilter-algebra, lem-a-continuous-map-of-compact-hausdorff-spaces-is-an-ultrafilter-algebra-homomorphism, lem-an-ultrafilter-algebra-determines-a-compact-hausdorff-topology, lem-an-ultrafilter-algebra-map-is-the-unique-ultrafilter-limit, def-topology-induced-by-an-ultrafilter-algebra, def-continuous-map-top, def-ultrafilter-extension-principle]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
  audited: 2026-08-24
sources:
  scraped: []
  references:
    - title: "J. Goubault-Larrecq, Algebras of filter-related monads: I. Ultrafilters and Manes' theorem"
      url: "https://topology.lmf.cnrs.fr/algebras-of-the-filter-related-monads-i-ultrafilters-and-manes-theorem/"
    - title: "E. Riehl, Category Theory in Context, 2nd ed., Corollary 5.5.6"
      url: "https://emilyriehl.github.io/files/context.pdf"
pipeline_run: null
---

## Statement

Assume UL/BPI. The following constructions are inverse on objects and morphisms:

1. a compact Hausdorff space $X$ is sent to the ultrafilter algebra whose structure map takes each ultrafilter to its unique limit;
2. an ultrafilter algebra $\xi:\beta X\to X$ is sent to its induced compact Hausdorff topology.

In particular, rebuilding the algebra recovers $\xi$, rebuilding the topology recovers the original topology, continuous maps are algebra homomorphisms, and algebra homomorphisms are continuous. Thus the two concrete categories are isomorphic over $\mathbf{Set}$.

## Facts & Assumptions

**Given:** UL/BPI, the limit-algebra construction on compact Hausdorff spaces, and the induced-topology construction on ultrafilter algebras.

[L1] The ultrafilter-limit map of a compact Hausdorff space is an algebra for the ultrafilter monad ([[lem-the-limit-map-of-a-compact-hausdorff-space-is-an-ultrafilter-algebra]]).

[L2] Under UL/BPI, an ultrafilter algebra maps each ultrafilter to its unique limit in the induced topology ([[lem-an-ultrafilter-algebra-map-is-the-unique-ultrafilter-limit]]).

[L3] Every continuous map of compact Hausdorff spaces is an ultrafilter-algebra homomorphism ([[lem-a-continuous-map-of-compact-hausdorff-spaces-is-an-ultrafilter-algebra-homomorphism]]).

[L4] Under UL/BPI, the topology induced by an ultrafilter algebra $\xi:\beta X\to X$ is compact and Hausdorff ([[lem-an-ultrafilter-algebra-determines-a-compact-hausdorff-topology]]).

## Proof

**Proof technique:** direct.

1.1 Starting with an algebra $\xi$, [L4] makes its induced topology compact Hausdorff, so the limit construction of clause 1 applies to it, and [L2] says that the unique-limit map of that topology is exactly $\xi$. Thus the algebra is recovered on the nose, including on an empty or singleton carrier. [L2, L4]

1.2 Starting with a compact Hausdorff topology $\tau$, every $\tau$-open set is open for the limit algebra because a convergent ultrafilter contains each neighbourhood of its limit. Conversely, if $O$ is not a $\tau$-neighbourhood of some $x\in O$, the neighbourhood filter at $x$ together with $X\setminus O$ has the finite-intersection property; UL/BPI extends it to an ultrafilter converging to $x$ but not containing $O$, contradicting induced openness. Hence the rebuilt topology is exactly $\tau$. [L1, construct]

1.3 The forward morphism direction is [L3]: every continuous map preserves unique ultrafilter limits and is an algebra homomorphism. [L3]

1.4 Conversely, let $f:(X,\xi_X)\to(Y,\xi_Y)$ be an algebra homomorphism. If $O$ is induced-open in $Y$ and $\xi_X(\mathcal U)\in f^{-1}[O]$, then $\xi_Y(\beta f(\mathcal U))=f(\xi_X(\mathcal U))\in O$, so $O\in\beta f(\mathcal U)$ and hence $f^{-1}[O]\in\mathcal U$. Thus every preimage of an induced-open set is induced-open, and $f$ is continuous. [L2, construct]

2.1 Steps 1.1 and 1.2 recover both object structures, while steps 1.3 and 1.4 identify both morphism classes. The assignments therefore define inverse functors over $\mathbf{Set}$. [step 1.1, step 1.2, step 1.3, step 1.4] ∎
