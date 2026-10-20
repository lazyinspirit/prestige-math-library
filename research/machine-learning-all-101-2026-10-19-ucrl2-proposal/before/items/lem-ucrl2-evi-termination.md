---
id: lem-ucrl2-evi-termination
kind: lemma
title: "Termination of extended value iteration under communicating assumptions"
status: draft
origin: pipeline
pipeline_run: machine-learning-all-101-2026-10-19
dependency_level: 3
deps: [alg-extended-value-iteration, def-communicating-mdp-and-diameter]
justified_by: []
aliases: []
forward_refs: []
provenance:
  statement: literature-derived
  proof: not-supplied
sources:
  references:
    - {title: "Thomas Jaksch, Ronald Ortner, and Peter Auer, Near-optimal Regret Bounds for Reinforcement Learning", url: "https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf", locator: "Appendix B, proof of convergence of Extended Value Iteration, PDF pp. 22–23."}
    - {title: "Martin L. Puterman and Timothy C. Y. Chan, Markov Decision Processes and Reinforcement Learning, Chapter 7: Average Reward Models", url: "https://raw.githubusercontent.com/martyput/MDP_book/master/07%20Chapter/Book___chapter07.pdf", locator: "Chapter 7, Proposition 7.3 and Theorem 7.10; the formal proof of Proposition 7.3 is omitted."}
proof_strategy: direct
---

## Statement

For each UCRL2 episode $k$ of a finite communicating MDP, run the extended value iteration procedure with tolerance $\varepsilon_k=1/\sqrt{t_k}$, where $t_k\ge1$ is the episode's starting time and the confidence set/radii are those specified by UCRL2. The procedure reaches an iteration $i$ for which $\operatorname{span}(u_i-u_{i-1})<\varepsilon_k$.

## Statement references

[Extended value iteration](../items/alg-extended-value-iteration.md): defines $u_i$, $\operatorname{span}$, and the stopping test.

[Communicating MDP and diameter](../items/def-communicating-mdp-and-diameter.md): defines the hitting-time condition and normalized diameter.

[UCRL2 Appendix B](https://www.jmlr.org/papers/volume11/jaksch10a/jaksch10a.pdf): PDF pp. 22–23; the proof route invokes average-reward value-iteration convergence.

[Puterman–Chan Chapter 7](https://raw.githubusercontent.com/martyput/MDP_book/master/07%20Chapter/Book___chapter07.pdf): Proposition 7.3 and Theorem 7.10; the formal proof for Proposition 7.3 is omitted.

## Proof obligation

This lemma is escalated. The inspected Jaksch Appendix B gives only a convergence sketch and invokes the average-reward value-iteration result. The author-hosted Puterman–Chan chapter states the relevant result but explicitly omits the proof of Proposition 7.3. Neither source supplies the complete convergence argument needed to prove finite termination for the confidence-set update in [F1]. The exact missing argument is recorded in the batch notes and source-resolution evidence.
