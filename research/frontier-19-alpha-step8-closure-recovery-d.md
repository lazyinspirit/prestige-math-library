# Frontier 19 — Step 8 closure recovery, group d

## Scope and frozen state

This recovery took the ten exact Terra rejection rows routed to group `d` in batches 5, 6, and 10. The items were read from the current frozen text, and every dependency needed to decide a row was reopened. No row belonged to another group or to no group.

The current rejudge is the second frozen context for these repaired items. Accordingly, the two surviving fatal defects are recorded as terminal open defects. No item, page, manifest, proof contract, impact record, or verification block was changed, and no third judge cycle was requested.

## Exact adjudications

### `cor-binary-trees-satisfy-b-equals-one-plus-z-b-squared`

- Model/context: `gpt-5.6-terra` / `b31e9ecced9b46c40884f42b6e625c29ba30a0d64f1d5784e8d29e10556ec5b7`
- Guard item hash: `1225a566e843539236043088250d6a39d57603c042d851eac45cf48f4dfff615`
- Outcome: `confirmed_nonfatal`
- Evidence: step 3.1 omits a local Fact for the neutral and atomic generating functions, but `def-neutral-and-atomic-classes` is a declared dependency and states them verbatim as `1` and `x`. Supplying that one-line lookup closes the proof step well within thirty seconds; the Statement and construction are correct.

### `cor-eulerian-polynomial-exponential-generating-function`

- Model/context: `gpt-5.6-terra` / `2a6f4b2c3a04a0ab82facc686559a29081d2b5005d26b9537de5fe36d79fd221`
- Guard item hash: `7b71b51ae976b2112f5815e3cacf3de8ab50c06f1637ae1e5094b545ddfc2c09`
- Outcome: `confirmed_nonfatal`
- Evidence: L2 reaches beyond the displayed Statements of its two citations when it mentions the derivative formulas. The cited formal exponential/logarithm item proves those formulas in step 1.2, and they also follow immediately by termwise differentiation plus the cited chain rule. This is a real citation-presentation gap between proof steps, not a false formula or an unsupported route.

### `cor-plane-trees-satisfy-t-equals-z-over-one-minus-t`

- Model/context: `gpt-5.6-terra` / `944b303c915fdaa4437cc0f57f1209c92752d1784af621ab8001cfe4715583ee`
- Guard item hash: `973ef35d1f1d92e020c45cd8972860e09733353dac75de3ad5e057b97db6fef1`
- Outcome: `confirmed_nonfatal`
- Evidence: step 5.1 does not name the symbolic Cartesian-product rule when translating `Z × SEQ(T)`. The omitted move is the direct coefficient-convolution rule already developed on the same A page; inserting that standard one-line translation closes the final step in under thirty seconds. The fixed-point construction and uniqueness argument are unaffected.

### `def-combinatorial-specification-and-order-raising-recursion`

- Model/context: `gpt-5.6-terra` / `c4619a0b3dfc82738e6e63fa94cd8791f24e465360155c0eee25cbdec60f17de`
- Guard item hash: `2ef8691b331c3808250eea96afba6f4d07c57ce9f4823b874f5b02ab3470211e`
- Outcome: `confirmed_fatal` (`logic`)
- Evidence: the Definition declares `F_Phi:R[[x]]→R[[x]]` to be total. For `R=Z` and `Phi(Y)=SEQ(Y)`, the induced operation is `1/(1-Y)`, which is undefined at `Y=1`. Saying that a symbolic operation is “defined over R” controls its coefficient ring but does not provide a domain on which every substitution is defined. This is a defect in the Definition itself, outside the thirty-second proof-gap rule.
- Disposition: open terminal defect `frontier-19-S8R1-d-def-combinatorial-specification-and-order-raising-recursion`. The two-context automatic repair ceiling is exhausted, so the item remains unchanged for owner/session exact-hash resolution.

### `ex-a-family-containing-k-one-is-vacuously-viral`

- Model/context: `gpt-5.6-terra` / `b0079b87b99b1dec7512fb82c1771a309a3ffc2eb13466d0ca787c37f58202ee`
- Guard item hash: `8bb827abe6876e9e785f209104db9b09fd8d255cfca03d933aad8b3e64da57d1`
- Outcome: `confirmed_nonfatal`
- Evidence: step 2.1 uses `exp(log epsilon)=epsilon` without stating that inverse identity in L3. With `epsilon>0`, it is the defining inverse relation for the real logarithm and exponential and closes the displayed inequality in one line. The vacuous induced-copy argument and viral quantifiers are correct.

### `fs-multiset-product-exists-for-every-coefficient-sequence`

- Model/context: `gpt-5.6-terra` / `d5e832fceeae1ed42d2e7e27bc484bffbd62f1a561768ba6de950d27b0d6ec9b`
- Guard item hash: `a0fd73d2a24d963b5415c33913f4bc066f30a471a3814cf4420ce26f327b3b1f`
- Outcome: `confirmed_nonfatal`
- Evidence: L1 is an imprecise description of the cited sufficient product-stabilization theorem, but the refutation does not require its alleged converse. The explicitly constructed class has infinitely many distinct size-zero multisets, so it is not locally finite and has no ordinary generating function as a combinatorial class. That direct witness already proves the narrowed false statement.

