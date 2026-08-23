---
id: ex-radial-normalization-retracts-the-punctured-disk-but-not-the-disk
kind: example
title: "Radial normalization retracts the punctured disk, but it cannot extend to the disk"
status: draft
origin: session
provenance:
  statement: ai-altered
  proof: ai-altered
deps: [thm-punctured-rn-deformation-retracts-onto-the-sphere, thm-no-retraction-of-the-closed-disk-onto-the-circle, def-euclidean-spheres-and-closed-balls]
justified_by: []
aliases: []
landmark: false
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "deepseek-v4-pro + claude-opus-5[1m]"
    verdict: pass
    date: 2026-08-23
sources:
  scraped: []
  references:
    - title: "Allen Hatcher, Algebraic Topology, proof of Theorem 1.9"
      url: "https://pi.math.cornell.edu/~hatcher/AT/AT%2B.pdf"
    - title: "J. Peter May, A Concise Course in Algebraic Topology, Chapter 1, §6"
      url: "https://math.uchicago.edu/~may/CONCISE/ConciseRevised.pdf"
pipeline_run: null
---

## Example

Let $D^2=\overline B_2(0,1)$ and define

$$\rho:D^2\setminus\{0\}\longrightarrow S^1,\qquad \rho(x)=\frac{x}{\lVert x\rVert_2}.$$

This map retracts the punctured disk onto the unit circle, but it has no continuous extension to all of $D^2$.

## Facts & Assumptions

**Given:** The punctured closed disk $D^2\setminus\{0\}$ and radial normalization $\rho$.

[L1] On $\mathbb R^2\setminus\{0\}$, radial normalization is a retraction onto $S^1$ and is part of a deformation retraction ([[thm-punctured-rn-deformation-retracts-onto-the-sphere]]).

[L2] There is no continuous retraction $D^2\to S^1$ ([[thm-no-retraction-of-the-closed-disk-onto-the-circle]]).

[F1] The closed unit disk and unit circle are $\overline B_2(0,1)$ and $S_2(0,1)$ ([[def-euclidean-spheres-and-closed-balls]]).

## Verification

**Proof technique:** direct.

1.1 Restricting the retraction in [L1] to $D^2\setminus\{0\}$ gives a continuous map into $S^1$, and every $x\in S^1$ satisfies $\rho(x)=x$. Thus $\rho$ retracts the punctured disk onto the unit circle. [given, F1, L1]

2.1 If a continuous extension $\bar\rho:D^2\to S^1$ existed, it would still satisfy $\bar\rho(x)=x$ on $S^1$, so it would be a retraction, contrary to [L2]. [step 1.1, L2]

3.1 The failure at the missing point is also visible directly: for every $0<t\le1$, $\rho(t,0)=(1,0)$ while $\rho(-t,0)=(-1,0)$. The two radial approaches to $0$ therefore have different constant images, so $\rho$ has no limit at $0$. [step 1.1, algebra] ∎
