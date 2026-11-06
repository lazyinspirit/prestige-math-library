---
id: lem-gts-characteristic-zero-ce-deformation-context
kind: lemma
title: Characteristic-zero algebra models and the CE deformation context
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: physics
deps:
  - def-axiom-of-choice
  - thm-dold-kan-equivalence-for-simplicial-modules
  - thm-model-structures-on-variable-simplicial-modules-and-algebras
  - thm-flatness-of-noetherian-completion
  - thm-hilbert-basis-theorem
  - def-gts-cohomological-differential-graded-lie-algebra
  - def-shifted-coalgebra-l-infinity-algebra
  - lem-shuffle-coproduct-coassociative-cocommutative-conilpotent
  - def-gts-formal-moduli-problem-on-small-derived-bases
  - thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses
  - lem-gts-simplicial-module-shuffle-and-symmetric-power-comparison
  - lem-gts-graded-pbw-ce-resolution-and-free-lie-comparison
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  thm-dold-kan-equivalence-for-simplicial-modules: mathematical-premise
  thm-model-structures-on-variable-simplicial-modules-and-algebras: mathematical-premise
  thm-flatness-of-noetherian-completion: mathematical-premise
  thm-hilbert-basis-theorem: mathematical-premise
  def-gts-cohomological-differential-graded-lie-algebra: mathematical-premise
  def-shifted-coalgebra-l-infinity-algebra: mathematical-premise
  lem-shuffle-coproduct-coassociative-cocommutative-conilpotent: mathematical-premise
  def-gts-formal-moduli-problem-on-small-derived-bases: mathematical-premise
  thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses: mathematical-premise
  lem-gts-simplicial-module-shuffle-and-symmetric-power-comparison: mathematical-premise
  lem-gts-graded-pbw-ce-resolution-and-free-lie-comparison: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jacob Lurie, Derived Algebraic Geometry X: Formal Moduli Problems"
      url: https://www.math.ias.edu/~lurie/papers/DAG-X.pdf
      locator: Definitions 2.1.3 and 2.1.5, Propositions 2.1.10 and 2.1.16 with proofs (PDF pp. 32–36); Construction 2.2.1, Propositions 2.2.6–2.2.7 with proofs (pp. 37–39); Construction 2.2.13, Remark 2.2.15 and Proposition 2.2.17 (pp. 40–41); Theorem 2.3.1, Proposition 2.3.4 and Lemma 2.3.5 with proofs, Proposition 2.3.9 (pp. 42–43, 46–47); Proposition 1.3.5(2)–(4) with proof (pp. 18–19); Lemma 1.1.20 with proof (p. 13). The cotangent-connectivity theorem cited inside Lemma 1.1.20 is a lower-level source reference, not a separately completed reading here.
    - title: Vladimir Hinich, Homological Algebra of Homotopy Algebras
      url: https://arxiv.org/abs/q-alg/9702015
      locator: "Theorem 4.1.1 and Definition 4.2.4: for a Σ-split operad on unbounded complexes, the transferred algebra model structure has underlying quasi-isomorphisms and degreewise-surjective fibrations; over a field containing Q every operad is Σ-split. Theorems 4.6.4 and 4.7.4 give the derived change-of-operad adjunction and equivalence for a compatible quasi-isomorphism of Σ-split operads; §4.8 supplies simplicial mapping spaces."
    - title: Vladimir Hinich, Erratum to Homological Algebra of Homotopy Algebras
      url: https://arxiv.org/abs/math/0309453
      locator: "Theorem 3.2: the operad model structure with componentwise quasi-isomorphisms and epimorphisms exists when k contains Q. The original Theorem 6.1.1 has a stated counterexample in the erratum and is not used."
    - title: "Bertrand Toën and Gabriele Vezzosi, Homotopical Algebraic Geometry II: Geometric Stacks and Applications"
      url: https://www.math.univ-toulouse.fr/~btoen/hagII.pdf
      locator: §2.3.1, Lemma 2.3.1.1 and Proposition 2.3.1.4 (proof); §2.3.5.1. For a characteristic-zero base, the homotopy theory of (−1)-connected commutative DG algebras is equivalent to simplicial commutative algebras; normalization is homotopically fully faithful and the induced derived-stack functor preserves homotopy limits and colimits.
verification:
  precheck: pending
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
dependency_level: 2
---

## Statement

