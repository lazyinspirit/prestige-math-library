---
id: "thm-first-dirichlet-eigenfunction-by-constrained-minimisation"
kind: "theorem"
title: "The first Dirichlet eigenfunction by constrained minimisation"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 13
deps:
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
  - "def-reflexive-banach-space"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-symmetric-elliptic-weak-eigenpair"
  - "def-ultrafilter-extension-principle"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-absolute-value-does-not-increase-dirichlet-energy-or-change-ltwo-normalisation"
  - "lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence"
  - "lem-closed-subspace-of-a-banach-space-is-banach"
  - "lem-coercivity-of-the-principal-dirichlet-form"
  - "lem-convex-norm-lower-semicontinuous-functionals-are-weakly-lower-semicontinuous"
  - "lem-dependent-choice-implies-countable-choice"
  - "lem-strong-ltwo-compactness-preserves-unit-normalisation"
  - "lem-test-function-cutoffs-and-euclidean-localization"
  - "lem-w-one-p-is-reflexive"
  - "thm-closed-subspaces-of-reflexive-spaces-are-reflexive"
  - "thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator"
  - "thm-finite-regular-constraint-lagrange-multiplier-rule"
  - "thm-hk-is-a-hilbert-space"
  - "thm-poincare-inequality-for-w-one-p-zero"
  - "thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 13 Section 13.3 Constraints, printed pp. 302-305 (Example 13.9: the first eigenvalue by constrained minimisation)"
    - title: "Riccardo Cristoferi, Calculus of Variations: Lecture Notes, Carnegie Mellon University 2016 (complete 133-page notes)"
      url: "https://www.math.cmu.edu/~rcristof/pdf/Teaching/Spring2016/Cristoferi-Calculus_of_Variations-Lecture%20notes.pdf"
      locator: "Chapter 7, printed pp. 67-71 (Lemma 7.1 and the variational characterization of eigenvalues)"
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations: Lecture Notes (arXiv:1203.2344, complete monograph)"
      url: "https://arxiv.org/pdf/1203.2344"
      locator: "Chapter 9, printed pp. 51-56 (Rayleigh principle (9.1) and eigenvalues as critical values of the Rayleigh quotient)"
---

## Statement

Assume the Axiom of Choice, the ultrafilter lemma, DC and HB ([[def-axiom-of-choice]], [[def-ultrafilter-extension-principle]], [[def-dependent-choice]], [[def-hahn-banach-extension-principle-relative]]). Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be a nonempty bounded open set, let $E(u)=\int_\Omega|Du|^2\,dx$ on $H^1_0(\Omega;\mathbb R)$ ([[def-hk-and-hk-zero-notation]], [[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]]) and let $S=\{u\in H^1_0(\Omega):\|u\|_{L^2}=1\}$ ([[def-l-p-space-as-a-quotient-by-null-functions]]). Then $S$ is nonempty and $E$ attains its infimum $\lambda_1$ on $S$. Every minimiser $u_0$ is a weak eigenpair of the Dirichlet Laplacian,
$$\int_\Omega Du_0\cdot Dh\,dx=\lambda_1\int_\Omega u_0h\,dx\qquad(h\in H^1_0(\Omega)),$$
with $\lambda_1=E(u_0)>0$ ([[def-symmetric-elliptic-weak-eigenpair]]); some minimiser is nonnegative, and $\lambda_1$ coincides with the first Dirichlet eigenvalue listed in [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]] for the principal Dirichlet form ([[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]]), the minimisers being exactly the elements of $S\cap E_{\lambda_1}$.

## Facts & Assumptions

**Given:** A nonempty bounded open set $\Omega\subseteq\mathbb R^n$, the Dirichlet energy $E(u)=\int_\Omega|Du|^2\,dx$ on $H^1_0(\Omega;\mathbb R)$, and the $L^2$-unit sphere $S=\{u\in H^1_0(\Omega):\|u\|_{L^2}=1\}$.

[F1] [[def-wkp-zero-as-a-sobolev-closure]], [[thm-hk-is-a-hilbert-space]], [[lem-closed-subspace-of-a-banach-space-is-banach]]: $H^1_0(\Omega)$ is the norm closure of $C_c^\infty(\Omega)$ in $H^1(\Omega)=W^{1,2}(\Omega)$, hence a closed subspace of the Banach space $H^1(\Omega)$ and itself a real Banach space with the $H^1$ norm.

[F2] [[lem-w-one-p-is-reflexive]], [[thm-closed-subspaces-of-reflexive-spaces-are-reflexive]], [[def-reflexive-banach-space]]: under the ultrafilter lemma, DC and HB the space $W^{1,2}(\Omega)$ is reflexive, and under HB its closed subspace $H^1_0(\Omega)$ is reflexive, hence a real reflexive Banach space.

