# Step-7 terminal owner-review draft: `thm-symplectic-neighborhood-theorem`

**Status:** DRAFT — mathematical owner review only; no judge verdict or terminal disposition recorded.

**Current Terra context SHA-256:** `8efc121c3f06607142bfcb9a4a1650007abfaff53b7d62dfa9b4c311a9bfda19`  
**Rejected-item SHA-256 (historical):** `52153355894aa349fa038b4b4d640f26177d95e2f0602783502795b7695cf675`  
**Proposed disposition:** `repair-required`

## Mathematical review

F2's Statement yields a tubular diffeomorphism of the quotient normal bundle fixed on the zero section, but not a prescribed full derivative. Arbitrary such maps may have a tangential shear in the vertical derivative, so composing them through the quotient map F need not yield dh=df⊕F. Step 1.1 asserts that exact differential without rerunning or proving a prescribed-complement construction. If it fails, Step 2.1's full tensor equality of forms along S is unsupported and relative Moser cannot start.

## Repair disposition

As in the coisotropic theorem, explicitly rerun the published tubular proof with the symplectic orthogonal complement N^omega S: the Euclidean-retraction map has dF_(p,0)(u,v)=di(u)+v, and its variable-radius injection proof works for any smooth direct-sum complement. Use those particular tubular maps to define h; then dh=df⊕F and the relative Moser steps apply.

## Implemented repair — draft owner evidence

**Repaired item SHA-256:** `03683b1e5fb6559187105dcc7c8ee25afbd7bc6a6827a9e83008cc2345ec3a2f`  
**State:** local repair implemented; terminal owner decision and judge verdict still pending.

Step 1.1 explicitly reruns the published Euclidean-retraction tubular proof with the symplectic normal complement rather than invoking only its quotient-normal existence Statement. The resulting tubular maps have dΨ_(p,0)(u,v)=di(u)+v, so h=Ψ1∘F∘Ψ0^{-1} has the prescribed full derivative and the forms agree as full tensors along S. Step 3.1 additionally explains the locally open time collar for relative Moser, including noncompact S. Batch 10 contract and boundary worksheet reflect both exact steps.
