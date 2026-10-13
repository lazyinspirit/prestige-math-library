---
id: cex-gr-negative-sound-speed-derivative-breaks-evolution
kind: counterexample
title: "A negative pressure derivative defeats fixed-Sobolev evolution: exponentially growing Fourier modes of the linearized barotropic fluid"
status: published
origin: session
domain: mathematics
dependency_level: 8
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
deps: [def-gr-perfect-fluid-matter-model, def-gr-periodic-torus-and-sobolev-spaces, def-countable-choice]
dependency_roles:
  def-gr-perfect-fluid-matter-model: mathematical-premise
  def-gr-periodic-torus-and-sobolev-spaces: mathematical-premise
  def-countable-choice: mathematical-premise
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

Assume Countable Choice $\mathrm{AC}_\omega$ ([[def-countable-choice]]), carrying the integration hypothesis of [[def-gr-periodic-torus-and-sobolev-spaces]].

Refuted statement: "At every constant rest state with $H_0=\epsilon_0+p(\epsilon_0)>0$, the fixed-flat-background linearized barotropic fluid equations admit a periodic $C^1$ solution on some positive time interval for every smooth periodic initial datum, and their solution operators are continuous in each fixed integer Sobolev topology $H^r$, $r\ge0$, at every fixed positive time."

For $p'(\epsilon_0)=-a^2<0$, both assertions fail: the explicit smooth datum of step 2.2 has no such solution on any positive time interval, and the smooth single-mode sequence of step 2.1 proves failure of $H^r$ continuity for every integer $r\ge0$ at every fixed positive time. These conclusions concern the specified linearized equations; nonlinear Einstein-fluid illposedness with constrained data remains an open prerequisite.

## Facts & Assumptions

**Given:** Countable Choice, a smooth equation of state near a constant rest density $\epsilon_0$ with $H_0=\epsilon_0+p(\epsilon_0)>0$ and $p'(\epsilon_0)=-a^2<0$, the flat metric $-dt^2+\sum_i(dx^i)^2$ on $\mathbb R\times\mathbb T^3_{2\pi}$, and its rest velocity $\partial_t$. A classical linearized solution means periodic density and spatial velocity perturbations $(f,v)$ of class $C^1$ on $[0,\tau]\times\mathbb T^3_{2\pi}$ satisfying the displayed equations and initial values; derivatives at the time endpoints are one-sided.

[L1] Perfect-fluid stress and conservation equations are those of [[def-gr-perfect-fluid-matter-model]]; their first variation at the prescribed constant flat rest state is computed directly below.

[L2] On the fixed flat background the linearization of the system about a constant state with $n=\partial_t$, constant $\epsilon_0,p_0$ decouples the spatial Fourier modes; substituting $\delta\epsilon=e^{ik\cdot x}g_k(s)$ into the linearized equations gives $g_k''=-p'(\epsilon_0)|k|^2g_k$ ([[def-gr-perfect-fluid-matter-model]]). [L2]

[L3] The normalized measure on $\mathbb T^3_{2\pi}$ has total mass one, and for integer $r\ge0$ the Sobolev norm is the derivative-sum norm of [[def-gr-periodic-torus-and-sobolev-spaces]], with its declared Countable Choice assumption.

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
The nonlinear Einstein-fluid extension remains an open prerequisite: a fixed-flat fluid mode calculation neither solves the nonlinear
Einstein constraints nor proves that a merely continuous nonlinear solution
map has a bounded derivative. The cited Friedrich--Rendall Section 5.5 makes
only the linearized deduction and describes the nonlinear implication as a
suggestion. A rigorous nonlinear transfer theorem with constrained initial
data, or a direct nonlinear counterexample, is still required here.


**Proof technique:** direct.

1.1 (Exact growing and decaying mode solutions.) For every integer $n\ge1$ and $A\ge0$, put $f_n(t,x)=A\cos(nx^1)\cosh(an t)$ and $v_n^1(t,x)=-(a/H_0)A\sin(nx^1)\sinh(an t)$, with $v_n^2=v_n^3=0$. Differentiation gives $\partial_tf_n+H_0\partial_1v_n^1=0$ and $H_0\partial_tv_n^1-a^2\partial_1f_n=0$; the other momentum components are zero. Thus these are exact smooth solutions of the displayed linearized system with data $(A\cos(nx^1),0)$. The density mode satisfies $g_n''=a^2n^2g_n$, $g_n(0)=A$, $g_n'(0)=0$, so $g_n(t)=A\cosh(an t)\ge(A/2)e^{an t}$ for $t\ge0$. This lower bound uses the stated nonnegative amplitude and zero initial velocity. More generally, for any periodic $C^1$ solution, differentiating its Fourier coefficients under the integral and integrating the spatial derivatives by parts gives $g_k'=-H_0ik\cdot w_k$ and $H_0w_k'=a^2ikg_k$, hence $g_k''=a^2|k|^2g_k$. The initial density and velocity therefore determine each density coefficient uniquely by this scalar ODE. [L1, L2, algebra]

