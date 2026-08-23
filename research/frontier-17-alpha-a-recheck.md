# Frontier 17 — Alpha group a step-3 recheck

Scope: batches 2, 4, and 5. I re-read the current manifests, coverage records,
Step-3 fix-pass notes, affected proof-contract entries, current plan entries,
and the published target used by the Toronto Example 3 disposition. The APEX
Example 214 and Toronto MAT237 §2.8 locators were also reopened at their current
reader-visible URLs.

## Finding dispositions

- `B2-1` — **confirmed** — `research/frontier-17-batch-2.pages.json` adds `ex-surface-area-of-the-sine-solid-of-revolution` immediately after the volume computation, with dependency `cor-surface-area-of-revolution-formula` and exact value $2\pi(\sqrt2+\operatorname{arsinh}1)$. Both OpenStax surface-area rows and APEX Key Idea 28 / Example 214 now point to it, and its contract binds the formula and endpoint evaluation.
- `B2-2` — **confirmed** — `ex-volume-of-the-sine-solid-of-revolution` now depends on `thm-volume-of-a-solid-of-revolution-by-discs`; the former Cavalieri, disc-content, and graph-region reconstruction edges are absent, and contract step 1.1 quotes the RC-5 disc theorem.
- `B4-1` — **confirmed** — the two false statements reconstruct the cone and $F(x,y)=x^2$ witnesses in their own strategies and contracts. Neither manifest entry nor contract cites the corresponding AI-generated counterexample construction.
- `B4-2` — **confirmed** — the regular-surfaces manifest declares all four repaired prerequisites: `inner-product-spaces-and-orthogonality`, `improper-and-parameter-dependent-multiple-integrals`, `the-integral-logarithm-and-its-characterisations`, and `volumes-of-elementary-solids-and-solids-of-revolution`. Its `requires` array agrees exactly with `research/plan-spec.json`.
- `B4-3` — **confirmed** — the Toronto harvest now has separate rows for Examples 3 and 5. Example 3 is assigned to the published, literature-derived `cex-lagrange-multiplier-rule-needs-a-regular-constraint`. The Example 5 deferral is accepted: the source is a worked sphere-plane elimination after the already-included two-constraint theorem, and the row gives a result-specific reason and companion-page destination, which is one of the dispositions the original finding permitted.
- `B4-4` — **confirmed** — `fs-finite-volume-implies-finite-lateral-surface-area` follows the existing horn-area example on the companion page and combines the compact-truncation disc volumes, the improper $p=2$ limit, the surface-of-revolution formula, and $p=1$ divergence. The APEX finite-volume row points to this item, and its proof contract covers both halves of the refutation.
- `B4-5` — **confirmed** — `ex-closed-cylinder-as-a-finitely-patched-oriented-surface` declares `lem-parameter-boundary-exceptions-do-not-affect-surface-integrals`, and its contract cites that lemma at the patch-presentation step.
- `B5-1` — **confirmed** — `thm-volume-of-a-closed-three-ball-cavalieri-proof` has no dependency or contract citation to `cor-volume-of-a-closed-three-ball`; its route uses Cavalieri, disc sections, finite additivity, and the earlier cylinder and cone formulas.
- `B5-2` — **confirmed** — `thm-volume-recursion-for-closed-euclidean-balls` declares `thm-linear-images-scale-jordan-content-by-absolute-determinant`, and contract fact F2 applies its scaling equation to the sectional dilation in step 2.2.
- `B5-3` — **confirmed** — both Gamma and Beta convergence items declare the logarithmic primitive and logarithm-range theorems. Their strategies and contracts isolate $s=0$, $p=0$, and $q=0$ as logarithmic threshold cases.
- `B5-4` — **confirmed** — `thm-real-gamma-is-smooth` declares `thm-induction-principle`; contract fact F3 states its property form and the all-orders derivation uses it at step 2.1 with an explicit induction discharge.
- `B5-5` — **confirmed** — the volume page declares `improper-integrals`, the Gamma page declares the earlier volume page, and both live `requires` arrays agree exactly with their current plan entries.

## Per-pair verdicts

- `trigonometric-and-oscillatory-examples-in-several-variables` — **ready for splice**.
- `constant-rank-submersions-and-regular-level-sets` — **ready for splice**.
- `regular-surfaces-and-surface-integrals` — **ready for splice**.
- `volumes-of-elementary-solids-and-solids-of-revolution` — **ready for splice**.
- `the-real-gamma-and-beta-functions` — **ready for splice**.

No group-a Step-3 finding remains open.
