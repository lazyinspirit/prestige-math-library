---
id: thm-stone-von-neumann-for-finite-dimensional-weyl-systems
kind: theorem
title: Stone–von Neumann uniqueness for finite-dimensional regular Weyl systems
status: draft
origin: pipeline
pipeline_run: non-ml-math-remaining-81-2026-10-18
dependency_level: 3
proof_strategy: direct
deps:
  - def-regular-weyl-system-on-a-symplectic-vector-space
  - def-heisenberg-group-of-a-symplectic-vector-space
  - prop-symplectic-vector-spaces-have-even-dimension
  - lem-heisenberg-group-lagrangian-splitting-and-dual-orbit
  - lem-schrodinger-weyl-system-is-regular-and-irreducible
  - lem-spectral-measure-of-a-representation-of-an-abelian-lch-group
  - thm-mackey-imprimitivity-theorem
  - thm-uniqueness-in-mackey-imprimitivity
  - thm-bounded-borel-pvm-integral
  - thm-dominated-convergence
  - thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication
  - thm-orthogonal-decomposition-by-a-closed-subspace
  - lem-the-induced-action-is-unitary
  - def-system-of-imprimitivity
  - def-transitive-system-of-imprimitivity
  - def-covariant-function-model-of-unitary-induction
  - def-unitary-equivalence-of-systems-of-imprimitivity
  - def-coset
  - def-standard-borel-space
  - def-separable-space
  - def-projection-valued-measure
  - lem-second-countable-lch-spaces-are-standard-borel
  - def-axiom-of-choice
  - def-hilbert-space
  - def-strongly-continuous-unitary-representation
  - lem-continuous-characters-of-the-real-line-are-exponentials
  - lem-duals-of-finite-products-and-discrete-direct-sums
axiom_use: "AC is assumed by the spectral-measure, normalized transitive-system, Mackey-imprimitivity, standard-Borel and decomposable-operator suppliers. It implies the Countable Choice hypotheses of orthogonal decomposition and the bounded PVM integral. The countable dense sets and conull intersections below are explicitly indexed by rational coordinates and a fixed countable dense subset, so they require no additional choice. The separately cited Schrödinger-model lemma has its own Countable Choice dependency."
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Roland Speicher, Mathematical Aspects of Quantum Mechanics, Lecture Notes"
      url: "https://www.uni-saarland.de/fileadmin/upload/lehrstuhl/speicher/Math_of_QM/MathematicalAspects.pdf"
    - title: "Amritanshu Prasad, An Easy Proof of the Stone-von Neumann-Mackey Theorem"
      url: "https://arxiv.org/pdf/0912.0574"
---
## Statement



Assume the Axiom of Choice. Let $(V,\omega)$ be a finite-dimensional real
symplectic vector space of dimension $2n$, let $\lambda\in\mathbb R$ be
nonzero, and let $W:V\to U(\mathcal H)$ be a nonzero irreducible regular
Weyl system with

$$W(v)W(w)=e^{-i\lambda\omega(v,w)/2}W(v+w).$$
Then $W$ is unitarily equivalent to the Schrödinger Weyl system on $L^2(\mathbb R^n)$, so there is exactly one unitary-equivalence class of irreducible regular Weyl systems with the fixed parameter $\lambda$. In a symplectic basis the model is
$$\big(W_\lambda(q,p)f\big)(x)=e^{i\lambda p\cdot(x-q/2)}f(x-q),$$
for $\omega((q,p),(q',p'))=q\cdot p'-p\cdot q'$. The statement assumes finite-dimensional phase space, irreducibility, strong continuity, and a fixed nonzero central parameter. It makes no claim about algebraic modules, nonregular representations, $\lambda=0$, or infinitely many modes.

## Facts & Assumptions

**Given:** AC; a finite-dimensional symplectic vector space $(V,\omega)$; a nonzero real $\lambda$; and a nonzero irreducible regular Weyl system $W$.

[F1] A symplectic vector space has dimension $2n$ and a basis $e_1,f_1,\ldots,e_n,f_n$ with $\omega(e_i,f_j)=\delta_{ij}$ and all other pairings zero ([[prop-symplectic-vector-spaces-have-even-dimension]]).

[F2] In these coordinates the Heisenberg group is $N\rtimes K$ with $N=\mathbb R^n\times\mathbb R$, $K=\mathbb R^n$, action $\alpha_q(p,t)=(p,t-q\cdot p)$, and the characters with central parameter $\lambda\ne0$ form one free transitive $K$-orbit with trivial stabilizer ([[lem-heisenberg-group-lagrangian-splitting-and-dual-orbit]]).

