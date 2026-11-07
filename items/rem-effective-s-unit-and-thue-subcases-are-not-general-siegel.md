---
id: rem-effective-s-unit-and-thue-subcases-are-not-general-siegel
kind: remark
title: Effective unit and Thue equations are special cases, not general Siegel effectivity
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 28
deps:
  - def-axiom-of-choice
  - def-number-field
  - def-s-integers-and-s-units-of-a-number-field
  - def-fundamental-units
  - thm-s-unit-theorem
  - thm-effective-s-unit-equation-finite-solutions
  - thm-thue-equation-finiteness-with-three-distinct-roots
  - thm-unit-equation-finiteness-from-homogeneous-bound
  - cor-effective-lower-bound-for-algebraic-unit-exponential-form
  - thm-siegel-finiteness-of-integral-points-on-hyperbolic-curves
justified_by: []
proof_strategy: direct
axiom_use: "AC is inherited from the number-field unit and Diophantine suppliers; the current effective unit and Thue carriers retain unresolved proof or algorithm inputs."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Jan-Hendrik Evertse, Diophantine Equations, Chapter 5 §§5.1–5.3, Theorems 5.12 and 5.13 and proofs
      url: https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf
      locator: Printed pp. 75–93; unit equations and binary-form equations
    - title: Jan-Hendrik Evertse and Kálmán Győry, Effective results for unit equations over finitely generated domains
      url: https://arxiv.org/pdf/1107.5756
      locator: Theorem 1.1 and Corollary 1.2; rings of S-integers of number fields are included, and the article proves effective determination of two-variable unit equations.
    - title: Michel Waldschmidt, Linear Independence of Logarithms of Algebraic Numbers, Chapter X, Theorem 10.1
      url: https://webusers.imj-prg.fr/~michel.waldschmidt/articles/pdf/LIL.pdf
      locator: Chapter X, Theorem 10.1 statement at printed p. X-1 and complete §3 proof at printed pp. X-8–X-9 (PDF pp. 83–91); the proof invokes Theorem 10.5 and preceding zero-estimate/determinant results.
---

## Statement

Assume the Axiom of Choice. Fix a number field $K$ and a finite set $S$ of nonzero prime ideals of $\mathcal O_K$. The equation $u+v=1$ in $S$-units $u,v\in\mathcal O_{K,S}^{\times}$ and the binary-form equation $F(x,y)=m$ in integers, where $m\in\mathbb Z\setminus\{0\}$, $F\in\mathbb Z[X,Y]$ is homogeneous of degree $d\ge3$ with nonzero leading coefficient, and $F(X,1)$ has at least three distinct complex roots, are specialized Diophantine problems with effective treatments using linear forms in logarithms. The general Siegel theorem gives finiteness for integral points on curves with positive genus or at least three distinct geometric boundary points, but does not assert a general algorithm for listing those points. The current in-run unit and Thue carriers do not yet supply these full algorithms: the unit carrier covers ordinary units and has a held logarithmic input, while the Thue carrier proves finiteness only.

## Statement references

[Evertse, *Diophantine Equations*, Chapter 5, Theorems 5.12 and 5.13 and proofs](https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf)

