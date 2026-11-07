---
id: lem-cft-one-point-ward-blocks-cusp-fuchsian-equation
kind: lemma
title: Cusp Fuchsian equations for genus-one one-point Ward blocks
status: draft
origin: pipeline
pipeline_run: conformal-field-theory-string-theory-all-97-2026-10-26
domain: mathematics
library: mathematics
category: quantum-field-theory-mathematics
deps:
  - lem-cft-genus-one-ward-identities-modular-covariant
  - lem-cft-analytic-fuchsian-system-finite-log-fundamental-solutions
  - lem-cft-c2-cofinite-modules-finitely-generated
  - lem-cft-cyclic-weak-module-difference-one-spanning
dependency_roles:
  lem-cft-analytic-fuchsian-system-finite-log-fundamental-solutions: mathematical-premise
  lem-cft-genus-one-ward-identities-modular-covariant: mathematical-premise
  lem-cft-c2-cofinite-modules-finitely-generated: mathematical-premise
  lem-cft-cyclic-weak-module-difference-one-spanning: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-generated
  proof: ai-generated
dependency_level: 2
---

## Statement

Let V be a C2-cofinite conformal vertex algebra of CFT type, and W a grading-restricted generalized V-module. Use the explicitly defined D_τ and Q_{u,τ} of [[lem-cft-genus-one-ward-identities-modular-covariant]]. For every fixed w∈W there are an integer m≥1 and germs a_0,…,a_{m−1} of holomorphic functions at q=0, depending only on V,W,w, such that every analytic one-point Ward block F satisfies

$$\left(\delta^m+\sum_{j=0}^{m-1}a_j(q)\delta^j\right)F(w;τ)=0,\qquad q=e^{2πiτ},\quad\delta=q\frac d{dq}.$$

Thus the vector (F(w),δF(w),…,δ^{m−1}F(w)) satisfies a system δY=A(q)Y with A holomorphic at 0: it has a regular singular point at the cusp in this explicit Fuchsian-system sense. The coefficients are independent of F. The vector space of all analytic one-point Ward blocks W→Hol(H) is finite dimensional and is preserved by modular substitutions. Every such block has a convergent cusp expansion with finitely many exponent classes and a common finite logarithm-degree bound for all inserted vectors. No pseudo-trace realization or modular invariance of the trace span is asserted.

## Facts & Assumptions

**Given:** V,W,w have the hypotheses in the Statement.

[F1] [[lem-cft-c2-cofinite-modules-finitely-generated]] gives a finite homogeneous generalized-weight generating set for W and finitely many weight cosets modulo Z.

[F2] [[lem-cft-cyclic-weak-module-difference-one-spanning]] gives strict ordered mode spanning words for each generator, with a finite common upper cutoff on their indices and letters in a fixed finite set of homogeneous positive-weight states.

[F3] [[lem-cft-genus-one-ward-identities-modular-covariant]] defines D_τ,Q_{u,τ} and the differential and elliptic Ward identities. In particular F(Q_{u,τ}v;τ)=0 and (2πi)^2δF(v;τ)=F(D_τv;τ).

[F4] [[lem-cft-analytic-fuchsian-system-finite-log-fundamental-solutions]] proves a convergent finite-log fundamental solution basis spanning every analytic solution germ of an analytic Fuchsian system.

## Proof

1.1 Put C2(W)=span{u_{(-2)}v:u∈V,v∈W}. Apply F2 to the finitely many generators in F1. Every strict word with leftmost index −k≤−2 belongs to C2(W), since (T^{k−2}u)_{(-2)}=(k−1)!u_{(-k)}. The remaining words have distinct indices in the finite interval {−1,0,…,N−1}, so their number is finite. Their images span W/C2(W). The space C2(W) is generalized-weight homogeneous, by the mode weight-shift rule. Choose finitely many generalized-weight-homogeneous representatives X of this quotient. Within each of the finitely many weight cosets of W, all representatives have integer levels bounded above and W itself has levels bounded below. [F1, F2, algebra]

1.2 The lattice functions in F3 have convergent cusp series $$G_{2k}(q)=2\sum_{n≥1}n^{-2k}+\frac{2(2πi)^{2k}}{(2k-1)!}\sum_{n≥1}\frac{n^{2k-1}q^n}{1-q^n}\quad(k≥1).$$ For k=1 this means the holomorphic quasi-period G_2 used in F3. To verify the formula with that convention, expand the normally convergent identity $$ζ_τ(z)=G_2(τ)z+π\cot(πz)+4π\sum_{n≥1}\frac{q^n}{1-q^n}\sin(2πnz)$$ in its strip |Im z|<Im τ. The right side has the lattice poles and residues of ζ, by expanding the geometric denominators and continuing across adjacent strips; its quasi-periods agree with those obtained from these poles. Their difference is an entire doubly periodic function plus a linear term; oddness and the vanishing linear Laurent coefficient of ζ determine both terms. The linear coefficient gives G_2=π²/3−8π²Σnq^n/(1−q^n), and the higher odd coefficients give the displayed G_{2k}. Alternatively the same computation follows by pairing λ=m+nτ and using the partial-fraction expansion of πcot(πz). All displayed q-series converge normally for |q|<1: for |q|≤ρ<1 their summands are bounded by n^{2k−1}ρ^n/(1−ρ). Consequently each coefficient is a holomorphic germ at 0. Only finitely many such coefficients act on a fixed vector, by F3. [F3, algebra]

