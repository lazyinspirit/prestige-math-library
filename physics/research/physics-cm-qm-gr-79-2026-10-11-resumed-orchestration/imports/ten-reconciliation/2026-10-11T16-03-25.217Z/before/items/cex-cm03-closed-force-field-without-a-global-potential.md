---
id: cex-cm03-closed-force-field-without-a-global-potential
kind: counterexample
title: "A closed (curl-free) model force field on an annular domain with no global potential energy: mechanical energy is available only locally"
status: draft
origin: session
domain: physics
dependency_level: 13
deps: [def-cm03-potential-and-mechanical-energy, def-cm03-centre-of-mass-and-momenta, pthm-cm03-energy-balance, post-cm02-force-superposition, def-cm02-newtonian-flow, def-cm01-units, def-locally-lipschitz-in-the-state-variable, def-scalar-and-vector-line-integrals-along-piecewise-c1-paths, thm-gradient-theorem-for-line-integrals, def-piecewise-c1-path-connected-conservative-and-path-independent, def-closed-and-exact-c1-vector-fields, thm-poincare-lemma-for-star-shaped-domains, def-star-shaped-open-subset-of-rn, def-jacobian-matrix-and-gradient, thm-algebra-of-derivatives, thm-sine-and-cosine-derivatives, cor-trigonometric-parity-and-pythagorean-identity, thm-chain-rule, cor-vector-valued-ftc-and-lipschitz-bound, thm-newton-leibniz-with-interior-derivative, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-interval]
dependency_roles:
  def-cm03-potential-and-mechanical-energy: formulation-prerequisite
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  pthm-cm03-energy-balance: physical-result
  post-cm02-force-superposition: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-locally-lipschitz-in-the-state-variable: mathematical-premise
  def-scalar-and-vector-line-integrals-along-piecewise-c1-paths: mathematical-premise
  thm-gradient-theorem-for-line-integrals: mathematical-premise
  def-piecewise-c1-path-connected-conservative-and-path-independent: mathematical-premise
  def-closed-and-exact-c1-vector-fields: mathematical-premise
  thm-poincare-lemma-for-star-shaped-domains: mathematical-premise
  def-star-shaped-open-subset-of-rn: mathematical-premise
  def-jacobian-matrix-and-gradient: mathematical-premise
  thm-algebra-of-derivatives: mathematical-premise
  thm-sine-and-cosine-derivatives: mathematical-premise
  cor-trigonometric-parity-and-pythagorean-identity: mathematical-premise
  thm-chain-rule: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  thm-newton-leibniz-with-interior-derivative: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "A counterexample inside the potential branch: on a declared open annular configuration domain a smooth time- and velocity-independent force field is closed (curl-free) and yet has no global potential energy, so the model is not a global potential model, no global mechanical energy of the framework's form exists, and the energy-conservation hypothesis of the balance theorem cannot be replaced by closedness; on every star-shaped subdomain a local potential and a locally conserved mechanical energy do exist. The item asserts no measured value and no global conservation."
sources:
  references:
    - title: "J. Lebl, Basic Analysis II, Section 9.3, Example 9.3.7 (the vortex field on the punctured plane) and J.-B. Campesato, Poincare Lemma, sections 1-2: the example of a closed field with nonzero circulation that is not exact, and the exactness of closed fields on star-shaped domains; the counterexample below recomputes the curl, the circulation and the obstruction from the definitions"
      url: "https://www.jirka.org/ra/html/sec_pathind.html"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.3.2, printed page 8 (PDF page 14): potential forces are defined by a global scalar potential, and the work of a potential force around a closed path is zero"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.3, Eq. (1.24) and footnote 15, chapter page 7 (PDF page 11): the work of potential forces as the difference of U at the endpoints, hence zero on a closed path, with U defined via the gradient"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement refuted

