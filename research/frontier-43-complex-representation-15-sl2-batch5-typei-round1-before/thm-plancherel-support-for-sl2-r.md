---
id: thm-plancherel-support-for-sl2-r
kind: theorem
title: Plancherel support for SL2(R)
status: draft
origin: pipeline
pipeline_run: frontier-43-complex-representation-15
deps:
  - def-axiom-of-choice
  - def-complex-haar-lp-spaces-and-compactly-supported-functions
  - def-convolution-on-cc-and-l1-of-a-group
  - def-direct-integral-of-unitary-representations
  - def-factor-representation-and-primary-representation
  - def-fell-topology-on-the-unitary-dual
  - def-integrated-form-of-a-unitary-representation
  - def-involution-on-l1-of-a-group
  - def-iwasawa-and-minimal-parabolic-data-for-sl2-r
  - def-k-finite-and-smooth-vectors-for-sl2-r
  - def-left-and-right-regular-unitary-representations
  - def-left-haar-integral-and-left-haar-measure
  - def-limits-of-discrete-series-for-sl2-r
  - def-reduced-group-c-star-algebra
  - def-unitary-dual-of-a-locally-compact-group
  - def-weak-containment-of-unitary-representations
  - lem-complex-haar-l1-and-l2-are-complete-and-cc-dense
  - lem-fell-closure-is-characterized-by-weak-containment
  - lem-fell-continuity-in-the-parameter-of-the-unitary-principal-series
  - lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r
  - lem-l-one-of-a-second-countable-group-is-separable
  - thm-central-decomposition-into-factor-representations
  - thm-classification-of-the-irreducible-unitary-dual-of-sl2-r
  - thm-essential-uniqueness-of-type-i-irreducible-disintegration
  - thm-generic-irreducibility-and-the-exceptional-parameter-lattice
  - thm-iwasawa-decomposition-for-sl2-r
  - thm-irreducible-direct-integral-decomposition-for-type-i-groups
  - thm-regular-representations-are-unitary-and-strongly-continuous
  - thm-schurs-lemma-for-unitary-representations
  - thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series
  - thm-unitarity-of-the-sl2-complementary-series
  - thm-unitarity-of-the-sl2-unitary-principal-series
  - thm-uniqueness-of-left-haar-measure-up-to-scale
  - thm-weak-containment-is-equivalent-to-kernel-inclusion
dependency_level: 11
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
axiom_audit: "Assume AC. It supplies normalized Haar probability on K, the measurable-field/direct-integral choices and unitary identifications, and the countable selections needed to turn the L1-dense family into smooth test functions. The local Haar conversion, Casimir and Hardy calculations use no further choice."
verification:
  precheck: pass
proof_scope:
  local: "The native Haar/KAK scale conversion and native formal degrees; the local type-I and standard-Borel route through the classification supplier; the Plancherel Hilbert-Schmidt isometry and onto range; the carrier versus closed Fell support; the endpoint conclusions; and exclusion of spherical complementary and trivial classes. The RG-26 direct-integral steps remain conditional on their exact in-run suppliers until those suppliers are authored and reconciled."
  owner_authorized_original_citation:
    authority: research/frontier-43-complex-representation-15-conditional-glimm-citation-authorization.json
    fact: "Harish-Chandra's original full trace-inversion identity for SL2(R) on C_c^infinity test functions, including its source Haar normalization, principal-series density, and discrete-series degrees."
    source: "Harish-Chandra, Plancherel Formula for the 2 × 2 Real Unimodular Group, PNAS 38(4) (1952), 337–342, DOI 10.1073/pnas.38.4.337"
    original_full_text_read: false
    local_justification_supplied: false
