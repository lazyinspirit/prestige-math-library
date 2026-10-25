from pathlib import Path
B=Path('items')
def replace_section(s,heading,body):
 a=s.index('## '+heading+'\n')+len(heading)+4;b=s.find('\n## ',a)
 return s[:a]+'\n'+body.strip()+'\n'+(s[b:]if b>=0 else'')
def deps(s,ids):
 a=s.index('deps:\n');b=s.index('proof_strategy:',a) if 'proof_strategy:' in s[a:] else s.index('provenance:',a)
 # Only deps/dependency_roles occupy this span in these carriers.
 return s[:a]+'deps:\n'+''.join('  - '+x+'\n'for x in ids)+'dependency_roles:\n'+''.join('  '+x+': mathematical-premise\n'for x in ids)+s[b:]
# Definition clarification: keep the actual incidence/ASD planes and local frame.
p=B/'def-qftx-coupled-penrose-incidence-geometry.md';s=p.read_text().replace('{Xin\\mathbb R^5','{X\\in\\mathbb R^5')
s=s.replace('They annihilate the displayed holomorphic coordinates. Together with the vertical vector $\\partial_{\\bar t}$ they form a direct frame of $T^{0,1}Z$ on this chart, splitting it into horizontal and vertical subbundles. Their projections to $T_{\\mathbb C}S^4$ form the complex alpha-plane at $[1:t]$; on $\\lambda_1=0$ the same plane and splitting are defined by the second projective chart.',r'''They annihilate the displayed holomorphic coordinates. Together with $\partial_{\bar t}$ they form a direct local frame of $T^{0,1}Z$. Here $H_i$ are the constant-$t$ chart lifts; their projected complex alpha-plane is intrinsic, but this chart splitting is not asserted to be the global metric splitting. Globally let $V^{0,1}=\ker(d\pi)\cap T^{0,1}Z$, and let $H^{0,1}$ be its Fubini–Study orthogonal complement. Its lifts project to the same alpha-planes and may differ from the displayed $H_i$ by vertical components. All global horizontal/vertical form decompositions use this orthogonal splitting; local computations may use the displayed constant-$t$ splitting after retaining the resulting frame and normalization factors. The second projective chart supplies the same alpha-plane at $t=\infty$.''')
p.write_text(s)
# Fibre groups from exact67 analytic interfaces, rather than a hidden comparison.
p=B/'lem-qftx-coupled-penrose-fibre-dolbeault.md';s=p.read_text();a=s.index('deps:\n');b=s.index('proof_strategy:',a);ids=['def-axiom-of-choice','def-qftx-coupled-penrose-incidence-geometry','lem-qftx-gaga-projective-cover-laurent-cohomology','thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology'];s=s[:a]+'deps:\n'+''.join('  - '+x+'\n'for x in ids)+'dependency_roles:\n'+''.join('  '+x+': mathematical-premise\n'for x in ids)+s[b:];s=s.replace('dependency_level: 1','dependency_level: 3').replace('inherited from harmonic-star duality.','inherited from the analytic Laurent–Čech and Dolbeault-resolution suppliers.')
s=replace_section(s,'Facts & Assumptions',r'''
**Given:** The two projective charts of $L=\mathbb CP^1$, their ordinary holomorphic twisting bundles, and full AC.

[F1] The tautological frame satisfies $e_\infty=t^{-1}e_0$; hence the degree-$-k$ coefficient transition is $f_0(t)=t^{-k}f_\infty(1/t)$. The canonical transition $d(1/t)=-t^{-2}dt$ identifies $K_L$ with $\mathcal O_L(-2)$, with a harmless constant sign in one local frame. [[def-qftx-coupled-penrose-incidence-geometry]]

[F2] For the standard projective cover and $k=0,-1,-r-1$, the actual analytic twisting sheaves have acyclic intersections; their analytic sheaf cohomology is the normally convergent Laurent–Čech complex. For every integer twist, restrictions preserve Laurent coefficients and the stated mode contractions converge on the output charts. [[lem-qftx-gaga-projective-cover-laurent-cohomology]]

[F3] Under full AC, every finite-rank holomorphic bundle on $\mathbb P^r(\mathbb C)$ for $0\le r\le3$ has its analytic sheaf cohomology canonically identified with the global smooth Dolbeault quotient. This is a Dolbeault-resolution comparison, not algebraic-to-analytic GAGA. [[thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology]]

[A1] Full AC is assumed, as required by [F2]–[F3]. [[def-axiom-of-choice]]
''')
s=replace_section(s,'Proof',r'''
**Given:** [F1]–[F3] and [A1].

1.1 A global section of $\mathcal O(-k)$, $k=1,2$, would have an entire coefficient $f_0(t)$ with $f_0(t)=t^{-k}f_\infty(1/t)$. By the normally convergent expansions in [F2], the left side has only powers $t^n$ with $n\ge0$, whereas the right side has only powers $t^n$ with $n\le-k$. Uniqueness of Laurent coefficients forces every coefficient to vanish. Thus both degree-zero groups vanish. [F1, F2, A1, given, algebra]

2.1 A one-cochain on the two-chart overlap has a normally convergent Laurent expansion $g(t)=\sum_{n\in\mathbb Z}a_nt^n$. Coboundaries subtract the entire $t$-series with $n\ge0$ and the series $t^{-k}f_\infty(1/t)$ with $n\le-k$. These two tails converge on their respective entire charts by [F2]; the cover is acyclic for both twists because $r=1$ and $k=1,2$. For $k=1$ they exhaust every integer exponent, so the analytic first cohomology is zero. For $k=2$ the sole remaining exponent is $n=-1$; its coefficient cannot be a coboundary, and it identifies the analytic first cohomology with $\mathbb C$. [F1, F2, A1, step 1.1, algebra]

3.1 Apply [F3] to the two holomorphic line bundles on $L$. Its hypotheses hold for $r=1$ and the full AC assumption [A1]. It converts precisely the analytic sheaf groups computed in steps 1.1–2.1 to the smooth Dolbeault groups in the Statement. The transition calculation in [F1] gives $K_L\cong\mathcal O(-2)$. No scheme cohomology or unproved analytic/algebraic comparison is used. [F1, F3, A1, step 1.1, step 2.1, algebra] ∎
''')
s=s.replace('[[thm-harmonic-star-duality-for-line-bundle-valued-dolbeault-cohomology]]','[[lem-qftx-gaga-projective-cover-laurent-cohomology]]').replace('[[thm-serre-duality-compact-riemann-surfaces]]','[[thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology]]');p.write_text(s)
# The global edge: relative filtered Dolbeault complex and fixed-fibre Green.
p=B/'lem-qftx-coupled-penrose-injective-edge.md';s=p.read_text();s=s.replace('dependency_level: 3','dependency_level: 4');x='  - thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology\n';s=s.replace(x,x+'  - thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition\n',1);x='  thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology: mathematical-premise\n';s=s.replace(x,x+'  thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition: mathematical-premise\n',1)
s=s.replace(' The analytic comparison input is a conditional premise of this statement until its planned batch-67 carrier and proof are present and current.',' The comparison is supplied by the local analytic Dolbeault-resolution theorem; no algebraic-to-analytic comparison is assumed.')
s=replace_section(s,'Facts & Assumptions',r'''
**Given:** Full AC, the holomorphic pullback bundle with the stated connection Dolbeault operator, the global incidence fibration and its metric splitting.

[A1] For every finite-rank holomorphic bundle $G$ on $\mathbb P^r(\mathbb C)$, $0\le r\le3$, analytic sheaf cohomology is canonically the global smooth Dolbeault quotient. [[thm-qftx-gaga-analytic-projective-dolbeault-scalar-cohomology]]

[F1] The incidence fixes the ordinary complex structure on each projective-line fibre, the intrinsic alpha-planes, the local constant-$t$ lifts, and the global Fubini–Study orthogonal splitting. [[def-qftx-coupled-penrose-incidence-geometry]]

[F2] On $\mathbb CP^1$, $H^{0,0}(\mathcal O(-2))=0$, $H^{0,1}(\mathcal O(-2))\cong\mathbb C$, and both Dolbeault groups of $\mathcal O(-1)$ vanish. [[lem-qftx-coupled-penrose-fibre-dolbeault]]

[F3] On a compact Hermitian complex manifold with a finite-rank Hermitian holomorphic bundle, the Dolbeault Laplacian has harmonic projection $\Pi$ and Green inverse $G$, and a closed smooth form $f$ satisfies $f=\Pi f+\bar\partial\bar\partial^*Gf$. No sheaf comparison is included in this assertion. [[thm-hodge-laplacian-kernel-represents-de-rham-and-dolbeault-cohomology]]

[F4] For these compact positive-symbol Laplace-type operators, $G:H^m\to H^{m+2}$ is bounded for every integer $m\ge0$; its smooth restriction is continuous in every smooth seminorm. [[thm-sobolev-compactness-and-elliptic-estimates-give-fredholm-hodge-decomposition]]

[A2] Full AC is assumed as required by the analytic and harmonic suppliers. [[def-axiom-of-choice]]
''')
s=replace_section(s,'Proof',r'''
**Given:** [A1]–[A2] and [F1]–[F4].

1.1 Write $V^{0,1}$ for the vertical tangent and use [F1]'s global orthogonal complement. Filter the smooth Dolbeault complex of $F(-2)$ by the number of horizontal covectors. Vertical restriction is the ordinary fibre Dolbeault operator. The differential has components of horizontal/vertical bidegrees $(0,1)$, $(1,0)$ and potentially $(2,-1)$; the last is the curvature of the splitting, so a bicomplex with only two differentials is not presumed. On a form annihilating vertical tangent, the mixed component is the intrinsic vertical Bott/Dolbeault operator on the horizontal coefficient bundle: it is obtained by evaluating $\bar\partial$ on one vertical and one horizontal vector. This description is independent of the lift of the horizontal vector. In the constant-$t$ local frame the vectors $\partial_{\bar t},H_1,H_2$ commute; hence that coefficient operator is ordinary $\partial_{\bar t}$. [F1, given, construct, algebra]

2.1 Let $Q_x\subset\mathbb C^4$ be the quaternionic two-plane over $x$. Its Hermitian quaternionic structure gives a canonical complex alternating volume form $\delta_x$: every frame $(v,jv)$ of unit norm has determinant one for this form, and the changes are in $SU(2)$. On $L_x=\mathbb P(Q_x)$, the identity $K_{L_x}=\det(Q_x)^*\otimes\mathcal O(-2)|_{L_x}$ therefore gives an intrinsic isomorphism $\iota_x:\mathcal O(-2)|_{L_x}\to K_{L_x}$. In the finite incidence chart put $a=1+r^2$, $q=1+|t|^2$, $v_1=(1,0,z_1,z_2)$, $v_2=(0,1,-\bar z_2,\bar z_1)$ and $e=(v_1+t v_2)^{\otimes2}$. The two $v_i$ are orthogonal with squared norm $a$, so $\delta_x(v_1,v_2)=a$ and $\iota_x(e)=a\,dt$. The tautological metric is $\|e\|^2=a^2q^2$. The harmonic vertical form is
$$\sigma_x=\frac{i}{2\pi}\frac{e\,d\bar t}{a q^2}.$$
Indeed its weighted coefficient $\|e\|^2/(a q^2)=a$ is holomorphic in $t$, so the local formal-adjoint equation is zero; [F2]–[F3] make the harmonic line one-dimensional. Moreover $\int_{L_x}\iota_x(\sigma_x)=\frac{i}{2\pi}\int_{\mathbb C}dt\wedge d\bar t/q^2=1$. This fixes both scale and phase. The intrinsic metric/volume construction proves agreement on projective and base-chart overlaps, including infinity, and smooth dependence on $x$. Extend this vertical form by zero on the global orthogonal horizontal complement to obtain $\sigma$. This extension need not be Dolbeault closed. [F1, F2, F3, given, construct, algebra]

3.1 Smoothness of the needed primitive does not require a theorem about varying complex structures. Choose smooth unit quaternionic frames of $Q_x$ on a base neighborhood and a smooth unitary frame of $E$. These identify the vertical problem exactly with the fixed $SU(2)$-invariant Hermitian $\mathcal O(-2)$ problem on $\mathbb CP^1$, componentwise in $E_x$. Set $B=\bar\partial^*G$ on vertical degree one. By [F3], $\bar\partial B=I-\Pi$, and by [F2] its degree-zero kernel is zero. The estimates [F4] and the first-order nature of $\bar\partial^*$ give $B:H^m\to H^{m+1}$ bounded for each $m$. For jointly smooth $f(x,t)$, base difference quotients converge in every fibre $H^m$ uniformly on compact base sets, by the Taylor formula and compactness of the fibre. Applying the fixed bounded $B$ shows $\partial_x^\beta(Bf)=B(\partial_x^\beta f)$ at every order in every $H^{m+1}$. Sobolev embedding on the fixed two-dimensional compact fibre, with arbitrarily large $m$, gives joint smoothness in $(x,t)$. The same reasoning applies to the fixed $\mathcal O(-1)$ problem below. Thus no moving-cokernel inverse or unproved parametric Green assertion is used. [F2, F3, F4, step 2.1, algebra]

4.1 By [A1], a sheaf class has a global smooth closed representative $\alpha$. Its vertical restriction has harmonic part $s(x)\sigma_x$, where $s(x)=\int_{L_x}\iota_x(\alpha_V)$ componentwise in $E_x$. This is smooth by integration over compact fibres. Solve $\gamma_x=B(\alpha_V-s\sigma_x)$; then $\bar\partial_V\gamma_x=\alpha_V-s\sigma_x$. Step 3.1 makes $\gamma$ smooth. A change of unit quaternionic frame acts by an $SU(2)$ fibre isometry and a change of unitary $E$ frame acts by a matrix constant on each fibre; both preserve the equation. Uniqueness from $H^{0,0}(\mathcal O(-2))=0$ makes these local solutions agree. Hence $\gamma$ is global and $\alpha_H:=\alpha-s\sigma-\bar\partial_F\gamma$ annihilates vertical tangent, proving the asserted decomposition. The harmonic/exact orthogonality and the same zero kernel prove its uniqueness. [A1, F1, F2, F3, step 2.1, step 3.1, construct]

5.1 Replacing $\alpha$ by $\alpha+\bar\partial_F\beta$ changes its vertical restriction by $\bar\partial_V\beta$; its harmonic projection and integral against the fibre trace are zero. Thus $s$ depends only on the cohomology class, and the construction is linear. It is a section of $E$, not of an unspecified conformal-weight line, because the metric quaternionic volume in step 2.1 supplies the precise canonical identification of the harmonic line with $\mathbb C$. [F2, F3, step 2.1, step 4.1, algebra]

6.1 In the second projective chart $u=1/t$, the constant-coordinate horizontal vectors satisfy $\widetilde H_i=uH_i$. The intrinsic horizontal cotangent quotient therefore restricts to $\mathcal O(1)^{\oplus2}$; after the $\mathcal O(-2)$ twist its coefficient bundle is $\mathcal O(-1)^{\oplus2}\otimes E_x$. This transition determines the vertical Bott holomorphic structure from step 1.1, rather than assuming a normal-bundle or generic Penrose theorem. If $s=0$, closedness gives $\bar\partial_F\alpha_H=0$, since $\bar\partial_F^2=0$. Its mixed component says that $\alpha_H|_{L_x}$ is holomorphic for precisely this coefficient bundle. By [F2] it is zero on each fibre. Thus $\alpha=\bar\partial_F\gamma$ globally, proving injectivity, including zero rank. [F1, F2, step 1.1, step 4.1, step 5.1, algebra] ∎
''')
p.write_text(s)
