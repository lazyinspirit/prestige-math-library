---
id: thm-gts-pardon-nodal-gluing-regularity
kind: theorem
title: Conditional nodal gluing regularity for Pardon implicit atlases
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
dependency_level: 11
domain: mathematics
library: physics
proof_strategy: direct
deps:
  - def-banach-space
  - def-fredholm-operator-cokernel-and-index
  - thm-banach-fixed-point
  - def-gts-symplectic-and-almost-complex-curve-data
  - def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor
  - def-gts-pardon-gromov-topology-on-stable-map-moduli
  - def-gts-pardon-implicit-atlas-and-vfc-package
dependency_roles:
  def-banach-space: mathematical-premise
  def-fredholm-operator-cokernel-and-index: mathematical-premise
  thm-banach-fixed-point: mathematical-premise
  def-gts-symplectic-and-almost-complex-curve-data: mathematical-premise
  def-gts-stable-n-pointed-algebraic-curves-and-the-moduli-functor: mathematical-premise
  def-gts-pardon-gromov-topology-on-stable-map-moduli: mathematical-premise
  def-gts-pardon-implicit-atlas-and-vfc-package: mathematical-premise
justified_by: []
axiom_use: "No Full AC is used: the fixed point is supplied by the choice-free Banach fixed-point theorem, and its C1 parameter dependence is proved directly in step 4.1."
aliases: []
provenance:
  statement: ai-altered
  proof: ai-generated
sources:
  references:
    - title: John Pardon, An Algebraic Approach to Virtual Fundamental Cycles on Moduli Spaces of Pseudo-Holomorphic Curves, arXiv:1309.2370v6
      url: https://arxiv.org/pdf/1309.2370v6
      locator: Proposition 9.2.6 and its proof via Theorem B.1.1 in Appendix B, §§B.5–B.13; the source's weighted gluing estimates are recorded as hypotheses below, not claimed as locally proved here.
