# Round 1 proposed local repair — not applied or accepted

The ordinary punctured-stratum PB in the current carrier is unjustified. The proposed replacement uses transversality at the scaling center, where the factors are already distributions, not merely on a punctured causal stratum.

## Positive scaling bound at a transverse center

Let each u_j be a distribution on a neighborhood of 0 in R^D, already defined at 0, with ordinary sd at most a_j >= 0. Suppose for every choice xi_j in WF_0(u_j) union {0}, sum xi_j = 0 implies all xi_j = 0. Then the locally defined product has sd at most sum a_j.

Local proof to develop:

1. For any s > a_j, a compact localization v of u_j has rho^s v(rho .) uniformly bounded in S'. The local fixed-support estimate follows from Baire exactly as in lem-qft-test-frechet-uniform-scaling-order, with tests allowed to include 0. For the global tempered estimate, decompose a Schwartz test into a fixed ball plus annuli of radii R=2^k. On an annulus the change x=Ry gives the factor R^(D-s) and at most R^m from test derivatives, while a sufficiently high Schwartz weight contributes R^-L. The summable bound sum_k R^(D-s+m-L) is independent of rho; scales rho R bounded away from 0 are compact parameter families. This also handles compact localization derivatives.

2. Enlarge each WF_0 cone slightly while preserving joint no cancellation, choose a sufficiently small compact localization, and choose a smooth degree-zero Fourier cone cutoff q (smoothed near bounded frequencies) equal to 1 around the singular directions. The complementary Fourier part (1-q) vhat is Schwartz by the WF definition and localization, including all frequency derivatives (insert coordinate powers in the localization). Its inverse Fourier transform is Schwartz and its scaled family tends to zero in C^infinity locally after rho^s, because s>0. The singular Fourier part q vhat has support in the enlarged cone and its scaled family is uniformly tempered by step 1.

3. A uniformly tempered Fourier family supported in cone C has uniformly rapidly decreasing compactly localized Fourier transforms on every closed cone separated from C: pair it with q_1(eta) chihat(xi-eta), where q_1=1 near C. Separation gives |xi-eta| >= c(|xi|+|eta|) outside bounded frequencies. All Schwartz seminorms of this test kernel decay arbitrarily in xi. Thus rho^s u_j(rho .) has uniform rapid-decay cone seminorms outside C_j, as well as a fixed uniform local polynomial Fourier bound. Using a smaller exponent between a_j and s upgrades these bounds to convergence to 0.

4. In the local Fourier convolution for the product, no cancellation implies that either the sum of frequencies has size comparable to their total size, or one factor lies in a regular cone. In the first region the Fourier transform of the testing function supplies arbitrary decay; in the second the regular factor supplies it. Uniform polynomial bounds on all other factors then give an integrable bound. Pointwise convergence of localized Fourier transforms and dominated convergence show rho^(sum s_j) product_j u_j(rho .) -> 0. Let s_j decrease to a_j.

## Application to fixed scalar data, without changing its Definition

For a causal split I | J, use the globally defined translation invariant distributions t_I and t_J supplied at lower orders, tensorized in separate vertex blocks, and cross-edge kernels derivative^alpha W(x_i,x_j), all oriented from I to J. Translation invariance gives sum_{i in I} xi_i=0 for every WF tuple of t_I; similarly for J. At the full diagonal each nonzero cross-edge wavefront contributes a future null covector at I and its negative at J. The sum over I cannot vanish unless every cross-edge covector is zero, since the future cone is pointed. The remaining block wavefront tuples cannot cancel because their coordinate blocks are disjoint. Thus the preceding full-center product bound applies. No hypothesis concerning the directional scaling behavior of an arbitrary partial-diagonal extension is needed.

Linear edge pullback preserves ordinary scaling upper bound and derivatives add their order. Lower-block distributions have finite scaling upper bounds by induction and are constant in their center coordinates. Therefore the causal expression has finite scaling upper bound b_I+b_J+sum_cross(2+|alpha|). For primitive graphs the induction uses the edge engineering bound throughout and yields 2|E|+sum |alpha|. Finite local delta derivatives at proper subgraphs have finite upper bounds and yield the asserted finite nonprimitive bound.

Choose a smooth partition on the relative unit sphere subordinate to the causal split cover, and extend each function homogeneously with degree 0. This is a finite angular partition on punctured relative space. On tests supported away from 0, multiplication preserves the same upper scaling bound because the angular cutoff is invariant under dilation. The finite sum reconstructs the glued off-diagonal coefficient. Ordinary point extension and translation lift complete the recursion; global translation invariance controls the total WF sum and therefore the output microcausality.

## Actual source-reading limits

Read actual local carriers: graph lemma, local time-ordering definition, induction theorem, composition proposition, Euclidean example, wavefront product theorem; published fixed-support scaling lemma and listed Fourier/scaling definitions/results. Personally inspected BF full local extracted text sections 6.1–7 and immediately adjacent point-extension discussion. BF Lemma 6.4 asserts the free directional degree without displaying its proof; Theorem 6.9 explicitly omits stability of scaling degree under extension. Neither omission is claimed locally reconstructed by citation. The proposal instead uses its causal split equation (54) with full-center Fourier estimates proved above.

No source or current manifest changes yet. This research file is a proposal, not independent acceptance, readiness, recertification, or a gate result.