In the force branch of [[post-cm02-force-superposition]] with the potential
presentation of [[def-cm03-potential-and-mechanical-energy]] clause (a):
**if a model's force field is time- and velocity-independent and closed
($\operatorname{curl} F=0$, equivalently $\partial_{j}F_{k}=\partial_{k}F_{j}$)
on its configuration domain, then the model is a global potential model; in
particular there is a global potential energy $U$ on the domain with
$F=-\nabla U$, the mechanical energy $K+U$ exists for every motion, and it is
conserved.**

## Facts & Assumptions

**Given:** The force branch, the potential presentation of
[[def-cm03-potential-and-mechanical-energy]] clauses (a)-(e), and the
notation of [[def-cm03-centre-of-mass-and-momenta]].

[L1] Framework notions: a motion of the model satisfies
$m\ddot x=F(t,x,\dot x)$ ([[def-cm02-newtonian-flow]]); a field
$\varphi:Q\to\mathbb R^{3N}$ is closed when
$\partial_{k}\varphi_{j}=\partial_{j}\varphi_{k}$ and exact with potential
energy $U$ when $\varphi=-\nabla U$; on a star-shaped open domain every closed
$C^{1}$ field is exact with the radial potential of the Poincaré lemma
([[def-closed-and-exact-c1-vector-fields]],
[[thm-poincare-lemma-for-star-shaped-domains]],
[[def-star-shaped-open-subset-of-rn]],
[[def-jacobian-matrix-and-gradient]]); dimensions are [[def-cm01-units]].

[L2] Line integrals and potentials
([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]): for a
piecewise-$C^{1}$ path $\gamma:[a,b]\to\mathbb R^{n}$ and a continuous field
$F$ on a set containing its trace, the vector line integral is the sum of the
parameter integrals $\int_{t_{i}}^{t_{i+1}}\langle F(\gamma(t)),v_{i}(t)\rangle\,dt$
over an admissible partition with continuous derivative extensions $v_{i}$.
The gradient theorem ([[thm-gradient-theorem-for-line-integrals]]) states that
for $C^{1}$ $\phi$ on an open $U$ and piecewise-$C^{1}$ $\gamma$ in $U$,
$\int_{\gamma}\nabla\phi\cdot d\mathbf r=\phi(\gamma(b))-\phi(\gamma(a))$.
Consequently a field with a potential has zero circulation around every
closed path: for $F=-\nabla U$ on an open domain and a closed piecewise-$C^{1}$
$\gamma$, $\int_{\gamma}F\cdot d\mathbf r=-(U(\gamma(b))-U(\gamma(a)))=0$
(the notion of conservative field is [[def-piecewise-c1-path-connected-conservative-and-path-independent]]).

[L3] Calculus: the product and quotient rules ([[thm-algebra-of-derivatives]]),
the derivatives $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$
([[thm-sine-and-cosine-derivatives]]), the identity
$\sin^{2}t+\cos^{2}t=1$
([[cor-trigonometric-parity-and-pythagorean-identity]]), the chain rule
([[thm-chain-rule]]), the fundamental theorem on $[0,2\pi]$
([[thm-newton-leibniz-with-interior-derivative]]), a curve with bounded
derivative is Lipschitz with that bound
([[cor-vector-valued-ftc-and-lipschitz-bound]] clause 2), the Euclidean inner
product ([[def-euclidean-inner-product]]) and the componentwise derivative
([[def-vector-valued-derivative-and-integral]]); the interval $[0,2\pi]$ has
nonempty interior ([[def-interval]]).

[L4] Local energy ([[pthm-cm03-energy-balance]] clauses 1-2): for a global
potential model with a time-independent potential and no residual forces, the
mechanical energy of [[def-cm03-centre-of-mass-and-momenta]] clause (d) is
constant along every motion of that model.

## Counterexample

**Proof technique:** direct; define the annular model, verify the standing
hypotheses, compute its curl and its circulation from the definitions, use the
gradient theorem to exclude a global potential, and recover the local
statement on star-shaped pieces.

