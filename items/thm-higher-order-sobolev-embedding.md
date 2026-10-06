---
id: thm-higher-order-sobolev-embedding
kind: theorem
title: "Higher-order Sobolev embedding"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 4
deps: [def-axiom-of-choice, def-l-p-space-as-a-quotient-by-null-functions, def-sobolev-space-wkp-and-its-norm, def-hk-and-hk-zero-notation, def-sobolev-extension-domain-and-extension-operator, def-local-holder-and-c-two-alpha-norms-on-euclidean-balls, lem-weak-partial-derivatives-lower-sobolev-order, lem-weak-derivatives-are-unique-almost-everywhere, def-sobolev-conjugate-exponent, thm-morrey-inequality-for-p-greater-than-n, thm-holder-inequality-for-integrals, thm-gagliardo-nirenberg-sobolev-inequality-for-p-one, thm-gagliardo-nirenberg-sobolev-inequality, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, lem-euclidean-bump-for-a-compact-set-inside-an-open-set, lem-weak-leibniz-rule-with-a-smooth-factor, lem-mollification-commutes-with-weak-derivatives-in-the-interior, thm-riesz-fischer-completeness-of-l-p, cor-vector-valued-ftc-and-lipschitz-bound, thm-complex-lp-completeness-and-almost-everywhere-subsequences]
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  references:
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, 2026, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Chapter 3 §3.5, Remark 3.41 and its iteration argument, printed pp. 83–84; §3.3, Theorem 3.23 and Remarks 3.25, printed pp. 75–77, for the first-order Morrey input."
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Chapter 9 §9.3, Theorem 9.22 and the higher-order iterates, printed pp. 211-214."
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $n\ge2$, let $\Omega$ be a bounded $W^{k,p}$-extension domain, $k\ge1$ and $1\le p<\infty$. Let $\mathbb K\in\{\mathbb R,\mathbb C\}$ and $u\in W^{k,p}(\Omega;\mathbb K)$. Then:

1. if $kp<n$, $\|u\|_{L^q(\Omega)}\le C\|u\|_{W^{k,p}(\Omega)}$ for every $q$ with $\frac1q\ge\frac1p-\frac kn$ (equivalently $1\le q\le\frac{np}{n-kp}$);
2. if $kp=n$, $\|u\|_{L^q(\Omega)}\le C(q)\|u\|_{W^{k,p}(\Omega)}$ for every finite $q$;
3. if $kp>n$, then for every integer $m\ge0$ and every $0<\alpha<1$ with $m+\alpha<k-\frac np$ there is a representative in $C^{m,\alpha}(\overline\Omega)$ with $\|u\|_{C^{m,\alpha}(\overline\Omega)}\le C\|u\|_{W^{k,p}(\Omega)}$; when $k-\frac np\notin\mathbb Z$ one may take $m=\lfloor k-\frac np\rfloor$ and $\alpha=k-\frac np-m$.

Here $C^{m,\alpha}(\overline\Omega)$ uses the continuous derivatives of the constructed representative on an ambient neighbourhood of $\overline\Omega$, with norm
$$\|g\|_{C^{m,\alpha}(\overline\Omega)}:=\sum_{|\beta|\le m}\sup_{\overline\Omega}|D^\beta g|+\sum_{|\beta|=m}\sup_{\substack{x,y\in\overline\Omega\\x\ne y}}\frac{|D^\beta g(x)-D^\beta g(y)|}{|x-y|^\alpha}.$$
For $\Omega=\varnothing$ set these norm values to $0$. The proof supplies such an ambient representative, so no boundary differentiability or regularity of $\partial\Omega$ is assumed.

## Facts & Assumptions

**Given:** The Axiom of Choice; $n\ge2$; a bounded extension domain $\Omega$; $k\ge1$; $1\le p<\infty$; a class $u\in W^{k,p}(\Omega;\mathbb K)$.

