---
id: cex-cm02-singular-collision-finite-time
kind: counterexample
title: "A singular collision in finite time: the inverse-square external model has a motion whose maximal interval is bounded above"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [post-cm02-force-superposition, post-cm02-interactions, def-cm02-newtonian-flow, pthm-cm02-ivp, pthm-cm02-continuation, ex-cm02-force-model-regularity-checks, def-cm01-configuration, def-cm01-units, def-derivative, lem-derivative-of-a-power, thm-chain-rule, thm-algebra-of-derivatives, def-interval, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm]
dependency_roles:
  post-cm02-force-superposition: formulation-prerequisite
  post-cm02-interactions: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  pthm-cm02-ivp: physical-result
  pthm-cm02-continuation: physical-result
  ex-cm02-force-model-regularity-checks: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-derivative: mathematical-premise
  lem-derivative-of-a-power: mathematical-premise
  thm-chain-rule: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  def-interval: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A refutation, inside the model, of the claim that every motion of the inverse-square external-potential model exists for all real times: for one label of mass $m>0$ in the external potential $U(x)=-k/|x|$ on the collision-excluded domain, an explicit radial motion with the stated initial data solves the model on $(-\\infty,T)$ and has no extension past the finite time $T$, at which the position reaches the excluded center and the speed is unbounded. The item refutes only the all-time-existence claim for this model, illustrates the escape alternative of the breakdown criterion, and asserts no motion of any physical body, no measurement and no empirical claim."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2, printed pages 2-5 (PDF pages 8-11): the equation of motion and the role of the force law's domain; the two-body reduction with the attractive potential -kappa/|r| discussed in Section 2.3-2.4"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.2, chapter page 4 (PDF page 8), and Section 3.4: the inverse-square gravity law on the collision-free domain and its radial consequences, including the singularity of the potential at the center"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 2.6, printed pages 50-53: a maximal solution with finite right endpoint leaves every compact subset of its domain"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
verification:
  precheck: pass
---

## Statement refuted

Let $m>0$ and $k>0$. Consider the force model of
[[post-cm02-force-superposition]] for one label with time window
$I_{0}=\mathbb R$, collision-excluded configuration domain
$Q=\mathbb R^{3}\setminus\{0\}$ ([[def-cm01-configuration]] clause (a)), mass
$m$, and the external potential

$$U(x)=-\frac{k}{\lvert x\rvert},\qquad U:Q\to\mathbb R,$$

of the potential branch of [[post-cm02-interactions]] clause (iii), so that the
force map is $F(x)=-\nabla U(x)=-k\,x/\lvert x\rvert^{3}$ and the equation of
motion is

$$m\,\ddot x(t)=-\frac{k\,x(t)}{\lvert x(t)\rvert^{3}}\qquad(t\in\mathbb R,\ x(t)\neq0).$$

Then every motion of this model is defined for all real times; equivalently,
the maximal interval of every motion is all of $\mathbb R$.

## Facts & Assumptions

**Given:** The model above with its parameters $m,k>0$, the collision-excluded
domain $Q=\mathbb R^{3}\setminus\{0\}$, and the initial datum of step 1.2
below.

[L1] The model's motions are the $C^{2}$ curves $x:J\to Q$ with
$m\ddot x(t)=F(x(t))$ for $t\in J\subseteq\mathbb R$
([[def-cm02-newtonian-flow]] clauses (a)-(c)); the maximal motion through a
datum exists, is unique, and every motion with that datum is its restriction
([[pthm-cm02-ivp]] clauses 1, 2, 4). The regularity of this force map on $Q$
(continuity and local Lipschitz property on every collision-free annulus) is
the content of [[ex-cm02-force-model-regularity-checks]].

[L2] Derivative rules: $(s^{\alpha})'=\alpha s^{\alpha-1}$ for the powers used
here ([[lem-derivative-of-a-power]], [[thm-algebra-of-derivatives]]), the
chain rule for compositions with affine maps ([[thm-chain-rule]]), and
componentwise differentiation of $\mathbb R^{3}$-valued curves
([[def-derivative]]); $t\mapsto(1-t/T)^{2/3}$ is $C^{2}$ on $(-\infty,T)$
because $1-t/T>0$ there.

[L3] The Euclidean norm satisfies the triangle inequality and absolute
homogeneity ([[thm-cauchy-schwarz-and-the-euclidean-norm]],
[[def-euclidean-inner-product]]); in particular
$\lvert r(t)e_{1}\rvert=\lvert r(t)\rvert$ for the unit vector $e_{1}$.

[L4] In the present autonomous model on $I_{0}=\mathbb R$, if a maximal
motion has finite right endpoint $b$ and its state stays in a compact subset
of the open state domain near $b$, it extends past $b$
([[pthm-cm02-continuation]] clause 3); in particular, a motion that reaches a
configuration excluded from $Q$ at a finite time cannot be extended beyond
it, because a motion's values must lie in $Q$ at every time of its interval
([[def-cm02-newtonian-flow]] clause (c)).

## Counterexample

**Proof technique:** direct; exhibit an explicit radial $C^{2}$ motion with
finite maximal forward time for $U(x)=-k/|x|$, verify the equation by
differentiation, and show no extension past the collision time exists.