Assume AC and let k be any characteristic-zero field. The localization of simplicial commutative k-algebras identifies, with all mapping spaces, small objects, square-zero tests and surjective-π0 pullback diagrams, with the connective/nonpositive part of the localization of commutative DG k-algebras. The ambient CE category is the UNBOUNDED augmented CDGA category. Cohomological DG Lie algebras in every integer degree admit the natural CE-cochain functor and its infinity-categorical right adjoint
$$C^*:\mathrm{Lie}_k\rightleftarrows(\mathrm{CAlg}^{\mathrm{aug}}_{k,\mathrm{unbounded}})^{\mathrm{op}}:D.$$
Its underlying D-complex is $(L_{k/A})^\vee$, and D(k)=0. For every specified small base A the canonical map $A\to C^*D(A)$ is an equivalence. Every surjective-π0 map between such bases is a finite composite of elementary maps $B'\simeq B\times_{k\oplus k[n+1]}k$, n≥0; D sends their base-change pullbacks to Lie pushouts. Each D(A) is a finite positive-cell Lie object. On finite positive free Lie objects there is the full enriched comparison
$$C^*(\operatorname{FreeLie}(V))\simeq k\oplus V^\vee[-1],\qquad \operatorname{Map}_{\mathrm{Lie}}(g,h)\simeq\operatorname{Map}_{\mathrm{CAlg}}(C^*h,C^*g).$$
The second formula is asserted when g,h are the good positive finite-cell objects described in the proof. Characteristic-zero free-cell rectification along a cofibrant aritywise-equivalent Lie-operad resolution preserves the derived underlying complexes and mapping spaces. No formal-moduli recognition theorem, nonpositive restriction on Lie algebras, or strict right adjoint on raw DG Lie categories is assumed.

## Statement references

[[def-axiom-of-choice]]

[[thm-dold-kan-equivalence-for-simplicial-modules]]

[[thm-model-structures-on-variable-simplicial-modules-and-algebras]]

[[thm-flatness-of-noetherian-completion]]

[[thm-hilbert-basis-theorem]]

[[def-gts-cohomological-differential-graded-lie-algebra]]

[[def-shifted-coalgebra-l-infinity-algebra]]

[[lem-shuffle-coproduct-coassociative-cocommutative-conilpotent]]

[[def-gts-formal-moduli-problem-on-small-derived-bases]]

[[thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses]]

[[lem-gts-simplicial-module-shuffle-and-symmetric-power-comparison]]

[[lem-gts-graded-pbw-ce-resolution-and-free-lie-comparison]]

## Facts & Assumptions

**Given:** The field, AC, the specified small bases, and the unbounded ambient cohomological algebra models.

[F1] [[def-axiom-of-choice]]: AC supplies simultaneous free-resolution, basis and splitting choices.

[F2] [[thm-dold-kan-equivalence-for-simplicial-modules]]: Constant-ring Dold–Kan is exact with the explicit inverse; it is not by itself a commutative-algebra comparison.

[F3] [[thm-model-structures-on-variable-simplicial-modules-and-algebras]]: The simplicial algebra model has functorial cells and mapping corners, but states no tensor-flatness or DG rectification.

[F4] [[thm-flatness-of-noetherian-completion]]: Completion of a Noetherian ring is flat under AC; its actual finite-module/ideal-injection proof applies to the finite polynomial ring below.

[F5] [[thm-hilbert-basis-theorem]]: A finite polynomial ring over the field is Noetherian, by iteration of the supplied Hilbert basis theorem.

[F6] [[def-gts-cohomological-differential-graded-lie-algebra]]: DG Lie brackets and differentials have the unshifted cohomological conventions in all integer degrees.

[F7] [[def-shifted-coalgebra-l-infinity-algebra]]: Shifted Lie-infinity operations are square-zero coderivations, with the stated suspension signs.

[F8] [[lem-shuffle-coproduct-coassociative-cocommutative-conilpotent]]: The symmetric shuffle coalgebra is coassociative, cocommutative, conilpotent and has exactly its length-one primitives.

[F9] [[def-gts-formal-moduli-problem-on-small-derived-bases]]: Small bases and formal-moduli tests are the specified augmented connective objects; the residue identification means $π0(A)/m=k$.

[F10] [[thm-alexander-whitney-and-eilenberg-zilber-are-chain-homotopy-inverses]]: The supplied AW/shuffle theorem gives its actual finite prism/model contractions for singular chains. The proof below extends the same bilinear face/degeneracy formulas to simplicial modules.

[F11] Lurie's DAG-X, Proposition 2.1.10 and Propositions A.4.1.4.3 and A.4.4.4.6, gives the model structures on unbounded differential graded Lie algebras and associative/commutative differential graded algebras over a characteristic-zero field. Weak equivalences are underlying quasi-isomorphisms and fibrations are degreewise surjections in every integer degree. Proposition 2.1.16 gives presentability of the localized DG Lie category and the stated sifted-colimit behavior of its forgetful functor. Hinich Theorem 4.1.1 and Definition 4.2.4 independently give the fixed-operad algebra model structures for Σ-split operads in unbounded complexes; every such operad is Σ-split when $k$ contains $\mathbb{Q}$. These results supply the model-category hypotheses not supplied by [F3].