[F3] For a strongly continuous representation of a second-countable locally compact abelian group on a separable Hilbert space, there is a unique regular PVM on its Pontryagin dual that integrates to the representation; a covariant representation of $K$ transports that PVM by the dual action ([[lem-spectral-measure-of-a-representation-of-an-abelian-lch-group]]).

[F4] Under AC, a transitive system on $G/N$ with separable Hilbert space is unitarily equivalent to the induced system of a strongly continuous unitary representation of $N$ on a separable fiber. Its normalized homogeneous measure is nonzero, Radon, full support, and finite on compact sets ([[thm-mackey-imprimitivity-theorem]], [[def-transitive-system-of-imprimitivity]]).

[F5] The induced action on covariant functions is $(\Pi(g)F)(x)=D_g(xH)^{1/2}F(g^{-1}x)$ ([[lem-the-induced-action-is-unitary]]). Evaluating at the section $s(q)$ and writing $g^{-1}s(q)=s(g^{-1}q)h$ gives the fiber action $D_g(q)^{1/2}\sigma(s(q)^{-1}gs(g^{-1}q))$ by the covariance rule $F(xh)=\sigma(h)^{-1}F(x)$ ([[def-covariant-function-model-of-unitary-induction]]). For $n\in N$, normality makes the base action trivial and hence $D_n=1$ almost everywhere, so the fiber action is $\sigma(s(q)^{-1}ns(q))$.

[F6] Two canonical transitive systems induced from equivalent subgroup representations are unitarily equivalent, and conversely ([[thm-uniqueness-in-mackey-imprimitivity]]).

[F7] If two measurable operator fields induce the same multiplication operator on a direct integral with separable fibers, the fields agree almost everywhere; the diagonal commutant consists of decomposable operators ([[thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication]]).

[F8] The Schrödinger operators displayed in the Statement form a strongly continuous irreducible Weyl system for every $n\ge0$ and $\lambda\ne0$ ([[lem-schrodinger-weyl-system-is-regular-and-irreducible]]).

[F9] For a PVM $E$ on a nonzero Hilbert space and bounded Borel $f$, the operator integral satisfies $\|\Phi_E(f)x\|^2=\int|f|^2\,dE_x$ and is obtained from uniform simple-function approximations. If a PVM is transported to multiplication by indicators, its bounded Borel integrals are multiplication by the same functions ([[thm-bounded-borel-pvm-integral]]). AC implies the Countable Choice hypothesis of this theorem.

[F10] A second-countable locally compact Hausdorff space, including the quotient $G/N\cong\mathbb R^n$, has a standard Borel structure with Borel quotient action ([[lem-second-countable-lch-spaces-are-standard-borel]]).

[F11] Under Countable Choice, hence under AC, every closed linear subspace $L$ of a Hilbert space $K_0$ has the orthogonal decomposition $K_0=L\oplus L^\perp$ ([[thm-orthogonal-decomposition-by-a-closed-subspace]]).

[F12] A projection-valued measure is countably additive in the strong operator topology ([[def-projection-valued-measure]]). For disjoint Borel sets $E_j\subseteq\mathbb R^n$, the multiplication projections $M_{\mathbf1_{E_j}}$ sum strongly to $M_{\mathbf1_{\cup_jE_j}}$: for every $f\in L^2$, dominated convergence applied to $|f|^2\mathbf1_{\cup_{j>m}E_j}$ gives convergence in $L^2$ ([[thm-dominated-convergence]]).

[A1] AC is the choice-function principle of [[def-axiom-of-choice]]. It is assumed by [F3], [F4], [F6], [F7], and [F10], and it implies the Countable Choice hypotheses of [F9], [F11], and [F12].

## Proof



**Proof technique:** direct.

**Given:** AC and the Weyl system in the Statement.

1.1 Fix a symplectic basis from [F1], identify $V$ with $\mathbb R^n\times\mathbb R^n$, and define$\pi(v,t):=e^{i\lambda t}W(v)\quad((v,t)\in H(V,\omega)).$The Weyl relation and the group product in [F2] give$\pi(v,t)\pi(w,s)=e^{i\lambda(t+s)-i\lambda\omega(v,w)/2}W(v+w)=\pi(v+w,t+s-\omega(v,w)/2),$so $\pi$ is a unitary group representation with central character $\pi(0,t)=e^{i\lambda t}I$. It is strongly continuous: if $v=\sum_{j=1}^n(q_je_j+p_jf_j)$, repeatedly apply the Weyl relation in this fixed coordinate order to express $W(v)$ as a finite product of $W(q_je_j)$ and $W(p_jf_j)$ times a scalar phase. That phase is an exponential of a finite sum of bilinear coordinate terms, hence is continuous; each line factor is strongly continuous by regularity. Finite products of strongly continuous unitaries are strongly continuous by inserting and subtracting one factor at a time. Its invariant closed subspaces are exactly those of $W$, since the central factor is scalar, so $\pi$ is irreducible. [F1, F2, given, construct]

