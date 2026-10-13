---
id: cex-cm03-closed-force-field-without-a-global-potential
kind: counterexample
title: "A closed model force field on an annular domain without a global potential energy: force-generating potentials exist only locally"
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
physical_scope: "A counterexample in the force branch using the potential terminology: on a declared open annular configuration domain a smooth time- and velocity-independent force field is closed and yet has no global potential energy, so the model is not a global potential model, no global zero-residual potential presentation exists, and the energy-conservation hypothesis of the balance theorem cannot be replaced by closedness; on every star-shaped subdomain a local potential and a locally conserved mechanical energy do exist. The item asserts no measured value and no global conservation."
sources:
  references:
    - title: "J. Lebl, Basic Analysis II, Section 9.3, Example 9.3.7 (the vortex field on the punctured plane) and J.-B. Campesato, Poincare Lemma, sections 1-2: the example of a closed field with nonzero circulation that is not exact, and the exactness of closed fields on star-shaped domains; the counterexample below recomputes the coordinate-derivative closedness condition, the circulation and the obstruction from the definitions"
      url: "https://www.jirka.org/ra/html/sec_pathind.html"
    - title: "D. Tong, Classical Dynamics (Cambridge lecture notes, January 2015 printing), Section 1.3.2, printed page 8 (PDF page 14): potential forces are defined by a global scalar potential, and the work of a potential force around a closed path is zero"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "K. K. Likharev, Essential Graduate Physics, Part CM: Classical Mechanics (title page last edited September 1, 2026), Section 1.3, Eq. (1.24) and footnote 15, chapter page 7 (PDF page 11): the work of potential forces as the difference of U at the endpoints, hence zero on a closed path, with U defined via the gradient"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
verification:
  precheck: pass
---

## Statement refuted

In the force branch of [[post-cm02-force-superposition]], use the notion of a
potential presentation from [[def-cm03-potential-and-mechanical-energy]]
clause (a), but do not assume that such a presentation exists. Consider the
assertion that **if the model's force map is time- and velocity-independent,
so it has the form $F(t,x,v)=\varphi(x)$ for a $C^{1}$ field
$\varphi:Q\to\mathbb R^{3N}$, and that field is closed in the sense of clause
(d) of [[def-cm03-potential-and-mechanical-energy]], namely
$\partial_{j}\varphi_{k}=\partial_{k}\varphi_{j}$ for all coordinate indices
$j,k\in\{0,\dots,3N-1\}$ on $Q$, then the model is a global potential model; in
particular there is a global potential energy $U$ on the domain with
$F=-\nabla U$, the mechanical energy $K+U$ exists for every motion, and it is
conserved.**

## Facts & Assumptions

**Given:** The force branch, the definitions and criteria for potential presentations and energy in [[def-cm03-potential-and-mechanical-energy]] clauses (a)-(e), and the notation of [[def-cm03-centre-of-mass-and-momenta]]. The counterexample assumes no potential presentation for its force map.

[L1] Framework notions: a motion of the model satisfies $m\ddot x=F(t,x,\dot x)$ ([[def-cm02-newtonian-flow]]); a field $\varphi:Q\to\mathbb R^{3N}$ is closed when $\partial_{k}\varphi_{j}=\partial_{j}\varphi_{k}$ and exact with potential energy $U$ when $\varphi=-\nabla U$; on a star-shaped open domain every closed $C^{1}$ field is exact with the radial potential of the Poincaré lemma ([[def-closed-and-exact-c1-vector-fields]], [[thm-poincare-lemma-for-star-shaped-domains]], [[def-star-shaped-open-subset-of-rn]], [[def-jacobian-matrix-and-gradient]]); dimensions are [[def-cm01-units]].

[L2] Line integrals and potentials ([[def-scalar-and-vector-line-integrals-along-piecewise-c1-paths]]): for a piecewise-$C^{1}$ path $\gamma:[a,b]\to\mathbb R^{n}$ and a continuous field $F$ on a set containing its trace, the vector line integral is the sum of the parameter integrals $\int_{t_{i}}^{t_{i+1}}\langle F(\gamma(t)),v_{i}(t)\rangle\,dt$ over an admissible partition with continuous derivative extensions $v_{i}$. The gradient theorem ([[thm-gradient-theorem-for-line-integrals]]) states that for $C^{1}$ $\phi$ on an open $U$ and piecewise-$C^{1}$ $\gamma$ in $U$, $\int_{\gamma}\nabla\phi\cdot d\mathbf r=\phi(\gamma(b))-\phi(\gamma(a))$. Consequently a field with a potential has zero circulation around every closed path: for $F=-\nabla U$ on an open domain and a closed piecewise-$C^{1}$ $\gamma$, $\int_{\gamma}F\cdot d\mathbf r=-(U(\gamma(b))-U(\gamma(a)))=0$ (the notion of conservative field is [[def-piecewise-c1-path-connected-conservative-and-path-independent]]).