[F3] [[def-convex-and-strictly-convex-functionals-on-a-banach-space]], [[lem-convex-norm-lower-semicontinuous-functionals-are-weakly-lower-semicontinuous]]: $E$ is convex, being the squared norm of the bounded linear map $u\mapsto Du$ composed with the convex square; it is continuous because $|E(u)-E(v)|\le\|Du-Dv\|_{L^2}(\|Du\|_{L^2}+\|Dv\|_{L^2})$. By the convex-lower-semicontinuity lemma (Axiom of Choice) $E$ is weakly sequentially lower semicontinuous on every nonempty convex subset of $H^1_0(\Omega)$.

[F4] [[lem-test-function-cutoffs-and-euclidean-localization]]: since $\Omega$ is nonempty and open there is a nonzero $\varphi\in C_c^\infty(\Omega)$, for instance a cutoff equal to one on a neighbourhood of a chosen point; then $u_1:=\varphi/\|\varphi\|_{L^2}$ lies in $S$, so $S\ne\varnothing$ and $\lambda_1:=\inf_SE\le E(u_1)<\infty$.

[F5] [[thm-poincare-inequality-for-w-one-p-zero]], [[lem-coercivity-of-the-principal-dirichlet-form]], [[lem-dependent-choice-implies-countable-choice]]: since the bounded set $\Omega$ is bounded in every direction, Poincaré at $p=2$ gives a constant $C_P$ with $\|v\|_{L^2}\le C_P\|Dv\|_{L^2}$ for all $v\in H^1_0(\Omega)$; by the coercivity lemma (Axiom of Choice and Countable Choice, the latter from DC) the model principal form satisfies $E(v)=\|Dv\|_{L^2}^2\ge(1+C_P^2)^{-1}\|v\|_{H^1_0}^2$.

[F6] [[lem-bounded-minimising-sequence-has-a-weakly-convergent-subsequence]]: under the ultrafilter lemma, DC and HB every norm-bounded sequence in a real reflexive Banach space has a weakly convergent subsequence.

[F7] [[lem-strong-ltwo-compactness-preserves-unit-normalisation]]: if $\Omega$ is bounded and open, $(v_j)\subseteq H^1_0(\Omega)$ is norm bounded with $v_j\rightharpoonup v$ in $H^1_0(\Omega)$ and $\|v_j\|_{L^2}=1$, then $v\in H^1_0(\Omega)$ and $\|v\|_{L^2}=1$.

[F8] [[thm-finite-regular-constraint-lagrange-multiplier-rule]], [[def-frechet-derivative-between-banach-spaces]]: let $X$ be a real Banach space, $U\subseteq X$ open, $I:U\to\mathbb R$ Fréchet differentiable at $u$, and $G:U\to\mathbb R^m$ of class $C^1$ with $DG(u)$ surjective; if $u$ is a local minimiser or maximiser of $I$ on the level set $\{G=G(u)\}$, then there is a unique $\lambda\in\mathbb R^m$ with $DI(u)=\sum_i\lambda_iDG_i(u)$.

[F9] [[lem-absolute-value-does-not-increase-dirichlet-energy-or-change-ltwo-normalisation]]: for every open $\Omega\subseteq\mathbb R^n$ and real $v\in H^1_0(\Omega)$, one has $|v|\in H^1_0(\Omega)$, $\||v|\|_{L^2}=\|v\|_{L^2}$ and $\int_\Omega|D|v||^2=\int_\Omega|Dv|^2$.

[F10] [[thm-rayleigh-principle-for-the-first-dirichlet-eigenvalue]], [[thm-discrete-spectrum-of-a-symmetric-elliptic-dirichlet-operator]], [[def-ltwo-operator-associated-with-a-symmetric-elliptic-form]], [[def-symmetric-elliptic-weak-eigenpair]]: in the symmetric case over a bounded open set the discrete spectral theorem provides the nondecreasing eigenvalue list $\lambda_1\le\lambda_2\le\cdots$ of the principal Dirichlet form and an orthonormal basis $\{e_j\}$ of $L^2(\Omega)$ of weak eigenfunctions; the Rayleigh principle states that its first eigenvalue equals $\min_{v\ne0}a_0(v,v)/\|v\|_{L^2}^2$ with $a_0(v,w)=\int_\Omega Dv\cdot Dw$, the minimum being attained exactly on $E_{\lambda_1}\setminus\{0\}$, and that it is positive whenever the form is coercive, as it is for the principal form by [F5].

## Proof

**Proof technique:** direct.

**Given:** The set $\Omega$, the energy $E$ and the unit sphere $S$ above.

