---
dependency_level: 2
id: lem-cyclotomic-inverse-twist-transports-characteristic-ideals
kind: lemma
title: Cyclotomic inverse twisting transports characteristic ideals
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- def-iwasawa-characteristic-ideal-over-zp-power-series
- lem-finite-kernel-cokernel-preserve-iwasawa-characteristic-ideal
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: J. Coates and R. Sujatha, The Main Conjecture
    url: https://www.repository.cam.ac.uk/bitstreams/7d2371af-7da1-466f-8ccd-f1c1420ed744/download
    locator: Sections 1–3, completed group algebras, continuous actions and characteristic
      ideals; local reconstruction.
verification: {}
---

## Statement

Assume the Axiom of Choice. Let $p$ be a prime, $R=\mathbb Z_p[[T]]$, and $u\in1+p\mathbb Z_p$. The substitution
$$\tau_u(T)=u(1+T)^{-1}-1$$
defines a continuous involutive $\mathbb Z_p$-algebra automorphism of $R$ for the $(p,T)$-adic topology. For a finitely generated torsion $R$-module $M$, let $M^{\tau_u}$ be its underlying abelian group with scalar action $a\cdot m=\tau_u(a)m$. Then
$$\operatorname{char}_R(M^{\tau_u})=\tau_u(\operatorname{char}_R(M)).$$
Consequently if $M^{\tau_u}\to N$ has finite kernel and cokernel, and $H(T)$ generates $\operatorname{char}_R(M)$, then $H(u(1+T)^{-1}-1)$ generates $\operatorname{char}_R(N)$. The hypothesis of such a homomorphism is not an assertion of the arithmetic Kummer comparison.

## Facts & Assumptions

**Given:** AC, $p$, $u$, $R$, and the module $M$.

[F1] The coefficient and truncation argument for $R$ identifies it with the $(p,T)$-adic completion of $\mathbb Z_p[T]$; it is a Noetherian domain and characteristic ideals are products of height-one primes with local-length exponents. ([[def-iwasawa-characteristic-ideal-over-zp-power-series]])

[F2] Under AC, finite kernel and cokernel preserve the characteristic ideal of finitely generated torsion $R$-modules. ([[lem-finite-kernel-cokernel-preserve-iwasawa-characteristic-ideal]], [[def-axiom-of-choice]])

## Proof

1.1 Put $\mathfrak m=(p,T)$. The series $v=u(1+T)^{-1}-1$ exists, since $(1+T)^{-1}=\sum_{j\ge0}(-T)^j$. Its constant coefficient is $u-1\in p\mathbb Z_p$, so $v\in\mathfrak m$. The polynomial homomorphism fixing $\mathbb Z_p$ and sending $T$ to $v$ sends $\mathfrak m^n$ into $\mathfrak m^n$. Completeness in [F1] extends it uniquely to a continuous ring endomorphism $\tau_u$ of $R$. Explicitly $\tau_u(\sum a_jT^j)=\lim_n\sum_{j<n}a_jv^j$, because the omitted terms lie in $\mathfrak m^n$. This construction uses the maximal-ideal topology, not an unjustified formal substitution with nonzero constant term in the $T$-adic topology. [F1, given, construct, algebra]

2.1 Since $\tau_u$ fixes $u$ and sends units to units, $1+\tau_u(T)=u/(1+T)$ gives $\tau_u^2(T)=u/(1+\tau_u(T))-1=T$. The square also fixes every coefficient in $\mathbb Z_p$. It is the identity on the dense polynomial subring and hence on all of the separated completion. Thus $\tau_u$ is an involutive automorphism. It permutes prime ideals, preserves inclusions, and hence preserves heights. [F1, step 1.1, algebra]

3.1 Twisting preserves finite generation, using the same generators with coefficients transformed by $\tau_u$, and preserves torsion because nonzero annihilators are carried to nonzero annihilators by this automorphism. For a prime $\mathfrak p$, the rule $m/s\mapsto m/\tau_u(s)$ identifies $(M^{\tau_u})_{\mathfrak p}$ with $M_{\tau_u(\mathfrak p)}$, with scalars identified by the local-ring isomorphism $R_{\mathfrak p}\to R_{\tau_u(\mathfrak p)}$ induced by $\tau_u$. It is well defined by the localization relation, and applying the same rule again is its inverse. Submodule chains and simple quotients correspond under this ring/module isomorphism, so their composition lengths agree. [F1, step 2.1, construct, algebra]

4.1 The exponent of a height-one prime $\mathfrak p$ in $\operatorname{char}_R(M^{\tau_u})$ is therefore the exponent of $\tau_u(\mathfrak p)$ in $\operatorname{char}_R(M)$. Since $\tau_u$ is involutive, applying it to the finite product in [F1] gives exactly $\operatorname{char}_R(M^{\tau_u})$. If the displayed finite-kernel/cokernel map to $N$ exists, [F2] identifies that ideal with $\operatorname{char}_R(N)$. Finally a ring automorphism sends the principal ideal $(H)$ to $(\tau_u(H))$, and step 1.1 gives precisely the stated substitution formula. No arithmetic map, torsion theorem or main-conjecture equality has been used. [F1, F2, step 1.1, step 2.1, step 3.1, algebra] ∎
