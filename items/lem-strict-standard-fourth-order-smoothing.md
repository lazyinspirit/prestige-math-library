---
id: lem-strict-standard-fourth-order-smoothing
kind: lemma
title: Strict-standard fourth-order smoothing
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
- def-finite-smoothing-factors-and-strict-standard-jacobian-witnesses
- lem-one-element-smoothing-lift-through-square-powers
- def-axiom-of-choice
- thm-jacobian-criterion-smooth-morphism
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
  - title: The Stacks Project, tag 07CT
    url: https://stacks.math.columbia.edu/tag/07CT
    locator: Source-backed local reconstruction; exact actual proof and reading limits are the bound proof_source_parts. No linked prerequisite or whole-chapter reading is asserted; source citation is not an external theorem import.
dependency_level: 3
proof_strategy: direct
axiom_use: AC is explicit in the public Statement. It supplies the module/vector-space/chart selections and, through AC⇒DC where used, compatible formal lifts and Noetherian induction; only the particular selections identified in the proof are used.
---

## Statement

Assume the Axiom of Choice. Let R be Noetherian, A=R[x_1,…,x_n]/J, J=(f_1,…,f_m), A→L given, and let π∈R be strictly standard with the exact finite witnesses of [[def-finite-smoothing-factors-and-strict-standard-jacobian-witnesses]]. Suppose Ann_L(π)=Ann_L(π²). If an R-algebra section ρ:A/π⁴A→R/π⁴R is compatible with A→L/π⁴L, put a=Ann_R(Ann_R(π²)/Ann_R(π)). There is a finitely presented factor A→B→L such that B_r/R is smooth for every r∈a. If also Ann_R(π)=Ann_R(π²), a compatible factor A/π⁴A→D/π⁴D→L/π⁴L with D smooth finitely presented over R yields a smooth finitely presented factor A→B→L. If D is only finitely presented, this construction is smooth above its smooth R-locus. Under these same stable-annihilator conditions, a smooth finite factor modulo π⁸ yields a genuine smooth finitely presented factor over R.

## Facts & Assumptions

**Given:** The rings, maps, finite presentations, specified elements, witnesses and other data quantified in the Statement. AC is assumed. All displayed factor maps preserve the specified target map.

[F1] The following existing interface is used at its literal public scope: [[def-finite-smoothing-factors-and-strict-standard-jacobian-witnesses]].

[F2] The following existing interface is used at its literal public scope: [[lem-one-element-smoothing-lift-through-square-powers]].

[F3] The following existing interface is used at its literal public scope: [[def-axiom-of-choice]].

[F4] The following existing interface is used at its literal public scope: [[thm-jacobian-criterion-smooth-morphism]].

## Proof

**Proof technique:** finite equations, the specified local constructions and the explicit supplier interfaces.

1.1 Assume `A -> L` is given, `Ann_L(pi)=Ann_L(pi^2)`, and there is an `R`-algebra section `rho:A/pi^4 A -> R/pi^4 R` compatible with the map to `L/pi^4 L`. Put `a=Ann_R( Ann_R(pi^2)/Ann_R(pi) )`. We construct a finitely presented factor `A -> B -> L` such that `B_r/R` is smooth for every `r in a`. In particular if the annihilators in `R` are also equal, `B/R` is smooth everywhere. [F1, F2, F3, F4, given, construct, algebra]

2.1 Lift the finitely many `rho(x_i)` to `R` and translate the variables. Hence `rho(x_i)=0`, `f_j(0) in pi^4 R`, and the original target map sends `x_i` to `pi^4 lambda_i` in `L`. Write `M=(r_ji)` for the `c x n` matrix of linear coefficients of `f_1,...,f_c`. Evaluating the strictly-standard minor identity at zero modulo `pi^4` gives `u pi=sum_(|I|=c) b_I det M_I`, with `u in 1+pi^3 R`. Construct the `n x c` matrix `S` explicitly: for each `I`, insert the adjugate of `M_I` in its indexed rows and zeros elsewhere, then sum with coefficients `b_I`. The adjugate identity gives `M S=u pi identity_c`. This is a finite matrix formula; no inverse of `pi` is taken. [F1, F2, F3, F4, step 1.1, given, construct, algebra]

3.1 Introduce variables `v_1,...,v_c,w_1,...,w_n` and put `h_i=x_i-pi^2 sum_j S_ij v_j-pi^3 w_i`. Eliminating `x` gives the polynomial ring `R[v,w]`. For `j<=c`, substitute `x=pi^2 S v+pi^3 w` into `f_j`. Its constant term is divisible by `pi^4`, its linear term is `u pi^3 v_j+pi^3 sum_i r_ji w_i`, and every quadratic-or-higher term is divisible by `pi^4`. Thus term-by-term there is a specified polynomial `g_j(v,w)` with `f_j(x)=pi^3 g_j(v,w)` modulo the `h_i`, `g_j=v_j+sum_i r_ji w_i mod pi`. One constructs it by the displayed polynomial expansion; no cancellation by a possible zero divisor `pi` is used. [F1, F2, F3, F4, step 2.1, given, construct, algebra]

