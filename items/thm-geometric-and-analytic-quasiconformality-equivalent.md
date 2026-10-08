---
id: thm-geometric-and-analytic-quasiconformality-equivalent
kind: theorem
title: The geometric and analytic definitions of quasiconformality agree
status: draft
origin: pipeline
proof_strategy: direct
dependency_level: 5
deps: [def-geometric-quasiconformal-homeomorphism, def-acl-sobolev-quasiconformal-homeomorphism, def-beltrami-coefficient-and-maximal-dilatation, thm-extremal-length-conformal-invariance-and-monotonicity, thm-modulus-rectangle-and-annulus, lem-rho-length-and-extremal-length-are-well-defined, lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds, thm-lebesgue-differentiation-theorem-for-locally-integrable-functions-on-r-n, thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n, cor-cauchy-schwarz-inequality-for-l-two, def-countable-choice, def-axiom-of-choice, def-complex-domain, def-wirtinger-derivatives, thm-singular-chain-homotopy-formula, prop-relative-homology-is-functorial-for-maps-of-pairs, thm-excision-for-singular-homology, thm-local-homology-detects-interior-points-boundary-points-and-dimension, thm-determinant-sign-detects-orientation-change, thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions, thm-acl-characterisation-of-w-one-p, lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier]
axiom_use: The Axiom of Choice is inherited from the analytic ACL/Sobolev definition and the differentiation and integration interfaces used in both directions; Countable Choice is included for the completed-product and measure interfaces.
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Christopher J. Bishop, Quasiconformal Mappings (Stony Brook Math 627 lecture notes)"
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

[F2] If $f$ is analytic $K$-quasiconformal, then the modulus-distortion lemma gives the two-sided bounds of the geometric definition on each quadrilateral ([[lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds]]).

[F3] The geometric bounds apply to every thin rectangle compactly inside the domain ([[def-geometric-quasiconformal-homeomorphism]]). The explicit area-function argument in step 1.2 proves ACL; it assumes no inverse-null or circular-dilatation result. The fundamental theorem reconstructs each AC line from its integrable derivative ([[thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions]]); the general ACL characterization identifies locally L2 line derivatives as weak derivatives ([[thm-acl-characterisation-of-w-one-p]]).

[F4] The auxiliary differentiability and lower-area interfaces in the Remark of [[lem-analytic-quasiconformality-implies-quadrilateral-modulus-bounds]] apply to continuous planar homeomorphisms with finite partials almost everywhere: the maximum is taken after subtracting a fixed constant, and the image-area density is the absolute Jacobian. For an orientation-preserving map it is $J_f$.

[F5] If an orientation-preserving homeomorphism is differentiable almost everywhere, the pushforward measure $E\mapsto\operatorname{area}(f(E))$ has absolutely continuous density $J_f$ by differentiation of measures; its singular part is nonnegative, so $\int_EJ_f\,dA\le\operatorname{area}(f(E))$ for relatively compact Borel $E$ ([[thm-differentiation-of-borel-measures-finite-on-compact-sets-on-r-n]]). Bishop, Lemma 4.4, printed pp. 95–96, gives the square estimate by a Vitali covering. Together with $|Df|_{\mathrm{op}}^2\le KJ_f$, this controls local $L^2$ energy. Its differentiability input is the Gehring–Lehto theorem in [F4].

[F6] At a differentiability point the singular-value ratio of the real derivative is
$$\frac{|f_z|+|f_{\bar z}|}{|f_z|-|f_{\bar z}|}.$$
The inequality that this ratio is at most $K$ is equivalent to $|f_{\bar z}|\le ((K-1)/(K+1))|f_z|$ ([[def-wirtinger-derivatives]], algebra).

[F7] If a homeomorphism is differentiable at $z$ with invertible derivative $A$, then its local-homology orientation multiplier is $\operatorname{sgn}\det A$: on a sufficiently small sphere, the straight homotopy from $f(z+v)-f(z)$ to $Av$ avoids zero because the differentiability remainder is smaller than $\frac12\min_{|u|=1}|Au|\,|v|$. Homotopy invariance, excision and functoriality identify this sphere degree with the local homology map ([[thm-singular-chain-homotopy-formula]], [[prop-relative-homology-is-functorial-for-maps-of-pairs]], [[thm-excision-for-singular-homology]], [[thm-local-homology-detects-interior-points-boundary-points-and-dimension]], [[thm-determinant-sign-detects-orientation-change]], [[lem-smooth-orientation-sign-is-the-local-integral-homology-multiplier]]).

[F8] The Beltrami coefficient and least analytic dilatation are defined in [[def-beltrami-coefficient-and-maximal-dilatation]]. Geometric inversion preserves both bounds and orientation by rearranging the definition; apply the equivalence proved here to obtain its analytic inverse, without citing a later inverse-coefficient theorem.

## Proof

