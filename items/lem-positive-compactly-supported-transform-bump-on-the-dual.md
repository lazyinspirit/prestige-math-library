---
id: lem-positive-compactly-supported-transform-bump-on-the-dual
kind: lemma
title: Compactly supported nonnegative transform bumps on the dual
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 16
deps: [cor-cauchy-schwarz-inequality-for-l-two, def-axiom-of-choice, def-compact-open-topology-for-topological-domains, def-compact-support-c-c-and-c-zero-on-an-lch-space, def-dependent-choice, def-fourier-transform-on-an-lca-group, def-l-p-space-as-a-quotient-by-null-functions, def-left-haar-integral-and-left-haar-measure, def-locally-compact-space, def-neighbourhood-top, def-pontryagin-dual-and-compact-open-topology, def-topological-group, lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure, lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets, lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution, lem-lca-translations-and-normalised-local-approximate-identities, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, thm-c-c-is-dense-in-l-p-for-radon-measures, thm-dual-of-an-lca-group-is-locally-compact-abelian, thm-plancherel-theorem-for-lca-groups]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: T. W. Koerner, Topological Groups (author lecture notes)
    url: https://www.dpmms.cam.ac.uk/~twk10/Topg.pdf
    locator: 'Lemma 13.2, printed p. 26: a nonnegative transform positive at a chosen character and vanishing outside a compact neighbourhood.'
  - title: Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)
    url: https://people.math.harvard.edu/~shlomo/212a/loomis.pdf
    locator: 'Section 36D, regularity corollary and its proof, printed p. 146: inverse square-integrable transforms give local transform cutoffs.'
proof_strategy: direct
verification:
  precheck: pass
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and Dependent Choice ([[def-dependent-choice]]). Let $G$ be a locally compact Hausdorff abelian group with dual $\widehat G$ and Haar measure $m_G$, let $\gamma_0\in\widehat G$ and let $K\subseteq\widehat G$ be a compact neighbourhood of $\gamma_0$. Then there exists $f\in L^1(G,m_G)$ with $\widehat f\ge0$ on $\widehat G$, $\widehat f(\gamma_0)>0$ and $\widehat f=0$ on $\widehat G\setminus K$.

## Facts & Assumptions

**Given:** A locally compact Hausdorff abelian group $G$ with Haar measure $m_G$, its dual $\widehat G$ with the compatible dual Haar measure $m_{\widehat G}$, a character $\gamma_0$ and a compact neighbourhood $K$ of $\gamma_0$.

[F1] $\widehat G$ is a locally compact Hausdorff abelian group; the dual Haar measure is positive on nonempty open sets and finite on compact sets, and every neighbourhood of the identity contains an open symmetric relatively compact neighbourhood whose closure product is as small as desired: for $K$ a compact neighbourhood of $\gamma_0$ there is a symmetric open relatively compact $V\ni1$ with $\gamma_0\overline V\,\overline V^{-1}\subseteq K$. To obtain it, take an open identity neighbourhood $O\subseteq\gamma_0^{-1}K$ and use continuity of $(a,b)\mapsto ab^{-1}$ to choose symmetric open $W\ni1$ with $WW^{-1}\subseteq O$. Compact shrinking gives open $V_0\ni1$ with compact closure in $W$; set $V=V_0\cap V_0^{-1}$. ([[thm-dual-of-an-lca-group-is-locally-compact-abelian]], [[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]], [[def-locally-compact-space]], [[def-neighbourhood-top]])

