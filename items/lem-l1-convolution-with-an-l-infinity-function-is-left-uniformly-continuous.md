---
id: lem-l1-convolution-with-an-l-infinity-function-is-left-uniformly-continuous
kind: lemma
title: L1 convolution smooths bounded functions into UCB
status: published
origin: pipeline
dependency_level: 2
deps:
  - def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group
  - def-complex-haar-l-infinity-space
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-left-haar-integral-and-left-haar-measure
  - def-topological-group
  - thm-continuous-preimages-of-borel-sets-are-borel
  - lem-haar-change-of-variables-under-inversion
  - lem-haar-translations-are-strongly-continuous-on-lp-one-and-two
  - def-convolution-on-cc-and-l1-of-a-group
  - lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
  - lem-convolution-preserves-cc-and-is-associative
  - thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces
  - thm-finite-products-of-compact-spaces
  - thm-compactness-under-continuous-maps
  - thm-compact-subset-of-a-hausdorff-space-is-closed
  - def-borel-sigma-algebra
  - def-compact-support-c-c-and-c-zero-on-an-lch-space
  - thm-integral-triangle-inequality
  - thm-linearity-of-the-lebesgue-integral-on-l-one
  - def-axiom-of-choice
proof_strategy: direct
axiom_use: AC is used through the published strong-continuity and L1-convolution suppliers, whose Cc-density/completeness arguments assume it; the finite partition in the compact-support argument uses only finite choice.
provenance:
  statement: literature-derived
  proof: ai-altered
verification:
  audited: "2026-10-08"
  judge:
    model: "gpt-6.1-sol"
    verdict: pass
    date: 2026-10-08
sources:
  references:
    - title: "Bachir Bekka, Pierre de la Harpe and Alain Valette, Kazhdan's Property (T)"
      url: "https://perso.univ-rennes1.fr/bachir.bekka/KazhdanTotal.pdf"
      locator: "Appendix G, §G.3, printed p. 453 (the convolution of an L1 function and an L-infinity function lies in UCB)"
    - title: "Anne Thomas, The Banach-Tarski Paradox and Amenability, Lecture 20: Invariant Mean implies Reiter's Property"
      url: "https://www.maths.usyd.edu.au/u/athomas/amenability/Lecture20_2012_InvMeanImpliesReiter.pdf"
      locator: "UCB smoothing lemma, PDF p. 13 (the slide labelled 10, stating f*phi is in UCB)"
---

## Statement

Assume AC. Let $G$ be a locally compact Hausdorff group with fixed left Haar
measure $\mu$, and set $L_gf(x):=f(g^{-1}x)$. For $f,b\in L^1(G)$ and
$\varphi\in L^\infty(G)$, define
$$
(f*\varphi)(x):=\int_G f(y)\varphi(y^{-1}x)\,d\mu(y)\qquad(x\in G).
$$
This formula defines an actual bounded continuous function independent of the
representatives, with
$$\|f*\varphi\|_{\sup}\le\|f\|_1\|\varphi\|_\infty.$$
It belongs to $\mathrm{UCB}(G)$ and satisfies
$$\|L_g(f*\varphi)-f*\varphi\|_{\sup}\le\|L_gf-f\|_1\|\varphi\|_\infty$$
for every $g\in G$, as well as $L_g(f*\varphi)=(L_gf)*\varphi$. The operation
is bilinear in $f$ and $\varphi$. With the extended $L^1$ convolution of
[[def-convolution-on-cc-and-l1-of-a-group]], it also satisfies
$$ (f*b)*\varphi=f*(b*\varphi)\qquad(f,b\in L^1(G)). $$

## Facts & Assumptions

**Given:** AC, an LCH group $G$ with a fixed left Haar measure $\mu$, $f,b\in L^1(G)$, and $\varphi\in L^\infty(G)$.

