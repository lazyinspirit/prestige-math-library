---
id: "thm-higher-eigenvalues-by-orthogonality-constrained-minimisation"
kind: "theorem"
title: "Higher eigenvalues by orthogonality-constrained minimisation"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 11
deps:
  - "cor-eigenfunctions-for-distinct-symmetric-elliptic-eigenvalues-are-ltwo-orthogonal"
  - "def-axiom-of-choice"
  - "def-banach-space"
  - "def-convex-and-strictly-convex-functionals-on-a-banach-space"
  - "def-countable-choice"
  - "def-dependent-choice"
  - "def-frechet-derivative-between-banach-spaces"
  - "def-hahn-banach-extension-principle-relative"
  - "def-hk-and-hk-zero-notation"
  - "def-l-p-space-as-a-quotient-by-null-functions"
  - "def-ltwo-operator-associated-with-a-symmetric-elliptic-form"
  - "def-orthogonality-and-orthogonal-complement"
  - "def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis"
  - "def-reflexive-banach-space"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-symmetric-elliptic-weak-eigenpair"
  - "def-ultrafilter-extension-principle"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence"
  - "lem-closed-subspace-of-a-banach-space-is-banach"
  - "lem-convex-norm-lower-semicontinuous-functionals-are-weakly-lower-semicontinuous"
  - "lem-dependent-choice-implies-countable-choice"
  - "lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set"
  - "lem-strong-ltwo-compactness-preserves-unit-normalisation"
  - "lem-w-one-p-is-reflexive"
  - "thm-closed-subspaces-of-reflexive-spaces-are-reflexive"
  - "thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator"
  - "thm-finite-regular-constraint-lagrange-multiplier-rule"
  - "thm-hk-is-a-hilbert-space"
proof_strategy: "direct"
provenance:
  statement: "ai-altered"
  proof: "ai-altered"
sources:
  references:
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 7, printed pp. 67-71 (Lemma 7.1 and the variational characterization of all eigenvalues)"
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations: Lecture Notes (arXiv:1203.2344, complete monograph)"
      url: "https://arxiv.org/pdf/1203.2344"
      locator: "Chapter 9, printed pp. 51-56 (min-max characterisation and eigenvalues as critical values of the Rayleigh quotient)"
---

## Statement

Assume the Axiom of Choice, the ultrafilter lemma, DC and HB ([[def-axiom-of-choice]], [[def-ultrafilter-extension-principle]], [[def-dependent-choice]], [[def-hahn-banach-extension-principle-relative]]). Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be a nonempty bounded open set, let $\lambda_1\le\lambda_2\le\cdots$ and $\{e_j\}$ be the eigenvalues and orthonormal eigenbasis of the real Dirichlet Laplacian, supplied by [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]] with $a_0(v,w)=\int_\Omega Dv\cdot Dw$ ([[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], [[def-symmetric-elliptic-weak-eigenpair]], [[def-hk-and-hk-zero-notation]]), and fix $k\ge2$. Put $S_k=\{u\in H^1_0(\Omega;\mathbb R):\|u\|_{L^2}=1,\ (u,e_j)_{L^2}=0\ \text{for }j<k\}$ and $E(u)=\int_\Omega|Du|^2$ ([[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]], [[def-orthogonality-and-orthogonal-complement]]). Then $S_k$ is nonempty, $E$ attains its infimum $\mu_k$ on $S_k$, every minimiser is a weak eigenpair with eigenvalue $\mu_k$, and $\mu_k=\lambda_k$ (eigenvalues counted with multiplicity); moreover every minimiser lies in the eigenspace $E_{\lambda_k}$ and is orthogonal in $L^2$ to $e_1,\dots,e_{k-1}$.

## Facts & Assumptions

**Given:** A nonempty bounded open set $\Omega\subseteq\mathbb R^n$, the principal Dirichlet form $a_0(v,w)=\int_\Omega Dv\cdot Dw$ with its eigenvalue list $\lambda_1\le\lambda_2\le\cdots$ and orthonormal eigenbasis $\{e_j\}_{j\ge1}$ of $L^2(\Omega)$, an index $k\ge2$, the set $S_k$ and the energy $E(v)=a_0(v,v)$.

[F1] Specialise the spectral theorem to the real form $a_0(v,w)=\int_\Omega Dv\cdot Dw$ (identity principal coefficients, zero drift and potential). [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]], [[def-symmetric-elliptic-weak-eigenpair]], [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]]: each $e_j$ lies in $H^1_0(\Omega)$ with $\|e_j\|_{L^2}=1$, $a_0(e_j,v)=\lambda_j(e_j,v)_{L^2}$ for every $v\in H^1_0(\Omega)$, the list is nondecreasing, and $\{e_j\}$ is a Hilbert basis of $L^2(\Omega)$ ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).

