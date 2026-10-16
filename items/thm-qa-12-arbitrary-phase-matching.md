---
id: thm-qa-12-arbitrary-phase-matching
kind: theorem
title: "Phase-matching condition for amplitude-amplification rotations"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 18
deps:
  - alg-qa-12-arbitrary-phase-amplification
  - def-qa-12-prepared-success-subspace
  - def-complex-trigonometric-and-hyperbolic-functions
  - cor-complex-trigonometric-and-hyperbolic-addition-formulas
  - cor-trigonometric-parity-and-pythagorean-identity
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-pi-via-first-positive-cosine-zero
justified_by: []
proof_strategy: direct
axiom_use: "None; the phase branches are explicit finite-angle algebra."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-16
sources:
  references:
    - title: "Peter Høyer, On Arbitrary Phases in Quantum Amplitude Amplification"
      url: "https://arxiv.org/pdf/quant-ph/0006031"
    - title: "Gilles Brassard, Peter Høyer, Michele Mosca, and Alain Tapp, Quantum Amplitude Amplification and Estimation"
      url: "https://arxiv.org/pdf/quant-ph/0005055"
---

## Statement

Let $0<a<1$, let $\phi,\varphi\in[0,2\pi)$, and restrict to $\phi\ne\pi$. In the ordered $(|G\rangle,|B\rangle)$ basis of [[def-qa-12-prepared-success-subspace]], the two diagonal entries of $Q(\phi,\varphi)$ coincide if and only if
$
\tan(\varphi/2)=\tan(\phi/2)(1-2a),
$
where $\tan t:=\sin t/\cos t$ when $\cos t\ne0$. The matching phase is the unique $\varphi\in[0,2\pi)\setminus\{\pi\}$ satisfying this equation. At $\phi=0$ it is $\varphi=0$. If $\phi=\pi$ and $a\ne1/2$, the diagonal entries coincide exactly at $\varphi=\pi$; if $\phi=\pi$ and $a=1/2$, both diagonal entries vanish for every $\varphi$. For $a\in\{0,1\}$, the good/bad span is one-dimensional and no two-diagonal matching condition is asserted.

## Facts & Assumptions

**Given:** The phase operations and access model of [[alg-qa-12-arbitrary-phase-amplification]], and $0<a<1$.

[F1] [[def-qa-12-prepared-success-subspace]]: $|\psi\rangle=\sqrt a\,|G\rangle+\sqrt{1-a}\,|B\rangle$, with orthonormal good and bad vectors.

[F2] [[alg-qa-12-arbitrary-phase-amplification]]: $Q=-A S_0(\phi)A^\dagger S_{\mathrm{good}}(\varphi)$, with $S_0=I+(e^{i\phi}-1)|0\rangle\langle0|$ and $S_{\mathrm{good}}=I+(e^{i\varphi}-1)\Pi_{\mathrm{good}}$.

[F3] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]: $e^{ix}=\cos x+i\sin x$ and $|e^{ix}|=1$ for real $x$.

[F4] [[cor-complex-trigonometric-and-hyperbolic-addition-formulas]]: the sine and cosine addition identities; $\sin^2x+\cos^2x=1$ is [[cor-trigonometric-parity-and-pythagorean-identity]].

## Proof

1.1 In the ordered basis $(|G\rangle,|B\rangle)$, write $u=e^{i\phi}$ and $v=e^{i\varphi}$. Since $A|0\rangle=|\psi\rangle$, [given, F1, F2, algebra]
$
A S_0(\phi)A^\dagger=I+(u-1)|\psi\rangle\langle\psi|.
$
Multiplying on the right by $S_{\mathrm{good}}(\varphi)=\operatorname{diag}(v,1)$ and including the scalar minus gives
$
Q=-\begin{pmatrix}
v((1-a)+au)&(u-1)\sqrt{a(1-a)}\\
v(u-1)\sqrt{a(1-a)}&a+(1-a)u
\end{pmatrix}.
$
This calculation also shows directly that the good/bad plane is invariant. [given, F1, F2, algebra]

2.1 Equality of the diagonal entries is equivalent to [given, F3, F4, step 1.1, algebra]
$
v=\frac{a+(1-a)u}{(1-a)+au}.
$
For $\phi\ne\pi$, $\cos(\phi/2)\ne0$, and after multiplying numerator and denominator by $e^{-i\phi/2}$, the quotient is
$
\frac{x+iy}{x-iy},\qquad x=\cos(\phi/2),\quad y=(1-2a)\sin(\phi/2).
$
By [F3], this equals $e^{i\varphi}$ exactly when $\tan(\varphi/2)=y/x=(1-2a)\tan(\phi/2)$; cross-multiplication of $(1+it)/(1-it)$ shows the equivalence in both directions. On $[0,2\pi)\setminus\{\pi\}$, the half-angle tangent takes each real value exactly once, so the branch is unique. [given, F3, F4, step 1.1, algebra]

3.1 If $\phi=0$, the quotient in step 2.1 is $1$, hence $\varphi=0$. If $\phi=\pi$, the diagonal equality becomes $2a-1=-e^{i\varphi}(2a-1)$. For $a\ne1/2$, this is equivalent to $e^{i\varphi}=-1$, hence $\varphi=\pi$; for $a=1/2$, both diagonal entries are zero for every phase. At $a=0$ or $1$, one normalized component in [F1] is absent, so a two-dimensional diagonal comparison is not defined. [given, F1, step 1.1, step 2.1, algebra] ∎
