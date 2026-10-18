---
id: prop-gauge-transformations-induce-associated-bundle-automorphisms
kind: proposition
title: Gauge transformations induce associated bundle automorphisms
status: published
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 2
axiom_base: "ZF. The induced maps are defined pointwise and checked in supplied local charts; no choice family is selected."
deps:
  - def-smooth-principal-g-bundle
  - def-gauge-group-of-a-smooth-principal-bundle
  - def-associated-bundle-to-a-principal-bundle-and-representation
  - thm-associated-vector-bundle-is-well-defined
  - def-vector-bundle-map-over-a-smooth-base-map
  - def-smooth-section-local-section-and-support
  - prop-smooth-sections-form-a-module-over-smooth-functions
  - prop-identity-maps-and-composites-of-smooth-maps-are-smooth
  - def-group
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: "Karl-Hermann Neeb, Differential Topology of Fiber Bundles (lecture notes, 2024)"
      url: "https://www.math.fau.de/wp-content/uploads/2024/01/bundle-lect.pdf"
      locator: "Chapter 1, §1.6, Lemma 1.6.2 and Example 1.6.4, printed pp. 14–15 (PDF pp. 17–18): induced automorphism of an associated bundle and its action on smooth sections."
    - title: "D. Husemöller, M. Joachim, B. Jurčo, and M. Schottenloher, Basic Bundle Theory and K-Cohomology Invariants"
      url: "https://www.mathematik.uni-muenchen.de/~schotten/Texte/978-3-540-74955-4_Book_LNP726corr1.pdf"
      locator: "Part I, Chapter 5, §5.6, Definition 6.1 and Proposition 6.2, printed p. 62 (PDF p. 77), gauge automorphisms and their associated-bundle description."
    - title: "Matthijs Vákár, Principal Bundles and Gauge Theories"
      url: "https://arxiv.org/pdf/2110.06334"
      locator: "Chapter 2, §2.1, printed pp. 53–54 (PDF pp. 52–53), gauge transformations as principal-bundle automorphisms over the identity."
---

## Statement

Let $G$ be a finite-dimensional real Lie group, let $P\to M$ be a smooth right
principal $G$-bundle, let $V$ be a finite-dimensional real vector space, and
let $\rho:G\to\operatorname{GL}(V)$ be a smooth representation, where
$\operatorname{GL}(V)$ is the group of invertible linear maps $V\to V$. Write
$\mathcal G(P)$ for the gauge group of
[[def-gauge-group-of-a-smooth-principal-bundle]]. Put
$E_\rho:=P\times_\rho V$ for the associated smooth vector bundle of
[[def-associated-bundle-to-a-principal-bundle-and-representation]] and
[[thm-associated-vector-bundle-is-well-defined]]. For every
$\Phi\in\mathcal G(P)$ define
$$\overline\Phi:E_\rho\to E_\rho,\qquad [p,v]\longmapsto[\Phi(p),v].$$
Here a smooth vector-bundle automorphism means a smooth fibrewise-linear
diffeomorphism covering $\operatorname{id}_M$. The map $\overline\Phi$ is such
an automorphism, and
$$\overline{\Phi\circ\Psi}=\overline\Phi\circ\overline\Psi,\qquad \overline{\operatorname{id}_P}=\operatorname{id}_{E_\rho}.$$
Thus $\Phi\mapsto\overline\Phi$ is a group homomorphism to the group of smooth
vector-bundle automorphisms of $E_\rho$. If $\Gamma^\infty(E_\rho)$ denotes
the smooth sections as in
[[def-smooth-section-local-section-and-support]], then
$$\Phi\cdot s:=\overline\Phi\circ s$$
is a linear left action of $\mathcal G(P)$ on $\Gamma^\infty(E_\rho)$. No
injectivity or surjectivity of either induced action is asserted.

The square below records the quotient descent, where $q:P\times V\to E_\rho$
is the orbit projection. It commutes because $\Phi$ is $G$-equivariant; the
pointwise verification appears in step 1.1.

