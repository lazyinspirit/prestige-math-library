---
id: thm-higher-order-rellich-kondrachov
kind: theorem
title: "Higher-order Rellich--Kondrachov compactness"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 5
deps: [lem-weak-partial-derivatives-lower-sobolev-order, thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain, thm-higher-order-sobolev-embedding, thm-arzela-ascoli-for-real-ck, thm-metric-compactness-equivalences, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-riesz-fischer-completeness-of-l-p, def-weak-derivative-of-a-locally-integrable-function, def-ck-and-multi-index-notation-in-several-variables, def-hk-and-hk-zero-notation, def-sobolev-space-wkp-and-its-norm, def-sobolev-extension-domain-and-extension-operator, def-l-p-space-as-a-quotient-by-null-functions, thm-lyapunov-interpolation-inequality-for-l-p-norms, thm-holder-inequality-for-integrals, def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, def-compactly-embedded-normed-spaces, def-countable-choice, def-dependent-choice, def-axiom-of-choice, thm-extension-theorem-for-bounded-smooth-domains, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, lem-weak-leibniz-rule-with-a-smooth-factor]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Theorem 3.49, all clauses, and the reduction to derivatives, printed p. 76"
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Theorem 9.31 with Corollary 9.32, printed pp. 218-219"
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Theorem 3.44 and its first-order compactness proof, printed pp. 85-89; the higher-order derivative-family and Holder-limit argument is derived locally, rather than quoted from a higher-order iteration remark."
---

## Statement

Assume the Axiom of Choice. Let $n\ge2$, let $\Omega\subseteq\mathbb R^n$ be a
bounded extension domain, let $k>m\ge0$ be integers and $1\le p<\infty$; write
$p^{*}_{k-m}=\frac{np}{n-(k-m)p}$ when $(k-m)p<n$.

- (a) If $(k-m)p<n$, then $W^{k,p}(\Omega)$ is compactly embedded in
  $W^{m,q}(\Omega)$ for every $1\le q<p^{*}_{k-m}$.
- (b) If $(k-m)p\ge n$, then $W^{k,p}(\Omega)$ is compactly embedded in
  $W^{m,q}(\Omega)$ for every finite $q$.
- (c) If $(k-m)p>n$ and $0\le\beta<1$ with $\beta<k-m-\frac np$, then every sequence bounded
  in $W^{k,p}(\Omega)$ has a subsequence whose representatives converge in
  $C^{m,\beta}(\overline\Omega)$.

## Facts & Assumptions

**Given:** the Axiom of Choice, a bounded extension domain $\Omega\subseteq\mathbb R^n$, integers $k>m\ge0$, $1\le p<\infty$, and a sequence $(u_j)$ with $M:=\sup_j\|u_j\|_{W^{k,p}(\Omega)}<\infty$.

[F1] *Lower-order derivatives.* For every $|\alpha|\le m$, the sequence $(D^\alpha u_j)$ is bounded in $W^{1,p}(\Omega)$, with norm at most $CM$, because $k-|\alpha|\ge1$. ([[lem-weak-partial-derivatives-lower-sobolev-order]], [[def-sobolev-space-wkp-and-its-norm]], [[def-hk-and-hk-zero-notation]])

[F2] *First-order $L^p$ compactness.* On a bounded extension domain, every sequence bounded in $W^{1,p}(\Omega)$ has a subsequence converging in $L^p(\Omega)$. ([[thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain]])

