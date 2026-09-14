# Step 3a scope review — the Serre spectral sequence and applications

Run: `phase-2-next-18`

Role: `alpha`

Pair: `the-serre-spectral-sequence-and-applications` /
`the-serre-spectral-sequence-and-applications-examples`

Review type: scope only; no item or proof approvals

## Review basis

I compared the current batch-3 manifest and coverage file with the complete
AT-14 prose design, current `plan-spec.json` metadata, scope ledger, planning
and construction notes, dependency records, and Step-1 drift report. There is
no current Step-3a owner decision for this pair. The current manifest has 19 A
items and 7 B items. It adequately includes the geometric Serre filtration,
fiber-homology local systems and monodromy, the relative-cell and `d_1`
calculations, homological and cohomological Serre spectral sequences,
naturality, edge maps and transgression, multiplicativity, safe collapse
criteria, Gysin and Wang sequences, rational `K(Z,n)` cohomology, and varied
computations and counterexamples. Its extra replacement and filtered-DGA
lemmas are useful local bridges rather than scope drift.

The pair also occupies the intended library position. It consumes the
published fibration, local-coefficient, cohomology-product, and abstract
spectral-sequence interfaces, and it supplies the Serre and transgression
interfaces used by the same-run Leray--Hirsch/Thom/Gysin pair. Later
localization, mod-C homotopy calculations, and stable-homotopy applications
can reasonably remain outside AT-14, as the coverage file says.

For the disputed scope I read the complete relevant official MIT argument in
Lecture 30, pp. 104--108: Definition 30.1, Examples 30.2--30.5, Lemma 30.6,
the spectral-sequence/finite-filtration closure observations, and Propositions
30.7--30.8 with their proofs and Corollary 30.10. This confirms that “Serre
classes” is not merely another name for the manifest's finite-generation
claim. It includes the general class and mod-C language, closure through a
first-quadrant spectral sequence and its finite abutment filtration, and
transfer statements whose special cases cover finite generation, torsion, and
p-primary information. Source: [Miller, MIT 18.906 notes](https://ocw.mit.edu/courses/18-906-algebraic-topology-ii-spring-2020/e8a061a73ca1a451df8809c7a7fbc846_MIT18_906S20_notes.pdf).

## Decision

`insufficient`

The prose item for
`thm-serre-finiteness-transfer-for-simply-connected-base-and-fiber` promises
that source-stated Serre-class hypotheses propagate finite-generation and
torsion bounds, and the plan's consolidated inventory explicitly labels the
AT-14 application as “Serre classes.” The current A manifest instead states
only one specialization: finite generation through a degree bound over a
commutative PID. It contains no definition of a Serre class/ring/ideal or
mod-C morphism and no general spectral-sequence or fibration transfer result.
Thus an explicitly selected subject and its torsion/p-primary consequences
have been omitted, rather than assigned a later home.

The source-coverage record also needs correction. Its Hatcher row describes
Examples 5.4--5.6 as including “Hopf-type computations,” but those complete
examples are respectively the path-fibration computation of `K(Z,2)`, the
homology of `Omega S^n`, and the nonsplit group-extension fibration
`K(Z/2,1) -> K(Z/4,1) -> K(Z/2,1)`. They do not supply the manifest's general
`S^1 -> S^{2n+1} -> CP^n` and `S^3 -> S^{4n+3} -> HP^n` calculations. The
examples are appropriate for the B-page scope, but their exact authoritative
source locators are not currently covered. Source: [Hatcher, Algebraic
Topology, Chapter 5](https://pi.math.cornell.edu/~hatcher/AT/ATch5.pdf),
Examples 5.4--5.6, printed pp. 527--529.

## Recommended owner action

Enrich the A scaffold before recording `proceed`:

1. add the Serre-class/ring/ideal and mod-C definitions needed by the selected
   application;
2. add the finite-filtration/first-quadrant spectral-sequence closure result
   and a correctly hypothesized fibration transfer theorem; and
3. state finite-generation, torsion, and p-primary specializations, retaining
   the existing PID finite-generation theorem as a corollary if desired.

Also amend coverage with exact authoritative locators for both general Hopf
families (or narrow the examples to what the fetched sources actually cover).
This is a focused enrichment of AT-14; no pair merger is recommended. The
owner alone decides and must record `proceed` after the resulting scope is
materialized.