1.1 Force from the potential: for $x\neq0$ the function $x\mapsto-k\lvert x\rvert^{-1}$ is differentiable with $\partial_{i}\bigl(-k\lvert x\rvert^{-1}\bigr)=k\,x_{i}\lvert x\rvert^{-3}$ (chain rule and power rule, [L2]), so $-\nabla U(x)=-k\,x/\lvert x\rvert^{3}$; this is the force map of the model, continuous and locally Lipschitz on $Q$ by [L1] and [[ex-cm02-force-model-regularity-checks]]. [given, L1, L2, algebra]

1.2 Set $\kappa:=k/m>0$, let $r_{0}>0$, define
$$T:=\frac{\sqrt{2}\,r_{0}^{3/2}}{3\sqrt{\kappa}},\qquad v_{0}:=-\sqrt{\frac{2\kappa}{r_{0}}},$$
and consider the datum $x(0)=r_{0}e_{1}$, $\dot x(0)=v_{0}e_{1}$; note the elementary identity $\dfrac{2r_{0}}{3T}=\sqrt{\dfrac{2\kappa}{r_{0}}}=-v_{0}$, obtained from the definition of $T$ by multiplying numerator and denominator. [given, algebra]

1.3 Define $r:(-\infty,T)\to(0,\infty)$ by $r(t):=r_{0}\bigl(1-\frac{t}{T}\bigr)^{2/3}$ and $x(t):=r(t)e_{1}$. Then $x$ is $C^{2}$ on $(-\infty,T)$ with first component $r$, and by [L2] $$\dot r(t)=-\frac{2r_{0}}{3T}\Bigl(1-\frac{t}{T}\Bigr)^{-1/3},\qquad \ddot r(t)=-\frac{2r_{0}}{9T^{2}}\Bigl(1-\frac{t}{T}\Bigr)^{-4/3}.$$ [given, L2, algebra]

2.1 The equation holds: from $T^{2}=\dfrac{2r_{0}^{3}}{9\kappa}$ one has $\dfrac{2r_{0}}{9T^{2}}=\dfrac{\kappa}{r_{0}^{2}}$, so $$\ddot r(t)=-\frac{\kappa}{r_{0}^{2}}\Bigl(1-\frac{t}{T}\Bigr)^{-4/3}=-\frac{\kappa}{r(t)^{2}}.$$ Hence $\ddot x(t)=\ddot r(t)e_{1}=-\dfrac{\kappa}{r(t)^{2}}e_{1}=-\dfrac{k}{m\,r(t)^{2}}e_{1}$ and $F(x(t))=-\dfrac{k\,r(t)e_{1}}{r(t)^{3}}=-\dfrac{k}{r(t)^{2}}e_{1}$, so $m\ddot x(t)=F(x(t))$ for every $t\in(-\infty,T)$; moreover $x(t)\in Q$ and $t\in I_{0}=\mathbb R$ throughout, and the initial values are $x(0)=r_{0}e_{1}$ and $\dot x(0)=\dot r(0)e_{1}=-\frac{2r_{0}}{3T}e_{1}=v_{0}e_{1}$ by step 1.2. By [L1], $x$ is a motion of the model on $(-\infty,T)$ through the datum. [step 1.2, step 1.3, L1, L3, algebra]

3.1 No extension past $T$: suppose a motion $\tilde x$ with the same datum were defined on an interval containing some $t_{*}>T$. By the uniqueness clause of [L1] it agrees with $x$ on $(-\infty,T)$, and being continuous at $T$ it would satisfy $\tilde x(T)=\lim_{t\uparrow T}x(t)=(0,0,0)$, because $r(t)\to0$ as $t\uparrow T$; but a motion's values must lie in $Q=\mathbb R^{3}\setminus\{0\}$ at every time of its interval, and $(0,0,0)\notin Q$ — a contradiction. Hence no motion with the datum is defined beyond $T$, and by the maximality clause of [L1] the maximal motion with the datum is $x$, whose maximal interval is $(-\infty,T)$ with finite right endpoint $b=T$. [step 2.1, L1, L4]

4.1 Escape consistent with the breakdown criterion: as $t\uparrow T$ one has $\lvert\dot r(t)\rvert=\frac{2r_{0}}{3T}(1-t/T)^{-1/3}\to+\infty$ while $r(t)\to0$; the state $(x(t),\dot x(t))$ therefore leaves every compact subset of $U=Q\times\mathbb R^{3}$ near $T$, in the two ways predicted by [[pthm-cm02-continuation]] clause 4: the velocity is unbounded and the position approaches the excluded configuration. The refuted all-time-existence statement is false for this model. [step 3.1, L4, algebra] ∎

## Remarks

- **Singular collision.** The motion falls radially into the force center and
  reaches it at the finite time $T$; the model, which excludes the
  configuration $x=0$ from its domain, has no dynamics past that event. This
  is a computation inside the model, not a claim about the fate of a physical
  body near a point mass: an actual system would require a different model
  (for instance a finite-size body, or a modified short-distance force) across
  the regime where the idealization fails.

- **Energy check.** The datum has zero reduced energy: $\frac{m}{2}\lvert\dot x(0)\rvert^{2}+U(x(0))=\frac{m}{2}\cdot\frac{2\kappa}{r_{0}}-\frac{k}{r_{0}}=\frac{k}{r_{0}}-\frac{k}{r_{0}}=0$, the parabolic case of the radial problem, consistent with arrival at the center with unbounded speed rather than a turning point.

- **No contradiction with the continuation theorem.** The theorem requires
  escape from every compact subset of the open state domain at a finite
  maximal endpoint. Step 3.1 establishes nonextendibility independently, and
  step 4.1 verifies this necessary escape condition.