[F3] *Higher-order continuous embeddings.* Applying the higher-order Sobolev embedding on the support ball $B$ to each $D^\alpha v_j$, where $v_j=\eta Eu_j$ is the compactly supported extension in step 1.1, gives, uniformly in $j$ and $|\alpha|\le m$, an $L^{p^*_{k-m}}$ bound when $(k-m)p<n$, a bound in every finite $L^r$ when $(k-m)p\ge n$, and a $C^{m,\beta'}(\overline\Omega)$ bound for $(u_j)$ by restriction when $(k-m)p>n$ and $0<\beta'<\min\{1,k-m-\frac np\}$. For derivatives with $|\alpha|<m$, the remaining Sobolev order is larger; finite-measure inclusion handles any stronger resulting integrability. ([[lem-weak-partial-derivatives-lower-sobolev-order]], [[thm-higher-order-sobolev-embedding]], [[def-sobolev-extension-domain-and-extension-operator]], [[def-compactly-embedded-normed-spaces]])

[F4] *Finite-measure inclusion, interpolation, and completeness.* If $1\le q\le p$, then $\|g\|_{L^q(\Omega)}\le |\Omega|^{1/q-1/p}\|g\|_{L^p(\Omega)}$; if $p<q<r<\infty$ and $1/q=\lambda/p+(1-\lambda)/r$, then $\|g\|_{L^q}\le\|g\|_{L^p}^{\lambda}\|g\|_{L^r}^{1-\lambda}$. Each $L^q(\Omega)$ is complete for $1\le q<\infty$. ([[thm-holder-inequality-for-integrals]], [[thm-lyapunov-interpolation-inequality-for-l-p-norms]], [[thm-riesz-fischer-completeness-of-l-p]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F5] *Weak derivatives pass to strong limits.* If $f_j\to f$ and $D_i f_j\to g_i$ in $L^q(\Omega)$ for $1\le q<\infty$, passing to the limit in the test identity shows $D_i f=g_i$ weakly. Iterating gives the same conclusion for all derivatives of order at most $m$. ([[def-weak-derivative-of-a-locally-integrable-function]], [[def-sobolev-space-wkp-and-its-norm]])

[F6] *Arzel\`a--Ascoli.* A uniformly bounded equicontinuous family on a nonempty compact metric space has compact closure in the supremum norm; under Countable and Dependent Choice this gives a uniformly convergent subsequence. For complex functions apply the real result to real and imaginary parts. ([[thm-arzela-ascoli-for-real-ck]], [[thm-metric-compactness-equivalences]], [[def-countable-choice]], [[def-dependent-choice]])

[F7] *Uniform limits preserve classical derivatives.* If $C^1$ functions and their first derivatives converge uniformly on compact balls, the limit is $C^1$ there and its derivatives are the corresponding limits; apply the fundamental theorem of calculus on line segments, coordinate by coordinate. ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]], [[def-ck-and-multi-index-notation-in-several-variables]])

[F8] *H\"older interpolation.* For $0<\beta<\beta'<1$, a uniformly convergent sequence with uniformly bounded $C^{0,\beta'}$ seminorms converges in $C^{0,\beta}$. Indeed, the difference quotient is bounded by the minimum of $2\|g\|_\infty |x-y|^{-\beta}$ and $[g]_{C^{0,\beta'}}|x-y|^{\beta'-\beta}$, yielding the usual interpolation estimate with a constant depending on $\beta,\beta'$. ([[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]])

## Proof

**Proof technique:** extract strong $L^p$ convergence for the finite derivative family, interpolate against higher-order Sobolev bounds, and use Arzel\`a--Ascoli for the supercritical Hölder conclusion.

1.1 If $\Omega=\varnothing$, all target spaces are trivial and the assertions hold. Otherwise choose the bounded extension $E$ at $(k,p)$ and a smooth cutoff $\eta$ equal to one near $\overline\Omega$, with compact support in a ball $B$. By the weak Leibniz rule, $v_j=\eta Eu_j$ is bounded in $W^{k,p}(\mathbb R^n)$ and equals $u_j$ on $\Omega$ ([[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]], [[lem-weak-leibniz-rule-with-a-smooth-factor]]). For each $|\alpha|\le m$, $D^\alpha v_j$ is bounded in $W^{1,p}(B)$ by [F1]. The smooth ball is a $W^{1,p}$-extension domain ([[thm-extension-theorem-for-bounded-smooth-domains]]), so [F2] applied on $B$, followed by restriction to $\Omega$, gives a common subsequence on which all $D^\alpha u_j$ converge in $L^p(\Omega)$. Only finitely many derivative sequences are extracted. [F1, F2, F3, given]

2.1 Consider cases (a) and (b). By [F3], for every $|\alpha|\le m$ the sequence $(D^\alpha u_{j_k})$ is bounded in $L^{p^*_{k-m}}(\Omega)$ in case (a), and in every finite $L^r(\Omega)$ in case (b). If $q\le p$, finite- measure inclusion [F4] and step 1.1 make each derivative sequence Cauchy in $L^q$. If $p<q<p^*_{k-m}$ in case (a), choose $r=p^*_{k-m}$; if $p<q<\infty$ in case (b), choose any finite $r>q$. Lyapunov interpolation [F4] applied to differences, whose $L^p$ norms tend to zero by step 1.1 and whose $L^r$ norms are uniformly bounded by [F3], makes every derivative sequence Cauchy in $L^q$. Completeness of $L^q$ gives limits $v_\alpha$. Passing to the limit in the weak derivative test identities by [F5] shows that $v_\alpha=D^\alpha v_0$ for all $|\alpha|\le m$, so $u_{j_k}\to v_0$ in $W^{m,q}(\Omega)$. The higher-order embedding [F3] also gives boundedness of the inclusion into each stated target, so this is compact embedding. [F3, F4, F5, step 1.1]

3.1 Consider case (c), and fix $0\le\beta<\min\{1,k-m-\frac np\}$. Choose $\beta'$ with $\beta<\beta'<\min\{1,k-m-\frac np\}$. By [F3] the sequence is bounded in $C^{m,\beta'}(\overline\Omega)$, so each of its finitely many derivative families of orders at most $m$ is uniformly bounded and equicontinuous on the compact set $\overline\Omega$. By [F6], applying Arzel\`a--Ascoli successively to these derivative families gives a common subsequence on which every $D^\alpha u_{j_k}$ converges uniformly to a continuous function $v_\alpha$ on $\overline\Omega$. On each ball compactly contained in $\Omega$, [F7] applied to line segments shows that $v_{\alpha+e_i}$ is the classical $i$-th derivative of $v_\alpha$ whenever $|\alpha|<m$; hence $v_0$ is a representative in $C^m(\Omega)$ whose derivatives through order $m$ extend continuously to $\overline\Omega$. For $\beta=0$ the uniform convergence is the desired $C^{m,0}$ convergence. For $\beta>0$, [F8] applied to each difference $D^\alpha(u_{j_k}-u_{j_\ell})$, using uniform convergence and the uniform $C^{0,\beta'}$ bounds, gives convergence in $C^{m,\beta}(\overline\Omega)$ to $v_0$: each uniform limit $v_\alpha$ retains the bounded $\beta'$ seminorm by passage to the limit in the pointwise difference quotients, so [F8] applies directly to $D^\alpha u_{j_k}-v_\alpha$. Thus the asserted compact embedding holds, and the Axiom of Choice supplies the subsequence and the choice interfaces of [F2] and [F6]. [F3, F6, F7, F8, step 1.1] ∎