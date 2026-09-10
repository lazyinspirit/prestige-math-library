# Step 3b — group e

Current result: **98 accepted, 0 repaired, 0 escalated**. All owned receipts pass the current exact-hash check. The final validation section distinguishes this group result from outstanding global gates. Accepted mathematical contracts remain unchanged.

Run: phase-2-catchup-24. Batches 10 and 11; 98 items. Current Step-3a sufficient decisions read and verified. Item adjudication only; prior group approvals are historical evidence. Each entry records the current claim, examined supplier IDs and actual proof assessment. Unfinished items remain unaudited.

## def-left-haar-integral-and-left-haar-measure

Claim/conventions: On a locally compact Hausdorff group, a left Haar integral is a nonzero positive linear functional on real C_c(G) invariant under every L_a. A left Haar measure is a nonzero left-invariant Borel measure, finite on compact sets, outer regular on Borel sets and inner regular on open sets. Right Haar reverses the translation side.

Examined dependencies: def-group, def-locally-compact-space, def-compact-support-c-c-and-c-zero-on-an-lch-space, def-positive-linear-functional-on-c-c, def-radon-measure-on-an-lch-space.

**accept** — Read the five published definitions in items/. The topology and continuous group operations are explicitly fixed by the contract; real C_c positivity, nonzero normalization and the weaker open-inner/Borel-outer Radon convention agree. No representation equivalence or choice is presumed. Source: Pedersen Haar note definition; the mathematical definition is internally complete.

Receipt hash: 085e9e49715f7494da56643096cbf88eac315145946995886cde97b69e572706. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-translations-preserve-compactly-supported-continuous-functions

Claim/conventions: Let G be a locally compact Hausdorff group and f in real or complex C_c(G), with K=supp(f). Define L_a f(x)=f(a^{-1}x) and R_a f(x)=f(xa). Then L_a f and R_a f belong to C_c(G), with supports aK and Ka^{-1}, respectively. For every a0, both maps a -> L_a f and a -> R_a f are continuous in the uniform norm near a0 and their supports there lie in one fixed compact set. In particular both uniform translation differences tend to zero as a tends to the identity. Inversion pullback f(x^{-1}) also belongs to C_c(G), with support K^{-1}. No countability or choice assumption is needed.

Examined dependencies: def-left-haar-integral-and-left-haar-measure, thm-compactness-under-continuous-maps, thm-finite-products-of-compact-spaces.

**accept** — Checked support transport under the explicit homeomorphisms, compact images of V times K and the finite rectangle argument. The two published compactness proofs are choice-free; the empty-support case is handled. Uniform continuity here needs neither a metric nor Haar existence.

Receipt hash: ff735589c5e1c56259c14712b466c82b17a7bc39858d7bfea52d7cc74db0afa7. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## def-haar-covering-ratio-of-test-functions

Claim/conventions: For nonzero nonnegative $f,\phi\in C_c(G)$, define the normalized covering/translate ratio used in the von Neumann–Kakutani construction.

Examined dependencies: def-left-haar-integral-and-left-haar-measure, lem-translations-preserve-compactly-supported-continuous-functions.

**accept** — Read Pedersen p2 Definitions, https://home.agh.edu.pl/~rudol/Paradoxes/haarintegral.pdf. The finite positive-coefficient infimum includes the zero convention; normalization is explicitly postponed until its denominator is proved positive. Left translation conventions match the preceding lemma.

Receipt hash: 93fcce15cd2fc17eff5fbddf09db7ac89316ee91d077f66167229b7e4ad6501a. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-haar-covering-ratios-are-finite-and-positive

Claim/conventions: Compactness gives finite translating covers and hence finite positive ratios for nonzero test functions.

Examined dependencies: def-haar-covering-ratio-of-test-functions, thm-compactness-under-continuous-maps, thm-compact-iff-fip.

**accept** — Read complete Pedersen p2 properties (i)-(vi) and their arguments. Finite translates of a positive superlevel set cover the compact support; their common bound covers f. Sup norms give strict positivity; composing covers gives the product inequality and both normalized bounds. Homogeneity, subadditivity and exact left invariance follow from rescaling, union and translated covers. The published compactness/maximum and FIP clauses fit.

Receipt hash: 51c88f33c5fc04b3de609fbd25d071e9fb4b81a50bb15dd6425f62ea829e7be9. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-normalized-approximate-haar-functionals-are-positive-and-invariant-in-the-limit

Claim/conventions: Every normalized covering-ratio functional is positive on nonzero nonnegative test functions, positively homogeneous, normalized at f_0, and exactly left invariant; its coordinate bounds are independent of the small-support test function.

Examined dependencies: lem-haar-covering-ratios-are-finite-and-positive.

**accept** — Each assertion follows from the just-checked covering inequalities, with (f0:f0)=1 and the strictly positive denominator. Pedersen p3 Theorem 1 gives the same coordinate bounds. No false finite-stage additivity is asserted.

Receipt hash: 4ae7506a06beabf217500f360422fce8b35571bdfb43d4fb3b6b7fa23c23c449. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-haar-covering-functionals-are-asymptotically-additive

Claim/conventions: For f1,f2>=0 in C_c(G), f0 nonzero nonnegative, and epsilon>0, all nonzero nonnegative phi supported in a sufficiently small identity neighbourhood satisfy 0<=I_phi(f1)+I_phi(f2)-I_phi(f1+f2)<epsilon.

Examined dependencies: lem-translations-preserve-compactly-supported-continuous-functions, lem-haar-covering-ratios-are-finite-and-positive, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, def-axiom-of-choice.

**accept** — Read Pedersen p2 complete small-support additivity proof. With q=f1+f2+delta F, each extended quotient is continuous because q>=delta on the numerator support. Right-translation uniform continuity controls h_i(xz)-h_i(x). Splitting a cover gives the stated delta(1+2eta)(F:f0)+2eta(f1+f2:f0) bound, made strictly less than epsilon before choosing phi. AC is explicitly assumed in the contract and declared for the published DC cutoff proof.

Receipt hash: df7ff657c2f1ede1b1b4813c6c93ff0cfa51bb5b6a77cae87faccda58b759bb8. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-haar-candidate-sets-have-the-finite-intersection-property

Claim/conventions: Assume AC. In the product indexed by nonzero nonnegative f in C_c(G) of intervals [1/(f_0:f),(f:f_0)], let E_U be the closure of normalized covering-ratio vectors from nonzero test functions supported in the identity neighbourhood U. The closed sets E_U are nonempty and have the finite intersection property. Their common points satisfy exact positive homogeneity, left invariance, normalization and additivity (with value zero assigned at f=0); individual approximants need not be additive.

Examined dependencies: lem-normalized-approximate-haar-functionals-are-positive-and-invariant-in-the-limit, lem-haar-covering-functionals-are-asymptotically-additive, thm-tychonoff, thm-compact-iff-fip, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, def-axiom-of-choice.

**accept** — Read Pedersen p3 existence and the published Tychonoff and compact-FIP proofs. The contract substitutes closures indexed by identity neighbourhoods for the source subnet. Cutoffs make every E_U nonempty; E_intersection is contained in each finite intersection. Coordinate equations are closed, and epsilon additivity passes to every common point. AC is explicit and sufficient for both compactness and cutoffs.

Receipt hash: 0559c418cef405bb23ab7382aaf6dd02327006431dcabd981919a1338ec41237. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## thm-existence-of-a-left-haar-integral

Claim/conventions: Assume AC. Every locally compact Hausdorff group has a nonzero positive left-invariant functional on real C_c(G), with its complex-linear extension on complex C_c(G).

Examined dependencies: def-left-haar-integral-and-left-haar-measure, lem-haar-candidate-sets-have-the-finite-intersection-property, lem-haar-covering-functionals-are-asymptotically-additive, def-axiom-of-choice.

**accept** — The positive-cone limit has exact additivity, positive homogeneity and I(f0)=1. The equality u+vprime=uprime+v proves independence of signed decomposition, and positive/negative parts have compact support. Complexification preserves the required real positivity. Pedersen p3 Theorem 1; AC propagated from the accepted compactness construction.

Receipt hash: 5a64ea75064985bb764e87c66e077f1ab83cef25e202b7d53fa1773ca01d03d4. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## cor-existence-of-left-and-right-haar-measures

Claim/conventions: Assume AC. The locally constructed left Haar integral has a representing left-invariant Radon measure; its pushforward under inversion is a right-invariant Radon measure.

Examined dependencies: thm-existence-of-a-left-haar-integral, thm-rmk-positive-functional-is-integration-against-its-representing-measure, thm-rmk-uniqueness-among-radon-measures, lem-translations-preserve-compactly-supported-continuous-functions, def-axiom-of-choice, lem-rmk-functional-outer-content-is-well-defined, lem-finite-lch-partition-of-unity-near-a-compact-set, thm-rmk-functional-outer-content-is-an-outer-measure, thm-rmk-open-sets-are-caratheodory-measurable, lem-rmk-compact-set-formula-and-local-finiteness, thm-rmk-representing-measure-is-inner-regular-on-open-sets.

**accept** — Read the current RMK outer-content, outer-measure, open-measurability, compact formula, open regularity, representation and uniqueness proofs. The historical support defect is already repaired on disk; the retained local argument is also valid. Finite slices approximate integrals with error epsilon mu(supp f). Homeomorphic pushforwards preserve all three Radon clauses; invariance follows from C_c uniqueness and inversion changes sides. AC covers inherited DC. No current published repair is needed.

Receipt hash: ad217e5823a99bddf7103f5a7c8f4affc3b6a3dae5e47f02bdf03465fe49dba2. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets

Claim/conventions: A Haar measure has full support, is locally finite and assigns finite measure to compact sets.

Examined dependencies: def-left-haar-integral-and-left-haar-measure, lem-haar-covering-ratios-are-finite-and-positive, def-radon-measure-on-an-lch-space.

**accept** — A null nonempty open set has finitely many translates covering any fixed compact set. Open inner regularity then forces mu(G)=0, contradicting nonzero measure. Compact neighbourhoods give local finiteness. For a nonzero positive functional, finite covering comparison transfers positivity to every nonzero positive test function. No countable exhaustion or choice is used.

Receipt hash: ec0ff316b164ccb1d2fe5e2381fd359f60bd3e7cd92438e15ed0b6830a76a6cb. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-compactly-supported-kernels-admit-commuting-radon-integrals

Claim/conventions: Assume AC, including the DC used by LCH cutoffs. For LCH X,Y and positive real-linear C_c functionals I,J, every real F in C_c(X times Y) has compactly supported continuous partial integrals and I_x J_y F=J_y I_x F. Complex kernels follow by real and imaginary parts.

Examined dependencies: def-compact-support-c-c-and-c-zero-on-an-lch-space, lem-finite-lch-partition-of-unity-near-a-compact-set, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, lem-positive-linear-functionals-on-c-c-are-monotone, thm-compactness-under-continuous-maps, def-axiom-of-choice, thm-finite-products-of-compact-spaces.

**accept** — Read Pedersen p5 Remark 2 and independently checked the full local finite-partition replacement for Stone-Weierstrass. Compact projections control sections; positivity bounds partial-integral variation. The tensor sum G has error at most epsilon c_X c_Y since c_Y F=F and c_X=1 on K_X. The two errors give 2 epsilon I(c_X)J(c_Y), including zero cutoff integrals. Published cutoff and finite partition proofs supply the exact support clauses under declared AC.

Receipt hash: dac5dc08d69358f0ceb67439f5288f2f9d2ac7838cbe2c8b24313f762752022f. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-haar-integral-comparison-inequality

Claim/conventions: Assume AC for the cutoff/partition route. If I,J are nonzero positive left-invariant functionals on C_c(G), then I(f)<=(f:g)I(g) for nonnegative f and nonzero nonnegative g. For f in C_c(G;R) and nonzero nonnegative symmetric u in C_c(G), one has |I(f)J(u)-I(u)J(f)|<=I(u) sup_{z in supp u} J(|R_z f-f|), where R_z f(y)=f(yz). For fixed f this supremum becomes arbitrarily small when supp u lies in a sufficiently small identity neighbourhood.

Examined dependencies: lem-haar-covering-ratios-are-finite-and-positive, lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets, lem-translations-preserve-compactly-supported-continuous-functions, lem-compactly-supported-kernels-admit-commuting-radon-integrals, lem-lch-urysohn-cutoff-for-a-compact-set-inside-an-open-set, lem-positive-linear-functionals-on-c-c-are-monotone, def-axiom-of-choice.

