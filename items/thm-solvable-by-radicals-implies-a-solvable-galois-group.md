---
id: thm-solvable-by-radicals-implies-a-solvable-galois-group
kind: theorem
title: "In characteristic $0$, a polynomial solvable by radicals has a solvable Galois group"
status: draft
origin: session
provenance:
  statement: literature-derived
  proof: ai-altered
deps: [def-solvable-by-radicals, lem-normal-closure-of-a-radical-extension-is-radical, lem-adjoining-roots-of-unity-to-a-galois-extension-adds-an-abelian-kernel, thm-cyclic-degree-n-extensions-with-roots-of-unity-are-kummer, thm-subgroups-and-quotients-of-solvable-groups-are-solvable, thm-extensions-and-direct-products-of-solvable-groups-are-solvable]
aliases: []
landmark: true
proof_strategy: direct
verification:
  precheck: pass
sources:
  scraped: []
  references:
    - title: "J. S. Milne, Fields and Galois Theory, v5.10, Theorem 5.34"
      url: "https://www.jmilne.org/math/CourseNotes/FT.pdf"
    - title: "J. Ash, Basic Abstract Algebra, Sections 6.8.2-6.8.4"
      url: "https://faculty.math.illinois.edu/~r-ash/Algebra.html"
pipeline_run: null
---

## Statement

Let $F$ be a field of characteristic $0$, and let $f\in F[x]$ be nonzero. If
$f$ is solvable by radicals, then the Galois group of its splitting field over
$F$ is a solvable group.

## Facts & Assumptions

**Given:** A polynomial $f\in F[x]$ of characteristic $0$ that is solvable by radicals, with splitting field $E/F$.

[F1] Solvable by radicals means that $E$ lies inside some radical extension of $F$ ([[def-solvable-by-radicals]]).

[L1] The normal closure of a radical extension is radical ([[lem-normal-closure-of-a-radical-extension-is-radical]]).

[L2] Adjoining roots of unity to a finite Galois extension adds an abelian kernel and preserves solvability of the Galois group ([[lem-adjoining-roots-of-unity-to-a-galois-extension-adds-an-abelian-kernel]]).

[L3] Subgroups, quotients, and extensions of solvable groups are solvable ([[thm-subgroups-and-quotients-of-solvable-groups-are-solvable]], [[thm-extensions-and-direct-products-of-solvable-groups-are-solvable]]).

## Proof

**Proof technique:** direct.

1.1 By [F1], choose a finite radical extension $L/F$ with $E\subseteq L$. Replacing $L$ by its normal closure over $F$, [L1] lets us assume from the start that $L/F$ is finite Galois and radical. [F1, L1, choose]

2.1 Let the radical tower for $L/F$ use exponents $m_1,\dots,m_r$, and let $N=m_1\cdots m_r$. Adjoin $\mu_N$ to $L$. By [L2], solvability of $\operatorname{Gal}(L/F)$ is equivalent to solvability of $\operatorname{Gal}(L(\mu_N)/F)$. So it is enough to prove the latter solvable. [step 1.1, L2]

3.1 After adjoining $\mu_N$, every step of the radical tower becomes a finite Galois extension with cyclic Galois group: if $F_i=F_{i-1}(\alpha_i)$ with $\alpha_i^{m_i}\in F_{i-1}$, then the enlarged lower field already contains $\mu_{m_i}$, so every root of $x^{m_i}-\alpha_i^{m_i}$ is $\zeta\alpha_i$ with $\zeta\in\mu_{m_i}$. Thus $F_i(\mu_N)/F_{i-1}(\mu_N)$ is the splitting field of a separable polynomial, and every automorphism is determined by $\alpha_i\mapsto\zeta\alpha_i$, so its Galois group embeds in the cyclic group $\mu_{m_i}$. In particular each step has solvable Galois group, and repeated use of [L3] up the tower makes $\operatorname{Gal}(L(\mu_N)/F(\mu_N))$ solvable. [step 2.1, L3, algebra]

4.1 The cyclotomic extension $F(\mu_N)/F$ has abelian Galois group, hence solvable. Applying [L3] once more to the tower $$F\subseteq F(\mu_N)\subseteq L(\mu_N)$$ shows that $\operatorname{Gal}(L(\mu_N)/F)$ is solvable. By step 2.1 the same is true of $\operatorname{Gal}(L/F)$. [step 3.1, L2, L3]

5.1 The splitting field $E$ is an intermediate field of the finite Galois extension $L/F$, so $\operatorname{Gal}(E/F)$ is a quotient of a subgroup of $\operatorname{Gal}(L/F)$. Therefore [L3] makes $\operatorname{Gal}(E/F)$ solvable. [step 4.1, L3] ∎
