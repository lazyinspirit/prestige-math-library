---
id: thm-pontryagin-biduality
kind: theorem
title: 'Pontryagin biduality: the evaluation map is a topological isomorphism'
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 17
deps: [def-axiom-of-choice, def-compact-space, def-compact-support-c-c-and-c-zero-on-an-lch-space, def-continuous-map-top, def-dependent-choice, def-fourier-transform-on-an-lca-group, def-hausdorff-space, def-integrable-real-and-complex-functions-and-their-integrals, def-left-haar-integral-and-left-haar-measure, def-locally-compact-space, def-neighbourhood-top, def-pontryagin-dual-and-compact-open-topology, def-radon-measure-on-an-lch-space, def-regular-complex-borel-measure-on-an-lch-space, def-subspace-topology-top, def-topological-group, lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure, lem-compactness-of-a-subspace-is-ambient, lem-continuity-is-local-and-pastes, lem-continuous-characters-separate-points-of-an-lca-group, lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group, lem-dual-homomorphisms-are-continuous-and-functorial, lem-dual-identity-neighbourhood-is-compact, lem-fourier-stieltjes-transforms-determine-finite-radon-measures, lem-local-compact-subgroups-of-hausdorff-groups-are-closed, lem-positive-compactly-supported-transform-bump-on-the-dual, lem-topological-group-translations-and-inversion, lem-translations-preserve-compactly-supported-continuous-functions, thm-c-c-is-dense-in-l-p-for-radon-measures, thm-closed-subspace-of-a-compact-space-is-compact, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation, thm-dual-of-an-lca-group-is-locally-compact-abelian]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)
    url: https://people.math.harvard.edu/~shlomo/212a/loomis.pdf
    locator: 'Section 37D, printed pp. 151-152: the evaluation map is an isomorphism and a homeomorphism onto the bidual.'
  - title: T. W. Koerner, Topological Groups (author lecture notes)
    url: https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf
    locator: 'Theorem 13.3, printed p. 26: Pontryagin biduality.'
  - title: Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C (course-hosted full text)
    url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
    locator: 'Appendix C.3, Theorem C.12, printed p. 437: Pontryagin duality. Theorem C.13 is the subsequent subgroup calculus.'
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and Dependent Choice ([[def-dependent-choice]]). Let $G$ be a locally compact Hausdorff abelian group with dual $\widehat G$ and bidual $\widehat{\widehat G}$. Then $$\Phi:G\to\widehat{\widehat G},\qquad \Phi(x)(\gamma):=\gamma(x),$$ is an isomorphism of topological groups.

## Facts & Assumptions

**Given:** A locally compact Hausdorff abelian group $G$ with dual $\widehat G$ and bidual $\widehat{\widehat G}$, and the evaluation map $\Phi$.

[F1] $\Phi$ is a continuous group homomorphism whose image is a subgroup of $\widehat{\widehat G}$; the sets $N_{x_1}(K,\epsilon)=\{x:|\chi(x)-\chi(x_1)|<\epsilon\text{ for all }\chi\in K\}$ over compact $K\subseteq\widehat G$ and $\epsilon>0$ form a neighbourhood basis at $x_1$, and $\Phi$ is a homeomorphism onto its image. ([[lem-dual-compact-sets-give-a-neighbourhood-basis-on-the-original-lca-group]], [[def-pontryagin-dual-and-compact-open-topology]], [[def-continuous-map-top]])

[F2] $\Phi$ is injective: continuous characters separate points. ([[lem-continuous-characters-separate-points-of-an-lca-group]])

[F3] The dual of a locally compact Hausdorff abelian group is again locally compact Hausdorff and abelian, so both $\widehat G$ and $\widehat{\widehat G}$ are locally compact Hausdorff abelian, and every point of $\widehat{\widehat G}$ has a neighbourhood basis of compact sets. ([[thm-dual-of-an-lca-group-is-locally-compact-abelian]], [[def-locally-compact-space]], [[def-neighbourhood-top]], [[def-hausdorff-space]])

[F4] A subgroup of a Hausdorff topological group which is locally compact in the subspace topology is closed. ([[lem-local-compact-subgroups-of-hausdorff-groups-are-closed]], [[def-subspace-topology-top]], [[def-topological-group]])