[F1] Lower-order derivatives: for every multi-index $\beta$ with $|\beta|\le k$, $D^\beta u\in W^{k-|\beta|,p}(\Omega)$ and $\|D^\beta u\|_{W^{k-|\beta|,p}}\le C\|u\|_{W^{k,p}}$ ([[lem-weak-partial-derivatives-lower-sobolev-order]], [[def-sobolev-space-wkp-and-its-norm]], [[def-hk-and-hk-zero-notation]], [[def-l-p-space-as-a-quotient-by-null-functions]]).

[F2] For $1\le q<n$, the Sobolev conjugate $q^*=nq/(n-q)$ is finite and satisfies $1/q^*=1/q-1/n$; iterating this relation gives $p_k^*=np/(n-kp)$ when $kp<n$ ([[def-sobolev-conjugate-exponent]]).

[F3] The local Morrey estimate: for $n<q<\infty$, $w\in W^{1,q}$ has a continuous representative and $[w]_{C^{0,1-n/q}(B(a,r))}\le C(n,q)\|Dw\|_{L^q(B(a,2r))}$ when the doubled ball is compactly contained in its domain ([[thm-morrey-inequality-for-p-greater-than-n]], [[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]]).

[F4] Holder's inequality on a bounded measurable set $B$ compares $L^r(B)$ and $L^s(B)$ for $1\le r\le s<\infty$ ([[thm-holder-inequality-for-integrals]]).

[F5] The extension operator and the whole-space results are used through the extension domain hypothesis ([[def-sobolev-extension-domain-and-extension-operator]]); the Axiom of Choice is inherited from the suppliers.

[F6] Because $\Omega$ is bounded, $\overline\Omega$ is compact. Choose a ball $B$ containing $\overline\Omega$, a smooth cutoff $\eta\in C_c^\infty(B)$ equal to $1$ on a neighbourhood of $\overline\Omega$, and a bounded extension operator $E:W^{k,p}(\Omega)\to W^{k,p}(\mathbb R^n)$. Then $v:=\eta Eu$ is compactly supported in $B$, belongs to $W^{k,p}(\mathbb R^n)$, satisfies $v=u$ on $\Omega$, and $\|v\|_{W^{k,p}(\mathbb R^n)}\le C\|u\|_{W^{k,p}(\Omega)}$; its weak derivatives restrict to those of $u$ on $\Omega$ ([[def-sobolev-extension-domain-and-extension-operator]], [[lem-euclidean-bump-for-a-compact-set-inside-an-open-set]], [[lem-weak-leibniz-rule-with-a-smooth-factor]]).

[F7] The whole-space first-order inequality holds for $1<q<n$ ([[thm-gagliardo-nirenberg-sobolev-inequality]]). At $q=1$ it extends to $W^{1,1}$ from [[thm-gagliardo-nirenberg-sobolev-inequality-for-p-one]] using [[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]]: apply the smooth estimate to differences; use [[thm-riesz-fischer-completeness-of-l-p]], [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]] for the $L^{n/(n-1)}$ limit and successive almost-everywhere subsequences in that space and $L^1$ to identify it with the original class.

[F8] For $q>n$, apply the local Morrey estimate [F3] on a ball containing the compact support of $v$; it bounds the Holder seminorm of a representative by $C\|Dv\|_{L^q}$; its supremum on that ball is bounded by the average, at most $|B|^{-1/q}\|v\|_{L^q(B)}$, plus the oscillation bound. Hence it gives a $C^{0,1-n/q}$ representative with norm bounded by $C\|v\|_{W^{1,q}(\mathbb R^n)}$, in particular on $\overline\Omega$ ([[thm-morrey-inequality-for-p-greater-than-n]], [[def-local-holder-and-c-two-alpha-norms-on-euclidean-balls]]).

