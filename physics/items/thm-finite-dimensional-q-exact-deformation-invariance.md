---
id: thm-finite-dimensional-q-exact-deformation-invariance
kind: theorem
title: "Finite-Dimensional Q-Exact Deformation Invariance"
status: "published"
origin: pipeline
domain: mathematics
library: mathematics
dependency_level: 1
deps:
  - def-finite-dimensional-q-exact-localization-data
  - thm-differentiation-under-the-integral-sign
  - def-derivative
  - cor-zero-derivative-implies-constant
dependency_roles:
  def-finite-dimensional-q-exact-localization-data: mathematical-premise
  thm-differentiation-under-the-integral-sign: mathematical-premise
  def-derivative: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  scraped: []
  references:
    - title: "Albert Schwarz and Oleg Zaboronsky, Supersymmetry and localization"
      url: "https://arxiv.org/pdf/hep-th/9511112"
    - title: "Vasily Pestun and Maxim Zabzine, Introduction to localization in quantum field theory"
      url: "https://arxiv.org/pdf/1608.02953"
    - title: "Gerald B. Folland, Real Analysis, 2nd ed."
      url: "https://djvu.online/file/NPF4BEtSuqdFA"
    - title: "Jiří Lebl, Basic Analysis I, §4.2"
      url: "https://www.jirka.org/ra/html/sec_mvt.html"
verification:
  precheck: pass
  judge:
    model: "gpt-6-luna"
    verdict: pass
    date: 2026-10-25
---

## Statement

Let $M$ be an oriented smooth manifold of finite dimension $n$, with integration cycle $M$, smooth positive volume form $\mu$, graded algebra $\mathcal A=\Omega^\bullet(M;\mathbb C)$, and integral $I_\Gamma(F)=\int_M F_{[n]}$ of the degree-$n$ part. Let $Q$ be a smooth odd derivation of $\mathcal A$, let $S,O$ be smooth even forms, let $V$ be a smooth odd form, and let $J\subseteq\mathbb R$ be a nonempty open interval. Suppose $QS=QO=0$, $(Q^2V)e^{-S-tQV}=0$ for every $t\in J$, and $I_\Gamma(Q(O V e^{-S-tQV}))=0$ for every $t\in J$, including the zero-boundary-flux condition. Write $(Oe^{-S-tQV})_{[n]}=f_t\mu$. Suppose that $f_t$ is integrable for each $t\in J$, is differentiable in $t$ almost everywhere with measurable derivative, and that for every compact $K\subset J$ one integrable majorant $g_K$ bounds both $|f_t|$ and $|\partial_t f_t|$ for all $t\in K$, outside one null set. Then

$$Z(t):=I_\Gamma(Oe^{-S-tQV})=\int_M f_t\,d\mu$$

is constant on $J$, and for every $t\in J$,

$$Z'(t)=-I_\Gamma(O(QV)e^{-S-tQV})=-I_\Gamma(Q(O V e^{-S-tQV}))=0.$$

In particular, the conclusion is finite-dimensional and applies only at finite parameter values in $J$; it gives no $t\to\infty$ saddle-point limit and no identity for an infinite-dimensional continuum functional integral.

## Statement references

[Schwarz and Zaboronsky, §§2–3](https://arxiv.org/pdf/hep-th/9511112)

[Pestun and Zabzine, §1](https://arxiv.org/pdf/1608.02953)

[Folland, Theorem 2.27(b)](https://djvu.online/file/NPF4BEtSuqdFA)

[Lebl, Proposition 4.2.6](https://www.jirka.org/ra/html/sec_mvt.html)

## Facts & Assumptions

**Given:** $M,\mu,\mathcal A,I_\Gamma,Q,S,O,V,J$ satisfying the Statement, with $Q$-invariant integration on each $O V e^{-S-tQV}$, the stated $Q^2V$ condition, and the compact-parameter integrable majorants.

[F1] [[def-finite-dimensional-q-exact-localization-data]]: $\Gamma=M$, $\mathcal A=\Omega^\bullet(M;\mathbb C)$, $I_\Gamma(F)=\int_M F_{[n]}$, and $Q$ is an odd derivation with the graded Leibniz rule. For a complex coefficient depending on real $t$, $\partial_t f_t(x)$ is the limit in $\mathbb C$ of $(f_{t+h}(x)-f_t(x))/h$ as real $h\to0$. $Q$-invariance is the integrated identity $I_\Gamma(QF)=0$ on the specified admissible class; zero divergence together with zero boundary flux is a sufficient condition for obtaining that identity by graded integration by parts, and the two conditions are distinct.

[F2] [[thm-differentiation-under-the-integral-sign]]: for a measurable family $f(x,t)$ whose sections are integrable, whose parameter derivative exists almost everywhere and is measurable, and whose derivative has one $L^1$ majorant uniform on an open parameter interval, the integral $F(t)=\int f(x,t)\,d\mu(x)$ is differentiable and $F'(t)=\int \partial_t f(x,t)\,d\mu(x)$.

[F3] [[def-derivative]]: for a real-valued function $u$ at an interior point $t$, $u'(t)$ is the finite limit of $(u(t+h)-u(t))/h$ as $h\to0$, $h\ne0$.

[F4] [[cor-zero-derivative-implies-constant]]: a real-valued function continuous on an interval and differentiable at every interior point with derivative zero throughout is constant on that interval.

## Proof

1.1 Put $E_t=e^{-S-tQV}$. Since $QV$ is even, coefficientwise differentiation of its exponential gives $\partial_tE_t=-(QV)E_t$. The top-degree projection is linear and $O$ is independent of $t$, so $(\partial_t f_t)\mu=-[O(QV)E_t]_{[n]}$. [given, F1, algebra]

1.2 The assumptions $QS=0$ and $(Q^2V)E_t=0$ give $QE_t=-(QS+tQ^2V)E_t=0$. The graded Leibniz rule, $QO=0$, and the odd parity of $V$ then give $Q(OV E_t)=(QO)VE_t+O(QV)E_t-OV(QE_t)=O(QV)E_t$. [given, F1, algebra]

2.1 Fix $t_0\in J$ and choose $a<t_0<b$ with $[a,b]\subset J$. The majorant $g_{[a,b]}$ makes every $f_t$ integrable on $(a,b)$ and bounds its measurable parameter derivative there by one $L^1(M,\mu)$ function. Applying [F2] on $(a,b)$, and using step 1.1, gives $Z'(t_0)=-I_\Gamma(O(QV)E_{t_0})$. [given, F2, step 1.1]

3.1 Substituting step 1.2 into the derivative formula of step 2.1 yields $Z'(t_0)=-I_\Gamma(Q(OV E_{t_0}))=0$ by the exact integrated $Q$-invariance identity assumed in the Statement for $F=OV E_{t_0}$. Since $t_0$ was arbitrary, $Z'$ vanishes throughout $J$. [given, F1, step 2.1, step 1.2]

4.1 Write $Z=u+iv$ with real functions $u,v$. Step 3.1 implies that both real difference quotients have limit zero at every $t\in J$. By [F3], for each $t$ and all sufficiently small nonzero $h$, $|u(t+h)-u(t)|<|h|$ and $|v(t+h)-v(t)|<|h|$; hence $u$ and $v$ are continuous at every $t$. Applying [F4] to each component shows that both are constant on $J$. Therefore $Z$ is constant on $J$. [F3, F4, step 3.1] ∎
