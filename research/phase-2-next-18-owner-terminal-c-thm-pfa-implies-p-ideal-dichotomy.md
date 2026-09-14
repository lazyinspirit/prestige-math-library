# Owner terminal review: `thm-pfa-implies-p-ideal-dichotomy`

**Decision:** `repaired`.

Terra correctly flagged any inference that the external tuple $t_{r,N}$ belongs to $M$: its coordinates are precisely the points outside the side model.  The repair types the condition trace and states the derivative induction in its correct form.  If the external tuple first left the iterated derivative, the least bad fibre’s countable orthogonal decomposition is coded in the relevant model; clause 4 of the forcing then contradicts the outside point.  Only the subsequently chosen replacement tuple is built inside $M$.

I checked this against Justin Moore’s PFA tutorial, notes by Venturi, Lemma 4.3 and Claim 4.4 on printed pages 7–8, https://pi.math.cornell.edu/~justin/Ftp/Raach_notes.pdf, and the deduction of PID in Theorem 5.1 on pages 8–9.  The repaired proof now matches the source’s external-parameter argument.

Exact frozen pre-review item SHA-256: `d69ca13b7a0e331689a9692b50f9dad9241c7d2fa19667ec3f22bb4b7ebf4c3d`.  Current raw item SHA-256: `9d341caf202e6a971529314b659859697f94430502a5741c817b4e455bd1be7a`.
