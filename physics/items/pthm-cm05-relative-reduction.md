---
id: pthm-cm05-relative-reduction
kind: physics-theorem
title: "Two-body reduction of a static central pair-potential model: the relative coordinate is a central-force trajectory for the reduced mass, the centre of mass moves uniformly, and the reconstruction is a bijection"
status: published
origin: session
domain: physics
dependency_level: 13
deps: [post-cm02-force-superposition, post-cm02-interactions, def-cm02-newtonian-flow, post-cm01-worldlines, def-cm01-configuration, def-cm01-units, def-cm03-centre-of-mass-and-momenta, pthm-cm03-momentum-balance, def-cm-central-force-trajectory, lem-cm05-radial-potential-gradient, lem-cm-derivative-of-pairings-of-curves, cor-vector-valued-ftc-and-lipschitz-bound, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-ck-euclidean-maps-and-diffeomorphisms, def-interval, thm-chain-rule-for-total-derivatives]
dependency_roles:
  post-cm02-force-superposition: physical-assumption
  post-cm02-interactions: physical-assumption
  def-cm02-newtonian-flow: formulation-prerequisite
  post-cm01-worldlines: formulation-prerequisite
  def-cm01-configuration: formulation-prerequisite
  def-cm01-units: formulation-prerequisite
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  pthm-cm03-momentum-balance: physical-result
  def-cm-central-force-trajectory: mathematical-premise
  lem-cm05-radial-potential-gradient: mathematical-premise
  lem-cm-derivative-of-pairings-of-curves: mathematical-premise
  cor-vector-valued-ftc-and-lipschitz-bound: mathematical-premise
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  def-interval: mathematical-premise
  thm-chain-rule-for-total-derivatives: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-altered
proof_strategy: direct
physical_scope: "The conditional reduction of a two-label model whose force map is presented by a static central pair potential: along every motion the evaluated pair forces are central and antisymmetric, the total momentum and the centre-of-mass velocity are constant, the relative coordinate satisfies the one-body central-force equation with the reduced mass, and the motion is reconstructed from the centre-of-mass motion and the relative trajectory. The result is a deduction inside the adopted force and interaction branches; it uses no measured value, assumes no external forces, excludes collisions, and asserts no conservation law beyond the vanishing of the total external force that the presentation supplies."
sources:
  references:
    - title: "David Tong, Classical Dynamics (University of Cambridge), Section 2.5.4, printed pp. 31-33 (PDF pp. 37-39), Eqs. (2.82)-(2.84): the Lagrangian split into centre-of-mass and separation pieces with reduced mass $\\mu=m_1m_2/(m_1+m_2)$, and the conserved $J=\\mu r^2\\dot\\phi$"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), Section 3.4, Eqs. (3.30)-(3.37), chapter pages 7-9 (PDF pages 40-42): the change to the relative vector and centre of mass, the reduced-mass reduction to a single particle in the central potential, and the conservation of the total momentum"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "Iain Stewart, Advanced Classical Mechanics (MIT 8.09/8.309 Fall 2014 course text), Section 4.5, printed page 79 (PDF page 82), Eq. (4.148): the Kepler problem of two masses in a central potential with the centre of mass at the origin and the reduced mass"
      url: "https://ocw.mit.edu/courses/8-09-classical-mechanics-iii-fall-2014/d9bac33f6c60b304dc0398e99b327102_MIT8_09F14_full.pdf"
---

## Statement

Adopt the force model of [[post-cm02-force-superposition]] with $N=2$
labels, masses $m_1,m_2>0$ ([[post-cm01-worldlines]] clause (v)), a time
window $I_0$, and the collision-excluded configuration domain
$$Q:=\{\,x=(x_1,x_2)\in(\mathbb R^3)^2:\lvert x_1-x_2\rvert\in J_0\,\}$$
for an open interval $J_0\subseteq(0,\infty)$
([[def-cm01-configuration]]). Suppose the model presents its force map
through the time-independent potential
$$U(x_1,x_2):=u(\lvert x_1-x_2\rvert),$$
where $u:J_0\to\mathbb R$ is of class $C^2$
([[def-ck-euclidean-maps-and-diffeomorphisms]]), so that
$F_i(t,x,v)=-\nabla_{x_i}U(x)$ on the state domain ([[post-cm02-interactions]],
clauses (iii) and (iv), [[lem-cm05-radial-potential-gradient]]). Let
$x:J\to Q$ be a **motion** of the model on an interval $J$ with nonempty
interior ([[def-cm02-newtonian-flow]]) and write
$$M:=m_1+m_2,\quad \mu:=\frac{m_1m_2}{M},\quad X:=\frac{m_1x_1+m_2x_2}{M},\quad V:=X',\quad P:=m_1x_1'+m_2x_2',\quad r:=x_1-x_2,$$
with $\lvert\cdot\rvert=\lVert\cdot\rVert_2$ the Euclidean norm
([[def-euclidean-inner-product]]) and dimensions as in [[def-cm01-units]]
($[M]=[\mu]=\mu$, $[X]=[r]=\ell$, $[P]=\mu\ell\tau^{-1}$). Then:

1. **(Pair forces.)** On $J$ the evaluated forces are
   $$F_1\bigl(t,x(t),x'(t)\bigr)=-\frac{u'(\lvert r\rvert)}{\lvert r\rvert}\,r,\qquad F_2\bigl(t,x(t),x'(t)\bigr)=+\frac{u'(\lvert r\rvert)}{\lvert r\rvert}\,r;$$
   thus the force map admits the external-plus-pair decomposition of
   [[post-cm02-interactions]] clause (i) with
   $F_i^{\mathrm{ext}}\equiv0$ and the single pair force
   $F_{12}=-u'(\lvert r\rvert)r/\lvert r\rvert=-F_{21}$, which is central
   and antisymmetric in the sense of clause (ii). This identity does not
   assert that a separate decomposition was declared as model data.
2. **(Centre of mass.)** $P$ is constant on $J$ and $X$ is affine: for all
   $t,t_0\in J$, $X(t)=X(t_0)+(t-t_0)V$ with the constant
   $V=X'=M^{-1}P$.
3. **(Relative motion.)** $r$ is of class $C^2$ on $J$, satisfies
   $$\mu\,r''(t)=-\frac{u'(\lvert r(t)\rvert)}{\lvert r(t)\rvert}\,r(t)\qquad(t\in J),$$
   and is therefore a **central-force trajectory for $(\mu,u)$** in the
   sense of [[def-cm-central-force-trajectory]]; its angular momentum vector
   $j=\mu\,r\times r'$ and energy $E=\tfrac12\mu\lVert r'\rVert_2^2+
   u(\lvert r\rvert)$ are the attached objects of that definition.
4. **(Reconstruction and bijection.)** The identities
   $x_1=X+\frac{m_2}{M}r$ and $x_2=X-\frac{m_1}{M}r$ hold on $J$.
   Conversely, if $X^{\circ}:J\to\mathbb R^3$ is affine with
   $(X^{\circ})''=0$ and $r^{\circ}:J\to\mathbb R^3$ is a $C^2$ curve with
   $\lvert r^{\circ}(t)\rvert\in J_0$ and
   $\mu(r^{\circ})''=-u'(\lvert r^{\circ}\rvert)r^{\circ}/\lvert r^{\circ}\rvert$
   on $J$, then
   $$x_1^{\circ}:=X^{\circ}+\frac{m_2}{M}r^{\circ},\qquad x_2^{\circ}:=X^{\circ}-\frac{m_1}{M}r^{\circ}$$
   define a motion $x^{\circ}:J\to Q$ of the model whose centre of mass is
   $X^{\circ}$ and whose relative coordinate is $r^{\circ}$. Consequently
   the assignment $x\mapsto(X,r)$ is a bijection from the motions of the
   model on $J$ onto the pairs (affine curve $X^{\circ}$ with
   $(X^{\circ})''=0$\!, central-force trajectory $r^{\circ}$ for $(\mu,u)$
   with values in $J_0$) on $J$.

## Facts & Assumptions

**Given:** The two-label model with the $C^2$ static central pair potential $u$ on $J_0$, the notation $M,\mu,X,V,P,r$ of the statement, and the motion $x:J\to Q$ with coordinate velocities $w_i=x_i'$.

[L1] Model notions ([[post-cm02-force-superposition]] clauses (i)-(iv), [[post-cm02-interactions]] clauses (i)-(iv), [[def-cm02-newtonian-flow]], [[def-cm03-centre-of-mass-and-momenta]]): the motion satisfies $m_ix_i''(t)=F_i(t,x(t),w(t))$ for $t\in J$; the potential presentation is the identity $F_i(t,x,v)=-\nabla_{x_i}U(x)$ with $U$ of class $C^2$ on the open $Q$; and the quantities $M$, $\mu$, $X$, $V$, $P$, $r$ are those of the displayed definitions.

[L2] Radial gradient ([[lem-cm05-radial-potential-gradient]], clause 3): for the $C^2$ function $u$ on the open interval $J_0\subseteq(0,\infty)$ and $G(y):=u(\lvert y\rvert)$ on $A=\{y:\lvert y\rvert\in J_0\}$, the map $G$ is $C^2$ with $DG(y)\ell=u'(\lvert y\rvert)\langle y/\lvert y\rvert,\ell\rangle$, that is $\nabla G(y)=u'(\lvert y\rvert)y/\lvert y\rvert$.

[L3] Chain rule ([[thm-chain-rule-for-total-derivatives]]): composable totally differentiable maps compose with $D(G\circ S)(x)=DG(S(x))\circ DS(x)$; the affine map $S(x_1,x_2):=x_1-x_2$ has $DS(x)(h_1,h_2)=h_1-h_2$, since $S(x+h)-S(x)=h_1-h_2$ is exactly linear in $h$. The Euclidean inner product is bilinear ([[def-euclidean-inner-product]]).

[L5] Curve calculus ([[lem-cm-derivative-of-pairings-of-curves]] clauses 1 and 4, [[def-vector-valued-derivative-and-integral]]): sums and scalar multiples of differentiable curves are differentiable with the expected derivatives, so differences and second derivatives of $C^2$ curves are computed componentwise; and $t\mapsto\lVert y(t)\rVert_2^2$ differentiates by the product rule.

[L6] Vector FTC ([[cor-vector-valued-ftc-and-lipschitz-bound]]): if $f:[a,b]\to\mathbb R^3$ is differentiable with integrable derivative, then $\int_a^bf'=f(b)-f(a)$; the interval $J$ has nonempty interior, hence at least two points, and the open annulus $A\subseteq\mathbb R^3$ and the configuration domain $Q$ are those of the hypotheses ([[def-interval]], [[def-cm01-configuration]]).

## Proof

**Proof technique:** direct.

1.1 Setup: $x$ is a $C^2$ curve family with values in the open $Q$, $\lvert r(t)\rvert\in J_0$ for every $t$, $r$ is $C^2$ by [L5], and $M>0$, $\mu>0$, and the curves $X,V,P$ are defined; the evaluated gradient $\nabla_{x_i}U(x(t))$ is defined because $U$ is $C^1$ on the open $Q$ and $x(t)\in Q$. [given, L1, L5]

2.1 Pair forces: put $S(x_1,x_2):=x_1-x_2$ and $G(y):=u(\lvert y\rvert)$ on $A$, so that $U=G\circ S$. By [L2] and [L3], $DU(x)(h_1,h_2)=DG(r)(h_1-h_2)=u'(\lvert r\rvert)\langle r/\lvert r\rvert,h_1-h_2\rangle=\langle u'(\lvert r\rvert)r/\lvert r\rvert,h_1\rangle-\langle u'(\lvert r\rvert)r/\lvert r\rvert,h_2\rangle$; reading off the partial gradients gives $\nabla_{x_1}U(x)=u'(\lvert r\rvert)r/\lvert r\rvert$ and $\nabla_{x_2}U(x)=-u'(\lvert r\rvert)r/\lvert r\rvert$. The equation of motion [L1] therefore gives $F_1(t,x(t),w(t))=m_1x_1''(t)=-u'(\lvert r\rvert)r/\lvert r\rvert$ and $F_2(t,x(t),w(t))=+u'(\lvert r\rvert)r/\lvert r\rvert$, and the presentation with $F_1^{\mathrm{ext}}=F_2^{\mathrm{ext}}=0$ and $F_{12}:=-u'(\lvert r\rvert)r/\lvert r\rvert$, $F_{21}:=-F_{12}$ is an identity for the force map; $F_{21}=-F_{12}$ is antisymmetry and both pair forces are parallel to $r=x_1-x_2$, which is centrality. This is clause 1. [step 1.1, L1, L2, L3, algebra]

3.1 Centre of mass: by [L5] and step 2.1, $P'=m_1x_1''+m_2x_2''=F_1+F_2=0$ on $J$. For $t_0<t$ in $J$, [L6] applied to the $C^1$ curve $P$ on $[t_0,t]$ gives $P(t)-P(t_0)=\int_{t_0}^tP'=0$; reversing endpoints covers $t<t_0$, so $P$ is constant. Differentiating the definition of $X$ using [L5] gives $X'=M^{-1}P=:V$, hence $V$ is constant and $MX''=0$. Applying [L6] to $X$ gives $X(t)-X(t_0)=\int_{t_0}^{t}V=(t-t_0)V$ for $t_0<t$, and the reversed formula for $t<t_0$. This proves clause 2 directly from the potential force map, without requiring a separately declared external-plus-pair presentation. [step 2.1, L1, L5, L6, algebra]

3.2 Relative equation: by [L5], $r=x_1-x_2$ is $C^2$ with $r''=x_1''-x_2''$, so step 2.1 and $M=m_1+m_2$ give $\mu r''=-\mu\bigl(\frac1{m_1}+\frac1{m_2}\bigr)\frac{u'(\lvert r\rvert)}{\lvert r\rvert}r=-\frac{u'(\lvert r\rvert)}{\lvert r\rvert}r$, because $\mu\bigl(\frac1{m_1}+\frac1{m_2}\bigr)=\frac{m_1m_2}{M}\cdot\frac{M}{m_1m_2}=1$. Since $r$ is $C^2$ on the interval $J$ with nonempty interior and $\lvert r(t)\rvert\in J_0$ for every $t\in J$, all hypotheses of [[def-cm-central-force-trajectory]] hold with $(\mu,U)$ replaced by $(\mu,u)$ and the equation just displayed: $r$ is a central-force trajectory for $(\mu,u)$, and $j=\mu r\times r'$, $E=\frac12\mu\lVert r'\rVert_2^2+u(\lvert r\rvert)$ are its attached objects. This is clause 3. [step 1.1, step 2.1, L1, L5, algebra]

4.1 Reconstruction: the linear system $X=M^{-1}(m_1x_1+m_2x_2)$, $r=x_1-x_2$ has the unique solution $x_1=X+\frac{m_2}{M}r$, $x_2=X-\frac{m_1}{M}r$ on $J$, which is the first assertion. Conversely, let $X^{\circ}$ be affine on $J$ with $(X^{\circ})''=0$ and let $r^{\circ}$ be a $C^2$ curve with $\lvert r^{\circ}\rvert\in J_0$ and $\mu(r^{\circ})''=-u'(\lvert r^{\circ}\rvert)r^{\circ}/\lvert r^{\circ}\rvert$. Define $x_1^{\circ},x_2^{\circ}$ by the displayed formulas; then $x^{\circ}$ has values in $Q$ because $\lvert x_1^{\circ}-x_2^{\circ}\rvert=\lvert r^{\circ}\rvert\in J_0$, is $C^2$, and $M^{-1}(m_1x_1^{\circ}+m_2x_2^{\circ})=X^{\circ}$, $x_1^{\circ}-x_2^{\circ}=r^{\circ}$. Moreover $m_1(x_1^{\circ})''=m_1\frac{m_2}{M}(r^{\circ})''=-\frac{u'(\lvert r^{\circ}\rvert)}{\lvert r^{\circ}\rvert}r^{\circ}=F_1$ and $m_2(x_2^{\circ})''=-m_2\frac{m_1}{M}(r^{\circ})''=+\frac{u'(\lvert r^{\circ}\rvert)}{\lvert r^{\circ}\rvert}r^{\circ}=F_2$ by step 2.1, so $x^{\circ}$ is a motion with centre of mass $X^{\circ}$ and relative coordinate $r^{\circ}$. The two constructions are mutually inverse by the uniqueness in the first assertion, so $x\mapsto(X,r)$ is a bijection onto the stated pairs. This is clause 4 and completes the proof. [step 1.1, step 2.1, step 3.2, L1, L5, algebra] ∎

## Remarks

- **What is and is not assumed.** The reduction uses the potential presentation of the model, hence the absence of external forces; the proof sums the two equations directly. If the model also declares the zero-external-force pair decomposition, [[pthm-cm03-momentum-balance]] gives the same conclusion, but its declaration hypothesis is not inferred from the force identity. The companion counterexample shows that centrality of the pair forces alone, without the no-external-force hypothesis, does not yield the reduction.

- **Scope of the reconstruction.** The bijection is stated on a fixed interval $J$ with nonempty interior; it does not assert global existence of either side, and the collision set $x_1=x_2$ is excluded by the configuration domain, so $\lvert r\rvert>0$ throughout.

- **No empirical content.** The masses and the potential are model data; the result is a conditional deduction in the adopted force and interaction branches, and the reduced mass is the inertial combination $\mu=m_1m_2/(m_1+m_2)$, distinct from any gravitational coupling parameter.
