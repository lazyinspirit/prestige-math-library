<!-- Recovered by Alpha-a from research/frontier-14-dispatch/refuter-refuter-b3-examples.log (stdout summary; no numbered block emitted). -->

Blocked: the enforced read-only sandbox rejected creation of `research/frontier-14-refuters/b3-examples.report.md`, and escalation is forbidden. No file was written.

The completed findings were:

- `B3-EXAMPLES-1` — fatal — `ex-baire-sequence-space-and-the-irrationals:37-47`: [F1] states only that some homeomorphism exists; [F2] gives cylinder geometry. Neither licenses using the specific continued-fraction parametrisation. The needed statement is at `thm-simple-continued-fractions-parametrise-the-irrationals:31-33`.

- `B3-EXAMPLES-2` — fatal — `fs-every-metrizable-space-is-cech-complete:37,49`: [F1] states the false claim that \(\mathbb Q\) is Baire, but step 1.1 cites it to infer that \(\mathbb Q\) is not Baire. The target’s actual Statement at `fs-the-rational-numbers-form-a-baire-space:29-31` has exactly the wrong polarity.

- `B3-EXAMPLES-3` — fatal — `ex-real-line-mod-integer-translations-is-a-covering:37,43,49-53`: `def-integers:30-41` only constructs abstract integers. It does not supply \(\mathbb Z\hookrightarrow\mathbb R\), integer arithmetic, translation homeomorphisms, or the covering-space action required by [F1]. The embedding is instead stated at `lem-integer-part:37-42`.

- `B3-EXAMPLES-4` — fatal — `ex-power-maps-on-real-line-mod-integers-are-finite-sheeted-coverings:37,43,49-51`: proving exactly \(m\) fibre points requires unique residues modulo \(m\). Neither cited fact supplies integer operations or the division algorithm. The missing clause appears at `thm-standard-representatives-modulo-n:26-35`.

- `B3-EXAMPLES-5` — nonfatal — `ex-hilbert-cube-as-a-compact-polish-universal-space:53` and contract `:5289-5295`: step 3.1 cites [F3], Tychonoff’s theorem, for universality. The required embedding theorem is [F2]. Sub-30-second citation repair.

- `B3-EXAMPLES-6` — nonfatal — `fs-every-baire-space-is-completely-metrizable:55`: step 3.1 infers nonmetrizability from failure of first countability, but [F3] only defines first countability. The needed metric-space implication appears at `def-first-countable-top:78-81`.

- `B3-EXAMPLES-7` — nonfatal — `cex-a-surjective-local-homeomorphism-need-not-be-a-covering-map:41,51`: [F3] gives only the underlying tagged coproduct set. Step 2.1 needs the omitted topology and summand-embedding clauses at `def-disjoint-union-topology:61-84`.

- `B3-EXAMPLES-8` — nonfatal — `cex-a-disconnected-base-allows-variable-sheet-number:39,45-47`: [F2] stops before defining the discrete topology, though the proof needs singleton sets to be open. The operative clause is `def-standard-topologies:51-52`.

- `B3-EXAMPLES-9` — nonfatal — contract `:8666-8669`, `ex-trivial-coverings-and-discrete-fibre-products`: the `one` row falsely says one-sheet cases do not arise. Taking \(F=\{*\}\) gives exactly such a case.

- `B3-EXAMPLES-10` — nonfatal — contract `:9409-9412`, `ex-pullback-over-an-evenly-covered-open-set-is-trivial`: the `one` row is falsely `not_applicable`; the identity covering supplies an immediate one-sheet pullback case.

- `B3-EXAMPLES-11` — nonfatal contract defect — contract `:5335-5338`, `ex-hilbert-cube-as-a-compact-polish-universal-space`: `nonempty-choice` is marked inapplicable even though [F3] explicitly invokes Choice to obtain a product point. The underlying fatal hypothesis defect is already R3-29.

All 14 scoped items, their 42 direct Fact targets, and every scoped boundary row were opened. No additional local finding arose for `fs-the-rational-numbers-form-a-baire-space`, `cor-nowhere-differentiable-functions-are-residual-in-c01` beyond R3-30, `ex-the-unit-loop-in-real-line-mod-integers-is-essential`, or `ex-the-hawaiian-earring-has-no-universal-cover`.
