---
id: lem-s-tower-kills-local-primary-brauer-classes
kind: lemma
title: Cyclotomic S-towers kill local primary Brauer classes
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 11
deps:
  - def-axiom-of-choice
  - def-countable-choice
  - def-dependent-choice
  - cor-cyclotomic-ramification-criterion
  - prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate
  - thm-finite-unramified-local-extensions-classified-by-residue-extensions
  - lem-hensel-factor-lifting-over-a-complete-valued-field
  - lem-local-invariant-restriction-scaling
  - lem-local-unramified-degree-two-cohomology-and-inflation
  - thm-archimedean-brauer-groups-and-invariant-maps
  - lem-finite-galois-obstruction-brauer-cohomology-comparison
proof_strategy: direct
axiom_use: AC, Countable Choice and DC are explicit for completions, local invariants and the supplied cohomology conventions.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: J. S. Milne, Arithmetic Duality Theorems, second edition
      url: https://www.jmilne.org/math/Books/ADTnot.pdf
      locator: I Lemma 4.13, printed pp.59–61. The finite-place local cyclotomic degree argument is supplied below.
verification: {}
---

## Statement

Assume AC, Countable Choice and DC. Let $K$ be a global field, $S$ a set of places containing its archimedean places, and $K_S$ its maximal extension unramified outside $S$. Let $\ell$ be a prime such that all places of $K$ above $\ell$ lie in $S$ in the number-field case, or $\ell\ne\operatorname{char}K$ in the function-field case. For every finite place $v$ of $K$, the $\ell$-valuations of the local degrees $[F_w:K_v]$, as $F$ runs over finite subextensions of $K_S/K$ and $w\mid v$, are unbounded. Consequently every $\ell$-primary class in $H^2(G_{K_v},K_{v,s}^\times)$ becomes zero after restriction to a completion $F_w$ for some finite $F\subset K_S$. At a complex place degree-two cohomology is zero, and at a real place its odd-primary part is zero while its two-primary part is killed by adjoining $i$ when $\ell=2$. This does not claim that $K_S$ has full local separable completion.

## Facts & Assumptions

**Given:** The global field, place set, prime, local completions and explicit choices in the Statement.

[A1] AC, Countable Choice and DC are assumed. [[def-axiom-of-choice]] [[def-countable-choice]] [[def-dependent-choice]]

[F1] Rational cyclotomic extensions are unramified outside their conductor; the prime-power cyclotomic polynomial has degree $\varphi(\ell^j)$ and value $\ell$ at $1$. [[cor-cyclotomic-ramification-criterion]] [[prop-prime-power-cyclotomic-polynomials-and-the-eisenstein-translate]]

[F2] Finite residue extensions lift to unique finite unramified local extensions, and simple roots lift over complete local fields. [[thm-finite-unramified-local-extensions-classified-by-residue-extensions]] [[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F3] Normalized local degree-two invariants identify the group with $\mathbb Q/\mathbb Z$, and restriction along a finite local extension multiplies invariants by its degree. [[lem-local-unramified-degree-two-cohomology-and-inflation]] [[lem-local-invariant-restriction-scaling]]

[F4] The real Brauer group has order two, the complex Brauer group is zero, and finite Galois Brauer comparison identifies them with degree-two cohomology. [[thm-archimedean-brauer-groups-and-invariant-maps]] [[lem-finite-galois-obstruction-brauer-cohomology-comparison]]

## Proof

**Proof technique:** exhibit unbounded local cyclotomic degrees and use the actual invariant restriction formula.

1.1 Put $K_j=K(\mu_{\ell^j})$. In the number-field case, [F1] and stability of unramifiedness under finite base change show that $K_j/K$ is unramified away from the places above $\ell$, hence $K_j\subset K_S$. In positive characteristic the roots of unity of order prime to the characteristic belong to the separable constant field, so $K_j/K$ is a constant extension and is unramified at every finite place. The fields form a nested tower. [F1, given, construct, algebra]

2.1 Fix a finite place $v$ of residue characteristic $p\ne\ell$, with residue cardinality $q$. By [F2], all prime-to-$p$ roots of unity lie in the maximal unramified extension and $[K_v(\mu_{\ell^j}):K_v]$ is the order of $q$ modulo $\ell^j$. These degrees divide $(\ell-1)\ell^{j-1}$ for odd $\ell$, or $2^{j-1}$ for $\ell=2$. If their $\ell$-valuations were bounded, the degrees would be bounded by a fixed integer $B$. Each would divide $B!$, so $q^{B!}\equiv1\pmod{\ell^j}$ for every $j$, impossible because the nonzero integer $q^{B!}-1$ has finite $\ell$-valuation. Hence their $\ell$-valuations are unbounded. [F2, step 1.1, given, algebra]

2.2 Now suppose $p=\ell$, which occurs only for number fields. A finite extension $E/\mathbb Q_\ell$ contains only finitely many $\ell$-power roots of unity. Indeed any such root reduces to $1$. If $\zeta$ is primitive of order $\ell^j$, every $(1-\zeta^a)/(1-\zeta)$ for $\ell\nmid a$ is a unit, since its reduction is $a$; hence all factors in $\Phi_{\ell^j}(1)=\ell$ have the same positive valuation. Thus $\varphi(\ell^j)v_E(1-\zeta)=v_E(\ell)$ by [F1], bounding $j$ because the valuation group is discrete. If the $\ell$-valuations of $[K_v(\mu_{\ell^j}):K_v]$ were bounded, their degrees would be bounded because their prime-to-$\ell$ parts divide $\ell-1$. The nested tower would then stabilize in one finite local extension, contradicting the root bound. Thus the $\ell$-valuations are unbounded here too. [F1, step 1.1, given, algebra]

3.1 A completion of $K_j$ at $v$ contains the corresponding local cyclotomic field, so steps 2.1–2.2 give arbitrarily divisible local degrees inside $K_S$. For any $\ell$-primary class, [F3] identifies its invariant with a rational class killed by some $\ell^a$; choosing local degree divisible by $\ell^a$ makes the restricted invariant zero, and [F3] makes the restricted class zero. At a complex place the group is zero. At a real place the Brauer group has only a $2$-torsion class and $i\in K_S$ when $\ell=2$, so passing to the complex completion kills it. The zero class is included. [F3, F4, step 1.1, step 2.1, step 2.2, choose, algebra] ∎
