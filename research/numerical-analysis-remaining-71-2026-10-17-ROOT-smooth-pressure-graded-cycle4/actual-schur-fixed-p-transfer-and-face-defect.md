# Actual fixed-p Schur transfer and the all-p face defect

Research only, 18 October 2026. This supplements the actual near-two result; it does not establish the instantaneous pressure estimate. No canonical or workflow files are changed.

Let R be the full no-slip MINI mass projector, P0 cell averaging, B=P0(I−R)P0, Q_h the mean-zero pressure space, and G_h=∇Q_h. Let N_h be the L2-orthogonal projector onto G_h, extended to finite-dimensional moment functionals wherever these are defined. This is the **ordinary discrete Neumann gradient projector**, not the whole-space Fourier gradient projector.

## 1. Exact operator that must be estimated

The scalar mass-Schur problem with vector load F is

    (g−Bg,∇q_h)=(F,∇q_h),  g=∇φ_h∈G_h.

Consequently its exact gradient equation is

    g=N_h F+N_h B g.                                      (1)

If ||N_h B||_{G_h∩Lp→G_h∩Lp}<1 and N_h F has an appropriate Lp bound, the Neumann series in (1) gives the desired actual Schur estimate. A sufficient, stronger hypothesis is ||N_h||Lp ||B||Lp<1. The new explicit B constants improve the second factor. They do not identify the first factor with the whole-space estimate p*−1.

The precise residual on attempting a continuous replacement is also elementary. Put H=g−Bg−F. Discrete orthogonality gives (H,∇J_hψ)=0, and hence

    (H,∇ψ)=(H,∇(ψ−J_hψ)).                                (2)

For general W1,p' tests, interpolation stability bounds the right side by C||H||Lp||ψ||W1,p'; it does not give a small factor. Positive-order local approximation gives a factor h_K^s only for more regular tests. Therefore (2) cannot be discarded in a whole-space or bounded-domain contraction argument. This observation is an exact identification of the transfer term, not a counterexample to a possible restricted bound for N_h B.

## 2. All-p weighted face-defect equivalence on the actual mesh

For a cellwise constant vector field g and 1≤p<∞, define

    J_p(g)^p=Σ_{F interior} h_F ||[g]||Lp(F)^p
             +Σ_{F boundary} h_F ||g||Lp(F)^p.

On the original matching shape-regular simplicial meshes,

    c_p J_p(g) ≤ ||(I−R)g||Lp(D) ≤ C_p J_p(g),             (3)

with constants independent of all local mesh sizes and their global ratio. Here the full MINI projector's already-established Lp boundedness is used in the upper estimate. The analogous max-norm statement holds with J_infty equal to the largest interior jump or boundary value.

For the lower estimate, e=(I−R)g is a polynomial of uniformly bounded degree on each simplex. Continuity of Rg gives [e]=[g] on interior facets, and its no-slip condition gives e=g on boundary facets. The polynomial inverse trace inequality on the adjoining simplex or simplices gives h_F||[g]||Lp(F)^p≤CΣ_{K touching F}||e||Lp(K)^p. Summing uses only the fixed number of faces per simplex. The same argument with sup norms proves the max-norm lower estimate.

For the upper estimate, define A_hg by averaging adjacent cell values at each interior vertex and assigning zero at boundary vertices, then interpolate affinely. Adjacent values in each vertex patch are connected by a uniformly bounded chain of face-adjacent simplices; for a boundary vertex the chain can terminate at a boundary face. Matching shape regularity bounds the patch cardinality, diameter ratios inside a patch, and patch overlap. Finite-dimensional affine scaling and these chains give ||g−A_hg||Lp≤C J_p(g), including the corresponding max estimate. Since A_hg belongs to the full no-slip MINI space, (I−R)A_hg=0. Applying the bounded operator I−R to g−A_hg proves the upper bound in (3).

Cell averaging is Lp contractive, so an immediate valid consequence is

    ||Bg||Lp≤||(I−R)g||Lp≤C_p J_p(g).                     (4)

This gives an actual all-p face representation of the defect channel. It retains the factor h_F in (3). Neither (3) nor (4) gives an unweighted boundary/face trace estimate, a physical fractional derivative, or a pressure observation bound. A generated Rellich argument would still have to supply that additional gain.

## 3. Source and proof scope

The actual scalar Schur identity and the L2 face-defect equivalence are recorded in `../numerical-analysis-remaining-71-2026-10-17-ROOT-mini-structured-observation/REPORT.md`, section 6. The new all-p extension above uses only its exact continuity and boundary identities, local polynomial scaling, vertex averaging, and the actual full-MINI all-Lp projector result. The whole-space vector projection calculation in `../numerical-analysis-remaining-71-2026-10-17-ROOT-smooth-pressure-source-cycle4/whole-space-vector-gradient-projection-l3.md` was inspected in full; it is not used as a bounded-domain or discrete supplier here.
