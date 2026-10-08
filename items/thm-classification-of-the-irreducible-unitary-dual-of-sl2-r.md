---
id: thm-classification-of-the-irreducible-unitary-dual-of-sl2-r
kind: theorem
title: Classification of the irreducible unitary dual of SL2(R)
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
dependency_level: 10
deps:
  - def-axiom-of-choice
  - def-fell-topology-on-the-unitary-dual
  - def-full-group-c-star-algebra
  - def-hausdorff-space
  - def-holomorphic-and-antiholomorphic-discrete-series-models
  - def-locally-compact-space
  - def-modular-function-of-a-locally-compact-group
  - def-k-finite-and-smooth-vectors-for-sl2-r
  - def-normalized-principal-series-i-epsilon-nu
  - def-second-countable-space
  - def-standard-borel-space
  - def-type-i-factor-representation-and-type-i-group
  - def-unitary-dual-of-a-locally-compact-group
  - def-convolution-on-cc-and-l1-of-a-group
  - def-involution-on-l1-of-a-group
  - lem-c-star-positive-calculus-and-order-estimates
  - lem-gcr-kernel-and-mackey-borel-characterizations
  - lem-k-finite-vectors-are-dense-and-stable-under-the-derived-action
  - lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r
  - lem-second-countable-group-c-star-algebra-is-separable-with-a-countable-dense-star-subalgebra
  - lem-sl2-raising-and-lowering-formulas-in-the-compact-picture
  - thm-taylor-schlomilch-roche-remainder
  - lem-inner-product-is-jointly-continuous
  - thm-cauchy-schwarz-in-an-inner-product-space
  - lem-k-type-decomposition-of-the-sl2-principal-series
  - thm-compact-picture-of-the-sl2-principal-series
  - thm-double-commutant-theorem-for-concrete-von-neumann-algebras
  - thm-generic-irreducibility-and-the-exceptional-parameter-lattice
  - thm-irreducibility-and-k-types-of-the-discrete-series
  - thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g
  - thm-schurs-lemma-for-unitary-representations
  - thm-the-modular-function-is-a-continuous-homomorphism
  - thm-uniqueness-of-left-haar-measure-up-to-scale
  - thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series
  - thm-unitarity-of-the-sl2-complementary-series
  - lem-separable-group-c-star-type-i-and-smooth-dual-criteria
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC. It is used through the group C*-algebra and normalized Haar measure on K, the compact K-type decomposition, and countable phase choices in the model intertwiners. No choice-free branch is asserted."
verification:
  precheck: pass
sources:
  references:
    - title: "Matt Kerr, Notes on the Representation Theory of SL2(R) (NSF/CBMS workshop writeup)"
      url: "https://www.math.wustl.edu/~matkerr/sl2notes.pdf"
      locator: "§2, printed pp. 5–12: compact-picture K-types, ladder formulas, endpoint split, and unitary families"
    - title: "Emmanuel Kowalski, An Introduction to the Representation Theory of Groups (AMS GSM 155; author's PDF)"
      url: "https://people.math.ethz.ch/~kowalski/representation-theory.pdf"
      locator: "§7.4, Theorem 7.4.24 and its proof sketch, printed pp. 313–315: Bargmann's classification and parameter ranges"
    - title: "Pavel Etingof, Representations of Lie Groups (MIT 18.757, Fall 2023, Lecture 9)"
      url: "https://ocw.mit.edu/courses/18-757-representations-of-lie-groups-fall-2023/mit18_757_f23_lec09.pdf"
      locator: "§9.1, printed pp. 47–49: K-weight modules, ladder recurrence, and the even/odd principal-series conventions; §9.3, printed p. 52, with its zero-parameter list qualification recorded below"
---

## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $G=\mathrm{SL}_2(\mathbb R)$ and let $\widehat G$ be its irreducible unitary dual. Every irreducible strongly continuous unitary representation of $G$ is unitarily equivalent to exactly one member of the following list:

**(i)** the trivial representation;

**(ii)** a unitary principal series $I_{\varepsilon,i\nu}$ with $\varepsilon\in\{0,1\}$ and $\nu\ge0$, excluding $(\varepsilon,\nu)=(1,0)$. The parameter identification is $I_{\varepsilon,i\nu}\cong I_{\varepsilon,-i\nu}$, proved below by the phase-normalized ladder intertwiner.

