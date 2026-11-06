---
id: lem-finite-energy-almost-complex-puncture-removability
kind: lemma
title: Finite-energy interior and totally real boundary puncture removability
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
deps:
- def-countable-choice
- lem-interior-energy-regularity-for-smooth-almost-complex-strips
- lem-boundary-energy-regularity-for-totally-real-strips
- lem-continuous-weak-almost-complex-strip-solutions-are-smooth
- thm-euclidean-inverse-function-theorem
- thm-higher-regularity-of-local-inverses
dependency_level: 3
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Aleksey Zinger, Notes on J-Holomorphic Maps
    url: https://arxiv.org/pdf/1706.00331v1
    locator: 'Section 5.1, Proposition 5.1, printed pp.37–38: autonomous interior finite-energy puncture removability
      on a compact almost-complex target. Source-dependent coefficients and the boundary case are additional local
      proof obligations, supplied below.'
  - title: Urs Frauenfelder and Kai Zehmisch, Gromov compactness for holomorphic discs with totally real boundary
      conditions
    url: https://arxiv.org/pdf/1403.6139v2
    locator: 'Section 2.4, printed p.6: autonomous totally real boundary removability via local symplectic replacement
      and the cited McDuff–Salamon theorem. This article does not reconstruct that cited full regularity proof;
      the continuous extension, weak filling and boundary smoothness are proved locally below.'
domain: mathematics
library: physics
dependency_roles:
  def-countable-choice: mathematical-premise
  lem-interior-energy-regularity-for-smooth-almost-complex-strips: mathematical-premise
  lem-boundary-energy-regularity-for-totally-real-strips: mathematical-premise
  lem-continuous-weak-almost-complex-strip-solutions-are-smooth: mathematical-premise
  thm-euclidean-inverse-function-theorem: mathematical-premise
  thm-higher-regularity-of-local-inverses: mathematical-premise
verification:
  precheck: pass
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
---

## Statement

Assume Countable Choice. Let $(X,g)$ be a compact smooth manifold and let $J(z,x)$ be a smooth family of almost complex structures for $z$ in a disk about $0$, smooth also at $z=0$. A smooth solution $u_s+J(z,u)u_t=0$ on the punctured disk with finite Dirichlet energy extends smoothly over $0$.

The same holds on a punctured upper half-disk with boundary on a fixed compact totally real submanifold $L\subset X$, provided $J(z,x)=J(0,x)$ for $x\in L$ and real $z$ near $0$. Smoothness and the boundary condition of $u$ are assumed up to the two open straight boundary intervals. The extension is smooth up to the filled boundary point and remains on $L$ there.

In particular, for autonomous $J(x)$, every finite-energy smooth plane map extends over infinity to a smooth $J$-holomorphic sphere, and every finite-energy smooth upper-half-plane map with compact totally real boundary extends over infinity to a smooth disk. No bubble-tree, energy identity for a sequence, or gluing statement is included.

## Statement references

[[def-countable-choice]]

## Facts & Assumptions

**Given:** The compact smooth target, smooth almost complex family, punctured-domain solution, finite energy, and, when present, the fixed totally real boundary data in the statement.

[F1] The actual interior and totally real boundary small-energy derivative estimates are [[lem-interior-energy-regularity-for-smooth-almost-complex-strips]] and [[lem-boundary-energy-regularity-for-totally-real-strips]]. The latter states the half-dimensional case and requires the boundary complex structure restricted to $L$ to be independent of its tangential source coordinate. Step 1.0 supplies the extension of its proof to a lower-dimensional totally real $L$.

[F2] A continuous weak $W^{1,2}$ solution is smooth in local charts, including a flattened totally real boundary, by [[lem-continuous-weak-almost-complex-strip-solutions-are-smooth]].

[F3] The finite-dimensional smooth inverse results used below have actual proofs in [[thm-euclidean-inverse-function-theorem]] and [[thm-higher-regularity-of-local-inverses]].



## Proof