sources:
  references:
    - title: "Harish-Chandra, Plancherel Formula for the 2 × 2 Real Unimodular Group, Proceedings of the National Academy of Sciences 38(4) (1952), 337–342"
      url: "https://doi.org/10.1073/pnas.38.4.337"
      locator: "Original C_c^infinity trace-inversion identity, source Haar normalization, principal density and discrete degrees; original full text unread; authorized exact cited fact only."
    - title: "Peter Hochs, Harish-Chandra's Plancherel formula for SL(2,R) (lecture notes)"
      url: "https://www.math.ru.nl/~hochs/HC_Plancherel_formula.pdf"
      locator: "§2, Theorem 2.1, printed p. 6 (source identity); §2.6, printed p. 11 (KAK Haar normalization used for scale comparison); §§2.2–2.9, pp. 7–19, read for source audit, not used as a local derivation of imported character and Weyl formulas."
    - title: "Jan Frahm, The Plancherel formula for real reductive groups I: Examples (AIM RTG lecture notes)"
      url: "https://prclare.people.wm.edu/AIM_RTNCG/LS_210823_Frahm.pdf"
      locator: "SL(2,R) slides, pp. 22–25: discrete-series definition and Plancherel expression; corroboration/source audit only, not treated as a local proof of imported character or orbital formulas."
---
## Statement

Assume the Axiom of Choice ([[def-axiom-of-choice]]). Let $G=\mathrm{SL}_2(\mathbb R)$, with $K,A,N$ and $a_t=\operatorname{diag}(e^{t/2},e^{-t/2})$ as in [[def-iwasawa-and-minimal-parabolic-data-for-sl2-r]]. Use the fixed left Haar measure from [[thm-iwasawa-decomposition-for-sl2-r]], namely
$$\int_G F(g)\,dg=\int_K\int_{\mathbb R}\int_{\mathbb R}F(k a_t n_x)e^t\,dx\,dt\,dk,$$
where $dk=d\theta/(2\pi)$. For $f\in C_c^\infty(G)$, let $\Theta_n(f)$ be the integrated trace of $D_n^+\oplus D_n^-$ and $\Theta_{\varepsilon,i\nu}(f)$ the integrated trace of the indicated unitary principal model. Harish-Chandra's original trace-inversion identity on $C_c^\infty(G)$, with its source Haar normalization, principal density and discrete degrees, is the single owner-authorized cited fact recorded in this item's `proof_scope`; the original text is unread. The local conversion to the run's Haar gives
$$4\pi f(e)=\sum_{n=2}^{\infty}(n-1)\Theta_n(f)+\frac14\int_{\mathbb R}\Theta_{0,i\nu}(f)\,\nu\tanh\!\left(\frac{\pi\nu}{2}\right)\,d\nu+\frac14\int_{\mathbb R}\Theta_{1,i\nu}(f)\,\nu\coth\!\left(\frac{\pi\nu}{2}\right)\,d\nu.$$
Thus each $D_n^\pm$ has formal degree $(n-1)/(4\pi)$; in the redundant $\nu\in\mathbb R$ parameter the continuous densities are $\nu\tanh(\pi\nu/2)/(16\pi)$ and $\nu\coth(\pi\nu/2)/(16\pi)$. The Plancherel measure is carried by the nonzero-parameter unitary principal classes and $D_n^\pm$ for $n\ge2$. Its closed support in $\widehat G$ also contains $I_{0,0}$ and both irreducible limits $D_1^\pm$, none of which carries an atom; $I_{1,0}=D_1^+\oplus D_1^-$ is reducible and is not a dual point. The spherical complementary classes $I_{0,\nu}$ for $0<\nu<1$ and the trivial class lie outside the closed support. The resulting Plancherel transform gives the regular representation's irreducible direct-integral decomposition over this support, using the unfinished batch-1 interfaces `thm-irreducible-direct-integral-decomposition-for-type-i-groups`, `thm-essential-uniqueness-of-type-i-irreducible-disintegration`, and `thm-central-decomposition-into-factor-representations`.

## Facts & Assumptions

**Given:** AC; the fixed Haar measure and KAK formula; the classified irreducible unitary dual; the compact-picture principal and limit models; and the named direct-integral interfaces below.

