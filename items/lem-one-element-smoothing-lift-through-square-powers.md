---
id: lem-one-element-smoothing-lift-through-square-powers
kind: lemma
title: One-element smoothing lift
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- lem-smooth-localization-unit-factors-and-free-differential-retracts
- def-axiom-of-choice
- thm-jacobian-criterion-smooth-morphism
- thm-smooth-morphism-formally-smooth-finite-presentation
- thm-smooth-locus-open
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 07CP
    url: https://stacks.math.columbia.edu/tag/07CP
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
dependency_level: 2
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. Let `R` be Noetherian, let `L` be an `R`-algebra, and let `pi in R` satisfy

`Ann_R(pi)=Ann_R(pi^2)` and `Ann_L(pi)=Ann_L(pi^2)`.

Given finitely presented `R/pi^2`-algebra `C_0` and an `R`-map `C_0 -> L/pi^2 L`, construct a finitely presented `R`-algebra `D` with a map to `L` and a compatible map `C_0 -> D/pi D`. The construction has these properties:

- `D[1/pi]` is a polynomial algebra over `R[1/pi]`;
- `D/R` is smooth at every prime over a smooth point of `C_0/(R/pi^2)` containing `pi`;
- `D/pi D` is smooth over `C_0/pi C_0` at those primes.

No smoothness of the entire `C_0` is assumed. If it is smooth everywhere, the two displayed open regimes cover `Spec D`, so `D/R` is smooth everywhere.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[lem-smooth-localization-unit-factors-and-free-differential-retracts]].

[F2] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F3] The following existing interface is used at its literal public scope: [[thm-jacobian-criterion-smooth-morphism]].

[F4] Smooth finite-presentation morphisms have the local square-zero lifting property. [[thm-smooth-morphism-formally-smooth-finite-presentation]]

[F5] Under AC the smooth locus of a locally finitely presented morphism is open. [[thm-smooth-locus-open]]

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 Write `P=R[x_1,...,x_n]`, `C_0=P/J`, with `J=(f_1,...,f_m)` containing `pi^2`. Let `bar P=P/pi^2 P`, `bar J=J/pi^2 P`. On the smooth locus of `C_0` over `R/pi^2`, choose finitely many principal opens `D(a_k)` and subsets `E_k subset {1,...,m}` for which the classes of `f_j`, `j in E_k`, are a basis of the conormal module. Choose them with an invertible corresponding Jacobian minor on that open. These witnesses exist by the smooth chart/conormal calculation, and the locus is quasi-compact because `C_0` is Noetherian. For the conormal injection, [F4] locally lifts the identity of the smooth algebra across its square-zero thickening by `bar J/bar J^2`; the differences between polynomial coordinates and their lifts yield a left inverse to the conormal map. Selecting a basis among the finitely many relation classes and a nonzero fibre minor gives these witnesses. The smooth locus is open by [F5] and is quasi-compact because `C_0` is Noetherian. Redundant equations are not counted as independent Jacobian rows. All the choices are a fixed finite family. [F1, F2, F3, F4, F5, given, construct, algebra]

2.1 Arrange after a harmless further localization that the same `f_j`, `j in E_k`, generate `bar J`, not just its conormal module. Indeed `bar J=bar J_k+bar J^2` locally, so the finite module `bar J/bar J_k` equals `bar J` times itself. The determinant form of Nakayama gives an annihilator `1+b'_k` with `b'_k in bar J_(a_k)`. Write `b'_k=b_k/a_k^N`; inverting `a_k^N+b_k` kills this quotient and does not remove any point of `C_0` in the original `D(a_k)`, since its class there is the unit `a_k^N`. This also explains exactly which denominator is to be inverted; multiplying by the numerator `b_k` alone would not be valid. Increase powers of the resulting `a_k` to clear denominators. We obtain polynomial identities `a_k f_l = sum_(j in E_k) h_(k,l)^j f_j + pi^2 g_(k,l)` for every `l`. For `l in E_k`, use `h_(k,l)^j=a_k delta_(l,j)` and `g_(k,l)=0`. [F1, F2, F3, step 1.1, given, construct, algebra]

3.1 In `P[z_1,...,z_m]` put `F_j=f_j-pi z_j`, `Q_(k,l)=a_k z_l-sum_(j in E_k)h_(k,l)^j z_j-pi g_(k,l)`. Define `D` by all equations `F_j=0` and `Q_(k,l)=0`. It is finitely presented. If the given map sends `x_i` to `lambda_i mod pi^2`, choose lifts `lambda_i in L` and write `f_j(lambda)=pi^2 mu_j`. Send `x_i -> lambda_i`, `z_j -> pi mu_j`. The `F_j` vanish. For `Q_(k,l)`, the image is `pi` times `a_k(lambda)mu_l-sum h_(k,l)^j(lambda)mu_j-g_(k,l)(lambda)`. The polynomial identity of step 2.1 says this bracket is killed by `pi^2`; the assumed annihilator equality in `L` says it is killed by `pi`. Thus every `Q_(k,l)` vanishes. This constructs the promised map `D -> L`. [F1, F2, F3, step 2.1, given, construct, algebra]

