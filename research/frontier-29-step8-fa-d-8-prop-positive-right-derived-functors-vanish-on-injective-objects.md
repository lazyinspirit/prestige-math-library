# Final-adjudicator evidence: `prop-positive-right-derived-functors-vanish-on-injective-objects`

Disposition: `accepted-after-review`.

I independently checked the final proposition against the `derived-functors` pair, the batch-11 manifest, the synchronized proof contract and risk review, all four cited dependencies, the supplied-resolution-data convention, the earlier Step-6 domain finding, both exact Step-8 judge rejections, and both Alpha repairs.

The Step-6 fatal finding was correctly repaired: `R_I^nF(J)` is defined only when `J` lies in the domain of the supplied datum.  The current statement assumes `J in D`, and step 2.1 constructs a replacement datum `I'` on exactly the same domain, changing only the resolution assigned to `J`.

The first Step-8 fatal finding was also correct.  The change-of-injective-resolution theorem supplies a natural isomorphism, not the canonical identification previously claimed, and the target category must be abelian.  The current statement types `F:A -> B` between abelian categories, and step 2.1 uses only an isomorphism between the objects computed from `I` and `I'`; that is sufficient because an object isomorphic to a zero object is itself zero.

The second Step-8 fatal finding correctly identified an omitted application of `F`.  The right-derived-object definition is `H^n(F(I(A)_del))`, not the cohomology of the resolution before applying `F`.  The final [L4] now restates that formula accurately.  Step 1.1 explicitly applies `F` and obtains a deleted cochain complex with `F(J)` in degree zero and zero objects elsewhere; additivity ensures that `F` preserves the zero object.

The remaining computation is correct.  Because `J` is injective, `0 -> J --1_J-> J -> 0 -> ...` is an exact coaugmented complex of injectives (the zero objects are injective), hence an injective resolution.  Its applied deleted complex has zero cohomology in every positive degree.  The same-domain change-of-data isomorphism therefore gives `R_I^nF(J) ~= 0`, equivalently `R_I^nF(J)=0`, for each `n>0`.  No exactness assumption on `F` is needed.

The proof contract's citations and derivations match these final bytes, and its risk note accurately isolates the same-domain replacement issue.  Dependent Choice is stated exactly where the comparison theorem requires it.

No external verification was needed: the length-zero injective resolution, positive-degree cohomology calculation, and invariance of the zero object under isomorphism are familiar, and all convention-sensitive details were checked against the repository's local interfaces.  No item, dependency, proof-contract, or metadata repair is required.
