# R2 local and global class field theory scaffold

**Date:** 2026-10-23. **Status:** planning only. This is a proposed content map, not an item authoring pass, readiness claim, or publication action. The machine-readable projection is [`r2-sources/proposed-inventories.json`](r2-sources/proposed-inventories.json); the A/B pair rows are [`r2-sources/pair-fragment.json`](r2-sources/pair-fragment.json). The per-slice source log, local full texts, hashes, and access gates are in [`r2-sources/README.md`](r2-sources/README.md).

## Scope and boundaries

This slice supplies the finite local-field and reciprocity spine through class formations, number-field and finite-constant-function-field CFT, Galois cohomology, Brauer invariants, local/global duality, and explicit reciprocity. It is planning-only. Every item listed is proposed, unpublished, and has `items: []` in the pair fragment; the exact provisional IDs and direct item dependencies are recorded in the inventory JSON.

The chain stops at interfaces needed by the algebraic-geometry, representation-theory, analytic-number-theory, and Iwasawa slices. R3 owns Jacobians, Picard schemes, Lang's theorem, and the abelian-variety Kummer specialization. R4 owns Weil–Deligne representations, Swan conductors, p-adic Hodge theory, and Galois deformations. R5 owns Iwasawa theory and Selmer/Euler systems. AN owns zeta and Hecke-L analytic suppliers and all natural/effective prime-counting estimates. The R2 Chebotarev page proves only the base Dirichlet-density result from its exact analytic inputs.

No result below is called a current 2026 frontier theorem merely because a classical source states it. Established assertions without a locally closed proof/source chain are marked as proof or acquisition gates; they are not mislabeled as open problems. Higher local CFT and higher-dimensional p-primary duality are bounded as source-gated branches, not asserted solved or open.

## Reuse of published suppliers

Reuse the published number-field place/completion/Frobenius sequence: `thm-number-field-places-classification`, `def-completion-of-a-number-field-at-a-prime`, `lem-number-field-completions-as-local-polynomial-factors`, `def-decomposition-group-of-a-prime`, `def-inertia-group-of-a-prime`, `thm-decomposition-inertia-exact-sequence`, `def-arithmetic-frobenius-coset`, `thm-unramified-frobenius-element-exists-uniquely`, `thm-frobenius-elements-above-a-prime-are-conjugate`, `thm-frobenius-order-is-residue-degree`, `cor-frobenius-compatibility-in-finite-towers`, and `thm-frobenius-cycle-type-and-prime-splitting`. The new global-field place and completion definitions generalize their number-field carrier; they must not redefine any of these statements.

Reuse `thm-product-formula-for-number-fields`, `thm-finiteness-of-the-number-field-class-group`, `thm-dirichlet-unit-theorem`, `thm-s-unit-theorem`, `thm-different-exponent-in-tame-and-wild-ramification`, and the published quadratic rational-completion items `def-hilbert-symbol-over-a-rational-completion`, `thm-hilbert-symbol-is-symmetric-bilinear-and-nondegenerate`, and `thm-hilbert-reciprocity-over-the-rationals`. The finite-field divisor layer reuses `def-divisor-smooth-proper-curve`, `def-degree-divisor-proper-curve`, `thm-principal-divisor-degree-zero-proper-curve`, and `thm-full-riemann-roch-divisor`. Generic finite-group cohomology is reused verbatim from `def-group-cohomology-as-a-derived-functor`, `thm-the-bar-cochain-complex-computes-derived-group-cohomology`, `cor-normalized-cochains-compute-group-cohomology`, `thm-shapiro-lemma-for-group-cohomology`, and `def-restriction-and-corestriction-on-group-cohomology`. Reuse `def-fppf-topology-on-schemes` and `def-fppf-sheaf-and-sheafification`; R3's `fppf-kummer-sequences-and-torsors` owns the abelian-variety Kummer sequence and weak Mordell–Weil specialization.

Algorithms for maximal-order computation, ideal arithmetic, unit computation, and class-group computation belong to R1's algorithm pair. Their correctness and termination proofs remain attached to the relevant algorithm contracts. A computational example or implementation is not a proof of local reciprocity, the product formula, CFT existence, a density theorem, or an algebraic identity.

## Ordered A/B pair programme

The supplier-first order is:

1. `local-fields-valuations-and-completions` / `local-fields-valuations-and-completions-examples`.
2. `local-extensions-ramification-and-different` / `local-extensions-ramification-and-different-examples`.
3. `local-galois-groups-and-continuous-cohomology` / `local-galois-groups-and-continuous-cohomology-examples`.
4. `brauer-groups-and-hasse-invariants` / `brauer-groups-and-hasse-invariants-examples`.
5. `class-formations-and-tate-cohomology` / `class-formations-and-tate-cohomology-examples`.
6. `local-class-field-theory-and-lubin-tate` / `local-class-field-theory-and-lubin-tate-examples`.
7. `hilbert-symbols-and-norm-residue-reciprocity` / `hilbert-symbols-and-norm-residue-reciprocity-examples`.
8. `global-class-field-theory-and-artin-reciprocity` / `global-class-field-theory-and-artin-reciprocity-examples`.
9. `global-function-field-class-field-theory` / `global-function-field-class-field-theory-examples`.
10. `poitou-tate-duality-and-local-global-obstructions` / `poitou-tate-duality-and-local-global-obstructions-examples`.
11. `flat-cohomology-and-finite-flat-duality` / `flat-cohomology-and-finite-flat-duality-examples`.
12. `explicit-global-and-higher-reciprocity` / `explicit-global-and-higher-reciprocity-examples`.
13. `chebotarev-density-and-frobenius-equidistribution` / `chebotarev-density-and-frobenius-equidistribution-examples`.
14. `higher-local-fields-and-class-field-frontiers` / `higher-local-fields-and-class-field-frontiers-examples`.

The shared `global-fields-and-function-fields` and `adeles-ideles-and-approximation` suppliers precede this list and are authored in the combined plan by the builder. The function-field class-formation proof additionally depends on R3's `algebraic-jacobians-and-canonical-polarizations` A page through its finite-field Lang item. The class-formation definition is projected on the Brauer A page as an upstream abstract interface: placing that definition on the class-formation page while the Brauer local-invariant theorem consumed it would make a page-level cycle.

The shared adeles A page also carries `thm-global-field-adeles-and-ideles-locally-compact`, obtained from the restricted-product topology and compact-open local valuation rings, and `thm-global-field-idelic-diagonal-discrete-and-closed`, which proves the multiplicative diagonal \(F^\times\to\mathbb A_F^\times\) is discrete/closed using the product formula and then gives the Hausdorff idele-class quotient topology. Separately, its additive theorem chain is `thm-additive-adele-quotient-discrete-cocompact-for-q-and-fq-t`, `thm-adelic-base-change-for-finite-separable-global-field-extensions`, and `thm-global-field-additive-adele-quotient-discrete-cocompact`. The last states that the additive diagonal \(F\to\mathbb A_F^+\) is discrete and cocompact for every global field. It is a core global-arithmetic supplier for arguments requiring the compact additive quotient; it is not subsumed by multiplicative idelic discreteness.

The shared `global-fields-and-function-fields` page defines `def-global-field` as either a finite extension of \(\mathbb Q\), or a one-variable function field over its exact finite constant field, using the curve/function-field equivalence. `def-place-of-a-global-field` includes archimedean places only in the number-field branch and uses closed points/normalized discrete valuations in the function-field branch; `def-completion-of-a-global-field-at-a-place` is the corresponding completion. Reuse the published `thm-product-formula-for-number-fields`; `thm-product-formula-for-function-fields` uses \(|f|_v=q^{-\deg(v)\operatorname{ord}_v(f)}\) and degree zero of principal divisors. `thm-weak-approximation-for-global-fields` has the finite-place/archimedean simultaneous approximation contract: Milne ANT VII Thm. 7.20 proves the number-field case; the finite-constant function-field proof uses RR to choose a function with prescribed finite jets/poles. The unhomed draft `thm-number-field-finite-weak-approximation-in-zf` is not a supplier and is not used. `thm-finiteness-of-degree-zero-divisor-class-group-over-finite-field` is for degree-zero divisor classes only; its proof fixes an effective divisor of degree at least \(2g+1\), applies RR to represent each class by an effective divisor in a fixed degree range, and uses finiteness of closed points of bounded degree.

The shared `adeles-ideles-and-approximation` page defines the restricted products \(\mathbb A_F=\prod'_v F_v\) relative to valuation rings and \(\mathbb A_F^\times=\prod'_vF_v^\times\) relative to unit groups; archimedean factors are finite products. `def-idele-class-group-of-a-global-field` is the quotient by the closed multiplicative diagonal, with its Hausdorff quotient topology. `def-global-field-modulus`, `def-ray-class-group`, `thm-ray-class-exact-sequence`, `def-ray-class-character`, and `thm-ray-class-group-finite` use the number-field convention: a modulus is a finite ideal with selected real places (complex places excluded), and the exact sequence is the image of finite residue/sign units modulo global units into the ray group, followed by the ordinary class group and then zero. Finite order of ray characters follows from finiteness; the analytic ray-prime density is AN-owned and does not enter this shared page.

