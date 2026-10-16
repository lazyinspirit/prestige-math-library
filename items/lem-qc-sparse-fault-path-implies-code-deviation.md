---
id: lem-qc-sparse-fault-path-implies-code-deviation
kind: lemma
title: "Sparse Fault Paths Preserve Correctable Code Deviation"
status: draft
origin: pipeline
pipeline_run: quantum-computing-algorithms-60-2026-10-15
provenance:
  statement: ai-altered
  proof: ai-generated
deps:
  - def-qc-code-deviation-and-spread
  - def-qc-level-r-good-and-bad-rectangles
  - def-qc-ft-gadget-and-proper-code-contract
  - lem-qc-encoded-error-instrument-and-cptp-distinction
  - cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases
  - thm-complex-spectral-theorem-for-normal-endomorphisms
dependency_level: 22
proof_strategy: direct
sources:
  references:
    - title: "D. Aharonov and M. Ben-Or, Fault-Tolerant Quantum Computation With Constant Error"
      url: "https://arxiv.org/pdf/quant-ph/9611025"
    - title: "John Preskill, Toric code recovery, fault-tolerant recovery, fault-tolerant gates (2011 handwritten lecture notes)"
      url: "https://www.preskill.caltech.edu/ph219/fault-tolerance-2011.pdf"
---

## Statement

Let a proper gadget family have encoding $V$, correction capacity $d$, and effective spread budget $\ell$ as in [[def-qc-ft-gadget-and-proper-code-contract]]. Fix $q\ge1$ with $2q\ell\le d$ and put $b=q\ell$. Assume type-compatible recursive replacement and the following additional **finite port-substitution hypothesis**, proved for the actual finite templates. It is not implied by their one-level encoded-input contracts alone.

In one substitution experiment replace each elementary port by any finite encoded port $U$ with a correctable error span $\mathcal T$ and an attached private syndrome register. Good replacements have their declared ideal logical channel/instrument tensored with syndrome maps on their admitted sectors. Intermediate computation-output and correction-input sectors must be specified; they are correctable, and complete corrected boundaries use $\mathcal T$. Marked replacements are arbitrary CPTP maps on their own physical ports, with possibly unencoded outputs. Correction and designated input refresh have noisy arbitrary-input attraction into their declared residual ranges, without a logical-preservation assertion on arbitrary inputs.

For the outer block let $\mathcal H_s(\mathcal T)$ be the span of tensor operators with at most $s$ unrestricted child factors and all other factors in $\mathcal T$, and let $\widetilde V=U^{\otimes m}V$; use the corresponding typed factors when port types differ. For at most $q$ marked replacements, the finite hypothesis requires computation to map $\mathcal H_b(\mathcal T)\widetilde V$ to $\mathcal H_{2b}(\mathcal T)\widetilde Vg$ and correction to map $\mathcal H_d(\mathcal T)\widetilde V$ to $\mathcal H_b(\mathcal T)\widetilde V$, preserving the specified ideal logical instrument. Correction and designated refresh must also attract arbitrary inputs into their stipulated residual ranges. These are joint, outcome-resolved Kraus-span identities, with arbitrary syndrome coefficients, full trace preservation on admitted domains, and identity on the external reference.

The finite proof must specify an acyclic order for these assertions, retaining any stronger zero-marked clause it uses. In particular it must show where an inadmissible port is refreshed before interaction, that this cleanup can be absorbed into its preceding marked map without enlarging that map's ports, and that still-inadmissible outputs lie in the residual support already counted. This is a hypothesis about one finite template with abstract ports, not correctness assumed at every concatenation level.

If each computation stage and its correction stage have at most $q$ bad child rectangles, then after correction at level $r\ge1$ the joint instrument has hierarchical residual sector $\mathcal E_{r;b}$, defined below, after its ideal logical target. The recursively decoded recovery $D_r$ returns that target exactly, including every finite external reference and recorded logical outcome. At level one this is the ordinary encoded-instrument relation; at higher levels it does not bound the total number of elementary physical errors by $d$.

## Facts & Assumptions

**Given:** The one-level proper-code contracts, the proved finite port-substitution hypothesis in the Statement, and $b=q\ell$ with $2b\le d$. All recursive ports and encodings have matching types.

[F1] [[def-qc-code-deviation-and-spread]] defines supported error spans and the joint outcome-resolved encoded-instrument relation, retaining actual subnormalized branches and the external reference.

[F2] [[def-qc-ft-gadget-and-proper-code-contract]] supplies the fixed decoded recovery and the one-level computation $b\to2b$ and correction $d\to b$ identities. No higher-level substitution assertion is inferred from that definition.

[F3] [[def-qc-level-r-good-and-bad-rectangles]] supplies the disjoint recursive partition and the at-most-$q$ bad-child condition.

