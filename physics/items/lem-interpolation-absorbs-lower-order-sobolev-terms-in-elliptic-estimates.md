---
id: lem-interpolation-absorbs-lower-order-sobolev-terms-in-elliptic-estimates
kind: lemma
title: "Absorption of lower-order Sobolev terms in the elliptic estimate"
status: published
origin: pipeline
pipeline_run: frontier-39-analysis-30
deps: [def-sobolev-space-wkp-and-its-norm, def-hk-and-hk-zero-notation, def-wkp-zero-as-a-sobolev-closure, thm-young-inequality-real-exponents, lem-compact-support-zero-extension-in-wkp, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, lem-classical-derivatives-are-weak-derivatives, def-countable-choice]
landmark: false
dependency_level: 0
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-06
sources:
  scraped: []
  references:
    - title: "Leon Simon, Lectures on Partial Differential Equations (Stanford, complete 223-page author scan)"
      url: "https://math.stanford.edu/~lms/lecs-on-pde.pdf"
      locator: "Lecture 5, Lemma 6 and proof, printed pp. 52-53 (read in full)"
    - title: "John K. Hunter, Notes on Partial Differential Equations (UC Davis, revised 18 June 2014, complete 242-page two-quarter graduate notes)"
      url: "https://www.math.ucdavis.edu/~hunter/pdes/pde_notes.pdf"
      locator: "Section 4.11, Cauchy inequality with $\epsilon$ in the proof of Theorem 4.27, printed p. 113 (read in full)"
---

## Statement

Assume Countable Choice. Let $\Omega\subseteq\mathbb R^n$ be open, $n\ge1$,
$\mathbb K\in\{\mathbb R,\mathbb C\}$, and let $m\ge1$. For every
$\varepsilon>0$ there is $C=C(n,m,\varepsilon)$ such that every
$u\in H^{m+1}_0(\Omega;\mathbb K)$ satisfies
$$\|D^mu\|_{L^2(\Omega)}\le\varepsilon\,\|D^{m+1}u\|_{L^2(\Omega)}+C\,\|D^{m-1}u\|_{L^2(\Omega)},$$
and the same estimate holds for every $u\in H^{m+1}(\Omega;\mathbb K)$ whose
class vanishes almost everywhere outside a compact subset of $\Omega$. In
both displays
$$\|D^ju\|_{L^2(\Omega)}^2:=\sum_{\alpha\in\mathbb N_0^n,\,|\alpha|=j}\|D^\alpha u\|_{L^2(\Omega)}^2 .$$
In particular, for $u\in H^2_0(\Omega;\mathbb K)$,
$$\|Du\|_{L^2(\Omega)}\le\varepsilon\|D^2u\|_{L^2(\Omega)}+C_\varepsilon\|u\|_{L^2(\Omega)} .$$
The constants are not asserted sharp, and the estimate is the tool that
absorbs commutator terms linear in the highest derivatives.

## Facts & Assumptions

**Given:** Countable Choice; an open set $\Omega\subseteq\mathbb R^n$ with
$n\ge1$; a scalar field $\mathbb K\in\{\mathbb R,\mathbb C\}$; an integer
$m\ge1$; a tolerance $\varepsilon>0$; and a class $u$ lying in
$H^{m+1}_0(\Omega;\mathbb K)$ or in $H^{m+1}(\Omega;\mathbb K)$ with compact
support in $\Omega$; write $N_m:=\#\{\alpha\in\mathbb N_0^n:|\alpha|=m\}$.

[F1] Classical derivatives of smooth functions are weak derivatives: for
$w\in C^k(\Omega)$ and $|\alpha|\le k$ and every
$\varphi\in C_c^\infty(\Omega)$,
$\int_\Omega w\,D^\alpha\varphi=(-1)^{|\alpha|}\int_\Omega(\partial^\alpha w)\varphi$,
so the componentwise classical derivative represents the weak derivative.
([[lem-classical-derivatives-are-weak-derivatives]])

[F2] The Sobolev norm of
[[def-sobolev-space-wkp-and-its-norm]] is
$\|u\|_{W^{k,p}(\Omega)}^p=\sum_{|\alpha|\le k}\|D^\alpha u\|_{L^p(\Omega)}^p$
for $p<\infty$, so for every $|\alpha|\le k$ one has
$\|D^\alpha u\|_{L^p(\Omega)}\le\|u\|_{W^{k,p}(\Omega)}$, and convergence in
$W^{k,p}$ implies convergence of every derivative class of order at most $k$
in $L^p$.

[F3] $H^k=W^{k,2}$ and $H^k_0$ is the closure of $C_c^\infty(\Omega)$ in the
$W^{k,2}$ norm; a class lies in $H^k_0(\Omega)$ exactly when it is a limit in
$W^{k,2}(\Omega)$ of test functions. ([[def-hk-and-hk-zero-notation]],
[[def-wkp-zero-as-a-sobolev-closure]])

[F4] Young's inequality: for $p,q>1$ with $1/p+1/q=1$ and real $A,B\ge0$ one
has $AB\le A^p/p+B^q/q$. ([[thm-young-inequality-real-exponents]])

[F5] Zero extension: if $u\in W^{k,p}(\Omega)$ vanishes almost everywhere
outside a compact subset of $\Omega$, then its extension by zero $E_0u$ lies
in $W^{k,p}(\mathbb R^n)$, with $D^\alpha(E_0u)=E_0(D^\alpha u)$ almost
everywhere for $|\alpha|\le k$ and
$\|E_0(D^\alpha u)\|_{L^p(\mathbb R^n)}=\|D^\alpha u\|_{L^p(\Omega)}$; in
particular the $W^{k,p}$ norms agree. ([[lem-compact-support-zero-extension-in-wkp]])

