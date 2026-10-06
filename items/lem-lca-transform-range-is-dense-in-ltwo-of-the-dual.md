---
id: lem-lca-transform-range-is-dense-in-ltwo-of-the-dual
kind: lemma
title: The Plancherel transform range is dense in L^2 of the dual
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 14
deps: [cor-cauchy-schwarz-inequality-for-l-two, def-axiom-of-choice, def-compact-space, def-compact-support-c-c-and-c-zero-on-an-lch-space, def-dependent-choice, def-fourier-transform-on-an-lca-group, def-integrable-real-and-complex-functions-and-their-integrals, def-l-p-space-as-a-quotient-by-null-functions, def-left-haar-integral-and-left-haar-measure, def-locally-compact-space, def-neighbourhood-top, def-radon-measure-on-an-lch-space, def-regular-complex-borel-measure-on-an-lch-space, def-topological-group, lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure, lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two, lem-compactness-of-a-subspace-is-ambient, lem-fourier-stieltjes-transforms-determine-finite-radon-measures, lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets, lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution, lem-lca-translations-and-normalised-local-approximate-identities, thm-c-c-is-dense-in-l-p-for-radon-measures, thm-closed-subspace-of-a-compact-space-is-compact, thm-compact-subset-of-a-hausdorff-space-is-closed, thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation, thm-dual-of-an-lca-group-is-locally-compact-abelian, thm-lca-plancherel-isometric-extension, thm-riemann-lebesgue-lemma-on-lca-groups, thm-riesz-fischer-completeness-of-l-p]
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Lynn H. Loomis, Introduction to Abstract Harmonic Analysis, D. Van Nostrand, 1953 (Harvard-hosted full scan)
    url: https://people.math.harvard.edu/~shlomo/212a/loomis.pdf
    locator: 'Section 36D, printed pp. 145-146: completion of the isometry to a unitary transform, including dense range before the biduality theorem. The Fourier-Stieltjes uniqueness proof here is an altered route.'
  - title: Manfred Einsiedler and Thomas Ward, Ergodic Theory with a View Towards Number Theory, Appendix C (course-hosted full text)
    url: https://maths.qmul.ac.uk/~fvivaldi/teaching/ETAD/NotesI.pdf
    locator: 'Appendix C.3, printed p. 435, paragraph preceding Theorem C.8: the transform on the integrable square-integrable intersection has dense range and extends surjectively.'
proof_strategy: direct
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]) and Dependent Choice
([[def-dependent-choice]]). Let $G$ be a locally compact Hausdorff abelian
group and let $\mathcal F:L^2(G,m_G)\to L^2(\widehat G,m_{\widehat G})$ be the
isometric extension of the Fourier transform on $L^1\cap L^2$ with respect to
the compatible dual Haar normalisation. Then $\mathcal F$ has dense range;
equivalently, every $q\in L^2(\widehat G)$ orthogonal to $\mathcal F(L^2(G))$
is zero.

## Facts & Assumptions

**Given:** A locally compact Hausdorff abelian group $G$ with Haar measure $m_G$, dual $\widehat G$, compatible dual Haar measure $m_{\widehat G}$, and the isometric extension $\mathcal F$ of the Fourier transform.

