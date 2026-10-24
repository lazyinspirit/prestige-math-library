# Algebraic Geometry diagram supplement: round 03, lane 05

## Review

**`lem-blowing-up-a-regular-point-is-a-contraction` — Statement, lines 38–40.** A paired schematic is a useful editorial aid for the blowup/contraction directions, exceptional fibre, and off-center isomorphism. The main blowup map and its properties are stated consistently: \(\pi:S'=\operatorname{Bl}_pS\to S\), \(E=\pi^{-1}(p)\), and \(S'\setminus E\cong S\setminus\{p\}\). The mathematical construction in this direction is correct.

There is a likely base-label typo in the converse. The statement calls \(b:X\to X'\) the blowup of a point of \(X'\), but says the identification is “over \(X\)” (line 40). The blowup is \(\operatorname{Bl}_{x'}X'\to X'\); the natural isomorphism identifying its source with \(X\) must commute with the maps to \(X'\). The diagram should therefore label that isomorphism as over \(X'\), subject to confirming the intended wording. This is a base-label issue, not a problem with the blowup/contraction map direction.

## Diagram details

For the forward direction, draw \(\pi:S'=\operatorname{Bl}_pS\to S\), with \(E=\pi^{-1}(p)\subset S'\) over the closed point \(p\). Label \(E\cong\mathbb P^1_{\kappa(p)}\) and \(\mathcal O_E(E)\cong\mathcal O(-1)\), and show the restricted isomorphism

\[
S'\setminus E\xrightarrow{\sim}S\setminus\{p\}.
\]

For the converse, draw \(b:X\to X'\) contracting \(E\) to \(x'=b(E)\), then identify \(X\cong\operatorname{Bl}_{x'}X'\) so that \(b\) is the blowup structural map. The target point \(x'\) has a regular two-dimensional local ring. Mark this identification as over \(X'\), not over the blowup source.

## Evidence and scope

- Reviewed the assignment-bound snapshot; its SHA256 matches `660b2d06df650bbd512db0e6e29929ddf0be226a3df8f0c599fd6aead1474b3a`.
- Viewed all three listed local screenshot tiles at original resolution: `lem-blowing-up-a-regular-point-is-a-contraction--01.png` through `--03.png`.
- The rendered statement has no diagram. This supports the editorial recommendation only; no mathematical error is inferred from that absence.
- No item content or publication status was changed. No live website or external source was used.