For the additive theorem, Stein §18.3 Lemma 18.3.3/Cor. 18.3.4 and MIT 18.785 Lecture 25 Proposition 25.10/Cor. 25.11 give the finite-separable base-change step: \(\mathbb A_L^+\cong(\mathbb A_K^+)^{[L:K]}\), with the principal copy \(L^+\) identified with \((K^+)^{[L:K]}\). Stein Thm. 18.3.5 and MIT Thm. 25.12 prove the \(\mathbb Q\) base case: for discreteness, \(U=(-1,1)\times\prod_p\mathbb Z_p\) meets \(\mathbb Q\) only at zero; for cocompactness the compact \(W=[-1/2,1/2]\times\prod_p\mathbb Z_p\) represents every additive adele class by truncating each of the finitely many nonintegral p-adic components and then choosing an integer at infinity. MIT Thm. 25.12 also gives a complete \(\mathbb F_q(t)\) base proof: the finite-place construction works for either rational subfield because \(\mathbb Z\) and \(\mathbb F_q[t]\) are PIDs, and the infinity step chooses an integer or polynomial, respectively. The proposed item will expand the function-field step explicitly: \(W=\prod_v O_v\) is compact by local compactness and Tychonoff; the open set \(U=\{a:|a_\infty|_\infty<1,\ |a_P|_P\le1\text{ for every finite place }P\}\) meets \(\mathbb F_q(t)\) only at zero, since a rational function integral at every finite place is a polynomial and a polynomial with \(|f|_\infty<1\) is zero. For each of the finitely many finite poles, truncate the Laurent expansion in the uniformizer \(P\) to a rational principal part \(r_P=f_P/P^{m_P}\), \(f_P\in\mathbb F_q[t]\); then \(a_P-r_P\in O_P\) and each \(r_P\) is integral at every other finite place. Subtract \(\sum_P r_P\), then subtract the polynomial part of the remaining Laurent expansion at infinity. The remainder lies in \(W\), so \(W\) surjects onto the quotient. Finally every number field is finite separable over \(\mathbb Q\), and every finite-constant function field is finite separable over \(\mathbb F_q(t)\) after choosing a separating transcendence parameter (the shared theorem consumes R3's perfect-field separating-basis supplier). This closes the all-global-field theorem. Stein's own displayed base proof is Q-only; MIT supplies both rational-subfield bases, and the explicit principal-part exposition is the planned proof presentation.

Number-field global CFT uses Milne CFT Ch. VII's algebraic route. Its existence proof is upstream of analytic ray-class density; it has no dependency on Chebotarev. The function-field existence route likewise uses norm-index inequalities and a proved nonsplitting-place lemma, never the full Chebotarev theorem. The R2 Chebotarev theorem then depends on global CFT and AN's `thm-ray-class-primes-dirichlet-density`; AN natural/effective counting depends on the R2 Frobenius/prime-counting interface. This is the intended acyclic analytic/algebraic order.

## A-page contracts and readiness

The exact row-level IDs and `deps` arrays are authoritative in the adjacent JSON projection. The contracts below state the intended hypotheses and what the later proof must establish.

### 1. Local fields, valuations, and completions

`def-local-field-valuation-ring-uniformizer-and-residue-field` is restricted to complete discretely valued fields with finite residue field: mixed characteristic (finite extensions of some \(\mathbb Q_p\)) or equal characteristic (finite extensions of \(\mathbb F_q((t))\)). It fixes the normalized valuation with value group \(\mathbb Z\), valuation ring, maximal ideal, uniformizer, residue field, and residue cardinality. `thm-local-valuation-ring-compact-open` states the valuation ring, maximal-ideal powers, unit group, and principal-unit neighborhoods \(1+\mathfrak m^n\) are compact open. `thm-finite-extension-local-degree-equals-ramification-index-times-residue-degree` states \([L:K]=e(L/K)f(L/K)\) for finite extensions in this defectless finite-residue setting. `thm-krasner-lemma-for-complete-nonarchimedean-fields` says that if \(\alpha\) is separable algebraic over \(K\), \(\beta\) is algebraic over \(K\), and \(|\beta-\alpha|<\min_{\sigma(\alpha)\ne\alpha}|\alpha-\sigma(\alpha)|\), then \(K(\alpha)\subseteq K(\beta)\). `thm-finite-unramified-local-extensions-classified-by-residue-extensions` is only for finite separable unramified extensions and fixes the residue-field Frobenius convention.

`alg-finite-precision-hensel-factor-lifting-over-zp` has finite input only: a prime \(p\), integer \(N\ge1\), monic \(f\in(\mathbb Z/p^N)[X]\), and coprime monic factorization \(\bar f=g_0h_0\) over \(\mathbb F_p\), with fixed degrees \(m,n\). Lift coefficients canonically, then for each \(r=1,\dots,N-1\) compute the current error \(e_r=(f-G_rH_r)/p^r\bmod p\), solve the unique bounded-degree equation \(uh_0+g_0v=e_r\), and update \(G_{r+1}=G_r+p^ru\), \(H_{r+1}=H_r+p^rv\). `thm-finite-precision-hensel-factor-lifting-correctness` proves the correction map is an isomorphism by coprimality and dimension count, each step improves the product modulo \(p^{r+1}\), and the procedure terminates after exactly \(N-1\) finite steps with monic factors of the prescribed degrees and reductions. Repeated or non-coprime residue factors are outside the contract; no arbitrary \(\mathbb Q_p\) oracle is used. `ex-hensel-factor-lifting-x2-minus-6-mod-125` checks the case \(X^2-6\bmod125=(X-16)(X+16)\bmod125\).

Examples also identify a number-field completion at a finite place, the Laurent-series completion of a finite-constant function field, and an unramified extension obtained from a residue extension.

**Proof route:** Milne ANT VII, “Absolute Values; Local Fields,” supplies the local field facts and completion structure. Prop. 7.46 and Cor. 7.47, printed p. 126, prove compactness of the valuation ring when and only when the residue field is finite, and compactness of maximal-ideal powers, principal-unit neighborhoods, and units. The proof of Krasner's lemma and its applications is read in the same chapter, printed pp. 131–133. For finite-precision factor lifting, Milne ANT VII Thm. 7.33 and its full proof, printed pp. 121–123, give the correction equation; Remark 7.37 explicitly identifies the iteration as a polynomial-factorization algorithm. The proposed bounded procedure makes the finite-precision input and its exact stopping point explicit. The Laurent-series example additionally uses the function-field place completion contract. Archimedean completions remain on the existing absolute-values/completions page.

### 2. Local extensions, ramification, and the different

`def-lower-ramification-groups-of-a-local-galois-extension` uses the normalized valuation of \(L\) and \(G_i=\{\sigma:v_L(\sigma x-x)\ge i+1\text{ for every }x\in O_L\}\). `thm-local-ramification-groups-normal-and-terminate` states normality and eventual triviality; `thm-local-inertia-fixed-field-is-maximal-unramified-extension` identifies the finite-extension inertia fixed field with the maximal unramified subextension. `def-herbrand-function-and-upper-ramification-numbering` defines the piecewise-linear Herbrand function \(\varphi(u)=\int_0^u [G_0:G_t]^{-1}dt\), its inverse, and \(G^v=G_{\psi(v)}\); `thm-upper-ramification-numbering-compatible-with-quotients` states Herbrand's quotient compatibility for finite Galois quotients. `def-different-ideal-of-a-finite-local-extension` uses the trace-dual lattice \(O_L^\vee=\mathfrak D_{L/K}^{-1}\). `thm-local-different-exponent-as-ramification-group-sum` states \(v_L(\mathfrak D_{L/K})=\sum_{i\ge0}(|G_i|-1)\) for a finite Galois local extension; the tame exponent \(e-1\) is its special case. The B page computes tame and wild filtrations but reuses the published number-field different-exponent item where its hypotheses match.

**Proof route:** Milne ANT VII §§“Unramified extensions,” “Totally ramified extensions,” and “Ramification groups”; Neukirch II §10 (Herbrand theorem and quotient compatibility), III §2 (different/discriminant), and V §6 (Hasse–Arf, used later). Conrad's complete different-ideal note is an independent supplier for the trace-dual and valuation formulas. The exact editions/read extents are in the source README.

### 3. Local Galois groups and continuous cohomology

`def-absolute-galois-group-of-a-field` is \(G_F=\operatorname{Gal}(F_s/F)\) with its profinite inverse-limit topology; `def-absolute-galois-group-of-a-global-field` and `def-absolute-galois-group-of-a-local-field` specialize this definition. `def-local-inertia-subgroup-of-absolute-galois-group` is the inverse limit of finite inertia groups, and `def-local-wild-inertia-subgroup-of-absolute-galois-group` is the maximal pro-residue-characteristic subgroup of inertia. `def-continuous-cohomology-of-a-profinite-group-with-discrete-module` is derived functor cohomology computed by continuous cochains; it is group-general, not local-field-only. `thm-continuous-profinite-cohomology-as-direct-limit-of-finite-quotients` uses continuous action and expresses cohomology as a filtered colimit of finite-quotient cohomology. The B page checks the procyclic unramified quotient and finite cyclic examples.

**Reuse:** Do not redefine finite-group cohomology, Shapiro, restriction/corestriction, crossed homomorphisms, or extensions classified by \(H^2\). Milne CFT II §§1–4 and its homological appendix supply the profinite passage. The global and local absolute Galois group definitions also support the finite-field Brauer argument.

### 4. Brauer groups and Hasse invariants

`def-class-formation` is the abstract fundamental-class/invariant-map input to the local invariant theorem. `def-brauer-group-as-galois-cohomology` identifies \(\operatorname{Br}(F)\) with \(H^2(G_F,F_s^\times)\). `def-local-invariant-map-of-the-brauer-group` fixes the normalization. `thm-local-brauer-invariant-for-finite-residue-local-field` states \(\operatorname{inv}_K:\operatorname{Br}(K)\xrightarrow\sim\mathbb Q/\mathbb Z\) for a nonarchimedean local field with finite residue field. `thm-archimedean-brauer-groups-and-invariant-maps` supplies \(\operatorname{Br}(\mathbb C)=0\) and \(\operatorname{Br}(\mathbb R)\cong\frac12\mathbb Z/\mathbb Z\), with the normalized invariant. `thm-brauer-group-finite-field-zero` states \(\operatorname{Br}(\mathbb F_q)=0\); its proof can be internal: continuous cohomology reduces a class to a finite cyclic quotient, \(H^2(C_n,\mathbb F_{q^n}^\times)=\mathbb F_q^\times/N(\mathbb F_{q^n}^\times)=0\), since the finite-field norm is surjective. It must not depend on global Brauer–Hasse or CFT.

`thm-tsen-brauer-group-of-function-field-over-algebraically-closed-field-zero` is for a one-variable function field over an algebraically closed constant field, not a global field. The buildable proof route is the \(C_1\) dimension argument from Riemann–Roch; a central division algebra of degree \(n>1\) has reduced norm of degree \(n\) in \(n^2>n\) variables, contradicting \(C_1\). `thm-global-brauer-hasse-noether-exact-sequence-number-field` states the exact sequence \(0\to\operatorname{Br}(K)\to\bigoplus_v\operatorname{Br}(K_v)\xrightarrow{\sum\operatorname{inv}_v}\mathbb Q/\mathbb Z\to0\) for a number field, including archimedean terms. `thm-global-function-field-brauer-hasse-sequence` is the analogous sequence for a smooth proper curve over a finite field with full constants; its proof uses Tsen, local invariants, the product formula, and R3's Lang vanishing for the Jacobian. B examples check local cyclic algebras and the global sum relation.

**Proof route and limits:** Milne CFT IV §§1–5 and ADT Appendix A.1/A.7; ADT A.7 cites Tsen rather than proving it. The local Tsen proof is a planned RR proof obligation. The function-field exact sequence has a full ADT A.7 proof after the cited Tsen and finite-field Lang inputs. This page directly requires the R3 Jacobian/Lang page; the dependency remains acyclic.

### 5. Class formations and Tate cohomology

`thm-tate-nakayama-for-class-formations` gives the Tate–Nakayama isomorphisms for finite modules and subgroups of a class formation. `thm-local-class-formation-for-finite-residue-local-field` uses the local fundamental class and invariant; `thm-number-field-global-class-formation` uses the number-field idèle class group and global Brauer sequence. `thm-function-field-global-class-formation-finite-constants` is for a one-variable function field with exact finite constant field and uses ADT A.7–A.9 plus \(H^1(\mathbb F_q,J)=0\) from R3's Lang theorem. B examples distinguish local fundamental classes from the function-field degree map.

**Page edge:** This pair consumes Brauer, local Galois/cohomology, ideles, and R3 Jacobians; the generic definition is carried on the Brauer page to avoid a reciprocal page edge. Do not silently assume a function-field rational place.

### 6. Local CFT and Lubin–Tate

`def-local-artin-reciprocity-map` fixes the arithmetic-Frobenius convention and defines the inverse-limit local Artin map. `thm-local-artin-reciprocity-and-norm-index` states for every finite abelian extension \(L/K\) of a nonarchimedean finite-residue local field that the induced map \(K^\times/N_{L/K}L^\times\to\operatorname{Gal}(L/K)\) is an isomorphism and the norm-subgroup/extension correspondence reverses inclusions; a subgroup containing the norm group of a finite Galois extension is itself a norm group. `thm-local-artin-unramified-frobenius-normalization` sends a uniformizer to arithmetic Frobenius. `thm-local-unit-herbrand-quotient-one` is restricted to a finite cyclic local extension and its unit module; its proof uses \(1\to O_L^\times\to L^\times\xrightarrow{v_L}\mathbb Z\to0\), Hilbert 90, the local norm index, and multiplicativity of Herbrand quotients to obtain \(h(O_L^\times)=1\). `thm-archimedean-local-reciprocity` records \(\mathbb R^\times/\mathbb R_{>0}\cong\operatorname{Gal}(\mathbb C/\mathbb R)\) and the trivial complex case.

`def-lubin-tate-formal-group` specifies a formal \(O_K\)-module with \([\pi](X)\equiv\pi X\pmod{X^2}\) and \([\pi](X)\equiv X^q\pmod\pi\). `thm-lubin-tate-explicit-local-reciprocity` proves the torsion extension and unit-action quotient directly, without assuming the existence theorem it will supply. `thm-local-class-field-existence-characteristic-zero` says every open finite-index subgroup of \(K^\times\) is a norm group for a finite abelian extension when \(K/\mathbb Q_p\) is finite. `def-local-artin-schreier-pairing` defines the exponent-p local symbol and `thm-artin-schreier-differential-residue-formula` proves its residue formula, nondegeneracy, and norm criterion. `thm-local-class-field-existence-equal-characteristic-finite-residue` states the corresponding order-reversing classification for every complete discretely valued field with finite residue field and characteristic \(p\): open finite-index subgroups \(N\subset F^\times\) correspond to norm subgroups of finite abelian extensions. In characteristic \(p\), openness is part of the hypothesis. `rem-local-cft-equal-characteristic-scope` records this finite-residue boundary. `thm-hasse-arftheorem-for-finite-abelian-local-extensions` states integrality of upper jumps for finite abelian local extensions.

**Proof route:** The finite-residue local cohomological framework uses Milne CFT II–III and ADT Appendix A.3, with generic continuous cohomology and Tate–Nakayama supplied in pairs 3 and 5. The characteristic-zero existence result is supplied independently by Milne CFT I §§1–4 and its explicit Lubin–Tate theorem. For equal characteristic, the complete proof is Fesenko–Vostokov IV §6 Thm. 6.2 (printed pp. 155–156), after the local reciprocity map and norm-subgroup lattice result in IV §§2–4 and the Artin–Schreier/differential-residue pairings in IV.5.4–5.7; all of Ch. I, III §§1–2, and IV §§1–6 were read. The proof is local and has no global CFT, density, or Chebotarev premise. ADT A.6 and Yoon §2 Thm. 3 remain statement/citation evidence, not proof suppliers. Neukirch V §6 and Fesenko III §4 supply complete Hasse–Arf proofs.

### 7. Hilbert symbols and norm-residue reciprocity

`def-local-hilbert-symbol-over-field-containing-roots-of-unity` is for a local field \(K\supset\mu_n\), with \(n\) prime to \(\operatorname{char}K\), and fixes \((a,b)_{K,n}=\operatorname{rec}_K(a)(b^{1/n})/b^{1/n}\) under the chosen arithmetic convention. `thm-local-hilbert-symbol-cup-product-norm-criterion` identifies it with the Kummer cup product followed by the local invariant and states its norm-kernel criterion. `thm-local-hilbert-symbol-nondegenerate-pairing` states nondegeneracy on \(K^\times/K^{\times n}\) under these hypotheses.

`thm-vostokov-explicit-residue-formula-for-local-hilbert-symbol-odd-p` is for a finite extension \(F/\mathbb Q_p\) containing a primitive \(p^n\)-th root \(\zeta\), uniformizer \(\pi\), and inertia field \(F_0=F\cap\mathbb Q_p^{\mathrm{ur}}\). Choose \(z(X)\in1+XO_0[[X]]\) with \(z(\pi)=\zeta\), put \(s=z^{p^n}-1\), use coefficient Frobenius \(\Delta\), \(\ell(f)=p^{-1}\log(f^p/f^\Delta)\), and \(V=1/2+1/s\). Given \(a,b\in F^\times\), choose Laurent-series lifts \(a(X),b(X)\in O_0((X))^\times\) evaluating to them. For odd \(p\), the theorem states

\[
(a,b)_{p^n}=\zeta^{\operatorname{Tr}_{F_0/\mathbb Q_p}\operatorname{res}_X(\Phi_{a,b}V)},\qquad
\Phi_{a,b}=\frac{a'}a\ell(b)-\ell(a)\frac{(b^\Delta)'}{p b^\Delta}.
\]
\]