1.1 Here total reality means $TL\cap J(0)TL=0$; we retain also the possible dimensions below half the target dimension. The boundary small-energy proof extends to this case as follows. Put $J_b=J(0,\cdot)|_L$. Along $L$, put $E=TL\oplus J_bTL$ and choose the Hermitian metric $h(v,w)=g(v,w)+g(J_bv,J_bw)$. Its orthogonal complement $W=E^{\perp_h}$ is smooth and $J_b$-invariant. On $E$ define $g_L(a+J_bb,c+J_bd)=g(a,c)+g(b,d)$, and use $h$ on $W$, with $E\perp W$. Thus $J_b$ is orthogonal and $J_bTL\perp TL$. Extend this positive metric from $L$ to $X$ by the finite-chart convex construction of [F1], and use it throughout the proof; compactness makes its energy equivalent to the original one. The boundary-density computation in the boundary supplier Proof 2.1–3.1 uses only $u_s\in TL$, $u_t=J_bu_s$, this orthogonality, and the normal second fundamental form of $L$, not the equality $TX=TL\oplus J_bTL$. It therefore gives the identical bound $|(e_g)_t|\le c e_g^{3/2}+de_g$. The interior inequality and the scalar half-disk argument in that proof give its same small-energy estimates with this metric. For final weak boundary regularity, near any $p\in L$ choose a real half-dimensional plane containing $T_pL$ and transverse to its $J_b$ image: extend a complex basis of $T_pL\oplus J_bT_pL$ by a basis of $W_p$. In submanifold coordinates for $L$, adjoining the selected extra real coordinate directions defines a local half-dimensional submanifold $L^+$ containing $L$ with that tangent plane at $p$. Openness of transversality makes $L^+$ totally real in a smaller neighborhood for all nearby source parameters. Flatten $L^+$ there when applying [F2]; the actual boundary remains in the closed local submanifold $L$. These are finite local choices. [F1, F2, given, construct, algebra]

1.2 We first construct convenient finite-dimensional target data. Take finitely many coordinate charts $U_i$ and smaller relatively compact chart neighborhoods covering $X$. Euclidean smooth bumps supported in $U_i$, equal to one on those smaller neighborhoods, normalized by their positive sum, give a finite smooth partition $\phi_i$. The map $$F:X\longrightarrow\mathbb R^N,\qquad F(x)=(\phi_i(x),\phi_i(x)x_i(x))_i$$ is smooth, interpreting each coordinate product as zero off its compact support. It is injective: if $F(x)=F(y)$ choose $i$ with $\phi_i(x)>0$; the equal first coordinates and coordinate products give $x_i(x)=x_i(y)$. Its derivative is injective by the same argument: if $dF(v)=0$, then $d\phi_i(v)=0$ for all $i$, and at such an $i$ the product derivative gives $\phi_i dx_i(v)=0$. Compactness makes $F$ a homeomorphism onto its image, and [F3] in local coordinates gives smooth inverse charts on that image. Thus $F$ is a smooth embedding. Its induced derivative norms are uniformly equivalent to the original metric norms. No general embedding theorem is needed. [F3, given, construct, algebra]

1.3 Use cylindrical coordinates $z=-e^{-\sigma-i\tau}$ about the puncture and put $v(\sigma,\tau)=u(-e^{-\sigma-i\tau})$. The angular variable has period $2\pi$ in the interior case and lies in $[0,\pi]$ in the boundary case. This holomorphic coordinate change preserves the equation and Dirichlet energy: $$v_\sigma+J(-e^{-\sigma-i\tau},v)v_\tau=0,\qquad \int_{\sigma>S}(|v_\sigma|_g^2+|v_\tau|_g^2)<\infty,$$ with that tail integral tending to zero as $S\to\infty$. The composed coefficients have uniformly bounded derivatives of every fixed order; positive cylindrical source derivatives of $-e^{-\sigma-i\tau}$ are bounded and tend to zero. Their restriction to $L$ on the two physical boundary edges is the fixed structure $J(0,x)$, so [F1] applies uniformly on fixed-radius cylinder disks or boundary half-disks. Choose their radius smaller than $\pi/8$. Every point is covered by an interior estimate or a boundary half-radius estimate on such a patch. For sufficiently large $S$ the patch energies are below the fixed threshold, and [F1] gives $$\sup_{\tau}|dv(\sigma,\tau)|_g\longrightarrow0\quad(\sigma\to\infty).$$ This argument uses target-global estimates and assumes no prior containment in one target chart. [F1, given, construct, algebra]

