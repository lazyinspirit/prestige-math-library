---
id: thm-geometric-and-analytic-quasiconformality-equivalent
kind: theorem
title: The geometric and analytic definitions of quasiconformality agree
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 8
deps: [def-geometric-quasiconformal-homeomorphism, def-acl-sobolev-quasiconformal-homeomorphism, def-beltrami-coefficient-and-maximal-dilatation, thm-extremal-length-conformal-invariance-and-monotonicity, thm-modulus-rectangle-and-annulus, lem-rho-length-and-extremal-length-are-well-defined, lem-analytic-quasiconformality-implies-modulus-distortion, lem-inverse-of-a-quasiconformal-map-is-quasiconformal, thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n, thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n, cor-cauchy-schwarz-inequality-for-l-two, def-countable-choice, def-axiom-of-choice, def-complex-domain, def-wirtinger-derivatives, thm-singular-chain-homotopy-formula, prop-relative-homology-is-functorial-for-maps-of-pairs, thm-excision-for-singular-homology, thm-local-homology-detects-interior-points-boundary-points-and-dimension, thm-determinant-sign-detects-orientation-change]
axiom_use: The Axiom of Choice is inherited from the analytic ACL/Sobolev definition and the differentiation and integration interfaces used in both directions; Countable Choice is included for the completed-product and measure interfaces.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes, 146 pp.)"
      url: "https://www.math.stonybrook.edu/~bishop/classes/math627.S18/QC.pdf"
      locator: "Ch. 2 §2 and Ch. 3 §4, printed pp. 51–52 and 91–96: equivalence of the quadrilateral modulus condition and the analytic Beltrami inequality, through ACL, differentiability and Jacobian-area estimates."
    - title: "Mikhail Lyubich, Conformal Geometry and Dynamics of Quadratic Polynomials, vol. I (book draft, Stony Brook)"
      url: "https://www.math.stonybrook.edu/~mlyubich/book.pdf"
      locator: "Ch. 2 §12.5, printed p. 188, QC1–QC2; §§11.3–11.4 for analytic regularity; §§12.1–12.4 for modulus distortion and circular dilatation; Proposition 12.15 for inverse closure."
    - title: "Lars Ahlfors and Arne Beurling, Conformal Invariants and Function-Theoretic Null-Sets, Acta Mathematica 83 (1950), 101–129"
      url: "https://archive.ymsc.tsinghua.edu.cn/pacm_download/117/5710-11511_2006_Article_BF02392634.pdf"
      locator: "§§4–5, printed pp. 114–120: extremal length and the modulus identities fixing the geometric constants."
verification:
  precheck: pass
---

## Sources

- Christopher J. Bishop, *Quasiconformal Mappings*, Ch. 2 §2 and Ch. 3 §4, printed pp. 51–52 and 91–96. The geometric definition is quasi-invariance of every quadrilateral's modulus; Theorem 4.1 proves ACL from that condition, and Lemmas 4.4–4.6 give the Jacobian and area estimates used in the analytic direction.
- Mikhail Lyubich, *Conformal Geometry and Dynamics of Quadratic Polynomials*, vol. I, Ch. 2 §12.5, printed p. 188, QC1–QC2 and Proposition 12.15; §§11.3–11.4 and §§12.1–12.4 contain the analytic and geometric regularity arguments.
- Lars Ahlfors and Arne Beurling, *Conformal Invariants and Function-Theoretic Null-Sets*, §§4–5, printed pp. 114–120, for the extremal-length convention and model quadrilateral/annulus values.

## Statement

Assume the Axiom of Choice. Let $\Omega,\Omega'\subseteq\mathbb C$ be complex domains, let $K\ge1$, and put $k=(K-1)/(K+1)$. For a homeomorphism $f:\Omega\to\Omega'$, the following are equivalent.

