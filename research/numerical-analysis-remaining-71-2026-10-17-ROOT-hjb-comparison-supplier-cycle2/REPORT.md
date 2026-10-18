# PE32 comparison: original second and final review

The parent reported genuine native batch-71 SUCCESS at 16:00:18 UTC and
completed the original foundation then sums final reviews before triggering
this review. This is the original comparison reviewer's second/final cycle
for the same scope defect. The foundation's sole reference repair and the
sums review's no-edit disposition were read in their complete final reports.
No third cycle is requested.

## Findings and focused repairs

The three actual canonical downstream carriers were read fully against the
complete first proposals, exact source interfaces and original model. Their
mathematical proofs are sound for the full approved model. Two concrete
native wording defects were repaired:

1. In `items/thm-na-periodic-diagonal-hjb-second-order-comparison.md`, the
   Statement said the interior test inequalities were those of both the
   second-order definition **and** the first-order viscosity definition.
   That conjunction ambiguously imposed two different PDE test inequalities.
   It now explicitly takes the PDE inequality from the second-order
   definition and cites the first-order definition solely for its local
   maximum/minimum contact convention. The raw initial-envelope scope,
   arbitrary dimension, bounded USC/LSC class and coefficient class are
   unchanged. No proof, dependency list, axiom base or other metadata changed.
2. The B-page switching summary called its example a “two-state, two-action”
   system. The actual example has `stay, go` at state 0 and
   `exit, tied-exit, reset` at state 1. The summary now states those counts
   correctly. The example itself and its exact policy calculations are
   unchanged.

Complete pre-edit carriers are preserved under:

- `preimages/items/thm-na-periodic-diagonal-hjb-second-order-comparison.md`
- `preimages/library/numerical-pdes-and-spatial-discretization/monotone-hjb-schemes-and-policy-iteration-examples.md`

No other canonical file was edited. In particular the original model's
Definition and the original conditional corollary's Statement and proof
were left unchanged.

## Supplier-first mathematical review

The jet-interface lemma adds $\theta I$ to an ordinary full elliptic
space-time superjet, giving an actual quadratic $C^{1,2}$ upper test in a
small neighborhood. Sending $\theta$ to zero uses coefficient continuity.
The exact value-sensitive closed-jet sequence then passes the inequality to
the closed jet; the lower test uses $-\theta I$. All contacts are interior.
This interface requires neither an unproved parabolic sums result nor an
extra regularity assumption on the subsolution or supersolution. It matches
the unchanged canonical semijet and elliptic-sums interfaces reviewed by the
original sums supplier.

The comparison Statement retains every $d\ge1$, finite nonempty ordered
controls, bounded periodic jointly Lipschitz $\alpha,b,f$, uniform lower
bound $\alpha_j^a\ge\alpha_*>0$, and bounded USC/LSC functions with raw
ordered relaxed initial traces. The model's continuous periodic initial
datum is a special case, not an extra condition on that raw-trace theorem.
The initial extensions by the upper/lower interior envelopes are proved
semicontinuous in step 1.1, using AC for the witnessing selections. The
positive-gap choice of $S<T$ and
$P(t)=\eta t+\gamma/(S-t)$ yields both a strictly positive time derivative
and a uniform exclusion of the terminal edge. Ordered initial traces and
spatial compactness exclude the initial edge without requiring a uniform
modulus for $u$ or $v$.

The synchronous spatial doubling maximum has the exact estimate
$D(x_\varepsilon,y_\varepsilon)^2/(4\varepsilon)
\le M_{2\varepsilon}-M_\varepsilon\to0$.
Independent doubled times produce synchronized maximizers as
$\delta\downarrow0$ for fixed $\varepsilon$. Both times are then interior,
and the spatial pair lies in the locally unique torus lift. In the elliptic
sums inequality the penalty Hessian has no mixed space-time entries. Its
spatial restriction is exactly
$(3/\varepsilon)\begin{pmatrix}I&-I\\-I&I\end{pmatrix}$;
the large temporal Hessian and terminal penalty contribute no spatial term.
The closed jet gradients have the exact difference
$a-b=P'(t)\ge\eta$.

The uniform positive lower bound gives the directly proved estimate
$|\sqrt{\alpha_j^c(z)}-\sqrt{\alpha_j^c(w)}|
\le L(|x-y|+|t-s|)/(2\sqrt{\alpha_*})$.
Evaluating the spatial matrix inequality on the paired square-root
coordinate vectors gives the full coefficient-weighted trace bound.
The difference of the finite Bellman maxima is bounded by the maximum of
the same-control differences; drift and forcing errors are controlled by
the declared common Lipschitz bounds. Sending $\delta\to0$ **before**
$\varepsilon\to0$ removes every divided time error. The remaining bound is
$C(D^2/\varepsilon+D)\to0$, contradicting $\eta>0$.
No full Hessian compactness as $\delta\to0$, gradient bound for $u,v$,
smooth solution, or Perron theorem is used.

