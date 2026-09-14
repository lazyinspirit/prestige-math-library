# Owner terminal review: `def-set-theoretic-l-and-s-spaces`

**Decision:** `repaired`.

Terra correctly objected that the old L-space clause was broader than the standard set-theoretic topology usage: hereditarily Lindelöf plus merely “not hereditarily separable” does not say that the space itself is nonseparable.  The definition now requires an L-space to be regular Hausdorff, hereditarily Lindelöf, and nonseparable.  The S-space clause remains regular Hausdorff, hereditarily separable, and non-Lindelöf, while the strong clause still quantifies over every nonzero finite power; the empty power is deliberately excluded.

I checked this terminology against Justin Moore, *A solution to the L space problem*, arXiv source https://arxiv.org/pdf/math/0501524, especially the opening definition on printed page 1.  The repair narrows exactly the disputed clause and does not change the downstream Moore construction.

Exact frozen pre-review item SHA-256: `41fe4c7f2bbf1b5386e36b45c2d5b7c66e7ff939113fd32cae7a69780f869055`.  Current raw item SHA-256: `692d5e2e5c4c146217adbaab9be4b3ed3d0de6ad400eb10b0c0e2044eb981aef`.