(a) $f$ is $K$-geometrically quasiconformal in the sense of [[def-geometric-quasiconformal-homeomorphism]]: it preserves orientation and, for every quadrilateral $Q$ with $\overline Q\subseteq\Omega$ and either choice of opposite marked sides,
$$K^{-1}\mu(\Gamma(Q))\le\mu(\Gamma(f(Q)))\le K\mu(\Gamma(Q)).$$

(b) $f$ is $K$-analytically quasiconformal in the sense of [[def-acl-sobolev-quasiconformal-homeomorphism]]: $f\in W^{1,2}_{\mathrm{loc}}(\Omega)$ and
$$|f_{\bar z}|\le k|f_z|\quad\text{almost everywhere}.$$

Consequently the least geometric constant equals the analytic maximal dilatation $K_f$ of [[def-beltrami-coefficient-and-maximal-dilatation]], analytic quasiconformal homeomorphisms preserve orientation, and the quasiconformal class is closed under inverses with the same maximal dilatation. Also $K_f=1$ exactly when $\mu_f=0$ almost everywhere.

## Facts & Assumptions

**Given:** The Axiom of Choice, complex domains, a homeomorphism, and either the geometric or analytic $K$-quasiconformality condition.

[F1] The geometric definition imposes both modulus bounds for every relatively compact Jordan quadrilateral and each pair of opposite sides. A homeomorphism carries the corresponding path family onto the family in its image quadrilateral ([[def-geometric-quasiconformal-homeomorphism]]).

[F2] If $f$ is analytic $K$-quasiconformal, then the modulus-distortion lemma gives the two-sided bounds of the geometric definition on each quadrilateral ([[lem-analytic-quasiconformality-implies-modulus-distortion]]).

[F3] A geometrically $K$-quasiconformal homeomorphism is absolutely continuous on almost every line in every direction. Bishop proves this by applying the modulus inequality to thin subrectangles crossing a fixed line and using the derivative of the increasing area function $A(y)=\operatorname{area}(f([0,1]\times[0,y]))$ ([[def-geometric-quasiconformal-homeomorphism]]; Bishop, Theorem 4.1, Ch. 3 §4, printed pp. 91–93).

[F4] A continuous open planar map with finite partial derivatives almost everywhere is totally differentiable almost everywhere (Gehring–Lehto); Lebesgue differentiation identifies the a.e. Jacobian density in the image-area measure. Bishop states this as Theorem 4.2 and uses it in Lemma 4.4, Ch. 3 §4, printed pp. 94–96. The source proof of Theorem 4.2 has an unresolved maximum argument, recorded in the report.

[F5] If an orientation-preserving homeomorphism is differentiable almost everywhere, the pushforward measure $E\mapsto\operatorname{area}(f(E))$ has absolutely continuous density $J_f$ by differentiation of measures; its singular part is nonnegative, so $\int_EJ_f\,dA\le\operatorname{area}(f(E))$ for relatively compact Borel $E$ ([[thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n]]). Bishop, Lemma 4.4, printed pp. 95–96, gives the square estimate by a Vitali covering. Together with $|Df|_{\mathrm{op}}^2\le KJ_f$, this controls local $L^2$ energy. Its differentiability input is the Gehring–Lehto theorem in [F4].

[F6] At a differentiability point the singular-value ratio of the real derivative is
$$\frac{|f_z|+|f_{\bar z}|}{|f_z|-|f_{\bar z}|}.$$
The inequality that this ratio is at most $K$ is equivalent to $|f_{\bar z}|\le ((K-1)/(K+1))|f_z|$ ([[def-wirtinger-derivatives]], algebra).

[F7] If a homeomorphism is differentiable at $z$ with invertible derivative $A$, then its local-homology orientation multiplier is $\operatorname{sgn}\det A$: on a sufficiently small sphere, the straight homotopy from $f(z+v)-f(z)$ to $Av$ avoids zero because the differentiability remainder is smaller than $\frac12\min_{|u|=1}|Au|\,|v|$. Homotopy invariance, excision and functoriality identify this sphere degree with the local homology map ([[thm-singular-chain-homotopy-formula]], [[prop-relative-homology-is-functorial-for-maps-of-pairs]], [[thm-excision-for-singular-homology]], [[thm-local-homology-detects-interior-points-boundary-points-and-dimension]], [[thm-determinant-sign-detects-orientation-change]]).