verification:
  precheck: pending
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-05
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Let $P$ be a finite-dimensional smooth parameter manifold, locally charted by open subsets of $\mathbb R^N$, whose coordinates include one complex smoothing parameter $q\in\mathbb C$ for each node, with the family locally given by $xy=q$. Let $B,Y$ be real Banach spaces: real normed vector spaces complete in the metrics induced by their norms. A map on these charts is $C^1$ when its Fréchet derivative exists everywhere and is continuous in operator norm. Let $F:P\times B\to Y$ be $C^1$, and put $D_p=D_xF(p,0)$. For a bounded linear map $D:B\to Y$, Fredholm means that its kernel is finite dimensional, its range is closed, and its cokernel $Y/\operatorname{ran}D$ is finite dimensional; its index is $\dim\ker D-\dim\operatorname{coker}D$. Assume $D_p$ is Fredholm of constant index $d$ and its kernels form a $C^1$ vector bundle of rank $d$. Suppose there are $C^1$ approximate right inverses $T_p:Y\to B$ with $\|T_p\|\le K$ and $\|D_pT_p-1_Y\|\le\delta<1$, and the exact right inverses $Q_p:=T_p(D_pT_p)^{-1}$ vary $C^1$. Set $C_0=\max\{1,K/(1-\delta)\}$. Assume there are $L,\eta,r,\rho>0$ with
$$C_0L(\rho+C_0r)\le\tfrac14,\qquad C_0(\eta+L\rho^2/2)\le r/2,$$
such that $\|F(p,0)\|\le\eta$ and $\|D_xF(p,x)-D_p\|\le L\|x\|$ for $\|x\|\le\rho+C_0r$. Finally, assume the local parameters split into kernel coordinates and other chart coordinates so that each specified forgetting map is a coordinate projection. A finite group $\Gamma$ with identity $1$ is given with a smooth left action $\alpha_P:\Gamma\times P_0\to P_0$ on a neighborhood $P_0\subseteq P$ and representations $\rho_B:\Gamma\to GL(B)$ and $\rho_Y:\Gamma\to GL(Y)$ by bounded linear isometries. These actions satisfy the identity and composition laws and preserve the chosen local data. They obey $F(\alpha_P(\gamma,p),\rho_B(\gamma)x)=\rho_Y(\gamma)F(p,x)$. Each specified forgetting projection $\pi:P_0\to P'$ is $\Gamma$-equivariant for a specified action $\alpha_{P'}$ on $P'$, meaning $\pi(\alpha_P(\gamma,p))=\alpha_{P'}(\gamma,\pi(p))$. For a Fredholm operator $D$, its determinant line is $\det(D):=\Lambda^{\max}\ker D\otimes(\Lambda^{\max}\operatorname{coker}D)^*$. Supply a $C^1$ orientation of the determinant-line family $\det(D_p)$. The finite-dimensional obstruction parameter space is an oriented real vector space $E$ included explicitly in the parameter data: in each chosen chart specify $P_{\mathrm{loc}}=P_{\mathrm{base}}\times E$, with $P_{\mathrm{base}}$ oriented, and write the equation as $F((a,e),x)=0$ for $a\in P_{\mathrm{base}}$, $e\in E$. The case $E=0$ is allowed. Give $P$ the resulting product orientation, so the orientation of $E$ is counted once inside $TP$, rather than as an additional undeclared equation factor. Require these product and determinant-line orientations to agree on chart overlaps and to be preserved by the stated group actions. All orientation conclusions below concern precisely these supplied data. Then near $(p_0,0)$ the zero set of $F$ is a $C^1$ manifold of dimension $\dim P+d$; its trivial-stabilizer locus $\{(p,x)\in F^{-1}(0):\{\gamma\in\Gamma:\alpha_P(\gamma,p)=p,\;\rho_B(\gamma)x=x\}=\{1\}\}$ has a free $\Gamma$-action and its quotient is a $C^1$ manifold. The specified coordinate-forgetting maps on the zero set are submersions; on free source and target loci their induced quotient maps are submersions. The zero-set orientation is induced by the parameter orientation (including $E$) followed by the Fredholm determinant-line orientation, with the finite exact-sequence convention specified in the proof. These are conditional local regularity conclusions; the analytic gluing estimates are hypotheses, not conclusions.

## Statement references

[[def-gts-pardon-implicit-atlas-and-vfc-package]]

[[def-gts-pardon-gromov-topology-on-stable-map-moduli]]

[[def-banach-space]]

[[def-fredholm-operator-cokernel-and-index]]

[[thm-banach-fixed-point]]

## Facts & Assumptions

**Given:** The Banach spaces, family $F$, Fredholm operators $D_p$, bounds, finite-group compatibility, explicit oriented factor $E$ of each parameter chart, and compatible parameter/determinant-line orientations in the Statement.

[F1] [[def-gts-pardon-implicit-atlas-and-vfc-package]]: an implicit atlas prescribes invariant regular thickening manifolds, extra-section projection models over preimages of lower regular loci, relative covering-group freeness, compatible zero-set quotients, and virtual orientation local systems. It does not demand transverse obstruction recording maps.

[F2] [[def-gts-pardon-gromov-topology-on-stable-map-moduli]]: the nodal smoothing parameters describe neighborhoods in the stable-map Gromov topology.

[F3] [[def-banach-space]] defines a real Banach space as a complete normed real vector space. [[def-fredholm-operator-cokernel-and-index]] defines a Fredholm operator as bounded with finite-dimensional kernel, closed range and finite-dimensional cokernel, and index $\dim\ker D-\dim\operatorname{coker}D$. [[thm-banach-fixed-point]] gives a unique fixed point for a contraction of a nonempty complete metric space into itself.

[A1] Pardon, Appendix B, Theorem B.1.1 and §§B.5–B.13: the intended application obtains the vanishing residual, uniformly bounded approximate right inverses, quadratic estimates and continuity from weighted Sobolev gluing. These source estimates have not been reconstructed as local suppliers; the present theorem assumes the explicit uniform bounds in its statement.

