---
id: thm-quasicircle-characterizations
kind: theorem
title: Bounded turning, quasiconformal images of the circle, and quasiconformal reflections
status: published
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 12
deps:
  - def-quasisymmetric-circle-homeomorphism
  - thm-disc-automorphisms-are-rotated-blaschke-factors
  - lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality
  - lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds
  - thm-beurling-ahlfors-extension
  - lem-smooth-arcs-and-circles-are-removable-for-quasiconformal-maps
  - def-quasicircle
  - thm-jordan-brouwer-separation
  - lem-riemann-maps-of-jordan-domains-extend-homeomorphically
  - def-acl-sobolev-quasiconformal-homeomorphism
  - thm-composition-and-inverse-quasiconformal
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - def-mobius-transformation
  - thm-mobius-transformations-biholomorphic-sphere
  - def-riemann-sphere-holomorphic-charts
  - def-wirtinger-derivatives
  - thm-wirtinger-chain-rule-for-real-differentiable-maps
  - def-extremal-length-and-curve-family-modulus
  - thm-extremal-length-conformal-invariance-and-monotonicity
  - thm-modulus-rectangle-and-annulus
  - lem-complex-conjugation-and-modulus-laws
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
axiom_use: Assume AC for the ACL quasiconformal convention, the Jordan-boundary maps, Beurling–Ahlfors extension, composition and smooth-curve gluing. Countable Choice is used by the extremal-length and gluing interfaces and follows from AC by [[thm-choice-implies-dependent-implies-countable-choice]].
sources:
  scraped: []
  references:
    - title: "Lars V. Ahlfors, Quasiconformal reflections, Acta Mathematica 109 (1963), 291–301"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5956-11511_2006_Article_BF02391816.pdf"
      locator: "Part I §§2–5, printed English Acta pp. 294–297: Lemmas 1–2 and Theorem 1 characterize curves admitting a quasiconformal reflection by the three-point/cross-ratio condition; §5 proves the boundary correspondence is quasisymmetric by extremal-distance estimates and invokes the Beurling–Ahlfors extension. The source reflection need not be an involution; this item constructs an involution separately from a quasiconformal circle image."
    - title: "Frederick J. Gehring, Characterizations of quasidisks, Banach Center Publications 48 (1999), 11–41"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S25/Characterizations_of_quasidisks.pdf"
      locator: "§II.B, printed pp. 17–18, Lemma 6 and Corollary 8: the two-point inequality and alternating four-point reversed triangle inequality are equivalent, with constants b=2M(M+1) and M=2b."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §15.3.1, Definition 15.9, printed pp. 209–210: bounded-turning definition of a quasicircle; used for the intrinsic condition and source terminology."
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $\Gamma\subset\widehat{\mathbb C}$ be a Jordan curve. For clause (ii), choose a Möbius coordinate $\chi$ with $\infty\notin\chi(\Gamma)$ and measure Euclidean distances and diameters on $\chi(\Gamma)$. The equivalent four-point formulation below is Möbius invariant, so the criterion applies to curves in any sphere position.

(i) $\Gamma$ is a $K$-quasicircle: it is the image of $\mathbb S^1$ under a $K$-quasiconformal sphere homeomorphism ([[def-quasicircle]]).

(ii) $\Gamma$ has **bounded turning** with constant $M$: for every $x,y\in\chi(\Gamma)$, one of the two arcs $\delta\subset\chi(\Gamma)$ with endpoints $x,y$ satisfies $\operatorname{diam}\delta\le M|x-y|$. Equivalently, if $\gamma_1,\gamma_2$ are the components of $\chi(\Gamma)\setminus\{x,y\}$, then $\min_j\operatorname{diam}\gamma_j\le M|x-y|$. Equivalently, for every four distinct points in alternating order, so that $z_1,z_3$ separate $z_2,z_4$ on the curve,
$$|z_1-z_2||z_3-z_4|+|z_2-z_3||z_4-z_1|\le b|z_1-z_3||z_2-z_4|.$$
The constants satisfy the explicit implications $b=2M(M+1)$ and $M=2b$.

