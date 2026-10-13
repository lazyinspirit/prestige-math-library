---
id: thm-nrqm-fock-and-equilibrium-fixed-n-coulomb-self-adjointness
aliases: [nrqm-fock-and-equilibrium-fixed-n-coulomb-self-adjointness]
kind: theorem
domain: mathematics
title: "Fixed-N Coulomb self-adjointness"
status: draft
origin: pipeline
dependency_level: 4
deps: [thm-complex-lp-completeness-and-almost-everywhere-subsequences, thm-fatou-lemma, thm-tonelli-theorem-for-sigma-finite-product-spaces, thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator, thm-nrqm-fock-and-equilibrium-permutation-restricted-self-adjointness, lem-nrqm-coulomb-three-dimensional-hardy-bound, lem-nrqm-composites-euclidean-l2-product-unitary, cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant, cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn, thm-dominated-convergence, thm-plancherel, thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces, def-sobolev-space-wkp-and-its-norm, thm-kato-rellich, def-relative-boundedness-with-respect-to-an-operator, def-symmetric-self-adjoint-and-essentially-self-adjoint, def-adjoint-of-a-densely-defined-unbounded-operator, def-weak-derivative-of-a-locally-integrable-function, def-l-p-space-as-a-quotient-by-null-functions, def-hilbert-space, cor-cauchy-schwarz-inequality-for-l-two, def-countable-choice, def-axiom-of-choice]
dependency_roles:
  thm-complex-lp-completeness-and-almost-everywhere-subsequences: mathematical-premise
  thm-fatou-lemma: mathematical-premise
  thm-tonelli-theorem-for-sigma-finite-product-spaces: mathematical-premise
  thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator: mathematical-premise
  thm-nrqm-fock-and-equilibrium-permutation-restricted-self-adjointness: mathematical-premise
  lem-nrqm-coulomb-three-dimensional-hardy-bound: mathematical-premise
  lem-nrqm-composites-euclidean-l2-product-unitary: mathematical-premise
  cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps: mathematical-premise
  thm-lebesgue-outer-measure-and-measurability-are-translation-invariant: mathematical-premise
  cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn: mathematical-premise
  thm-dominated-convergence: mathematical-premise
  thm-plancherel: mathematical-premise
  thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces: mathematical-premise
  def-sobolev-space-wkp-and-its-norm: mathematical-premise
  thm-kato-rellich: mathematical-premise
  def-relative-boundedness-with-respect-to-an-operator: mathematical-premise
  def-symmetric-self-adjoint-and-essentially-self-adjoint: mathematical-premise
  def-adjoint-of-a-densely-defined-unbounded-operator: mathematical-premise
  def-weak-derivative-of-a-locally-integrable-function: mathematical-premise
  def-l-p-space-as-a-quotient-by-null-functions: mathematical-premise
  def-hilbert-space: mathematical-premise
  cor-cauchy-schwarz-inequality-for-l-two: mathematical-premise
  def-countable-choice: mathematical-premise
  def-axiom-of-choice: mathematical-premise
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 6.1 pp. 133-137 (Kato-Rellich theorem and Coulomb-type perturbations)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
    - title: "G. Teschl, Mathematical Methods in Quantum Mechanics, 1st edition 2009, Section 11.1 pp. 239-242 (Kato's theorem: self-adjointness of atomic N-particle Schrodinger operators with Coulomb interactions)"
      url: "https://www.mat.univie.ac.at/~gerald/ftp/book-schroe/schroe.pdf"
---

## Statement

Assume the Axiom of Countable Choice and the Axiom of Choice
([[def-countable-choice]], [[def-axiom-of-choice]]). Let $N\ge1$ and $r\ge1$,
let $m_1,\dots,m_N>0$, $\hbar>0$, let $a_1,\dots,a_M\in\mathbb R^3$ be fixed
points, and let $z_{im},z_{ij}\in\mathbb R$ be real coefficients
($1\le i\le N$, $1\le m\le M$, $1\le i<j\le N$). Let $K$ be the free kinetic
operator of [[thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator]],
$D(K)=W^{2,2}(\mathbb R^{3N};\mathbb C)$ with equivalent graph norm, and define
the singular multiplier
$$V(X):=\sum_{i=1}^N\sum_{m=1}^M\frac{z_{im}}{|x_i-a_m|}+\sum_{1\le i<j\le N}\frac{z_{ij}}{|x_i-x_j|},\qquad X=(x_1,\dots,x_N)\in\mathbb R^{3N},$$
as an a.e.-defined real measurable function
([[def-l-p-space-as-a-quotient-by-null-functions]]). Then:

(a) each of the multipliers $u\mapsto u/|x_i-a_m|$ and
$u\mapsto u/|x_i-x_j|$ is $K$-bounded with $K$-bound zero: for every
$\eta>0$ there is a finite constant $C_\eta$ with
$$\Bigl\|\frac{u}{|x_i-a_m|}\Bigr\|_2\le\eta\|Ku\|_2+C_\eta\|u\|_2,\qquad \Bigl\|\frac{u}{|x_i-x_j|}\Bigr\|_2\le\eta\|Ku\|_2+C_\eta\|u\|_2$$
for all $u\in D(K)$ ([[def-relative-boundedness-with-respect-to-an-operator]],
[[def-weak-derivative-of-a-locally-integrable-function]]);

(b) $D(K)\subseteq D(M_V)$, and $M_V$ is symmetric on $D(K)$ with $K$-bound
zero; consequently
$$H:=K+M_V,\qquad D(H):=D(K)=W^{2,2}(\mathbb R^{3N};\mathbb C),$$
is self-adjoint and bounded below, and $C_c^\infty(\mathbb R^{3N};\mathbb C)$
is a core for $H$ ([[thm-kato-rellich]],
[[def-symmetric-self-adjoint-and-essentially-self-adjoint]]);

(c) the operator $K\otimes I_r+M_V\otimes I_r$ on
$L^2(\mathbb R^{3N};\mathbb C)\otimes\mathbb C^r$ with domain $D(K)\otimes\mathbb C^r$
is self-adjoint and bounded below;

(d) if $m_1=\cdots=m_N=m$ and the coefficients are permutation invariant
($z_{im}$ independent of $i$ and $z_{ij}$ independent of the pair), then the
transported permutation unitaries of
[[thm-nrqm-fock-and-equilibrium-permutation-restricted-self-adjointness]]
reduce $H$, and the restrictions of $H$ to the symmetric and antisymmetric
sectors are self-adjoint on those sectors.

No Hunziker-van Winter-Zhislin threshold statement, no uniform-in-$N$
stability, no thermodynamic limit, no spectral statement beyond
self-adjointness and boundedness from below, and no physical interpretation of
$H$, the masses or the coefficients is asserted.

## Facts & Assumptions
**Given:** the integers $N,r\ge1$, masses $m_i>0$, the constant $\hbar>0$, fixed points $a_m$, real coefficients $z_{im},z_{ij}$, the free kinetic operator $K$ with domain $D(K)=W^{2,2}(\mathbb R^{3N})$, the partial Laplacians $\Delta_i$ and the operators $K_i:=-\hbar^2\Delta_i/(8\pi^2m_i)$ on the $i$-th block, and the multiplier $V$ defined above.

[F1] $K=\sum_iK_i$ is self-adjoint, positive, with $D(K)=W^{2,2}(\mathbb R^{3N};\mathbb C)$ and graph norm equivalent to the $W^{2,2}$ norm; for every $u\in D(K)$: $\|\nabla_iu\|_2^2=(8\pi^2m_i/\hbar^2)\langle K_iu,u\rangle\le(8\pi^2m_i/\hbar^2)\langle Ku,u\rangle\le(8\pi^2m_i/\hbar^2)\|Ku\|_2\|u\|_2$ by Cauchy-Schwarz in $L^2$, and $\|\Delta_iu\|_2\le(8\pi^2m_i/\hbar^2)\|Ku\|_2$ ([[thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator]], [[thm-fourier-characterisation-of-integer-order-hilbert-sobolev-spaces]], [[thm-plancherel]], [[def-sobolev-space-wkp-and-its-norm]], [[cor-cauchy-schwarz-inequality-for-l-two]]).

[F2] Three-dimensional Hardy inequality: for $v\in W^{1,2}(\mathbb R^3;\mathbb C)$, $\|v/|\cdot|\|_2\le2\|\nabla v\|_2$ ([[lem-nrqm-coulomb-three-dimensional-hardy-bound]] (c)).

