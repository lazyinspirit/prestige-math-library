---
dependency_level: 0
id: lem-affine-etale-algebras-lift-across-arbitrary-quotients
kind: lemma
title: Affine étale algebras lift across arbitrary quotients
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
deps:
  - thm-etale-formally-etale-finite-presentation
  - thm-conormal-exact-sequence-algebra
  - thm-formally-unramified-differentials-zero
  - cor-derivations-represented-by-differentials
  - def-ag-standard-smooth-algebra
  - lem-ag-standard-smooth-flatness
  - thm-etale-equivalent-flat-unramified-fp
  - def-axiom-of-choice
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: The Stacks Project, Commutative Algebra
      url: https://stacks.math.columbia.edu/download/algebra.pdf
      locator: Lifting étale algebras and the global standard smooth presentation of an étale algebra
axiom_use: Assume AC inherited through the existing formal étale, conormal, differentials and smoothness suppliers. The presentation and matrix constructions are finite.
---

## Statement

Assume the Axiom of Choice. Let $R\to S=R/I$ be a quotient of commutative rings, and let $C$ be a finitely presented étale $S$-algebra. There is a finitely presented étale $R$-algebra $B$ and an $S$-algebra isomorphism $B/IB\cong C$. Neither nilpotence of $I$ nor finiteness of $B$ as an $R$-module is required or asserted. The zero algebra is allowed.

## Statement references

[[thm-etale-formally-etale-finite-presentation]]

[[thm-conormal-exact-sequence-algebra]]

[[def-ag-standard-smooth-algebra]]

[Stacks Project, Commutative Algebra](https://stacks.math.columbia.edu/download/algebra.pdf)

## Facts & Assumptions

**Given:** AC, the quotient ring and the finitely presented étale algebra in the statement.

[F1] An étale morphism is formally étale; its square-zero lifting property is global because the unique local lifts agree and glue. [[thm-etale-formally-etale-finite-presentation]]

[F2] For $P\to C=P/J$, the conormal sequence $J/J^2\to\Omega_{P/S}\otimes_PC\to\Omega_{C/S}\to0$ is right exact. Étaleness implies $\Omega_{C/S}=0$, and a derivation from $P$ is represented by a linear map from $\Omega_{P/S}$. [[thm-conormal-exact-sequence-algebra]] [[thm-formally-unramified-differentials-zero]] [[cor-derivations-represented-by-differentials]]

[F3] A finite presentation with an invertible full square Jacobian is standard smooth of relative dimension zero and is flat. Its differentials vanish, so the flat, unramified and finite-presentation criterion makes it étale. [[def-ag-standard-smooth-algebra]] [[lem-ag-standard-smooth-flatness]] [[thm-etale-equivalent-flat-unramified-fp]]

[A1] AC supplies the inherited choice hypotheses of these local algebraic suppliers. [[def-axiom-of-choice]]

## Proof

1.1 If $C=0$, take $B=0$, the empty étale algebra. Otherwise choose a finite presentation $C=P/J$ with $P=S[x_1,\ldots,x_r]$ and $J$ finitely generated. By [F1], the identity of $C$ lifts across $P/J^2\to C$ to an $S$-algebra section $s:C\to P/J^2$. For $p\in P$, set $\delta(p)=(p\bmod J^2)-s(p\bmod J)\in J/J^2$. The square-zero multiplication rule shows that $\delta$ is an $S$-derivation, with $C$ acting through $P\to C$; for $j\in J$ it is exactly $j\bmod J^2$. Thus [F2] makes the conormal map $J/J^2\to\Omega_{P/S}\otimes_PC=C^r$ split injective. It is also surjective because $\Omega_{C/S}=0$, so it is an isomorphism. [given, A1, F1, F2, choose, algebra]

2.1 Choose $f_1,\ldots,f_r\in J$ whose classes map to the standard basis of $C^r$ under this conormal isomorphism. Put $N=J/(f_1,\ldots,f_r)$, a finite $P$-module. The basis property gives $J=(f_1,\ldots,f_r)+J^2$, hence $N=JN$. For a finite generating column $v$ of $N$, express this equality as $v=Hv$ with all entries of $H$ in $J$. Its adjugate gives $gv=0$ for $g=\det(1-H)\in1+J$. Therefore $gJ\subseteq(f_1,\ldots,f_r)$ and obtain the following presentation. [F2, step 1.1, construct, algebra]
$$
C\cong P_g/(f_1,\ldots,f_r)\cong S[x_1,\ldots,x_r,t]/(f_1,\ldots,f_r,gt-1).
$$
The case of an empty generating column uses determinant $1$, and $r=0$ is included. The image of $g$ in $C$ is $1$, so the displayed localization changes nothing in $C$. [F2, step 1.1, construct, algebra]

3.1 Let $D=(\partial f_i/\partial x_j)_{i,j}$. It represents the conormal isomorphism of step 1.1 in the selected bases, so $\det D$ is a unit in $C$. The Jacobian of the $r+1$ displayed equations with respect to $x_1,\ldots,x_r,t$ has block matrix with upper-right column zero and lower-right entry $g$. Its determinant is $g\det D$, which is a unit in $C$. Choose lifts of the equations to polynomials $F_1,\ldots,F_{r+1}$ over $R$ and let $\Delta$ be their full Jacobian determinant. Define the following algebra. [A1, F3, step 1.1, step 2.1, construct, algebra]
$$
B=\bigl(R[x_1,\ldots,x_r,t]/(F_1,\ldots,F_{r+1})\bigr)_\Delta.
$$
This is finitely presented, since principal localization is expressed by adjoining one inverse and its one relation. Its full Jacobian is invertible by construction, so [F3] makes it étale over $R$. Reducing modulo $I$ recovers the displayed presentation of $C$ and localizes at an element already invertible there. Consequently $B/IB\cong C$ as $S$-algebras. No argument used nilpotence of $I$ or a finite-module condition on $B$. This proves the statement. [A1, F3, step 1.1, step 2.1, construct, algebra] ∎

## Remarks

This lemma lifts affine étale algebras, not finite étale algebras across arbitrary closed immersions. The latter stronger assertion would require additional hypotheses and is not used in the proper-base-change reconstruction.
