---
id: lem-cm-action-admits-conjugation-compatible-polarization-and-tate-pairing
kind: lemma
title: "A CM action admits a conjugation-compatible polarization and natural Tate pairing"
status: draft
origin: pipeline
pipeline_run: number-theory-all-141-2026-10-25
dependency_level: 0
deps:
  - def-axiom-of-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-abelian-variety-dual-and-polarization
  - def-polarization-of-an-abelian-variety
  - lem-arith-dual-isogeny-kernel-and-abelian-biduality
  - lem-arith-finite-cartier-duality-and-exactness
  - lem-nonaffine-fppf-descent-of-scheme-morphisms
  - thm-global-functions-proper-integral-variety
  - lem-multiplication-by-n-on-abelian-scheme
  - thm-abelian-homomorphism-groups-finite-free-and-tate-faithful
  - lem-proper-source-to-separated-target-proper
  - thm-proper-quasi-finite-is-finite
  - thm-ample-powers-very-ample-proper-base
  - thm-segre-line-bundle-external-tensor
  - lem-ample-stable-positive-power
  - lem-ample-pullback-finite-morphism
  - def-cm-algebra-and-cm-type
  - thm-field-norm-and-trace-by-embeddings
  - lem-arith-field-prime-to-characteristic-torsion-and-tate-module
justified_by: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "J. S. Milne, Abelian Varieties, version2.00 (2008)"
      url: "https://www.jmilne.org/math/CourseNotes/AV.pdf"
      locator: "ChapterI section13 definition, Lemma13.1 and Proposition13.2, printed57–58, and section14 Rosati definition, printed61, read. Referred pairing proofs are reconstructed via actual Cartier-duality suppliers below."
    - title: "J. S. Milne, The Fundamental Theorem of Complex Multiplication (2007)"
      url: "https://arxiv.org/pdf/0705.3446"
      locator: "Theorem3.10 proof, equations(23)–(29), printed22–23, read. The compatible polarization is constructed by a rational Casimir/ample-pullback argument, not assumed."
verification: {}
---

## Statement

Assume AC. Let $A/\mathbb C$ have CM by any CM algebra $E$ with conjugation $a\mapsto\bar a$; no maximal integral order is assumed. There is an ample algebraic invertible sheaf $L$ on A whose polarization $\rho=\varphi_L:A\to A^\vee$ satisfies
$$\rho\,\iota(a)=\iota(\bar a)^\vee\rho\qquad(a\in E)$$
as rational homomorphisms. Put $\mathbb Z_\ell(1)=\varprojlim_r\mu_{\ell^r}(\mathbb C)$ with transition maps raising to $\ell$, put $\mathbb Q_\ell(1)=\mathbb Z_\ell(1)\otimes\mathbb Q_\ell$, and let $\mathbb A_f(1)$ be their restricted product with respect to $\mathbb Z_\ell(1)$. There are canonical perfect Cartier pairings $A[n]\times A^\vee[n]\to\mu_n$ and perfect Tate pairings $T_\ell A\times T_\ell A^\vee\to\mathbb Z_\ell(1)$, functorial under algebraic homomorphisms and field automorphisms. They induce a nondegenerate $\mathbb A_f$-bilinear pairing
$$\psi_\rho:V_fA\times V_fA\longrightarrow\mathbb A_f(1),\qquad \psi_\rho(x,y)=e(x,\rho y),$$
with
$$\psi_\rho(a x,y)=\psi_\rho(x,\bar a y)\qquad(a\in E\otimes\mathbb A_f).$$
For every $\sigma\in\operatorname{Aut}(\mathbb C)$, its algebraically transported polarization has pairing satisfying
$$\psi_{\sigma\rho}(\sigma x,\sigma y)=\chi_{\mathrm{cyc}}(\sigma)\,\psi_\rho(x,y).$$
These are algebraic Cartier/Tate pairings; no comparison with a topological Riemann form or integral Betti pairing is asserted or needed.

## Facts & Assumptions

