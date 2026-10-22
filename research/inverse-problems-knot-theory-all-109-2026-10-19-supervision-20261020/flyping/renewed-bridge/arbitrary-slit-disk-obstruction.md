# Why a supplied abstract slit disk cannot force the bridge

Renewed development, `/root/flyping_bridge`, 2026-10-20. This is an obstruction to a generic proposed bridge theorem, not a counterexample to the actual normalized typeIII prism or to flyping.

Let M=S^1 times D^2. Fix two distinct boundary points p,q on one longitude S^1 times {r}, with r in the boundary of D^2. The longitude has two complementary embedded arcs from p to q; orient both from p to q and call them c_1,c_0. Their S^1-coordinate lift changes differ by one full turn. Push the interior of c_1 slightly into M to obtain beta_1; likewise obtain alpha_0 from c_0. The loop beta_1 followed by alpha_0 backwards represents a generator of pi_1(M), as is certified by projection to S^1.

The arc beta_1 can nevertheless be a proper arc in an embedded disk D. Take a sufficiently narrow boundary strip about c_1, round its endpoints, and push the strip's interior into a collar of the boundary torus while retaining its boundary on the torus. This is a properly embedded disk. Its middle arc from its p-end to its q-end is beta_1 (with endpoint positions adjusted within arbitrarily small fixed windows). Cutting D along beta_1 gives two disks with fully well-defined banks and boundary words.

There is no homotopy from beta_1 to alpha_0 relative to their endpoints, hence no embedded bridge rectangle with those fixed endpoint adapters and those two opposite sides: an embedded rectangle would itself provide such a homotopy. Bank preservation is a stronger condition and cannot remove this obstruction. The obstruction persists when all endpoint adapters are recorded as fixed data.

Thus even an actual embedded slit disk and its two named banks do not by themselves prove a bridge to a fixed axis in a tube complement. The actual typeIII geometry must determine the relative arc class as well as the bank transport. The direct cut-ball construction avoids this unnecessarily strong generic assertion; it still needs the actual face-cycle calculation.
