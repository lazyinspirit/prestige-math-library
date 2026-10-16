# Candidate source edits — recursive sparse-fault gap, cycle 1

Proposal only. No source edit has been applied. Native 5.2 must decide, author the supplier proof, and own the entire consumer closure. In particular, the finite certificate below is an additional local proof obligation, not something established by the existing weak contract.

## 1. Strengthen the finite proper-code contract

Target: `items/def-qc-ft-gadget-and-proper-code-contract.md`. Append the following paragraphs to Definition, before the final paragraph beginning “The finite physical gate alphabet”. Keep its existing one-level sector identities.

> For recursive use the family additionally supplies a proved **local port-substitution certificate** for its finite templates. Fix an allowed $q$ and put $b=q\ell$. The certificate includes noisy arbitrary-input attraction: with at most $q$ faulty locations, correction and every designated input-refresh template map arbitrary inputs into their declared residual error ranges, without asserting preservation of the original logical state on such inputs. They preserve that state on their declared correctable input sectors. Zero-fault arbitrary-input attraction alone does not imply this clause.
>
> Here is the certificate's one-layer experiment. Replace each elementary wire by an arbitrary finite encoded port with isometry $U$ and correctable residual error span $\mathcal T$. Keep a private syndrome register attached to that port. On its admitted range, a good replacement has its stated ideal logical channel or instrument tensored with maps of those attached syndrome registers, with full trace preservation on the admitted domain. Its admitted intermediate computation and correction sector types must be stated. A marked replacement is an arbitrary local CPTP map on all its listed ports; its output need not be admitted. Refresh replacements have both the preceding admitted-sector identity and arbitrary-input attraction. Public classical outcomes remain explicit ports. These hypotheses concern one finite substitution experiment, with no concatenation index.
>
> Let $\mathcal H_s(\mathcal T)$ be the span of tensor operators on the $m$ substituted coordinates having at most $s$ unrestricted factors and all other factors in $\mathcal T$, and put $\widetilde V=U^{\otimes m}V$. For each placement of at most $q$ marked replacements, the certificate proves by contraction of the finite template's branch Kraus maps that computation sends $\mathcal H_b(\mathcal T)\widetilde V$ inputs to $\mathcal H_{2b}(\mathcal T)\widetilde Vg$ outputs, and correction sends $\mathcal H_d(\mathcal T)\widetilde V$ inputs to $\mathcal H_b(\mathcal T)\widetilde V$ outputs with the same logical register. On arbitrary inputs correction and the designated refresh templates have range in their stipulated residual sectors with an unspecified logical map. Protected preparations and public readout have the corresponding outcome-resolved identities. All assertions are joint operator-span identities across live blocks, with arbitrary syndrome coefficients, actual subnormalized branches, full trace preservation of their sum, and identity on the external reference.
>
> The certificate must exhibit the finite reduction proving those identities: where an inadmissible port is first refreshed before it interacts, why the refresh can be absorbed into its preceding marked local map without enlarging that map's ports, and why every still-inadmissible output coordinate belongs to the same residual support already counted in the budget. It gives an acyclic order establishing correction, computation, and refresh attraction from their lower-port versions, retaining any stronger zero-marked-location clause actually used. Syndrome registers stay attached to their original physical edges. An ideal decoder may not be inserted into the faulty circuit. Ordinary spread, alphabet closure, and noisy attraction without these support and domain checks do not supply the certificate. The certificate is a local supplier proof obligation; correctness of all concatenation levels is a separate induction.

This is deliberately a finite, syndrome-parametric compositional obligation, not “assume the stage contracts at every level”. A family may use any finite proof of this certificate, including a different refresh design. The native repairer should simplify this formulation if a smaller equally sound finite certificate can be proved, but must retain noisy attraction, port locality, coherent-sector identities and residual/invalid-port support accounting.

## 2. Replace the sparse-path proof with two separate inductions

Target: `items/lem-qc-sparse-fault-path-implies-code-deviation.md`.

In Statement, add after “explicit joint computation and correction identities below”:

> , including a proved finite local port-substitution certificate

Replace the phrase “the joint output instrument is in the encoded error sector of budget at most $d$ after its ideal encoded target” by:

> the joint output instrument is in the hierarchical encoded error sector $\mathcal E_{r;q\ell}$ defined in the proof, corrected by the recursive decoded recovery $D_r$

At the end of Statement add:

> At level one this is the ordinary encoded-instrument relation. At higher levels it is a hierarchical sector; it does not bound the total number of elementary physical errors by $d$.

In Given and F2 explicitly require the proved finite port-substitution certificate and noisy arbitrary-input attraction. Replace the entire Proof by the following draft. Tags refer to existing F1/F2/F3 after the stated F2 update.

