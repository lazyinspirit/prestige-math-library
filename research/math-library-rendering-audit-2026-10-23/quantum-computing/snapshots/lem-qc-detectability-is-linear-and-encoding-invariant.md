---
id: lem-qc-detectability-is-linear-and-encoding-invariant
kind: lemma
title: Detectable operators form a subspace and quantum distance is well defined
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 6
deps: [cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases, def-adjoint-of-a-linear-map-between-inner-product-spaces, def-qc-local-operator-support-and-weight, def-qc-quantum-code-distance-and-error-detection, def-qc-quantum-code-isometry-and-code-projector, prop-adjoint-algebra, prop-orthogonal-projection-formula-and-linearity, thm-qc-isometric-encoding-projector, thm-rank-nullity]
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: Richard Cleve, Quantum Information Processing course notes, §§36.1, 36.3, and 37.3
      url: https://cleve.iqc.uwaterloo.ca/resources/QIC-710-F26/Qic710LectureNotes2026V6.pdf
    - title: John Preskill, Quantum Computation, Chapter 7, §§7.1 and 7.4.1
      url: https://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf
---

## Statement

Let $P$ be the code projector of an isometric encoding into an $n$-factor register and let $K$ be the logical dimension. Then:

1. The set $\mathcal D(P):=\{E:PEP\in\mathbb C P\}$ of detectable operators is a complex linear subspace of $\operatorname{End}(\mathcal H_P)$.
2. Replacing the encoding $V$ by $VU$ for any unitary $U$ on $\mathcal H_L$ leaves $P$, detectability, and distance unchanged.
3. If $K=1$, every operator is detectable, so the distance convention $n+1$ is appropriate. If $K\ge2$, a non-detectable operator of weight at most $n$ exists, while every weight-zero operator is detectable; hence the minimum defining distance exists and lies in $\{1,\ldots,n\}$.

## Facts & Assumptions

**Given:** An isometric encoding $V:\mathcal H_L\to\mathcal H_P$, its code projector $P=VV^*$, logical dimension $K\ge1$, and an ordered $n$-factor register with $n\ge1$.

[L1] [[def-qc-quantum-code-isometry-and-code-projector]]: $P=VV^*$ and $\operatorname{im}P$ is the code subspace.

[L2] [[def-qc-quantum-code-distance-and-error-detection]]: $E$ is detectable exactly when $PEP=\lambda P$ for some scalar, and distance is the minimum weight of a non-detectable operator when $K\ge2$.

[L3] [[def-qc-local-operator-support-and-weight]]: Every operator is supported on the full factor set; scalar identity operators have weight zero.

[L4] [[thm-qc-isometric-encoding-projector]]: The code projector is self-adjoint and acts as the identity on its range.

[F1] [[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]]: Every finite-dimensional inner-product subspace has an orthonormal basis.

[F2] [[prop-orthogonal-projection-formula-and-linearity]]: Projection onto a unit vector $u$ acts by $x\mapsto\langle x,u\rangle u$ under the first-variable-linear convention.

[F3] [[prop-adjoint-algebra]]: The adjoint of a compatible composite satisfies $(ST)^*=T^*S^*$.

[F4] [[def-adjoint-of-a-linear-map-between-inner-product-spaces]]: $\langle Px,u\rangle=\langle x,P^*u\rangle$.

[F5] [[thm-rank-nullity]]: For a linear map with finite-dimensional domain, $\dim V=\dim\ker T+\dim\operatorname{im}T$.

## Proof


1.1 If $E,F\in\mathcal D(P)$ with $PEP=\lambda P$ and $PFP=\mu P$, then for $a,b\in\mathbb C$, $P(aE+bF)P=(a\lambda+b\mu)P$. Thus $aE+bF\in\mathcal D(P)$, proving linearity. [L2, algebra]

1.2 For a unitary $U$ on $\mathcal H_L$, [F3] gives $(VU)^*=U^*V^*$, so $(VU)(VU)^*=VUU^*V^*=VV^*=P$. The same projector gives the same detectable set, operator weights, and distance. [F3, L1, L2, given, algebra]

1.3 If $K=1$, choose a unit vector $v$ spanning $\operatorname{im}P$. By [F2], $Px=\langle x,v\rangle v$, and therefore $PEPx=\langle x,v\rangle\langle Ev,v\rangle v=\langle Ev,v\rangle Px$ for every $x$ and every $E$. So every operator is detectable. [F1, F2, L1, given]

2.1 Suppose $K\ge2$. If $Vx=0$, norm preservation gives $\lVert x\rVert=0$, so positive definiteness gives $x=0$; hence $\ker V=\{0\}$. Rank-nullity [F5] gives $\dim\operatorname{im}V=\dim\mathcal H_L=K$. By [L1], $\operatorname{im}P=\operatorname{im}V$, so the code subspace is finite-dimensional of dimension at least two. Choose orthonormal $u,v$ in it using [F1], and let $E$ be projection onto $\mathbb C u$. Since $Pu=u$ and $P=P^*$ by [L4], [F2] gives $PE=E$; [F4] gives $\langle Px,u\rangle=\langle x,P^*u\rangle=\langle x,u\rangle$, so $EP=E$ and $PEP=E$. It cannot equal $\lambda P$, since applying both sides to $u$ forces $\lambda=1$ while applying them to $v$ forces $\lambda=0$. By [L3], $E$ has weight at most $n$. If an operator has weight zero, the support definition uses $S=\varnothing$, so it is $A_\varnothing\otimes I=\lambda I$ and satisfies $PEP=\lambda P$. Thus the non-detectable weights form a nonempty subset of $\{1,\ldots,n\}$ and have a minimum. [F1, F2, F4, F5, L1, L2, L3, L4, given, algebra] ∎

## Remarks

No Pauli-only reduction is used: the definition and proof range over all endomorphisms. The current QC02 register and wire-permutation definitions fix the factor order used by the code and support definitions.
