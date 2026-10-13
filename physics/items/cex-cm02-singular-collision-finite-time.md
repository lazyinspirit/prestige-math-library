---
id: cex-cm02-singular-collision-finite-time
kind: counterexample
title: "An external-source singularity reached in finite time: the inverse-square external model has a motion whose maximal interval is bounded above"
status: published
origin: session
domain: physics
dependency_level: 13
deps: [post-cm02-force-superposition, post-cm02-interactions, def-cm02-newtonian-flow, pthm-cm02-ivp, pthm-cm02-continuation, ex-cm02-force-model-regularity-checks, def-cm01-configuration, def-cm01-units, def-derivative, lem-derivative-of-a-power, thm-chain-rule, thm-algebra-of-derivatives, thm-nth-roots-exist, lem-reverse-triangle-inequality-in-a-normed-space, def-interval, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm]
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
  thm-nth-roots-exist: mathematical-premise
  lem-reverse-triangle-inequality-in-a-normed-space: mathematical-premise
  def-interval: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A refutation, inside the model, of the claim that every motion of the inverse-square external-potential model exists for all real times: for one label with inertial mass $[m]=\\mu$ in the external potential $U(x)=-k/|x|$, where $[k]=\\mu\\ell^{3}\\tau^{-2}$, on the external-source-excluded domain, an explicit radial motion with the stated initial data solves the model on $(-\\infty,T)$ and has no extension past the finite time $T$, at which the position reaches the excluded center and the speed is unbounded. The item refutes only the all-time-existence claim for this model, illustrates the escape alternative of the breakdown criterion, and asserts no motion of any physical body, no measurement and no empirical claim."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2, printed pages 2-5 (PDF pages 8-11): the equation of motion and the role of the force law's domain; the two-body reduction with the attractive potential -kappa/|r| discussed in Section 2.3-2.4"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.2, chapter page 5 (PDF page 9), and Section 3.4: the inverse-square gravity law on the collision-free domain and its radial consequences, including the singularity of the potential at the center"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "G. Teschl, Ordinary Differential Equations and Dynamical Systems (AMS Graduate Studies in Mathematics 140, online edition), Section 2.6, printed pages 50-53: a maximal solution with finite right endpoint leaves every compact subset of its domain"
      url: "https://schecter.math.ncsu.edu/ma_732_sp13/teschl_ode.pdf"
verification:
  precheck: pass
---

## Statement refuted

Let $m>0$ and $k>0$ have dimensions $[m]=\mu$ and
$[k]=\mu\ell^{3}\tau^{-2}$, respectively ([[def-cm01-units]]). Consider the
force model of
[[post-cm02-force-superposition]] for one label with time window
$I_{0}=\mathbb R$, external-source-excluded configuration domain
$Q=\mathbb R^{3}\setminus\{0\}$ ([[def-cm01-configuration]] clause (a)), mass
$m$, and the external potential

$$U(x)=-\frac{k}{\lvert x\rvert},\qquad U:Q\to\mathbb R,$$

of the potential branch of [[post-cm02-interactions]] clause (iii), so that the
force map is $F(x)=-\nabla U(x)=-k\,x/\lvert x\rvert^{3}$ and the equation of
motion is

$$m\,\ddot x(t)=-\frac{k\,x(t)}{\lvert x(t)\rvert^{3}}\qquad(t\in\mathbb R,\ x(t)\neq0).$$

For this single-label model the distinct-label collision set $\Delta$ of
[[def-cm01-configuration]] clause (a) is empty; the excluded point is the
prescribed external-source singularity, not a collision of model labels.

Then every motion of this model is defined for all real times; equivalently,
the maximal interval of every motion is all of $\mathbb R$.

## Facts & Assumptions

**Given:** The model above with its parameters $m,k>0$, the external-source-excluded domain $Q=\mathbb R^{3}\setminus\{0\}$, and the initial datum of step 1.2 below.

[L1] The model's motions are the $C^{2}$ curves $x:J\to Q$ with $m\ddot x(t)=F(x(t))$ for $t\in J\subseteq\mathbb R$ ([[def-cm02-newtonian-flow]] clauses (a)-(c)); the maximal motion through a datum exists, is unique, and every motion with that datum is its restriction ([[pthm-cm02-ivp]] clauses 1, 2, 4). The regularity of this force map on $Q$ (continuity and local Lipschitz property on every source-excluding annulus) is the content of [[ex-cm02-force-model-regularity-checks]].

[L2] Integer-power differentiation and calculus rules: $(s^{n})'=ns^{n-1}$ for integers $n\ge1$ ([[lem-derivative-of-a-power]]); sums, products and quotients with nonzero denominator differentiate by the algebra of derivatives, and differentiable compositions obey the chain rule ([[thm-algebra-of-derivatives]], [[thm-chain-rule]]). The derivative is the limit of its difference quotient ([[def-derivative]]).

