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
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: Maarten V. de Hoop, Nikola B. Kovachki, Matti Lassas and Nicholas H.
        Nelsen, Extension and neural operator approximation of the electrical
        impedance tomography inverse map
      url: https://arxiv.org/pdf/2511.20361
      locator: "Theorem 4.8 and §5 numerical experiments, printed pp. 23–30: continuum
        existence theorem versus finite training and test sets."
    - title: Nikola Kovachki et al., On Universal Approximation and Error Bounds for
        Fourier Neural Operators
      url: https://jmlr.org/papers/volume22/21-0806/21-0806.pdf
      locator: Theorem 5 and statistical approximation discussion; no EIT
        finite-sample risk theorem.
    - title: Nikola B. Kovachki, Samuel Lanthaler and Hrushikesh Mhaskar, Data
        Complexity Estimates for Operator Learning
      url: https://arxiv.org/pdf/2405.15992
      locator: "Theorem 3.3 and proof, Propositions 3.8–3.9 and Appendix E, PDF
        pp.13–16 and 32–43: existing continuum-FNO learning and entropy
        estimates under quantitative approximation-class assumptions."
    - title: Philipp Grohs, Samuel Lanthaler and Margaret Trautner, Theory-to-Practice
        Gap for Neural Networks and Neural Operators
      url: https://arxiv.org/pdf/2503.18219
      locator: "Theorems 3.20–3.22, approximation-space hypotheses and Appendix B.6,
        PDF pp.23–28 and 40–41: sampling lower bounds for specified ReLU
        neural-operator classes and input measures."
---

## Open problem

Fix $d\ge2$, a bounded connected smooth domain $\Omega\subset(0,1)^d$, a fixed collar $\Omega'\Subset\Omega$, an admissible conductivity class $X_d(R)$ with fixed ellipticity and regularity parameters, a compact perturbation set $K\subset L^2(\partial\Omega\times\partial\Omega;\mathbb C)$, and a threshold $\delta\ge0$. Let $K_\delta=\{\eta\in K:\|\eta\|_2\le\delta\}$ and
$$\mathcal Z=\{(\kappa_\gamma+\eta,\gamma):\gamma\in X_d(R),\ \eta\in K_\delta\}$$
in $\mathcal H\times\mathcal Y$, where $\mathcal H=L^2(\partial\Omega\times\partial\Omega;\mathbb C)$ is viewed as a real Hilbert space, $\mathcal Y=L^2(\Omega;\mathbb R)$, and $\mathfrak R f=(\operatorname{Re}f,\operatorname{Im}f)\in L^2(\partial\Omega\times\partial\Omega;\mathbb R^2)$ is the isometric realification. Assume $\mathcal Z$ is nonempty and compact, and set $X=\{x\in\mathcal H:(x,y)\in\mathcal Z\text{ for some }y\in\mathcal Y\}$. Fix a smooth globally Lipschitz nonpolynomial activation $\sigma_0$.

Choose once and for all a finite smooth boundary chart family and square partition of unity as in the boundary chart-lifting lemma. For every positive finite channel count $c$, let $G_c$ be the componentwise application of this same scalar chart construction, so $G_c:L^2(\partial\Omega\times\partial\Omega;\mathbb R^c)\to L^2(\mathbb T^n;\mathbb R^{J^2c})$ for its fixed number $J^2$ of chart pairs. Each pointwise lift $S_0$ receives the two realified input channels; if its output has $c$ channels, take $E=G_c$. The family $(G_c)$, the chart weights and the output restriction $R$ to $\Omega$ are fixed and have no trainable parameters; $c$ is already part of the counted finite architecture index, not an additional scalar parameter. Write $n=2d-2$. The dimension-reduction layer $F$ has a matrix-valued kernel on $\mathbb T^{n-d}$; if $n=d$, take $F$ to be the identity. For each integer $s\ge1$ and $B>0$, define $\mathcal F_{s,B}\subset C(X,\mathcal Y)$ as the restrictions to $X$ of maps $x\mapsto\Phi(\mathfrak R x)$, where $\Phi$ is a generalized Fourier neural operator with the following finite parameterization:

