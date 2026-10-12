---
id: thm-standard-tableau-monomials-form-a-basis-of-the-highest-weight-fock-submodule
kind: theorem
title: "Standard tableau monomials form a basis of the highest weight Fock submodule"
status: draft
origin: pipeline
pipeline_run: frontier-44-special-representation-examples-28
dependency_level: 21
deps: [def-dual-canonical-canonical-and-quasi-canonical-fock-bases,
       thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis,
       def-higher-level-wedge-tensor-fock-module,
       def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules,
       thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis,
       def-upper-global-basis-by-the-contravariant-form,
       def-contravariant-form-on-an-integrable-quantum-highest-weight-module,
       def-quantum-verma-module-and-simple-highest-weight-quotient,
       def-kashiwara-lattices-lambda-and-infinity,
       thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules,
       thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals,
       thm-crystal-basis-tensor-product-rule,
       thm-integrable-quantum-highest-weight-module-exists-and-is-unique]
justified_by: []
aliases: []
proof_strategy: direct
provenance:
  statement: literature-derived
  proof: ai-altered
sources:
  references:
    - title: "Jonathan Brundan and Alexander Kleshchev, The degenerate analogue of Ariki's categorification theorem, Math. Z. 266 (2010) 877-919 (complete 44-page arXiv article)"
      url: "https://arxiv.org/pdf/0901.0057"
      locator: "Sections 2.2-2.3, Theorem 2.2 and Corollary 2.3 (printed pp. 7-10): the projection $\\pi$, the standard monomials $S_A$, the vanishing of $\\pi(L_A)$ for non-standard $A$ and formulas (2.11)-(2.13), (2.22); complete passage read."
    - title: "Jonathan Brundan, Dual canonical bases and Kazhdan-Lusztig polynomials, J. Algebra 306 (2006) 17-46 (complete 29-page arXiv v2 article)"
      url: "https://arxiv.org/pdf/math/0509700"
      locator: "Section 7, Theorem 26, Remark 27 and Theorem 29 (printed pp. 22-29): the standard monomial bases $\\{V_A\\}$ of the highest weight module, the transition formula to the dual-canonical basis and its independence of $\\mu$; complete passage read."
    - title: "Volodymyr Mazorchuk, Lectures on Algebraic Categorification, QGM Master Class Series, European Mathematical Society 2012 (complete 77-page arXiv lecture-note set)"
      url: "https://arxiv.org/pdf/1011.0144"
      locator: "Section 4.2 (printed pp. 18-19): Verma modules and highest weight vectors used only to fix the classical language; complete passage read."
---

## Statement

Work in the conventions of
[[def-higher-level-wedge-tensor-fock-module]] and
[[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]], with source
parameter $s$, monomial basis $M_A$, ordinary bar $\psi$, source
dual-canonical family $L_A$, canonical family $T_A$, and the source forms
$\langle-,-\rangle$, $C$.

The highest vector $M_{A_\Lambda}$ generates the multiplicity-one constituent
$V(\Lambda)\subseteq F(\Lambda)$, and there is its normalized module projection
$\pi:F(\Lambda)\to V(\Lambda)$.

(1) The vectors $S_A:=\pi M_A$, $A\in\mathrm{Std}^\Lambda$, form a basis of
$V(\Lambda)$, and $D_A:=\pi L_A$ for $A\in\mathrm{Std}^\Lambda$ form the
**source dual-canonical basis** of $V(\Lambda)$.

(2) What vanishes is $\pi L_A$ for $A$ not standard; $\pi M_A$ need not vanish
for nonstandard $A$. The integral kernel of $\pi$ is the saturated direct
summand with basis the $L_A$ with $A\notin\mathrm{Std}^\Lambda$, and
$\pi(F_{\mathcal A})$ has the actual basis $D_A$ (also $S_A$ on
$\mathrm{Std}^\Lambda$), the source upper/costandard lattice. For every $B$,
$$\pi M_B=\sum_{A\in\mathrm{Std}^\Lambda}d_{A,B}(s)\,D_A,$$
which gives the explicit straightening of nonstandard projected monomials.

(3) All bases and maps commute with upper cuts and common-tail embeddings, so
the assertions hold in the full direct limit. The relation of the source
$D_A$ to the library form-dual upper family
([[def-upper-global-basis-by-the-contravariant-form]]) is the explicit weight
rescaling proved in the global-basis comparison, not an unqualified
identification.

## Facts & Assumptions

**Given:** A finite cut of $F(\Lambda)$ with its monomial basis, ordinary bar $\psi$, source families $L,T$, forms $\langle-,-\rangle$, $C$, the highest constituent $V(\Lambda)$ with its normalized highest vector $M_{A_\Lambda}$, and the library based-module machinery.