2.1 Let R=C{q}, the ring of holomorphic germs at 0, and T=R⊗_C W, an algebraic tensor product. Let J be the R-submodule generated by all Q_{u,q}v, using the series of step 1.2. Since Q_{u,q}v is u_{(-2)}v plus terms u_{(2k)}v of strictly smaller generalized weight, the finite representative set X spans T/J over R. More explicitly, for a generalized-homogeneous vector above the largest representative level in its coset, express it as a linear combination of X and homogeneous C2-products; replace each product by its Q-relation. Each replacement lowers its integer level by at least three. Induction from the lower bound of that coset terminates. For levels below that maximum the same argument applies whenever the class is not already represented by X, because X spans the homogeneous quotient W/C2(W). Thus T/J is finitely generated over R. This uses no differentiation stability of J. [F3, step 1.1, step 1.2, algebra]

3.1 The ring R is Noetherian: any nonzero ideal contains an element of least vanishing order d; that element is q^d times a unit, so the ideal is exactly (q^d). Submodules of R^t are finitely generated, by induction on t: project a submodule to the last coordinate, choose one preimage of a generator of that image ideal if it is nonzero, and add the finitely many generators of the kernel in R^{t−1}. A finitely generated R-module is a quotient of R^t; taking preimages proves all its submodules are finitely generated and every ascending chain stabilizes. In particular T/J has this property. [step 2.1, algebra]

4.1 Define a C-linear operator on the free module T by $$\nabla(f\otimes v)=(2πi)^2\delta f\otimes v+f\,D_qv.$$ The coefficients and their derivatives belong to R; D_qv is a finite sum in T. Thus every actual iterate t_j=∇^j(1⊗w) is an element of T. The ascending chain of R-submodules of T/J spanned by [t_0],…,[t_j] stabilizes by step 3.1. Hence for some m≥1 there are b_0,…,b_{m−1}∈R such that t_m+Σ_{j<m}b_jt_j∈J. This argument only uses the classes of actual iterates in the free module; it neither defines ∇ on T/J nor assumes ∇J⊂J. [step 1.2, step 3.1, algebra]

5.1 For a fixed Ward block F, the map \widehat F:T→Hol on a sufficiently small punctured cusp neighborhood, with its universal covering coordinate τ, sends f⊗v to f(q)F(v;τ). It annihilates J by the Q-Ward identity. The product rule and the differential Ward identity give $$\widehat F(\nabla t)=(2πi)^2\delta\widehat F(t)$$ for every actual t∈T. Applying this repeatedly to the relation in step 4.1 gives $$((2πi)^{2m}\delta^m+\sum_{j<m}b_j(q)(2πi)^{2j}\delta^j)F(w;τ)=0.$$ Divide by the nonzero constant (2πi)^{2m}; the resulting a_j are holomorphic germs. The companion vector obeys δY=A(q)Y with superdiagonal entries 1 and last row −a_0,…,−a_{m−1}, proving exactly the claimed regular-singular system. The construction of the relation preceded the choice of F, so its coefficients are independent of F. [F3, step 4.1, algebra]

6.1 Choose the finite set X from step 1.1. Each function F(x), x∈X, satisfies one fixed finite-order equation from step 5.1, independently of F. Its local solution space has finite dimension by F4. The map taking a Ward block F to the finite tuple of these solution germs is injective: if every F(x) vanishes near the cusp, the spanning property T/J=R·X and annihilation of J give F(w)=0 there for every w, and analytic uniqueness gives F(w)=0 throughout H. Thus the entire Ward-block space has finite dimension. F4 supplies finitely many exponent classes and a uniform finite logarithm bound for each of these finitely many equations. Take the union of those exponent classes, shift representatives by integers to their least values in each class, and take the largest logarithm bound. Expressing any fixed class [w] in the finite R-spanning set X multiplies these expansions only by holomorphic germs and adds finitely many terms. It therefore creates neither a new exponent class nor a higher logarithm power. This proves the common finite-class, bounded-log convergent expansion for the whole linear map F. Finally F3 proves that every modular substitution preserves the three Ward identities. The resulting transformed linear map therefore belongs to this same finite-dimensional Ward-block space. This proves block-space modular closure, while leaving its identification with the pseudo-trace span entirely separate. [F3, F4, step 2.1, step 5.1, algebra] ∎