[F2] [[def-wkp-zero-as-a-sobolev-closure]], [[thm-hk-is-a-hilbert-space]], [[lem-closed-subspace-of-a-banach-space-is-banach]]: $H^1_0(\Omega)$ is a closed subspace of $H^1(\Omega)=W^{1,2}(\Omega)$, hence a real Banach space, and under HB its closed subspace of the reflexive space $W^{1,2}(\Omega)$ is reflexive ([[lem-w-one-p-is-reflexive]], [[thm-closed-subspaces-of-reflexive-spaces-are-reflexive]], [[def-reflexive-banach-space]]).

[F3] [[def-convex-and-strictly-convex-functionals-on-a-banach-space]], [[lem-convex-norm-lower-semicontinuous-functionals-are-weakly-lower-semicontinuous]]: $E$ is convex and continuous on $H^1_0(\Omega)$ and therefore weakly sequentially lower semicontinuous on every nonempty convex subset (Axiom of Choice through the convex closedness lemma).

[F4] [[lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence]]: under the ultrafilter lemma, DC and HB every norm-bounded sequence in a real reflexive Banach space has a weakly convergent subsequence.

[F5] [[lem-strong-ltwo-compactness-preserves-unit-normalisation]]: for bounded open $\Omega$, if $(v_j)\subseteq H^1_0(\Omega)$ is norm bounded with $v_j\rightharpoonup v$ and $\|v_j\|_{L^2}=1$, then $\|v\|_{L^2}=1$.

[F6] [[lem-smooth-compactly-supported-functions-are-dense-in-ltwo-of-an-open-set]], [[def-l-p-space-as-a-quotient-by-null-functions]]: $H^1_0(\Omega)$ is dense in $L^2(\Omega)$; hence an $L^2$ class orthogonal to $H^1_0(\Omega)$ is zero. For each $j$ the functional $L_j(v):=(v,e_j)_{L^2}$ is bounded on $H^1_0(\Omega)$ because $\|v\|_{L^2}\le\|v\|_{H^1_0}$, so $v_j\rightharpoonup v$ in $H^1_0(\Omega)$ implies $L_j(v_j)\to L_j(v)$.

[F7] [[thm-finite-regular-constraint-lagrange-multiplier-rule]], [[def-frechet-derivative-between-banach-spaces]]: for a real Banach space $X$, open $U\subseteq X$, $I:U\to\mathbb R$ Fréchet differentiable at $u$ and $G:U\to\mathbb R^m$ of class $C^1$ with $DG(u)$ surjective, a local extremum of $I$ on the level set $\{G=G(u)\}$ admits a unique $\lambda\in\mathbb R^m$ with $DI(u)=\sum_i\lambda_iDG_i(u)$; the Axiom of Choice is consumed here.

[F8] [[cor-eigenfunctions-for-distinct-symmetric-elliptic-eigenvalues-are-ltwo-orthogonal]]: weak eigenfunctions of the symmetric case with distinct eigenvalues are $L^2$-orthogonal.

## Proof

**Proof technique:** direct.

**Given:** The spectral data and the set $S_k$ above.

1.1 By [F1] the function $e_k$ has $\|e_k\|_{L^2}=1$ and $(e_k,e_j)_{L^2}=0$ for $j<k$, so $e_k\in S_k$: the set $S_k$ is nonempty and $\mu_k:=\inf_{S_k}E\le E(e_k)=a_0(e_k,e_k)=\lambda_k\|e_k\|_{L^2}^2=\lambda_k<\infty$. [given, F1]

1.2 By [F2] the space $H^1_0(\Omega)$ is a real reflexive Banach space, by [F3] the energy $E$ is weakly sequentially lower semicontinuous on $H^1_0(\Omega)$, and by [F6] each constraint functional $L_j$, $j<k$, is bounded on $H^1_0(\Omega)$. [F2, F3, F6]

2.1 Since $0\le\mu_k<\infty$, DC supplies a sequence $v_j\in S_k$ with $E(v_j)<\mu_k+1/j$ for $j\ge1$, so $E(v_j)\to\mu_k$. Since $\|v_j\|_{L^2}=1$ and $E(v_j)\le\lambda_k+1$ for all large $j$, one has $\|v_j\|_{H^1_0}^2=1+E(v_j)\le\lambda_k+2$; by [F4] some subsequence satisfies $v_{j_l}\rightharpoonup v_0$ in $H^1_0(\Omega)$. [step 1.1, step 1.2, F4]

