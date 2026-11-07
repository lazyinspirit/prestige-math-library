---
dependency_level: 9
id: lem-constructible-adic-systems-have-flat-models-up-to-isogeny
kind: lemma
title: Constructible adic systems have global flat models up to isogeny
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - def-l-adic-sheaf-as-compatible-system
  - def-constructible-l-adic-sheaf-on-a-scheme
  - def-lisse-l-adic-sheaf-on-a-scheme
  - def-derived-category-of-etale-sheaves
  - lem-compatible-finite-adic-modules-have-finite-complete-limits
  - lem-etale-module-sheaves-have-exact-conservative-stalks-and-enough-injectives
  - cor-lisse-etale-sheaves-and-finite-pi1-modules
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: Grothendieck et al., SGA 5, Exposé VI, Sections 1.2–1.4
      url: https://grothendiecksga.com/read/sga5/en/VI-1.html
      locator: Constructible systems, flat lattices and rational morphisms; canonical image construction avoids equivariant free/torsion splitting
axiom_use: Assume AC through finite-level representation classification, adic module inverse limits and exact conservative stalks. The common finite stratification is an explicit hypothesis, not a per-level constructibility theorem asserted without proof.
---

## Statement

Assume the Axiom of Choice. Let $X$ be a Noetherian scheme and let $F=(F_n)$ be a strict constructible $\mathbb Z_\ell$ system with one common finite locally closed stratification. There is an integer $N\geq0$ for which the sheaves
$$L_n=\operatorname{im}(\ell^N:F_{n+N}\longrightarrow F_{n+N})$$
form a flat strict constructible system. There are canonical system morphisms $a:F\to L$ and $b:L\to F$ satisfying $ba=\ell^N\operatorname{id}_F$ and $ab=\ell^N\operatorname{id}_L$, so $F$ and $L$ are isomorphic after rationalization. On each connected stratum, the rank of $L$ is the rank of the finitely generated inverse-limit stalk modulo its torsion. No equivariant splitting of that stalk is required.

Morphisms between flat strict constructible systems have no $\ell$-torsion. Every bounded complex in the rational constructible sheaf category consequently has, up to an isomorphism in that category of complexes, a bounded complex of globally defined flat integral systems with integral differentials squaring to zero. Its termwise reductions form a normalized adic complex with uniformly finite Tor-amplitude. This does not assert an equivalence with another ambient adic derived-category model.

## Statement references

[[def-l-adic-sheaf-as-compatible-system]]

[[def-constructible-l-adic-sheaf-on-a-scheme]]

[[def-lisse-l-adic-sheaf-on-a-scheme]]

[[def-derived-category-of-etale-sheaves]]