**accept** — Read complete Pedersen second uniqueness proof pp4-5. Both kernel supports are compact. The substitution x=yz uses left invariance of I, and symmetric u removes inversion without presuming right invariance. Two kernel interchanges and positivity give exactly the displayed error. The common compact support and cutoff bound convert uniform right translations to small J-error; v(z)v(z^-1) supplies nonzero symmetric u. All divisions use the accepted strict positivity clause.

Receipt hash: 8580aeeecf3a74c12d58c393ba0ef7bfb627cf99d69734777e959843b518a3c5. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## thm-uniqueness-of-left-haar-measure-up-to-scale

Claim/conventions: Assume AC for the preceding cutoff/partition proof. Any two left Haar measures on a locally compact Hausdorff group are positive scalar multiples on all Borel sets.

Examined dependencies: lem-haar-integral-comparison-inequality, thm-rmk-uniqueness-among-radon-measures, def-axiom-of-choice.

**accept** — The same small symmetric u controls f and f0. Eliminating J(u)/I(u) yields the stated epsilon bound, so J(f)=cI(f) with c>0. Signed parts extend equality and the read RMK uniqueness proof passes from compact sets to opens to every Borel set. AC supplies cutoffs; no sigma-finiteness, inversion invariance or subnet limit is assumed. Source comparison: Pedersen pp4-5.

Receipt hash: 3a9934a55b16407c98762b916dbb6f2d2d7570491c3a0b299de91f06e2841091. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## cor-normalized-haar-probability-on-a-compact-group

Claim/conventions: Assuming AC, every compact Hausdorff group has a unique left Haar probability. It is right invariant and inversion invariant.

Examined dependencies: cor-existence-of-left-and-right-haar-measures, lem-haar-measure-is-positive-on-nonempty-open-sets-and-finite-on-compact-sets, thm-uniqueness-of-left-haar-measure-up-to-scale, def-axiom-of-choice.

**accept** — Positive finite total mass licenses normalization. Right translation commutes with left translation and preserves total mass and regularity; uniqueness makes it invariant. Inversion then carries the bi-invariant probability to another left Haar probability. All required existence, positivity and uniqueness clauses are accepted and AC is explicit.

Receipt hash: 7bd050bef108e9a4997b6fd3c59ad0664b4ca3435c7f2f8c417e4d324496c0ce. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## ex-counting-measure-as-haar-measure-on-a-discrete-group

Claim/conventions: Verify that counting measure is Haar measure for an arbitrary discrete group.

Examined dependencies: def-left-haar-integral-and-left-haar-measure.

**accept** — Discrete compact sets are finite by their singleton open cover. Every infinite set has arbitrarily large finite subsets, so open inner regularity holds even for uncountable groups. All sets are open/Borel and translations are bijections. Countable additivity follows directly from counting disjoint finite sets or unbounded finite partial sums. No AC or general Haar existence is needed.

Receipt hash: 2c3e9819fb12b89a2005511847ea4781dc87cee3406848475790d577e067d845. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## ex-lebesgue-measure-as-haar-measure-on-rn

Claim/conventions: Assume AC. On the additive group R^n for n>=1, the Borel restriction of Lebesgue measure is a Haar measure, and every left Haar measure is its positive scalar multiple. For n=0, use unit point mass on the one-point group.

Examined dependencies: def-left-haar-integral-and-left-haar-measure, thm-uniqueness-of-left-haar-measure-up-to-scale, thm-lebesgue-measure-is-a-radon-measure-on-rn, def-axiom-of-choice, thm-lebesgue-outer-measure-and-measurability-are-translation-invariant.

**accept** — Read the published Radon theorem and the complete translation-invariance argument by translating elementary covers and Caratheodory test sets. Clause 3 applies to Borel sets, unit-box volume establishes nonzero measure, and the local uniqueness theorem supplies the positive scalar. AC covers countable choice in Radon regularity and local cutoffs. The singleton n=0 case is separately direct.

Receipt hash: e4ccef5550559738b2917e8f000c8503d0a50532cb0765f7101b35234e37d8a4. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## ex-normalized-haar-measure-on-a-finite-group

Claim/conventions: Normalize counting measure to total mass one and check bi-invariance.

Examined dependencies: cor-normalized-haar-probability-on-a-compact-group, ex-counting-measure-as-haar-measure-on-a-discrete-group, def-axiom-of-choice.

**accept** — The explicit measure |E|/|G| is a probability because groups are nonempty. Translations and inversion permute the finite set. Its direct verification is choice-free; the declared AC dependency covers identification with the general compact normalization theorem without asserting AC is necessary for the finite calculation.

Receipt hash: fc43e0a02e362c4b348065994cbc2452f882d06dd9d2464a1344626475eff3a6. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## ex-haar-measure-on-an-infinite-product-of-compact-groups

Claim/conventions: Assume AC. Any set-indexed product of compact Hausdorff groups has a unique normalized Radon Haar probability. Its projection onto each finite subproduct has that subproduct's normalized Haar probability, and these finite marginals determine the original Radon probability uniquely. This concerns the full Borel sigma algebra, not merely the cylinder sigma algebra.

Examined dependencies: cor-normalized-haar-probability-on-a-compact-group, thm-tychonoff, thm-rmk-uniqueness-among-radon-measures, def-radon-measure-on-an-lch-space, thm-product-universal-property, thm-compactness-under-continuous-maps, def-axiom-of-choice.

**accept** — Checked published Tychonoff, product universal property and Radon uniqueness clauses. Identity sections give all projection lifts without arbitrary selections. Finite Radon measures on compact Hausdorff spaces have Borel inner regularity by complements; compact projection images prove pushforward regularity. A finite cylinder cover and the identity section uniformly approximate each continuous h, so finite marginals determine all C(G) integrals and hence the full Borel measure. Empty index set is covered and AC is propagated.

Receipt hash: 6fb38f54a1695598e7e8882436ccd2291262d7082625c1cfcdbb5d308be8b853. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## def-block-bimodule-for-the-double-group

Claim/conventions: For a block idempotent $b$, regard $kGb$ as a $k[G\times G]$-module via left and right multiplication.

Examined dependencies: def-p-blocks-by-primitive-central-idempotents, def-splitting-p-modular-system-for-a-finite-group, thm-krull-schmidt-for-finite-dimensional-kg-modules.

**accept** — Read published block and splitting definitions and the Fitting argument in Krull-Schmidt. The inverse in xay^-1 makes a left G times G action; central b gives a direct summand. Its endomorphism ring is bZ(kG), whose nontrivial idempotents would split b; finite-dimensional Fitting decomposition gives locality and indecomposability. Only the residue-field primitive-idempotent clause is used, not any unproved integral reduction correspondence.

Receipt hash: 35d3e24b0a7ac805ec47f1f11a2fbe4e899ea1bbf08aa1d77d9e927a2b6a0c99. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-group-algebra-bimodule-is-induced-from-the-diagonal

Claim/conventions: The regular bimodule $kG$ is induced from the diagonal subgroup $\Delta G$.

Examined dependencies: def-block-bimodule-for-the-double-group.

**accept** — The coset map (x,y)Delta G -> xy^-1 is constant on cosets, has inverse g -> (g,1)Delta G and intertwines the specified double action. Linearization gives the exact induced trivial module over k in every characteristic.

Receipt hash: 9f6fbbffe52b05c0ad601b654de82adecd2b7594ab6dfad967e87d50ccd4bb04. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-relative-projectivity-mackey-intersections-for-finite-modules

Claim/conventions: For finite groups, restriction of an induced module decomposes by subgroup double cosets over any field; if indecomposable M is relatively H-projective, a vertex of M is conjugate into H.

Examined dependencies: def-relative-projectivity, thm-higman-criterion-for-relative-projectivity, thm-green-vertex-source-existence-and-conjugacy, thm-krull-schmidt-for-finite-dimensional-kg-modules.

**accept** — Read Webb Theorem 5.2.1 pp76-77 and current Higman, Green and Krull-Schmidt proofs. The typed tensor map respects L_x relations and double-coset bases, in arbitrary characteristic. Two counit retractions place M in a finite sum induced from Q intersect xBx^-1; local endomorphism-ring extraction and vertex minimality force containment. Induction transitivity is proved explicitly; no false inference about arbitrary restriction summands is used.

Receipt hash: c9198ca93954117b9691a313c6d39fa2e6f2e4dbe4f2ac1885822b9719487a97. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## thm-block-bimodule-has-a-diagonal-vertex

Claim/conventions: A vertex of the indecomposable block bimodule is conjugate to $\Delta D$ for a $p$-subgroup $D\le G$.

Examined dependencies: lem-group-algebra-bimodule-is-induced-from-the-diagonal, lem-relative-projectivity-mackey-intersections-for-finite-modules, thm-green-vertex-source-existence-and-conjugacy.

**accept** — The nonzero block bimodule is indecomposable and a summand of Ind_DeltaG k. The accepted arbitrary-characteristic containment lemma puts a Green vertex inside Delta G after conjugation. Projection identifies any such p-subgroup with Delta D. All finite-dimensional hypotheses hold.

Receipt hash: e40c11e328a2830208ca39a4f2f81023dd9e643d0d589674bf6e774c5f9e8cdc. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## def-defect-group-and-numerical-defect-of-a-block

Claim/conventions: $D$ is the subgroup from a diagonal vertex and $|D|=p^d$ defines numerical defect $d$.

Examined dependencies: thm-block-bimodule-has-a-diagonal-vertex.

**accept** — The preceding diagonal-vertex theorem gives a nonempty family of p-subgroups D. The finite order p^d determines a unique nonnegative integer d. This residue-field definition does not presume equivalence with integral-lattice or character-height defect.

Receipt hash: 730b4f9deaad123b520907fd9aec638775c93d3c4f1a052fc8175a43adb53732. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## thm-defect-groups-of-a-block-are-conjugate

Claim/conventions: All defect groups of a block are $G$-conjugate.

Examined dependencies: def-defect-group-and-numerical-defect-of-a-block, thm-green-vertex-source-existence-and-conjugacy.

**accept** — Green vertex conjugacy applies to the indecomposable k[G times G] block module. Conjugacy of Delta D and Delta E by (x,y) projects to E=xDx^-1; converse transport is by (x,x). This proves exactly G-conjugacy and independence of numerical defect.

Receipt hash: d6d7b5835435e07ceaf53143cdd0777a6d77fcf1c76fa0ac9135bcbc4e0ba702. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-block-relative-trace-characterizes-diagonal-projectivity

Claim/conventions: For central b and H<=G, kGb is relatively Delta H-projective iff b=Tr_H^G(a) for some a in (kGb)^H; defect groups are minimal p-subgroups satisfying this equality.

Examined dependencies: lem-group-algebra-bimodule-is-induced-from-the-diagonal, def-defect-group-and-numerical-defect-of-a-block, lem-relative-projectivity-mackey-intersections-for-finite-modules, thm-higman-criterion-for-relative-projectivity.

**accept** — Read full Webb Lemma 12.4.4/Theorem 12.4.5 pp240-241. A Mackey intersection with Delta G lies in Delta(xHx^-1), so restriction is relatively Delta H-projective up to inner conjugation. Evaluating Higman at central b gives a=alpha(b). Conversely left multiplication by H-fixed a has trace identity on the restricted module; its counit splitting combined with relative Delta G-projectivity and induction transitivity gives the double-group result. Minimal p-subgroups are precisely the vertices. The proof works over k without lattice reduction.

Receipt hash: 52737d51b27cb39c4d58d260f6ef730019c3ccf02101e60b54ddd9fcea31ece1. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## thm-vertices-of-modules-in-a-block-lie-in-a-defect-group

Claim/conventions: Every indecomposable module in $b$ has a vertex conjugate into a defect group of $b$.

Examined dependencies: lem-block-relative-trace-characterizes-diagonal-projectivity, thm-higman-criterion-for-relative-projectivity, lem-relative-projectivity-mackey-intersections-for-finite-modules.

**accept** — Multiplication by a is D-linear on M and its trace is multiplication by b=id_M. Higman and the accepted Mackey containment lemma give the claimed vertex containment for finite-dimensional indecomposable modules. Webb Corollary 12.4.6 provides the same complete argument.