### `thm-a-finite-family-with-the-erdos-hajnal-property-is-viral`

- Model/context: `gpt-5.6-terra` / `0565fa205aa4549a2d1efbf29c2ade0285b36ac437e88813e21cfcc6986713f5`
- Guard item hash: `861d4c27199a522959eedbb5c9322896651825ea908b506e7f7c3f939570327c`
- Outcome: `confirmed_nonfatal`
- Evidence: step 5.2 uses strict increase of the real exponential without naming that elementary fact. Applying exponential monotonicity to the displayed exponent comparison is a single immediate proof step; none of the theorem's quantified constants, probability bounds, or homogeneous-set conclusion changes.

### `thm-cycle-construction-formula`

- Model/context: `gpt-5.6-terra` / `c8fbee4aad209eab9c5f11fd0f2d7eeea7cbb7456a0cdf78549a063e0dfc99d6`
- Guard item hash: `e8c2dc5a1125247ebe08026524ce4869382bb761716f71618113a0ef8ba88325`
- Outcome: `confirmed_nonfatal`
- Evidence: applying the displayed logarithm series with `u=-A(x^k)` directly gives `-log(1-A(x^k))`; rewriting this as the logarithm of the reciprocal uses the logarithm homomorphism identity. That identity is stated by the already-declared dependency `thm-formal-exponential-logarithm-identities`, so the omitted one-line invocation is a thirty-second gap, not a defect in Burnside regrouping or the cycle formula.

### `thm-eulerian-recurrence`

- Model/context: `gpt-5.6-terra` / `c3c774151c5ab345556ddd151534d43031431e6fa65bf1b0211d58a881195c8d`
- Guard item hash: `d87853202c2a12999e5accd677db9b9e802e0043b10d50911d61b412efc58553`
- Outcome: `confirmed_fatal` (`logic`)
- Evidence: when `n=1`, the stated convention says `A(0,0)=0` because `0>n-2=-1`, while the cited Definition gives `A(0,0)=1`. Thus the displayed recurrence fails at its included boundary `n=1,k=0` under its own convention. This is a Statement defect and is not covered by the thirty-second proof-gap threshold.
- Disposition: open terminal defect `frontier-19-S8R1-d-thm-eulerian-recurrence`. The two-context automatic repair ceiling is exhausted, so the item remains unchanged for owner/session exact-hash resolution.

### `thm-worpitzky-identity`

- Model/context: `gpt-5.6-terra` / `c3675e853940ef6b5200e0085cc920c48cad9dda74b2cd693da9dd3fb4d8ce10`
- Guard item hash: `fd6ccd3dd357f716d1ccd9791434ae2d47cbf416f9acbdb59d38d556cd73ae5e`
- Outcome: `confirmed_nonfatal`
- Evidence: step 1.1 omits the boundary value `binom(m,1)=m` from L2, but the declared dependency `def-binomial-coefficient` states that value explicitly. Reading that exact boundary clause closes the base case immediately; the repaired `n≥1` Statement and induction are sound.

## Repairs, alerts, and rejudge targets

- Licensed item repairs applied in this recovery: none.
- Group-d rejudge targets produced: none.
- Cross-group alerts raised or answered: none.
- Rejection rows belonging to no group: none.
- Fatal-ledger rows appended: the two terminal rows named above, both with `disposition: open` and exact adjudication references.

## Verification

- Exact ledger join: 61 group-d rejection rows, zero unadjudicated rows, zero duplicate adjudications.
- `step8-guard` against `pre-step8`: exit 0; all 78 changed items are licensed by exact confirmed-fatal adjudications or terminal resolutions.
- `defect-ledger check`: exit 0; 196 Frontier-19 defect rows checked with zero errors.
- `step8-scope check`: exit 0; 443 items partitioned, zero open rejection rows, and zero outstanding cross-group alerts.
- Judge closure recomputation with pending rejudge allowed: zero unadjudicated rows level-wide. It remains red with six terminal open fatals, including the two group-d items above, and nine `needs_rejudge` items owned outside group d. Group d has zero `needs_rejudge` items.

The managed sandbox blocks the closure tool's child-of-child context-hash processes. The recomputation therefore used the existing exact context-hash cache after checking all 445 cached judge-form item hashes against disk and directly regenerating the nine rows whose item hashes had moved. The resulting receipt reports the genuine level-wide open work rather than the earlier mechanical all-pending failure.

## Blockers

Group d is blocked only by the two terminal mathematical defects in `def-combinatorial-specification-and-order-raising-recursion` and `thm-eulerian-recurrence`. They require owner/session terminal resolutions bound to their exact current item and context hashes; Alpha may not repair them or dispatch a third judge cycle.