[SGA 5, Exposé VI, Sections 1.2–1.4](https://grothendiecksga.com/read/sga5/en/VI-1.html)

## Facts & Assumptions

**Given:** AC, the Noetherian scheme, strict system and common finite stratification in the statement.

[F1] Compatible finite adic modules have finitely generated complete limits with the stated reductions, and each limit is a finite-rank free module plus bounded $\ell$-primary torsion. [[lem-compatible-finite-adic-modules-have-finite-complete-limits]]

[F2] Under AC, finite lisse module sheaves on a connected Noetherian scheme are finite continuous fundamental-group modules, naturally and fully faithfully. [[cor-lisse-etale-sheaves-and-finite-pi1-modules]]

[F3] Geometric stalks are exact and conservative and preserve filtered colimits, under the given choice hypothesis. [[lem-etale-module-sheaves-have-exact-conservative-stalks-and-enough-injectives]]

[F4] Strict system reductions, rational morphisms, flat systems and normalized complexes have the stated conventions. [[def-l-adic-sheaf-as-compatible-system]] [[def-constructible-l-adic-sheaf-on-a-scheme]] [[def-lisse-l-adic-sheaf-on-a-scheme]] [[def-derived-category-of-etale-sheaves]]

[A1] AC is carried through these coefficient and geometric suppliers. [[def-axiom-of-choice]]

## Proof

1.1 If $X$ is empty, all sheaves are zero and take $N=0$, $L=F$. Otherwise refine the common finite stratification into its connected components. This remains finite: a Noetherian topological space has finitely many irreducible components, so only finitely many connected components, each open and closed. Choose one geometric basepoint on each of these finitely many strata under [A1]. Its finite stalk modules $M_n$ satisfy the compatible quotient relations by [F3]. By [F1], their inverse limit $M$ is finitely generated over $A=\mathbb Z_\ell$, with $M/\ell^nM=M_n$, and its torsion is killed by some power of $\ell$. The equivalences in [F2] identify all finite-level stalks on the same connected stratum with the same underlying finite modules, transported by monodromy. Thus the exponent may be chosen uniformly on that stratum. Take the maximum of the finitely many exponents, obtaining one integer $N$ for all strata. [given, A1, F1, F2, F3, construct, algebra]

2.1 Define $L_n$ globally by the image formula in the Statement. Exactness of stalks in [F3] computes its stalk as the image of multiplication by $\ell^N$ on $M/\ell^{n+N}M$. Since $\ell^N$ kills the torsion, this image is $\ell^NM/\ell^{n+N}M=(\ell^NM)/\ell^n(\ell^NM)$, free over $A_n$ with rank equal to the free rank of $M$. This calculation uses an underlying module decomposition from [F1] only to check freeness; the image $\ell^NM$ itself and all its transition maps are canonical and invariant under every module automorphism. The induced transitions give $L_{n+1}/\ell^nL_{n+1}=L_n$ on every stalk, hence as sheaves by [F3]. On each stratum images of finite lisse sheaves are lisse by [F2], so the same stratification makes every $L_n$ lisse. This proves that $L$ is a flat strict constructible system. [F1, F2, F3, F4, step 1.1, construct, algebra]

3.1 Multiplication by $\ell^N$ on $F_{n+N}$ kills its subsheaf $\ell^nF_{n+N}$, so it factors through the quotient $F_n$, defining $a_n:F_n\to L_n$. Define $b_n:L_n\to F_n$ by inclusion into $F_{n+N}$ followed by reduction. These maps commute with all transitions. On a representative in $F_{n+N}$ their two composites are exactly multiplication by $\ell^N$, giving $ba=\ell^N\operatorname{id}$ and $ab=\ell^N\operatorname{id}$. Thus $b$ has inverse $\ell^{-N}a$ in the rational category of [F4]. This works also for $N=0$ and the zero system. [F3, F4, step 2.1, construct, algebra]

3.2 Suppose $v:L\to L'$ is a system morphism between flat systems and $\ell^sv=0$. At each geometric point, [F1] identifies their inverse-limit stalks with finitely generated $A$-modules. They are free: finite-level freeness and reduction keep the rank fixed, while for large $n$ the cardinality formula for $A^r\oplus T$ modulo $\ell^n$ is $\ell^{nr}|T|$; comparison with the free finite-level ranks forces the bounded torsion summand to be zero. Their induced map is killed by $\ell^s$, hence zero because the target is torsion-free. Every finite-level map is its reduction, since those inverse-limit stalks surject onto their finite quotients by [F1]. Thus all stalk maps of $v_n$ are zero. By [F3], every $v_n$ is zero. This proves that system morphism groups between flat systems have no $\ell$-torsion. [F1, F3, step 2.1, algebra]

4.1 For a bounded complex in the rational category, replace its finitely many terms by the global flat models just constructed and transport its differentials. Write the finitely many transported maps with denominators powers of $\ell$, and choose $s$ clearing all of them. Multiplying each differential by $\ell^s$ gives integral system maps. Their successive composites are zero rationally, hence zero integrally by step 3.2. The scaled rational complex is isomorphic to the original one by degree-$i$ scalar $\ell^{si}$, since $\ell^{s(i+1)}d=(\ell^sd)\ell^{si}$. At every finite level its terms are stalkwise free and it is bounded, so it computes derived tensor by its ordinary tensor complex. Its strict quotient transitions therefore give the required coherent derived reduction isomorphisms. Its Tor-amplitude lies in its fixed finite term interval. Intersecting the finitely many common stratifications gives one finite stratification for all its terms, and [F2] makes the finite-level kernels and cokernels lisse on each connected stratum, giving the required common stratification for cohomology as well. This is the normalized complex asserted, without any separate model-equivalence conclusion. [F2, F3, F4, step 2.1, step 3.1, step 3.2, construct, algebra] ∎

## Remarks

The explicit common-stratification hypothesis matches the declared object model. Proving that per-level constructibility alone implies such a common stratification is a separate theorem, and is not inferred from finite-free lisse systems. This lemma constructs global flat representatives without selecting and gluing unrelated lattices independently on the strata.
