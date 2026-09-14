---
id: def-frame-bundle-and-associated-vector-bundle
kind: definition
title: Frame bundles and associated vector bundles
status: draft
origin: pipeline
deps: [def-real-and-complex-topological-vector-bundle, def-vector-bundle-map-section-subbundle-and-isomorphism, def-principal-g-bundle-and-associated-fiber-bundle, prop-associated-bundle-is-locally-trivial-and-functorial-under-pullback]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  precheck: pass
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "MIT 18.906 notes, Lectures 16 and 18"
      url: https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf
      locator: "Frames, principalization, and associated bundles, printed pp.53–61"
    - title: "Hatcher, Vector Bundles & K-Theory, §1.1"
      url: https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf
      locator: "Linear charts and frames, printed pp.6–13"
---

## Definition

For a rank-$n$ $\mathbb F$-vector bundle $E\to X$, its **frame bundle**
$\operatorname{Fr}(E)$ has fiber

$$\operatorname{Fr}(E)_x=\{u:\mathbb F^n\xrightarrow{\cong}E_x \text{ linear}\}.$$

Its right action is precomposition, $u\cdot g=u\circ g$. A linear bundle
chart identifies the frames with
$U\times\operatorname{GL}_n(\mathbb F)$ and the action with right
multiplication, so $\operatorname{Fr}(E)$ is a principal bundle as in
[[def-principal-g-bundle-and-associated-fiber-bundle]].

Conversely, for a right principal $\operatorname{GL}_n(\mathbb F)$-bundle
$P\to X$, let the group act on $\mathbb F^n$ on the left by its standard
representation. The associated bundle

$$P\times_{\operatorname{GL}_n(\mathbb F)}\mathbb F^n$$

is a locally trivial bundle with fiber $\mathbb F^n$ by
[[prop-associated-bundle-is-locally-trivial-and-functorial-under-pullback]].
On the fiber over $x$, choose $p\in P_x$ and set
$$[p,v]+[p,w]=[p,v+w],\qquad a[p,v]=[p,av].$$
Changing $p$ to $pg$ replaces $v,w$ by $g^{-1}v,g^{-1}w$, so these operations
are well-defined because $g$ is linear. The associated local trivializations
restrict to linear isomorphisms on fibers. Thus this is a rank-$n$ vector
bundle in the sense of [[def-real-and-complex-topological-vector-bundle]].
Evaluation

$$[u,v]\longmapsto u(v)$$

is well-defined because $(u\cdot g)(v)=u(gv)$, and it gives a canonical
isomorphism
$\operatorname{Fr}(E)\times_{\operatorname{GL}_n(\mathbb F)}
\mathbb F^n\cong E$. These constructions commute with pullback.
A linear chart numeration induces the same support-subordinate numeration on
the frame bundle and conversely. For $n=0$ the structure group and every frame
fiber are singletons.
