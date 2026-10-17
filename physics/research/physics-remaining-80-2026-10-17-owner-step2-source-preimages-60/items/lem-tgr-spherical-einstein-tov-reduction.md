---
id: lem-tgr-spherical-einstein-tov-reduction
kind: lemma
title: "Complete spherical Einstein and conservation reduction"
status: draft
origin: pipeline
domain: mathematics
dependency_level: 1
deps:
  - def-tgr-spherical-static-state-domain
  - def-countable-choice
  - def-gr-curvature-tensor-and-derived-tensors
  - thm-gr-curvature-tensoriality-and-coordinate-formula
  - thm-gr-nondegenerate-levi-civita-and-tensor-derivative
  - thm-gr-second-bianchi-and-divergence-free-einstein
dependency_roles:
  def-tgr-spherical-static-state-domain: mathematical-premise
  def-countable-choice: mathematical-premise
  def-gr-curvature-tensor-and-derived-tensors: mathematical-premise
  thm-gr-curvature-tensoriality-and-coordinate-formula: mathematical-premise
  thm-gr-nondegenerate-levi-civita-and-tensor-derivative: mathematical-premise
  thm-gr-second-bianchi-and-divergence-free-einstein: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
proof_strategy: direct
sources:
  references:
    - title: "P.-H. Chavanis, Statistical mechanics of self-gravitating systems in general relativity: I. The quantum Fermi gas, arXiv:1908.10806v1 (2019), Sec. III.A, Eqs. (97)–(106)"
      url: "https://arxiv.org/pdf/1908.10806"
    - title: "MIT 8.962, General Relativity, Spring 2020 Lecture Guide, Lecture 21, PDF pp. 7–8"
      url: "https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/743631236d2866f6ba129f06110d8b1a_MIT8_962S20_guide.pdf"
---

## Statement

Assume $\mathrm{ZF}+\mathrm{AC}_\omega$ with $\mathrm{AC}_\omega$ exactly as in [[def-countable-choice]]. Let $J\subseteq(0,\infty)$ be an open interval; let the state domain, metric, mixed source tensor, mass function, units, and signature be those of [[def-tgr-spherical-static-state-domain]]. Write $\kappa=8\pi G/c^4$, and let $G^a{}_b$ be the mixed Einstein tensor defined from the signed curvature convention in [[def-gr-curvature-tensor-and-derived-tensors]]. Suppose $\phi,b,\epsilon,p$ are smooth on $J$ and $b>0$. As a conditional mathematical system, assume the component equations
$$G^a{}_b=\kappa T^a{}_b.$$
Then on $J$,
$$M'=\frac{4\pi r^2\epsilon}{c^2},\qquad \phi'=\frac{GM/c^2+4\pi G r^3p/c^4}{r^2b},\qquad p'=-\frac{G(\epsilon+p)(M+4\pi r^3p/c^2)}{c^2r^2b}.$$
Conversely, if these three ordinary differential equations hold with $M=c^2r(1-b)/(2G)$, then every mixed Einstein component satisfies $G^a{}_b=\kappa T^a{}_b$. The identity $\nabla^aG_{ab}=0$ used for this converse is the geometric theorem of [[thm-gr-second-bianchi-and-divergence-free-einstein]], not a field equation or empirical premise. This lemma is a pure conditional calculation and makes no claim that the model describes nature.

## Facts & Assumptions

**Given:** $\mathrm{ZF}+\mathrm{AC}_\omega$ as declared in the Statement; an open interval $J\subset(0,\infty)$; smooth $\phi,b,\epsilon,p$ with $b>0$; the static spherical data in [[def-tgr-spherical-static-state-domain]]; and, for the forward direction, the conditional equations $G^a{}_b=\kappa T^a{}_b$.

[F1] The static spherical metric, diagonal mixed source, signature $(-,+,+,+)$, mass definition $M=c^2r(1-b)/(2G)$, and formal SI dimensions are those in [[def-tgr-spherical-static-state-domain]].