Receipt hash: 4f495b12435f8b4c1e9c2799518d25ca0bdfea222dd940c62ac8493e00f3c8e3. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## prop-principal-block-has-sylow-defect

Claim/conventions: The principal block has a Sylow $p$-subgroup as defect group.

Examined dependencies: thm-vertices-of-modules-in-a-block-lie-in-a-defect-group, thm-higman-criterion-for-relative-projectivity, thm-sylow-second-theorem.

**accept** — For the trivial module every relative-trace endomorphism is multiplication by [G:H] times a scalar, so p-subgroup minimality picks exactly a Sylow subgroup. The principal idempotent acts as identity on this module; vertex containment and the read Sylow conjugacy/containment proof force the block defect to be Sylow.

Receipt hash: f11413255c6c00766c41ae553689daf10d6cf3c082087333cd4672b273614aea. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-projective-simple-symmetric-block-is-a-matrix-algebra

Claim/conventions: Let $k$ be a splitting field, $G$ finite, and $B=kGb$ for a primitive central block idempotent. If a simple left $B$-module is projective, then $B$ is a full matrix algebra over $k$ and that simple is its unique simple module.

Examined dependencies: def-block-bimodule-for-the-double-group, prop-group-algebra-in-defining-characteristic-is-a-symmetric-frobenius-algebra, cor-finitely-generated-projective-kg-modules-are-injective-and-conversely, cor-the-regular-module-decomposes-into-projective-indecomposables, thm-krull-schmidt-for-finite-dimensional-kg-modules, thm-wedderburn-artin-theorem, def-splitting-p-modular-system-for-a-finite-group.

**accept** — Read the coefficient form, finite projective/injective and regular decomposition suppliers and Wedderburn-Artin proof. Central factors are orthogonal and nondegenerate. The form pairs primitive corners eBf and fBe perfectly, giving the Hom-dimension/Cartan symmetry used here over the splitting field. P(S)=S makes both off-diagonal Hom families zero; projection to all S copies is then central, so block primitivity eliminates the complement. Only finite-dimensional injective splittings are used, which need finite linear algebra, not extension over arbitrary vector spaces.

Receipt hash: 29900ac507fa01ed03dcaf4ada9bb1aaeb175533c2586df368b67271739f6d9f. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## thm-defect-zero-blocks-are-simple-algebras

Claim/conventions: Over the splitting field k, defect zero is equivalent to kGb being a full matrix algebra, and equivalent to its unique simple module being projective. Include the equivalence with one simple projective block, not a statement that one ordinary character alone is the definition.

Examined dependencies: thm-vertices-of-modules-in-a-block-lie-in-a-defect-group, lem-block-relative-trace-characterizes-diagonal-projectivity, thm-higman-criterion-for-relative-projectivity, lem-projective-simple-symmetric-block-is-a-matrix-algebra, thm-wedderburn-artin-theorem, def-splitting-p-modular-system-for-a-finite-group.

**accept** — D=1 makes every finite B-module a summand of a finite free module by the Higman counit, so finite exact sequences split and B is semisimple. Primitivity and the splitting field leave one matrix factor. The preceding lemma handles a projective simple. Conversely B tensor B-op is a matrix algebra, and its group-algebra factor is b tensor b-star; its projective regular bimodule has trivial vertex. The opposite-algebra convention is correct and all free witnesses here are finite.

Receipt hash: c049b832896fcb38cf7b87d03a7308057d4f45a2fe15df8306f4f7a492734bef. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## def-brauer-homomorphism-for-a-p-subgroup

Claim/conventions: $\operatorname{Br}_P:(kG)^P\to kC_G(P)$ projects a $P$-fixed group-algebra element onto terms centralizing $P$.

Examined dependencies: def-p-blocks-by-primitive-central-idempotents.

**accept** — Coefficient truncation is a well-defined linear map from the conjugation-fixed algebra to kC_G(P), with the same finite characteristic-p splitting-field convention as the block definition. Algebra multiplicativity is explicitly deferred and is not presumed on all of kG.

Receipt hash: 990ab474120deb9159143e4d6a19cb26e3cf4f5f2cca391bad22d52f1c12b451. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## thm-brauer-homomorphism-is-multiplicative

Claim/conventions: The projection is an algebra homomorphism on $(kG)^P$.

Examined dependencies: def-brauer-homomorphism-for-a-p-subgroup, thm-p-group-fixed-point-congruence.

**accept** — For z centralizing P, the product coefficient is a sum over xy=z. P-fixed input coefficients are constant on diagonal P-orbits. The read orbit-stabilizer congruence proof kills each non-singleton orbit in characteristic p; singleton pairs give exactly the truncated product. The centralizer algebra is pointwise fixed and the map is identity there, hence unital and onto.

Receipt hash: c2de3a4d88b7f905e56902815c9f930ee05f93bee2079ec197544a1a293a3137. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-brauer-homomorphism-is-conjugation-equivariant

Claim/conventions: $\operatorname{Br}_{{}^gP}({}^gx)={}^g\operatorname{Br}_P(x)$.

Examined dependencies: def-brauer-homomorphism-for-a-p-subgroup.

**accept** — Conjugation by g bijects the fixed coefficient basis for P with that for gPg^-1 and carries C_G(P) to C_G(gPg^-1). Thus truncation commutes with conjugation, including zero coefficients and P=1.

Receipt hash: 26d7281754dc2045e5a5b8e07b2f2ae857e87b8708bf6a703adafae5162c2792. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## def-relative-brauer-homomorphism

Claim/conventions: For $Q\trianglelefteq P$, define $\operatorname{Br}_{P/Q}$ on the appropriate centralizer-fixed algebra.

Examined dependencies: def-brauer-homomorphism-for-a-p-subgroup, thm-brauer-homomorphism-is-multiplicative.

**accept** — Q normal P makes conjugation act on C_G(Q), with Q acting trivially. The P/Q fixed basis is exactly C_G(P); the earlier finite p-orbit product calculation therefore proves multiplicativity on the displayed fixed domain. This is a group-action quotient, not an incorrect quotient of centralizer groups.

Receipt hash: e1d91b098847634dc794809834f683024a14924d70e51bf25c338d2566a0c49f. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-relative-brauer-homomorphisms-are-transitive

Claim/conventions: The relative maps compose to the full Brauer map for nested normal steps.

Examined dependencies: def-relative-brauer-homomorphism, lem-brauer-homomorphism-is-conjugation-equivariant.

**accept** — The contract explicitly requires Q normal P as well as Q normal R normal P. Equivariance preserves P-fixedness after the first truncation, and C_G(P) is contained in C_G(R), so the two coefficient truncations equal the full one. No transitivity of subgroup normality is assumed.

Receipt hash: 0c6f4d33efa04cf7d8b1033b3499c3f47328bb0b68b43f294b8888a16e3a8fbf. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## prop-central-idempotents-under-the-brauer-homomorphism

Claim/conventions: The image of a central block idempotent decomposes into the precisely compatible local block idempotents.

Examined dependencies: thm-brauer-homomorphism-is-multiplicative, def-p-blocks-by-primitive-central-idempotents.

**accept** — Surjectivity of Br_P carries a central element to the centre of the target, and multiplicativity preserves idempotency. Finite splitting of the commutative centre identity gives orthogonal primitive central factors; multiplication by Br_P(b) selects exactly those e with product e. Zero image is allowed and no decomposition-matrix claim is used.

Receipt hash: 23fc57173aeaa4bb77ee15e61a20b326223f05c4280522aa56a1faf682a7e045. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-brauer-kernel-and-relative-trace-support

Claim/conventions: For a p-subgroup P, ker Br_P is the sum of Tr_Q^P((kG)^Q) for Q<P. If Br_P(Tr_H^G(a)) is nonzero, then P is conjugate into H.

Examined dependencies: def-brauer-homomorphism-for-a-p-subgroup, thm-brauer-homomorphism-is-multiplicative, thm-p-group-fixed-point-congruence.

**accept** — Read Webb Lemma 12.5.1 and its full Mackey-trace proof p244. Independently checked the coefficient orbit basis: a nonfixed basis orbit is Tr_stabilizer^P(x), while any proper-subgroup trace vanishes at each P-fixed basis element. Grouping Tr_H^G by P-orbits on G/H kills nonfixed cosets; survival requires P contained in a conjugate of H. The input a is understood H-fixed as required by the trace domain.

Receipt hash: 441909b69faafaab0f163be6ca9263207c772f7b5e056d93168dbf779167838e. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-block-centre-locality-and-trace-ideal-sums

Claim/conventions: The centre of a finite-dimensional indecomposable block algebra is local. If its identity is a sum of elements from finitely many ideals, one ideal contains the identity.

Examined dependencies: def-block-bimodule-for-the-double-group, thm-krull-schmidt-for-finite-dimensional-kg-modules.

**accept** — Fitting decomposition for central multiplication splits the block bimodule, so every central element is a unit or nilpotent. The finite commutative centre is therefore local; a finite sum of nonunits cannot be its identity. Central multiplication commutes through each relative trace, making its image an ideal. This supplies the exact unit-summand argument required downstream.

Receipt hash: ef9b12c7df7e376d6a9941ce4ba2804f664b2b25d9f89ac907a73c83c97f001b. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## thm-defect-groups-are-maximal-brauer-support

Claim/conventions: $D$ is a defect group of $b$ iff $\operatorname{Br}_D(b)\ne0$ and $D$ is maximal with that property.

Examined dependencies: lem-block-relative-trace-characterizes-diagonal-projectivity, lem-brauer-kernel-and-relative-trace-support, lem-block-centre-locality-and-trace-ideal-sums, thm-defect-groups-of-a-block-are-conjugate, lem-brauer-homomorphism-is-conjugation-equivariant.

**accept** — Read complete Webb Theorem 12.5.2 pp244-245. Multiplying b=sum Tr_Q^D(u_Q) by Tr_D^G(a)=b yields b=sum Tr_Q^G(a u_Q), with a in the block and D-fixed. Thus all trace ideals are inside the block centre; locality supplies a proper trace expression contradicting vertex minimality. The trace-support lemma bounds every surviving subgroup by a conjugate of D, and conjugation equivariance plus maximality gives the converse.

Receipt hash: 64c83ff17fde87dbe20da4cf8bb7514ef0562c7a908ddf8b58133d6892664d0f. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-finite-dimensional-algebras-admit-primitive-idempotent-decompositions

Claim/conventions: Every idempotent in a finite-dimensional unital k-algebra is a finite sum of pairwise orthogonal primitive idempotents; in particular this holds for the identity and for an idempotent regarded in a larger fixed algebra.

Examined dependencies: none.

**accept** — Dimension induction on eAe is valid: a nontrivial orthogonal split e=u+v gives strictly smaller corners because each omits the other nonzero idempotent. Recursively refined corners remain mutually orthogonal in A, and primitivity in a corner agrees with absence of further splits in A. The zero idempotent uses the empty sum. This is a complete finite algebra proof without external suppliers or AC.

Receipt hash: 0612d518c7e3c753d6d565c4c860691ba30bf549e61f0a444736dd90876ce337. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## def-brauer-pair-for-a-block

Claim/conventions: A $b$-Brauer pair is $(P,e)$ with $P$ a $p$-subgroup and $e$ a block of $kC_G(P)$ satisfying $\operatorname{Br}_P(b)e=e$.

Examined dependencies: prop-central-idempotents-under-the-brauer-homomorphism.

**accept** — The local block lies in kC_G(P), and the accepted central-idempotent image decomposition makes Br_P(b)e=e the exact compatibility condition. It neither asserts pair inclusion nor invokes Brauer correspondence. The splitting-system convention covers all subgroup algebras.

Receipt hash: b1f57bd172e0809af6251ec767bc988b717cc0b712dde07089549d25a5e65b88. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## def-normal-inclusion-of-brauer-pairs

Claim/conventions: Define $(Q,f)\trianglelefteq(P,e)$ through the relative Brauer map when $Q\trianglelefteq P$.

Examined dependencies: def-brauer-pair-for-a-block, def-relative-brauer-homomorphism.

**accept** — P-stability of f is explicitly required, so f belongs to the relative-map domain when Q normal P. The product with e has the correct centralizer codomain. Finite-chain inclusion is introduced only as a candidate until chain independence is proved; equality cases are allowed.

Receipt hash: 316cb2d54f2e86ace656e9b20a8bbd820f059b57544d56f32e881cfaae61a227. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-brauer-maps-kill-nontrivial-idempotent-orbit-sums

