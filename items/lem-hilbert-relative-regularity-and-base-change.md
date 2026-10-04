---
id: lem-hilbert-relative-regularity-and-base-change
kind: lemma
title: "Relative regularity, generation, and arbitrary base change"
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
  - lem-hilbert-regularity-propagation
  - lem-proper-flat-fp-cohomology-perfect-complex
  - thm-nakayama-lemma
  - cor-euler-characteristic-locally-constant-flat-proper-family
  - def-dependent-choice
  - def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Nitin Nitsure, Construction of Hilbert and Quot Schemes, Sections 2–5"
      url: "https://arxiv.org/pdf/math/0504590"
    - title: "Alexander Grothendieck, Les schémas de Hilbert, Bourbaki 221, Sections 2–3"
      url: "https://www.numdam.org/item/SB_1960-1961__6__249_0.pdf"
---

## Statement

Assume AC and DC, inherited from the universal cohomology complex. Let $T$ be any scheme, $\pi:\mathbb P^n_T\to T$, and $F$ a finitely presented quasi-coherent sheaf flat over $T$. If all geometric fibres are $m$-regular, then for every $r\ge m$, $R^i\pi_*F(r)=0$ for $i>0$, $\pi_*F(r)$ is finite locally free, its formation commutes with every base change $T'\to T$, and the evaluation $\pi^*\pi_*F(r)\to F(r)$ is surjective. Its rank is the fibre Hilbert polynomial evaluated at $r$. In an exact sequence $0\to K\to E\to F\to0$ with $E,F$ base-flat and finitely presented and fibrewise $m$-regular $K,E,F$, the direct-image sequence in each such degree is exact, locally free, and compatible with every base change.

## Facts & Assumptions

**Given:** The hypotheses in the statement and AC and DC, inherited from the scheme, cohomology, and finite-module suppliers ([[def-axiom-of-choice]], [[def-dependent-choice]]).

[F1] Fibre generation and vanishing follow from [[lem-hilbert-regularity-propagation]]. On each affine base the flat finitely presented sheaf has a bounded finite projective complex in nonnegative degrees computing cohomology after every coefficient-algebra change ([[lem-proper-flat-fp-cohomology-perfect-complex]]). This supplier assumes AC and DC ([[def-dependent-choice]]).

[F2] Nakayama's lemma is [[thm-nakayama-lemma]]. In a flat proper finitely presented family Euler characteristic is locally constant ([[cor-euler-characteristic-locally-constant-flat-proper-family]]).

## Proof

1.1 Work on an affine open of $T$ and make the complex in [F1] finite free locally. At any point its residue-field complex has zero positive cohomology by regularity. At the highest nonzero positive degree, exactness modulo the maximal ideal makes the incoming differential surjective; an invertible maximal minor splits off that final term together with an equal direct summand of the preceding term as a contractible pair. Repeat downwards. The remaining complex is a finite free module in degree zero. Every splitting survives arbitrary tensoring, so this description computes $H^0$ after every algebra change and gives zero higher cohomology. The descriptions agree through the canonical cohomology comparison and glue. [F1, algebra]

2.1 The cokernel $C$ of evaluation is of finite type. Formation of $H^0$ commutes with residue-field extension by step 1.1, and each fibre evaluation is onto by [F1]. At a stalk above $t$, therefore $C_x/\mathfrak m_t C_x=0$. Since $\mathfrak m_t\mathcal O_x$ lies in the maximal ideal of the local ring $\mathcal O_x$, Nakayama gives $C_x=0$. Evaluation is onto. The rank equals $h^0(F_t(r))=\chi(F_t(r))$ since all higher cohomology vanishes. [F1, F2, step 1.1, algebra]

3.1 The kernel $K$ is base-flat: tensor the exact sequence by any base module; the Tor sequence and flatness of $E,F$ show injectivity at the left and preservation of exactness, which is precisely flatness of $K$. Apply steps 1.1–2.1 to each sheaf and take the long exact direct-image sequence; $R^1\pi_*K(r)=0$ gives the stated short exact sequence. The locally free quotient makes it split locally, hence every base change preserves it. The canonical cohomology comparisons identify the pulled-back sequence with that of the pulled-back sheaves. [step 1.1, step 2.1, algebra] ∎
