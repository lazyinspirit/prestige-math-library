---
id: lem-cft-affine-off-critical-shapovalov-and-linkage
kind: lemma
title: "Off-critical affine Shapovalov factors and strong linkage"
status: published
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
proof_strategy: direct
deps:
  - def-kac-moody-verma-module
  - thm-poincare-birkhoff-witt
  - thm-generalized-kac-moody-casimir-is-central-and-scalar-on-highest-weight-modules
  - def-untwisted-affine-central-extension
  - lem-finite-semisimple-cartan-root-and-string-structure
  - def-degree-derivation-and-full-untwisted-affine-algebra
  - def-null-root-central-coroot-and-affine-level
  - lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root
  - thm-loop-and-affine-gcm-presentations-are-isomorphic
  - def-real-and-imaginary-kac-moody-roots
dependency_roles:
  def-kac-moody-verma-module: mathematical-premise
  thm-poincare-birkhoff-witt: mathematical-premise
  thm-generalized-kac-moody-casimir-is-central-and-scalar-on-highest-weight-modules: mathematical-premise
  def-untwisted-affine-central-extension: mathematical-premise
  lem-finite-semisimple-cartan-root-and-string-structure: mathematical-premise
  def-degree-derivation-and-full-untwisted-affine-algebra: mathematical-premise
  def-null-root-central-coroot-and-affine-level: mathematical-premise
  lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root: mathematical-premise
  thm-loop-and-affine-gcm-presentations-are-isomorphic: mathematical-premise
  def-real-and-imaginary-kac-moody-roots: mathematical-premise
provenance:
  statement: ai-altered
  proof: ai-generated
verification:
  judge:
    model: gpt-6-luna
    verdict: pass
    date: 2026-11-06
  verified:
    model: gpt-6.1-sol
    verdict: pass
    date: 2026-11-04
    scope: Delegated native content review and accepted repair/consumer chain for this item in conformal-field-theory-string-theory-step3-fresh-2026-11-04; source-reading limits remain those recorded in the review packets. No personal owner audit or new review is claimed.
    delegated_by: /root (workflow orchestrator under owner authorization)
sources:
  references:
    - title: "Tomoyuki Arakawa, Two-sided BGG resolutions of admissible representations"
      url: https://arxiv.org/pdf/1207.4276v3
      locator: "Noncritical Verma/linkage setting; the determinant and valuation arguments are reconstructed here."
    - title: "Pavel Etingof, Representations of Lie Groups"
      url: https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec_full.pdf
      locator: "The finite Shapovalov argument is adapted locally; its finite Statement is not used as an affine theorem."
dependency_level: 0
---

## Statement

Let $M(\lambda)$ be an untwisted affine Verma module including the derivation, with $t=\lambda(K)+h^\vee\ne0$. Write $Q=\bigoplus_{i=0}^{\ell}\mathbb Z\alpha_i$ and $Q_+=\bigoplus_{i=0}^{\ell}\mathbb Z_{\ge0}\alpha_i$ for the affine root lattice and its positive cone, and $\widehat{\mathfrak n}_-$ for the negative-root subalgebra. Define $P:Q\to\mathbb Z_{\ge0}$ by $P(\beta)=\dim U(\widehat{\mathfrak n}_-)_{-\beta}$ for $\beta\in Q_+$ and $P(\beta)=0$ otherwise. Equivalently, $P(\beta)$ counts ordered PBW monomials of total root degree $-\beta$, using one generator per member of a basis of each negative root space; thus root-space multiplicities are included and $P(0)=1$. At depth $\beta\in Q_+$ its contravariant Gram determinant is
$$D_\beta(\lambda)\doteq t^{a_\beta}\prod_{\gamma\in\widehat\Delta^{\mathrm{re}}_+}\prod_{m\ge1}(\langle\lambda+\widehat\rho,\gamma^\vee\rangle-m)^{P(\beta-m\gamma)},\qquad a_\beta\in\mathbb Z_{\ge0}.$$
Every fixed-depth product is finite. In particular a positive integral shifted real-root pairing gives an actual Verma embedding. The off-critical Jantzen filtration defined below satisfies the real-root sum formula, and every simple highest subquotient of $M(\lambda)$ is strongly linked by positive-integral real-root reflections. A homomorphism from a simple affine Verma into a Verma has dimension at most one. The formula leaves the irrelevant critical exponent $a_\beta$ unspecified.