For \(p=2\), Fesenko–Vostokov VII.4 states the corrected formula \(\zeta^{\operatorname{Tr}\operatorname{res}[(\Phi+\Phi^{(1)}+\Phi^{(2)})rV]}\), with corrections defined in VII.2.5 and VI.3.4, but the needed pairing properties and uniformizer invariance are assigned as Exercises VII.2.2–4. Keep it under `rem-vostokov-p2-explicit-hilbert-formula-proof-gate` until those exercises are proved from the full text or a complete alternate source. For odd \(p\), the theorem proof establishes independence of the power-series lifts and uniformizer. The explicit theorem is mixed-characteristic; it does not assert formulas for equal-characteristic or arbitrary d-local fields.

**Proof source:** Fesenko–Vostokov VI §§1–5 supplies the formal-series maps, primary elements, and Shafarevich basis; VII §§1–5 proves the residue formula, explicit Kummer class field pairing, and applications. Milne CFT III–IV supplies the cohomological Kummer-symbol interpretation. The exact headings/read ranges and limits are in the source ledger. The theorem is for local number fields, not arbitrary complete discretely valued fields.

### 8. Number-field global CFT and Artin reciprocity

`def-global-artin-map-as-product-of-local-reciprocity-maps` is the continuous idele map using finite local components and the archimedean convention. `thm-number-field-first-norm-index-inequality` states \([I_K:K^\times N_{L/K}I_L]\le [L:K]\) for a finite cyclic extension. `thm-number-field-infinitely-many-nonsplit-primes` states infinitely many nonsplitting primes for a nontrivial finite solvable extension. `thm-number-field-second-norm-index-inequality` states for finite Galois \(L/K\) that the idele norm index is finite and divides \([L:K]\), with the associated \(H^1(G,C_L)=0\) and finite \(H^2\) index bound in the proof contract. `thm-global-artin-reciprocity-and-norm-index` then states that for a number field \(K\) and finite abelian extension \(L/K\), the induced map \(C_K/N_{L/K}C_L\to\operatorname{Gal}(L/K)\) is an isomorphism, with \(C_K=\mathbb A_K^\times/K^\times\). `thm-global-class-field-existence-number-field` classifies every open finite-index subgroup of \(C_K\) as a norm group. `thm-number-field-ray-class-field-artin-isomorphism` specializes existence/reciprocity to a number-field modulus consisting of a finite ideal and selected real places. `thm-conductor-discriminant-formula-for-abelian-extensions` states \(\mathfrak d_{L/K}=\prod_{\chi\in\widehat{\operatorname{Gal}(L/K)}}\mathfrak f(\chi)\) for a finite abelian extension; conductors are the ray/local Artin conductors, and the discriminant is the relative discriminant ideal. The proof source is Neukirch VII §11 Thm. 11.9, not merely Milne's statement. B items check cyclotomic ray fields and the local-factor decomposition of the global map.