[Evertse and Győry, *Effective results for unit equations over finitely generated domains*, Theorem 1.1 and Corollary 1.2](https://arxiv.org/pdf/1107.5756)

[Waldschmidt, *Linear Independence of Logarithms of Algebraic Numbers*, Chapter X, Theorem 10.1](https://webusers.imj-prg.fr/~michel.waldschmidt/articles/pdf/LIL.pdf)

[[thm-siegel-finiteness-of-integral-points-on-hyperbolic-curves]]

## Facts & Assumptions

**Given:** The Axiom of Choice, a number field $K$, a finite set $S$ of finite primes, the two equations of the Statement, and the stated linear-forms-in-logarithms and unit-arithmetic inputs.

[A1] The Axiom of Choice is inherited from the current unit, Thue, and Siegel supplier statements. [[def-axiom-of-choice]]

[F1] A number field is a finite extension of $\mathbb Q$. The $S$-unit theorem gives $\mathcal O_{K,S}^{\times}\cong\mu(K)\times\mathbb Z^r$ for a finite rank $r$; when $S=\varnothing$, a system of fundamental units is a basis for the free part, and for general $S$ an analogous generator system is needed to write torsion and exponent coordinates. Effective computation also requires exact arithmetic for this group. [[def-number-field]] [[def-s-integers-and-s-units-of-a-number-field]] [[thm-s-unit-theorem]] [[def-fundamental-units]]

[L1] The current carrier [[thm-effective-s-unit-equation-finite-solutions]] gives a terminating algorithm for $\alpha x+\beta y=1$ with nonzero $\alpha,\beta\in K$ and $x,y\in\mathcal O_K^\times$. Its actual statement covers only ordinary units ($S=\varnothing$), and its current proof supplies certified fundamental units, torsion, a computable exponent cutoff, and exact finite enumeration, conditional on the homogeneous logarithmic bound. That bound remains held. It does not supply the full $S$-unit interface stated here.

[L2] The current carrier [[thm-thue-equation-finiteness-with-three-distinct-roots]] proves finiteness for the binary forms in the Statement by reduction to finitely many unit equations. Its proof remains conditional on the homogeneous logarithmic supplier, and its Remarks explicitly leave effective divisor representatives and exact enumeration to separate algorithms.

[F2] Bibliographic context only: Evertse's ordinary-unit and binary-form arguments and Evertse–Győry's general S-unit algorithm are the cited established literature results. The native author recorded its actual source reading in the immutable native archive. These references supply no imported logical premise or local algorithm proof; the full original effective claims remain local authoring obligations.

[L3] [[thm-unit-equation-finiteness-from-homogeneous-bound]] and [[cor-effective-lower-bound-for-algebraic-unit-exponential-form]] provide the current homogeneous lower-bound route. The homogeneous lower-bound theorem remains held on the Chapter X full-rank interpolation argument, arithmetic determinant lower bound, and exact parameter specialization. Its local zero-estimate and intersection-number prerequisites are now supplied; those repairs do not complete the Chapter X proof.

[F3] The general Siegel proof is the cover reduction from [[thm-siegel-finiteness-of-integral-points-on-hyperbolic-curves]] followed by the genus-at-least-two rational-point result; its conclusion is qualitative and contains no point-enumeration procedure.

## Proof

1.1 For the unit equation, [F1] gives a finite-rank $S$-unit group, so solutions admit torsion and exponent coordinates once a generator system is supplied. A complete effective route would require a proved exponent bound together with exact certified arithmetic and enumeration for that group. The current carrier [L1] has only the ordinary-unit interface and now supplies its arithmetic algorithms and cutoff conditional on [L3]; it does not establish the full $S$-unit algorithm. The references discussed in [F2] are source context, not a substitute for that missing local construction. [A1, F1, F2, L1, L3, given]

1.2 For a binary form with leading coefficient $a_0\ne0$, normalize to the monic form $F'(U,Y)=U^d+a_1U^{d-1}Y+a_2a_0U^{d-2}Y^2+\cdots+a_da_0^{d-1}Y^d$ by setting $U=a_0x$ and $m'=a_0^{d-1}m\ne0$. Since $F'(a_0x,y)=a_0^{d-1}F(x,y)$, this injects original solutions into solutions of $F'(U,y)=m'$. Factor $F'(U,1)=\prod_{i=1}^t(U-\alpha_i)^{r_i}$ with distinct algebraic roots $\alpha_i$, positive multiplicities $r_i$, and $t\ge3$. The polynomial is monic with integer coefficients, so each $\alpha_i$ is an algebraic integer. In a number field containing them, $\prod_i(U-\alpha_i y)^{r_i}=m'$, so each nonzero factor $U-\alpha_i y$ divides $m'$ in the ring of integers. Only finitely many divisor classes modulo units occur; choose one representative $\mu_i$ for each such class, so $U-\alpha_i y=\mu_i\epsilon_i$ with $\epsilon_i$ a unit. Choose three distinct roots $\alpha_1,\alpha_2,\alpha_3$; the identity $(\alpha_2-\alpha_3)(U-\alpha_1y)+(\alpha_3-\alpha_1)(U-\alpha_2y)+(\alpha_1-\alpha_2)(U-\alpha_3y)=0$ becomes, after division by a nonzero term and substitution of the representatives, an equation $a(\epsilon_1/\epsilon_3)+b(\epsilon_2/\epsilon_3)=1$ with fixed nonzero coefficients. Conditional on a complete ordinary-unit algorithm of the form [L1] and the required effective divisor-representative arithmetic, each of the finitely many representative triples would give a finite enumerable solution set; hence only finitely many ratios $R=(U-\alpha_1y)/(U-\alpha_3y)$ occur, and they can be enumerated under the stated arithmetic inputs. For a fixed $R=1$, distinctness of $\alpha_1,\alpha_3$ forces $y=0$, leaving $U^d=m'$, with at most $d$ integer solutions. For a fixed $R\ne1$, cross multiplication determines $U/y=(R\alpha_3-\alpha_1)/(R-1)$ and $y\ne0$; substitution into the homogeneous equation gives at most $d$ choices for $y$, and then at most one $U$. Retain the pairs with $a_0\mid U$ to recover original solutions. This is the reduction used by [L2]. This is a conditional algebraic reduction only: the in-run carrier [L2] establishes finiteness only, while the effective root-field/divisor-representative construction remains a separate obligation. The ordinary-unit enumeration procedure is now supplied by [L1], conditional on [L3]. The bibliographic reports in [F2] are not used to discharge them. [L2, F2, L1, L3, given, algebra]

2.1 The preceding specialized equations have dedicated logarithmic and arithmetic inputs. The Siegel theorem instead proves a qualitative finite set for the general curve hypotheses by covers and the genus-at-least-two rational-point theorem; that route supplies no general height bound or enumeration algorithm. Thus effectivity of these special equations is not an effective version of general Siegel finiteness. [F2, F3, L1, L2, L3, step 1.1, step 1.2, given] ∎

## Proof status

Escalated. The source-supported reductions are stated with their exact hypotheses, but the current unit-equation carrier has only the $S=\varnothing$ interface, and the homogeneous logarithmic proof and the effective Thue root-field/divisor-representative construction remain open. The ordinary-unit arithmetic and cutoff are supplied conditionally on the held logarithmic theorem. No general S-unit or Thue algorithm is claimed ready.