[F9] Continuous weak first derivatives are classical derivatives. On an inner ball, convolution of a continuous function converges uniformly on smaller compact balls, because $|(\rho_\varepsilon*f)(x)-f(x)|\le\sup_{|h|\le\varepsilon}|f(x-h)-f(x)|$ and continuity on the compact neighbourhood is uniform. The same applies to its continuous weak derivatives; [[lem-mollification-commutes-with-weak-derivatives-in-the-interior]] identifies their convolutions with derivatives of the smooth mollification. Pass to the limit in the coordinate segment identity from [[cor-vector-valued-ftc-and-lipschitz-bound]] to obtain $f(x+te_i)-f(x)=\int_0^t g_i(x+se_i)ds$. Differentiating this identity gives $\partial_i f=g_i$; repeat for higher orders. Weak representatives are unique ([[lem-weak-derivatives-are-unique-almost-everywhere]]).

## Proof

1.1 Whole-space iteration. Let $B$ be the fixed bounded support ball from [F6]. Suppose $1\le q_0<n$ and $w\in W^{\ell,q_0}(\mathbb R^n)$ is supported in $B$, with $\ell\ge1$, and put $1/q_1=1/q_0-1/n$, so $q_1=q_0^*$. For every $|\beta|\le\ell-1$, [F1] gives $D^\beta w\in W^{1,q_0}(\mathbb R^n)$ with norm bounded by $C\|w\|_{W^{\ell,q_0}}$. Applying the whole-space inequality [F7] to each derivative gives $D^\beta w\in L^{q_1}$; summing the finitely many norms shows $w\in W^{\ell-1,q_1}(\mathbb R^n)$ with controlled norm. Compact support is retained, and [F2] gives the invariant $\ell-n/q_0=(\ell-1)-n/q_1$. The $q_0=1$ case uses the p=1 inequality and its density passage in [F7]. [F1, F2, F5, F6, F7, algebra]

