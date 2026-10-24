# Topology visual audit — lane 10

## Scope and coverage

Visually audited all 94 assigned items, including each title and complete rendered ItemBody, using all 164 receipt-listed revision-2 screenshot tiles. Each tile was individually opened at original resolution. Snapshot and local HTML hashes match the assignment; each tile hash matches its screenshot receipt. The coverage ledger is [lane-10.json](lane-10.json).

## Findings

- **Confirmed incomplete title:** [lem-the-diagonal-map-is-an-embedding.md](snapshots/lem-the-diagonal-map-is-an-embedding.md:4), line 4, ends “whenever $f$ and $g$ are” without stating the needed condition. The frozen title renders as an unfinished clause in [title tile](screenshots/lem-the-diagonal-map-is-an-embedding--01.png). Suggested title repair: “The diagonal map is a topological embedding of $X$ onto $\Delta_X$, and the pairing of continuous maps into a product is continuous.” The Statement at lines 33–35 independently specifies that both component maps must be continuous.

- **High-likelihood missing diagram:** [fs-van-kampen-with-disconnected-intersection.md](snapshots/fs-van-kampen-with-disconnected-intersection.md:33), lines 33–35, states the proposed pushout using the span $\pi_1(U,x_0) \leftarrow \pi_1(C,x_0) \rightarrow \pi_1(V,x_0)$. A commutative diagram would make the claimed universal property and its comparison to $\pi_1(X,x_0)$ immediately legible. Concrete arrows are induced by the inclusions $C\hookrightarrow U$, $C\hookrightarrow V$, $U\hookrightarrow X$, and $V\hookrightarrow X$; the comparison map from the pushout to $\pi_1(X,x_0)$ is induced by the latter pair. This is a suggested diagram opportunity for the stated false claim, not a claim that the proof relies on a diagram.

No existing TikZ or TikZ-CD diagrams appeared in the assigned snapshots. No source, application, or production files were changed; item statuses were preserved.
