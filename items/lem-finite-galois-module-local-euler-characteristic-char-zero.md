---
id: lem-finite-galois-module-local-euler-characteristic-char-zero
kind: lemma
title: "Local Euler characteristic of finite Galois modules in characteristic zero"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 18
deps:
  - def-axiom-of-choice
  - def-dependent-choice
  - thm-local-finite-module-tate-duality-in-characteristic-zero
  - thm-continuous-lyndon-hochschild-serre-spectral-sequence
  - thm-shapiro-lemma-for-group-cohomology
  - thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions
  - thm-normal-basis-theorem
  - lem-tame-dvr-inertia-and-abhyankar-ramification-killing
justified_by: []
proof_strategy: direct
axiom_use: "AC/DC are the explicit conventions of the actual finite-module Tate and continuous-cohomology suppliers."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Arithmetic Duality Theorems, second edition"
      url: "https://www.jmilne.org/math/Books/ADTnot.pdf"
      locator: "I Theorem 2.8 and Lemmas 2.9–2.12, printed pp. 31–34. The modular induction step is reconstructed below using the supplied finite Brauer-character basis."
verification: {}
---

## Statement

Assume AC and DC. Let $K$ be a complete discretely valued field of characteristic zero with finite residue field $\mathbb F_q$ of characteristic $p$, normalized valuation $v_K$, and chosen separable closure. Let $M$ be a finite discrete continuous $G_K$-module. Then its cohomology groups are finite, vanish above degree two, and satisfy
$$\frac{|H^0(K,M)|\,|H^2(K,M)|}{|H^1(K,M)|}=q^{-v_K(|M|)}.$$
The formula uses the actual continuous cohomology groups and does not assume $M$ unramified or prime to $p$.

## Facts & Assumptions

**Given:** Exactly AC/DC, $K$ and $M$ in the Statement; write $I$ for inertia and $P$ for wild inertia.

[A1] AC and DC are the actual choice conventions of the suppliers. [[def-axiom-of-choice]] [[def-dependent-choice]]

[F1] Complete characteristic-zero finite-residue fields have finite perfect local Tate pairings in all degrees, and finite-module cohomology vanishes above degree two. [[thm-local-finite-module-tate-duality-in-characteristic-zero]]

[F2] The actual continuous Lyndon–Hochschild–Serre sequence applies to closed normal subgroups. Ordinary Shapiro is natural in the coefficient module and resolution. [[thm-continuous-lyndon-hochschild-serre-spectral-sequence]] [[thm-shapiro-lemma-for-group-cohomology]]

[F3] Irreducible Brauer characters form a basis of complex class functions on the $p$-regular elements for a splitting modular system. [[thm-irreducible-brauer-characters-form-a-basis-of-p-regular-class-functions]]

[F4] Every finite Galois field extension has a normal basis. [[thm-normal-basis-theorem]]

[F5] The finite uniformizer-root construction kills prime-to-residue ramification after unramified base change. [[lem-tame-dvr-inertia-and-abhyankar-ramification-killing]]

## Proof

**Proof technique:** use tame inertia away from $p$, then finite modular cyclic induction and a unit-lattice computation at $p$.

1.1 Define the ratio in the Statement by $\chi_K(M)$. The long cohomology sequence and finite cardinalities from [F1] make it multiplicative in short exact coefficient sequences. The canonical primary decomposition therefore reduces to modules killed by a prime. For a prime $\ell\ne p$, the finite ramification filtration gives pro-$p$ wild inertia; its positive cohomology on $\ell$-primary coefficients vanishes by averaging. The tame quotient is procyclic on the relevant prime-to-$p$ part: the inertia maps $\sigma\mapsto\sigma(\pi)/\pi$ and $\sigma\mapsto(\sigma(\pi)-\pi)/\pi^{j+1}$ give the finite successive multiplicative and additive quotients, and [F5] gives the finite uniformizer roots. On $M^P$ its cohomology is the kernel and cokernel of $\tau-1$, with equal cardinality, and vanishes above one. The residue Galois group is $\widehat{\mathbb Z}$ and has the analogous two-term Frobenius calculation. The two nonzero rows of [F2] therefore cancel in the alternating cardinality product, giving $\chi_K(M)=1=q^{-v_K(|M|)}$ in this case. [A1, F1, F2, F5, given, construct, algebra]

1.2 Now let $pM=0$ and choose a finite Galois extension $L/K$ trivializing $M$, with group $G$. A complete characteristic-zero finite-residue field is a finite extension of $\mathbb Q_p$: choose lifts of a residue basis and powers of a uniformizer through one ramification period; finite residue subtraction gives a spanning lattice over $\mathbb Z_p$, and reduction modulo $p$ gives its independence. The same holds for $L$. Choose a finite splitting field $\kappa$ of characteristic $p$ for $G$. Finite continuous cochains commute with extension of scalars to $\kappa$, so the $\kappa$-dimension of $H^i(K,M\otimes\kappa)$ equals the $\mathbb F_p$-dimension of $H^i(K,M)$. Both the alternating dimension and $\dim_\kappa$ factor additively through the finite modular Grothendieck group $R_\kappa(G)$. [A1, F1, given, choose, construct, algebra]

