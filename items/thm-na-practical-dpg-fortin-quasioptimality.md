---
id: "thm-na-practical-dpg-fortin-quasioptimality"
kind: "theorem"
title: "Fortin stability and quasi-optimality for practical DPG"
status: "published"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 8
deps:
  [
    "def-na-ultraweak-poisson-dpg-formulation",
    "lem-na-ultraweak-poisson-bilinear-form-bounded",
    "lem-na-ultraweak-poisson-trial-kernel",
    "lem-na-practical-dpg-fortin-p1-r3",
    "thm-na-babuska-brezzi-kernel-coercivity",
    "def-countable-choice",
    "thm-riesz-representation-for-hilbert-space",
    "alg-na-practical-dpg-finite-riesz-solves",
    "lem-na-ultraweak-poisson-skeleton-quotients",
    "lem-na-hdiv-is-hilbert-and-h0div-closed",
    "lem-w-one-two-is-a-hilbert-space",
    "lem-l-two-with-the-integral-pairing-is-a-hilbert-space"
  ]
justified_by: []
aliases: []
proof_strategy: direct
provenance: { "statement": "literature-derived", "proof": "ai-altered" }
sources:
  {
    "references":
      [
        {
            "title": "Jay Gopalakrishnan and Weifeng Qiu, An analysis of the practical DPG
              method",
            "url": "https://wiki.math.ntnu.no/_media/tma4183/2017v/1107.4293.pdf",
            "locator": "Complete 15-page article; §2 Theorem 2.1/proof, §§3.1–3.4 and Lemmas
              3.1–3.3."
          },
        {
            "title": "Leszek Demkowicz and Jay Gopalakrishnan, Analysis of the DPG method
              for the Poisson equation",
            "url": "https://web.pdx.edu/~gjay/pub/DPGlaplace.pdf",
            "locator": "Complete 22-page article; §§3–4 and Theorem 4.2; simple connectivity
              hypothesis noted."
          },
        {
            "title": "Leszek Demkowicz, Mathematical Theory of Finite Elements",
            "url": "https://users.ices.utexas.edu/~leszek/classes/EM394H/book.pdf",
            "locator": "Complete 229-page monograph; §§5.1–5.2 and §§5.6.2, 5.6.4."
          },
        {
            "title": "Carstensen, Demkowicz, and Gopalakrishnan, A Posteriori Error Control
              for DPG Methods",
            "url": "https://web.pdx.edu/~gjay/pub/cdg.pdf",
            "locator": "Complete 21-page article; complete §2/Theorem 2.1 proof and §3.1."
          }
      ]
  }
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice and the real form and spaces of [[def-na-ultraweak-poisson-dpg-formulation]] on a finite conforming triangular mesh. For every admissible local input to [[alg-na-practical-dpg-finite-riesz-solves]], the exact factorization terminates after $O(N_K^3)$ scalar arithmetic operations once its Gram entries and right-hand side are formed; it returns `singular-test-matrix` exactly for a dependent input family, and on an independent family it returns the unique finite Riesz representative. Let $U_h\subset U$ consist of volume fields $\sigma_h|_K\in P_1(K)^2$, $u_h|_K\in P_1(K)$, continuous scalar traces $\widehat u_h|_{\partial K}\in\widetilde P_2(\partial K)$, and conservative normal traces $\widehat\sigma_{n,h}|_{\partial K}\in P_1(\partial K)$. This is finite-dimensional. Let $V_r=\prod_K(P_3(K)^2\times P_3(K))$, presented cellwise by fixed ordered bases, and let $T_r:U_h\to V_r$ be the assembled finite Riesz map. On each fixed basis the unique local Riesz representatives assemble to a bounded linear map satisfying $\|T_rw_h\|_V\le\|b\|\|w_h\|_U$. Now assume the continuous primal and adjoint graph inf-sup constants have minimum $\beta>0$. Let $\Pi:V\to V_r$ be the bounded Fortin map of [[lem-na-practical-dpg-fortin-p1-r3]], with $b(U_h,(I-\Pi)V)=0$ and $\|\Pi\|\le C_\Pi$. Then for every bounded load $F\in V'$, the practical DPG system tested with $T_r(U_h)$ has a unique solution $x_h$, and
$$\|x-x_h\|_U\le(1+\|b\|C_\Pi/\beta)\inf_{z_h\in U_h}\|x-z_h\|_U,$$
where $x$ is the exact continuous solution.

## Facts & Assumptions

**Given:** Countable Choice, the real DPG form and spaces on a finite triangular mesh, admissible local finite-Riesz inputs, the stated P1/R3 trial and test spaces, the two continuous inf-sup hypotheses, and the specified Fortin map.

[A1] Countable Choice is used by the mixed BNB solve. ([[def-countable-choice]])

[F1] The DPG spaces and bilinear form are those of the ultraweak definition. ([[def-na-ultraweak-poisson-dpg-formulation]])

[F2] The continuous form is bounded. ([[lem-na-ultraweak-poisson-bilinear-form-bounded]])

[F3] The practical Fortin map is bounded and preserves the form on $U_h$. ([[lem-na-practical-dpg-fortin-p1-r3]])

