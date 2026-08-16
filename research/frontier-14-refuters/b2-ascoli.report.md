<!-- Recovered by Alpha-a from research/frontier-14-dispatch/refuter-refuter-b2-ascoli.log.
     Refuters are read-only and could not write this file; the brief was wrong.
     Text below is the agent's own report. -->

### B2-ASCOLI-1

- **Item:** `cor-ascoli-arzela-for-compact-metric-domains`
- **Location:** `items/cor-ascoli-arzela-for-compact-metric-domains.md:4`
- **Defect:** The title says the result is in the uniform topology “for compact metric domains”, which includes the empty compact metric space. The library does not define the uniform topology on an empty domain. The Statement correctly adds `nonempty`; the title drops that load-bearing hypothesis.
- **Evidence:** The Statement at line 28 says, “Let \(X\) be a **nonempty** compact metric space”. `items/def-topology-of-uniform-convergence.md:77-81` says:

  > “\(X\) is nonempty throughout. The uniform metric is defined only for nonempty \(X\) … so the topology of uniform convergence is defined only there.”

- **Severity:** **fatal**.

### B2-ASCOLI-2

- **Item:** `cor-compact-subsets-of-cx-for-a-proper-metric-target`
- **Location:** `items/cor-compact-subsets-of-cx-for-a-proper-metric-target.md:4`
- **Defect:** The title classifies “the compact subsets of \(C(X,Y)\)” as exactly the “closed” pointwise-bounded equicontinuous families without naming a topology. Compactness and closedness are topology-dependent, and this library explicitly gives \(C(X,Y)\) no default topology. The Statement correctly specifies the uniform topology.
- **Evidence:** The Statement at line 28 says “compact **in the uniform topology**” and “closed **in that topology**”. `items/def-topology-of-pointwise-convergence.md:78-80` says:

  > “Nothing on this page gives \(C(X,Y)\) a default topology. The set \(C(X,Y)\) carries several different topologies below, and every statement names the one it means at the point of use.”

- **Severity:** **fatal**.

## Nonfatal findings

### B2-ASCOLI-3

- **Item:** `prop-compact-open-is-uniform-on-a-compact-metric-domain`
- **Location:** `items/prop-compact-open-is-uniform-on-a-compact-metric-domain.md:42-44`
- **Defect:** Step 2.1 says step 1.1 supplies the reverse inclusion for
  \(B_X(f,\varepsilon)=B_{\bar\rho}(f,\varepsilon)\). Step 1.1 only proves
  \(B_{\bar\rho}(f,\delta)\subseteq B_K(f,\varepsilon)\) under the strict condition
  \(\delta<\varepsilon\); it cannot be instantiated with \(\delta=\varepsilon\).
  The same-radius inclusion is true and immediate from
  \(\bar\rho(f,g)<\varepsilon<1\), but it is not supplied by the cited step.
- **Severity:** **nonfatal**.

### B2-ASCOLI-4

- **Item:** `cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets`
- **Location:** `items/cor-arzela-ascoli-subsequence-theorem-for-proper-metric-targets.md:46-48`
- **Defect:** Step 3.1 silently treats the compact uniform-topology closure \(H\) as a compact metric space, and step 4.1 silently identifies convergence in that metric with uniform convergence. Neither assertion is an explicit fact or dependency.
- **Evidence:** `items/def-topology-of-uniform-convergence.md:63-75` states that the uniform topology is induced by the restricted uniform metric, but explicitly says the convergence equivalence is not part of that definition and belongs to `lem-uniform-convergence-in-the-uniform-metric`. Its actual Statement at lines 39-47 is
  \[
  f_k\to f\text{ in }(Y^X,\bar\rho)
  \iff
  (f_k)\text{ converges uniformly to }f.
  \]
- **Severity:** **nonfatal**.

### B2-ASCOLI-5

- **Item:** `cor-real-and-euclidean-vector-valued-ascoli-arzela`
- **Location:** `items/cor-real-and-euclidean-vector-valued-ascoli-arzela.md:71`
- **Defect:** Equicontinuity supplies a neighbourhood \(U_x\), and the step immediately invokes compactness to extract a finite subcover from \((U_x)_{x\in X}\). In this library a neighbourhood need not be open, so compactness does not apply to that family as written. One may shrink each \(U_x\) to an open neighbourhood; the stated Choice hypothesis licenses the simultaneous selection.
- **Evidence:** `items/def-neighbourhood-top.md:47-55` defines a neighbourhood as merely containing an open set around the point and explicitly says a neighbourhood need not be open.
- **Severity:** **nonfatal**.

### B2-ASCOLI-6

