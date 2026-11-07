---
id: lem-projective-formal-finite-etale-algebras-algebraize
kind: lemma
title: Projective formal finite-etale algebraization
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-projective-degree-zero-formal-functions-over-noetherian-bases
- def-axiom-of-choice
- thm-choice-implies-dependent-implies-countable-choice
- lem-projective-coherent-cohomology-finite-and-vanishing
- thm-flatness-of-noetherian-completion
- cor-completion-commutes-with-finite-quotients-and-submodules
- thm-finite-etale-algebras-invariant-under-nilpotent-thickening
- thm-artin-rees-lemma
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 09ZT
    url: https://stacks.math.columbia.edu/tag/09ZT
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
dependency_level: 1
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. Let (A,m) be a complete Noetherian local ring, let X be projective over A, and write X_n=X×_A Spec(A/m^(n+1)). The restriction functor from finite étale O_X-algebras to compatible systems of finite étale O_Xn-algebras is an equivalence, with multiplication and unit preserved. AC supplies the DC compatible-lift branch; no enumerated-density hypothesis is imposed at this AC scope.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[lem-projective-degree-zero-formal-functions-over-noetherian-bases]].

[F2] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F3] The following existing interface is used at its literal public scope: [[thm-choice-implies-dependent-implies-countable-choice]].

[F4] The following existing interface is used at its literal public scope: [[lem-projective-coherent-cohomology-finite-and-vanishing]].

[F5] The following existing interface is used at its literal public scope: [[thm-flatness-of-noetherian-completion]].

[F6] The following existing interface is used at its literal public scope: [[cor-completion-commutes-with-finite-quotients-and-submodules]].

[F7] The following existing interface is used at its literal public scope: [[thm-finite-etale-algebras-invariant-under-nilpotent-thickening]].

[F8] Artin–Rees holds for a finite module over a Noetherian ring and a submodule. [[thm-artin-rees-lemma]]

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 Put `I=m`. The source [F1] gives projective degree-zero formal functions over this Noetherian base, and [F4] gives the finite projective cohomology and eventual vanishing used below. The compatible-lift selections in the construction use dependent choice, which follows from the explicit AC hypothesis by [F3]; they do not require an enumeration of `A` or its quotients. [F1, F2, F3, F4, given]

2.1 On the fixed standard affine cover of projective `r`-space, a quasi-coherent module has the alternating localization Cech complex of length `r+1`. Principal-cover exactness is algebraic: after taking a common power of finitely many covering functions, write `1` as their linear combination and insert these coefficients in the usual alternating contraction. Thus refinement by a finite principal covering preserves cohomology. This establishes the finite-affine-cover calculation without choosing primes of arbitrary rings or invoking an injective-resolution theorem. Closed-immersion pushforward from `X` has the same complex on these charts. [F1, F2, F3, F4, F5, F6, F7, step 1.1, given, construct, algebra]

3.1 For `O(d)` the complex decomposes by Laurent monomials `T_0^e_0...T_r^e_r` with total degree `d`. If the set of negative exponents is empty, the corresponding simplex complex leaves one copy of `A` in degree zero. If that set is all indices it leaves one copy in degree `r`; there are finitely many such monomials for fixed `d`. Otherwise insert the least index outside the negative-exponent set to contract the complex. Consequently the cohomology of each twist is finite over `A`, vanishes above `r`, and is zero in positive degrees for sufficiently large twist. For `r=0` the single chart gives the assertion directly. [F1, F2, F3, F4, F5, F6, F7, step 2.1, given, construct, algebra]

4.1 For any coherent module `H` on a closed subscheme of this projective space, choose finite module generators on its finitely many standard charts. A generator over `D_+(T_i)` extends after multiplying by a sufficiently large power of `T_i`: on each other chart clear a denominator, and on every pair clear the denominator killing the difference of two extensions. There are only finitely many charts, pairs and generators; taking their maximum exponent makes the extensions glue. They give a surjection from a finite sum of twists onto `H`; its kernel is coherent because the chart rings are Noetherian. Global generation after sufficiently large twist follows. Repeat this construction only a fixed finite number of times, at most `r+1`. Descending on cohomological degree in the resulting short exact sequences and using step 3.1 proves both finiteness of every `H^q(X,H)` and eventual positive-degree vanishing after twisting. Every selection in this paragraph belongs to a fixed finite family. There is no countable choice of resolutions. The same argument works after a Noetherian affine base change. [F1, F2, F3, F4, F5, F6, F7, step 3.1, given, construct, algebra]