For the filtration, take $A=\mathbb C\lbrack\lbrack u\rbrack\rbrack$ and choose $\epsilon\in\widehat{\mathfrak h}^*$ with $\langle\epsilon,\gamma^\vee\rangle\ne0$ for every positive real root $\gamma$ with $\langle\lambda+\widehat\rho,\gamma^\vee\rangle\in\mathbb Z_{>0}$. Such a direction is supplied by $\epsilon=\widehat\rho$, normalized by $\langle\widehat\rho,\alpha_i^\vee\rangle=1$: every positive real coroot is a nonzero nonnegative integral combination of simple coroots. Let $A_{\lambda+u\epsilon}$ be the rank-one module for the positive Borel over $A$, on which the positive-root algebra acts by zero and $h$ acts by $\lambda(h)+u\epsilon(h)$. Set $M_A=(U(\widehat{\mathfrak g})\otimes_{\mathbb C} A)\otimes_{U(\widehat{\mathfrak b}_+)\otimes_{\mathbb C} A}A_{\lambda+u\epsilon}$. Its root-degree pieces are finite free $A$-modules. Let $S_A$ be the symmetric contravariant form given by the Harish-Chandra projection and Chevalley anti-involution in Proof 1.1, evaluated at $\lambda+u\epsilon$, with highest-vector norm one. For $j\ge0$ put $M_A^j=\{v\in M_A:S_A(v,M_A)\subseteq u^jA\}$ and $J^jM(\lambda)=(M_A^j+uM_A)/uM_A\subseteq M_A/uM_A=M(\lambda)$. Then $J^1M(\lambda)$ is the radical of $S_\lambda$ and, coefficientwise as formal weight characters,
$$\sum_{j\ge1}\operatorname{ch}J^jM(\lambda)=\sum_{\substack{\gamma\in\widehat\Delta^{\mathrm{re}}_+\\m=\langle\lambda+\widehat\rho,\gamma^\vee\rangle\in\mathbb Z_{>0}}}\operatorname{ch}M(\lambda-m\gamma),\qquad \operatorname{ch}V=\sum_\nu(\dim V_\nu)e^\nu.$$
Each coefficient in both sums is finite. Here strong linkage means that a simple highest subquotient of highest weight $\mu$ admits a finite chain $\lambda=\lambda_0,\ldots,\lambda_s=\mu$ with $\lambda_{i+1}=\lambda_i-m_i\gamma_i=s_{\gamma_i}(\lambda_i+\widehat\rho)-\widehat\rho$, $\gamma_i\in\widehat\Delta^{\mathrm{re}}_+$ and $m_i=\langle\lambda_i+\widehat\rho,\gamma_i^\vee\rangle\in\mathbb Z_{>0}$; the empty chain is allowed.

## Facts & Assumptions

**Given:** The objects, normalizations and hypotheses in the Statement.

[F1] [[def-kac-moody-verma-module]] is induced from the positive Borel. [[thm-poincare-birkhoff-witt]] applies to the supplied ordered affine basis and gives the polynomial associated graded algebra.

[F2] [[thm-generalized-kac-moody-casimir-is-central-and-scalar-on-highest-weight-modules]] applies to these restricted highest modules and gives the scalar $(\eta,\eta+2\widehat\rho)$. The sum is pointwise finite.

