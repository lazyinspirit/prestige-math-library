# Owner-review draft: `thm-cellular-cochains-compute-cohomology-with-local-coefficients`

Disposition: **repair-required**. This is a read-only review draft, not a Step-7 verdict or terminal record.

Terra context: `8858e2e059afa466a97d6baf73b0075e77307986dd1794e2ac6c84bd319bbb6c`. Terra-reviewed item SHA-256: `5d3d567f4a6ebe8166ddbe9520e27ed71e41a8784daf0b50e7b75472a6efec08`.

Mathematical basis: Step 1.1 says local homology subdivision from F2, precomposed on cochains, proves local cohomological excision. F2 proves a homology comparison; F3’s excision source covers only constant coefficients. Chain-dependent subdivision powers do not automatically give one cochain homotopy equivalence, especially for arbitrary coefficient modules. Therefore the local cohomological skeletal concentration used in Steps 2.1/3.1 lacks a demonstrated exact interface.

Action: Prove local-coefficient cochain excision explicitly at the small-chain inclusion level, including compatible subdivision/prism homotopies and cochain restriction, or add an earlier published local-cohomology excision supplier. Then rerun the skeletal concentration and telescope argument with those cochain maps.

## Repair applied; pending owner rejudge

Current repaired item SHA-256: `a114eb5158f6be7320fb2d63ae24775f11c55adbff3a88020eba3b1a3f74d500`. Made the earlier local-coefficient cohomological excision/Mayer–Vietoris theorem a direct F5 supplier for skeletal concentration and the telescope; moved that supplier before this item in the B5 page manifest.

Focused precheck and rendercheck passed for the 12-item B/C repair set. Strict proof contracts passed for Batches 2, 5, and 6 with zero errors/warnings; Batch 3 passed with zero errors and one pre-existing unrelated shotgun-bracket warning. No verdict or terminal record is issued by this draft.
