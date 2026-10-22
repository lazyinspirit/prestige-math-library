# Original-concern confirmation: packet 5

Four confirmed defects; two sound optional clarifications. No canonical changes applied.

## thm-ip-general-source-minimax-comparison

confirmed_defect (`keep_true`: true). Literal conditioning-on-action claim omits conditioning on data and is false in general: even a deterministic action equal to an observed coordinate conveys information about the parameter. The intended fixed-data decomposition is correct; the replacement supplies its missing qualification without changing the theorem, priors, constant, or randomized-estimator scope.

Actual supplier/use: def-randomized-procedure-as-a-markov-kernel Definition supplies K(z,da), independent of parameter at fixed z. lem-ip-univariate-gaussian-projection-minimax-comparison Statement and Proof 1.2 supply the scalar prior variance bound and explicitly average fixed-data loss over the kernel; current theorem 2.2 supplies full-data factorized posterior.

## ex-ip-analytic-minimax-rates

confirmed_defect (`keep_true`: true). F1 locally has precisely two formulas; third and fourth have no local referent. Their values and the source corollary cases are correct. Repair the erroneous internal references, preserving both rates and hypotheses.

Actual supplier/use: cor-ip-mild-and-severe-estimation-rates Statement cases three/four and Proof 2.3/2.4; local F1 extracts exactly those two cases.

## ex-ip-power-source-minimax-rates

confirmed_defect (`keep_true`: true). F2 locally has precisely two formulas. The fourth source-corollary case is the second local F2 formula. This is a required correction to the explicit internal reference; the calculation and rate are sound.

Actual supplier/use: cor-ip-mild-and-severe-estimation-rates Statement case four, Proof 2.4; local F2 second formula. Local F1 supplies axes s_j^{-1} at nu=1.

## alg-reidemeister-move-neighbors-from-code

confirmed_defect (`keep_true`: true). The procedure asserts a finite local test but leaves its endpoint representatives and empty embedded disk decision undefined. These are essential executable subprocedures for both soundness and completeness, not a change of mathematical goal. Neither the supplied validator nor the move definition contains the missing test.

Actual supplier/use: alg-planar-code-validation-and-diagram-reconstruction Output and steps 2,8,9 provide the finite sphere cellulation and distinguished plane face. def-planar-diagram-gauss-and-dowker-codes provides dart/face data and crossingless orientation. def-oriented-reidemeister-moves supplies disk-supported R1/R2/R3 templates and finite variants. alg-enumerate-diagrams-up-to-crossing-bound provides all candidate codes through c+2. None supplies endpoint/disk enumeration.

## alg-breadth-first-reidemeister-search

sound_optional_clarification (`keep_true`: false). The explicit Output promises a sequence of code classes, not a certificate between particular displayed labeled representatives. E and canon(E) are the same code class by the Definition final paragraph and step 1, so mu already certifies the asserted adjacent classes. Finite relabeling is recomputable from E/canonicalization and the source neighbor convention admits relabeling certificates. Retaining its successful bijection would improve implementation convenience, but the original concern imposes a stronger representative-level output contract than this algorithm states.

Actual supplier/use: alg-reidemeister-move-neighbors-from-code Output supplies E and mu; breadth-first Definition Output and final paragraph explicitly take code classes modulo finite label bijections. thm-reidemeister-enumeration-is-only-a-semidecision uses paths of these classes in Proof 2.1,3.1,3.2.

## def-quantum-sl2-fundamental-ribbon-module

sound_optional_clarification (`keep_true`: false). The asserted ribbon dimension is already an explicit external input in F5, rather than inferred only from the snake identities. The omitted compatibility check is valid directly: Bc=(0,-A^{-3},A^{-5},0)=-A^{-3}B, hence Bc(-A^3 I tensor 1)=B. The published local evaluator Proof 4.1 gives the opposite cap as d c(theta tensor 1), so with this equality its closure is exactly BU=delta. Making that short check explicit would explain the stated closure maps, but no incorrect dimension or missing established supplier is exposed by this concern.

Actual supplier/use: Current definition F5 imports the precise quantum dimension from Korinman section 2.1. thm-a-ribbon-object-defines-a-unique-framed-tangle-evaluation-functor Proof 4.1 supplies d′=d c(theta tensor 1). lem-ribbon-trace-equals-the-framed-closure-evaluation Proof 1.1/2.1 uses that opposite cap. lem-quantum-sl2-ribbon-trace-matches-hecke-and-bracket F2 and Proof 1.1/2.1 use BU and the resulting closure value; the displayed matrices verify their identification without changing any definition.

## Consumer scope and limits

The proposed finite site subprocedure accepts exactly the existing same-class or one oriented R1/R2/R3 relation, with the same crossing-count bound, orientation/sign variants, and domains. Each consumer dependency therefore receives exactly its previous mathematical predicate. No consumer claim, hypothesis, conditional branch, or resolved supplier changes. The semidecision theorem was fully read: its steps 1.1 and 2.1 now obtain the missing finite-site justification directly; F1 and remaining proof stay verbatim. Breadth-first search was fully read and uses the same finite neighbor list. The remaining consumer cex-knot-kt-48-boundary-case was also fully read: its finite-layer and crossing-bound uses remain unchanged. No consumer repair is needed.

Dependency closure: alg-breadth-first-reidemeister-search, cex-knot-kt-48-boundary-case, thm-reidemeister-enumeration-is-only-a-semidecision.

All six assigned targets and the local supplier files listed in report-5.json were fully read. No external full text was read in this review. Exact unique literal proposals, observed current hashes, capture comparisons, and uncertainty are in report-5.json. These are current observations, not native historical byte evidence or admission coverage. Root revalidates at the paused/drained 5.1 hold.
