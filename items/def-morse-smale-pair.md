---
id: def-morse-smale-pair
kind: definition
title: "Morse--Smale pairs"
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: not-applicable
deps: [def-downward-gradient-like-vector-field, def-stable-and-unstable-sets-of-a-critical-point, thm-global-stable-and-unstable-manifolds-are-immersed-euclidean-spaces, def-transverse-smooth-maps]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-06
sources:
  references:
    - title: "Michèle Audin and Mihai Damian, Morse Theory and Floer Homology, §2.2"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
---

## Definition

Let $f:M\to\mathbb R$ be Morse and let $X$ be a complete downward gradient-like field. The pair $(f,X)$ is **Morse--Smale** if every unstable manifold $W^u(p)$ is transverse to every stable manifold $W^s(q)$, for critical points $p,q$.

The **metric version** also applies to any smooth Riemannian metric $g$ for which $X=-\operatorname{grad}_g f$ is complete. Here $W^u(p)$ and $W^s(p)$ mean the backward- and forward-limit manifolds of this negative-gradient flow, respectively, and $(f,g)$ is Morse--Smale when all these intersections are transverse. This metric version does not require $X$ to have the exact normalized Morse-coordinate form in the downward-gradient-like definition. Completeness is automatic on a closed manifold. In both versions an empty intersection is transverse vacuously.