[F1] The complex Haar spaces consist of Borel-measurable functions modulo almost-everywhere equality; $L^1$ integrability is measured by $\int|f|$, and the $L^\infty$ norm is the essential supremum ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]], [[def-complex-haar-l-infinity-space]]).

[F2] Left Haar measure is left invariant and finite on compact sets ([[def-left-haar-integral-and-left-haar-measure]]). The inversion formula is $\int u(y^{-1})\,d\mu(y)=\int u(y)\Delta_G(y^{-1})\,d\mu(y)$ for nonnegative Borel $u$; in particular inversion sends Borel null sets to null sets ([[lem-haar-change-of-variables-under-inversion]]).

[F3] Continuous group operations have Borel preimages of Borel sets; for fixed $x$, the map $y\mapsto y^{-1}x$ is continuous ([[def-topological-group]], [[thm-continuous-preimages-of-borel-sets-are-borel]]).

[F4] The complex integral is linear and satisfies $|\int u\,d\mu|\le\int|u|\,d\mu$ for integrable $u$ ([[thm-linearity-of-the-lebesgue-integral-on-l-one]], [[thm-integral-triangle-inequality]]).

[F5] Under AC, $g\mapsto L_gf$ is norm-continuous in $L^1(G)$ for every $f\in L^1(G)$ ([[lem-haar-translations-are-strongly-continuous-on-lp-one-and-two]]).

[F6] Under AC, extended convolution is a bounded bilinear operation on $L^1(G)$, agrees with the compactly supported formula on $C_c(G)$, and satisfies $\|u*v\|_1\le\|u\|_1\|v\|_1$; also $C_c(G)$ is dense in $L^1(G)$ ([[def-convolution-on-cc-and-l1-of-a-group]], [[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]], [[lem-convolution-preserves-cc-and-is-associative]]).

[F7] Fubini's theorem applies to integrable functions on sigma-finite product measure spaces ([[thm-fubini-theorem-for-l-one-on-sigma-finite-product-spaces]]). Restrictions of Haar measure to compact sets are finite, hence sigma-finite; finite products of compact sets are compact ([[thm-finite-products-of-compact-spaces]], [[thm-compactness-under-continuous-maps]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]]).

[F8] Compact subsets of a Hausdorff space are closed, and finite Borel partitions of a compact set are measurable ([[thm-compact-subset-of-a-hausdorff-space-is-closed]], [[def-borel-sigma-algebra]]). The defining condition for $\mathrm{UCB}(G)$ is sup-norm continuity of the left-translation orbit, and every such function is continuous ([[def-left-uniformly-continuous-bounded-functions-on-a-locally-compact-group]]).

[A1] AC is used through [F5] and [F6], in the exact forms stated by their suppliers ([[def-axiom-of-choice]]).

## Proof

**Proof technique:** direct.

1.1 Choose Borel representatives of $f$ and $\varphi$, and let $M:=\|\varphi\|_\infty$. For each $x\in G$, the preimage of a Borel null set $N$ under $y\mapsto y^{-1}x$ is $xN^{-1}$, which is null by inversion and left invariance [F2]; thus changing either representative changes the integrand only on a null set. For every $\eta>0$, the set where $|\varphi|>M+\eta$ is null by [F1], so its pullback is null and $y\mapsto f(y)\varphi(y^{-1}x)$ is integrable. The integral is therefore defined for every $x$, independent of representatives, and [F4] gives $|(f*\varphi)(x)|\le(M+\eta)\|f\|_1$; letting $\eta\downarrow0$ yields $\|f*\varphi\|_{\sup}\le\|f\|_1M$. [F1, F2, F4]

