---
id: lem-ahlfors-extension-of-line-quasisymmetric-maps
kind: lemma
title: The Ahlfors-Beurling extension formula for quasisymmetric maps of the line
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - cor-connected-cover-of-a-simply-connected-space-is-trivial
  - def-acl-sobolev-quasiconformal-homeomorphism
  - def-axiom-of-choice
  - def-complex-domain
  - def-countable-choice
  - def-covering-map-and-evenly-covered-neighbourhoods
  - def-one-point-compactification
  - def-proper-map-between-euclidean-open-sets
  - def-quasisymmetric-circle-homeomorphism
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - def-wirtinger-derivatives
  - lem-classical-derivatives-are-weak-derivatives
  - lem-closed-subset-of-a-compact-space-is-compact
  - lem-complex-conjugation-and-modulus-laws
  - lem-smooth-arcs-and-circles-are-removable-for-quasiconformal-maps
  - prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets
  - rem-riemann-sphere-one-point-compactification
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-compact-subset-is-closed-and-bounded
  - thm-continuous-implies-integrable
  - thm-continuous-image-of-a-compact-space-is-compact
  - thm-continuous-partial-derivatives-imply-total-differentiability
  - thm-euclidean-inverse-function-theorem
  - thm-extreme-value-metric
  - thm-heine-borel-rn
  - thm-heine-cantor-metric
  - thm-invariance-of-domain
  - thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets
axiom_use: Assume the Axiom of Choice for the analytic quasiconformality convention, invariance of domain, and the smooth-line gluing theorem. Countable Choice is used by the local finite-measure bound, the classical-to-weak derivative interface, and the gluing proof; AC implies Countable Choice by [[thm-choice-implies-dependent-implies-countable-choice]]. No choice is used in the formula, estimates, or properness argument.
proof_strategy: direct
verification:
  precheck: pass
dependency_level: 10
sources:
  scraped: []
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §15.2.1, Theorem 15.4, printed p. 208: explicit formula and claims of positive Jacobian, bounded dilatation, properness and reflection extension; Exercise 15.5 asks for the omitted checks. The source's word 'smooth' is corrected to C^1 here; the Remark exhibits a quasisymmetric map whose extension is not C^2."
---

## Statement

Assume the Axiom of Choice. Let $h:\mathbb R\to\mathbb R$ be an increasing $L$-quasisymmetric homeomorphism, $L\ge1$ ([[def-quasisymmetric-circle-homeomorphism]]), and let $\mathbb H=\{z\in\mathbb C:\operatorname{Im}z>0\}$ ([[def-unit-disc-upper-half-plane-and-blaschke-factor]], [[def-complex-domain]]). For $x+iy\in\mathbb H$, define

$$H(x+iy)=\frac{1}{2y}\int_{x-y}^{x+y}h(t)\,dt+\frac{i}{y}\left(\int_x^{x+y}h(t)\,dt-\int_{x-y}^{x}h(t)\,dt\right).$$

Then:

(a) $H$ is continuously differentiable on $\mathbb H$, maps $\mathbb H$ into $\mathbb H$, and extends continuously to $\overline{\mathbb H}$ with boundary values $H(x)=h(x)$.

(b) The real Jacobian determinant $J_H$ is positive everywhere on $\mathbb H$, so $H$ is a local diffeomorphism.

(c) With $C(L):=14L^3(1+L)$ and $k(L):=\sqrt{(C(L)-2)/(C(L)+2)}<1$, the Wirtinger derivatives satisfy $|H_{\bar z}|\le k(L)|H_z|$ on $\mathbb H$.

(d) $H$ is a homeomorphism $\mathbb H\to\mathbb H$. Pasting $H$ on $\overline{\mathbb H}$ to $H^*(z):=\overline{H(\bar z)}$ on the lower half-plane gives a $K(L)$-quasiconformal homeomorphism of $\widehat{\mathbb C}$ preserving $\mathbb R\cup\{\infty\}$, where $K(L)=(1+k(L))/(1-k(L))$.

(e) If $\widetilde h(x)=\lambda h(x/\lambda)+b$ for $\lambda>0$ and $b\in\mathbb R$, then its extension is $\widetilde H(z)=\lambda H(z/\lambda)+b$.

## Facts & Assumptions

**Given:** AC, an increasing $L$-quasisymmetric homeomorphism $h:\mathbb R\to\mathbb R$, $L\ge1$, and the displayed formula.

[F1] The line definition of $L$-quasisymmetry gives adjacent equal intervals image-length ratios between $L^{-1}$ and $L$ ([[def-quasisymmetric-circle-homeomorphism]]).