[F1] Fock bases and forms ([[def-dual-canonical-canonical-and-quasi-canonical-fock-bases]], [[thm-higher-level-wedge-tensor-fock-module-has-the-column-monomial-basis]], [[def-higher-level-wedge-tensor-fock-module]]): monomial basis and its weights; triangular charts $d,p$; $C(\widetilde T_A,L_B)=\delta_{AB}$, $C(\widetilde L_A,T_B)=\delta_{AB}$, $\langle P_A,L_B\rangle=\delta_{AB}$; rectification identifies $\mathrm{Rev}^\Lambda$ with $\mathrm{Std}^\Lambda$; cuts commute with all four families.

[F2] Based modules and global bases ([[def-contravariant-form-on-an-integrable-quantum-highest-weight-module]], [[thm-existence-bar-invariance-and-uniqueness-of-the-lower-global-basis]], [[def-upper-global-basis-by-the-contravariant-form]], [[def-kashiwara-lattices-lambda-and-infinity]], [[thm-quasi-r-tensor-bars-on-finite-products-of-based-integrable-modules]], [[thm-crystal-bases-of-integrable-modules-decompose-into-highest-weight-crystals]], [[def-quantum-verma-module-and-simple-highest-weight-quotient]], [[thm-integrable-quantum-highest-weight-module-exists-and-is-unique]]): the normalized integrable highest module is ordinary simple and maps universally to an integrable cyclic highest module; finite tensor charts have the stated crystal rule; the contravariant form and its normalized highest constituent; existence, bar invariance and uniqueness of the lower global basis; bar lattices and crystal lattices.

[F3] Conventions ([[def-the-fock-convention-dictionary-for-finite-type-a-quantum-modules]]): source/library parameter dictionary, divided powers, bars and lattices.

## Proof

**Proof technique:** direct.

1.1 **The normalized highest inclusion.** The explicitly constructed fundamental factors make the ground tensor integrable and give it the unique top weight $\Lambda$. The universal highest-module map from the actual existence-and-uniqueness theorem sends the normalized highest vector to this ground tensor and has nonzero image. Ordinary simplicity of that highest module makes the map $j:V(\Lambda)\to F(\Lambda)$ injective. A module injection preserves each highest kernel and the unique divided-string decomposition, hence commutes with the intrinsic lower string shifts. It also sends divided-power generators to the actual integral tensor lattice. The normalized projection will be constructed by the finite nondegenerate pairing in step 5.1, rather than assumed from a general semisimplicity assertion. Its uniqueness follows from the one-dimensional top weight: a nonzero map to the simple highest module is surjective, hence cannot vanish on the top weight. [F1, F2, F3, construct]

2.1 **The actual balanced tensor chart.** Let $L_0^{\rm ten}$ and $\Psi L_0^{\rm ten}$ be the actual two charts of the finite-product theorem, not the raw tensor-word chart. The normalized ground tensor is a nonzero ground crystal residue. Every generator of $L_0(\Lambda)$ is a divided-string word on its highest vector; the naturality established in step 1.1 and the actual tensor crystal rule put its image in $L_0^{\rm ten}$ with the corresponding nonzero ground-component residue, with nonvanishing ensured by the partial-inverse rule. Divided-power generation gives $jV_{\mathcal A}(\Lambda)\subseteq F_{\mathcal A}$. Both bar composites agree on the highest vector and on every bar-fixed divided lowering monomial, so $j\overline{L_0(\Lambda)}\subseteq\Psi L_0^{\rm ten}$. Hence $jG(b)$ is integral, lies in both actual charts, is bar fixed and has the required residue. Balanced uniqueness identifies it with the corrected tensor global vector. Since $t=s^{-1}$, this library zero chart is the source infinity chart: the original factor order yields $T_A$ on $\mathrm{Rev}$, and the reverse-factor order yields $\widetilde T_A$ on $\mathrm{Std}$. This proves based inclusion rather than assuming every module map is based. [F1, F2, F3, step 1.1]

3.1 **The ground components.** On a strict column the crystal signature rule has $+$ for entry $i$ and $-$ for entry $i+1$ with simultaneous occurrences cancelling; concatenating down-column words, cancelling $-+$ pairs, the rightmost surviving $+$ and leftmost surviving $-$ determine the source upper operators. Semistandard rows are stable under this rule: a changed entry violating a row inequality has an equal neighbouring entry which is either a later surviving $+$, an earlier surviving $-$ or its cancelling mate, and column strictness forces the last matching in the same row strip. The only highest tableau of the closed set is the ground state: the rightmost column is consecutive ground, and inducting to the left, rows overlapping the already-ground right columns are forced to be ground while a gap above the overlap produces an unmatched minus; repeated raising decreases the sum of entries, bounded below on a finite interval. Thus the reverse-factor lower ground component, equivalently the source original-order upper signature component, is exactly $\mathrm{Std}^\Lambda$; the original-order lower component is the reverse-standard set from step 2.1. [F1, F2, step 2.1]