[F12] Lurie's DAG-X, Construction 2.2.13, Propositions 1.3.5(2)–(4), 2.2.6, 2.2.17, 2.3.4 and 2.3.9, Remark 2.2.15, Lemma 2.3.5, and Theorem 2.3.1, all under the hypothesis that $k$ is a characteristic-zero field, establish the CE cochain functor on the unbounded DG Lie localization, its preservation of small colimits, its right adjoint on the infinity-category localization (not on the raw DG Lie category), the free-Lie square-zero calculation, the good-object unit equivalence, and the cotangent-complex formula for the underlying right adjoint. The good-object hypotheses are finite-dimensional graded pieces and strict positivity in our cohomological convention, equivalently concentration in strictly negative chain degrees in Lurie's convention. The adjunction gives the full derived mapping-space comparison on those good objects.

[F13] Hinich Theorems 4.1.1, 4.6.4 and 4.7.4, under their explicit hypotheses of Σ-split source and target operads and a quasi-isomorphism compatible with their splittings, give model structures on operad-algebras and a derived extension/restriction adjunction whose homotopy categories are equivalent. In the proof, the derived unit is a weak equivalence on cofibrant replacements. Consequently the induced functor of simplicial localizations is fully faithful; essential surjectivity follows from the stated homotopy-category equivalence, since an isomorphism in the homotopy category is represented by an equivalence in the localization. This yields the equivalence on all derived mapping spaces. In characteristic zero the Σ-splitting hypothesis holds for all operads. We use the corrected characteristic-zero operad model structure in the erratum, Theorem 3.2, and not the disproved generality of the original Theorem 6.1.1.

[F14] Toën–Vezzosi, HAG II, §2.3.1, Lemma 2.3.1.1 and Proposition 2.3.1.4 (proof), and §2.3.5.1, for a characteristic-zero base identify the homotopy theory of (−1)-connected commutative DG algebras with simplicial commutative algebras. The model structure on unbounded CDGAs has quasi-isomorphisms as weak equivalences and degreewise epimorphisms as fibrations; the connective/nonpositive site and normalization adjunction are the ones used for the small derived bases. HAG II's derived-stack functor is fully faithful and preserves homotopy limits and colimits; we use its algebra comparison only on the connective/nonpositive subcategory, not on unbounded test algebras.

[F15] [[lem-gts-simplicial-module-shuffle-and-symmetric-power-comparison]] supplies the natural module shuffle homotopies, equivariance and symmetric-power comparisons, with their local construction.

[F16] [[lem-gts-graded-pbw-ce-resolution-and-free-lie-comparison]] supplies graded PBW, the coaugmented CE module $U(\mathfrak g)\otimes(k\oplus\bar S^c(\mathfrak g[1]))$ with its explicit differential, and the natural primitive free-Lie comparison, including unbounded complexes.

## Proof

**Given:** [F1]–[F14].

1.1 Construction1: Characteristic-zero normalization and rectification. Use the actual Dold–Kan normalization/inverse over the constant field k, not over a variable simplicial algebra. Reindex normalized chains as nonpositive cochains. For $x∈N_{pX}$ and $y∈N_{qY}$ the shuffle is the sum, over ordered (p,q)-shuffles, of the tensor of the corresponding complementary degeneracies, multiplied by its permutation/Koszul sign. The front/back face map is Alexander–Whitney. The usual face–degeneracy relations prove that both are chain maps: two adjacent inner-face terms cancel by swapping the adjacent shuffled labels; the two endpoint terms are the two tensor differentials. Shuffling three ordered blocks identifies both associative composites term-by-term. Exchanging the two blocks gives the graded symmetry sign. A degree-zero unit is unchanged. Thus normalization with shuffle is lax symmetric monoidal and gives an actual functor $N:\mathrm{sCAlg}_k\to\mathrm{cdga}_k^{\le0}$. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, algebra, construct]

2.1 Apply [F15] to arbitrary simplicial $k$-modules. Its acyclic-model recursion constructs the homotopies on free bilinear simplex models, verifies the boundary identity in each degree and uses the natural normalization projector before descending. In particular it supplies the actual extension of the singular-chain convention in [F10]; no identification of singular chains with all simplicial modules is assumed. [F2, F10, F15, step 1.1, construct]

3.1 For every $n\ge1$, the iterated shuffle is the natural chain map
$$\operatorname{sh}^{(n)}_V:(NV)^{\otimes_k n}\longrightarrow N(V^{\otimes_k n}),$$
obtained by applying the two-factor shuffle successively to the $n$ ordered
blocks. For $n=0$ use the unit map $k\to N(k)$. Its terms are indexed by
ordered $(p_1,\ldots,p_n)$-shuffles and carry the Koszul sign of the
corresponding permutation. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 2.1, algebra, construct]