[F2] The upper half-plane is a connected open subset of $\mathbb C$, hence a complex domain ([[def-unit-disc-upper-half-plane-and-blaschke-factor]], [[def-complex-domain]]).

[F3] If all real partial derivatives of a map exist near a point and are continuous there, the map is totally differentiable there with those partials as its derivative ([[thm-continuous-partial-derivatives-imply-total-differentiability]]).

[F4] A $C^1$ map with invertible derivative at a point is a local $C^1$ diffeomorphism there ([[thm-euclidean-inverse-function-theorem]]).

[F5] For a real-differentiable complex map $f=u+iv$, $f_z=\tfrac12(u_x+v_y)+\tfrac i2(v_x-u_y)$, $f_{\bar z}=\tfrac12(u_x-v_y)+\tfrac i2(v_x+u_y)$, and $J_f=|f_z|^2-|f_{\bar z}|^2$ ([[def-wirtinger-derivatives]]).

[F6] AC implies Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]]). Under these assumptions the ACL/Sobolev analytic definition of quasiconformality and the line-removability gluing theorem apply ([[def-acl-sobolev-quasiconformal-homeomorphism]], [[lem-smooth-arcs-and-circles-are-removable-for-quasiconformal-maps]]).

[F7] A proper $C^1$ local diffeomorphism between nonempty Euclidean open sets, with connected target, is surjective and has evenly covered neighbourhoods with finitely many diffeomorphic sheets ([[def-proper-map-between-euclidean-open-sets]], [[thm-proper-local-diffeomorphisms-have-finite-diffeomorphic-sheets]], [[def-covering-map-and-evenly-covered-neighbourhoods]]).

[F8] A connected covering of a locally path-connected simply connected space is one-sheeted ([[cor-connected-cover-of-a-simply-connected-space-is-trivial]]). Every convex domain $D$ is simply connected: fixing $z_0\in D$, the homotopy $H(s,z)=(1-s)z+sz_0$ stays in $D$ by convexity and contracts every loop to $z_0$.

[F9] Continuous real-valued functions on nonempty compact metric spaces attain their extrema; closed boxes in $\mathbb R^2$ are compact and closed subsets of compact metric spaces are compact ([[thm-extreme-value-metric]], [[thm-heine-borel-rn]], [[lem-closed-subset-of-a-compact-space-is-compact]]).

[F10] A continuous function on a compact metric space is uniformly continuous, compact subsets of metric spaces are closed and bounded, and bounded Lebesgue measurable subsets of $\mathbb R^2$, in particular compact rectangles, have finite Lebesgue measure ([[thm-heine-cantor-metric]], [[thm-compact-subset-is-closed-and-bounded]], [[prop-lebesgue-measure-is-sigma-finite-and-finite-on-bounded-sets]]).

[F11] Classical $C^1$ derivatives are weak derivatives under Countable Choice; a continuous injection from an open subset of $\mathbb R^2$ into $\mathbb R^2$ is open; and $\widehat{\mathbb C}$ has the one-point compactification topology ([[lem-classical-derivatives-are-weak-derivatives]], [[thm-invariance-of-domain]], [[rem-riemann-sphere-one-point-compactification]], [[def-one-point-compactification]], [[thm-continuous-image-of-a-compact-space-is-compact]]).

[F12] Complex conjugation preserves modulus ([[lem-complex-conjugation-and-modulus-laws]]).

[F13] A continuous real-valued function on a finite closed interval is Riemann integrable ([[thm-continuous-implies-integrable]]).

## Proof

**Proof technique:** differentiate the moving interval averages, bound their derivative matrix by adjacent-interval quasisymmetry, and use properness followed by reflection across the line.

1.1 Put $a(x,y):=y^{-1}\int_x^{x+y}h(t)\,dt$ and $b(x,y):=y^{-1}\int_{x-y}^{x}h(t)\,dt$, so $H=u+iv$ with $u=(a+b)/2$ and $v=a-b$. These ordinary Riemann integrals exist because $h$ is continuous on every finite interval by [F13]. For example, the numerator in the difference quotient for $a_x$ is $\int_{x+y}^{x+y+s}h(t)\,dt-\int_x^{x+s}h(t)\,dt$; dividing by $s$ and using continuity gives $h(x+y)-h(x)$. The endpoint quotient for $a_y$, followed by differentiating the factor $1/y$, gives $R=(h(x+y)-a)/y$; the same endpoint computation for $b$ gives $Q=(h(x)-h(x-y))/y$ and $-S=b_y=(h(x-y)-b)/y$. Thus $P:=a_x=(h(x+y)-h(x))/y$, $Q:=b_x=(h(x)-h(x-y))/y$, $R:=a_y=(h(x+y)-a)/y$, and $S:=-b_y=(b-h(x-y))/y$. These partial derivatives are continuous for $y>0$, so [F3] makes $H$ $C^1$ on $\mathbb H$. [F2, F3, F13, given, algebra]