[L3] The Euclidean norm satisfies the triangle inequality and absolute homogeneity ([[thm-cauchy-schwarz-and-the-euclidean-norm]], [[def-euclidean-inner-product]]) and its reverse triangle inequality is $\bigl||x|-|y|\bigr|\le|x-y|$ ([[lem-reverse-triangle-inequality-in-a-normed-space]]); a standard coordinate vector $e_i$ has norm $1$, so $|he_i|=|h|$; in particular $\lvert r(t)e_{1}\rvert=\lvert r(t)\rvert$ for the unit vector $e_{1}$.

[L4] In the present autonomous model on $I_{0}=\mathbb R$, if a maximal motion has finite right endpoint $b$ and its state stays in a compact subset of the open state domain near $b$, it extends past $b$ ([[pthm-cm02-continuation]] clause 3); in particular, a motion that reaches a configuration excluded from $Q$ at a finite time cannot be extended beyond it, because a motion's values must lie in $Q$ at every time of its interval ([[def-cm02-newtonian-flow]] clause (c)).

[L5] Units ([[def-cm01-units]]): $[m]=\mu$, $[k]=\mu\ell^{3}\tau^{-2}$, $[\kappa]=\ell^{3}\tau^{-2}$, $[r_{0}]=\ell$, $[T]=\tau$ and $[v_{0}]=\ell\tau^{-1}$; the potential has dimension $\mu\ell^{2}\tau^{-2}$ and the force has dimension $\mu\ell\tau^{-2}$.

[L6] For every $a\ge0$ and integer $n\ge1$ there is a unique nonnegative $n$-th root of $a$, and the root is positive when $a>0$ ([[thm-nth-roots-exist]]).

## Counterexample

**Proof technique:** direct; exhibit an explicit radial $C^{2}$ motion with finite maximal forward time for $U(x)=-k/|x|$, verify the equation by differentiation, and show no extension past the singularity time exists.

1.1 Force from the potential: fix $x\neq0$ and a coordinate index $i\in\{1,2,3\}$, and let $e_i$ be the corresponding standard coordinate vector. For $|h|<|x|/2$, [L3] gives $|x+he_i|\ge|x|-|h|>0$, so the difference quotient is defined; also $|x+he_i|\to|x|>0$. Rationalizing the difference of squares gives $\frac{|x+he_i|-|x|}{h}=\frac{2x_i+h}{|x+he_i|+|x|}\to\frac{x_i}{|x|}$. Therefore $$\partial_iU(x)=\lim_{h\to0}\frac{-k/|x+he_i|+k/|x|}{h}=\lim_{h\to0}\frac{k(|x+he_i|-|x|)}{h|x+he_i||x|}=\frac{kx_i}{|x|^{3}}.$$ By the definition of the Euclidean gradient in [[post-cm02-interactions]] clause (iii), $-\nabla U(x)=-k\,x/|x|^{3}$; this is the model's force map, continuous and locally Lipschitz on $Q$ by [L1] and [[ex-cm02-force-model-regularity-checks]]. Its dimension is $[k]/[x]^2=\mu\ell\tau^{-2}$, as required by [L5]. [given, L1, L3, L5, algebra]

1.2 Set $\kappa:=k/m>0$, let $r_{0}>0$ have dimension $\ell$, and define
$$T:=\frac{\sqrt{2}\,r_{0}^{3/2}}{3\sqrt{\kappa}},\qquad v_{0}:=-\sqrt{\frac{2\kappa}{r_{0}}}.$$
Then $[T]=\tau$ and $[v_0]=\ell\tau^{-1}$ by [L5], and the definitions give $T^{2}=2r_{0}^{3}/(9\kappa)$ and $2r_{0}/(3T)=\sqrt{2\kappa/r_{0}}=-v_{0}$. Take the initial datum $x(0)=r_{0}e_{1}$, $\dot x(0)=v_{0}e_{1}$. [given, L5, algebra]

