---
id: thm-ip-pcn-posterior-invariance
kind: theorem
title: The pCN accept-reject kernel preserves the posterior
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 5
deps:
  - alg-ip-prior-preserving-crank-nicolson
  - def-axiom-of-choice
  - def-general-state-reversibility-by-symmetric-flow-measure
  - def-hilbert-space
  - def-ip-misfit-evidence-and-posterior-law
  - def-ip-prior-on-a-forward-domain
  - def-law-or-distribution-of-a-random-element
  - def-metric-ball
  - def-metric-topology
  - def-norm-and-normed-space
  - def-measure-kernel-and-probability-kernel
  - def-probability-measure
  - def-separable-space
  - def-second-countable-space
  - def-product-sigma-algebra-and-finite-product-sigma-algebras
  - def-independent-random-elements
  - lem-borel-product-of-second-countable-spaces
  - lem-ip-pcn-reference-pair-law-is-symmetric
  - lem-ip-pcn-transition-kernel-is-measurable
  - lem-subset-of-countable
  - lem-prior-and-model-kernel-define-joint-law
  - thm-change-of-variables-for-expectation
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-general-state-reversibility-implies-invariance
  - thm-independent-random-elements-have-product-joint-law
  - thm-metric-open-set-algebra
  - thm-rectangle-criterion-for-independent-random-elements
  - thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique
  - thm-product-of-countable
  - thm-rationals-countable
  - lem-rat-embeds-dense
justified_by: []
forward_refs: []
aliases: []
proof_strategy: direct
axiom_use: "AC is inherited from the pCN Gaussian-reference algorithm. The symmetric-flow argument uses no further choice principle."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-22
sources:
  references:
    - title: "S. L. Cotter, G. O. Roberts, A. M. Stuart, and D. White, MCMC Methods for Functions: Modifying Old Algorithms to Make Them Faster, Statistical Science 28(3) (2013)"
      url: "https://eprints.maths.manchester.ac.uk/2215/1/1202.0709v3.pdf"
      locator: "§4.2, equation (4.7); §6.1, Theorem 6.2; prior-preserving pCN detailed-balance correction."
    - title: "Yury Korolev and Jonas Latz, Inverse Problems: Lecture Notes, Michaelmas Term 2020 (University of Cambridge, 18 May 2021)"
      url: "https://www.damtp.cam.ac.uk/research/cia/files/teaching/Inverse_Problems_2020/LectureNotes2020.pdf"
      locator: "Chapter 8, §8.2, Definition 8.2.3 and Proposition 8.2.4, complete Metropolis–Hastings detailed-balance proof."
    - title: "G. O. Roberts and J. S. Rosenthal, General State Space Markov Chains and MCMC Algorithms, Probability Surveys 1 (2004)"
      url: "https://www.probability.ca/jeff/ftpdir/probsurv.pdf"
      locator: "§2, Definition and Proposition 1, detailed balance and invariance on a general measurable state space."
---

## Statement

Assume the Axiom of Choice and the inputs of the prior-preserving
Crank–Nicolson algorithm: a separable real Hilbert space $H$, centered Borel
Gaussian reference probability $\mu_0$, full-mass Borel domain $D$, Borel
potential $\Phi_D:D\to(-\infty,+\infty]$, positive finite evidence $Z$, and
scale $\beta\in[0,1]$. Let $\mu$ be the normalized target on $H$ obtained by
extending $\Phi_D$ by $+\infty$ off $D$, and let $P_\beta$ be the algorithm's
accept-reject transition. Then $P_\beta$ is reversible with respect to $\mu$:
its joint flow
$$\Lambda_\beta(C):=\int_H P_\beta(u,C_u)\,\mu(du),\qquad C_u:=\{v\in H:(u,v)\in C\},$$
is unchanged by $(u,v)\mapsto(v,u)$ for every Borel
$C\subseteq H\times H$. Consequently, $\mu$ is invariant:
$$\int_H P_\beta(u,A)\,\mu(du)=\mu(A)\qquad(A\in\mathcal B(H)).$$
This conclusion gives invariance only; it does not assert uniqueness,
convergence, mixing, an effective-sample-size bound, mesh-independent cost,
or correctness of an approximate forward solver.

## Statement references

[[alg-ip-prior-preserving-crank-nicolson|The pCN target, total potential extension, proposal, and accept-reject transition.]]

[[def-general-state-reversibility-by-symmetric-flow-measure|Reversibility means symmetry of the joint flow measure under coordinate swap.]]

