---
id: "lem-closed-oriented-pid-manifolds-have-finitely-generated-homology"
kind: "lemma"
title: "Finite generation from cap with a finite fundamental cycle"
status: "draft"
origin: "pipeline"
pipeline_run: "phase-2-next-17"
deps: ["thm-poincare-duality-for-oriented-topological-manifolds","def-cap-product-with-cohomology-first","cor-submodules-of-finite-free-pid-modules-are-free","def-axiom-of-choice"]
verification:
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-12
sources:
  references:
    - title: Arvind Nair, Topology II (2024), Theorem 1.11.1, printed p.11; statement
        restricted here to PID coefficients with a direct finite-cap proof
      url: https://mathweb.tifr.res.in/~arvind/topology/manifolds2024.pdf
    - title: Hatcher, Algebraic Topology, Poincare duality and finite generation
        discussion, section 3.3
      url: https://pi.math.cornell.edu/~hatcher/AT/ATch3.pdf
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: "direct"
---

## Statement

Assume AC. If $M$ is a closed $R$-oriented $n$-manifold and $R$ is a commutative PID, then every $H_q(M;R)$ and $H^p(M;R)$ is finitely generated over $R$, and these groups vanish outside degrees $0,\ldots,n$. In particular this applies to $R=\mathbb Z$ and to every field. Closed means compact and boundaryless; connectedness is not required. The AC use is inherited from Poincaré duality.

## Facts & Assumptions

[F1] [[thm-poincare-duality-for-oriented-topological-manifolds]] identifies cap with the fundamental class as an isomorphism $H^p(M;R)\to H_{n-p}(M;R)$ for compact $M$, under AC.

[F2] [[def-cap-product-with-cohomology-first]] evaluates a degree-$p$ cochain on the front $p$-face of a simplex and retains its back face; singular chains are finite sums.

[F3] [[cor-submodules-of-finite-free-pid-modules-are-free]] proves that a submodule of a finite free PID module is free of finite rank no larger than the ambient rank.

[F4] [[def-axiom-of-choice]] is assumed for [F1].

## Proof

**Given:** $M,n,R$ and its orientation. Choose one finite singular cycle $z=\sum_{i=1}^m r_i\sigma_i$ representing its fundamental class. Such a representative exists by the definition of the homology class in [F1]. If the class is zero the zero cycle is permitted.

1.1 Fix $0\le q\le n$, and put $p=n-q$. Let $S_q$ be the submodule of $C_q(M;R)$ freely spanned by the distinct back faces $\sigma_i[p,\ldots,n]$ occurring in $z$. It is free of rank at most $m$: these are a subset of the specified singular simplex basis, and repetitions are removed. For every degree-$p$ cochain $a$, the cap formula [F2] gives $$a\cap z=\sum_{i=1}^m r_i\,a(\sigma_i[0,\ldots,p])\,\sigma_i[p,\ldots,n]\in S_q.$$ In particular every cocycle caps to a cycle lying in $S_q$. [F1, F2, given]

2.1 Put $T_q=S_q\cap\ker\partial_q$. This is a submodule of the finite free module $S_q$, so [F3] makes it finite free. Its map to $H_q(M;R)$, sending a cycle to its homology class, is onto: any homology class is $D_M[a]$ by [F1], and a cocycle representative of $a$ gives the cycle in step 1.1. The images of a finite basis of $T_q$ therefore generate $H_q(M;R)$. This uses a finite generating module of cycles, not the unsupported claim that the individual back faces are cycles. [F1, F3, F4, step 1.1]

3.1 For $q>n$, [F1] identifies $H_q(M;R)$ with $H^{n-q}(M;R)=0$, and negative homology degrees are zero by convention. For $0\le p\le n$, [F1] identifies $H^p(M;R)$ with the finitely generated $H_{n-p}(M;R)$ of step 2.1. If $p>n$ its target is a negative homology group, and if $p<0$ the cochain complex is zero, proving the stated vanishings. Since only finitely many degrees survive, even the direct sums over all degrees are finitely generated. [F1, step 2.1]

4.1 Empty $M$ has $z=0$, all $S_q=T_q=0$, and zero homology. A PID is nonzero by definition, so the zero ring is not a hypothesis here. At $q=0$, $\partial_0=0$ and $T_0=S_0$; at $q=n$, cap uses degree-zero cochains and retains the original simplices. For $n=0$ the same proof uses only those vertices. A one-simplex support gives rank at most one for $T_q$. Degenerate simplices are legitimate basis elements, and duplicate back faces were removed explicitly. Beyond the AC inherited from [F1] for the countable atlas and local UCT, this proof chooses only a single representative cycle and a finite basis in one finite free module; it introduces no further infinite selection. [F1, F2, F3, F4, step 1.1, step 2.1, step 3.1] ∎