Claim/conventions: For Q normal P, a nontrivial P-orbit of primitive central idempotents in kC_G(Q) has orbit sum annihilated by Br_{P/Q}.

Examined dependencies: def-relative-brauer-homomorphism, thm-p-group-fixed-point-congruence.

**accept** — At a basis element centralizing P, all coefficients across a conjugation orbit are equal. A nontrivial orbit has p-power size divisible by p; its invariant orbit sum therefore truncates to zero. This uses the read finite p-group orbit clause and works in characteristic two without averaging division.

Receipt hash: d23647c7a770c7b5c66332b2d7a3960899809212fa973dce87412fbb4260bbee. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## thm-unique-normal-subpair-below-a-brauer-pair

Claim/conventions: For normal $Q\trianglelefteq P$, there is a unique compatible block $f$ below $(P,e)$.

Examined dependencies: def-normal-inclusion-of-brauer-pairs, lem-brauer-maps-kill-nontrivial-idempotent-orbit-sums, prop-central-idempotents-under-the-brauer-homomorphism.

**accept** — Partition the finite central primitive decomposition of kC_G(Q) into P-orbits. The accepted orbit lemma kills every nonfixed orbit sum. Fixed idempotents are central in the relative domain, whose Brauer map is onto, so their images are central orthogonal idempotents summing to one. Exactly one supports the primitive e, proving both existence and uniqueness with the required P-stability.

Receipt hash: 41f133c4149adc1ba5e0dda7a830d8dc64d13aac5411033c4c6df69b7f921875. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-brauer-images-of-primitive-idempotent-decompositions

Claim/conventions: For a p-subgroup R, the nonzero Brauer images of a primitive decomposition of 1 in $(kG)^R$ form a primitive decomposition of 1 in $kC_G(R). More generally, if Q is contained in P and i is primitive in $(kG)^P$, then the nonzero images under Br_Q of a primitive decomposition of i in $(kG)^Q$ form a primitive decomposition of Br_Q(i).

Examined dependencies: def-brauer-homomorphism-for-a-p-subgroup, thm-brauer-homomorphism-is-multiplicative, lem-finite-dimensional-algebras-admit-primitive-idempotent-decompositions, thm-bezout-identity-for-polynomials.

**accept** — Checked the complete local polynomial lift and read published polynomial Bezout. Factoring m=g(T)(T-1)^s gives coprime factors, q(0)=0, q(1)=1 and m dividing q(q-1); hence q(x) lifts the idempotent even in a noncommutative finite algebra. Applying this in each surjective corner proves primitive images are zero or primitive. Orthogonality and finite decomposition then prove both clauses, without assuming a nilpotent Brauer kernel or primitivity in the wrong fixed algebra.

Receipt hash: a31ddf210542e2dfae726ea2c63394463fb8f3dc7aa4868847cb23322b32bb3a. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## thm-brauer-pair-order-is-independent-of-the-normal-chain

Claim/conventions: For Brauer pairs $(Q,f)$ and $(P,e)$ with Q contained in P, iterated normal descent gives a well-defined inclusion relation $(Q,f)\le(P,e)$. The following are equivalent: (i) this inclusion holds; (ii) there are primitive idempotents i in $(kG)^P$ and j in $(kG)^Q$ with ij=j=ji, Br_P(i)e nonzero, and Br_Q(j)f nonzero; (iii) there is a finite chain of normal Brauer-pair inclusions from $(Q,f)$ to $(P,e)$; (iv) every primitive i in $(kG)^P$ with Br_P(i)e nonzero satisfies Br_Q(i)f nonzero; (v) some such i satisfies Br_Q(i)f=Br_Q(i) nonzero; (vi) some such i satisfies Br_Q(i)f nonzero. Consequently this relation is a conjugation-stable partial order.

Examined dependencies: thm-unique-normal-subpair-below-a-brauer-pair, lem-relative-brauer-homomorphisms-are-transitive, lem-finite-dimensional-algebras-admit-primitive-idempotent-decompositions, lem-brauer-images-of-primitive-idempotent-decompositions, thm-p-group-fixed-point-congruence, lem-brauer-kernel-and-relative-trace-support, lem-brauer-homomorphism-is-conjugation-equivariant, def-relative-brauer-homomorphism.

**accept** — Read complete AKO IV Theorem 2.10, Lemma 2.11 and Proposition 2.14 arguments pp180-183 through web text; direct PDF download had DNS failure and screenshots cache-missed. Checked the full local arbitrary-field adaptation: normal fixed-target primitivity, compatibility before transitivity, induction with Q<N_P(Q), coset trace identity, and the stabilizer-exactly-Q orbit basis. The corner trace ideal is proper since Br_P(i) survives, so Fitting makes its elements nilpotent and kills the residual idempotent. Existence then licenses transitivity and normal-chain identification. Primitive decomposition and unique strong support prove all six criteria; no criterion or algebraic-closure hypothesis is silently dropped.

Receipt hash: a4abad4273f878d4328f6b22c26faa8962010153ccf184f5f9d716a4360e5ad2. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## thm-every-brauer-pair-determines-a-unique-global-block

Claim/conventions: A local pair belongs to a unique block of $kG$.

Examined dependencies: thm-brauer-pair-order-is-independent-of-the-normal-chain, lem-brauer-homomorphism-is-conjugation-equivariant.

**accept** — Apply unique descent to subgroup 1. The normal characterization is exactly Br_P(b)e=e, and 1-fixed algebra is kG. Transitivity makes comparable pairs share this bottom block, and conjugation fixes central global b. No additional block correspondence theorem is consumed.

Receipt hash: 693d7d8364a0f1cc91a6aa5ab905c915efe0cf00447f5b58b8f6008c10107755. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-finite-dimensional-commutative-algebras-decompose-into-local-factors

Claim/conventions: Every finite-dimensional commutative unital k-algebra is a finite product of local k-algebras. For every ideal I, its quotient is the product of the corresponding factor quotients, with each nonzero factor quotient local.

Examined dependencies: none.

**accept** — The finite Fitting kernel/image ideals split the identity whenever multiplication has both stable pieces nonzero. In an indecomposable nonzero factor two maximal ideals would give such an element, so it is local; maximal ideals exist by choosing a proper ideal of largest finite vector-space dimension, without Zorn. Repeated idempotent splits terminate by dimension. Finite product quotients and unit lifts give the quotient assertion, with zero factors omitted.

Receipt hash: ead45350c2937079a12c3b256098727547781bfb4d7aeef58957d4c816e6d8aa. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-idempotents-lift-through-finite-commutative-algebra-quotients

Claim/conventions: For a finite-dimensional commutative k-algebra A and any ideal I, every idempotent of A/I lifts to an idempotent of A.

Examined dependencies: lem-finite-dimensional-commutative-algebras-decompose-into-local-factors.

**accept** — In each nonzero local quotient an idempotent is 0 or 1 because one of e and 1-e is invertible. The accepted finite local-factor decomposition lifts that finite tuple coordinatewise; coordinates with zero quotient can use zero. No nilpotent-kernel or algebraic-closure hypothesis is necessary.

Receipt hash: 15efbb5d19030e73410b225bb4920118c2b401bfb27c5bc19a799a452a15f283. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## thm-maximal-brauer-pairs-exist-and-are-conjugate

Claim/conventions: Maximal $b$-Brauer pairs exist and form one $G$-conjugacy class.

Examined dependencies: thm-every-brauer-pair-determines-a-unique-global-block, thm-defect-groups-are-maximal-brauer-support, lem-brauer-maps-kill-nontrivial-idempotent-orbit-sums, lem-idempotents-lift-through-finite-commutative-algebra-quotients, thm-brauer-homomorphism-is-multiplicative, lem-brauer-kernel-and-relative-trace-support, thm-sylow-second-theorem, thm-brauer-pair-order-is-independent-of-the-normal-chain, thm-defect-groups-of-a-block-are-conjugate, lem-brauer-homomorphism-is-conjugation-equivariant.

**accept** — Read complete Jacobsen Lemma 2.32 and Theorem 2.33, printed p18, via institutional full-text web result. Normal overgroup maps kill the normalizer orbit sum z; its support elements have P Sylow in their centralizers. Sylow conjugacy makes z the truncation of a global class sum combination. The accepted arbitrary-field lift gives central idempotent c. For the unique global block b, Br_P(b)z=z implies bc=b and hence Br_P(b)=z. If any proper T>P had Br_T(b) nonzero, R=N_T(P)>P would also survive by coefficient containment, contradicting relative vanishing. Thus P is maximal support. Defect conjugacy and the single N_G(P)-orbit of local blocks yield pair conjugacy. All missing normalizer steps are supplied by the accepted order proof.

Receipt hash: 5e559206766027b52be552b0891cb75854d473cea073ad62e0969f0b92f82c55. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## thm-maximal-brauer-pairs-detect-defect-groups

Claim/conventions: $(D,e)$ is maximal exactly when $D$ is a defect group of $b$.

Examined dependencies: thm-maximal-brauer-pairs-exist-and-are-conjugate, thm-defect-groups-are-maximal-brauer-support, thm-brauer-pair-order-is-independent-of-the-normal-chain.

**accept** — The preceding maximal-pair proof establishes that its subgroup is a defect group. Conversely a b-pair at a defect subgroup cannot be properly enlarged in subgroup by maximal Brauer support; the equal-subgroup case is equality by unique lower block. This proves the biconditional for b-pairs as stated.

Receipt hash: 4d8b0311fb2cb32b3488fd0c46a13bff0f183eed521e4a88c932c1e0dedc9209. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-restriction-to-a-containing-p-subgroup-retains-a-vertex

Claim/conventions: Let H be finite and k a field of characteristic p. Let M be a nonzero indecomposable finite-dimensional kH-module with vertex Q and source S at Q, and suppose Q≤R≤H with R a p-subgroup. Then Res_R^H M has a nonzero indecomposable direct summand U for which Q itself is a vertex.

Examined dependencies: def-vertex-and-source-of-an-indecomposable-module, thm-green-vertex-source-existence-and-conjugacy, lem-relative-projectivity-mackey-intersections-for-finite-modules, thm-krull-schmidt-for-finite-dimensional-kg-modules, thm-higman-criterion-for-relative-projectivity.

**accept** — Checked the full current six-step contract against Webb Theorem 11.6.1 and the published vertex/source definition. Source minimality, finite Krull–Schmidt extraction and two typed Mackey applications force Q=rTr^{-1} inside R by the two order bounds. The argument retains one summand and makes no unsupported claim about every restriction summand.

Receipt hash: 8ef4cda7379a9cdbb482aea2c92237fcf1e0d5efe402a744dd813a60dc6b5a8b. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-transitive-p-group-permutation-modules-have-point-stabilizer-vertices

Claim/conventions: Let k be any field of characteristic p, R a finite p-group, and L≤R. Then the transitive permutation kR-module k[R/L] is indecomposable and has vertex L.

Examined dependencies: def-relative-projectivity, thm-higman-criterion-for-relative-projectivity, def-vertex-and-source-of-an-indecomposable-module, lem-augmentation-ideal-of-a-finite-p-group-algebra-is-nilpotent.

**accept** — Read published augmentation-nilpotence proof and Webb Corollary 11.6.3 with its proof. A nonzero summand has fixed vectors; transitivity gives a one-dimensional fixed space and hence indecomposability. For T properly below L, the coefficient of Higman trace at L is constant on L-orbits of R/T, each of p-divisible size, contradicting the identity coefficient. This proves the vertex over every field of characteristic p.

Receipt hash: 11705784036517f8ba9427f61773a22fb275905f902bc24bdad5b87600ed1920. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-block-defect-is-an-intersection-of-two-sylow-subgroups

Claim/conventions: If D is a defect group and P is a Sylow p-subgroup containing D, then D=P intersection gPg^{-1} for some g in C_G(D).

Examined dependencies: thm-block-bimodule-has-a-diagonal-vertex, lem-relative-projectivity-mackey-intersections-for-finite-modules, lem-restriction-to-a-containing-p-subgroup-retains-a-vertex, lem-transitive-p-group-permutation-modules-have-point-stabilizer-vertices, thm-krull-schmidt-for-finite-dimensional-kg-modules, thm-green-vertex-source-existence-and-conjugacy.