[F1] The authorized cited fact is Harish-Chandra's original trace-inversion identity on $C_c^\infty(G)$ for its source Haar measure, with the principal-series densities and discrete-series coefficients in the Statement. The original paper was not read; only this exact source fact is cited (authority record: `research/frontier-43-complex-representation-15-conditional-glimm-citation-authorization.json`).

[F2] The native left Haar measure is $e^t\,dk\,dt\,dx$ in KAN coordinates and has KAK radial measure $2\pi\sinh(\tau)\,dk_1\,d\tau\,dk_2$ for $a_\tau=\operatorname{diag}(e^{\tau/2},e^{-\tau/2})$ ([[thm-iwasawa-decomposition-for-sl2-r]], [[lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r]]). Any two left Haar measures on $G$ differ by one positive scalar ([[thm-uniqueness-of-left-haar-measure-up-to-scale]]).

[F3] The unitary dual consists exactly of the listed principal, discrete, limit, complementary and trivial classes; the dual is standard Borel and the group is type I ([[thm-classification-of-the-irreducible-unitary-dual-of-sl2-r]]). This same-pair supplier is a draft whose GCR/type-I proof is not yet accepted.

[F4] The measurable-field and factor-convention definitions are present as drafts ([[def-direct-integral-of-unitary-representations]], [[def-factor-representation-and-primary-representation]]). The central decomposition, irreducible refinement, and measure-class uniqueness required by steps 4.1–6.1 are intended to come from batch-1 manifest items `thm-central-decomposition-into-factor-representations`, `thm-irreducible-direct-integral-decomposition-for-type-i-groups`, and `thm-essential-uniqueness-of-type-i-irreducible-disintegration`; their item files are absent, so these direct-integral clauses remain open and are not established facts here.

[F5] The Casimir acts on $I_{\varepsilon,\nu}$ by $(\nu^2-1)/8$; the spherical complementary model is unitary for $0<|\nu|<1$, the imaginary-axis principal models are unitary, and $I_{1,0}$ splits into the two irreducible limits ([[def-k-finite-and-smooth-vectors-for-sl2-r]], [[thm-generic-irreducibility-and-the-exceptional-parameter-lattice]], [[thm-unitarity-of-the-sl2-complementary-series]], [[thm-unitarity-of-the-sl2-unitary-principal-series]], [[def-limits-of-discrete-series-for-sl2-r]], [[thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series]]). The in-run series and limit suppliers remain drafts.

[F6] The cited inversion identity uses the redundant real parameter $\nu\in\mathbb R$ for each principal family and records the trace of $D_n^+\oplus D_n^-$ at each discrete parameter; these are the parameter and atomic conventions used in the support calculation. [F1]

[F7] The principal-series coefficient family is Fell-continuous; at even parameter zero $[I_{0,0}]$ is a limit of nonzero spherical principal classes, and at odd parameter zero each $D_1^\pm$ is a Fell limit of positive-parameter odd principal classes ([[lem-fell-continuity-in-the-parameter-of-the-unitary-principal-series]], [[def-limits-of-discrete-series-for-sl2-r]], [[thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series]]). This same-pair continuity lemma remains a draft.

[F8] Fell closure of a set of irreducible classes is characterized by weak containment in their direct sum, and weak containment is equivalent to kernel inclusion for the associated full group $C^*$-representations ([[lem-fell-closure-is-characterized-by-weak-containment]], [[def-fell-topology-on-the-unitary-dual]], [[def-weak-containment-of-unitary-representations]], [[thm-weak-containment-is-equivalent-to-kernel-inclusion]]).

[F9] On $\mathrm{HS}(H_\pi)\cong H_\pi\otimes\overline{H_\pi}$, the joint left-right action of an irreducible unitary $\pi$ is irreducible: its commutant is scalar by Schur's lemma applied successively to the two tensor factors ([[thm-schurs-lemma-for-unitary-representations]]).