[F5] **Bump on the dual of $\widehat G$.** Applied to the locally compact abelian group $\widehat G$ with its Haar measure $m_{\widehat G}$: for $\xi_0\in\widehat{\widehat G}$ and a compact neighbourhood $K$ of $\xi_0$ there is $f\in L^1(\widehat G,m_{\widehat G})$ with $\widehat f\ge0$ on $\widehat{\widehat G}$, $\widehat f(\xi_0)>0$ and $\widehat f=0$ on $\widehat{\widehat G}\setminus K$, where $\widehat f(\xi)=\int_{\widehat G}f(\gamma)\overline{\xi(\gamma)}\,dm_{\widehat G}(\gamma)$. ([[lem-positive-compactly-supported-transform-bump-on-the-dual]], [[def-fourier-transform-on-an-lca-group]], [[lem-dual-identity-neighbourhood-is-compact]])

[F6] A finite regular complex Borel measure $\mu$ on $\widehat G$ whose inverse transform $x\mapsto\int_{\widehat G}\gamma(x)\,d\mu(\gamma)$ vanishes for every $x\in G$ is zero. ([[lem-fourier-stieltjes-transforms-determine-finite-radon-measures]], [[def-regular-complex-borel-measure-on-an-lch-space]])

[F7] For $f\in L^1(\widehat G)$ the measure $\mu=f\,m_{\widehat G}$ is finite and regular: approximate $f$ in $L^1$ by $h_n\in C_c(\widehat G)$, each $h_n\,m_{\widehat G}$ is finite regular as follows. For bounded $h$ supported in compact $K$, outer Haar approximations $O_1\supseteq E\cap K$ and $O_2\supseteq K\setminus E$ give an open superset $O_1\cup(\widehat G\setminus K)$ of $E$ and a compact subset $K\setminus O_2$ of $E$, with weighted errors bounded by $\|h\|_\infty$ times the arbitrarily small Haar errors ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-closed-subspace-of-a-compact-space-is-compact]]). Finally, $\|(f-h_n)m_{\widehat G}\|_{TV}=\|f-h_n\|_1\to0$, while total-variation limits of finite regular complex measures are finite regular (outer and inner regularity transfer from an approximant with error control). ([[thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]], [[def-radon-measure-on-an-lch-space]], [[thm-c-c-is-dense-in-l-p-for-radon-measures]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]])

## Proof

1.1 The evaluation map is a group homomorphism: $\Phi(x+y)(\gamma)=\gamma(x+y)=\gamma(x)\gamma(y)=(\Phi(x)\Phi(y))(\gamma)$ for all $x,y\in G$ and $\gamma\in\widehat G$; it is continuous and a homeomorphism onto its image by [F1], and injective by [F2]. Hence $\Phi(G)$ is a subgroup of $\widehat{\widehat G}$ isomorphic to $G$ as a topological group. [F1, F2]

2.1 Since $G$ is locally compact and $\Phi$ is a homeomorphism onto its image, the subgroup $\Phi(G)$ is locally compact in the subspace topology, so it is closed in the Hausdorff group $\widehat{\widehat G}$ by [F4]. [F1, F3, F4, step 1.1]

3.1 Suppose that $\Phi(G)\ne\widehat{\widehat G}$. Since $\Phi(G)$ is closed and $\widehat{\widehat G}$ is locally compact Hausdorff, pick $\xi_0\in\widehat{\widehat G}\setminus\Phi(G)$ and a compact neighbourhood $K$ of $\xi_0$ contained in $\widehat{\widehat G}\setminus\Phi(G)$. [F3, step 2.1]

4.1 Apply [F5] to $\widehat G$: there is $f\in L^1(\widehat G,m_{\widehat G})$ with $\widehat f\ge0$, $\widehat f(\xi_0)>0$ and $\widehat f=0$ on $\widehat{\widehat G}\setminus K$. [F5, step 3.1]

5.1 Let $\mu:=f\,m_{\widehat G}$, a finite regular complex measure on $\widehat G$ by [F7]. For every $x\in G$ the inverse transform of $\mu$ at $x$ is $\int_{\widehat G}\gamma(x)\,d\mu(\gamma)=\int_{\widehat G}f(\gamma)\gamma(x)\,dm_{\widehat G}(\gamma)=\widehat f\big(\Phi(-x)\big)=0$, because $\Phi(-x)\in\Phi(G)$ lies outside $K$ and $\widehat f$ vanishes off $K$. Hence [F6] gives $\mu=0$, so $f=0$ almost everywhere and therefore $\widehat f=0$ everywhere, contradicting $\widehat f(\xi_0)>0$. Thus $\Phi(G)=\widehat{\widehat G}$. [F6, F7, step 2.1, step 3.1, step 4.1]

6.1 Consequently $\Phi$ is an injective, continuous, open map onto $\widehat{\widehat G}$, hence an isomorphism of topological groups; this is the statement. [step 1.1, step 5.1] ∎