2.1 The representation space is separable. Choose $\xi\ne0$. The closed span of $\pi(G)\xi$ is a nonzero invariant subspace, hence equals $\mathcal H$ by irreducibility. The group $G=H(V,\omega)$ is homeomorphic to $\mathbb R^{2n+1}$, so the rational-coordinate points give a countable dense subset $D$. Strong continuity makes $\{\pi(g)\xi:g\in D\}$ dense in the orbit of $\xi$; its finite rational-complex linear span is countable and dense in $\mathcal H$. Therefore [F3] applies. [A1, F3, given, step 1.1, construct]

2.2 Write $G=N\rtimes K$ as in [F2], and let $\tau(q)=\pi(q,0,0)$ denote the representation of $K$. Conjugation in the semidirect product gives $\tau(q)\pi(n)\tau(q)^{-1}=\pi(\alpha_q(n))$ for every $n\in N$. By [F3] there is a unique regular PVM $P$ on $\widehat N$ with$\pi(n)=\int_{\widehat N}\chi(n)\,dP(\chi),\qquad \tau(q)P(E)\tau(q)^{-1}=P(q\cdot E).$[A1, F2, F3, step 1.1]

3.1 The central subgroup is $z_t=(0,0,t)$, and $\pi(z_t)=e^{i\lambda t}I$. For each rational $t$, let $E_t=\{\chi\in\widehat N:\chi(z_t)=e^{i\lambda t}\}$, a Borel set. The SNAG formula in [F3] gives $\Phi_P(\chi\mapsto\chi(z_t)-e^{i\lambda t})=0$. By the norm-square identity in [F9], each scalar measure $P_\xi$ assigns integral zero to $|\chi(z_t)-e^{i\lambda t}|^2$, so it is supported on $E_t$ and $P(E_t)=I$. Since $\mathbb Q$ is countable and $P$ is countably additive, $P(\bigcap_{t\in\mathbb Q}E_t)=I$. Every character of $N\cong\mathbb R^{n+1}$ is continuous in its real parameter, so equality on rational $t$ implies that this intersection is precisely $\widehat N_\lambda$ from [F2]. Hence $P(\widehat N_\lambda)=I$. [F2, F3, F9, step 2.2, algebra]

4.1 The orbit map $q\mapsto q\cdot\chi_{0,\lambda}=\chi_{\lambda q,\lambda}$ is a bijection by [F2]. It is a homeomorphism for the compact-open topology: $|e^{iu}-e^{iv}|\le|u-v|$ gives uniform convergence on each compact subset of $N$ when the frequency parameters converge. Conversely, for $\delta>0$ and any frequency coordinate, uniform distance less than $1$ from a fixed character on the compact coordinate segment $|t|\le\pi/\delta$ forces the corresponding frequency difference $b$ to satisfy $|b|<\delta$: otherwise $t=\pi/b$ lies in that segment and the distance is $2$. The finite-product dual identification in [F2] therefore has continuous inverse, and scaling by $\lambda\ne0$ identifies $G/N\cong K$ homeomorphically with $\widehat N_\lambda$. Since $G/N\cong K\cong\mathbb R^n$, [F10] gives its standard Borel structure and Borel $G$-action. Push $P$ through this Borel isomorphism to obtain a PVM on $G/N$. Its covariance is the second identity in step 2.2, and its total projection is $I$ by step 3.1. Thus $(\pi,P)$ is a transitive system of imprimitivity on $G/N$ in the sense of [F4]. Mackey's theorem yields a strongly continuous unitary representation $\sigma:N\to U(K_0)$ on a separable Hilbert space and a unitary intertwiner from $\pi$ to $\operatorname{Ind}_N^G\sigma$. [F2, F3, F4, F10, step 2.2, step 3.1]