[F10] For a second-countable LCH group, $L^1(G)$ has a countable dense family represented by functions in $C_c(G)$ ([[lem-l-one-of-a-second-countable-group-is-separable]]). This batch-1 supplier is present as an authored draft and its decision/use remain open.

[F11] The concrete reduced group algebra is the norm closure of the integrated left regular representation, and weak containment is equivalent to factorization through that quotient ([[def-reduced-group-c-star-algebra]], [[thm-weak-containment-is-equivalent-to-kernel-inclusion]]).

[F12] On the unimodular group $G$, $f^*(g)=\overline{f(g^{-1})}$, $(f^**f)(e)=\|f\|_2^2$, and the integrated form satisfies $\pi(f^**f)=\pi(f)^*\pi(f)$ ([[def-involution-on-l1-of-a-group]], [[def-convolution-on-cc-and-l1-of-a-group]], [[def-integrated-form-of-a-unitary-representation]], [[thm-iwasawa-decomposition-for-sl2-r]]).

[F13] $C_c(G)$ is dense in $L^1(G)$ and $L^2(G)$; on the smooth Iwasawa charts, compactly supported functions can be approximated in both norms by compactly supported smooth functions ([[def-complex-haar-lp-spaces-and-compactly-supported-functions]], [[lem-complex-haar-l1-and-l2-are-complete-and-cc-dense]], [[thm-iwasawa-decomposition-for-sl2-r]]).

[A1] AC supplies normalized Haar probability on $K$, the measurable-field/direct-integral choices in [F4], and countable choices of smooth $L^1$ approximants in step 6.1 from the dense family in [F10]. The local Haar, Casimir, trace scaling and Hardy calculations use no further choice ([[def-axiom-of-choice]]).

## Open obligations

The proof below gives the local calculations and a conditional direct-integral argument. Do not treat it as a completed proof or accept the item until these exact inputs and uses are reconciled:

- `thm-classification-of-the-irreducible-unitary-dual-of-sl2-r` supplies the full class list and the standard type-I Borel dual used in Facts [F3]–[F4] and steps 2.2, 2.3, and 5.1; its current proof remains draft through the RG-26 GCR/Borel interfaces.
- `def-direct-integral-of-unitary-representations` and `def-factor-representation-and-primary-representation` supply the measurable-field and factor conventions in Fact [F4]/step 2.2 and are drafts. `thm-central-decomposition-into-factor-representations`, `thm-irreducible-direct-integral-decomposition-for-type-i-groups`, and `thm-essential-uniqueness-of-type-i-irreducible-disintegration` supply the central field, irreducible refinement, and measure-class uniqueness in steps 2.2–4.1; all three are batch-1 manifest rows with no item files yet.
- `lem-l-one-of-a-second-countable-group-is-separable` supplies the countable $L^1$-dense test family in step 6.1; its item file is now present as a draft, but its supplier decision and this exact use remain open. The local chart mollification turns that family into a countable $C_c^\infty$-dense-in-$L^1$ family using countable choice under AC.
- `thm-iwasawa-decomposition-for-sl2-r` supplies the native Haar normalization stated above and used in Facts [F2], [F12], [F13], and step 3.1; it is a batch-3 draft. `lem-kak-integration-formula-for-k-bi-invariant-functions-on-sl2-r` supplies the KAK density in Facts [F2] and step 3.1 and is also a draft.
- `lem-fell-continuity-in-the-parameter-of-the-unitary-principal-series`, `thm-unitarity-of-the-sl2-unitary-principal-series`, `thm-unitarity-of-the-sl2-complementary-series`, `thm-generic-irreducibility-and-the-exceptional-parameter-lattice`, `def-limits-of-discrete-series-for-sl2-r`, and `thm-unitarity-and-irreducibility-of-the-limits-of-discrete-series` supply the class and endpoint claims in Facts [F5]–[F7] and steps 1.3, 2.1, and 5.1; these in-run item decisions remain open. The principal parameter is kept redundant in the trace identity, so the equivalence item is not used directly here.

