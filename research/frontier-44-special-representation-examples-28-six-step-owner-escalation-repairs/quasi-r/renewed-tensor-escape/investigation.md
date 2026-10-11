# Finite-cut tensor escape investigation: induction unresolved

This is new constructive work under the existing owner renewal receipt. Neither historical repair round is reset. The reserved item `lem-cyclotomic-based-sl-two-chain-tensor-corrections-escape-every-finite-cut` has **not** been authored: its all-cut statement has not been proved. No conditional or finite-experiment replacement is offered as that item.

## Actual readings and scope

Read CLAUDE.md, README.md, SCHEMA.md and WORKFLOW.md in full. Read the complete current chain construction, structural finite-envelope counterexample, both original quasi-R items, both original round reports, renewed authoring obstruction, structural investigation, and renewed owner authorization. The exact symbolic programs supplied by the lead author were read completely. This investigator did not acquire or independently read an authoritative external full text; the retained lead-source readings are context and are not relabeled as this investigator's source reading.

The chain is the actual four-axiom based integrable sl-two module, with `n_j=j(j+3)`, `ell_j=j+3`, `r_j=j+2`, cyclotomic `p_j=q^(-phi(2ell_j)/2) Phi_(2ell_j)(q)`, and exact square-zero consecutive shears. The finite cut at J retains summands 0 through J and omits T_J. Tensor seed is `b_00 tensor b_00`.

## Exact experiment

The retained `exact-finite-cut-experiment.py` constructs the actual rank-one quasi-R coefficient

`a_r = q^(-r) product_(1<=h<=r)(q^(2h)-1)`

and divided-string Gaussian actions. It expands each input from raw to standard basis, applies every possible raising/lowering term, and returns to raw basis with the exact inverse shears. Rational functions are canceled exactly with SymPy. The normalized correction algorithm processes increasing first-factor weights, adds the strictly positive Laurent part of each residual, and checks that all processed residuals become exactly zero. It rejects a non-Laurent coefficient rather than treating a rational Taylor series as a polynomial. Returning from `solve` means the complete bar residual is zero. This is a finite exact calculation, not an independent audit.

Actual executed commands were `python3 /tmp/quasi-r-residue.py` (J=1,2,3) and `python3 /tmp/quasi-r-residue4.py` (J=4), using the installed dependency directory `/tmp/quasi-r-python-deps`. Both exited zero. The original `python` invocation failed because that executable did not exist; it is not counted as a successful check. The original scripts are preserved with their execution paths in this folder. A fresh machine needs SymPy and may change the absolute script import paths accordingly.

The raw endpoint `b_(J,0) tensor b_(J,n_J)` has a positive-polynomial coefficient f_J. Exact polynomial remainders modulo the next cyclotomic polynomial are:

| J | Nonzero lift support | remainder of f_J modulo Phi_(2(J+3)) |
|---|---:|---|
| 1 | 3 | `2q^3-2q-2` |
| 2 | 9 | `-12q^3+12q^2+16` |
| 3 | 16 | `264q^3-528q-432` |
| 4 | 24 | `-23040q^5+9792q^4-9792q^3+23040q^2+26496` |

The J=4 endpoint degree is 254. Each displayed remainder has degree smaller than its divisor and is nonzero, hence proves endpoint nonvanishing and nondivisibility in that particular cut. It does not prove the all-J conclusion.

Standard field coordinates provide an additional check. With x=q+q^(-1), the incoming diagonal center coefficients for J=1,2,3 are respectively

`1/p_0^2`,

`x(2x^2+x-2)/(x^2-2)^2`,

`-4(8x^3-5x^2-14x-4)/(x^2-x-1)^2`.

They are not uniformly positive rational functions on the real interval above all earlier poles. In particular the third numerator changes sign before x=2. Raw correction coefficients also have negative terms. An unproved positivity induction was therefore rejected.

## Exact missing inference

An incoming diagonal block has a double-pole contribution from the previous endpoint coefficient divided by p_(j-1)^2. Mixed raw terms have at most a simple p_(j-1) pole. Thus nondivisibility of the previous endpoint by p_(j-1) is a useful sufficient input to a pole propagation argument. The experiments verify this input for the first four endpoints, but no argument proves it for every j. Nonzero endpoint alone does not imply nondivisibility by the next cyclotomic factor.

At q=exp(i pi/(j+3)), several standard Gaussian transition entries have sine-product signs that cancel toral signs, and the observed endpoint values alternate signs. This does not establish a signed norm: positive Laurent-part extraction depends on the global Laurent polynomial, and specializing the bar matrix at one root does not determine that extraction. No Hermitian-form identity identifying the actual endpoint with a definite nonzero norm has been established.

The center-pole argument and root sign pattern are therefore investigation routes, not proofs. Neither finite supported quasi-R action nor the structural failure of finite based envelopes alone refutes tensor globalization.

## Consumer and validation disposition

The lead author's full tensor counterexample would require this all-J escape assertion (or another uniform escaping raw coordinate) and coherence of finite cuts. A full algebraic lift with maximum raw factor index K has its bar calculated identically in sufficiently larger finite cuts: forward shears raise an index at most once and inverse shears at most once, so J at least K+2 suffices for that calculation. Finite-cut normalized-lift uniqueness would then contradict nonzero escaping endpoints in every such cut. The coherence route is available; the uniform escaping-coordinate hypothesis remains open.

No item, contract, manifest, page, source ledger, runtime state, native history, Git or index was changed. Explicit item precheck, render and proof-layout are not applicable because no mathematical carrier was authored. This evidence is not a carrier, acceptance or gate closure.
