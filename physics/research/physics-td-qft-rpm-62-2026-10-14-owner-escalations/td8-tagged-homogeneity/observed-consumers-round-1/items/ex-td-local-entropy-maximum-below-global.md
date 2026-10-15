---
id: ex-td-local-entropy-maximum-below-global
kind: example
title: A local entropy maximum below a feasible global maximum
status: draft
origin: pipeline
domain: physics
library: physics
physical_scope: An abstract two-system model with positive thermodynamic coordinates and a model-declared nonconvex energy-partition constraint; it illustrates global versus local maxima without a material-specific kinetic or empirical claim.
deps: [def-td-equilibrium-state-domain, def-td-thermal-contact-constraints, def-td-isolated-compound-feasible-set, def-euclidean-inner-product, post-td-concave-fundamental-entropy, post-td-bulk-additivity, post-td-entropy-maximum]
dependency_roles:
  def-td-equilibrium-state-domain: formulation-prerequisite
  def-td-thermal-contact-constraints: formulation-prerequisite
  def-td-isolated-compound-feasible-set: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  post-td-concave-fundamental-entropy: physical-assumption
  post-td-bulk-additivity: physical-assumption
  post-td-entropy-maximum: physical-assumption
aliases: []
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: Daniel Arovas, Lecture Notes on Thermodynamics and Statistical Mechanics, §2.9, equilibrium and stability
      url: https://courses.physics.ucsd.edu/2010/Spring/physics210a/LECTURES/STATMECH.pdf
    - title: David Tong, Statistical Physics, Chapter 4 of the complete author-hosted lecture notes, §§4.3.3–4.3.4
      url: https://davidtong.org/pdfs/teaching/statistical-physics/statphys4.pdf
    - title: Lieb and Yngvason, The Physics and Mathematics of the Second Law of Thermodynamics, §§II.F and IV.A
      url: https://arxiv.org/pdf/cond-mat/9708200v2
---

## Example

Take two independent separated one-species systems $A$ and $B$ inside an isolated compound, each with domain $D_i=(0,\infty)^3$ in $(\hat U_i,\hat V_i,\hat n_i)$, and designate each full domain as an open single-phase chart. Fix positive $\hat V_A,\hat V_B,\hat n_A,\hat n_B$, total energy $U_A+U_B=1\,\mathrm J$, $s_*=1\,\mathrm{J\,K^{-1}}$, and toy entropies $S_A=2s_*\hat U_A$, $S_B=s_*\hat U_B$. Admit every listed separated pair in $\mathcal C_{AB}$ from [[post-td-bulk-additivity]], and permit internal energy transfer through thermal contact while keeping volumes and amounts fixed. Let

$$\phi(x)=((x,\hat V_A,\hat n_A),(1-x,\hat V_B,\hat n_B)),\qquad \mathcal F=\{\phi(x):x\in(0,3/10]\cup[3/5,9/10]\}.$$

The retained barrier constraint admits exactly this nonconvex subset of the energy partitions; all its pairs satisfy the same total energy, volume, and amount constraints. The additive entropy is $S_{\mathrm{tot}}(\phi(x))=s_*(1+x)$, so $x=3/10$ is a local maximum relative to $\mathcal F$ but lies below the feasible global maximum at $x=9/10$. These toy constitutive laws and constraints make no claim about a real material; calling an actual preparation metastable would require a separate kinetic model.

## Facts & Assumptions

**Given:** The equilibrium-coordinate convention of [[def-td-equilibrium-state-domain]], the contact restrictions of [[def-td-thermal-contact-constraints]], the feasible-set definition [[def-td-isolated-compound-feasible-set]], and the entropy and equilibrium-maximum postulates.

[F1] The adopted entropy is finite and measured in $\mathrm{J\,K^{-1}}$ ([[post-td-concave-fundamental-entropy]]).

[F2] On every specified convex region the adopted entropy is continuous and satisfies the Jensen concavity inequality ([[post-td-concave-fundamental-entropy]]).

[F3] The admitted separated-pair set is a designated subset $\mathcal C_{AB}\subseteq D_A\times D_B$ ([[post-td-bulk-additivity]]).

