---
id: thm-root-of-unity-lusztig-module-category-is-braided-rigid
kind: theorem
title: "The full toral-weight root category is braided, rigid and spherical"
status: draft
dependency_level: 3
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
provenance:
  statement: literature-derived
  proof: ai-altered
deps:
  - def-axiom-of-choice
  - def-full-toral-weight-root-of-unity-module-category
  - def-pivotal-structure
  - def-braided-monoidal-category
  - lem-lusztig-divided-power-form-is-a-hopf-integral-form
  - lem-root-of-unity-rank-one-weight-symmetry
  - lem-quasi-r-divided-power-integrality-on-based-lattices
  - lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations
  - thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique
  - thm-integral-triangular-decomposition-for-the-lusztig-form
proof_strategy: direct
sources:
  references:
    - title: "George Lusztig, Introduction to Quantum Groups"
      url: "https://math.mit.edu/~gyuri/papers/quant.gr.pdf"
      locator: "Sections 4.1.2–4.2.3, printed pp.35–38 (quasi-R intertwining, inverse and coproduct factors), and 23.1.1–23.1.4, printed pp.185–186 (weightwise algebra). Integral specialization and full-lattice phases are proved below."
---

## Statement

Assume the Axiom of Choice inherited through the integral-basis and finite-type quasi-$R$ coefficient suppliers. In the exact simply connected, simply-laced, full-weight-lattice and odd $\ell>h$ branch of [[def-full-toral-weight-root-of-unity-module-category]], the category $\mathcal C_\zeta$ is a $\mathbb C$-linear abelian braided rigid monoidal category. The tensor action is the specialized full divided-power coproduct, the unit is the counit module, and finite left and right duals use $S$ and $S^{-1}$, respectively. On the left double dual its pivotal structure is

$$j_M(v)(f)=f(gv),\qquad g=K_{-2\rho^\vee},\qquad 2\rho^\vee=\sum_{\alpha>0}\alpha^\vee.$$

The two pivotal traces are $\operatorname{Tr}_M(gf)$ and $\operatorname{Tr}_M(g^{-1}f)$, and they are equal for every endomorphism $f$. Thus the pivotal structure is spherical in the strong trace sense.

Here is an actual compatible braiding, for the bicharacter $\chi$ fixed in the definition. Let $\Theta_\zeta$ be the specialization of the integral finite-type quasi-$R$ coefficients in the positive-first/negative-second convention of [[thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique]]. Let $D_{M,N}$ act on $M_\lambda\otimes N_\mu$ by $\chi(\lambda,\mu)$ and set

$$R_{M,N}=D_{M,N}^{-1}(\Theta^{-1})_{M,N},\qquad c_{M,N}=\tau\circ R_{M,N}.$$

Every series here acts as a finite sum; $R$ intertwines the full specialized algebra, including every higher divided power and every toral binomial, and satisfies both coproduct identities giving the two hexagons. No determinant coprimality restriction is needed for this braided structure; no nondegeneracy or modularity is asserted.

## Facts & Assumptions

**Given:** The genuine full toral-weight category, full $P$, coroot torus, chosen rational-pairing denominator and phase $t$, and the library coproduct.

[F1] Full integral Hopf stability, all divided coproducts and the toral-binomial coproduct and antipode formulas are established in [[lem-lusztig-divided-power-form-is-a-hopf-integral-form]].

[F2] In finite Cartan type the actual universal coefficients satisfy $\Theta_\nu\in U_A^+[\nu]\otimes_AU_A^-[-\nu]$ ([[lem-quasi-r-divided-power-integrality-on-based-lattices]], statement (c) and proof 3.1). This is the algebra coefficient assertion; the present modules need not themselves be based or lifts of generic modules.

[F3] Generically $\Delta(u)\Theta=\Theta\overline\Delta(u)$ for every $u\in U_q$, with $\overline\Delta=(\psi\otimes\psi)\Delta\psi$, $\psi(q)=q^{-1}$, $\psi(E_i)=E_i$, $\psi(F_i)=F_i$, $\psi(K_h)=K_{-h}$ ([[thm-the-weightwise-quasi-r-intertwiner-exists-and-is-unique]]). The inverse and exact coefficient identities are proved in [[lem-quasi-r-intertwining-determines-the-inverse-and-coproduct-factorizations]]:

$$\Theta^{-1}=\overline\Theta,$$

$$(\Delta\otimes\operatorname{id})\Theta_\nu=\sum_{\gamma+\eta=\nu}(\Theta_\gamma)_{23}K_{-\eta}^{(2)}(\Theta_\eta)_{13},$$

$$(\operatorname{id}\otimes\Delta)\Theta_\nu=\sum_{\gamma+\eta=\nu}(\Theta_\gamma)_{12}K_\eta^{(2)}(\Theta_\eta)_{13}.$$

Here $K_\eta=\prod_iK_i^{\eta_i}$ for $\eta=\sum_i\eta_i\alpha_i$ and $K_\eta^{(2)}$ denotes the middle tensor position.

[F4] The integral form and its tensor powers are free and inject into their generic counterparts ([[thm-integral-triangular-decomposition-for-the-lusztig-form]]). Choice is inherited through [F2] and [F4], as recorded by [[def-axiom-of-choice]], and adds no assumption about lifting specialized modules.

[F5] Actual full-divided-power finite-dimensional weight characters are Weyl invariant ([[lem-root-of-unity-rank-one-weight-symmetry]]), without semisimplicity of the root category.

## Proof

1.1 Use [F1] to define $x(m\otimes n)=\Delta(x)(m\otimes n)$, with the vector-space associator and unit constraints. Every summand of a divided coproduct has the required sum-weight shift. Evaluating its toral-binomial coproduct on $M_\lambda\otimes N_\mu$ gives the Gaussian Vandermonde sum $\begin{bmatrix}\langle\lambda+\mu,h_i\rangle+c\\t\end{bmatrix}_\zeta$, so the tensor product has the full required toral weights. The counit gives weight zero on the unit, since $\varepsilon(T_{i,c,t})=\begin{bmatrix}c\\t\end{bmatrix}_\zeta$. Hopf coassociativity and the counit equations prove that the vector-space constraints are module maps and satisfy coherence. Kernels and cokernels of weight-preserving maps inherit the same scalar toral and shift identities; direct sums do also. The full toral characters separate the integer labels: writing $n=a\ell+b$, $0\le b<\ell$, the root Gaussian block identity gives $\begin{bmatrix}n\\\ell\end{bmatrix}_\zeta=\zeta^{\ell(n-\ell)}a$. Indeed express the symmetric Gaussian as $q^{\ell(n-\ell)}$ times the ordinary Gaussian at $q^{-2}$ and take the degree-$\ell$ coefficient in the length-$\ell$ blocks of its generating product; for negative $n$ the inverse product gives the same integer $a$. The eigenvalue of $K_i$ determines $b$ and the displayed sign factor, and the binomial eigenvalue then determines $a$. Since the simple coroots distinguish full $P$-weights, every algebra module map automatically preserves weights. Thus the category is also a full subcategory of the module category. Therefore it is linear and abelian, and the tensor product stays in it. [F1, algebra]

1.2 We first justify specialization of the completed identities for all integral generators, rather than deducing higher identities from ordinary generators at the root. By [F2] every $\Theta_\nu$ has integral algebra coefficients. Since $\psi$ preserves the divided powers, toral group elements and binomials (indeed $\psi(T_{i,c,t})=T_{i,c,t}$), its bar also has integral coefficients. For each individual $u=E_i^{(r)},F_i^{(r)},K_h,T_{i,c,t}$, both sides of the generic identity in [F3] have, in each bi-root-degree, finitely many terms in $U_A\otimes_AU_A$: the coproduct of $u$ is finite by [F1] and its possible root degrees are finite. The two sides are equal in the generic tensor square, so [F4] makes them equal already over $A$. The same argument in the free triple tensor product treats both factorizations in [F3], and the inverse convolution identities have only finitely many decompositions of each positive root degree. Consequently all these identities specialize at $q=\zeta$. This proves specialized intertwining for the higher divided powers independently, without dividing by $[r]_\zeta!$ or requiring a generic lift of any module. [F1, F2, F3, F4, algebra]