4.1 Modulo `pi`, every `f_j` is zero in `D`, so the images of the `x_i` give the compatible map `C_0 -> D/pi D`. There is a key exact identity already in the polynomial ring: `pi Q_(k,l) = -a_k F_l + sum_(j in E_k) h_(k,l)^j F_j`. It follows at once that after inverting `pi` all the `Q` equations are redundant. The `F_j` then eliminate the `z_j`, giving `D[1/pi]=R[1/pi][x_1,...,x_n]`. [F1, F2, F3, step 3.1, given, construct, algebra]

5.1 Fix `k` and define the auxiliary algebra `D_k` using only `F_j`, `j in E_k`, and `Q_(k,l)`, `l notin E_k`. There are exactly `m` equations in `n+m` variables. At a prime containing `pi` over the indicated smooth chart, use as derivative columns the `|E_k|` `x`-variables from its invertible conormal/Jacobian minor and the `m-|E_k|` variables `z_l` with `l notin E_k`. The Jacobian block matrix is `[ J_k 0 ; * a_k identity ]`. The upper-right block is zero because a row `F_j` differentiates to `-pi` only in its own `z_j`, and that `j` belongs to `E_k`. Its determinant is `det(J_k) a_k^(m-|E_k|)`, a unit at the prime. The actual standard-smooth Jacobian criterion therefore proves `D_k/R` smooth there. This explicit determinant avoids assuming an unproved dimension-count-to-flatness implication. [F1, F2, F3, step 4.1, given, construct, algebra]

6.1 After reducing modulo `pi` and inverting `a_k`, the `Q_(k,l)` eliminate `z_l` for `l notin E_k`. The remaining `f_j`, `j in E_k`, generate the reduced ideal by step 2.1. Hence `(D_k/pi D_k)_(a_k) = (C_0/pi C_0)_(a_k)[z_j : j in E_k]`. This is smooth over the specified reduced base algebra. It remains to prove that adding all other equations to `D_k` does not change its local ring at the point; this is essential. [F1, F2, F3, step 5.1, given, construct, algebra]

7.1 First the identity in step 4.1, with `k` fixed, implies all `F_l` vanish in `(D_k)_(a_k)`: its `Q_(k,l)` vanish, and its selected `F_j` vanish, so `a_k F_l=0`. Therefore for every other `k'`, `pi Q_(k',l)=0` in that localization. [F1, F2, F3, step 6.1, given, construct, algebra]

8.1 Compare the relations of chart `k` and chart `k'` in `bar J/bar J^2`. Since the `f_j`, `j in E_k`, are a basis there, their coefficient of the resulting zero relation vanishes in `(C_0)_(a_k)`. Explicitly for `j in E_k`, `c_j=a_(k') h_(k,l)^j - sum_(j' in E_(k')) h_(k',l)^(j') h_(k,j')^j` vanishes modulo `J` after inverting `a_k`. Clearing a finite power yields `a_k^N c_j in J_k + pi^2 P`. Expanding the combination `a_k Q_(k',l)-a_(k')Q_(k,l)+sum_(j' in E_(k'))h_(k',l)^(j')Q_(k,j')` modulo `pi` gives exactly `sum_(j in E_k)c_j z_j`. In `D_k`, the equations for chart `k` vanish and `J_k` is contained in `pi D_k`, since `f_j=pi z_j` for selected `j`. Thus, after inverting `a_k`, every `Q_(k',l)` belongs to `pi D_k`. [F1, F2, F3, step 7.1, given, construct, algebra]

9.1 Localize at the prime in step 5.1. This local algebra is smooth over `R`, hence flat. Flatness transfers the equality `Ann_R(pi)=Ann_R(pi^2)` to it by preserving the two kernel sequences for multiplication by `pi` and `pi^2`. By step 7.1 each extra `Q` is killed by `pi`; by step 8.1 it is `pi` times an element. That element is killed by `pi^2`, hence by `pi`, and the extra equation is zero. All `F_l` were zero already. Therefore the surjection from this local ring of `D_k` to that of `D` is an isomorphism. [F1, F2, F3, step 8.1, given, construct, algebra]

10.1 Statements step 5.1 and step 6.1 now transfer to `D` at every prime containing `pi` over the smooth locus of `C_0`. Together with the explicit polynomial algebra away from `pi`, they prove every conclusion of the theorem. The map to `L`, the finite equations and the compatible reduction were constructed in steps 3.1–4.1, so no existence assertion is left to a citation. [F1, F2, F3, step 9.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. Completion and readiness are tracked in the run’s item record.