**Frozen proof route:** Milne CFT VII §§2–9, especially §4 (first inequality and nonsplitting places), §6 (algebraic proof of the second inequality), §8 (reciprocity completion), §9 (existence). Do not route through Milne VI analytic density or Chebotarev. Neukirch VII §§10–11 gives the full Artin-conductor and conductor–discriminant argument; it uses local Herbrand/Hasse–Arf, the different/discriminant formula, and Brauer induction. The existing `thm-brauer-induction` is reused. The exact planned CFT requirements include the Brauer-induction page.

### 9. Function-field global CFT

All results in this pair assume \(F=\mathbb F_q(C)\) with exact constant field \(\mathbb F_q\), a smooth proper geometrically integral curve, and nonarchimedean places from closed points. `thm-picard-degree-one-line-bundle-over-finite-field` first obtains a rational point of the Picard-degree-one torsor by R3 Lang, then uses \(\operatorname{Br}(\mathbb F_q)=0\) to descend it to an actual line bundle; a rational section gives a degree-one virtual divisor. `thm-closed-place-degrees-have-gcd-one-for-full-constant-function-field` follows because that divisor is an integral combination of closed places. `thm-function-field-idele-class-degree-exact-sequence` states \(0\to C_F^0\to C_F\xrightarrow{\deg}\mathbb Z\to0\), with compact degree-zero kernel; compactness uses compact local units, Tychonoff for their product, and the finite degree-zero divisor class group from the shared global-fields page.

`thm-global-function-field-artin-reciprocity-and-norm-index` is the idelic Artin isomorphism for finite abelian extensions over the full constant field. `thm-function-field-first-norm-index-inequality` and `thm-function-field-second-norm-index-inequality` are separately stated norm-index bounds with finite separable extensions and the exact degree component. `thm-global-function-field-infinitely-many-nonsplit-primes` is only asserted for nontrivial solvable finite extensions; its intended proof uses the first inequality and weak approximation, not Chebotarev. `thm-global-function-field-class-field-existence` classifies open finite-index subgroups of \(C_F\). The proof-gate remark records the remaining global nonsplitting and norm-index proof obligations; the finite-residue local equal-characteristic norm-subgroup theorem is now a sourced prerequisite. Examples distinguish degree-zero divisor classes from the full degree \(\mathbb Z\) quotient.

**Current closure:** The local equal-characteristic CFT supplier is proof-closed by Fesenko–Vostokov IV.6.2. ADT Appendix A.7–A.13 proves the global Brauer sequence, class formation, and global reciprocity for finite constants (after Tsen and Lang inputs); it expressly omits the global existence theorem. Yoon §3 is a proof map, not a complete global proof supplier. Its §3.2 rational-place splitting is invalid as a general assumption, and §3.3.1's nonsplitting-place result cites Neukirch without proof. `rem-function-field-class-field-existence-proof-gate` is limited to the remaining global nonsplitting-place, first/second norm-index, and open-subgroup existence proof obligations. The Picard/Lang/Brauer chain repairs the degree-one-place assumption without asserting a rational point. No route uses full Chebotarev, so the CFT/prime-density DAG stays acyclic.

### 10. Poitou–Tate and local–global obstruction groups

`def-finite-galois-module-and-cartier-dual` uses a finite continuous \(G_K\)-module \(M\) and \(M^D=\operatorname{Hom}(M,\overline K^\times)\) with the Tate twist convention. In positive characteristic the étale/Galois module branch is restricted to \(|M|\) prime to \(\operatorname{char}K\); p-primary finite flat cases belong to pair 11. `def-restricted-product-of-local-galois-cohomology-groups` defines unramified subgroups outside a finite set containing archimedean places, ramified places, and primes dividing \(|M|\). `thm-poitou-tate-exact-sequence-for-finite-modules` supplies the finite-module Poitou–Tate sequence with Tate-modified archimedean cohomology and restricted products \(P_S^r(K,M)\):

\[
0\to H^0(G_S,M)\to P_S^0(K,M)\to H^2(G_S,M^D)^\vee\to H^1(G_S,M)\to P_S^1(K,M)\to H^1(G_S,M^D)^\vee\to H^2(G_S,M)\to P_S^2(K,M)\to H^0(G_S,M^D)^\vee\to0.
\]

Here \(S\) contains all places ramified in \(M\) and those dividing \(|M|\), \(|M|\) is invertible outside \(S\), and \(\vee\) is the Pontryagin dual; the exact ADT I.4.10 statement includes its local conditions. The duality is not a p-primary flat-duality assertion.

**Source:** ADT I.4 Thm. 4.10 and the complete preceding restricted-product/duality development (printed pp. 48–65). State the finite-module and invertibility hypotheses in the item; do not expand to arbitrary constructible or flat coefficients. B examples calculate the local restriction maps and the resulting obstruction kernel.

### 11. Flat cohomology and finite-flat duality

`def-finite-flat-group-scheme-and-cartier-dual` is for finite flat commutative group schemes over the relevant base and their Cartier duals. `def-flat-cohomology-with-compact-support-for-global-curves-and-integer-rings` fixes compact support and local restriction maps. `thm-artin-verdier-duality-for-finite-etale-sheaves-on-global-curves` is restricted to ADT's one-dimensional arithmetic curves (open subschemes of \(\operatorname{Spec}O_K\)) and smooth proper curves over finite fields, for constructible torsion sheaves and the corresponding dualizing complex. `thm-local-flat-duality-for-finite-flat-group-schemes` uses a Henselian DVR with finite residue field and the mixed-characteristic finite-flat hypotheses of ADT III.1.3; `cor-local-flat-h1-exact-annihilator` is exactly its integral \(H^1\) annihilator corollary. `thm-global-flat-duality-number-field-finite-sheaves` is ADT III.3.1 for finite sheaves killed by \(n\), étale away from the primes dividing \(n\), and finite flat at those primes. `thm-local-flat-duality-equal-characteristic-finite-residue` is ADT III.7.1. `thm-global-flat-duality-finite-constant-field-curves` is ADT III.8.2. `rem-flat-etale-p-primary-distinction` records that étale and flat cohomology coincide away from p-primary torsion, not at p. The companion examples keep fppf Kummer sequences for abelian varieties delegated to R3.

**Sources/limits:** ADT II §§0–3 and III §§0,1,3,6,7,8 were read in full; III §§2,4,5,9–11 were not. The A page requires R4's constructible étale sheaf interface as well as existing fppf topology. The stated theorem scopes must follow the named ADT theorems; do not generalize them to perfect residue fields, higher-dimensional schemes, or all finite flat group schemes without additional proof sources.

### 12. Explicit global and higher reciprocity

`thm-hilbert-reciprocity-product-formula-for-number-fields` states the product over all places of a number field is 1 for global Kummer/Hilbert symbols. `thm-hasse-norm-theorem-for-cyclic-extensions` is for finite cyclic extensions only. `thm-grunwald-wang-theorem` includes the exact exceptional 2-primary case and its local character-realization hypothesis. `thm-global-power-reciprocity-law` assumes the relevant roots of unity and disjoint supports of the residue-symbol data; its equality is Milne CFT VIII §5 Thm. 5.11. `thm-function-field-product-formula-for-local-norm-residue-symbols` uses the full-constant finite-field function-field hypotheses and local reciprocity at every closed place. B examples specialize to rational quadratic reciprocity and a finite-constant power-residue example.

**Proof source:** Milne CFT VIII §§1–5 (read full); local invariant product and Artin reciprocity supply the global product formulas. Fesenko–Vostokov VII.4 supplies the odd-p local explicit Hilbert formula in pair 7; its p=2 formula remains statement-only because the key properties are exercises. Any explicit formula whose proof Milne attributes to Cassels–Fröhlich remains excluded unless that proof is separately read.

### 13. Chebotarev Dirichlet density interface