2.1 Write $Y=F(X)$ and $P_x=dF_x$. Relative to $g$ and the Euclidean metric the map $Q_x=(P_x^*P_x)^{-1}P_x^*$ is a smooth left inverse of $P_x$. Define on $Y$ the smooth ambient operator $$K(z,F(x))=P_xJ(z,x)Q_x.$$ For $U=F\circ u$, the equation is $U_s+K(z,U)U_t=0$. These operators are uniformly bounded and Lipschitz in their $Y$ variable for $z$ near zero. To justify the global Lipschitz bound, on each of finitely many smaller image charts, bounded coordinate derivatives and the local inverse estimates bound operator differences by Euclidean chord length. All sufficiently close pairs of points lie in one such chart, by compactness and the Lebesgue-number property of a finite cover. For pairs whose distance is bounded below, boundedness of $K$ gives the same Lipschitz inequality after enlarging the constant. Also $|K(z,a)-K(0,a)|\le C|z|$ uniformly for $a\in Y$, by bounded source derivatives. [F3, step 1.2, construct, algebra]

2.2 For use in the boundary case we construct an ambient retraction $R$ from a neighborhood of $F(L)$ to $F(L)$ such that $$dR_{F(x)}\bigl(P_xJ(0,x)v\bigr)=0\qquad(v\in T_xL).$$ In the Euclidean ambient space let $$N_x=P_xJ(0,x)T_xL\oplus P_xW_x\oplus(P_xT_xX)^\perp.$$ The smooth complement $W_x$ from step 1.1 and total reality give $\mathbb R^N=P_xT_xL\oplus N_x$, also when $L$ has smaller dimension. In finite local frames of this smooth vector bundle, the derivative at $(x,0)$ of $\Psi(x,v)=F(x)+v$ is an isomorphism, so [F3] supplies smooth local inverses. The map is injective on $|v|<\delta$ for some uniform $\delta>0$. Otherwise choose collisions with both normal vectors tending to zero; compactness gives a subsequence of their base points converging, equality of the images forces the two limits equal, and the local inverse near that zero-section point contradicts the collisions. Its derivative remains invertible on a smaller uniform neighborhood by the same compactness argument. Consequently its image is an open neighborhood of $F(L)$, its local inverses agree, and projection to the base defines the claimed smooth retraction $R$. On a still smaller neighborhood its first two derivatives are bounded. The projection differential is the identity on $P_xT_xL$ and zero on $N_x$, proving the displayed property. [F3, step 1.2, given, construct, algebra]

2.3 Set $V=F\circ v$, and define $$e(\sigma)=\int_I|V_\tau(\sigma,\tau)|^2d\tau,\qquad b(\sigma)=\frac1{|I|}\int_I V(\sigma,\tau)d\tau,$$ where $I$ is one angular period or $[0,\pi]$. Then $\int_S^\infty e(\sigma)d\sigma<\infty$, $e(\sigma)\to0$, and $$\sup_\tau|V(\sigma,\tau)-b(\sigma)|\le C\sqrt{e(\sigma)}\longrightarrow0.$$ The last estimate follows from the fundamental theorem on the angular interval, Holder, and averaging. In particular every angular slice has vanishing diameter. The map $b$ is smooth for finite $\sigma$. [step 1.2, step 1.3, construct, algebra]

3.1 There is also a uniform quadratic chord estimate: for $a,a'\in F(L)$ sufficiently close, $$|dR_a K(0,a)(a'-a)|\le C|a'-a|^2.$$ Indeed choose a local smooth parametrization $\ell$ of $F(L)$ about $a$. Taylor's formula gives $a'-a=d\ell\,h+O(|h|^2)$ and the local inverse estimate gives $|h|\le C|a'-a|$. The operator $K(0,a)$ sends the first tangent term into $P_xJ(0,x)T_xL$, killed by $dR_a$ from step 2.2. Bounded second derivatives give the remainder estimate, uniformly by a finite cover. The same finite-cover argument gives $|dR_b-dR_a|\le C|b-a|$ when $a\in F(L)$ and $b$ is sufficiently close to $a$. [step 2.1, step 2.2, construct, algebra]