1. The pointwise lift $S_0$ and output network $Q$ are fully connected finite-dimensional networks. At each point they receive the fixed ambient coordinate and the current real field vector; hidden affine layers are followed coordinatewise by $\sigma_0$, and the final layer is affine. Their depths, hidden widths and all variable output channel widths are at most $s$; the final output of $Q$ is the single real target channel.
2. The Fourier-operator stack has at most $s$ layers and at most $s$ channels in each layer. Each channel matrix is a trainable real matrix. Each Fourier multiplier has matrix coefficients $R_{\ell,k}$ supported on $\|k\|_\infty\le s$, with $R_{\ell,-k}=\overline{R_{\ell,k}}$ so real fields remain real. Each coordinate bias $b_\ell$ is a real trigonometric polynomial on $\mathbb T^n$ supported on the same finite mode range.
3. The dimension-reduction kernel is a real matrix-valued trigonometric polynomial
$$K(z)=\sum_{\|k\|_\infty\le s}K_ke^{2\pi i k\cdot z},\qquad K_{-k}=\overline{K_k},$$
with coefficients of the dimensions required by the adjacent channel counts.
4. The number of independent trainable real scalar coefficients in all pointwise networks, channel matrices, Fourier multipliers, coordinate biases, and dimension-reduction kernels together is at most $s$. For complex Fourier coefficients, independent real and imaginary parts are counted separately, subject to conjugate symmetry. Every trainable real scalar coefficient has absolute value at most $B$. The fixed activation, chart maps, partition weights, realification, restriction, and Fourier basis are not trainable parameters.

For each fixed $s$, only finitely many architecture index tuples occur; equip their disjoint union of bounded real parameter boxes with its Borel structure, and give $\mathcal F_{s,B}$ the Borel sigma-algebra induced by the supremum norm on $C(X,\mathcal Y)$. Consider only $s,B$ for which this class is nonempty and $\sup_{\Psi\in\mathcal F_{s,B},\,x\in X}\|\Psi(x)\|_{\mathcal Y}<\infty$. For $z=(x,y)\in\mathcal Z$ and $\Psi\in\mathcal F_{s,B}$, define $\ell(z,\Psi)=\|\Psi(x)-y\|_{\mathcal Y}^2$. For a Borel probability law $P$ on $\mathcal Z$, put $R_P(\Psi)=\mathbb E_{Z\sim P}\ell(Z,\Psi)$ and $\widehat R_N(\Psi)=N^{-1}\sum_{i=1}^N\ell(Z_i,\Psi)$ for iid $Z_i\sim P$. Determine the minimax excess-risk behavior
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

## Status

The question asks for a quantitative minimax characterization for this particular noisy EIT joint data set and bounded architecture. It does not assert that finite-sample learning theory for neural operators is absent. Kovachki–Lanthaler–Mhaskar already study continuum-FNO metric entropy and empirical-risk learning for operator approximation classes with a specified algebraic relation between model size and approximation error. Grohs–Lanthaler–Trautner prove sampling limitations for specified ReLU approximation classes and input measures. Their target families, activation hypotheses, sampling models and risks differ from the all-joint-laws excess-risk expression above; their bounds are not silently transferred to this EIT class.

There is also an established elementary estimation baseline. If a uniformly bounded model class has a finite uniform $\epsilon$-net of size $m$, empirical square-loss minimization over that finite list is a Borel learner, and its expected excess risk is at most $2A\sqrt{\log(2m)/(2N)}+2(C+D)\epsilon$, uniformly over all joint laws, where $C$ bounds model outputs, $D$ bounds targets and $A=(C+D)^2$. Thus deriving some finite-sample upper bound is not the unresolved claim. With fixed finite scalar parametrizations, sufficiently slow budget growth can also be obtained qualitatively by a diagonal choice of compact model classes and finite nets; this gives no efficient quantitative rate. The remaining requested analysis is matching upper and lower behavior for the specified EIT geometry and quantitative approximation versus the budgets $(s,B)$, which the continuum existence theorem alone does not provide. The deterministic reconstruction term remains $C_\star\omega_\star(\delta)$, with the corrected kernel modulus involving $\sqrt\delta$; its contribution to square risk is handled by squaring the reconstruction bound.

The nonempty compact support, Borel model-class convention, nonempty learner range and uniform output bound make the displayed risks finite and the infimum over Borel learners nonempty. The chart lift and restriction are fixed, and every learned layer, multiplier, bias and dimension-reduction kernel has the finite Fourier or affine parameterization counted in the statement. This source comparison, updated 19 October 2026, delimits the registered research question. It is not a certification that no matching result exists anywhere in the literature, and no generalization theorem is inferred from the EIT paper's finite numerical experiments.
