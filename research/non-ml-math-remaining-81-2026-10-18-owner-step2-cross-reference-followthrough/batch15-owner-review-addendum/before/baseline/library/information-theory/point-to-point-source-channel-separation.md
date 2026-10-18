---
page: point-to-point-source-channel-separation
title: "Point-to-Point Source–Channel Separation"
status: draft
items:
  - def-it-point-to-point-joint-source-channel-code
  - lem-it-finite-iid-source-lossless-code-achievability
  - lem-it-finite-iid-rate-distortion-mutual-information-bound
  - thm-it-point-to-point-lossless-source-channel-separation
  - thm-it-point-to-point-lossy-source-channel-separation
examples: []
---

This page proves asymptotic separation for finite IID sources sent through finite discrete memoryless channels. A code maps a source block to a channel input block and decodes the output block; the ratio of channel uses to source symbols is fixed. The lossless threshold compares source entropy in nats with channel capacity in nats per use. The lossy threshold compares the finite information rate-distortion value in bits—converted to nats—with the same channel budget. Distortion is finite and bounded, and the rate-distortion budget is feasible and attained. The proofs use maximal-error channel codes because a source-code index need not be uniform. They establish asymptotic block criteria and make no finite-block, zero-delay, or universal matching claim.

```tikz
\begin{tikzpicture}[>=stealth]
  \node (s) at (0,0) {$S^k$};
  \node[draw] (f) at (2,0) {$f_k$};
  \node (x) at (4,0) {$X^n$};
  \node[draw] (w) at (6,0) {$W^n$};
  \node (y) at (8,0) {$Y^n$};
  \node[draw] (g) at (10,0) {$g_k$};
  \node (shat) at (12,0) {$\widehat S^k$};
  \draw[->] (s.east) -- (f.west);
  \draw[->] (f.east) -- (x.west);
  \draw[->] (x.east) -- (w.west);
  \draw[->] (w.east) -- (y.west);
  \draw[->] (y.east) -- (g.west);
  \draw[->] (g.east) -- (shat.west);
\end{tikzpicture}
```

The boxes $f_k$ and $g_k$ are deterministic maps; $W^n$ is the stochastic product transition law of the DMC. This diagram records the code interface only; none of the proofs relies on it.