1.2 Assertion (3): global Holder representatives. Assume $kp>n$ and choose $m\ge0$, $0<\alpha<1$ with $m+\alpha\le k-\frac np$; for the endpoint equality, require $k-\frac np\notin\mathbb Z$ and $m=\lfloor k-\frac np\rfloor$. Fix $\beta$ with $|\beta|\le m$ and put $\ell:=k-|\beta|$ and $t:=n/p$, so $\ell-t\ge\alpha$. By [F1] and [F6], $w:=D^\beta v$ is compactly supported in $W^{\ell,p}(\mathbb R^n)$ with norm at most $C\|u\|_{W^{k,p}(\Omega)}$. Starting from $(\ell,p)$, whenever the current exponent $q<n$ and current order $r\ge2$, apply [F7] to every derivative of $w$ of order at most $r-1$; this gives $w\in W^{r-1,q^*}$, where $1/q^*=1/q-1/n$, with controlled norm. The invariant $r-n/q=\ell-n/p\ge\alpha>0$ shows the process cannot stop with order $1$ and exponent below $n$. If it reaches $q>n$, write the remaining order as $r$. When $r=1$, take $q'=q$; Morrey gives exponent $1-n/q=\ell-n/p\ge\alpha$. When $r\ge2$, the first derivatives of $w$ lie in $W^{1,q}$; [F8] bounds them and $w$ on the fixed compact support, so $w\in W^{1,q'}(\mathbb R^n)$ for every finite $q'$, and choose $q'>n$ with $1-n/q'>\alpha$. If the iteration reaches $q=n$, then the invariant gives $r-n/q=r-1\ge\alpha>0$, hence $r\ge2$. Thus $w$ and its first derivatives are compactly supported in $W^{1,n}$; on their common bounded support, Holder puts them in $W^{1,s}$ for any $1<s<n$ sufficiently close to $n$, and [F7] then puts them in $L^{s^*}$ for $s^*=ns/(n-s)$, which can be chosen arbitrarily large. Hence again $w\in W^{1,q'}$ for some $q'>n$ with $1-n/q'>\alpha$. In every case $w\in W^{1,q'}$ for an exponent $q'>n$ with $1-n/q'\ge\alpha$, and its norm is bounded by $C\|u\|_{W^{k,p}}$. [F1, F3, F6, F7, F8, algebra]

2.1 Assertion (1). Assume $kp<n$ and take the compactly supported extension $v$ from [F6]. Iterating step 1.1 for $j=1,\dots,k-1$ gives $v\in W^{1,p_{k-1}}(\mathbb R^n)$ with $1/p_j=1/p-j/n$; all exponents are finite and $p_j<n$ because $(j+1)p<n$ for $j\le k-1$. One more application of [F7] gives $v\in L^{p_k^*}(\mathbb R^n)$, where $1/p_k^*=1/p-k/n$ by [F2]. For every $1\le q\le p_k^*$, Holder [F4] on the fixed support ball $B$ gives $\|v\|_{L^q(\mathbb R^n)}\le C(B,p,q)\|v\|_{L^{p_k^*}(\mathbb R^n)}$; the whole-space endpoint estimate and [F6] bound this by $C(n,k,p,q,\Omega)\|u\|_{W^{k,p}(\Omega)}$. Since $v=u$ on $\Omega$, restriction proves (1). [F2, F4, F6, F7, step 1.1, algebra]

2.2 Assertion (2). Assume $kp=n$, and take $v$ from [F6]. Iterating step 1.1 through $k-1$ reductions gives $v\in W^{1,n}(\mathbb R^n)$ with support in $B$. If $1\le q\le n$, Holder [F4] on $B$ bounds $\|v\|_{L^q}$ by $C(B,q)\|v\|_{L^n}$. If $q>n$, set $s=nq/(n+q)$, so $1<s<n$ and $s^*=q$; compact support and Holder give $v\in W^{1,s}(\mathbb R^n)$ with $\|v\|_{W^{1,s}}\le C(B,s)\|v\|_{W^{1,n}}$, and [F7] gives $\|v\|_{L^q}\le C(n,s)\|v\|_{W^{1,s}}$. In both cases the norm is bounded by $C(n,k,q,\Omega)\|u\|_{W^{k,p}(\Omega)}$ using [F6]; restriction to $\Omega$ proves (2), with no $L^\infty$ endpoint asserted. [F4, F6, F7, step 1.1, algebra]

3.1 Apply [F3] and [F8] with this exponent $q'$ to $w$ on a ball containing $\overline\Omega$. This gives a representative $g_\beta\in C^{0,\alpha}(\overline\Omega)$ with $\|g_\beta\|_{C^{0,\alpha}(\overline\Omega)}\le C\|u\|_{W^{k,p}(\Omega)}$, uniformly over the finitely many $|\beta|\le m$. By [F9], whenever $|\beta|<m$, the classical derivatives of $g_\beta$ are the continuous representatives $g_{\beta+e_i}$, since these represent the weak derivatives of $D^\beta v$ and weak derivatives are unique. Therefore $g_0\in C^{m,\alpha}(\overline\Omega)$, represents $u$, and its $C^{m,\alpha}$ norm is bounded by the sum of the finitely many bounds just obtained. This proves (3) for the strict range and also the stated fractional-endpoint case: there $\ell-t=\alpha$ for $|\beta|=m$, and the final Morrey exponent is exactly $\alpha$, which is allowed by [F8]. [F3, F8, F9, step 1.2, algebra] ∎

## Source notes

The higher-order embedding is the iteration of the first-order Sobolev inequalities motivated by Kinnunen (Theorem 3.23 and the local higher-order iteration of Remark 3.41) and Teschl (Theorem 9.22), followed by Morrey's estimate. The compactly supported whole-space extension reduces the boundary claim to one fixed ball containing the domain closure; it is essential here because the local Morrey statement alone only controls balls compactly contained in the open set. The finite iteration stops at a supercritical exponent, or at the critical exponent with at least two derivatives remaining, and supplies the global closure-wide Holder norm claimed above.