[F1] $\mathcal F$ is a linear isometry $L^2(G)\to L^2(\widehat G)$ extending the transform $\mathcal F_0f=\widehat f$ on the dense subspace $L^1(G)\cap L^2(G)$; the transform of $f\in L^1(G)$ is $\widehat f(\chi)=\int_Gf(x)\overline{\chi(x)}\,dm_G(x)$. ([[thm-lca-plancherel-isometric-extension]], [[def-fourier-transform-on-an-lca-group]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F2] For $f\in L^1(G)$ and $x\in G$ the translation $T_xf=f(\cdot-x)$ lies in $L^1(G)$ and $\widehat{T_xf}(\chi)=\overline{\chi(x)}\,\widehat f(\chi)$; translations preserve $L^1\cap L^2$ and are isometries of $L^2$. ([[lem-lca-fourier-transform-intertwines-translation-modulation-and-convolution]], [[lem-lca-translations-and-normalised-local-approximate-identities]])

[F3] If $u,v\in L^2$ then $uv\in L^1$ and $\|uv\|_1\le\|u\|_2\|v\|_2$. ([[cor-cauchy-schwarz-inequality-for-l-two]])

[F4] A finite regular complex Borel measure on $\widehat G$ whose inverse transform $x\mapsto\int_{\widehat G}\chi(x)\,d\mu(\chi)$ vanishes for every $x\in G$ is zero. ([[lem-fourier-stieltjes-transforms-determine-finite-radon-measures]], [[def-regular-complex-borel-measure-on-an-lch-space]])

[F5] For $h\in L^1(\widehat G)$ the measure $h\,m_{\widehat G}$ has total variation $|h|\,m_{\widehat G}$, finite because $h\in L^1$. Haar measure on the locally compact space $\widehat G$ is Radon: finite on compact sets, outer regular on Borel sets and inner regular on open sets. For a bounded density $h$ supported in a compact set $K$, put $M=\|h\|_\infty$. Given a Borel set $E$ and $\epsilon>0$, outer regularity supplies open $O_1\supseteq E\cap K$ and $O_2\supseteq K\setminus E$ with $m(O_1\setminus(E\cap K)),m(O_2\setminus(K\setminus E))<\epsilon/(1+M)$. Then $V=O_1\cup(\widehat G\setminus K)$ is open and contains $E$, while $F=K\setminus O_2$ is compact and contained in $E$; both $\int_{V\setminus E}|h|\,dm$ and $\int_{E\setminus F}|h|\,dm$ are less than $\epsilon$. Thus $h\,m$ is a finite regular complex measure, using compact closedness and closed-subset compactness ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[thm-closed-subspace-of-a-compact-space-is-compact]]). ([[thm-complex-l-one-densities-define-complex-measures-with-prescribed-total-variation]], [[def-radon-measure-on-an-lch-space]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]])

[F6] In a locally compact Hausdorff space, every open neighbourhood of a point contains an open neighbourhood with compact closure ([[lem-a-locally-compact-hausdorff-space-has-a-base-of-open-sets-with-compact-closure]]). If $f\in L^1(G)$ then $\widehat f\in C_0(\widehat G)$, so the set where $\widehat f\ne0$ is open. A nonempty open subset of $G$ has strictly positive Haar measure, and $C_c\subseteq L^1\cap L^2$. ([[thm-riemann-lebesgue-lemma-on-lca-groups]], [[lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]], [[thm-c-c-is-dense-in-l-p-for-radon-measures]])

[F7] A closed linear subspace of a Hilbert space whose orthogonal complement is trivial is the whole space. ([[lem-closed-subspace-with-trivial-orthogonal-complement-fills-l-two]], [[thm-riesz-fischer-completeness-of-l-p]])

[F8] The support of an $L^2(\widehat G)$ class can be restricted, up to a null set, to a $\sigma$-compact set: for a measurable representative $q$, each level set $E_n=\{|q|>1/n\}$ has finite measure since $n^{-2}m(E_n)\le\|q\|_2^2$; outer regularity puts $E_n$ inside an open set $U_n$ of finite measure, and inner regularity exhausts $U_n$ up to a null set by countably many compact subsets $K_{n,j}$. Their countable union contains $\{q\ne0\}$ up to a null set. Countable choices are licensed by DC, and every compact subset admits finite subcovers from covers by ambient open sets ([[def-l-p-space-as-a-quotient-by-null-functions]], [[def-left-haar-integral-and-left-haar-measure]], [[def-radon-measure-on-an-lch-space]], [[def-dependent-choice]], [[def-compact-space]], [[lem-compactness-of-a-subspace-is-ambient]]).

[F9] With Dependent Choice, $C_c(\widehat G)$ is dense in $L^1(\widehat G)$ for the Radon Haar measure. ([[thm-c-c-is-dense-in-l-p-for-radon-measures]])

## Proof

