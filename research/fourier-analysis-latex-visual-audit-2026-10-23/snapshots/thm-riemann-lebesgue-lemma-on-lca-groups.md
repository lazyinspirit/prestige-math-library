---
id: thm-riemann-lebesgue-lemma-on-lca-groups
kind: theorem
title: Riemann-Lebesgue lemma on LCA groups
dependency_level: 6
deps:
- def-fourier-transform-on-an-lca-group
- lem-lca-translations-and-normalised-local-approximate-identities
- lem-nonzero-multiplicative-functionals-on-lca-lone-are-fourier-evaluations
- lem-lca-lone-character-topology-is-the-compact-open-topology
- lem-lca-scalar-unitization-character-space-and-spectrum
- lem-character-evaluation-pairing-is-jointly-continuous
- def-pontryagin-dual-and-compact-open-topology
- def-compact-support-c-c-and-c-zero-on-an-lch-space
- lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets
- thm-c-c-is-dense-in-l-p-for-radon-measures
- def-gelfand-transform
- thm-maximal-ideal-space-is-compact-hausdorff
- def-dependent-choice
- def-axiom-of-choice
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: "Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)"
    url: "https://people.math.harvard.edu/~shlomo/212a/loomis.pdf"
  - title: "Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C.2-C.3 (course-hosted full text)"
    url: "https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf"
status: published
origin: pipeline
proof_strategy: direct
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and Dependent Choice ([[def-dependent-choice]]). Let $G$ be a locally compact Hausdorff abelian group with Haar measure $m_G$ and dual $\widehat G$. For every $f\in L^1(G,m_G)$ its Fourier transform satisfies
$$\widehat f\in C_0(\widehat G),\qquad \|\widehat f\|_\infty\le\|f\|_1 .$$
Thus $f\mapsto\widehat f$ maps $L^1(G,m_G)$ into the Banach space $C_0(\widehat G)$, and the vanishing at infinity is uniform, not merely along sequences.

## Facts & Assumptions

**Given:** The Axiom of Choice and Dependent Choice, a locally compact Hausdorff abelian group $G$ with Haar measure $m_G$, its dual $\widehat G$, and $f\in L^1(G,m_G)$.

[F1] The Fourier transform is $\widehat f(\gamma)=\int_Gf(x)\overline{\gamma(x)}\,dm_G(x)$, it is well defined on $L^1(G,m_G)$ and linear, and $|\widehat f(\gamma)|\le\|f\|_1$ for every $\gamma$ ([[def-fourier-transform-on-an-lca-group]]).

[F2] For $g\in C_c(G;\mathbb C)$ the support of $g$ is compact with $m_G(\operatorname{supp}g)<+\infty$; the evaluation pairing $(\gamma,x)\mapsto\gamma(x)$ is jointly continuous; and the compact-open topology of $\widehat G$ is the topology of uniform convergence on compact subsets of $G$ ([[def-pontryagin-dual-and-compact-open-topology]], [[lem-character-evaluation-pairing-is-jointly-continuous]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]]).

[F3] Real $C_c(G)$ is dense in real $L^1(G,m_G)$. Applying this separately to $\operatorname{Re}f$ and $\operatorname{Im}f$ gives $a_n,b_n\in C_c(G;\mathbb R)$ with both $L^1$ errors tending to zero; hence $g_n=a_n+ib_n\in C_c(G;\mathbb C)$ satisfies $\|f-g_n\|_1\le\|\operatorname{Re}f-a_n\|_1+\|\operatorname{Im}f-b_n\|_1\to0$ ([[thm-c-c-is-dense-in-l-p-for-radon-measures]]).

