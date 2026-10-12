---
id: ex-cm15-rocket-check
kind: example
title: "A declared rocket check: mass $3-t\\,\\mathrm{kg}$ and constant exhaust speed $2\\,\\mathrm{m\\,s^{-1}}$ relative to the body give $v(t)=2\\ln(3/(3-t))\\,\\mathrm{m\\,s^{-1}}$ and show that $(mv)'=F$ fails"
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
physical_scope: "A declared-data check of the open-body material accounting: a body of initial mass $3\\,\\mathrm{kg}$ losing mass at $1\\,\\mathrm{kg\\,s^{-1}}$ with no external force and ejecta of constant speed $2\\,\\mathrm{m\\,s^{-1}}$ relative to the body has velocity $v(t)=2\\ln(3/(3-t))\\,\\mathrm{m\\,s^{-1}}$ from rest, satisfies the material balance identities, and violates the naive closed-system law $(mv)'=F$; the example verifies the identities, the thrust $2\\,\\mathrm{N}$ and the failure of the naive law on declared model data. It reports no measurement, no engine data and no empirical comparison."
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
$I=(-\frac12,\frac52)$ containing the initial time $0$,
$$m(t):=3-t\ \mathrm{kg},\qquad F\equiv0,\qquad r_{\mathrm{in}}\equiv0,\qquad r_{\mathrm{out}}\equiv1\ \mathrm{kg\,s^{-1}},\qquad w_{\mathrm{out}}(t):=v(t)-u_e\,n,$$
with a fixed unit vector $n$, $u_e:=2\ \mathrm{m\,s^{-1}}$, and initial
velocity $v(0)=0$. The ejecta therefore leave with the body's velocity
reduced by the constant exhaust speed $u_e$ along $n$.

**Assertions to check.** The balance identities hold with
$$v(t)=u_e\ln\frac{m(0)}{m(t)}=2\ln\frac{3}{3-t}\ n\ \mathrm{m\,s^{-1}}\qquad(t\in I),$$
the thrust is $r_{\mathrm{out}}u_e=2\ \mathrm{N}$ along $n$, and the naive
closed-system law $(mv)'=F$ fails: it would force $v\equiv0$ on $I$.

## Facts & Assumptions

**Given:** The declared maps $m,F,r_{\mathrm{in}},r_{\mathrm{out}},w_{\mathrm{out}}$ and the vocabulary of [[def-cm01-units]].

[L1] Material accounting and derived law ([[post-cm15-impulse]] clause (iii), [[thm-cm-variable-mass-momentum-balance]], [[pthm-cm15-impact-balance]] clause 6): the model requires $m'=r_{\mathrm{in}}-r_{\mathrm{out}}$ and $(mv)'=F+r_{\mathrm{in}}w_{\mathrm{in}}-r_{\mathrm{out}}w_{\mathrm{out}}$, equivalently $mv'=F+r_{\mathrm{in}}(w_{\mathrm{in}}-v)-r_{\mathrm{out}}(w_{\mathrm{out}}-v)$.

[L2] Calculus ([[def-derivative]], [[thm-algebra-of-derivatives]], [[thm-logarithm-derivative-and-integral]], [[thm-chain-rule]], [[cor-vector-valued-ftc-and-lipschitz-bound]], [[def-interval]], [[def-euclidean-inner-product]]): for real-valued differentiable functions, $(\ln)'=1/x$ on $(0,\infty)$, the chain rule and product rule hold, and a curve with zero derivative on an interval is constant.

## Verification

**Proof technique:** direct.

1.1 Mass identity: $m'=-1$ and $r_{\mathrm{in}}-r_{\mathrm{out}}=0-1=-1$ on $I$, so the first balance identity holds; moreover $m(t)=3-t>0$ on $I$. [given, L1, L2, algebra]

1.2 Velocity candidate: define $v(t):=u_e\ln\frac{3}{3-t}n$; by [L2], $\frac{\mathrm d}{\mathrm dt}\ln\frac{3}{3-t}=\frac{1}{3-t}$, so $v'(t)=\frac{u_e}{3-t}n=\frac{2}{3-t}n$, and $v(0)=u_e\ln1\cdot n=0$. [given, L2, algebra]

2.1 Strong form: $m v'=(3-t)\cdot\frac{2}{3-t}n=2n$, while $F+r_{\mathrm{in}}(w_{\mathrm{in}}-v)-r_{\mathrm{out}}(w_{\mathrm{out}}-v)=0+0-1\cdot\bigl((v-u_en)-v\bigr)=u_en=2n$; hence the derived law holds with thrust $r_{\mathrm{out}}u_e=2\ \mathrm{N}$ along $n$. [step 1.1, step 1.2, L1, algebra]

3.1 Material identities: from step 1.2, $(mv)'=m'v+mv'=-v+2n$, while $F+r_{\mathrm{in}}w_{\mathrm{in}}-r_{\mathrm{out}}w_{\mathrm{out}}=0+0-1\cdot(v-u_en)=-v+2n$; both identities of [L1] therefore hold. [step 1.1, step 2.1, L1, L2, algebra]

4.1 Failure of the naive law: the closed-system law $(mv)'=F\equiv0$ would give $mv$ constant and, since $m(0)v(0)=0$, would force $v\equiv0$ on $I$ by [L2]; but the computed velocity has $v(t)=2\ln\frac{3}{3-t}n\ne0$ for $t\in(0,2)$ and, at $t=2^{-}$, $(mv)'(2^{-})=(-2\ln3+2)n\approx-0.197n\ \mathrm{N}\ne F$. Hence $(mv)'=F$ is false for this open body, exactly as [[pthm-cm15-impact-balance]] clause 6(b) records. [step 3.1, L1, L2, algebra]

5.1 Tsiolkovsky value: at $t=1$ one has $m(1)=2\ \mathrm{kg}$ and $v(1)=2\ln\frac32n\approx0.8109n\ \mathrm{m\,s^{-1}}$; the momentum at that time is $2\cdot0.8109n\approx1.6218n\ \mathrm{kg\,m\,s^{-1}}$, while the naive law would give $mv=0$. All quantities are declared model data substituted into the model formulas; no engine, propellant or measurement is involved. [step 4.1, L1, L2, algebra] ∎

## Remarks

- **Signs and conventions.** The ejecta velocity $w_{\mathrm{out}}=v-u_en$ is expressed in the same inertial frame as $v$, as [[post-cm15-impulse]] clause (iii) requires; $u_e>0$ is the exhaust speed *relative to the body*, and the thrust $r_{\mathrm{out}}(v-w_{\mathrm{out}})=r_{\mathrm{out}}u_en$ points along $+n$.

- **Units.** $[m]=\mathrm{kg}$, $[r_{\mathrm{out}}]=\mathrm{kg\,s^{-1}}$, $[u_e]=\mathrm{m\,s^{-1}}$, $[F]=\mathrm{N}=\mathrm{kg\,m\,s^{-2}}$ ([[def-cm01-units]]); $mv'$ and $r_{\mathrm{out}}u_e$ both have the dimension of force.