**(iii)** a discrete series $D_n^+$ or $D_n^-$, $n\ge2$, whose K-finite module is respectively $M_n^-$ or $M_{-n}^+$ at exceptional parameter $n-1$ ([[thm-irreducibility-and-k-types-of-the-discrete-series]]).

**(iv)** one of the two limits $D_1^+$ or $D_1^-$; they are the irreducible summands in $I_{1,0}\cong D_1^+\oplus D_1^-$ ([[thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series]]). Thus the reducible $I_{1,0}$ is not itself a point of $\widehat G$.

**(v)** a spherical complementary series $I_{0,\nu}$ with $0<\nu<1$.

For every irreducible $\pi$ on $H_\pi$, the image $\pi(C^*(G))$ contains $\mathcal K(H_\pi)$. Consequently $C^*(G)$ is GCR, $G$ is type I, and the Mackey and Fell-topology Borel structures on $\widehat G$ agree and are standard ([[def-full-group-c-star-algebra]], [[def-type-i-factor-representation-and-type-i-group]], [[def-unitary-dual-of-a-locally-compact-group]], [[def-fell-topology-on-the-unitary-dual]]).

## Facts & Assumptions

**Given:** AC and a nonzero irreducible strongly continuous unitary representation $(\pi,H)$ of $G$.

[F1] The integrated form of $\pi$ extends uniquely to a nondegenerate representation $\pi_*:C^*(G)\to\mathcal B(H)$, and irreducibility is preserved under this correspondence ([[thm-nondegenerate-representations-of-c-star-g-are-unitary-representations-of-g]]). Schur's lemma and the double-commutant theorem then apply ([[thm-schurs-lemma-for-unitary-representations]], [[thm-double-commutant-theorem-for-concrete-von-neumann-algebras]]).

[F2] For $K=\mathrm{SO}(2)$, $H$ is the Hilbert direct sum of its integer-character spaces $H_m=\{v:\pi(k_\theta)v=e^{im\theta}v\}$, and the smooth K-finite vectors are dense and stable under $W,E_+,E_-$, where $[W,E_\pm]=\pm2E_\pm$ and $[E_+,E_-]=W$ ([[lem-k-finite-vectors-are-dense-and-stable-under-the-derived-action]]). The characters $e^{im\theta}$ and the compact-picture action use the conventions fixed for this pair.

[F3] Every $g\in G$ has a KAK factorization $g=k_1a_tk_2$ with $a_t=\operatorname{diag}(e^{t/2},e^{-t/2})$, $t\ge0$, and the proof of the KAK formula gives this factorization and its unique radial parameter ([[lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r]], proof step 1.1). The fixed left Haar measure is finite on compact sets; $K$ has normalized Haar probability.

[F4] For $\varepsilon\in\{0,1\}$, the normalized principal-series model has exactly the K-weights $m\equiv\varepsilon\pmod 2$; its unitary axis is $\nu=is$, $s\in\mathbb R$, and its Casimir scalar is $(\nu^2-1)/8$. Its nonexceptional members are irreducible, and the compact-picture raising coefficients are $(1+\nu+m)/2$ ([[def-normalized-principal-series-i-epsilon-nu]], [[thm-compact-picture-of-the-sl2-principal-series]], [[lem-k-type-decomposition-of-the-sl2-principal-series]], [[lem-sl2-raising-and-lowering-formulas-in-the-compact-picture]], [[thm-generic-irreducibility-and-the-exceptional-parameter-lattice]]).

[F5] For real $0<\nu<1$, the spherical compact-picture module has a positive invariant Hilbert completion and gives an irreducible unitary representation $I_{0,\nu}$; its K-weights are all even integers and its Casimir scalar remains $(\nu^2-1)/8$ ([[thm-unitarity-of-the-sl2-complementary-series]], [[thm-generic-irreducibility-and-the-exceptional-parameter-lattice]]). The completed weighted Fourier space has positive weights on every even K-line, and the supplier proves its strong continuity and irreducibility.

[F6] For $n\ge2$, $D_n^\pm$ are irreducible unitary models with one-sided K-weights $\pm(n+2j)$, $j\ge0$, and Casimir scalar $((n-1)^2-1)/8$ ([[def-holomorphic-and-antiholomorphic-discrete-series-models]], [[thm-irreducibility-and-k-types-of-the-discrete-series]]). The limits $D_1^\pm$ are the irreducible unitary odd tails, with Casimir $-1/8$ and orthogonal sum $I_{1,0}$ ([[thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series]]).

