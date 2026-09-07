# FA terminal evidence — queue d/3

Item: `lem-gradient-flow-identifies-the-local-and-global-attaching-regions`.
Decision: repaired. Source status: verified.

Read independently: current item and all four direct dependencies in full,
sublevel-deformation A/B pages, batch-16 manifest entry, coverage and notes
conventions, exact proof contract and critical-risk record, both Terra records,
Sol's exact adjudication and group-d repair report. The page fixes a smooth
function on a boundaryless ambient manifold, M_t as a level (not sublevel),
compact closed bands, negative-square Morse index, and AC_omega where needed.
The first rejection was valid; Sol added the nondegenerate point and its index.
The final rejection correctly distinguishes the constructed adapted descending
field from a gradient for a specified metric. I changed the title to
“Descending flow identifies the local and global attaching regions”, retaining
the stable ID and full mathematical claim, and synchronized the manifest.

I also made the empty-band case explicit before taking a positive minimum,
and replaced the automatic collar-matching inference by an explicit compatible
choice of descending fields. Equal functions alone do not force independently
chosen flow charts to coincide. On the region where the modified function and
f agree, Z descends for both. The same partition construction used in F2
patches it with a descending field for the modified function, retaining Z
near the chart interface; normalization preserves agreement there. Uniqueness
of integral curves makes the resulting collar charts agree wherever their
flow neighborhoods overlap there. The proof contract now contains the exact
revised rows and their F2/F4 uses. No dependency was edited.

Independent transport check: on the nonempty compact regular band the positive
continuous function -df(X) has a positive minimum. The normalized field has
df(Z)=-1; trajectories starting at level c-epsilon remain in the compact band
for the full time c-epsilon-a, hence continue to level a. The reverse flow
is smooth and inverse. Composition with the entire compact tube embedding,
including its boundary, therefore remains an embedding. Its differential
induces an isomorphism on the normal bundle of the attaching sphere inside
the level, so the disk-coordinate framing is transported. This is not a claim
about metric orthogonality. Empty attaching sphere (k=0), zero-dimensional
disk factor (k=n), empty band, and n=0 are harmless. The complementary modified
regular collar is supplied by F1; regular transport is supplied by F3, with
existence/uniqueness/smoothness from F4. No orientation or transversality is used.

Authoritative source verification:
https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20%281%29.pdf
(Benedetti, Lectures on Differential Topology; browser redirects to
https://poisson.phc.dm.unipi.it/~camponovo/1907.10297%20(1).pdf).
Read the complete Cylinder Lemma 9.1 proof, printed pp.177–178, and the complete
Proposition 9.3 proof and Remark 9.4, pp.179–182. Lemma 9.1 supports compact
regular-band flow products; Remark 9.4 explicitly transports the attaching
map by composing with a level diffeomorphism. Proposition 9.3 supplies the
modified-function regular-collar context. The printed norm normalization in
Lemma 9.1 does not give unit rate; the local proof correctly uses -df(X) and
checks the rate directly. The source's flat-profile parametrization is not
imported: F1 proves its own smooth positive-radius construction, which I read.

Validation: focused precheck 1/1 passed; strict item-restricted batch-16
proof-contract check passed with 0 errors and 0 warnings; focused rendercheck
passed. No new lemma, prerequisite repair licence, third judgment, or pass
stamp was made. Unresolved obligations: none. Next: record these final bytes,
then start queue item 4 only after successful recording.