[L3] Calculus: the product and quotient rules ([[thm-algebra-of-derivatives]]), the derivatives $(\sin t)'=\cos t$ and $(\cos t)'=-\sin t$ ([[thm-sine-and-cosine-derivatives]]), the identity $\sin^{2}t+\cos^{2}t=1$ ([[cor-trigonometric-parity-and-pythagorean-identity]]), the chain rule ([[thm-chain-rule]]), the fundamental theorem on $[0,2\pi]$ ([[thm-newton-leibniz-with-interior-derivative]]), a curve with bounded derivative is Lipschitz with that bound ([[cor-vector-valued-ftc-and-lipschitz-bound]] clause 2), the Euclidean inner product ([[def-euclidean-inner-product]]) and the componentwise derivative ([[def-vector-valued-derivative-and-integral]]); the interval $[0,2\pi]$ has nonempty interior ([[def-interval]]).

[L4] Local energy ([[pthm-cm03-energy-balance]] clauses 1-2): for a global potential model with a time-independent potential and no residual forces, the mechanical energy of [[def-cm03-centre-of-mass-and-momenta]] clause (d) is constant along every motion of that model.

## Counterexample

**Proof technique:** direct; define the annular model, verify the standing hypotheses, check its coordinate-derivative closedness condition and compute its circulation, use the gradient theorem to exclude a global potential, and recover the local statement on star-shaped pieces.

1.1 The model. Take $N=1$, a mass $m:=1\,\mathrm{kg}$, time window $\mathbb R$, write $x=(x_{1},x_{2},x_{3})$ in metres, with $x_i=x(i-1)$, $\Phi_i=\Phi(i-1)$ and $\partial_i$ denoting differentiation in native coordinate $i-1$ for $i=1,2,3$, and let the open **annular** configuration domain be $$Q:=\Bigl\{x\in\mathbb R^{3}:\ \tfrac12\,\mathrm m<\sqrt{x_{1}^{2}+x_{2}^{2}}<2\,\mathrm m\Bigr\}.$$ Set $\beta:=1\,\mathrm J$ and define the time- and velocity-independent force map $$F(t,x,v)=\beta\,\Phi(x),\qquad \Phi(x):=\frac{(-x_{2},\,x_{1},\,0)}{x_{1}^{2}+x_{2}^{2}}.$$ Since $\Phi$ has dimension $\ell^{-1}$, $F$ has force dimension $\mu\ell\tau^{-2}$ ([[def-cm01-units]]). This one-label field is the external single-label force of the potential definition's clause (d), and it is smooth on $Q$, which does not meet the axis. [given, L1]

2.1 Standing regularity. Put $r(x):=\sqrt{x_{1}^{2}+x_{2}^{2}}$ and let $A(x_{1},x_{2},x_{3})=(-x_{2},x_{1},0)$; then $\|A\|=1$, $\|Ax\|_{2}=r(x)$ and $\Phi(x)=Ax/r(x)^{2}$, so $\|\Phi(x)\|_{2}=1/r(x)$. Differentiating this formula gives $\|D\Phi(x)\|\le3/r(x)^{2}$. For $x,y\in Q$ with $\|x-y\|_{2}\le\frac14\,\mathrm m$, every point of the segment from $x$ to $y$ has radial coordinate at least $r(x)-\|x-y\|_{2}>\frac14\,\mathrm m$; hence along $g(u)=\Phi(x+u(y-x))$ one has $\|g'(u)\|_{2}\le48\,\mathrm m^{-2}\|x-y\|_{2}$, and [L3] gives $\|\Phi(x)-\Phi(y)\|_{2}\le48\,\mathrm m^{-2}\|x-y\|_{2}$. For $\|x-y\|_{2}>\frac14\,\mathrm m$, $\|\Phi(x)-\Phi(y)\|_{2}\le1/r(x)+1/r(y)<4\,\mathrm m^{-1}\le16\,\mathrm m^{-2}\|x-y\|_{2}$. Thus $F$ is globally Lipschitz in its position argument with constant $48\,\mathrm{N\,m^{-1}}$; because it is independent of $v$, it is locally Lipschitz in the state variable on compact state cylinders in the numerical SI coordinates, as required by the force branch ([[def-locally-lipschitz-in-the-state-variable]]). [step 1.1, L3, algebra]

2.2 Closedness. Write $s:=x_{1}^{2}+x_{2}^{2}$, so that $\Phi=(-x_{2}s^{-1},\,x_{1}s^{-1},\,0)$. The quotient rule [L3] gives $$\partial_{1}\Phi_{2}=\partial_{1}\bigl(x_{1}s^{-1}\bigr)=\frac{s-x_{1}\cdot2x_{1}}{s^{2}}=\frac{x_{2}^{2}-x_{1}^{2}}{s^{2}},\qquad \partial_{2}\Phi_{1}=\partial_{2}\bigl(-x_{2}s^{-1}\bigr)=-\frac{s-x_{2}\cdot2x_{2}}{s^{2}}=\frac{x_{2}^{2}-x_{1}^{2}}{s^{2}},$$ so $\partial_{1}\Phi_{2}=\partial_{2}\Phi_{1}$; the remaining pairs vanish because $\Phi_{3}=0$ and $\Phi_{1},\Phi_{2}$ do not depend on $x_{3}$ (the partial derivatives are those of [[def-jacobian-matrix-and-gradient]]). Multiplying all components by the constant $\beta$ preserves these identities, so $F$ is closed on $Q$. [step 1.1, L1, L3, algebra]