4.1 The map $\operatorname{sh}^{(n)}_V$ is a $\Sigma_n$-equivariant
quasi-isomorphism. Equivariance uses the graded block-swap sign just checked.
Coinvariants preserve quasi-isomorphisms in characteristic zero: averaging
over $\Sigma_n$ splits invariants and identifies them with coinvariants. Taking
the direct sum of these descended maps gives the algebra comparison
$$\mathrm{Sym}_k(NV)=\bigoplus_{n\ge0}(NV)^{\otimes_k n}_{\Sigma_n} \longrightarrow\bigoplus_{n\ge0}N(V^{\otimes_k n})_{\Sigma_n} \simeq N(\mathrm{Sym}_k(V)).$$
Normalization commutes with the direct sums and the finite-group coinvariants
here because it is exact and defined degreewise. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 3.1, algebra, construct]

5.1 The direct-sum algebra comparison map displayed in step 4.1 is a quasi-isomorphism, since each symmetric-power summand is a quasi-isomorphism there and the $n=0$ unit is an isomorphism. Direct sums and filtered colimits of k-complexes are exact, so no finite-dimensionality restriction enters this comparison. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 4.1, algebra, construct]

6.1 For the algebra adjunction let $U$ forget a nonpositive commutative DG
$k$-algebra to its cochain complex, let $S=\mathrm{Sym}_k$ be its left
adjoint, and let $T=US$ be the monad on nonpositive complexes. For an algebra
$A$, write $a:UA\leftarrow TUA$ for its underlying structure map and
$\varepsilon_B:SUB\to B$ for the adjunction counit at an algebra $B$.
In commutative DG algebras the reflexive coequalizer is
$$S(TUA)\underset{S(a)}{\overset{\varepsilon_{SUA}}{\rightrightarrows}}S(UA)\overset{\varepsilon_A}{\longrightarrow}A.$$
The common section of the parallel arrows is $S(\iota_{UA})$, where
$\iota$ is the monad unit. A map from $S(UA)$ equalizing these arrows is
exactly a chain map from $UA$ respecting its multiplication and unit, so
this coequalizer has the asserted universal property. All objects and maps
retain their differentials. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 5.1, algebra, construct]

7.1 The left adjoint $L$ is determined on free algebras by $L(\operatorname{Sym}C)=\operatorname{Sym}(\Gamma C)$, since maps out of these objects are respectively module maps $C\to NB$ and $\Gamma C\to B$. Apply this prescription to the reflexive presentation in step 6.1; the adjoint transposes of its two arrows give the coequalizer defining $L(A)$. This proves $L\dashv N$, without claiming that $\Gamma$ is monoidal. On nonpositive CDGAs use the connective transferred model structure: weak equivalences are quasi-isomorphisms and fibrations are surjective in strictly negative cochain degrees. This differs from the unbounded every-degree convention of [F11]. Dold–Kan takes simplicial-module fibrations to these fibrations, so $N$ preserves fibrations and trivial fibrations and is right Quillen. To prove the unit, use the generating free algebra cells: adjoining a degree-zero generator, or adjoining $y$ of degree $r<0$ with prescribed $dy\in A^{r+1}$. These are the free images of the generating cofibrations of nonpositive complexes; the corresponding acyclic disk cells give the transferred structure (their positive symmetric weights contract by Euler division as in [F16]). For a cell $A\to A\langle y\rangle$, filter by occurrences of the new generator. The associated quotient of weight $m$ is $A\otimes\operatorname{Sym}^m(k[-r])$; its generator differential has disappeared because $dy$ lowers weight. In the simplicial pushout $L(A)\to L(A\langle y\rangle)$ the same filtration has associated quotient $L(A)\otimes\operatorname{Sym}^m(\Gamma k[-r])$. This follows degreewise from the split inclusion of the generating simplicial sphere into its disk. For a degree-zero cell it is the polynomial-degree filtration with constant simplicial generator. The unit on the associated quotients is the tensor of the unit for $A$ with the symmetric-power comparison of [F15], followed by its two-factor shuffle. It is a quasi-isomorphism if the unit for $A$ is. Induct over the finite filtration levels using their short exact sequences, then take their exact filtered union. Transfinite cell stages commute with exact normalization and exact filtered colimits over $k$; the initial unit is the identity at $k$, and retracts preserve weak equivalences. Thus $A\to NL(A)$ is a quasi-isomorphism for every cofibrant nonpositive CDGA $A$. Finally take a cofibrant replacement $q:QNB\to NB$ of a simplicial algebra's normalization. The adjoint map $e:LQNB\to B$ satisfies $N(e)\circ\eta_{QNB}=q$. Both the unit and $q$ are quasi-isomorphisms, hence so is $N(e)$. Normalization detects weak equivalences of simplicial algebras by Dold–Kan, so $e$ is a weak equivalence. This is the derived counit. Unit and counit establish the Quillen equivalence on the connective/nonpositive categories only. [F2, F3, F11, F14, F15, F16, step 6.1, construct]