[F3] [[def-untwisted-affine-central-extension]] gives the loop central extension. [[def-degree-derivation-and-full-untwisted-affine-algebra]] adjoins $d$ with $[d,x_m]=mx_m$; [[def-null-root-central-coroot-and-affine-level]] gives $\widehat{\mathfrak h}=\mathfrak h\oplus\mathbb CK\oplus\mathbb Cd$ (writing $K=c$) and $\delta(d)=1$, $\delta|_{\mathfrak h\oplus\mathbb CK}=0$. [[lem-the-affine-simple-root-alpha-zero-is-delta-minus-the-highest-root]] gives $\alpha_0=\delta-\theta$, $\alpha_0^\vee=K-\theta^\vee$, and the finite simple roots/coroots. [[thm-loop-and-affine-gcm-presentations-are-isomorphic]] identifies these current data with the affine Kac–Moody realization used in [F1–F2]. Real roots mean the Weyl orbit of those simple roots, as in [[def-real-and-imaginary-kac-moody-roots]]. In current coordinates their root spaces are $\mathfrak g_\alpha\otimes t^n$ of root $\alpha+n\delta$, and the nonzero imaginary root spaces are $\mathfrak h\otimes t^n$ of root $n\delta$. Positivity means $n>0$, or $n=0$ and $\alpha$ finite positive. The real coroot is $\alpha^\vee+2nK/(\alpha,\alpha)$: choose $[e_\alpha,f_\alpha]=\alpha^\vee$ and use the normalized loop bracket. Define $\widehat\rho$ by $\widehat\rho(\alpha_i^\vee)=1$ and $\widehat\rho(d)=0$, so $\widehat\rho|_{\mathfrak h}=\rho$ and $\widehat\rho(K)=1+\rho(\theta^\vee)=h^\vee$. These choices fix every affine pairing used below. The choice-free [[lem-finite-semisimple-cartan-root-and-string-structure]] gives one-dimensional finite root spaces and the finite Cartan decomposition. Its semisimplicity hypothesis holds for the finite simple algebra: a nonzero solvable ideal would be the whole algebra, whereas a nonabelian simple algebra has derived algebra equal to itself and cannot be solvable. Hence real affine multiplicities are one and nonzero imaginary multiplicities are the finite Cartan rank.

## Proof


1.1 **The affine contravariant form.** Choose the ordered basis consisting of a finite root/Cartan basis tensored with integral loop modes, together with $K,d$. The Chevalley anti-involution fixes the extended Cartan and reverses roots and loop modes. PBW gives the Harish-Chandra projection $\operatorname{HC}:U\to U(\widehat{\mathfrak h})$. Define $S_\lambda(uv_\lambda,vv_\lambda)=\operatorname{HC}(\tau(u)v)(\lambda)$ for $u,v\in U(\mathfrak n_-)$. It is normalized and contravariant by the anti-involution; these properties determine it, and transposition gives symmetry. Different weights are orthogonal. Its radical is a submodule avoiding the top line. Every proper submodule is contained in it: move negative words across the pairing; the resulting highest-weight coefficient remains in that proper submodule and is zero. Thus the radical is the maximal proper submodule. Root spaces and each PBW weight space are finite dimensional directly from the untwisted current basis. [given, F1, F2, F3, algebra]

2.1 **Simple-source Hom bound from affine growth.** Any nonzero homomorphism between affine Verma modules is injective: in the PBW realization it is right multiplication by the nonzero singular-vector polynomial A in U(nminus), whose PBW associated graded is the polynomial algebra on the negative root spaces and hence a domain. [given, F1, F2, F3, step 1.1, algebra]

3.1 If a simple Verma M(mu) had two independent embeddings into M(lambda), their images would intersect trivially. A nontrivial intersection would identify both simple images, and their comparison would be an endomorphism of the simple source; such an endomorphism is scalar because its highest line is one-dimensional and generates. Thus two copies of M(mu) would embed as a direct sum. If $d=ht(\lambda-\mu)$, their cumulative PBW dimensions would satisfy $2D(N)\le D(N+d)$ for all N. [given, F1, F2, F3, step 1.1, step 2.1, algebra]

4.1 This is impossible in affine type. There is a constant B with at most B positive-root basis vectors of any principal height j: real roots have the finitely many forms alpha+n delta, imaginary roots n delta have the fixed multiplicity rank(g). For $0<z<1$, `D(N) <= z^(-N) (1-z)^(-1) product_(j>=1)(1-z^j)^(-B).` [given, F1, F2, F3, step 1.1, step 3.1, algebra]