## Proof

1.1 Since $\|1_Y-D_pT_p\|\le\delta<1$, the Neumann series $(D_pT_p)^{-1}=\sum_{m\ge0}(1_Y-D_pT_p)^m$ converges in operator norm and has norm at most $(1-\delta)^{-1}$. Define $Q_p=T_p(D_pT_p)^{-1}$. Then $D_pQ_p=1_Y$ and $\|Q_p\|\le C_0$. Hence $B=\ker D_p\oplus\operatorname{im}Q_p$: for every $x$, write $x=(x-Q_pD_px)+Q_pD_px$, with the first summand in $\ker D_p$; if $Q_py\in\ker D_p$, then $y=D_pQ_py=0$. By [F3], the Fredholm index is $\dim\ker D_p-\dim\operatorname{coker}D_p$; the right inverse makes the cokernel zero, so the index equals $\dim\ker D_p=d$. [given, F3, algebra]

2.1 For $k\in\ker D_p$ with $\|k\|\le\rho$, the fundamental theorem of calculus along $tk$ and $D_pk=0$ give $\|F(p,k)\|\le\eta+L\rho^2/2$. For $y\in Y$ with $\|y\|\le r$, set $G_{p,k}(y)=y-F(p,k+Q_py)$. The derivative bound and $\|Q_p\|\le C_0$ give $\|D_yG_{p,k}(y)\|=\|1_Y-D_xF(p,k+Q_py)Q_p\|\le C_0L(\rho+C_0r)\le1/4$, since $D_pQ_p=1_Y$. [given, step 1.1, algebra]

3.1 Also $\|G_{p,k}(0)\|=\|F(p,k)\|\le r/2$. For $\|y\|\le r$, step 2.1 gives $\|G_{p,k}(y)\|\le\|G_{p,k}(0)\|+\|y\|/4\le3r/4$, so the closed radius-$r$ ball is mapped into itself. It is nonempty because it contains $0$. It is complete: a Cauchy sequence $y_j$ in this ball converges to some $y\in Y$ by the Banach completeness in [F3], and $|\|y\|-\|y_j\||\le\|y-y_j\|\to0$ gives $\|y\|\le r$, so the limit remains in the ball. The derivative bound makes $G_{p,k}$ a contraction there with constant at most $1/4$. By [F3] it has a unique fixed point $y(p,k)$ in that ball, equivalently $F(p,k+Q_py(p,k))=0$. [F3, given, step 1.1, step 2.1, construct]

4.1 In a $C^1$ local trivialization of the kernel bundle put $x=(p,k)$ and $H(x,y)=F(p,k+Q_py)$. Its derivative in $y$ is $D_yH=D_xF(p,k+Q_py)Q_p=1_Y+(D_xF-D_p)Q_p$. The perturbation of $1_Y$ has norm at most $C_0L(\rho+C_0r)\le1/4$, so $D_yH$ is invertible by its Neumann series, with a uniformly bounded inverse. Fix $x$ and put $y_0=y(x)$. Comparing the two fixed-point equations with $y_0$ held fixed gives $\|y(x')-y_0\|\le\tfrac14\|y(x')-y_0\|+\|G_{x'}(y_0)-G_x(y_0)\|$. Hence $\|y(x')-y_0\|\le\tfrac43\|G_{x'}(y_0)-G_x(y_0)\|\to0$ by continuity at the single point $(x,y_0)$. This proves continuity without a uniform derivative bound on the entire Banach ball. Continuity of $D_xG$ at $(x,y_0)$ now bounds it on a product neighborhood of this point. Shrink the finite-dimensional parameter neighborhood to a convex ball; the already proved continuity keeps $y(x')$ in that product neighborhood. Integrating $D_xG$ along the parameter segment, at the fixed value $y(x')$, and using the same contraction comparison gives a local bound $\|y(x')-y(x'')\|\le C\|x'-x''\|$. For an increment $h$ in the finite-dimensional $x$ variables, expand $H(x+h,y(x+h))-H(x,y(x))=0$. The preceding Lipschitz bound and Fréchet differentiability give $y(x+h)-y(x)=-(D_yH)^{-1}D_xH\,h+o(\|h\|)$. This derivative is continuous because $H$ is $C^1$, $y$ is continuous, and inversion is continuous on boundedly invertible operators. Thus $y(x)$ is $C^1$, with no implicit-function theorem invocation. Conversely, a sufficiently small zero $z$ decomposes uniquely as $z=k+Q_p y$ with $y=D_pz$ and $k=z-Q_pD_pz$; continuity of these projections makes $\|k\|<\rho$ and $\|y\|<r$ after shrinking the neighborhood. It is then the unique fixed point above. The zero set is locally a $C^1$ graph over $(p,k)$ and has dimension $\dim P+d$. [given, step 1.1, step 2.1, step 3.1, algebra]