8.1 Derived unit and counit give inverse equivalences after homotopy-coherent localization: apply them to cofibrant replacements, and their natural weak equivalences become inverse natural equivalences. In particular all mapping spaces are retained. Equivalences preserve limits by their universal property. Homotopy groups of N are the normalized homotopy groups, so smallness, the augmentation, square-zero k⊕k[n], and surjectivity on π0 are preserved. This proves exactly the simplicial-commutative-to-CDGA interface needed by the theorem. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 7.1, algebra, construct]

9.1 For an independent operad model, choose a cofibrant resolution O→Com in the characteristic-zero operad model structure of [F13]. Since k contains Q, the source and target are Σ-split; Hinich's corrected hypotheses give the derived extension/restriction equivalence of algebra localizations. The same statement for a cofibrant resolution of Lie gives the asserted Lie rectification. This is an equivalence of derived categories, hence of the simplicial localizations and their mapping spaces; the item does not use the invalid general operad-model assertion corrected by Hinich's erratum. The actual Definition already specifies its mapping spaces by simplicial commutative algebras, so no extra model comparison is needed merely to interpret that Definition. [F1, F2, F3, F11, F13, step 8.1, algebra, construct]

10.1 Construction2: Graded PBW, CE resolution and the free Lie comparison. For a cohomological dg Lie algebra $\mathfrak g$, use the coaugmented coalgebra $C_*(\mathfrak g)=k\oplus\bar S^c(\mathfrak g[1])$, where [F7] defines the reduced coalgebra $\bar S^c$. Its coderivation is zero on $k$ and has corestrictions $q_1(sx)=-s(dx)$ and $q_2(sx\odot sy)=(-1)^{|x|+1}s[x,y]$, as fixed in [F16]. Its square is zero: the linear terms give $d^2=0$, the mixed terms give the differential derivation identity, and the three-input terms cancel by graded Jacobi, with the suspension Koszul signs. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 9.1, algebra, construct]

11.1 Use [F16]. Its graded PBW proof resolves all overlapping reductions, including repeated odd letters. Its CE differential is checked against the enveloping relation and Jacobi. In the total-letter associated graded, the contraction is the degree $-1$ derivation $h(x)=sx$, $h(sx)=0$ divided by positive weight; it anticommutes with the internal differential and its commutator with the action differential is the Euler operator. Finite highest-weight elimination proves exactness, while the separate suspended-length filtration proves the homotopical projectivity needed for derived tensor products. These are proofs for the graded unbounded complex, rather than an invocation of the ungraded PBW theorem. [F6, F7, F8, F16, step 10.1, construct]

12.1 For $\operatorname{FreeLie}(V)$ the map in [F16] is the actual primitive inclusion $k\oplus V[1]\to C_*(\operatorname{FreeLie}(V))$, where $C_*$ includes its coaugmentation. Its proof compares the coaugmented CE module resolution with the two-step free $T(V)$-resolution, using unique last letters and a natural augmentation-preserving chain map. Hence it is a natural coalgebra quasi-isomorphism, and its full dual gives $C^*(\operatorname{FreeLie}(V))\to k\oplus V^\vee[-1]$. This includes finite positive $V$. [F16, step 11.1, algebra]

13.1 Construction3: Unbounded algebra models. The unbounded DG Lie and commutative-DG-algebra model structures used in this proof are the published structures in [F11]. In Lurie's homological indexing a fibration is degreewise surjective in every integer degree; reverse the grading to obtain our cohomological convention. Weak equivalences are quasi-isomorphisms. These source results supply the model-category hypotheses; the preceding local disk-contraction calculation alone would not establish all model axioms. [F1, F6, F11, step 12.1, algebra]

14.1 The unbounded DG Lie localization is presentable by Lurie, Proposition 2.1.16 [F11]. Its forgetful functor to complexes is conservative and preserves sifted colimits. The connective/nonpositive CDGA comparison from steps 1.1–8.1 concerns only the small test algebras; the ambient CE construction remains in unbounded CDGAs and DG Lie algebras. [F1, F3, F11, step 13.1, algebra]

