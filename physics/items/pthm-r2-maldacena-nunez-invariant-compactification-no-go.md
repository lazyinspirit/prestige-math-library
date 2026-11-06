---
id: pthm-r2-maldacena-nunez-invariant-compactification-no-go
kind: physics-theorem
title: Maldacena–Nuñez constraints on Minkowski warping and de Sitter compactifications
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 1
domain: physics
library: physics
deps:
  - lem-r2-conformal-warped-external-ricci-trace
  - lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes
  - thm-general-stokes-theorem
  - def-axiom-of-choice
dependency_roles:
  lem-r2-conformal-warped-external-ricci-trace: mathematical-premise
  lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes: mathematical-premise
  thm-general-stokes-theorem: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-generated
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
physical_scope: "Conditional two-derivative Einstein-matter model with positive scalar/form kinetic terms, nonpositive potential, smooth compact internal space, invariant Minkowski or de Sitter external metric, and only the explicitly stated smooth or warp-boundary singular branch. No higher-curvature terms, extra source/boundary terms, positive-potential sector, or time-dependent external geometry is covered."
sources:
  references:
    - title: "Juan Maldacena and Carlos Nuñez, Supergravity description of field theories on curved manifolds and a no go theorem, arXiv:hep-th/0007018v2"
      url: "https://arxiv.org/pdf/hep-th/0007018v2"
      locator: "§6.1–6.2, equations (30)–(40), PDF pp. 22–26; full metric trace, form-sign, compact-integration, and singular-boundary arguments."
    - title: "Thomas Van Riet and Gianluca Zoccarato, Beginners lectures on flux compactifications and related Swampland topics, arXiv:2305.01722"
      url: "https://arxiv.org/pdf/2305.01722"
      locator: "§4.2, especially equations (4.35)–(4.50), and §5.3; independent lower-dimensional integrated-equation treatment and its limitations."
---

## Statement

Use natural units $\hbar=c=1$, length-valued coordinates, and dimensionless metric components. Let $D>2$ and $2\le d<D$. Let $X$ be a nonempty smooth compact manifold without boundary of dimension $D-d$, with a smooth positive-definite metric $\widehat g$. Let $(Y_d,g_d)$ be either Minkowski spacetime $(\mathbb R^d,\eta)$, where $\eta=\operatorname{diag}(-1,1,\ldots,1)$, or de Sitter space
$$dS_d(H_d)=\left\{z\in\mathbb R^{1,d}:-z_0^2+\sum_{i=1}^d z_i^2=H_d^{-2}\right\}$$
with the induced Lorentzian metric, where $H_d>0$ has units of inverse length. Thus $R_{\mu\nu}(g_d)=(R_d/d)(g_d)_{\mu\nu}$, with scalar curvature $R_d=0$ in the Minkowski case and $R_d=d(d-1)H_d^2>0$ in the de Sitter case. On the smooth branch, let $\Omega\in C^\infty(X,(0,\infty))$; compactness makes it bounded above and below by positive constants. On the singular branch, let $Z\subset X$ be a nonempty closed proper set, write $X_{\rm reg}=X\setminus Z$, and let $\Omega\in C^0(X,[0,\infty))$ be smooth and positive on $X_{\rm reg}$, with zero set $Z$. Assume the Axiom of Choice on this branch: every family of nonempty sets admits a choice function. On either branch use the $D$-dimensional metric on its regular locus
$$ds_D^2=\Omega(y)^2\left(ds_d^2+\widehat g_{mn}(y)dy^m dy^n\right).$$
Internal integrals use the Riemannian volume density $d\widehat\mu=\sqrt{\det\widehat g}\,|dy^1\cdots dy^{D-d}|$ (and its induced boundary density), so no orientation is assumed. The lower-dimensional Newton coefficient is finite, with $G_{N,d}^{-1}$ proportional to $\int_X\sqrt{\widehat g}\,\Omega^{D-2}$. Consider the adopted two-derivative action
$$S_D=\frac{1}{2\kappa_D^2}\int d^Dx\sqrt{-g}\,R-\int d^Dx\sqrt{-g}\left[\frac12h_{ab}(\phi)\partial_M\phi^a\partial^M\phi^b+V(\phi)+\sum_{n=2}^{D-1}\frac{Z_n(\phi)}{2n!}F_{(n)}^2\right],$$
where $\kappa_D^2$ has units of length$^{D-2}$, the matter density has units of length$^{-D}$, $h_{ab}$ is positive definite, $Z_n>0$, $V\le0$ on the solution's scalar range, and $F_{(n)}$ is a real massless $n$-form with $F_{(n)}^2=F_{M_1\ldots M_n}F^{M_1\ldots M_n}$. On the smooth branch, scalars and forms are smooth on $X$; on the singular branch, they are smooth up to the boundary of each regular superlevel domain defined below. Assume each antisymmetric tensor $Q$ in the adopted field equations has the invariant decomposition $Q=Q_e+\operatorname{vol}_{g_d}\wedge Q_l$, with $Q_e$ and $Q_l$ internal forms of ranks $\operatorname{rank}(Q)$ and $\operatorname{rank}(Q)-d$; set $Q_l=0$ when $\operatorname{rank}(Q)<d$. Thus no component has only some external indices. There are no localized stress terms or boundary terms in the field equations on the regular locus. The trace-reversed Einstein equation is
$$R_{MN}=\kappa_D^2\left(T_{MN}-\frac{g_{MN}}{D-2}T^P{}_P\right),$$
with $T_{MN}$ obtained by varying the displayed action.