1.2 The imaginary part has the symmetric form $v(x,y)=y^{-1}\int_0^y(h(x+s)-h(x-s))\,ds>0$, since $h$ is strictly increasing. As $(x,y)\to(x_0,0)$ with $y\downarrow0$, continuity of $h$ makes both interval averages $a(x,y)$ and $b(x,y)$ tend to $h(x_0)$; hence $u\to h(x_0)$ and $v\to0$. Thus $H$ maps $\mathbb H$ into itself and has the asserted continuous boundary values. [given, F1, algebra]

2.1 From the formulas in step 1.1, $u_x=(P+Q)/2$, $u_y=(R-S)/2$, $v_x=P-Q$, and $v_y=R+S$. Strict monotonicity gives $P,Q>0$ and the averages satisfy $h(x)<a(x,y)<h(x+y)$ and $h(x-y)<b(x,y)<h(x)$, hence $R,S>0$. Therefore $J_H=u_xv_y-u_yv_x=PS+QR>0$. Applying [F4] at each point proves the local-diffeomorphism clause. [F4, step 1.1, algebra]

2.2 Adjacent equal intervals give $P/L\le Q\le LP$. Also $R\le P$ and $S\le Q$. In fact, $R=y^{-2}\int_x^{x+y}(h(x+y)-h(t))\,dt\ge[h(x+y)-h(x+y/2)]/(2y)\ge P/[2(1+L)]$, since the two adjacent half-increments of $[x,x+y]$ have sum $yP$ and ratio at most $L$. Similarly, $S=y^{-2}\int_{x-y}^{x}(h(t)-h(x-y))\,dt\ge[h(x-y/2)-h(x-y)]/(2y)\ge Q/[2(1+L)]$. Thus, with $c:=1/[2(1+L)]$ and $m:=c/L=1/[2L(1+L)]$, every one of $P,Q,R,S$ lies between $mP$ and $LP$. [F1, step 1.1, given, algebra]

2.3 To prove growth at infinity, note that $u$ is the average of $h$ on $[x-y,x+y]$ and $v\ge\tfrac12[h(x+y/2)-h(x-y/2)]$. If $y\le|x|/2$, that interval lies in one tail, so $u\ge h(x/2)$ for $x>0$ and $u\le h(-|x|/2)$ for $x<0$. If $y\ge x/2$ and $x>0$, the symmetric interval contains $[3x/4,5x/4]$; comparison across four adjacent intervals of length $x/4$ gives $v\ge\tfrac12[h(5x/4)-h(x)]\ge(2L^4)^{-1}[h(x/4)-h(0)]$. If $y\ge|x|/2$ and $x<0$, it contains $[5x/4,3x/4]$; comparison across three adjacent intervals of length $|x|/4$ gives $v\ge\tfrac12[h(3x/4)-h(x)]\ge(2L^3)^{-1}[h(0)-h(x/4)]$. For every $A>0$, choose $X$ so these tail bounds force $|u|>A$ in the first case and $v>A$ in the second whenever $|x|>X$. When $|x|\le X$, choose $Y$ so large that $v\ge\tfrac12[h(y/2-X)-h(X-y/2)]>A$ for $y>Y$. If $|x+iy|>\sqrt{X^2+Y^2}$, either $|x|>X$ or $|x|\le X$ and $y>Y$; the preceding estimates then give $|H(x+iy)|>A$. Hence $|H(x+iy)|\to\infty$ as $|x+iy|\to\infty$. [F1, step 1.2, algebra]

3.1 The derivative formulas now imply $|u_x|,|u_y|,|v_x|\le LP$ and $|v_y|\le2LP$, so $\|DH\|_{HS}^2\le7L^2P^2$. Moreover $PS\ge mP^2$ and $QR\ge(P/L)cP=mP^2$, whence $J_H\ge2mP^2\ge mP^2$ and $\|DH\|_{HS}^2\le C(L)J_H$ for $C(L)=7L^2/m=14L^3(1+L)$. By [F5], $2(|H_z|^2+|H_{\bar z}|^2)=\|DH\|_{HS}^2$ and $J_H=|H_z|^2-|H_{\bar z}|^2$; rearranging yields $|H_{\bar z}|^2\le[(C(L)-2)/(C(L)+2)]|H_z|^2$, which is clause (c). [F5, step 2.1, step 2.2, algebra]

