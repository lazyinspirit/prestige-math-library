---
dependency_level: 15
id: lem-finite-artin-schreier-unit-pole-perfect-pairing-and-index-p-norms
kind: lemma
title: Finite Artin–Schreier unit/pole duality and index-p norm groups
deps:
- thm-artin-schreier-differential-residue-formula
- lem-hensel-factor-lifting-over-a-complete-valued-field
- thm-local-artin-reciprocity-and-norm-index
- def-local-artin-schreier-pairing
- def-axiom-of-choice
- def-dependent-choice
provenance:
  statement: ai-altered
  proof: ai-altered
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
axiom_use: AC AND DC exactly, inherited from canonical reciprocity/norm kernel. Finite residue/pole
  operations and finite bases only; no Witt or all-open existence import.
sources:
  references:
  - title: I. B. Fesenko and S. V. Vostokov, Local Fields and Their Extensions, second edition
    url: https://ivanfesenko.org/wp-content/uploads/2021/10/vol.pdf
    locator: Chapter IV (5.4)–(5.7), printed146–151; full actual proofs read. Finite spanning/independence
      and invertible trace-block matrix are expanded locally, not imported as perfectness.
verification: {}
proof_strategy: direct
---

## Statement

Assume AC and DC. Let $F=k((t))$ with $k$ finite of characteristic $p$,
and use the distinguished canonical Artin–Schreier pairing. Put
$U_j=1+t^jk[\![t]\!]$, $\wp(x)=x^p-x$. For every integer $r\ge0$ let
$$A_r=F^\times/(F^{\times p}U_{r+1}),\qquad B_r=\bigl(k+\sum_{1\le j\le r,\ p\nmid j}kt^{-j}+\wp(F)\bigr)/\wp(F).$$
These are finite $\mathbb F_p$-vector spaces and their induced pairing
$A_r\times B_r\to\mathbb F_p$ is perfect. If $[k:\mathbb F_p]=f$,
their common dimension is $1+f\#\{1\le j\le r:p\nmid j\}$, and the
annihilator of $B_r$ in $F^\times$ is $F^{\times p}U_{r+1}$.
Every open subgroup of index $p$ in $F^\times$ is the norm group of a
cyclic extension of degree $p$ given by an Artin–Schreier equation.

## Statement references

[[thm-artin-schreier-differential-residue-formula]]

## Facts & Assumptions

**Given:** The data above, including the canonical pairing under AC/DC.