2.1 On $M^*=\operatorname{Hom}_{\mathbb C}(M,\mathbb C)$ give the left action $(xf)(m)=f(S(x)m)$ and set $(M^*)_{-\lambda}=(M_\lambda)^*$. The antipode formulas in [F1] give precisely the divided-power shifts, while $S(T_{i,c,t})=(-1)^tT_{i,t-c-1,t}$ acts on the $\lambda$-dual line by $(-1)^t\begin{bmatrix}\langle\lambda,h_i\rangle+t-c-1\\t\end{bmatrix}_\zeta=\begin{bmatrix}-\langle\lambda,h_i\rangle+c\\t\end{bmatrix}_\zeta$. Thus the dual has the full toral weights. Evaluation $f\otimes m\mapsto f(m)$ and coevaluation $1\mapsto\sum_am_a\otimes m^a$ are module maps by the two antipode equations; the latter tensor is independent of the chosen basis because it corresponds to the identity linear map. Their composites are the identity by finite dual-basis contraction. Using the bijective $S^{-1}$ gives right duals and the other triangles, with the same weight check. This proves rigidity. [F1, step 1.1, algebra]

2.2 These completed identities can actually be evaluated here. For any pair of finite weight sets, $\Theta_\nu$ can act on $M_\lambda\otimes N_\mu$ only if $\lambda+\nu$ and $\mu-\nu$ are in their respective finite supports. There are finitely many such $\nu$. Iterated products and coproduct actions on any fixed finite tensor product are finite as well: all intermediate weights lie in finite supports, so each successive transfer has only finitely many possible degrees. The same statement holds after an integral generator is applied, since its coproduct is finite. Thus the coefficientwise specialized equalities in step 1.2 become actual equalities of linear maps. In particular $\Theta^{-1}$ is the finite operator obtained from its integral inverse coefficients. [F2, F3, step 1.2, algebra]

3.1 The bicharacter supplies the missing toral part of $R$. Work first with $q=z^D$ and the generic phase $z^{D(\lambda,\mu)}$; specialize $z$ to the chosen $t$ only after the following weight identities. For $m_\lambda\otimes n_\mu$, $D(E_i\otimes1)D^{-1}=E_i\otimes K_i$ and $D(1\otimes E_i)D^{-1}=K_i\otimes E_i$, because $(\alpha_i,\mu)=\langle\mu,h_i\rangle$; replacing $E_i$ by $F_i$ reverses the toral exponents. Hence $D\Delta^{\mathrm{op}}(E_i)D^{-1}=\overline\Delta(E_i)$ and likewise for $F_i$. For every divided power this can be checked without generic division: the term $q^{ab}K_i^{-a}E_i^{(b)}\otimes E_i^{(a)}$ of $\Delta^{\mathrm{op}}E_i^{(r)}$, $a+b=r$, acquires the bicharacter ratio $q^{b\langle\mu,h_i\rangle+a\langle\lambda,h_i\rangle+2ab}$; the first toral action contributes $q^{-a(\langle\lambda,h_i\rangle+2b)}$. Reordering the resulting second factor gives the operator $q^{-ab}E_i^{(b)}\otimes K_i^bE_i^{(a)}$, the corresponding term of $\overline\Delta E_i^{(r)}$. Similarly the term $q^{-ab}F_i^{(b)}\otimes F_i^{(a)}K_i^b$ acquires the ratio $q^{-b\langle\mu,h_i\rangle-a\langle\lambda,h_i\rangle+2ab}$; including the second toral action leaves $q^{ab}F_i^{(b)}K_i^{-a}\otimes F_i^{(a)}$, exactly the term of $\overline\Delta F_i^{(r)}$. These computations involve Laurent units only and hold directly at $q=\zeta$ for every $r$. For a toral binomial, $\Delta^{\mathrm{op}}(T)$ and $\overline\Delta(T)$ have the identical scalar $\begin{bmatrix}\langle\lambda+\mu,h_i\rangle+c\\t\end{bmatrix}_\zeta$, so their equality is checked directly; the same holds for $K_h$. We obtain $D\Delta^{\mathrm{op}}(u)=\overline\Delta(u)D$ for every full integral generator at the root. Combining this with step 1.2 gives $\Delta(u)B=B\Delta^{\mathrm{op}}(u)$ for $B=\Theta D$, hence $R\Delta(u)=\Delta^{\mathrm{op}}(u)R$ for $R=B^{-1}=D^{-1}\Theta^{-1}$. [F1, F3, F4, step 1.2, step 2.2, algebra]