1.1 The model. Take $N=1$, a mass $m:=1\,\mathrm{kg}$, time window $\mathbb R$, the open **annular** configuration domain $$Q:=\Bigl\{x\in\mathbb R^{3}:\ \tfrac12\,\mathrm m<\sqrt{x_{1}^{2}+x_{2}^{2}}<2\,\mathrm m\Bigr\},$$ and the declared parameter $\beta:=1\,\mathrm J$; the force map is the time- and velocity-independent external contribution $$F(t,x,v)=\beta\,\Phi(x),\qquad \Phi(x):=\frac{(-x_{2},\,x_{1},\,0)}{x_{1}^{2}+x_{2}^{2}},$$ of force dimension $\mu\ell\tau^{-2}$ ([[def-cm01-units]]). $Q$ is open and does not meet the axis, and $F$ is smooth on $Q$. [given, L1]

2.1 Standing regularity. On $Q$ one has the operator-norm bound $\lVert D\Phi(x)\rVert\le3/r(x)^{2}$ with $r(x):=\sqrt{x_{1}^{2}+x_{2}^{2}}$ (from $\Phi=A x/r^{2}$ with $\lVert A\rVert=1$, the product rule and $\lvert A x\rvert=r$, all in metres). For $x,y\in Q$ with $\lvert x-y\rvert\le\frac14$, the segment between them stays in $\{r\ge\frac14\}$, so the curve $g(t):=\Phi(x+t(y-x))$ has $\lVert g'(t)\rVert_{2}=\lVert D\Phi(\cdot)(y-x)\rVert_{2}\le48\lvert x-y\rvert$, and [L3] gives $\lvert\Phi(x)-\Phi(y)\rvert\le48\lvert x-y\rvert$. For $\lvert x-y\rvert>\frac14$, the bound $\lvert\Phi(x)-\Phi(y)\rvert\le1/r(x)^{2}+1/r(y)^{2}\le8$ gives $\lvert\Phi(x)-\Phi(y)\rvert\le32\lvert x-y\rvert$. Hence $\lvert F(x)-F(y)\rvert_{2}\le48\lvert x-y\rvert_{2}$ for all $x,y\in Q$: the force map is state-Lipschitz with the global constant $48$ and is therefore a force map of the branch ([[def-locally-lipschitz-in-the-state-variable]]). [step 1.1, L3, algebra]

2.2 Closedness. Write $s:=x_{1}^{2}+x_{2}^{2}$, so that $\Phi=(-x_{2}s^{-1},\,x_{1}s^{-1},\,0)$. The quotient rule [L3] gives $$\partial_{1}\Phi_{2}=\partial_{1}\bigl(x_{1}s^{-1}\bigr)=\frac{s-x_{1}\cdot2x_{1}}{s^{2}}=\frac{x_{2}^{2}-x_{1}^{2}}{s^{2}},\qquad \partial_{2}\Phi_{1}=\partial_{2}\bigl(-x_{2}s^{-1}\bigr)=-\frac{s-x_{2}\cdot2x_{2}}{s^{2}}=\frac{x_{2}^{2}-x_{1}^{2}}{s^{2}},$$ so $\partial_{1}\Phi_{2}=\partial_{2}\Phi_{1}$; the remaining pairs vanish because $\Phi_{3}=0$ and $\Phi_{1},\Phi_{2}$ do not depend on $x_{3}$ (the partial derivatives are those of [[def-jacobian-matrix-and-gradient]]). Multiplying all components by the constant $\beta$ preserves these identities, so $F$ is closed on $Q$. [step 1.1, L1, L3, algebra]

