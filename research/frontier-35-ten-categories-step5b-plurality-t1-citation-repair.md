# Step 5b: plurality example at `t=1`

`ex-plurality-decoding-of-powered-local-views` fixes `t=1` and counts eight length-one walk patterns. Its former Fact F2 imported the positive conditional consistency bound of `lem-plurality-consistency-along-middle-walk-positions`, whose Statement assumes `t≥4`. That hypothesis fails in this example; the citation did not justify F2.

The example's numerical claim and verification need only the plurality-decoding definition: it counts patterns with multiplicity and uses the fixed order only for tied maxima. I removed the inapplicable lemma dependency and replaced F2 with exactly those two clauses. The Example section, eight claims, frequencies and output `a` are unchanged. The batch-12 proof contract, page manifest and plan item now list only the decoding definition. The B-page prose already describes just that numerical calculation, so it needs no change. Since the Example interface is unchanged, this repair creates no further direct-consumer event.

Raw item SHA-256: `314d649900b7c25ca27127d137d6c68d6897c1e528b667977fefdbf9cd9c311f` → `dda0b6aceed3f9d5bc36d5208d6d1b15fa53af0589210bfba78d17e9d6d772d8`. Current item guard: `f09055c4ac73fa3a12085d13361c16e85743d5d2aca51cf1bdcad870cee4116c`. Focused precheck passes 1/1; strict batch contract passes 55/55; full plan validation passes with its existing warnings.
