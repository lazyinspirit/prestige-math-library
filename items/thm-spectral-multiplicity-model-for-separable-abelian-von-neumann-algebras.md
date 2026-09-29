---
id: thm-spectral-multiplicity-model-for-separable-abelian-von-neumann-algebras
kind: theorem
title: Spectral multiplicity model for separably acting abelian von Neumann algebras
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - def-axiom-of-choice
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-c-star-algebra-generated-by-a-normal-operator
  - def-compact-support-c-c-and-c-zero-on-an-lch-space
  - def-direct-integral-of-a-measurable-hilbert-field
  - def-essential-supremum-with-respect-to-a-measure
  - def-finite-sigma-finite-and-semifinite-measures
  - def-hilbert-space
  - def-polish-space
  - def-integral-of-a-nonnegative-simple-function
  - def-locally-compact-space
  - def-measurable-and-decomposable-operator-fields
  - def-measurable-function-between-measurable-spaces
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - def-nonnegative-lebesgue-integral
  - def-radon-measure-on-an-lch-space
  - def-real-and-complex-inner-product-space
  - def-separable-space
  - def-space-of-bounded-linear-operators
  - def-strong-and-weak-operator-topologies
  - def-standard-borel-space
  - def-von-neumann-algebra-and-commutant
  - lem-borel-subspaces-admit-polish-presentations
  - lem-complex-conjugation-and-modulus-laws
  - lem-diagonal-multipliers-form-a-von-neumann-algebra
  - lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces
  - lem-measurable-sections-have-measurable-pointwise-inner-products
  - lem-rat-embeds-dense
  - lem-scalar-and-complex-measures-from-a-pvm
  - lem-separable-abelian-von-neumann-algebras-have-a-self-adjoint-generator
  - lem-spectrum-of-a-self-adjoint-operator-is-real
  - prop-essential-supremum-is-attained-as-the-least-essential-bound
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-borel-functional-calculus-for-bounded-normal-operators
  - thm-c-c-is-dense-in-l-p-for-radon-measures
  - thm-choice-implies-dependent-implies-countable-choice
  - thm-continuous-functional-calculus-for-bounded-self-adjoint-operators
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-cyclic-spectral-representation
  - thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication
  - thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces
  - thm-euclidean-space-complete
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-increasing-simple-approximation-of-a-nonnegative-measurable-function
  - thm-indefinite-integral-of-a-nonnegative-function-is-a-measure
  - thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact
  - thm-measurable-essentially-bounded-operator-fields-act-decomposably
  - thm-monotone-convergence-for-the-integral
  - thm-nonnegative-weighted-sums-of-measures
  - thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality
  - thm-rationals-countable
  - thm-spectrum-is-nonempty-compact-and-norm-bounded
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "C. Anantharaman and S. Popa, An Introduction to II1 Factors"
      url: "https://www.idpoisson.fr/anantharaman/publications/IIun.pdf"
      locator: "Chapter 8 §8.1, Theorem 8.1.1 and Remark 8.1.2, printed pp. 122–123; the source treats a separable module over a standard probability-space model and leaves the active-set partition details as an exercise"
    - title: "B. Bekka and P. de la Harpe, Unitary Representations of Groups, Duals, and Characters"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1 §1.G, Proposition 1.G.2, printed p. 60 (dimension strata; proof referred elsewhere); §1.H, Theorem 1.H.1, printed p. 65 (general-field intertwiner theorem; proof referred to Dixmier–von Neumann)"
verification:
  precheck: n/a
axiom_use: "Assume AC. It supplies the hypotheses of the self-adjoint-generator and countable cyclic-decomposition lemmas, the direct-integral Hilbert-space theorem, the Radon–Nikodym theorem, and the operator-field and commutant theorems. AC also yields DC and countable choice through thm-choice-implies-dependent-implies-countable-choice; these are the exact hypotheses for the L² density and Borel-measure regularity suppliers. It supplies the standard-Borel presentation for the Borel subset K of R and countably many representatives of a dense sequence. The weights, active-coordinate enumeration, clipping map, and local integral identities are explicit and use no further choice."
---