15.1 For the unbounded CE functor, the needed colimit claim is exactly Lurie's Proposition 2.2.17: over a characteristic-zero field, $C^*:\mathrm{Lie}_k\to(\mathrm{CAlg}^{\mathrm{aug}}_k)^{\mathrm{op}}$ preserves small colimits. Its proof reduces via the forgetful functors to linear duality converting homotopy colimits of complexes over the field to homotopy limits. [F11, F12, step 14.1, algebra]

16.1 Since the DG Lie localization is presentable and $C^*$ preserves small colimits, the adjoint functor theorem gives a right adjoint $D$ on infinity-category localizations. Thus for all unbounded DG Lie algebras $\mathfrak g$ and augmented DG algebras $A$ there is a natural equivalence of derived mapping spaces
$$\operatorname{Map}_{\mathrm{Lie}_k}(\mathfrak g,D(A))\simeq\operatorname{Map}_{\mathrm{CAlg}^{\mathrm{aug}}_k}(A,C^*(\mathfrak g)).$$
This is Lurie's construction in §2.3; no right adjoint on raw DG Lie categories is asserted. [F11, F12, step 15.1, algebra]

17.1 Construction4: CE chains, free Lie calculation, and the adjoint D. Use $C_*(\mathfrak g)=k\oplus\bar S^c(\mathfrak g[1])$ with the coderivation fixed in step 10.1; its coproduct is the coaugmentation together with the reduced shuffle coproduct. Construction2 supplies the graded PBW proof and the Euler-contracted coaugmented CE free-module resolution. They give the natural comparison $C_*(\operatorname{FreeLie}(V))\simeq k\oplus V[1]$ for every complex $V$. Its map is the inclusion of the primitive generator $V[1]$ into CE chains; on cochains its dual is the actual commutative-algebra map $C^*(\operatorname{FreeLie}(V))\to k\oplus V^\vee[-1]$. The map respects the coproduct, not just dimensions of its homology. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 16.1, algebra, construct]

18.1 The quasi-isomorphism invariance of the CE cochain functor and its preservation of small colimits are the statements of Lurie's Propositions 2.2.6 and 2.2.17, respectively, for a characteristic-zero field [F12]. The latter is a derived statement on the infinity-category localization and is the claim used in the adjoint construction. The symmetric coalgebra calculation in steps 10.1–12.1 gives the explicit free-Lie comparison, while [F12] supplies the global colimit assertion. [F11, F12, step 17.1, algebra]

19.1 Take the $k$-linear dual of the entire CE complex, using products in
cochain degree, and give it the shuffle-dual commutative multiplication. Linear
dual sends colimits of complexes to limits by tensor--Hom adjunction over the
field. Limits of augmented commutative algebras are computed on their
underlying module objects, with componentwise operations. Consequently the
CE-cochain functor is the contravariant functor
$$C^*:\mathrm{Lie}_k\longrightarrow (\mathrm{CAlg}^{\mathrm{aug}}_{k,\mathrm{unbounded}})^{\mathrm{op}}.$$
[F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 18.1, algebra, construct]

20.1 The derived adjunction in step 16.1 is natural in both variables and therefore includes all higher simplices of the mapping spaces. This is the precise interface used below; it does not assert a strict right adjoint before localization. [F11, F12, step 19.1, algebra]

21.1 For an augmented algebra $A$, the underlying complex of $D(A)$ is $(L_{k/A})^\vee$, by Lurie's Proposition 2.3.9 [F12]. Here $L_{k/A}$ is the derived cotangent complex of the augmentation $A\to k$, computed from a cofibrant commutative-DG-algebra resolution; the dual is the $k$-linear derived dual. The formula applies in the unbounded ambient category. [F11, F12, step 20.1, algebra]

22.1 If $\mathfrak g$ is good in Lurie's sense—cofibrant and freely generated as a graded Lie algebra by a graded vector space with finite-dimensional graded pieces concentrated in strictly negative homological degrees—then the canonical unit $\mathfrak g\to D C^*(\mathfrak g)$ is an equivalence, by Lemma 2.3.5 [F12]. A finite positive-cell Lie algebra in our cohomological convention satisfies these hypotheses. [F11, F12, step 21.1, algebra]

23.1 For good $\mathfrak g,\mathfrak h$, the derived mapping-space comparison follows from that unit equivalence and the adjunction:
$$\operatorname{Map}_{\mathrm{Lie}_k}(\mathfrak g,\mathfrak h)\simeq\operatorname{Map}_{\mathrm{Lie}_k}(\mathfrak g,D C^*(\mathfrak h))\simeq\operatorname{Map}_{\mathrm{CAlg}^{\mathrm{aug}}_k}(C^*(\mathfrak h),C^*(\mathfrak g)).$$
The last term uses the underlying augmented-algebra localization. This gives the full enriched comparison on finite positive free tests, not merely a bijection on homotopy classes. [F11, F12, step 22.1, algebra]

