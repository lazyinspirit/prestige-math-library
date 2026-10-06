---
id: thm-plancherel-theorem-for-lca-groups
kind: theorem
title: The Plancherel theorem for locally compact abelian groups
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 15
deps: [def-axiom-of-choice, def-dependent-choice, def-l-p-space-as-a-quotient-by-null-functions, lem-lca-transform-range-is-dense-in-ltwo-of-the-dual, thm-jordan-von-neumann-polarization, thm-lca-plancherel-isometric-extension, thm-riesz-fischer-completeness-of-l-p]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)
    url: https://people.math.harvard.edu/~shlomo/212a/loomis.pdf
    locator: 'Section 36D, printed pp. 145-146: the unitary Plancherel theorem.'
  - title: Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C (course-hosted full text)
    url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
    locator: Appendix C.3, printed p. 435, paragraph preceding Theorem C.8 and Theorem C.8 (Parseval).
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and Dependent Choice ([[def-dependent-choice]]). Let $G$ be a locally compact Hausdorff abelian group with Haar measure $m_G$ and dual $\widehat G$ carrying the compatible dual Haar normalisation. Then the Fourier transform extends uniquely to a unitary operator $$\mathcal F:L^2(G,m_G)\to L^2(\widehat G,m_{\widehat G}),$$ that is, $\langle\mathcal Ff,\mathcal Fg\rangle=\langle f,g\rangle$ for all $f,g\in L^2(G)$, and $\mathcal F$ is bijective.

## Facts & Assumptions

**Given:** A locally compact Hausdorff abelian group $G$ with Haar measure $m_G$, dual $\widehat G$ with the compatible dual Haar measure, and the isometric extension $\mathcal F$ of the Fourier transform.

[F1] The Fourier transform restricts to a linear isometry $\mathcal F_0$ on the dense subspace $L^1\cap L^2(G)\subseteq L^2(G)$ and has a unique linear isometric extension $\mathcal F:L^2(G)\to L^2(\widehat G)$ with $\|\mathcal Ff\|_2=\|f\|_2$. ([[thm-lca-plancherel-isometric-extension]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F2] The range of $\mathcal F$ is dense in $L^2(\widehat G)$. ([[lem-lca-transform-range-is-dense-in-ltwo-of-the-dual]])

[F3] $L^2(G,m_G)$ and $L^2(\widehat G,m_{\widehat G})$ are complete; a linear isometry from a complete space has closed range, and a closed dense subspace is the whole space. ([[thm-riesz-fischer-completeness-of-l-p]])

[F4] If a linear map between inner product spaces satisfies $\|Tu\|=\|u\|$ for all $u$, then $\langle Tu,Tv\rangle=\langle u,v\rangle$ for all $u,v$: the inner product is recovered from the norm by the polarisation formula. ([[thm-jordan-von-neumann-polarization]])

## Proof

1.1 The range of $\mathcal F$ is closed in $L^2(\widehat G)$: if $\mathcal Ff_n\to h$ then $\|f_n-f_m\|_2=\|\mathcal Ff_n-\mathcal Ff_m\|_2\to0$, so $(f_n)$ is Cauchy and converges to some $f\in L^2(G)$ by completeness, and continuity of $\mathcal F$ gives $h=\mathcal Ff$. [F1, F3]

2.1 The range is dense by [F2], and a closed dense subspace equals the whole space, so $\mathcal F$ is surjective; by [F4] the isometry $\mathcal F$ also preserves inner products, so $\mathcal F$ is unitary. This is the statement. [F2, F3, F4, step 1.1] ∎