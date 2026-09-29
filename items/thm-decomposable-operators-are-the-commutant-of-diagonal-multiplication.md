---
id: thm-decomposable-operators-are-the-commutant-of-diagonal-multiplication
kind: theorem
title: Decomposable operators are the commutant of diagonal multiplication
status: draft
origin: pipeline
pipeline_run: frontier-36-complete
deps:
  - cor-additivity-of-the-nonnegative-lebesgue-integral
  - def-axiom-of-choice
  - def-direct-integral-of-a-measurable-hilbert-field
  - def-complex-lp-and-euclidean-test-function-conventions
  - def-essential-supremum-with-respect-to-a-measure
  - def-finite-sigma-finite-and-semifinite-measures
  - def-integral-over-a-measurable-set
  - def-measurable-and-decomposable-operator-fields
  - def-measurable-hilbert-field-from-a-countable-fundamental-family
  - def-nonnegative-lebesgue-integral
  - def-operator-norm
  - def-von-neumann-algebra-and-commutant
  - lem-measurable-sections-have-measurable-pointwise-inner-products
  - lem-rat-embeds-dense
  - prop-order-and-scalar-rules-for-the-nonnegative-integral
  - prop-the-nonnegative-integral-agrees-with-the-simple-integral
  - thm-dominated-convergence
  - thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces
  - thm-finite-and-countable-subadditivity-of-measures
  - thm-measurable-essentially-bounded-operator-fields-act-decomposably
  - thm-n-cross-n-countable
  - thm-rationals-countable
  - thm-composition-with-borel-functions-preserves-measurability
  - thm-continuous-preimages-of-borel-sets-are-borel
  - thm-arithmetic-and-lattice-operations-preserve-measurability
  - thm-threshold-characterisations-of-real-and-extended-real-measurability
proof_strategy: direct
provenance:
  statement: ai-altered
  proof: ai-altered
sources:
  references:
    - title: "F. Bruhat, Lectures on Lie Groups and Representations of Locally Compact Groups, Ch. 10"
      url: https://mathweb.tifr.res.in/Documents/Publications/Lectures/tifr14.pdf
      locator: "Part III, Chapter 10 §1.8, Theorem 2, printed pp. 100–101; local proof adapts its commutant reconstruction to the standard-Borel field convention"
    - title: "B. Bekka and P. de la Harpe, Unitary Representations of Groups, Duals, and Characters"
      url: https://arxiv.org/pdf/1912.07262
      locator: "Chapter 1 §1.H, Theorems 1.H.1 and 1.H.4, printed pp. 65–68; general-field statement and detailed constant-separable-fibre proof"
axiom_use: "Assume AC to meet the hypotheses of the commutant, direct-integral Hilbert-space, and operator-action suppliers. AC also supplies a countable choice of measurable representatives for S(1_{E_k}u_n). The normalized test family, finite rational coding, least-index measurable partitions, finite-measure exhaustion, and fibre extensions are otherwise explicit; no further choice is used."
verification:
  precheck: n/a
---

## Statement

Assume AC. Let $(X,\mathcal B,\mu)$ be a sigma-finite standard-Borel measure
space, let $(H_x,e_n(x))_{x\in X}$ be a measurable complex Hilbert field with
a countable fundamental family, and set
$$\mathcal H=\int_X^\oplus H_x\,d\mu(x),$$
with the direct-integral Hilbert-space structure. For each
$f\in L^\infty(X,\mu)$ let $M_f\in\mathcal B(\mathcal H)$ act by scalar
multiplication, and put $\mathcal D=\{M_f:f\in L^\infty(X,\mu)\}$. Then
$$\mathcal D'=\{S\in\mathcal B(\mathcal H): S\text{ is decomposable}\},$$
where decomposable has the meaning in
[[def-measurable-and-decomposable-operator-fields]]. For a fixed $S$, any
weakly measurable essentially bounded field inducing $S$ is unique up to a
$\mu$-null set.