## Statement

Assume AC. Let $\mathcal A\subseteq\mathcal B(H)$ be an abelian concrete
von Neumann algebra on a nonzero separable complex Hilbert space $H$. There
exist a bounded self-adjoint operator $S\in\mathcal A$ with
$\mathcal A=W^*(S)$, a nonempty compact set $K=\sigma(S)\subseteq\mathbb R$,
a nonzero finite regular Borel measure $\mu$ on $K$, and a Borel function
$$m:K\longrightarrow\{1,2,3,\ldots\}\cup\{\infty\}$$
(whose values are immaterial on a $\mu$-null set) such that, for the measurable
field $H_t=\mathbb C^{m(t)}$ when $m(t)<\infty$ and $H_t=\ell^2(\mathbb N)$
when $m(t)=\infty$, there is a unitary
$$U:H\longrightarrow\int_K^\oplus H_t\,d\mu(t)$$
with
$$USU^{-1}=M_t,\qquad U\mathcal A U^{-1}=\{M_f:f\in L^\infty(K,\mu)\}.$$
For this fixed generator $S$, every such spectral model has the same measure
class on $K$ and the same multiplicity function $\mu$-almost everywhere.
Changing $S$ can change the spectral coordinate and is not part of the
uniqueness assertion. Inner products are linear in their first variable.

## Facts & Assumptions

**Given:** AC; the abelian concrete von Neumann algebra $\mathcal A$ on the nonzero separable complex Hilbert space $H$; and the measurable-field, direct-integral, spectral-calculus, and measure-theoretic conventions named below.

[F1] Every such $\mathcal A$ has a bounded self-adjoint generator $S\in\mathcal A$ with $\mathcal A=W^*(S)$ ([[lem-separable-abelian-von-neumann-algebras-have-a-self-adjoint-generator]]).

[F2] The spectrum of a bounded operator is nonempty compact and norm bounded; the spectrum of a self-adjoint operator is real. Thus $K=\sigma(S)$ is a nonempty compact subset of $\mathbb R$ ([[thm-spectrum-is-nonempty-compact-and-norm-bounded]], [[lem-spectrum-of-a-self-adjoint-operator-is-real]]).

[F3] A bounded normal operator on a nonzero separable Hilbert space has a finite or countable orthogonal decomposition into nonzero cyclic reducing subspaces; their closed Hilbert sum is $H$ ([[lem-maximal-orthogonal-family-of-cyclic-reducing-subspaces]]).

[F4] For each cyclic vector $x_j$ in this decomposition, its scalar spectral measure $\mu_j=E_{x_j}$ is a nonzero finite regular Borel measure on $K$, and the cyclic unitary $V_j:L^2(K,\mu_j)\to H_j$ intertwines multiplication by every bounded Borel function with the corresponding Borel function of $S$ ([[thm-cyclic-spectral-representation]]).

[F5] Positive countable weighted sums of measures are measures; an absolutely continuous sigma-finite signed measure has a measurable density unique almost everywhere, with the set-integral formula ([[thm-nonnegative-weighted-sums-of-measures]], [[thm-radon-nikodym-density-exists-and-is-unique-up-to-almost-everywhere-equality]]).

[F6] If $\nu(B)=\int_B h\,d\mu$ for a nonnegative measurable density $h$, then for every nonnegative measurable $g$, $$\int g\,d\nu=\int gh\,d\mu.$$ Here this identity is proved locally from the set formula: it holds for nonnegative simple $g$ by the simple-integral definition; increasing simple approximation and monotone convergence give it for general $g$ ([[def-integral-of-a-nonnegative-simple-function]], [[def-nonnegative-lebesgue-integral]], [[thm-increasing-simple-approximation-of-a-nonnegative-measurable-function]], [[thm-monotone-convergence-for-the-integral]]).