24.1 Using a free source and its CE calculation, the underlying complex of D(A) is $(L_{k/A})^\vee$. Indeed Map(Free(V),D(A)) is $Map(A,k⊕V^\vee[-1])$, which is $Map(L_{A/k}⊗_A k,V^\vee[-1])$ by the free cotangent derivation construction. Tensor–Hom symmetry identifies this with $Map(V,(L_{A/k}⊗_A k)^\vee[-1])$. The cotangent transitivity triangle for k→A→k identifies the last complex with $(L_{k/A})^\vee$. Free resolutions give that triangle directly by their split generators and their Kahler differentials. Here cotangent means the derived free-CDGA resolution construction, in all degrees, not an outside-scope use of the ordinary-ring cotangent supplier. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 23.1, algebra, construct]

25.1 Construction5: The actual good-object unit calculation. Suppose g has only strictly positive cohomological degrees and each $g^j$ is finite-dimensional. Let $W=g^\vee[-1]$ and let $R=Sym(W)$, with the CE differential, using the direct-sum polynomial algebra. Since each degree of g is finite, the differential of a generator is a finite linear-plus-quadratic expression. It raises its nonpositive degree, so R is semifree when generators are ordered by decreasing degree. Its degree-zero part is k[t1,...,tr] with $r=\dim g^1$. Every negative degree of R is finite free over this polynomial ring: only finitely many negative generators and finite monomials can have the specified degree. Explicitly, $C^*(g)=R\otimes_{k[t_1,\ldots,t_r]}k[\![t_1,\ldots,t_r]\!]$ . [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 24.1, algebra, construct]

26.1 The actual supplier [[thm-flatness-of-noetherian-completion]] applies to
the finite polynomial ring $P=k[t_1,\ldots,t_r]$ and its $(t_1,\ldots,t_r)$-adic
completion $S=k[\![t_1,\ldots,t_r]\!]$. Hence $S$ is flat over $P$, so the tensor
displayed in step 25.1 is the derived pushout $C=R\otimes_P^{\mathbf L}S$
as well as the ordinary tensor. Cotangent base change along the augmentation
$R\to k$ gives
$$L_{C/R}\otimes_C^{\mathbf L}k\simeq L_{C\otimes_R^{\mathbf L}k\,/\,k}\simeq L_{S\otimes_P^{\mathbf L}k\,/\,k}\simeq L_{k/k}=0.$$
The middle derived tensor is $k$ because $S$ is flat over $P$ and
$S\otimes_P k=k$. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 25.1, algebra, construct]

27.1 By transitivity for $k\to R\to C$, the vanishing in step 26.1 identifies the augmentation cotangent fiber $L_{C/k}\otimes_C^{\mathbf L}k$ with $L_{R/k}\otimes_R^{\mathbf L}k$. Since $R$ is the semifree CE algebra on $W=\mathfrak g^\vee[-1]$, the latter is exactly $W$, with its linear CE differential. Dualizing gives $\mathfrak g$ itself, including its differential. Under the preceding adjunction, the canonical unit $\mathfrak g\to D C^*(\mathfrak g)$ is this map: its predual is the projection of the universal derivation to the linear CE coefficient. It is consequently an equivalence, not merely a dimension equality. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 26.1, algebra, construct]

28.1 A good Lie object is a cofibrant graded-free Lie algebra on finitely many positive generators (or degreewise finitely many when only the unit calculation is used). It has finite-dimensional graded pieces and no nonpositive degrees: each positive degree admits only finitely many words. The preceding calculation applies. The initial object is good. $\operatorname{FreeLie}(V)$ for finite positive $V$ is good and its CE cochains are the square-zero tests. Let $D^n$ be the two-term cochain complex generated by $y$ of degree $n$ and $x$ of degree $n+1$, with $d(y)=x$. The sphere inclusion $k[-n-1]\to D^n$ sends its generator to $x$. If $x\in\mathfrak g^{n+1}$ is a cycle and $n\ge1$, the map $\operatorname{FreeLie}(k[-n-1])\to \mathfrak g$ sending the generator to $x$, together with this sphere inclusion, forms a pushout diagram. Its pushout adjoins $y$ with $d(y)=x$. This is a cofibrant Lie-cell attachment; its CE algebra is the homotopy pullback along $k\oplus k[n]$, since the CE algebra of $\operatorname{FreeLie}(k[-n-1])$ is $k\oplus k[n]$ and $D^n$ is contractible. The resulting Lie algebra is again good. For an elementary base map the square-zero target is $k\oplus k[n+1]$ with $n\ge0$. Set the present cell parameter to $m=n+1\ge1$: the sphere has Lie degree $m+1=n+2$, the adjoined generator has degree $m=n+1$, and its CE square-zero target is $k\oplus k[m]$. In particular $n=0$ uses $m=1$ and adjoins a degree-one Lie generator. No degree-zero Lie cell is required or asserted. Since $C^*$ takes colimits to algebra limits, the good-unit calculation identifies its $D$-image with that actual Lie pushout. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 27.1, algebra, construct]

