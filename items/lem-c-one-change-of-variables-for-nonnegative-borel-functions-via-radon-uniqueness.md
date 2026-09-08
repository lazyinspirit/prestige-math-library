---
id: lem-c-one-change-of-variables-for-nonnegative-borel-functions-via-radon-uniqueness
kind: lemma
title: Borel change of variables from the compact-support formula and Radon uniqueness
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  audited: 2026-09-09
  judge:
    model: "gpt-5.6-terra"
    verdict: pass
    date: 2026-09-08
sources:
  references:
    - title: Hunter, Notes on Partial Differential Equations
      url: https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf
      locator: Hunter, §1.11 Theorem 1.44, printed p. 17 (PDF p. 23), for the substitution statement. The Darboux bridge and Radon-uniqueness proof below are local, and do not consume the defective published compact-support Lebesgue or measurable-C1 proofs.
status: published
origin: pipeline
proof_strategy: direct
deps: ["thm-indefinite-integral-of-a-nonnegative-function-is-a-measure", "cor-second-countable-lch-locally-finite-borel-measures-are-regular", "thm-rmk-uniqueness-among-radon-measures", "thm-monotone-convergence-for-the-integral", "thm-continuous-preimages-of-borel-sets-are-borel", "thm-arithmetic-and-lattice-operations-preserve-measurability", "prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets", "thm-euclidean-heine-borel-pseudocompactness-and-extreme-values", "def-countable-choice", "cor-change-of-variables-for-compactly-supported-functions", "thm-continuous-on-a-rectangle-is-riemann-integrable", "thm-multidimensional-darboux-equals-riemann", "def-multidimensional-darboux-sums", "thm-lebesgue-measure-of-a-box-of-every-kind", "prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null", "prop-order-and-scalar-rules-for-the-nonnegative-integral", "thm-linearity-of-the-lebesgue-integral-on-l-one"]
---

## Statement

Assume $\mathrm{AC}_\omega$. Let $m\ge1$, let U,V be open subsets of $\mathbb R^m$, and let $T:U\to V$ be a $C^1$ diffeomorphism. For every nonnegative Borel $h:V\to[0,\infty]$, $\int_V h(y)\,dy=\int_U h(T(x))|\det DT(x)|\,dx$, with equality in $[0,\infty]$ and $0\cdot\infty=0$. This statement concerns Borel h; no completed-measurable substitution is asserted.

## Facts & Assumptions

**Given:** Assume $\mathrm{AC}_\omega$. Let $m\ge1$, U,V open in $\mathbb R^m$, $T:U\to V$ a $C^1$ diffeomorphism, and $h:V\to[0,\infty]$ Borel. Put $J=|\det DT|$.

[F1] Continuous functions on closed nondegenerate boxes are Riemann integrable. ([[thm-continuous-on-a-rectangle-is-riemann-integrable]]).

[F2] Riemann integrability is equivalent to Darboux integrability. ([[thm-multidimensional-darboux-equals-riemann]]).

[F3] Each grid cell has Lebesgue measure equal to its geometric volume. ([[thm-lebesgue-measure-of-a-box-of-every-kind]]).

[F4] Coordinate faces have measure zero under AC_omega. ([[prop-degenerate-boxes-and-coordinate-hyperplanes-are-lebesgue-null]]).

[F5] Pointwise bounds and nonnegative scaling pass to integrals. ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]]).

[F6] Integrable real functions have linear integrals. ([[thm-linearity-of-the-lebesgue-integral-on-l-one]]).

[F7] An injective C1 map with invertible derivative admits compact-support Riemann substitution. ([[cor-change-of-variables-for-compactly-supported-functions]]).

[F8] Continuous maps pull back Borel sets to Borel sets. ([[thm-continuous-preimages-of-borel-sets-are-borel]]).

[F9] Integrating a nonnegative measurable density defines a measure. ([[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]]).