**Proof technique:** use annular and quadrilateral modulus distortion in the analytic direction; use ACL, the local Jacobian-area estimate and infinitesimal quadrilaterals in the geometric direction.

1.1 Assume (b). By [F3, F4], $f$ is differentiable almost everywhere. At any point $z$ where $Df(z)$ exists and is nonsingular, write $f(z+v)-f(z)=Av+o(|v|)$ with $A=Df(z)$. If $c=\min_{|u|=1}|Au|>0$, then for all sufficiently small $r$, the straight homotopy from $v\mapsto f(z+v)-f(z)$ to $v\mapsto Av$ stays nonzero on $|v|=r$, since the remainder is less than $cr/2$. Hence the induced map on local homology has the same sign as $A$, namely $\operatorname{sgn}\det A$; this is the determinant orientation rule in [F7]. At singular differentiability points $J_f=0$. If $f$ were orientation-reversing, it would follow that $J_f\le0$ almost everywhere. The analytic inequality gives $J_f=|f_z|^2-|f_{\bar z}|^2\ge(1-k^2)|f_z|^2\ge0$, so $J_f=0$ and $Df=0$ almost everywhere. By ACL and the one-dimensional fundamental theorem, on almost every horizontal segment in any small rectangle the restriction of $f$ would be constant, contradicting injectivity. Thus $f$ preserves orientation. Finally [F2] gives the modulus bounds in (a). [F1, F2, F3, F4, F7, given]

1.2 Assume (a). Fix a rectangle $R\Subset\Omega$ and define the finite Borel measure $\nu(B)=|f(\{(x,y)\in R:y\in B\})|$ on $\mathbb R$. Let $A(y)=\nu((-\infty,y))$. Applying the measure-differentiation theorem in [F5] to the forward and backward half-intervals, which shrink nicely to $y$, shows that $A'(y)$ exists and is finite for almost every $y$. At such a height choose finitely many disjoint intervals $(u_j,v_j)$, of total length $l$, and put $d_j=|f(v_j,y)-f(u_j,y)|$. For strips of height $t$ above these intervals, uniform continuity makes every path joining the image vertical sides have length at least $(d_j-\varepsilon)_+$ when $t$ is sufficiently small. Constant density one and the geometric lower modulus bound give $(d_j-\varepsilon)_+^2\le K(v_j-u_j)|f(R_j)|/t$. Their open images are disjoint and lie in the full strip, so Cauchy–Schwarz gives $(\sum_j(d_j-\varepsilon)_+)^2\le Kl(A(y+t)-A(y))/t$. Let $t\downarrow0$ and then $\varepsilon\downarrow0$. The bound $\sum_jd_j\le\sqrt{KlA'(y)}$ is exactly absolute continuity on the horizontal line. Repeat vertically and cover by countably many interior rectangles. Partial derivatives exist almost everywhere; [F4]'s fixed-constant rectangle argument gives total differentiability almost everywhere. [F1, F3, F4, F5, given, construct]

1.3 At a differentiability point with singular values $s_1\ge s_2>0$, use a small square aligned with the right singular vectors and rescale by its side length. The image lies in an $o(1)$ neighborhood of the linear rectangle of dimensions $s_1,s_2$, so its area is at most $s_1s_2+o(1)$. Every path joining the image sides perpendicular to the first singular vector has length at least $s_1-o(1)$, by endpoint separation. Constant density one therefore gives image modulus at most $(s_1s_2+o(1))/(s_1-o(1))^2$. The source square modulus is one, so its geometric lower bound gives $1/K\le s_2/s_1$ in the limit. Hence $s_1/s_2\le K$, equivalent to the Beltrami inequality in [F6]. If the derivative has rank one, the same rescaled image has area $o(1)$ while the joining length remains bounded below, contradicting that lower modulus bound. Rank zero satisfies the inequality directly. This proves the sharp differential bound without presuming continuity at a degenerate quadrilateral or a later inverse result. [F1, F4, F6, given, algebra]

1.4 By the derivative bound, $\|Df\|_{\mathrm{op}}^2\le KJ_f$ almost everywhere. The independently proved lower area inequality [F4]–[F5] gives $\int_Q\|Df\|_{\mathrm{op}}^2\le K|f(Q)|$ on every interior square. The Hilbert–Schmidt square is at most twice this, so both partials are locally square integrable. The ACL characterization now identifies them as weak derivatives; the bounded continuous map is also locally square integrable. Thus $f\in W^{1,2}_{\mathrm{loc}}$, proving (b). [F3, F4, F5, given, algebra]

2.1 The two implications hold for each $K\ge1$, so the least geometric constant and the least analytic constant coincide. The geometric definition gives the same bounds and orientation for the inverse. Applying the implication just proved to that inverse gives its analytic K-quasiconformality with the same least constant. Finally, the Beltrami definition gives $K_f=1$ iff $\|\mu_f\|_\infty=0$, which is equivalent to $\mu_f=0$ almost everywhere.[F1, F2, step 1.1, step 1.4, F8, given] ∎