29.1 Construction6: Derived derivations and the actual small-base scope. The specified small bases have bounded finite homotopy and local Artinian π0 with RESIDUE FIELD k. The residue identification is π0(R)/m≅k, allowing the full stated local Artinian π0. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 28.1, algebra, construct]

30.1 For a derived A-algebra B, the relative cotangent complex is represented by B⊗_P Ω_(P/A) for a free relative algebra resolution P→B. A map from this complex to a B-module N is exactly a derivation on that resolution, hence an augmented relative map B→B⊕N after localization. A relative derivation is a map together with its specified zero homotopy on A; this homotopy will produce the map into the elementary pullback below. Independence of the resolution follows by lifting between free resolutions and their polynomial paths, generator by generator: a differential defect is a cycle in the acyclic kernel and is corrected by a primitive. This constructs the actual derived mapping-space adjunction in all module degrees. No classification of pre-existing square-zero extensions is needed for the following generation argument. [F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, step 29.1, algebra, construct]

31.1 Lurie Lemma 1.1.20 and its proof establish the needed finite elementary factorization in the same small-base context: a morphism $f:A\to B$ between small augmented connective derived $k$-algebras is small exactly when $\pi_0A\to\pi_0B$ is surjective, and a small morphism is a finite composite of elementary morphisms. The proof uses the smallest nonzero homotopy degree of $K=\operatorname{fib}(f)$, the local-Artinian residue field $k$, and the cotangent-connectivity estimate in Lurie Theorem A.7.4.3.1 to produce the required map $L_{B/A}\to k[n+1]$ and elementary pullback. These hypotheses match the specified small bases in [[def-gts-formal-moduli-problem-on-small-derived-bases]]; the finite-dimensional total homotopy ensures the induction terminates. We use the source's proof rather than the preceding attempted monad-bar connectivity argument. [F1, F9, F12, step 30.1, algebra]

32.1 The elementary map has the form $B'=B\times_{k\oplus k[n+1]}k\to B$, and its fiber removes one finite-dimensional class from $K$ while retaining the chosen nullhomotopy. The residue-field and Artinian hypotheses are used in Lemma 1.1.20 to choose a nonzero map from the lowest homotopy module to $k$. Thus the local factorization claim includes the map data needed for applying the formal-moduli excision axiom, not only an equality of homotopy groups. [F1, F9, F12, step 31.1, algebra]

33.1 Applying the factorization to $A\to k$ expresses every specified small base as a finite tower of elementary extensions of $k$. The number of extensions is finite because each step strictly decreases the finite total homotopy dimension of the fiber. [F1, F9, F12, step 32.1, algebra]

34.1 Lurie Proposition 2.3.4 and Lemma 2.3.5 identify the good positive-cell DG Lie objects on which the unit $\mathfrak g\to D C^*(\mathfrak g)$ is an equivalence. The free-Lie/square-zero calculation is Remark 2.2.15. These are the exact source hypotheses: characteristic-zero $k$, finite-dimensional graded generators in strictly positive cohomological degrees, and cofibrancy. The derived adjunction then identifies the full mapping spaces between these good tests as in step 23.1. [F11, F12, step 33.1, algebra]

35.1 Lurie Theorem 2.3.1 proves that $D$ is a deformation theory for the characteristic-zero augmented-algebra deformation context. Proposition 1.3.5(4) states that for the small-base pullback diagrams in that context, $D$ carries the pullback to a pushout. Combined with Lemma 1.1.20's finite elementary factorization, Proposition 2.3.4's good-object closure, and Lemma 2.3.5's unit, this gives the canonical small-base counit $A\to C^*D(A)$ as an equivalence and identifies the finite positive-cell model $D(A)$. The precise conclusions used here concern space-valued formal moduli tests and their actual derived mapping spaces; they make no assertion for arbitrary set-valued functors or an infinite pro-Artinian completion. [F1, F9, F12, step 34.1, algebra]

36.1 For the Lie-operad resolution, the characteristic-zero rectification conclusion follows from [F13] under its compatible-Σ-splitting hypothesis. The induced equivalence of simplicial localizations preserves the derived underlying complexes and all mapping spaces. This is the exact rectification result used in the Statement; the separate tree-filtration sketch is not needed. [F11, F13, step 35.1, algebra] ∎