[F2] With curvature convention $R(X,Y)Z=\nabla_X\nabla_YZ-\nabla_Y\nabla_XZ-\nabla_{[X,Y]}Z$, the Christoffel symbols are $\Gamma^a{}_{bc}=\tfrac12 g^{ad}(\partial_bg_{dc}+\partial_cg_{bd}-\partial_dg_{bc})$ ([[thm-gr-nondegenerate-levi-civita-and-tensor-derivative]]), the coordinate curvature is $R^a{}_{bcd}=\partial_c\Gamma^a{}_{db}-\partial_d\Gamma^a{}_{cb}+\Gamma^a{}_{ce}\Gamma^e{}_{db}-\Gamma^a{}_{de}\Gamma^e{}_{cb}$ ([[thm-gr-curvature-tensoriality-and-coordinate-formula]]), and $G_{ab}=\operatorname{Ric}_{ab}-\tfrac12 Sg_{ab}$ with $\operatorname{Ric}_{bd}=R^a{}_{bad}$ ([[def-gr-curvature-tensor-and-derived-tensors]]).

[F3] The contracted Bianchi identity is $\nabla_aG^a{}_b=0$ for every index $b$ ([[thm-gr-second-bianchi-and-divergence-free-einstein]]).

[A1] The field equation $G^a{}_b=\kappa T^a{}_b$ is a mathematical hypothesis for the forward implication only; it is not adopted or proved as a claim about nature.

[A2] The smooth tangent- and tensor-bundle construction in the geometric supplier chain assumes $\mathrm{AC}_\omega$ as recorded in [[def-countable-choice]]; no stronger choice axiom is assumed.

## Proof

1.1 In a regular spherical chart away from the angular coordinate poles, the metric in [F1] has the following nonzero Christoffel symbols, with lower-index symmetry understood: $$\Gamma^0{}_{0r}=\phi',\quad \Gamma^r{}_{00}=be^{2\phi}\phi',\quad \Gamma^r{}_{rr}=-\frac{b'}{2b},\quad \Gamma^r{}_{\theta\theta}=-rb,\quad \Gamma^r{}_{\varphi\varphi}=-rb\sin^2\theta,\quad \Gamma^\theta{}_{r\theta}=\Gamma^\varphi{}_{r\varphi}=\frac1r,\quad \Gamma^\theta{}_{\varphi\varphi}=-\sin\theta\cos\theta,\quad \Gamma^\varphi{}_{\theta\varphi}=\cot\theta.$$ They follow by inserting the diagonal metric entries $(-e^{2\phi},b^{-1},r^2,r^2\sin^2\theta)$ and their derivatives into the Christoffel formula in [F2]. The identities obtained below depend only on $r$ and are tensor-component identities, so their validity extends across the two angular coordinate poles by smoothness. [A2, F1, F2]

2.1 Substituting the symbols of step 1.1 in the curvature formula of [F2], contracting as in [F2], and simplifying gives $$\operatorname{Ric}^0{}_0=-b\left(\phi''+\phi'^2+\frac{2\phi'}r+\frac{b'\phi'}{2b}\right),\quad \operatorname{Ric}^r{}_r=-b\left(\phi''+\phi'^2+\frac{b'\phi'}{2b}\right)-\frac{b'}r,\quad \operatorname{Ric}^\theta{}_\theta=\operatorname{Ric}^\varphi{}_\varphi=\frac{1-b}{r^2}-\frac{b'}{2r}-\frac{b\phi'}r.$$ Hence $G^0{}_0=-(1-b)/r^2+b'/r$, $G^r{}_r=-(1-b)/r^2+2b\phi'/r$, and $$G^\theta{}_\theta=G^\varphi{}_\varphi=b\left(\phi''+\phi'^2+\frac{\phi'}r\right)+\frac{b'}2\left(\phi'+\frac1r\right).$$ These equalities use only the displayed finite component formula, the listed Christoffels, and the contractions defining $G$; no spherical field equation is cited. [A2, step 1.1, F2, algebra]