[F4] The BNB theorem gives a unique mixed solution when the constraint inf-sup holds and the first form is coercive on its kernel. ([[thm-na-babuska-brezzi-kernel-coercivity]])

[F5] Riesz represents the bounded form and datum on the real Hilbert trial and test spaces; the adjoint operator is the Hilbert adjoint. ([[thm-riesz-representation-for-hilbert-space]])

[F6] The practical test map $T_r$ is the finite Riesz representative in the broken polynomial test space. ([[alg-na-practical-dpg-finite-riesz-solves]])

[F7] The trial and test Hilbert factors are complete: real L2 and H1 are Hilbert, H(div) is Hilbert, and the trace quotient factors are Hilbert. Finite products preserve completeness. ([[lem-l-two-with-the-integral-pairing-is-a-hilbert-space]], [[lem-w-one-two-is-a-hilbert-space]], [[lem-na-hdiv-is-hilbert-and-h0div-closed]], [[lem-na-ultraweak-poisson-skeleton-quotients]])

## Proof

1.1 On an arbitrary local input family, its Gram matrix is positive semidefinite. As long as the preceding vectors are independent, the next unpivoted $LDL^{\mathsf T}$ pivot is the squared norm of that vector's residual after orthogonal projection onto their span; this follows by solving the preceding Gram equations. Hence every pivot is positive exactly while the vectors remain independent, and the first dependent vector gives a zero pivot, so the algorithm returns `singular-test-matrix` exactly for a dependent family. If the family is independent, the finite loop and triangular solves terminate, the resulting coefficients solve $Gc=g$, and the returned vector is therefore the unique finite Riesz representative. The factorization and solves use $O(N_K^3)$ exact scalar operations after entry formation. For each cell this representative satisfies $(T_{r,K}w_h,v_K)_{V(K)}=b_K(w_h,v_K)$; summing over cells gives $(T_rw_h,v_r)_V=b(w_h,v_r)$ for every $v_r\in V_r$. For the fixed bases of $V_r$, local uniqueness and linearity of $b$ show that the assembled $T_r$ is linear. Its Riesz identity and [F2] give $\|T_rw_h\|_V\le\|b\|\|w_h\|_U$. [F2, F5, F6, given, algebra]


1.2 By [F7], $U,V$ are real Hilbert spaces; boundedness [F2] and Riesz [F5] define $A:U\to V$ by $(Aw,v)_V=b(w,v)$. The primal inf-sup gives $\|Aw\|_V\ge\beta\|w\|_U$, so $A$ is injective and its range is closed: if $Aw_n$ converges, the lower bound makes $w_n$ Cauchy, and its limit maps to the range limit. The adjoint inf-sup gives $\|A^*v\|_U\ge\beta\|v\|_V$, so $\ker A^*=\{0\}$. By the defining adjoint identity, $v\perp\operatorname{ran}(A)$ iff $(Aw,v)_V=0$ for every $w$, iff $(w,A^*v)_U=0$ for every $w$, iff $A^*v=0$. Hence $\operatorname{ran}(A)^\perp=\ker A^*$, the closed range is dense, and therefore all of $V$. Riesz represents $F\in V'$, so it has a unique preimage $x\in U$. [F1, F2, F5, F7, given, algebra]


1.3 For $w_h\in U_h$, the continuous primal bound gives $\beta\|w_h\|_U\le\sup_{v\in V}b(w_h,v)/\|v\|_V$. Fortin orthogonality in [F3] gives $b(w_h,v)=b(w_h,\Pi v)$ and $\|\Pi v\|_V\le C_\Pi\|v\|_V$, so the restricted inf-sup on $V_r$ is at least $\gamma=\beta/C_\Pi$. [F3, given, algebra]


2.1 On $V_r\times U_h$, put $a(r,v)=(r,v)_V$ and $c(v,w_h)=b(w_h,v)$. The first form is coercive on all of $V_r$, and [F4]’s constraint inf-sup is $\gamma$ by step 1.3. Applying [F4] with datum $F|_{V_r}$ and zero constraint gives a unique pair $(r_h,x_h)$ with $(r_h,v)+b(x_h,v)=F(v)$ and $b(w_h,r_h)=0$. The first equation makes $r_h$ the Riesz representative of the restricted residual; the second is orthogonality to $T_r(U_h)$, exactly the practical DPG equations by [F6]. [A1, F2, F4, F6, step 1.3]


3.1 Give $V_r'$ the inner product transported from $V_r$ by its Riesz map. The second mixed equation makes $F-B_rx_h$ orthogonal to every $B_rw_h$ in this inner product. For any $z_h$, $F-B_rz_h=(F-B_rx_h)+B_r(x_h-z_h)$, so Pythagoras gives $\|B_r(x_h-z_h)\|_{V_r'}\le\|F-B_rz_h\|_{V_r'}=\|B_r(x-z_h)\|_{V_r'}\le\|b\|\|x-z_h\|_U$. Apply the discrete inf-sup $\gamma$ to $x_h-z_h$, then the triangle inequality and infimize over $z_h$ to obtain the displayed estimate. [F2, F5, step 1.2, step 1.3, step 2.1, algebra] ∎