1.1 Suppose $q\in L^2(\widehat G)$ is orthogonal to $\mathcal F(L^2(G))$, and fix $f\in L^1(G)\cap L^2(G)$. Then $g_f:=q\,\overline{\mathcal F_0f}\in L^1(\widehat G)$ by [F3], and $\mu_f:=g_f\,m_{\widehat G}$ is a finite regular complex measure: approximate $g_f$ in $L^1(\widehat G)$ by $h_n\in C_c(\widehat G)$; each $h_n\,m_{\widehat G}$ is finite and regular because $h_n$ is continuous with compact support and $m_{\widehat G}$ is Radon, and $\|(g_f-h_n)m_{\widehat G}\|_{TV}=\|g_f-h_n\|_1\to0$ by [F5]. A total-variation limit of finite regular complex measures is finite regular: for a Borel set $E$ and $\delta>0$ choose $n$ with $\|(g_f-h_n)m_{\widehat G}\|_{TV}<\delta/2$, use outer regularity of $|h_n|m_{\widehat G}$ to find open $V\supseteq E$ with $|h_n|m_{\widehat G}(V\setminus E)<\delta/2$, and conclude $|\mu_f|(V\setminus E)<\delta$; the inner-regularity and finiteness clauses are transferred in the same way. [F3, F5, F9]

2.1 For every $x\in G$ the inverse transform of $\mu_f$ vanishes: $\int_{\widehat G}\chi(x)\,d\mu_f(\chi)=\int_{\widehat G}q(\chi)\overline{\overline{\chi(x)}\,\mathcal F_0f(\chi)}\,dm_{\widehat G}(\chi)=\langle q,\mathcal F(T_xf)\rangle$, because $\mathcal F(T_xf)(\chi)$ agrees with the $L^1$-transform $\widehat{T_xf}(\chi)=\overline{\chi(x)}\,\widehat f(\chi)$ of [F2] on the dense intersection; and this inner product is $0$ by orthogonality of $q$ to the range of $\mathcal F$. Hence [F4] gives $\mu_f=0$, so $g_f=0$ almost everywhere, that is $q\,\overline{\mathcal F_0f}=0$ $m_{\widehat G}$-almost everywhere. [F2, F3, F4, step 1.1]

3.1 Fix $\gamma\in\widehat G$. By continuity of $\gamma$ at $0$ and local compactness of $G$ there is a relatively compact open neighbourhood $U_\gamma$ of $0$ with $\operatorname{Re}\gamma(x)>1/2$ on $U_\gamma$; put $f_\gamma:=\mathbf 1_{U_\gamma}\in L^1(G)\cap L^2(G)$. Then $\operatorname{Re}\widehat{f_\gamma}(\gamma)=\int_{U_\gamma}\operatorname{Re}\overline{\gamma(x)}\,dm_G\ge\frac12m_G(U_\gamma)>0$, so $\widehat{f_\gamma}(\gamma)\ne0$, and by [F6] the set $O_\gamma:=\{\chi:\widehat{f_\gamma}(\chi)\ne0\}$ is an open neighbourhood of $\gamma$. Applying step 2.1 to $f_\gamma$ yields $q\,\overline{\widehat{f_\gamma}}=0$ almost everywhere; since $\widehat{f_\gamma}$ does not vanish on the open set $O_\gamma$, we get $q=0$ almost everywhere on $O_\gamma$. [F2, F6, step 2.1]

4.1 By [F8], choose compact sets $K_{n,j}$, countably many in total, whose union contains the set where $q\ne0$ up to a null set. For each compact $K_{n,j}$, the open cover $\{O_\gamma\}_{\gamma\in\widehat G}$ from step 3.1 has a finite subcover. Since $q=0$ almost everywhere on every member of that finite subcover, it is zero almost everywhere on $K_{n,j}$. Taking the countable union over $n,j$ shows $q=0$ almost everywhere on the union of the compact sets; [F8] says $q$ also vanishes almost everywhere off that union. Hence $q=0$ in $L^2(\widehat G)$, so the orthogonal complement of $\mathcal F(L^2(G))$ is trivial. [F8, step 3.1]

5.1 The range of $\mathcal F$ is closed in $L^2(\widehat G)$: $\mathcal F$ is an isometry and $L^2(G)$ is complete, so if $\mathcal F f_n\to h$ then $(f_n)$ is Cauchy, converges to some $f$, and continuity gives $h=\mathcal F f$. Since its orthogonal complement is trivial, [F7] gives $\mathcal F(L^2(G))=L^2(\widehat G)$; in particular the range is dense. [F1, F7, step 4.1] ∎ 
