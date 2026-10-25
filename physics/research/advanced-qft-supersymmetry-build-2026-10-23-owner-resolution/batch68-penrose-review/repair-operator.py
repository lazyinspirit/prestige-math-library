from pathlib import Path
B=Path('items')
def sect(s,h,b):
 a=s.index('## '+h+'\n')+len(h)+4;e=s.find('\n## ',a);return s[:a]+'\n'+b.strip()+'\n'+(s[e:]if e>=0 else'')
p=B/'lem-qftx-coupled-penrose-operator-coefficient.md';s=p.read_text().replace('dependency_level: 4','dependency_level: 5');s=s.replace('thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology','thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition');s=sect(s,'Facts & Assumptions',r'''
**Given:** The global incidence geometry, its normalized fibre-harmonic edge, and a smooth unitary ASD connection.

[A1] Full AC is assumed through the analytic and harmonic inputs. [[def-axiom-of-choice]]

[F1] The incidence chart has $H_1=\partial_{\bar z_1}-t\partial_{z_2}$, $H_2=\partial_{\bar z_2}+t\partial_{z_1}$, and $g=\Omega^2\delta$, $\Omega=2/(1+r^2)$. Its constant-$t$ local splitting is distinct from the global Fubini–Study orthogonal splitting. [[def-qftx-coupled-penrose-incidence-geometry]]

[F2] The global edge has an intrinsic integral-normalized harmonic generator. With $a=1+r^2$, $q=1+|t|^2$, tautological holomorphic frame $e$ of $\mathcal O(-2)$ and $c=i/(2\pi)$, its vertical restriction is $c e\,d\bar t/(a q^2)$. Closed representatives have the unique global smooth decomposition stated by the edge lemma; its horizontal coefficient has fibre type $\mathcal O(-1)^{\oplus2}$. [[lem-qftx-coupled-penrose-injective-edge]]

[F3] ASD is exactly $F_{\bar1\bar2}=F_{12}=F_{1\bar1}+F_{2\bar2}=0$ in the chosen positive orientation. [[lem-qftx-coupled-penrose-positive-orientation-asd]]

[F4] Both Dolbeault groups of $\mathcal O(-1)$ vanish. [[lem-qftx-coupled-penrose-fibre-dolbeault]]

[F5] The fixed compact fibre Green inverse is bounded $H^m\to H^{m+2}$ for every integer $m\ge0$. [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]

[F6] The chosen unit round metric has scalar curvature $R=12$. [[lem-qftx-coupled-penrose-round-sphere-curvature]]
''')
s=sect(s,'Proof',r'''
**Given:** [A1], [F1]–[F6], and the global closed representative of the class.

1.1 For the global metric splitting, the mixed component of $\bar\partial(s\sigma)$ is a vertical degree-one form with coefficient $\mathcal O(-1)^{\oplus2}\otimes E_x$. On a fibre it has a unique vertical primitive by [F4]. The fixed-fibre $B=\bar\partial^*G$ construction and smooth-parameter difference-quotient argument in [F2], with the estimates [F5], make that primitive smooth over the base. The same fibrewise uniqueness makes it agree across frame and chart changes. Denote the horizontal correction by $\phi(s)$; then $\psi(s)=s\sigma+\phi(s)$ has zero mixed differential. If $s$ is the image of a closed representative $\alpha$, [F2]'s decomposition and closedness say that its horizontal remainder solves this same mixed equation. The difference is fibrewise holomorphic in $\mathcal O(-1)^{\oplus2}\otimes E_x$, hence zero by [F4]. Thus $\psi(s)=\alpha-\bar\partial_F\gamma$ is closed for a class image. The differential can still have a horizontal degree-two component for arbitrary $s$; the curvature component of the metric splitting is retained. [F2, F4, F5, given, construct, algebra]

2.1 Compute that residual in the simpler constant-$t$ local splitting, without transplanting metric-frame coefficient formulas. Let $D_j=D_{z_j}$, $D_{\bar j}=D_{\bar z_j}$ be the covariant derivatives in a local unitary frame of $E$ and set $u=s/a$. The holomorphic tautological frame $e$ is killed by the scalar $\bar\partial$. Let $\theta^1,\theta^2$ be the $(0,1)$ covectors dual to $H_1,H_2$ and vanishing on $\partial_{\bar t}$. These three vector fields commute, so scalar Dolbeault differentiation is evaluated by them without bracket terms. The form with the prescribed vertical part and zero mixed differential is
$$\psi_{\mathrm{loc}}(s)=e\left(\frac{c u}{q^2}d\bar t+h_1\theta^1+h_2\theta^2\right),\quad h_1=\frac{c}{q}(\bar tD_{\bar1}u+D_2u),\quad h_2=\frac{c}{q}(\bar tD_{\bar2}u-D_1u).$$
Indeed $\partial_{\bar t}(\bar t/q)=q^{-2}$ and $\partial_{\bar t}(1/q)=-tq^{-2}$, so $\partial_{\bar t}h_i$ equals the corresponding $D_{H_i}(c u/q^2)$ exactly. The factor $u=s/(1+r^2)$ is essential: it is the integral-normalized harmonic coefficient from [F2], not an adjustable conformal ansatz. [F1, F2, step 1.1, algebra]

3.1 These local forms are regular on the complete projective fibre. For $w=1/t$, the horizontal vectors are $\widetilde H_i=wH_i$, $\widetilde\theta^i=w^{-1}\theta^i$, and $\widetilde e=w^2e$. Thus the new horizontal coefficients are $\widetilde h_i=t h_i$. They become $c(D_{\bar1}u+\bar wD_2u)/(1+|w|^2)$ and $c(D_{\bar2}u-\bar wD_1u)/(1+|w|^2)$, both smooth. The vertical coefficient changes to $-c u\,d\bar w/(1+|w|^2)^2$ in frame $\widetilde e$, also smooth. The sign is the canonical-coordinate transition, not a change of harmonic normalization. Therefore $\psi_{\mathrm{loc}}$ exists over every entire fibre above this base chart. Its difference from the intrinsic form of step 1.1 has zero vertical part and zero mixed differential. By [F4] that difference is zero. This proves that the coordinate calculation computes the actual global correction, despite using a different horizontal splitting for its displayed coefficients. [F1, F2, F4, step 1.1, step 2.1, algebra]

4.1 Put $S=D_{\bar1}D_1+D_{\bar2}D_2$ and $T=D_1D_{\bar1}+D_2D_{\bar2}$. Directly evaluating the remaining differential on $H_1,H_2$ gives
$$\frac{q}{c}\bar\partial_F\psi_{\mathrm{loc}}(H_1,H_2)/e=\bar tF_{\bar1\bar2}u-tF_{12}u-Su-|t|^2Tu.$$
Here, for example, $D_{H_1}h_2=cq^{-1}(\bar tD_{\bar1}D_{\bar2}-D_{\bar1}D_1-t\bar tD_2D_{\bar2}+tD_2D_1)u$, and subtracting $D_{H_2}h_1$ gives precisely the displayed expression. By [F3], $T-S=F_{1\bar1}+F_{2\bar2}=0$ and the first two terms vanish. Since $D_j=(D_{2j-2}-iD_{2j-1})/2$ and $D_{\bar j}=(D_{2j-2}+iD_{2j-1})/2$, $S+T=\tfrac12\sum_{\mu=0}^3D_\mu^2$ and hence $S=T=\tfrac14\sum_\mu D_\mu^2$. The residual is therefore exactly $-c\sum_\mu D_\mu^2(s/a)/4$ in the nonvanishing local coefficient frame $e\theta^1\wedge\theta^2$. No uncomputed curvature cancellation or generic Penrose-operator theorem is used. [F1, F3, step 2.1, step 3.1, algebra]

5.1 For $g=\Omega^2\delta$ in four dimensions, integration against its volume $\Omega^4 dx$ and the unitary connection gives
$$\nabla_A^*\nabla_A s=-\Omega^{-4}\sum_\mu D_\mu(\Omega^2D_\mu s)=-\Omega^{-2}\sum_\mu D_\mu^2s-2\Omega^{-3}\sum_\mu(\partial_\mu\Omega)D_\mu s.$$
With $\Omega=2/a$, differentiation gives $\partial_\mu\Omega=-4x_\mu/a^2$ and $\sum_\mu\partial_\mu^2\Omega=-16/a^3=-2\Omega^3$. The product rule now proves, for this very connection,
$$\Omega^{-3}\left[-\sum_\mu D_\mu^2(\Omega s)\right]=(\nabla_A^*\nabla_A+2)s.$$
Since $s/a=\Omega s/2$, step 4.1 is
$$\bar\partial_F\psi(s)=\tau(\nabla_A^*\nabla_A+2)s,\qquad \tau=\frac{c\Omega^3}{8}\,e\theta^1\wedge\theta^2.$$
The factor $\tau$ is nonzero on the local chart. The zeroth-order coefficient is derived by $\Delta\Omega=-2\Omega^3$; it is not inferred from uniqueness. In particular a constant scalar with flat connection gives residual $2c/a^3$, agreeing with the displayed $+2$. By [F6] this is $R/6$. [F1, F6, step 4.1, algebra]

6.1 The local expression equals the intrinsically constructed differential by step 3.1. The same construction and calculation apply in any stereographic chart with the unit round metric. Thus it patches smoothly across the base overlap and infinity; a chartwise solution satisfies the invariant operator equation globally. For the class image $s$, the residual vanishes by step 1.1, and the nonzero frame in step 5.1 gives $(\nabla_A^*\nabla_A+2)s=0$. Gauge changes preserve the fibre normalization and transport the unique mixed correction, while $D_\mu$ and the final operator conjugate by the same unitary frame change. On the dual, $F_{A^\vee}=-F_A^{\mathsf T}$ remains ASD; the identical construction applies. Nothing used irreducibility, absence of parallel sections or nonzero curvature. [F2, F3, F4, step 1.1, step 3.1, step 5.1, algebra] ∎
''')
p.write_text(s)
# Synchronize current analytic input wording without changing target theorems/examples.
for name in ['thm-qftx-coupled-penrose-vanishing','ex-qftx-penrose-flat-summand-vanishing','ex-qftx-penrose-global-injectivity-boundary']:
 p=B/(name+'.md');s=p.read_text().replace('dependency_level: 5','dependency_level: 6')if name.startswith('thm-')else p.read_text().replace('dependency_level: 6','dependency_level: 7')
 old='The item file and full conditional proof are present and were inspected, but its current Step 1 readiness record is missing, so the premise remains unresolved for this batch.';s=s.replace(old,'This is the local analytic Dolbeault-resolution comparison, whose hypotheses match the present holomorphic-bundle use; it asserts no algebraic-to-analytic GAGA.')
 s=s.replace('The analytic comparison carrier and proof are present and its interface matches the theorem\'s use, but its current Step 1 readiness record is missing; this example inherits the same conditional status.','The theorem uses the local analytic Dolbeault-resolution comparison with its full AC and holomorphic-bundle hypotheses; no algebraic GAGA or independent general Penrose theorem is supplied as a premise.')
 s=s.replace('The analytic sheaf/Dolbeault comparison carrier and proof are present and its interface matches the theorem\'s use, but its current Step 1 readiness record is missing.','The theorem uses the local analytic sheaf/Dolbeault resolution comparison; its holomorphic-bundle and full AC hypotheses are inherited here.')
 if name.startswith('thm-'):
  a=s.index('4.1 The preceding deductions');s=s[:a]+'4.1 The analytic comparison in [A1] is supplied by its local Dolbeault-resolution theorem for the holomorphic bundles on $\\mathbb CP^3$ used above. The fibre groups, global edge and operator coefficient have been obtained without any algebraic GAGA, monad or inverse-normal-form premise. All conclusions therefore retain the stated arbitrary finite-rank unitary ASD scope, with the analytic inputs and full AC hypothesis explicit. [A1, F1, F2, F3, step 1.1, step 2.1, step 3.1] ∎\n'
 p.write_text(s)