[F7] A countable fundamental family defines a measurable Hilbert field; the direct integral is the quotient of square-integrable measurable sections, and under AC it is a separable Hilbert space ([[def-measurable-hilbert-field-from-a-countable-fundamental-family]], [[def-direct-integral-of-a-measurable-hilbert-field]], [[thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces]]).

[F8] On a compact metric space every open set is sigma-compact. Under countable choice, every locally finite Borel measure is regular in the stronger Radon convention when its open sets are sigma-compact; a finite regular Borel measure on an LCH space has the real-valued $C_c$ dense in real $L^p$ for finite $p$ under DC. The library's $C_c(K)$ convention is real-valued until a complex convention is stated explicitly ([[def-locally-compact-space]], [[def-radon-measure-on-an-lch-space]], [[def-compact-support-c-c-and-c-zero-on-an-lch-space]], [[thm-locally-finite-borel-measures-are-regular-when-open-sets-are-sigma-compact]], [[thm-c-c-is-dense-in-l-p-for-radon-measures]]).

[F9] Under AC, $\mathcal D=\{M_f:f\in L^\infty\}$ on a measurable Hilbert field's direct integral is a concrete von Neumann algebra, and its commutant is exactly the decomposable operators; bounded measurable operator fields act with norm the essential supremum and products and adjoints act fibrewise ([[lem-diagonal-multipliers-form-a-von-neumann-algebra]], [[thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication]], [[thm-measurable-essentially-bounded-operator-fields-act-decomposably]], [[def-measurable-and-decomposable-operator-fields]]).

[F10] The bounded Borel functional calculus sends $\mathbf1_B(S)$ to the spectral projection $E(B)$; for $M_t$ the projection is multiplication by $\mathbf1_B$. A PVM defines the finite positive scalar measure $B\mapsto\langle E(B)x,x\rangle=\|E(B)x\|^2$ ([[thm-borel-functional-calculus-for-bounded-normal-operators]], [[lem-scalar-and-complex-measures-from-a-pvm]]).

[F11] For bounded self-adjoint $M_t$, the bounded Borel calculus acts by $\varphi(M_t)=M_\varphi$; for continuous $\varphi$ this lies in the norm-closed unital $*$-algebra generated by $M_t$, which is contained in $W^*(M_t)$. WOT-closed sets are norm closed ([[thm-borel-functional-calculus-for-bounded-normal-operators]], [[thm-continuous-functional-calculus-for-bounded-self-adjoint-operators]], [[def-c-star-algebra-generated-by-a-normal-operator]], [[def-strong-and-weak-operator-topologies]], [[def-von-neumann-algebra-and-commutant]]).

[F12] Complex $L^\infty$ consists of measurable equivalence classes with finite essential bound. Since the base $K$ carries its Borel sigma-algebra, its measurable representatives are Borel. A finite essential supremum is an almost-everywhere bound ([[def-complex-lp-and-euclidean-test-function-conventions]], [[def-essential-supremum-with-respect-to-a-measure]], [[prop-essential-supremum-is-attained-as-the-least-essential-bound]], [[def-standard-borel-space]]).

[F13] A finite measure on $K$ is sigma-finite; nonnegative density integrals define measures; countable weighted sums and countable unions of null sets are valid ([[def-finite-sigma-finite-and-semifinite-measures]], [[thm-indefinite-integral-of-a-nonnegative-function-is-a-measure]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]], [[thm-finite-and-countable-subadditivity-of-measures]]).

[F14] The usual real line is Polish: it is complete and the countable dense rationals witness separability. Its Borel space is standard Borel, and the Borel subset $K$ is standard Borel under AC. Separability supplies a countable dense sequence in each Hilbert space at issue ([[thm-euclidean-space-complete]], [[lem-rat-embeds-dense]], [[thm-rationals-countable]], [[def-polish-space]], [[def-standard-borel-space]], [[lem-borel-subspaces-admit-polish-presentations]], [[def-separable-space]]).

