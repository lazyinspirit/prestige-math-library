---
id: "lem-strong-ltwo-compactness-preserves-unit-normalisation"
kind: "lemma"
title: "Weak H^1 convergence plus Rellich preserves the L^2 unit normalisation"
status: draft
origin: pipeline
pipeline_run: "frontier-39-analysis-30"
dependency_level: 2
deps:
  - "def-axiom-of-choice"
  - "def-countable-choice"
  - "def-dependent-choice"
  - "def-l-p-space-as-a-quotient-by-null-functions"
  - "def-sobolev-space-wkp-and-its-norm"
  - "def-weak-convergence-of-nets-and-sequences"
  - "def-wkp-zero-as-a-sobolev-closure"
  - "lem-nonnegative-test-pairings-imply-a-e-nonnegativity-for-ltwo-functions"
  - "lem-reverse-triangle-inequality-in-a-normed-space"
  - "thm-choice-implies-dependent-implies-countable-choice"
  - "thm-holder-inequality-for-integrals"
  - "thm-rellich-compactness-from-w-one-p-zero-to-lp"
proof_strategy: "direct"
provenance:
  statement: "literature-derived"
  proof: "ai-altered"
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (2026 author manuscript; complete 392-page archived text)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 13 Section 13.3 Constraints, printed pp. 302-305 (Lemma 13.5 and the discussion: compact embedding replaces weak closedness of the unit sphere; the strong L^2 limit keeps the normalisation)"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be a bounded open set, and let $(u_j)\subseteq H^1_0(\Omega)$ be norm bounded with $u_j\rightharpoonup u$ weakly in $H^1_0(\Omega)$ ([[def-weak-convergence-of-nets-and-sequences]], [[def-wkp-zero-as-a-sobolev-closure]], [[def-sobolev-space-wkp-and-its-norm]]) and $\|u_j\|_{L^2(\Omega)}=1$ for every $j$ ([[def-l-p-space-as-a-quotient-by-null-functions]]). Then $u\in H^1_0(\Omega)$, $\|u\|_{L^2(\Omega)}=1$, and some subsequence $(u_{j_k})$ converges to $u$ in $L^2(\Omega)$.

## Facts & Assumptions

**Given:** A bounded open set $\Omega\subseteq\mathbb R^n$, a norm-bounded sequence $(u_j)$ in $H^1_0(\Omega)=W^{1,2}_0(\Omega)$ converging weakly to $u$, with $\|u_j\|_{L^2(\Omega)}=1$ for every $j$, and the Axiom of Choice.

[A1] [[thm-choice-implies-dependent-implies-countable-choice]], [[def-axiom-of-choice]], [[def-dependent-choice]], [[def-countable-choice]]: the Axiom of Choice implies Dependent Choice, which implies Countable Choice, so every Countable-Choice hypothesis below is discharged.

[F1] [[thm-rellich-compactness-from-w-one-p-zero-to-lp]]: for a bounded open $\Omega\subseteq\mathbb R^n$ and $1\le p<\infty$ the inclusion $W^{1,p}_0(\Omega)\to L^p(\Omega)$ is compact: every sequence bounded in $W^{1,p}_0(\Omega)$ has a subsequence converging in $L^p(\Omega)$.

[F2] [[def-sobolev-space-wkp-and-its-norm]], [[def-wkp-zero-as-a-sobolev-closure]]: the $W^{1,2}$ norm dominates the $L^2$ norm, so $\|v\|_{L^2(\Omega)}\le\|v\|_{W^{1,2}_0(\Omega)}$ for every $v\in H^1_0(\Omega)$, and $H^1_0(\Omega)=W^{1,2}_0(\Omega)$ is a closed subspace of $W^{1,2}(\Omega)$ contained in $L^2(\Omega)$.

[F3] [[def-weak-convergence-of-nets-and-sequences]]: $u_j\rightharpoonup u$ in $H^1_0(\Omega)$ means $f(u_j)\to f(u)$ for every bounded linear functional $f$ on $H^1_0(\Omega)$; in particular the specified limit $u$ lies in $H^1_0(\Omega)$, and every subsequence inherits the convergence to the same limit.