5.1 Put $z=exp(-s)$. The logarithm of the product is at most `B sum_(m>=1) 1/[m(exp(sm)-1)] <= B pi^2/(6s).` [given, F1, F2, F3, step 1.1, step 4.1, algebra]

6.1 Taking $s=N^{-1/2}$ gives $D(N)\le C sqrt(N) exp(C' sqrt(N))$. But iteration of $2D(N)\le D(N+d)$, for $d>0$, gives exponential growth along N+nd. For $d=0$ the inequality is already impossible. Hence Hom(M(mu),M(lambda)) has dimension at most one when the source is simple. This does not assume that every positive-level Verma contains a simple Verma. [given, F1, F2, F3, step 1.1, step 5.1, algebra]

7.1 **Preliminary factorization including the critical direction.** Choose dual bases in opposite affine root spaces and ordered PBW monomials. At maximal Cartan-polynomial degree, commuting an opposite pair retains its Cartan bracket, while every unmatched or non-Cartan commutator lowers degree. Thus the top homogeneous part of $D_{\beta}$ is nonzero and, up to scalar, is `product_(gamma positive) (lambda,gamma)^( mult(gamma) sum_(m>=1) P(beta-m gamma)).` [given, F1, F2, F3, step 1.1, step 6.1, algebra]

8.1 This multiplicity formula counts each occurrence of each root-space basis vector in a PBW monomial. For real roots $mult=1$. Imaginary-root factors all have the common linear direction (lambda,delta), proportional to lambda(K). [given, F1, F2, F3, step 1.1, step 6.1, step 7.1, algebra]

9.1 If $D_{\beta}(\lambda)=0$, its kernel is part of the Shapovalov radical. Acting by positive roots on a kernel vector stays in the radical and spans a finite-dimensional space of weights above lambda-beta. A highest vector in this space has weight lambda-eta, $0<\eta\le \beta$. Equality of its generalized Casimir scalar with the original highest scalar gives `2(lambda+rhohat,eta)=(eta,eta).` [given, F1, F2, F3, step 1.1, step 6.1, step 8.1, algebra]

10.1 There are only finitely many eta in that interval. Hence every irreducible determinant factor is one of these affine linear equations: the same elementary polynomial divisibility argument as in the finite proof applies to their finite union. Comparison of leading linear directions forces eta to be proportional to a positive root, because every direction in the top homogeneous determinant comes from a root. A real root is primitive in the affine root lattice, being Weyl-conjugate to an original simple root. Thus $\eta=m \gamma$ with positive integer m in a real-root direction, giving the factor $\langle \lambda+\widehat\rho,\gamma^\vee\rangle-m$. In the imaginary direction $\eta=c \delta$ is isotropic and its equation is exactly $t=0$. This isolates every possible extra factor on the critical hyperplane; it cannot introduce an unknown off-critical real direction. [given, F1, F2, F3, step 1.1, step 6.1, step 9.1, algebra]

11.1 **Generic real hyperplane and first transverse pairing.** Fix a real factor hyperplane $H=\langle \lambda+\widehat\rho,\gamma^\vee\rangle=m$. At a generic point on H omit every other Casimir hyperplane from the preceding argument. These form a countable union of proper affine subspaces. Only $\eta=m \gamma$ has an identical Casimir equation on H: proportionality of directions followed by the constant term forces that multiple. Also omit $t=0$. For $\mu=\lambda-m \gamma$, no lower-weight Casimir equation is identical on H: a putative lower $\eta=c \gamma$ would require $-cm(\gamma,\gamma)=c^{2}(\gamma,\gamma)$, impossible for $c>0$. Therefore M(mu) is simple and the only possible lower singular weight of M(lambda) is mu. [given, F1, F2, F3, step 1.1, step 6.1, step 10.1, algebra]

12.1 Since H is assumed to occur as a factor, the radical is nonzero and contains a singular vector of weight mu. The simple-source Hom bound makes its singular line unique. The embedded M(mu) is the entire radical: a nonzero quotient of the radical by that copy has a highest vector at a minimal remaining depth; the Casimir equation would force that vector back to the already exhausted mu-space. Hence the radical dimension at lambda-beta is P(beta-m gamma). [given, F1, F2, F3, step 1.1, step 6.1, step 10.1, step 11.1, algebra]

13.1 Deform transversely by lambda+u epsilon with $\langle \epsilon,\gamma^\vee\rangle=1$. Differentiating the contravariant form on the radical gives a contravariant form on the simple M(mu), so it is either zero or perfect. It cannot be zero on its highest line. If it were, the symmetric Gram equation lets one correct a radical highest vector to u0+u u1 whose Gram pairing vanishes modulo $u^{2}$. Adjacent higher-weight Gram matrices are invertible, so contravariance makes this corrected vector singular modulo $u^{2}$. The generalized Casimir would then act on it both by the scalar for lambda+u epsilon and by the scalar for mu+u epsilon. Their first derivatives differ by `2(lambda-mu,epsilon)=m(gamma,gamma)!=0,` [given, F1, F2, F3, step 1.1, step 6.1, step 10.1, step 12.1, algebra]

14.1 a contradiction. Thus the derivative pairing is perfect. A block determinant in a basis adapted to the radical shows that the factor order is exactly P(beta-m gamma). [given, F1, F2, F3, step 1.1, step 6.1, step 10.1, step 13.1, algebra]

15.1 Finally compare degrees separately in each real-root linear direction. The preliminary leading homogeneous part gives total degree sum_m P(beta-m gamma) in that direction. Every present real factor has exactly its prescribed exponent, and every absent one has exponent zero. All prescribed exponents are nonnegative; equality of the finite total degrees therefore forces all of them to be present with their prescribed exponents. The unknown imaginary contribution has a different linear direction and cannot absorb any of this degree. This proves the asserted determinant up to a power of t. [given, F1, F2, F3, step 1.1, step 6.1, step 10.1, step 14.1, algebra]

16.1 **Embeddings and linkage, without a character-exactness inference.** At a generic point on H the radical gives a nonzero singular vector at mu. In fixed PBW coordinates the simultaneous equations $e_{i} v=0$ at that weight are a finite polynomial matrix in lambda. The maximal minors vanish on a dense subset of H and therefore identically on H. Consequently there is a nonzero singular vector at every point of H, including intersections with other real hyperplanes. This supplies an embedding $M(s_\gamma\mathbin\cdot\lambda)$ into M(lambda) whenever $\langle \lambda+\widehat\rho,\gamma^\vee\rangle=m>0$. The map is injective by the PBW domain argument above. [given, F1, F2, F3, step 1.1, step 6.1, step 10.1, step 15.1, algebra]

17.1 For a fixed noncritical lambda choose a generic one-parameter deformation over C[[u]]. Its first Jantzen term is the radical because the contravariant form is nondegenerate off the union of the real factor hyperplanes and the critical one. On each finite PBW weight space, diagonal reduction over the DVR shows that the sum of the dimensions of the positive Jantzen layers is the determinant valuation. The displayed determinant therefore gives the coefficientwise identity `sum_(j>=1) ch J^j M(lambda) = sum_(gamma real+, m=<lambda+rhohat,gamma-coroot> in Z>0) ch M(lambda-m gamma).` [given, F1, F2, F3, step 1.1, step 6.1, step 10.1, step 15.1, step 16.1, algebra]

18.1 Each coefficient is finite. This identity is used for linkage, not as a proof of a BGG complex's exactness. If an irreducible $L(\mu), \mu\langle \lambda$, occurs, it occurs in $J^{1}$. Truncate above the fixed depth of mu: there are only finitely many weight vectors, so multiplicities in this truncated highest-weight filtration are finite and additive. Positivity in the identity forces L(mu) to occur in at least one Verma on the right. Its highest weight is strictly below lambda. Induction on ht(lambda-mu) gives a chain of positive-real-root embeddings from lambda to mu. Thus all simple subquotients are strongly linked. In particular they lie in the dot orbit of the integral real-root group. [given, F1, F2, F3, step 1.1, step 6.1, step 10.1, step 15.1, step 17.1, algebra] ∎
