---
id: def-mod-two-morse-chain-group
kind: definition
title: "The mod-two Morse chain group"
status: draft
origin: pipeline
deps: [def-downward-gradient-like-vector-field, def-morse-function-and-excellent-morse-function, def-nondegenerate-critical-point-nullity-index-and-coindex, def-integers-modulo-n, thm-z-mod-p-is-a-field, def-left-and-right-modules, def-free-module-on-a-set-and-standard-basis, cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Ch. 3, complete author PDF"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.1, printed pp. 55-57 (definition of $C_k(f)$)"
    - title: "Liviu I. Nicolaescu, An Invitation to Morse Theory, 2nd ed., complete PDF"
      url: "https://www3.nd.edu/~lnicolae/Morse2nd.pdf"
      locator: "Sec. 2.5, printed pp. 60-61 (relative chain groups)"
dependency_level: 0
---

## Definition

Let $f:M\to\mathbb R$ be a Morse function on a closed manifold and let $X$ be a downward gradient-like field for $f$ ([[def-downward-gradient-like-vector-field]], [[def-morse-function-and-excellent-morse-function]]), and let $\operatorname{Crit}_k(f)$ be the set of critical points of index $k$ ([[def-nondegenerate-critical-point-nullity-index-and-coindex]]). The **mod-two Morse chain group** $CM_k(f,X;\mathbb Z/2)$ is the free $\mathbb Z/2$-module with basis $\operatorname{Crit}_k(f)$ ([[def-integers-modulo-n]], [[def-left-and-right-modules]]): its elements are the formal sums $\sum_{p\in\operatorname{Crit}_k(f)}a_p\,p$ with $a_p\in\mathbb Z/2$, added coefficientwise. It is well defined because a Morse function on a closed manifold has finitely many critical points ([[cor-a-morse-function-on-a-compact-manifold-has-finitely-many-critical-points]]), and $CM_k(f,X;\mathbb Z/2)=0$ unless $0\le k\le\dim M$. The notation records $X$ although the group depends only on $f$; no orientation of $M$ or of any unstable manifold is used.

Concretely, $\mathbb Z/2$ is the field $\mathbb F_2$
([[thm-z-mod-p-is-a-field]]), and the free module on the set
$\operatorname{Crit}_k(f)$ is the direct sum $\bigoplus_{p\in\operatorname{Crit}_k(f)}\mathbb Z/2$ of
[[def-free-module-on-a-set-and-standard-basis]]: its elements are the
coefficient functions $a:\operatorname{Crit}_k(f)\to\mathbb Z/2$, added
pointwise and scaled by the unique $\mathbb Z/2$-action, the basis element $p$
corresponding to the standard basis vector $e_p$. When
$\operatorname{Crit}_k(f)$ is empty this direct sum is the zero module; when it
has $m$ elements the group has $2^m$ elements.

The index of a critical point of a Morse function on an $n$-manifold lies in
$\{0,1,\dots,n\}$ ([[def-nondegenerate-critical-point-nullity-index-and-coindex]]),
so $\operatorname{Crit}_k(f)$ is empty outside that range and the chain group
vanishes there. The set $\operatorname{Crit}_k(f)$ and hence the group depend
only on $f$, not on the vector field $X$; the symbol $X$ is retained because the
differential defined on these groups will use the trajectories of $X$.