## Facts & Assumptions

**Given:** AC; a sigma-finite standard-Borel measure space; a measurable complex Hilbert field with countable fundamental family; its direct-integral Hilbert space; the scalar-multiplication algebra $\mathcal D$; and, for the converse direction, a bounded operator $S\in\mathcal D'$.

[F1] The fibres are separable complex Hilbert spaces; measurable sections are characterized by Borel fundamental coefficients, and each fundamental vector is measurable ([[def-measurable-hilbert-field-from-a-countable-fundamental-family]]).

[F2] The direct integral is the quotient of square-integrable measurable sections by equality off a Borel null set, with norm squared the integral of the fibre norm squared ([[def-direct-integral-of-a-measurable-hilbert-field]]).

[F3] Under AC, the direct integral of this field over a sigma-finite standard-Borel base is a separable Hilbert space ([[thm-direct-integrals-of-measurable-hilbert-fields-are-hilbert-spaces]]).

[F4] The commutant is taken inside the bounded operators on the Hilbert space; $S\in\mathcal D'$ means $SM_f=M_fS$ for every $f\in L^\infty$ ([[def-von-neumann-algebra-and-commutant]]).

[F5] A decomposable operator is induced by a weakly measurable essentially bounded operator field. For any such field, its action is bounded and its operator norm equals the essential supremum of the fibre norms ([[def-measurable-and-decomposable-operator-fields]], [[thm-measurable-essentially-bounded-operator-fields-act-decomposably]]).

[F6] The complex-linear span of the fundamental family is dense in each fibre ([[def-measurable-hilbert-field-from-a-countable-fundamental-family]]).

[F7] Measurable sections have measurable pointwise norms and pairings, and measurable scalar multiples remain measurable ([[lem-measurable-sections-have-measurable-pointwise-inner-products]]).

[F8] Sigma-finiteness gives a countable measurable cover by finite-measure sets; taking finite unions makes it increasing ([[def-finite-sigma-finite-and-semifinite-measures]]).

[F9] The nonnegative integral is monotone and positively homogeneous, additive on finite sums, and agrees with the simple integral on indicators ([[prop-order-and-scalar-rules-for-the-nonnegative-integral]], [[cor-additivity-of-the-nonnegative-lebesgue-integral]], [[prop-the-nonnegative-integral-agrees-with-the-simple-integral]]).

[F10] Dominated convergence applies to measurable functions bounded in modulus by one integrable function ([[thm-dominated-convergence]]).

[F11] Countable unions of Borel null sets are Borel null sets ([[thm-finite-and-countable-subadditivity-of-measures]]).

[F12] The essential supremum is the infimum of the almost-everywhere bounds ([[def-essential-supremum-with-respect-to-a-measure]]).

[F13] The complex rationals are countable and dense ([[thm-rationals-countable]], [[lem-rat-embeds-dense]]), and $\mathbb N^2$ is in bijection with $\mathbb N$ ([[thm-n-cross-n-countable]]). From a fixed bijection $\beta:\mathbb N^2\to\mathbb N$, the recursive code $c_0(())=0$, $c_{k+1}(a_0,\ldots,a_k)=\beta(a_0,c_k(a_1,\ldots,a_k))$, and $c(a_0,\ldots,a_{k-1})=\beta(k,c_k(a_0,\ldots,a_{k-1}))$ injects the set of finite sequences into $\mathbb N$. Pairing these codes with the rational-complex coefficients shows that the finite rational-complex combinations of a countable family form a countable test family.

[F14] AC supplies a choice function for every family of nonempty sets, in particular a countable family of nonempty sets ([[def-axiom-of-choice]]).

