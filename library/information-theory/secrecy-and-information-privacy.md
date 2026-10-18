---
page: secrecy-and-information-privacy
title: "Secrecy and Information Privacy"
status: published
requires:
  - discrete-memoryless-channel-capacity
  - iid-lossless-source-coding-and-the-aep
  - trust-region-and-cubic-regularization-methods
items:
  - thm-it-universal-hashing-leftover-bound
  - def-it-finite-source-privacy-utility-region
  - def-it-information-leakage-and-equivocation
  - lem-it-finite-wiretap-product-kernel-is-stochastic
  - def-it-wiretap-channel
  - thm-it-perfect-privacy-kernel-criterion
  - def-it-degraded-wiretap-channel
  - def-it-weak-and-strong-secrecy
  - lem-it-finite-dmc-information-density-concentration
  - def-it-wiretap-secrecy-capacities
  - lem-it-channel-resolvability-soft-covering
  - lem-it-classical-wiretap-auxiliary-cardinality
  - thm-it-finite-classical-wiretap-auxiliary-capacity
  - thm-it-degraded-wiretap-secrecy-capacity
examples: []
---

All alphabets and probability laws on this page are finite, and information is measured in natural-log nats as in [[def-it-information-units-and-logarithm-base]]. A wiretap channel has one input and two outputs whose conditional dependence is retained in the joint kernel:

```tikzcd
\begin{tikzcd}
& Y \\
X \arrow[ur, "W_Y"] \arrow[dr, "W_Z"'] & \\
& Z
\end{tikzcd}
```

The two arrows label the Bob and Eve marginals of the joint law $W(y,z\mid x)$. They do not assert that $Y$ and $Z$ are conditionally independent given $X$. The block law is the coordinate product of this joint kernel. A code uses a uniform message, private encoder randomness and no feedback or preshared secret key; its public description is available to Eve.

Information leakage and equivocation are defined in [[def-it-information-leakage-and-equivocation]]. Weak secrecy requires $I(M;Z^n)/n\to0$, while strong secrecy requires $I(M;Z^n)\to0$, as in [[def-it-weak-and-strong-secrecy]]. Strong secrecy implies weak secrecy, but the converse fails; the companion page gives a noiseless example. Capacity here is defined operationally for both average and maximal error, and for both secrecy criteria. The local finite information-density lemma supports fixed-auxiliary threshold decoding, while the resolvability lemma makes Eve's induced output law approach a product target in expected KL and total variation. The capacity theorem proves the same auxiliary formula for all four capacities:

$$\max_{P_{U,X}:\,U-X-(Y,Z)}\bigl[I(U;Y)-I(U;Z)\bigr],\qquad |\mathcal U|\le|\mathcal X|.$$

For a degraded channel in the sense of [[def-it-degraded-wiretap-channel]], Eve's output is generated from Bob's by a finite stochastic kernel, the auxiliary reduces to $U=X$, and the formula becomes $\max_{P_X}[I(X;Y)-I(X;Z)]$.

For finite source privacy in [[def-it-finite-source-privacy-utility-region]], a release kernel gives the factorization $P_{SXZ}=P_{SX}K_{Z\mid X}$:

```tikzcd
\begin{tikzcd}
S \arrow[r] & X \arrow[r, "K"] & Z
\end{tikzcd}
```

The privacy–utility coordinates are $(I(S;Z),I(X;Z))$: the first measures leakage about sensitive data and the second measures retained information about useful data. Perfect privacy is exactly equality of the conditional output laws across positive-support sensitive values, by [[thm-it-perfect-privacy-kernel-criterion]]. This criterion is a kernel condition and does not impose a distortion or rate constraint.

Universal hashing is treated separately by [[thm-it-universal-hashing-leftover-bound]] as a total-variation guarantee with the public seed included alongside Eve's side information. For conditional guessing probability $g(X\mid Z)$ and an $M$-valued two-universal hash, the bound is $\operatorname{TV}\le\tfrac12\sqrt{M g(X\mid Z)}$; in particular, $M g(X\mid Z)\le4\varepsilon^2$ guarantees distance at most $\varepsilon$. This bound does not by itself state an unnormalized mutual-information guarantee.