```tikzcd
P \times V \arrow[r, "\Phi \times \mathrm{id}_V"] \arrow[d, "q"'] & P \times V \arrow[d, "q"] \\
E_\rho \arrow[r, "\overline{\Phi}"'] & E_\rho
```

## Facts & Assumptions

**Given:** A smooth right principal $G$-bundle $\pi:P\to M$, a smooth finite-dimensional representation $\rho:G\to\operatorname{GL}(V)$, its associated smooth vector bundle $E_\rho$, and a gauge transformation $\Phi\in\mathcal G(P)$.

[F1] [[def-gauge-group-of-a-smooth-principal-bundle]]: $\Phi$ is a smooth diffeomorphism with $\pi\circ\Phi=\pi$ and $\Phi(pg)=\Phi(p)g$; these maps form a group under composition.

[L1] [[def-smooth-principal-g-bundle]]: over a principal chart, each $p\in P$ has a unique smooth group coordinate $g$ in $p=s(\pi(p))g$.

[F2] [[def-associated-bundle-to-a-principal-bundle-and-representation]]: $E_\rho$ is the quotient with relation $[pg,v]=[p,\rho(g)v]$.

[F3] [[thm-associated-vector-bundle-is-well-defined]]: a smooth principal section gives an associated vector-bundle chart $[s(x),v]\leftrightarrow(x,v)$, and these charts define the smooth vector-bundle structure.

[F4] [[def-vector-bundle-map-over-a-smooth-base-map]]: a smooth vector-bundle map over $f$ is smooth, covers $f$, and is linear on each fibre.

[F5] [[def-smooth-section-local-section-and-support]]: a smooth section $s$ is a smooth map with bundle projection composed with $s$ equal to the identity.

[F6] [[prop-smooth-sections-form-a-module-over-smooth-functions]]: smooth sections are closed under pointwise addition and multiplication by smooth functions, hence form a real vector space.

[F7] [[prop-identity-maps-and-composites-of-smooth-maps-are-smooth]]: composites of smooth maps are smooth.

## Proof

1.1 If $[pg,v]=[p,\rho(g)v]$, then $[\Phi(pg),v]=[\Phi(p)g,v]=[\Phi(p),\rho(g)v]$ by [F1] and [F2]; hence the formula is representative-independent, and $\pi(\Phi(p))=\pi(p)$ shows that it covers $\operatorname{id}_M$. The displayed square commutes on each $(p,v)$. [F1, F2, given]

2.1 Let $s:U\to P$ be any local section from a smooth principal chart. The unique $a_s:U\to G$ with $\Phi(s(x))=s(x)a_s(x)$ exists by [L1] and is smooth, since it is the group coordinate of $\Phi\circ s$. In the associated chart from [F3], $\overline\Phi(x,v)=(x,\rho(a_s(x))v)$, which is smooth and fibrewise linear; the same calculation for $\Phi^{-1}$ proves that $\overline{\Phi^{-1}}$ is smooth. [F1, F3, F4, F7, L1, step 1.1]

3.1 For every $[p,v]\in E_\rho$, $\overline\Phi(\overline\Psi([p,v]))=[\Phi(\Psi(p)),v]=\overline{\Phi\circ\Psi}([p,v])$, and $\overline{\operatorname{id}_P}=\operatorname{id}_{E_\rho}$. Taking $\Psi=\Phi^{-1}$ shows that $\overline{\Phi^{-1}}$ is the inverse of $\overline\Phi$; thus $\overline\Phi$ is a smooth bundle automorphism and the assignment preserves composition. [F1, step 2.1, algebra]

4.1 For $s\in\Gamma^\infty(E_\rho)$, $\overline\Phi\circ s$ is smooth by [F7] and step 2.1, and it is a section because $\overline\Phi$ covers $\operatorname{id}_M$. Fibrewise linearity makes this assignment linear on the real vector space [F6] of smooth sections; [F1] and step 3.1 give identity and composition, so these maps form a linear left action of $\mathcal G(P)$. [F1, F5, F6, F7, step 2.1, step 3.1] ∎
