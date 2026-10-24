# Abstract Algebra existing-diagram check — round 2, lane 02

## Reviewed item

`thm-polynomial-weyl-algebra-normal-ordered-basis` — **checked correct**. I read the bound snapshot and viewed all three listed screenshot tiles at original resolution. The quotient diagram appears on tile 03.

The displayed directions match the source construction. The left vertical map is \(\Phi:T_k(\mathfrak h_n)\to T_k(E_n)\), induced by \(X_i\mapsto x_i\), \(P_i\mapsto p_i\), and \(Z\mapsto\hbar1\), with \(x_i,p_i\) in the degree-one part of the tensor algebra. The middle vertical map is \(\rho:U(\mathfrak h_n)\to W_n(k;\hbar)\), induced by the same assignment. The right vertical isomorphism points from \(Q_\hbar\) to \(W_n(k;\hbar)\), as does the map induced by the assignment in the statement.

The left square commutes because both composites agree on the generators \(X_i,P_i,Z\) and the unit: \(\rho\circ\pi_U=\pi_W\circ\Phi\). The right square commutes because the isomorphism \(Q_\hbar\to W_n(k;\hbar)\) is precisely the factor of \(\rho\) through \(\pi_\hbar\), while the lower map is the identity on \(W_n(k;\hbar)\). No map-direction or square-commutativity mismatch was found.

The exact check and screenshot paths are recorded in [lane-02.json](lane-02.json).
