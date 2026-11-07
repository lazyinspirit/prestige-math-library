---
id: lem-smooth-proper-curve-r1-prime-to-characteristic-is-lisse
kind: lemma
title: "Prime-to-characteristic first cohomology of a smooth proper curve family is lisse"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 17
deps:
  - def-axiom-of-choice
  - lem-proper-torsion-base-change-under-choice
  - lem-proper-torsion-constructibility-under-choice
  - thm-specialization-of-etale-pi1-under-geometric-hypotheses
  - thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets
  - lem-finite-constructible-bijective-specialization-is-lisse
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the proper cohomology and specialization suppliers."
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "SGA 1, Exposé X, smooth proper specialization of the étale fundamental group"
      url: "https://arxiv.org/pdf/math/0206203"
      locator: "Exposé X, Theorem 3.8 and Corollary 3.9; the R¹ consequence is reconstructed below."
verification: {}
---

## Statement

Assume AC. Let $k$ be algebraically closed, let $S$ be a finite-type $k$-scheme, and let $f:C\to S$ be smooth and proper with geometrically connected nonempty curve fibres. Let $\ell\ne\operatorname{char}k$ be prime and let $r\geq1$. Then $R^1f_*\underline{\mathbb Z/\ell^r\mathbb Z}$ on $S_{\mathrm{et}}$ is a finite locally constant sheaf of $\mathbb Z/\ell^r\mathbb Z$-modules, and its formation commutes with every base change. No claim about cohomology of a punctured curve family is made.

## Facts & Assumptions

**Given:** The algebraically closed field, finite-type base, smooth proper connected curve family, prime and exponent in the Statement.

[A1] The Axiom of Choice is assumed. [[def-axiom-of-choice]]

[F1] Proper torsion cohomology commutes with arbitrary base change. [[lem-proper-torsion-base-change-under-choice]]

[F2] Higher direct images of finite constructible torsion sheaves under proper maps of Noetherian schemes are finite constructible. [[lem-proper-torsion-constructibility-under-choice]]

[F3] Under smooth proper specialization, the maximal prime-to-residue-characteristic quotients of the geometric fundamental groups are isomorphic, with the stated compatible geometric-point choices. [[thm-specialization-of-etale-pi1-under-geometric-hypotheses]]

[F4] Finite étale covers of a connected scheme correspond to finite continuous actions of its étale fundamental group. [[thm-finite-etale-covers-equivalent-to-finite-continuous-pi1-sets]]

[F5] A finite constructible étale module sheaf with bijective geometric specialization maps is finite locally constant. [[lem-finite-constructible-bijective-specialization-is-lisse]]

## Proof

**Proof technique:** identify stalk specializations with homomorphisms from the specialized fundamental groups.

1.1 Put $A=\mathbb Z/\ell^r\mathbb Z$ and $E=R^1f_*\underline A$. The base $S$ is Noetherian. The constant finite sheaf $\underline A$ is constructible, so [F2] makes $E$ finite constructible. For any geometric point $\bar s$ of $S$, [F1] identifies $E_{\bar s}$ with $H^1(C_{\bar s},\underline A)$, compatibly with geometric specialization and arbitrary base change. [A1, F1, F2, given, algebra]

2.1 On a connected geometric fibre, $H^1(C_{\bar s},\underline A)$ classifies $A$-torsors: a cocycle glues a finite étale torsor and local sections of a torsor give its cocycle. By [F4], choosing a geometric basepoint identifies these torsors with continuous homomorphisms $\pi_1^{\mathrm{et}}(C_{\bar s})\to A$. For any geometric specialization in $S$, [F3] gives an isomorphism of the maximal prime-to-$\operatorname{char}k$ quotients, and every homomorphism to the $\ell$-group $A$ factors through those quotients. Hence the specialization map on these $H^1$ groups is bijective. Changes of fibre-functor path conjugate the fundamental-group map but do not change a homomorphism into the abelian group $A$. [A1, F3, F4, step 1.1, choose, construct, algebra]

3.1 Every geometric specialization map of the finite constructible sheaf $E$ is therefore bijective. By [F5], $E$ is finite locally constant as an $A$-module sheaf. The arbitrary base-change assertion is exactly [F1], applied in degree one. The argument does not use an open-curve compactification and makes no assertion about its boundary. [F1, F5, step 1.1, step 2.1, algebra] ∎