[F8] The Beltrami coefficient and least analytic dilatation are defined in [[def-beltrami-coefficient-and-maximal-dilatation]]. The inverse theorem proved in [[lem-inverse-of-a-quasiconformal-map-is-quasiconformal]] supplies the same coefficient bound for the inverse.

## Proof

**Proof technique:** use annular and quadrilateral modulus distortion in the analytic direction; use ACL, the local Jacobian-area estimate and infinitesimal quadrilaterals in the geometric direction.

1.1 Assume (b). At any point $z$ where $Df(z)$ exists and is nonsingular, write $f(z+v)-f(z)=Av+o(|v|)$ with $A=Df(z)$. If $c=\min_{|u|=1}|Au|>0$, then for all sufficiently small $r$, the straight homotopy from $v\mapsto f(z+v)-f(z)$ to $v\mapsto Av$ stays nonzero on $|v|=r$, since the remainder is less than $cr/2$. Hence the induced map on local homology has the same sign as $A$, namely $\operatorname{sgn}\det A$; this is the determinant orientation rule in [F7]. At singular differentiability points $J_f=0$. If $f$ were orientation-reversing, it would follow that $J_f\le0$ almost everywhere. The analytic inequality gives $J_f=|f_z|^2-|f_{\bar z}|^2\ge(1-k^2)|f_z|^2\ge0$, so $J_f=0$ and $Df=0$ almost everywhere. By ACL and the one-dimensional fundamental theorem, on almost every horizontal segment in any small rectangle the restriction of $f$ would be constant, contradicting injectivity. Thus $f$ preserves orientation. Finally [F2] gives the modulus bounds in (a). [F1, F2, F3, F7, given]

1.2 Assume (a). By [F3], the coordinate restrictions are absolutely continuous on almost every horizontal and vertical line. Their partial derivatives therefore exist almost everywhere and agree with the weak partial derivatives. The homeomorphism is continuous and open, so the Gehring–Lehto theorem in [F4] gives total differentiability almost everywhere. The cited proof's final maximum step is not used as certified evidence; this a.e.-differentiability input is an open source obligation. [F3, F4, given]

1.3 At a point $z$ where $Df(z)$ exists and is invertible, rescale small squares centered at $z$ by $r^{-1}$. Differentiability gives uniform convergence of the rescaled boundary maps to the real-linear map $Df(z)$; continuity of rectangle modulus in its four vertices and the geometric bound in (a) then force the modulus distortion of $Df(z)$ on every oriented square to lie in $[1/K,K]$. Choosing the sides along the singular vectors identifies its singular-value ratio as at most $K$. By [F6], $|f_{\bar z}|\le k|f_z|$ at such points. If $Df(z)$ is singular, the same limiting rectangle bound rules out rank one; rank zero satisfies the displayed inequality. Thus the Beltrami inequality holds almost everywhere. [F1, F4, F6, given, algebra]

1.4 By the same derivative bound, $|Df|_{\mathrm{op}}^2\le KJ_f$ almost everywhere. Apply the area inequality in [F5] on a relatively compact square $Q\Subset\Omega$: $\int_Q|Df|^2\,dA\le K\operatorname{area}(f(Q))<\infty$. A countable square exhaustion gives $f\in W^{1,2}_{\mathrm{loc}}$, proving (b). The area/differentiability input remains an open source obligation and this item is therefore escalated. [F3, F4, F5, given]

2.1 The two implications hold for each $K\ge1$, so the least geometric constant and the least analytic constant coincide. The inverse statement follows from [[lem-inverse-of-a-quasiconformal-map-is-quasiconformal]]. Finally, the Beltrami definition gives $K_f=1$ iff $\|\mu_f\|_\infty=0$, which is equivalent to $\mu_f=0$ almost everywhere.[F1, F2, step 1.1, step 1.4, F8, given] ∎
