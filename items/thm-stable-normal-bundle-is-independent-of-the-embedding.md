---
id: thm-stable-normal-bundle-is-independent-of-the-embedding
kind: theorem
title: "Stable normal bundle is independent of the embedding"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: ["def-stable-normal-bundle-of-a-compact-smooth-manifold", "lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval", "thm-smooth-dependence-of-ode-solutions-on-parameters", "thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure", "def-smooth-vector-bundle-rank-fibre-and-trivial-bundle", "def-countable-choice", "def-smooth-function-on-a-relatively-open-subset-of-a-half-space"]
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "May, A Concise Course in Algebraic Topology, Chapter 23 §§3–4"
      url: "https://www.math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
      locator: "printed pp.191–193; tangent/normal complement and stable normal data"
    - title: "Hatcher, Vector Bundles and K-Theory"
      url: "https://pi.math.cornell.edu/~hatcher/VBKT/VB.pdf"
      locator: "Theorem 1.6, printed pp.20–21; endpoint bundle transport"
    - title: "Lee, Introduction to Smooth Manifolds, tubular neighborhoods"
      url: "https://dokumen.pub/introduction-to-smooth-manifolds-2nd-ed-9781441999818-9781441999825-1441999817-1441999825.html"
      locator: "Tubular Neighborhoods; normal quotient identification"
---

## Statement

For embeddings $i_j:M\hookrightarrow\mathbb R^{N_j}$ of a compact smooth manifold, $\nu_{i_0}\oplus\varepsilon^{N_1}\cong\nu_{i_1}\oplus\varepsilon^{N_0}$. Thus the stable normal class is intrinsic. The same assertion holds for compact manifolds with boundary. The countable-choice hypothesis $\mathrm{AC}_\omega$ ([[def-countable-choice]]) is inherited from the normal-bundle identifications of [[def-stable-normal-bundle-of-a-compact-smooth-manifold]]; the transport below adds no further choice.

## Facts & Assumptions

**Given:** The two embeddings and Euclidean metrics.

[F1] [[def-stable-normal-bundle-of-a-compact-smooth-manifold]] identifies the normal bundle of an embedding with the fibrewise orthogonal complement of the tangent image, smoothly over the base, with the half-space form at boundary points.

[F2] [[lem-linear-matrix-odes-have-unique-global-solutions-on-a-given-interval]] gives a unique global matrix solution on the compact time interval for each fixed value of a parameter; [[thm-smooth-dependence-of-ode-solutions-on-parameters]] gives local smooth dependence of solutions on that parameter.

[F3] The tangent bundle of a smooth manifold is a smooth vector bundle and so admits smooth local frames ([[thm-the-tangent-bundle-has-a-canonical-smooth-2n-manifold-structure]], [[def-smooth-vector-bundle-rank-fibre-and-trivial-bundle]]).

[F4] Smooth coordinate maps on relatively open half-space sets have smooth Euclidean extensions near each point ([[def-smooth-function-on-a-relatively-open-subset-of-a-half-space]]).

## Proof

1.1 If $N_0+N_1=0$, all tangent and normal fibres are zero and the unique zero-bundle isomorphism proves the assertion; assume the ambient dimension is positive below. In $\mathbb R^{N_0}\oplus\mathbb R^{N_1}$ set $j_t(x)=(\cos(\pi t/2)i_0(x),\sin(\pi t/2)i_1(x))$. At least one coefficient is nonzero; hence $j_t$ is injective and $dj_t$ is injective on each tangent space, because the coefficient that does not vanish already forces equality of $x$, respectively vanishing of the tangent vector. Let $Q_t(x)$ be the orthogonal projection onto $dj_t(T_xM)$ and $P_t=I-Q_t$. In a smooth local frame $e_1,\dots,e_n$ of $TM$ from [F3], the matrix $A(t,x)$ with columns $dj_t(e_i(x))$ has full column rank, and $Q_t(x)=A(A^{T}A)^{-1}A^{T}$ is smooth in $(t,x)$; the same formula applies in boundary charts. For a zero-dimensional $M$, the frame is empty and the formula reads $Q_t=0$, $P_t=I$. Thus $P_t$ is a smooth family of orthogonal projections with $\ker P_t=dj_t(TM)=dj_t(T_xM)$ fibrewise. At $t=0$ one has $\operatorname{im}P_0=di_0(T_xM)^{\perp}\oplus\mathbb R^{N_1}$ and at $t=1$ one has $\operatorname{im}P_1=\mathbb R^{N_0}\oplus di_1(T_xM)^{\perp}$, and [F1] identifies the orthogonal summands with $\nu_{i_0}$ and $\nu_{i_1}$ smoothly over $M$, in the half-space form at boundary points. [F1, F3, construct]

2.1 Put $K_t=\dot P_tP_t-P_t\dot P_t$ and solve $\dot U_t=K_tU_t$, $U_0=I$ in the finite-dimensional ambient space, with $x\in M$ as a parameter. For each fixed $x$ the coefficients $t\mapsto K_t(x)$ are smooth, so [F2] gives a unique solution on all of $[0,1]$; For an interior parameter chart, the coefficients are defined on an open time-state-parameter domain, so [F2] gives local smooth dependence. At a boundary parameter point use [F4] to extend the coordinate functions of $i_0,i_1$ and the local frame to an open Euclidean parameter neighbourhood; shrink it so both embedding differentials and the frame remain full rank. The same formula for $A(t,x)$ then stays full rank on an open time interval containing $[0,1]$, since its sine and cosine coefficients never vanish together. Hence $P_t$ and $K_t$ have smooth extensions on an open time-parameter domain, and the vector field $(t,U,x)\mapsto K_t(x)U$ is smooth on an open time-state-parameter domain as required by [F2]. Apply that theorem on the extension and restrict back to the half-space. On the compact time interval, finitely many local continuations and uniqueness glue these solution maps to a smooth $U_t(x)$; the restricted extensions give smoothness up to the boundary. Since $K_t^{T}=-K_t$, differentiating $U^{T}U$ gives zero, so every $U_t$ is orthogonal. Differentiating $P_t^{2}=P_t$ gives $P_t\dot P_tP_t=0$, whence $$KP-PK=(\dot PP-P\dot P)P-P(\dot PP-P\dot P)=\dot PP+P\dot P=\dot P,$$ so $\frac{d}{dt}(U_t^{-1}P_tU_t)=U_t^{-1}(-K_tP_t+\dot P_t+P_tK_t)U_t=0$ and $U_t^{-1}P_tU_t=P_0$. Passing to $t=1$, the smooth family $x\mapsto U_1(x)$ restricts to a smooth bundle isomorphism $\operatorname{im}P_0\to\operatorname{im}P_1$ over $M$. [F2, F3, F4, step 1.1, algebra, construct]

3.1 By step 1.1 the initial complement bundle is $\nu_{i_0}\oplus\varepsilon^{N_1}$ and the final one is $\varepsilon^{N_0}\oplus\nu_{i_1}$, so with the reordering of the two orthogonal summands the bundle isomorphism of step 2.1 gives $\nu_{i_0}\oplus\varepsilon^{N_1}\cong\nu_{i_1}\oplus\varepsilon^{N_0}$. This proves the intrinsic nature of the stable normal class and applies verbatim to compact manifolds with boundary, where the same fibrewise orthogonal projections are smooth in boundary charts. For empty $M$ the assertion is the unique map of zero bundles. No summand has been cancelled: both sides retain their unstable ranks. The countable choice of [F1] is the only choice used; the ODE transport selects the solution of a linear equation with Lipschitz coefficients and adds none. [F1, step 1.1, step 2.1] ∎