Define the full external and total traces using $g$ and set
$$\widetilde T=\kappa_D^2\left(-T^\mu{}_\mu+\frac{d}{D-2}T^P{}_P\right).$$
Then $\widetilde T\ge0$ and the correctly normalized external trace equation is
$$\frac{\widehat\nabla^2\Omega^{D-2}}{(D-2)\Omega^{D-2}}=\frac{R_d+\Omega^2\widetilde T}{d}.$$
On the smooth compact branch, $\Omega$ is constant on each connected component; de Sitter is excluded, and in Minkowski only scalar-gradient terms and an external rank-$(D-1)$ form can contribute in the zero-trace sector, while internal forms of rank $n>1$ must vanish. On the singular branch, assume $\Omega$ is bounded above. Call $\epsilon>0$ a regular value when $d\Omega_y\ne0$ at every $y\in X_{\rm reg}$ with $\Omega(y)=\epsilon$. For arbitrarily small such $\epsilon$, assume the closed superlevel set $K_\epsilon:=\{\Omega\ge\epsilon\}\subset X_{\rm reg}$ is a compact smooth manifold with boundary $\partial K_\epsilon=\{\Omega=\epsilon\}$; write $R_\epsilon:=\{\Omega>\epsilon\}$ for its interior. Assume its inward unit normal $n_{\rm in}$ satisfies
$$-\int_{\partial K_\epsilon}\Omega^{D-2}\, n_{\rm in}\cdot\widehat\nabla(\Omega^{D-2})\,d\widehat\Sigma\le0.$$
The singular-branch integration excludes invariant de Sitter. In Minkowski space it forces $\Omega$ to be constant on each connected component of $X_{\rm reg}$; disconnected regular components may have different constants. This theorem does not cover positive potentials, higher-derivative/string corrections, other source or boundary terms, or time-dependent external metrics.

## Statement references

