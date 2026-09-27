# Batch 12 refuter coverage audit

The original read-only refuter report for batch 12 listed 53 opened IDs, one
more than the 52-ID computed scope, and disclosed that its first 12-carrier
command output was truncated. The original response remains in
`research/frontier-35-ten-categories-dispatch/refuter-refute-12.last-message.json`.
The out-of-scope ID was `lem-powering-preserves-perfect-satisfiability`, an
additional dependency the refuter opened. The structured `opened` array now
contains exactly the computed scope. An independent read-only Sol xhigh audit
reopened the first 12 scoped carriers and their relevant dependencies before
the collect retry. The five additional findings below were appended to the
structured report with this audit named in their evidence; they were not
claimed as findings of the original Luna refuter.

1. `cex-ip-equals-pspace-needs-no-degree-reduction`, Statement refuted and
   steps 1.1/5.1: the asserted encoded length `m_k=O(k)` does not follow from
   `k+2` syntax nodes. `def-quantified-boolean-formula-and-tqbf` allows any
   fixed effective encoding. Explicit binary names `x_1,...,x_k` already
   require Θ(k log k) bits in the quantifier prefix. A specified polynomial
   encoding bound would preserve the intended exponential-degree conclusion.
2. `def-assignment-tester-and-rejection-ratio`, Definition: `Σ₀` may be any
   finite nonempty alphabet, but the named input is binary and `a∪b` is then
   used as a `Σ₀`-labeling. With `Σ₀={0}` and `a(x)=1`, that labeling and its
   `UNSAT` value are undefined. The definition needs binary symbols in `Σ₀`
   or an explicit embedding.
3. The same definition says a circuit accepts a named input when an assignment
   to the remaining *gates* makes its output one. The cited CircuitSAT
   definition quantifies remaining input coordinates and evaluates gates.
   For `C=NOT(x)`, fixed `x=1`, freely setting the output gate to one gives
   the wrong acceptance result.
4. The same definition calls constant rejection `UNSAT≥ρ` for every rejected
   input a “weaker” than proportional soundness `UNSAT≥ρδ(a,SAT(C))`.
   Since `δ≤1`, the constant bound is stronger; at `δ=1/2`, a violation
   fraction `ρ/2` meets the proportional bound but not the constant bound.
5. `def-quadratic-consistency-test`, Definition: its self-corrected test
   samples four independent n-bit vectors and one n²-bit matrix, totaling
   `n²+4n` random bits, not the stated `6n²` (at `n=2`, 12 rather than 24).

The audit found no further concrete defect in the other seven of those first
12 carriers. The original report's existing flags for
`def-explicit-constant-rate-constant-distance-code` and
`def-multilinearization-operator` remain intact. Group A adjudication must
resolve the appended findings and their actual consumers; this audit does not
certify the mathematical repairs.
