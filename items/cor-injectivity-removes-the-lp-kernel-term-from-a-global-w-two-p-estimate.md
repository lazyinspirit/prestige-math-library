---
id: cor-injectivity-removes-the-lp-kernel-term-from-a-global-w-two-p-estimate
kind: corollary
title: Injectivity removes the $L^p$ term from the global $W^{2,p}$ estimate
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 5
deps: [thm-global-w-two-p-dirichlet-estimate, thm-rellich-kondrachov-for-p-less-than-n, thm-rellich-kondrachov-at-the-critical-source-exponent, thm-morrey-rellich-compactness-for-p-greater-than-n, thm-extension-theorem-for-bounded-smooth-domains, def-sobolev-space-wkp-and-its-norm, def-wkp-zero-as-a-sobolev-closure, def-axiom-of-choice, def-bounded-c-k-domain-and-boundary-charts, thm-sobolev-spaces-are-banach-spaces]
sources:
  references:
    - title: "Armin Schikorra, Partial Differential Equations I & II (version October 1, 2025; complete 281-page graduate lecture notes)"
      url: "https://sites.pitt.edu/~armin/pde2022/pde.pdf"
      locator: "§8.9, the normalized-contradiction use of the a priori estimate in Theorem 8.31, printed pp. 153-154 (read in full)"
    - title: "John Villavert, Elementary Theory and Methods for Elliptic Partial Differential Equations (2017; complete 220-page lecture notes)"
      url: "http://www2.math.ou.edu/~villavert/research%20papers/elementary%20theory%20and%20methods%20for%20elliptic%20partial%20differential%20equations.pdf"
      locator: "Part III of the proof of Theorem 3.8, printed p. 105 (read in full)"
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford University; complete 118-page author notes, Chapter 12 Schauder Theory)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 12, the compactness/contradiction step behind Theorem 4, printed pp. 136-137 (read in full)"
---

## Statement

Assume the Axiom of Choice. Let $n\ge2$, $1<p<\infty$, let $\Omega$ be a bounded $C^{1,1}$ domain and let $L=a^{ij}\partial_i\partial_j+b^i\partial_i+c$ be uniformly elliptic with $a^{ij}\in C^0(\bar\Omega)$, $b,c\in L^\infty(\Omega)$ as in [[thm-global-w-two-p-dirichlet-estimate]]. Assume that the homogeneous Dirichlet problem has only the trivial strong solution: if $w\in W^{2,p}(\Omega)\cap W^{1,p}_0(\Omega)$ and $Lw=0$ almost everywhere, then $w=0$. Then there is $C<\infty$ with
$$\|u\|_{W^{2,p}(\Omega)}\le C\|Lu\|_{L^p(\Omega)}\qquad\text{for every }u\in W^{2,p}(\Omega)\cap W^{1,p}_0(\Omega).$$
No symmetry of $L$ is used and no spectral hypothesis beyond the stated injectivity enters; the constant can additionally depend on the particular operator $L$ through its separation from a nontrivial Dirichlet kernel. Injectivity alone supplies no bound uniform over all operators with the same coefficient upper bounds. The Axiom of Choice is needed because the compactness alternatives of Rellich--Kondrachov are invoked.

## Facts & Assumptions

**Given:** the Axiom of Choice, $n\ge2$, $1<p<\infty$, the bounded $C^{1,1}$ domain $\Omega$, the operator $L$ with the stated coefficient bounds, the injectivity hypothesis, and the a priori estimate of [[thm-global-w-two-p-dirichlet-estimate]].

[A1] The Axiom of Choice is the standing hypothesis; it is inherited by the a priori estimate and Sobolev completeness, and used through the compactness and extension theorems that make $\Omega$ a bounded extension domain. ([[def-axiom-of-choice]])

[F1] A priori estimate ([[thm-global-w-two-p-dirichlet-estimate]]): there is $C_0$ with $\|v\|_{W^{2,p}(\Omega)}\le C_0(\|Lv\|_{L^p(\Omega)}+\|v\|_{L^p(\Omega)})$ for all $v\in W^{2,p}(\Omega)\cap W^{1,p}_0(\Omega)$.

[F2] Compactness alternatives for a bounded extension domain $\Omega$: for $1\le p<n$ every bounded sequence in $W^{1,p}(\Omega)$ has a subsequence converging in $L^p(\Omega)$ ([[thm-rellich-kondrachov-for-p-less-than-n]] with $q=p<p^*$); for $p=n$ every bounded sequence in $W^{1,n}(\Omega)$ has a subsequence converging in $L^q(\Omega)$ for each fixed finite $q$, in particular $q=n$ ([[thm-rellich-kondrachov-at-the-critical-source-exponent]]); for $p>n$ every bounded sequence in $W^{1,p}(\Omega)$ has a subsequence converging in $L^q(\Omega)$ for every $1\le q<\infty$, in particular $q=p$ ([[thm-morrey-rellich-compactness-for-p-greater-than-n]]).

[F3] A bounded $C^{1,1}$ domain is a bounded Lipschitz extension domain for $W^{1,p}$: there is a bounded extension operator $W^{1,p}(\Omega)\to W^{1,p}(\mathbb R^n)$ ([[def-bounded-c-k-domain-and-boundary-charts]], [[thm-extension-theorem-for-bounded-smooth-domains]]). This is the only extension input used here, to verify that the Rellich--Kondrachov results in [F2] apply; no $W^{k,q}$ extension for $k\ge2$ is needed.