`def-chebotarev-prime-ideal-counting-function` fixes the absolute-norm convention: for finite Galois \(L/F\), group \(G\), and conjugacy class \(C\), \(\pi_C(x)=\#\{\mathfrak p\subset O_F:N_{F/\mathbb Q}\mathfrak p\le x,\;\mathfrak p\text{ unramified in }L,\;\operatorname{Frob}_{\mathfrak p}\in C\}\). Prime ideals of the base field are counted (so residue degree is already encoded by absolute norm); ramified primes are excluded. `thm-chebotarev-dirichlet-density` states the Dirichlet density of the associated unramified prime-ideal set is \(|C|/|G|\) for finite Galois extensions of global number fields, with conjugacy-stable sets obtained by summing classes.

**Proof/owner boundary:** Milne CFT VIII §7 is read in full and proves this Dirichlet-density theorem using global CFT and the AN ray-class-prime Dirichlet-density input. The theorem's direct item edge is `thm-ray-class-primes-dirichlet-density` on AN's `ray-class-hecke-l-functions-and-density` page, whose upstream page is `dedekind-zeta-and-split-prime-density`. There is no reverse edge from AN analytics into global CFT. The natural-density limit and effective bounds for \(\pi_C(x)\) are separate AN items. R1's full Lagarias–Odlyzko read supplies the GRH effective bound; Thorner–Zaman supplies the unconditional effective asymptotic with a possible exceptional zero. Neither formula is an R2 Chebotarev theorem.

### 14. Higher local fields and research frontiers

`def-milnor-k-group-of-a-field` defines \(K_n^M(F)=(F^\times)^{\otimes n}/\langle\ldots,a,1-a,\ldots\rangle\) and the graded Milnor ring. `def-milnor-boundary-map-for-a-discrete-valuation` defines the residue boundary for a discrete valuation, characterized by vanishing on unit symbols and \(\partial_v\{u_1,\ldots,u_{n-1},\pi\}=\{\bar u_1,\ldots,\bar u_{n-1}\}\). `thm-bass-tate-residue-sequence-for-rational-function-fields` gives the split exact sequence \(0\to K_n^M(F)\to K_n^M(F(X))\xrightarrow{\oplus\partial_v}\bigoplus_{v\ne v_\infty}K_{n-1}^M(F(v))\to0\). `thm-bass-tate-kato-norm-transfer-for-milnor-k-groups` constructs transfers for finite field extensions and proves transitivity, the projection formula, and the K_1 field-norm specialization.

For a one-dimensional local field \(F\) with finite residue field and torsion subgroup \(\mu(F)\subset F^\times\) of order \(m\), `thm-local-field-k2-moore-sequence-and-divisible-kernel` states \(0\to mK_2^M(F)\to K_2^M(F)\xrightarrow{(\cdot,\cdot)_m}\mu_m\to0\), with a splitting and divisible kernel. It does not claim unique divisibility of \(mK_2\); Fesenko–Vostokov IX.4.5 quotes Tate for that stronger statement without proof. `thm-higher-milnor-k-groups-of-finite-residue-local-fields-uniquely-divisible` states that \(K_n^M(F)\) is uncountable and uniquely divisible for \(n\ge3\), with the complete proof in IX.4.11. These are one-dimensional local-field Milnor K results, not higher-local CFT.

`def-d-local-field` is the recursive valuation structure of a d-dimensional local field with finite final residue field. `rem-higher-local-duality-proof-source-gate` and `rem-higher-local-class-field-theory-proof-gate` state the bounded source obligations; `rem-etale-fppf-duality-scope-boundary` links to the finite-flat results in pair 11. The B page has an iterated Laurent-series example and an explicit note that its coefficient example is not a theorem. Fesenko–Vostokov VII.5.5 displays a higher-dimensional symbol formula but does not prove its higher reciprocity identification; IX.4.13 only sketches higher local CFT and cites Parshin, Kato, and [FK]. Milne CFT VIII §5's classical global higher power reciprocity laws are already covered in pair 12 and do not establish general higher local class field theory.

The remaining source/proof obligation is to acquire and read a full primary or comprehensive source for the precise d-local norm-residue pairing, coefficient range, final-residue hypotheses, topology, compatibility maps, and local duality; separate p-primary cases from prime-to-p. These are proof/source gates, not open problems. No 2026 frontier statement is claimed.

## B-page example contracts

The B pages contain checks and examples only; they do not replace their A-page proofs.

| B page | Planned example IDs and contract |
|---|---|
| `local-fields-valuations-and-completions-examples` | `ex-number-field-place-completion-at-p` computes a finite-place completion; `ex-function-field-place-completion-fq-series` identifies a smooth curve's local completion with a Laurent-series field over its finite residue field; `ex-unramified-local-extension-from-residue-field` lifts a finite residue extension to its unramified local extension; `ex-hensel-factor-lifting-x2-minus-6-mod-125` illustrates the finite algorithm. |
| `local-extensions-ramification-and-different-examples` | `ex-tame-local-extension-ramification-filtration` computes lower groups/different in a tame extension and reuses the published different formula; `ex-wild-local-extension-ramification-filtration` exhibits a nontrivial wild filtration and the Herbrand reindexing. |
| `local-galois-groups-and-continuous-cohomology-examples` | `ex-unramified-absolute-galois-group-finite-residue-field` identifies the unramified quotient with \(\widehat{\mathbb Z}\) generated by arithmetic Frobenius; `ex-continuous-cohomology-finite-cyclic-quotient` evaluates a discrete module factoring through a finite cyclic quotient. |
| `brauer-groups-and-hasse-invariants-examples` | `ex-local-brauer-invariant-cyclic-algebra` computes an invariant of a local cyclic algebra; `ex-number-field-brauer-invariants-sum-to-zero` checks the global number-field relation for a finite set of local classes; `ex-function-field-brauer-invariant-sequence` checks the finite-constant curve sequence. |
| `class-formations-and-tate-cohomology-examples` | `ex-local-class-formation-fundamental-class` illustrates the local invariant/fundamental class; `ex-global-function-field-class-formation-degree-map` separates the finite degree-zero kernel from the \(\mathbb Z\) degree quotient. |
| `local-class-field-theory-and-lubin-tate-examples` | `ex-local-reciprocity-on-units-and-uniformizers` checks that units act trivially on an unramified extension and a uniformizer acts by arithmetic Frobenius; `ex-lubin-tate-formal-multiplicative-group` specializes the formal group to cyclotomic torsion. |
| `hilbert-symbols-and-norm-residue-reciprocity-examples` | `ex-hilbert-symbol-over-a-rational-completion-reused` imports the exact published rational \(\mathbb Q_v\) formulas; `ex-local-norm-test-by-hilbert-symbol` tests membership in a local norm subgroup; `ex-artin-schreier-differential-residue-pairing` evaluates the characteristic-p local pairing. |
| `global-class-field-theory-and-artin-reciprocity-examples` | `ex-cyclotomic-ray-class-field-over-q` identifies a cyclotomic field as a ray-class field; `ex-global-artin-map-local-components` assembles a global idele's local reciprocity factors. |
| `global-function-field-class-field-theory-examples` | `ex-degree-map-on-function-field-idele-classes` checks the function-field degree exact sequence; `ex-artin-schreier-global-reciprocity` tests the characteristic-p reciprocity map on an Artin–Schreier extension, using the sourced finite-residue local existence theorem. |
| `poitou-tate-duality-and-local-global-obstructions-examples` | `ex-local-global-obstruction-in-a-finite-galois-module` computes a finite-module local-global kernel; `ex-poitou-tate-mu-n-local-global-sequence` specializes the sequence to a roots-of-unity module within its invertibility hypotheses. |
| `flat-cohomology-and-finite-flat-duality-examples` | `ex-finite-flat-mu-p-versus-etale-z-p` distinguishes \(\mu_p\) from the étale constant \(\mathbb Z/p\) in characteristic p; `ex-global-flat-duality-on-a-finite-field-curve` specializes the finite-sheaf curve duality while preserving its flat hypotheses. |
| `explicit-global-and-higher-reciprocity-examples` | `ex-hilbert-reciprocity-product-over-all-places` checks the global Hilbert-symbol product; `ex-grunwald-wang-special-case` isolates the 2-primary exception and its required local data. |
| `chebotarev-density-and-frobenius-equidistribution-examples` | `ex-chebotarev-cyclic-extension-dirichlet-density` checks class density in an abelian extension; `ex-chebotarev-cycle-type-from-polynomial-factorization` translates an unramified factorization pattern to Frobenius cycle type. |
| `higher-local-fields-and-class-field-frontiers-examples` | `ex-two-local-field-finite-constant-residue` constructs an iterated Laurent-series 2-local field; `rem-example-is-not-a-duality-claim` explicitly prevents an illustrative coefficient choice from being read as a higher-duality theorem. |

## Source coverage ledger: read heading disposition

The following maps every heading in the claimed read ranges to a content destination or an explicit reuse/defer/exclude decision. “Read” means full text over that heading/range, not a search hit or theorem statement. Printed pagination is used except where the source log says otherwise.

### Milne, *Algebraic Number Theory* v3.08

| Heading in read range | Disposition |
|---|---|
| Ch. VII: Absolute Values; Local Fields; Absolute Values; Nonarchimedean absolute values; Equivalent absolute values; Properties of discrete valuations | Include local field, valuation ring, uniformizer, and normalized-valuation conventions in pair 1. |
| Complete list of absolute values for Q; primes of a number field; weak approximation theorem | Reuse number-field absolute-value/place and approximation suppliers; global-field weak approximation extends only with the separate shared proof. |
| Completions; completions in the nonarchimedean case; Newton's lemma; extensions of nonarchimedean absolute values; Newton polygon; locally compact fields | Include completion/local field contracts and extension examples in pairs 1–2. Ch. VII Thm. 7.33 and Remark 7.37 supply the finite-precision coprime factor-lifting algorithm and its proof route; Newton polygons remain context, not part of this bounded algorithm contract. |
| Unramified extensions; totally ramified extensions; ramification groups; Krasner's lemma and applications | Include unramified and ramification filtration contracts in pairs 1–2; Krasner examples only. |
| Ch. VIII: Extending absolute values, including Prop. 8.2 tensor decomposition of completions; product formula | Reuse Prop. 8.2 only for nonarchimedean finite places. Its proof imports an extension-of-absolute-values result broader than VII Thm. 7.38; VII Remark 7.39 says that general proof is omitted. The shared archimedean R/C factor decomposition has a separate direct proof. Reuse the number-field product formula and add the separate divisor-normalized function-field product formula. |
| Decomposition groups; Frobenius element; examples | Reuse the published decomposition/inertia/Frobenius exact sequence and its arithmetic convention; examples populate pairs 1 and 13. |
| Computing Galois groups (hard way/easy way) | Exclude other Galois-group algorithms from R2. The finite-precision coprime Hensel factor-lifting algorithm is a separate R2 item with a finite input contract, exact stopping rule, and correctness theorem. |
| Applications of Chebotarev density theorem | Reuse only after the R2 Dirichlet-density theorem; no proof inferred from this application heading. |
| Finiteness theorems | Reuse existing number-field class group/unit theorems; finite-field degree-zero divisor group is a distinct RR theorem on the shared global-fields page. |
| Ch. VII/VIII exercises and solutions not needed by the proposed contracts | Exclude as suppliers; no result is inferred from an exercise merely because it appears in the read chapter. |

### Milne, *Class Field Theory* v4.03

| Heading in read range | Disposition |
|---|---|
| Introduction: statements of main local/global theorems and proof strategy | Use as a scope map only; individual proof destinations below. |
| I.1 Statements of the Main Theorems | Include local reciprocity/existence contracts; mark characteristic-zero versus finite-residue equal-characteristic range. |
| I.2 Lubin–Tate Formal Group Laws | Include the formal-group definition and torsion construction in pair 6. |
| I.3 Construction of the Extension K^π/K | Include the char-zero explicit reciprocity proof; no dependency on a preassumed existence theorem. |
| I.4 Local Kronecker–Weber Theorem | Include char-zero LT classification and ramification context; reuse upper numbering/Hasse–Arf from the Neukirch proof. |
| I.A Infinite Galois Theory and Inverse Limits | Reuse for the generic absolute Galois group and local/global profinite limits in pair 3. |
| II.1 Cohomology | Reuse generic finite-group cohomology; no redefinition. |
| II.2 Homology | Exclude except where a named duality proof explicitly uses it; no new homology contract. |
| II.3 Tate Groups | Include Tate groups and Tate–Nakayama for class formations in pair 5. |
| II.4 Cohomology of Profinite Groups | Include continuous cochains and finite-quotient colimit in pair 3. |
| II.A Some Homological Algebra | Reuse published derived-functor/bar complex items; prove only the profinite comparison. |
| III.1 Cohomology of Unramified Extensions | Include local class formation and unramified Artin normalization in pairs 5–6. |
| III.2 Cohomology of Ramified Extensions | Include the finite-local-extension norm/index inputs, with actual hypotheses. |
| III.3 Local Artin Map | Include local reciprocity map and norm-index isomorphism in pair 6. |
| III.4 Hilbert Symbol | Include the Kummer cup-product and norm criterion in pair 7. |
| III.5 Existence Theorem | Include the characteristic-zero result from this source; the finite-residue equal-characteristic theorem is closed separately by Fesenko–Vostokov IV §6 Thm. 6.2. |
| IV.1 Simple Algebras; Semisimple Modules | Reuse semisimple algebra foundations; no replacement of existing algebra items. |
| IV.2 Definition of the Brauer Group | Include the Brauer class interface in pair 4. |
| IV.3 The Brauer Group and Cohomology | Include Br=H² and cyclic algebra construction. |
| IV.4 The Brauer Groups of Special Fields | Include local and global invariant maps, plus archimedean cases. |
| IV.5 Complements | Include only cyclic algebras and local/global invariant consequences used by the Hilbert and Brauer pairs. |
| V.1 Ray Class Groups | Reuse the shared finite number-field ray-class group, exact sequence, and finite-order characters. |
| V.2 L-series | Route analytic statements/proofs to AN; not a number-field CFT prerequisite in the chosen Milne VII proof route. |
| V.3 Main Theorems in Terms of Ideals | Include ray-class field Artin isomorphism; reuse conductor statement, with proof from Neukirch VII §11. |
| V.4 Ideles | Reuse the shared adele/idele topology and idèle-class quotient definitions. |
| V.5 Main Theorems in Terms of Ideles | Include global reciprocity and norm-index isomorphism in pair 8. |
| VI.1 Dirichlet Series and Euler Products | AN analytic supplier; exclude from R2 CFT's proof DAG. |
| VI.2 Convergence Results | AN supplier. Milne points to Lang VI §3 Thm. 3 for the lattice-count details; Lang was not available, but the independent full proof in Neukirch VII §5 Thm. 5.9 and Cor. 5.10–5.11 was read by R1 and closes the Dedekind-zeta pole/residue proof obligation. |
| VI.3 Density of the Prime Ideals Splitting in an Extension | AN split-prime Dirichlet-density supplier; do not use it to prove CFT existence. |
| VI.4 Density of the Prime Ideals in an Arithmetic Progression | AN ray-class density supplier; it depends one-way on global CFT and is downstream of the Milne VII proof route. |
| VII.1 Outline | Proof map; no new item. |
| VII.2 Cohomology of the Ideles; VII.3 Cohomology of the Units | Include the required global class-formation proof inputs in pair 5/8. |
| VII.4 Cohomology of the Idele Classes I: the First Inequality | Include in the number-field CFT proof chain; its use of weak approximation to produce nonsplit places is explicit. |
| VII.5 Cohomology of the Idele Classes II: The Second Inequality; VII.6 Algebraic Proof of the Second Inequality | Include as separate proof obligations in the global existence proof; VII.6 is the selected analytic-independent route. |
| VII.7 Application to the Brauer Group | Reuse pair 4's Brauer invariant sequence. |
| VII.8 Completion of the Proof of the Reciprocity Law | Include in pair 8; dependencies are class formation and inequalities, not Ch. VI density. |
| VII.9 Existence Theorem | Include number-field norm-subgroup existence in pair 8. |
| VII.A Kummer Theory | Reuse Kummer theory and the Hilbert-symbol interface; no generic Kummer redefinition. |
| VIII.1 local n-th powers/global n-th powers | Include the local-global power obstruction interface where needed in pair 12. |
| VIII.2 Grunwald–Wang | Include theorem with its precise special 2-primary exception in pair 12. |
| VIII.3 local-global norms/quadratic forms | Include cyclic Hasse norm result and reuse existing rational Hasse–Minkowski items. |
| VIII.4 Fundamental Exact Sequence and Fundamental Class | Include fundamental-class compatibility in pair 5/8. |
| VIII.5 Higher Reciprocity Laws | Include global power-residue product formula and Hilbert reciprocity in pair 12; do not infer higher local CFT. |
| VIII.7 Density Theorems | Include Dirichlet-density Chebotarev only in pair 13; natural/effective prime counts belong to AN. |
| VIII.8 Function Fields; Geometric Class Field Theory | Explicitly omitted by Milne; use ADT Appendix A. The separate global open-subgroup existence proof gates remain in pair 9; the local equal-characteristic axiom is supplied by Fesenko–Vostokov IV.6.2. |
| VIII.6 quadratic forms; VIII.9 cohomology of number fields; VIII.10 more L-series | Not in the claimed read range; defer to existing quadratic forms, pair 10/ADT I.4, and AN respectively. |

### Milne, *Arithmetic Duality Theorems*, 2e

| Heading in claimed read range | Disposition |
|---|---|
| I.1 Duality relative to a Class Formation | Include class formation/Tate duality foundations and the class formation definition. |
| I.2 Local Fields | Include local Galois cohomology, local invariant, and finite-module duality inputs. |
| I.4 Global Fields | Include the Poitou–Tate restricted-product sequence, specifically Thm. I.4.10 with its invertibility and archimedean conventions. |
| I.8 Abelian Class Field Theory | Reuse reciprocity/class-formation consequences; global existence still has a separate proof chain. |
| II.0 Preliminaries; II.1 Local results; II.2 Global preliminary calculations; II.3 Global results: main theorem | Include Artin–Verdier duality only for the arithmetic curves and finite-field curves covered by these sections; no statement about un-read complements. |
| III.0 Preliminaries; III.1 Mixed-characteristic local finite group schemes; III.3 Number-field global case | Include exact local/global finite-flat duality statements and hypotheses. |
| III.6 Local fields of characteristic p; III.7 Equal-characteristic finite residue; III.8 Curves over finite fields, finite sheaves | Include these exact finite-flat duality cases in pair 11. |
| I.3 Local abelian varieties; I.5 global Euler characteristics; I.6 global abelian varieties; I.7 BSD; I.9 other applications | Not read in R2; R3 owns abelian-variety and Selmer applications. |
| II.4–7; III.2,4–5,9–11; III appendices | Not read; defer any result requiring them. Do not expand the flat-duality contracts into these cases. |
| Appendix A.1–A.6 | Include local Brauer invariant/local reciprocity and record that A.6 cites Serre for norm subgroup existence; do not claim that proof is read. |
| Appendix A.7 | Include the exact global function-field Brauer sequence; proof uses Tsen, whose proof is supplied as an RR/C1 obligation rather than attributed to ADT. |
| Appendix A.8–A.9 | Include function-field class formation after the Jacobian H¹-vanishing hypothesis; finite constants satisfy it by R3's Lang theorem. |
| Appendix A.10–A.13 | Include global Artin reciprocity, norm-kernel and Hasse-principle equivalences; the existence theorem is explicitly not proved here. |
| Appendix A.14–A.16 and cited notes | A.14 is a warning that quasi-finite constants need not satisfy the finite-constant conclusions; A.15 explains Brauer(X) via étale cohomology; A.16 is an exercise, not a supplier. |

### Neukirch, *Algebraic Number Theory* (English translation, 1999)

| Heading in read range | Disposition |
|---|---|
| II §10 Higher Ramification Groups, pp. 176–181 | Include Herbrand function and quotient compatibility in pair 2; full proof read. |
| III §2 Different and Discriminant, pp. 194–208 | Include trace-dual different, norm/discriminant, and valuation formulas used in pair 2 and the conductor formula. |
| V §6 Higher Ramification Groups, pp. 352–355 | Include the complete Hasse–Arf integrality proof in pair 6/8. |
| VI §6 Global Class Fields, pp. 397–399 | Include local/global conductor compatibility in the conductor–discriminant contract; no use as global CFT existence proof. |
| VII §10 Artin L-series, pp. 521–527 (read as part of §§10–11) | Reuse Brauer induction and Artin L-factor context only where the AN proof needs it; no new AN L-item here. |
| VII §11 The Artin Conductor, pp. 527–534, including Thm. 11.9 | Include the local Artin-conductor function, induction/quotient identities, conductor/discriminant relation, and complete conductor–discriminant proof for the finite abelian specialization. This closes the former Milne-only proof gap. |

### Stein and MIT lecture notes: additive adeles

| Read heading/range | Disposition |
|---|---|
| Stein, *Algebraic Number Theory: A Computational Approach*, Ch. 18 §18.1 “Global Fields,” printed pp. 181–184: Def. 18.1.1, Lemma 18.1.2, Thm. 18.1.4, Def. 18.1.5, Lemma 18.1.6, Example 18.1.7 | Reuse global-field conventions; Lemma 18.1.2 establishes finite support of nonintegrality, Thm. 18.1.4 the product formula, and the full Lemma 18.1.6 discriminant proof gives the almost-all integral-basis comparison required for adelic base change. |
| Stein, *Algebraic Number Theory: A Computational Approach*, Ch. 18 §18.3 “The Adele Ring,” printed pp. 186–190: Definitions 18.3.1–2 | Reuse the adele ring and principal-adele carrier in the builder-owned shared page. |
| Stein §18.3 Lemma 18.3.3 and Cor. 18.3.4 | Include finite-separable base-change of additive adele rings and the corresponding direct-sum identification of principal fields. Full proofs were read. |
| Stein §18.3 Thm. 18.3.5 and Cor. 18.3.6–7 | Thm. 18.3.5 states discreteness/cocompactness for a global field and reduces to \(\mathbb Q\) or \(\mathbb F_q(t)\), but the written proof handles only \(\mathbb Q\). Cor. 18.3.6 supplies a compact fundamental-set formulation; Cor. 18.3.7 finite quotient measure. Reuse the \(\mathbb Q\) proof and separable base change; do not claim Stein supplies the function-field base proof. |
| MIT 18.785 Fall 2021, Lecture 25 §§25.1–25.2 “Introduction to Adelic Rings” and “Restricted Products,” lecture pp. 1–4 | Include restricted-product topology and the locally compact proof (Props. 25.5–25.6). |
| MIT Lecture 25 §25.3 “The Ring of Adeles,” pp. 4–8: Def. 25.7, Props. 25.9–25.10, Cor. 25.11, Thm. 25.12, Cor. 25.13 | Include local compactness, finite-separable base change, and the full additive discreteness/cocompactness proof. Thm. 25.12 explicitly treats both \(\mathbb Q\) and \(\mathbb F_q(t)\): the finite-place argument uses the PID property for either and the infinity step chooses an integer or polynomial. The R2 item will present the finite-field step as a partial-fraction/polynomial proof. The remaining lectures in the 290-page PDF are not claimed as read for this task. |
| MIT 18.785 Lecture 11 §11.4 “Completing a separable extension of Dedekind domains”: Theorem 11.23 and complete proof, printed lecture pp. 7–9; Corollary 11.26 and complete proof, p. 9 | Include the nonarchimedean finite-place tensor decomposition \(L\otimes_K K_p\cong\prod_{q|p}L_q\), local degree/ramification/residue comparison, decomposition/inertia groups, and integral completion decomposition. The proof uses weak approximation. Its prime-ideal hypotheses do not provide the separate archimedean R/C factor decomposition; the shared archimedean item has its own direct proof. No other Lecture 11 pages are claimed as read. |

### Fesenko–Vostokov, *Local Fields and Their Extensions*, 2e (2002)

| Read heading/range | Disposition |
|---|---|
| Title page and complete “Introduction to the Second Edition,” printed pp. vii–ix (introduction dated March 2002) | Record the actual Second Edition 2002 publication and book scope: local fields are complete discretely valued fields with perfect residue; Ch. IV treats finite residue, Ch. V infinite residue, and the introduction sends higher local CFT to [FK]. No theorem supplier is inferred from the introduction. |
| Ch. I §§1–4, “Ultrametric Absolute Values” through “Completion,” printed pp. 1–11 | Reuse the discrete-valuation, completion, and local-field definitions; broad local-place/completion interfaces remain supplied by Milne ANT VII and the published number-field items. |
| Ch. I §5 “Filtrations of Discrete Valuation Fields,” pp. 12–16 | Include the power filtration, factor maps, power-map cases in mixed/equal characteristic, openness of power subgroups, and Hensel multiplicative expansion as prerequisites for local CFT and explicit symbols. |
| Ch. I §6 “The Group of Principal Units as a \(\mathbb Z_p\)-module,” pp. 17–21 | Include the topological unit bases and precise p-torsion cases needed for the Shafarevich basis; do not claim unique coordinates when p-power roots of unity are present. |
| Ch. I §§7–9, “Set of Multiplicative Representatives,” “The Witt Ring,” “Artin–Hasse Maps,” pp. 22–34 | Include Teichmüller representatives, Witt vectors for perfect residue fields, and Artin–Hasse maps as prerequisites to the p-adic formula; exercises not needed by the contracts are excluded. |
| Ch. III §1 “Cyclic Extensions of Prime Degree,” pp. 67–74 | Include norm images on unit filtrations for unramified, tame, and totally ramified characteristic-p degree-p extensions; these are inputs to Ch. IV §6. |
| Ch. III §2 “Artin–Schreier Extensions,” pp. 74–78 | Include the complete ramification/break classification and Artin–Schreier generator results for degree-p extensions; use with the IV.5 pairing and IV.6 existence proof. |
| Ch. III §3 “The Hasse–Herbrand Function,” pp. 79–88 | Include the norm-defined Hasse–Herbrand function, transitivity, quotient compatibility, its norm-filtration inequality, and derivative/ramification formula. |
| Ch. III §4 “The Norm and Ramification Groups,” pp. 88–94 | Include Hilbert 90, the norm/ramification exact sequence, and the full Hasse–Arf proof for finite abelian extensions. Ch. III §5 “The Field of Norms,” pp. 95–110, was not read and supplies no R2 item. |
| Ch. IV §§1–2 “Useful Results on Local Fields,” “The Neukirch Map,” pp. 112–127 | Include finite-residue local hypotheses, unramified behavior, Neukirch reciprocity map construction and its functoriality; scope is finite residue. |
| Ch. IV §3 “The Hazewinkel Homomorphism,” pp. 128–138 | Include the construction and proof that it is inverse to the Neukirch map for finite local extensions, plus the local reciprocity/norm quotient isomorphism; cited Ch. II facts are supplied from the separately read Milne ANT VII/Neukirch local sources, not attributed to unread Fesenko Ch. II. |
| Ch. IV §4 “The Reciprocity Map,” pp. 139–141 | Include passage to the maximal abelian extension, continuity/density, functorial norm maps, and Proposition 4.1’s finite norm-subgroup lattice correspondence. |
| Ch. IV §5 “Pairings of the Multiplicative Group,” pp. 142–152 | Include Kummer Hilbert-symbol laws/norm criterion for roots of unity, the Artin–Schreier pairing and its differential-residue identity, prime-p norm-subgroup steps, and the precise finite-residue hypotheses. |
| Ch. IV §6 “The Existence Theorem,” pp. 153–160 | Include Proposition 6.1 openness/finite index of local norms and full Theorem 6.2: every open finite-index subgroup of \(F^\times\) is a norm subgroup of a finite abelian extension, for complete discretely valued \(F\) with finite residue field, in both characteristics. Characteristic-p proof uses Artin–Schreier p-index induction. The corollaries on reciprocity continuity and upper jumps are included within their stated hypotheses. |
| Ch. V §4 “Local p-Class Field Theory,” pp. 196–202 | Include the proved reciprocity isomorphism for finite totally ramified p-extensions over a complete/Henselian field with perfect infinite residue. Section 4.8 says the general infinite-residue existence theorem needs additional additive-polynomial work and refers to [Fe6]; it is not supplied here. |
| Ch. V §5.1 “Imperfect Residue Field,” pp. 203–205; §5.2 “Ordinary Abelian Varieties,” pp. 205–206 | Include only the proved cyclic totally ramified p-extension norm quotient result from §5.1; §5.1 explicitly leaves the general abelian norm-kernel question open. §5.2 is an interpretation/proof citation for twisted reciprocity, not a full proof supplier. |
| Ch. VI §§1–2 “Formal Power Series,” “Artin–Hasse–Shafarevich Map,” pp. 207–218 | Include convergence/substitution conditions, Frobenius operator, and the Artin–Hasse–Shafarevich isomorphism used by the explicit Hilbert formula. |
| Ch. VI §3 “Series Associated to Roots,” pp. 219–227 | Include the full auxiliary lemmas on \(\zeta_{p^n}\)-series, independence of expansions, residues, and the p=2 correction polynomial used in Ch. VII. |
| Ch. VI §§4–5 “Primary Elements,” “The Shafarevich Basis,” pp. 228–234 | Include primary elements and their trace criterion, and the complete unit-basis theorem used in the explicit symbol proof. |
| Ch. VII §§1–2 “Origin of Formulas,” “The Pairing,” pp. 235–249 | Include the full odd-p formal pairing and proof of lift/uniformizer independence. The p=2 correction is stated, but the corresponding pairing verifications are left as Exercises VII.2.2–4 and remain a proof gate. |
| Ch. VII §3 “Explicit Class Field Theory for Kummer Extensions,” pp. 250–254 | Include the explicit norm subgroup/orthogonal-complement theorem for local number fields containing \(\mu_{p^n}\); this is a local Kummer result, not a general nonabelian theorem. |
| Ch. VII §4 “Explicit Formulas,” pp. 255–257 | Include the complete odd-p Vostokov Hilbert residue formula. The p=2 formula is stated with its correction terms, but its source proof depends on the p=2 exercises and is not treated as proved. |
| Ch. VII §5 “Applications and Generalizations,” pp. 258–266 | Include Kummer/Eisenstein special formulas and the stated syntomic interpretation only at statement level. Section 5.5 writes a higher-dimensional symbol and says it agrees once higher CFT is defined, but gives no proof of that reciprocity identification; defer it. |
| Ch. IX §§1–2 “The Milnor Ring of a Field,” “The Milnor Ring of a Discrete Valuation Field,” pp. 283–292 | Include Milnor K definitions, residue boundary, and the Bass–Tate split exact sequence for \(F(X)\), all with proofs. The Bloch–Kato/Gabber differential-symbol theorem in an exercise is cited/sketched only and is excluded. |
| Ch. IX §3 “The Norm Map,” pp. 293–303 | Include the full Bass–Tate–Kato transfer construction for finite field extensions, transitivity, projection formula, and K1 norm specialization. |
| Ch. IX §4 “The Milnor Ring of a Local Field,” pp. 304–318 | Include Moore's K2 exact sequence and divisible kernel, plus the full unique-divisibility proof for \(K_n^M(F)\), \(n\ge3\), for one-dimensional local fields with finite residue. Do not claim the stronger K2 unique-divisibility result from §4.7: its proof imports Tate's unproved assertion in §4.5. Section 4.13 only sketches higher-local CFT and cites outside papers; it does not prove d-local reciprocity. |

### Yoon, Thorner–Zaman, and Lagarias–Odlyzko

| Read heading/range | Disposition |
|---|---|
| Neukirch, *Algebraic Number Theory*, Ch. VII §§1–8, pp. 419–503; §10 through Thm. 10.6, pp. 517–526; §13, pp. 543–549 (complete ranges read by R1) | §§1–2 (Riemann zeta and Dirichlet L-series), §§3–4 (theta/lattice and gamma preparation), §5 (Dedekind zeta Thm. 5.9 and Cor. 5.10–5.11) supply the zeta continuation/pole proof chain; §6 Hecke characters, §7 number-field theta series, and §8 Hecke L-series supply the analytic character framework. §10 Cor. 10.5 and Thm. 10.6 supply abelian Artin factorization and Artin–Hecke comparison (including ramified Euler factors) for AN. §13.2 Thm. 13.2 supplies ray-class prime Dirichlet density; §13.3 Lemma 13.3 supplies nonvanishing at 1. §§9, 11, and 12 are outside the stated R1 read extent and are not used here. Reading attribution is R1, not R2. |
| Yoon, complete arXiv:1610.07486v1, §§1–3.4, Appendix A, references (23 pages) | Use as a proof map for positive-characteristic global CFT only. §2 Thm. 3 defers local CFT, now proved independently by Fesenko–Vostokov IV.6.2; §3.3.1 cites rather than proves nonsplitting-place infinitude; §3.2 assumes a rational place. The latter global steps remain proof gates; Yoon is not a local supplier. |
| Thorner–Zaman v3, complete 26 pages, especially Thm. 1.1, Cor. 1.2, Thm. 1.4 and proofs | AN owns natural/effective \(\pi_C(x)\). Thm. 1.1 counts unramified prime ideals of the base by absolute norm, states the possible exceptional-zero term and uniform error under its discriminant/degree lower range; Cor. 1.2 gives natural density for a fixed extension in the stated limiting range. The paper quotes, but does not prove, the Lagarias–Odlyzko GRH estimate. |
| Lagarias–Odlyzko 1977, pp. 409–464, all nine sections and bibliography | Full read attribution belongs to `an_r1`, not R2; its local full-text and hashes are cross-linked from README. AN owns the prime-count estimate. Thm. 1.1 assumes GRH for \(\zeta_L\); Thm. 1.3 is unconditional with a possible real exceptional zero. Stark's explicit zero bound quoted in Thm. 1.4 is not proved in the read article. |
| Lang, *Algebraic Number Theory* (1970), VI §3 Thm. 3 | Not read: the available IA/Open Library full-text endpoint returned HTTP 403 “Item not available” on 2026-10-23. Milne's cited Lang proof is not claimed as read. R1 independently read Neukirch, *Algebraic Number Theory*, VII §5, printed pp. 457–468, including Thm. 5.9 and Cor. 5.10–5.11; the complete proof gives Dedekind-zeta continuation, functional equation, simple pole/residue, and analytic class-number formula from the earlier lattice/Poisson development. This alternate source closes the zeta-pole proof obligation, with reading attribution to R1. |

For clarity about the cross-track analytic boundary, write \(\Delta_L=|\operatorname{disc}(L)|\), \(n_L=[L:\mathbb Q]\), and use the same base-prime-ideal counting function \(\pi_C(x,L/F)\) defined in pair 13. Thorner–Zaman Thm. 1.1 is for a finite Galois extension of number fields \(L/F\) with \(L\ne\mathbb Q\), \(G=\operatorname{Gal}(L/F)\), conjugacy class \(C\subset G\), and \(x\ge(\Delta_L n_L^{n_L})^{c_2}\); it gives

\[
\pi_C(x,L/F)=\frac{|C|}{|G|}\bigl(\operatorname{Li}(x)-\theta_1\operatorname{Li}(x^{\beta_1})\bigr)\left[1+O\left(\exp\!\left(-\frac{c_3\log x}{\log(\Delta_L n_L^{n_L})}\right)+\exp\!\left(-\frac{\sqrt{c_3\log x}}{\sqrt{n_L}}\right)\right)\right],
\]

with effective absolute constants, where \(\beta_1\), if present, is the Landau–Siegel zero of \(\zeta_L(s)\), and \(\theta_1\in\{-1,0,1\}\) (zero precisely when no exceptional zero occurs). Cor. 1.2 states the adjusted-main-term asymptotic when \(\log x/\log(\Delta_L n_L^{n_L})\to\infty\); for a fixed extension this yields the natural Chebotarev density because \(\beta_1<1\). The uniform lower range is part of the theorem. Lagarias–Odlyzko Thm. 1.1 instead assumes GRH for \(\zeta_L\) and for every \(x>2\) gives

\[
\left|\pi_C(x,L/F)-\frac{|C|}{|G|}\operatorname{Li}(x)\right|\le c_1\left[\frac{|C|}{|G|}x^{1/2}\log(\Delta_Lx^{n_L})+\log\Delta_L\right].
\]

Lagarias–Odlyzko Thm. 1.3 is unconditional for \(n_L>1\), with the stated lower range \(x\ge\exp(10n_L(\log\Delta_L)^2)\) and a possible real simple zero \(\beta_0\) in \(1-(4\log\Delta_L)^{-1}\le\sigma\le1\), \(|t|\le(4\log\Delta_L)^{-1}\); its upper bound adds \((|C|/|G|)\operatorname{Li}(x^{\beta_0})\) when that zero exists and otherwise omits the term, plus \(c_3x\exp(-c_4n_L^{-1/2}\sqrt{\log x})\). These are AN estimates, not R2 theorem dependencies or proof inputs for CFT.

## Proof gates and status labels

## Per-item choice assumptions

The inventory distinguishes direct axiom use from inherited hypotheses.
Choice assumptions already declared by an item's dependencies—global places,
completions, restricted products/ideles, weak approximation, class formations,
and their duality or CFT consequences—remain inherited through that dependency
DAG. R2 does not repeat AC/CC as a direct dependency merely to restate a
supplier's contract. In particular, the number-field and function-field class
formations, global Artin maps, norm-index/nonsplitting arguments, class-field
existence, Poitou–Tate and flat duality, and Chebotarev theorem consume those
choice-bearing suppliers directly or transitively; the supplier dependencies
remain explicit in their inventory rows, and their AC/CC contracts are
inherited through those edges rather than duplicated as direct axiom rows.

The only R2 item with a direct choice axiom is
`thm-function-field-idele-class-degree-exact-sequence`. Its proof uses
Tychonoff for the infinite product of compact local unit groups and records
`def-axiom-of-choice` directly for that compact-product step. Its CC condition
is inherited through the existing idele/completion suppliers. The prime-ideal
counting-function definition `def-chebotarev-prime-ideal-counting-function`
is choice-free: it counts the already-defined prime ideals with the specified
absolute norm and Frobenius class and constructs no place, completion, or
restricted product. Local ramification/invariant statements take a complete
valued field and valuation data as supplied, and the finite-field Picard
degree-one argument likewise adds no independent choice step.

1. **Function-field global CFT existence:** ADT Appendix A.7–A.13 proves the global Brauer sequence, class formation, and reciprocity, but not the existence theorem. The local equal-characteristic norm-subgroup theorem is proof-closed by Fesenko–Vostokov IV.6.2. Remaining gates are the global nonsplitting-place lemma, the first/second norm-index proofs for the exact finite-constant idèle class group, and the resulting open-subgroup existence theorem. Keep these separate from Chebotarev to avoid a cycle.
2. **Tsen:** ADT cites the theorem. The proposed item can close locally by proving (C_1) via an RR dimension count and reduced norm; retain that proof obligation and its curve/RR dependencies.
3. **Dedekind-zeta simple pole:** Milne CFT VI.2 Proposition 2.8 sends the detailed lattice count to Lang VI §3 Thm. 3. Lang was unavailable, but R1 read an independent full proof in Neukirch VII §5, pp. 457–468, Thm. 5.9 and Cor. 5.10–5.11. AN should bind that exact Neukirch supplier; no Lang proof attribution is made. This analytic supplier remains downstream of the selected algebraic global CFT existence route.
4. **Conductor–discriminant:** proof-sourced by the full Neukirch VII §11 Thm. 11.9 proof, with local different/ramification and Brauer-induction dependencies. Milne CFT V.3 Thm. 3.27 is only a statement and is not cited as the proof.
5. **The p=2 Vostokov formula:** Fesenko–Vostokov VII.4 states the corrected formula, but the formal-pairing properties and uniformizer-independence proof are assigned to Exercises VII.2.2–4. Keep `rem-vostokov-p2-explicit-hilbert-formula-proof-gate`; the odd-p formula is fully proved in the read chapter. This is an established formula awaiting a proof supplier, not an open problem.
6. **Higher local reciprocity / higher-dimensional duality:** Fesenko–Vostokov VII.5.5 and IX.4.13 only state/outline the higher-dimensional formula and CFT, referring to Parshin, Kato, and [FK]. The source is read, but it does not provide the full proof; the frontier page claims no d-local reciprocity or duality theorem.
7. **Current-status statements:** the read sources are dated 1977–2022 and do not establish a claim about the state of a 2026 frontier. No such status claim is made here.

## Verification

The two R2 JSON files parse and were checked for 28 reciprocal A/B page rows,
130 unique inventory items, all planned item IDs named in this dossier, and
same-page prerequisite order. Only
`thm-function-field-idele-class-degree-exact-sequence` has a direct choice
axiom (`def-axiom-of-choice`) in the inventory; its Tychonoff dependency is
explicit, while AC/CC on other rows are inherited through their suppliers. No
content tests, authoring pipeline, engine transition, commit, or publication
action was run; this is a planning scaffold only.