## Proof

**Proof technique:** derive the source-scale trace and norm identities, convert the measure to the run's Haar, then prove the range and compute the closed support.

**Given:** The Statement, Facts [F1]–[F13], and AC.

1.1 Write $dg_H$ for the Haar measure used in the cited Harish-Chandra identity and $\Theta^H$ for its integrated traces. The authorized fact [F1] is
$$2\pi f(e)=\sum_{n=2}^{\infty}(n-1)\Theta^H_n(f)+\frac14\int_{\mathbb R}\Theta^H_{0,i\nu}(f)\nu\tanh\!\left(\frac{\pi\nu}{2}\right)d\nu+\frac14\int_{\mathbb R}\Theta^H_{1,i\nu}(f)\nu\coth\!\left(\frac{\pi\nu}{2}\right)d\nu$$
for $f\in C_c^\infty(G)$. This identity, including its source normalization and constants, is cited without a claimed reading or local derivation of the original paper. [F1]

1.2 Let $f\in C_c^\infty(G)$ and $h=f^**f$ for the source Haar measure. Unimodularity and [F12] give $h(e)=\|f\|_{L^2(dg_H)}^2$ and $\pi(h)=\pi(f)^*\pi(f)$. Applying [F1] to $h$ yields
$$\|f\|_{L^2(dg_H)}^2=\sum_{n=2}^{\infty}\frac{n-1}{2\pi}\|\pi_n^H(f)\|_{\rm HS}^2+\frac{1}{8\pi}\int_{\mathbb R}\|\pi_{0,i\nu}^H(f)\|_{\rm HS}^2\nu\tanh\!\left(\frac{\pi\nu}{2}\right)d\nu+\frac{1}{8\pi}\int_{\mathbb R}\|\pi_{1,i\nu}^H(f)\|_{\rm HS}^2\nu\coth\!\left(\frac{\pi\nu}{2}\right)d\nu,$$
where $\pi_n^H=D_n^+\oplus D_n^-$ in the source normalization. Each trace is an extended nonnegative trace and is finite almost everywhere because the left side is finite. This is the norm identity on the explicitly parameterized model family; no onto claim is made here. [F1, F12, step 1.1, algebra]

