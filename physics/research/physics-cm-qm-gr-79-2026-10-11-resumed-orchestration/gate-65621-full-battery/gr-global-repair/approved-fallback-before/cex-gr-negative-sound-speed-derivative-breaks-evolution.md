---
id: cex-gr-negative-sound-speed-derivative-breaks-evolution
kind: counterexample
title: "A negative pressure derivative defeats fixed-Sobolev evolution: exponentially growing Fourier modes of the linearized barotropic fluid"
status: draft
origin: session
domain: mathematics
dependency_level: 14
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
deps: [def-gr-perfect-fluid-matter-model, def-gr-barotropic-enthalpy-variable, lem-gr-barotropic-fluid-symmetric-hyperbolic-system, def-gr-periodic-torus-and-sobolev-spaces]
dependency_roles:
  def-gr-perfect-fluid-matter-model: mathematical-premise
  def-gr-barotropic-enthalpy-variable: mathematical-premise
  lem-gr-barotropic-fluid-symmetric-hyperbolic-system: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
sources:
  references:
    - title: "H. Friedrich and A. D. Rendall, The Cauchy Problem for the Einstein Equations, Living Reviews in Relativity 3 (2000), article 1 (arXiv:gr-qc/0002074), Section 5.5 (An Example of an Ill-Posed Initial Value Problem): the special-relativistic Euler equations with equation of state p=k rho, k<0, linearized about a constant state, with explicit periodic data sin(nx) whose Fourier modes grow like cosh(n sqrt(-k) t), so smooth periodic data fail to have solutions bounded, derivatives included, on any fixed [0,T]"
      url: "https://arxiv.org/pdf/gr-qc/0002074"
    - title: "I. Rodnianski and J. Speck, The Stability of the Irrotational Euler-Einstein System with a Positive Cosmological Constant, arXiv:0911.5501 (v2, 2010), Sections 1 and 3: the Euler-Einstein system, the speed-of-sound hypotheses 0<cs<1 for a barotropic fluid (Postulate (4)), the sound cone and the wave-equation formulation of the fluid equations"
      url: "https://arxiv.org/pdf/0911.5501"
verification:
  precheck: pending
---

## Statement refuted

