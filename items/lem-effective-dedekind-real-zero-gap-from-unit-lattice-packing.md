---
id: lem-effective-dedekind-real-zero-gap-from-unit-lattice-packing
kind: lemma
title: An effective Dedekind real-zero gap from finite unit-lattice packing
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
- def-number-field-regulator
- thm-number-field-regulator-is-well-defined
- def-logarithmic-unit-embedding
- thm-logarithmic-unit-image-is-a-full-lattice
- def-fundamental-units
- def-minkowski-embedding-of-a-number-field
- cor-trace-and-norm-of-an-algebraic-integer
- thm-field-norm-and-trace-by-embeddings
- thm-lebesgue-measure-is-a-complete-measure
- thm-lebesgue-outer-measure-and-measurability-are-translation-invariant
- thm-lebesgue-measure-of-a-box-of-every-kind
- thm-linear-change-of-variables-for-lebesgue-measure
- thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula
- lem-weiss-convexity-bound-for-primitive-hecke-l-functions
- thm-cauchy-integral-formula-higher-derivatives
- thm-ftc-second-part
- lem-continuous-functions-riemann-integrable
- lem-riemann-integral-linearity
- def-complex-exponential
- thm-natural-logarithm-laws
- def-axiom-of-choice
- def-countable-choice
justified_by: []
proof_strategy: direct
axiom_use: AC supplies the actual unit/class-number branch and fundamental units;
  CC supplies finite-dimensional Lebesgue volume and the accepted Hecke convexity
  branch. No class-field existence or Stark theorem is used.
sources:
  references:
  - title: Local construction from the library logarithmic-unit lattice, residue formula
      and proved Hecke convexity interfaces
    locator: New finite packing proof below; no external regulator lower bound, Stark
      descent, class-field realization or finite computation is imported. Standard
      normalization is the published regulator definition.
---

## Statement

Assume AC and Countable Choice. Let $E$ be a number field of degree $m\ge1$, absolute discriminant $D\ge1$, regulator $R_E$ in the doubled logarithmic normalization, roots-of-unity order $w_E$, and Dedekind zeta residue $\kappa_E=\operatorname{Res}_{s=1}\zeta_E(s)$. Then
$$R_E\ge13^{-m}m^{-m},\qquad w_E\le5^m,\qquad \kappa_E\ge65^{-m}m^{-m}D^{-1/2}.$$
There is an absolute effectively computable $C\ge4$ such that every real zero $0<\beta<1$ of $\zeta_E$ satisfies
$$1-\beta\ge C^{-m}m^{-m}D^{-1}.$$
All degrees, signatures, regulator rank zero and $E=\mathbb Q$ are included. This is a deliberately weaker general effective gap, not the sharper three-case Stark bound.

## Facts & Assumptions

**Given:** The number field and exact regulator/root-of-unity/residue normalization in the Statement.

[F1] The doubled logarithmic map sends units to the hyperplane of coordinate sum zero; fundamental units give a lattice basis. Deleting one row identifies this lattice with a full lattice in $\mathbb R^r$ whose determinant is $R_E>0$, where $r=r_1+r_2-1$; in rank zero $R_E=1$. [[def-logarithmic-unit-embedding]] [[thm-logarithmic-unit-image-is-a-full-lattice]] [[def-fundamental-units]] [[def-number-field-regulator]] [[thm-number-field-regulator-is-well-defined]]

[F2] The unscaled Minkowski embedding records the real coordinates and real/imaginary parts of each complex pair. An algebraic integer has integer norm, and norm is the product of its embeddings with complex conjugate pairs. Thus a nonzero algebraic integer has a nonzero integral norm of absolute value at least one. [[def-minkowski-embedding-of-a-number-field]] [[cor-trace-and-norm-of-an-algebraic-integer]] [[thm-field-norm-and-trace-by-embeddings]]

[F3] Under CC, finite-dimensional Lebesgue measure is a complete measure, is translation invariant, agrees with box volume, and an invertible linear image scales it by the determinant. [[thm-lebesgue-measure-is-a-complete-measure]] [[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]] [[thm-lebesgue-measure-of-a-box-of-every-kind]] [[thm-linear-change-of-variables-for-lebesgue-measure]]

[F4] The full residue formula is $\kappa_E=2^{r_1}(2\pi)^{r_2}h_ER_E/(w_E\sqrt D)>0$; $\zeta_E$ has no pole except its simple pole at one. [[thm-dedekind-zeta-simple-pole-and-analytic-class-number-formula]]

[F5] For the trivial primitive character of $E$, $G(s)=(s-1)\zeta_E(s)/(s+1)$ satisfies the completed local convexity estimate $|G(s)|\le C_0^m a^m D^{(1+1/a-\operatorname{Re}s)/2}(1+|\operatorname{Im}s|)^{m(1+1/a-\operatorname{Re}s)/2}$ throughout $-1/a\le\operatorname{Re}s\le1+1/a$, $a\ge2$. The actual proof constructs its absolute constants from fixed endpoint and Gamma bounds. [[lem-weiss-convexity-bound-for-primitive-hecke-l-functions]]

[F6] Cauchy's circle formula gives the derivative bound by the circle supremum divided by its radius. Compact real FTC and linearity apply to real and imaginary parts of a holomorphic function. Exponential is its power series, and logarithms have their product laws. [[thm-cauchy-integral-formula-higher-derivatives]] [[thm-ftc-second-part]] [[lem-continuous-functions-riemann-integrable]] [[lem-riemann-integral-linearity]] [[def-complex-exponential]] [[thm-natural-logarithm-laws]]

