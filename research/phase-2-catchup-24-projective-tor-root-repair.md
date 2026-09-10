# Projective Tor vanishing: local repair

Root, 2026-09-10 Sydney. Target:
`prop-positive-tor-vanishes-when-the-resolved-variable-is-projective`.

The Step3b-c escalation is valid: the old proof computes only the identity
resolution, while the claim covers a supplied arbitrary resolution. Root read
the complete target, both resolution definitions, the projective-resolution
definition, projective-module definition, tensor universal-property proof and
projective-characterizations proof. Primary-source reading: complete Stacks
Lemma10.77.2, https://stacks.math.columbia.edu/tag/05CD. Only its splitting
idea is used; its global free-module/Ext equivalences are not imported as
choice-free results. An initial guessed tag00NT was unrelated and is not evidence.

Applied proof: for each fixed positive degree i, split the resolution's
syzygy surjections through i+1 using projectivity. Each kernel is projective
by the explicit retract lifting argument. Tensor the finite splitting identities;
for a cycle z the proof constructs the boundary witness
T(s_(i+1)) T(r_i) z. Both tensor hands are proved. This requires neither AC/DC
nor a choice of splittings in all degrees. The arbitrary-resolution claim is
preserved. No new unpublished prerequisite is needed.

New declared suppliers, both already published:
`def-projective-module`, `thm-universal-property-of-module-tensor-products`.
The two original Tor definitions remain. Canonical plan, completed batch5
manifest and homological-algebra prose are synchronized. No pair/inventory
change; all24 scope decisions remain closed. Cross-batch refresh and plan
validation pass. Precheck initially required canonical phase numbering;
that numbering and all references were adopted, then precheck and actual
KaTeX/YAML rendercheck passed. These are local checks, not an independent judge.
Old audit/judge stamps were replaced by an honest delegated local-repair record.

Final item SHA256:
`a48e93dbdb8cf1b18b07251ea3685977f0d13764ffb31a3a0ee95547e6b45216`.
Move this finding U-C→A-R. Other Tor findings remain open; this repair does
not establish their balanced-Tor comparison clauses. Subsequent exact-hash
checks must retain current decisions and expose genuinely affected consumers.