2.3 Circulation. Let $L_{0}:=1\,\mathrm m$ and $\gamma(\theta):=L_{0}(\cos\theta,\sin\theta,0)$ for the dimensionless angle $\theta\in[0,2\pi]$. This is a $C^{1}$ path in $Q$ with $\gamma'(\theta)=L_{0}(-\sin\theta,\cos\theta,0)$. Along it, $F(\gamma(\theta))=(\beta/L_{0})(-\sin\theta,\cos\theta,0)$, so $$\bigl\langle F(\gamma(\theta)),\gamma'(\theta)\bigr\rangle=\beta\bigl(\sin^{2}\theta+\cos^{2}\theta\bigr)=\beta$$ by bilinearity of the inner product and the Pythagorean identity [L3]. By the definition of the vector line integral [L2], the single piece $[0,2\pi]$ with derivative extension $\gamma'$ gives $$\int_{\gamma}F\cdot d\mathbf r=\int_{0}^{2\pi}\bigl\langle F(\gamma(\theta)),\gamma'(\theta)\bigr\rangle\,d\theta=\int_{0}^{2\pi}\beta\,d\theta=2\pi\beta=2\pi\,\mathrm J\neq0,$$ the middle integral by [L3]. [step 1.1, L1, L2, L3, algebra]

3.1 No global potential. Suppose there were a $C^{2}$ function $U$ on $Q$ with $F=-\nabla U$. The line integral of [L2] is linear in the field by its definition as a sum of parameter integrals, so $\int_{\gamma}F\cdot d\mathbf r=-\int_{\gamma}\nabla U\cdot d\mathbf r$; the gradient theorem of [L2] applied to the $C^{1}$ function $U$ gives $\int_{\gamma}\nabla U\cdot d\mathbf r=U(\gamma(2\pi))-U(\gamma(0))=U(L_{0},0,0)-U(L_{0},0,0)=0$ because $\gamma$ is closed. Hence $\int_{\gamma}F\cdot d\mathbf r=0$, contradicting the value $2\pi\beta\neq0$ of step 2.3. Therefore no such global potential exists, the model is not a global potential model in the sense of clause (a) of [[def-cm03-potential-and-mechanical-energy]], and no global potential presentation with zero residual force is available. A global presentation with $U=0$ and $d=F$ is nevertheless admitted by the same definition and has mechanical energy $E=K$; it asserts no conservation. [step 2.3, L1, L2, algebra]

4.1 Local potentials and local energy. Let $p\in Q$ and let $$\varepsilon:=\frac12\min\bigl\{r(p)-\frac12\,\mathrm m,\ 2\,\mathrm m-r(p)\bigr\}>0,\qquad B:=\{z:\lvert z-p\rvert<\varepsilon\}$$; here $\varepsilon$ has units of length. For $z\in B$ one has $r(z)<r(p)+\varepsilon<2\,\mathrm m$ and $r(z)>r(p)-\varepsilon>\frac12\,\mathrm m$, so $B\subseteq Q$. $B$ is open and star-shaped with respect to its centre ([[def-star-shaped-open-subset-of-rn]]). Since $-F|_{B}$ is also a closed $C^{1}$ field, the Poincaré lemma of [L1] applied to $-F|_{B}$ gives a $C^{2}$ function $U_{B}:B\to\mathbb R$ with $\nabla U_{B}=-F|_{B}$, that is, $F|_{B}=-\nabla U_{B}$. The restriction of the model's force map to the configuration domain $B$ is then a global potential model with a time-independent potential and no residual forces, so clause 2 of [[pthm-cm03-energy-balance]] gives that $K+U_{B}$ is constant along every motion of the restricted model, hence along every subinterval of a motion of the annular model on which the position remains in $B$. [step 3.1, L1, L4, algebra]

5.1 Conclusion. The force field of the model is closed and not exact on $Q$; the refuted statement is false. The time-independent zero-residual presentations constructed in step 4.1 provide conserved mechanical energy on those star-shaped subdomains. Globally no such presentation exists by step 3.1, so that conservation clause cannot be invoked for it; the global presentation $U=0,d=F$ remains available with $E=K$. [step 2.3, step 3.1, step 4.1, L1, L2, L4] ∎

## Remarks

- **What is refuted, and what is not.** Only the implication "closed $\Rightarrow$ global potential model" is refuted, and with it the substitution of closedness for the potential hypothesis of the energy-conservation statement. The exactness of closed fields on star-shaped domains (step 4.1) and the energy balance of [[pthm-cm03-energy-balance]] are unaffected; the obstruction is the multiply connected annular domain, not the smoothness of the field.

- **The circulation is a field property.** The line integral $2\pi\beta$ around the circle is computed from the declared field and path by the definition of the vector line integral; no motion of the model is exhibited or needed. The values $\frac12$, $2$ and $1\,\mathrm J$ are declared model data, not measurements.
