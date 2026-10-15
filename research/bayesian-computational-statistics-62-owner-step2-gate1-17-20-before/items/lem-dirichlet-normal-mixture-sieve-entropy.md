---
id: lem-dirichlet-normal-mixture-sieve-entropy
kind: lemma
title: "Hellinger entropy for compact-location normal mixtures in a scale band"
status: draft
origin: pipeline
pipeline_run: bayesian-computational-statistics-62
dependency_level: 3
deps:
  - lem-dirichlet-normal-mixture-density-well-defined
  - lem-dirichlet-normal-mixture-finite-support-approximation
  - def-hellinger-distance-between-density-laws
  - lem-hellinger-distance-controls-l1-and-total-variation
  - lem-normal-location-scale-density
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: "AC is inherited from the normal-density and finite-support approximation interfaces used in the proof."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Posterior convergence rates of Dirichlet mixtures at smooth densities, §5 Theorem 6"
      url: "https://arxiv.org/pdf/0708.1885"
    - title: "Subhashis Ghosal and Aad W. van der Vaart, Fundamentals of Nonparametric Bayesian Inference, §6.3, proof of Theorem 6.6"
      url: "https://diamhomes.ewi.tudelft.nl/~avandervaart/books/bayesianstatistics"
---

## Statement

For $A\ge1$, $\tau>0$, and $0<\epsilon<1/4$, let
$$\mathcal P_{A,\tau}:=\{p_{F,\sigma}:F([-A,A])=1,\ \tau\le\sigma\le2\tau\}.$$
There is a universal constant $C$ such that
$$\log N(\epsilon,\mathcal P_{A,\tau},h)\le C(A/\tau\vee1)\left[\log\!\left(\frac{C(A/\tau\vee1)}{\epsilon}\right)\right]^2.$$
The same bound, with a changed universal constant, holds for
$$\mathcal P_{A,\tau,\rho}:=\{p_{F,\sigma}:F([-A,A]^c)\le\rho,\ \tau\le\sigma\le2\tau\}$$
whenever $0\le\rho\le c\epsilon^2$ for a sufficiently small universal $c>0$.
Here $N$ is the covering number in the stated metric.

## Facts & Assumptions

**Given:** $A\ge1$, $\tau>0$, $0<\epsilon<1/4$, AC, and the mixture density of [[lem-dirichlet-normal-mixture-density-well-defined]].

[A1] Assume AC for the normal-density and finite-support approximation interfaces. [[def-axiom-of-choice]]

[F1] [[lem-dirichlet-normal-mixture-finite-support-approximation]]: a mixture with mixing law on $[-A,A]$ is within $L^1$ error $\eta$ of a discrete mixture with at most $C(A/\sigma\vee1)\log(e/\eta)$ atoms.

[F2] [[lem-hellinger-distance-controls-l1-and-total-variation]]: for probability densities, Hellinger distance is a metric and $h^2(p,q)\le\int|p-q|d\lambda$.

[F3] [[lem-normal-location-scale-density]]: $\phi_\sigma(x-z)=\sigma^{-1}\phi((x-z)/\sigma)$, with $\phi$ the standard normal density.

[F4] [[def-hellinger-distance-between-density-laws]]: the Hellinger metric used here is the root-L2 distance between square-root densities.

## Proof

**Given:** The hypotheses in the Statement.

1.1 Put $K:=\lceil C_0(A/\tau\vee1)\log(e/\epsilon)\rceil$. By [F1], every $p_{F,\sigma}\in\mathcal P_{A,\tau}$ is within $L^1$ distance $\epsilon^2/C_1$ of a mixture with at most $K$ atoms, for a fixed sufficiently large $C_1$. Pad shorter mixtures by zero-weight atoms. [A1, F1, given, choose]

2.1 Differentiating the density in [F3] gives $\|\partial_z\phi_\sigma(\cdot-z)\|_1=\sigma^{-1}E|Z|\le\sigma^{-1}$, since $2|Z|\le1+Z^2$ and $E Z^2=1$, and $\|\partial_\sigma\phi_\sigma(\cdot-z)\|_1=\sigma^{-1}E|Z^2-1|\le2\sigma^{-1}$ for $Z\sim N(0,1)$. Integrating these derivatives along the location and scale segments yields $\|\phi_\sigma(\cdot-z)-\phi_\sigma(\cdot-z')\|_1\le |z-z'|/\sigma$ and $\|\phi_\sigma-\phi_{\sigma'}\|_1\le2|\sigma-\sigma'|/(\sigma\wedge\sigma')$. Now choose a scale grid in $[\tau,2\tau]$ and a location grid in $[-A,A]$, each with mesh at most $c_2\tau\epsilon^2$, and an $L^1$ grid on the $K$-simplex of mesh at most $c_2\epsilon^2$. Replacing the scale, locations and weights changes the mixture density in $L^1$ by at most $C c_2\epsilon^2$; choose $c_2$ so this plus the approximation from step 1.1 is at most $\epsilon^2/4$. Thus the resulting finite set is an $L^1$ cover of radius $\epsilon^2/4$, hence an $h$-cover of radius $\epsilon/2$ by [F2]. [A1, F2, F3, F4, step 1.1, given, construct]

3.1 The scale grid has at most $C\epsilon^{-2}$ points and the location grid at most $C(1+A/(\tau\epsilon^2))$ points. Rounding each of the first $K-1$ weights down to a mesh proportional to $\epsilon^2/K$ leaves the last weight nonnegative after setting it to make the sum one, gives at most $(CK/\epsilon^2)^K$ weight vectors, and changes their $L^1$ distance by at most $2c_2\epsilon^2$. Therefore the logarithm of the cover size is at most $C\log(e/\epsilon)+K\left[\log\!\left(\frac{C(A/\tau\vee1)}{\epsilon^2}\right)+\log\!\left(\frac{CK}{\epsilon^2}\right)\right]\le C(A/\tau\vee1)\left[\log\!\left(\frac{C(A/\tau\vee1)}{\epsilon}\right)\right]^2.$ The constructed finite set is an $h$-net of radius $\epsilon/2$, hence also a net of radius $\epsilon$; its cardinality therefore bounds the covering number and proves the first bound. [step 2.1, algebra]

4.1 If $r:=F([-A,A]^c)=0$, then $F$ already belongs to the compact-location class. If $0<r\le\rho<1$, let $F_A$ and $F_{A^c}$ be the normalized restrictions to $[-A,A]$ and its complement. Then $p_{F,\sigma}=(1-r)p_{F_A,\sigma}+r p_{F_{A^c},\sigma}$, so $\|p_{F,\sigma}-p_{F_A,\sigma}\|_1\le2r$. By [F2], $h(p_{F,\sigma},p_{F_A,\sigma})\le\sqrt{2r}$; the triangle inequality in [F4] then transfers the compact cover to the tail-constrained class. For sufficiently small universal $c$, $\rho\le c\epsilon^2$ makes the truncation error at most $\epsilon/2$, so the radius-$\epsilon/2$ cover from steps 2.1–2.2 becomes a radius-$\epsilon$ cover after the constant rescaling used in the entropy bound. [A1, F2, F4, step 2.1, step 3.1, given, algebra] ∎
