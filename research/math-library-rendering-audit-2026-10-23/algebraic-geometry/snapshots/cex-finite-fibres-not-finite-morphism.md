---
id: "cex-finite-fibres-not-finite-morphism"
kind: "counterexample"
title: "Finite fibres do not imply a module-finite map"
deps: ["def-quasi-finite-morphism-classical", "def-module-finite-affine-classical-map", "def-fibre-dimension-at-point-classical"]
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "Milne §8c Quasi-finite maps; affine open immersion comparison"
      url: https://www.jmilne.org/math/CourseNotes/AG.pdf
status: published
origin: "pipeline"
proof_strategy: "A finite list of Laurent polynomials has bounded negative exponents; its k[t]-span cannot contain all t^-m. Equivalently t^-1 is not integral over k[t]."
---

## Statement refuted

False claim: a morphism of affine classical varieties with finite fibres must be module-finite.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement refuted, for the explicit witness below.

[F1] A morphism $f:X\to Y$ of classical varieties is quasi-finite if every closed-point fibre $X_y$ is a finite set; empty fibres are allowed. Classical morphisms here are of finite type: for an affine target chart and an affine source chart above it, any finite set of $k$-algebra generators of the source ring also generates it over the target ring. The inverse image has a finite affine cover because it is an open of a Noetherian variety. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-quasi-finite-morphism-classical]]).

[F2] For affine classical algebraic sets $X,Y$, call a morphism $f:X\to Y$ module-finite if $k[X]$, via pullback, is a finitely generated $k[Y]$-module. This is the affine module criterion. Empty affine sets are allowed, with zero coordinate ring; the definition does not assert a global affine-preimage criterion for arbitrary varieties. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-module-finite-affine-classical-map]]).

[F3] For a morphism $f:X\to Y$ of classical varieties and a closed point $y\in Y$, let $X_y=f^{-1}(y)$ have its reduced closed-subvariety structure. Its dimension is the chain dimension, with $\dim X_y=-\infty$ if the fibre is empty. On affine charts $V\subseteq Y$ containing $y$ and $U\subseteq f^{-1}(V)$, writing $A=k[V]$ and $B=k[U]$, the fibre chart has coordinate ring $B/\sqrt{\mathfrak m_yB}$. Here general morphisms have the locally ringed-space meaning; the earlier affine morphism definition applies to the restrictions $U\to V$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-fibre-dimension-at-point-classical]]).

## Counterexample

1.1 Take $j:\mathbf G_m\hookrightarrow\mathbf A^1$, with ring map $k[t]\hookrightarrow k[t,t^{-1}]$. Its fibres are a singleton at each nonzero parameter and empty at zero, so it is quasi-finite. The inverse map between $\mathbf G_m$ and $V(ts-1)$ identifies its coordinate ring with the indicated Laurent ring. [F1, F3]

2.1 If finitely many Laurent polynomials generated $k[t,t^{-1}]$ as a $k[t]$-module, there would be $M\ge0$ such that every exponent in all these generators was at least $-M$. Multiplication by polynomials and finite addition cannot introduce a smaller exponent. Thus their span cannot contain $t^{-(M+1)}$, a contradiction. The module-finiteness criterion fails. [F2, step 1.1] ∎
