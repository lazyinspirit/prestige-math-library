# Reconstructing every projected dome side from physical traces

Renewed development, `/root/flyping_bridge`, 2026-10-20. This removes the freedom to choose an unlisted second local patch for a named global lower disk. It does not replace the actual normal-trace crossing calculation by a picture.

Let Gamma be the actual boundary circle of one global proper lower graph disk, and Delta its chosen projected domain on the reference sphere. Let A be the connected thin annulus, with all actual projected Gamma traces retained. Choose z in an inner white part of A where the full-fibre condition F intersect pi^{-1}(z)={the X point} holds. Therefore z is outside Delta: a point inside Delta would contribute the lower graph point in that fibre as well.

For p off Gamma choose any path eta in A from z to p, transverse to Gamma and missing the finite marked vertices. Then

$$
\mathbf1_{\Delta}(p)=\#(\eta\cap\Gamma)\pmod2.
$$

Proof: the characteristic function starts at zero, is constant between crossings, and changes at each transverse crossing of the actual Jordan boundary. This also proves that the parity is independent of the chosen path. No assumption about equality of upper and lower counts is involved.

More generally two proposed domain-side assignments with the same complete boundary trace in connected A have locally constant difference modulo two, even across those common traces, because both toggle there. The difference is zero at z, hence zero throughout A. Thus a named global disk cannot be assigned a second local patch independently of its other patches. Repeated local appearances of one global disk must use the SAME parity function, calculated against the union of all its actual trace occurrences.

Apply the formula separately to every global lower disk. The resulting vector of zeroes and ones at p gives the full list of graph sheets above p. An entirely unlisted boundary circle disjoint from A gives a constant function there, necessarily zero at the white basepoint and therefore zero everywhere. For a listed circle, the actual crossing list determines every occupied wall gap; no additional domain side can be selected by naming a whole disk differently.

For the proposed typeIII construction the needed crossing signatures are the following:

| Actual wall gap | Needed occupied local sheet occurrences |
| --- | --- |
| outer, between O and E1 | W1 and B1 |
| outer, between U and O | W1 |
| inner, between E0 and O | B0 |
| outer, left of E0 | W0 |

A certificate must give the actual transverse path(s) and the ordered physical trace crossings proving these signatures, with global circle identities retained when local pieces share a label. Once supplied, these signatures give the exact nesting/chamber witnesses proved in `local-witness-chamber-certificate.md`. Subdividing a crossed physical face interval does not change parity, but deleting a crossing because two occurrences have the same whole-disk label can change parity and is forbidden.

The lemma is proved here. The four signatures are the remaining finite readout to check from the literal typeIII normal cells; this note does not declare them checked merely because they match Figure31.
