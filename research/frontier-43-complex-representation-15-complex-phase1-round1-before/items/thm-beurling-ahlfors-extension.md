---
id: thm-beurling-ahlfors-extension
kind: theorem
title: The Beurling–Ahlfors extension theorem for circles and lines
status: draft
origin: pipeline
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
dependency_level: 12
deps:
  - def-quasisymmetric-circle-homeomorphism
  - def-mobius-transformation
  - def-unit-disc-upper-half-plane-and-blaschke-factor
  - lem-ahlfors-extension-of-line-quasisymmetric-maps
  - lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality
  - lem-smooth-arcs-and-circles-are-removable-for-quasiconformal-maps
  - thm-composition-and-inverse-quasiconformal
  - def-acl-sobolev-quasiconformal-homeomorphism
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
axiom_use: Assume AC for the line extension, analytic quasiconformal composition, circular-dilatation, and smooth-circle gluing interfaces. Countable Choice is used through those measure interfaces and follows from AC by [[thm-choice-implies-dependent-implies-countable-choice]].
sources:
  scraped: []
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §15.2.2, printed pp. 208–209, Lemma 15.6: normalized restriction from the disc and extension of circle quasisymmetries. Its proof invokes the global plane quasisymmetry estimate and sketches the symmetric extension; the periodic-lift descent below supplies those details for the extension clause."
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 course notes)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 2 §8, printed pp. 78–80, Theorem 8.1: both directions of the line extension theorem; the restriction direction is proved by the modulus of a normalized annulus, and the extension direction by a hyperbolic pentagon tessellation."
verification:
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $\mathbb D$ be the unit disc ([[def-unit-disc-upper-half-plane-and-blaschke-factor]]) and $\mathbb S^1=\partial\mathbb D$ ([[def-quasisymmetric-circle-homeomorphism]]).

(a) Every orientation-preserving $L$-quasisymmetric homeomorphism $h:\mathbb S^1\to\mathbb S^1$ extends to a $K(L)$-quasiconformal homeomorphism $H$ of the sphere such that $H(\mathbb S^1)=\mathbb S^1$, $H(\mathbb D)=\mathbb D$, $H(0)=0$, and $H|_{\mathbb S^1}=h$. In particular, $H|_{\overline{\mathbb D}}$ is a homeomorphism of the closed disc onto itself and is quasiconformal on $\mathbb D$.

(b) For every $0\le r<1$ there is $L(K,r)<\infty$ such that if an orientation-preserving $K$-quasiconformal sphere homeomorphism $H$ maps $\mathbb D$ onto itself and $|H(0)|\le r$, then $H|_{\mathbb S^1}$ is $L(K,r)$-quasisymmetric.

(c) Every orientation-preserving $L$-quasisymmetric homeomorphism $h:\mathbb R\to\mathbb R$ extends to a $K(L)$-quasiconformal sphere homeomorphism preserving $\mathbb R\cup\{\infty\}$ and fixing $\infty$. Conversely, if an orientation-preserving $K$-quasiconformal sphere homeomorphism $H$ preserves $\mathbb R\cup\{\infty\}$ and fixes $\infty$, then $H|_{\mathbb R}$ is $L(K)$-quasisymmetric.

## Facts & Assumptions

**Given:** AC, the line and circle quasisymmetry conventions, and the stated quasiconformal maps.

[F1] For a circle homeomorphism, the quasisymmetric condition is the adjacent-equal-arc length bound; its equivalent metric form uses chordal distance. The line condition is the adjacent-equal-interval bound. On $\mathbb S^1$, chordal distance is one half of Euclidean chord length ([[def-quasisymmetric-circle-homeomorphism]]).

[F2] The Ahlfors–Beurling formula extends an increasing line-quasisymmetric map to a homeomorphism of $\mathbb H$; reflection extends it to a quasiconformal sphere map preserving $\mathbb R\cup\{\infty\}$. The formula is invariant under adding the same real translation to input and boundary data ([[lem-ahlfors-extension-of-line-quasisymmetric-maps]]).

[F3] If $a\in\mathbb D$, $\Phi_a(z)=(z-a)/(1-\overline a z)$ is a Möbius disc automorphism (its coefficient determinant is $1-|a|^2>0$), $\Phi_a(a)=0$, and $|\Phi_a^{-1}(0)|=|a|$ ([[def-mobius-transformation]]). The boundary restrictions of $\Phi_a$ and $\Phi_a^{-1}$ have quasisymmetry constants bounded in terms of $|a|$ ([[def-quasisymmetric-circle-homeomorphism]]).

