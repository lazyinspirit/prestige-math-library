---
id: cex-flat-hyperplanes-do-not-have-spherical-stationary-phase-decay
kind: counterexample
title: Flat hyperplanes do not have spherical stationary-phase decay
status: published
origin: pipeline
pipeline_run: frontier-38-owner-30
deps:
- lem-localized-curved-patch-measure-transform-decay
- cor-stein-tomas-for-compact-hypersurfaces-with-nonzero-curvature
- thm-fourier-transform-of-a-finite-complex-measure
- thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
- cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
- thm-eulers-formula
- cor-trigonometric-parity-and-pythagorean-identity
- thm-newton-leibniz-with-interior-derivative
- def-nonnegative-lebesgue-integral
- lem-schwartz-cutoffs-from-the-standard-smooth-step
- thm-tonelli-theorem-for-sigma-finite-product-spaces
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
  - title: K. Merz, Some notes on restriction theory
    url: https://www.iaa.tu-bs.de/konmerz/ss25/fr/material/NotesOnRestriction.pdf
    locator: '§3.4, Proposition 3.5 and proof, printed p.10: only p=1 restriction estimates survive on a flat patch. The sinc computation and smooth density witness are supplied locally.'
---

## Statement refuted

Assume Countable Choice and $n\ge2$. Statement refuted: the localized surface-measure decay $|\check\mu(x)|\le C(1+|x|)^{-(n-1)/2}$ holds for every compactly supported localized hypersurface measure, without a curvature hypothesis. Data: let $\Sigma=\{x\in\mathbb R^n:x_n=0\}$ and $d\mu=\mathbf 1_{[-1,1]^{n-1}}(\omega')\,d\omega'$; then $\check\mu(x)=\prod_{j<n}\frac{\sin 2\pi x_j}{\pi x_j}$ is independent of $x_n$ and equals $2^{n-1}$ at $x'=0$. Along the normal direction the transform does not decay at all, so the curvature hypothesis in [[lem-localized-curved-patch-measure-transform-decay]] and in [[cor-stein-tomas-for-compact-hypersurfaces-with-nonzero-curvature]] cannot be dropped. The same failure occurs for a smooth nonnegative compactly supported density of positive integral on the hyperplane. For the full hyperplane there is no extension bound $E:L^2(\Sigma)\to L^q(\mathbb R^n)$ for $1\le q<\infty$.

## Facts & Assumptions

[F1] For a finite measure the transform is $\check\mu(x)=\int e^{2\pi ix\cdot\omega}\,d\mu(\omega)$, and iterated integrals against the product measure on $\mathbb R^{n-1}$ agree with the product of one-dimensional integrals. ([[thm-fourier-transform-of-a-finite-complex-measure]], [[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]])

[F2] One-dimensional evaluation: for every real $u$, $\int_{-1}^1e^{2\pi iu t}\,dt=\frac{\sin 2\pi u}{\pi u}$ for $u\ne0$, and the value at $u=0$ is $2$; this follows from the fundamental theorem and Euler's formula with the parity identities for sine and cosine. ([[thm-newton-leibniz-with-interior-derivative]], [[thm-eulers-formula]], [[cor-trigonometric-parity-and-pythagorean-identity]], [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]])

[F3] The curvature-free assumption that is being refuted: the decay estimate $|\check\mu(x)|\le C(1+|x|)^{-(n-1)/2}$ for compactly supported localizations is the statement of the curved-patch lemma, whose hypothesis $\det D^2h\ne0$ fails identically on a flat hyperplane; the corollary similarly excludes zero curvature. ([[lem-localized-curved-patch-measure-transform-decay]], [[cor-stein-tomas-for-compact-hypersurfaces-with-nonzero-curvature]])

[F4] Smooth nonnegative ball cutoffs exist, and Tonelli applies to nonnegative integrands on Euclidean products. ([[lem-schwartz-cutoffs-from-the-standard-smooth-step]], [[thm-tonelli-theorem-for-sigma-finite-product-spaces]])

## Counterexample

**Given:** Countable Choice, $n\ge2$, the hyperplane $\Sigma=\{x_n=0\}$ with the measure $d\mu=\mathbf 1_{[-1,1]^{n-1}}(\omega')\,d\omega'$ on the parameter domain, and the function $g=\mathbf 1_{[-1,1]^{n-1}}$.

1.1 The transform of the flat measure. Since $\mu$ is carried by $\{\omega_n=0\}\cong[-1,1]^{n-1}$ with density $1$, [F1] gives $\check\mu(x)=\int_{[-1,1]^{n-1}}e^{2\pi ix'\cdot\omega'}\,d\omega'$: the variable $x_n$ does not appear. By Fubini over the product $[-1,1]^{n-1}$ and the one-dimensional evaluation [F2], $$\check\mu(x)=\prod_{j<n}\int_{-1}^{1}e^{2\pi ix_jt}\,dt=\prod_{j<n}\frac{\sin 2\pi x_j}{\pi x_j},$$ with each factor read as its continuous value $2$ at $x_j=0$. [F1, F2, algebra]

2.1 No decay along the normal. Setting $x'=0$ gives $\check\mu(0,x_n)=\prod_{j<n}2=2^{n-1}$ for every $x_n\in\mathbb R$, since the product is independent of $x_n$. Along the normal line $x'=0$ the function is the nonzero constant $2^{n-1}$, so for no constant $C$ can $|\check\mu(x)|\le C(1+|x|)^{-(n-1)/2}$ hold for all $x$: as $|x_n|\to\infty$ the right-hand side tends to $0$ while the left remains $2^{n-1}$. This refutes the curvature-free statement, and it shows that the hypothesis in [F3] is necessary. [F2, F3, step 1.1, algebra]

2.2 The sinc product is continuous and positive at $x'=0$, so its modulus is bounded below on a tangential ball of positive measure. It is independent of $x_n$; Tonelli on that ball times $\mathbb R$ gives $\int|Eg|^q=\infty$ for every $1\le q<\infty$, while $g\in L^2(\Sigma)$. To test the smooth-localization hypothesis itself, take a nonnegative nonzero $b\in C_c^\infty(\mathbb R^{n-1})$. Then $\int e^{2\pi ix'\cdot\omega'}b(\omega')\,d\omega'$ is independent of $x_n$ and equals $\int b>0$ at $x'=0$, so it also fails the decay estimate. It is the restriction of an ambient smooth cutoff times $b$, and hence is an allowed smooth localized measure on the flat graph. The compact-surface conclusion also needs curvature: a sphere can be modified on its upper graph by replacing $\sqrt{R^2-|y|^2}$ with $\chi(y)R+(1-\chi(y))\sqrt{R^2-|y|^2}$, where $\chi=1$ on a small ball and vanishes outside a larger ball strictly inside $|y|<R$. The resulting compact smooth embedded hypersurface has a flat open patch. A nonzero smooth density supported in that patch gives the same normal-coordinate independence and rules out every finite-$q$ extension estimate. [F1, F2, F3, F4, step 1.1, algebra]

3.1 Conclusion. Steps 1.1–2.2 exhibit the flat localization $d\mu=\mathbf 1_{[-1,1]^{n-1}}d\omega'$ whose transform does not decay in the normal direction and whose extension fails every finite-$q$ bound; in particular the curvature hypothesis in the curved-patch decay and in the compact-hypersurface corollary cannot be removed. [step 1.1, step 2.1, step 2.2] ∎