[F7] For second-countable $G$, $C^*(G)$ is separable ([[lem-second-countable-group-c-star-algebra-is-separable-with-a-countable-dense-star-subalgebra]]). For a separable GCR algebra every factor generated algebra is type I, and its Mackey dual is standard Borel ([[lem-gcr-kernel-and-mackey-borel-characterizations]]). The actual group criteria identify the group factor convention with GCR and identify the standard Mackey Borel structure with the Fell-topology Borel structure ([[lem-separable-group-c-star-type-i-and-smooth-dual-criteria]], [[def-type-i-factor-representation-and-type-i-group]]).

[F8] Convolution on $C_c(G)$ is $(f*h)(x)=\int_G f(y)h(y^{-1}x)\,dy$, and for unimodular $G$ the C*-involution is $f^*(x)=\overline{f(x^{-1})}$ ([[def-convolution-on-cc-and-l1-of-a-group]], [[def-involution-on-l1-of-a-group]]). The positive functional calculus in a C*-algebra is natural under $*$-homomorphisms ([[lem-c-star-positive-calculus-and-order-estimates]]).

[F9] A real-valued function with derivatives through order $n+1$ on $[0,t]$ has the Taylor formula with Schlömilch–Roche remainder; its Lagrange case bounds the remainder at $0$ by $\sup_\xi|f^{(n+1)}(\xi)|\,|t|^{n+1}/(n+1)!$ ([[thm-taylor-schlomilch-roche-remainder]]). The inner product is jointly continuous and satisfies Cauchy–Schwarz $|\langle u,v\rangle|\le\|u\|\,\|v\|$, so for a $C^\infty$ curve $F$ the scalar curve $s\mapsto\langle F(s),w\rangle$ is $C^\infty$ with derivatives $\langle F^{(k)}(s),w\rangle$ bounded by $\|F^{(k)}(s)\|\,\|w\|$ ([[lem-inner-product-is-jointly-continuous]], [[thm-cauchy-schwarz-in-an-inner-product-space]]).

[F10] Second countability means existence of a countable basis, local compactness means each point has a neighborhood with compact closure, and Hausdorffness means distinct points have disjoint neighborhoods ([[def-second-countable-space]], [[def-locally-compact-space]], [[def-hausdorff-space]]).

[A1] AC supplies the normalized Haar probability on compact $K$, the group C*-algebra correspondence in [F1], and the compact-group decomposition in [F2] ([[def-axiom-of-choice]]). It also supplies countable choice when selecting one point from each nonempty basic open set to obtain a countable dense subset of $G$. Once one unit vector in a string is fixed, the phases of its remaining basis vectors are determined recursively and make no further family-wide choice. No weaker choice principle is substituted.

## Proof

**Proof technique:** prove the multiplicity-one and GCR claims by K-character corners, then classify the resulting unitary ladder strings and identify their global models.

1.1 The modular function is a homomorphism ([[thm-the-modular-function-is-a-continuous-homomorphism]]). For $a_t=\operatorname{diag}(e^{t/2},e^{-t/2})$, $n_x=\begin{pmatrix}1&x\\0&1\end{pmatrix}$, and $\ell_x=\begin{pmatrix}1&0\\x&1\end{pmatrix}$, every upper and lower unipotent is a commutator: $[a_t,n_x]=n_{(e^t-1)x}$ and $[a_t,\ell_x]=\ell_{(e^{-t}-1)x}$ for any fixed $t\ne0$. These subgroups generate $G$: $n_s\ell_{-1/s}n_s\begin{pmatrix}0&1\\-1&0\end{pmatrix}^{-1}=\operatorname{diag}(s,s^{-1})$ for $s\ne0$, and Gaussian elimination writes each matrix with nonzero upper-left entry as a product of a lower unipotent, such a diagonal, and an upper unipotent; multiplying first by $n_1$ handles a zero upper-left entry. Hence $G$ is generated by commutators and its modular function is identically $1$. The map $\theta(g)=Jg^{\mathsf T}J$, $J=\operatorname{diag}(1,-1)$, is an involutive anti-automorphism fixing every element of $K$ and each $a_t$. Since $G$ is unimodular, $\theta$ carries left Haar measure to a left Haar measure; uniqueness gives $\theta_*dg=c\,dg$, and $\theta^2=1$ forces $c=1$. Thus $\theta$ preserves Haar measure and reverses convolution. [F3, A1, algebra]

