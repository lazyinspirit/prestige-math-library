---
id: lem-measurable-gram-schmidt-and-constant-field-trivializations
kind: lemma
title: "Measurable Gram-Schmidt and constant-field trivializations on dimension strata"
status: published
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - lem-measurable-sections-have-measurable-pointwise-inner-products
  - def-direct-integral-of-a-measurable-hilbert-field
  - thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces
  - def-measurable-space
  - def-measurable-function-between-measurable-spaces
  - def-borel-sigma-algebra
  - def-sigma-algebra
  - def-standard-borel-space
  - def-measure-space
  - def-finite-sigma-finite-and-semifinite-measures
  - def-countable
  - def-separable-space
  - def-dense-top
  - def-hilbert-space
  - def-real-and-complex-inner-product-space
  - def-complex-metric-convergence-and-continuity
  - def-real-order
  - cor-cauchy-reals-lub-complete
  - thm-of-archimedean
  - def-complex-conjugate-real-imaginary-part-and-modulus
  - lem-complex-conjugation-and-modulus-laws
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable
  - thm-continuous-preimages-of-borel-sets-are-borel
  - def-axiom-of-choice
  - def-countable-choice
  - thm-choice-implies-dependent-implies-countable-choice
  - def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis
  - thm-parseval-equivalences-for-a-complete-orthonormal-family
  - thm-separable-hilbert-space-has-a-countable-orthonormal-basis
  - lem-countable-iff-surjection-from-n
  - thm-n-cross-n-countable
  - thm-rationals-countable
  - lem-rat-embeds-dense
  - thm-rational-points-and-boxes-in-rn
  - def-second-countable-space
  - def-product-topology
  - thm-countable-products-of-second-countable-spaces
  - def-strong-and-weak-operator-topologies
  - def-space-of-bounded-linear-operators
  - def-operator-norm
  - def-measurable-and-decomposable-operator-fields
  - thm-riesz-representation-for-hilbert-space
  - thm-double-orthogonal-complement-is-closure
  - thm-cauchy-schwarz-in-an-inner-product-space
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-nonnegative-integral-zero-iff-zero-almost-everywhere
dependency_level: 0
axiom_use: "Assume AC. The direct-integral Hilbert theorem uses AC to select representatives of a countable summable subsequence and for its standard-Borel coding and countable generating-algebra argument; it also uses AC for the Countable Choice premise of Parseval. AC implies Countable Choice by thm-choice-implies-dependent-implies-countable-choice, supplying the other Parseval, double-orthogonal-complement, and countable-product second-countability hypotheses. The Gram-Schmidt recursion, least active-index enumeration, and basis construction from an enumerated dense sequence are canonical; no other choice is used."
justified_by: []
aliases: []
provenance:
  statement: literature-derived
  proof: ai-altered
proof_strategy: direct
sources:
  references:
    - title: "Bachir Bekka and Pierre de la Harpe, Unitary Representations of Groups, Duals, and Characters (arXiv:1912.07262v1, 16 December 2019; author-hosted complete book draft)"
      url: "https://arxiv.org/pdf/1912.07262"
      locator: "Chapter 1 §1.G, Proposition 1.G.2, printed p. 60: dimension strata and constant-Hilbert-space trivializations are stated; the proof is referred to Dixmier-von Neumann, Chapter II §1, Proposition 2, and Folland, Proposition 7.21. The measurable Gram-Schmidt, Borel coordinate, and closed-span arguments here are local."
    - title: "Bruce Blackadar, Operator Algebras: Theory of C*-Algebras and von Neumann Algebras (author-hosted complete text)"
      url: "https://bruceblackadar.com/Mathematics/Cycr.pdf"
      locator: "Part III §1.6.1-1.6.4, printed pp. 252-254: direct-integral architecture and central decomposition are outlined; the source explicitly refers the technical details to other texts. The measurable constructions used here are proved locally."
verification:
  audited: "2026-10-08"
  precheck: pass
---

## Statement

