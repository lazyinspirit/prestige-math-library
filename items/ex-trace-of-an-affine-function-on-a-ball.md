---
id: ex-trace-of-an-affine-function-on-a-ball
kind: example
title: "The trace of an affine function on a ball is its classical restriction"
status: draft
origin: pipeline
pipeline_run: frontier-38-owner-30
deps: [lem-sobolev-trace-agrees-with-continuous-boundary-values, thm-lp-trace-operator-on-a-bounded-c-one-domain, thm-sharp-trace-theorem-for-w-one-p, def-fractional-sobolev-space-on-a-compact-c-one-boundary, def-surface-integral-on-a-compact-c-one-hypersurface, def-countable-choice, thm-lebesgue-measure-of-a-box-of-every-kind, def-axiom-of-choice]
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
verification:
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-03
sources:
  references:
    - title: "Gerald Teschl, Partial Differential Equations: From Classical to Modern (archived 2025 author manuscript)"
      url: "https://web.archive.org/web/20250324094647id_/https://www.mat.univie.ac.at/~gerald/ftp/book-pde/pde.pdf"
      locator: "Section 9.2, Theorem 9.18 statement, printed p. 209: $Tf=f|_{\\partial U}$ for continuous functions."
    - title: "Richard S. Laugesen, Linear Analysis and Partial Differential Equations (University of Illinois, complete 158-page graduate notes)"
      url: "https://publish.illinois.edu/rlaugesen/files/2023/07/554-Lectures.pdf"
      locator: "Chapter 3, Section 3.7, Theorem 3.14, printed pp. 62-64: classical boundary values of continuous Sobolev functions."
    - title: "Emilio Gagliardo, Caratterizzazioni delle tracce sulla frontiera relative ad alcune classi di funzioni in $n$ variabili, Rend. Sem. Mat. Univ. Padova 27 (1957), 284-305"
      url: "https://www.numdam.org/item/RSMUP_1957__27__284_0.pdf"
      locator: "Teorema [1.I], printed p. 289: the inverse estimate for traces of functions with controlled $W^{1,p}$ norm."
---

## Example

Assume the Axiom of Choice. Let $\Omega=B_R(0)\subset\mathbb R^n$, $n\ge2$,
$1\le p<\infty$, $c\in\mathbb R^n$, $d\in\mathbb K$, and
$u(x)=c\cdot x+d$. Then $u\in C^\infty(\overline\Omega)\cap W^{1,p}(\Omega)$
and, by [[lem-sobolev-trace-agrees-with-continuous-boundary-values]],
$$Tu=(c\cdot x+d)|_{\partial\Omega};$$
moreover $Tu\in W^{1-1/p,p}(\partial\Omega)$ for $1<p<\infty$ with
$\|Tu\|_{W^{1-1/p,p}(\partial\Omega)}\le C(R,n,p)(|c|R+|d|)$ by
[[thm-sharp-trace-theorem-for-w-one-p]]. At $p=1$ only the $L^1$ statement is
made; the space is not renamed $W^{0,1}(\partial\Omega)$. On the sphere
$\partial B_R(0)$ the boundary $L^p$ norm is the classical surface integral
$$\|Tu\|_{L^p(\partial\Omega)}^p=R^{n-1}\int_{S^{n-1}}|c\cdot R\omega+d|^p\,d\sigma(\omega),$$
with $\sigma$ the surface measure on the unit sphere.

## Facts & Assumptions

**Given:** The Axiom of Choice; $n\ge2$, $R>0$, $1\le p<\infty$, $c\in\mathbb R^n$, $d\in\mathbb K$; the affine function $u(x)=c\cdot x+d$; and the trace $T$ of [[thm-lp-trace-operator-on-a-bounded-c-one-domain]].

[F1] If a $W^{1,p}(\Omega)$ class has a continuous representative on $\overline\Omega$, its trace is the classical restriction of that representative. ([[lem-sobolev-trace-agrees-with-continuous-boundary-values]])

[F2] For $1<p<\infty$ the trace maps $W^{1,p}(\Omega)$ onto $W^{\theta,p}(\partial\Omega)$ with $\theta=1-1/p$ and is bounded: $\|Tu\|_{W^{\theta,p}(\partial\Omega)}\le C(\Omega,p)\|u\|_{W^{1,p}(\Omega)}$. ([[thm-sharp-trace-theorem-for-w-one-p]], [[def-fractional-sobolev-space-on-a-compact-c-one-boundary]])

[F3] The surface integral on the sphere is $\int_{\partial B_R(0)}h\,dS=R^{n-1}\int_{S^{n-1}}h(R\omega)\,d\sigma(\omega)$, and the boundary integral is finite for continuous $h$ on the compact boundary. ([[def-surface-integral-on-a-compact-c-one-hypersurface]])

[F4] The Euclidean ball has finite Lebesgue measure, and $\int_{B_R(0)}|x|^pdx\le R^p|B_R(0)|$. ([[thm-lebesgue-measure-of-a-box-of-every-kind]])

## Verification

1.1 The trace is the classical restriction, with a controlled norm. The affine function is smooth on $\overline\Omega$; its gradient is the constant $c$, so $\int_\Omega|u|^pdx\le2^{p-1}(|c|^p\int_\Omega|x|^pdx+|d|^p|\Omega|)\le C(R,n,p)(|c|R+|d|)^p$ and $\int_\Omega|\partial_iu|^pdx=|c_i|^p|\Omega|\le C(R,n,p)(|c|R+|d|)^p$ by [F4]. Hence $u\in W^{1,p}(\Omega)$ with $\|u\|_{W^{1,p}(\Omega)}\le C'(R,n,p)(|c|R+|d|)$, and $u\in C(\overline\Omega)$, so $Tu=(c\cdot x+d)|_{\partial\Omega}$ by [F1]. [F1, F4, algebra, given]

2.1 Fractional membership and the boundary norm. For $1<p<\infty$ put $\theta:=1-1/p$. By [F2] and step 1.1, $Tu\in W^{\theta,p}(\partial\Omega)$ with $\|Tu\|_{W^{\theta,p}(\partial\Omega)}\le C(R,n,p)(|c|R+|d|)$; at $p=1$ the same computation gives only $Tu\in L^1(\partial\Omega)$, and no space $W^{0,1}$ is introduced. For the $L^p$ value, parametrise the sphere by $x=R\omega$; by [F3] and the definition of the surface integral, $\|Tu\|_{L^p(\partial\Omega)}^p=\int_{\partial\Omega}|c\cdot x+d|^pdS=R^{n-1}\int_{S^{n-1}}|c\cdot R\omega+d|^pd\sigma(\omega)$, which is the classical sphere integral. [F2, F3, step 1.1, algebra]

3.1 Conclusion. Steps 1.1 and 2.1 prove that the affine class lies in $W^{1,p}(\Omega)$ with trace its classical restriction, that the trace lies in the fractional boundary space for $1<p<\infty$ with the stated bound, and that its boundary $L^p$ norm is the displayed surface integral. [step 1.1, step 2.1, algebra, given] ∎

## Source notes

Teschl's Theorem 9.18 (printed p. 209) is the statement $Tf=f|_{\partial U}$ for continuous functions; Laugesen's Theorem 3.14 (printed pp. 62-64) records the classical boundary values, and Gagliardo's Teorema [1.I] (printed p. 289) the inverse estimate behind the fractional bound. The example keeps the endpoint $p=1$ out of the fractional notation, as required by the page conventions.