1.2 For $\chi_m(k_\theta)=e^{im\theta}$ and $f\in C_c(G)$ define
$$Q_mf(g)=\int_{K\times K}\chi_m(k)^{-1}\chi_m(l)^{-1}f(k^{-1}gl^{-1})\,dk\,dl.$$
Then $Q_mf\in C_c(G)$ and its integrated operator in any unitary representation $\rho$ is $P_m^\rho\rho(f)P_m^\rho$, where $P_m^\rho=\int_K\chi_m(k)^{-1}\rho(k)\,dk$. Therefore $\|Q_mf\|_{C^*}=\sup_\rho\|P_m^\rho\rho(f)P_m^\rho\|\le\|f\|_{C^*}$; $Q_m$ extends contractively to $C^*(G)$. Its range on $C_c(G)$ consists exactly of functions with the same left and right covariance by $\chi_m^{-1}$: the averaging formula gives those laws, and applying it to a function already satisfying them returns that function. If $f,h$ satisfy these covariance laws, then $(f*h)(k_0x)=\chi_m(k_0)^{-1}(f*h)(x)$ by the substitution $y=k_0z$ in [F8]'s integral, while $(f*h)(xk_0)=\chi_m(k_0)^{-1}(f*h)(x)$ by the right covariance of $h$. The formula $f^*(x)=\overline{f(x^{-1})}$ and the opposite covariance of $f$ show that $f^*$ has the same two covariance laws. Thus the range and its norm closure are $*$-subalgebras. If $g=k_1a_tk_2$, then $\theta(g)=k_2a_tk_1$ and the two scalar covariance factors commute, so every range function satisfies $f(\theta(g))=f(g)$. For any two range elements $f,h$, Haar preservation and the anti-automorphism identity give $f*h=\theta(f*h)=\theta(h)*\theta(f)=h*f$. Thus each K-character corner is commutative. [F1, F3, F8, algebra]

2.1 The commutant of $\pi_*(C^*(G))$ is scalar by [F1], so its strong closure is $\mathcal B(H)$ by the double-commutant theorem. For any $m$, compressing a strongly convergent net to $H_m=P_mH$ shows that the represented corner $P_m\pi_*(C^*(G))P_m$ is strongly dense in $\mathcal B(H_m)$. By step 1.2 this corner is commutative. Its strong closure remains an abelian von Neumann algebra (apply the double-commutant theorem to the unital corner), whereas $\mathcal B(H_m)$ is noncommutative if $\dim H_m\ge2$. Hence $\dim H_m\le1$ for every $m$. The compact K-type decomposition [F2] gives at least one nonzero $H_m$ because $H\ne0$. [F1, F2, step 1.2, A1]

3.1 Fix a unit vector $\xi\in H_m$ in a nonzero K-type. Strong density of the corner provides $a\in C^*(G)$ with $P_m\pi_*(a)P_m\ne0$. Since $H_m$ is one-dimensional, this compression is a nonzero scalar multiple of its rank-one projection $P_m$. The contractive extension of $Q_m$ in step 1.2 still satisfies $\pi_*(Q_m(a))=P_m\pi_*(a)P_m$, by density of $C_c(G)$ and continuity, so $P_m\in\pi_*(C^*(G))$. The vectors $\pi_*(a)\xi$ have dense linear span by irreducibility. Hence products $\pi_*(a)P_m\pi_*(b)^*$ give a norm-dense family of rank-one operators. To pass from this dense family to all compacts, note that a $*$-homomorphism of C*-algebras has closed image: factor through its kernel and use continuous functional calculus to see the induced injective $*$-homomorphism is isometric. Indeed, if a positive element lost norm, a continuous function vanishing at zero and supported above the image norm would give a nonzero kernel element by [F8]. Therefore $\pi_*(C^*(G))$ contains $\mathcal K(H)$. [F1, step 2.1, F8, algebra]

3.2 By step 2.1 every nonzero K-weight space is one-dimensional. The dense smooth K-finite module [F2], projected onto each K-character, is dense in that character space; thus every present K-type has a smooth unit vector $e_m$. Set $E_+e_m=a_me_{m+2}$, with $a_m=0$ if the target K-type is absent. Differentiating unitarity along real one-parameter subgroups gives $E_+^*=-E_-$ on these smooth vectors, so $E_-e_m=-\overline{a_{m-2}}e_{m-2}$. The bracket relation in [F2], applied to $e_m$, yields $r_m-r_{m-2}=m$ for $r_m=|a_m|^2\ge0$. On each consecutive string this recurrence has the form $r_m=((m+1)^2-q)/4$ for one real number $q$; substitution into the fixed Casimir $\Omega=\tfrac18W^2-\tfrac14W+\tfrac12E_+E_-$ gives scalar $(q-1)/8$. [F2, step 2.1, algebra]

