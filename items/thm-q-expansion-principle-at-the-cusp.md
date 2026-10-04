---
id: thm-q-expansion-principle-at-the-cusp
kind: theorem
title: "The q-expansion principle at the cusp"
status: published
origin: pipeline
deps:
  - thm-complex-exponential-is-entire-with-derivative-itself
  - thm-complex-exponential-addition-and-real-extension
  - cor-complex-exponential-cartesian-form-modulus-and-eulers-identity
  - thm-kernel-and-fibres-of-complex-exponential
  - thm-orbit-map-of-a-covering-space-action-is-a-covering
  - def-covering-space-action
  - thm-removable-singularity-characterizations
  - thm-laurent-expansion-annulus
  - thm-laurent-coefficient-formula-and-uniqueness
  - thm-identity-theorem-holomorphic-functions
  - thm-holomorphic-if-and-only-if-analytic
  - def-complex-analytic-function
  - def-complex-logarithms-principal-logarithm-and-complex-powers
  - cor-principal-logarithm-is-holomorphic-on-the-slit-plane
  - thm-zero-order-factorization-holomorphic-function
  - thm-chain-rule-for-complex-derivatives
  - def-complex-differentiability-holomorphic-and-entire
  - def-unit-disc-upper-half-plane-and-blaschke-factor
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Modular Functions and Modular Forms (v1.31, 2017)"
      url: "https://www.jmilne.org/math/CourseNotes/MF.pdf"
      locator: "Example 4.1 and the discussion of 'meromorphic at the cusps', printed pp. 48-49."
    - title: "D. Zagier, Elliptic Modular Forms and Their Applications, in The 1-2-3 of Modular Forms (Universitext, Springer, 2008)"
      url: "https://people.mpim-bonn.mpg.de/zagier/files/doi/10.1007/978-3-540-74119-0_1/fulltext.pdf"
      locator: "Equation (3), printed p. 5, and the cusp coordinate discussion, p. 9."
    - title: "C. T. McMullen, Advanced Complex Analysis, Math 213a course notes (Harvard, 2010)"
      url: "https://people.math.harvard.edu/~ctm/home/text/class/harvard/213a/10/html/home/course/course.pdf"
      locator: "Section 5.4, printed pp. 98–99 and 103–104: boundedness at infinity and the Fourier parameter q; the full analytic descent is proved locally."
proof_strategy: direct
---

## Statement

Let $f$ be holomorphic on $\mathfrak H$ with $f(\tau+1)=f(\tau)$ for all $\tau$, and put $q=e^{2\pi i\tau}$. Then there is a unique holomorphic $F$ on the punctured unit disc $D^*=\{0<|q|<1\}$ with $f(\tau)=F(e^{2\pi i\tau})$. Moreover $f$ is bounded on $\{\Im\tau>Y_0\}$ for some $Y_0$ if and only if $F$ extends holomorphically to $q=0$, and then $F(0)=\lim_{\Im\tau\to\infty}f(\tau)$ and $f(\tau)-F(0)=O(e^{-2\pi\delta\Im\tau})$ for some $\delta>0$ as $\Im\tau\to\infty$. In particular $f(\tau)=\sum_{n\ge0}a_nq^n$ with $a_n=(1/2\pi i)\oint F(q)q^{-n-1}\,dq$ when the extension exists.

## Facts & Assumptions

**Given:** A holomorphic, $1$-periodic $f$ on $\mathfrak H$ and $q=e^{2\pi i\tau}$; the unit disc and half-plane are those of [[def-unit-disc-upper-half-plane-and-blaschke-factor]].