[F4] Assume the Axiom of Choice and Dependent Choice. In $A^+=\mathbb C\oplus A$ the characters are exactly $q(z,h)=z$ and $h_\gamma^+(z,h)=z+\widehat h(\gamma)$, the Gelfand transform $\chi\mapsto\chi(0,f)$ of $(0,f)$ is continuous on the compact Hausdorff space $\Delta(A^+)$, $q(0,f)=0$ and $h_\gamma^+(0,f)=\widehat f(\gamma)$, and $\Delta(A^+)$ is homeomorphic to $\widehat G\cup\{q\}$ with $\widehat G$ carrying its compact-open topology ([[lem-lca-scalar-unitization-character-space-and-spectrum]], [[def-gelfand-transform]], [[thm-maximal-ideal-space-is-compact-hausdorff]], [[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 (Continuity on compactly supported functions.) Let $g\in C_c(G;\mathbb C)$ and let $\gamma_i\to\gamma_0$ be a net in $\widehat G$. By [F2], $\gamma_i\to\gamma_0$ uniformly on the compact set $\operatorname{supp}g$, and $m_G(\operatorname{supp}g)<+\infty$, so $$|\widehat g(\gamma_i)-\widehat g(\gamma_0)|\le\int_{\operatorname{supp}g}|g(x)|\,|\gamma_i(x)-\gamma_0(x)|\,dm_G(x)\le\|g\|_\infty\, m_G(\operatorname{supp}g)\sup_{x\in\operatorname{supp}g}|\gamma_i(x)-\gamma_0(x)|\to0 .$$ Hence $\widehat g$ is continuous. [F2]

1.2 (Norm bound.) For every $\gamma\in\widehat G$, $|\widehat f(\gamma)|\le\int_G|f(x)|\,|\gamma(x)|\,dm_G(x)=\|f\|_1$, so $\|\widehat f\|_\infty\le\|f\|_1$. [F1]

1.3 (Compact superlevel sets.) Let $F:\Delta(A^+)\to\mathbb C$ be the Gelfand transform $F(\chi):=\chi(0,f)$. By [F4], $F$ is continuous, $\Delta(A^+)$ is compact, $F(h_\gamma^+)=\widehat f(\gamma)$ and $F(q)=0$. For $\varepsilon>0$ the set $L_\varepsilon:=\{\chi\in\Delta(A^+):|F(\chi)|\ge\varepsilon\}$ is closed in $\Delta(A^+)$, hence compact, and it does not contain $q$; therefore $L_\varepsilon=\{\gamma\in\widehat G:|\widehat f(\gamma)|\ge\varepsilon\}$ is a compact subset of $\widehat G$ for its compact-open topology. Thus every superlevel set of $|\widehat f|$ is compact. [F4]

2.1 (Continuity in general.) Choose $g_n\in C_c(G;\mathbb C)$ with $\|f-g_n\|_1\to0$ by [F3]. Then $\|\widehat g_n-\widehat f\|_\infty\le\|g_n-f\|_1\to0$ by [F1], so $\widehat f$ is the uniform limit of the continuous functions $\widehat g_n$ of step 1.1; hence $\widehat f$ is continuous. [F1, F3, step 1.1]

3.1 ($\widehat f\in C_0(\widehat G)$.) By step 2.1, $\widehat f$ is continuous on $\widehat G$, and by step 1.3 every set $\{\gamma:|\widehat f(\gamma)|\ge\varepsilon\}$ is compact; this is exactly the definition of $\widehat f\in C_0(\widehat G)$ ([[def-compact-support-c-c-and-c-zero-on-an-lch-space]]). [F4, step 1.3, step 2.1]

4.1 Steps 2.1 and 3.1 show $\widehat f\in C_0(\widehat G)$, step 1.2 gives $\|\widehat f\|_\infty\le\|f\|_1$, and linearity of the transform makes $f\mapsto\widehat f$ a map into $C_0(\widehat G)$. For each $\varepsilon>0$, the transform has magnitude less than $\varepsilon$ outside a compact set, which is the stated uniform vanishing at infinity. [F1, step 1.2, step 1.3, step 2.1, step 3.1] ∎
