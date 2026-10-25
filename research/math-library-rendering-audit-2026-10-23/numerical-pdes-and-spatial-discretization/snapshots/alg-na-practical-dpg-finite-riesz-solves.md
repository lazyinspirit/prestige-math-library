---
id: "alg-na-practical-dpg-finite-riesz-solves"
kind: "algorithm"
title: "Exact local finite Riesz solves for practical DPG tests"
status: "published"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 5
deps:
  [
    "def-na-ultraweak-poisson-dpg-formulation",
    "thm-riesz-representation-in-finite-dimensions"
  ]
justified_by: [ "thm-na-practical-dpg-fortin-quasioptimality" ]
aliases: []
proof_strategy: direct
provenance: { "statement": "literature-derived", "proof": "not-applicable" }
sources:
  {
    "references":
      [
        {
            "title": "Jay Gopalakrishnan and Weifeng Qiu, An analysis of the practical DPG
              method",
            "url": "https://wiki.math.ntnu.no/_media/tma4183/2017v/1107.4293.pdf",
            "locator": "Complete 15-page paper; §2 Theorem 2.1 and proof; §§3.1–3.4,
              including Lemmas 3.1–3.3 on ultraweak Poisson and Fortin maps."
          },
        {
            "title": "Leszek Demkowicz and Jay Gopalakrishnan, Analysis of the DPG method
              for the Poisson equation",
            "url": "https://web.pdx.edu/~gjay/pub/DPGlaplace.pdf",
            "locator": "Complete 22-page paper; §§3.1–3.2, Lemmas 4.1–4.4, Theorem 4.2. The
              graph inf-sup proof assumes simply connected Lipschitz domain."
          },
        {
            "title": "Leszek Demkowicz, Mathematical Theory of Finite Elements",
            "url": "https://users.ices.utexas.edu/~leszek/classes/EM394H/book.pdf",
            "locator": "Complete 229-page course monograph; §§5.1–5.2 ideal/practical DPG;
              §§5.6.2 and 5.6.4 Fortin and mixed stability."
          },
        {
            "title": "C. Carstensen, L. Demkowicz, and J. Gopalakrishnan, A Posteriori Error
              Control for DPG Methods",
            "url": "https://web.pdx.edu/~gjay/pub/cdg.pdf",
            "locator": "Complete 21-page paper; full §2 and Theorem 2.1 proof, §3.1. The
              Poisson stability application cites the same simply-connected
              source."
          }
      ]
  }
verification:
  precheck: n/a
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Definition

**Inputs:** A finite-dimensional real graph-test space presented as $V_r(K)=\operatorname{span}\{v_1,\ldots,v_N\}$, an ordered finite generating family (not assumed independent), a trial datum $w$, the graph inner product $(\cdot,\cdot)_V$, and the linear functional $\ell_w(v)=b_K(w,v)$ on $V_r(K)$.

**Output:** Either a vector in $V_r(K)$ or the status `singular-test-matrix`.

**Admissible conditions:** $N\ge0$; all entries are real and exact; $\ell_w$ is defined and linear on $V_r(K)$. The Gram entries and functional values are evaluated exactly. No quadrature or rounded solve is part of this procedure.

**Instructions:**

1. Form $G_{ij}=(v_j,v_i)_V$ and $g_i=\ell_w(v_i)$ exactly.
2. Initialize $L=I_N$ and compute an unpivoted symmetric $LDL^{\mathsf T}$ factorization in the listed order. At pivot $k$, set
   $$d_k=G_{kk}-\sum_{j<k}L_{kj}^2d_j.$$
   If $d_k\le0$, return `singular-test-matrix`. Otherwise set $D_{kk}=d_k$ and
   $$L_{ik}=\frac{G_{ik}-\sum_{j<k}L_{ij}L_{kj}d_j}{d_k}\qquad(i>k).$$
3. Solve $Lz=g$, $Dy=z$, and $L^{\mathsf T}c=y$ exactly, and return $\sum_{j=1}^N c_jv_j$. For $N=0$, return the zero vector of $V_r(K)$.