4.1 **Rectification.** Reversing the tensor order gives the reverse reading of the same signature rule; aligning column tops by the prescribed vertical shifts makes the reverse-standard inequalities stable, and the explicit row-insertion rectification (bumping the smallest larger letter, with the elementary Knuth interchanges preserving the cancelling signs) is a weight-preserving crystal isomorphism between the original lower ground component and the reverse-factor lower ground component $\mathrm{Std}^\Lambda$, with inverse reverse insertion. This is the label dictionary of [F1]. [F1, step 3.1]

5.1 **The projection.** Define $\pi$ by $C_0(v,\pi y)=C(j_{\mathrm{reverse}}v,y)$, where $j_{\mathrm{reverse}}$ is the based reverse-factor highest inclusion and $C_0$ the normalized nondegenerate $\mathcal E\mathcal F$-contravariant form on the highest constituent. The typed contravariance of $C$ proved in [F1] makes $\pi$ $U$-linear; its highest coefficient is $1$, so its composite with the original highest inclusion is the identity on the simple highest module. It is therefore a genuine normalized projection, and its uniqueness is the top-weight argument of step 1.1. [F1, F2, step 1.1, step 4.1]

6.1 **Vanishing and the dual-canonical basis.** Since $j_{\mathrm{reverse}}$ sends the lower global basis to $\widetilde T_A$ with $A\in\mathrm{Std}^\Lambda$, the delta pairing $C(\widetilde T_A,L_B)=\delta_{AB}$ of [F1] gives $\pi L_B=0$ for $B\notin\mathrm{Std}^\Lambda$, while for $A\in\mathrm{Std}^\Lambda$ the vectors $D_A=\pi L_A$ form the $C_0$-dual basis of the constituent. This proves the vanishing statement (2) and that the $D_A$ are the source dual-canonical basis. [F1, step 4.1, step 5.1]

7.1 **Straightening and the $S$-basis.** Expanding $M_B=\sum_A d_{A,B}(s)L_A$ by the triangular chart of [F1] and applying $\pi$ gives $\pi M_B=\sum_{A\in\mathrm{Std}^\Lambda}d_{A,B}(s)\,D_A,$ the restriction to $\mathrm{Std}^\Lambda$ of a unitriangular matrix with diagonal $1$; hence the projected monomials $S_A=\pi M_A$, $A\in\mathrm{Std}^\Lambda$, form a basis of the constituent and the displayed formula is the explicit straightening of every projected monomial, standard or not. No projected-monomial vanishing is claimed. [F1, step 6.1, algebra]

8.1 **The integral kernel and the source upper lattice.** By step 6.1 the kernel of $\pi$ is spanned by the $L_A$ with $A\notin\mathrm{Std}^\Lambda$; being spanned by a subset of a basis it is a saturated direct summand of the integral Fock lattice. The image $\pi(F_{\mathcal A})$ is spanned by the $D_A$, hence is the source upper/costandard lattice; it is not identified with the lower divided-power lattice by an $A$-unit Gram determinant, since the relevant monomial Gram matrices are the inverse ordinary-bar matrix rather than the identity. [F1, step 6.1, step 7.1]

9.1 **Cuts and the direct limit.** All constructions and all coefficients of steps 1.1-8.1 are stable under the upper-cut and common-tail embeddings by the declared truncation compatibility theorem, and every vector lies in some finite double cut; the normalized highest maps are unique, so the maps agree on overlaps. The compatible direct limit gives the full bounded or semi-infinite assertion, and the comparison with the library form-dual upper family is the explicit weight rescaling proved in the global-basis comparison. [F1, F2, step 3.1, step 8.1]

10.1 **Conclusion.** The highest Fock constituent $V(\Lambda)$ has the standard monomial basis $S_A$ and the source dual-canonical basis $D_A=[\pi L_A]$ over $\mathrm{Std}^\Lambda$, with the explicit straightening formula and the saturated integral kernel off $\mathrm{Std}^\Lambda$; the library comparison uses the weight rescaling only. [step 1.1, step 2.1, step 3.1, step 4.1, step 5.1, step 6.1, step 7.1, step 8.1, step 9.1] ∎