[F4] A recovery correcting a normalized mixed unitary error family has scalar recovered Kraus operators on its linear error span; their pairwise identities also handle joint blocks and memory coefficients ([[lem-qc-encoded-error-instrument-and-cptp-distinction]]).

[F5] Finite-dimensional complex inner-product spaces have orthonormal bases, and self-adjoint operators have orthonormal eigenbases ([[cor-finite-dimensional-inner-product-spaces-have-orthonormal-bases]], [[thm-complex-spectral-theorem-for-normal-endomorphisms]]).

## Proof

1.1 Write $V_0=I$ and $V_r=V_{r-1}^{\otimes m}V$, with the corresponding typed tensor products for distinct port types. Put $\mathcal E_{1;s}=\mathcal E_s$ and $\mathcal E_{r;s}=\mathcal H_s(\mathcal E_{r-1;b})$ for $r\ge2$, using joint per-block tensor spans. Define $D_1$ to be the declared decoded recovery and $D_r$ by applying the child decoders and then $D_1$ to their logical outputs. Decoder syndrome registers remain attached to their original child edges in the comparison; no decoder is inserted into the faulty circuit. [given, F1, F2, construct]

2.1 First justify scalar recovery on the whole error span. In an orthonormal basis of each nonzero physical factor, the identity, diagonal sign flips, pairwise swaps, and pairwise Hermitian swaps with off-diagonal entries $i,-i$ are unitaries spanning its matrix algebra: subtracting the identity outside the selected pair gives the symmetric and skew matrix units, and diagonal sign flips give the diagonal units. Tensor these unitaries on at most $d$ coordinates, with identities elsewhere, and choose a basis from this finite spanning family. If its size is $M$, its elements divided by $\sqrt M$ are Kraus operators of a full-space channel corrected by $D_1$. For every recovery Kraus map $R_l$ and basis element $E_a$, [F4] gives $R_lE_aV=c_{la}I$. Linearity gives this for every error term. Inductively a factor in $\mathcal E_{r-1;b}$ becomes scalar identity on its decoded logical coordinate, with its syndrome coefficient retained, whereas an unrestricted factor becomes an arbitrary operator on that one coordinate. Expanding a tensor in $\mathcal E_{r;s}$ leaves at most $s\le d$ outer errors, corrected by $D_1$. Thus $D_r$ corrects the full span. Pairwise Kraus expansion gives the joint and memory-valued version, and full trace preservation makes the total recovered coefficient one. Zero-dimensional input spaces have no density instance. [F1, F2, F4, F5, step 1.1, induction, algebra]

3.1 Prove simultaneously, by level, the computation $\mathcal E_{r;b}\to\mathcal E_{r;2b}$ and correction $\mathcal E_{r;d}\to\mathcal E_{r;b}$ identities and arbitrary-input attraction for correction and designated refresh. Include every stronger zero-marked clause named by the finite hypothesis. At level one these are the stated one-level contracts and the additional attraction hypotheses. At an induction step all lower intermediate sectors are correctable by step 2.1. For an error basis on such an edge, trace preservation of recovery gives $V^*E_a^*E_cV=(\sum_l\overline{c_{la}}c_{lc})I$. Diagonalize this finite positive Gram matrix, discard its zero directions, and normalize the others. The resulting encoded maps $F_jV$ satisfy $(F_jV)^*F_kV=\delta_{jk}I$, so $J(\psi\otimes e_j)=F_jV\psi$ identifies that range with logical register times a private syndrome. The lower termwise sector identities give exactly the admitted logical/syndrome maps in the finite experiment. [given, F1, F2, F4, F5, step 2.1, induction, algebra]

4.1 A bad lower child remains an arbitrary CPTP map on its physical ports; its output is not assumed admitted. Apply the proved finite hypothesis to the lower-port maps from step 3.1, in its specified acyclic order. Its first-use refresh and support checks justify absorption only into that marked map's own ports and include every still-inadmissible output in the same residual support. It yields precisely $\mathcal H_{2b}(\mathcal E_{r-1;b})$ for computation and $\mathcal H_b(\mathcal E_{r-1;b})$ for correction, together with arbitrary-input attraction and the retained zero-marked clauses. These are the required level-$r$ assertions. Logical outcome ports and private syndromes keep their actual branch maps throughout. [given, F1, F3, step 1.1, step 3.1, induction]

5.1 Initially the encoded boundary has budget zero. At a fixed level, chronological induction now alternates the proved computation bound $2b\le d$ and correction bound $b$, starting from that boundary and the protected preparations. Composition retains complete positivity, full trace preservation on the admitted domain, and every public logical outcome. Step 2.1 decodes the resulting joint hierarchical residual instrument to the ideal logical instrument. Together with the independent level induction in steps 3.1–4.1, this proves the assertion at every level, with the external reference unchanged. [given, F1, F2, F3, step 1.1, step 2.1, step 4.1, induction, algebra] ∎
