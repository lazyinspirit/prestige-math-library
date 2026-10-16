---
id: def-qa-27-variable-time-model
kind: definition
title: "Coherent variable-time algorithm model"
status: published
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
dependency_level: 10
deps:
  - def-qc-classical-control-and-measurement-circuit
  - def-qc-clean-and-dirty-ancillas
  - def-qc-circuit-denotational-semantics
  - def-qc-controlled-unitary-access
  - def-qc-inverse-unitary-access
  - def-qc-projective-measurement
  - thm-qc-projective-measurement-outcome-law
  - thm-qc-projective-conditional-state
  - def-qc-dirac-notation-conversion
justified_by: []
axiom_use: "None; the model uses finitely many orthogonal outcome and clock subspaces."
provenance:
  statement: ai-altered
  proof: not-applicable
verification:
  precheck: n/a
sources:
  references:
    - title: "Andris Ambainis, Variable time amplitude amplification and a faster quantum algorithm for solving systems of linear equations"
      url: "https://arxiv.org/pdf/1010.4458"
      locator: "§§3.1–3.3, PDF pp.4–8."
    - title: "Andrew M. Childs, Lecture Notes on Quantum Algorithms"
      url: "https://www.cs.umd.edu/~amchilds/qa/qa.pdf"
      locator: "Chapter 19 §19.3 and Chapter 28, full lecture-note corpus."
---

## Definition

A finite coherent variable-time algorithm has a finite family of stopping times $0<t_1<\cdots<t_m=T_{\max}$, a designated output space, and a finite clock/step register. A run is **unfinished** at stage $j$ if it has not entered a stopping subspace by $t_j$; otherwise it is **stopped**. The stopping subspaces are pairwise orthogonal, and the output register labels each stopped branch as **good** or **bad**. Every later stage is controlled on the unfinished projector, so a stopped branch is not advanced. Admissibility requires the first-stop subspaces to exhaust the reachable state at $T_{\max}$ for every allowed input; no branch remains unfinished after the final stage. The input specifies each stage unitary, its inverse and every controlled form used, and the gate/query cost for each.

For a normalized input state, let $p_i$ be the Born probability mass in the subspace that first stops at $t_i$. These are nonnegative masses of orthogonal subspaces whose sum is the reachable state at the final time, so $p_i\ge0$ and $\sum_{i=1}^m p_i=1$. Define the root-mean-square stopping time
$$T_{\rm av}:=\left(\sum_{i=1}^m p_i t_i^2\right)^{1/2}.$$
Let $p_{\rm succ}$ be the total Born probability of the good-output subspace. When $p_{\rm succ}>0$, the good output means the normalized conditional state of the declared good projector; it is defined only on that positive-probability branch. The mean stopping time $\sum_i p_i t_i$ is a different quantity and is not substituted for $T_{\rm av}$.

A measured adaptive procedure qualifies only if it has a finite coherent implementation with the same stopped/unfinished branch semantics and the required inverse/coherent access. Measurement records used to choose a circuit may be classical construction data; no intermediate measurement is inserted into a branch whose later inverse must erase that record. All stopping times, branch probabilities, reflections, inverses, controlled calls, and state preparation remain explicit resource inputs. Complexity statements use an actual normalized primitive-operation coordinate: positive counts are at least one, and the declared interval budgets include the preparation, controlled/inverse and input/selected-reflection operations used in the construction. Other weighted time coordinates may be recorded, but arbitrary uncharged subunit weights do not inherit logarithmic operation-count bounds.

A supplied-probability production regime must specify finite probability/schedule certificates rather than infer them from black-box unitary access. For $h+1\le n$ dyadic intervals indexed $j=0,\ldots,h$, initialize $s_{-1}=r_{-1}=1$ and require $p_{\rm succ}>0$. The original good-or-unfinished masses satisfy $1\ge s_{j-1}\ge s_j\ge p_{\rm succ}>0$ and $s_h=p_{\rm succ}$, so $q_j=r_{j-1}s_j/s_{j-1}$ is defined. Supply odd multipliers $d_j=2k_j+1$ and certificates for the actual amplified selected masses satisfying $r_j\ge1/(16n)$ and $r_j\ge(1-2/(5n))d_j^2q_j$; an unamplified interval has $d_j=1$ and $r_j=q_j$. Supply also a rational $\ell$ with $r_h/2\le\ell\le r_h$. These are the finite schedule inequalities for the supplied-data production regime. Data may use exact rational/algebraic representations, certified rational enclosures with the stated valid inequalities, or a separately declared exact-real representation/comparison resource. The finite construction and verification cost $C_{\rm build}$ includes every oracle call used to acquire or certify probability information, as well as classical arithmetic, list generation and output costs. No zero-query method obtaining these data is assumed. A uniform regime without those certificates must instead state its supplied probability floor, confidence and complete estimation/production costs. Branch probabilities defined above remain valid analysis quantities even when they are unknown to the implementation.