Assume the Axiom of Choice. Let $(X,\mathcal B,\mu)$ be a sigma-finite standard-Borel measure space and let $(H_x,e_n(x))_{x\in X}$ be a measurable complex Hilbert field with countable fundamental family. Then: (1) there are measurable sections $f_n$ such that for every $x$ the nonzero $f_n(x)$ form a complete orthonormal system in $H_x$, and $x\mapsto\langle\xi(x),f_n(x)\rangle$ is Borel for every measurable section $\xi$; (2) for each $p\in\{1,2,\ldots\}\cup\{\infty\}$, the dimension stratum $X_p:=\{x:\dim H_x=p\}$ is Borel, and for every fixed separable Hilbert space $K_p$ of dimension $p$ there are unitaries $U_x:H_x\to K_p$ on $X_p$ such that $\xi$ is a measurable section on $X_p$ if and only if $x\mapsto U_x\xi(x)$ is a Borel map; explicitly, $U_x\xi$ has coordinates $\langle\xi(x),f_n(x)\rangle$ after deleting zero frame vectors; (3) weakly measurable operator fields have Borel transported matrix coefficients on each $X_p$, and uniformly bounded transported fields are Borel maps into their weak-operator-topology balls; (4) for every countable family of measurable sections $\xi_k$, the pointwise closed spans $S_x:=\overline{\operatorname{span}}\{\xi_k(x):k\in\mathbb N\}$ form a measurable closed Hilbert subfield, and its direct integral is the closed linear span in $\int_X^\oplus H_x\,d\mu(x)$ of all square-integrable localizations $f\mathbf1_E\xi_k$, where $E=D_j\cap\{x:\|\xi_k(x)\|\le r\}$, $(D_j)$ is any countable finite-measure cover of $X$, $r\in\mathbb R$ with $r\ge1$, and $f$ is any bounded Borel scalar function supported in $E$. The zero-dimensional stratum is Borel as the complement of the positive and infinite-dimensional strata.

## Facts & Assumptions

**Given:** The fibres $H_x$ are separable Hilbert spaces, the fundamental sections $e_n$ have Borel Gram coefficients and dense fibrewise span, $X$ has a standard-Borel sigma-algebra and a sigma-finite measure, and the inner product is linear in its first variable.

[F1] A measurable Hilbert field has separable fibres, measurable fundamental Gram coefficients, and dense fundamental spans; its base is a standard Borel measure space with sigma-finite measure ([[def-measurable-hilbert-field-from-a-countable-fundamental-family]], [[def-standard-borel-space]], [[def-measure-space]], [[def-finite-sigma-finite-and-semifinite-measures]]).

[F2] The complex inner product is linear in its first variable; measurable sections have Borel norms and pairings and are closed under Borel scalar operations and pointwise norm limits ([[def-real-and-complex-inner-product-space]], [[lem-measurable-sections-have-measurable-pointwise-inner-products]]).

[F3] The direct integral is the quotient of square-integrable measurable sections with its integrated inner product. Its construction proves the pairing integrand is integrable by fibre and scalar $L^2$ Cauchy--Schwarz; under AC, the direct integral of any such field is a Hilbert space ([[def-direct-integral-of-a-measurable-hilbert-field]], [[thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces]]).

[F4] AC implies Countable Choice ([[def-axiom-of-choice]], [[thm-choice-implies-dependent-implies-countable-choice]], [[def-countable-choice]]).

[F5] A complete orthonormal family has the Parseval and finite-subset expansion properties under Countable Choice; a dense sequence in a separable Hilbert space yields a finite or countable orthonormal basis. An at most countable dense subset can be enumerated by a sequence ([[def-orthonormal-family-complete-orthonormal-system-and-hilbert-basis]], [[thm-parseval-equivalences-for-a-complete-orthonormal-family]], [[def-separable-space]], [[def-dense-top]], [[def-countable]], [[lem-countable-iff-surjection-from-n]], [[def-hilbert-space]], [[thm-separable-hilbert-space-has-a-countable-orthonormal-basis]]).

[F6] A sigma-finite measure has a countable finite-measure cover; countable unions of null sets are null; and a nonnegative measurable function has integral zero exactly when it vanishes almost everywhere ([[def-finite-sigma-finite-and-semifinite-measures]], [[thm-finite-and-countable-subadditivity-of-measures]], [[thm-nonnegative-integral-zero-iff-zero-almost-everywhere]]).

[F7] Measurable sets form a sigma-algebra, Borel maps are tested by inverse images, continuous maps have Borel preimages, arithmetic and pointwise limits preserve measurability, and the complex conjugate and modulus are continuous ([[def-measurable-space]], [[def-sigma-algebra]], [[def-measurable-function-between-measurable-spaces]], [[def-borel-sigma-algebra]], [[thm-composition-with-borel-functions-preserves-measurability]], [[thm-arithmetic-and-lattice-operations-preserve-measurability]], [[thm-sequential-suprema-infima-limsup-liminf-and-pointwise-limits-are-measurable]], [[thm-continuous-preimages-of-borel-sets-are-borel]], [[def-complex-metric-convergence-and-continuity]], [[def-complex-conjugate-real-imaginary-part-and-modulus]], [[lem-complex-conjugation-and-modulus-laws]]).

