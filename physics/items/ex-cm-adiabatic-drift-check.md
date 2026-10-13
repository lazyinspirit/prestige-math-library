---
id: ex-cm-adiabatic-drift-check
kind: example
title: "An exactly solvable adiabatic branch: $K=I+\\varepsilon I\\cos\\theta$
  and comparison with the drift bound"
status: published
origin: pipeline
domain: mathematics
dependency_level: 2
deps:
  [
    thm-cm-adiabatic-invariant-drift-bound,
    def-cm-parameter-dependent-action-angle-branch,
    thm-sine-and-cosine-derivatives,
    thm-sine-cosine-signs-monotonicity-and-ranges,
    cor-mean-value-theorem,
    cor-zero-derivative-implies-constant,
    cor-vector-valued-ftc-and-lipschitz-bound,
    thm-existence-and-uniqueness-of-a-maximal-ode-solution,
    def-maximal-ode-solution,
    def-first-order-ode-initial-value-problem-and-solution,
    def-locally-lipschitz-in-the-state-variable,
    thm-cm-compact-continuation-for-locally-lipschitz-odes,
    thm-algebra-of-derivatives,
    def-interval
  ]
dependency_roles:
  thm-cm-adiabatic-invariant-drift-bound: mathematical-premise
  def-cm-parameter-dependent-action-angle-branch: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  thm-sine-cosine-signs-monotonicity-and-ranges: mathematical-premise
  cor-mean-value-theorem: mathematical-premise
  cor-zero-derivative-implies-constant: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  thm-existence-and-uniqueness-of-a-maximal-ode-solution: mathematical-premise
  def-maximal-ode-solution: mathematical-premise
  def-first-order-ode-initial-value-problem-and-solution: mathematical-premise
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  thm-cm-compact-continuation-for-locally-lipschitz-odes: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: example
sources:
  references:
    - title: "K. Likharev, Essential Graduate Physics, Classical Mechanics (complete
        252-page volume), Chapter 10 Sections 10.2-10.3, Eqs. (10.28)-(10.42):
        action variable and adiabatic invariance, printed pages 5-8 of Chapter
        10 (PDF pages 241-244)"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015
        version), Section 4.6, Eqs. (4.150)-(4.158): the action
        $I=\\frac1{2\\pi}\\oint p\\,dq$ and the averaged invariance statement,
        printed pages 113-115"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
verification:
  precheck: pass
proof_strategy: direct
---

## Example

Take $J=\mathbb R$, $S=\mathbb R$, $h(I,s)=I$ and $k(I,\theta,s)=I\cos\theta$ in the datum of [[def-cm-parameter-dependent-action-angle-branch]], with $\varepsilon=\tfrac1{10}$, $A=2$, $\omega_0=1$, $K=[6/5,19/10]$, $S_0=[0,2]$, $s_0=0$ and initial datum $I(0)=3/2$, $\theta(0)=0$. The branch system is

$$I'=\varepsilon I\sin\theta,\qquad \theta'=1+\varepsilon\cos\theta,\qquad s'=\varepsilon,$$

so $s(t)=\varepsilon t$ stays in $S_0=[0,2]$ on $[0,A/\varepsilon]=[0,20]$, and $I(t)$ stays in $K$ for all $t\ge0$. The quantity $J:=I(1+\varepsilon\cos\theta)$ is exactly invariant, the solution stays in $K\times S_0$ on $[0,A/\varepsilon]$, and

$$|I(t)-I(0)|\le\tfrac13\qquad(t\ge0),$$

while the drift bound of [[thm-cm-adiabatic-invariant-drift-bound]] evaluates in this instance to $|I(t)-I(0)|\le\tfrac{19}{50}$.

## Facts & Assumptions

**Given:** The datum $h(I,s)=I$, $k(I,\theta,s)=I\cos\theta$, $\varepsilon=1/10$, and the sets and data above.

[L1] The branch vector field is $I'=-\varepsilon\partial_\theta k$, $\theta'=\partial_Ih+\varepsilon\partial_Ik$, $s'=\varepsilon$; here $\partial_Ih=1$, $\partial_\theta k=-I\sin\theta$ and $\partial_Ik=\cos\theta$, so the field is as displayed ([[def-cm-parameter-dependent-action-angle-branch]]). [given]

[L2] The drift bound ([[thm-cm-adiabatic-invariant-drift-bound]]): if $|\partial_Ih|\ge\omega_0$ and the branch solution stays in the compact sets $K\times S_0$, then $$|I(t)-I(0)|\le\varepsilon\Bigl[2\sup_{K\times[0,2\pi]\times S_0}|g|+A\sup_{K\times[0,2\pi]\times S_0}\bigl|\partial_Ig\,\partial_\theta k-\partial_\theta g\,\partial_Ik-\partial_sg\bigr|\Bigr],$$ where $g=(k-\langle k\rangle)/\partial_Ih$ and $\langle k\rangle$ is the $\theta$-average of $k$. [given]

[L3] $(\sin\theta)'=\cos\theta$ and $(\cos\theta)'=-\sin\theta$, and derivatives of sums and products follow the algebra of derivatives and the chain rule. ([[thm-sine-and-cosine-derivatives]], [[thm-algebra-of-derivatives]])

[L4] $|\sin\theta|\le1$ and $|\cos\theta|\le1$ for all real $\theta$ ([[thm-sine-cosine-signs-monotonicity-and-ranges]]); the mean value theorem then gives $|\sin\theta-\sin\vartheta|\le|\theta-\vartheta|$ and $|\cos\theta-\cos\vartheta|\le|\theta-\vartheta|$ ([[cor-mean-value-theorem]]).

