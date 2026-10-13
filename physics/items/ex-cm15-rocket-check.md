---
id: ex-cm15-rocket-check
kind: example
title: "A declared rocket check: initial mass $3\\,\\mathrm{kg}$, loss rate $1\\,\\mathrm{kg\\,s^{-1}}$ and relative exhaust speed $2\\,\\mathrm{m\\,s^{-1}}$ give $v=u_e\\ln(m_0/m)n$ and show that $(mv)'=F$ fails"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [post-cm15-impulse,
       pthm-cm15-impact-balance,
       thm-cm-variable-mass-momentum-balance,
       def-cm01-units,
       def-interval,
       def-derivative,
       thm-algebra-of-derivatives,
       thm-logarithm-derivative-and-integral,
       thm-chain-rule,
       cor-vector-valued-ftc-and-lipschitz-bound,
       def-euclidean-inner-product]
dependency_roles:
  post-cm15-impulse: physical-assumption
  pthm-cm15-impact-balance: physical-result
  thm-cm-variable-mass-momentum-balance: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-interval: mathematical-premise
  def-derivative: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-logarithm-derivative-and-integral: mathematical-premise
  thm-chain-rule: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A declared-data check of the open-body material accounting: a body of initial mass $m_0=3\\,\\mathrm{kg}$ losing mass at $r_0=1\\,\\mathrm{kg\\,s^{-1}}$ has $m(t)=m_0-r_0t$. With no external force and ejecta of relative speed $u_e=2\\,\\mathrm{m\\,s^{-1}}$ opposite a fixed unit direction $n$, its velocity from rest is $v(t)=u_e\\ln(m_0/m(t))n$. It satisfies the material balance identities and violates the naive closed-system law $(mv)'=F$; the example verifies the identities, the thrust $2\\,\\mathrm{N}$ and the failure of the naive law on declared model data. It reports no measurement, no engine data and no empirical comparison."
sources:
  references:
    - title: "J. Peraire and S. Widnall, 16.07 Dynamics (MIT OpenCourseWare, Fall 2008/2009), Lecture L14 'Variable Mass Systems: The Rocket Equation', Eqs. (11)-(15): $m\\,\\mathrm d\\mathbf v/\\mathrm dt=\\mathbf F+(\\mathrm dm/\\mathrm dt)\\mathbf v_0$ with $\\mathbf v_0$ the transferred matter's velocity relative to the body, and the Tsiolkovsky integral"
      url: "https://ocw.mit.edu/courses/16-07-dynamics-fall-2009/98d19cb2b9983c14c6907052499e7a98_MIT16_07F09_Lec14.pdf"
    - title: "David Tong, Classical Dynamics (University of Cambridge), §1.2, printed p. 2: the caution that the closed-system form of the momentum balance does not describe an open variable-mass body"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
---

## Example

**Declared model data.** Adopt the open-body material accounting of
[[post-cm15-impulse]] clause (iii) with, on the open interval
$I=(-\frac12\ \mathrm s,\frac52\ \mathrm s)$ containing the initial time $0$,
set $m_0:=3\ \mathrm{kg}$, $r_0:=1\ \mathrm{kg\,s^{-1}}$, and
$$m(t):=m_0-r_0t,\qquad F\equiv0,\qquad r_{\mathrm{in}}\equiv0,\qquad r_{\mathrm{out}}\equiv r_0,\qquad w_{\mathrm{out}}(t):=v(t)-u_e\,n,$$
with a fixed unit vector $n$, $u_e:=2\ \mathrm{m\,s^{-1}}$, and initial
velocity $v(0)=0$. The ejecta therefore leave with the body's velocity
reduced by the constant exhaust speed $u_e$ along $n$. Set
$q:=t/(1\ \mathrm s)$, the dimensionless numerical time, so
$m(t)=(3-q)\ \mathrm{kg}$. Primes denote differentiation with respect to
physical frame time $t$, read in seconds.

**Assertions to check.** The balance identities hold with
$$v(t)=u_e\ln\frac{m_0}{m(t)}\,n=2\ln\frac{3}{3-q}\ n\ \mathrm{m\,s^{-1}}\qquad(t\in I),$$
the thrust is $r_{\mathrm{out}}u_e=2\ \mathrm{N}$ along $n$, and the naive
closed-system law $(mv)'=F$ fails: it would force $v\equiv0$ on $I$.

## Facts & Assumptions

**Given:** The declared maps $m,F,r_{\mathrm{in}},r_{\mathrm{out}},w_{\mathrm{out}}$ and the vocabulary of [[def-cm01-units]].

