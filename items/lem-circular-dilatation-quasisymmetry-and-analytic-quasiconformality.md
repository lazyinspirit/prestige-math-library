---
id: lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality
kind: lemma
title: Circular dilatation, quasisymmetry and the analytic definition
status: published
origin: pipeline
proof_strategy: direct
dependency_level: 8
deps:
- def-acl-sobolev-quasiconformal-homeomorphism
- def-beltrami-coefficient-and-maximal-dilatation
- def-geometric-quasiconformal-homeomorphism
- lem-analytic-quasiconformality-implies-modulus-distortion
- thm-modulus-rectangle-and-annulus
- thm-extremal-length-conformal-invariance-and-monotonicity
- lem-rho-length-and-extremal-length-are-well-defined
- def-absolute-continuity-on-almost-every-coordinate-line
- thm-acl-characterisation-of-w-one-p
- thm-egorovs-theorem
- thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n
- thm-vitali-covering-lemma-for-balls-with-fivefold-dilates
- def-countable-choice
- def-axiom-of-choice
- def-complex-domain
- def-wirtinger-derivatives
- cor-cauchy-schwarz-inequality-for-l-two
- lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds
- lem-jordan-schoenflies-extension-for-plane-curves
- thm-jordan-brouwer-separation
- thm-tonelli-and-fubini-for-completed-product-measures
axiom_use: The Axiom of Choice is carried by the ACL/Sobolev analytic definition; Countable Choice is included for the completed-product ACL, differentiation and Vitali interfaces.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
  - title: Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)
    url: https://www.math.stonybrook.edu/~mlyubich/book.pdf
    locator: 'Ch. 2 §§12.2–12.4, printed pp. 185–188: Lemma 12.6 and Proposition 12.7, Lemma 12.11 and Proposition 12.13, and Proposition 12.14.'
  - title: Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes)
    url: https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf
    locator: 'Ch. 3 §4, printed pp. 91–96: the ACL and total-differentiability statements and the Jacobian area estimates. The original Theorem 4.2 maximum argument is not used; the earlier quadrilateral core supplies an independent fixed-constant argument.'
  - title: F. W. Gehring, Definitions for a Class of Plane Quasiconformal Mappings, Nagoya Mathematical Journal29 (1967),175–184
    url: https://doi.org/10.1017/S0027763000024272
    locator: §9 Definition8-prime, printedp179; §3 Definitions2/2-prime, printedp176; domain/orientation conventions p175. Complete ten-page paper read. It states the qualitative equivalence; §14 refers its proof elsewhere. Only this qualitative input uses the exact delegated last-resort citation authorization.
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Sources

- Mikhail Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*, vol. I, Ch. 2 §§12.2–12.5, printed pp. 185–188. Lemma 12.6 bounds the macroscopic circular dilatation of an analytic QC map by the annular modulus inequality; Proposition 12.7 records that bound. Lemma 12.11 and Proposition 12.13 give compact-set and normalized quasisymmetry. Proposition 12.14 gives an ACL* argument from bounded upper circular dilatation. Its p. 188 statement omits orientation preservation, although §12.5 defines quasiconformality for orientation-preserving homeomorphisms; the reflection $h(z)=\bar z$ has circular dilatation $1$ but fails the library's analytic Beltrami inequality, so part (iii) includes the orientation hypothesis explicitly.
- The same volume, Ch. 2 §11.4, printed pp. 181–182, Proposition 11.14, gives the Jacobian-area estimates; §11.5, printed p. 183, states Proposition 11.18 for total differentiability but labels its proof as Project 11.19, “Fill in details.” The cited project is not used as a proof: the earlier quadrilateral core independently supplies total differentiability.
- Christopher J. Bishop, *Quasiconformal Mappings*, Ch. 3 §4, printed pp. 91–96, for ACL, differentiability, and the Jacobian area estimates. The proof of Theorem 4.2 is not used as certified evidence here; its maximum argument is an open source obligation.

## Statement

Assume the Axiom of Choice. Let $h:U\to V$ be a homeomorphism between plane domains. For $z\in U$ and $r>0$ with $\overline{D(z,r)}\subset U$, set
$$M_h(z,r)=\max_{|w-z|=r}|h(w)-h(z)|,\qquad m_h(z,r)=\min_{|w-z|=r}|h(w)-h(z)|,$$
and define the macroscopic circular dilatation
$$\operatorname{Dil}(h,z,r)=\frac{M_h(z,r)}{m_h(z,r)},\qquad \operatorname{Dil}(h,z)=\limsup_{r\downarrow0}\operatorname{Dil}(h,z,r),\qquad \operatorname{Dil}(h)=\sup_{z\in U}\operatorname{Dil}(h,z).$$

