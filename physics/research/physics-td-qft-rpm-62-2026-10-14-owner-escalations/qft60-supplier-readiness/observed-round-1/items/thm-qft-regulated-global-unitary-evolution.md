---
id: thm-qft-regulated-global-unitary-evolution
kind: theorem
domain: mathematics
title: Global unitary evolution at fixed finite regulator
status: draft
origin: pipeline
dependency_level: 5
deps: [thm-qft-self-adjoint-regulated-interaction, thm-hilbert-space-fourier-expansion, thm-cauchy-schwarz-in-an-inner-product-space]
dependency_roles:
  thm-qft-self-adjoint-regulated-interaction: mathematical-premise
  thm-hilbert-space-fourier-expansion: mathematical-premise
  thm-cauchy-schwarz-in-an-inner-product-space: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Gerald Teschl, Mathematical Methods in Quantum Mechanics, 2nd ed., §5.1, pp.145–149"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe2.pdf"
      locator: "§5.1, printed pp.145–149: unitary groups from self-adjoint operators and their generator domains."
    - title: "Richard S. Laugesen, Spectral Theory of Partial Differential Equations — Lecture Notes, Chapter 4, pp.27–32"
      url: "https://arxiv.org/pdf/1203.2344v1"
      locator: "Chapter 4, printed pp.27–32: discrete spectral expansions from compact resolvent."
---

## Statement

Assume Countable Choice and let $h$ be the self-adjoint operator of
[[thm-qft-self-adjoint-regulated-interaction]], with complete orthonormal
eigenfamily $(\psi_n)_{n\ge1}$ and real eigenvalues
$\lambda_n=E_n-C_0-1$. For $t\in\mathbb R$ define
$$U(t)f:=\sum_{n\ge1}e^{-it\lambda_n}\langle f,\psi_n\rangle\psi_n
\qquad(f\in H_N).$$
Then the series converges in $H_N$ for every $f$; $U(t)$ is unitary,
$U(0)=I$, $U(s+t)=U(s)U(t)$, and $t\mapsto U(t)f$ is norm-continuous for
every $f$. Its norm derivative at any $t$ exists exactly for $f\in D(h)$, and
then
$$\frac{d}{dt}U(t)f=-i\,hU(t)f.$$
This is a mathematical one-parameter group with a dimensionless real
parameter; it makes no physical unit or empirical claim.

## Facts & Assumptions

**Given:** Countable Choice; $H_N$; the self-adjoint $h$; its eigenvectors and real eigenvalues.

[A1] [[def-countable-choice]]: countable selections used in the eigenbasis construction are permitted.

[F1] [[thm-qft-self-adjoint-regulated-interaction]]: $(\psi_n)$ is a complete orthonormal eigenfamily of $h$, $h\psi_n=\lambda_n\psi_n$, and $D(h)=\{f:\sum_n\lambda_n^2|\langle f,\psi_n\rangle|^2<\infty\}$.

[F2] [[thm-hilbert-space-fourier-expansion]]: expansions in the complete orthonormal family converge in norm and Parseval identifies the squared norm with the coefficient-square sum.

[F3] [[thm-cauchy-schwarz-in-an-inner-product-space]]: every coefficient functional $f\mapsto\langle f,\psi_n\rangle$ is continuous.

## Proof

**Proof technique:** direct.

**Given:** $f\in H_N$, its coefficients $c_n=\langle f,\psi_n\rangle$, and the real sequence $(\lambda_n)$.

1.1 Parseval gives $\sum_n|c_n|^2=\|f\|^2$. Since $|e^{-it\lambda_n}|=1$, the finite partial sums defining $U(t)f$ are Cauchy in $H_N$, so converge; Parseval gives $\|U(t)f\|^2=\sum_n|c_n|^2=\|f\|^2$. The coefficient formula shows $U(-t)U(t)f=f=U(t)U(-t)f$ and $U(s)U(t)f=U(s+t)f$, first on finite sums and then on all of $H_N$ by norm convergence and the norm bound. Thus $U(t)$ is a surjective isometry, hence unitary, and $U(0)=I$. [A1, F1, F2, algebra]

1.2 Fix $s\in\mathbb R$ and $f\in H_N$. Given $\varepsilon>0$, choose a finite set $F\subset\mathbb N$ with $\sum_{n\notin F}|c_n|^2<\varepsilon^2/64$, possible by convergence of the nonnegative series in [F2]. The norm of the difference on the complement is at most $2(\sum_{n\notin F}|c_n|^2)^{1/2}<\varepsilon/4$. On the finite set $F$, each scalar $e^{-it\lambda_n}$ is continuous in $t$, so the finite partial difference has norm below $3\varepsilon/4$ for $t$ sufficiently close to $s$. The triangle inequality proves $\|U(t)f-U(s)f\|<\varepsilon$, establishing strong continuity. [F2, algebra]

2.1 Let $f\in D(h)$, so $\sum_n\lambda_n^2|c_n|^2<\infty$. Since $|e^{-it\lambda_n}|=1$, $U(t)f$ has the same finite weighted coefficient sum and belongs to $D(h)$. For $r\ne0$,
$$\frac{U(t+r)f-U(t)f}{r}
=\sum_ne^{-it\lambda_n}\frac{e^{-ir\lambda_n}-1}{r}c_n\psi_n.$$
The scalar integral identity $e^{-ir\lambda}-1=\int_0^r(-i\lambda)e^{-is\lambda}\,ds$ gives $|(e^{-ir\lambda}-1)/r|\le|\lambda|$. Thus the difference quotient coefficients are dominated in square sum by $\lambda_n^2|c_n|^2$. On each finite set they converge to $-i\lambda_ne^{-it\lambda_n}c_n$; choosing a finite set with small tail in that dominating series and then taking $r\to0$ proves convergence in $H_N$ to $-i\sum_n\lambda_ne^{-it\lambda_n}c_n\psi_n=-ihU(t)f$. [F1, F2, algebra]

2.2 Conversely, suppose the norm derivative at $t=0$ exists and equals $g\in H_N$. Continuity of the coefficient functional $v\mapsto\langle v,\psi_n\rangle$ from [F3] makes its value on the difference quotient converge to $-i\lambda_nc_n$. Hence $\langle g,\psi_n\rangle=-i\lambda_nc_n$ for every $n$. Parseval for $g$ implies $\sum_n\lambda_n^2|c_n|^2=\|g\|^2<\infty$, so $f\in D(h)$ by [F1]. If the derivative exists at any other $t$, the same coefficient argument multiplies each coefficient by a unit phase and yields the identical summability condition. Thus the differentiability domain is exactly $D(h)$ at every $t$. [F1, F2, F3, algebra] ∎
