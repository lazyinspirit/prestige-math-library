---
id: cex-positive-characteristic-failure-of-lies-theorem
kind: counterexample
title: Positive-characteristic failure of Lie's theorem
status: draft
origin: pipeline
pipeline_run: phase-2-next-18
deps: [thm-lies-theorem, def-derived-series-and-solvable-lie-algebra, def-representation-of-a-lie-algebra, def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]
landmark: false
proof_strategy: counterexample
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Etingof, Lie Groups and Lie Algebras, positive-characteristic counterexample"
      url: https://math.mit.edu/~etingof/lnlg.pdf
      locator: "Theorem 13.1 and Remark 13.2, printed pp. 64–65"
---

## Counterexample

Let $k$ be a field of characteristic $p>0$. The solvable Lie algebra
$\mathfrak a=kx\oplus ky$ with $[x,y]=y$ has a $p$-dimensional irreducible
module $V$ with basis $v_0,\ldots,v_{p-1}$ and action

$$xv_i=i v_i,\qquad yv_i=v_{i+1},$$

where the second index is read modulo $p$. In particular, the action has no
common eigenline, so Lie's theorem fails in positive characteristic.

## Facts & Assumptions

**Given:** A field $k$ of characteristic $p>0$, the displayed affine algebra,
and the displayed operators $X,Y$ on $V$.

[L1] Lie's theorem assumes an algebraically closed field of characteristic
zero and concludes the existence of a common eigenvector
([[thm-lies-theorem]]).

[L2] Solvability is termination of the derived series
([[def-derived-series-and-solvable-lie-algebra]]).

[L3] A representation carries brackets to operator commutators
([[def-representation-of-a-lie-algebra]]).

[L4] A nonzero representation is irreducible when it has no nonzero proper
stable subspace
([[def-irreducible-completely-reducible-and-faithful-lie-algebra-representation]]).

## Refutation

**Proof technique:** counterexample.

1.1 The only nonzero basis bracket of $\mathfrak a$ spans $ky$, and $[ky,ky]=0$. Hence $\mathfrak a^{(1)}=ky$ and $\mathfrak a^{(2)}=0$, so $\mathfrak a$ is solvable by [L2]. [L2, given, algebra]

1.2 For $0\leq i<p-1$, $(XY-YX)v_i=(i+1-i)v_{i+1}=Yv_i$. At the wraparound index, $(XY-YX)v_{p-1}=(0-(p-1))v_0=v_0=Yv_{p-1}$ in characteristic $p$; this includes $p=2$. Thus $[X,Y]=Y$, and the other basis-bracket identities are automatic, so $x\mapsto X$, $y\mapsto Y$ is a representation by [L3]. [L3, given, algebra]

2.1 Let $0\neq W\subseteq V$ be stable under $X$ and $Y$, and choose a nonzero $w=\sum_j c_jv_j\in W$ with $c_i\neq0$. The scalars $0,1,\ldots,p-1$ are distinct in $k$. Therefore the Lagrange polynomial $P_i(T)=\prod_{j\neq i}(T-j)/(i-j)$ is defined and satisfies $P_i(X)w=c_iv_i\in W$. Hence $v_i\in W$. Repeated application of the cyclic operator $Y$ puts every basis vector $v_j$ in $W$, so $W=V$. By [L4], $V$ is irreducible. [L4, step 1.2, algebra]

3.1 Since $p\geq2$, this irreducible module has dimension greater than one. A common eigenvector would span a nonzero proper stable line, contradicting step 2.1. Thus the solvable algebra in step 1.1 and the representation in step 1.2 violate the common-eigenvector conclusion when characteristic zero is removed from [L1]. Every selection is from fixed finite coordinates, so no choice principle is used. [L1, step 1.1, step 1.2, step 2.1] ∎