3.2 Let $\rho^\vee$ be the half sum of positive coroots. Then $2\rho^\vee\in Q^\vee$ and $\langle\alpha_i,\rho^\vee\rangle=1$. By [F1], $S^2(E_i^{(r)})=\zeta^{-2r}E_i^{(r)}$, $S^2(F_i^{(r)})=\zeta^{2r}F_i^{(r)}$, while $S^2$ fixes the torus and binomials. These are precisely conjugation by $g=K_{-2\rho^\vee}$, so $S^2(x)=gxg^{-1}$ for every full generator and hence the full algebra. The double-dual action on the canonical vector-space bidual $\jmath(v)$ is $x\jmath(v)=\jmath(S^2(x)v)$. It follows that $j(v)=\jmath(gv)$ is a module isomorphism. It is natural; since $g$ is grouplike it is monoidal and is the identity on the unit. It is therefore a pivotal structure in the sense of [[def-pivotal-structure]]. [F1, step 2.1, algebra]

4.1 Here are both hexagon identities, beyond the tensor-bar cocycle. On three weight factors the bicharacter gives $(\Delta\otimes\operatorname{id})D=D_{13}D_{23}$ and $(\operatorname{id}\otimes\Delta)D=D_{12}D_{13}$. A degree-$\eta$ summand in positions $13$ raises position $1$ by $\eta$ and lowers position $3$ by $\eta$, so $D_{23}(\Theta_\eta)_{13}D_{23}^{-1}=K_{-\eta}^{(2)}(\Theta_\eta)_{13}$, while $D_{12}(\Theta_\eta)_{13}D_{12}^{-1}=K_\eta^{(2)}(\Theta_\eta)_{13}$. Substituting these two exact conjugations into the two factorizations in [F3] yields $(\Delta\otimes\operatorname{id})B=B_{23}B_{13}$ and $(\operatorname{id}\otimes\Delta)B=B_{12}B_{13}$. Inversion gives $(\Delta\otimes\operatorname{id})R=R_{13}R_{23}$ and $(\operatorname{id}\otimes\Delta)R=R_{13}R_{12}$. All sums are finite by step 2.2. By step 3.1, $\tau R$ is a module isomorphism; naturality follows because module maps preserve weights and commute with each finite algebra coefficient. The two coproduct identities, after the appropriate flips, are exactly the two hexagons, and $\Theta_0=1$ gives the unit braidings. Thus $c=\tau R$ is an actual braiding. The phase identities use $\chi$ on full $P$; they only require $t^D=\zeta$ and impose no determinant coprimality. [F3, step 2.2, step 3.1, algebra]

5.1 Finite dual-basis contraction of evaluation and coevaluation gives the two pivotal endomorphism traces $\operatorname{Tr}(gf)$ and $\operatorname{Tr}(g^{-1}f)$; equivalently the library trace of $j_M\circ f:M\to M^{**}$ is $\operatorname{Tr}(gf)$. We prove their equality for every $f$, not just dimensions of simple objects. Each generalized eigenspace $M^{(a)}$ of a module endomorphism $f$ is a submodule and weight graded. By [F5] its weight character is Weyl invariant. The longest Weyl element sends $2\rho^\vee$ to $-2\rho^\vee$, so pairing reflected weights shows $\operatorname{Tr}_{M^{(a)}}(g)=\operatorname{Tr}_{M^{(a)}}(g^{-1})$. On this subspace write $f=a\operatorname{id}+N$ with $N$ nilpotent. Because $N$ preserves every weight space, and $g$ and $g^{-1}$ are scalar on each such space, $\operatorname{Tr}(gN)=\operatorname{Tr}(g^{-1}N)=0$. Therefore $\operatorname{Tr}_{M^{(a)}}(gf)=a\operatorname{Tr}_{M^{(a)}}(g)=a\operatorname{Tr}_{M^{(a)}}(g^{-1})=\operatorname{Tr}_{M^{(a)}}(g^{-1}f)$. Sum over the finite spectrum of $f$. This proves the strong spherical trace identity, completing all assertions. [F5, step 3.2, algebra] ∎