[F3] $C_c^\infty(\mathbb R^{3N};\mathbb C)$ is dense in $W^{1,2}(\mathbb R^{3N};\mathbb C)$ and in $W^{2,2}$; under Countable Choice $L^2$ convergence supplies an a.e.-convergent subsequence, and Fatou bounds the integral of the nonnegative pointwise limit by the liminf of integrals ([[cor-compactly-supported-smooth-functions-are-dense-in-wkp-of-rn]], [[thm-complex-lp-completeness-and-almost-everywhere-subsequences]], [[thm-fatou-lemma]], [[def-l-p-space-as-a-quotient-by-null-functions]]). Tonelli permits the nonnegative slice integrations over the sigma-finite Lebesgue product spaces ([[thm-tonelli-theorem-for-sigma-finite-product-spaces]]).

[F4] Translations preserve Lebesgue measure, and the orthogonal map $(x_i,x_j)\mapsto(y,z)=((x_i-x_j)/\sqrt2,(x_i+x_j)/\sqrt2)$ preserves Lebesgue measure, hence $L^2$ norms and integrals; under it, $\partial_{x_i}=2^{-1/2}(\partial_z+\partial_y)$, $\partial_{x_j}=2^{-1/2}(\partial_z-\partial_y)$ and $|\nabla_yw|^2+|\nabla_zw|^2=|\nabla_iw|^2+|\nabla_jw|^2$ ([[thm-lebesgue-outer-measure-and-measurability-are-translation-invariant]], [[cor-lebesgue-measure-is-invariant-under-orthogonal-linear-maps]], [[lem-nrqm-composites-euclidean-l2-product-unitary]], [[def-weak-derivative-of-a-locally-integrable-function]]).

[F5] Kato-Rellich: if $A$ is self-adjoint, $B$ symmetric with $D(A)\subseteq D(B)$ and $A$-bound less than $1$, then $A+B$ on $D(A)$ is self-adjoint and bounded below when $A$ is; a finite sum of $A$-bound-zero symmetric operators has $A$-bound zero ([[thm-kato-rellich]], [[def-relative-boundedness-with-respect-to-an-operator]]).




## Proof

1.1 [Global Hardy inequalities] Let $u\in C_c^\infty(\mathbb R^{3N})$ and fix a block index $i$ and a center $a\in\mathbb R^3$. For each fixed value of the remaining coordinates the slice $x_i\mapsto u(\dots,x_i,\dots)$ is a compactly supported smooth function on $\mathbb R^3$; [F2] gives $\int_{\mathbb R^3}|u|^2/|x_i-a|^2\,dx_i\le4\int_{\mathbb R^3}|\nabla_iu|^2dx_i$ for that slice, and integrating over the remaining coordinates by Tonelli [F3] with [F4] (translation to the center $a$) yields $\int|u|^2/|x_i-a|^2\le4\int|\nabla_iu|^2$. For a pair replace $(x_i,x_j)$ by the orthogonal coordinates $(y,z)$ of [F4]: then $|x_i-x_j|^2=2|y|^2$ and, applying the same slice argument in the $y$-variable to the transformed function, $\int|u|^2/|x_i-x_j|^2=\tfrac12\int|u'|^2/|y|^2\le2\int|\nabla_yu'|^2\le2\int(|\nabla_iu|^2+|\nabla_ju|^2)$. Both inequalities extend to all $u\in W^{1,2}(\mathbb R^{3N})$: choose $u_k\in C_c^\infty$ with $u_k\to u$ and $\nabla u_k\to\nabla u$ in $L^2$ ([F3]); the right-hand sides converge to the corresponding norms of $u$, while the left-hand sides are lower semicontinuous by Fatou along an a.e. convergent subsequence ([F3]). [F2, F3, F4, algebra]