[F10] Compact Euclidean sets have finite Lebesgue measure under AC_omega. ([[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F11] Compact-finite Borel measures on second-countable LCH spaces are regular. ([[cor-second-countable-lch-locally-finite-borel-measures-are-regular]]).

[F12] Nonnegative increasing simple approximations converge in integral. ([[thm-monotone-convergence-for-the-integral]]).

[F13] Equality of compactly supported continuous integrals identifies Radon measures. ([[thm-rmk-uniqueness-among-radon-measures]]).

[F14] Pointwise products of measurable functions are measurable with the zero-times-infinity convention. ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

## Proof

1.1 First let k be a real continuous compactly supported function on an open Euclidean set W. Its zero extension is Borel by F8 once continuity below is established. Its zero extension is continuous: its compact support has a positive distance from the closed complement of W, and k vanishes outside that support. On a closed nondegenerate bounding box Q the extension is Riemann integrable by F1 and Darboux integrable by F2. For a grid partition, assign each point to one adjacent cell to disjointify the cells; all removed faces are null by F4. The step functions formed with the infimum and supremum of k on each closed cell bound k, and their integrals are precisely the lower and upper Darboux sums by F3. Add a constant making k and both step functions nonnegative. F5 squeezes its Lebesgue integral between the Darboux sums, whose gap tends to zero by F2. All are bounded on a finite-measure box, so F6 subtracts the added constant. Thus the Riemann and Lebesgue integrals of k agree. [given, F1, F2, F3, F4, F5, F6, F8]

1.2 For Borel A in U set $\mu(A)=\lambda_m(T(A))$ and $\nu(A)=\int_A J\,d\lambda_m$. Since $T(A)=(T^{-1})^{-1}(A)$ is Borel by F8 and T is injective, images preserve disjoint unions; hence mu is a Borel measure. F9 makes nu a Borel measure. For compact K, T(K) is compact and J is bounded on K, so F10 gives $\mu(K)<\infty$ and $\nu(K)\le\sup_KJ\lambda_m(K)<\infty$ (empty K gives zero). U is second-countable and locally compact Hausdorff as an open Euclidean set. F11 therefore makes both measures Radon. [given, F8, F9, F10, F11]

2.1 For $f\in C_c(V)$, $k(x)=f(T(x))J(x)$ with $J=|\det DT|$ has compact support contained in $T^{-1}(\operatorname{supp}f)$ and is continuous, since J is continuous and T is a homeomorphism. Extend f and k by zero. T is injective C1 with invertible derivative, so F7 applies to these Riemann-integrable extensions. Step 1.1 identifies both resulting integrals as Lebesgue integrals and gives $\int_V f=\int_U(f\circ T)J$. [step 1.1, F7]

2.2 For nonnegative Borel psi on U, the definitions give $\int\psi\,d\mu=\int_V\psi(T^{-1}(y))\,dy$ and $\int\psi\,d\nu=\int_U\psi J\,dx$ first when psi is an indicator, then by finite additivity for nonnegative simple psi. For general psi use $s_k=2^{-k}\lfloor2^k\min(\psi,k)\rfloor$, taking min(infinity,k)=k. These are Borel simple, increase to psi, and their compositions and products with positive J increase to the required integrands. F12 proves both identities. F8 and F14 verify the measurability of every composition and product. Subtracting positive and negative parts extends the identities to real compact-support continuous psi, whose absolute integrals are finite by step 1.2. [step 1.2, F8, F12, F14]

3.1 For $\varphi\in C_c(U)$ take $f=\varphi\circ T^{-1}\in C_c(V)$. Step 2.1 and the two identities in step 2.2 give $\int\varphi\,d\mu=\int_V f=\int_U(f\circ T)J=\int\varphi\,d\nu$. The Radon hypotheses were proved in step 1.2, so F13 yields mu=nu on all Borel subsets of U. [step 2.1, step 1.2, step 2.2, F13]

4.1 For the stated nonnegative Borel h put $\psi=h\circ T$, Borel by F8. The first identity in step 2.2 gives $\int_Vh=\int_U\psi\,d\mu$; step 3.1 replaces mu by nu, and the second identity gives $\int_U\psi\,d\nu=\int_U(h\circ T)J$. These are identities of nonnegative extended integrals and involve no subtraction of infinities. If U is empty then V is empty and both integrals are zero. [step 2.2, step 3.1, F8] ∎

## Source notes

Hunter, §1.11 Theorem 1.44, printed p. 17 (PDF p. 23), for the substitution statement. The Darboux bridge and Radon-uniqueness proof below are local, and do not consume the defective published compact-support Lebesgue or measurable-C1 proofs.