[L1] Material accounting and derived law ([[post-cm15-impulse]] clause (iii), [[thm-cm-variable-mass-momentum-balance]], [[pthm-cm15-impact-balance]] clause 6): the model requires $m'=r_{\mathrm{in}}-r_{\mathrm{out}}$ and $(mv)'=F+r_{\mathrm{in}}w_{\mathrm{in}}-r_{\mathrm{out}}w_{\mathrm{out}}$, equivalently $mv'=F+r_{\mathrm{in}}(w_{\mathrm{in}}-v)-r_{\mathrm{out}}(w_{\mathrm{out}}-v)$.

[L2] Calculus ([[def-derivative]], [[thm-algebra-of-derivatives]], [[thm-logarithm-derivative-and-integral]], [[thm-chain-rule]], [[cor-vector-valued-ftc-and-lipschitz-bound]], [[def-interval]], [[def-euclidean-inner-product]]): for real-valued differentiable functions, $(\ln)'=1/x$ on $(0,\infty)$, the chain rule and product rule hold, and a curve with zero derivative on an interval is constant.

## Verification

**Proof technique:** direct.

1.1 Mass identity: $m'=-r_0=r_{\mathrm{in}}-r_{\mathrm{out}}$ on $I$, in $\mathrm{kg\,s^{-1}}$. Since $-1/2<q<5/2$, $m(t)=(3-q)\ \mathrm{kg}>0$, so the first balance identity and the positive-mass condition hold. [given, L1, L2, algebra]

2.1 Velocity candidate: define $v(t):=u_e\ln(m_0/m(t))n$. By [L2] and $m'=-r_0$, $\frac{\mathrm d}{\mathrm dt}\ln(m_0/m(t))=r_0/m(t)$, so $v'(t)=u_er_0n/m(t)$, with acceleration units $\mathrm{m\,s^{-2}}$, and $v(0)=u_e\ln1\cdot n=0$. The logarithm acts on the positive dimensionless ratio $m_0/m(t)$. [step 1.1, given, L2, algebra]

3.1 Strong form: $mv'=r_0u_en$, while $F+r_{\mathrm{in}}(w_{\mathrm{in}}-v)-r_{\mathrm{out}}(w_{\mathrm{out}}-v)=-r_0((v-u_en)-v)=r_0u_en$. Thus the derived law holds with thrust $r_0u_e=2\ \mathrm N$ along $n$. [step 1.1, step 2.1, L1, algebra]

4.1 Material identities: the product rule gives $(mv)'=m'v+mv'=-r_0v+r_0u_en=-r_0w_{\mathrm{out}}=F+r_{\mathrm{in}}w_{\mathrm{in}}-r_{\mathrm{out}}w_{\mathrm{out}}$. Along with step 1.1 this verifies both balance identities of [L1], with every term in this momentum-rate identity having force units. [step 1.1, step 3.1, L1, L2, algebra]

5.1 Failure of the naive law: $(mv)'=F\equiv0$ would make $mv$ constant and, since $m(0)v(0)=0$ and $m>0$, would force $v\equiv0$ by [L2]. But the computed $v(t)$ is nonzero for $0<t<2\ \mathrm s$; at $t=2\ \mathrm s$, $(mv)'=(2-2\ln3)n\ \mathrm N\approx-0.197n\ \mathrm N\ne F$. Hence the naive law fails for this open body, as [[pthm-cm15-impact-balance]] clause 6(b) records. [step 4.1, L1, L2, algebra]

6.1 Tsiolkovsky value: at $t=1\ \mathrm s$, $q=1$, $m=2\ \mathrm{kg}$ and $v=2\ln(3/2)n\ \mathrm{m\,s^{-1}}\approx0.8109n\ \mathrm{m\,s^{-1}}$. The momentum is approximately $1.6219n\ \mathrm{kg\,m\,s^{-1}}$, whereas the naive law gives zero. These values come from the exact logarithm before rounding; all are declared model computations, with no measurement or empirical inference. [step 5.1, L1, L2, algebra] ∎

## Remarks

- **Signs and conventions.** The ejecta velocity $w_{\mathrm{out}}=v-u_en$ is expressed in the same inertial frame as $v$, as [[post-cm15-impulse]] clause (iii) requires; $u_e>0$ is the exhaust speed *relative to the body*, and the thrust $r_{\mathrm{out}}(v-w_{\mathrm{out}})=r_{\mathrm{out}}u_en$ points along $+n$.

- **Units.** $[m]=\mathrm{kg}$, $[r_{\mathrm{out}}]=\mathrm{kg\,s^{-1}}$, $[u_e]=\mathrm{m\,s^{-1}}$, $[F]=\mathrm{N}=\mathrm{kg\,m\,s^{-2}}$ ([[def-cm01-units]]); $mv'$ and $r_{\mathrm{out}}u_e$ both have the dimension of force.
