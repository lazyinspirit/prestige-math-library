---
id: pthm-aqft-finite-gauging-gluing
kind: physics-theorem
title: Gauge invariance and gluing in the finite symmetry model
status: draft
origin: pipeline
domain: physics
library: physics
dependency_level: 7
deps:
  - def-aqft-finite-two-group-state-sum
  - post-aqft-finite-gauging-model
  - thm-aqft-finite-two-group-gauging-gluing
dependency_roles:
  def-aqft-finite-two-group-state-sum: formulation-prerequisite
  post-aqft-finite-gauging-model: physical-assumption
  thm-aqft-finite-two-group-gauging-gluing: mathematical-premise
physical_scope: The specified finite three-dimensional vertex-spin model with G = Z/2, trivial A, zero Postnikov cocycle, and unit background response; no continuum extension or empirical claim.
proof_strategy: direct
axiom_use: No choice principle is used; all configuration, background, gauge-label, and sum sets are finite.
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Gregory W. Moore and Vivek Saxena, TASI Lectures on Topological Field Theories and Differential Cohomology, §23.3
      url: https://arxiv.org/pdf/2510.07408
      locator: PDF pp. 97–100 / printed pp. 96–99, equations (23.27) and (23.34)–(23.38); homotopy-cardinality measures and finite sewing context.
    - title: Daniel S. Freed and Frank Quinn, Chern-Simons Theory with Finite Gauge Group, §2
      url: https://www.math.ru.nl/~mueger/TQFT/FQ.pdf
      locator: PDF pp. 8–11, Lemma 2.4 and Theorem 2.13; ordinary finite-group automorphism weighting and gluing, not the local spin-model proof.
    - title: "John C. Baez and Aaron D. Lauda, Higher-Dimensional Algebra V: 2-Groups, §8.3"
      url: https://arxiv.org/pdf/math/0307200
      locator: PDF pp. 54–59; skeletal two-group and associator-coherence conventions.
    - title: Francesco Benini, Clay Córdova, and Po-Shen Hsin, On 2-Group Global Symmetries and Their Anomalies, §2.3
      url: https://arxiv.org/pdf/1803.09336
      locator: PDF pp. 18–20, equations (2.14)–(2.20); simplicial background and gauge conventions, specialized here to trivial A.
---

## Statement

Let $K$ be a finite ordered oriented simplicial complex of dimension at most three in the relative extension of the selected model, with $V_K$ vertices and $E_K$ edges. For a closed physical regulator, $K$ is a finite ordered triangulation of a closed compact oriented smooth three-manifold. Use $G=\mathbb Z/2$, the trivial group $A=\{0\}$, the unique action $\rho$, the zero normalized Postnikov cocycle $\beta$, and the unit background response $W_K(x)=1$. The dynamical spin configurations for each background are $\Phi_x=C^0(K;G)$, with action $S_x=0$ and normalized measure $\mu_x(\sigma)=2^{-V_K}$. A background gauge arrow with vertex labels $g$ transports spins by $T_g(\sigma)=\sigma+g$ and transports observables by pullback.

For every background $x$, its spin partition weight is $Z_x=1$. The normalized background-gauging amplitude is
$$ Z_K^{(2)}=\sum_{[x]\in\pi_0\mathcal B(K)}\frac{|\pi_2(\mathcal B(K),x)|}{|\pi_1(\mathcal B(K),x)|}=\frac{1}{2^{V_K}}|\operatorname{Ob}\mathcal B(K)|. $$
For a subcomplex $L\subseteq K$ and fixed background $s$ on $L$, the relative background amplitude is
$$
Z_{K,L}^{(2)}(s)=2^{-(V_K-V_L)}|\{x\in\operatorname{Ob}\mathcal B(K):x|_L=s\}|.
$$
If $K=K_1\cup_\Sigma K_2$ is a union of ordered subcomplexes with compatible restrictions and opposite induced seam orientations, the relative boundary amplitudes are gauge-invariant and obey
$$ Z_K^{(2)}=\sum_{[s]\in\pi_0\mathcal B(\Sigma)} Z_{K_2,\Sigma}^{(2)}(s)Z_{K_1,\Sigma}^{(2)}(s)\frac{|\pi_2(\mathcal B(\Sigma),s)|}{|\pi_1(\mathcal B(\Sigma),s)|}. $$
For a one-vertex complex with unit background weight, the absolute normalized background-gauging amplitude is $1/2$. These conclusions concern only the specified finite model; they do not establish a continuum quantum field theory or empirical behavior.

