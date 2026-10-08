---
id: lem-circular-dilatation-quasisymmetry-and-analytic-quasiconformality
kind: lemma
title: Circular dilatation, quasisymmetry and the analytic definition
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 6
deps: [def-acl-sobolev-quasiconformal-homeomorphism, def-beltrami-coefficient-and-maximal-dilatation, def-geometric-quasiconformal-homeomorphism, lem-analytic-quasiconformality-implies-modulus-distortion, thm-modulus-rectangle-and-annulus, thm-extremal-length-conformal-invariance-and-monotonicity, lem-rho-length-and-extremal-length-are-well-defined, def-absolute-continuity-on-almost-every-coordinate-line, thm-acl-characterisation-of-w-one-p, thm-egorovs-theorem, thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n, thm-vitali-covering-lemma-for-balls-with-fivefold-dilates, def-countable-choice, def-axiom-of-choice, def-complex-domain, def-wirtinger-derivatives, cor-cauchy-schwarz-inequality-for-l-two]
axiom_use: The Axiom of Choice is carried by the ACL/Sobolev analytic definition; Countable Choice is included for the completed-product ACL, differentiation and Vitali interfaces.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §§12.2–12.4, printed pp. 185–188: Lemma 12.6 and Proposition 12.7, Lemma 12.11 and Proposition 12.13, and Proposition 12.14."
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes, 146 pp.)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 3 §4, printed pp. 91–96: the ACL and total-differentiability statements and the Jacobian area estimates. Theorem 4.2's maximum argument remains under the source obligation recorded in the pair report."
verification:
  precheck: pass
---

## Sources

- Mikhail Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*, vol. I, Ch. 2 §§12.2–12.5, printed pp. 185–188. Lemma 12.6 bounds the macroscopic circular dilatation of an analytic QC map by the annular modulus inequality; Proposition 12.7 records that bound. Lemma 12.11 and Proposition 12.13 give compact-set and normalized quasisymmetry. Proposition 12.14 gives an ACL* argument from bounded upper circular dilatation. Its p. 188 statement omits orientation preservation, although §12.5 defines quasiconformality for orientation-preserving homeomorphisms; the reflection $h(z)=\bar z$ has circular dilatation $1$ but fails the library's analytic Beltrami inequality, so part (iii) includes the orientation hypothesis explicitly.
- The same volume, Ch. 2 §11.4, printed pp. 181–182, Proposition 11.14, gives the Jacobian-area estimates; §11.5, printed p. 183, states Proposition 11.18 for total differentiability but labels its proof as Project 11.19, “Fill in details.” This missing differentiability justification is still open and is recorded in the pair report.
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

The constants in (i) and (ii) are not sharp; the Beltrami constant in (iii) follows from the pointwise differential eccentricity bound.

## Facts & Assumptions

**Given:** The Axiom of Choice, plane domains $U,V$, the homeomorphism $h$, and the circular dilatations in the Statement. Part (iii) also assumes the orientation-preserving condition of [[def-geometric-quasiconformal-homeomorphism]].

[F1] At any point where $h$ is classically differentiable, the limsup circular dilatation equals the ratio of the largest to the smallest singular value of $Dh$. If $h$ is orientation-preserving and this ratio is finite, then either $Dh=0$ or $J_h>0$, so the singular values are $|h_z|+|h_{\bar z}|$ and $|h_z|-|h_{\bar z}|$. The bound by $L$ then gives $|h_{\bar z}|\le (L-1)|h_z|/(L+1)$ ([[def-geometric-quasiconformal-homeomorphism]], [[def-wirtinger-derivatives]]).

[F2] If $h$ is analytic $K$-quasiconformal, then the annular modulus distortion of [[lem-analytic-quasiconformality-implies-modulus-distortion]] applies to the preimage of a round annulus in $V$. If an annulus has inner and outer complementary components that are separated by a fixed absolute geometry and both meet a circle of radius $r$, its conformal parameter is bounded by an absolute constant (Lyubich, Lemma 6.10, Ch. 1 §6.3.3).

[F3] A homeomorphism with finite macroscopic circular dilatation obeys the compact-set quasisymmetry estimate of Lyubich, Lemma 12.11; the inverse control is $\eta_*(t)=1/\eta^{-1}(1/t)$. The normalized plane and sphere versions are Proposition 12.13.

[F4] For a homeomorphism with finite upper circular dilatation, Lyubich, Proposition 12.14, printed pp. 187–188, gives the ACL* argument: on a line where $b\mapsto\operatorname{area}(h(U_b))$ is differentiable, it partitions the line into sets $X_k$ with uniform small-scale circular bounds and uses a bounded-overlap disk cover to show that null subsets have image length zero. The source's terminology and the step from those restrictions to ACL are read in the current report; its use of Proposition 11.18 for classical differentiability is not supplied by a proof there. The library's ACL characterization and completed-product interfaces are [[def-acl-sobolev-quasiconformal-homeomorphism]], [[thm-acl-characterisation-of-w-one-p]], [[thm-egorovs-theorem]], [[thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n]], and [[thm-vitali-covering-lemma-for-balls-with-fivefold-dilates]]. The local $L^2$ conclusion also uses the Jacobian-area estimate in item 10; both open interfaces are stated explicitly in step 3.1 and the report.

## Proof

**Proof technique:** annular modulus distortion, compact-set geometry, and the area-function/Vitali criterion for ACL.

1.1 Fix $z$ and $r$ as in (i), translate so that $z=h(z)=0$, and write $s$ and $R$ for the inner and outer radii of $h(D(0,r))$. Choose $a,b\in\partial D(0,r)$ with $|h(a)|=s$ and $|h(b)|=R$. Let $A'=A(s,R)$ and $A=h^{-1}(A')$. The component of $\widehat{\mathbb C}\setminus A$ on the inside contains $0$ and $a$, while the other contains $b$; the cited annulus-geometry lemma therefore gives $\lambda(A)\le C_0$ for an absolute $C_0$. The annular clause of the current modulus-distortion lemma gives $\displaystyle \frac1{2\pi}\log(R/s)=\lambda(A')\le K\lambda(A)\le KC_0.$ Thus $\log(R/s)\le2\pi C_0K$, and taking the limsup over $r\downarrow0$ proves (i) with $C=2\pi C_0$.[F2, given, algebra]

2.1 For any homeomorphism with finite $\operatorname{Dil}(h)$, the cited compact-set quasisymmetry lemma gives control depending on the circular bound and the stated relative boundary distances. If $h$ is analytic $K$-QC, step 1.1 supplies a bound depending only on $K$, so its local quasisymmetry control depends only on $K$ and those distances. The inverse control function is $\eta_*(t)=1/\eta^{-1}(1/t)$; the global plane/sphere conclusion requires the normalizations in the cited plane/sphere proposition. [F3, step 1.1, given]

3.1 Assume $h$ is orientation-preserving and $\operatorname{Dil}(h)\le L$. On a compact square compactly contained in $U$, the monotone area function of the images of horizontal subrectangles is differentiable at almost every height. The area-function and disk-cover argument in [F4] gives absolute continuity on almost every horizontal line, and the same argument gives the vertical ACL property. The library's ACL characterization yields weak first derivatives locally in $L^1$. To finish (iii), one needs classical differentiability almost everywhere and the Jacobian-area bound to deduce $\|Dh\|_{\mathrm{op}}^2\le L J_h$ and local $L^2$ integrability; at differentiability points the orientation condition and [F1] give the stated Beltrami inequality. The remaining differentiability/area implications described in [F4] lack a complete verified source argument, so they are not certified here. [F1, F4, given] ∎
