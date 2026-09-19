---
id: def-discrete-and-essential-spectrum-of-a-self-adjoint-operator
kind: definition
title: "Discrete and essential spectrum of a self-adjoint operator"
status: draft
origin: pipeline
pipeline_run: phase-2-remaining-27
deps: [thm-spectral-theorem-for-unbounded-self-adjoint-operators, thm-unbounded-borel-functional-calculus, def-resolvent-and-spectrum-of-a-closed-unbounded-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis, def-axiom-of-choice]
proof_strategy: not-applicable
provenance:
  statement: ai-altered
  proof: not-applicable
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, second edition"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "Section 6.4, (6.29)-(6.30) with proof, pp.170-171"
    - title: "Theo Buehler and Dietmar A. Salamon, Functional Analysis"
      url: "https://sci.mu.edu.iq/wp-content/uploads/2021/08/FUNCTIONAL-ANALYSIS-freebookcenter.net_.pdf"
      locator: "Chapter 6, Definition 6.13 (compact resolvent), Sec. 6.1.2"
---

## Definition

Assume the Axiom of Choice. Let $A$ be a self-adjoint operator on $H$ with
spectral projection valued measure $E$ on $\mathbb R$
([[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]). The **discrete
spectrum** $\sigma_{\mathrm d}(A)$ is the set of eigenvalues of $A$ that are
isolated points of $\sigma(A)$ and whose eigenspace is finite dimensional; the
**essential spectrum** is
$$\sigma_{\mathrm{ess}}(A):=\sigma(A)\setminus\sigma_{\mathrm d}(A),$$
with $\sigma(A)$ as in [[def-resolvent-and-spectrum-of-a-closed-unbounded-operator]].

**Spectral-projection description, with proofs.** Write
$P_\varepsilon:=E((\lambda-\varepsilon,\lambda+\varepsilon))$ for
$\varepsilon>0$.

1. *$E(\{\lambda\})$ is the projection onto $\ker(A-\lambda)$.* If
   $x=E(\{\lambda\})x$ then $Ax=\int\mu\,dE_x=\lambda x$; conversely if
   $Ax=\lambda x$ then $\int|\mu-\lambda|^2dE_x=\|(A-\lambda)x\|^2=0$, so $E_x$
   is carried by $\{\lambda\}$ and $E(\{\lambda\})x=x$ (norm identity of the
   calculus, [[thm-spectral-theorem-for-unbounded-self-adjoint-operators]]).
2. *$\lambda\in\sigma_{\mathrm d}(A)$ if and only if $\lambda$ is an eigenvalue
   and $\operatorname{rank}P_\varepsilon<\infty$ for some $\varepsilon>0$.*
   ($\Rightarrow$) if $\lambda$ is isolated in $\sigma(A)$ then for small
   $\varepsilon$ the interval meets $\sigma(A)$ only in $\lambda$, so
   $P_\varepsilon=E(\{\lambda\})$ has finite rank by item 1.
   ($\Leftarrow$) suppose $\operatorname{rank}P_\varepsilon<\infty$ and
   $\lambda$ is an eigenvalue. If $\sigma(A)\cap(\lambda-\varepsilon,
   \lambda+\varepsilon)$ contained infinitely many points, pairwise disjoint
   small intervals around them would carry nonzero, pairwise orthogonal
   subprojections of the finite-rank $P_\varepsilon$, impossible; so the
   spectrum in that interval is finite and $\lambda$ is an isolated point of
   $\sigma(A)$, and then $P_{\varepsilon'}=E(\{\lambda\})$ for small
   $\varepsilon'$, whose rank is the dimension of the eigenspace by item 1
   ([[thm-unbounded-borel-functional-calculus]] for the support
   description, [[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]]).
3. *$\lambda\in\sigma_{\mathrm{ess}}(A)$ if and only if
   $\operatorname{rank}P_\varepsilon=\infty$ for every $\varepsilon>0$.*
   If rank $P_\varepsilon<\infty$ for some $\varepsilon$ and
   $\lambda\in\sigma(A)$, then $P_\varepsilon\ne0$ because the support of $E$
   is $\sigma(A)$ [[thm-unbounded-borel-functional-calculus]], and $\operatorname{ran}P_\varepsilon$ is a
   finite-dimensional reducing subspace; the restriction of $A$ to it is a
   self-adjoint operator on a finite-dimensional space, and its spectrum is
   exactly $\sigma(A)\cap(\lambda-\varepsilon,\lambda+\varepsilon)$, hence a
   finite set of eigenvalues of finite multiplicity; so $\lambda$ is an
   eigenvalue with finite-dimensional eigenspace and item 2 gives
   $\lambda\in\sigma_{\mathrm d}(A)$; conversely
   $\operatorname{rank}P_\varepsilon=\infty$ for all $\varepsilon$ excludes
   item 2 while forcing $\lambda\in\sigma(A)$ (the projection $P_\varepsilon$
   is nonzero for every $\varepsilon$), so $\lambda\in\sigma_{\mathrm{ess}}(A)$.
4. *$\sigma_{\mathrm{ess}}(A)$ is closed.* If $\lambda_n\in
   \sigma_{\mathrm{ess}}(A)$ and $\lambda_n\to\lambda$, then for every
   $\varepsilon>0$ some $n$ has $(\lambda_n-\varepsilon/2, \lambda_n+
   \varepsilon/2)\subseteq(\lambda-\varepsilon,\lambda+\varepsilon)$, so
   $\operatorname{rank}P_\varepsilon\ge\operatorname{rank}P_{\varepsilon/2}^{(n)}
   =\infty$ and $\lambda\in\sigma_{\mathrm{ess}}(A)$ by item 3.

Consequently an accumulation point of $\sigma(A)$ and an isolated eigenvalue of
infinite multiplicity both lie in $\sigma_{\mathrm{ess}}(A)$, and $\sigma(A)$
is the disjoint union of $\sigma_{\mathrm d}(A)$ and
$\sigma_{\mathrm{ess}}(A)$.