[A1] AC and CC are retained at their actual unit, residue, volume and Hecke scopes. [[def-axiom-of-choice]] [[def-countable-choice]]

## Proof

1.1 We first prove a finite embedding-packing observation. Distinct algebraic integers whose embeddings all have modulus at most $A$ cannot occupy the same rectangular cell of side at most $1/2$ in the real-coordinate Minkowski embedding: in such a cell their real differences have modulus at most $1/2$ and their complex differences at most $\sqrt2/2<1$. Thus every embedding of their nonzero algebraic-integer difference would have modulus less than one, contradicting [F2]'s integral norm. Partition $[-3,3]^m$ into thirteen intervals in each coordinate of length less than $1/2$, with half-open conventions except the last endpoint. Consequently at most $13^m$ algebraic integers have every embedding modulus at most $3$. Similarly partition $[-1,1]^m$ into five intervals of length less than $1/2$: at most $5^m$ algebraic integers have all embedding moduli at most one. Every root of unity is such an integer, since its conjugates have modulus one, so $w_E\le5^m$. These arguments prove actual finite bounds without assuming a height theorem or a lower bound for an individual non-torsion unit. [A1, F2, given, construct, algebra]

2.1 Suppose $r\ge1$ and delete the last coordinate of the logarithmic hyperplane. By [F1], the projected unit lattice $\Lambda$ has a specified basis matrix $A$ with $|\det A|=R_E$. Its half-open fundamental parallelepiped $P=A[0,1)^r$ has measure $R_E$ by [F3], and the translates $P+v$, $v\in\Lambda$, partition $\mathbb R^r$. Put $B=[-1/(2r),1/(2r)]^r$, of volume $r^{-r}$. Only finitely many lattice translates of $P$ meet $B$: if $y\in P$ and $y+v\in B$, then $v\in B-P$, a bounded set, and applying $A^{-1}$ bounds the integer coordinates of $v$. For each $y\in P$, the finite set of $v$ with $y+v\in B$ has size at most $13^m$. Indeed fix one of them, $v_0$. The differences $v-v_0$ have first $r$ doubled-log coordinates at most $1/r$ in absolute value, and their omitted coordinate, minus the sum, has absolute value at most one. Each comes from a unit, by [F1]; choose representatives for this finite set. All embeddings of each representative have modulus at most $e<3$, since complex coordinates are doubled. Distinct log points give distinct units. Step 1.1 therefore bounds their number by $13^m$. The empty set needs no representative. [A1, F1, F2, F3, F6, step 1.1, construct, algebra]

3.1 For the finite set of relevant translates define $E_v=(B-v)\cap P$. These are bounded Borel sets. Translation invariance and the disjoint partition of $B$ give $\operatorname{vol}(B)=\sum_v\operatorname{vol}(E_v)$. Partition $P$ into the finitely many Boolean atoms of the sets $E_v$. On each atom the number of memberships is at most $13^m$ by step 2.1, so finite additivity gives $\sum_v\operatorname{vol}(E_v)\le13^m\operatorname{vol}(P)$. Hence $R_E\ge13^{-m}r^{-r}\ge13^{-m}m^{-m}$. This uses finite measurable partitions only, with no infinite-sum/integral interchange or general averaging theorem. If $r=0$, [F1] gives $R_E=1$, which satisfies the same bound directly. [F1, F3, step 1.1, step 2.1, algebra]

4.1 In the residue formula [F4], $h_E\ge1$, because an ideal-class group has its identity, and $2^{r_1}(2\pi)^{r_2}\ge1$. Combining steps 1.1 and 3.1 therefore yields $\kappa_E\ge65^{-m}m^{-m}D^{-1/2}$. This also includes degree one and both rank-zero signatures; no regulator normalization factor has been dropped. [F1, F4, step 1.1, step 3.1, algebra]

5.1 Put $F(s)=(s-1)\zeta_E(s)$ with its removable value $F(1)=\kappa_E$. It is holomorphic on the disc $|s-1|<1/2$ by [F4]. Apply [F5] with $a=2$. On every circle of radius $1/8$ centred at a real $u\in[3/4,1]$, one has $5/8\le\operatorname{Re}s\le9/8$ and $|\operatorname{Im}s|\le1/8$, so $|F(s)|=|s+1||G(s)|\le C_1^mD^{1/2}$ for an absolute effectively computable $C_1\ge1$. The inequality holds at the removable point too by continuity. Cauchy [F6] gives $|F'(u)|\le8C_1^mD^{1/2}\le C_2^mD^{1/2}$ with an absolute effective $C_2$. All constants come from the fixed $a=2$ bound and a fixed-radius circle; none depends on a fundamental-unit basis or a field-specific entire-order constant. [F4, F5, F6, step 4.1, construct, algebra]

6.1 If $3/4\le\beta<1$ is a real zero, then $F(\beta)=0$ and compact FTC along $[\beta,1]$ gives $\kappa_E=|F(1)-F(\beta)|\le(1-\beta)C_2^mD^{1/2}$. Step 4.1 implies $1-\beta\ge(65C_2)^{-m}m^{-m}D^{-1}$. If $0<\beta<3/4$, its gap exceeds $1/4$ and satisfies the same asserted weaker bound once $C\ge\max\{4,65C_2\}$. This gives the uniform effective $C$ in the Statement, in every degree and signature. The proof is independent of Stark's descent, quadratic class fields, and any bound for an individual fundamental unit. [F4, F6, step 4.1, step 5.1, algebra] ∎
