---
id: lem-nilpotent-flat-lifting-of-finite-smooth-factorizations
kind: lemma
title: Nilpotent lifting of finite smooth factorizations
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-finite-smoothing-factors-and-strict-standard-jacobian-witnesses
- lem-smooth-localization-unit-factors-and-free-differential-retracts
- def-axiom-of-choice
- thm-jacobian-criterion-smooth-morphism
- thm-flatness-criteria-by-injections-and-ideals
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 07CK
    url: https://stacks.math.columbia.edu/tag/07CK
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
dependency_level: 2
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. If R is Noetherian, I is nilpotent, R→L is flat and the finite smooth-factor property holds for R/I→L/IL, then it holds for R→L. The proof includes a standard-smooth retract and exact finite relation killing.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[def-finite-smoothing-factors-and-strict-standard-jacobian-witnesses]].

[F2] The following existing interface is used at its literal public scope: [[lem-smooth-localization-unit-factors-and-free-differential-retracts]].

[F3] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F4] The following existing interface is used at its literal public scope: [[thm-jacobian-criterion-smooth-morphism]].

[F5] The following existing interface is used at its literal public scope: [[thm-flatness-criteria-by-injections-and-ideals]].

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 Every smooth finitely presented `R`-algebra `C` has a standard-smooth finitely presented retract extension. First the already constructed symmetric-conormal algebra `C_1=Sym_C(J/J^2)` is smooth over `R`, retracts to `C`, and has a globally free differential module of one finite rank `d`. Take a finite polynomial presentation `C_1=R[X_1,...,X_N]/K`. Its conormal sequence splits, so `K/K^2 direct_sum C_1^d=C_1^N`. Adjoin `d` dummy polynomial variables and impose the `d` equations setting those variables equal to zero. This leaves the algebra unchanged and enlarges its conormal module to `(K/K^2) direct_sum C_1^d`, which is free. Choose finitely many relations lifting a basis of it. [F1, F2, F3, F4, F5, given, construct, algebra]

2.1 Those chosen relations generate the full ideal after inverting one element `s=1+h`, `h` in that ideal. Indeed the finite quotient of the full ideal by the chosen relations equals the full ideal times that quotient; the determinant Nakayama argument gives just such an annihilator. Inverting it does not change the quotient algebra. Introducing one extra variable with equation `u s-1` then gives a finite presentation `C_1=R[z_1,...,z_M]/(F_1,...,F_r)` in which the displayed relation classes form a free basis of the conormal module and `Omega_(C_1/R)` is free of rank `d=M-r`. The derivative rows `DF_j` form a split free summand of `C_1^M`; lift a basis of the free quotient to choose `d` further rows `N_i` making the stacked `M x M` matrix `(DF;N)` invertible. The entries of `N` have finite polynomial lifts. [F1, F2, F3, F4, F5, step 1.1, given, construct, algebra]

3.1 Add `M` variables `T` and impose `N(z)T=0`. Change polynomial coordinates to `W=z+T`, and let `Delta` be the determinant of derivatives of the `M` equations `F(W-T),N(W-T)T` in the `M` `T`-columns, with `W` fixed. At `T=0` that matrix is `(-DF;N)`, invertible over `C_1`. Therefore `C_2=( C_1[T]/(N(z)T) )_(Delta)` has a retraction to `C_1` by `T=0`, since `Delta(0)` is a unit. In the coordinates `(W,T)` its defining `M` equations have the invertible indicated Jacobian determinant, so `C_2` is **standard smooth** over `R`. This proves the retract extension using finite presentations and actual matrices. Composing the retractions gives `C -> C_2 -> C`. The zero algebra case is immediate. Thus a map through any smooth finite algebra can be replaced by a map through a standard one, preserving its original target map exactly. [F1, F2, F3, F4, F5, step 2.1, given, construct, algebra]

