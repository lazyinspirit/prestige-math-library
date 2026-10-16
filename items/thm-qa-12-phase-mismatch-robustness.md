---
id: thm-qa-12-phase-mismatch-robustness
kind: theorem
title: "Success bound under an explicit amplitude-amplification phase mismatch"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 19
deps:
  - def-qa-12-prepared-success-subspace
  - alg-qa-12-arbitrary-phase-amplification
  - thm-qa-12-arbitrary-phase-matching
  - thm-qc-projective-measurement-outcome-law
  - thm-qc-unit-vector-projector-is-density
  - def-operator-norm-on-a-finite-dimensional-inner-product-space
  - def-linear-isometry-and-orthogonal-or-unitary-operator
  - prop-pythagorean-parallelogram-and-polarisation-identities
  - cor-sine-and-cosine-are-one-lipschitz
  - def-complex-trigonometric-and-hyperbolic-functions
  - cor-complex-trigonometric-and-hyperbolic-addition-formulas
  - cor-trigonometric-parity-and-pythagorean-identity
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - def-pi-via-first-positive-cosine-zero
  - thm-quarter-turn-values-and-shift-formulas
  - thm-sine-and-cosine-derivatives
  - thm-cosine-has-a-smallest-positive-zero
  - thm-sine-and-cosine-addition-formulas
  - thm-sine-cosine-signs-monotonicity-and-ranges
  - cor-mean-value-theorem
  - thm-algebra-of-derivatives
  - thm-chain-rule
  - def-principal-inverse-tangent
  - thm-principal-inverse-tangent-calculus
  - thm-cofunction-supplementary-and-reflection-identities
  - thm-double-angle-and-power-reduction-identities
  - cor-pi-is-the-first-positive-sine-zero
  - cor-differentiable-implies-continuous
justified_by: []
proof_strategy: direct
axiom_use: "None; only finite-dimensional unitary products and scalar trigonometric estimates are used."
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  precheck: pass
sources:
  references:
    - title: "Peter Høyer, On Arbitrary Phases in Quantum Amplitude Amplification"
      url: "https://arxiv.org/pdf/quant-ph/0006031"
    - title: "Ronald de Wolf, Quantum Computing: Lecture Notes"
      url: "https://arxiv.org/pdf/1907.09415"
---

## Statement

