---
id: thm-thue-enumeration-is-sound-and-complete
kind: theorem
title: "Soundness, completeness, and termination of the Thue-equation enumeration procedure"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 13
deps:
  - alg-enumerate-solutions-of-thue-equation-with-three-distinct-roots
  - thm-thue-equation-finiteness-with-three-distinct-roots
  - def-axiom-of-choice
justified_by: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: "Jan-Hendrik Evertse, Diophantine Equations (2017 author notes), Chapter 5, Theorem 5.13 and proof"
      url: "https://pub.math.leidenuniv.nl/~evertsejh/dio17-5.pdf"
verification: {}
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice. Let $F(X,Y)\in\mathbb Z[X,Y]$ and $m\in\mathbb Z\setminus\{0\}$ satisfy the hypotheses in the Thue enumeration algorithm. Suppose its subroutines terminate and return (i) a splitting field and the complete exact list of distinct roots, (ii) a complete finite list of divisor representatives modulo units, and (iii) exactly all solutions of every unit equation submitted to the unit-equation enumerator. Then the Thue procedure halts and returns exactly all integer solutions of $F(x,y)=m$.

## Statement references

[[def-axiom-of-choice]]

[[alg-enumerate-solutions-of-thue-equation-with-three-distinct-roots]]

[[alg-enumerate-solutions-of-two-variable-number-field-unit-equation]]

[[thm-thue-equation-finiteness-with-three-distinct-roots]]

## Facts & Assumptions

**Given:** The Axiom of Choice, the Thue equation input, and the three terminating, exact, complete subroutines specified in the statement.

[F1] For a solution $(u,v)$ of the normalized equation, each $u-\rho_i v$ is a nonzero algebraic integer divisor of $m'$; the proof’s displayed identity turns the ratios for any three distinct roots into one of the submitted unit equations. ([[thm-thue-equation-finiteness-with-three-distinct-roots]])

[F2] For a returned unit-equation solution, the procedure sets $R=(u-\rho_i v)/(u-\rho_kv)$, recovers $u/v=(R\rho_k-\rho_i)/(R-1)$ when $R\ne1$, and retains only exact solutions of the normalized and original equations. ([[alg-enumerate-solutions-of-thue-equation-with-three-distinct-roots]])

[A1] The splitting, divisor-representative, and unit-equation subroutines terminate and are complete as specified. ([[alg-enumerate-solutions-of-thue-equation-with-three-distinct-roots]])

## Proof

1.1 There are finitely many roots, hence finitely many ordered triples of distinct roots. For each triple there are finitely many divisor representatives by [A1]; each submitted unit equation has a finite output by [A1]. The remaining integer-root checks are finite: $u^d=m'$ has at most $d$ roots, and $v^d=c$ has at most $d$ integer roots. Every check is exact and terminates. Thus all loops are finite and the procedure halts. [A1, F2, given]

1.2 Every output passes the exact checks $G(u,v)=m'$, $a_0\mid u$, and $F(u/a_0,v)=m$. Therefore each reported pair is an integer solution of the original equation. This proves soundness. [F2, given]

1.3 Let $(x,y)\in\mathbb Z^2$ solve $F(x,y)=m$, and put $u=a_0x$, $v=y$. The normalization gives $G(u,v)=m'$. Choose any three distinct roots, say $\rho_i,\rho_j,\rho_k$. By [F1], each corresponding divisor has a representative $\mu_h$ and unit $\varepsilon_h$ such that $u-\rho_hv=\mu_h\varepsilon_h$ for $h=i,j,k$. The resulting pair $(\varepsilon_i/\varepsilon_k,\varepsilon_j/\varepsilon_k)$ solves the unit equation submitted for those representatives, so it is returned by [A1]. [F1, A1, given]

2.1 The returned pair gives $R=(u-\rho_i v)/(u-\rho_kv)$. If $R=1$, distinctness of $\rho_i,\rho_k$ forces $v=0$, and the procedure enumerates the actual integer root $u^d=m'$. If $R\ne1$, solving the ratio equation gives the same $u/v$ and therefore the same value of $c=m'/G(u/v,1)=v^d$; the exact checks retain $(u,v)$. Since $a_0\mid u$, the procedure returns $(x,y)=(u/a_0,v)$. This proves completeness. [F1, F2, A1, step 1.3, algebra] ∎
## Remarks

The splitting-field, divisor-representative, and fundamental-unit arithmetic suppliers now have local algorithmic proofs. This theorem preserves its explicit subroutine hypotheses. The unit-equation subroutine still inherits the held homogeneous logarithmic lower-bound foundation, so no unconditional algorithmic readiness is asserted.