1.3 For $t<T$ put $s(t):=1-t/T>0$, let $q(t)$ be the unique positive cube root of $s(t)^{2}$, and set $r(t):=r_{0}q(t)$ and $x(t):=r(t)e_{1}$. This defines $q$ by [L6]. The cube-root map is continuous on $[0,\infty)$: for nonnegative $a,b$, if $\alpha^{3}=a$ and $\beta^{3}=b$, then $|\alpha-\beta|^{3}\le|a-b|$, since $\alpha^{2}+\alpha\beta+\beta^{2}\ge(\alpha-\beta)^{2}$; applying this to $a=s(t+h)^{2}$ and $b=s(t)^{2}$ gives $q(t+h)\to q(t)$. For $h\to0$ with $t+h<T$, rationalizing and using $s(t+h)=s(t)-h/T$ gives $$\frac{q(t+h)-q(t)}{h}=\frac{(s(t+h)^{2}-s(t)^{2})/h}{q(t+h)^{2}+q(t+h)q(t)+q(t)^{2}}\longrightarrow-\frac{2s(t)}{3Tq(t)^{2}},$$ so $q'(t)=-2s(t)/(3Tq(t)^{2})$. Differentiating this identity by [L2] and using $s'=-1/T$ and $q^{3}=s^{2}$ gives $q''(t)=-2/(9T^{2}q(t)^{2})$. Thus $x$ is $C^{2}$ on $(-\infty,T)$ and $$\dot r(t)=-\frac{2r_{0}s(t)}{3Tq(t)^{2}},\qquad \ddot r(t)=-\frac{2r_{0}}{9T^{2}q(t)^{2}}.$$ Moreover $q(t)\to0$ as $t\uparrow T$: for each $\varepsilon>0$, $q(t)\ge\varepsilon$ would imply $s(t)^{2}=q(t)^{3}\ge\varepsilon^{3}$, contradicting $s(t)^{2}\to0$ once $t$ is sufficiently close to $T$. [given, L2, L6, algebra]

2.1 The equation holds: from $T^{2}=2r_{0}^{3}/(9\kappa)$ one has $2r_{0}/(9T^{2})=\kappa/r_{0}^{2}$, so step 1.3 gives $\ddot r(t)=-\kappa/(r_{0}^{2}q(t)^{2})=-\kappa/r(t)^{2}$. Hence $\ddot x(t)=-\kappa e_{1}/r(t)^{2}=-k e_{1}/(m r(t)^{2})$ and $F(x(t))=-k r(t)e_{1}/r(t)^{3}=-k e_{1}/r(t)^{2}$, so $m\ddot x(t)=F(x(t))$ for every $t<T$. Also $q(0)=1$, $q'(0)=-2/(3T)$, and step 1.2 gives $x(0)=r_{0}e_{1}$ and $\dot x(0)=-(2r_{0}/(3T))e_{1}=v_{0}e_{1}$. Since $q(t)>0$ for $t<T$, $x(t)\in Q$ and $t\in I_{0}=\mathbb R$ throughout; by [L1], $x$ is a motion through the datum on $(-\infty,T)$. [step 1.2, step 1.3, L1, L3, algebra]

3.1 No extension past $T$: suppose a motion $\tilde x$ with the same datum were defined on an interval containing some $t_{*}>T$. By the uniqueness clause of [L1] it agrees with $x$ on the intersection of their intervals; that intersection contains $[0,T)$ because the interval of $\tilde x$ contains both $0$ and $t_{*}$. It is continuous at $T$, and step 1.3 gives $q(t)\to0$ as $t\uparrow T$, so $\tilde x(T)=\lim_{t\uparrow T}x(t)=0$. But a motion's values must lie in $Q=\mathbb R^{3}\setminus\{0\}$ at every time of its interval, a contradiction. Thus no motion through the datum extends past $T$, and by the maximality clause of [L1] the maximal motion is $x$ on $(-\infty,T)$, with finite right endpoint $b=T$. [step 2.1, L1, L4]

4.1 Escape consistent with the breakdown criterion: as $t\uparrow T$, $q(t)\to0$ while $|\dot r(t)|=2r_{0}s(t)/(3Tq(t)^{2})\to+\infty$, since $\bigl(s(t)/q(t)^{2}\bigr)^{2}=1/q(t)\to+\infty$ and the quotient is positive. Thus the state $(x(t),\dot x(t))$ leaves every compact subset of $U=Q\times\mathbb R^{3}$ near $T$ in both ways predicted by [[pthm-cm02-continuation]] clause 4: its velocity is unbounded and its position approaches the excluded configuration. The refuted all-time-existence statement is false for this model. [step 1.3, step 3.1, L4, algebra] ∎

## Remarks

- **External-source singularity.** The motion falls radially into the force center and reaches it at the finite time $T$; the model, which excludes the configuration $x=0$ from its domain, has no dynamics past that event. This is a computation inside the model, not a claim about the fate of a physical body near a point mass: an actual system would require a different model (for instance a finite-size body, or a modified short-distance force) across the regime where the idealization fails.

- **Energy check.** The datum has zero reduced energy: $\frac{m}{2}\lvert\dot x(0)\rvert^{2}+U(x(0))=\frac{m}{2}\cdot\frac{2\kappa}{r_{0}}-\frac{k}{r_{0}}=\frac{k}{r_{0}}-\frac{k}{r_{0}}=0$, the parabolic case of the radial problem, consistent with arrival at the center with unbounded speed rather than a turning point.

- **No contradiction with the continuation theorem.** The theorem requires escape from every compact subset of the open state domain at a finite maximal endpoint. Step 3.1 establishes nonextendibility independently, and step 4.1 verifies this necessary escape condition.