(i) If $h$ is analytically $K$-quasiconformal, then $\operatorname{Dil}(h)\le e^{CK}$ for an absolute constant $C$. More precisely, for every $z\in U$ there is $r_0(z)>0$ such that whenever $0<r<r_0(z)$ and $\overline{D(z,r)}\subset U$, the inner and outer radii $s,R$ of $h(D(z,r))$ about $h(z)$ satisfy $\log(R/s)\le CK$.

(ii) If $\operatorname{Dil}(h)<\infty$, then $h$ is quasisymmetric on compact subsets, with control depending on $\operatorname{Dil}(h)$ and the relative distances of the compact set and its image from the domain boundaries. In particular, a $K$-quasiconformal homeomorphism is locally quasisymmetric with control depending only on $K$ and these distances, and its inverse has the corresponding inverse control function.

(iii) If $h$ is orientation-preserving and $\operatorname{Dil}(h)\le L<\infty$, then $h$ is analytically $L$-quasiconformal: it is ACL on almost every horizontal and vertical line, belongs to $W^{1,2}_{\mathrm{loc}}$, is differentiable almost everywhere, and satisfies
$$|h_{\bar z}|\le\frac{L-1}{L+1}|h_z|\quad\text{a.e.}$$

The metric assertions (i) and (ii) do not need an added orientation premise; the analytic conclusion (iii) requires orientation preservation, since complex conjugation has circular dilatation one. The constants in (i) and (ii) are not sharp; the Beltrami constant in (iii) follows from the pointwise differential eccentricity bound.

## Facts & Assumptions

**Given:** The Axiom of Choice, plane domains $U,V$, the homeomorphism $h$, and the circular dilatations in the Statement. Part (iii) also assumes the orientation-preserving condition of [[def-geometric-quasiconformal-homeomorphism]].

[F1] At a differentiability point with nonsingular derivative, the limsup circular ratio equals the derivative singular-value ratio. A rank-one derivative forces that ratio to infinity by testing kernel and transverse directions, while a zero derivative already satisfies the Beltrami inequality. Thus once the necessary ACL/weak regularity is established, the sharp analytic L bound follows from the circular bound and the Wirtinger identities ([[def-wirtinger-derivatives]]).

[F2] The full earlier ring theorem gives both annular end-family distortion bounds ([[lem-analytic-quasiconformality-implies-modulus-distortion]]). The round-annulus value is $\lambda(A(s,R))=(2\pi)^{-1}\log(R/s)$ ([[thm-modulus-rectangle-and-annulus]]). The continuum-circle argument below supplies the required absolute source-ring bound locally; no cited annulus-geometry lemma is used. The circle estimate uses completed-product Fubini and Jordan separation ([[thm-tonelli-and-fubini-for-completed-product-measures]], [[lem-jordan-schoenflies-extension-for-plane-curves]], [[thm-jordan-brouwer-separation]]).

[F3] A map is $\eta$-quasisymmetric when $|x-a|\le t|x-b|$ implies $|h(x)-h(a)|\le\eta(t)|h(x)-h(b)|$ for distinct triples, where $\eta:[0,\infty)\to[0,\infty)$ is an increasing homeomorphism with $\eta(0)=0$. Reversing this ratio inequality gives the inverse control $\eta_*(t)=1/\eta^{-1}(1/t)$ for $t>0$, with $\eta_*(0)=0$. Step 2.1 proves the local control needed here. Lyubich, §12.3, supplies the convention; Lemma 12.11 concerns embeddings of the whole Euclidean space with an all-scale circular bound, rather than this compact-set statement.

[F4] The sole delegated citation input is qualitative: an orientation-preserving homeomorphism between finite planar domains with bounded upper infinitesimal circular dilatation everywhere is analytically quasiconformal with some finite constant. This is Gehring, *Definitions for a Class of Plane Quasiconformal Mappings* (1967), §9 Definition8′, printed p.179, with §3 Definitions2/2′, p.176 and the orientation/domain convention on p.175. The complete ten-page paper was read; §14 points elsewhere for the equivalence proof, so this is a statement citation under the exact root-recorded last-resort authorization, not a claim that this paper supplies that proof. The sharp L bound, area arguments, modulus comparison and quasisymmetry estimates below are local. Total differentiability after this qualitative regularity is the earlier independently proved core Remark ([[lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds]]).

## Proof

**Proof technique:** use only the authorized qualitative metric criterion, derive its sharp bound locally, and prove analytic circular/quasisymmetry control by continuum-circle modulus and dyadic shrink.

1.1 Assume h preserves orientation and its upper circular dilatation is at most L everywhere. The exact qualitative citation [F4] gives ACL, local W1,2 and finite analytic distortion. The general differentiability argument in the core Remark applies, without assuming a sharp analytic constant. At every nonsingular differentiability point, [F1] identifies the circular limsup with the singular-value ratio, bounded by L. A rank-one derivative would force an infinite circular ratio and is excluded; rank zero satisfies the Beltrami inequality. Thus $|h_{\bar z}|\le (L-1)(L+1)^{-1}|h_z|$ a.e., and the already-obtained W1,2 regularity makes h analytically L-quasiconformal. This proves (iii); no sharp bound is obtained merely by citing [F4]. [F1, F4, given, algebra]