Refuted statement: "for an arbitrary smooth equation of state $p=p(\epsilon)$
with $\epsilon+p>0$ (no sign restriction on $p'$), the Einstein-fluid system
has a local development depending continuously on the data in a fixed Sobolev
topology."

## Facts & Assumptions

**Given:** the constant rest state, the equation of state with $p'(\epsilon_0)<0$, and the linearized system.

[L1] Perfect-fluid equations and their stress tensor ([[def-gr-perfect-fluid-matter-model]]); the barotropic reduction and the role of $c_s^2=p'$ ([[def-gr-barotropic-enthalpy-variable]], [[lem-gr-barotropic-fluid-symmetric-hyperbolic-system]]).

[L2] On the fixed flat background the linearization of the system about a constant state with $n=\partial_t$, constant $\epsilon_0,p_0$ decouples the spatial Fourier modes; substituting $\delta\epsilon=e^{ik\cdot x}g_k(s)$ into the linearized equations gives $g_k''=-p'(\epsilon_0)|k|^2g_k$ ([[def-gr-perfect-fluid-matter-model]]). [L2]

[L3] Fourier analysis on the torus: for any coefficient sequence $(\widehat u(k))$ with $\sum_k(1+|k|^2)^r|\widehat u(k)|^2<\infty$ the class lies in $H^r$ ([[def-gr-periodic-torus-and-sobolev-spaces]]). [L3]

## Counterexample

Consider only the fixed-flat-background **linearized fluid subsystem** at a
constant rest state. Write $H_0=\epsilon_0+p(\epsilon_0)>0$ and
$a=\sqrt{-p'(\epsilon_0)}>0$. For density perturbation $f$ and spatial velocity
perturbation $v$, differentiation of the conservation equations directly gives
$$\partial_t f+H_0\operatorname{div}v=0,\qquad H_0\partial_t v-a^2\nabla f=0.$$
Indeed the normalization equation at the rest state gives $\delta u^0=0$;
the first variations of $T^{00},T^{0i},T^{ij}$ are respectively
$f,H_0v^i,p'(\epsilon_0)f\delta^{ij}$. These equations therefore follow by
ordinary differentiation of the perfect-fluid stress formula, without invoking
the real enthalpy reduction, whose hypotheses require $p'>0$.

The following computation proves both failure of fixed-Sobolev continuity and
failure of existence for some smooth data **for this linearized system**.
The nonlinear Einstein-fluid refuted statement above remains an unresolved
obligation: a fixed-flat fluid mode calculation neither solves the nonlinear
Einstein constraints nor proves that a merely continuous nonlinear solution
map has a bounded derivative. The cited Friedrich--Rendall Section 5.5 makes
only the linearized deduction and describes the nonlinear implication as a
suggestion. A rigorous nonlinear transfer theorem with constrained initial
data, or a direct nonlinear counterexample, is still required here.


**Proof technique:** direct.

1.1 (Exact growing and decaying mode solutions.) For every integer $n\ge1$ and $A\ge0$, put $f_n(t,x)=A\cos(nx^1)\cosh(an t)$ and $v_n^1(t,x)=-(a/H_0)A\sin(nx^1)\sinh(an t)$, with $v_n^2=v_n^3=0$. Differentiation gives $\partial_tf_n+H_0\partial_1v_n^1=0$ and $H_0\partial_tv_n^1-a^2\partial_1f_n=0$; the other momentum components are zero. Thus these are exact smooth solutions of the displayed linearized system with data $(A\cos(nx^1),0)$. The density mode satisfies $g_n''=a^2n^2g_n$, $g_n(0)=A$, $g_n'(0)=0$, so $g_n(t)=A\cosh(an t)\ge(A/2)e^{an t}$ for $t\ge0$. This lower bound uses the stated nonnegative amplitude and zero initial velocity; it is not asserted for arbitrary growing-plus-decaying mode combinations. [L1, L2, algebra]

2.1 (Failure of fixed-Sobolev continuity on smooth modes.) Fix $\tau>0$ and an integer $r\ge0$. In step 1.1 take $A_n=(1+n^2)^{-r/2}e^{-an\tau/2}$. Under the derivative-sum norm of [L3], $\|\cos(nx^1)\|_{H^r}^2=\tfrac12\sum_{j=0}^r n^{2j}$, which lies between positive constants times $(1+n^2)^r$, uniformly for $n\ge1$. Consequently the initial H^r norm tends to zero, whereas the density H^r norm at $\tau$ is at least a positive constant times $e^{an\tau/2}$ and tends to infinity. Each datum and solution is a single trigonometric polynomial and hence smooth; indeed the data tend to zero in every fixed derivative norm because exponential decay dominates every power. A linearized solution operator agreeing with these modes therefore cannot be continuous at zero from H^r data to H^r values at any fixed positive time. [step 1.1, L3, construct, algebra]

2.2 (A genuinely smooth datum with no linearized Sobolev solution.) Set $f_0(x)=\sum_{n\ge1}e^{-\sqrt n}\cos(nx^1)$ and $v_0=0$. For every integer $q\ge0$, $\sum_{n\ge1}n^qe^{-\sqrt n}<\infty$: group the terms with $j^2\le n<(j+1)^2$, whose contribution is at most $(2j+1)(j+1)^{2q}e^{-j}$, a summable polynomial times a geometric sequence. Thus each spatial derivative series converges uniformly; the fundamental theorem of calculus applied to partial sums and their uniformly convergent derivative series shows successively that $f_0$ is smooth with those derivatives. Suppose a linearized solution existed on $[0,\tau]$ with enough regularity to satisfy the equations and with its density in H^r at every time. Taking each spatial Fourier coefficient gives the scalar ODE of step 1.1; uniqueness of that elementary ODE forces its coefficient at $(n,0,0)$ to be $\tfrac12e^{-\sqrt n}\cosh(an t)$. For every $t>0$ these coefficients tend to infinity, since $an t-\sqrt n\to\infty$, so they are not square summable and cannot be the coefficients of an H^r class. This is a contradiction. This explicit datum is smooth; polynomially decaying coefficients of a fixed order would not have established that assertion. [step 1.1, L2, L3, construct, algebra]

3.1 (Established linear conclusion and remaining obligation.) Steps 2.1 and 2.2 prove the claimed instability and smooth-data nonexistence for the explicitly specified fixed-background linearized system. They leave unresolved the nonlinear Einstein-fluid refuted statement: proving that stronger assertion requires nonlinear evolution and Einstein-constraint control, not differentiation of a merely continuous solution map. No nonlinear illposedness verdict or completion of that missing transfer is recorded here. [step 2.1, step 2.2]
