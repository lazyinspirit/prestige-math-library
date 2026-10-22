---
id: op-ip-finite-sample-generalization-of-neural-inverse-maps
kind: open-problem
title: Finite-sample generalization of learned inverse maps
status: draft
origin: pipeline
pipeline_run: inverse-problems-knot-theory-all-109-2026-10-19
dependency_level: 12
deps:
  - def-ip-calderon-admissible-conductivity-class
  - def-ip-generalized-fourier-neural-operator
  - def-ip-inverse-risk-under-train-and-test-laws
  - def-ip-mean-zero-ntd-and-smoothed-kernel-observation
  - lem-ip-finite-dimensional-neural-universal-approximation
  - thm-ip-eit-fno-noise-robust-existence
proof_strategy: not-applicable
provenance:
  statement: literature-derived
  proof: not-applicable
sources:
  references:
    - title: "Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H. Nelsen, Extension and neural operator approximation of the electrical impedance tomography inverse map"
      url: "https://arxiv.org/pdf/2511.20361"
      locator: "Theorem 4.8 and §5 numerical experiments, printed pp. 23–30: continuum existence theorem versus finite training and test sets."
    - title: "Nikola Kovachki et al., On Universal Approximation and Error Bounds for Fourier Neural Operators"
      url: "https://jmlr.org/papers/volume22/21-0806/21-0806.pdf"
      locator: "Theorem 5 and statistical approximation discussion; no EIT finite-sample risk theorem."
---

## Open problem

Fix the continuum EIT data set $\mathcal Z=\{(\kappa_\gamma+\eta,\gamma):\gamma\in X_d(R),\ \eta\in K_\delta\}$ in $\mathcal H\times\mathcal Y$, where $\mathcal H=L^2(\partial\Omega\times\partial\Omega)$ is the input space and $\mathcal Y=L^2(\Omega)$ is the target space. Assume $\mathcal Z$ is nonempty and compact, and set $X=\{x\in\mathcal H:(x,y)\in\mathcal Z\text{ for some }y\in\mathcal Y\}$. Fix a smooth globally Lipschitz nonpolynomial activation and the generalized-FNO architecture on the boundary manifold. For integers $s\ge1$ and $B>0$, let $\mathcal F_{s,B}\subset C(X,\mathcal Y)$ be the restrictions to $X$ of generalized FNOs with depth, channel width, Fourier cutoff and number of trainable scalar parameters at most $s$, every trainable scalar coefficient bounded in absolute value by $B$, and coordinate bias functions restricted to Fourier modes of cutoff at most $s$, where $C(X,\mathcal Y)$ denotes continuous maps with the supremum norm. Consider only $s,B$ for which $\mathcal F_{s,B}$ is nonempty and $\sup_{\Psi\in\mathcal F_{s,B},\,x\in X}\|\Psi(x)\|_{\mathcal Y}<\infty$. Give $\mathcal F_{s,B}$ the Borel sigma-algebra induced by this norm. For $z=(x,y)\in\mathcal Z$ and $\Psi\in\mathcal F_{s,B}$, define $\ell(z,\Psi)=\|\Psi(x)-y\|_{\mathcal Y}^2$. For a Borel probability law $P$ on $\mathcal Z$, put $R_P(\Psi)=\mathbb E_{Z\sim P}\ell(Z,\Psi)$ and $\widehat R_N(\Psi)=N^{-1}\sum_{i=1}^N\ell(Z_i,\Psi)$ for iid $Z_i\sim P$. Determine the minimax excess-risk behavior
$$\mathfrak R_N(s,B):=\inf_{\widehat\Psi_N}\sup_{P\in\mathcal P(\mathcal Z)}\mathbb E_{P^N}\left[R_P(\widehat\Psi_N)-\inf_{\Psi\in\mathcal F_{s,B}}R_P(\Psi)\right],$$
where $\mathcal P(\mathcal Z)$ is the set of Borel probability laws on $\mathcal Z$ and the infimum is over Borel learners $\widehat\Psi_N:\mathcal Z^N\to\mathcal F_{s,B}$. Characterize growth regimes $s=s_N$, $B=B_N$ in which estimation and continuum approximation errors can be balanced while retaining the deterministic noise term $C_\star\omega_\star(\delta)$.

## Open problem references

[[thm-ip-eit-fno-noise-robust-existence|The continuum noise-robust existence statement.]]

[[def-ip-inverse-risk-under-train-and-test-laws|The convention for expected loss under Borel joint input-target laws.]]

[[def-ip-calderon-admissible-conductivity-class|The dimension-dependent admissible conductivity class X_d(R).]]

[[def-ip-mean-zero-ntd-and-smoothed-kernel-observation|The mean-zero smoothed NtD kernel kappa_gamma and noise convention.]]

[[def-ip-generalized-fourier-neural-operator|The generalized-FNO architecture on the boundary manifold.]]

[[lem-ip-finite-dimensional-neural-universal-approximation|The fixed activation hypotheses used by the FNO approximation route.]]

[de Hoop et al., Theorem 4.8 and §5 numerical experiments](https://arxiv.org/pdf/2511.20361)

## Source-status note

The cited EIT paper proves deterministic approximation existence and reports finite-data experiments; it does not establish the minimax risk formula above. This is evidence of the gap in that treatment, not a claim that no related finite-sample theorem exists elsewhere. The nonempty compact data set, supremum-norm Borel model class, nonempty parameter-bounded network class and uniform output bound make the risks and measurable-learning infimum well-defined; these conventions still need owner review. The learned-reconstruction A page and its estimator and risk-definition items are present as drafts; the item statements are marked AI-altered and are not treated as approved suppliers. The open status needs owner reconciliation and a broader literature review.
