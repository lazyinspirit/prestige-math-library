---
id: lem-it-private-information-is-coherent-information-difference
kind: lemma
title: Private information is an average coherent-information difference
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 4
deps:
  - def-it-quantum-channel-private-information
  - def-it-quantum-channel-complement-and-coherent-information
  - def-it-classical-quantum-state-and-holevo-information
  - lem-it-quantum-coherent-information-complement-identity
justified_by: []
proof_strategy: direct
axiom_use: "No choice axiom is used; the ensemble and all entropy sums are finite."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Igor Devetak, The private classical capacity and quantum capacity of a quantum channel, §3"
      url: "https://arxiv.org/pdf/quant-ph/0304127"
    - title: "Mark M. Wilde, From Classical to Quantum Shannon Theory, second-edition prepublication v8, Chapter 23"
      url: "https://arxiv.org/pdf/1106.1445v8"
---

## Statement

Let $\mathcal N:A\to B$ be a finite-dimensional channel with chosen complement $\mathcal N^c:A\to E$, and let $\mathcal E=\{p_x,\rho_x\}_{x\in\mathcal X}$ be a finite ensemble on $A$ with $\bar\rho=\sum_xp_x\rho_x$. Then

$$I_p(\mathcal E,\mathcal N)=I_c(\bar\rho,\mathcal N)-\sum_{x:p_x>0}p_x I_c(\rho_x,\mathcal N).$$

## Facts & Assumptions

**Given:** The channel, chosen complementary channel, and finite ensemble in the Statement.

[F1] [[def-it-quantum-channel-private-information]]: $I_p(\mathcal E,\mathcal N)=\chi(\{p_x,\mathcal N(\rho_x)\})-\chi(\{p_x,\mathcal N^c(\rho_x)\})$.

[F2] [[def-it-classical-quantum-state-and-holevo-information]]: $\chi(\{p_x,\sigma_x\})=S(\sum_xp_x\sigma_x)-\sum_{x:p_x>0}p_xS(\sigma_x)$.

[F3] [[lem-it-quantum-coherent-information-complement-identity]]: $I_c(\rho,\mathcal N)=S(\mathcal N(\rho))-S(\mathcal N^c(\rho))$ for every finite input state and the chosen dilation.

## Proof

1.1 Apply [F3] to $\bar\rho$ and to every $\rho_x$ with $p_x>0$. Write $B_x=\mathcal N(\rho_x)$, $E_x=\mathcal N^c(\rho_x)$, $\bar B=\sum_xp_xB_x$, and $\bar E=\sum_xp_xE_x$. The difference of coherent informations becomes $S(\bar B)-S(\bar E)-\sum_xp_x(S(B_x)-S(E_x))$. [F1, F3, given, algebra]

2.1 Regrouping the finite sums in step 1.1 gives $[S(\bar B)-\sum_xp_xS(B_x)]-[S(\bar E)-\sum_xp_xS(E_x)]$. Each bracket is the corresponding Holevo information by [F2], so their difference is $I_p(\mathcal E,\mathcal N)$ by [F1]. Terms with $p_x=0$ are absent in both sums. [F1, F2, step 1.1, algebra] ∎

## Remarks

For a pure-state ensemble every branch has zero coherent information, because a Stinespring isometry maps each pure input to a pure output-environment vector. Thus its private information equals the coherent information of its average input.
