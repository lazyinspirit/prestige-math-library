# Diagram supplement lane 06

## Coverage

| Item | Status | Review |
|---|---|---|
| `lem-pushforward-pullback-compatibility-chow` | clean | The displayed square has the correct Cartesian orientation and labels: (X'\xrightarrow{g'}X), (Y'\xrightarrow{g}Y), with (f':X'\to Y') and (f:X\to Y). By the stated fibre-product definition, (X'=X\times_Y Y'); hence (f') is the base change of (f) along (g). The formula (g^*\circ f_*=f'_*\circ g'^*) is in the correct order and both composites map (A_d(X)\to A_{d+n}(Y')). No mathematical diagram defect found. |

## Evidence

- Reviewed the assignment-bound snapshot at `snapshots/lem-pushforward-pullback-compatibility-chow.md`; its SHA256 matches the assignment binding `0c289e144f72ddd13227d1b32b166ed6c932cd50765b4a4de606274af171063f`.
- Reviewed the local rendered preview screenshots at original resolution: `screenshots/lem-pushforward-pullback-compatibility-chow--01.png` and `screenshots/lem-pushforward-pullback-compatibility-chow--02.png`.
- Checked the Cartesian-square convention against `def-fibre-product-schemes-universal-property`, and the stated base-change properties against `lem-proper-stable-base-change` and `lem-flat-morphisms-stable-base-change`.

This lane reviews an existing displayed diagram. It is not a missing-diagram finding.
