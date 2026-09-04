# Frontier 29 terminal FA evidence — measure differentiation

## Decision

Disposition: repaired.

The Alpha's two Step-8 repairs were correct as far as they went. The first
correctly replaced the undefined expression \(d\nu/d\lambda\), when \(\nu\)
may have a singular part, by the derivative of the absolutely continuous part.
The second correctly restricted the nicely shrinking sets to Borel sets, so
that a Borel measure \(\nu\) and its singular part can be evaluated on them.
The item nevertheless needed an independent terminal repair before acceptance.

I reviewed the current item; all eight direct dependencies; both MT-17 page
files; the batch-4 manifest, coverage, notes, proof contract, and critical-risk
record; the Step-6 reader/refuter and Alpha evidence; the two judge rejections
with context hashes
ff75764fe457217c71c47f041ad6e84f548ed38a2132d3d190a6f20252666a00
and
6afa7c56709af40f083454f259cdd641657a3272482186f7d2fb9714bef4bec8;
and both corresponding Alpha adjudications and repairs. The governing group
convention is retained: this branch explicitly assumes the Axiom of Countable
Choice.

## Authoritative source verification

- https://web.archive.org/web/20221029120924if_/https://perso.telecom-paristech.fr/decreuse/_downloads/c22155fef582344beb326c1f44f437d2/rudin.pdf
  is the archived full text of Walter Rudin's *Real and Complex Analysis*,
  3rd ed. Theorem 2.18 gives regularity for a positive Borel measure finite on
  compact sets in \(\mathbb R^n\); Section 7.9 defines nicely shrinking
  sequences using Borel sets; Theorem 7.13 proves that a singular Borel
  measure has normalized density zero almost everywhere along such sets; and
  Theorem 7.14 combines this with the absolutely continuous part. These points
  support the theorem's regularity input, the Alpha's Borel-set restriction,
  and the claimed decomposition-and-differentiation conclusion.

- https://math.stanford.edu/~ryzhik/STANFORD/STANF205-16/notes-205-14.pdf
  is Stanford Math 205A lecture text. Definition 6.21 expresses mutual
  singularity through a Borel carrier, and Theorem 6.22 states the Lebesgue
  decomposition for Radon measures on \(\mathbb R^n\) and proves that the
  singular component has density zero almost everywhere. This independently
  confirms the carrier argument and the singular-part conclusion used here.

## Independent defect and repair basis

Four points in the post-Alpha text required correction.

1. The local definition makes \(d\nu_a/d\lambda\) an almost-everywhere
   equivalence class, but the statement evaluated it as \(f(x)\). The repaired
   statement now chooses a measurable representative explicitly.
2. The proof invoked the locally integrable differentiation theorem without
   establishing that its density is locally integrable, and it used
   \(\nu_s\) as a positive measure without showing positivity from the cited
   signed-measure interface. Step 1.1 now uses a Borel singular carrier to
   identify both components as positive restrictions of \(\nu\), then bounds
   the integral of \(|f|\) on each ball by the finite measure of its compact
   closure.
3. The former definition
   \(F_k=G\cap\bigcap_m\{D_m>1/k\}\) was incorrectly said to equal
   \(\{x\in G:\limsup_{r\downarrow0}q_r(x)>1/k\}\). For a decreasing sequence
   \(D_m\), the conditions \(D_m>c\) for every \(m\) allow
   \(\lim_mD_m=c\) (for example, \(D_m=c+1/m\)). The repair uses only the
   correct inclusion: every point of positive upper density belongs to some
   \(F_k\). It also includes the null complement of the full-measure set \(G\)
   when passing to the almost-everywhere conclusion.
4. The former proof chose one witness radius for every point of a compact set,
   which did not respect the page's explicit Countable Choice boundary. The
   repair forms the set of all witness balls, observes that it covers the
   compact set, and only then extracts a finite subcover. No uncountable choice
   function is used.

The singular-ratio comparison is now written explicitly, including positivity
and the factor \(1/\alpha_x\). The general statement is quantified in the same
\(A\)-indexed form as its cited shrinking-family dependency. The source
metadata now names Rudin Theorem 2.18 as well as the Chapter 7 results actually
used. The batch-4 and merged proof-contract entries were regenerated, and the
critical-risk review was updated to the final proof. No direct dependency was
edited, so no owner-prerequisite-repair licence is required.

## Focused checks

- precheck.mts: one item checked, zero failures.
- rendercheck.mjs: YAML, wikilinks, delimiters, and KaTeX all passed.
- Batch-4 and merged strict proof-contract.mjs: one of one checked, zero
  errors and zero warnings in each.
- Focused risk-report.mjs --require-reviewed: critical score 10, zero errors.
- citation-fidelity.mjs: 80 citations over 27 batch items, no missing quote
  and no widening candidate.
- content-policy.mjs on the batch-4 manifest: 34 scoped items, zero errors and
  zero warnings.
- Repository depcheck.mjs --quiet: exited successfully with the standing
  repository warnings only.
- prosecheck.mjs on the repaired item: zero errors and zero warnings.
- git diff --check on the item and both contract files: passed.

The final item SHA-256 is
197594e1c731a5cb7edd92114cdab53aa866a8d1da7f8597a04ec8bfc0e6b28d;
its final judge context SHA-256 is
909c59e5d75dc9f10a289a37e8cad6f95dcd09665521b53e00ceb4f68c25060a.
