# Paired Murphy Gram construction: proved family and exact remaining gap

Run: frontier-44-special-representation-examples-28. Construction-only packet under the single owner exception. No canonical integration, consumer acceptance, audit, native counters, engine state, gates, publication or push is performed here.

## Outcome

A complete specialization-safe paired coefficient is proved below for the two-row hook `(a,1)`. The general restricted-partition criterion is **not proved** in this packet. In particular there is no asserted general product formula, and the saved ladder-boundary gap is not silently assumed.

## Actual reading and source limitations

Read CLAUDE.md and README.md fully, SCHEMA.md and relevant WORKFLOW controls, authorization.json, the canonical Specht/form definition and classifier, and the previous classification-ladder-constructor/construction-and-exact-gap.md. Consulted the authentic complete 79-page Mathas manuscript PDF at the local path sealed in input-guards.json, SHA256 8cfeb611a95a3ff25cb95ad22bfd3a68475818301c34b04d131a8480a1b997e0. Actually read PDF pages37–41 (printed31–35) and bibliography pages77–78. Full extracted text is preserved as an acquisition artifact, **not a claim that all79 pages were read**. Legacy PDF font extraction contains control-character glyphs; its mathematical passages were interpreted using the page text and the already available printed-page evidence.

Mathas Lemma3.38 proves common divisibility of all Murphy Gram entries. Theorem3.39 uses Lemmas3.35 and3.37 for restricted nonvanishing. It does not display a general paired coefficient product. Printed35 Note7 identifies the divisibility argument as Murphy [56], with comparison to Dipper–James [13, Theorem6.8]. Bibliography identifies [13] as Dipper and James, *Representations of Hecke algebras of general linear groups*, Proc. London Math. Soc. (3)52 (1986),20–52, and [56] as Murphy, *The representations of Hecke algebras of type A_n*, J. Algebra173 (1995),97–121. No fulltext of [13] or [56] was located locally in this pass, and no reading of those original papers is claimed.

The previous packet correctly isolates the finite-e full-ladder-boundary dominance proposition as missing. The manuscript's last-node argument does not itself provide a specialization-safe paired Gram identity.

## Proved universal row-reading witness

Work first over A=Z[Q,Q^{-1}], then specialize to any field F and unit q. Put x_lambda=sum_{w in S_lambda} T_w. The length-additive parabolic coset decomposition and T_w x_lambda=Q^{ell(w)}x_lambda for w in S_lambda give

`x_lambda^2 = (prod_i [lambda_i]_Q!) x_lambda`.

The coefficient is therefore the norm of the canonical Murphy vector. If e=∞, every factor is nonzero, proving the nonzero direction for every partition. More generally it proves nonvanishing whenever lambda_1<e. It does not prove nonvanishing for restricted partitions whose first row reaches e. No factor is divided out after specialization.

## Complete paired construction for lambda=(a,1)

Assume a≥1, n=a+1. For a=1, lambda=(1,1) and the canonical vector has norm1. Assume a≥2. Let x=x_(a,1), X=x_(a+1), and s_a be the last adjacent transposition. The row-reading tableau t has last row entry a+1. The standard tableau u=t s_a has first row1,...,a−1,a+1 and second row a.

There are exactly two S_a-double cosets in S_(a+1), represented by1 and s_a. Their intersection parabolics are S_a and S_(a−1), respectively. Length-additive parabolic decomposition gives the integral identities

`x^2=[a]_Q! x`,

`x T_a x = [a−1]_Q! (X−x)`.

For completeness the second identity follows by expanding both x factors. Every permutation in the nonidentity double coset occurs with coefficient equal to the Poincare polynomial of its intersection S_(a−1), namely [a−1]_Q!, because the intersection factors act on x by Q to their length; the remaining left/right distinguished representatives concatenate length-additively through s_a. Their sum is exactly X−x: the identity double coset consists of S_a and every other permutation lies in the second double coset. This argument takes place in the free A-basis {T_w}; it requires no inverses of quantum integers.

The only partition strictly dominating (a,1) is (a+1), so X is zero modulo the higher Murphy ideal. The cellular product definition gives

`<m_t,m_u> = −[a−1]_Q!`.

For arbitrary standard s,v of (a,1), x T_{d(s)} T_{d(v)}^* x is an A-linear combination of x T_w x. Each w lies in one of the above double cosets. Minimal double-coset decomposition w=r d z is length-additive, and the parabolic factors r,z act on the exterior x factors by powers of Q. Thus x T_w x is a Q-power times x^2 or x T_a x. Every Gram entry is divisible by [a−1]_Q! before specialization.

Consequently the Murphy form for (a,1) is nonzero over F iff [a−1]_q! is nonzero iff a−1<e (with infinity allowed). This is exactly e-restrictedness: the adjacent differences are a−1 and1. The calculation applies at q=1 in every characteristic and at e=2, including characteristic2. For (2,1) the paired coefficient is the universal unit−1; this explicitly illustrates why a vanishing canonical row norm at e=2 cannot prove vanishing of the form.

## Exact missing general Gram step

For arbitrary lambda, the double-coset expansion still has an integral intersection-parabolic factor, but reducing its double-coset sum modulo the higher Murphy ideal requires full Garnir/Murphy straightening. The shape-(a,1) argument succeeds because there is just one higher shape and its sum is X. For general lambda no such reduction was established here.

A sufficient missing lemma would construct, for every e-restricted lambda over arbitrary F,q, two A-linear combinations of standard Murphy vectors (or one explicit standard pair) whose integral Gram coefficient specializes to a nonzero product of quantum integers with indices<e, with every straightening term and coefficient proved. It must not infer this coefficient by dividing the common row norm prod_i[lambda_i]! at q where that norm vanishes. A field-independent identity of the tempting form `unit * prod_i [lambda_i−lambda_(i+1)]!` would suffice if true for the chosen vectors, but **this packet does not assert that identity**. It has not supplied suitable vectors or cancellation for general shapes.

Alternatively the previously isolated full-ladder-boundary dominance proposition, together with an independently proved integral triangular Jucys–Murphy composition-factor argument, would prove nonzero without an explicit pair. That is a different route and still requires the missing proposition; it is not proved by the two-row double-coset calculation.

The established signed conjugate bridge would then transport Murphy restrictedness to the full ordinary e-regular statement without changing any characteristic2/e2 or q=1 range. Until one of these general missing steps is proved, this packet cannot close the exact exhausted classifier defect.
