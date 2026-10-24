---
id: prop-the-homology-kunneth-sequence-splits-nonnaturally
kind: proposition
title: The homology Kunneth sequence splits nonnaturally
status: published
verification:
  audited: 2026-09-12
origin: pipeline
pipeline_run: phase-2-next-20
deps: [thm-topological-kunneth-short-exact-sequence-for-homology, thm-pid-kunneth-splitting-from-cycle-boundary-presentations, def-axiom-of-choice, lem-singular-product-chain-equivalence-by-simplex-models]
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: Miller, Theorem 25.15, printed page 66
      url: https://math.mit.edu/~hrm/papers/notes-905.pdf
---

## Statement

Assume AC. For any commutative PID $R$ and spaces $X,Y$, the homology Künneth short exact sequence admits an $R$-linear section of its Tor quotient in every degree $n\ge0$. Consequently its middle term is abstractly the direct sum of its tensor and Tor terms. The section is constructed after choices; no natural choice of splitting is asserted.

## Facts & Assumptions

[F1] [[thm-topological-kunneth-short-exact-sequence-for-homology]] gives the exact sequence $0\to K\xrightarrow{\alpha'}W\xrightarrow{\gamma}Q\to0$.

[F2] [[thm-pid-kunneth-splitting-from-cycle-boundary-presentations]] supplies, for the tensor complex, maps $r:V\to K$ and $j:Q\to V$ satisfying $r\alpha=1$, $\beta j=1$, $j\beta=1-\alpha r$, and $rj=0$.

[F3] [[lem-singular-product-chain-equivalence-by-simplex-models]] supplies the shuffle homology isomorphism $s:V\to W$ with inverse $t$, where $V=H_n(C(X;R)\otimes_R C(Y;R))$. The topological maps of [F1] are $\alpha'=s\alpha$, $\gamma=\beta t$. Assume [[def-axiom-of-choice]].

## Proof

**Given:** $R,X,Y,n$ and the maps in [F1]–[F3], under AC.

1.1 The singular complexes are nonnegative free PID complexes, so the section theorem [F2] applies. Define $j'=sj:Q\to W$ and $r'=rt:W\to K$. Then $\gamma j'=\beta tsj=\beta j=1$, $r'\alpha'=rts\alpha=1$, and $r'j'=rtsj=0$. All maps are $R$-linear. [F1, F2, F3, given]

2.1 The remaining composite satisfies $j'\gamma=sj\beta t=s(1-\alpha r)t=1-\alpha'r'$. Therefore $(k,q)\mapsto\alpha'k+j'q$ and $w\mapsto(r'w,\gamma w)$ are inverse: one composite is $(k,q)\mapsto(k,q)$ using $r'j'=0$, $\gamma\alpha'=0$ and the identity composites; the other is $w\mapsto(\alpha'r'+j'\gamma)w=w$. This proves the direct-sum assertion with the actual cross product and quotient. [F1, F2, F3, step 1.1]

3.1 The maps $r,j$ of [F2] use chosen retractions $C_p\to Z_pC$ and $D_q\to Z_qD$, obtained by splitting the surjections onto $B_{p-1}C$ and $B_{q-1}D$. No splitting of the inclusions $B_pC\hookrightarrow Z_pC$ is used. Since no compatibility of those retractions with all space maps is supplied, steps 1.1 and 2.1 assert existence of a section, without asserting its naturality. The canonical exact sequence itself retains its naturality from [F1]. This observation alone is not a proof that every possible natural section is impossible. [F1, F2, step 1.1, step 2.1]

4.1 At $n=0$, $Q=0$ and $j'$ is the unique map from zero; $\alpha'r'=1$ gives the degree-zero cross-product isomorphism. If a factor is empty, $K=V=W=Q=0$ and every formula remains valid. If $K=0$, the section is the inverse of $\gamma$; if $Q=0$, no Tor summand is added. In degree zero on a pair of points, $\alpha'$ sends the tensor of the two unit vertex classes to the unit product vertex class. AC is inherited from [F2] for arbitrary-rank cycle retractions and simultaneous degreewise choices; composing the maps adds no choices. [F1, F2, F3, step 1.1, step 2.1, step 3.1] ∎