(iii) $\Gamma$ admits a **quasiconformal reflection**: an orientation-reversing quasiconformal involution $\sigma:\widehat{\mathbb C}\to\widehat{\mathbb C}$ with $\sigma^2=\mathrm{id}$, fixed-point set exactly $\Gamma$, and which interchanges the two complementary components.

The three conditions are equivalent with quantitative control: each of $K$, $M$, and the reflection dilatation can be bounded by a function of either of the others. No closed formula for these general functions is asserted.

## Facts & Assumptions

**Given:** AC, a Jordan curve $\Gamma\subset\widehat{\mathbb C}$, and the bounded-turning and quasiconformal conventions above.

[F1] For a Jordan curve in a finite chart, the two-point bounded-turning condition and the alternating four-point reversed triangle inequality are equivalent. If the two-point constant is $M$, the reversed-triangle constant can be $b=2M(M+1)$; conversely $M=2b$ suffices ([[def-quasicircle]], Gehring, §II.B Lemma 6).

[F2] Every analytic $K$-quasiconformal plane homeomorphism has global Euclidean quasisymmetry control depending only on $K$ ([[lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality]], auxiliary Remark). Its analytic-to-metric proof uses the earlier modulus argument; the separately authorized qualitative metric-to-analytic citation is not needed here.

[F3] Conformal maps of the two Jordan components extend homeomorphically to their closures ([[lem-riemann-maps-of-jordan-domains-extend-homeomorphically]]).

[F4] Every increasing quasisymmetric homeomorphism of $\mathbb R$ has a quasiconformal extension of the sphere preserving $\mathbb R\cup\{\infty\}$ and fixing $\infty$ ([[thm-beurling-ahlfors-extension]]). Because its boundary restriction is increasing, an orientation-preserving extension maps each half-plane to itself; swapping them would reverse the induced boundary orientation.

[F5] A continuous sphere homeomorphism that is quasiconformal on both sides of a straight line or round circle is quasiconformal on the whole sphere, with the same bound ([[lem-smooth-arcs-and-circles-are-removable-for-quasiconformal-maps]]).

[F6] Every disc automorphism has a circle-preserving Möbius extension ([[thm-disc-automorphisms-are-rotated-blaschke-factors]]). Orientation-preserving quasiconformal maps and their inverses are closed under composition, with dilatations multiplying ([[thm-composition-and-inverse-quasiconformal]]). In holomorphic charts, conformal and anticonformal coordinate changes multiply both singular values by the same factor, so they preserve the dilatation ratio ([[def-wirtinger-derivatives]], [[thm-wirtinger-chain-rule-for-real-differentiable-maps]]); Möbius maps are conformal on the sphere ([[def-mobius-transformation]], [[thm-mobius-transformations-biholomorphic-sphere]]).

[F7] The map $\tau(z)=1/\overline z$ is an orientation-reversing anticonformal involution of the sphere, fixes $\mathbb S^1$ pointwise, and interchanges $\mathbb D$ with its exterior ([[def-unit-disc-upper-half-plane-and-blaschke-factor]], [[lem-complex-conjugation-and-modulus-laws]]).

[F8] AC implies Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

[F9] Extremal length is conformally invariant, and a round annulus has connecting extremal length $(2\pi)^{-1}\log(R/r)$ ([[def-extremal-length-and-curve-family-modulus]], [[thm-extremal-length-conformal-invariance-and-monotonicity]], [[thm-modulus-rectangle-and-annulus]]). For marked Jordan quadrilaterals, the two complementary joining-family extremal lengths multiply to one; their conformal invariance includes boundary-joining families ([[lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds]], steps 1.3 and 2.2 and auxiliary Remark). Möbius chart changes transfer these facts to spherical Jordan components. The length-area estimates below use only these interfaces.

## Proof

**Proof technique:** derive necessity from global plane quasisymmetry and sufficiency by the explicit extremal-distance comparison, then extend and glue; reflections follow by conjugation.