3.2 Let $E\subset\mathbb H$ be compact and nonempty. By [F9], $|w|$ has a finite maximum $M$ on $E$ and $\operatorname{Im}w$ has a positive minimum $\delta$ there. Step 2.3 bounds $|z|$ on $H^{-1}(E)$; choose $R$ larger than that bound. The continuous extension from step 1.2 is uniformly continuous on the compact rectangle $[-R,R]\times[0,R]$ by [F9] and [F10]; since its imaginary part is zero on the bottom edge, there is $0<\epsilon<R$ such that $H^{-1}(E)$ contains no point with $0<y<\epsilon$. Thus $H^{-1}(E)$ lies in the compact rectangle $[-R,R]\times[\epsilon,R]$ and is closed there, because $E$ is closed in $\mathbb H$ and $H$ is continuous. By [F9] it is compact. The empty $E$ has empty preimage, so $H$ is proper as defined in [F7]. [F7, F9, F10, step 1.2, step 2.3]

4.1 The map $H:\mathbb H\to\mathbb H$ is a proper $C^1$ local diffeomorphism by steps 2.1 and 3.2. By [F7] it is a covering map; the target $\mathbb H$ is convex and hence simply connected by [F8], so [F8] makes this connected covering one-sheeted. Therefore $H$ is a homeomorphism onto $\mathbb H$. [F7, F8, step 2.1, step 3.2]

5.1 On every compact rectangle contained in $\mathbb H$, $H$ and its continuous first derivatives are bounded by [F9], and the rectangle has finite measure by [F10]. Therefore these classical derivatives are locally square-integrable, and the classical-to-weak derivative interface in [F11] shows $H\in W^{1,2}_{\rm loc}$. With the homeomorphism from step 4.1 and the inequality from step 3.1, [F6] gives analytic $K(L)$-quasiconformality on $\mathbb H$. The reflected lower-half-plane map has the same local boundedness and finite-measure property, and its Wirtinger derivatives are $\overline{H_z(\bar z)}$ and $\overline{H_{\bar z}(\bar z)}$; the same interface and [F12] give its local Sobolev regularity and the same bound. [F5, F6, F9, F10, F11, F12, step 3.1, step 4.1]

6.1 Paste the upper and reflected lower maps along their common boundary values $h$. The pasted plane map is continuous and bijective: each open half-plane maps bijectively to itself and $h$ maps the real line bijectively to itself. Invariance of domain makes it a homeomorphism. Step 2.3 and $h(x)\to\pm\infty$ as $x\to\pm\infty$ show it tends to $\infty$ at infinity. A plane homeomorphism and its inverse carry compact sets to compact sets by continuity, so the one-point compactification description in [F11] extends both to continuous inverse sphere maps fixing $\infty$. It is $K(L)$-quasiconformal off $\mathbb R\cup\{\infty\}$ by step 5.1; applying the smooth-line removability theorem [F6] gives the asserted global $K(L)$-quasiconformal homeomorphism. [F6, F11, step 1.2, step 2.3, step 4.1, step 5.1, given]

7.1 For $\widetilde h(x)=\lambda h(x/\lambda)+b$, the substitution $t=\lambda s$ in each integral shows directly that its extension is $\widetilde H(z)=\lambda H(z/\lambda)+b$. [given, algebra] ∎

## Remarks

The source's word “smooth” cannot be kept for arbitrary quasisymmetric $h$. The odd square-root map $h(t)=\operatorname{sgn}(t)\sqrt{|t|}$ is $4$-quasisymmetric: by positive homogeneity it suffices to compare adjacent unit intervals with common endpoint $s$; for $0\le s\le1$ their image increments are $A=\sqrt{s}+\sqrt{1-s}$ and $B=\sqrt{s+1}-\sqrt{s}$, with $1\le A\le\sqrt2$ and $\sqrt2-1\le B\le1$, while for $s\ge1$ they are $A=1/(\sqrt{s}+\sqrt{s-1})$ and $B=1/(\sqrt{s+1}+\sqrt{s})$, whose ratio in either order is at most $1+\sqrt2<4$; negative $s$ follows by odd symmetry. At $y=1$, $u_x(x,1)=\tfrac12(h(x+1)-h(x-1))$ is not differentiable at $x=1$, since for $x<1$ it equals $\tfrac12(\sqrt{x+1}+\sqrt{1-x})$ and its derivative tends to $-\infty$ as $x\uparrow1$. Thus the extension need not be $C^2$, although the $C^1$ regularity proved above holds.
