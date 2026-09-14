---
id: def-gaussian-process
kind: definition
title: "Gaussian process"
status: draft
origin: pipeline
deps: [def-stochastic-process-and-finite-dimensional-distributions, def-multivariate-normal-law, def-axiom-of-choice]
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Perla Sousi, Advanced Probability, Section 6.1"
      url: "https://www.statslab.cam.ac.uk/~ps422/mynotes.pdf"
    - title: "Nobuaki Yoshida, Probability Theory, Section 6.1"
      url: "https://www.math.nagoya-u.ac.jp/~noby/pdf/prob.pdf"
---

## Definition

Assume the Axiom of Choice [[def-axiom-of-choice]]. A real stochastic process
$X=(X_t)_{t\in I}$ [[def-stochastic-process-and-finite-dimensional-distributions]]
is a **Gaussian process** if, for every integer $n\ge 1$, every time list
$t_1,\ldots,t_n\in I$, and every $a_1,\ldots,a_n\in\mathbb R$, the random
variable
$$
\sum_{j=1}^n a_jX_{t_j}
$$
has a normal law $N(m,\sigma^2)$ for some $m\in\mathbb R$ and
$\sigma\ge0$. Variance zero is allowed, so constant linear combinations are
included.

Equivalently, for every such time list the evaluation vector
$(X_{t_1},\ldots,X_{t_n})$ has a possibly singular multivariate normal law in
the sense of [[def-multivariate-normal-law]]. Indeed, that definition says
exactly that every scalar projection of the vector is normal. This also covers
repeated times, zero coefficients, and singular covariance matrices; no
distinct-time convention is needed for this definition.

Choice is declared because the library's scalar and multivariate normal-law
interfaces construct their probability laws and independent standard-normal
realizations under AC. The equivalence itself is only an unpacking of the
finite-dimensional projection definition and makes no further selection.

## Source notes

Sousi, Section 6.1, defines a Gaussian process through normal finite linear
combinations. Yoshida, Section 6.1 (printed p. 173), uses the equivalent
finite-dimensional multivariate-normal formulation. The present definition
retains singular laws explicitly, as required by the library's normal-law
interface.