The unconditional convergence theorem is the actual consumer of comparison.
Its half-relaxed supplier has exactly the bounded USC/LSC envelopes and
initial trace required by the repaired Statement. The original conditional
corollary therefore applies with its comparison premise proved. Its
finite-cover proof gives convergence through every $T'<T$, and comparison
in both orders gives uniqueness. The explicit mesh sequence has
$N_0=\max\{3,\lceil B^*/\alpha_*\rceil\}$,
$N=N_0+k$ and
$M_k=\max\{1,\lceil Td(2A^*N^2+B^*N)\rceil\}+k$.
It satisfies dominance and CFL at every row and $\tau_k\le T/k\to0$;
the finite recurrence is defined. Existence is consequently nonvacuous for
every declared model and arbitrary continuous periodic initial datum.
Full AC is explicit in both theorem Statements and axiom bases, supplies
the countable-choice recovery convention, and is inherited from the actual
analytic supplier chain. The original conditional result does not acquire a
new AC premise merely because the new unconditional result consumes it.

## Exact old/current consumer ownership

A repository item/page text search for all three new IDs found only the
three new carriers themselves and the A-page placement. Reading the actual
canonical dependency declarations of all returned carriers gives:

- `lem-na-elliptic-spacetime-jets-imply-parabolic-hjb-inequalities`:
  direct consumer `thm-na-periodic-diagonal-hjb-second-order-comparison`;
  transitive closure also includes
  `thm-na-diagonal-diffusion-hjb-scheme-convergence`.
- `thm-na-periodic-diagonal-hjb-second-order-comparison`:
  sole direct/transitive mathematical consumer
  `thm-na-diagonal-diffusion-hjb-scheme-convergence`.
- `thm-na-diagonal-diffusion-hjb-scheme-convergence`: no current item
  consumers. Both the comparison and convergence claims are described on
  the A page; the B page is its examples companion.

All three IDs were absent before the native continuation, so their original
canonical consumer closures were empty. This review clarified the actual
comparison Statement and therefore owns its complete current mathematical
consumer closure: the unconditional theorem was reread in full after the
repair and needs no alteration. The A-page explanation still accurately
states the full comparison/convergence branch. No old item, B-page example,
or unrelated published carrier depends on the changed wording.

For protection against accidental scope/consumer loss, the original model's
seven direct and twelve transitive item consumers from cycle1 were checked
against the actual current carrier text. They are retained:

- Direct: `alg-na-explicit-diagonal-diffusion-hjb-grid-step`,
  `cor-na-diagonal-diffusion-scheme-converges-under-comparison`,
  `def-na-second-order-parabolic-viscosity-solution`,
  `ex-na-diagonal-diffusion-manufactured-solution`,
  `lem-na-diagonal-diffusion-discrete-initial-trace`,
  `lem-na-smooth-tests-suffice-for-first-and-second-order-hjb-viscosity`,
  `thm-na-diagonal-diffusion-stencil-consistency`.
- Additional original transitive consumers:
  `ex-na-compact-control-quantization-hamiltonian-error`,
  `ex-na-eikonal-kink-monotone-hjb-updates`,
  `lem-na-diagonal-diffusion-stencil-is-monotone`,
  `thm-na-diagonal-diffusion-scheme-half-relaxed-limits`,
  `thm-na-first-order-hjb-scheme-convergence`.

The new jet interface, comparison and unconditional theorem are the only
additional current members of that model closure. The viscosity definition's
original six-member closure likewise gains those three. The original
half-relaxed theorem and conditional corollary now have the new unconditional
theorem as an additional consumer, and that composed use was checked above.
The first-order branch enters the old model closure through the unchanged
shared smooth-test lemma; it has no dependency on the new comparison chain.
Its compact-control approximation, both numerical updates, consistency,
initial trace and convergence conclusions remain intact. Howard's exact
strict switches, deterministic ties and finite policy budget are unchanged.

Both actual pages were read fully. The A page contains all 34 A items
(original 23 plus all 11 new prerequisites/results), including the full local
analytic chain and full model scope. The B page retains all five original
examples; only its incorrect action-count description was repaired. No
library page remains missing in this pair. The draft and pending-workflow
language is not treated as a publication or acceptance certificate.

## Source evidence and review limits

The complete first proposals and reading record remain in
`../numerical-analysis-remaining-71-2026-10-17-ROOT-hjb-comparison-supplier-cycle1/`.
That packet contains the complete retrieved CIL PDF/extraction and complete
Barles–Souganidis PDF/extraction. The actual source contexts previously read
are CIL printed/PDF pp. 9–13, 17–22, 34–35 and 49–55, and
Barles–Souganidis PDF pp. 2–3, 5–8 and 11, especially its complete Theorem
2.1 proof on pp. 5–6. This final pass compares the actual local argument with
those exact interfaces and the original complete proposals; no new source
retrieval or full-article read is claimed. The foundational and sums final
reports separately identify their proof-source reads and local supplier
closure. No cited source theorem substitutes for a local mathematical proof.

## Final disposition and drained writes

No unresolved mathematical gap remains in the reviewed downstream chain or
its actual affected consumers. The two wording repairs are complete; all
canonical writes have drained. Full coefficient, dimensional, initial-trace
and semicontinuity scope is retained. The original model Definition,
conditional corollary Statement/proof, first-order claims and Howard claims
are unchanged.

The mandatory formatting command after the item edit was
`node tools/proof-layout.mjs items/thm-na-periodic-diagonal-hjb-second-order-comparison.md`;
it returned `proof-layout: 1 items, 6 steps, 0 defects`. This is only a
formatting check. No tests, native gates, runtime transitions, manifests,
contracts, readiness records, verification stamps or hash bookkeeping were
run or changed. Root owns the once-only remaining bookkeeping and native
workflow decisions after this final reviewer drains.