[[thm-general-state-reversibility-implies-invariance|A symmetric joint flow implies invariance of its probability target.]]

[[lem-ip-pcn-reference-pair-law-is-symmetric|The Gaussian pCN proposal pair law under the reference probability is symmetric.]]

## Facts & Assumptions

**Given:** The algorithm inputs in the Statement.

[A1] The Axiom of Choice and the algorithm's full-mass domain, potential extension, evidence, target density, proposal, and acceptance convention. [[def-axiom-of-choice]] [[alg-ip-prior-preserving-crank-nicolson]]

[F1] The proposal rule $Q_\beta$ and accept-reject rule $P_\beta$ are Borel probability kernels; for each $u$,
$$Q_\beta(u,B)=\int_H\mathbf1_B(\rho u+\beta z)\,\mu_0(dz),\qquad P_\beta(u,A)=\int_A\alpha(u,v)Q_\beta(u,dv)+\mathbf1_A(u)(1-a(u)),$$
where $a(u)=\int_H\alpha(u,v)Q_\beta(u,dv)$. [[lem-ip-pcn-transition-kernel-is-measurable]]

[F2] If $w(u)=e^{-\bar\Phi(u)}$, then $\mu(du)=Z^{-1}w(u)\mu_0(du)$, $w(u)=0$ when $\bar\Phi(u)=+\infty$, and $\alpha(u,v)=0$ if either potential is infinite. [[alg-ip-prior-preserving-crank-nicolson]] [[def-ip-misfit-evidence-and-posterior-law]]

[F3] For $U_0,\xi$ independent with law $\mu_0$ and $V_0=\rho U_0+\beta\xi$, the joint Borel law of $(U_0,V_0)$ is symmetric under coordinate swap; on the separable Hilbert product, the Borel sigma-algebra equals the product sigma-algebra. [[lem-ip-pcn-reference-pair-law-is-symmetric]] [[lem-borel-product-of-second-countable-spaces]]

[F4] A prior and probability kernel define a joint flow probability measure with the rectangle formula and nonnegative iterated-integral identity. [[lem-prior-and-model-kernel-define-joint-law]] [[def-measure-kernel-and-probability-kernel]] [[def-probability-measure]]

[F5] Equality of probability laws is preserved under measurable changes of variables, and integration against a law equals expectation of the corresponding random-element function. [[def-law-or-distribution-of-a-random-element]] [[thm-change-of-variables-for-expectation]]

[F6] The product of two probability measures exists and has the rectangle formula; the rectangle criterion then makes its coordinate projections independent random elements. [[thm-sigma-finite-product-measure-exists-is-rectangular-and-is-unique]] [[thm-rectangle-criterion-for-independent-random-elements]] [[def-independent-random-elements]] [[def-product-sigma-algebra-and-finite-product-sigma-algebras]]

[F7] A probability kernel is reversible with respect to a probability measure when its joint flow equals its coordinate transpose; this definition requires no density. [[def-general-state-reversibility-by-symmetric-flow-measure]]

[F8] Reversibility with respect to a probability measure implies its invariance. [[thm-general-state-reversibility-implies-invariance]]

[F9] Since $H$ is separable, norm balls centered at a countable dense subset with positive rational radii form a countable base of its induced metric topology: given $x\in U$ with $U$ open, choose $r>0$ with $B(x,r)\subseteq U$, then a dense point $d$ with $\|d-x\|<r/3$ and a positive rational $s$ with $\|d-x\|<s<r-\|d-x\|$; the triangle inequality gives $x\in B(d,s)\subseteq U$. Hence $H$ is second-countable, and the Borel sigma-algebra of $H\times H$ equals $\mathcal B(H)\otimes\mathcal B(H)$. [[def-separable-space]] [[def-second-countable-space]] [[thm-product-of-countable]] [[thm-rationals-countable]] [[lem-rat-embeds-dense]] [[lem-subset-of-countable]] [[def-hilbert-space]] [[def-norm-and-normed-space]] [[def-metric-ball]] [[def-metric-topology]] [[thm-metric-open-set-algebra]] [[lem-borel-product-of-second-countable-spaces]]

[F10] Continuous maps have Borel preimages of Borel sets. [[thm-continuous-preimages-of-borel-sets-are-borel]]

## Proof

**Given:** The hypotheses and notation in the Statement.

