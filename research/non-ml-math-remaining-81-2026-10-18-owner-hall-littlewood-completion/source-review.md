# Focused Hall–Littlewood completion: source and proof review

Run non-ml-math-remaining-81-2026-10-18; agent /root/math81_hall_wall. This is genuine owner-delegated local drafting/repair evidence, not native initial-authoring, independent review, readiness or mathematical acceptance.

The exact approved PA-19 claim 3 says “State the Jordan-quiver/symmetric-function comparison and its normalization as a separate result.” The linked dossier §3.2 is richer than an arbitrary polynomial-ring isomorphism: the partition basis maps to Hall–Littlewood polynomials and its pairing is the Hall–Littlewood scalar product; §3.4's Fock route consumes that interface. The original beta attempt explicitly deferred this identification. The generic ring theorem is sound and is unchanged. No existing canonical Hall–Littlewood definition/theorem supplied the missing identification: the published ordinary Hall inner product has power-sum norms z_lambda and is a different form. Missing established proof was therefore completed here, without narrowing scope, adding pairs, modifying published items or editing live batches.

Before edits, the native batch50 writer's state entry had endedAt 2026-10-17T16:15:22.565Z and lastExitOk true. Its genuine attempt result had process/dispatch exit zero and completed, unaborted terminal summary. Complete before bytes were archived for all twelve initial items, both pages, batch50 manifest/contracts/coverage/notes, native result/prompt, current state and controlling directions. The separate before-index.json binds them. No original native result, prompt, ready record, runtime state or shared plan was rewritten.

## Actual source examination

- Schiffmann, *Lectures on Hall Algebras*, full 128-page arXiv:math/0611617v2 PDF and its existing full extracted text in research/physics-algebras-planning-2026-10-17/sources/06-other-physics-algebras/schiffmann-2006-hall-algebras.pdf/.txt. Actually examined the complete relevant §2.3 automorphism-count proof (Lemma 2.8, printed pp.28–29) and §2.4 (printed pp.29–30), including exact generator map and power-sum pairing (2.9). The latter reports the basis/pairing identification without its full proof; it cannot replace local proof. The source's untwisted Jordan normalization agrees with the current generic theorem. Its general Green theorem is not used in the new pairing proof.
- Macdonald, *Symmetric Functions and Hall Polynomials*, second edition, https://math.berkeley.edu/~corteel/MATH249/macdonald.pdf. Retrieved the complete 486-page PDF into sources/macdonald.pdf and extracted all pages with PyMuPDF into sources/macdonald.txt. Actually examined III §2, printed pp.208–211 (PDF219–222), for stable P/Q conventions and b_lambda; III §4, printed pp.222–225 (PDF233–236), including the full Cauchy-kernel and orthogonality argument; VI §1 introduction, printed p.305 (PDF316), for the exact monic dominance-triangular orthogonal characterization. This is selected full-source reading, not whole-book reading or a full audit of its Hall-polynomial construction. The extracted source text is imperfect OCR; the formulas used here were independently checked algebraically. The new proof establishes existence/uniqueness of that standard characterization locally rather than treating the source's assertion as a supplier.
- Read the current generic Jordan theorem's entire Statement, Facts and ten-phase proof. It already uses Phi_t(u_(1^r))=t^(-r(r-1)/2)e_r, not the unnormalized generator map. Its semisimple flag and kernel-dimension triangularity argument is the exact local supplier for the new monomial triangularity step. The new theorem explicitly cites this map; no silent generator-rescaling change occurs. Its Hall-polynomial proof is preserved intact.
- Read actual current published power-sum basis, monomial basis, dominance/conjugation and ordinary-Hall norm suppliers for their interfaces; none was edited. Read all five actual batch32 draft carriers and both pages as interface context, without granting their proofs new acceptance. They supply algebra/module/tensor language, not Hall finiteness or Jordan basis/pairing identification. The stale “empty batch32” observation in batch50 notes was corrected to this actual inspection while retaining the reading routes and no item-level edge.

## Local proof supplied

The new automorphism lemma proves the endomorphism dimension sum min(r,h), the triangular head reduction, and the invertibility criterion by iterating I=f(I)+TI under nilpotence. It gives a_lambda(q)=q^(|lambda|+2n(lambda))b_lambda(q^-1), including zero.

The pairing proof counts pairs of semisimple flags and nilpotent maps lowering both. A common splitting of two flags is indexed by a nonnegative matrix m_ij with prescribed row/column sums. Its stabilizer permits weak coordinate inequalities; a common lowering map permits strict inequalities in both coordinates. Their mass quotient is q^(w-v)/product |GL_m|. Multiplying by the exact elementary-generator factors cancels the row/column quadratic terms, leaving a product of coefficients q^-m/product_(h≤m)(1-q^-h). The resulting generating series C satisfies C(q^-1 z)=(1-q^-1 z)C(z), so log C(z)=sum z^r/(r(q^r-1)). Comparing the elementary generating function E(z)=exp(sum (-1)^(r-1)p_r z^r/r) proves the power-sum diagonal. Rational interpolation at infinitely many prime cardinalities transports this to Q(t).