## Statement references

[[def-aqft-finite-two-group-state-sum|selected finite physical model]]

[[post-aqft-finite-gauging-model|adopted finite-model assumptions]]

[[thm-aqft-finite-two-group-gauging-gluing|finite background-gauge measure and gluing theorem]]

[Moore and Saxena, §23.3](https://arxiv.org/pdf/2510.07408)

[Freed and Quinn, §2](https://www.math.ru.nl/~mueger/TQFT/FQ.pdf)

[Baez and Lauda, §8.3](https://arxiv.org/pdf/math/0307200)

[Benini, Córdova, and Hsin, §2.3](https://arxiv.org/pdf/1803.09336)

## Facts & Assumptions

**Given:** a finite ordered oriented complex $K$ in the selected model, its flat background cochain, model spin fields and normalized measure, a fixed subcomplex $L$ with background $s$, and a decomposition $K=K_1\cup_\Sigma K_2$ as in the Statement.

[F1] [[def-aqft-finite-two-group-state-sum]]: for each background $x$, $\Phi_x=C^0(K;\mathbb Z/2)$, $S_x=0$, $\mu_x(\sigma)=2^{-V_K}$, and the per-background partition weight is $W_K(x)=1$.

[F2] [[def-aqft-finite-two-group-state-sum]]: a raw background gauge arrow with vertex labels $g$ maps spins by $T_g(\sigma)=\sigma+g$ and observables by pullback; relative boundary amplitudes use normalized spin measure and the finite background higher-gauge sum.

[A1] [[post-aqft-finite-gauging-model]]: the finite spin model, its unit background response, and its relative state-sum convention are adopted assumptions.

[F3] [[thm-aqft-finite-two-group-gauging-gluing]]: for finite groups, normalized cocycle data, an invariant scalar weight, and a compatible ordered-subcomplex decomposition, the higher gauge sum equals the normalized field-object sum and glues using the seam factor $|\pi_2|/|\pi_1|$.

## Proof

**Given:** the selected spin model, finite backgrounds and gauge arrows, and the subcomplex decomposition.

1.1 For each background $x$, the configuration set has $2^{V_K}$ spin assignments. Each has action $0$ and weight $2^{-V_K}$, so $Z_x=\sum_{\sigma\in\Phi_x}2^{-V_K}=1$. A gauge arrow with labels $g$ acts by the bijection $\sigma\mapsto\sigma+g$; it preserves the uniform measure and transports every observable by pullback. Therefore reindexing each finite correlator sum gives gauge covariance with phase $1$, and the induced scalar background weight is constant and lies in $U(1)$. [given, F1, F2, A1, construct, algebra]

2.1 The groups are finite, $\rho$ is the unique trivial action, $\beta=0$ is a normalized cocycle, and $W_K=1$ is invariant and factors as $1\cdot1$ on every decomposition. Thus the hypotheses of [F3] hold, and substitution of $|G|=2$, $|A|=1$ gives $c(J)=2^{-V_J}$, the absolute formula and the relative formula in the Statement. [given, F1, A1, F3, step 1.1, algebra]

3.1 Applying the gluing conclusion of [F3] to the decomposition and the invariant unit weights gives the stated seam contraction. The relative convention in [F2] uses exact restriction to $\Sigma$. Since $A$ is trivial, $|\pi_2|=1$ and the seam factor is the ordinary reciprocal automorphism order, exactly as displayed. The orientation has no effect because every action phase is $1$. [given, F2, F3, step 2.1, algebra]

4.1 On one vertex there are no edges, so there is one background object and $V=1$. The absolute formula in step 2.1 yields $Z_K^{(2)}=1/2$. [given, F1, F3, step 2.1, algebra] ∎

