---
id: lem-localized-curved-patch-measure-transform-decay
kind: lemma
title: Decay of a localized measure on a curved graph patch
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase
- lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph
- lem-smooth-euclidean-hypersurface-graph-and-localization
- def-euclidean-hypersurface-normal-shape-operator-and-curvature
- lem-schwartz-cutoffs-from-the-standard-smooth-step
- thm-euclidean-heine-borel-pseudocompactness-and-extreme-values
- def-countable-choice
- def-nonnegative-lebesgue-integral
- lem-surface-integral-is-independent-of-c-one-boundary-charts
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Mark Williams, Notes on harmonic analysis
    url: https://markwilliams.web.unc.edu/wp-content/uploads/sites/19674/2022/01/notesonharmonicanalysisB.pdf
    locator: Proposition 11.3 and its proof, printed p.72, equations (11.4)–(11.7); parameter-uniform localization is supplied locally.
---

## Statement

Assume Countable Choice. Let $n\ge2$, let $U\subseteq\mathbb R^{n-1}$ be open, $h\in C^\infty(U)$, $a\in C_c^\infty(U)$, let $S=\operatorname{graph}h$ carry the graph surface measure $\sigma$, and put $d\mu:=a(y)\sqrt{1+|\nabla h(y)|^2}\,dy$ (the localization of $\sigma$ by the pullback of $a$). If $\det D^2h\neq0$ on $\operatorname{supp}a$, then $|\check\mu(x)|=\left|\int e^{2\pi i(x'\cdot y+x_nh(y))}a(y)\sqrt{1+|\nabla h(y)|^2}\,dy\right|\le C_a(1+|x|)^{-(n-1)/2}$ for all $x=(x',x_n)\in\mathbb R^n$, with $C_a$ depending on $a,h,n$. More generally, if $S$ is a smooth hypersurface and $\mu=\varphi\sigma$ for $\varphi\in C_c^\infty(\mathbb R^n)$ whose restriction to $S$ has compact support in $S$, with the Gaussian curvature of $S$ nonvanishing on $S\cap\operatorname{supp}\varphi$, then the same decay holds.

## Facts & Assumptions

**Given:** The graph, amplitude, nondegenerate Hessian on its compact support, and Countable Choice in the statement.

[F1] Nonstationary phase gives arbitrary inverse powers of the parameter; near one nondegenerate stationary point stationary phase gives the power $-(n-1)/2$, with constants controlled by finite derivative bounds, inverse Hessian bounds and the gradient away from the point. ([[lem-stationary-phase-for-a-nondegenerate-compactly-supported-phase]])

[F2] Smooth inverse/implicit bootstrap, graph charts and compactly supported finite localization follow from earlier Euclidean calculus. ([[lem-smooth-euclidean-hypersurface-graph-and-localization]])

[F3] Graph Hessian nondegeneracy is equivalent to nonvanishing extrinsic Gaussian curvature, independent of local normal orientation. ([[lem-shape-operator-and-gauss-kronecker-curvature-of-a-graph]], [[def-euclidean-hypersurface-normal-shape-operator-and-curvature]])

[F4] Smooth cutoffs, compactness and graph surface density are available. ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]], [[thm-euclidean-heine-borel-pseudocompactness-and-extreme-values]], [[lem-surface-integral-is-independent-of-c-one-boundary-charts]])

[A1] Countable Choice is assumed. ([[def-countable-choice]])

## Proof

**Proof technique:** direct; use finitely many neighbourhoods of directions and retain stationary points in slightly enlarged spatial patches.

1.1 Put $d=n-1$, $b=a\sqrt{1+|\nabla h|^2}$ and $K=\operatorname{supp}a$. Choose a compact neighbourhood $K^+$ of $K$ inside $U$ on which $D^2h$ is invertible. This exists by continuity and a finite cover of $K$. Every derivative of $h$ needed below is bounded there. For $x=\rho\omega$, $\rho\ge1$ and $\omega\in S^{n-1}$, the phase is $\psi_\omega(y)=\omega'\cdot y+\omega_nh(y)$ and the integral is $\int e^{2\pi i\rho\psi_\omega}b$. Its gradient is $\omega'+\omega_n\nabla h$. At a zero in $K^+$, $|\omega_n|=(1+|\nabla h|^2)^{-1/2}$, so the Hessian $\omega_nD^2h$ is invertible with uniformly bounded inverse. [given, F3, F4, algebra]

