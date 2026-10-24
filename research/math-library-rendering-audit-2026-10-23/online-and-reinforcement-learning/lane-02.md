# Online and Reinforcement Learning rendering audit — lane 02

## Coverage

- Reviewed all 27 assigned frozen titles and complete ItemBodies against their snapshots, current source, and local HTML. Opened all 47 assigned PNG tiles individually with `tools.view_image` at original resolution.
- Source, snapshot, and HTML hashes match all assignment records; each PNG hash matches its capture receipt. Exact per-item and per-tile hashes, capture positions, and view attestations are in [lane-02.json](lane-02.json).
- Capture receipts report zero KaTeX errors and zero diagram failures. They report zero rendered TikZ diagrams. Two source TikZ blocks appear literally as text in the rendered tiles, described below.
- No standalone clipping was confirmed. Reference links rendering as separate blocks are expected.

## Confirmed rendering findings

- **Raw TikZ source in ItemBody:** [ex-model-exploitation-off-support, lines 33–41](../../../items/ex-model-exploitation-off-support.md:33). The example describes a one-state MDP with safe and off-support deterministic self-transitions. Its TikZ block specifies a state node with two labeled loops, including true/learned rewards. The local HTML and tile print the literal commands; the diagram is absent. See [tile](screenshots/ex-model-exploitation-off-support--01.png).
- **Raw TikZ source in ItemBody:** [ex-short-versus-long-model-rollouts, lines 33–51](../../../items/ex-short-versus-long-model-rollouts.md:33). The example describes true and learned two-state transition models. Its TikZ block specifies two model copies, reward labels, self-loop probabilities, and the learned-only transition of probability `ε`. The local HTML and tile print the literal commands; the comparison diagram is absent. See [tile](screenshots/ex-short-versus-long-model-rollouts--01.png).

The frozen snapshots match current source for both blocks. Their capture receipts list `tikz_count: 0` and no diagram failure, but the raw source is visible in the tiles. The intended diagram relationships are consistent with each example; rendered geometry could not be inspected.

No other literal TeX/KaTeX, ASCII math, caret, or underscore display issue was confirmed in the assigned ItemBodies. Several lines of reference links render as separate blocks, as expected.

## Diagram review and candidates

- The two source diagrams above cannot be visually checked because their TikZ code is emitted as text. The descriptions and source coordinates/labels encode the stated model relationships; see `existing_diagram_checks` in the JSON.
- **Optional POMDP Bayesian-update diagram:** [ex-pomdp-two-state-bayes-update, line 31](../../../items/ex-pomdp-two-state-bayes-update.md:31) gives prior masses `3/4, 1/4`, likelihoods for observation `x` of `3/4, 1/4`, evidence probability `5/8`, and posterior masses `9/10, 1/10`. A two-state probability-flow diagram could connect prior, emission likelihood, evidence, and posterior. The text already gives and verifies the calculation.
- **Optional policy-iteration flow diagram:** [alg-policy-iteration, lines 34–42](../../../items/alg-policy-iteration.md:34) defines exact evaluation, greedy action values, retained current actions when already greedy, first-in-list tie resolution otherwise, and return on an unchanged policy. A finite loop diagram could highlight that branch and the stated `N_det−1` change bound. The procedure is already explicit in text.

This review covers local rendering only, not live routes or full mathematical correctness. No source items, application files, or publication statuses were changed.