**Given:** AC and the complex CM variety with its faithful rational E-action. An E-compatible polarization or pairing is not assumed.

[A1] AC implies DC and Countable Choice for the supplied abelian duality, finite-flat and Tate interfaces. [[def-axiom-of-choice]] [[thm-choice-implies-dependent-implies-countable-choice]]

[F1] Abelian varieties are projective, have duals with universal normalized Poincare bundles, and an ample line bundle gives a symmetric polarization isogeny. Duality is additive and contravariantly functorial, with biduality; an isogeny's dual kernel is its finite kernel's Cartier dual. Isogenies are finite flat. [[thm-abelian-variety-dual-and-polarization]] [[def-polarization-of-an-abelian-variety]] [[lem-arith-dual-isogeny-kernel-and-abelian-biduality]]

[F2] Finite commutative group schemes have functorial Cartier duals representing all-test characters and perfect bidual evaluation; a finite group scheme is killed by its rank. Morphisms descend uniquely through fppf covers when the two pullbacks agree. Global functions on a proper geometrically integral variety are constants. Multiplication by n on an abelian variety is finite flat, and finite etale in characteristic zero. Abelian Hom groups are torsion-free. [[lem-arith-finite-cartier-duality-and-exactness]] [[lem-nonaffine-fppf-descent-of-scheme-morphisms]] [[thm-global-functions-proper-integral-variety]] [[lem-multiplication-by-n-on-abelian-scheme]] [[thm-abelian-homomorphism-groups-finite-free-and-tate-faithful]]

[F3] A map from a proper scheme to a separated target is proper; proper quasi-finite maps are finite. High powers of an ample line bundle on a proper Noetherian scheme give projective embeddings, external tensor products of these embeddings are Segre embeddings, and ampleness is equivalent to ampleness of a positive power. Finite pullback preserves ampleness. [[lem-proper-source-to-separated-target-proper]] [[thm-proper-quasi-finite-is-finite]] [[thm-ample-powers-very-ample-proper-base]] [[thm-segre-line-bundle-external-tensor]] [[lem-ample-stable-positive-power]] [[lem-ample-pullback-finite-morphism]]

[F4] A CM algebra is a finite product of CM fields with conjugation, and the field trace is the sum of its embeddings. Hence $\operatorname{Tr}_{E/\mathbb Q}(x\bar x)=2\sum_{\varphi\in\Phi}|\varphi(x)|^2$ is positive for nonzero x. [[def-cm-algebra-and-cm-type]] [[thm-field-norm-and-trace-by-embeddings]]

[F5] Geometric prime-to-characteristic torsion has the free ranks, surjective transitions and finite-level quotients given by the arithmetic Tate-module lemma. [[lem-arith-field-prime-to-characteristic-torsion-and-tate-module]]

## Proof

1.1 Choose an ample algebraic line bundle $L_0$ and put $\rho_0=\varphi_{L_0}$ by [F1]. It has an inverse in rational Hom. Indeed its finite kernel of rank d is killed by d by [F2]; the two pullbacks of $[d]_A$ to $A\times_{A^\vee}A$ agree: this fibre product is $A\times\ker(\rho_0)$ by subtraction, and $[d]$ kills that kernel as a group scheme. Thus fppf descent through the finite-flat cover gives $b:A^\vee\to A$ with $b\rho_0=[d]$. The equality $\rho_0b=[d]$ follows after precomposition with the same cover, hence holds by descent. Thus $\rho_0^{-1}=b/d$. Define $x^\dagger=\rho_0^{-1}x^\vee\rho_0$ on $D=\operatorname{End}^0(A)$. Additivity, contravariance and symmetry of $\rho_0$ make this an involutive rational anti-automorphism. Choose a rational basis $\alpha_1,\ldots,\alpha_s$ of E and put $G_{ij}=\operatorname{Tr}_{E/\mathbb Q}(\alpha_i\bar\alpha_j)$. By [F4] G is symmetric positive definite with rational entries and inverse. No positivity theorem for the Rosati involution is being assumed. [A1, F1, F2, F4, given, choose, construct, algebra]