**accept** — Checked the double-group action and stabilizer L_g explicitly. Retention supplies a summand with vertex Delta D; permutation indecomposability and Krull–Schmidt identify a double-coset summand. Vertex conjugacy by (r,s) yields h=rgs^{-1}, which centralizes each d in D, and its first projection gives D=P intersect hPh^{-1}. All conjugations occur in the claimed ambient groups.

Receipt hash: 1d666b9426fe5154fe1e44b610a5fdea42bd655ab9afed28fe774c8b2e5369c6. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## cor-normal-p-core-lies-in-every-block-defect-group

Claim/conventions: $O_p(G)$ is contained in every defect group.

Examined dependencies: lem-block-defect-is-an-intersection-of-two-sylow-subgroups, thm-sylow-second-theorem.

**accept** — The local definition of O_p uses only finitely many normal p-subgroups. Their products are normal p-subgroups by the finite product-order formula. For any Sylow P, NP is a p-subgroup containing P, hence N lies in P. Apply this elementary assertion to both Sylows in the accepted intersection theorem.

Receipt hash: 8d50c36ccb7ff8e95f2cf400e87cd7c6b2db5ed1cd22f06ec7b4731259a3f891. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## cor-block-defect-groups-are-p-radical

Claim/conventions: A defect group satisfies $D=O_p(N_G(D))$.

Examined dependencies: lem-block-defect-is-an-intersection-of-two-sylow-subgroups, thm-sylow-second-theorem, cor-normal-p-core-lies-in-every-block-defect-group.

**accept** — For N=N_G(D), extend a Sylow T of N containing D to P in G. Then P intersect N=T. The intersection theorem gives h in C_G(D), hence in N, so intersection with N yields D=T intersect hTh^{-1}. The preceding normal-core argument gives O_p(N) contained in D; normality of D in N gives the reverse inclusion. Recorded the implicit supplier for that definition and argument.

Receipt hash: 2a973d0150c947befcb3beabbe5666f7e6b21e42d99d1b774a4c04ea408ca41a. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## ex-defect-and-brauer-pairs-for-a4-in-characteristic-three

Claim/conventions: Work Jacobsen's block and pair calculation for $A_4$ at $p=3$.

Examined dependencies: thm-defect-groups-are-maximal-brauer-support, thm-brauer-pair-order-is-independent-of-the-normal-chain, thm-maximal-brauer-pairs-detect-defect-groups, thm-kg-is-local-iff-g-is-a-p-group.

**accept** — Read complete Jacobsen Example 2.12, printed p13, and independently checked the coefficients in characteristic three. The trivial V4 character orbit gives kC3, local by augmentation nilpotence; the three nontrivial character idempotents form a free C3 orbit and their crossed algebra has matrix units, hence is Mat3(k). Thus e and f are primitive. Each of the four Sylow C3 subgroups centralizes only itself and has unique local block 1; their pairs lie above (1,e), while (1,f) is maximal at 1.

Receipt hash: 7ff1dead5dc2daf464a9963296fe3e8caf50625a41ee77a66ab446157ad4c023. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## ex-brauer-pair-branching-for-c3-semidirect-d8-in-characteristic-two

Claim/conventions: Over a splitting field of characteristic two, compute the three local block idempotents for Q=C4 in G=C3 semidirect D8, and verify that only the P=D8-stable one lies below the indicated P-pair.

Examined dependencies: thm-brauer-pair-order-is-independent-of-the-normal-chain, thm-kg-is-local-iff-g-is-a-p-group.

**accept** — Verified the presentation defines C3 semidirect D8, with centralizers C3 times C4 and C2 as claimed. Fourier idempotents have denominator 3=1 in characteristic two. The local C4 and C2 factors follow from the published nilpotence/locality proof. Reflection swaps exactly e1 and e2; e0 survives at P with value 1. The accepted normal-subpair criterion excludes the other two. Jacobsen Example 2.13 was read but its faulty presentation is not used.

Receipt hash: 4bd618a27741a43ffefc45dccf484cf2cad73c6db426e659f2303dce21100cc6. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## ex-blocks-and-defect-groups-of-s3

Claim/conventions: Calculate the source's blocks and their defect groups at the indicated primes.

Examined dependencies: prop-principal-block-has-sylow-defect, thm-defect-zero-blocks-are-simple-algebras, thm-defect-groups-are-maximal-brauer-support, thm-kg-is-local-iff-g-is-a-p-group.

**accept** — Checked the direct group-algebra alternative. At p=2 the trivial C3-character orbit gives the local kC2 block e and the nontrivial two-character orbit gives Mat2(k), block f; Br_C2(e)=1 and Br_C2(f)=0. At p=3, write t for the transposition sum and u=1+(123)+(132). The centre has basis 1,t,u with t^2=u^2=tu=0, so it is local and has only block 1. The principal-block theorem then gives defect C3. No ordinary-character reduction is used.

Receipt hash: d65895651d641e96aa1f43a4c7690db80e56ae6751f80f57b499865a42abfdfc. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## ex-defect-zero-and-p-group-boundaries

Claim/conventions: Verify the defect-zero extreme and the unique full-defect block of a $p$-group within the source results.

Examined dependencies: prop-principal-block-has-sylow-defect, thm-defect-zero-blocks-are-simple-algebras, cor-a-finite-p-group-has-only-the-trivial-simple-module-in-characteristic-p, thm-kg-is-local-iff-g-is-a-p-group, thm-defect-groups-are-maximal-brauer-support.

**accept** — Read the published unique-simple corollary and its local-algebra supplier. Each nonzero finite block has a simple module, so a p-group has one block, principal with full defect. The trivial group gives k with defect 1. Repeating the S3 characteristic-two calculation gives the nontrivial ambient Mat2(k) block with Brauer image zero at C2. These are precisely the claimed boundary cases.

Receipt hash: 60e9d8d6c835d64e78370b7ef7af82c48fc089200f0af749b7e22f9c3fbd57da. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## def-generalized-cartan-matrix

Claim/conventions: Definition: $A=(a_{ij})$ has $a_{ii}=2$, $a_{ij}\in\mathbb Z_{\le0}$ for $i\ne j$, and $a_{ij}=0$ iff $a_{ji}=0$.

Examined dependencies: none.

**accept** — Checked Kleshchev Definition 1.2.1, printed p10, in the complete cached source. The finite nonempty index, integer entries, diagonal two and symmetric zero-pattern conditions match; indecomposability is a finite block-partition condition.

Receipt hash: 7e459f4b3dc7dce279548de6560507711598080fc863fa03f35326a398922e50. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## def-symmetrizable-generalized-cartan-matrix

Claim/conventions: Definition: $A$ is symmetrisable if $DA$ is symmetric for a positive diagonal $D$.

Examined dependencies: def-generalized-cartan-matrix.

**accept** — Read Kleshchev Lemmas 2.1.1–2.1.2 and their complete ratio proofs, pp26–27. With the present DA symmetric convention, d_j/d_i=a_ij/a_ji on edges; finite path propagation preserves positivity and gives rational normalization. The source epsilon convention is correctly inverted. Disconnected components are normalized separately.

Receipt hash: 3f792f0920acfdf62b215a4be486975066b2404fdbb7360efc981122f34be3cf. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## def-realization-of-a-generalized-cartan-matrix

Claim/conventions: Definition: a realisation $(\mathfrak h,\Pi,\Pi^\vee)$ has linearly independent simple roots/coroots and $\alpha_j(h_i)=a_{ij}$, with minimal dimension $2n-\operatorname{rank}A$.

Examined dependencies: def-generalized-cartan-matrix.

**accept** — Kleshchev Definition 1.2.2 fixes independent indexed roots and coroots in a complex space of dimension 2n-rank(A). The row-coroot pairing convention is explicit. Isomorphism means existence of a data-preserving linear map, not uniqueness of that map.

Receipt hash: 78632da0f821873f851a652e9dd6453a0b73797d4a5b2078ca5c924fa0cdded8. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism

Claim/conventions: Proposition: every GCM has a minimal realisation, unique by an isomorphism respecting root/coroot data.

Examined dependencies: def-realization-of-a-generalized-cartan-matrix.

**accept** — Read complete Kleshchev Proposition 1.2.4 pp11–12. Checked the corrected nonprincipal-pivot construction independently: extend the rank-r map from the n-dimensional coroot span onto C^n by a complement to its image. Its kernel has dimension n-r and lies in the coroot span. Two extensions are isomorphic by lifting a common complement and fixing that span. All selections are finite linear elimination, with no AC.

Receipt hash: 593c1408c1bad2bad92c45cd95392798365f25e95b12df4ee96f5ad75cde2b78. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## def-kac-moody-root-lattice-height-and-positive-cone

Claim/conventions: Q is the free abelian span of the independent alpha_i; Qplus is their nonnegative span, ht(sum k_i alpha_i)=sum k_i, and mu<=lambda means lambda-mu in Qplus.

Examined dependencies: def-realization-of-a-generalized-cartan-matrix.

**accept** — Simple-root linear independence makes the integer coordinates, height and positive cone unique. Qplus includes zero while root labels exclude zero; the induced order is antisymmetric. The accepted realization supplies precisely this independence.

Receipt hash: d260f6d6cc4f3d08e3ee2bb7cd36b9ad143d7c90af8113ce9e10f82e87d437fe. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-pbw-for-countably-presented-kac-moody-lie-algebras

Claim/conventions: For a complex Lie algebra with a supplied countable ordered basis, finite ordered monomials form a basis of its tensor-quotient enveloping algebra. In the finite-word graded algebras used here compatible bases of graded subalgebras and quotients can be selected without AC.

Examined dependencies: def-universal-enveloping-algebra-as-a-tensor-quotient.

**accept** — Read the published tensor-quotient definition. Checked the finite-word PBW reduction: length decreases in bracket terms, inversion count decreases in the swapped term, disjoint ambiguities commute, and the unique triple overlap is Jacobi. Induction therefore gives a normal-form inverse and injectivity. A supplied enumeration selects successive independent vectors without choice; finite graded kernels use canonical pivot elimination. No arbitrary unbased infinite-dimensional PBW clause is invoked.

Receipt hash: 7ce0fc66da13c3740ece93be34910a45911ab0a0bc4503a20034ba6c1363803f. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-free-lie-construction-for-finite-kac-moody-generators

Claim/conventions: The free Lie algebra on a finite-dimensional complex space is the formal bracket-word quotient by bilinearity, antisymmetry and Jacobi; it embeds into its tensor algebra and its enveloping algebra is that tensor algebra.

Examined dependencies: lem-pbw-for-countably-presented-kac-moody-lie-algebras, def-universal-enveloping-algebra-as-a-tensor-quotient.

**accept** — The formal bracket-word quotient has its universal property by recursive evaluation respecting the three relation families. Its finite-letter enumeration supplies the countable basis needed by the accepted PBW lemma. Universal properties give U(FreeLie(V))=T(V); PBW injectivity then identifies the free Lie algebra with the generated tensor subalgebra, without circularly assuming concrete freeness.

Receipt hash: fff0ab7b68bdbf4b63e8e6d4c181d0a39b78d91e1cf2e4d1baae4253dc72cca2. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## def-contragredient-lie-algebra-before-the-maximal-ideal-quotient

Claim/conventions: Definition: $\widetilde{\mathfrak g}(A)$ is generated by $\mathfrak h,e_i,f_i$ with Cartan and $[e_i,f_j]=\delta_{ij}h_i$ relations.

Examined dependencies: prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism, lem-free-lie-construction-for-finite-kac-moody-generators, def-kac-moody-root-lattice-height-and-positive-cone.

**accept** — All four relation families agree with Kleshchev Definition 1.3.1. The finite free-Lie construction supplies the quotient universal property. Cartan injectivity is explicitly deferred to the next proof, so the definition does not presuppose triangular decomposition.

Receipt hash: 22e6eae3d6d04783f7efce72847fa2d2b17c17e64bc24d5e492a9f5ea3120f95. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## prop-contragredient-algebra-has-a-triangular-decomposition

Claim/conventions: Proposition: $\widetilde{\mathfrak g}=\widetilde{\mathfrak n}^-\oplus\mathfrak h\oplus\widetilde{\mathfrak n}^+$ and is root-graded.

Examined dependencies: def-contragredient-lie-algebra-before-the-maximal-ideal-quotient, lem-free-lie-construction-for-finite-kac-moody-generators.