[F8] Weak measurability of an operator field is equivalent to Borel pairings against all measurable sections; WOT on bounded operators is initial for scalar functionals, and Hilbert-space Riesz representation writes those functionals as inner products ([[def-measurable-and-decomposable-operator-fields]], [[def-strong-and-weak-operator-topologies]], [[thm-riesz-representation-for-hilbert-space]], [[def-space-of-bounded-linear-operators]], [[def-operator-norm]]).

[F9] The countable product of second-countable spaces is second-countable under Countable Choice; rational boxes form a countable basis of $\mathbb C\cong\mathbb R^2$, $\mathbb N^2$ is countable, and positive rational radii are countable and dense in $(0,\infty)$ ([[def-second-countable-space]], [[def-product-topology]], [[thm-countable-products-of-second-countable-spaces]], [[thm-rational-points-and-boxes-in-rn]], [[thm-n-cross-n-countable]], [[thm-rationals-countable]], [[lem-rat-embeds-dense]]).

[F10] Cauchy--Schwarz makes inner products continuous, and for a linear subspace of a Hilbert space the double orthogonal complement is its closure under Countable Choice ([[thm-cauchy-schwarz-in-an-inner-product-space]], [[thm-double-orthogonal-complement-is-closure]]).

[F11] If two measurable sections are square-integrable, the modulus of their pointwise pairing is integrable; the direct-integral construction proves this by fibrewise and scalar $L^2$ Cauchy--Schwarz ([[def-direct-integral-of-a-measurable-hilbert-field]]).

[F12] The Cauchy-sequence real field has the least-upper-bound property, hence is a complete ordered field; every real number is strictly below a natural number by the Archimedean theorem ([[cor-cauchy-reals-lub-complete]], [[thm-of-archimedean]], [[def-real-order]]).

## Proof

**Proof technique:** direct.

**Given:** AC, the field $(H_x,e_n(x))$, and, for the closed-span claim, a sequence $(\xi_k)$ of measurable sections.

1.1 For any sequence $(u_n)$ of measurable sections, set $v_n=u_n-\sum_{j<n}\langle u_n,f_j\rangle f_j$ and $f_n=v_n/\|v_n\|$ when $\|v_n\|>0$, with $f_n=0$ otherwise. Inductively, measurable-section closure [F2] makes each finite coefficient, sum, residual, and residual norm measurable; the reciprocal on $(0,\infty)$ extended by zero at zero is Borel, so each $f_n$ is measurable. If the earlier nonzero $f_j$ are orthonormal, then for each nonzero $f_\ell$ with $\ell<n$, $\langle v_n,f_\ell\rangle=\langle u_n,f_\ell\rangle-\sum_{j<n}\langle u_n,f_j\rangle\langle f_j,f_\ell\rangle=0$; normalizing a nonzero residual preserves orthogonality. Also $u_n$ lies in the span of $f_0,\ldots,f_n$, and induction gives equality of the spans of the terms with indices $0,\ldots,n$ of $(u_n)$ and $(f_n)$. Thus the nonzero $f_n$ form an orthonormal family whose closed span equals that of $(u_n)$. Apply this recursion to the fundamental family $(e_n)$ to obtain a complete system in each $H_x$; [F2] also gives Borel $x\mapsto\langle\xi(x),f_n(x)\rangle$ for every measurable section $\xi$. [F1, F2, F7, construct]

2.1 Let $a_n(x)=\mathbf1_{\{\|f_n(x)\|=1\}}$, set $N_{-1}(x)=0$, and for $m\ge0$ put $N_m(x)=\sum_{0\le n\le m}a_n(x)$. These are Borel by [F2,F7]. For finite $p\ge1$, $X_p=(\bigcap_m\{N_m\le p\})\cap(\bigcup_m\{N_m=p\})$; also $X_\infty=\bigcap_{q\ge1}\bigcup_m\{N_m\ge q\}$ and $X_0=\bigcap_m\{N_m=0\}$. Sigma-algebra closure makes these sets Borel. Since each nonzero $f_n(x)$ has norm one and their family is complete, $N_m(x)$ counts the active vectors at indices $0,\ldots,m$; the formulas therefore give exactly the finite, infinite, and zero dimensions. [F1, F2, F7, step 1.1]