4.1 Each connected string of nonzero K-types has a closed span invariant under $G$. To prove this, let $X=N_+$ or $N_-$ be either real nilpotent generator, and let $S$ be the algebraic string. Since $X$ is a linear combination of $W,E_+,E_-$, each $L_X^ke_m$ is supported in weights at distance at most $2k$ from $m$. The recurrence in step 3.2 gives $|a_j|\le C(1+|j|)$ on the string, so counting at most $3^k$ terms gives $\|L_X^ke_m\|\le C_m^k(k+1)^k$; the same estimate, with a changed constant $C_v$, holds for each finite sum $v\in S$. Let $P_S$ be projection onto $\overline S$ and put $F(t)=(I-P_S)\pi(\exp(tX))v$. Every derivative $F^{(k)}(0)$ is zero since $S$ is Lie-algebra invariant, and for every center $t$ one has $\|F^{(k)}(t)\|\le\|L_X^kv\|\le C_v^k(k+1)^k$ by unitarity. Fix $t$ and apply [F9] to the real scalar curve $f(s)=\operatorname{Re}\langle F(s),F(t)\rangle$ on $[0,t]$: all derivatives $f^{(k)}(0)=\operatorname{Re}\langle F^{(k)}(0),F(t)\rangle$ vanish, and $|f^{(k)}(s)|\le C_v^k(k+1)^k\|F(t)\|$. The Lagrange remainder bound gives $\|F(t)\|^2=|f(t)|\le\|F(t)\|(C_v|t|)^{n+1}(n+2)^{n+1}/(n+1)!$, and since $(n+1)!\ge((n+1)/e)^{n+1}$ this is at most $\|F(t)\|(eC_v|t|)^{n+1}(1+1/(n+1))^{n+1}\to0$ whenever $|t|<1/(eC_v)$, a positive radius independent of the center. Thus $F=0$ on that centred interval; wherever $F$ vanishes all its derivatives vanish there, and the same bound extends the zero interval across its endpoints in steps of length $1/(eC_v)$. Hence $F(t)=0$ for all real $t$. Density of $S$ and unitarity extend this invariance to $\overline S$. The upper and lower unipotents generate $G$ by the matrix factorization in step 1.1, proving the claim. [F2, step 1.1, step 3.2, F9, algebra]

5.1 Irreducibility now forces exactly one connected string. For a full even string, positivity gives $q\le1$; for a full odd string it gives $q\le0$. In the even case, $q\le0$ gives the full principal string $I_{0,is}$ with $s=\sqrt{-q}\ge0$, while $0<q<1$ gives the spherical complementary string $I_{0,\sqrt q}$. At even $q=1$, the recurrence has $r_{-2}=r_0=0$, so its support separates into the singleton weight $0$ and the positive and negative tails; irreducibility selects one of these three components. In the odd case, $q<0$ gives the full principal string $I_{1,is}$ with $s=\sqrt{-q}>0$; at $q=0$, $r_{-1}=0$ separates the two odd limit tails. A string bounded below with lowest weight $m$ has $r_{m-2}=0$, hence $q=(m-1)^2$; the bracket also gives $r_m=m$, so $m\ge0$. If $m=0$ then $r_0=0$ and the component is the singleton weight $0$; for $m\ge1$ the string is the positive one-sided model $D_m^+$, with $m=1$ the limit and $m\ge2$ discrete. A string bounded above with highest weight $u$ similarly has $q=(u+1)^2$ and $r_{u-2}=-u\ge0$, so $u\le0$; $u=0$ is the singleton and $u\le-1$ is the negative model $D_{-u}^-$. Finally, a finite string with endpoints $m\le u$ must satisfy $q=(m-1)^2=(u+1)^2$, forcing $m=-u$. Since $m\le u$, this gives $u\ge0$; if $u>0$, its internal coefficient $r_{u-2}=-u<0$, impossible. Thus only $u=0$, $m=0$, the trivial singleton remains. [step 3.2, step 4.1, F4, F5, F6, algebra]

