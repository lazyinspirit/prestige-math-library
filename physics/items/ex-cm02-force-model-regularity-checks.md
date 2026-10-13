---
id: ex-cm02-force-model-regularity-checks
kind: example
title: "Standing regularity of the page's force models checked: uniform field, linear drag and the inverse-square model on its singularity-excluded domain"
status: published
origin: session
domain: physics
dependency_level: 12
deps: [post-cm02-force-superposition, post-cm02-interactions, post-cm02-drag, def-cm02-newtonian-flow, pthm-cm02-ivp, pthm-cm02-continuation, def-cm01-configuration, def-cm01-units, def-locally-lipschitz-in-the-state-variable, def-continuity-real, def-euclidean-inner-product, thm-cauchy-schwarz-and-the-euclidean-norm, lem-reverse-triangle-inequality-in-a-normed-space, thm-algebra-of-continuous-functions, thm-extreme-value-metric]
dependency_roles:
  post-cm02-force-superposition: formulation-prerequisite
  post-cm02-interactions: formulation-prerequisite
  post-cm02-drag: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  pthm-cm02-ivp: physical-result
  pthm-cm02-continuation: physical-result
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  def-continuity-real: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  thm-cauchy-schwarz-and-the-euclidean-norm: mathematical-premise
  lem-reverse-triangle-inequality-in-a-normed-space: mathematical-premise
  thm-algebra-of-continuous-functions: mathematical-premise
  thm-extreme-value-metric: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A worked model check inside the framework: verification that three force maps of this page satisfy the standing continuity and state-local-Lipschitz hypotheses of the force postulate, with explicit constants where available; the uniform-force model has constant 0, the linear drag model has constant c, and the inverse-square external model is locally Lipschitz on each singularity-free annulus with the stated constant and has no continuous extension to the excluded center. The item is a finite verification inside the adopted models; it asserts no motion, no measurement and no empirical claim."
sources:
  references:
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.2, printed pages 2-5 (PDF pages 8-11): force as a function of the state with the continuity and differentiability assumptions used when the equation of motion is analysed"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "I. Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 7.1.1, printed page 143 (PDF page 146): the local existence and uniqueness theorem requires the right-hand side and its first derivatives to be continuous on the domain"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.2, chapter page 5 (PDF page 9): the inverse-square gravity law as an additional adopted model, defined away from coincident positions"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Example

Consider three force maps for a single label of mass $m>0$ in a fixed inertial
frame, each on the state domain indicated, with the standing hypotheses of
clause (iii) of [[post-cm02-force-superposition]] in view
([[def-locally-lipschitz-in-the-state-variable]]). For one label the collision
set $\Delta$ of [[def-cm01-configuration]] clause (a) is empty, since it
requires two distinct labels. Model 3 instead removes the singular position
of a prescribed external source, which is not a declared particle label:


1. **Uniform field.** $Q=\mathbb R^{3}$, $F(t,x,v)=m\mathbf g$ for a declared
   constant $\mathbf g\in\mathbb R^{3}$ of dimension $\ell\tau^{-2}$
   ([[def-cm01-units]]).
2. **Linear drag with constant applied force.** $Q=\mathbb R^{3}$,
   $F(t,x,v)=m\mathbf g-c\,v$ with $c\ge0$ of dimension $\mu\tau^{-1}$
   ([[post-cm02-drag]]).
3. **Inverse-square external model.** $Q=\mathbb R^{3}\setminus\{0\}$,
   $F(x)=-k\,x/\lvert x\rvert^{3}$ with $k>0$ of dimension
   $\mu\ell^{3}\tau^{-2}$, the force supplied by the external potential
   $U(x)=-k/\lvert x\rvert$ of the potential branch
   [[post-cm02-interactions]].

