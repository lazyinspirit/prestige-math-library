---
id: lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root
kind: lemma
title: The affine simple root alpha zero is delta minus the highest root
deps: ["def-residue-two-cocycle-on-a-loop-algebra", "def-null-root-central-coroot-and-affine-level", "lem-finite-semisimple-cartan-root-and-string-structure", "lem-finite-semisimple-pbw-and-highest-weight-construction", "lem-finite-weyl-positive-roots-and-simple-reflections", "def-generalized-cartan-matrix", "def-realization-of-a-generalized-cartan-matrix"]
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Kleshchev, Lectures on Infinite Dimensional Lie Algebras, Sections 6.3
        and 7.2
      url: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf
    - title: Perrin, Introduction to Kac-Moody Groups and Lie Algebras, Sections 12.1-12.2.2
      url: https://lmv.math.cnrs.fr/wp-content/uploads/2019/09/km-suite.pdf
status: draft
origin: pipeline
proof_strategy: direct
---

## Statement

The finite root system of a nonzero complex simple $\mathfrak g$ has a unique highest root $\theta$: every root $\beta$ satisfies $\theta-\beta\in Q_+$. This root is long. Normalize $(\theta,\theta)=2$ and set $\alpha_0=\delta-\theta$, $h_0=c-\theta^\vee$. Together with the finite simple roots and coroots these are minimal realization data for the untwisted affine GCM $\widehat A=(\alpha_j(h_i))_{0\le i,j\le\ell}$. For normalized opposite root vectors,
$$[f_\theta\otimes t,e_\theta\otimes t^{-1}]=h_0.$$

## Facts & Assumptions

**Given:** A nonzero finite-dimensional complex simple Lie algebra.

[F1] Finite root spaces, coroots, strings and simple generation are [[lem-finite-semisimple-cartan-root-and-string-structure]].

[F2] Finite-dimensional simple modules have a unique dominant integral highest weight and support below it by [[lem-finite-semisimple-pbw-and-highest-weight-construction]].

[F3] The finite simple roots form a basis, their coordinates have one sign, and the simple coroots form an integral coroot basis by [[lem-finite-weyl-positive-roots-and-simple-reflections]].

[F4] The form normalization and residue mode coefficient are [[def-residue-two-cocycle-on-a-loop-algebra]].

[F5] The extended Cartan, finite-root extensions and $\delta$ are [[def-null-root-central-coroot-and-affine-level]].

[F6] The matrix axioms are [[def-generalized-cartan-matrix]] and the minimal-realization conditions are [[def-realization-of-a-generalized-cartan-matrix]].

## Proof

1.1 The adjoint module is simple, since its invariant subspaces are ideals. F2 therefore gives a dominant integral highest weight $\theta$ and support in $\theta-Q_+$. Its weights by F1 are $0$ and the roots. The top weight cannot be zero: the support contains both a root $\beta$ and $-\beta$, whereas neither pair can both lie in $-Q_+$ by F3. Thus $\theta$ is a positive root dominating all roots. Any other root with that property dominates $\theta$ and is dominated by it, so equals it by independence of the simple roots. Write $\theta=\sum_i m_i\alpha_i$; since each $\alpha_i\le\theta$, every integer $m_i\ge1$. [F1, F2, F3, algebra]

2.1 Every finite root can be moved to a dominant root of the same length: if $\beta(h_i)<0$, replace $\beta$ by $s_i\beta=\beta-\beta(h_i)\alpha_i$. This increases its integer height and stays in the finite root set, so iteration terminates with all pairings nonnegative. For that dominant root $\gamma$, step 1.1 gives $\theta-\gamma=\sum_i n_i\alpha_i$ with $n_i\ge0$. Dominance of $\theta,\gamma$ then gives $$(\theta,\theta)-(\gamma,\gamma)=\sum_i n_i(\alpha_i,\theta+\gamma)\ge0.$$ Hence $\theta$ has maximal root length and the normalization in F4 is $(\theta,\theta)=2$. [F1, F2, F3, F4, step 1.1, algebra]

3.1 Choose $[e_\theta,f_\theta]=\theta^\vee$ using F1. Invariance gives $B(e_\theta,f_\theta)=2/(\theta,\theta)=1$ as in F4. Thus the mode bracket gives $[f_\theta\otimes t,e_\theta\otimes t^{-1}]=-\theta^\vee+c=h_0$. The diagonal entry $\alpha_0(h_0)$ is $2$; for $i>0$, $\alpha_0(h_i)=-\theta(h_i)$ and $\alpha_i(h_0)=-\alpha_i(\theta^\vee)$. They are nonpositive integers by dominance of $\theta$ and crystallographic integrality, and vanish simultaneously since both are positive multiples of $-(\theta,\alpha_i)$. The finite entries already satisfy the GCM axioms. [F1, F4, F5, F6, step 2.1, algebra]

4.1 Put $\beta_0=-\theta$ and $\beta_i=\alpha_i$ for $i>0$. The matrix of step 3.1 has entries $2(\beta_i,\beta_j)/(\beta_i,\beta_i)$. Multiplication of row $i$ by $(\beta_i,\beta_i)/2$ gives the symmetric Gram matrix of these $\ell+1$ vectors. It is positive semidefinite of rank $\ell$, since the finite simple roots are a basis. Its kernel is spanned by $(1,m_1,\ldots,m_\ell)$, all entries positive. Each proper principal Gram matrix is positive definite: any dependence would extend to a kernel vector with a zero coordinate, impossible. This is the affine, rather than finite, symmetrizable matrix associated with the highest-root extension; it defines the untwisted affine convention here. [F3, step 1.1, step 3.1, algebra]

5.1 The $h_0,h_1,\ldots,h_\ell$ are independent since only $h_0$ has a nonzero $c$ coordinate; the $\alpha_0,\alpha_1,\ldots,\alpha_\ell$ are independent since only $\alpha_0$ is nonzero on $d$. Also $\dim\widehat{\mathfrak h}=\ell+2=2(\ell+1)-\operatorname{rank}\widehat A$. Together with step 3.1 these verify every minimal-realization condition. All root selections and height iterations were finite. Rank one is included: the same formulas give $\bigl(\begin{smallmatrix}2&-2\\-2&2\end{smallmatrix}\bigr)$. [F3, F5, F6, step 3.1, step 4.1, algebra] ∎