5.1 Write `I=m`. The Rees ring `S=direct_sum_(n>=0) I^n t^n` is a finitely generated `A`-algebra: if `I=(a_1,...,a_s)`, it is generated by `a_j t`. It is therefore Noetherian. For any coherent `H` on `X`, the graded module sheaf `H^R=direct_sum I^n H` is a quotient of `H tensor_A S`, generated in degree zero. It is a coherent module on the projective scheme `X_S`: on a standard chart it is the image of the finite module `H(chart) tensor_A S` in `H(chart)[t]`. Noetherianity makes its kernel finite. Its finite Cech complex is the graded direct sum of the Cech complexes for `I^n H`; hence step 4.1 over `S` proves `G^q = direct_sum_(n>=0) H^q(X,I^n H)` is a finite graded `S`-module for every fixed `q`. This argument uses projective cohomology already proved in step 2.1–step 4.1, not proper base change. [F1, F2, F3, F4, F5, F6, F7, step 4.1, given, construct, algebra]

6.1 For any finite module `M` over a Noetherian local ring `C` and any ideal `J` contained in its maximal ideal, Artin–Rees [F8] gives `T=intersection J^n M=JT`; Nakayama gives `T=0`. For the complete ring `A`, choose a finite presentation `A^r -> M` with kernel `N`. Applying [F6] to `N subset A^r` identifies the completion of `M` with `completion(A^r)/N completion(A^r)`. Since `A` is complete, this quotient is `A^r/N=M`; hence every finite A-module is complete and separated. [F2, F6, F8, step 5.1, given, construct, algebra]

7.1 Put `M=H^0(X,H)` and `M_n=H^0(X,I^n H)` inside `M`. Finiteness of `G^0` gives, for one fixed `c`, `I^n M subset M_n subset I^(n-c) M` for `n>=c`. Thus `M` is complete and separated for the filtration `M_n`. The exact sequence for `0 -> I^n H -> H -> H/I^n H -> 0` gives a connecting map into `H^1(X,I^n H)`. If `(s_n)` is a compatible family in `H^0(X,H/I^n H)`, its connecting classes `(delta_n)` are compatible under the inclusions of ideal powers. For fixed `m`, let `c` bound the generator degrees of `G^1`, and set `k=max(m,c)`. For `n>=k`, standard degree-one generation of the Rees ring gives `H^1(X,I^n H) = I^(n-k) H^1(X,I^k H)` as submodule generation in `G^1`. Its image in `H^1(X,I^m H)` is therefore contained in `I^(n-k) H^1(X,I^m H)`. The latter module is finite by step 4.1 and separated by step 6.1. Consequently `delta_m=0`. This holds for every `m`, so each `s_n` is the image of a class in `M/M_n`, and these classes are compatible. Completeness for `M_n` gives a unique element of `M` inducing all `s_n`. We have proved, for **every** coherent `H` on this projective `X`, `H^0(X,H) = inverse_limit_n H^0(X,H/I^n H)`. In particular, if `E,F` are finite locally free, take `H=E^dual tensor F`: compatible maps of their reductions lift uniquely to a map `E -> F`. This is the formal Hom assertion needed for multiplication, proved before object effectivity. [F1, F2, F3, F4, F5, F6, F7, step 6.1, given, construct, algebra]

8.1 We also need a **projective closed-fibre detection** statement without importing the AC-qualified projective properness theorem. Suppose a coherent module `Q` on `X` satisfies `Q/IQ=0`. The generators `a_1,...,a_s` of `I` give a surjection `Q^s -> Q`; its kernel is coherent. For a sufficiently large twist `d`, step 4.1 kills the first cohomology of that kernel, so the induced map on sections is surjective. With `M=H^0(X,Q(d))`, this says `M=IM`. The finite `A`-module `M` is zero by Nakayama. Since the same large twist is globally generated, `Q=0`. If a closed subset `Z` of `X` misses `X_0`, give it its reduced closed-subscheme structure. Its coherent module `O_Z` has zero reduction modulo `I`, so the preceding argument makes it zero and `Z` is empty. This is the only closed-fibre conservativity used below. It is derived from the finite projective calculations, **not** from a general valuative criterion or an unqualified assertion that projective morphisms are universally closed. [F1, F2, F3, F4, F5, F6, F7, step 7.1, given, construct, algebra]

9.1 Each given `B_n` is finite locally free on `X_n`. Its rank may vary among the finitely many closed-fibre components. The compatible transition isomorphisms are part of the given system; [F7] supplies uniqueness of finite étale algebra maps across each nilpotent thickening on affine charts, and the unique maps glue on overlaps. We use the given system itself, without assuming any enumeration of rings or presentations. [F2, F7, step 8.1, given, algebra]