4.1 Set `B=R[x,v,w]/(f_1,...,f_m,h_1,...,h_n,g_1,...,g_c)`. The map from `A` is the displayed quotient map. Send `x_i -> pi^4 lambda_i`, `v_j -> 0`, and `w_i -> pi lambda_i`. The `f_j` and `h_i` map to zero. Each `g_j` maps into `pi L` and is annihilated by `pi^3`. The stable annihilator condition implies `Ann_L(pi)=Ann_L(pi^k)` for all `k>=1`, by induction on `k`. If `t=pi z` and `pi^3 t=0`, then `pi^4 z=0`, so `pi z=0` and `t=0`. Thus every `g_j` also maps to zero, constructing `B -> L`. [F1, F2, F3, F4, step 3.1, given, construct, algebra]

5.1 After inverting `pi`, the `h_i` eliminate the `w_i` and the `g_j` are implied by the selected `f_j=pi^3 g_j`. Hence `B[1/pi]=A[1/pi][v_1,...,v_c]`, which is smooth over `R`: after inverting `pi`, the specified Jacobian minors generate the unit ideal, and the strict-standard relation identities make the selected `f_1,...,f_c` generate `J/J^2`. At each point a minor is invertible; Nakayama makes those selected equations generate the defining ideal after shrinking in the ambient polynomial ring. The Jacobian criterion [F4] then gives smoothness on that neighborhood. [F1, F2, F3, F4, step 4.1, given, construct, algebra]

6.1 Put `B'=R[v,w]/(g_1,...,g_c)`. At any prime containing `pi`, the derivative minor in the `v` columns is congruent to `identity_c mod pi`, so has determinant a unit at that prime. This is an **actual** standard-smooth presentation with `c` equations and `c+n` variables. The installed AC-qualified Jacobian criterion proves `B'/R` smooth there, including flatness; no fibral dimension-only criterion is used. [F1, F2, F3, F4, step 5.1, given, construct, algebra]

7.1 In `B'`, write `F_l` for the substituted remaining relation `f_l`, `l>c`, and `K=(F_l)`. Each `F_l` is divisible by `pi^2`, by the same substitution and the constant-term condition. The strictly-standard relations imply `pi K subset K^2 subset pi^2 K`. At a local ring of `B'` over `pi`, let `N=pi K`. It is a finite module because `R` is Noetherian and `B'` is finitely presented. The displayed inclusions give `N=pi N`; Nakayama makes `N=0`. Thus every remaining `F_l` is killed by `pi` in that local ring. [F1, F2, F3, F4, step 6.1, given, construct, algebra]

8.1 Now consider a prime of `B` over `pi` at which some `r in a` is invertible, and its inverse-image prime in `B'`. This local ring of `B'` is flat over `R` by step 6.1. Flat base change identifies `[Ann_R(pi^2)/Ann_R(pi)] tensor B'_q` with the corresponding annihilator quotient in the local ring. It is zero because `r` kills the original module and is inverted. Therefore its annihilators are stable, also for all powers. The relation `F_l=pi^2 z_l` and `pi F_l=0` imply `pi^3 z_l=0`, so `F_l=0`. Thus the quotient from this local ring of `B'` to that of `B` is an isomorphism. The latter is smooth over `R`. Together with step 5.1 this proves `B_r/R` smooth for every `r in a`, as claimed. Assume now also `Ann_R(pi)=Ann_R(pi^2)`. Suppose a smooth finitely presented `R`-algebra `D` has a map to `L`, and a compatible map `A/pi^4 A -> D/pi^4 D` is given. Apply the first theorem over the base `D` to `A tensor_R D`. Its fourth-order section is induced by this map, its strictly-standard witnesses are the base changes of those of `A`, and its target is still `L`. Since `D` is `R`-flat, its `pi` annihilators are equal by tensoring the kernel sequences. Thus the ideal `a_D` in that application is the unit ideal. The resulting `B` is smooth over `D` and hence over `R`, with compatible maps from both `A` and `D` and map to `L`. Its finite presentation over `R` follows by composition. This proves the smooth-comparison fourth-order desingularization used in the general regular-map reduction. More generally if `D` is only finitely presented, the same construction is smooth over `D`, and over `R`, above every point where `D/R` is smooth: there `D` is flat, the finite annihilator quotient vanishes locally, and its annihilator ideal is a unit locally. This is the actual local conclusion needed to enlarge the mapped smooth locus; it is not an assertion that arbitrary `D` is already smooth. Suppose the base and target annihilators of `pi` are stable, `pi` has the displayed strictly-standard witnesses in `A/R`, and the finite map modulo `pi^8` factors as `A/pi^8 A -> C_0 -> L/pi^8 L`, with `C_0` smooth finitely presented over `R/pi^8 R`. Apply the already constructed one-element finite smoothing lift with its distinguished element equal to `pi^4`. Its two stable-annihilator hypotheses hold because stability for `pi` implies stability for all powers. It produces `D -> L` and `C_0 -> D/pi^4 D`. As `C_0` is smooth everywhere over `R/pi^8`, every point of `D` over `pi` is in its smooth regime; away from `pi` that lift is polynomial. Thus `D/R` is smooth everywhere and finitely presented. The composite gives a compatible map `A/pi^4 A -> D/pi^4 D`. The second theorem now gives a genuine smooth finite-presentation factor `A -> B -> L`. This proves the exact eighth-order/fourth-order bridge used in the general base reduction; it does not replace the construction of the quotient smooth factor or the regular field-resolution step. [F1, F2, F3, F4, step 7.1, given, construct, algebra] ∎

## Source and authoring record

This is a local reconstruction from the exact source parts recorded in `native146-helper-carriers-v1/author-source-map.json`. The cited Stacks locators document the construction; no external theorem is imported. Earlier partial-status research files and all frozen histories remain unchanged. Completion and readiness are tracked in the run’s item record.