5.1 Each specified forgetting map is the coordinate projection on the graph coordinates $(p,k)$ of step 4.1. Its derivative is surjective, so it is a submersion on the zero set. The assumed equivariance makes $F^{-1}(0)$ invariant under $\Gamma$. For a point with trivial stabilizer, finiteness of $\Gamma$ and Hausdorffness of the zero-set chart let us choose a neighborhood disjoint from each of its nonidentity translates; its quotient map is therefore a $C^1$ chart. These charts give a $C^1$ manifold on the trivial-stabilizer quotient. On loci where source and target stabilizers are trivial, the equivariant forgetting maps descend, and the quotient charts identify them locally with the original submersions. [given, F1, step 4.1, construct, algebra]

6.1 At a solution $z=(p,x)$ in the graph chart put $A=D_xF(p,x)$. By the same bound as in step 4.1, $AQ_p$ is invertible; hence $R=Q_p(AQ_p)^{-1}$ is a right inverse of $A$. The map $k\mapsto k-RAk$ identifies $\ker D_p$ with $\ker A$: its inverse is the projection $v\mapsto v-Q_pD_pv$ from step 1.1, as follows by writing $v=k+Q_py$ and solving $Ak+AQ_py=0$. This is a continuous family of finite-dimensional isomorphisms and equals the identity at $x=0$; continuity suffices for transporting orientations. Both $D_p$ and $A$ are surjective, so their determinant lines are the top exterior lines of their kernels, with the zero-cokernel factor canonically $\mathbb R$. Transport the supplied orientation of $\det(D_p)$ through this isomorphism to $\det A$. The finite-dimensional exact sequence
$$0\longrightarrow\ker A\longrightarrow T_zZ(F)\xrightarrow{\operatorname{pr}_{TP}}T_pP\longrightarrow0$$
has first map $b\mapsto(0,b)$ and is surjective at the last term: for $v\in T_pP$, $(v,-R D_{\mathrm{par}}F(p,x)v)$ lies in the tangent kernel of the total derivative, where $D_{\mathrm{par}}F$ here denotes the derivative in the parameter variable. Wedge a kernel basis followed by lifts of a parameter basis, then reorder the two determinant factors with the fixed sign $(-1)^{d\dim P}$ to use the parameter-first convention. This identifies the oriented zero-set determinant with $\det(T_pP)\otimes\det A$. Since $p=(a,e)$ and $F((a,e),x)=0$, the $E$ orientation occurs precisely once in $\det(T_pP)=\det(T_aP_{\mathrm{base}})\otimes\det E$. There is no orientation of an infinite-dimensional equation space being taken. The supplied overlap and group-action compatibility therefore orients the local zero sets consistently and descends on the free quotient. These conclusions give the stated conditional smooth-thickening regularity. An application must still verify the relative extra-section projection models and covering-group conditions in [F1]; coordinate forgetting on a solution manifold alone is not their proof. The weighted analytic estimates in [A1] remain inputs. [given, F1, A1, step 1.1, step 3.1, step 4.1, step 5.1] ∎ 