4.1 Assume `I^2=0`, and let `A -> L` be finitely presented over `R`. By hypothesis and step 1.1–step 3.1 over `R/I`, factor `A/IA -> C_0 -> L/IL` with `C_0` standard smooth. Present this factor as `C_0=(A/IA)[t_1,...,t_s]/(gbar_1,...,gbar_u)`. Lift the `gbar_j` to `A[t]`, choose lifts `lambda_i` of the images of `t_i`, and write the finitely many errors `g_j(lambda)=sum_l epsilon_(j,l) mu_(j,l)`, with `epsilon_(j,l) in I`. Set `A'=A[t,delta_(j,l)]/( g_j-sum_l epsilon_(j,l)delta_(j,l) )`. It maps to `L` by `t_i -> lambda_i`, `delta_(j,l) -> mu_(j,l)`, extending the original map. Its reduction is `C_0[delta]`, still standard smooth over `R/I`. [F1, F2, F3, F4, F5, step 3.1, given, construct, algebra]

5.1 Lift a standard-smooth polynomial presentation of `A'/IA'` coefficientwise to `R` and invert its chosen derivative determinant. This gives a standard-smooth finitely presented `R`-algebra `B`. There is an `R`-map `B -> A'` inducing the displayed isomorphism modulo `I`: choose lifts of the finitely many coordinate images and correct the equation error by the inverse Jacobian block. The error is in `IA'`, so square-zero Taylor expansion makes one correction exact; inverted denominators remain units since their reductions are units. This is the explicit global standard-smooth lifting calculation, not a global conclusion inferred merely from a locally formal-smooth provider. [F1, F2, F3, F4, F5, step 4.1, given, construct, algebra]

6.1 This map is surjective: for `a in A'`, lift its reduction by an element of `B`; the difference is a finite sum of `I` times elements of `A'`. Lift those elements modulo `I` in turn, leaving an error in `I^2 A'=0`. Its kernel `J` is contained in `IB` and is finitely generated because `B` is Noetherian. We have constructed `A -> B/J -> L`, with `B/R` smooth and `J subset IB` finite. [F1, F2, F3, F4, F5, step 5.1, given, construct, algebra]

7.1 It suffices to kill one generator `h=sum_i epsilon_i b_i` of `J`, where `epsilon_i in I`. The target relation is `sum_i epsilon_i phi(b_i)=0`. Flatness supplies an exact finite relation decomposition. Explicitly tensor the kernel sequence of the row map `R^r --(epsilon_i)--> R` with `L`. The vector `(phi(b_i))` lies in this kernel, so is a finite sum of pure tensors from it. Hence there are finitely many `a_ij in R`, `lambda_j in L` such that `phi(b_i)=sum_j a_ij lambda_j` and `sum_i epsilon_i a_ij=0`. This proves the required equational flatness witness directly; no presentation of flatness as a finite equation list is assumed. [F1, F2, F3, F4, F5, step 6.1, given, construct, algebra]

8.1 Define `C=B[x_j]/(b_i-sum_j a_ij x_j)` and map it to `L` by `x_j -> lambda_j`. Apply steps 4.1–6.1 to obtain `C -> B'/J' -> L`, with `B'/R` smooth and `J' subset IB'`. Lift the induced map `B -> B'/J'` to an `R`-map `alpha:B -> B'`. This global lift is justified by step 1.1–step 3.1: extend `B` to its standard-smooth retract, compose the map with the retraction, lift that standard algebra by the single Jacobian correction across the square-zero `J'`, and restrict to `B`. If `beta:B' -> L` is the displayed target map, then `beta alpha=phi` exactly because `beta` kills `J'`. [F1, F2, F3, F4, F5, step 7.1, given, construct, algebra]

9.1 For chosen lifts `xi_j in B'`, the relation in `C` gives `alpha(b_i)=sum_j a_ij xi_j+theta_i`, with `theta_i in J' subset IB'`. Therefore `alpha(h)=sum_j(sum_i epsilon_i a_ij)xi_j+sum_i epsilon_i theta_i=0`. The first sum is zero by step 7.1; the second is zero by `I^2=0`. Iterate over the fixed finite list of generators of `J`. The resulting smooth finite algebra kills all of `J`, and therefore factors the map from the original `A` to `L`. Every target identity is preserved exactly throughout. [F1, F2, F3, F4, F5, step 8.1, given, construct, algebra]

10.1 If `I^N=0`, induct on the finite integer `N`. Let `J=I^(N-1)`, so `J^2=0`. The map `R/J -> L/JL` is flat. The induction hypothesis applied to `I/J` gives the finite smooth-factor property over `R/J`; the square-zero result for `J` then gives it over `R`. This proves the theorem. [F1, F2, F3, F4, F5, step 9.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. Completion and readiness are tracked in the run’s item record.