1.3 Fix either the trivial representation or one spherical complementary representation $\pi=I_{0,\nu}$ with $0<\nu<1$, and let $v$ be its normalized $K$-fixed vector. The positive witness below may depend on this fixed $\pi$. Choose a nonnegative smooth approximate identity $\psi$ with integral $1$ and support sufficiently close to $e$ that $\|\pi(\psi)v-v\|<1/2$; strong continuity gives such a choice. Put $\phi=e_K*\psi*e_K$, where $e_K$ is normalized Haar probability on $K$. The formula $\phi(g)=\int_{K\times K}\psi(k^{-1}g\ell^{-1})\,dk\,d\ell$ shows that $\phi\in C_c^\infty(G)$; $\lambda(\phi)=P_K\lambda(\psi)P_K$ has range in the left $K$-fixed subspace, and $\|\pi(\phi)v-v\|=\|P_K\pi(\psi)v-v\|<1/2$, so $\pi(\phi)v\ne0$. The infinitesimal Möbius fields for $J,D,S$ are respectively $(1+x^2-y^2)\partial_x+2xy\partial_y$, $2x\partial_x+2y\partial_y$, and $(1-x^2+y^2)\partial_x-2xy\partial_y$. At $i\in\mathbb H$, these fields are $0,2\partial_y,2\partial_x$; inserting $W=-iJ$ and $E_\pm=(D\pm iS)/2$ into $\Omega=W^2/8-W/4+E_+E_-/2$ fixes the second-order coefficient of the invariant operator on $K\backslash G\cong\mathbb H$. There is no invariant first-order term because $K$ has no fixed cotangent vector, and the zero-order term vanishes since both operators annihilate constants; hence $-d\lambda(\Omega)=\Delta/2$, where $\Delta=-y^2(\partial_x^2+\partial_y^2)$ on $L^2(\mathbb H,dx\,dy/y^2)$. For $u\in C_c^\infty(\mathbb H)$, expansion and integration by parts give
$$\int_{\mathbb H}\left|\partial_yu-\frac{u}{2y}\right|^2dx\,dy=\int_{\mathbb H}|\partial_yu|^2dx\,dy-\frac14\int_{\mathbb H}|u|^2\frac{dx\,dy}{y^2}\ge0,$$
so $\Delta\ge\frac14$ and $-\Omega-\frac18=\frac12(\Delta-\frac14)\ge0$ on this subspace. Interpret $D=\phi^*(-\Omega-\tfrac18)\phi$ as the convolution-differential product: applying the invariant differential operator to the smooth compactly supported kernel keeps it in $C_c^\infty(G)$. On smooth vectors, $\lambda(D)=\lambda(\phi)^*(-d\lambda(\Omega)-\tfrac18)\lambda(\phi)$ and $\pi(D)=\pi(\phi)^*(-d\pi(\Omega)-\tfrac18)\pi(\phi)$. For $\xi\in C_c^\infty(G)$, $\lambda(\phi)\xi$ is smooth, compactly supported and left $K$-fixed, so the displayed estimate gives $\langle\lambda(D)\xi,\xi\rangle\ge0$; boundedness and density extend positivity to $L^2(G)$. The regular representation identifies $C_r^*(G)$ with its concrete image, so $D$ is positive in $C_r^*(G)$. On $I_{0,\nu}$, [F5] gives $\pi(D)=-\frac{\nu^2}{8}\pi(\phi)^*\pi(\phi)$, a nonzero negative operator; on the trivial representation it is $-\frac18\pi(\phi)^*\pi(\phi)$, also nonzero negative. If either representation factored through $C_r^*(G)$, it would send this positive element to a positive operator, a contradiction. Thus neither is weakly contained in the regular representation. [F2, F5, F8, F11, F12, F13, algebra, A1]

2.1 Dividing step 1.1 by $2\pi$ gives source-scale mass $(n-1)/(2\pi)$ on each $D_n^\pm$ and continuous densities $\nu\tanh(\pi\nu/2)/(8\pi)$ and $\nu\coth(\pi\nu/2)/(8\pi)$ in the redundant real parameter. Both densities are positive for $\nu\ne0$; the even one tends to $0$ and the odd one to $1/(4\pi^2)$ at zero. Thus these absolutely continuous parameter measures have no atom at zero, while every discrete mass is positive. [F1, F6, step 1.1, algebra]

3.1 In the source normalization, $a_r^H=\operatorname{diag}(e^r,e^{-r})=a_{2r}$, and Hochs's KAK Haar density is $2\pi\sinh(2r)\,dk_1\,dr\,dk_2$. Setting $\tau=2r$ gives $dg_H=\pi\sinh(\tau)\,dk_1\,d\tau\,dk_2$. By [F2] the native Haar has density $2\pi\sinh(\tau)$, so its uniqueness clause gives $dg=2dg_H$ and $\Theta(f)=2\Theta^H(f)$. Multiplying step 1.1 by $2$ gives the native formula in the Statement; the native Plancherel measure is half the source-scale measure in step 2.1 because the integrated traces double. Thus the native mass is $(n-1)/(4\pi)$ for each $D_n^\pm$, and the redundant-parameter densities are $\nu\tanh(\pi\nu/2)/(16\pi)$ and $\nu\coth(\pi\nu/2)/(16\pi)$. [F1, F2, step 1.1, step 2.1, algebra]