**accept** — Read full Kleshchev Theorem 1.3.3 pp13–16 and checked the tensor-word operators. Their commutators satisfy exactly the quotient relations. Evaluation at 1 separates the negative free half and Cartan term for every lambda; the sign involution supplies the positive half. Jacobi gives mixed-bracket spanning and the degree decomposition, with finite word spans. No Serre relation is used.

Receipt hash: c9c720212719cbf2648bc4a2c846e85ce478153d6d13e92d69280412deb991e5. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-the-sum-of-triangularly-disjoint-graded-ideals-is-disjoint-from-h

Claim/conventions: Lemma: ideals meeting $\mathfrak h$ trivially are closed under sums and their sum remains disjoint from $\mathfrak h$.

Examined dependencies: prop-contragredient-algebra-has-a-triangular-decomposition.

**accept** — Read the full weight lemma and Theorem 1.3.3(v). Every vector has finite weight support; avoiding finitely many hyperplanes and interpolation extract its components within an ideal. Since the zero component is exactly h, algebraic sums of disjoint ideals remain disjoint. Degree lowering by opposite simple generators shows the two sign intersections are ideals. The sum constructs the largest ideal without Zorn or AC.

Receipt hash: d190af3f7b47e69dbc218261957d2a8ef8f1033b8a34e7b3607efdd62399fc65. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## def-kac-moody-algebra-associated-to-a-gcm

Claim/conventions: Definition: $\mathfrak g(A)=\widetilde{\mathfrak g}(A)/\mathfrak r$, where $\mathfrak r$ is the maximal graded ideal meeting $\mathfrak h$ trivially.

Examined dependencies: lem-the-sum-of-triangularly-disjoint-graded-ideals-is-disjoint-from-h.

**accept** — The proved largest disjoint ideal makes the quotient and Cartan embedding well defined. Its invariance under the sign involution follows from maximality. Pulling back an ideal proves that a nonzero quotient ideal meets h; the contract correctly stops short of asserting simplicity for singular matrices.

Receipt hash: 916399e05a2d12b1d166647166887c2cedd4ad731bfcdb1a6be85292492f57f2. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## prop-kac-moody-root-spaces-are-finite-dimensional

Claim/conventions: Proposition: $\mathfrak g(A)=\mathfrak h\oplus\bigoplus_{\alpha\in\Delta}\mathfrak g_\alpha$ with finite-dimensional nonzero root spaces.

Examined dependencies: def-kac-moody-algebra-associated-to-a-gcm, prop-contragredient-algebra-has-a-triangular-decomposition.

**accept** — The homogeneous quotient preserves the triangular grading and finite spanning bound n^m from left-nested words. Repeated single letters vanish beyond degree one; e_i and f_i cannot vanish since their bracket is the embedded nonzero h_i. A reflection changes only one simple-root coordinate, so a nonsimple positive root cannot become negative if its image is a root. This last clause is explicitly conditional and is not a premature Weyl-symmetry assumption.

Receipt hash: cd86e17b580ee333c9a35238a25bf866c100e99f1e42abfed3afe1b2853aeae4. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-kac-moody-opposite-simple-centralizer-vanishes

Claim/conventions: An element of nplus commuting with every f_i is zero; likewise nminus and e_i.

Examined dependencies: def-kac-moody-algebra-associated-to-a-gcm, prop-kac-moody-root-spaces-are-finite-dimensional.

**accept** — For a homogeneous vector killed by all opposite simple generators, its positive-Borel adjoint span stays in the positive half. Jacobi moves each f_i past the raising operators, producing only Cartan actions and previously covered terms, so this span is an ideal. Maximality kills it. Weight interpolation and the sign involution handle arbitrary vectors and the negative half.

Receipt hash: 8532d45ed4aa1a8be1a89f18d3733cc07fffe57ba4c6e9f3be5b093b7d7feb43. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-serre-elements-vanish-before-serre-generation

Claim/conventions: For every GCM, (ad e_i)^(1-a_ij)e_j and its negative analogue vanish in the maximal-ideal quotient.

Examined dependencies: lem-kac-moody-opposite-simple-centralizer-vanishes, prop-kac-moody-root-spaces-are-finite-dimensional.

**accept** — Read the complete Kleshchev Lemma 3.1.1 proof p37. The elementary rank-one commutator identity makes e_i kill the negative Serre vector; e_k for k outside i,j commutes, while the j case either has at least two f_i brackets or uses the symmetric zero condition. The accepted opposite-centralizer lemma forces zero. This proves vanishing for every GCM without claiming generation.

Receipt hash: c49e518c8695c2032f992383192ab3d4746ceaa85bdf9d0acc24540770b96200. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## def-simple-reflections-and-the-kac-moody-weyl-group

Claim/conventions: Definition: $s_i(\lambda)=\lambda-\lambda(h_i)\alpha_i$ and $W=\langle s_i\rangle$.

Examined dependencies: def-realization-of-a-generalized-cartan-matrix, def-kac-moody-root-lattice-height-and-positive-cone.

**accept** — The realization gives alpha_i(h_i)=2, so the stated operators square to identity. Their dual formula follows by direct evaluation and their integer coefficients preserve Q. This defines W independently of root preservation or a Coxeter presentation.

Receipt hash: 143084222fe0e793622aa203180d42155426af69e96b03d3f28594fa323d3f47. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## prop-the-weyl-group-preserves-roots-and-root-multiplicities

Claim/conventions: Proposition: $W$ permutes $\Delta$ and preserves $\dim\mathfrak g_\alpha$.

Examined dependencies: def-simple-reflections-and-the-kac-moody-weyl-group, lem-serre-elements-vanish-before-serre-generation, prop-kac-moody-root-spaces-are-finite-dimensional.

**accept** — Read complete Kleshchev Lemma 3.2.3 pp41–42 and the preceding derivation argument. Serre vanishing gives adjoint local nilpotence on each generator, and the binomial derivation formula extends it to each finite bracket. Finite exponentials are invertible Lie automorphisms; the rank-one computation sends h_i to -h_i and fixes ker(alpha_i), hence sends each root space bijectively to its reflected space. No complete reducibility or Serre generation is required. Form preservation is the direct matrix identity for DA.

Receipt hash: 408bf7dd6fbcfb96449c7304664431a2f66170d172b9bfaaefb2abaee4630aeb. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra

Claim/conventions: Theorem: a symmetrisable $\mathfrak g(A)$ has the standard nondegenerate invariant form after the necessary Cartan extension.

Examined dependencies: def-symmetrizable-generalized-cartan-matrix, prop-kac-moody-root-spaces-are-finite-dimensional, lem-kac-moody-opposite-simple-centralizer-vanishes.

**accept** — Read complete Kleshchev Lemma 2.2.1 and Theorem 2.2.3 pp28–32. The present normalization is epsilon_i=1/d_i. Minimal realization puts the common root annihilator in the coroot span, proving the Cartan extension nondegenerate. The four-term Jacobi identity gives independence of both bracket expressions at each new height; the separate N,-N,0 calculation supplies the remaining invariance. The radical is an ideal disjoint from h and hence zero. Orthogonality, finite perfect opposite pairings and the bracket formula follow. This uses maximality, not Serre generation.

Receipt hash: cd4fb9d5f2c0318c1181c79f8e6bca859ae0139ec011d2579f611dec53926616. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## def-kac-moody-category-o

Claim/conventions: Definition: weight modules with finite-dimensional weight spaces and support in finitely many downward cones form the Kac--Moody version of $\mathcal O$.

Examined dependencies: prop-kac-moody-root-spaces-are-finite-dimensional, def-kac-moody-root-lattice-height-and-positive-cone.

**accept** — Read Kleshchev section 9.1 pp116–118. The support convention and finite weight spaces agree. For a fixed weight, each containing cone bounds every nonnegative coordinate of a positive shift, so only finitely many positive-root spaces can act. Finite weight interpolation proves stability under submodules and quotients. No finite-length or finite-generation hypothesis is added.

Receipt hash: fbf8fadd7173f5bdaab2e0fbc6fa0c0590dd9410eef07e87b1a6a1b3cb656e57. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## def-kac-moody-verma-module

Claim/conventions: Definition: $M_A(\lambda)=U\mathfrak g(A)\otimes_{U\mathfrak b}\mathbb C_\lambda$.

Examined dependencies: def-kac-moody-category-o, lem-pbw-for-countably-presented-kac-moody-lie-algebras, def-universal-enveloping-algebra-as-a-tensor-quotient.

**accept** — The Borel character is well defined because positive brackets stay positive and Cartan acts by lambda. Compatible countable PBW bases give U(g) free as a right U(b)-module with negative monomial basis, hence identify M(lambda) with U(nminus). Finite root-coordinate bounds yield finite weight spaces and one-dimensional top. The same construction on the unquotiented triangular algebra supplies Mtilde without a finite-dimensional Verma theorem.

Receipt hash: f31b8178e9a39c840db5e5e1f703d75d42abc4abcdc4e134531723d9956f9701. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## def-generalized-casimir-on-restricted-kac-moody-modules

Claim/conventions: Define restricted modules, choose $\rho(h_i)=1$, and define the Cartan term plus the root-degree dual-basis sum $\Omega$.

Examined dependencies: thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra, prop-kac-moody-root-spaces-are-finite-dimensional, def-universal-enveloping-algebra-as-a-tensor-quotient.

**accept** — Read Kleshchev Definition 2.3.3 and formulas through (2.20), pp33–34. Coroot independence permits rho by finite extension. Perfect finite opposite-root pairings define canonical tensors; only finitely many act on each vector, giving a linear operator independent of all basis choices. The finite Cartan term and its normalization are correct. The contract asserts no infinite element of U(g) and needs no simultaneous arbitrary basis choice.

Receipt hash: 886396ada1309efd076318e1ebe33ffbc0d01b38779c3bd238e821a53db009cc. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## thm-generalized-kac-moody-casimir-is-central-and-scalar-on-highest-weight-modules

Claim/conventions: Prove the dual-basis commutator cancellation, centrality of $\Omega$, and its scalar $(\lambda+2\rho\mid\lambda)$ on a module generated by a highest-weight vector.

Examined dependencies: def-generalized-casimir-on-restricted-kac-moody-modules, thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra.

**accept** — Read complete Lemma 2.3.1, Theorem 2.3.5 and Corollary 2.3.6 pp32–36. Pairing with opposite factors proves the tensor identity. Reindexing positive roots cancels the nonboundary terms; for e_i the boundary is -2nu^{-1}(alpha_i)e_i, and for f_i it is 2f_i nu^{-1}(alpha_i). These cancel the finite Cartan and rho commutators. Restrictedness makes both expansions finite on each vector. Highest-vector evaluation gives the stated scalar, propagated by centrality.

Receipt hash: 92a52393af636868e7c844dc63020218c9cace0288aba9bd94f2e4c8bb8c939e. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-bounded-above-kac-moody-weight-modules-are-generated-by-primitive-vectors

Claim/conventions: Define a primitive vector as a highest-weight vector modulo a submodule. Prove that an object of $\mathcal O$ is generated by primitive vectors under $U(\mathfrak n^-)$.

Examined dependencies: def-kac-moody-category-o, def-kac-moody-verma-module, lem-pbw-for-countably-presented-kac-moody-lie-algebras.

**accept** — Read full Kleshchev Lemma 9.1.3 p118. PBW and the weight-vector condition absorb Cartan factors to identify U(g)nplus v with U(nminus)U_0(nplus)v. Membership is exactly failure of a nonzero highest class modulo a submodule. Every resulting positive action raises weight; the finite support interval above any fixed weight supports induction. This proves negative-half generation without finite composition series.

Receipt hash: b1979a5da7c6c3c35d3835f8f81f62f767d4cb5fcc5cb160c96ee3ae4db246de. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-enveloping-quotient-kernels-and-augmentation-intersections

Claim/conventions: For a Lie quotient prove $\ker U(\theta)=\mathfrak r U(\mathfrak g)$; for a subalgebra prove $\mathfrak r\cap\mathfrak r U_0(\mathfrak g)=[\mathfrak r,\mathfrak r]$.

Examined dependencies: lem-pbw-for-countably-presented-kac-moody-lie-algebras, def-universal-enveloping-algebra-as-a-tensor-quotient.

**accept** — Read complete Kleshchev Lemmas 9.3.1–9.3.3 pp122–124 and checked the current corrected proof. Universal-property inverse maps give the ideal kernel. Abelianization proves l intersect U_0(l)^2=[l,l]. The left U(r)-module decomposition separates complement monomials, so rU_0(g) has first component U_0(r)^2 and its intersection with r is [r,r]. This avoids the source claim that ordered words of length at least two span the product, which ignores degree-one commutators. Compatible bases are supplied as stated.

