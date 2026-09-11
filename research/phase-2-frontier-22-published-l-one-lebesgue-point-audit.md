# Frontier-22 published L1 and Lebesgue-point audit

Date: 2026-09-11

## Scope and deduplication

| Published item | SHA-256 |
|---|---|
| `def-l-one-of-a-measure` | `5caefc820bcc65d1f7589f0e5f0a1fc9ee0f9db29056a256aebe9cc4c2de39b8` |
| `def-translation-of-a-function-on-rn` | `987ab54f906549fa362093d3078c32015f00b4f4d484112dedc392f3ddfb8314` |
| `def-c-zero-on-rn` | `ed453e3915d751b38ff7547a849476a76b0ef66677f0e3552f83c78921b7fc20` |
| `thm-almost-every-point-is-a-lebesgue-point` | `1d8cb32e492c13b80392a47f35cd857b635cad42b92a3e3bdd3b42f06446af3d` |

All four complete targets and the exact integrability, complex-component,
countable-null-union, density and differentiation clauses were read. Every
exact ID was searched in the whole canonical ledger and in every classification
section. Integrable representatives versus a.e. classes, translation sign,
real/complex `C_0`, compact-set versus Euclidean-ball tails, and countable
Lebesgue-point exceptional sets were also searched. None of the four targets
had a classification row or item-specific defect finding. The one existing
Lebesgue-point ID mention only maps a supplier and does not classify it.

## Bounded dispositions

`L^1(mu)` is explicitly the class of integrable complex-valued representatives,
leaving the later quotient page to pass to a.e. classes. Translation by `h` is
unambiguously `f(x-h)`, matching the positive graph-shift convention. The real
`C_0(R^n)` definition gives the standard compact-tail condition; Heine–Borel
makes it equivalent to a large-ball tail. The separate published complex-Lp
convention explicitly extends this real definition componentwise, so a complex
Fourier conclusion is well typed. That convention has a different existing
A-P defect in its finite-`p` norm definition, which this audit neither duplicates
nor changes.

For the Lebesgue-point theorem, the countable dense set `Q+iQ` is explicit. For
each of its constants, differentiation applies to the locally integrable real
function `|f-c|`. The theorem states countable choice, which supplies the
countable exceptional-set family and the null-union step. Outside that union,
one dense constant chosen for the fixed value `f(x)` gives the averaged
oscillation bound and hence the zero limit. No additional family selection is
used.

Classification: four new bounded no-repair-needed dispositions. No current
Step-5 blocker, new Phase-2 supplier or new pair was found.

## Limits

This pass certifies the four complete targets and their exact Fourier-facing
clauses. It does not certify the draft Riemann–Lebesgue proof or repair the
separate complex-Lp finite-`p` norm definition. No external source was newly
consulted, no published item was edited, and no independent judgment or
exhaustive discovery claim is made.
