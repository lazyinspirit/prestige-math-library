---
id: "lem-na-ultraweak-poisson-rotation-trace-2d"
kind: "lemma"
title: "Planar rotation carries H(div) normal traces to tangential traces"
status: "published"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 2
deps:
  [
    "def-na-hdiv-space",
    "lem-na-hdiv-weak-normal-trace",
    "def-countable-choice"
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
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Statement

Assume Countable Choice. For a nondegenerate oriented triangle $K\subset\mathbb R^2$, set $R(a,b)=(-b,a)$, let $n$ be cell-outward and $t=Rn$. If $\sigma\in H(\operatorname{div};K)$ is real, then $R\sigma\in H(\operatorname{curl};K)$, $\operatorname{curl}(R\sigma)=\operatorname{div}\sigma$ distributionally, and $\int_K(R\sigma\cdot R\nabla\phi+\operatorname{curl}(R\sigma)\phi)=\langle\gamma_n\sigma,[\phi]\rangle$ for all $\phi\in H^1(K)$. Thus weak tangential trace equals weak normal trace under $t=Rn$.

Here $H(\operatorname{curl};K):=\{w\in L^2(K;\mathbb R^2):\partial_1w_2-\partial_2w_1\in L^2(K)\}$ with its graph norm. The weak tangential trace is the functional on $H^1(K)/H^1_0(K)$ defined by the integral in the Statement; the computation below proves it is the rotation of the PE08 weak normal trace.

## Facts & Assumptions

**Given:** Countable Choice and real $\sigma\in H(\operatorname{div};K)$.

[A1] Countable Choice is declared for trace interfaces. ([[def-countable-choice]])

[F1] H(div) consists of real L2 vectors with L2 distributional divergence. ([[def-na-hdiv-space]])

[F2] The weak normal trace acts by $\int_K(\sigma\cdot\nabla\phi+\operatorname{div}\sigma\,\phi)$. ([[lem-na-hdiv-weak-normal-trace]])

## Proof

1.1 Writing $R\sigma=(-\sigma_2,\sigma_1)$ gives $\operatorname{curl}(R\sigma)=\partial_1\sigma_1+\partial_2\sigma_2=\operatorname{div}\sigma$ as distributions; [F1] places it in $L^{2}$. [given, F1, algebra]

2.1 Orthogonality gives $R\sigma\cdot R\nabla\phi=\sigma\cdot\nabla\phi$, so step 1.1 makes the trace integral exactly [F2]. Also $R\sigma\cdot t=R\sigma\cdot Rn=\sigma\cdot n$. [A1, F2, step 1.1, algebra] ∎
