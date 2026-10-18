---
id: lem-affine-current-fields-are-local
kind: lemma
title: Affine current fields are local with the normalized current OPE
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-universal-affine-vacuum-module
  - lem-affine-vacuum-module-is-restricted
  - lem-affine-translation-derivation
  - lem-locality-determines-formal-ope-coefficients
  - def-untwisted-affine-central-extension
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
sources:
  references:
    - title: Tomoyuki Arakawa and Anne Moreau, Arc spaces and vertex algebras, §§2.2–2.3 and 3.1
      url: https://www.imo.universite-paris-saclay.fr/~anne.moreau/Arc_space-vertex_algebras-BOOK_version.pdf
    - title: Christophe Nozaradan, Introduction to Vertex Algebras, §§1.4 and 3.2
      url: https://arxiv.org/pdf/0809.1380
---

## Statement

Let $V^k(\mathfrak g)$ be the vacuum module of [[def-universal-affine-vacuum-module]], with $\mathfrak g$ finite-dimensional complex simple and $k\in\mathbb C$. Then for every $x\in\mathfrak g$,
$$J^x(z)=\sum_{n\in\mathbb Z}x_nz^{-n-1}$$
is a field, is creative with $J^x(z)\mathbf1=e^{zT}(x_{-1}\mathbf1)$, and is translation-covariant. For $x,y\in\mathfrak g$,
$$[J^x(z),J^y(w)]=J^{[x,y]}(w)\delta(z,w)+kB(x,y)\partial_w\delta(z,w),$$
so the current fields are pairwise local of order at most $2$, with formal OPE
$$J^x(z)J^y(w)\sim\frac{J^{[x,y]}(w)}{z-w}+\frac{kB(x,y)\operatorname{id}}{(z-w)^2}.$$

## Facts & Assumptions

**Given:** The simple Lie algebra, normalized invariant form, level $k$, and induced vacuum module.

[F1] [[def-universal-affine-vacuum-module]]: the central generator acts as $k$ and $\mathfrak g[t]$ kills $\mathbf1$.

[F2] [[lem-affine-vacuum-module-is-restricted]]: all sufficiently large positive modes of a fixed current kill each fixed vector of $V^k(\mathfrak g)$.

[F3] [[lem-affine-translation-derivation]]: $T\mathbf1=0$ and $[T,x_n]=-nx_{n-1}$.

[F4] [[def-untwisted-affine-central-extension]]: $[x_m,y_n]=[x,y]_{m+n}+m\delta_{m,-n}B(x,y)K$.

[F5] [[lem-locality-determines-formal-ope-coefficients]]: $\delta(z,w)=\sum_{m\in\mathbb Z}z^{-m-1}w^m$, $(z-w)\delta=0$, and $(z-w)^2\partial_w\delta=0$; its locality expansion identifies the formal OPE coefficients.

## Proof

1.1 By [F2], for each vector $v$ the modes $x_n v$ vanish for sufficiently large $n$, so $J^x(z)$ is a field. By [F1], $x_n\mathbf1=0$ for $n\ge0$, whence $J^x(z)\mathbf1=\sum_{r\ge0}x_{-r-1}\mathbf1\,z^r$. From [F3], induction gives $T^r x_{-1}\mathbf1=r!x_{-r-1}\mathbf1$: the induction step is $T x_{-r-1}\mathbf1=(r+1)x_{-r-2}\mathbf1$. Thus the displayed series is $e^{zT}(x_{-1}\mathbf1)$. The same relation gives $[T,J^x(z)]=\sum_n(-n)x_{n-1}z^{-n-1}=\partial_zJ^x(z)$ after the index change $m=n-1$. [F1, F2, F3, algebra]

2.1 By [F4] and the scalar action of $K$ in [F1], $[J^x(z),J^y(w)]=\sum_{m,n}[x_m,y_n]z^{-m-1}w^{-n-1}$. For the loop term set $r=m+n$; it becomes $J^{[x,y]}(w)\sum_mz^{-m-1}w^m=J^{[x,y]}(w)\delta(z,w)$. The central term is $kB(x,y)\sum_m m z^{-m-1}w^{m-1}=kB(x,y)\partial_w\delta(z,w)$. Both reindexings are coefficient identities of formal distributions; each coefficient in the two-variable series is a finite sum. [F1, F4, F5, step 1.1, algebra]

3.1 Multiplying the commutator in step 2.1 by $(z-w)^2$ gives zero: $(z-w)\delta=0$ and differentiating it gives $(z-w)\partial_w\delta=\delta$, hence $(z-w)^2\partial_w\delta=0$. This proves locality. The coefficient formula in [F5] gives the two singular coefficients $J^{[x,y]}$ and $kB(x,y)\operatorname{id}$ and no higher ones, yielding the displayed OPE. [F5, step 2.1, algebra] ∎
