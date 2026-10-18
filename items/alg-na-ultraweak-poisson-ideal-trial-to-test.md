---
id: "alg-na-ultraweak-poisson-ideal-trial-to-test"
kind: "algorithm"
title: "Ideal Poisson DPG trial-to-test Riesz map"
status: "published"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 8
deps:
  [
    "def-na-ultraweak-poisson-dpg-formulation",
    "lem-na-ultraweak-poisson-skeleton-quotients",
    "lem-na-ultraweak-poisson-bilinear-form-bounded",
    "thm-riesz-representation-for-hilbert-space",
    "def-countable-choice"
  ]
justified_by: [ "thm-na-ideal-ultraweak-poisson-energy-best-approximation" ]
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

**Input:** A real trial vector $w\in U$.

**Output:** The ideal test vector $Tw\in V$.

**Admissible conditions:** $U$ and $V$ are the real Hilbert spaces in [[def-na-ultraweak-poisson-dpg-formulation]], and $b$ is the bounded real bilinear form on them, with boundedness supplied by [[lem-na-ultraweak-poisson-bilinear-form-bounded]]. The definition uses exact Hilbert-space operations and makes no claim of practical computability.

**Instructions:** Form the bounded linear functional $\ell_w(v)=b(w,v)$ on $V$. Apply the Hilbert-space Riesz representation procedure to obtain the unique $Tw\in V$ satisfying
$$
(Tw,v)_V=\ell_w(v)=b(w,v)\qquad(v\in V),
$$
and return $Tw$. For a finite-dimensional trial subspace $U_h$, the ideal test space is $T(U_h)$.