2.2 Apply the recursion of step 1.1 to $(\xi_k)$, obtaining measurable $h_n$ whose nonzero values form an orthonormal basis of $S_x=\overline{\operatorname{span}}\{\xi_k(x):k\in\mathbb N\}$. Each $S_x$ is a closed Hilbert subspace of $H_x$, and the Borel Gram coefficients and dense span of $(h_n)$ make $(S_x,h_n(x))$ a measurable closed Hilbert subfield by [F1,F2]. Every $S$-measurable section $\zeta$ is $H$-measurable: its finite expansions $\sum_{n\le N}\langle\zeta,h_n\rangle h_n$ are measurable $H$-sections and converge pointwise in norm to $\zeta$ by [F4,F5], so [F2] applies. Conversely, every $H$-measurable section taking values in $S_x$ is $S$-measurable because its pairings with the measurable $h_n$ are Borel by [F2]. Thus inclusion induces an isometric embedding $\mathcal H_S\hookrightarrow\mathcal H_H$. The direct-integral Hilbert theorem [F3] makes its domain complete, so its image is closed. [F1, F2, F3, F4, F5, step 1.1]

3.1 On $X_p$, put $J_p=\{1,\ldots,p\}$ for finite $p$ and $J_\infty=\mathbb N_{>0}$. Enumerate the active frame indices increasingly: for $j\in J_p$, let $\nu_j(x)$ be the $j$th $n\ge0$ with $a_n(x)=1$, and put $g_j(x)=f_{\nu_j(x)}(x)$. Using the convention $N_{-1}=0$, the fibers are $\{\nu_j=n\}=X_p\cap\{N_{n-1}=j-1\}\cap\{a_n=1\}$ for $n\ge0$; hence each piece is Borel and the sections $g_j$ are measurable. Their values form an orthonormal basis of $H_x$. For a fixed separable $K_p$ of dimension $p$, take an at most countable dense set, enumerate it using [F5], and apply the dense-sequence Gram--Schmidt theorem to obtain an orthonormal basis $(b_j)_{j\in J_p}$. The map $g_j(x)\mapsto b_j$ on finite linear combinations is well-defined and isometric because both families are orthonormal. For any $v\in H_x$, choose finite combinations $v_n$ converging to $v$; their images are Cauchy, so completeness of $K_p$ defines $U_xv:=\lim_n U_xv_n$, independently of the approximating sequence and preserving linearity and norm. If $U_xv_n\to w$ for a sequence in the range, isometry makes $(v_n)$ Cauchy; completeness of $H_x$ gives $v_n\to v$, whence $w=U_xv$ and the range is closed. It contains the dense span of $(b_j)$, so $U_x$ is onto. Parseval [F5] gives $\langle U_x\xi(x),b_j\rangle=\langle\xi(x),g_j(x)\rangle$ and convergence of the corresponding partial expansions. [F1, F2, F4, F5, F7, step 1.1, step 2.1]

3.2 Let $L$ be the closed span in $\mathcal H_H$ of all $f\mathbf1_E\xi_k$, where $E=D_j\cap\{x:\|\xi_k(x)\|\le r\}$, $(D_j)$ ranges over a countable finite-measure Borel cover, $r\in\mathbb R$ with $r\ge1$, and $f$ ranges over bounded Borel scalar functions supported in $E$. It is enough to use integer radii: for any real $r\ge1$, [F12] gives an integer $R\ge r$, so $E_r\subseteq E_R$; since $f$ is supported in $E_r$, $f\mathbf1_{E_r}\xi_k=f\mathbf1_{E_R}\xi_k$. Thus the real-radius and integer-radius generating families coincide. Each generator is an $S$-measurable section by step 2.2 and is square-integrable because $\|f\mathbf1_E\xi_k\|\le r\|f\|_\infty\mathbf1_{D_j}$; hence $L\subseteq\mathcal H_S$. Let $\eta\in L^\perp$ and fix $k,j$ and an integer $r\ge1$. The pairing $h(x)=\langle\xi_k(x),\eta(x)\rangle$ is Borel by [F2], and $\mathbf1_Eh$ is integrable: $\mathbf1_E\xi_k$ and $\mathbf1_E\eta$ are square-integrable, so [F11] supplies the direct-integral Cauchy--Schwarz estimate. Define $f=\mathbf1_E\overline h/|h|$ where $h\ne0$, and $f=0$ where $h=0$. This is bounded Borel and supported in $E$ by [F7]. Since the inner product is linear in its first variable, $0=\langle[f\xi_k],[\eta]\rangle=\int_E|h|\,d\mu$, so [F6] gives that the Borel set $N_{k,j,r}:=E\cap\{x:h(x)\ne0\}$ is null. For each $k$, the sets $E$ with $j$ varying and integer $r\ge1$ cover $X$: the $D_j$ cover $X$, and every finite norm is bounded by some integer. There are countably many triples $(k,j,r)$ by iterating the pairing in [F9], so their null sets have a null union by [F6]. Off that union, $\eta(x)\perp\xi_k(x)$ for every $k$, hence $\eta(x)\perp S_x$. Thus $\eta\perp\mathcal H_S$, so $L^\perp\subseteq\mathcal H_S^\perp$. Since $L\subseteq\mathcal H_S$ and both are closed, [F10] yields $\mathcal H_S=\mathcal H_S^{\perp\perp}\subseteq L^{\perp\perp}=L$. Therefore $L=\mathcal H_S$. [F2, F3, F4, F6, F10, F11, F12, step 2.2]