2.1 The classes induced from cyclic subgroups of order prime to $p$ span $R_\kappa(G)\otimes\mathbb Q$. Indeed [F3] identifies its complexification by Brauer characters with class functions on the $p$-regular elements. Each linear character of a cyclic $p'$-subgroup is the Brauer character of a one-dimensional $\kappa$-module. Finite coset matrices show that the Brauer character of an induced module is the restriction to the $p$-regular elements of the ordinarily induced character. If a class function on the $p$-regular elements is orthogonal to all such induced characters, extend it by zero to $G$; the explicit coset trace formula gives finite Frobenius reciprocity, so its restriction to each cyclic $p'$-subgroup is orthogonal to every linear character. Finite Fourier inversion makes each restriction zero. Every $p$-regular element generates one of these subgroups, so the class function is zero. Thus the induced characters span the whole complex class-function space. Their coefficients in the irreducible modular basis are integers, so a nonzero maximal minor gives the rational spanning assertion. [F3, step 1.2, construct, algebra]

3.1 For a cyclic $p'$-subgroup $H\le G$, let $K'=L^H$. Finite Shapiro identifies the continuous cohomology of an induced coefficient module with that over $K'$: the finite coset cochain adjunction of [F2] preserves locally constant maps and filtered finite quotients. Its scalar dimension is multiplied by $[K':K]$, while $[K':\mathbb Q_p]=[K':K][K:\mathbb Q_p]$. Consequently it suffices to establish the alternating-dimension formula after replacing $K$ by $K'$ and $G$ by $H$. Since $|H|$ is invertible in $\kappa$, averaging makes $H$-invariants exact. The spectral sequence [F2] identifies the cohomology over $K'$ with the $H$-invariants of $H^i(L,\mathbb F_p)\otimes_{\mathbb F_p}M$, with its actual action and cup maps. [A1, F2, step 1.2, step 2.1, construct, algebra]

4.1 Put $U=\mathcal O_L^\times$. The actual Tate pairing [F1] and Kummer exact sequence identify the duals of $H^0(L,\mathbb F_p)$, $H^1(L,\mathbb F_p)$ and $H^2(L,\mathbb F_p)$ with $\mathbb F_p$, $L^\times/L^{\times p}$ and $\mu_p(L)$, equivariantly for $H$. The valuation sequence therefore makes their alternating virtual dual class $-[U/U^p]+[U[p]]$. On a sufficiently deep principal-unit group the series for logarithm and exponential are mutually inverse and $H$-equivariant: the valuations of their denominators are bounded by $j/(p-1)$, so both converge and the finite formal identities pass to the limits. This identifies an open $H$-stable subgroup of $U$ with a full $\mathbb Z_p$-lattice in $L$. For two commensurable $H$-stable lattices, the exact sequence from multiplication by $p$ gives the same virtual class $[W/pW]-[W[p]]$. By [F4], $L$ is the regular $\mathbb Q_p[H]$-representation repeated $[K':\mathbb Q_p]$ times; clearing finitely many denominators and applying the same exact sequence shows $[U/U^p]-[U[p]]=[K':\mathbb Q_p][\mathbb F_p[H]]$. [F1, F4, step 3.1, construct, algebra]

5.1 The finite regular representation is self-dual, and the map $m\mapsto\sum_{h\in H}h\otimes hm$ identifies $M$ with $(\kappa[H]\otimes M)^H$. Taking exact $H$-invariants in step 4.1 yields $\sum_{i=0}^2(-1)^i\dim_\kappa H^i(K',M)=-[K':\mathbb Q_p]\dim_\kappa M$. Rational cyclic induction from step 2.1 and Shapiro from step 3.1 propagate this identity to every finite $p$-torsion coefficient module; the finite ratio group has no torsion ambiguity after clearing the rational denominators. Scalar descent in step 1.2 gives $\chi_K(M)=p^{-[K:\mathbb Q_p]\dim_{\mathbb F_p}M}$ for every $p$-torsion $M$. Successive short exact sequences treat $p$-power torsion. Since $p=u\pi^e$ and $q=p^f$, the finite lattice calculation in step 1.2 gives $[K:\mathbb Q_p]=ef$, so the last expression is $q^{-v_K(|M|)}$. Together with step 1.1 this proves the formula for arbitrary finite $M$. [F1, step 1.1, step 1.2, step 2.1, step 3.1, step 4.1, construct, algebra] ∎
