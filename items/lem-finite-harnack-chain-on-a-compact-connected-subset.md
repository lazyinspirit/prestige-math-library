---
id: lem-finite-harnack-chain-on-a-compact-connected-subset
kind: lemma
title: "Finite harnack chain on a compact connected subset"
status: published
origin: pipeline
deps: [def-connected-space, thm-heine-borel-rn]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  audited: 2026-09-07
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-07
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (2014)"
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: "Theorem 2.22 finite-cover argument, p.31"
    - title: "Tsogtgerel Gantumur, Harmonic functions (2012)"
      url: https://www.math.mcgill.ca/gantumur/math580f12/harmonic.pdf
      locator: "§11 Lemma 25, pp.18–19"
---

## Statement

Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be a domain, and let $K\subset\Omega$ be compact, possibly empty or disconnected. There is a finite nonempty family $\{B_{r_j}(a_j)\}_{j=1}^N$ covering $K$, with $r_j>0$ and $\overline B_{4r_j}(a_j)\subset\Omega$, whose overlap graph is connected. An edge means that the two open balls intersect. The family depends only on $K$ and $\Omega$.

## Facts & Assumptions

**Given:** The objects and hypotheses in the statement.

[F1] A nonempty clopen subset of a connected space is the whole space, since its nonempty complement would give a separation. ([[def-connected-space]]).

[F2] Closed bounded Euclidean subsets are compact. ([[thm-heine-borel-rn]]).

## Proof

**Proof technique:** direct.

1.1 Call a ball admissible if its radius is positive and its fourfold closed ball lies in $\Omega$. Every point centers such a ball by openness. Fix one admissible base ball, using nonemptiness of $\Omega$. Let $E$ be the union of all admissible balls joined to it by a finite sequence of overlapping admissible balls. [given]

2.1 The set $E$ is nonempty and open. If $x\in\Omega$ is a relative closure point of $E$, an admissible ball centered at $x$ meets $E$, hence meets a ball in one of the finite sequences. Appending the new ball proves it is in the reachable family and $x\in E$. Thus $E$ is relatively closed, and connectedness implies $E=\Omega$. [F1, step 1.1]

3.1 Compactness gives a finite subcover of $K$ by admissible balls. Each selected ball meets a reachable ball by the preceding conclusion, and can be appended to a finite sequence from the base. Take the union of these finitely many finite sequences together with the base ball. The resulting finite family covers $K$ and its overlap graph is connected. If $K$ is empty, take just the base ball. All its fourfold closed balls are compact by Heine–Borel and remain in $\Omega$. [F2, step 2.1, given] ∎
