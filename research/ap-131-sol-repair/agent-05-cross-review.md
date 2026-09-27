# Agent 05 bounded cross-review of agent 10 ODE prerequisites

Read-only review, 2026-09-24. I did not edit the agent 10 items.

## Scope and source

I read the complete published drafts of `lem-asymptotically-hyperbolic-half-line-operator-has-right-inverse`, `lem-first-order-asymptotically-hyperbolic-operator-is-fredholm`, and `thm-local-stable-unstable-manifolds-for-hyperbolic-gradient-critical-points`; their named flow, matrix-ODE, spectral, and differentiability suppliers; and the Morse–Smale transversality consumer. I read the actual Abbondandolo–Majer PDF at <https://people.dm.unipi.it/abbondandolo/preprints/montreal.pdf>: printed pp. 39–44 (function-space definitions, Propositions 1.6 and 1.8), 45–49 (local-flow and stable-manifold theorem), and 80–81 (Lemma 2.21). These are printed page numbers; the PDF offsets are respectively 3–8, 9–13, and 44–45.

The source defines `C^k_0` as the supremum-norm Banach space of functions whose derivatives through order `k` vanish at infinity. Proposition 1.6 supplies a *right* inverse for the half-line operator and evaluation spanning; Proposition 1.8 uses two half-line inverses and the finite-dimensional mismatch at time zero to derive the whole-line Fredholm index. The two new ODE items follow those contracts. In particular, the half-line proof supplies the stable/unstable convolution inverse for a constant hyperbolic matrix, a Neumann perturbation on a tail, finite-interval extension, and the endpoint evaluation argument. The whole-line proof identifies its range with the kernel of a surjective map to the evaluation mismatch quotient, giving the stated index.

## Stable-manifold contract and disposition

The first draft of the stable-manifold item assumed `C^3` `f` and `C^2` `g`, while its cited flow suppliers require a smooth vector field. I reported the discrepancy to agent 10; the current Statement assumes smooth `f,g`, matching the suppliers and the direct Morse–Smale consumer. The weighted Lyapunov–Perron contraction, `C^1` parameter dependence, local stable-set converse, and finite-time flow saturation now have the regularity they use. I found no further proof-contract defect in this bounded review.

At the reviewed snapshot, the metadata cited Section 1.4 and printed pp. 39–40 for the stable-manifold result. The exact result is Section 1.5, Theorem 1.12, printed pp. 47–49; Lemma 2.21(ii), printed pp. 80–81, supports the application. I sent this correction to agent 10, who has since applied it. It was a citation correction, not a mathematical blocker.

Hashes at review snapshot, in the order half-line, whole-line, stable: `241c1cbcd6a75d079e07abe3af57b449ca7903d8`, `e16a8793cb739cd841cc250da9603019eeb79814`, `cc198ae9befe07dca7c81825fcbc381bf39bdb2d`. The stable theorem's current hash after the citation correction is `5998476d4c83a79068ed0080e6ee99f73768c471`.

## Shard 05 artifact check

`agent-05-report.md`, 23 receipt rows, and 23 impact files are present. Before this cross-review, I compared every receipt's current after-hash with its item file: no mismatches; nine receipts record outside maintenance. The receipts themselves remain the authoritative exact diff/use ledger for this shard.