The old Hall unitriangular expansion and the elementary monomial expansion both use exactly row dominance (kernel comparisons reverse via conjugation). Consequently t^n(lambda)Phi_t(u_lambda) is monic dominance-triangular. It is orthogonal under the transported diagonal pairing. Finite-degree triangular uniqueness proves the standard Hall–Littlewood identification and norm formula. The definition's justified_by relation uses this theorem without placing the theorem in its deps, so there is no logical cycle. No general Green coproduct compatibility, unproved HN integration or conjectural physics premise enters.

Final formulas: Phi_t(u_lambda)=t^-n(lambda)P_lambda(x;t^-1); B_t on degree d equals t^-d times the standard HL form at s=t^-1; B_t(p_lambda,p_mu)=delta z_lambda product_i(t^(lambda_i)-1)^-1. These are valid for all partitions, including empty, and all actual finite-field q>1. The new B example computes sizes 0,1,2 including both column and row norm factors. A separate independent finite enumeration of all 512 maps and 21 complete flags on F_2^3 gives sum N(T)^2/|GL_3|=1008/168=6, matching B_2(p_1^3,p_1^3). That finite check supplements the full proof, not its replacement.

## Scope, consumers and remaining process

Four new draft carriers are homed in the existing pair, A12/B4. The original twelve item bodies are unchanged. Batch50-local manifest, contracts, coverage and notes mirror this work. Neither published ordinary-Hall supplier nor another batch's source was modified.

The only current item consumers of the new interface at this inspection are the new theorem itself and its new B example. The existing generic theorem has no other current external consumer found by the focused link scan. The full planned transitive Hall page graph is recorded in repair.json, together with actual current inventories. General finite Hall, derived-heart and motivic/convolution claims use the unchanged ordinary Hall source, so their interfaces are unaffected. The planned Hall-module/Fock page specifically needs this new normalized interface. Its current manifest has no items and current runtime has no batch53 dispatch. Root initially reported a live writer, then explicitly corrected that inference after the disk check. No batch53 proof is pretended reviewed. Root has been given the canonical theorem and formulas before its actual dispatch. Any later actual consuming proof must be checked after genuine drain; another writer’s live output remains guarded.

Focused checks pass on the actual final changed source: precheck (three proofs), strict contracts (all16), render (four new items plus two changed pages), layout (four items/19 steps), dependency closure with focused16/two pages, and provenance policy16. Exact commands, outputs and hashes are in repair.json. These are local mechanical checks, not production gates. Root owns metadata/source rehash, current readiness and recertification; no gate, stamp, approval, commit or push was performed.

## Root focused review 1: exact formal-series premises

After root read all four new carriers and independently checked the scientific
route, it requested an exact supplier binding for formal exp/log identities
in the kernel and power-sum steps. Complete current preimages, all sixteen
item bodies, both pages, local manifests/contracts/coverage/notes, this source
review, original repair.json and prior check outputs were archived under
root-review-1-before/ before repair; its index.json binds every archived byte.

Actually read both complete published carriers
items/def-formal-exponential-logarithm-and-powers.md and
items/thm-formal-exponential-logarithm-identities.md, including their full
Statements/Definitions, Facts and proofs. They require a commutative
Q-algebra and positive-order exponential arguments / constant-one logarithm
arguments in its univariate formal power-series ring. The main theorem now
lists them in deps and Fact F7, with actual uses in proof steps5.1 and6.1.
For fixed finite-field q the coefficient ring of C_q is Q; the stable
symmetric ring and its finite-rank polynomial rings are commutative
Q-algebras after rational extension. The proof explicitly derives the
logarithmic shift equation coefficient by coefficient and derives E(z)'s
power-sum exponential from finite-variable logarithms and stable projection.
For finitely many multivariables it inserts a common auxiliary variable v
and works in R[[v]] over the indicated polynomial coefficient Q-algebras.
Every argument has the required order/constant term and each coefficient
is a finite homogeneous polynomial. Hence all multivariable operations are
exact applications of the univariate suppliers. Q(t) also satisfies these
coefficient-ring hypotheses; the actual passage to the generic pairing
continues to use the unchanged rational interpolation argument. No Newton
supplier is needed, because the elementary generating function identity is
now derived directly from its finite product and the proved log identities.

This changes the main theorem's proof and declared prerequisites only; its
Statement, exact normalization and all four new defining interfaces are
unchanged. Its B consumer's complete proof was rechecked against this same
Statement; no repair is needed. The original twelve items remain unchanged.
Batch53 remains guarded for actual later consuming-proof review. Manifest
and exact citation/derivation contracts were synchronized; no ready record,
native artifact, published item, other-batch carrier or stamp was modified.

After this premise-binding repair, all seven focused checks passed again on
the final current source. Strict contracts report one nonfatal
shotgun-bracket warning at proof6.1: it cites four of seven facts while two
other steps cite only earlier derived steps. This is not an announcement
that replaces the proof: F1 supplies the elementary generators' spanning,
F3 supplies the power-sum basis, F5 supplies the HL diagonal being compared,
and F7 supplies the actual formal exponential operation. Each is used in
that step. The precise unchanged warning is retained in check-contracts.out.