[F1] The pairing is $P(a,b)=\operatorname{Tr}\operatorname{res}_t(ba'/a)$,
is linear in the indicated multiplicative/additive senses and kills
$\wp(F)$ in its second variable. Its zero set in the first variable is
the corresponding AS norm group.
[[thm-artin-schreier-differential-residue-formula]]

[F2] Positive-valuation AS equations have a root by simple-root Hensel.
[[lem-hensel-factor-lifting-over-a-complete-valued-field]]

[F3] An AS root defines a finite Galois extension whose group injects into
$(\mathbb F_p,+)$ by displacement; the pairing is its canonical action.
[[def-local-artin-schreier-pairing]]

[A1] AC and DC are inherited from the canonical map and its norm-kernel
existence theorem; the finite algebra below needs only finite choices.
[[def-axiom-of-choice]] [[def-dependent-choice]]

## Proof

**Proof technique:** prove spanning and pole normal form, then force
independence by an invertible residue matrix; use its hyperplane annihilator.

**Given:** The data in the Statement.

1.1 Frobenius is bijective on finite $k$. Positive Laurent tails are in $\wp(F)$ by [F2]. A pole monomial whose exponent is divisible by $p$ reduces modulo $\wp(F)$ to exponent divided by $p$ and coefficient's unique Frobenius inverse. Repeating terminates. Thus every class in $F/\wp(F)$ is represented by a constant and finitely many prime-to-$p$ poles. If a nonzero such pole-normalized sum equals $\wp(x)$, a negative $v(x)$ would give highest pole $-pv(x)$ divisible by $p$, a contradiction. For integral $x$, there is no pole and the constant is $\wp(x_0)$. So these pole coefficients are unique, with constant ambiguity $\wp(k)$. The trace polynomial $X+X^p+\cdots+X^{p^{f-1}}$ has degree less than $|k|$ and is nonzero; its values lie in $\mathbb F_p$, so the trace is onto. Its kernel contains $\wp(k)$, which has cardinality $|k|/p$ because the kernel of $\wp:k\to k$ is $\mathbb F_p$. Thus $\wp(k)=\ker\operatorname{Tr}$ and $k/\wp(k)$ has dimension one. The bilinear form $\operatorname{Tr}(xy)$ is nondegenerate: multiplication by nonzero $x$ is bijective and trace is onto. Hence $\dim B_r=D=1+f\#\{1\le j\le r:p\nmid j\}$. [F1, F2, given, construct, algebra]

2.1 Choose a finite $\mathbb F_p$-basis $\eta_1,\ldots,\eta_f$ of $k$. The classes of $t$ and $g_{s,h}=1+\eta_ht^s$ for $1\le s\le r$, $p\nmid s$, span $A_r$. Indeed constants are $p$th powers and valuation powers reduce modulo $p$, leaving a principal unit. Clear its coefficients successively at degrees $s=1,\ldots,r$. If $p\nmid s$, multiplying by $\prod_h(1+\eta_ht^s)^{-n_h}$, with $n_h\in\{0,\ldots,p-1\}$ chosen from the basis expansion, kills the coefficient and changes only later ones. If $p\mid s$, remove $1+ct^s=(1+c^{1/p}t^{s/p})^p$, an exact $p$th power. The remaining unit lies in $U_{r+1}$. This proves spanning, not independence by an asserted filtration basis. The residue formula kills $p$th powers and $\wp(F)$ by [F1]. For $u\in U_{r+1}$, $v(u'/u)\ge r$ (or its derivative is zero); any representative of $B_r$ has valuation at least $-r$, so $bu'/u$ is integral and has zero residue. Thus the pairing actually descends. [F1, step 1.1, construct, algebra]

3.1 Choose $c\in k$ with trace one and any basis $\theta_1,\ldots,\theta_f$. Pair those $D$ multiplicative spanning vectors against the basis of $B_r$ consisting of $c$ and $\theta_l t^{-j}$ with $p\nmid j$, $1\le j\le r$. The $t$-row has entry one on $c$ and zero elsewhere; the principal-unit rows have zero constant entry. Since $$g_{s,h}'/g_{s,h}=\sum_{n\ge1}(-1)^{n-1}s\eta_h^nt^{ns-1},$$ the $(s,h),(j,l)$ entry is zero unless $j=ns$, in which case it is $\operatorname{Tr}((-1)^{n-1}s\eta_h^n\theta_l)$. Ordered by increasing $s,j$, this is block triangular with invertible diagonal blocks $s(\operatorname{Tr}(\eta_h\theta_l))$, since $p\nmid s$. The square $D$-matrix is invertible. Therefore any linear relation among the spanning vectors has zero coefficients after pairing; they are a basis. The pairing is perfect, both dimensions are $D$, and the inverse image of its left zero space is exactly $F^{\times p}U_{r+1}$. For $r=0$ the matrix is just the one-by-one valuation/constant block. [F1, step 1.1, step 2.1, algebra]

4.1 Let $N$ be open of index $p$. Its quotient is killed by $p$, so $F^{\times p}\subset N$, and openness gives some $r\ge0$ with $U_{r+1}\subset N$. Its image in $A_r$ is a hyperplane. Perfectness provides a nonzero one-dimensional annihilator in $B_r$; choose a nonzero class $b$ in it. Its functional has kernel precisely that hyperplane. By [F1], $N$ is therefore the norm group of $F(\gamma)$ with $\gamma^p-\gamma=b$. This class is nonzero modulo $\wp(F)$, so the field is not split; [F3] makes its Galois group have order $p$. This also includes the unramified $r=0$ case. No general AS–Witt duality, infinite unit-product basis or all-open existence theorem was used. [A1, F1, F3, step 3.1, construct, algebra] ∎

