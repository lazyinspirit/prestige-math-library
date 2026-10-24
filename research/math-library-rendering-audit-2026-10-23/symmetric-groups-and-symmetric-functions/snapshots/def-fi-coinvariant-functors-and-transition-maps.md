---
id: def-fi-coinvariant-functors-and-transition-maps
kind: definition
title: "The coinvariant functors $\\Phi_a$ and the transition maps $T$"
status: published
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 1
deps: [def-fi-category-and-fi-module,
       def-coinvariants-functor-of-a-group-module,
       def-module-homomorphism-kernel-image-and-cokernel,
       def-submodule,
       def-quotient-module,
       def-tensor-product-of-modules-by-generators-and-relations,
       prop-the-coinvariants-functor-is-right-exact,
       def-group-ring,
       thm-group-ring-is-a-unital-algebra-with-basis-g]
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: not-applicable
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-11
sources:
  references:
    - title: "Thomas Church, Jordan S. Ellenberg and Benson Farb, “FI-modules and stability for representations of symmetric groups”, arXiv:1204.4533v4 (2014); published in Duke Math. J. 164 (2015) 1833–1910"
      url: "https://arxiv.org/pdf/1204.4533"
      locator: "Definitions 3.1.1 and 3.1.2 with the well-definedness paragraph for $T$, printed pp. 16–17: the coinvariant quotient $(V_{a\\sqcup n})_{S_n}$, the choice-independence of $T$ under post-composition by $S_{n+1}$, and “$\\Phi_a$ is always right exact; when $k$ contains $\\mathbb Q$ it is exact”"
    - title: "Thomas Church, Jordan S. Ellenberg, Benson Farb and Rohit Nagpal, “FI-modules over Noetherian rings”, Geom. Topol. 18 (2014) 2951–2984; author-hosted full text"
      url: "https://www.math.uchicago.edu/~farb/papers/FImodNoetherian.pdf"
      locator: "Definition 2.4 and Lemma 2.5, printed p. 10: the same coinvariant quotient in the $H_0$ notation, with $H_0(V)=0$ implying $V=0$"
---

## Definition

A **graded $k[T]$-module** consists of $k$-modules $U_n$, $n\ge0$, together
with $k$-linear maps $T=T_n\colon U_n\to U_{n+1}$ for all $n\ge0$. A
**morphism** $U\to U'$ of graded $k[T]$-modules is a family of $k$-linear maps
$u_n\colon U_n\to U'_n$ with $u_{n+1}\circ T_n=T'_n\circ u_n$ for all $n$.

Fix $a\ge0$, a set $\mathbf a$ of cardinality $a$, and a functorial disjoint
union of finite sets. Let $V$ be an FI-module over $k$
([[def-fi-category-and-fi-module]]) and let $n\ge0$. Put

$$\Phi_a(V)_n:=(V_{\mathbf a\sqcup n})_{S_n},$$

the coinvariants of the $kS_n$-module $V_{\mathbf a\sqcup n}$: the quotient by
the span of the elements $\sigma\cdot v-v$, $\sigma\in S_n$, $v\in
V_{\mathbf a\sqcup n}$ ([[def-coinvariants-functor-of-a-group-module]],
[[def-quotient-module]]). Equivalently $\Phi_a(V)_n=k\otimes_{kS_n}
V_{\mathbf a\sqcup n}$, the two descriptions being identified by the balancing
argument of [[def-tensor-product-of-modules-by-generators-and-relations]] and
the corresponding identification for $\mathbb Z$ in
[[def-coinvariants-functor-of-a-group-module]]; the group ring $kS_n$ is a
unital $k$-algebra with basis the group elements
([[def-group-ring]], [[thm-group-ring-is-a-unital-algebra-with-basis-g]]).

To define the transition map $T\colon\Phi_a(V)_n\to\Phi_a(V)_{n+1}$, choose an
injection $f\colon n\to n+1$. It induces the injection
$\mathrm{id}_{\mathbf a}\sqcup f\colon\mathbf a\sqcup n\to\mathbf a\sqcup n+1$
and hence a $k$-linear map $(V_{\mathbf a\sqcup n}\to
V_{\mathbf a\sqcup n+1})$. This map is $S_n$-equivariant, where $S_n$ acts on
the target through the injection $\mathrm{id}_{\mathbf a}\sqcup f$, so it
descends to the quotient map $T=T_f$ on coinvariants. The map $T_f$ is
independent of $f$: for two injections $f,g\colon n\to n+1$ the composite
$g\circ f^{-1}$ is a bijection $f(n)\to g(n)$, which extends along the
complement to a permutation $\tau\in S_{n+1}$ with $g=\tau\circ f$; then
$\mathrm{id}_{\mathbf a}\sqcup g=(\mathrm{id}_{\mathbf a}\sqcup
\tau)\circ(\mathrm{id}_{\mathbf a}\sqcup f)$, and the map induced by
$\mathrm{id}_{\mathbf a}\sqcup\tau$ on
$(V_{\mathbf a\sqcup n+1})_{S_{n+1}}$ is the identity because it comes from
the action of the group element $\tau$. Thus $T$ is well defined and
$(\Phi_a(V),T)$ is a graded $k[T]$-module.

A map of FI-modules $\alpha\colon V\to W$ gives $k$-linear maps
$\alpha_{\mathbf a\sqcup n}\colon V_{\mathbf a\sqcup n}\to W_{\mathbf
a\sqcup n}$ commuting with the $S_n$-actions and with the maps induced by
$\mathrm{id}_{\mathbf a}\sqcup f$, hence maps $(\Phi_a\alpha)_n$ of coinvariants
commuting with $T$; so $\Phi_a$ is a functor from FI-modules over $k$ to graded
$k[T]$-modules.

Permutations of $\mathbf a$ commute with the moving-block action of $S_n$,
so $\Phi_a(V)_n$ also carries an $S_a$-action. Since
$\mathrm{id}_{\mathbf a}\sqcup f$ commutes with these permutations, every $T$
is $S_a$-equivariant. Naturality has the same equivariance.

**Exactness.** Coinvariants of a group module are right exact
([[prop-the-coinvariants-functor-is-right-exact]]), so the functor
$M\mapsto M_{S_n}\cong k\otimes_{kS_n}M$ is right exact and each $\Phi_a$ is
right exact in every degree. If $k$ contains $\mathbb Q$, then $1/n!$ exists in $k$
and the averaging map
$s\colon\Phi_a(V)_n\to V_{\mathbf a\sqcup n}$,
$s([v])=\frac1{n!}\sum_{\sigma\in S_n}\sigma\cdot v$, is a well-defined
$k$-linear section of the quotient map that is natural in $V$; it identifies
$\Phi_a(V)_n$ with the invariants $V_{\mathbf a\sqcup n}^{S_n}$. Under this
natural identification $\Phi_a$ becomes the invariants functor, which is left
exact (kernels of equivariant maps are computed pointwise), and therefore
$\Phi_a$ is exact; in that case the induced map $\Phi_a(W)\to\Phi_a(V)$ is
injective for every sub-FI-module $W\subseteq V$
([[def-submodule]], [[def-module-homomorphism-kernel-image-and-cokernel]]), so
$\Phi_a(W)$ is identified with a submodule of $\Phi_a(V)$. Finite averaging
uses only the finite groups $S_n$; no choice principle is used.