6.1 Each string identified in step 5.1 has the same K-weights and the same $q$, hence the same squared ladder coefficients $r_m$ as its corresponding unitary principal, complementary, discrete, or limit model in [F4]–[F6]. Along a string there are no cycles, so once a base vector is fixed its phases are recursively determined to make the normalized basis vectors have identical $E_+$ and $E_-$ coefficients. This defines an isometry on the dense K-finite spans and therefore a unitary $U$ between the Hilbert spaces. For either real nilpotent $X=N_\pm$ and any finite K-type vector $v$, the difference $F(t)=\pi_1(\exp(tX))Uv-U\pi_2(\exp(tX))v$ has every derivative zero at $0$. The coefficient-growth estimate of step 4.1 bounds its derivatives uniformly in the center by $C_v^k(k+1)^k$, so the same scalar-pairing Taylor-remainder continuation as in step 4.1, applied separately to $s\mapsto\operatorname{Re}\langle F(s),w\rangle$ and $s\mapsto\operatorname{Im}\langle F(s),w\rangle$ for every $w$, gives $F(t)=0$ for all $t$. The unipotents generate $G$, so $U$ intertwines the group representations, not only their derived actions. Applying the same argument to the two compact-picture models $I_{\varepsilon,is}$ and $I_{\varepsilon,-is}$ gives the sign equivalence in the Statement, since their raising coefficients have equal absolute values. The single weight-zero case has all derived generators zero and is trivial on the one-parameter unipotents, hence on $G$. [F1, F2, F4, F5, F6, step 4.1, step 5.1, A1]

7.1 The model list is pairwise inequivalent: K-weight parity distinguishes the two principal parities; full strings differ from one-sided or singleton supports; among full strings the Casimir scalar determines $q$ and then $s$ or $\nu$; among one-sided strings the boundary weight determines $n$ and its sign distinguishes the two orientations. The even zero principal string is full and therefore differs from both odd zero limit tails. Step 6.1 proves the sole sign redundancy $I_{\varepsilon,i\nu}\cong I_{\varepsilon,-i\nu}$. At the odd zero endpoint, [F6] identifies the two irreducible summands of $I_{1,0}$; the reducible direct sum is excluded from $\widehat G$. [F4, F6, step 5.1, step 6.1, algebra]

8.1 The matrix realization of $G$ is the closed subset $\{(a,b,c,d)\in\mathbb R^4:ad-bc=1\}$, so rational Euclidean balls give a countable base and bounded closed neighborhoods are compact; hence $G$ is second-countable, locally compact, and Hausdorff under [F10]. Every irreducible $\pi$ is cyclic: for $0\ne\xi\in H_\pi$, the closed span of $\pi(G)\xi$ is a nonzero invariant subspace, hence all of $H_\pi$. Choose one point in each nonempty member of a countable base to get a countable dense set $D\subset G$; strong continuity makes $\{\pi(g)\xi:g\in D\}$ dense in the orbit, and its finite $\mathbb Q(i)$-linear combinations form a countable dense subset of $H_\pi$. Thus $H_\pi$ is separable. By step 3.1 every irreducible image contains the compacts, so $C^*(G)$ is GCR. By [F7], $C^*(G)$ is separable; its GCR property therefore makes every factor generated algebra type I. The separable-factor/multiple equivalence in the group criteria proves that $G$ is type I in the stated convention. The same actual group criteria identify its standard Mackey dual with the Borel structure generated by the Fell topology. These conclusions use the completed local GCR and group-Borel proofs; the sole inherited original Glimm citation is the reverse factor-type-I-to-GCR direction, which this GCR-to-type-I application does not require. [F7, F10, step 3.1, algebra, A1] ∎

## Source qualifications

Kowalski, §7.4 Theorem 7.4.24, printed pp. 313–315, gives the unitary list and a proof sketch; it explicitly refers the final comparison of global unitary representations to other sources. This item supplies the group-level comparison locally using a factorial Taylor bound and does not rely on an abstract globalization theorem. Kerr, §2, printed pp. 5–12, gives the compact-picture K-types and unitary families, but is a computational account rather than a complete classification proof.

Etingof, §9.1, printed pp. 47–49, says $P^+(s)$ is irreducible whenever $s\notin2\mathbb Z+1$, which includes $s=0$; §9.3 says the compact-picture norm is preserved for imaginary $s$, also including zero. However, Theorem 9.3, printed p. 52, lists unitary principal parameters only for $s\ne0$, omitting the even spherical $P^+(0)$. Kowalski's Theorem 7.4.24 includes the even parameter $t=0$. This omission is confirmed with high confidence; the classification above includes $I_{0,0}$ and the coverage row is deferred to owner review for the Step 4 source amendment.