Receipt hash: c439de2e06576baa125e0d8136e4a9e777a3b0b7dbf16dfc7840ed231b6a095a. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-kac-moody-relation-module-embeds-in-verma-modules-and-obeys-the-casimir-constraint

Claim/conventions: Construct $\mathfrak r^-/[\mathfrak r^-,\mathfrak r^-]\hookrightarrow\bigoplus_i M(-\alpha_i)$ using the free contragredient negative half. Prove injectivity with the augmentation lemma; primitive generation and Casimir imply that ideal generators have $(\alpha\mid\alpha)=2(\rho\mid\alpha)$.

Examined dependencies: lem-enveloping-quotient-kernels-and-augmentation-intersections, lem-bounded-above-kac-moody-weight-modules-are-generated-by-primitive-vectors, thm-generalized-kac-moody-casimir-is-central-and-scalar-on-highest-weight-modules, prop-contragredient-algebra-has-a-triangular-decomposition, def-kac-moody-verma-module.

**accept** — Read complete Kleshchev Proposition 9.3.4 pp124–125. The last-letter decomposition uses associative coefficients and makes each f_i v_0 a highest vector. Base change gives the sum of M(-alpha_i). For x in gtilde, x v_0 lies in the augmentation submodule, so the term a x v_0 vanishes after base change; this proves equivariance. The corrected augmentation lemma proves injectivity. All summands have Casimir zero, forcing the quadratic condition on primitive weights. Minimum positive height lifts generators from the abelianization to the ideal. No formal-character or later presentation supplier is used.

Receipt hash: e66b9ca031c132bde74c3d8db8d30c89eb6977d70aaf85531f08165211470126. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-the-serre-quotient-has-weyl-symmetry-and-no-residual-kac-moody-kernel

Claim/conventions: First prove that Serre elements vanish in the maximal-ideal quotient, using adjoint rank-one calculations and the no-commuting-vector consequence of maximality. On the quotient by Serre elements, prove local nilpotence and use finite exponential operators for Weyl symmetry. A minimum-height residual-kernel weight contradicts the preceding Casimir constraint.

Examined dependencies: lem-kac-moody-relation-module-embeds-in-verma-modules-and-obeys-the-casimir-constraint, lem-serre-elements-vanish-before-serre-generation, def-simple-reflections-and-the-kac-moody-weyl-group, thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra.

**accept** — Read complete Kleshchev Theorem 9.3.5 pp125–126. Exponential automorphisms are constructed on both quotients from their relations and commute with the map, so preserve its kernel. At minimum surviving positive height, lower relation generators have died; the accepted generating constraint therefore forces positive squared norm. The degree cannot be a pure nonsimple multiple, and reflected degrees retain another positive coordinate. Minimality forces all alpha(h_i)<=0, contradicting that norm. This is independent of the still-unproved quotient identification.

Receipt hash: 4ab56c67485236010174dafe446dadf3feb68390328df955949210bb6110fc01. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## thm-serre-presentation-of-a-kac-moody-algebra

Claim/conventions: Theorem: for symmetrizable $A$, the ideals $\mathfrak r\cap\widetilde{\mathfrak n}^{\pm}$ are generated by the corresponding Serre elements, so $\mathfrak g(A)$ has the Chevalley--Serre presentation.

Examined dependencies: lem-the-serre-quotient-has-weyl-symmetry-and-no-residual-kac-moody-kernel, lem-pbw-for-countably-presented-kac-moody-lie-algebras.

**accept** — The preceding lemma kills both residual halves by the sign involution. Each sign ideal generated by Serre vectors is stable under opposite simple brackets by the same rank-one calculation used for vanishing; Jacobi propagates this stability. Thus generation is within the respective free halves as claimed, as well as in the whole algebra. The previously proved triangular decomposition and based PBW supply the enveloping multiplication isomorphism. Symmetrizability over C is retained.

Receipt hash: 6f3f91c24fc4a7fc90b2adefc76e9d95fb165656c9f76c2000d0779442971c4c. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## def-real-and-imaginary-kac-moody-roots

Claim/conventions: Definition: real roots are $W\Pi$; all other roots are imaginary, with positive/negative sign inherited from $Q^+$.

Examined dependencies: prop-the-weyl-group-preserves-roots-and-root-multiplicities.

**accept** — Weyl root preservation makes W Pi a subset of the roots, so the complement definition is well defined for every GCM. The inherited one-sign decomposition is retained. No unproved identification with signs of squared lengths is built into the terminology.

Receipt hash: d0de9f272414de5cf39c56f9d74da0d1f03290fadef3f35a82fb012c8ccbcd1f. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## prop-real-root-spaces-are-one-dimensional-sl2-roots

Claim/conventions: Proposition: each real root has multiplicity one and an associated $\mathfrak{sl}_2$ triple.

Examined dependencies: def-real-and-imaginary-kac-moody-roots, prop-the-weyl-group-preserves-roots-and-root-multiplicities, prop-kac-moody-root-spaces-are-finite-dimensional.

**accept** — Transport of the nonzero simple sl2 triple by the accepted Weyl automorphisms preserves all three brackets and the one-dimensional root spaces. Applying the inverse transporter excludes other scalar multiples by the pure simple-degree result. The bracket line [g_alpha,g_minusalpha] is intrinsic; its unique vector normalized by alpha(h)=2 makes a named coroot independent of the transporter.

Receipt hash: 748902eb43b93ec472c628b0e20f92e74955e1123664f3f0cafbd60815407e14. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-strict-linear-alternative-for-gcm-trichotomy

Claim/conventions: For finitely many real row vectors v_i, there is x with v_i x>0 for every i iff no nonzero nonnegative linear combination of the v_i is zero. Consequently if u>=0 and C^t u>=0 imply u=0, there is v>0 with Cv<0.

Examined dependencies: thm-euclidean-heine-borel-pseudocompactness-and-extreme-values, thm-heine-borel-rn, thm-compactness-under-continuous-maps, thm-compactness-agrees-with-metric-compactness, thm-nested-interval-property, lem-closed-subset-of-a-compact-space-is-compact, lem-compactness-is-intrinsic.

**accept** — Checked the necessary published closed-bounded implies compact and extreme-value clauses, including Heine–Borel deterministic bisection, nested-interval construction, closed-subset compactness, intrinsic compactness and metric/topological agreement. The finite convex hull is the continuous image of a compact simplex. Its nearest nonzero point pairs positively with every vertex by the one-sided quadratic derivative; conversely a nonnegative dependence contradicts strict positivity. Rows of -C together with coordinate rows give the consequence. Empty row families are vacuous. No pseudocompact converse or AC is used.

Receipt hash: f5d697316fc08718f70d1036508cc9949ddab7b916dc84eee936f3d48cb37ecb. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms

Claim/conventions: Theorem (over real vectors): for an indecomposable GCM A exactly one of the following mutually exclusive clauses holds, and this clause defines its type. Finite type: det A is nonzero, some u>0 has Au>0, and Au>=0 implies u>0 or u=0. Affine type: corank A=1, some u>0 has Au=0, and Au>=0 implies Au=0; equivalently K_A={x:Ax>=0}=ker A=Ru, so the positive null ray is unique. Indefinite type: some u>0 has Au<0, and x>=0 and Ax>=0 imply x=0. A and A^t have the same type. Finite- and affine-type GCMs are symmetrisable. If A is symmetrisable and B=DA is its symmetric positive-diagonal symmetrisation, then finite type is equivalent to B positive definite, affine type to B positive semidefinite of corank one with kernel Ru, and indefinite type to B indefinite.

Examined dependencies: def-generalized-cartan-matrix, def-symmetrizable-generalized-cartan-matrix, lem-strict-linear-alternative-for-gcm-trichotomy.

**accept** — Read complete Kleshchev 4.1.6–4.1.12 pp52–57 and cycle proof 4.2.2–4.2.3 pp58–60. Zero-coordinate propagation and the cone segment argument give either a positive cone or a one-dimensional null line. Finite perturbations give strict positivity; the accepted linear alternative gives transpose invariance and the remaining negative case. For symmetrizability use simple chordless cycles: rescaling by a positive vector and summing row inequalities forces every cycle edge weight to be one by AM–GM; a proper connected principal component in affine type has a boundary edge and hence is finite, so the affine cycle must be the whole graph. Acyclic graphs admit the ratio symmetrizer. The displayed quadratic identity then proves all three form signatures directly. Source cycle wording with repeated walks is unnecessary; only simple cycles enter this argument.

Receipt hash: f29f267d891d90e9ca0c3dc011d40358d064f72caf6ef3a7edc51e363514d68e. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-finite-type-kac-moody-roots-descend-to-simple-roots

Claim/conventions: For a finite-type GCM A, every root of g(A) is Weyl-conjugate to a simple root, and there are finitely many roots. Every root space has dimension one, and g(A) is finite-dimensional.

Examined dependencies: thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms, thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra, prop-the-weyl-group-preserves-roots-and-root-multiplicities, prop-kac-moody-root-spaces-are-finite-dimensional, prop-real-root-spaces-are-one-dimensional-sl2-roots.

**accept** — Read complete Kleshchev Proposition 4.3.2 pp63–64, then checked the local height-descent proof. Positive norm supplies a simple coroot with positive integral pairing; a nonsimple root retains another positive coordinate after reflection, so its height strictly decreases. All roots are real. Their norms lie in a finite set, and Cauchy–Schwarz against the finite dual basis bounds each integer coordinate, making the roots finite. The decomposition then proves finite dimension without a compact orthogonal-group or finite-Dynkin classification argument. Initial receipt write hit a transient global Step-3a closure change; scope recheck returned closed before this write.

Receipt hash: d3b16190165007b40cbff738021eec5550a75e311cc2df02a00df138a552a6ba. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## lem-nonsingular-indecomposable-kac-moody-algebras-are-simple

Claim/conventions: If A is an indecomposable GCM with det A nonzero, then g(A) is nonabelian and has no nonzero proper Lie ideal. In particular every indecomposable finite-type component is simple. A Lie ideal means a linear subspace J with [g,J] contained in J; simple here means nonabelian with no nonzero proper ideal.

Examined dependencies: def-kac-moody-algebra-associated-to-a-gcm, prop-kac-moody-root-spaces-are-finite-dimensional, prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism, def-generalized-cartan-matrix.

**accept** — Read the complete simplicity direction of Kleshchev Proposition 1.4.8(i) pp19–20. Maximality makes a nonzero ideal meet h. Nonsingularity makes the simple roots a basis of hstar, detecting a nonzero Cartan element; brackets then include a full simple triple. Connectedness propagates all triples, and the coroots span h. Thus the ideal is all of g, which is nonabelian. No classification or radical theorem is needed.

Receipt hash: 677b5741bdcb1f379ceecb5cfa278d2c2e859e0d5e0bfd37b11319210e5ff84c. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## prop-finite-type-kac-moody-algebras-recover-the-dg-semisimple-algebras

