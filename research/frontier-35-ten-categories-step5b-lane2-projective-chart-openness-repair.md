# Projective chart openness repair

The draft `lem-standard-open-affine-chart-of-a-projective-quotient` had a proof-support gap at 1.1: closure of `D_+(f)` under generalization does not imply that it is open. Its Statement was already correct and is unchanged. Raw item guard before repair: `1e3eed35b7c11130cce08ae2e156d8cf354be9db332706ece9b57e8f30f2501b`; current guard: `dd1b92559801976f85118c21836e155fb8227bf5cdc766750b529bf11236c198`.

Proof 1.1 now checks openness on each standard affine chart. A homogeneous prime avoiding `x_i` belongs to `D_+(f)` exactly when its chart prime avoids the degree-zero element `f/x_i^d`; hence `D_+(f) ∩ D_+(x_i) = D_+(fx_i)` is a distinguished open in `Spec((S_{x_i})_0)`. The standard charts cover `Proj S`, so their intersections establish that `D_+(f)` is open. The remaining graded-localization and gluing argument then identifies this open with `Spec((S_f)_0)`. Batch-5 contract d1.1 was synchronized to this argument; focused strict contract and item precheck pass.

The sole direct consumer `lem-eventual-hilbert-function-equals-zero-dimensional-projective-length` (current guard `0f173f9be6708592dc03839d18ba6e41bfb20bd7bded1fc19029a1895e7200b3`) cites the unchanged affine-chart clause at L2, lines 60–65, and uses it in proof 2.2, line 131, to identify `D_+(L)=Spec((S_L)_0)` for a homogeneous degree-one element `L`. Its hypotheses specialize the supplier's `d≥1` condition and the direct use remains licensed.

Central defect-ledger proposal: record a nonfatal proof-support defect in the projective-chart lemma, repaired by the chart-local distinguished-open argument, with Statement/Definition unchanged and the two guards above. No shared plan or impact-receipt edit is needed for this proof-only change.