1.1 By [F4] the set $S$ is nonempty and $\lambda_1=\inf_SE\le E(u_1)<\infty$; by [F1] and [F2] the space $H^1_0(\Omega)$ is a real reflexive Banach space with the $H^1$ norm, and by [F3] the functional $E$ is weakly sequentially lower semicontinuous on the convex set $H^1_0(\Omega)$. [given, F1, F2, F3, F4]

2.1 Since $0\le\lambda_1<\infty$, DC supplies a sequence $v_j\in S$ with $E(v_j)<\lambda_1+1/j$ for $j\ge1$, so $E(v_j)\to\lambda_1$. Since $\|v_j\|_{L^2}=1$ and $E(v_j)\le E(u_1)+1$ for all large $j$, one has $\|v_j\|_{H^1_0}^2=1+E(v_j)\le E(u_1)+2$, so $(v_j)$ is norm bounded; by [F6] some subsequence satisfies $v_{j_l}\rightharpoonup v_0$ in $H^1_0(\Omega)$. [step 1.1, F6]

3.1 Since $\Omega$ is bounded and open, $\|v_{j_l}\|_{L^2}=1$ and $v_{j_l}\rightharpoonup v_0$, [F7] gives $v_0\in H^1_0(\Omega)$ and $\|v_0\|_{L^2}=1$, that is $v_0\in S$. [step 2.1, F7]

4.1 By weak lower semicontinuity [F3] and step 2.1, $E(v_0)\le\liminf_lE(v_{j_l})=\lambda_1$; since $v_0\in S$ by step 3.1, also $E(v_0)\ge\lambda_1$. Hence $E(v_0)=\lambda_1$: the infimum is attained on $S$. [step 1.1, step 2.1, step 3.1, F3]

5.1 Let $v_0\in S$ be any minimiser and put $G(u):=\|u\|_{L^2}^2$; then $S=\{G=1\}=\{G=G(v_0)\}$, and $E$, $G$ are Fréchet differentiable at $v_0$ with $DE(v_0)h=2\int_\Omega Dv_0\cdot Dh\,dx$ and $DG(v_0)h=2\int_\Omega v_0h\,dx$, because the remainders $\int_\Omega|Dh|^2$ and $(\int_\Omega h^2)$ are $o(\|h\|_{H^1_0})$. The same derivative formula holds at every $u\in H^1_0$, and $\|DG(u)-DG(v)\|\le2\|u-v\|_{L^2}\le2\|u-v\|_{H^1_0}$ by Cauchy--Schwarz, so $G$ is $C^1$. Since $DG(v_0)v_0=2\|v_0\|_{L^2}^2=2\ne0$, the functional $DG(v_0)$ is surjective onto $\mathbb R$, so the multiplier rule [F8] with $m=1$ gives a unique $\lambda\in\mathbb R$ with $DE(v_0)=\lambda DG(v_0)$, that is $\int_\Omega Dv_0\cdot Dh=\lambda\int_\Omega v_0h$ for every $h\in H^1_0(\Omega)$. Testing $h=v_0$ gives $\lambda=E(v_0)=\lambda_1$; hence every minimiser is a weak eigenpair with eigenvalue $\lambda_1$. [step 4.1, F8]

5.2 A nonnegative minimiser exists: by [F9] the class $|v_0|$ lies in $H^1_0(\Omega)$ with the same $L^2$ norm and the same energy, so $|v_0|\in S$ and $E(|v_0|)=E(v_0)=\lambda_1$; thus $|v_0|$ is a minimiser and it is nonnegative. [step 4.1, F9]

6.1 The eigenvalue is positive: by [F5], $1=\|v_0\|_{L^2}\le C_P\|Dv_0\|_{L^2}$, so $\lambda_1=E(v_0)=\|Dv_0\|_{L^2}^2\ge C_P^{-2}>0$. [step 5.1, F5]



7.1 Finally, apply the Rayleigh principle [F10] to the principal Dirichlet form $a_0(v,w)=\int_\Omega Dv\cdot Dw$: its first listed eigenvalue equals $\min_{v\ne0}a_0(v,v)/\|v\|_{L^2}^2=\min_SE=\lambda_1$, the minimum being attained exactly on the eigenspace $E_{\lambda_1}$ minus the origin, and positivity holds since the principal form is coercive by [F5]. Hence the listed first Dirichlet eigenvalue is $\lambda_1$, and the minimisers of $E$ on $S$ are exactly the elements of $S\cap E_{\lambda_1}$; steps 5.1 and 6.1 show that every such minimiser is a weak eigenpair with eigenvalue $\lambda_1=E(v_0)>0$, and step 5.2 supplies a nonnegative minimiser. [step 4.1, step 5.1, step 6.1, step 5.2, F5, F10] ∎