Claim/conventions: For a finite-type Cartan matrix A over C, g(A) is finite-dimensional and is a direct sum of nonabelian simple Lie algebras, one for each indecomposable component (thus semisimple). Its simple-root/coroot pairing is A, with rows indexing coroots. Intrinsically, g(A) is the universal complex Lie algebra on its minimal-realisation Cartan space and Chevalley generators, subject to [h,h']=0, [h,e_i]=alpha_i(h)e_i, [h,f_i]=-alpha_i(h)f_i, [e_i,f_j]=delta_ij h_i, and (ad e_i)^(1-a_ij)e_j=(ad f_i)^(1-a_ij)f_j=0 for i not equal to j; no finite-Dynkin classification theorem is assumed.

Examined dependencies: thm-serre-presentation-of-a-kac-moody-algebra, thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms, lem-finite-type-kac-moody-roots-descend-to-simple-roots, lem-nonsingular-indecomposable-kac-moody-algebras-are-simple.

**accept** — All actual claims are intrinsic: finite dimension follows from the accepted descent lemma and each connected component is simple. Zero cross-component Cartan entries and the degree-two Serre relations make distinct components commute. Maps between the full presentation and the direct sum of component presentations are mutually inverse on every generator. This establishes a direct sum, not merely a quotient. The row-coroot pairing remains A, and no unbuilt DG theorem supplies the result.

Receipt hash: a94fc80071dddf9db7e7fd6b1981fc7e0e390ae3582e6d146b1827adae6f5ee1. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## ex-rank-one-gcm-recovers-sl2

Claim/conventions: Example: $A=(2)$ gives $\mathfrak{sl}_2$.

Examined dependencies: thm-serre-presentation-of-a-kac-moody-algebra.

**accept** — The rank-one Cartan is one-dimensional and there are no off-diagonal relations. The three defining brackets close the span of e,f,h. Their images E12,E21 and diag(1,-1) are linearly independent and satisfy all relations, proving the asserted isomorphism.

Receipt hash: 8bcab1f6b997f4d2b8bc1c281ae3e2634019f456d9261e6d28e1bd16f54cda1c. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## ex-the-a2-serre-relations

Claim/conventions: Example: write the two quadratic Serre relations and recover the finite roots.

Examined dependencies: thm-serre-presentation-of-a-kac-moody-algebra.

**accept** — Both positive quadratic Serre relations make [e1,e2] commute with e1 and e2; the negative half is identical. The triangular decomposition bounds dimension by eight. E12,E23,E13, their opposites and the two diagonal coroots are independent matrix images satisfying all relations, so equality holds. The six roots are +/-alpha1, +/-alpha2, +/-(alpha1+alpha2), with the stated row-coroot matrix.

Receipt hash: 0b9fd5b4e886fa77f09ee31b47ec836b882bae468a5407c2bfd34a2b2c358a23. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## ex-the-affine-a1-gcm-has-singular-rank-one-realization-data

Claim/conventions: Example: $\begin{psmallmatrix}2&-2\\-2&2\end{psmallmatrix}$ requires a Cartan of dimension three.

Examined dependencies: prop-minimal-realizations-exist-and-are-unique-up-to-isomorphism.

**accept** — The matrix has rank one and n=2, so the minimal dimension is three. In the displayed h0,h1,d basis, alpha0=(2,-2,1) and alpha1=(-2,2,0) are independent, have the correct four pairings, and both kill h0+h1. This is a direct singular-realization check.

Receipt hash: 216dff4cd0b9e022894edf3ea0c7490b8768f5b6add3e145df67b3c8ec2a566d. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## ex-a-symmetrizable-indefinite-rank-two-gcm

Claim/conventions: Example: $\begin{psmallmatrix}2&-3\\-3&2\end{psmallmatrix}$ has imaginary roots.

Examined dependencies: thm-serre-presentation-of-a-kac-moody-algebra, thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra, def-real-and-imaginary-kac-moody-roots, thm-finite-affine-indefinite-trichotomy-for-indecomposable-gcms, prop-the-weyl-group-preserves-roots-and-root-multiplicities.

**accept** — The symmetric matrix sends (1,1) to (-1,-1) and has determinant -5. Positive Serre generators have degree five, so their positive-half ideal cannot kill the free nonzero degree-(1,1) bracket. Its squared norm is 2+2-6=-2. Weyl form preservation gives every real root positive norm, hence this surviving root is imaginary.

Receipt hash: 5f368733884f708e3c1ab6f7c0db9b07354808cbe705ae25ce2f0e966a1de6d6. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## cex-a-matrix-with-one-zero-off-diagonal-is-not-a-gcm

Claim/conventions: Counterexample violating $a_{ij}=0\Leftrightarrow a_{ji}=0$.

Examined dependencies: def-generalized-cartan-matrix.

**accept** — The displayed matrix has diagonal two and nonpositive integral off-diagonal entries, but a12=0 and a21=-1 violate exactly the symmetric-zero axiom. It is a valid counterexample and is not used as a supplier.

Receipt hash: 16fa315b7305780469e730733fcedb6567e83c26a4f1fd5e0987d58cce2221b7. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.

## cex-imaginary-root-spaces-need-not-have-multiplicity-one

Claim/conventions: Counterexample in affine type: multiples of $\delta$ have rank-sized multiplicity.

Examined dependencies: thm-serre-presentation-of-a-kac-moody-algebra, def-real-and-imaginary-kac-moody-roots, thm-invariant-bilinear-form-for-a-symmetrizable-kac-moody-algebra, prop-the-weyl-group-preserves-roots-and-root-multiplicities, def-kac-moody-algebra-associated-to-a-gcm.

**accept** — Read complete Kleshchev recognition Proposition 1.5.1, cocycle Lemma 1.5.3 and loop example pp20–25. Checked the sl3 adaptation: the central cocycle satisfies Jacobi by trace invariance and the degree sum; the displayed e0,f0 bracket is c-E11+E33. Constant matrix commutators generate sl3, then tE31 and t^-1 E13 generate their full degree-one halves, and brackets generate every degree. Independent simple roots on the four-dimensional Cartan give the required realization. Weight interpolation extracts an ideal vector; opposite matrix brackets or nondegenerate trace pairing on diagonals produce a nonzero Cartan element. Recognition therefore identifies the model with g(A). For each nonzero m, m delta has a two-dimensional diagonal root space and norm zero, so is imaginary. No RL-13 supplier is used.

Receipt hash: 96f5e01d51b96af4b366f1dca87e0f972b6b7805040c160514de72126cf667b2. Next: next prerequisite-ready item; no retry of an escalation. Final mechanical checks pending.
## Group result and dependency reconciliation

All 98 assigned items were adjudicated separately in prerequisite order and recorded before the next item: Haar 14 A + 4 B, blocks 37 A + 4 B, Kac–Moody 33 A + 6 B. All are accepted at confidence 1. No mathematical contract was changed, no claim was dropped, and no owner receipt or escalation was overwritten. The current Step-3a receipts remain sufficient. The entries above record examined dependencies, conventions and proof evidence; acceptance concerns scaffold contracts, not future authored proofs.

Both consumer-batch inputs remain `[]`: neither declared dependencies nor actual proof routes require another batch in this frontier, including the other owned batch. Direct computations supply the block examples and affine A2 witness; no Brauer First, future DG presentation, RL-13 loop theorem, RL-14 integrability theorem or RL-15 character theorem is imported. The unified ledger was refreshed with `--require-reviewed`. All six page metadata and ordered item inventories agree with the canonical plan.

The 46 current declines were refreshed with the required scope-decisions command. All existing `stands` dispositions remain justified by the checked proof routes and current destination pages; their evidence now points to this report. No owner ruling was invented. The character-theoretic defect/induction interfaces, general Coxeter/string/imaginary-cone theory and Lp density remain outside these particular proofs. Accepted items and coverage claims were left unchanged.

Choice audit: Haar cutoffs inherit DC, and product compactness uses AC; the relevant contracts explicitly state AC and declare `def-axiom-of-choice`, propagating it to consumers. Direct discrete/finite counting remains choice-free. Finite-module and finite-word/countably based Kac–Moody arguments introduce no arbitrary basis or selection principle. Euclidean minimization uses the deterministic ZF Heine–Borel proof. No Recorded result proves a replacement.

Published debt: the historical RMK support defect in the batch notes is already corrected in the current `items/thm-rmk-functional-outer-content-is-an-outer-measure.md`; its compact-support clause was read. No new mathematical published defect was established in the necessary clauses examined here. Older unrelated published-consumer findings remain in their existing canonical records; this report does not claim a whole-library audit or close those findings.

## Source reading

The complete relevant arguments were read, rather than inferred from source stamps:

- Pedersen, pp.2–5: https://home.agh.edu.pl/~rudol/Paradoxes/haarintegral.pdf.
- Webb, Theorem 5.2.1, Theorem 11.6.1 and Corollary 11.6.3, and the required Chapter 12 trace/support arguments: https://www-users.cse.umn.edu/~webb/RepBook/RepBookLatex.pdf.
- Jacobsen, Example 2.12 and Lemma 2.32–Theorem 2.33: https://www.math.ku.dk/bibliotek/arkivet/phd-theses/phd14mwj.pdf.
- AKO, Theorem 2.10, Lemma 2.11 and Proposition 2.14, printed pp.180–183: https://www.math.ku.dk/english/research/conferences/2013/groups2013/AschbacherKessarOliver.pdf.
- Kleshchev, realization/triangular construction pp.10–20, loop recognition pp.20–25, invariant form/Casimir pp.26–36, Serre vanishing and Weyl transport pp.37–42, trichotomy/cycle argument pp.52–60, finite-type Proposition 4.3.2 pp.63–64, category O pp.116–118, and complete relation-module/Serre argument pp.122–126: https://darkwing.uoregon.edu/~klesh/teaching/IDLALN3.pdf.

Webb and Kleshchev full texts were available in existing local caches `/tmp/p2-proofread.KKnZYj/webb.txt` and `/tmp/tmp.Lbe2JSWVOC/klesh.txt`. Fresh Kleshchev opens timed out twice; authoritative web search recovered the author-hosted PDF listing, while the complete mathematical reading used cached text. AKO/Jacobsen/Pedersen relevant text was recovered through the web tool; unsuccessful curl DNS and PDF screenshot/cache attempts were not treated as proof. The ResearchGate original remains a documented drop, supported by independently checked local alternatives and Pedersen; this audit does not claim to have read that unavailable book. The source's false ordered-PBW spanning sentence, adjoint-versus-associative coefficient wording and discarded C4 calculation were not used. Their current local replacements were checked item by item.

## Mechanical checks

- Coverage with `--require-destination`: batch 10, 146 harvested results; batch 11, 63; zero errors or warnings.
- Whole-run manifest dependencies: 735 items, zero errors. Whole-run manifest-only content policy: 735 items, zero errors or warnings.
- Manifest integrity: 48 owed pages, 48 present, no scope drift.
- Canonical plan validation with `--max-items 60`: exit 0, no item cycles, forward references, B-page dependencies or unresolved IDs among 973 itemized pages. The 646 other empty planned inventories remain a reported global limitation.
- Source fetch receipt validation: 11/12 fetch-verified and 12/12 resolved, including one documented drop. This validates receipts; it does not claim a fresh successful fetch.
- Source backing with `--require-verified`: 63 mapped authored results across the two coverage files, all backed by an openable source or documented alternative argument.
- Scope decisions: 46 current declines, zero errors. Frontier ledger refresh with `--require-reviewed`: exit 0.
- Published external-result policy: exit 0, 55 existing warnings. Additional repository-wide `depcheck --quiet`: exit 1, 473 warnings and four published-unaudited metadata errors at `cex-separately-continuous-not-jointly-continuous`, `def-metric-continuity`, `lem-boundary-label-of-a-van-kampen-diagram-is-null-in-the-presented-group`, and `lem-curvature-count-for-reduced-c-prime-one-sixth-diagrams`. These are outside the owned scaffold edits and are not mathematical counterexamples to the examined clauses.
- Final exact-hash gate through the official `loadStep3` / `itemDecision` / `checkStep3` APIs: 98/98 owned receipts closed, zero owned work rows. Whole-run final gate remains open: 547/735 items closed, 188 outstanding work rows, all outside this assignment. These counts are a snapshot of a concurrent run; no global advancement is asserted. A final scope recheck also returned 46 declines and zero errors.
- Fresh `url-sweep` for both owned coverage files with `--recover --fail-on-dead --timeout-ms 5000`: exit 1, 0/11 live, 11 failed, zero recovered. All failures report curl error 6 (host DNS resolution unavailable). This is an environmental verification failure, not evidence of dead mathematical sources. Results are in `/tmp/step3b-e-url-liveness.json`; existing shared source receipts were not replaced. The fresh liveness gate has therefore not passed.

Runtime note: the supplied Node build cannot execute the TypeScript status CLI (unknown .mts extension; explicit strip-types then reports no compiled TypeScript support). Read-only disk inspection instead found `.autopilot/phase-2-catchup-24/state.json` at `3b-audit`, unfinished and unpaused. The root `.autopilot/state.json` belongs to an older run and was not mistaken for this dispatch. Recent git history includes the Step-3 scope/item driver rewrite. No RESUME claim established run state. One report-append command had a JavaScript quoting error and made no changes; the corrected append succeeded.

Final-gate execution note: a nested `spawnSync` CLI wrapper was rejected by the sandbox with `EPERM`; its empty stdout also caused the first wrapper to report a JSON parse error. The subsequent direct invocation of the official exported gate functions succeeded and produced the exact owned/global results above. All assigned mathematical adjudications are complete; fresh network verification and whole-run closure remain outstanding as stated.
