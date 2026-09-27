---
page: graded-bimodules-and-tensor-functors-examples
title: "Graded Bimodules and Tensor Functors — Examples"
status: draft
items: []
examples: [ex-internal-shift-versus-a-change-of-degree, ex-right-flat-bimodule-with-nonprojective-output, ex-left-projective-bimodule-with-nonexact-tensor]
---

These examples separate the conventions and the two hypotheses of the page. The
first computes the internal shift against the published twist: with $\deg x=1$
the monomial $x^j$ has degree $j+2$ in $k[x]\{2\}$ and degree $j-2$ in
$k[x](2)$, so $k[x]\{2\}=k[x](-2)$ and shifting moves no multiplication sign.

The second takes $A=k$, $B=k[\varepsilon]/(\varepsilon^2)$ and $M=k$ with the
augmentation action: $M$ is right $k$-flat, so its tensor functor is exact, yet
$M\otimes_kk\cong k$ is not projective over $B$. The third reverses the roles,
$B=k$ and $A=k[\varepsilon]/(\varepsilon^2)$: now $M=k$ is finite projective
over $B$, but tensoring the non-split sequence
$0\to(\varepsilon)\to A\to k\to0$ induces the zero map on the copies of $k$, so
$M\otimes_A-$ is not exact.