3.1 The limit stays constrained: [F5] applied to the subsequence gives $v_0\in H^1_0(\Omega)$ and $\|v_0\|_{L^2}=1$, while for every $j<k$ the bounded functional $L_j$ of [F6] gives $(v_0,e_j)_{L^2}=\lim_l(v_{j_l},e_j)_{L^2}=0$. Hence $v_0\in S_k$. [step 2.1, F5, F6]

4.1 By weak lower semicontinuity [F3] we get $E(v_0)\le\liminf_lE(v_{j_l})=\mu_k$, and $v_0\in S_k$ gives $E(v_0)\ge\mu_k$; hence $E(v_0)=\mu_k$, so $E$ attains its infimum on $S_k$. [step 1.2, step 2.1, step 3.1, F3]

5.1 Let $v_0\in S_k$ be any minimiser and define $G:X\to\mathbb R^k$ on $X=H^1_0(\Omega)$ by $G(u)=(\|u\|_{L^2}^2-1,(u,e_1)_{L^2},\dots,(u,e_{k-1})_{L^2})$; then $\{G=0\}=S_k=\{G=G(v_0)\}$, $E$ and $G$ are Fréchet differentiable at $v_0$ with $DE(v_0)h=2\int_\Omega Dv_0\cdot Dh$ and $DG(v_0)h=(2(v_0,h)_{L^2},(h,e_1)_{L^2},\dots,(h,e_{k-1})_{L^2})$, because the remainders are $\int_\Omega|Dh|^2$ and the pairings $\int_\Omega h^2$. Surjectivity is explicit: $DG(v_0)(v_0/2)=(1,0,\dots,0)$ and $DG(v_0)e_j$ is the standard coordinate vector with its $1$ in position $j+1$, for $j<k$, using orthonormality and the constraints. The derivative formula holds at every $u\in X$, its first component varies by at most $2\|u-v\|_{L^2}\|h\|_{L^2}\le2\|u-v\|_{H^1}\|h\|_{H^1}$, and its other components are constant bounded functionals. Hence $G$ is $C^1$ with surjective derivative at $v_0$, and [F7] gives unique multipliers $\alpha,\eta_1,\dots,\eta_{k-1}\in\mathbb R$ with $2a_0(v_0,h)=2\alpha(v_0,h)_{L^2}+\sum_{j<k}\eta_j(h,e_j)_{L^2}$ for every $h\in H^1_0(\Omega)$. [step 4.1, F1, F6, F7]

6.1 Test the identity of step 5.1 at $h=e_j$ with $j<k$. Symmetry and [F1] give $2a_0(v_0,e_j)=2\lambda_j(v_0,e_j)_{L^2}=0$, whereas its right-hand side is $\eta_j$ by the constraints and orthonormality, so $\eta_j=0$. Testing at $h=v_0$ gives $2E(v_0)=2\alpha\|v_0\|_{L^2}^2$, so $\alpha=\mu_k$. Therefore $a_0(v_0,h)=\mu_k(v_0,h)_{L^2}$ for every $h\in H^1_0(\Omega)$, and every minimiser is a weak eigenpair with eigenvalue $\mu_k$. [step 4.1, step 5.1, F1]

7.1 It remains to identify $\mu_k$ with $\lambda_k$; already $\mu_k\le\lambda_k$ by step 1.1. Suppose $\mu_k<\lambda_k$: for every $j\ge k$ one has $\lambda_j\ge\lambda_k>\mu_k$, so the eigenfunctions $v_0$ and $e_j$ have distinct eigenvalues and [F8] gives $(v_0,e_j)_{L^2}=0$; for $j<k$ the same holds because $v_0\in S_k$. Thus $v_0$ is $L^2$-orthogonal to every element of the Hilbert basis $\{e_j\}$ [F1], so $v_0=0$ in $L^2$, contradicting $\|v_0\|_{L^2}=1$. Hence $\mu_k=\lambda_k$. [step 3.1, step 6.1, F1, F8]

8.1 Consequently $\mu_k=\lambda_k$, every minimiser is a weak eigenpair with eigenvalue $\lambda_k$ by step 6.1 and therefore lies in the eigenspace $E_{\lambda_k}$, and by membership in $S_k$ it is $L^2$-orthogonal to $e_1,\dots,e_{k-1}$. The Axiom of Choice enters through the convex-lower-semicontinuity and multiplier suppliers [F3, F7], Countable Choice through the orthogonality corollary [F8] (it follows from the assumed DC via [[lem-dependent-choice-implies-countable-choice]]), and the ultrafilter lemma, DC and HB through the weak-compactness and reflexivity suppliers [F2, F4]. [step 3.1, step 4.1, step 6.1, step 7.1, F1, F2, F4, F3, F7, F8] ∎