1.2 Fix a source point x and a sufficiently small radius r so that the disk of outer radius $R=M_h(x,r)$ about h(x) lies inside V; put $s=m_h(x,r)$. The preimage of the round ring centered at h(x) with radii s,R has inner Jordan continuum E containing x and a point at distance r from x, and outer closed Jordan exterior F containing a point at distance r and infinity. Thus diam(E) is at least r and $d=\operatorname{dist}(E,F)\le2r$. Choose a closest pair e0,f0 and its midpoint c. There is e in E with $|e-e0|\ge r/2$; a compact path in the Jordan exterior F from f0 toward infinity gives an analogous far point. Since the pair is closest, $|e-f0|\ge d$, whence $|e-c|^2\ge d^2/4+|e-e0|^2/2\ge d^2/4+r^2/8$, and likewise on F. Connectedness makes every circle centered at c with radius between $d/2$ and $\sqrt{d^2/4+r^2/8}$ meet both continua. One complementary circle arc has one endpoint on each and lies inside the ring, so an admissible density has integral at least one on that whole circle. Cauchy–Schwarz and polar Fubini give source modulus at least $\frac1{4\pi}\log(1+r^2/(2d^2))\ge c_0:=\frac1{4\pi}\log(9/8)>0$. If R=s the ratio is one and no ring is needed. Otherwise [F2] gives $(2\pi)^{-1}\log(R/s)\le K/c_0$. Thus $R/s\le e^{CK}$ with the absolute constant $C=2\pi/c_0$. The closest pair exists because E is compact and F closed; the exterior path and circle-arc separation use Jordan–Schönflies. For a fixed compact source set, choose the small radii uniformly by continuity on a larger compact neighborhood and its positive image distance from the target boundary. This proves (i). [F2, given, construct, algebra]

2.1 For an analytic map, step 1.2 gives a uniform small-scale circular bound H on each compact neighborhood. Openness makes the maximum image distance in a closed source ball occur on its boundary. Put $d=L_x(r/2)$ and choose y on that inner circle realizing d, with midpoint yprime of x,y. The equal-radius comparison at yprime gives $d\le(H+1)|h(y)-h(yprime)|$, and the comparison at y gives $|h(y)-h(yprime)|\le H l_y(r/4)$. The image of $B(y,r/4)$ contains the disk of its inner radius, is inside $h(B(x,r))$, and is centered a distance d from h(x). Hence $L_x(r)\ge(1+c)d$ with $c=1/[H(H+1)]$. Iteration gives $L_x(tr)\le C_Ht^\alpha l_x(r)$ for $0<t\le1$, where $\alpha=\log_2(1+c)>0$. The reverse doubling bound is $L_x(2r)\le(H+1)L_x(r)$: take a maximizing point at radius2r, its midpoint, and compare the two equal-radius increments about that midpoint. Iteration supplies an increasing power bound for t at least1. These give the local quasisymmetry control in the analytic case; finite compact collars extend the control over the compact set. The inverse control formula is $\eta_*(t)=1/\eta^{-1}(1/t)$ by reversing the ratio inequality. For a general bounded-circular map, apply step 1.1; when its orientation is reversed first postcompose with complex conjugation, which preserves every distance ratio and changes the orientation. The resulting analytic constant is L, so step 1.2 and the same shrink argument apply. On each compact collar the small-scale estimate handles triples of sufficiently small diameter; for the remaining triples the fixed positive minimum image separation completes a continuous control function. The input/output collar data enter this compact control. If the domains are the whole plane, step 1.2 has no small-radius restriction, and the shrink and doubling inequalities hold at all scales with control depending only on K. This proves the claimed local metric control and its inverse formula; the global-plane conclusion uses no domain-boundary data. [F1, F3, step 1.1, step 1.2, given, construct, algebra] ∎

## Remark

For an analytically K-quasiconformal homeomorphism of the whole plane, the continuum-circle proof has no boundary restriction. Put $H=e^{CK}$, $c=1/[H(H+1)]$, $\alpha=\log_2(1+c)$ and $\beta=\log_2(H+1)$. The proved all-scale shrink and doubling inequalities give a global Euclidean quasisymmetry control $\eta(t)=C_Ht^\alpha$ for $0\le t\le1$ and $\eta(t)=C_Ht^\beta$ for $t\ge1$, with $C_H=H\max(1+c,H+1)$. This conclusion uses the local analytic modulus argument; the delegated citation is only the initial qualitative criterion for a general metric map.
