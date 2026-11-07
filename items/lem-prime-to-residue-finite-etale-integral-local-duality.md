---
id: lem-prime-to-residue-finite-etale-integral-local-duality
kind: lemma
title: "Integral local duality for prime-to-residue finite étale groups"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 19
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-finite-flat-group-scheme-and-cartier-dual
  - def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings
  - thm-finite-etale-coefficients-have-etale-fppf-cohomology-comparison
  - lem-finite-flat-torsors-over-a-henselian-dvr-extend-generic-sections
  - lem-finite-flat-groups-over-henselian-dvr-have-zero-higher-cohomology
  - lem-henselian-finite-residue-brauer-completion-and-support-trace
  - lem-henselian-completion-finite-etale-and-finite-module-tate-comparison
  - lem-tame-dvr-inertia-and-abhyankar-ramification-killing
justified_by: []
proof_strategy: direct
axiom_use: "AC and DC are explicit in the actual recorded completion, generic duality, residue and finite ramification constructions."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "I Theorem 2.6, printed pp. 30–31, and III Lemma 1.1, printed pp. 232–233; finite counting proof reconstructed locally."
verification: {}
---

## Statement

Assume AC and DC. Let $R$ be a Henselian discrete valuation ring with finite residue field $k$ of characteristic $p$ and characteristic-zero fraction field $K$. Let $N$ and its Cartier dual $N^D$ be commutative finite étale $R$-group schemes of order prime to $p$. Then their integral $H^1$ subgroups are exact mutual annihilators in the normalized generic local Tate pairing. The evaluation/support pairing
$$H^r(R,N^D)\times H_x^{3-r}(R,N)\longrightarrow\mathbb Q/\mathbb Z$$
is a perfect pairing of finite groups for every integer $r$. This statement does not cover nonétale $p$-primary groups or remove the explicit choice hypotheses.

## Facts & Assumptions

**Given:** Exactly $R,K,N,N^D$ and AC/DC as in the Statement; choose a common exponent $n$ for $N$ and $N^D$.

[A1] AC and DC retain their literal scope in the cohomology and completion suppliers. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] Cartier evaluation, the support cone and the actual finite étale/fppf comparison are supplied. [[def-finite-flat-group-scheme-and-cartier-dual]] [[def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings]] [[thm-finite-etale-coefficients-have-etale-fppf-cohomology-comparison]]

[F2] Finite flat torsors extend generic sections and restriction on $H^1$ is injective. [[lem-finite-flat-torsors-over-a-henselian-dvr-extend-generic-sections]]

[F3] Completion gives an actual Galois/cohomology equivalence and finite perfect generic Tate pairings, carrying the Cartier evaluation and support trace. [[lem-henselian-completion-finite-etale-and-finite-module-tate-comparison]]

[F4] The finite Kummer root construction kills prime-to-residue ramification and identifies the required finite tame inertia after unramified base change. [[lem-tame-dvr-inertia-and-abhyankar-ramification-killing]]

[F5] The support trace is the normalized invariant and the boundary identifies generic $H^2(K,\mathbb G_m)$ with the support group, so the localization sequence makes the restriction of integral $H^2(R,\mathbb G_m)$ to the generic fibre zero. [[lem-henselian-finite-residue-brauer-completion-and-support-trace]]

[F6] Finite flat groups have zero integral cohomology in degree at least two. [[lem-finite-flat-groups-over-henselian-dvr-have-zero-higher-cohomology]]

## Proof

**Proof technique:** identify the unramified subgroups, count the tame inertia quotient and use the generic perfect pairing.

1.1 Both $N$ and its Cartier dual are finite étale by the explicit hypotheses. Finite étale torsors over a Henselian local ring are equivalent to their finite étale special fibres: idempotents and simple roots lift, and the finite scheme of maps gives full faithfulness. Consequently, if $M=N(K_s)$, arithmetic Frobenius $F$ acts on $M$ through the residue Galois group and   $H^1(R,N)=H^1(\operatorname{Gal}(k_s/k),M)=M/(F-1)M$. The displayed first equality uses the actual finite étale/fppf torsor equivalence; the map to $H^1(K,N)$ is inflation and is injective. The same assertion applies to $M^D=\operatorname{Hom}(M,\mu_n)$. [F1, F2, A1, construct, algebra]

