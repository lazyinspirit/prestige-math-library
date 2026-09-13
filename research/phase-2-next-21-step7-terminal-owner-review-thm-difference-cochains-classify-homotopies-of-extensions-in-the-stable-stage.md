# Owner-review draft: `thm-difference-cochains-classify-homotopies-of-extensions-in-the-stable-stage`

Disposition: **repair-required**. This is a read-only review draft, not a Step-7 verdict or terminal record.

Terra context: `a1f500d6d8eff749d48f7b0b54a1c5816db79eec10b13bea9776d3bb7c9afcfe`. Terra-reviewed item SHA-256: `1b833865915e80dfcf11ff8203fa1327697f189b2e72474e15cdb7b75411494b`.

Mathematical basis: For fixed endpoint maps and fixed lower-skeleton homotopy H, the prism obstruction is the actual cochain d(g_0,H,g_1). Vanishing only of [d] requires changing H by a lower-stage homotopy to subtract a coboundary. F4 supplies modifications of n-stage maps after a vanishing obstruction but expressly no homotopy on that skeleton; Step 2.1 neither constructs the required change of H nor shows it preserves both endpoints.

Action: Build the missing (n−1)-prism adjustment: if d=δc, realize −c by a homotopy-of-homotopies on the lower prism cells rel endpoint and A faces, prove the new prism obstruction cochain is zero, and extend over each n-prism. Alternatively cite a prior theorem that establishes precisely this fixed-endpoint realization.

## Repair applied; pending owner rejudge

Current repaired item SHA-256: `ef164353b8c7668f0cb8cfa7fa4513407ded1c2ac25dd2bd0d2d6ebf1eac4d0b`. When d=δc, inserted −c into interiors of lower prism cells rel all endpoint faces; the oriented prism boundary changes the actual obstruction cochain to zero before filling the n-prisms.

Focused precheck and rendercheck passed for the 12-item B/C repair set. Strict proof contracts passed for Batches 2, 5, and 6 with zero errors/warnings; Batch 3 passed with zero errors and one pre-existing unrelated shotgun-bracket warning. No verdict or terminal record is issued by this draft.
