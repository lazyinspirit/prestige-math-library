# Step 7 terminal owner review — thm-reduced-powers-satisfy-naturality-instability-cartan-and-adem-relations

Disposition: repaired. Frozen Terra rejection: Step 4.1 drops F5's factor (-1)^{p(p-1)q/2}: even coefficient indices only make jk even. For p≡3 mod 4 and odd q this factor is -1, so the asserted sign-free row/column comparison is false.

Current raw item SHA-256: cde908a6cbbdd3a6ee5cfaf4ff05a22605ac1ab4bd24cbd62952455930e9fc66. The current item, its batch manifest and strict proof contract have been reconciled. This is owner mathematical evidence for the single paid-cycle closure, not a new judge verdict.

## Mathematical basis

The following completed specialist review and repair note is adopted as the item-specific owner mathematical basis; its earlier DRAFT label refers only to the prior absence of an owner terminal record.

# Owner-review draft: `thm-reduced-powers-satisfy-naturality-instability-cartan-and-adem-relations`

Disposition: **repair-required**. This is a read-only review draft, not a Step-7 verdict or terminal record.

Terra context: `da337b9ba7341e3de0c45790d88082f40a492501a7cb2a10ae9f4180179b440b`. Terra-reviewed item SHA-256: `41a2669d2fea1a74c3cdd1e6cb89a5c0534fd8e408afbf0c88a718ef2c454c82`.

Mathematical basis: F5 gives transposition sign (−1)^{jk+p(p−1)q/2}=(−1)^{jk+m q} for odd p, m=(p−1)/2. Step 4.1 drops the second factor merely because even coefficient indices make jk even; at p≡3 mod 4 and odd q the omitted factor is −1. Steps 5.1/5.2, however, use even starting degrees Q, so the global factor is +1. Their even-even and mixed rows have jk even; the odd-odd row has sign −1 but is unused. Step 6.1 descends identities to every degree via P^j(x×z)=P^j x×z, βz=0, and Künneth injectivity.

Action: Restrict Step 4.1’s row-comparison conclusion to even q and display the full F5 sign before simplifying. State that only even-even and mixed rows are used. Keep the even Q in Steps 5.1/5.2; Step 6.1 may specify a finite regular triangulated circle to keep its category exact.

## Repair applied; pending owner rejudge

Current repaired item SHA-256: `cde908a6cbbdd3a6ee5cfaf4ff05a22605ac1ab4bd24cbd62952455930e9fc66`. Restored F5’s global factor (−1)^{p(p−1)q/2}=(−1)^{mq}; restricted row comparison to even Q as actually used in Steps 5.1/5.2, and left odd degrees to the circle descent.

Focused precheck and rendercheck passed for the 12-item B/C repair set. Strict proof contracts passed for Batches 2, 5, and 6 with zero errors/warnings; Batch 3 passed with zero errors and one pre-existing unrelated shotgun-bracket warning. No verdict or terminal record is issued by this draft.


## Owner conclusion

The exact rejected defect is either repaired in the current item or, for an unchanged item, rejected after a concrete source-level review documented above. The current item remains subject to the run's structural gates; any later mathematical change invalidates this hash-bound owner resolution.