2.1 (Failure of fixed-Sobolev continuity on smooth modes.) Fix $\tau>0$ and an integer $r\ge0$. In step 1.1 take $A_n=(1+n^2)^{-r/2}e^{-an\tau/2}$. Under the derivative-sum norm of [L3], $\|\cos(nx^1)\|_{H^r}^2=\tfrac12\sum_{j=0}^r n^{2j}$, which lies between positive constants times $(1+n^2)^r$, uniformly for $n\ge1$. Consequently the initial H^r norm tends to zero, whereas the density H^r norm at $\tau$ is at least a positive constant times $e^{an\tau/2}$ and tends to infinity. Each datum and solution is a single trigonometric polynomial and hence smooth; indeed the data tend to zero in every fixed derivative norm because exponential decay dominates every power. Any other classical solution of the same datum has the same coefficient at $(n,0,0)$ by step 1.1. For any such density lying in $H^r$, integration by parts gives $n^r|\widehat f(n,0,0)|=|\widehat{D_1^rf}(n,0,0)|\le\|D_1^rf\|_2\le\|f\|_{H^r}$. The coefficient inequality follows from $|\widehat h(k)|\le\int|h|\le\|h\|_2$; the second bound follows by expanding $0\le\int(|h|-\int|h|)^2$ on the normalized probability space. Consequently every classical solution choice has density $H^r$ norm at least a positive constant times $e^{an\tau/2}$. Thus no choice of a solution operator, even restricted to these smooth trigonometric data, can be continuous at zero from $H^r$ data to $H^r$ values at any fixed positive time. [step 1.1, L3, construct, algebra]

2.2 (A genuinely smooth datum with no linearized Sobolev solution.) Set $f_0(x)=\sum_{n\ge1}e^{-\sqrt n}\cos(nx^1)$ and $v_0=0$. For every integer $q\ge0$, $\sum_{n\ge1}n^qe^{-\sqrt n}<\infty$: group the terms with $j^2\le n<(j+1)^2$, whose contribution is at most $(2j+1)(j+1)^{2q}e^{-j}$, a summable polynomial times a geometric sequence. Thus each spatial derivative series converges uniformly; the fundamental theorem of calculus applied to partial sums and their uniformly convergent derivative series shows successively that $f_0$ is smooth with those derivatives. Suppose a periodic $C^1$ linearized solution existed on $[0,\tau]$. At each Fourier frequency $k$, differentiation under the integral and periodic integration by parts give $g_k'= -H_0 i k\cdot w_k$ and $H_0w_k'=a^2 i k g_k$. Thus $g_k$ is $C^2$ with $g_k''=a^2|k|^2g_k$. The explicit initial coefficients and zero velocity, together with uniqueness of this elementary ODE, force its coefficient at $(n,0,0)$ to be $\tfrac12e^{-\sqrt n}\cosh(an t)$. For every $t>0$ these coefficients tend to infinity, since $an t-\sqrt n\to\infty$, whereas every Fourier coefficient of the continuous density at that fixed time has absolute value at most $\int|f(t,x)|\,d\mu\le\sup_x|f(t,x)|<\infty$. This contradiction excludes a periodic classical solution on every positive time interval, without requiring an unproved inference from coefficient summability. This explicit datum is smooth; polynomially decaying coefficients of a fixed order would not have established that assertion. [step 1.1, L2, L3, construct, algebra]

3.1 (Conclusion within the proved scope.) Step 2.1 proves failure of continuity at zero in every fixed integer $H^r$ topology for the explicit smooth mode solutions at each fixed positive time. Step 2.2 supplies one smooth periodic datum admitting no periodic $C^1$ linearized solution on any positive time interval. These refute both assertions in the stated fixed-flat linearized claim. The nonlinear Einstein-fluid transfer with constrained data is explicitly left open; no nonlinear completeness or illposedness verdict follows from this proof. [step 2.1, step 2.2] ∎