- **Item:** `ex-ascoli-on-a-finite-discrete-domain`
- **Location:** `items/ex-ascoli-on-a-finite-discrete-domain.md:40,50`
- **Defect:** Step 1.3 applies `[L5]` directly to \(Y^X\) for an arbitrary finite set \(X\). The cited theorem formally proves compactness only for a family indexed by a von Neumann natural \(n\). The result extends to finite \(X\), but the proof needs the omitted reindexing homeomorphism along a bijection \(n\to X\).
- **Evidence:** `items/thm-finite-products-of-compact-spaces.md:44-52` states:

  > “For every \(n\in\mathbb N\) and every family \((X_k)_{k<n}\) of compact topological spaces, the product \(\prod_{k<n}X_k\) … is compact.”

- **Severity:** **nonfatal**.

### B2-ASCOLI-7

- **Item:** `thm-compact-function-families-are-equicontinuous-on-a-locally-compact-hausdorff-domain`
- **Location:** `research/frontier-14-batch-2.proof-contracts.json:953,961-973`
- **Defect:** The proof contract is stale after the Choice repair. It still records the superseded proof that chooses neighbourhoods \((O_f,U_f)\) for every \(f\in\mathcal K\) and then chooses \(f_1,\ldots,f_m\). The current item instead defines the set of all admissible triples at item lines 44-48. The contract’s own `nonempty-choice` row at line 1009 acknowledges that change, so the derivation map and boundary record contradict each other.
- **Severity:** **nonfatal**.

### B2-ASCOLI-8

- **Item:** `ex-compact-affine-interpolation-family`
- **Location:** `research/frontier-14-batch-2.proof-contracts.json:2639`
- **Defect:** The derivation map records the entire claim of step 1.2 as only “For \(0\le t\le1\),” omitting both the displayed estimate and the conclusion that \(\Phi\) is continuous. The actual step at item lines 48-52 establishes
  \[
  |f_{a,b}(t)-f_{a',b'}(t)|
  \le |a-a'|+|b-b'|
  \]
  and uses it to prove continuity into the uniform topology.
- **Severity:** **nonfatal**.

### B2-ASCOLI-9

- **Item:** `cor-compact-subsets-of-cx-for-a-proper-metric-target`
- **Location:** `items/cor-compact-subsets-of-cx-for-a-proper-metric-target.md:42`
- **Defect:** To apply `[L2]`, a theorem about compact subsets of a metric space, step 1.1 asserts without a stated fact that the uniform topology is metrizable. That is true from `def-topology-of-uniform-convergence`, but that item is neither a dependency nor an explicit fact here.
- **Evidence:** `items/def-topology-of-uniform-convergence.md:63-69` states that the uniform topology on \(C(X,Y)\) is the metric topology of the restriction of \(\bar\rho\). `[L2]`’s actual Statement at `items/thm-compact-subset-is-closed-and-bounded.md:37-39` begins, “Let \((X,d)\) be a metric space …”.
- **Severity:** **nonfatal**.

## Coverage

Opened all 24 assigned items in full, every directly cited dependency’s actual Definition or Statement, and every contract entry for the 22 proof-bearing items. Checked titles, Statements, proofs, every `[L#]`, Choice scope, both `ai-generated` constructions, and all eight boundary axes.

Clean in both mathematical text and contract:

- `def-compact-open-topology-for-topological-domains`
- `prop-general-compact-open-topology-agrees-with-the-metric-definition`
- `def-equicontinuity-on-a-topological-domain-and-pointwise-relative-compactness`
- `prop-topological-domain-equicontinuity-agrees-with-metric-equicontinuity`
- `thm-evaluation-is-continuous-for-a-locally-compact-hausdorff-domain`
- `thm-pointwise-compactness-criterion-for-function-families`
- `lem-pointwise-closure-preserves-equicontinuity`
- `lem-compact-open-and-pointwise-topologies-agree-on-an-equicontinuous-family`
- `thm-ascoli-arzela-sufficiency`
- `prop-compact-function-families-are-pointwise-relatively-compact`
- `thm-ascoli-arzela-general`
- `cor-ascoli-arzela-for-compact-hausdorff-domains`
- `cor-equicontinuous-families-into-a-compact-metric-target`
- `ex-compact-families-of-constant-maps`
- `cex-boundedness-does-not-replace-pointwise-relative-compactness`
- `ex-translated-tent-functions-converge-in-the-compact-open-topology`

The mathematical text of `thm-compact-function-families-are-equicontinuous-on-a-locally-compact-hausdorff-domain` and `ex-compact-affine-interpolation-family` was clean; their findings are contract-only. No false boundary disposition was found. External bibliography URLs were not independently fetched; no on-disk dependency or mathematical check was left unopened.
tokens used
319,553