2.1 Fix a direction $\omega_0$. Its zeros in $K^+$ are isolated by the inverse theorem in [F2]. Only finitely many lie in a smaller compact neighbourhood of $K$: otherwise compactness gives an accumulating zero in $K^+$, contradicting local invertibility. Surround these finitely many zeros by disjoint small balls compactly contained in $K^+$, on which $\nabla h$ is injective; choose smaller concentric balls around the zeros. Every remaining point of $K$ has nonzero phase gradient at $\omega_0$. A fixed finite smooth partition on a neighbourhood of $K$ therefore splits $b$ into amplitudes supported either in these zero balls or on a compact set where $|\nabla\psi_{\omega_0}|\ge c>0$. [F2, F4, step 1.1]

3.1 Shrink a neighbourhood $V$ of $\omega_0$ in the direction sphere. On the nonstationary support, continuity keeps the gradient at least $c/2$. For each zero ball, the implicit theorem provides a smooth critical point $z(\omega)$ remaining in its smaller ball for $\omega\in V$. Injectivity of $\nabla h$ and $\omega_n\ne0$ ensure it is the only critical point in the larger ball. By shrinking the ball and $V$, Taylor's formula makes $|\nabla\psi_\omega(y)|\ge c_0|y-z(\omega)|$ near that point uniformly: subtract the gradient at $z$ and use uniform closeness of the Hessian to its invertible value at $(\omega_0,z(\omega_0))$. On the compact remainder of the ball the gradient stays bounded below after further shrinking $V$. All required derivatives and Hessian inverses are uniformly bounded. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Apply [F1] on these supports. The nonstationary amplitudes give $O(\rho^{-N})$ uniformly on $V$. The zero-ball amplitudes give $O(\rho^{-d/2})$ uniformly, even when the critical point lies outside the amplitude support: add a fixed smooth bump supported in that ball, equal to one on its smaller ball and multiplied by a constant larger than the amplitude bound, then subtract the same bump. Each of the two new amplitudes has the critical point in the interior of its support and uniformly bounded derivatives, so the stated stationary estimate applies to each; the local proof uses only the phase on that ball. Thus the original amplitude has the same bound by subtraction. This also handles critical points entering or leaving the original support. [F1, F4, step 3.1, algebra]

5.1 The neighbourhoods $V$ constructed for each direction cover the compact sphere, so finitely many suffice. Taking the maximum of their finite constants gives $|\check\mu(x)|\le C|x|^{-d/2}$ for $|x|\ge1$. For every $x$, the pointwise estimate $|\check\mu(x)|\le\int|b(y)|dy<\infty$ follows from unit modulus of the exponential and bounded compact support. Combining the two bounds yields $C_a(1+|x|)^{-d/2}$ after increasing $C_a$. No constancy of the number of critical points over the whole sphere is asserted or used. [F4, step 1.1, step 4.1, algebra]

6.1 For the general clause, $K=\operatorname{supp}_S(\varphi|_S)$ is compact by the explicit hypothesis. Apply [F2] to $K$, and [F3] to its graph charts; shrink the charts to retain nondegenerate Hessians on the compact supports of the localized weights. The graph amplitudes $a_j=(\chi_j\varphi)\circ X_j$ are smooth and compactly supported in their parameter domains. The graph measure formula in [F4] writes $\varphi\sigma$ as their finite sum. A rigid motion rotates the frequency and contributes only a scalar exponential of modulus one, so step 5.1 applies without changing $|x|$. Summing proves the asserted general decay. [F2, F3, F4, A1, step 5.1] ∎
