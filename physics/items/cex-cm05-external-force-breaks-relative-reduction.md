---
id: cex-cm05-external-force-breaks-relative-reduction
kind: counterexample
title: "External forces break the two-body reduction: a two-label model with a static central pair potential and external forces $\\pm\\gamma$ has $\\mu r''=\\gamma\\ne0$, although its total external force vanishes"
status: published
origin: session
domain: physics
dependency_level: 15
deps: [post-cm02-force-superposition, post-cm02-interactions, post-cm05-central-model, def-cm02-newtonian-flow, def-cm03-centre-of-mass-and-momenta, pthm-cm03-momentum-balance, pthm-cm05-relative-reduction, def-cm-central-force-trajectory, def-cm01-units, def-euclidean-inner-product, def-vector-valued-derivative-and-integral, def-ck-euclidean-maps-and-diffeomorphisms, lem-cm-derivative-of-pairings-of-curves, def-interval]
dependency_roles:
  post-cm02-force-superposition: formulation-prerequisite
  post-cm02-interactions: formulation-prerequisite
  post-cm05-central-model: formulation-prerequisite
  def-cm02-newtonian-flow: formulation-prerequisite
  def-cm03-centre-of-mass-and-momenta: formulation-prerequisite
  pthm-cm03-momentum-balance: physical-result
  pthm-cm05-relative-reduction: physical-result
  def-cm-central-force-trajectory: mathematical-premise
  def-cm01-units: formulation-prerequisite
  def-euclidean-inner-product: mathematical-premise
  def-vector-valued-derivative-and-integral: mathematical-premise
  def-ck-euclidean-maps-and-diffeomorphisms: mathematical-premise
  lem-cm-derivative-of-pairings-of-curves: mathematical-premise
  def-interval: mathematical-premise
provenance:
  statement: ai-generated
  proof: ai-generated
generation:
  role: counterexample
proof_strategy: direct
physical_scope: "A refutation of the unconditional two-body reduction: an explicit two-label force model with the external-plus-pair presentation, a (zero) static central pair potential and antisymmetric constant external forces has an explicit motion whose relative coordinate is not a central-force trajectory, even though the total external force and the centre-of-mass balance are unaffected. The item is a finite check inside the adopted force branch; it asserts no observation and shows that the no-external-force restriction cannot be dropped without replacement, even if the total external force vanishes."
sources:
  references:
    - title: "Konstantin Likharev, Essential Graduate Physics: Classical Mechanics (title page last edited September 1, 2026), Section 3.4, chapter pages 7-9 (PDF pages 40-42): the reduction to the relative coordinate is performed for two particles interacting through a central force and without external forces"
      url: "https://essentialgraduatephysics.org/Files/CM%20merged.pdf"
    - title: "David Tong, Classical Dynamics (University of Cambridge), Section 2.5.4, printed p. 31 (PDF p. 37): the two-body Lagrangian $L=\\frac12M\\dot R^2+\\frac12\\mu\\dot r_{12}^2-V(|r_{12}|)$ contains no external-force term"
      url: "https://www.davidtong.org/pdfs/teaching/classical-dynamics/clas.pdf"
---

## Statement refuted

**False statement.** *Let a two-label model of the force branch of
[[post-cm02-force-superposition]] declare the external-plus-pair presentation
of [[post-cm02-interactions]] with a static central pair potential
$u\in C^2(J_0)$, with **no** restriction on the external forces. Then the
relative coordinate $r=x_1-x_2$ of every motion is a central-force trajectory
for $(\mu,u)$ with $\mu=m_1m_2/(m_1+m_2)$, that is
$\mu r''=-u'(\lvert r\rvert)r/\lvert r\rvert$.*

The hypothesis of [[pthm-cm05-relative-reduction]] is the stronger statement
that the force map be presented through the potential
$U(x)=u(\lvert x_1-x_2\rvert)$ alone, which excludes external forces; the
witness below shows that this exclusion is not decorative. In particular the
vanishing of the total external force, which already guarantees the
centre-of-mass balance of [[pthm-cm03-momentum-balance]], is not sufficient
for the reduction.

## Facts & Assumptions

**Given:** The model and motion declared in the Counterexample: $m_0:=1\ \mathrm{kg}$ and $m_1=m_2=m_0$, time window $\mathbb R$, configuration domain $Q=\{x\in(\mathbb R^3)^2:\lvert x_1-x_2\rvert>0\}$, pair potential $u\equiv0$ on $J_0=(0,\infty)$, acceleration scale $a_0:=1\ \mathrm{m\,s^{-2}}$, speed scale $v_0:=1\ \mathrm{m\,s^{-1}}$, offset $d_0:=2\ \mathrm m$, and external forces $F_1^{\mathrm{ext}}=\gamma$, $F_2^{\mathrm{ext}}=-\gamma$ with $\gamma:=(1\ \mathrm N)\mathbf e_1=m_0a_0\mathbf e_1$; for an orthonormal basis $(\mathbf e_1,\mathbf e_2,\mathbf e_3)$ the curves are $x_1(t)=\frac12a_0t^2\mathbf e_1$ and $x_2(t)=-\frac12a_0t^2\mathbf e_1+d_0\mathbf e_1+v_0t\mathbf e_2$.

[L1] Model notions ([[post-cm02-force-superposition]] clauses (i)-(iv), [[post-cm02-interactions]] clauses (i)-(iv), [[def-cm02-newtonian-flow]], [[def-cm03-centre-of-mass-and-momenta]], [[post-cm05-central-model]] clause (i), [[def-cm01-units]]): a motion satisfies $m_ix_i''=F_i=F_i^{\mathrm{ext}}+\sum_{j\ne i}F_{ij}$; a constant force map is continuous and state-Lipschitz with constant $0$, hence admissible for the force branch; the total external force is $\sigma=\sum_iF_i^{\mathrm{ext}}$; and $M=m_1+m_2$, $\mu=m_1m_2/M$, $r=x_1-x_2$, $\lvert r\rvert=\lVert r\rVert_2$ ([[def-euclidean-inner-product]]).