[F4] Under the composition map, the dimensioned total energy of an admitted pair is $U_{A\sqcup B}=U_A+U_B$ ([[post-td-bulk-additivity]]).

[F5] Entropy is additive for admitted independent separated systems under the composition map ([[post-td-concave-fundamental-entropy]]).

[F6] The tagged bulk family scales extensive coordinates by $\lambda>0$, and entropy is assumed to satisfy $S_{c^{(\lambda)}}(\delta_\lambda x)=\lambda S_c(x)$ ([[post-td-bulk-additivity]], [[post-td-concave-fundamental-entropy]]).

[F7] An equilibrium feasible set is a model-declared subset satisfying the stated totals and retained constraints; the definition imposes no convexity on it ([[def-td-isolated-compound-feasible-set]]).

[F8] Stable equilibrium in this route is an attained global entropy maximum on the exact feasible set ([[post-td-entropy-maximum]]).

[L1] For $z\in\mathbb R^6$, $\|z\|_2^2=\sum_{j=1}^6z_j^2$ ([[def-euclidean-inner-product]]); in particular $\|\phi(y)-\phi(x)\|_2=\sqrt2|y-x|$.

[A1] $D_A=D_B=(0,\infty)^3$ in dimensionless coordinates, with each full domain designated as an open single-phase chart; the volumes and amounts and total energy and feasible set are exactly those in the Example, and every listed pair is admitted in $\mathcal C_{AB}$; $S_A=2s_*\hat U_A$, $S_B=s_*\hat U_B$, and $s_*=1\,\mathrm{J\,K^{-1}}$.

[A2] A local maximum relative to $\mathcal F$ means a feasible point whose entropy is at least that of every feasible point in some relatively open neighborhood in the inherited Euclidean topology.

## Verification

**Given:** The model [A1], the relative-local-maximum convention [A2], and facts [F1]–[F8] and [L1].

1.1 The two entropies in [A1] are finite, affine, continuous and concave on their convex domains; they are $C^2$ with positive energy derivatives $2\,\mathrm{K^{-1}}$ and $1\,\mathrm{K^{-1}}$, and each scales by $\lambda$ when all extensive coordinates scale by $\lambda$. Every pair is admitted by [F3], its total energy is given by [F4], the entropy total is their sum by [F5], and the functions obey the tagged scaling rule [F6]. Hence their additive total is affine and concave on the product domain; on $\mathcal F$ it is $S_{\mathrm{tot}}(\phi(x))=s_*(1+x)$, which is strictly increasing because $s_*>0$. [given, A1, F1, F2, F3, F4, F5, F6, algebra]

2.1 Let $N=\{\phi(x)\in\mathcal F:|x-3/10|<3/10\}$. It is relatively open: for any represented $x$ choose $\delta=(3/5-x)/\sqrt2>0$; if $\|\phi(y)-\phi(x)\|_2<\delta$, [L1] gives $|y-x|<(3/5-x)/2$, hence $y<3/5$. Every $x$ represented in $N$ satisfies $0<x<3/5$; the definition of $\mathcal F$ then forces $x\le3/10$. Since $S_{\mathrm{tot}}$ is increasing by step 1.1, no feasible point in $N$ has entropy greater than $S_{\mathrm{tot}}(\phi(3/10))$. Thus $\phi(3/10)$ is a local maximum in the sense of [A2], while [F7] permits the stated nonconvex feasible constraint. [given, A1, A2, F7, L1, step 1.1, algebra]

3.1 The feasible state $\phi(9/10)$ has entropy exceeding that of $\phi(3/10)$ by $s_*(9/10-3/10)=3s_*/5>0$. Because $S_{\mathrm{tot}}$ is increasing and $9/10$ is the largest feasible $x$, $\phi(9/10)$ is the global maximum on $\mathcal F$. Hence the local maximum $\phi(3/10)$ is not the global maximum required by [F8] and is not the stable equilibrium selected by that postulate. [given, A1, F8, step 1.1, step 2.1, algebra] ∎
