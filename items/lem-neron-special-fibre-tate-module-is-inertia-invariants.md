---
id: lem-neron-special-fibre-tate-module-is-inertia-invariants
kind: lemma
title: "Néron special-fibre Tate module as inertia invariants"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
provenance:
  statement: literature-derived
  proof: ai-generated
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - def-neron-model-and-mapping-property
  - def-local-inertia-subgroup-of-absolute-galois-group
  - lem-arith-strict-henselization-and-smooth-sections
  - lem-arith-prime-to-characteristic-multiplication-etale
  - lem-arith-strict-henselian-etale-sections
  - lem-neron-model-uniqueness-etale-base-change-and-local-nature
proof_strategy: direct
sources:
  references:
    - title: "Pierre Deligne, SGA 7 I, Exposé I, §6"
      url: "https://grothendiecksga.com/read/sga7/fr/1-6.html"
      locator: "§6.4: inertia-fixed Tate module and the identity component of the Néron special fibre."
    - title: "Bosch, Lütkebohmert, Raynaud, Néron Models"
      url: "https://www.math.stonybrook.edu/~kamenova/homepage_files/Bosch_Raynaud_Neron_Model_tc.pdf"
      locator: "§§7.3–7.4: strict-henselian torsion specialization."
---

## Statement

Assume AC and DC. Let $K$ be a nonarchimedean local field with finite residue field $k$ of characteristic $p$, let $A/K$ be an abelian variety, let $\mathcal N$ be its Néron model over the valuation ring, and let $\ell\ne p$ be prime. Let $I\subset G_K$ be inertia, let $\bar k$ be a separable closure of $k$, and let $G=(\mathcal N_k)^0$. For any commutative group $H$, put $T_\ell(H)=\varprojlim_n H[\ell^n]$ with multiplication-by-$\ell$ transition maps. Then specialization gives an isomorphism, equivariant for the residue Galois group,
$$T_\ell(A(K^{\mathrm{sep}}))^I\cong T_\ell(G(\bar k)).$$
After tensoring with $\mathbb Q_\ell$, it identifies $V_\ell(A)^I$ with $T_\ell(G(\bar k))\otimes\mathbb Q_\ell$.

## Facts & Assumptions

**Given:** AC, DC, $K,k,p,A,\mathcal N,\ell,I,\bar k,G$ as stated.

[A1] AC and DC are assumed. [[def-axiom-of-choice]], [[def-dependent-choice]]

[F1] The Néron mapping property gives unique extension from smooth schemes and in particular the weak Néron property for étale points. [[def-neron-model-and-mapping-property]], [[lem-neron-model-uniqueness-etale-base-change-and-local-nature]]

[F2] The strict henselization is a filtered colimit of pointed étale neighbourhoods, has residue field $\bar k$, and is faithfully flat over the valuation ring. [[lem-arith-strict-henselization-and-smooth-sections]]

[F3] Prime-to-$p$ multiplication on a smooth commutative group and its kernel are étale. [[lem-arith-prime-to-characteristic-multiplication-etale]]

[F4] A separated finite-type étale scheme over a strictly henselian local ring has a bijective reduction map from sections to special-fibre points. [[lem-arith-strict-henselian-etale-sections]]

[F5] Inertia is the kernel of the absolute Galois action on the separable residue field. [[def-local-inertia-subgroup-of-absolute-galois-group]]

## Proof

**Proof technique:** identify every invariant finite torsion level and pass to the inverse limit.

1.1 Let $R^{\mathrm{sh}}$ be the strict henselization and $K^{\mathrm{sh}}$ its fraction field. By F2 it is the union of finite pointed étale neighbourhoods, whose generic fibres are finite unramified extensions. Conversely every finite unramified subextension corresponds to such a neighbourhood, so F5 identifies $K^{\mathrm{sh}}$ with $(K^{\mathrm{sep}})^I$. By F1, an $A(K^{\mathrm{sh}})$-point descends to one finite étale stage and extends there to $\mathcal N$; separatedness gives uniqueness. Thus $\mathcal N(R^{\mathrm{sh}})\cong A(K^{\mathrm{sh}})$ as groups. [F1, F2, F5, given]

2.1 For each $n\ge1$, F3 makes $\mathcal N[\ell^n]$ a separated finite-type étale scheme over $R$. By F4 and step 1.1, reduction gives a canonical group isomorphism
$$A[\ell^n](K^{\mathrm{sep}})^I=A(K^{\mathrm{sh}})[\ell^n]\cong\mathcal N_k[\ell^n](\bar k).$$
These isomorphisms commute with multiplication by $\ell$ and with the residue Galois action, since restriction, unique extension and reduction do. [F3, F4, step 1.1, given]

3.1 Passing to inverse limits in step 2.1 identifies $T_\ell(A(K^{\mathrm{sep}}))^I$ with $T_\ell(\mathcal N_k(\bar k))$: taking fixed points commutes with inverse limits because both are defined coordinatewise. The finite-type smooth special-fibre group has finitely many connected components. If $(x_n)$ is a compatible sequence of $\ell^n$-torsion points, its image in the finite component group is an infinitely $\ell$-divisible compatible sequence. The $\ell$-primary part of a finite group has bounded exponent and the prime-to-$\ell$ part contains no $\ell$-power torsion, so every image is zero. Thus every $x_n$ lies in $G(\bar k)$, proving the stated integral isomorphism. [step 2.1, given, algebra]

4.1 The Tate module is a $\mathbb Z_\ell$-lattice stable under $I$. An invariant vector in its rationalization becomes an invariant lattice vector after multiplying by a nonzero power of $\ell$; hence rationalization commutes with taking $I$-invariants here. Tensoring step 3.1 with $\mathbb Q_\ell$ gives the second assertion, with residue Galois equivariance retained. [step 3.1, algebra] ∎
