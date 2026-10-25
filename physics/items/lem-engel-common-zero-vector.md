---
id: lem-engel-common-zero-vector
kind: lemma
title: Engel's common-zero-vector lemma
status: published
origin: pipeline
pipeline_run: phase-2-next-18
deps: [def-nilpotent-linear-transformation-and-nil-representation, def-subrepresentation-quotient-representation-and-intertwiner, thm-rank-nullity]
landmark: false
proof_strategy: induction
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: 2026-09-14
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-14
sources:
  references:
    - title: "Milne, Lie Algebras, Theorem 2.8 and proof"
      url: https://www.jmilne.org/math/CourseNotes/LAG.pdf
      locator: "Theorem 2.8 and its proof, printed p. 13"
---

## Statement

Let $V\neq0$ be finite-dimensional over any field, and let
$\mathfrak g\subseteq\mathfrak{gl}(V)$ be a Lie subalgebra. If every
$x\in\mathfrak g$ is a nilpotent endomorphism of $V$, then there is a nonzero
$v\in V$ such that $xv=0$ for every $x\in\mathfrak g$.

## Facts & Assumptions

**Given:** A nonzero finite-dimensional vector space $V$ and a Lie subalgebra $\mathfrak g\subseteq\mathfrak{gl}(V)$ whose inclusion representation is nil.

[L1] A nil representation is one in which every represented element is a nilpotent endomorphism ([[def-nilpotent-linear-transformation-and-nil-representation]]).

[L2] An invariant subspace carries a restricted representation and its quotient carries the induced representation ([[def-subrepresentation-quotient-representation-and-intertwiner]]).

[L3] Rank-nullity applies to finite-dimensional endomorphisms ([[thm-rank-nullity]]).

## Proof

**Proof technique:** induction on $\dim\mathfrak g$.

1.1 If $\mathfrak g=0$, every nonzero $v\in V$ is annihilated by $\mathfrak g$, so the assertion holds. [base, given]

1.2 Assume $\mathfrak g\neq0$ and that the assertion holds for every nil Lie algebra of operators of dimension strictly smaller than $\dim\mathfrak g$, acting on any nonzero finite-dimensional module. [ih, given]

1.3 Choose a proper subalgebra $\mathfrak h<\mathfrak g$ of maximal dimension; this exists because $0$ is proper and the possible dimensions form a nonempty finite set. For $H\in\mathfrak h$, take $m>0$ with $H^m=0$ by [L1]. On $\operatorname{End}(V)$, $\operatorname{ad}_H=L_H-R_H$, where $L_H$ and $R_H$ commute, and every term of $(L_H-R_H)^{2m-1}$ contains either $L_H^m$ or $R_H^m$; hence $\operatorname{ad}_H$ is nilpotent. Its restrictions and induced quotient operators are nilpotent as well. [L1, algebra]

2.1 The adjoint action of $\mathfrak h$ preserves $\mathfrak h$, so [L2] gives an action on the nonzero space $\mathfrak g/\mathfrak h$. By step 1.3 it is nil, and step 1.2 supplies a nonzero coset $x+\mathfrak h$ killed by $\mathfrak h$. Thus $x\notin\mathfrak h$ and $[\mathfrak h,x]\subseteq\mathfrak h$, so the normalizer of $\mathfrak h$ strictly contains $\mathfrak h$. [L2, step 1.2, step 1.3]

3.1 The normalizer is a subalgebra; maximality of $\mathfrak h$ in step 1.3 and step 2.1 therefore make it all of $\mathfrak g$, so $\mathfrak h$ is an ideal. Moreover $\mathfrak g/\mathfrak h$ is one-dimensional: otherwise the inverse image of the one-dimensional subalgebra spanned by any nonzero quotient vector would be strictly between $\mathfrak h$ and $\mathfrak g$. Hence $\mathfrak g=\mathfrak h\oplus kx$. [step 1.3, step 2.1, algebra]

4.1 Apply step 1.2 to $\mathfrak h$ acting on $V$. Its common kernel $V_0=\{v\in V:\mathfrak h v=0\}$ is nonzero. It is $x$-stable, because for $H\in\mathfrak h$ and $v\in V_0$, $H(xv)=x(Hv)+[H,x]v=0$ by ideality from step 3.1. [L2, step 1.2, step 3.1, algebra]

5.1 The restriction of $x$ to nonzero finite-dimensional $V_0$ is nilpotent by [L1]. Its kernel is nonzero: if it were zero, rank-nullity [L3] would make $x|_{V_0}$ injective, hence every positive power injective, contradicting nilpotence on $V_0\neq0$. Choose $0\neq v\in\ker(x|_{V_0})$. Then $\mathfrak h v=0$, $xv=0$, and step 3.1 gives $\mathfrak g v=0$. This is a single finite existential choice, not an application of Choice. [L1, L3, step 3.1, step 4.1, discharge-induction] ∎
