---
id: "lem-na-ultraweak-poisson-bilinear-form-bounded"
kind: "lemma"
title: "The ultraweak Poisson DPG bilinear form is bounded"
status: "published"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 7
deps:
  [
    "def-na-ultraweak-poisson-dpg-formulation",
    "lem-na-ultraweak-poisson-skeleton-quotients",
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

Assume Countable Choice. On the real trial and broken graph-test spaces of [[def-na-ultraweak-poisson-dpg-formulation]], $b$ is bounded by $|b(x,y)|\le5\|x\|_U\|y\|_V$, uniformly in mesh size.

## Facts & Assumptions

**Given:** Product graph and skeleton quotient norms.

[A1] Countable Choice is declared for trace duality. ([[def-countable-choice]])

[F1] The five form terms and signs are fixed by the DPG definition. ([[def-na-ultraweak-poisson-dpg-formulation]])

[F2] Skeleton norms are global lift infima. ([[lem-na-ultraweak-poisson-skeleton-quotients]])

[F3] Weak normal trace is bounded in H(div). ([[lem-na-hdiv-weak-normal-trace]])

## Proof

1.1 Cauchy–Schwarz bounds the three volume pairings in [F1] by the trial/test product norms. [F1, algebra]

2.1 Lift $\widehat u$ to global H1_0 and use [F3] on $\tau\cdot n$. Lift $\widehat\sigma_n$ to global H(div) and use cell Green identities on broken $v_K$. Cauchy–Schwarz across cells and infimizing by [F2] bound each skeleton term by the same product. [A1, F2, F3, step 1.1, algebra]

3.1 Each of five terms is bounded by the product norm by steps 1.1 and 2.1, so the triangle inequality gives constant $5$, independent of the mesh. [F1, step 1.1, step 2.1, algebra] ∎