[F4] [[thm-holder-inequality-for-integrals]]: applying real Hölder to $|v|$ and $|w|$ gives $\int_\Omega|vw|\le\|v\|_{L^2}\|w\|_{L^2}$ for real or complex $v,w\in L^2(\Omega)$.

[F5] [[lem-nonnegative-test-pairings-imply-a-e-nonnegativity-for-ltwo-functions]]: under Countable Choice, if $\zeta\in L^2(O;\mathbb R)$ and $\int_O\zeta\varphi=0$ for every $\varphi\in C_c^\infty(O)$, then $\zeta=0$ a.e. on $O$ (second clause of that lemma).

[F6] [[lem-reverse-triangle-inequality-in-a-normed-space]]: $\bigl|\|a\|-\|b\|\bigr|\le\|a-b\|$ in a normed space.

[F7] [[def-l-p-space-as-a-quotient-by-null-functions]]: elements of $L^2(\Omega)$ are a.e. classes, and equality of two classes means equality almost everywhere.

## Proof

**Proof technique:** direct.

**Given:** A bounded open set $\Omega\subseteq\mathbb R^n$, a norm-bounded sequence $(u_j)$ in $H^1_0(\Omega)$ with $u_j\rightharpoonup u$ and $\|u_j\|_{L^2}=1$ for all $j$, and the Axiom of Choice.

1.1 By [F1] with $p=2$ and the bounded open set $\Omega$, applied to the norm-bounded sequence $(u_j)\subseteq W^{1,2}_0(\Omega)=H^1_0(\Omega)$, there are a subsequence $(u_{j_k})$ and a class $w\in L^2(\Omega)$ with $\|u_{j_k}-w\|_{L^2(\Omega)}\to0$. [given, F1, F2]

2.1 We claim $w=u$ in $L^2(\Omega)$. Fix a real test $\varphi\in C_c^\infty(\Omega;\mathbb R)$ and consider the linear functional $f_\varphi(v):=\int_\Omega v\varphi$, which is bounded on $H^1_0(\Omega)$ because $|f_\varphi(v)|\le\|v\|_{L^2}\| \varphi\|_{L^2}\le\|v\|_{W^{1,2}}\|\varphi\|_{L^2}$ by [F2, F4]. Since $(u_{j_k})$ is a subsequence of a weakly convergent sequence, [F3] gives $f_\varphi(u_{j_k})\to f_\varphi(u)$, that is $\int_\Omega u_{j_k}\varphi\to\int_\Omega u\varphi$; on the other hand [F4] gives $\bigl|\int_\Omega(u_{j_k}-w)\varphi\bigr|\le\|u_{j_k}-w\|_{L^2}\|\varphi\|_{L^2}\to0$, so $\int_\Omega(u-w)\varphi=0$ for every $\varphi\in C_c^\infty(\Omega)$. Writing $\zeta:=u-w\in L^2(\Omega)$, the real and imaginary parts belong to $L^2(\Omega;\mathbb R)$ since their absolute values are at most $|\zeta|$. Their pairings with every real test vanish separately. The second clause of [F5], with both open sets equal to $\Omega$, therefore applies to each part: zero pairings in particular satisfy its nonnegative-pairing hypothesis. Both parts vanish a.e., so $\zeta=0$ a.e. and $w=u$ by [F7]; for real scalars the imaginary part is zero already. [step 1.1, F2, F3, F4, F5, F7]

3.1 By step 1.1 and step 2.1 the subsequence converges to $u$ in $L^2(\Omega)$; since $\|u_{j_k}\|_{L^2}=1$ for every $k$, the reverse triangle inequality [F6] gives $\bigl|\|u\|_{L^2}-\|u_{j_k}\|_{L^2}\bigr|\le\|u-u_{j_k}\|_{L^2}\to0$, hence $\|u\|_{L^2(\Omega)}=1$. [step 1.1, step 2.1, F6, algebra]

4.1 The weak limit $u$ lies in $H^1_0(\Omega)$ by [F3]; the subsequence $(u_{j_k})$ converges to $u$ in $L^2(\Omega)$ by steps 1.1 and 2.1; and $\|u\|_{L^2(\Omega)}=1$ by step 3.1. This proves the assertion; the Countable Choice required by [F5] and by the extraction in [F1] is supplied by the Axiom of Choice through [A1]. [step 1.1, step 3.1, A1, F3] ∎