1.2 For every n, [F1] applied to $[n]$ and additivity of duality identifies $A^\vee[n]$ with the Cartier dual of $A[n]$. Let $e_n$ be evaluation under this identification. To make its naturality explicit, a point P in $A^\vee[n]$ is a degree-zero line bundle M whose pullback by $[n]$ is trivial. A choice of trivialization of that pullback is unique up to a constant by [F2]. Translating the cover by an element of $A[n]$ changes the trivialization by a character; this is the Cartier-dual character representing P, independently of the trivialization. Characters take values in $\mu_n$ because $A[n]$ is killed by n. Pulling back line bundles through $f:A\to B$ therefore gives $e_n(fx,P)=e_n(x,f^\vee P)$; tensoring them proves additivity in P, and the character property proves additivity in x. The identification and evaluation are perfect by [F1, F2]. Their construction from the Poincare bundle, pullback and descent commutes with every field automorphism: $e_n(\sigma x,\sigma P)=\sigma(e_n(x,P))$. For a test character this assertion is the same equality after applying the automorphism to its regular functions, so it is not an assumed comparison theorem. [F1, F2, given, construct, algebra]

2.1 Form the Casimir tensor $C=\sum_{ij}(G^{-1})_{ij}\alpha_i\otimes\alpha_j\in E\otimes E$ and put $q_0=\sum_{ij}(G^{-1})_{ij}\iota(\alpha_i)^\dagger\iota(\alpha_j)\in D$. The linear map sending $x\otimes y$ to $z\mapsto x\operatorname{Tr}(y\bar z)$ is an isomorphism from $E\otimes E$ to $\operatorname{End}_{\mathbb Q}(E)$, because the trace Gram matrix is invertible. C maps to the identity. Multiplication by a in the first factor and by $\bar a$ in the second both map C to the operator $z\mapsto az$. Hence $(a\otimes1)C=(1\otimes\bar a)C$. Applying $x\otimes y\mapsto\iota(x)^\dagger\iota(y)$ gives $\iota(a)^\dagger q_0=q_0\iota(\bar a)$. Also $q_0^\dagger=q_0$, since $G^{-1}$ is symmetric. Positive rational elimination gives $G^{-1}=\sum_j d_j v_jv_j^{\mathsf T}$ with positive rational $d_j$ and a rational basis of column vectors $v_j$: eliminate one positive diagonal pivot and use its positive Schur complement, inductively. Thus $q_0=\sum_j d_j\beta_j^\dagger\beta_j$, where the $\beta_j=\iota(\sum_i(v_j)_i\alpha_i)$ form a rational basis of $\iota(E)$. This is a finite rational calculation, valid for product E as well as fields. [F4, step 1.1, construct, algebra]

2.2 We verify the finite pairings' inverse-level compatibility. For $x\in A[nk]$ and $P\in A^\vee[n]$, a trivialization of $[n]^*M_P$ pulls back by $[k]$ to one of $[nk]^*M_P$. Translation by x on this pulled-back trivialization is translation by kx before pullback. The character description of step 1.2 gives $e_{nk}(x,P)=e_n(kx,P)$. Taking $P=kP'$ and using bilinearity gives $e_{nk}(x,P')^k=e_n(kx,kP')$. For $n=\ell^r$ and $k=\ell$, these are precisely the compatibility equations for a pairing $e_\ell:T_\ell A\times T_\ell A^\vee\to\mathbb Z_\ell(1)$. By [F5] both Tate modules are free of rank $2\dim A$, and their quotients at every level are the finite torsion modules. The matrix of the inverse-limit pairing in integral bases is invertible modulo $\ell$ because finite Cartier evaluation is perfect; hence its determinant is a $\mathbb Z_\ell$-unit. Thus the Tate pairing is perfect. Its homomorphism and automorphism naturality follow at every level from step 1.2 and hence in the inverse limit. [F2, F5, step 1.2, construct, algebra]