2.3 Circulation. Let $\gamma(t):=(\cos t,\sin t,0)$ for $t\in[0,2\pi]$; it is $C^{1}$ with $\gamma'(t)=(-\sin t,\cos t,0)$ and lies in $Q$ because $\frac12<1<2$. Here $F(\gamma(t))=\beta\,(-\sin t,\cos t,0)$ and $$\bigl\langle F(\gamma(t)),\gamma'(t)\bigr\rangle=\beta\bigl(\sin^{2}t+\cos^{2}t\bigr)=\beta$$ by bilinearity of the inner product and the Pythagorean identity [L3]. By the definition of the vector line integral [L2], the single piece $[0,2\pi]$ with derivative extension $\gamma'$ gives $$\int_{\gamma}F\cdot d\mathbf r=\int_{0}^{2\pi}\bigl\langle F(\gamma(t)),\gamma'(t)\bigr\rangle\,dt=\int_{0}^{2\pi}\beta\,dt=2\pi\beta=2\pi\,\mathrm J\neq0,$$ the middle integral by [L3]. [step 1.1, L1, L2, L3, algebra]

3.1 No global potential. Suppose there were a $C^{2}$ function $U$ on $Q$ with $F=-\nabla U$. The line integral of [L2] is linear in the field by its definition as a sum of parameter integrals, so $\int_{\gamma}F\cdot d\mathbf r=-\int_{\gamma}\nabla U\cdot d\mathbf r$; the gradient theorem of [L2] applied to the $C^{1}$ function $U$ gives $\int_{\gamma}\nabla U\cdot d\mathbf r=U(\gamma(2\pi))-U(\gamma(0))=U(1,0,0)-U(1,0,0)=0$ because $\gamma$ is closed. Hence $\int_{\gamma}F\cdot d\mathbf r=0$, contradicting the value $2\pi\beta\neq0$ of step 2.3. Therefore no such global potential exists, the model is not a global potential model in the sense of clause (a) of [[def-cm03-potential-and-mechanical-energy]], and no global mechanical energy $K+U$ of the framework's form is available for it. [step 2.3, L1, L2, algebra]

4.1 Local potentials and local energy. Let $p\in Q$ and let $$\varepsilon:=\frac12\min\bigl\{r(p)-\tfrac12,\ 2-r(p)\bigr\}>0,\qquad B:=\{z:\lvert z-p\rvert<\varepsilon\}$$ (in metres); for $z\in B$ one has $r(z)<r(p)+\varepsilon<2$ and $r(z)>r(p)-\varepsilon>\frac12$, so $B\subseteq Q$. $B$ is open and star-shaped with respect to its centre ([[def-star-shaped-open-subset-of-rn]]), so the Poincaré lemma of [L1] provides a $C^{2}$ potential $U_{B}:B\to\mathbb R$ with $F|_{B}=-\nabla U_{B}$. The restriction of the model's force map to the configuration domain $B$ is then a global potential model with a time-independent potential and no residual forces, so clause 2 of [[pthm-cm03-energy-balance]] gives that $K+U_{B}$ is constant along every motion of the restricted model, hence along every subinterval of a motion of the annular model on which the position remains in $B$. [step 3.1, L1, L4, algebra]

5.1 Conclusion. The force field of the model is closed and not exact on $Q$; the refuted statement is false. Mechanical energy is available and conserved only locally, on the star-shaped subdomains of step 4.1; globally the model falls outside the hypothesis of [[pthm-cm03-energy-balance]] clause 2, and no global conserved quantity of the form $K+U$ exists for it. [step 2.3, step 3.1, step 4.1, L1, L2, L4] ∎

## Remarks

- **What is refuted, and what is not.** Only the implication "closed $\Rightarrow$ global potential model" is refuted, and with it the substitution of closedness for the potential hypothesis of the energy-conservation statement. The exactness of closed fields on star-shaped domains (step 4.1) and the energy balance of [[pthm-cm03-energy-balance]] are unaffected; the obstruction is the multiply connected annular domain, not the smoothness of the field.

- **The circulation is a field property.** The line integral $2\pi\beta$ around the circle is computed from the declared field and path by the definition of the vector line integral; no motion of the model is exhibited or needed. The values $\frac12$, $2$ and $1\,\mathrm J$ are declared model data, not measurements.