[L5] Local Lipschitz continuity in the state variable is the neighborhood-uniform state-Lipschitz property of [[def-locally-lipschitz-in-the-state-variable]]. For a continuous field with this property on an open ODE domain, there is a unique maximal solution through each datum, and a solution of an autonomous field whose state remains in a compact subset of its open state domain near a finite endpoint extends past that endpoint ([[def-first-order-ode-initial-value-problem-and-solution]], [[thm-existence-and-uniqueness-of-a-maximal-ode-solution]], [[def-maximal-ode-solution]], [[thm-cm-compact-continuation-for-locally-lipschitz-odes]]).

[L6] If a differentiable vector-valued curve on a compact interval has derivative norm at most $C$, then its endpoint difference has norm at most $C$ times the interval length ([[cor-vector-valued-ftc-and-lipschitz-bound]]).

[L7] The zero-derivative constancy fact used below is [[cor-zero-derivative-implies-constant]]: a differentiable real function on an interval whose derivative vanishes is constant.

## Verification

**Proof technique:** direct; exhibit an exact invariant of the branch system, check the trapping, and evaluate the theorem's constant.

1.1 Write the branch field as $V(I,\theta,s)=(\tfrac1{10}I\sin\theta,1+\tfrac1{10}\cos\theta,\tfrac1{10})$. On each cube $C_N=[-N,N]^3$ with $N>0$, [L4] gives, for $p=(I,\theta,s)$ and $q=(I',\vartheta,s')$, $$|I\sin\theta-I'\sin\vartheta|\le|I-I'|+N|\theta-\vartheta|,\qquad |\cos\theta-\cos\vartheta|\le|\theta-\vartheta|.$$ Hence $\|V(p)-V(q)\|_2\le\tfrac1{10}(|I-I'|+(N+1)|\theta-\vartheta|)\le\tfrac{N+2}{10}\|p-q\|_2$. Thus $V$ is continuous and locally Lipschitz on its open domain $\mathbb R^3$; by [L5] there is a unique maximal solution $(I,\theta,s):(\alpha,\beta)\to\mathbb R^3$ through the stated datum. [L1, L4, L5, algebra]

2.1 Along the maximal solution of step 1.1, [L1] gives $I'=\tfrac1{10}I\sin\theta$, $\theta'=1+\tfrac1{10}\cos\theta$, $s'=\tfrac1{10}$. Put $J(t):=I(t)(1+\tfrac1{10}\cos\theta(t))$. By [L3], $$J'=\tfrac1{10}I\sin\theta\,(1+\tfrac1{10}\cos\theta)+I\,(-\tfrac1{10}\sin\theta)(1+\tfrac1{10}\cos\theta)=0,$$ so [L7] makes $J$ constant; with $I(0)=3/2$, $\theta(0)=0$ we get $J\equiv\tfrac{33}{20}$. [step 1.1, L1, L3, L7, algebra]

3.1 Trapping and global forward existence: on $[0,\beta)$, step 2.1 and [L4] give $9/10\le1+\tfrac1{10}\cos\theta(t)\le11/10$ and hence $$\tfrac32=\tfrac{33}{20}\cdot\tfrac{10}{11}\le I(t)=\frac{33/20}{1+\tfrac1{10}\cos\theta(t)}\le\tfrac{33}{20}\cdot\tfrac{10}{9}=\tfrac{11}{6}.$$ Also $|\theta'(t)|\le11/10$ and $|s'(t)|=1/10$, so [L6] gives $|\theta(t)|\le11t/10$ and $s(t)=t/10$. If $\beta<+\infty$, the state curve near $\beta$ stays in the compact subset $[\tfrac32,\tfrac{11}{6}]\times[-\tfrac{11\beta}{10},\tfrac{11\beta}{10}]\times[0,\tfrac\beta{10}]$ of $\mathbb R^3$; the autonomous compact-continuation clause of [L5] extends the maximal solution past $\beta$, a contradiction. Hence $\beta=+\infty$. Since $s(t)=t/10$, on $[0,20]=[0,A/\varepsilon]$ we have $s(t)\in S_0$, and the bounds above place $I(t)$ strictly inside $K=[6/5,19/10]$. Thus the solution stays in $K\times S_0$ on the required horizon, and [L2] applies. [step 1.1, step 2.1, L2, L4, L5, L6, algebra]

4.1 Evaluate the theorem's constant: $\langle k\rangle(I,s)=\frac1{2\pi}\int_0^{2\pi}I\cos\theta\,d\theta=0$, so $g=I\cos\theta$ and $\sup_{K\times[0,2\pi]\times S_0}|g|=\tfrac{19}{10}$. Moreover $\partial_Ig=\cos\theta$, $\partial_\theta g=-I\sin\theta$, $\partial_sg=0$, and with $\partial_\theta k=-I\sin\theta$, $\partial_Ik=\cos\theta$ one has $\partial_Ig\,\partial_\theta k-\partial_\theta g\,\partial_Ik-\partial_sg=-I\cos\theta\sin\theta+I\sin\theta\cos\theta=0$. The theorem thus gives $|I(t)-I(0)|\le\tfrac1{10}\cdot2\cdot\tfrac{19}{10}=\tfrac{19}{50}$, while the exact invariant gives $$|I(t)-I(0)|=\tfrac1{10}\cdot\tfrac32\,\frac{|\cos\theta(0)-\cos\theta(t)|}{1+\tfrac1{10}\cos\theta(t)}\le\tfrac1{10}\cdot\tfrac32\cdot\frac{2}{9/10}=\frac13,$$ consistent with the bound. [step 2.1, step 3.1, L2, algebra] ∎