[F4] On the subspace $W^{2,p}(\Omega)\cap W^{1,p}_0(\Omega)$, which is closed in $W^{2,p}(\Omega)$ the operator $L$ is bounded into $L^p(\Omega)$: $\|Lv\|_{L^p}\le C(\Lambda,M)\|v\|_{W^{2,p}}$ for $v\in W^{2,p}(\Omega)$; the space $W^{1,p}_0(\Omega)$ is closed in $W^{1,p}(\Omega)$ and hence in $W^{2,p}(\Omega)$. ([[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]])

## Proof

**Proof technique:** direct.

1.1 Contradiction setup and a bounded sequence. Suppose the inequality fails: then for every integer $j\ge1$ there is $u_j\in W^{2,p}(\Omega)\cap W^{1,p}_0(\Omega)$ with $\|u_j\|_{W^{2,p}}=1$ and $\|Lu_j\|_{L^p}<1/j$; equivalently, after rescaling, a sequence with $\|u_j\|_{W^{2,p}}=1$ and $\|Lu_j\|_{L^p}\to0$. For each $j$ the $W^{1,p}$ norm is bounded by the $W^{2,p}$ norm up to constants, so $(u_j)$ is bounded in $W^{1,p}(\Omega)$, and by [F3] the domain $\Omega$ is a bounded extension domain for $W^{1,p}$. [F3, F4, given, A1]

2.1 An $L^p$-convergent subsequence. By [F2] applied to the bounded sequence $(u_j)$, in each of the three cases $p<n$, $p=n$, $p>n$ there is a subsequence, relabelled $(u_j)$, converging in $L^p(\Omega)$ to some $w\in L^p(\Omega)$. In the case $p<n$ the admissible exponents form the interval $[1,p^*)$ and $q=p$ is admissible; in the case $p=n$ every finite $q$ is admissible and $q=n=p$; in the case $p>n$ every $1\le q<\infty$ is admissible and $q=p$. [F2, step 1.1]

3.1 Cauchy in $W^{2,p}$ via the a priori estimate. Apply [F1] to the differences $u_j-u_k\in W^{2,p}(\Omega)\cap W^{1,p}_0(\Omega)$: $$\|u_j-u_k\|_{W^{2,p}}\le C_0\bigl(\|L(u_j-u_k)\|_{L^p}+\|u_j-u_k\|_{L^p}\bigr)\le C_0\bigl(\|Lu_j\|_{L^p}+\|Lu_k\|_{L^p}+\|u_j-u_k\|_{L^p}\bigr).$$ The first two terms tend to $0$ by construction, and the third by the $L^p$ convergence of step 2.1; hence $(u_j)$ is Cauchy in $W^{2,p}(\Omega)$, which is complete by [[thm-sobolev-spaces-are-banach-spaces]], and converges to some $v\in W^{2,p}(\Omega)$ with $v$ equal to the $L^p$-limit $w$ of step 2.1. [step 1.1, step 2.1, F1, algebra]

4.1 The limit is a vanishing strong solution. The space $W^{2,p}(\Omega)\cap W^{1,p}_0(\Omega)$ is closed in $W^{2,p}(\Omega)$ by [F4], so $v$ belongs to it; the boundedness of $L:W^{2,p}(\Omega)\to L^p(\Omega)$ and $Lu_j\to0$ in $L^p$ give $Lv=0$ almost everywhere. By the injectivity hypothesis $v=0$. [step 3.1, F4, given]

5.1 Contradiction. Applying [F1] to $u_j$ and using the normalization, $$1=\|u_j\|_{W^{2,p}}\le C_0\bigl(\|Lu_j\|_{L^p}+\|u_j\|_{L^p}\bigr)\longrightarrow0$$ because $\|Lu_j\|_{L^p}\to0$ and $\|u_j\|_{L^p}\to\|v\|_{L^p}=0$ by steps 2.1 and 4.1. This contradiction shows that the failure assumed in step 1.1 is impossible, that is, there is $C$ with $\|u\|_{W^{2,p}(\Omega)}\le C\|Lu\|_{L^p(\Omega)}$ for all $u\in W^{2,p}(\Omega)\cap W^{1,p}_0(\Omega)$. [step 1.1, step 2.1, step 3.1, step 4.1, F1, given]

6.1 Conclusion. Assume that the only strong solution of $Lw=0$ in $W^{2,p}(\Omega)\cap W^{1,p}_0(\Omega)$ is $w=0$. Then the compactness of the Sobolev embedding upgrades the a priori estimate [F1] to the pure $L^p$ estimate displayed in the statement, the constant absorbing the $L^p$ term through the contradiction argument. No symmetry, self-adjointness or spectral hypothesis on $L$ is used, and the only choice principle invoked is the Axiom of Choice, including its inherited uses in the a priori estimate, completeness, Rellich--Kondrachov and extension theorems. [step 5.1, F1, F2, F3, given] ∎

## Remarks

- The structure is the classical one: a priori estimate plus compactness turns injectivity of the homogeneous problem into the sharper estimate without the $L^p$ term. The compactness is used only to extract an $L^p$-convergent subsequence; the $W^{2,p}$ convergence is then produced by the estimate itself.
- The three Rellich--Kondrachov branches are the reason the corollary assumes the Axiom of Choice, and the a priori estimate used here also assumes Choice through its trace and extension suppliers. If one of the suppliers were only available under a weaker principle, the corresponding branch would have to be stated separately.