4.1 Conditional on [F3]–[F4], the classified families form a standard Borel dual field and the central/irreducible direct-integral suppliers identify the explicit native Plancherel measure with a measurable Hilbert-Schmidt field over $\widehat G$. The source norm identity in step 1.2 scales to the native identity because $dg=2dg_H$, $\mu=\frac12\mu_H$, and $\pi(f)=2\pi_H(f)$. Thus $f\mapsto(\pi(f))_\pi$ is an isometry from $L^2(G,dg)$ into $\int_{\widehat G}^{\oplus}\mathrm{HS}(H_\pi)\,d\mu(\pi)$, with left and right regular translations acting by left and right multiplication by $\pi(g)$. The field and measure-class identification remain conditional on the exact B1 theorem interfaces listed above. [F3, F4, step 1.2, step 3.1, A1]

5.1 Every nonzero principal parameter has positive density in step 3.1, and each discrete class $D_n^\pm$ has positive atomic mass. By [F7], every Fell neighborhood of $[I_{\varepsilon,i\nu_0}]$ for $\nu_0\ne0$ contains a parameter interval, so has positive measure. The even family likewise approaches $[I_{0,0}]$. For either odd limit, [F7] puts it in the closure of positive-parameter odd classes; a neighborhood contains such an interior class and, by Fell continuity there, an interval of positive density. Hence $I_{0,0}$ and both $D_1^\pm$ are in the closed support but have no atom. By [F3], $I_{1,0}$ is reducible and is not a point of $\widehat G$. [F3, F6, F7, step 3.1, step 4.1]

5.2 Let $Q$ be the orthogonal projection onto the range of the isometry in step 4.1. The intertwining identities make $Q$ commute with both regular $G$ actions. Conditional on the ideal-support projections and central decomposition in [F4], their countable family generates the diagonal dual algebra, so $Q$ is decomposable as $Q=\int^\oplus Q_\pi\,d\mu(\pi)$. On almost every irreducible fibre, $Q_\pi$ commutes with the joint $G\times G$ action on $\mathrm{HS}(H_\pi)\cong H_\pi\otimes\overline{H_\pi}$; [F9] makes this action irreducible, hence $Q_\pi$ is either $0$ or $I$. This step remains conditional on the unfinished B1 central-field supplier. [F4, F9, step 4.1]

6.1 If $Q_\pi=0$ on a set $E$ of positive measure, then $\pi(f_j)=0$ there almost everywhere for each member $f_j$ of a countable $L^1$-dense family from [F10]. The group is the second-countable three-dimensional manifold of [F2]; in a countable relatively compact chart cover its Haar density is smooth and positive. Local mollification replaces that family by a countable $C_c^\infty$ family $u_j$ still dense in $L^1$. Removing the countable union of exceptional null sets leaves a point $\pi\in E$ for which $\pi(u_j)=0$ for every $j$. Contractivity gives $\|\pi(f)-\pi(u_j)\|\le\|f-u_j\|_1$, so $\pi(f)=0$ for all $f\in L^1(G)$. A normalized smooth bump $\eta$ supported sufficiently close to $e$ has $\pi(\eta)v\ne0$ for a fixed nonzero $v$ by strong continuity, contradicting this vanishing. Thus $Q_\pi=I$ almost everywhere and the isometry is onto. The B1 standard-Borel and measurable-field inputs remain open. [F2, F4, F10, step 5.2, algebra, A1]

7.1 The carrier in step 3.1 and the open-neighborhood calculation in step 5.1 give exactly the stated principal/discrete carrier and its additional endpoint limit points. Step 1.3 excludes the remaining spherical complementary and trivial classes from the closed support by a positive reduced-algebra witness, not by zero measure. Step 6.1 is the regular representation's irreducible direct integral over this support, conditional on the specified type-I suppliers. Thus the local Haar, constant, endpoint and positive-kernel calculations are complete, while acceptance remains held on the open B1 and in-run supplier claims. [F3, F4, F7, F8, step 1.3, step 5.1, step 6.1] ∎