[L2] Curve calculus ([[lem-cm-derivative-of-pairings-of-curves]], [[def-vector-valued-derivative-and-integral]], [[def-ck-euclidean-maps-and-diffeomorphisms]], [[def-interval]]): sums, differences and scalar multiples of differentiable curves differentiate componentwise, so $r''=x_1''-x_2''$ for $C^2$ curves.

[L3] The reduction theorem ([[pthm-cm05-relative-reduction]] clauses 1-3, [[def-cm-central-force-trajectory]]): for a model presented through the potential $U(x)=u(\lvert x_1-x_2\rvert)$ with $F_i^{\mathrm{ext}}\equiv0$, the relative coordinate satisfies $\mu r''=-u'(\lvert r\rvert)r/\lvert r\rvert$; this is the statement whose external-force hypothesis is at issue, and it is used below only to identify what the false statement asserts for the pair potential $u\equiv0$, namely $\mu r''=0$.

## Counterexample

**Proof technique:** direct.

1.1 The model is admissible for the force branch: the pair maps are $F_{12}=F_{21}\equiv0$ (the negative gradients of $u\equiv0$, a $C^\infty$ function on $(0,\infty)$) and the external maps are the constants $F_1^{\mathrm{ext}}=\gamma$, $F_2^{\mathrm{ext}}=-\gamma$; constant maps on $I_0\times Q\times(\mathbb R^3)^2$ are continuous and state-locally Lipschitz with constant $0$, so the standing hypotheses of [[post-cm02-force-superposition]] clause (iii) hold, the presentation is the identity $F_i=F_i^{\mathrm{ext}}+\sum_{j\ne i}F_{ij}$, and the pair forces are antisymmetric and (trivially) central. [given, L1]

2.1 General relative acceleration: by [L2], any motion of a model with this structure has $r''=x_1''-x_2''=\frac{F_1}{m_1}-\frac{F_2}{m_2}=\frac{F_1^{\mathrm{ext}}}{m_1}-\frac{F_2^{\mathrm{ext}}}{m_2}+\frac{F_{12}}{m_1}-\frac{F_{21}}{m_2}$; with $F_{21}=-F_{12}$ and $\mu^{-1}=\frac1{m_1}+\frac1{m_2}$ this reads $\mu r''=F_{12}+\mu\bigl(\frac{F_1^{\mathrm{ext}}}{m_1}-\frac{F_2^{\mathrm{ext}}}{m_2}\bigr)$; for the model at hand $F_{12}=0$, $F_1^{\mathrm{ext}}=\gamma$, $F_2^{\mathrm{ext}}=-\gamma$ and $m_1=m_2=m_0$, so $\mu r''=\mu(2\gamma/m_0)=\gamma$. [step 1.1, L1, L2, algebra]

3.1 The displayed curves are a motion: $x_1''=a_0\mathbf e_1$ and $x_2''=-a_0\mathbf e_1$, so $m_0x_1''=\gamma=F_1$ and $m_0x_2''=-\gamma=F_2$; the curves are polynomials hence $C^2$. Their relative coordinate is $r=(a_0t^2-d_0)\mathbf e_1-v_0t\mathbf e_2$, and $\lvert x_1-x_2\rvert^2=(a_0t^2-d_0)^2+(v_0t)^2>0$ for every $t$: if the second square vanishes then $t=0$, when the first square is $d_0^2>0$. Thus $x(t)\in Q$ throughout. [step 1.1, step 2.1, L1, L2, algebra]

4.1 Failure of the reduction: for this motion $r''=2a_0\mathbf e_1$, so $\mu r''=m_0a_0\mathbf e_1=\gamma\ne0$, while the false statement asserts for the pair potential $u\equiv0$ that $\mu r''=-u'(\lvert r\rvert)r/\lvert r\rvert=0$; the two disagree, so $r$ is not a central-force trajectory for $(\mu,0)$. Moreover the total external force is $\sigma=F_1^{\mathrm{ext}}+F_2^{\mathrm{ext}}=\gamma-\gamma=0$, and the centre of mass $X=\frac12(x_1+x_2)=\frac{d_0}{2}\mathbf e_1+\frac{v_0t}{2}\mathbf e_2$ is affine, consistent with the balance of [[pthm-cm03-momentum-balance]]; hence a vanishing total external force alone does not imply the relative central-force equation. Thus the no-external-force restriction cannot be dropped without an appropriate replacement; the witness does not prove that each external force must vanish in every motion satisfying the relative equation. [step 2.1, step 3.1, L1, L3, algebra] ∎

## Remarks

- **What the witness isolates.** The failure is produced by the antisymmetric external pair $\pm\gamma$, which cancels in the total momentum but not in the relative equation; by contrast a common external acceleration $F_i^{\mathrm{ext}}=m_i a$ cancels in $\mu r''$ because $a-a=0$, so by step 2.1 the relative central-force equation holds exactly when the evaluated external accelerations $F_1^{\mathrm{ext}}/m_1$ and $F_2^{\mathrm{ext}}/m_2$ agree along the motion. Nonzero common external acceleration preserves that relative equation but gives $X''=a$, so it need not preserve the affine centre-of-mass conclusion of the full reduction theorem.

- **Scope.** The computation is a finite check inside the adopted force branch with declared data; it reports no observation and identifies only the unproved strengthening, not any defect of [[pthm-cm05-relative-reduction]], whose sufficient hypotheses the witness does not satisfy.