5.1 Let $s(q)=(q,0,0)$ be the section of $G/N$. The normalized measure $\mu$ in the induced model is Radon and finite on compact sets by [F4]. Under $G/N\cong\mathbb R^n$, the compact boxes $[-m,m]^n$ (or the singleton when $n=0$) form a countable cover, so $\mu$ is $\sigma$-finite. The base is standard Borel by [F10], and the constant fiber $K_0$ is separable, so the hypotheses of [F7] hold. For each $n\in N$, Mackey's PVM identification in [F4] sends $P(E)$ to multiplication by $\mathbf1_E$; the bounded Borel integral result [F9] therefore sends the SNAG integral of $\chi\mapsto\chi(n)$ to multiplication by $q\mapsto\chi_{\lambda q,\lambda}(n)$. In the induced model the action of $n$ on the fiber at $q$ is $\sigma(s(q)^{-1}ns(q))=\sigma(\alpha_{-q}(n))$ by [F5]. Equality of the two multiplication operators and [F7] give$\sigma(\alpha_{-q}(n))=\chi_{\lambda q,\lambda}(n)I_{K_0}\quad\text{for almost every }q$. In the coordinates $N=\mathbb R^n\times\mathbb R$, set $D_N=\mathbb Q^n\times\mathbb Q$, a countable dense subset. Intersecting the corresponding conull sets gives one conull set $E\subset K$ on which the equality holds for every $n\in D_N$. The normalized measure class on $G/N$ has full support by [F4], so $E$ is dense. For fixed $n\in D_N$, both sides are continuous in $q$; equality on $E$ extends to $q=0$, giving $\sigma(n)=\chi_{0,\lambda}(n)I_{K_0}$. Strong continuity of $\sigma$ and continuity of $\chi_{0,\lambda}$ extend this equality from $D_N$ to all $N$. [A1, F2, F4, F5, F7, F9, F10, step 2.2, step 4.1, construct]

6.1 If $K_0$ had a nonzero proper closed subspace $L$, then [F11] gives $K_0=L\oplus L^\perp$ with $L^\perp\ne0$. Both subspaces are invariant under the scalar action $\sigma(n)=\chi_{0,\lambda}(n)I$. In the induced model the sections valued in $L$ form a closed invariant subspace: the pointwise orthogonal projection onto $L$ is bounded, and the scalar fiber action preserves it. By [F4], choose a nonempty relatively compact open subset $U\subseteq G/N$; full support and Radon finiteness give $0<\mu(U)<\infty$. For nonzero $\ell\in L$ and $r\in L^\perp$, the sections $\mathbf1_U\ell$ and $\mathbf1_Ur$ are nonzero elements of the two respective subspaces. This contradicts irreducibility of $\pi$. Thus $K_0$ is one-dimensional and $\sigma$ is equivalent to $\chi_{0,\lambda}$. The Schrödinger model in [F8] is strongly continuous and irreducible on the second-countable group $G$; choosing a nonzero vector and using a countable dense subset of $G$ as in step 2.1 shows that $L^2(\mathbb R^n)$ is separable. Its position projections $P_0(E):=M_{\mathbf1_E}$ form a PVM by [F12], and covariance follows because translations shift these projections while modulation operators commute with them. Translations act transitively on $G/N$, so $(\pi_0,P_0)$ is a transitive system on the standard Borel quotient from [F10]. Mackey's theorem [F4] induces it from some strongly continuous $\sigma_0:N\to U(K_1)$. For $n=(0,p,t)\in N$, the explicit Schrödinger formula acts by multiplication by $\chi_{\lambda x,\lambda}(n)$. In the induced model, [F5] gives the fiber field $\sigma_0(\alpha_{-x}(n))$. Since the intertwiner also identifies $P_0$ with multiplication by indicators, [F7] shows these fields agree almost everywhere. The dense-set and continuity argument of step 5.1 gives $\sigma_0(n)=\chi_{0,\lambda}(n)I_{K_1}$ for all $n\in N$. The nonzero Schrödinger space forces $K_1\ne0$; the same invariant-subspace argument used above for $K_0$, now using irreducibility from [F8], forces $\dim K_1=1$. Thus $\sigma_0$ is equivalent to the one-dimensional character $\chi_{0,\lambda}$. [F2, F4, F5, F7, F8, F10, F11, F12, step 2.1, step 5.1, algebra]

7.1 The uniqueness clause [F6] now identifies the transitive systems of $\pi$ and the Schrödinger model, because their inducing representations are both equivalent to $\chi_{0,\lambda}$. Hence the underlying unitary representations are unitarily equivalent; restricting the intertwiner to $(v,0)$ gives unitary equivalence of the Weyl systems. Existence and irreducibility of the model are [F8], so this proves the unique equivalence class for the fixed $\lambda\ne0$. The argument does not apply to zero central parameter or to infinite-dimensional phase space. [F6, F8, step 5.1, step 6.1] ∎
