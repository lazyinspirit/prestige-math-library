---
id: thm-poincare-wirtinger-on-bounded-connected-extension-domains
kind: theorem
title: "Poincare-Wirtinger on bounded connected extension domains by Rellich compactness"
status: draft
origin: pipeline
pipeline_run: frontier-39-analysis-30
dependency_level: 2
deps: [thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain, thm-zero-weak-gradient-implies-componentwise-constancy, def-sobolev-space-wkp-and-its-norm, def-sobolev-extension-domain-and-extension-operator, def-l-p-space-as-a-quotient-by-null-functions, def-translation-of-a-function-on-rn, thm-holder-inequality-for-integrals, def-countable-choice, def-axiom-of-choice, lem-euclidean-balls-have-positive-finite-lebesgue-measure]
justified_by: []
aliases: []
proof_strategy: contradiction
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
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Theorem 3.29 and its full compactness proof, printed pp. 78-79; the extension-domain generality is derived here using the local Rellich and published zero-gradient constancy results."
    - title: "Juha Kinnunen, Sobolev Spaces (Aalto University, complete graduate lecture notes)"
      url: "https://math.aalto.fi/~jkkinnun/files/sobolev_spaces.pdf"
      locator: "Theorem 3.47 and its compactness-based Poincare-Sobolev proof, printed pp. 90-91, for 1<p<n; the present proof also includes p=1 via its named suppliers."
---

## Statement

Assume the Axiom of Choice. Let $n\ge1$, let $\Omega\subseteq\mathbb R^n$ be a
nonempty bounded connected extension domain, and let $1\le p<\infty$. Then there is
$C=C(\Omega,p)$ such that every $u\in W^{1,p}(\Omega;\mathbb K)$ satisfies
$$\|u-u_\Omega\|_{L^p(\Omega)}\le C\|Du\|_{L^p(\Omega)},\qquad u_\Omega:=|\Omega|^{-1}\int_\Omega u(x)\,dx.$$

## Facts & Assumptions

**Given:** the Axiom of Choice, a nonempty bounded connected extension domain $\Omega\subseteq\mathbb R^n$ of finite positive measure, $1\le p<\infty$, and the mean $u_\Omega$ of $u$. Nonempty openness supplies a ball inside $\Omega$, and boundedness supplies a containing ball; thus $0<|\Omega|<\infty$ by [[lem-euclidean-balls-have-positive-finite-lebesgue-measure]].

[F1] *Rellich compactness.* Every sequence bounded in $W^{1,p}(\Omega)$ has a subsequence converging in $L^p(\Omega)$. ([[thm-rellich-compactness-from-w-one-p-to-lp-on-an-extension-domain]], [[def-sobolev-extension-domain-and-extension-operator]])

[F2] *The mean is continuous for the $L^p$ norm.* $|u_\Omega|\le|\Omega|^{-1/p}\|u\|_{L^p}$ and hence $|\int_\Omega(u_j-u)|\le|\Omega|^{1-1/p}\|u_j-u\|_{L^p(\Omega)}$, by H\"older's inequality on the finite-measure set $\Omega$. ([[thm-holder-inequality-for-integrals]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F3] *Weak gradients vanish when tested against convergent subsequences.* If $u_j\to u$ in $L^p(\Omega)$ and $\|Du_j\|_{L^p(\Omega)}\to0$, then for every $\varphi\in C_c^\infty(\Omega)$ and every coordinate $i$, $\int_\Omega u\,\partial_i\varphi=\lim_j\int_\Omega u_j\partial_i\varphi=-\lim_j\int_\Omega D_iu_j\,\varphi=0$. ([[def-sobolev-space-wkp-and-its-norm]], [[def-l-p-space-as-a-quotient-by-null-functions]])

[F4] *Zero gradient implies constancy on components.* If $u\in W^{1,p}_{\mathrm{loc}}(\Omega)$ and $D_iu=0$ almost everywhere for all $i$, then $u$ is almost everywhere constant on each connected component of $\Omega$. ([[thm-zero-weak-gradient-implies-componentwise-constancy]])

## Proof

**Proof technique:** suppose no constant exists, normalise a violating sequence, extract a strongly convergent subsequence by Rellich, and use the vanishing gradient to force the limit to be a constant, contradicting unit norm.

1.1 Suppose the assertion fails: for every $j\ge1$ there is $v_j\in W^{1,p}(\Omega)$ with $\|v_j-(v_j)_\Omega\|_p>j\|Dv_j\|_p$, and $v_j$ is not almost everywhere constant. Put $u_j:=\bigl(v_j-(v_j)_\Omega\bigr)/\|v_j-(v_j)_\Omega\|_p$; then the mean of $u_j$ is $0$, $\|u_j\|_{L^p}=1$, and $\|Du_j\|_p\le1/j$, so $\|u_j\|_{W^{1,p}(\Omega)}\le(1+n/j^p)^{1/p}\le(1+n)^{1/p}$ for all $j$. [F2, given, assume-contra]

2.1 By [F1] there is a subsequence $u_{j_k}\to u$ in $L^p(\Omega)$. By [F2] and step 1.1 the means pass to the limit, so $\int_\Omega u=0$; and $\|u\|_{L^p}=1$ because $\bigl|\|u_{j_k}\|_p-\|u\|_p\bigr|\le\|u_{j_k}-u\|_p\to0$. [F1, F2, step 1.1]

3.1 By [F3] applied to the convergent subsequence of step 2.1 with $\|Du_{j_k}\|_p\le1/j_k\to0$, $\int_\Omega u\,\partial_i\varphi=0$ for every test function $\varphi$ and every $i$, so $D_iu=0$ almost everywhere and $u\in W^{1,p}(\Omega)$; [F4] then makes $u$ an almost everywhere constant on the connected $\Omega$, and since its mean is $0$ that constant is $0$, contradicting $\|u\|_{L^p}=1$ from step 2.1. Hence the constant $C$ exists. Countable Choice selects the violating sequence in step 1.1; the assumed Axiom of Choice also supplies [F1] and [F4]. [F3, F4, step 2.1, discharge-contradiction] ∎ 
