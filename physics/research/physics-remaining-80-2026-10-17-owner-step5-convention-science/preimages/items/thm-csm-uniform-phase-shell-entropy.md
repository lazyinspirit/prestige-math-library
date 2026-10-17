---

id: thm-csm-uniform-phase-shell-entropy
kind: theorem
title: Full uniform phase shell has vanishing specific canonical KL
status: draft
origin: pipeline
domain: mathematics
library: physics
dependency_level: 4
deps:
  - def-axiom-of-choice
  - def-csm-full-marked-model
  - def-tdmath-finite-region-relative-entropy
  - lem-csm-kl-chain-disjoint
  - thm-csm-total-canonical-window
dependency_roles:
  def-axiom-of-choice: mathematical-premise
  def-csm-full-marked-model: mathematical-premise
  def-tdmath-finite-region-relative-entropy: mathematical-premise
  lem-csm-kl-chain-disjoint: mathematical-premise
  thm-csm-total-canonical-window: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "H.-O. Georgii and H. Zessin, Large deviations and the maximum entropy principle for marked point random fields"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/GiiZess.pdf"
      locator: "Sections 2.3–3, printed pp.184–190 / PDF viewer pp.8–14: finite-region entropy and conditional laws."
    - title: "H.-O. Georgii, Large deviations and the equivalence of ensembles for Gibbsian particle systems with superstable interaction"
      url: "https://www.mathematik.uni-muenchen.de/~georgii/papers/LDPsuperstable.pdf"
      locator: "Sections 3–5, printed pp.178–187 / PDF pp.8–17: canonical entropy-energy bounds and energy windows."
---

## Statement

Assume AC and the hypotheses and notation of [[thm-csm-total-canonical-window]]. Let $R_n=R_{L_n,N_n}$ be the finite phase reference of [[def-csm-full-marked-model]], let $A_n$ be the constructed band, and set $M_n^{\rm ph}(E)=R_n(E\cap A_n)/R_n(A_n)$. Let $C_n^{\rm ph}$ be the full fixed-$N_n$ canonical probability. Then $D_n=D(M_n^{\rm ph}\Vert C_n^{\rm ph})$ satisfies $D_n/V_n\to0$. This is a mathematical statement about a normalized measure restriction; it does not assert $D_n\to0$ or global total-variation convergence.

## Facts & Assumptions

**Given:** AC, the finite-reference phase measure, the canonical law, stability, and the window hypotheses.

[A1] AC is used by the conditional entropy chain rule ([[def-axiom-of-choice]]).

[F1] [[thm-csm-total-canonical-window]]: $C_n^{\rm ph}(A_n)\to1$, $\delta_n\to0$, and $A_n$ is a finite positive-reference-measure energy band $|\mathcal H/V_n-e_b|\le\delta_n$ at fixed $N_n$.

[F2] [[def-csm-full-marked-model]]: relative to phase reference $R_n$, $C_n^{\rm ph}$ has density $e^{-b\mathcal H}/Z_n$; by the definition in the Statement, $M_n^{\rm ph}=R_n(\cdot\cap A_n)/R_n(A_n)$.

[F3] [[def-tdmath-finite-region-relative-entropy]] and [[lem-csm-kl-chain-disjoint]]: relative entropy is nonnegative and the exact directional convention is $D(P\Vert Q)$.

## Proof

**Given:** The hypotheses and supplier definitions above.

1.1 On A_n, the density of M_n^ph relative to C_n^ph is Z_n e^{bH}/R_n(A_n). Therefore
$$D_n=-\log R_n(A_n)+\log Z_n+bE_{M_n^{ph}}\mathcal H.$$
The lower band edge gives
$$R_n(A_n)=Z_nE_{C_n^{ph}}[1_{A_n}e^{b\mathcal H}]\ge Z_nC_n^{ph}(A_n)e^{bV_n(e_b-\delta_n)}.$$
[F1, F2, algebra]

2.1 The upper band edge gives $E_{M_n^{\rm ph}}\mathcal H\leq V_n(e_b+\delta_n)$. Substituting the step 1.1 lower bound for $R_n(A_n)$ yields
$$D_n\le-\log C_n^{ph}(A_n)+2bV_n\delta_n.$$
Relative entropy is nonnegative by [F3]; since $C_n^{\rm ph}(A_n)\to1$ and $\delta_n\to0$ by [F1], this proves $0\leq D_n/V_n\to0$. [A1, F1, F3, step 1.1, algebra] ∎
