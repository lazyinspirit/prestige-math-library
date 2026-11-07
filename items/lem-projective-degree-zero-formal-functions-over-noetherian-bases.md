---
id: lem-projective-degree-zero-formal-functions-over-noetherian-bases
kind: lemma
title: Projective degree-zero formal functions
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-axiom-of-choice
- lem-projective-coherent-cohomology-finite-and-vanishing
- thm-artin-rees-lemma
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 02OC
    url: https://stacks.math.columbia.edu/tag/02OC
    locator: Theorem30.20.5, full displayed proof read; linked30.20.4 proof not read here. Local degree-zero construction is bound separately.
dependency_level: 0
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. For a projective Y over Noetherian R, ideal I and coherent E, completion_I H0(Y,E)≅lim H0(Y_(R/I^n),E/I^nE), naturally and multiplicatively for algebra coefficients. R need not be complete/local and I need not be Jacobson.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F2] The following existing interface is used at its literal public scope: [[lem-projective-coherent-cohomology-finite-and-vanishing]].

[F3] The following existing interface is used at its literal public scope: [[thm-artin-rees-lemma]].

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 Write `H=E` and `H_n=H/I^n H`. The projective morphism has a closed immersion into a projective space over `R`; hence [F2] gives finite `R`-modules `H^q(Y,H)` for every coherent `H`. The same conclusion holds after any Noetherian base change and for every coherent sheaf on the resulting projective scheme. [F1, F2, given, algebra]

2.1 Form the Noetherian Rees ring `S=direct_sum_(n>=0) I^n t^n`. The graded module sheaf `direct_sum I^n H` is the image of `H tensor_R S` on `Y_S`, hence is coherent: its chart modules are finitely generated over the corresponding Noetherian chart rings. On the finite affine Cech cover, sections and differentials respect this grading. The affine projection `Y_S -> Y` identifies its cohomology with that of this graded sheaf on `Y`; the finite affine Cech complex commutes with the direct sum decomposition. Applying step 1.1 over `S` gives finite graded modules `G^q=direct_sum_(n>=0) H^q(Y,I^n H)`. Fix a generator-degree bound `c_q` for each of `G^0,G^1`. Because the Rees ring is generated in degree one, for every `k>=c_q` and `n>=k` its homogeneous pieces satisfy `G^q_n = I^(n-k) G^q_k`. Here multiplication denotes the graded Rees action, so subsequent inclusion into a lower ideal-power cohomology module becomes the usual scalar multiplication by that power of `I`. [F1, F2, F3, step 1.1, given, construct, algebra]

3.1 Let `M=H^0(Y,H)` and let `M_n=H^0(Y,I^n H)` be its submodules. The degree-zero bound gives `I^n M subset M_n subset I^(n-c_0) M` for `n>=c_0`. The two filtrations are cofinal. Therefore their inverse limits of quotients are canonically isomorphic, without selecting representatives: projection from a sufficiently deep quotient defines each coordinate for the other filtration, and independence follows from compatibility. Thus `completion_I M = inverse_limit_n M/M_n`. [F1, F2, F3, step 2.1, given, construct, algebra]

4.1 We record exactly the separatedness substitute when `I` is **not** in the Jacobson radical. For any finite `R`-module `Q`, let `T=intersection_(r>=0) I^r Q`. This submodule is finite because `R` is Noetherian. Artin–Rees, proved by applying Noetherianity of the Rees ring to `direct_sum (T intersect I^r Q)`, implies `T=IT`. The finite-module determinant argument then supplies one `a in I` such that `(1-a)T=0`: write a finite set of generators of `T` as their linear combinations with entries in `I`, and take the determinant of `1` minus that coefficient matrix. If `t in T` is killed by `I^m`, then `t=at=a^m t=0`. Consequently `(intersection_r I^r Q) intersect Q[I^m] = 0` for every positive `m`. Unlike ordinary Krull separation, this conclusion requires no Jacobson-radical hypothesis. [F1, F2, F3, step 3.1, given, construct, algebra]

5.1 Given a compatible family `s_n in H^0(Y,H_n)`, let `delta_n` be its image under the connecting map of `0 -> I^n H -> H -> H_n -> 0`. The classes `delta_n in H^1(Y,I^n H)` are compatible under inclusion of ideal powers, and `I^n delta_n=0` because the connecting map is `R`-linear and its source is annihilated by `I^n`. Fix `m` and take `k>=max(m,c_1)`. For every `n>=k`, step 2.1 shows that the image of `delta_n` in `Q_m=H^1(Y,I^m H)` lies in `I^(n-k) Q_m`. Hence `delta_m` lies in `intersection_r I^r Q_m`. It is also killed by `I^m`, so step 4.1 gives `delta_m=0`. This holds for every `m`. [F1, F2, F3, step 4.1, given, construct, algebra]

6.1 Exactness now identifies each `s_n` with one and only one class in `M/M_n`: its connecting class vanishes and the kernel of the restriction map from `M` is exactly `M_n`. These classes form a compatible family. Conversely any compatible family of such quotient classes gives the specified compatible sections. Combining this bijection with step 3.1 proves the claimed isomorphism. Injectivity, as well as surjectivity, is included: no separation of `M` before completion is asserted. The construction is made from natural inclusions and connecting maps, so is natural; for algebra-valued sheaves the section maps preserve unit and multiplication, and the inverse-limit isomorphism therefore does too. [F1, F2, F3, step 5.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. Completion and readiness are tracked in the run’s item record.