3.2 In the interior case choose $a=V(\sigma,0)$ and $K_0=K(0,a)$. Periodicity gives $\int_I V_\tau=0$. Therefore the equation and step 2.1 imply $$|b'(\sigma)|=\left|\frac1{|I|}\int_I(K_0-K(-e^{-\sigma-i\tau},V))V_\tau d\tau\right|\le C e(\sigma)+C e^{-\sigma}\sqrt{e(\sigma)}.$$ The right side is integrable: the first term by finite energy and the second by Holder against $e^{-\sigma}$. Thus $b$ has finite total variation on the infinite tail, hence has a Euclidean limit. Step 2.3 shows all $V(\sigma,\tau)$ approach that same limit uniformly in $\tau$. Since $Y$ is compact and closed, the limit lies in $Y$. [step 2.1, step 2.3, algebra]

4.1 In the boundary case $a=V(\sigma,0)$ and $a'=V(\sigma,\pi)$ lie in $F(L)$. For large $\sigma$, step 2.3 puts $b(\sigma)$ in the neighborhood of the retraction $R$. The same calculation now gives $$b'=-\frac1\pi K(0,a)(a'-a)+q,\qquad |q|\le C e(\sigma)+C e^{-\sigma}\sqrt{e(\sigma)}.$$ Let $c(\sigma)=R(b(\sigma))\in F(L)$. By step 3.1 and $|a'-a|+|b-a|\le C\sqrt{e(\sigma)}$, $$|dR_bK(0,a)(a'-a)|\le C\bigl(|a'-a|^2+|b-a|\,|a'-a|\bigr)\le C e(\sigma).$$ Boundedness of $dR$ therefore gives the same integrable bound for $|c'|$. Thus $c(\sigma)$ converges to a point of compact $F(L)$. Moreover $|b-c|\le C|b-a|\to0$, since $R(a)=a$, and step 2.3 proves that every $V(\sigma,\tau)$ converges uniformly to that same point. The endpoint contribution has been estimated quadratically, rather than discarded. [step 2.2, step 3.1, step 2.3, algebra]

5.1 By the inverse homeomorphism of $F$, steps 3.2 and 4.1 give a unique continuous extension of $u$ to the puncture, with value on $L$ in the boundary case. Localize now in a smooth target chart about that limiting value; in the boundary case use the local extension $L^+$ of step 1.1 and a smooth submanifold chart flattening $L^+$ to $\mathbb R^m$. The transformed map is continuous and has square-integrable first derivatives off zero. It belongs to $W^{1,2}$ across zero. For the interior assertion, multiply a compact test by a radial cutoff vanishing on radius $\varepsilon$ and equal to one outside radius $2\varepsilon$. In integration by parts the cutoff-error term is at most $C\|u\|_\infty\|\varphi\|_\infty\varepsilon$, since the cutoff gradient has $L^1$ norm $O(\varepsilon)$. All other terms converge by integrability. This proves the weak derivative identity on the whole disk with the original $L^2$ derivative. On a half-disk the identical cutoff argument works, or one can note that zero lies on its physical boundary and the weak identities in its open interior are already available with finite $L^2$ norm up to that edge. The equation holds almost everywhere and hence weakly after filling the measure-zero point. [step 1.2, step 3.2, step 4.1, construct, algebra]

6.1 The coordinate chain rule needed in step 5.1 follows by smooth mollification on smaller patches: continuity gives uniform convergence of coefficient compositions and the weak derivatives converge in $L^2$, so the classical smooth chain rule passes to distributions. Thus the transformed coefficients remain smooth, the enlarged boundary plane remains totally real, and all hypotheses of [F2] hold. That lemma proves a smooth extension, including the boundary case. Its boundary value lies in $L$ by step 4.1. The extension adds no energy, since its new point has measure zero. [F2, step 5.1, algebra]

7.1 Finally, for an autonomous plane solution use the holomorphic coordinate $z=1/w$ at infinity; conformal invariance preserves finite energy and produces a punctured-disk solution of the same autonomous equation. The proved interior assertion fills it and gives a sphere map. For an upper-half-plane solution use $z=-1/w$, which preserves the upper half-plane and its real boundary; the boundary assertion fills infinity. The upper half-plane together with that point is smoothly conformally a closed disk, as is seen explicitly by a Mobius map from the half-plane to the disk. All other finite boundary points were already smooth. These are statements about one finite-energy map; they do not infer compactification, no-neck convergence, or gluing for a sequence. [step 1.3, step 6.1, construct, algebra] ∎