[F6] $C_c^\infty(\mathbb R^n)$ is dense in $W^{k,p}(\mathbb R^n)$ for
$k\in\mathbb N_0$ and $1\le p<\infty$. ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]])



## Proof

**Proof technique:** direct.

1.1 Let $u\in C_c^\infty(\Omega)$ and let $\alpha\in\mathbb N_0^n$ satisfy $|\alpha|=m\ge1$; choose a coordinate $k$ with $\alpha_k\ge1$. The class $\overline{D^\alpha u}$ is of class $C^\infty$ on $\Omega$, and the multi-index $e_k$ has $|e_k|=1$, so [F1] applied to $w:=\overline{D^\alpha u}$ with test function $\varphi:=D^{\alpha-e_k}u\in C_c^\infty(\Omega)$ gives $$\int_\Omega|D^\alpha u|^2\,dx=\int_\Omega\overline{D^\alpha u}\,D^\alpha u\,dx=-\int_\Omega\big(\partial_k\overline{D^\alpha u}\big)\,D^{\alpha-e_k}u\,dx=-\int_\Omega D^{\alpha-e_k}u\,\overline{D^{\alpha+e_k}u}\,dx,$$ because $\partial_k\overline{D^\alpha u}=\overline{\partial_kD^\alpha u}=\overline{D^{\alpha+e_k}u}$. [F1, algebra]

2.1 For the same $u\in C_c^\infty(\Omega)$ and each such $\alpha$, Cauchy-Schwarz and the component bounds of [F2] give $$\Big|\int_\Omega D^{\alpha-e_k}u\,\overline{D^{\alpha+e_k}u}\,dx\Big|\le\|D^{\alpha-e_k}u\|_{L^2(\Omega)}\,\|D^{\alpha+e_k}u\|_{L^2(\Omega)}\le\|D^{m-1}u\|_{L^2(\Omega)}\,\|D^{m+1}u\|_{L^2(\Omega)}.$$ Summing the resulting estimates $|D^\alpha u|_{L^2}^2\le\|D^{m-1}u\|\,\|D^{m+1}u\|$ over the finitely many $\alpha$ with $|\alpha|=m$ gives $$\|D^mu\|_{L^2(\Omega)}^2\le N_m\,\|D^{m-1}u\|_{L^2(\Omega)}\,\|D^{m+1}u\|_{L^2(\Omega)}.$$ [F2, step 1.1, algebra]

3.1 Write $A:=\|D^{m+1}u\|_{L^2(\Omega)}$ and $B:=\|D^{m-1}u\|_{L^2(\Omega)}$, and set $x:=\varepsilon A$ and $y:=N_mB/(4\varepsilon)$. Then $(x+y)^2-4xy=(x-y)^2\ge0$, so $(\varepsilon A+N_mB/(4\varepsilon))^2\ge4xy=N_mAB$. Taking square roots and using step 2.1 gives $$\|D^mu\|_{L^2(\Omega)}\le\varepsilon\|D^{m+1}u\|_{L^2(\Omega)}+\frac{N_m}{4\varepsilon}\|D^{m-1}u\|_{L^2(\Omega)};$$ equivalently, [F4] with $p=q=2$ absorbs the geometric mean at the cost of the constant $C=C(n,m,\varepsilon)$. [F4, step 2.1, algebra]

4.1 Let $u\in H^{m+1}_0(\Omega)$ and choose $\varphi_j\in C_c^\infty(\Omega)$ with $\|u-\varphi_j\|_{W^{m+1,2}(\Omega)}\to0$, as [F3] permits. Step 3.1 applied to $\varphi_j$ gives $\|D^m\varphi_j\|\le\varepsilon\|D^{m+1}\varphi_j\|+C\|D^{m-1}\varphi_j\|$, and [F2] gives $\|D^\alpha\varphi_j-D^\alpha u\|_{L^2(\Omega)}\to0$ for every $|\alpha|\le m+1$; passing to the limit $j\to\infty$ in the estimate (norms are continuous) yields the displayed inequality for $u$. [F2, F3, step 3.1]

5.1 Let $u\in H^{m+1}(\Omega)$ vanish almost everywhere outside a compact subset of $\Omega$. By [F5], $E_0u\in W^{m+1,2}(\mathbb R^n)=H^{m+1}(\mathbb R^n)$ with norm-preserving zero extensions of all derivatives of order at most $m+1$, and by [F6] the test functions are dense in $W^{m+1,2}(\mathbb R^n)$, so $E_0u\in H^{m+1}_0(\mathbb R^n)$; step 4.1 on $\mathbb R^n$ therefore gives $\|D^mE_0u\|\le\varepsilon\|D^{m+1}E_0u\|+C\|D^{m-1}E_0u\|$, and [F5] rewrites every term as the corresponding norm of $u$ on $\Omega$. Combining this with step 4.1 proves the two displays; for $m=1$ the lower-order term is $\|D^0u\|_{L^2(\Omega)}=\|u\|_{L^2(\Omega)}$, which is the stated $H^2_0$ instance. [F5, F6, step 3.1, step 4.1] ∎

## Source notes

The interpolation estimate is Simon's Lemma 6 (printed pp. 52-53) in the form
$\|u\|_{m-1}\le\varepsilon\|u\|_m+C_\varepsilon\|u\|_0$; the sharp constant
$N_m/(4\varepsilon)$ above is not asserted to be optimal and the proof only
needs finitely many multi-indices. Hunter uses the same absorption as the
Cauchy inequality with $\epsilon$ inside the final step of Theorem 4.27
(printed p. 113).