[F1] $|e^{2\pi i\tau}|=e^{-2\pi\Im\tau}$ for every $\tau\in\mathbb C$ ([[cor-complex-exponential-cartesian-form-modulus-and-eulers-identity]]), and $e^{2\pi i\tau}=e^{2\pi i\tau'}$ if and only if $\tau-\tau'\in\mathbb Z$ ([[thm-kernel-and-fibres-of-complex-exponential]]).

[F2] The principal logarithm $L=\operatorname{Log}$ is holomorphic on the slit plane $\mathbb C\setminus(-\infty,0]$ and satisfies $e^{L(w)}=w$ there ([[cor-principal-logarithm-is-holomorphic-on-the-slit-plane]], [[def-complex-logarithms-principal-logarithm-and-complex-powers]]).

[F3] A composition of holomorphic functions is holomorphic, by the chain rule ([[thm-chain-rule-for-complex-derivatives]], [[def-complex-differentiability-holomorphic-and-entire]], [[thm-holomorphic-if-and-only-if-analytic]], [[def-complex-analytic-function]]).

[F4] On a punctured disc $0<|z-a|<R$, the singularity $a$ is removable if and only if the function is bounded on some punctured neighbourhood of $a$; then the extension has value the limit at $a$ ([[thm-removable-singularity-characterizations]]).

[F5] If a holomorphic function vanishes at $a$, then either it vanishes on a neighbourhood of $a$, or it has finite order $m\ge1$ and factors locally as $(z-a)^m g$ with $g$ holomorphic and $g(a)\ne0$. In either case a function vanishing at $0$ is $q$ times a holomorphic function bounded near $0$ (take the latter function to be zero in the first case) ([[thm-zero-order-factorization-holomorphic-function]]).

[F6] Every holomorphic function on an annulus has a convergent Laurent series ([[thm-laurent-expansion-annulus]]). The coefficients of a convergent Laurent series are the contour integrals $\frac1{2\pi i}\oint f(\zeta)(\zeta-a)^{-n-1}d\zeta$, and they are unique ([[thm-laurent-coefficient-formula-and-uniqueness]]).

## Proof

1.1 Let $p(\tau):=e^{2\pi i\tau}$. For every $q_0\in D^*$ there are an open disc $V\subseteq D^*$ about $q_0$ and a holomorphic $\sigma:V\to\mathfrak H$ with $p(\sigma(q))=q$ on $V$. Indeed, choose an angle $\alpha$ with $e^{-i\alpha}q_0\notin(-\infty,0]$ and let $S_\alpha=\{q:e^{-i\alpha}q\notin(-\infty,0]\}$; the function $v(q):=L(e^{-i\alpha}q)+i\alpha$ is holomorphic near $q_0$ by [F2], and $e^{v(q)}=e^{-i\alpha}q\cdot e^{i\alpha}=q$ by the addition law. Taking $V$ a small disc contained in $D^*\cap S_\alpha$ and setting $\sigma(q):=-iv(q)/(2\pi)$ gives $e^{2\pi i\sigma(q)}=e^{v(q)}=q$, and $\sigma$ is holomorphic by [F3]. Here $\Im\sigma(q)>0$ holds automatically: $e^{-2\pi\Im\sigma(q)}=|e^{2\pi i\sigma(q)}|=|q|<1$ by [F1], so $\sigma$ maps $V$ into $\mathfrak H$. [F1, F2, F3, given, construct]

2.1 Define $F(q):=f(\sigma(q))$ for a local section $\sigma$ as in 1.1; this is well defined. If $\sigma,\sigma'$ are two such sections near $q$, then $p(\sigma(q))=q=p(\sigma'(q))$, so $\sigma(q)-\sigma'(q)\in\mathbb Z$ by [F1], whence $f(\sigma(q))=f(\sigma'(q))$ by the periodicity of $f$. Since local sections exist near every $q\in D^*$, this gives a function $F$ on all of $D^*$, holomorphic because near each point it is the composition $f\circ\sigma$ of holomorphic functions [F3]. If $\tilde F$ is holomorphic on $D^*$ with $f(\tau)=\tilde F(e^{2\pi i\tau})$ for all $\tau$, then for $q\in D^*$ and a local section $\sigma$ with $p(\sigma(q))=q$ we get $\tilde F(q)=\tilde F(p(\sigma(q)))=f(\sigma(q))=F(q)$; hence $\tilde F=F$ and $F$ is unique. [F1, F3, step 1.1, given, algebra]

3.1 If $F$ extends holomorphically to $0$, then $F$ is bounded on $|q|<\delta$ for some $\delta>0$; for $\Im\tau>-\log\delta/(2\pi)$ one has $|q|<\delta$ by [F1], so $|f(\tau)|=|F(q)|$ is bounded on that half-plane. Conversely, if $|f|\le M$ on $\{\Im\tau>Y_0\}$, then for $0<|q|<e^{-2\pi Y_0}$ any local section $\sigma(q)$ of 1.1 satisfies $\Im\sigma(q)=-\log|q|/(2\pi)>Y_0$ by [F1], so $|F(q)|=|f(\sigma(q))|\le M$; by [F4] the singularity of $F$ at $0$ is removable, $F$ extends holomorphically, and $F(0)=\lim_{q\to0}F(q)=\lim_{\Im\tau\to\infty}f(\tau)$ (given $\varepsilon>0$ choose $\delta$ with $|F(q)-F(0)|<\varepsilon$ for $|q|<\delta$; then $\Im\tau>-\log\delta/(2\pi)$ gives $|f(\tau)-F(0)|<\varepsilon$). Finally, if the extension exists, either $F-F(0)$ vanishes on a neighbourhood of $0$, in which case take $G:=0$, or it vanishes to finite order $m\ge1$ and [F5] writes $F(q)-F(0)=qG(q)$ with $G$ holomorphic near $0$; in either case $G$ is bounded near $0$, so $|f(\tau)-F(0)|=|q|\,|G(q)|\le Ce^{-2\pi\Im\tau}$ for all large $\Im\tau$, which is the asserted $O(e^{-2\pi\delta\Im\tau})$ with $\delta=1$. [F1, F4, F5, step 1.1, step 2.1, given, algebra]

4.1 Assume now that $F$ extends holomorphically to $0$. On the annulus $0<|q|<1$ the holomorphic $F$ has Laurent expansion $\sum_{n\in\mathbb Z}a_nq^n$, and by [F6] $a_n=\frac1{2\pi i}\oint_{|q|=\rho}F(q)q^{-n-1}dq$ for every $0<\rho<1$. Since $F$ is holomorphic at $0$, all coefficients $a_n$ with $n<0$ vanish (their principal part is zero, [F4] applied to the Laurent expansion), so $F(q)=\sum_{n\ge0}a_nq^n$ and $f(\tau)=F(e^{2\pi i\tau})=\sum_{n\ge0}a_nq^n$ converges for $|q|<1$. [F4, F6, step 3.1, algebra] ∎