2.1 First let $f,b\in C_c(G)$, set $K:=\operatorname{supp}f$, $L:=\operatorname{supp}b$, and $C:=KL$, and fix $x\in G$. These are compact sets of finite Haar measure, and $K,C$ are Borel by [F2, F7, F8]. On $K\times C$ the function $\Psi(y,z):=b(y^{-1}z)$ is continuous. Compactness gives, for each $\delta>0$, a finite Borel partition $E_1,\ldots,E_m$ of $K$ and points $y_j\in K$ such that $|\Psi(y,z)-\Psi(y_j,z)|<\delta$ for $y\in E_j$ and $z\in C$. Replacing $\Psi$ by $\sum_j\mathbf1_{E_j}(y)b(y_j^{-1}z)$ makes the kernel a finite sum of product-measurable terms, so Fubini on the finite restricted measures applies [F3, F7, F8]. The error in either iterated integral is at most $\delta\|f\|_1\mu(C)M$, and hence tends to zero with $\delta$. Thus $\int_C\int_K f(y)b(y^{-1}z)\varphi(z^{-1}x)\,d\mu(y)\,d\mu(z)=\int_K\int_C f(y)b(y^{-1}z)\varphi(z^{-1}x)\,d\mu(z)\,d\mu(y)$. For each fixed $y$, substituting $z=yw$ in the inner integral on the right and using left invariance gives $\int_L b(w)\varphi(w^{-1}y^{-1}x)\,d\mu(w)=(b*\varphi)(y^{-1}x)$. The left iterated integral is $((f*b)*\varphi)(x)$ by the compactly supported convolution formula, and the right one is $f*(b*\varphi)(x)$. This proves associativity for $f,b\in C_c(G)$. [F2, F3, F7, F8, step 1.1]

2.2 Linearity of the integral gives bilinearity in $f$ and $\varphi$. By substituting $y=gz$ and using left invariance, $(L_gf)*\varphi(x)=\int_G f(z)\varphi(z^{-1}g^{-1}x)\,d\mu(z)=(f*\varphi)(g^{-1}x)=L_g(f*\varphi)(x)$. Applying the same formula to the difference gives $|L_g(f*\varphi)(x)-(f*\varphi)(x)|\le\|L_gf-f\|_1M$ for every $x$; taking the supremum proves the stated defect estimate. [F2, F4, step 1.1]

3.1 By [A1], the AC hypothesis of [F5] is met, so $\|L_gf-f\|_1\to0$ as $g\to e$. Step 2.2 therefore gives $\|L_g(f*\varphi)-f*\varphi\|_{\sup}\to0$, which is exactly membership in $\mathrm{UCB}(G)$ by [F8]. That definition also gives continuity, and step 1.1 gives boundedness. [A1, F5, F8, step 2.2, step 1.1]

4.1 For general $f,b\in L^1(G)$, [A1] meets the AC hypothesis of [F6], so choose sequences $f_n,b_n\in C_c(G)$ converging in $L^1$. The convolution bound in [F6] and the smoothing bound of step 1.1 imply that both $(f_n*b_n)*\varphi$ and $f_n*(b_n*\varphi)$ converge uniformly, respectively, to $(f*b)*\varphi$ and $f*(b*\varphi)$: each difference is bounded by $\bigl(\|f_n-f\|_1\|b_n\|_1+\|f\|_1\|b_n-b\|_1\bigr)M$. Since the two expressions agree for every $n$ by step 2.1, their limits agree, proving associativity for arbitrary $L^1$ data. Together with steps 1.1–3.1 this proves the remaining assertions. [A1, F6, step 1.1, step 2.1] ∎

## Sources

BHV, *Kazhdan's Property (T)*, Appendix G, §G.3, printed p. 453 (PDF p. 459), states that convolution of $f\in L^1(G)$ and $\varphi\in L^\infty(G)$ belongs to $\mathrm{UCB}(G)$. Thomas, *The Banach–Tarski Paradox and Amenability*, Lecture 20, PDF p. 13, UCB smoothing lemma (slide labelled 10), states the same membership claim. The actual-function formula, representative independence, norm estimate, equivariance, and associativity are proved here; the source statements do not supply these details.
