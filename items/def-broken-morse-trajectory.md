---
id: def-broken-morse-trajectory
kind: definition
title: "Broken Morse trajectories"
status: published
origin: pipeline
deps: [def-morse-smale-pair, def-parametrized-morse-trajectory-space, def-unparametrized-morse-trajectory-moduli-space, lem-broken-morse-trajectories-have-strictly-decreasing-critical-values-and-indices, cor-no-morse-smale-trajectories-for-nonpositive-index-drop, def-nondegenerate-critical-point-nullity-index-and-coindex]
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
      locator: "Ch. 3 Sec. 3.2.a, printed pp. 59-61 (space of broken trajectories)"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes), Lectures 17-19, complete combined PDF"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 18 Sec. 5.4 (definition of broken flowline)"
    - title: "Ralph L. Cohen, Bundles, Manifolds, and Homotopy, Ch. 13 and Appendix A, complete author PDF"
      url: "https://math.stanford.edu/~ralph/bookR4.pdf"
      locator: "Ch. 13 Sec. 13.4, printed pp. 519-521 (piecewise flow lines)"
dependency_level: 0
---

## Definition

Let $(f,X)$ be a Morse--Smale pair on a closed manifold $M$ ([[def-morse-smale-pair]]) and let $p,q$ be critical points. A **broken Morse trajectory from $p$ to $q$** is a finite sequence $(\gamma_1,\dots,\gamma_r)$, $r\ge1$, together with critical points $p=p_0,p_1,\dots,p_r=q$, such that $\gamma_i\in\widetilde{\mathcal M}(p_{i-1},p_i)$ for every $i$ ([[def-parametrized-morse-trajectory-space]]); $r$ is its **length** and $p_1,\dots,p_{r-1}$ its **intermediate critical points**. The set of all broken trajectories from $p$ to $q$ is written $\overline{\mathcal M}(p,q)$; a broken trajectory of length $r=1$ is an ordinary trajectory, so $\mathcal M(p,q)\subseteq\overline{\mathcal M}(p,q)$ under the orbit-set identification ([[def-unparametrized-morse-trajectory-moduli-space]]), and a broken trajectory of length $r=2$ is called **once-broken**. The components are nonconstant, the intermediate points strictly decrease in value and in index, and $r\le\lambda(p)-\lambda(q)$, by [[lem-broken-morse-trajectories-have-strictly-decreasing-critical-values-and-indices]]; in particular $p_i\ne p_{i+1}$ is automatic, and $\overline{\mathcal M}(p,q)=\mathcal M(p,q)$ whenever $\lambda(p)-\lambda(q)=1$.

Two strings that differ only by a time translation of one of the components
represent the same broken trajectory: each $\gamma_i$ is a parametrized
representative of a point of the orbit set $\mathcal M(p_{i-1},p_i)$, and
$\overline{\mathcal M}(p,q)$ is the set of strings of such orbit classes, read
through the orbit-set identification of
[[def-unparametrized-morse-trajectory-moduli-space]]. The published symbol
$\widetilde{\mathcal M}(p_{i-1},p_i)$ is defined for distinct critical points;
consecutive critical points of a broken trajectory are distinct precisely
because every component is nonconstant.

The strict decrease is the published statement of
[[lem-broken-morse-trajectories-have-strictly-decreasing-critical-values-and-indices]]
applied to the string of nonconstant components; a single nonconstant component
drops the index by at least one, which is also the content of
[[cor-no-morse-smale-trajectories-for-nonpositive-index-drop]], and iterating
the drops gives $r\le\lambda(p)-\lambda(q)$. Here $\lambda$ is the Morse index
of [[def-nondegenerate-critical-point-nullity-index-and-coindex]]. If
$\lambda(p)\le\lambda(q)$ no string of nonconstant components can exist, so
$\overline{\mathcal M}(p,q)=\varnothing$ — in particular the case $p=q$ is
empty — and for $\lambda(p)-\lambda(q)=1$ the only possible length is $r=1$,
whence $\overline{\mathcal M}(p,q)=\mathcal M(p,q)$. No compactness,
finiteness, orientation or topology is asserted here.
