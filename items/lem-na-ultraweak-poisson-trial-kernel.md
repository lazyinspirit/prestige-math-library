---
id: "lem-na-ultraweak-poisson-trial-kernel"
kind: "lemma"
title: "The ultraweak Poisson trial operator has trivial kernel"
status: "draft"
origin: "session"
pipeline_run: "numerical-analysis-remaining-71-2026-10-17"
dependency_level: 7
deps:
  [
    "def-na-ultraweak-poisson-dpg-formulation",
    "lem-na-ultraweak-poisson-skeleton-quotients",
    "lem-na-hdiv-weak-normal-trace",
    "lem-na-homogeneous-dirichlet-poincare",
    "def-countable-choice",
    "lem-na-hdiv-normal-trace-surjectivity",
    "def-na-hdiv-space",
    "def-sobolev-space-wkp-and-its-norm",
    "def-wkp-zero-as-a-sobolev-closure"
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
---

## Statement

Assume Countable Choice. In the spaces of [[def-na-ultraweak-poisson-dpg-formulation]], if $b(x,y)=0$ for every broken test on a bounded connected Lipschitz domain, then $x=(\sigma,u,\widehat u,\widehat\sigma_n)=0$.

## Facts & Assumptions

**Given:** The DPG spaces, Countable Choice, and the zero pairing hypothesis.

[A1] Countable Choice is declared for Sobolev traces. ([[def-countable-choice]])

[F1] The form separates broken tests and fixes global trace ranges. ([[def-na-ultraweak-poisson-dpg-formulation]])

[F2] Compatible traces are traces of global H1_0 and H(div) fields. ([[lem-na-ultraweak-poisson-skeleton-quotients]])

[F3] Cell normal traces satisfy Green’s identity. ([[lem-na-hdiv-weak-normal-trace]])

[F4] The weak normal trace surjects onto the dual of the scalar trace quotient, so these functionals separate scalar trace classes. ([[lem-na-hdiv-normal-trace-surjectivity]])

[F5] Sobolev first derivatives and divergence are defined distributionally, and H1_0 is the H1 closure of compactly supported smooth functions. ([[def-na-hdiv-space]], [[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]])

[F6] Homogeneous Dirichlet Poincare holds. ([[lem-na-homogeneous-dirichlet-poincare]])

## Proof

1.1 Compactly supported vector tests on each cell give $\sigma+\nabla u=0$ distributionally; compactly supported scalar tests give $div\sigma=0$. Thus $u|_K\in H^1(K)$, $\sigma|_K\in H(div;K)$, and both identities hold cellwise. [F1, F5, given, algebra]

2.1 With $\sigma=-\nabla u$, the first local equation and [F3] give $\langle\widehat u-u|_{\partial K},\gamma_n\tau\rangle=0$ for every $\tau\in H(div;K)$. Surjectivity [F4] makes the scalar trace classes equal. The second local equation gives $\langle\widehat\sigma_n-\gamma_n\sigma,v\rangle=0$ for every $v\in H^1(K)$, so those normal-trace functionals are equal as well. [F1, F3, F4, step 1.1, algebra]

3.1 Take a global H1_0 lift $u_0$ of $\widehat u$. On each cell, $u-u_0$ has zero scalar trace, hence belongs to $H^1_0(K)$; zero-extending compactly supported approximants and summing over the finite mesh shows $u-u_0\in H^1_0(\Omega)$, so $u\in H^1_0(\Omega)$. Take a global H(div) lift $\sigma_0$ of $\widehat\sigma_n$. The cell field $\sigma-\sigma_0$ has zero weak normal trace on every cell. Summing its local Green identities against restrictions of $C_c^\infty(\Omega)$ shows its piecewise $L^{2}$ divergence is its global distributional divergence; thus it glues to H(div), and $\sigma\in H(div;\Omega)$. Now $\sigma=-\nabla u$ and $div\sigma=0$; the weak Green identity tested with $u\in H^1_0$ gives $\|\nabla u\|_2^2=0$. By [F6], $u=0$, then $\sigma$ and both trace components vanish. [A1, F2, F3, F5, F6, step 1.1, step 2.1, algebra] ∎