1.1 AC is assumed as recorded in [A1]. By [F9], $H$ is second-countable and the Borel sigma-algebra of $H\times H$ is the product sigma-algebra. Put $\rho=\sqrt{1-\beta^2}$ and let $\Lambda_0(du,dv)=\mu_0(du)Q_\beta(u,dv)$ be the joint flow of the reference probability and proposal kernel. It exists by [F4]. Take the product probability space $(H\times H,\mu_0\otimes\mu_0)$ and its coordinate random elements $U_0,\xi$; [F6] gives their independence and common law $\mu_0$. For every nonnegative product-Borel $h$, the iterated-integral identity in [F4] and [F1] give $$\int h\,d\Lambda_0=\int_H\int_H h(u,\rho u+\beta z)\,\mu_0(dz)\,\mu_0(du)=\mathbb E[h(U_0,\rho U_0+\beta\xi)],$$ where the proposal-row pushforward and the change-of-variables identity [F5] identify the flow integral with expectation under $U_0\sim\mu_0$, and the product joint law [F6] together with the measurable proposal map identifies that expectation with the displayed one. Thus $\Lambda_0$ is the law in [F3], so $\Lambda_0$ is symmetric. [A1, F1, F3, F4, F5, F6, given, construct]

1.2 Define $w(u)=e^{-\bar\Phi(u)}$ and $m(u,v)=\min\{w(u),w(v)\}$. For every $(u,v)$, if both potential values are finite, then $$w(u)\alpha(u,v)=e^{-\bar\Phi(u)}\min\{1,e^{\bar\Phi(u)-\bar\Phi(v)}\}=\min\{e^{-\bar\Phi(u)},e^{-\bar\Phi(v)}\}=m(u,v).$$ If either value is $+\infty$, the algorithm sets $\alpha(u,v)=0$ and $m(u,v)=0$, so the identity still holds. In particular, $m$ is a symmetric nonnegative Borel function. [A1, F2, given, algebra]

1.3 Set $r(u)=1-a(u)\in[0,1]$. The diagonal map $d(u)=(u,u)$ is continuous from $H$ into the product topology on $H\times H$, so by [F10] it is Borel. Thus $u\mapsto\mathbf1_C(u,u)=\mathbf1_C(d(u))$ is measurable for every Borel $C\subseteq H\times H$. By the diagonal term in [F1] and the joint-flow formula [F4], the rejection part of the target joint flow has mass on $C$ $$\Lambda_{\rm rej}(C)=\int_H\mathbf1_C(u,u)r(u)\,\mu(du).$$ It is symmetric because $\tau(d(u))=d(u)$ for every $u$: for every Borel $C$, $\mathbf1_{\tau^{-1}C}(u,u)=\mathbf1_C(u,u)$. [F1, F4, F10, given, algebra]

2.1 For Borel $C\subseteq H\times H$, the accepted part of the target joint flow is $$\Lambda_{\rm acc}(C):=\int_H\int_H\mathbf1_C(u,v)\alpha(u,v)Q_\beta(u,dv)\,\mu(du)=Z^{-1}\int_{H\times H}\mathbf1_C(u,v)m(u,v)\,\Lambda_0(du,dv).$$ The equality follows from the target density in [F2], identity 1.2, and the iterated-integral formula [F4]. Since $\Lambda_0$ is symmetric by step 1.1 and $m(u,v)=m(v,u)$, this accepted measure is symmetric. Indeed, for $\tau(u,v)=(v,u)$, the change-of-variables identity [F5] gives $$\int\mathbf1_C(u,v)m(u,v)\,d\Lambda_0=\int\mathbf1_C(v,u)m(v,u)\,d\Lambda_0=\int\mathbf1_{\tau^{-1}C}(u,v)m(u,v)\,d\Lambda_0.$$ Equality for every Borel $C$ is symmetry under $\tau$. [F2, F4, F5, step 1.1, step 1.2, algebra]

3.1 By the decomposition of $P_\beta$ in [F1] and the joint-flow identity [F4], $\Lambda_\beta=\Lambda_{\rm acc}+\Lambda_{\rm rej}$. The accepted and rejection pieces are symmetric by steps 2.1 and 1.3, hence $\Lambda_\beta$ is symmetric. By [F7], $P_\beta$ is reversible with respect to $\mu$. [F1, F4, F7, step 2.1, step 1.3, given]

4.1 The hypotheses of [F8] hold: [F1] gives a probability kernel and the algorithm gives the probability measure $\mu$. Therefore [F8] yields $\int_H P_\beta(u,A)\,\mu(du)=\mu(A)$ for every Borel $A$. The proof uses only the symmetric-flow identity; it establishes no uniqueness or convergence claim. [F1, F8, step 3.1, given] ∎