2.2 For the diagonal tensor $T^a{}_b$ of [F1], its radial divergence is $$\nabla_aT^a{}_r=p'+\phi'(\epsilon+p).$$ Indeed, in $\partial_aT^a{}_r+\Gamma^a{}_{ac}T^c{}_r-\Gamma^c{}_{ar}T^a{}_c$, the derivative term is $p'$, the trace term contributes $p(\phi'-b'/(2b)+2/r)$, and the last term contributes $\epsilon\phi'+pb'/(2b)-2p/r$. Adding the three contributions gives $p'+(\epsilon+p)\phi'$. The other three components of $\nabla_aT^a{}_b$ vanish: for $b=0$ there is no time dependence and every mixed time-radial Christoffel is zero; for $b=\theta,\varphi$, angular derivatives vanish and the only polar trace term $\cot\theta\,p$ cancels the matching diagonal connection term, while the $\varphi$ component has no nonzero trace term. [A2, F1, step 1.1, algebra]

3.1 The $00$ equation in [A1] is $-(1-b)/r^2+b'/r=-\kappa\epsilon$. Multiplying by $r^2$ yields $1-b-rb'=\kappa\epsilon r^2$. Differentiating $M=c^2r(1-b)/(2G)$ gives $M'=c^2(1-b-rb')/(2G)=4\pi r^2\epsilon/c^2$. [A1, A2, F1, step 2.1, algebra]

3.2 The $rr$ equation in [A1] is $-(1-b)/r^2+2b\phi'/r=\kappa p$. Solving for $\phi'$ and substituting $1-b=2GM/(c^2r)$ and $\kappa=8\pi G/c^4$ gives $$\phi'=\frac{(1-b)+\kappa p r^2}{2br}=\frac{GM/c^2+4\pi G r^3p/c^4}{r^2b}.$$ [A1, A2, F1, step 2.1, algebra]

4.1 By [F3] and [A1], $\nabla_aT^a{}_r=\kappa^{-1}\nabla_aG^a{}_r=0$. Step 2.2 therefore gives $p'=-(\epsilon+p)\phi'$. Substitution of step 3.2 yields the displayed TOV pressure equation. [A1, A2, F3, step 3.2, step 2.2, algebra]

5.1 Conversely, the mass and lapse equations give the $00$ and $rr$ equations by reversing steps 3.1–2.2. Define $D^a{}_b=G^a{}_b-\kappa T^a{}_b$. Then $D^0{}_0=D^r{}_r=0$, and its only possible nonzero entries are the equal angular diagonal entries $D^\theta{}_\theta=D^\varphi{}_\varphi$, by step 2.1. The pressure equation and step 2.2 give $\nabla_aT^a{}_b=0$ for every $b$, so [F3] gives $\nabla_aD^a{}_b=0$. In particular, the radial component is $\nabla_aD^a{}_r=-\Gamma^\theta{}_{\theta r}D^\theta{}_\theta-\Gamma^\varphi{}_{\varphi r}D^\varphi{}_\varphi=-2D^\theta{}_\theta/r$. Since $r>0$, it follows that both angular entries vanish. Thus $D=0$ and the full mixed field equation holds. [A2, F1, F3, step 1.1, step 2.1, step 2.2, step 3.1, step 3.2, algebra] ∎

## Remarks

- The claim is conditional mathematics. Its $\mathrm{AC}_\omega$ assumption is inherited exactly from the smooth tangent/tensor-bundle and curvature suppliers; no full Axiom of Choice is invoked, and the coordinate algebra performs no selection.
- The direct component computation verifies all independent Einstein components on $r>0$. The converse uses Bianchi only after the mass, lapse, and conservation equations hold.
- The equation is confined to a smooth isotropic static spherical domain with $b>0$; it says nothing about anisotropic, rotating, nonstatic, weak, or distributional sources.