Verify: each map is continuous on its domain and locally Lipschitz in the
state variable, locally uniformly in time, with the explicit constants
$L=0$ for model 1, $L=c$ for model 2 and, on each annulus
$r\le\lvert x\rvert\le R$ inside $\mathbb R^{3}\setminus\{0\}$ with $0<r\le R$,
$L=k\bigl(r^{-3}+3R^{3}r^{-6}\bigr)$ for model 3; and the inverse-square map
has no continuous extension to the excluded point $0$. Consequently the local
existence and uniqueness theorem [[pthm-cm02-ivp]] and the continuation
theorem [[pthm-cm02-continuation]] apply to each of the three models on its
stated domain.

## Facts & Assumptions

**Given:** The three force maps of the Example with their domains and parameters, and the state $z=(x,v)\in Q\times\mathbb R^{3}$ with $\lVert z\rVert_{2}^{2}=\lVert x\rVert_{2}^{2}+\lVert v\rVert_{2}^{2}$.

[L1] The state-local-Lipschitz hypothesis of the force branch ([[post-cm02-force-superposition]] clause (iii), [[def-locally-lipschitz-in-the-state-variable]]): on every compact time-state cylinder there is a finite $L$ with $\lVert F(t,z)-F(t,z')\rVert_{2}\le L\lVert z-z'\rVert_{2}$ at equal times; continuity on the domain is the other standing hypothesis.

[L2] Norm facts in $\mathbb R^{3}$ ([[def-euclidean-inner-product]], [[thm-cauchy-schwarz-and-the-euclidean-norm]]): the Euclidean norm satisfies the triangle inequality $\lVert u+w\rVert_{2}\le\lVert u\rVert_{2}+\lVert w\rVert_{2}$ and absolute homogeneity; and $\bigl|\lVert u\rVert_{2}-\lVert w\rVert_{2}\bigr|\le\lVert u-w\rVert_{2}$ ([[lem-reverse-triangle-inequality-in-a-normed-space]]).

[L3] Continuity of the elementary maps ([[thm-algebra-of-continuous-functions]], [[thm-extreme-value-metric]], [[def-continuity-real]]): constants and the identity are continuous, and sums, scalar multiples and products of continuous functions are continuous.

[L4] Every continuous real-valued function on a nonempty compact metric space attains its minimum and maximum ([[thm-extreme-value-metric]]).

## Verification

**Proof technique:** direct; verify continuity and exhibit an explicit Lipschitz constant for each model, then check the failure of continuity at the excluded point of model 3.

1.1 Model 1: the constant map $z\mapsto m\mathbf g$ is continuous by [L3]; and for any two states $\lVert F(t,z)-F(t,z')\rVert_{2}=\lVert m\mathbf g-m\mathbf g\rVert_{2}=0$, so $L=0$ is a state-Lipschitz constant on every cylinder, independent of time. Hence model 1 satisfies [L1]. [given, L1, L3, algebra]

1.2 Model 2: the map $(t,x,v)\mapsto m\mathbf g-c\,v$ is a constant plus a scalar multiple of the linear map $v\mapsto v$, hence continuous by [L3]; and for states $z=(x,v)$, $z'=(x',v')$, $\lVert F(t,z)-F(t,z')\rVert_{2}=\lVert c(v'-v)\rVert_{2}=c\,\lVert v-v'\rVert_{2}\le c\,\lVert z-z'\rVert_{2}$ by [L2], so $L=c$ is a state-Lipschitz constant on every cylinder and does not depend on time; in particular model 2 satisfies [L1]. [given, L1, L2, L3, algebra]

1.3 Model 3, Lipschitz bound on an annulus: let $0<r\le R$ and let $x,y\in\mathbb R^{3}$ with $r\le\lvert x\rvert,\lvert y\rvert\le R$. Then $$\Bigl\lVert\frac{x}{\lvert x\rvert^{3}}-\frac{y}{\lvert y\rvert^{3}}\Bigr\rVert_{2}\le\frac{\lVert x-y\rVert_{2}}{\lvert x\rvert^{3}}+\lvert y\rvert\,\bigl|\lvert x\rvert^{-3}-\lvert y\rvert^{-3}\bigr|\le\frac{\lVert x-y\rVert_{2}}{r^{3}}+R\cdot\frac{3R^{2}}{r^{6}}\lVert x-y\rVert_{2},$$ where the first inequality inserts $y/\lvert x\rvert^{3}$ and uses the triangle inequality, and the second uses $\bigl|\lvert x\rvert^{-3}-\lvert y\rvert^{-3}\bigr|\le 3R^{2}r^{-6}\bigl|\lvert x\rvert-\lvert y\rvert\bigr|\le 3R^{2}r^{-6}\lVert x-y\rVert_{2}$, the factorization $\lvert v^{3}-u^{3}\rvert=\lvert v-u\rvert\,(v^{2}+vu+u^{2})$ applied to $u=\lvert x\rvert$, $v=\lvert y\rvert$ and the reverse triangle inequality of [L2]; multiplying by $k$ gives the constant $L=k(r^{-3}+3R^{3}r^{-6})$ for $F=-kx/\lvert x\rvert^{3}$ on the annulus (the state variable enters only through $x$). [given, L2, algebra]

2.1 Model 3, continuity and local-Lipschitz on the domain: every nonempty compact subset $K$ of $Q=\mathbb R^{3}\setminus\{0\}$ lies in an annulus $r\le\lvert x\rvert\le R$ with $r=\min_{K}\lvert x\rvert>0$ and $R=\max_K|x|<\infty$ by [L2] and [L4] (the norm is continuous by its reverse triangle inequality, and its attained minimum is positive because $0\notin K$); by step 1.3 the map is Lipschitz with the finite constant above on each such annulus, the empty compact set imposes no inequality, and small closed balls around each point of $Q$ avoid the external source, hence the map is locally Lipschitz, and in particular continuous, on $Q$; the time variable does not occur, so the constant is locally uniform in time. Model 3 therefore satisfies [L1] on its domain. [step 1.3, given, L1, L2, L4, algebra]

3.1 Model 3, no extension to the excluded point: for $x\ne0$ one has $\lVert F(x)\rVert_{2}=k\lvert x\rvert^{-2}$, so for every bound $M>0$ there is $\delta=\sqrt{k/M}>0$ with $\lVert F(x)\rVert_{2}>M$ whenever $0<\lvert x\rvert<\delta$; hence no continuous extension of $F$ to $x=0$ exists ([[def-continuity-real]]: a continuous extension would carry a sequence $x_{n}\to0$ to a convergent image sequence, but the values are unbounded). The external-source singularity exclusion $Q=\mathbb R^{3}\setminus\{0\}$ is therefore not cosmetic: it is what places model 3 inside the force branch at all. [step 2.1, given, L3, algebra]

4.1 Conclusion: models 1-3 satisfy the standing hypotheses of clause (iii) of [[post-cm02-force-superposition]], with the constants computed above; hence the associated first-order fields of [[def-cm02-newtonian-flow]] satisfy the Picard–Lindelöf hypotheses and the local existence, uniqueness and maximal-motion conclusions of [[pthm-cm02-ivp]], as well as the continuation criterion of [[pthm-cm02-continuation]], apply to each of them on its stated domain. [step 1.1, step 1.2, step 2.1, L1] ∎

## Remarks

- **The inverse-square constant is not uniform on the whole domain.** The Lipschitz constant $k(r^{-3}+3R^{3}r^{-6})$ blows up as the annulus approaches the excluded center, and no global constant exists: at $x=a e_1$ and $y=2a e_1$ with $a>0$, the force-difference quotient is $3k/(4a^3)$, unbounded as $a\downarrow0$. The local constants and admissible cylinder sizes therefore depend on distance from the excluded center ([[pthm-cm02-ivp]]).

- **Locality in time is trivial for these models.** All three force maps are independent of $t$, so every constant obtained above works on every time cylinder; time-dependent force maps require the local uniformity statement of clause (iii) explicitly.
