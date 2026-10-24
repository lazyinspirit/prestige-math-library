---
id: ex-pe11-spherical-shell-pec-zero-mode
kind: example
title: A topological PEC zero mode on a spherical shell
status: published
origin: pipeline
pipeline_run: numerical-analysis-remaining-71-2026-10-17
dependency_level: 5
deps:
  - def-na-pe11-maxwell-cavity-eigenproblem
  - def-na-hcurl-space
  - def-na-zero-tangential-hcurl
  - def-wkp-zero-as-a-sobolev-closure
  - def-eigenvalue-eigenvector-eigenspace-and-spectrum
  - lem-pe11-zero-eigenvalue-is-curl-kernel
  - def-countable-choice
  - thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions
  - thm-tonelli-and-fubini-for-completed-product-measures
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: Long Chen, Finite Element Methods for Maxwell Equations, complete lecture
        notes
      url: https://www.math.uci.edu/~chenlong/226/FEMMaxwell.pdf
      locator: "§3, pp. 8–10: cohomology and topology-dependent harmonic modes in the
        discrete de Rham complex."
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-18
---

## Example

On the smooth spherical shell
$\Omega=\{x\in\mathbb R^3:1<|x|<2\}$, the field
$$u(x)=\frac{x}{|x|^3}$$
is nonzero, divergence-free and curl-free, and it satisfies the PEC closure
condition. It is orthogonal to every zero-boundary gradient, but it is not
the gradient of any $H_0^1(\Omega)$ potential. Thus a gauge that removes only
zero-boundary gradients leaves this topological zero mode; the full-kernel
quotient of [[def-na-pe11-maxwell-cavity-eigenproblem]] removes it.

## Facts & Assumptions

**Given:** Countable Choice; the shell $1<|x|<2$; constant $\epsilon,\mu>0$; the real PEC $H(\operatorname{curl})$ convention; and the full curl-kernel gauge.

[F1] The distributional curl is defined by testing against compactly supported smooth vector fields, and $H_0(\operatorname{curl})$ is their graph-norm closure. ([[def-na-hcurl-space]], [[def-na-zero-tangential-hcurl]])

[F2] Polar coordinates have volume element $r^2\,dr\,d\omega$; Fubini and the change-of-variables formula apply to the bounded shell integrals. ([[thm-c-one-change-of-variables-for-nonnegative-lebesgue-measurable-functions]], [[thm-tonelli-and-fubini-for-completed-product-measures]])

[F3] $H_0^1(\Omega)$ is the $H^1$-closure of compactly supported smooth scalar functions. ([[def-wkp-zero-as-a-sobolev-closure]])

[F4] The zero eigenspace of the unquotiented PEC pencil is the full curl kernel. ([[lem-pe11-zero-eigenvalue-is-curl-kernel]])

## Verification

1.1 The function $-1/|x|$ is smooth on the shell and $\nabla(-1/|x|)=x/|x|^3=u$. Therefore $\operatorname{curl}u=0$. Direct differentiation gives $\operatorname{div}u=\sum_{i=1}^3\left(|x|^{-3}-3x_i^2|x|^{-5}\right)=0$. For $0<\delta<1/8$, choose a smooth radial cutoff $\chi_\delta(r)$ that vanishes near $r=1,2$ and equals one on $[1+2\delta,2-2\delta]$. The field $u_\delta(x)=\chi_\delta(|x|)u(x)$ is smooth and compactly supported in $\Omega$. Both $\nabla\chi_\delta$ and $u$ are radial, so $\operatorname{curl}u_\delta=0$. Since $|u|\le1$ on the shell and $u-u_\delta$ is supported in a layer of volume $O(\delta)$, $\|u-u_\delta\|_{H(\operatorname{curl})}\to0$. Thus [F1] gives $u\in H_0(\operatorname{curl})$ and $u\in K$. [F1, given, construct, algebra]

2.1 If $q\in H_0^1(\Omega)$, choose $q_j\in C_c^\infty(\Omega)$ with $q_j\to q$ in $H^1$ by [F3]. For each $j$, integration by parts and $\operatorname{div}u=0$ give $(u,\nabla q_j)_{L^2}=-(\operatorname{div}u,q_j)_{L^2}=0$. Passing to the limit shows $(u,\nabla q)_{L^2}=0$. Hence this zero mode survives the zero-boundary gradient gauge. [given, F3, step 1.1, choose, algebra]

3.1 Suppose for contradiction that $u=\nabla q$ for some $q\in H_0^1(\Omega)$. For $1<r<2$ define the spherical mean $M(r):=\frac1{4\pi}\int_{S^2}q(r\omega)\,d\omega$. For $q_j$ from step 2.1, define $M_j$ by the same formula. Polar coordinates, Jensen's inequality and [F2] show $\|M_j-M_k\|_{H^1(1,2)}\le C\|q_j-q_k\|_{H^1(\Omega)}$: the derivative is the spherical average of $\nabla(q_j-q_k)(r\omega)\cdot\omega$, and $1\le r^2\le4$. Thus $M_j\to M$ in $H^1(1,2)$. Each $M_j$ is smooth and compactly supported in $(1,2)$, so [F3] gives $M\in H_0^1(1,2)$. For a smooth $g$ on $[1,2]$, choose $s$ with $|g(s)|\le\|g\|_{L^2(1,2)}$; then $|g(r)|\le\|g\|_{L^2}+\|g'\|_{L^2}\le\sqrt2\|g\|_{H^1}$ for every $r$. Applying this estimate to $M_j-M_k$ makes $(M_j)$ uniformly Cauchy. Its continuous limit has value zero at both endpoints, and it represents $M$ because $M_j\to M$ in $L^2$. Thus $M(1)=M(2)=0$. [F2, F3, step 2.1, construct]

4.1 For the smooth $q_j$, differentiation under the spherical integral gives $M_j'(r)=(4\pi)^{-1}\int_{S^2}\nabla q_j(r\omega)\cdot\omega\,d\omega$. Passing to the $H^1$ limit and using $\nabla q=u$ yields $M'(r)=(4\pi)^{-1}\int_{S^2}r^{-2}\,d\omega=r^{-2}$ in distributions. Therefore $M(r)=c-r^{-1}$ for some constant $c$. The endpoint values from step 3.1 would force $c=1$ and $c=1/2$ simultaneously, a contradiction. Thus $u\notin\nabla H_0^1(\Omega)$. [F2, step 3.1, algebra]

5.1 The field is a nonzero member of the full curl kernel by step 1.1, so it is excluded from $X=K^\perp$; by [F4] it is a zero eigenfield of the unquotiented pencil. Step 4.1 shows why the gradient-only gauge would fail on this shell. It is not a positive eigenvalue of the contractible-cavity approximation theorem. [F4, step 1.1, step 4.1] ∎
