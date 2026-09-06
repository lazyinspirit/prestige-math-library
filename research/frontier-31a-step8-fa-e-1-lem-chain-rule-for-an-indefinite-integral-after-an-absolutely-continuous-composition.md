# Final adjudication — frontier-31a, group e, queue position 1

Item: `lem-chain-rule-for-an-indefinite-integral-after-an-absolutely-continuous-composition`.
Disposition: **repaired**. Source status: **verified**.

## Independent decision and scope

Terra's final rejection (2026-09-05T21:38:05.356Z, context `fe35116b3c3044a0449e4c2ab93c88cca28c3cfa8b54751791798cce4fa6b4f1`) correctly identifies an unlicensed application of a real-valued property-(N) theorem when the displayed integrand is not explicitly real-valued. There is a second instance of the same scope issue in the final invocation of the real-valued AC FTC. The mathematical claim admits a complex extension, but the proof as written does not provide the necessary componentwise argument.

The repair fixes the intended real scope explicitly: a finite real-valued representative f of L1[c,d], its real primitive F, and real AC g and F composed with g. This follows the fixed conventions in `research/frontier-31a-batch-2.notes.md` (Fixed conventions and Known limits: real-valued compact-interval statements), the A/B page pair `library/measure-theory/absolute-continuity-and-the-sharp-fundamental-theorem-of-calculus{,-examples}.md`, and the published `items/def-absolutely-continuous-function.md`. It does not silently introduce a complex-valued definition of AC or change the general indefinite-integral definition. The downstream conditional change-of-variables theorem inherits this lemma's hypotheses verbatim, so its real FTC application now has the required scope too.

I read the queue, item, all seven direct dependencies, batch manifest and relevant coverage entry, both proof contracts and their risk review, the refuter entry, Alpha's Step-6b account, Step-7 reader's chain-rule concern, Alpha's Step-8 adjudication/evidence, and both Terra rejections. Alpha's addition of the first Lebesgue FTC correctly repairs the original derivative-identification omission. The terminal real-scope issue remains and warrants an independent repair, not acceptance of the unchanged bytes.

## Source verification

- https://doi.org/10.1007/978-3-030-26903-6 — Christopher Heil, *Introduction to Real Analysis*, GTM 280 (2019), Theorem 6.5.2, printed pp. 241–242, and Remark 6.5.3. Publisher identity checked at https://link.springer.com/chapter/10.1007/978-3-030-26903-6_6 . The publisher endpoint exposes metadata but not the full chapter in this environment.
- Full original book PDF read at https://cjhb.site/Files.php/Books/Book%20Series/GTM/280%20Introduction%20to%20Real%20Analysis%20by%20Christopher%20Heil.pdf — title/copyright/ISBN pages and the complete theorem and proof on PDF pages 257–258 (zero-based 256–257). This is a facsimile of the monograph, not an aggregator's mathematical account. Its real case requires a.e. differentiability of the inner function, outer function, and composition, together with the outer image-null condition; its conclusion allows any representative equal to the outer derivative a.e. The full proof handles the exceptional pullback without claiming it is null. Theorem 6.5.6 on printed p. 243 also confirms the conditional integration application. Failed PDF screenshots were not used as evidence; the complete extracted theorem and proof were read.
- https://heil.math.gatech.edu/papers/abscont_typosmarked.pdf — Heil's author-hosted scholarly chapter, Remark 3 and Corollary 18 with its proof, printed pp. 47–48 (PDF pages 21–22). This independently verifies real AC implies the image-null property and explicitly distinguishes the real and imaginary component conditions for complex-valued functions. It is not claimed to contain the general chain rule.

## Mathematical check of the final proof

Step 1.1 treats singleton domain and target intervals separately. On a singleton domain all a.e. claims and integrals are null-domain statements. On a singleton target the inner function and the composition are constant; the finite-valued product is zero a.e.

Step 2.1 has the exact seven existing dependencies available:

- `def-countable-choice` and `def-dependent-choice`: retained explicit assumptions.
- `def-indefinite-lebesgue-integral-on-a-compact-interval`: specifies the primitive and its base value, including singleton targets.
- `cor-the-indefinite-integral-of-an-l-one-function-is-absolutely-continuous`: gives AC of the real primitive.
- `thm-first-fundamental-theorem-of-calculus-for-l-one`: identifies its derivative with the supplied integrand outside a null set, under Countable Choice and nondegeneracy.
- `thm-absolutely-continuous-functions-have-luzin-property-n`: now applies to the explicitly real primitive, under Countable Choice.
- `thm-fundamental-theorem-of-calculus-for-absolutely-continuous-functions`: provides differentiability and derivative integrability for the explicitly real AC functions, under both retained choice assumptions.

Step 3.1 instantiates the verified chain rule with h=f. In particular, a positive-measure inverse image of the exceptional target set does not invalidate the argument. The image-null property is never replaced by an inverse-image-null property.

Step 4.1 establishes integrability from equality a.e. to the derivative of the real AC composition. A real-valued representative f is finite everywhere; the derivative of g is extended by zero on its null exceptional set and at the domain endpoints. Thus the product is defined and finite everywhere. Equality off a null set to a Lebesgue-measurable derivative, together with completeness of Lebesgue measure, proves measurability even if composition alone did not establish it. Its absolute integral is finite by the same a.e. equality. Target endpoints are among the exceptional values covered by the chain rule; their inverse images have not been discarded as null without proof. Constant g and f=0 cases agree with the conclusion. The AC-composition hypothesis remains explicit and essential.

## Edits, checks, and obligations

Edited only the queued item and its entries in `research/frontier-31a-proof-contracts.json` and `research/frontier-31a-batch-2.proof-contracts.json`. Updated step inputs, real-scope risk review, degeneracies, endpoint conventions, and product measurability. All direct dependency files are unchanged; no prerequisite-repair licence is needed. No Sol adjudication, judge verdict, judge pass stamp, or additional judge call has been created.

Initial focused checks found a phase-numbering normalization requirement and two contract-format issues (a theorem number parsed as a proof reference, and unanchored endpoint evidence). These were corrected by adopting the canonical four-phase numbering, referring to the precisely named frontmatter source as the cited chain-rule theorem, and anchoring endpoint evidence to the Statement and step 3.1.

Final-byte validation: focused precheck passes (1 checked, 0 failing); rendercheck passes (1 file); both run-wide and batch-local strict proof-contract checks pass for the selected item (0 errors, 0 warnings, 1/1 checked each). The dependency graph check completed with exit 0 and 475 corpus advisories. Next action: record the repaired exact bytes through the supplied terminal recorder; the terminal receipt is the completion record for this one-item queue. No unresolved mathematical obligation remains.

## Completion

The supplied recorder accepted `repaired` with `source-status verified` at `2026-09-05T21:47:16.663Z`, queue position 1 of 1. Receipt: `research/frontier-31a-step8-terminal-resolutions.jsonl`.

- Item SHA-256: `726b3dff531ec17b4b240c5540174ca64d26ff1aaeefd6bcb2fe73c0f6e5412d`.
- Context SHA-256: `b067404ae615d3ed3cf772f7fa9444d9ab9775b1ba3088048eee2741e98bd953`.

This completion note follows the recorder's embedded mathematical basis; no item or dependency bytes were changed after recording. Queue complete; no unresolved obligations or further FA action. The build driver owns the next transition.