```markdown
1.1 Put $b=q\ell$, $V_0=I$, and $V_r=V_{r-1}^{\otimes m}V$. Set $\mathcal E_{1;s}=\mathcal E_s$. For $r\ge2$, let $\mathcal E_{r;s}$ be the span of tensors on the $m$ child blocks with at most $s$ unrestricted factors and all other factors in $\mathcal E_{r-1;b}$. Use the joint tensor version across live blocks. Its instruments have branch Kraus maps in $\mathcal E_{r;s}V_r$ after the required ideal logical channel or instrument, with private syndrome coefficients retained. [given, F1, construct]

1.2 Let $D_1$ be the declared fixed decoded recovery, and let $D_r$ apply $D_{r-1}$ in every child, then $D_1$ to the outer block. These recover every $\mathcal E_{r;s}$ for $s\le d$. For a finite basis of correctable errors, apply recovery to their normalized Kraus mixture. The recovered channel is identity, whose Choi matrix has rank one, so each recovered Kraus operator is scalar identity. By linearity this holds on the error span. Inductively, each unmarked child factor becomes identity on its logical coordinate with a private syndrome coefficient; an unrestricted child factor becomes an arbitrary operator at that one outer coordinate. Expanding leaves at most $s$ outer errors, corrected by $D_1$. Applying the scalar identities to every pair of Kraus terms proves the joint coherent assertion, including correlations and arbitrary references. Full trace preservation on the encoded domain makes the total recovered scalar coefficient one. [F1, F2, step 1.1, induction, algebra]

2.1 Prove together at level $r$ that good computation takes $\mathcal E_{r;b}$ to $\mathcal E_{r;2b}$ with its ideal logical instrument; good correction takes $\mathcal E_{r;d}$ to $\mathcal E_{r;b}$ preserving that instrument; and good correction and the designated refresh templates attract arbitrary inputs to their residual ranges, without a logical-preservation claim. Retain the stronger zero-marked-location clauses used by the certificate's acyclic proof. The level-one cases are precisely the one-level contracts, including noisy arbitrary-input attraction. [given, F2, construct]

2.2 Suppose these assertions hold through level $r-1$. The correctable lower error range has scalar Gram matrix on its logical factor by step 1.2. Diagonalize this finite matrix, discard zero eigenvalues, and normalize the resulting error operators: their encoded ranges are orthogonal isometric copies of the logical register. Thus that range is identified isometrically with logical register times a private syndrome register. The termwise input-sector/output-sector identities, together with the induction assertions, put good lower replacements in exactly the admitted logical/syndrome form of the finite port-substitution experiment. Lower refresh attraction is the third induction assertion. A bad child is still an arbitrary CPTP map on its own physical ports; its output is never presumed encoded. The actual level-$r$ finite template therefore instantiates that experiment with $U=V_{r-1}$ and $\mathcal T=\mathcal E_{r-1;b}$, with the certificate's intermediate sector types. [F1, F2, F3, step 1.2, step 2.1, induction, algebra]

2.3 Apply the proved finite certificate in its acyclic order. Its first-use cleanup is absorbed only into the preceding bad map's own ports, and its support clause includes still-inadmissible outputs in the same residual budget. Consequently computation has output $\mathcal H_{2b}(\mathcal E_{r-1;b})=\mathcal E_{r;2b}$; correction has output $\mathcal E_{r;b}$ on $\mathcal E_{r;d}$ input; and arbitrary-input correction and refresh have their specified residual ranges. Every public logical outcome and its subnormalized probability are retained. These statements establish all three induction assertions at level $r$. [F1, F2, step 1.1, step 2.2, induction, algebra]

3.1 At a fixed level the initial encoded boundary has budget zero. Induct chronologically through its finite computation/correction stages: step 2.3 gives pre-correction budget $2b\le d$ and post-correction budget $b$. Composition preserves complete positivity and full trace preservation on the admitted domain, including public outcome ports. Step 1.2 then decodes the joint hierarchical residual instrument to the ideal logical instrument. The simultaneous level induction and this chronological induction prove the assertion through every concatenation level, with the external reference retained. [given, F1, F2, step 1.2, step 2.3, algebra] ∎
```

## 3. Mandatory consumer edits and proof checks

`items/thm-qc-proper-code-concatenated-threshold.md`: explicitly include the proved finite certificate in Given/F7. In F3 replace “joint encoded error instrument of budget at most $d$ after correction” with “joint hierarchical encoded error instrument of residual budget $q\ell\le d$ after correction, corrected by the recursive decoded recovery”. In proof 3.1 use the simultaneous recursion just proved; ideality is after the final recursive decoder, not a claim that the noisy physical corrected stage itself is the ideal density operator. Preserve the probability bound, all numerical parameters and overhead conclusion.

`items/thm-qc-local-stochastic-concatenated-threshold.md`: explicitly include the proved finite certificate in Given/F8. F4 must say “joint hierarchical encoded error instruments corrected by the recursive decoder”. Proof 2.1 must invoke simultaneous recursive correctness and compare finally decoded states. Preserve all existing probability and distance conclusions and the per-location noise model.

`items/thm-qc-explicit-proper-code-and-universal-gadgets.md`: same native repairer must verify its finite certificate from 1.3/2.2/2.3/5.2/6.1/7.1, rather than add a bare assertion of compliance. Its existing proof already contains the necessary extra machinery: noisy attraction of $C$ and idle, a leading attraction sweep, port-local input refresh, scalar Gram factorization, and residual/invalid-coordinate alignment. Native must check these with abstract attached syndrome coefficients and every public classical port, including padding and the stronger zero-bad-child weight-four clause; then explicitly identify those steps as the finite certificate. This task has not re-proved those concrete supplier case analyses.

`items/def-qc-level-r-good-and-bad-rectangles.md`: clarify that correctness follows from the proved finite certificate plus the sparse-path lemma, and is not built into the combinatorial definition.

`items/lem-qc-recursive-bad-rectangle-probability.md`: no recursion-correctness proof is consumed here, so its probability argument is independent of this repair. Its distinct envelope-quantifier concern is separate owner work and must not be overwritten by this candidate.

`items/def-qc-local-stochastic-noise-model.md`: no change to the conditional per-location fault model. It names the contract as context only; check this actual use and retain locality.

`library/quantum-computing/noise-fault-tolerance-concatenation-and-thresholds.md`: in scope prose name the proved port-substitution certificate and recursive decoder; retain concrete universality and both general threshold branches. Its examples companion is a planar-memory leaf and does not use sparse recursion.

No source edits to the old noisy-universal-gadget or truncated-exRec obligations are proposed by this candidate.