1.1 The two-point and four-point formulations in (ii) are the Gehring equivalence in [F1]. For the forward constant, order the four points so $|z_1-z_3|\le|z_2-z_4|$ and label the two arcs from $z_1$ to $z_3$ so the arc through $z_2$ has smaller diameter. Then $|z_1-z_2|,|z_2-z_3|\le M|z_1-z_3|$, while the triangle inequality gives $|z_3-z_4|,|z_4-z_1|\le(M+1)|z_2-z_4|$; adding the two products gives $b=2M(M+1)$. Conversely, if both arcs from $z_1$ to $z_3$ had diameter greater than $2b|z_1-z_3|$, choose $z_2,z_4$ on the two arcs with $|z_1-z_2|,|z_1-z_4|>b|z_1-z_3|$. The two products on the left would sum to more than $b|z_1-z_3|(|z_2-z_3|+|z_3-z_4|)$, at least the right side by the triangle inequality. [F1, given, algebra]

1.2 Suppose (i), and take a $K$-quasiconformal sphere map $W$ with $W(\mathbb S^1)=\Gamma$. Then $\sigma=W\circ\tau\circ W^{-1}$ is an orientation-reversing quasiconformal involution with fixed set exactly $\Gamma$, interchanging the two components and with dilatation at most $K^2$ by [F6]. To prove (ii), put $W_0=\chi\circ W$ and $q=W_0^{-1}(\infty)\notin\mathbb S^1$. There is a circle-preserving Möbius map $A$ taking $\infty$ to $q$: if $q\in\mathbb D$, compose $z\mapsto1/z$ with a disc automorphism taking $0$ to $q$; if $q$ is in the exterior, conjugate the analogous disc map by $z\mapsto1/z$; for $q=\infty$ use the identity. Thus $V=W_0\circ A$ fixes infinity and is a $K$-quasiconformal plane homeomorphism. Given $x,y\in\mathbb S^1$, every point $u$ of their shorter circle arc satisfies $|u-x|\le|y-x|$. By [F2], $|V(u)-V(x)|\le\eta_K(1)|V(y)-V(x)|$. The image arc consequently has diameter at most $2\eta_K(1)|V(y)-V(x)|$. This gives (ii) with a bound depending only on $K$, in the stipulated finite chart. [F2, F6, F7, given, construct, algebra]

2.1 Assume (ii). In the four-point inequality each product transforms under a Möbius map by the same factor, as follows from $|T(z)-T(w)|=|\det T|\,|z-w|/(|cz+d||cw+d|)$; hence it is invariant, including poles by limits. Send one curve point to infinity and write $\Lambda=T(\chi(\Gamma))$. Let $C=b$. Letting the fourth point tend to infinity gives, for consecutive finite points $P_1,P_2,P_3$ on this generalized line, $|P_1-P_2|+|P_2-P_3|\le C|P_1-P_3|$. Choose boundary-extended conformal maps $f:\mathbb H\to\Omega_+$ and $g:\mathbb H^-\to\Omega_-$ with $f(\infty)=g(\infty)=\infty$. The boundary correspondence $h=g^{-1}\circ f$ fixes infinity and is increasing because the source and target boundary orientations on the two sides are both opposite. Countable Choice required by the extremal-length interfaces follows from AC by [F8]. We establish the adjacent-interval bound by the following length-area calculation. For an ordered triple on $\Lambda$, put $\alpha=P_2P_3$, $\alpha'=P_1P_2$, $\beta=P_1\infty$ on the ray avoiding $P_3$, and $\beta'=P_3\infty$ on the other ray. By [F9], their joining extremal distances $D,D'$ in $\Omega_+$ satisfy $DD'=1$, and likewise $D_*D_*'=1$ in $\Omega_-$. For $P_j=f(x_j)$ with $x_2-x_1=x_3-x_2$, $D=D'=1$: after affine normalization the upper-half-plane quadruple is $(0,1,2,\infty)$, and the upper-half-plane automorphism $z\mapsto(2z-2)/z$ interchanges the complementary marked pairs. Reciprocity then forces their equal positive values to be one. [F1, F3, F6, F8, F9, step 1.1, construct, algebra]

