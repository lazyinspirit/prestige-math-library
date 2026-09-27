# Draft source audit: the CSP half of `p=t`

This is a read-only mathematical audit of the proposed predecessor route for `thm-pseudointersection-number-equals-tower-number`. It is **not** a selected page, a proof supplier, a Step 1 readiness decision, or a Step 3 proof verdict. The source is Malliaris–Shelah, [*Cofinality Spectrum Theorems*](https://math.uchicago.edu/~mem/Malliaris-Shelah-CST-new.pdf), especially printed pp. 9–36 and 54–59 (the PDF has 60 pages). The source passages below were read from the full PDF/text; their presence in a paper does not discharge local proof obligations.

The proposed inventory has eight CSP A results and five generic-ultrapower/CSP-transfer results inside its second proposed pair. Neither proposed pair is selected or published. The current Easton A page has 42 items, including the escalated `p=t` theorem, and thus 18 places before its 60-item cap. The full 17-item draft inventory would leave one place, before any missing interface is supplied. The active run also has a 30-pair cap; this draft changes no pair selection.

## Interface DAG

```mermaid
flowchart TD
  D23[ESTT and CSP: Defs. 2.3, 2.5] --> D29[Cuts, spectra, treetops: Defs. 2.8–2.11]
  D29 --> L215[Definable and below-ceiling treetops: Claim 2.14, Lem. 2.15]
  L215 --> T32[Unique lower cofinality: Lem. 3.1, Thm. 3.2, Concl. 3.7]
  L215 --> T42[Local Or-saturation: Thm. 4.2]
  T32 --> T42
  D23 --> A5[Internal cardinality and coding: §5, especially Conv. 5.1, Lem. 5.3, Cor. 5.7, Concl. 5.8/5.15]
  T32 --> A5
  L215 --> L61[No small symmetric cuts: Lem. 6.1]
  A5 --> L61
  T32 --> C82[Spaced cut with growing internal size: Claim 8.2]
  A5 --> C82
  L215 --> C82
  C82 --> T85[No minimal asymmetric cut: Fact 8.4, Thm. 8.5]
  T42 --> T85
  A5 --> T85
  T32 --> T85
  L215 --> T85
  L61 --> T91[No cuts below treetops: Central Thm. 9.1]
  T85 --> T91
  T32 --> T91
  Q[Q = positive P(ω)/fin; t-closure, short sequences, generic ultrafilter: Def. 14.3] --> LOS[Generic Łoś and elementary H(ℵ1) ultrapower: Def. 14.3 text]
  LOS --> C146[Generic ultrapower is a CSP: Claim 14.6]
  D23 --> C146
  Q --> C147[Treetops at least t: Claim 14.7]
  C146 --> C147
  TB[t ≤ b: Fact 14.2, external Rothberger/Blass input] --> C147
  C147 --> C149[No cuts below t: Concl. 14.9]
  T91 --> C149
  PC[Under p < t, regular p and a (κ,p)-peculiar cut: Fact 14.2 and Shelah Thm. 1.12] --> C1413[Transfer cut to pseudofinite order: Claim 14.13]
  LOS --> C1413
  Q --> C1413
  C146 --> C1413
  C1413 --> C1415[Cut below t: Concl. 14.15]
  C147 --> C1415
  C149 --> PT[Contradiction and p=t: Thm. 14.16]
  C1415 --> PT
```

`p_s` and `t_s` in the paper are the CSP cut and treetop thresholds; they are distinct from the classical `p` and `t`. Theorem 9.1 is short only after its upstream chain. The final contradiction needs both `C(s,t)=∅` and a transferred cut of cofinalities below `t`.

## Source-located proof obligations

| Proposed interface | Primary passage and indispensable assertion | Local obligation and audit status |
|---|---|---|
| CSP definitions, pseudofinite orders/trees/cuts, spectra | Defs. 2.3, 2.5, 2.8–2.11, printed pp. 9–13 | State the ESTT closure conditions, definable products, bounded pseudofiniteness, tree length/concatenation, regular cut cofinalities, and the strict `< t_s` convention. Definitions were read; no local definitions exist yet. |
| Definable treetops and below-ceiling refinement | Claim 2.14 and Lem. 2.15, printed pp. 13–14 | Claim 2.14 takes the last definable initial segment of an ambient treetop. Lemma 2.15 cuts it back below the ceiling using the absence of a cut of total cofinality `< p_s`. Both arguments were inspected; a proposed `treetops-and-lower-cofinality` label must actually prove them. |
| Lower-cofinality uniqueness | Lem. 3.1, Thm. 3.2 and Concl. 3.7, printed pp. 14–17 | Thread two cuts through a product tree; use Lem. 2.15 at limits and a treetop at the final stage. This gives unique `lcf(κ,s)` and lets the main theorem orient a minimal cut with its smaller side first. The stated proof was inspected, but no local supplier exists. |
| Local saturation | Thm. 4.2, printed pp. 18–19 | Realize an `Or`-type over `< min(p_s,t_s)` parameters using a tree recursion, below-ceiling limit bounds, and absence of too-small cuts. The cited theorem was read; it is needed explicitly in the successor construction of Thm. 8.5. |
| Internal size, arithmetic, and code-bearing trees | Conv. 5.1; Lem. 5.3; Cor. 5.7; Concl. 5.8 and 5.15, printed pp. 19–24 | Interpret `|A|≤_s|B|` by internal partial injections; obtain addition/multiplication, Gödel codes for bounded trees and partial functions, and an order coverable as a pair. Claim 8.2 and Thm. 8.5 use these objects, including six-coordinate tree nodes. The paper says readers interested in set-theoretic models may shortcut some §5 derivations, but no specialized `H(ℵ1)` shortcut has been stated or verified locally. This entire bridge is absent as a separate proposed result. |
| Symmetric cuts | Lem. 6.1, printed pp. 24–25 | Code a nested pair sequence in a definable tree and use below-ceiling treetops to fill any `(κ,κ)` cut for `κ≤p_s`, `κ<t_s`. Read the source argument; it depends on §5 coding. Lem. 6.2 is **not** needed by Thm. 9.1. |
| Spaced asymmetric cut | Claim 8.2, printed pp. 30–31 | Replace a hypothetical `(κ,λ)` cut by one whose right arm has multiplicative spacing and whose left arm strictly grows in internal cardinality. The construction calls Lem. 2.15 and Thm. 3.2 and uses §5 arithmetic/size. It is not identified as a separate proposed supplier, yet Thm. 8.5 starts from it. Its limit-stage pre-cut and internal-cardinality invariant need full local checking. |
| Exclusion of minimal asymmetric cuts | Fact 8.4 and Thm. 8.5, printed pp. 31–35 | For `κ<λ=p_s<t_s`, build a six-coordinate tree carrying `κ⁺` many markers, stable pairwise distance estimates, and partial injections into shrinking intervals. At successor stages Thm. 4.2 realizes a finitely satisfiable type; at limits Lem. 2.15 and the `p_s` threshold preserve markers; the final treetop, Thm. 3.2, and Fact 8.4 force an impossible internal size comparison. I traced the named interfaces and the proof outline, **not** a line-by-line verification of the finite-satisfiability clauses (p.1)–(p.9), limit-stage pre-cut, or final cardinality contradiction. A one-line `no-small-asymmetric-cuts` citation is insufficient. |
| General no-cuts theorem | Central Thm. 9.1, printed p. 36 | If `p_s<t_s`, choose a minimal cut. Thm. 3.2/Concl. 3.7 orient it, Lem. 6.1 excludes equal sides, and Thm. 8.5 excludes the remaining asymmetric case; if `t_s≤p_s`, emptiness follows by definition. This final reduction was checked against the printed proof; all upstream results remain local obligations. |
| Positive `P(ω)/fin` forcing and generic ultrapower | Def. 14.3 and paragraph before Def. 14.4, printed pp. 54–55 | Prove that almost-smaller conditions form a `<t`-closed forcing, that it adds no sequences of ground elements of length `<t`, and that the generic set determines an ultrafilter on ground `P(ω)`. Then prove generic Łoś for the ultrapower of `H(ℵ1)` by ground functions and preservation of the `p<t` hypothesis under the forcing. The paper states these facts briefly ("by definition" and "the parallel of Łoś' theorem holds"); they are not supplied by the repository's ordinary set-forcing theorem alone. |
| CSP in the generic ultrapower | Obs. 14.5 and Claim 14.6, printed pp. 55–56 | Check Def. 2.3 for finite linear orders and finite-sequence trees in `H(ℵ1)`; Łoś yields pseudofiniteness and pairing yields product closure. Source check read; depends on the unproved local generic-Łoś bridge. |
| Treetops and no cuts below classical `t` | Claim 14.7 and Concl. 14.9, printed pp. 56–57 | Reduce each tree to finite sequences in `ω^{<ω}`; use `t≤b` to choose one bound for `<t` many ground functions; use a pseudointersection of `<t` almost-decreasing finite-fibre sets to force an upper bound. The last step should explicitly say that the constructed stronger condition occurs in a **dense set** met by the generic; a particular stronger `B₁≤B∈G` need not itself belong to `G`. Concl. 14.9 composes `t≤t_s` with Thm. 9.1. The classical `t≤b` input is absent from the current batch-13 bounds. |
| Peculiar-cut transfer and contradiction | Def. 14.11, Claim 14.13, Concl. 14.15, Thm. 14.16, printed pp. 57–59 | Given Shelah's `(κ,p)` peculiar cut with `κ<p<t`, use the pseudofinite interval `∏ₙ[0,f₀(n)]/G`; any filler in the generic ultrapower is represented by a ground function `h`, and a condition deciding all comparisons yields an almost-everywhere filler on one infinite ground set, contradicting peculiar-cut clauses. The published PDF's three displayed bullets in Claim 14.13 interchange `κ₁/κ₂` and even write `g_i/G<g_j/G` where the last term should be `f_j/G`; the proof orientation must be reconstructed from Def. 14.11, not copied verbatim. I verified the typo visually on PDF p. 58 and the intended contradiction at the source level. The imported Shelah theorem and regularity of `p` remain separate obligations. |

## Boundary and unresolved checks

1. **No completed local CSP proof exists.** The proposed eight-item CSP inventory has no distinct §5 size/coding interface and no separately exposed Claim 8.2; both are consumed by Thm. 8.5. They can be folded into other items only with their full arguments and dependencies written out and audited, not by citing section numbers.
2. **The critical long proof remains unverified.** I checked the source's dependency structure and central claims, but did not recertify every step of the 5-page Thm. 8.5 induction or the general §5 coding construction. A source-backed scaffold cannot turn these into ready local suppliers without that work.
3. **The §14 bridge has unstated local proofs.** Generic Łoś, `p<t` preservation, the dense-condition step in Claim 14.7, and the corrected Claim 14.13 index orientation need explicit local statements/proofs. `t≤b` and regularity of `p` are external classical inputs. Shelah's peculiar-cut theorem is being audited separately.
4. **Scope consequence.** The 17 proposed results would leave one nominal A-item slot. This audit does not prove that no conceivable compressed 18-item proof exists, but it provides no complete route within that allowance. The honest current status is the existing `p=t` escalation. No selected scope, plan, manifest, receipt, or workflow-engine state was changed for this draft.