Let $0<a<1$, $\sin^2\theta=a$ with $0<\theta<\pi/2$, $0<\phi<\pi$, and $\theta\le\phi$. Let $\vartheta\in(0,\pi/2]$ satisfy
$
\sin\vartheta=\sin(\phi/2)\sin(2\theta),\qquad
m=\left\lceil\frac{\pi}{2\vartheta}-\frac12\right\rceil.
$
Let $\varphi_0\in[0,2\pi)\setminus\{\pi\}$ be the phase-matched value from [[thm-qa-12-arbitrary-phase-matching]]. Use its signed representative $\varphi:=\varphi_0$ when $\varphi_0<\pi$ and $\varphi:=\varphi_0-2\pi$ when $\varphi_0>\pi$, so $\varphi\in(-\pi,\pi)$. Let $\varphi'\in(-\pi,\pi)$ be the implemented phase representative, with $\delta=|\varphi'-\varphi|$. For either signed phase label $\alpha$, a call to [[alg-qa-12-arbitrary-phase-amplification]] uses the canonical input $\alpha$ if $\alpha\ge0$ and $\alpha+2\pi$ if $\alpha<0$; its phase operation is unchanged. Put
$
C:=\frac{\sqrt3}{2\pi^2(\sqrt3+\pi)}.
$
If $\delta\le C\epsilon\,\phi\sqrt a$ for $\epsilon>0$, then after $m$ iterates using $(\phi,\varphi')$, the failure probability is at most $4a+\epsilon$. The factor $\phi\sqrt a$ multiplies the displayed constant. In the equal-phase case $\varphi'=\phi$, the failure probability is $O(\sqrt a/\phi)$ over the same parameter range.

## Facts & Assumptions

**Given:** The exact phase iterates and parameter ranges in the Statement.

[F1] [[thm-qa-12-arbitrary-phase-matching]]: the canonical matched phase $\varphi_0\in[0,2\pi)\setminus\{\pi\}$ makes the two diagonal entries of the two-dimensional iterate equal and satisfies $\tan(\varphi_0/2)=(1-2a)\tan(\phi/2)$.

[F2] [[def-qa-12-prepared-success-subspace]]: $|\psi\rangle=\sqrt a\,|G\rangle+\sqrt{1-a}\,|B\rangle$, with orthonormal good and bad vectors, and the bad projection is $I-\Pi_{\mathrm{good}}$.

[F3] [[alg-qa-12-arbitrary-phase-amplification]]: $S_0(\phi)=I+(e^{i\phi}-1)|0\rangle\langle0|$ and $S_{\mathrm{good}}(\alpha)=I+(e^{i\alpha}-1)\Pi_{\mathrm{good}}$.

[F4] [[def-operator-norm-on-a-finite-dimensional-inner-product-space]]: $\|T\|=\sup_{\|x\|=1}\|Tx\|$. Unitary operators preserve vector norms by [[def-linear-isometry-and-orthogonal-or-unitary-operator]].

[F5] [[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]] and [[cor-sine-and-cosine-are-one-lipschitz]]: $|e^{ix}-e^{iy}|=2|\sin((x-y)/2)|\le|x-y|$; also $\sin t\le t$ for $t\ge0$, by one-Lipschitzness and $\sin0=0$.

[F6] [[prop-pythagorean-parallelogram-and-polarisation-identities]]: for an orthogonal projection, the projected and complementary components are orthogonal and their squared norms sum to the input squared norm.

[F7] [[thm-qc-projective-measurement-outcome-law]] and [[thm-qc-unit-vector-projector-is-density]]: the squared norm of the good projection of the unit output vector is its good-outcome probability.

[F8] [[thm-sine-and-cosine-derivatives]], [[thm-cosine-has-a-smallest-positive-zero]], and [[def-pi-via-first-positive-cosine-zero]]: $\sin0=0$, $\sin'=\cos$, $\cos'=-\sin$, and $\pi/2$ is the first positive cosine zero.

[F9] [[cor-complex-trigonometric-and-hyperbolic-addition-formulas]] and [[cor-trigonometric-parity-and-pythagorean-identity]]: the addition and Pythagorean identities hold.

[F10] [[cor-mean-value-theorem]]: a continuous function on a closed interval and differentiable on its interior has a secant slope equal to a derivative at an interior point.

[F11] [[thm-algebra-of-derivatives]] and [[thm-chain-rule]]: sums, products, quotients, and compositions obey their differentiation rules.

[F12] [[def-principal-inverse-tangent]] and [[thm-principal-inverse-tangent-calculus]]: the principal arctangent takes real values into $(-\pi/2,\pi/2)$, is increasing, and has derivative $1/(1+x^2)$.

[F13] [[thm-cofunction-supplementary-and-reflection-identities]] gives $\sin(\pi/6)=\cos(\pi/3)$ and $\cos(2\pi/3)=-\cos(\pi/3)$; [[thm-double-angle-and-power-reduction-identities]] gives $\cos(2x)=2\cos^2x-1$; [[cor-pi-is-the-first-positive-sine-zero]] gives $\sin x>0$ for $0<x<\pi$.

[F14] [[thm-sine-cosine-signs-monotonicity-and-ranges]]: sine is strictly increasing and cosine strictly decreasing on $[0,\pi/2]$.

[F15] [[thm-quarter-turn-values-and-shift-formulas]]: $\sin(\pi/2)=1$ and $\sin(\pi/2+t)=\cos t$, $\cos(\pi/2+t)=-\sin t$.

[F16] [[cor-differentiable-implies-continuous]]: differentiability on an interval implies continuity at every point of that interval.

## Proof

1.1 By the addition and quarter-turn identities [F5], [F9], [F15], $e^{i(\alpha+2\pi)}=e^{i\alpha}$, so the canonical inputs specified in the Statement implement exactly the operators with the signed labels, and $e^{i\varphi}=e^{i\varphi_0}$. In the ordered $(|G\rangle,|B\rangle)$ basis, set $u=e^{i\phi}$ and $v=e^{i\varphi}$. Since $|u|=|v|=1$ by [F5], the phase operations act by unit-modulus scalars on orthogonal subspaces and are unitary. From $A|0\rangle=|\psi\rangle$ and the supplied phase operators, the iterate has matrix
$$Q=-\begin{pmatrix} v((1-a)+au)&(u-1)\sqrt{a(1-a)}\\ v(u-1)\sqrt{a(1-a)}&a+(1-a)u \end{pmatrix}.$$
The diagonal entries coincide by [F1] and $e^{i\varphi}=e^{i\varphi_0}$. The common diagonal is nonzero because the imaginary part of $(1-a)+ae^{i\phi}$ is $a\sin\phi>0$. The lower-left entry has modulus $2\sin(\phi/2)\sqrt{a(1-a)}=\sin(\phi/2)\sin(2\theta)=\sin\vartheta$. Thus the matched and implemented iterates are unitary and the matched matrix has equal diagonal entries. [given, F1, F2, F3, F5, F9, F13, F15, algebra]

2.1 Write the common diagonal as $d$ and the lower-left entry as $c$. Unitarity gives $|d|^2+|c|^2=1$, so $|d|=\cos\vartheta$ because $|c|=\sin\vartheta$ and $\vartheta\in(0,\pi/2]$. Since $d,c\ne0$, put $\eta=d/|d|$ and $\zeta=(c/|c|)\overline\eta$; both have modulus one, and $d=\eta\cos\vartheta$, $c=\eta\zeta\sin\vartheta$. If $b$ is the upper-right entry, column orthogonality $\overline d\,b+\overline c\,d=0$ gives $b=-\eta\overline\zeta\sin\vartheta$. Hence $Q=\eta D R(\vartheta)D^{-1}$, with $D=\operatorname{diag}(1,\zeta)$ and $R(t)=\begin{pmatrix}\cos t&-\sin t\\\sin t&\cos t\end{pmatrix}$. [given, F1, F2, step 1.1, algebra]

3.1 Write $m\vartheta=\pi/2+t$. From $m=\lceil\pi/(2\vartheta)-1/2\rceil$ we get $|t|\le\vartheta/2$. Quarter-turn, parity, and monotonicity identities give $\sin(m\vartheta)=\cos t\ge\cos(\vartheta/2)$ and $|\cos(m\vartheta)|=|\sin t|\le\sin(\vartheta/2)$. If $a\ge1/4$, failure is at most $1\le4a$. If $a<1/4$, put $c=\cos(\pi/3)=\sin(\pi/6)$ by [F13]. Since $0<\pi/6<\pi$, [F13] gives $c>0$, while the double-angle and supplementary identities give $2c^2-1=\cos(2\pi/3)=-c$. Thus $(2c-1)(c+1)=0$, and positivity yields $c=1/2$. Hence $\sin\theta=\sqrt a<\sin(\pi/6)$, so $\theta<\pi/6$ by [F14]. Because $\sin\vartheta=\sin(\phi/2)\sin(2\theta)\le\sin(2\theta)$ and both angles lie in $[0,\pi/2]$, [F14] gives $\vartheta\le2\theta$. The addition formulas [F9] and induction give $R(\vartheta)^m=R(m\vartheta)$. The initial coordinates are $(\sqrt a,\sqrt{1-a})$, so the first coordinate of $\eta^mD R(m\vartheta)D^{-1}(\sqrt a,\sqrt{1-a})$ has modulus [given, F2, F7, F9, F13, F14, F15, step 2.1, algebra]
$$\left|\sqrt a\cos(m\vartheta)-\overline\zeta\sqrt{1-a}\sin(m\vartheta)\right| \ge\sqrt{1-a}|\sin(m\vartheta)|-\sqrt a|\cos(m\vartheta)| \ge\sqrt{1-a}\cos(\vartheta/2)-\sqrt a\sin(\vartheta/2) \ge(1-a)-a=1-2a.$$
The last inequality uses $\vartheta/2\le\theta$, cosine decreasing and sine increasing on $[0,\pi/2]$, and $\cos\theta=\sqrt{1-a}$, $\sin\theta=\sqrt a$. The scalar $\eta^m$ has modulus one and $D$ leaves the good coordinate unchanged. By [F7], the matched failure probability is therefore at most $1-(1-2a)^2\le4a$. [given, F2, F7, F9, F13, F14, F15, step 2.1, algebra]

4.1 Let $Q'$ be the iterate with phase $\varphi'$. The arbitrary-phase definition gives [given, F3, F4, F5, F6, F7, step 3.1, algebra]
$$Q'-Q=-A S_0(\phi)A^\dagger(e^{i\varphi'}-e^{i\varphi})\Pi_{\mathrm{good}}.$$
For every unit vector $x$, the projection contraction in [F6] and unitarity give $\|(Q'-Q)x\|\le|e^{i\varphi'}-e^{i\varphi}|\le\delta$ by [F5], hence $\|Q'-Q\|\le\delta$. Telescoping yields
$$Q'^m-Q^m=\sum_{r=0}^{m-1}Q'^{\,m-1-r}(Q'-Q)Q^r,$$
so unitarity gives $\|Q'^m-Q^m\|\le m\delta$. Set $x=Q^m|\psi\rangle$ and $y=Q'^m|\psi\rangle$ for $|\psi\rangle=A|0\rangle$. Then $\|x-y\|\le\|Q'^m-Q^m\|\le m\delta$. By [F7], the failure probabilities are $\|\Pi_{\mathrm{bad}}x\|^2$ and $\|\Pi_{\mathrm{bad}}y\|^2$. Contraction of $\Pi_{\mathrm{bad}}$ and reverse triangle give
$$\left|\|\Pi_{\mathrm{bad}}x\|^2-\|\Pi_{\mathrm{bad}}y\|^2\right| \le(\|\Pi_{\mathrm{bad}}x\|+\|\Pi_{\mathrm{bad}}y\|)\|x-y\| \le2\|x-y\|\le2m\delta.$$
Thus implemented failure is at most $4a+2m\delta$ by step 3.1. [given, F3, F4, F5, F6, F7, step 3.1, algebra]

5.1 For $a<1/4$, $\sin(2\theta)=2\sqrt{a(1-a)}\ge\sqrt3\sqrt a$. Set $x=\phi/2\in(0,\pi/2)$ and $g(x)=\sin x-2x/\pi$. By [F8], [F15], $g(0)=g(\pi/2)=0$; by [F14], $g''(x)=-\sin x\le0$. The derivatives in [F8], [F11] make $g'$ differentiable, hence continuous by [F16]; the mean value theorem [F10] applied to $g'$ gives $g'(t)\le g'(s)$ for $0\le s<t\le\pi/2$. The same facts make $g$ continuous and differentiable, so [F10] on $[0,x]$ and $[x,\pi/2]$ gives slopes $g(x)/x$ and $-g(x)/(\pi/2-x)$; the first is at least the second, so $g(x)\ge0$. Therefore $\sin(\phi/2)\ge\phi/\pi$, $\sin\vartheta\ge\sqrt3\phi\sqrt a/\pi$, and $\vartheta\ge\sin\vartheta$ by [F5], [F8]. Also $1=\sin(\pi/2)\le\pi/2$ by [F5], [F8], so $1/(2\pi)\le1$. The ceiling gives [given, F5, F8, F10, F11, F14, F15, F16, step 4.1, algebra]
$$m\le\frac{\pi}{2\vartheta}+\frac12 \le\frac{\pi^2}{2\sqrt3\,\phi\sqrt a}+\frac12 \le\frac{\pi(\pi+\sqrt3)}{2\sqrt3\,\phi\sqrt a},$$
where the last inequality uses $\phi\sqrt a\le\pi$. Under $\delta\le C\epsilon\phi\sqrt a$ with $C=\sqrt3/(2\pi^2(\sqrt3+\pi))$, we obtain $2m\delta\le\epsilon/(2\pi)\le\epsilon$. Step 4.1 gives failure at most $4a+\epsilon$; when $a\ge1/4$, the same bound is automatic since failure is at most $1\le4a$. [given, F5, F8, F10, F11, F14, F15, F16, step 4.1, algebra]

6.1 In the equal-phase case with $a\le1/4$, put $T=\tan(\phi/2)>0$ and $r=1-2a\in[1/2,1]$. The matching condition [F1] and the principal inverse tangent [F12] give $\varphi=\varphi_0=2\arctan(rT)$ and $\delta=2(\arctan T-\arctan(rT))$. Let $f(s)=\arctan(sT)$. By [F11], [F12], $f''(s)=-2sT^3/(1+s^2T^2)^2\le0$; differentiability and [F16] give the continuity needed to apply [F10] to $f'$, so $f'$ is nonincreasing. Applying [F10] to $f$ on $[0,r]$ and $[r,1]$, the early secant slope is at least the late one; the secant slope on $[0,1]$, their weighted average, is therefore at least the late slope. Thus $f(1)-f(r)\le(1-r)(f(1)-f(0))\le(1-r)\pi/2$, so $\delta\le\pi(1-r)=2\pi a$. If $\delta>0$, apply step 5.1 with $\epsilon=\delta/(C\phi\sqrt a)$; if $\delta=0$, step 3.1 gives the matched bound. The resulting failure is at most $4a+(2\pi/C)\sqrt a/\phi\le(4\pi+2\pi/C)\sqrt a/\phi$. For $a\ge1/4$, $1\le2\pi\sqrt a/\phi$, so the same big-O bound holds on the full range. [given, F1, F8, F10, F11, F12, F16, step 3.1, step 5.1, algebra] ∎