[F15] Complex $L^\infty$ consists of measurable functions with finite essential bound, modulo almost-everywhere equality ([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F16] The nonnegative integral of a nonnegative measurable function is defined as the supremum of the simple integrals of its nonnegative simple minorants ([[def-nonnegative-lebesgue-integral]]).

[F17] Composition of a measurable map with a Borel measurable outer map is measurable ([[thm-composition-with-borel-functions-preserves-measurability]]).

[F18] A continuous map between topological spaces has Borel preimages of Borel sets ([[thm-continuous-preimages-of-borel-sets-are-borel]]).

[F19] Complex $L^\infty$ classes have measurable representatives and identify representatives that agree almost everywhere ([[def-complex-lp-and-euclidean-test-function-conventions]]).

[F20] Arithmetic operations on measurable extended-real functions, when defined, preserve measurability ([[thm-arithmetic-and-lattice-operations-preserve-measurability]]).

[F21] Superlevel sets of a measurable real-valued function are measurable ([[thm-threshold-characterisations-of-real-and-extended-real-measurability]]).

[F22] For a nonnegative measurable function, integration over a measurable set is integration after multiplication by its indicator ([[def-integral-over-a-measurable-set]]).

[F23] The operator norm is a bound: $\|S\xi\|\le\|S\|\,\|\xi\|$ for every vector in its domain ([[def-operator-norm]]).

[F24] A section belongs to the direct integral's prequotient space exactly when its pointwise squared norm has finite nonnegative integral ([[def-direct-integral-of-a-measurable-hilbert-field]]).

## Proof

**Proof technique:** localize, glue, and extend by density.

1.1 Fix $f\in L^\infty$ and take a Borel representative, available from its measurable-function quotient [F19]. The scalar field $R_x=f(x)I_{H_x}$ is weakly measurable: $f e_n$ is a measurable section by [F1, F7], so each matrix coefficient $\langle f(x)e_n(x),e_m(x)\rangle$ is measurable. Also $\|R_x\|\le|f(x)|$, so [F12, F15] make it essentially bounded. The action theorem [F5] therefore defines a bounded multiplication operator $M_f$; changing the representative on a null set does not change its action on direct-integral classes by [F2, F19]. Now let $T$ be induced by any weakly measurable essentially bounded field $(T_x)$. Pointwise linearity gives $T_x(f(x)\xi(x))=f(x)T_x\xi(x)$ for every measurable section $\xi$, and the action theorem makes both operators bounded. Hence $TM_f=M_fT$ on every class, proving the decomposable inclusion. [F1, F2, F3, F4, F5, F7, F12, F15, F19, given, algebra]

1.2 For the converse, fix $S\in\mathcal D'$ and write $C=\|S\|$. Enumerate by the finite-sequence coding and the countability of $\mathbb Q+i\mathbb Q$ all finite rational-complex combinations $q_n$ of the fundamental sections $e_j$. They are measurable by [F1, F7] and pointwise dense in each fibre by [F6, F13]. Define $b(0)=0$ and $b(t)=1/t$ for $t>0$. The reciprocal map on $(0,\infty)$ is continuous, so its Borel preimages are Borel by [F18]; separating the Borel singleton $\{0\}$ shows that $b$ is Borel. Set $u_n(x)=b(\|q_n(x)\|)q_n(x)$. By [F7, F17], each $u_n$ is a measurable section; it has norm one where $q_n(x)\ne0$ and is zero otherwise. Its nonzero values are dense in the unit sphere of every nonzero fibre: if $z$ is a unit vector, choose rational-complex combinations $q_n$ arbitrarily close to $z$ using [F6, F13]; eventually they are nonzero, and $\|q_n/\|q_n\|-z\|\le2\|q_n-z\|$. Thus $\|u_n(x)\|\le1$ and their complex span is dense in every fibre. Choose an increasing Borel exhaustion $E_k\uparrow X$ with $\mu(E_k)<\infty$ by [F8]. By [F9, F16, F22], $\int_X\|\mathbf1_{E_k}u_n\|^2\,d\mu\le\mu(E_k)<\infty$, so $[\mathbf1_{E_k}u_n]\in\mathcal H$ by [F24]. For each pair $(k,n)$ choose a measurable square-integrable representative $\eta_{k,n}$ of $S[\mathbf1_{E_k}u_n]$ by the defining prequotient space [F24]. This is a countable choice, supplied by AC. [F1, F2, F4, F6, F7, F8, F9, F13, F14, F16, F17, F18, F22, F24, given, construct]

2.1 If $\ell\ge k$, commutation with $M_{\mathbf1_{E_k}}$, which exists by step 1.1, gives $[\mathbf1_{E_k}\eta_{\ell,n}]=[\eta_{k,n}]$ because $S\in\mathcal D'$ by step 1.2 and [F4]. The set where these two sections differ is Borel by [F7] and null by [F2]. Take the countable union over $k,n,\ell$; it is Borel null by [F11]. Off that set the representatives agree on every overlap. Define $v_n$ on the disjoint layers $E_k\setminus E_{k-1}$ by $\eta_{k,n}$, and set $v_n=0$ on the exceptional null set (with $E_0=\varnothing$). For every fundamental index $m$, each coefficient $\langle v_n,e_m\rangle$ is Borel on every layer by [F1]; the preimage of a Borel set is the countable union of its Borel preimages intersected with the layers, together with its preimage on the Borel exceptional set. Thus all fundamental coefficients of $v_n$ are Borel, so $v_n$ is a measurable section by [F1]. On every $E_k$ it represents the local action of $S$ on $\mathbf1_{E_k}u_n$. [F1, F2, F4, F7, F11, step 1.1, step 1.2, construct]

3.1 Let $q=\sum_{j=1}^m c_j u_{n_j}$, where the coefficients are in $\mathbb Q+i\mathbb Q$; these tests form a countable family by [F13]. The section $q$ is bounded by the construction in step 1.2. Its squared norm and the squared norm of $v_q$ are measurable by [F20], so the displayed integrals are defined. For every Borel $A\subseteq E_k$, step 2.1 and commutation with $M_{\mathbf1_A}$, which exists by step 1.1, show that $S[\mathbf1_Aq]=[\mathbf1_Av_q]$: first apply the local representative identity to each $u_{n_j}$ on $E_k$, then use commutation and linearity. Thus the operator norm bound [F23] gives $$\int_A\|v_q(x)\|^2\,d\mu(x)=\|S[\mathbf1_Aq]\|^2\le C^2\|\mathbf1_Aq\|^2=C^2\int_A\|q(x)\|^2\,d\mu(x).$$ Both integrands are integrable on $E_k$: $q$ is bounded on a finite-measure set by [F9, F22], and $v_q$ represents the image under the bounded operator $S$ of $[\mathbf1_{E_k}q]$, so belongs to the prequotient space [F24]. [F2, F4, F9, F13, F16, F20, F22, F23, F24, step 1.1, step 1.2, step 2.1, algebra]

4.1 Put $g=\|v_q\|^2$ and $h=C^2\|q\|^2$ on $E_k$. Their measurability and that of $g-h$ follow from [F20], so $A_\epsilon=\{x\in E_k:g(x)-h(x)\ge\epsilon\}$ is Borel by [F21] for each positive rational $\epsilon$. The localized inequality, monotonicity, additivity, and the simple integral of an indicator give $$\int_{A_\epsilon}h\,d\mu+\epsilon\mu(A_\epsilon)\le\int_{A_\epsilon}g\,d\mu\le\int_{A_\epsilon}h\,d\mu.$$ Here [F22] identifies each integral over $A_\epsilon$ with the integral of the corresponding indicator product. Thus $\mu(A_\epsilon)=0$. Density of the rationals [F13] gives $\{g>h\}=\bigcup_{\epsilon\in\mathbb Q,\,\epsilon>0}A_\epsilon$, so $g\le h$ almost everywhere on $E_k$. There are only countably many $q,k,\epsilon$, by [F13]; one Borel null set makes all inequalities hold simultaneously. Enlarge the gluing exceptional set by this null set and replace every $v_n$ by zero on it; this preserves measurability and each local equivalence class. Consequently, outside one Borel null set $$\Big\|\sum_{j=1}^m c_jv_{n_j}(x)\Big\|\le C\Big\|\sum_{j=1}^m c_ju_{n_j}(x)\Big\|$$ for every rational-complex finite combination. [F9, F11, F13, F16, F20, F21, F22, step 3.1, algebra]

5.1 Off the common exceptional null set, the rational-complex span of the $u_n(x)$ is dense: their complex span is dense by step 1.2 and [F6], and rational-complex coefficients approximate every complex coefficient by [F13]. Define $T_x(\sum_j c_ju_{n_j}(x))=\sum_j c_jv_{n_j}(x)$ for $c_j\in\mathbb Q+i\mathbb Q$. The pointwise estimate in step 4.1 makes this assignment well-defined and bounded by $C$; it is $\mathbb Q+i\mathbb Q$-linear. Its unique continuous extension to $H_x$, which exists by fibre completeness, is complex-linear because $\mathbb Q+i\mathbb Q$ is dense in $\mathbb C$. Thus it is a bounded operator $T_x\in\mathcal B(H_x)$ with $\|T_x\|\le C$ by [F23]. Set $T_x=0$ on the exceptional set and on zero fibres. For each fundamental vector $e_n$, the fixed finite-sequence code has an index $j(n)$ for the one-term combination $e_n$; hence $T_xe_n(x)=\|e_n(x)\|v_{j(n)}(x)$, with both sides zero where $e_n(x)=0$. By [F7], these are measurable sections and their pairings with every $e_m$ are measurable. Thus $(T_x)$ is weakly measurable by [F5], and $\|T_x\|\le C$ everywhere, so it is essentially bounded by [F12]. [F1, F5, F6, F7, F12, F13, F23, step 1.2, step 4.1, construct]

6.1 The action theorem induces $\widehat S=\int_X^\oplus T_x\,d\mu(x)$ and gives $\|\widehat S\|=\operatorname*{ess\,sup}_x\|T_x\|\le C$. For every $k,n$, the representatives agree outside a null set, so $\widehat S[\mathbf1_{E_k}u_n]=S[\mathbf1_{E_k}u_n]$. Both operators commute with $\mathcal D$ by step 1.1 and the assumption on $S$, so they agree on all bounded scalar localizations of these sections. [F2, F3, F4, F5, step 1.1, step 2.1, step 5.1]

6.2 If two weakly measurable essentially bounded fields induce the same operator, [F5] makes their actions agree on every $[\mathbf1_{E_k}u_n]$. The quotient definition supplies a Borel null set for each such equality; the countable union is null by [F11]. Off it the fields agree on every $u_n(x)$, hence on their dense span by step 1.2 and [F6], and then on $H_x$ by boundedness. On zero fibres both fields are the zero operator. This proves uniqueness up to a null set. [F2, F5, F6, F11, given, step 1.2, step 5.1, algebra]
7.1 These localizations have dense linear span in $\mathcal H$. Indeed, for $[\xi]\in\mathcal H$ and $\varepsilon>0$, [F10] lets us first restrict to some finite-measure $E_k$ and then to $F=E_k\cap\{\|\xi\|\le R\}$ with arbitrarily small $L^2$ error. On $F\cap\{\xi\ne0\}$, the normalized section is $b(\|\xi\|)\xi$, where the Borel reciprocal function $b$ was constructed in step 1.2; it is measurable by [F7, F17]. For any $\delta>0$, density of the $u_n(x)$ in the unit sphere, proved in step 1.2, gives a countable measurable cover by sets $\{x:\|b(\|\xi(x)\|)\xi(x)-u_n(x)\|<\delta\}$. Assign each point the least qualifying $n$; this is a measurable partition. Its first $N$ pieces exhaust all but a set on which the $L^2$ norm of $\xi$ tends to zero, by [F10]. For each retained partition set $P_n$, the section $\mathbf1_{P_n}\|\xi\|u_n$ equals $M_{\phi_n}[\mathbf1_{E_k}u_n]$ for $\phi_n=\mathbf1_{P_n}\|\xi\|$; this is a member of $L^\infty$ by [F15, F19], since $P_n\subseteq F\subseteq E_k$ has finite measure and $\|\xi\|\le R$ there. Thus the finite sum over the first $N$ pieces lies in the span on which $S$ and $\widehat S$ agree by steps 1.1 and 6.1. On retained pieces its pointwise error is below $\delta\|\xi\|$; on the discarded tail its error is $\|\xi\|$. Taking $\delta$, the tail, and the two initial truncation errors small proves density. Since $S$ and $\widehat S$ are bounded by [F5] and agree on this dense span, $S=\widehat S$. Thus every member of $\mathcal D'$ is decomposable. [F2, F5, F6, F7, F10, F15, F17, F19, step 1.1, step 1.2, step 6.1, construct]


8.1 If $X=\varnothing$ or every fibre is zero, then $\mathcal H=\{0\}$, $\mathcal D'=\{0\}$, and the zero field is the unique field. If every fibre is one-dimensional, each constructed fibre operator is scalar, while the localized density and uniqueness arguments remain valid. Finite-dimensional and varying-dimension fibres require no separate choice: the dense normalized sections and the pointwise inequality include zero and dependent fundamental vectors. Null exceptional sets are combined by a countable union, and the proof uses an arbitrary measure space rather than an interval, so there are no endpoint cases. Steps 1.1–7.1 prove both commutant inclusions, and step 6.2 proves uniqueness. AC is used for the countable representative choice in step 1.2 and to meet the commutant, Hilbert-space, and action supplier hypotheses [F3–F5]; the proof's indexing, partitions and extensions are explicit. [F3, F4, F5, F6, F11, F14, step 1.1, step 1.2, step 5.1, step 7.1, step 6.2, algebra] $\square$

## Source qualifications

Bruhat, Part III Chapter 10 §1.8, Theorem 2, printed pp. 100–101, gives the diagonal-commutant characterization and starts the converse by localizing fundamental vectors on compact sets and gluing their images. That argument uses a continuous/Lusin-field convention and does not provide the common countable rational-span estimate in the standard-Borel convention used here; the proof above supplies the finite-measure exhaustion, measurable gluing, pointwise bound, and density steps directly. Bekka–de la Harpe, Chapter 1 §1.H, Theorem 1.H.1, printed p. 65, states the general-field result and refers its proof to Dixmier; their Theorem 1.H.4, printed pp. 67–68, proves the converse for constant separable fibres after reducing a sigma-finite measure to an equivalent probability measure. Neither reduction is imported here.

## Boundary cases

- **Empty:** $X=\varnothing$ gives $\mathcal H=0$ and both sides consist of the zero operator, as checked in step 8.1.
- **Zero:** All zero fibres give the zero direct integral and unique zero field; mixed zero fibres are assigned zero in step 5.1 and are covered by uniqueness in step 6.2.
- **One:** Every bounded operator on a one-dimensional fibre is scalar, so the constructed fibre maps have the asserted pointwise form; step 8.1 checks that no density or uniqueness argument changes.
- **Degenerate:** Zero, dependent, and varying finite-dimensional fundamental vectors are included by the normalized family and dense-span extension in steps 1.2 and 5.1.
- **Endpoints:** Not applicable; the base is an arbitrary sigma-finite standard-Borel space with no interval parameter.
- **Nonempty choice:** AC selects the countably many local representatives in step 1.2 and meets the assumptions of [F3–F5]; all subsequent partitions and limits are explicit.
- **Iff forward:** Every decomposable operator commutes with all diagonal multipliers in step 1.1.
- **Iff reverse:** Every operator in the commutant is induced by the constructed field in steps 1.2–7.1.