2.1 [Operator-norm $K$-bounds] Let $u\in D(K)$ and put $a:=\|Ku\|_2$, $b:=\|u\|_2$. The squared Hardy bound of step 1.1 and [F1] give $\|u/|x_i-a_m|\|_2^2\le4\|\nabla_iu\|_2^2\le(32\pi^2m_i/\hbar^2)\langle Ku,u\rangle\le(32\pi^2m_i/\hbar^2)ab$. For a pair, the corrected pair bound gives $\|u/|x_i-x_j|\|_2^2\le2(\|\nabla_iu\|_2^2+\|\nabla_ju\|_2^2)\le(16\pi^2\max(m_i,m_j)/\hbar^2)\langle Ku,u\rangle\le(16\pi^2\max(m_i,m_j)/\hbar^2)ab$: the sum uses $\langle(K_i+K_j)u,u\rangle\le\langle Ku,u\rangle$. For either multiplier let $C$ be the square root of its displayed finite coefficient. For every $\eta>0$, $C\sqrt{ab}\le\eta a+C^2b/(4\eta)$, obtained by expanding $(\sqrt{\eta a}-C\sqrt{b}/(2\sqrt\eta))^2\ge0$. Thus both actual $L^2$ operator norms are at most $\eta\|Ku\|_2+C_\eta\|u\|_2$, with finite $C_\eta=C^2/(4\eta)$, including $u=0$. No form-to-operator-norm inference is used. This proves (a) for the literal Fourier-normalized $K$ of the supplier. [F1, step 1.1, algebra]

3.1 [Separate quadratic-form bound] The same norm Hardy and kinetic-gradient inequalities give $\|u/r\|_2\le C\langle Ku,u\rangle^{1/2}$ for each distance multiplier, so Cauchy–Schwarz gives $|\langle M_Vu,u\rangle|\le\int|V||u|^2\le C_V\langle Ku,u\rangle^{1/2}\|u\|_2$, where $C_V$ is the finite sum of the respective Hardy-gradient constants times $|z_{im}|,|z_{ij}|$. For every $\epsilon>0$, Young's square inequality yields $|\langle M_Vu,u\rangle|\le\epsilon\langle Ku,u\rangle+C_V^2\|u\|_2^2/(4\epsilon)$. In particular $\langle(K+M_V)u,u\rangle\ge(1-\epsilon)\langle Ku,u\rangle-C_V^2\|u\|_2^2/(4\epsilon)$; this is a valid form bound and lower estimate, separate from the operator-norm bound of step 2.1. [F1, step 1.1, step 2.1, algebra]

3.2 [The full multiplier and Kato-Rellich] Since $V$ is a finite real linear combination of the multipliers of part (a), each with $K$-bound zero, $V$ is measurable and $M_V$ is a symmetric operator with $D(K)\subseteq D(M_V)$ and $K$-bound zero ([F5]); in particular the bound $\|M_Vu\|\le a\|Ku\|+b\|u\|$ holds on $D(K)$ for some $a<1$ and finite $b$ (choose $a<1$ by the zero bound and adjust $b$). By [F5] (Kato-Rellich) $H=K+M_V$ is self-adjoint on $D(K)$ and bounded below. Since the graph norms of $H$ and $K$ are equivalent on $D(K)$ (as in [[thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator]] (b)), the core $C_c^\infty$ of $K$ is a core for $H$. This proves (b). [F5, step 2.1, algebra]

4.1 [Component extension and permutation sectors] The passage to $L^2(\mathbb R^{3N};\mathbb C)\otimes\mathbb C^r$ is the finite direct sum of $r$ copies of $H$ and is self-adjoint and bounded below by the same argument as part (c) of [[thm-nrqm-fock-and-equilibrium-bounded-fixed-n-operator]]; this proves (c). Under equal masses and permutation-invariant coefficients, both $K$ and the multiplier $M_V$ are invariant under the transported permutation unitaries (the weight $\kappa$ and the multiplier $V$ are permutation invariant, and the domain $D(M_V)$ is permutation invariant because the a.e.-defined function $V$ is), so $U_\pi^{\mathrm{phys}}D(H)=D(H)$ and $U_\pi^{\mathrm{phys}}H=HU_\pi^{\mathrm{phys}}$ on $D(H)$; part (d) then follows from [[thm-nrqm-fock-and-equilibrium-permutation-restricted-self-adjointness]] (d). [step 3.2, algebra]

5.1 [Conclusion and scope] Steps 1.1, 2.1, 3.1, 3.2 and 4.1 prove (a)-(d). The final paragraph of the statement records the excluded claims: no HVZ threshold, no uniform-in-$N$ stability, no thermodynamic limit, no further spectral statement and no physical interpretation is asserted. [step 1.1, step 2.1, step 3.2, step 4.1, algebra] ∎
