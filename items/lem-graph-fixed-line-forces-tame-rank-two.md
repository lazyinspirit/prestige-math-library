---
id: lem-graph-fixed-line-forces-tame-rank-two
kind: lemma
title: "A fixed graph line forces tame rank-two character spaces"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 6
deps: []
justified_by: []
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
---

## Statement

Let $p,\ell$ be distinct primes, let $E/\mathbb Q_\ell$ be a finite extension containing the $p$th roots of unity, and let $P$ be a pro-$p$ group acting continuously and $E$-linearly on a finite-dimensional $E$-vector space $V$. Suppose $V$ also has an action of the additive group $\Gamma=\mathbb F_p$, commuting with $P$, and a nondegenerate alternating $E$-bilinear form preserved by both actions. Assume explicitly that every nontrivial $\Gamma$-character space $V_\chi$ has dimension two and contains a nonzero $P$-fixed vector. If $p$ is odd, suppose additionally that an involution $J$ of $V$ preserves the form, commutes with $P$, and conjugates each $\gamma\in\Gamma$ to $-\gamma$. Then $P$ acts trivially on the sum of the nontrivial $V_\chi$. This is a finite-dimensional reduction; it does not assert the stated geometric rank, pairing or fixed-vector hypotheses.

## Facts & Assumptions

**Given:** The primes, coefficient field, continuous $P$-action, deck action, alternating form and explicit hypotheses in the Statement.

## Proof

1.1 The character idempotents of the finite group $\Gamma$ decompose $V$ over $E$. Invariance of the pairing makes $V_\chi$ orthogonal to $V_\theta$ unless $\theta=\chi^{-1}$. Nondegeneracy therefore gives a perfect pairing between $V_\chi$ and $V_{\chi^{-1}}$. [given, algebra]

2.1 For odd $p$, the involution $J$ maps $V_\chi$ isomorphically to $V_{\chi^{-1}}$. Thus $B_\chi(v,w)=\langle v,Jw\rangle$ is nondegenerate on $V_\chi$ and is preserved by $P$. It is alternating: invariance under $J$ and $J^2=1$ give $B_\chi(w,v)=\langle w,Jv\rangle=-\langle Jv,w\rangle=-\langle v,Jw\rangle$. For $p=2$, the sole nontrivial character is self-inverse, so the original pairing restricts to a nondegenerate alternating form on its space. [given, step 1.1, algebra]

3.1 Fix a nontrivial $\chi$ and a nonzero $P$-fixed vector $v\in V_\chi$. In the two-dimensional symplectic space of step 2.1, choose $w$ with $B_\chi(v,w)=1$. Every element of $P$ fixes $v$ and preserves the form, so its matrix in the basis $(v,w)$ is $\begin{pmatrix}1&c\\0&1\end{pmatrix}$ for some $c\in E$. The coefficient $c$ is a continuous homomorphism from $P$ to the additive group of $E$. [given, step 2.1, choose, algebra]

4.1 The image of a compact pro-$p$ group in the additive group of a finite extension of $\mathbb Q_\ell$ is trivial when $p\ne\ell$: compactness makes it lie in some scaled ring of integers, whose additive group is pro-$\ell$, and a finite group that is both a $p$-group and an $\ell$-group is trivial. Thus $c=0$ for every element of $P$. Applying this to each nontrivial character proves the assertion. [step 3.1, algebra] ∎
