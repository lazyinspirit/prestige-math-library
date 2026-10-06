---
id: thm-mod-two-morse-differential-squares-to-zero
kind: theorem
title: "The mod-two Morse differential squares to zero"
status: draft
origin: pipeline
deps: [def-axiom-of-choice, thm-choice-implies-dependent-implies-countable-choice, def-countable-choice, def-mod-two-morse-differential, def-mod-two-morse-chain-group, thm-index-two-compactification-is-a-compact-one-manifold-with-boundary, lem-breaking-length-is-bounded-by-index-drop, lem-boundary-of-a-compact-one-manifold-has-even-cardinality, cor-no-morse-smale-trajectories-for-nonpositive-index-drop, def-chain-complex-in-an-abelian-category, def-integers-modulo-n, def-morse-smale-pair]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: literature-derived
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Michele Audin and Mihai Damian, Morse Theory and Floer Homology, Part I Ch. 3, complete author PDF"
      url: "https://audin.pages.math.unistra.fr/livres/audin-damian-en.pdf"
      locator: "Ch. 3 Sec. 3.1.b and Sec. 3.2.c, printed pp. 56-57 and 64 (why $\\partial_X^2=0$)"
    - title: "Alexander F. Ritter, Part III Morse Homology (Cambridge lecture notes), Lectures 17-19, complete combined PDF"
      url: "https://people.maths.ox.ac.uk/ritter/morse-cambridge/combined.pdf"
      locator: "Lecture 19 Sec. 6.1 (the $\\partial^2=0$ computation on the torus and in general)"
dependency_level: 6
---

## Statement

Assume the Axiom of Choice. Let $(f,X)$ be Morse--Smale on a closed manifold. Then $\partial_{k-1}\circ\partial_k=0$ for every $k$ ([[def-mod-two-morse-differential]]). Equivalently, $(CM_*(f,X;\mathbb Z/2),\partial)$ is a chain complex over $\mathbb Z/2$ ([[def-chain-complex-in-an-abelian-category]]) and its homology is the mod-two Morse homology of $(f,X)$.

## Facts & Assumptions

**Given:** A Morse--Smale pair $(f,X)$ on a closed manifold, the Axiom of Choice, and an integer $k$.

[A1] The Axiom of Choice; the boundary parity lemma [F3] and the finiteness underlying [F1] are supplied through it, together with $\mathrm{AC}_\omega$ via the bridge ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F1] On a basis element $p\in\operatorname{Crit}_k(f)$ the differential is $\partial_kp=\sum_q n_2(p,q)q$ with $n_2(p,q)=\#\mathcal M(p,q)\bmod2$, and each $\mathcal M(p,q)$ with index drop one is finite; coefficients are computed in $\mathbb Z/2$ ([[def-mod-two-morse-differential]], [[def-mod-two-morse-chain-group]], [[def-integers-modulo-n]]).

[F2] For $\lambda(p)-\lambda(q)=2$ the compactification $\overline{\mathcal M}(p,q)$ is a compact $1$-manifold with boundary whose boundary is the disjoint union of the products $\mathcal M(p,r)\times\mathcal M(r,q)$ over critical points $r$ of index $\lambda(p)-1$; in index drop two every broken trajectory of length at least two is once-broken ([[thm-index-two-compactification-is-a-compact-one-manifold-with-boundary]], [[lem-breaking-length-is-bounded-by-index-drop]]).

[F3] Under $\mathrm{AC}_\omega$ the boundary of a compact smooth $1$-manifold has even cardinality ([[lem-boundary-of-a-compact-one-manifold-has-even-cardinality]]).

[F4] There are no Morse--Smale trajectories with nonpositive index drop, so a product $\mathcal M(p,r)\times\mathcal M(r,q)$ is empty whenever one of the two index drops is nonpositive ([[cor-no-morse-smale-trajectories-for-nonpositive-index-drop]], [[def-morse-smale-pair]]).

[F5] A chain complex in an abelian category is a graded family of objects with degree $-1$ endomorphisms squaring to zero; for $\mathbb Z/2$-modules this is the stated complex over $\mathbb Z/2$ ([[def-chain-complex-in-an-abelian-category]]).

## Proof

**Proof technique:** direct.

1.1 Let $p\in\operatorname{Crit}_k(f)$ and $q\in\operatorname{Crit}_{k-2}(f)$. Expanding the definition, the coefficient of $q$ in $\partial_{k-1}(\partial_kp)$ is the sum over $r\in\operatorname{Crit}_{k-1}(f)$ of the products $n_2(p,r)\,n_2(r,q)$ in $\mathbb Z/2$; both index drops here are equal to one, so both factors are parities of finite cardinalities by [F1], and the product of the two parities is the parity of the cardinality of the product $\mathcal M(p,r)\times\mathcal M(r,q)$. Hence the coefficient equals the parity of the cardinality of the finite disjoint union $\bigsqcup_{r\in\operatorname{Crit}_{k-1}(f)}\mathcal M(p,r)\times\mathcal M(r,q)$. [F1, F4, algebra]

2.1 Here $\lambda(p)-\lambda(q)=2$, so by [F2] the disjoint union of step 1.1 is exactly the boundary of the compact $1$-manifold with boundary $\overline{\mathcal M}(p,q)$; hence the coefficient of $q$ in $\partial^2p$ is $\#\partial\overline{\mathcal M}(p,q)\bmod2$. For any critical point $q'$ that is not of index $k-2$, the coefficient of $q'$ in $\partial^2p$ is zero because $\partial_{k-1}$ takes values in $CM_{k-2}(f,X;\mathbb Z/2)$, whose basis is $\operatorname{Crit}_{k-2}(f)$. [F2, step 1.1]

3.1 By [F3] the boundary of the compact $1$-manifold $\overline{\mathcal M}(p,q)$ has even cardinality, so the coefficient of every $q$ of index $k-2$ in $\partial^2p$ vanishes in $\mathbb Z/2$; by step 2.1 all other coefficients vanish as well. Hence $\partial_{k-1}\circ\partial_k=0$ on basis elements, and therefore on all of $CM_k(f,X;\mathbb Z/2)$ by linearity. [A1, F3, step 2.1]

4.1 Since this holds for every $k$, the pair $(CM_*(f,X;\mathbb Z/2),\partial)$ satisfies the defining condition of a chain complex in the abelian category of $\mathbb Z/2$-modules by [F5]; its homology is the mod-two Morse homology of $(f,X)$ by definition. [F5, step 3.1] ∎