10.1 Let `gr O_X=direct_sum I^n O_X/I^(n+1) O_X`. It is a quotient of `O_X0 tensor_(A/I) gr_I A`, generated in degree zero, and is coherent on the projective scheme obtained from `X_0` by the Noetherian affine base change `gr_I A`. Since the `B_n` are locally free and compatible, their successive kernels are `ker(B_n -> B_(n-1)) = B_0 tensor_(O_X0) (I^n O_X/I^(n+1) O_X)`. Apply step 4.1 to the coherent graded module `B_0 tensor gr O_X`. A single large horizontal twist `d` makes every homogeneous piece globally generated and kills its positive cohomology. Indeed the Cech calculation respects the grading; generation in degree `n` includes the degree-`n` components of the global evaluation map. In particular `H^1` of every successive kernel vanishes, as does `H^1(B_0(d))`. The exact sequences show that `H^0(X_n,B_n(d)) -> H^0(X_(n-1),B_(n-1)(d))` is surjective for every `n`. [F1, F2, F3, F4, F5, F6, F7, step 9.1, given, construct, algebra]

11.1 Choose finitely many generators of `B_0(d)` and lift them compatibly to sections of every `B_n(d)`: the surjections of step 10.1 provide an extension at each stage, and dependent choice supplies a sequence for the fixed finite family. This constructs compatible surjections `O_Xn(-d)^r -> B_n`, since surjectivity holds on the closed fibre and its ideal in `X_n` is nilpotent. Let `K_n` be their kernels. A surjection onto a finite locally free module splits locally, so the `K_n` are finite locally free and reduce compatibly. The graded argument of step 10.1 applies to this compatible system of finite locally free modules as well; it gives a fixed `e` and compatible surjections `O_Xn(-e)^s -> K_n`, using dependent choice once more for the finite family of generators. [F2, F3, F4, step 10.1, given, construct, algebra]

12.1 The composites are compatible matrices `P_n: O_Xn(-e)^s -> O_Xn(-d)^r` whose entries are sections of `O_Xn(e-d)`. Apply step 7.1 with `H=O_X(e-d)`: each entry lifts uniquely to `X`. The resulting matrix `P` defines a coherent module `E = cokernel[ O_X(-e)^s --P--> O_X(-d)^r ]`. Right exactness of reduction gives specified compatible isomorphisms `E/I^(n+1)E = B_n` for every `n`. This is actual object effectivity: a single finite matrix on `X`, not an unproved inverse-limit sheaf. [F1, F2, F3, F4, F5, F6, F7, step 11.1, given, construct, algebra]

13.1 The module `E` is finite locally free. At a point of `X_0`, put `C=O_X,x` and lift a basis of `E_x/I E_x` to a map `C^t -> E_x`. For every `n` its reduction is a surjection between free modules of the same rank over the local ring `C/I^(n+1)C`, hence an isomorphism. Nakayama first makes `C^t -> E_x` surjective; its kernel lies in every `I^n C^t` and is zero by the separation argument of step 6.1 (only `I subset maximal(C)` is needed). Hence `E_x` is free. The locally free locus of the finitely presented module `E` is open and contains `X_0`. Its closed complement misses the closed fibre and is empty by the projective detection argument step 8.1. Thus `E` is finite locally free everywhere. [F1, F2, F3, F4, F5, F6, F7, step 12.1, given, construct, algebra]

14.1 Apply formal Hom from step 7.1 to `E tensor E` and `E`. The compatible multiplications on `B_n` give one map `mu:E tensor E -> E`. Applying it to `O_X` and `E` gives one unit `u:O_X -> E`. The two associativity composites `E tensor E tensor E -> E` agree modulo every `I^n`; formal Hom **injectivity** makes them equal. The same argument proves left and right unit identities and commutativity. Thus `B=(E,mu,u)` is a finite locally free commutative unital algebra. For algebra maps, formal Hom gives the unique underlying linear map and injectivity applied to the two multiplication and unit composites makes it an algebra map. [F1, F2, F3, F4, F5, F6, F7, step 13.1, given, construct, algebra]

15.1 The relative differentials `Omega_(B/O_X)` are coherent and reduce to zero on `X_0` because `B_0` is etale. Nakayama makes them zero at every point over `X_0`; their support is closed. It avoids `X_0`, so is empty by step 8.1. Thus the finite locally free algebra is etale everywhere. This proves the exact projective intermediate statement, including multiplication, unit and algebra-map full faithfulness. [F1, F2, F3, F4, F5, F6, F7, step 14.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. Completion and readiness are tracked in the run’s item record.
