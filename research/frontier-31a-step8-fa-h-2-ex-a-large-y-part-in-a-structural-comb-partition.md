# FA terminal evidence — queue h, item 2

Item: `ex-a-large-y-part-in-a-structural-comb-partition`.
Decision: `repaired`. Source status: `verified`.

Queue item 1 was recorded successfully before this review began.
I independently inspected the current example, the complete statement and proof of its sole direct dependency `lem-large-y-part-in-a-structural-comb-partition-yields-a-homogeneous-set`, the structural-hypothesis definition, and the published EH-constant, comb, and clique/stable-set definitions. I read the batch-15 A/B pages, manifest entry, coverage, relevant convention notes, reader/refuter records, both judge rejections, and Alpha's adjudication and repair report. The item's batch and aggregate proof contracts quoted the complete dependency correctly, but their derivation repeated the item's unsupported hypothesis check. No separate risk_review existed for this example; the FA contract entry now records the application risks explicitly.

Alpha fixed the first rejection by using the dependency's stated lower bound 2. Terra's final rejection is valid: checking 8=16/2 does not establish the structural hypothesis, the common EH constant, or the admissible comb parameters. The current wording of F1 suppressed those premises. The repair makes the example a conditional numerical specialization with all premises in both Example and Given, restores their scope in F1, and checks c=1/2 in (0,1], ell>=4, w=16>=4, and |Y_i|=w/2 before invoking the lemma. The conclusion is explicitly a clique or stable set in G of size at least two. It does not assert existence of a particular graph/family from numerical data alone.

Source independently opened and read: https://arxiv.org/html/2606.06258v2 — Huang, Ju, and Zhou, section 5, Lemma 5.1, structural conditions (1), (2.1)–(2.3), and its complete proof (web lines 856–915). In particular, the large-Y paragraph at lines 894–895 uses F1-freeness, its EH exponent and w>=4 to deduce (w/2)^c>=w^(c/2). I also checked the introductory definitions of family-freeness and EH constants at lines 54–61. These support the local lemma and explain why a size inequality alone is not its full hypothesis. The exact numerical substitution is independently elementary: c/2=1/4 and the positive fourth root of 16 is 2.

The local lemma's proof is valid: the induced graph on Y_i is nonempty and F1-free, EH gives at least |Y_i|^c, and positive-power monotonicity together with w/2>=sqrt(w) gives its stated bound. There is no dependency repair. Finite simple graphs, nonempty blockade blocks, uniform structural quantifiers, and the complement-of-H-free ambient convention are preserved. The example avoids identifying c/2 with the final page theorem's more conservative c/4 constant.

Changed files: the example, its derivations/risk entry in batch-15 and aggregate proof contracts, and its batch-15 manifest strategy (which still advertised the obsolete sqrt(8) bound). No direct dependency or other item changed; no prerequisite licence was needed. No pass stamp or judge verdict was created.

Focused validation passed: precheck (one proof), rendercheck (one file), strict batch-15 proof-contract (12/12, zero errors/warnings), manifest-deps (14, zero errors), content-policy (14, zero errors/warnings). Contract citation remains the exact unchanged dependency Statement. Boundary check: equality |Y_i|=w/2 is allowed; Y_i is nonempty and all scalar bases/exponents lie in the lemma's domain.

Unresolved mathematical obligations: none. Next action: record exact final bytes with the authorized recorder, then begin item 3 only after successful recording.