4.1 Let $D\subseteq K_p$ be a countable dense set and enumerate it, and enumerate $\mathbb Q_{>0}$. The balls $B(d,q)$ for $d\in D$ and $q\in\mathbb Q_{>0}$ form a countable base: given $x\in B(y,\varepsilon)$, put $\delta=(\varepsilon-\|x-y\|)/3>0$ and choose $d\in D$ with $\|x-d\|<\delta$. Then $\|d-y\|\le\|d-x\|+\|x-y\|<\varepsilon-2\delta$, so $\|x-d\|<\varepsilon-\|d-y\|$. Choose rational $q$ strictly between these two bounds. It follows that $x\in B(d,q)\subseteq B(y,\varepsilon)$. For the measurable section $\xi$, write $c_j(x)=\langle\xi(x),g_j(x)\rangle$ for $j\in J_p$. If $\xi$ is measurable, each $c_j$ is Borel by [F2]; for every fixed $y\in K_p$, Parseval gives $$\|U_x\xi(x)-y\|^2=\lim_{N\to\infty}\sum_{\substack{j\in J_p\\j\le N}}|c_j(x)-\langle y,b_j\rangle|^2,$$ a Borel function by [F7]. Hence inverse images of the countable basic balls are Borel, proving $x\mapsto U_x\xi(x)$ Borel. Conversely, if this map is Borel, continuity of its coordinate functionals follows from Cauchy--Schwarz [F10] and makes each $c_j$ Borel; the partial sections $\sum_{\substack{j\in J_p\\j\le N}}c_jg_j$ are measurable and converge pointwise in norm to $\xi$ by [F4,F5], so [F2] makes $\xi$ measurable. This proves both directions of the section criterion. [F2, F4, F5, F7, F9, F10, step 3.1]

5.1 Let $T_x\in\mathcal B(H_x)$ be weakly measurable and set $\widetilde T_x=U_xT_xU_x^{-1}$ on $K_p$. For basis indices $i,j\in J_p$, $\langle\widetilde T_xb_i,b_j\rangle=\langle T_xg_i(x),g_j(x)\rangle$ is Borel by [F8] and the measurable sections of step 3.1. On the radius-$C$ operator ball, the basis matrix coefficients generate the WOT: if $\xi_m,\eta_m$ are finite basis expansions converging to $\xi,\eta$, then uniformly for $\|T\|\le C$, Cauchy--Schwarz and the operator norm give $$|\langle T\xi,\eta\rangle-\langle T\xi_m,\eta_m\rangle|\le C(\|\xi-\xi_m\|\|\eta\|+\|\xi_m\|\|\eta-\eta_m\|).$$ The matrix coefficients separate operators by density of the finite basis spans, and every WOT coefficient is a uniform limit on the ball of finite linear combinations of these coordinates; conversely each matrix coordinate is WOT-continuous. Thus the ball's WOT topology is its subspace topology from $\mathbb C^{J_p\times J_p}$, with the index set $J_p$ from step 3.1. This is a countable product of second-countable copies of $\mathbb C$ by [F9], using AC through [F4]. Since all coordinate maps are Borel, $x\mapsto\widetilde T_x$ is Borel into the WOT ball whenever $\|T_x\|\le C$ for every $x\in X_p$. [F4, F8, F9, F10, step 3.1] ∎
