---
id: "thm-upper-semicontinuity-fibre-dimension-projective"
kind: "theorem"
title: "Projective fibre dimension is upper semicontinuous"
deps: ["def-projective-morphism-classical", "def-fibre-dimension-at-point-classical", "thm-classical-projective-projection-closed", "lem-projective-dimension-linear-avoidance"]
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
    - title: "Vakil Class 38 Exercise 3.B and its preceding proof, pp.4–5"
      url: https://math.stanford.edu/~vakil/0708-216/216class38.pdf
status: published
origin: "pipeline"
proof_strategy: "For r<=0 this is the closed image. For 1<=r<=N, if dim X_y<r choose an (N-r)-plane avoiding that fibre. Its intersection with X has closed projection missing y, and over the complementary neighborhood every fibre still avoids the plane and has dimension <r. For r>N the locus is empty."
---

## Statement

For a projective morphism $f:X\to Y$ of classical varieties, the set $E_r=\{y\in Y:\dim X_y\ge r\}$ is closed for every integer $r$. Neither irreducibility nor surjectivity is required, and empty fibres have dimension $-\infty$.

Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] A morphism $f:X\to Y$ of classical varieties is projective here if there is an integer $N\ge0$ and a factorization $X\hookrightarrow Y\times\mathbf P_k^N\to Y$ in which the first map is a closed immersion and the second is projection. A closed immersion in this classical setting is an isomorphism onto a reduced closed subvariety. Morphisms have the general locally ringed-space meaning, checked on affine charts. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-projective-morphism-classical]]).

[F2] For a morphism $f:X\to Y$ of classical varieties and a closed point $y\in Y$, let $X_y=f^{-1}(y)$ have its reduced closed-subvariety structure. Its dimension is the chain dimension, with $\dim X_y=-\infty$ if the fibre is empty. On affine charts $V\subseteq Y$ containing $y$ and $U\subseteq f^{-1}(V)$, writing $A=k[V]$ and $B=k[U]$, the fibre chart has coordinate ring $B/\sqrt{\mathfrak m_yB}$. Here general morphisms have the locally ringed-space meaning; the earlier affine morphism definition applies to the restrictions $U\to V$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[def-fibre-dimension-at-point-classical]]).

[F3] For every classical variety $Y$ and $N\ge0$, the projection $p:Y\times\mathbf P_k^N\to Y$ is a closed map. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[thm-classical-projective-projection-closed]]).

[F4] For a closed subset $Z\subseteq\mathbf P_k^N$ and integer $0\le r\le N$, $\dim Z<r$ if and only if some projective linear subspace of dimension $N-r$ is disjoint from $Z$. Work over a fixed algebraically closed field $k$, with the Axiom of Choice. Classical varieties are separated and admit finite affine covers; they may be reducible or empty unless irreducibility is specified. Irreducible means nonempty. All fibres and points below are classical closed-point fibres and points. ([[lem-projective-dimension-linear-avoidance]]).

## Proof

1.1 Choose a closed immersion $X\hookrightarrow Y\times\mathbf P^N$ over $Y$. For $r\le0$, $E_r=f(X)$ because nonempty classical varieties have dimension at least zero and empty fibres have dimension $-\infty$. This image is closed by closed projective projection. For $r>N$, $E_r=\varnothing$, since a closed subset of $\mathbf P^N$ has dimension at most $N$. [F1, F2, F3]

1.2 Let $1\le r\le N$ and $y\notin E_r$. The linear-avoidance equivalence supplies an $(N-r)$-plane $L$ missing $X_y$. The set $X\cap(Y\times L)$ is closed in $Y\times\mathbf P^N$, so its projection $C$ is closed and does not contain $y$. [F3, F4]

2.1 For every $z\in Y\setminus C$, the same plane $L$ misses $X_z$. The reverse implication of linear avoidance gives $\dim X_z<r$. Hence $Y\setminus C$ is an open neighborhood of $y$ contained in $Y\setminus E_r$. This proves closedness for the remaining integers, including empty fibres and reducible fibres. [F4, step 1.2] ∎