2.1 The recorded noncomplete completion comparison identifies the generic cohomology and normalized pairings with those of $\widehat K$. It also identifies the preceding unramified subgroups, since both Henselian $R$ and its completion have the same finite residue field and finite étale objects lift uniquely. Thus perform the counting over the complete field. Let $I$ be inertia, $P$ its wild subgroup, and $\Gamma=G_K/I$. The finite ramification groups show $P$ is pro-$p$, while tame inertia $I/P$ is the product over $\ell\ne p$ of $\mathbb Z_\ell(1)$, with conjugation by $F$ given by $F\tau F^{-1}=\tau^q$. For each finite Galois extension, the inertia map  $\sigma\mapsto\sigma(\pi)/\pi\bmod\pi$ embeds $I/I_1$ into the multiplicative residue group, and  $\sigma\mapsto(\sigma(\pi)-\pi)/\pi^{j+1}\bmod\pi$ embeds each $I_j/I_{j+1}$, $j\ge1$, into the additive residue group. The finite filtration terminates; hence the wild subgroup is a $p$-group and the tame quotient is cyclic of order prime to $p$. Over the maximal unramified field, the uniformizer-root construction is the uniformizer-root argument of the published `lem-tame-dvr-inertia-and-abhyankar-ramification-killing`; its compatible finite levels give the displayed tame quotient. This is an inline proof of the needed inertia statement, not a dependency on the later batch81 item. Since $I$ acts trivially on $M$ and $n$ is prime to $p$, every continuous homomorphism $P\to M$ is zero, and $H^1(I,M)^\Gamma=\operatorname{Hom}_{\rm cont}(I/P,M)^F\cong M(-1)^F$. The last symbol means $\operatorname{Hom}_{\rm cont}(\widehat{\mathbb Z}' (1),M)$ with its induced Frobenius action; it requires no choice of a generator in the resulting cardinality statement. [F3, F4, A1, step 1.1, construct, algebra]

3.1 $\Gamma$ is the profinite completion of $\mathbb Z$ and has cohomological dimension one on finite discrete modules. This follows directly by passing from the two-term resolution $F-1$ to finite cyclic quotients: compatible continuous 2-cocycles become coboundaries after a sufficiently large finite cyclic extension. Inflation–restriction therefore gives the exact sequence $0\to M/(F-1)M\to H^1(K,M)\to M(-1)^F\to0$. There is a canonical perfect finite pairing $M^D\times M(-1)\to\mathbb Z/n$, evaluating a character and a tame root-of-unity parameter. It is $F$-equivariant, so $M(-1)^F$ is dual to $M^D/(F-1)M^D$: the annihilator of $(F-1)M^D$ is exactly the fixed subgroup in the dual. For any endomorphism $F-1$ of a finite group, kernel and cokernel have equal cardinality. Hence $|H^1(K,M)|=|M^F|\,|(M^D)^F|=|H^1(R,N)|\,|H^1(R,N^D)|$. No Euler-characteristic theorem is imported in this count. [F3, step 1.1, step 2.1, construct, algebra]

4.1 Two integral torsor classes cup to an element of $H^2(R,\mathbb G_m)$, whose image in generic $H^2(K,\mathbb G_m)$ is zero by the support trace isomorphism and localization exactness in [F5]. Thus the two integral subgroups mutually annihilate under the actual generic Tate pairing. The recorded generic Tate theorem makes that pairing perfect. For a finite perfect pairing $A\times B\to\mathbb Q/\mathbb Z$, a subgroup $U\subseteq A$ has annihilator of order $|B|/|U|$. The equality in step 3 and mutual annihilation force both containments to be equalities, rather than the invalid inference from mutual annihilation alone. [F3, F5, step 3.1, construct, algebra]

5.1 The recorded integral torsor and higher-vanishing suppliers give $N(R)=N(K)$, $H^1(R,N)\to H^1(K,N)$ injective, and $H^i(R,N)=0$ for $i\ge2$, with the analogous facts for $N^D$. The cone exact sequence identifies $H_x^2(R,N)$ with $H^1(K,N)/H^1(R,N)$, identifies $H_x^3(R,N)$ with $H^2(K,N)$, and gives zero in the other support degrees using recorded generic Tate vanishing. Degree 0 of the desired support pairing is generic Tate duality; degree 1 is its quotient by the exact annihilators proved above; all remaining degrees pair zero with zero. Compatibility of the support trace with the recorded generic invariant is part of the cited trace and completion suppliers. Thus all asserted support pairings are perfect finite pairings at the explicitly stated AC/DC and prime-to-p scope. [F1, F3, F5, F6, step 1.1, step 4.1, construct, algebra] ∎