[F4] We use the analytic ACL/Sobolev convention for quasiconformality ([[def-acl-sobolev-quasiconformal-homeomorphism]]). Its maximal dilatation is preserved by composition with conformal maps and by reflection in a conformal circle ([[thm-composition-and-inverse-quasiconformal]]).

[F5] A plane quasiconformal homeomorphism with a global normalization at infinity is quasisymmetric on compact subsets with control depending only on its dilatation when the domain is the whole plane; in particular its restriction to a compact round circle has chordal quasisymmetry control ([[lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality]]).

[F6] A continuous sphere homeomorphism that is $K$-quasiconformal on both sides of a round circle is $K$-quasiconformal on the sphere ([[lem-smooth-arcs-and-circles-are-removable-for-quasiconformal-maps]]).

[F7] AC implies Countable Choice ([[thm-choice-implies-dependent-implies-countable-choice]]).

## Proof

**Proof technique:** lift a circle map to a periodic line map, apply the explicit line extension, and descend the periodic extension through the exponential covering. For restriction, normalize the image of an interior point and reflect across the circle.

1.1 Put $T=2\pi$ and $q(t)=e^{it}$. The continuous circle map $t\mapsto h(q(t))$ has a continuous argument lift $f:\mathbb R\to\mathbb R$: choose one argument at $0$, subdivide each compact interval into finitely many pieces whose images lie in open semicircles, and match the local arguments at successive endpoints. Orientation preservation makes $f$ strictly increasing. Since $f(t+T)-f(t)$ is a continuous integer multiple of $T$, it is constant; strict increase and injectivity of $h$ on the circle force that integer to be $1$. Thus $q(f(t))=h(q(t))$ and $f(t+T)=f(t)+T$. [F1, given, construct]

1.2 Suppose $H$ satisfies (b), and put $a=H(0)$. The Möbius map $\Phi_a$ in [F3] makes $F=\Phi_a\circ H$ fix $0$ and map the closed disc to itself. By [F4], $F$ is $K$-quasiconformal in the disc. Define its exterior extension by $\widetilde F(z)=1/\overline{F(1/\overline z)}$ for $|z|>1$ and set $\widetilde F=F$ on the closed disc. The formulas agree on $\mathbb S^1$; the pasted map is a sphere homeomorphism fixing $0$ and $\infty$, and [F6] makes it $K$-quasiconformal. Apply [F5] to see that $\widetilde F|_{\mathbb S^1}$ is quasisymmetric with control depending only on $K$. The map $\Phi_a^{-1}|_{\mathbb S^1}$ has control depending only on $r$ by [F3]. Composing these controls gives the claimed $L(K,r)$ for $H|_{\mathbb S^1}=\Phi_a^{-1}\circ\widetilde F|_{\mathbb S^1}$. [F3, F4, F5, F6, given]

2.1 Let $I=[x,x+s]$ and $J=[x+s,x+2s]$. If $s\le T/2$, their projections are adjacent equal arcs and their image-length ratio in either order is at most $L$. If $T/2<s<T$, put $d=T-s$, $\alpha=f(x+T)-f(x+s)$, and $\beta=f(x+T-d)-f(x+T-2d)$. Then $|f(I)|=T-\alpha$ and $|f(J)|=T-\beta$. Each of $\alpha,\beta$ is the image length of an arc of length $d<T/2$; comparing it with an adjacent arc of the same length gives $\alpha,\beta\le LT/(L+1)$, since the two image lengths sum to at most $T$. Therefore both $|f(I)|$ and $|f(J)|$ lie in $[T/(L+1),T]$. If $s\ge T$, write $s=nT+u$ with integer $n\ge1$ and $0\le u<T$; each image increment lies in $[nT,(n+1)T]$. In every case the adjacent image-length ratio in either order is at most $L+1$, so $f$ is $(L+1)$-quasisymmetric on $\mathbb R$. [F1, step 1.1, algebra]