[Maldacena and Nuñez, §6.1–6.3](https://arxiv.org/pdf/hep-th/0007018v2)

[Van Riet and Zoccarato, §4.2](https://arxiv.org/pdf/2305.01722)

## Facts & Assumptions

**Given:** The adopted action, compactness and regularity hypotheses, the trace-reversed field equation in the Statement, and exactly one of the stated warp-boundary branches.

[A1] The scalar metric $h_{ab}$ and every $Z_n$ are positive, and $V\le0$ along the solution. The forms are real and preserve all external isometries.

[F1] [[lem-r2-conformal-warped-external-ricci-trace]]: for $g=\Omega^2(g_d+\widehat g)$ with $\omega=\log\Omega$ depending only on $X$, the external Ricci block is $R_{\mu\nu}(g)=R_{\mu\nu}(g_d)- (g_d)_{\mu\nu}[\widehat\Delta\omega+(D-2)|d\omega|^2]$, and $\widehat\Delta\Omega^{D-2}/((D-2)\Omega^{D-2})=\widehat\Delta\omega+(D-2)|d\omega|^2$.

[F2] [[lem-finite-chart-localization-defines-choice-free-integration-and-compact-stokes]]: the integral of an exact compactly supported top form on a boundaryless oriented manifold is zero; this supplier proves only the boundaryless case used on the smooth branch.

[F3] [[thm-general-stokes-theorem]]: assuming countable choice, for an oriented smooth $n$-manifold with boundary, $n\ge1$, and a compactly supported smooth $(n-1)$-form $\eta$, $\int_M d\eta=\int_{\partial M}j^*\eta$ with the outward-normal-first boundary orientation.

[A2] [[def-axiom-of-choice]]: every family of nonempty sets has a choice function. Its restriction to sequences gives the countable-choice hypothesis in [F3]; the only use of choice in this proof is Step 5.1.

## Proof

1.1 Vary the matter terms with respect to $g^{MN}$, using $\delta\sqrt{-g}=-\frac12\sqrt{-g}g_{MN}\delta g^{MN}$. For the scalar kinetic term, $\delta(h_{ab}\partial_P\phi^a\partial^P\phi^b)=h_{ab}\partial_M\phi^a\partial_N\phi^b\delta g^{MN}$; for an $n$-form, antisymmetry makes the $n$ inverse-metric variations in $\delta F_{(n)}^2$ equal, giving $\delta F_{(n)}^2=nF_{M L_2\ldots L_n}F_N{}^{L_2\ldots L_n}\delta g^{MN}$. Hence $T_{MN}=h_{ab}(\partial_M\phi^a\partial_N\phi^b-\frac12g_{MN}\partial_P\phi^a\partial^P\phi^b)-Vg_{MN}+\sum_n Z_n[\frac{1}{(n-1)!}F_{M L_2\ldots L_n}F_N{}^{L_2\ldots L_n}-\frac{g_{MN}}{2n!}F_{(n)}^2]$. Varying the Einstein–Hilbert term gives $G_{MN}=\kappa_D^2T_{MN}$; tracing gives $R=-2\kappa_D^2T^P{}_P/(D-2)$, and substitution yields the trace-reversed equation stated. [given, A1, algebra]

2.1 Apply [F1] to the external block and trace the trace-reversed equation with $(g_d)^{\mu\nu}$. Since $g_{\mu\nu}=\Omega^2(g_d)_{\mu\nu}$, the matter side becomes $\Omega^2[T^\mu{}_\mu-dT^P{}_P/(D-2)]$. Rearranging and using [F1] gives $\widehat\Delta\Omega^{D-2}/((D-2)\Omega^{D-2})=(R_d+\Omega^2\widetilde T)/d$. [given, F1, step 1.1, algebra]

2.2 For scalar gradients, external invariance gives $T^\mu{}_\mu=-\frac d2 K-dV$ and $T^P{}_P=(1-\frac D2)K-DV$, where $K=\Omega^{-2}h_{ab}\widehat g^{mn}\partial_m\phi^a\partial_n\phi^b\ge0$. Substitution cancels the $K$ terms and gives $\widetilde T_{\rm scalar}=-2\kappa_D^2dV/(D-2)\ge0$. [A1, step 1.1, algebra]

2.3 For a wholly internal $n$-form, $F_{(n)}^2\ge0$, $T^\mu{}_\mu=-dZ_nF_{(n)}^2/(2n!)$, and $T^P{}_P=Z_n(n-D/2)F_{(n)}^2/n!$. Thus $\widetilde T_{\rm int}=\kappa_D^2 Z_nd(n-1)F_{(n)}^2/[n!(D-2)]\ge0$, with zero contribution for $n=1$ and positive contribution for any nonzero internal form of rank $n>1$. [step 1.1, A1, algebra]

2.4 For a component with all $d$ external indices, it exists only if $n\ge d$, has $F_{(n)}^2\le0$, and antisymmetry gives $g^{\mu\nu}F_{\mu L_2\ldots L_n}F_{\nu}{}^{L_2\ldots L_n}=(d/n)F_{(n)}^2$. Substitution in the stress trace gives $\widetilde T_{\rm ext}=-\kappa_D^2 Z_nd(D-1-n)F_{(n)}^2/[n!(D-2)]\ge0$; it vanishes at rank $n=D-1$. Summing these separate invariant components proves $\widetilde T\ge0$. [step 1.1, A1, algebra]

3.1 First justify integration without orientability. For a smooth vector field $V$ define $\widehat{\operatorname{div}}V=(\det\widehat g)^{-1/2}\partial_m((\det\widehat g)^{1/2}V^m)$. The finite chart-cutoff construction of [F2] uses bumps and compactness independently of orientation. Choose such cutoffs $\chi_i$ summing to one on $X$. In each chart, integration of the compactly supported coordinate derivative gives $\int_X\widehat{\operatorname{div}}(\chi_i V)\,d\widehat\mu=0$. Summing and using $\sum_i d\chi_i=0$ proves $\int_X\widehat{\operatorname{div}}V\,d\widehat\mu=0$. Applying this to $V=\widehat\nabla f$ and $V=f\widehat\nabla f$ yields the two identities used below. On the smooth branch put $f=\Omega^{D-2}>0$. Multiply step 2.1 by $(D-2)f$ and integrate on $X$; [F2] gives $\int_X\widehat\Delta f\,d\widehat\mu=0$, hence $\int_X fR_d\,d\widehat\mu+\int_X f\Omega^2\widetilde T\,d\widehat\mu=0$. If $R_d>0$, the first integral is strictly positive, a contradiction. If $R_d=0$, the second integrand is continuous and nonnegative, so zero integral forces $\widetilde T=0$ pointwise. Step 2.1 then gives $\widehat\Delta f=0$; applying the just-proved divergence identity to $f\widehat\nabla f$ gives $\int_X|df|^2d\widehat\mu=0$, so $f$ and therefore $\Omega$ are constant on each connected component. [F1, F2, step 2.1, step 2.2, step 2.3, step 2.4]

4.1 Since every contribution computed in steps 2.2–2.4 is nonnegative, $\widetilde T=0$ forces $V=0$ and excludes every nonzero form contribution except an external rank-$(D-1)$ form. Scalar gradients are not forced to vanish by this trace argument. [A1, step 2.2, step 2.3, step 2.4, step 3.1]

5.1 On the singular branch fix an arbitrarily small regular $\epsilon>0$ with $R_\epsilon\ne\varnothing$ and put $f=\Omega^{D-2}$ on $K_\epsilon$. Use finite chart cutoffs near $K_\epsilon$, with charts straightening its smooth boundary. Give each chart its coordinate orientation and apply [F3] to the compactly supported form $\iota_{\chi_i f\widehat\nabla f}\widehat{\mathrm{vol}}_i$ there, where $\widehat{\mathrm{vol}}_i$ is the metric volume form for that chart orientation. The coordinate orientation signs cancel against those in the positive volume density; the outward-normal-first convention gives the outward normal flux. Summing cancels the cutoff derivatives as in step 3.1 and proves the density divergence theorem on $K_\epsilon$; its outward unit normal is $-n_{\rm in}$, so $\int_{K_\epsilon}f\widehat\Delta f\,d\widehat\mu=-\int_{\partial K_\epsilon}f\,n_{\rm in}\cdot\widehat\nabla f\,d\widehat\Sigma-\int_{K_\epsilon}|\widehat\nabla f|^2d\widehat\mu$. Multiplying the trace equation in step 2.1 by $(D-2)f^2$ and integrating over $K_\epsilon$ also gives $\int_{K_\epsilon}f\widehat\Delta f\,d\widehat\mu=\frac{D-2}{d}\int_{K_\epsilon}f^2(R_d+\Omega^2\widetilde T)d\widehat\mu\ge0$. The boundary assumption makes the boundary term in the Stokes expression nonpositive, so both equalities force $\widehat\nabla f=0$ on $R_\epsilon$ and the right-hand integral to vanish. Since $R_\epsilon$ is nonempty, $R_d>0$ would make that integral strictly positive, excluding de Sitter. For Minkowski, $f$ is constant on each connected component $C$ of $R_\epsilon$; if $\partial C\ne\varnothing$, continuity and $\Omega=\epsilon$ on $\partial C$ contradict $\Omega>\epsilon$ in $C$. Each remaining boundaryless $C$ is open in $X$, compact, and therefore closed in $X$ and a connected component of $X$. For any point of $X_{\rm reg}$, choose such an $\epsilon<\Omega$ at that point; its connected component of $X$ then lies in $X_{\rm reg}$ and has constant $\Omega$. Since arbitrarily small admissible regular values are available, these domains cover $X_{\rm reg}$, so the zero-trace conclusions of step 4.1 hold throughout it. [F3, A2, given, step 2.1, step 2.2, step 2.3, step 2.4, step 4.1, algebra] ∎