3.1 Put $a=|P_1-P_2|$, $d=|P_2-P_3|$ for the triple in step 2.1. The ordered-triple bound puts $\alpha$ inside the disk about $P_2$ of radius $Cd$ and keeps $\beta$ outside the disk of radius $a/C$. If $a>C^2d$, every joining path crosses the intervening round annulus. Its radial density $1/|z-P_2|$ gives $D\ge(2\pi)^{-1}\log(a/(C^2d))$; restriction to either side only lowers its density area. Since $D=1$, $a/d\le C^2e^{2\pi}$. Applying the same argument to $\alpha',\beta'$ and $D'=1$ gives $d/a\le C^2e^{2\pi}$. For $Q_1\in\alpha$, $Q_2\in\beta$, repeated ordered-triple bounds give $|Q_1-Q_2|\ge C^{-1}|Q_1-P_1|\ge C^{-2}a\ge C^{-4}e^{-2\pi}d$. Set $\delta=C^{-4}e^{-2\pi}d$ and $R=Cd$. Use density one on the disk $B(P_2,R+\delta)$ in $\Omega_-$. Every path from $\alpha$ to $\beta$ has density length at least $\delta$: if it stays in the disk this follows from endpoint separation, and if it leaves, the initial portion from $\alpha\subseteq\overline B(P_2,R)$ has that length already. Thus $D_*\ge c(C):=\delta^2/(\pi(R+\delta)^2)>0$, a constant independent of the triple and scale. The same estimate for the complementary pair gives $D_*'\ge c(C)$, and reciprocity yields $D_*\le1/c(C)$. [F9, step 2.1, construct, algebra]

4.1 Write $y_j=h(x_j)$ and $r=(y_3-y_2)/(y_2-y_1)>0$. Affinely normalize this lower-half-plane quadruple to $(0,1,1+r,\infty)$. If $r<1$, a joining path from $[1,1+r]$ to the ray ending at $0$ crosses the annulus about $1$ of radii $r,1$; the same radial-density estimate gives $D_*\ge(2\pi)^{-1}\log(1/r)$. If $r>1$, the complementary joining paths cross the annulus about $1$ of radii $1,r$, giving $D_*'\ge(2\pi)^{-1}\log r$. The two upper bounds $D_*,D_*'\le1/c(C)$ therefore imply $e^{-2\pi/c(C)}\le r\le e^{2\pi/c(C)}$. This is exactly the two-order adjacent-interval quasisymmetry condition for $h$, with constant depending only on $b$, hence only on $M$. [F9, step 2.1, step 3.1, algebra]

5.1 Extend $h$ by [F4] to a quasiconformal sphere map $H$ preserving both half-planes. Define $W=f$ on $\overline{\mathbb H}$ and $W=g\circ H$ on $\overline{\mathbb H^-}$. On the common boundary, $g(H(t))=g(h(t))=f(t)$; the boundary extensions in [F3] make the pasted map a sphere homeomorphism. It is quasiconformal off $\mathbb R\cup\{\infty\}$, hence globally quasiconformal by [F5], and maps that generalized line onto $\Lambda$. If $C$ is a Möbius map from $\mathbb S^1$ onto $\mathbb R\cup\{\infty\}$, then $\chi^{-1}\circ T^{-1}\circ W\circ C$ is a quasiconformal sphere homeomorphism carrying $\mathbb S^1$ onto $\Gamma$. This proves (i) from (ii). [F3, F4, F5, F6, step 4.1, construct]

6.1 Suppose (iii). Let $\Omega$ be either complementary component and take a conformal map $f:\mathbb D\to\Omega$ with its homeomorphic boundary extension from [F3]. Define $W=f$ on $\overline{\mathbb D}$ and $W=\sigma\circ f\circ\tau$ on the closed exterior disc. The second formula maps the exterior disc onto the other component, is quasiconformal there, and agrees with $f$ on $\mathbb S^1$ because $\sigma$ fixes $\Gamma$ pointwise. Hence $W$ is a sphere homeomorphism; [F5] makes it quasiconformal globally and $W(\mathbb S^1)=\Gamma$. This proves (i) from (iii), completing the equivalence. [F3, F5, F6, F7, given] ∎
## Remarks

Ahlfors's 1963 source defines a quasiconformal reflection as a sense-reversing quasiconformal map fixing the curve and interchanging sides; it does not require that map itself to be an involution. The stronger involutive condition in (iii) is proved directly in step 1.2 from the quasicircle map.