3.1 Apply [F2] to $f$, obtaining its reflected Ahlfors–Beurling extension $G$. The formula gives $G(z+T)=G(z)+T$: in the real average the boundary shift adds $T$, and in the imaginary difference it cancels. Thus $\mathcal H(e^{iz}):=e^{iG(z)}$ is well-defined on $\mathbb C^*$. If $\mathcal H(e^{iz})=\mathcal H(e^{iz'})$, then $G(z')=G(z)+nT=G(z+nT)$ for some integer $n$, so injectivity of $G$ gives $z'=z+nT$; surjectivity follows from that of $G$. Hence $\mathcal H$ is a homeomorphism of $\mathbb C^*$ and is $K(L+1)$-quasiconformal locally because the exponential covering is conformal. It maps the unit circle by $h$ and maps the punctured disc onto itself. [F2, step 1.1, step 2.1, algebra]

4.1 The function $p(t)=f(t)-t$ is continuous and $T$-periodic, so let $M=\sup_{t\in[0,T]}|p(t)|<\infty$. In the upper half-plane, the real part of the Ahlfors–Beurling formula differs from $x$ by the average of $p$ on $[x-y,x+y]$, hence by at most $M$; its imaginary part differs from $y$ by $y^{-1}\int_0^y(p(x+s)-p(x-s))\,ds$, hence by at most $2M$. Reflection gives the same bound below the real axis. Therefore $|G(z)-z|\le\sqrt5M$ throughout the plane. It follows that $\mathcal H(w)\to0$ as $w\to0$ and $\mathcal H(w)\to\infty$ as $w\to\infty$. The inverse of $G$ has the same bounded-displacement property, so the descended map and its inverse both extend continuously at $0$ and $\infty$; hence $\mathcal H$ is a sphere homeomorphism with $\mathcal H(0)=0$. [F2, step 3.1, algebra, construct]

5.1 For $y\ge1$, the derivative formulas for the line extension give $P,Q=1+O(M/y)$ and $R,S=1/2+O(M/y)$, where $P,Q,R,S$ are the adjacent increments and average deficits in its proof. Thus $DG$ is bounded on the upper region $y\ge1$, and by reflection on $y\le-1$. In the coordinate $w=e^{iz}$, $|D\mathcal H(w)|\le e^{\sqrt5M}|DG(z)|$ near $0$, because $|\mathcal H(w)|/|w|\le e^{\sqrt5M}$; the analogous estimate in coordinate $1/w$ holds near $\infty$. The continuous map therefore has bounded classical derivatives off each added point. Integration by parts on a punctured disc and passage to the limit makes these bounded derivatives its weak derivatives across the point: the boundary term is bounded by a constant times the circle radius and tends to zero. The Beltrami inequality holds away from the point and hence almost everywhere across it. So the descended sphere homeomorphism is globally $K(L+1)$-quasiconformal. [F2, step 3.1, step 4.1, algebra]

6.1 The map $\mathcal H$ from steps 3.1–5.1 proves (a), with $K(L)=K_{\rm AB}(L+1)$. Since it preserves the two complementary components of $\mathbb S^1$, it maps $\mathbb D$ onto itself; continuity and bijectivity on the sphere give the asserted homeomorphism of the closed disc. [step 3.1, step 4.1, step 5.1]

7.1 The line-extension clause in (c) is [F2]. For the converse, $H|_{\mathbb C}$ is a plane quasiconformal homeomorphism fixing infinity, so [F5] gives a global quasisymmetry control on the plane. Restricting that metric control to triples on $\mathbb R$ gives the adjacent-interval ratio bound in [F1], with a constant depending only on $K$. Countable Choice used by these analytic interfaces follows from AC by [F7]. [F1, F5, F7, given] ∎

## Remarks

The unnormalized restriction assertion “$K$-quasiconformal and preserves $\mathbb S^1$ implies a uniform $L(K)$ boundary constant” is false. For $a\in(0,1)$, the Möbius disk automorphism $\Phi_a(z)=(z-a)/(1-az)$ is $1$-quasiconformal and preserves $\mathbb S^1$, but the image-length ratio of the adjacent arcs $[0,\delta]$ and $[\delta,2\delta]$ is unbounded as $a\uparrow1$ for fixed $0<\delta<\pi$. This is why (b) includes $|H(0)|\le r<1$. Likewise a sphere map preserving $\mathbb R\cup\{\infty\}$ need not restrict to a homeomorphism $\mathbb R\to\mathbb R$ unless it fixes $\infty$; $z\mapsto1/z$ is a Möbius example. The unnormalized converses in the scaffold are corrected accordingly.