[F2] The Plancherel transform $\mathcal F:L^2(G)\to L^2(\widehat G)$ is a unitary operator and its inverse is again unitary; on $L^1(G)\cap L^2(G)$ it agrees with the Fourier transform $\widehat f(\chi)=\int_Gf(x)\overline{\chi(x)}\,dm_G(x)$. ([[thm-plancherel-theorem-for-lca-groups]], [[def-fourier-transform-on-an-lca-group]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F3] **Modulation in $L^2$.** For $\omega\in\widehat G$ and $v\in L^2(G)$ the function $\omega v$ (pointwise product) lies in $L^2(G)$, and $\mathcal F(\omega v)(\chi)=\mathcal Fv(\omega^{-1}\chi)$ in $L^2(\widehat G)$. Indeed for $v\in C_c(G)$ this is the $L^1$ modulation identity, both sides are continuous functions of $v\in L^2(G)$ into $L^2(\widehat G)$ (multiplication by the character and translation of the argument are isometries), and $C_c(G)$ is dense in $L^2(G)$, so the identity extends by continuity. ([[lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution]], [[lem-lca-translations-and-normalised-local-approximate-identities]], [[thm-c-c-is-dense-in-l-p-for-radon-measures]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]])

[F4] If $u,v\in L^2(G)$ then $u\overline v\in L^1(G)$ with $\|u\overline v\|_1\le\|u\|_2\|v\|_2$. ([[cor-cauchy-schwarz-inequality-for-l-two]])

## Proof

1.1 Choose $V$ as in [F1]: an open symmetric relatively compact neighbourhood of $1$ in $\widehat G$ with $\gamma_0\overline V\,\overline V^{-1}\subseteq K$, so in particular $\gamma_0 V V^{-1}\subseteq K$. [F1]

2.1 In $L^2(\widehat G)$ put $a:=\mathbf 1_V$ and $b:=\mathbf 1_{\gamma_0^{-1}V}$, and by surjectivity of the unitary $\mathcal F$ choose $u,v\in L^2(G)$ with $\mathcal Fu=a$ and $\mathcal Fv=b$; put $f:=u\overline v\in L^1(G)$ by [F4]. [F2, F4, step 1.1]

3.1 For every $\omega\in\widehat G$, the Fourier transform of $f$ is $\widehat f(\omega)=\int_Gu(x)\overline{v(x)}\,\overline{\omega(x)}\,dm_G(x)=\langle u,\omega v\rangle_{L^2(G)}$. Because $\mathcal F$ is unitary, this equals $\langle\mathcal Fu,\mathcal F(\omega v)\rangle_{L^2(\widehat G)}=\int_{\widehat G}a(\chi)\overline{b(\omega^{-1}\chi)}\,dm_{\widehat G}(\chi)$, using the modulation identity [F3]; since $a$ and $b$ are indicators of $V$ and $\gamma_0^{-1}V$, the integrand is $1$ exactly when $\chi\in V$ and $\omega^{-1}\chi\in\gamma_0^{-1}V$, that is exactly when $\chi\in V\cap\omega\gamma_0^{-1}V$. Hence $\widehat f(\omega)=m_{\widehat G}\big(V\cap\omega\gamma_0^{-1}V\big)$ for every $\omega$. [F2, F3, F4, step 2.1]

4.1 The formula of step 3.1 shows that $\widehat f(\omega)\ge0$ for all $\omega$, that $\widehat f(\gamma_0)=m_{\widehat G}(V)>0$, and that $\widehat f(\omega)=0$ whenever $V\cap\omega\gamma_0^{-1}V=\varnothing$, which holds whenever $\omega\notin\gamma_0VV^{-1}$ (if $\chi=\omega\gamma_0^{-1}\chi'$ with $\chi,\chi'\in V$ then $\omega=\gamma_0\chi\chi'^{-1}\in\gamma_0VV^{-1}$, using symmetry of $V$). Since $\gamma_0VV^{-1}\subseteq\gamma_0\overline V\,\overline V^{-1}\subseteq K$, the transform $\widehat f$ is nonnegative, positive at $\gamma_0$, and vanishes off $K$. [F1, step 3.1]

5.1 The function $f\in L^1(G,m_G)$ of step 2.1 therefore satisfies $\widehat f\ge0$ on $\widehat G$, $\widehat f(\gamma_0)>0$ and $\widehat f=0$ on $\widehat G\setminus K$, which is the statement. [step 2.1, step 4.1] ∎