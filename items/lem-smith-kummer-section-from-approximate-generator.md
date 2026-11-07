---
id: lem-smith-kummer-section-from-approximate-generator
kind: lemma
title: "Natural ramification sections from Kummer approximate generators"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 9
deps: [def-number-field, def-axiom-of-choice, def-countable-choice, def-dependent-choice, lem-kummer-cohomology-of-roots-of-unity, thm-shapiro-lemma-for-group-cohomology, thm-tame-inertia-structure-and-frobenius-action]
justified_by: []
proof_strategy: direct
axiom_use: >-
  AC, Countable Choice, and DC are inherited from the global-field, Shapiro,
  and local tame-inertia interfaces. No existence of approximate generators
  or ramification sections is inferred without the explicitly given input.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "A. Smith, The Distribution of ℓ∞-Selmer Groups in Degree ℓ Twist Families I, Proposition 3.9 and Definition 3.10"
      url: "https://arxiv.org/pdf/2207.05674"
      locator: "§3, Proposition 3.9 and the construction following Definition 3.10"
verification: {}
---

## Statement

Assume AC, Countable Choice, and DC. Let $K/F$ be a finite Galois extension of number fields, let $e\ge2$ with $\mu_e\subseteq K$, and let $V_0$ contain the archimedean places, the places dividing $e$, and the places ramified in $K/F$. Fix a finite place $v\notin V_0$, a place $\mathfrak P$ of $K$ above it, its decomposition group $D\le\operatorname{Gal}(K/F)$, and $E=K^D$. Put $\mathfrak p=\mathfrak P\cap E$.

Suppose given $\alpha\in E^\times$ such that $v_{\mathfrak p}(\alpha)\equiv1\pmod e$ and $v_w(\alpha)\equiv0\pmod e$ at every other finite place $w$ of $E$ not above $V_0$. For every finite $\operatorname{Gal}(K/F)$-module $M$ killed by $e$, put $M(-1)=\operatorname{Hom}(\mu_e,M)$. Then the inertia-restriction map from global classes unramified outside $V_0\cup\{v\}$ has a natural section
$$B_{v,M}:M(-1)^D\longrightarrow H^1(G_F,M),$$
whose values are unramified outside $V_0\cup\{v\}$ and whose inertia restriction at $\mathfrak P$ is the input element. Naturality means $f_*B_{v,M}(m)=B_{v,M'}(f\circ m)$ for every equivariant $f:M\to M'$.

If another place $v'$ has the same subgroup $D$ and field $E$, and a corresponding approximate generator $\alpha'$ has the same valuation properties and satisfies $\alpha/\alpha'\in(E_w^\times)^e$ for every $w$ of $E$ above $V_0$, the two section values have the same restriction to $G_{F,u}$ at every $u\in V_0$ after the given identifications. The statement assumes the displayed generators and does not assert that they exist or that grid symbols are invariant.

## Statement references

[[lem-kummer-cohomology-of-roots-of-unity]]

[[thm-shapiro-lemma-for-group-cohomology]]

[[thm-tame-inertia-structure-and-frobenius-action]]

[Smith, *The Distribution of $\ell^\infty$-Selmer Groups in Degree $\ell$ Twist Families I*, Proposition 3.9 and Definition 3.10](https://arxiv.org/pdf/2207.05674)

## Facts & Assumptions

**Given:** The number fields, finite set of places, integer $e$, decomposition group, and approximate generator data in the Statement.

[F1] For every characteristic-zero field, Kummer theory identifies $H^1(-,\mu_e)$ with the multiplicative group modulo $e$th powers. [[lem-kummer-cohomology-of-roots-of-unity]]

[F2] The finite-index Shapiro construction identifies cohomology of an induced module with cohomology over the subgroup and is natural in the coefficient module. [[thm-shapiro-lemma-for-group-cohomology]]

[F3] Outside places dividing $e$, inertia modulo wild inertia has the tame character and Frobenius acts by the residue-field cardinality. [[thm-tame-inertia-structure-and-frobenius-action]]

## Proof

1.1 Let $U=\operatorname{Ind}_{G_E}^{G_F}\mu_e$. Since $\mu_e\subseteq K$ and $G_K\subseteq G_E$, $U$ is a finite $\operatorname{Gal}(K/F)$-module killed by $e$. The decomposition group at $v$ maps onto $D$ and is contained in $G_E$. Because $M$ and $\mu_e$ are trivial on $G_K$, their homomorphism space has the same invariants under $G_E$ and under the chosen local decomposition group. Induction–restriction adjunction therefore gives a natural isomorphism $$\operatorname{Hom}_{G_F}(U,M)\cong\operatorname{Hom}(\mu_e,M)^D=M(-1)^D.$$ Denote by $m_0$ the element corresponding to the identity of $U$. [F2, given, construct, algebra]

2.1 Under Kummer and Shapiro, $\alpha$ determines a class $\phi_\alpha\in H^1(G_F,U)$. At every finite place outside $V_0\cup\{v\}$, all valuations of $\alpha$ above that place are multiples of $e$, so its local Kummer character is unramified: the unit part has separable residue equation because the residue characteristic does not divide $e$. At $v$, local Shapiro decomposes the induced cohomology over the primes of $E$ above $v$; the valuation at $\mathfrak p$ is $1$ modulo $e$ and at the other such primes is $0$ modulo $e$. The tame inertia character in [F3] therefore sends the inertia restriction of $\phi_\alpha$ to $m_0$, using the chosen compatible inertia and root-of-unity normalizations. [F1, F2, F3, step 1.1, given, algebra]

3.1 For $m\in M(-1)^D$, let $\rho_m:U\to M$ be the unique equivariant homomorphism corresponding to $m$ in step 1.1, and define $B_{v,M}(m)=(\rho_m)_*\phi_\alpha$. Since $m\mapsto\rho_m$ is additive, this is a homomorphism. Functoriality of restriction and step 2.1 show that its inertia restriction is $\rho_m(m_0)=m$, and it remains unramified away from $V_0\cup\{v\}$. For an equivariant $f:M\to M'$, the morphism corresponding to $f\circ m$ is $f\circ\rho_m$, which proves the stated naturality. The continuous finite-index Shapiro cochain construction preserves continuity because its coset set is finite. [F2, step 1.1, step 2.1, construct, algebra]

4.1 Suppose $v'$ and $\alpha'$ have the additional properties in the Statement. Local Kummer identifies the difference of their classes over every $E_w$, $w\mid u\in V_0$, with the class of $\alpha/\alpha'$ modulo $e$th powers; it is zero by hypothesis. The local Shapiro decomposition gives identical restrictions of $\phi_\alpha$ and $\phi_{\alpha'}$ to $G_{F,u}$. Applying the same $\rho_m$ shows equality of the two section values at $u$. No choice of approximate generators or comparison of grid symbols is asserted. [F1, F2, step 3.1, given, algebra] ∎
