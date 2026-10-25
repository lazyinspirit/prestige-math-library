---
id: def-mod-two-morse-differential
kind: definition
title: "The mod-two Morse differential"
status: published
origin: pipeline
deps: [def-axiom-of-choice, def-mod-two-morse-chain-group, cor-index-one-trajectory-moduli-spaces-are-finite, prop-index-one-trajectory-spaces-are-zero-dimensional, def-unparametrized-morse-trajectory-moduli-space, cor-no-morse-smale-trajectories-for-nonpositive-index-drop, def-morse-smale-pair, def-nondegenerate-critical-point-nullity-index-and-coindex, def-integers-modulo-n]
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
      locator: "Ch. 3 Sec. 3.1.a, printed pp. 56-57 (definition of $\\partial_X$ modulo 2)"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes), Lectures 17-19, complete combined PDF"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 19 Sec. 6.1 (definition of the mod-two Morse differential)"
dependency_level: 5
---

## Definition

Let $(f,X)$ be Morse--Smale on a closed manifold and $k\in\mathbb Z$. The **mod-two Morse differential** is the $\mathbb Z/2$-linear map $\partial_k:CM_k(f,X;\mathbb Z/2)\to CM_{k-1}(f,X;\mathbb Z/2)$ ([[def-mod-two-morse-chain-group]]) defined on a basis element $p\in\operatorname{Crit}_k(f)$ by
$$\partial_k p:=\sum_{q\in\operatorname{Crit}_{k-1}(f)} n_2(p,q)\,q,\qquad n_2(p,q):=\#\mathcal M(p,q)\bmod 2\in\mathbb Z/2,$$
and extended linearly. Each sum is finite by [[cor-index-one-trajectory-moduli-spaces-are-finite]], and the prescribed degree $-1$ restricts the sum to critical points of index $k-1$, so the definition does not depend on any enumeration order. It uses no orientation data.

The objects entering the definition are the finite free module
$CM_k(f,X;\mathbb Z/2)$ of [[def-mod-two-morse-chain-group]] and the
unparametrized moduli spaces of [[def-unparametrized-morse-trajectory-moduli-space]].
For $q\in\operatorname{Crit}_{k-1}(f)$ the index drop is
$\lambda(p)-\lambda(q)=1$, so $\mathcal M(p,q)$ is a zero-dimensional discrete
manifold ([[prop-index-one-trajectory-spaces-are-zero-dimensional]]) and is
finite by [[cor-index-one-trajectory-moduli-spaces-are-finite]]; its cardinality
modulo two is therefore an element of $\mathbb Z/2$
([[def-integers-modulo-n]]). Trajectories of larger positive index drop may exist, but they are not counted by this degree-one differential. The critical set is finite, so only
finitely many coefficients are nonzero; hence $\partial_k p$ is a well-defined
element of $CM_{k-1}(f,X;\mathbb Z/2)$. A $\mathbb Z/2$-linear map out of a free
module is determined by its values on a basis, so the linear extension to
$CM_k(f,X;\mathbb Z/2)$ is unique.

**Choice hypothesis.** The finiteness input
[[cor-index-one-trajectory-moduli-spaces-are-finite]] is proved under the Axiom
of Choice ([[def-axiom-of-choice]]), and the present definition inherits that
hypothesis; no orientation of $M$ or of any unstable manifold is used, so the
differential is independent of the orientation choices used for the integral
theory.