[F15] Measurable functions remain measurable under Borel composition and the listed arithmetic operations, including the real-imaginary formulas for complex operations; continuous maps have Borel preimages. Complex conjugation and modulus obey their Euclidean algebraic laws ([[def-measurable-function-between-measurable-spaces]], [[thm-composition-with-borel-functions-preserves-measurability]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]], [[thm-continuous-preimages-of-borel-sets-are-borel]], [[def-complex-lp-and-euclidean-test-function-conventions]], [[def-complex-conjugate-real-imaginary-part-and-modulus]], [[lem-complex-conjugation-and-modulus-laws]]).

[F16] AC implies DC and countable choice, which are the hypotheses of the regularity and $C_c$-density suppliers in [F8] ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]]).

[F17] The complex inner product is linear in its first variable. For an orthogonal projection $P$, $\langle Px,x\rangle=\langle Px,Px\rangle=\|Px\|^2$ because $P=P^*=P^2$; spectral projections have this property ([[def-real-and-complex-inner-product-space]], [[def-hilbert-space]], [[lem-scalar-and-complex-measures-from-a-pvm]]).

## Proof


**Proof technique:** direct construction from cyclic spectral measures, followed by a local decomposable-intertwiner argument for uniqueness.

**Given:** AC and $\mathcal A\subseteq\mathcal B(H)$ as in the statement.

1.1 By [F1], choose the bounded self-adjoint generator $S$ with $\mathcal A=W^*(S)$. By [F2], $K=\sigma(S)$ is nonempty compact and contained in $\mathbb R$. [F1, F2]

1.2 Regard $S$ as a bounded normal operator. Apply [F3] and enumerate the nonzero cyclic reducing summands as $H_j$, where the index set is either $\{1,\ldots,N\}$ or $\mathbb N$. Choose a cyclic vector $x_j\ne0$ in each summand, and apply [F4] to obtain finite nonzero regular Borel measures $\mu_j$ on $K$ and cyclic unitaries $V_j:L^2(K,\mu_j)\to H_j$. Their direct sum is a unitary from $\bigoplus_jL^2(K,\mu_j)$ onto $H$, and it intertwines every bounded Borel function of $S$ componentwise. AC supplies the cyclic decomposition and the cyclic vectors; no zero summand is used. [F3, F4]

1.3 Put $$a_j=\frac{2^{-j}}{1+\mu_j(K)},\qquad \mu=\sum_j a_j\mu_j.$$ By [F5] this is a Borel measure, and $$0<\mu(K)=\sum_j\frac{2^{-j}\mu_j(K)}{1+\mu_j(K)} \le\sum_j2^{-j}<\infty.$$ It dominates each $\mu_j$ because $\mu(B)\ge a_j\mu_j(B)$ for every Borel $B$. It is regular by [F8]: it is finite and hence locally finite on compact $K$, and every open subset of the compact metric space $K$ is sigma-compact. For an open $O\ne K$, compact sets $$C_n=\{t\in K:d(t,K\setminus O)\ge1/n\}$$ increase to $O$; the cases $O=\varnothing$ and $O=K$ are immediate. [F5, F8, F16, algebra]

1.4 By [F5], take Borel Radon--Nikodym densities $h_j=d\mu_j/d\mu$. Each $h_j$ is nonnegative almost everywhere: if $E_n=\{h_j\le-1/n\}$, then $$0\le\mu_j(E_n)=\int_{E_n}h_j\,d\mu\le-\mu(E_n)/n,$$ so $\mu(E_n)=0$; the negative set is their countable union. Replace $h_j$ by zero there. Since $\mu_j(K)<\infty$, the set formula also implies that $h_j$ is finite almost everywhere. Replace it by zero on any Borel null set where it is nonfinite, so each chosen $h_j$ is Borel, finite and nonnegative. Let $$F_j=\{t:h_j(t)>0\},\qquad K_0=\bigcup_jF_j.$$ The set-integral formula in [F5] gives $\mu_j(K\setminus F_j)=0$ and then $\mu_j(K\setminus K_0)=0$ for every $j$. The weighted-sum formula yields $\mu(K\setminus K_0)=0$. [F5, F13, F15]

