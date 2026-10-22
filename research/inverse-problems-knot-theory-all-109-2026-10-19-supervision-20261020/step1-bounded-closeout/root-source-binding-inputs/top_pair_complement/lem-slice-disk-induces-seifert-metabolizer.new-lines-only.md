<!-- new lines at canonical 27 -->
  - thm-smooth-singular-chains-compute-singular-homology
  - thm-compact-topological-three-manifolds-admit-finite-pl-triangulations

<!-- new lines at canonical 34 -->
  proof: ai-altered

<!-- new lines at canonical 69 -->
[F5] For the given locally flat slice disk the hypersurface supplier constructs the compact oriented locally flat Seifert three-manifold with an actual two-sided product and positive-push alignment. Its pre-collar-push model meets the outer sphere in $F$, with the stated product corners at $K$. Its smooth branch remains the previously supplied smooth construction; its TOP branch explicitly imports separate relative normal-bundle and microbundle-transversality theorems. [[lem-locally-flat-slice-surface-bounds-seifert-hypersurface]]

<!-- new lines at canonical 71 -->
[F6] Smooth chains compute continuous real homology, including for a smooth manifold with boundary. This is invoked below only in smooth ambient neighborhoods, not by treating a locally flat $R$ as an already smooth submanifold. [[thm-smooth-singular-chains-compute-singular-homology]]

<!-- new lines at canonical 73 -->
[F7] Under full AC a compact TOP three-manifold has a finite compatible PL triangulation, with boundary a subcomplex. In particular its Betti numbers and Euler characteristic are finite. This is intrinsic to the three-manifold and does not smooth its embedding in the four-ball. [[thm-compact-topological-three-manifolds-admit-finite-pl-triangulations]]

<!-- new lines at canonical 85 -->
3.1 For the arbitrary locally flat disk use the TOP $R$ and its actual product from [F5]. The duality and pair-sequence computation of steps1.1–1.2 applies to this compact oriented TOP three-manifold: [F7] supplies finite homology and Euler characteristic, [F2] applies in the TOP category, and the double has Euler characteristic zero by oriented odd-dimensional Poincaré duality. Thus, without putting a smooth structure on the embedding, the rational kernel $L=\ker(H_1(F;\mathbb Q)\to H_1(R;\mathbb Q))$ has dimension $g$. [A1, F2, F5, F7, step 1.1, step 1.2, algebra]

3.2 Represent $x,y\in L$ by finite rational smooth cycles in the given $F$, away from $K$, and choose finite rational CONTINUOUS bounding chains in $R$. Use its pre-collar-push model and the actual positive normal product of [F5]. Push the first chain into the positive complementary side, with boundary the actual positive Seifert push $x^+$; leave the second chain in $R$ with boundary $y$. An intrinsic boundary-collar push of their interiors and the common product near $F$ give the usual collared bounding chains in $B^4$, missing the corner $K$. Their supports are disjoint compact sets by the actual two-sided product. Choose disjoint relatively open smooth ambient neighborhoods $U,V\subset B^4$ of those supports, including their boundary cycles; these are smooth manifolds with boundary as open subsets of the standard smooth ball. In $U$, [F6] makes the smooth cycle $x^+$ bound a finite smooth real chain, since it bounds continuously there; likewise $y$ bounds in $V$. In each finite set of occurring simplices the equations for the boundary coefficients are rational, so rational Gaussian elimination replaces the real coefficients by rational ones without enlarging support. Near $S^3$, move the interiors inward and attach the standard product of the fixed boundary cycle with the collar interval. This puts both chains in common standard end collars, still in disjoint $U,V$. They therefore have empty interior intersection, and [F3] gives $V_{\mathbb Q}(x,y)=\operatorname{lk}(x^+,y)=0$. The smoothing here concerns only chains in the disjoint SMOOTH ambient regions; it assumes no smooth structure on $R$ or its TOP normal chart. [F1, F3, F5, F6, step 3.1, construct, algebra]

3.3 Apply the unchanged integral-saturation result [F4] to this $g$-dimensional rational isotropic subspace: $M=H_1(F;\mathbb Z)\cap L$ is a primitive rank-$g$ direct summand with $V|_{M\times M}=0$. This proves the full locally flat Statement, with the external geometric inputs explicitly located in [F5]'s hypersurface supplier and the resolved smooth/rank/saturation arguments retained. [F4, step 3.1, step 3.2, algebra] ∎

