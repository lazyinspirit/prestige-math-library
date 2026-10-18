---
id: "thm-na-ideal-ultraweak-poisson-energy-best-approximation"
kind: "theorem"
title: "Ideal ultraweak Poisson DPG is the energy best approximation"
status: "published"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 9
deps:
  [
    "def-na-ultraweak-poisson-dpg-formulation",
    "lem-na-ultraweak-poisson-skeleton-quotients",
    "lem-na-ultraweak-poisson-bilinear-form-bounded",
    "lem-na-ultraweak-poisson-trial-kernel",
    "alg-na-ultraweak-poisson-ideal-trial-to-test",
    "thm-riesz-representation-for-hilbert-space",
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

Assume Countable Choice and the real trial/test spaces and bilinear form of [[def-na-ultraweak-poisson-dpg-formulation]], with $|b(w,v)|\le5\|w\|_U\|v\|_V$ as in [[lem-na-ultraweak-poisson-bilinear-form-bounded]]. The ideal trial-to-test map $T$ of [[alg-na-ultraweak-poisson-ideal-trial-to-test]] is well defined, bounded linear, and satisfies $\|T\|\le5$. Let $x\in U$ be any exact ultraweak solution and let $U_h\subset U$ be finite dimensional. The ideal DPG equations with test space $T(U_h)$ have a unique solution $x_h$, which is the orthogonal projection of $x$ in the induced energy inner product $(w,z)_E=(Tw,Tz)_V$. Consequently $\|x-x_h\|_E=\inf_{z_h\in U_h}\|x-z_h\|_E=\|B(x-x_h)\|_{V'}$.

## Facts & Assumptions

**Given:** Countable Choice, the real Hilbert trial/test spaces and bounded bilinear form, an exact solution $x$, and a finite-dimensional $U_h$.

[A1] Countable Choice is declared for Hilbert Riesz maps. ([[def-countable-choice]])

[F1] The trial operator has trivial kernel. ([[lem-na-ultraweak-poisson-trial-kernel]])

[F2] The ideal procedure defines $Tw$ as the Riesz representative of $b(w,\cdot)$. ([[alg-na-ultraweak-poisson-ideal-trial-to-test]])

[F3] Riesz represents bounded real functionals uniquely and identifies each dual norm with the norm of its representative. ([[thm-riesz-representation-for-hilbert-space]])

[F4] The DPG bilinear form is bounded by $|b(w,v)|\le5\|w\|_U\|v\|_V$. ([[lem-na-ultraweak-poisson-bilinear-form-bounded]])

## Proof

1.1 For every $w\in U$, [F4] makes $v\mapsto b(w,v)$ a bounded functional on $V$, and [F3] gives the unique $Tw$ in [F2], with $\|Tw\|_V\le5\|w\|_U$. Bilinearity of $b$ and uniqueness of the Riesz representative imply $T(\alpha w_1+\beta w_2)=\alpha Tw_1+\beta Tw_2$ for real scalars $\alpha,\beta$, so $T$ is bounded linear. By [F1], $Tw=0$ implies $w=0$; hence $(w,z)_E=(Tw,Tz)_V$ is a positive-definite inner product. For every $w_h\in U_h$, the ideal equation is $(Tx_h,Tw_h)_V=F(Tw_h)=(Tx,Tw_h)_V$, by [F2] and exactness. [A1, F1, F2, F3, F4, given, algebra]

2.1 Choose an orthonormal basis $e_1,\ldots,e_N$ of the finite-dimensional image $T(U_h)$ and define $P(Tx)=\sum_j(Tx,e_j)_Ve_j$. The equations in step 1.1 identify $Tx_h=P(Tx)$; Pythagoras proves it uniquely minimizes distance to that image. Injectivity of $T$ gives the unique $x_h$ and the best-approximation identity. [F1, step 1.1, algebra]

3.1 The functional $B(x-x_h)=b(x-x_h,\cdot)$ has Riesz representative $T(x-x_h)$ by [F2]. Therefore [F3] gives $\|B(x-x_h)\|_{V'}=\|T(x-x_h)\|_V=\|x-x_h\|_E$. [F2, F3, step 2.1, algebra] ∎