1.5 Define $m_0(t)=\sum_j\mathbf1_{F_j}(t)$ on $K_0$, and set $m(t)=m_0(t)$ there and $m(t)=1$ on $K\setminus K_0$. Countable sums of Borel indicators make $m$ Borel; it takes values in $\{1,2,\ldots\}\cup\{\infty\}$ and is the number of active cyclic coordinates for $\mu$-almost every $t$. For $A_r=\{t:m(t)\ge r\}$, the $r$-th active index $$k_r(t)=\min\{j:t\in F_j,\ 1+\#\{i<j:t\in F_i\}=r\}$$ is Borel on $A_r\cap K_0$: its level set at $j$ is $F_j\cap\{\sum_{i<j}\mathbf1_{F_i}=r-1\}$. The rank $r_j(t)=1+\sum_{i<j}\mathbf1_{F_i}(t)$ is Borel on $F_j$. These least-index definitions introduce no choice. [F7, F14, F15]

1.6 Give $H_t$ the span of the first $m(t)$ standard vectors in $\ell^2$; when $m(t)=\infty$ this is all of $\ell^2$. The sections $e_r(t)=\mathbf1_{A_r}(t)e_r$ form a countable fundamental family because their Gram coefficients are $\delta_{rs}\mathbf1_{A_r\cap A_s}$ and their span is dense in every fibre. Thus this is a measurable Hilbert field over the standard-Borel finite-measure space $(K,\mu)$. Its direct integral identifies with $\bigoplus_{r\ge1}L^2(A_r,\mu)$: a section has measurable coordinates $f_r$ supported on $A_r$, its squared fibre norm is $\sum_r|f_r|^2$, and monotone convergence of the finite coordinate sums gives $$\int_K\sum_r|f_r|^2d\mu=\sum_r\int_{A_r}|f_r|^2d\mu.$$ This also proves the identification in both directions, including the countably infinite fibre. [F6, F7, F13, F14, F15]

1.7 On $K_0$, define a map from the cyclic direct sum by $$f_r(t)=\sqrt{h_{k_r(t)}(t)}\,g_{k_r(t)}(t)\quad(t\in A_r\cap K_0),$$ and put $f_r=0$ on the remaining null set. The rank partitions and [F15] make every coordinate Borel. The identity [F6] gives $$\sum_r\int_{A_r}|f_r|^2d\mu =\sum_j\int_{F_j}h_j|g_j|^2d\mu =\sum_j\int_K|g_j|^2d\mu_j.$$ For each finite partial sum these equalities follow by applying [F6] on each rank piece; monotone convergence passes to the countable sums, and the active rank enumeration is a bijection from the active $j$ coordinates to the $r=1,\ldots,m(t)$ coordinates at every $t\in K_0$. Hence the map is well-defined and isometric. It is onto: for a field $(f_r)$, set $$g_j(t)=\begin{cases} f_{r_j(t)}(t)/\sqrt{h_j(t)},&t\in F_j,\\ 0,&t\notin F_j. \end{cases}$$ The Borel rank partition makes $g_j$ measurable, and the same integral identity shows that $(g_j)$ lies in the cyclic Hilbert sum and maps back to $(f_r)$ almost everywhere. Thus the constructed map $W$ is unitary and commutes with all bounded Borel scalar multipliers. [F6, F7, F15]

1.8 Let $\mathcal D=\{M_f:f\in L^\infty(K,\mu)\}$ on this direct integral. By [F9], $\mathcal D$ is a WOT-closed unital $*$-algebra and contains $M_t$ because $K$ is compact. Therefore $$W^*(M_t)\subseteq\mathcal D.$$ [F9, F11, algebra]

1.9 For the reverse inclusion, fix $f\in L^\infty(K,\mu)$ and let $M=\|f\|_\infty$. By [F12] choose a Borel representative and change it on a Borel $\mu$-null set so that $|f(t)|\le M$ everywhere. If $M=0$, $M_f=0$. Assume $M>0$. Choose a countable dense sequence $\eta_j$ in the nonzero direct-integral Hilbert space and measurable representatives; [F7] makes $t\mapsto\|\eta_j(t)\|^2$ Borel. Define $$\nu_j(B)=\int_B\|\eta_j(t)\|^2d\mu(t),\qquad b_j=\frac{2^{-j}}{1+\|\eta_j\|^2},\qquad \nu=\sum_jb_j\nu_j.$$ Each $\nu_j\ll\mu$, so changing $f$ on a Borel $\mu$-null set does not alter any $L^2(\nu_j)$ class or the $L^2(\nu)$ class. By [F13] each $\nu_j$ and $\nu$ is a Borel measure, and $\nu(K)\le2$ since $\nu_j(K)=\|\eta_j\|^2$ and $\sum_{j\in\mathbb N}2^{-j}=2$. It is nonzero because a dense sequence in a nonzero Hilbert space cannot consist entirely of zero vectors. By [F8] $\nu$ is regular, and [F16] supplies DC for [F8]'s hypotheses and the $p=2$ case of the $C_c(K)$-density theorem. Write $f=u+iv$ with real-valued $u,v$. Both belong to real $L^2(\nu)$ because $|u|,|v|\le|f|$. Since the library's $C_c(K)$ is real-valued and $K$ is compact, $C_c(K)=C(K;\mathbb R)$; apply the density theorem separately to choose $u_n,v_n\in C(K;\mathbb R)$ converging to $u,v$ in real $L^2(\nu)$. Then $\psi_n=u_n+iv_n\in C(K;\mathbb C)$ and $\|\psi_n-f\|_{L^2(\nu)}\to0$. Radially clip each $\psi_n$ to the disc of radius $M$: since $|f|\le M$, the clipped functions $\psi_n^{(c)}$ satisfy $|\psi_n^{(c)}(t)-f(t)|\le|\psi_n(t)-f(t)|$ and $\|\psi_n^{(c)}\|_\infty\le M$, and they still converge to $f$ in $L^2(\nu)$. Fix $\xi$ in the direct integral and a member $\eta_j$ of the dense sequence. Cauchy--Schwarz in $L^2(\mu)$ and the pointwise bound $|\langle\xi(t),\eta_j(t)\rangle|\le\|\xi(t)\|\,\|\eta_j(t)\|$ give $|\langle(M_{\psi_n^{(c)}}-M_f)\xi,\eta_j\rangle|\le\|\xi\|_{\mathcal H}\bigl(\int_K|\psi_n^{(c)}-f|^2\|\eta_j\|^2\,d\mu\bigr)^{1/2}$, and the integral equals $\|\psi_n^{(c)}-f\|_{L^2(\nu_j)}^2\le b_j^{-1}\|\psi_n^{(c)}-f\|_{L^2(\nu)}^2$ because $\nu=\sum_kb_k\nu_k$ with $b_j>0$. Hence $\langle(M_{\psi_n^{(c)}}-M_f)\xi,\eta_j\rangle\to0$ for every $j$. The clipped approximants are uniformly bounded by $M$, so $|\langle(M_{\psi_n^{(c)}}-M_f)\xi,\eta-\eta_j\rangle|\le2M\|\xi\|_{\mathcal H}\|\eta-\eta_j\|_{\mathcal H}$ extends this convergence from the dense family to every $\eta$; thus $M_{\psi_n^{(c)}}\to M_f$ in the weak operator topology. Each $M_{\psi_n^{(c)}}=\psi_n^{(c)}(M_t)$ lies in $C^*(I,M_t)\subseteq W^*(M_t)$ by the continuous functional calculus, and $W^*(M_t)$ is WOT closed, so $M_f\in W^*(M_t)$. [F5, F7, F11, F13, algebra]

1.10 Fix $S$ and compare any two models $(\mu,m,U_1)$ and $(\nu,n,U_2)$ on $K$. Choose a countable dense sequence $(z_j)$ in $H$ and define $$\rho(B)=\sum_j\frac{2^{-j}}{1+\|z_j\|^2} \langle E(B)z_j,z_j\rangle.$$ By [F5, F10, F17] this is a finite nonzero Borel measure. For a Borel set $B$, $\rho(B)=0$ exactly when $E(B)z_j=0$ for every $j$, which by density and boundedness of the projection $E(B)$ is equivalent to $E(B)=0$. In either model, [F10] identifies $U_iE(B)U_i^{-1}$ with $M_{\mathbf1_B}$, and this operator is zero exactly when its model measure of $B$ is zero: if the measure is positive, the section $\mathbf1_Be_1$ is a nonzero square-integrable section because the fibre dimension is at least one almost everywhere. Therefore $$\mu(B)=0\quad\Longleftrightarrow\quad E(B)=0 \quad\Longleftrightarrow\quad\nu(B)=0,$$ so the two measures have the same measure class. [F5, F7, F10, F14, F17]

2.1 Compose $W$ with the inverse of the direct sum of the cyclic unitaries $V_j$. This gives a unitary $$U:H\longrightarrow\int_K^\oplus H_t\,d\mu(t)$$ that intertwines every bounded Borel function of $S$ with the same scalar multiplier; in particular $USU^{-1}=M_t$. [F4, F7, step 1.2, step 1.7]

2.2 Let $g=d\nu/d\mu$ and $q=d\mu/d\nu$. Since both measures are finite, their Radon--Nikodym set formulas make these densities finite almost everywhere. As in Step 1.4, the threshold-set argument gives nonnegative Borel versions; replace them by zero on the Borel null sets where they are negative or nonfinite. If $g=0$ on a set of positive $\mu$-measure, the set formula gives zero $\nu$-measure there, contradicting $\mu\ll\nu$; similarly $q>0$ $\nu$-almost everywhere. Applying [F6] to the set formula for $g$ and the nonnegative function $q$ gives $$\int_B qg\,d\mu=\int_Bq\,d\nu=\mu(B)\qquad(B\subseteq K\text{ Borel}).$$ Uniqueness in [F5] therefore gives $qg=1$ almost everywhere. The map $$J:L^2(K,\nu;\mathbb C^{n(t)})\longrightarrow L^2(K,\mu;\mathbb C^{n(t)}),\qquad J\xi=\sqrt g\,\xi,$$ is an isometry by [F6]; multiplication by $\sqrt q$ is its inverse, so it is unitary. It commutes with every bounded Borel scalar multiplier. Hence $R=JU_2U_1^{-1}$ is a unitary from the first model to the second model written over $\mu$, and it intertwines every scalar multiplier. [F5, F6, F15, step 1.10]

3.1 Since $\mathcal A=W^*(S)$, unitary conjugation and steps 1.8--1.9 yield $$U\mathcal A U^{-1}=W^*(USU^{-1})=W^*(M_t)=\mathcal D.$$ These are both inclusions: WOT closedness gives $W^*(M_t)\subseteq\mathcal D$, and the bounded-continuous approximation gives the reverse inclusion. [F1, F9, step 2.1, step 1.8, step 1.9]

3.2 Over $(K,\mu)$ form the measurable direct-sum field $Z_t=\mathbb C^{m(t)}\oplus\mathbb C^{n(t)}$ using the interleaved fundamental families: their Gram coefficients are the two Borel Gram matrices in diagonal blocks, so the field is measurable and has dense fundamental span. Its direct integral identifies with the Hilbert sum of the two model spaces by pairing section coordinates and adding their squared norms. In that sum, define the off-diagonal operator $$\widehat R(x,y)=(0,Rx).$$ It commutes with every scalar multiplier. The commutant theorem [F9] makes it decomposable, say $\widehat R=\int^\oplus T_t\,d\mu(t)$ on $Z_t$. Let $P_F,P_G$ be the global projections onto the first and second summands, induced by the pointwise projections $Q_F(t),Q_G(t)$. Globally, $$\widehat R=P_G\widehat R P_F,\qquad \widehat R^*\widehat R=P_F,\qquad \widehat R\widehat R^*=P_G.$$ The adjoint/product and exact-norm clauses in [F9] imply, outside a common Borel null set, $$T_t=Q_G(t)T_tQ_F(t),\quad T_t^*T_t=Q_F(t),\quad T_tT_t^*=Q_G(t).$$ Indeed each difference field induces the zero operator, so its essential supremum norm is zero; the finitely many exceptional null sets can be united. On this common conull set, the off-diagonal block of $T_t$ is a unitary map $\mathbb C^{m(t)}\to\mathbb C^{n(t)}$. The dimensions of unitarily isomorphic finite or countably infinite Hilbert spaces agree, so $m(t)=n(t)$ almost everywhere. This argument includes both different finite ranks and the finite/infinite and infinite/infinite cases; it uses no published intertwiner-dimension lemma. [F7, F9, F13, step 2.2]

4.1 Steps 1.1--1.9, 2.1, and 3.1 prove existence of the generator, finite regular measure, measurable multiplicity field, unitary spectral model and algebra identity. Steps 1.10, 2.2, and 3.2 prove fixed-generator measure-class and almost-everywhere multiplicity uniqueness. No uniqueness is asserted across different generators. [step 1.1, step 1.2, step 1.7, step 2.1, step 3.1, step 1.10, step 2.2, step 3.2] $\square$
## Boundary cases

- **Empty:** Inapplicable because $H\ne0$ and the spectrum of a bounded operator on a nonzero complex Hilbert space is nonempty; the cyclic family is therefore nonempty.
- **Zero:** The zero operator is allowed. Then $K=\{0\}$; the nonzero cyclic measure and the construction remain valid. The zero multiplier $f=0$ is handled separately in Step 1.9 when its essential bound is zero.
- **One-dimensional:** A one-dimensional $H$ is cyclic, so there is one summand and $m=1$ almost everywhere; the same formulas give the scalar representation.
- **Degenerate:** Each chosen cyclic vector and measure is nonzero; finite cyclic decompositions, overlaps of the active sets, null exceptional sets, and infinite multiplicity are handled explicitly. Values on $K\setminus K_0$ are assigned arbitrarily because that set is $\mu$-null.
- **Endpoints:** No interval endpoints are removed. The compact spectral set may be a singleton or may contain its minimum and maximum; all Borel sets, including endpoint singletons, are included in the spectral-projection and measure-class arguments. Radial clipping includes the boundary $|z|=M$.
- **Choice:** AC is stated and is a direct dependency. It supplies the generator, countable cyclic decomposition, Radon--Nikodym densities, direct-integral and operator-field hypotheses, and implies DC and countable choice for regularity and $C_c$ density. Countable representatives of dense vectors are selected under AC. Weighting and active-index enumeration are explicit.
- **Iff cases:** The algebra identity has both inclusions proved separately in Steps 1.8 and 1.9. The fibrewise multiplicity conclusion in Step 3.2 follows in both directions from $T_t^*T_t=Q_F(t)$ and $T_tT_t^*=Q_G(t)$ on one common conull set.

## Source qualifications

Anantharaman--Popa, Chapter 8 §8.1, Theorem 8.1.1, printed pp. 122--123, starts with a separable module over a standard probability-space model. Its proof passes from cyclic modules to a multiplicity partition and says that the partition details are an exercise; its uniqueness argument uses commutants. Remark 8.1.2 relates the result to the spectral multiplicity theorem for one self-adjoint operator. The present proof does not import the omitted partition details or its measure normalization.

Bekka--de la Harpe, Chapter 1 §1.G, Proposition 1.G.2, printed p. 60, states the measurable dimension-strata reduction and refers its proof elsewhere. Their Theorem 1.H.1, printed p. 65, states the intertwiner/decomposability criterion for varying fields and refers its general-field proof to Dixmier--von Neumann. Here the active-rank map is constructed directly, and the fixed-generator uniqueness proof uses the locally proved commutant and operator-action results of this pair. No citation is treated as a proof of these local steps.