3.1 Choose N with every $b_j=N\beta_j$ an actual endomorphism and choose a positive integer D with all $c_j=Dd_j$ positive integers. Put $q=DN^2q_0=\sum_jc_j b_j^\dagger b_j$. Since the $b_j$ span E over Q and E contains1, some integral linear combination of them equals $[a]$ for a positive integer a. Equality in rational End is equality of actual endomorphisms by the torsion-freeness in [F2]. The combined map $b:A\to A^s$, $x\mapsto(b_1x,\ldots,b_sx)$, therefore has kernel contained in $A[a]$, which is finite by [F2]. Every nonempty geometric fibre is a translate of that kernel. This makes b quasi-finite; it is proper by [F3] and hence finite. The external tensor product $\boxtimes_jL_0^{c_j}$ on $A^s$ is ample: choose a common high power making all factors very ample by [F3], use the Segre embedding, and descend ampleness from that power using [F3]. Its pullback $$L=\bigotimes_j b_j^*L_0^{c_j}$$ is therefore ample by finite pullback. This proves positivity by an actual ample line bundle, not by an imported Rosati positivity theorem. [F1, F2, F3, step 1.1, step 2.1, choose, construct, algebra]

4.1 Mumford maps add under tensor product and satisfy $\varphi_{b^*L_0}=b^\vee\varphi_{L_0}b$. These identities follow directly from their representing translation families: $t_x^*b^*L_0=b^*t_{b x}^*L_0$, pullback on Picard is $b^\vee$, and tensor product adds Picard classes. Thus the actual polarization of L is $\rho=\sum_jc_j b_j^\vee\rho_0b_j=\rho_0q$. By the Casimir identity in step 2.1, $\iota(a)^\vee\rho=\rho\iota(\bar a)$ for every $a\in E$. Replacing a by its conjugate gives the displayed conjugation-compatibility in the Statement. In particular the constructed map is an actual symmetric polarization isogeny by [F1], at the original arbitrary integral order. No endomorphism is assumed integral merely because it belongs to E; all denominators were explicitly cleared in step 3.1. [F1, step 1.1, step 2.1, step 3.1, algebra]

5.1 Extend the perfect Tate pairings of step 2.2 to their rational modules and their restricted finite-adic product, and set $\psi_\rho(x,y)=e(x,\rho y)$. The polarization isogeny has a rational inverse by the same argument as step 1.1, so this pairing is nondegenerate over $\mathbb A_f$. Its integral matrices are invertible away from the finitely many primes dividing that inverse's denominator, so the restricted-product values lie in the stated $\mathbb A_f(1)$. Naturality gives $e(ax,z)=e(x,a^\vee z)$. Combining with step 4.1 yields $\psi_\rho(ax,y)=\psi_\rho(x,\bar a y)$ for rational a, and extension of scalars at each prime gives it for every $a\in E\otimes\mathbb A_f$. Finally the canonical dual and Poincare bundle commute with the automorphism sigma by their representing property. Apply the automorphism naturality in step 1.2 to rho: $\psi_{\sigma\rho}(\sigma x,\sigma y)=\sigma(\psi_\rho(x,y))$. Its action on each inverse system of roots of unity is multiplication by $\chi_{\mathrm{cyc}}(\sigma)$, by the definition of that character. This proves the last identity and every stated pairing property. [F1, F2, step 1.1, step 1.2, step 2.2, step 4.1, construct, algebra] ∎

## Source-reading boundary

Milne AV ChapterI section13, the pairing definition, Lemma13.1 and Proposition13.2, printed57–58, and the Rosati definition in section14, printed61, were actually read. Lemma13.1 and Proposition13.2 refer their proofs elsewhere or offer them as exercises; the required compatibility and naturality are proved here from the actual published Cartier-duality/Poincare suppliers. The CM source equations(23)–(29), printed22–23, were read for the parent application. No unread Mumford comparison, analytic Chern-class pairing, Hodge theorem, Rosati positivity theorem or external polarization-existence theorem is imported. The compatible ample bundle is supplied by the explicit rational Casimir construction.
